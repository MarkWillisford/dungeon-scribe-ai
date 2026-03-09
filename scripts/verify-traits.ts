import { ALL_TRAITS } from '../src/data/traits/index';

console.log('=== Trait Database Verification ===\n');
console.log('Total traits:', ALL_TRAITS.length);

const byCategory: Record<string, number> = {};
ALL_TRAITS.forEach((t) => {
  byCategory[t.category] = (byCategory[t.category] || 0) + 1;
});
console.log('By category:', byCategory);

const bySrc: Record<string, number> = {};
ALL_TRAITS.forEach((t) => {
  bySrc[t.source] = (bySrc[t.source] || 0) + 1;
});
console.log('By source:', bySrc);

const ids = ALL_TRAITS.map((t) => t.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log('\nDuplicate IDs:', dupeIds.length > 0 ? dupeIds : 'none');

const names = ALL_TRAITS.map((t) => t.name);
const dupeNames = names.filter((n, i) => names.indexOf(n) !== i);
console.log('Duplicate names:', dupeNames.length > 0 ? dupeNames : 'none');

let errors = 0;
ALL_TRAITS.forEach((t) => {
  if (!t.id) {
    console.error('Missing id:', t.name);
    errors++;
  }
  if (!t.name) {
    console.error('Missing name:', t.id);
    errors++;
  }
  if (!t.description) {
    console.error('Missing description:', t.id);
    errors++;
  }
  if (!t.source) {
    console.error('Missing source:', t.id);
    errors++;
  }
  if (!t.category) {
    console.error('Missing category:', t.id);
    errors++;
  }
  if (!Array.isArray(t.prerequisites)) {
    console.error('Missing prerequisites:', t.id);
    errors++;
  }
  if (!Array.isArray(t.effects)) {
    console.error('Missing effects:', t.id);
    errors++;
  }
});
console.log('Validation errors:', errors);

console.log('\nAll traits:');
ALL_TRAITS.forEach((t) => console.log('  ' + t.name + ' (' + t.category + ', ' + t.source + ')'));
