import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsRZFill2: WondrousItemDefinition[] = [
  // ─── batch 6 gap-fills ───────────────────────────────────────────────
  {
    id: 'wondrous-spectral-shroud',
    name: 'Spectral Shroud',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'chest',
    price: 26000,
    weight: 0,
    description:
      'A bleached cloth garment covering the torso that provides affinity with spectral entities. The wearer can perceive ' +
      'invisible or ethereal creatures as if using see invisibility. Once per day, the wearer becomes incorporeal for 10 rounds, ' +
      'gaining fly speed at half base speed with perfect maneuverability. The incorporeal state prevents attacks but can be ' +
      'dismissed as a move action.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['hide from undead', 'see invisibility'], cost: 13000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.spectral_shroud_incorporeal', value: 0, source: 'Spectral Shroud' }],
  },
  {
    id: 'wondrous-sigil-chalk',
    name: 'Sigil Chalk',
    category: 'wondrous',
    source: 'Monster Codex',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'none',
    price: 2000,
    weight: 0,
    description:
      'A grayish chalk stick flecked with mithral. After succeeding at a Knowledge check to identify a creature\'s special ' +
      'abilities, the user can draw a 1-foot-wide floating rune representing that creature type. The rune hovers for 1 hour, ' +
      'granting +1 insight bonus on attack rolls and skill checks against that creature type. Contains enough for five runes. ' +
      'Multiple runes can be maintained simultaneously up to Intelligence modifier (minimum 1).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['gallant inspiration', 'true strike'], cost: 1000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'bonus', bonusType: 'insight', target: 'attack.all', value: 1, source: 'Sigil Chalk', condition: { type: 'custom', params: {}, description: 'vs. identified creature type only' } }],
  },
  {
    id: 'wondrous-silver-nail',
    name: 'Silver Nail',
    category: 'wondrous',
    source: 'Undead Slayer\'s Handbook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'none',
    price: 2100,
    weight: 0,
    description:
      'A silver nail inscribed with runes that glow faintly blue in moonlight. Against helpless or pinned evil outsiders, it ' +
      'functions as dimensional anchor. For incorporeal undead, it prevents passage through solid objects. Effects persist for ' +
      '1 minute, after which the nail becomes inert and powerless. Single use.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['dimensional anchor', 'plane shift'], cost: 1050 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.silver_nail_anchor', value: 0, source: 'Silver Nail' }],
  },
  {
    id: 'wondrous-silver-nocking-point',
    name: 'Silver Nocking Point',
    category: 'wondrous',
    source: 'Ranged Tactics Toolbox',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',
    price: 3150,
    weight: 0,
    description:
      'A small silver cylinder that attaches to a bow or crossbow string. It reduces wind condition penalties by one severity ' +
      'level. Severe wind penalties drop from -4 to -2. Magical wind effects that would deflect projectiles instead impose ' +
      'only a -8 penalty on attack rolls.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['true strike'], cost: 1575 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.silver_nocking_point_wind', value: 0, source: 'Silver Nocking Point' }],
  },
  {
    id: 'wondrous-silverfang',
    name: 'Silverfang',
    category: 'wondrous',
    source: 'Pathfinder #62: Curse of the Lady\'s Light',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 8,
    slot: 'none',
    price: 9320,
    weight: 2,
    description:
      'A +1 undead bane mithral rapier originally created by vampire hunters. Grants the wielder a +2 resistance bonus on ' +
      'saves against negative energy and level drain. When making Fortitude saves to recover from negative levels, the user ' +
      'rolls twice and keeps the better result. Once per day after landing a critical hit on undead, the wielder may activate ' +
      'halt undead (Will DC 14) as a swift action.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['death ward', 'halt undead'], cost: 8250 },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 22 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.all', value: 2, source: 'Silverfang', condition: { type: 'custom', params: {}, description: 'vs. negative energy and level drain only' } },
    ],
  },
  {
    id: 'wondrous-singing-bell-of-striking',
    name: 'Singing Bell of Striking',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 6000,
    weight: 3,
    description:
      'A bowl-shaped bell crafted from cold iron or silver. When played with a leather mallet during meditation or rest to ' +
      'regain ki, the bearer can attune their ki points to it. Once attuned, the bearer\'s ki strikes overcome damage reduction ' +
      'as if they were cold iron or silver (depending on the bell\'s material) rather than magic weapons. Attunement lasts ' +
      'until the next ki point recovery period. Only one person can attune at a time.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['versatile weapon'], cost: 3000 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 20 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.singing_bell_ki_dr', value: 0, source: 'Singing Bell of Striking' }],
  },
  {
    id: 'wondrous-sinners-wage',
    name: "Sinner's Wage",
    category: 'wondrous',
    source: 'Champions of Corruption',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'none',
    price: 500,
    weight: 0,
    description:
      'A golden coin that mimics nearby currency in appearance. When used as payment for morally compromising services, grants ' +
      'the giver a +2 profane bonus on Charisma checks and Bluff, Diplomacy, and Intimidate checks. Can serve as a focus for ' +
      'charm or compulsion spells of 5th level or lower, imposing -2 on targets\' saves. Using it as a spell focus renders ' +
      'the coin inert for one week.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['charm monster'], cost: 250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sinners_wage_profane', value: 0, source: "Sinner's Wage" }],
  },
  {
    id: 'wondrous-skelterhide',
    name: 'Skelterhide',
    category: 'wondrous',
    source: 'Pathfinder #115: Trail of the Hunted',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 15,
    slot: 'shoulders',
    price: 4500,
    weight: 5,
    description:
      'A cloak that grants the wearer the divided mind of a skeltercat. Provides resistance bonuses on saving throws and ' +
      'allows rerolling percentile dice once per round when confused. The wearer loses the ability to speak or write, ' +
      'communicating only through growls. Lets the wearer function unaffected by permanent mental afflictions for 15 ' +
      'minutes per day in 1-minute increments.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['calm emotions', 'resistance', 'blindness/deafness'], cost: 2250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.skelterhide_divided_mind', value: 0, source: 'Skelterhide' }],
  },
  {
    id: 'wondrous-skin-harp',
    name: 'Skin Harp',
    category: 'wondrous',
    source: 'Pathfinder #63: The Asylum Stone',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 9,
    slot: 'none',
    price: 16500,
    weight: 5,
    description:
      'A harp fashioned from a sprite\'s remains, with flayed flesh strips as strings. Functions as a masterwork instrument. ' +
      'Once per day, cast either command undead or dominate person (Will DC 19). A successful DC 20 Perform (string) check ' +
      'increases the save DC by +2. When activated, the corpse animates to play itself.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['command undead', 'dominate person'], cost: 8550 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.skin_harp_command', value: 0, source: 'Skin Harp' }],
  },
  {
    id: 'wondrous-sky-marines-elite-saddle',
    name: 'Sky Marines Elite Saddle',
    category: 'wondrous',
    source: 'Knights of the Inner Sea',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 14000,
    weight: 5,
    description:
      'A leather saddle with wing-accommodating alterations. Grants the mount a +5 competence bonus on Fly checks and the ' +
      'rider a +5 competence bonus on Ride checks. If the rider is unsaddled during flight, they receive a feather fall ' +
      'effect. The mount gains benefits from any teamwork feats the rider possesses.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fly', 'mount'], cost: 7000 },
    physicalStats: { hardness: 5, hitPoints: 10, breakDC: 20 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.ride', value: 5, source: 'Sky Marines Elite Saddle' },
    ],
  },
  {
    id: 'wondrous-skyspirit-stone',
    name: 'Skyspirit Stone',
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 2000,
    weight: 0,
    description:
      'A small object naturally struck by lightning and infused with a sky spirit. Once daily, it can be placed in liquor or ' +
      'milk for one minute to empower the liquid. When an aerokineticist drinks this as a move action, they negate a single ' +
      'point of burn from kineticist abilities for one hour. Does not stack with multiple uses.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['lesser restoration'], cost: 1000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.skyspirit_stone_burn', value: 0, source: 'Skyspirit Stone' }],
  },
  {
    id: 'wondrous-slippers-of-the-primordial-wilds',
    name: 'Slippers of the Primordial Wilds',
    category: 'wondrous',
    source: 'Blood of the Beast',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'feet',
    price: 24000,
    weight: 0,
    description:
      'Delicate slippers made from giant cowslip petals. The wearer gains immunity to scent-based tracking or detection. ' +
      'When positioned with feet in different terrains (such as a cave entrance or forest edge), a gathlain wearer can ' +
      'activate plane shift twice daily to travel between the Material Plane and the First World.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['plane shift'], cost: 12000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.slippers_primordial_wilds', value: 0, source: 'Slippers of the Primordial Wilds' }],
  },
  {
    id: 'wondrous-slippers-of-the-triton',
    name: 'Slippers of the Triton',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'feet',
    price: 56000,
    weight: 1,
    description:
      'Slippers that grant the wearer the ability to breathe water. Those lacking a swim speed gain a 30-foot swim speed. ' +
      'Wearers with existing swim speeds receive a +10 foot enhancement bonus to their swim speed.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['ride the waves'], cost: 28000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'grant_movement', target: 'swim', value: 30, source: 'Slippers of the Triton' }],
  },
  {
    id: 'wondrous-acrobat-slippers',
    name: 'Acrobat Slippers',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',
    price: 3000,
    weight: 2,
    description:
      'Gray leather slippers that let the wearer retain Dexterity bonus to AC when climbing, running, or using Acrobatics ' +
      'to move on narrow surfaces or uneven ground without falling. Grants +2 competence bonus to CMD against trip maneuvers ' +
      'and on Reflex saves to avoid falling (including falling prone).',
    construction: { feats: ['Craft Wondrous Item'], spells: ["cat's grace"], cost: 1500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'combat.cmd', value: 2, source: 'Acrobat Slippers', condition: { type: 'custom', params: {}, description: 'vs. trip maneuvers only' } },
    ],
  },
  {
    id: 'wondrous-quick-action-slippers',
    name: 'Quick Action Slippers',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'feet',
    price: 10000,
    weight: 1,
    description:
      'The wearer can stand from prone as a free action, though this still provokes attacks of opportunity normally. ' +
      'Those possessing the stand up rogue talent avoid opportunity attacks when standing from prone.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['haste'], cost: 5000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.quick_action_stand_free', value: 0, source: 'Quick Action Slippers' }],
  },
  {
    id: 'wondrous-smear-of-seeing',
    name: 'Smear of Seeing',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',
    price: 4000,
    weight: 1,
    description:
      'A black oily substance in a glass jar. When applied to a surface as a standard action, allows those on the application ' +
      'side to see through up to 10 feet of plaster, stone, or wood for 10 minutes. Cannot affect metal or harder substances. ' +
      'One application covers a 1-foot-radius area. One jar contains five applications.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['arcane eye', 'see through stone'], cost: 2000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.smear_of_seeing_vision', value: 0, source: 'Smear of Seeing' }],
  },
  {
    id: 'wondrous-snake-charmers-flute',
    name: "Snake Charmer's Flute",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 17,
    slot: 'none',
    price: 26000,
    weight: 3,
    description:
      'A magical flute with two distinct melodies. The first grants +5 competence bonus on Handle Animal and wild empathy ' +
      'checks to influence snakes and snakelike creatures. The second melody, usable once daily as a full-round action, ' +
      'summons an advanced giant anaconda that obeys mental commands and persists while the musician maintains the tune ' +
      'with a move action each round, lasting up to 3 minutes.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['dominate monster', 'summon nature\'s ally VIII'], cost: 13000 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.handle_animal', value: 5, source: "Snake Charmer's Flute", condition: { type: 'custom', params: {}, description: 'snakes and snakelike creatures only' } },
    ],
  },
  {
    id: 'wondrous-soaring-cathedra',
    name: 'Soaring Cathedra',
    category: 'wondrous',
    source: 'Pathfinder #24: The Final Wish',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 5000,
    weight: 250,
    description:
      'A blackwood sedan chair draped in white silk that accommodates two Medium-sized occupants. Always floats a few feet ' +
      'above the ground and moves horizontally with a speed of 10 feet. Passengers can land or rise as a free action.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['levitate'], cost: 2500 },
    physicalStats: { hardness: 5, hitPoints: 30, breakDC: 25 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.soaring_cathedra_levitate', value: 0, source: 'Soaring Cathedra' }],
  },
  {
    id: 'wondrous-soles-of-the-silent-stride',
    name: 'Soles of the Silent Stride',
    category: 'wondrous',
    source: 'Blood of Shadows',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',
    price: 8250,
    weight: 0,
    description:
      'Dark leather footwear that instantly adjusts to the wearer\'s foot shape. Grants +5 competence bonus on Stealth ' +
      'checks and enables the wearer to attempt Stealth checks while running, albeit at a -20 penalty.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['silence'], cost: 4125 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 5, source: 'Soles of the Silent Stride' },
    ],
  },
  // ─── batch 7 gap-fills ───────────────────────────────────────────────
  {
    id: 'wondrous-solidsmoke-pipeweed',
    name: 'Solidsmoke Pipeweed',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',
    price: 1000,
    weight: 0,
    description:
      'Magical tobacco that produces milky-white smoke a halfling can shape into objects. As a full-round action, the halfling ' +
      'shapes smoke into an object weighing up to 5 pounds with max volume of 1 cubic foot. Additional rounds increase by ' +
      '2 pounds and 1 cubic foot per round. Items persist 24 hours. Each pinch provides 3 full rounds. Non-halflings become ' +
      'sickened for 1 round when smoking it.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['minor creation'], cost: 500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.solidsmoke_shape_object', value: 0, source: 'Solidsmoke Pipeweed' }],
  },
  {
    id: 'wondrous-soothing-stole',
    name: 'Soothing Stole',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'shoulders',
    price: 6500,
    weight: 2,
    description:
      'A white fur garment granting +2 competence bonus on Diplomacy and wild empathy checks. Three times daily, create a ' +
      '20-foot aura of calm animals or calm emotions (Will DC 13 negates) lasting 1 minute. Also provides cold weather protection.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['calm animals', 'calm emotions'], cost: 3250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.diplomacy', value: 2, source: 'Soothing Stole' },
    ],
  },
  {
    id: 'wondrous-soul-scribe-quill',
    name: 'Soul Scribe Quill',
    category: 'wondrous',
    source: 'Champions of Corruption',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',
    price: 4500,
    weight: 0,
    description:
      'An ornate red and black quill with an endless supply of blood-red ink. Once daily within 5 feet of a creature at -1 hp ' +
      'or lower, inscribe a death description as a standard action. Target must succeed at DC 15 Will save or die. The bearer ' +
      'gains +5 profane bonus to Bluff, Diplomacy, and Sense Motive; +1 profane to caster level for SLAs; and +2 enhancement ' +
      'to Charisma for 10 minutes per victim\'s Hit Die.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['death knell', 'honeyed tongue'], cost: 2250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.soul_scribe_quill_death', value: 0, source: 'Soul Scribe Quill' }],
  },
  {
    id: 'wondrous-soulspeaker',
    name: 'Soulspeaker',
    category: 'wondrous',
    source: "Hollow's Last Hope",
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'neck',
    price: 2400,
    weight: 0,
    description:
      'A shrunken head amulet containing an enslaved soul. Once daily, delivers a message using magic mouth spell effects. ' +
      'The owner speaks their message and activation conditions while holding the 6-inch head. The amulet\'s stitched eyes ' +
      'open during message delivery and close afterward.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['magic mouth'], cost: 1200 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.soulspeaker_message', value: 0, source: 'Soulspeaker' }],
  },
  {
    id: 'wondrous-spartoi-seeds',
    name: 'Spartoi Seeds',
    category: 'wondrous',
    source: 'Pathfinder #28: The Infernal Syndrome',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',
    price: 3300,
    weight: 0,
    description:
      'Teeth stained with ash, typically from dragons but sometimes serpents, wolves, or humans. When cast upon earth as a ' +
      'standard action, a spartolos emerges the following round under the caster\'s control. Persists 1 hour or until destroyed. ' +
      'Equipment vanishes upon destruction or after the hour. Seeds come in pouches of 2d4 teeth; up to six can be deployed ' +
      'via a single standard action.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['create undead'], cost: 1650 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.spartoi_seeds_summon', value: 0, source: 'Spartoi Seeds' }],
  },
  {
    id: 'wondrous-spectacles-of-comprehension',
    name: 'Spectacles of Comprehension',
    category: 'wondrous',
    source: "Disciple's Doctrine",
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'eyes',
    price: 2500,
    weight: 0,
    description:
      'Unmarked spectacles providing enhanced linguistic abilities. The wearer receives a +5 bonus on Linguistics checks for ' +
      'deciphering writing, detecting forgeries, library research, and examining contracts. The wearer automatically detects ' +
      'deliberate obfuscations or loopholes in contracts, though specifics may remain unclear.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['investigative mind'], cost: 1250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', target: 'skill.linguistics', value: 5, source: 'Spectacles of Comprehension', condition: { type: 'custom', params: {}, description: 'deciphering, forgeries, research, contracts' } },
    ],
  },
  {
    id: 'wondrous-spectacles-of-lip-reading',
    name: 'Spectacles of Lip Reading',
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'eyes',
    price: 3000,
    weight: 1,
    description:
      'Owl-feather-engraved eyeglasses that enable the wearer to comprehend spoken words from anyone visible who speaks ' +
      'a language the wearer knows, requiring only a DC 0 Perception check adjusted for distance and environmental conditions.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['comprehend languages'], cost: 1500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.spectacles_lip_reading', value: 0, source: 'Spectacles of Lip Reading' }],
  },
  {
    id: 'wondrous-annihilation-spectacles',
    name: 'Annihilation Spectacles',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'eyes',
    price: 25000,
    weight: 0,
    description:
      'Darkly tinted glasses enabling transmuters to spontaneously swap prepared transmutation spells of equal or lower ' +
      'levels. Once daily, the wearer can cast disintegrate as a 6th-level or higher prepared transmutation spell, even ' +
      'without knowing it.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disintegrate'], cost: 12500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.annihilation_spectacles_swap', value: 0, source: 'Annihilation Spectacles' }],
  },
  {
    id: 'wondrous-physicians-spectacles',
    name: "Physician's Spectacles",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION },
    ],
    casterLevel: 3,
    slot: 'eyes',
    price: 4900,
    weight: 0,
    description:
      'Brass-rimmed spectacles with green-tinted lenses. Provide constant awareness of poisons and diseases, functioning ' +
      'as detect poison and diagnose disease spells. The wearer can use delay poison once per day by touching a creature.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['delay poison', 'detect poison', 'diagnose disease'], cost: 2450 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.physicians_spectacles_detect', value: 0, source: "Physician's Spectacles" }],
  },
  {
    id: 'wondrous-spell-lattice',
    name: 'Spell Lattice',
    category: 'wondrous',
    source: 'Inner Sea Magic',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 17,
    slot: 'none',
    price: 1000,
    weight: 1,
    description:
      'A crystal block containing an internally etched magical spell. Spontaneous casters can cast the contained spell ' +
      'using their spell slots if it appears on their class list. Arcanists can use it as a prepared spell. Spellcasters ' +
      'with spellbooks may copy the spell as if from a scroll, which expends the lattice. Price varies by spell level ' +
      '(1st: 1,000 gp through 9th: 81,000 gp).',
    construction: { feats: ['Craft Wondrous Item', 'Scribe Scroll'], spells: [], cost: 500 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.spell_lattice_cast', value: 0, source: 'Spell Lattice' }],
  },
  {
    id: 'wondrous-spell-totem',
    name: 'Spell Totem',
    category: 'wondrous',
    source: 'Blood of the Moon',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 13,
    slot: 'none',
    price: 12000,
    weight: 0,
    description:
      'A bone charm that can hold up to 3 levels of spells as a minor ring of spell storing. When the bearer polymorphs ' +
      'into a matching animal form, they may activate one stored spell as a swift action targeting themselves. The spell ' +
      'ends immediately upon changing shape again. Can be crafted as animals or magical beasts.',
    construction: { feats: ['Craft Wondrous Item', 'Quicken Spell'], spells: ['contingency', 'imbue with spell ability'], cost: 6000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.spell_totem_polymorph', value: 0, source: 'Spell Totem' }],
  },
  {
    id: 'wondrous-spiral-tiles',
    name: 'Spiral Tiles',
    category: 'wondrous',
    source: 'Faiths of Balance',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',
    price: 6000,
    weight: 1,
    description:
      'A collection of 10 ebony, pearl, and ivory tiles. When arranged in a spiral pattern, they provide a single guidance ' +
      'spell effect per day. For worshippers of the associated deity, the tiles can be tossed as a standard action once ' +
      'daily to produce results interpretable as an augury spell. Non-worshippers receive random or misleading results.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['augury', 'guidance'], cost: 3000 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.spiral_tiles_augury', value: 0, source: 'Spiral Tiles' }],
  },
  {
    id: 'wondrous-spirit-planchette',
    name: 'Spirit Planchette',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'none',
    price: 4000,
    weight: 5,
    description:
      'A divination tool in a wooden case with a printed board of letters and numbers. Users rest fingers on the planchette ' +
      'and concentrate for 2d6 rounds while it attunes to ambient spirits. Questions receive yes, no, maybe, or single-word ' +
      'answers. Brass version (4,000 gp): 1 question, DC 11 Will; Cold iron (10,000 gp): 3 questions, DC 15; Silver ' +
      '(18,000 gp): 5 questions, DC 19. Failed saves cause confusion without answers.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['contact other plane'], cost: 2000 },
    physicalStats: { hardness: 5, hitPoints: 5, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.spirit_planchette_divination', value: 0, source: 'Spirit Planchette' }],
  },
  {
    id: 'wondrous-sporecrafters-kindness',
    name: "Sporecrafter's Kindness",
    category: 'wondrous',
    source: 'Alchemy Manual',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 1500,
    weight: 4,
    description:
      'A brown hemp sack containing mold spores, soil, and chemical reagents. When thrown as a splash weapon (10-foot range ' +
      'increment), it releases russet mold spores in a 5-foot-radius burst while summoning 1d4+1 vegepygmies in adjacent ' +
      'squares. The creatures are uncontrolled and attack nearby enemies for 5 rounds before collapsing into nonmagical ' +
      'plant matter. Single use.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['poison', "summon nature's ally III"], cost: 750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sporecrafters_kindness_summon', value: 0, source: "Sporecrafter's Kindness" }],
  },
  {
    id: 'wondrous-spy-eyes',
    name: 'Spy Eyes',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'none',
    price: 15000,
    weight: 1,
    description:
      "Cat's-eye marbles that transform into eyeballs when activated. Can be pressed against inanimate surfaces to create " +
      'magical sensors. A holder can view through any sensor in the cluster from up to 10 miles away. One bag contains five ' +
      'marbles, allowing four simultaneous deployments. Sensors can be detected through standard scrying detection methods.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['clairaudience/clairvoyance'], cost: 7500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.spy_eyes_scrying', value: 0, source: 'Spy Eyes' }],
  },
  {
    id: 'wondrous-portable-stalactite',
    name: 'Portable Stalactite',
    category: 'wondrous',
    source: 'Dungeoneer\'s Handbook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 800,
    weight: 1,
    description:
      'A 4-5 inch stone stalactite that can be tossed onto ceilings (up to 20 feet high) where it automatically adheres. ' +
      'When a living creature (except the user) passes beneath, the stalactite drops with a +10 attack roll, dealing ' +
      '1d6+1 damage. Multiple stalactites can be placed with 5 feet minimum spacing. Can be called back as a standard action. ' +
      'Detection requires DC 20 Perception; disarming requires DC 15 Disable Device.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['magic stone'], cost: 400 },
    physicalStats: { hardness: 8, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.portable_stalactite_trap', value: 0, source: 'Portable Stalactite' }],
  },
  {
    id: 'wondrous-stalagmite-seed',
    name: 'Stalagmite Seed',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',
    price: 750,
    weight: 0,
    description:
      'Magical pebbles that can be thrown (20-foot range increment) or used as sling ammunition. When striking natural stone, ' +
      'a 10-foot stalagmite emerges in the target square, dealing 5d6 piercing/bludgeoning damage to occupants. DC 14 Reflex ' +
      'save reduces damage by half and negates prone condition. Missed throws scatter like splash weapons. Single use.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['magic stone', 'stone shape'], cost: 375 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.stalagmite_seed_erupt', value: 0, source: 'Stalagmite Seed' }],
  },
  {
    id: 'wondrous-steelbone-frame',
    name: 'Steelbone Frame',
    category: 'wondrous',
    source: 'People of the River',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'body',
    price: 6000,
    weight: 35,
    description:
      'A gear-jointed metal exoskeleton that attaches to medium or heavy armor, reducing the armor\'s check penalty by 2. ' +
      'The wearer can activate it three times daily to ignore the armor\'s speed reduction for one round.',
    construction: { feats: ['Craft Wondrous Item'], spells: ["bull's strength", 'longstrider'], cost: 3000 },
    physicalStats: { hardness: 10, hitPoints: 15, breakDC: 22 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.steelbone_frame_armor', value: 0, source: 'Steelbone Frame' }],
  },
  {
    id: 'wondrous-sterling-salt',
    name: 'Sterling Salt',
    category: 'wondrous',
    source: 'Monster Hunter\'s Handbook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',
    price: 1500,
    weight: 1,
    description:
      'Magical salt that can be included as a material component in any spell. When used, the salt causes any damage from ' +
      'the enhanced spell to count as both good and silver for overcoming damage reduction and suppressing regeneration. ' +
      'Creatures vulnerable to silver suffer a -1 penalty on saves against spells augmented with this salt. Single use.',
    construction: { feats: ['Craft Wondrous Item'], spells: [], cost: 750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sterling_salt_silver', value: 0, source: 'Sterling Salt' }],
  },
  {
    id: 'wondrous-stewards-favor',
    name: "Stewards' Favor",
    category: 'wondrous',
    source: 'Andoran, Birthplace of Freedom',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'neck',
    price: 6550,
    weight: 0,
    description:
      'A wooden badge granting +4 competence bonus on Handle Animal checks and increasing enchantment spell DCs against ' +
      'animals by 2. When broken and added to boiling water, creates porridge serving up to eight Medium creatures that ' +
      'cures sickness, nausea, and poisons while providing +2 luck bonus on Will saves against fear for 24 hours.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['charm animal', "heroes' feast", 'neutralize poison', 'remove disease'], cost: 3275 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.handle_animal', value: 4, source: "Stewards' Favor" },
    ],
  },
  // ─── batch 8 gap-fills ───────────────────────────────────────────────
  {
    id: 'wondrous-stinging-stiletto',
    name: 'Stinging Stiletto',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 4500,
    weight: 0,
    description:
      'A tiny dagger with a black leather hilt and gold-inlaid striped pattern. Transforms into a necklace or ring at command. ' +
      'Grants +3 competence bonus on Perception checks and can cast ghost sound once daily. If Calistria is patron deity: ' +
      "fox's cunning once daily, and prick finger to swear vengeance oath for +1 competence on next attack against a named " +
      'target within 1 minute.',
    construction: { feats: ['Craft Wondrous Item'], spells: ["fox's cunning", 'ghost sound', 'guidance'], cost: 2250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.perception', value: 3, source: 'Stinging Stiletto' },
    ],
  },
  {
    id: 'wondrous-stone-of-alliance',
    name: 'Stone of Alliance',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',
    price: 5000,
    weight: 0,
    description:
      'A marble sphere swallowed by an animal companion, bonded mount, or familiar. Provides continuous awareness of the ' +
      "creature's distance, direction, and condition. The master can intercept one attack per round with line of sight, " +
      'and may transfer certain conditions to themselves once daily within 30 feet. Dissolves when companion or master dies.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['shield other', 'status'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.stone_of_alliance_bond', value: 0, source: 'Stone of Alliance' }],
  },
  {
    id: 'wondrous-stone-of-conjuring-earth-elementals',
    name: 'Stone of Conjuring Earth Elementals',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',
    price: 90000,
    weight: 5,
    description:
      'A roughly polished rock allowing the bearer to summon earth elementals as a full-round action. If a Huge unworked ' +
      'stone is nearby, conjures a Huge earth elemental via summon monster VI. Otherwise, creates a Large elemental through ' +
      'summon monster V. Only one elemental can be active at a time.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['summon monster V', 'summon monster VI'], cost: 45000 },
    physicalStats: { hardness: 8, hitPoints: 10, breakDC: 20 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.stone_conjure_earth_elemental', value: 0, source: 'Stone of Conjuring Earth Elementals' }],
  },
  {
    id: 'wondrous-stone-of-tomb-warding',
    name: 'Stone of Tomb Warding',
    category: 'wondrous',
    source: "Undead Slayer's Handbook",
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'none',
    price: 5000,
    weight: 1,
    description:
      'A scarab-shaped stone hung above doorways to block undead entry. Intelligent undead must make a DC 13 Will save when ' +
      'attempting passage; failure prevents retries for 24 hours, while success grants immunity for that period. ' +
      'Non-intelligent undead receive no saving throw and are completely blocked.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['command undead'], cost: 2500 },
    physicalStats: { hardness: 8, hitPoints: 5, breakDC: 15 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.stone_tomb_warding_block', value: 0, source: 'Stone of Tomb Warding' }],
  },
  {
    id: 'wondrous-canopic-stone',
    name: 'Canopic Stone',
    category: 'wondrous',
    source: 'Pathfinder #45: Broken Moon',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 12,
    slot: 'none',
    price: 28800,
    weight: 0,
    description:
      "A ceramic totem or amulet bound in silver that permanently binds a spectral vilkacis to the Material Plane. The bearer " +
      "can summon the vilkacis once daily. While it won't attack the stone's holder, it targets the nearest other creature, " +
      'attempting to possess and rampage. Summoning via this item is considered an evil act.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['create undead', 'rage'], cost: 14400 },
    physicalStats: { hardness: 5, hitPoints: 5, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.canopic_stone_summon_vilkacis', value: 0, source: 'Canopic Stone' }],
  },
  {
    id: 'wondrous-fortifying-stone',
    name: 'Fortifying Stone',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',
    price: 1000,
    weight: 0,
    description:
      'A semiprecious stone that adheres to objects weighing up to 100 pounds on command. When attached, boosts the object\'s ' +
      'hardness by 5, break DC by 5, and adds 20 hit points. The stone\'s protective hit points deplete first when damaged ' +
      'and the stone is destroyed once exhausted. A make whole spell can fully restore the stone\'s hit points. Single use.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['stoneskin'], cost: 500 },
    physicalStats: { hardness: 8, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.fortifying_stone_enhance', value: 0, source: 'Fortifying Stone' }],
  },
  {
    id: 'wondrous-missive-stone',
    name: 'Missive Stone',
    category: 'wondrous',
    source: 'Pathfinder #2: The Skinsaw Murders',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'neck',
    price: 10000,
    weight: 0,
    description:
      'Paired black stone pendants on silver chains that enable two wearers to exchange whispered messages within a 3-mile ' +
      'range. Each set consists of two stones covered in dozens of tiny arcane symbols etched in red paint. Sold as a pair.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['whispering wind'], cost: 5000 },
    physicalStats: { hardness: 8, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.missive_stone_message', value: 0, source: 'Missive Stone' }],
  },
  {
    id: 'wondrous-nightstone-of-sorrow',
    name: 'Nightstone of Sorrow',
    category: 'wondrous',
    source: 'Kobolds of Golarion',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'neck',
    price: 3300,
    weight: 2,
    description:
      'A dark stone pendant resembling scorched, pitted rock. Grants fire resistance 1 and a +1 resistance bonus against ' +
      "fear-based Will saves. When the wearer sustains 10+ fire damage in one round, a claw pattern glows. If Dahak is the " +
      "wearer's patron deity, grants daily use of shatter and voluntary claw glow activation that true dragons recognize " +
      "as Dahak's symbol.",
    construction: { feats: ['Craft Wondrous Item'], spells: ['arcane mark', 'remove fear', 'resist energy', 'shatter'], cost: 1650 },
    physicalStats: { hardness: 8, hitPoints: 3, breakDC: 15 },
    activationCategory: 'continuous',
    effects: [
      { type: 'resistance', target: 'energy.fire', value: 1, source: 'Nightstone of Sorrow' },
      { type: 'bonus', bonusType: 'resistance', target: 'save.will', value: 1, source: 'Nightstone of Sorrow', condition: { type: 'custom', params: {}, description: 'vs. fear effects only' } },
    ],
  },
  {
    id: 'wondrous-scavengers-stone',
    name: "Scavenger's Stone",
    category: 'wondrous',
    source: 'Goblins of Golarion',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',
    price: 2000,
    weight: 1,
    description:
      'An egg-shaped stone with a faint red glow when not in sunlight. Rubbing it against a damaged object as a full-round ' +
      'action restores 1d6 hit points. Smashing it against a destroyed object or damaged construct as a standard action ' +
      'repairs to full functionality or heals 10d6 damage. Can repair destroyed magic items with CL up to 3rd. Contains ' +
      '50 charges; smashing consumes 10 charges.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['make whole'], cost: 1000 },
    physicalStats: { hardness: 8, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.scavengers_stone_repair', value: 0, source: "Scavenger's Stone" }],
  },
  {
    id: 'wondrous-stormlure',
    name: 'Stormlure',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'neck',
    price: 5400,
    weight: 0,
    description:
      'A neck item crafted from air-affinity creature components. Once per day, surrounds the wearer with swirling winds for ' +
      '1 minute, providing a 50% miss chance against all ranged attacks, including rays and ranged touch spells. As a swift ' +
      'action during this duration, release crackling lightning dealing 4d6 electricity damage to all adjacent creatures ' +
      '(DC 14 Reflex half).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['lightning bolt', 'wind wall'], cost: 2700 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.stormlure_wind_lightning', value: 0, source: 'Stormlure' }],
  },
  {
    id: 'wondrous-stubborn-nail',
    name: 'Stubborn Nail',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'none',
    price: 100,
    weight: 0,
    description:
      'A 6-inch adamantine piton that can be pushed into non-living materials by hand. Once placed, it is secured as if ' +
      'hammered (DC 20 Strength to remove), though the placer can remove it with a move action. Leaves no trace when ' +
      'extracted, supports 500 pounds, increases door break DC by +2, and blocks locks. After removal, permanently ' +
      'becomes a regular iron piton with no magical properties.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['arcane lock', 'mending'], cost: 50 },
    physicalStats: { hardness: 20, hitPoints: 5, breakDC: 28 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.stubborn_nail_secure', value: 0, source: 'Stubborn Nail' }],
  },
  {
    id: 'wondrous-subtle-slippers',
    name: 'Subtle Slippers',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'feet',
    price: 5500,
    weight: 2,
    description:
      'Leather slippers that automatically adjust to fit and become nearly invisible on halflings. Leave no footprints or ' +
      'scent trail (as pass without trace). Grant +5 competence bonus to Stealth checks. Once daily, grant up to four ' +
      'allies within 30 feet the same +5 bonus for one hour; bonus deactivates if they move beyond 30 feet.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['pass without trace'], cost: 2750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 5, source: 'Subtle Slippers' },
    ],
  },
  {
    id: 'wondrous-summon-slave-crystal',
    name: 'Summon-Slave Crystal',
    category: 'wondrous',
    source: 'Champions of Corruption',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'none',
    price: 10000,
    weight: 0,
    description:
      'A thumb-sized crystalline skull carved with necromantic markings. Once daily during a summoning spell, the caster may ' +
      'attempt to possess the summoned creature as a free action, similar to magic jar but without a saving throw (spell ' +
      'resistance applies). The caster inhabits the creature\'s body until the summoning duration expires, then both minds ' +
      'return to their original bodies.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['magic jar'], cost: 5000 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.summon_slave_crystal_possess', value: 0, source: 'Summon-Slave Crystal' }],
  },
  {
    id: 'wondrous-summoner-slayer-eyes',
    name: 'Summoner Slayer Eyes',
    category: 'wondrous',
    source: 'Inner Sea Combat',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'eyes',
    price: 11000,
    weight: 1,
    description:
      'Golden-white lenses in crystal frames. The wearer perceives summoned creatures surrounded by purple glow and called ' +
      'creatures outlined in blue. Once daily, after a successful weapon hit on a summoned or called creature, the wearer ' +
      'can concentrate to banish the creature, functioning as dismissal (DC 16 Will save).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['dismissal', 'summon monster I'], cost: 5500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.summoner_slayer_eyes_banish', value: 0, source: 'Summoner Slayer Eyes' }],
  },
  {
    id: 'wondrous-summoning-shackle',
    name: 'Summoning Shackle',
    category: 'wondrous',
    source: 'Monster Summoner\'s Handbook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 11,
    slot: 'none',
    price: 5000,
    weight: 1,
    description:
      'A silver shackle inscribed with conjuration runes. When used with summoning spells of 3rd level or lower, extends ' +
      'duration as Extend Spell without added casting time. A magical chain restricts the creature to 30 feet from the ' +
      'caster, preventing teleportation escape. Functions five times daily. Dispelling the shackle terminates both the ' +
      'restriction and extended duration.',
    construction: { feats: ['Craft Wondrous Item', 'Extend Spell'], spells: ['dimensional anchor', 'summon monster I'], cost: 2500 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 20 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.summoning_shackle_extend', value: 0, source: 'Summoning Shackle' }],
  },
  {
    id: 'wondrous-suppression-gem',
    name: 'Suppression Gem',
    category: 'wondrous',
    source: 'Construct Handbook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 12,
    slot: 'none',
    price: 65000,
    weight: 0,
    description:
      'A crackling gem that sparks with electricity. When placed on a construct via touch attack, the user can issue commands ' +
      'as if they were the original creator. The construct may resist self-destructive orders with a DC 14 Will save. The ' +
      'original owner and gem user can contest control through opposed Charisma checks.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['suggestion'], cost: 32500 },
    physicalStats: { hardness: 10, hitPoints: 30, breakDC: 25 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.suppression_gem_control', value: 0, source: 'Suppression Gem' }],
  },
  {
    id: 'wondrous-swarm-bullet',
    name: 'Swarm Bullet',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',
    price: 700,
    weight: 0,
    description:
      'A brass cylinder with a honeycomb symbol that emits faint buzzing. When loaded into scatter weapons, it produces a ' +
      'wasp swarm attacking the nearest living target within 15 feet. The swarm acts on the shooter\'s turn, pursuing the ' +
      'closest living creature for 3 rounds or until destroyed. If the weapon misfires while loaded, the swarm attacks ' +
      'the wielder instead. Single use.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['vomit swarm'], cost: 350 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.swarm_bullet_summon', value: 0, source: 'Swarm Bullet' }],
  },
  // ─── batch 9 gap-fills ───────────────────────────────────────────────
  {
    id: 'wondrous-swarmlords-jar',
    name: "Swarmlord's Jar",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',
    price: 3000,
    weight: 2,
    description:
      'A magical container holding a deformed insect. When openly carried, provides +2 luck bonus on saves against swarm ' +
      'attacks and reduces swarm damage by 5. Can be shattered within 30 feet to create a locust swarm under control or ' +
      'dominate an existing swarm (DC 15 Will). Summoned swarms last 1 minute and respond to mental commands. Against ' +
      'a worm that walks, deals 6d6 damage on a successful touch attack (DC 15 Will half). Single use.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['summon swarm'], cost: 1500 },
    physicalStats: { hardness: 1, hitPoints: 2, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'luck', target: 'save.all', value: 2, source: "Swarmlord's Jar", condition: { type: 'custom', params: {}, description: 'vs. swarm attacks only; must be carried openly' } },
    ],
  },
  {
    id: 'wondrous-swordlords-cloak',
    name: "Swordlord's Cloak",
    category: 'wondrous',
    source: 'Inner Sea Combat',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION },
    ],
    casterLevel: 5,
    slot: 'shoulders',
    price: 4000,
    weight: 1,
    description:
      'An ornate shoulder garment with fur trim and golden filigree. Functions as a cloak of resistance +1, providing +1 ' +
      'resistance bonus on all saving throws. When the wearer uses the defensive parry class feature, they gain an insight ' +
      'bonus to AC matching the cloak\'s resistance bonus value. Available in +1 through +5 versions.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['anticipate peril', 'resistance'], cost: 2000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.all', value: 1, source: "Swordlord's Cloak" },
    ],
  },
  {
    id: 'wondrous-symbol-of-sanguine-protection',
    name: 'Symbol of Sanguine Protection',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'neck',
    price: 17500,
    weight: 1,
    description:
      'A silver holy symbol. The wearer can shed their own blood as a standard action (1d6 self-damage) to create divinely ' +
      'empowered blood functioning as holy water, once daily. Vials remain potent for one week. Undead and evil outsiders ' +
      'that drain the wearer\'s blood suffer 4d6 positive energy damage and become sickened for 1d4 rounds (DC 16 Will ' +
      'negates), and any benefits from consuming the blood are negated.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bless water'], cost: 8750 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.symbol_sanguine_protection', value: 0, source: 'Symbol of Sanguine Protection' }],
  },
  {
    id: 'wondrous-symbol-of-unholy-command',
    name: 'Symbol of Unholy Command',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'none',
    price: 8000,
    weight: 1,
    description:
      'A bone-carved unholy symbol granting +1 profane bonus to the DC when using the Command Undead feat. Good creatures ' +
      'with 5 HD or fewer that touch it must succeed at a DC 15 Will save or become shaken for 1 round. Using this item ' +
      'counts as an evil act.',
    construction: { feats: ['Craft Wondrous Item', 'Command Undead'], spells: ['command undead'], cost: 4000 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.symbol_unholy_command_dc', value: 0, source: 'Symbol of Unholy Command' }],
  },
  {
    id: 'wondrous-crusaders-tabard',
    name: "Crusader's Tabard",
    category: 'wondrous',
    source: 'Knights of the Inner Sea',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'body',
    price: 6000,
    weight: 2,
    description:
      "A cloth vestment worn over armor featuring the owner's heraldic symbol or device. Once daily, the wearer activates " +
      'with a command word, then spends a standard action to move at full speed and perform a single charge attack. This ' +
      'ability lasts until used or 1 minute, whichever comes first.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['haste'], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.crusaders_tabard_charge', value: 0, source: "Crusader's Tabard" }],
  },
  {
    id: 'wondrous-tablet-of-languages-lost',
    name: 'Tablet of Languages Lost',
    category: 'wondrous',
    source: 'Osirion, Legacy of Pharaohs',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',
    price: 1980,
    weight: 30,
    description:
      'A granite tablet approximately 2 feet long displaying three languages: Ancient Osiriani, Kelish, and contemporary ' +
      'Osiriani. Serves as a translation key. Daily use grants 30 minutes of reading comprehension via comprehend languages. ' +
      'Grants +3 competence bonus to Linguistics checks and allows untrained translations of the three inscribed languages ' +
      'if the owner knows at least one. Permits learning one of these languages without a teacher.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['comprehend languages'], cost: 990 },
    physicalStats: { hardness: 8, hitPoints: 15, breakDC: 22 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.linguistics', value: 3, source: 'Tablet of Languages Lost' },
    ],
  },
  {
    id: 'wondrous-tablet-of-spell-storing',
    name: 'Tablet of Spell Storing',
    category: 'wondrous',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 11,
    slot: 'none',
    price: 25000,
    weight: 3,
    description:
      'An ornate stone tablet (10 inches per side, 1 inch thick) that stores up to 3 levels of spells like a minor ring of ' +
      'spell storing. Each spell retains the caster level at which it was cast. When spells are stored, writing appears ' +
      'carved on the surface. Users activate spells exactly like scrolls, meeting scroll requirements and risking mishaps ' +
      'if caster level is too low.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['imbue with spell ability'], cost: 12500 },
    physicalStats: { hardness: 8, hitPoints: 5, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.tablet_spell_storing', value: 0, source: 'Tablet of Spell Storing' }],
  },
  {
    id: 'wondrous-tablet-of-the-first-law',
    name: 'Tablet of the First Law',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 6,
    slot: 'none',
    price: 3000,
    weight: 5,
    description:
      'A stone tablet recreating the Laws of Man from Rahadoum. Reading takes 10 minutes and produces golden light like a ' +
      'candle. The reader gains +1 bonus on Will saves against divine effects for 24 hours; only one person benefits at a ' +
      'time. Those with the Godless Healing feat can use it while reading and roll twice, choosing the better result when ' +
      'determining healing amount.',
    construction: { feats: ['Craft Wondrous Item', 'Godless Healing'], spells: ['dispel magic'], cost: 1500 },
    physicalStats: { hardness: 8, hitPoints: 10, breakDC: 20 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'save.will', value: 1, source: 'Tablet of the First Law', condition: { type: 'custom', params: {}, description: 'vs. divine effects only; requires 10 min reading' } },
    ],
  },
  {
    id: 'wondrous-talisman-of-beast-training',
    name: 'Talisman of Beast Training',
    category: 'wondrous',
    source: 'Quests and Campaigns',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 1,
    slot: 'neck',
    price: 4000,
    weight: 0,
    description:
      'A neck-worn talisman of flexible bark in an intricate pattern. The wearer can treat failed Handle Animal checks ' +
      'made during downtime periods as if they were successful. The item can convert up to 10 failed checks into successes ' +
      'before degrading into uselessness.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['charm animal'], cost: 2000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.talisman_beast_training', value: 0, source: 'Talisman of Beast Training' }],
  },
  {
    id: 'wondrous-talisman-of-soul-eating',
    name: 'Talisman of Soul-Eating',
    category: 'wondrous',
    source: 'Champions of Corruption',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'neck',
    price: 5400,
    weight: 3,
    description:
      'A carved cacodaemon skull with sharp teeth on an iron chain decorated with vertebrae. Once daily as a full-round action, ' +
      'draw life essence from a dying or dead creature and cast create soul gem. By consuming the gem as a standard action, ' +
      'the wearer frees the soul (allowing normal resurrection) and gains fast healing 2 for rounds equal to the soul\'s ' +
      'original HD. Both acts are evil.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['create soul gem'], cost: 2700 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.talisman_soul_eating_heal', value: 0, source: 'Talisman of Soul-Eating' }],
  },
  {
    id: 'wondrous-talisman-of-the-orc-mothers-fury',
    name: "Talisman of the Orc Mother's Fury",
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 4,
    slot: 'neck',
    price: 12000,
    weight: 2,
    description:
      'An amulet fashioned from dire boar tusk, twisted metal, or dark stone depicting a pregnant orc figure with blood ' +
      'stains. Grants the wearer one round of normal action after dropping below 0 HP, mimicking orc ferocity. Those with ' +
      'orc blood gain Diehard benefit instead, or an additional round if they already have that feat. Shatters upon the ' +
      'wearer\'s death.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['cure moderate wounds'], cost: 6000 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.talisman_orc_mothers_fury', value: 0, source: "Talisman of the Orc Mother's Fury" }],
  },
  {
    id: 'wondrous-beast-talisman',
    name: 'Beast Talisman',
    category: 'wondrous',
    source: 'People of the Wastes',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'neck',
    price: 18900,
    weight: 0,
    description:
      'An animal-carved charm on a leather cord. While in animal form, the wearer can expend a prepared spell or spell slot ' +
      '(up to 4th level) as a standard action to gain an enhancement bonus on all natural weapons equal to twice the spell ' +
      'level expended. This bonus lasts 5 minutes and applies to attack and damage, though it only bypasses DR/magic.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['greater magic fang'], cost: 9450 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.beast_talisman_enhance', value: 0, source: 'Beast Talisman' }],
  },
  {
    id: 'wondrous-deathbalm-talisman',
    name: 'Deathbalm Talisman',
    category: 'wondrous',
    source: 'Pathfinder Society Primer',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'neck',
    price: 5000,
    weight: 1,
    description:
      'A talisman providing +5 resistance bonus on Fortitude saves against disease or poison. When placed on someone already ' +
      'afflicted, grants an immediate save attempt to end the condition. Upon successfully saving against poison or disease, ' +
      'the item becomes inert for 24 hours. Continuous wear for a full day allows healing 1d4 points of ability damage to ' +
      'any single affected ability score.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['lesser restoration', 'neutralize poison', 'remove disease'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.fortitude', value: 5, source: 'Deathbalm Talisman', condition: { type: 'custom', params: {}, description: 'vs. disease and poison only' } },
    ],
  },
  {
    id: 'wondrous-deaths-head-talisman',
    name: "Death's Head Talisman",
    category: 'wondrous',
    source: 'Classic Horrors Revisited',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'neck',
    price: 1000,
    weight: 0,
    description:
      'An amulet granting the wearer command over animated skeletal and zombie servants. The undead must be bound during ' +
      'the amulet\'s creation. The total HD of controlled creatures equals twice the amulet\'s caster level. The wearer ' +
      'controls these creatures as if created with animate dead. Control only functions while wearing the amulet; removal ' +
      'causes the creatures to become inert. Powerless once the bound undead are destroyed. Price: 1,000-2,400 gp by HD.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate dead'], cost: 625 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.deaths_head_talisman_control', value: 0, source: "Death's Head Talisman" }],
  },
  {
    id: 'wondrous-lesser-talisman',
    name: 'Lesser Talisman',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'neck',
    price: 50,
    weight: 1,
    description:
      'Neck-slot amulets inscribed with secret names of the four winds that provide specific protective magical effects. ' +
      'A lesser talisman carries only enough energy to protect its wearer once, then crumbles to dust. Up to three ' +
      'talismans can be worn together on one cord or chain, though only one effect activates at a time. Available in ' +
      'many varieties (Beneficial Winds, Akoben, Arrow Protection, etc.) at varying prices.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['feather fall'], cost: 25 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.lesser_talisman_single_use', value: 0, source: 'Lesser Talisman' }],
  },
  {
    id: 'wondrous-greater-talisman',
    name: 'Greater Talisman',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'neck',
    price: 500,
    weight: 1,
    description:
      'Functions as a lesser talisman of the same type but with much greater longevity. It can provide its benefits once ' +
      'per day rather than being single-use. Available in many varieties (Beneficial Winds, Akoben, Ankh, Life\'s Breath, ' +
      'etc.) at varying prices from 500 gp to 35,000 gp depending on type.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['feather fall'], cost: 250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.greater_talisman_daily_use', value: 0, source: 'Greater Talisman' }],
  },
  {
    id: 'wondrous-melancholic-talisman',
    name: 'Melancholic Talisman',
    category: 'wondrous',
    source: 'Book of the Damned',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 18,
    slot: 'neck',
    price: 50000,
    weight: 0,
    description:
      'Enables the wearer to conjure a hellmouth, a monstrous semiliving portal connecting two regions of Hell. Connected ' +
      'to two specific Hell layers determined upon creation. The user can activate either end once daily, creating a ' +
      '10-foot-square portal functioning like the gate spell. The portal remains open for up to 10 minutes or until ' +
      'dismissed. If the wearer remains in Hell beyond 10 minutes, the hellmouth closes, trapping them.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['gate'], cost: 25000 },
    physicalStats: { hardness: 5, hitPoints: 5, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.melancholic_talisman_hellmouth', value: 0, source: 'Melancholic Talisman' }],
  },
  {
    id: 'wondrous-sanguine-talisman',
    name: 'Sanguine Talisman',
    category: 'wondrous',
    source: 'Book of the Damned',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'neck',
    price: 67500,
    weight: 0,
    description:
      'A devil talisman that binds a fiend within. Grants a profane bonus to AC equal to 1 plus an additional 1 for every ' +
      '5 HD the bound devil has (max +5). The wearer maintains telepathic communication with the bound devil and can ' +
      'attempt once per day an opposed Charisma check to summon the devil for a number of rounds equal to its CR. ' +
      'Price varies by CR of the bound devil.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['gate', 'planar binding'], cost: 33750 },
    physicalStats: { hardness: 5, hitPoints: 5, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'profane', target: 'combat.ac', value: 2, source: 'Sanguine Talisman', condition: { type: 'custom', params: {}, description: 'AC bonus varies by bound devil HD' } },
    ],
  },
  {
    id: 'wondrous-animal-totem-tattoo',
    name: 'Animal Totem Tattoo',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 12000,
    weight: 0,
    description:
      'A magical tattoo granting the bearer the totem transformation ability of a 5th-level druid with a corresponding ' +
      'animal shaman archetype. Available totems include ape, bat, bear, boar, dragon, eagle, lion, saurian, serpent, ' +
      'shark, and wolf. If the bearer already possesses the matching totem transformation, they gain +5 effective level.',
    construction: { feats: ['Inscribe Magical Tattoo'], spells: ['beast shape I'], cost: 6000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.animal_totem_tattoo_transform', value: 0, source: 'Animal Totem Tattoo' }],
  },
  {
    id: 'wondrous-casters-tattoo',
    name: "Caster's Tattoo",
    category: 'wondrous',
    source: 'Inner Sea Magic',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',
    price: 6000,
    weight: 0,
    description:
      'An enchanted tattoo containing stored magical potential. Once daily as a swift action, automatically applies both ' +
      'Still Spell and Silent Spell metamagic feats to the next spell cast that round. Material components must be possessed ' +
      'but need not be held. Three versions: lesser (up to 3rd-level, 6,000 gp), normal (up to 6th-level, 21,000 gp), ' +
      'greater (up to 9th-level, 48,000 gp).',
    construction: { feats: ['Inscribe Magical Tattoo', 'Silent Spell', 'Still Spell'], spells: [], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.casters_tattoo_metamagic', value: 0, source: "Caster's Tattoo" }],
  },
  // ─── batch 10 gap-fills ──────────────────────────────────────────────
  {
    id: 'wondrous-kins-face-tattoo',
    name: "Kin's Face Tattoo",
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'none',
    price: 1600,
    weight: 0,
    description:
      'A tattoo of thousands of hair-fine lines of ink and carefully incised scars creating a topographic appearance on ' +
      'the bearer\'s face. When activated, grants the ability to assume a different appearance (as disguise self) limited ' +
      'to specific half-orc, human, or orc forms. Lasts up to 5 hours daily in 1-hour increments.',
    construction: { feats: ['Inscribe Magical Tattoo'], spells: ['disguise self'], cost: 800 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.kins_face_tattoo_disguise', value: 0, source: "Kin's Face Tattoo" }],
  },
  {
    id: 'wondrous-mesmerizing-tattoo',
    name: 'Mesmerizing Tattoo',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',
    price: 10800,
    weight: 0,
    description:
      'A spiraling shadowy tattoo on one arm. When visible, grants +2 circumstance bonus to Diplomacy checks. Reduces ' +
      'Will save DCs by 1 and imposes -1 penalty on saves when the wearer uses hypnotism, casts single-target enchantment ' +
      'spells, or activates a hypnotic stare ability. This is a mind-affecting effect.',
    construction: { feats: ['Inscribe Magical Tattoo'], spells: ['suggestion'], cost: 5400 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'circumstance', target: 'skill.diplomacy', value: 2, source: 'Mesmerizing Tattoo' },
    ],
  },
  {
    id: 'wondrous-penumbra-tattoo',
    name: 'Penumbra Tattoo',
    category: 'wondrous',
    source: 'Blood of Shadows',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',
    price: 24000,
    weight: 0,
    description:
      'A magical scar containing shadowstuff that shifts and writhes within the bearer\'s skin. When exposed to illumination ' +
      'brighter than dim light, it releases a dusky haze that provides the benefits of protective penumbra, shielding the ' +
      'bearer from sunlight-related vulnerabilities.',
    construction: { feats: ['Inscribe Magical Tattoo'], spells: ['protective penumbra'], cost: 12000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.penumbra_tattoo_shade', value: 0, source: 'Penumbra Tattoo' }],
  },
  {
    id: 'wondrous-radiant-tattoo',
    name: 'Radiant Tattoo',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',
    price: 1500,
    weight: 0,
    description:
      'A colorful sunburst tattoo. When activated via command word, flares with brilliant light affecting a single adjacent ' +
      'enemy. Target must succeed at DC 15 Reflex or be blinded for 1d4 rounds; success results in dazzled for 1d4 rounds. ' +
      'Creatures with light blindness/sensitivity are blinded for 2d4 rounds or dazzled for 2d4 rounds on success. The ' +
      'tattoo vanishes after activation. Single use.',
    construction: { feats: ['Inscribe Magical Tattoo'], spells: ['daylight'], cost: 750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.radiant_tattoo_blind', value: 0, source: 'Radiant Tattoo' }],
  },
  {
    id: 'wondrous-serpentine-tattoo',
    name: 'Serpentine Tattoo',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 1,
    slot: 'none',
    price: 2000,
    weight: 0,
    description:
      'A tattoo that appears animated when the bearer flexes muscles. Grants three daily uses: after successfully hitting ' +
      'with a monk weapon, performance weapon, or unarmed strike, the tattoo lunges like a snake, granting an immediate ' +
      'action dirty trick maneuver without provoking attacks of opportunity.',
    construction: { feats: ['Improved Dirty Trick', 'Inscribe Magical Tattoo'], spells: ['summon monster I'], cost: 1000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.serpentine_tattoo_dirty_trick', value: 0, source: 'Serpentine Tattoo' }],
  },
  {
    id: 'wondrous-spell-tattoo',
    name: 'Spell Tattoo',
    category: 'wondrous',
    source: 'Inner Sea Magic',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.UNIVERSAL }],
    casterLevel: 1,
    slot: 'none',
    price: 100,
    weight: 0,
    description:
      'A wearable scroll inscribed on the bearer\'s skin rather than parchment. Appears as colorful, intricate patterns. ' +
      'The wearer silently activates through touch; the tattoo disappears upon use. Activation requires visibility and ' +
      'direct contact. Typically placed on arms or hands. Price is four times the equivalent scroll cost. Single use.',
    construction: { feats: ['Inscribe Magical Tattoo'], spells: [], cost: 50 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.spell_tattoo_cast', value: 0, source: 'Spell Tattoo' }],
  },
  {
    id: 'wondrous-swirling-smoke-tattoo',
    name: 'Swirling Smoke Tattoo',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',
    price: 12500,
    weight: 0,
    description:
      'Generates a continuous haze of odorless, shadowy smoke around the wearer\'s limbs. When struck by melee or ranged ' +
      'attacks, or after failing a Reflex save, activate as an immediate action to create a mist screen imposing 20% miss ' +
      'chance on incoming attacks. The wearer can also reroll failed Reflex saves with a +4 bonus. Functions three times daily.',
    construction: { feats: ['Inscribe Magical Tattoo'], spells: ['blur'], cost: 6250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.swirling_smoke_tattoo_miss', value: 0, source: 'Swirling Smoke Tattoo' }],
  },
  {
    id: 'wondrous-viper-tattoo',
    name: 'Viper Tattoo',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 18000,
    weight: 0,
    description:
      'A tattoo of a coiled serpent. Once daily as a standard action, touch the visible tattoo to animate an actual viper ' +
      "that appears in the bearer's space and acts immediately. The viper obeys commands for up to 5 rounds, uses the " +
      "bearer's base attack bonus, and its poison DC equals 10 + half bearer's level + Con modifier. Can be withdrawn " +
      'as a swift action.',
    construction: { feats: ['Inscribe Magical Tattoo'], spells: ["summon nature's ally I"], cost: 9000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.viper_tattoo_summon', value: 0, source: 'Viper Tattoo' }],
  },
  {
    id: 'wondrous-teleporting-climbing-rig',
    name: 'Teleporting Climbing Rig',
    category: 'wondrous',
    source: "Dungeoneer's Handbook",
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',
    price: 7600,
    weight: 7,
    description:
      'A mithral grappling hook with runic decorations attached to 50 feet of silk rope tied to a thick iron ring. Three ' +
      'times daily, speaking a command word while holding the ring teleports the hook to any designated location within ' +
      '50 feet with line of sight and line of effect. The rope must be held only at the iron ring for teleportation. If ' +
      'the destination lacks an attachment point, the hook falls.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['dimension door'], cost: 3800 },
    physicalStats: { hardness: 15, hitPoints: 10, breakDC: 22 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.teleporting_climbing_rig', value: 0, source: 'Teleporting Climbing Rig' }],
  },
  {
    id: 'wondrous-thoqqua-snake',
    name: 'Thoqqua Snake',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 750,
    weight: 0,
    description:
      'A magical firework that produces smoke like a smokestick and expands into an ash tube. After one round, transforms ' +
      "into a thoqqua creature that fights the user's enemies. If the wielder speaks Ignan, they can control the creature's " +
      'actions. The summoned thoqqua remains for up to 5 rounds or until reduced to 0 HP, then crumbles to nonmagical ash. ' +
      'Single use.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['summon monster III'], cost: 375 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.thoqqua_snake_summon', value: 0, source: 'Thoqqua Snake' }],
  },
  {
    id: 'wondrous-threshold-guardian',
    name: 'Threshold Guardian',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 12,
    slot: 'none',
    price: 66000,
    weight: 2,
    description:
      'A wreath of garlic, wolfsbane, silver, and mandrake that blocks specified creature types from passing through doorways. ' +
      'The user concentrates 10 minutes to designate a creature type from the ranger favored enemies list. Creatures ' +
      'attempting to cross must succeed at DC 19 Will or be unable to pass. Effect persists until removed or destroyed ' +
      '(hardness 5, 10 HP). Only the placer can touch it without a DC 19 Will save.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['antilife shell', 'forbiddance'], cost: 33000 },
    physicalStats: { hardness: 5, hitPoints: 10, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.threshold_guardian_ward', value: 0, source: 'Threshold Guardian' }],
  },
  {
    id: 'wondrous-thunder-fang',
    name: 'Thunder Fang',
    category: 'wondrous',
    source: 'People of the North',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',
    price: 38312,
    weight: 6,
    description:
      "A metal +1 klar designed like a storm roc's head. Provides electricity resistance 5. Shield bash attacks deal " +
      'additional 1d6 sonic damage. Critical hits unleash a thunderclap that deafens the target for 1 minute (DC 16 Fort ' +
      'negates). When combined with a roc\'s thunder weapon and the Thunder and Fang feat, each weapon deals +1d6 ' +
      'electricity damage and failed save targets are pushed back 10 feet and knocked prone.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['lightning bolt', 'resist energy', 'sound burst'], cost: 19312 },
    physicalStats: { hardness: 10, hitPoints: 20, breakDC: 25 },
    activationCategory: 'continuous',
    effects: [
      { type: 'resistance', target: 'energy.electricity', value: 5, source: 'Thunder Fang' },
    ],
  },
  {
    id: 'wondrous-thunder-strap',
    name: 'Thunder Strap',
    category: 'wondrous',
    source: 'Heroes of the Wild',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',
    price: 60000,
    weight: 0,
    description:
      'A weathered leather strap strong as steel. When bound to a melee weapon\'s grip for 24 hours, it activates. Two ' +
      'daily abilities: hold the weapon aloft for 1 minute to create thunderstorms via control weather (thunderstorms ' +
      'only), and cast call lightning storm once per day as if conditions were already stormy when used outdoors.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['call lightning storm', 'control weather'], cost: 30000 },
    physicalStats: { hardness: 5, hitPoints: 5, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.thunder_strap_weather', value: 0, source: 'Thunder Strap' }],
  },
  {
    id: 'wondrous-thundering-collar',
    name: 'Thundering Collar',
    category: 'wondrous',
    source: 'Animal Archive',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'neck',
    price: 4800,
    weight: 1,
    description:
      'A copper wire torc with red-stained dog paw terminals. Three times daily, the wearer emits a thunderous growl. ' +
      'Creatures within 15 feet must make a DC 12 Will save to attack enemies, similar to sanctuary. The wearer may extend ' +
      'this effect to one adjacent ally, lasting 3 rounds or until anyone affected attacks.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['ghost sound', 'sanctuary'], cost: 2400 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.thundering_collar_sanctuary', value: 0, source: 'Thundering Collar' }],
  },
  {
    id: 'wondrous-tidefinder',
    name: 'Tidefinder',
    category: 'wondrous',
    source: 'Aquatic Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',
    price: 2000,
    weight: 0,
    description:
      'A spherical blood coral compass with dual needles. The outer needle locates the nearest tide or current within 1 mile, ' +
      'shifting from red (within 30 feet) to violet (nearly 1 mile). The inner needle indicates current direction and ' +
      'changes color based on speed: red for extreme turbulence (up to 200 ft/round) through violet for gentle flow ' +
      '(under 5 ft/round).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['locate object', 'slipstream'], cost: 1000 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.tidefinder_locate_current', value: 0, source: 'Tidefinder' }],
  },
  {
    id: 'wondrous-tillers-pendant',
    name: "Tiller's Pendant",
    category: 'wondrous',
    source: 'Taldor, Echoes of Glory',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 3,
    slot: 'none',
    price: 6400,
    weight: 0,
    description:
      'A cluster of emeralds on a golden clasp arranged like a five-petaled blossom. Does not occupy an item slot. Provides ' +
      '+4 competence bonus on Disguise and Stealth checks while visible. Once daily, the command word causes the emeralds to ' +
      'resemble a living flower and creates 2d4 goodberry effect berries that restore 1 HP each and provide sustenance.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disguise self', 'goodberry'], cost: 3200 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.disguise', value: 4, source: "Tiller's Pendant" },
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 4, source: "Tiller's Pendant" },
    ],
  },
  {
    id: 'wondrous-toastmasters-teacup',
    name: "Toastmaster's Teacup",
    category: 'wondrous',
    source: 'Alchemy Manual',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 5000,
    weight: 0,
    description:
      'A porcelain cup that allows poisoners to conceal ingested toxins. When poison is placed inside and a command word ' +
      'spoken, the cup absorbs it undetectably. A second command word releases the poison back into any liquid held within ' +
      'the vessel.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['nondetection', 'poison'], cost: 2500 },
    physicalStats: { hardness: 1, hitPoints: 2, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.toastmasters_teacup_poison', value: 0, source: "Toastmaster's Teacup" }],
  },
  {
    id: 'wondrous-mother-sphinx-token',
    name: 'Mother-Sphinx Token',
    category: 'wondrous',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',
    price: 9000,
    weight: 0,
    description:
      'A wooden disk depicting a mother-sphinx, a symbol of Absalom representing knowledge and arcane power. Once daily, ' +
      'designate an enemy within 100 feet and speak a command word. Any spells cast in the next 2 rounds that target the ' +
      'designated enemy are affected as if under arcane concordance.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['arcane concordance'], cost: 4500 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.mother_sphinx_token_concordance', value: 0, source: 'Mother-Sphinx Token' }],
  },
  {
    id: 'wondrous-shield-token',
    name: 'Shield Token',
    category: 'wondrous',
    source: 'Pathfinder Society Primer',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9,
    slot: 'none',
    price: 22000,
    weight: 0,
    description:
      'A small bronze token shaped like a heavy shield with an image of a snake eating its own tail encircling seven eggs. ' +
      'Once daily as a standard action, touch and select an ally within 30 feet. Both the wielder and ally gain either ' +
      '+2 competence bonus on attack rolls or +2 deflection bonus to AC for 10 rounds. The benefit is chosen when ' +
      'activated and cannot be changed during its duration.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['battlemind link', 'bless'], cost: 11000 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 20 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.shield_token_shared_bonus', value: 0, source: 'Shield Token' }],
  },
];
