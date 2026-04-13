import { ClassChoiceDefinition } from '@/types/classChoices';

export const summonerDefinitions: ClassChoiceDefinition[] = [
  // ── APG SUMMONER ──────────────────────────────────────────────────────────

  {
    id: 'summoner-eidolon-base-form',
    className: 'summoner',
    featureName: 'Eidolon Base Form',
    description:
      'A summoner\'s eidolon takes one of four base forms that determine its starting attacks, limbs, and ability score modifiers. This choice is permanent.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'apg-base-forms',
        name: '',
        options: [
          {
            id: 'biped',
            name: 'Biped',
            description:
              'Two legs. Starting evolutions: two claws (1d4) and limbs (legs). +4 natural armor, +2 Str, +2 Dex.',
          },
          {
            id: 'quadruped',
            name: 'Quadruped',
            description:
              'Four legs. Starting evolutions: two claws (1d4) and limbs (legs) ×2. +4 natural armor, +4 Str, −2 Dex. Increased carrying capacity.',
          },
          {
            id: 'serpentine',
            name: 'Serpentine',
            description:
              'No legs; long sinuous body. Starting evolutions: bite (1d6) and tail slap (1d6). +4 natural armor, −2 Str, +2 Dex.',
          },
          {
            id: 'aquatic',
            name: 'Aquatic',
            description:
              'Aquatic form with fins and a tail. Starting evolutions: bite (1d6) and tail slap (1d6). Swim speed 30 ft, +4 natural armor. Can breathe water.',
          },
        ],
      },
    ],
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'summoner-eidolon-evolution',
    className: 'summoner',
    featureName: 'Eidolon Evolution',
    description:
      'Each level the summoner gains evolution points to spend on eidolon evolutions (pool: level × 1, max 20 at level 20). Evolutions modify the eidolon\'s form and abilities. Point costs range from 1–4. Some evolutions may be taken multiple times. Note: this picker tracks evolution selections; the full point-budget system is managed in the eidolon sheet.',
    selectionMode: { type: 'every_n_class_levels', n: 1, startLevel: 1, canRepeat: true },
    optionSource: 'collection',
    collectionName: 'eidolonevolutions',
    collectionFilter: { summonerType: 'apg' },
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── UNCHAINED SUMMONER ────────────────────────────────────────────────────

  {
    id: 'summoner-unchained-subtype',
    className: 'summoner-unchained',
    featureName: 'Eidolon Subtype',
    description:
      'An unchained summoner\'s eidolon has a specific outsider subtype chosen at 1st level. The subtype determines the eidolon\'s alignment, any innate damage reduction or immunities, and which subtype-restricted evolutions it may take. This choice is permanent.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'unchained-subtypes',
        name: '',
        options: [
          { id: 'aberrant', name: 'Aberrant', description: 'Alien, aberrant outsider. No alignment restriction.' },
          { id: 'aeon', name: 'Aeon', description: 'Neutral outsider. DR 10/chaotic. Immunity to cold, poison; resistance 10 acid/electricity.' },
          { id: 'agathion', name: 'Agathion', description: 'Neutral good outsider. DR 10/evil. Immunity to electricity, petrification.' },
          { id: 'ancestor', name: 'Ancestor', description: 'Neutral outsider representing ancestral spirits.' },
          { id: 'angel', name: 'Angel', description: 'Good outsider. DR 10/evil. Immunity to acid, cold, petrification.' },
          { id: 'archon', name: 'Archon', description: 'Lawful good outsider. DR 10/evil. Immunity to electricity, petrification.' },
          { id: 'astral', name: 'Astral', description: 'Outsider connected to the Astral Plane.' },
          { id: 'azata', name: 'Azata', description: 'Chaotic good outsider. DR 10/evil and lawful. Immunity to electricity, petrification.' },
          { id: 'daemon', name: 'Daemon', description: 'Neutral evil outsider. DR 10/good. Immunity to acid, death, disease, poison.' },
          { id: 'deepwater', name: 'Deepwater', description: 'Outsider from the deep ocean.' },
          { id: 'demon', name: 'Demon', description: 'Chaotic evil outsider. DR 10/good. Immunity to electricity, poison; resistance 10 acid/cold/fire.' },
          { id: 'devil', name: 'Devil', description: 'Lawful evil outsider. DR 10/good and silver. Immunity to fire, poison.' },
          { id: 'div', name: 'Div', description: 'Neutral evil outsider. DR 10/good. Immunity to fire, poison.' },
          { id: 'elemental', name: 'Elemental', description: 'Neutral outsider. DR 5/— (earth/water) or none. Element immunity varies.' },
          { id: 'genie', name: 'Genie', description: 'Outsider tied to an elemental plane. Immunity varies by element.' },
          { id: 'inevitable', name: 'Inevitable', description: 'Lawful neutral outsider. DR 10/chaotic. Immunity to cold, petrification.' },
          { id: 'kami', name: 'Kami', description: 'Neutral outsider. DR 10/cold iron. Immunity to bleed, mind-affecting, petrification, polymorph.' },
          { id: 'kyton', name: 'Kyton', description: 'Lawful evil outsider. DR 10/good and silver. Immunity to cold.' },
          { id: 'plant', name: 'Plant', description: 'Plant-like outsider. DR 10/magic. Immunity to mind-affecting, paralysis, poison, sleep, stunning.' },
          { id: 'protean', name: 'Protean', description: 'Chaotic neutral outsider. DR 10/lawful. Immunity to acid; resistance 10 electricity.' },
          { id: 'psychopomp', name: 'Psychopomp', description: 'Neutral outsider. DR 10/alignment. Immunity to death, disease.' },
          { id: 'radiant', name: 'Radiant', description: 'Good outsider of light and radiance.' },
          { id: 'shadow', name: 'Shadow', description: 'Outsider from the Shadow Plane. DR 10/magic.' },
          { id: 'storykin', name: 'Storykin', description: 'Outsider of the First World, connected to the fey.' },
          { id: 'twinned', name: 'Twinned', description: 'Outsider mystically linked to its summoner.' },
          { id: 'void', name: 'Void', description: 'Outsider from the dark void between stars.' },
        ],
      },
    ],
    source: 'pf1e-unchained',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'summoner-unchained-eidolon-evolution',
    className: 'summoner-unchained',
    featureName: 'Eidolon Evolution',
    description:
      'Each level the unchained summoner gains evolution points to spend on eidolon evolutions (pool: level × 1, max 20 at level 20). Some evolutions are restricted by the eidolon\'s subtype. Note: this picker tracks evolution selections; the full point-budget system is managed in the eidolon sheet.',
    selectionMode: { type: 'every_n_class_levels', n: 1, startLevel: 1, canRepeat: true },
    optionSource: 'collection',
    collectionName: 'eidolonevolutions',
    collectionFilter: { summonerType: 'unchained' },
    source: 'pf1e-unchained',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
