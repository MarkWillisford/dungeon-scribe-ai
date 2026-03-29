import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const BLOOD_ANCIENTS_FEATS: FeatDefinition[] = [
  {
    id: 'acupuncture_specialist',
    name: 'Acupuncture Specialist',
    description:
      "You can use acupuncture techniques to treat curses. Using an acupuncture kit (equivalent to a healer's kit), you spend 1 hour performing treatment and make a Heal check against the curse's DC. If you exceed the DC by 10 or more, the curse's effects are suppressed for 1d4 days. If you exceed the DC by 20 or more, the curse is permanently removed. This ability targets curses and spells with the curse descriptor.",
    shortDescription: 'Use Heal checks to suppress or remove curses via acupuncture',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'heal', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['heal', 'skill', 'curse', 'support'],
  },
  {
    id: 'aerial_roll',
    name: 'Aerial Roll',
    description:
      'As an immediate action when you are attacked while flying, you may make a Fly check. If your result exceeds the attacker\'s attack roll, the attack misses automatically. Regardless of success or failure, you take a -10 penalty on Fly checks until the end of your next turn due to being off-balance.',
    shortDescription: 'Use a Fly check as an immediate action to cause an attack to miss while airborne',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'fly', ranks: 10 },
    ],
    effects: [
      {
        type: 'special',
        value: -10,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Aerial Roll',
      },
    ],
    activationMode: 'conditional',
    tags: ['fly', 'defense', 'combat', 'immediate action'],
  },
  {
    id: 'ancient_tradition',
    name: 'Ancient Tradition',
    description:
      'You are devoted to preserving the traditions of a lost civilization. Each day, you perform a ritual of up to 1 hour to gain a culture-specific benefit or resistance. At 12 or more Hit Dice you gain a 1/day spell-like ability from your chosen culture; at 16 HD you gain a second; at 20 HD you gain a third. Nine lost cultures are available: Ancient Osirion, Azlant, Jistka Imperium, Lung Wa, Ninshabur, Sarkoris, Shory, Tar Taargadth, and Thassilon.',
    shortDescription: 'Gain cultural boons and spell-like abilities from a lost civilization through daily ritual',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_history', ranks: 3 },
      { type: 'special', description: 'Connection to a lost culture (relic/object, extensive research, or cultural/direct descent)' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ritual', 'culture', 'spell-like ability', 'history', 'lore'],
  },
  {
    id: 'auspicious_birth',
    name: 'Auspicious Birth',
    description:
      "Your birth was marked by a notable astrological event, granting you one of six possible boons. Apparent Retrograde: +1 luck bonus on Reflex saves; natural 1s on Reflex saves don't auto-fail. Conjunction: Teamwork feat bonuses all increase by 1. Eclipse: Soft cover treated as hard cover for you. Meteor Shower: Cumulative +1 dodge bonus to AC against ranged attacks per attack beyond the first (max +4). Passing Comet: +2 insight bonus on occult skill unlock checks. Sun Sign: Light descriptor spells treated as 1 spell level higher.",
    shortDescription: 'Choose a boon tied to an astrological event at birth',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must be taken at 1st level' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['astrology', 'origin', 'luck', 'birth'],
  },
  {
    id: 'incredible_healer_bota',
    name: 'Incredible Healer',
    description:
      'You are able to treat deadly wounds with an almost supernatural skill. When you use the Heal skill to treat deadly wounds, the target recovers hit points equal to whichever is higher: your Heal check result or the normal healing amount. Creatures may still only receive treatment for deadly wounds once per day.',
    shortDescription: 'When treating deadly wounds, the target heals the higher of your Heal check result or the normal amount',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'heal', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['heal', 'skill', 'support', 'healing'],
  },
  {
    id: 'pao_lung_self_improvement',
    name: 'Pao-Lung Self-Improvement',
    description:
      "You follow the philosophy of Pao-Lung and cannot worship any deities. When you roll a natural 1, or fail an ability check, caster level check, saving throw, or skill check by 5 or more, you may designate that specific type of check. For the next 24 hours, you gain a +1 bonus on checks of that type, increasing by an additional +1 for each additional failure. The bonus ends immediately upon a successful check of the designated type.",
    shortDescription: 'Failing checks grants escalating bonuses on that check type for 24 hours',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must be devoted to the philosophy of Pao-Lung; cannot worship any deities' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['pao-lung', 'philosophy', 'skill', 'saves', 'resilience'],
  },
  {
    id: 'pathologist',
    name: 'Pathologist',
    description:
      "You can offer greater care for diseases and poisons than other healers can. When you use the Heal skill to treat disease or poison, rather than granting the standard +4 competence bonus on the target's next saving throw, you may instead allow the target to substitute your Heal check result in place of their next saving throw against the affliction.",
    shortDescription: 'Allow a patient to use your Heal check result instead of their own saving throw vs. disease or poison',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'incredible_healer_bota' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['heal', 'skill', 'disease', 'poison', 'support'],
  },
  {
    id: 'rushing_winds',
    name: 'Rushing Winds',
    description:
      'As a full-round action, you can fly up to twice your fly speed in a straight line, creating a shockwave of rushing winds. Each flying creature adjacent to your path must succeed at a DC 25 Fly check or be blown back 1d6×10 feet and take 2d6 points of nonlethal damage. A creature that fails the check by 5 or more also loses 1d4×10 feet of altitude. A creature that fails by 10 or more plummets to the ground.',
    shortDescription: 'Fly at double speed in a straight line, forcing adjacent flying creatures to make Fly checks or be blown back',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'turbulent_takeoff' },
      { type: 'skill', skillId: 'fly', ranks: 10 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Rushing Winds',
      },
    ],
    activationMode: 'conditional',
    tags: ['fly', 'combat', 'movement', 'area control', 'full round'],
  },
  {
    id: 'saoc_brethren_initiate',
    name: 'Saoc Brethren Initiate',
    description:
      "You have trained in the Saoc Brethren's ancient astrological methods. You gain a +3 bonus on skill checks to detect an astrological event. In addition, all bonuses you gain from astrological events increase by 1, and all penalties from astrological events decrease by 1 (to a minimum penalty of -1).",
    shortDescription: '+3 to detect astrological events; astrological event bonuses +1 and penalties -1',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 1 },
    ],
    effects: [
      {
        type: 'skill_bonus',
        target: 'astrological_event_detection',
        value: 3,
        bonusType: BonusType.UNTYPED,
        source: 'Saoc Brethren Initiate',
      },
    ],
    activationMode: 'passive',
    tags: ['astrology', 'saoc brethren', 'skill', 'knowledge'],
  },
  {
    id: 'saoc_brethren_scholar',
    name: 'Saoc Brethren Scholar',
    description:
      'You can draw additional power from celestial phenomena, harnessing their influence for longer than their natural duration. Astrological effects with a duration of less than 24 hours have their duration increased by 50%. Astrological effects with a duration of 24 hours or more gain an additional day of duration.',
    shortDescription: 'Astrological effects last 50% longer (sub-24h) or gain +1 day (24h+)',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'saoc_brethren_initiate' },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 5 },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 5 },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 5 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['astrology', 'saoc brethren', 'duration', 'knowledge'],
  },
  {
    id: 'skyseeker_style',
    name: 'Skyseeker Style',
    description:
      "You have learned to slip through gaps in an opponent's defenses when closing distance against reach weapons. Once per round, when an enemy attacks you with a reach weapon, you may take a 5-foot step toward that enemy as an immediate action. If this movement places you outside the weapon's threatened area, you gain a +4 bonus to AC against that attack. Using this ability prevents you from taking a 5-foot step during your next turn.",
    shortDescription: 'Step toward reach weapon users as an immediate action to gain +4 AC against the attack',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'step_up' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'ac_bonus',
        target: 'vs_triggering_reach_attack',
        value: 4,
        bonusType: BonusType.UNTYPED,
        source: 'Skyseeker Style',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'reach', 'defense', 'combat', 'immediate action'],
  },
  {
    id: 'skyseeker_thrash',
    name: 'Skyseeker Thrash',
    description:
      'While using Skyseeker Style, you gain a cumulative +1 bonus on melee damage rolls for every size category your opponent is larger than you.',
    shortDescription: 'While in Skyseeker Style, gain +1 melee damage per size category larger than you',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'feat', featId: 'skyseeker_style' },
      { type: 'feat', featId: 'step_up' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Skyseeker Thrash',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'damage', 'size', 'combat'],
  },
  {
    id: 'skyseeker_impact',
    name: 'Skyseeker Impact',
    description:
      'While using Skyseeker Style, when you successfully strike an opponent larger than yourself with a melee attack, your weapon deals damage as if it were one size category larger. In addition, you gain a +4 bonus on sunder combat maneuver checks targeting creatures larger than you.',
    shortDescription: 'While in Skyseeker Style, deal damage as if weapon is one size larger and gain +4 to sunder vs larger foes',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'feat', featId: 'skyseeker_style' },
      { type: 'feat', featId: 'skyseeker_thrash' },
      { type: 'feat', featId: 'step_up' },
      { type: 'bab', minimum: 9 },
    ],
    effects: [
      {
        type: 'combat_maneuver_bonus',
        target: 'sunder',
        value: 4,
        bonusType: BonusType.UNTYPED,
        source: 'Skyseeker Impact',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'damage', 'size', 'sunder', 'combat'],
  },
  {
    id: 'strength_of_obligation',
    name: 'Strength of Obligation',
    description:
      "You follow the philosophy of Pao-Lung and cannot worship any deities. Once per day, you may take an oath to accomplish a specific goal with clear success conditions. While you are actively pursuing this goal, you gain a +1 morale bonus on ability checks and skill checks directly related to achieving that goal. This bonus increases to +2 if the task represents a responsibility tied to a title or office you hold. If you break an oath or neglect your official duties, you suffer a -1 penalty on ability checks, attack rolls, saving throws, and skill checks for 24 hours.",
    shortDescription: '+1 morale bonus on relevant ability/skill checks while pursuing a sworn daily oath; -1 penalty for 24h if oath broken',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must be devoted to the philosophy of Pao-Lung; cannot worship any deities' },
    ],
    effects: [
      {
        type: 'skill_bonus',
        target: 'oath_related_checks',
        value: 1,
        bonusType: BonusType.MORALE,
        source: 'Strength of Obligation',
      },
    ],
    activationMode: 'conditional',
    tags: ['pao-lung', 'philosophy', 'morale', 'oath', 'skill'],
  },
  {
    id: 'turbulent_takeoff',
    name: 'Turbulent Takeoff',
    description:
      'When you launch into flight from the ground, you generate a wind burst. Creatures threatening you must succeed at a Reflex save (DC = 10 + your Fly skill ranks + your Dexterity modifier) or lose their attacks of opportunity as you move away. Creatures that fail the save by 10 or more are also knocked prone. You must begin your move action on the ground to use this ability.',
    shortDescription: 'Taking flight from the ground forces threatening foes to make Reflex saves or lose attacks of opportunity',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'fly', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fly', 'combat', 'movement', 'takeoff', 'attacks of opportunity'],
  },
  {
    id: 'wind_rider',
    name: 'Wind Rider',
    description:
      'You can harness strong winds to enhance your aerial movement. You gain a +15-foot bonus to your fly speed while flying in strong winds. Each additional wind strength category above strong grants an additional +15-foot bonus: severe winds (+30 feet total), windstorms (+45 feet total), and tornadoes (+60 feet total). This feat provides no benefits to Fly or Strength checks to resist being checked or blown away by winds.',
    shortDescription: '+15 ft. fly speed in strong winds, scaling up by +15 ft. per wind category above strong',
    source: 'Pathfinder Player Companion: Blood of the Ancients',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Acrobatics 3 ranks or Fly 3 ranks' },
    ],
    effects: [
      {
        type: 'speed',
        target: 'fly',
        value: 15,
        bonusType: BonusType.UNTYPED,
        source: 'Wind Rider',
      },
    ],
    activationMode: 'conditional',
    tags: ['fly', 'movement', 'wind', 'speed'],
  },
];

// CHECKPOINT: last_written=wind_rider, written=16/16, status=complete
