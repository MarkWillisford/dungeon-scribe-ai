// Prestige Classes — all 10 classes from the Core Rulebook, levels 1-10
// Source: https://www.d20pfsrd.com/classes/prestige-classes/core-rulebook/

import { BABProgression, SaveProgression } from '@/types/base';
import { ExpandedClassData } from './types';

export const PRESTIGE_CLASSES_CRB: ExpandedClassData[] = [
  // ────────────────────────────────────────────────────────────────────────────
  // 1. Arcane Archer
  // ────────────────────────────────────────────────────────────────────────────
  {
    name: 'Arcane Archer',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: ['Perception', 'Ride', 'Stealth', 'Survival'],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    classFeatures: [
      {
        name: 'Enhance Arrows (Magic)',
        level: 1,
        description:
          "At 1st level, every nonmagical arrow an arcane archer nocks and lets fly becomes magical, gaining a +1 enhancement bonus. Unlike magic weapons created by normal means, the archer need not spend gold pieces to accomplish this task. However, an archer's magic arrows only function for her.",
        effects: [],
      },
      {
        name: 'Enhance Arrows (Elemental)',
        level: 3,
        description:
          'At 3rd level, every nonmagical arrow fired by an arcane archer gains one of the following elemental themed weapon qualities: flaming, frost, or shock.',
        effects: [],
      },
      {
        name: 'Enhance Arrows (Distance)',
        level: 5,
        description:
          'At 5th level, every nonmagical arrow fired by an arcane archer gains the distance weapon quality.',
        effects: [],
      },
      {
        name: 'Enhance Arrows (Elemental Burst)',
        level: 7,
        description:
          'At 7th level, every nonmagical arrow fired by an arcane archer gains one of the following elemental burst weapon qualities: flaming burst, icy burst, or shocking burst. This is in addition to the ability gained at 3rd level.',
        effects: [],
      },
      {
        name: 'Enhance Arrows (Aligned)',
        level: 9,
        description:
          'At 9th level, every nonmagical arrow fired by an arcane archer gains one of the following aligned weapon qualities: anarchic, axiomatic, holy, or unholy. The arcane archer cannot choose an alignment quality that conflicts with her own alignment.',
        effects: [],
      },
      {
        name: 'Imbue Arrow',
        level: 2,
        description:
          "At 2nd level, an arcane archer gains the ability to place an area spell upon an arrow. When the arrow is fired, the spell's area is centered where the arrow lands, even if the spell could normally be centered only on the caster. This ability allows the archer to use the bow's range rather than the spell's range. A spell cast in this way uses its standard casting time and the arcane archer can fire the arrow as part of the casting.",
        effects: [],
      },
      {
        name: 'Seeker Arrow',
        level: 4,
        description:
          "At 4th level, an arcane archer can launch an arrow once per day at a target known to her within range, and the arrow travels to the target, even around corners. Only an unavoidable obstacle or the limit of the arrow's range prevents the arrow's flight. This ability negates cover and concealment modifiers, but otherwise the attack is rolled normally. Using this ability is a standard action (and target must be known).",
        effects: [],
      },
      {
        name: 'Phase Arrow',
        level: 6,
        description:
          'At 6th level, an arcane archer can launch an arrow once per day that phases through solid objects. The arrow ignores all cover and concealment (even total cover/concealment) and strikes the target normally. Only a force effect or antimagic field can stop a phase arrow.',
        effects: [],
      },
      {
        name: 'Hail of Arrows',
        level: 8,
        description:
          "In lieu of her regular attacks, once per day an arcane archer of 8th level or higher can fire an arrow at each and every target within range, to a maximum of one target for every arcane archer level she has earned. Each attack uses the archer's primary attack bonus, and each enemy may only be targeted by a single arrow.",
        effects: [],
      },
      {
        name: 'Arrow of Death',
        level: 10,
        description:
          "At 10th level, an arcane archer can create a special type of slaying arrow that forces the target, if damaged by the arrow's attack, to make a Fortitude save or die (DC 20 + arcane archer's Charisma modifier). It takes one day to make a slaying arrow, and the arrow only functions for the arcane archer who created it. The arcane archer can only have one such arrow in existence at a time.",
        effects: [],
      },
      {
        name: 'Spellcasting',
        level: 2,
        description:
          'At each level except 1st and 5th, an arcane archer gains new spells per day as if she had also gained a level in an arcane spellcasting class she belonged to before adding the prestige class. She does not gain any other benefit a character of that class would have gained. If she had more than one arcane spellcasting class before becoming an arcane archer, she must decide to which class she adds the new level for purposes of determining spells per day.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'arcane',
      atLevels: [2, 3, 4, 6, 7, 8, 10],
    },
    prerequisites: {
      bab: 6,
      feats: ['Point Blank Shot', 'Precise Shot', 'Weapon Focus (longbow or shortbow)'],
      spellcasting: 'Ability to cast 1st-level arcane spells',
    },
    source: 'Core Rulebook',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 2. Arcane Trickster
  // ────────────────────────────────────────────────────────────────────────────
  {
    name: 'Arcane Trickster',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 6,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Appraise',
      'Bluff',
      'Climb',
      'Diplomacy',
      'Disable Device',
      'Disguise',
      'Escape Artist',
      'Knowledge (all)',
      'Perception',
      'Sense Motive',
      'Sleight of Hand',
      'Spellcraft',
      'Stealth',
      'Swim',
    ],
    babProgression: BABProgression.Low,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    classFeatures: [
      {
        name: 'Ranged Legerdemain',
        level: 1,
        description:
          'An arcane trickster can use Disable Device and Sleight of Hand at a range of 30 feet. Working at a distance increases the normal skill check DC by 5, and an arcane trickster cannot take 10 on this check. Any object to be manipulated must weigh 5 pounds or less. She can only use this ability if she has at least 1 rank in the skill being used.',
        effects: [],
      },
      {
        name: 'Sneak Attack +1d6',
        level: 1,
        description:
          'This is exactly like the rogue ability of the same name. The extra damage dealt increases by +1d6 at every other level (1st, 3rd, 5th, 7th, and 9th). If an arcane trickster gets a sneak attack bonus from another source, the bonuses on damage stack.',
        effects: [],
      },
      {
        name: 'Sneak Attack +2d6',
        level: 3,
        description: 'Sneak attack damage increases to +2d6.',
        effects: [],
      },
      {
        name: 'Impromptu Sneak Attack 1/day',
        level: 3,
        description:
          'Beginning at 3rd level, once per day an arcane trickster can declare one melee or ranged attack she makes to be a sneak attack (the target can be no more than 30 feet distant if the attack is ranged). The target of an impromptu sneak attack loses any Dexterity bonus to AC, but only against that attack. The power can be used against any target, but creatures that are not subject to critical hits take no extra damage.',
        effects: [],
      },
      {
        name: 'Sneak Attack +3d6',
        level: 5,
        description: 'Sneak attack damage increases to +3d6.',
        effects: [],
      },
      {
        name: 'Impromptu Sneak Attack 2/day',
        level: 7,
        description: 'Impromptu sneak attack can be used twice per day.',
        effects: [],
      },
      {
        name: 'Sneak Attack +4d6',
        level: 7,
        description: 'Sneak attack damage increases to +4d6.',
        effects: [],
      },
      {
        name: 'Sneak Attack +5d6',
        level: 9,
        description: 'Sneak attack damage increases to +5d6.',
        effects: [],
      },
      {
        name: 'Invisible Thief',
        level: 9,
        description:
          'At 9th level, an arcane trickster can become invisible, as if under the effects of greater invisibility, as a free action. She can remain invisible for a number of rounds per day equal to her arcane trickster level. Her caster level for this effect is equal to her caster level. These rounds need not be consecutive.',
        effects: [],
      },
      {
        name: 'Surprise Spells',
        level: 10,
        description:
          'At 10th level, an arcane trickster can add her sneak attack damage to any spell that deals damage, if the targets are flat-footed. This additional damage only applies to spells that deal hit point damage, and the additional damage is of the same type as the spell. If the spell allows a saving throw to negate or halve the damage, it also negates or halves the sneak attack damage.',
        effects: [],
      },
      {
        name: 'Spellcasting',
        level: 1,
        description:
          'At each new arcane trickster level, the character gains new spells per day as if she had also gained a level in a spellcasting class she belonged to before adding the prestige class. She does not gain any other benefit a character of that class would have gained. If the character had more than one spellcasting class before becoming an arcane trickster, she must decide to which class she adds the new level for purposes of determining spells per day.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'arcane',
      atLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    prerequisites: {
      skills: [
        { name: 'Disable Device', ranks: 4 },
        { name: 'Escape Artist', ranks: 4 },
        { name: 'Knowledge (arcana)', ranks: 4 },
      ],
      spellcasting:
        'Ability to cast mage hand and at least one arcane spell of 2nd level or higher',
      special: ['Sneak attack +2d6'],
    },
    source: 'Core Rulebook',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 3. Assassin
  // ────────────────────────────────────────────────────────────────────────────
  {
    name: 'Assassin',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Climb',
      'Diplomacy',
      'Disable Device',
      'Disguise',
      'Escape Artist',
      'Intimidate',
      'Linguistics',
      'Perception',
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
      'Crossbow (hand)',
      'Crossbow (light)',
      'Dagger',
      'Dart',
      'Rapier',
      'Sap',
      'Shortbow',
      'Short sword',
    ],
    armorProficiencies: ['Light armor'],
    classFeatures: [
      {
        name: 'Sneak Attack +1d6',
        level: 1,
        description:
          'This is exactly like the rogue ability of the same name. The extra damage dealt increases by +1d6 every two levels thereafter (1st, 3rd, 5th, 7th, and 9th). If an assassin gets a sneak attack bonus from another source, the bonuses on damage stack.',
        effects: [],
      },
      {
        name: 'Death Attack',
        level: 1,
        description:
          "If an assassin studies his victim for 3 consecutive rounds with a standard action in each round, and then makes a melee attack with a melee weapon that successfully deals damage, the attack has the additional effect of possibly either paralyzing or killing the target (assassin's choice). Studying the victim is a standard action. The death attack fails if the target detects the assassin or recognizes the assassin as an enemy. If the victim of such an attack fails a Fortitude save (DC 10 + the assassin's class level + the assassin's Int modifier) against the kill effect, she dies. If the saving throw fails against the paralysis effect, the victim is rendered helpless and unable to act for 1d6 rounds plus 1 round per level of the assassin.",
        effects: [],
      },
      {
        name: 'Poison Use',
        level: 1,
        description:
          'At 1st level, an assassin is trained in the use of poison and cannot accidentally poison himself when applying poison to a blade.',
        effects: [],
      },
      {
        name: 'Save Bonus against Poison +1',
        level: 2,
        description:
          'At 2nd level, the assassin gains a +1 saving throw bonus against poisons. This bonus increases by +1 for every two additional levels gained (to a maximum of +5 at 10th level).',
        effects: [],
      },
      {
        name: 'Uncanny Dodge',
        level: 2,
        description:
          'At 2nd level, an assassin cannot be caught flat-footed, even if the attacker is invisible. He still loses his Dexterity bonus to AC if immobilized. An assassin with this ability can still lose his Dexterity bonus to AC if an opponent successfully uses the feint action against him.',
        effects: [],
      },
      {
        name: 'Sneak Attack +2d6',
        level: 3,
        description: 'Sneak attack damage increases to +2d6.',
        effects: [],
      },
      {
        name: 'Save Bonus against Poison +2',
        level: 4,
        description: 'Saving throw bonus against poisons increases to +2.',
        effects: [],
      },
      {
        name: 'Hidden Weapons',
        level: 4,
        description:
          'At 4th level, an assassin becomes a master at hiding weapons on his body. He adds his assassin level to all Sleight of Hand skill checks made to prevent others from noticing them.',
        effects: [],
      },
      {
        name: 'True Death',
        level: 4,
        description:
          "Starting at 4th level, anyone slain by an assassin's death attack becomes more difficult to bring back from the dead. Spellcasters attempting to bring the creature back from the dead using raise dead or similar magic must make a caster level check (DC 15 + the assassin's class level) or the spell fails and the material component is wasted.",
        effects: [],
      },
      {
        name: 'Sneak Attack +3d6',
        level: 5,
        description: 'Sneak attack damage increases to +3d6.',
        effects: [],
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 5,
        description:
          'At 5th level, an assassin can no longer be flanked. This defense denies another character the ability to sneak attack the assassin by flanking him, unless the attacker has at least four more levels in a class that provides sneak attack than the target has assassin levels.',
        effects: [],
      },
      {
        name: 'Save Bonus against Poison +3',
        level: 6,
        description: 'Saving throw bonus against poisons increases to +3.',
        effects: [],
      },
      {
        name: 'Quiet Death',
        level: 6,
        description:
          'At 6th level, whenever an assassin kills a creature using his death attack during a surprise round, he can also make a Stealth check, opposed by Perception checks of those in the vicinity, to prevent them from identifying him as the assailant.',
        effects: [],
      },
      {
        name: 'Sneak Attack +4d6',
        level: 7,
        description: 'Sneak attack damage increases to +4d6.',
        effects: [],
      },
      {
        name: 'Hide in Plain Sight',
        level: 8,
        description:
          'At 8th level, an assassin can use the Stealth skill even while being observed. As long as he is within 10 feet of an area of dim light, an assassin can hide himself from view in the open without anything to actually hide behind. He cannot, however, hide in his own shadow.',
        effects: [],
      },
      {
        name: 'Save Bonus against Poison +4',
        level: 8,
        description: 'Saving throw bonus against poisons increases to +4.',
        effects: [],
      },
      {
        name: 'Sneak Attack +5d6',
        level: 9,
        description: 'Sneak attack damage increases to +5d6.',
        effects: [],
      },
      {
        name: 'Swift Death',
        level: 9,
        description:
          'At 9th level, once per day, an assassin can make a death attack against a foe without studying the foe beforehand. He must still sneak attack his foe using a melee weapon that deals damage.',
        effects: [],
      },
      {
        name: 'Angel of Death',
        level: 10,
        description:
          "At 10th level, the assassin becomes a master of death. Once per day, when the assassin makes a successful death attack, he can cause the target's body to crumble to dust. This prevents raise dead and resurrection (although true resurrection works as normal). The assassin must declare the use of this ability before the attack is made. If the attack misses or the target successfully saves against the death attack, this ability is wasted.",
        effects: [],
      },
      {
        name: 'Save Bonus against Poison +5',
        level: 10,
        description: 'Saving throw bonus against poisons increases to +5.',
        effects: [],
      },
      {
        name: 'Assassin Spells',
        level: 1,
        description:
          "Beginning at 1st level, an assassin gains the ability to cast a number of arcane spells drawn from the assassin spell list. He can cast any spell he knows without preparing it ahead of time. To learn or cast a spell, an assassin must have an Intelligence score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against an assassin's spell is 10 + the spell level + the assassin's Intelligence modifier. The assassin's spell list includes spells of 1st through 4th level. Spells per day: Level 1: 0/—/—/—, Level 2: 1/—/—/—, Level 3: 2/0/—/—, Level 4: 3/1/—/—, Level 5: 3/2/0/—, Level 6: 4/3/1/—, Level 7: 4/3/2/0, Level 8: 4/4/3/1, Level 9: 4/4/3/2, Level 10: 4/4/4/3.",
        effects: [],
      },
    ],
    spellcasting: { type: 'Arcane', casting: 'Spontaneous', spellList: 'Assassin' },
    prerequisites: {
      alignment: 'Any evil',
      special: ['Must kill someone for the sole purpose of joining the assassins'],
    },
    source: 'Core Rulebook',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 4. Dragon Disciple
  // ────────────────────────────────────────────────────────────────────────────
  {
    name: 'Dragon Disciple',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 12,
    skillRanksPerLevel: 2,
    classSkills: [
      'Diplomacy',
      'Escape Artist',
      'Fly',
      'Knowledge (all)',
      'Perception',
      'Spellcraft',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    classFeatures: [
      {
        name: 'Blood of Dragons',
        level: 1,
        description:
          'A dragon disciple adds his level to his sorcerer levels when determining the powers gained from his bloodline. If the dragon disciple does not have levels of sorcerer, he instead gains bloodline powers of the draconic bloodline, using his dragon disciple level as his sorcerer level to determine the bonuses gained. He must choose a dragon type upon gaining his first level in this class.',
        effects: [],
      },
      {
        name: 'Natural Armor Increase +1',
        level: 1,
        description:
          "At 1st level, a dragon disciple gains a +1 increase to the character's existing natural armor (if any), as his skin thickens. As his skin thickens further at 4th level, this bonus increases to +1 (for a total increase of +2). At 7th level, this bonus increases to +1 (for a total increase of +3). These armor bonuses stack.",
        effects: [],
      },
      {
        name: 'Ability Boost (Str +2)',
        level: 2,
        description:
          'As a dragon disciple gains levels in this prestige class, his ability scores increase. At 2nd level, the dragon disciple gains a +2 increase to Strength. These increases are permanent.',
        effects: [],
      },
      {
        name: 'Bloodline Feat',
        level: 2,
        description:
          "Upon reaching 2nd level, and every three levels thereafter, a dragon disciple receives one bonus feat, chosen from the draconic bloodline's bonus feat list.",
        effects: [],
      },
      {
        name: 'Dragon Bite',
        level: 2,
        description:
          "At 2nd level, whenever the dragon disciple uses his bloodline to grow claws, he also gains a bite attack. This is a primary natural attack that deals 1d6 points of damage (1d4 if the dragon disciple is Small), plus 1-1/2 times the dragon disciple's Strength modifier. Upon reaching 6th level, this bite also deals 1d6 points of energy damage (matching the dragon type chosen).",
        effects: [],
      },
      {
        name: 'Breath Weapon',
        level: 3,
        description:
          'At 3rd level, a dragon disciple gains the breath weapon bloodline power, even if his level does not yet grant that power. Once his level is high enough to grant this ability through the bloodline, the dragon disciple gains an additional use of his breath weapon each day. The type and shape of the breath weapon depends on the type of dragon selected by the disciple.',
        effects: [],
      },
      {
        name: 'Natural Armor Increase +2',
        level: 4,
        description: 'Natural armor increase totals +2.',
        effects: [],
      },
      {
        name: 'Ability Boost (Str +2)',
        level: 4,
        description:
          'The dragon disciple gains an additional +2 increase to Strength (total +4 Str from this class).',
        effects: [],
      },
      {
        name: 'Bloodline Feat',
        level: 5,
        description: 'The dragon disciple gains an additional bloodline bonus feat.',
        effects: [],
      },
      {
        name: 'Blindsense 30 ft.',
        level: 5,
        description:
          'At 5th level, the dragon disciple gains blindsense with a range of 30 feet. Using nonvisual senses, such as acute smell or hearing, the dragon disciple notices things he cannot see.',
        effects: [],
      },
      {
        name: 'Ability Boost (Con +2)',
        level: 6,
        description: 'The dragon disciple gains a +2 increase to Constitution.',
        effects: [],
      },
      {
        name: 'Natural Armor Increase +3',
        level: 7,
        description: 'Natural armor increase totals +3.',
        effects: [],
      },
      {
        name: 'Dragon Form (1/day)',
        level: 7,
        description:
          'At 7th level, a dragon disciple can assume the form of a dragon. This ability works like form of the dragon I. At 10th level, this ability functions as form of the dragon II and the dragon disciple can use this ability twice per day.',
        effects: [],
      },
      {
        name: 'Ability Boost (Int +2)',
        level: 8,
        description: 'The dragon disciple gains a +2 increase to Intelligence.',
        effects: [],
      },
      {
        name: 'Bloodline Feat',
        level: 8,
        description: 'The dragon disciple gains an additional bloodline bonus feat.',
        effects: [],
      },
      {
        name: 'Wings',
        level: 9,
        description:
          'At 9th level, a dragon disciple grows a set of draconic wings, gaining a fly speed of 60 feet with average maneuverability. If the character already has a fly speed from another source, the fly speed gained from wings increases by +20 feet.',
        effects: [],
      },
      {
        name: 'Blindsense 60 ft.',
        level: 10,
        description:
          "At 10th level, the range of the dragon disciple's blindsense increases to 60 feet.",
        effects: [],
      },
      {
        name: 'Dragon Form (2/day)',
        level: 10,
        description:
          'Dragon form ability functions as form of the dragon II and can be used twice per day.',
        effects: [],
      },
      {
        name: 'Spellcasting',
        level: 2,
        description:
          'At 2nd, 3rd, 4th, 6th, 7th, 8th, and 10th levels, a dragon disciple gains new spells per day as if he had also gained a level in an arcane spellcasting class he belonged to before adding the prestige class. He does not gain any other benefit a character of that class would have gained. If the character had more than one arcane spellcasting class, he must decide to which class he adds each level.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'arcane',
      atLevels: [2, 3, 4, 6, 7, 8, 10],
    },
    prerequisites: {
      skills: [{ name: 'Knowledge (arcana)', ranks: 5 }],
      spellcasting: 'Ability to cast arcane spells without preparation',
      special: ['Must not be a dragon type or have the dragon subtype'],
    },
    source: 'Core Rulebook',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 5. Duelist
  // ────────────────────────────────────────────────────────────────────────────
  {
    name: 'Duelist',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Escape Artist',
      'Knowledge (nobility)',
      'Perception',
      'Perform',
      'Sense Motive',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    classFeatures: [
      {
        name: 'Canny Defense',
        level: 1,
        description:
          'When wearing no armor and not using a shield, a duelist adds 1 point of Intelligence bonus (if any) per duelist class level as a dodge bonus to her Armor Class while wielding a melee weapon. If a duelist is caught flat-footed or otherwise denied her Dexterity bonus, she also loses this bonus. A condition that makes her lose her Dexterity bonus to AC also makes her lose her Intelligence bonus.',
        effects: [],
      },
      {
        name: 'Precise Strike',
        level: 1,
        description:
          "A duelist gains the ability to strike precisely with a light or one-handed piercing melee weapon, adding her duelist level to her damage roll. When making a precise strike, a duelist cannot attack with a weapon in her other hand or use a shield. A duelist's precise strike only works against living creatures with discernible anatomies. Any creature that is immune to critical hits is also immune to a precise strike, and any item or ability that protects a creature from critical hits also protects a creature from a precise strike.",
        effects: [],
      },
      {
        name: 'Improved Reaction +2',
        level: 2,
        description:
          'At 2nd level, a duelist gains a +2 bonus on initiative checks. At 8th level, the bonus increases to +4.',
        effects: [],
      },
      {
        name: 'Parry',
        level: 2,
        description:
          "At 2nd level, a duelist learns to parry the attacks of other creatures, causing them to miss. Whenever the duelist takes a full attack action with a light or one-handed piercing weapon, she can elect not to take one of her attacks. At any time before her next turn, she can attempt to parry an attack against her or an adjacent ally as an immediate action. To parry the attack, the duelist makes an attack roll, using the bonus of the attack she chose to forgo. If her result is greater than the attacking creature's result, the attack automatically misses.",
        effects: [],
      },
      {
        name: 'Enhanced Mobility',
        level: 3,
        description:
          'Starting at 3rd level, when wearing no armor and not using a shield, a duelist gains an additional +4 bonus to AC against attacks of opportunity caused when she moves out of a threatened square.',
        effects: [],
      },
      {
        name: 'Combat Reflexes',
        level: 4,
        description:
          'At 4th level, a duelist gains the benefit of the Combat Reflexes feat when using a light or one-handed piercing weapon.',
        effects: [],
      },
      {
        name: 'Grace',
        level: 4,
        description:
          'At 4th level, a duelist gains an additional +2 competence bonus on all Reflex saving throws. This ability functions for a duelist only when she is wearing no armor and not using a shield.',
        effects: [],
      },
      {
        name: 'Riposte',
        level: 5,
        description:
          'Starting at 5th level, a duelist can make an attack of opportunity against any creature whose attack she successfully parries, so long as the creature she is attacking is within reach.',
        effects: [],
      },
      {
        name: 'Acrobatic Charge',
        level: 5,
        description:
          'At 5th level, a duelist gains the ability to charge in situations where others cannot. She may charge over difficult terrain that normally slows movement. Depending on the circumstance, she may still need to make appropriate checks to successfully move over the terrain.',
        effects: [],
      },
      {
        name: 'Elaborate Defense',
        level: 7,
        description:
          'At 7th level, if a duelist chooses to fight defensively or use total defense in melee combat, she gains an additional +1 dodge bonus to AC for every 3 levels of duelist.',
        effects: [],
      },
      {
        name: 'Improved Reaction +4',
        level: 8,
        description: 'Initiative bonus increases to +4.',
        effects: [],
      },
      {
        name: 'Deflect Arrows',
        level: 9,
        description:
          'At 9th level, a duelist gains the benefit of the Deflect Arrows feat when using a light or one-handed piercing weapon. The duelist does not need a free hand to use this feat.',
        effects: [],
      },
      {
        name: 'No Retreat',
        level: 9,
        description:
          'At 9th level, enemies adjacent to the duelist that take a withdraw action provoke an attack of opportunity from the duelist.',
        effects: [],
      },
      {
        name: 'Crippling Critical',
        level: 10,
        description:
          "When you confirm a critical hit using a light or one-handed piercing weapon, you can apply one of the following penalties in addition to the damage dealt: reduce all of the target's speeds by 10 feet (minimum 5 feet), 1d4 points of Strength or Dexterity damage, –4 penalty on all saving throws, –4 penalty to Armor Class, or 2d6 points of bleed damage. These penalties last for 1 minute, except bleed damage which can be stopped with a DC 15 Heal check or any cure spell.",
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    prerequisites: {
      bab: 6,
      feats: ['Dodge', 'Mobility', 'Weapon Finesse'],
      skills: [
        { name: 'Acrobatics', ranks: 2 },
        { name: 'Perform', ranks: 2 },
      ],
    },
    source: 'Core Rulebook',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 6. Eldritch Knight
  // ────────────────────────────────────────────────────────────────────────────
  {
    name: 'Eldritch Knight',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 2,
    classSkills: [
      'Climb',
      'Knowledge (arcana)',
      'Knowledge (nobility)',
      'Linguistics',
      'Ride',
      'Sense Motive',
      'Spellcraft',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    classFeatures: [
      {
        name: 'Bonus Combat Feat',
        level: 1,
        description:
          'At 1st level, an eldritch knight may choose a bonus combat feat. This is in addition to the feats that a character of any class normally gets from advancing levels. The character must still meet any prerequisites for these bonus feats. An eldritch knight gains an additional combat feat at 5th and 9th levels.',
        effects: [],
      },
      {
        name: 'Diverse Training',
        level: 1,
        description:
          'An eldritch knight adds his level to any levels of fighter he might have for the purpose of meeting the prerequisites for feats (if he has no fighter levels, treat his eldritch knight levels as fighter levels). He also adds his level to any levels in an arcane spellcasting class for the purpose of meeting the prerequisites for feats.',
        effects: [],
      },
      {
        name: 'Bonus Combat Feat',
        level: 5,
        description: 'The eldritch knight gains an additional bonus combat feat.',
        effects: [],
      },
      {
        name: 'Bonus Combat Feat',
        level: 9,
        description: 'The eldritch knight gains an additional bonus combat feat.',
        effects: [],
      },
      {
        name: 'Spell Critical',
        level: 10,
        description:
          "At 10th level, whenever an eldritch knight successfully confirms a critical hit, he can cast a spell as a swift action. The spell must include the target of the attack as one of its targets or in its area of effect. Casting this spell does not provoke an attack of opportunity. The caster must still meet all of the spell's components and must roll a concentration check to cast the spell (DC 20 + spell level).",
        effects: [],
      },
      {
        name: 'Spellcasting',
        level: 2,
        description:
          'At each level except 1st, an eldritch knight gains new spells per day as if he had also gained a level in an arcane spellcasting class he belonged to before adding the prestige class. He does not gain any other benefit a character of that class would have gained. If he had more than one arcane spellcasting class before becoming an eldritch knight, he must decide to which class he adds the new level for purposes of determining spells per day.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'arcane',
      atLevels: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    prerequisites: {
      feats: ['Proficiency with all martial weapons'],
      spellcasting: 'Ability to cast 3rd-level arcane spells',
    },
    source: 'Core Rulebook',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 7. Loremaster
  // ────────────────────────────────────────────────────────────────────────────
  {
    name: 'Loremaster',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 6,
    skillRanksPerLevel: 4,
    classSkills: [
      'Appraise',
      'Diplomacy',
      'Handle Animal',
      'Heal',
      'Knowledge (all)',
      'Linguistics',
      'Perform',
      'Spellcraft',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Low,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    classFeatures: [
      {
        name: 'Secret',
        level: 2,
        description:
          "At 2nd level, and every two levels thereafter (4th, 6th, 8th, and 10th), the loremaster chooses one secret from the Loremaster Secrets table. The loremaster's level plus Intelligence modifier determines the total number of secrets she can choose. She can't choose the same secret twice. Available secrets include: Instant Mastery (4 ranks in a skill), Secret Health (+2 hit points), Secrets of Inner Strength (+2 Will save), The Lore of True Stamina (+2 Fort save), Secret Knowledge of Avoidance (+2 Ref save), Applicable Knowledge (any feat), Newfound Arcana (bonus 1st-level spell slot), and More Newfound Arcana (bonus 2nd-level spell slot).",
        effects: [],
      },
      {
        name: 'Lore',
        level: 1,
        description:
          'At 1st level, a loremaster adds half her level to all Knowledge skill checks and may make all Knowledge skill checks untrained.',
        effects: [],
      },
      {
        name: 'Secret',
        level: 4,
        description: 'The loremaster selects an additional secret.',
        effects: [],
      },
      {
        name: 'Greater Lore',
        level: 6,
        description:
          'At 6th level, a loremaster gains the ability to understand magic items. Whenever a loremaster examines a magic item to determine its properties, she gains a +10 circumstance bonus on her Spellcraft skill check.',
        effects: [],
      },
      {
        name: 'Secret',
        level: 6,
        description: 'The loremaster selects an additional secret.',
        effects: [],
      },
      {
        name: 'Secret',
        level: 8,
        description: 'The loremaster selects an additional secret.',
        effects: [],
      },
      {
        name: 'True Lore',
        level: 10,
        description:
          'At 10th level, once per day a loremaster can use her knowledge to gain the effect of a legend lore spell or an analyze dweomer spell. If used as legend lore, the casting time is 1 minute, regardless of what the casting time would normally be.',
        effects: [],
      },
      {
        name: 'Secret',
        level: 10,
        description: 'The loremaster selects an additional secret.',
        effects: [],
      },
      {
        name: 'Spellcasting',
        level: 1,
        description:
          'When a new loremaster level is gained, the character gains new spells per day as if she had also gained a level in a spellcasting class she belonged to before adding the prestige class. She does not gain any other benefit a character of that class would have gained. If the character had more than one spellcasting class before becoming a loremaster, she must decide to which class she adds the new level for purposes of determining spells per day.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'chosen',
      atLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    prerequisites: {
      skills: [{ name: 'Knowledge (any two)', ranks: 7 }],
      feats: ['Any three metamagic or item creation feats'],
      spellcasting:
        'Ability to cast 7 different divination spells, one of which must be 3rd level or higher',
    },
    source: 'Core Rulebook',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 8. Mystic Theurge
  // ────────────────────────────────────────────────────────────────────────────
  {
    name: 'Mystic Theurge',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 6,
    skillRanksPerLevel: 2,
    classSkills: ['Knowledge (arcana)', 'Knowledge (religion)', 'Sense Motive', 'Spellcraft'],
    babProgression: BABProgression.Low,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    classFeatures: [
      {
        name: 'Combined Spells (1st)',
        level: 1,
        description:
          'A mystic theurge can prepare and cast spells from one of his spellcasting classes using the available slots from any of his other spellcasting classes. Spells prepared or cast in this way take up a slot one level higher than they originally occupied. This ability cannot be used to cast a spell at a lower level if that spell exists on both spell lists. At 1st level, a mystic theurge can prepare 1st-level spells from one of his spellcasting classes using the spell slots of the other spellcasting class.',
        effects: [],
      },
      {
        name: 'Combined Spells (2nd)',
        level: 3,
        description: 'Combined spells ability extends to 2nd-level spells.',
        effects: [],
      },
      {
        name: 'Combined Spells (3rd)',
        level: 5,
        description: 'Combined spells ability extends to 3rd-level spells.',
        effects: [],
      },
      {
        name: 'Combined Spells (4th)',
        level: 7,
        description: 'Combined spells ability extends to 4th-level spells.',
        effects: [],
      },
      {
        name: 'Combined Spells (5th)',
        level: 9,
        description: 'Combined spells ability extends to 5th-level spells.',
        effects: [],
      },
      {
        name: 'Spell Synthesis',
        level: 10,
        description:
          'At 10th level, a mystic theurge can cast two spells, one from each of his spellcasting classes, using one action. Both spells must have the same casting time. The mystic theurge can make any decisions concerning the spells independently. Any target affected by both spells takes a –2 penalty on saves made against each spell. The mystic theurge receives a +2 bonus on caster level checks made to overcome spell resistance with these two spells. A mystic theurge may use this ability once per day.',
        effects: [],
      },
      {
        name: 'Spellcasting (Arcane)',
        level: 1,
        description:
          'At each new mystic theurge level, the character gains new spells per day as if he had also gained a level in an arcane spellcasting class he belonged to before adding the prestige class. He does not gain any other benefit a character of that class would have gained.',
        effects: [],
      },
      {
        name: 'Spellcasting (Divine)',
        level: 1,
        description:
          'At each new mystic theurge level, the character gains new spells per day as if he had also gained a level in a divine spellcasting class he belonged to before adding the prestige class. He does not gain any other benefit a character of that class would have gained.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    advancesSpellcasting: {
      mode: 'both',
      atLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    prerequisites: {
      skills: [
        { name: 'Knowledge (arcana)', ranks: 3 },
        { name: 'Knowledge (religion)', ranks: 3 },
      ],
      spellcasting: 'Ability to cast 2nd-level divine spells and 2nd-level arcane spells',
    },
    source: 'Core Rulebook',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 9. Pathfinder Chronicler
  // ────────────────────────────────────────────────────────────────────────────
  {
    name: 'Pathfinder Chronicler',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 8,
    classSkills: [
      'Appraise',
      'Bluff',
      'Craft',
      'Diplomacy',
      'Disguise',
      'Escape Artist',
      'Intimidate',
      'Knowledge (all)',
      'Linguistics',
      'Perception',
      'Perform',
      'Profession',
      'Ride',
      'Sense Motive',
      'Sleight of Hand',
      'Survival',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    classFeatures: [
      {
        name: 'Bardic Knowledge',
        level: 1,
        description:
          'This ability is identical to the bard class feature of the same name, and levels in this class stack with levels in any other class that grants a similar ability.',
        effects: [],
      },
      {
        name: 'Deep Pockets',
        level: 1,
        description:
          'A Pathfinder chronicler can carry far more gear than his frame should allow. He gains a +4 bonus on Strength checks to avoid being encumbered and a +4 bonus on Strength checks made to break or burst things. In addition, he can carry an additional 10 lbs. per class level before being encumbered.',
        effects: [],
      },
      {
        name: 'Master Scribe',
        level: 1,
        description:
          'A Pathfinder chronicler adds his class level as a bonus on all Linguistics skill checks, as well as Use Magic Device checks involving scrolls or other written magical items. A Pathfinder chronicler can make Linguistics checks to decipher text as a full-round action and can always take 10 on Linguistics and Profession (scribe) checks.',
        effects: [],
      },
      {
        name: 'Live to Tell the Tale',
        level: 2,
        description:
          'At 2nd level, once per day per two class levels, a Pathfinder chronicler can attempt a new saving throw against any ongoing condition against which she failed a saving throw in a previous round, even if the effect is normally permanent. This ability cannot be used against conditions that were the result of a critical hit.',
        effects: [],
      },
      {
        name: 'Pathfinding',
        level: 2,
        description:
          'Beginning at 2nd level, a Pathfinder chronicler develops an excellent sense of direction and skill at leading others through difficult terrain or past dangers. A Pathfinder chronicler gains a +5 bonus on Survival checks made to avoid becoming lost and to Intelligence checks to escape a maze spell. In addition, she always uses the "road or trail" overland movement modifier even when in trackless terrain.',
        effects: [],
      },
      {
        name: 'Improved Aid',
        level: 3,
        description:
          'Pathfinder chroniclers frequently serve as the primary support for their adventuring parties. At 3rd level, a Pathfinder chronicler using the aid another action grants a +4 bonus, rather than +2.',
        effects: [],
      },
      {
        name: 'Epic Tales',
        level: 4,
        description:
          "At 4th level, a Pathfinder chronicler may use her bardic knowledge bonus to inspire courage as a bard of her Pathfinder chronicler level. This has the same effect as the bard's inspire courage bardic performance ability. She can use this ability a number of rounds per day equal to her class level.",
        effects: [],
      },
      {
        name: 'Whispering Campaign',
        level: 5,
        description:
          'Pathfinder chroniclers trade in information and secrets. At 5th level, as a standard action, the Pathfinder chronicler may use her bardic knowledge bonus as a Diplomacy check to gather information. She can also use this ability to plant rumors through whispering campaigns.',
        effects: [],
      },
      {
        name: 'Inspired Action',
        level: 6,
        description:
          'At 6th level, as a standard action once per day, the Pathfinder chronicler may inspire a single ally within 30 feet to take an inspired action. The ally gets an extra standard action on his next turn. At 9th level, the chronicler can use this ability twice per day.',
        effects: [],
      },
      {
        name: 'Call Down the Legends',
        level: 7,
        description:
          'At 7th level, once per week, a Pathfinder chronicler can summon a number of legendary warriors as if using a summon monster spell (see the class description for full details). These summoned figures have abilities and statistics as described in the Pathfinder RPG.',
        effects: [],
      },
      {
        name: 'Greater Epic Tales',
        level: 8,
        description:
          "At 8th level, the Pathfinder chronicler's inspire courage ability grants a +2 morale bonus on saving throws against charm and fear effects and a +2 competence bonus on attack and weapon damage rolls. At 10th level, these bonuses increase to +3.",
        effects: [],
      },
      {
        name: 'Inspired Action (2/day)',
        level: 9,
        description: 'Inspired action can be used twice per day.',
        effects: [],
      },
      {
        name: 'Lay of the Exalted Dead',
        level: 10,
        description:
          'At 10th level, the Pathfinder chronicler can summon 1d4+1 legendary heroes as if using summon monster. These legends are more powerful, appearing as barbarian 12 or fighter 12 warriors. This ability can be used once per week in place of call down the legends.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    prerequisites: {
      bab: 3,
      skills: [
        { name: 'Linguistics', ranks: 5 },
        { name: 'Perform (oratory)', ranks: 5 },
        { name: 'Profession (scribe)', ranks: 5 },
      ],
    },
    source: 'Core Rulebook',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 10. Shadowdancer
  // ────────────────────────────────────────────────────────────────────────────
  {
    name: 'Shadowdancer',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 6,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Diplomacy',
      'Disguise',
      'Escape Artist',
      'Perception',
      'Perform',
      'Sleight of Hand',
      'Stealth',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [
      'Club',
      'Crossbow (hand)',
      'Dagger',
      'Dart',
      'Mace (light)',
      'Morningstar',
      'Quarterstaff',
      'Rapier',
      'Sap',
      'Shortbow',
      'Short sword',
    ],
    armorProficiencies: ['Light armor'],
    classFeatures: [
      {
        name: 'Hide in Plain Sight',
        level: 1,
        description:
          'A shadowdancer can use the Stealth skill even while being observed. As long as she is within 10 feet of an area of dim light, a shadowdancer can hide herself from view in the open without anything to actually hide behind. She cannot, however, hide in her own shadow.',
        effects: [],
      },
      {
        name: 'Evasion',
        level: 2,
        description:
          'At 2nd level, a shadowdancer gains evasion. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can only be used if the shadowdancer is wearing light armor or no armor. If she is helpless, she does not gain the benefit of evasion.',
        effects: [],
      },
      {
        name: 'Darkvision',
        level: 2,
        description:
          'At 2nd level, a shadowdancer gains darkvision out to 60 feet. If she already has darkvision, the range increases by 30 feet.',
        effects: [],
      },
      {
        name: 'Uncanny Dodge',
        level: 2,
        description:
          'At 2nd level, a shadowdancer cannot be caught flat-footed, even if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A shadowdancer with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action against her.',
        effects: [],
      },
      {
        name: 'Shadow Illusion',
        level: 3,
        description:
          "When a shadowdancer reaches 3rd level, she can create visual illusions. This ability functions as silent image and lasts 1 round per level. This ability's caster level equals the shadowdancer's class level. A shadowdancer can use this ability once per day at 3rd level, twice per day at 5th level, and three times per day at 7th level.",
        effects: [],
      },
      {
        name: 'Summon Shadow',
        level: 3,
        description:
          "At 3rd level, a shadowdancer can summon a shadow, an undead shade. The shadow is a companion to the shadowdancer and can communicate intelligibly with the shadowdancer. It has a number of hit points equal to half the shadowdancer's total. The shadow uses the shadowdancer's base attack bonus and base save bonuses. If a shadow companion is destroyed, or the shadowdancer chooses to dismiss it, the shadowdancer must attempt a DC 15 Fortitude save. If the saving throw fails, the shadowdancer gains one permanent negative level.",
        effects: [],
      },
      {
        name: 'Shadow Jump 40 ft.',
        level: 4,
        description:
          'At 4th level, a shadowdancer gains the ability to travel between shadows as if by means of a dimension door spell. The limitation is that the magical transport must begin and end in an area with at least some dim light. A shadowdancer can jump up to a total of 40 feet each day in this way; this may be split among many jumps, but each one, no matter how small, counts as a 10-foot increment. At 6th level, total distance increases to 80 feet. At 8th level it increases to 160 feet, and at 10th level to 320 feet.',
        effects: [],
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 4,
        description:
          'A shadowdancer of 4th level or higher can no longer be flanked. This defense denies another character the ability to sneak attack the shadowdancer by flanking her, unless the attacker has at least four more levels in a class that grants sneak attack than the target has shadowdancer levels.',
        effects: [],
      },
      {
        name: 'Defensive Roll',
        level: 5,
        description:
          'Starting at 5th level, once per day, a shadowdancer can attempt to avoid a lethal blow. Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the shadowdancer can attempt to roll with the damage. To use this ability, the shadowdancer must attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half damage from the blow.',
        effects: [],
      },
      {
        name: 'Shadow Jump 80 ft.',
        level: 6,
        description: 'Shadow jump total distance increases to 80 feet per day.',
        effects: [],
      },
      {
        name: 'Improved Evasion',
        level: 7,
        description:
          'This ability works like evasion, except that while the shadowdancer still takes no damage on a successful Reflex saving throw against area attacks, she henceforth takes only half damage on a failed save.',
        effects: [],
      },
      {
        name: 'Shadow Power',
        level: 7,
        description:
          "At 7th level, the shadowdancer can use raw shadow to damage her foes. This ability functions as shadow evocation, using the shadowdancer's class level as the caster level. A shadowdancer can use this ability once per day at 7th level, and one additional time per day at 9th level.",
        effects: [],
      },
      {
        name: 'Shadow Jump 160 ft.',
        level: 8,
        description: 'Shadow jump total distance increases to 160 feet per day.',
        effects: [],
      },
      {
        name: 'Shadow Call',
        level: 8,
        description:
          "At 8th level, a shadowdancer can create creatures and effects out of raw shadow. This ability functions as shadow conjuration, using the shadowdancer's class level as the caster level. A shadowdancer can use this ability once per day at 8th level, and one additional time per day at 10th level.",
        effects: [],
      },
      {
        name: 'Shadow Master',
        level: 10,
        description:
          'At 10th level, whenever a shadowdancer is in an area of dim light, she gains damage reduction 10/— and a +2 luck bonus on all saving throws. In addition, whenever she successfully scores a critical hit against a foe who is in an area of dim light, that foe is blinded for 1d6 rounds.',
        effects: [],
      },
      {
        name: 'Shadow Jump 320 ft.',
        level: 10,
        description: 'Shadow jump total distance increases to 320 feet per day.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    prerequisites: {
      bab: 3,
      skills: [
        { name: 'Stealth', ranks: 5 },
        { name: 'Perform (dance)', ranks: 5 },
      ],
      feats: ['Combat Reflexes', 'Dodge', 'Mobility'],
    },
    source: 'Core Rulebook',
  },
];
