import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsRZ1: WondrousItemDefinition[] = [
  {
    id: 'wondrous-ring-gates',
    name: 'Ring Gates',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 17,
    slot: 'none',
    price: 40000,
    weight: 1,
    description:
      'Matched pair of 18-inch iron rings. Must be on the same plane within 100 miles. Up to 100 pounds of material can ' +
      'transfer daily. Users can retrieve items, attack through, cast spells, or peer through. Small creatures can pass ' +
      'through with DC 13 Escape Artist; Tiny or smaller pass freely.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['gate'], cost: 20000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.ring_gates_portal', value: 0, source: 'Ring Gates' }],
  },
  {
    id: 'wondrous-robe-of-arcane-heritage',
    name: 'Robe of Arcane Heritage',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'body',
    price: 16000,
    weight: 1,
    description:
      'Dark purple robes with gold stitching that reweaves to match the wearer\'s sorcerer bloodline. Grants an effective ' +
      '+4 sorcerer level when determining bloodline power access and effectiveness.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['speak with dead'], cost: 8000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'bonus', target: 'special.sorcerer_bloodline_level', value: 4, source: 'Robe of Arcane Heritage' }],
  },
  {
    id: 'wondrous-robe-of-blending',
    name: 'Robe of Blending',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'body',
    price: 8400,
    weight: 1,
    description:
      'This woolen garment enables the wearer to assume the form of another humanoid creature (as alter self) once daily ' +
      'for up to one hour. The transformation grants the ability to speak and understand the basic racial languages of the form.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['alter self', 'tongues'], cost: 4200 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    spellLikeAbilities: [
      { spells: [{ spellId: 'alter_self', spellName: 'Alter Self', casterLevel: 10, usesPerDay: 1, activationAction: 'standard' }] },
    ],
    effects: [{ type: 'special', target: 'special.robe_blending_alter_self', value: 0, source: 'Robe of Blending' }],
  },
  {
    id: 'wondrous-robe-of-bones',
    name: 'Robe of Bones',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 6,
    slot: 'body',
    price: 2400,
    weight: 1,
    description:
      'A robe with small embroidered undead figures visible only to the wearer. One figure can be detached per round, ' +
      'manifesting as an actual undead creature. Created undead are uncontrolled initially but can be commanded. Contains ' +
      'two each of: human skeleton, wolf skeleton, heavy horse skeleton, fast goblin zombie, tough human zombie, plague ogre zombie.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate dead'], cost: 1200 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.robe_bones_summon_undead', value: 0, source: 'Robe of Bones' }],
  },
  {
    id: 'wondrous-robe-of-components',
    name: 'Robe of Components',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'body',
    price: 5000,
    weight: 1,
    description:
      'This blue robe functions as a spell component pouch, automatically providing necessary spell components and focuses. ' +
      'Can generate materials worth up to 50 gp daily. Materials disappear if they leave the wearer\'s person or when the spell is cast.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['minor creation'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.robe_components_auto_supply', value: 0, source: 'Robe of Components' }],
  },
  {
    id: 'wondrous-robe-of-eyes',
    name: 'Robe of Eyes',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'body',
    price: 120000,
    weight: 1,
    description:
      'Eye-patterned garment granting all-around vision. 120 ft darkvision, see invisible/ethereal within 120 ft, ' +
      '+10 competence on Perception, retain DEX to AC when flat-footed, cannot be flanked. Cannot avert eyes vs. gaze attacks. ' +
      'Light-based spells cause temporary blindness.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['true seeing'], cost: 60000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.perception', value: 10, source: 'Robe of Eyes' },
      { type: 'grant_sense', target: 'darkvision', value: 120, source: 'Robe of Eyes' },
    ],
  },
  {
    id: 'wondrous-robe-of-gates',
    name: 'Robe of Gates',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 17,
    slot: 'body',
    price: 64000,
    weight: 1,
    description:
      'Black robe with silver circles and conjuring runes. Three daily uses to summon max creatures with summoning spells. ' +
      'Summoned creatures emerge from the robe adjacent to wearer. Summoners can call eidolon as a standard action 1/day.',
    construction: { feats: ['Craft Wondrous Item', 'Maximize Spell'], spells: ['gate', 'summon eidolon'], cost: 32000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.robe_gates_max_summon', value: 0, source: 'Robe of Gates' }],
  },
  {
    id: 'wondrous-robe-of-infinite-twine',
    name: 'Robe of Infinite Twine',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'body',
    price: 1000,
    weight: 1,
    description:
      'Allows continuous extraction of 30 ft twine or 10 ft hemp rope per round. Emergency extraction of 150 ft twine or ' +
      '50 ft rope as immediate action damages the robe temporarily. Materials function as ordinary cordage.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['minor creation'], cost: 500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.robe_infinite_twine', value: 0, source: 'Robe of Infinite Twine' }],
  },
  {
    id: 'wondrous-robe-of-needles',
    name: 'Robe of Needles',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'body',
    price: 1000,
    weight: 4,
    description:
      'Dark hooded robe with six silvery razor-sharp needles. Launch needles as ranged touch attacks (10 ft increment). ' +
      'Each hit deals 1 piercing + 1 bleed. Needles embed and can be removed as full-round action. Regrows all needles each morning.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bleed'], cost: 500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'damage', target: 'special.robe_needles_ranged', value: 1, source: 'Robe of Needles' }],
  },
  {
    id: 'wondrous-robe-of-runes',
    name: 'Robe of Runes',
    category: 'wondrous',
    source: 'Rise of the Runelords Anniversary Edition',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 13,
    slot: 'body',
    price: 44000,
    weight: 1,
    description:
      'Crimson silk robe with Thassilonian runes. Grants +4 enhancement bonus to Intelligence. Can recover up to 4 levels of ' +
      'prepared-and-cast spells daily as a free action. Recalling a spell grants +2 enhancement to spell save DCs and attack rolls for 1 round.',
    construction: { feats: ['Craft Wondrous Item'], spells: ["fox's cunning", 'limited wish'], cost: 22000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'enhancement', target: 'ability.int', value: 4, source: 'Robe of Runes' },
      { type: 'special', target: 'special.robe_runes_spell_recall', value: 0, source: 'Robe of Runes' },
    ],
  },
  {
    id: 'wondrous-robe-of-scintillating-colors',
    name: 'Robe of Scintillating Colors',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 11,
    slot: 'body',
    price: 27000,
    weight: 1,
    description:
      'Shifting cascading colors that dazzle creatures. Takes a full round to activate. Functions as a gaze attack (30 ft), ' +
      'dazing for 1d4+1 rounds (Will DC 16). Grants progressive concealment 10% per round up to 50%. Illuminates 30 ft. ' +
      'Max 10 rounds daily.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['blur', 'rainbow pattern'], cost: 13500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.robe_scintillating_daze', value: 0, source: 'Robe of Scintillating Colors' }],
  },
  {
    id: 'wondrous-robe-of-stars',
    name: 'Robe of Stars',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 15,
    slot: 'body',
    price: 58000,
    weight: 1,
    description:
      'Dark robe with embroidered stars. Three functions: travel to/from Astral Plane via plane shift, +1 luck bonus on all saves, ' +
      'and up to six star-shaped throwing weapons. Stars replenish monthly.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['magic missile', 'plane shift'], cost: 29000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'luck', target: 'save.all', value: 1, source: 'Robe of Stars' },
    ],
  },
  {
    id: 'wondrous-robe-of-the-archmagi',
    name: 'Robe of the Archmagi',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 14,
    slot: 'body',
    price: 75000,
    weight: 1,
    description:
      'Aligned white (good), gray (neutral), or black (evil). Only arcane casters unlock full benefits: +5 armor to AC, SR 18, ' +
      '+4 resistance on saves, +2 enhancement on CL checks to overcome SR. Alignment mismatch: 3 negative levels (opposite) ' +
      'or 2 (partially mismatched). Levels persist while worn.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['antimagic field', 'mage armor'], cost: 37500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'armor', target: 'ac', value: 5, source: 'Robe of the Archmagi' },
      { type: 'resistance', target: 'sr', value: 18, source: 'Robe of the Archmagi' },
      { type: 'bonus', bonusType: 'resistance', target: 'save.all', value: 4, source: 'Robe of the Archmagi' },
      { type: 'bonus', bonusType: 'enhancement', target: 'special.caster_level_sr_check', value: 2, source: 'Robe of the Archmagi' },
    ],
  },
  // Deferred items (AoN pages did not render):
  // Radiant Panel, Ranged Piton, Reaper's Wisdom, Redemptor's Blessing, Regression Mine,
  // Relic of a Virtuous Emperor, Resilient Ore, Resin (Sandsculpt), Restless Lockpicks,
  // Retriever Drone, Ring of the Cacodaemon, Riverseer Plate
];
