import { ClassChoiceDefinition } from '@/types/classChoices';

// Paladin mercies grouped by minimum class level at which they become available.
// Core mercies from CRB + APG. All are inline — no collection query needed.
export const MERCY_OPTIONS = [
  // Available from level 3
  { id: 'mercy-shaken', name: 'Shaken', description: 'The shaken condition is removed.' },
  { id: 'mercy-sickened', name: 'Sickened', description: 'The sickened condition is removed.' },
  { id: 'mercy-fatigued', name: 'Fatigued', description: 'The fatigued condition is removed.' },
  // Available from level 6 (min class level 6 on the group)
  { id: 'mercy-dazed', name: 'Dazed', description: 'The dazed condition is removed.' },
  {
    id: 'mercy-diseased',
    name: 'Diseased',
    description: "The paladin's lay on hands ability also acts as remove disease.",
  },
  {
    id: 'mercy-staggered',
    name: 'Staggered',
    description:
      'The staggered condition is removed, as long as it is not caused by a permanent condition.',
  },
  // Available from level 9
  {
    id: 'mercy-cursed',
    name: 'Cursed',
    description: "The paladin's lay on hands ability also acts as remove curse.",
  },
  {
    id: 'mercy-exhausted',
    name: 'Exhausted',
    description: 'The exhausted condition is removed (requires the fatigued mercy).',
  },
  {
    id: 'mercy-frightened',
    name: 'Frightened',
    description: 'The frightened condition is removed (requires the shaken mercy).',
  },
  {
    id: 'mercy-injured',
    name: 'Injured',
    description: 'Ability damage is removed (1 point per use).',
  },
  {
    id: 'mercy-nauseated',
    name: 'Nauseated',
    description: 'The nauseated condition is removed (requires the sickened mercy).',
  },
  {
    id: 'mercy-poisoned',
    name: 'Poisoned',
    description: "The paladin's lay on hands ability also acts as neutralize poison.",
  },
  // Available from level 12
  {
    id: 'mercy-blinded',
    name: 'Blinded',
    description: 'The blinded condition is removed (requires the dazed mercy).',
  },
  {
    id: 'mercy-deafened',
    name: 'Deafened',
    description: 'The deafened condition is removed (requires the shaken mercy).',
  },
  { id: 'mercy-paralyzed', name: 'Paralyzed', description: 'The paralyzed condition is removed.' },
  {
    id: 'mercy-stunned',
    name: 'Stunned',
    description: 'The stunned condition is removed (requires the dazed mercy).',
  },
];

export const paladinDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'paladin-mercy',
    className: 'paladin',
    featureName: 'Mercy',
    description:
      "At 3rd level and every 3 levels thereafter, a paladin can select one mercy. Each mercy adds an effect to the paladin's lay on hands ability.",
    selectionMode: {
      type: 'at_class_levels',
      levels: [3, 6, 9, 12, 15, 18],
    },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'mercies-3',
        name: 'Level 3+ Mercies',
        options: MERCY_OPTIONS.slice(0, 3),
      },
      {
        id: 'mercies-6',
        name: 'Level 6+ Mercies',
        minClassLevel: 6,
        options: MERCY_OPTIONS.slice(3, 6),
      },
      {
        id: 'mercies-9',
        name: 'Level 9+ Mercies',
        minClassLevel: 9,
        options: MERCY_OPTIONS.slice(6, 12),
      },
      {
        id: 'mercies-12',
        name: 'Level 12+ Mercies',
        minClassLevel: 12,
        options: MERCY_OPTIONS.slice(12),
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'paladin-divine-bond',
    className: 'paladin',
    featureName: 'Divine Bond',
    description:
      "At 5th level, a paladin forms a divine bond with her god. Once the form is chosen, it cannot be changed. Standard bonds: enhance a weapon with celestial energy, or gain the service of a special mount (functions as a druid animal companion at paladin level, INT minimum 6). Optional variant bonds (Healer's Handbook, GM discretion): Agathion, Angelic, or Archon bond. Weapon and variant bond enhancement choices are per-use, not stored here.",
    selectionMode: { type: 'at_class_levels', levels: [5] },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'standard-bond',
        name: 'Standard Bond',
        options: [
          {
            id: 'weapon',
            name: 'Weapon Bond',
            description:
              "A celestial spirit enhances the paladin's weapon for 1 minute/level. Grants a +1 enhancement bonus at 5th level, +1 per 3 levels beyond 5th (max +6 at 20th). Bonuses may be converted to weapon properties (axiomatic, holy, flaming, keen, speed, etc.). Usable once/day at 5th, +1/day per 4 levels beyond 5th (max 4/day at 17th).",
          },
          {
            id: 'mount',
            name: 'Special Mount',
            description:
              'The paladin gains a bonded mount — typically a heavy horse (Medium) or pony (Small), though exotic options (boar, camel, dog, elk, etc.) may be available at GM discretion. Functions as a druid animal companion at paladin level, with INT of at least 6. At 11th level the mount gains the Celestial Creature template and becomes a magical beast. At 15th level it gains SR equal to paladin level + 11.',
          },
        ],
      },
      {
        id: 'variant-bond',
        name: "Variant Bond (Healer's Handbook — GM Discretion)",
        options: [
          {
            id: 'agathion-bond',
            name: 'Agathion Bond',
            description:
              'A standard action calls an agathion spirit for 1 minute/level. Adds Charisma bonus to HP restored by spells, lay on hands, and channel energy, plus 1 additional HP per 3 levels beyond 5th (max +5+Cha mod at 20th). Replaces weapon/mount bond.',
          },
          {
            id: 'angelic-bond',
            name: 'Angelic Bond',
            description:
              'A standard action manifests a resplendent halo for 1 minute/level, shedding light as continual flame. All allies within 20 ft gain protection from evil (deflection +3 and resistance +3, +1 per 3 levels beyond 5th, max +8 at 20th). Replaces weapon/mount bond.',
          },
          {
            id: 'archon-bond',
            name: 'Archon Bond',
            description:
              "A standard action causes the paladin's eyes to glow with righteous fury for 1 minute/level. Hostile creatures within 10 ft that look at the paladin must make a Will save (DC 10 + 1/2 paladin level + Cha) or take –2 on attack rolls, saves, and AC for 24 hours. Radius increases by 5 ft per 3 levels beyond 5th (max 35 ft at 20th). Replaces weapon/mount bond.",
          },
        ],
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 2,
  },
];
