import { ALL_MANEUVERS } from '../src/data/maneuvers/index';

console.log('=== Maneuver Database Verification ===\n');
console.log('Total:', ALL_MANEUVERS.length);

// By discipline
const byDiscipline: Record<string, number> = {};
ALL_MANEUVERS.forEach((m) => {
  byDiscipline[m.disciplineId] = (byDiscipline[m.disciplineId] || 0) + 1;
});
console.log('\nBy discipline:');
Object.entries(byDiscipline)
  .sort((a, b) => b[1] - a[1])
  .forEach(([d, n]) => console.log(`  ${d}: ${n}`));

// By type
const byType: Record<string, number> = {};
ALL_MANEUVERS.forEach((m) => {
  byType[m.type] = (byType[m.type] || 0) + 1;
});
console.log('\nBy type:', byType);

// By level
const byLevel: Record<number, number> = {};
ALL_MANEUVERS.forEach((m) => {
  byLevel[m.level] = (byLevel[m.level] || 0) + 1;
});
console.log('By level:', byLevel);

// By action type
const byAction: Record<string, number> = {};
ALL_MANEUVERS.forEach((m) => {
  byAction[m.actionType] = (byAction[m.actionType] || 0) + 1;
});
console.log('By action type:', byAction);

// By verification status
const byStatus: Record<string, number> = {};
ALL_MANEUVERS.forEach((m) => {
  byStatus[m.verificationStatus] = (byStatus[m.verificationStatus] || 0) + 1;
});
console.log('By verification status:', byStatus);

// Duplicate checks
const ids = ALL_MANEUVERS.map((m) => m.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log('\nDuplicate IDs:', dupeIds.length > 0 ? dupeIds : 'none');

// Required-field validation
let errors = 0;
ALL_MANEUVERS.forEach((m) => {
  if (!m.id) {
    console.error('Missing id:', m.name);
    errors++;
  }
  if (!m.name) {
    console.error('Missing name:', m.id);
    errors++;
  }
  if (!m.disciplineId) {
    console.error('Missing disciplineId:', m.id);
    errors++;
  }
  if (typeof m.level !== 'number' || m.level < 1 || m.level > 9) {
    console.error('Invalid level (must be 1-9):', m.id, m.level);
    errors++;
  }
  if (!['strike', 'boost', 'counter'].includes(m.type)) {
    console.error('Invalid type:', m.id, m.type);
    errors++;
  }
  if (!m.actionType) {
    console.error('Missing actionType:', m.id);
    errors++;
  }
  if (!m.description) {
    console.error('Missing description:', m.id);
    errors++;
  }
  if (!m.source) {
    console.error('Missing source:', m.id);
    errors++;
  }
  if (!m.verificationStatus) {
    console.error('Missing verificationStatus:', m.id);
    errors++;
  }
});
console.log('Validation errors:', errors);
