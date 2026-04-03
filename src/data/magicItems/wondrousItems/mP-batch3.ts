import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsMP3: WondrousItemDefinition[] = [
  {
    id: 'wondrous-masters-perfect-golden-bell',
    name: "Master's Perfect Golden Bell",
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'none',
    price: 20000,
    weight: 3,
    description:
      'This ornate golden bell produces a clear, resonant tone that disrupts psychic and occult effects. ' +
      'When rung as a standard action, it creates a 30-foot-radius burst that functions as dispel magic ' +
      'targeting psychic and mind-affecting effects. The bell can be rung 3 times per day.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['dispel magic'], cost: 10000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.golden_bell_dispel', value: 0, source: "Master's Perfect Golden Bell" }],
  },
  {
    id: 'wondrous-masters-call',
    name: "Masters' Call",
    category: 'wondrous',
    source: 'Inner Sea Monster Codex',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 10,
    slot: 'neck',
    price: 34000,
    weight: 0,
    description:
      'A platinum filigree-wrapped spiral-shell amulet on an ornate tentacle-like chain. The wearer\'s enchantment spells ' +
      'treat gillman targets as if from aboleth sources, imposing additional Will save penalties. Once daily, the wearer ' +
      'can trigger dominate person (Will DC 18) in Aboleth, followed by potential modify memory casting (Will DC 17) on the same target.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['dominate person', 'modify memory'], cost: 17000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.masters_call_dominate', value: 0, source: "Masters' Call" }],
  },
  {
    id: 'wondrous-mattock-of-the-titans',
    name: 'Mattock of the Titans',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'none',
    price: 23348,
    weight: 120,
    description:
      'This 10-foot-long digging implement allows creatures of Huge size or larger to excavate earth or earthen structures at ' +
      'a rate of one 10-foot cube per 10 minutes, or break through rock at one 10-foot cube per hour. When wielded as a weapon, ' +
      'it functions as a Gargantuan +3 adamantine warhammer, inflicting 4d6 base damage.',
    construction: { feats: ['Craft Wondrous Item', 'Craft Magic Arms and Armor'], spells: ['move earth'], cost: 13348 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.mattock_titans_excavation', value: 0, source: 'Mattock of the Titans' }],
  },
  {
    id: 'wondrous-maw-of-the-wyrm',
    name: 'Maw of the Wyrm',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'head',
    price: 18000,
    weight: 3,
    description:
      'This dragon-shaped helm grants the wearer a +4 competence bonus on Intimidate checks and a +4 insight bonus on saves to ' +
      'resist a dragon\'s frightful presence aura. Once per day, the wearer can breathe energy matching the dragon type the helm ' +
      'resembles, dealing 7d6 damage with a Reflex save DC 16.',
    construction: { feats: ['Craft Wondrous Item'], spells: ["dragon's breath"], cost: 9000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.intimidate', value: 4, source: 'Maw of the Wyrm' },
      { type: 'bonus', bonusType: 'insight', target: 'save.fear', value: 4, source: 'Maw of the Wyrm', condition: { type: 'custom', params: {}, description: 'vs. dragon frightful presence only' } },
    ],
  },
  {
    id: 'wondrous-medallion-of-demonic-disruption',
    name: 'Medallion of Demonic Disruption',
    category: 'wondrous',
    source: 'People of the Wastes',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'neck',
    price: 32000,
    weight: 1,
    description:
      'This blue-tinged white gold medallion on a silver chain interferes with demon summoning. When demons attempt to summon ' +
      'creatures within 100 feet of the wearer, they must succeed at a concentration check (DC 15 + twice the summon ability level). ' +
      'Failed checks waste the ability entirely, while successful checks reduce summoned creatures to just one.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['dimensional anchor'], cost: 16000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.medallion_demonic_disruption', value: 0, source: 'Medallion of Demonic Disruption' }],
  },
  {
    id: 'wondrous-medallion-of-thoughts',
    name: 'Medallion of Thoughts',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'neck',
    price: 12000,
    weight: 0,
    description:
      'This neck pendant, typically crafted from bronze, copper, or silver, grants the wearer the ability to read the thoughts ' +
      'of others, as with the spell detect thoughts.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['detect thoughts'], cost: 6000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.medallion_thoughts_detect', value: 0, source: 'Medallion of Thoughts' }],
  },
  {
    id: 'wondrous-drowning-medallion',
    name: 'Drowning Medallion',
    category: 'wondrous',
    source: 'People of the River',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 10,
    slot: 'neck',
    price: 1000,
    weight: 1,
    description:
      'This stone disk pendant protects wearers from drowning by extending the time before asphyxiation. If the wearer falls ' +
      'unconscious from drowning, she can remain unconscious for up to 10 minutes before making Constitution checks to avoid ' +
      'asphyxiation. The wearer regains consciousness at 0 HP one round after escaping water, then the medallion disintegrates.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['air bubble'], cost: 500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.drowning_medallion_protection', value: 0, source: 'Drowning Medallion' }],
  },
  {
    id: 'wondrous-mind-sentinel-medallion',
    name: 'Mind Sentinel Medallion',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'neck',
    price: 3500,
    weight: 0,
    description:
      'This silver medallion features angular geometric patterns. It provides a continuous +2 resistance bonus on saves versus ' +
      'mind-affecting spells, spell-like abilities, and supernatural abilities. If the wearer fails a save against domination or ' +
      'confusion, they receive an additional saving throw. If the second save succeeds, the medallion loses its magic.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['protection from evil'], cost: 1750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.mind_affecting', value: 2, source: 'Mind Sentinel Medallion' },
    ],
  },
  {
    id: 'wondrous-star-medallion',
    name: 'Star Medallion',
    category: 'wondrous',
    source: 'Rise of the Runelords Anniversary Edition',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'neck',
    price: 3500,
    weight: 0,
    description:
      'A silver disc inscribed with a seven-pointed star on a leather cord. While worn, it grants a +1 resistance bonus on all ' +
      'saving throws. Once per day as a free action, it bestows false life on the wearer. When placed on the neck of a dead body, ' +
      'it preserves the body indefinitely via gentle repose.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['false life', 'gentle repose', 'resistance'], cost: 1750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.all', value: 1, source: 'Star Medallion' },
    ],
  },
  {
    id: 'wondrous-medicinal-bezoar',
    name: 'Medicinal Bezoar',
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 8,
    slot: 'none',
    price: 1600,
    weight: 0,
    description:
      'This finger-sized stone grants the consumer neutralize poison effects and provides a +4 bonus on saving throws against ' +
      'addiction for 24 hours. The item is consumed upon use.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['neutralize poison'], cost: 800 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'save.poison', value: 4, source: 'Medicinal Bezoar', condition: { type: 'custom', params: {}, description: 'vs. addiction for 24 hours' } },
    ],
  },
  {
    id: 'wondrous-mediums-harrow-mat',
    name: "Medium's Harrow Mat",
    category: 'wondrous',
    source: 'The Harrow Handbook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'none',
    price: 2500,
    weight: 1,
    description:
      'This magical mat enhances a harrower\'s connection to ancestral spirits. When used as a focus component for harrowing spells, ' +
      'it increases the caster\'s effective level by one. When used to perform a harrowing over a grave or burial site, the spirit ' +
      'of the interred body influences the harrowing — for each card drawn related to the past, the harrower draws twice and chooses.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['speak with dead'], cost: 1250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.mediums_harrow_mat', value: 0, source: "Medium's Harrow Mat" }],
  },
  {
    id: 'wondrous-meduseion',
    name: 'Meduseion',
    category: 'wondrous',
    source: 'Agents of Evil',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',
    price: 45000,
    weight: 10,
    description:
      'This preserved medusa head grants wielders a passive ability affecting nearby creatures\' defenses. All living beings ' +
      'within 100 feet suffer a -2 penalty on saving throws against poison and petrification. Three times daily, the wielder ' +
      'can trigger a petrifying ray attack (ranged touch, 100 ft range) forcing a DC 19 Fortitude save; failure results in ' +
      'permanent petrification.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['alarm', 'flesh to stone'], cost: 22500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'special', target: 'special.meduseion_petrify_aura', value: 0, source: 'Meduseion' },
    ],
  },
  {
    id: 'wondrous-meltdown-safe',
    name: 'Meltdown Safe',
    category: 'wondrous',
    source: 'Technology Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'none',
    price: 10000,
    weight: 10,
    description:
      'This metal lockbox is designed to contain technological items that might otherwise be dangerous. Items placed inside are ' +
      'protected from glitches and meltdowns, and the safe itself is hardened against fire and electricity damage.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fire trap', 'secret chest'], cost: 5000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.meltdown_safe_protection', value: 0, source: 'Meltdown Safe' }],
  },
  {
    id: 'wondrous-mirror-of-guarding-reflections',
    name: 'Mirror of Guarding Reflections',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 7,
    slot: 'none',
    price: 7000,
    weight: 4,
    description:
      'This hand mirror summons a ghostly reflection to block incoming attacks. When targeted, the bearer may use an immediate ' +
      'action to create an image functioning like mirror image. If struck, the image breaks and curses the attacker — forcing ' +
      'them to roll twice on their next attack or save, taking the worse result. The image fades at the start of the bearer\'s ' +
      'next turn. The item has 3 uses per day.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['mirror image'], cost: 3500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.mirror_guarding_reflections', value: 0, source: 'Mirror of Guarding Reflections' }],
  },
  {
    id: 'wondrous-mirror-of-life-trapping',
    name: 'Mirror of Life Trapping',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 17,
    slot: 'none',
    price: 200000,
    weight: 50,
    description:
      'This 4-foot-square crystal mirror framed in metal or wood traps creatures who view their reflections. Contains 15 ' +
      'extradimensional compartments. Any creature within 30 feet that looks at its reflection must succeed at a DC 23 Will save ' +
      'or become trapped inside. Those aware of the mirror have only a 50% chance of seeing their reflection. The owner can ' +
      'communicate with and release trapped creatures. If destroyed (hardness 1, 5 HP), all prisoners escape.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['imprisonment'], cost: 100000 },
    physicalStats: { hardness: 1, hitPoints: 5, breakDC: 10 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.mirror_life_trapping', value: 0, source: 'Mirror of Life Trapping' }],
  },
  {
    id: 'wondrous-mirror-of-mental-prowess',
    name: 'Mirror of Mental Prowess',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION },
    ],
    casterLevel: 17,
    slot: 'none',
    price: 175000,
    weight: 40,
    description:
      'This 5-foot-tall, 2-foot-wide mirror grants several abilities: reading surface thoughts of reflected creatures within ' +
      '25 feet, scrying distant locations including other planes, creating a temporary portal for travel, and once weekly ' +
      'answering a short question about a creature shown in the mirror.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['clairaudience/clairvoyance', 'detect thoughts', 'gate', 'legend lore'], cost: 87500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.mirror_mental_prowess', value: 0, source: 'Mirror of Mental Prowess' }],
  },
  {
    id: 'wondrous-mirror-of-opposition',
    name: 'Mirror of Opposition',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 15,
    slot: 'none',
    price: 92000,
    weight: 45,
    description:
      'This 4-foot-long, 3-foot-wide mirror creates exact duplicates of creatures who view their reflection. When activated ' +
      'via command word, the duplicate immediately attacks the original with all items and abilities. Either\'s defeat causes ' +
      'both to vanish. Functions up to 4 times daily. Destroying it (hardness 1, 5 HP) causes all duplicates to disappear.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['clone'], cost: 46000 },
    physicalStats: { hardness: 1, hitPoints: 5, breakDC: 10 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.mirror_opposition_duplicate', value: 0, source: 'Mirror of Opposition' }],
  },
  {
    id: 'wondrous-mitre-of-the-hierophant',
    name: 'Mitre of the Hierophant',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'head',
    price: 18000,
    weight: 2,
    description:
      'This ceremonial headpiece requires the wearer to be capable of casting divine magic. It provides a +5 competence bonus on ' +
      'Diplomacy and Knowledge (religion) checks. The wearer can ask a deity one question daily (via commune) and perform a ' +
      'touch-based atonement ritual once weekly.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['atonement', 'commune', 'guidance'], cost: 9000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.diplomacy', value: 5, source: 'Mitre of the Hierophant' },
      { type: 'bonus', bonusType: 'competence', target: 'skill.knowledge_religion', value: 5, source: 'Mitre of the Hierophant' },
    ],
  },
  {
    id: 'wondrous-mockingskull',
    name: 'Mockingskull',
    category: 'wondrous',
    source: 'Agents of Evil',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',
    price: 8000,
    weight: 2,
    description:
      'These magical undead sentries are crafted from humanoid skulls with gem inlays as eyes. They possess enhanced perception ' +
      'with a +8 bonus and can deter intruders or emit terrifying vocalizations. They can make intimidation attempts at +10 each ' +
      'round against nearby creatures. They operate as single-HD mindless undead with hardness 3 and 10 HP that restore at midnight.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['alarm', 'animate dead'], cost: 4000 },
    physicalStats: { hardness: 3, hitPoints: 10, breakDC: 15 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.mockingskull_sentry', value: 0, source: 'Mockingskull' }],
  },
];
