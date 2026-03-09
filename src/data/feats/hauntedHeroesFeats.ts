import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const HAUNTED_HEROES_FEATS: FeatDefinition[] = [
  {
    id: 'banish_possessor',
    name: 'Banish Possessor',
    description:
      'Whenever you cast a spell or use a spell-like ability or supernatural ability that allows a creature that is being possessed by another creature to attempt a new saving throw to end the spell or effect (such as protection from evil), the possessed creature can roll the new saving throw twice and take the better of the two results as the actual result.',
    shortDescription:
      'Possessed creatures roll twice and take better result on saves to end possession effects you enable',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['possession', 'spirit', 'undead', 'saving throw'],
  },
  {
    id: 'channel_spirit',
    name: 'Channel Spirit',
    description:
      "Select one of the spirit legends available to a medium. You can trade control of your body to a spirit of this type for power. You must perform a seance, taking 1 hour and requiring your concentration. At the end of the seance, you invite a spirit of the chosen type to inhabit your body. You do not require an appropriate location to channel the spirit. You gain the benefits of the spirit's spirit bonus and seance boon, but no spirit powers. Your spirit bonus is +1, or equal to your spirit bonus from any medium class levels you have (whichever is higher). You don't select a taboo and the spirit gains no influence over you. You can continue to gain the benefits of the spiritual possession for up to 1 hour per character level you have. At the end of the duration, the spirit takes over your body, and you become an NPC under the GM's control for a duration equal to the amount of time the spirit possessed you. You may end the possession early as a free action, though the spirit still assumes control for the same duration. If you have the spirit class feature from the medium class, you cannot channel a spirit from this feat at the same time as your spirit class feature, but you gain your normal spirit powers for your medium level. You can take this feat multiple times; each time you do, you gain the ability to channel a different spirit legend.",
    shortDescription:
      'Channel a medium spirit legend for its spirit bonus and seance boon for 1 hour/level, then cede control for equal duration',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Spirit Ridden or spirit class feature' }],
    effects: [],
    activationMode: 'toggle',
    tags: ['spirit', 'medium', 'possession', 'seance'],
  },
  {
    id: 'deaths_host',
    name: "Death's Host",
    description:
      'When you are possessed by an undead creature that you do not control, you gain a +4 bonus on saving throws against death effects. Additionally, you remain conscious at negative hit points instead of falling unconscious, and you or your possessor gains a +4 bonus on the saving throw if forced to resist ending the possession effect.',
    shortDescription:
      '+4 vs death effects and remain conscious at negative HP when possessed by uncontrolled undead; +4 to resist ending possession',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Spell Focus (Necromancy)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'saves.all',
        value: 4,
        condition: {
          type: 'custom',
          description:
            'When saving against death effects while possessed by an uncontrolled undead creature',
          params: {},
        },
        source: "Death's Host",
      },
    ],
    activationMode: 'conditional',
    tags: ['undead', 'possession', 'death', 'saving throw'],
  },
  {
    id: 'ghostslayer',
    name: 'Ghostslayer',
    description:
      'As a swift action, you can imbue a weapon you are wielding with spiritual energies for 1 round. For that round, the imbued weapon damages incorporeal creatures as though it were magical. If your weapon already has an enhancement bonus of +2 or higher, it functions as a ghost touch weapon instead. A weapon imbued in this way can deal precision damage (such as sneak attack damage) to incorporeal creatures.',
    shortDescription:
      'As a swift action for 1 round, imbued weapon damages incorporeal creatures as magical (or ghost touch at +2 enhancement) and can deal precision damage',
    source: 'Haunted Heroes Handbook',
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 1 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 1 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['incorporeal', 'undead', 'spirit', 'weapon'],
  },
  {
    id: 'hands_autonomy',
    name: "Hand's Autonomy",
    description:
      'You reduce the penalties for fighting with two weapons (including fighting with double weapons or when throwing weapons from each hand) by 2, to a minimum penalty of –1. When you are unconscious, paralyzed, asleep, or stunned, your possessed hand can act independently. Each turn the hand can take one of the following actions: retrieve or pick up an item or weapon as a standard action; attempt a Disable Device, Escape Artist, Heal, Sleight of Hand, or Use Magic Device check as a standard action at a –4 penalty; take a free action to go prone or use a full-round action to drag you at 5 feet per round; perform other actions appropriate for a hand or arm; make a single melee or ranged attack with a light or one-handed weapon as a full-round action. The hand cannot take attacks of opportunity, but it can provoke them.',
    shortDescription:
      'Reduce two-weapon fighting penalties by 2 (min –1); possessed hand acts independently when you are incapacitated',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'possessed_hand' }],
    effects: [],
    activationMode: 'passive',
    tags: ['possessed hand', 'two-weapon fighting', 'spirit'],
  },
  {
    id: 'hands_detachment',
    name: "Hand's Detachment",
    description:
      "Removing or reattaching your possessed hand is a full-round action that deals no damage to you. While detached, your possessed hand functions as a crawling hand but is not undead, does not have mark quarry, and shares your alignment. The hand's effective wizard level for familiar purposes equals your character level; it lacks alertness, share spells, deliver touch spells, spell resistance, and scrying abilities. If the hand is destroyed, the spirit regenerates your missing hand in 2d4 days, though regenerate or a similar magic can accelerate this. You cannot use feats requiring the Possessed Hand feat until the hand fully regenerates. If you have the familiar class feature, your possessed hand can instead become your familiar, granting all standard familiar abilities and providing a +3 bonus on Sleight of Hand checks.",
    shortDescription:
      'Detach your possessed hand as a full-round action; it acts as an animate hand; can become your familiar',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'hands_autonomy' },
      { type: 'feat', featId: 'possessed_hand' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['possessed hand', 'familiar', 'spirit'],
  },
  {
    id: 'hands_knowledge',
    name: "Hand's Knowledge",
    description:
      'Select one Knowledge skill to become a class skill for you. Additionally, select one skill from the following: Disable Device, Escape Artist, Heal, Sleight of Hand, or Use Magic Device. This skill also becomes a class skill for you, and you can attempt checks with this skill untrained. Once per day as a swift action, you can gain a bonus to any of these skill checks equal to 1/2 your character level.',
    shortDescription:
      'Gain one Knowledge and one other skill as class skills; 1/day gain +1/2 level bonus to one of those skills as a swift action',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'possessed_hand' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['possessed hand', 'skills', 'spirit', 'knowledge'],
  },
  {
    id: 'hands_sight',
    name: "Hand's Sight",
    description:
      "While your possessed hand isn't carrying anything, you gain darkvision with a range of 60 feet and cannot be flanked.",
    shortDescription: 'While possessed hand is empty, gain darkvision 60 ft. and cannot be flanked',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'possessed_hand' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['possessed hand', 'darkvision', 'flanking', 'spirit'],
  },
  {
    id: 'haunt_scavenger',
    name: 'Haunt Scavenger',
    description:
      "You can harvest ectoplasmic remains from neutralized haunts, incorporeal undead, and creatures with possession abilities within 10 minutes of their defeat. You need access to an alchemist's lab and must begin extraction immediately; 1 minute of work prevents degradation for 24 hours. Each hour of harvesting requires a Craft (alchemy) or Knowledge (religion) check (DC 15 + the creature's CR). Success yields 50 gp worth of components per hour; failure by 4 or less allows retrying; failure by 5 or more spoils the source entirely. Each source yields maximum components equal to 50 gp × its CR. Harvested components can substitute for material components in enchantment or necromancy spells, extracts, or spell-completion items of equal or greater value, and can fund the gold cost for crafting enchantment or necromancy magic items.",
    shortDescription:
      'Harvest ectoplasm from defeated haunts and incorporeal undead to use as material components or crafting funds for enchantment/necromancy',
    source: 'Haunted Heroes Handbook',
    types: ['item_creation'],
    prerequisites: [
      { type: 'special', description: 'Any one item creation feat or Craft (alchemy) 3 ranks' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['haunt', 'incorporeal', 'crafting', 'ectoplasm', 'alchemy'],
  },
  {
    id: 'phantom_ally',
    name: 'Phantom Ally',
    description:
      'The abilities of your phantom are calculated as though you were 4 class levels higher, to a maximum effective spiritualist level equal to your character level.',
    shortDescription:
      "Your spiritualist phantom's abilities are calculated as if your class level were 4 higher (max = character level)",
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'Phantom' }],
    effects: [],
    activationMode: 'passive',
    tags: ['spiritualist', 'phantom', 'companion'],
  },
  {
    id: 'possessed_hand',
    name: 'Possessed Hand',
    description:
      "A ghost, spirit, or outsider with personal motivations permanently inhabits your hand. You take a permanent –2 penalty on concentration checks due to the entity's occasional uncontrolled antics. Your possessed hand grants you a +1 insight bonus on attack rolls and damage rolls made with one-handed weapons, light weapons, unarmed strikes, or natural attacks made with the possessed hand. You also gain a +1 insight bonus on Disable Device and Sleight of Hand checks. Once per day as a swift action, you can retrieve any stowed object on your person weighing 5 pounds or less.",
    shortDescription:
      '+1 insight on attacks/damage with possessed hand and on Disable Device/Sleight of Hand; 1/day swift-retrieve small item; –2 concentration',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'combat.attack',
        value: 1,
        condition: {
          type: 'custom',
          description:
            'With one-handed weapons, light weapons, unarmed strikes, or natural attacks made with the possessed hand',
          params: {},
        },
        source: 'Possessed Hand',
      },
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'skills.disable_device',
        value: 1,
        condition: {
          type: 'custom',
          description: 'Always active from possessed hand spirit',
          params: {},
        },
        source: 'Possessed Hand',
      },
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'skills.sleight_of_hand',
        value: 1,
        condition: {
          type: 'custom',
          description: 'Always active from possessed hand spirit',
          params: {},
        },
        source: 'Possessed Hand',
      },
    ],
    activationMode: 'passive',
    tags: ['spirit', 'possession', 'insight', 'hand'],
  },
  {
    id: 'rahadoumi_exorcist',
    name: 'Rahadoumi Exorcist',
    description:
      "As a full-round action, you can recite the Laws of Man with such force and dedication that you affect incorporeal and possessed creatures within 30 feet that you can see. A successful Will save (DC = 10 + 1/2 your Hit Dice + your Charisma modifier) negates the effects of this feat. An incorporeal undead creature that fails its save is staggered for 1 round. If you target a possessed creature, the possessing entity must succeed at a Will save to resist being staggered for 1 round. If the possessing entity is staggered, the possessed creature can immediately attempt a new saving throw to end the possession effect; this does not work on possession effects that don't normally allow a saving throw, though the possessing entity is still staggered. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
    shortDescription:
      'As a full-round action, stagger incorporeal undead or possessing entities within 30 ft (Will negates); staggered possessors allow host a new save to break free',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'iron_will' },
      { type: 'special', description: 'Cannot have a patron deity' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['exorcism', 'incorporeal', 'undead', 'possession', 'stagger'],
  },
  {
    id: 'respectful_prey',
    name: 'Respectful Prey',
    description:
      "You can prepare special offerings for nonhumanoid creatures a number of times per day equal to 3 + your Wisdom modifier. Each offering requires 5 minutes to prepare and at least 5 gp in ingredients. An offering remains fresh for 8 hours. When you present an offering to a creature as a standard action, the ingredients must be worth at least 5 gp × the creature's CR. The creature's attitude improves by one step unless it succeeds at a Will save (DC = 10 + 1/2 your level + your Wisdom modifier). This attitude boost lasts only 5 minutes unless further adjusted through skills such as Diplomacy. A specific creature cannot be affected by an offering made in this way more than once per 24 hours.",
    shortDescription:
      "Prepare offerings to improve a nonhumanoid creature's attitude by one step (Will negates); usable 3 + Wis modifier times per day",
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['diplomacy', 'monster', 'attitude', 'offering'],
  },
  {
    id: 'soulblade',
    name: 'Soulblade',
    description:
      'As a standard action, you can make a weapon attack against a haunt. If the attack is successful, it deals damage equal to your weapon dice plus any enhancement bonus, but not other bonuses such as those from Strength, Weapon Specialization, or sneak attack damage. You may apply any Vital Strike feat to this attack.',
    shortDescription:
      'As a standard action, attack a haunt for weapon dice + enhancement bonus damage; Vital Strike feats apply',
    source: 'Haunted Heroes Handbook',
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_religion', ranks: 1 },
      { type: 'skill', skillId: 'perception', ranks: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['haunt', 'incorporeal', 'spirit', 'weapon'],
  },
  {
    id: 'soulwrecking_strike',
    name: 'Soulwrecking Strike',
    description:
      "When you attack a creature that is being possessed by another creature, both the creature and any creature possessing it are damaged by your attack (the amount of damage includes your weapon's damage dice, your Strength modifier, weapon special abilities, and so on). The possessing entity may attempt a Will save (DC = 10 + 1/2 base attack bonus + Charisma modifier) to reduce the damage dealt to it by half. Damage Reduction applies normally, though incorporeal creatures take full damage as if they were corporeal.",
    shortDescription:
      'Attacks on possessed creatures also damage the possessing entity; possessor gets Will save for half damage; incorporeal possessors take full damage',
    source: 'Haunted Heroes Handbook',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'vital_strike' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['possession', 'incorporeal', 'spirit', 'weapon'],
  },
  {
    id: 'spirit_ally',
    name: 'Spirit Ally',
    description:
      'You gain an invisible, shapeless spiritual companion that provides constant assistance. The spirit functions as an unseen servant spell using your character level as the caster level. Its effective Strength increases by 2 for every 4 character levels (maximum Strength 12 at level 20). If the spirit is dispelled or dissipates, it automatically returns after 24 hours.',
    shortDescription:
      'Gain a permanent invisible spirit companion that functions as unseen servant (CL = character level); effective Strength increases with level',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [{ type: 'caster_level', minimum: 8 }],
    effects: [],
    activationMode: 'passive',
    tags: ['spirit', 'servant', 'unseen servant', 'supernatural'],
  },
  {
    id: 'spirit_oni_master',
    name: 'Spirit Oni Master',
    description:
      'Through forbidden blood pacts, you bind a spirit oni to your service. When wearing a specially crafted oni mask (which costs 50 gp), you gain a primary gore attack dealing 1d4 points of damage. If you have poison use, you can apply poison to this gore attack as a move action instead of the standard action normally required.',
    shortDescription:
      'While wearing an oni mask (50 gp), gain a primary gore attack (1d4); if you have poison use, applying poison to it is a move action',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_planes', ranks: 3 },
      { type: 'special', description: 'Lawful neutral, lawful evil, or neutral evil alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['oni', 'spirit', 'gore', 'poison', 'alignment'],
  },
  {
    id: 'spirit_ridden',
    name: 'Spirit Ridden',
    description:
      'You can invite lesser spirits to partially share your body in exchange for their training and experience. Once per day, you perform a seance (1 hour, requires your concentration) to call a nearby spirit possessing a desired skill. Upon completion, the spirit inhabits your body, granting you skill ranks equal to your character level in a skill of your choice, treated as a class skill. These benefits last for 1 hour per character level. You cannot exceed your total Hit Dice in skill ranks from a single skill. While possessed, the spirit influences your personality.',
    shortDescription:
      '1/day perform a seance to gain temporary skill ranks equal to your level in a chosen skill (treated as class skill) for 1 hour/level',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'toggle',
    tags: ['spirit', 'possession', 'skills', 'seance'],
  },
  {
    id: 'spiritual_training',
    name: 'Spiritual Training',
    description:
      "Through dedicated study and training, you can resist the control of possessing spirits. You gain a +2 competence bonus on Knowledge checks to identify creatures with the incorporeal subtype and can attempt such Knowledge checks untrained. When you are affected by a dominate person, magic jar, possession spell, or similar ability, your mind and soul remain aware within your body, at war with the invading consciousness. While dominated or possessed, you can attempt a Will save as a swift action to temporarily regain control over your body against the original effect's DC. On a successful save, you can act normally for 1 round. On a failed save, you cannot attempt to regain control for 1 hour, but the possessing consciousness cannot take a swift action that round.",
    shortDescription:
      '+2 competence on Knowledge checks vs. incorporeal creatures; while possessed, attempt Will saves as swift action to act normally for 1 round',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'skills.knowledge',
        value: 2,
        condition: {
          type: 'custom',
          description: 'On Knowledge checks to identify creatures with the incorporeal subtype',
          params: {},
        },
        source: 'Spiritual Training',
      },
    ],
    activationMode: 'passive',
    tags: ['incorporeal', 'possession', 'knowledge', 'resist', 'spirit'],
  },
  {
    id: 'studied_expertise',
    name: 'Studied Expertise',
    description:
      "You can spend one use of inspiration as a swift action to grant allies within 30 feet that can hear you a +4 insight bonus on attack rolls against one type of monster for 1 round, provided you succeeded at a Knowledge check to identify that type of monster's special powers or vulnerabilities no more than 1 minute earlier.",
    shortDescription:
      'Spend 1 inspiration as a swift action to grant allies within 30 ft. a +4 insight bonus on attacks vs. one monster type for 1 round',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Inspirational expertise investigator talent' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'combat.attack',
        value: 4,
        condition: {
          type: 'custom',
          description:
            'Allies within 30 ft. vs. identified monster type for 1 round after spending inspiration',
          params: {},
        },
        source: 'Studied Expertise',
      },
    ],
    activationMode: 'conditional',
    tags: ['investigator', 'inspiration', 'knowledge', 'teamwork', 'attack'],
  },
  {
    id: 'subconscious_usurpation',
    name: 'Subconscious Usurpation',
    description:
      "You have trained your subconscious to overpower your conscious mind under dire circumstances. At the start of any turn that you are under the effects of a compulsion, confusion, or possession effect, you can attempt a Will saving throw against the original effect's DC. If your saving throw is successful, you can perform one purely mental action (such as casting a psychic spell) as though you weren't under the effects of a compulsion, confusion, or possession effect. This mental action must be a free action, a swift action, a move action, or a standard action. All other actions that you take during the turn are subject to the compulsion, confusion, or possession effect.",
    shortDescription:
      'While compelled, confused, or possessed, attempt a Will save each turn to take one mental action freely; other actions still obey the effect',
    source: 'Haunted Heroes Handbook',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Base Will save bonus +2' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['possession', 'compulsion', 'confusion', 'psychic', 'will save'],
  },
];
