import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsMP5: WondrousItemDefinition[] = [
  {
    id: 'wondrous-necromancers-athame',
    name: "Necromancer's Athame",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 11,
    slot: 'none',
    price: 20000,
    weight: 2,
    description:
      'This pallid length of sharpened thighbone carved into the shape of a dagger with tiny holes bored at intervals. When a ' +
      'necromancer designates it as their bonded object, they may spontaneously exchange any prepared wizard necromancy spell ' +
      'for another wizard necromancy spell they know, provided the new spell is equal to or lower in level.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['create undead'], cost: 10000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.necromancers_athame_swap', value: 0, source: "Necromancer's Athame" }],
  },
  {
    id: 'wondrous-neverspill-goblet',
    name: 'Neverspill Goblet',
    category: 'wondrous',
    source: 'Inner Sea Temples',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'none',
    price: 1000,
    weight: 1,
    description:
      'This magical vessel holds up to 1 cup of liquid without spilling, regardless of movement or orientation. Only dispenses ' +
      'to willing drinkers and prevents accidental liquid entry. Fluids remain undiluted even if submerged, enabling potion ' +
      'consumption underwater. Liquids placed inside do not succumb to temperature or time.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['gentle repose'], cost: 500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.neverspill_goblet', value: 0, source: 'Neverspill Goblet' }],
  },
  {
    id: 'wondrous-nightdrops',
    name: 'Nightdrops',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 250,
    weight: 0,
    description:
      'A narrow vial containing 5 doses of thick liquid that grants low-light vision for 1 hour when applied to eyes. ' +
      'Users experience a -2 penalty on saving throws against light-based effects and develop light sensitivity.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['beast shape I'], cost: 125 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'special', target: 'special.nightdrops_low_light_vision', value: 0, source: 'Nightdrops' },
      { type: 'penalty', target: 'save.fortitude', value: -2, source: 'Nightdrops', condition: { type: 'custom', params: {}, description: 'vs. light-based effects' } },
    ],
  },
  {
    id: 'wondrous-nightmare-tears',
    name: 'Nightmare Tears',
    category: 'wondrous',
    source: 'Lost Cities of Golarion',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',
    price: 250,
    weight: 0,
    description:
      'This toxic solution grants true seeing when applied to eyes, allowing vision through supernatural effects like those from ' +
      'the Plateau of Leng and spells such as weird, nightmare, and phantasmal killer. Lasts 1 hour but causes temporary ' +
      'blindness (1d4 rounds) and 1d4 Wisdom damage. DC 11 Will save or both effects are permanent.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['blindness', 'true seeing'], cost: 125 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'special', target: 'special.nightmare_tears_true_seeing', value: 0, source: 'Nightmare Tears' },
    ],
  },
  {
    id: 'wondrous-oil-of-attraction',
    name: 'Oil of Attraction',
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'none',
    price: 1700,
    weight: 0,
    description:
      'This unguent targets specific creature types (demons, devils, dragons, hags, lycanthropes, vampires). When thrown as a ' +
      'touch attack, provides +10 to Survival tracking checks against the coated target. Grants +1 on Bluff, Knowledge, ' +
      'Perception, Sense Motive, Survival checks, and attack/damage rolls against the affected creature for 1 hour.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bestow curse'], cost: 850 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'skill.survival', value: 10, source: 'Oil of Attraction', condition: { type: 'custom', params: {}, description: 'tracking coated creature only' } },
    ],
  },
  {
    id: 'wondrous-oil-of-silence',
    name: 'Oil of Silence',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'none',
    price: 250,
    weight: 0,
    description:
      'This grayish oil silences firearms when applied. A single vial works on one-handed or two-handed firearms for one hour. ' +
      'Five vials silence a Large siege firearm, ten vials for Huge. Cannot suppress noise from siege engines exceeding Huge size.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['silence'], cost: 125 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.oil_silence_firearm', value: 0, source: 'Oil of Silence' }],
  },
  {
    id: 'wondrous-flying-ointment',
    name: 'Flying Ointment',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',
    price: 2250,
    weight: 0,
    description:
      'This herbal preparation contains belladonna, mandrake, and foxglove mixed into rendered fats. When rubbed over the skin, ' +
      'it grants the subject the ability to fly (as overland flight) for up to 9 hours.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['overland flight'], cost: 1125 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'grant_movement', target: 'fly', value: 40, source: 'Flying Ointment' }],
  },
  {
    id: 'wondrous-purifying-ointment',
    name: 'Purifying Ointment',
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 5,
    slot: 'none',
    price: 4000,
    weight: 0,
    description:
      'This pale green unguent comes in scarab beetle-shaped jars with 5 applications. When applied or ingested, it eliminates ' +
      'a single curse or restores ability damage from undead attacks. Functions similarly to lesser restoration or remove curse ' +
      'with a +5 bonus. Can address combined curse-and-disease afflictions (like mummy rot) requiring two checks.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['lesser restoration', 'remove curse', 'remove disease'], cost: 2000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.purifying_ointment_remove', value: 0, source: 'Purifying Ointment' }],
  },
  {
    id: 'wondrous-restorative-ointment',
    name: 'Restorative Ointment',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 4000,
    weight: 0,
    description:
      'This unguent comes in a 3-inch diameter jar containing 5 applications. It can detoxify poisons (as neutralize poison ' +
      'with +5 bonus), cure diseases (as remove disease with +5 bonus), or heal 1d8+5 points of damage (as cure light wounds).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['cure light wounds', 'neutralize poison', 'remove disease'], cost: 2000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.restorative_ointment', value: 0, source: 'Restorative Ointment' }],
  },
  {
    id: 'wondrous-orb-of-arcane-research',
    name: 'Orb of Arcane Research',
    category: 'wondrous',
    source: 'Quests and Campaigns',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',
    price: 7000,
    weight: 6,
    description:
      'This translucent orb swirls with eldritch energy. It grants a +2 competence bonus on Spellcraft checks when researching ' +
      'spells. On command word, grants a +5 insight bonus on Craft (alchemy), Knowledge (arcana), Knowledge (nature), or ' +
      'Spellcraft checks related to spell research or formula extraction. Can be used 5 times before cracking and losing all magic.',
    construction: { feats: ['Craft Wondrous Item', 'Scribe Scroll'], spells: ['read magic'], cost: 3500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.spellcraft', value: 2, source: 'Orb of Arcane Research', condition: { type: 'custom', params: {}, description: 'spell research only' } },
    ],
  },
  {
    id: 'wondrous-orb-of-consumption',
    name: 'Orb of Consumption',
    category: 'wondrous',
    source: 'Pathfinder #62: Curse of the Lady\'s Light',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 15,
    slot: 'none',
    price: 10000,
    weight: 9,
    description:
      'A hollow pink glass sphere the size of a halfling\'s head. When activated with command word and held with both hands, ' +
      'it emits pulsing light for up to 6 rounds/day while concentrating. Creatures within 10 feet (Int 3+) must make DC 15 ' +
      'Will saves or be compelled to touch it. First touch deals 1d2 CON and 1d2 WIS damage (DC 15 negates). The user gains ' +
      'a +4 enhancement bonus to Charisma for 1 hour per point of damage dealt.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bestow curse', "eagle's splendor"], cost: 5000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.orb_consumption_drain', value: 0, source: 'Orb of Consumption' }],
  },
  {
    id: 'wondrous-orb-of-foul-abaddon',
    name: 'Orb of Foul Abaddon',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 10,
    slot: 'none',
    price: 18000,
    weight: 1,
    description:
      'This dark stone sphere contains glowing orange fire. It grants the wielder a daily dread bolt ability. When used to ' +
      'focus evil-descriptor spells, it provides a +1 caster level bonus. Good creatures carrying it suffer one permanent ' +
      'negative level that persists only while holding the item.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['dread bolt'], cost: 9000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'spell.caster_level', value: 1, source: 'Orb of Foul Abaddon', condition: { type: 'custom', params: {}, description: 'evil descriptor spells only' } },
      { type: 'penalty', target: 'special.negative_level', value: -1, source: 'Orb of Foul Abaddon', condition: { type: 'custom', params: {}, description: 'good creatures only' } },
    ],
  },
  // Deferred items (AoN pages did not render):
  // Fey Child Necklace, Necrograft, Needles of Fleshgraving, Noble's Vigilant Pillbox,
  // Nose Ring of Unearthly Scent, Null Spike, Numerology Cylinder, Oath Breaker's Brand,
  // Oculus of Magnetic Fury, Ofuda of Dimensional Warding, Machinebane Oil,
  // Ointment of Void Sealing, One-Way Window
];
