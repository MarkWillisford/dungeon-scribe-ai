import { configureStore } from '@reduxjs/toolkit';
import gameDataReducer, {
  loadClasses,
  selectClassDataMap,
  selectClasses,
  selectClassesLoaded,
} from '@/store/slices/gameDataSlice';
import { GameDataService } from '@/services/GameDataService';
import type { ExpandedClassData } from '@/data/classes/types';
import { BABProgression, SaveProgression } from '@/types/base';

jest.mock('@/services/GameDataService', () => ({
  GameDataService: {
    getAllClasses: jest.fn(),
  },
}));

const mockFighter: ExpandedClassData = {
  name: 'Fighter',
  category: 'Core',
  maxLevel: 20,
  hitDie: 10,
  skillRanksPerLevel: 2,
  classSkills: [],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Poor,
  },
  weaponProficiencies: [],
  armorProficiencies: [],
  classFeatures: [],
  spellcasting: { type: 'None', casting: 'None' },
  source: 'Test',
};

function makeStore() {
  return configureStore({ reducer: { gameData: gameDataReducer } });
}

describe('gameDataSlice', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('starts with an empty unloaded state', () => {
    const store = makeStore();
    const s = store.getState();
    expect(s.gameData.classes).toEqual([]);
    expect(s.gameData.classesLoaded).toBe(false);
    expect(s.gameData.classesLoading).toBe(false);
    expect(s.gameData.classesError).toBeNull();
  });

  describe('loadClasses thunk', () => {
    it('fulfilled: stores classes and marks loaded', async () => {
      (GameDataService.getAllClasses as jest.Mock).mockResolvedValue([mockFighter]);
      const store = makeStore();

      await store.dispatch(loadClasses());

      const s = store.getState();
      expect(s.gameData.classes).toHaveLength(1);
      expect(s.gameData.classesLoaded).toBe(true);
      expect(s.gameData.classesLoading).toBe(false);
      expect(s.gameData.classesError).toBeNull();
    });

    it('rejected: records error and stays unloaded', async () => {
      (GameDataService.getAllClasses as jest.Mock).mockRejectedValue(new Error('boom'));
      const store = makeStore();

      await store.dispatch(loadClasses());

      const s = store.getState();
      expect(s.gameData.classes).toEqual([]);
      expect(s.gameData.classesLoaded).toBe(false);
      expect(s.gameData.classesLoading).toBe(false);
      expect(s.gameData.classesError).toBe('boom');
    });
  });

  describe('selectors', () => {
    it('selectClasses returns the classes array', async () => {
      (GameDataService.getAllClasses as jest.Mock).mockResolvedValue([mockFighter]);
      const store = makeStore();
      await store.dispatch(loadClasses());
      expect(selectClasses(store.getState())).toHaveLength(1);
    });

    it('selectClassesLoaded reflects load state', async () => {
      (GameDataService.getAllClasses as jest.Mock).mockResolvedValue([mockFighter]);
      const store = makeStore();
      expect(selectClassesLoaded(store.getState())).toBe(false);
      await store.dispatch(loadClasses());
      expect(selectClassesLoaded(store.getState())).toBe(true);
    });

    it('selectClassDataMap builds a lowercase-keyed Map', async () => {
      (GameDataService.getAllClasses as jest.Mock).mockResolvedValue([mockFighter]);
      const store = makeStore();
      await store.dispatch(loadClasses());

      const map = selectClassDataMap(store.getState());
      expect(map.get('fighter')).toEqual(mockFighter);
      expect(map.get('FIGHTER')).toBeUndefined(); // case-sensitive on the key
      expect(map.size).toBe(1);
    });
  });
});
