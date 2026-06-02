// Prestige Classes — Advanced Player's Guide (8 classes)
// Source: https://www.d20pfsrd.com/classes/prestige-classes/apg/

import { BABProgression, SaveProgression } from '@/types/base';
import { ExpandedClassData } from './types';

export const PRESTIGE_CLASSES_APG: ExpandedClassData[] = [
  // ─── BATTLE HERALD ──────────────────────────────────────────────────────────
  {
    name: 'Battle Herald',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Bluff',
      'Craft',
      'Diplomacy',
      'Handle Animal',
      'Heal',
      'Intimidate',
      'Knowledge (engineering)',
      'Knowledge (history)',
      'Knowledge (local)',
      'Knowledge (nobility)',
      'Perception',
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
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 4,
      skills: [
        { name: 'Diplomacy', ranks: 5 },
        { name: 'Intimidate', ranks: 5 },
      ],
      special: [
        'Cha 13',
        '5 ranks in Knowledge (history) or Knowledge (nobility)',
        'Proficiency with heavy armor',
        'Challenge class feature',
        'Inspire courage bardic performance class feature',
      ],
    },
    classFeatures: [
      {
        name: 'Inspiring Command',
        level: 1,
        description:
          'A battle herald uses her keen tactical acumen and force of personality to inspire her allies to victory. As a swift action, she can use this ability to grant a teamwork feat she knows to all allies within 60 feet who can see and hear her. Allies retain the use of this bonus feat for 1 round plus 1 round for every two battle herald levels. Allies do not need to meet the prerequisites of these bonus feats. The battle herald can use this ability a number of times per day equal to 3 + her Charisma modifier.',
      },
      {
        name: 'Voice of Authority',
        level: 1,
        description:
          'A battle herald is skilled at shouting commands over the din of battle. She gains a bonus equal to her class level on Diplomacy and Intimidate checks to influence creatures within 30 feet. She can use Intimidate to influence creatures that normally cannot be demoralized (such as mindless undead) by channeling the righteous fury of her allies.',
      },
      {
        name: 'Easy March',
        level: 2,
        description:
          "At 2nd level, allies within 60 feet of the battle herald can hustle or make a forced march without ill effect for a number of hours per day equal to 1 plus the battle herald's Charisma bonus (if any).",
      },
      {
        name: 'Inspiring Command',
        level: 4,
        description:
          'At 4th level and every three levels thereafter, the battle herald learns an additional inspiring command, chosen from the following list: battle magic, inspire hardiness, inspire resilience, keep your heads, none shall fall, pincer maneuver, rally, reveille, scatter, shake it off, sound the charge, sound the retreat, stand firm, teamwork, tuck and roll.',
      },
      {
        name: 'Inspiring Command (multiple)',
        level: 6,
        description:
          'At 6th level, a battle herald can have two inspiring commands active at the same time. At 12th level (by combining levels in other classes), she may have three active simultaneously.',
      },
      {
        name: 'Persistent Commands',
        level: 8,
        description:
          "At 8th level, a battle herald's inspiring commands persist even if she is incapacitated and unable to maintain them. If the battle herald is killed or otherwise unable to maintain her inspiring commands, they continue for a number of rounds equal to her Charisma modifier (minimum 1).",
      },
      {
        name: 'Inspire Last Stand',
        level: 9,
        description:
          'At 9th level, a battle herald can inspire her allies to fight on even in the face of certain death. When using this inspiring command, allies within 30 feet who are reduced below 0 hit points are not knocked unconscious and may continue to fight as if disabled (though they still die at their negative Constitution score). This ability has no effect on creatures that are killed outright by an attack.',
      },
      {
        name: 'Complex Commands',
        level: 10,
        description:
          'At 10th level, a battle herald can issue complex commands that allow her to use two different inspiring commands simultaneously, each with its own effect. She can maintain both commands as a single swift action. She can use this ability a number of times per day equal to her Charisma modifier (minimum 1).',
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    source: "Advanced Player's Guide",
  },

  // ─── HOLY VINDICATOR ────────────────────────────────────────────────────────
  {
    name: 'Holy Vindicator',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 2,
    classSkills: [
      'Climb',
      'Heal',
      'Intimidate',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Ride',
      'Sense Motive',
      'Spellcraft',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 5,
      skills: [{ name: 'Knowledge (religion)', ranks: 5 }],
      special: [
        'Alignment channel or elemental channel class feature',
        'Channel energy class feature',
      ],
    },
    classFeatures: [
      {
        name: "Vindicator's Shield",
        level: 1,
        description:
          "A holy vindicator can channel energy into his shield, causing it to shimmer with divine power. Whenever the vindicator channels energy, he can choose to imbue his shield with the energy. If he channels positive energy, the shield grants a +1 sacred bonus to AC for a number of rounds equal to 1 + the vindicator's Charisma modifier. If he channels negative energy, the shield instead grants a +1 profane bonus to AC for the same duration. This bonus increases by +1 for every four holy vindicator levels beyond 1st (to a maximum of +3 at 9th level).",
      },
      {
        name: 'Stigmata',
        level: 2,
        description:
          'A holy vindicator willingly gives his blood in service to his faith, and is marked by stigmata on his hands, feet, and brow. As a swift action, the vindicator can cause his stigmata to bleed, dealing 1 point of bleed damage to himself. While his stigmata are bleeding, the vindicator gains a sacred (or profane, if he channels negative energy) bonus equal to half his class level (minimum +1) on attack rolls, weapon damage rolls, Intimidate checks, and saving throws against effects that target his hit points. The vindicator can stop the bleeding as a free action.',
      },
      {
        name: 'Spellcasting',
        level: 2,
        description:
          'At each level after 1st, the holy vindicator gains new spells per day as if he had also gained a level in a divine spellcasting class he belonged to before adding the prestige class. He does not gain other benefits a character of that class would have gained, except for additional spells per day, spells known (if a spontaneous caster), and an increased effective level of spellcasting. If a character had more than one divine spellcasting class before becoming a holy vindicator, he must decide to which class he adds the new level for purposes of determining spells per day.',
      },
      {
        name: 'Faith Healing',
        level: 3,
        description:
          "At 3rd level, any cure wounds spells a holy vindicator casts on himself are automatically empowered as if by the Empower Spell feat, except they do not use a higher spell slot or take longer to cast. If the vindicator targets himself with a cure spell that also heals others, this ability only applies to the vindicator's own healing.",
      },
      {
        name: 'Channel Energy',
        level: 4,
        description:
          "Starting at 4th level, a holy vindicator's class level stacks with levels in any other class that grants the channel energy ability.",
      },
      {
        name: 'Divine Wrath',
        level: 5,
        description:
          "At 5th level, while the holy vindicator's stigmata are bleeding, his melee attacks deal an additional 1d6 points of divine energy damage (positive energy if the vindicator channels positive energy, negative energy if the vindicator channels negative energy). This additional damage increases to 2d6 at 9th level.",
      },
      {
        name: 'Bloodfire',
        level: 6,
        description:
          'At 6th level, while his stigmata are bleeding, a holy vindicator gains a +2 bonus on saves against fire effects and reduces any fire damage taken by an amount equal to his class level. He can touch a weapon as a standard action to grant it the flaming special ability for 1 round per class level.',
      },
      {
        name: 'Channel Energy (improved)',
        level: 7,
        description:
          "At 7th level, the vindicator's channel energy increases in power. The bonus from the Vindicator's Shield ability also increases to +2.",
      },
      {
        name: 'Bloodrain',
        level: 8,
        description:
          "At 8th level, while his stigmata are bleeding, the holy vindicator's blood flows copiously. As a free action, the vindicator can fling his blood in an arc at a single target within 30 feet. This functions as a ranged touch attack that deals damage equal to the vindicator's channel energy damage. This is a supernatural ability.",
      },
      {
        name: 'Divine Retribution',
        level: 10,
        description:
          'At 10th level, when a holy vindicator confirms a critical hit, he can channel energy through the weapon to deal extra damage equal to his channel energy damage, in addition to normal critical hit damage. This damage is not multiplied by the critical hit.',
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'divine',
      atLevels: [2, 3, 4, 6, 7, 8, 10],
    },
    source: "Advanced Player's Guide",
  },

  // ─── HORIZON WALKER ─────────────────────────────────────────────────────────
  {
    name: 'Horizon Walker',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 6,
    classSkills: [
      'Climb',
      'Diplomacy',
      'Handle Animal',
      'Knowledge (geography)',
      'Knowledge (nature)',
      'Knowledge (planes)',
      'Linguistics',
      'Perception',
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
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      skills: [{ name: 'Knowledge (geography)', ranks: 6 }],
      feats: ['Endurance'],
    },
    classFeatures: [
      {
        name: 'Favored Terrain',
        level: 1,
        description:
          'At 1st level, a horizon walker may select a favored terrain from the ranger favored terrain list (including the expanded list of terrains such as Astral Plane, Ethereal Plane, and various Outer Planes). This functions exactly as the ranger class feature of the same name, except that the horizon walker may also select planar terrains. The horizon walker gains an additional favored terrain at 3rd, 5th, 7th, and 9th level, and he can increase the bonus for an existing favored terrain as described in the ranger ability.',
      },
      {
        name: 'Terrain Mastery',
        level: 3,
        description:
          'At 3rd level, a horizon walker selects a terrain mastery from his list of favored terrains. He gains a unique benefit tied to that terrain. For example, Astral Plane grants dimension door as a spell-like ability once per day; Desert grants immunity to exhaustion and treats severe heat as very hot; Mountain grants an immunity to altitude sickness and a +1 bonus on attack and damage rolls against creatures on higher ground. The horizon walker gains an additional terrain mastery at 5th, 7th, and 9th level.',
      },
      {
        name: 'Terrain Dominance',
        level: 6,
        id: 'terrain-dominance',
        activationMode: 'toggle',
        shortDescription:
          'Terrain-based spell-like ability (1/day or at will, depends on terrain chosen)',
        description:
          'At 6th level, a horizon walker selects a terrain dominance from his list of favored terrains that he has already selected for terrain mastery. He gains spell-like abilities and additional powers associated with that terrain. For example, Cold grants wall of ice 1/day; Forest grants hallucinatory terrain 1/day; Underground grants spider climb at will. The horizon walker gains an additional terrain dominance at 8th and 10th level.',
      },
      {
        name: 'Master of All Lands',
        level: 10,
        description:
          'At 10th level, a horizon walker becomes a true master of terrain. He treats all terrains as favored terrains with a minimum bonus of +2. He can take 10 on any Knowledge (geography) or Survival check, even when rushed or threatened.',
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    source: "Advanced Player's Guide",
  },

  // ─── MASTER CHYMIST ─────────────────────────────────────────────────────────
  {
    name: 'Master Chymist',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 2,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft (alchemy)',
      'Disguise',
      'Escape Artist',
      'Fly',
      'Intimidate',
      'Knowledge (arcana)',
      'Perception',
      'Sense Motive',
      'Stealth',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      skills: [{ name: 'Craft (alchemy)', ranks: 2 }],
      feats: ['Brew Potion'],
      spellcasting: 'Ability to create 2nd-level extracts',
      special: ['Mutagen class feature'],
    },
    classFeatures: [
      {
        name: 'Bomb-Thrower',
        level: 1,
        description:
          "A master chymist's class levels stack with alchemist levels for determining the damage dealt by his bombs.",
      },
      {
        name: 'Mutagenic Form',
        level: 1,
        description:
          "A master chymist's mutagen form becomes more pronounced. When the master chymist assumes his mutagenic form, he gains an additional ability chosen from the following list: disguise (gains a +4 bonus on Disguise checks to appear as a different creature), evasion (gains evasion as the rogue ability), feral mutagen (gains two claw attacks and a bite attack), growth mutagen (size increases by one step), night vision (gains darkvision 60 ft), or nimble (gains a +2 alchemical bonus to Dexterity). He selects an additional mutagenic form ability at 3rd, 5th, 7th, and 9th level.",
      },
      {
        name: 'Mutagen (stacks)',
        level: 1,
        description:
          "A master chymist's class levels stack with alchemist levels for determining the duration and effect of his mutagen.",
      },
      {
        name: 'Spellcasting',
        level: 2,
        description:
          'At each level after 1st, a master chymist gains new extract slots per day as if he had also gained a level in alchemist. He does not gain other benefits a character of that class would have gained except for extracts per day and an increased effective caster level for extracts.',
      },
      {
        name: 'Advanced Mutagen',
        level: 4,
        description:
          'At 4th level, a master chymist adds the following abilities to the list of mutagenic form abilities he can select: burly (gains a +4 alchemical bonus to Strength), extended mutagen (duration of mutagen doubles), restoring change (heals 1d6 hit points per class level when changing to or from mutagenic form), and swift alchemy (gains the swift alchemy alchemist discovery).',
      },
      {
        name: 'Brutality',
        level: 6,
        description:
          'At 6th level, a master chymist in his mutagenic form gains a +2 bonus on Intimidate checks and a +2 alchemical bonus on damage rolls with natural attacks.',
      },
      {
        name: 'Growth Mutagen',
        level: 8,
        description:
          'At 8th level, a master chymist adds the following abilities to the list of mutagenic form abilities: grand mutagen (as the alchemist grand discovery, but only for the mutagenic form), and greater brutality (the bonus from brutality increases to +4).',
      },
      {
        name: 'Mutate',
        level: 10,
        description:
          'At 10th level, a master chymist can assume his mutagenic form as a swift action and can end it as a free action. He can change between forms a number of times per day equal to his master chymist level.',
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    source: "Advanced Player's Guide",
  },

  // ─── MASTER SPY ─────────────────────────────────────────────────────────────
  {
    name: 'Master Spy',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 6,
    classSkills: [
      'Bluff',
      'Diplomacy',
      'Disable Device',
      'Disguise',
      'Escape Artist',
      'Knowledge (arcana)',
      'Knowledge (local)',
      'Knowledge (nobility)',
      'Knowledge (religion)',
      'Linguistics',
      'Perception',
      'Sense Motive',
      'Sleight of Hand',
      'Stealth',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Hand crossbow', 'Rapier', 'Sap', 'Shortbow', 'Short sword'],
    armorProficiencies: ['Light armor'],
    prerequisites: {
      skills: [
        { name: 'Bluff', ranks: 7 },
        { name: 'Disguise', ranks: 7 },
        { name: 'Perception', ranks: 7 },
        { name: 'Sense Motive', ranks: 7 },
      ],
    },
    classFeatures: [
      {
        name: 'Art of Deception',
        level: 1,
        description:
          'A master spy adds her class level to all Bluff, Disguise, and Sense Motive checks.',
      },
      {
        name: 'Sneak Attack +1d6',
        level: 1,
        description:
          'At 1st level, a master spy gains sneak attack +1d6. This is exactly like the rogue ability of the same name. The extra damage dealt increases by +1d6 at 3rd level and again at 7th level. If a master spy gets a sneak attack bonus from another source, the bonuses on damage stack.',
      },
      {
        name: 'Master of Disguise',
        level: 1,
        description:
          'A master spy can create a disguise in half the time normally required. In addition, any penalties from disguising herself as a different gender, race, age category, or size are reduced by 1.',
      },
      {
        name: 'Mask Alignment',
        level: 2,
        description:
          'A master spy of 2nd level or higher can alter her aura to deceive spells that discern alignment (such as detect evil). She may choose to detect as any specific alignment, or as no alignment at all. This ability is a standard action and lasts until she changes it or is rendered unconscious or dead.',
      },
      {
        name: 'Glib Lie',
        level: 2,
        description:
          "At 2nd level, a master spy can deceive truth-detecting magic. A creature using this sort of magic against the spy must succeed on a caster level check against a DC of 15 + the master spy's class level to succeed (as if she were under the effect of a glibness spell); failure means the magic fails to detect the spy's lies or forces her to speak only the truth.",
      },
      {
        name: 'Sneak Attack +2d6',
        level: 3,
        description: "At 3rd level, the master spy's sneak attack damage increases to +2d6.",
      },
      {
        name: 'Concealed Thoughts',
        level: 3,
        description:
          'At 3rd level, a master spy becomes resistant to mind-reading and divination. She gains a +2 bonus on all saving throws against divination spells and effects and on opposed Bluff checks against Sense Motive. This bonus increases to +4 at 9th level.',
      },
      {
        name: 'Quick Change',
        level: 4,
        description:
          'Starting at 4th level, a master spy can assume a disguise in only 2d4 rounds by taking a -10 penalty on her Disguise check. This penalty drops to -5 at 8th level.',
      },
      {
        name: 'Elude Detection',
        level: 5,
        description:
          "At 5th level, a master spy can bypass divination spells and effects that would normally detect her, such as detect evil, see invisibility, and discern lies. To detect the spy, the caster must succeed on a caster level check (DC 20 + the master spy's class level).",
      },
      {
        name: 'Slippery Mind',
        level: 6,
        description:
          'At 6th level, a master spy gains the slippery mind ability, as the rogue advanced talent of the same name. If she already has slippery mind, she adds her class level to the Will save when retrying the save.',
      },
      {
        name: 'Sneak Attack +3d6',
        level: 7,
        description: "At 7th level, the master spy's sneak attack damage increases to +3d6.",
      },
      {
        name: 'Shift Alignment',
        level: 7,
        description:
          "At 7th level, a master spy's alignment actually shifts when she uses her mask alignment ability. She is treated as that alignment for all effects and spells, not merely detection. This adjustment is a supernatural ability and remains until the master spy changes it or is rendered unconscious or dead.",
      },
      {
        name: 'Death Attack',
        level: 8,
        description:
          "At 8th level, a master spy gains the death attack ability. This functions as the assassin ability of the same name, using the master spy's class level as her assassin level. The save DC is equal to 10 + the master spy's class level + the master spy's Intelligence modifier.",
      },
      {
        name: 'Assumption',
        level: 10,
        description:
          "The ultimate ability of a master spy is to take over another creature's identity. As a full-round action, the master spy can touch a helpless creature and learn everything about it, including its habits, voice, mannerisms, and all of its memories. She can then perfectly impersonate that creature, gaining a +20 bonus on Disguise checks made to impersonate that specific creature. The master spy can only maintain one assumed identity at a time.",
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    source: "Advanced Player's Guide",
  },

  // ─── NATURE WARDEN ──────────────────────────────────────────────────────────
  {
    name: 'Nature Warden',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Climb',
      'Handle Animal',
      'Heal',
      'Knowledge (geography)',
      'Knowledge (nature)',
      'Perception',
      'Ride',
      'Sense Motive',
      'Survival',
      'Swim',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      skills: [
        { name: 'Knowledge (geography)', ranks: 3 },
        { name: 'Knowledge (nature)', ranks: 3 },
      ],
      spellcasting: 'Ability to cast 2nd-level divine spells',
      special: [
        'Animal companion class feature',
        'Favored terrain class feature',
        'Wild empathy class feature',
      ],
    },
    classFeatures: [
      {
        name: 'Companion Bond',
        level: 1,
        description:
          "At 1st level, a nature warden's class levels stack with all other class levels that grant an animal companion for the purpose of determining the companion's abilities. The nature warden and her animal companion share an empathic link, like that between a wizard and his familiar. The nature warden can communicate with her companion as a free action, as if using speak with animals.",
      },
      {
        name: 'Mystic Harmony',
        level: 1,
        description:
          'A nature warden gains a +1 bonus on all saving throws when within any of her favored terrains. This bonus increases by +1 for every four nature warden levels gained (to a maximum of +3 at 9th level).',
      },
      {
        name: 'Spellcasting',
        level: 1,
        description:
          'At each level, the nature warden gains new spells per day as if she had also gained a level in a divine spellcasting class she belonged to before adding the prestige class. She does not gain other benefits a character of that class would have gained, except for additional spells per day, spells known (if a spontaneous caster), and an increased effective level of spellcasting. If a character had more than one divine spellcasting class before becoming a nature warden, she must decide to which class she adds the new level for purposes of determining spells per day.',
      },
      {
        name: 'Companion Walk',
        level: 2,
        description:
          "At 2nd level, a nature warden and her animal companion gain the benefit of the Woodland Stride class feature in all of the nature warden's favored terrains.",
      },
      {
        name: 'Survivalist',
        level: 3,
        description:
          'At 3rd level, a nature warden adds her class level as a bonus on all Survival checks. She can always take 10 on Survival checks, even while threatened or distracted.',
      },
      {
        name: 'Favored Terrain',
        level: 4,
        description:
          'At 4th level and again at 8th level, a nature warden may select an additional favored terrain. She can also increase the bonus for an existing favored terrain by +2. This stacks with the ranger favored terrain ability.',
      },
      {
        name: 'Silverclaw',
        level: 5,
        description:
          "At 5th level, a nature warden's animal companion's natural attacks count as silver for the purpose of overcoming damage reduction. At 10th level, they also count as cold iron.",
      },
      {
        name: 'Woodforging',
        level: 6,
        description:
          'At 6th level, a nature warden can craft items from wood as if using the Wood Shape spell. She can create wooden items that have the hardness and hit points of steel equivalents. Such items last for 1 day per class level before reverting to ordinary wood. This is a spell-like ability usable at will.',
      },
      {
        name: 'Companion Soul',
        level: 7,
        description:
          "At 7th level, if the nature warden's animal companion is killed, she can revive it with a 24-hour ritual. The companion returns to life as if raised by a raise dead spell, with no level penalty or Constitution loss. The nature warden must be in one of her favored terrains to perform this ritual.",
      },
      {
        name: 'Guarded Lands',
        level: 10,
        description:
          'At 10th level, a nature warden can designate an area within one of her favored terrains as guarded lands. This area can be up to 1 mile in radius per class level. Within this area, the nature warden is immediately aware of any intruders. She and her animal companion gain a +2 bonus on all attack rolls, saving throws, and skill checks while within the guarded lands. She can change the designated area once per day.',
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'divine',
      atLevels: [2, 3, 4, 6, 7, 8, 10],
    },
    source: "Advanced Player's Guide",
  },

  // ─── RAGE PROPHET ───────────────────────────────────────────────────────────
  {
    name: 'Rage Prophet',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Climb',
      'Heal',
      'Intimidate',
      'Knowledge (history)',
      'Knowledge (nature)',
      'Knowledge (religion)',
      'Sense Motive',
      'Spellcraft',
      'Swim',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      skills: [{ name: 'Knowledge (religion)', ranks: 5 }],
      special: ['Oracle mystery class feature', 'Rage class feature'],
    },
    classFeatures: [
      {
        name: 'Savage Seer',
        level: 1,
        description:
          "A rage prophet's class levels stack with barbarian levels for determining the duration of his rage. They also stack with oracle levels for determining the effects of oracle revelations and his oracle's curse. This does not grant additional abilities.",
      },
      {
        name: 'Spirit Guide',
        level: 1,
        description:
          'Every rage prophet possesses a spirit guide, an invisible spirit that speaks to him through strange portents and visions. While in a rage, the rage prophet can cast a single oracle spell of 2nd level or lower as if he were not raging. He can use this ability a number of times per day equal to 3 + his Charisma modifier.',
      },
      {
        name: 'Spellcasting',
        level: 2,
        description:
          'At 2nd through 5th level and 7th through 10th level, a rage prophet gains new spells per day as if he had also gained a level in oracle. He does not gain other benefits a character of that class would have gained except for additional spells per day, spells known, and an increased effective level of spellcasting. If a character had more than one spontaneous divine spellcasting class before becoming a rage prophet, he must decide to which class he adds the new level for purposes of determining spells per day.',
      },
      {
        name: 'Rage Prophet Mystery',
        level: 3,
        description:
          "At 3rd level, a rage prophet gains access to the following rage prophet revelations, which count as oracle revelations for all purposes: Caster's Fury, Mystic Danger Sense, Raging Healer, Spirit Warrior, and War Sight. The rage prophet can select these revelations through the oracle revelation class feature.",
      },
      {
        name: 'Raging Healer',
        level: 4,
        description:
          'At 4th level, a rage prophet is able to cast cure spells on himself while raging, without needing to use his spirit guide ability.',
      },
      {
        name: 'Vision Quest',
        level: 5,
        description:
          'At 5th level, a rage prophet can enter a trance as a full-round action, gaining the benefits of the divination spell using his oracle level as the caster level. He can use this ability once per day. He must be able to rage to use this ability (though he need not actually be raging at the time).',
      },
      {
        name: 'Spirit Guardian',
        level: 6,
        description:
          "At 6th level, the rage prophet's spirit guide becomes more powerful. While raging, the spirit guide protects the rage prophet from harm, granting him a +2 deflection bonus to AC and a +2 resistance bonus on saving throws.",
      },
      {
        name: 'Enduring Rage',
        level: 7,
        description:
          'At 7th level, when a rage prophet enters a rage, he can choose to extend the duration of the rage by 4 rounds. He can use this ability once per day, plus one additional time per day at 10th level.',
      },
      {
        name: 'Rage Prophet',
        level: 8,
        description:
          'At 8th level, while raging, a rage prophet can cast any known oracle spell of 3rd level or lower without needing to use his spirit guide ability.',
      },
      {
        name: 'Greater Rage',
        level: 9,
        description:
          'At 9th level, when a rage prophet enters a rage, his morale bonus to Strength and Constitution increases to +6 and his morale bonus on Will saves increases to +3.',
      },
      {
        name: 'Manifestation',
        level: 10,
        description:
          "At 10th level, a rage prophet's spirit guide manifests in physical form. While raging, the spirit guide becomes visible as a ghostly companion. The prophet gains the benefits of death ward and freedom of movement while raging. In addition, his spirit guide can deliver touch spells for him, using the rage prophet's melee attack bonus.",
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'divine',
      atLevels: [2, 3, 4, 6, 7, 9, 10],
    },
    source: "Advanced Player's Guide",
  },

  // ─── STALWART DEFENDER ──────────────────────────────────────────────────────
  {
    name: 'Stalwart Defender',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 12,
    skillRanksPerLevel: 2,
    classSkills: ['Acrobatics', 'Climb', 'Intimidate', 'Perception', 'Sense Motive', 'Swim'],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 7,
      feats: ['Dodge', 'Endurance', 'Toughness'],
    },
    classFeatures: [
      {
        name: 'Defensive Stance',
        level: 1,
        description:
          'At 1st level, a stalwart defender can enter a defensive stance, a position of readiness and trance-like determination. A stalwart defender can maintain this stance for a number of rounds per day equal to 4 + his Constitution modifier. At each level after 1st, he can maintain the stance for 2 additional rounds per day. While in a defensive stance, the stalwart defender gains a +2 dodge bonus to AC, a +4 morale bonus to Strength, a +4 morale bonus to Constitution, and a +2 morale bonus on Will saving throws. The increase to Constitution grants the defender 2 hit points per Hit Die, but these hit points disappear when the defensive stance ends. While in a defensive stance, a stalwart defender cannot willingly move from his current position through any means (including normal movement, riding a mount, teleportation, or being comboed by an ally). Starting or ending a defensive stance is a free action.',
      },
      {
        name: 'Defensive Powers',
        level: 2,
        description:
          'As a stalwart defender gains levels, he augments his defensive stance. Starting at 2nd level, the stalwart defender gains a defensive power. He gains another defensive power for every two levels of stalwart defender attained after 2nd level (4th, 6th, 8th, and 10th). Each power can only be chosen once. Defensive powers include: bulwark, clear mind, fearless defense, halting blow, immobile, increased damage reduction, intercept, internal fortitude, mighty resilience, renewed defense, roused defense, smash, unexpected strike.',
      },
      {
        name: 'Uncanny Dodge',
        level: 3,
        description:
          'At 3rd level, a stalwart defender gains the ability to react to danger before his senses would normally allow him to do so. He cannot be caught flat-footed, nor does he lose his Dex bonus to AC if the attacker is invisible. He still loses his Dexterity bonus to AC if immobilized. A stalwart defender with this ability can still lose his Dexterity bonus to AC if an opponent successfully uses the feint action against him. If a stalwart defender already has uncanny dodge from a different class, he automatically gains improved uncanny dodge instead.',
      },
      {
        name: 'New Trap Sense',
        level: 5,
        description:
          'At 5th level, a stalwart defender gains trap sense +1, gaining a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses increase by +1 at 9th level. Trap sense bonuses gained from multiple classes stack.',
      },
      {
        name: 'Damage Reduction',
        level: 5,
        description:
          'At 5th level, a stalwart defender gains DR 1/—. At 7th level, this improves to DR 3/—. At 10th level, it increases to DR 5/—.',
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 7,
        description:
          'At 7th level, a stalwart defender can no longer be flanked. This defense denies a rogue the ability to sneak attack the stalwart defender by flanking him, unless the attacker has at least four more rogue levels than the target has stalwart defender levels. If a character already has uncanny dodge from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.',
      },
      {
        name: 'Mobile Defense',
        level: 9,
        description:
          'At 9th level, a stalwart defender can adjust his position while maintaining a defensive stance. While in a defensive stance, he can take one 5-foot step each round without losing the benefit of the stance.',
      },
      {
        name: 'Last Word',
        level: 10,
        description:
          'At 10th level, once per day, a stalwart defender can make one melee attack against a creature that has just confirmed a critical hit against him as an immediate action. The defender can use this ability even if the critical hit kills him. If the attack hits, the defender adds his stalwart defender level to the damage dealt.',
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    source: "Advanced Player's Guide",
  },
];
