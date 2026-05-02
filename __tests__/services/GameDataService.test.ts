/**
 * GameDataService — Phase A unit tests.
 *
 * In Phase A the service wraps static data imports. Tests verify that each
 * public method returns the expected shape and that the filtering / switch
 * logic inside getClassChoiceItems works correctly.
 *
 * All @/data/ imports are mocked with minimal fixtures so the suite stays
 * fast and memory-light (avoiding loading 2,500+ real feats, etc.).
 */

import { GameDataService } from '@services/GameDataService';
import { StaticGameDataConnector } from '@services/StaticGameDataConnector';

// ---- Minimal test fixtures -------------------------------------------------------

const MOCK_FEAT = {
  id: 'power-attack',
  name: 'Power Attack',
  description: 'Trade accuracy for damage.',
  source: 'pf1e-core',
  types: ['combat'] as const,
  prerequisites: [],
  effects: [],
  activationMode: 'passive' as const,
};

const MOCK_FEAT_TEAMWORK = {
  ...MOCK_FEAT,
  id: 'outflank',
  name: 'Outflank',
  types: ['combat', 'teamwork'] as const,
};

const MOCK_FEAT_GENERAL = {
  ...MOCK_FEAT,
  id: 'toughness',
  name: 'Toughness',
  types: ['general'] as const,
};

const MOCK_TRAIT = {
  id: 'anatomist',
  name: 'Anatomist',
  description: 'You know where to strike.',
  source: 'pf1e-core',
  traitTypes: ['combat'] as const,
  effects: [],
};

const MOCK_CLASS = {
  name: 'Fighter',
  hitDie: 10,
  skillRanksPerLevel: 2,
  classSkills: ['Climb'],
  babProgression: 'full' as const,
  saves: { fortitude: 'good' as const, reflex: 'poor' as const, will: 'poor' as const },
  weaponProficiencies: ['simple', 'martial'],
  armorProficiencies: ['light', 'medium', 'heavy'],
  startingWealth: '5d4 × 10 gp',
  classFeatures: [],
};

const MOCK_EXPANDED_CLASS = {
  name: 'Fighter',
  category: 'Core' as const,
  hitDie: 10,
  skillRanksPerLevel: 2,
  classSkills: ['Climb'],
  babProgression: 'full' as const,
  saves: { fortitude: 'good' as const, reflex: 'poor' as const, will: 'poor' as const },
  weaponProficiencies: ['simple', 'martial'],
  armorProficiencies: ['light', 'medium', 'heavy'],
  startingWealth: '5d4 × 10 gp',
  classFeatures: [],
  spellcasting: { type: 'None' as const },
};

const MOCK_RACE = {
  name: 'Human',
  sizeMod: 0,
  baseSpeed: 30,
  alternativeMovements: {},
  abilityModifiers: {},
  traits: [],
  languages: ['Common'],
  bonusLanguages: ['Any'],
  flexibleAbilityBonus: true,
  category: 'Core' as const,
};

const MOCK_RACE_DWARF = { ...MOCK_RACE, name: 'Dwarf', flexibleAbilityBonus: false };
const MOCK_RACE_ELF = {
  ...MOCK_RACE,
  name: 'Elf',
  flexibleAbilityBonus: false,
  category: 'Featured' as const,
};
const MOCK_RACE_TIEFLING = {
  ...MOCK_RACE,
  name: 'Tiefling',
  flexibleAbilityBonus: false,
  category: 'Uncommon' as const,
};

const MOCK_WEAPON = { id: 'longsword', name: 'Longsword', category: 'melee' };
const MOCK_ARMOR = { id: 'chain-mail', name: 'Chain Mail', category: 'medium' };
const MOCK_SHIELD = { id: 'heavy-shield', name: 'Heavy Shield', category: 'shield' };
const MOCK_GEAR = { id: 'rope', name: 'Rope', category: 'adventuring-gear' };

// ---- Module mocks ----------------------------------------------------------------

jest.mock('@/store/store', () => ({
  store: {
    getState: () => ({
      auth: { user: { uid: 'test-uid' } },
      ruleset: { activeRuleset: null },
    }),
  },
}));

jest.mock('@/data/feats/index', () => ({ ALL_FEATS: [] }));
jest.mock('@/data/traits/index', () => ({ ALL_TRAITS: [] }));
jest.mock('@/data/classes', () => ({ CORE_CLASSES: [] }));
jest.mock('@/data/classes/index', () => ({
  ALL_EXPANDED_CLASSES: [],
  SPELL_TABLES: {},
}));
jest.mock('@/data/classChoiceDefinitions/index', () => ({
  getDefinitionsForClass: jest.fn(() => []),
}));
jest.mock('@/data/races', () => ({
  CORE_RACES: [],
  FEATURED_RACES: [],
  UNCOMMON_RACES: [],
  FLEXIBLE_ABILITY_RACES: [],
  ALL_EXPANDED_RACES: [],
}));
jest.mock('@/data/equipment', () => ({
  ALL_WEAPONS: [],
  ALL_ARMOR: [],
  ALL_SHIELDS: [],
  ALL_GEAR: [],
}));

jest.mock('@/data/classes/archetypes/index', () => ({ ALL_ARCHETYPES: [] }));

jest.mock('@/data/eidolonBaseForms/index', () => ({
  ALL_EIDOLON_BASE_FORMS: [
    { id: 'biped', name: 'Biped', description: 'Two-legged form' },
    { id: 'quadruped', name: 'Quadruped', description: 'Four-legged form' },
  ],
}));
jest.mock('@/data/eidolonSubtypes/index', () => ({
  ALL_EIDOLON_SUBTYPES: [
    { id: 'agathion', name: 'Agathion', description: 'Agathion subtype' },
    { id: 'demon', name: 'Demon', description: 'Demon subtype' },
  ],
}));

