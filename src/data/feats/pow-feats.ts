import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

/**
 * Path of War feats — Part 1 (feats 1–25 of 150)
 * Source: d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/feats/
 *
 * 150 total feats on page (90 regular + 60 style-chain feats).
 * Overflow: 125 feats remain for future batches.
 */
export const POW_FEATS: FeatDefinition[] = [
  // 1
  {
    id: 'pow-advanced-study',
    name: 'Advanced Study',
    description:
      'You learn additional martial techniques. Select one martial disciple class in which you have at least 4 levels. You may select two maneuvers or one stance from that class\u2019 available disciplines, or choose a single maneuver or stance from a discipline not normally available to that class. You must meet the normal prerequisites for any maneuver or stance selected.',
    shortDescription: 'Learn additional maneuvers or a stance from your martial disciple class.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'level', minimum: 4 },
      { type: 'special', description: 'Martial disciple class with maneuvers readied class feature' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'maneuver', 'initiator'],
  },
  // 2
  {
    id: 'pow-altered-life',
    name: 'Altered Life',
    description:
      'Your unusual physiology processes life force differently. If you are an aberration, fey, ooze, plant, or undead creature, you calculate your bonus hit points from your Constitution modifier using your Wisdom or Charisma modifier instead (choose one when you take this feat). This choice cannot be changed once made.',
    shortDescription: 'Calculate bonus hit points with Wis or Cha instead of Con.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Aberration, fey, ooze, plant, or undead type' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war'],
  },
  // 3
  {
    id: 'pow-animus-healing',
    name: 'Animus Healing',
    description:
      'You can channel animus to mend your wounds. As a swift action, you may spend points from your animus pool to heal yourself. Each point of animus spent heals a number of hit points equal to your initiator level.',
    shortDescription: 'Heal yourself by spending animus as a swift action.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Animus pool or equivalent ability' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'animus', 'healing'],
  },
  // 4
  {
    id: 'pow-augmented-elements',
    name: 'Augmented Elements',
    description:
      'Your kineticist abilities are augmented by psionic power. You gain an additional simple blast of a type you qualify for and gain the psionic subtype. Your kineticist levels stack with manifester levels for the purpose of qualifying for psionic feats and determining the effects of psionic powers.',
    shortDescription: 'Gain an additional simple blast and the psionic subtype.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 1, class: 'kineticist' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'kineticist', 'psionic'],
  },
  // 5
  {
    id: 'pow-awakened-animus',
    name: 'Awakened Animus',
    description:
      'Your animus pool is awakened to psionic potential. You may spend animus points in place of power points when augmenting psionic powers. Each point of animus spent counts as one power point for the purpose of augmentation.',
    shortDescription: 'Spend animus on power point augments for psionic powers.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Animus pool or equivalent ability' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'animus', 'psionic'],
  },
  // 6
  {
    id: 'pow-battle-fervor',
    name: 'Battle Fervor',
    description:
      'Your healing abilities inspire martial fury. When you use fervor, guardian\u2019s shield, or lay on hands to heal or protect an ally, your next martial strike initiated before the end of your next turn deals additional damage equal to the number of hit points healed or damage absorbed.',
    shortDescription: 'Deal additional damage on martial strikes after healing or shielding an ally.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'fervor, guardian\'s shield, or lay on hands' },
      { type: 'special', description: 'Ability to initiate maneuvers' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'healing', 'initiator'],
  },
  // 7
  {
    id: 'pow-buckler-bash',
    name: 'Buckler Bash',
    description:
      'You have learned to make shield bash attacks with a buckler. You may make shield bash attacks using a buckler as if it were a light shield. While using this feat, the buckler counts as an Iron Tortoise and Broken Blade discipline weapon for the purposes of initiating maneuvers and stances.',
    shortDescription: 'Make shield bashes with a buckler; treat it as a discipline weapon.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'proficiency', proficiency: 'shields' },
      { type: 'special', description: '1 Iron Tortoise or Broken Blade maneuver known' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'shield', 'iron_tortoise', 'broken_blade'],
  },
  // 8
  {
    id: 'pow-channeled-recovery',
    name: 'Channeled Recovery',
    description:
      'Your channel energy ability allows allies to recover spent martial maneuvers. When you channel energy to heal living creatures (or harm undead), all allies within the area of your channel energy may recover a single expended maneuver in addition to the normal effects of the channel energy.',
    shortDescription: 'Channel energy allows allies to recover a maneuver.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'channel_energy', 'recovery'],
  },
  // 9
  {
    id: 'pow-dark-allure',
    name: 'Dark Allure',
    description:
      'Your Claimed creatures find it difficult to attack your allies. Creatures you have Claimed take a penalty equal to your Charisma modifier (minimum 1) on attack rolls made against your allies other than yourself.',
    shortDescription: 'Claimed creatures take a penalty on attacks against your allies.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to Claim creatures' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'claim', 'harbinger'],
  },
  // 10
  {
    id: 'pow-dark-authority',
    name: 'Dark Authority',
    description:
      'Your Claimed creatures find it difficult to attack you directly. Creatures you have Claimed take a penalty equal to your Charisma modifier (minimum 1) on attack rolls made against you.',
    shortDescription: 'Claimed creatures take a penalty on attacks against you.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to Claim creatures' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'claim', 'harbinger'],
  },
  // 11
  {
    id: 'pow-dark-presence',
    name: 'Dark Presence',
    description:
      'Your dark influence prevents Claimed creatures from easily repositioning. Creatures you have Claimed provoke attacks of opportunity from you when they take 5-foot steps.',
    shortDescription: 'Claimed creatures provoke AoOs when taking 5-foot steps.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Ability to Claim creatures' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'claim', 'harbinger'],
  },
  // 12
  {
    id: 'pow-daisho-expertise',
    name: 'Daisho Expertise',
    description:
      'You have trained extensively in the art of the daisho. You may use your Dexterity modifier instead of your Strength modifier on attack rolls made with katanas and wakizashi. Additionally, you increase the damage die of katanas and wakizashi you wield by one step.',
    shortDescription: 'Use Dex for attack rolls with katanas/wakizashi and increase their damage dice.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'proficiency', proficiency: 'katana or wakizashi' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'mithral_current', 'weapon'],
  },
  // 13
  {
    id: 'pow-deadly-agility',
    name: 'Deadly Agility',
    description:
      'You may add your Dexterity modifier in place of your Strength modifier when determining bonus damage with melee weapons that qualify for the Weapon Finesse feat (such as rapiers, daggers, and other light weapons). When wielding a weapon in your off hand, Deadly Agility will add the same fraction of Dexterity as you normally would for Strength.',
    shortDescription: 'Add Dex modifier instead of Str to damage with finessable weapons.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_finesse' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'dexterity', 'damage'],
  },
  // 14
  {
    id: 'pow-deadly-pairing',
    name: 'Deadly Pairing',
    description:
      'You excel at finding vulnerable spots on enemies when working with an ally. When flanking a creature while in a Steel Serpent stance, you increase your critical threat modifier by 1 (e.g., 19\u201320 becomes 18\u201320). This bonus stacks with Improved Critical but not other effects that increase threat range.',
    shortDescription: 'Increase threat range when flanking while in a Steel Serpent stance.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Deadly strike +1d6' },
      { type: 'special', description: '1 Steel Serpent stance known' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'steel_serpent', 'flanking', 'critical'],
  },
  // 15
  {
    id: 'pow-defensive-expertise',
    name: 'Defensive Expertise',
    description:
      'Your expertise with shields allows you to defend against attacks that would normally bypass your shield. Your shield bonus to AC (including any enhancement bonus to the shield) applies against touch attacks as well as normal attacks.',
    shortDescription: 'Shield bonus to AC works against touch attacks.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'shield_focus' },
      { type: 'proficiency', proficiency: 'shields' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'shield', 'defense', 'touch_ac'],
  },
  // 16
  {
    id: 'pow-discipline-expertise',
    name: 'Discipline Expertise',
    description:
      'Your training in martial disciplines gives you expertise in their associated skills. You gain a +2 bonus on skill checks associated with the disciplines available to your martial disciple class or classes.',
    shortDescription: '+2 bonus to skills associated with your class disciplines.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.discipline',
        value: 2,
        source: 'Discipline Expertise',
      },
    ],
    activationMode: 'passive',
    tags: ['path_of_war', 'skill', 'discipline'],
  },
  // 17
  {
    id: 'pow-discipline-focus',
    name: 'Discipline Focus',
    description:
      'Choose one discipline in which you know at least three maneuvers. The save DCs of your maneuvers from the chosen discipline increase by +2. Additionally, you gain a +2 bonus on damage rolls when attacking with weapons associated with your chosen discipline.',
    shortDescription: '+2 to save DCs and +2 damage with a chosen discipline.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Ability to initiate 3 maneuvers of one discipline' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'maneuver.saveDC',
        value: 2,
        source: 'Discipline Focus',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 2,
        source: 'Discipline Focus',
      },
    ],
    activationMode: 'passive',
    tags: ['path_of_war', 'discipline', 'save_dc', 'damage'],
  },
  // 18
  {
    id: 'pow-discipline-mastery',
    name: 'Discipline Mastery',
    description:
      'Your mastery of a discipline\u2019s associated skill allows you to perform reliably under pressure. When making a skill check with a discipline\u2019s associated skill in which you have 8 or more ranks, you may take 10 even if stress and distractions would normally prevent you from doing so.',
    shortDescription: 'Take 10 on discipline-associated skill checks even under pressure.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: '8 ranks in the associated skill of one of your disciplines' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'skill', 'discipline'],
  },
  // 19
  {
    id: 'pow-double-weapon-finesse',
    name: 'Double Weapon Finesse',
    description:
      'You are skilled at fighting with double weapons in a fluid, agile manner. When wielding a double weapon, you may treat both ends as light weapons for the purposes of the Weapon Finesse feat and Two-Weapon Fighting penalties. You also gain a +2 bonus on combat maneuver checks made with a double weapon.',
    shortDescription: 'Treat both heads of a double weapon as light; +2 to CMB with double weapons.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'proficiency', proficiency: 'double weapon' },
      { type: 'feat', featId: 'two_weapon_fighting' },
      { type: 'feat', featId: 'weapon_finesse' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb',
        value: 2,
        source: 'Double Weapon Finesse',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'double' },
          description: 'wielding a double weapon',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['path_of_war', 'double_weapon', 'finesse'],
  },
  // 20
  {
    id: 'pow-electrum-manticore',
    name: 'Electrum Manticore',
    description:
      'Your knowledge of the Golden Lion and Silver Crane disciplines allows you to blend their techniques. When you enter a Silver Crane stance, you may initiate a Golden Lion boost as a free action as part of the same action. When you enter a Golden Lion stance, you may initiate a Silver Crane boost as a free action as part of the same action.',
    shortDescription: 'Initiate Golden Lion boosts when entering Silver Crane stances, and vice versa.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Two Golden Lion maneuvers known' },
      { type: 'special', description: 'Two Silver Crane maneuvers known' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'golden_lion', 'silver_crane', 'cross_discipline'],
  },
  // 21
  {
    id: 'pow-elemental-current',
    name: 'Elemental Current',
    description:
      'You blend the techniques of Elemental Flux and Mithral Current to devastating effect. When you hit a creature with a Mithral Current maneuver while in an Elemental Flux stance, the target becomes vulnerable to the energy type of your active element instead of being treated as vulnerable to silver. This effect lasts until the end of your next turn.',
    shortDescription: 'Make opponents vulnerable to elemental damage instead of silver via Mithral Current.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'quick_draw' },
      { type: 'special', description: 'Two Elemental Flux maneuvers known' },
      { type: 'special', description: 'Two Mithral Current maneuvers known' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'elemental_flux', 'mithral_current', 'cross_discipline'],
  },
  // 22
  {
    id: 'pow-elemental-focus',
    name: 'Elemental Focus',
    description:
      'You specialize in one element of the Elemental Flux discipline. Choose one element (fire, cold, electricity, or acid). When you deal damage of your chosen element through Elemental Flux maneuvers, you partially ignore energy resistance and immunity. You ignore an amount of energy resistance equal to your initiator level, and creatures immune to your chosen element instead treat it as having resistance equal to 20 + their CR.',
    shortDescription: 'Partially ignore energy resistance and immunity to a chosen element.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Elemental attunement class feature or one Elemental Flux maneuver known' },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Element',
        options: ['fire', 'cold', 'electricity', 'acid'],
        affectsEffects: true,
      },
    ],
    tags: ['path_of_war', 'elemental_flux', 'element', 'energy_resistance'],
  },
  // 23
  {
    id: 'pow-elemental-sun',
    name: 'Elemental Sun',
    description:
      'Your mastery of Elemental Flux and Solar Wind allows you to weaken enemy defenses with ranged attacks. When you initiate a Solar Wind maneuver while in an Elemental Flux stance, the target\u2019s energy resistance to your active element is reduced by an amount equal to your initiator level on a successful hit. This reduction lasts until the end of your next turn.',
    shortDescription: 'Solar Wind maneuvers while in Elemental Flux stance reduce energy resistance.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Two Elemental Flux maneuvers known' },
      { type: 'special', description: 'Two Solar Wind maneuvers known' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'elemental_flux', 'solar_wind', 'cross_discipline'],
  },
  // 24
  {
    id: 'pow-enduring-protector',
    name: 'Enduring Protector',
    description:
      'Your martial prowess and defensive instincts allow you to draw strength from defeating enemies. When you reduce an opponent to 0 or fewer hit points with an attack of opportunity, you gain temporary hit points equal to your initiator level + your Constitution modifier. These temporary hit points last for 1 minute.',
    shortDescription: 'Gain temporary hit points when you drop an opponent with an AoO.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'pow-martial-power' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'temporary_hp', 'attack_of_opportunity'],
  },
  // 25
  {
    id: 'pow-eternal-hourglass',
    name: 'Eternal Hourglass',
    description:
      'Your mastery of Eternal Guardian and Riven Hourglass techniques allows you to bend time to create openings for counterattacks. While in a Riven Hourglass stance, once per encounter you may initiate an Eternal Guardian counter as a free action, even if it is not your turn, without expending the counter.',
    shortDescription: 'Initiate an Eternal Guardian counter for free once per encounter while in a Riven Hourglass stance.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Two Eternal Guardian maneuvers known' },
      { type: 'special', description: 'Two Riven Hourglass maneuvers known' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'eternal_guardian', 'riven_hourglass', 'cross_discipline'],
  },
];
