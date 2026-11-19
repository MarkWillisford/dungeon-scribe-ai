import type { ClassFeature } from '@/types/classes';
import type { ArchetypeData, ClassFeatureData } from '@/data/classes/types';

export interface ArchetypeResolution {
  features: ClassFeature[];
  conflicts: [];
  maxSafeLevel: number;
  status: 'clean';
}

/**
 * Maps a ClassFeatureData (catalog shape) onto the ClassFeature shape stored
 * on a character's ClassEntry. All fields are transferred directly; `effects`
 * defaults to an empty array when absent.
 */
function featureDataToFeature(data: ClassFeatureData): ClassFeature {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    shortDescription: data.shortDescription,
    activationMode: data.activationMode,
    level: data.level,
    effects: data.effects ?? [],
    resourcePool: data.resourcePool,
    activationCost: data.activationCost,
    maintenanceCost: data.maintenanceCost,
  };
}

/**
 * Pure function. Takes the class entry's current feature list and an archetype
 * and returns the merged result:
 *   - features named in replacedFeatures are removed (exact name match)
 *   - newFeatures are appended
 *   - modifiedFeatures are left in place (rename/tweak logic is a later slice)
 *
 * Returns a resolution object with 'clean' status and no conflicts (clash
 * detection is deferred to slice 2).
 */
export function resolveArchetype(
  baseFeatures: ClassFeature[],
  archetype: ArchetypeData,
): ArchetypeResolution {
  const replaced = new Set(archetype.replacedFeatures);
  const filtered = baseFeatures.filter((f) => !replaced.has(f.name));
  const added = archetype.newFeatures.map(featureDataToFeature);
  return {
    features: [...filtered, ...added],
    conflicts: [],
    maxSafeLevel: 20,
    status: 'clean',
  };
}