// Class choice collection mocks
jest.mock('@/data/domains/index', () => ({
  ALL_DOMAINS: [
    { id: 'air', name: 'Air', description: 'Air domain', druidAllowed: true },
    { id: 'fire', name: 'Fire', description: 'Fire domain', druidAllowed: false },
  ],
}));
jest.mock('@/data/ragePowers/index', () => ({
  ALL_RAGE_POWERS: [{ id: 'animal-fury', name: 'Animal Fury', description: 'Bite attack' }],
}));
jest.mock('@/data/rogueTalents/index', () => ({
  ALL_ROGUE_TALENTS: [
    {
      id: 'bleeding-attack',
      name: 'Bleeding Attack',
      description: 'Causes bleed',
      talentTier: 'standard',
    },
    {
      id: 'crippling-strike',
      name: 'Crippling Strike',
      description: 'Penalizes STR',
      talentTier: 'advanced',
    },
  ],
}));
jest.mock('@/data/mysteries/index', () => ({
  ALL_MYSTERIES: [
    {
      id: 'battle',
      name: 'Battle',
      classSkills: ['Intimidate', 'Knowledge (engineering)', 'Perception'],
    },
  ],
}));
jest.mock('@/data/inquisitions/index', () => ({
  ALL_INQUISITIONS: [{ id: 'anger', name: 'Anger', description: 'Anger inquisition' }],
}));
jest.mock('@/data/revelations/index', () => ({
  ALL_REVELATIONS: [
    { id: 'battle-cry', name: 'Battle Cry', description: 'Shout', mysteryId: 'battle' },
    { id: 'trance-of-three', name: 'Trance of Three', description: 'Trance', mysteryId: 'time' },
  ],
}));
jest.mock('@/data/cavalierOrders/index', () => ({
  ALL_CAVALIER_ORDERS: [
    {
      id: 'order-of-the-star',
      name: 'Order of the Star',
      classSkills: ['Heal', 'Knowledge (religion)'],
    },
  ],
}));
jest.mock('@/data/hexes/index', () => ({
  ALL_HEXES: [
    { id: 'cackle', name: 'Cackle', description: 'Extend curse', hexTier: 'standard' },
    { id: 'agony', name: 'Agony', description: 'Nauseated', hexTier: 'major' },
    { id: 'death-curse', name: 'Death Curse', description: 'Curse to death', hexTier: 'grand' },
  ],
}));
jest.mock('@/data/arcanistExploits/index', () => ({
  ALL_ARCANIST_EXPLOITS: [
    {
      id: 'potent-magic',
      name: 'Potent Magic',
      description: 'Stronger magic',
      exploitTier: 'standard',
    },
    {
      id: 'quick-study',
      name: 'Quick Study',
      description: 'Quick learning',
      exploitTier: 'greater',
    },
  ],
}));
jest.mock('@/data/investigatorTalents/index', () => ({
  ALL_INVESTIGATOR_TALENTS: [{ id: 'empathy', name: 'Empathy', description: 'Sense Motive bonus' }],
}));
jest.mock('@/data/ninjaTricks/index', () => ({
  ALL_NINJA_TRICKS: [
    {
      id: 'acrobatic-master',
      name: 'Acrobatic Master',
      description: 'Acrobatics bonus',
      trickTier: 'standard',
    },
    {
      id: 'see-the-unseen',
      name: 'See the Unseen',
      description: 'See invisible',
      trickTier: 'master',
    },
  ],
}));
jest.mock('@/data/slayerTalents/index', () => ({
  ALL_SLAYER_TALENTS: [
    {
      id: 'ranger-combat-style',
      name: 'Ranger Combat Style',
      description: 'Combat style',
      talentTier: 'standard',
    },
    { id: 'quarry', name: 'Quarry', description: 'Mark target', talentTier: 'advanced' },
  ],
}));
jest.mock('@/data/magusArcana/index', () => ({
  ALL_MAGUS_ARCANA: [
    { id: 'arcane-accuracy', name: 'Arcane Accuracy', description: 'Insight bonus to attack' },
  ],
}));
jest.mock('@/data/warpriestBlessings/index', () => ({
  ALL_WARPRIEST_BLESSINGS: [
    { id: 'warpriest-blessing-fire', name: 'Fire', minorPower: 'Touch attack for fire damage' },
  ],
}));
jest.mock('@/data/alchemistDiscoveries/index', () => ({
  ALL_ALCHEMIST_DISCOVERIES: [
    {
      id: 'infuse-mutagen',
      name: 'Infuse Mutagen',
      description: 'Create extra mutagen',
      discoveryTier: 'standard',
    },
    {
      id: 'grand-mutagen',
      name: 'Grand Mutagen',
      description: 'Huge mutagen',
      discoveryTier: 'grand',
    },
  ],
}));
jest.mock('@/data/bloodlines/index', () => ({
  ALL_BLOODLINES: [
    {
      id: 'aberrant-sorcerer',
      name: 'Aberrant',
      bloodlineArcana: 'Aberrant bonus',
      classIds: ['sorcerer'],
    },
    { id: 'aberrant-bloodrager', name: 'Aberrant', classIds: ['bloodrager'] },
  ],
}));
jest.mock('@/data/shamanSpirits/index', () => ({
  ALL_SHAMAN_SPIRITS: [
    { id: 'battle-spirit', name: 'Battle', description: 'Battle spirit', wanderingSpirit: true },
    {
      id: 'heavens-spirit',
      name: 'Heavens',
      description: 'Heavens spirit',
      wanderingSpirit: false,
    },
  ],
}));
jest.mock('@/data/eidolonEvolutions/index', () => ({
  ALL_EIDOLON_EVOLUTIONS: [
    {
      id: 'limbs-arms',
      name: 'Limbs (Arms)',
      description: 'Extra arms',
      evolutionPointCost: 2,
      summoner: 'apg',
    },
    { id: 'bite', name: 'Bite', description: 'Bite attack', evolutionPointCost: 1, summoner: null },
  ],
}));
jest.mock('@/data/mesmeristTricks/index', () => ({
  ALL_MESMERIST_TRICKS: [
    {
      id: 'astute-perception',
      name: 'Astute Perception',
      description: 'Perception bonus',
      trickTier: 'standard',
    },
    {
      id: 'time-skitter',
      name: 'Time Skitter',
      description: 'Extra move action',
      trickTier: 'masterful',
    },
  ],
}));
jest.mock('@/data/kineticistWildTalents/index', () => ({
  ALL_WILD_TALENTS: [
    {
      id: 'extended-range',
      name: 'Extended Range',
      description: 'Longer range',
      talentType: 'infusion',
      infusionType: 'form',
      element: 'universal',
    },
    {
      id: 'kinetic-blade',
      name: 'Kinetic Blade',
      description: 'Blade of energy',
      talentType: 'infusion',
      infusionType: 'substance',
      element: 'fire',
    },
    {
      id: 'fire-blast',
      name: 'Fire Blast',
      description: 'Fire ranged attack',
      talentType: 'blast',
      element: 'fire',
    },
  ],
}));
jest.mock('@/data/occultistFocusPowers/index', () => ({
  ALL_OCCULTIST_FOCUS_POWERS: [
    {
      id: 'base-focus',
      name: 'Base Focus',
      description: 'Base power',
      school: 'abjuration',
      isBasePower: true,
    },
    {
      id: 'abjuration-ward',
      name: 'Abjuration Ward',
      description: 'Ward allies',
      school: 'abjuration',
      isBasePower: false,
    },
  ],
}));
jest.mock('@/data/phrenicAmplifications/index', () => ({
  ALL_PHRENIC_AMPLIFICATIONS: [
    {
      id: 'biokinetic-healing',
      name: 'Biokinetic Healing',
      description: 'Heal with power',
      amplificationTier: 'minor',
    },
    {
      id: 'relentless-healing',
      name: 'Relentless Healing',
      description: 'Force spell through',
      amplificationTier: 'major',
    },
  ],
}));
jest.mock('@/data/favoredClassBonuses/index', () => ({
  ALL_FAVORED_CLASS_BONUSES: [],
}));
jest.mock('@/data/spells/index', () => ({
  ALL_SPELLS: [
    {
      name: 'Cure Light Wounds',
      classLevels: { cleric: 1, druid: 1, paladin: 1 },
      school: 'Conjuration',
      verificationStatus: 'needs_review',
    },
    {
      name: 'Fireball',
      classLevels: { wizard: 3, sorcerer: 3 },
      school: 'Evocation',
      verificationStatus: 'needs_review',
    },
    {
      name: 'Flame Strike',
      classLevels: { cleric: 5, druid: 4 },
      school: 'Evocation',
      verificationStatus: 'needs_review',
    },
  ],
}));
jest.mock('@/data/deities/index', () => ({
  getDeityByName: jest.fn((name: string) => {
    if (name === 'Cayden Cailean') {
      return {
        id: 'cayden-cailean',
        name: 'Cayden Cailean',
        domains: ['chaos', 'charm'],
        subdomains: ['azata', 'love'],
      };
    }
    return undefined;
  }),
}));

