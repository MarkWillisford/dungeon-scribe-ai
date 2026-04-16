// Batch 009 | first: 'Graveborne Simple Template (CR +1)' | last: 'Hell Engine (CR +1)' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_009: TemplateDefinition[] = [
  // 201. Graveborne Simple Template (CR +1) [3pp]
  {
    id: 'graveborne',
    name: 'Graveborne Simple Template',
    description:
      'A simple template representing reanimated corpses substantially altered by their burial environment. Consists of aged, ossified and naturally occurring materials including patches of leathery skin, hair, and material from interment including roots, soil, and rocks. Distinct from standard skeletons. Applies only to creatures with 5+ HD.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'min_hd', minimum: 5 },
    ],
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'DEX', change: 2 },
    ],
    abilityScoreChangeNote: 'DEX bonus scales with size (+1 Small/Medium, +2 Large+). Constitution score removed (undead).',
    damageReduction: {
      scalingType: 'flat',
      value: 5,
      bypassedBy: 'bludgeoning',
    },
    resistances: [
      { energyType: 'cold', value: 5 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Undead Traits',
        description: 'Gains all standard undead traits including immunity to death effects, disease, paralysis, poison, sleep, and stunning.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance',
        description: 'Gains channel resistance +2.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Armor (Size-Based)',
        description: 'Natural armor bonus improves by +0 to +3 depending on size (Small 0, Medium +1, Large +2, Huge+ +3).',
      },
      {
        scalingType: 'flat',
        name: 'Cold Resistance (HD-Based)',
        description: 'Cold resistance scales with HD: 5 (5–9 HD), 10 (10–14 HD), 15 (15+ HD).',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Improved Initiative as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Forest Guardian Press',
      publication: 'The Ossuarite',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 202. Graveknight (CR +2)
  {
    id: 'graveknight',
    name: 'Graveknight',
    description:
      'A powerful undead warrior template representing a fallen champion whose sinful soul and martial prowess survive death through corrupt armor. The graveknight retains its personality and memories and commands lesser undead, radiating a powerful desecrating aura and channeling destructive energy through its chosen energy type.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful evil', 'neutral evil', 'chaotic evil'] },
    ],
    typeChange: 'undead (augmented)',
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote: 'Constitution score removed (undead); uses Charisma modifier for bonus HP.',
    naturalArmorChange: 4,
    damageReduction: {
      scalingType: 'flat',
      value: 10,
      bypassedBy: 'magic',
    },
    immunities: ['cold', 'electricity', 'one energy type chosen by Ruinous Revivification (acid, cold, electricity, or fire)'],
    srFormula: 'CR + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance',
        description: 'Gains channel resistance +4.',
      },
      {
        scalingType: 'flat',
        name: 'Ruinous Revivification (Su)',
        description: 'At creation, the graveknight selects one energy type (acid, cold, electricity, or fire) that augments its Channel Destruction, Devastating Blast, and an additional immunity.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Destruction (Su)',
        description: "The graveknight's weapons deal an additional 1d6 points of energy damage per 4 HD of the chosen energy type.",
      },
      {
        scalingType: 'flat',
        name: 'Devastating Blast (Su)',
        description: 'Three times per day, as a standard action, the graveknight can unleash a 30-foot cone dealing 2d6 points of chosen energy damage per 3 HD (Reflex half; DC 10 + 1/2 HD + Cha modifier).',
      },
      {
        scalingType: 'flat',
        name: 'Sacrilegious Aura (Su)',
        description: "The graveknight constantly exudes a 30-foot radius aura that functions as desecrate, with double the normal effect from its armor. Channeling positive energy within this aura requires a concentration check (DC 10 + 1/2 graveknight's HD + its Charisma modifier).",
      },
      {
        scalingType: 'flat',
        name: 'Undead Mastery (Su)',
        description: 'The graveknight can control up to 5 Hit Dice of undead creatures per graveknight HD, as animate dead.',
      },
      {
        scalingType: 'flat',
        name: 'Phantom Mount (Su)',
        description: 'Once per hour as a standard action, the graveknight can summon a skeletal horse as a phantom steed. The horse can carry one additional rider beyond the graveknight.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description: "One to ten days after a graveknight's destruction, its armor rebuilds the corpse and the graveknight returns with full hit points. Only by destroying the armor first can the graveknight be permanently slain.",
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'Gains Improved Initiative, Mounted Combat, Ride-By Attack, and Toughness as bonus feats.',
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonuses',
        description: 'Gains a +8 racial bonus on Intimidate, Perception, and Ride checks.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Bestiary 3',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 203. Green Warden (CR +1) [3pp]
  {
    id: 'green-warden',
    name: 'Green Warden',
    description:
      'A template for intelligent plant creatures, transforming them into powerful guardians of forests and wild places. Green wardens are extraordinarily strong, swift, and charismatic, with powerful druidic spell-like abilities and the ability to manipulate dead wood. An evil variant called the Green Blighter exists, replacing renewal abilities with corruption.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['plant'] },
      { type: 'special', description: 'Intelligence 6 or higher, Charisma 3 or higher' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    naturalArmorChange: 2,
    damageReduction: {
      scalingType: 'flat',
      value: 10,
      bypassedBy: 'slashing',
    },
    resistances: [
      { energyType: 'fire', value: 10 },
    ],
    regeneration: '5 (fire or cold)',
    spellLikeAbilities: [
      { spellName: 'calm animals', frequency: 'at_will', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'create water', frequency: 'at_will', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'pass without trace', frequency: 'at_will', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'purify food and drink', frequency: 'at_will', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'tree shape', frequency: 'at_will', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'tree stride', frequency: 'at_will', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'animate plants', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'barkskin', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'commune with nature', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'endure elements', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'goodberry', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'liveoak', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'plant growth', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'quench', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'transmute metal to wood', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'wood shape', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Speed Increase',
        description: 'Land speed increases by 10 ft., or the green warden gains a land speed of 15 ft. if the base creature had none.',
      },
      {
        scalingType: 'flat',
        name: 'Scent (Ex)',
        description: 'Gains the scent universal monster ability.',
      },
      {
        scalingType: 'flat',
        name: 'Tremorsense',
        description: 'Gains tremorsense 100 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Renew Deadwood (Su)',
        description: 'Once every 1d4 rounds, the green warden can produce an effect like that of a warp wood spell, but affecting only dead wood.',
      },
      {
        scalingType: 'flat',
        name: 'Favored Terrain (Ex)',
        description: "In its inhabited environment, the green warden gains a ranger's favored terrain bonus.",
      },
      {
        scalingType: 'flat',
        name: 'Natural Druid (Su)',
        description: "The green warden's effective druid level counts as one higher than normal for purposes of class abilities.",
      },
      {
        scalingType: 'flat',
        name: 'Trackless Step (Ex)',
        description: 'Leaves no trail in natural surroundings and cannot be tracked.',
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonuses',
        description: 'Gains a +10 racial bonus on Knowledge (nature), Perception, and Survival checks.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Leadership as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown Publisher',
      publication: 'Unknown Publication (3pp)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 204. Guardian Spirit (CR varies)
  {
    id: 'guardian-spirit',
    name: 'Guardian Spirit',
    description:
      'A complex template for fey or outsiders bound to protect a specific ward through a summoning ritual. CR scales dramatically with the spell level used to call the spirit (+0 to +12), granting correspondingly more powerful abilities, HD, natural armor, and spell-like abilities. Guardian spirits bear a rune on their forehead similar to an eidolon\'s and can smite those who threaten their ward.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['fey', 'outsider'] },
    ],
    srFormula: '11 + CR (unless base creature had higher)',
    features: [
      {
        scalingType: 'flat',
        name: 'CR and HD Scaling',
        description: 'CR and HD increase by 0 to 12 based on the conjuration spell level used to summon the spirit (higher spell level = greater increase).',
      },
      {
        scalingType: 'flat',
        name: 'Natural Armor Scaling',
        description: 'Natural armor improves by +0 to +10 depending on the conjuration spell level used.',
      },
      {
        scalingType: 'flat',
        name: 'Charisma Minimum',
        description: 'Charisma becomes 18 minimum; additional Charisma increases of +2 to +8 based on spell level.',
      },
      {
        scalingType: 'flat',
        name: 'Smite Threat (Su)',
        description: "The guardian spirit adds its Charisma bonus on attack rolls and its HD on damage rolls against any creature threatening its ward. Usable 1/day base, up to 3/day at higher spell levels.",
      },
      {
        scalingType: 'flat',
        name: 'Fated Guardian (Su)',
        description: 'At 4th+ spell level, the ward rolls twice on attacks and saving throws, taking the better result.',
      },
      {
        scalingType: 'flat',
        name: 'Co-Walker (Su)',
        description: "At 8th+ spell level, the guardian spirit can assume the ward's shape with a +10 bonus on Disguise checks.",
      },
      {
        scalingType: 'flat',
        name: 'Guidance (Sp)',
        description: 'Can cast guidance at will. Additional spell-like abilities scale with spell level (e.g., chill touch at 2nd, call lightning at 5th, cure serious wounds at 6th, death ward at 7th). Caster level equals CR + 1 or base creature CL, whichever is higher.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 205. Half-Babau
  {
    id: 'half-babau',
    name: 'Half-Babau',
    description:
      "A half-demon template based on the babau demon, producing skeletally thin creatures with pointed ears, a single horn-like growth, dark red skin, and sharp jagged teeth. Unlike the full babau, half-babaus do not gain a fly speed. They excel at ambush and infiltration, replacing several standard half-fiend spell-like abilities with unique babau-derived ones.",
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Acidic Blood (Su)',
        description: 'A creature that attacks a half-babau with a piercing or slashing natural attack takes 1d4 points of acid damage.',
      },
      {
        scalingType: 'flat',
        name: 'Sneak Attack Expert (Ex)',
        description: 'Grants sneak attack +1d6 that stacks with any other sources of sneak attack the creature possesses.',
      },
      {
        scalingType: 'flat',
        name: 'Alternate Spell-Like Abilities',
        description: 'Replaces four standard half-fiend spell-like abilities with see invisibility, keen edge, greater teleport, and acid fog (3/day). No fly speed is granted.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 206. Half-Celestial (CR +Varies)
  {
    id: 'half-celestial',
    name: 'Half-Celestial',
    description:
      'A powerful inherited template for living, corporeal creatures of good alignment with an Intelligence of 4 or higher. Half-celestials are the offspring of mortals and celestial beings, gaining angelic features including wings, celestial resistances, damage reduction, and divine spell-like abilities that scale with HD. CR increases by +1 (5 or fewer HD), +2 (6-10 HD), or +3 (11+ HD).',
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful good', 'neutral good', 'chaotic good'] },
      { type: 'special', description: 'Living corporeal creature with Intelligence 4 or higher' },
    ],
    typeChange: 'outsider (native)',
    subtypeGains: ['native'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote: 'Gains +4 to three ability scores of choice and +2 to the remaining three. Values above are representative.',
    naturalArmorChange: 1,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 11, value: 5, bypassedBy: 'magic' },
        { minHD: 12, value: 10, bypassedBy: 'magic' },
      ],
    },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
    ],
    immunities: ['disease'],
    srFormula: 'CR + 11 (maximum 35)',
    spellLikeAbilities: [
      { spellName: 'protection from evil', frequency: '3/day', casterLevelFormula: 'equal to HD', condition: '1-2 HD' },
      { spellName: 'aid', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '3-4 HD' },
      { spellName: 'bless', frequency: 'at_will', casterLevelFormula: 'equal to HD', condition: '3-4 HD' },
      { spellName: 'cure serious wounds', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '5-6 HD' },
      { spellName: 'neutralize poison', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '5-6 HD' },
      { spellName: 'holy smite', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '7-8 HD' },
      { spellName: 'remove disease', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '7-8 HD' },
      { spellName: 'dispel evil', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '9-10 HD' },
      { spellName: 'holy word', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '11-12 HD' },
      { spellName: 'holy aura', frequency: '3/day', casterLevelFormula: 'equal to HD', condition: '13-14 HD' },
      { spellName: 'hallow', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '13-14 HD' },
      { spellName: 'mass charm monster', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '15-16 HD' },
      { spellName: 'summon monster IX (celestials only)', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '17-18 HD' },
      { spellName: 'resurrection', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '19-20 HD' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Flight',
        description: "Gains wings and a fly speed equal to twice the base creature's land speed with good maneuverability (or retains better fly speed if the base creature already had one).",
      },
      {
        scalingType: 'flat',
        name: 'Poison Resistance',
        description: 'Gains a +4 racial bonus on saving throws against poison.',
      },
      {
        scalingType: 'flat',
        name: 'Smite Evil (Su)',
        description: "Once per day as a swift action, the half-celestial can smite evil, adding its Charisma bonus on attack rolls and its HD on damage rolls against an evil target. The smite persists until the target is dead or the half-celestial rests.",
      },
      {
        scalingType: 'flat',
        name: 'CR Scaling',
        description: 'CR adjustment is +1 for creatures with 5 or fewer HD, +2 for 6-10 HD, and +3 for 11+ HD.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 207. Half-Dragon (CR +2)
  {
    id: 'half-dragon',
    name: 'Half-Dragon',
    description:
      'An inherited template for living, corporeal creatures resulting from the union of a dragon and another creature. Half-dragons become dragons themselves, gaining a fearsome array of physical enhancements including claws, a bite, wings, and a breath weapon. Minimum resulting CR is 3.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living corporeal creature; minimum resulting CR 3' },
    ],
    typeChange: 'dragon',
    abilityScoreChanges: [
      { ability: 'STR', change: 8 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 4,
    immunities: ['sleep', 'paralysis', 'energy type matching breath weapon'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision and Low-Light Vision',
        description: 'Gains darkvision 60 ft. and low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Flight',
        description: "Gains wings and a fly speed equal to twice the base creature's land speed with average maneuverability (or retains better fly speed if the base creature already had one).",
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description: 'Gains two claw attacks and one bite attack (damage scales with size). Can still use manufactured weapons if the base creature could.',
      },
      {
        scalingType: 'flat',
        name: 'Breath Weapon (Su)',
        description: "Usable once per day. Deals 1d6 points of damage per racial HD, type determined by dragon variety (acid, fire, electricity, or cold). Reflex save DC equals 10 + 1/2 creature's racial HD + Con modifier.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 208. Half-Fiend (CR +1 to +3)
  {
    id: 'half-fiend',
    name: 'Half-Fiend',
    description:
      'An inherited template for living corporeal creatures of evil alignment with an Intelligence of 4 or higher, representing the offspring of mortals and fiendish beings. Half-fiends gain demonic or diabolic features including wings, claws, a bite, fiendish resistances, and dark spell-like abilities that scale with HD. CR increases by +1 (4 or fewer HD), +2 (5-10 HD), or +3 (11+ HD).',
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful evil', 'neutral evil', 'chaotic evil'] },
      { type: 'special', description: 'Living corporeal creature with Intelligence 4 or higher' },
    ],
    typeChange: 'outsider (native)',
    subtypeGains: ['native'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote: 'Gains +4 to three ability scores of choice and +2 to the remaining three. Values above are representative.',
    naturalArmorChange: 1,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 11, value: 5, bypassedBy: 'magic' },
        { minHD: 12, value: 10, bypassedBy: 'magic' },
      ],
    },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
      { energyType: 'fire', value: 10 },
    ],
    immunities: ['poison'],
    srFormula: 'CR + 11 (maximum 35)',
    spellLikeAbilities: [
      { spellName: 'darkness', frequency: '3/day', casterLevelFormula: 'equal to HD', condition: '1-2 HD' },
      { spellName: 'desecrate', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '3-4 HD' },
      { spellName: 'unholy blight', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '5-6 HD' },
      { spellName: 'poison', frequency: '3/day', casterLevelFormula: 'equal to HD', condition: '7-8 HD' },
      { spellName: 'contagion', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '9-10 HD' },
      { spellName: 'blasphemy', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '11-12 HD' },
      { spellName: 'unholy aura', frequency: '3/day', casterLevelFormula: 'equal to HD', condition: '13-14 HD' },
      { spellName: 'unhallow', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '13-14 HD' },
      { spellName: 'horrid wilting', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '15-16 HD' },
      { spellName: 'summon monster IX (fiends only)', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '17-18 HD' },
      { spellName: 'destruction', frequency: '1/day', casterLevelFormula: 'equal to HD', condition: '19-20 HD' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Flight',
        description: "Gains wings and a fly speed equal to twice the base creature's land speed with good maneuverability (or retains better fly speed if the base creature already had one).",
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description: 'Gains two claw attacks and one bite attack (damage scales with size). Can still use manufactured weapons if the base creature could.',
      },
      {
        scalingType: 'flat',
        name: 'Smite Good (Su)',
        description: "Once per day as a swift action, the half-fiend can smite good, adding its Charisma bonus on attack rolls and its HD on damage rolls against a good target. The smite persists until the target is dead or the half-fiend rests.",
      },
      {
        scalingType: 'flat',
        name: 'CR Scaling',
        description: 'CR adjustment is +1 for creatures with 4 or fewer HD, +2 for 5-10 HD, and +3 for 11+ HD.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 209. Half-Balor (CR +1)
  {
    id: 'half-balor',
    name: 'Half-Balor',
    description:
      'A variant half-fiend template based on the balor demon. Half-balors are hulking, muscular figures standing a foot or two taller than the base creature, with great horns, hoofed feet, horned scales, massive wings, and bursts of fire pulsing from their frames. They are immune to fire and deal fire damage with every melee attack. They often rise to positions of power as generals, rulers, or arch-villains.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: 3,
    immunities: ['fire'],
    features: [
      {
        scalingType: 'flat',
        name: 'Flaming Attacks (Su)',
        description: 'Every melee attack by the half-balor deals an additional 1d6 fire damage.',
      },
      {
        scalingType: 'flat',
        name: 'Damage Reduction',
        description: 'Adds good to the qualities needed to bypass the half-fiend damage reduction (DR/magic and good).',
      },
      {
        scalingType: 'flat',
        name: 'Alternate Spell-Like Abilities',
        description: 'Replaces standard half-fiend abilities: desecrate replaced by scorching ray (3/day), contagion replaced by telekinesis, unhallow replaced by greater teleport, horrid wilting replaced by fire storm.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 210. Half-Glabrezu (CR +?)
  {
    id: 'half-glabrezu',
    name: 'Half-Glabrezu',
    description:
      'A variant half-fiend template based on the glabrezu demon. Among the most hideous-looking of all half-demons, half-glabrezus have multiple horns, saurian legs with three joints, scaly green ridges on their shoulders and back, and two massive pincer arms extending from their shoulders in addition to their normal arms. They frequently serve as military, political, and spiritual advisors working to undermine the status quo. No fly speed is gained.',
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Pincer Arms',
        description: 'Gains two additional pincer arms extending from the shoulders (these are extra limbs, not replacements). Each pincer arm makes a natural attack (damage scales with size). Original arms remain free for weapon use; no claw attacks from original arms.',
      },
      {
        scalingType: 'flat',
        name: 'Bite Attack',
        description: 'Gains a bite attack (damage scales with size).',
      },
      {
        scalingType: 'flat',
        name: 'No Fly Speed',
        description: 'Does not gain a fly speed, unlike standard half-fiends.',
      },
      {
        scalingType: 'flat',
        name: 'Alternate Spell-Like Abilities',
        description: 'Replaces standard half-fiend abilities: desecrate replaced by mirror image, contagion replaced by confusion, unhallow replaced by greater teleport, horrid wilting replaced by power word stun.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 211. Half-Hezrou (CR +?)
  {
    id: 'half-hezrou',
    name: 'Half-Hezrou',
    description:
      "A variant half-fiend template based on the hezrou demon. Half-hezrous are bulky, rubbery-skinned beasts with crusty scales, protruding eyes, hanging jowls, and webbed hands and feet. They exude a terrible stench and gain a swim speed. They do not gain a fly speed. Half-hezrous tend toward solitary lifestyles, often pursuing alchemical work, narcotics trade, or serving as swamp guardians.",
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Swim Speed',
        description: "Gains a swim speed equal to the base creature's land speed (or retains a faster existing swim speed).",
      },
      {
        scalingType: 'flat',
        name: 'No Fly Speed',
        description: 'Does not gain a fly speed, unlike standard half-fiends.',
      },
      {
        scalingType: 'flat',
        name: 'Stench (Ex)',
        description: 'Exudes a foul stink of body odor mixed with swamp rot. Grants the stench universal monster rule with a 10-foot range. Creatures that fail the Fortitude save are sickened for 1 minute.',
      },
      {
        scalingType: 'flat',
        name: 'Alternate Spell-Like Abilities',
        description: 'Replaces standard half-fiend abilities: desecrate replaced by gaseous form, unhallow replaced by greater teleport.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 212. Half-Invidiak (CR +?)
  {
    id: 'half-invidiak',
    name: 'Half-Invidiak',
    description:
      'A variant half-fiend template based on the invidiak (shadow demon). Half-invidiaks have dark gray skin, red eyes, fangs, sharp talons, and painfully thin frames with large shadowy wings granting perfect flight maneuverability. They can briefly become incorporeal, though this ability cannot be used in bright light. These creatures value stealth and possession over brute force.',
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'DEX', change: 6 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Perfect Flight Maneuverability',
        description: "The half-invidiak's fly speed has perfect maneuverability (replaces standard half-fiend good maneuverability).",
      },
      {
        scalingType: 'flat',
        name: 'Ghostly Form (Su)',
        description: 'The half-invidiak can become incorporeal (including carried gear up to light encumbrance) for a number of rounds per day equal to its Hit Dice as a swift action. Returning to material form is a free action. This ability cannot be activated in areas of bright light, nor can an incorporeal half-invidiak enter such an area.',
      },
      {
        scalingType: 'flat',
        name: 'Alternate Spell-Like Abilities',
        description: 'Replaces standard half-fiend abilities: desecrate replaced by blur, poison (3/day) replaced by shadow conjuration (3/day), contagion replaced by magic jar, unhallow replaced by greater teleport, horrid wilting replaced by telekinesis (3/day).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 213. Half-Marilith (CR +1)
  {
    id: 'half-marilith',
    name: 'Half-Marilith',
    description:
      'A variant half-fiend template based on the marilith demon. Half-mariliths possess the lower body of a great serpent and four arms, with pale pupilless eyes and horns running along the head and back. They are masters of multi-weapon combat and excel as army commanders or skilled assassins, characterized by confidence, pride, and reluctance to concede defeat. No fly speed is gained.',
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
        name: 'Serpentine Lower Body',
        description: 'Replaces the lower body with that of a great serpent. Gains a tail slap attack with grab and constrict; constriction damage equals tail slap damage plus full Strength bonus.',
      },
      {
        scalingType: 'flat',
        name: 'Additional Arms',
        description: 'Gains two extra arms capable of wielding weapons.',
      },
      {
        scalingType: 'flat',
        name: 'Multiweapon Mastery (Ex)',
        description: 'Never takes penalties on attack rolls when fighting with multiple weapons.',
      },
      {
        scalingType: 'flat',
        name: 'No Fly Speed',
        description: 'Does not gain a fly speed, unlike standard half-fiends.',
      },
      {
        scalingType: 'flat',
        name: 'Alternate Spell-Like Abilities',
        description: 'Replaces standard half-fiend abilities: desecrate replaced by fly, poison (3/day) replaced by greater magic weapon (3/day), contagion replaced by true seeing, unhallow replaced by greater teleport, horrid wilting replaced by blade barrier.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 214. Half-Nabasu (CR +?)
  {
    id: 'half-nabasu',
    name: 'Half-Nabasu',
    description:
      'A variant half-fiend template based on the nabasu demon. Half-nabasus have batlike wings and ears, fanged mouths, taloned fingers, and sunken red glowing eyes. They are immune to death effects and can once per day consume the flesh of a creature of the same race as their mortal parent, gaining temporary combat bonuses. They replace several standard half-fiend spell-like abilities with energy-draining necromantic powers.',
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
    immunities: ['death effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Consume Flesh (Su)',
        description: "Once per day, the half-nabasu can spend 10 minutes entirely consuming the body of a creature of the same race as its non-demonic parent. Doing so grants a +2 profane bonus on all attack rolls, damage rolls, and AC, plus 2 temporary hit points per Hit Die. These effects last for 1 hour per Hit Die.",
      },
      {
        scalingType: 'flat',
        name: 'Alternate Spell-Like Abilities',
        description: 'Replaces standard half-fiend abilities with: silence, vampiric touch (3/day), enervation, greater teleport, and energy drain.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 215. Half-Nalfeshnee (CR +?)
  {
    id: 'half-nalfeshnee',
    name: 'Half-Nalfeshnee',
    description:
      'A variant half-fiend template based on the nalfeshnee demon. Half-nalfeshnees are hideously porcine in appearance with jutting lower teeth, beady eyes, small feathered wings with clumsy maneuverability, oversized hands with sharp nails, and bristly fur patches. They grow 1-2 feet taller without changing size category. They can unleash a nauseating flash of unholy color. Half-nalfeshnees typically seek material wealth and often rule merchant or thieves guilds.',
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
        name: 'Clumsy Fly Speed',
        description: 'Gains a fly speed equal to the base land speed with clumsy maneuverability (instead of the standard half-fiend good maneuverability).',
      },
      {
        scalingType: 'flat',
        name: 'Unholy Flash (Su)',
        description: "Once per day as a free action, the half-nalfeshnee infuses its aura with writhing nauseating colors. One round later, at the start of its turn, this aura bursts in a 20-foot radius. Non-demon creatures must succeed on a Will save (DC 10 + 1/2 HD + Cha modifier) or be nauseated for 1d6 rounds.",
      },
      {
        scalingType: 'flat',
        name: 'Alternate Spell-Like Abilities',
        description: 'Replaces standard half-fiend abilities: poison (3/day) replaced by slow (3/day), contagion replaced by feeblemind, unhallow replaced by greater teleport, horrid wilting replaced by greater dispel magic (3/day).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 216. Half-Succubus (CR +?)
  {
    id: 'half-succubus',
    name: 'Half-Succubus',
    description:
      "A variant half-fiend template based on the succubus demon. Half-succubi are nearly identical in appearance to full succubi and are easily mistaken for demons unless disguised. They have an extremely high Charisma and drain energy through intimate contact with willing or helpless victims. They can also change shape once per day and possess powerful enchantment and travel spell-like abilities.",
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
        name: "Passion (Su)",
        description: "The half-succubus drains energy from willing or grappled victims through intimate acts, inflicting one negative level. Usable a number of times per day equal to her Hit Dice. Save DC equals 10 + HD + Cha modifier.",
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description: "Once per day, the half-succubus can assume any humanoid form of the same size, functioning as alter self.",
      },
      {
        scalingType: 'flat',
        name: 'Alternate Spell-Like Abilities',
        description: 'Replaces standard half-fiend abilities: desecrate replaced by detect thoughts, poison (3/day) replaced by charm monster (3/day), contagion replaced by dominate person, unhallow replaced by greater teleport, horrid wilting replaced by ethereal jaunt, destruction replaced by dominate monster.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 217. Half-Vrock (CR +?)
  {
    id: 'half-vrock',
    name: 'Half-Vrock',
    description:
      "A variant half-fiend template based on the vrock demon. Half-vrocks possess a hideous face resembling a vulture's hooked visage, oily black feathers instead of hair, large feathered wings, sharp talons on their hands, and a long thin tail. They can infect foes with spores during melee and emit a terrifying shriek once per day. Half-vrocks often serve as mercenaries or soldiers, with violent reactivity to perceived slights.",
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Spores (Ex)',
        description: 'As a free action during melee contact, the half-vrock can infect targets with spores. After a one-minute interval, affected creatures become sickened for 2d4 rounds from welts. This functions as a disease effect.',
      },
      {
        scalingType: 'flat',
        name: 'Shriek (Su)',
        description: 'Once per day, the half-vrock emits a shrill screech affecting all non-demons within 30 feet. Targets must succeed on a Fortitude save (DC 10 + 1/2 HD + Con modifier) or be staggered for 1 round.',
      },
      {
        scalingType: 'flat',
        name: 'Alternate Spell-Like Abilities',
        description: 'Replaces standard half-fiend abilities with: mirror image, telekinesis, greater teleport, and chain lightning (3/day).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Demons Revisited',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 218. Half-Janni (CR +2)
  {
    id: 'half-janni',
    name: 'Half-Janni',
    description:
      'An inherited template for humanoid creatures with janni genie heritage. Half-jannis become native outsiders with enhanced mental faculties, a slow flight speed, and a variety of utility spell-like abilities reflecting their genie nature. Their abilities scale modestly with HD.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid'] },
    ],
    typeChange: 'outsider (augmented humanoid, native)',
    subtypeGains: ['native'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: 1,
    spellLikeAbilities: [
      { spellName: 'speak with animals', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA', condition: '1-2 HD' },
      { spellName: 'enlarge person', frequency: '2/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA', condition: '3-6 HD' },
      { spellName: 'reduce person', frequency: '2/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA', condition: '3-6 HD' },
      { spellName: 'invisibility (self only)', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA', condition: '7-8 HD' },
      { spellName: 'create food and water', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA', condition: '9-14 HD' },
      { spellName: 'ethereal jaunt', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA', condition: '15-16 HD' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Flight',
        description: 'Gains a fly speed of 20 feet with good maneuverability.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 219. Half-Serpent Template (CR +1)
  {
    id: 'half-serpent',
    name: 'Half-Serpent Template',
    description:
      'A template for corporeal bipedal or quadruped creatures with serpentine heritage. The template can be applied multiple times, each application adding one snake feature chosen from four options: snake arms, snake eyes and tongue, snake head, or snake tail. Hit Dice change to d8s, natural armor improves from scaled skin, and all applications grant a bonus on Stealth checks.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Corporeal bipedal or quadruped creature; can be applied multiple times (each application adds one snake feature)' },
    ],
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Stealth Bonus',
        description: 'Gains a +2 bonus on all Stealth checks from snake heritage.',
      },
      {
        scalingType: 'flat',
        name: 'Snake Feature: Snake Arms (choose one)',
        description: "Replaces arms or forelegs with snake bodies featuring non-poisonous bite attacks. The creature takes a -4 penalty on attack rolls and hand-based skill checks when wielding weapons with these limbs.",
      },
      {
        scalingType: 'flat',
        name: 'Snake Feature: Snake Eyes and Tongue (choose one)',
        description: 'Grants a +4 bonus on Intimidate checks against visible targets, +2 on Perception checks, low-light vision, and the scent ability.',
      },
      {
        scalingType: 'flat',
        name: 'Snake Feature: Snake Head (choose one)',
        description: 'Provides the scent ability and a poisonous bite attack. Poison DC equals 10 + 1/2 HD + Con modifier; frequency 1/round for 4 rounds; effect 1d2 Con; cure 1 save.',
      },
      {
        scalingType: 'flat',
        name: 'Snake Feature: Snake Tail (choose one)',
        description: 'Land speed becomes 20 ft., grants a +2 bonus on Climb checks, constrict ability, and a +4 bonus to CMB and CMD when grappling.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 220. Half-Umbral Dragon (CR +2)
  {
    id: 'half-umbral-dragon',
    name: 'Half-Umbral Dragon',
    description:
      'An inherited template for living corporeal creatures resulting from union with or magical experimentation involving an umbral dragon. Like the half-dragon template but granting umbral-specific immunities and a negative energy breath weapon. Minimum resulting CR is 3. Most of these creatures originate from magical experimentation rather than natural breeding.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living corporeal creature; minimum resulting CR 3' },
    ],
    typeChange: 'dragon',
    abilityScoreChanges: [
      { ability: 'STR', change: 8 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 4,
    immunities: ['sleep', 'paralysis', 'negative energy damage', 'Strength drain'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision and Low-Light Vision',
        description: 'Gains darkvision 60 ft. and low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Flight',
        description: "Gains wings and a fly speed equal to twice the base creature's land speed with average maneuverability (or retains better fly speed if the base creature already had one).",
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description: 'Gains two claw attacks and one bite attack (damage scales with size). Can still use manufactured weapons if the base creature could.',
      },
      {
        scalingType: 'flat',
        name: 'Negative Energy Breath Weapon (Su)',
        description: 'Usable once per day. Exhales a 30-foot cone of negative energy dealing 6d8 points of damage. Reflex save DC equals 10 + 1/2 racial HD + Con modifier for half damage.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 221. Haunted Construct (CR +1)
  {
    id: 'haunted-construct',
    name: 'Haunted Construct',
    description:
      'An acquired template for constructs that have become infused with a soul — typically the lingering spirit of their creator or a creature bound to them. The haunted construct gains Intelligence, a minimum Charisma, channel resistance, a deflection bonus to AC, and one haunt ability chosen by the GM. It reacts to undead-detection magic as undead and creates a desecrating aura.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    abilityScoreChanges: [
      { ability: 'INT', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote: 'Gains an Intelligence score of 4 if it lacked one. Charisma becomes minimum 14 if base is below 10; otherwise gains +4 bonus.',
    features: [
      {
        scalingType: 'flat',
        name: 'Infused Soul',
        description: 'Applies Charisma modifier as a bonus on Fortitude saves and gains bonus hit points per HD equal to its Charisma modifier. Healed by negative energy and harmed by positive energy. Reacts to undead-detection magic as an undead creature.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance',
        description: 'Gains channel resistance +4.',
      },
      {
        scalingType: 'flat',
        name: 'Deflection Bonus',
        description: 'Gains a +1 deflection bonus to AC.',
      },
      {
        scalingType: 'flat',
        name: 'Unholy Beacon (Su)',
        description: "Exudes a 20-foot radius aura functioning as desecrate. Undead within this aura gain the construct's damage resistances and hardness.",
      },
      {
        scalingType: 'flat',
        name: 'Haunt Ability (Su)',
        description: 'The GM selects one haunt from the following options: Burned Alive, Eaten Alive, Frozen Bones, Insane Ramblings, Isolation, Loss of Limbs, or Mutilation. Each haunt acts on initiative count 10 with a save DC of 10 + half the construct\'s Hit Dice.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 222. Haunted Construct (CR +2)
  {
    id: 'haunted-construct-2',
    name: 'Haunted Construct (Greater)',
    description:
      "An acquired template for constructs infused with the spirit of a powerful wizard. The haunted construct (CR +2) is a more powerful variant that grants significant defensive bonuses, bonus hit points per HD, a universal +2 to all rolls and DCs, and access to a suite of high-level wizard spell-like abilities (CL 20th). These spell-like abilities come from the wizard's spirit and are shared across all constructs the wizard possesses, with a 24-hour recharge. The construct is vulnerable to positive energy as if it were undead.",
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    spellLikeAbilities: [
      { spellName: 'chain lightning', frequency: '1/day', casterLevelFormula: '20', dcAbility: 'CHA', dcBase: 20 },
      { spellName: 'cone of cold', frequency: '1/day', casterLevelFormula: '20', dcAbility: 'CHA', dcBase: 19 },
      { spellName: 'finger of death', frequency: '1/day', casterLevelFormula: '20', dcAbility: 'CHA', dcBase: 22 },
      { spellName: 'greater dispel magic', frequency: '1/day', casterLevelFormula: '20' },
      { spellName: 'meteor swarm', frequency: '1/day', casterLevelFormula: '20', dcAbility: 'CHA', dcBase: 24 },
      { spellName: 'power word stun', frequency: '1/day', casterLevelFormula: '20' },
      { spellName: 'prismatic spray', frequency: '1/day', casterLevelFormula: '20', dcAbility: 'CHA', dcBase: 22 },
      { spellName: 'reverse gravity', frequency: '1/day', casterLevelFormula: '20' },
      { spellName: 'scintillating pattern', frequency: '1/day', casterLevelFormula: '20', dcAbility: 'CHA', dcBase: 23 },
      { spellName: 'summon monster IX', frequency: '1/day', casterLevelFormula: '20' },
      { spellName: 'telekinesis', frequency: '1/day', casterLevelFormula: '20', dcAbility: 'CHA', dcBase: 19 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Deflection Bonus to AC',
        description: 'Gains a +4 deflection bonus to AC.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Hit Points',
        description: 'Gains +4 bonus hit points per HD.',
      },
      {
        scalingType: 'flat',
        name: 'Universal +2 Bonus',
        description: 'Gains a +2 bonus on all die rolls (including damage rolls) and special ability DCs.',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerable to Positive Energy (Ex)',
        description: 'Takes damage from positive energy as if it were undead; negative energy has no effect on it.',
      },
      {
        scalingType: 'flat',
        name: 'Shared Spell-Like Abilities',
        description: "The spell-like abilities come from the wizard's spirit. Once a haunted construct uses a spell-like ability, it is no longer available to any additional constructs the wizard might possess for 24 hours.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 223. Haunted Ones (CR +1)
  {
    id: 'haunted-ones',
    name: 'Haunted Ones',
    description:
      "An acquired template for corporeal creatures with Intelligence 10 or higher that have been possessed by a rider spirit. The host retains free will but faces severe consequences for disobedience, including Constitution damage inflicted by the rider. The template grants enhanced mental and physical stats, exceptional Knowledge skill access, and powerful divination abilities. The possessed creature's alignment shifts to match the rider, typically chaotic and/or evil.",
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Corporeal creature with Intelligence 10 or higher' },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    spellLikeAbilities: [
      { spellName: 'vision', frequency: '1/day plus 1/day per 5 HD', casterLevelFormula: 'equal to HD' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Haunted (Ex) — Weakness',
        description: "The rider spirit can inflict 1d6 points of Constitution damage upon the haunted one as a free action, up to once per round. A successful DC 20 Fortitude save prevents this for 24 hours.",
      },
      {
        scalingType: 'flat',
        name: 'True Lore (Su)',
        description: 'Once per day (plus once per 5 HD), the haunted one gains a +20 insight bonus on any Knowledge skill check in which it has at least one rank.',
      },
      {
        scalingType: 'flat',
        name: 'Telepathy',
        description: 'Gains telepathy with other haunted ones within 100 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Language',
        description: 'Gains a bonus language (typically Aklo).',
      },
      {
        scalingType: 'flat',
        name: 'Knowledge Skills',
        description: 'All Knowledge skills become class skills.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 224. Heartless Creature (CR +1) [3pp]
  {
    id: 'heartless-creature',
    name: 'Heartless Creature',
    description:
      'A third-party template for intelligent creatures capable of experiencing negative emotions, turning them into a chaotic evil outsider that has literalized its emotional emptiness. Heartless creatures create duplicates of themselves, radiate an aura of fear, and can possess their originator. They are extremely difficult to permanently destroy, reforming in 1d4 hours unless their originator slays or absorbs them.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['any'] },
      { type: 'special', description: 'Must be intelligent and capable of experiencing negative emotions' },
    ],
    typeChange: 'outsider (augmented, native)',
    subtypeGains: ['native'],
    features: [
      {
        scalingType: 'flat',
        name: 'Aura of Abuse (Su)',
        description: "30-foot aura causing fear effects based on Will saves. A successful save leaves the target shaken for 1 round. Failed saves at three escalating DC thresholds produce cowered, panicked, or frightened conditions lasting 5 rounds.",
      },
      {
        scalingType: 'flat',
        name: 'Create Heartless (Su)',
        description: 'Once per day as a standard action, creates an exact duplicate of a target within 30 feet with the heartless template. The duplicate disappears if either the original or the duplicate is destroyed.',
      },
      {
        scalingType: 'flat',
        name: 'Improved Rejuvenation (Su)',
        description: "When destroyed, the heartless creature restores itself in 1d4 hours. Permanent destruction requires slaying the originator or having the originator absorb the heartless creature via touch attack and opposed Charisma check.",
      },
      {
        scalingType: 'flat',
        name: 'Mocking Laughter (Su)',
        description: 'Swift action usable once every 1d4 rounds. Targets one creature within 200 feet. A failed Will save inflicts 1d6 nonlethal damage per 2 HD plus a -1 penalty to attacks, saves, and checks per 2 HD, lasting 1 day. This is a mind-affecting compulsion effect.',
      },
      {
        scalingType: 'flat',
        name: 'Malevolence (Su)',
        description: "Once per round, the heartless creature can attempt to merge with its originator via a magic jar effect. Requires adjacency and an opposed Will save.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown Publisher',
      publication: 'Pathways Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 225. Hell Engine (CR +1)
  {
    id: 'hell-engine',
    name: 'Hell Engine',
    description:
      'An acquired template for nonchaotic, nongood constructs with no Intelligence score, binding them to an infernal contract. Hell engines serve the devil that created the contract and cannot harm the contract parties. They breathe hellfire clouds and can banish and redirect extraplanar creatures. Though they radiate a lawful evil aura, they are themselves neutral in alignment.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful neutral', 'true neutral', 'lawful good', 'neutral good', 'neutral evil'] },
      { type: 'creature_type', allowed: ['construct'] },
      { type: 'special', description: 'Must have no Intelligence score; must be nonchaotic and nongood' },
    ],
    resistances: [
      { energyType: 'fire', value: 30 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'See in Darkness',
        description: 'Gains the see in darkness ability, allowing sight in any darkness including supernatural darkness.',
      },
      {
        scalingType: 'flat',
        name: 'Hellfire Vision',
        description: 'Can see through its own hellfire breath weapon cloud without penalty.',
      },
      {
        scalingType: 'flat',
        name: 'Contract Powered (Ex)',
        description: "The hell engine cannot attack the devil that drafted the contract, the mortal signatory, or contract holders. Spells from these parties bypass the hell engine's spell resistance and immunity to magic. If both copies of the contract are destroyed, the hell engine ceases functioning.",
      },
      {
        scalingType: 'flat',
        name: 'Dispel Vulnerability',
        description: 'If the base creature has immunity to magic, dispel evil or dispel law drives the hell engine back 30 feet and deals 2d12 points of damage to it (no save).',
      },
      {
        scalingType: 'flat',
        name: 'Breath Weapon (Su)',
        description: "Exhales a hellfire cloud (area equal to the hell engine's space) once per 1d4+1 rounds. Deals 1d6 fire damage plus 1d6 unholy damage per 2 HD. Reflex save DC 10 + half HD for half damage. The hell engine can see through this cloud without penalty.",
      },
      {
        scalingType: 'flat',
        name: 'Banishing Strike (Su)',
        description: 'Three times per day, when the hell engine hits an extraplanar or summoned creature, the target must save or be immediately dismissed back to its home plane.',
      },
      {
        scalingType: 'flat',
        name: 'Redirect Summons (Sp)',
        description: 'Within 1 minute of a successful banishing strike, the hell engine can summon devils with 100% success.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },
];
