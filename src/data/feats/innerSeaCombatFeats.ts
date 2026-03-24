import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const INNER_SEA_COMBAT_FEATS: FeatDefinition[] = [
  {
    id: 'aldori_dueling_disciple',
    name: 'Aldori Dueling Disciple',
    description:
      'Your prowess in Aldori swordplay grants you bravado. You gain a +2 morale bonus on Intimidate checks to demoralize opponents, and the DC to demoralize you increases by 2. During formal duels, both bonuses increase to +4.',
    shortDescription: 'Gain morale bonuses on Intimidate and vs. demoralization; increased bonuses during formal duels.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'Exotic Weapon Proficiency (Aldori dueling sword)' },
      { type: 'feat', featId: 'Weapon Finesse' },
      { type: 'feat', featId: 'Weapon Focus (Aldori dueling sword)' },
    ],
    effects: [
      {
        type: 'skill_bonus',
        target: 'intimidate',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Aldori Dueling Disciple',
      },
    ],
    activationMode: 'passive',
    tags: ['aldori', 'dueling', 'intimidate'],
  },
  {
    id: 'awe_inspiring_smash',
    name: 'Awe-Inspiring Smash',
    description:
      "You may apply your Strength modifier to performance combat checks instead of Charisma. When using a swift action for a performance combat check triggered by a successful bull rush or sunder maneuver, you gain a +2 bonus. For every 5 points by which your attack exceeded your opponent's CMD, this bonus increases by 2.",
    shortDescription: 'Use Strength for performance combat checks; bonus when bull rushing or sundering.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'performance'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'Power Attack' },
      { type: 'bab', minimum: 3 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
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
    shortDescription: 'Expend ammunition to gain +4 on Intimidate or Perform checks for 1 round during performance combat.',
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
        target: 'special',
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
    shortDescription: 'Better Craft checks for firearm siege engine repair; reduced misfire penalties when leading a broken engine.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'Siege Engineer' },
      { type: 'skill', skillId: 'Knowledge (engineering)', ranks: 7 },
      { type: 'special', description: 'Proficiency with at least one firearm siege engine' },
    ],
    effects: [
      {
        type: 'skill_bonus',
        target: 'craft_siege_engine',
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
    shortDescription: "Expend 1 grit when readying a firearm shot to raise an injured spellcaster's concentration DC by 5.",
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'grit'],
    prerequisites: [
      { type: 'special', description: 'Amateur Gunslinger or grit class feature' },
      { type: 'feat', featId: 'Point-Blank Shot' },
      { type: 'feat', featId: 'Precise Shot' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [
      {
        type: 'special',
        value: 5,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Casterbane Shot',
      },
    ],
    activationMode: 'conditional',
    tags: ['grit', 'firearm', 'spellcaster', 'concentration'],
  },
  {
    id: 'duelist_of_the_roaring_falls',
    name: 'Duelist of the Roaring Falls',
    description:
      'When wielding only an Aldori dueling sword, you add your Dexterity modifier instead of Strength to damage rolls against shaken, frightened, or panicked opponents. If Dexterity already applies to your damage, gain a +1 competence bonus to damage instead. Your dueling parry penalty reduces from -5 to -3 on attack rolls.',
    shortDescription: 'Add Dex to damage vs. shaken/frightened foes; reduced dueling parry penalty.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'Aldori Dueling Disciple' },
      { type: 'feat', featId: 'Exotic Weapon Proficiency (Aldori dueling sword)' },
      { type: 'feat', featId: 'Weapon Finesse' },
      { type: 'feat', featId: 'Weapon Focus (Aldori dueling sword)' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Duelist of the Roaring Falls',
      },
    ],
    activationMode: 'conditional',
    tags: ['aldori', 'dueling', 'dexterity', 'damage'],
  },
  {
    id: 'duelist_of_the_shrouded_lake',
    name: 'Duelist of the Shrouded Lake',
    description:
      "When wielding only an Aldori dueling sword, you gain a +1 insight bonus on bull rush and reposition combat maneuver checks, a +4 dodge bonus to AC against attacks of opportunity provoked by these maneuvers, and a +1 insight bonus to CMD against bull rush and reposition attempts. During a duel's dueling dodge, your AC bonus increases to +6.",
    shortDescription: 'Insight bonuses to bull rush and reposition; dodge bonus vs. AoOs from those maneuvers.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'Aldori Dueling Disciple' },
      { type: 'feat', featId: 'Exotic Weapon Proficiency (Aldori dueling sword)' },
      { type: 'feat', featId: 'Weapon Finesse' },
      { type: 'feat', featId: 'Weapon Focus (Aldori dueling sword)' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [
      {
        type: 'combat_maneuver_bonus',
        target: 'bull_rush_reposition',
        value: 1,
        bonusType: BonusType.INSIGHT,
        source: 'Duelist of the Shrouded Lake',
      },
      {
        type: 'ac_bonus',
        target: 'vs_aoo_from_maneuvers',
        value: 4,
        bonusType: BonusType.DODGE,
        source: 'Duelist of the Shrouded Lake',
      },
    ],
    activationMode: 'passive',
    tags: ['aldori', 'dueling', 'bull rush', 'reposition', 'maneuver'],
  },
  {
    id: 'falling_water_gambit',
    name: 'Falling Water Gambit',
    description:
      "When wielding only an Aldori dueling sword, attacking an opponent denied their Dexterity bonus via a successful feint increases the sword's threat range by 1 and grants a +2 bonus on attack rolls to confirm critical hits. After successfully using dueling dodge or dueling parry, you may make an attack of opportunity against shaken, frightened, or panicked attackers.",
    shortDescription: 'Extended threat range and crit confirmation vs. feinted foes; AoO after dueling dodge or parry.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'Aldori Dueling Disciple' },
      { type: 'feat', featId: 'Duelist of the Roaring Falls' },
      { type: 'feat', featId: 'Duelist of the Shrouded Lake' },
      { type: 'feat', featId: 'Exotic Weapon Proficiency (Aldori dueling sword)' },
      { type: 'feat', featId: 'Weapon Finesse' },
      { type: 'feat', featId: 'Weapon Focus (Aldori dueling sword)' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [
      {
        type: 'special',
        value: 1,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Falling Water Gambit',
      },
      {
        type: 'attack_bonus',
        target: 'crit_confirmation',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Falling Water Gambit',
      },
    ],
    activationMode: 'conditional',
    tags: ['aldori', 'dueling', 'feint', 'critical', 'threat range'],
  },
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
        target: 'special',
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
    shortDescription: 'Add weapon training bonus to performance combat checks with qualifying weapons.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'performance'],
    prerequisites: [
      { type: 'class_feature', featureName: 'weapon training' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
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
      "You may select an exotic beast from the monstrous mounts list to serve as your animal companion or special mount. The creature is acquired and advanced using the same mechanics as your prerequisite class feature. Additional prerequisites may apply for creatures with Intelligence 3 or higher.",
    shortDescription: 'Acquire an exotic monstrous creature as an animal companion or special mount.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'Handle Animal', ranks: 4 },
      { type: 'skill', skillId: 'Ride', ranks: 4 },
      { type: 'special', description: "divine bond (mount), hunter's bond (animal companion), or mount class feature with effective druid level 4" },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
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
      "Your monstrous mount gains the abilities and bonuses listed under Mastery in its stat block. You must meet the minimum character level specified for the mount to access these Mastery benefits. Without this feat, a monstrous mount is unable to use its Mastery abilities regardless of its advancement.",
    shortDescription: "Unlock your monstrous mount's Mastery abilities from its stat block.",
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'Monstrous Mount' },
      { type: 'special', description: "Character level equal to or higher than the mount's Mastery entry requirement" },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
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
    shortDescription: 'Add favored enemy bonus to performance combat checks against a favored enemy.',
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
        target: 'special',
        source: 'Ostentatious Weakness',
      },
    ],
    activationMode: 'conditional',
    tags: ['performance', 'favored enemy', 'ranger'],
  },
  {
    id: 'perfect_style',
    name: 'Perfect Style',
    description:
      'Training at one of the Houses of Perfection grants special abilities. Choose one house: Monastery of Untwisting Iron (acid resistance 5), Monastery of Unblinking Flame (fire resistance 5), or Monastery of Unfolding Wind (electricity resistance 5). This energy resistance stacks with racial traits or class features. You gain a ki pool of 2 points, increasing by 1 at 9th level and every 4 levels thereafter. If you already have a ki pool, you do not gain additional points. You can select this feat multiple times, each time choosing a different House.',
    shortDescription: 'Gain energy resistance 5 and a ki pool from training at a House of Perfection.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'special', description: 'Base attack bonus +5 or 5th-level monk' },
    ],
    effects: [
      {
        type: 'energy_resistance',
        target: 'acid_or_fire_or_electricity',
        value: 5,
        bonusType: BonusType.UNTYPED,
        source: 'Perfect Style',
      },
    ],
    activationMode: 'passive',
    tags: ['style', 'ki', 'monk', 'energy resistance', 'houses of perfection'],
  },
  {
    id: 'redirected_shot',
    name: 'Redirected Shot',
    description:
      "As long as you have at least 1 grit point, after an ally has made a ranged attack roll but before the results have been revealed, you can fire a loaded firearm at the volley as it moves toward its target, redirecting its path. You make an attack roll using your highest bonus, replacing your ally's result. On success, their attack deals normal damage. You may use this ability a number of times per round equal to your Wisdom modifier (minimum 1).",
    shortDescription: "Expend a grit point to replace an ally's missed ranged attack roll with your own firearm attack roll.",
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'grit'],
    prerequisites: [
      { type: 'special', description: 'Amateur Gunslinger or grit class feature' },
      { type: 'feat', featId: 'Deadly Aim' },
      { type: 'feat', featId: 'Point-Blank Shot' },
      { type: 'feat', featId: 'Precise Shot' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
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
    shortDescription: 'Expend rage rounds while raging to gain a bonus on performance combat checks.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'performance'],
    prerequisites: [
      { type: 'feat', featId: 'Intimidating Prowess' },
      { type: 'class_feature', featureName: 'rage' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
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
    shortDescription: 'Attempt an Acrobatics check vs. CMD when withdrawing to negate the performance combat penalty.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat', 'performance'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'Dodge' },
      { type: 'skill', skillId: 'Acrobatics', ranks: 7 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
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
    shortDescription: '+2 on performance combat checks while raging when retaliating against a foe that hit you last round.',
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
        target: 'special',
        source: 'Thrilling Vengeance',
      },
    ],
    activationMode: 'conditional',
    tags: ['performance', 'rage', 'barbarian', 'retaliation'],
  },
  {
    id: 'unblinking_flame_feint',
    name: 'Unblinking Flame Feint',
    description:
      'You move as swiftly and unpredictably as a flickering flame. While using Perfect Style, you substitute your Wisdom modifier for Charisma when making Bluff checks to feint. You may also expend 1 ki point as a swift action to gain the benefits of Improved Feint for one round.',
    shortDescription: 'Use Wisdom instead of Charisma to feint; spend 1 ki to gain Improved Feint for 1 round.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'Combat Expertise' },
      { type: 'feat', featId: 'Perfect Style' },
      { type: 'special', description: 'Base attack bonus +9 or 9th-level monk' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Unblinking Flame Feint',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'feint', 'ki', 'monk', 'houses of perfection'],
  },
  {
    id: 'unblinking_flame_fist',
    name: 'Unblinking Flame Fist',
    description:
      "You can exploit the weaknesses in your opponents' defenses, like a flame seeking fuel to consume. When using Perfect Style, the save DC of your Stunning Fist attacks increases by 2 against flat-footed opponents. When you spend 1 ki point to gain Improved Feint benefits for 1 round via Unblinking Flame Feint, you may also attempt a feint as part of movement while charging.",
    shortDescription: '+2 Stunning Fist DC vs. flat-footed foes; feint as part of a charge when spending ki.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'Combat Expertise' },
      { type: 'feat', featId: 'Perfect Style' },
      { type: 'feat', featId: 'Stunning Fist' },
      { type: 'feat', featId: 'Unblinking Flame Feint' },
      { type: 'special', description: 'Base attack bonus +13 or 13th-level monk' },
    ],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Unblinking Flame Fist',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'stunning fist', 'ki', 'monk', 'houses of perfection'],
  },
  {
    id: 'unfolding_wind_rush',
    name: 'Unfolding Wind Rush',
    description:
      'Thrown weapons fly from your hands as if blown by a gale, and you leave behind a wake of wind as you move. When using Perfect Style with thrown weapons, you combine a full-attack action with a single move action, forfeiting your highest-bonus attack but making remaining attacks at any point during your movement. By spending 1 ki point as a swift action, you create a wind wall effect along your movement path lasting one round; this wind does not hinder your own ranged attacks.',
    shortDescription: 'Combine full-attack with movement using thrown weapons; spend ki to create a wind wall along your path.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'Dodge' },
      { type: 'feat', featId: 'Mobility' },
      { type: 'feat', featId: 'Perfect Style' },
      { type: 'feat', featId: 'Quick Draw' },
      { type: 'feat', featId: 'Unfolding Wind Strike' },
      { type: 'special', description: 'Base attack bonus +13 or 13th-level monk' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Unfolding Wind Rush',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'thrown weapons', 'ki', 'monk', 'wind', 'houses of perfection'],
  },
  {
    id: 'unfolding_wind_strike',
    name: 'Unfolding Wind Strike',
    description:
      'The wind through which your thrown weapons fly directs them to their targets or back to your hand. When using Perfect Style, your thrown weapon range increments are doubled. By expending 1 ki point as a swift action, you grant a number of thrown weapons equal to your Wisdom modifier either the returning or seeking special ability for one round.',
    shortDescription: 'Double thrown weapon range increments; spend ki to grant thrown weapons the returning or seeking property.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'Perfect Style' },
      { type: 'feat', featId: 'Quick Draw' },
      { type: 'special', description: 'Base attack bonus +9 or 9th-level monk' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Unfolding Wind Strike',
      },
    ],
    activationMode: 'passive',
    tags: ['style', 'thrown weapons', 'ki', 'monk', 'range', 'houses of perfection'],
  },
  {
    id: 'untwisting_iron_skin',
    name: 'Untwisting Iron Skin',
    description:
      'Your training has tempered your flesh to resist blows as though it were forged iron. When using Perfect Style, you gain damage reduction equal to 1/3 your character level (maximum 6) that applies only against adamantine weapons. Breaking items with hardness 10 or higher grants temporary DR 1/- for a number of rounds equal to half the item\'s hit points (maximum 10 rounds), increasing by 1 for every 5 points of hardness above 10. You may spend 1 ki point as a swift action to double either damage reduction value for one round.',
    shortDescription: 'Gain DR vs. adamantine and temporary DR from breaking hard objects while using Perfect Style.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'Perfect Style' },
      { type: 'feat', featId: 'Toughness' },
      { type: 'feat', featId: 'Untwisting Iron Strength' },
      { type: 'special', description: 'Base attack bonus +13 or 13th-level monk' },
    ],
    effects: [
      {
        type: 'damage_reduction',
        target: 'damage_reduction',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Untwisting Iron Skin',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'damage reduction', 'ki', 'monk', 'houses of perfection'],
  },
  {
    id: 'untwisting_iron_strength',
    name: 'Untwisting Iron Strength',
    description:
      'When using Perfect Style, your attacks ignore hardness equal to your character level. You also receive a +4 bonus on Strength checks to break objects. By spending 1 ki point as a swift action, you gain the benefits of Improved Sunder for 1 round.',
    shortDescription: 'Ignore hardness equal to character level; +4 on breaking objects; spend ki for Improved Sunder.',
    source: 'Pathfinder Player Companion: Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'Perfect Style' },
      { type: 'special', description: 'Base attack bonus +9 or 9th-level monk' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Untwisting Iron Strength',
      },
      {
        type: 'special',
        value: 4,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Untwisting Iron Strength',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'sunder', 'ki', 'monk', 'hardness', 'houses of perfection'],
  },
];

// CHECKPOINT: last_written=untwisting_iron_strength, written=24/24, status=complete
