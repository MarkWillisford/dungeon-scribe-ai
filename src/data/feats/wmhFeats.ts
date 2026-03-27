import type { FeatDefinition } from '@/types/feats';

export const WMH_FEATS: FeatDefinition[] = [
  {
    id: 'advanced_weapon_training',
    name: 'Advanced Weapon Training',
    description:
      'Select one advanced weapon training option, applying it to one fighter weapon group you have already selected with the weapon training class feature. This feat can be taken more than once, but at most once per 5 fighter levels.',
    shortDescription:
      'Select one advanced weapon training option for a weapon group you already have weapon training in.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'level', minimum: 5, class: 'fighter' },
      { type: 'class_feature', featureName: 'weapon training' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['fighter', 'weapon training'],
  },
  {
    id: 'ascetic_style_wmh',
    name: 'Ascetic Style',
    description:
      'You blend arms and martial arts, using weapons with the same ease as unarmed strikes. Choose one weapon from the monk fighter weapon group. While using this style and wielding the chosen weapon, you can apply the effects of feats that have Improved Unarmed Strike as a prerequisite, as well as effects that augment an unarmed strike, as if attacks with the weapon were unarmed attacks.',
    shortDescription:
      'Use a monk weapon as if it were an unarmed strike for feat and ability purposes.',
    source: "Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus', matchChoiceKey: 'weapon' },
      { type: 'special', description: 'base attack bonus +1 or monk level 1st' },
    ],
    effects: [],
    activationMode: 'toggle',
    choices: [{ type: 'weapon', label: 'Weapon', affectsEffects: false }],
    tags: ['monk', 'unarmed', 'style'],
  },
  {
    id: 'ascetic_form_wmh',
    name: 'Ascetic Form',
    description:
      'Your mastery of both weapon and unarmed combat allows you to use the chosen weapon with any class ability that can be used with an unarmed strike. In addition, for the purpose of determining the number of times per day you can use feats that depend on your monk level (such as Stunning Fist or Perfect Strike), your effective monk level equals your character level.',
    shortDescription:
      'Use chosen weapon with class abilities requiring unarmed strikes; count character level as monk level for per-day feat uses.',
    source: "Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'ascetic_style_wmh' },
      { type: 'feat', featId: 'weapon_focus', matchChoiceKey: 'weapon' },
      { type: 'special', description: 'base attack bonus +5 or monk level 5th' },
    ],
    effects: [],
    activationMode: 'toggle',
    choices: [{ type: 'weapon', label: 'Weapon', affectsEffects: false }],
    tags: ['monk', 'unarmed', 'style'],
  },
  {
    id: 'ascetic_strike_wmh',
    name: 'Ascetic Strike',
    description:
      "Your weapon strikes with the force of a monk's unarmed blows. You can use the unarmed strike damage of a monk 4 levels lower than your character level (minimum 1st level) instead of the weapon's base damage when attacking with the chosen weapon.",
    shortDescription:
      'Deal monk unarmed strike damage (character level −4) with the chosen weapon.',
    source: "Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'ascetic_form_wmh' },
      { type: 'feat', featId: 'ascetic_style_wmh' },
      { type: 'feat', featId: 'weapon_focus', matchChoiceKey: 'weapon' },
      { type: 'special', description: 'base attack bonus +7 or monk level 7th' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['monk', 'unarmed', 'style', 'damage'],
  },
  {
    id: 'ace_disarm_wmh',
    name: 'Ace Disarm',
    description:
      "You catch objects with your ranged attacks. You do not take the standard –2 penalty on the attack roll to perform a ranged disarm. You can also perform a steal combat maneuver with a ranged weapon in place of a disarm. If you successfully disarm or steal an item, the item lands in the target's space. For every 5 by which your attack roll exceeds the target's CMD, the item lands an additional 5 feet away from the target in a direction of your choice.",
    shortDescription:
      'No penalty to ranged disarm; can use steal maneuver with ranged weapon; disarmed items scatter with high attack rolls.',
    source: "Weapon Master's Handbook",
    types: ['targeting'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'deadly_aim' },
      { type: 'feat', featId: 'ranged_disarm' },
      { type: 'bab', minimum: 6 },
      { type: 'class_feature', featureName: 'weapon training with a ranged weapon' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'disarm', 'steal', 'weapon mastery'],
  },
  {
    id: 'ace_trip_wmh',
    name: 'Ace Trip',
    description:
      'You can knock airborne foes from the sky with your ranged attacks. You do not take the standard –2 penalty on the attack roll to perform a ranged trip. You can attempt a ranged trip combat maneuver against a flying creature. A flying creature tripped by this feat falls at up to 100 feet per round and is entangled until it lands. The creature takes falling damage when it lands and lands prone.',
    shortDescription: 'No penalty to ranged trip; can trip flying creatures, causing them to fall.',
    source: "Weapon Master's Handbook",
    types: ['targeting'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'deadly_aim' },
      { type: 'feat', featId: 'ranged_trip' },
      { type: 'bab', minimum: 6 },
      { type: 'class_feature', featureName: 'weapon training with a ranged weapon' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'trip', 'weapon mastery', 'flying'],
  },
  {
    id: 'burrowing_shot',
    name: 'Burrowing Shot',
    description:
      "You lodge your ranged weapons within your target's body. When you hit a creature with a ranged attack, you can spend a swift action to lodge the weapon in the creature's body. A lodged weapon causes the target to take a –2 penalty on ability checks, attack rolls, saving throws, and skill checks from pain. Multiple lodged weapons don't stack.",
    shortDescription:
      'Lodge a ranged weapon in the target with a swift action, imposing a –2 penalty on rolls until removed.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'deadly_aim' },
      { type: 'bab', minimum: 9 },
      { type: 'class_feature', featureName: 'weapon training with a ranged weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'debuff', 'weapon mastery'],
  },
  {
    id: 'cut_from_the_air',
    name: 'Cut from the Air',
    description:
      "Your swift strikes can knock aside your enemy's ranged attacks. Whenever a ranged attack is made against you or an adjacent ally, you can make a melee attack using your highest base attack bonus. If the result of your attack roll is greater than the total of the ranged attack roll, the ranged attack is deflected and does not deal damage. You must be aware of the ranged attack and not flat-footed.",
    shortDescription:
      'Make a melee attack to deflect incoming ranged attacks against you or an adjacent ally.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 5 },
      { type: 'class_feature', featureName: 'weapon training with a melee weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['melee', 'defense', 'deflect', 'weapon mastery'],
  },
  {
    id: 'devastating_assault',
    name: 'Devastating Assault',
    description:
      "Your attacks overwhelm your foes' defenses. As a full-round action, you can make a single melee attack, but you roll as many attack rolls as you would have during a full attack with that weapon. The attack is considered a hit if any one of the rolls is a successful hit. If two or more attack rolls are successful, the target must succeed at a Fortitude save or suffer a condition for 1d4 rounds.",
    shortDescription:
      'Make a single melee attack using all full-attack rolls; on 2+ hits, target may suffer a condition.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 9 },
      { type: 'class_feature', featureName: 'weapon training with a melee weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['melee', 'condition', 'weapon mastery', 'full-round'],
  },
  {
    id: 'difficult_swings',
    name: 'Difficult Swings',
    description:
      'Your broad strokes make it difficult for enemies to approach you. When making a full attack with an appropriate melee weapon, you can force creatures to treat squares adjacent to you as difficult terrain until the beginning of your next turn. You can exempt any creatures you are aware of from this effect.',
    shortDescription:
      'During a full attack with an appropriate melee weapon, adjacent squares count as difficult terrain for enemies.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 5 },
      { type: 'class_feature', featureName: 'weapon training with a melee weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['melee', 'control', 'difficult terrain', 'weapon mastery'],
  },
  {
    id: 'finesse_shot',
    name: 'Finesse Shot',
    description:
      'Your skill with ranged weapons extends into fine manipulation. You gain additional utility shot options: Open/Close Object (shoot an unattended door, window, or container within your first range increment to open or close it), Triggering Shot (shoot a trap you are aware of to trigger it automatically), and Use Object (shoot an unattended object as a standard action to activate it).',
    shortDescription:
      'Gain three additional utility shot options: open/close objects, trigger traps, and activate objects.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'marksmans_utility' },
      { type: 'bab', minimum: 7 },
      { type: 'class_feature', featureName: 'weapon training with a ranged weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'utility', 'weapon mastery', 'gunslinger'],
  },
  {
    id: 'impressive_grit',
    name: 'Impressive Grit',
    description:
      'Your mastery of ranged weapons allows you to perform impressive deeds. Select one of the following gunslinger deeds: dead shot, startling shot, or targeting. You can use this deed a number of times per day equal to your highest mental ability modifier (minimum 1). You can take this feat up to three times, selecting a different deed each time.',
    shortDescription:
      'Gain limited daily uses of a gunslinger deed (dead shot, startling shot, or targeting).',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 11 },
      { type: 'class_feature', featureName: 'weapon training with a ranged weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'grit', 'deed', 'weapon mastery', 'gunslinger'],
  },
  {
    id: 'liberating_shot',
    name: 'Liberating Shot',
    description:
      'Your precise shots distract enemies who are grappling your allies. When you make an attack action and hit an opponent who is grappling an ally of yours, your ally can use your attack roll result in place of her combat maneuver check result, whichever is higher, to escape from the grapple during her next turn.',
    shortDescription:
      'When you hit a creature grappling an ally, that ally can use your attack roll to escape the grapple.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'deadly_aim' },
      { type: 'bab', minimum: 7 },
      { type: 'class_feature', featureName: 'weapon training with a ranged weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'grapple', 'ally', 'weapon mastery'],
  },
  {
    id: 'marksmans_utility',
    name: "Marksman's Utility",
    description:
      "Your skill with ranged weapons rivals a gunslinger's flashy tricks. You can perform the utility shot gunslinger deed with an appropriate ranged weapon with which you are proficient. If you already possess the utility shot deed as a class feature, you also gain a +4 bonus on attack rolls when using utility shot, and you can perform utility shots without spending grit points.",
    shortDescription:
      'Perform the utility shot deed with a ranged weapon; gunslingers gain +4 bonus and can do it for free.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 6 },
      { type: 'class_feature', featureName: 'weapon training with a ranged weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'utility', 'gunslinger', 'weapon mastery'],
  },
  {
    id: 'retributive_kick',
    name: 'Retributive Kick',
    description:
      'When your weapon is deflected, you lash out with your foot. When you make a full attack with an appropriate melee weapon and your first attack misses or is blocked, deflected, parried, or otherwise caused to not hit the target, you can immediately make an unarmed attack against the same target with the same attack bonus. If you use this feat, you cannot make any additional attacks during that turn.',
    shortDescription:
      'When your first full-attack swing misses or is deflected, immediately make an unarmed attack with the same bonus.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 5 },
      { type: 'class_feature', featureName: 'weapon training with a melee weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['melee', 'unarmed', 'reaction', 'weapon mastery'],
  },
  {
    id: 'ricochet_toss',
    name: 'Ricochet Toss',
    description:
      'Your thrown weapons bounce off your targets and return to your hands. When you make a ranged attack with an appropriate thrown weapon, the weapon returns to your hand immediately after the attack is resolved, whether or not the attack is successful. This feat does not function with bullets, thrown ammunition (such as darts or shuriken), splash weapons, or improvised weapons.',
    shortDescription: 'Thrown weapons return to your hand immediately after each attack.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'quick_draw' },
      { type: 'bab', minimum: 6 },
      { type: 'class_feature', featureName: 'weapon training with a ranged weapon' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['thrown', 'ranged', 'weapon mastery'],
  },
  {
    id: 'smash_from_the_air',
    name: 'Smash from the Air',
    description:
      'Your strikes can destroy even the mightiest ranged attacks and magical effects. You can use Cut from the Air against unusually massive ranged weapons (such as boulders or ballista bolts) and ranged attacks generated by spell effects. Spell effects that do not require attack rolls cannot be deflected.',
    shortDescription:
      'Extend Cut from the Air to massive projectiles and spell-generated ranged attacks.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'cut_from_the_air' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 9 },
      { type: 'class_feature', featureName: 'weapon training with a melee weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['melee', 'defense', 'deflect', 'weapon mastery'],
  },
  {
    id: 'spellcut',
    name: 'Spellcut',
    description:
      'You can weaken waves of harmful magic energy with weapon blows. Once per round, you can use your base attack bonus in place of your total saving throw bonus for a spell, spell-like ability, or supernatural ability that either allows a Reflex save or is not a melee attack and targets only you.',
    shortDescription:
      'Once per round, use your BAB instead of a saving throw bonus against a targeted Reflex-save or non-melee effect.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'cut_from_the_air' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 9 },
      { type: 'skill', skillId: 'spellcraft', ranks: 1 },
      { type: 'class_feature', featureName: 'weapon training with a melee weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['melee', 'defense', 'saving throw', 'weapon mastery'],
  },
  {
    id: 'targeted_blow',
    name: 'Targeted Blow',
    description:
      'You can inflict special injuries on your foes by attacking specific areas. As a standard action, you can make a single melee attack. If this attack hits, you can apply the effects of the targeting gunslinger deed to the attack. You can use this ability twice per day, plus one additional time per day when your base attack bonus reaches +10, +15, and +20.',
    shortDescription:
      'Make a targeted melee attack (as the targeting deed) twice per day plus additional times at higher BAB.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 9 },
      { type: 'class_feature', featureName: 'weapon training with a melee weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['melee', 'targeting', 'gunslinger', 'weapon mastery'],
  },
  {
    id: 'weapon_material_mastery',
    name: 'Weapon Material Mastery',
    description:
      'You can perform impressive deeds with weapons made from peculiar materials. While wielding an appropriate melee weapon, you gain special abilities based on which special material the weapon is primarily constructed of (such as adamantine, alchemical silver, cold iron, etc.).',
    shortDescription:
      'Gain special abilities based on the special material your weapon is made from.',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 7 },
      { type: 'class_feature', featureName: 'weapon training with a melee weapon' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['melee', 'special materials', 'weapon mastery'],
  },
  {
    id: 'weapon_style_mastery',
    name: 'Weapon Style Mastery',
    description:
      "You have mastered the combination of weapon training and fighting styles. Choose one weapon style (a style feat that lists Weapon Focus as a prerequisite) that you have. You can have the chosen style and a second style active at once. Starting a stance provided by a style feat is still a swift action, but you can assume both the chosen weapon style's stance and another style's stance simultaneously using this action.",
    shortDescription:
      'Maintain two fighting styles simultaneously (one of which must be a weapon style feat).',
    source: "Weapon Master's Handbook",
    types: ['style', 'combat'],
    prerequisites: [
      { type: 'special', description: 'Any two style feats from different styles' },
      { type: 'bab', minimum: 6 },
      { type: 'class_feature', featureName: 'weapon training with a melee weapon' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'dual style', 'weapon mastery', 'fighter'],
  },
];
