import { rangerDefinitions } from '@/data/classChoiceDefinitions/ranger';

describe('Favored Enemy options', () => {
  const def = rangerDefinitions.find((d) => d.id === 'ranger-favored-enemy');
  const options = def?.optionGroups?.[0]?.options ?? [];
  const names = options.map((o) => o.name);

  const EXPECTED_NAMES = [
    'Aberration',
    'Animal',
    'Construct',
    'Dragon',
    'Fey',
    'Humanoid (aquatic)',
    'Humanoid (dwarf)',
    'Humanoid (elf)',
    'Humanoid (giant)',
    'Humanoid (goblinoid)',
    'Humanoid (gnoll)',
    'Humanoid (gnome)',
    'Humanoid (halfling)',
    'Humanoid (human)',
    'Humanoid (orc)',
    'Humanoid (reptilian)',
    'Humanoid (other subtype)',
    'Magical Beast',
    'Monstrous Humanoid',
    'Ooze',
    'Outsider (air)',
    'Outsider (chaotic)',
    'Outsider (earth)',
    'Outsider (evil)',
    'Outsider (fire)',
    'Outsider (good)',
    'Outsider (lawful)',
    'Outsider (native)',
    'Outsider (water)',
    'Plant',
    'Undead',
    'Vermin',
  ];

  test('ranger-favored-enemy definition exists', () => {
    expect(def).toBeDefined();
  });

  test('each expected option is present', () => {
    for (const expected of EXPECTED_NAMES) {
      expect(names).toContain(expected);
    }
  });

  test('bare "Humanoid" entry is not present', () => {
    expect(names).not.toContain('Humanoid');
  });

  test('bare "Outsider" entry is not present', () => {
    expect(names).not.toContain('Outsider');
  });

  test('each option has a unique id', () => {
    const ids = options.map((o) => o.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  test('every entry has a non-empty description', () => {
    for (const opt of options) {
      expect(opt.description.length).toBeGreaterThan(0);
    }
  });

  test('no option has a subtypePrompt (subtypes are now flat entries)', () => {
    for (const opt of options) {
      expect((opt as { subtypePrompt?: unknown }).subtypePrompt).toBeUndefined();
    }
  });
});
