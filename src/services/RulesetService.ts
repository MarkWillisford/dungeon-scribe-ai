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
} from 'firebase/firestore';
import { db } from '@config/firebase';
import type { Ruleset } from '@/types/ruleset';

export class RulesetService {
  private static readonly USER_COLLECTION = 'rulesets'; // users/{uid}/rulesets/{id}
  private static readonly GLOBAL_COLLECTION = 'rulesets'; // top-level rulesets/{id}

  // ---- Read ----

  static async getUserRulesets(uid: string): Promise<Ruleset[]> {
    const ref = collection(db, 'users', uid, this.USER_COLLECTION);
    const snapshot = await getDocs(ref);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as Ruleset);
  }

  static async getGlobalPresets(): Promise<Ruleset[]> {
    const ref = collection(db, this.GLOBAL_COLLECTION);
    const q = query(ref, where('visibility', '==', 'global'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as Ruleset);
  }

  static async getRuleset(uid: string, rulesetId: string): Promise<Ruleset | null> {
    const ref = doc(db, 'users', uid, this.USER_COLLECTION, rulesetId);
    const snapshot = await getDoc(ref);
    if (!snapshot.exists()) return null;
    return { id: snapshot.id, ...snapshot.data() } as Ruleset;
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

    const ref = collection(db, 'users', uid, this.USER_COLLECTION);
    const docRef = await addDoc(ref, data as unknown as Record<string, unknown>);

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

    const ref = doc(db, 'users', uid, this.USER_COLLECTION, rulesetId);
    await updateDoc(ref, updated as unknown as Record<string, unknown>);

    return updated;
  }

  static async deleteRuleset(uid: string, rulesetId: string): Promise<void> {
    const ref = doc(db, 'users', uid, this.USER_COLLECTION, rulesetId);
    await deleteDoc(ref);
  }

  // ---- Campaign sync ----

  /**
   * Replaces a character's embedded ruleset snapshot with the campaign's current ruleset.
   * Call this when a player accepts a ruleset sync prompt.
   * The caller is responsible for persisting the updated character to Firestore.
   */
  static syncCharacterRuleset(
    characterRuleset: Ruleset,
    campaignRuleset: Ruleset,
  ): Ruleset {
    return { ...campaignRuleset };
  }
}
