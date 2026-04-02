import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

// Inner Sea Magic (6 new), Inner Sea Intrigue (5 new), Occult Mysteries (3 new)
// Magical Marketplace — all 5 already exist, skipped entirely

export const TIER3_BATCH5_FEATS: FeatDefinition[] = [
  // ─── Inner Sea Magic (False Focus already in miscBooks1.ts) ───────────────────
  {
    id: 'false_casting',
    name: 'False Casting',
    description:
      'When activating magic items or spell-like abilities, you can add convincing words and gestures so observers think you cast a spell. Spellcraft checks to identify what you "cast" are opposed by your Bluff check. Identification DC becomes 20 + spell level instead of 15 + spell level.',
    shortDescription: 'Disguise magic item/SLA use as spellcasting via Bluff.',
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'magical_aptitude' },
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 1 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'False Casting' }],
    activationMode: 'conditional',
    tags: ['deception', 'bluff', 'spellcraft', 'magic item'],
  },
  {
    id: 'inscribe_magical_tattoo',
    name: 'Inscribe Magical Tattoo',
    description:
      'You can craft magical tattoos inked into willing or helpless creatures. Tattoos occupy standard magic item slots without interfering with worn items. One tattoo per slot. Follow wondrous item creation rules. Can be destroyed via dispel magic, erase (Will negates), or physical damage (2 points per CL). Priced as slotless items.',
    shortDescription: 'Create magical tattoos that occupy item slots without blocking worn items.',
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
    types: ['item_creation'],
    prerequisites: [
      { type: 'skill', skillId: 'craft_tattoo', ranks: 5 },
      { type: 'caster_level', minimum: 5 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Inscribe Magical Tattoo' }],
    activationMode: 'passive',
    tags: ['item creation', 'tattoo', 'crafting', 'wondrous item'],
  },
  {
    id: 'shadow_gambit',
    name: 'Shadow Gambit',
    description:
      'As a standard action, convert an active figment illusion into a damaging attack. Choose melee touch attack or allow a save (Fort or Reflex). Deals 1d6 damage per spell level. Damage type matches what the illusion depicts (acid, bludgeoning, cold, electricity, fire, piercing, or slashing). Disbelief reduces damage. Ends the illusion.',
    shortDescription: 'Convert a figment illusion into a 1d6/spell level damaging attack.',
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'spell_focus_illusion' },
      { type: 'caster_level', minimum: 5 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Shadow Gambit' }],
    activationMode: 'conditional',
    tags: ['illusion', 'figment', 'shadow', 'damage', 'conversion'],
  },
  {
    id: 'shadow_grasp',
    name: 'Shadow Grasp',
    description:
      'Darkness descriptor spells you cast that affect an area also entangle creatures that fail their saves. Non-saving spells allow a Reflex save. Entanglement persists while in the area plus 1 round after leaving. You are unaffected. Uses a spell slot 1 level higher.',
    shortDescription: 'Darkness spells entangle creatures in the area (+1 spell level).',
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
    types: ['metamagic'],
    prerequisites: [
      { type: 'feat', featId: 'tenebrous_spell' },
      { type: 'feat', featId: 'umbral_spell' },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Shadow Grasp' }],
    activationMode: 'conditional',
    tags: ['metamagic', 'darkness', 'entangle', 'shadow'],
  },
  {
    id: 'tenebrous_spell',
    name: 'Tenebrous Spell',
    description:
      'In darkness or dim light, the spell\'s effective CL and save DCs increase by 1, and dispel attempts take -2. In bright light, requires concentration check (DC 15 + 2x spell level) and dispels get +4. Cannot apply to light descriptor spells. Darkness/shadow/illusion (shadow) spells don\'t increase slot level; others use +1 level.',
    shortDescription: '+1 CL and DC in darkness; penalty in bright light (+1 spell level for most).',
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
    types: ['metamagic'],
    prerequisites: [],
    effects: [{ type: 'special', value: 1, bonusType: BonusType.UNTYPED, target: 'caster_level', source: 'Tenebrous Spell' }],
    activationMode: 'conditional',
    tags: ['metamagic', 'darkness', 'shadow', 'caster level'],
  },
  {
    id: 'umbral_spell',
    name: 'Umbral Spell',
    description:
      'Your spell gains the darkness descriptor. The affected creature/object radiates darkness in a 10 ft radius (as darkness spell). Nonmagical light doesn\'t work in this area; magical light only works if spell level exceeds the umbral spell\'s base level. +2 spell level. Cannot apply to instantaneous spells or those without creature/object targets.',
    shortDescription: 'Spell target radiates 10 ft darkness (+2 spell level).',
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
    types: ['metamagic'],
    prerequisites: [{ type: 'feat', featId: 'tenebrous_spell' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Umbral Spell' }],
    activationMode: 'conditional',
    tags: ['metamagic', 'darkness', 'shadow', 'illumination'],
  },

  // ─── Inner Sea Intrigue (Stylized Spell already in acg-extra.ts) ──────────────
  {
    id: 'convincing_persona',
    name: 'Convincing Persona',
    description:
      'You gain a +5 circumstance bonus on Bluff checks to convince people your masked persona and true identity are different people, and on Disguise checks to maintain your masked persona.',
    shortDescription: '+5 Bluff and Disguise for maintaining a masked dual identity.',
    source: 'Pathfinder Campaign Setting: Inner Sea Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Bluff 5 ranks and Perform (act) 5 ranks, or dual identity class feature' }],
    effects: [
      { type: 'bonus', target: 'bluff', value: 5, bonusType: BonusType.CIRCUMSTANCE, source: 'Convincing Persona' },
      { type: 'bonus', target: 'disguise', value: 5, bonusType: BonusType.CIRCUMSTANCE, source: 'Convincing Persona' },
    ],
    activationMode: 'conditional',
    tags: ['vigilante', 'dual identity', 'disguise', 'bluff', 'intrigue'],
  },
  {
    id: 'greater_stylized_spell',
    name: 'Greater Stylized Spell',
    description:
      'You can apply one stylized magic option without penalty to spell identification DC. You may apply up to two extra options, each reducing the identification DC by 5 per option.',
    shortDescription: 'Free first stylized option; additional options reduce ID DC by 5 each.',
    source: 'Pathfinder Campaign Setting: Inner Sea Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'stylized_spell' },
      { type: 'skill', skillId: 'bluff', ranks: 10 },
      { type: 'skill', skillId: 'spellcraft', ranks: 10 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Greater Stylized Spell' }],
    activationMode: 'conditional',
    tags: ['stylized', 'spell identification', 'bluff', 'intrigue'],
  },
  {
    id: 'masked_renown',
    name: 'Masked Renown',
    description:
      'You gain the vigilante\'s renown social talent, allowing you to build a reputation in a community. At 9th level, you may select this feat again for the great renown talent.',
    shortDescription: 'Gain vigilante renown social talent for your masked persona.',
    source: 'Pathfinder Campaign Setting: Inner Sea Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'skill', skillId: 'disguise', ranks: 2 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Masked Renown' }],
    activationMode: 'passive',
    tags: ['vigilante', 'renown', 'social', 'intrigue'],
  },
  {
    id: 'masked_symbol',
    name: 'Masked Symbol',
    description:
      'Your masked persona represents a concept, granting bonuses: Faith (+2 Diplomacy with faithful, +2 Intimidate vs. enemies of faith), Fear (+3 Intimidate), Hope (+3 Diplomacy), Leadership (+2 Leadership score), Mystery (+2 Disguise/Stealth), The People (+2 influence crowds), Trust (+2 Bluff/Diplomacy requests). Choose one per level.',
    shortDescription: 'Choose a symbol for your persona granting social skill bonuses.',
    source: 'Pathfinder Campaign Setting: Inner Sea Intrigue',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Disguise 1 rank or dual identity class feature' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Masked Symbol' }],
    activationMode: 'passive',
    tags: ['vigilante', 'symbol', 'social', 'intrigue', 'persona'],
  },
  {
    id: 'stylized_spell_mastery',
    name: 'Stylized Spell Mastery',
    description:
      'When you apply Stylized Spell metamagic to a spell you\'ve mastered via Spell Mastery, you do not increase the spell slot used.',
    shortDescription: 'Free Stylized Spell on Spell Mastery spells (no slot increase).',
    source: 'Pathfinder Campaign Setting: Inner Sea Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'spell_mastery' },
      { type: 'feat', featId: 'stylized_spell' },
      { type: 'skill', skillId: 'bluff', ranks: 5 },
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Stylized Spell Mastery' }],
    activationMode: 'passive',
    tags: ['stylized', 'spell mastery', 'metamagic', 'intrigue'],
  },
  {
    id: 'stylized_spontaneity',
    name: 'Stylized Spontaneity',
    description:
      'You can modify your spells\' apparent components on the fly. When applying stylized magic, make a caster level check (DC = 5 + 2x spell level + 5 per modification). Failure wastes the spell.',
    shortDescription: 'Apply stylized magic spontaneously with a caster level check.',
    source: 'Pathfinder Campaign Setting: Inner Sea Intrigue',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 5 },
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Stylized Spontaneity' }],
    activationMode: 'conditional',
    tags: ['stylized', 'spontaneous', 'caster level check', 'intrigue'],
  },

  // ─── Occult Mysteries (Sacred Geometry already in acg-extra.ts) ───────────────
  {
    id: 'agonizing_obedience',
    name: 'Agonizing Obedience',
    description:
      'Select an agony and perform daily 1-hour obediences to gain elemental/attack resistances. Agony strikes (1 + 1/5 HD times daily) inflict your agony\'s penalties for 1 minute. Scaling boons at 12+, 16+, 20+ HD. Missing an obedience or healing agony damage removes all benefits. Agonies include Amputation, Blinding, and Flensing.',
    shortDescription: 'Daily self-harm obedience for resistances, agony strikes, and scaling boons.',
    source: 'Pathfinder Campaign Setting: Occult Mysteries',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'heal', ranks: 3 }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Agonizing Obedience' }],
    activationMode: 'conditional',
    tags: ['obedience', 'agony', 'self-harm', 'boon', 'resistance'],
  },
  {
    id: 'arithmancy',
    name: 'Arithmancy',
    description:
      'As a swift action before casting, calculate the digital root of the spell\'s name. Spellcraft check (DC 10 + spell level + digital root): success grants +1 CL, failure imposes -1 CL. If you don\'t cast the intended spell, it\'s expended. Usable times per day equal to caster level.',
    shortDescription: 'Swift action Spellcraft check for +1/-1 CL based on spell name numerology.',
    source: 'Pathfinder Campaign Setting: Occult Mysteries',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'spell_focus_divination' },
      { type: 'skill', skillId: 'spellcraft', ranks: 3 },
    ],
    effects: [{ type: 'special', value: 1, bonusType: BonusType.UNTYPED, target: 'caster_level', source: 'Arithmancy' }],
    activationMode: 'conditional',
    tags: ['numerology', 'caster level', 'spellcraft', 'divination'],
  },
  {
    id: 'calculating_mind',
    name: 'Calculating Mind',
    description:
      'When using Sacred Geometry, you can use d8s instead of d6s for your dice pool. You may mix d6s and d8s freely, limited by Knowledge (engineering) ranks.',
    shortDescription: 'Use d8s instead of d6s for Sacred Geometry dice pool.',
    source: 'Pathfinder Campaign Setting: Occult Mysteries',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'sacred_geometry' },
      { type: 'skill', skillId: 'knowledge_engineering', ranks: 5 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Calculating Mind' }],
    activationMode: 'passive',
    tags: ['sacred geometry', 'mathematics', 'dice pool', 'metamagic'],
  },
];
