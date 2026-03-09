// Canonical target strings used in Effect.target
// The modifier pipeline routes effects to the correct stat based on these

export const EFFECT_TARGETS = {
  // Ability Scores
  ABILITY_STR: 'ability.str',
  ABILITY_DEX: 'ability.dex',
  ABILITY_CON: 'ability.con',
  ABILITY_INT: 'ability.int',
  ABILITY_WIS: 'ability.wis',
  ABILITY_CHA: 'ability.cha',

  // Armor Class
  AC: 'ac',
  AC_ARMOR: 'ac.armor',
  AC_SHIELD: 'ac.shield',
  AC_NATURAL: 'ac.natural',
  AC_DEFLECTION: 'ac.deflection',
  AC_DODGE: 'ac.dodge',

  // Saves
  SAVE_FORTITUDE: 'save.fortitude',
  SAVE_REFLEX: 'save.reflex',
  SAVE_WILL: 'save.will',
  SAVE_ALL: 'save.all',

  // Attack
  ATTACK_MELEE: 'attack.melee',
  ATTACK_RANGED: 'attack.ranged',
  ATTACK_ALL: 'attack.all',

  // Damage
  DAMAGE_MELEE: 'damage.melee',
  DAMAGE_RANGED: 'damage.ranged',
  DAMAGE_ALL: 'damage.all',

  // Combat
  INITIATIVE: 'initiative',
  CMB: 'cmb',
  CMD: 'cmd',
  HP: 'hp',
  HP_PER_LEVEL: 'hp.per_level',

  // Movement
  SPEED_BASE: 'speed.base',
  SPEED_FLY: 'speed.fly',
  SPEED_SWIM: 'speed.swim',
  SPEED_CLIMB: 'speed.climb',
} as const;

// Skills use dynamic targets: `skill.${skillKey}`
// e.g., 'skill.perception', 'skill.knowledgeArcana', 'skill.senseMotive'
