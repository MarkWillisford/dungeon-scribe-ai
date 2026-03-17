// Animal Companion documents — Firestore collection: 'animalcompanions/{id}'
//
// Used by Druid (Nature Bond), Ranger (Animal Companion), Cavalier (Mount),
// and any other class that grants a companion or mount.
// Stat blocks are base (level 1) values — scaling applied by the companion rules engine.
// Descriptions are flavor text — mechanical effects wired by modifier pipeline.

export interface AnimalCompanionSizeProgression {
  // Base size at companion level 1; some companions grow one size at level 4 or 7
  base: string; // 'Small' | 'Medium' | 'Large' | etc.
  level4?: string; // size category at companion level 4, if it changes
  level7?: string; // size category at companion level 7, if it changes
}

export interface AnimalCompanionEntry {
  id: string; // kebab-case: 'wolf', 'hawk', 'horse', 'giant-scorpion'
  name: string;
  description?: string;

  // Base stats (companion level 1, before any advancement)
  baseSize: AnimalCompanionSizeProgression;
  baseSpeed: number; // ft per round; primary movement mode
  climbSpeed?: number;
  swimSpeed?: number;
  flySpeed?: number;
  flyManeuverability?: string; // 'average' | 'good' | 'poor' | etc.

  baseStr: number;
  baseDex: number;
  baseCon: number;
  baseInt: number;
  baseWis: number;
  baseCha: number;

  baseHD: number; // hit dice at level 1
  baseAC: number; // natural armor bonus at level 1
  baseAttacks: string; // textual description: '2 claws +3 (1d4+2), bite +3 (1d6+2)'

  // Special qualities text (e.g. 'low-light vision, scent, trip')
  specialQualities?: string[];

  // Skills gained at level 1 (skill names)
  naturalSkills?: string[];

  // Feats granted at level 1
  naturalFeats?: string[];

  // ContentMetadata
  source: string; // 'pf1e-core' | 'pf1e-apg' | '3.5e' | 'homebrew' | etc.
  createdBy?: string;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  isOfficial: boolean;
  rev: number;
}