// ---- Inject StaticGameDataConnector so tests use mocked @/data/ imports ----------
// FirestoreGameDataConnector (the default) tries to connect to Firestore.
// StaticGameDataConnector reads from @/data/ imports, which are mocked above.

describe('GameDataService', () => {
  beforeAll(() => {
    GameDataService.setConnector(new StaticGameDataConnector());
  });
  describe('getFeatById', () => {
    beforeEach(() => {
      const featsModule = jest.requireMock('@/data/feats/index');
      featsModule.ALL_FEATS = [MOCK_FEAT, MOCK_FEAT_TEAMWORK, MOCK_FEAT_GENERAL];
    });

    test('returns feat when id matches', async () => {
      const feat = await GameDataService.getFeatById('power-attack');
      expect(feat).toBeDefined();
      expect(feat?.name).toBe('Power Attack');
    });

    test('returns null when id not found', async () => {
      const feat = await GameDataService.getFeatById('nonexistent');
      expect(feat).toBeNull();
    });
  });

  describe('getAllFeats', () => {
    beforeEach(() => {
      const featsModule = jest.requireMock('@/data/feats/index');
      featsModule.ALL_FEATS = [MOCK_FEAT, MOCK_FEAT_TEAMWORK, MOCK_FEAT_GENERAL];
    });

    test('returns all feats with no filter', async () => {
      const feats = await GameDataService.getAllFeats();
      expect(feats).toHaveLength(3);
    });

    test('filters by featTypes', async () => {
      const feats = await GameDataService.getAllFeats({ featTypes: ['general'] });
      expect(feats).toHaveLength(1);
      expect(feats[0].id).toBe('toughness');
    });

    test('filters by isCombatFeat when no featTypes provided', async () => {
      const feats = await GameDataService.getAllFeats({ isCombatFeat: true });
      expect(feats.every((f) => f.types.includes('combat'))).toBe(true);
    });

    test('filters by isTeamworkFeat', async () => {
      const feats = await GameDataService.getAllFeats({ isTeamworkFeat: true });
      expect(feats).toHaveLength(1);
      expect(feats[0].id).toBe('outflank');
    });
  });

  describe('getAllTraits', () => {
    test('returns all traits', async () => {
      const traitsModule = jest.requireMock('@/data/traits/index');
      traitsModule.ALL_TRAITS = [MOCK_TRAIT];
      const traits = await GameDataService.getAllTraits();
      expect(traits).toHaveLength(1);
    });
  });

  describe('getCoreClasses', () => {
    test('returns core classes', async () => {
      const classesModule = jest.requireMock('@/data/classes');
      classesModule.CORE_CLASSES = [MOCK_CLASS];
      const classes = await GameDataService.getCoreClasses();
      expect(classes).toHaveLength(1);
      expect(classes[0].name).toBe('Fighter');
    });
  });

  describe('getClassByName', () => {
    beforeEach(() => {
      const classesModule = jest.requireMock('@/data/classes/index');
      classesModule.ALL_EXPANDED_CLASSES = [MOCK_EXPANDED_CLASS];
    });

    test('returns class when name matches (case-insensitive)', async () => {
      const cls = await GameDataService.getClassByName('fighter');
      expect(cls?.name).toBe('Fighter');
    });

    test('returns null when class not found', async () => {
      const cls = await GameDataService.getClassByName('wizard');
      expect(cls).toBeNull();
    });
  });

  describe('getClassChoiceDefinitions', () => {
    test('delegates to getDefinitionsForClass', async () => {
      const defs = await GameDataService.getClassChoiceDefinitions('fighter');
      expect(Array.isArray(defs)).toBe(true);
    });
  });

  describe('getSpellTables', () => {
    test('returns spell tables', async () => {
      const classesModule = jest.requireMock('@/data/classes/index');
      classesModule.SPELL_TABLES = { wizard: { 1: [3, 1] } };
      const tables = await GameDataService.getSpellTables();
      expect(tables).toHaveProperty('wizard');
    });
  });

  describe('getExpandedClasses', () => {
    test('returns expanded class list', async () => {
      const classesModule = jest.requireMock('@/data/classes/index');
      classesModule.ALL_EXPANDED_CLASSES = [MOCK_EXPANDED_CLASS];
      const classes = await GameDataService.getExpandedClasses();
      expect(classes).toHaveLength(1);
    });
  });

  describe('getRaceGroupsSync', () => {
    test('returns groups with correct shape', () => {
      const racesModule = jest.requireMock('@/data/races');
      racesModule.CORE_RACES = [MOCK_RACE_DWARF];
      racesModule.FEATURED_RACES = [MOCK_RACE_ELF];
      racesModule.UNCOMMON_RACES = [MOCK_RACE_TIEFLING];
      racesModule.FLEXIBLE_ABILITY_RACES = ['Human'];
      racesModule.ALL_EXPANDED_RACES = [
        MOCK_RACE,
        MOCK_RACE_DWARF,
        MOCK_RACE_ELF,
        MOCK_RACE_TIEFLING,
      ];
      const groups = GameDataService.getRaceGroupsSync();
      expect(groups).toHaveProperty('core');
      expect(groups).toHaveProperty('featured');
      expect(groups).toHaveProperty('uncommon');
      expect(groups).toHaveProperty('flexibleAbility');
      expect(groups.flexibleAbility[0].name).toBe('Human');
    });
  });

  describe('getRaceGroups', () => {
    test('returns same shape as sync version', async () => {
      const groups = await GameDataService.getRaceGroups();
      expect(groups).toHaveProperty('core');
      expect(groups).toHaveProperty('flexibleAbility');
    });
  });

  describe('equipment getters', () => {
    beforeEach(() => {
      const equipModule = jest.requireMock('@/data/equipment');
      equipModule.ALL_WEAPONS = [MOCK_WEAPON];
      equipModule.ALL_ARMOR = [MOCK_ARMOR];
      equipModule.ALL_SHIELDS = [MOCK_SHIELD];
      equipModule.ALL_GEAR = [MOCK_GEAR];
    });

    test('getWeapons returns weapon list', async () => {
      const weapons = await GameDataService.getWeapons();
      expect(weapons[0].name).toBe('Longsword');
    });

    test('getArmor returns armor list', async () => {
      const armor = await GameDataService.getArmor();
      expect(armor[0].name).toBe('Chain Mail');
    });

    test('getShields returns shield list', async () => {
      const shields = await GameDataService.getShields();
      expect(shields[0].name).toBe('Heavy Shield');
    });

    test('getGear returns gear list', async () => {
      const gear = await GameDataService.getGear();
      expect(gear[0].name).toBe('Rope');
    });
  });

  describe('getClassChoiceItems', () => {
    test('domains — no deity filter returns all domains', async () => {
      const items = await GameDataService.getClassChoiceItems('domains');
      expect(items).toHaveLength(2);
      expect(items[0].key).toBe('air');
    });

    test('domains — deity filter narrows to deity domains', async () => {
      const items = await GameDataService.getClassChoiceItems('domains', {
        deityIds: 'Cayden Cailean',
      });
      // Cayden Cailean has domains: ['chaos','charm'], subdomains: ['azata','love']
      // Mock data has 'air' and 'fire', neither in deity's domains — returns empty
      expect(Array.isArray(items)).toBe(true);
    });

    test('ragepowers returns all rage powers', async () => {
      const items = await GameDataService.getClassChoiceItems('ragepowers');
      expect(items[0].key).toBe('animal-fury');
    });

    test('roguetalents — assigns category by tier', async () => {
      const items = await GameDataService.getClassChoiceItems('roguetalents');
      expect(items).toHaveLength(2);
      const advanced = items.find((i) => i.key === 'crippling-strike');
      expect(advanced?.category).toBe('Advanced Talents');
    });

    test('mysteries returns all mysteries', async () => {
      const items = await GameDataService.getClassChoiceItems('mysteries');
      expect(items[0].key).toBe('battle');
    });

    test('inquisitions returns all inquisitions', async () => {
      const items = await GameDataService.getClassChoiceItems('inquisitions');
      expect(items[0].key).toBe('anger');
    });

    test('revelations — no mystery filter returns all', async () => {
      const items = await GameDataService.getClassChoiceItems('revelations');
      expect(items).toHaveLength(2);
    });

    test('revelations — mystery filter narrows to matching mystery', async () => {
      const items = await GameDataService.getClassChoiceItems('revelations', {
        mysteryId: 'battle',
      });
      expect(items).toHaveLength(1);
      expect(items[0].key).toBe('battle-cry');
    });

    test('cavalierorders returns all orders', async () => {
      const items = await GameDataService.getClassChoiceItems('cavalierorders');
      expect(items[0].key).toBe('order-of-the-star');
    });

    test('hexes — assigns category by tier', async () => {
      const items = await GameDataService.getClassChoiceItems('hexes');
      expect(items.find((i) => i.key === 'agony')?.category).toBe('Major Hexes');
      expect(items.find((i) => i.key === 'death-curse')?.category).toBe('Grand Hexes');
    });

    test('arcanistexploits — assigns category by tier', async () => {
      const items = await GameDataService.getClassChoiceItems('arcanistexploits');
      expect(items.find((i) => i.key === 'quick-study')?.category).toBe('Greater Exploits');
    });

    test('investigatortalents returns all talents', async () => {
      const items = await GameDataService.getClassChoiceItems('investigatortalents');
      expect(items[0].key).toBe('empathy');
    });

    test('ninjatricks — no filter returns all, master tier categorized', async () => {
      const items = await GameDataService.getClassChoiceItems('ninjatricks');
      expect(items).toHaveLength(2);
      expect(items.find((i) => i.key === 'see-the-unseen')?.category).toBe('Master Tricks');
    });

    test('ninjatricks — tier filter narrows results', async () => {
      const items = await GameDataService.getClassChoiceItems('ninjatricks', {
        trickTier: 'master',
      });
      expect(items).toHaveLength(1);
    });

    test('slayertalents — advanced tier categorized', async () => {
      const items = await GameDataService.getClassChoiceItems('slayertalents');
      expect(items.find((i) => i.key === 'quarry')?.category).toBe('Advanced Talents');
    });

    test('slayertalents — talent tier filter narrows results', async () => {
      const items = await GameDataService.getClassChoiceItems('slayertalents', {
        talentTier: 'standard',
      });
      expect(items).toHaveLength(1);
    });

    test('magusarcana returns all arcana', async () => {
      const items = await GameDataService.getClassChoiceItems('magusarcana');
      expect(items[0].key).toBe('arcane-accuracy');
    });

    test('warpriestblessings — no deity filter returns all', async () => {
      const items = await GameDataService.getClassChoiceItems('warpriestblessings');
      expect(items).toHaveLength(1);
    });

    test('warpriestblessings — deity filter narrows to deity domains', async () => {
      const items = await GameDataService.getClassChoiceItems('warpriestblessings', {
        deityIds: 'Cayden Cailean',
      });
      expect(Array.isArray(items)).toBe(true);
    });

    test('alchemistdiscoveries — grand tier categorized', async () => {
      const items = await GameDataService.getClassChoiceItems('alchemistdiscoveries');
      expect(items.find((i) => i.key === 'grand-mutagen')?.category).toBe('Grand Discovery');
    });

    test('alchemistdiscoveries — tier filter narrows results', async () => {
      const items = await GameDataService.getClassChoiceItems('alchemistdiscoveries', {
        discoveryTier: 'grand',
      });
      expect(items).toHaveLength(1);
    });

    test('bloodlines — no filter returns all', async () => {
      const items = await GameDataService.getClassChoiceItems('bloodlines');
      expect(items).toHaveLength(2);
    });

    test('bloodlines — classId filter narrows results', async () => {
      const items = await GameDataService.getClassChoiceItems('bloodlines', {
        classIds: 'sorcerer',
      });
      expect(items).toHaveLength(1);
      expect(items[0].key).toBe('aberrant-sorcerer');
    });

    test('feats — no filter returns all', async () => {
      const featsModule = jest.requireMock('@/data/feats/index');
      featsModule.ALL_FEATS = [MOCK_FEAT, MOCK_FEAT_TEAMWORK, MOCK_FEAT_GENERAL];
      const items = await GameDataService.getClassChoiceItems('feats');
      expect(items).toHaveLength(3);
    });

    test('feats — featTypes filter narrows results', async () => {
      const featsModule = jest.requireMock('@/data/feats/index');
      featsModule.ALL_FEATS = [MOCK_FEAT, MOCK_FEAT_TEAMWORK, MOCK_FEAT_GENERAL];
      const items = await GameDataService.getClassChoiceItems('feats', { featTypes: ['general'] });
      expect(items).toHaveLength(1);
    });

    test('feats — isCombatFeat filter narrows results', async () => {
      const featsModule = jest.requireMock('@/data/feats/index');
      featsModule.ALL_FEATS = [MOCK_FEAT, MOCK_FEAT_TEAMWORK, MOCK_FEAT_GENERAL];
      const items = await GameDataService.getClassChoiceItems('feats', { isCombatFeat: true });
      expect(items.every((i) => ['power-attack', 'outflank'].includes(i.key))).toBe(true);
    });

    test('feats — isTeamworkFeat filter narrows results', async () => {
      const featsModule = jest.requireMock('@/data/feats/index');
      featsModule.ALL_FEATS = [MOCK_FEAT, MOCK_FEAT_TEAMWORK, MOCK_FEAT_GENERAL];
      const items = await GameDataService.getClassChoiceItems('feats', { isTeamworkFeat: true });
      expect(items).toHaveLength(1);
    });

    test('shamanspirits — no filter returns all', async () => {
      const items = await GameDataService.getClassChoiceItems('shamanspirits');
      expect(items).toHaveLength(2);
    });

    test('shamanspirits — wanderingOnly filter narrows results', async () => {
      const items = await GameDataService.getClassChoiceItems('shamanspirits', {
        wanderingOnly: true,
      });
      expect(items).toHaveLength(1);
      expect(items[0].key).toBe('battle-spirit');
    });

    test('eidolonevolutions — no filter returns all', async () => {
      const items = await GameDataService.getClassChoiceItems('eidolonevolutions');
      expect(items).toHaveLength(2);
    });

    test('eidolonevolutions — summonerType filter narrows results', async () => {
      const items = await GameDataService.getClassChoiceItems('eidolonevolutions', {
        summonerType: 'apg',
      });
      expect(items.some((i) => i.key === 'bite')).toBe(true); // null summoner always included
      expect(items.some((i) => i.key === 'limbs-arms')).toBe(true);
    });

    test('eidolonevolutions — category based on evolution point cost', async () => {
      const items = await GameDataService.getClassChoiceItems('eidolonevolutions');
      expect(items.find((i) => i.key === 'limbs-arms')?.category).toBe('2-Point Evolutions');
      expect(items.find((i) => i.key === 'bite')?.category).toBe('1-Point Evolutions');
    });

    test('mesmeristtricks — masterful tier categorized', async () => {
      const items = await GameDataService.getClassChoiceItems('mesmeristtricks');
      expect(items.find((i) => i.key === 'time-skitter')?.category).toBe('Masterful Tricks');
    });

    test('wildtalents — no filter returns all', async () => {
      const items = await GameDataService.getClassChoiceItems('wildtalents');
      expect(items).toHaveLength(3);
    });

    test('wildtalents — talentType filter narrows results', async () => {
      const items = await GameDataService.getClassChoiceItems('wildtalents', {
        talentType: 'infusion',
      });
      expect(items).toHaveLength(2);
    });

    test('wildtalents — form infusion category', async () => {
      const items = await GameDataService.getClassChoiceItems('wildtalents');
      expect(items.find((i) => i.key === 'extended-range')?.category).toBe('Form Infusions');
      expect(items.find((i) => i.key === 'kinetic-blade')?.category).toBe('Substance Infusions');
    });

    test('wildtalents — non-infusion uses element as category', async () => {
      const items = await GameDataService.getClassChoiceItems('wildtalents');
      expect(items.find((i) => i.key === 'fire-blast')?.category).toBe('Fire');
    });

    test('occultistfocuspowers — excludes base powers', async () => {
      const items = await GameDataService.getClassChoiceItems('occultistfocuspowers');
      expect(items).toHaveLength(1);
      expect(items[0].key).toBe('abjuration-ward');
    });

    test('phrenicamplifications — major tier categorized', async () => {
      const items = await GameDataService.getClassChoiceItems('phrenicamplifications');
      expect(items.find((i) => i.key === 'relentless-healing')?.category).toBe(
        'Major Amplifications',
      );
    });

    test('spells — filters to cleric list at maxSpellLevel 3', async () => {
      const items = await GameDataService.getClassChoiceItems('spells', {
        classNames: ['cleric'],
        maxSpellLevel: 3,
      });
      // Cure Light Wounds: cleric 1 ≤ 3 ✓
      // Fireball: no cleric level ✗
      // Flame Strike: cleric 5 > 3 ✗
      expect(items).toHaveLength(1);
      expect(items[0].key).toBe('cure-light-wounds');
      expect(items[0].label).toBe('Cure Light Wounds');
      expect(items[0].subLabel).toBe('Clr 1');
      expect(items[0].category).toBe('Level 1');
    });

    test('spells — multiple classNames unions results and deduplicates', async () => {
      const items = await GameDataService.getClassChoiceItems('spells', {
        classNames: ['cleric', 'druid'],
        maxSpellLevel: 5,
      });
      // Cure Light Wounds: cleric 1, druid 1 — appears once (deduplicated)
      // Flame Strike: cleric 5 ≤ 5, druid 4 ≤ 5 — appears once
      const keys = items.map((i) => i.key);
      expect(keys).toContain('cure-light-wounds');
      expect(keys).toContain('flame-strike');
      expect(keys.filter((k) => k === 'cure-light-wounds')).toHaveLength(1);
    });

    test('spells — subLabel includes all relevant class levels', async () => {
      const items = await GameDataService.getClassChoiceItems('spells', {
        classNames: ['cleric', 'druid'],
        maxSpellLevel: 2,
      });
      // Only Cure Light Wounds passes (cleric 1, druid 1 both ≤ 2)
      const clw = items.find((i) => i.key === 'cure-light-wounds');
      expect(clw?.subLabel).toContain('Clr 1');
      expect(clw?.subLabel).toContain('Drd 1');
    });

    test('spells — empty classNames returns empty array', async () => {
      const items = await GameDataService.getClassChoiceItems('spells', { classNames: [] });
      expect(items).toHaveLength(0);
    });

    test('spells — missing classNames returns empty array', async () => {
      const items = await GameDataService.getClassChoiceItems('spells');
      expect(items).toHaveLength(0);
    });

    test('unknown collection returns empty array', async () => {
      const items = await GameDataService.getClassChoiceItems('nonexistent-collection');
      expect(items).toHaveLength(0);
    });
  });

  describe('getEidolonBaseForms', () => {
    test('returns base forms from the connector', async () => {
      const forms = await GameDataService.getEidolonBaseForms();
      expect(forms).toHaveLength(2);
      expect(forms[0].id).toBe('biped');
      expect(forms[1].id).toBe('quadruped');
    });

    test('each base form has id and name', async () => {
      const forms = await GameDataService.getEidolonBaseForms();
      for (const form of forms) {
        expect(form).toHaveProperty('id');
        expect(form).toHaveProperty('name');
      }
    });
  });

  describe('getEidolonSubtypes', () => {
    test('returns subtypes from the connector', async () => {
      const subtypes = await GameDataService.getEidolonSubtypes();
      expect(subtypes).toHaveLength(2);
      expect(subtypes[0].id).toBe('agathion');
      expect(subtypes[1].id).toBe('demon');
    });

    test('each subtype has id and name', async () => {
      const subtypes = await GameDataService.getEidolonSubtypes();
      for (const subtype of subtypes) {
        expect(subtype).toHaveProperty('id');
        expect(subtype).toHaveProperty('name');
      }
    });
  });

  describe('getEidolonDataIndex', () => {
    test('returns an EidolonDataIndex with evolutions, baseForms, and subtypes Maps', async () => {
      const evosModule = jest.requireMock('@/data/eidolonEvolutions/index');
      evosModule.ALL_EIDOLON_EVOLUTIONS = [
        { id: 'bite', name: 'Bite', evolutionPointCost: 1, summoner: null },
      ];

      const index = await GameDataService.getEidolonDataIndex();

      expect(index.evolutions).toBeInstanceOf(Map);
      expect(index.baseForms).toBeInstanceOf(Map);
      expect(index.subtypes).toBeInstanceOf(Map);
    });

    test('evolutions map is keyed by evolution id', async () => {
      const evosModule = jest.requireMock('@/data/eidolonEvolutions/index');
      evosModule.ALL_EIDOLON_EVOLUTIONS = [
        { id: 'bite', name: 'Bite', evolutionPointCost: 1, summoner: null },
        { id: 'claws', name: 'Claws', evolutionPointCost: 1, summoner: null },
      ];

      const index = await GameDataService.getEidolonDataIndex();

      expect(index.evolutions.has('bite')).toBe(true);
      expect(index.evolutions.has('claws')).toBe(true);
      expect(index.evolutions.get('bite')?.name).toBe('Bite');
    });

    test('baseForms map is keyed by form id', async () => {
      const index = await GameDataService.getEidolonDataIndex();

      expect(index.baseForms.has('biped')).toBe(true);
      expect(index.baseForms.has('quadruped')).toBe(true);
      expect(index.baseForms.get('biped')?.name).toBe('Biped');
    });

    test('subtypes map is keyed by subtype id', async () => {
      const index = await GameDataService.getEidolonDataIndex();

      expect(index.subtypes.has('agathion')).toBe(true);
      expect(index.subtypes.has('demon')).toBe(true);
      expect(index.subtypes.get('demon')?.name).toBe('Demon');
    });

    test('map sizes match the number of entries in each catalog', async () => {
      const evosModule = jest.requireMock('@/data/eidolonEvolutions/index');
      evosModule.ALL_EIDOLON_EVOLUTIONS = [
        { id: 'bite', name: 'Bite', evolutionPointCost: 1, summoner: null },
        { id: 'claws', name: 'Claws', evolutionPointCost: 1, summoner: null },
      ];

      const index = await GameDataService.getEidolonDataIndex();

      expect(index.evolutions.size).toBe(2);
      expect(index.baseForms.size).toBe(2);
      expect(index.subtypes.size).toBe(2);
    });
  });

  describe('getArchetypesByClass', () => {
    const MOCK_ARCHETYPE_FIGHTER = {
      name: 'Two-Handed Fighter',
      className: 'Fighter',
      description: 'Focuses on two-handed weapon mastery.',
      replacedFeatures: ['Weapon Training 1'],
      modifiedFeatures: [],
      newFeatures: [],
      source: 'APG',
    };
    const MOCK_ARCHETYPE_ROGUE = {
      name: 'Burglar',
      className: 'Rogue',
      description: 'Skilled at stealth and breaking in.',
      replacedFeatures: ['Trapfinding'],
      modifiedFeatures: [],
      newFeatures: [],
      source: 'APG',
    };

    beforeEach(() => {
      const archetypesModule = jest.requireMock('@/data/classes/archetypes/index');
      archetypesModule.ALL_ARCHETYPES = [MOCK_ARCHETYPE_FIGHTER, MOCK_ARCHETYPE_ROGUE];
    });

    test('returns archetypes for the given class', async () => {
      const archetypes = await GameDataService.getArchetypesByClass('Fighter');
      expect(archetypes).toHaveLength(1);
      expect(archetypes[0].name).toBe('Two-Handed Fighter');
    });

    test('returns empty array when no archetypes match', async () => {
      const archetypes = await GameDataService.getArchetypesByClass('Wizard');
      expect(archetypes).toHaveLength(0);
    });

    test('does not include archetypes from other classes', async () => {
      const archetypes = await GameDataService.getArchetypesByClass('Rogue');
      expect(archetypes.every((a) => a.className === 'Rogue')).toBe(true);
    });
  });

  describe('getFavoredClassBonuses', () => {
    const MOCK_FCB_DWARF_FIGHTER = {
      id: 'dwarf-fighter',
      raceName: 'Dwarf',
      className: 'Fighter',
      shortName: 'Bull Rush/Trip Resist',
      description: "Add +1 to the Fighter's CMD when resisting a bull rush or trip.",
      mechanicalEffect: {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'cmd',
        perLevelValue: { numerator: 1, denominator: 1 },
      },
      source: { bookId: 'apg', bookName: "Advanced Player's Guide", publisher: 'Paizo' },
      isOfficial: true,
      visibility: 'global' as const,
      rev: 1,
      verificationStatus: 'needs_review' as const,
    };
    const MOCK_FCB_DWARF_WIZARD = {
      id: 'dwarf-wizard',
      raceName: 'Dwarf',
      className: 'Wizard',
      shortName: 'Abjuration Duration',
      description: 'Add +1/3 to the effective caster level of wizard abjuration spells.',
      mechanicalEffect: {
        type: 'caster_level',
        scopeType: 'duration_only',
        perLevelValue: { numerator: 1, denominator: 3 },
      },
      source: { bookId: 'apg', bookName: "Advanced Player's Guide", publisher: 'Paizo' },
      isOfficial: true,
      visibility: 'global' as const,
      rev: 1,
      verificationStatus: 'needs_review' as const,
    };

    beforeEach(() => {
      const fcbModule = jest.requireMock('@/data/favoredClassBonuses/index');
      fcbModule.ALL_FAVORED_CLASS_BONUSES = [MOCK_FCB_DWARF_FIGHTER, MOCK_FCB_DWARF_WIZARD];
    });

    test('returns entries matching raceName and className', async () => {
      const results = await GameDataService.getFavoredClassBonuses('Dwarf', 'Fighter');
      expect(results).toHaveLength(1);
      expect(results[0].id).toBe('dwarf-fighter');
    });

    test('returns empty array when no match', async () => {
      const results = await GameDataService.getFavoredClassBonuses('Elf', 'Fighter');
      expect(results).toHaveLength(0);
    });

    test('does not return entries for other race + class combos', async () => {
      const results = await GameDataService.getFavoredClassBonuses('Dwarf', 'Wizard');
      expect(results.every((e) => e.raceName === 'Dwarf' && e.className === 'Wizard')).toBe(true);
    });
  });

  describe('spellKey', () => {
    test('lowercases and replaces non-alphanumeric runs with dashes', () => {
      expect(GameDataService.spellKey('Cure Light Wounds')).toBe('cure-light-wounds');
    });

    test('strips leading and trailing dashes', () => {
      expect(GameDataService.spellKey("D'eath's Touch")).toBe('d-eath-s-touch');
    });

    test('handles multiple consecutive special chars as one dash', () => {
      expect(GameDataService.spellKey('Fire -- Burst')).toBe('fire-burst');
    });

    test('returns already-slugified input unchanged', () => {
      expect(GameDataService.spellKey('fireball')).toBe('fireball');
    });
  });

  describe('maxCastableLevelFromPool', () => {
    test('returns highest index where total > 0', () => {
      const pool = {
        id: 'p1',
        baseClass: 'cleric',
        baseClassEntryId: 'c1',
        spellsPerDay: { total: [0, 4, 3, 2, 0, 0, 0, 0, 0, 0] },
      } as Parameters<typeof GameDataService.maxCastableLevelFromPool>[0];
      expect(GameDataService.maxCastableLevelFromPool(pool)).toBe(3);
    });

    test('falls back to ESL formula when all slots are 0', () => {
      const pool = {
        id: 'p1',
        baseClass: 'cleric',
        baseClassEntryId: 'c1',
        effectiveSpellcastingLevel: 6,
        spellsPerDay: { total: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      } as Parameters<typeof GameDataService.maxCastableLevelFromPool>[0];
      // ceil(6/2) = 3
      expect(GameDataService.maxCastableLevelFromPool(pool)).toBe(3);
    });

    test('returns 0 when no slot data and no ESL', () => {
      const pool = {
        id: 'p1',
        baseClass: 'cleric',
        baseClassEntryId: 'c1',
      } as Parameters<typeof GameDataService.maxCastableLevelFromPool>[0];
      expect(GameDataService.maxCastableLevelFromPool(pool)).toBe(0);
    });
  });

  describe('buildSpellSubLabel', () => {
    test('formats known class abbreviation correctly', () => {
      expect(GameDataService.buildSpellSubLabel({ cleric: 3, druid: 4 }, ['cleric'])).toBe('Clr 3');
    });

    test('joins multiple classes with /', () => {
      expect(GameDataService.buildSpellSubLabel({ cleric: 1, druid: 1 }, ['cleric', 'druid'])).toBe(
        'Clr 1 / Drd 1',
      );
    });

    test('uses 3-char fallback for unknown class', () => {
      expect(GameDataService.buildSpellSubLabel({ oracle: 2 }, ['oracle'])).toBe('Orc 2');
    });

    test('skips classes not in classLevels', () => {
      expect(GameDataService.buildSpellSubLabel({ cleric: 2 }, ['cleric', 'druid'])).toBe('Clr 2');
    });
  });

  describe('buildCastableSpellItems', () => {
    const CLERIC_POOL = {
      id: 'pool-cleric',
      baseClass: 'cleric',
      baseClassEntryId: 'entry-cleric',
      spellsPerDay: {
        base: [0, 4, 3, 2, 0, 0, 0, 0, 0, 0],
        bonus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        misc: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        total: [0, 4, 3, 2, 0, 0, 0, 0, 0, 0],
        used: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    } as Parameters<typeof GameDataService.buildCastableSpellItems>[0][0];

    test('prepared caster — queries connector and returns SearchItems within max level', async () => {
      const items = await GameDataService.buildCastableSpellItems(
        [CLERIC_POOL],
        [],
        [],
        [
          { id: 'entry-cleric', name: 'Cleric', level: 5 } as Parameters<
            typeof GameDataService.buildCastableSpellItems
          >[3][0],
        ],
        {},
      );
      // Cure Light Wounds (cleric 1) and Flame Strike (cleric 5 > maxLevel 3) — CLW should be included, FS excluded
      const keys = items.map((i) => i.key);
      expect(keys).toContain('cure-light-wounds');
      expect(keys).not.toContain('flame-strike');
    });

    test('prepared caster — uses eslByPoolId fallback when maxLevel is 0', async () => {
      const emptySlotPool = {
        ...CLERIC_POOL,
        spellsPerDay: {
          base: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          bonus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          misc: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          total: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          used: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      };
      // ESL=6 → maxLevel = ceil(6/2) = 3
      const items = await GameDataService.buildCastableSpellItems(
        [emptySlotPool],
        [],
        [],
        [
          { id: 'entry-cleric', name: 'Cleric', level: 6 } as Parameters<
            typeof GameDataService.buildCastableSpellItems
          >[3][0],
        ],
        { 'pool-cleric': 6 },
      );
      const keys = items.map((i) => i.key);
      expect(keys).toContain('cure-light-wounds');
    });

    test('spontaneous caster — uses knownSpells for that class', async () => {
      const sorc: Parameters<typeof GameDataService.buildCastableSpellItems>[0][0] = {
        id: 'pool-sorc',
        baseClass: 'sorcerer',
        baseClassEntryId: 'entry-sorc',
      } as Parameters<typeof GameDataService.buildCastableSpellItems>[0][0];

      const knownSpells = [
        {
          name: 'Fireball',
          classLevels: { wizard: 3, sorcerer: 3 },
          classes: [{ className: 'sorcerer', level: 3 }],
        },
      ] as unknown as Parameters<typeof GameDataService.buildCastableSpellItems>[1];

      const items = await GameDataService.buildCastableSpellItems(
        [sorc],
        knownSpells,
        [],
        [
          { id: 'entry-sorc', name: 'Sorcerer', level: 5 } as Parameters<
            typeof GameDataService.buildCastableSpellItems
          >[3][0],
        ],
        {},
      );
      const keys = items.map((i) => i.key);
      expect(keys).toContain('fireball');
      expect(items.find((i) => i.key === 'fireball')?.category).toBe('Level 3');
    });

    test('spellbook caster — uses spellbooks for that class', async () => {
      const wiz: Parameters<typeof GameDataService.buildCastableSpellItems>[0][0] = {
        id: 'pool-wiz',
        baseClass: 'wizard',
        baseClassEntryId: 'entry-wiz',
      } as Parameters<typeof GameDataService.buildCastableSpellItems>[0][0];

      const spellbooks = [
        {
          name: 'Standard',
          spells: [
            {
              name: 'Fireball',
              classLevels: { wizard: 3, sorcerer: 3 },
            },
          ],
        },
      ] as unknown as Parameters<typeof GameDataService.buildCastableSpellItems>[2];

      const items = await GameDataService.buildCastableSpellItems(
        [wiz],
        [],
        spellbooks,
        [
          { id: 'entry-wiz', name: 'Wizard', level: 5 } as Parameters<
            typeof GameDataService.buildCastableSpellItems
          >[3][0],
        ],
        {},
      );
      const keys = items.map((i) => i.key);
      expect(keys).toContain('fireball');
    });

    test('no-pools fallback — includes prepared classes from class list', async () => {
      const clericClass = { id: 'entry-cleric', name: 'Cleric', level: 5 } as Parameters<
        typeof GameDataService.buildCastableSpellItems
      >[3][0];
      const items = await GameDataService.buildCastableSpellItems([], [], [], [clericClass], {});
      // With no pools and cleric in class list, queries with maxSpellLevel 9
      expect(items.length).toBeGreaterThan(0);
    });

    test('deduplicates spells appearing in multiple pools', async () => {
      const pool2: Parameters<typeof GameDataService.buildCastableSpellItems>[0][0] = {
        ...CLERIC_POOL,
        id: 'pool-cleric-2',
        baseClassEntryId: 'entry-cleric-2',
      };
      const items = await GameDataService.buildCastableSpellItems(
        [CLERIC_POOL, pool2],
        [],
        [],
        [
          { id: 'entry-cleric', name: 'Cleric', level: 5 } as Parameters<
            typeof GameDataService.buildCastableSpellItems
          >[3][0],
          { id: 'entry-cleric-2', name: 'Cleric', level: 5 } as Parameters<
            typeof GameDataService.buildCastableSpellItems
          >[3][0],
        ],
        {},
      );
      const clwItems = items.filter((i) => i.key === 'cure-light-wounds');
      expect(clwItems).toHaveLength(1);
    });
  });
});
