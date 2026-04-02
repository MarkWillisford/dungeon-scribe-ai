import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const CHRONICLE_LEGENDS_FEATS: FeatDefinition[] = [
  // ─── Chronicle of Legends (Pathfinder Player Companion, 2019) ──────────────

  {
    id: 'arcing_weapon',
    name: 'Arcing Weapon',
    description:
      "As a standard action, you can cast a ray spell that requires a ranged touch attack and deliver the effect through your melee weapon, either through a melee attack or as a ranged attack. If you deliver this spell as a melee attack, this functions as the magus spellstrike ability. If you deliver the spell as a ranged attack, the spell is a ranged touch attack that discharges from your weapon and applies the weapon's enhancement bonus to the spell's damage. When fired in this way, the spell uses the weapon's critical threat range, but the spell effect deals only x2 damage on a successful critical hit. You can use a ranged touch attack spell that targets more than one creature (such as scorching ray), but you make only one attack through your weapon to deliver one ranged touch effect; additional ranged touch attacks from the spell are wasted and have no effect.",
    shortDescription: 'Cast ray spells through your melee weapon as melee or ranged attacks.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Diverse training class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['eldritch-knight', 'spellcombat', 'ray', 'ranged-touch'],
  },

  {
    id: 'battle_planner',
    name: 'Battle Planner',
    description:
      'You expand the scope of your inspire action ability. Instead of affecting a single ally, you may now affect all allies within 30 feet when granting an extra move action through this ability.',
    shortDescription:
      'Your inspire action ability affects all allies within 30 feet instead of one.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Inspire action class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['pathfinder-chronicler', 'inspire-action', 'teamwork'],
  },

  {
    id: 'collectors_boon',
    name: "Collector's Boon",
    description:
      "You have a knack for unlocking the true potential of your magical equipment. When wearing or wielding at least two items from a set, you gain the two-item benefit listed in the set. Benefits requiring three or more pieces require the Improved Collector's Boon feat instead. You can't gain the set bonuses of more than one set at a time due to the interference of incompatible sympathetic magical effects. If you have multiple pieces of two or more sets, you must choose the set you gain the benefits of at the start of each day and can't change this decision for 24 hours.",
    shortDescription:
      'Unlock the two-item set bonus when wearing at least two items from a magical item set.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['general'],
    prerequisites: [{ type: 'level', minimum: 5 }],
    effects: [],
    activationMode: 'passive',
    tags: ['item-set', 'magic-items', 'equipment'],
  },

  {
    id: 'expanded_enhance_arrows',
    name: 'Expanded Enhance Arrows',
    description:
      'Your enhance arrows ability grants access to additional magical properties. At 3rd level, you gain access to the corrosive property. At 5th level, you can choose from the ghost touch, limning, or planar abilities instead of distance. At 7th level, the corrosive burst special ability becomes available.',
    shortDescription:
      'Your enhance arrows ability grants access to additional magical properties including corrosive, ghost touch, limning, and planar.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Enhance arrows class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['arcane-archer', 'enhance-arrows', 'archery'],
  },

  {
    id: 'explosive_weapon',
    name: 'Explosive Weapon',
    description:
      "As a standard action, you can cast a spell with an instantaneous area effect (such as fireball) and release it through your melee weapon as part of an attack. The spell damage does not multiply on a critical hit, the effect is centered on you, and you are excluded from the spell's effects. This functions similarly to the magus spellstrike ability with these noted modifications.",
    shortDescription:
      'Channel an instantaneous area-effect spell through your melee weapon, centered on yourself.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'arcing_weapon' },
      { type: 'special', description: 'Diverse training class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['eldritch-knight', 'spellcombat', 'area-effect'],
  },

  {
    id: 'extra_hail_of_arrows',
    name: 'Extra Hail of Arrows',
    description:
      'You are a master at raining arrows upon your foes. You can use your hail of arrows ability one additional time per day.',
    shortDescription: 'Use your hail of arrows ability one additional time per day.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Hail of arrows class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['arcane-archer', 'hail-of-arrows', 'archery'],
  },

  {
    id: 'extra_spell_synthesis',
    name: 'Extra Spell Synthesis',
    description: 'You can perform an additional spell synthesis once per day.',
    shortDescription: 'Use your spell synthesis ability one additional time per day.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Spell synthesis class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mystic-theurge', 'spell-synthesis'],
  },

  {
    id: 'improved_collectors_boon',
    name: "Improved Collector's Boon",
    description:
      'Your knack for unlocking the true potential of magical equipment allows you to draw great power from your equipment. When wearing or wielding at least three items from a magical set, you gain the benefits of the three-, four-, and five-item set bonuses as applicable. Additionally, you gain a +2 circumstance bonus on Use Magic Device checks when wielding at least five magical items total. Gauntlets that are part of a suit of magic armor count as a separate magic item only if they have been enchanted as weapons.',
    shortDescription:
      'Unlock three-, four-, and five-item set bonuses; gain +2 on Use Magic Device checks with five or more magic items.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'collectors_boon' },
      { type: 'level', minimum: 9 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skill.use_magic_device',
        value: 2,
        source: "Improved Collector's Boon",
        condition: {
          type: 'custom',
          description: 'When wielding at least five magical items total',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['item-set', 'magic-items', 'equipment', 'use-magic-device'],
  },

  {
    id: 'lesser_spell_synthesis',
    name: 'Lesser Spell Synthesis',
    description:
      'Once per day, you can cast two spells, each from a different spellcasting class, as a full-round action. Both spells must have a casting time of 1 standard action and be at a spell level equal to or lower than what you can prepare with your combined spells ability. Spell decisions such as targets are made independently. You can select this feat multiple times. Each time you take the feat, you can use this ability one additional time per day.',
    shortDescription:
      'Once per day, cast two spells from different spellcasting classes simultaneously as a full-round action.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Combined spells class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['mystic-theurge', 'combined-spells', 'multi-class-casting'],
  },

  {
    id: 'lingering_breath',
    name: 'Lingering Breath',
    description:
      'Your powerful draconic breath coats the battlefield. A creature that fails its save against your breath weapon is covered in a clinging effect that deals a number of points of damage equal to 1d6 x the number of times per day you can use your breath weapon. This lingering damage is of the same energy type as your breath weapon. The lingering breath effect remains for a number of rounds equal to your dragon disciple level, but in each subsequent round, a creature can spend a standard action to attempt another save against your breath weapon DC to remove the effect.',
    shortDescription:
      'Creatures that fail their save against your breath weapon suffer lingering energy damage each round.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat'],
    prerequisites: [{ type: 'level', class: 'dragon_disciple', minimum: 3 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['dragon-disciple', 'breath-weapon', 'energy-damage'],
  },

  {
    id: 'magic_trick',
    name: 'Magic Trick',
    description:
      "Choose one spell. You are able to manipulate that spell beyond its typical uses. You can use any magic tricks relating to the chosen spell so long as you meet the appropriate magic trick requirements. You can select the Magic Trick feat multiple times. Each time you take the feat, it applies to a new type of spell. Magic tricks are available for the following spells: Daylight (Barrier of Light, Blades of Light, Burst of Sunlight, Convincing Halo, Pin Sunlight, Vessel of Light), Fireball (Alchemist's Inferno, Cluster Bomb, Concentrated Fire, Sculpt Flames, Where There's Smoke), Floating Disk (Defensive Disk, Disk Rider, Drifting Defense, Expanded Disk, Force Check, Spurn Gravity), Mage Hand (Dirty Magic Trick, Powerful Hand, Ranged Aid, Reaching Hand, Subtle Hand, Throw Punch), Obscuring Mist (Clinging Mist, Hydrating Mist, Mist Screen, Obscure Self, Obscure Terrain, Quenching Mist), Prestidigitation (Adjust Scent, Chromatic Savant, Lasting Changes, Minor Levitation, Repulsive Flavor, Thaumaturgic Aesthetics), Shield (Friendly Shield, Force Bash, Force Equipment, Instant Cover, Reflective Shield), and Unseen Servant (Phantom Decoy, Unfettered Servant, Unseen Apprentice, Unseen Assistant, Unseen Squire, Unseen Warrior).",
    shortDescription:
      'Choose one spell; you can use special magic tricks with that spell that go beyond its normal effects.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Ability to cast the chosen spell or use it as a spell-like ability',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spellcasting', 'spell-modification', 'versatile-spellcaster'],
  },

  {
    id: 'mind_strike',
    name: 'Mind Strike',
    description:
      'When you deal sneak attack damage, the target suffers a penalty on Will saves equal to the number of sneak attack dice you rolled for 1 round. This penalty does not stack with itself, but the duration is extended by 1 round each time you deal sneak attack damage to an affected target.',
    shortDescription:
      'Your sneak attacks impose a Will save penalty equal to your sneak attack dice for 1 round.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Ranged legerdemain class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['arcane-trickster', 'sneak-attack', 'will-save', 'debuff'],
  },

  {
    id: 'murderous_sniper',
    name: 'Murderous Sniper',
    description:
      'You can use ranged weapons for death attacks. Your target must be within 30 feet when attempting the death attack. For every additional round you spend studying the target, you can extend the range from which you can make a ranged death attack by 10 feet.',
    shortDescription:
      'Use death attacks with ranged weapons from within 30 feet, extending range with additional study rounds.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Death attack class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['assassin', 'death-attack', 'ranged', 'study'],
  },

  {
    id: 'secret_of_magical_discipline',
    name: 'Secret of Magical Discipline',
    description:
      'Your study and devotion to magic allows you to access spells beyond your ken. Once per day, you can cast any spell as if it were one of your prepared spells or spells known, expending either a spell slot or prepared spell of the same level. Such casting requires a minimum casting time of 1 full round. You can gain this feat multiple times. Each time you take the feat, you can use this ability one additional time per day.',
    shortDescription:
      'Once per day, cast any spell as if it were one of your prepared spells or spells known by expending a matching spell slot.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Secret class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['loremaster', 'versatile-spellcaster', 'spontaneous-casting'],
  },

  {
    id: 'shadows_embrace',
    name: "Shadow's Embrace",
    description:
      'Shadows rise and fall at your whim. You can encase yourself in shadows functioning as the darkness spell, with your shadowdancer level determining the caster level. As a standard action, you may adjust the illumination from complete darkness to normal light.',
    shortDescription:
      'Encase yourself in a darkness effect with caster level equal to your shadowdancer level; adjust light level as a standard action.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Shadow illusion class feature' }],
    effects: [],
    activationMode: 'toggle',
    tags: ['shadowdancer', 'darkness', 'illumination'],
  },

  {
    id: 'storm_of_arrows',
    name: 'Storm of Arrows',
    description:
      'When using hail of arrows, you can target up to two targets for every arcane archer level you have.',
    shortDescription: 'Your hail of arrows can target up to two creatures per arcane archer level.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Hail of arrows class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['arcane-archer', 'hail-of-arrows', 'archery', 'multi-target'],
  },

  {
    id: 'surprising_strategy',
    name: 'Surprising Strategy',
    description:
      'In addition to the attack of opportunity you can make when you successfully parry an attack, you can attempt a dirty trick, disarm, or sunder combat maneuver with a +2 morale bonus without provoking an attack of opportunity against the creature whose attack you parry, so long as the creature is within reach.',
    shortDescription:
      'When you parry an attack, you may also attempt a dirty trick, disarm, or sunder maneuver with a +2 morale bonus without provoking attacks of opportunity.',
    source: 'Pathfinder Player Companion: Chronicle of Legends',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Riposte class feature' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'cmb',
        value: 2,
        source: 'Surprising Strategy',
        condition: {
          type: 'custom',
          description: 'On dirty trick, disarm, or sunder attempts made after a successful parry',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['duelist', 'parry', 'riposte', 'combat-maneuver', 'dirty-trick', 'disarm', 'sunder'],
  },
];

// CHECKPOINT: last_written=surprising_strategy, written=17/17, status=complete
