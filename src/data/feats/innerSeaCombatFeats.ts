import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const INNER_SEA_COMBAT_FEATS: FeatDefinition[] = [
  // aldori_dueling_disciple — skipped, already in adventurersGuideFeats.ts (same mechanics, AG is canonical source)
  {
    id: 'awe_inspiring_smash',
    name: 'Awe-Inspiring Smash',
    description:
      "You may apply your Strength modifier to performance combat checks instead of Charisma. When using a swift action for a performance combat check triggered by a successful bull rush or sunder maneuver, you gain a +2 bonus. For every 5 points by which your attack exceeded your opponent's CMD, this bonus increases by 2.",
    shortDescription:
      'Use Strength for performance combat checks; bonus when bull rushing or sundering.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'performance'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 3 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Awe-Inspiring Smash',
      },
    ],
    activationMode: 'conditional',
    tags: ['performance', 'bull rush', 'sunder', 'strength'],
  },
  {
    id: 'black_powder_spectacle',
    name: 'Black Powder Spectacle',
    description:
      'When using a swift action for a performance combat check, you can expend one cartridge or dose of black powder to create a loud report or impressive flash. Choosing the loud sound grants a +4 bonus on all Intimidate checks you attempt for 1 round; choosing the flash grants a +4 bonus on any Perform checks you attempt for 1 round.',
    shortDescription:
      'Expend ammunition to gain +4 on Intimidate or Perform checks for 1 round during performance combat.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'performance'],
    prerequisites: [
      { type: 'special', description: 'Amateur Gunslinger or grit class feature' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [
      {
        type: 'special',
        value: 4,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Black Powder Spectacle',
      },
    ],
    activationMode: 'conditional',
    tags: ['performance', 'firearm', 'grit', 'intimidate'],
  },
  {
    id: 'cannon_master',
    name: 'Cannon Master',
    description:
      'You have learned how to keep firearm siege engines ready for battle despite harrowing circumstances. You gain a +2 competence bonus on Craft (siege engine) checks to repair firearm siege engines. When leading a broken firearm siege engine, the misfire range increases by only 2 instead of 4. A broken siege engine must misfire twice before it explodes.',
    shortDescription:
      'Better Craft checks for firearm siege engine repair; reduced misfire penalties when leading a broken engine.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'siege_engineer' },
      { type: 'skill', skillId: 'knowledge_engineering', ranks: 7 },
      { type: 'special', description: 'Proficiency with at least one firearm siege engine' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.craft_siege_engine',
        value: 2,
        bonusType: BonusType.COMPETENCE,
        source: 'Cannon Master',
      },
    ],
    activationMode: 'passive',
    tags: ['siege', 'firearm', 'craft'],
  },
  {
    id: 'casterbane_shot',
    name: 'Casterbane Shot',
    description:
      "When you ready a firearm attack against a spellcaster initiating a spell and successfully hit, you can expend 1 grit point to increase the target's concentration check DC for being injured while casting by 5.",
    shortDescription:
      "Expend 1 grit when readying a firearm shot to raise an injured spellcaster's concentration DC by 5.",
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'grit'],
    prerequisites: [
      { type: 'special', description: 'Amateur Gunslinger or grit class feature' },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'precise_shot' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [
      {
        type: 'special',
        value: 5,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Casterbane Shot',
      },
    ],
    activationMode: 'conditional',
    tags: ['grit', 'firearm', 'spellcaster', 'concentration'],
  },
  // duelist_of_the_roaring_falls — skipped, already in adventurersGuideFeats.ts (same mechanics, AG is canonical source)
  // duelist_of_the_shrouded_lake — skipped, already in adventurersGuideFeats.ts (same mechanics, AG is canonical source)
  // falling_water_gambit — skipped, already in adventurersGuideFeats.ts (same mechanics, AG is canonical source)
  {
    id: 'grand_duchy_familiarity',
    name: 'Grand Duchy Familiarity',
    description:
      'Once per day as an immediate action, you can reroll an attack roll with a firearm that would have resulted in a misfire. You must accept the second result, even if it also misfires.',
    shortDescription: 'Once per day, reroll a firearm misfire attack roll.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['general'],
    prerequisites: [
      { type: 'bab', minimum: 3 },
      { type: 'special', description: 'Proficiency with at least one firearm' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Grand Duchy Familiarity',
      },
    ],
    activationMode: 'conditional',
    tags: ['firearm', 'misfire', 'reroll'],
  },
  {
    id: 'masterful_flourish',
    name: 'Masterful Flourish',
    description:
      'When wielding a performance weapon that falls within a weapon category in which you have weapon training, you may add your weapon training bonus to any performance combat checks made as a result of using the weapon.',
    shortDescription:
      'Add weapon training bonus to performance combat checks with qualifying weapons.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'performance'],
    prerequisites: [{ type: 'class_feature', featureName: 'weapon training' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Masterful Flourish',
      },
    ],
    activationMode: 'passive',
    tags: ['performance', 'weapon training', 'fighter'],
  },
  {
    id: 'monstrous_mount',
    name: 'Monstrous Mount',
    description:
      'You may select an exotic beast from the monstrous mounts list to serve as your animal companion or special mount. The creature is acquired and advanced using the same mechanics as your prerequisite class feature. Additional prerequisites may apply for creatures with Intelligence 3 or higher.',
    shortDescription:
      'Acquire an exotic monstrous creature as an animal companion or special mount.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'handle_animal', ranks: 4 },
      { type: 'skill', skillId: 'ride', ranks: 4 },
      {
        type: 'special',
        description:
          "divine bond (mount), hunter's bond (animal companion), or mount class feature with effective druid level 4",
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Monstrous Mount',
      },
    ],
    activationMode: 'passive',
    tags: ['mount', 'animal companion', 'exotic'],
  },
  {
    id: 'monstrous_mount_mastery',
    name: 'Monstrous Mount Mastery',
    description:
      'Your monstrous mount gains the abilities and bonuses listed under Mastery in its stat block. You must meet the minimum character level specified for the mount to access these Mastery benefits. Without this feat, a monstrous mount is unable to use its Mastery abilities regardless of its advancement.',
    shortDescription: "Unlock your monstrous mount's Mastery abilities from its stat block.",
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'monstrous_mount' },
      {
        type: 'special',
        description:
          "Character level equal to or higher than the mount's Mastery entry requirement",
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Monstrous Mount Mastery',
      },
    ],
    activationMode: 'passive',
    tags: ['mount', 'mastery', 'monstrous mount'],
  },
  {
    id: 'ostentatious_weakness',
    name: 'Ostentatious Weakness',
    description:
      'When you spend a swift action to attempt a performance combat check, you may add your favored enemy bonus to the check if you are fighting a favored enemy.',
    shortDescription:
      'Add favored enemy bonus to performance combat checks against a favored enemy.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'performance'],
    prerequisites: [
      { type: 'bab', minimum: 5 },
      { type: 'class_feature', featureName: 'favored enemy' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Ostentatious Weakness',
      },
    ],
    activationMode: 'conditional',
    tags: ['performance', 'favored enemy', 'ranger'],
  },
  // perfect_style — skipped, already in adventurersGuideFeats.ts (same mechanics, AG is canonical source)
  {
    id: 'redirected_shot',
    name: 'Redirected Shot',
    description:
      "As long as you have at least 1 grit point, after an ally has made a ranged attack roll but before the results have been revealed, you can fire a loaded firearm at the volley as it moves toward its target, redirecting its path. You make an attack roll using your highest bonus, replacing your ally's result. On success, their attack deals normal damage. You may use this ability a number of times per round equal to your Wisdom modifier (minimum 1).",
    shortDescription:
      "Expend a grit point to replace an ally's missed ranged attack roll with your own firearm attack roll.",
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'grit'],
    prerequisites: [
      { type: 'special', description: 'Amateur Gunslinger or grit class feature' },
      { type: 'feat', featId: 'deadly_aim' },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'precise_shot' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Redirected Shot',
      },
    ],
    activationMode: 'conditional',
    tags: ['grit', 'firearm', 'ranged', 'teamwork'],
  },
  {
    id: 'savage_surge',
    name: 'Savage Surge',
    description:
      'You can channel your rage into crowd-pleasing displays of brutality that aid you in the arena. While raging and making a performance combat check, you may expend rage rounds (up to half your barbarian level) as a free action. You gain a bonus on the check equal to half the rounds expended, rounded down. If you expend all remaining rage rounds, ending your rage, you gain an additional +2 bonus.',
    shortDescription:
      'Expend rage rounds while raging to gain a bonus on performance combat checks.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'performance'],
    prerequisites: [
      { type: 'feat', featId: 'intimidating_prowess' },
      { type: 'class_feature', featureName: 'rage' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Savage Surge',
      },
    ],
    activationMode: 'conditional',
    tags: ['performance', 'rage', 'barbarian'],
  },
  {
    id: 'spectacular_exit',
    name: 'Spectacular Exit',
    description:
      "When making a performance combat check due to using the withdraw action, you can first attempt an Acrobatics check against your opponent's CMD. Success eliminates the standard -5 penalty to your performance check. For every 5 points your Acrobatics result exceeds the CMD, you gain a +1 bonus to all Perform checks for the remainder of that round.",
    shortDescription:
      'Attempt an Acrobatics check vs. CMD when withdrawing to negate the performance combat penalty.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'performance'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'dodge' },
      { type: 'skill', skillId: 'acrobatics', ranks: 7 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Spectacular Exit',
      },
    ],
    activationMode: 'conditional',
    tags: ['performance', 'acrobatics', 'withdraw', 'dexterity'],
  },
  {
    id: 'thrilling_vengeance',
    name: 'Thrilling Vengeance',
    description:
      'Your savage rage thrills the crowd as you turn it upon a foe that has harmed you. When using a swift action for a performance combat check while raging, you gain a +2 bonus if your trigger involves dealing damage to a creature that hit you in the previous round.',
    shortDescription:
      '+2 on performance combat checks while raging when retaliating against a foe that hit you last round.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'performance'],
    prerequisites: [
      { type: 'bab', minimum: 3 },
      { type: 'class_feature', featureName: 'rage' },
    ],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Thrilling Vengeance',
      },
    ],
    activationMode: 'conditional',
    tags: ['performance', 'rage', 'barbarian', 'retaliation'],
  },
  // unblinking_flame_feint — skipped, already in adventurersGuideFeats.ts (same mechanics, AG is canonical source)
  // unblinking_flame_fist — skipped, already in adventurersGuideFeats.ts (same mechanics, AG is canonical source)
  // unfolding_wind_rush — skipped, already in adventurersGuideFeats.ts (same mechanics, AG is canonical source)
  // unfolding_wind_strike — skipped, already in adventurersGuideFeats.ts (same mechanics, AG is canonical source)
  // untwisting_iron_skin — skipped, already in adventurersGuideFeats.ts (same mechanics, AG is canonical source)
  // untwisting_iron_strength — skipped, already in adventurersGuideFeats.ts (same mechanics, AG is canonical source)
];

// CHECKPOINT: last_written=thrilling_vengeance, written=13/13, status=complete (11 duplicates removed: aldori_dueling_disciple, duelist_of_the_roaring_falls, duelist_of_the_shrouded_lake, falling_water_gambit, perfect_style, unblinking_flame_feint, unblinking_flame_fist, unfolding_wind_rush, unfolding_wind_strike, untwisting_iron_skin, untwisting_iron_strength — all in adventurersGuideFeats.ts)
