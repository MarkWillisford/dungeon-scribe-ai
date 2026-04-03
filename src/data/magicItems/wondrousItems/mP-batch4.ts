import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsMP4: WondrousItemDefinition[] = [
  {
    id: 'wondrous-monastic-warden',
    name: 'Monastic Warden',
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 8,
    slot: 'none',
    price: 23530,
    weight: 3,
    description:
      'This magical temple sword functions as a +1 ki focus weapon. The wielder can expend 1 ki point as a swift action to ' +
      'bypass shield bonuses on a single attack. Three times daily, the user can unleash a ranged touch attack creating a ' +
      'shimmering copy of the sword formed of white light that deals 4d8 force damage, or 8d6 force damage if the target ' +
      'stands on sacred ground (plus a daze effect for 1 round). DC 14 Will save halves damage and negates daze.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['arrow of law'], cost: 11930 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.monastic_warden_force_blade', value: 0, source: 'Monastic Warden' }],
  },
  {
    id: 'wondrous-monocle-of-the-investigator',
    name: 'Monocle of the Investigator',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'eyes',
    price: 66000,
    weight: 0,
    description:
      'This magical eyepiece allows the wearer to observe past events. Once per day, the wearer can gaze at a 10-foot-by-10-foot ' +
      'area and see exactly what occurred in that area during the past 24 hours. The observation takes one minute and provides ' +
      'clear visual details but no auditory information.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['legend lore', 'vision'], cost: 33000 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.monocle_investigator_past_sight', value: 0, source: 'Monocle of the Investigator' }],
  },
  {
    id: 'wondrous-eldritch-scholars-monocle',
    name: "Eldritch Scholar's Monocle",
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'eyes',
    price: 5000,
    weight: 0,
    description:
      'This lens in an electrum frame allows read magic while worn. After 24 hours of continuous wear, it grants protective ' +
      'benefits: when encountering curse effects, sanity-draining effects, or magical traps triggered by reading, the monocle ' +
      'pulls the wearer\'s attention away, allowing them to roll saving throws twice and take the better result (1/day). ' +
      'After activation, vision blurs and read magic ceases.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['augury', 'read magic'], cost: 2500 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.eldritch_monocle_read_magic', value: 0, source: "Eldritch Scholar's Monocle" }],
  },
  {
    id: 'wondrous-inquisitors-monocle',
    name: "Inquisitor's Monocle",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'eyes',
    price: 3400,
    weight: 0,
    description:
      "This monocle grants its wearer a +5 competence bonus on Sense Motive checks. Though it fits over only one eye, " +
      "it takes up the entire eyes slot.",
    construction: { feats: ['Craft Wondrous Item'], spells: ['zone of truth'], cost: 1700 },
    activationCategory: 'continuous',
    effects: [{ type: 'bonus', bonusType: 'competence', target: 'skill.sense_motive', value: 5, source: "Inquisitor's Monocle" }],
  },
  {
    id: 'wondrous-monster-killers-folio',
    name: "Monster Killer's Folio",
    category: 'wondrous',
    source: 'Magic Tactics Toolbox',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 5,
    slot: 'none',
    price: 16000,
    weight: 2,
    description:
      'This leather-bound volume contains anatomical diagrams for wounding various creature types. The book provides illumination ' +
      'like a candle within 5 feet and grants a +5 bonus to Knowledge checks regarding creature vulnerabilities. It rapidly ' +
      'opens to relevant pages and can cast a specific spell once daily.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['discovery torch', 'know the enemy'], cost: 8000 },
    activationCategory: 'use_activated',
    effects: [{ type: 'bonus', target: 'skill.knowledge', value: 5, source: "Monster Killer's Folio", condition: { type: 'custom', params: {}, description: 'creature vulnerabilities only' } }],
  },
  {
    id: 'wondrous-mountainshapers-girdle',
    name: "Mountainshaper's Girdle",
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',
    price: 25000,
    weight: 1,
    description:
      'This belt provides a +4 Strength enhancement bonus. The wearer can expend 1 ki point to cast stone shape, with an option ' +
      'to shape metal instead — though metal shaping is limited to one-tenth the normal volume. Creating weapons requires a ' +
      'successful Craft (weapons) check, and items cannot be masterwork.',
    construction: { feats: ['Craft Wondrous Item'], spells: ["bear's endurance", 'stone shape'], cost: 12500 },
    activationCategory: 'continuous',
    effects: [{ type: 'bonus', bonusType: 'enhancement', target: 'ability.str', value: 4, source: "Mountainshaper's Girdle" }],
  },
  {
    id: 'wondrous-muleback-cords',
    name: 'Muleback Cords',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'shoulders',
    price: 1000,
    weight: 0,
    description:
      'These leather shoulder wraps enhance the wearer\'s apparent musculature and treat his Strength score as 8 higher than ' +
      'normal when determining carrying capacity. The bonus applies exclusively to encumbrance calculations, not to combat ' +
      'or other strength-based checks.',
    construction: { feats: ['Craft Wondrous Item'], spells: ["bull's strength"], cost: 500 },
    activationCategory: 'continuous',
    effects: [{ type: 'bonus', target: 'special.carrying_capacity', value: 8, source: 'Muleback Cords' }],
  },
  {
    id: 'wondrous-naga-scale-bindi',
    name: 'Naga-Scale Bindi',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'head',
    price: 6000,
    weight: 0,
    description:
      'This iridescent scale adheres to the forehead and enhances the wearer\'s gaze. It grants the wearer a +2 enhancement ' +
      'bonus to Charisma and the ability to fascinate a single creature within 30 feet once per day (Will DC 16 negates).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['eagle\'s splendor', 'hypnotism'], cost: 3000 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'enhancement', target: 'ability.cha', value: 2, source: 'Naga-Scale Bindi' },
    ],
  },
  {
    id: 'wondrous-nagaji-scale-polish',
    name: 'Nagaji Scale Polish',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',
    price: 1400,
    weight: 0,
    description:
      'A clay urn containing scintillating paste that functions similarly to imbue with spell ability, but accepts spells from ' +
      'any caster. When applied to scales (standard action), reptilian creatures gain the ability to cast the imbued spells ' +
      'if they meet Hit Dice and ability score requirements.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['imbue with spell ability'], cost: 700 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.nagaji_scale_polish_imbue', value: 0, source: 'Nagaji Scale Polish' }],
  },
  {
    id: 'wondrous-nail-of-blood',
    name: 'Nail of Blood',
    category: 'wondrous',
    source: 'People of the Wastes',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'none',
    price: 25000,
    weight: 0,
    description:
      'A 3-inch black metal nail inscribed with runes emitting a faint blue glow. It melds into flesh over 1 round, occupying ' +
      'an empty magic item slot (excluding eyes, head, headband). It enables spellcasters to cast within magic dead zones by ' +
      'drawing on life force. First spell per level has no penalty; additional spells require concentration checks (DC 15 + spell ' +
      'level) and cause fatigue; casting while fatigued risks exhaustion.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['blood transcription'], cost: 12500 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.nail_of_blood_dead_zone_casting', value: 0, source: 'Nail of Blood' }],
  },
  {
    id: 'wondrous-necklace-of-adaptation',
    name: 'Necklace of Adaptation',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'neck',
    price: 9000,
    weight: 1,
    description:
      'This platinum medallion on a heavy chain grants the wearer immunity to harmful vapors and gases — including cloudkill, ' +
      'stinking cloud, and inhaled poisons — while enabling breathing in any environment, including underwater and in a vacuum.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['alter self'], cost: 4500 },
    activationCategory: 'continuous',
    effects: [
      { type: 'immunity', target: 'special.harmful_vapors', value: 0, source: 'Necklace of Adaptation' },
    ],
  },
  {
    id: 'wondrous-necklace-of-air-adaptation',
    name: 'Necklace of Air Adaptation',
    category: 'wondrous',
    source: 'Pathfinder #122: Into the Shattered Continent',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'neck',
    price: 10000,
    weight: 0,
    description:
      'This item enables aquatic creatures to breathe air and become amphibious, allowing indefinite land survival. It also ' +
      'grants a movement speed of 30 feet or provides a +10 enhancement bonus to existing speeds of 30+ feet.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['air breathing', 'expeditious retreat'], cost: 5000 },
    activationCategory: 'continuous',
    effects: [
      { type: 'special', target: 'special.necklace_air_adaptation_amphibious', value: 0, source: 'Necklace of Air Adaptation' },
    ],
  },
  {
    id: 'wondrous-necklace-of-bloody-incisors',
    name: 'Necklace of Bloody Incisors',
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'neck',
    price: 1850,
    weight: 0,
    description:
      'An iron chain strung with up to 10 predatory animal teeth. The wearer can place up to three teeth into thrown splash ' +
      'weapons or alchemist\'s bombs as a move action. Each tooth adds 1d4 slashing damage and increases splash damage by ' +
      '2 points per tooth used. The necklace is depleted once all teeth are consumed.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['greater magic fang'], cost: 925 },
    activationCategory: 'use_activated',
    effects: [{ type: 'damage', target: 'special.bloody_incisors_splash', value: 0, source: 'Necklace of Bloody Incisors' }],
  },
  {
    id: 'wondrous-necklace-of-construct-aversion',
    name: 'Necklace of Construct Aversion',
    category: 'wondrous',
    source: 'Construct Handbook',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 11,
    slot: 'neck',
    price: 132000,
    weight: 1,
    description:
      'The wearer gains awareness of all constructs within 60 feet (similar to lifesense, detecting only constructs). Constructs ' +
      'cannot perceive the wearer through any sensory means, including blindsense, blindsight, scent, or tremorsense. This ' +
      'concealment ends for 1 minute if the wearer touches a construct or attacks anyone. Constructs with Intelligence 3+ ' +
      'may attempt a DC 18 Will save to overcome the effect.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['invisibility', 'locate object'], cost: 66000 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.necklace_construct_aversion', value: 0, source: 'Necklace of Construct Aversion' }],
  },
  {
    id: 'wondrous-necklace-of-ensured-return',
    name: 'Necklace of Ensured Return',
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 18,
    slot: 'neck',
    price: 120000,
    weight: 1,
    description:
      'This golden and silver necklace features an opal gemstone. When the wearer dies, their soul transfers into the gem. ' +
      'The wearer selects a time period (1-14 days) at death. Once that period expires, the gem shatters and the wearer\'s ' +
      'body reforms within 60 feet, restored to life. If the gem breaks early, the body materializes immediately. ' +
      'The necklace becomes inert after resurrection.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['nondetection', 'trap the soul', 'true resurrection'], cost: 60000 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.necklace_ensured_return_resurrection', value: 0, source: 'Necklace of Ensured Return' }],
  },
  {
    id: 'wondrous-necklace-of-fireballs-i',
    name: 'Necklace of Fireballs (Type I)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',
    price: 1650,
    weight: 1,
    description:
      'This item appears to be a string of beads. Each bead can be detached and thrown as a ranged touch attack (max range 70 ft). ' +
      'Each bead detonates as a fireball (Reflex DC 14 half). Type I contains one 5d6 bead and two 3d6 beads.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fireball'], cost: 825 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.necklace_fireballs', value: 0, source: 'Necklace of Fireballs (Type I)' }],
  },
  {
    id: 'wondrous-necklace-of-fireballs-ii',
    name: 'Necklace of Fireballs (Type II)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',
    price: 2700,
    weight: 1,
    description:
      'As Necklace of Fireballs Type I, but contains one 5d6 bead, two 3d6 beads, and two 2d6 beads.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fireball'], cost: 1350 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.necklace_fireballs', value: 0, source: 'Necklace of Fireballs (Type II)' }],
  },
  {
    id: 'wondrous-necklace-of-fireballs-iii',
    name: 'Necklace of Fireballs (Type III)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',
    price: 4350,
    weight: 1,
    description:
      'As Necklace of Fireballs Type I, but contains one 7d6 bead, two 5d6 beads, and two 3d6 beads.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fireball'], cost: 2175 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.necklace_fireballs', value: 0, source: 'Necklace of Fireballs (Type III)' }],
  },
  {
    id: 'wondrous-necklace-of-ki-serenity',
    name: 'Necklace of Ki Serenity',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9,
    slot: 'neck',
    price: 16000,
    weight: 0,
    description:
      'This leather cord with regular knots enhances the wearer\'s inner tranquility. The wearer gains a +4 bonus to ' +
      'effective level when determining the size of his ki pool and the level-based effects of his ki pool ability ' +
      '(such as bypassing damage reduction).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['calm emotions', "owl's wisdom"], cost: 8000 },
    activationCategory: 'continuous',
    effects: [{ type: 'bonus', target: 'special.ki_pool_effective_level', value: 4, source: 'Necklace of Ki Serenity' }],
  },
  {
    id: 'wondrous-necklace-of-netted-stars',
    name: 'Necklace of Netted Stars',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ILLUSION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 12,
    slot: 'neck',
    price: 42000,
    weight: 0,
    description:
      'This mithral necklace features delicate chainwork with numerous small jewels and seven prominent larger stones. The wearer ' +
      'can cast dancing lights at will and wandering star motes once daily. Each of the seven jewels functions like a pearl of power ' +
      'for recalling 1st-level or 0-level spells. Once per day the wearer may counterspell targeted magic using dispel magic with ' +
      'a bonus of 12 + unused jewels. Success allows recalling a spell of equal or lower level.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['dancing lights', 'dispel magic', 'wandering star motes'], cost: 21000 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.necklace_netted_stars_pearl_counterspell', value: 0, source: 'Necklace of Netted Stars' }],
  },
];
