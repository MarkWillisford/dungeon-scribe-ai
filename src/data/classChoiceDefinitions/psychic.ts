import { ClassChoiceDefinition } from '@/types/classChoices';

export const psychicDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'psychic-discipline',
    className: 'psychic',
    featureName: 'Psychic Discipline',
    description:
      'At 1st level, a psychic selects a psychic discipline that determines her bonus spells and granted powers. The discipline also determines whether her phrenic pool uses Wisdom or Charisma.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'psychic-disciplines',
        name: '',
        options: [
          {
            id: 'abomination',
            name: 'Abomination',
            description:
              'The psychic draws power from corruption and revulsion. Phrenic pool uses Charisma.',
          },
          {
            id: 'dream',
            name: 'Dream',
            description:
              'The psychic channels the power of dreams and sleep. Phrenic pool uses Wisdom.',
          },
          {
            id: 'faith',
            name: 'Faith',
            description:
              'The psychic draws power from devotion and spiritual certainty. Phrenic pool uses Wisdom.',
          },
          {
            id: 'lore',
            name: 'Lore',
            description:
              'The psychic draws power from vast knowledge. Phrenic pool uses Intelligence.',
          },
          {
            id: 'pain',
            name: 'Pain',
            description:
              'The psychic harnesses the power of suffering — her own and others\'. Phrenic pool uses Charisma.',
          },
          {
            id: 'psychedelia',
            name: 'Psychedelia',
            description:
              'The psychic channels altered states of consciousness. Phrenic pool uses Wisdom.',
          },
          {
            id: 'rapport',
            name: 'Rapport',
            description:
              'The psychic forms deep connections with others. Phrenic pool uses Charisma.',
          },
          {
            id: 'self-perfection',
            name: 'Self-Perfection',
            description:
              'The psychic hones her own body and mind. Phrenic pool uses Wisdom.',
          },
          {
            id: 'tranquility',
            name: 'Tranquility',
            description:
              'The psychic finds power in serenity and peace. Phrenic pool uses Wisdom.',
          },
        ],
      },
    ],
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'psychic-phrenic-amplification',
    className: 'psychic',
    featureName: 'Phrenic Amplification',
    description:
      'At 1st level and every 2 levels thereafter, a psychic gains a phrenic amplification. Standard amplifications are available from 1st level; major amplifications are available from 11th level.',
    selectionMode: { type: 'at_class_levels', levels: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] },
    optionSource: 'collection',
    collectionName: 'phrenicamplifications',
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
