jest.mock('dotenv', () => ({ config: jest.fn() }));
jest.mock('firebase-admin', () => ({
  apps: [],
  initializeApp: jest.fn(),
  credential: { applicationDefault: jest.fn() },
  firestore: jest.fn(() => ({ settings: jest.fn(), collection: jest.fn() })),
}));

import { COLLECTIONS } from '../../scripts/db/verifySeeding';

describe('COLLECTIONS registry', () => {
  it('uses camelCase animalCompanions collection name to match seeder and runtime connector', () => {
    const spec = COLLECTIONS.find((c) => c.label === 'Animal Companions');
    expect(spec).toBeDefined();
    expect(spec!.collection).toBe('animalCompanions');
  });
});
