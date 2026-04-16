import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const WILDERNESS_ORIGINS_FEATS: FeatDefinition[] = [
  {
    id: 'bounteous_body',
    name: 'Bounteous Body',
    description:
      'You can dedicate one hour of focused effort to cultivate a collection of magical fruits numbering one-third your character level. Each fruit grants the effects of a lesser restoration spell when consumed. The fruits retain magical properties for 24 hours before becoming mundane. You can use this ability once per week, plus a number of additional times equal to your Constitution modifier (minimum zero additional uses).',
    shortDescription: 'Cultivate magical fruits that grant lesser restoration once per week',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 5 },
      {
        type: 'special',
        description: 'Grapevine or natural magic racial trait (Ghoran)',
      },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['ghoran', 'nature', 'plant', 'healing'],
  },
  {
    id: 'changeling_familiar',
    name: 'Changeling Familiar',
    description:
      "Your familiar's change shape ability functions as the alter self spell. The familiar gains one alternate humanoid form of Small or Medium size, appearing as a child or teenager of your species. This form is permanent once selected. Such familiars retain visible markers of their original nature (like feline eyes or serpent tongues). They gain no additional languages through transformation, making them typically mute in this form.",
    shortDescription:
      "Familiar's change shape functions as alter self; gains one permanent humanoid form",
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'familiar' },
      { type: 'caster_level', minimum: 9 },
      {
        type: 'special',
        description: 'Familiar must have the change shape universal monster ability',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'shapeshifting'],
  },
  {
    id: 'cherry_blossom_spell',
    name: 'Cherry Blossom Spell',
    description:
      "You can infuse damaging spells with magical aging or regression effects. When a creature takes damage from an affected spell, it suffers 2 points of damage to either Strength, Dexterity, and Constitution or Intelligence, Wisdom, and Charisma (your choice). Targets unable to normally save against the spell can attempt a Fortitude save to negate this ability score damage. This feat has no effect on spells that do not deal damage. Ageless and immortal creatures are immune. This effect is treated as a magical aging effect. A cherry blossom spell uses up a spell slot 3 levels higher than the spell's actual level.",
    shortDescription:
      'Metamagic: damaging spells also deal 2 points of ability score damage; +3 spell level',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'toggle',
    tags: ['metamagic', 'ability damage', 'aging'],
  },
  {
    id: 'chimeric_adept',
    name: 'Chimeric Adept',
    description:
      'When you transform using the wild shape ability, you can gain the abilities of one of the minor forms of another of your chosen aspects as well.',
    shortDescription:
      'When using wild shape, also gain minor form abilities from a second chimeric aspect',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'chimeric aspect' },
      { type: 'class_feature', featureName: 'wild shape' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['shifter', 'wild shape', 'chimeric'],
  },
  {
    id: 'chimeric_master',
    name: 'Chimeric Master',
    description:
      'When using wild shape, you can gain the benefits of a second major form of another of your chosen aspects. The second major form provides all standard abilities except natural attacks, new movement types, or movement bonuses. When combining two major forms this way, you forfeit the minor form benefit normally granted by Chimeric Adept.',
    shortDescription:
      'Gain a second aspect major form during wild shape, forgoing Chimeric Adept minor form',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'chimeric_adept' },
      { type: 'class_feature', featureName: 'greater chimeric aspect' },
      { type: 'class_feature', featureName: 'wild shape' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['shifter', 'wild shape', 'chimeric'],
  },
  {
    id: 'curious_companion',
    name: 'Curious Companion',
    description: 'You can select a plant companion or vermin companion as your animal companion.',
    shortDescription: 'Choose a plant or vermin as your animal companion',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'animal companion' }],
    effects: [],
    activationMode: 'passive',
    tags: ['companion', 'plant', 'vermin', 'druid', 'ranger'],
  },
  {
    id: 'dryads_apprentice',
    name: "Dryad's Apprentice",
    description:
      "You can cast wood shape as a spell-like ability at will, though this ability is limited to wood pieces weighing no more than 1 pound. You gain a +4 bonus on all Craft checks related to woodworking, and are treated as having masterwork artisan's woodworking tools for such checks even if you do not possess them.",
    shortDescription: 'Cast wood shape at will (1 lb. max); +4 Craft (woodworking)',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Gathlain race' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.craft_woodworking',
        value: 4,
        source: "Dryad's Apprentice",
      },
    ],
    activationMode: 'passive',
    tags: ['gathlain', 'nature', 'plant', 'crafting', 'spell-like ability'],
  },
  {
    id: 'dryads_attendant',
    name: "Dryad's Attendant",
    description:
      "You can cast meld into stone as a spell-like ability once per day, with a caster level equal to your character level. This ability fuses you with wood instead of stone, and the duration extends up to 24 hours. When you merge with a dryad's bonded tree, that dryad can designate you as her bonded tree for a number of days equal to your Charisma modifier (minimum 1 day) after you depart. The dryad also maintains her connection to her original tree during this period.",
    shortDescription:
      'Meld into wood 1/day (CL = character level, up to 24 hours); become a dryad bonded tree',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
      { type: 'feat', featId: 'dryads_apprentice' },
      { type: 'level', minimum: 9 },
      { type: 'special', description: 'Gathlain race' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['gathlain', 'nature', 'plant', 'spell-like ability', 'dryad'],
  },
  {
    id: 'elemental_claws',
    name: 'Elemental Claws',
    description:
      'You can channel elemental energy through your natural weapons. When attacking, you select acid, cold, electricity, or fire damage. You must declare use of this feat before rolling to attack. On a successful hit, the attack deals normal damage plus an additional 1d6 of the chosen elemental type. If the attack misses, the use is wasted. You can use this ability once per day for every 4 character levels, but no more than once per round.',
    shortDescription:
      'Channel acid/cold/electricity/fire through natural weapons for +1d6 damage; limited uses',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'bab', minimum: 8 },
      { type: 'class_feature', featureName: 'wild shape' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['combat', 'elemental', 'natural attacks', 'druid', 'shifter'],
  },
  {
    id: 'favored_animal_focus_wo',
    name: 'Favored Animal Focus',
    description:
      'Choose one animal focus. When you apply your chosen animal focus to your animal companion, the benefits increase by one step. At 15th level or higher, applying the chosen focus grants additional specialized abilities: Bat gains +20 ft blindsense, Bear gets +8 CON, Bull gets +8 STR, Falcon gets +12 Perception, Frog gets +12 Swim/Acrobatics, Monkey gets +12 Climb, Mouse gains Improved Uncanny Dodge, Owl gets +12 Stealth, Snake gets +8 attack/dodge, Stag gets +30 ft speed, Tiger gets +8 DEX, Wolf gains 60 ft scent. You can gain this feat multiple times; each time you must select a new animal focus.',
    shortDescription: 'Chosen animal focus benefits increase by one step when applied to companion',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'animal companion' },
      { type: 'class_feature', featureName: 'animal focus' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['companion', 'hunter', 'animal focus', 'nature'],
  },
  {
    id: 'friendly_face',
    name: 'Friendly Face',
    description:
      "Other animals of roughly the same kind as you (cats to felines, eagles to raptors, frogs to amphibians, etc.) have their starting attitudes toward you improved by two steps. Their attitudes toward your master are likewise improved by one step. If your master has the animal focus class feature, this feat's benefits also extend to animals matching your master's active animal focus type.",
    shortDescription:
      'Attitude of similar animals improved by two steps toward you, one step toward master',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Animal companion class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['companion', 'animal', 'diplomacy', 'nature'],
  },
  {
    id: 'greater_spelleater',
    name: 'Greater Spelleater',
    description:
      'Once per week, instead of casting dispel magic as a spell-like ability from your spelleater racial trait, you can cast greater dispel magic. Using this upgraded version consumes your daily use of dispel magic from the spelleater racial trait. The ability otherwise functions identically to the base racial trait.',
    shortDescription: 'Cast greater dispel magic 1/week using spelleater racial trait slot',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'level', minimum: 5 },
      { type: 'special', description: 'Ghoran race' },
      { type: 'special', description: 'Spelleater racial trait' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['ghoran', 'dispel', 'spell-like ability'],
  },
  {
    id: 'greater_weapon_shift',
    name: 'Greater Weapon Shift',
    description:
      "In animal form, your natural attacks are as deadly as the weapons you were holding. When applying a melee weapon's damage type and properties to your natural attacks using the Weapon Shift feat, your natural attacks also gain an enhancement bonus on attack and damage rolls equal to the weapon's enhancement bonus (if any).",
    shortDescription: "Natural attacks gain weapon's enhancement bonus when using Weapon Shift",
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_weapon_shift' },
      { type: 'feat', featId: 'weapon_shift' },
      { type: 'bab', minimum: 8 },
      { type: 'class_feature', featureName: 'wild shape' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['combat', 'wild shape', 'natural attacks', 'shifter', 'druid'],
  },
  {
    id: 'hefty_brute',
    name: 'Hefty Brute',
    description:
      'You are a larger specimen of your kind, whether due to different subspecies or superior nutrition and growth. You are treated as one size category larger for the purposes of calculating your CMB, CMD, carrying capacity, and size-based special attacks used by or against you, such as grab, swallow whole, and trample.',
    shortDescription:
      'Count as one size larger for CMB, CMD, carrying capacity, and size-based special attacks',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['monster'],
    prerequisites: [
      {
        type: 'special',
        description: 'Animal companion or familiar',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['companion', 'familiar', 'size', 'combat maneuver'],
  },
  {
    id: 'improved_weapon_shift',
    name: 'Improved Weapon Shift',
    description:
      "When you apply a melee weapon's damage type and properties to your natural attacks using the Weapon Shift feat, your natural attacks also gain the weapon special abilities of the weapon (such as flaming). This excludes the dancing ability and any special abilities restricted to thrown or ranged weapons. Enhancement bonuses from the original weapon do not transfer to the natural attacks.",
    shortDescription:
      "Natural attacks gain weapon's special abilities (not enhancement bonus) when using Weapon Shift",
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_shift' },
      { type: 'bab', minimum: 6 },
      { type: 'class_feature', featureName: 'wild shape' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['combat', 'wild shape', 'natural attacks', 'shifter', 'druid'],
  },
  {
    id: 'kudzu_invasion',
    name: 'Kudzu Invasion',
    description:
      'When you blind a creature using your Kudzu Grappler feat, you can also deal your unarmed strike damage to it.',
    shortDescription: 'Deal unarmed strike damage when blinding a creature with Kudzu Grappler',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'greater_grapple' },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Kudzu Grappler feat' },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Vine leshy race' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['combat', 'grapple', 'vine leshy', 'unarmed'],
  },
  {
    id: 'kudzu_takeover',
    name: 'Kudzu Takeover',
    description:
      'Opponents blinded by your Kudzu Grappler feat increase their miss chance against creatures they attack by 20%. For foes possessing blindsight or similar senses that bypass blindness, affected creatures gain normal concealment (20% miss chance) instead.',
    shortDescription:
      'Creatures blinded by Kudzu Grappler impose 20% increased miss chance on opponents',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'bab', minimum: 6 },
      { type: 'feat', featId: 'greater_grapple' },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Kudzu Grappler feat' },
      { type: 'feat', featId: 'kudzu_invasion' },
      { type: 'special', description: 'Vine leshy race' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['combat', 'grapple', 'vine leshy', 'blindness', 'concealment'],
  },
  {
    id: 'mighty_boughs',
    name: 'Mighty Boughs',
    description:
      'Your wings are particularly robust with sharp barbs. You gain two wing attacks. These are secondary natural attacks that deal 1d3 points of slashing damage (or 1d4 if you are Medium).',
    shortDescription:
      'Gain two secondary wing attacks dealing 1d3 (Small) or 1d4 (Medium) slashing damage',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'level', minimum: 11 },
      { type: 'special', description: 'Gathlain race' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'natural_attacks.wing',
        value: 2,
        source: 'Mighty Boughs',
      },
    ],
    activationMode: 'passive',
    tags: ['gathlain', 'natural attacks', 'wings', 'combat'],
  },
  {
    id: 'raking_claws',
    name: 'Raking Claws',
    description:
      'When you deal piercing or slashing damage with primary natural weapons, opponents suffer 1d6 points of bleed damage at the start of their turn each round, in addition to the damage dealt by the attack. The bleeding effect ends through a successful DC 15 Heal check or magical healing.',
    shortDescription:
      'Primary natural weapon hits cause 1d6 bleed damage per round (DC 15 Heal to stop)',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 8 },
      { type: 'special', description: 'Shifter class' },
      { type: 'class_feature', featureName: 'wild shape' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'natural_attacks.bleed',
        value: 6,
        condition: {
          type: 'custom',
          params: {},
          description: 'When dealing piercing or slashing damage with primary natural weapons',
        },
        source: 'Raking Claws',
      },
    ],
    activationMode: 'passive',
    tags: ['combat', 'shifter', 'natural attacks', 'bleed', 'wild shape'],
  },
  {
    id: 'repast_of_heroes',
    name: 'Repast of Heroes',
    description:
      "You can cast heroes' feast once per week as a spell-like ability with a caster level equal to your character level. However, using this ability causes you to lose access to spells normally granted by your natural magic racial trait for the following 48 hours.",
    shortDescription:
      "Cast heroes' feast 1/week as spell-like ability; lose natural magic spells for 48 hours",
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 15 },
      { type: 'level', minimum: 8 },
      { type: 'special', description: 'Ghoran race' },
      { type: 'special', description: 'Natural magic racial trait' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['ghoran', 'spell-like ability', 'feast', 'plant'],
  },
  {
    id: 'shapeless_familiar',
    name: 'Shapeless Familiar',
    description:
      'Your familiar obtains the change shape universal monster ability, functioning as beast shape II. The familiar gains a single alternate form, which must be the same size as the familiar. Once chosen, this form cannot be changed. You can gain this feat multiple times; each additional selection grants the familiar another alternate form. For familiars that already possess change shape (such as imps), this feat provides one additional form option.',
    shortDescription:
      'Familiar gains change shape (beast shape II) in one permanent alternate form; repeatable',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'familiar' },
      { type: 'caster_level', minimum: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'shapeshifting'],
  },
  {
    id: 'sinuous_vines',
    name: 'Sinuous Vines',
    description:
      'You gain a +2 bonus on combat maneuver checks to grapple, and your wings count as a free hand for the purpose of grappling a foe. You can maintain a grapple with your wings and still make attacks with your other limbs. You cannot fly while maintaining a grapple with your wings.',
    shortDescription:
      '+2 grapple CMB; wings act as free hand for grappling while retaining other attacks',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Gathlain race' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'combat_maneuver.grapple',
        value: 2,
        source: 'Sinuous Vines',
      },
    ],
    activationMode: 'passive',
    tags: ['gathlain', 'combat', 'grapple', 'wings'],
  },
  {
    id: 'spark_of_the_uncanny',
    name: 'Spark of the Uncanny',
    description:
      'Your familiar is able to speak a single language that you know. At 5th level, your familiar assumes its true form; you may exchange this feat for Improved Familiar instead.',
    shortDescription:
      'Familiar can speak one language you know; at 5th level may swap for Improved Familiar',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'familiar' }],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'language'],
  },
  {
    id: 'spellmirror',
    name: 'Spellmirror',
    description:
      'Once per day, you can use the dispel magic spell-like ability from your spelleater racial trait as an immediate action to attempt to counterspell. If the counterspell succeeds, the original spell reflects back to its caster as if they had cast it on themselves. Using this ability consumes your daily dispel magic use from the spelleater trait.',
    shortDescription:
      'Use spelleater dispel magic as immediate action counterspell that reflects spell back to caster',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'level', minimum: 6 },
      { type: 'special', description: 'Ghoran race' },
      { type: 'special', description: 'Spelleater racial trait' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['ghoran', 'counterspell', 'dispel', 'spell reflection'],
  },
  {
    id: 'strength_of_wood',
    name: 'Strength of Wood',
    description:
      'You draw strength from your woody vines to infuse your flesh with arboreal resilience. Once per day as a move action, you can activate hardened flesh for 1 minute. While active, you gain DR 5/slashing (DR 10/slashing at 11 or more Hit Dice) and a +2 bonus on saving throws against paralysis, polymorph, sleep, and stunning effects.',
    shortDescription:
      'Once/day 1 min: DR 5 (or 10) /slashing; +2 saves vs paralysis, polymorph, sleep, stunning',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'special', description: 'Gathlain race' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.damage_reduction',
        value: 5,
        condition: {
          type: 'custom',
          params: {},
          description: 'While hardened flesh is active (move action, 1/day, 1 minute)',
        },
        source: 'Strength of Wood',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'While hardened flesh is active (move action, 1/day, 1 minute)',
        },
        source: 'Strength of Wood',
      },
    ],
    activationMode: 'toggle',
    tags: ['gathlain', 'damage reduction', 'nature', 'plant', 'defensive'],
  },
  {
    id: 'treants_call',
    name: "Treant's Call",
    description:
      'You have learned some words of the mystic language treants use to call trees to their defense. Once per day, you can cast liveoak as a spell-like ability, though the duration is reduced to only 10 minutes.',
    shortDescription: 'Cast liveoak 1/day as spell-like ability (duration 10 minutes)',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 17 },
      { type: 'special', description: 'Ability to cast speak with plants' },
      { type: 'level', minimum: 13 },
      { type: 'special', description: 'Gathlain race' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['gathlain', 'spell-like ability', 'treant', 'nature', 'plant'],
  },
  {
    id: 'verdant_step',
    name: 'Verdant Step',
    description:
      'Once per day as a standard action, you can use an ability that functions as tree stride with the following modifications: duration of 1 round, transport range of 200 feet per character level, and you step into an adjacent plant sharing your affinity and exit from another of the same kind within range. Ghorans may traverse any living tree, while vine leshys can pass through any living vine. The ability also permits entry into magically created or enhanced plants (such as those from wall of thorns or entangle), with exit options including similar magical plants or affinity plants. The GM determines plant affinity for non-ghoran and non-vine leshy plant creatures.',
    shortDescription: 'Once/day tree stride through affinity plants: 1 round, 200 ft/level range',
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'level', minimum: 7 },
      { type: 'special', description: 'Plant type' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['plant', 'movement', 'teleportation', 'ghoran', 'vine leshy', 'nature'],
  },
  {
    id: 'weapon_shift',
    name: 'Weapon Shift',
    description:
      "When you use wild shape, your wielded melee weapons meld into your animal form. You select one weapon; your natural attacks then deal damage matching that weapon's damage type. Your natural attacks gain the weapon's properties (such as disarm or trip), excluding double weapon and fragile properties. When granting trip, you gain +2 on trip combat maneuver checks and cannot drop the weapon to avoid being tripped. This feat does not apply magic weapon enhancement bonuses to natural attacks, nor does it grant magical special abilities from weapons.",
    shortDescription:
      "Natural attacks gain wielded weapon's damage type and properties during wild shape",
    source: 'Wilderness Origins',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: 'wild shape' }],
    effects: [],
    activationMode: 'passive',
    tags: ['combat', 'wild shape', 'natural attacks', 'shifter', 'druid'],
  },
];

// CHECKPOINT: last_written=weapon_shift, written=28/28, status=complete
