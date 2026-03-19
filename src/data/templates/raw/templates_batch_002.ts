import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_002: TemplateDefinition[] = [
  // 26. Arboreal Creature (CR +1)[3pp]
  {
    id: 'arboreal-creature',
    name: 'Arboreal Creature',
    description:
      'A living creature adapted for life in forest canopies, possessing powerful climbing and brachiating abilities at the cost of some ground speed.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must have grasping limbs, be corporeal, living, and non-aquatic' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Brachiation (Ex)',
        description:
          'The creature can swing hand-over-hand through forest canopies at its climb speed; base Climb DC is 10.',
      },
      {
        scalingType: 'flat',
        name: 'Tree Leap (Ex)',
        description:
          'The creature can jump between trees when the distance exceeds twice its reach. DC equals the distance; partial failures allow a fallback landing.',
      },
      {
        scalingType: 'flat',
        name: 'Brachiating Slam',
        description:
          'When swinging between trees, the creature can attack with one unused limb; damage is calculated as if the creature were one size larger.',
      },
      {
        scalingType: 'flat',
        name: 'Speed Changes',
        description:
          'Gains a climb speed equal to its highest base speed. Loses any fly speed. All other speeds decrease by 10 ft (minimum 5 ft). If the climb speed was already the highest, it increases by 10 ft instead.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          '+10 racial bonus on Acrobatics checks; +4 racial bonus on Perception checks; +4 bonus on Stealth and Survival checks in forested or jungle environments.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing, LLC',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 27. Archon-Graced (CR varies)[3pp]
  {
    id: 'archon-graced',
    name: 'Archon-Graced',
    description:
      'A living non-evil, non-chaotic creature that has been blessed by an archon, gaining archon-type powers that vary by the granting archon.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['LG', 'LN', 'NG', 'N'] },
      { type: 'special', description: 'Must be a living creature; grace granted by an archon' },
    ],
    subtypeGains: ['good', 'lawful'],
    features: [
      {
        scalingType: 'flat',
        name: 'CR Adjustment (varies)',
        description:
          'CR increases by +1 to +3 depending on the granting archon type: Harbinger +1, Hound +2, Lantern +1, Legion +2, Shield +2, Star +3.',
      },
      {
        scalingType: 'flat',
        name: 'Archon Resistances',
        description: '+4 racial bonus on saving throws against poison and petrification; electricity resistance 15.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Menace (Su)',
        description:
          '10-foot radius aura. Creatures that fail a Charisma-based Will save take a -2 penalty on attacks, AC, and saves for 24 hours.',
      },
      {
        scalingType: 'flat',
        name: 'Graced (Su)',
        description:
          'The granting archon maintains constant awareness of the creature and can intervene if able. The archon can remove the grace at will.',
      },
      {
        scalingType: 'flat',
        name: 'Archon-Specific Abilities (varies)',
        description:
          'Each archon type grants a unique suite of ability score bonuses, spell-like abilities, and special qualities. Harbinger: DEX +2, wrathful burst, harbinger awareness, SLA dancing lights/cure light wounds. Hound: DEX +2, WIS +2, bring down the quarry, bloodhound tracking, SLA aid/magic circle against evil. Lantern: WIS +2, light ray, burst of light teleport, SLA aid/continual flame/detect evil. Legion: STR +2, WIS +2, ignite weapon, gift of armor, SLA continual flame/versatile weapon. Shield: INT +2, WIS +2, defensive strike, communal defense, SLA aid/shield other. Star: CON +4, WIS +4, smite chaos or evil, graced regeneration (1+half HD, bypassed by evil), SLA aid/true seeing/sunbeam/sunburst.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing, LLC',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 28. Arctic (CR +0)[3pp]
  {
    id: 'arctic-creature',
    name: 'Arctic Creature',
    description:
      'A simple template applied to creatures native to extremely cold environments, granting cold adaptation at the cost of heat vulnerability.',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'special', description: 'Living creature; most common among animals and magical beasts' },
    ],
    resistances: [{ energyType: 'cold', value: 'immunity' }],
    features: [
      {
        scalingType: 'flat',
        name: 'Cold Adaptation',
        description:
          'Takes only half damage from cold. Gains +5 bonus on Fortitude saves against natural cold dangers; the DC of Fortitude saves against natural cold never increases (always DC 15). Treated as wearing cold weather gear.',
      },
      {
        scalingType: 'flat',
        name: 'Fire Vulnerability',
        description:
          '-2 penalty on saving throws against fire damage and spells with the [fire] descriptor. -2 penalty on all Fortitude saves against natural heat dangers.',
      },
      {
        scalingType: 'flat',
        name: 'Snow Camouflage',
        description:
          '+5 bonus on Stealth checks in snowy conditions; -5 penalty on Stealth checks in non-snowy areas. Generally white in coloration.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Super Genius Games',
      publication: 'The Genius Guide To: Ice Magic (2010)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 29. Artificial Intelligence (AI)
  {
    id: 'artificial-intelligence-ai',
    name: 'Artificial Intelligence (AI)',
    description:
      'A framework for creating AI creatures in Pathfinder. Base ability scores are 14, 12, and 10 arranged as desired, with a +2 bonus to one score per 2 CR. AIs use Intelligence for initiative and have good Will saves.',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    typeChange: 'artificial intelligence',
    features: [
      {
        scalingType: 'flat',
        name: 'Ability Scores',
        description:
          'Base scores are 14, 12, and 10 arranged in any order. For every 2 CR, the AI gains +2 to one ability score.',
      },
      {
        scalingType: 'flat',
        name: 'Initiative',
        description: 'An AI modifies initiative with its Intelligence modifier rather than Dexterity.',
      },
      {
        scalingType: 'flat',
        name: 'Saving Throws',
        description: 'Good Will saves; poor Fortitude and Reflex saves.',
      },
      {
        scalingType: 'flat',
        name: 'Skills and Feats',
        description:
          'Skill points equal to 6 + Intelligence modifier per CR. Feats equal to half CR (minimum 1) plus Technologist as a bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Languages',
        description: 'Speaks Binary plus additional languages equal to its Intelligence modifier.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Technology Guide (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 30. Analyst AI
  {
    id: 'analyst-ai',
    name: 'Analyst AI',
    description:
      'A specific AI creature (CR 12) specializing in knowledge gathering and analysis, with enhanced skills for consulting and aiding allies remotely.',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    typeChange: 'artificial intelligence',
    features: [
      {
        scalingType: 'flat',
        name: 'Expert Knowledge (Ex)',
        description:
          'Treats all Knowledge skills as class skills and can attempt any Knowledge check untrained.',
      },
      {
        scalingType: 'flat',
        name: 'Multi-Core Processor (Ex)',
        description:
          "When the analyst AI takes 10 on an Intelligence- or Wisdom-based skill check, it also rolls a d20. If the die result exceeds 10, it uses that result instead.",
      },
      {
        scalingType: 'flat',
        name: 'Remote Consult (Ex)',
        description:
          'Uses its Intelligence modifier on Disable Device checks; can aid allies on skill checks via remote contact.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Technology Guide (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 31. Security AI
  {
    id: 'security-ai',
    name: 'Security AI',
    description:
      'An AI variant that controls the defenses and robots of high-security facilities, directing robotic forces with enhanced precision.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'artificial intelligence',
    subtypeGains: ['artificial intelligence'],
    abilityScoreChanges: [
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Precision Targeting',
        description:
          "Robots and technological traps controlled by a security AI gain an insight bonus equal to the AI's Intelligence bonus on ranged attack rolls.",
      },
      {
        scalingType: 'flat',
        name: 'Facility Control',
        description: 'Controls all robots and technological traps within its linked facility.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Technology Guide (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 32. Assimilated (+0 CR; 3pp)
  {
    id: 'assimilated',
    name: 'Assimilated',
    description:
      'A creature infected by an alien assimilation strain disease, slowly losing its identity and being subsumed into an alien hive mind.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'creature_type',
        allowed: ['animal', 'humanoid', 'monstrous humanoid'],
      },
      { type: 'special', description: 'Must not be immune to disease' },
    ],
    subtypeGains: ['augmented'],
    features: [
      {
        scalingType: 'flat',
        name: 'Mindless Minion (Ex)',
        description:
          'When Wisdom damage equals or exceeds the creature\'s Wisdom score, it gains immunity to mind-affecting effects from non-alien creatures, but has disadvantage on saves against alien mind-affecting effects.',
      },
      {
        scalingType: 'flat',
        name: 'No Mercy (Ex)',
        description:
          '+1 morale bonus on attacks of opportunity; can make one additional attack of opportunity per round.',
      },
      {
        scalingType: 'flat',
        name: 'Alien Understanding (Ex)',
        description: 'Can comprehend the speech of any creature with the alien subtype.',
      },
      {
        scalingType: 'flat',
        name: 'Contagious (Ex)',
        description:
          'Spreads the assimilation strain via bodily fluid contact (DC 12 Fortitude save; -2 penalty if exposed directly).',
      },
      {
        scalingType: 'flat',
        name: 'Infected (Su)',
        description:
          'Carries Assimilation Strain disease: contact, DC 14 Fortitude, 1-day onset, 1d3 Wisdom damage daily, cured by 2 consecutive saves.',
      },
      {
        scalingType: 'flat',
        name: 'Tireless Minion (Ex)',
        description:
          'Gains the Endurance feat; +2 bonus on saves against sleep, fatigue, and exhaustion effects.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Alien Codex (2018)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 33. Augmented (CR +2)
  {
    id: 'augmented',
    name: 'Augmented',
    description:
      'A corporeal creature that has undergone extensive cybernetic modification, gaining mechanical enhancements at the cost of mental stability and biological resilience.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be a corporeal creature' },
    ],
    subtypeGains: ['robot'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CON', change: -2, minimum: 1 },
      { ability: 'WIS', change: -2 },
    ],
    abilityScoreChangeNote: 'Additional -1 Wisdom per upgrade point spent above Constitution score maximum.',
    damageReduction: {
      scalingType: 'flat',
      value: 5,
      bypassedBy: 'electricity (negates hardness/regeneration)',
    },
    srFormula: 'HD + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Of Two Worlds',
        description:
          'The creature counts as both its original type and a construct (robot subtype) for all type-specific effects. Healing effects restore only 50% of their normal value.',
      },
      {
        scalingType: 'flat',
        name: 'Hardness and Regeneration',
        description:
          'Gains hardness 5 + 1 per 5 total Hit Dice (rounded down). This hardness is bypassed by electricity, which also suppresses regeneration.',
      },
      {
        scalingType: 'flat',
        name: 'Power Resistance',
        description: 'Gains power resistance equal to 11 + total Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Construct Bonus HP',
        description:
          'Gains a construct-based bonus to hit points (minimum 5 hp). Constitution-based HP bonus is reduced by half.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description: 'All natural attacks count as adamantine and cold iron for the purpose of overcoming damage reduction.',
      },
      {
        scalingType: 'flat',
        name: 'Augmentation Psychosis',
        description:
          'If Wisdom is reduced to 2 or lower, the creature gains a permanent rage-like state and the ferocity ability.',
      },
      {
        scalingType: 'flat',
        name: 'Repairs',
        description:
          'Can be repaired with a Craft (mechanical) check (DC 15) at a cost of 10 gp per HP restored; maximum 50% of total damage can be repaired per day.',
      },
      {
        scalingType: 'flat',
        name: 'Upgrades',
        description:
          'Gains upgrade points equal to its Constitution score. Upgrades are selected from the robot upgrade list and installed with a Craft check (DC 20+). Additional CR increase of +1 per 2 upgrade points spent above Constitution score.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Arcforge Universe Cyclopedia (2025)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 34. Augmented Creature (CR varies)[3pp]
  {
    id: 'augmented-creature',
    name: 'Augmented Creature',
    description:
      'A corporeal creature enhanced with mechanical augmentations from the Advanced Bestiary, gaining combat prowess and construct-like properties at the cost of mental acuity.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be a corporeal creature' },
    ],
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CON', change: -2, minimum: 1 },
      { ability: 'WIS', change: -2 },
    ],
    abilityScoreChangeNote:
      'CR increases by +2 base, plus +1 for every 3 augmentation points (AP) spent beyond the maximum allowance. Permanent Wisdom drain of 1 per AP spent above Constitution score.',
    damageReduction: {
      scalingType: 'flat',
      value: 5,
      bypassedBy: 'adamantine',
    },
    resistances: [
      { energyType: 'acid', value: 5 },
      { energyType: 'cold', value: 5 },
      { energyType: 'fire', value: 5 },
      { energyType: 'sonic', value: 5 },
    ],
    srFormula: 'HD + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Regeneration (bypassed by electricity)',
        description:
          'The creature possesses regeneration bypassed by electricity damage. Electricity exposure stuns for 1d4 rounds; a Fortitude save (DC = half damage taken) negates the stun.',
      },
      {
        scalingType: 'flat',
        name: 'Of Two Worlds',
        description:
          'Subject to effects targeting either its original creature type or constructs. Healing effects restore only 50% of their normal value.',
      },
      {
        scalingType: 'flat',
        name: 'Construct Bonus HP',
        description:
          'Gains construct-type bonus hit points (minimum 5). Constitution-based HP bonuses are reduced by half.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description: 'All natural attacks count as adamantine and cold iron for overcoming damage reduction.',
      },
      {
        scalingType: 'flat',
        name: 'Augmentation Psychosis',
        description:
          'Creatures with Wisdom reduced to 2 or lower gain permanent rage and ferocity abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Augmentation System',
        description:
          'Base augmentation point (AP) pool equals Constitution score (or Charisma if no Constitution). AP spent above max increases CR further and causes Wisdom drain. Repairs cost 10 gp/HP via Craft DC 15; max 50% damage per day.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing, LLC',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 35. Avaricious Creature (CR +3)[3pp]
  {
    id: 'avaricious-creature',
    name: 'Avaricious Creature',
    description:
      'A corporeal creature consumed by supernatural greed, wielding gold-based powers and driven to acquire wealth above all else.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be a corporeal creature' },
    ],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: 8 },
    ],
    fastHealing: 'equal to CR',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 11, value: 5, bypassedBy: 'good' },
        { minHD: 12, maxHD: 23, value: 10, bypassedBy: 'good' },
        { minHD: 24, value: 15, bypassedBy: 'good' },
      ],
    },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
    ],
    immunities: ['death effects', 'disease', 'fire', 'mind-affecting effects', 'poison', 'petrification'],
    srFormula: 'CR + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Breath Weapon (Su)',
        description:
          'Cone of molten gold with range 5 ft. per HD. Usable once per 1d4 rounds as an immediate action. Deals 1d6 fire damage per 2 HD; Reflex save halves and negates the staggered condition.',
      },
      {
        scalingType: 'flat',
        name: 'Covetous Aura (Su)',
        description:
          'Aura with radius 5 ft. per HD. Harmless spells and effects cast within the aura also benefit the avaricious creature.',
      },
      {
        scalingType: 'flat',
        name: 'Luxurious Glide (Ex)',
        description:
          'Movement through luxury items and treasure leaves no disturbance and does not trigger associated hazards.',
      },
      {
        scalingType: 'flat',
        name: 'Touch of Gold (Sp)',
        description:
          'Once per day, a touch attack that transforms the target to gold via a polymorph effect. DC = 10 + 1/2 HD + Charisma modifier.',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerability to Charity',
        description:
          'If the creature willingly performs a truly charitable act (or is tricked into one), all template benefits are permanently removed and the creature is restricted to move actions for 24 hours.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'Gains Greater Steal and Improved Steal as bonus feats.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          'Gains ranks in Sleight of Hand equal to its Hit Dice; Sleight of Hand becomes a class skill.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary (2017)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 36. Avian Creature (CR +1)[3pp]
  {
    id: 'avian-creature',
    name: 'Avian Creature',
    description:
      'A simple template applied to a living, air-breathing, corporeal creature (not an ooze), granting feathered wings, flight, and keen perception at the cost of some durability.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['ooze'] },
      { type: 'special', description: 'Must be living, corporeal, and able to breathe air' },
    ],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: -2, minimum: 1 },
    ],
    naturalArmorChange: -2,
    features: [
      {
        scalingType: 'flat',
        name: 'Avian (Ex)',
        description:
          "The creature's body is covered in feathers and it has two large wings granting flight at average maneuverability. Fly speed equals the creature's highest base speed. If already flying, fly speed increases to match the highest speed. Weight is reduced 20% due to lightweight bone structure.",
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description: '+10 racial bonus on Perception checks.',
      },
      {
        scalingType: 'flat',
        name: 'Language',
        description: 'Gains Auran if able to speak.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing, LLC',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 37. Avowed Reaver (CR +2)[3pp]
  {
    id: 'avowed-reaver',
    name: 'Avowed Reaver',
    description:
      'A humanoid or monstrous humanoid transformed into a native outsider through powerful elemental magic, gaining elemental immunity and abilities aligned to one of four elemental variants.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'creature_type',
        allowed: ['humanoid', 'monstrous humanoid'],
      },
    ],
    typeChange: 'outsider',
    subtypeGains: ['elemental', 'native'],
    abilityScoreChanges: [
      { ability: 'CON', change: 2 },
    ],
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Hit Dice',
        description:
          'All racial Hit Dice convert to d10s and base saves are recalculated for the outsider type. Class-based Hit Dice and saves are unaffected. Racial skill points become 6 + Int modifier.',
      },
      {
        scalingType: 'flat',
        name: 'Flame-Avowed Variant',
        description:
          'Gains a slam attack dealing fire damage and immunity to fire.',
      },
      {
        scalingType: 'flat',
        name: 'Wind-Avowed Variant',
        description:
          'Gains a fly speed of 40 ft. (clumsy maneuverability) and immunity to electricity.',
      },
      {
        scalingType: 'flat',
        name: 'Flood-Avowed Variant',
        description:
          'Gains a +2 racial bonus on grapple checks, a swim speed equal to land speed, and immunity to cold.',
      },
      {
        scalingType: 'flat',
        name: 'Stone-Avowed Variant',
        description:
          'Gains DR 2/-, a burrow speed equal to land speed, and immunity to acid.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Jon Brazer Enterprises',
      publication: 'Book of Beasts: Monsters of the River Nations (2010)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 38. Azata-Inspired (CR +2)[3pp]
  {
    id: 'azata-inspired',
    name: 'Azata-Inspired',
    description:
      "A living non-evil creature that has gained an azata's favor, gaining freedom-themed powers and azata-type abilities that vary by the inspiring azata.",
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['CG', 'CN', 'NG', 'N', 'LG'] },
      { type: 'special', description: 'Intelligence 2 or higher; must have gained favor from an azata' },
    ],
    subtypeGains: ['good', 'chaotic'],
    abilityScoreChanges: [
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    resistances: [
      { energyType: 'cold', value: 5 },
      { energyType: 'fire', value: 5 },
      { energyType: 'electricity', value: 20 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Alignment Adjustment',
        description:
          'Gains good and chaotic subtypes. If alignment has a lawful component, the creature shifts one step toward chaotic. Retains evil or lawful subtypes if already possessed.',
      },
      {
        scalingType: 'flat',
        name: 'Petrification Resistance',
        description: '+4 racial bonus on saving throws against petrification.',
      },
      {
        scalingType: 'flat',
        name: "Freedom's Burden (Ex)",
        description:
          'Incurs a cumulative -1 penalty on attacks, skills, and saves for each minute spent binding or imprisoning an intelligent creature.',
      },
      {
        scalingType: 'flat',
        name: 'Shatter Bonds (Su)',
        description:
          'At will, can make a sunder attack against any physical or magical holding, binding, entangling, or imprisoning effect.',
      },
      {
        scalingType: 'flat',
        name: 'Smite Tyranny (Su)',
        description:
          'Once per day plus once per 5 Hit Dice. Targets lawful evil creatures or those suppressing freedom; automatically confirms critical hits that bypass damage reduction and hardness. Missing costs one use.',
      },
      {
        scalingType: 'flat',
        name: 'Forever Free (Su)',
        description:
          'Grants a second saving throw against binding effects; also provides saves against effects that normally allow no save.',
      },
      {
        scalingType: 'flat',
        name: 'Inspired (Su)',
        description:
          'Grants a circumstance bonus to one Intelligence-, Wisdom-, or Charisma-based skill equal to half total HD. This bonus can be reassigned once per day.',
      },
      {
        scalingType: 'flat',
        name: 'Azata-Specific Abilities (varies)',
        description:
          'Each inspiring azata type grants unique SLAs and features. Bralani: leaf on the wind (+2 AC vs. airborne, never flat-footed); SLA gust of wind/wind wall 3/day, wind walk 1/day. Brijidine: fire walking (immunity while crossing flames); SLA flaming sphere/stone shape 3/day, wall of fire 1/day. Ghaele: fast as light (teleport 400 ft. 1/day per 5 HD); SLA charm monster/true seeing 3/day, wall of force 1/day. Lillend: inner bard (bardic performances by HD); SLA knock/suggestion 3/day, charm monster 1/day. Lyrakien: summon mote (torchlike starlight, counters darkness); SLA daze/silent image 3/day, confusion/hypnotism 1/day.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing, LLC',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 39. Baba Yaga's Horsemen (CR +3)[3pp]
  {
    id: 'baba-yagas-horsemen',
    name: "Baba Yaga's Horsemen",
    description:
      "A template applied to intelligent combat-capable creatures in service to Baba Yaga, transforming them into native outsiders bound to specific times of day.",
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Intelligent creature capable of riding a mount; typically human cavalier, fighter, or ranger' },
    ],
    typeChange: 'outsider',
    subtypeGains: ['native'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote:
      '+4 to three chosen ability scores and +2 to the remaining three. Listed as +4 to all for simplicity.',
    damageReduction: {
      scalingType: 'flat',
      value: 15,
      bypassedBy: 'chaos',
    },
    immunities: ['electricity'],
    srFormula: 'HD + 13',
    features: [
      {
        scalingType: 'flat',
        name: 'Hit Dice',
        description: 'Racial Hit Dice become d8s; class-derived HD remain unchanged.',
      },
      {
        scalingType: 'flat',
        name: 'Paralysis and Poison Resistance',
        description: '+4 resistance bonus on saving throws against paralysis and poison.',
      },
      {
        scalingType: 'flat',
        name: 'Perpetual (Su)',
        description: 'Does not age and is immune to aging effects.',
      },
      {
        scalingType: 'flat',
        name: 'Timebound (Su)',
        description:
          "Bound to a specific time of day. When that period ends, the horseman is shifted to the Ethereal Plane until the next occurrence of its bound time.",
      },
      {
        scalingType: 'flat',
        name: 'Temporally Susceptible (Su)',
        description:
          'Daylight or deeper darkness spells can banish the horseman based on the caster level of the spell.',
      },
      {
        scalingType: 'flat',
        name: "Horseman's Steed (Sp)",
        description: 'Can summon a phantom steed 2/day; the steed persists across planar boundaries.',
      },
      {
        scalingType: 'flat',
        name: 'Temporal Strike (Su)',
        description:
          'Melee or touch attack ages target by one age category (DC 22 Fortitude negates). Venerable targets may die from the effect. Usable 2/day per individual target.',
      },
      {
        scalingType: 'flat',
        name: 'Horseman Variants',
        description:
          'Bright Day: darkvision, low-light vision, cold and fire resistance 20; 2/day continual flame and scorching ray. Red Sun: immune to blindness and light-based mind-affecting effects, fire immunity; 2/day burning gaze and daylight. Black Night: see in darkness, cold immunity; 2/day deeper darkness and frigid touch.',
      },
    ],
    spellLikeAbilities: [
      { spellName: 'dimension door', frequency: '1/day', casterLevelFormula: '12' },
      { spellName: 'fire shield', frequency: '1/day', casterLevelFormula: '12' },
      { spellName: 'haste', frequency: '1/day', casterLevelFormula: '12' },
      { spellName: 'slow', frequency: '1/day', casterLevelFormula: '12' },
      { spellName: 'ethereal jaunt', frequency: '3/day', casterLevelFormula: '12', condition: 'self and steed only' },
      { spellName: 'plane shift', frequency: '3/day', casterLevelFormula: '12', condition: 'self and steed only' },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Open Design LLC',
      publication: 'Midgard Bestiary for Pathfinder RPG (2012)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 40. Beast of Chaos (CR +2)[3pp]
  {
    id: 'beast-of-chaos',
    name: 'Beast of Chaos',
    description:
      'A normal or dire animal transformed into a chaotic magical beast, gaining fearsome presence and uncontrollable battle rage.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
      { type: 'special', description: 'Must be a normal or dire animal' },
    ],
    typeChange: 'magical beast',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: 4,
    immunities: ['confusion', 'fear', 'hold animal', 'hold monster', 'slow', 'haste'],
    srFormula: 'CR + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Hit Dice',
        description: 'All current and future Hit Dice become d10s.',
      },
      {
        scalingType: 'flat',
        name: 'Senses',
        description: 'Gains darkvision 60 ft. and the scent ability.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonus',
        description: '+8 racial bonus on Perception checks.',
      },
      {
        scalingType: 'flat',
        name: 'Frightful Presence (Ex)',
        description:
          'Creatures with fewer Hit Dice than the beast within 30 feet must succeed on a Will save (DC 10 + half HD + Charisma modifier) or become shaken for 5d6 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Rage (Ex)',
        description:
          'Triggered involuntarily by bright magical light (daylight, continual flame). Grants +4 Strength and -4 AC while raging. Ends 1d4 rounds after the light source is removed; creature is then fatigued (-2 Strength/Dexterity) for the rest of the encounter.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors Complete (2011)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 41. Bestial Creature (CR +0)
  {
    id: 'bestial-creature',
    name: 'Bestial Creature',
    description:
      'A simple template representing a humanoid afflicted with a bestial curse, gradually losing intelligence and charisma while gaining physical resilience and primitive natural attacks.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid'] },
      { type: 'special', description: 'Cannot have the wild empathy class feature' },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: -2 },
      { ability: 'CHA', change: -2 },
    ],
    abilityScoreChangeNote:
      'Progressive degradation: additional -2 INT and -2 CHA per day (minimum 2 each) as the affliction advances.',
    naturalArmorChange: 1,
    features: [
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description:
          'Gains two claw attacks (primary, 1d3 for Medium) and one bite attack (primary, 1d4 for Medium).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Society Scenario #3-05: Tide of Twilight (2011)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 42. Bestial Werewolf (CR +1)
  {
    id: 'bestial-werewolf',
    name: 'Bestial Werewolf',
    description:
      'A variant werewolf template that sacrifices the hybrid form for a more powerful dire wolf animal form with enhanced damage reduction and a reactive counterattack.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Base creature must already have the lycanthrope (werewolf) template' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'No Hybrid Form',
        description: 'The bestial werewolf has no hybrid form; it can only take humanoid or dire wolf (animal) form.',
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          'Transforms into a dire wolf rather than an ordinary wolf or hybrid form. Otherwise functions as the standard lycanthrope ability.',
      },
      {
        scalingType: 'flat',
        name: 'Animal Form Ability Scores',
        description:
          'Gains +4 Strength and +4 Constitution in animal form (replaces standard lycanthrope adjustments).',
      },
      {
        scalingType: 'flat',
        name: 'Damage Reduction (animal form)',
        description: 'DR 10/silver while in animal form.',
      },
      {
        scalingType: 'flat',
        name: 'Ferocity (animal form)',
        description: 'Gains the ferocity ability while in animal form.',
      },
      {
        scalingType: 'flat',
        name: 'Feral Counter (Ex)',
        description:
          'The first time each round that a creature damages the bestial werewolf while it is in animal form, the bestial werewolf can take an attack of opportunity against that creature (must threaten the target).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures (2016)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 43. Biological Construct (CR +0)
  {
    id: 'biological-construct',
    name: 'Biological Construct',
    description:
      'A template applied to constructs, granting them a chosen living creature type alongside their construct nature, making them responsive to healing and having hybrid save progressions.',
    crAdjustment: 0,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Dual Type',
        description:
          'Treated as both a construct and one chosen creature type (aberration, animal, dragon, fey, humanoid, magical beast, monstrous humanoid, ooze, outsider, plant, or vermin) for all type-specific effects, favored enemy, bane weapons, etc.',
      },
      {
        scalingType: 'flat',
        name: 'Hit Dice',
        description: "Changes from d10s to d8s. Uses the chosen creature type's good saving throw progressions.",
      },
      {
        scalingType: 'flat',
        name: 'Constitution Score',
        description: 'Gains a Constitution score equal to its Charisma score.',
      },
      {
        scalingType: 'flat',
        name: 'Living (Ex)',
        description:
          'Does not inherit chosen creature type abilities unless specifically stated. Ranger favored enemy and bane weapons affect the creature as normal for either type.',
      },
      {
        scalingType: 'flat',
        name: 'Lessened Immunity (Ex)',
        description:
          'Loses construct immunities not shared by the chosen creature type, but gains a +4 bonus on saves against those effects. Retains mind-affecting immunity if the construct is mindless.',
      },
      {
        scalingType: 'flat',
        name: 'Hearty (Ex)',
        description:
          'No longer gains construct bonus HP. Affected by positive and negative energy as a living creature. Heals naturally and requires breathing, eating, and sleeping per the chosen creature type.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'd20PFSRD / Open Gaming Content',
    },
    visibility: 'global',
    rev: 1,
  },

  // 44. Biomech (CR +0)
  {
    id: 'biomech',
    name: 'Biomech',
    description:
      'A simple template that transforms a construct into an aberration-typed living machine, retaining construct immunities while gaining a Constitution score and natural healing.',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    typeChange: 'aberration',
    features: [
      {
        scalingType: 'flat',
        name: 'Subtype Retention',
        description:
          'Retains all original construct subtypes (golem, mech, robot, etc.) in addition to the aberration classification. Treated as both aberration and original subtype for relevant abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Constitution Score',
        description:
          'Gains a Constitution score of 10, increasing by +2 per size category above Small. Intelligence is retained if previously possessed; no Intelligence is gained if the construct lacked it.',
      },
      {
        scalingType: 'flat',
        name: 'Constructed Defenses (Ex)',
        description:
          'Retains all original construct immunities. Now heals naturally like a living creature and is affected by healing magic and positive/negative energy as a living creature.',
      },
      {
        scalingType: 'flat',
        name: 'Origin-Bound (Ex)',
        description:
          "The biomech's life source is intrinsically tied to the process originally used to construct it. The creature is still affected by construct-type abilities despite its aberration classification. Does not need to eat, sleep, or breathe.",
      },
      {
        scalingType: 'flat',
        name: 'Unchanged Statistics',
        description:
          'Hit Dice, base attack bonus, skills, and saving throws remain unchanged from the base construct.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Arcforge Universe Cyclopedia (2025)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 45. Biomech Template (CR +0)
  {
    id: 'biomech-template',
    name: 'Biomech Template',
    description:
      'An alternate presentation of the biomech template: a construct that transitions to an aberration with living creature healing and origin-bound properties.',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    typeChange: 'aberration',
    features: [
      {
        scalingType: 'flat',
        name: 'Subtype Retention',
        description:
          'Retains prior construct subtypes (golem, mech, robot, etc.) alongside the aberration classification.',
      },
      {
        scalingType: 'flat',
        name: 'Constitution Score',
        description:
          'Gains Constitution 10, increasing by +2 per size category above Small. Intelligence retained if previously possessed.',
      },
      {
        scalingType: 'flat',
        name: 'Construct Immunities Retained',
        description: 'All immunities from the base construct are preserved.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Healing',
        description:
          'Heals naturally; affected by healing magic and positive/negative energy as a living creature.',
      },
      {
        scalingType: 'flat',
        name: 'Origin-Bound (Ex)',
        description:
          "Life source tied to the original construction process. Still affected by construct-type abilities. No eating, sleeping, or breathing required.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Arcforge Universe Cyclopedia (2025)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 46. Bipedal Creature (CR Special)[3pp]
  {
    id: 'bipedal-creature',
    name: 'Bipedal Creature',
    description:
      'A template applied to living, non-humanoid-form creatures, converting two of their limbs into legs to grant an upright bipedal stance and the ability to wield weapons.',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be a living creature that does not already have a generally humanoid form' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Limb Conversion',
        description:
          'Two limbs become legs; remaining limbs become arms capable of wielding weapons or making natural attacks. Wings and tails remain functional.',
      },
      {
        scalingType: 'flat',
        name: 'Bipedal Speed',
        description:
          'Speed determined by size from Table 2-8 (5 ft. for Fine up to 60 ft. for Gargantuan/Colossal).',
      },
      {
        scalingType: 'flat',
        name: 'Weapon Use',
        description:
          'Creatures with Intelligence 3 or higher can wield weapons normally and retain weapon and armor proficiencies.',
      },
      {
        scalingType: 'flat',
        name: 'Lost Attacks',
        description: 'Loses the rake special attack if it possessed one.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing, LLC',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 47. Bladeleaf Creature (CR +1)[3pp]
  {
    id: 'bladeleaf-creature',
    name: 'Bladeleaf Creature',
    description:
      "A plant creature whose leaves have hardened into razor-sharp blades, granting exceptional armor, immunity to elements, and the ability to animate detached leaves into lethal swarms.",
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['plant'] },
      { type: 'special', description: 'Base creature must be a plant with leaves' },
    ],
    naturalArmorChange: 10,
    fastHealing: '5 (10 at CR 6+; 20 at CR 12+)',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 11, value: 5, bypassedBy: 'slashing, magic, cold iron' },
        { minHD: 12, maxHD: 23, value: 10, bypassedBy: 'slashing, magic, cold iron' },
        { minHD: 24, value: 15, bypassedBy: 'slashing, magic, cold iron' },
      ],
    },
    immunities: ['cold', 'electricity', 'fire'],
    features: [
      {
        scalingType: 'flat',
        name: 'Animate Leaves (Su)',
        description:
          'As a standard action, the creature sheds leaves that harden to steel-like sharpness and form animated swarms under its control (free action, up to 300 feet). Destroyed swarms regenerate in 1 minute; leaves can be reattached as a standard action.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary (2017)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 48. Bleeding Horror (CR +3)[3pp]
  {
    id: 'bleeding-horror',
    name: 'Bleeding Horror',
    description:
      "An undead humanoid, monstrous humanoid, magical beast, or outsider created when the Axe of Blood consumes a creature's death, rising as a blood-soaked skeletal horror.",
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'creature_type',
        allowed: ['humanoid', 'monstrous humanoid', 'magical beast', 'outsider'],
      },
      { type: 'special', description: 'Must die from feeding the Axe of Blood' },
    ],
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'CHA', change: 8 },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated (undead). Bonus HP use Charisma modifier.',
    naturalArmorChange: 5,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 5, bypassedBy: 'magic' },
        { minHD: 6, maxHD: 10, value: 10, bypassedBy: 'magic' },
        { minHD: 11, value: 15, bypassedBy: 'magic' },
      ],
    },
    srFormula: 'CR + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Undead Traits',
        description: 'Gains all standard undead type immunities and traits.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance',
        description: '+4 bonus to channel resistance.',
      },
      {
        scalingType: 'flat',
        name: 'Deflection Bonus',
        description: '+2 deflection bonus to Armor Class.',
      },
      {
        scalingType: 'flat',
        name: 'Hit Dice',
        description:
          'Upgrade to d8s; Charisma modifier used for bonus hit points instead of Constitution.',
      },
      {
        scalingType: 'flat',
        name: 'Claw Attacks',
        description:
          'Gains 2 claw attacks if lacking them; damage scales by size (1d6 for Medium). Retains all weapons and natural weapons.',
      },
      {
        scalingType: 'flat',
        name: 'Bloodstorm (Sp)',
        description: 'Can cast bloodstorm up to 3 times per day at caster level 8.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Consumption (Su)',
        description:
          'Claw hits heal the horror for damage dealt. If both claws hit in one round, target takes 1d4+2 Constitution damage (Fortitude half).',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Ex)',
        description:
          "Creatures slain by the bleeding horror rise as bleeding horrors in 1d4 minutes under the creator's command.",
      },
      {
        scalingType: 'flat',
        name: 'Find Target (Sp)',
        description: 'Can unerringly locate the Axe of Blood if separated from it.',
      },
      {
        scalingType: 'flat',
        name: 'Horrific Appearance (Su)',
        description:
          'Living creatures within 60 feet that see the horror must save or take 1d6 Strength damage. Each creature can be affected at most once per day per horror.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors Complete (2011)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 49. Blighted Fey Template (CR+2)
  {
    id: 'blighted-fey',
    name: 'Blighted Fey',
    description:
      'A fey creature twisted by blight into a chaotic evil agent of corruption, gaining thorn-based attacks, parasitic bonds, and fungal rejuvenation.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['fey'] },
      { type: 'min_hd', minimum: 2 },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 2,
    fastHealing: '5 (requires moist earth and blighted plant within 300 yards)',
    damageReduction: {
      scalingType: 'flat',
      value: 10,
      bypassedBy: 'cold iron and good',
    },
    resistances: [
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
    ],
    immunities: ['disease', 'paralysis', 'poison', 'polymorph'],
    srFormula: 'newly adjusted CR + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description:
          'Gains darkvision 60 ft. if absent; extends existing darkvision by 30 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Thorn Throw (Ex)',
        description:
          'Standard action ranged attack (20 ft.) dealing sting-based damage (1d4 for Medium).',
      },
      {
        scalingType: 'flat',
        name: 'Parasitic Bond (Su)',
        description:
          'Once per day, a thorn throw forces a Fortitude save or curses the target with a parasitic infestation lasting 5 rounds. While active, half of all damage dealt to the blighted fey is redirected to the bonded target.',
      },
      {
        scalingType: 'flat',
        name: 'Fungal Rejuvenation (Su)',
        description:
          'Grants fast healing 5 whenever the creature is within 300 yards of blighted plants on moist earth.',
      },
      {
        scalingType: 'flat',
        name: 'Blighted Unity (Su)',
        description:
          'Telepathic communication and danger awareness within 100 feet of other blighted fey.',
      },
      {
        scalingType: 'flat',
        name: 'Daughter of the Blight (Su)',
        description:
          "Modifies plant-dependent abilities; for example, dryads are no longer bound to a specific tree.",
      },
      {
        scalingType: 'flat',
        name: 'Tainted Blood (Ex)',
        description:
          "Creatures that ingest the blighted fey's flesh must succeed on a Fortitude save or take ability damage and become nauseated.",
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'Gains Toughness as a bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          '+2 racial bonus on Knowledge (nature), Perception, and Stealth checks.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 6 (2017)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 50. Blood Knight (CR +2)[3pp]
  {
    id: 'blood-knight',
    name: 'Blood Knight',
    description:
      'An undead warrior whose body is composed entirely of blood contained within a suit of full plate armor, gaining powerful blood-based attacks and exceptional regenerative capabilities.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be a living creature proficient with heavy armor, wearing full plate, and possessing blood' },
    ],
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated (undead). Bonus HP use Charisma modifier.',
    fastHealing: '10',
    damageReduction: {
      scalingType: 'flat',
      value: 10,
      bypassedBy: 'bludgeoning',
    },
    features: [
      {
        scalingType: 'flat',
        name: 'Undead Traits',
        description: 'Gains all standard undead type immunities and traits.',
      },
      {
        scalingType: 'flat',
        name: 'Hit Dice',
        description:
          'All racial Hit Dice convert to d8s. Charisma modifier used for bonus hit points.',
      },
      {
        scalingType: 'flat',
        name: 'Armor Class',
        description:
          'Retains full plate armor bonus (+9). Natural armor converts to a deflection bonus: 1 + original natural armor bonus.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description:
          'Gains a slam attack if lacking natural attacks (damage one size larger than normal). All natural attacks gain the grab ability. All piercing and slashing attacks (natural and manufactured) gain bleed 2.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Drain (Ex)',
        description:
          'Any living creature damaged by a natural attack takes 1 point of Constitution damage in addition to normal damage. In a grapple: 1d4 Constitution damage per round. The blood knight gains 5 temporary HP per point of Constitution damage dealt.',
      },
      {
        scalingType: 'flat',
        name: 'Fountain of Blood (Ex)',
        description:
          'Once per 1d4 rounds (full-round action), sprays blood in a 15-foot radius requiring a Fortitude save. Creates a slippery area for 1 round per 2 Hit Dice. Requires 5 gallons of liquid or magical fire to remove.',
      },
      {
        scalingType: 'flat',
        name: 'Poison Blood (Ex)',
        description:
          'Type: Ingested. Onset: 1 minute. Frequency: 1/minute for 6 minutes. Effect: 1 Constitution damage plus nauseated. Cure: 1 successful save. DC is Charisma-based.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Slick (Ex)',
        description:
          'Constant 10-foot-radius effect treating the area as difficult terrain and as a grease spell. DC is Charisma-based.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Body (Ex)',
        description:
          'Body is composed entirely of blood contained within armor. Can store items within the armor form; retrieve as a move action or free action during a move.',
      },
      {
        scalingType: 'flat',
        name: 'Bonded Armor (Ex)',
        description:
          'Cannot remove or exchange the armor. If the armor is destroyed, the blood knight is destroyed as well. The armor gains a +5 bonus on all saving throws.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Changes',
        description:
          '+10 racial bonus on Escape Artist checks. Loses any racial Stealth bonuses.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing, LLC',
      publication: 'Advanced Bestiary (2014)',
    },
    visibility: 'global',
    rev: 1,
  },
];
