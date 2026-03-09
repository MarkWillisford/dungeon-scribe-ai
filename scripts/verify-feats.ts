import { ALL_FEATS, CORE_FEATS } from '../src/data/feats/index';
import { APG_FEATS } from '../src/data/feats/apg';
import { UCOMBAT_FEATS } from '../src/data/feats/ucombat';
import { UMAGIC_FEATS } from '../src/data/feats/umagic';

console.log('=== Feat Database Verification ===\n');
console.log('Core:', CORE_FEATS.length);
console.log('APG:', APG_FEATS.length);
console.log('UC:', UCOMBAT_FEATS.length);
console.log('UM:', UMAGIC_FEATS.length);
console.log('Total:', ALL_FEATS.length);

// By type
const byType: Record<string, number> = {};
ALL_FEATS.forEach((f) => {
  f.types.forEach((t) => {
    byType[t] = (byType[t] || 0) + 1;
  });
});
console.log('\nBy type:', byType);

// By activation mode
const byMode: Record<string, number> = {};
ALL_FEATS.forEach((f) => {
  byMode[f.activationMode] = (byMode[f.activationMode] || 0) + 1;
});
console.log('By activation mode:', byMode);

// By source
const bySrc: Record<string, number> = {};
ALL_FEATS.forEach((f) => {
  bySrc[f.source] = (bySrc[f.source] || 0) + 1;
});
console.log('By source:', bySrc);

// Duplicate checks
const ids = ALL_FEATS.map((f) => f.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log('\nDuplicate IDs:', dupeIds.length > 0 ? dupeIds : 'none');

const names = ALL_FEATS.map((f) => f.name);
const dupeNames = names.filter((n, i) => names.indexOf(n) !== i);
console.log('Duplicate names:', dupeNames.length > 0 ? dupeNames : 'none');

// Validation
let errors = 0;
ALL_FEATS.forEach((f) => {
  if (!f.id) {
    console.error('Missing id:', f.name);
    errors++;
  }
  if (!f.name) {
    console.error('Missing name:', f.id);
    errors++;
  }
  if (!f.description) {
    console.error('Missing description:', f.id);
    errors++;
  }
  if (!f.source) {
    console.error('Missing source:', f.id);
    errors++;
  }
  if (!f.types || f.types.length === 0) {
    console.error('Missing types:', f.id);
    errors++;
  }
  if (!f.activationMode) {
    console.error('Missing activationMode:', f.id);
    errors++;
  }
  if (!Array.isArray(f.prerequisites)) {
    console.error('Missing prerequisites array:', f.id);
    errors++;
  }
  if (!Array.isArray(f.effects)) {
    console.error('Missing effects array:', f.id);
    errors++;
  }
});
console.log('Validation errors:', errors);

// Effects coverage
const withEffects = ALL_FEATS.filter((f) => f.effects.length > 0).length;
console.log(
  '\nFeats with effects:',
  withEffects,
  '/',
  ALL_FEATS.length,
  `(${Math.round((withEffects / ALL_FEATS.length) * 100)}%)`,
);

const withPrereqs = ALL_FEATS.filter((f) => f.prerequisites.length > 0).length;
console.log('Feats with prerequisites:', withPrereqs, '/', ALL_FEATS.length);

const withChoices = ALL_FEATS.filter((f) => f.choices && f.choices.length > 0).length;
console.log('Feats with choices:', withChoices);

// List all feat names
console.log('\nAll feats:');
ALL_FEATS.forEach((f) =>
  console.log('  ' + f.name + ' (' + f.types.join(', ') + ', ' + f.source + ')'),
);
