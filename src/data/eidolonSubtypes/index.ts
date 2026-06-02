// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

// Eidolon Subtypes — Unchained Summoner.
// Source: Pathfinder Unchained (Paizo), expanded by Planar Adventures and other
// supplements for psychic / aberrant variants.
//
// Each subtype grants free abilities and evolutions at specific class levels
// (1, 4, 8, 12, 16, 20). The `bonusEvolutionPoints` field on a grant increases
// the summoner's evolution pool at that class level; EidolonPoolService sums
// all `bonusEvolutionPoints` whose classLevel <= current summoner level.
//
// specialAbilities holds human-readable text describing non-evolution grants
// (energy resistance, DR, truespeech, telepathy, etc.). Runtime effect wiring
// is deferred to the eidolon combat sheet; v1 renders these as text blocks.
//
// Subtypes with partial or unverified data are flagged
// `verificationStatus: 'needs_review'`. Well-verified core subtypes are
// flagged `'verified'` once spot-checked. The default is needs_review.

import type { EidolonSubtypeDefinition } from '@/types/eidolon';
import { Alignment } from '@/types/base';

const UNCHAINED_SOURCE = {
  bookId: 'unchained',
  bookName: 'Pathfinder Unchained',
  publisher: 'Paizo',
};

const PLANAR_ADVENTURES_SOURCE = {
  bookId: 'planar-adventures',
  bookName: 'Planar Adventures',
  publisher: 'Paizo',
};

