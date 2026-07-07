/**
 * Regression guard for issue #246.
 *
 * Daring Champion (cavalier archetype) was missing its order choices because:
 *   1. The Firestore permission bug (#244) blocked reads from cavalierorders.
 *   2. No test verified the static data wiring, so the gap went undetected.
 *
 * These tests assert the full wiring chain:
 *   cavalierDefinitions → Order definition → collectionName 'cavalierorders'
 *   cavalierorders data → correctly shaped for picker display
 *
 * Since Daring Champion keeps the Order feature from Cavalier (it is not in
 * replacedFeatures), the cavalier base class definitions cover Daring Champion.
 */

import { cavalierDefinitions } from '@/data/classChoiceDefinitions/cavalier';
import { getDefinitionsForClass } from '@/data/classChoiceDefinitions/index';
import { ALL_CAVALIER_ORDERS } from '@/data/cavalierOrders/index';

describe('cavalier order choice wiring (#246)', () => {
  describe('cavalierDefinitions static data', () => {
    test('includes exactly one Order definition', () => {
      const orderDefs = cavalierDefinitions.filter((d) => d.featureName === 'Order');
      expect(orderDefs).toHaveLength(1);
    });

    test('Order definition targets cavalierorders collection', () => {
      const orderDef = cavalierDefinitions.find((d) => d.featureName === 'Order');
      expect(orderDef?.optionSource).toBe('collection');
      expect(orderDef?.collectionName).toBe('cavalierorders');
    });

    test('Order definition is single_at_creation (applies to Daring Champion at level 1)', () => {
      const orderDef = cavalierDefinitions.find((d) => d.featureName === 'Order');
      expect(orderDef?.selectionMode.type).toBe('single_at_creation');
    });

    test('Order definition has required seeding fields', () => {
      const orderDef = cavalierDefinitions.find((d) => d.featureName === 'Order');
      expect(orderDef?.id).toBe('cavalier-order');
      expect(orderDef?.className).toBe('cavalier');
      expect(orderDef?.isOfficial).toBe(true);
      expect(orderDef?.visibility).toBe('global');
    });
  });

  describe('getDefinitionsForClass wiring', () => {
    test('returns Order definition for "cavalier" (case-insensitive — covers Daring Champion entry)', () => {
      const defs = getDefinitionsForClass('cavalier');
      const orderDef = defs.find((d) => d.featureName === 'Order');
      expect(orderDef).toBeDefined();
      expect(orderDef?.collectionName).toBe('cavalierorders');
    });

    test('returns Order definition for "Cavalier" (matches ClassEntry.name capitalisation)', () => {
      const defs = getDefinitionsForClass('Cavalier');
      const orderDef = defs.find((d) => d.featureName === 'Order');
      expect(orderDef).toBeDefined();
    });
  });

  describe('cavalierorders seed data', () => {
    test('contains at least one order', () => {
      expect(ALL_CAVALIER_ORDERS.length).toBeGreaterThan(0);
    });

    test('each order has id, name, and classSkills (required for picker display)', () => {
      for (const order of ALL_CAVALIER_ORDERS) {
        expect(typeof order.id).toBe('string');
        expect(order.id.length).toBeGreaterThan(0);
        expect(typeof order.name).toBe('string');
        expect(order.name.length).toBeGreaterThan(0);
        expect(Array.isArray(order.classSkills)).toBe(true);
      }
    });

    test('all order ids are unique', () => {
      const ids = ALL_CAVALIER_ORDERS.map((o) => o.id);
      const unique = new Set(ids);
      expect(unique.size).toBe(ids.length);
    });
  });
});
