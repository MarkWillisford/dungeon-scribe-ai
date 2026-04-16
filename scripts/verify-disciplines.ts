import { ALL_DISCIPLINES } from '../src/data/disciplines/index';

console.log('=== Discipline Database Verification ===\n');
console.log('Total:', ALL_DISCIPLINES.length);

// By source system
const bySrc: Record<string, number> = {};
ALL_DISCIPLINES.forEach((d) => {
  bySrc[d.sourceSystem] = (bySrc[d.sourceSystem] || 0) + 1;
});
console.log('By source system:', bySrc);

// By verification status
const byStatus: Record<string, number> = {};
ALL_DISCIPLINES.forEach((d) => {
  byStatus[d.verificationStatus] = (byStatus[d.verificationStatus] || 0) + 1;
});
console.log('By verification status:', byStatus);

// Duplicate checks
const ids = ALL_DISCIPLINES.map((d) => d.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log('\nDuplicate IDs:', dupeIds.length > 0 ? dupeIds : 'none');

const names = ALL_DISCIPLINES.map((d) => d.name);
const dupeNames = names.filter((n, i) => names.indexOf(n) !== i);
console.log('Duplicate names:', dupeNames.length > 0 ? dupeNames : 'none');

// Required-field validation
let errors = 0;
ALL_DISCIPLINES.forEach((d) => {
  if (!d.id) {
    console.error('Missing id:', d.name);
    errors++;
  }
  if (!d.name) {
    console.error('Missing name:', d.id);
    errors++;
  }
  if (!d.description) {
    console.error('Missing description:', d.id);
    errors++;
  }
  if (!d.associatedSkill) {
    console.error('Missing associatedSkill:', d.id);
    errors++;
  }
  if (!Array.isArray(d.associatedWeaponGroups)) {
    console.error('Missing associatedWeaponGroups array:', d.id);
    errors++;
  }
  if (!d.sourceSystem) {
    console.error('Missing sourceSystem:', d.id);
    errors++;
  }
  if (!d.source) {
    console.error('Missing source:', d.id);
    errors++;
  }
  if (d.isOfficial === undefined) {
    console.error('Missing isOfficial:', d.id);
    errors++;
  }
  if (!d.verificationStatus) {
    console.error('Missing verificationStatus:', d.id);
    errors++;
  }
});
console.log('Validation errors:', errors);

console.log('\nAll disciplines:');
ALL_DISCIPLINES.forEach((d) =>
  console.log('  ' + d.name + ' (' + d.sourceSystem + ', skill=' + d.associatedSkill + ')'),
);
