import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const ISWG_FEATS: FeatDefinition[] = [
  // ==================== INNER SEA WORLD GUIDE ====================
  // Skipped (already in database): Hamatulatsu, Noble Scion, Rapid Reload, Scholar

  // aldori_dueling_mastery — already in adventurersGuideFeats.ts (same mechanics)

  {
    id: 'altitude_affinity',
    name: 'Altitude Affinity',
    description:
      'You become automatically acclimated to high altitudes and gain a +2 competence bonus on all Survival checks made at altitudes of 5,000 feet or higher.',
    shortDescription:
      'Auto-acclimated to altitude; +2 competence on Survival checks at high elevation.',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'endurance' }],
    effects: [
      {
        type: 'bonus',
        target: 'skill.survival',
        value: 2,
        bonusType: BonusType.COMPETENCE,
        source: 'Altitude Affinity',
        condition: {
          type: 'custom',
          description: 'when at altitudes of 5,000 feet or higher',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['altitude', 'survival', 'environment', 'endurance'],
  },

  // andoren_falconry — already in psoFeats.ts (same mechanics)

  {
    id: 'arcane_vendetta',
    name: 'Arcane Vendetta',
    description:
      'You deal +2 damage with weapon attacks made against any target you have witnessed casting an arcane spell (not using a spell-like ability) in the last 5 rounds. You must have successfully identified the spell with a Spellcraft check to know without a doubt that the spell is arcane.',
    shortDescription: '+2 weapon damage against targets you have witnessed casting arcane spells.',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'spellcraft', ranks: 1 }],
    effects: [
      {
        type: 'bonus',
        target: 'damage',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Arcane Vendetta',
        condition: {
          type: 'custom',
          description:
            'against a target witnessed casting an arcane spell in the last 5 rounds (identified via Spellcraft)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['arcane', 'damage', 'spellcraft', 'vendetta'],
  },

  // careful_speaker — already in heroesFeats.ts (same mechanics)

  // cypher_magic — already in adventurersGuideFeats.ts (same mechanics)
  // cypher_script — already in adventurersGuideFeats.ts (same mechanics)

  {
    id: 'demon_hunter',
    name: 'Demon Hunter',
    description:
      'You gain a +2 bonus on Knowledge (planes) checks to know the powers and abilities of demons. You gain a +2 morale bonus on all attack rolls and a +2 morale bonus on caster level checks to penetrate spell resistance made against creatures with the demon subtype that you recognize as demons.',
    shortDescription:
      '+2 Knowledge (planes) vs. demons; +2 morale on attacks and SR checks vs. recognized demons.',
    source: 'Inner Sea World Guide',
    types: ['combat'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 6 }],
    effects: [
      {
        type: 'bonus',
        target: 'skill.knowledge_planes',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Demon Hunter',
        condition: {
          type: 'custom',
          description: 'to know the powers and abilities of demons',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'attack',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Demon Hunter',
        condition: {
          type: 'custom',
          description: 'against creatures with the demon subtype you recognize as demons',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'caster_level_check.spell_resistance',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Demon Hunter',
        condition: {
          type: 'custom',
          description:
            'to penetrate spell resistance of creatures with the demon subtype you recognize as demons',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['demon', 'knowledge', 'morale', 'spell resistance', 'planes'],
  },

  {
    id: 'dervish_dance',
    name: 'Dervish Dance',
    description:
      'When wielding a scimitar with one hand, you can use your Dexterity modifier instead of your Strength modifier on melee attack rolls and damage rolls. A scimitar used in this way is treated as a one-handed piercing weapon for the purpose of feats and class abilities that require such a weapon. You cannot use this feat if you are carrying a weapon or shield in your off hand.',
    shortDescription:
      'Use DEX instead of STR on attack and damage rolls with a one-handed scimitar.',
    source: 'Inner Sea World Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'skill', skillId: 'perform_dance', ranks: 2 },
      { type: 'proficiency', proficiency: 'scimitar' },
    ],
    effects: [
      {
        type: 'stat_replacement',
        target: 'attack_and_damage.scimitar',
        value: 'DEX',
        bonusType: BonusType.UNTYPED,
        source: 'Dervish Dance',
        condition: {
          type: 'custom',
          description:
            'when wielding a scimitar one-handed with no weapon or shield in the off hand',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['dexterity', 'scimitar', 'finesse', 'dance', 'qadira', 'katapesh'],
  },

  {
    id: 'desert_dweller',
    name: 'Desert Dweller',
    description:
      'You treat heat environments as one step less severe (this stacks with similar abilities to make the environment two steps less severe). You need to consume only half the normal amount of water for a creature of your size. You gain a +4 bonus on Constitution checks to resist the effects of thirst, and a +4 bonus on saving throws and checks to avoid becoming blinded or dazzled by glare or being deceived by a desert mirage.',
    shortDescription:
      'Reduced heat severity, half water needs, and +4 vs. thirst/glare/mirage effects.',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'favored terrain (desert)' }],
    effects: [
      {
        type: 'bonus',
        target: 'saving_throw',
        value: 4,
        bonusType: BonusType.UNTYPED,
        source: 'Desert Dweller',
        condition: {
          type: 'custom',
          description:
            'to avoid becoming blinded or dazzled by glare or being deceived by a desert mirage',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['desert', 'environment', 'heat', 'survival', 'thirst', 'ranger'],
  },

  {
    id: 'desperate_battler',
    name: 'Desperate Battler',
    description:
      'When you are the only creature threatening an opponent (no ally is within 10 feet of you and you are not benefiting from the aid another action), you gain a +1 morale bonus on melee attack and damage rolls.',
    shortDescription:
      '+1 morale on melee attack and damage when fighting alone with no nearby allies.',
    source: 'Inner Sea World Guide',
    types: ['combat'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'attack',
        value: 1,
        bonusType: BonusType.MORALE,
        source: 'Desperate Battler',
        condition: {
          type: 'custom',
          description: 'when no ally is within 10 feet and you are not benefiting from aid another',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'damage',
        value: 1,
        bonusType: BonusType.MORALE,
        source: 'Desperate Battler',
        condition: {
          type: 'custom',
          description: 'when no ally is within 10 feet and you are not benefiting from aid another',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['morale', 'melee', 'solo', 'desperate'],
  },

  {
    id: 'eye_of_the_arclord',
    name: 'Eye of the Arclord',
    description:
      'Once per day as a standard action, you can open a magical third eye that remains open for 1 minute. While open, all divination spells you cast gain a +1 bonus to caster level (if you begin casting while the eye is open), you gain darkvision 60 feet, you can use detect magic at will, and you gain a +8 bonus on Perception checks to spot invisible creatures.',
    shortDescription:
      'Once/day: open third eye for 1 min granting darkvision, detect magic, +8 Perception vs. invisible, and +1 CL on divinations.',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 4 },
      { type: 'special', description: 'Ability to cast arcane spells' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'caster_level.divination',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Eye of the Arclord',
        condition: {
          type: 'custom',
          description: 'while the third eye is open',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'skill.perception',
        value: 8,
        bonusType: BonusType.UNTYPED,
        source: 'Eye of the Arclord',
        condition: {
          type: 'custom',
          description: 'to spot invisible creatures while the third eye is open',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['arclord', 'divination', 'darkvision', 'detect magic', 'perception', 'arcane'],
  },

  {
    id: 'fey_foundling',
    name: 'Fey Foundling',
    description:
      'You were found in the wilds as a child, bearing a mark of the First World. Whenever you receive magical healing, you heal an additional 2 points per die rolled. You gain a +2 bonus on all saving throws against death effects. Unfortunately, you also take 1 additional point of damage from cold iron weapons.',
    shortDescription:
      '+2 HP per healing die from magical healing; +2 vs. death effects; -1 vs. cold iron.',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Can only be selected at 1st level.' }],
    effects: [
      {
        type: 'bonus',
        target: 'saving_throw',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Fey Foundling',
        condition: {
          type: 'custom',
          description: 'against death effects',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['fey', 'first world', 'healing', 'death', 'cold iron', '1st level only'],
  },

  {
    id: 'focused_discipline',
    name: 'Focused Discipline',
    description:
      'You gain a +2 bonus on all saving throws against fear effects. Whenever a fear effect targeting you fails (whether because you saved, are immune, or the attack misses), you gain a +2 morale bonus on attack rolls, weapon damage rolls, and CMB checks against the creature that used the fear effect for 1 round.',
    shortDescription:
      '+2 saves vs. fear; +2 morale on attacks/damage/CMB for 1 round when a fear effect fails against you.',
    source: 'Inner Sea World Guide',
    types: ['combat'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'saving_throw',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Focused Discipline',
        condition: {
          type: 'custom',
          description: 'against fear effects',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'attack',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Focused Discipline',
        condition: {
          type: 'custom',
          description: 'for 1 round against the creature whose fear effect failed to affect you',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'damage',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Focused Discipline',
        condition: {
          type: 'custom',
          description: 'for 1 round against the creature whose fear effect failed to affect you',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'cmb',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Focused Discipline',
        condition: {
          type: 'custom',
          description: 'for 1 round against the creature whose fear effect failed to affect you',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['fear', 'morale', 'discipline', 'cmb', 'saving throw'],
  },

  {
    id: 'fortune_teller',
    name: 'Fortune Teller',
    description:
      "You select a divination focus item (such as a crystal ball, set of runes, or Harrow deck). When casting divination school spells, you may substitute this focus for material components costing up to 1,000 gp. If you use both your focus and the spell's normal material component together, the spell is cast at +1 caster level.",
    shortDescription:
      'Divination focus substitutes material components up to 1,000 gp; using both grants +1 caster level.',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Ability to cast divination spells' }],
    effects: [
      {
        type: 'bonus',
        target: 'caster_level.divination',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Fortune Teller',
        condition: {
          type: 'custom',
          description:
            'when using both the divination focus and the normal material component together',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['divination', 'focus', 'material component', 'harrow', 'caster level'],
  },

  {
    id: 'free_spirit',
    name: 'Free Spirit',
    description:
      'You gain a +2 morale bonus on saving throws made against mind-affecting effects and on all Escape Artist or grapple checks made to escape a grapple or to escape from bonds.',
    shortDescription:
      '+2 morale on saves vs. mind-affecting effects and on checks to escape grapples or bonds.',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Any chaotic alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'saving_throw',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Free Spirit',
        condition: {
          type: 'custom',
          description: 'against mind-affecting effects',
          params: {},
        },
      },
      {
        type: 'bonus',
        target: 'skill.escape_artist',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Free Spirit',
        condition: {
          type: 'custom',
          description: 'when escaping a grapple or bonds',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['chaotic', 'mind-affecting', 'escape artist', 'grapple', 'morale', 'liberty'],
  },

  {
    id: 'godless_healing',
    name: 'Godless Healing',
    description:
      'Once per day when you have half your total hit points or fewer, you may heal yourself of an amount of damage equal to 1d8 plus your total Hit Dice as a move action. This is a supernatural ability. You can take this feat more than once; each additional time grants one additional use per day.',
    shortDescription:
      'Once/day as a move action, heal 1d8 + HD when at half HP or below (no deity required).',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Cannot have a patron deity.' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['self-healing', 'supernatural', 'atheist', 'godless', 'hit points'],
  },

  {
    id: 'green_faith_acolyte',
    name: 'Green Faith Acolyte',
    description:
      'Your damaging spells do not harm plants. In addition, spells that utilize, heal, or enhance plants gain a +1 bonus to caster level.',
    shortDescription:
      'Your spells cannot harm plants; plant-enhancing/healing spells gain +1 caster level.',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Follower of the Green Faith' }],
    effects: [
      {
        type: 'bonus',
        target: 'caster_level.plant_spells',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Green Faith Acolyte',
        condition: {
          type: 'custom',
          description: 'for spells that utilize, heal, or enhance plants',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['green faith', 'druid', 'plants', 'caster level', 'nature'],
  },

  {
    id: 'harmonic_spell',
    name: 'Harmonic Spell',
    description:
      'Whenever you cast a spell while maintaining a bardic performance, you can maintain the bardic performance for that round without expending one of your rounds of performance for the day. In addition, you can switch from one bardic performance to another as a swift action when you cast a spell while maintaining a bardic performance.',
    shortDescription:
      'Casting while performing does not cost a round of performance; can switch performances as a swift action when casting.',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'bardic music' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['bard', 'bardic performance', 'spellcasting', 'performance', 'swift action'],
  },

  {
    id: 'harrowed',
    name: 'Harrowed',
    description:
      "Your life has been influenced by accurate Harrow card readings, and you believe in your own destiny. You gain a +1 bonus on all Will saves made to resist enchantment effects. Once per day, you may draw from your Harrow deck and apply a +2 bonus on any single d20 roll that is modified by the drawn card's suit. You may assign this +2 bonus after you make the roll, but must do so before you know whether the roll was a success.",
    shortDescription:
      '+1 Will vs. enchantments; once/day draw a Harrow card for a +2 bonus on a d20 roll of the matching suit.',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'saving_throw.will',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Harrowed',
        condition: {
          type: 'custom',
          description: 'against enchantment effects',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['harrow', 'enchantment', 'will save', 'destiny', 'varisia'],
  },

  {
    id: 'hermean_blood',
    name: 'Hermean Blood',
    description:
      'You descend from Hermea or are the offspring of a Hermean union. Select two skills that share the same ability modifier. Both of those skills become class skills for you. Note that Hermean agents may take interest in you.',
    shortDescription: 'Two skills with the same ability modifier become class skills for you.',
    source: 'Inner Sea World Guide',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Can only be selected at 1st level.' }],
    effects: [],
    activationMode: 'passive',
    tags: ['hermea', 'class skill', 'background', '1st level only'],
  },

  // necromantic_affinity — already in bloodSeriesFeats.ts (same mechanics)
];

// CHECKPOINT: last_written=necromantic_affinity, written=22/22, status=complete
