import { PlaySessionService } from '@services/PlaySessionService';
import type { PlaySessionDoc } from '@/types/playSession';

jest.mock('firebase/firestore', () => {
  class Timestamp {
    constructor(
      private _seconds: number,
      private _nanoseconds: number,
    ) {}
    toDate() {
      return new Date(this._seconds * 1000);
    }
  }
  return {
    collection: jest.fn(),
    doc: jest.fn(),
    getDocs: jest.fn(),
    getDoc: jest.fn(),
    setDoc: jest.fn(),
    updateDoc: jest.fn(),
    deleteDoc: jest.fn(),
    serverTimestamp: jest.fn(() => 'mock-timestamp'),
    Timestamp,
  };
});

jest.mock('@config/firebase', () => ({ db: {} }));

const mockFirestore = require('firebase/firestore');

// ── Helpers ──────────────────────────────────────────────────────────────────

function makeSessionDoc(overrides: Partial<PlaySessionDoc> = {}): PlaySessionDoc {
  return {
    characterId: 'char-1',
    userId: 'user-1',
    currentHP: 45,
    nonlethalDamage: 0,
    tempHP: 5,
    activeBuffs: [],
    combatAbilities: {
      powerAttack: false,
      deadlyAim: false,
      rage: false,
      twoWeaponFighting: false,
      twoWeaponFightingLightOffhand: false,
      haste: false,
      flurryOfBlows: false,
      combatExpertise: false,
      combatExpertisePenalty: 1,
    },
    spellSlotsUsed: {},
    preparedSpellsCast: {},
    resourcePools: {},
    round: 3,
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
    ...overrides,
  };
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('PlaySessionService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    PlaySessionService.cancelPendingUpdate();
  });

  // ── create ──────────────────────────────────────────────────────────────────

  describe('create', () => {
    it('calls setDoc with the correct subcollection path data', async () => {
      mockFirestore.setDoc.mockResolvedValue(undefined);

      const result = await PlaySessionService.create('user-1', 'char-1', {
        currentHP: 30,
        nonlethalDamage: 0,
        tempHP: 0,
        activeBuffs: [],
        combatAbilities: {
          powerAttack: false,
          deadlyAim: false,
          rage: false,
          twoWeaponFighting: false,
          twoWeaponFightingLightOffhand: false,
          haste: false,
          flurryOfBlows: false,
          combatExpertise: false,
          combatExpertisePenalty: 1,
        },
        spellSlotsUsed: {},
        preparedSpellsCast: {},
        resourcePools: {},
        round: 0,
      });

      expect(mockFirestore.doc).toHaveBeenCalledWith({}, 'users', 'user-1', 'sessions', 'char-1');
      expect(mockFirestore.setDoc).toHaveBeenCalledTimes(1);
      expect(result.characterId).toBe('char-1');
      expect(result.userId).toBe('user-1');
      expect(result.currentHP).toBe(30);
    });

    it('uses serverTimestamp for createdAt and updatedAt in Firestore', async () => {
      mockFirestore.setDoc.mockResolvedValue(undefined);

      await PlaySessionService.create('user-1', 'char-1', {
        currentHP: 20,
        nonlethalDamage: 0,
        tempHP: 0,
        activeBuffs: [],
        combatAbilities: {
          powerAttack: false,
          deadlyAim: false,
          rage: false,
          twoWeaponFighting: false,
          twoWeaponFightingLightOffhand: false,
          haste: false,
          flurryOfBlows: false,
          combatExpertise: false,
          combatExpertisePenalty: 1,
        },
        spellSlotsUsed: {},
        preparedSpellsCast: {},
        resourcePools: {},
        round: 0,
      });

      const docData = mockFirestore.setDoc.mock.calls[0][1];
      expect(docData.createdAt).toBe('mock-timestamp');
      expect(docData.updatedAt).toBe('mock-timestamp');
    });
  });

  // ── get ──────────────────────────────────────────────────────────────────────

  describe('get', () => {
    it('returns PlaySessionDoc when document exists', async () => {
      const session = makeSessionDoc();
      mockFirestore.getDoc.mockResolvedValue({
        exists: () => true,
        id: 'char-1',
        data: () => session,
      });

      const result = await PlaySessionService.get('user-1', 'char-1');

      expect(result).not.toBeNull();
      expect(result!.characterId).toBe('char-1');
      expect(result!.currentHP).toBe(45);
      expect(result!.round).toBe(3);
    });

    it('returns null when document does not exist', async () => {
      mockFirestore.getDoc.mockResolvedValue({ exists: () => false });

      const result = await PlaySessionService.get('user-1', 'no-such-char');
      expect(result).toBeNull();
    });

    it('deserializes Firestore Timestamp createdAt to ISO string', async () => {
      const session = makeSessionDoc({
        createdAt: { toDate: () => new Date('2026-03-01T12:00:00Z') } as unknown as string,
      });
      mockFirestore.getDoc.mockResolvedValue({
        exists: () => true,
        id: 'char-1',
        data: () => session,
      });

      const result = await PlaySessionService.get('user-1', 'char-1');
      expect(typeof result!.createdAt).toBe('string');
      expect(result!.createdAt).toContain('2026');
    });

    it('supplies defaults for missing optional fields', async () => {
      mockFirestore.getDoc.mockResolvedValue({
        exists: () => true,
        id: 'char-2',
        data: () => ({ userId: 'user-1', currentHP: 10 }),
      });

      const result = await PlaySessionService.get('user-1', 'char-2');
      expect(result!.activeBuffs).toEqual([]);
      expect(result!.spellSlotsUsed).toEqual({});
      expect(result!.resourcePools).toEqual({});
      expect(result!.round).toBe(0);
    });

    it('returns null for corrupt documents with non-numeric currentHP', async () => {
      mockFirestore.getDoc.mockResolvedValue({
        exists: () => true,
        id: 'char-corrupt',
        data: () => ({ userId: 'user-1', currentHP: 'not-a-number' }),
      });

      const result = await PlaySessionService.get('user-1', 'char-corrupt');
      expect(result).toBeNull();
    });
  });

  // ── update ───────────────────────────────────────────────────────────────────

  describe('update', () => {
    it('calls updateDoc with partial data and a server timestamp', async () => {
      mockFirestore.updateDoc.mockResolvedValue(undefined);

      await PlaySessionService.update('user-1', 'char-1', { currentHP: 22, round: 5 });

      expect(mockFirestore.updateDoc).toHaveBeenCalledTimes(1);
      const updateArg = mockFirestore.updateDoc.mock.calls[0][1];
      expect(updateArg.currentHP).toBe(22);
      expect(updateArg.round).toBe(5);
      expect(updateArg.updatedAt).toBe('mock-timestamp');
    });
  });

  // ── delete ───────────────────────────────────────────────────────────────────

  describe('delete', () => {
    it('calls deleteDoc', async () => {
      mockFirestore.deleteDoc.mockResolvedValue(undefined);

      await PlaySessionService.delete('user-1', 'char-1');

      expect(mockFirestore.deleteDoc).toHaveBeenCalledTimes(1);
    });
  });

  // ── listActiveSessionCharacterIds ─────────────────────────────────────────────

  describe('listActiveSessionCharacterIds', () => {
    it('returns character IDs for all active sessions', async () => {
      mockFirestore.getDocs.mockResolvedValue({
        docs: [{ id: 'char-a' }, { id: 'char-b' }, { id: 'char-c' }],
      });

      const ids = await PlaySessionService.listActiveSessionCharacterIds('user-1');
      expect(ids).toEqual(['char-a', 'char-b', 'char-c']);
    });

    it('returns empty array when no sessions exist', async () => {
      mockFirestore.getDocs.mockResolvedValue({ docs: [] });

      const ids = await PlaySessionService.listActiveSessionCharacterIds('user-1');
      expect(ids).toHaveLength(0);
    });
  });

  // ── debounced update ─────────────────────────────────────────────────────────

  describe('scheduleDebouncedUpdate + flushPendingUpdate', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      mockFirestore.updateDoc.mockResolvedValue(undefined);
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('does not call updateDoc before the delay elapses', () => {
      PlaySessionService.scheduleDebouncedUpdate('user-1', 'char-1', { currentHP: 30 }, 2500);
      jest.advanceTimersByTime(1000);
      expect(mockFirestore.updateDoc).not.toHaveBeenCalled();
    });

    it('calls updateDoc after the delay elapses', () => {
      PlaySessionService.scheduleDebouncedUpdate('user-1', 'char-1', { currentHP: 30 }, 2500);
      jest.advanceTimersByTime(3000);
      expect(mockFirestore.updateDoc).toHaveBeenCalledTimes(1);
    });

    it('resets the timer when called again before delay', () => {
      PlaySessionService.scheduleDebouncedUpdate('user-1', 'char-1', { currentHP: 30 }, 2500);
      jest.advanceTimersByTime(1000);
      // First timer has NOT yet fired (1000 < 2500)
      expect(mockFirestore.updateDoc).not.toHaveBeenCalled();
      PlaySessionService.scheduleDebouncedUpdate('user-1', 'char-1', { currentHP: 28 }, 2500);
      // Advance past the second call's 2500ms delay
      jest.advanceTimersByTime(3000);
      expect(mockFirestore.updateDoc).toHaveBeenCalledTimes(1);
      const updateArg = mockFirestore.updateDoc.mock.calls[0][1];
      expect(updateArg.currentHP).toBe(28);
    });

    it('flushPendingUpdate writes immediately and cancels the timer', async () => {
      PlaySessionService.scheduleDebouncedUpdate('user-1', 'char-1', { currentHP: 15 }, 2500);
      await PlaySessionService.flushPendingUpdate();
      expect(mockFirestore.updateDoc).toHaveBeenCalledTimes(1);
      // Advancing past the original delay should NOT fire a second write
      jest.advanceTimersByTime(3000);
      expect(mockFirestore.updateDoc).toHaveBeenCalledTimes(1);
    });

    it('flushPendingUpdate is a no-op when there is nothing pending', async () => {
      await PlaySessionService.flushPendingUpdate();
      expect(mockFirestore.updateDoc).not.toHaveBeenCalled();
    });

    it('keeps debounced writes isolated per session key', () => {
      PlaySessionService.scheduleDebouncedUpdate('user-1', 'char-1', { currentHP: 30 }, 2500);
      PlaySessionService.scheduleDebouncedUpdate('user-1', 'char-2', { currentHP: 10 }, 2500);
      jest.advanceTimersByTime(3000);
      expect(mockFirestore.updateDoc).toHaveBeenCalledTimes(2);
    });

    it('cancelPendingUpdate drops all queued writes', () => {
      PlaySessionService.scheduleDebouncedUpdate('user-1', 'char-1', { currentHP: 30 }, 2500);
      PlaySessionService.cancelPendingUpdate();
      jest.advanceTimersByTime(3000);
      expect(mockFirestore.updateDoc).not.toHaveBeenCalled();
    });
  });
});
