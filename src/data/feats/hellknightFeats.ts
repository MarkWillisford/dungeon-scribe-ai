import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const HELLKNIGHT_FEATS: FeatDefinition[] = [
  {
    id: 'casters_champion',
    name: "Caster's Champion",
    description:
      'Three times per day as a swift action, when you are within 30 feet of an ally who is an arcane spellcaster, you can channel a portion of her arcane power into your weapons. For 1 round, you gain a +1 bonus on all weapon damage rolls, and your weapons are treated as magic for the purpose of overcoming damage reduction. This bonus increases by 1 at BAB +4 and every 4 points thereafter, to a maximum of +5 at BAB +16. This feat counts as Arcane Strike for prerequisite purposes.',
    shortDescription: "Channel nearby arcane ally's power for scaling weapon damage bonus 3/day.",
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['combat'],
    prerequisites: [],
    effects: [
      {
        type: 'damage',
        target: 'special.weapon',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: "Caster's Champion",
      },
    ],
    activationMode: 'conditional',
    tags: ['arcane', 'weapon', 'damage', 'hellknight'],
  },
  {
    id: 'censoring_critical',
    name: 'Censoring Critical',
    description:
      'Whenever you score a critical hit against an opponent, the victim is unable to speak for 1d4+1 rounds. This prevents spellcasters from using spells with verbal components. A successful Fortitude saving throw reduces this muteness to 1 round. The DC of this Fortitude save is equal to 10 + your base attack bonus.',
    shortDescription: 'Critical hits mute foes for 1d4+1 rounds (Fort for 1 round).',
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['combat', 'critical'],
    prerequisites: [
      { type: 'feat', featId: 'critical_focus' },
      { type: 'bab', minimum: 15 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Censoring Critical',
      },
    ],
    activationMode: 'conditional',
    tags: ['critical hit', 'mute', 'spellcasting', 'hellknight', 'silence'],
  },
  {
    id: 'dislocate',
    name: 'Dislocate',
    description:
      "As a swift action, you can deal 1d8 nonlethal damage to yourself by dislocating your joints, reducing Escape Artist checks that normally take 1 minute to a full-round action. At 7+ Hit Dice, self-damage decreases to 1d6. At 14+ Hit Dice, you take no damage and full-round Escape Artist checks become move actions. You can't gain benefits from this feat if you are immune to nonlethal damage.",
    shortDescription: 'Dislocate joints to speed up Escape Artist checks; scaling benefits.',
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'CON', minimum: 13 }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'skill.escape_artist',
        source: 'Dislocate',
      },
    ],
    activationMode: 'conditional',
    tags: ['escape artist', 'flexibility', 'hellknight', 'torture'],
  },
  {
    id: 'extended_scrying',
    name: 'Extended Scrying',
    description:
      'Your scrying spells have their durations doubled as if modified by the Extend Spell metamagic feat. Scrying spells with casting times of 10 minutes or longer have their casting time cut in half.',
    shortDescription: 'Double scrying duration and halve long casting times.',
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast a spell of the scrying subschool' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Extended Scrying',
      },
    ],
    activationMode: 'passive',
    tags: ['scrying', 'divination', 'duration', 'hellknight'],
  },
  {
    id: 'gate_breaker',
    name: 'Gate Breaker',
    description:
      'Whenever you would deal damage to an object, you deal normal damage plus an additional amount equal to your Strength modifier. This applies to both unattended objects and those you damage as part of a successful sunder combat maneuver check.',
    shortDescription: 'Deal extra STR mod damage to objects and sundered items.',
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_sunder' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'damage',
        target: 'special.objects',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Gate Breaker',
      },
    ],
    activationMode: 'passive',
    tags: ['sunder', 'objects', 'strength', 'hellknight'],
  },
  {
    id: 'hellknight_aegis',
    name: 'Hellknight Aegis',
    description:
      'Once per day as a full-round action, you can break your Hellknight armor to trigger a protective spell: break enchantment, neutralize poison, remove disease, or remove paralysis (using your character level as caster level). The armor becomes broken and requires repair. You can use this ability even if paralyzed but not if unconscious. Only works with Hellknight-named armor that is not already broken.',
    shortDescription: 'Break Hellknight armor 1/day for a protective spell effect.',
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['combat'],
    prerequisites: [
      { type: 'proficiency', proficiency: 'heavy armor' },
      { type: 'bab', minimum: 5 },
      { type: 'special', description: 'Must swear allegiance to a single Hellknight order' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Hellknight Aegis',
      },
    ],
    activationMode: 'conditional',
    tags: ['hellknight', 'armor', 'protection', 'healing'],
  },
  {
    id: 'hellknight_obedience',
    name: 'Hellknight Obedience',
    description:
      "You gain proficiency in all favored weapons of your chosen Hellknight order. Through daily reckonings (1 hour/day), you unlock special abilities tied to your order. You gain a special ability from your order's Reckoning entry, and boons at 12+ HD (first), 16+ HD (second), and 20+ HD (third). Failing to perform daily reckonings causes loss of all benefits until the next reckoning.",
    shortDescription:
      'Daily Hellknight reckonings grant order weapon proficiency and scaling boons.',
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_planes', ranks: 3 },
      { type: 'special', description: 'Must swear allegiance to a single Hellknight order' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Hellknight Obedience',
      },
    ],
    activationMode: 'passive',
    tags: ['hellknight', 'obedience', 'boon', 'order'],
  },
  {
    id: 'hellknight_obsession',
    name: 'Hellknight Obsession',
    description:
      "During your Hellknight reckoning, if you inflict lethal damage upon yourself, you gain fantastic focus. Once in the next 24 hours as a swift action (spending 1 point of lethal damage), activate one of: Fervor (+1 boon DCs for 1 hour), Indomitability (reroll failed Will save), Menacing (+3 Intimidate/Sense Motive for 1 hour), or Mercilessness (double favored weapon crit range for 1 hour, doesn't stack).",
    shortDescription: 'Self-harm during reckoning for one of four powerful daily benefits.',
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'hellknight_obedience' },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 3 },
      { type: 'special', description: 'Must swear allegiance to a single Hellknight order' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Hellknight Obsession',
      },
    ],
    activationMode: 'conditional',
    tags: ['hellknight', 'obedience', 'focus', 'self-harm'],
  },
  {
    id: 'relic_breaker',
    name: 'Relic Breaker',
    description:
      'When you sunder a held object, its bearer must succeed at a Reflex saving throw or catch on fire (taking 1d6 fire damage immediately, and 1d6 each round until saved). Damage increases by 1d6 at 5 HD and every 5 levels thereafter, capping at 5d6 at 20th level. The DC equals 10 + 1/2 your HD + your Charisma modifier.',
    shortDescription: 'Sundered items ignite their bearers (scaling fire damage).',
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'gate_breaker' },
      { type: 'feat', featId: 'improved_sunder' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Relic Breaker',
      },
    ],
    activationMode: 'conditional',
    tags: ['sunder', 'fire', 'hellknight', 'charisma'],
  },
  {
    id: 'scrutinize_spell',
    name: 'Scrutinize Spell',
    description:
      "When witnessing spellcasting, you can attempt a Spellcraft check (DC 10 + target's HD) to determine the caster's class. Successfully identifying the spell (DC 15 + spell level) grants bonuses to future Spellcraft checks against that caster's spells. Once you've identified their class, you can make an Intimidate check as a free action to demoralize them, gaining a bonus equal to your Wisdom or Charisma modifier (whichever is higher).",
    shortDescription:
      'Identify enemy casters via Spellcraft; bonus Intimidate against identified casters.',
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['combat'],
    prerequisites: [{ type: 'skill', skillId: 'spellcraft', ranks: 1 }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Scrutinize Spell',
      },
    ],
    activationMode: 'conditional',
    tags: ['spellcraft', 'intimidate', 'identify', 'hellknight', 'anti-caster'],
  },
  {
    id: 'signifer_armor_training',
    name: 'Signifer Armor Training',
    description:
      'As a swift action, you can reduce arcane spell failure from worn Hellknight armor by 30% when casting spells that round. This supersedes bonuses from Arcane Armor Mastery, Arcane Armor Training, and comparable abilities. Only works with Hellknight-named armor.',
    shortDescription: 'Reduce Hellknight armor arcane spell failure by 30% as a swift action.',
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'arcane_armor_mastery' },
      { type: 'feat', featId: 'arcane_armor_training' },
      { type: 'proficiency', proficiency: 'heavy armor' },
      { type: 'caster_level', minimum: 7 },
      { type: 'special', description: 'Must swear allegiance to a single Hellknight order' },
    ],
    effects: [
      {
        type: 'special',
        value: -30,
        bonusType: BonusType.UNTYPED,
        target: 'special.arcane_spell_failure',
        source: 'Signifer Armor Training',
      },
    ],
    activationMode: 'conditional',
    tags: ['hellknight', 'signifer', 'arcane', 'spell failure', 'armor'],
  },
  {
    id: 'traditional_weapons',
    name: 'Traditional Weapons',
    description:
      'You gain a +2 bonus on combat maneuver checks against creatures using exotic, firearm, or technological weapons. You also gain a +2 bonus to CMD when opponents attempt combat maneuvers against you while wielding such weapons. These bonuses only apply when you are not wielding exotic, firearm, or technological weapons yourself.',
    shortDescription: '+2 CMB and CMD vs. foes using exotic/firearm/tech weapons.',
    source: 'Pathfinder Campaign Setting: Path of the Hellknight',
    types: ['combat'],
    prerequisites: [{ type: 'ability_score', ability: 'INT', minimum: 13 }],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'cmb',
        source: 'Traditional Weapons',
      },
    ],
    activationMode: 'conditional',
    tags: ['combat maneuver', 'exotic', 'firearm', 'hellknight'],
  },
];
