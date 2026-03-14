import { ClassChoiceDefinition } from '@/types/classChoices';

export const druidDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'druid-nature-bond',
    className: 'druid',
    featureName: 'Nature Bond',
    description:
      'At 1st level, a druid forms a bond with nature. She may bond with an animal companion, select a domain, or (variant) practice druidic herbalism.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'bond-type',
        name: '',
        options: [
          {
            id: 'animal_companion',
            name: 'Animal Companion',
            description:
              'The druid gains an animal companion. The companion choice is made separately in the companion builder.',
          },
          {
            id: 'domain',
            name: 'Domain',
            description:
              'The druid selects one domain from the list of druid-allowed domains. This unlocks the druid-nature-bond-domain choice.',
          },
          {
            id: 'druidic_herbalism',
            name: 'Druidic Herbalism',
            description:
              'Variant (Pathfinder Unchained): the druid forgoes an animal companion or domain to become an expert herbalist, preparing a number of herbal concoctions each day.',
          },
        ],
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'druid-nature-bond-domain',
    className: 'druid',
    featureName: 'Nature Bond Domain',
    description:
      'When a druid selects the Domain option for Nature Bond, she chooses one domain from the list of domains available to druids.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'domains',
    collectionFilter: { druidAllowed: true },
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
