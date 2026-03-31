import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

// AP Volume feats — player-usable feats from Adventure Path books and Player's Guides
// Skipped entirely:
//   #91 Battle of Bloodmarch Hills (14) — all require giant subtype/Large+
//   #139 The Dead Road (10) — all require Shabti or Duskwalker race
//   #131 The Reaper's Right Hand (8) — all very campaign-specific story feats

export const AP_VOLUME_FEATS: FeatDefinition[] = [
  // ─── Pathfinder #132: The Six-Legend Soul (10 new, Usurping Spell skipped) ────
  {
    id: 'blade_of_the_purge',
    name: 'Blade of the Purge',
    description:
      'When activating bane, you select a deity or religion other than your own. The bane effect applies exclusively to that religion\'s followers.',
    shortDescription: 'Bane targets followers of a chosen religion.',
    source: 'Pathfinder #132: The Six-Legend Soul',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'bane' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Blade of the Purge' }],
    activationMode: 'conditional',
    tags: ['inquisitor', 'bane', 'religion', 'war for the crown'],
  },
  {
    id: 'blood_for_the_empire',
    name: 'Blood for the Empire',
    description:
      'You gain a +2 morale bonus on attack and damage rolls against targets damaged by an ally with this feat in the last round. When an ally with this feat dies within 30 feet, you gain the effects of haste for 1 round.',
    shortDescription: '+2 morale attack/damage vs. foes your allies hit; haste when ally dies.',
    source: 'Pathfinder #132: The Six-Legend Soul',
    types: ['teamwork'],
    prerequisites: [{ type: 'bab', minimum: 4 }],
    effects: [
      { type: 'attack_bonus', target: 'attack', value: 2, bonusType: BonusType.MORALE, source: 'Blood for the Empire' },
      { type: 'damage_bonus', target: 'damage', value: 2, bonusType: BonusType.MORALE, source: 'Blood for the Empire' },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'morale', 'vengeance', 'war for the crown'],
  },
  {
    id: 'brash_stride',
    name: 'Brash Stride',
    description: 'When you charge or run, you treat difficult terrain as normal terrain.',
    shortDescription: 'Ignore difficult terrain while charging or running.',
    source: 'Pathfinder #132: The Six-Legend Soul',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'acrobatic_steps' },
      { type: 'feat', featId: 'nimble_moves' },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Brash Stride' }],
    activationMode: 'passive',
    tags: ['charge', 'run', 'difficult terrain', 'movement'],
  },
  {
    id: 'dragon_gold_crown',
    name: 'Dragon Gold Crown',
    description:
      'You can craft a crown from defeated dragon or magical beast remains, functioning as a headband of alluring charisma. Bonus: +2 at CR 5/level 5, +4 at CR 10/level 10, +6 at CR 15/level 15.',
    shortDescription: 'Craft a CHA headband from dragon/magical beast remains.',
    source: 'Pathfinder #132: The Six-Legend Soul',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 5 },
      { type: 'skill', skillId: 'survival', ranks: 5 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.ENHANCEMENT, target: 'charisma', source: 'Dragon Gold Crown' }],
    activationMode: 'passive',
    tags: ['crafting', 'dragon', 'charisma', 'headband', 'war for the crown'],
  },
  {
    id: 'eyes_of_the_purge',
    name: 'Eyes of the Purge',
    description:
      'When using detect magic, if a spell\'s caster used a holy symbol as a divine focus, you perceive a ghostly image of the deity\'s holy symbol as part of the spell\'s aura. Divination-blocking effects suppress this.',
    shortDescription: 'Detect magic reveals divine focus holy symbols in spell auras.',
    source: 'Pathfinder #132: The Six-Legend Soul',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Ability to cast detect magic' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Eyes of the Purge' }],
    activationMode: 'conditional',
    tags: ['detect magic', 'divine', 'holy symbol', 'investigation'],
  },
  {
    id: 'heavens_step',
    name: "Heaven's Step",
    description:
      'When using Step Up and Strike, you can make an additional attack with your offhand weapon using your highest BAB. Both attacks take normal TWF penalties.',
    shortDescription: 'Extra offhand attack when using Step Up and Strike.',
    source: 'Pathfinder #132: The Six-Legend Soul',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'following_step' },
      { type: 'feat', featId: 'step_up' },
      { type: 'feat', featId: 'step_up_and_strike' },
      { type: 'feat', featId: 'two_weapon_fighting' },
      { type: 'bab', minimum: 10 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: "Heaven's Step" }],
    activationMode: 'conditional',
    tags: ['step up', 'two-weapon fighting', 'extra attack'],
  },
  {
    id: 'horse_sense',
    name: 'Horse Sense',
    description:
      'When saving against enchantment effects that cannot affect animals (like charm person), you may roll twice and take the better result.',
    shortDescription: 'Roll twice vs. enchantments that don\'t affect animals.',
    source: 'Pathfinder #132: The Six-Legend Soul',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'iron_will' },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'will', source: 'Horse Sense' }],
    activationMode: 'conditional',
    tags: ['enchantment', 'saving throw', 'reroll', 'will'],
  },
  {
    id: 'imperial_prankster',
    name: 'Imperial Prankster',
    description:
      'You gain +2 on Bluff checks and CMB checks vs. lawful creatures, increasing to +4 against creatures with the lawful subtype.',
    shortDescription: '+2 Bluff/CMB vs. lawful; +4 vs. lawful subtype.',
    source: 'Pathfinder #132: The Six-Legend Soul',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 5 },
      { type: 'special', description: 'Any chaotic alignment' },
    ],
    effects: [
      { type: 'skill_bonus', target: 'bluff', value: 2, bonusType: BonusType.UNTYPED, source: 'Imperial Prankster' },
    ],
    activationMode: 'conditional',
    tags: ['chaotic', 'bluff', 'combat maneuver', 'trickster'],
  },
  {
    id: 'lions_heart',
    name: "Lion's Heart",
    description:
      'Select one ability score. You can ignore penalties from ability damage to that score until the damage equals your score in it.',
    shortDescription: 'Ignore ability damage penalties for one chosen score until damage equals the score.',
    source: 'Pathfinder #132: The Six-Legend Soul',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'great_fortitude' },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: "Lion's Heart" }],
    activationMode: 'passive',
    tags: ['ability damage', 'resilience', 'fortitude'],
  },
  {
    id: 'usurpers_guard',
    name: "Usurper's Guard",
    description:
      'When an adjacent ally with this feat attempts a concentration check to cast defensively, you can make a CMB check as an immediate action. Your ally uses whichever result is better.',
    shortDescription: 'Help adjacent allies cast defensively using your CMB check.',
    source: 'Pathfinder #132: The Six-Legend Soul',
    types: ['teamwork'],
    prerequisites: [{ type: 'special', description: 'Base attack bonus +3 or ability to cast 2nd-level spells' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: "Usurper's Guard" }],
    activationMode: 'conditional',
    tags: ['teamwork', 'concentration', 'defensive casting', 'support'],
  },

  // ─── Curse of the Crimson Throne Player's Guide (3 new — Crossbow Mastery + Harrowed are reprints) ─
  {
    id: 'acadamae_graduate',
    name: 'Acadamae Graduate',
    description:
      'You can reduce the casting time of prepared conjuration (summoning) spells by one round (minimum one standard action). Casting this way requires a Fortitude save (DC 15 + spell level) or become fatigued.',
    shortDescription: 'Reduce summoning spell casting time by 1 round; risk fatigue.',
    source: "Pathfinder: Curse of the Crimson Throne Player's Guide",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Specialist wizard 1st level; conjuration not a forbidden school' },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Acadamae Graduate' }],
    activationMode: 'conditional',
    tags: ['wizard', 'conjuration', 'summoning', 'korvosa', 'acadamae'],
  },
  {
    id: 'sable_company_marine',
    name: 'Sable Company Marine',
    description:
      'You gain a hippogriff as your animal companion. You gain +2 on Ride checks while riding it. Within 20 feet of your hippogriff, it gains +2 on saves vs. fear.',
    shortDescription: 'Gain a hippogriff animal companion; +2 Ride and fear save bonuses.',
    source: "Pathfinder: Curse of the Crimson Throne Player's Guide",
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'ride', ranks: 6 },
      { type: 'level', minimum: 4, class: 'Ranger' },
    ],
    effects: [{ type: 'skill_bonus', target: 'ride', value: 2, bonusType: BonusType.UNTYPED, source: 'Sable Company Marine' }],
    activationMode: 'passive',
    tags: ['hippogriff', 'animal companion', 'mount', 'korvosa', 'flying'],
  },
  {
    id: 'shingle_runner',
    name: 'Shingle Runner',
    description:
      'You gain +2 on Acrobatics and Climb checks (+4 at 10+ ranks). You can take 10 on Climb checks even when distracted. Fall damage is reduced by 1d6, stacking with Acrobatics checks.',
    shortDescription: '+2 Acrobatics/Climb; take 10 on Climb; reduce fall damage by 1d6.',
    source: "Pathfinder: Curse of the Crimson Throne Player's Guide",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'acrobatic' },
    ],
    effects: [
      { type: 'skill_bonus', target: 'acrobatics', value: 2, bonusType: BonusType.UNTYPED, source: 'Shingle Runner' },
      { type: 'skill_bonus', target: 'climb', value: 2, bonusType: BonusType.UNTYPED, source: 'Shingle Runner' },
    ],
    activationMode: 'passive',
    tags: ['acrobatics', 'climb', 'urban', 'korvosa', 'rooftop'],
  },

  // ─── Legacy of Fire Player's Guide (8 feats — all achievement feats except Sandwalker) ─
  {
    id: 'all_gnolls_must_die',
    name: 'All Gnolls Must Die',
    description:
      'You gain a +2 morale bonus on Will saves when carrying a gnoll trophy. You gain +2 competence bonus on attack and damage rolls against gnolls, hyenas, dire hyenas, werehyenas, jackalweres, and Lamashtu\'s minions.',
    shortDescription: '+2 Will with gnoll trophy; +2 attack/damage vs. gnolls and Lamashtu minions.',
    source: "Pathfinder: Legacy of Fire Player's Guide",
    types: ['achievement'],
    prerequisites: [{ type: 'special', description: 'Deliver the killing blow to 20 gnolls, hyenas, dire hyenas, werehyenas, jackalweres, or minions of Lamashtu' }],
    effects: [
      { type: 'save_bonus', target: 'will', value: 2, bonusType: BonusType.MORALE, source: 'All Gnolls Must Die' },
      { type: 'attack_bonus', target: 'gnolls', value: 2, bonusType: BonusType.COMPETENCE, source: 'All Gnolls Must Die' },
    ],
    activationMode: 'conditional',
    tags: ['achievement', 'gnoll', 'Lamashtu', 'legacy of fire'],
  },
  {
    id: 'flame_tested_survivor',
    name: 'Flame-Tested Survivor',
    description:
      'You gain fire resistance 5 and a +2 bonus on all saves against fire effects.',
    shortDescription: 'Fire resistance 5 and +2 saves vs. fire.',
    source: "Pathfinder: Legacy of Fire Player's Guide",
    types: ['achievement'],
    prerequisites: [{ type: 'special', description: 'Knocked unconscious or killed by fire damage at least 10 times' }],
    effects: [
      { type: 'save_bonus', target: 'fire', value: 2, bonusType: BonusType.UNTYPED, source: 'Flame-Tested Survivor' },
    ],
    activationMode: 'passive',
    tags: ['achievement', 'fire', 'resistance', 'legacy of fire'],
  },
  {
    id: 'gifted_mesmerist',
    name: 'Gifted Mesmerist',
    description:
      'Select one charm or compulsion spell you can cast. You can use it once daily as a spell-like ability at your normal CL and DC. You may swap the chosen spell when you gain a spellcasting class level.',
    shortDescription: '1/day charm or compulsion spell as SLA.',
    source: "Pathfinder: Legacy of Fire Player's Guide",
    types: ['achievement'],
    prerequisites: [{ type: 'special', description: 'Successfully affect 25 different targets with charm or compulsion spells' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Gifted Mesmerist' }],
    activationMode: 'conditional',
    tags: ['achievement', 'enchantment', 'charm', 'compulsion', 'spell-like ability'],
  },
  {
    id: 'graverisen',
    name: 'Graverisen',
    description:
      'You gain a single-use supernatural ability that activates automatically when you would die, leaving you alive and unaffected by the killing attack. Recharges each time you are resurrected.',
    shortDescription: 'Auto-cheat-death once; recharges on resurrection.',
    source: "Pathfinder: Legacy of Fire Player's Guide",
    types: ['achievement'],
    prerequisites: [{ type: 'special', description: 'Die and be brought back at least twice' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Graverisen' }],
    activationMode: 'conditional',
    tags: ['achievement', 'death', 'resurrection', 'survival'],
  },
  {
    id: 'healers_touch',
    name: "Healer's Touch",
    description:
      'Healing spells targeting others are maximized as though using Maximize Spell without increased casting time. When using healing spells to damage foes, they gain +4 to save DC instead.',
    shortDescription: 'Maximize healing spells on allies; +4 DC when using healing to harm.',
    source: "Pathfinder: Legacy of Fire Player's Guide",
    types: ['achievement'],
    prerequisites: [{ type: 'special', description: 'Cure 1,000 cumulative damage for others using healing spells (dealing damage reduces progress by 2 per point)' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: "Healer's Touch" }],
    activationMode: 'passive',
    tags: ['achievement', 'healing', 'maximize', 'cleric'],
  },
  {
    id: 'history_of_scars',
    name: 'History of Scars',
    description:
      'You gain a +2 natural armor bonus but take a -2 penalty on all Charisma-based skill checks.',
    shortDescription: '+2 natural armor; -2 CHA-based skill checks.',
    source: "Pathfinder: Legacy of Fire Player's Guide",
    types: ['achievement'],
    prerequisites: [{ type: 'special', description: 'Accumulate 1,000 points of damage (magical healing reduces total by 1 per 5 healed)' }],
    effects: [
      { type: 'ac_bonus', target: 'ac', value: 2, bonusType: BonusType.NATURAL, source: 'History of Scars' },
    ],
    activationMode: 'passive',
    tags: ['achievement', 'natural armor', 'charisma penalty', 'scars'],
  },
  {
    id: 'relentless_butcher',
    name: 'Relentless Butcher',
    description:
      'When you confirm a critical hit, the opponent must make a Fortitude save (DC 10 + your STR or DEX modifier) or be stunned for 1 round.',
    shortDescription: 'Crits stun foes for 1 round (Fort negates).',
    source: "Pathfinder: Legacy of Fire Player's Guide",
    types: ['achievement'],
    prerequisites: [{ type: 'special', description: 'Confirm at least 50 critical hits' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Relentless Butcher' }],
    activationMode: 'conditional',
    tags: ['achievement', 'critical hit', 'stun', 'brutal'],
  },
  {
    id: 'sandwalker',
    name: 'Sandwalker',
    description:
      'You move at 3/4 normal speed in desert sand instead of half speed. You gain +2 on Survival checks to find food and water and to avoid getting lost in deserts.',
    shortDescription: 'Faster desert movement; +2 Survival in deserts.',
    source: "Pathfinder: Legacy of Fire Player's Guide",
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'ability_score', ability: 'CON', minimum: 13 },
    ],
    effects: [{ type: 'skill_bonus', target: 'survival', value: 2, bonusType: BonusType.UNTYPED, source: 'Sandwalker' }],
    activationMode: 'passive',
    tags: ['desert', 'movement', 'survival', 'legacy of fire'],
  },

  // ─── Rise of the Runelords Player's Guide (4 new — Totem Spirit + Varisian Tattoo are reprints) ─
  {
    id: 'big_game_hunter',
    name: 'Big Game Hunter',
    description:
      'You gain a +1 bonus on attack rolls and +2 on weapon damage rolls against Large or larger creatures.',
    shortDescription: '+1 attack and +2 damage vs. Large+ creatures.',
    source: "Pathfinder: Rise of the Runelords Player's Guide",
    types: ['combat'],
    prerequisites: [],
    effects: [
      { type: 'attack_bonus', target: 'large_creatures', value: 1, bonusType: BonusType.UNTYPED, source: 'Big Game Hunter' },
      { type: 'damage_bonus', target: 'large_creatures', value: 2, bonusType: BonusType.UNTYPED, source: 'Big Game Hunter' },
    ],
    activationMode: 'conditional',
    tags: ['size', 'large', 'giant', 'varisia', 'runelords'],
  },
  {
    id: 'city_born',
    name: 'City Born',
    description:
      'Select Magnimar, Korvosa, or Riddleport as your home city. You gain +1 on Reflex saves. Magnimar: +2 Diplomacy. Korvosa: +2 Intimidate. Riddleport: +2 Bluff. Must be taken at 1st level; cannot have Country Born or Lone Wolf.',
    shortDescription: '+1 Reflex and +2 to one social skill based on home city. 1st level only.',
    source: "Pathfinder: Rise of the Runelords Player's Guide",
    types: ['general'],
    prerequisites: [{ type: 'special', description: '1st-level character; cannot have Country Born or Lone Wolf' }],
    effects: [{ type: 'save_bonus', target: 'reflex', value: 1, bonusType: BonusType.UNTYPED, source: 'City Born' }],
    activationMode: 'passive',
    tags: ['background', 'varisia', 'magnimar', 'korvosa', 'riddleport'],
  },
  {
    id: 'country_born',
    name: 'Country Born',
    description:
      'Once per day you can ignore a fatigue or exhaustion effect. You gain +1 on Will saves. Must be taken at 1st level; cannot have City Born or Lone Wolf.',
    shortDescription: '1/day ignore fatigue/exhaustion; +1 Will saves. 1st level only.',
    source: "Pathfinder: Rise of the Runelords Player's Guide",
    types: ['general'],
    prerequisites: [{ type: 'special', description: '1st-level character; cannot have City Born or Lone Wolf' }],
    effects: [{ type: 'save_bonus', target: 'will', value: 1, bonusType: BonusType.UNTYPED, source: 'Country Born' }],
    activationMode: 'passive',
    tags: ['background', 'varisia', 'rural', 'endurance'],
  },
  {
    id: 'lone_wolf',
    name: 'Lone Wolf',
    description:
      'You have a 50% chance to stabilize when dying. You gain +1 on Fortitude saves. Must be taken at 1st level; cannot have City Born or Country Born.',
    shortDescription: '50% auto-stabilize when dying; +1 Fortitude saves. 1st level only.',
    source: "Pathfinder: Rise of the Runelords Player's Guide",
    types: ['general'],
    prerequisites: [{ type: 'special', description: '1st-level character; cannot have City Born or Country Born' }],
    effects: [{ type: 'save_bonus', target: 'fortitude', value: 1, bonusType: BonusType.UNTYPED, source: 'Lone Wolf' }],
    activationMode: 'passive',
    tags: ['background', 'varisia', 'survival', 'stabilize'],
  },
];
