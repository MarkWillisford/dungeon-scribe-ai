/**
 * gameData.ts — Game data source and content visibility types
 *
 * Defines canonical types for where game data originates and how it's distributed.
 */

/**
 * Canonical game data source record.
 * Normalizes both short codes (pf1e-apg) and full book names.
 */
export interface GameDataSource {
  /** Unique book identifier (e.g., 'crb', 'apg', 'um', 'ppc-wo') */
  bookId: string;

  /** Human-readable book name (e.g., 'Core Rulebook', 'Advanced Player\'s Guide') */
  bookName: string;

  /** Publisher name (typically 'Paizo' for official content) */
  publisher: string;

  /** Page number where content appears (optional, used when specific page is known) */
  page?: number;
}

/**
 * Content visibility level — controls access and distribution.
 * Used by seed scripts to determine Firestore visibility settings.
 */
export type ContentVisibility = 'public' | 'private' | 'campaign';

/**
 * Template-provided source info (from scrapers).
 * Normalized by normalizeSource() to GameDataSource.
 */
export interface TemplateSourceInfo {
  source?: string; // 'pf1e-apg' or 'Core Rulebook' format
  page?: number;
}
