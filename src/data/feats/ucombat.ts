import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const UCOMBAT_FEATS: FeatDefinition[] = [
  // ==================== COMBAT FEATS ====================
  {
    id: 'snake_style',
    name: 'Snake Style',
    description:
      'You watch your opponent with the calm, calculating patience of a snake about to strike. While using the Snake Style feat, when an opponent targets you with a melee or ranged attack, you can spend an immediate action to make a Sense Motive check. You can use the result as your AC or touch AC against that attack. You must be aware of the attack and not flat-footed.',
    shortDescription: 'Use Sense Motive as AC against attacks as immediate action',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Acrobatics 1 rank, Sense Motive 3 ranks' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'defense', 'monk'],
  },
  // ==================== GENERAL COMBAT FEATS ====================
  {
    id: 'deadly_finish',
    name: 'Deadly Finish',
    description:
      "Your attacks don't just fell your opponents - they kill them outright. When you reduce a creature to 0 or fewer hit points, that creature cannot be healed or stabilized - it is irrevocably dead. Creatures with regeneration are still killed, but come back to life as normal.",
    shortDescription: 'Creatures you reduce to 0 HP cannot be healed or stabilized',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 11 }],
    effects: [],
    activationMode: 'passive',
    tags: ['melee', 'killing', 'death'],
  },
  {
    id: 'hammer_the_gap',
    name: 'Hammer the Gap',
    description:
      'You repeatedly strike the same location, causing increasing amounts of damage. When you take a full-attack action, each consecutive hit against the same opponent deals extra damage equal to the number of previous consecutive hits you have made against that opponent this turn. This damage is precision damage and is not multiplied on a critical hit.',
    shortDescription: 'Each consecutive hit in full attack deals +1/+2/+3/etc. precision damage',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 6 }],
    effects: [],
    activationMode: 'passive',
    tags: ['full attack', 'precision', 'damage'],
  },
  {
    id: 'improved_snap_shot',
    name: 'Improved Snap Shot',
    description:
      "You can take advantage of your opponent's mistakes from a greater range. Your threatened area increases by 10 feet with ranged weapons for which you have Snap Shot.",
    shortDescription: 'Threaten 10 additional ft. with ranged weapons',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'rapid_shot' },
      { type: 'feat', featId: 'snap_shot' },
      { type: 'bab', minimum: 9 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'threatened area', 'attacks of opportunity'],
  },
  {
    id: 'snap_shot',
    name: 'Snap Shot',
    description:
      "With a ranged weapon, you can take advantage of any opening in your opponent's defenses. While wielding a ranged weapon with which you have Weapon Focus, you threaten squares within 5 feet of you. You can make attacks of opportunity with that ranged weapon. You do not provoke attacks of opportunity when making a ranged attack as an attack of opportunity.",
    shortDescription: 'Threaten 5 ft. with ranged weapon, make ranged AoOs',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'rapid_shot' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'threatened area', 'attacks of opportunity'],
  },
  {
    id: 'greater_snap_shot',
    name: 'Greater Snap Shot',
    description:
      'You can make ranged attacks with incredible ease. Whenever you make a ranged attack of opportunity, you gain a +2 bonus on the attack roll and a +2 bonus on the damage roll. Your threatened area with Snap Shot increases to 15 feet.',
    shortDescription: '+2 attack/damage on ranged AoOs, threaten 15 ft.',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 17 },
      { type: 'feat', featId: 'improved_snap_shot' },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'rapid_shot' },
      { type: 'feat', featId: 'snap_shot' },
      { type: 'bab', minimum: 12 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'threatened area', 'attacks of opportunity', 'damage'],
  },
  {
    id: 'ray_shield',
    name: 'Ray Shield',
    description:
      'You can even deflect rays and other ranged magical effects. As an immediate action, you can deflect one ranged touch attack or ray targeting you. To deflect the attack, make an attack roll. If your attack roll is higher than the ranged touch attack roll, the ranged touch attack or ray misses.',
    shortDescription: 'Deflect rays and ranged touch attacks',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'cut_from_the_air' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'special', description: 'Spellcut' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['melee', 'defense', 'ray', 'deflect'],
  },
  {
    id: 'critical_versatility',
    name: 'Critical Versatility',
    description:
      'You can change the type of critical feat you apply to your attacks. At the start of each day, when you prepare your spells or regain your spell slots, you can change the critical feat that you have.',
    shortDescription: 'Change applied critical feat each day',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'level', minimum: 14, class: 'Fighter' },
      { type: 'feat', featId: 'critical_focus' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['critical', 'versatility', 'fighter'],
  },
  {
    id: 'disruptive_recall',
    name: 'Disruptive Recall',
    description:
      'Your knowledge of arcane workings helps you disrupt spellcasters. Whenever you use a readied action to attack a spellcaster, you gain a +4 bonus on your attack roll.',
    shortDescription: '+4 on readied attacks against spellcasters',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'disruptive' },
      { type: 'feat', featId: 'spellbreaker' },
      { type: 'level', minimum: 12, class: 'Fighter' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['anti-caster', 'ready action', 'fighter'],
  },
  // ==================== GENERAL FEATS ====================
  {
    id: 'impact_critical_shot',
    name: 'Impact Critical Shot',
    description:
      "Your critical hits with ranged attacks can knock your enemies off their feet. Whenever you score a critical hit with a ranged attack, in addition to the normal damage, you can push the target 5 feet directly away from you if your confirmation roll exceeds the target's CMD.",
    shortDescription: 'Push target 5 ft. on ranged critical if confirm exceeds CMD',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'bab', minimum: 9 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'critical', 'push'],
  },
  {
    id: 'opening_volley',
    name: 'Opening Volley',
    description:
      'Your ranged assault leaves your foe disoriented and vulnerable to your melee attack. Whenever you deal damage with a ranged attack, you gain a +4 circumstance bonus on the next melee attack roll you make against the opponent. This attack must occur before the end of your next turn.',
    shortDescription: '+4 on next melee attack after hitting with ranged',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'melee', 'attack', 'switch hitting'],
  },
  {
    id: 'second_chance',
    name: 'Second Chance',
    description:
      'Quick, desperate strokes give you a chance to hit when your first attack fails. When making a full-attack action, if you miss on your first attack, you can forgo making any other attacks for the rest of your turn to reroll that attack at the same bonus.',
    shortDescription: 'Reroll first miss on full attack by forgoing remaining attacks',
    source: 'Ultimate Combat',
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 6 }],
    effects: [],
    activationMode: 'passive',
    tags: ['attack', 'reroll', 'full attack'],
  },
];
