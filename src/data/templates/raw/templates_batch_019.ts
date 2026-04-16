// Batch 019 | first: 'Spectral Troll (CR +1)' | last: 'Therianthrope (CR varies)' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_019: TemplateDefinition[] = [
  // 451. Spectral Troll (CR +1)
  {
    id: 'spectral-troll',
    name: 'Spectral Troll',
    description:
      'Jet-black undead trolls that despise all living creatures, including normal trolls. Spectral trolls are incorporeal undead formed from the remains of slain trolls, retaining a hatred of the living and ability to create spawn from slain humanoids.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be a troll' },
    ],
    typeChange: 'undead',
    subtypeGains: ['incorporeal'],
    abilityScoreChanges: [
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote:
      'Loses Strength and Constitution scores (incorporeal undead). Gains +6 Charisma. Fly speed 30 ft. (perfect). Loses base creature regeneration and fast healing.',
    immunities: ['physical contact effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'The spectral troll gains +4 channel resistance against channeled energy effects.',
      },
      {
        scalingType: 'flat',
        name: 'Corrupting Touch (Su)',
        description:
          'The spectral troll can make an incorporeal touch attack that deals a number of d6s of supernatural aging damage equal to its CR. This damage bypasses damage reduction.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Any humanoid killed by a spectral troll rises as a free-willed spectre 1d3 days later unless the body is blessed or the area consecrated.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          'If destroyed, the spectral troll returns after 2d4 days unless the reason for its undeath is discovered and resolved.',
      },
      {
        scalingType: 'flat',
        name: 'Vanish (Su)',
        description:
          'The spectral troll disappears in direct sunlight and reappears when night falls.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Frog God Games', publication: 'Tome of Horrors Complete' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 452. Spell-Inscribed Undead Template (CR +1)
  {
    id: 'spell-inscribed-undead',
    name: 'Spell-Inscribed Undead Template',
    description:
      'Specially treated undead whose forms are inscribed with magical formulae and arcane runes, allowing them to use spells granted by their creator. The template is more effective when the undead is intelligent. The creator must possess the Craft Wondrous Item feat and the ability to cast the inscribed spells; creation takes a number of days equal to the undead\'s Charisma score and costs 150 gp per spell.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['undead'] },
      { type: 'special', description: 'Must be a corporeal undead with Charisma 10 or higher' },
    ],
    srFormula: '10 + Charisma modifier (or existing SR if higher)',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +2',
        description: 'Gains +2 bonus to channel resistance (stacks with existing bonuses).',
      },
      {
        scalingType: 'flat',
        name: 'Spell Resistance',
        description: 'Gains spell resistance equal to 10 + its Charisma modifier, or retains existing SR if that is higher.',
      },
      {
        scalingType: 'flat',
        name: 'Saving Throw Bonus vs. Spells',
        description: 'Gains a +2 bonus on all saving throws against spells and spell-like abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Inscribed Spell-Like Abilities (Sp)',
        description:
          'The undead gains spell-like abilities granted by its creator based on its Charisma score. Caster level equals the undead\'s Hit Dice; save DCs are Charisma-based.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Orphaned Bookworm Productions', publication: 'Breath of Life: The Archivist' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 453. Spellgorged Zombie Template (CR fixed)
  {
    id: 'spellgorged-zombie',
    name: 'Spellgorged Zombie Template',
    description:
      'A programmed undead creature created from an arcane or divine spellcaster\'s corpse via create greater undead, designed to store and deploy spells on command. The spellgorged zombie holds spell levels equal to its Hit Dice and uses the original caster\'s caster level and save DCs. Unlike normal zombies, these retain weapon proficiencies and natural attacks.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be the corpse of an arcane or divine spellcaster; created via create greater undead' },
    ],
    crTiers: [
      { tierIndex: 0, minHD: 1, maxHD: 1, crValue: 0.5, label: '1 HD', features: [] },
      { tierIndex: 1, minHD: 2, maxHD: 2, crValue: 1, label: '2 HD', features: [] },
      { tierIndex: 2, minHD: 3, maxHD: 4, crValue: 2, label: '3–4 HD', features: [] },
      { tierIndex: 3, minHD: 5, maxHD: 6, crValue: 3, label: '5–6 HD', features: [] },
      { tierIndex: 4, minHD: 7, maxHD: 11, crValue: 4, label: '7–11 HD', features: [] },
      { tierIndex: 5, minHD: 12, maxHD: 14, crValue: 5, label: '12–14 HD', features: [] },
      { tierIndex: 6, minHD: 15, maxHD: 17, crValue: 6, label: '15–17 HD', features: [] },
      { tierIndex: 7, minHD: 18, maxHD: 20, crValue: 7, label: '18–20 HD', features: [] },
    ],
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: -2 },
    ],
    abilityScoreChangeNote:
      'Strength +2, Dexterity -2. No Constitution score (undead). No Intelligence score (zombie). Charisma becomes 10. Retains natural attacks and weapon proficiencies; gains a slam attack (1d6 for Medium). Loses all special attacks; flying maneuverability reduced to clumsy. Always neutral evil.',
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Spell Storing (Su)',
        description:
          'The spellgorged zombie holds a total number of spell levels equal to its Hit Dice. Spells are cast at the original caster\'s caster level and use the original caster\'s save DCs. No material components or arcane spell failure apply.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Frog God Games', publication: 'Tome of Horrors Complete' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 454. Spellspurned (CR +2)
  {
    id: 'spellspurned',
    name: 'Spellspurned',
    description:
      'Creatures permanently severed from magical forces, rejecting all arcane power while thriving through alternative means such as technology. They cannot cast spells, use magic items, or retain supernatural abilities (except those granted by this template), but gain powerful anti-magic capabilities and physical resilience.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote:
      'CR adjustment may be +1 instead of +2 if the base creature normally relies heavily on supernatural abilities or spells.',
    immunities: ['magic (treated as unbeatable spell resistance)'],
    features: [
      {
        scalingType: 'flat',
        name: 'Arcane Interference (Su)',
        description:
          'The spellspurned radiates a 10-foot aura. Within this aura, spellcasters have a 5% chance per Hit Die of the spellspurned of being subjected to an antimagic field until they leave the aura.',
      },
      {
        scalingType: 'flat',
        name: 'Eldritch Severance (Su)',
        description:
          'The spellspurned can make a melee touch attack that applies greater dispel magic (caster level equals the creature\'s Hit Dice). Against magic items, this suppresses their magical abilities while the spellspurned touches them and for 1d4 minutes afterward. At 15 or more Hit Dice, this improves to mage\'s disjunction.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Legendary Games', publication: 'Arcforge Universe Cyclopedia' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 455. Spirit Elk-Maddened Creature (CR +1)
  {
    id: 'spirit-elk-maddened-creature',
    name: 'Spirit Elk-Maddened Creature',
    description:
      'Creatures transformed by the Spirit Elk\'s influence become solitary, maddened beings. While retaining their physical form, they gain enhanced strength and partial access to the Spirit Elk\'s powers, driving them to seek out challenging combat until they are defeated.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any animal or humanoid creature' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: -4 },
      { ability: 'WIS', change: -2 },
      { ability: 'CHA', change: -2 },
    ],
    abilityScoreChangeNote:
      'Intelligence minimum 1. Alignment changes to usually chaotic evil. Gains darkvision 60 ft. and low-light vision.',
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'cold iron' },
    resistances: [{ energyType: 'cold', value: 10 }],
    immunities: ['fatigue'],
    fastHealing: '10',
    features: [],
    sourceInfo: { type: 'third_party', publisher: "Varyag's Forge", publication: 'Magical Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 456. Spirit-Touched Creature (CR +0)
  {
    id: 'spirit-touched-creature',
    name: 'Spirit-Touched Creature',
    description:
      'Creatures formed from extreme exposure to occult energies with an innate connection to pact magic, often manifesting before birth. Spirit-touched creatures gain an occult subtype and pact magic affinities, but suffer withdrawal effects if separated from bound spirits.',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    subtypeGains: ['occult'],
    features: [
      {
        scalingType: 'flat',
        name: 'Occult Scent (sense)',
        description: 'The spirit-touched creature can detect occult energies and bound spirits through its supernatural sense of smell.',
      },
      {
        scalingType: 'flat',
        name: 'Occult Addiction (Ex)',
        description:
          'If the spirit-touched creature is unbound from a spirit for 24 or more hours, it takes a –4 penalty on ability checks, attack rolls, saving throws, and skill checks.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat: Amateur Pactmaker',
        description: 'Gains the Amateur Pactmaker feat regardless of prerequisites.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Radiance House', publication: 'Pact Magic Unbound: Grimoire of Lost Souls' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 457. Spore Zombie (CR +1)
  {
    id: 'spore-zombie',
    name: 'Spore Zombie',
    description:
      'An acquired template applied to vermin creatures infested with sinister fungal spores that animate them as intelligent undead. Antler-like fungal growths burst from their heads. Spore zombies can release clouds of spores that nauseate enemies and infest other vermin, which rise as spore zombies if slain within 24 hours.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['vermin'] },
    ],
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
    ],
    abilityScoreChangeNote:
      'Intelligence becomes 10 (gained from template). Charisma equals base creature\'s Constitution score. Constitution score removed (undead). Alignment always chaotic evil. Gains 2 additional HD. Skills: 4 + Int modifier per HD; Climb, Fly, Perception, Stealth are class skills. Languages: understands Abyssal but cannot speak. Bonus feat: Toughness.',
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Spore Burst (Ex)',
        description:
          'Once per day as a swift action, the spore zombie deals 2d6 damage to itself and creates a spore cloud affecting the area equal to its reach. Creatures in the cloud must succeed at a Fortitude save or be nauseated for 1d6 rounds. Vermin that fail become infested and rise as spore zombies if killed within 24 hours.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 6' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 458. Star-borne Creature (CR +1)
  {
    id: 'star-borne-creature',
    name: 'Star-borne Creature',
    description:
      'Creatures twisted and terrifying from the dark places between stars or alien worlds beyond the material plane. Star-borne creatures become aberrations with alien anatomy and minds, capable of flight through supernatural means and immune to the mental horrors they inflict upon others.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'aberration',
    typeChangeNote: 'Does not recalculate skills or Hit Dice when type changes.',
    abilityScoreChanges: [
      { ability: 'CHA', change: 2 },
    ],
    immunities: ['cold', 'confusion', 'fear', 'insanity'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The star-borne creature gains darkvision with a 60-foot range.',
      },
      {
        scalingType: 'flat',
        name: 'Alien Anatomy (Ex)',
        description: 'The star-borne creature has a 50% fortification chance against critical hits and sneak attacks.',
      },
      {
        scalingType: 'flat',
        name: 'No Breath (Ex)',
        description: 'The star-borne creature does not breathe and is immune to effects requiring breathing.',
      },
      {
        scalingType: 'flat',
        name: 'Supernatural Flight (Su)',
        description:
          'The star-borne creature gains a fly speed equal to its fastest non-flying speed (supernatural). If it already had a fly speed, it uses the higher value.',
      },
      {
        scalingType: 'flat',
        name: 'Alien Mind (Ex)',
        description:
          'Any creature that makes mental contact with the star-borne creature must make a Will save. On a failed save, the creature is confused for 1d6 rounds. On a successful save, it is staggered for 1 round.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Legendary Games', publication: 'Legendary Witches' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 459. Steam-Powered Clockwork (CR +2)
  {
    id: 'steam-powered-clockwork',
    name: 'Steam-Powered Clockwork',
    description:
      'An inherited template for constructs that replaces clockwork winding mechanisms with steam engines powered by alchemically treated boilers of superheated water. Steam-powered clockworks are faster and stronger than their wound counterparts but carry the risk of catastrophic self-destruction when heavily damaged.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    subtypeGains: ['clockwork', 'augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
    ],
    abilityScoreChangeNote:
      'If the base creature lacks the clockwork subtype, it also gains vulnerability to electricity, swift reactions, and difficult to create qualities.',
    features: [
      {
        scalingType: 'hd_formula',
        name: 'Fire Resistance (HD-scaled)',
        description: 'Fire resistance scales with Hit Dice: 5 at low HD up to 30 at high HD.',
        formula: 'min(5 + floor(HD / 4) * 5, 30)',
      },
      {
        scalingType: 'flat',
        name: 'Heat Management (Ex)',
        description:
          'The steam-powered clockwork is affected by ambient temperature: in cold environments it slows, in hot environments it hastes, and melee attacks deal additional fire damage.',
      },
      {
        scalingType: 'flat',
        name: 'Increased Locomotion (Ex)',
        description: 'All movement speeds increase by 10 feet. The construct gains the Run feat as a bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Steam Engine (Ex)',
        description:
          'The construct\'s steam engine operates for 1 week per Hit Die before requiring maintenance. Using special attacks reduces remaining operation time by 1 day per use.',
      },
      {
        scalingType: 'flat',
        name: 'Self-Destruction (Ex)',
        description:
          'When reduced to 10% or fewer hit points, the construct explodes, dealing 1d6 fire and slashing damage per Hit Die in a burst (Reflex save for half).',
      },
      {
        scalingType: 'flat',
        name: 'Steam Blast (Ex)',
        description: 'Ranged touch attack dealing 1d6 fire damage per 2 Hit Dice, with a 30-foot range.',
      },
      {
        scalingType: 'flat',
        name: 'Steam Horn (Ex)',
        description:
          'Cone effect dealing 1d6 fire damage per 2 Hit Dice (Fortitude save for half) and potentially deafening targets. Reusable after 1d4 rounds.',
      },
      {
        scalingType: 'hd_formula',
        name: 'Fortification (Ex)',
        description: 'Fortification chance scales with Hit Dice (25–75%).',
        formula: 'min(25 + floor(HD / 8) * 25, 75)',
      },
      {
        scalingType: 'flat',
        name: 'Steam-Charged Melee',
        description: 'All melee attacks deal an additional 1d6 fire damage (2d6 during active Heat Management).',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Campaign Setting: Construct Handbook' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 460. Steampower Construct (CR +0)
  {
    id: 'steampower-construct',
    name: 'Steampower Construct',
    description:
      'A simple acquired template for constructs that grants steam-powered locomotion. The construct gains enhanced strength but requires regular refilling with water to continue functioning. Cold attacks are particularly damaging to these constructs.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    subtypeGains: ['steampowered'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
    ],
    abilityScoreChangeNote:
      'Strength bonus increases by an additional +2 for every size category above Medium.',
    features: [
      {
        scalingType: 'flat',
        name: 'Water Refill Requirement (Ex)',
        description:
          'A steampowered construct functions for 1 day per Hit Die before needing to be refilled with water. A Medium construct requires 8 gallons; water requirements are multiplied by 4 per size category above Medium or divided by 4 per category below.',
      },
      {
        scalingType: 'flat',
        name: 'Cold Vulnerability (Ex)',
        description: 'Steampowered constructs take 150% as much damage as normal from cold attacks.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Drop Dead Studios', publication: 'Ultimate Engineering' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 461. Stellar Vampire (CR +2)
  {
    id: 'stellar-vampire',
    name: 'Stellar Vampire',
    description:
      'A rare vampire variant capable of withstanding and harnessing stellar radiation, discovered by Martian vampires. Unlike traditional vampires, stellar vampires are not harmed by direct sunlight — indeed, sunlight doubles their fast healing. They can assume an energy form to move as a lightning bolt and drain vitality through electrical attacks.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living creature with 5 or more Hit Dice (typically humanoids, fey, or monstrous humanoids)' },
    ],
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote:
      'Constitution becomes 0 (undead). Class Hit Dice are recalculated normally.',
    naturalArmorChange: 6,
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'magic' },
    immunities: ['fire', 'electricity', 'all undead immunities'],
    fastHealing: '5 (doubles in direct sunlight or non-magical energy areas)',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'Gains +4 channel resistance against channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The stellar vampire sees in darkness to 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Desperate Retreat (Su)',
        description:
          'When reduced to 0 hit points, the stellar vampire assumes energy form and must reach a powerful non-magical energy source within 2 hours or be destroyed.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Drain (Su)',
        description:
          'The stellar vampire drains 1d4 Constitution from a pinned opponent. Each successful drain heals the vampire 5 hit points or grants temporary hit points.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description: 'Creatures slain by the stellar vampire become vampire spawn under the creator\'s control.',
      },
      {
        scalingType: 'flat',
        name: 'Dominate (Su)',
        description:
          'As a standard action, the stellar vampire can affect a humanoid within 30 feet as dominate person (Will save DC 10 + 1/2 HD + Charisma modifier).',
      },
      {
        scalingType: 'flat',
        name: 'Energy Form (Su)',
        description:
          'The stellar vampire can move as an electricity bolt up to 5 feet per Hit Die, dealing 1d6 damage per 2 Hit Dice (Reflex half). Usable 3 + Charisma modifier times per day.',
      },
      {
        scalingType: 'flat',
        name: 'Vitality Drain (Su)',
        description:
          'The stellar vampire\'s natural weapons inflict one negative level plus 1d6 electricity damage per 4 Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Vital Feed (Sp)',
        description:
          'After inflicting a negative level, the stellar vampire can cast one of the following as a spell-like ability (CL 5th): daylight, daze monster, displacement, levitate, resist energy, or shatter.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Vampire (Su)',
        description: 'Fast healing doubles in areas of direct sunlight or powerful non-magical energy.',
      },
      {
        scalingType: 'flat',
        name: 'Shadowless (Ex)',
        description: 'The stellar vampire casts no shadow and has no reflection in mirrors.',
      },
      {
        scalingType: 'flat',
        name: 'Spider Climb (Ex)',
        description: 'The stellar vampire can climb sheer surfaces as per the spider climb spell.',
      },
      {
        scalingType: 'flat',
        name: 'Weaknesses',
        description:
          'Garlic aversion (must stay 5 feet away); recoils from mirrors and holy symbols; cannot enter private dwellings uninvited; submersion in water staggers (round 1) then destroys (round 2); a wooden stake through the heart instantly slays (head must also be severed and body anointed with holy water for permanent death). Direct sunlight causes no harm.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Legendary Games', publication: 'Pathfinder Roleplaying Game: The World of Vampire Hunter D' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 462. Still Engine (CR +3)
  {
    id: 'still-engine',
    name: 'Still Engine',
    description:
      'Acquired template applied to constructs, representing mechanical vanguards powered by negative energy-based technologies. Still engines operate at incredible capacity, can endure extreme conditions, and project an aura of absolute stillness that suppresses sound, light, heat, and other sensory phenomena.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
    ],
    abilityScoreChangeNote:
      'Charisma becomes at least 12 (if base score is lower).',
    naturalArmorChange: 4,
    immunities: ['cold', 'sonic'],
    fastHealing: '5',
    features: [
      {
        scalingType: 'flat',
        name: 'Aura of Stillness (Su)',
        description:
          'A 30-foot aura suppresses all sound (as silence), all light (as deeper darkness), and also suppresses scent, heat sense, and electrical sense within the area.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Senses',
        description: 'The still engine gains see in darkness and touchsight (60 feet).',
      },
      {
        scalingType: 'flat',
        name: 'Necrotech Fortification (Su)',
        description:
          'The still engine adds its Charisma modifier to all saving throws and gains bonus hit points equal to its Charisma modifier multiplied by its Hit Dice. This does not stack with similar construct abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Negative Energy-Charged (Su)',
        description: 'The still engine takes damage from positive energy effects as if it were an undead creature.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Legendary Games', publication: 'Arcforge Universe Cyclopedia' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 463. Stone Idol Creature (CR +3)
  {
    id: 'stone-idol-creature',
    name: 'Stone Idol Creature',
    description:
      'A living creature transformed into an animate stone construct, often sculpted to serve as an object of worship. Stone idol creatures compel adoration through a charming gaze and project a fear aura that keeps non-worshippers at bay, growing more powerful as more charmed creatures pay homage.',
    crAdjustment: 3,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any living corporeal creature' },
    ],
    typeChange: 'construct',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -2 },
      { ability: 'WIS', change: -2 },
      { ability: 'CHA', change: -4 },
    ],
    abilityScoreChangeNote:
      'Intelligence becomes 6 (regardless of base score). Dexterity, Wisdom, and Charisma minimum 1. Alignment always evil. All racial HD convert to d10s and gain construct HP bonuses.',
    naturalArmorChange: 3,
    immunities: ['all construct immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Hardness 8',
        description: 'The stone idol creature has Hardness 8 and takes half damage from energy and ranged attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Sonic Vulnerability',
        description: 'The stone idol creature takes 150% normal damage from sonic attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Stone Fear (Su)',
        description:
          'Continuous aura in 60 feet forces Will saves or targets become shaken for 1 hour. The stone idol can suppress this ability at will.',
      },
      {
        scalingType: 'flat',
        name: 'Charming Gaze (Su)',
        description:
          'Any creature within 10 feet must succeed on a Will saving throw or be affected as though by charm monster.',
      },
      {
        scalingType: 'flat',
        name: "Creator's Failsafe (Su)",
        description: "The stone idol's creator is immune to the idol's special attacks while maintaining control over it.",
      },
      {
        scalingType: 'flat',
        name: 'Power from Worship (Ex)',
        description:
          'For every 10 charmed intelligent creatures paying homage, the stone idol gains 5 temporary hit points and a +2 bonus to Perception.',
      },
      {
        scalingType: 'flat',
        name: 'Restless Spirit (Ex)',
        description:
          'When control conditions are triggered, the creator must succeed at an opposed Charisma check or lose control of the stone idol.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Green Ronin Publishing', publication: 'Advanced Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 464. Sublime Creature (CR +2)
  {
    id: 'sublime-creature',
    name: 'Sublime Creature',
    description:
      'Beings with an exceptionally strong connection to positive energy, appearing preternaturally healthy and beautiful with an almost luminous life force. Some are born with their abilities; others have been blessed by gods or exposed to pure positive energy. Sublime creatures are ageless, heal rapidly, and can channel positive energy to heal allies.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 8 },
      { ability: 'INT', change: 4 },
      { ability: 'CHA', change: 8 },
    ],
    naturalArmorChange: 2,
    resistances: [
      { energyType: 'negative_energy', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
    ],
    immunities: ['magical aging', 'disease', 'positive energy damage'],
    fastHealing: 'equal to Charisma modifier',
    features: [
      {
        scalingType: 'flat',
        name: 'Ageless (Ex)',
        description: 'The sublime creature is immune to all aging effects and does not age.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Positive Energy (Su)',
        description:
          'The sublime creature can channel positive energy as a cleric with effective cleric levels equal to its racial Hit Dice (minimum 1).',
      },
      {
        scalingType: 'flat',
        name: 'Positive Energy Affinity (Su)',
        description: 'Healing spells and effects are twice as effective when applied to the sublime creature.',
      },
      {
        scalingType: 'flat',
        name: 'Strong Life-Force (Ex)',
        description:
          'The sublime creature adds its Charisma modifier to its Hit Dice when determining hit points.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Speed',
        description: 'All natural movement speeds increase by 10 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat: Toughness',
        description: 'Gains Toughness as a bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Diplomatic Presence',
        description: 'Gains a +4 racial bonus to Diplomacy checks.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Rite Publishing', publication: 'Pathways Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 465. Suzerain Creature (CR +1)
  {
    id: 'suzerain-creature',
    name: 'Suzerain Creature',
    description:
      'A leader blessed by the gods with exceptional charisma and command presence. Suzerain creatures possess regal bearing and inspire fierce loyalty in followers, granting teamwork feats to cohorts and shifting attitudes of those who meet them.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    immunities: ['fear'],
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Speed',
        description: 'All movement speeds increase by 10 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Dauntless Courage (Ex)',
        description:
          'The suzerain is immune to fear. Allies who view the suzerain as their leader and can see it also gain immunity to fear.',
      },
      {
        scalingType: 'flat',
        name: 'Born to Lead (Ex)',
        description:
          'The suzerain gains a +4 morale bonus to all rolls when one or more free-willed followers are visible. It may grant teamwork feats to cohorts and followers.',
      },
      {
        scalingType: 'flat',
        name: 'Enchanting Presence (Su)',
        description:
          'Once per round as a free action, all creatures within 30 feet have their attitude toward the suzerain shifted one step in a positive direction (Will save negates).',
      },
      {
        scalingType: 'flat',
        name: 'Inspiring Example (Ex)',
        description:
          'All allies within 60 feet gain a morale bonus on attack rolls, damage rolls, and saving throws equal to the suzerain\'s Charisma modifier.',
      },
      {
        scalingType: 'flat',
        name: 'Stirring Speech (Su)',
        description:
          'The suzerain can use the inspire greatness bardic performance ability a number of times per day equal to its Charisma modifier.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat: Leadership',
        description: 'Gains Leadership as a bonus feat if not already possessed.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description: '+8 racial bonus to Bluff, +14 racial bonus to Diplomacy, +6 racial bonus to Intimidate.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Green Ronin Publishing', publication: 'Advanced Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 466. Swamp Lord Creature (CR +2)
  {
    id: 'swamp-lord-creature',
    name: 'Swamp Lord Creature',
    description:
      'An inherited template transforming living or undead creatures into plant-based swamp lords. These malevolent beings rule marshlands with tentacles, amphibious adaptations, and growing command over marsh plants and terrain as they gain Hit Dice.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any living or undead corporeal creature with Intelligence and Charisma scores of at least 3' },
    ],
    typeChange: 'plant',
    subtypeGains: ['augmented', 'aquatic'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -2 },
      { ability: 'CON', change: 4 },
    ],
    abilityScoreChangeNote:
      'Dexterity minimum 1. Constitution gain only applies if the base creature has a Constitution score. All racial HD become d8s. All movement speeds decrease by 10 feet (minimum 5 feet); gains climb and/or swim speeds if lacking them. Alignment changes to any evil.',
    naturalArmorChange: 2,
    resistances: [
      { energyType: 'electricity', value: 10 },
      { energyType: 'fire', value: 10 },
      { energyType: 'sonic', value: 10 },
    ],
    fastHealing: '5 (only while in a marsh)',
    features: [
      {
        scalingType: 'flat',
        name: 'Tentacle Attacks',
        description:
          'Gains two tentacle attacks with reach 5 feet beyond normal and the grab ability. Tentacle damage is as one size category larger. Tentacles can be primary or secondary attacks (chosen at creation) and grant constrict and engulf special attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Amphibious (Ex)',
        description: 'The swamp lord can breathe both air and water.',
      },
      {
        scalingType: 'flat',
        name: 'Commune with Marshlands (Su)',
        description:
          'At will, the swamp lord can learn facts about the entire marsh it is in and the surrounding territory, as though it had cast commune with nature.',
      },
      {
        scalingType: 'flat',
        name: 'Trackless Step (Ex)',
        description: 'The swamp lord leaves no trail in natural surroundings and cannot be tracked unless it chooses to leave a trail.',
      },
      {
        scalingType: 'hd_formula',
        name: 'Spell-Like Abilities (Sp)',
        description:
          'Gains cumulative spell-like abilities as Hit Dice increase (entangle, warp wood, plant growth, control plants, shambler, and others). Caster level equals total Hit Dice; save DCs are Charisma-based.',
        formula: 'Cumulative per HD tier; CL = total HD',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          '+5 racial bonus to Knowledge (nature), Perception, Stealth, and Survival; +10 racial bonus to Escape Artist; additional +10 to Stealth in marshes or forests. Knowledge (nature) can be used untrained.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Green Ronin Publishing', publication: 'Advanced Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 467. Swarmblooded Creature (CR +1)
  {
    id: 'swarmblooded-creature',
    name: 'Swarmblooded Creature',
    description:
      'A creature cursed or augmented to have swarms of vermin flowing through its body instead of blood. Wriggling masses of bugs emerge from wounds, and when sufficiently damaged the creature releases swarms of vermin that can attack enemies independently.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any living corporeal creature' },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Swarm Bleed (Ex)',
        description:
          'When the swarmblooded creature takes certain types of damage, it releases an associated vermin swarm with a CR no greater than 1/3 of its Hit Dice (minimum CR 1). CR 1–3: triggers on critical hits, bleed effects, or death. CR 4–9: also triggers on slashing damage. CR 10+: triggers on any damage. The swarmblooded creature is immune to swarms created through this ability.',
      },
      {
        scalingType: 'flat',
        name: 'Verminous Innards (Ex)',
        description: 'Effects that grant bonuses against vermin also apply against the swarmblooded creature.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Green Ronin Publishing', publication: 'Advanced Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 468. Synthetic (CR +1)
  {
    id: 'synthetic',
    name: 'Synthetic',
    description:
      'Robotic replicas designed to live indefinitely, retaining the physical and mental attributes of their base creature while eliminating inherent weaknesses. Synthetics become constructs with the robot subtype, gaining construct immunities but becoming vulnerable to critical hits and electricity.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'construct',
    subtypeGains: ['robot'],
    abilityScoreChangeNote:
      'If the base creature\'s Intelligence score is less than 10, it becomes 10. No Constitution score (construct). All racial Hit Dice become d10s; class Hit Dice are unchanged.',
    immunities: ['all construct immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Vulnerability: Critical Hits and Electricity',
        description: 'Unlike most constructs, synthetics are vulnerable to critical hits and electricity damage.',
      },
      {
        scalingType: 'flat',
        name: 'Mimicry (Ex)',
        description: 'The synthetic gains a +8 racial bonus to Disguise checks to impersonate the original creature it was modeled after.',
      },
      {
        scalingType: 'flat',
        name: 'Robot Upgrades',
        description:
          'The synthetic gains a number of robot upgrades equal to its CR. Reducing upgrades to zero may reduce the CR adjustment to +0.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Legendary Games', publication: 'Arcforge Universe Cyclopedia' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 469. Tapestry-Warped Creature (Challenge +varies)
  {
    id: 'tapestry-warped-creature',
    name: 'Tapestry-Warped Creature',
    description:
      'An acquired template transforming corporeal creatures into extraplanar outsiders warped by otherworldly influence. These creatures gain eldritch abilities and resistances as a result of exposure to alien tapestry energies, becoming beings that can briefly shift to a grotesque alternate form.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 0,
        label: '1–4 HD (no CR change)',
        features: [
          { scalingType: 'flat', name: 'Acid Resistance 5', description: 'Resistance 5 to acid damage.' },
          { scalingType: 'flat', name: 'Electricity Resistance 5', description: 'Resistance 5 to electricity damage.' },
        ],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 1,
        label: '5–10 HD (CR +1)',
        features: [
          { scalingType: 'flat', name: 'Acid Resistance 10', description: 'Resistance 10 to acid damage.' },
          { scalingType: 'flat', name: 'Electricity Resistance 10', description: 'Resistance 10 to electricity damage.' },
          { scalingType: 'flat', name: 'Damage Reduction 5/magic', description: 'DR 5/magic.' },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 2,
        label: '11+ HD (CR +2)',
        features: [
          { scalingType: 'flat', name: 'Acid Resistance 15', description: 'Resistance 15 to acid damage.' },
          { scalingType: 'flat', name: 'Electricity Resistance 15', description: 'Resistance 15 to electricity damage.' },
          { scalingType: 'flat', name: 'Damage Reduction 10/magic', description: 'DR 10/magic.' },
        ],
      },
    ],
    typeChange: 'outsider',
    subtypeGains: ['extraplanar'],
    abilityScoreChangeNote:
      'Intelligence minimum of 3 if originally 2 or lower. HD, BAB, and saves remain unchanged when type changes.',
    srFormula: 'new CR + 10',
    features: [
      {
        scalingType: 'flat',
        name: 'True Strike (Su)',
        description:
          'Once per day, the tapestry-warped creature gains a +20 insight bonus to a single attack roll, ignoring concealment miss chances.',
      },
      {
        scalingType: 'flat',
        name: 'No Breath (Ex)',
        description: 'The tapestry-warped creature does not breathe.',
      },
      {
        scalingType: 'flat',
        name: 'Alternate Form (Ex)',
        description:
          'The tapestry-warped creature can shift into a grotesque alien mass. Observers become shaken for 1 minute (Will save negates) and suffer a –1 penalty on attack rolls against the creature. The effect lasts 1 round per Hit Die.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'd20PFSRD Community Content' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 470. Taxidermic Creature (CR +varies)
  {
    id: 'taxidermic-creature',
    name: 'Taxidermic Creature',
    description:
      'An acquired template applied to any corporeal creature (except constructs or undead), transforming it into a stuffed and animated construct. Taxidermic creatures retain their physical form but lose all special attacks and most special qualities, gaining construct immunities and one mandatory defect that represents a flaw in their construction.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any corporeal creature except constructs or undead' },
    ],
    crTiers: [
      { tierIndex: 0, minHD: 1, maxHD: 1, crValue: 0.25, label: '1 HD', features: [] },
      { tierIndex: 1, minHD: 2, maxHD: 2, crValue: 0.5, label: '2 HD', features: [] },
      { tierIndex: 2, minHD: 3, maxHD: 4, crValue: 1, label: '3–4 HD', features: [] },
      { tierIndex: 3, minHD: 5, maxHD: 6, crValue: 2, label: '5–6 HD', features: [] },
      { tierIndex: 4, minHD: 7, maxHD: 8, crValue: 3, label: '7–8 HD', features: [] },
      { tierIndex: 5, minHD: 9, maxHD: 10, crValue: 4, label: '9–10 HD', features: [] },
      { tierIndex: 6, minHD: 11, maxHD: 12, crValue: 5, label: '11–12 HD', features: [] },
      { tierIndex: 7, minHD: 13, maxHD: 16, crValue: 6, label: '13–16 HD', features: [] },
      { tierIndex: 8, minHD: 17, maxHD: 20, crValue: 7, label: '17–20 HD', features: [] },
      { tierIndex: 9, minHD: 21, maxHD: 24, crValue: 8, label: '21–24 HD', features: [] },
      { tierIndex: 10, minHD: 25, maxHD: 28, crValue: 9, label: '25–28 HD', features: [] },
    ],
    typeChange: 'construct',
    typeChangeNote:
      'Retains non-alignment subtypes; loses alignment subtypes and "kind" subtypes; does not gain the augmented subtype. Alignment becomes neutral. Wisdom becomes 10, Charisma becomes 3.',
    abilityScoreChanges: [
      { ability: 'STR', change: -2 },
      { ability: 'DEX', change: -2 },
    ],
    abilityScoreChangeNote:
      'Constitution removed (no score). Intelligence removed (no score). Wisdom becomes 10. Charisma becomes 3. Natural armor improves based on size (from +0 Tiny to +11 Colossal). All racial HD become d10s. BAB equals 3/4 of Hit Dice. Loses all feats. Loses all special attacks; retains only extraordinary qualities that improve melee or ranged attacks.',
    immunities: ['all construct immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft. and Low-Light Vision',
        description: 'The taxidermic creature gains darkvision to 60 feet and low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Reduced Speed',
        description:
          'Base speed reduced by 10 feet (minimum 20 feet). Winged creatures gain clumsy maneuverability; magical flight is lost entirely.',
      },
      {
        scalingType: 'flat',
        name: 'Defect (Ex)',
        description:
          'Every taxidermic creature has exactly one major defect chosen from: Crude Stitching (vulnerability to slashing), Defective Eyes (10% miss chance on all attacks), Understuffed (halved construct bonus HP; Medium or smaller only), Wire Frame (vulnerable to electricity; counts as metal), or Wooden Struts (vulnerable to fire; counts as wood).',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 5' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 471. Tempest Creature (CR +Varies)
  {
    id: 'tempest-creature',
    name: 'Tempest Creature',
    description:
      'Living embodiments of storm power — supercells, typhoons, hailstorms, and tornados made flesh. Created by deities controlling sky, weather, or destruction, these beings are quick to rouse and dangerously easy to anger. Their bodies appear to have been replaced with a storm, their hair with wind, lightning, and rain.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 1,
        label: '4 HD or less (CR +1)',
        features: [],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 2,
        label: '5–10 HD (CR +2)',
        features: [],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 3,
        label: '11+ HD (CR +3)',
        features: [],
      },
    ],
    subtypeGains: ['incorporeal'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote:
      'Natural armor converts to a deflection bonus equal to Charisma modifier or +1, whichever is higher. Gains perfect fly speed equal to former fly speed or twice highest land speed.',
    immunities: ['cold', 'fire', 'electricity', 'sonic', 'inhaled poisons and gases', 'fog and cloud-based attacks and spells'],
    features: [
      {
        scalingType: 'flat',
        name: 'Breath Weapon (Su)',
        description:
          'Cone of storm energy extending 25 feet + 5 feet per 2 CR. Deals 1d6 electricity, sonic, and wind damage per CR, with additional effects (stun, deafen, or knock prone).',
      },
      {
        scalingType: 'flat',
        name: 'Cloud Sight (Ex)',
        description: 'The tempest creature can see through all obscuring conditions caused by weather, fog, and similar effects.',
      },
      {
        scalingType: 'flat',
        name: 'Gale Aura (Su)',
        description:
          '30-foot aura that prevents five-foot steps and creates difficult terrain for all creatures within the area.',
      },
      {
        scalingType: 'flat',
        name: 'Ride the Lightning (Su)',
        description: 'The tempest creature can teleport using electricity effects as a conduit.',
      },
      {
        scalingType: 'flat',
        name: 'Storm Strike (Su)',
        description:
          'Incorporeal touch attacks trigger electricity and sonic explosions at the point of impact.',
      },
      {
        scalingType: 'hd_formula',
        name: 'Spell-Like Abilities (Sp)',
        description:
          'Gains cumulative spell-like abilities based on Hit Dice (requires Int or Wis 8+).',
        formula: 'Cumulative per HD tier',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerabilities',
        description: 'The tempest creature is nauseated by effects with the earth descriptor and by silence effects.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Rite Publishing', publication: 'Pathways Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 472. Tenebrous Creature (CR Varies)
  {
    id: 'tenebrous-creature',
    name: 'Tenebrous Creature',
    description:
      'Creatures native to the Plane of Shadow, possessing dark gray to black bodies covered in coarse black bristles, sharp mandibles, and large compound eyes. Their acid bite and paralyzing bristles make them dangerous in close combat.',
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any living corporeal creature; excludes outsiders' },
    ],
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 3,
        crValue: 1,
        label: '3 HD or less (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Acid Bite (Ex)',
            description: 'Melee bite attack deals an additional 1d6 acid damage (Medium or smaller creatures).',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 4,
        maxHD: 9,
        crValue: 2,
        label: '4–9 HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Acid Bite (Ex)',
            description: 'Melee bite attack deals an additional 2d6 acid damage (Large or larger creatures).',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 10,
        crValue: 3,
        label: '10+ HD (CR +3)',
        features: [],
      },
    ],
    typeChange: 'outsider',
    subtypeGains: ['extraplanar'],
    typeChangeNote: 'Gains extraplanar subtype only when encountered outside its native plane.',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 6,
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The tenebrous creature gains darkvision with a 60-foot range if it does not already have it.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Bite',
        description:
          'If the base creature has a bite attack, its damage increases as per the Improved Natural Attack feat.',
      },
      {
        scalingType: 'flat',
        name: 'Bristles (Ex)',
        description:
          'Opponents attacking the tenebrous creature with natural weapons, unarmed attacks, or handheld weapons must succeed on a Reflex save or contact the bristles, causing paralysis for 1d4 rounds followed by Constitution damage (1d6 to 3d6 depending on the creature\'s HD).',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Frog God Games', publication: 'Tome of Horrors Complete' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 473. Teratocephalos Creature (CR +1)
  {
    id: 'teratocephalos-creature',
    name: 'Teratocephalos Creature',
    description:
      'A creature with a mismatched head from a different species, resulting from strange breeding, powerful magic, or exposure to magical anomalies. The transplanted head may grant enhanced senses, new attacks, or unusual abilities depending on the head species. This template can be either inherited or acquired.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote:
      'Charisma increases by +2 if the head creature has higher Charisma. Intelligence adopts the head creature\'s Intelligence –2 (minimum 2) if it is higher. Wisdom adopts the head creature\'s Wisdom –2 (minimum 2) if it is higher. Animals become Magical Beasts and Humanoids become Monstrous Humanoids (both gain augmented subtype).',
    naturalArmorChange: 1,
    features: [
      {
        scalingType: 'flat',
        name: 'Type Change (conditional)',
        description:
          'Animals change to magical beast (augmented subtype added); humanoids change to monstrous humanoid (augmented subtype added); monstrous humanoids retain their type. Head resizes to fit the body; no automatic size category change.',
      },
      {
        scalingType: 'flat',
        name: 'Head-Based Senses',
        description: 'Gains the enhanced senses of the head creature (e.g., darkvision, scent, tremorsense).',
      },
      {
        scalingType: 'flat',
        name: 'Head-Based Attacks',
        description:
          'Gains bite, gore, or other head-based attacks from the head creature. May also gain conditional abilities such as quills, a tongue attack, water breathing, speech, or trunk usage depending on the head species.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Green Ronin Publishing', publication: 'Advanced Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 474. Terror Creature (CR +0)
  {
    id: 'terror-creature',
    name: 'Terror Creature',
    description:
      'Creatures warped by prolonged contact with the Negative Energy Plane, appearing terrifying and possessing special resistances and attacks. Terror creatures project an aura of supernatural dread and absorb negative energy, healing rather than being harmed by it.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    immunities: ['fear'],
    features: [
      {
        scalingType: 'flat',
        name: 'Alignment Change',
        description: 'The terror creature\'s alignment shifts to neutral evil.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The terror creature gains darkvision with a 60-foot range.',
      },
      {
        scalingType: 'flat',
        name: 'Fear Aura (Su)',
        description:
          'All creatures within 20 feet of the terror creature are affected as by the fear spell (Will save DC 10 + 1/2 terror creature\'s racial HD + Charisma modifier negates).',
      },
      {
        scalingType: 'flat',
        name: 'Negative Energy Absorption (Su)',
        description:
          'The terror creature heals 1 hit point for every 3 points of negative energy damage that would otherwise affect it. It gets no saving throw against negative energy effects.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Module: City of Golden Death' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 475. Therianthrope (CR varies)
  {
    id: 'therianthrope',
    name: 'Therianthrope',
    description:
      'Shapechangers derived from animals that can assume human or hybrid forms, retaining feral characteristics even in human guise. Unlike lycanthropes, therianthropes do not spread their condition. They are magical beasts with the shapechanger subtype, capable of taking three forms: animal, human, and hybrid.',
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 5,
        crValue: 1,
        label: '5 HD or fewer (CR +1, minimum CR 2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Damage Reduction 5/cold iron',
            description: 'DR 5/cold iron in all forms.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 6,
        maxHD: 10,
        crValue: 2,
        label: '6–10 HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Damage Reduction 10/cold iron',
            description: 'DR 10/cold iron in all forms.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 3,
        label: '11+ HD (CR +3)',
        features: [
          {
            scalingType: 'flat',
            name: 'Damage Reduction 10/cold iron',
            description: 'DR 10/cold iron in all forms.',
          },
        ],
      },
    ],
    typeChange: 'magical beast',
    subtypeGains: ['shapechanger'],
    abilityScoreChangeNote:
      'Strength minimum 10. Intelligence becomes 10 + 1d4. Wisdom minimum 10. Charisma becomes 10 + 1d6. Ability scores remain constant across all forms. Natural armor improves by +2 in all forms. Darkvision 60 ft. Size stays as base animal in animal form; Medium in human form; Medium or base animal size (whichever larger) in hybrid form.',
    naturalArmorChange: 2,
    immunities: ['own special abilities', 'special abilities of same-type therianthropes'],
    features: [
      {
        scalingType: 'flat',
        name: 'Alternate Form (Su)',
        description:
          'The therianthrope can assume animal, human, and hybrid forms as a polymorph-like effect. Ability scores remain constant across forms.',
      },
      {
        scalingType: 'flat',
        name: 'Special Attacks by HD Tier',
        description:
          'Gains one special attack per HD tier from groups A, B, or C (determined by the base animal\'s natural attacks and abilities).',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Frog God Games', publication: 'Tome of Horrors Complete' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },
];
