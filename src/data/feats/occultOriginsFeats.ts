import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const OCCULT_ORIGINS_FEATS: FeatDefinition[] = [
  {
    id: 'careful_reader',
    name: 'Careful Reader',
    description:
      'You gain a +4 bonus on saving throws against written magical effects, including explosive runes, glyph of warding, illusory script, symbol of death, and similar magic. This bonus also applies to curses, madness, possession, or comparable effects triggered by reading written materials.',
    shortDescription: '+4 saves vs. written magical effects and reading-triggered curses.',
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'linguistics', ranks: 3 },
      { type: 'skill', skillId: 'spellcraft', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'written_magic',
        value: 4,
        bonusType: BonusType.UNTYPED,
        source: 'Careful Reader',
      },
    ],
    activationMode: 'passive',
    tags: ['occult', 'reading', 'saving throw', 'glyph', 'symbol'],
  },
  {
    id: 'chakra_mandala',
    name: 'Chakra Mandala',
    description:
      'You inscribe chakra symbols using scars, tattoos, or henna to maintain kundalini balance. When failing a Fortitude save to sustain awakened chakras, the damage you take is reduced to half the normal amount.',
    shortDescription: 'Halve damage from failed Fortitude saves to sustain chakras.',
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'ki pool' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Chakra Mandala',
      },
    ],
    activationMode: 'passive',
    tags: ['occult', 'chakra', 'ki', 'monk', 'kundalini'],
  },
  {
    id: 'cranial_adjustment',
    name: 'Cranial Adjustment',
    description:
      'You can perform the hypnotism occult skill unlock without psychic magic. Those with psychic spells or Psychic Sensitivity feat gain an additional daily use. Sleight of Hand can replace Diplomacy for hypnotism (requiring 10 minutes of skull contact). A 1-hour adjustment grants either a +2 bonus or -2 penalty to the target\'s saving throws against mind-affecting emotion effects for 24 hours.',
    shortDescription: 'Perform hypnotism without psychic magic; adjust saves vs. emotion effects.',
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Deft Hands or Trepanation' }],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Cranial Adjustment',
      },
    ],
    activationMode: 'conditional',
    tags: ['occult', 'phrenology', 'hypnotism', 'mind-affecting'],
  },
  {
    id: 'cranial_implantation',
    name: 'Cranial Implantation',
    description:
      'You can perform phrenology using sharp implements rather than fingertips, dealing 1d3 damage. Those with psychic spellcasting or Psychic Sensitivity gain an additional daily use. You can implant needles into a creature\'s brain (Heal check DC 25 + Hit Dice) to provide a +1 bonus on saving throws against emotion or fear spells but a -1 penalty on saves against electricity or pain spells. Self-implanted needles can be probed as a swift action while casting (dealing 1 + spell level damage) to gain +1d6 on concentration checks.',
    shortDescription: 'Implant needles for save bonuses vs. fear/emotion; boost concentration checks.',
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Self-Sufficient or Trepanation' },
      { type: 'skill', skillId: 'heal', ranks: 7 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'emotion',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Cranial Implantation',
      },
    ],
    activationMode: 'conditional',
    tags: ['occult', 'phrenology', 'implant', 'concentration', 'heal'],
  },
  {
    id: 'haruspicy_oo',
    name: 'Haruspicy',
    description:
      'Upon performing a successful coup de grace, you gain a +2 circumstance bonus on skill checks attempted as part of a single occult ritual or occult skill unlock performed within the next minute. Alternatively, you may gain a +1 caster level bonus on a single divination or necromancy spell. The ritual or spell must begin within 1 minute of the coup de grace.',
    shortDescription: '+2 on occult ritual checks or +1 CL on divination/necromancy after a coup de grace.',
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_religion', ranks: 3 }],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'special',
        source: 'Haruspicy',
      },
    ],
    activationMode: 'conditional',
    tags: ['occult', 'ritual', 'divination', 'necromancy', 'coup de grace'],
  },
  {
    id: 'overwhelming_phantom',
    name: 'Overwhelming Phantom',
    description:
      'Your phantom gains the ability to possess living creatures three times daily as a standard action while fully manifested. The target makes a Will save (DC = 1/2 phantom\'s Hit Dice + Charisma modifier) to resist. The phantom maintains control for 1 minute per spiritualist level, with the victim receiving new saves each minute. This otherwise functions as greater possession.',
    shortDescription: 'Phantom can possess living creatures 3/day while fully manifested.',
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'phantom' },
      { type: 'level', minimum: 15, class: 'Spiritualist' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Overwhelming Phantom',
      },
    ],
    activationMode: 'conditional',
    tags: ['spiritualist', 'phantom', 'possession', 'occult'],
  },
  {
    id: 'rhabdomancy',
    name: 'Rhabdomancy',
    description:
      'You can perform the dowsing occult skill unlock even if you can\'t use psychic magic. If you can cast psychic spells or have the Psychic Sensitivity feat, you can use dowsing one additional time per day. Spending 1 minute casting sticks before a Survival check provides a +2 insight bonus. You may also cast sticks while using spells that locate creatures or objects to increase the caster level by 1.',
    shortDescription: 'Perform dowsing without psychic magic; +2 insight on Survival; +1 CL on locate spells.',
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_nature', ranks: 3 },
      { type: 'skill', skillId: 'survival', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'survival',
        value: 2,
        bonusType: BonusType.INSIGHT,
        source: 'Rhabdomancy',
      },
    ],
    activationMode: 'conditional',
    tags: ['occult', 'dowsing', 'survival', 'divination'],
  },
  {
    id: 'ritual_hex',
    name: 'Ritual Hex',
    description:
      'You can perform an occult ritual called Beseeching the Patron that temporarily grants access to an additional hex you don\'t already possess for 24 hours. You can choose a major hex (increasing skill check DCs by 10) or grand hex (increasing DCs by 20). Only one bonus hex from this ritual can be active at a time. The ritual takes 40 minutes using Knowledge (arcana) and (history) checks, 2 successes at DC 20. Failure causes 10% spell failure for 24 hours; success causes 1 hour of fatigue.',
    shortDescription: 'Ritual to temporarily gain a hex for 24 hours.',
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 4 },
      { type: 'skill', skillId: 'knowledge_history', ranks: 4 },
      { type: 'class_feature', featureName: 'hex' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Ritual Hex',
      },
    ],
    activationMode: 'conditional',
    tags: ['occult', 'ritual', 'hex', 'witch', 'shaman'],
  },
  {
    id: 'spectrum_sight',
    name: 'Spectrum Sight',
    description:
      'You can perform the read aura occult skill unlock without psychic magic. Those with psychic spellcasting or Psychic Sensitivity gain an extra daily use. You can conduct an aura reading as a full-round action once per day, and after successfully using detect thoughts on a creature within 30 feet, you may read their aura as a full-round action. With a ki pool, you can spend 1 point as a swift action for an additional daily use.',
    shortDescription: 'Read auras without psychic magic; extra uses with ki pool.',
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'alertness' },
      { type: 'skill', skillId: 'perception', ranks: 5 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Spectrum Sight',
      },
    ],
    activationMode: 'conditional',
    tags: ['occult', 'aura', 'perception', 'ki'],
  },
  {
    id: 'spirit_symbiosis_oo',
    name: 'Spirit Symbiosis',
    description:
      'When casting speak with dead, you may forgo the spell\'s normal effects to temporarily merge the summoned spirit into your phantom. This allows you to exchange your phantom\'s current emotional focus and associated abilities for a new one of your choice. The new emotional focus lasts for 10 minutes per class level before reverting.',
    shortDescription: "Swap your phantom's emotional focus temporarily via speak with dead.",
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast speak with dead' },
      { type: 'class_feature', featureName: 'phantom' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Spirit Symbiosis',
      },
    ],
    activationMode: 'conditional',
    tags: ['spiritualist', 'phantom', 'emotional focus', 'speak with dead'],
  },
  {
    id: 'trepanation',
    name: 'Trepanation',
    description:
      "You can perform faith healing occult skill unlocks without psychic magic. Characters with psychic spellcasting or Psychic Sensitivity gain an additional daily use. You can perform a 1-hour trepanation procedure using a healer's kit or surgeon's tools, requiring a Heal check (DC = 20 + target's Hit Dice). Success grants the target a +2 insight bonus on saving throws against curses, possession, and enchantment (compulsion) spells for 1 day per character level. Failed checks inflict 1d3 damage to Intelligence, Wisdom, and Charisma. Self-trepanation increases the DC by 5.",
    shortDescription: 'Perform trepanation for +2 insight saves vs. curses/possession/compulsion.',
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'heal', ranks: 5 },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 2 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'compulsion',
        value: 2,
        bonusType: BonusType.INSIGHT,
        source: 'Trepanation',
      },
    ],
    activationMode: 'conditional',
    tags: ['occult', 'heal', 'trepanation', 'curse', 'possession'],
  },
  {
    id: 'truth_in_wine',
    name: 'Truth in Wine',
    description:
      'You can perform psychometry occult skill unlock without psychic magic by consuming high-quality alcohol (10+ gp). With psychic casting ability or Psychic Sensitivity, use psychometry an additional time daily. Consuming quality alcohol grants a +2 circumstance bonus on Appraise and Sense Motive checks for 1 minute and increases the next divination spell\'s caster level by 1. Alcohol addiction increases these bonuses by 1 but also raises the addiction save DC.',
    shortDescription: '+2 Appraise/Sense Motive and +1 CL on divination from quality alcohol.',
    source: 'Pathfinder Player Companion: Occult Origins',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'appraise', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        target: 'appraise',
        value: 2,
        bonusType: BonusType.CIRCUMSTANCE,
        source: 'Truth in Wine',
      },
      {
        type: 'bonus',
        target: 'sense_motive',
        value: 2,
        bonusType: BonusType.CIRCUMSTANCE,
        source: 'Truth in Wine',
      },
    ],
    activationMode: 'conditional',
    tags: ['occult', 'psychometry', 'alcohol', 'divination', 'appraise'],
  },
];
