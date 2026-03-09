import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const MTT_FEATS: FeatDefinition[] = [
  // ==================== MELEE TACTICS TOOLBOX ====================
  // Already in database (skipped):
  //   Brute Style / Brute Stomp / Brute Assault (Horror Adventures version — different source)
  //   Swordplay Style / Swordplay Upset (Ultimate Combat — ucombat-extra.ts)
  //   Shatter Defenses (Core), Paired Opportunists (APG), Coordinated Charge (UC),
  //   Seize the Moment (UC), Tandem Trip (UC), Shielded Caster (teamworkFeats),
  //   Impact Critical Shot (UC), Bloody Assault (APG Extra), Dazing Assault (APG)

  // ── Drag Maneuver Chain ─────────────────────────────────────────────────────
  {
    id: 'improved_drag',
    name: 'Improved Drag',
    description:
      'You are skilled at dragging opponents. You do not provoke an attack of opportunity when performing a drag combat maneuver. In addition, you receive a +2 bonus on checks made to drag a foe. You also receive a +2 bonus to your Combat Maneuver Defense when an opponent tries to drag you.',
    shortDescription: '+2 on drag CMB/CMD, no AoO when dragging',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb.drag',
        value: 2,
        source: 'Improved Drag',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmd.drag',
        value: 2,
        source: 'Improved Drag',
      },
    ],
    activationMode: 'passive',
    tags: ['drag', 'maneuver', 'combat maneuver'],
  },

  {
    id: 'greater_drag',
    name: 'Greater Drag',
    description:
      'You are skilled at dragging opponents and can use it to set up deadlier attacks. Whenever you successfully drag an opponent, that opponent provokes attacks of opportunity from all of your allies who threaten it. If your allies do not take these attacks of opportunity, the drag effect is negated.',
    shortDescription: 'Successful drag provokes AoOs from all threatening allies',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_drag' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['drag', 'maneuver', 'combat maneuver', 'attack of opportunity'],
  },

  // ── Dragging Strike ─────────────────────────────────────────────────────────
  {
    id: 'dragging_strike',
    name: 'Dragging Strike',
    description:
      'You can drag your opponent while making a melee attack. When you hit a creature with a melee weapon attack, you can attempt a drag combat maneuver check against that creature as a free action. This drag attempt does not provoke attacks of opportunity.',
    shortDescription: 'Free-action drag attempt on a successful melee hit',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_drag' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['drag', 'maneuver', 'melee', 'free action'],
  },

  // ── Body Shield ─────────────────────────────────────────────────────────────
  {
    id: 'body_shield',
    name: 'Body Shield',
    description:
      'You can use a grappled opponent as a shield. As a swift action while you are grappling a creature, you can use the grappled creature as a shield. Until the start of your next turn, the grappled creature grants you a +4 shield bonus to your AC, and you must succeed at a grapple combat maneuver check against the creature (against its CMD) each time you want to maintain this benefit. If an attack misses you because of this shield bonus, roll a d6; on a result of 1–3, the attack hits the creature you are using as a shield.',
    shortDescription: 'Swift action: use grappled foe as +4 shield; missed attacks may hit it',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SHIELD,
        target: 'ac',
        value: 4,
        source: 'Body Shield',
        condition: {
          type: 'custom',
          description:
            'While using grappled opponent as a shield (swift action to activate, CMB check to maintain each turn)',
          params: {},
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['grapple', 'shield', 'defense', 'combat maneuver'],
  },

  // ── Disengaging Feint Chain ─────────────────────────────────────────────────
  {
    id: 'disengaging_flourish',
    name: 'Disengaging Flourish',
    description:
      'You can make a feint attempt as part of withdrawing from combat. When you use the withdraw action, you can attempt a Bluff check to feint against one opponent that you threaten at the start of your move. If the feint is successful, that opponent is denied its Dexterity bonus to AC against your attacks until the start of your next turn, and you do not provoke attacks of opportunity from that opponent when you move out of its threatened squares during the withdraw action.',
    shortDescription: 'Feint one opponent as part of Withdraw; no AoO from that foe',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_feint' },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['feint', 'withdraw', 'movement', 'bluff'],
  },

  {
    id: 'disengaging_step',
    name: 'Disengaging Step',
    description:
      'You can make a feint attempt as part of a 5-foot step. As part of taking a 5-foot step, you can attempt a Bluff check to feint against one adjacent opponent. If the feint is successful, that opponent is denied its Dexterity bonus to AC against your attacks until the start of your next turn, and you do not provoke attacks of opportunity from that opponent when you take the 5-foot step.',
    shortDescription: 'Feint one adjacent opponent as part of a 5-foot step',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'disengaging_flourish' },
      { type: 'feat', featId: 'improved_feint' },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['feint', '5-foot step', 'movement', 'bluff'],
  },

  {
    id: 'disengaging_feint',
    name: 'Disengaging Feint',
    description:
      "Your deceptive footwork makes it harder for foes to strike you as you disengage. Whenever you succeed at a feint attempt, you can move through that opponent's space until the end of your turn without provoking an attack of opportunity from that opponent. Additionally, the first attack from that opponent against you before your next turn takes a –2 penalty.",
    shortDescription:
      "Successful feint lets you move through foe's space; opponent's first attack takes –2 penalty",
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'disengaging_step' },
      { type: 'feat', featId: 'disengaging_flourish' },
      { type: 'feat', featId: 'improved_feint' },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['feint', 'movement', 'bluff', 'disengage'],
  },

  // ── Driving Attack ──────────────────────────────────────────────────────────
  {
    id: 'driving_attack',
    name: 'Driving Attack',
    description:
      "You can push opponents back with a powerful strike. When you use the charge action or make an attack as part of a standard action, you can attempt a free bull rush combat maneuver check against the target at a –2 penalty. This bull rush attempt does not provoke attacks of opportunity. If you succeed, you push the target back up to 5 feet (plus an additional 5 feet for every 5 by which your check exceeds the target's CMD).",
    shortDescription: 'Free bull rush (–2 CMB) on a charge or standard-action attack',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_bull_rush' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bull rush', 'maneuver', 'push', 'charge'],
  },

  // ── Inspiring Blow ──────────────────────────────────────────────────────────
  {
    id: 'inspiring_blow',
    name: 'Inspiring Blow',
    description:
      'Your devastating strikes inspire allies to fight on. Whenever you confirm a critical hit with a melee weapon, you can shout a battle cry as a free action. Each ally within 30 feet who can hear you gains temporary hit points equal to your Charisma modifier (minimum 1). These temporary hit points last for 1 minute.',
    shortDescription:
      'Confirming a melee crit grants nearby allies temporary HP equal to Cha modifier',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'dazzling_display' },
      { type: 'special', description: 'Bravery class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['critical hit', 'morale', 'allies', 'temporary hit points', 'fighter'],
  },

  // ── Swordplay Deflection ────────────────────────────────────────────────────
  {
    id: 'swordplay_deflection',
    name: 'Swordplay Deflection',
    description:
      'Your mastery of the blade allows you to deflect attacks with uncanny skill. While using Swordplay Style, once per round when an opponent misses you with a melee attack, you can spend an attack of opportunity to make the attacker reroll its attack roll (taking the lower result). You must be wielding a one-handed weapon from the light blades or heavy blades weapon group in one hand with your other hand free.',
    shortDescription:
      'AoO to force attacker to reroll a missed melee attack in Swordplay Style (take lower)',
    source: 'Melee Tactics Toolbox',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'swordplay_upset' },
      { type: 'feat', featId: 'swordplay_style' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'blade', 'defense', 'deflect', 'swashbuckler'],
  },

  // ── Brute Style Chain (MTT version) ────────────────────────────────────────
  // Note: A different "Brute Style" chain exists in Horror Adventures.
  // The MTT version has different mechanics (overrun-focused), so both are kept.
  {
    id: 'brute_style_mtt',
    name: 'Brute Style (MTT)',
    description:
      'While using this style, you can attempt overrun combat maneuvers as a free action when you hit an opponent with a melee attack. This free overrun does not provoke attacks of opportunity. You must have at least one hand free to use this style.',
    shortDescription: 'Free overrun attempt on a successful melee hit while in this style',
    source: 'Melee Tactics Toolbox',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'improved_overrun' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'overrun', 'maneuver', 'brute'],
  },

  {
    id: 'brute_stomp_mtt',
    name: 'Brute Stomp (MTT)',
    description:
      'While using Brute Style (MTT), when you successfully overrun an opponent and knock it prone, that opponent takes damage equal to your Strength modifier (minimum 1) and becomes shaken for 1 round. A successful Fortitude save (DC = 10 + 1/2 your character level + your Strength modifier) negates the shaken condition.',
    shortDescription:
      'In Brute Style (MTT), a successful overrun-prone deals Str mod damage and shakes (Fort negates)',
    source: 'Melee Tactics Toolbox',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'brute_style_mtt' },
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'improved_overrun' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'overrun', 'prone', 'shaken', 'brute'],
  },

  {
    id: 'brute_assault_mtt',
    name: 'Brute Assault (MTT)',
    description:
      'While using Brute Style (MTT), whenever you succeed at an overrun combat maneuver that causes your opponent to become prone, you may immediately make a single melee attack against that prone opponent as a free action at your highest base attack bonus.',
    shortDescription:
      'In Brute Style (MTT), successful overrun-to-prone triggers a free attack at highest BAB',
    source: 'Melee Tactics Toolbox',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'brute_stomp_mtt' },
      { type: 'feat', featId: 'brute_style_mtt' },
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'improved_overrun' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 10 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'overrun', 'prone', 'free attack', 'brute'],
  },

  // ── Assault Feats (APG reprints with MTT additions) ─────────────────────────
  {
    id: 'staggering_assault',
    name: 'Staggering Assault',
    description:
      'You can attempt to stagger foes with powerful strikes. You can choose to take a –5 penalty on all melee attack rolls and combat maneuver checks to stagger opponents you hit with your melee attacks for 1 round, in addition to the normal damage dealt by the attack. A successful Fortitude save negates the stagger effect. The DC of this save equals 10 + your base attack bonus.',
    shortDescription: 'Take –5 to attack to stagger opponents hit for 1 round (Fort negates)',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['stagger', 'melee', 'penalty', 'condition'],
  },

  {
    id: 'stunning_assault',
    name: 'Stunning Assault',
    description:
      'You can attempt to stun foes with the force of your blows. You can choose to take a –5 penalty on all melee attack rolls and combat maneuver checks to stun opponents you hit with your melee attacks for 1 round, in addition to the normal damage dealt by the attack. A successful Fortitude save negates the stun effect. The DC of this save equals 10 + your base attack bonus.',
    shortDescription: 'Take –5 to attack to stun opponents hit for 1 round (Fort negates)',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'staggering_assault' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 11 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['stun', 'melee', 'penalty', 'condition'],
  },

  // ── Focused Blow ─────────────────────────────────────────────────────────────
  {
    id: 'focused_blow',
    name: 'Focused Blow',
    description:
      'You can add your Strength modifier to stunning fist attempts. Whenever you attempt a Stunning Fist attack, you can apply your Strength modifier as a bonus to the Stunning Fist DC in addition to your Wisdom modifier.',
    shortDescription: 'Add Strength modifier to Stunning Fist DC (in addition to Wisdom)',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['stunning fist', 'monk', 'unarmed', 'strength', 'wisdom'],
  },

  // ── Covering Defense ─────────────────────────────────────────────────────────
  {
    id: 'covering_defense',
    name: 'Covering Defense',
    description:
      'You excel at protecting allies with your shield. When you take the total defense action, you can extend your protection to an adjacent ally. That ally gains half your shield bonus to AC (rounded down, minimum 1) until the start of your next turn. You lose this benefit if you move away from the ally or stop using total defense.',
    shortDescription: 'Total defense grants adjacent ally half your shield bonus to AC',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'shield_focus' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['shield', 'defense', 'ally', 'total defense'],
  },

  // ── Lunging Spell Touch ──────────────────────────────────────────────────────
  {
    id: 'lunging_spell_touch',
    name: 'Lunging Spell Touch',
    description:
      'You can deliver touch spells at a greater distance. You can deliver a touch spell or a spell using a melee touch attack as a standard action at a range of 10 feet (instead of your normal melee reach). If you do so, you take a –2 penalty to your AC until your next turn.',
    shortDescription: 'Deliver touch spells at 10-foot range; take –2 AC until next turn',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'reach_spell' },
      { type: 'special', description: 'Ability to cast touch spells' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'touch_spell_range',
        value: 10,
        source: 'Lunging Spell Touch',
        condition: {
          type: 'custom',
          description:
            'Extends melee touch range to 10 feet; incurs –2 AC penalty until next turn when used',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['touch spell', 'reach', 'spellcasting', 'melee touch'],
  },

  // ── Combat Stamina ───────────────────────────────────────────────────────────
  {
    id: 'combat_stamina',
    name: 'Combat Stamina',
    description:
      'You gain a stamina pool equal to your base attack bonus (maximum 5). You can spend points from this pool to use special stamina tricks tied to combat feats you possess, gaining additional tactical options in combat. You regain spent stamina points after 1 minute of rest outside of combat, or at the end of an encounter.',
    shortDescription: 'Gain a stamina pool (max 5) to power combat feat tricks',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 1 },
      { type: 'special', description: 'Fighter class or GM approval' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['stamina', 'fighter', 'resource pool'],
  },
];
