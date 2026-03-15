// Batch 008 | first: 'Fleshdoll (CR 1/2*)' | last: 'Grandmaster Creature (CR +4)' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_008: TemplateDefinition[] = [
  // 176. Fleshdoll (CR 1/2*)
  {
    id: 'fleshdoll',
    name: 'Fleshdoll',
    description:
      'A small, animate doll-like construct-undead hybrid created from a living creature. The base creature is reduced to Small size and loses most of its original power, gaining dual construct and undead traits. CR is halved from the base creature.',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    typeChange: 'construct and undead (dual types)',
    sizeChange: -1,
    abilityScoreChanges: [
      { ability: 'STR', change: -10, minimum: 8 },
      { ability: 'DEX', change: 4 },
    ],
    abilityScoreChangeNote: 'Constitution score is removed (constructs have no Con score).',
    naturalArmorChange: 0,
    immunities: ['all construct immunities', 'all undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Halved Speed',
        description:
          "The fleshdoll's movement speed is halved from the base creature's (minimum 5 ft.).",
      },
      {
        scalingType: 'flat',
        name: 'Halved Base Attack Bonus',
        description: "The fleshdoll's base attack bonus is halved from the base creature's.",
      },
      {
        scalingType: 'flat',
        name: 'Oversized Weapon Strikes',
        description:
          'The fleshdoll treats wielded weapons as two size categories larger for determining damage, but is limited to one weapon attack per turn.',
      },
      {
        scalingType: 'flat',
        name: 'Somatic Spell Limitation',
        description:
          'Casting spells with somatic components requires a DC 25 Use Magic Item check; all other aspects of spellcasting function normally.',
      },
      {
        scalingType: 'flat',
        name: 'Supernatural Voice',
        description:
          "The fleshdoll's voice projects supernaturally with a high-pitched, hollow, squeaky quality.",
      },
      {
        scalingType: 'flat',
        name: 'Reduced Hit Points',
        description:
          'Loses 3 HP per HD (minimum 1 total); gains no construct size bonuses to hit points; heals as undead (damaged by positive energy, healed by negative energy).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'AAW Games',
      publication: 'Aventyr Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 177. Fleshwarped (CR +1)
  {
    id: 'fleshwarped',
    name: 'Fleshwarped',
    description:
      'A living creature subjected to the alchemical and magical torture of fleshwarping, resulting in grotesque physical mutation. The process grants one major enhancement and one special ability chosen by the creator, at the cost of painful disfigurement.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Creator must have the Fleshwarper feat; subject must survive a DC 15 Fortitude save during initial fluid infusion or die' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4, condition: 'or +4 to any one other ability score chosen by creator' },
    ],
    abilityScoreChangeNote:
      '+4 to one ability score and -4 to two other ability scores, all chosen by the creator. The +4 bonus is typically applied to a physical ability score.',
    features: [
      {
        scalingType: 'flat',
        name: 'Fleshwarped Special Ability',
        description:
          'Gains a single special attack, defense, or quality chosen by its creator — typically a physical ability such as +2 to natural armor, a new natural attack (bite or tentacle), a new movement mode, a new sense, or an ability such as a breath weapon, ferocity, or grab.',
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonus',
        description:
          'Gains a +4 racial bonus on any one Strength- or Dexterity-based skill, as chosen by its creator.',
      },
      {
        scalingType: 'flat',
        name: 'Fleshwarping Trauma',
        description:
          'Upon completion of the process the subject takes 2d6 Constitution damage (a DC 25 Heal check reduces this to 1d6). Creation takes 1 or more days equal to the final creature\'s CR.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Inner Sea Magic',
    },
    visibility: 'global',
    rev: 1,
  },

  // 178. Fleshwarped Creature (CR +1) [simple template]
  {
    id: 'fleshwarped-creature',
    name: 'Fleshwarped Creature',
    description:
      'A corporeal living creature that has undergone a simplified fleshwarping process, emerging with enhanced physical might and resilience at the cost of mental capacity, as well as a new movement mode.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'special', description: 'Can only be applied to corporeal living creatures' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: -4 },
      { ability: 'CHA', change: -4 },
    ],
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Physical Combat',
        description:
          '+2 bonus on attack rolls, damage rolls, AC, and CMD. Gains +2 HP per HD. Gains +2 bonus on Strength- and Dexterity-based rolls; -2 on Intelligence- and Charisma-based rolls.',
      },
      {
        scalingType: 'flat',
        name: 'New Movement Mode',
        description:
          'Gains one new movement mode (climb, burrow, fly [clumsy], or swim) at 30 ft. speed.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    visibility: 'global',
    rev: 1,
  },

  // 179. Floodslain Creature (CR +1)
  {
    id: 'floodslain-creature',
    name: 'Floodslain Creature',
    description:
      'The undead remnant of a creature killed in a catastrophic flood, animated by the echoes of the disaster that claimed it. The creature is perpetually surrounded by a spectral manifestation of rushing water.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead (augmented)',
    typeChangeNote: 'Do not recalculate class BAB or saves.',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: -2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2, minimum: 14 },
    ],
    abilityScoreChangeNote: 'Constitution score is removed (undead).',
    naturalArmorChange: 2,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'magic' },
    resistances: [{ energyType: 'cold', value: 10 }],
    immunities: ['standard undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +2',
        description: 'Gains a +2 bonus to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Flash Flood (Su)',
        description:
          'A floodslain creature is constantly surrounded by an echo of the disaster that killed it, rendering the ground slick and muddy in its vicinity. This increases the DC of Acrobatics checks by 5 within the affected area.',
      },
      {
        scalingType: 'flat',
        name: 'Swim Speed',
        description: 'Gains a swim speed of 30 feet if it did not already possess one.',
      },
      {
        scalingType: 'flat',
        name: 'Drowning Touch (Su)',
        description:
          'A slam attack delivers water into the victim\'s lungs. A failed Fortitude save causes the target to progress from fatigued to exhausted, and potentially to death.',
      },
      {
        scalingType: 'flat',
        name: 'Panic (Su)',
        description:
          'As a standard action, the floodslain creature can induce fear; targets must succeed at a Will saving throw or become shaken for 1d6 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Crashing Waters (Su)',
        description:
          'Once per day, the creature can charge at triple speed and attempt a bull rush against all creatures within 10 feet of the endpoint of its charge.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Creatures killed by a floodslain creature rise as floodslain themselves if immersed in water for 24 hours.',
      },
      {
        scalingType: 'flat',
        name: 'Toughness',
        description: 'Gains the Toughness feat as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Belkzen, Hold of the Orc Hordes',
    },
    visibility: 'global',
    rev: 1,
  },

  // 180. Foo Creature (CR +1)
  {
    id: 'foo-creature',
    name: 'Foo Creature',
    description:
      'A benevolent guardian spirit inhabiting the form of an animal, transformed into an outsider of good alignment. Foo creatures serve as protective statues and spiritual guardians, able to appear as stone statues when motionless.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
    ],
    typeChange: 'outsider',
    subtypeGains: ['good', 'augmented'],
    typeChangeNote: 'Do not recalculate BAB, saves, or skill ranks.',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: 4 },
    ],
    naturalArmorChange: 2,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 10, value: 5, bypassedBy: 'bludgeoning' },
        { minHD: 11, value: 10, bypassedBy: 'bludgeoning' },
      ],
    },
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Paired Protectors (Su)',
        description:
          "When two or more foo creatures are within 30 feet of each other, each gains the benefits of protection from evil with a caster level equal to the highest Hit Dice among them. This effect can be dispelled, but a foo creature can reactivate it as a swift action.",
      },
      {
        scalingType: 'flat',
        name: 'Stony Defense (Su)',
        description:
          "A number of times per day equal to its Hit Dice, a foo creature can harden its skin to unyielding stone as an immediate action. It gains hardness 8 until the end of its next turn, but its speed is reduced by 10 feet for the same duration.",
      },
      {
        scalingType: 'flat',
        name: 'Freeze (Ex)',
        description:
          "A foo creature can hold itself so still it appears to be a statue. It can take 10 on its Stealth check to hide in plain sight as a stone statue and can maintain this position for as long as it wishes.",
      },
      {
        scalingType: 'flat',
        name: 'Iron Will',
        description: 'Gains the Iron Will feat as a bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Languages',
        description: 'Gains Common and Celestial as languages.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 3',
    },
    visibility: 'global',
    rev: 1,
  },

  // 181. Foo Creature (CR +5) [3pp]
  {
    id: 'foo-creature-2',
    name: 'Foo Creature (TOHC)',
    description:
      'A powerful version of the foo creature from the Tome of Horrors Complete, transforming an animal into a magical beast with extraplanar qualities and potent supernatural abilities including invisibility and plane shifting.',
    crAdjustment: 5,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
    ],
    typeChange: 'magical beast',
    subtypeGains: ['extraplanar'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: 4, minimum: 10 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: 4,
    srFormula: '11 + CR (maximum 25)',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Hit Dice Increase',
        description: 'All current and future Hit Dice become d10s; total HD increase by +6.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Goodness (Su)',
        description:
          "Evil-aligned creatures that attack a foo creature take a -1 penalty on attack and damage rolls. This effect can be dispelled but restarts as a free action.",
      },
      {
        scalingType: 'flat',
        name: 'Strike Evil (Su)',
        description:
          "Gains a +2 morale bonus on attack and damage rolls when fighting evil-aligned creatures.",
      },
      {
        scalingType: 'flat',
        name: 'Summon Foo Creatures (Sp)',
        description:
          "Once per day, can attempt to summon 1d4 additional foo creatures of the same type with a 25% success chance. This functions as a 6th-level spell.",
      },
      {
        scalingType: 'flat',
        name: 'Invisibility (Su)',
        description:
          "Can turn invisible at will, functioning as the invisibility spell. Caster level equals Hit Dice + 3.",
      },
      {
        scalingType: 'flat',
        name: 'Ethereal Jaunt (Su)',
        description:
          "Can shift to the Ethereal Plane as a free action and return as a move action.",
      },
      {
        scalingType: 'flat',
        name: 'Plane Shift (Sp)',
        description:
          "Can transport itself and up to eight creatures within 5 feet to the Astral or Material Plane.",
      },
      {
        scalingType: 'flat',
        name: 'Languages',
        description:
          "Gains Celestial plus additional languages equal to its Intelligence modifier.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors Complete',
    },
    visibility: 'global',
    rev: 1,
  },

  // 182. Force Creature (CR +1) [3pp]
  {
    id: 'force-creature',
    name: 'Force Creature',
    description:
      'A living corporeal creature suffused with mystical force energy, its body glowing with dull blue light. Force creatures take half damage from physical attacks but are especially vulnerable to disintegration and force effects.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be a living, corporeal creature' },
    ],
    typeChange: 'aberration',
    typeChangeNote: 'Do not recalculate BAB, saves, or skills. All racial HD convert to d8s.',
    features: [
      {
        scalingType: 'flat',
        name: 'Force Aura (Ex)',
        description:
          "The creature emits a dull blue light (candlelight brightness). Opponents that hit it with natural weapons or unarmed strikes take 1d6 force damage. The same damage applies to successful combat maneuvers requiring physical contact.",
      },
      {
        scalingType: 'flat',
        name: 'Force Body (Ex)',
        description:
          "A force creature takes half damage from all attacks and effects that deal hit point damage.",
      },
      {
        scalingType: 'flat',
        name: 'Force Vulnerability (Ex)',
        description:
          "Disintegration and force effects bypass the creature's spell resistance and all damage reduction, including Force Body protection.",
      },
      {
        scalingType: 'flat',
        name: 'Draw Force (Su)',
        description:
          "As a standard action at will, the creature draws magical force-descriptor effects within 30 feet into itself using dispel magic mechanics. Success heals 1d8 HP per margin over DC. Excess healing becomes temporary HP capped at 50% of maximum HP.",
      },
      {
        scalingType: 'flat',
        name: 'Force Strength (Ex)',
        description:
          "Gains a +4 bonus on CMB checks for overrun, bull rush, sunder, and item-breaking Strength checks. Gains a +4 bonus to CMD against overrun, bull rush, push, and trip attempts.",
      },
      {
        scalingType: 'flat',
        name: 'Force Natural Attacks',
        description:
          "All natural attacks deal force damage and hit incorporeal creatures as ghost touch weapons. If the creature lacks natural attacks, it gains a primary slam dealing damage as one size category larger. Gains no breath ability.",
      },
      {
        scalingType: 'flat',
        name: 'Deflection-Based Armor Class',
        description:
          "The force creature's natural armor bonus is replaced by a deflection bonus equal to the base natural armor bonus plus the creature's Charisma modifier (minimum +0).",
      },
      {
        scalingType: 'flat',
        name: 'Skill Adjustments',
        description:
          "Gains a +20 racial bonus on Acrobatics jumping checks and a -5 circumstance penalty on Stealth checks except in bright light.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 183. Forsaken Lich (CR +2)
  {
    id: 'forsaken-lich',
    name: 'Forsaken Lich',
    description:
      'A tormented undead spellcaster whose soul is being actively consumed. Unlike a true lich, the forsaken lich has no phylactery — it exists only for 1d10 days before both body and soul are annihilated completely. During this time it lashes out with devastating soul-powered abilities.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    typeChangeNote: 'Do not recalculate BAB, saves, or skill ranks. All racial HD convert to d8s.',
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote: 'Constitution score is removed (undead); bonus HP derive from Charisma modifier.',
    naturalArmorChange: 3,
    damageReduction: { scalingType: 'flat', value: 15, bypassedBy: 'bludgeoning and magic' },
    resistances: [
      { energyType: 'cold', value: 'immunity' },
      { energyType: 'electricity', value: 'immunity' },
    ],
    immunities: ['standard undead immunities'],
    srFormula: '25',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'Gains a +4 bonus to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Soul Shield (Su)',
        description:
          "Grants a 20% miss chance (50% in dim light). This never provides total concealment; it only increases existing miss chances.",
      },
      {
        scalingType: 'flat',
        name: 'Spell Storm (Su)',
        description:
          "If a spell targets the forsaken lich and fails to overcome its spell resistance, this uncontrolled magic redirects the spell as per spell turning. The creature maintains 10 spell levels of turning capacity continuously.",
      },
      {
        scalingType: 'flat',
        name: 'Disembodied Strike (Su)',
        description:
          "As a standard action (highest BAB), makes a touch attack dealing 1d8 + 1 per 2 Hit Dice to living creatures, with reach extending 5 feet beyond normal. Can heal undead or itself instead of dealing damage.",
      },
      {
        scalingType: 'flat',
        name: 'Soul Lash (Su)',
        description:
          "As a swift action, creates a 240-foot line of destructive energy dealing 1d6 per 2 Hit Dice (maximum 20d6), paralyzing targets for 1d10 rounds on a failed Reflex save (save halves damage and negates paralysis). Must be used each round; failure to use deals 1d6 x (total HD / 4) damage to the forsaken lich.",
      },
      {
        scalingType: 'flat',
        name: 'Delusory Aura (Su)',
        description:
          "Projects a 100-foot radius aura of mirage arcana effects manifesting as disturbing visions, ambitions, and madness. Living creatures suffer a -4 penalty on fear save DCs while within the area. The aura reconstitutes 1 round after being dispelled.",
      },
      {
        scalingType: 'flat',
        name: 'Limited Lifespan',
        description:
          "The forsaken lich exists for only 1d10 days. When this period expires, both its body and soul are consumed and annihilated completely.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Adventure Path #48: Shadows of Gallowspire',
    },
    visibility: 'global',
    rev: 1,
  },

  // 184. Fortune-Blessed Creature (CR +1) [3pp]
  {
    id: 'fortune-blessed-creature',
    name: 'Fortune-Blessed Creature',
    description:
      'A creature favored by fate itself, blessed with remarkable luck in all its endeavors. Its attacks land more often in vital spots, its fortunes turn when needed most, and good luck permeates all its actions.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    subtypeGains: ['chaotic'],
    typeChangeNote: 'If base creature is an outsider, gains the chaotic subtype.',
    features: [
      {
        scalingType: 'flat',
        name: 'Augmented Criticals (Su)',
        description:
          "The critical threat range of each of a fortune-blessed creature's attacks doubles. This follows standard doubling rules and does not stack with keen edge or the Improved Critical feat.",
      },
      {
        scalingType: 'flat',
        name: 'Lucky Strike (Su)',
        description:
          "As a swift action once per minute, applies a true strike effect to a single attack.",
      },
      {
        scalingType: 'flat',
        name: 'Favored (Ex)',
        description:
          "Grants a +2 luck bonus on all saves and opposed checks, and a +1 luck bonus on attack rolls. Also grants a +2 luck bonus to AC and a +2 luck bonus on all skills.",
      },
      {
        scalingType: 'flat',
        name: 'Turn of Fate (Su)',
        description:
          "Once per day, the creature may reroll any failed roll and must accept the second result.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 185. Fortune-Spurned Creature (CR +1) [3pp]
  {
    id: 'fortune-spurned-creature',
    name: 'Fortune-Spurned Creature',
    description:
      'A creature cursed by fate, bringing misfortune to itself and all those around it. Its very presence spreads bad luck, and even its greatest moments of triumph are tainted by calamity.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    subtypeGains: ['chaotic'],
    features: [
      {
        scalingType: 'flat',
        name: 'Aura of Misfortune (Su)',
        description:
          "Every creature within 10 feet of the fortune-spurned creature gains the diminished criticals and unlucky strike special qualities as long as they remain within range. Furthermore, the affected creatures take a -4 penalty on all checks and saving throws.",
      },
      {
        scalingType: 'flat',
        name: 'Calamitous Mishap (Su)',
        description:
          "As a swift action once per minute, causes a natural disaster affecting itself and one adjacent creature equally. Both targets experience the same effects and make identical saving throws. The mishap must be a plausible natural occurrence.",
      },
      {
        scalingType: 'flat',
        name: 'Cursed (Ex)',
        description:
          "The creature takes a -2 luck penalty on opposed checks and saves, a -1 luck penalty on attack rolls, and a -2 penalty on all skill checks.",
      },
      {
        scalingType: 'flat',
        name: 'Diminished Criticals (Su)',
        description:
          "A fortune-spurned creature must roll twice to confirm a critical hit.",
      },
      {
        scalingType: 'flat',
        name: 'Twist of Fate (Su)',
        description:
          "The first time in any given day that a fortune-spurned creature rolls a natural 20 on a saving throw, it fails the save.",
      },
      {
        scalingType: 'flat',
        name: 'Unlucky Strike (Su)',
        description:
          "A natural attack roll of 1 provokes an attack of opportunity from the target. With manufactured weapons, the creature drops the weapon and must use a standard action to retrieve it, provoking another free attack of opportunity.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 186. Frostfallen Creature (CR +1)
  {
    id: 'frostfallen-creature',
    name: 'Frostfallen Creature',
    description:
      'The frozen undead remnant of a creature that perished in the cold, animated by a malevolent chill. Frostfallen creatures radiate supernatural cold, can detect the living at range, and are driven to destroy warmth wherever they find it.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['cold'],
    typeChangeNote:
      "Retains other subtypes except alignment and 'kind' subtypes (giant, etc.). Does not gain augmented subtype. All racial HD convert to d8s; creatures without racial HD are treated as having 1.",
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'WIS', change: 0, condition: 'set to 10' },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote:
      'Constitution score is removed (undead); Wisdom is set to 10. BAB equals 3/4 total HD.',
    naturalArmorChange: 4,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 10, value: 5, bypassedBy: 'bludgeoning' },
        { minHD: 11, value: 10, bypassedBy: 'bludgeoning' },
      ],
    },
    resistances: [{ energyType: 'cold', value: 'immunity' }],
    immunities: ['fire vulnerability (takes 150% damage from fire)'],
    features: [
      {
        scalingType: 'flat',
        name: 'Slam Attack',
        description:
          "Gains a slam attack dealing damage as if one size category larger than its actual size.",
      },
      {
        scalingType: 'flat',
        name: 'Cold (Su)',
        description:
          "The body generates cold damage on touch and when struck by unarmed or natural attacks. Damage scales by HD: 1-5 HD deals 1d6; 6-10 HD deals 2d6; 11-15 HD deals 3d6; 16+ HD deals 4d6.",
      },
      {
        scalingType: 'flat',
        name: 'Lifesense (Su)',
        description:
          "Detects living creatures within 60 feet as if possessing the blindsight ability.",
      },
      {
        scalingType: 'flat',
        name: 'Degraded Flight',
        description:
          "Wings become clumsy maneuverability (magical flight is unchanged). Loses all skills and feats except gains Toughness as a bonus feat. Retains only extraordinary qualities that enhance melee or ranged attacks.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Adventure Path #51: The Hungry Storm',
    },
    visibility: 'global',
    rev: 1,
  },

  // 187. Fungal Creature (CR +1)
  {
    id: 'fungal-creature',
    name: 'Fungal Creature',
    description:
      'A living creature overtaken by fungal growth, becoming a plant-type hybrid that sustains itself through fungi. Fungal creatures can release toxic spore clouds and their very flesh is poisonous to consume.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'plant (augmented)',
    typeChangeNote: 'Do not recalculate base class HD, BAB, saves, or skill points.',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -2, minimum: 1 },
      { ability: 'CON', change: 4 },
    ],
    naturalArmorChange: 2,
    immunities: ['disease', 'standard plant traits'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Fungal Metabolism',
        description:
          "Fungal creatures breathe but do not eat or sleep in the typical manner. They must rest in contact with moist natural earth each day; while doing so, they regain HP as if receiving complete bed rest and long-term care (4 HP per Hit Die per day). Strenuous activity prevents HP recovery for that day.",
      },
      {
        scalingType: 'flat',
        name: 'Reduced Speed',
        description:
          "Each movement speed decreases by 10 feet (minimum 5 feet). All racial HD become d8s.",
      },
      {
        scalingType: 'flat',
        name: 'Poison Spore Cloud (Ex)',
        description:
          "Once per day, the creature releases a 15-foot-radius spore cloud that lasts 10 rounds. Creatures must succeed at Fortitude saves each round (DC = 10 + 1/2 racial HD + Con modifier) or inhale spores. Fungal spores (inhaled): 1/round for 6 rounds; 1d2 Con damage and fatigued 1 minute per failed save; cure 2 consecutive saves.",
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Ex)',
        description:
          "Creatures killed by Constitution damage from the spore cloud transform into fungal spawns over 24 hours. The transformation can be sped by plant growth, slowed by diminish plants, or prevented by blight.",
      },
      {
        scalingType: 'flat',
        name: 'Poisonous Blood (Ex)',
        description:
          "The blood and flesh are ingested poisons. Creatures biting, swallowing, or otherwise ingesting parts must succeed at Fortitude saves (DC = 10 + 1/2 racial HD + Con modifier). Fungal blood or flesh (ingested): 1/minute for 6 minutes; 1 Str damage, 1 Dex damage, nauseated 1 minute; cure 2 saves.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 4',
    },
    visibility: 'global',
    rev: 1,
  },

  // 188. Fungoid Simple Template (CR +1)
  {
    id: 'fungoid-simple-template',
    name: 'Fungoid Simple Template',
    description:
      'Any living non-plant creature overtaken by fungal infection, transforming into a plant-type creature of chaotic evil alignment with a psychic link to other fungoids.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'special', description: 'Can only be applied to living, non-plant creatures' },
    ],
    typeChange: 'plant',
    features: [
      {
        scalingType: 'flat',
        name: 'Plant Traits',
        description:
          "Gains all standard plant-type traits. Alignment changes to chaotic evil. Flesh becomes pallid and moist; mushrooms and mold cover the body.",
      },
      {
        scalingType: 'flat',
        name: 'Fungoid Telepathy',
        description:
          "Gains telepathy 100 feet, usable only to communicate with other fungoid creatures.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Inner Sea Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 189. Gallowdead (CR +2)
  {
    id: 'gallowdead',
    name: 'Gallowdead',
    description:
      'An empowered skeletal undead created from a creature executed by hanging or binding with chains, animated by the violence of its death and bound to a spiked chain. Gallowdead radiate an aura of terrifying whispers and wield their chains to ensnare the living.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'bludgeoning and magic' },
    immunities: ['standard undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Additional Hit Dice',
        description:
          "Add 4 racial Hit Dice instead of the standard 2 when applying the skeleton template.",
      },
      {
        scalingType: 'flat',
        name: 'Aura of Whispers (Su)',
        description:
          "30-foot aura forcing DC 27 Will saves or becoming shaken for 1d4 rounds. Shaken creatures that fail again become nauseated. Creatures can retry the save each round; success grants 24-hour immunity. Multiple gallowdead increase the DC by 2. This is a language-dependent sonic effect.",
      },
      {
        scalingType: 'flat',
        name: 'Chains of the Dead (Su)',
        description:
          "The first spiked chain hit per turn deals 12d6 negative energy damage (Will DC 27 for half; ineffective against undead). Gains a +4 racial bonus on free grapple checks; a successful check grapples the target without affecting the gallowdead. Can maintain the grip or take a move action only during grapple; cannot use chain while grappling.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Dungeons of Golarion',
    },
    visibility: 'global',
    rev: 1,
  },

  // 190. Gallows Creature (CR +2)
  {
    id: 'gallows-creature',
    name: 'Gallows Creature',
    description:
      'A creature cursed by a dark ritual, transformed into a construct-like entity bound to hang and strangle. Gallows creatures grow in size, gain powerful grab attacks, and project an anti-magic field that leaves fire untouched — a reflection of their alignment and purpose.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'construct (augmented)',
    sizeChange: 1,
    abilityScoreChangeNote:
      'Retains Intelligence score (unlike standard constructs). Loses Constitution score. Loses all armor and shield proficiency.',
    naturalArmorChange: 1,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 5, bypassedBy: 'adamantine slashing' },
        { minHD: 6, maxHD: 10, value: 10, bypassedBy: 'adamantine slashing' },
        { minHD: 11, maxHD: 15, value: 15, bypassedBy: 'adamantine slashing' },
        { minHD: 16, maxHD: 20, value: 20, bypassedBy: 'adamantine slashing' },
        { minHD: 21, value: 25, bypassedBy: 'adamantine slashing' },
      ],
    },
    immunities: ['standard construct immunities', 'fire immunity and resistance are lost; fire vulnerability (+50% damage from fire)'],
    fastHealing: 'equal to Charisma score (cannot heal fire damage or attacks overcoming DR)',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision and Low-Light Vision',
        description: 'Gains darkvision 60 ft. and low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Grab (Ex)',
        description: 'Gains the grab special attack with all natural attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Hangman\'s Noose (Ex)',
        description:
          "Can strangle opponents as a free action during a grapple or after a successful lyncher attack, dealing 1d10 bludgeoning damage plus Strength modifier and 2 Constitution damage per round. Targets unable to hold breath make escalating Constitution checks (DC 10, +1 per round); failure causes unconsciousness then death within three rounds.",
      },
      {
        scalingType: 'flat',
        name: 'Jagged Blows (Ex)',
        description:
          "Natural attacks deal bludgeoning, piercing, and slashing damage. If the creature has no natural attacks, it gains a slam attack dealing 1d6 (if Large).",
      },
      {
        scalingType: 'flat',
        name: 'Lyncher (Ex)',
        description:
          "Standard action ranged touch attack using a noose extending to reach + 40 feet. The rope has AC 20 and can be severed by slashing damage overcoming DR. Grants a pull special attack equal to the creature's reach.",
      },
      {
        scalingType: 'flat',
        name: 'Selective Anti-Magic (Ex)',
        description:
          "Projects an anti-magic field with a radius equal to reach + 40 feet. Fire descriptor spells and effects are unaffected by this field.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 191. Genie-Bound Creature (CR +2) [3pp]
  {
    id: 'genie-bound-creature',
    name: 'Genie-Bound Creature',
    description:
      'A creature bound in service to a genie, granted a portion of the genie\'s elemental power in exchange for loyalty and obedience. The specific powers granted depend on the type of genie the creature serves.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChangeNote:
      'Gains 6 points to distribute among ability scores as chosen by the genie master.',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Genie Grace (Su)',
        description:
          "Immunity to the planar environmental effects of the genie's home plane, revocable by the genie at any time.",
      },
      {
        scalingType: 'flat',
        name: 'Genie Magic (Sp)',
        description:
          "Access to the genie's spell-like abilities (caster level equals total Hit Dice; Charisma-based DCs). Djinni-bound: at will — invisibility (self); 1/day — create food/water, create wine, gaseous form, major creation, persistent image, wind walk. Efreeti-bound: constant — detect magic; at will — produce flame, pyrotechnics, scorching ray (1 ray); 3/day — invisibility, wall of fire; 1/day — enlarge person, gaseous form, permanent image, polymorph (self), reduce person. Janni-bound: 3/day — invisibility (self), speak with animals; 1/day — create food/water. Marid-bound: constant — detect evil/good/magic, water walk; at will — create water, invisibility, purify food/drink (liquids), quench; 5/day — control water, gaseous form, obscuring mist, water breathing; 3/day — see invisibility; 1/day — persistent image. Shaitan-bound: at will — meld into stone, soften earth/stone, stone shape, veil (self); 3/day — glitterdust, stoneskin, rusting grasp, stone tell, wall of stone; 1/day — transmute mud to rock, transmute rock to mud.",
      },
      {
        scalingType: 'flat',
        name: 'Genie Boon (Su)',
        description:
          "Conditional benefits granted by the genie's power, revocable at any time. Djinni: +4 morale bonus on attack, damage, CMB, CMD. Efreeti: extra HP equal to Charisma bonus per Hit Die. Janni: immunity to desert environmental damage (non-magical only). Marid: water breathing (Su), +4 circumstance bonus on Swim. Shaitan: +4 morale bonus on attack, damage, CMB, CMD.",
      },
      {
        scalingType: 'flat',
        name: 'Genie-Bond (Su)',
        description:
          "Constant telepathic communication with the genie; genie is always aware of servant's actions and condition. The genie can use plane shift at will to reach the servant; the servant can use plane shift at will to locations specified by the genie. The genie can inflict or heal 1d6 damage or 1d4 ability damage as a standard action. The servant does not age normally while bound.",
      },
      {
        scalingType: 'flat',
        name: 'Genie-Empowered (Su)',
        description:
          "Three times per day, gain a +10 bonus on one skill check, a +5 bonus on a single saving throw, or double movement speed for one round.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 192. Ghost (CR +2)
  {
    id: 'ghost',
    name: 'Ghost',
    description:
      "The incorporeal undead spirit of a creature that cannot rest due to some unfinished business or powerful emotional attachment to the mortal world. Ghosts haunt locations tied to their deaths and may be permanently laid to rest only when the underlying cause of their haunting is resolved.",
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Base creature must have a Charisma score of at least 6' },
    ],
    typeChange: 'undead',
    subtypeGains: ['incorporeal'],
    abilityScoreChanges: [
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote:
      'Strength and Constitution scores are removed (incorporeal undead). Bonus HP derive from Charisma modifier. All racial HD convert to d8s.',
    immunities: ['standard undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'Gains a +4 bonus to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Deflection Bonus',
        description:
          "Gains a deflection bonus to AC equal to its Charisma modifier. Loses natural armor bonus and all non-ghost touch armor/shield bonuses.",
      },
      {
        scalingType: 'flat',
        name: 'Flight',
        description:
          "Gains a fly speed of 30 feet (perfect maneuverability), or higher if the base creature had superior flight. Can pass through solid objects.",
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          "Destroyed ghosts reform in 2d4 days unless the underlying cause of the haunting is resolved. Permanent dissipation requires resolving the ghost's unfinished business.",
      },
      {
        scalingType: 'flat',
        name: 'Corrupting Touch (Su)',
        description:
          "Mandatory ability. Incorporeal touch dealing 1d6 damage per CR in supernatural aging damage. A Fortitude save halves the damage.",
      },
      {
        scalingType: 'flat',
        name: 'Additional Ghost Abilities',
        description:
          "Gains 1 additional special ability per 3 CR from the following list (choose): Corrupting Gaze (30-ft gaze: 2d10 damage + 1d4 Cha damage, Fort negates Cha); Draining Touch (1d4 ability drain + 5 HP healed); Frightful Moan (30-ft panic 2d4 rounds, Will negates); Malevolence (possess living creature as magic jar, Will negates); Telekinesis (at will, CL 12 or HD).",
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          "Gains a +8 racial bonus on Perception and Stealth. Gains Climb, Disguise, Fly, Intimidate, Knowledge (arcana), Knowledge (religion), Perception, Sense Motive, Spellcraft, and Stealth as class skills.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 193. Ghost, Prana (CR +1)
  {
    id: 'ghost-prana',
    name: 'Ghost, Prana',
    description:
      'The incorporeal remnant of a creature whose spirit remains bound to the material world to fulfill a specific mission. Unlike true ghosts, prana ghosts are outsiders that take additional harm from negative energy and seek to guide or protect rather than haunt.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Base creature must have Intelligence and Wisdom scores of at least 6' },
    ],
    typeChange: 'outsider',
    subtypeGains: ['augmented', 'extraplanar', 'incorporeal'],
    typeChangeNote: 'Base attack bonus, saves, and skill points remain unchanged. All racial HD convert to d10s.',
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'WIS', change: 2 },
    ],
    abilityScoreChangeNote:
      "Strength score is removed (incorporeal). Gains deflection bonus to AC equal to Wisdom modifier (not Charisma). Loses all non-force effect armor and shield bonuses.",
    immunities: [
      'dazing',
      'disease',
      'exhaustion',
      'fatigue',
      'paralysis',
      'poison',
      'sleep effects',
      'stunning',
      'effects requiring corporeal form',
      'nonlethal damage',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Living Prana (Ex)',
        description:
          "Takes 50% additional damage from negative energy and death effects. Takes 50% more negative levels from negative energy. Suffers 50% increased Constitution damage/drain from negative energy effects. Rejuvenation takes twice as long if dissipated this way.",
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          "The prana ghost restores itself in 2d4 days unless its mission is completed or becomes impossible. Dissipates immediately when HP reach negative its Constitution score.",
      },
      {
        scalingType: 'flat',
        name: 'Flight',
        description:
          "Gains a fly speed of 30 feet (perfect), or higher if base creature had a better fly speed. Can pass through solid objects.",
      },
      {
        scalingType: 'flat',
        name: 'Astral Step (Su)',
        description:
          "As a standard action a number of times per day equal to its Wisdom bonus, the prana ghost can teleport to any space within 60 feet it can see. This is a teleportation effect.",
      },
      {
        scalingType: 'flat',
        name: 'Dazing Touch (Su)',
        description:
          "Melee touch attack dealing 1d6 damage. Target must succeed at a Will save (DC = 10 + half HD + Wisdom modifier) or be dazed for 1 round.",
      },
      {
        scalingType: 'flat',
        name: 'Ghost Touch Attacks',
        description:
          "Natural and unarmed attacks automatically gain the ghost touch property. Adds full Wisdom bonus to primary attacks and half Wisdom bonus to off-hand attacks.",
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'Gains Alertness, Improved Initiative, and Toughness as bonus feats.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          "Gains a +8 racial bonus on Perception, Sense Motive, and Stealth. Always treats Acrobatics, Bluff, Craft, Diplomacy, Intimidate, Knowledge (planes), Perception, Sense Motive, Stealth, and Use Magic Device as class skills.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Occult Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 194. Ghul (CR +2) [3pp]
  {
    id: 'ghul',
    name: 'Ghul',
    description:
      'An undead creature that retains its Constitution score — a rarity among the undead — and appears disturbingly lifelike. Ghuls exhale a deadly miasma and can paralyze victims with their attacks, creating spawn from those they slay.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['undead', 'construct'] },
    ],
    typeChange: 'undead',
    typeChangeNote: 'Retains Constitution score despite being undead; Con bonus applies to HD, Fortitude saves, skill checks, and attack DCs.',
    features: [
      {
        scalingType: 'flat',
        name: 'Undead Traits',
        description:
          "Possesses standard undead immunities and traits with the exception that Constitution score is retained (a necromantic illusion).",
      },
      {
        scalingType: 'flat',
        name: 'Lifelike (Su)',
        description:
          "The creature breathes, eats, and rests in a form that appears to be sleeping. Increases Knowledge check DCs by 5 to identify as undead. The Constitution bonus applies to all relevant calculations despite the undead type.",
      },
      {
        scalingType: 'flat',
        name: 'Exhalation of Death (Su)',
        description:
          "60-foot cone breath weapon usable as a standard action. Living creatures that fail a Fortitude save (DC 10 + 1/2 HD + Con modifier) become nauseated for 1d6+4 rounds and sickened for 1d6+4 minutes. Creatures with poison immunity are unaffected. Dead victims with 5 or fewer HD become ghasts (humanoid) or zombies; those with 6+ HD become ghuls. They rise in 1d6 hours; preventable via remove curse, neutralize poison, or similar during incubation.",
      },
      {
        scalingType: 'flat',
        name: 'Paralysis (Ex)',
        description:
          "Melee attacks expose targets to paralysis via Fortitude save (DC 10 + 1/2 HD + Con modifier). A failed save causes 1d4+1 rounds of paralysis (immobile, helpless, cannot speak or act). No round-by-round saves allowed.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Super Genius Games',
      publication: 'The Genius Guide To: Simple Monster Templates',
    },
    visibility: 'global',
    rev: 1,
  },

  // 195. Giantblooded Creature (CR +3) [3pp]
  {
    id: 'giantblooded-creature',
    name: 'Giantblooded Creature',
    description:
      'A creature with giant blood in its ancestry, granting it size, strength, and the special abilities of its giant heritage. The creature gains rock-throwing ability and a bloodline power determined by which type of giant ancestor it descends from.',
    crAdjustment: 3,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    sizeChange: 1,
    abilityScoreChangeNote:
      'Ability score changes and natural armor bonus vary by final size. Medium: Str +6, Dex -2, Con +2, natural armor +1. Large: Str +10, Dex -2, Con +4, natural armor +3. Huge: Str +10, Dex -2, Con +4, natural armor +4. Gargantuan: Str +14, Dex -4, Con +6, natural armor +5. Colossal: Str +14, Dex -4, Con +6, natural armor +6. Humanoid creatures also gain the giant subtype.',
    features: [
      {
        scalingType: 'flat',
        name: 'Rock Throwing',
        description:
          "Gains rock throwing with range increments based on final size: Medium 60 ft., Large 120 ft., Huge 140 ft., Gargantuan 180 ft., Colossal 220 ft. If the base creature already has rock throwing, uses the greater range.",
      },
      {
        scalingType: 'flat',
        name: 'Increased Speed',
        description:
          "Speed increases by 10 feet per size category gained. Flying maneuverability decreases one step if size increases.",
      },
      {
        scalingType: 'flat',
        name: 'Giant Bloodline Ability',
        description:
          "Gains a special ability based on giant ancestor: Ash Giant or Jungle Giant — immunity to disease; Athach — extra arm with claw attack; Cave Giant — ferocity; Cliff Giant — acid resistance 10; Cloud Giant — scent; Cyclops — Flash of Insight 1/day; Desert Giant — full speed on desert terrain, leaves no trail; Ettin — second head (+2 Perception), Multiattack feat; Fire Giant — fire resistance 10; Frost Giant — cold resistance 10; Great Cyclops — Flash of Brutality 1/day; Hill Giant — +2 Str when touching solid ground; Marsh Giant — +4/+8 Stealth (swamps); Merrow/Ocean/River Giant — Swim bonuses; Ogre — darkvision 60 ft.; Rune Giant — +4 Cha skills vs. giant-subtype creatures; Slag Giant — all Craft as class skills; Stone Giant — +2 additional natural armor; Storm Giant — electricity resistance 10; Taiga Giant — +4 vs. enchantment/illusion; Troll — regeneration 2 (fire or acid); Wood Giant — +4/+8 Stealth (forests). Other giants — +2 Perception and +2 Fortitude.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 196. Giantkin (CR +1)
  {
    id: 'giantkin',
    name: 'Giantkin',
    description:
      'A creature born of interbreeding between a smaller creature and a larger giant type, emerging larger and stronger than normal with abilities derived from giant ancestry. The specific bloodline determines which elemental resistance or special quality is gained.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Giant Hit Points',
        description: 'Gains +10 hit points.',
      },
      {
        scalingType: 'flat',
        name: 'Save Bonus',
        description: 'Gains a +1 racial bonus to all saving throws.',
      },
      {
        scalingType: 'flat',
        name: 'Rock Throwing',
        description:
          "Gains rock throwing: 1d6 damage, 90 ft. range increment. Stoneblood variant: 1d8 damage, 120 ft. range. Stoneblood also gains rock catching.",
      },
      {
        scalingType: 'flat',
        name: 'Bloodline Ability',
        description:
          "Gains an ability based on bloodline: Fireblood — fire resistance 10; Frostblood — cold resistance 10; Hillblood — +2 natural armor; Stoneblood — rock catching and enhanced rock throwing (1d8, 120 ft.).",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    visibility: 'global',
    rev: 1,
  },

  // 197. Gigantean Creature (CR varies) [3pp]
  {
    id: 'gigantean-creature',
    name: 'Gigantean Creature',
    description:
      'A creature that has grown to enormous size through magical, evolutionary, or supernatural means. CR increases vary by creature type: most gain +1 CR per 4 additional HD, magical beasts and monstrous humanoids +1 per 3 HD, and dragons and outsiders +1 per 2 HD.',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    sizeChange: 4,
    abilityScoreChangeNote:
      'Varies by size increase. +1 category: Str +8, Dex -2, Con +2, natural armor +0. +2 categories: Str +16, Dex -4, Con +4, natural armor +4. +3 categories: Str +24, Dex -6, Con +8, natural armor +8. +4 categories: Str +32, Dex -8, Con +16, natural armor +14. Undead and constructs unaffected by Con changes.',
    features: [
      {
        scalingType: 'flat',
        name: 'Scaled Hit Dice',
        description:
          "Racial HD are multiplied based on size increase (1d2 to x6 depending on categories gained). Class-level HD are unaffected. Minimum 15 HD for Fine-to-Medium creatures with 2 or fewer racial HD.",
      },
      {
        scalingType: 'flat',
        name: 'Increased Speed',
        description:
          "Each movement speed is multiplied by the number of size categories gained.",
      },
      {
        scalingType: 'flat',
        name: 'Trample (Ex)',
        description:
          "Automatically gained. Base damage is determined by the slam attack for the creature's new size if it lacks an existing slam.",
      },
      {
        scalingType: 'flat',
        name: 'Massive (Ex)',
        description:
          "Gained if base creature is Gargantuan or Colossal. Difficult terrain (uneven ground) poses no hindrance; forests and settlements remain difficult. Huge or smaller creatures move freely through the gigantean's space. Attacks of opportunity only against Huge+ foes. Higher ground bonus requires the entire space to be elevated. Climbing DC is 30; climbers provoke attacks of opportunity.",
      },
      {
        scalingType: 'flat',
        name: 'Scaled Senses, Attacks, and Special Abilities',
        description:
          "Sense ranges increase by base value times number of size categories gained. Attack damage scales per size tables. Special attack ranges and areas increase by base value times size categories; DCs adjust based on new ability scores.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 198. Gluttonous Creature (CR +1) [3pp]
  {
    id: 'gluttonous-creature',
    name: 'Gluttonous Creature',
    description:
      'A living creature consumed by supernatural hunger, its physique enhanced to devour and digest prey. Gluttonous creatures can swallow creatures larger than themselves whole and restore their own vitality with each successful bite.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Can be applied to any living creature with a Constitution score' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
    ],
    immunities: ['diseases', 'poisons'],
    features: [
      {
        scalingType: 'flat',
        name: 'Reduced Speed',
        description: 'All movement speeds reduced by 10 feet (minimum 5 feet).',
      },
      {
        scalingType: 'flat',
        name: 'Delectable Morsels of Vim and Vigor (Su)',
        description:
          "Successful bite attacks heal HP equal to the creature's Constitution modifier (minimum 1). Swallowing whole creatures with CR 4 or more below the creature's CR grants healing equal to the full Constitution score. Excess healing becomes temporary HP stacking to twice maximum HP, lasting 1 hour.",
      },
      {
        scalingType: 'flat',
        name: 'Great Maw (Ex)',
        description:
          "Gains an additional primary bite attack dealing 2d8 + Strength modifier (plus 1d8 per size category beyond Medium). Counts as adamantine. Includes the grab ability with a +4 grapple bonus.",
      },
      {
        scalingType: 'flat',
        name: "Heroes' Feast (Sp)",
        description:
          "Once per week, creates a feast as per the heroes' feast spell.",
      },
      {
        scalingType: 'flat',
        name: 'Hurry to the Next Meal (Su)',
        description:
          "While carrying qualifying swallowed creatures (CR 4 or more below), base speeds increase by 20 feet and the creature gains a +4 bonus on bull rush maneuvers.",
      },
      {
        scalingType: 'flat',
        name: 'Infectious Gluttony (Su)',
        description:
          "Creatures struck must make a Fortitude save (DC: 10 + 1/2 HD + Con modifier) or require five times normal food for 24 hours. At CR 5+, this becomes a permanent curse.",
      },
      {
        scalingType: 'flat',
        name: 'Insatiable Hunger (Su)',
        description:
          "The stomach exists in a pocket dimension. Swallowed creatures escape via Escape Artist check (DC: 10 + 1/2 HD + Con modifier) as a standard action.",
      },
      {
        scalingType: 'flat',
        name: 'Swallow Whole (Ex)',
        description:
          "Can swallow creatures up to one size category larger than itself. Deals 3d6 + Con modifier damage per round (half bludgeoning, half acid), plus 1d6 per size category beyond Medium.",
      },
      {
        scalingType: 'flat',
        name: 'Inescapable Grasp',
        description: 'Gains the Inescapable Grasp feat as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 199. Gnarled Creature (CR +1)
  {
    id: 'gnarled-creature',
    name: 'Gnarled Creature',
    description:
      'A creature warped by a demon lord\'s malevolent attention, its body becoming hunched and knotted with corded muscles and awkwardly formed limbs. The transformation grants toughness and ferocity but diminishes speed and social grace.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal', 'dragon', 'fey', 'humanoid', 'magical beast', 'monstrous humanoid', 'outsider', 'undead', 'vermin'] },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: -2 },
      { ability: 'CON', change: 2 },
      { ability: 'CHA', change: -4 },
    ],
    naturalArmorChange: 3,
    features: [
      {
        scalingType: 'flat',
        name: 'Reduced Speed',
        description: 'Base speed reduced by 10 feet (minimum 10 feet).',
      },
      {
        scalingType: 'flat',
        name: 'Ferocity',
        description:
          "Gains the ferocity universal monster ability, allowing it to continue fighting even when disabled or dying.",
      },
      {
        scalingType: 'flat',
        name: 'Diehard',
        description: 'Gains the Diehard feat as a bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Increased Hit Points',
        description: 'Gains +1 hit point per Hit Die.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Module: The Witchwar Legacy',
    },
    visibility: 'global',
    rev: 1,
  },

  // 200. Grandmaster Creature (CR +4) [3pp]
  {
    id: 'grandmaster-creature',
    name: 'Grandmaster Creature',
    description:
      'An extraordinarily intelligent, wise, and charismatic creature that leads a cabal of specialized followers, granting them enhanced abilities through supernatural bonds. Grandmasters reorganize their allies into highly effective tactical units.',
    crAdjustment: 4,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be able to communicate and have an Intelligence score of 18 or higher' },
    ],
    abilityScoreChanges: [
      { ability: 'INT', change: 10 },
      { ability: 'WIS', change: 10 },
      { ability: 'CHA', change: 10 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Lawful Alignment',
        description:
          'Alignment becomes lawful regardless of the base creature\'s prior alignment.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Skills',
        description:
          "+5 bonus to Appraise, Craft, Knowledge, Linguistics, and Spellcraft; +5 to Heal, Perception, Profession, Sense Motive, and Survival; +5 to Bluff, Diplomacy, Disguise, Handle Animal, Intimidate, Perform, and Use Magic Device; +5 Will saves; +5 to any Int-, Wis-, or Cha-based DCs. The +10 Int bonus grants 4 bonus languages and 4 extra skill points per HD.",
      },
      {
        scalingType: 'flat',
        name: 'Assemble Cabal (Su)',
        description:
          "As a standard action, designates up to 4 known creatures plus itself as cabal members. Twice per day, speaks their names as an immediate action to teleport them to adjacent unoccupied squares. Works across planes; affects only willing travelers. Conjuration (teleportation) effect.",
      },
      {
        scalingType: 'flat',
        name: 'Cabal Boost (Su)',
        description:
          "After cabal assembly, the grandmaster gains for 1 minute per HD: +4 morale bonus on attack rolls, saves, and skill checks; immunity to fear effects; and temporary HP equal to its HD.",
      },
      {
        scalingType: 'flat',
        name: 'Cabal Brute (Su)',
        description:
          "One designated cabal member gains within 100 feet: Str +4 inherent, Con +4 inherent, and Perilous Strike (critical hits trigger cascading confirmations at -5 cumulative, each success increasing the weapon's critical multiplier by x1).",
      },
      {
        scalingType: 'flat',
        name: 'Cabal Genius (Su)',
        description:
          "One designated cabal member gains within 100 feet: Int +4 inherent; all Int-based skills become class skills; bonus equal to half HD on an Int-based skill check (3 + Int modifier times daily); Amazing Tactics (swift action: all cabal members within 100 ft. who meet prerequisites gain use of one combat feat for a number of rounds equal to member's HD; language-dependent).",
      },
      {
        scalingType: 'flat',
        name: 'Cabal Mystic (Su)',
        description:
          "One designated cabal member gains within 100 feet: Wis +4 inherent, Cha +4 inherent, and Curse Ability (swift action curse targeting a creature within 30 feet, rendering a specified ability non-functional; Will DC 10 + 1/2 HD + Cha modifier negates; removable by break enchantment or similar).",
      },
      {
        scalingType: 'flat',
        name: 'Cabal Sniper (Su)',
        description:
          "One designated cabal member gains within 100 feet of other cabal members: Dex +4 inherent; Perfect Shot (swift action to maximize ranged weapon base damage, usable 3 + Dex modifier times daily; confirmed criticals increase multiplier by 1); Elemental Shot (+1d6 or +2d6 if CR 10+ of chosen energy type on ranged attacks).",
      },
      {
        scalingType: 'flat',
        name: 'Disparaging Command (Su)',
        description:
          "Swift action affecting up to 1 + one per 3 HD opponents within 60 feet, imposing a -2 morale penalty on attack rolls, AC, CMD, and skill checks for 1 round. Language-dependent, mind-affecting.",
      },
      {
        scalingType: 'flat',
        name: 'Disparaging Word (Sp)',
        description:
          "Swift action affecting one creature within 60 feet, imposing a -2 morale penalty on attack rolls, skill checks, ability checks, and saving throws for 1/2 the grandmaster's HD rounds (minimum 1). Usable 3 + Wisdom modifier times per day. Language-dependent, mind-affecting.",
      },
      {
        scalingType: 'flat',
        name: 'Leadership',
        description: 'Gains the Leadership feat as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },
];
