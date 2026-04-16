import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const POTIONS_POISONS_FEATS: FeatDefinition[] = [
  {
    id: 'delayed_potion',
    name: 'Delayed Potion',
    description:
      "When crafting a potion, you can designate that its effects activate after a delay of up to 10 rounds after a creature consumes it. Once set, the delay duration cannot be altered. The delayed rounds do not consume any of the potion's actual duration.",
    shortDescription: 'Craft potions whose effects trigger after a delay of up to 10 rounds',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['item_creation'],
    prerequisites: [
      { type: 'feat', featId: 'brew_potion' },
      { type: 'caster_level', minimum: 5 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['potion', 'brewing', 'alchemy'],
  },
  {
    id: 'dispelling_blood',
    name: 'Dispelling Blood',
    description:
      'As a swift action, you can alter the effects of your vishkanya venom to affect magic instead of flesh. When activated, the venom functions as a targeted dispel magic effect, using your character level as the caster level. This works against creatures even if they possess immunity to poison, and replaces the normal Dexterity damage from standard vishkanya venom.',
    shortDescription:
      'Alter vishkanya venom to function as targeted dispel magic as a swift action',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['blood_hex'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 7 },
      { type: 'special', description: 'Vishkanya race' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Dispelling Blood',
      },
    ],
    activationMode: 'conditional',
    tags: ['vishkanya', 'poison', 'dispel', 'racial'],
  },
  {
    id: 'ghostbane_ichor',
    name: 'Ghostbane Ichor',
    description:
      'Your venom is powerful enough to seep into the Ethereal Plane. As a swift action, you can alter your vishkanya venom so that it lasts a number of rounds equal to your Constitution modifier, grants the ghost touch special ability to weapons envenomed with it, and deals 1d6 extra damage against incorporeal creatures. This effect works on poison-immune creatures. The venom expends upon hitting a corporeal target, ending all granted effects.',
    shortDescription:
      'Alter vishkanya venom to grant ghost touch and deal extra damage to incorporeal creatures',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_religion', ranks: 9 },
      { type: 'special', description: 'Vishkanya race' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Ghostbane Ichor',
      },
    ],
    activationMode: 'conditional',
    tags: ['vishkanya', 'poison', 'incorporeal', 'ghost touch', 'racial'],
  },
  {
    id: 'healing_potion_feat',
    name: 'Healing Potion',
    description:
      'When crafting a potion, you can infuse a healing spell into a potion that produces a different effect. The resulting potion produces both effects simultaneously upon consumption. The combined spell levels of the cure spell and the other spell used must be 3rd level or less. You must expend both spells as separate potion components and pay double the normal crafting cost.',
    shortDescription: 'Brew potions that combine a cure spell with another spell effect',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['item_creation'],
    prerequisites: [
      { type: 'feat', featId: 'brew_potion' },
      { type: 'special', description: 'Ability to cast cure serious wounds' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['potion', 'brewing', 'healing', 'alchemy'],
  },
  {
    id: 'hemorrhaging_venom',
    name: 'Hemorrhaging Venom',
    description:
      'Your venomous spit causes devastating vascular damage. When a target fails its saving throw against your nagaji spit venom, it takes an additional 2d6 points of bleed damage in addition to all other effects. This bleeding damage can be stopped with a DC 15 Heal check or any effect that restores hit points. You also gain one additional daily use of the Spit Venom ability.',
    shortDescription:
      'Spit venom causes 2d6 bleed damage on a failed save; gain one extra daily use',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'spit_venom' },
      { type: 'feat', featId: 'virulent_venom' },
      { type: 'bab', minimum: 7 },
      { type: 'special', description: 'Nagaji race' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Hemorrhaging Venom',
      },
    ],
    activationMode: 'conditional',
    tags: ['nagaji', 'poison', 'bleed', 'venom', 'racial'],
  },
  {
    id: 'lengthy_potion',
    name: 'Lengthy Potion',
    description:
      "When crafting a potion from a spell with a duration of 1 round per caster level, you can extend that duration to 1 minute for the purposes of the resulting potion's effects. This duration extension only applies to potions, not normal spell casting, and cannot be combined with other duration-increasing effects such as Extend Spell metamagic. This requires using a spell slot one level higher than the spell's actual level during crafting.",
    shortDescription: "Extend a potion's round/level duration spells to 1 minute",
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['item_creation'],
    prerequisites: [
      { type: 'feat', featId: 'brew_potion' },
      { type: 'caster_level', minimum: 10 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['potion', 'brewing', 'duration', 'alchemy'],
  },
  {
    id: 'noxious_touch',
    name: 'Noxious Touch',
    description:
      'You reflexively excrete poison in response to trauma. When struck by an unarmed strike or natural weapon, you can expend one use of your toxic skin racial ability as an immediate action. This triggers your grippli poison effect against the creature that hit you, as though you had applied the poison to your own body.',
    shortDescription: 'Expend toxic skin as an immediate action when struck to poison the attacker',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Grippli race with toxic skin alternate racial trait' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Noxious Touch',
      },
    ],
    activationMode: 'conditional',
    tags: ['grippli', 'poison', 'toxic skin', 'racial', 'immediate action'],
  },
  {
    id: 'poison_resin',
    name: 'Poison Resin',
    description:
      'As a standard action, you can expend one use of your toxic skin ability to fashion your hardened toxic secretions into any simple light weapon. The weapon lasts for 1 hour. Once per minute, you can apply your grippli racial poison to attacks made with the weapon, up to a number of times per day equal to your Constitution modifier. Any non-grippli creature that wields the weapon is automatically exposed to the poison.',
    shortDescription:
      'Spend a use of toxic skin to craft a simple light weapon coated in grippli poison',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Grippli race with toxic skin alternate racial trait' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Poison Resin',
      },
    ],
    activationMode: 'conditional',
    tags: ['grippli', 'poison', 'toxic skin', 'racial', 'crafting'],
  },
  {
    id: 'toxic_secretions',
    name: 'Toxic Secretions',
    description:
      'You can produce unusually large amounts of toxic secretions. You gain two additional uses of your toxic skin alternate racial trait per day. This feat can be taken multiple times; each time you take it, you gain two additional daily uses of toxic skin.',
    shortDescription: 'Gain two additional daily uses of the toxic skin alternate racial trait',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Grippli race with toxic skin alternate racial trait' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['grippli', 'poison', 'toxic skin', 'racial'],
  },
  {
    id: 'toxic_spray',
    name: 'Toxic Spray',
    description:
      'You can produce enough venom to cast a web of poison over your hapless victims. When using your Spit Venom ability, you can instead envenom a 5-foot-radius area within 30 feet for 1 round. Any creature entering or starting its turn in this area is exposed to both the poison from Spit Venom and the entanglement effects from Viscous Venom. You also gain one additional daily use of the Spit Venom ability.',
    shortDescription: 'Spit Venom creates a 5-ft-radius poison cloud; gain one extra daily use',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'spit_venom' },
      { type: 'feat', featId: 'viscous_venom' },
      { type: 'special', description: 'Nagaji race' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Toxic Spray',
      },
    ],
    activationMode: 'conditional',
    tags: ['nagaji', 'poison', 'venom', 'area', 'racial'],
  },
  {
    id: 'unraveling_blood',
    name: 'Unraveling Blood',
    description:
      'Your toxic blood has the power to destroy both flesh and foul curses. As a swift action, you can modify your vishkanya venom to function as the break enchantment spell, using your character level as the caster level. This dispelling effect works on creatures even if they possess immunity to poison. Normally, vishkanya venom inflicts Dexterity damage instead.',
    shortDescription: 'Alter vishkanya venom to function as break enchantment as a swift action',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['blood_hex'],
    prerequisites: [
      { type: 'feat', featId: 'dispelling_blood' },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 9 },
      { type: 'special', description: 'Vishkanya race' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Unraveling Blood',
      },
    ],
    activationMode: 'conditional',
    tags: ['vishkanya', 'poison', 'break enchantment', 'racial'],
  },
  {
    id: 'vaporous_potion',
    name: 'Vaporous Potion',
    description:
      "You can brew potions that transform into inhalable vapor when exposed to air. The potion functions normally when consumed directly but can alternatively be thrown as a splash weapon with a 10-foot range increment. Upon impact, the vial shatters and releases vapor confined to a single square. Creatures in that square immediately gain the potion's benefits. The vapor persists 1d3+1 rounds if no creature is present; the first creature to enter the space receives the benefits. Creatures can hold their breath to avoid inhaling. Only one creature benefits per potion.",
    shortDescription:
      'Brew potions that can be thrown as splash weapons, releasing an inhalable vapor',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['item_creation'],
    prerequisites: [{ type: 'feat', featId: 'brew_potion' }],
    effects: [],
    activationMode: 'passive',
    tags: ['potion', 'brewing', 'alchemy', 'thrown weapon'],
  },
  {
    id: 'virulent_venom',
    name: 'Virulent Venom',
    description:
      'The poison that drips from your fangs is potent enough to burn through flesh and wood. Your Spit Venom ability deals 1d6 points of acid damage plus an additional 1d6 for every 3 Hit Dice you possess. This extra acid damage applies even if the target has poison immunity or succeeds on its Fortitude save. You also gain one additional daily use of the spit poison ability from the Spit Venom feat.',
    shortDescription:
      'Spit Venom deals acid damage even on saves or to poison-immune targets; gain one extra daily use',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'spit_venom' },
      { type: 'special', description: 'Nagaji race' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Virulent Venom',
      },
    ],
    activationMode: 'conditional',
    tags: ['nagaji', 'poison', 'acid', 'venom', 'racial'],
  },
  {
    id: 'viscous_venom',
    name: 'Viscous Venom',
    description:
      'Your venom is abnormally thick and adhesive. When you strike a target with your Spit Venom ability, the target becomes entangled in addition to being exposed to your nagaji poison. An entangled creature can escape via a DC 15 Strength check, a DC 15 Escape Artist check (full-round action), or by dealing 15 points of slashing damage to the substance. You also gain one additional daily use of the Spit Venom ability.',
    shortDescription:
      'Spit Venom entangles targets in addition to poisoning them; gain one extra daily use',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'spit_venom' },
      { type: 'special', description: 'Nagaji race' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Viscous Venom',
      },
    ],
    activationMode: 'conditional',
    tags: ['nagaji', 'poison', 'venom', 'entangle', 'racial'],
  },
  {
    id: 'warding_blood',
    name: 'Warding Blood',
    description:
      'Over the course of 10 minutes, you can coat a 10-foot by 10-foot area with your blood, expending two uses of your venom. This creates a forbiddance magical effect in that area using your character level as caster level (maximum 20th). The save DC equals 15 + your Charisma modifier. Creatures taking damage from the forbiddance effect are also exposed to your vishkanya venom. If you have venom-altering abilities, you must select which effect applies when establishing the venomous area.',
    shortDescription:
      'Expend two venom uses to coat an area with a forbiddance effect that also exposes intruders to vishkanya venom',
    source: 'Pathfinder Player Companion: Potions & Poisons',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'ghostbane_ichor' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 13 },
      { type: 'special', description: 'Vishkanya race' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Warding Blood',
      },
    ],
    activationMode: 'conditional',
    tags: ['vishkanya', 'poison', 'forbiddance', 'warding', 'racial'],
  },
];

// CHECKPOINT: last_written=warding_blood, written=15/15, status=complete
