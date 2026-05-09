# When to Mock

Mock at **system boundaries** only:

- External services (Firebase/Firestore, email, etc.)
- Databases (sometimes — prefer a test adapter over a real DB)
- Time/randomness
- File system (sometimes)

Don't mock:

- Your own classes/modules
- Internal collaborators
- Anything you control

## Designing for Mockability

At system boundaries, design interfaces that are easy to mock:

**1. Use dependency injection**

Pass external dependencies in rather than creating them internally:

```typescript
// Easy to mock — connector is injected
class CharacterValidationService {
  constructor(private gameData: GameDataService) {}

  async validate(character: Character): Promise<ValidationResult> {
    const race = await this.gameData.getRaceById(character.raceId);
    // ...
  }
}

// Hard to mock — service reaches out to Firestore directly
class CharacterValidationService {
  async validate(character: Character): Promise<ValidationResult> {
    const db = getFirestore();
    const race = await getDoc(doc(db, 'races', character.raceId));
    // ...
  }
}
```

**2. Mock at the connector seam, not at Firestore itself**

`GameDataService` delegates all Firestore I/O through a `GameDataConnector` interface. Mock the connector, not `firebase/firestore` directly. The codebase already ships `StaticGameDataConnector` — a test adapter that serves data from the static seed files in `src/data/` with no network calls.

```typescript
// GOOD: swap the connector once for the whole suite
import { GameDataService } from '@/services/GameDataService';
import { StaticGameDataConnector } from '@/services/connectors/StaticGameDataConnector';

beforeAll(() => {
  GameDataService.setConnector(new StaticGameDataConnector());
});
```

This is preferred over mocking `firebase/firestore` methods one-by-one in every test file. `jest.setup.ts` already mocks the Firebase SDK globally to prevent SDK validation throws; the connector swap happens on top of that.

**3. Prefer named connector methods over a generic fetch wrapper**

`GameDataConnector` exposes a specific method for each data operation. That means each mock returns one specific shape with no conditional logic:

```typescript
// GOOD: StaticGameDataConnector implements the full interface
// — each method returns real seed data, tests exercise real shapes
GameDataService.setConnector(new StaticGameDataConnector());

// ALSO FINE: hand-roll a minimal stub for a focused unit test
const stubConnector: Partial<GameDataConnector> = {
  getRaceById: jest.fn().mockResolvedValue({ id: 'human', name: 'Human', ... }),
};
GameDataService.setConnector(stubConnector as GameDataConnector);

// BAD: mocking firestore internals couples tests to SDK internals
jest.mock('firebase/firestore', () => ({
  getDoc: jest.fn().mockResolvedValue({ data: () => ({ name: 'Human' }) }),
  doc: jest.fn(),
}));
```

## Example: Testing CharacterValidationService

```typescript
import { GameDataService } from '@/services/GameDataService';
import { StaticGameDataConnector } from '@/services/connectors/StaticGameDataConnector';
import { CharacterValidationService } from '@/services/CharacterValidationService';
import { buildCharacter } from '../factories/character';

describe('CharacterValidationService', () => {
  let validator: CharacterValidationService;

  beforeAll(() => {
    // Swap in the static adapter — no Firestore, no network, deterministic data
    GameDataService.setConnector(new StaticGameDataConnector());
    validator = new CharacterValidationService(GameDataService);
  });

  it('passes validation for a well-formed human fighter', async () => {
    const character = buildCharacter({ raceId: 'human', classId: 'fighter', level: 1 });
    const result = await validator.validate(character);
    expect(result.isValid).toBe(true);
  });

  it('rejects an unknown raceId', async () => {
    const character = buildCharacter({ raceId: 'unknown-race' });
    const result = await validator.validate(character);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Invalid race');
  });
});
```

Key points:
- `setConnector` in `beforeAll` runs once for the suite — not in `beforeEach`
- `StaticGameDataConnector` serves real seed data from `src/data/`, so shape assertions are meaningful
- For edge cases not covered by seed data, pass a stub connector in the individual test
