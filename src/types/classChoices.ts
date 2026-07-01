// ---- Class Choice Definitions ----
// Firestore collection: classChoiceDefinitions/{id}
//
// Defines what a class feature choice IS, when it occurs, and where options come from.
// The player's actual selections are stored as ClassChoice[] on ClassEntry (see classes.ts).

import type { GameDataSource } from './gameData';
import type { DataQualityFields } from './base';
import type { ChoiceOption, ChoiceOptionGroup } from './choiceOption';

// ---- Selection Mode ----
// Describes when and how many times a choice is made.

export type ClassChoiceSelectionMode =
  | {
      // Pick once when the class is first taken. Cannot be changed.
      // e.g. Sorcerer bloodline, Oracle mystery, Witch patron, Wizard school
      type: 'single_at_creation';
    }
  | {
      // Pick `count` options when the class is first taken.
      // e.g. Cleric domains (count: 2), Wizard opposition schools (count: 2)
      type: 'multi_at_creation';
      count: number;
    }
  | {
      // Pick once at each of the listed class levels.
      // e.g. Rogue talents at [2,4,6,8,10,12,14,16,18,20]
      // e.g. Ranger favored enemy at [1,5,10,15,20] with canRepeat (pick same for +2 stacking)
      type: 'at_class_levels';
      levels: number[];
      count?: number; // picks per trigger, default 1
      canRepeat?: boolean; // can the same option id be selected again?
    }
  | {
      // Pick once every N class levels starting at startLevel.
      // e.g. Barbarian rage powers: n:2, startLevel:2
      type: 'every_n_class_levels';
      n: number;
      startLevel: number;
      count?: number;
      canRepeat?: boolean;
    }
  | {
      // Requires custom UI handling — not a standard build-time picker.
      // e.g. Shaman wandering spirit (resets daily like spell preparation),
      //      any feature that resets on rest or has non-standard selection logic.
      type: 'special';
    };

// ---- Option Group ----
// Options can be grouped — e.g. Rogue Talents vs. Advanced Talents (level 10+).

// Inline options only — 2–4 fixed choices with no prereqs or sub-structure.
// e.g. Wizard arcane bond (familiar vs bonded object), Ranger combat style label.
// For large choice pools (domains, bloodlines, rage powers, etc.) use optionSource: 'collection'
// and see src/types/classOptions.ts for the document shapes.
export interface ClassChoiceOption extends ChoiceOption {
  // If set, selecting this option injects a classFeature with this name/description/level
  // onto the class entry. Deselecting it (by switching to another option) removes it.
  grantsFeature?: {
    name: string;
    description: string;
    level: number;
  };
}

export interface ClassChoiceOptionGroup extends ChoiceOptionGroup<ClassChoiceOption> {
  minClassLevel?: number; // group is only available at/above this class level
}

// ---- Class Choice Definition ----

export interface ClassChoiceDefinition extends DataQualityFields {
  id: string; // e.g. 'cleric-domains', 'rogue-talent', 'sorcerer-bloodline'
  className: string; // 'cleric' | 'rogue' | 'sorcerer' | 'ranger' | etc.
  featureName: string; // Display name matched against ClassChoice.featureName on the character
  description: string;

  selectionMode: ClassChoiceSelectionMode;

  // Where the selectable options come from
  optionSource: 'inline' | 'collection';

  // Used when optionSource === 'inline'
  optionGroups?: ClassChoiceOptionGroup[];

  // Used when optionSource === 'collection'
  // The UI queries the named Firestore collection for option documents.
  collectionName?: string;
  // Runtime substitution tokens (e.g. '{chosen_deity}') resolved from character state
  collectionFilter?: Record<string, unknown>;

  // Per-level max spell level filter (Dweomerkeeper Mantle of Spells, etc.)
  // Maps class level → filter parameters applied to the collection query.
  // e.g. { 1: { maxSpellLevel: 1 }, 3: { maxSpellLevel: 2 }, 5: { maxSpellLevel: 3 } }
  levelFilterTable?: Record<number, Record<string, unknown>>;

  // ContentMetadata
  source: string | GameDataSource; // string during static data phase; GameDataSource after Firestore migration
  isOfficial: boolean;
  createdBy?: string; // userId, absent for official content
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}
