/**
 * Regression guard for issue #246.
 *
 * Daring Champion (cavalier archetype) was missing its order choices because:
 *   1. The Firestore permission bug (#244) blocked reads from cavalierorders.
 *   2. No test verified the static data wiring, so the gap went undetected.
 *
 * Tests go through StaticGameDataConnector — the project-approved test double
 * for the runtime connector — rather than importing from src/data/ directly.
 */

import { StaticGameDataConnector } from '@/services/StaticGameDataConnector';
import { GameDataService } from '@/services/GameDataService';

describe('cavalier order choice wiring (#246)', () => {
  let connector: StaticGameDataConnector;

  beforeAll(() => {
    connector = new StaticGameDataConnector();
    GameDataService.setConnector(connector);
  });

  afterAll(() => {
    GameDataService.setConnector(new StaticGameDataConnector());
  });

  describe('cavalier class choice definition', () => {
    test('includes Order definition for cavalier class', async () => {
      const defs = await connector.getClassChoiceDefinitions('cavalier');
      const orderDef = defs.find((d) => d.featureName === 'Order');
      expect(orderDef).toBeDefined();
    });

    test('Order definition targets cavalierorders collection with single_at_creation selection', async () => {
      const defs = await connector.getClassChoiceDefinitions('cavalier');
      const orderDef = defs.find((d) => d.featureName === 'Order');
      expect(orderDef?.optionSource).toBe('collection');
      expect(orderDef?.collectionName).toBe('cavalierorders');
      expect(orderDef?.selectionMode.type).toBe('single_at_creation');
    });

    test('lookup works for "Cavalier" (title-case ClassEntry.name used in ClassEntryCard)', async () => {
      const defs = await connector.getClassChoiceDefinitions('Cavalier');
      const orderDef = defs.find((d) => d.featureName === 'Order');
      expect(orderDef).toBeDefined();
      expect(orderDef?.collectionName).toBe('cavalierorders');
    });
  });

  describe('cavalierorders data', () => {
    test('contains at least one order', async () => {
      const items = await GameDataService.getClassChoiceItems('cavalierorders');
      expect(items.length).toBeGreaterThan(0);
    });

    test('order items have key, label, and subLabel derived from classSkills', async () => {
      const items = await GameDataService.getClassChoiceItems('cavalierorders');
      for (const item of items) {
        expect(typeof item.key).toBe('string');
        expect(item.key.length).toBeGreaterThan(0);
        expect(typeof item.label).toBe('string');
        expect(item.label.length).toBeGreaterThan(0);
        expect(typeof item.subLabel).toBe('string');
      }
    });

    test('all order keys are unique', async () => {
      const items = await GameDataService.getClassChoiceItems('cavalierorders');
      const keys = items.map((i) => i.key);
      expect(new Set(keys).size).toBe(keys.length);
    });
  });
});
