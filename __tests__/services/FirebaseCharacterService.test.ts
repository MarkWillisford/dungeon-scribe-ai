import { FirebaseCharacterService } from '@services/FirebaseCharacterService';
import { Character } from '@/types';
import { CharacterService } from '@services/CharacterService';
import { Size, Alignment } from '@/types/base';
import { AbilityScoreMethod } from '@/types/character';

// Mock firebase/firestore
jest.mock('firebase/firestore', () => ({
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
}));

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
  });

  describe('delete', () => {
    test('should delete character', async () => {
      mockFirestore.deleteDoc.mockResolvedValue(undefined);

      await expect(FirebaseCharacterService.delete('char-1')).resolves.toBeUndefined();
      expect(mockFirestore.deleteDoc).toHaveBeenCalled();
    });
  });
});
