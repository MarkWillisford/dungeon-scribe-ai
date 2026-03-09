// Unchained Classes — all 4 classes from Pathfinder Unchained, full levels 1-20
// Source: https://www.d20pfsrd.com/classes/unchained-classes/

import { BABProgression, SaveProgression } from '@/types/base';
import { ExpandedClassData } from './types';

export const UNCHAINED_CLASSES_EXPANDED: ExpandedClassData[] = [
  // ─── UNCHAINED BARBARIAN ───────────────────────────────────────────────────────
  {
    name: 'Barbarian (Unchained)',
    category: 'Unchained',
    maxLevel: 20,
    hitDie: 12,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Handle Animal',
      'Intimidate',
      'Knowledge (nature)',
      'Perception',
      'Ride',
      'Survival',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (except tower shields)'],
    startingWealth: '3d6 x 10 gp',
    alignment: 'Any non-lawful',
    classFeatures: [
      {
        name: 'Fast Movement',
        level: 1,
        description:
          "A barbarian's land speed is faster than the norm for her race by +10 feet. This benefit applies only when she is wearing no armor, light armor, or medium armor, and not carrying a heavy load. Apply this bonus before modifying the barbarian's speed because of any load carried or armor worn. This bonus stacks with any other bonuses to the barbarian's land speed.",
      },
      {
        name: 'Rage',
        level: 1,
        description:
          'A barbarian can call upon inner reserves of strength and ferocity, granting her additional combat prowess. A barbarian can rage for a number of rounds per day equal to 4 + her Constitution modifier. At each level after 1st, she can rage for 2 additional rounds. Temporary increases to Constitution do not increase the total number of rounds that a barbarian can rage per day. While in rage, a barbarian gains a +2 bonus on melee attack rolls, melee damage rolls, thrown weapon damage rolls, and Will saving throws. In addition, she takes a -2 penalty to Armor Class. She also gains 2 temporary hit points per Hit Die. These temporary hit points are lost first when a character takes damage, disappear when the rage ends, and are not replenished if the barbarian enters a rage again within 1 minute of her previous rage. A barbarian can end her rage as a free action and is fatigued after rage for a number of rounds equal to twice the number of rounds spent in the rage.',
      },
      {
        name: 'Rage Power',
        level: 2,
        description:
          'As a barbarian gains levels, she learns to use her rage in new ways. Starting at 2nd level, a barbarian gains a rage power. She gains another rage power for every two levels of barbarian attained after 2nd level. A barbarian gains the benefits of rage powers only while raging.',
      },
      {
        name: 'Uncanny Dodge',
        level: 2,
        description:
          'At 2nd level, a barbarian gains the ability to react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dexterity bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A barbarian with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action against her.',
      },
      {
        name: 'Danger Sense +1',
        level: 3,
        description:
          'At 3rd level, the barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. In addition, she gains a +1 bonus on Perception checks to avoid being surprised by a foe. These bonuses increase by +1 every three barbarian levels thereafter (6th, 9th, 12th, 15th, and 18th level). This ability counts as trap sense for the purpose of any feat or class prerequisite.',
      },
      {
        name: 'Rage Power',
        level: 4,
        description: 'The barbarian gains an additional rage power.',
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 5,
        description:
          'At 5th level, a barbarian can no longer be flanked. This defense denies another rogue the ability to sneak attack the character by flanking her, unless the attacker has at least four more rogue levels than the target has barbarian levels.',
      },
      {
        name: 'Rage Power',
        level: 6,
        description: 'The barbarian gains an additional rage power.',
      },
      {
        name: 'Danger Sense +2',
        level: 6,
        description: 'Danger sense bonuses increase to +2.',
      },
      {
        name: 'Damage Reduction 1/\u2014',
        level: 7,
        description:
          'At 7th level, a barbarian gains damage reduction. Subtract 1 from the damage the barbarian takes each time she is dealt damage from a weapon or a natural attack. At 10th level and every 3 levels thereafter, this damage reduction rises by 1 point (to a maximum of 5 at 19th level). Damage reduction can reduce damage to 0 but not below 0.',
      },
      {
        name: 'Rage Power',
        level: 8,
        description: 'The barbarian gains an additional rage power.',
      },
      {
        name: 'Danger Sense +3',
        level: 9,
        description: 'Danger sense bonuses increase to +3.',
      },
      {
        name: 'Damage Reduction 2/\u2014',
        level: 10,
        description: 'Damage reduction increases to 2/\u2014.',
      },
      {
        name: 'Rage Power',
        level: 10,
        description: 'The barbarian gains an additional rage power.',
      },
      {
        name: 'Greater Rage',
        level: 11,
        description:
          'At 11th level, when a barbarian enters rage, the bonus on melee attack rolls, melee damage rolls, thrown weapon damage rolls, and Will saving throws increases to +3. In addition, the amount of temporary hit points gained when entering a rage increases to 3 per Hit Die.',
      },
      {
        name: 'Rage Power',
        level: 12,
        description: 'The barbarian gains an additional rage power.',
      },
      {
        name: 'Danger Sense +4',
        level: 12,
        description: 'Danger sense bonuses increase to +4.',
      },
      {
        name: 'Damage Reduction 3/\u2014',
        level: 13,
        description: 'Damage reduction increases to 3/\u2014.',
      },
      {
        name: 'Indomitable Will',
        level: 14,
        description:
          'While in rage, a barbarian of 14th level or higher gains a +4 bonus on Will saves to resist enchantment spells. This bonus stacks with all other modifiers, including the morale bonus on Will saves she also receives during her rage.',
      },
      {
        name: 'Rage Power',
        level: 14,
        description: 'The barbarian gains an additional rage power.',
      },
      {
        name: 'Danger Sense +5',
        level: 15,
        description: 'Danger sense bonuses increase to +5.',
      },
      {
        name: 'Damage Reduction 4/\u2014',
        level: 16,
        description: 'Damage reduction increases to 4/\u2014.',
      },
      {
        name: 'Rage Power',
        level: 16,
        description: 'The barbarian gains an additional rage power.',
      },
      {
        name: 'Tireless Rage',
        level: 17,
        description:
          'Starting at 17th level, a barbarian no longer becomes fatigued at the end of her rage. If she enters a rage again within 1 minute of ending a previous rage, she does not gain any temporary hit points from the new rage.',
      },
      {
        name: 'Rage Power',
        level: 18,
        description: 'The barbarian gains an additional rage power.',
      },
      {
        name: 'Danger Sense +6',
        level: 18,
        description: 'Danger sense bonuses increase to +6.',
      },
      {
        name: 'Damage Reduction 5/\u2014',
        level: 19,
        description: 'Damage reduction increases to 5/\u2014.',
      },
      {
        name: 'Mighty Rage',
        level: 20,
        description:
          'At 20th level, when a barbarian enters rage, the bonus on melee attack rolls, melee damage rolls, thrown weapon damage rolls, and Will saving throws increases to +4. In addition, the amount of temporary hit points gained when entering a rage increases to 4 per Hit Die.',
      },
      {
        name: 'Rage Power',
        level: 20,
        description: 'The barbarian gains an additional rage power.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Pathfinder Unchained',
  },

  // ─── UNCHAINED MONK ────────────────────────────────────────────────────────────
  {
    name: 'Monk (Unchained)',
    category: 'Unchained',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Escape Artist',
      'Intimidate',
      'Knowledge (history)',
      'Knowledge (religion)',
      'Perception',
      'Perform',
      'Profession',
      'Ride',
      'Sense Motive',
      'Stealth',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [
      'Club',
      'Crossbow (light)',
      'Crossbow (heavy)',
      'Dagger',
      'Handaxe',
      'Javelin',
      'Kama',
      'Nunchaku',
      'Quarterstaff',
      'Sai',
      'Short sword',
      'Shortspear',
      'Shuriken',
      'Siangham',
      'Sling',
      'Spear',
      'Monk weapons',
    ],
    armorProficiencies: [],
    startingWealth: '1d6 x 10 gp',
    alignment: 'Any lawful',
    classFeatures: [
      {
        name: 'Bonus Feat',
        level: 1,
        description:
          "At 1st level, 2nd level, and every 4 levels thereafter, a monk can select a bonus feat. These feats must be taken from the following list: Catch Off-Guard, Combat Reflexes, Deflect Arrows, Dodge, Improved Grapple, Scorpion Style, and Throw Anything. At 6th level, the following feats are added to the list: Gorgon's Fist, Improved Bull Rush, Improved Disarm, Improved Feint, Improved Trip, and Mobility. At 10th level, the following feats are added to the list: Improved Critical, Medusa's Wrath, Snatch Arrows, and Spring Attack.",
      },
      {
        name: 'Flurry of Blows',
        level: 1,
        description:
          'At 1st level, a monk can make a flurry of blows as a full-attack action. When making a flurry of blows, the monk can make one additional attack at his highest base attack bonus. This additional attack stacks with the bonus attacks from haste and similar effects. He can make these attacks with any combination of his unarmed strikes and weapons that have the monk special weapon quality. At 11th level, a monk can make an additional attack at his highest base attack bonus whenever he makes a flurry of blows (for a total of two additional attacks).',
      },
      {
        name: 'Stunning Fist',
        level: 1,
        description:
          'At 1st level, the monk gains Stunning Fist as a bonus feat, even if he does not meet the prerequisites. At 4th level and every 4 levels thereafter, the monk gains the ability to apply a new condition to the target of his Stunning Fist: fatigued (4th), sickened for 1 minute (8th), staggered for 1d6+1 rounds (12th), permanently blind or deaf (16th), or paralyzed for 1d6+1 rounds (20th).',
      },
      {
        name: 'Unarmed Strike',
        level: 1,
        description:
          "At 1st level, a monk gains Improved Unarmed Strike as a bonus feat. A monk's attacks can be with fists, elbows, knees, and feet. A monk deals more damage with unarmed strikes than others. His unarmed strike damage is 1d6 at levels 1-3, 1d8 at levels 4-7, 1d10 at levels 8-11, 2d6 at levels 12-15, 2d8 at levels 16-19, and 2d10 at level 20 (for Medium monks).",
      },
      {
        name: 'AC Bonus',
        level: 1,
        description:
          'When unarmored and unencumbered, the monk adds his Wisdom bonus (if any) to his AC and his CMD. In addition, a monk gains a +1 bonus to AC and CMD at 4th level. This bonus increases by 1 for every four monk levels thereafter, up to a maximum of +5 at 20th level. These bonuses to AC apply even against touch attacks or when the monk is flat-footed. He loses these bonuses when he is immobilized or helpless, when he wears any armor, when he carries a shield, or when he carries a medium or heavy load.',
      },
      {
        name: 'Bonus Feat',
        level: 2,
        description: 'The monk selects an additional bonus feat from the monk bonus feat list.',
      },
      {
        name: 'Evasion',
        level: 2,
        description:
          'At 2nd level, a monk can avoid damage from many area-effect attacks. If a monk succeeds at a Reflex saving throw against an attack that normally deals half damage on a successful save, he instead takes no damage. Evasion can be used only if the monk is unarmored. A helpless monk does not gain the benefit of evasion.',
      },
      {
        name: 'Fast Movement',
        level: 3,
        description:
          'At 3rd level, a monk gains an enhancement bonus to his land speed. A monk in armor or carrying a medium or heavy load loses this extra speed. The bonus is +10 feet at 3rd level, +20 feet at 6th level, +30 feet at 9th level, +40 feet at 12th level, +50 feet at 15th level, and +60 feet at 18th level.',
      },
      {
        name: 'Ki Pool',
        level: 3,
        description:
          "At 3rd level, a monk gains a pool of ki points, supernatural energy he can use to accomplish amazing feats. The number of points in a monk's ki pool is equal to 1/2 his monk level + his Wisdom modifier. As long as he has at least 1 point in his ki pool, he can make a ki strike. By spending 1 point from his ki pool as a swift action, a monk can make one additional unarmed strike at his highest attack bonus when making a flurry of blows. The ki pool is replenished each morning after 8 hours of rest or meditation.",
      },
      {
        name: 'Ki Strike (Magic)',
        level: 3,
        description:
          "At 3rd level, ki strike allows a monk's unarmed attacks to be treated as magic weapons for the purpose of overcoming damage reduction.",
      },
      {
        name: 'Ki Power',
        level: 4,
        description:
          'At 4th level and every 2 levels thereafter, a monk can select one ki power. These ki powers allow the monk to perform amazing feats of mystical power and, in some cases, to duplicate spell effects. Once a ki power is selected, it cannot be changed. Some ki powers require the monk to be of a specific level or higher before they can be chosen.',
      },
      {
        name: 'Still Mind',
        level: 4,
        description:
          'A monk of 4th level or higher gains a +2 bonus on saving throws against enchantment spells and effects.',
      },
      {
        name: 'AC Bonus +1',
        level: 4,
        description:
          'The monk gains an additional +1 bonus to AC and CMD when unarmored and unencumbered, for a total of +1.',
      },
      {
        name: 'Purity of Body',
        level: 5,
        description:
          'At 5th level, a monk gains immunity to all diseases, including supernatural and magical diseases.',
      },
      {
        name: 'Style Strike',
        level: 5,
        description:
          'At 5th level, a monk can learn one type of style strike. Whenever he makes a flurry of blows, he can designate one of his unarmed strikes as a style strike. This attack is resolved as normal, but it has an additional effect depending on the type of strike chosen. At 9th level and every 4 levels thereafter, a monk learns an additional style strike. At 15th level, a monk can designate two of his unarmed strikes each round as a style strike, each with a different type.',
      },
      {
        name: 'Bonus Feat',
        level: 6,
        description:
          'The monk selects an additional bonus feat from the expanded monk bonus feat list.',
      },
      { name: 'Ki Power', level: 6, description: 'The monk selects an additional ki power.' },
      {
        name: 'Fast Movement (+20 ft.)',
        level: 6,
        description: "The monk's enhancement bonus to land speed increases to +20 feet.",
      },
      {
        name: 'Ki Strike (Cold Iron/Silver)',
        level: 7,
        description:
          "At 7th level, the monk's unarmed attacks are treated as cold iron and silver for the purpose of overcoming damage reduction.",
      },
      { name: 'Ki Power', level: 8, description: 'The monk selects an additional ki power.' },
      {
        name: 'AC Bonus +2',
        level: 8,
        description: "The monk's bonus to AC and CMD when unarmored increases to +2.",
      },
      {
        name: 'Improved Evasion',
        level: 9,
        description:
          "At 9th level, a monk's evasion ability improves. He still takes no damage on a successful Reflex saving throw against attacks, but henceforth he takes only half damage on a failed save. A helpless monk does not gain the benefit of improved evasion.",
      },
      {
        name: 'Style Strike',
        level: 9,
        description: 'The monk learns an additional style strike.',
      },
      {
        name: 'Fast Movement (+30 ft.)',
        level: 9,
        description: "The monk's enhancement bonus to land speed increases to +30 feet.",
      },
      {
        name: 'Bonus Feat',
        level: 10,
        description:
          'The monk selects an additional bonus feat from the expanded monk bonus feat list.',
      },
      { name: 'Ki Power', level: 10, description: 'The monk selects an additional ki power.' },
      {
        name: 'Ki Strike (Lawful)',
        level: 10,
        description:
          "At 10th level, the monk's unarmed attacks are also treated as lawful weapons for the purpose of overcoming damage reduction.",
      },
      {
        name: 'Flurry of Blows (Additional Attack)',
        level: 11,
        description:
          'At 11th level, a monk can make an additional attack at his highest base attack bonus whenever he makes a flurry of blows (for a total of two additional attacks above his normal number).',
      },
      { name: 'Ki Power', level: 12, description: 'The monk selects an additional ki power.' },
      {
        name: 'AC Bonus +3',
        level: 12,
        description: "The monk's bonus to AC and CMD when unarmored increases to +3.",
      },
      {
        name: 'Fast Movement (+40 ft.)',
        level: 12,
        description: "The monk's enhancement bonus to land speed increases to +40 feet.",
      },
      {
        name: 'Style Strike',
        level: 13,
        description: 'The monk learns an additional style strike.',
      },
      {
        name: 'Tongue of the Sun and Moon',
        level: 13,
        description:
          'A monk of 13th level or higher can speak with any living creature, as if under a permanent tongues effect.',
      },
      {
        name: 'Bonus Feat',
        level: 14,
        description:
          'The monk selects an additional bonus feat from the expanded monk bonus feat list.',
      },
      { name: 'Ki Power', level: 14, description: 'The monk selects an additional ki power.' },
      {
        name: 'Style Strike (2/round)',
        level: 15,
        description:
          'At 15th level, the monk can designate two of his unarmed strikes each round as style strikes, each with a different type.',
      },
      {
        name: 'Fast Movement (+50 ft.)',
        level: 15,
        description: "The monk's enhancement bonus to land speed increases to +50 feet.",
      },
      { name: 'Ki Power', level: 16, description: 'The monk selects an additional ki power.' },
      {
        name: 'Ki Strike (Adamantine)',
        level: 16,
        description:
          "At 16th level, the monk's unarmed attacks are also treated as adamantine weapons for the purpose of overcoming damage reduction and bypassing hardness.",
      },
      {
        name: 'AC Bonus +4',
        level: 16,
        description: "The monk's bonus to AC and CMD when unarmored increases to +4.",
      },
      {
        name: 'Style Strike',
        level: 17,
        description: 'The monk learns an additional style strike.',
      },
      {
        name: 'Timeless Body',
        level: 17,
        description:
          'At 17th level, a monk no longer takes penalties to his ability scores for aging and cannot be magically aged. Any such penalties that he has already taken, however, remain in place. Age bonuses still accrue, and the monk still dies of old age when his time is up.',
      },
      {
        name: 'Bonus Feat',
        level: 18,
        description:
          'The monk selects an additional bonus feat from the expanded monk bonus feat list.',
      },
      { name: 'Ki Power', level: 18, description: 'The monk selects an additional ki power.' },
      {
        name: 'Fast Movement (+60 ft.)',
        level: 18,
        description: "The monk's enhancement bonus to land speed increases to +60 feet.",
      },
      {
        name: 'Flawless Mind',
        level: 19,
        description:
          'At 19th level, a monk can roll twice on any Will save and take the better result. If the monk fails a Will saving throw against a spell or effect that has a duration longer than 1 hour, he can attempt a new saving throw at the end of each hour to end the effect.',
      },
      { name: 'Ki Power', level: 20, description: 'The monk selects an additional ki power.' },
      {
        name: 'Perfect Self',
        level: 20,
        description:
          'At 20th level, a monk becomes a magical creature. He is forevermore treated as an outsider rather than as a humanoid for the purpose of spells and magical effects. He gains damage reduction 10/chaotic, which allows him to ignore the first 10 points of damage from any attack made by a nonchaotic weapon or by any natural attack made by a creature that does not have similar damage reduction. Unlike other outsiders, the monk can still be brought back from the dead as if he were a member of his previous creature type.',
      },
      {
        name: 'AC Bonus +5',
        level: 20,
        description: "The monk's bonus to AC and CMD when unarmored increases to +5.",
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Pathfinder Unchained',
  },

  // ─── UNCHAINED ROGUE ───────────────────────────────────────────────────────────
  {
    name: 'Rogue (Unchained)',
    category: 'Unchained',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 8,
    classSkills: [
      'Acrobatics',
      'Appraise',
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Disable Device',
      'Disguise',
      'Escape Artist',
      'Intimidate',
      'Knowledge (dungeoneering)',
      'Knowledge (local)',
      'Linguistics',
      'Perception',
      'Perform',
      'Profession',
      'Sense Motive',
      'Sleight of Hand',
      'Stealth',
      'Swim',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [
      'Simple weapons',
      'Hand crossbow',
      'Rapier',
      'Sap',
      'Short sword',
      'Shortbow',
    ],
    armorProficiencies: ['Light armor'],
    startingWealth: '4d6 x 10 gp',
    classFeatures: [
      {
        name: 'Finesse Training',
        level: 1,
        description:
          'At 1st level, a rogue gains Weapon Finesse as a bonus feat. In addition, starting at 3rd level, she can select any one type of weapon that can be used with Weapon Finesse (such as rapiers or daggers). Once this choice is made, it cannot be changed. Whenever she makes a successful melee attack with the selected weapon, she adds her Dexterity modifier instead of her Strength modifier to the damage roll. A rogue can select a second weapon at 11th level and a third at 19th level.',
      },
      {
        name: 'Sneak Attack +1d6',
        level: 1,
        description:
          "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every 2 rogue levels thereafter. Ranged attacks can count as sneak attacks only if the target is within 30 feet. This additional damage is precision damage and is not multiplied on a critical hit.",
      },
      {
        name: 'Trapfinding',
        level: 1,
        description:
          'A rogue adds 1/2 her level (minimum 1) to Perception skill checks made to locate traps and to Disable Device skill checks. A rogue can use Disable Device to disarm magic traps.',
      },
      {
        name: 'Evasion',
        level: 2,
        description:
          'At 2nd level, a rogue can avoid even magical and unusual attacks with great agility. If she succeeds at a Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can be used only if the rogue is wearing light armor or no armor. A helpless rogue does not gain the benefit of evasion.',
      },
      {
        name: 'Rogue Talent',
        level: 2,
        description:
          'As a rogue gains experience, she learns a number of talents that aid her and confound her foes. Starting at 2nd level, a rogue gains one rogue talent. She gains an additional rogue talent for every 2 levels of rogue attained after 2nd level. A rogue cannot select an individual talent more than once.',
      },
      {
        name: 'Danger Sense +1',
        level: 3,
        description:
          'At 3rd level, a rogue gains a +1 bonus on Reflex saves to avoid traps and a +1 dodge bonus to AC against attacks made by traps. In addition, she gains a +1 bonus on Perception checks to avoid being surprised by a foe. These bonuses increase by +1 every 3 rogue levels thereafter (to a maximum of +6 at 18th level). This ability counts as trap sense for the purpose of any feat or class prerequisite, and can be replaced by any archetype class feature that replaces trap sense.',
      },
      {
        name: 'Finesse Training (Weapon)',
        level: 3,
        description:
          'At 3rd level, the rogue selects a weapon that can be used with Weapon Finesse. She adds her Dexterity modifier instead of her Strength modifier to damage rolls with that weapon.',
      },
      {
        name: 'Sneak Attack +2d6',
        level: 3,
        description: 'Sneak attack damage increases to +2d6.',
      },
      {
        name: 'Debilitating Injury',
        level: 4,
        description:
          "At 4th level, whenever a rogue deals sneak attack damage to a foe, she can also debilitate the target of her attack, causing it to take a penalty for 1 round (this is in addition to any penalty caused by a rogue talent or other special ability). The rogue can choose to apply any one of the following penalties when the damage is dealt: Bewildered (the target takes a -2 penalty to AC), Disoriented (the target takes a -2 penalty on attack rolls), or Hampered (all of the target's speeds are reduced by half and the target cannot take a 5-foot step). These penalties do not stack with themselves, but additional sneak attacks that deal damage reset the duration. A target can only be subject to one type at a time.",
      },
      {
        name: 'Rogue Talent',
        level: 4,
        description: 'The rogue gains an additional rogue talent.',
      },
      {
        name: 'Uncanny Dodge',
        level: 4,
        description:
          'At 4th level, a rogue can react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dexterity bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A rogue with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action against her.',
      },
      {
        name: "Rogue's Edge",
        level: 5,
        description:
          "At 5th level, a rogue has mastered a single skill beyond that skill's normal boundaries, gaining results that others can only dream about. She gains the skill unlock powers for that skill as appropriate for her number of ranks in that skill. At 10th, 15th, and 20th levels, she chooses an additional skill and gains skill unlock powers for that skill as well.",
      },
      {
        name: 'Sneak Attack +3d6',
        level: 5,
        description: 'Sneak attack damage increases to +3d6.',
      },
      {
        name: 'Danger Sense +2',
        level: 6,
        description: 'Danger sense bonuses increase to +2.',
      },
      {
        name: 'Rogue Talent',
        level: 6,
        description: 'The rogue gains an additional rogue talent.',
      },
      {
        name: 'Sneak Attack +4d6',
        level: 7,
        description: 'Sneak attack damage increases to +4d6.',
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 8,
        description:
          'At 8th level, a rogue can no longer be flanked. This defense denies another rogue the ability to sneak attack the character by flanking her, unless the attacker has at least four more rogue levels than the target has rogue levels.',
      },
      {
        name: 'Rogue Talent',
        level: 8,
        description: 'The rogue gains an additional rogue talent.',
      },
      {
        name: 'Danger Sense +3',
        level: 9,
        description: 'Danger sense bonuses increase to +3.',
      },
      {
        name: 'Sneak Attack +5d6',
        level: 9,
        description: 'Sneak attack damage increases to +5d6.',
      },
      {
        name: 'Advanced Talents',
        level: 10,
        description:
          'At 10th level, and every 2 levels thereafter, a rogue can choose an advanced rogue talent whenever she could otherwise choose a rogue talent. Advanced talents provide more powerful special abilities.',
      },
      {
        name: 'Rogue Talent',
        level: 10,
        description: 'The rogue gains an additional rogue talent (may choose an advanced talent).',
      },
      {
        name: "Rogue's Edge",
        level: 10,
        description: 'The rogue selects an additional skill for skill unlock powers.',
      },
      {
        name: 'Finesse Training (Second Weapon)',
        level: 11,
        description:
          'At 11th level, the rogue selects a second weapon that can be used with Weapon Finesse. She adds her Dexterity modifier instead of Strength to damage rolls with that weapon.',
      },
      {
        name: 'Sneak Attack +6d6',
        level: 11,
        description: 'Sneak attack damage increases to +6d6.',
      },
      {
        name: 'Danger Sense +4',
        level: 12,
        description: 'Danger sense bonuses increase to +4.',
      },
      {
        name: 'Rogue Talent',
        level: 12,
        description: 'The rogue gains an additional rogue talent (may choose an advanced talent).',
      },
      {
        name: 'Sneak Attack +7d6',
        level: 13,
        description: 'Sneak attack damage increases to +7d6.',
      },
      {
        name: 'Rogue Talent',
        level: 14,
        description: 'The rogue gains an additional rogue talent (may choose an advanced talent).',
      },
      {
        name: 'Danger Sense +5',
        level: 15,
        description: 'Danger sense bonuses increase to +5.',
      },
      {
        name: "Rogue's Edge",
        level: 15,
        description: 'The rogue selects an additional skill for skill unlock powers.',
      },
      {
        name: 'Sneak Attack +8d6',
        level: 15,
        description: 'Sneak attack damage increases to +8d6.',
      },
      {
        name: 'Rogue Talent',
        level: 16,
        description: 'The rogue gains an additional rogue talent (may choose an advanced talent).',
      },
      {
        name: 'Sneak Attack +9d6',
        level: 17,
        description: 'Sneak attack damage increases to +9d6.',
      },
      {
        name: 'Danger Sense +6',
        level: 18,
        description: 'Danger sense bonuses increase to +6.',
      },
      {
        name: 'Rogue Talent',
        level: 18,
        description: 'The rogue gains an additional rogue talent (may choose an advanced talent).',
      },
      {
        name: 'Finesse Training (Third Weapon)',
        level: 19,
        description:
          'At 19th level, the rogue selects a third weapon that can be used with Weapon Finesse. She adds her Dexterity modifier instead of Strength to damage rolls with that weapon.',
      },
      {
        name: 'Sneak Attack +10d6',
        level: 19,
        description: 'Sneak attack damage increases to +10d6.',
      },
      {
        name: 'Master Strike',
        level: 20,
        description:
          "At 20th level, an unchained rogue becomes incredibly deadly when dealing sneak attack damage. Each time the rogue deals sneak attack damage, she can choose one of the following three effects: the target can be put to sleep for 1d4 hours, paralyzed for 2d6 rounds, or slain. Regardless of the effect chosen, the target can attempt a Fortitude saving throw to negate the additional effect. The DC of this save is equal to 10 + 1/2 the rogue's level + the rogue's Dexterity modifier. Once a creature has been the target of a master strike, regardless of whether or not the save is successful, that creature is immune to that rogue's master strike for 24 hours.",
      },
      {
        name: 'Rogue Talent',
        level: 20,
        description: 'The rogue gains an additional rogue talent (may choose an advanced talent).',
      },
      {
        name: "Rogue's Edge",
        level: 20,
        description: 'The rogue selects an additional skill for skill unlock powers.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Pathfinder Unchained',
  },

  // ─── UNCHAINED SUMMONER ────────────────────────────────────────────────────────
  {
    name: 'Summoner (Unchained)',
    category: 'Unchained',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 2,
    classSkills: [
      'Craft',
      'Fly',
      'Handle Animal',
      'Knowledge (all)',
      'Linguistics',
      'Profession',
      'Ride',
      'Spellcraft',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons'],
    armorProficiencies: ['Light armor'],
    startingWealth: '2d6 x 10 gp',
    classFeatures: [
      {
        name: 'Cantrips',
        level: 1,
        description:
          'A summoner learns a number of cantrips, or 0-level spells. These spells are cast like any other spell, but they are not expended when cast and may be used again.',
      },
      {
        name: 'Eidolon',
        level: 1,
        description:
          "A summoner begins play with the ability to summon to his side a powerful outsider called an eidolon. The eidolon forms a link with the summoner, who forever after summons an aspect of the same creature. An eidolon has the same alignment as the summoner that calls it and can speak all of his languages. It takes 1 minute to summon an eidolon and the eidolon remains until dismissed or killed. If the eidolon is sent back to its home plane due to death, it cannot be summoned again until the following day. The eidolon's Hit Dice, saving throws, skills, feats, and abilities are tied to the summoner's class level and increase as the summoner gains levels. The eidolon must select a subtype (angel, azata, daemon, demon, devil, div, elemental, inevitable, protean, or psychopomp), which determines its base form and available evolutions.",
      },
      {
        name: 'Life Link',
        level: 1,
        description:
          'Starting at 1st level, a summoner forms a close bond with his eidolon. Whenever the eidolon takes enough damage to send it back to its home plane, the summoner can sacrifice any number of hit points. Each hit point sacrificed in this way prevents 1 point of damage done to the eidolon. The eidolon must remain within 100 feet of the summoner for it to function at full strength. If the eidolon is beyond 100 feet but closer than 1,000 feet, its current and maximum hit point totals are reduced by 50%. If the eidolon is more than 1,000 feet away but closer than 10,000 feet, its current and maximum hit point totals are reduced by 75%. If the eidolon is more than 10,000 feet away, it is immediately returned to its home plane.',
      },
      {
        name: 'Summon Monster I',
        level: 1,
        description:
          'Starting at 1st level, a summoner can cast summon monster I as a spell-like ability a number of times per day equal to 3 + his Charisma modifier. Drawing upon this ability uses up the same power as the summoner uses to call his eidolon. As a result, he can only use this ability when his eidolon is not summoned. He can cast this spell as a standard action and the creatures remain for 1 minute per level (instead of 1 round per level).',
      },
      {
        name: 'Bond Senses',
        level: 2,
        description:
          'Starting at 2nd level, a summoner can, as a standard action, share the senses of his eidolon, hearing, seeing, smelling, tasting, and touching everything the eidolon does. He can use this ability a number of rounds per day equal to his summoner level. There is no range to this ability, but the eidolon and the summoner must be on the same plane.',
      },
      {
        name: 'Summon Monster II',
        level: 3,
        description:
          "At 3rd level, the summoner's summon monster spell-like ability upgrades to summon monster II.",
      },
      {
        name: 'Shield Ally',
        level: 4,
        description:
          "At 4th level, whenever a summoner is within his eidolon's reach, the summoner receives a +2 shield bonus to his Armor Class and a +2 circumstance bonus on his saving throws. This bonus does not apply if the eidolon is grappled, helpless, paralyzed, stunned, or unconscious.",
      },
      {
        name: 'Summon Monster III',
        level: 5,
        description:
          "At 5th level, the summoner's summon monster spell-like ability upgrades to summon monster III.",
      },
      {
        name: "Maker's Call",
        level: 6,
        description:
          "At 6th level, as a standard action, a summoner can call his eidolon to his side. This functions as dimension door, using the summoner's caster level. When this ability is used, the eidolon appears adjacent to the summoner (or as close as possible if all adjacent spaces are occupied). If the eidolon is out of range, the ability is wasted. The summoner can use this ability once per day at 6th level, plus one additional time per day for every four levels beyond 6th.",
      },
      {
        name: 'Summon Monster IV',
        level: 7,
        description:
          "At 7th level, the summoner's summon monster spell-like ability upgrades to summon monster IV.",
      },
      {
        name: 'Transposition',
        level: 8,
        description:
          "At 8th level, a summoner can use his maker's call ability to swap locations with his eidolon. If it is larger than him, he can appear in any square previously occupied by the eidolon. The eidolon must occupy the square that was occupied by the summoner if able, or as close as possible if it is not able.",
      },
      {
        name: 'Summon Monster V',
        level: 9,
        description:
          "At 9th level, the summoner's summon monster spell-like ability upgrades to summon monster V.",
      },
      {
        name: 'Aspect',
        level: 10,
        description:
          "At 10th level, a summoner can divert up to 2 points from his eidolon's evolution pool to add evolutions to himself. He cannot select any evolution that the eidolon could not possess, and he must be able to meet the requirements for the evolution. He cannot select the ability increase evolution through this ability. Any points spent in this way are taken from the eidolon's evolution pool (reducing the total number of points available to the eidolon).",
      },
      {
        name: 'Summon Monster VI',
        level: 11,
        description:
          "At 11th level, the summoner's summon monster spell-like ability upgrades to summon monster VI.",
      },
      {
        name: 'Greater Shield Ally',
        level: 12,
        description:
          "At 12th level, whenever an ally is within the eidolon's reach, the ally receives a +2 shield bonus to its Armor Class and a +2 circumstance bonus on its saving throws. If this ally is the summoner, these bonuses increase to +4. This bonus does not apply if the eidolon is grappled, helpless, paralyzed, stunned, or unconscious.",
      },
      {
        name: 'Summon Monster VII',
        level: 13,
        description:
          "At 13th level, the summoner's summon monster spell-like ability upgrades to summon monster VII.",
      },
      {
        name: 'Life Bond',
        level: 14,
        description:
          "At 14th level, a summoner's life becomes linked to his eidolon's. As long as the eidolon has 1 or more hit points, the summoner is protected from harm. Damage in excess of that which would reduce the summoner to fewer than 0 hit points is instead transferred to the eidolon. This damage is transferred 1 point at a time, meaning that as soon as the eidolon is reduced to a number of hit points equal to or below 0, all excess damage remains with the summoner.",
      },
      {
        name: 'Summon Monster VIII',
        level: 15,
        description:
          "At 15th level, the summoner's summon monster spell-like ability upgrades to summon monster VIII.",
      },
      {
        name: 'Merge Forms',
        level: 16,
        description:
          "At 16th level, as a full-round action, a summoner can merge his physical body with that of his eidolon. This transformation includes all of the summoner's gear. While merged in this way, the summoner is protected from harm and cannot be the target of spells or effects. All effects and spells currently targeting the summoner are suspended until the summoner emerges from the eidolon (although durations continue to expire). The summoner can cast spells while inside the eidolon by taking control of the eidolon for the duration of the casting. The summoner can use this ability for a number of rounds per day equal to his summoner level. He can end this effect as a swift action.",
      },
      {
        name: 'Summon Monster IX',
        level: 17,
        description:
          "At 17th level, the summoner's summon monster spell-like ability upgrades to summon monster IX.",
      },
      {
        name: 'Greater Aspect',
        level: 18,
        description:
          "At 18th level, a summoner can divert more of his eidolon's evolutions to himself. This ability functions as the aspect ability, but up to 6 evolution points can be taken. Unlike the aspect ability, the eidolon loses 1 evolution point for every 2 evolution points (or fraction thereof) parsing diverted to the summoner.",
      },
      {
        name: 'Gate',
        level: 19,
        description:
          'At 19th level, the summoner can cast gate as a spell-like ability once per day using his summoner level as the caster level. He must pay any required material components. He can only use this ability to call creatures and cannot use it to travel to other planes.',
      },
      {
        name: 'Twin Eidolon',
        level: 20,
        description:
          "At 20th level, a summoner and his eidolon share a true connection. As a standard action, the summoner can assume the shape of his eidolon, copying all of its evolutions, form, and abilities. His Strength, Dexterity, and Constitution scores change to match the base scores of his eidolon. He can choose to have any gear that he carries become absorbed by his new form, as with wildshape. Items with continuous effects continue to function while absorbed in this way. The summoner loses his natural attacks and all racial traits (except bonus feats, skills, and languages) in favor of the abilities granted by his eidolon's evolutions. The summoner retains all of his class features. The summoner can keep this form for a number of minutes per day equal to his summoner level. This duration does not need to be consecutive, but it must be spent in 1-minute increments.",
      },
    ],
    spellcasting: {
      type: 'Arcane',
      casting: 'Spontaneous',
      spellList: 'Summoner (Unchained)',
      spellTableKey: 'SIX_LEVEL_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'SIX_LEVEL_SPONTANEOUS_KNOWN',
    },
    source: 'Pathfinder Unchained',
  },
];
