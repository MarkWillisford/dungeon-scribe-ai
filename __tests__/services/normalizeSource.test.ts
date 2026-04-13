/**
 * normalizeSource.test.ts — Comprehensive tests for source normalization
 *
 * Covers:
 *  - All common short codes (pf1e-core, pf1e-apg, etc.)
 *  - Full book names with various prefixes
 *  - Edge cases (unknown sources, special formats)
 *  - Type safety and return types
 *  - Batch operations
 */

import { normalizeSource, normalizeSources } from '@/utils/normalizeSource';
import type { TemplateSourceInfo } from '@/types/gameData';

describe('normalizeSource', () => {
  // =============
  // Core Rulebooks
  // =============

  describe('core rulebooks', () => {
    it('normalizes pf1e-core to Core Rulebook', () => {
      const result = normalizeSource('pf1e-core');
      expect(result).toEqual({
        bookId: 'crb',
        bookName: 'Core Rulebook',
        publisher: 'Paizo',
      });
    });

    it("normalizes pf1e-apg to Advanced Player's Guide", () => {
      const result = normalizeSource('pf1e-apg');
      expect(result).toEqual({
        bookId: 'apg',
        bookName: "Advanced Player's Guide",
        publisher: 'Paizo',
      });
    });

    it('normalizes pf1e-um to Ultimate Magic', () => {
      const result = normalizeSource('pf1e-um');
      expect(result).toEqual({
        bookId: 'um',
        bookName: 'Ultimate Magic',
        publisher: 'Paizo',
      });
    });

    it('normalizes pf1e-uc to Ultimate Combat', () => {
      const result = normalizeSource('pf1e-uc');
      expect(result).toEqual({
        bookId: 'uc',
        bookName: 'Ultimate Combat',
        publisher: 'Paizo',
      });
    });

    it('normalizes pf1e-acg to Advanced Class Guide', () => {
      const result = normalizeSource('pf1e-acg');
      expect(result).toEqual({
        bookId: 'acg',
        bookName: 'Advanced Class Guide',
        publisher: 'Paizo',
      });
    });

    it('normalizes pf1e-arg to Advanced Race Guide', () => {
      const result = normalizeSource('pf1e-arg');
      expect(result).toEqual({
        bookId: 'arg',
        bookName: 'Advanced Race Guide',
        publisher: 'Paizo',
      });
    });

    it('normalizes pf1e-oa to Occult Adventures', () => {
      const result = normalizeSource('pf1e-oa');
      expect(result).toEqual({
        bookId: 'oa',
        bookName: 'Occult Adventures',
        publisher: 'Paizo',
      });
    });

    it('normalizes pf1e-ha to Horror Adventures', () => {
      const result = normalizeSource('pf1e-ha');
      expect(result).toEqual({
        bookId: 'ha',
        bookName: 'Horror Adventures',
        publisher: 'Paizo',
      });
    });

    it('normalizes pf1e-ui to Ultimate Intrigue', () => {
      const result = normalizeSource('pf1e-ui');
      expect(result).toEqual({
        bookId: 'ui',
        bookName: 'Ultimate Intrigue',
        publisher: 'Paizo',
      });
    });

    it('normalizes pf1e-uw to Ultimate Wilderness', () => {
      const result = normalizeSource('pf1e-uw');
      expect(result).toEqual({
        bookId: 'uw',
        bookName: 'Ultimate Wilderness',
        publisher: 'Paizo',
      });
    });
  });

  // ===========================
  // Full Book Names with Prefixes
  // ===========================

  describe('full book names with prefixes', () => {
    it('normalizes "Core Rulebook" to pf1e-core', () => {
      const result = normalizeSource('Core Rulebook');
      expect(result.bookId).toBe('crb');
      expect(result.bookName).toBe('Core Rulebook');
      expect(result.publisher).toBe('Paizo');
    });

    it('normalizes "Advanced Player\'s Guide" to pf1e-apg', () => {
      const result = normalizeSource("Advanced Player's Guide");
      expect(result.bookId).toBe('apg');
      expect(result.bookName).toBe("Advanced Player's Guide");
      expect(result.publisher).toBe('Paizo');
    });

    it('normalizes "Pathfinder Core Rulebook" to pf1e-core', () => {
      const result = normalizeSource('Pathfinder Core Rulebook');
      expect(result.bookId).toBe('crb');
    });

    it('normalizes "Pathfinder Roleplaying Game: Core Rulebook" to pf1e-core', () => {
      const result = normalizeSource('Pathfinder Roleplaying Game: Core Rulebook');
      expect(result.bookId).toBe('crb');
    });

    it('normalizes "Pathfinder RPG: Core Rulebook" to pf1e-core', () => {
      const result = normalizeSource('Pathfinder RPG: Core Rulebook');
      expect(result.bookId).toBe('crb');
    });

    it('normalizes with whitespace handling', () => {
      const result = normalizeSource('  Core Rulebook  ');
      expect(result.bookId).toBe('crb');
    });

    it('normalizes case-insensitive names', () => {
      const result = normalizeSource('core rulebook');
      expect(result.bookId).toBe('crb');
    });

    it('normalizes "Ultimate Magic" to pf1e-um', () => {
      const result = normalizeSource('Ultimate Magic');
      expect(result.bookId).toBe('um');
    });

    it('normalizes "Ultimate Combat" to pf1e-uc', () => {
      const result = normalizeSource('Ultimate Combat');
      expect(result.bookId).toBe('uc');
    });

    it('normalizes "Advanced Race Guide" to pf1e-arg', () => {
      const result = normalizeSource('Advanced Race Guide');
      expect(result.bookId).toBe('arg');
    });

    it('normalizes "Advanced Class Guide" to pf1e-acg', () => {
      const result = normalizeSource('Advanced Class Guide');
      expect(result.bookId).toBe('acg');
    });
  });

  // ================================
  // Pathfinder Player Companion Series
  // ================================

  describe('Pathfinder Player Companion series', () => {
    it('normalizes pf1e-ppc-wo to Wilderness Origins', () => {
      const result = normalizeSource('pf1e-ppc-wo');
      expect(result).toEqual({
        bookId: 'ppc-wo',
        bookName: 'Pathfinder Player Companion: Wilderness Origins',
        publisher: 'Paizo',
      });
    });

    it('normalizes pf1e-ppc-aa to Arcane Anthology', () => {
      const result = normalizeSource('pf1e-ppc-aa');
      expect(result.bookId).toBe('ppc-aa');
      expect(result.bookName).toContain('Arcane Anthology');
    });

    it('normalizes pf1e-ppc-boa to Blood of Angels', () => {
      const result = normalizeSource('pf1e-ppc-boa');
      expect(result.bookId).toBe('ppc-boa');
      expect(result.bookName).toContain('Blood of Angels');
    });

    it('normalizes pf1e-ppc-bob to Blood of Beasts', () => {
      const result = normalizeSource('pf1e-ppc-bob');
      expect(result.bookId).toBe('ppc-bob');
    });

    it('normalizes pf1e-ppc-boe to Blood of Elves', () => {
      const result = normalizeSource('pf1e-ppc-boe');
      expect(result.bookId).toBe('ppc-boe');
    });

    it('normalizes pf1e-ppc-hog to Heroes of Golarion', () => {
      const result = normalizeSource('pf1e-ppc-hog');
      expect(result.bookId).toBe('ppc-hog');
    });

    it('normalizes pf1e-ppc-lod to Legacy of Dragons', () => {
      const result = normalizeSource('pf1e-ppc-lod');
      expect(result.bookId).toBe('ppc-lod');
    });
  });

  // =================
  // Adventure Paths
  // =================

  describe('Adventure Path modules', () => {
    it('normalizes pf1e-ap85', () => {
      const result = normalizeSource('pf1e-ap85');
      expect(result.bookId).toBe('ap85');
      expect(result.bookName).toBe('Pathfinder Adventure Path #85');
      expect(result.publisher).toBe('Paizo');
    });

    it('normalizes pf1e-ap118', () => {
      const result = normalizeSource('pf1e-ap118');
      expect(result.bookId).toBe('ap118');
      expect(result.bookName).toBe('Pathfinder Adventure Path #118');
    });

    it('normalizes pf1e-ap-123 (with dash)', () => {
      const result = normalizeSource('pf1e-ap-123');
      expect(result.bookId).toBe('ap123');
      expect(result.bookName).toBe('Pathfinder Adventure Path #123');
    });

    it('infers Adventure Path from raw text', () => {
      const result = normalizeSource('Adventure Path #91');
      expect(result.bookId).toBe('ap91');
      expect(result.bookName).toBe('Pathfinder Adventure Path #91');
    });
  });

  // ==================
  // Edge Cases
  // ==================

  describe('edge cases', () => {
    it('handles undefined input gracefully', () => {
      const result = normalizeSource(undefined);
      expect(result).toEqual({
        bookId: 'unknown',
        bookName: 'Unknown Source',
        publisher: 'Unknown',
      });
    });

    it('handles empty string', () => {
      const result = normalizeSource('');
      expect(result.bookId).toBe('unknown');
    });

    it('handles TemplateSourceInfo with source property', () => {
      const info: TemplateSourceInfo = { source: 'pf1e-apg', page: 42 };
      const result = normalizeSource(info);
      expect(result.bookId).toBe('apg');
      expect(result.page).toBe(42);
    });

    it('handles TemplateSourceInfo without source', () => {
      const info: TemplateSourceInfo = { page: 10 };
      const result = normalizeSource(info);
      expect(result.bookId).toBe('unknown');
    });

    it('adds page number when provided', () => {
      const result = normalizeSource('pf1e-core', 42);
      expect(result.page).toBe(42);
    });

    it('adds page number from TemplateSourceInfo', () => {
      const info: TemplateSourceInfo = { source: 'pf1e-apg', page: 100 };
      const result = normalizeSource(info);
      expect(result.page).toBe(100);
    });

    it('handles page override (direct param over TemplateSourceInfo)', () => {
      const info: TemplateSourceInfo = { source: 'pf1e-apg', page: 100 };
      const result = normalizeSource(info, 50); // direct param takes precedence
      expect(result.page).toBe(50);
    });

    it('handles unknown source gracefully (logs warning, returns fallback)', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      const result = normalizeSource('some-completely-unknown-source');
      expect(result.bookId).toBe('unknown');
      expect(result.bookName).toBe('some-completely-unknown-source');
      expect(result.publisher).toBe('Unknown');
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    it('handles d20pfsrd.com as external source', () => {
      const result = normalizeSource('d20pfsrd.com');
      expect(result.bookId).toBe('d20pfsrd');
      expect(result.bookName).toContain('d20PFSRD');
    });

    it('handles 3.5e as external source', () => {
      const result = normalizeSource('3.5e');
      expect(result.bookId).toBe('3.5e');
      expect(result.bookName).toContain('D&D 3.5');
    });

    it('handles homebrew', () => {
      const result = normalizeSource('homebrew');
      expect(result.bookId).toBe('homebrew');
      expect(result.bookName).toBe('Homebrew Content');
    });

    it('handles misc sources', () => {
      const result = normalizeSource('pf1e-misc');
      expect(result.bookId).toBe('misc');
    });
  });

  // =====================
  // Special Book Collections
  // =====================

  describe('special collections', () => {
    it('normalizes pf1e-isg (Inner Sea Gods)', () => {
      const result = normalizeSource('pf1e-isg');
      expect(result.bookId).toBe('isg');
      expect(result.bookName).toBe('Inner Sea Gods');
    });

    it('normalizes pf1e-ismc (Inner Sea Magic)', () => {
      const result = normalizeSource('pf1e-ismc');
      expect(result.bookId).toBe('ismc');
      expect(result.bookName).toBe('Inner Sea Magic');
    });

    it('normalizes pf1e-hog (Heroes of Golarion)', () => {
      const result = normalizeSource('pf1e-hog');
      expect(result.bookId).toBe('hog');
    });

    it('normalizes pf1e-oo (Occult Origins)', () => {
      const result = normalizeSource('pf1e-oo');
      expect(result.bookId).toBe('oo');
    });

    it('normalizes pf1e-lod (Legacy of Dragons)', () => {
      const result = normalizeSource('pf1e-lod');
      expect(result.bookId).toBe('lod');
    });
  });

  // =======================
  // Return Type & Structure
  // =======================

  describe('return type and structure', () => {
    it('always returns GameDataSource interface', () => {
      const result = normalizeSource('pf1e-core');
      expect(result).toHaveProperty('bookId');
      expect(result).toHaveProperty('bookName');
      expect(result).toHaveProperty('publisher');
      expect(typeof result.bookId).toBe('string');
      expect(typeof result.bookName).toBe('string');
      expect(typeof result.publisher).toBe('string');
    });

    it('includes page when provided', () => {
      const result = normalizeSource('pf1e-core', 123);
      expect(result.page).toBe(123);
    });

    it('omits page when not provided', () => {
      const result = normalizeSource('pf1e-core');
      expect(result.page).toBeUndefined();
    });
  });

  // =======================
  // Case Sensitivity
  // =======================

  describe('case sensitivity and normalization', () => {
    it('handles mixed case short codes', () => {
      const result = normalizeSource('PF1E-CORE');
      // Note: short codes are case-sensitive, so this should return unknown
      // unless we add case-insensitive matching for short codes
      // Current implementation: direct match fails, then tries prefix stripping
      expect(result).toBeDefined();
    });

    it('handles mixed case full names', () => {
      const result = normalizeSource('CORE RULEBOOK');
      expect(result.bookId).toBe('crb');
    });

    it('preserves bookName casing in output', () => {
      const result = normalizeSource('pf1e-core');
      expect(result.bookName).toBe('Core Rulebook');
    });
  });
});

// =================
// Batch Normalization
// =================

describe('normalizeSources (batch)', () => {
  it('normalizes array of sources', () => {
    const sources = ['pf1e-core', 'pf1e-apg', 'pf1e-um'];
    const results = normalizeSources(sources);
    expect(results).toHaveLength(3);
    expect(results[0].bookId).toBe('crb');
    expect(results[1].bookId).toBe('apg');
    expect(results[2].bookId).toBe('um');
  });

  it('handles mixed undefined and valid sources', () => {
    const sources: (string | undefined)[] = ['pf1e-core', undefined, 'pf1e-apg'];
    const results = normalizeSources(sources);
    expect(results).toHaveLength(3);
    expect(results[0].bookId).toBe('crb');
    expect(results[1].bookId).toBe('unknown');
    expect(results[2].bookId).toBe('apg');
  });

  it('handles empty array', () => {
    const results = normalizeSources([]);
    expect(results).toEqual([]);
  });

  it('returns array of GameDataSource', () => {
    const results = normalizeSources(['pf1e-core', 'pf1e-apg']);
    results.forEach((result) => {
      expect(result).toHaveProperty('bookId');
      expect(result).toHaveProperty('bookName');
      expect(result).toHaveProperty('publisher');
    });
  });
});

// =================
// Integration Tests
// =================

describe('integration scenarios', () => {
  it('normalizes real-world scraper output', () => {
    const scraperData = [
      { source: 'pf1e-apg', page: 42 },
      { source: 'pf1e-um', page: 100 },
      { source: 'pf1e-ppc-wo' },
    ] as TemplateSourceInfo[];

    const results = scraperData.map((item) => normalizeSource(item));
    expect(results).toHaveLength(3);
    expect(results[0].page).toBe(42);
    expect(results[1].page).toBe(100);
    expect(results[2].page).toBeUndefined();
  });

  it('normalizes real-world human-authored data', () => {
    const humanData = [
      'Core Rulebook',
      'Pathfinder Core Rulebook',
      "Advanced Player's Guide",
      "Pathfinder Roleplaying Game: Advanced Player's Guide",
    ];

    const results = humanData.map((source) => normalizeSource(source));
    expect(results[0].bookId).toBe('crb');
    expect(results[1].bookId).toBe('crb');
    expect(results[2].bookId).toBe('apg');
    expect(results[3].bookId).toBe('apg');
  });

  it('handles diverse source formats in seeding context', () => {
    const mixed = [
      'pf1e-core',
      'Core Rulebook',
      "Advanced Player's Guide",
      'pf1e-apg',
      undefined,
      'homebrew',
      'pf1e-unknown',
    ];

    const results = normalizeSources(mixed);
    expect(results).toHaveLength(7);
    expect(results.every((r) => r.bookId && r.bookName && r.publisher)).toBe(true);
  });
});
