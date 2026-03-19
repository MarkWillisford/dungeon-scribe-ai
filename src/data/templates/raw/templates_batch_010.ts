// Batch 010 | first: 'Hellfire Creature (CR +2)' | last: 'Klaven (CR +1)' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_010: TemplateDefinition[] = [
  // 226. Hellfire Creature (CR +2) — official (Aventyr Bestiary)
  {
    id: 'hellfire-creature',
    name: 'Hellfire Creature',
    description:
      'A corporeal creature suffused with hellfire energy, gaining tremendous physical power, elemental resistances, and devastating fire-based attacks. Half of all hellfire damage dealt is fire damage; the other half is unholy power unaffected by fire resistance. Creatures slain by hellfire must save or have their souls damned to Hell.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    subtypeGains: ['augmented', 'evil'],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: 3,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 10, value: 5, bypassedBy: 'evil' },
        { minHD: 11, value: 10, bypassedBy: 'evil' },
      ],
    },
    resistances: [
      { energyType: 'fire', value: 'immunity' },
      { energyType: 'acid', value: 5 },
      { energyType: 'cold', value: 5 },
      { energyType: 'electricity', value: 5 },
      { energyType: 'sonic', value: 5 },
    ],
    srFormula: 'HD + 8',
    fastHealing: '2',
    features: [
      {
        scalingType: 'flat',
        name: 'Increased Speed and Reach',
        description:
          'All speeds increase by 15 feet. Natural reach increases by 10 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Weapons (Su)',
        description:
          'All natural and manufactured weapon attacks deal an additional 1d6 fire damage.',
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Breath (Su)',
        description:
          '40-ft.-cone breath weapon usable twice per day dealing 1d8 points of damage per HD. Half is fire damage, half is force damage from unholy power. Reflex save (DC 10 + 1/2 HD + Con modifier) halves damage.',
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Gaze (Su)',
        description:
          'Swift action gaze attack usable once per round. Target within reach must succeed at Will save (DC 10 + 1/2 HD + Cha modifier) or be paralyzed for 1 round. A successful save grants immunity to this creature\'s gaze for 1d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Spit (Su)',
        description:
          'Ranged touch attack (20 ft. range increment) dealing 1d6 per 4 HD (maximum 5d6) plus Strength modifier in bludgeoning and fire damage. Deals half damage the next round unless scraped off as a move action.',
      },
      {
        scalingType: 'flat',
        name: 'Amorphous (Ex)',
        description: 'The creature is immune to precision damage and critical hits.',
      },
      {
        scalingType: 'flat',
        name: 'Ferocity (Ex)',
        description:
          'The creature can continue fighting without penalty when its hit point total is below 0.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Aventyr Bestiary' },
    visibility: 'global',
    rev: 1,
  },

  // 227. Hellfire Creature (CR +2) [3pp] — duplicate id gets -2
  {
    id: 'hellfire-creature-2',
    name: 'Hellfire Creature (3pp)',
    description:
      'A variant hellfire creature template from a different third-party source. The creature becomes lawful evil, gains fire immunity, a hellfire breath weapon, damning melee strikes, and a gaze that imposes cumulative penalties. Hellfire damage is half fire, half unholy power that bypasses fire resistance. Creatures slain by hellfire must save or have their souls damned to Hell.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'alignment', allowed: ['any'] }],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    resistances: [{ energyType: 'fire', value: 'immunity' }],
    srFormula: 'CR + 12',
    features: [
      {
        scalingType: 'flat',
        name: "Hell's Purity (Su)",
        description:
          "Reduces alignment-based damage by an amount equal to the base creature's Hit Dice.",
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Body (Ex)',
        description:
          '25% chance to avoid bleed, poison, paralysis, sleep, or stunning effects. 25% chance that sneak attacks and critical hits deal no extra damage.',
      },
      {
        scalingType: 'flat',
        name: 'Breath Weapon (Su)',
        description:
          '30-foot cone of hellfire usable every 1d4 rounds; Reflex save (DC 10 + 1/2 HD + Con modifier) for half damage; deals 1d6 hellfire damage per 2 HD (minimum 1d6). Half fire, half unholy.',
      },
      {
        scalingType: 'flat',
        name: "Damnation's Burn (Ex)",
        description:
          '+2d6 hellfire damage on melee hits; targets must succeed on Will save (DC 10 + 1/2 HD + Cha modifier) or catch fire, taking 2d6 damage per round for 1d4 rounds. Creatures hitting with natural or unarmed attacks take 2d6 hellfire damage and risk catching fire.',
      },
      {
        scalingType: 'flat',
        name: 'Gaze of Damnation (Su)',
        description:
          'Will save (DC 10 + 1/2 HD + Cha modifier) for non-lawful evil creatures within 30 feet; failure inflicts a circumstance penalty equal to the creature\'s Cha bonus on attacks, skill checks, and ability checks, plus 2d6 hellfire damage per round for 1 round per CR.',
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Substitution (Su)',
        description:
          'Free action to modify spells or magic items with energy descriptors to use hellfire instead; the descriptor becomes evil, fire, and lawful.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Unknown', publication: 'Unknown 3pp Source' },
    visibility: 'global',
    rev: 1,
  },

  // 228. Hemodynamic Construct (CR +3; 3pp)
  {
    id: 'hemodynamic-construct',
    name: 'Hemodynamic Construct',
    description:
      'A construct infused with demonic blood magic by disciples of dark powers. The construct gains a Constitution score, profane AC bonus, fast healing, lifesense, and bleed attacks, but becomes vulnerable to bleed effects, blood drain, Constitution damage/drain, and negative energy as if it were a living creature.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['construct'] }],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote:
      'Gains a Constitution score equal to 10 + 1/2 the construct\'s new CR (previously had none).',
    fastHealing: '10',
    srFormula: 'new CR + 15',
    features: [
      {
        scalingType: 'flat',
        name: 'Profane AC Bonus (Su)',
        description: 'Gains a +4 profane bonus to AC.',
      },
      {
        scalingType: 'flat',
        name: 'Fortification (Ex)',
        description: '50% chance to negate bonus damage from critical hits or precision damage.',
      },
      {
        scalingType: 'flat',
        name: 'Lifesense (Su)',
        description: 'Gains lifesense out to 60 feet and blindsight out to 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Bleed Attacks (Ex)',
        description: 'All melee attacks gain the bleed (1d6) property.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Vulnerability (Ex)',
        description:
          'Affected normally by bleed, blood drain, and blood-targeting attacks. Vulnerable to Constitution ability damage or drain (but not other ability scores). Takes damage from negative energy as a living creature does.',
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

  // 229. Herald of The Apocalypse (CR +2) [3pp]
  {
    id: 'herald-of-the-apocalypse',
    name: 'Herald of The Apocalypse',
    description:
      'One of four apocalyptic heralds (Death, Famine, Pestilence, War) that can possess other creatures. Each variant grants unique ability score increases, weapons, and special powers. All heralds share a profane AC bonus, DR 10/good, broad resistances, SR, and powerful fear aura. They communicate telepathically and can possess new hosts hourly.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    subtypeGains: ['evil'],
    abilityScoreChangeNote:
      'Varies by herald type — Death: Int +4, Wis +4, Cha +4; Famine: Dex +6, Con +4; Pestilence: Dex +4, Con +6; War: Str +6, Con +6.',
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'good' },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'fire', value: 10 },
      { energyType: 'electricity', value: 10 },
      { energyType: 'sonic', value: 10 },
    ],
    immunities: [
      'energy drain',
      'ability damage',
      'ability drain',
      'illusion spells and effects',
      'mind-affecting effects',
    ],
    srFormula: 'max(CR + 12, base creature SR)',
    features: [
      {
        scalingType: 'flat',
        name: 'Apocalyptic Fear Aura (Su)',
        description:
          '100-foot fear aura with cumulative effects on failure. 1st failure: shaken for 1 hour. 2nd failure while shaken: frightened for 10 rounds. 3rd failure while frightened: panicked for 1d6 rounds. 4th failure while panicked: instant death. Save DC is Charisma-based; mind-affecting fear effect.',
      },
      {
        scalingType: 'flat',
        name: 'Phantom Mount (Sp)',
        description:
          'All heralds can summon a saddled phantom mount as a standard action. Size is one category larger than the herald; fly speed equals 10 feet per herald character level (perfect maneuverability). Mount type varies by herald (rotting horse, emaciated unicorn, bloated pegasus, nightmare). Dispellable at the herald\'s caster level.',
      },
      {
        scalingType: 'flat',
        name: 'Hive Mind (Su)',
        description:
          'Constant mental communication between all heralds regardless of distance. If one is aware of danger, all are. None are flat-footed unless all are; none can be flanked unless all can be.',
      },
      {
        scalingType: 'flat',
        name: 'Possess Creature (Su)',
        description:
          'Once per hour as a full-round action, possess a creature within 500 feet. Target makes DC 20 Will save or gains the herald template. Success grants 1-hour immunity. Possession is permanent unless the host dies. The herald\'s essence can immediately repossess within 500 feet of another herald or abandon an incapacitated host.',
      },
      {
        scalingType: 'flat',
        name: 'Herald Protection (Su)',
        description:
          'Heralds are immune to each other\'s special attacks and to the special attacks of any possessed base creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Herald-Specific Weapons and Abilities',
        description:
          'Each herald gains a unique summoned weapon and special ability: Death gains a Death Scythe (kills target on failed Fort save) and Finger of Death (1/1d4 rounds, 500 ft. range); Famine gains Scales of Want (heavy flail causes nonlethal damage and fatigue) and Aura of Desolation (500 ft. aura withers plants, damages plant creatures); Pestilence gains a Fell Bow (transmits black rot disease) and Air of Contagion (30 ft. radius disease save each round); War gains a Fell Sword (dominate monster on hit) and Battle Gaze (10 ft. gaze compels attacking nearest non-herald).',
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

  // 230. Hero Killer Creature (CR +5) [3pp]
  {
    id: 'hero-killer-creature',
    name: 'Hero Killer Creature',
    description:
      'A supremely deadly hunter created to destroy powerful heroes. It designates a single target and gains vastly superior defenses against non-targets, soul-binding trophy collection, fearsome special abilities, and an ever-updating quarry-tracking sense. Only applicable to creatures CR 6 or higher.',
    crAdjustment: 5,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'min_hd', minimum: 6 }],
    abilityScoreChanges: [
      { ability: 'STR', change: 12 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 12 },
      { ability: 'INT', change: 6, minimum: 15 },
      { ability: 'WIS', change: 6 },
      { ability: 'CHA', change: 10 },
    ],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 14, value: 10, bypassedBy: 'magic' },
        { minHD: 15, value: 15, bypassedBy: 'magic' },
      ],
    },
    srFormula: 'CR + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Eyes on the Prize (Ex)',
        description:
          'Against non-target creatures only, the hero killer doubles its armor, deflection, and insight AC bonuses; gains DR 5/- (or 10/- at CR 15+); gains a +8 circumstance bonus to CMD; benefits from improved evasion and improved uncanny dodge; and is immune to mind-affecting effects. Natural armor, deflection, and insight bonuses also increase by 50% (rounded down).',
      },
      {
        scalingType: 'flat',
        name: 'Trophy Collector (Su)',
        description:
          'When the hero killer deals the killing blow to its designated target, it casts soul bind as an immediate action (DC Charisma-based). It can only hold victims whose total HD does not exceed 4 times its own HD.',
      },
      {
        scalingType: 'flat',
        name: 'Increased Threat Range',
        description:
          'Melee and ranged threat range increases by 1. This does not stack with Improved Critical or keen weapon effects.',
      },
      {
        scalingType: 'flat',
        name: 'Additional Movement',
        description:
          'All movement rates increase by 10 feet. Gains one additional movement mode (fly or swim) at the creature\'s land speed.',
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities',
        description:
          'At will: fear (against non-targets only), locate creature (target only). Caster level equals twice the Hit Dice (maximum 20th).',
      },
    ],
    spellLikeAbilities: [
      {
        spellName: 'fear',
        frequency: 'at_will',
        casterLevelFormula: 'min(HD * 2, 20)',
        condition: 'against non-target creatures only',
      },
      {
        spellName: 'locate creature',
        frequency: 'at_will',
        casterLevelFormula: 'min(HD * 2, 20)',
        condition: 'target creature only',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown',
      publication: 'Unknown 3pp Source',
    },
    visibility: 'global',
    rev: 1,
  },

  // 231. Hivemind Swarm (CR special)
  {
    id: 'hivemind-swarm',
    name: 'Hivemind Swarm',
    description:
      'A swarm of vermin or animals that has developed a unified psychic consciousness, gaining intelligence, telepathy, psychic spellcasting, and the ability to designate a central nexus. CR increases by +1 per additional Hit Die gained. Animal and vermin types become magical beast. The hive loses immunity to mind-affecting effects as it now possesses a single unified mind.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['animal', 'vermin'] }],
    abilityScoreChangeNote:
      'Intelligence gains a minimum of 11 if base is 10 or lower, plus +1 per additional HD beyond the base. Charisma gains a minimum of 10. Gains +1 to any ability score per 4 additional HD.',
    features: [
      {
        scalingType: 'flat',
        name: 'CR Adjustment (Special)',
        description:
          'CR increases by +1 for each additional Hit Die gained above the base creature. Gains a minimum of 1 racial HD (same type as base creature); maximum 20 racial HD total.',
      },
      {
        scalingType: 'flat',
        name: 'Type Change',
        description:
          'Animal or vermin types become magical beast. Other types remain unchanged.',
      },
      {
        scalingType: 'flat',
        name: 'Insight AC Bonus',
        description: '+1 insight bonus to AC per additional Hit Die gained.',
      },
      {
        scalingType: 'flat',
        name: 'Thoughtsense (Su)',
        description: 'Gains thoughtsense out to 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Swarm Damage',
        description:
          'Swarm damage is 1d6 for 1 HD, increasing by 1d6 per 5 additional HD.',
      },
      {
        scalingType: 'flat',
        name: 'Psychic Spellcasting (Su)',
        description:
          'Casts psychic spells at a caster level equal to the number of additional HD gained.',
      },
      {
        scalingType: 'flat',
        name: 'Hivemind Nexus (Ex)',
        description:
          'The swarm designates one member as its central routing nexus. Observers can identify it with a Perception check opposed by Bluff or Stealth (+10 racial bonus). If identified and damaged in the same round, the nexus can be destroyed, causing the hivemind to become staggered and requiring concentration checks to cast spells.',
      },
      {
        scalingType: 'flat',
        name: 'Telepathy and Languages',
        description:
          'Gains telepathy 100 ft. and can speak languages equal to 1 + Intelligence modifier.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG' },
    visibility: 'global',
    rev: 1,
  },

  // 232. Hiveskin Creature (CR +2) [3pp]
  {
    id: 'hiveskin-creature',
    name: 'Hiveskin Creature',
    description:
      'A creature that hosts living swarms within its body through a symbiotic bond, gaining swarms it can deploy and control. The creature and its swarms share fast healing, senses, and defensive abilities. The alignment shifts to always chaotic regardless of original alignment.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'WIS', change: 4 },
    ],
    naturalArmorChange: 4,
    fastHealing: 'equal to the creature\'s Constitution modifier (minimum 1)',
    features: [
      {
        scalingType: 'flat',
        name: 'Hiveskin Swarm (Ex)',
        description:
          '1 flying swarm (usually wasps) per 3 CR possessed. Swarms replace lost numbers within a week or through regeneration. An intelligent hiveskin creature can direct swarms as free actions through the symbiotic link as if they were summoned creatures. Swarms cannot travel beyond 400 ft. + 40 ft./Hit Die from the host.',
      },
      {
        scalingType: 'flat',
        name: 'All-Around Vision (Ex)',
        description:
          'While within 5 feet of one of its swarms, the hiveskin creature can see in all directions and cannot be flanked.',
      },
      {
        scalingType: 'flat',
        name: 'Swarm Senses (Ex)',
        description:
          'Within 60 feet of a swarm, both the creature and its swarms gain each other\'s senses including racial bonuses to Perception. The creature becomes immediately aware of creatures the swarm encounters, detecting invisible, displaced, or mirror-imaged creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Fly on the Wall (Ex)',
        description:
          'The creature can focus through its bond to see and hear through a single member of one swarm, effectively using it as a spy.',
      },
      {
        scalingType: 'flat',
        name: 'Swarm Inheritance',
        description:
          'Swarms gain the base creature\'s damage reduction, immunities, resistances, spell resistance, and weaknesses, excluding those reliant on size, strength, weapons, or reach. Swarms also gain special attacks relying on touch or melee, excluding spell-like abilities and those dependent on size, strength, weapons, or reach.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 233. Holy Creature (CR +1) [3pp]
  {
    id: 'holy-creature',
    name: 'Holy Creature',
    description:
      'A good-aligned corporeal creature touched by divine grace, gaining sacred defenses, holy attacks, and an aura that penalizes nongood creatures. The template is lost if the creature\'s alignment changes from good.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'alignment', allowed: ['any good'] }],
    subtypeGains: ['good'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'good' },
    immunities: [
      'possession by evil creatures',
      'charm by evil creatures',
      'influence by evil creatures',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Deflection and Resistance Bonus',
        description:
          '+2 deflection bonus to AC (from protection from evil effect). +2 resistance bonus on saves against evil creature attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Increased Speed',
        description: 'Each of the creature\'s speeds increases by 10 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Grace Aura (Su)',
        description:
          'Every nongood creature within 30 feet automatically takes a -1 penalty on all attack rolls, checks, and saves. Mind-affecting effect.',
      },
      {
        scalingType: 'flat',
        name: 'Negative Energy Resistance (Su)',
        description:
          'When struck by negative energy, energy drain, ability damage/drain, or inflict spells, the creature makes a level check (1d20 + total HD) against DC 11 + attacker\'s HD. Success cancels the attack in a bright flash; if delivered via melee or touch attack, the attacker takes 2d6 damage.',
      },
      {
        scalingType: 'flat',
        name: 'Sacredness (Su)',
        description:
          'All melee attacks deal an additional 1d6 holy damage against evil-aligned creatures. All weapons count as good-aligned for damage reduction purposes.',
      },
      {
        scalingType: 'flat',
        name: 'Holy Body (Su)',
        description: 'Gains double the normal amount of healing from positive energy.',
      },
      {
        scalingType: 'flat',
        name: 'Holy Spellcasting (Su)',
        description:
          'Effective caster level increases by +1 for healing subschool and spells with good or light descriptors. Bonus increases to +2 for spells with both descriptors.',
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

  // 234. Hungry (CR +0) [3pp]
  {
    id: 'hungry',
    name: 'Hungry',
    description:
      'A malnourished, desperate animal that fights harder but cannot sustain injury as well. Stronger attacks are offset by reduced defenses, lower saving throws, and fewer hit points — representing a creature driven by desperation and hunger.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -4 },
      { ability: 'CON', change: -4 },
      { ability: 'WIS', change: -4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Desperate Ferocity',
        description:
          'Gains a +2 bonus on attack and damage rolls and CMB. AC decreases by 2. All saving throws decrease by 2. Loses 2 hit points per Hit Die.',
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

  // 235. Hydran Serpent Template (CR +1)
  {
    id: 'hydran-serpent',
    name: 'Hydran Serpent',
    description:
      'An inherited or acquired template applicable to any snake, transforming it into a multi-headed magical beast. CR increases by +1 per additional head (cryo- or pyro-hydran variants add a further +2). The creature gains extra bite attacks, fast healing, immunity to flanking, and optionally a breath weapon.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['animal'] }],
    typeChange: 'magical beast',
    features: [
      {
        scalingType: 'flat',
        name: 'Additional Bite Attacks',
        description: 'Gains one additional bite attack per extra head beyond the first.',
      },
      {
        scalingType: 'flat',
        name: 'Elemental Variant (Ex)',
        description:
          'Cryo-hydran serpents gain the cold subtype; pyro-hydran serpents gain the fire subtype. Each variant adds +2 CR beyond the per-head CR increase. Heads breathe cones of cold or fire once every 1d4 rounds, dealing 2d6 points of energy damage. Reflex save (DC 10 + 1/2 HD + Con modifier) halves. Cone size is 5 ft. + 5 ft. per size category above Small.',
      },
      {
        scalingType: 'flat',
        name: "Can't Be Flanked (Ex)",
        description:
          'Multiple heads allow the creature to look in many directions at once; it cannot be flanked.',
      },
      {
        scalingType: 'flat',
        name: 'Fast Healing (Ex)',
        description:
          'Heals 2 points of damage each round while at least 1 hit point remains.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG' },
    visibility: 'global',
    rev: 1,
  },

  // 236. Ice Elemental (CR +0) [3pp]
  {
    id: 'ice-elemental',
    name: 'Ice Elemental',
    description:
      'A template applied to earth elementals to transform them into ice elementals. The earth subtype and Earth Mastery ability are replaced with the cold subtype. The ice elemental speaks Aquan instead of Terran and gains a freezing slam attack that causes frostbite.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['elemental'] },
      { type: 'subtype', required: ['earth'] },
    ],
    subtypeRemoves: ['earth'],
    subtypeGains: ['cold'],
    features: [
      {
        scalingType: 'flat',
        name: 'Freeze (Ex)',
        description:
          'Creatures hit by the ice elemental\'s slam attacks must make a Reflex save (DC 10 + ice elemental\'s HD + Con modifier) or suffer frostbite. Frostbite deals cold damage equal to slam damage each round for 1d4 rounds. Characters can use a heat source as a move action to thaw, preventing future damage. Repeated hits extend the duration by +1d4 rounds (damage doesn\'t stack). Creatures striking the elemental with natural or melee weapons (non-reach) take freezing damage as if hit by its slam.',
      },
      {
        scalingType: 'flat',
        name: 'Language Change',
        description: 'Ice elementals speak Aquan instead of Terran.',
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

  // 237. Icy Creature (CR +1) [3pp]
  {
    id: 'icy-creature',
    name: 'Icy Creature',
    description:
      'A living corporeal creature without the fire subtype transformed into an outsider of cold. It gains a damaging cold aura, paralyzing icy touch, ice-walking ability, and the power to create difficult icy terrain. It loses 2 Dexterity but gains 4 Constitution and converts all racial HD to d10s.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['living corporeal (no fire subtype)'] }],
    typeChange: 'outsider',
    subtypeGains: ['cold', 'elemental', 'extraplanar', 'water'],
    abilityScoreChanges: [
      { ability: 'DEX', change: -2, minimum: 1 },
      { ability: 'CON', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Cold Aura (Ex)',
        description:
          'Within 10 feet, creatures take 2d6 points of cold damage per round with Fortitude save for half (DC Constitution-based). Can suppress or resume as a free action.',
      },
      {
        scalingType: 'flat',
        name: 'Icy Touch (Ex)',
        description:
          'Natural melee attacks and metallic weapons deal +1d6 cold damage. Targets must succeed at Fortitude save (DC Constitution-based) or become paralyzed for 1d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Exude Ice (Su)',
        description:
          'Full-round action creates a 20-foot-diameter icy circle. Movement costs 2 squares per square crossed; Acrobatics DCs increase by 5.',
      },
      {
        scalingType: 'flat',
        name: 'Ice Mastery (Ex)',
        description: 'Gains +1 morale bonus on attack and damage rolls against foes touching ice.',
      },
      {
        scalingType: 'flat',
        name: 'Icewalking (Ex)',
        description:
          'Functions as spider climb on icy surfaces; no Acrobatics checks needed to run or charge on ice.',
      },
      {
        scalingType: 'flat',
        name: 'Icy Body (Ex)',
        description:
          'Natural and unarmed attackers take 1d6 points of cold damage; grappling creatures also take the full cold aura damage each round.',
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

  // 238. Id Ooze (CR +1) [3pp]
  {
    id: 'id-ooze',
    name: 'Id Ooze',
    description:
      'An ooze that has developed emergent intelligence and rudimentary ego, losing the mindless quality and immunity to mind-affecting effects. It gains dexterity, improved mental scores, the ability to wield objects using pseudopods, and class skills. Alignment is always chaotic neutral.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['ooze'] }],
    abilityScoreChanges: [
      { ability: 'DEX', change: 6 },
      { ability: 'CON', change: 6 },
      { ability: 'WIS', change: 6 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote:
      'Intelligence becomes 10 if base creature has no Int or less than 10; gains +4 to Intelligence if base creature already has 10 or more. Loses immunity to mind-affecting effects.',
    features: [
      {
        scalingType: 'flat',
        name: 'Pseudopod Weapon Use',
        description:
          'Can wield one appropriate one-handed object via a pseudopod. With multiple natural attacks, can wield two-handed weapons using two pseudopods. Wielding objects with two pseudopods prevents natural attack usage. Cannot use inherited weapon or armor proficiencies.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Damage on Held Objects',
        description:
          'The ooze\'s energy damage (acid, etc.) applies to held objects once per round.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown',
      publication: 'Unknown 3pp Source',
    },
    visibility: 'global',
    rev: 1,
  },

  // 239. Idol Champion (CR +0)
  {
    id: 'idol-champion',
    name: 'Idol Champion',
    description:
      'A creature chosen by a divine or magical idol to serve as its dedicated caretaker and champion. The idol champion reduces the idol\'s maintenance cost, extends the range of its benefits, and enhances the idol\'s power through devoted service. No combat statistics are altered.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Intelligence and Charisma scores of at least 6' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Idol Caretaker (Su)',
        description:
          "Reduces the idol's maintenance cost by treating its Ego score as lower by the champion's level/HD. Must perform maintenance tasks for four hours daily, 70% of the month. Multiple champions treat the leader as 1 level higher for cost reduction.",
      },
      {
        scalingType: 'flat',
        name: 'Idol Promise (Su)',
        description:
          "If the served idol grants immortal promise benefits, the champion retains those benefits at any distance from the idol, not just within 1 mile.",
      },
      {
        scalingType: 'flat',
        name: 'Idol Enhancer (Su)',
        description:
          "At 3rd level and beyond, the idol is treated as being in a higher worshipper category for ego purposes. Each additional 3 levels (6th, 9th, 12th, 15th, 18th) grants an additional category, up to +6 maximum. Multiple champions treat the leader as 1 level higher for this ability.",
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG' },
    visibility: 'global',
    rev: 1,
  },

  // 240. Implacable Stalker (CR +2)
  {
    id: 'implacable-stalker',
    name: 'Implacable Stalker',
    description:
      'An evil hunter of relentless, supernatural determination. The stalker senses fear at great range, teleports to frightened prey, grows stronger near terrified victims, and returns from death through the nightmares of witnesses. Must be evil-aligned and have Intelligence 3 or higher.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['any evil'] },
      { type: 'special', description: 'Intelligence 3 or higher' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote:
      'If undead, Charisma +6 replaces the Constitution increase.',
    naturalArmorChange: 6,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '-' },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
      { energyType: 'fire', value: 10 },
      { energyType: 'sonic', value: 10 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Reduced Land Speed',
        description:
          'Base land speed reduced by 10 feet (minimum 20 feet remains).',
      },
      {
        scalingType: 'flat',
        name: 'Terrifying Inevitability (Su)',
        description:
          'While the stalker can see or hear a frightened or panicked creature, it gains fast healing equal to its Hit Dice, DR 10/-, and SR 16 + CR.',
      },
      {
        scalingType: 'flat',
        name: 'Sense Fear (Su)',
        description:
          'Functions as blindsight with a range of 120 feet, but only detects creatures experiencing fear. Blocked by 1 foot of stone, 1 inch of metal, a lead sheet, or 3 feet of wood or dirt.',
      },
      {
        scalingType: 'flat',
        name: 'Fear Aura (Su)',
        description:
          'Creatures with 5 or more fewer HD than the stalker become frightened for 1 minute; others must save or become shaken while within 60 feet. Mind-affecting fear effect. One successful save grants immunity until re-entering the aura.',
      },
      {
        scalingType: 'flat',
        name: 'Gory Display (Ex)',
        description:
          "Upon killing a sentient creature, the stalker gains a swift-action benefit (choose one): +4 morale bonus to Strength and Dexterity for 1 minute, recharge a spell-like ability, heal HP equal to HD, or cause nearby creatures to become vulnerable to fear effects for 10 minutes.",
      },
      {
        scalingType: 'flat',
        name: 'Nightmare Resurrection (Su)',
        description:
          'Upon death, witnesses become subject to weekly nightmare saves. Three consecutive failures allow the stalker to return via true resurrection, potentially manifesting within 5 miles if the corpse is destroyed.',
      },
      {
        scalingType: 'flat',
        name: 'Right Behind You (Sp)',
        description:
          'Swift action teleportation (up to 480 feet) to an adjacent square of a shaken, frightened, or panicked creature. Recharges in 1d6 rounds. Targets fleeing more than 40 feet deny the stalker their Dexterity bonus to AC.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG' },
    visibility: 'global',
    rev: 1,
  },

  // 241. Ink-Infused Creature (CR +1)
  {
    id: 'ink-infused-creature',
    name: 'Ink-Infused Creature',
    description:
      'A living corporeal creature whose body has been suffused with animated ink, transforming it into an aberration. The body resembles flowing liquid ink marked with letters, arcane symbols, or alien iconography. It gains amorphous and compression qualities, acid resistance, and can disguise itself as a tattoo or graffiti. It is vulnerable to erase spells.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'aberration',
    resistances: [{ energyType: 'acid', value: 10 }],
    features: [
      {
        scalingType: 'flat',
        name: 'Liquid Form (Ex)',
        description:
          'Gains the Amorphous and Compression universal monster abilities, providing immunity to precision damage and critical hits, and the ability to move through spaces smaller than its size.',
      },
      {
        scalingType: 'flat',
        name: 'Two-Dimensional Camouflage (Ex)',
        description:
          '+4 racial bonus on Stealth and Disguise checks when attempting to appear as a tattoo or graffiti on a wall or similar surface.',
      },
      {
        scalingType: 'flat',
        name: 'Alchemical Save Bonus',
        description:
          '+2 racial bonus on saving throws against alchemical attacks or effects.',
      },
      {
        scalingType: 'flat',
        name: 'Erase Vulnerability',
        description:
          'Takes 1 point of damage per caster level, without a saving throw, when targeted by an erase spell.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG' },
    visibility: 'global',
    rev: 1,
  },

  // 242. Insatiable (CR +2)
  {
    id: 'insatiable',
    name: 'Insatiable',
    description:
      'An undead psionic creature driven by existential torment and an unending compulsion toward universal destruction. The insatiable gains lifesense, channel resistance, fast healing, power resistance, and psionic attacks that convert energy to force, but suffers from vulnerability to mind-affecting effects and confusion/insanity suppression. It reforms after destruction unless such effects are used to kill it.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['augmented', 'psionic'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote: 'No Constitution score (undead). Uses Charisma for bonus hit points.',
    naturalArmorChange: 3,
    fastHealing: '5',
    srFormula: 'CR + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'Gains channel resistance +4.',
      },
      {
        scalingType: 'flat',
        name: 'Lifesense (Su)',
        description: 'Gains lifesense extending 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Ex)',
        description:
          'Destroyed insatiables restore themselves within 2d4 days. Permanent destruction requires affecting the creature with effects that suppress or remove confusion or insanity. After such effects apply, the insatiable can be killed normally within 24 hours.',
      },
      {
        scalingType: 'flat',
        name: 'Tormented Thoughts (Ex)',
        description:
          'Lacks immunity to mind-affecting effects and confusion/insanity suppressors. Such effects automatically bypass power resistance. Takes a -4 penalty on related saving throws.',
      },
      {
        scalingType: 'flat',
        name: 'Dynamic Optimization (Su)',
        description:
          'Energy damage from any ability converts to equivalent force damage instead.',
      },
      {
        scalingType: 'flat',
        name: 'Unravel Energies (Su)',
        description:
          'Melee hits trigger targeted dispel psionics effects at a caster level equal to Hit Dice.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown',
      publication: 'Arcforge Universe Cyclopedia',
    },
    visibility: 'global',
    rev: 1,
  },

  // 243. Instrument of The Gods (CR +6) [3pp]
  {
    id: 'instrument-of-the-gods',
    name: 'Instrument of The Gods',
    description:
      'A being of CR 12 or higher elevated to divine instrument status, gaining mythic tiers equal to half base CR, near-indestructible regeneration, sweeping immunities, DR 20/epic, and primordial ur-energy attacks that bypass all resistances. The creature gains a halo of otherworldly fire.',
    crAdjustment: 6,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'min_hd', minimum: 12 }],
    subtypeGains: ['mythic'],
    damageReduction: { scalingType: 'flat', value: 20, bypassedBy: 'epic' },
    srFormula: 'final CR + 10',
    immunities: [
      'ability damage',
      'bleed',
      'disease',
      'energy drain',
      'mind-affecting effects',
      'paralysis',
      'permanent wounds',
      'petrification',
      'poison',
      'polymorph',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Mythic Tiers',
        description:
          'Gains mythic tiers equal to half the base creature\'s CR (maximum tier 10). Gains all cumulative mythic abilities for those tiers but does not select a mythic path.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Hit Points',
        description: 'Receives bonus HP equal to its Hit Die for each mythic tier possessed.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Blindsight (Ex)',
        description: 'Gains blindsight with a range of 10 feet per CR of the base creature.',
      },
      {
        scalingType: 'flat',
        name: 'Divine Regeneration (Ex)',
        description:
          'Regeneration equal to the base creature\'s CR plus 20. No form of attack can suppress this regeneration — it regenerates even if disintegrated or slain by a death effect. If killed instantly, it rises 3 rounds later with 1 HP unless further damaged. Replaces any existing regeneration or fast healing.',
      },
      {
        scalingType: 'flat',
        name: 'Improved Mythic Surge (Su)',
        description:
          'Can use its mythic surge once per round as a free action instead of expending mythic power.',
      },
      {
        scalingType: 'flat',
        name: 'Ur Energy (Ex)',
        description:
          'All energy damage (acid, cold, fire, electricity, sonic) becomes primordial ur-energy. No resistance or immunity applies unless the source has a higher mythic tier, but existing weaknesses still apply.',
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

  // 244. Inveigler (CR +1) [3pp]
  {
    id: 'inveigler',
    name: 'Inveigler',
    description:
      'A non-good creature with a supernatural gift for deception, domination, and concealment of its true nature. Its charm and domination abilities are undetectable by magic, truth-seeking magic reveals only what it wishes, and even its corpse can only lie.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['any non-good'] },
      { type: 'special', description: 'Intelligence and Charisma 8 or higher' },
    ],
    abilityScoreChanges: [
      { ability: 'INT', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Charming Falsehood (Su)',
        description:
          '1/day when the inveigler tells a convincing lie that targets can hear, they must make an opposed Sense Motive check against its Bluff. Failure by less than 5 results in a charm monster effect; failure by 5 or more causes a dominate monster effect. Both use the inveigler\'s character level as caster level. Sonic, mind-affecting charm effect.',
      },
      {
        scalingType: 'flat',
        name: 'Hidden Enchantment (Su)',
        description:
          'Charm and dominate effects cannot be detected by detect magic. Sense Motive checks to identify the influence take a -15 penalty. True seeing and truth-revealing magic function normally.',
      },
      {
        scalingType: 'flat',
        name: 'Taken to the Grave (Su)',
        description:
          "Speak with dead cast on the inveigler's corpse yields only lies. Only wish or miracle can extract the truth.",
      },
      {
        scalingType: 'flat',
        name: 'Truth Be Told (Su)',
        description:
          'Truth-detection magic reveals lies only if the inveigler wishes it. This includes zone of truth, wish, and miracle. Other creatures can still reveal truth through normal magic.',
      },
      {
        scalingType: 'flat',
        name: 'Undetectable Nature (Su)',
        description:
          'Alignment and true form detection automatically reveals the detector\'s own alignment instead. If aware, the inveigler can choose which alignment to reveal. Defeats true seeing but yields to wish or miracle.',
      },
      {
        scalingType: 'flat',
        name: 'Undetectable Thoughts (Su)',
        description:
          'The inveigler becomes aware of detect thoughts attempts and can choose which thoughts to reveal. Wish or miracle spells reveal true thoughts.',
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

  // 245. Iron Lich Creature (CR +2) [3PP]
  {
    id: 'iron-lich-creature',
    name: 'Iron Lich Creature',
    description:
      'An undead creature of iron and bound souls. The iron lich collects souls in cages to fuel its spellcasting, requiring a steady consumption of soul points to function. It possesses immense natural armor, rejuvenation, and unusual vulnerabilities tied to its internal furnace-like firebox.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 10 },
      { ability: 'DEX', change: -4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote:
      'No Constitution score (undead). Uses Charisma for bonus hit points.',
    naturalArmorChange: 15,
    damageReduction: { scalingType: 'flat', value: 15, bypassedBy: 'bludgeoning and magic' },
    resistances: [
      { energyType: 'fire', value: 20 },
      { energyType: 'cold', value: 'immunity' },
      { energyType: 'electricity', value: 'immunity' },
    ],
    immunities: ['positive energy', 'undead traits'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'Gains channel resistance +4.',
      },
      {
        scalingType: 'flat',
        name: 'Lifesense (Su)',
        description: 'Gains lifesense out to 120 feet (functions as blindsight).',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Soul Cages (Su)',
        description:
          'Maintains 4 soul cages (AC = iron lich\'s AC + size modifier; 5 HP each; hardness 25). Soul point values range from 1 point (mindless creatures) to 500 points (high-level entities). Maximum soul pool: 600 + HD + Charisma modifier. Expends soul points to cast spells (1 point per spell level).',
      },
      {
        scalingType: 'flat',
        name: 'Reliance on Souls (Su)',
        description:
          'Consumes 5 soul points every 12 hours or becomes staggered. If unable to consume, becomes helpless.',
      },
      {
        scalingType: 'flat',
        name: 'Claw Attack (Ex)',
        description:
          'Gains a claw attack dealing size-appropriate damage plus Strength modifier, usable as a free action once per round or for attacks of opportunity.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description: 'Possesses the standard rejuvenation ability of liches.',
      },
      {
        scalingType: 'flat',
        name: 'Firebox Vulnerability (Ex)',
        description:
          'The iron lich\'s internal firebox can be extinguished by submersion or a failed saving throw against cold spells, causing the staggered condition.',
      },
      {
        scalingType: 'flat',
        name: 'Special Healing',
        description:
          'Make whole repairs the iron lich as if it were a construct. Iron body heals 10 HP per caster level (maximum 150 HP).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown',
      publication: 'Unknown 3pp Source',
    },
    visibility: 'global',
    rev: 1,
  },

  // 246. Ironskinned (CR +0) [3pp]
  {
    id: 'ironskinned',
    name: 'Ironskinned',
    description:
      'Animals and magical beasts with a strong connection to the elemental plane of earth develop thickened, stone-like skin providing acid resistance and increasing damage reduction, at the cost of reduced movement speed, poorer Reflex saves, and vulnerability to sonic damage.',
    crAdjustment: 0,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['animal', 'magical beast'] }],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 0, bypassedBy: '-' },
        { minHD: 6, maxHD: 10, value: 1, bypassedBy: 'adamantine' },
        { minHD: 11, maxHD: 20, value: 2, bypassedBy: 'adamantine' },
        { minHD: 21, value: 3, bypassedBy: 'adamantine' },
      ],
    },
    resistances: [
      { energyType: 'acid', value: 3 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Acid Resistance (Tiered)',
        description:
          'Acid resistance scales with HD: 3 (1-5 HD), 5 (6-10 HD), 10 (11-20 HD), 15 (21+ HD).',
      },
      {
        scalingType: 'flat',
        name: 'Reduced Speed',
        description:
          'Movement speed is reduced to half normal due to the creature\'s weight and thick build. Suffers no penalties from medium or heavy encumbrance or armor.',
      },
      {
        scalingType: 'flat',
        name: 'Reduced Reflex',
        description: '-2 penalty to Reflex saving throws.',
      },
      {
        scalingType: 'flat',
        name: 'Swim Penalty',
        description: '-4 penalty to Swim checks.',
      },
      {
        scalingType: 'flat',
        name: 'Sonic Vulnerability',
        description: 'Vulnerable to sonic damage.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Super Genius Games',
      publication: "Adventurer's Handbook: Genius Guide Volume 1",
    },
    visibility: 'global',
    rev: 1,
  },

  // 247. Jotunblood Giant (CR +4) [3pp]
  {
    id: 'jotunblood-giant',
    name: 'Jotunblood Giant',
    description:
      'A mightier giant elevated by primordial jotun bloodline, growing one size category and gaining 10 additional racial HD, fast healing, improved rock throwing, scent, and spell resistance. Typically serves as a tribal leader. Each giant subtype gains an additional unique special ability.',
    crAdjustment: 4,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'subtype', required: ['giant'] }],
    sizeChange: 1,
    abilityScoreChanges: [
      { ability: 'STR', change: 8 },
      { ability: 'DEX', change: -2 },
      { ability: 'CON', change: 2 },
    ],
    abilityScoreChangeNote:
      'Dexterity and Constitution adjustments may vary by size category. All speeds increase by 10 ft.',
    fastHealing: '5',
    srFormula: 'HD + 8',
    features: [
      {
        scalingType: 'flat',
        name: 'Size Increase and Natural Armor',
        description:
          'Size increases by one category. Natural armor bonus increases: +6 (Large), +7 (Huge), +8 (Gargantuan), +9 (Colossal).',
      },
      {
        scalingType: 'flat',
        name: 'Additional Racial Hit Dice',
        description:
          'Gains 10 additional racial HD of the same type as the base creature. Recalculates feat allotment and gains skill points equal to additional HD.',
      },
      {
        scalingType: 'flat',
        name: 'Scent (Ex)',
        description: 'Gains the scent ability.',
      },
      {
        scalingType: 'flat',
        name: 'Rock Catching',
        description: 'Gains rock catching if not already possessed.',
      },
      {
        scalingType: 'flat',
        name: 'Improved Rock Throwing (Ex)',
        description:
          '+1 racial bonus on attack rolls when throwing rocks. Can hurl objects two size categories smaller. Range increments: Large 120 ft., Huge 150 ft., Gargantuan 200 ft., Colossal 250 ft. Damage equals three times the creature\'s base slam damage plus 1-1/2 times its Strength bonus.',
      },
      {
        scalingType: 'flat',
        name: 'Subtype-Specific Ability',
        description:
          'Each jotunblood giant gains an ability based on its giant subtype: Ash Giant gains immunity to magic except force and remove disease; Cyclops gains Battle Insight (Wisdom modifier as bonus to AC); Hill Giant gains the ability to meld into earth at will with healing; Stone Giant gains DR 10/adamantine; Wood Giant gains constant speak with plants.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown',
      publication: 'Unknown 3pp Source',
    },
    visibility: 'global',
    rev: 1,
  },

  // 248. Kanabo (CR +varies)
  {
    id: 'kanabo',
    name: 'Kanabo',
    description:
      'Half-ja noi, half-hobgoblin offspring possessing oni vitality and mystical power without the compulsive battle drive. The kanabo template applies to living, corporeal goblinoid humanoids, transforming them into lawful evil native outsiders and granting progressively more powerful spell-like abilities and regeneration as their HD increase.',
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid'] },
      { type: 'subtype', required: ['goblinoid'] },
    ],
    typeChange: 'outsider',
    subtypeGains: ['native'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 1,
    regeneration: 'varies by HD (acid and fire)',
    features: [
      {
        scalingType: 'flat',
        name: 'Variable CR Adjustment',
        description:
          'CR increases by +1 for 10 HD or fewer; +2 for 11 or more HD.',
      },
      {
        scalingType: 'flat',
        name: 'Regeneration (Ex)',
        description:
          'Regeneration 1 (acid and fire) for 11 or fewer HD. Regeneration 5 (acid and fire) for 12 or more HD.',
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities (Sp)',
        description:
          'Spell-like abilities scale with HD. 1-2 HD: doom 3/day, magic weapon 3/day. 3-4 HD: also bull\'s strength and command 3/day. 6-8 HD: also fly 3/day. 9+ HD: also alter self (at will) and monstrous physique I (at will). Caster level equals HD.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG' },
    visibility: 'global',
    rev: 1,
  },

  // 249. Kingkiller Creature (CR +3) [3pp]
  {
    id: 'kingkiller-creature',
    name: 'Kingkiller Creature',
    description:
      'A chaotic evil outsider scourge of kingdoms, capable of absorbing and consuming magic, inflicting wounds that resist magical healing, and rejuvenating until destroyed by unique means. The kingkiller selects a scourge type (fire, madness, blight, pestilence, storm, vermin, or war) granting additional specialized powers. It serves as a kingdom-level threat in the Kingmaker campaign framework.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'outsider',
    subtypeGains: ['chaotic', 'evil', 'native'],
    abilityScoreChanges: [
      { ability: 'STR', change: 10 },
      { ability: 'DEX', change: 10 },
      { ability: 'CON', change: 10 },
    ],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 9, value: 5, bypassedBy: 'cold iron' },
        { minHD: 10, maxHD: 14, value: 10, bypassedBy: 'cold iron and good' },
        { minHD: 15, value: 15, bypassedBy: 'cold iron, good, and lawful' },
      ],
    },
    features: [
      {
        scalingType: 'flat',
        name: 'Fly Speed',
        description:
          'Base land speed increases by +30 feet. Gains a fly speed of 90 feet (average maneuverability) or +30 feet to any existing fly speed.',
      },
      {
        scalingType: 'flat',
        name: 'Absorb Magic (Su)',
        description:
          'Wings absorb psionic, supernatural, and spell effects. Successful saves negate spell effects; creature absorbs spell levels equal to the spell level (or HD/2 for non-spell effects).',
      },
      {
        scalingType: 'flat',
        name: 'Accursed Wounding (Su)',
        description:
          'Damage cannot be healed normally without a successful Will save (DC 10 + 1/2 HD + Con modifier). Magical healing will not heal damage dealt unless a specific type of creature under specific circumstances casts remove curse or a similar spell.',
      },
      {
        scalingType: 'flat',
        name: 'Consume Magic (Su)',
        description:
          'Standard action combat maneuver check against magic items or barriers to drain magic, gaining spell levels. Renders items non-magical.',
      },
      {
        scalingType: 'flat',
        name: 'Execute Official (Su)',
        description:
          'Swift action targeting a helpless government servant within 10 feet per HD. Target makes Will save (DC 10 + 1/2 HD + Con modifier) or dies; the kingkiller gains 1d8 temporary HP, absorbs 4 spell levels, and increases effective caster level by 1.',
      },
      {
        scalingType: 'flat',
        name: 'Detect Magic (Su)',
        description:
          'Continuously detects all magic (as the detect magic spell) within 6 miles per HD.',
      },
      {
        scalingType: 'flat',
        name: 'Fast Healing via Spell Levels (Su)',
        description:
          'Expend spell levels for fast healing 3 per level, maximum equal to Constitution score.',
      },
      {
        scalingType: 'flat',
        name: 'Listen In (Su)',
        description:
          'Automatically hears psionic and magical communication within 1 mile per HD.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          'Upon defeat, heals maximum HP using remaining spell levels. If no magic remains, reforms 2d10 hours later with 1 HP. Permanent destruction requires unique means identified through research (DC 15 + CR Knowledge check).',
      },
      {
        scalingType: 'flat',
        name: 'Overloading Weakness',
        description:
          'A kingkiller can absorb a maximum number of spell levels equal to its Hit Dice x 4. Takes 50% additional damage from cold iron weapons.',
      },
      {
        scalingType: 'flat',
        name: 'Scourge Type (choose one)',
        description:
          'Fire: flame barrier (wall of fire for 4 levels), +1d6 fire on attacks (scaling); Madness: delusion (Con damage/confusion on hit), illusion spell-likes; Blight: aging curse (age 1-3 categories on hit), blighted crops, ruinous touch; Pestilence: virulent contagions (30-ft. aura), illness (sicken), Constitution damage; Storm: call lightning (swift), call storms, +1d6 electricity and sonic on attacks; Vermin: command vermin/animals/swarms, swarm form (polymorph target into helpless swarm); War: bloodlust aura (will attack nearby creatures), incite murder, +1d6 damage on attacks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown',
      publication: 'Unknown 3pp Source',
    },
    visibility: 'global',
    rev: 1,
  },

  // 250. Klaven (CR +1; 3pp)
  {
    id: 'klaven',
    name: 'Klaven',
    description:
      'A living or recently deceased animal or humanoid converted by alien nanite technology into a lawful evil servitor. The klaven gains claws or enlarged natural weapons, darkvision, nanite-based telepathy with other klaven, and an energy modulation ability. It cannot be restored to its original form and is immune to fear but vulnerable to evil charm and compulsion effects.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['animal', 'humanoid'] }],
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: -2, minimum: 3 },
    ],
    abilityScoreChangeNote: 'Animals always have Intelligence 3 after conversion.',
    naturalArmorChange: 4,
    immunities: ['fear'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Claw Attacks',
        description:
          'Humanoid klaven gain two claw attacks as an immediate action (bone spurs from hands/forearms) dealing damage as if one size category larger. Animal klaven increase existing natural weapon damage as if enlarged one size category.',
      },
      {
        scalingType: 'flat',
        name: 'Plagueborn (Ex)',
        description:
          '+2 bonus on saving throws against disease, ingested poisons, and nauseated and sickened conditions.',
      },
      {
        scalingType: 'flat',
        name: 'Malign Influence (Su)',
        description:
          '-2 penalty to resist charm and mind-controlling compulsion effects from evil creatures; -6 penalty against jagdaline creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Converted Host (Ex)',
        description:
          'Cannot be restored to original form. Immune to raise dead but can be returned by true resurrection, wish, or miracle.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Modulation (Su)',
        description:
          'As an immediate action (1/day; +1 use at 8 HD and again at 12 HD), treat positive or negative energy as an undead would until the start of the next turn.',
      },
      {
        scalingType: 'flat',
        name: 'Nanite Exchange (Su)',
        description:
          'Continuous awareness of nearby klaven locations and conditions within 60 feet (100 feet at 8+ HD, 1 mile at 12+ HD). Can exchange memories and sensory information through physical contact as a full-round action.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Alien Codex',
    },
    visibility: 'global',
    rev: 1,
  },
];
