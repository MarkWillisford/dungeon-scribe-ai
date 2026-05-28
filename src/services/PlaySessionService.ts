import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '@config/firebase';
import type { PlaySessionDoc } from '@/types/playSession';
import { LEGACY_COMBAT_ABILITY_MIGRATION } from '@/types/buff';

type PlaySessionUpdate = Partial<
  Omit<PlaySessionDoc, 'characterId' | 'userId' | 'createdAt' | 'updatedAt'>
>;

const pendingUpdates = new Map<
  string,
  {
    userId: string;
    characterId: string;
    data: PlaySessionUpdate;
    timer: ReturnType<typeof setTimeout>;
  }
>();

function sessionKey(userId: string, characterId: string): string {
  return JSON.stringify([userId, characterId]);
}

export class PlaySessionService {
  private static sessionRef(userId: string, characterId: string) {
    return doc(db, 'users', userId, 'sessions', characterId);
  }

  private static collectionRef(userId: string) {
    return collection(db, 'users', userId, 'sessions');
  }

  static async create(
    userId: string,
    characterId: string,
    sessionData: Omit<PlaySessionDoc, 'characterId' | 'userId' | 'createdAt' | 'updatedAt'>,
  ): Promise<PlaySessionDoc> {
    const now = new Date().toISOString();
    const docData: PlaySessionDoc = {
      ...sessionData,
      characterId,
      userId,
      createdAt: now,
      updatedAt: now,
    };

    await setDoc(this.sessionRef(userId, characterId), {
      ...docData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return docData;
  }

  static async get(userId: string, characterId: string): Promise<PlaySessionDoc | null> {
    const docSnap = await getDoc(this.sessionRef(userId, characterId));
    if (!docSnap.exists()) return null;
    const data = docSnap.data() as Record<string, unknown>;
    if (typeof data.currentHP !== 'number') return null;
    return this.deserialize(userId, docSnap.id, data);
  }

  static async update(userId: string, characterId: string, data: PlaySessionUpdate): Promise<void> {
    await updateDoc(this.sessionRef(userId, characterId), {
      ...data,
      updatedAt: serverTimestamp(),
    });
  }

  static async delete(userId: string, characterId: string): Promise<void> {
    await deleteDoc(this.sessionRef(userId, characterId));
  }

  static async listActiveSessionCharacterIds(userId: string): Promise<string[]> {
    const querySnapshot = await getDocs(this.collectionRef(userId));
    return querySnapshot.docs.map((d) => d.id);
  }

  /**
   * Queue a debounced Firestore write per session. Replaces any previously
   * queued write for the same {userId, characterId}. Fires after delayMs of
   * inactivity for that session.
   */
  static scheduleDebouncedUpdate(
    userId: string,
    characterId: string,
    data: PlaySessionUpdate,
    delayMs = 2500,
  ): void {
    const key = sessionKey(userId, characterId);
    const existing = pendingUpdates.get(key);
    if (existing) clearTimeout(existing.timer);
    const mergedData: PlaySessionUpdate = existing ? { ...existing.data, ...data } : { ...data };
    const timer = setTimeout(() => {
      const pending = pendingUpdates.get(key);
      if (!pending) return;
      pendingUpdates.delete(key);
      void PlaySessionService.update(pending.userId, pending.characterId, pending.data).catch(
        (error) => {
          console.error('Failed to persist play session', error);
        },
      );
    }, delayMs);
    pendingUpdates.set(key, { userId, characterId, data: mergedData, timer });
  }

  /**
   * Immediately flush all pending debounced writes. Call when the app
   * transitions to background so sessions are persisted before suspension.
   */
  static async flushPendingUpdate(): Promise<void> {
    const entries = [...pendingUpdates.values()];
    pendingUpdates.clear();
    for (const entry of entries) {
      clearTimeout(entry.timer);
    }
    const results = await Promise.allSettled(
      entries.map((entry) =>
        PlaySessionService.update(entry.userId, entry.characterId, entry.data),
      ),
    );
    for (const result of results) {
      if (result.status === 'rejected') {
        console.error('Failed to flush play session', result.reason);
      }
    }
  }

  /** Discard all pending debounced writes without writing to Firestore. */
  static cancelPendingUpdate(): void {
    for (const entry of pendingUpdates.values()) {
      clearTimeout(entry.timer);
    }
    pendingUpdates.clear();
  }

  private static isPlainObject(v: unknown): v is Record<string, unknown> {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
  }

  private static deserialize(
    userId: string,
    characterId: string,
    data: Record<string, unknown>,
  ): PlaySessionDoc {
    const activeBuffs = Array.isArray(data.activeBuffs)
      ? (data.activeBuffs as PlaySessionDoc['activeBuffs'])
      : [];
    const combatAbilities = PlaySessionService.isPlainObject(data.combatAbilities)
      ? PlaySessionService.normalizeCombatAbilities(data.combatAbilities)
      : PlaySessionService.defaultCombatAbilities();
    const spellSlotsUsed = (
      PlaySessionService.isPlainObject(data.spellSlotsUsed)
        ? Object.fromEntries(
            Object.entries(data.spellSlotsUsed).map(([k, v]) => [
              k,
              Array.isArray(v) ? v : PlaySessionService.asNumber(v),
            ]),
          )
        : {}
    ) as Record<string, number[]>;
    const resourcePools = PlaySessionService.isPlainObject(data.resourcePools)
      ? Object.fromEntries(
          Object.entries(data.resourcePools).map(([k, v]) => [k, PlaySessionService.asNumber(v)]),
        )
      : {};
    return {
      characterId,
      userId,
      currentHP: (data.currentHP as number) ?? 0,
      nonlethalDamage: (data.nonlethalDamage as number) ?? 0,
      tempHP: (data.tempHP as number) ?? 0,
      activeBuffs,
      combatAbilities,
      spellSlotsUsed,
      preparedSpellsCast: PlaySessionService.isPlainObject(data.preparedSpellsCast)
        ? (data.preparedSpellsCast as Record<string, boolean>)
        : {},
      resourcePools,
      round: PlaySessionService.asNumber(data.round),
      createdAt: PlaySessionService.timestampToString(data.createdAt),
      updatedAt: PlaySessionService.timestampToString(data.updatedAt),
    };
  }

  private static asNumber(value: unknown, fallback = 0): number {
    return typeof value === 'number' && isFinite(value) ? value : fallback;
  }

  private static normalizeCombatAbilities(
    raw: Record<string, unknown>,
  ): PlaySessionDoc['combatAbilities'] {
    let activeToggles: Record<string, boolean> = {};
    if (raw.activeToggles && typeof raw.activeToggles === 'object') {
      const at = raw.activeToggles as Record<string, unknown>;
      for (const [k, v] of Object.entries(at)) {
        if (typeof v === 'boolean') activeToggles[k] = v;
      }
    } else {
      // Migrate from old flat-boolean format
      for (const [camelKey, featId] of Object.entries(LEGACY_COMBAT_ABILITY_MIGRATION)) {
        if (raw[camelKey] === true) activeToggles[featId] = true;
      }
    }
    return {
      activeToggles,
      twoWeaponFighting: typeof raw.twoWeaponFighting === 'boolean' ? raw.twoWeaponFighting : false,
      twoWeaponFightingLightOffhand:
        typeof raw.twoWeaponFightingLightOffhand === 'boolean'
          ? raw.twoWeaponFightingLightOffhand
          : false,
      combatExpertisePenalty: PlaySessionService.asNumber(raw.combatExpertisePenalty, 1),
    };
  }

  private static timestampToString(value: unknown): string {
    if (typeof value === 'string') return value;
    if (value && typeof (value as { toDate?: unknown }).toDate === 'function') {
      return (value as { toDate(): Date }).toDate().toISOString();
    }
    return new Date().toISOString();
  }

  private static defaultCombatAbilities(): PlaySessionDoc['combatAbilities'] {
    return {
      activeToggles: {},
      twoWeaponFighting: false,
      twoWeaponFightingLightOffhand: false,
      combatExpertisePenalty: 1,
    };
  }
}
