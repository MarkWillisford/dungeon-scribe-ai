// ---- Racial Choice Definitions ----
// Firestore collection: racialChoiceDefinitions/{id}
//
// Defines what a racial trait choice IS and where options come from.
// The player's actual selections are stored as RacialChoice[] on the character's info object.
// Mirrors the shape of ClassChoiceDefinition but scoped to race — no level-based selection modes.

import type { GameDataSource } from './gameData';
import type { DataQualityFields } from './base';
import type { ClassChoiceOption, ClassChoiceOptionGroup } from './classChoices';

// ---- Selection Mode ----

export type RacialChoiceSelectionMode =
  | {
      // Pick once at character creation. Cannot be changed.
      // e.g. Elven Noble: Agile Fighters feat, Insightful Leaders trait
      type: 'single_at_creation';
    }
  | {
      // Pick `count` options at character creation.
      type: 'multi_at_creation';
      count: number;
    };

// ---- Racial Choice Definition ----

export interface RacialChoiceDefinition extends DataQualityFields {
  id: string; // e.g. 'elven-noble-agile-fighters', 'elven-noble-sla'
  raceName: string; // matched lowercase against ExpandedRaceData.name
  featureName: string; // display name; also FK to RacialChoice.featureName on the character
  description: string;

  selectionMode: RacialChoiceSelectionMode;

  // Where selectable options come from
  optionSource: 'inline' | 'collection';

  // Used when optionSource === 'inline'
  optionGroups?: ClassChoiceOptionGroup[];

  // Used when optionSource === 'collection'
  collectionName?: string;
  collectionFilter?: Record<string, unknown>;

  source: string | GameDataSource;
  isOfficial: boolean;
  createdBy?: string;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}

// ---- Stored Player Selection ----

export interface RacialChoice {
  featureName: string; // links back to RacialChoiceDefinition.featureName
  selection: string | string[];
  metadata?: Record<string, unknown>;
}