export const ABERRANT_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'aberrant',
  name: 'Aberrant',
  description:
    'An aberrant eidolon is a thing of alien anatomy and unsettling mind. It ' +
    'gains access to psychic magic evolutions and resists mental intrusion.',
  edition: 'unchained',
  requiredBaseForms: ['aberrant', 'biped', 'quadruped'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: [
        'Class skills: Bluff, Disguise, Knowledge (dungeoneering), Stealth',
        '+4 racial bonus on saves vs. mind-affecting effects',
      ],
    },
    { classLevel: 4, bonusEvolutionPoints: 1 },
    { classLevel: 8, specialAbilities: ['Immunity to mind-affecting effects'] },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/slashing', 'Blindsense 30 ft.'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Blindsight 30 ft.', 'Telepathy 100 ft.'],
    },
    { classLevel: 20, specialAbilities: ['Quickened transmogrify 1/day'] },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const AEON_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'aeon',
  name: 'Aeon',
  description:
    'An aeon eidolon is a spherical being of impassive cosmic order, dedicated ' +
    'to the monitoring and preservation of reality.',
  edition: 'unchained',
  requiredBaseForms: ['biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: [
        'Envisaging (1-round glimpse of possible futures)',
        'Deflection bonus to AC',
        '+4 racial bonus on saves vs. poison',
      ],
    },
    {
      classLevel: 4,
      specialAbilities: ['Moderate fortification (50%)', 'Immunity to trip'],
    },
    { classLevel: 8, specialAbilities: ['Fly speed (supernatural)'] },
    { classLevel: 12, specialAbilities: ['Emotion/time influence aura'] },
    {
      classLevel: 16,
      specialAbilities: [
        'Immunity to critical hits',
        'Immunity to poison',
        'Immunity to sneak attacks',
      ],
    },
    { classLevel: 20, specialAbilities: ['Moment of prescience 3/day'] },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const AGATHION_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'agathion',
  name: 'Agathion',
  description:
    'An agathion eidolon is a celestial protector of the natural world, kin to ' +
    'the good-aligned outsiders of Nirvana.',
  edition: 'unchained',
  alignmentRestriction: [Alignment.NeutralGood],
  requiredBaseForms: ['aberrant', 'biped', 'quadruped'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-resistance'],
      specialAbilities: [
        'Resist electricity 5',
        '+4 racial bonus on saves vs. poison and petrification',
      ],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist cold 10', 'Resist sonic 10'],
    },
    { classLevel: 8, specialAbilities: ['Lay on hands (as paladin)'] },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/evil', 'Immunity to petrification', 'Truespeech'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to electricity', 'Speak with animals at will'],
    },
    {
      classLevel: 20,
      specialAbilities: ['Detect thoughts at will', 'DR 10/evil'],
    },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const ANCESTOR_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'ancestor',
  name: 'Ancestor',
  description:
    "An ancestor eidolon is the spirit of one of the summoner's forebears, " +
    "bearing the racial traits of the summoner's own race.",
  edition: 'unchained',
  requiredBaseForms: ['biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: ["Racial traits of the summoner's race"],
    },
    { classLevel: 4, specialAbilities: ['Simple class template'] },
    { classLevel: 8, freeEvolutions: ['evolution-skilled'] },
    { classLevel: 12, specialAbilities: ['Advanced template (first 5 HD)'] },
    { classLevel: 16, specialAbilities: ['Bonus feat'] },
    { classLevel: 20, specialAbilities: ['Advanced template (all 10 HD)'] },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const ANGEL_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'angel',
  name: 'Angel',
  description:
    'An angel eidolon is a radiant protector from the celestial realms, drawn ' +
    "by the summoner's good intent.",
  edition: 'unchained',
  alignmentRestriction: [Alignment.LawfulGood, Alignment.NeutralGood, Alignment.ChaoticGood],
  requiredBaseForms: ['biped'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: ['Resist acid 5', 'Resist cold 5', '+4 racial bonus on saves vs. poison'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist electricity 10', 'Resist fire 10'],
    },
    { classLevel: 8, freeEvolutions: ['evolution-flight'] },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/evil', 'Immunity to petrification', 'Truespeech'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to acid', 'Immunity to cold'],
    },
    { classLevel: 20, specialAbilities: ['Protective aura'] },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const ARCHON_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'archon',
  name: 'Archon',
  description:
    'An archon eidolon is a stern agent of lawful good, a hound of heaven ' +
    'scouring evil and chaos from the planes.',
  edition: 'unchained',
  alignmentRestriction: [Alignment.LawfulGood],
  requiredBaseForms: ['biped'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-resistance', 'evolution-skilled'],
      specialAbilities: [
        'Resist electricity 5',
        'Skilled (Intimidate)',
        '+4 racial bonus on saves vs. poison',
      ],
    },
    { classLevel: 4, bonusEvolutionPoints: 1 },
    { classLevel: 8, freeEvolutions: ['evolution-ability-increase'] },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/evil', 'Immunity to petrification', 'Truespeech'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to electricity', 'Aura of menace'],
    },
    { classLevel: 20, specialAbilities: ['Greater teleport at will'] },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const ASTRAL_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'astral',
  name: 'Astral',
  description:
    'An astral eidolon is a denizen of the Astral Plane, shimmering with silver ' +
    'silk and immune to the effects of time.',
  edition: 'unchained',
  requiredBaseForms: ['biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: [
        'Immunity to aging',
        '+4 racial bonus on saves vs. curses, disease, and poison',
        'Halved Strength/Dexterity score growth (per subtype text)',
      ],
    },
    { classLevel: 4, specialAbilities: ['Augment summoning 3/day'] },
    { classLevel: 8, specialAbilities: ['Fly speed (supernatural)'] },
    { classLevel: 12, specialAbilities: ['Augment summoning +2/day (5/day)'] },
    {
      classLevel: 16,
      specialAbilities: [
        'Immunity to curses, disease, and poison',
        'Aspect evolution capacity increased by +50%',
      ],
    },
    { classLevel: 20, specialAbilities: ['Simultaneous melding'] },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const AZATA_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'azata',
  name: 'Azata',
  description:
    'An azata eidolon is a wild spark of freedom and joy, a chaotic good ' +
    'celestial dancing through the planes.',
  edition: 'unchained',
  alignmentRestriction: [Alignment.ChaoticGood],
  requiredBaseForms: ['biped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-resistance', 'evolution-weapon-training'],
      specialAbilities: ['Resist electricity 5', 'Weapon training (martial weapons, 4 ep free)'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist cold 10', 'Resist fire 10'],
    },
    { classLevel: 8, freeEvolutions: ['evolution-flight'] },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/evil', 'Immunity to petrification', 'Truespeech'],
    },
    {
      classLevel: 16,
      freeEvolutions: ['evolution-ability-increase'],
      specialAbilities: ['Immunity to electricity'],
    },
    { classLevel: 20, specialAbilities: ['Incorporeal energy form'] },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const DAEMON_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'daemon',
  name: 'Daemon',
  description:
    'A daemon eidolon is a fiend devoted to the annihilation of mortal life, ' +
    'a vulture of the Outer Planes feeding on the ends of souls.',
  edition: 'unchained',
  alignmentRestriction: [Alignment.NeutralEvil],
  requiredBaseForms: ['aberrant', 'biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-resistance'],
      specialAbilities: [
        'Resist acid 5',
        '+4 racial bonus on saves vs. death effects, disease, and poison',
      ],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist cold 10', 'Resist electricity 10', 'Resist fire 10'],
    },
    { classLevel: 8, bonusEvolutionPoints: 1 },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/good', 'Immunity to death effects, disease, and poison'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to acid', 'Telepathy 100 ft.'],
    },
    { classLevel: 20, specialAbilities: ['Soul devour'] },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const DEEPWATER_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'deepwater',
  name: 'Deepwater',
  description:
    'A deepwater eidolon is a horror from the crushing depths, tentacled and ' +
    'lightless, drawn up to answer the summoner.',
  edition: 'unchained',
  requiredBaseForms: ['aquatic', 'aberrant', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-gills', 'evolution-resistance', 'evolution-swim'],
      specialAbilities: ['Resist cold 5'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Jet ability', 'Darkvision 120 ft.'],
    },
    {
      classLevel: 8,
      freeEvolutions: ['evolution-poison'],
      specialAbilities: ['Poison on tail or tentacle attacks, once per round'],
    },
    {
      classLevel: 12,
      freeEvolutions: ['evolution-rend'],
      specialAbilities: ['DR 5/magic'],
    },
    { classLevel: 16, specialAbilities: ['Immunity to cold'] },
    {
      classLevel: 20,
      specialAbilities: ['Constant freedom of movement', 'Fast healing 5'],
    },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const DEMON_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'demon',
  name: 'Demon',
  description:
    'A demon eidolon is a raging spark of the Abyss, a chaotic evil fiend of ' +
    'claw, fang, and corruption.',
  edition: 'unchained',
  alignmentRestriction: [Alignment.ChaoticEvil],
  requiredBaseForms: ['aberrant', 'biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-resistance'],
      specialAbilities: [
        'Resist electricity 5',
        'Resist fire 5',
        '+4 racial bonus on saves vs. poison',
      ],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist acid 10', 'Resist cold 10'],
    },
    {
      classLevel: 8,
      bonusEvolutionPoints: 1,
      specialAbilities: ['Immunity to poison'],
    },
    {
      classLevel: 12,
      freeEvolutions: ['evolution-ability-increase'],
      specialAbilities: ['DR 5/good'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to electricity', 'Telepathy 100 ft.'],
    },
    { classLevel: 20, specialAbilities: ['Constant true seeing'] },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const DEVIL_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'devil',
  name: 'Devil',
  description:
    'A devil eidolon is a cunning fiend of Hell, suavely menacing and bound to ' +
    "the summoner's service by infernal contract.",
  edition: 'unchained',
  alignmentRestriction: [Alignment.LawfulEvil],
  requiredBaseForms: ['biped'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-resistance', 'evolution-skilled'],
      specialAbilities: ['Resist fire 5', 'Skilled (Bluff)', '+4 racial bonus on saves vs. poison'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist acid 10', 'Resist cold 10'],
    },
    {
      classLevel: 8,
      freeEvolutions: ['evolution-skilled'],
      specialAbilities: ['Skilled (Diplomacy)', 'Immunity to poison'],
    },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/good', 'See in darkness'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to fire', 'Telepathy 100 ft.'],
    },
    { classLevel: 20, specialAbilities: ['Regeneration 5 (good)'] },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const DIV_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'div',
  name: 'Div',
  description:
    'A div eidolon is a spiteful genie of corruption and ruin, a malevolent ' +
    "fiend bound out of Ahriman's domain.",
  edition: 'unchained',
  alignmentRestriction: [Alignment.NeutralEvil],
  requiredBaseForms: ['biped'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-resistance'],
      specialAbilities: ['Resist fire 5', '+4 racial bonus on saves vs. poison'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist acid 10', 'Resist electricity 10'],
    },
    {
      classLevel: 8,
      bonusEvolutionPoints: 1,
      specialAbilities: ['Immunity to poison'],
    },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/good', 'See in darkness'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to fire', 'Telepathy 100 ft.'],
    },
    { classLevel: 20, specialAbilities: ['Greater teleport at will'] },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const ELEMENTAL_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'elemental',
  name: 'Elemental',
  description:
    'An elemental eidolon is a manifestation of one of the four classical ' +
    'elements (air, earth, fire, or water), chosen at creation. The chosen ' +
    'element governs its energy immunities and capstone ability.',
  edition: 'unchained',
  requiredBaseForms: ['biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: [
        'Immunity to paralysis',
        'Immunity to sleep',
        'Element-specific immunity (acid for earth, cold for water, electricity for air, fire for fire)',
      ],
    },
    { classLevel: 4, bonusEvolutionPoints: 1 },
    {
      classLevel: 8,
      specialAbilities: [
        'Type-specific free evolution (flight for air, burrow for earth, bonus speed for fire, gills+swim for water)',
      ],
    },
    {
      classLevel: 12,
      specialAbilities: [
        'Immunity to bleed',
        'Immunity to poison',
        'Immunity to stun',
        'Cannot be flanked',
      ],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to critical hits', 'Immunity to precision damage'],
    },
    {
      classLevel: 20,
      specialAbilities: ['Type-specific capstone (per elemental subtype)'],
    },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const GENIE_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'genie',
  name: 'Genie',
  description:
    'A genie eidolon is a powerful elemental being bound to the summoner by ' +
    'word or wish. Its precise form depends on the chosen genie kin.',
  edition: 'unchained',
  requiredBaseForms: ['biped'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-weapon-training', 'evolution-resistance'],
      specialAbilities: [
        'Weapon training (martial weapons, 4 ep free)',
        'Resistance evolution against chosen energy type (free)',
      ],
    },
    { classLevel: 4, specialAbilities: ['Size increase 2/day'] },
    {
      classLevel: 8,
      specialAbilities: ['Free flight, burrow, or gills+swim (matched to kin type)'],
    },
    {
      classLevel: 12,
      specialAbilities: ['Immunity to chosen energy type', 'Plane shift 1/day'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Cleanse or greater evolution surge 1/day (per kin)'],
    },
    {
      classLevel: 20,
      specialAbilities: ['20th-level elemental capstone (per kin)'],
    },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const INEVITABLE_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'inevitable',
  name: 'Inevitable',
  description:
    'An inevitable eidolon is a construct-outsider of pure law, forged in ' +
    'the clockwork halls of Axis to punish contract-breakers.',
  edition: 'unchained',
  alignmentRestriction: [Alignment.LawfulNeutral],
  requiredBaseForms: ['biped'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: [
        'Construct and outsider dual-type',
        '+4 racial bonus on saves vs. death effects, disease, necromancy, paralysis, poison, sleep, and stun',
      ],
    },
    {
      classLevel: 4,
      specialAbilities: [
        '+4 racial bonus on saves vs. mind-affecting effects',
        'Immunity to fatigue',
        'Immunity to nonlethal damage',
        'Immunity to exhaustion',
      ],
    },
    {
      classLevel: 8,
      specialAbilities: ['Immunity to death effects', 'Immunity to disease', 'Immunity to poison'],
    },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/chaotic', 'Immunity to sleep', 'Truespeech'],
    },
    {
      classLevel: 16,
      specialAbilities: [
        'Immunity to ability damage',
        'Immunity to ability drain',
        'Immunity to energy drain',
        'Immunity to necromancy effects',
      ],
    },
    {
      classLevel: 20,
      specialAbilities: ['Immunity to paralysis, sleep, stun, and Fortitude-based effects'],
    },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const KAMI_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'kami',
  name: 'Kami',
  description:
    'A kami eidolon is a noble spirit bound to a natural object or place. Its ' +
    'power grows alongside the ward it protects.',
  edition: 'unchained',
  alignmentRestriction: [
    Alignment.LawfulGood,
    Alignment.NeutralGood,
    Alignment.ChaoticGood,
    Alignment.LawfulNeutral,
    Alignment.TrueNeutral,
    Alignment.ChaoticNeutral,
  ],
  requiredBaseForms: ['biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-resistance', 'evolution-weapon-training'],
      specialAbilities: ['Resist fire 5', 'Weapon training (martial weapons, 4 ep free)'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist acid 10', 'Resist cold 10'],
    },
    { classLevel: 8, specialAbilities: ['Ward ability 1/day'] },
    {
      classLevel: 12,
      specialAbilities: ['Fast healing (while near ward)', 'Merge with ward'],
    },
    {
      classLevel: 16,
      specialAbilities: [
        'Immunity to bleed',
        'Immunity to mind-affecting effects',
        'Immunity to petrification',
        'Immunity to polymorph effects',
      ],
    },
    {
      classLevel: 20,
      specialAbilities: ['Increased fast healing while near ward'],
    },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const KYTON_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'kyton',
  name: 'Kyton',
  description:
    'A kyton eidolon is a chain-wrapped horror of the Shadow Plane, devoted to ' +
    'transcendence through pain.',
  edition: 'unchained',
  alignmentRestriction: [Alignment.LawfulEvil],
  requiredBaseForms: ['biped', 'quadruped'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-resistance', 'evolution-skilled'],
      specialAbilities: ['Resist cold 5', 'Skilled (Heal)', 'Spiked chain proficiency'],
    },
    { classLevel: 4, bonusEvolutionPoints: 1 },
    { classLevel: 8, specialAbilities: ['Unnerving gaze'] },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/good', 'Improved unnerving gaze'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to cold', 'Gaze staggers on failed save'],
    },
    { classLevel: 20, specialAbilities: ['Regeneration 5 (good)'] },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const PLANT_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'plant',
  name: 'Plant',
  description:
    'A plant eidolon is a living wonder of bark, leaf, and sap, bound to the ' +
    'summoner like a druid to their grove.',
  edition: 'unchained',
  requiredBaseForms: ['biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: ['Low-light vision', 'Resist electricity 5', 'Resist sonic 5'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Constant pass without trace', 'Tree shape'],
    },
    {
      classLevel: 8,
      specialAbilities: ['Speak with plants 1 minute/HD per day'],
    },
    {
      classLevel: 12,
      specialAbilities: [
        'Immunity to paralysis',
        'Immunity to poison',
        'Immunity to sleep',
        'Immunity to stun',
      ],
    },
    {
      classLevel: 16,
      specialAbilities: ['Commune with nature', 'Speak with plants at will'],
    },
    {
      classLevel: 20,
      specialAbilities: [
        '+8 racial bonus on saves vs. mind-affecting effects',
        'Immunity to electricity',
        'Immunity to sonic',
      ],
    },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const PROTEAN_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'protean',
  name: 'Protean',
  description:
    'A protean eidolon is a writhing chaos-serpent from the Maelstrom, a ' +
    'shapeshifter and living paradox.',
  edition: 'unchained',
  alignmentRestriction: [Alignment.ChaoticNeutral],
  requiredBaseForms: ['serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-resistance', 'evolution-grab'],
      specialAbilities: ['Resist acid 5'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist electricity 10', 'Resist sonic 10'],
    },
    { classLevel: 8, freeEvolutions: ['evolution-constrict'] },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/lawful', 'Blindsense 30 ft.', 'Perfect flight'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to acid', 'Amorphous anatomy'],
    },
    {
      classLevel: 20,
      specialAbilities: ['Constant freedom of movement', 'Change shape'],
    },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const PSYCHOPOMP_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'psychopomp',
  name: 'Psychopomp',
  description:
    'A psychopomp eidolon is a true neutral spirit-ferryman, a shepherd of ' +
    'souls indifferent to mortal morality.',
  edition: 'unchained',
  alignmentRestriction: [Alignment.TrueNeutral],
  requiredBaseForms: ['biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: ['Immunity to death effects', 'Immunity to disease', 'Immunity to poison'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist cold 10', 'Resist electricity 10'],
    },
    {
      classLevel: 8,
      bonusEvolutionPoints: 1,
      specialAbilities: ['Spirit touch'],
    },
    {
      classLevel: 12,
      specialAbilities: ['DR 5/adamantine', 'Spiritsense'],
    },
    {
      classLevel: 16,
      freeEvolutions: ['evolution-ability-increase'],
      specialAbilities: ['Invisibility at will'],
    },
    {
      classLevel: 20,
      specialAbilities: ['DR 10/adamantine', 'Immunity to cold', 'Immunity to electricity'],
    },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const RADIANT_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'radiant',
  name: 'Radiant',
  description:
    'A radiant eidolon is a luminous being of positive energy, anathema to the ' +
    'undead and restorative to the living.',
  edition: 'unchained',
  requiredBaseForms: ['biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: [
        'Immunity to death effects',
        'Immunity to energy drain',
        'Enhanced positive-energy healing',
      ],
    },
    {
      classLevel: 4,
      specialAbilities: ['Ghost touch natural attacks', 'Glow effect'],
    },
    { classLevel: 8, freeEvolutions: ['evolution-flight'] },
    { classLevel: 12, freeEvolutions: ['evolution-fast-healing'] },
    {
      classLevel: 16,
      specialAbilities: ['Cure serious wounds 3/day', 'Breath of life on death'],
    },
    {
      classLevel: 20,
      specialAbilities: ['+2 damage per damage die vs. undead', 'Maximized healing'],
    },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const SHADOW_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'shadow',
  name: 'Shadow',
  description:
    'A shadow eidolon is a sinuous creature of the Plane of Shadow, cloaked in ' +
    'darkness and at home in gloom.',
  edition: 'unchained',
  alignmentRestriction: [
    Alignment.LawfulNeutral,
    Alignment.TrueNeutral,
    Alignment.ChaoticNeutral,
    Alignment.LawfulEvil,
    Alignment.NeutralEvil,
    Alignment.ChaoticEvil,
  ],
  requiredBaseForms: ['biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: ['Resist cold 5', 'Resist electricity 5', 'Darkness 3/day'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Concealment (20%) in non-bright light'],
    },
    {
      classLevel: 8,
      bonusEvolutionPoints: 1,
      specialAbilities: ['DR 5/magic', 'Darkvision 90 ft.'],
    },
    {
      classLevel: 12,
      specialAbilities: ['Deeper darkness 3/day', 'See in darkness'],
    },
    {
      classLevel: 16,
      freeEvolutions: ['evolution-spell-resistance'],
      specialAbilities: ['DR 10/magic'],
    },
    {
      classLevel: 20,
      specialAbilities: ['Darkvision 120 ft.', 'Shadow step', 'Quickened darkness 3/day'],
    },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const STORYKIN_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'storykin',
  name: 'Storykin',
  description:
    'A storykin eidolon is a creature of the First World, its abilities shaped ' +
    'by the harrow suit chosen at creation.',
  edition: 'unchained',
  requiredBaseForms: ['biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: ['Resist sonic 5', '+2 racial bonus on saves (suit-dependent)'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist cold 10', 'Resist electricity 10'],
    },
    {
      classLevel: 8,
      freeEvolutions: ['evolution-ability-increase'],
      specialAbilities: ['Ability increase (suit-dependent)'],
    },
    {
      classLevel: 12,
      specialAbilities: [
        'Immunity to bleed',
        'Immunity to poison',
        'Immunity to stun',
        'DR 5/adamantine',
      ],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to sonic', 'Immunity to mind-affecting effects'],
    },
    {
      classLevel: 20,
      freeEvolutions: ['evolution-ability-increase'],
      specialAbilities: [
        'Immunity to ability damage',
        'Immunity to ability drain',
        'Immunity to energy drain',
      ],
    },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const TWINNED_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'twinned',
  name: 'Twinned',
  description:
    'A twinned eidolon is an outsider mirror of the summoner, sharing their ' +
    "appearance and quirks. It can cast the summoner's spells.",
  edition: 'unchained',
  requiredBaseForms: ['biped'],
  scalingGrants: [
    {
      classLevel: 1,
      freeEvolutions: ['evolution-weapon-training', 'evolution-skilled'],
      specialAbilities: ['Weapon training', 'Skilled (Disguise)'],
    },
    {
      classLevel: 4,
      specialAbilities: ['Cast one known summoner spell 1/day as SLA'],
    },
    {
      classLevel: 8,
      freeEvolutions: ['evolution-shared-slot'],
    },
    {
      classLevel: 12,
      freeEvolutions: ['evolution-extra-feat'],
      specialAbilities: ['DR 5/magic'],
    },
    {
      classLevel: 16,
      freeEvolutions: ['evolution-skilled', 'evolution-ability-increase'],
    },
    { classLevel: 20, specialAbilities: ['Fast healing 5'] },
  ],
  source: UNCHAINED_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const VOID_SUBTYPE: EidolonSubtypeDefinition = {
  id: 'void',
  name: 'Void',
  description:
    'A void eidolon is a creature of negative energy, chill and lifeless, a ' +
    'consort to undead and a siphon of vitality.',
  edition: 'unchained',
  requiredBaseForms: ['biped', 'quadruped', 'serpentine'],
  scalingGrants: [
    {
      classLevel: 1,
      specialAbilities: [
        'Negative energy affinity',
        'Immunity to death effects',
        'Immunity to disease',
        'Immunity to energy drain',
        'Immunity to poison',
      ],
    },
    {
      classLevel: 4,
      specialAbilities: ['Resist cold 10', 'Ghost touch natural attacks'],
    },
    {
      classLevel: 8,
      freeEvolutions: ['evolution-flight'],
      specialAbilities: ['Negative energy damage on natural attacks'],
    },
    {
      classLevel: 12,
      specialAbilities: ['Lifesense', 'Energy drain (1 negative level)'],
    },
    {
      classLevel: 16,
      specialAbilities: ['Immunity to cold', 'DR 5/adamantine'],
    },
    {
      classLevel: 20,
      specialAbilities: ['Enhanced energy drain (2 negative levels)', 'DR 10/adamantine'],
    },
  ],
  source: PLANAR_ADVENTURES_SOURCE,
  isOfficial: true,
  visibility: 'global',
  verificationStatus: 'needs_review',
  rev: 1,
};

