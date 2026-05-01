import React from 'react';
import { render } from '../../helpers/testUtils';
import {
  filterExcludedChoiceItems,
  ClassChoiceRow,
} from '@/components/character/direct-entry/ClassChoiceRow';
import type { SearchItem } from '@/components/ui/SearchPickerSheet';
import type { ClassChoice } from '@/types/classes';
import type { ClassChoiceDefinition } from '@/types/classChoices';

jest.mock('@/services/GameDataService', () => ({
  GameDataService: {
    getClassChoiceItems: jest.fn().mockResolvedValue([]),
    buildCastableSpellItems: jest.fn().mockResolvedValue([]),
  },
}));
jest.mock('@/components/ui/SearchPickerSheet', () => ({
  SearchPickerSheet: () => null,
}));
jest.mock('@/components/character/direct-entry/CompanionPickerSheet', () => ({
  CompanionPickerSheet: () => null,
}));
jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characterEntry: {
        character: {
          classes: { classes: [] },
          companions: [],
          spellcasting: { pools: [], knownSpells: [], spellbooks: [] },
        },
      },
    }),
}));
jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#4A2C2A' },
    isDark: false,
  }),
}));

const item = (key: string): SearchItem => ({ key, label: key });

const choice = (featureName: string, selection: string): ClassChoice => ({
  featureName,
  takenAtLevel: 1,
  selection,
});

const DOMAINS: SearchItem[] = [
  item('fire'),
  item('fire-ash'),
  item('fire-arson'),
  item('fire-smoke'),
  item('earth'),
  item('water'),
  item('air'),
];

describe('filterExcludedChoiceItems', () => {
  it('returns all items when there are no sibling choices', () => {
    const result = filterExcludedChoiceItems(DOMAINS, [], 'Domain', 0, 'domains');
    expect(result).toHaveLength(DOMAINS.length);
  });

  it('returns all items when sibling choices are for a different feature', () => {
    const siblings = [choice('Blessing', 'fire')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 0, 'domains');
    expect(result).toHaveLength(DOMAINS.length);
  });

  it('excludes exact duplicate — slot 0 selected fire, slot 1 picker omits fire', () => {
    const siblings = [choice('Domain', 'fire'), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1, 'domains');
    expect(result.map((i) => i.key)).not.toContain('fire');
  });

  it('excludes subdomains of a selected parent — fire selected → fire-ash, fire-arson, fire-smoke excluded', () => {
    const siblings = [choice('Domain', 'fire'), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1, 'domains');
    const keys = result.map((i) => i.key);
    expect(keys).not.toContain('fire-ash');
    expect(keys).not.toContain('fire-arson');
    expect(keys).not.toContain('fire-smoke');
  });

  it('does not exclude unrelated domains when fire is selected', () => {
    const siblings = [choice('Domain', 'fire'), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1, 'domains');
    const keys = result.map((i) => i.key);
    expect(keys).toContain('earth');
    expect(keys).toContain('water');
    expect(keys).toContain('air');
  });

  it('excludes parent when a subdomain is selected — fire-ash selected → fire excluded', () => {
    const siblings = [choice('Domain', 'fire-ash'), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1, 'domains');
    expect(result.map((i) => i.key)).not.toContain('fire');
  });

  it('excludes sibling subdomains when one subdomain is selected — fire-ash selected → fire-arson, fire-smoke excluded', () => {
    const siblings = [choice('Domain', 'fire-ash'), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1, 'domains');
    const keys = result.map((i) => i.key);
    expect(keys).not.toContain('fire-arson');
    expect(keys).not.toContain('fire-smoke');
  });

  it('does not exclude the current slot own selection (choiceIndex match)', () => {
    // Slot 0 has 'fire' selected — slot 0's own picker should still show 'fire' so user can keep it
    const siblings = [choice('Domain', 'fire'), choice('Domain', 'earth')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 0, 'domains');
    expect(result.map((i) => i.key)).toContain('fire');
  });

  it('handles empty selection strings in sibling choices gracefully', () => {
    const siblings = [choice('Domain', ''), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1, 'domains');
    expect(result).toHaveLength(DOMAINS.length);
  });

  it('works for non-domain collections with no false exclusions', () => {
    const blessings: SearchItem[] = [item('good'), item('law'), item('fire'), item('destruction')];
    const siblings = [choice('Blessing', 'good'), choice('Blessing', '')];
    const result = filterExcludedChoiceItems(blessings, siblings, 'Blessing', 1);
    const keys = result.map((i) => i.key);
    expect(keys).not.toContain('good');
    expect(keys).toContain('law');
    expect(keys).toContain('fire');
    expect(keys).toContain('destruction');
  });

  it('does not block hyphenated non-domain IDs — ancestor-totem selected does not exclude ancestor-totem-greater', () => {
    const ragePowers: SearchItem[] = [
      item('ancestor-totem'),
      item('ancestor-totem-greater'),
      item('ancestor-totem-lesser'),
      item('raging-climber'),
    ];
    const siblings = [choice('Rage Power', 'ancestor-totem'), choice('Rage Power', '')];
    const result = filterExcludedChoiceItems(ragePowers, siblings, 'Rage Power', 1, 'ragepowers');
    const keys = result.map((i) => i.key);
    expect(keys).not.toContain('ancestor-totem');
    expect(keys).toContain('ancestor-totem-greater');
    expect(keys).toContain('ancestor-totem-lesser');
    expect(keys).toContain('raging-climber');
  });
});

const domainDefinition: ClassChoiceDefinition = {
  id: 'cleric-domain',
  className: 'cleric',
  featureName: 'Domain',
  description: 'Choose a domain',
  selectionMode: { type: 'multi_at_creation', count: 2 },
  optionSource: 'collection',
  collectionName: 'domains',
  source: 'pf1e',
  isOfficial: true,
  verificationStatus: 'verified',
  visibility: 'global',
  rev: 1,
};

describe('ClassChoiceRow', () => {
  it('renders featureLabel and empty-state placeholder when no selection is made', () => {
    const texts = render(
      <ClassChoiceRow
        classId="cleric-001"
        definition={domainDefinition}
        choiceIndex={0}
        takenAtLevel={1}
        featureLabel="Domain 1"
        siblingChoices={[]}
      />,
    ).getAllText();
    expect(texts).toContain('Domain 1');
    expect(texts).toContain('— choose —');
  });

  it('shows disabled copy and hides choose placeholder when disabled=true', () => {
    const texts = render(
      <ClassChoiceRow
        classId="cleric-001"
        definition={domainDefinition}
        choiceIndex={0}
        takenAtLevel={1}
        featureLabel="Domain 1"
        siblingChoices={[]}
        disabled
      />,
    ).getAllText();
    expect(texts).toContain('— n/a (other choice made) —');
    expect(texts).not.toContain('— choose —');
  });
});
