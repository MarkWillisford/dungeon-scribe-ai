import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsRZFill1: WondrousItemDefinition[] = [
  // ─── Batch 1 deferred ──────────────────────────────────────────────
  {
    id: 'wondrous-radiant-panel',
    name: 'Radiant Panel',
    category: 'wondrous',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',
    price: 12000,
    weight: 0,
    description:
      'A glass cube with carved indents that generates hard light sheets (5 ft wide) when activated. Each sheet blocks one ' +
      'edge of a 5-ft square, providing total cover. Sheets have hardness 10 and 30 HP; force effects pass through. ' +
      'Horizontal sheets support up to 500 lbs. Anchors the cube in place (DC 22 Strength to move). Sheets persist 1 min; ' +
      'up to 5 daily. Dismissible as a standard action.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['floating disk'], cost: 6000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.radiant_panel_hard_light', value: 0, source: 'Radiant Panel' }],
  },
  {
    id: 'wondrous-ranged-piton',
    name: 'Ranged Piton',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 800,
    weight: 1,
    description:
      'A metallic piton with a ring attachment that can be launched as easily as an arrow. Fired at a target with a ranged ' +
      'attack against AC 5, it adheres to surfaces. Recovered by speaking a command word while pulling the ring. Rope can ' +
      'be threaded through the ring before firing to rapidly establish rope lines.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['spider climb'], cost: 400 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.ranged_piton_launch', value: 0, source: 'Ranged Piton' }],
  },
  {
    id: 'wondrous-reapers-wisdom',
    name: "Reaper's Wisdom",
    category: 'wondrous',
    source: 'Dirty Tactics Toolbox',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 11,
    slot: 'shoulders',
    price: 21600,
    weight: 1,
    description:
      'A jade-encrusted ironwood pauldron that enhances poison virulence. Once per day, the wearer can magically enhance a ' +
      'poison dose, making it immune to delay poison effects while maintaining its original DC and vulnerability to ' +
      'neutralize poison.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['overwhelming poison'], cost: 10800 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.reapers_wisdom_poison_enhance', value: 0, source: "Reaper's Wisdom" }],
  },
  {
    id: 'wondrous-redemptors-blessing',
    name: "Redemptor's Blessing",
    category: 'wondrous',
    source: 'Faiths and Philosophies',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'none',
    price: 9000,
    weight: 0,
    description:
      'A soapstone holy symbol that calms nearby creatures when used to channel positive energy for healing. Healed ' +
      'creatures must make a DC 13 Will save or become affected by calm emotions, persisting while the user brandishes ' +
      'the symbol and maintains concentration. Ends if anyone attacks a calmed creature.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['calm emotions'], cost: 4500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.redemptors_blessing_calm', value: 0, source: "Redemptor's Blessing" }],
  },
  {
    id: 'wondrous-regression-mine',
    name: 'Regression Mine',
    category: 'wondrous',
    source: 'Technology Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 10,
    slot: 'none',
    price: 1500,
    weight: 2,
    description:
      'A metal plate that delivers a mind-affecting curse when armed and deployed. Once triggered, creates a 20-ft-radius ' +
      'field lasting 1 minute. Creatures in the field become confused and suffer -4 Intelligence while present and for ' +
      '1 minute after leaving. DC 15 save negates, with repeated saves each round. Single-use. Disable Device DC 30.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['confusion'], cost: 750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.regression_mine_confusion', value: 0, source: 'Regression Mine' }],
  },
  {
    id: 'wondrous-relic-of-a-virtuous-emperor',
    name: 'Relic of a Virtuous Emperor',
    category: 'wondrous',
    source: 'Dragon Empires Gazetteer',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 17,
    slot: 'none',
    price: 87000,
    weight: 1,
    description:
      'Grants augury 3/day and summon nature\'s ally V 1/day (one kodama or 1d4+1 shikigami). The wielder also receives ' +
      'a +1 insight bonus to AC.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['augury', 'foresight', "summon nature's ally V"], cost: 43500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'insight', target: 'ac', value: 1, source: 'Relic of a Virtuous Emperor' },
    ],
  },
  {
    id: 'wondrous-resilient-ore',
    name: 'Resilient Ore',
    category: 'wondrous',
    source: "Faiths of Purity",
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'neck',
    price: 4200,
    weight: 5,
    description:
      'A lumpy piece of unforged iron that resisted shaping during smelting. Grants fire resistance 1 and +1 resistance ' +
      'bonus on Will saves. Worshipers of the associated deity may cast chill metal once daily and use mending at will ' +
      'on small metallic items.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['chill metal', 'mending', 'resistance', 'resist energy'], cost: 2100 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'resistance', target: 'energy_resistance', value: 1, source: 'Resilient Ore', condition: { type: 'custom', params: { descriptor: 'fire' }, description: 'fire resistance 1' } },
      { type: 'bonus', bonusType: 'resistance', target: 'save.will', value: 1, source: 'Resilient Ore' },
    ],
  },
  {
    id: 'wondrous-sandsculpt-resin',
    name: 'Sandsculpt Resin',
    category: 'wondrous',
    source: 'People of the Sands',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 500,
    weight: 1,
    description:
      'Amber-colored resin between vellum sheets that allows hand-sculpting of sand similar to stone shape. Shape up to ' +
      '15 cubic feet at 1 minute per cubic foot. Unstable formations collapse after an hour; sturdy shapes persist ' +
      'indefinitely. Lasts until 15 cubic feet are sculpted or 1 hour passes.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['stone shape'], cost: 250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sandsculpt_resin_shape', value: 0, source: 'Sandsculpt Resin' }],
  },
  {
    id: 'wondrous-restless-lockpicks',
    name: 'Restless Lockpicks',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 8000,
    weight: 1,
    description:
      'Mithral masterwork thieves\' tools that animate during use. When the bearer initiates a disarm attempt on a trap ' +
      'or device as a standard action, the tools continue on their own without being held. Uses bearer\'s Disable Device ' +
      'bonus +2 masterwork. Animates up to 10 rounds/day; can take 10 but not 20.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['knock', 'mage hand'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.restless_lockpicks_animate', value: 0, source: 'Restless Lockpicks' }],
  },
  {
    id: 'wondrous-retriever-drone',
    name: 'Retriever Drone',
    category: 'wondrous',
    source: "Pathfinder #75: Demon's Heresy",
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'none',
    price: 8000,
    weight: 5,
    description:
      'A preserved spider the size of a house cat with gemstone eyes. Allows spellcasters to usurp control of a retriever ' +
      'within 30 ft. Requires line of sight and concentration with both hands. Retrievers attempt DC 16 Will save to resist ' +
      '(+8 if on retrieval mission). Chaotic evil users gain permanent control; others 24 hours. 1d4 Con damage if drone ' +
      'destroyed during active scrying.',
    construction: { feats: ['Craft Construct', 'Craft Wondrous Item'], spells: ['greater planar binding', 'scrying'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.retriever_drone_control', value: 0, source: 'Retriever Drone' }],
  },
  {
    id: 'wondrous-ring-of-the-cacodaemon',
    name: 'Ring of the Cacodaemon',
    category: 'wondrous',
    source: 'Book of the Damned',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 8,
    slot: 'ring',
    price: 15000,
    weight: 0,
    description:
      'A golden ring shaped like a cacodaemon holding a soul gem between its horns. The wearer can interrogate the trapped ' +
      'soul once daily via telepathic communication similar to speak with dead, and once per day project the soul\'s final ' +
      'tormented moments to create a fear effect in a cone.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fear', 'speak with dead'], cost: 7500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.ring_cacodaemon_soul_gem', value: 0, source: 'Ring of the Cacodaemon' }],
  },
  {
    id: 'wondrous-riverseer-plate',
    name: 'Riverseer Plate',
    category: 'wondrous',
    source: "Pirates of the Inner Sea",
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',
    price: 5000,
    weight: 0,
    description:
      'A 12-inch green glass disc displaying an acid-etched boat image. When placed on a waterborne vessel\'s deck, reveals ' +
      'nearby water hazards as glowing green silhouettes within 300 ft, granting +6 competence bonus on sailing checks. ' +
      'Once daily, applying blood enables a 5-minute mode marking Small or larger animate creatures as red dots.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['detect animals or plants', 'riversight'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.profession_sailor', value: 6, source: 'Riverseer Plate' },
    ],
  },

  // ─── Batch 2 deferred ──────────────────────────────────────────────
  {
    id: 'wondrous-robe-of-the-master-of-masters',
    name: 'Robe of the Master of Masters',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 7,
    slot: 'body',
    price: 2300,
    weight: 3,
    description:
      'A fine silk Vudrani-style robe that adjusts its hue as a full-round action. Grants +2 competence bonus to Perform ' +
      '(dance). Irori worshippers gain 1/day haste (1 round) via a wrist button and a healing dance lasting 5 minutes ' +
      'restoring 1 HP to up to 7 allies within 30 ft.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['cure light wounds', 'disguise self', 'haste'], cost: 1150 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.perform', value: 2, source: 'Robe of the Master of Masters', condition: { type: 'custom', params: {}, description: 'Perform (dance) only' } },
    ],
  },
  {
    id: 'wondrous-robe-of-the-resplendent-thespian',
    name: 'Robe of the Resplendent Thespian',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 16,
    slot: 'body',
    price: 75000,
    weight: 1,
    description:
      'These garments disguise the presence of armor as normal clothing (as glamered armor). When worn by a bard, the robe ' +
      'provides SR 18, +4 resistance bonus on all saves, and +2 enhancement bonus on CL checks to overcome SR.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['antimagic field', 'break enchantment', 'greater heroism', 'veil'], cost: 37500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'resistance', target: 'sr', value: 18, source: 'Robe of the Resplendent Thespian' },
      { type: 'bonus', bonusType: 'resistance', target: 'save.all', value: 4, source: 'Robe of the Resplendent Thespian' },
      { type: 'bonus', bonusType: 'enhancement', target: 'special.caster_level_sr_check', value: 2, source: 'Robe of the Resplendent Thespian' },
    ],
  },
  {
    id: 'wondrous-anaphexis-robe',
    name: 'Anaphexis Robe',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 10,
    slot: 'body',
    price: 16000,
    weight: 1,
    description:
      'Deep purple garment mimicking Pharasmin religious dress. Wearers communicate telepathically with others in identical ' +
      'robes or carrying Norgorber\'s unholy symbol within 100 ft (shared language required). +10 circumstance to disguise ' +
      'as a Pharasma monk and conceal weapons via Sleight of Hand. 1/day, death attack users reduce study rounds by one.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['message', 'slay living'], cost: 8000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'circumstance', target: 'skill.disguise', value: 10, source: 'Anaphexis Robe', condition: { type: 'custom', params: {}, description: 'disguise as Pharasma monk only' } },
      { type: 'bonus', bonusType: 'circumstance', target: 'skill.sleight_of_hand', value: 10, source: 'Anaphexis Robe', condition: { type: 'custom', params: {}, description: 'weapon concealment only' } },
    ],
  },
  {
    id: 'wondrous-hamatulatsu-robe',
    name: 'Hamatulatsu Robe',
    category: 'wondrous',
    source: 'Inner Sea Combat',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 10,
    slot: 'body',
    price: 14000,
    weight: 1,
    description:
      'Crimson silk robe embroidered with golden pentagrams and fiendish symbols. Evil monks gain AC and unarmed damage ' +
      'as if 5 levels higher (max 20). Evil non-monks gain 5th-level monk AC and unarmed damage without Wisdom modifier. ' +
      'Hamatulatsu feat users gain extended sickened effects (2 rounds); those without the feat acquire it while wearing.',
    construction: { feats: ['Craft Wondrous Item', 'Hamatulatsu'], spells: ['righteous might', 'unholy blight'], cost: 7000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'bonus', target: 'special.monk_effective_level', value: 5, source: 'Hamatulatsu Robe', condition: { type: 'custom', params: {}, description: 'evil monks only' } }],
  },
  {
    id: 'wondrous-liars-robe',
    name: "Liar's Robe",
    category: 'wondrous',
    source: 'Villain Codex',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'body',
    price: 4180,
    weight: 6,
    description:
      'A burlap robe with red velvet interior. When worn inside out, enshrouds the wearer in a shifting array of colors, ' +
      'features, and faces. Disguise effect lasts 1 hour and can be toggled. Viewers require true seeing or similar magic ' +
      'to pierce the disguise. Voice and scent are also distorted.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['alter self'], cost: 2090 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.liars_robe_disguise', value: 0, source: "Liar's Robe" }],
  },
  {
    id: 'wondrous-smugglers-collapsible-robe',
    name: "Smuggler's Collapsible Robe",
    category: 'wondrous',
    source: 'Ultimate Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'body',
    price: 48000,
    weight: 1,
    description:
      'Ordinary wool robe with hood containing extradimensional space. When activated, the wearer and non-living objects ' +
      'up to max load are sucked into the space, leaving the robe collapsed as discarded clothing. Appears non-magical. ' +
      'Wearer can breathe 24 hours inside and see surroundings. Exit as a free action. If insufficient space, wearer ' +
      'remains trapped. Destruction or 24 hours causes reappearance, dazed 1 round.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['secret chest', 'magic aura', 'arcane eye'], cost: 24000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.smugglers_robe_extradimensional', value: 0, source: "Smuggler's Collapsible Robe" }],
  },
  {
    id: 'wondrous-summoners-robe',
    name: "Summoner's Robe",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 17,
    slot: 'body',
    price: 50000,
    weight: 5,
    description:
      'Astral Plane-colored silk garment. Once per day, absorb a summoned creature instead of having it appear normally. ' +
      'The absorbed creature becomes a defensive aura granting abilities based on creature type (comparable to polymorph ' +
      'spells). Ends if wearer takes sufficient damage (5 HP per spell level), enters an incompatible area, or spell ' +
      'duration expires.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['summon monster IX'], cost: 25000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.summoners_robe_absorb', value: 0, source: "Summoner's Robe" }],
  },
  {
    id: 'wondrous-robes-of-lead',
    name: 'Robes of Lead',
    category: 'wondrous',
    source: 'Book of the Damned',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 15,
    slot: 'body',
    price: 65000,
    weight: 900,
    description:
      'Massive armor suits with diabolical runes and profane symbols designed for ayngavhaul devils. Grant +6 armor bonus ' +
      'and +2 profane bonus to AC, plus +10 SR against spells from good-aligned divine casters. Non-ayngavhauls suffer ' +
      'the 900-lb weight penalty. Non-evil wearers gain one negative level until removal.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['unholy aura'], cost: 32500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'armor', target: 'ac', value: 6, source: 'Robes of Lead' },
      { type: 'bonus', bonusType: 'profane', target: 'ac', value: 2, source: 'Robes of Lead' },
    ],
  },
  {
    id: 'wondrous-robes-of-the-defender',
    name: 'Robes of the Defender',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 16,
    slot: 'body',
    price: 164000,
    weight: 1,
    description:
      'Provides +5 armor bonus to AC and SR 20. Casts all abjuration spells at +1 caster level. Two pockets function ' +
      'as handy haversacks. Grants energy resistance 10 for a chosen energy type, changeable once daily as a standard action.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['mage armor', 'protection from spells', 'resist energy', 'secret chest'], cost: 82000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'armor', target: 'ac', value: 5, source: 'Robes of the Defender' },
      { type: 'resistance', target: 'sr', value: 20, source: 'Robes of the Defender' },
    ],
  },
  {
    id: 'wondrous-robes-of-the-summit',
    name: 'Robes of the Summit',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'body',
    price: 15000,
    weight: 1,
    description:
      'These layered white and gray robes grant the wearer a +5 competence bonus on Climb checks, immunity to altitude ' +
      'sickness, and the ability to traverse steep slopes and sheer surfaces as if under spider climb for up to 10 ' +
      'minutes per day (usable in 1-minute increments).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['spider climb', 'endure elements'], cost: 7500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.climb', value: 5, source: 'Robes of the Summit' },
    ],
  },
  {
    id: 'wondrous-paupers-robes',
    name: "Pauper's Robes",
    category: 'wondrous',
    source: 'Ultimate Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'body',
    price: 2400,
    weight: 4,
    description:
      'Filthy brown robes that make it difficult for others to recall details about the wearer. Creatures must succeed ' +
      'at Will saves (DC 13 for general details like gender/race; DC 16 for specifics like names). Memory-fogging ends ' +
      'for 24 hours if the wearer attacks. As a standard action, carried valuables appear worthless (DC 13 Will to see through).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disguise self', 'memory lapse'], cost: 1200 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.paupers_robes_memory_fog', value: 0, source: "Pauper's Robes" }],
  },
  {
    id: 'wondrous-razored-ropes',
    name: 'Razored Ropes',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 8301,
    weight: 3,
    description:
      'A +1 lasso made of tightly braided lengths of fine chain. Functions as an entangling weapon dealing 1d4 damage to ' +
      'creatures failing to escape (DC 18 Escape Artist, DC 28 Strength). Gorum patrons can activate constriction for ' +
      'additional 1d4 damage; non-patrons suffer backlash.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate rope'], cost: 4150 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'damage', target: 'special.razored_ropes_entangle', value: 0, source: 'Razored Ropes' }],
  },
  {
    id: 'wondrous-roseskin-comb',
    name: 'Roseskin Comb',
    category: 'wondrous',
    source: 'Merchant\'s Manifest',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'head',
    price: 37000,
    weight: 0,
    description:
      'A green copper comb with pink alabaster that enhances appearance while providing +2 natural armor bonus. Three ' +
      'times daily as a standard action, activate barbs triggering an effect similar to thorn body for 7 rounds.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['barkskin', 'thorn body'], cost: 18500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'natural_armor', target: 'ac', value: 2, source: 'Roseskin Comb' },
    ],
  },
  {
    id: 'wondrous-mummers-ruff',
    name: "Mummer's Ruff",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'neck',
    price: 3500,
    weight: 0,
    description:
      'A silk necklace favored by performers and con artists. Grants +10 bonus on Bluff checks when imitating another\'s ' +
      'voice. Once daily, throw voice using ventriloquism magic for up to 5 minutes.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['sculpt sound', 'ventriloquism'], cost: 1750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'skill.bluff', value: 10, source: "Mummer's Ruff", condition: { type: 'custom', params: {}, description: 'voice imitation only' } },
    ],
  },

  // ─── Batch 3 deferred ──────────────────────────────────────────────
  {
    id: 'wondrous-runes-of-the-crones-coven',
    name: "Runes of the Crone's Coven",
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 12,
    slot: 'none',
    price: 16000,
    weight: 1,
    description:
      'Leather pouch containing black stones engraved with runes of misfortune. When used with spell kenning, grants ' +
      'access to witch spells. Casting requires double normal time and a spell slot one level higher. Master skalds ' +
      'ignore the time doubling. Usable once daily.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['imbue with spell ability'], cost: 8000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.runes_crones_coven_witch_spells', value: 0, source: "Runes of the Crone's Coven" }],
  },
  {
    id: 'wondrous-runes-of-the-old-faith',
    name: 'Runes of the Old Faith',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 12,
    slot: 'none',
    price: 16000,
    weight: 1,
    description:
      'Velvet pouch containing regional stones inscribed with druidic runes. Enables casting of druid spells through ' +
      'spell kenning. Functions like Runes of the Crone\'s Coven but for druid spells. Recharges daily.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['imbue with spell ability'], cost: 8000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.runes_old_faith_druid_spells', value: 0, source: 'Runes of the Old Faith' }],
  },
  {
    id: 'wondrous-runestone-of-power',
    name: 'Runestone of Power',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 17,
    slot: 'none',
    price: 2000,
    weight: 0,
    description:
      'A polished stone chip etched with a rune that aids spontaneous spellcasters. Once daily, cast a spell by drawing ' +
      'on the runestone instead of using a spell slot. Recharges after 24 hours. Available in levels 1st (2,000 gp) ' +
      'through 9th (162,000 gp). Price listed is for 1st-level version.',
    construction: { feats: ['Craft Wondrous Item'], spells: [], cost: 1000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.runestone_of_power_extra_slot', value: 0, source: 'Runestone of Power' }],
  },
  {
    id: 'wondrous-hydrodaemon-runestone',
    name: 'Hydrodaemon Runestone',
    category: 'wondrous',
    source: 'Book of the Damned',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'none',
    price: 3300,
    weight: 0,
    description:
      'A water-polished stone carved as a frog-like head with evil runes. When broken as a standard action, summons a ' +
      'hydrodaemon as if via summon monster VI. The summoner typically controls it, but a 25% chance exists that the ' +
      'daemon attacks its summoner instead.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['summon monster VI'], cost: 1650 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.hydrodaemon_runestone_summon', value: 0, source: 'Hydrodaemon Runestone' }],
  },
  {
    id: 'wondrous-rust-monster-antenna-whip',
    name: 'Rust Monster Antenna Whip',
    category: 'wondrous',
    source: 'Dungeoneer\'s Handbook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'hands',
    price: 56000,
    weight: 2,
    description:
      'A whip fashioned from a preserved rust monster antenna. Functions like a gauntlet of rust, allowing rusting grasp ' +
      'touch attacks at will against all nonmagical metallic objects (not restricted to ferrous metals). Offers no ' +
      'protection from other rusting attacks. Qualifies as a whip for proficiency and weapon feats.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['rusting grasp'], cost: 28000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.rust_monster_whip_rust', value: 0, source: 'Rust Monster Antenna Whip' }],
  },
  {
    id: 'wondrous-saccadic-focusing-prism',
    name: 'Saccadic Focusing Prism',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',
    price: 2400,
    weight: 1,
    description:
      'A transparent prism that accelerates reading comprehension. Reduces reading time for regular text to one-tenth ' +
      'normal duration and halves the time needed to benefit from magical texts like tomes or manuals. Does not affect ' +
      'time required to learn spells or extracts from written sources.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['comprehend languages', 'haste'], cost: 1200 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.saccadic_prism_speed_read', value: 0, source: 'Saccadic Focusing Prism' }],
  },
  {
    id: 'wondrous-saddle-of-the-sky-river',
    name: 'Saddle of the Sky-River',
    category: 'wondrous',
    source: 'Aquatic Adventures',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 7,
    slot: 'chest',
    price: 16000,
    weight: 15,
    description:
      'A nacreous saddle crafted from mollusk shells enabling aquatic mounts to traverse air via water arcs. On command, ' +
      'an arcing torrent of water rises from an existing body of water, allowing the mount to use its swim speed to move ' +
      'through the air (as air walk) for up to 7 minutes daily in 1-minute increments. Expend 2 minutes to produce ' +
      'a hydraulic torrent with CMB +9.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['air walk', 'hydraulic torrent', 'water walk'], cost: 8000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.saddle_sky_river_air_walk', value: 0, source: 'Saddle of the Sky-River' }],
  },
  {
    id: 'wondrous-war-saddle',
    name: 'War Saddle',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'belt',
    price: 5000,
    weight: 20,
    description:
      'A military saddle crafted from cured hide with straps and hooks for configuration. Magically adjusts to fit ' +
      'various animal and magical beast types. Provides the rider with a +5 competence bonus on Ride checks while mounted.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['speak with animals'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.ride', value: 5, source: 'War Saddle' },
    ],
  },
  {
    id: 'wondrous-saliharion',
    name: 'Saliharion',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',
    price: 3000,
    weight: 15,
    description:
      'An illuminated tome honoring a Sarenite monk, offering practical knowledge including remedies and monster lore. ' +
      'Owner receives +2 sacred bonus on Heal checks and Knowledge checks regarding monsters. Sarenrae devotees may ' +
      'substitute Wisdom or Charisma modifier instead of the standard +2.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['know the enemy', "owl's wisdom"], cost: 1500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'sacred', target: 'skill.heal', value: 2, source: 'Saliharion' },
    ],
  },
  {
    id: 'wondrous-saline-purge',
    name: 'Saline Purge',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 900,
    weight: 0,
    description:
      'A foul-smelling potion in a glass bottle that cures curses and poisons. Drinkers must make a DC 14 Fortitude save ' +
      'or suffer nausea for 1d4+1 rounds, though the saving throw does not prevent the curative effects.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['neutralize poison', 'remove curse'], cost: 450 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.saline_purge_cure', value: 0, source: 'Saline Purge' }],
  },
  {
    id: 'wondrous-salve-of-the-second-chance',
    name: 'Salve of the Second Chance',
    category: 'wondrous',
    source: 'Ultimate Wilderness',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',
    price: 1600,
    weight: 0,
    description:
      'A nightmoss-derived salve that mimics the effects of reincarnate when applied to a recently deceased creature\'s ' +
      'body. When used during a new moon, the recipient rolls twice on the reincarnate table and selects their preferred outcome.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['reincarnate'], cost: 800 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.salve_second_chance_reincarnate', value: 0, source: 'Salve of the Second Chance' }],
  },
  {
    id: 'wondrous-sandals-of-interception',
    name: 'Sandals of Interception',
    category: 'wondrous',
    source: 'Ranged Tactics Toolbox',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 13,
    slot: 'feet',
    price: 8000,
    weight: 1,
    description:
      'Wooden sandals enabling the wearer to step into the path of ranged attacks to shield allies. 3/day as an immediate ' +
      'action, move 5 ft to intercept a ranged attack and qualify as its target for Deflect Arrows or Snatch Arrows. ' +
      'Without deflection abilities, automatically struck. Cannot take 5-ft step the following turn.',
    construction: { feats: ['Craft Wondrous Item', 'Deflect Arrows'], spells: ['deflection'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sandals_interception_shield', value: 0, source: 'Sandals of Interception' }],
  },
  {
    id: 'wondrous-combat-sandals',
    name: 'Combat Sandals',
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'feet',
    price: 18000,
    weight: 3,
    description:
      'Brown leather sandals enabling the wearer to charge through allies\' squares without difficulty. Allies adjacent to ' +
      'the wearer don\'t provide cover to targets the wearer attacks with reach or ranged weapons.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['expeditious retreat', 'freedom of movement', 'true strike'], cost: 9000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.combat_sandals_charge_through', value: 0, source: 'Combat Sandals' }],
  },
  {
    id: 'wondrous-dryad-sandals',
    name: 'Dryad Sandals',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 9,
    slot: 'feet',
    price: 24000,
    weight: 1,
    description:
      'Grass and vine-woven footwear granting woodland stride through natural undergrowth. In forested terrain, leaves ' +
      'no tracks or scent and provides +2 competence bonus to Stealth. Once daily, enter a tree for up to 9 hours or ' +
      'teleport to another similar tree within range via tree stride.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['pass without trace', 'tree stride'], cost: 12000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 2, source: 'Dryad Sandals', condition: { type: 'custom', params: {}, description: 'forested terrain only' } },
    ],
  },
  {
    id: 'wondrous-sandstorm-sandals',
    name: 'Sandstorm Sandals',
    category: 'wondrous',
    source: 'People of the Sands',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'feet',
    price: 15000,
    weight: 2,
    description:
      'Elevated sandals of cloth, hide, and wood leaving no trace in desert. When the wearer uses flurry of blows on sand ' +
      'or dirt, a minor storm appears for 1 round. Nearby creatures take 1 nonlethal damage, and the wearer gains 20% concealment.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['gust of wind'], cost: 7500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sandstorm_sandals_storm', value: 0, source: 'Sandstorm Sandals' }],
  },
  {
    id: 'wondrous-diminishing-sash',
    name: 'Diminishing Sash',
    category: 'wondrous',
    source: 'Adventurer\'s Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.UNIVERSAL }],
    casterLevel: 3,
    slot: 'belt',
    price: 5000,
    weight: 1,
    description:
      'Brown wool sash allowing spellcasters to tear off pieces as substitutes for spell components valued up to 50 gp ' +
      'each. Provides components for 50 spells before becoming nonmagical cloth. When used for spells with no cost or ' +
      'minimal (1 gp or less) components, wearer gains +1 caster level.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['eschew materials'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.diminishing_sash_components', value: 0, source: 'Diminishing Sash' }],
  },
  {
    id: 'wondrous-scaled-sash',
    name: 'Scaled Sash',
    category: 'wondrous',
    source: 'Dragonslayer\'s Handbook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'chest',
    price: 73000,
    weight: 1,
    description:
      'A chromatic dragon-associated sash glittering with every movement. Allows the wearer to convert damage from one ' +
      'attack per day (3/day) into matching dragon breath weapon damage. Conversion occurs after a successful attack but ' +
      'before damage rolls. Converted damage respects damage reduction.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['form of the dragon I'], cost: 36500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.scaled_sash_dragon_damage', value: 0, source: 'Scaled Sash' }],
  },
  {
    id: 'wondrous-book-thiefs-satchel',
    name: "Book Thief's Satchel",
    category: 'wondrous',
    source: 'Spymaster\'s Handbook',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION },
    ],
    casterLevel: 9,
    slot: 'none',
    price: 10000,
    weight: 2,
    description:
      'A magical satchel that copies book contents onto blank pages. Place a blank book in an extradimensional space via ' +
      'command word. Once daily, when another text is placed in the satchel, its pages transfer to the blank book over one ' +
      'full round. Cannot copy magical writing such as spellbooks or scrolls. If interrupted or book too small, text is lost.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['secret chest', 'steal book'], cost: 5000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.book_thief_satchel_copy', value: 0, source: "Book Thief's Satchel" }],
  },

  // ─── Batch 4 deferred ──────────────────────────────────────────────
  {
    id: 'wondrous-scabbard-of-the-efreet',
    name: 'Scabbard of the Efreet',
    category: 'wondrous',
    source: 'Qadira, Jewel of the East',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 12,
    slot: 'none',
    price: 41000,
    weight: 2,
    description:
      'Black-and-red leather scabbard from Kelesh. Any bladed weapon drawn gains the flaming ability for 5 rounds. 3/day, ' +
      'it can grant flaming burst for 10 rounds. 1/day, drawing a weapon triggers a pyroclastic storm (fire-based ice ' +
      'storm effect) centered on the wielder without harming them.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fireball', 'giant form I', 'scorching ray'], cost: 20500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.scabbard_efreet_flaming', value: 0, source: 'Scabbard of the Efreet' }],
  },
  {
    id: 'wondrous-scabbard-of-the-lost-kiss',
    name: 'Scabbard of the Lost Kiss',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 4,
    slot: 'none',
    price: 8600,
    weight: 1,
    description:
      'An aged scabbard associated with a legendary divine scimitar. 2/day, draw forth a blazing beam of red-hot fire ' +
      'wielded as a scimitar (as flame blade). If Sarenrae is patron deity, half the damage bypasses fire resistance ' +
      'as divine damage.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['flame blade', 'flame strike'], cost: 4300 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.scabbard_lost_kiss_flame_blade', value: 0, source: 'Scabbard of the Lost Kiss' }],
  },
  {
    id: 'wondrous-scabbard-of-true-death',
    name: 'Scabbard of True Death',
    category: 'wondrous',
    source: 'Ultimate Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',
    price: 32000,
    weight: 2,
    description:
      'Enhances an assassin\'s death attack by increasing the true death DC by 4 when drawing a weapon from it. All ' +
      'wielders gain the bleeding attack rogue talent as though having 1d6 sneak attack damage, with existing bleed ' +
      'damage increased by 1.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bestow curse'], cost: 16000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.scabbard_true_death_bleed', value: 0, source: 'Scabbard of True Death' }],
  },
  {
    id: 'wondrous-insect-scarab',
    name: 'Scarab of Khepri',
    category: 'wondrous',
    source: 'People of the Sands',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 7800,
    weight: 0,
    description:
      'A small blue figurine fashioned in the likeness of a scarab beetle. 1/day speak with vermin (as speak with animals). ' +
      'If possessing wild empathy, can influence vermin as readily as animals. 1/day summon swarm (scarab beetles functioning ' +
      'as spider swarm but inflicting filth fever instead of poison).',
    construction: { feats: ['Craft Wondrous Item', 'Vermin Heart'], spells: ['speak with animals', 'summon swarm'], cost: 3900 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.insect_scarab_vermin', value: 0, source: 'Scarab of Khepri' }],
  },
  {
    id: 'wondrous-scarecrow-lure',
    name: 'Scarecrow Lure',
    category: 'wondrous',
    source: 'Monster Codex',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 1,
    slot: 'none',
    price: 850,
    weight: 40,
    description:
      'A life-sized scarecrow containing the real skeleton of a former adventurer, enchanted to writhe and cry out as if ' +
      'wounded. Observers may attempt a DC 11 Will save to disbelieve. Activation requires a standard action without ' +
      'provoking attacks of opportunity.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['mage hand', 'ventriloquism'], cost: 450 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.scarecrow_lure_distraction', value: 0, source: 'Scarecrow Lure' }],
  },
  {
    id: 'wondrous-scarf-of-the-suggestive-dance',
    name: 'Scarf of the Suggestive Dance',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 1,
    slot: 'belt',
    price: 3000,
    weight: 0,
    description:
      'Flame-colored silk scarf with bead tassels granting +5 competence bonus to Perform (dance) checks when worn around ' +
      'the hips. Increases saving throw DCs by +1 for the wearer\'s fascinate and suggestion bardic performances.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['hypnotism'], cost: 950 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.perform', value: 5, source: 'Scarf of the Suggestive Dance', condition: { type: 'custom', params: {}, description: 'Perform (dance) only' } },
    ],
  },
  {
    id: 'wondrous-scarves-of-the-stinging-dancer',
    name: 'Scarves of the Stinging Dancer',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'chest',
    price: 9000,
    weight: 0,
    description:
      'Silken scarves patterned yellow and black enhancing Varisian dance. +2 circumstance bonus on Perform (dance). ' +
      'Activate via DC 20 Perform (dance) check as part of movement or combat. When active, scarves retaliate against ' +
      'attacks/spells with magic missile (as buzzing wasps). 50 missiles total before losing retaliatory capability.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['magic missile'], cost: 4500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'circumstance', target: 'skill.perform', value: 2, source: 'Scarves of the Stinging Dancer', condition: { type: 'custom', params: {}, description: 'Perform (dance) only' } },
    ],
  },
  {
    id: 'wondrous-school-of-eyes',
    name: 'School of Eyes',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',
    price: 5000,
    weight: 0,
    description:
      'A flask containing syrupy fluid with a floating eyeball. When consumed, drinker is stunned for 1 round as 1d4+1 ' +
      'eye-fish emerge from their flesh. Functions like prying eyes. Three or more fish grant +10 competence bonus on ' +
      'sight-based Perception. Additional fish emerge every 1d6x10 minutes (max 1d4+10 total). Persists 10 hours.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['prying eyes'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.school_of_eyes_prying', value: 0, source: 'School of Eyes' }],
  },
  {
    id: 'wondrous-scrap-collectors-strap',
    name: "Scrap Collector's Strap",
    category: 'wondrous',
    source: 'People of the Wastes',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 500,
    weight: 0,
    description:
      'A leather strap that wraps around a broken weapon\'s grip, allowing the wielder to ignore the effects of the broken ' +
      'condition on that weapon. The weapon still destroys normally upon reaching zero hit points. Attaching or removing ' +
      'requires a full-round action.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['mending'], cost: 250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.scrap_strap_ignore_broken', value: 0, source: "Scrap Collector's Strap" }],
  },
  {
    id: 'wondrous-riffle-scroll',
    name: 'Riffle Scroll',
    category: 'wondrous',
    source: 'Inner Sea Magic',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.UNIVERSAL }],
    casterLevel: 1,
    slot: 'none',
    price: 0,
    weight: 1,
    description:
      'A thin booklet of 25-50 pages of magical symbols. When riffled quickly between thumb and forefinger, activates the ' +
      'contained spell and erases itself. Functions as spell completion like normal scrolls but requires no verbal ' +
      'components (auto Silent Spell). Provokes AoO. Requires one free hand. Price equals spell level x CL x 25 gp ' +
      '(approximately one spell level higher than a standard scroll).',
    construction: { feats: ['Scribe Scroll', 'Silent Spell'], spells: [], cost: 0 },
    physicalStats: { hardness: 0, hitPoints: 5, breakDC: 10 },
    activationCategory: 'spell_completion',
    effects: [{ type: 'special', target: 'special.riffle_scroll_silent', value: 0, source: 'Riffle Scroll' }],
  },
  {
    id: 'wondrous-sea-silk-shell',
    name: 'Sea Silk Shell',
    category: 'wondrous',
    source: 'Aquatic Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',
    price: 4500,
    weight: 0,
    description:
      'A magical clamshell containing 300 square feet of sea silk fabric. Material has hardness 10 and 15 HP, resists ' +
      'water damage. Command the shell to produce silk as sails (60 squares for large vessels), up to 15 noble/royal ' +
      'outfits, or unaltered sheet for crafting. Damage reverses when items return to shell. If destroyed, shell is ' +
      'inert for a week as it regenerates.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['minor creation'], cost: 2250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.sea_silk_shell_fabric', value: 0, source: 'Sea Silk Shell' }],
  },
  {
    id: 'wondrous-seafarers-waders',
    name: "Seafarer's Waders",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',
    price: 3350,
    weight: 1,
    description:
      'Leather boots reaching to the knees with barnacle coverings. Grant +2 competence bonus on Acrobatics, Climb, ' +
      'and Swim checks. Once daily via command word, obtain the effects of spider climb for up to 30 minutes, dismissible ' +
      'as a free action.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['jump', 'spider climb'], cost: 1675 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.acrobatics', value: 2, source: "Seafarer's Waders" },
      { type: 'bonus', bonusType: 'competence', target: 'skill.climb', value: 2, source: "Seafarer's Waders" },
      { type: 'bonus', bonusType: 'competence', target: 'skill.swim', value: 2, source: "Seafarer's Waders" },
    ],
  },
  {
    id: 'wondrous-seafaring-stanchions',
    name: 'Seafaring Stanchions',
    category: 'wondrous',
    source: 'Aquatic Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'wrists',
    price: 2400,
    weight: 2,
    description:
      'Steel bracers that can be tapped together while underwater to instantly remove the wearer\'s bracers and armor. ' +
      'The removed equipment becomes buoyant and floats to the surface, sinking after 4 hours if still submerged.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['water walk'], cost: 1200 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.seafaring_stanchions_doff', value: 0, source: 'Seafaring Stanchions' }],
  },
  {
    id: 'wondrous-seamless-skin',
    name: 'Seamless Skin',
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 14,
    slot: 'body',
    price: 70000,
    weight: 8,
    description:
      'A magically preserved humanoid skin wearable by creatures within one size category of the original. The wearer ' +
      'assumes the physical appearance and size of the skinned creature, gaining abilities equivalent to alter self, ' +
      'though not immunities, weapon proficiencies, weaknesses, or spell resistance.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['recorporeal incarnation'], cost: 35000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.seamless_skin_disguise', value: 0, source: 'Seamless Skin' }],
  },
  {
    id: 'wondrous-secret-pen',
    name: 'Secret Pen',
    category: 'wondrous',
    source: 'Spymaster\'s Handbook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',
    price: 720,
    weight: 0,
    description:
      'An ink pen producing its own ink. On command word, activates dictation mode recording all audible words from its ' +
      'location. Uses +0 Perception modifier; cannot translate. While held, user appears to be taking notes while the pen ' +
      'writes independently. Multiple speakers trigger Charisma checks. Second command word stops. Daily limit: 1 hour ' +
      'in 10-minute increments.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disguise self', 'unseen servant'], cost: 360 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.secret_pen_dictation', value: 0, source: 'Secret Pen' }],
  },
  {
    id: 'wondrous-secure-paypack',
    name: 'Secure Paypack',
    category: 'wondrous',
    source: "Adventurer's Armory 2",
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',
    price: 4000,
    weight: 5,
    description:
      'A reinforced backpack resembling a handy haversack with two hidden compartments (each holding up to 1 cubic foot ' +
      'or 10 lbs). Features mithral fiber reinforcement (hardness 15, 5 HP) and concealed superior locks. Items can be ' +
      'retrieved as a move action by key holders.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['arcane lock', 'knock', 'secret chest'], cost: 2000 },
    physicalStats: { hardness: 15, hitPoints: 5, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.secure_paypack_hidden', value: 0, source: 'Secure Paypack' }],
  },
  {
    id: 'wondrous-seeking-lens',
    name: 'Seeking Lens',
    category: 'wondrous',
    source: 'Adventurer\'s Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'none',
    price: 20000,
    weight: 1,
    description:
      'An adjustable telescope functioning at x2 to x250 magnification. Grants +5 competence bonus on Knowledge ' +
      '(geography) and Perception checks for celestial study. When compressed into an assayer\'s lens, provides +5 on ' +
      'Appraise, Perception, and track-following Survival checks. Once weekly, designate a creature as quarry after ' +
      'studying its possessions or tracks.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['clairaudience/clairvoyance', 'true seeing'], cost: 10000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.perception', value: 5, source: 'Seeking Lens' },
    ],
  },

  // ─── Batch 5 deferred ──────────────────────────────────────────────
  {
    id: 'wondrous-sentinel-scorpion',
    name: 'Sentinel Scorpion',
    category: 'wondrous',
    source: 'Pathfinder Society Primer',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'none',
    price: 50,
    weight: 0,
    description:
      'A crystalline scorpion figurine that can be thrown to create an alarm trap. Produces crystalline shards covering ' +
      'the ground in a 10-ft burst. Creatures stepping in hear loud popping sounds and face a 10% chance per round of ' +
      'triggering a venomous stinger (1d6 Strength damage, Fort DC 18). Search DC 20 and Disable Device DC 20. Shards ' +
      'become harmless powder after 2 hours.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['alarm'], cost: 25 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sentinel_scorpion_alarm_trap', value: 0, source: 'Sentinel Scorpion' }],
  },
  {
    id: 'wondrous-seven-sided-coin',
    name: 'Seven-Sided Coin',
    category: 'wondrous',
    source: 'Pathfinder Comics',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'none',
    price: 5000,
    weight: 0,
    description:
      'A brass coin with smooth faces that can be applied to a creature once weekly, applying a mark of justice effect ' +
      '(CL 9th). The user selects one of seven deadly sins as the triggering behavior: greed, lust, pride, gluttony, ' +
      'envy, wrath, or sloth.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['mark of justice'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.seven_sided_coin_mark', value: 0, source: 'Seven-Sided Coin' }],
  },
  {
    id: 'wondrous-shackles-of-compliance',
    name: 'Shackles of Compliance',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'wrists',
    price: 3280,
    weight: 2,
    description:
      'Iron manacles adjusting to fit Small through Large creatures that automatically lock. Wearers become more vulnerable ' +
      'to intimidation (intimidators gain +4). Key holder can cast command (DC 25 Will) on the wearer 3/day. Hardness 10, ' +
      '10 HP, break DC 28, Escape Artist DC 35.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['command'], cost: 1930 },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 28 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.shackles_compliance_command', value: 0, source: 'Shackles of Compliance' }],
  },
  {
    id: 'wondrous-shadow-fletching',
    name: 'Shadow Fletching',
    category: 'wondrous',
    source: 'Blood of Shadows',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'head',
    price: 8000,
    weight: 0,
    description:
      'Small black feathers braided into hair. 3/day as a swift action in dim light or darkness, make the next ranged ' +
      'attack deny the target its Dexterity bonus to AC as if invisible. Does not work against creatures with low-light ' +
      'vision, darkvision, or the ability to see invisible creatures.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['gloomblind bolts'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.shadow_fletching_deny_dex', value: 0, source: 'Shadow Fletching' }],
  },
  {
    id: 'wondrous-shadow-piercings-eye',
    name: 'Shadow Piercings (Eye)',
    category: 'wondrous',
    source: 'Shadow of the Duskwalker',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'eyes',
    price: 6000,
    weight: 0,
    description:
      'Shadow piercings crafted from shadow-infused metal. Eye piercings grant low-light vision (minor, 6,000 gp), ' +
      'darkvision 60 ft (major, 18,000 gp), or see in darkness (greater, 32,000 gp). Price listed is for minor version.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['keen senses'], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'grant_sense', target: 'low_light_vision', value: 0, source: 'Shadow Piercings (Eye)' }],
  },
  {
    id: 'wondrous-shawl-of-shadowy-disguise',
    name: 'Shawl of Shadowy Disguise',
    category: 'wondrous',
    source: 'Blood of Shadows',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'head',
    price: 1350,
    weight: 1,
    description:
      'A violet shawl that darkens in shadows, enabling the wearer to conceal their appearance as though under a penumbral ' +
      'disguise spell. Observers cannot detect the item itself.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['penumbral disguise'], cost: 675 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.shawl_shadowy_disguise', value: 0, source: 'Shawl of Shadowy Disguise' }],
  },
  {
    id: 'wondrous-shawl-of-the-crone',
    name: 'Shawl of the Crone',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'shoulders',
    price: 16000,
    weight: 1,
    description:
      'A knitted gray wrap that transforms the wearer into a venerable female of their race. Grants +4 circumstance ' +
      'bonus on Charisma checks to appear friendly or harmless (+8 against children). Counts as a hag for coven ' +
      'formation but must include at least one actual hag. No age-related penalties or mental attribute bonuses apply.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['alter self'], cost: 8000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'circumstance', target: 'special.charisma_appear_harmless', value: 4, source: 'Shawl of the Crone' },
    ],
  },
  {
    id: 'wondrous-shawl-of-the-lingering-phantom',
    name: 'Shawl of the Lingering Phantom',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'head',
    price: 3200,
    weight: 0,
    description:
      'A ghost-white, partially transparent shawl for spiritualists with shared consciousness. When the phantom manifests, ' +
      'the wearer gains Skill Focus in both skills tied to the phantom\'s emotional focus. While the phantom remains in ' +
      'consciousness, a +4 competence bonus applies to related skill checks instead.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['borrow skill'], cost: 1600 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.shawl_lingering_phantom_skill', value: 0, source: 'Shawl of the Lingering Phantom' }],
  },
  {
    id: 'wondrous-seafoam-shawl',
    name: 'Seafoam Shawl',
    category: 'wondrous',
    source: 'Blood of the Sea',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'shoulders',
    price: 6000,
    weight: 1,
    description:
      'A delicate lace shawl that activates once daily, granting the benefits of the fins to feet spell. Transforms the ' +
      'wearer\'s lower fins or appendages into feet on dry land for 5 hours unless dismissed earlier.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fins to feet'], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.seafoam_shawl_fins_to_feet', value: 0, source: 'Seafoam Shawl' }],
  },
  {
    id: 'wondrous-vanishing-sheath',
    name: 'Vanishing Sheath',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 6,
    slot: 'wrists',
    price: 5000,
    weight: 1,
    description:
      'A wrist-mounted sheath holding a single light weapon, wand, or ammunition (max 5 lbs) in extradimensional space. ' +
      'Deploy the weapon as a swift action via wrist flexion; stow as a move action. +4 Sleight of Hand to conceal. ' +
      'Two sheaths can be worn simultaneously, both drawn with a single swift action.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['secret chest'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'skill.sleight_of_hand', value: 4, source: 'Vanishing Sheath', condition: { type: 'custom', params: {}, description: 'weapon concealment only' } },
    ],
  },
  {
    id: 'wondrous-shell-of-sending',
    name: 'Shell of Sending',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',
    price: 12200,
    weight: 0,
    description:
      'A few-inch-long conch shell with delicate pink shimmer. Shells come in attuned pairs. 1/day, whisper up to 25 ' +
      'words into one shell, which emerges from the paired shell on the same plane. Receiver may respond with 25 words. ' +
      'Eavesdroppers DC 14 Will or hear gibberish; failing by 5+ causes deafness for 1d4 minutes.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['sending'], cost: 6100 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.shell_of_sending_message', value: 0, source: 'Shell of Sending' }],
  },
  {
    id: 'wondrous-shimmering-kilt',
    name: 'Shimmering Kilt',
    category: 'wondrous',
    source: 'Blood of the Sea',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 10,
    slot: 'body',
    price: 25200,
    weight: 2,
    description:
      'An iridescent garment of tiny scales transforming aquatic creatures with tails into bipedal beings. Exchanges swim ' +
      'speed for 30-ft land speed (20 ft if Small or smaller). As a standard action, disguise the kilt as regular leg ' +
      'coverings; only true seeing reveals its nature.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disguise self', 'fins to feet'], cost: 12600 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.shimmering_kilt_transform', value: 0, source: 'Shimmering Kilt' }],
  },
  {
    id: 'wondrous-shoes-of-the-firewalker',
    name: 'Shoes of the Firewalker',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 6,
    slot: 'feet',
    price: 21000,
    weight: 1,
    description:
      'Red leather low-cut shoes with golden eyelets and fiery stitching. Provide fire resistance 10 and enable the ' +
      'wearer to traverse lava and magma as though affected by water walk.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['resist energy', 'water walk'], cost: 10500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'resistance', target: 'energy_resistance', value: 10, source: 'Shoes of the Firewalker', condition: { type: 'custom', params: { descriptor: 'fire' }, description: 'fire resistance 10' } },
    ],
  },
  {
    id: 'wondrous-haunted-shoes',
    name: 'Haunted Shoes',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
    ],
    casterLevel: 3,
    slot: 'feet',
    price: 6480,
    weight: 1,
    description:
      'Summon 1d4 invisible spirit servants 2/day, functioning as unseen servants for up to 3 hours. 1/day, spirits swirl ' +
      'around the wearer granting 20% concealment for 3 minutes. True seeing negates concealment. Cannot use concealment ' +
      'while spirits serve.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['blur', 'unseen servant'], cost: 3240 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.haunted_shoes_spirits', value: 0, source: 'Haunted Shoes' }],
  },
  {
    id: 'wondrous-shrinking-berries',
    name: 'Shrinking Berries',
    category: 'wondrous',
    source: 'Animal Archive',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 300,
    weight: 0,
    description:
      'Magical berries that shrink animals consuming them into less threatening versions (as pup shape, Fort DC 14). ' +
      'Lasts 24 hours. Unlike the standard spell, other creatures don\'t need Will saves to attack the transformed animal. ' +
      'Can be hidden in meat or other food.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['pup shape'], cost: 150 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.shrinking_berries_pup_shape', value: 0, source: 'Shrinking Berries' }],
  },
  {
    id: 'wondrous-shroud-of-venom',
    name: 'Shroud of Venom',
    category: 'wondrous',
    source: 'Dirty Tactics Toolbox',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 5,
    slot: 'shoulders',
    price: 4500,
    weight: 3,
    description:
      'A green leather cloak with blue hues that crystallizes liquid poisons poured onto it. +5 competence on Sleight of ' +
      'Hand to conceal poisons. Apply up to 3 doses as a full-round action (DC 15 Craft [alchemy]). Poisons remain ' +
      'active 1 hour. Scrape crystallized poison onto weapons as a standard action without exposure risk.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['delay poison', 'obscure poison'], cost: 2250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.sleight_of_hand', value: 5, source: 'Shroud of Venom', condition: { type: 'custom', params: {}, description: 'poison concealment only' } },
    ],
  },
  {
    id: 'wondrous-dead-mans-shroud',
    name: "Dead Man's Shroud",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'shoulders',
    price: 6000,
    weight: 1,
    description:
      'A dirt-stained cloak from a condemned murderer\'s burial shroud. Prevents nonintelligent undead from detecting ' +
      'the wearer (as hide from undead). Intelligent undead perceive with DC 11 Will. Protection ends if touching undead, ' +
      'channeling energy, or attacking. 1/day become invisible for 5 minutes as a standard action.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['hide from undead', 'invisibility'], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.dead_mans_shroud_hide_undead', value: 0, source: "Dead Man's Shroud" }],
  },
];
