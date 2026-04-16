/**
 * GameDataCache — unit tests.
 *
 * Tests the in-memory TTL cache used by FirestoreGameDataConnector.
 */

import { GameDataCache, TTL } from '@services/GameDataCache';

describe('GameDataCache', () => {
  beforeEach(() => {
    GameDataCache.clear();
  });

  // ---- get / set ---------------------------------------------------------------

  describe('get', () => {
    test('returns null for a key that was never set', () => {
      expect(GameDataCache.get('nonexistent')).toBeNull();
    });

    test('returns the stored value for a valid key', () => {
      GameDataCache.set('feats/all', [{ id: 'power-attack' }]);
      expect(GameDataCache.get('feats/all')).toEqual([{ id: 'power-attack' }]);
    });

    test('returns null and evicts entry after TTL expires', () => {
      // Set with a 1ms TTL
      GameDataCache.set('short-lived', 'hello', 1);

      // Advance time past the TTL
      const origNow = Date.now;
      Date.now = () => origNow() + 10;

      expect(GameDataCache.get('short-lived')).toBeNull();

      // Restore
      Date.now = origNow;
    });

    test('returns value when TTL has not yet expired', () => {
      GameDataCache.set('still-alive', 42, 60_000);
      expect(GameDataCache.get<number>('still-alive')).toBe(42);
    });
  });

  describe('set', () => {
    test('uses OFFICIAL TTL by default', () => {
      const origNow = Date.now;
      const fakeTime = 1_000_000;
      Date.now = () => fakeTime;

      GameDataCache.set('test-key', 'value');

      // Still valid 23 hours later
      Date.now = () => fakeTime + 23 * 60 * 60 * 1000;
      expect(GameDataCache.get('test-key')).toBe('value');

      // Expired 25 hours later
      Date.now = () => fakeTime + 25 * 60 * 60 * 1000;
      expect(GameDataCache.get('test-key')).toBeNull();

      Date.now = origNow;
    });

    test('overwrites existing entry with new value and TTL', () => {
      GameDataCache.set('key', 'first');
      expect(GameDataCache.get('key')).toBe('first');

      GameDataCache.set('key', 'second');
      expect(GameDataCache.get('key')).toBe('second');
    });
  });

  // ---- invalidate ---------------------------------------------------------------

  describe('invalidate', () => {
    test('removes a specific key', () => {
      GameDataCache.set('feats/power-attack', { id: 'power-attack' });
      GameDataCache.set('feats/toughness', { id: 'toughness' });

      GameDataCache.invalidate('feats/power-attack');

      expect(GameDataCache.get('feats/power-attack')).toBeNull();
      expect(GameDataCache.get('feats/toughness')).not.toBeNull();
    });

    test('is a no-op for a key that does not exist', () => {
      expect(() => GameDataCache.invalidate('nonexistent')).not.toThrow();
    });
  });

  // ---- invalidateCollection -----------------------------------------------------

  describe('invalidateCollection', () => {
    test('removes all keys with the given prefix/', () => {
      GameDataCache.set('feats/all', []);
      GameDataCache.set('feats/power-attack', {});
      GameDataCache.set('feats/toughness', {});
      GameDataCache.set('traits/all', []);

      GameDataCache.invalidateCollection('feats');

      expect(GameDataCache.get('feats/all')).toBeNull();
      expect(GameDataCache.get('feats/power-attack')).toBeNull();
      expect(GameDataCache.get('feats/toughness')).toBeNull();
      expect(GameDataCache.get('traits/all')).not.toBeNull();
    });

    test('does not remove keys that match prefix but lack slash separator', () => {
      GameDataCache.set('feats-extra/all', []);
      GameDataCache.set('feats/all', []);

      GameDataCache.invalidateCollection('feats');

      // 'feats-extra/all' does NOT start with 'feats/' — should survive
      expect(GameDataCache.get('feats-extra/all')).not.toBeNull();
      expect(GameDataCache.get('feats/all')).toBeNull();
    });
  });

  // ---- clear --------------------------------------------------------------------

  describe('clear', () => {
    test('empties all entries', () => {
      GameDataCache.set('a', 1);
      GameDataCache.set('b', 2);
      GameDataCache.set('c', 3);

      GameDataCache.clear();

      expect(GameDataCache.get('a')).toBeNull();
      expect(GameDataCache.get('b')).toBeNull();
      expect(GameDataCache.get('c')).toBeNull();
    });
  });

  // ---- TTL constants ------------------------------------------------------------

  describe('TTL constants', () => {
    test('OFFICIAL is 24 hours', () => {
      expect(TTL.OFFICIAL).toBe(24 * 60 * 60 * 1000);
    });

    test('CAMPAIGN is 30 minutes', () => {
      expect(TTL.CAMPAIGN).toBe(30 * 60 * 1000);
    });

    test('SEARCH is 5 minutes', () => {
      expect(TTL.SEARCH).toBe(5 * 60 * 1000);
    });
  });
});
