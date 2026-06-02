import { FirebaseCharacterService } from '@services/FirebaseCharacterService';
import { Character } from '@/types';
import { CharacterService } from '@services/CharacterService';
import { Size, Alignment } from '@/types/base';
import { AbilityScoreMethod } from '@/types/character';

// Mock firebase/firestore
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
    addDoc: jest.fn(),
    updateDoc: jest.fn(),
    deleteDoc: jest.fn(),
    query: jest.fn(),
    where: jest.fn(),
    serverTimestamp: jest.fn(() => 'mock-timestamp'),
    Timestamp,
  };
});

jest.mock('@config/firebase', () => ({
  db: {},
}));

const mockFirestore = require('firebase/firestore');

const createTestCharacter = (): Character => {
  return CharacterService.createDefaultCharacter({
    name: 'Firestore Test Character',
    race: {
      name: 'Dwarf',
      sizeMod: Size.Medium,
      baseSpeed: 20,
      alternativeMovements: {},
      abilityModifiers: { con: 2, wis: 2, cha: -2 },
      traits: [],
      languages: ['Common', 'Dwarven'],
      bonusLanguages: [],
    },
    selectedClass: 'Fighter',
    abilityScoreMethod: AbilityScoreMethod.PointBuy,
    abilityScores: { str: 16, dex: 12, con: 14, int: 10, wis: 12, cha: 8 },
    alignment: Alignment.LawfulGood,
    deity: 'Torag',
  });
};

