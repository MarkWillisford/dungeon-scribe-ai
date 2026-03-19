// Batch 018 | first: 'Half-Marilith' | last: 'Icy Creature' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_018: TemplateDefinition[] = [
  // 426. Half-Marilith (CR +1 above standard half-fiend)
  {
    id: 'half-marilith',
    name: 'Half-Marilith',
    description: "A half-marilith has the lower body of a great serpent and four arms. Her eyes are pale (giving the appearance of having no pupils), and a short row of horns runs along the top of her head down her back. She typically serves as a commander of an army, although she also excels as an assassin. A half-marilith's CR is +1 higher than a half-fiend of its Hit Dice would normally be. Like the base half-fiend, this inherited template grants outsider (native) type, darkvision 60 ft., poison immunity, acid/cold/electricity/fire resistance 10, DR 5/magic (11 HD or less) or 10/magic (12+ HD), and SR equal to CR +11. Unlike standard half-fiends, half-mariliths have no fly speed but gain a tail slap attack with grab and constrict, two extra arms for wielding weapons, and altered spell-like abilities (fly, greater magic weapon, true seeing, greater teleport, blade barrier).",
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Multiweapon Mastery',
        description: "A half-marilith never takes penalties to her attack roll when fighting with multiple weapons, and treats all off-hand weapons as if they were light weapons.",
      },
      {
        scalingType: 'flat',
        name: 'Tail Slap',
        description: "A half-marilith gains a tail slap natural attack. On a successful hit, she can attempt a free grapple check. A grappled target is also subject to the half-marilith's constrict ability, dealing tail slap damage each round.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    visibility: 'global',
    rev: 1,
  },

  // 427. Half-Nabasu (CR +?)
  {
    id: 'half-nabasu',
    name: 'Half-Nabasu',
    description: "A half-nabasu has dark fur or hair, batlike ears and wings, a fanged mouth, taloned fingers, and distinctive sunken red glowing eyes. Characteristically solitary, predatory, and often serial killers or sadists, they have a particular hunger for consuming the flesh of their non-demonic parent race. As a variant of the half-fiend template, a half-nabasu gains outsider (native) type, darkvision 60 ft., poison immunity, acid/cold/electricity/fire resistance 10, DR by HD, SR by CR, fly speed, and claws/bite, but replaces standard half-fiend spell-like abilities with: silence (instead of desecrate), vampiric touch 3/day (instead of poison), enervation (instead of contagion), greater teleport (instead of unhallow), and energy drain (instead of horrid wilting). CR adjustment is variable based on HD.",
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Resist Death (Su)',
        description: "A half-nabasu is immune to death effects.",
      },
      {
        scalingType: 'flat',
        name: 'Consume Flesh (Su)',
        description: "Once per day, a half-nabasu can spend 10 minutes consuming a corpse of the same race as its non-demonic parent, gaining a +2 profane bonus to attacks, damage rolls, and AC, plus 2 temporary hit points per Hit Die, for 1 hour per Hit Die.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    visibility: 'global',
    rev: 1,
  },

  // 428. Half-Nalfeshnee (CR +?)
  {
    id: 'half-nalfeshnee',
    name: 'Half-Nalfeshnee',
    description: "A half-nalfeshnee is a towering foe, generally standing a foot or two taller than is typical for its non-demonic parent without increasing size category. It possesses hideously porcine features including jutting lower teeth and beady eyes, small feathered wings, oversized hands with sharp nails, and bristly fur patches. It gains a fly speed equal to its base land speed with clumsy maneuverability. As a variant of the half-fiend template, a half-nalfeshnee gains outsider (native) type, darkvision 60 ft., poison immunity, acid/cold/electricity/fire resistance 10, DR by HD, SR by CR, claws/bite, and natural armor +1, but replaces standard half-fiend spell-like abilities with: slow 3/day (instead of poison), feeblemind (instead of contagion), greater teleport (instead of unhallow), and greater dispel magic 3/day (instead of horrid wilting). CR adjustment is variable based on HD.",
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Unholy Flash (Su)',
        description: "Once per day as a free action, the half-nalfeshnee activates an aura. One round later, the aura bursts in a 20-foot radius. Non-demon creatures must succeed on a Will save (DC = 10 + 1/2 HD + Charisma modifier) or become nauseated for 1d6 rounds.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    visibility: 'global',
    rev: 1,
  },

  // 429. Half-Succubus (CR +?)
  {
    id: 'half-succubus',
    name: 'Half-Succubus',
    description: "A half-succubus appears humanoid and closely resembles a full succubus. These creatures often pursue roles satisfying their desires, working as brothel operators or prostitutes, though some become dangerous assassins or spies by controlling their impulses. As a variant of the half-fiend template, a half-succubus gains outsider (native) type, darkvision 60 ft., poison immunity, acid/cold/electricity/fire resistance 10, DR by HD, SR by CR, claws/bite, natural armor +1, and a fly speed, but replaces standard half-fiend spell-like abilities with: detect thoughts, charm monster 3/day, dominate person, greater teleport, ethereal jaunt, and dominate monster. CR adjustment is variable based on HD.",
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 8 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Passion (Su)',
        description: "The half-succubus drains energy from a willing or grappled partner, inflicting one negative level. She may use this ability a number of times per day equal to her Hit Dice. The save DC to remove the negative level equals 10 + her HD + her Charisma modifier.",
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description: "Once per day, the half-succubus can assume any humanoid form as alter self.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    visibility: 'global',
    rev: 1,
  },

  // 430. Half-Vrock (CR +?)
  {
    id: 'half-vrock',
    name: 'Half-Vrock',
    description: "A half-vrock is a grotesque humanoid combining vrock demon features with a humanoid form. Features include a vulture-like visage, oily black feathers instead of hair, large wings, taloned hands, and a thin tail. Characters with this template often serve as soldiers or mercenaries. As a variant of the half-fiend template, a half-vrock gains outsider (native) type, darkvision 60 ft., poison immunity, acid/cold/electricity/fire resistance 10, DR by HD, SR by CR, claws/bite, a fly speed, and natural armor +1, but replaces standard half-fiend spell-like abilities with: mirror image, telekinesis, greater teleport, and chain lightning 3/day. CR adjustment is variable based on HD.",
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: -4 },
      { ability: 'CHA', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Spores (Ex)',
        description: "A half-vrock is covered with a fine layer of spores. Any creature that strikes the half-vrock in melee becomes infected with these spores and is sickened for 2d4 rounds. There is a one-minute cooldown between spore exposures from the same half-vrock.",
      },
      {
        scalingType: 'flat',
        name: 'Shriek (Su)',
        description: "Once per day, the half-vrock emits a shrill scream affecting all non-demon creatures within 30 feet. Creatures that fail a Fortitude save become staggered for 1 round.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    visibility: 'global',
    rev: 1,
  },

  // 431. Half-Janni (CR +2)
  {
    id: 'half-janni',
    name: 'Half-Janni',
    description: "An inherited template applied to any human base creature, transforming them into an outsider with janni heritage. The creature's type changes to outsider (augmented humanoid, human, native), with HD, base attack bonus, and saves unchanged.",
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'outsider',
    subtypeGains: ['augmented', 'native'],
    naturalArmorChange: 1,
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Flight',
        description: "The half-janni gains a fly speed of 20 feet with good maneuverability.",
      },
      {
        scalingType: 'hd_threshold',
        name: 'Speak with Animals (Sp)',
        description: "At levels 1-2, the half-janni can use speak with animals 3/day. Caster level equals creature level; save DCs are Charisma-based.",
        minimumHD: 1,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Enlarge/Reduce Person (Sp)',
        description: "At levels 3-6, the half-janni gains enlarge person or reduce person 2/day (cumulative with prior abilities). Caster level equals creature level.",
        minimumHD: 3,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Invisibility (Sp)',
        description: "At levels 7-8, the half-janni can use invisibility (self only) 3/day. Caster level equals creature level.",
        minimumHD: 7,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Create Food and Water (Sp)',
        description: "At levels 9-14, the half-janni can use create food and water 1/day. Caster level equals creature level.",
        minimumHD: 9,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Ethereal Jaunt (Sp)',
        description: "At levels 15-16, the half-janni can use ethereal jaunt 1/day. Caster level equals creature level.",
        minimumHD: 15,
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Companion: Qadira, Gateway to the East',
    },
    visibility: 'global',
    rev: 1,
  },

  // 432. Half-Serpent Template (CR +1)
  {
    id: 'half-serpent',
    name: 'Half-Serpent Template',
    description: "The creature appears to be a grotesque cross between a snake and its original form. These crossbreeds are revered by snake cults and may result from divine intervention, curses, or magical experimentation. The template can be applied multiple times, each application increasing CR by +1 and granting one additional snake feature. Applicable to any corporeal bipedal or quadruped creature. All racial Hit Dice convert to d8s.",
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Scales',
        description: "The half-serpent's natural armor bonus increases by +2 from thick scales covering its body.",
      },
      {
        scalingType: 'flat',
        name: 'Stealth Enhancement',
        description: "The half-serpent gains a +2 bonus on all Stealth checks.",
      },
      {
        scalingType: 'flat',
        name: 'Snake Feature',
        description: "Choose one: Snake arms (non-poisonous bite attacks replacing hands); Snake eyes and tongue (enhanced Perception, Intimidate, low-light vision, and Scent ability); Snake head (Scent and a poisonous bite dealing Constitution damage); or Snake tail (speed reduced to 20 ft., enhanced Climb and grappling, and Constrict ability).",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown Publisher',
      publication: 'd20PFSRD Community',
    },
    visibility: 'global',
    rev: 1,
  },

  // 433. Half-Umbral Dragon (CR +2)
  {
    id: 'half-umbral-dragon',
    name: 'Half-Umbral Dragon',
    description: "Half-Umbral Dragons are only rarely the result of Umbral dragons mating with other creatures—most are the result of strange magical experiments. This template has a minimum CR of 3. The base creature's type changes to dragon; Hit Dice, Base Attack Bonus, and Saving Throws remain unchanged.",
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    typeChange: 'dragon',
    naturalArmorChange: 4,
    abilityScoreChanges: [
      { ability: 'STR', change: 8 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    immunities: ['sleep', 'paralysis', 'negative energy damage', 'Strength drain'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision and Low-Light Vision',
        description: "The half-umbral dragon gains darkvision 60 feet and low-light vision.",
      },
      {
        scalingType: 'flat',
        name: 'Wings',
        description: "The half-umbral dragon gains wings allowing flight at twice its base land speed with average maneuverability.",
      },
      {
        scalingType: 'flat',
        name: 'Claws and Bite',
        description: "The half-umbral dragon gains two claw attacks and one bite attack. Claws and bite deal size-appropriate damage.",
      },
      {
        scalingType: 'flat',
        name: 'Cone of Negative Energy (Su)',
        description: "Once per day, the half-umbral dragon can breathe a 30-foot cone of negative energy dealing 6d8 damage. Creatures may attempt a Reflex save (DC = 10 + 1/2 racial HD + Constitution modifier) for half damage.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Adventure Path #11: Skeletons of Scarwall',
    },
    visibility: 'global',
    rev: 1,
  },

  // 434. Haunted Construct (CR +1) [first variant]
  {
    id: 'haunted-construct-cr-1',
    name: 'Haunted Construct (CR +1)',
    description: "A soul drawn to a construct in desperation to continue existing animates it as a ghostly apparition. These entities are typically malevolent, seeking to harm the living and force them into their tortured existence. This is an acquired template applicable to any construct. Alignment is always evil.",
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'INT', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote: "If the base creature's Charisma is below 10, it becomes 14 instead of gaining +4. If the base creature lacks an Intelligence score, it gains 4.",
    features: [
      {
        scalingType: 'flat',
        name: 'Deflection Bonus',
        description: "The haunted construct gains a +1 deflection bonus to AC.",
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: "The haunted construct gains channel resistance +4.",
      },
      {
        scalingType: 'flat',
        name: 'Infused Soul (Su)',
        description: "The construct applies its Charisma modifier as a bonus on Fortitude saves and gains bonus hit points per Hit Die equal to its Charisma bonus. The creature is healed by negative energy and harmed by positive energy as if it were an undead creature, and reacts to undead-detecting magic accordingly.",
      },
      {
        scalingType: 'flat',
        name: 'Unholy Beacon (Su)',
        description: "The haunted construct exudes a constant 20-foot aura that functions as the spell desecrate. Undead within the aura gain the construct's resistances or hardness benefits.",
      },
      {
        scalingType: 'flat',
        name: 'Haunt (Su)',
        description: "The haunted construct selects one haunt ability that activates on initiative count 10. Options include: Burned Alive (victims catch on fire), Eaten Alive (1d6 force damage per 4 HD and shaken), Frozen Bones (1d6 cold damage per 2 HD and staggered), Insane Ramblings (confusion), Isolation (cannot perceive allies), Loss of Limbs (cannot use arms), or Mutilation (speed reduced to 5 ft. and -4 on attacks). Perception DC: 15 + CR; Save DC: 10 + 1/2 HD. Creatures that successfully save are immune for 24 hours.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Construct Handbook',
    },
    visibility: 'global',
    rev: 1,
  },

  // 435. Haunted Construct (CR +2) [second variant]
  {
    id: 'haunted-construct-cr-2',
    name: 'Haunted Construct (CR +2)',
    description: "A construct animated by a vengeful wizard's spirit, granting it supernatural abilities. The wizard's ghost infuses the construct with its power, granting it access to powerful spell-like abilities and making it vulnerable to positive energy. This is an acquired template.",
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    features: [
      {
        scalingType: 'flat',
        name: 'Deflection Bonus',
        description: "The haunted construct gains a +4 deflection bonus to AC.",
      },
      {
        scalingType: 'flat',
        name: 'Bonus Hit Points',
        description: "The haunted construct gains +4 hit points per Hit Die.",
      },
      {
        scalingType: 'flat',
        name: 'Power of the Infused Spirit',
        description: "The haunted construct gains a +2 bonus on all rolls (including damage rolls) and special ability DCs.",
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities (CL 20th)',
        description: "Once daily each (shared pool across all constructs owned by the wizard): chain lightning, cone of cold, finger of death, greater dispel magic, meteor swarm, power word stun, prismatic spray, reverse gravity, scintillating pattern, summon monster IX, and telekinesis.",
      },
      {
        scalingType: 'flat',
        name: 'Positive Energy Vulnerability',
        description: "The haunted construct takes damage from positive energy as an undead creature would. Negative energy has no effect on it.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Adventure Path #66: The Dead Heart of Xin',
    },
    visibility: 'global',
    rev: 1,
  },

  // 436. Haunted Ones (CR +1)
  {
    id: 'haunted-ones',
    name: 'Haunted Ones',
    description: "Mortals sharing their bodies with disembodied supernatural intelligences. The host retains free will but faces coercion from the rider entity through physical and mental suffering if it refuses the rider's demands. Applicable to any corporeal creature with Intelligence 10 or higher, typically humanoids. The host's alignment shifts to match the rider's (usually chaotic, evil, or both).",
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Haunted (Ex)',
        description: "The rider can inflict 1d6 points of Constitution damage upon the haunted one as a free action, up to once per round. A DC 20 Fortitude save negates; a successful save prevents reuse for 24 hours.",
      },
      {
        scalingType: 'flat',
        name: 'True Lore (Su)',
        description: "Grants a +20 insight bonus to Knowledge skill checks (minimum one rank required). Usable once per day, plus one additional use per 5 HD.",
      },
      {
        scalingType: 'flat',
        name: 'Vision (Sp)',
        description: "Once per day (plus one use per 5 HD), the haunted one can use the vision spell as a spell-like ability at a caster level equal to its Hit Dice.",
      },
      {
        scalingType: 'flat',
        name: 'Shared Telepathy',
        description: "The haunted one gains telepathy with other haunted ones within 100 feet. Knowledge skills become class skills. The creature gains one bonus language (typically Aklo).",
      },
      {
        scalingType: 'flat',
        name: 'Rider Departure',
        description: "If the rider voluntarily departs, the host takes 3d6 points of Constitution and Intelligence drain (DC 20 Fortitude save halves). The host becomes permanently immune to future possession.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Rival Guide',
    },
    visibility: 'global',
    rev: 1,
  },

  // 437. Heartless Creature (CR +1)
  {
    id: 'heartless-creature',
    name: 'Heartless Creature',
    description: "These entities manifest from the negative emotions of noble beings, embodying the worst aspects of sentience. Similar to poltergeists, heartless creatures are physical representations of souls separated from their originators. They display an oppositional color scheme to the base creatures' normal appearance. This is an acquired template applicable to any intelligent creature capable of negative emotions. Alignment is always chaotic evil. The creature's type changes to outsider with the augmented and native subtypes.",
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'outsider',
    subtypeGains: ['augmented', 'native'],
    features: [
      {
        scalingType: 'flat',
        name: 'Aura of Abuse (Su)',
        description: "A 30-foot aura forces Will saves with three escalating effects based on DC thresholds, producing shaken, cowered, panicked, or frightened conditions lasting up to 5 rounds.",
      },
      {
        scalingType: 'flat',
        name: 'Create Heartless (Su)',
        description: "Once per day, the heartless creature can create an exact duplicate of a nearby creature with the heartless template. New creatures cannot use this ability for 24 hours after creation.",
      },
      {
        scalingType: 'flat',
        name: 'Improved Rejuvenation (Su)',
        description: "A destroyed heartless creature restores itself in 1d4 hours. Permanent destruction requires slaying the originator or having the originator absorb the heartless creature via a touch attack and successful Charisma check.",
      },
      {
        scalingType: 'flat',
        name: 'Mocking Laughter (Su)',
        description: "A swift action usable every 1d4 rounds dealing nonlethal damage and imposing penalties on attack rolls, saves, and checks lasting 1 day per Hit Die.",
      },
      {
        scalingType: 'flat',
        name: 'Malevolence (Su)',
        description: "Once per round, the heartless creature can attempt to merge with its originator using magic jar mechanics (caster level 15th or higher).",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 438. Hell Engine (CR +1)
  {
    id: 'hell-engine',
    name: 'Hell Engine',
    description: "An acquired template applied to nonchaotic, nongood constructs with no Intelligence score. These infernal machines are powered by diabolic contracts and serve as instruments of Hell's machinations. They always have a neutral alignment and radiate a moderate aura of law and evil as if a lawful evil outsider. The template is granted by a devil and is bound by a supernatural contract.",
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    resistances: [
      { energyType: 'fire', value: 30 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'See in Darkness (Su)',
        description: "The hell engine can see perfectly in darkness of any kind, including that created by deeper darkness spells.",
      },
      {
        scalingType: 'flat',
        name: 'Modified Magic Immunity',
        description: "Dispel evil or dispel law drives the hell engine back 30 feet and deals 2d12 points of damage to it, bypassing its normal construct immunity to magic.",
      },
      {
        scalingType: 'flat',
        name: 'Contract Powered (Ex)',
        description: "The hell engine cannot attack the devil who drafted its contract, the mortal signatory, or the contract holder. Spells from the contract author or signatory bypass its SR and magic immunity. If both copies of the contract are destroyed, the hell engine ceases functioning.",
      },
      {
        scalingType: 'flat',
        name: 'Breath Weapon (Su)',
        description: "As a standard action with a 1d4+1 round recharge, the hell engine creates a hellfire cloud in an adjacent space (creature-sized). The cloud deals 1d6 fire + 1d6 unholy damage per 2 Hit Dice (Reflex save DC 10 + 1/2 HD for half). The cloud persists 1 round and provides concealment.",
      },
      {
        scalingType: 'flat',
        name: 'Banishing Strike (Su)',
        description: "3/day as an immediate action, extraplanar or summoned creatures struck by the hell engine must succeed at a Will save (DC 10 + 1/2 HD) or be dismissed.",
      },
      {
        scalingType: 'flat',
        name: 'Redirect Summons (Sp)',
        description: "Within 1 minute of a successful banishing strike, the hell engine can summon a devil as an immediate action with 100% success. The devil remains for 1 hour; only one devil can be summoned at a time. The tier of devil that can be summoned scales with the hell engine's Hit Dice.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Construct Handbook',
    },
    visibility: 'global',
    rev: 1,
  },

  // 439. Hellfire Creature (CR +2) [first variant - AAW Games]
  {
    id: 'hellfire-creature-aaw',
    name: 'Hellfire Creature (Aventyr)',
    description: "Primordial entities sometimes escape through the machinations of the foul gitwerc that lord over the underworld, infusing themselves into creatures without seeming reason or cause. This template grants the augmented and evil subtypes. All movement speeds increase by +15 feet and natural reach increases by +10 feet.",
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    subtypeGains: ['augmented', 'evil'],
    naturalArmorChange: 3,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 10, value: 5, bypassedBy: 'evil' },
        { minHD: 11, value: 10, bypassedBy: 'evil' },
      ],
    },
    resistances: [
      { energyType: 'acid', value: 5 },
      { energyType: 'cold', value: 5 },
      { energyType: 'electricity', value: 5 },
      { energyType: 'sonic', value: 5 },
    ],
    immunities: ['fire'],
    fastHealing: '2',
    srFormula: '8 + HD',
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Hellfire Attacks',
        description: "All of the hellfire creature's natural and manufactured weapon attacks deal an additional 1d6 fire damage.",
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Breath (Su)',
        description: "Twice per day, the hellfire creature breathes a 40-foot cone dealing 1d8 damage per Hit Die (half fire, half force). Reflex save (DC 10 + 1/2 HD + Constitution modifier) halves the damage.",
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Gaze (Su)',
        description: "As a swift action once per round, the hellfire creature uses a gaze attack within its reach. Targets that fail a Will save (DC 10 + 1/2 HD + Charisma modifier) are paralyzed for 1 round. Immunity lasts 1d4 rounds.",
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Spit (Su)',
        description: "A ranged touch attack (20-foot increment) dealing 1d6 per 4 Hit Dice (maximum 5d6) plus Strength modifier (bludgeoning and fire damage). Half the damage persists into the next round unless extinguished.",
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

  // 440. Hellfire Creature (CR +2) [second variant - Rite Publishing]
  {
    id: 'hellfire-creature-rite',
    name: 'Hellfire Creature (Rite Publishing)',
    description: "An infernal template granting the essence of damnation's inferno to champions of hell. These creatures may appear enshrouded in flame with altered skin or scales coloration. This is an acquired template. Alignment becomes lawful evil. Spell resistance equals 12 + the hellfire creature's CR.",
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    immunities: ['fire'],
    srFormula: '12 + CR',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: "Hell's Purity",
        description: "Reduces alignment-based damage by the creature's Hit Dice.",
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Body (Ex)',
        description: "Grants a 25% chance to avoid bleed, poison, paralysis, sleep, or stunning effects. Additionally grants a 25% chance that sneak attacks and critical hits deal no extra damage.",
      },
      {
        scalingType: 'flat',
        name: 'Breath Weapon (Su)',
        description: "A 30-foot cone of hellfire usable once every 1d4 rounds, dealing 1d6 damage per 2 Hit Dice (Reflex save for half; DC 10 + 1/2 HD + Constitution modifier). Damage is half fire, half unholy power (bypasses fire resistance).",
      },
      {
        scalingType: 'flat',
        name: "Damnation's Burn (Ex)",
        description: "Adds +2d6 hellfire damage to melee attacks. Targets must succeed at a Will save or catch hellfire, taking 2d6 damage per round for 1d4 rounds. Unarmed attackers also take 2d6 damage.",
      },
      {
        scalingType: 'flat',
        name: 'Gaze of Damnation (Su)',
        description: "A 30-foot gaze attack dealing circumstance penalties equal to the creature's Charisma bonus and 2d6 hellfire damage per round for 1d4 rounds (Will save; DC 10 + 1/2 CR + Charisma modifier).",
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Substitution (Su)',
        description: "As a free action, modify any spell, magic item, or effect with an energy descriptor to use hellfire instead, changing the descriptor to evil/fire/lawful. Creatures killed by hellfire damage must make a Will save or be damned to Hell.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 441. Hemodynamic Construct (CR +3)
  {
    id: 'hemodynamic-construct',
    name: 'Hemodynamic Construct',
    description: "Mechanical entities infused with powerful blood magic originally created by demonic disciples. These constructs require living creature blood to function and move with incredible alacrity, blurring the line between machine and living creature. The construct gains a Constitution score equal to 10 + 1/2 its new CR (used for hit points and Fortitude saves). This template can be applied to any construct.",
    crAdjustment: 3,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    fastHealing: '10',
    srFormula: '15 + new CR',
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote: 'The construct gains a Constitution score equal to 10 + 1/2 its new CR.',
    features: [
      {
        scalingType: 'flat',
        name: 'Lifesense and Blindsight',
        description: "The hemodynamic construct gains lifesense to 60 feet and blindsight to 30 feet.",
      },
      {
        scalingType: 'flat',
        name: 'Profane Armor Bonus',
        description: "The hemodynamic construct gains a +4 profane bonus to AC.",
      },
      {
        scalingType: 'flat',
        name: 'Moderate Fortification',
        description: "The hemodynamic construct has a 50% chance to negate critical hits and precision-based damage (such as sneak attack).",
      },
      {
        scalingType: 'flat',
        name: 'Bleed Attacks',
        description: "All of the hemodynamic construct's attacks gain the bleed (1d6) property.",
      },
      {
        scalingType: 'flat',
        name: 'Blood Vulnerabilities',
        description: "Bleed effects, blood drain, and blood-targeting attacks function normally against the hemodynamic construct. It is vulnerable to Constitution ability damage and drain. Negative energy damages it as if it were alive.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Sentence of the Sinlords',
    },
    visibility: 'global',
    rev: 1,
  },

  // 442. Herald of The Apocalypse (CR +2)
  {
    id: 'herald-of-the-apocalypse',
    name: 'Herald of The Apocalypse',
    description: "Four distinct templates based on the Four Horsemen concept: Death, Famine, Pestilence, and War. A Herald's essence possesses eligible creatures, granting the appropriate template. All four share common mechanics while each has unique abilities. All Heralds are always neutral evil and gain the evil subtype, a +4 profane bonus to AC, DR 10/good, resistance 10 to acid/cold/fire/electricity/sonic, SR 12 + CR, and immunity to energy drain, ability damage/drain, illusion spells, and mind-affecting effects. They have an Apocalyptic Fear aura (100-ft radius) and can possess new creatures (DC 20 Will, 500-ft range, 1/hour). Destroyed hosts allow the Herald essence to seek a new host within 500 feet of another possessed Herald.",
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    subtypeGains: ['evil'],
    damageReduction: {
      scalingType: 'flat',
      value: 10,
      bypassedBy: 'good',
    },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'fire', value: 10 },
      { energyType: 'electricity', value: 10 },
      { energyType: 'sonic', value: 10 },
    ],
    immunities: ['energy drain', 'ability damage', 'ability drain', 'illusion spells', 'mind-affecting effects'],
    srFormula: '12 + CR',
    features: [
      {
        scalingType: 'flat',
        name: 'Apocalyptic Fear (Su)',
        description: "A 100-foot aura with cumulative escalating effects based on how many rounds a creature remains within range: shaken, then frightened, then panicked, then death.",
      },
      {
        scalingType: 'flat',
        name: 'Possess Creature (Su)',
        description: "Once per hour as a full-round action, the Herald can attempt to possess a creature within 500 feet (DC 20 Will save negates). Successful save grants 1-hour immunity.",
      },
      {
        scalingType: 'flat',
        name: 'Phantom Mount (Su)',
        description: "The Herald can summon a phantom mount with a fly speed of 10 feet per character level with perfect maneuverability. Each Horseman's mount has a distinct appearance: Death rides a rotting corpse horse, Famine rides an emaciated black unicorn, Pestilence rides a bloated white pegasus covered in boils, and War rides a fierce nightmare with crimson mane and flaming hooves.",
      },
      {
        scalingType: 'flat',
        name: 'Herald of Death Special',
        description: "Herald of Death gains Int +4, Wis +4, Cha +4, immunity to death effects, a Death Scythe (+1 keen adamantine scythe; struck creatures must save or die), and a Finger of Death ability (1/1d4 rounds, 500-ft range).",
      },
      {
        scalingType: 'flat',
        name: 'Herald of Famine Special',
        description: "Herald of Famine gains Dex +6, Con +4, an Aura of Desolation (500 ft.; kills plants, sickens animals), immunity to dehydration and starvation, and Scales of Want (heavy flail; struck creatures may become fatigued and take nonlethal damage).",
      },
      {
        scalingType: 'flat',
        name: 'Herald of Pestilence Special',
        description: "Herald of Pestilence gains Dex +4, Con +6, an Air of Contagion aura (30 ft.; forces saves vs. cackle fever and mindfire), immunity to all diseases, and the ability to transmit black rot with any touch or natural attack.",
      },
      {
        scalingType: 'flat',
        name: 'Herald of War Special',
        description: "Herald of War gains Str +6, Con +6, fast healing 2 + 1 per 4 racial HD, a Battle Gaze (10 ft.; failed Will save causes battle lust), and a Fell Sword (greatsword; struck creatures must save or be dominated).",
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

  // 443. Hero Killer Creature (CR +5)
  {
    id: 'hero-killer-creature',
    name: 'Hero Killer Creature',
    description: "A creature transformed by a magical gem that grants an overwhelming desire to destroy great heroes. The creature can sense legendary figures within hundreds of miles and tracks them relentlessly, disregarding obstacles and other threats. Applicable to corporeal creatures with CR 6 or higher. This is an acquired template from a third-party publisher.",
    crAdjustment: 5,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    damageReduction: {
      scalingType: 'flat',
      value: 10,
      bypassedBy: 'magic',
    },
    srFormula: '11 + CR',
    abilityScoreChanges: [
      { ability: 'STR', change: 12 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 12 },
      { ability: 'INT', change: 6 },
      { ability: 'WIS', change: 6 },
      { ability: 'CHA', change: 10 },
    ],
    abilityScoreChangeNote: 'Intelligence minimum 15. DR becomes 15/magic if creature CR is 15 or higher.',
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Defenses',
        description: "Natural armor, deflection, and insight bonuses increase by 50% (rounded down). All movement rates increase by 10 feet, and the creature gains one additional movement mode (typically fly or swim) at speed equal to base land speed.",
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Threat Range',
        description: "The threat ranges of all melee and ranged attacks increase by 1. This does not stack with Improved Critical or keen weapon enhancements.",
      },
      {
        scalingType: 'flat',
        name: 'Eyes on the Prize (Ex)',
        description: "Against non-target creatures, the hero killer's armor, deflection, and insight bonuses triple; DR becomes 5/- (or 10/- for CR 15+); it gains a +8 circumstance bonus to CMD; and it gains improved evasion and improved uncanny dodge, and immunity to mind-affecting effects. These benefits cease after a targeting attempt until a new target is selected 24 hours later.",
      },
      {
        scalingType: 'flat',
        name: 'Trophy Collector (Su)',
        description: "On delivering a killing blow to its target, the hero killer automatically casts soul bind (immediate action, Charisma-based DC). It can only collect victims totaling Hit Dice equal to 4 times its own Hit Dice.",
      },
      {
        scalingType: 'flat',
        name: 'Locate Target Spell-Like Abilities',
        description: "At will: fear (non-target only), locate creature (target only). Caster level equals twice the creature's Hit Dice (maximum 20th).",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 444. Hivemind Swarm (CR special)
  {
    id: 'hivemind-swarm',
    name: 'Hivemind Swarm',
    description: "A swarm of smaller creatures whose individual minds have supernaturally bonded into a single collective intelligence. These typically develop in swarms existing for generations in areas of potent magical influence, particularly psychic magic. CR adjustment is +1 for each additional Hit Die gained above the base creature's Hit Dice (minimum 1 additional HD, maximum 20 total racial HD). Animal or vermin base creatures become magical beasts; other types remain unchanged. The swarm loses immunity to mind-affecting effects and is treated as a single target.",
    acquisitionType: 'either',
    isSimpleTemplate: false,
    features: [
      {
        scalingType: 'flat',
        name: 'Thoughtsense',
        description: "The hivemind swarm gains thoughtsense to 60 feet.",
      },
      {
        scalingType: 'flat',
        name: 'Insight Bonus to AC',
        description: "The hivemind swarm gains a +1 insight bonus to AC per additional Hit Die gained.",
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Swarm Attack',
        description: "Base swarm attack deals 1d6 for 1 additional Hit Die, increasing by 1d6 per additional 5 Hit Dice beyond the first.",
      },
      {
        scalingType: 'flat',
        name: 'Psychic Spellcasting (Su)',
        description: "The hivemind swarm casts psychic spells as a psychic with a caster level equal to the number of additional Hit Dice gained. It can deal swarm damage in the same round it casts spells.",
      },
      {
        scalingType: 'flat',
        name: 'Hivemind Nexus (Ex)',
        description: "The collective intelligence comprises a complex series of connections through a single designated nexus individual. Observers can identify the nexus with a Perception check opposed by the hivemind's Bluff or Stealth (whichever is higher), with a +10 racial bonus. Destroying the nexus causes the swarm to be staggered and imposes concentration checks (DC 15 + 2× spell level). The hivemind can spend 1d6 rounds concentrating to form a new nexus.",
      },
      {
        scalingType: 'flat',
        name: 'Telepathy and Languages',
        description: "The hivemind gains telepathy to 100 feet and can speak languages equal to 1 + its Intelligence modifier. All Knowledge skills and Spellcraft become class skills.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 6',
    },
    visibility: 'global',
    rev: 1,
  },

  // 445. Hiveskin Creature (CR +2)
  {
    id: 'hiveskin-creature',
    name: 'Hiveskin Creature',
    description: "Hiveskin creatures develop a supernatural symbiosis with flying swarms, using them for reconnaissance or hunting. They gain thick gray natural armor and are surrounded by insects inhabiting their hide. Alignment is always chaotic. The creature gains fast healing equal to its Constitution modifier (minimum 1).",
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    naturalArmorChange: 4,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'WIS', change: 4 },
    ],
    fastHealing: 'equal to Constitution modifier (minimum 1)',
    features: [
      {
        scalingType: 'flat',
        name: 'Hiveskin Swarm (Ex)',
        description: "The hiveskin creature controls one swarm per 3 CR. Swarms replace themselves within a week if lost. Intelligent hiveskin creatures control their swarms as free actions. Swarms stay within 400 ft. + 40 ft. per HD of the host.",
      },
      {
        scalingType: 'flat',
        name: 'All-Around Vision (Ex)',
        description: "Within 5 feet of a swarm, the hiveskin creature sees all directions and cannot be flanked.",
      },
      {
        scalingType: 'flat',
        name: 'Swarm Senses (Ex)',
        description: "Within 60 feet of a swarm, both the creature and the swarm gain each other's senses, including racial bonuses. The hiveskin creature instantly detects anything the swarm encounters, including invisible creatures.",
      },
      {
        scalingType: 'flat',
        name: 'Fly On The Wall (Ex)',
        description: "The hiveskin creature can see and hear through a single swarm member for surveillance purposes.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 446. Holy Creature (CR +1)
  {
    id: 'holy-creature',
    name: 'Holy Creature',
    description: "This template transforms good-aligned creatures into divine champions. Recipients gain enhanced abilities reflecting their deity's favor, though they risk losing the template if their alignment shifts away from good. The creature gains the good subtype and must maintain good alignment or lose all template benefits. The creature's darkvision extends to 60 feet (or gains it if not already present).",
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    subtypeGains: ['good'],
    damageReduction: {
      scalingType: 'flat',
      value: 5,
      bypassedBy: 'good',
    },
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Grace (Su)',
        description: "Non-good creatures within 30 feet suffer a -1 penalty on all attack rolls, checks, and saves. This is a mind-affecting effect.",
      },
      {
        scalingType: 'flat',
        name: 'Protection from Evil (Su)',
        description: "The holy creature gains a +2 deflection bonus to AC and a +2 resistance bonus on saves against evil creature attacks.",
      },
      {
        scalingType: 'flat',
        name: 'Negative Energy Resistance (Su)',
        description: "When targeted by negative energy attacks, energy drain, ability damage/drain, or inflict spells, the creature makes a level check (1d20 + HD) vs. DC 11 + attacker's HD. Success negates the effect; if delivered via melee, the attacker takes 2d6 points of damage in retaliation.",
      },
      {
        scalingType: 'flat',
        name: 'Sacredness (Su)',
        description: "All melee attacks deal +1d6 holy damage against evil-aligned targets. All weapons count as good-aligned for overcoming damage reduction.",
      },
      {
        scalingType: 'flat',
        name: 'Holy Body (Su)',
        description: "Positive energy healing is doubled in effectiveness.",
      },
      {
        scalingType: 'flat',
        name: 'Holy Spellcasting (Su)',
        description: "Effective caster level increases by +1 for spells of the healing subschool and those with the good or light descriptor. Spells with both descriptors gain +2 caster level.",
      },
      {
        scalingType: 'flat',
        name: 'Speed Increase and Skill Bonuses',
        description: "All movement speeds increase by 10 feet. The creature gains a +4 sacred bonus on Perception and Sense Motive checks.",
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

  // 447. Hungry (CR +0)
  {
    id: 'hungry',
    name: 'Hungry',
    description: "A hungry animal will fight harder but will not last as long in a fight. This simple template represents a creature weakened by starvation that compensates through aggressive desperation. This is a third-party template.",
    crAdjustment: 0,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -4 },
      { ability: 'CON', change: -4 },
      { ability: 'WIS', change: -4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Quick Rules',
        description: "Attack and damage rolls: +2 bonus; CMB: +2 bonus; AC: -2 penalty; All saves: -2 penalty; Hit points: -2 per Hit Die.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Jon Brazer Enterprises',
      publication: 'Book of Beasts: Monsters of the River Nations',
    },
    visibility: 'global',
    rev: 1,
  },

  // 448. Hydran Serpent Template (CR +1)
  {
    id: 'hydran-serpent',
    name: 'Hydran Serpent Template',
    description: "Applied to any snake creature, the hydran serpent template transforms it into a multi-headed magical beast. CR increases by +1 per additional head, plus +2 if the cryo- or pyro-hydran serpent variant is chosen. The creature's type changes to magical beast, and all racial Hit Dice change to d10s. Cryohydran serpents gain the cold subtype; pyrohydran serpents gain the fire subtype.",
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    typeChange: 'magical beast',
    fastHealing: '2',
    features: [
      {
        scalingType: 'flat',
        name: 'Additional Bite Attacks',
        description: "The hydran serpent gains one additional bite attack per extra head beyond the first.",
      },
      {
        scalingType: 'flat',
        name: "Can't Be Flanked (Ex)",
        description: "A hydran serpent cannot be flanked due to its multiple heads watching in all directions.",
      },
      {
        scalingType: 'flat',
        name: 'Breath Weapon (Ex)',
        description: "Cryo- or pyro-hydran serpents can breathe a cone of cold or fire from each head. Cones measure 5 ft. plus 5 ft. per size category above Small. Each head breathes once every 1d4 rounds, dealing 2d6 cold or fire damage. Reflex save (DC 10 + 1/2 HD + Constitution modifier) halves damage.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'd20PFSRD Community Content',
    },
    visibility: 'global',
    rev: 1,
  },

  // 449. Ice Elemental (CR +0)
  {
    id: 'ice-elemental',
    name: 'Ice Elemental',
    description: "This template converts earth elementals into ice-based creatures by replacing their earth-related traits with cold-related abilities. The earth subtype and Earth Mastery ability are removed and replaced with the cold subtype. The creature speaks Aquan instead of Terran. This is a simple template from a third-party publisher.",
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    subtypeGains: ['cold'],
    subtypeRemoves: ['earth'],
    features: [
      {
        scalingType: 'flat',
        name: 'Freeze (Ex)',
        description: "Creatures struck by the ice elemental's slam attack must make a Reflex save (DC = 10 + Hit Dice + Constitution modifier) or suffer frostbite. Failed saves result in cold damage equal to the elemental's slam attack each round for 1d4 rounds. Victims can use a heat source as a move action to end the effect prematurely. Repeated hits extend duration rather than increase damage. Creatures making non-reach melee attacks against the ice elemental also suffer this freezing damage.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Super Genius Games',
      publication: 'The Genius Guide To: Ice Magic',
    },
    visibility: 'global',
    rev: 1,
  },

  // 450. Icy Creature (CR +1)
  {
    id: 'icy-creature',
    name: 'Icy Creature',
    description: "These beings are physical manifestations of deadly cold, with ice replacing organic tissue. They mimic other creatures' forms and actively displace original inhabitants from cold regions through displacement or elimination. The base creature's type becomes outsider with the cold, elemental, extraplanar, and water subtypes added. All racial Hit Dice convert to d10s. The creature gains the Aquan and Auran languages if capable of speech.",
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'outsider',
    subtypeGains: ['cold', 'elemental', 'extraplanar', 'water'],
    abilityScoreChanges: [
      { ability: 'DEX', change: -2 },
      { ability: 'CON', change: 4 },
    ],
    abilityScoreChangeNote: 'Dexterity minimum 1.',
    features: [
      {
        scalingType: 'flat',
        name: 'Cold Aura (Ex)',
        description: "Any creature within 10 feet of the icy creature takes 2d6 points of cold damage per round that it remains within range. A Fortitude save (Constitution-based) halves the damage. The icy creature can suppress this aura at will as a free action.",
      },
      {
        scalingType: 'flat',
        name: 'Exude Ice (Su)',
        description: "As a full-round action at will, the icy creature creates a 20-foot-diameter circle of slippery ice. Creatures need double movement to cross iced squares, and Acrobatics DCs increase by +5.",
      },
      {
        scalingType: 'flat',
        name: 'Ice Mastery (Ex)',
        description: "The icy creature gains a +1 morale bonus on attack and damage rolls against foes that are touching ice.",
      },
      {
        scalingType: 'flat',
        name: 'Icy Touch (Ex)',
        description: "Natural melee and metallic weapon attacks deal +1d6 cold damage. Targets must succeed at a Fortitude save (Constitution-based) or become paralyzed for 1d4 rounds.",
      },
      {
        scalingType: 'flat',
        name: 'Icewalking (Ex)',
        description: "Functions as spider climb but only on icy surfaces. The icy creature suffers no movement penalties or Acrobatics check requirements on ice.",
      },
      {
        scalingType: 'flat',
        name: 'Icy Body (Ex)',
        description: "Any creature making natural or unarmed melee attacks against the icy creature takes 1d6 cold damage. Creatures grappling the icy creature take this damage each round.",
      },
      {
        scalingType: 'flat',
        name: 'Acrobatics Bonus',
        description: "The icy creature gains a +5 racial bonus on Acrobatics checks.",
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
];
