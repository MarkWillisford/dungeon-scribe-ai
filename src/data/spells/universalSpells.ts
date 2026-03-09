import type { Spell } from '@/types/spells';

export const UNIVERSAL_SPELLS: Spell[] = [
  {
    name: 'Arcane Mark',
    classLevels: {
      arcanist: 0,
      magus: 0,
      psychic: 0,
      shaman: 0,
      sorcerer: 0,
      summoner: 0,
      summoner_unchained: 0,
      witch: 0,
      wizard: 0,
    },
    school: 'Universal',
    components: {
      verbal: true,
      somatic: true,
      material: false,
      focus: false,
      divine: false,
    },
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'one personal rune or mark, all of which must fit within 1 sq. ft.',
    duration: 'Permanent',
    savingThrow: 'none',
    spellResistance: 'no',
    description:
      'This spell allows you to inscribe your personal rune or mark, which can consist of no more than six characters. The writing can be visible or invisible. An arcane mark spell enables you to etch the rune upon any substance without harm to the material upon which it is placed. If an invisible mark is made, a detect magic spell causes it to glow and be visible, though not necessarily understandable.\n\nSee invisibility, true seeing, a gem of seeing, or a robe of eyes likewise allows the user to see an invisible arcane mark. A read magic spell reveals the words, if any. The mark cannot be dispelled, but it can be removed by the caster or by an erase spell.\n\nIf an arcane mark is placed on a living being, the effect gradually fades in about a month.\n\nArcane mark must be cast on an object prior to casting instant summons on the same object.',
    source: 'Core Rulebook',
  },
  {
    name: 'Limited Wish',
    classLevels: {
      arcanist: 7,
      psychic: 7,
      sorcerer: 7,
      wizard: 7,
    },
    school: 'Universal',
    components: {
      verbal: true,
      somatic: true,
      material: true,
      materialComponents: 'diamond worth 1,500 gp',
      focus: false,
      divine: false,
    },
    castingTime: '1 standard action',
    range: 'see text',
    target: 'see text',
    duration: 'see text',
    savingThrow: 'none, see text',
    spellResistance: 'yes',
    description:
      'A limited wish lets you create nearly any type of effect. For example, a limited wish can do any of the following things.\n\n' +
      '• Duplicate any sorcerer/wizard spell of 6th level or lower, provided the spell does not belong to one of your opposition schools.\n' +
      '• Duplicate any non-sorcerer/wizard spell of 5th level or lower, provided the spell does not belong to one of your opposition schools.\n' +
      '• Duplicate any sorcerer/wizard spell of 5th level or lower, even if it belongs to one of your opposition schools.\n' +
      '• Duplicate any non-sorcerer/wizard spell of 4th level or lower, even if it belongs to one of your opposition schools.\n' +
      '• Undo the harmful effects of many spells, such as insanity.\n' +
      '• Produce any other effect whose power level is in line with the above effects, such as a single creature automatically hitting on its next attack or taking a –7 penalty on its next saving throw.\n\n' +
      'A duplicated spell allows saving throws and spell resistance as normal, but the save DC is for a 7th-level spell. When a limited wish spell duplicates a spell with a material component that costs more than 1,000 gp, you must provide that component (in addition to the 1,500 gp diamond component for this spell).',
    source: 'Core Rulebook',
  },
  {
    name: 'Permanency',
    classLevels: {
      arcanist: 5,
      psychic: 5,
      sorcerer: 5,
      wizard: 5,
    },
    school: 'Universal',
    components: {
      verbal: true,
      somatic: true,
      material: true,
      materialComponents: 'diamond dust (see tables for amounts)',
      focus: false,
      divine: false,
    },
    castingTime: '2 rounds',
    range: 'see text',
    target: 'see text',
    duration: 'permanent; see text',
    savingThrow: 'none',
    spellResistance: 'no',
    description:
      'This spell makes the duration of certain other spells permanent. You first cast the desired spell and then follow it with the permanency spell. Certain spells that are normally personal and cannot be made permanent.\n\n' +
      'The following spells can be made permanent only on yourself. You cannot cast these spells on other creatures. This application of permanency can be dispelled only by a caster of higher level than you were when you cast the spell.\n\n' +
      'Arcane sight (minimum caster level 11th, 7,500 gp); Comprehend languages (9th, 2,500 gp); Darkvision (10th, 5,000 gp); Detect magic (9th, 2,500 gp); Read magic (9th, 2,500 gp); See invisibility (10th, 5,000 gp); Tongues (11th, 7,500 gp).\n\n' +
      'The following spells can be made permanent on yourself, on another creature, or on an object (as appropriate for the spell in question):\n\n' +
      'Enlarge person (9th, 2,500 gp); Magic fang (9th, 2,500 gp); Magic fang, greater (11th, 7,500 gp); Reduce person (9th, 2,500 gp); Resistance (9th, 2,500 gp); Telepathic bond (13th, 12,500 gp) — only bonds two creatures per casting of permanency.\n\n' +
      'The following spells can be made permanent only on an object or area:\n\n' +
      "Alarm (9th, 2,500 gp); Animate objects (14th, 15,000 gp); Dancing lights (9th, 2,500 gp); Ghost sound (9th, 2,500 gp); Gust of wind (11th, 7,500 gp); Invisibility (10th, 5,000 gp); Mage's private sanctum (13th, 12,500 gp); Magic mouth (10th, 5,000 gp); Phase door (15th, 17,500 gp); Prismatic sphere (17th, 22,500 gp); Prismatic wall (16th, 20,000 gp); Shrink item (11th, 7,500 gp); Solid fog (12th, 10,000 gp); Stinking cloud (11th, 7,500 gp); Symbol of death (16th, 20,000 gp); Symbol of fear (14th, 15,000 gp); Symbol of insanity (16th, 20,000 gp); Symbol of pain (13th, 12,500 gp); Symbol of persuasion (14th, 15,000 gp); Symbol of sleep (16th, 20,000 gp); Symbol of stunning (15th, 17,500 gp); Symbol of weakness (15th, 17,500 gp); Teleportation circle (17th, 22,500 gp); Wall of fire (12th, 10,000 gp); Wall of force (13th, 12,500 gp); Web (10th, 5,000 gp).\n\n" +
      'Spells cast on other targets are vulnerable to dispel magic as normal. The GM may allow other spells to be made permanent.',
    source: 'Core Rulebook',
  },
  {
    name: 'Prestidigitation',
    classLevels: {
      arcanist: 0,
      bard: 0,
      magus: 0,
      medium: 0,
      mesmerist: 0,
      psychic: 0,
      skald: 0,
      sorcerer: 0,
      wizard: 0,
    },
    school: 'Universal',
    components: {
      verbal: true,
      somatic: true,
      material: false,
      focus: false,
      divine: false,
    },
    castingTime: '1 standard action',
    range: '10 ft.',
    target: 'see text',
    duration: '1 hour',
    savingThrow: 'see text',
    spellResistance: 'no',
    description:
      'Prestidigitations are minor tricks that novice spellcasters use for practice. Once cast, a prestidigitation spell enables you to perform simple magical effects for 1 hour. The effects are minor and have severe limitations. A prestidigitation can slowly lift 1 pound of material. It can color, clean, or soil items in a 1-foot cube each round. It can chill, warm, or flavor 1 pound of nonliving material. It cannot deal damage or affect the concentration of spellcasters. Prestidigitation can create small objects, but they look crude and artificial. The materials created by a prestidigitation spell are extremely fragile, and they cannot be used as tools, weapons, or spell components. Finally, prestidigitation lacks the power to duplicate any other spell effects. Any actual change to an object (beyond just moving, cleaning, or soiling it) persists only 1 hour.',
    source: 'Core Rulebook',
  },
  {
    name: 'Wish',
    classLevels: {
      arcanist: 9,
      psychic: 9,
      sorcerer: 9,
      wizard: 9,
    },
    school: 'Universal',
    components: {
      verbal: true,
      somatic: true,
      material: true,
      materialComponents: 'diamond worth 25,000 gp',
      focus: false,
      divine: false,
    },
    castingTime: '1 standard action',
    range: 'see text',
    target: 'see text',
    duration: 'see text',
    savingThrow: 'none, see text',
    spellResistance: 'yes',
    description:
      'Wish is the mightiest spell a wizard or sorcerer can cast. By simply speaking aloud, you can alter reality to better suit you. Even wish, however, has its limits.\n\n' +
      'A wish can produce any one of the following effects.\n\n' +
      '• Duplicate any sorcerer/wizard spell of 8th level or lower, provided the spell does not belong to one of your opposition schools.\n' +
      '• Duplicate any non-sorcerer/wizard spell of 7th level or lower, provided the spell does not belong to one of your opposition schools.\n' +
      '• Duplicate any sorcerer/wizard spell of 7th level or lower, even if it belongs to one of your opposition schools.\n' +
      '• Duplicate any non-sorcerer/wizard spell of 6th level or lower, even if it belongs to one of your opposition schools.\n' +
      '• Undo the harmful effects of many other spells, such as geas/quest or insanity.\n' +
      '• Grant a creature a +1 inherent bonus to an ability score. Two to five wish spells cast in immediate succession can grant a creature a +2 to +5 inherent bonus to an ability score (two wishes = +2, and so on). Inherent bonuses are instantaneous, so they cannot be dispelled. Note: An inherent bonus may not exceed +5 for a single ability score, and inherent bonuses to a particular ability score do not stack, so only the best one applies.\n' +
      '• Remove injuries and afflictions. A single wish can aid one creature per caster level, and all subjects are cured of the same kind of affliction. For example, a wish could cure all the damage you and your companions have taken, or remove all poison effects from those in your party, but not do both.\n' +
      '• Revive the dead. A wish can bring a dead creature back to life by duplicating a resurrection spell. A wish can revive a dead creature whose body has been destroyed, but the task takes two wishes: one to recreate the body and another to infuse the body with life.\n' +
      '• Transport travelers. A wish can lift one creature per caster level from anywhere on any plane and place those creatures wherever you desire. An unwilling target receives a Will saving throw to negate the effect, and spell resistance (if any) applies.\n' +
      "• Undo a single recent event. The wish forces a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish could undo an opponent's successful save, a foe's successful critical hit, or a friend's failed save. The reroll, however, may be as bad as or worse than the original roll. An unwilling target (such as an opponent who is the target of a harmful spell) can attempt a Will save to resist the wish and keep the original result.\n\n" +
      'A duplicated spell allows saving throws and spell resistance as normal (but the save DC is for a 9th-level spell). When a wish duplicates a spell with a material component that costs more than 10,000 gp, you must provide that component.',
    source: 'Core Rulebook',
  },
];