describe('FirebaseCharacterService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    test('should create character in Firestore', async () => {
      const character = createTestCharacter();

      mockFirestore.addDoc.mockResolvedValue({ id: 'firebase-doc-id' });

      const result = await FirebaseCharacterService.create('user-123', character);

      expect(mockFirestore.addDoc).toHaveBeenCalled();
      expect(result.info.userId).toBe('user-123');
      expect(result.info.firebaseId).toBe('firebase-doc-id');
    });
  });

  describe('getUserCharacters', () => {
    test('should return character summaries for user', async () => {
      const mockDocs = [
        {
          id: 'char-1',
          data: () => ({
            info: { name: 'Fighter Fred', race: { name: 'Human' } },
            classes: { totalLevel: 5, classes: [{ name: 'Fighter', level: 5 }] },
            updatedAt: { toDate: () => new Date('2024-01-01') },
          }),
        },
        {
          id: 'char-2',
          data: () => ({
            info: { name: 'Wizard Will', race: { name: 'Elf' } },
            classes: { totalLevel: 3, classes: [{ name: 'Wizard', level: 3 }] },
            updatedAt: { toDate: () => new Date('2024-01-15') },
          }),
        },
      ];

      mockFirestore.getDocs.mockResolvedValue({ docs: mockDocs });

      const result = await FirebaseCharacterService.getUserCharacters('user-123');

      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('Wizard Will'); // More recent first
      expect(result[1].name).toBe('Fighter Fred');
    });

    test('should return empty array when user has no characters', async () => {
      mockFirestore.getDocs.mockResolvedValue({ docs: [] });

      const result = await FirebaseCharacterService.getUserCharacters('user-123');
      expect(result).toHaveLength(0);
    });
  });

  describe('getCharacter', () => {
    test('should return character by ID', async () => {
      const character = createTestCharacter();
      const serialized = JSON.parse(JSON.stringify(character));
      // Simulate Firestore returning equippedSlots as a plain object
      serialized.equipment.equippedSlots = {};

      mockFirestore.getDoc.mockResolvedValue({
        exists: () => true,
        id: 'char-1',
        data: () => serialized,
      });

      const result = await FirebaseCharacterService.getCharacter('char-1');

      expect(result.info.name).toBe('Firestore Test Character');
      expect(result.info.firebaseId).toBe('char-1');
      expect(result.equipment.equippedSlots).toBeInstanceOf(Map);
    });

    test('should throw when character not found', async () => {
      mockFirestore.getDoc.mockResolvedValue({
        exists: () => false,
      });

      await expect(FirebaseCharacterService.getCharacter('nonexistent')).rejects.toThrow(
        'Character not found',
      );
    });

    test('does not fetch class docs when all class entries already have features', async () => {
      // createTestCharacter() creates a character with non-empty classFeatures
      // (getLevel1ClassFeatures returns at least the level-1 features for Fighter).
      // The merge guard must skip the Firestore class-doc fetch in this case.
      const character = createTestCharacter();
      const serialized = JSON.parse(JSON.stringify(character));
      serialized.equipment.equippedSlots = {};

      // Confirm the test precondition: features are non-empty.
      expect(serialized.classes.classes[0].classFeatures.length).toBeGreaterThan(0);

      mockFirestore.getDoc.mockResolvedValue({
        exists: () => true,
        id: 'char-no-class-fetch',
        data: () => serialized,
      });

      await FirebaseCharacterService.getCharacter('char-no-class-fetch');

      // Only one getDoc call should have been made: the character document itself.
      // No additional calls for class catalog documents.
      expect(mockFirestore.getDoc).toHaveBeenCalledTimes(1);
    });

    test('still fetches class docs when a class entry has empty features (legacy backfill)', async () => {
      const character = createTestCharacter();
      const serialized = JSON.parse(JSON.stringify(character));
      serialized.equipment.equippedSlots = {};
      // Simulate a legacy character whose classFeatures were never persisted.
      serialized.classes.classes[0].classFeatures = [];

      mockFirestore.getDoc
        .mockResolvedValueOnce({
          exists: () => true,
          id: 'char-legacy',
          data: () => serialized,
        })
        // The class doc lookup that follows — return empty so the merge is a no-op.
        .mockResolvedValueOnce({ exists: () => false });

      await FirebaseCharacterService.getCharacter('char-legacy');

      // Character doc + at least one class doc fetch.
      expect(mockFirestore.getDoc).toHaveBeenCalledTimes(2);
    });
  });

  describe('delete', () => {
    test('should delete character', async () => {
      mockFirestore.deleteDoc.mockResolvedValue(undefined);

      await expect(FirebaseCharacterService.delete('char-1')).resolves.toBeUndefined();
      expect(mockFirestore.deleteDoc).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    test('calls updateDoc and returns the refreshed character', async () => {
      const character = createTestCharacter();
      const serialized = JSON.parse(JSON.stringify(character));
      serialized.equipment.equippedSlots = {};

      mockFirestore.updateDoc.mockResolvedValue(undefined);
      mockFirestore.getDoc.mockResolvedValue({
        exists: () => true,
        id: 'char-update-1',
        data: () => serialized,
      });

      const result = await FirebaseCharacterService.update('char-update-1', character);

      expect(mockFirestore.updateDoc).toHaveBeenCalled();
      expect(result.info.firebaseId).toBe('char-update-1');
    });
  });

  describe('serializeForFirestore — companion equippedSlots', () => {
    test('passes companion equippedSlots Record through to Firestore', async () => {
      const character = createTestCharacter();
      // Add a companion with a Record for equippedSlots (type changed from Map)
      (character as unknown as Record<string, unknown>).companions = [
        {
          instanceId: 'comp-1',
          sourceEntryId: 'wolf',
          name: 'Wolf',
          grantedBy: {
            type: 'class',
            classEntryId: 'c1',
            className: 'Druid',
            classChoiceId: 'def-1',
          },
          effectiveProgressionLevel: 4,
          abilityScoreOverrides: {},
          hdAbilityIncreases: [],
          hp: { max: 20, current: 20, temp: 0, nonlethal: 0 },
          appliedTemplates: [],
          feats: [],
          tricks: [],
          skillRanks: {},
          equipment: {
            armor: [],
            weapons: [],
            magicItems: [],
            gear: [],
            equippedSlots: { neck: 'amulet-1' },
          },
        },
      ];

      mockFirestore.addDoc.mockResolvedValue({ id: 'new-char-id' });
      await FirebaseCharacterService.create('user-1', character as never);

      const docData = mockFirestore.addDoc.mock.calls[0][1];
      expect(docData.companions[0].equipment.equippedSlots).toEqual({ neck: 'amulet-1' });
      expect(docData.companions[0].equipment.equippedSlots).not.toBeInstanceOf(Map);
    });

    test('serializes character-level lastUpdated Date to ISO string', async () => {
      const character = createTestCharacter();
      (character as unknown as Record<string, unknown>).lastUpdated = new Date(
        '2024-06-01T00:00:00.000Z',
      );

      mockFirestore.addDoc.mockResolvedValue({ id: 'char-date-id' });
      await FirebaseCharacterService.create('user-1', character as never);

      const docData = mockFirestore.addDoc.mock.calls[0][1];
      expect(docData.lastUpdated).toBe('2024-06-01T00:00:00.000Z');
    });
  });

  describe('deserializeFromFirestore — companion equippedSlots and timestamps', () => {
    function mockGetDoc(data: Record<string, unknown>, id = 'char-deser-1') {
      mockFirestore.getDoc.mockResolvedValue({
        exists: () => true,
        id,
        data: () => data,
      });
    }

    test('deserializes companion equippedSlots plain object as Record', async () => {
      const character = createTestCharacter();
      const base = JSON.parse(JSON.stringify(character));
      base.equipment.equippedSlots = {};
      base.companions = [
        {
          instanceId: 'comp-2',
          sourceEntryId: 'wolf',
          name: 'Wolf',
          grantedBy: {
            type: 'class',
            classEntryId: 'c1',
            className: 'Druid',
            classChoiceId: 'def-1',
          },
          effectiveProgressionLevel: 4,
          abilityScoreOverrides: {},
          hdAbilityIncreases: [],
          hp: { max: 20, current: 20, temp: 0, nonlethal: 0 },
          appliedTemplates: [],
          feats: [],
          tricks: [],
          skillRanks: {},
          equipment: {
            armor: [],
            weapons: [],
            magicItems: [],
            gear: [],
            equippedSlots: { neck: 'amulet-2' },
          },
        },
      ];
      mockGetDoc(base);

      const result = await FirebaseCharacterService.getCharacter('char-deser-1');
      expect(result.companions[0].equipment.equippedSlots).not.toBeInstanceOf(Map);
      expect(result.companions[0].equipment.equippedSlots['neck']).toBe('amulet-2');
    });

    test('converts lastUpdated Firestore Timestamp to Date', async () => {
      const character = createTestCharacter();
      const base = JSON.parse(JSON.stringify(character));
      base.equipment.equippedSlots = {};
      base.lastUpdated = { toDate: () => new Date('2024-03-15') };
      mockGetDoc(base);

      const result = await FirebaseCharacterService.getCharacter('char-deser-1');
      expect(result.lastUpdated).toBeInstanceOf(Date);
      expect((result.lastUpdated as Date).getFullYear()).toBe(2024);
    });

    test('converts lastUpdated ISO string to Date', async () => {
      const character = createTestCharacter();
      const base = JSON.parse(JSON.stringify(character));
      base.equipment.equippedSlots = {};
      base.lastUpdated = '2024-05-20T12:00:00.000Z';
      mockGetDoc(base);

      const result = await FirebaseCharacterService.getCharacter('char-deser-1');
      expect(result.lastUpdated).toBeInstanceOf(Date);
    });

    test('converts createdAt ISO string to Date', async () => {
      const character = createTestCharacter();
      const base = JSON.parse(JSON.stringify(character));
      base.equipment.equippedSlots = {};
      base.createdAt = '2024-01-10T08:00:00.000Z';
      mockGetDoc(base);

      const result = await FirebaseCharacterService.getCharacter('char-deser-1');
      expect(result.createdAt).toBeInstanceOf(Date);
    });

    test('converts createdAt Firestore Timestamp to Date', async () => {
      const character = createTestCharacter();
      const base = JSON.parse(JSON.stringify(character));
      base.equipment.equippedSlots = {};
      base.createdAt = { toDate: () => new Date(1706745600000) }; // 2024-02-01 UTC
      mockGetDoc(base);

      const result = await FirebaseCharacterService.getCharacter('char-deser-1');
      expect(result.createdAt).toBeInstanceOf(Date);
      expect((result.createdAt as Date).getUTCFullYear()).toBe(2024);
    });

    test('backfills missing ruleset with PF1e standard preset', async () => {
      const character = createTestCharacter();
      const base = JSON.parse(JSON.stringify(character));
      base.equipment.equippedSlots = {};
      delete base.ruleset;
      mockGetDoc(base);

      const result = await FirebaseCharacterService.getCharacter('char-deser-1');
      expect(result.ruleset).toBeDefined();
      expect(result.ruleset.id).toBeDefined();
    });
  });
});
