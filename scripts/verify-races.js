const {
  ALL_EXPANDED_RACES,
  CORE_RACES_EXPANDED,
  FEATURED_RACES,
  UNCOMMON_RACES,
  STANDARD_RP_EXTRA_RACES,
  ADVANCED_RP_EXTRA_RACES,
  MONSTROUS_AND_POWERFUL_RACES,
  RP_UNKNOWN_RACES,
} = require('../src/data/races/index');

console.log('=== Race Database Verification ===\n');
console.log('Core:', CORE_RACES_EXPANDED.length);
console.log('Featured:', FEATURED_RACES.length);
console.log('Uncommon:', UNCOMMON_RACES.length);
console.log('Standard RP Extra:', STANDARD_RP_EXTRA_RACES.length);
console.log('Advanced RP Extra:', ADVANCED_RP_EXTRA_RACES.length);
console.log('Monstrous/Powerful:', MONSTROUS_AND_POWERFUL_RACES.length);
console.log('RP Unknown:', RP_UNKNOWN_RACES.length);
console.log('Total:', ALL_EXPANDED_RACES.length);

// Check for duplicate names
const names = ALL_EXPANDED_RACES.map(r => r.name);
const dupes = names.filter((n, i) => names.indexOf(n) !== i);
console.log('\nDuplicate names:', dupes.length > 0 ? dupes : 'none');

// Check core races are present
const coreNames = ['Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human'];
const missingCore = coreNames.filter(n => !names.includes(n));
console.log('Missing core races:', missingCore.length > 0 ? missingCore : 'none');

// Validate required fields
let errors = 0;
ALL_EXPANDED_RACES.forEach(race => {
  if (!race.name) { console.error('Missing name'); errors++; }
  if (!race.category) { console.error('Missing category:', race.name); errors++; }
  if (!race.size) { console.error('Missing size:', race.name); errors++; }
  if (typeof race.speed !== 'number') { console.error('Missing/invalid speed:', race.name); errors++; }
  if (!race.type) { console.error('Missing type:', race.name); errors++; }
  if (!Array.isArray(race.racialTraits)) { console.error('Missing racialTraits:', race.name); errors++; }
  if (!Array.isArray(race.languages)) { console.error('Missing languages:', race.name); errors++; }
  if (!race.source) { console.error('Missing source:', race.name); errors++; }
});
console.log('Validation errors:', errors);

// Stats
const byCategory = {};
ALL_EXPANDED_RACES.forEach(r => { byCategory[r.category] = (byCategory[r.category] || 0) + 1; });
console.log('\nBy category:', byCategory);

const byPowerTier = {};
ALL_EXPANDED_RACES.forEach(r => { byPowerTier[r.powerTier] = (byPowerTier[r.powerTier] || 0) + 1; });
console.log('By power tier:', byPowerTier);

const withFlexible = ALL_EXPANDED_RACES.filter(r => r.flexibleAbilityBonus).map(r => r.name);
console.log('Flexible ability bonus:', withFlexible.length > 0 ? withFlexible : 'none');

const totalTraits = ALL_EXPANDED_RACES.reduce((sum, r) => sum + r.racialTraits.length, 0);
console.log('Total racial traits:', totalTraits);

// Check sizes
const bySizes = {};
ALL_EXPANDED_RACES.forEach(r => { bySizes[r.size] = (bySizes[r.size] || 0) + 1; });
console.log('By size:', bySizes);
