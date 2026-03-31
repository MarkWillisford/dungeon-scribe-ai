import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const ADVANCED_CLASS_ORIGINS_FEATS: FeatDefinition[] = [
  {
    id: 'ambush_sense',
    name: 'Ambush Sense',
    description:
      'You gain a bonus on Perception checks made to determine awareness for the surprise round of combat, and a dodge bonus to AC in any surprise round in which you get to act. These bonuses are equal to the bonus you gain from trap sense.',
    shortDescription: 'Gain Perception and AC bonuses in surprise rounds equal to your trap sense bonus.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'class_feature', featureName: 'trap sense' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.DODGE,
        target: 'ac',
        source: 'Ambush Sense',
      },
      {
        type: 'skill_bonus',
        target: 'perception',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Ambush Sense',
      },
    ],
    activationMode: 'conditional',
    tags: ['surprise', 'perception', 'trap sense', 'slayer', 'investigator'],
  },
  {
    id: 'amplified_hex',
    name: 'Amplified Hex',
    description:
      'Whenever you use a hex, you may expend a prepared spell or spell slot of at least 1st level to augment the hex. The first time you do so in a day, you may choose one of the following: increase the hex\'s saving throw DC by 1, increase the hex\'s range by 30 feet (the hex must already have a range of at least 30 feet), or increase the hex\'s duration by 1 round (the hex must already have a duration of at least 1 round). Each subsequent time you use this ability in the same day, you must expend a spell slot 1 level higher than the last (2nd level for the second use, 3rd for the third, and so on).',
    shortDescription: 'Expend spell slots to increase hex DC, range, or duration.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'hex' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Amplified Hex',
      },
    ],
    activationMode: 'conditional',
    tags: ['hex', 'witch', 'shaman', 'spellcasting'],
  },
  {
    id: 'daggermark_lore',
    name: 'Daggermark Lore',
    description:
      'Choose one specific poison. The number of consecutive saves required to cure that poison increases by 1, and the DC to neutralize the poison with magic increases by 5. An initial successful saving throw still prevents the poison from taking effect. If you have the poison lore class feature, you are treated as having the poison use class feature for the purpose of meeting feat prerequisites.',
    shortDescription: 'Increase the saves to cure and magical neutralization DC for a chosen poison.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'craft_alchemy', ranks: 5 },
      { type: 'special', description: 'Member of the Daggermark Poisoner\'s Guild' },
      {
        type: 'special',
        description: 'Poison lore or poison use class feature',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Daggermark Lore',
      },
    ],
    activationMode: 'passive',
    tags: ['poison', 'investigator', 'guild', 'daggermark'],
  },
  {
    id: 'eldritch_aid',
    name: 'Eldritch Aid',
    description:
      'As a standard action, you can expend a prepared spell or spell slot of 1st level or higher to empower an allied spellcaster within close range (25 feet + 5 feet per 2 caster levels). If that ally casts a spell with an instantaneous duration of equal or lower level before the beginning of your next turn, the ally\'s caster level for that spell increases by 2. If you expend a spell slot of at least twice the level of the ally\'s spell, the caster level bonus increases to +4. Only the first qualifying spell the ally casts gains this benefit.',
    shortDescription: 'Expend a spell to boost an ally\'s caster level by 2 (or 4 with a higher slot).',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['general'],
    prerequisites: [{ type: 'caster_level', minimum: 1 }],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Eldritch Aid',
      },
    ],
    activationMode: 'conditional',
    tags: ['spellcasting', 'support', 'arcanist', 'wizard', 'caster level'],
  },
  {
    id: 'expanded_spell_kenning',
    name: 'Expanded Spell Kenning',
    description:
      'When you use your spell kenning class feature, you can select a spell from the druid or witch spell list in addition to your normal options.',
    shortDescription: 'Add druid and witch spell lists to your spell kenning options.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'spell kenning' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Expanded Spell Kenning',
      },
    ],
    activationMode: 'passive',
    tags: ['skald', 'spell kenning', 'spellcasting'],
  },
  {
    id: 'expanded_studies',
    name: 'Expanded Studies',
    description:
      'You add 7th-level spells to your spell list for purposes of using spell completion and spell trigger magic items. Hunters add 7th-level druid spells; warpriests add 7th-level cleric spells. This does not grant the ability to cast these spells.',
    shortDescription: 'Add 7th-level spells to your spell list for magic item activation.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 17 },
      {
        type: 'special',
        description: 'Hunter or warpriest level 16th',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Expanded Studies',
      },
    ],
    activationMode: 'passive',
    tags: ['hunter', 'warpriest', 'spellcasting', 'magic items'],
  },
  {
    id: 'fencing_grace',
    name: 'Fencing Grace',
    description:
      'When wielding a rapier one-handed, you can add your Dexterity modifier instead of your Strength modifier to that weapon\'s damage. The rapier must be one appropriate for your size. You do not gain this benefit while fighting with two weapons or using flurry of blows, or any time another hand is otherwise occupied. If you have the panache class feature, you gain a +2 bonus to CMD against disarm attempts made while you are wielding a rapier as long as you have at least 1 panache point.',
    shortDescription: 'Add DEX to rapier damage instead of STR when wielding one-handed.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'feat', featId: 'weapon_focus_rapier' },
    ],
    effects: [
      {
        type: 'damage_bonus',
        target: 'rapier',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Fencing Grace',
      },
    ],
    activationMode: 'passive',
    tags: ['rapier', 'dexterity', 'swashbuckler', 'finesse', 'panache'],
  },
  {
    id: 'fighting_frenzy_aco',
    name: 'Fighting Frenzy',
    description:
      'When you are in a rage and an ally who also has this feat is in a rage within 60 feet of you, you don\'t take the normal -2 penalty to AC for being in a rage. If you would take a larger penalty to AC for being in a rage, reduce that penalty by 2.',
    shortDescription: 'Negate the -2 AC penalty from rage when a raging ally with this feat is within 60 ft.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'class_feature', featureName: 'rage' },
    ],
    effects: [
      {
        type: 'ac_bonus',
        target: 'ac',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Fighting Frenzy',
      },
    ],
    activationMode: 'conditional',
    tags: ['rage', 'teamwork', 'barbarian', 'bloodrager', 'skald'],
  },
  {
    id: 'know_weakness',
    name: 'Know Weakness',
    description:
      'When you successfully identify a creature with the appropriate Knowledge check, you gain a +1 bonus on attack and damage rolls against that creature for 1 round.',
    shortDescription: 'Gain +1 attack and damage for 1 round after identifying a creature via Knowledge.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: 'bardic knowledge' }],
    effects: [
      {
        type: 'attack_bonus',
        target: 'attack',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Know Weakness',
      },
      {
        type: 'damage_bonus',
        target: 'damage',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Know Weakness',
      },
    ],
    activationMode: 'conditional',
    tags: ['knowledge', 'bard', 'investigator', 'monster lore'],
  },
  {
    id: 'mad_magic',
    name: 'Mad Magic',
    description:
      'You can cast spells from any class that grants you spells while in a bloodrage. When you use moment of clarity during a rage, you retain the benefits of your rage. If you have the greater bloodrage class feature, you gain a +1 bonus to the save DCs of spells you cast while in a bloodrage.',
    shortDescription: 'Cast spells during bloodrage; +1 spell DC with greater bloodrage.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['combat'],
    prerequisites: [
      {
        type: 'special',
        description: 'Bloodrage class feature or perfect clarity rage power',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Mad Magic',
      },
    ],
    activationMode: 'conditional',
    tags: ['bloodrager', 'bloodrage', 'spellcasting', 'rage'],
  },
  {
    id: 'onslaught_aco',
    name: 'Onslaught',
    description:
      'If you use Power Attack with the first melee attack you make during a surprise round, you can sneak attack even if you are not flanking your target and it is not denied its Dexterity bonus to AC.',
    shortDescription: 'Sneak attack with Power Attack during surprise rounds without flanking.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 1 },
      { type: 'class_feature', featureName: 'sneak attack' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Onslaught',
      },
    ],
    activationMode: 'conditional',
    tags: ['sneak attack', 'surprise', 'slayer', 'rogue', 'power attack'],
  },
  {
    id: 'pack_tactics',
    name: 'Pack Tactics',
    description:
      'Your animal companion is treated as having all of your teamwork feats for the purpose of determining whether you receive a bonus from your teamwork feats. Your animal companion doesn\'t receive any bonuses from these feats unless it actually possesses the feats. The positioning and actions required by your teamwork feats must still be met.',
    shortDescription: 'Your animal companion counts as having your teamwork feats for your bonus calculations.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'class_feature', featureName: 'animal companion' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Pack Tactics',
      },
    ],
    activationMode: 'passive',
    tags: ['teamwork', 'animal companion', 'hunter', 'druid', 'ranger'],
  },
  {
    id: 'totem_beast_aco',
    name: 'Totem Beast',
    description:
      'Select one animal aspect from the hunter class\'s animal focus class feature. Your animal companion gains the benefits of the selected animal aspect, treating its Hit Dice as its effective hunter level. Your animal companion also gains natural coloration suggestive of this aspect. This benefit does not stack if the companion is already under the benefit of the same animal aspect from the actual class feature.',
    shortDescription: 'Grant your animal companion an animal focus aspect using its HD as hunter level.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'class_feature', featureName: 'animal companion' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Totem Beast',
      },
    ],
    activationMode: 'passive',
    tags: ['animal companion', 'animal focus', 'hunter', 'totem'],
  },
  {
    id: 'unfair_grip',
    name: 'Unfair Grip',
    description:
      'When performing a grapple combat maneuver, you gain a +1 bonus on checks to maintain your grapple, and your grappled foes take a -1 penalty on checks to escape your grapple.',
    shortDescription: '+1 to maintain grapple; foes take -1 to escape your grapple.',
    source: 'Pathfinder Player Companion: Advanced Class Origins',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'special',
        value: 1,
        bonusType: BonusType.UNTYPED,
        target: 'grapple',
        source: 'Unfair Grip',
      },
    ],
    activationMode: 'conditional',
    tags: ['grapple', 'brawler', 'combat maneuver'],
  },
];
