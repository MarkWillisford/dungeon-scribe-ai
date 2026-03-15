// Barrel export for template data — 492 templates across 20 batch files.
// Static seed data only — authoritative copy lives in Firestore at runtime.

export type { TemplateDefinition, TemplateSourceInfo, TemplatePrerequisite, AbilityScoreChange, TemplateDR, TemplateResistance, TemplateSLA, CRTierDefinition } from './types';

import { TemplateDefinition } from './types';
import { TEMPLATES_BATCH_001 } from './raw/templates_batch_001';
import { TEMPLATES_BATCH_002 } from './raw/templates_batch_002';
import { TEMPLATES_BATCH_003 } from './raw/templates_batch_003';
import { TEMPLATES_BATCH_004 } from './raw/templates_batch_004';
import { TEMPLATES_BATCH_005 } from './raw/templates_batch_005';
import { TEMPLATES_BATCH_006 } from './raw/templates_batch_006';
import { TEMPLATES_BATCH_007 } from './raw/templates_batch_007';
import { TEMPLATES_BATCH_008 } from './raw/templates_batch_008';
import { TEMPLATES_BATCH_009 } from './raw/templates_batch_009';
import { TEMPLATES_BATCH_010 } from './raw/templates_batch_010';
import { TEMPLATES_BATCH_011 } from './raw/templates_batch_011';
import { TEMPLATES_BATCH_012 } from './raw/templates_batch_012';
import { TEMPLATES_BATCH_013 } from './raw/templates_batch_013';
import { TEMPLATES_BATCH_014 } from './raw/templates_batch_014';
import { TEMPLATES_BATCH_015 } from './raw/templates_batch_015';
import { TEMPLATES_BATCH_016 } from './raw/templates_batch_016';
import { TEMPLATES_BATCH_017 } from './raw/templates_batch_017';
import { TEMPLATES_BATCH_018 } from './raw/templates_batch_018';
import { TEMPLATES_BATCH_019 } from './raw/templates_batch_019';
import { TEMPLATES_BATCH_020 } from './raw/templates_batch_020';

export const ALL_TEMPLATES: TemplateDefinition[] = [
  ...TEMPLATES_BATCH_001,
  ...TEMPLATES_BATCH_002,
  ...TEMPLATES_BATCH_003,
  ...TEMPLATES_BATCH_004,
  ...TEMPLATES_BATCH_005,
  ...TEMPLATES_BATCH_006,
  ...TEMPLATES_BATCH_007,
  ...TEMPLATES_BATCH_008,
  ...TEMPLATES_BATCH_009,
  ...TEMPLATES_BATCH_010,
  ...TEMPLATES_BATCH_011,
  ...TEMPLATES_BATCH_012,
  ...TEMPLATES_BATCH_013,
  ...TEMPLATES_BATCH_014,
  ...TEMPLATES_BATCH_015,
  ...TEMPLATES_BATCH_016,
  ...TEMPLATES_BATCH_017,
  ...TEMPLATES_BATCH_018,
  ...TEMPLATES_BATCH_019,
  ...TEMPLATES_BATCH_020,
];

export function getTemplateById(id: string): TemplateDefinition | undefined {
  return ALL_TEMPLATES.find((t) => t.id === id);
}

export function getTemplatesByAcquisitionType(
  type: 'inherited' | 'acquired' | 'either',
): TemplateDefinition[] {
  return ALL_TEMPLATES.filter((t) => t.acquisitionType === type);
}

export function getSimpleTemplates(): TemplateDefinition[] {
  return ALL_TEMPLATES.filter((t) => t.isSimpleTemplate);
}
