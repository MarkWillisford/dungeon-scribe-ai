import { ClassChoiceDefinition } from '@/types/classChoices';

export const spiritualistDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'spiritualist-phantom-emotional-focus',
    className: 'spiritualist',
    featureName: 'Phantom Emotional Focus',
    description:
      "A spiritualist's phantom has an emotional focus that determines its special abilities and the skill bonuses it grants while confined in the spiritualist's consciousness.",
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'phantom-emotional-foci',
        name: '',
        options: [
          {
            id: 'anger',
            name: 'Anger',
            description:
              'The phantom embodies rage and violent impulses. Grants Intimidate and Perception bonuses while confined. Ectoplasmic form uses a gore attack.',
          },
          {
            id: 'dedication',
            name: 'Dedication',
            description:
              'The phantom embodies absolute commitment and loyalty. Grants Heal and Knowledge (history) bonuses while confined. Ectoplasmic form uses a slam attack.',
          },
          {
            id: 'despair',
            name: 'Despair',
            description:
              'The phantom embodies hopelessness and sorrow. Grants Intimidate and Sense Motive bonuses while confined. Ectoplasmic form uses a slam attack.',
          },
          {
            id: 'fear',
            name: 'Fear',
            description:
              'The phantom embodies terror and dread. Grants Intimidate and Stealth bonuses while confined. Ectoplasmic form uses a slam attack.',
          },
          {
            id: 'hatred',
            name: 'Hatred',
            description:
              'The phantom embodies deep-seated malice and animosity. Grants Bluff and Perception bonuses while confined. Ectoplasmic form uses a slam attack.',
          },
          {
            id: 'jealousy',
            name: 'Jealousy',
            description:
              'The phantom embodies covetousness and envy. Grants Bluff and Sleight of Hand bonuses while confined. Ectoplasmic form uses a slam attack.',
          },
          {
            id: 'zeal',
            name: 'Zeal',
            description:
              'The phantom embodies fervent devotion and enthusiasm. Grants Knowledge (religion) and Sense Motive bonuses while confined. Ectoplasmic form uses a slam attack.',
          },
        ],
      },
    ],
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
