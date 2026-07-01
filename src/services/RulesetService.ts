import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  type CollectionReference,
  type DocumentReference,
} from 'firebase/firestore';
import { db } from '@config/firebase';
import type { Ruleset } from '@/types/ruleset';

/**
 * Firestore path structure:
 *   User rulesets:   users/{uid}/rulesets/{rulesetId}
 *   Global presets:  rulesets/{rulesetId}
 */
export class RulesetService {
  // ---- Path builders ----

  private static userRulesetsCol(uid: string): CollectionReference {
    return collection(db, 'users', uid, 'rulesets');
  }

  private static userRulesetDoc(uid: string, rulesetId: string): DocumentReference {
    return doc(db, 'users', uid, 'rulesets', rulesetId);
  }

  private static globalPresetsCol(): CollectionReference {
    return collection(db, 'rulesets');
  }

  private static globalPresetDoc(rulesetId: string): DocumentReference {
    return doc(db, 'rulesets', rulesetId);
  }

  // ---- Hydration ----

  private static hydrateRuleset(raw: Record<string, unknown>): Ruleset {
    const r = raw as unknown as Ruleset;
    return {
      ...r,
      optionalRules: {
        ...r.optionalRules,
        flaws: r.optionalRules?.flaws ?? false,
      },
      validationSettings: {
        ...r.validationSettings,
        maxFlaws: r.validationSettings?.maxFlaws ?? 2,
      },
    };
  }

  // ---- Read ----

  static async getUserRulesets(uid: string): Promise<Ruleset[]> {
    const snapshot = await getDocs(this.userRulesetsCol(uid));
    return snapshot.docs.map((d) => this.hydrateRuleset({ id: d.id, ...d.data() }));
  }

  static async getGlobalPresets(): Promise<Ruleset[]> {
    const q = query(this.globalPresetsCol(), where('visibility', '==', 'global'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => this.hydrateRuleset({ id: d.id, ...d.data() }));
  }

  /** Fetch a single global preset by ID (e.g. when resolving a CampaignRulesetLink). */
  static async getGlobalPreset(rulesetId: string): Promise<Ruleset | null> {
    const snapshot = await getDoc(this.globalPresetDoc(rulesetId));
    if (!snapshot.exists()) return null;
    return this.hydrateRuleset({ id: snapshot.id, ...snapshot.data() });
  }

  /** Fetch a user-owned ruleset by ID. Returns null if not found. */
  static async getRuleset(uid: string, rulesetId: string): Promise<Ruleset | null> {
    const snapshot = await getDoc(this.userRulesetDoc(uid, rulesetId));
    if (!snapshot.exists()) return null;
    return this.hydrateRuleset({ id: snapshot.id, ...snapshot.data() });
  }

  // ---- Write ----

  static async createRuleset(
    uid: string,
    ruleset: Omit<Ruleset, 'id' | 'version' | 'createdAt' | 'updatedAt'>,
  ): Promise<Ruleset> {
    const now = new Date().toISOString();
    const data: Omit<Ruleset, 'id'> = {
      ...ruleset,
      version: 1,
      createdAt: now,
      updatedAt: now,
    };

    const docRef = await addDoc(this.userRulesetsCol(uid), data as unknown as Record<string, unknown>);
    return { id: docRef.id, ...data };
  }

  static async updateRuleset(
    uid: string,
    rulesetId: string,
    changes: Partial<Omit<Ruleset, 'id' | 'version' | 'createdAt' | 'ownerId'>>,
  ): Promise<Ruleset> {
    const existing = await this.getRuleset(uid, rulesetId);
    if (!existing) {
      throw new Error(`Ruleset not found: ${rulesetId}`);
    }

    const updated: Ruleset = {
      ...existing,
      ...changes,
      version: existing.version + 1,
      updatedAt: new Date().toISOString(),
    };

    await updateDoc(this.userRulesetDoc(uid, rulesetId), updated as unknown as Record<string, unknown>);
    return updated;
  }

  static async deleteRuleset(uid: string, rulesetId: string): Promise<void> {
    await deleteDoc(this.userRulesetDoc(uid, rulesetId));
  }

  // ---- Campaign sync ----

  /**
   * Replaces a character's embedded ruleset snapshot with the campaign's current ruleset.
   * Call this when a player accepts a ruleset sync prompt.
   * The caller is responsible for persisting the updated character to Firestore.
   */
  static syncCharacterRuleset(
    _characterRuleset: Ruleset,
    campaignRuleset: Ruleset,
  ): Ruleset {
    return { ...campaignRuleset };
  }
}
