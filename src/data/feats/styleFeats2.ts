import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const STYLE_FEATS_2: FeatDefinition[] = [
  // ─── Boar Style Chain (Ultimate Combat) ───────────────────────────────────
  {
    id: 'boar_style',
    name: 'Boar Style',
    description:
      'You can deal bludgeoning damage or slashing damage with your unarmed strikes—changing damage type is a free action. While using this style, once per round when you hit a single foe with two or more unarmed strikes, you can tear flesh. When you do, you deal 2d6 extra points of damage with the attack.',
    shortDescription:
      'Unarmed strikes deal bludgeoning or slashing; tear flesh for 2d6 extra when hitting one foe twice in a round',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'intimidate', ranks: 3 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'damage'],
  },
  {
    id: 'boar_ferocity',
    name: 'Boar Ferocity',
    description:
      'You add piercing damage to the damage types you can deal with your unarmed strikes. While using Boar Style, you gain a +2 bonus on Intimidate checks to demoralize opponents. Further, when you use Boar Style and deal piercing damage to a foe, you can spend a free action to make an Intimidate check to demoralize that opponent.',
    shortDescription:
      'Add piercing damage to unarmed strikes; +2 Intimidate to demoralize; free Intimidate after piercing hit in Boar Style',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'boar_style' },
      { type: 'skill', skillId: 'intimidate', ranks: 6 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'intimidate_demoralize',
        value: 2,
        source: 'Boar Ferocity',
        condition: {
          type: 'custom',
          description: 'While using Boar Style',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'intimidate'],
  },
  {
    id: 'boar_shred',
    name: 'Boar Shred',
    description:
      "You can make an Intimidate check to demoralize an opponent as a move action. While using Boar Style, whenever you tear an opponent's flesh, once per round at the start of that opponent's turn he takes 1d6 bleed damage. The bleed damage dealt while using Boar Style persists even if you later switch to a different style.",
    shortDescription:
      'Demoralize as a move action; Boar Style flesh-tearing causes 1d6 bleed per round (persists after style switch)',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'boar_ferocity' },
      { type: 'feat', featId: 'boar_style' },
      { type: 'skill', skillId: 'intimidate', ranks: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'bleed', 'intimidate'],
  },

  // ─── Crane Style Chain (Ultimate Combat) ──────────────────────────────────
  {
    id: 'crane_style',
    name: 'Crane Style',
    description:
      'You take only a –2 penalty on attack rolls for fighting defensively. While using this style and fighting defensively or using the total defense action, you gain an additional +1 dodge bonus to your Armor Class.',
    shortDescription:
      'Fighting defensively gives only –2 attack penalty; +1 additional dodge bonus to AC while fighting defensively or using total defense',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +2 or monk level 1st' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 1,
        source: 'Crane Style',
        condition: {
          type: 'custom',
          description: 'While using Crane Style and fighting defensively or using total defense',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'defensive', 'unarmed'],
  },
  {
    id: 'crane_wing',
    name: 'Crane Wing',
    description:
      'When fighting defensively with at least one hand free, you gain a +4 dodge bonus to AC against melee attacks. If a melee attack misses you by 4 or less, you lose this dodge bonus until the beginning of your next turn. If you are using the total defense action instead, you can deflect one melee attack that would normally hit you. An attack so deflected deals no damage and has no other effect (instead treat it as a miss). You do not expend an action when using this feat, but you must be aware of the attack and not flat-footed.',
    shortDescription:
      '+4 dodge bonus vs melee when fighting defensively with a hand free; deflect one melee attack while using total defense',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'crane_style' },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +5 or monk level 5th' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac_vs_melee',
        value: 4,
        source: 'Crane Wing',
        condition: {
          type: 'custom',
          description: 'While fighting defensively with at least one hand free',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'defensive', 'unarmed'],
  },
  {
    id: 'crane_riposte',
    name: 'Crane Riposte',
    description:
      "You take only a –1 penalty on attack rolls for fighting defensively. Whenever you use Crane Wing to deflect an opponent's attack or that opponent misses you by 4 or less, you can make an attack of opportunity against that opponent after the attack is resolved. When you deflect an attack using Crane Wing while taking the total defense action, you may make an attack of opportunity against that opponent (even though you could not normally do so while taking the total defense action).",
    shortDescription:
      'Fighting defensively only –1 attack penalty; counterattack with AoO when Crane Wing deflects or opponent misses by 4 or less',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'crane_style' },
      { type: 'feat', featId: 'crane_wing' },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +8 or monk level 7th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'defensive', 'counterattack', 'unarmed'],
  },

  // ─── Dragon Style Chain (Ultimate Combat) ─────────────────────────────────
  {
    id: 'dragon_style',
    name: 'Dragon Style',
    description:
      'While using this style, you gain a +2 bonus on saving throws against sleep effects, paralysis effects, and stunning effects. You ignore difficult terrain when you charge, run, or withdraw. You can also charge through squares that contain allies. Further, you can add 1-1/2 times your Strength bonus on the damage roll for your first unarmed strike on a given round.',
    shortDescription:
      '+2 save vs sleep/paralysis/stun; ignore difficult terrain when charging; charge through allies; 1.5× Str on first unarmed strike each round',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'acrobatics', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'saves_vs_sleep_paralysis_stun',
        value: 2,
        source: 'Dragon Style',
        condition: {
          type: 'custom',
          description: 'While using Dragon Style',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'mobility', 'charge'],
  },
  {
    id: 'dragon_ferocity',
    name: 'Dragon Ferocity',
    description:
      'While using Dragon Style, you increase your Strength bonus on unarmed strike damage rolls by an additional one-half your Strength bonus, to a total of double your Strength bonus on the first attack and 1-1/2 times your Strength bonus on the other attacks. When you score a critical hit or a successful Stunning Fist attempt against an opponent while using this style, that opponent is also shaken for a number of rounds equal to 1d4 + your Strength bonus.',
    shortDescription:
      'Dragon Style unarmed damage becomes 2× Str on first attack, 1.5× on others; crits or Stunning Fist also shake the target',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'dragon_style' },
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'skill', skillId: 'acrobatics', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'damage', 'fear'],
  },
  {
    id: 'dragon_roar',
    name: 'Dragon Roar',
    description:
      'You gain one additional Stunning Fist attempt per day. While using Dragon Style, as a standard action you can expend two Stunning Fist attempts to unleash a concussive roar in a 15-foot cone. Creatures in the cone take your unarmed strike damage and are shaken for 1d4 rounds. A successful Will save (DC 10 + 1/2 your character level + your Wis modifier) halves the damage and negates the shaken condition. If you possess the Elemental Fist feat, you can expend one use of that feat to add the Elemental Fist damage to the damage dealt by the cone.',
    shortDescription:
      '+1 Stunning Fist/day; expend 2 Stunning Fist uses for a 15-ft cone dealing unarmed damage and shaking targets (Will half)',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'dragon_style' },
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'skill', skillId: 'acrobatics', ranks: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'cone', 'fear'],
  },

  // ─── Efreeti Style Chain (Ultimate Combat) ────────────────────────────────
  {
    id: 'efreeti_style',
    name: 'Efreeti Style',
    description:
      'You gain one additional Elemental Fist attempt per day. While using the Efreeti Style and Elemental Fist feats to deal fire damage, you gain a bonus on fire damage rolls equal to your Wisdom bonus. Further, if your Elemental Fist melee attack misses while you are using it to deal fire damage, you still deal 1d6 points of fire damage to your target.',
    shortDescription:
      '+1 Elemental Fist/day; Wis bonus to fire damage rolls; deal 1d6 fire on a miss while using Elemental Fist',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'elemental_fist' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +9 or monk level 5th' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'elemental', 'fire', 'unarmed'],
  },
  {
    id: 'efreeti_stance',
    name: 'Efreeti Stance',
    description:
      'You gain one additional Elemental Fist attempt per day. While using Efreeti Style, you gain fire resistance equal to your base attack bonus or your monk level, whichever is higher. Creatures that take fire damage from your Elemental Fist attacks must succeed at a Reflex save (DC 10 + 1/2 your character level + your Wis modifier) or catch on fire.',
    shortDescription:
      '+1 Elemental Fist/day; fire resistance = BAB or monk level; Elemental Fist fire targets must save or catch on fire',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 15 },
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'efreeti_style' },
      { type: 'feat', featId: 'elemental_fist' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +11 or monk level 9th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'elemental', 'fire', 'resistance'],
  },
  {
    id: 'efreeti_touch',
    name: 'Efreeti Touch',
    description:
      'While using Efreeti Style, as a standard action, you can spend two Elemental Fist attempts to unleash a 15-foot cone-shaped burst of flame. Creatures caught in the cone take your unarmed strike damage plus the fire damage from your Elemental Fist and catch on fire. A successful Reflex save (DC 10 + 1/2 your character level + your Wis modifier) reduces the damage by half and prevents a target from catching on fire.',
    shortDescription:
      'Expend 2 Elemental Fist uses for a 15-ft fire cone; targets take unarmed + Elemental Fist fire damage and catch on fire (Reflex half)',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 15 },
      { type: 'ability_score', ability: 'WIS', minimum: 17 },
      { type: 'feat', featId: 'efreeti_style' },
      { type: 'feat', featId: 'efreeti_stance' },
      { type: 'feat', featId: 'elemental_fist' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +13 or monk level 11th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'elemental', 'fire', 'cone'],
  },

  // ─── Janni Style Chain (Ultimate Combat) ──────────────────────────────────
  {
    id: 'janni_style',
    name: 'Janni Style',
    description:
      'While using this style, you take only a –1 penalty to AC for charging. Further, opponents that flank you gain only a +1 bonus on attack rolls against you.',
    shortDescription:
      'Charging gives only –1 AC penalty; flanking opponents gain only +1 attack bonus vs you',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'acrobatics', ranks: 3 },
      { type: 'skill', skillId: 'perform', ranks: 3 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'mobility', 'defensive'],
  },
  {
    id: 'janni_tempest',
    name: 'Janni Tempest',
    description:
      'While you are using the Janni Style feat, whenever you make an unarmed attack and hit an opponent, you gain a +4 bonus on checks made to bull rush or trip that opponent, as long as the combat maneuver is your next attack by the end of your turn. You do not provoke an attack of opportunity from the target of the maneuver.',
    shortDescription:
      'After hitting with an unarmed strike in Janni Style, +4 to bull rush or trip that opponent as your next attack; no AoO provoked',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'janni_style' },
      { type: 'skill', skillId: 'acrobatics', ranks: 5 },
      { type: 'skill', skillId: 'perform', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb_bull_rush_or_trip',
        value: 4,
        source: 'Janni Tempest',
        condition: {
          type: 'custom',
          description:
            'While using Janni Style, after hitting with an unarmed strike; applies to the immediately following bull rush or trip vs same target',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'combat maneuver'],
  },
  {
    id: 'janni_rush',
    name: 'Janni Rush',
    description:
      "While using Janni Style, you are always considered to have a running start when jumping. Further, if you jump as part of a charge and make an unarmed strike against the designated opponent, a hit allows you to roll the unarmed strike's damage dice twice and add the results together before adding modifiers (such as from Strength) or extra dice (such as precision-based damage or dice from weapon abilities). The extra damage dice are not multiplied on a successful critical hit.",
    shortDescription:
      'Always have running start for jumps in Janni Style; jumping charge unarmed strikes roll damage dice twice',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'janni_style' },
      { type: 'feat', featId: 'janni_tempest' },
      { type: 'skill', skillId: 'acrobatics', ranks: 8 },
      { type: 'skill', skillId: 'perform', ranks: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'charge', 'mobility'],
  },

  // ─── Panther Style Chain (Ultimate Combat) ────────────────────────────────
  {
    id: 'panther_style',
    name: 'Panther Style',
    description:
      'While using this style, when an opponent makes an attack of opportunity against you for moving through a threatened square, you can spend a swift action to make a retaliatory unarmed strike attack against that opponent.',
    shortDescription:
      'When an opponent makes an AoO against you for movement, spend a swift action to retaliate with an unarmed strike',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'counterattack'],
  },
  {
    id: 'panther_claw',
    name: 'Panther Claw',
    description:
      'While using Panther Style, you can spend a free action, instead of spending a swift action, to make a retaliatory unarmed strike. You can make a number of retaliatory unarmed strikes on your turn equal to your Wisdom modifier.',
    shortDescription:
      'Retaliatory unarmed strikes cost a free action instead of swift; may make up to Wis modifier retaliatory strikes per turn',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'panther_style' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'counterattack'],
  },
  {
    id: 'panther_parry',
    name: 'Panther Parry',
    description:
      'While using Panther Style, your retaliatory unarmed strikes are resolved before the triggering attacks. If your retaliatory unarmed strike deals damage to an opponent, that opponent takes a –2 penalty on attack and damage rolls with the triggering attack of opportunity.',
    shortDescription:
      'Retaliatory unarmed strikes resolve before triggering AoOs; a successful hit imposes –2 attack and damage on the triggering attack',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'panther_claw' },
      { type: 'feat', featId: 'panther_style' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'counterattack'],
  },

  // ─── Shaitan Style Chain (Ultimate Combat) ────────────────────────────────
  {
    id: 'shaitan_style',
    name: 'Shaitan Style',
    description:
      'You gain one additional Elemental Fist attempt per day. While using the Shaitan Style and Elemental Fist feats to deal acid damage, you gain a bonus on acid damage rolls equal to your Wisdom bonus. Further, if your Elemental Fist melee attack misses while you are using it to deal acid damage, you still deal 1d6 points of acid damage to your target.',
    shortDescription:
      '+1 Elemental Fist/day; Wis bonus to acid damage rolls; deal 1d6 acid on a miss while using Elemental Fist',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'elemental_fist' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +9 or monk level 5th' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'elemental', 'acid', 'unarmed'],
  },
  {
    id: 'shaitan_skin',
    name: 'Shaitan Skin',
    description:
      'You gain one additional Elemental Fist attempt per day. While using Shaitan Style, you gain acid resistance equal to your base attack bonus or your monk level, whichever is higher. Creatures that take acid damage from your Elemental Fist attacks must succeed at a Reflex save (DC 10 + 1/2 your character level + your Wis modifier) or be staggered for 1 round.',
    shortDescription:
      '+1 Elemental Fist/day; acid resistance = BAB or monk level; Elemental Fist acid targets must save or be staggered 1 round',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 15 },
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'elemental_fist' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'shaitan_style' },
      { type: 'special', description: 'Base attack bonus +11 or monk level 9th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'elemental', 'acid', 'resistance'],
  },
  {
    id: 'shaitan_earthblast',
    name: 'Shaitan Earthblast',
    description:
      'While using Shaitan Style, as a standard action, you can spend two Elemental Fist attempts to create a 20-foot column of acid that has a 5-foot radius and erupts from a point within 30 feet of you. Creatures caught in the column take your unarmed strike damage plus the acid damage from your Elemental Fist and are staggered for 1 round. A successful Reflex save (DC 10 + 1/2 your character level + your Wis modifier) halves the damage and negates the staggered condition.',
    shortDescription:
      'Expend 2 Elemental Fist uses for a 20-ft acid column within 30 ft; failed Reflex staggers 1 round',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 15 },
      { type: 'ability_score', ability: 'WIS', minimum: 17 },
      { type: 'feat', featId: 'elemental_fist' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'shaitan_skin' },
      { type: 'feat', featId: 'shaitan_style' },
      { type: 'special', description: 'Base attack bonus +13 or monk level 11th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'elemental', 'acid', 'area'],
  },

  // ─── Tiger Style Chain (Ultimate Combat) ──────────────────────────────────
  {
    id: 'tiger_style',
    name: 'Tiger Style',
    description:
      'While using this style, you can deal slashing damage with your unarmed strikes. Whenever you deal slashing damage with an unarmed strike, you gain a +2 bonus to your CMD against bull rush, overrun, and trip maneuvers until the start of your next turn. If you score a critical hit with a slashing unarmed strike, the target takes 1d4 points of bleed damage at the start of its next two turns.',
    shortDescription:
      'Unarmed strikes deal slashing damage; +2 CMD vs bull rush/overrun/trip after slashing hit; critical hit causes 1d4 bleed for 2 rounds',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +3 or monk level 3rd' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'bleed', 'slashing'],
  },
  {
    id: 'tiger_claws',
    name: 'Tiger Claws',
    description:
      'While using Tiger Style with at least one hand free, you can spend a full-round action to make a single unarmed strike with both hands using your highest base attack bonus. Roll the damage for each hand separately. If you also use the Power Attack feat, you add an additional 1/2 times your Strength bonus to the damage roll from the second hand. If you hit, you can attempt a bull rush as a free action against that target; this bull rush attempt does not provoke attacks of opportunity and you gain a +2 bonus on the combat maneuver check. You cannot move with the target if the bull rush succeeds.',
    shortDescription:
      'Full-round action in Tiger Style with a free hand: double-handed unarmed strike; on hit, free bull rush with +2 CMB',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'tiger_style' },
      { type: 'special', description: 'Base attack bonus +6 or monk level 5th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'bull rush'],
  },
  {
    id: 'tiger_pounce',
    name: 'Tiger Pounce',
    description:
      'While using the Tiger Style feat, you can apply the penalty from Power Attack to your AC instead of attack rolls. Additionally, once per round as a swift action, you can move up to half your speed closer to a target you hit with an unarmed strike or made a successful combat maneuver against on this turn or your last turn.',
    shortDescription:
      'Apply Power Attack penalty to AC instead of attack rolls; once per round swift action to move half speed toward a recently struck target',
    source: 'Ultimate Combat',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'feat', featId: 'tiger_claws' },
      { type: 'feat', featId: 'tiger_style' },
      { type: 'special', description: 'Base attack bonus +9 or monk level 8th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'mobility'],
  },

  // ─── Jabbing Style Chain (Advanced Class Guide) ───────────────────────────
  {
    id: 'jabbing_style',
    name: 'Jabbing Style',
    description:
      'When you hit a target with an unarmed strike and you have hit that target with an unarmed strike previously that round, you deal an extra 1d6 points of damage to that target.',
    shortDescription:
      'Second or subsequent unarmed strikes against the same target in a round deal +1d6 damage',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      {
        type: 'special',
        description:
          "Base attack bonus +6, brawler's flurry class feature, or flurry of blows class feature",
      },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'damage'],
  },
  {
    id: 'jabbing_dancer',
    name: 'Jabbing Dancer',
    description:
      'Each time you hit with an unarmed strike while using Jabbing Style, you can move 5 feet without provoking an attack of opportunity as long as you move to a space adjacent to the opponent you hit with the unarmed strike. If you use this feat, you cannot take a 5-foot step during your next turn.',
    shortDescription:
      'After each unarmed hit in Jabbing Style, move 5 ft adjacent to the struck opponent without provoking AoOs; no 5-ft step next turn',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'jabbing_style' },
      { type: 'feat', featId: 'mobility' },
      {
        type: 'special',
        description: 'Base attack bonus +9, brawler level 5th, or monk level 5th',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'mobility'],
  },
  {
    id: 'jabbing_master',
    name: 'Jabbing Master',
    description:
      'While using Jabbing Style, the extra damage you deal when you hit a single target with two unarmed strikes increases to 2d6, and the extra damage when you hit a single target with three or more unarmed strikes increases to 4d6.',
    shortDescription:
      'Jabbing Style bonus damage increases to 2d6 on second hit and 4d6 on third+ hit against the same target',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'jabbing_dancer' },
      { type: 'feat', featId: 'jabbing_style' },
      { type: 'feat', featId: 'mobility' },
      { type: 'feat', featId: 'power_attack' },
      {
        type: 'special',
        description: 'Base attack bonus +12, brawler level 8th, or monk level 8th',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'damage'],
  },

  // ─── Grabbing Style Chain (Advanced Class Guide) ──────────────────────────
  {
    id: 'grabbing_style',
    name: 'Grabbing Style',
    description:
      'You can grapple a foe with only one hand at no penalty. You do not lose your Dexterity bonus to AC while pinning an opponent.',
    shortDescription: 'Grapple with one hand at no penalty; retain Dex bonus to AC while pinning',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_grapple' },
      {
        type: 'special',
        description:
          "Base attack bonus +6, brawler's flurry class feature, or flurry of blows class feature",
      },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'grapple'],
  },
  {
    id: 'grabbing_drag',
    name: 'Grabbing Drag',
    description:
      "When you are using Grabbing Style, if you use the move grapple action, you can move both yourself and a single target that you're grappling your full speed instead of half your speed. After you have done so, you can use a move action to move yourself and the target of your grapple half your speed without needing to attempt an additional combat maneuver check. You cannot use this feat if you are grappling two targets.",
    shortDescription:
      'In Grabbing Style, move grapple action lets you drag at full speed; a subsequent move at half speed requires no additional CMB check',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'grabbing_style' },
      { type: 'feat', featId: 'improved_grapple' },
      {
        type: 'special',
        description: 'Base attack bonus +8, brawler level 4th, or monk level 4th',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'grapple', 'mobility'],
  },
  {
    id: 'grabbing_master',
    name: 'Grabbing Master',
    description:
      'When you are grabbing two opponents while using Grabbing Style, you can use your grapple to move or damage one or both opponents you are grappling, instead of just one.',
    shortDescription:
      'While grappling two opponents in Grabbing Style, use grapple to move or damage both simultaneously',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'grabbing_drag' },
      { type: 'feat', featId: 'grabbing_style' },
      { type: 'feat', featId: 'improved_grapple' },
      {
        type: 'special',
        description: 'Base attack bonus +12, brawler level 8th, or monk level 8th',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'grapple'],
  },

  // ─── Pummeling Style Chain (Advanced Class Guide) ─────────────────────────
  {
    id: 'pummeling_style',
    name: 'Pummeling Style',
    description:
      'Whenever you use a full-attack action or flurry of blows to make multiple attacks against a single opponent with unarmed strikes, total the damage from all hits before applying damage reduction.',
    shortDescription:
      'When full attacking one target with unarmed strikes, total all damage before applying damage reduction',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      {
        type: 'special',
        description:
          "Base attack bonus +6, brawler's flurry class feature, or flurry of blows class feature",
      },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'damage reduction'],
  },
  {
    id: 'pummeling_bully',
    name: 'Pummeling Bully',
    description:
      'When you use Pummeling Style to make an entire full attack or flurry of blows against a single target, if you hit with any of your attacks, you can attempt a reposition or trip combat maneuver check as a free action.',
    shortDescription:
      'After a Pummeling Style full attack that hits, attempt a free reposition or trip combat maneuver',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_reposition' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'pummeling_style' },
      {
        type: 'special',
        description: 'Base attack bonus +9, brawler level 5th, or monk level 5th',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'combat maneuver'],
  },
  {
    id: 'pummeling_charge',
    name: 'Pummeling Charge',
    description:
      'You can charge and make a full attack or flurry of blows at the end of your charge as part of the charge action. You can use Pummeling Charge in this way only if all of your attacks qualify for using Pummeling Style against a single target.',
    shortDescription:
      'Charge and make a full attack or flurry of blows at the end using Pummeling Style against a single target',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'pummeling_style' },
      {
        type: 'special',
        description: 'Base attack bonus +12, brawler level 8th, or monk level 8th',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'charge'],
  },

  // ─── Ascetic Style Chain (Weapon Master's Handbook) ───────────────────────
  {
    id: 'ascetic_style',
    name: 'Ascetic Style',
    description:
      'Choose one weapon from the monk fighter weapon group. While using this style, you can use that weapon and apply the effects of feats that have Improved Unarmed Strike as a prerequisite, as well as effects that augment unarmed strikes, as if attacks with the weapon were unarmed attacks.',
    shortDescription:
      'Apply Improved Unarmed Strike feat effects and unarmed augments to one chosen monk weapon',
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      {
        type: 'special',
        description:
          'Weapon Focus with the chosen melee weapon; base attack bonus +1 or monk level 1st',
      },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'weapon'],
  },
  {
    id: 'ascetic_form',
    name: 'Ascetic Form',
    description:
      "While using Ascetic Style, you can use the chosen melee weapon with any class ability that can be used with an unarmed strike, such as an unchained monk's style strike ability. You are treated as a monk of your character level for the purpose of determining the number of uses per day of feats with prerequisites that are based on monk level, such as Stunning Fist and Perfect Strike.",
    shortDescription:
      'Chosen weapon works with all unarmed class abilities; treated as full character level for monk-level-based feat uses per day',
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'ascetic_style' },
      { type: 'feat', featId: 'weapon_focus' },
      {
        type: 'special',
        description:
          'Weapon Focus with the chosen melee weapon; base attack bonus +5 or monk level 5th',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'weapon'],
  },
  {
    id: 'ascetic_strike',
    name: 'Ascetic Strike',
    description:
      "While using Ascetic Style, you can deal damage with the chosen melee weapon as if you were using the unarmed strike damage of a monk 4 levels lower than your character level (minimum 1st) instead of the base damage for the chosen weapon. This functions like the brawler's close weapon mastery class feature. Additionally, you count as having the still mind class feature for the purpose of meeting prerequisites.",
    shortDescription:
      'Deal damage as monk unarmed strike (character level –4) with chosen weapon; count as having still mind for prerequisites',
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'ascetic_form' },
      { type: 'feat', featId: 'ascetic_style' },
      { type: 'feat', featId: 'weapon_focus' },
      {
        type: 'special',
        description: 'Weapon Focus with the chosen weapon; base attack bonus +7 or monk level 7th',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'weapon', 'damage'],
  },

  // ─── Blinded Blade Style Chain (Blood of Shadows) ─────────────────────────
  {
    id: 'blinded_blade_style',
    name: 'Blinded Blade Style',
    description:
      'While using this style when blinded or otherwise unable to see, you gain the following benefits: you take no penalty on Strength- or Dexterity-based skill checks due to being blinded, you gain a +4 bonus on hearing- and smell-based Perception checks, you gain the scent ability with a range of 10 feet (or your existing scent range increases by 10 feet), and you count as having 10 ranks in Perception for the purposes of satisfying prerequisites for the Improved Blind-Fight feat and other feats with similar prerequisites.',
    shortDescription:
      'While blinded: no Str/Dex skill penalties, +4 hearing/smell Perception, gain scent 10 ft, count as 10 Perception ranks for Blind-Fight feat prerequisites',
    source: 'Pathfinder Player Companion: Blood of Shadows',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'blind_fight' },
      { type: 'skill', skillId: 'perception', ranks: 5 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'blind fight', 'perception'],
  },
  {
    id: 'blinded_competence',
    name: 'Blinded Competence',
    description:
      'While using Blinded Blade Style when blinded or otherwise unable to see, you do not need to succeed at Perception checks to pinpoint the location of creatures within reach of your melee weapon; this functions as the blindsense ability, except creatures you are unable to see still have total concealment against you. You count as having 15 ranks in Perception for the purposes of satisfying prerequisites for the Greater Blind-Fight feat and other feats with similar prerequisites.',
    shortDescription:
      'While blinded in Blinded Blade Style, automatically pinpoint creatures within melee reach (blindsense); count as 15 Perception ranks for Greater Blind-Fight prerequisites',
    source: 'Pathfinder Player Companion: Blood of Shadows',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'blinded_blade_style' },
      { type: 'feat', featId: 'blind_fight' },
      { type: 'feat', featId: 'improved_blind_fight' },
      { type: 'skill', skillId: 'perception', ranks: 10 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'blind fight', 'blindsense'],
  },

  // ─── Brute Style Chain (Horror Adventures) ────────────────────────────────
  {
    id: 'brute_style',
    name: 'Brute Style',
    description:
      'While using this style, you can use your Vicious Stomp feat against any opponent within 10 feet of you, as long as it is within your natural reach.',
    shortDescription: 'Use Vicious Stomp against any opponent within 10 feet and natural reach',
    source: 'Pathfinder Roleplaying Game: Horror Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'improved_overrun' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'vicious_stomp' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'stomp', 'trip'],
  },
  {
    id: 'brute_stomp',
    name: 'Brute Stomp',
    description:
      "While using Brute Style, when you make a full attack against a prone opponent adjacent to you that includes at least one unarmed strike, you can make an additional unarmed strike at your highest base attack bonus against that prone creature. Additional attacks from this feat don't stack with the Medusa's Wrath feat, and this feat doesn't allow you to make additional attacks against prone opponents you trip during your full attack.",
    shortDescription:
      'Full attacking a prone adjacent opponent in Brute Style grants an extra unarmed strike at highest BAB',
    source: 'Pathfinder Roleplaying Game: Horror Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 19 },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'brute_style' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'improved_overrun' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'vicious_stomp' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'stomp', 'prone'],
  },
  {
    id: 'brute_assault',
    name: 'Brute Assault',
    description:
      'While using Brute Style, when you successfully perform an overrun or trip combat maneuver against an opponent that causes that opponent to fall prone, your opponent takes 1d6 points of Strength damage, and its base speed is halved until the Strength damage is healed. A Fortitude save (DC = 10 + your base attack bonus) reduces the Strength damage to 1 point and negates the speed reduction.',
    shortDescription:
      'Successful overrun/trip in Brute Style that causes prone deals 1d6 Str damage and halves speed (Fort save reduces to 1 Str, negates speed)',
    source: 'Pathfinder Roleplaying Game: Horror Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 23 },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'brute_stomp' },
      { type: 'feat', featId: 'brute_style' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'improved_overrun' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'vicious_stomp' },
      { type: 'bab', minimum: 10 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'ability damage', 'trip'],
  },

  // ─── Demonic Style Chain (Planar Adventures) ──────────────────────────────
  {
    id: 'demonic_style',
    name: 'Demonic Style',
    description:
      'While using this style, when you use the charge action, the bonus on your attack roll increases by 1 and you deal 2 additional points of damage with melee attacks made as part of the charge.',
    shortDescription: '+1 attack roll on charges; +2 damage on charge melee attacks',
    source: 'Pathfinder Roleplaying Game: Planar Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack_on_charge',
        value: 1,
        source: 'Demonic Style',
        condition: {
          type: 'custom',
          description: 'While using Demonic Style and performing a charge',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'charge', 'damage'],
  },
  {
    id: 'demonic_momentum',
    name: 'Demonic Momentum',
    description:
      'While using Demonic Style, when you successfully bull rush an opponent as part of a charge, you gain a +2 bonus on melee weapon damage rolls against that opponent for every 5 feet it was moved by your bull rush. This bonus persists until the end of your next turn.',
    shortDescription:
      'Successful bull rush on a charge in Demonic Style grants +2 melee damage per 5 ft moved, lasting until end of next turn',
    source: 'Pathfinder Roleplaying Game: Planar Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'demonic_style' },
      { type: 'feat', featId: 'improved_bull_rush' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'charge', 'bull rush', 'damage'],
  },

  // ─── Diabolic Style Chain (Planar Adventures) ─────────────────────────────
  {
    id: 'diabolic_style',
    name: 'Diabolic Style',
    description:
      'While using this style, when you make an attack of opportunity with an unarmed strike to deliver a humiliating swat to the target. On a hit, you inflict 1 point of nonlethal damage and the target must succeed at a Will saving throw (DC = 10 + half your level + your Charisma modifier) or become staggered for 1 round.',
    shortDescription:
      'AoOs with unarmed strikes deal 1 nonlethal damage; failed Will DC (10 + 1/2 level + Cha) staggers the target 1 round',
    source: 'Pathfinder Roleplaying Game: Planar Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'combat_reflexes' },
      {
        type: 'special',
        description:
          'Improved Unarmed Strike or Weapon Focus (unarmed strike); base attack bonus +2 or monk level 1st',
      },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'stagger', 'nonlethal'],
  },
  {
    id: 'diabolic_humiliation',
    name: 'Diabolic Humiliation',
    description:
      'When you successfully stagger a foe with an unarmed strike using Diabolic Style, the target becomes further humiliated. The target cannot gain the benefit of any morale bonus for 1 minute after being staggered in this way, and for the duration of that minute, any additional staggered effects it suffers from your attacks of opportunity last for 2 rounds rather than 1.',
    shortDescription:
      'Targets staggered by Diabolic Style cannot benefit from morale bonuses for 1 minute; further staggered effects from your AoOs last 2 rounds',
    source: 'Pathfinder Roleplaying Game: Planar Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'diabolic_style' },
      { type: 'feat', featId: 'vital_strike' },
      {
        type: 'special',
        description:
          'Improved Unarmed Strike or Weapon Focus (unarmed strike); base attack bonus +8 or monk level 7th',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'stagger', 'morale suppression'],
  },
  {
    id: 'diabolic_judgment',
    name: 'Diabolic Judgment',
    description:
      'While using Diabolic Style, the first time each round that you successfully hit with an attack of opportunity, you can apply the effects of any Vital Strike feat you have to that attack.',
    shortDescription:
      'First successful AoO each round in Diabolic Style may apply Vital Strike effects',
    source: 'Pathfinder Roleplaying Game: Planar Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'diabolic_humiliation' },
      { type: 'feat', featId: 'diabolic_style' },
      { type: 'feat', featId: 'improved_vital_strike' },
      { type: 'feat', featId: 'vital_strike' },
      {
        type: 'special',
        description:
          'Improved Unarmed Strike or Weapon Focus (unarmed strike); base attack bonus +12 or monk level 11th',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'vital strike', 'AoO'],
  },

  // ─── Dolphin Style Chain (Aquatic Adventures) ─────────────────────────────
  {
    id: 'dolphin_style',
    name: 'Dolphin Style',
    description:
      "You gain a +1 bonus on melee attack rolls against any creature adjacent to at least two of its other allies as long as you aren't flanking that creature, and your melee attacks ignore any bonus to AC gained by use of the aid another action.",
    shortDescription:
      "+1 melee attack vs creatures flanked by 2+ allies (while you aren't flanking); ignore aid another AC bonuses",
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'swim', ranks: 3 },
      { type: 'special', description: 'Base attack bonus +3 or monk level 3rd' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'melee_attack',
        value: 1,
        source: 'Dolphin Style',
        condition: {
          type: 'custom',
          description:
            'Against a creature adjacent to at least two of its allies, while not flanking that creature',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'aquatic', 'flanking'],
  },
  {
    id: 'dolphin_dart',
    name: 'Dolphin Dart',
    description:
      "While using Dolphin Style, as a standard action underwater you can move up to half your swim speed, make a single melee attack against a creature within your reach, and then retreat back to your previous position. The movement and attack don't provoke attacks of opportunity, even if your foe has an ability that allows attacks of opportunity with triggers other than moving out of a threatened area.",
    shortDescription:
      'Standard action underwater: move half swim speed, melee attack, retreat to starting position — movement and attack provoke no AoOs',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'dolphin_style' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'swim', ranks: 6 },
      { type: 'special', description: 'Base attack bonus +6 or monk level 6th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'aquatic', 'mobility'],
  },
  {
    id: 'dolphin_circle',
    name: 'Dolphin Circle',
    description:
      'While using Dolphin Style underwater as a full-round action, you can choose a circular path starting and ending in your current space whose length is no longer than you could swim with a single move action. You circle this path without provoking attacks of opportunity. You threaten all spaces along the path and provide flanking for allies against creatures along the path. Creatures can attack you as if you occupied every space on the path. At the start of your next turn, select any space along the path to stop circling.',
    shortDescription:
      'Full-round action underwater: circle a path up to one swim-move in length, threatening all spaces and providing flanking; no AoOs',
    source: 'Pathfinder Campaign Setting: Aquatic Adventures',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'dolphin_dart' },
      { type: 'feat', featId: 'dolphin_style' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'swim', ranks: 10 },
      { type: 'special', description: 'Base attack bonus +10 or monk level 10th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'aquatic', 'flanking', 'mobility'],
  },

  // ─── Dragonfly Style Chain (Martial Arts Handbook) ────────────────────────
  {
    id: 'dragonfly_style',
    name: 'Dragonfly Style',
    description:
      'You add your Wisdom modifier to Acrobatics checks in addition to your Dexterity modifier. While using this style, when you are adjacent to a vertical surface or object capable of supporting your weight, such as a wall or a tree, you gain a +1 bonus on melee attack rolls against opponents your size or smaller, as if you were on higher ground.',
    shortDescription:
      'Add Wis to Acrobatics checks; +1 melee attack vs same-or-smaller opponents when adjacent to a vertical surface',
    source: 'Pathfinder Player Companion: Martial Arts Handbook',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'acrobatics', ranks: 2 },
      { type: 'skill', skillId: 'climb', ranks: 2 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'melee_attack',
        value: 1,
        source: 'Dragonfly Style',
        condition: {
          type: 'custom',
          description:
            'While using Dragonfly Style, adjacent to a vertical surface, against opponents of same size or smaller',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'terrain', 'acrobatics'],
  },
  {
    id: 'dragonfly_wings',
    name: 'Dragonfly Wings',
    description:
      "While using Dragonfly Style, the bonus on your melee attacks increases to +2 and applies to opponents up to two size categories larger than you. Additionally, you can substitute a creature your size or larger in place of a vertical surface. You can use a willing creature freely, but using a hostile creature requires a successful Acrobatics check (DC = that creature's CMD). Failing this check by 5 or more provokes an attack of opportunity from the creature.",
    shortDescription:
      'Dragonfly Style attack bonus increases to +2 vs opponents up to two sizes larger; use creatures as vertical surfaces (hostile: Acrobatics vs CMD)',
    source: 'Pathfinder Player Companion: Martial Arts Handbook',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'dragonfly_style' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'acrobatics', ranks: 5 },
      { type: 'skill', skillId: 'climb', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'melee_attack',
        value: 2,
        source: 'Dragonfly Wings',
        condition: {
          type: 'custom',
          description:
            'While using Dragonfly Style, adjacent to a vertical surface or qualifying creature, against opponents up to two size categories larger',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'terrain', 'acrobatics'],
  },

  // ─── Electric Eel Style (Blood of the Sea) ────────────────────────────────
  {
    id: 'electric_eel_style',
    name: 'Electric Eel Style',
    description:
      'You gain one additional Elemental Fist attempt per day. While using this style, your Elemental Fist attack deals electricity damage. When a creature takes electricity damage from your Elemental Fist attack, you gain a +4 bonus for 1 round on combat maneuver checks to grapple that creature.',
    shortDescription:
      '+1 Elemental Fist/day; Elemental Fist deals electricity damage; +4 CMB to grapple creatures hit with electric Elemental Fist for 1 round',
    source: 'Pathfinder Player Companion: Blood of the Sea',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'elemental_fist' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +9 or monk level 5th' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'elemental', 'electricity', 'grapple'],
  },

  // ─── Elven Battle Style Chain (Weapon Master's Handbook) ──────────────────
  {
    id: 'elven_battle_style',
    name: 'Elven Battle Style',
    description:
      'While wielding a longsword, a rapier, or any melee weapon that has "elven" in its name, combat maneuver checks attempted with that weapon as attacks of opportunity don\'t themselves provoke attacks of opportunity.',
    shortDescription:
      "Combat maneuver checks made as AoOs with longsword, rapier, or elven weapons don't provoke AoOs",
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'elven_battle_training' },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'bab', minimum: 1 },
      { type: 'special', description: 'Weapon familiarity racial trait' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'elven', 'combat maneuver', 'AoO'],
  },
  {
    id: 'elven_battle_focus',
    name: 'Elven Battle Focus',
    description:
      "While using Elven Battle Style, you can add your Intelligence modifier to that weapon's damage (instead of any other ability bonus or modifier you can add to your weapon damage). The weapon must be one appropriate for your size.",
    shortDescription:
      'While in Elven Battle Style, add Int modifier to weapon damage instead of other ability modifiers',
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'elven_battle_style' },
      { type: 'feat', featId: 'elven_battle_training' },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'bab', minimum: 4 },
      { type: 'special', description: 'Weapon familiarity racial trait' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'elven', 'intelligence', 'damage'],
  },
  {
    id: 'elven_battle_torrent',
    name: 'Elven Battle Torrent',
    description:
      'While using Elven Battle Style, any opponent that makes an attack against you and misses while you are fighting defensively or using total defense or the Combat Expertise feat provokes an attack of opportunity from you. Even if you have the Combat Reflexes feat, you can only use this ability once per round.',
    shortDescription:
      'While in Elven Battle Style and fighting defensively/total defense/Combat Expertise, opponents that miss you provoke an AoO (once per round)',
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'elven_battle_focus' },
      { type: 'feat', featId: 'elven_battle_style' },
      { type: 'feat', featId: 'elven_battle_training' },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'bab', minimum: 10 },
      { type: 'special', description: 'Weapon familiarity racial trait' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'elven', 'AoO', 'defensive'],
  },
];
