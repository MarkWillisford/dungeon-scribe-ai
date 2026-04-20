import { filterExcludedChoiceItems } from '@/components/character/direct-entry/ClassChoiceRow';
import type { SearchItem } from '@/components/ui/SearchPickerSheet';
import type { ClassChoice } from '@/types/classes';

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
    const result = filterExcludedChoiceItems(DOMAINS, [], 'Domain', 0);
    expect(result).toHaveLength(DOMAINS.length);
  });

  it('returns all items when sibling choices are for a different feature', () => {
    const siblings = [choice('Blessing', 'fire')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 0);
    expect(result).toHaveLength(DOMAINS.length);
  });

  it('excludes exact duplicate — slot 0 selected fire, slot 1 picker omits fire', () => {
    const siblings = [choice('Domain', 'fire'), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1);
    expect(result.map((i) => i.key)).not.toContain('fire');
  });

  it('excludes subdomains of a selected parent — fire selected → fire-ash, fire-arson, fire-smoke excluded', () => {
    const siblings = [choice('Domain', 'fire'), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1);
    const keys = result.map((i) => i.key);
    expect(keys).not.toContain('fire-ash');
    expect(keys).not.toContain('fire-arson');
    expect(keys).not.toContain('fire-smoke');
  });

  it('does not exclude unrelated domains when fire is selected', () => {
    const siblings = [choice('Domain', 'fire'), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1);
    const keys = result.map((i) => i.key);
    expect(keys).toContain('earth');
    expect(keys).toContain('water');
    expect(keys).toContain('air');
  });

  it('excludes parent when a subdomain is selected — fire-ash selected → fire excluded', () => {
    const siblings = [choice('Domain', 'fire-ash'), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1);
    expect(result.map((i) => i.key)).not.toContain('fire');
  });

  it('excludes sibling subdomains when one subdomain is selected — fire-ash selected → fire-arson, fire-smoke excluded', () => {
    const siblings = [choice('Domain', 'fire-ash'), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1);
    const keys = result.map((i) => i.key);
    expect(keys).not.toContain('fire-arson');
    expect(keys).not.toContain('fire-smoke');
  });

  it('does not exclude the current slot own selection (choiceIndex match)', () => {
    // Slot 0 has 'fire' selected — slot 0's own picker should still show 'fire' so user can keep it
    const siblings = [choice('Domain', 'fire'), choice('Domain', 'earth')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 0);
    expect(result.map((i) => i.key)).toContain('fire');
  });

  it('handles empty selection strings in sibling choices gracefully', () => {
    const siblings = [choice('Domain', ''), choice('Domain', '')];
    const result = filterExcludedChoiceItems(DOMAINS, siblings, 'Domain', 1);
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
});
