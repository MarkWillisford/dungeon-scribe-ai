import { ClassChoiceDefinition } from '@/types/classChoices';

// Initiating prestige classes — all 10-level, all advance IL at full rate.
// Sources: Path of War (dsp-pow), Path of War: Expanded (dsp-powe)
//
// Each prestige class advances an existing initiating pool — it does NOT create a new one.
// The maneuver/stance counts from the prestige class are added on top of the base class
// progression as the character levels in the prestige class.

// ─── Animus Adept (PoWE) ──────────────────────────────────────────────────────
// Extends an animus-using class (Mystic). Specializes in animus and glyph abilities.

export const animusAdeptDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'animus-adept-maneuvers-known',
    className: 'animus adept',
    featureName: 'Maneuvers Known',
    description:
      'The Animus Adept continues advancing an existing initiating pool, gaining additional maneuvers known. Access is limited to disciplines available through the base initiating class. The number of maneuvers known at each prestige level is given in the progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'animus-adept-stances-known',
    className: 'animus adept',
    featureName: 'Stances Known',
    description:
      'The Animus Adept gains additional stances from accessible disciplines. Stances do not need to be readied.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Awakened Blade (PoW) ─────────────────────────────────────────────────────
// Psionic/initiating hybrid. Requires both psionics and initiating.

export const awakenedBladeDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'awakened-blade-maneuvers-known',
    className: 'awakened blade',
    featureName: 'Maneuvers Known',
    description:
      'The Awakened Blade advances an existing initiating pool, gaining additional maneuvers known from disciplines accessible through the base initiating class.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'awakened-blade-stances-known',
    className: 'awakened blade',
    featureName: 'Stances Known',
    description:
      'The Awakened Blade gains additional stances from accessible disciplines.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Battle Templar (PoWE) ────────────────────────────────────────────────────
// Divine/initiating hybrid. Gains access to Golden Lion and Iron Tortoise.

export const battleTemplarDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'battle-templar-maneuvers-known',
    className: 'battle templar',
    featureName: 'Maneuvers Known',
    description:
      'The Battle Templar advances an existing initiating pool and gains access to the Golden Lion and Iron Tortoise disciplines in addition to those from the base initiating class.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: { disciplineIds: ['golden-lion', 'iron-tortoise'] },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'battle-templar-stances-known',
    className: 'battle templar',
    featureName: 'Stances Known',
    description:
      'The Battle Templar gains additional stances from accessible disciplines, including Golden Lion and Iron Tortoise.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: { disciplineIds: ['golden-lion', 'iron-tortoise'] },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Bladecaster (PoW) ────────────────────────────────────────────────────────
// Arcane/initiating hybrid. No new discipline access.

export const bladecasterDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'bladecaster-maneuvers-known',
    className: 'bladecaster',
    featureName: 'Maneuvers Known',
    description:
      'The Bladecaster advances an existing initiating pool, gaining additional maneuvers known from disciplines accessible through the base initiating class.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bladecaster-stances-known',
    className: 'bladecaster',
    featureName: 'Stances Known',
    description:
      'The Bladecaster gains additional stances from accessible disciplines.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Dragon Fury (PoW) ────────────────────────────────────────────────────────
// TWF specialist. Gains Mithral Current and Primal Fury, plus 2 from existing pool.

export const dragonFuryDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'dragon-fury-maneuvers-known',
    className: 'dragon fury',
    featureName: 'Maneuvers Known',
    description:
      'The Dragon Fury advances an existing initiating pool and gains access to the Mithral Current and Primal Fury disciplines, plus two additional disciplines from the base initiating class.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: { disciplineIds: ['mithral-current', 'primal-fury'] },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'dragon-fury-stances-known',
    className: 'dragon fury',
    featureName: 'Stances Known',
    description:
      'The Dragon Fury gains additional stances from accessible disciplines, including Mithral Current and Primal Fury.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: { disciplineIds: ['mithral-current', 'primal-fury'] },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Landsknecht (PoWE) ───────────────────────────────────────────────────────
// One-handed weapon specialist. Gains Mithral Current and Scarlet Throne, plus 2 existing.

export const landsknechtDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'landsknecht-maneuvers-known',
    className: 'landsknecht',
    featureName: 'Maneuvers Known',
    description:
      'The Landsknecht advances an existing initiating pool and gains access to the Mithral Current and Scarlet Throne disciplines, plus two additional disciplines from the base initiating class.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: { disciplineIds: ['mithral-current', 'scarlet-throne'] },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'landsknecht-stances-known',
    className: 'landsknecht',
    featureName: 'Stances Known',
    description:
      'The Landsknecht gains additional stances from accessible disciplines, including Mithral Current and Scarlet Throne.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: { disciplineIds: ['mithral-current', 'scarlet-throne'] },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Mage Hunter (PoWE) ───────────────────────────────────────────────────────
// Anti-caster specialist. No new discipline access.

export const mageHunterDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'mage-hunter-maneuvers-known',
    className: 'mage hunter',
    featureName: 'Maneuvers Known',
    description:
      'The Mage Hunter advances an existing initiating pool, gaining additional maneuvers known from disciplines accessible through the base initiating class.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mage-hunter-stances-known',
    className: 'mage hunter',
    featureName: 'Stances Known',
    description:
      'The Mage Hunter gains additional stances from accessible disciplines.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Phoenix Champion (PoW) ───────────────────────────────────────────────────
// Ranged specialist. Gains Solar Wind and Tempest Gale.

export const phoenixChampionDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'phoenix-champion-maneuvers-known',
    className: 'phoenix champion',
    featureName: 'Maneuvers Known',
    description:
      'The Phoenix Champion advances an existing initiating pool and gains access to the Solar Wind and Tempest Gale disciplines in addition to those from the base initiating class.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: { disciplineIds: ['solar-wind', 'tempest-gale'] },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'phoenix-champion-stances-known',
    className: 'phoenix champion',
    featureName: 'Stances Known',
    description:
      'The Phoenix Champion gains additional stances from accessible disciplines, including Solar Wind and Tempest Gale.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: { disciplineIds: ['solar-wind', 'tempest-gale'] },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Umbral Blade (PoWE) ──────────────────────────────────────────────────────
// Shadow specialist. Deepens Veiled Moon access.

export const umbralBladeDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'umbral-blade-maneuvers-known',
    className: 'umbral blade',
    featureName: 'Maneuvers Known',
    description:
      'The Umbral Blade advances an existing initiating pool with a focus on Veiled Moon disciplines. The Umbral Blade deepens mastery of shadow and teleportation maneuvers from Veiled Moon.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: { disciplineIds: ['veiled-moon'] },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'umbral-blade-stances-known',
    className: 'umbral blade',
    featureName: 'Stances Known',
    description:
      'The Umbral Blade gains additional stances, particularly from the Veiled Moon discipline.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: { disciplineIds: ['veiled-moon'] },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
