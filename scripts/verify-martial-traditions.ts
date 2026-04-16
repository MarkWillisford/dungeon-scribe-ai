import { ALL_MARTIAL_TRADITIONS } from '../src/data/martialTraditions/index';

console.log('=== Martial Tradition Database Verification ===\n');
console.log('Total:', ALL_MARTIAL_TRADITIONS.length);

// By favored discipline
const byDiscipline: Record<string, number> = {};
ALL_MARTIAL_TRADITIONS.forEach((t) => {
  byDiscipline[t.favoredDisciplineId] = (byDiscipline[t.favoredDisciplineId] || 0) + 1;
});
console.log('\nBy favored discipline:');
Object.entries(byDiscipline)
  .sort((a, b) => b[1] - a[1])
  .forEach(([d, n]) => console.log(`  ${d}: ${n}`));

// By verification status
const byStatus: Record<string, number> = {};
ALL_MARTIAL_TRADITIONS.forEach((t) => {
  byStatus[t.verificationStatus] = (byStatus[t.verificationStatus] || 0) + 1;
});
console.log('\nBy verification status:', byStatus);

// Duplicate checks
const ids = ALL_MARTIAL_TRADITIONS.map((t) => t.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log('\nDuplicate IDs:', dupeIds.length > 0 ? dupeIds : 'none');

const names = ALL_MARTIAL_TRADITIONS.map((t) => t.name);
const dupeNames = names.filter((n, i) => names.indexOf(n) !== i);
console.log('Duplicate names:', dupeNames.length > 0 ? dupeNames : 'none');

// Required-field validation
let errors = 0;
ALL_MARTIAL_TRADITIONS.forEach((t) => {
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
  if (!t.favoredDisciplineId) {
    console.error('Missing favoredDisciplineId:', t.id);
    errors++;
  }
  if (!t.source) {
    console.error('Missing source:', t.id);
    errors++;
  }
  if (!t.verificationStatus) {
    console.error('Missing verificationStatus:', t.id);
    errors++;
  }
});
console.log('Validation errors:', errors);

console.log('\nAll traditions:');
ALL_MARTIAL_TRADITIONS.forEach((t) =>
  console.log(
    '  ' + t.name + ' (favored=' + t.favoredDisciplineId + ', align=' + (t.alignmentRequirement || '—') + ')',
  ),
);
