/**
 * FirestoreGameDataConnector — unit tests.
 *
 * firebase/firestore is globally mocked in jest.setup.ts. Tests configure
 * the mock returns per-test to verify query construction, caching, and
 * filter logic without touching a real Firestore instance.
 */

import { getDocs, getDoc } from 'firebase/firestore';
import { FirestoreGameDataConnector } from '@services/FirestoreGameDataConnector';
import { GameDataCache } from '@services/GameDataCache';

// Cast the global mocks from jest.setup.ts
const mockGetDocs = getDocs as jest.MockedFunction<typeof getDocs>;
const mockGetDoc = getDoc as jest.MockedFunction<typeof getDoc>;

// Helper: build a mock QuerySnapshot with typed docs
function mockSnap<T>(items: T[]) {
  return {
    docs: items.map((data) => ({ data: () => data })),
    empty: items.length === 0,
  };
}

// Helper: build a mock DocumentSnapshot
function mockDocSnap<T>(data: T | null) {
  return {
    exists: () => data !== null,
    data: () => data,
  };
}

// FirestoreGameDataConnector.getClassChoiceOptions only takes (collection, filters).
// QueryContext is used at the GameDataService level, not the connector level.

describe('FirestoreGameDataConnector', () => {
  let connector: FirestoreGameDataConnector;

  beforeEach(() => {
    connector = new FirestoreGameDataConnector();
    GameDataCache.clear();
    jest.clearAllMocks();
  });

  // ---- Feats ------------------------------------------------------------------

  describe('getFeats', () => {
    test('returns all feats from Firestore', async () => {
      const feats = [
        { id: 'power-attack', name: 'Power Attack', types: ['combat'] },
        { id: 'toughness', name: 'Toughness', types: ['general'] },
      ];
      mockGetDocs.mockResolvedValueOnce(mockSnap(feats) as never);

      const result = await connector.getFeats(undefined);
      expect(result).toHaveLength(2);
      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });

    test('filters by featTypes client-side', async () => {
      const feats = [
        { id: 'power-attack', name: 'Power Attack', types: ['combat'] },
        { id: 'toughness', name: 'Toughness', types: ['general'] },
      ];
      mockGetDocs.mockResolvedValueOnce(mockSnap(feats) as never);

      const result = await connector.getFeats({ featTypes: ['general'] });
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('toughness');
    });

    test('filters by isCombatFeat', async () => {
      const feats = [
        { id: 'power-attack', name: 'Power Attack', types: ['combat'] },
        { id: 'toughness', name: 'Toughness', types: ['general'] },
      ];
      mockGetDocs.mockResolvedValueOnce(mockSnap(feats) as never);

      const result = await connector.getFeats({ isCombatFeat: true });
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('power-attack');
    });

    test('filters by isTeamworkFeat', async () => {
      const feats = [
        { id: 'outflank', name: 'Outflank', types: ['combat', 'teamwork'] },
        { id: 'toughness', name: 'Toughness', types: ['general'] },
      ];
      mockGetDocs.mockResolvedValueOnce(mockSnap(feats) as never);

      const result = await connector.getFeats({ isTeamworkFeat: true });
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('outflank');
    });

    test('caches results — second call skips Firestore', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'a', types: [] }]) as never);

      await connector.getFeats(undefined);
      const second = await connector.getFeats(undefined);

      expect(second).toHaveLength(1);
      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });
  });

  describe('getFeatById', () => {
    test('returns feat when document exists', async () => {
      mockGetDoc.mockResolvedValueOnce(
        mockDocSnap({ id: 'power-attack', name: 'Power Attack' }) as never,
      );

      const result = await connector.getFeatById('power-attack');
      expect(result).toBeDefined();
      expect(result?.name).toBe('Power Attack');
    });

    test('returns null when document does not exist', async () => {
      mockGetDoc.mockResolvedValueOnce(mockDocSnap(null) as never);

      const result = await connector.getFeatById('nonexistent');
      expect(result).toBeNull();
    });

    test('caches result — second call skips Firestore', async () => {
      mockGetDoc.mockResolvedValueOnce(
        mockDocSnap({ id: 'power-attack', name: 'Power Attack' }) as never,
      );

      await connector.getFeatById('power-attack');
      const second = await connector.getFeatById('power-attack');

      expect(second?.name).toBe('Power Attack');
      expect(mockGetDoc).toHaveBeenCalledTimes(1);
    });
  });

  // ---- Traits -----------------------------------------------------------------

  describe('getTraits', () => {
    test('returns all traits from Firestore', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'anatomist', name: 'Anatomist' }]) as never,
      );

      const result = await connector.getTraits();
      expect(result).toHaveLength(1);
    });

    test('caches results', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'a' }]) as never);

      await connector.getTraits();
      await connector.getTraits();

      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });
  });

  // ---- Classes ----------------------------------------------------------------

  describe('getClasses', () => {
    test('returns all classes', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ name: 'Fighter' }, { name: 'Wizard' }]) as never,
      );

      const result = await connector.getClasses();
      expect(result).toHaveLength(2);
    });

    test('caches results', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ name: 'Fighter' }]) as never);

      await connector.getClasses();
      await connector.getClasses();

      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCoreClasses', () => {
    test('delegates to getClasses and returns result as ClassData[]', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ name: 'Fighter', hitDie: 10 }]) as never);

      const result = await connector.getCoreClasses();
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Fighter');
    });
  });

  describe('getClassByName', () => {
    test('returns class when doc exists', async () => {
      mockGetDoc.mockResolvedValueOnce(mockDocSnap({ name: 'Fighter', hitDie: 10 }) as never);

      const result = await connector.getClassByName('Fighter');
      expect(result?.name).toBe('Fighter');
    });

    test('returns null when doc does not exist', async () => {
      mockGetDoc.mockResolvedValueOnce(mockDocSnap(null) as never);

      const result = await connector.getClassByName('NonexistentClass');
      expect(result).toBeNull();
    });

    test('caches result by lowercase name', async () => {
      mockGetDoc.mockResolvedValueOnce(mockDocSnap({ name: 'Fighter' }) as never);

      await connector.getClassByName('Fighter');
      const second = await connector.getClassByName('Fighter');

      expect(second?.name).toBe('Fighter');
      expect(mockGetDoc).toHaveBeenCalledTimes(1);
    });
  });

  describe('getClassChoiceDefinitions', () => {
    test('returns definitions for a class', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'fighter-bonus-feats', className: 'fighter' }]) as never,
      );

      const result = await connector.getClassChoiceDefinitions('fighter');
      expect(result).toHaveLength(1);
    });

    test('caches by classId', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'a' }]) as never);

      await connector.getClassChoiceDefinitions('fighter');
      await connector.getClassChoiceDefinitions('fighter');

      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });

    test('returns an empty array when the class genuinely has no definitions', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([]) as never);

      await expect(connector.getClassChoiceDefinitions('commoner')).resolves.toEqual([]);
    });

    test('throws when the read fails instead of reporting an empty class', async () => {
      // Swallowing this made a permission denial indistinguishable from a class
      // with no choices, which is how #360 went undiagnosed.
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockGetDocs.mockRejectedValueOnce(new Error('Missing or insufficient permissions.'));

      await expect(connector.getClassChoiceDefinitions('cavalier')).rejects.toThrow(
        /Could not load class choices for "cavalier"/,
      );
      consoleError.mockRestore();
    });

    test('names the underlying reason in the thrown error', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockGetDocs.mockRejectedValueOnce(new Error('Missing or insufficient permissions.'));

      await expect(connector.getClassChoiceDefinitions('cavalier')).rejects.toThrow(
        /Missing or insufficient permissions/,
      );
      consoleError.mockRestore();
    });

    test('does not cache a failed read, so a retry actually retries', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockGetDocs.mockRejectedValueOnce(new Error('denied'));
      await expect(connector.getClassChoiceDefinitions('cavalier')).rejects.toThrow();

      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'cavalier-order', className: 'cavalier' }]) as never,
      );
      await expect(connector.getClassChoiceDefinitions('cavalier')).resolves.toHaveLength(1);
      consoleError.mockRestore();
    });
  });

  describe('getSpellTables', () => {
    test('returns static SPELL_TABLES (no Firestore call)', async () => {
      const result = await connector.getSpellTables();
      expect(typeof result).toBe('object');
      expect(mockGetDocs).not.toHaveBeenCalled();
      expect(mockGetDoc).not.toHaveBeenCalled();
    });
  });

  // ---- Races ------------------------------------------------------------------

  describe('getRaceGroups', () => {
    test('returns races grouped by category from a single query', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          { name: 'Human', category: 'Core' },
          { name: 'Aasimar', category: 'Featured' },
          { name: 'Tiefling', category: 'Uncommon' },
          { name: 'Ganzi', flexibleAbilityBonuses: [{ group: 'any', count: 1, modifier: 2 }] },
        ]) as never,
      );

      const result = await connector.getRaceGroups();

      expect(result.core).toHaveLength(1);
      expect(result.featured).toHaveLength(1);
      expect(result.uncommon).toHaveLength(1);
      expect(result.flexibleAbility).toHaveLength(1);
      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });

    test('caches results', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([]) as never);

      await connector.getRaceGroups();
      await connector.getRaceGroups();

      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });
  });

  // ---- Equipment --------------------------------------------------------------

  describe('equipment getters', () => {
    test('getWeapons returns weapons and caches', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'longsword', name: 'Longsword' }]) as never,
      );

      const first = await connector.getWeapons();
      const second = await connector.getWeapons();

      expect(first).toHaveLength(1);
      expect(second).toHaveLength(1);
      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });

    test('getArmor returns armor and caches', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'chainmail', name: 'Chain Mail' }]) as never,
      );

      const result = await connector.getArmor();
      await connector.getArmor();

      expect(result).toHaveLength(1);
      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });

    test('getShields returns shields and caches', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'heavy-shield', name: 'Heavy Shield' }]) as never,
      );

      const result = await connector.getShields();
      await connector.getShields();

      expect(result).toHaveLength(1);
      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });

    test('getGear returns gear and caches', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'rope', name: 'Rope' }]) as never);

      const result = await connector.getGear();
      await connector.getGear();

      expect(result).toHaveLength(1);
      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });
  });

  // ---- Class Choice Options ---------------------------------------------------

  describe('getClassChoiceOptions', () => {
    test('throws when the read is denied instead of reporting an empty option list', async () => {
      // This is the read that actually failed in #360: the Cavalier Order slot
      // rendered from a definition that loaded fine, then had nothing in it
      // because 'cavalierorders' was denied. An empty picker and a denied read
      // must not look the same.
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockGetDocs.mockRejectedValueOnce(new Error('Missing or insufficient permissions.'));

      await expect(connector.getClassChoiceOptions('cavalierorders', {})).rejects.toThrow(
        /Could not load options from "cavalierorders": Missing or insufficient permissions/,
      );
      consoleError.mockRestore();
    });

    test('still returns an empty list for a collection that is genuinely empty', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([]) as never);
      await expect(connector.getClassChoiceOptions('roguetalents', {})).resolves.toEqual([]);
    });

    test('does not cache a denied read, so a retry actually retries', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockGetDocs.mockRejectedValueOnce(new Error('denied'));
      await expect(connector.getClassChoiceOptions('cavalierorders', {})).rejects.toThrow();

      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'order-of-the-star', name: 'Order of the Star' }]) as never,
      );
      await expect(connector.getClassChoiceOptions('cavalierorders', {})).resolves.toHaveLength(1);
      consoleError.mockRestore();
    });

    test('simple collection (ragepowers) — fetches and caches', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'animal-fury', name: 'Animal Fury' }]) as never,
      );

      const first = await connector.getClassChoiceOptions('ragepowers', {});
      const second = await connector.getClassChoiceOptions('ragepowers', {});

      expect(first).toHaveLength(1);
      expect(second).toHaveLength(1);
      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });

    test('revelations — no filter returns all', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          { id: 'battle-cry', mysteryId: 'battle' },
          { id: 'time-sight', mysteryId: 'time' },
        ]) as never,
      );

      const result = await connector.getClassChoiceOptions('revelations', {});
      expect(result).toHaveLength(2);
    });

    test('revelations — mysteryId filter queries Firestore with filter', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'battle-cry', mysteryId: 'battle' }]) as never,
      );

      const result = await connector.getClassChoiceOptions('revelations', { mysteryId: 'battle' });
      expect(result).toHaveLength(1);
    });

    test('bloodlines — classId filter queries with array-contains', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'aberrant-sorcerer', classIds: ['sorcerer'] }]) as never,
      );

      const result = await connector.getClassChoiceOptions('bloodlines', { classId: 'sorcerer' });
      expect(result).toHaveLength(1);
    });

    test('bloodlines — no classId filter returns all', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'a' }, { id: 'b' }]) as never);

      const result = await connector.getClassChoiceOptions('bloodlines', {});
      expect(result).toHaveLength(2);
    });

    test('shamanspirits — wanderingOnly filter', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'battle', wanderingSpirit: true }]) as never,
      );

      const result = await connector.getClassChoiceOptions('shamanspirits', {
        wanderingOnly: true,
      });
      expect(result).toHaveLength(1);
    });

    test('shamanspirits — no filter returns all', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'a' }, { id: 'b' }]) as never);

      const result = await connector.getClassChoiceOptions('shamanspirits', {});
      expect(result).toHaveLength(2);
    });

    test('wildtalents — talentType filter', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'extended-range', talentType: 'infusion' }]) as never,
      );

      const result = await connector.getClassChoiceOptions('wildtalents', {
        talentType: 'infusion',
      });
      expect(result).toHaveLength(1);
    });

    test('wildtalents — no filter returns all', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'a' }, { id: 'b' }]) as never);

      const result = await connector.getClassChoiceOptions('wildtalents', {});
      expect(result).toHaveLength(2);
    });

    test('ninjatricks — trickTier filter', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'see-unseen', trickTier: 'master' }]) as never,
      );

      const result = await connector.getClassChoiceOptions('ninjatricks', { trickTier: 'master' });
      expect(result).toHaveLength(1);
    });

    test('ninjatricks — no filter returns all', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'a' }, { id: 'b' }]) as never);

      const result = await connector.getClassChoiceOptions('ninjatricks', {});
      expect(result).toHaveLength(2);
    });

    test('roguetalents — talentTier filter', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'crippling', talentTier: 'advanced' }]) as never,
      );

      const result = await connector.getClassChoiceOptions('roguetalents', {
        talentTier: 'advanced',
      });
      expect(result).toHaveLength(1);
    });

    test('slayertalents — talentTier filter', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'quarry', talentTier: 'advanced' }]) as never,
      );

      const result = await connector.getClassChoiceOptions('slayertalents', {
        talentTier: 'advanced',
      });
      expect(result).toHaveLength(1);
    });

    test('roguetalents — no filter returns all', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'a' }, { id: 'b' }]) as never);

      const result = await connector.getClassChoiceOptions('roguetalents', {});
      expect(result).toHaveLength(2);
    });

    test('alchemistdiscoveries — discoveryTier filter', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'grand-mutagen', discoveryTier: 'grand' }]) as never,
      );

      const result = await connector.getClassChoiceOptions('alchemistdiscoveries', {
        discoveryTier: 'grand',
      });
      expect(result).toHaveLength(1);
    });

    test('alchemistdiscoveries — no filter returns all', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'a' }, { id: 'b' }]) as never);

      const result = await connector.getClassChoiceOptions('alchemistdiscoveries', {});
      expect(result).toHaveLength(2);
    });

    test('domains — no deity filter returns all via fetchAll', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          { id: 'air', name: 'Air' },
          { id: 'fire', name: 'Fire' },
        ]) as never,
      );

      const result = await connector.getClassChoiceOptions('domains', {});
      expect(result).toHaveLength(2);
    });

    test('domains — deity filter narrows to deity domains', async () => {
      // First call: fetchAll domains
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          { id: 'air', name: 'Air' },
          { id: 'fire', name: 'Fire' },
          { id: 'chaos', name: 'Chaos' },
        ]) as never,
      );
      // Second call: deity lookup
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          {
            name: 'Cayden Cailean',
            domains: ['chaos', 'charm'],
            subdomains: ['azata'],
          },
        ]) as never,
      );

      const result = await connector.getClassChoiceOptions('domains', {
        deityName: 'Cayden Cailean',
      });
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('chaos');
    });

    test('domains — deity filter with unknown deity returns all', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'air' }, { id: 'fire' }]) as never);
      // Deity not found
      mockGetDocs.mockResolvedValueOnce(mockSnap([]) as never);

      const result = await connector.getClassChoiceOptions('domains', {
        deityName: 'UnknownDeity',
      });
      expect(result).toHaveLength(2);
    });

    test('warpriestblessings — no deity filter returns all', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([{ id: 'warpriest-blessing-fire', name: 'Fire' }]) as never,
      );

      const result = await connector.getClassChoiceOptions('warpriestblessings', {});
      expect(result).toHaveLength(1);
    });

    test('warpriestblessings — deity filter narrows results', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          { id: 'warpriest-blessing-fire', name: 'Fire' },
          { id: 'warpriest-blessing-chaos', name: 'Chaos' },
        ]) as never,
      );
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          {
            name: 'Cayden Cailean',
            domains: ['chaos'],
            subdomains: [],
          },
        ]) as never,
      );

      const result = await connector.getClassChoiceOptions('warpriestblessings', {
        deityName: 'Cayden Cailean',
      });
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('warpriest-blessing-chaos');
    });

    test('warpriestblessings — unknown deity returns all', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'a' }, { id: 'b' }]) as never);
      mockGetDocs.mockResolvedValueOnce(mockSnap([]) as never);

      const result = await connector.getClassChoiceOptions('warpriestblessings', {
        deityName: 'Nobody',
      });
      expect(result).toHaveLength(2);
    });

    test('eidolonevolutions — no filter returns all', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          { id: 'bite', summoner: null },
          { id: 'limbs', summoner: 'apg' },
        ]) as never,
      );

      const result = await connector.getClassChoiceOptions('eidolonevolutions', {});
      expect(result).toHaveLength(2);
    });

    test('eidolonevolutions — summonerType filter keeps null + matching', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          { id: 'bite', summoner: null },
          { id: 'limbs', summoner: 'apg' },
          { id: 'claws', summoner: 'unchained' },
        ]) as never,
      );

      const result = await connector.getClassChoiceOptions('eidolonevolutions', {
        summonerType: 'apg',
      });
      expect(result).toHaveLength(2); // bite (null) + limbs (apg)
    });

    test('occultistfocuspowers — queries with isBasePower == false', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'ward', isBasePower: false }]) as never);

      const result = await connector.getClassChoiceOptions('occultistfocuspowers', {});
      expect(result).toHaveLength(1);
    });

    test('spells — runs one Firestore query per class name', async () => {
      // One query for 'cleric'
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          { name: 'Cure Light Wounds', classLevels: { cleric: 1 }, school: 'Conjuration' },
        ]) as never,
      );

      const result = await connector.getClassChoiceOptions('spells', {
        classNames: ['cleric'],
        maxSpellLevel: 3,
      });

      expect(mockGetDocs).toHaveBeenCalledTimes(1);
      expect(result).toHaveLength(1);
      const spell = result[0] as unknown as { id: string; name: string };
      expect(spell.id).toBe('cure-light-wounds');
      expect(spell.name).toBe('Cure Light Wounds');
    });

    test('spells — merges and deduplicates across class queries', async () => {
      // Cleric query returns CLW + Flame Strike
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          {
            name: 'Cure Light Wounds',
            classLevels: { cleric: 1, druid: 1 },
            school: 'Conjuration',
          },
          { name: 'Flame Strike', classLevels: { cleric: 5, druid: 4 }, school: 'Evocation' },
        ]) as never,
      );
      // Druid query returns CLW again (duplicate) + Flame Strike again (duplicate)
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          {
            name: 'Cure Light Wounds',
            classLevels: { cleric: 1, druid: 1 },
            school: 'Conjuration',
          },
          { name: 'Flame Strike', classLevels: { cleric: 5, druid: 4 }, school: 'Evocation' },
        ]) as never,
      );

      const result = await connector.getClassChoiceOptions('spells', {
        classNames: ['cleric', 'druid'],
        maxSpellLevel: 5,
      });

      expect(mockGetDocs).toHaveBeenCalledTimes(2);
      // Both spells appear exactly once despite being returned by both queries
      expect(result).toHaveLength(2);
    });

    test('spells — empty classNames returns empty array immediately', async () => {
      const result = await connector.getClassChoiceOptions('spells', { classNames: [] });
      expect(mockGetDocs).not.toHaveBeenCalled();
      expect(result).toHaveLength(0);
    });

    test('spells — throws when Firestore is unavailable', async () => {
      // Was: "returns empty array when Firestore throws". That contract is what
      // made a failed read indistinguishable from a class with no options (#360),
      // so the swallow is gone and the caller surfaces the reason instead.
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockGetDocs.mockRejectedValueOnce(new Error('Firestore unavailable'));

      await expect(
        connector.getClassChoiceOptions('spells', {
          classNames: ['cleric'],
          maxSpellLevel: 3,
        }),
      ).rejects.toThrow(/Could not load options from "spells": Firestore unavailable/);
      consoleError.mockRestore();
    });

    test('deities — returns all deities from Firestore', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          { id: 'milani', name: 'Milani', title: 'The Everbloom', alignment: 'CG' },
          { id: 'iomedae', name: 'Iomedae', title: 'The Inheritor', alignment: 'LG' },
        ]) as never,
      );

      const result = await connector.getClassChoiceOptions('deities', {});
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe('milani');
      expect(result[1].id).toBe('iomedae');
    });

    test('deities — Firestore error returns empty array', async () => {
      mockGetDocs.mockRejectedValueOnce(new Error('Permission denied'));

      const result = await connector.getClassChoiceOptions('deities', {});
      expect(result).toEqual([]);
    });
  });

  // ---- Eidolon static catalogs ------------------------------------------------

  describe('getEidolonBaseForms', () => {
    test('returns base forms fetched from Firestore', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          { id: 'biped', name: 'Biped', description: 'Two-legged form' },
          { id: 'quadruped', name: 'Quadruped', description: 'Four-legged form' },
        ]) as never,
      );

      const result = await connector.getEidolonBaseForms();
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe('biped');
      expect(result[1].id).toBe('quadruped');
    });

    test('caches results — second call skips Firestore', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'biped', name: 'Biped' }]) as never);

      await connector.getEidolonBaseForms();
      const second = await connector.getEidolonBaseForms();

      expect(second).toHaveLength(1);
      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });

    test('returns empty array when Firestore throws', async () => {
      mockGetDocs.mockRejectedValueOnce(new Error('Firestore unavailable'));

      const result = await connector.getEidolonBaseForms();
      expect(result).toEqual([]);
    });
  });

  describe('getEidolonSubtypes', () => {
    test('returns subtypes fetched from Firestore', async () => {
      mockGetDocs.mockResolvedValueOnce(
        mockSnap([
          { id: 'agathion', name: 'Agathion', description: 'Agathion subtype' },
          { id: 'demon', name: 'Demon', description: 'Demon subtype' },
        ]) as never,
      );

      const result = await connector.getEidolonSubtypes();
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe('agathion');
      expect(result[1].id).toBe('demon');
    });

    test('caches results — second call skips Firestore', async () => {
      mockGetDocs.mockResolvedValueOnce(mockSnap([{ id: 'agathion', name: 'Agathion' }]) as never);

      await connector.getEidolonSubtypes();
      const second = await connector.getEidolonSubtypes();

      expect(second).toHaveLength(1);
      expect(mockGetDocs).toHaveBeenCalledTimes(1);
    });

    test('returns empty array when Firestore throws', async () => {
      mockGetDocs.mockRejectedValueOnce(new Error('Firestore unavailable'));

      const result = await connector.getEidolonSubtypes();
      expect(result).toEqual([]);
    });
  });
});
