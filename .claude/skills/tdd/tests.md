# Good and Bad Tests

## Good Tests

**Integration-style**: Test through real interfaces, not mocks of internal parts.

```typescript
// GOOD: Tests observable behavior through public API
// From __tests__/services/CharacterValidationService.test.ts
it('warns when feat prerequisite is not met', async () => {
  (PrerequisiteService.checkPrerequisites as jest.Mock).mockResolvedValue({
    met: false,
    unmet: [{ type: 'bab', minimum: 1 }],
    reasons: ['BAB +1'],
  });

  const character = blankCharacter();
  character.feats.feats = [
    {
      featId: 'power-attack',
      name: 'Power Attack',
      source: 'level_1',
      grantedAtLevel: 1,
      active: true,
      choices: {},
      prereqOverride: false,
    } as CharacterFeat,
  ];
  const warnings = await CharacterValidationService.validate(
    character,
    DEFAULT_RULESET,
    TEST_CLASS_MAP,
  );
  expect(
    warnings.some((w) => w.section === 'feats' && w.message.includes('Power Attack')),
  ).toBe(true);
  expect(warnings.find((w) => w.section === 'feats')?.detail).toContain('BAB +1');
});
```

```typescript
// GOOD: Tests stacking rules through computed output
// From __tests__/services/ModifierPipelineService.test.ts
test('dodge bonuses stack', () => {
  const char = createTestCharacter({ dex: 14 });
  char.feats.feats.push({
    featId: 'dodge',
    name: 'Dodge',
    source: 'level_1',
    grantedAtLevel: 1,
    active: true,
    choices: {},
  });
  char.info.race.traits.push({
    name: 'Defensive Training',
    description: 'Dodge bonus to AC',
    effects: [
      {
        type: 'bonus',
        target: 'ac.dodge',
        value: 2,
        bonusType: BonusType.DODGE,
        source: 'Defensive Training',
      },
    ],
  });

  const result = ModifierPipelineService.recalculate(char);
  // Dodge bonuses stack: 1 (Dodge feat) + 2 (Defensive Training) = 3
  expect(result.combatStats.armorClass.dodge).toBe(3);
});
```

```typescript
// GOOD: Tests that prerequisite check returns structured failure
// From __tests__/services/PrerequisiteService.test.ts
test('BAB prerequisite not met', async () => {
  const char = createTestCharacter(); // Fighter level 1 — BAB +1
  const feat = makeFeat([{ type: 'bab', minimum: 6 }]);
  const result = await PrerequisiteService.checkPrerequisites(char, feat);
  expect(result.met).toBe(false);
  expect(result.unmet).toHaveLength(1);
});
```

```typescript
// GOOD: Tests ECL timeline ordering through the built structure
// From __tests__/services/CharacterTimelineService.test.ts
it('inherited LA template: first checkpoints are la_payment, HD stays 0', () => {
  const character = blankCharacter();
  character.appliedTemplates = [
    {
      templateId: 'half-dragon',
      name: 'Half-Dragon',
      appliedAs: 'la',
      la: 3,
      acquisitionType: 'inherited',
      paidTiers: [],
      sourceId: 'half-dragon',
      sourceRev: 0,
      isFreeGrant: false,
    },
  ];
  character.classes.classes = [makeClass('Fighter', 2, '1')];

  const timeline = CharacterTimelineService.buildTimeline(character, undefined, EMPTY_MAP);

  expect(timeline.totalLA).toBe(3);
  expect(timeline.totalHD).toBe(2);
  // First 3 checkpoints are LA payments before any class levels
  expect(timeline.checkpoints[0].decision.type).toBe('la_payment');
  expect(timeline.checkpoints[1].decision.type).toBe('la_payment');
  expect(timeline.checkpoints[2].decision.type).toBe('la_payment');
});
```

Characteristics:

- Tests behavior users/callers care about
- Uses public API only
- Survives internal refactors
- Describes WHAT, not HOW
- One logical assertion per test

## Bad Tests

**Implementation-detail tests**: Coupled to internal structure.

```typescript
// BAD: Tests implementation details — asserts on internal method calls
test('recalculate calls _applyFeatEffects for each feat', () => {
  const spy = jest.spyOn(ModifierPipelineService as any, '_applyFeatEffects');
  ModifierPipelineService.recalculate(char);
  expect(spy).toHaveBeenCalledTimes(char.feats.feats.length);
});
```

Red flags:

- Mocking internal collaborators
- Testing private methods
- Asserting on call counts/order
- Test breaks when refactoring without behavior change
- Test name describes HOW not WHAT
- Verifying through external means instead of interface

```typescript
// BAD: Bypasses interface to verify — queries Firestore directly
test('validate writes warning to database', async () => {
  await CharacterValidationService.validate(character, ruleset, classMap);
  const doc = await db.collection('warnings').doc(character.info.id).get();
  expect(doc.exists).toBe(true);
});

// GOOD: Verifies through the return value interface
test('character with invalid feat prerequisites produces a feats warning', async () => {
  (PrerequisiteService.checkPrerequisites as jest.Mock).mockResolvedValue({
    met: false,
    unmet: [{ type: 'bab', minimum: 1 }],
    reasons: ['BAB +1'],
  });
  const warnings = await CharacterValidationService.validate(character, ruleset, classMap);
  expect(warnings.some((w) => w.section === 'feats')).toBe(true);
});
```
