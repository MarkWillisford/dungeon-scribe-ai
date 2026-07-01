// Base Classes — 12 classes from Advanced Player's Guide, Ultimate Magic, Ultimate Combat, etc.
// Source: https://www.d20pfsrd.com/classes/base-classes/

import { BABProgression, SaveProgression } from '@/types/base';
import { ExpandedClassData } from './types';

export const BASE_CLASSES_EXPANDED: ExpandedClassData[] = [
  {
    name: 'Alchemist',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Appraise',
      'Craft',
      'Disable Device',
      'Fly',
      'Heal',
      'Knowledge (arcana)',
      'Knowledge (nature)',
      'Perception',
      'Profession',
      'Sleight of Hand',
      'Spellcraft',
      'Survival',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Bombs'],
    armorProficiencies: ['Light armor'],
    startingWealth: '3d6 × 10 gp',
    classFeatures: [
      {
        name: 'Alchemy',
        level: 1,
        description:
          'An alchemist prepares his formulae by mixing ingredients into a number of extracts, and then "casts" his extracts by drinking them. An alchemist can utilize spell-trigger items if the spell appears on his formulae list.',
        effects: [],
      },
      {
        name: 'Bomb 1d6',
        level: 1,
        description:
          'An alchemist can use a number of bombs each day equal to his class level + his Intelligence modifier. Bombs deal 1d6 fire damage + Intelligence modifier on a direct hit, plus splash damage equal to the minimum damage. Drawing, creating, and throwing a bomb requires a standard action.',
        effects: [],
      },
      {
        name: 'Brew Potion',
        level: 1,
        description:
          'At 1st level, alchemists receive Brew Potion as a bonus feat. An alchemist can brew potions of any formulae he knows (up to 3rd level).',
        effects: [],
      },
      {
        name: 'Mutagen',
        level: 1,
        description:
          'At 1st level, an alchemist discovers how to create a mutagen. It takes 1 hour to brew. When consumed, the mutagen grants a +4 alchemical bonus to one physical ability score and a +2 natural armor bonus, but takes a -2 penalty to the corresponding mental ability score. The effect lasts 10 minutes per alchemist level.',
        effects: [],
      },
      {
        name: 'Throw Anything',
        level: 1,
        description:
          'All alchemists gain the Throw Anything feat as a bonus feat at 1st level. An alchemist adds his Intelligence modifier to damage done with splash weapons.',
        effects: [],
      },
      {
        name: 'Discovery',
        level: 2,
        description:
          'At 2nd level, and then again every 2 levels thereafter, an alchemist makes an incredible alchemical discovery.',
        effects: [],
      },
      {
        name: 'Poison Resistance +2',
        level: 2,
        description:
          'At 2nd level, an alchemist gains a +2 bonus on all saving throws against poison. This increases to +4 at 5th level, +6 at 8th level, and immunity at 10th level.',
        effects: [],
      },
      {
        name: 'Poison Use',
        level: 2,
        description:
          'Alchemists are trained in the use of poison and cannot accidentally poison themselves when applying poison to a weapon.',
        effects: [],
      },
      { name: 'Bomb 2d6', level: 3, description: 'Bomb damage increases to 2d6.', effects: [] },
      {
        name: 'Swift Alchemy',
        level: 3,
        description:
          'At 3rd level, an alchemist can create alchemical items in half the normal time, and can apply poison to a weapon as a move action.',
        effects: [],
      },
      {
        name: 'Discovery',
        level: 4,
        description: 'The alchemist gains an additional discovery.',
        effects: [],
      },
      { name: 'Bomb 3d6', level: 5, description: 'Bomb damage increases to 3d6.', effects: [] },
      {
        name: 'Poison Resistance +4',
        level: 5,
        description: 'Poison resistance increases to +4.',
        effects: [],
      },
      {
        name: 'Discovery',
        level: 6,
        description: 'The alchemist gains an additional discovery.',
        effects: [],
      },
      {
        name: 'Swift Poisoning',
        level: 6,
        description: 'At 6th level, an alchemist can apply poison to a weapon as a swift action.',
        effects: [],
      },
      { name: 'Bomb 4d6', level: 7, description: 'Bomb damage increases to 4d6.', effects: [] },
      {
        name: 'Discovery',
        level: 8,
        description: 'The alchemist gains an additional discovery.',
        effects: [],
      },
      {
        name: 'Poison Resistance +6',
        level: 8,
        description: 'Poison resistance increases to +6.',
        effects: [],
      },
      { name: 'Bomb 5d6', level: 9, description: 'Bomb damage increases to 5d6.', effects: [] },
      {
        name: 'Discovery',
        level: 10,
        description: 'The alchemist gains an additional discovery.',
        effects: [],
      },
      {
        name: 'Poison Immunity',
        level: 10,
        description: 'At 10th level, an alchemist becomes completely immune to poison.',
        effects: [],
      },
      { name: 'Bomb 6d6', level: 11, description: 'Bomb damage increases to 6d6.', effects: [] },
      {
        name: 'Discovery',
        level: 12,
        description: 'The alchemist gains an additional discovery.',
        effects: [],
      },
      { name: 'Bomb 7d6', level: 13, description: 'Bomb damage increases to 7d6.', effects: [] },
      {
        name: 'Discovery',
        level: 14,
        description: 'The alchemist gains an additional discovery.',
        effects: [],
      },
      {
        name: 'Persistent Mutagen',
        level: 14,
        description:
          'At 14th level, the effects of a mutagen last for 1 hour per level instead of 10 minutes per level.',
        effects: [],
      },
      { name: 'Bomb 8d6', level: 15, description: 'Bomb damage increases to 8d6.', effects: [] },
      {
        name: 'Discovery',
        level: 16,
        description: 'The alchemist gains an additional discovery.',
        effects: [],
      },
      { name: 'Bomb 9d6', level: 17, description: 'Bomb damage increases to 9d6.', effects: [] },
      {
        name: 'Discovery',
        level: 18,
        description: 'The alchemist gains an additional discovery.',
        effects: [],
      },
      {
        name: 'Instant Alchemy',
        level: 18,
        description:
          'At 18th level, an alchemist can create any alchemical item as a full-round action and can apply poison to a weapon as an immediate action.',
        effects: [],
      },
      { name: 'Bomb 10d6', level: 19, description: 'Bomb damage increases to 10d6.', effects: [] },
      {
        name: 'Grand Discovery',
        level: 20,
        description:
          'At 20th level, the alchemist makes a grand discovery. He immediately learns two normal discoveries, but also learns a third discovery chosen from a special list representing a truly astounding alchemical breakthrough.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Alchemical',
      casting: 'Prepared',
      spellList: 'Alchemist',
      spellTableKey: 'SIX_LEVEL_PREPARED_PER_DAY',
    },
    source: "Advanced Player's Guide",
  },
  {
    name: 'Cavalier',
    category: 'Base',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Handle Animal',
      'Intimidate',
      'Profession',
      'Ride',
      'Sense Motive',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: [
      'Light armor',
      'Medium armor',
      'Heavy armor',
      'Shields (except tower shields)',
    ],
    startingWealth: '5d6 × 10 gp',
    classFeatures: [
      {
        name: 'Challenge 1/day',
        level: 1,
        description:
          "Once per day, a cavalier can challenge a foe to combat. As a swift action, the cavalier chooses one target within sight. The cavalier's melee attacks deal extra damage equal to the cavalier's level whenever made against the target of his challenge.",
        effects: [],
      },
      {
        name: 'Mount',
        level: 1,
        description:
          "A cavalier gains the service of a loyal and trusty steed. This mount functions as a druid's animal companion, using the cavalier's level as his effective druid level.",
        effects: [],
      },
      {
        name: 'Order',
        level: 1,
        description:
          'At 1st level, a cavalier must pledge himself to a specific order. The order grants bonuses, class skills, and special abilities, and includes edicts that the cavalier must follow.',
        effects: [],
      },
      {
        name: 'Tactician',
        level: 1,
        description:
          'At 1st level, a cavalier receives a teamwork feat as a bonus feat. As a standard action, the cavalier can grant this feat to all allies within 30 feet who can see and hear him for 3 rounds plus 1 round per two levels.',
        effects: [],
      },
      {
        name: 'Order Ability',
        level: 2,
        description: 'The cavalier gains an ability from his order.',
        effects: [],
      },
      {
        name: "Cavalier's Charge",
        level: 3,
        description:
          'At 3rd level, a cavalier receives a +4 bonus on melee attack rolls on a charge while mounted (instead of +2). He does not suffer any penalty to AC after making a charge attack while mounted.',
        effects: [],
      },
      {
        name: 'Challenge 2/day',
        level: 4,
        description: 'Challenge usage increases to 2/day.',
        effects: [],
      },
      {
        name: 'Expert Trainer',
        level: 4,
        description:
          'At 4th level, a cavalier receives a bonus equal to 1/2 his level whenever he uses Handle Animal on a mount. He can reduce the time to teach a mount a new trick to 1 day per 1 week normally required.',
        effects: [],
      },
      {
        name: 'Banner',
        level: 5,
        description:
          "At 5th level, a cavalier's banner grants all allies within 60 feet a +2 morale bonus on saving throws against fear and a +1 morale bonus on attack rolls made as part of a charge.",
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 6,
        description:
          'At 6th level, and every six levels thereafter, a cavalier gains a bonus combat feat.',
        effects: [],
      },
      {
        name: 'Challenge 3/day',
        level: 7,
        description: 'Challenge usage increases to 3/day.',
        effects: [],
      },
      {
        name: 'Order Ability',
        level: 8,
        description: 'The cavalier gains an additional ability from his order.',
        effects: [],
      },
      {
        name: 'Greater Tactician',
        level: 9,
        description:
          'At 9th level, the cavalier receives an additional teamwork feat and can grant feats using tactician as a swift action.',
        effects: [],
      },
      {
        name: 'Challenge 4/day',
        level: 10,
        description: 'Challenge usage increases to 4/day.',
        effects: [],
      },
      {
        name: 'Mighty Charge',
        level: 11,
        description:
          'At 11th level, a cavalier doubles the threat range of weapons wielded during a charge while mounted. He can make a free bull rush, disarm, sunder, or trip if his charge attack succeeds.',
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 12,
        description: 'The cavalier gains a bonus combat feat.',
        effects: [],
      },
      {
        name: 'Demanding Challenge',
        level: 12,
        description:
          'At 12th level, whenever a cavalier declares a challenge, his target takes a -2 penalty to AC from attacks made by anyone other than the cavalier.',
        effects: [],
      },
      {
        name: 'Challenge 5/day',
        level: 13,
        description: 'Challenge usage increases to 5/day.',
        effects: [],
      },
      {
        name: 'Greater Banner',
        level: 14,
        description:
          "At 14th level, a cavalier's banner grants all allies within 60 feet a +2 morale bonus on saves against charm and compulsion effects. The cavalier can wave the banner to grant allies an additional saving throw against one spell or effect targeting them.",
        effects: [],
      },
      {
        name: 'Order Ability',
        level: 15,
        description: 'The cavalier gains the final ability from his order.',
        effects: [],
      },
      {
        name: 'Challenge 6/day',
        level: 16,
        description: 'Challenge usage increases to 6/day.',
        effects: [],
      },
      {
        name: 'Master Tactician',
        level: 17,
        description:
          'At 17th level, the cavalier receives an additional teamwork feat. Whenever he uses tactician, he grants any two teamwork feats that he knows.',
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 18,
        description: 'The cavalier gains a bonus combat feat.',
        effects: [],
      },
      {
        name: 'Challenge 7/day',
        level: 19,
        description: 'Challenge usage increases to 7/day.',
        effects: [],
      },
      {
        name: 'Supreme Charge',
        level: 20,
        description:
          'At 20th level, whenever the cavalier makes a charge attack while mounted, he deals double damage (or triple with a lance). If he confirms a critical hit on a charge while mounted, the target is stunned for 1d4 rounds.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: "Advanced Player's Guide",
  },
  {
    name: 'Gunslinger',
    category: 'Base',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Climb',
      'Craft',
      'Handle Animal',
      'Heal',
      'Intimidate',
      'Knowledge (engineering)',
      'Knowledge (local)',
      'Perception',
      'Profession',
      'Ride',
      'Sleight of Hand',
      'Survival',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons', 'Firearms'],
    armorProficiencies: ['Light armor'],
    startingWealth: '5d6 × 10 gp',
    classFeatures: [
      {
        name: 'Gunsmith',
        level: 1,
        description:
          'At 1st level, a gunslinger gains one of the following firearms of her choice: blunderbuss, musket, or pistol. Her starting weapon is battered. She also gains Gunsmithing as a bonus feat.',
        effects: [],
      },
      {
        name: 'Grit',
        level: 1,
        description:
          'A gunslinger gains a number of grit points equal to her Wisdom modifier (minimum 1) at the start of each day. She regains grit by confirming critical hits with firearms or making killing blows with firearms.',
        effects: [],
      },
      {
        name: 'Deeds (Deadeye, Dodge, Quick Clear)',
        level: 1,
        description:
          "At 1st level, a gunslinger gains: Deadeye (resolve ranged attack against touch AC beyond first range increment), Gunslinger's Dodge (move 5 feet or drop prone for +2 AC against ranged), and Quick Clear (standard action to clear a misfire).",
        effects: [],
      },
      {
        name: 'Nimble +1',
        level: 2,
        description:
          'Starting at 2nd level, a gunslinger gains a +1 dodge bonus to AC while wearing light or no armor. This increases by +1 for every 4 levels beyond 2nd.',
        effects: [],
      },
      {
        name: 'Deeds (Initiative, Pistol-Whip, Utility Shot)',
        level: 3,
        description:
          'The gunslinger gains: Gunslinger Initiative (+2 initiative with grit), Pistol-Whip (melee attack with firearm), and Utility Shot (shoot objects for utility effects).',
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 4,
        description:
          'At 4th level, and every 4 levels thereafter, a gunslinger gains a bonus combat or grit feat.',
        effects: [],
      },
      {
        name: 'Gun Training 1',
        level: 5,
        description:
          'Starting at 5th level, a gunslinger selects one firearm type. She adds her Dexterity modifier to damage rolls and reduces misfire value increases by 2 with that type.',
        effects: [],
      },
      { name: 'Nimble +2', level: 6, description: 'Nimble bonus increases to +2.', effects: [] },
      {
        name: 'Deeds (Dead Shot, Startling Shot, Targeting)',
        level: 7,
        description:
          'The gunslinger gains: Dead Shot (combine attacks into one), Startling Shot (target must save or be flat-footed), and Targeting (target body parts for effects).',
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 8,
        description: 'The gunslinger gains a bonus feat.',
        effects: [],
      },
      {
        name: 'Gun Training 2',
        level: 9,
        description: 'The gunslinger selects a second firearm type for gun training.',
        effects: [],
      },
      { name: 'Nimble +3', level: 10, description: 'Nimble bonus increases to +3.', effects: [] },
      {
        name: 'Deeds (Bleeding Wound, Expert Loading, Lightning Reload)',
        level: 11,
        description:
          'The gunslinger gains: Bleeding Wound (spend grit for bleed damage), Expert Loading (reduce reload time), and Lightning Reload (reload one-handed as free action).',
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 12,
        description: 'The gunslinger gains a bonus feat.',
        effects: [],
      },
      {
        name: 'Gun Training 3',
        level: 13,
        description: 'The gunslinger selects a third firearm type for gun training.',
        effects: [],
      },
      { name: 'Nimble +4', level: 14, description: 'Nimble bonus increases to +4.', effects: [] },
      {
        name: "Deeds (Evasive, Menacing Shot, Slinger's Luck)",
        level: 15,
        description:
          "The gunslinger gains: Evasive (gain evasion or improved evasion), Menacing Shot (demoralize on hit as free action), and Slinger's Luck (spend grit to reroll a saving throw).",
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 16,
        description: 'The gunslinger gains a bonus feat.',
        effects: [],
      },
      {
        name: 'Gun Training 4',
        level: 17,
        description: 'The gunslinger selects a fourth firearm type for gun training.',
        effects: [],
      },
      { name: 'Nimble +5', level: 18, description: 'Nimble bonus increases to +5.', effects: [] },
      {
        name: "Deeds (Cheat Death, Death's Shot, Stunning Shot)",
        level: 19,
        description:
          "The gunslinger gains: Cheat Death (spend grit to stabilize at negative HP), Death's Shot (single devastating shot), and Stunning Shot (spend grit to stun on hit).",
        effects: [],
      },
      {
        name: 'True Grit',
        level: 20,
        description:
          'At 20th level, a gunslinger picks two deeds that she has access to and that cost grit. She can perform these deeds for 1 grit point fewer (minimum 0).',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Ultimate Combat',
  },
  {
    name: 'Inquisitor',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 6,
    classSkills: [
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Disguise',
      'Heal',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (dungeoneering)',
      'Knowledge (nature)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Perception',
      'Profession',
      'Ride',
      'Sense Motive',
      'Spellcraft',
      'Stealth',
      'Survival',
      'Swim',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [
      'Simple weapons',
      'Hand crossbow',
      'Longbow',
      'Repeating crossbow',
      'Shortbow',
      "Deity's favored weapon",
    ],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (except tower shields)'],
    startingWealth: '4d6 × 10 gp',
    alignment: "Within one step of deity's alignment",
    classFeatures: [
      {
        name: 'Domain/Inquisition',
        level: 1,
        description:
          'Like a cleric, an inquisitor selects one domain from among those belonging to her deity. Alternatively, she can choose an inquisition instead of a domain.',
        effects: [],
      },
      {
        name: 'Judgment 1/day',
        level: 1,
        id: 'judgment',
        shortDescription: 'Swift action — choose one of 9 judgment types (lasts until combat ends)',
        activationMode: 'toggle',
        description:
          'Starting at 1st level, an inquisitor can pronounce judgment upon her foes as a swift action. Once activated, it lasts until combat ends. There are nine types: Destruction, Healing, Justice, Piercing, Protection, Purity, Resiliency, Resistance, and Smiting.',
        resourcePool: {
          id: 'judgment',
          name: 'Judgment',
          rechargeOn: 'rest',
          maxFormula: 'floor((inquisitorLevel + 2) / 3)',
          restRecoveryMode: 'full',
        },
        effects: [],
      },
      {
        name: 'Monster Lore',
        level: 1,
        description:
          'The inquisitor adds her Wisdom modifier on Knowledge skill checks in addition to her Intelligence modifier when identifying creature abilities and weaknesses.',
        effects: [],
      },
      {
        name: 'Orisons',
        level: 1,
        description:
          'Inquisitors learn a number of orisons, or 0-level spells. These spells are not expended when cast and may be used again.',
        effects: [],
      },
      {
        name: 'Stern Gaze',
        level: 1,
        description:
          'An inquisitor receives a morale bonus on all Intimidate and Sense Motive checks equal to 1/2 her inquisitor level (minimum +1).',
        effects: [],
      },
      {
        name: 'Cunning Initiative',
        level: 2,
        description:
          'At 2nd level, an inquisitor adds her Wisdom modifier on initiative checks, in addition to her Dexterity modifier.',
        effects: [],
      },
      {
        name: 'Detect Alignment',
        level: 2,
        description:
          'At will, an inquisitor can use detect chaos, detect evil, detect good, or detect law. She can only use one at a time.',
        effects: [],
      },
      {
        name: 'Track',
        level: 2,
        description:
          'At 2nd level, an inquisitor adds half her level on Survival skill checks made to follow or identify tracks.',
        effects: [],
      },
      {
        name: 'Solo Tactics',
        level: 3,
        description:
          "All of the inquisitor's allies are treated as if they possessed the same teamwork feats as the inquisitor for the purpose of determining whether the inquisitor receives a bonus from her teamwork feats.",
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 3,
        description:
          'At 3rd level, and every three levels thereafter, the inquisitor gains a bonus teamwork feat. She can change her most recent teamwork feat as a standard action.',
        effects: [],
      },
      {
        name: 'Judgment 2/day',
        level: 4,
        description: 'Judgment usage increases to 2/day.',
        effects: [],
      },
      {
        name: 'Bane',
        level: 5,
        id: 'bane',
        shortDescription:
          'Swift action — imbue weapon with bane vs. chosen creature type (inquisitor level rounds/day)',
        activationMode: 'toggle',
        description:
          "At 5th level, an inquisitor can imbue one of her weapons with the bane weapon special ability as a swift action. This can be used for a number of rounds per day equal to the inquisitor's level.",
        resourcePool: {
          id: 'bane_rounds',
          name: 'Bane',
          rechargeOn: 'rest',
          maxFormula: 'inquisitorLevel',
          restRecoveryMode: 'full',
        },
        effects: [],
      },
      {
        name: 'Discern Lies',
        level: 5,
        description:
          'At 5th level, an inquisitor can discern lies for a number of rounds per day equal to her inquisitor level.',
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 6,
        description: 'The inquisitor gains an additional teamwork feat.',
        effects: [],
      },
      {
        name: 'Judgment 3/day',
        level: 7,
        description: 'Judgment usage increases to 3/day.',
        effects: [],
      },
      {
        name: 'Second Judgment',
        level: 8,
        description:
          'At 8th level, whenever an inquisitor uses her judgment ability, she selects two different judgments instead of one.',
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 9,
        description: 'The inquisitor gains an additional teamwork feat.',
        effects: [],
      },
      {
        name: 'Judgment 4/day',
        level: 10,
        description: 'Judgment usage increases to 4/day.',
        effects: [],
      },
      {
        name: 'Stalwart',
        level: 11,
        description:
          'At 11th level, if an inquisitor makes a Fortitude or Will save against an attack that has a reduced effect on a successful save, she instead avoids the effect entirely.',
        effects: [],
      },
      {
        name: 'Greater Bane',
        level: 12,
        description:
          'At 12th level, whenever the inquisitor uses bane, the bonus damage increases to 4d6.',
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 12,
        description: 'The inquisitor gains an additional teamwork feat.',
        effects: [],
      },
      {
        name: 'Judgment 5/day',
        level: 13,
        description: 'Judgment usage increases to 5/day.',
        effects: [],
      },
      {
        name: 'Exploit Weakness',
        level: 14,
        description:
          'At 14th level, whenever the inquisitor scores a critical hit, she ignores any damage reduction the target might have. If the target has regeneration, it loses regeneration on the round following the critical hit.',
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 15,
        description: 'The inquisitor gains an additional teamwork feat.',
        effects: [],
      },
      {
        name: 'Judgment 6/day',
        level: 16,
        description: 'Judgment usage increases to 6/day.',
        effects: [],
      },
      {
        name: 'Third Judgment',
        level: 16,
        description:
          'At 16th level, whenever an inquisitor uses her judgment ability, she selects three different judgments instead of two.',
        effects: [],
      },
      {
        name: 'Slayer',
        level: 17,
        description:
          'At 17th level, the inquisitor selects one judgment type. She is treated as 5 levels higher for that judgment. This judgment cannot be changed for the remainder of the combat.',
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 18,
        description: 'The inquisitor gains an additional teamwork feat.',
        effects: [],
      },
      {
        name: 'Judgment 7/day',
        level: 19,
        description: 'Judgment usage increases to 7/day.',
        effects: [],
      },
      {
        name: 'True Judgment',
        level: 20,
        description:
          "At 20th level, the inquisitor can invoke true judgment as a swift action. She makes a single melee or ranged attack. If the attack hits, the target must make a Fortitude save (DC 10 + 1/2 the inquisitor's level + Wisdom modifier) or die.",
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Spontaneous',
      spellList: 'Inquisitor',
      spellTableKey: 'SIX_LEVEL_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'SIX_LEVEL_SPONTANEOUS_KNOWN',
    },
    source: "Advanced Player's Guide",
  },
  {
    name: 'Magus',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 2,
    classSkills: [
      'Climb',
      'Craft',
      'Fly',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (dungeoneering)',
      'Knowledge (planes)',
      'Profession',
      'Ride',
      'Spellcraft',
      'Swim',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor'],
    startingWealth: '4d6 × 10 gp',
    classFeatures: [
      {
        name: 'Arcane Pool',
        level: 1,
        description:
          'The magus gains a reservoir of arcane energy with points equal to 1/2 his magus level (minimum 1) + his Intelligence modifier. As a swift action, he can expend 1 point to grant a held weapon a +1 enhancement bonus for 1 minute. This increases by +1 for every four levels beyond 1st, to a maximum of +5 at 17th level.',
        effects: [],
      },
      {
        name: 'Cantrips',
        level: 1,
        description:
          'A magus can prepare cantrips each day. These spells are not expended when cast and may be used again.',
        effects: [],
      },
      {
        name: 'Spell Combat',
        level: 1,
        description:
          'As a full-round action, the magus can make all of his attacks with his melee weapon at a –2 penalty and also cast any spell from the magus spell list with a casting time of 1 standard action.',
        effects: [],
      },
      {
        name: 'Spellstrike',
        level: 2,
        description:
          "Whenever a magus casts a spell with a range of 'touch' from the magus spell list, he can deliver the spell through any weapon he is wielding as part of a melee attack.",
        effects: [],
      },
      {
        name: 'Magus Arcana',
        level: 3,
        description:
          'At 3rd level, a magus gains one magus arcana. He gains an additional magus arcana for every three levels attained after 3rd level.',
        effects: [],
      },
      {
        name: 'Spell Recall',
        level: 4,
        description:
          "With a swift action, the magus can recall any single magus spell he has already prepared and cast that day by expending points from his arcane pool equal to the spell's level.",
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 5,
        description:
          'At 5th level, and every six levels thereafter, a magus gains a bonus combat, item creation, or metamagic feat.',
        effects: [],
      },
      {
        name: 'Magus Arcana',
        level: 6,
        description: 'The magus gains an additional arcana.',
        effects: [],
      },
      {
        name: 'Knowledge Pool',
        level: 7,
        description:
          'When preparing spells, the magus can expend points from his arcane pool (up to Intelligence bonus) to treat one magus spell per point as if it were in his spellbook.',
        effects: [],
      },
      {
        name: 'Medium Armor',
        level: 7,
        description:
          'At 7th level, a magus gains proficiency with medium armor and can cast magus spells in medium armor without arcane spell failure.',
        effects: [],
      },
      {
        name: 'Improved Spell Combat',
        level: 8,
        description:
          'The magus receives a +2 circumstance bonus on concentration checks when using spell combat.',
        effects: [],
      },
      {
        name: 'Magus Arcana',
        level: 9,
        description: 'The magus gains an additional arcana.',
        effects: [],
      },
      {
        name: 'Fighter Training',
        level: 10,
        description:
          'Starting at 10th level, a magus counts 1/2 his total magus level as his fighter level for the purpose of qualifying for feats.',
        effects: [],
      },
      { name: 'Bonus Feat', level: 11, description: 'The magus gains a bonus feat.', effects: [] },
      {
        name: 'Improved Spell Recall',
        level: 11,
        description:
          "The magus can now expend 1/2 the spell's level (minimum 1) from his arcane pool to recall a spell, or prepare a different spell of the same level in an empty slot.",
        effects: [],
      },
      {
        name: 'Magus Arcana',
        level: 12,
        description: 'The magus gains an additional arcana.',
        effects: [],
      },
      {
        name: 'Heavy Armor',
        level: 13,
        description:
          'At 13th level, a magus gains proficiency with heavy armor and can cast magus spells in heavy armor without arcane spell failure.',
        effects: [],
      },
      {
        name: 'Greater Spell Combat',
        level: 14,
        description:
          'The concentration check bonus equals double the amount of the attack penalty taken when using spell combat.',
        effects: [],
      },
      {
        name: 'Magus Arcana',
        level: 15,
        description: 'The magus gains an additional arcana.',
        effects: [],
      },
      {
        name: 'Counterstrike',
        level: 16,
        description:
          'At 16th level, whenever an enemy within reach successfully casts a spell defensively, that enemy provokes an attack of opportunity from the magus.',
        effects: [],
      },
      { name: 'Bonus Feat', level: 17, description: 'The magus gains a bonus feat.', effects: [] },
      {
        name: 'Magus Arcana',
        level: 18,
        description: 'The magus gains an additional arcana.',
        effects: [],
      },
      {
        name: 'Greater Spell Access',
        level: 19,
        description:
          'The magus learns 14 wizard spells not on the magus list (two each of levels 0-6), placing them in his spellbook as magus spells.',
        effects: [],
      },
      {
        name: 'True Magus',
        level: 20,
        description:
          'The magus no longer needs concentration checks for defensive casting in spell combat. When his spell targets the same creature as his melee attacks, he can increase the spell DC by +2, gain +2 to overcome spell resistance, or gain +2 on attack rolls.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Arcane',
      casting: 'Prepared',
      spellList: 'Magus',
      spellTableKey: 'MAGUS_PREPARED_PER_DAY',
    },
    source: 'Ultimate Magic',
  },
  {
    name: 'Oracle',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Craft',
      'Diplomacy',
      'Heal',
      'Knowledge (history)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Profession',
      'Sense Motive',
      'Spellcraft',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (except tower shields)'],
    startingWealth: '3d6 × 10 gp',
    classFeatures: [
      {
        name: 'Mystery',
        level: 1,
        description:
          'Each oracle draws upon a divine mystery to grant her spells and powers. This mystery also grants additional class skills and other special abilities.',
        effects: [],
      },
      {
        name: "Oracle's Curse",
        level: 1,
        description:
          'Each oracle is cursed, but this curse comes with a benefit as well as a hindrance. This choice is made at 1st level, is permanent, and cannot be removed.',
        effects: [],
      },
      {
        name: 'Orisons',
        level: 1,
        description:
          'Oracles learn a number of orisons, or 0-level spells. These spells are not expended when cast and may be used again.',
        effects: [],
      },
      {
        name: 'Revelation',
        level: 1,
        description:
          'At 1st level, 3rd level, and every four levels thereafter (7th, 11th, 15th, and 19th), an oracle uncovers a new secret about her mystery that grants her powers and abilities.',
        effects: [],
      },
      {
        name: 'Mystery Spell',
        level: 2,
        description:
          'At 2nd level, and every two levels thereafter, an oracle learns an additional spell derived from her mystery.',
        effects: [],
      },
      {
        name: 'Revelation',
        level: 3,
        description: 'The oracle gains an additional revelation from her mystery.',
        effects: [],
      },
      {
        name: 'Mystery Spell',
        level: 4,
        description: 'The oracle learns an additional mystery spell.',
        effects: [],
      },
      {
        name: 'Mystery Spell',
        level: 6,
        description: 'The oracle learns an additional mystery spell.',
        effects: [],
      },
      {
        name: 'Revelation',
        level: 7,
        description: 'The oracle gains an additional revelation.',
        effects: [],
      },
      {
        name: 'Mystery Spell',
        level: 8,
        description: 'The oracle learns an additional mystery spell.',
        effects: [],
      },
      {
        name: 'Mystery Spell',
        level: 10,
        description: 'The oracle learns an additional mystery spell.',
        effects: [],
      },
      {
        name: 'Revelation',
        level: 11,
        description: 'The oracle gains an additional revelation.',
        effects: [],
      },
      {
        name: 'Mystery Spell',
        level: 12,
        description: 'The oracle learns an additional mystery spell.',
        effects: [],
      },
      {
        name: 'Mystery Spell',
        level: 14,
        description: 'The oracle learns an additional mystery spell.',
        effects: [],
      },
      {
        name: 'Revelation',
        level: 15,
        description: 'The oracle gains an additional revelation.',
        effects: [],
      },
      {
        name: 'Mystery Spell',
        level: 16,
        description: 'The oracle learns an additional mystery spell.',
        effects: [],
      },
      {
        name: 'Mystery Spell',
        level: 18,
        description: 'The oracle learns an additional mystery spell.',
        effects: [],
      },
      {
        name: 'Revelation',
        level: 19,
        description: 'The oracle gains an additional revelation.',
        effects: [],
      },
      {
        name: 'Final Revelation',
        level: 20,
        description:
          'At 20th level, an oracle learns the final revelation about her mystery, granting her amazing powers and abilities. The nature of these bonuses depends upon the mystery.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Spontaneous',
      spellList: 'Cleric',
      spellTableKey: 'FULL_9_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'FULL_9_SPONTANEOUS_KNOWN',
    },
    source: "Advanced Player's Guide",
  },
  {
    name: 'Summoner',
    category: 'Base',
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
    startingWealth: '2d6 × 10 gp',
    classFeatures: [
      {
        name: 'Cantrips',
        level: 1,
        description:
          'A summoner learns cantrips that are not expended when cast and may be used again.',
        effects: [],
      },
      {
        name: 'Eidolon',
        level: 1,
        description:
          'A summoner begins play with the ability to summon a powerful outsider called an eidolon. The eidolon forms a link with the summoner. It takes 1 minute to summon and persists until dismissed or killed. It receives evolution points based on summoner level.',
        effects: [],
      },
      {
        name: 'Life Link',
        level: 1,
        description:
          'Whenever the eidolon takes enough damage to be sent back to its home plane, the summoner can sacrifice hit points to prevent this. The eidolon must stay within 100 feet for full strength; beyond that, its HP is reduced.',
        effects: [],
      },
      {
        name: 'Summon Monster I',
        level: 1,
        description:
          'A summoner can cast summon monster I as a spell-like ability a number of times per day equal to 3 + his Charisma modifier, but only when his eidolon is not summoned.',
        effects: [],
      },
      {
        name: 'Bond Senses',
        level: 2,
        description:
          'As a standard action, a summoner can share the senses of his eidolon for a number of rounds per day equal to his summoner level.',
        effects: [],
      },
      {
        name: 'Summon Monster II',
        level: 3,
        description: 'Summon monster ability upgrades to II.',
        effects: [],
      },
      {
        name: 'Shield Ally',
        level: 4,
        description:
          "Whenever a summoner is within his eidolon's reach, he receives a +2 shield bonus to AC and a +2 circumstance bonus on saving throws.",
        effects: [],
      },
      {
        name: 'Summon Monster III',
        level: 5,
        description: 'Summon monster ability upgrades to III.',
        effects: [],
      },
      {
        name: "Maker's Call",
        level: 6,
        description:
          "A summoner can call his eidolon to his side, functioning as dimension door using the summoner's caster level. Usable once per day plus once more per four levels beyond 6th.",
        effects: [],
      },
      {
        name: 'Summon Monster IV',
        level: 7,
        description: 'Summon monster ability upgrades to IV.',
        effects: [],
      },
      {
        name: 'Transposition',
        level: 8,
        description:
          "A summoner can use his maker's call ability to swap locations with his eidolon.",
        effects: [],
      },
      {
        name: 'Summon Monster V',
        level: 9,
        description: 'Summon monster ability upgrades to V.',
        effects: [],
      },
      {
        name: 'Aspect',
        level: 10,
        description:
          "A summoner can divert up to 2 points from his eidolon's evolution pool to add evolutions to himself.",
        effects: [],
      },
      {
        name: 'Summon Monster VI',
        level: 11,
        description: 'Summon monster ability upgrades to VI.',
        effects: [],
      },
      {
        name: 'Greater Shield Ally',
        level: 12,
        description:
          "Any ally within the eidolon's reach receives a +2 shield bonus to AC and +2 circumstance bonus on saves (+4 for the summoner).",
        effects: [],
      },
      {
        name: 'Summon Monster VII',
        level: 13,
        description: 'Summon monster ability upgrades to VII.',
        effects: [],
      },
      {
        name: 'Life Bond',
        level: 14,
        description:
          'As long as the eidolon has 1 or more hit points, excess damage that would reduce the summoner below 0 HP is transferred to the eidolon.',
        effects: [],
      },
      {
        name: 'Summon Monster VIII',
        level: 15,
        description: 'Summon monster ability upgrades to VIII.',
        effects: [],
      },
      {
        name: 'Merge Forms',
        level: 16,
        description:
          'As a full-round action, the summoner can merge with his eidolon. The summoner is protected from harm and can still cast spells while within the eidolon.',
        effects: [],
      },
      {
        name: 'Summon Monster IX',
        level: 17,
        description: 'Summon monster ability upgrades to IX.',
        effects: [],
      },
      {
        name: 'Greater Aspect',
        level: 18,
        description:
          "A summoner can divert up to 6 evolution points from his eidolon's pool to himself.",
        effects: [],
      },
      {
        name: 'Gate',
        level: 19,
        description:
          'The summoner can use his summon monster ability to cast gate as a spell-like ability.',
        effects: [],
      },
      {
        name: 'Twin Eidolon',
        level: 20,
        description:
          'The summoner can assume the shape of his eidolon, copying all of its evolutions, form, and abilities. Usable for a number of minutes per day equal to his summoner level.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Arcane',
      casting: 'Spontaneous',
      spellList: 'Summoner',
      spellTableKey: 'SIX_LEVEL_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'SIX_LEVEL_SPONTANEOUS_KNOWN',
    },
    source: "Advanced Player's Guide",
  },
  {
    name: 'Witch',
    category: 'Base',
    maxLevel: 20,
    hitDie: 6,
    skillRanksPerLevel: 2,
    classSkills: [
      'Craft',
      'Fly',
      'Heal',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (history)',
      'Knowledge (nature)',
      'Knowledge (planes)',
      'Profession',
      'Spellcraft',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Low,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons'],
    armorProficiencies: [],
    startingWealth: '3d6 × 10 gp',
    classFeatures: [
      {
        name: 'Cantrips',
        level: 1,
        description:
          'Witches can prepare cantrips each day. These spells are not expended when cast and may be used again.',
        effects: [],
      },
      {
        name: 'Hex',
        level: 1,
        description:
          'Witches learn a number of magic tricks, called hexes. At 1st level, a witch gains one hex. She gains an additional hex at 2nd level and every 2 levels thereafter. Using a hex is a standard action that does not provoke an attack of opportunity.',
        effects: [],
      },
      {
        name: 'Patron Spells',
        level: 1,
        description:
          "Each witch must choose a patron. This patron is a vague and mysterious force, granting the witch power. The patron adds new spells to the witch's spell list at specific levels.",
        effects: [],
      },
      {
        name: "Witch's Familiar",
        level: 1,
        description:
          'At 1st level, a witch forms a close bond with a familiar that stores all of the spells that a witch knows. A witch must commune with her familiar each day to prepare her spells.',
        effects: [],
      },
      { name: 'Hex', level: 2, description: 'The witch gains an additional hex.', effects: [] },
      { name: 'Hex', level: 4, description: 'The witch gains an additional hex.', effects: [] },
      { name: 'Hex', level: 6, description: 'The witch gains an additional hex.', effects: [] },
      { name: 'Hex', level: 8, description: 'The witch gains an additional hex.', effects: [] },
      { name: 'Hex', level: 10, description: 'The witch gains an additional hex.', effects: [] },
      {
        name: 'Major Hex',
        level: 10,
        description:
          'Starting at 10th level, a witch can choose a major hex whenever she could select a new hex.',
        effects: [],
      },
      { name: 'Hex', level: 12, description: 'The witch gains an additional hex.', effects: [] },
      { name: 'Hex', level: 14, description: 'The witch gains an additional hex.', effects: [] },
      { name: 'Hex', level: 16, description: 'The witch gains an additional hex.', effects: [] },
      { name: 'Hex', level: 18, description: 'The witch gains an additional hex.', effects: [] },
      {
        name: 'Grand Hex',
        level: 18,
        description:
          'Starting at 18th level, a witch can choose a grand hex whenever she could select a new hex.',
        effects: [],
      },
      { name: 'Hex', level: 20, description: 'The witch gains an additional hex.', effects: [] },
    ],
    spellcasting: {
      type: 'Arcane',
      casting: 'Prepared',
      spellList: 'Witch',
      spellTableKey: 'FULL_9_PREPARED_PER_DAY',
    },
    source: "Advanced Player's Guide",
  },
  {
    name: 'Shifter',
    category: 'Base',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Fly',
      'Handle Animal',
      'Knowledge (nature)',
      'Perception',
      'Profession',
      'Ride',
      'Stealth',
      'Survival',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [
      'Club',
      'Dagger',
      'Dart',
      'Quarterstaff',
      'Scimitar',
      'Scythe',
      'Sickle',
      'Shortspear',
      'Sling',
      'Spear',
    ],
    armorProficiencies: ['Light armor', 'Medium armor (non-metal only)', 'Wooden shields'],
    startingWealth: '3d6 × 10 gp',
    alignment: 'Any neutral',
    classFeatures: [
      {
        name: 'Shifter Aspect',
        level: 1,
        description:
          'At 1st level, a shifter gains her first aspect — a category of animal to which her body and soul have become attuned. She can assume her minor form for a number of minutes per day equal to 3 + her shifter level.',
        effects: [],
      },
      {
        name: 'Shifter Claws',
        level: 1,
        description:
          'At will, a shifter can extend magical claws dealing 1d4 damage (1d3 if Small).',
        effects: [],
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'A shifter can improve the initial attitude of an animal, functioning like a Diplomacy check.',
        effects: [],
      },
      {
        name: 'Defensive Instinct',
        level: 2,
        description:
          'When wearing no armor and not using a shield, the shifter adds her Wisdom bonus to AC and CMD.',
        effects: [],
      },
      {
        name: 'Track',
        level: 2,
        description:
          'A shifter adds half her level as a bonus on Survival checks made to follow or identify tracks.',
        effects: [],
      },
      {
        name: 'Shifter Claws (magic/cold iron/silver)',
        level: 3,
        description:
          "At 3rd level, the shifter's claws count as magic, cold iron, and silver for overcoming damage reduction.",
        effects: [],
      },
      {
        name: 'Woodland Stride',
        level: 3,
        description:
          'At 3rd level, a shifter can move through undergrowth at normal speed without damage.',
        effects: [],
      },
      {
        name: 'Defensive Instinct +1',
        level: 4,
        description: 'The defensive instinct bonus increases.',
        effects: [],
      },
      {
        name: 'Wild Shape',
        level: 4,
        description:
          'At 4th level, a shifter can turn into the major form of her chosen aspect, functioning as beast shape II.',
        effects: [],
      },
      {
        name: 'Second Aspect',
        level: 5,
        description: 'The shifter gains a second animal aspect.',
        effects: [],
      },
      {
        name: 'Trackless Step',
        level: 5,
        description: 'The shifter leaves no trail in natural surroundings.',
        effects: [],
      },
      {
        name: "Shifter's Fury",
        level: 6,
        description:
          'The shifter can make a full attack using one natural weapon, gaining a second iterative attack at –5.',
        effects: [],
      },
      {
        name: 'Shifter Claws 1d6',
        level: 7,
        description: 'Claw damage increases to 1d6 (1d4 if Small).',
        effects: [],
      },
      {
        name: 'Defensive Instinct +2',
        level: 8,
        description: 'The defensive instinct bonus increases.',
        effects: [],
      },
      {
        name: 'Chimeric Aspect',
        level: 9,
        description: 'The shifter can assume the minor forms of two aspects simultaneously.',
        effects: [],
      },
      {
        name: 'Third Aspect',
        level: 10,
        description: 'The shifter gains a third animal aspect.',
        effects: [],
      },
      {
        name: 'Shifter Claws 1d8',
        level: 11,
        description: 'Claw damage increases to 1d8 (1d6 if Small).',
        effects: [],
      },
      {
        name: "Shifter's Fury (third attack)",
        level: 11,
        description: 'Gains a third iterative natural attack at –10.',
        effects: [],
      },
      {
        name: 'Defensive Instinct +3',
        level: 12,
        description: 'The defensive instinct bonus increases.',
        effects: [],
      },
      {
        name: 'Shifter Claws 1d10',
        level: 13,
        description: 'Claw damage increases to 1d10 (1d8 if Small).',
        effects: [],
      },
      {
        name: 'Greater Chimeric Aspect',
        level: 14,
        description:
          'The shifter can assume the minor forms of up to three aspects simultaneously.',
        effects: [],
      },
      {
        name: 'Fourth Aspect',
        level: 15,
        description: 'The shifter gains a fourth animal aspect.',
        effects: [],
      },
      {
        name: 'Defensive Instinct +4',
        level: 16,
        description: 'The defensive instinct bonus increases.',
        effects: [],
      },
      {
        name: "Shifter's Fury (fourth attack)",
        level: 16,
        description: 'Gains a fourth iterative natural attack at –15.',
        effects: [],
      },
      {
        name: 'A Thousand Faces',
        level: 18,
        description:
          'The shifter can change her appearance at will, as if using alter self, but only in her normal form.',
        effects: [],
      },
      {
        name: 'Timeless Body',
        level: 18,
        description:
          'The shifter no longer takes ability score penalties for aging and cannot be magically aged.',
        effects: [],
      },
      {
        name: 'Defensive Instinct +5',
        level: 20,
        description: 'The defensive instinct bonus increases.',
        effects: [],
      },
      {
        name: 'Final Aspect',
        level: 20,
        description:
          'The shifter gains a fifth aspect. She can assume all minor forms simultaneously. Major and minor forms are usable at will.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Ultimate Wilderness',
  },
  {
    name: 'Vigilante',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 6,
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
      'Knowledge (engineering)',
      'Knowledge (local)',
      'Knowledge (nobility)',
      'Perception',
      'Perform',
      'Profession',
      'Ride',
      'Sense Motive',
      'Sleight of Hand',
      'Stealth',
      'Survival',
      'Swim',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (except tower shields)'],
    startingWealth: '5d6 × 10 gp',
    classFeatures: [
      {
        name: 'Dual Identity',
        level: 1,
        description:
          'A vigilante has two identities: a social identity and a vigilante identity. Switching identities requires 1 minute. Knowledge checks about one identity do not reveal the other.',
        effects: [],
      },
      {
        name: 'Seamless Guise',
        level: 1,
        description:
          'A vigilante gains a +20 circumstance bonus on Disguise checks to appear as his current identity.',
        effects: [],
      },
      {
        name: 'Social Talent',
        level: 1,
        description:
          'Starting at 1st level, and every 2 levels thereafter, a vigilante gains a social talent.',
        effects: [],
      },
      {
        name: 'Vigilante Specialization',
        level: 1,
        description:
          'At 1st level, a vigilante must choose to be an avenger (full BAB progression) or a stalker (hidden strike dealing 1d8 precision damage to foes denied their Dexterity bonus or flanked).',
        effects: [],
      },
      {
        name: 'Vigilante Talent',
        level: 2,
        description:
          'Starting at 2nd level, and every 2 levels thereafter, a vigilante gains a vigilante talent.',
        effects: [],
      },
      {
        name: 'Social Talent',
        level: 3,
        description: 'The vigilante gains an additional social talent.',
        effects: [],
      },
      {
        name: 'Unshakable',
        level: 3,
        description:
          'Starting at 3rd level, a vigilante adds his class level to the DC of any attempts to Intimidate him.',
        effects: [],
      },
      {
        name: 'Vigilante Talent',
        level: 4,
        description: 'The vigilante gains an additional talent.',
        effects: [],
      },
      {
        name: 'Social Talent',
        level: 5,
        description: 'The vigilante gains an additional social talent.',
        effects: [],
      },
      {
        name: 'Startling Appearance',
        level: 5,
        description:
          "At 5th level, whenever a vigilante attacks a foe that is unaware of the vigilante's presence, the foe is treated as flat-footed for that attack.",
        effects: [],
      },
      {
        name: 'Vigilante Talent',
        level: 6,
        description: 'The vigilante gains an additional talent.',
        effects: [],
      },
      {
        name: 'Social Talent',
        level: 7,
        description: 'The vigilante gains an additional social talent.',
        effects: [],
      },
      {
        name: 'Vigilante Talent',
        level: 8,
        description: 'The vigilante gains an additional talent.',
        effects: [],
      },
      {
        name: 'Social Talent',
        level: 9,
        description: 'The vigilante gains an additional social talent.',
        effects: [],
      },
      {
        name: 'Vigilante Talent',
        level: 10,
        description: 'The vigilante gains an additional talent.',
        effects: [],
      },
      {
        name: 'Frightening Appearance',
        level: 11,
        description:
          "At 11th level, whenever a vigilante attacks a foe unaware of his presence, the foe must make a Will save (DC 10 + 1/2 vigilante's level + Charisma modifier) or be shaken for 1 round per vigilante level.",
        effects: [],
      },
      {
        name: 'Social Talent',
        level: 11,
        description: 'The vigilante gains an additional social talent.',
        effects: [],
      },
      {
        name: 'Vigilante Talent',
        level: 12,
        description: 'The vigilante gains an additional talent.',
        effects: [],
      },
      {
        name: 'Social Talent',
        level: 13,
        description: 'The vigilante gains an additional social talent.',
        effects: [],
      },
      {
        name: 'Vigilante Talent',
        level: 14,
        description: 'The vigilante gains an additional talent.',
        effects: [],
      },
      {
        name: 'Social Talent',
        level: 15,
        description: 'The vigilante gains an additional social talent.',
        effects: [],
      },
      {
        name: 'Vigilante Talent',
        level: 16,
        description: 'The vigilante gains an additional talent.',
        effects: [],
      },
      {
        name: 'Social Talent',
        level: 17,
        description: 'The vigilante gains an additional social talent.',
        effects: [],
      },
      {
        name: 'Stunning Appearance',
        level: 17,
        description:
          "At 17th level, whenever a vigilante attacks a foe unaware of his presence, the foe must make a Will save (DC 10 + 1/2 vigilante's level + Charisma modifier) or be stunned for 1 round.",
        effects: [],
      },
      {
        name: 'Vigilante Talent',
        level: 18,
        description: 'The vigilante gains an additional talent.',
        effects: [],
      },
      {
        name: 'Social Talent',
        level: 19,
        description: 'The vigilante gains an additional social talent.',
        effects: [],
      },
      {
        name: 'Vengeance Strike',
        level: 20,
        description:
          'At 20th level, a vigilante can focus all of his wrath into a single devastating blow against one of his enemies.',
        effects: [],
      },
      {
        name: 'Vigilante Talent',
        level: 20,
        description: 'The vigilante gains an additional talent.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Ultimate Intrigue',
  },
  {
    name: 'Omdura',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Appraise',
      'Bluff',
      'Craft',
      'Diplomacy',
      'Heal',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (nobility)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Linguistics',
      'Perception',
      'Profession',
      'Sense Motive',
      'Spellcraft',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', "Deity's favored weapon"],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (except tower shields)'],
    startingWealth: '4d6 × 10 gp',
    alignment: "Within one step of deity's alignment",
    classFeatures: [
      {
        name: 'Aura',
        level: 1,
        description:
          "An omdura of a chaotic, evil, good, or lawful deity has a particularly powerful aura corresponding to the deity's alignment.",
        effects: [],
      },
      {
        name: 'Detect Alignment',
        level: 1,
        description:
          'At will, an omdura can use detect chaos, detect evil, detect good, or detect law. She can only use one at a time.',
        effects: [],
      },
      {
        name: 'Invocation',
        level: 1,
        description:
          'An omdura can call upon divine power as a standard action, granting bonuses to herself and allies within 30 feet. She can use invocation for a number of minutes per day equal to her omdura level. Nine types available: Destruction, Healing, Justice, Piercing, Protection, Purify, Resiliency, Resistance, and Smiting.',
        effects: [],
      },
      {
        name: 'Orisons',
        level: 1,
        description: 'Omduras learn orisons that are not expended when cast and may be used again.',
        effects: [],
      },
      {
        name: 'Divine Touch',
        level: 2,
        description:
          'At 2nd level, an omdura can deliver positive or negative energy by touch. Uses per day equal to 1/2 her level + Charisma modifier. Each use heals or deals 1d6 per two omdura levels.',
        effects: [],
      },
      {
        name: 'Divine Infusion',
        level: 3,
        description:
          'At 3rd level, the omdura selects one mercy or cruelty to add to her divine touch ability. She gains additional infusions at 6th, 9th, 12th, 15th, and 18th level.',
        effects: [],
      },
      {
        name: 'Divine Might 1/day',
        level: 4,
        description:
          'Once per day as a swift action, the omdura focuses divine power on one target. Against alignment-opposed foes: adds half Charisma bonus to attacks, half class level to damage, and half Charisma modifier as deflection to AC.',
        effects: [],
      },
      {
        name: 'Divine Weapon 1/day',
        level: 5,
        description:
          'The omdura can enhance her weapon as a standard action for 1 minute per level, granting a +1 enhancement bonus that increases by +1 per 3 levels. May substitute bonuses for weapon special abilities.',
        effects: [],
      },
      {
        name: 'Divine Infusion',
        level: 6,
        description: 'The omdura gains an additional infusion.',
        effects: [],
      },
      {
        name: 'Commune 1/day',
        level: 7,
        description: 'The omdura can cast commune once per day as a spell-like ability.',
        effects: [],
      },
      {
        name: 'Invocation (move action)',
        level: 7,
        description: 'The omdura can use invocation as a move action instead of a standard action.',
        effects: [],
      },
      {
        name: 'Divine Infusion',
        level: 9,
        description: 'The omdura gains an additional infusion.',
        effects: [],
      },
      {
        name: 'Divine Might 2/day',
        level: 9,
        description: 'Divine might usage increases to 2/day.',
        effects: [],
      },
      {
        name: 'Improved Invocation',
        level: 11,
        description:
          'The omdura can choose two invocations simultaneously, gaining half benefit from one.',
        effects: [],
      },
      {
        name: 'Divine Infusion',
        level: 12,
        description: 'The omdura gains an additional infusion.',
        effects: [],
      },
      {
        name: 'Invocation (swift action)',
        level: 13,
        description: 'The omdura can use invocation as a swift action.',
        effects: [],
      },
      {
        name: 'Divine Might 3/day',
        level: 14,
        description: 'Divine might usage increases to 3/day.',
        effects: [],
      },
      {
        name: 'Commune 2/day',
        level: 15,
        description: 'Commune usage increases to 2/day.',
        effects: [],
      },
      {
        name: 'Divine Infusion',
        level: 15,
        description: 'The omdura gains an additional infusion.',
        effects: [],
      },
      {
        name: 'Divine Infusion',
        level: 18,
        description: 'The omdura gains an additional infusion.',
        effects: [],
      },
      {
        name: 'Greater Divine Might',
        level: 18,
        description:
          'The omdura uses her full Charisma bonus and full class level when activating divine might, instead of halves.',
        effects: [],
      },
      {
        name: 'Divine Might 4/day',
        level: 19,
        description: 'Divine might usage increases to 4/day.',
        effects: [],
      },
      {
        name: 'Greater Invocation',
        level: 20,
        description:
          'One invocation remains active all day at full strength on the omdura and all her allies, independent of invocation uses.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Spontaneous',
      spellList: 'Cleric/Inquisitor',
      spellTableKey: 'SIX_LEVEL_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'SIX_LEVEL_SPONTANEOUS_KNOWN',
    },
    source: 'Pathfinder #129',
  },
  {
    name: 'Vampire Hunter',
    category: 'Base',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 6,
    classSkills: [
      'Bluff',
      'Climb',
      'Craft',
      'Handle Animal',
      'Heal',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (geography)',
      'Knowledge (local)',
      'Knowledge (religion)',
      'Perception',
      'Profession',
      'Ride',
      'Sense Motive',
      'Spellcraft',
      'Stealth',
      'Survival',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (except tower shields)'],
    startingWealth: '5d6 × 10 gp',
    classFeatures: [
      {
        name: 'Detect Undead',
        level: 1,
        description:
          'At will, a vampire hunter can use detect undead, as the spell. She can concentrate on a single individual within 60 feet to determine if it is undead as a move action.',
        effects: [],
      },
      {
        name: 'Technique Feat',
        level: 1,
        description:
          'At 1st level, a vampire hunter gains a bonus combat or technique feat. She gains additional technique feats at 3rd level and every 3 levels thereafter.',
        effects: [],
      },
      {
        name: 'Track',
        level: 1,
        description:
          'A vampire hunter adds half her level (minimum 1) to Survival checks made to follow or identify tracks.',
        effects: [],
      },
      {
        name: 'Vampiric Focus',
        level: 1,
        description:
          'At 1st level, a vampire hunter can select one common vampiric power to mimic, activating it as a swift action for a number of minutes per day equal to her class level.',
        effects: [],
      },
      {
        name: 'Relentless',
        level: 2,
        description:
          'At 2nd level, a vampire hunter can walk 16 hours in a day without it being considered a forced march.',
        effects: [],
      },
      {
        name: 'Technique Feat',
        level: 3,
        description: 'The vampire hunter gains an additional technique feat.',
        effects: [],
      },
      {
        name: 'Stake',
        level: 4,
        description:
          "At 4th level, any piercing weapon a vampire hunter drives through a vampire's heart is treated as a wooden stake.",
        effects: [],
      },
      {
        name: 'Relentless Band',
        level: 5,
        description:
          'At 5th level, a number of companions equal to half her level also benefit from her relentless ability.',
        effects: [],
      },
      {
        name: 'Technique Feat',
        level: 6,
        description: 'The vampire hunter gains an additional technique feat.',
        effects: [],
      },
      {
        name: 'Vampire Tracker',
        level: 7,
        description:
          'At 7th level, a vampire hunter can track gaseous creatures as though they were leaving physical tracks, with a base DC of 20.',
        effects: [],
      },
      {
        name: 'Technique Feat',
        level: 9,
        description: 'The vampire hunter gains an additional technique feat.',
        effects: [],
      },
      {
        name: 'Swift Tracker',
        level: 10,
        description:
          'At 10th level, a vampire hunter can move at normal speed while tracking without taking the –5 penalty.',
        effects: [],
      },
      {
        name: 'Vampire Bane',
        level: 11,
        description:
          'At 11th level, the vampire hunter can present a holy symbol as a standard action. Any vampire within 30 feet must make a Will save (DC 15 + class level + Charisma modifier) or be repulsed.',
        effects: [],
      },
      {
        name: 'Technique Feat',
        level: 12,
        description: 'The vampire hunter gains an additional technique feat.',
        effects: [],
      },
      {
        name: 'Remove Vampirism',
        level: 13,
        description:
          'At 13th level, the vampire hunter can spend 10 minutes and a vial of holy water to prevent slain victims from becoming vampire spawn.',
        effects: [],
      },
      {
        name: 'Quarry',
        level: 14,
        description:
          'At 14th level, the vampire hunter can denote one undead target as her quarry. She gains a +2 insight bonus on attack rolls and auto-confirms critical threats against her quarry.',
        effects: [],
      },
      {
        name: 'Technique Feat',
        level: 15,
        description: 'The vampire hunter gains an additional technique feat.',
        effects: [],
      },
      {
        name: 'Critical Reflexes',
        level: 17,
        description:
          "At 17th level, upon confirming a critical hit against undead, the vampire hunter can use an alchemical item or drive a stake through a vampire's heart, killing it immediately.",
        effects: [],
      },
      {
        name: 'Technique Feat',
        level: 18,
        description: 'The vampire hunter gains an additional technique feat.',
        effects: [],
      },
      {
        name: 'Improved Quarry',
        level: 19,
        description:
          'At 19th level, the vampire hunter can select a quarry as a free action and the insight bonus to attack increases to +4.',
        effects: [],
      },
      {
        name: 'Master Vampire Hunter',
        level: 20,
        description:
          'At 20th level, the vampire hunter can make a single standard action attack with three options: destroy (kills outright), stake (kills vampire), or paralyze (2d6 rounds). Target makes a Fortitude save (DC 10 + half level + Wisdom modifier).',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Spontaneous',
      spellList: 'Inquisitor',
      spellTableKey: 'FOUR_LEVEL_PREPARED_PER_DAY',
    },
    source: 'Pathfinder Player Companion',
  },
];
