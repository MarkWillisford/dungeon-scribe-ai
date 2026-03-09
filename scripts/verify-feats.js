const { ALL_FEATS, CORE_FEATS } = require('../src/data/feats');
const { APG_FEATS } = require('../src/data/feats/apg');
const { UCOMBAT_FEATS } = require('../src/data/feats/ucombat');
const { UMAGIC_FEATS } = require('../src/data/feats/umagic');

console.log('Core:', CORE_FEATS.length);
console.log('APG:', APG_FEATS.length);
console.log('UC:', UCOMBAT_FEATS.length);
console.log('UM:', UMAGIC_FEATS.length);
console.log('Total:', ALL_FEATS.length);

// Check for duplicate IDs
const ids = ALL_FEATS.map(f => f.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log('Duplicate IDs:', dupes.length > 0 ? dupes : 'none');

// Check activation modes
const modes = {};
ALL_FEATS.forEach(f => { modes[f.activationMode] = (modes[f.activationMode] || 0) + 1; });
console.log('Activation modes:', modes);

// Check feats with effects
const withEffects = ALL_FEATS.filter(f => f.effects.length > 0).length;
console.log('Feats with effects:', withEffects, '/', ALL_FEATS.length);

// Check feats with choices
const withChoices = ALL_FEATS.filter(f => f.choices && f.choices.length > 0).length;
console.log('Feats with choices:', withChoices);

// Check feats with prerequisites
const withPrereqs = ALL_FEATS.filter(f => f.prerequisites.length > 0).length;
console.log('Feats with prerequisites:', withPrereqs);

// Validate all required fields
let errors = 0;
ALL_FEATS.forEach(feat => {
  if (!feat.id) { console.error('Missing id:', feat.name); errors++; }
  if (!feat.name) { console.error('Missing name:', feat.id); errors++; }
  if (!feat.description) { console.error('Missing description:', feat.id); errors++; }
  if (!feat.source) { console.error('Missing source:', feat.id); errors++; }
  if (!feat.types || feat.types.length === 0) { console.error('Missing types:', feat.id); errors++; }
  if (!feat.activationMode) { console.error('Missing activationMode:', feat.id); errors++; }
  if (!Array.isArray(feat.prerequisites)) { console.error('Missing prerequisites array:', feat.id); errors++; }
  if (!Array.isArray(feat.effects)) { console.error('Missing effects array:', feat.id); errors++; }
});
console.log('Validation errors:', errors);
