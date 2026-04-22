// Initiating base classes — imports from per-class files in initiating/.
//
// Populated per plans/data-scraping/path-of-war-scraping.md Phase 4.

import type { ExpandedClassData } from './types';

import { STALKER_CLASS } from './initiating/stalker';
import { WARDER_CLASS } from './initiating/warder';
import { WARLORD_CLASS } from './initiating/warlord';
import { HARBINGER_CLASS } from './initiating/harbinger';
import { MYSTIC_CLASS } from './initiating/mystic';
import { ZEALOT_CLASS } from './initiating/zealot';

export const INITIATING_CLASSES: ExpandedClassData[] = [
  STALKER_CLASS,
  WARDER_CLASS,
  WARLORD_CLASS,
  HARBINGER_CLASS,
  MYSTIC_CLASS,
  ZEALOT_CLASS,
];
