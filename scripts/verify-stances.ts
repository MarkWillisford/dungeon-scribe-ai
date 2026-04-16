import { ALL_STANCES } from '../src/data/stances/index';

console.log('=== Stance Database Verification ===\n');
console.log('Total:', ALL_STANCES.length);

// By discipline
const byDiscipline: Record<string, number> = {};
ALL_STANCES.forEach((s) => {
  byDiscipline[s.disciplineId] = (byDiscipline[s.disciplineId] || 0) + 1;
});
console.log('\nBy discipline:');
Object.entries(byDiscipline)
  .sort((a, b) => b[1] - a[1])
  .forEach(([d, n]) => console.log(`  ${d}: ${n}`));

// By level
const byLevel: Record<number, number> = {};
ALL_STANCES.forEach((s) => {
  byLevel[s.level] = (byLevel[s.level] || 0) + 1;
});
console.log('\nBy level:', byLevel);

// By verification status
const byStatus: Record<string, number> = {};
ALL_STANCES.forEach((s) => {
  byStatus[s.verificationStatus] = (byStatus[s.verificationStatus] || 0) + 1;
});
console.log('By verification status:', byStatus);

// Duplicate checks
const ids = ALL_STANCES.map((s) => s.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log('\nDuplicate IDs:', dupeIds.length > 0 ? dupeIds : 'none');

// Required-field validation
let errors = 0;
ALL_STANCES.forEach((s) => {
  if (!s.id) {
    console.error('Missing id:', s.name);
    errors++;
  }
  if (!s.name) {
    console.error('Missing name:', s.id);
    errors++;
  }
  if (!s.disciplineId) {
    console.error('Missing disciplineId:', s.id);
    errors++;
  }
  if (typeof s.level !== 'number' || s.level < 1 || s.level > 9) {
    console.error('Invalid level (must be 1-9):', s.id, s.level);
    errors++;
  }
  if (!s.description) {
    console.error('Missing description:', s.id);
    errors++;
  }
  if (!s.source) {
    console.error('Missing source:', s.id);
    errors++;
  }
  if (!s.verificationStatus) {
    console.error('Missing verificationStatus:', s.id);
    errors++;
  }
});
console.log('Validation errors:', errors);
