import type { ItemSpecialAbility } from '@/types/magicItems';

// Armor special abilities — batch 4 (items 76–100).
// Sources: Core Rulebook, Ultimate Equipment, Armor Master's Handbook,
// Aquatic Adventures, Agents of Evil, and other Pathfinder 1e supplements.
export const armorAbilitiesBatch4: ItemSpecialAbility[] = [
  // +3 bonus equivalent
  {
    id: 'armor_invulnerability',
    name: 'Invulnerability',
    description: 'Grants the wearer DR 5/magic.',
    bonusEquivalent: 3, casterLevel: 18,
    effects: [
      { type: 'bonus', bonusType: 'untyped', target: 'dr', value: 5, source: 'Invulnerability Armor', condition: { type: 'custom', params: {}, description: 'DR 5/magic' } },
    ],
  },
  {
    id: 'armor_sensing',
    name: 'Sensing',
    description: 'When the wearer is blinded, in total darkness (without darkvision or see in darkness), or in magical darkness (without see in darkness), the armor activates to grant blindsight with a 5-foot range and blindsense with a 60-foot range. These abilities end immediately when the wearer regains sight. Deliberately closing one\'s eyes does not trigger the armor\'s abilities.',
    bonusEquivalent: 3, casterLevel: 14,
    effects: [],
  },
  {
    id: 'armor_spell_resistance_15',
    name: 'Spell Resistance (15)',
    description: 'Grants the wearer spell resistance 15.',
    bonusEquivalent: 3, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'enhancement', target: 'sr', value: 15, source: 'Armor Spell Resistance 15' },
    ],
  },
  {
    id: 'armor_titanic',
    name: 'Titanic',
    description: 'The wearer is considered one size category larger for effects dependent on size, such as swallow whole and trample. Once per day as a command action, the wearer can enlarge themselves as per the enlarge person spell for 1 minute, even if the wearer is not humanoid. Once per minute as a free action, the wearer may apply the armor\'s enhancement bonus to a single Strength check, combat maneuver check, or to CMD against a combat maneuver. The armor check penalty increases by an amount equal to the enhancement bonus due to the armor\'s substantial bulk.',
    bonusEquivalent: 3, casterLevel: 7,
    effects: [],
  },
  {
    id: 'armor_wild',
    name: 'Wild',
    description: 'The armor melds into the wearer\'s body when they use wild shape (or a similar ability). The enhancement bonus is preserved but no armor check penalty, arcane spell failure, or maximum Dex bonus applies while in wild shape.',
    bonusEquivalent: 3, casterLevel: 9,
    effects: [],
  },
  {
    id: 'armor_phase_lurching',
    name: 'Phase Lurching',
    description: 'Once per day as a move action, the wearer can pass through walls or material obstacles. This allows traversal through obstacles up to 5 feet thick, functioning as though the wearer were ethereal during passage. The wearer cannot move through living creatures or force effects such as wall of force. After passing through a surface the wearer leaves behind a thin, silvery mucus that lingers for 1 minute. This ability applies only to light armor.',
    bonusEquivalent: 3, casterLevel: 13,
    effects: [],
  },
  {
    id: 'armor_delving',
    name: 'Delving',
    description: 'Grants the wearer a burrow speed of 10 feet through any type of soil, including rocky soil, but not actual solid stone. The wearer also gains a +4 bonus on all saving throws against landslides, avalanches, tunnel collapses, and similar effects. This ability does not grant the ability to breathe underground.',
    bonusEquivalent: 3, casterLevel: 5,
    effects: [],
  },
  {
    id: 'armor_putrid',
    name: 'Putrid',
    description: 'The armor emanates a nauseating stench. Each living creature within 10 feet of the wearer must succeed at a DC 14 Fortitude save or be sickened for 5 rounds. Creatures that succeed at this save are immune to that specific armor\'s stench for 24 hours. Creatures with the stench ability or immunity to poison are unaffected. The wearer is immune to their own armor\'s stench. The stench can be toggled on or off by command; it dissipates in 1 minute normally, 10 minutes in enclosed spaces, 3 rounds in a moderate wind, or 1 round in strong wind.',
    bonusEquivalent: 3, casterLevel: 5,
    effects: [],
  },
  {
    id: 'armor_harmonizing',
    name: 'Harmonizing',
    description: 'The armor grants the wearer a +5 competence bonus on Perform checks. However, the wearer takes a –5 penalty on Stealth checks, cannot be silent while taking physical actions, and sonic energy attacks deal an additional 50% damage to the wearer. For wearers with the bardic performance class feature, audible-component performances continue for 1 additional round after the wearer ceases performing (this does not stack with the Lingering Performance feat).',
    bonusEquivalent: 3, casterLevel: 7,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.perform', value: 5, source: 'Harmonizing Armor' },
    ],
  },
  {
    id: 'armor_aquadynamic_improved',
    name: 'Improved Aquadynamic',
    description: 'This sleek and mobile armor is magically streamlined to assist in swimming. Grants the wearer a +10 competence bonus on Swim checks.',
    bonusEquivalent: 3, casterLevel: 5,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.swim', value: 10, source: 'Improved Aquadynamic Armor' },
    ],
  },
  {
    id: 'armor_radiant_flight',
    name: 'Radiant Flight',
    description: 'On command, the wearer manifests luminous batlike wings from their back that emit light equivalent to a torch. This provides a fly speed of 30 feet with poor maneuverability for up to 10 minutes per day, usable in 1-minute increments that need not be consecutive. This special ability can only be applied to heavy armor.',
    bonusEquivalent: 3, casterLevel: 10,
    effects: [],
  },
  {
    id: 'armor_shadow_improved',
    name: 'Shadow (Improved)',
    description: 'As shadow, but grants a +10 competence bonus on Stealth checks.',
    bonusEquivalent: 2, casterLevel: 10,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 10, source: 'Improved Shadow Armor' },
    ],
  },
  {
    id: 'armor_slick_improved',
    name: 'Slick (Improved)',
    description: 'As slick, but grants a +10 competence bonus on Escape Artist checks.',
    bonusEquivalent: 2, casterLevel: 10,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.escape_artist', value: 10, source: 'Improved Slick Armor' },
    ],
  },
  {
    id: 'armor_venom_eating',
    name: 'Venom-eating',
    description: 'When the wearer successfully saves against a poison attack, the armor absorbs the poison dose and stores it for later use. Stored doses can be applied to weapons as a standard action without risk of self-poisoning. The armor can store a maximum number of doses equal to its enhancement bonus; all stored doses must be the same poison type. Successfully saving against a different poison type replaces all stored doses with the new type. This ability applies only to leather-based armor (leather, studded leather, dragonhide).',
    bonusEquivalent: 3, casterLevel: 5,
    effects: [],
  },

  // +4 bonus equivalent
  {
    id: 'armor_denying',
    name: 'Denying',
    description: 'Once per day, when the wearer would suffer a critical hit or sneak attack, they can automatically negate the critical or sneak attack, treating it as a normal attack. If the attack would be both a critical hit and a sneak attack, the wearer chooses which effect to negate before damage is rolled. This ability applies only to heavy armor.',
    bonusEquivalent: 4, casterLevel: 13,
    effects: [],
  },
  {
    id: 'armor_spell_resistance_17',
    name: 'Spell Resistance (17)',
    description: 'Grants the wearer spell resistance 17.',
    bonusEquivalent: 4, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'enhancement', target: 'sr', value: 17, source: 'Armor Spell Resistance 17' },
    ],
  },
  {
    id: 'armor_energy_resistance',
    name: 'Energy Resistance',
    description: 'Grants resistance 10 to one energy type (acid, cold, electricity, fire, or sonic), chosen at creation.',
    bonusEquivalent: 2, casterLevel: 7,
    effects: [],
  },
  {
    id: 'armor_martyring',
    name: 'Martyring',
    description: 'Once per day as an immediate action, when an enemy confirms a critical hit against the wearer, the wearer can heal up to nine allies within 30 feet as if using mass cure light wounds (1d8+9 hit points each). This special ability cannot be applied to armor that already possesses the fortification ability.',
    bonusEquivalent: 4, casterLevel: 9,
    effects: [],
  },

  // +5 bonus equivalent
  {
    id: 'armor_dread_wing',
    name: 'Dread Wing',
    description: 'As an immediate action, the wearer can transform the armor into a pair of immense dragon\'s wings, granting a fly speed of 60 feet with average maneuverability. The wings function as secondary natural weapons dealing 1d6 damage (Medium wearer) or 1d4 damage (Small wearer), using the base armor\'s material for damage reduction penetration. While the wings are unfurled, the armor\'s total armor bonus decreases by half. This ability applies only to full-plate armor or Hellknight armor.',
    bonusEquivalent: 5, casterLevel: 15,
    effects: [],
  },
  {
    id: 'armor_fortification_heavy',
    name: 'Fortification (Heavy)',
    description: '75% chance to negate a critical hit or sneak attack, treating it as a normal hit.',
    bonusEquivalent: 5, casterLevel: 13,
    effects: [],
  },
  {
    id: 'armor_spell_resistance_19',
    name: 'Spell Resistance (19)',
    description: 'Grants the wearer spell resistance 19.',
    bonusEquivalent: 5, casterLevel: 15,
    effects: [
      { type: 'bonus', bonusType: 'enhancement', target: 'sr', value: 19, source: 'Armor Spell Resistance 19' },
    ],
  },
  {
    id: 'armor_unbowed',
    name: 'Unbowed',
    description: 'When the wearer would be reduced to 0 hit points or fewer by a damaging attack, they may use an immediate action to negate all of that attack\'s damage. This destroys the armor and creates an explosion dealing 1d6 points of piercing damage per point of the armor\'s AC bonus within 10 feet of the wearer (the wearer is excluded). A DC 20 Reflex save halves this damage. This ability applies only to heavy armor.',
    bonusEquivalent: 5, casterLevel: 9,
    effects: [],
  },
  {
    id: 'armor_righteous',
    name: 'Righteous',
    description: 'Grants the wearer a +2 sacred bonus on saving throws against evil spells and against spells and effects from evil outsiders. The wearer radiates a faint good aura as if they were a good outsider of equivalent HD. Evil characters who don this armor take 2 points of damage per round.',
    bonusEquivalent: 2, casterLevel: 9,
    effects: [
      { type: 'bonus', bonusType: 'sacred', target: 'save.all', value: 2, source: 'Righteous Armor', condition: { type: 'custom', params: {}, description: 'vs. evil spells and evil outsider effects' } },
    ],
  },
  {
    id: 'armor_unbound',
    name: 'Unbound',
    description: 'Once per day on command, the wearer can activate an effect functioning as the righteous might spell for 10 rounds, granting DR 5/lawful (instead of the standard DR/evil or DR/good). Any lawful creature that dons this armor gains one permanent negative level for as long as they wear it; this penalty cannot be removed by restoration spells and vanishes only upon removal. The armor typically displays chaotic religious iconography and requires a chaotic creator.',
    bonusEquivalent: 3, casterLevel: 10,
    effects: [],
  },
  {
    id: 'armor_unrighteous',
    name: 'Unrighteous',
    description: 'Grants the wearer a +2 profane bonus on saving throws against divine spells and against spells and effects from good outsiders. The wearer radiates a faint evil aura as if they were an evil outsider of equivalent HD.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [
      { type: 'bonus', bonusType: 'profane', target: 'save.all', value: 2, source: 'Unrighteous Armor', condition: { type: 'custom', params: {}, description: 'vs. divine spells and good outsider effects' } },
    ],
  },
];
