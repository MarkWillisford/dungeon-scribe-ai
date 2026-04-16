// Initiating base classes — Stalker, Warder, Warlord (PoW),
// Harbinger, Mystic, Zealot (PoWE), plus Tome of Battle classes once in scope.
//
// Each class uses ExpandedClassData with the optional `initiating` field
// populated (InitiatingData: ability, IL progression, disciplines, recovery,
// progression table key).
//
// Populated per plans/data-scraping/path-of-war-scraping.md Phase 4.

import type { ExpandedClassData } from './types';

export const INITIATING_CLASSES: ExpandedClassData[] = [];
