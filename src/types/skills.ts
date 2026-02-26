export interface Skills {
  acrobatics: Skill;
  appraise: Skill;
  bluff: Skill;
  climb: Skill;
  craft: NamedSkill[];
  diplomacy: Skill;
  disableDevice: Skill;
  disguise: Skill;
  escapeArtist: Skill;
  fly: Skill;
  handleAnimal: Skill;
  heal: Skill;
  intimidate: Skill;
  knowledgeArcana: Skill;
  knowledgeDungeoneering: Skill;
  knowledgeEngineering: Skill;
  knowledgeGeography: Skill;
  knowledgeHistory: Skill;
  knowledgeLocal: Skill;
  knowledgeNature: Skill;
  knowledgeNobility: Skill;
  knowledgePlanes: Skill;
  knowledgeReligion: Skill;
  linguistics: Skill;
  perception: Skill;
  perform: NamedSkill[];
  profession: NamedSkill[];
  ride: Skill;
  senseMotive: Skill;
  sleightOfHand: Skill;
  spellcraft: Skill;
  stealth: Skill;
  survival: Skill;
  swim: Skill;
  useMagicDevice: Skill;
  totalRanks: number;
}

export interface Skill {
  isClassSkill: boolean;
  ranks: number;
  ability: string; // Ability used for this skill
  abilityMod: number;
  classSkillBonus: number; // +3 if class skill with >= 1 rank
  racial: number;
  trait: number;
  item: number;
  misc: number;
  armorPenalty: number;
  total: number;
}

export interface NamedSkill extends Skill {
  name: string; // e.g., "Craft (Alchemy)"
}