export const ALL_EIDOLON_SUBTYPES: EidolonSubtypeDefinition[] = [
  ABERRANT_SUBTYPE,
  AEON_SUBTYPE,
  AGATHION_SUBTYPE,
  ANCESTOR_SUBTYPE,
  ANGEL_SUBTYPE,
  ARCHON_SUBTYPE,
  ASTRAL_SUBTYPE,
  AZATA_SUBTYPE,
  DAEMON_SUBTYPE,
  DEEPWATER_SUBTYPE,
  DEMON_SUBTYPE,
  DEVIL_SUBTYPE,
  DIV_SUBTYPE,
  ELEMENTAL_SUBTYPE,
  GENIE_SUBTYPE,
  INEVITABLE_SUBTYPE,
  KAMI_SUBTYPE,
  KYTON_SUBTYPE,
  PLANT_SUBTYPE,
  PROTEAN_SUBTYPE,
  PSYCHOPOMP_SUBTYPE,
  RADIANT_SUBTYPE,
  SHADOW_SUBTYPE,
  STORYKIN_SUBTYPE,
  TWINNED_SUBTYPE,
  VOID_SUBTYPE,
];

export const getEidolonSubtypeById = (id: string): EidolonSubtypeDefinition | undefined =>
  ALL_EIDOLON_SUBTYPES.find((st) => st.id === id);
