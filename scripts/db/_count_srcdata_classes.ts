/**
 * _count_srcdata_classes.ts — Count class features in src/data vs Firestore staging
 * Investigation only, no writes.
 * Run: npx tsx scripts/db/_count_srcdata_classes.ts
 */
import { ALL_EXPANDED_CLASSES } from '../../src/data/classes/index';

let totalFeatures = 0;
let withEffects = 0;
let withoutEffects = 0;

for (const cls of ALL_EXPANDED_CLASSES) {
  const features = cls.classFeatures ?? [];
  totalFeatures += features.length;
  for (const f of features) {
    if ('effects' in f) withEffects++;
    else withoutEffects++;
  }
}

console.log(`Classes in src/data: ${ALL_EXPANDED_CLASSES.length}`);
console.log(`Total class features in src/data: ${totalFeatures}`);
console.log(`  Features WITH effects property: ${withEffects}`);
console.log(`  Features WITHOUT effects property: ${withoutEffects}`);
