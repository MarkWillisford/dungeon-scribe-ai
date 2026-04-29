import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

/**
 * Path of War feats — Part 3 (feats 51–75 of ~90 regular feats)
 * Source: d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/feats/
 *
 * Covers Lightning Recovery through Scatter Power.
 * Overflow (remaining regular feats): Serene Stride, Seize the Opportunity,
 * Sin Eater, Silver Fang Initiate, Solar Flare, Syphon Vitality,
 * Tactical Rush, Take the Blow, Tap Animus, Unhindered Way,
 * Variable Wind, Victorious Recovery, Weaken the Prey,
 * Weapon Group Adaptation, Winds of War, Zealous Blade
 */
export const POW_FEATS_PART3: FeatDefinition[] = [
  {
    id: 'pow-lightning-swap',
    name: 'Lightning Swap',
    description:
      'Your quick hands allow you to swap weapons with blinding speed. You may draw or put away a weapon as a free action. You cannot make more weapon swaps per round than your Dexterity modifier. You also gain a +2 bonus to CMD to resist attempts to disarm you due to your fast hands and reflexes.',
    shortDescription: 'Draw or sheathe weapons as a free action; +2 CMD vs. disarm.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'quick_draw' },
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'bab', minimum: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmd',
        value: 2,
        source: 'Lightning Swap',
        condition: {
          type: 'custom',
          params: { maneuver: 'disarm' },
          description: 'against disarm attempts',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['path_of_war', 'weapon_swap', 'quick_draw'],
  },
  // 3
  {
    id: 'pow-lurker-in-darkness',
    name: 'Lurker in Darkness',
    description:
      'You have learned to conceal yourself from creatures that rely on unusual senses. You may use the Stealth skill to hide from creatures using blindsense, blindsight, tremorsense, or similar extraordinary or supernatural senses, though such creatures gain a +4 bonus on their Perception checks to detect you.',
    shortDescription: 'Use Stealth to hide from creatures with unusual senses.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'stealth', ranks: 6 }],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'stealth', 'senses'],
  },
  // 4
  {
    id: 'pow-malevolence',
    name: 'Malevolence',
    description:
      'Your dark influence curses those you have Claimed. Creatures Claimed by you become cursed and take a -2 penalty on combat maneuver checks and skill checks for as long as they are Claimed.',
    shortDescription: 'Claimed creatures take -2 on CMB and skill checks.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Ability to Claim creatures' }],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'claim', 'harbinger', 'curse'],
  },
  // 5
  {
    id: 'pow-martial-charge',
    name: 'Martial Charge',
    description:
      'You can combine a charge with a martial strike. As a full-round action, you may move up to twice your speed in a straight line toward a creature and then initiate a martial strike with a standard action initiation time. You gain a +2 bonus on attack rolls during the strike and take a -2 penalty to your AC until the start of your next turn. This does not grant benefits typically gained from charging, such as pounce.',
    shortDescription: 'Charge and initiate a strike as a full-round action.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 3 },
      { type: 'special', description: 'Ability to initiate a martial strike' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'charge', 'strike', 'maneuver'],
  },
  // 6
  {
    id: 'pow-martial-power',
    name: 'Martial Power',
    description:
      'You can accept a penalty on attack rolls in exchange for temporary hit points. You can choose to take a -1 penalty on melee attack rolls and combat maneuver checks to gain 2 temporary hit points. This bonus increases by 50% when using any shield. When your base attack bonus reaches +3, and every +2 thereafter, the penalty increases by -1 and the temporary hit points gained increase by 2. You must choose to use this feat when declaring melee attacks, full-attack actions, or initiating maneuvers. The effects last until the start of your next turn.',
    shortDescription: 'Trade attack penalty for temporary hit points.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'special', description: 'Knowledge of at least one maneuver or stance' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'temporary_hp', 'defense'],
  },
  // 7
  {
    id: 'pow-martial-training-i',
    name: 'Martial Training I',
    description:
      'You have trained in the basics of a martial discipline. Select a martial discipline. Its associated skill becomes a class skill for you. Your initiation modifier is Intelligence, Wisdom, or Charisma (chosen when you take this feat). Your martial initiator level is equal to half your character level plus your initiation modifier. You gain two 1st-level maneuvers from your chosen discipline, with one readied for use. You recover expended maneuvers by taking a full-round action to recover.',
    shortDescription: 'Gain access to 1st-level maneuvers from a martial discipline.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      {
        type: 'special',
        description: 'Base attack bonus +3 or Knowledge (martial) 3 ranks',
      },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Discipline',
        affectsEffects: true,
      },
    ],
    tags: ['path_of_war', 'martial_training', 'initiator', 'maneuver'],
  },
  // 8
  {
    id: 'pow-martial-training-ii',
    name: 'Martial Training II',
    description:
      'Your martial training continues to deepen. You may select two new maneuvers and one stance from your chosen discipline of up to 2nd level, and you may ready an additional maneuver. You must meet the minimum initiator level to select any maneuver.',
    shortDescription: 'Gain 2nd-level maneuvers and a stance from your discipline.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'pow-martial-training-i' },
      {
        type: 'special',
        description: 'Base attack bonus +5 or Knowledge (martial) 5 ranks',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'martial_training', 'initiator', 'maneuver'],
  },
  // 9
  {
    id: 'pow-martial-training-iii',
    name: 'Martial Training III',
    description:
      'Your expanding martial knowledge grants access to more powerful techniques. You gain one additional maneuver from your discipline of up to 3rd level plus a new stance, and you may ready an additional maneuver. Additionally, you may replace any known maneuver with a different one from your discipline of up to 2nd level, provided you meet the minimum initiator level requirements.',
    shortDescription: 'Gain 3rd-level maneuvers and swap older maneuvers.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'pow-martial-training-ii' },
      {
        type: 'special',
        description: 'Base attack bonus +7 or Knowledge (martial) 7 ranks',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'martial_training', 'initiator', 'maneuver'],
  },
  // 10
  {
    id: 'pow-martial-training-iv',
    name: 'Martial Training IV',
    description:
      'Your martial discipline training reaches an advanced level. You may select two new maneuvers from your chosen discipline of up to 4th level, and you may ready an additional maneuver. You must meet the minimum initiator level to select any maneuver.',
    shortDescription: 'Gain 4th-level maneuvers from your discipline.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'pow-martial-training-iii' },
      {
        type: 'special',
        description: 'Base attack bonus +9 or Knowledge (martial) 9 ranks',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'martial_training', 'initiator', 'maneuver'],
  },
  // 11
  {
    id: 'pow-martial-training-v',
    name: 'Martial Training V',
    description:
      'Your martial discipline mastery grows ever stronger. You may select two new maneuvers or one maneuver and one stance from your chosen discipline of up to 5th level, and you may ready an additional maneuver. You may also trade one known maneuver for a different one from your discipline of up to 4th level, provided you meet the minimum initiator level.',
    shortDescription: 'Gain 5th-level maneuvers and swap older maneuvers.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'pow-martial-training-iv' },
      {
        type: 'special',
        description: 'Base attack bonus +11 or Knowledge (martial) 11 ranks',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'martial_training', 'initiator', 'maneuver'],
  },
  // 12
  {
    id: 'pow-martial-training-vi',
    name: 'Martial Training VI',
    description:
      'You reach the pinnacle of martial discipline training through feats. You may select two new maneuvers or one new maneuver and one new stance from your chosen discipline of up to 6th level, and you may ready an additional maneuver. You may also exchange one known maneuver from your discipline for a different maneuver of up to 5th level. You must satisfy the minimum initiator level requirement for any selected maneuver.',
    shortDescription: 'Gain 6th-level maneuvers and swap older maneuvers.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'pow-martial-training-v' },
      {
        type: 'special',
        description: 'Base attack bonus +13 or Knowledge (martial) 13 ranks',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'martial_training', 'initiator', 'maneuver'],
  },
  // 13
  {
    id: 'pow-mass-murder',
    name: 'Mass Murder',
    description:
      'Your capacity for slaughter knows few bounds. You gain an additional use of your massacre class ability per encounter. You can take this feat up to two times. Its effects stack.',
    shortDescription: 'Gain an additional use of massacre per encounter.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: 'massacre' }],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'massacre', 'harbinger'],
  },
  // 14
  {
    id: 'pow-mind-afire',
    name: 'Mind Afire',
    description:
      'Your unusual physiology allows you to channel your mental fortitude into kineticist abilities. If you use an ability score other than Constitution to determine your hit points (such as through the Altered Life feat), you may use that same ability score in place of Constitution for determining all kineticist class features, including burn, kinetic blast damage, and other Constitution-dependent abilities.',
    shortDescription: 'Use your hit point ability score for kineticist class features.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 1, class: 'kineticist' },
      {
        type: 'special',
        description: 'Uses an ability score other than Constitution to determine hit points',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'kineticist'],
  },
  // 15
  {
    id: 'pow-mirror-of-the-moon',
    name: 'Mirror of the Moon',
    description:
      'Your mastery of Shattered Mirror and Veiled Moon allows you to leave illusory duplicates when teleporting. When you initiate a maneuver with the teleportation descriptor, you leave behind an illusory duplicate at your former location. This duplicate functions as a major image spell with a caster level equal to your initiator level, except that it only lasts for one round and does not require you to concentrate to maintain or direct it. Only one duplicate may exist at a time. This is a supernatural ability.',
    shortDescription: 'Leave an illusory duplicate behind when teleporting via maneuvers.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Two Shattered Mirror maneuvers known' },
      { type: 'special', description: 'Two Veiled Moon maneuvers known' },
      { type: 'initiator_level', minimum: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'shattered_mirror', 'veiled_moon', 'cross_discipline', 'illusion'],
  },
  // 16
  {
    id: 'pow-mixed-combat',
    name: 'Mixed Combat',
    description:
      'You seamlessly blend melee and ranged combat. You may sheathe weapons as a free action without provoking attacks of opportunity, even outside your turn. Additionally, after successfully hitting a creature with a melee attack, subsequent ranged attacks you make against that same creature do not provoke attacks of opportunity until the end of your turn.',
    shortDescription: 'Sheathe freely; ranged attacks do not provoke after melee hits.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'quick_draw' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'mithral_current', 'ranged', 'melee'],
  },
  // 17
  {
    id: 'pow-molten-silver-strike',
    name: 'Molten Silver Strike',
    description:
      "Your mastery of Mithral Current and Solar Wind allows you to enhance your strikes with ranged power. When initiating a Mithral Current strike that enables ranged melee attacks, you may apply the effects of a Solar Wind boost to that strike. When doing so, the strike's range increases by 10 feet plus an additional 5 feet per four initiator levels you possess.",
    shortDescription:
      'Apply Solar Wind boosts to Mithral Current ranged strikes with extended range.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'quick_draw' },
      { type: 'special', description: 'Two Mithral Current maneuvers known' },
      { type: 'special', description: 'Two Solar Wind maneuvers known' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'mithral_current', 'solar_wind', 'cross_discipline'],
  },
  // 18
  {
    id: 'pow-pikemans-training',
    name: "Pikeman's Training",
    description:
      'You have learned to wield polearms and spears in one hand while carrying a shield. You may wield a normally two-handed polearm or spear in one hand while carrying a light or heavy shield in the other hand. When used this way, the weapon is treated as a one-handed weapon rather than a two-handed weapon for all purposes.',
    shortDescription: 'Wield a two-handed polearm or spear in one hand with a shield.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'polearm', 'shield', 'weapon'],
  },
  // 19
  {
    id: 'pow-pinning-arrow',
    name: 'Pinning Arrow',
    description:
      'You can pin targets in place with well-aimed ranged attacks. You may make a pinning shot instead of a normal attack action or as part of a full attack. Upon hitting with a ranged attack, the shot deals no damage. The target must succeed at a Reflex save (DC 10 + the damage the attack would have dealt) or become immobilized for one round, unable to leave their space but still able to take other actions. Flying creatures that fail the save fall unless they succeed at a Fly check against the same DC.',
    shortDescription: 'Pin targets in place with ranged attacks instead of dealing damage.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'precise_shot' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'ranged', 'immobilize'],
  },
  // 20
  {
    id: 'pow-polearm-dancer',
    name: 'Polearm Dancer',
    description:
      'Your fluid fighting style allows you to use agility rather than brute force with polearms and spears. You may use your Dexterity modifier instead of your Strength modifier on attack rolls when wielding spears and polearms. This feat counts as Weapon Finesse for the purposes of meeting prerequisites and requirements.',
    shortDescription: 'Use Dex for attack rolls with polearms and spears.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'perform', ranks: 1 },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'polearm', 'finesse', 'dexterity'],
  },
  // 21
  {
    id: 'pow-powerful-mark',
    name: 'Powerful Mark',
    description:
      "Your armiger's mark is particularly potent. The penalty imposed by your armiger's mark increases by 2. Additionally, the save DC for your armiger's mark grand challenge increases by +2.",
    shortDescription: "Increase armiger's mark penalty and grand challenge DC by 2.",
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: "armiger's mark" }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'class_feature.armigers_mark.penalty',
        value: 2,
        source: 'Powerful Mark',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'class_feature.armigers_mark.dc',
        value: 2,
        source: 'Powerful Mark',
      },
    ],
    activationMode: 'passive',
    tags: ['path_of_war', 'warder', 'mark'],
  },
  // 22
  {
    id: 'pow-prodigious-two-weapon-fighting',
    name: 'Prodigious Two-Weapon Fighting',
    description:
      'Your great strength allows you to wield heavier weapons in your off hand. You may wield a one-handed weapon in your off hand as if it were a light weapon. Additionally, you may use your Strength modifier instead of your Dexterity modifier when qualifying for Two-Weapon Fighting and any feats with Two-Weapon Fighting as a prerequisite.',
    shortDescription:
      'Use Str for TWF prerequisites; wield one-handed weapons as light in off hand.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'ability_score', ability: 'STR', minimum: 13 }],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'two_weapon_fighting', 'strength'],
  },
  // 23
  {
    id: 'pow-ricochet-weapon',
    name: 'Ricochet Weapon',
    description:
      'Your thrown weapons bounce back to your hand after striking. Whenever you throw a weapon as part of a martial strike, that weapon bounces or ricochets off your target and returns to your hand at the end of your turn. You must have a free hand to catch the weapon on its return; otherwise, it falls into your space at your feet.',
    shortDescription: 'Thrown weapons return to your hand after martial strikes.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'thrown_weapon', 'ranged'],
  },
  // 24
  {
    id: 'pow-ripple-in-still-water',
    name: 'Ripple in Still Water',
    description:
      'Your ki and kinetic abilities are intertwined. Your kineticist levels stack with levels from the class providing your ki pool for the purposes of calculating your daily ki pool points and your kinetic blast base damage. Additionally, you do not provoke attacks of opportunity when using kinetic blasts while threatened.',
    shortDescription: 'Stack kineticist and ki pool class levels; kinetic blasts do not provoke.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'ki pool' },
      { type: 'level', minimum: 1, class: 'kineticist' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'kineticist', 'ki_pool'],
  },
  // 25
  {
    id: 'pow-scatter-power',
    name: 'Scatter Power',
    description:
      'When you gather your kinetic power, it lashes out at those nearby. When you use your gather power class feature, you may inflict 1 point of burn on each creature adjacent to you. Affected creatures take damage equal to your kinetic blast damage. A successful Reflex save (DC 10 + half your kineticist level + your Constitution modifier) halves the damage.',
    shortDescription: 'Inflict burn on adjacent creatures when gathering power.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'gather power' },
      { type: 'level', minimum: 1, class: 'kineticist' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'kineticist', 'gather_power'],
  },
];
