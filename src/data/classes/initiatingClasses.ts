// Initiating base classes — Tome of Battle and Path of War / Path of War: Expanded
// Sources:
//   3.5e-tob  — Tome of Battle: The Book of Nine Swords (WotC)
//   dsp-pow   — Path of War (Dreamscarred Press)
//   dsp-powe  — Path of War: Expanded (Dreamscarred Press)
//
// Class feature descriptions are best-effort from SRD sources.
// TODO: verify all feature details against physical source books before final release.

import { BABProgression, SaveProgression } from '@/types/base';
import { ExpandedClassData } from './types';

export const INITIATING_BASE_CLASSES: ExpandedClassData[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // 1. CRUSADER (Tome of Battle)
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Crusader',
    category: 'Base',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 2,
    classSkills: [
      'Craft',
      'Diplomacy',
      'Intimidate',
      'Knowledge (religion)',
      'Profession',
      'Ride',
      'Sense Motive',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields'],
    startingWealth: '5d4 × 10 gp',
    classFeatures: [
      {
        name: 'Steely Resolve',
        level: 1,
        description:
          'The crusader maintains a pool of delayed damage. When the crusader takes damage, half of it (rounded down) is set aside and not immediately applied. At the start of each of the crusader\'s turns, half of the accumulated delayed damage (rounded down) is applied. This pool resets at the end of each encounter.',
      },
      {
        name: 'Furious Counterstrike',
        level: 1,
        description:
          'When the crusader\'s steely resolve delayed damage pool is greater than 0, the crusader gains a bonus on melee attack rolls and melee damage rolls equal to the number of points in the pool divided by 4 (rounded down, minimum +1).',
      },
      {
        name: 'Indomitable Soul',
        level: 2,
        description:
          'The crusader gains a +2 bonus on Will saving throws. This bonus increases by +1 for every four levels beyond 2nd.',
      },
      {
        name: 'Zealous Surge',
        level: 4,
        description:
          'Once per day, when the crusader fails a saving throw, she can immediately reroll the saving throw. The crusader must take the result of the reroll, even if it is lower.',
      },
      {
        name: 'Smite',
        level: 5,
        description:
          'Once per day, the crusader can declare a smite. She adds her Charisma modifier (if positive) to a single attack roll and adds her crusader level to the damage roll for that attack.',
      },
      {
        name: 'Aura of Chaos',
        level: 7,
        description:
          'The crusader radiates an aura of determination that bolsters nearby allies. Allies within 30 feet gain a +1 morale bonus on attack rolls and saving throws against fear. This bonus improves to +2 at 14th level.',
      },
      {
        name: 'Thicket of Blades',
        level: 9,
        description:
          'The crusader\'s threatened area becomes unusually difficult to navigate. Foes provoke attacks of opportunity when they move through the crusader\'s threatened area as normal, and 5-foot steps within that area are treated as normal movement for the purpose of provoking attacks of opportunity.',
      },
      {
        name: 'Mettle',
        level: 11,
        description:
          'The crusader can shrug off magical effects that would otherwise harm her. If the crusader succeeds on a Fortitude or Will saving throw against an effect that has a reduced effect on a successful save, she instead ignores the effect entirely.',
      },
      {
        name: 'Divine Surge',
        level: 14,
        description:
          'Once per day, as a swift action, the crusader can channel divine energy to gain a number of temporary hit points equal to twice her crusader level. These temporary hit points last for 1 minute.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'CHA',
      ilProgression: 'full',
      disciplines: ['devoted-spirit', 'stone-dragon', 'white-raven'],
      progressionTableKey: 'crusader',
      recoveryMechanics: {
        primary: { type: 'random_grant', grantCount: 2 },
      },
    },
    source: '3.5e-tob',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 2. SWORDSAGE (Tome of Battle)
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Swordsage',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 6,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Heal',
      'Intimidate',
      'Knowledge (history)',
      'Knowledge (local)',
      'Perception',
      'Profession',
      'Sense Motive',
      'Stealth',
      'Swim',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial melee weapons'],
    armorProficiencies: ['Light armor'],
    startingWealth: '4d4 × 10 gp',
    classFeatures: [
      {
        name: 'AC Bonus',
        level: 1,
        description:
          'When wearing light or no armor and not carrying a heavy load, the swordsage adds her Wisdom modifier (if positive) as a bonus to Armor Class. This bonus applies even against touch attacks and when flat-footed, but not when the swordsage is immobilized or helpless.',
      },
      {
        name: 'Discipline Focus (Weapon Focus)',
        level: 1,
        description:
          'The swordsage gains Weapon Focus as a bonus feat for one weapon associated with one of her disciplines. She must choose a discipline and a weapon from that discipline\'s associated weapons.',
      },
      {
        name: 'Quick to Act',
        level: 1,
        description:
          'The swordsage gains a +1 bonus on initiative checks. This bonus increases by 1 for every five swordsage levels beyond 1st (+2 at 6th, +3 at 11th, +4 at 16th).',
      },
      {
        name: 'Discipline Focus (Insightful Strike)',
        level: 2,
        description:
          'For one of the swordsage\'s disciplines, she can add her Wisdom modifier (instead of Strength) to damage rolls whenever she uses a strike from that discipline.',
      },
      {
        name: 'Sense Magic',
        level: 3,
        description:
          'The swordsage can use detect magic at will as a spell-like ability. Her caster level equals her swordsage level.',
      },
      {
        name: 'Discipline Focus (Defensive Stance)',
        level: 6,
        description:
          'For one of the swordsage\'s disciplines, she gains a +2 bonus to Armor Class when in a stance from that discipline.',
      },
      {
        name: 'Evasion',
        level: 9,
        description:
          'If the swordsage succeeds on a Reflex saving throw against an attack that normally deals damage on a successful save, she takes no damage. Evasion can only be used if the swordsage is wearing light or no armor.',
      },
      {
        name: 'Discipline Mastery',
        level: 16,
        description:
          'The swordsage gains mastery over one of her disciplines. She treats her initiator level as 2 higher than normal for the purpose of meeting prerequisites for maneuvers from her chosen discipline and for the purpose of maneuver effects that scale with initiator level.',
      },
      {
        name: 'Dual Boost',
        level: 17,
        description:
          'The swordsage can initiate two boost maneuvers simultaneously. As a swift action, she can initiate two boosts, though she still expends both maneuvers.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'full',
      disciplines: ['desert-wind', 'diamond-mind', 'setting-sun', 'shadow-hand', 'stone-dragon', 'tiger-claw'],
      progressionTableKey: 'swordsage',
      recoveryMechanics: {
        primary: { type: 'full_round_one' },
      },
    },
    source: '3.5e-tob',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 3. WARBLADE (Tome of Battle)
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Warblade',
    category: 'Base',
    maxLevel: 20,
    hitDie: 12,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Intimidate',
      'Knowledge (history)',
      'Knowledge (local)',
      'Perception',
      'Profession',
      'Ride',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields', 'Tower shields'],
    startingWealth: '6d4 × 10 gp',
    classFeatures: [
      {
        name: 'Battle Clarity (Reflex Saves)',
        level: 1,
        description:
          'The warblade can add her Intelligence modifier (minimum +0) as a bonus on Reflex saving throws as long as she is not flat-footed.',
      },
      {
        name: 'Weapon Aptitude',
        level: 1,
        description:
          'The warblade\'s training allows her to realign her weapon skills. Each morning, she may spend 1 hour practicing to reassign one of her weapon-specific fighter bonus feats (such as Weapon Focus) to a different qualifying weapon.',
      },
      {
        name: 'Uncanny Dodge',
        level: 2,
        description:
          'The warblade retains her Dexterity bonus to AC even if caught flat-footed or struck by an invisible attacker. She still loses her Dexterity bonus if immobilized.',
      },
      {
        name: 'Battle Ardor (Critical Confirmation)',
        level: 3,
        description:
          'The warblade adds her Intelligence modifier (minimum +0) as a bonus on attack rolls made to confirm critical hits.',
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 6,
        description:
          'The warblade can no longer be flanked. A rogue must be at least four levels higher than the warblade to use flanking to deny her Dexterity bonus.',
      },
      {
        name: 'Battle Cunning (Damage)',
        level: 7,
        description:
          'The warblade adds her Intelligence modifier (minimum +0) as a bonus on damage rolls against flat-footed or flanked opponents.',
      },
      {
        name: 'Battle Skill (Combat Maneuvers)',
        level: 11,
        description:
          'The warblade adds her Intelligence modifier (minimum +0) as a bonus on her Combat Maneuver Bonus and Combat Maneuver Defense.',
      },
      {
        name: 'Battle Mastery',
        level: 15,
        description:
          'The warblade adds her Intelligence modifier (minimum +0) as a bonus on all attack rolls and damage rolls.',
      },
      {
        name: 'Stance Mastery',
        level: 20,
        description:
          'The warblade can maintain two stances simultaneously. Both stances\' effects apply at the same time.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'INT',
      ilProgression: 'full',
      disciplines: ['diamond-mind', 'iron-heart', 'stone-dragon', 'tiger-claw', 'white-raven'],
      progressionTableKey: 'warblade',
      recoveryMechanics: {
        primary: { type: 'strike_recovers_all' },
      },
    },
    source: '3.5e-tob',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 4. STALKER (Path of War)
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Stalker',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 6,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Disguise',
      'Escape Artist',
      'Heal',
      'Intimidate',
      'Knowledge (local)',
      'Perception',
      'Perform',
      'Profession',
      'Sense Motive',
      'Stealth',
      'Swim',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor'],
    startingWealth: '4d6 × 10 gp',
    classFeatures: [
      {
        name: 'Ki Pool',
        level: 1,
        description:
          'The stalker maintains a pool of ki points equal to 1/2 her stalker level + her Wisdom modifier (minimum 1). Ki points are used to fuel certain class features and some maneuvers. The pool replenishes after 8 hours of rest.',
      },
      {
        name: 'Deadly Strikes',
        level: 1,
        description:
          'The stalker deals extra damage on attacks made against foes denied their Dexterity bonus to AC or flanked opponents. This damage begins at 1d6 and increases by 1d6 every two stalker levels.',
      },
      {
        name: 'Unarmed Strike',
        level: 1,
        description:
          'The stalker gains Improved Unarmed Strike as a bonus feat and treats her unarmed strikes as both manufactured and natural weapons for purposes of maneuvers.',
      },
      {
        name: 'Evasion',
        level: 2,
        description:
          'If the stalker succeeds on a Reflex saving throw against an attack that normally deals damage on a successful save, she takes no damage.',
      },
      {
        name: 'Dual Disciplines',
        level: 4,
        description:
          'The stalker gains proficiency in one additional discipline from those available to her class. She may initiate maneuvers from both her primary and secondary disciplines.',
      },
      {
        name: 'Ghost Step',
        level: 5,
        description:
          'By spending 1 ki point, the stalker can move through solid objects for a brief moment as part of her movement. She must begin and end her movement in an unoccupied space.',
      },
      {
        name: 'Uncanny Dodge',
        level: 6,
        description:
          'The stalker retains her Dexterity bonus to AC even if caught flat-footed or struck by an invisible attacker.',
      },
      {
        name: 'Improved Evasion',
        level: 10,
        description:
          'The stalker takes no damage on a successful Reflex save against area attacks, and only half damage on a failed save.',
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 12,
        description:
          'The stalker can no longer be flanked for the purpose of deadly strikes unless the attacker has at least four more levels than the stalker.',
      },
      {
        name: 'Greater Dual Disciplines',
        level: 16,
        description:
          'The stalker gains full access to a third discipline and may add it to her ki power and maneuver recovery options.',
      },
      {
        name: 'Perfect Self',
        level: 20,
        description:
          'The stalker becomes a magical creature. She gains damage reduction 10/chaotic and her unarmed strikes count as magical for the purpose of overcoming damage reduction.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'half',
      disciplines: ['broken-blade', 'solar-wind', 'steel-serpent', 'thrashing-dragon', 'veiled-moon'],
      progressionTableKey: 'stalker',
      recoveryMechanics: {
        primary: { type: 'swift_one', resourceId: 'stalker_ki' },
      },
    },
    source: 'dsp-pow',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 5. WARDER (Path of War)
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Warder',
    category: 'Base',
    maxLevel: 20,
    hitDie: 12,
    skillRanksPerLevel: 4,
    classSkills: [
      'Craft',
      'Diplomacy',
      'Handle Animal',
      'Intimidate',
      'Knowledge (dungeoneering)',
      'Knowledge (engineering)',
      'Perception',
      'Profession',
      'Ride',
      'Sense Motive',
      'Survival',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields', 'Tower shields'],
    startingWealth: '5d6 × 10 gp',
    classFeatures: [
      {
        name: 'Warder\'s Aegis',
        level: 1,
        description:
          'As a swift action, the warder can designate up to 2 allies within 60 feet as her aegis targets (increasing to 4 at 5th level and 6 at 10th level). The warder can intercept attacks directed at aegis targets using her armored rebuke and counter charge abilities, and her stances may grant additional benefits to protected allies.',
      },
      {
        name: 'Armored Rebuke',
        level: 1,
        description:
          'When an aegis target is attacked, the warder may expend an attack of opportunity to move up to her speed toward the attacker and make a melee attack against the attacker. This movement does not provoke attacks of opportunity.',
      },
      {
        name: 'Defensive Focus',
        level: 1,
        description:
          'While using the total defense action or fighting defensively, the warder gains an additional +2 bonus to AC. This bonus increases to +4 at 10th level.',
      },
      {
        name: 'Line in the Sand',
        level: 2,
        description:
          'The warder does not reduce her number of attacks of opportunity per round when she uses an armored rebuke. She regains expended attacks of opportunity at the start of her turn as normal.',
      },
      {
        name: 'Tactical Acumen',
        level: 3,
        description:
          'The warder adds her Intelligence modifier as a bonus to Combat Maneuver Defense. At 7th level, she also adds it to Combat Maneuver Bonus.',
      },
      {
        name: 'Counter Charge',
        level: 5,
        description:
          'When an opponent charges an aegis target, the warder may expend an attack of opportunity as an immediate action to interpose herself, becoming the target of the charge instead.',
      },
      {
        name: 'Bonus Feat',
        level: 6,
        description:
          'The warder gains a bonus combat feat at 6th level and every six levels thereafter (12th, 18th). She must meet all prerequisites for this feat.',
      },
      {
        name: 'Greater Aegis',
        level: 14,
        description:
          'The warder\'s aegis now protects allies from any attack, including spells and ranged attacks. When an aegis target would be hit by a ranged attack, the warder may expend an attack of opportunity to catch or deflect the attack.',
      },
      {
        name: 'Eternal Guardian',
        level: 20,
        description:
          'The warder\'s defensive capabilities become legendary. She gains damage reduction 5/— and all aegis targets within range gain a +4 dodge bonus to AC.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'INT',
      ilProgression: 'full',
      disciplines: ['broken-blade', 'golden-lion', 'iron-tortoise', 'primal-fury', 'scarlet-throne'],
      progressionTableKey: 'warder',
      recoveryMechanics: {
        primary: { type: 'full_round_all' },
      },
    },
    source: 'dsp-pow',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 6. WARLORD (Path of War)
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Warlord',
    category: 'Base',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Handle Animal',
      'Intimidate',
      'Knowledge (engineering)',
      'Knowledge (history)',
      'Knowledge (local)',
      'Knowledge (nobility)',
      'Perception',
      'Profession',
      'Ride',
      'Sense Motive',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields'],
    startingWealth: '5d6 × 10 gp',
    classFeatures: [
      {
        name: 'Gambits',
        level: 1,
        description:
          'The warlord can perform combat gambits — risky tactical maneuvers that recover expended maneuvers when successful. Each gambit specifies a challenge condition and an opportunity. If the warlord meets the condition during combat, all expended maneuvers are recovered. Gambit failures carry no penalty beyond the action spent attempting them.',
      },
      {
        name: 'Tactical Presence',
        level: 1,
        description:
          'All allies within 60 feet of the warlord gain a +1 morale bonus on attack rolls and Will saving throws. This bonus increases by +1 for every five warlord levels (+2 at 6th, +3 at 11th, +4 at 16th).',
      },
      {
        name: 'Bonus Feat',
        level: 1,
        description:
          'The warlord gains a bonus combat feat at 1st level and every four levels thereafter (5th, 9th, 13th, 17th). She must meet all prerequisites.',
      },
      {
        name: 'Adaptive Tactics',
        level: 2,
        description:
          'The warlord can change her readied maneuvers during combat as a full-round action. She may swap any number of her readied maneuvers for others she knows.',
      },
      {
        name: 'Inspiring Surge',
        level: 3,
        description:
          'Once per encounter, when the warlord initiates a strike, she may grant one ally within 30 feet an immediate free attack against the same target as a free action.',
      },
      {
        name: 'Battlefield Coordination',
        level: 5,
        description:
          'Allies adjacent to the warlord do not provoke attacks of opportunity from creatures the warlord threatens.',
      },
      {
        name: 'Warleader',
        level: 10,
        description:
          'The warlord\'s presence becomes a powerful force multiplier. Allies benefiting from tactical presence also gain a +2 bonus on damage rolls.',
      },
      {
        name: 'Legendary Commander',
        level: 20,
        description:
          'The warlord achieves legendary status on the battlefield. Her tactical presence bonus doubles, and all allies within range may recover one expended maneuver at the start of each round.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'CHA',
      ilProgression: 'full',
      disciplines: ['golden-lion', 'primal-fury', 'scarlet-throne', 'solar-wind', 'thrashing-dragon'],
      progressionTableKey: 'warlord',
      recoveryMechanics: {
        primary: { type: 'gambit' },
      },
    },
    source: 'dsp-pow',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 7. HARBINGER (Path of War: Expanded)
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Harbinger',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 6,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Climb',
      'Craft',
      'Disguise',
      'Escape Artist',
      'Intimidate',
      'Knowledge (dungeoneering)',
      'Knowledge (local)',
      'Knowledge (planes)',
      'Perception',
      'Profession',
      'Sense Motive',
      'Stealth',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
    startingWealth: '4d6 × 10 gp',
    classFeatures: [
      {
        name: 'Dark Focus',
        level: 1,
        description:
          'The harbinger chooses one discipline as her dark focus. She gains a +1 insight bonus on attack rolls with maneuvers from this discipline. This bonus increases by +1 at 5th, 10th, 15th, and 20th level.',
      },
      {
        name: 'Dark Claim',
        level: 1,
        description:
          'As a move action, the harbinger marks one creature within 60 feet as her quarry. She gains a bonus on attack rolls against the claimed target equal to her dark focus bonus. Only one creature can be claimed at a time; claiming a new target releases the previous one.',
      },
      {
        name: 'Inexorable',
        level: 2,
        description:
          'The harbinger cannot be stopped by difficult terrain when moving toward a claimed target. She ignores difficult terrain while charging a claimed target.',
      },
      {
        name: 'Impel',
        level: 3,
        description:
          'When the harbinger hits a claimed target, she may spend a swift action to force the target to move up to 10 feet in a direction of her choosing as a free action. This movement provokes attacks of opportunity.',
      },
      {
        name: 'Sinister Design',
        level: 5,
        description:
          'The harbinger gains a bonus discipline to choose from her expanded discipline list. She treats her initiator level as 2 higher for the purpose of maneuvers in this bonus discipline.',
      },
      {
        name: 'Foreboding Aura',
        level: 7,
        description:
          'Enemies within 10 feet of the harbinger take a -2 penalty on saving throws against her maneuvers and class features. Creatures immune to fear are immune to this effect.',
      },
      {
        name: 'Annihilation',
        level: 16,
        description:
          'When the harbinger kills a claimed target, she may immediately claim a new target within 30 feet as a free action.',
      },
      {
        name: 'Perfect Darkness',
        level: 20,
        description:
          'The harbinger becomes a being of dark intent. She gains blindsight 30 feet, immunity to fear effects, and her dark claim can affect up to three targets simultaneously.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'INT',
      ilProgression: 'half',
      disciplines: ['cursed-razor', 'eternal-guardian', 'shattered-mirror', 'veiled-moon'],
      progressionTableKey: 'harbinger',
      recoveryMechanics: {
        primary: { type: 'move_through_threatened' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 8. MYSTIC (Path of War: Expanded)
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Mystic',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Craft',
      'Diplomacy',
      'Escape Artist',
      'Heal',
      'Knowledge (arcana)',
      'Knowledge (nature)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Linguistics',
      'Perception',
      'Profession',
      'Sense Motive',
      'Spellcraft',
      'Stealth',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial melee weapons'],
    armorProficiencies: ['Light armor'],
    startingWealth: '3d6 × 10 gp',
    classFeatures: [
      {
        name: 'Animus Pool',
        level: 1,
        description:
          'The mystic maintains a pool of animus equal to her Wisdom modifier (minimum 1). Animus regenerates at the start of each turn in combat and resets to 0 between encounters. Animus fuels the mystic\'s maneuver recovery and powers her animus surge ability.',
      },
      {
        name: 'Animus Surge',
        level: 1,
        description:
          'The mystic can spend animus to enhance her strikes. As a swift action, she can spend 1 or more animus to add 1d6 damage per animus spent to her next attack this turn (maximum animus spent per surge = 1/2 her mystic level).',
      },
      {
        name: 'Elemental Attunement',
        level: 1,
        description:
          'The mystic chooses one elemental energy type (acid, cold, electricity, fire, or sonic) as her elemental attunement. Her animus surge damage is of this type, and she gains resistance 5 to that energy type.',
      },
      {
        name: 'Arcane Strike',
        level: 2,
        description:
          'The mystic gains Arcane Strike as a bonus feat even if she does not cast arcane spells, treating her mystic level as her caster level for this feat\'s effect.',
      },
      {
        name: 'Mystic Artifice',
        level: 4,
        description:
          'The mystic can use Use Magic Device to activate wands and staves without a Use Magic Device check, treating her mystic level as her caster level.',
      },
      {
        name: 'Greater Animus',
        level: 8,
        description:
          'The mystic\'s animus pool increases by an amount equal to her Wisdom modifier. Her animus surge can now be used to add energy damage of her attunement type to all attacks made in a full-attack action.',
      },
      {
        name: 'Elemental Resistance',
        level: 12,
        description:
          'The mystic\'s resistance to her chosen element increases to 20. She also gains resistance 5 to two other energy types of her choice.',
      },
      {
        name: 'Perfect Elemental Form',
        level: 20,
        description:
          'The mystic becomes one with elemental energy. She gains immunity to her chosen element and her animus surge damage dice increase to d10s.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'WIS',
      ilProgression: 'half',
      disciplines: ['elemental-flux', 'mithral-current', 'riven-hourglass', 'shattered-mirror', 'sleeping-goddess', 'tempest-gale'],
      progressionTableKey: 'mystic',
      recoveryMechanics: {
        primary: { type: 'animus_fueled', resourceId: 'mystic_animus' },
      },
    },
    source: 'dsp-powe',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 9. ZEALOT (Path of War: Expanded)
  // ──────────────────────────────────────────────────────────────────────────
  {
    name: 'Zealot',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Bluff',
      'Craft',
      'Diplomacy',
      'Heal',
      'Intimidate',
      'Knowledge (history)',
      'Knowledge (local)',
      'Knowledge (nobility)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Perception',
      'Profession',
      'Ride',
      'Sense Motive',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields'],
    startingWealth: '5d6 × 10 gp',
    classFeatures: [
      {
        name: 'Conviction Pool',
        level: 1,
        description:
          'The zealot maintains a pool of conviction points equal to her Charisma modifier + 1/2 her zealot level. Conviction is spent to fuel her class abilities and fuels her maneuver recovery. It replenishes after 8 hours of rest and partially replenishes between encounters (regain points equal to her Charisma modifier).',
      },
      {
        name: 'Sacred Flame',
        level: 1,
        description:
          'The zealot\'s unarmed strikes and natural weapons deal damage as if she were two size categories larger. Her attacks count as good-aligned for the purpose of overcoming damage reduction.',
      },
      {
        name: 'Guarded Fervor',
        level: 1,
        description:
          'The zealot adds her Charisma modifier (minimum +0) as a bonus to her Armor Class as long as she is wearing light or no armor.',
      },
      {
        name: 'Zealot\'s Zeal',
        level: 2,
        description:
          'The zealot adds her Charisma modifier (minimum +0) as a bonus on saving throws against fear, charm, and compulsion effects.',
      },
      {
        name: 'Lay On Hands',
        level: 3,
        description:
          'The zealot can heal wounds by touch. Each day she can heal a number of hit points equal to twice her zealot level × her Charisma modifier. She can spend this healing on herself or others as a standard action (or a swift action on herself).',
      },
      {
        name: 'Channel Conviction',
        level: 5,
        description:
          'The zealot can spend 1 conviction to add her Charisma modifier to damage rolls on her next attack this turn.',
      },
      {
        name: 'Aura of Courage',
        level: 8,
        description:
          'The zealot is immune to fear. Allies within 10 feet gain a +4 morale bonus on saving throws against fear.',
      },
      {
        name: 'Sacred Defense',
        level: 12,
        description:
          'The zealot gains damage reduction equal to her Charisma modifier (minimum 1)/evil.',
      },
      {
        name: 'Avatar of Conviction',
        level: 20,
        description:
          'The zealot becomes a paragon of her cause. She gains a +4 bonus to Charisma, all her saves gain a bonus equal to her Charisma modifier, and she can spend conviction to negate effects that would kill or incapacitate her.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    initiating: {
      type: 'Martial',
      initiatingAbility: 'CHA',
      ilProgression: 'full',
      disciplines: ['eternal-guardian', 'golden-lion', 'silver-crane', 'sleeping-goddess'],
      progressionTableKey: 'zealot',
      recoveryMechanics: {
        primary: { type: 'conviction_fueled', resourceId: 'zealot_conviction' },
      },
    },
    source: 'dsp-powe',
  },
];
