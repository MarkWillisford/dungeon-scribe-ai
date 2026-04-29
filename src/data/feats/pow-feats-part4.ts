import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

/**
 * Path of War feats — Part 4 (feats 76–90 of 90 regular feats)
 * Source: d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/feats/
 *
 * 90 total non-style feats on page.
 * Parts 1–3 covered feats 1–75 (Advanced Study through Serene Stride).
 * This file covers the final 15 regular feats (Seize the Opportunity through Zealous Blade).
 */
export const POW_FEATS_PART4: FeatDefinition[] = [
  // 1
  {
    id: 'pow-seize-the-opportunity',
    name: 'Seize the Opportunity',
    description:
      "When you make an attack of opportunity, you can take an attack action (such as when using the Vital Strike feat) or attempt a combat maneuver (such as a bull rush, disarm, or dirty trick) in place of your attack of opportunity. This feat does not allow you to move when it isn't your turn.",
    shortDescription:
      'Use an attack action or combat maneuver in place of an attack of opportunity.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'attack_of_opportunity'],
  },
  // 2
  {
    id: 'pow-sin-eater',
    name: 'Sin Eater',
    description:
      "Whenever a creature Claimed by you is reduced to 0 or fewer hit points, you gain temporary hit points equal to twice that creature's Hit Dice. These temporary hit points last for one minute.",
    shortDescription: 'Gain temporary hit points when a Claimed creature is reduced to 0 hp.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: 'Dark Claim' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'harbinger', 'claim'],
  },
  // 3
  {
    id: 'pow-silver-fang-initiate',
    name: 'Silver Fang Initiate',
    description:
      'Whenever you use a Steel Serpent maneuver to deal ability score damage to a creature with vulnerability to silver, increase that ability score damage by 50%.',
    shortDescription:
      'Increase Steel Serpent ability damage by 50% against silver-vulnerable creatures.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'pow-improved-quick-draw' },
      { type: 'special', description: 'Two Mithral Current maneuvers known' },
      { type: 'special', description: 'Two Steel Serpent maneuvers known' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'mithral_current', 'steel_serpent', 'cross_discipline'],
  },
  // 4
  {
    id: 'pow-solar-flare',
    name: 'Solar Flare',
    description:
      'Upon successfully finishing a gather power action, you may emit a 20-foot burst of light that forces each creature within its area that can see you to make a Reflex save (DC 10 + 1/2 your kineticist level + your Constitution modifier) or become dazzled for 1 minute. When using a full-round gather power action, creatures that fail their saves are instead blinded for 1 round. This ability functions as a supernatural ability.',
    shortDescription: 'Dazzle or blind nearby enemies when gathering power.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'Gather power' },
      { type: 'level', minimum: 1, class: 'kineticist' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'kineticist', 'gather_power'],
  },
  // 5
  {
    id: 'pow-syphon-vitality',
    name: 'Syphon Vitality',
    description:
      'When gathering power, you can drain the animating essence from nearby opponents. Each creature within the area must make a Will save (DC 10 + 1/2 your kineticist level + your Constitution modifier) or become sickened for 1 round. If the gather power action takes a full round, the sickened condition lasts 1 minute instead. This ability functions on creatures normally immune to being sickened since it works by sapping animating energy rather than conventional sickness. This feat operates as a supernatural ability.',
    shortDescription: 'Sicken nearby enemies when gathering power.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'Gather power' },
      { type: 'level', minimum: 1, class: 'kineticist' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'kineticist', 'gather_power'],
  },
  // 6
  {
    id: 'pow-tactical-rush',
    name: 'Tactical Rush',
    description:
      'Once per encounter you may move up to your speed as a swift action. This feat may be taken up to three times, each time granting another use of this feat per encounter.',
    shortDescription: 'Move up to your speed as a swift action once per encounter.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      {
        type: 'special',
        description:
          'At least one maneuver known from the Iron Tortoise, Scarlet Throne, or Veiled Moon disciplines',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'iron_tortoise', 'scarlet_throne', 'veiled_moon', 'movement'],
  },
  // 7
  {
    id: 'pow-take-the-blow',
    name: 'Take the Blow',
    description:
      "When an opponent within your reach who bears your armiger's mark targets an ally with a melee or ranged attack, you can expend a use of armiger's mark as an immediate action to redirect that attack to yourself instead. You are considered the target for all effects of the attack (the creature must make a successful attack roll, you are allowed a save, if any, etc.).",
    shortDescription: "Redirect a marked opponent's attack against an ally to yourself.",
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: "Armiger's mark" }],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'warder', 'armigers_mark'],
  },
  // 8
  {
    id: 'pow-tap-animus',
    name: 'Tap Animus',
    description:
      'Upon entering combat, you obtain an animus pool starting with one point at the beginning of your first turn, gaining an additional point each subsequent turn. This pool remains active for one minute after all enemies are defeated or combat ends. Whenever you initiate a maneuver (strike, boost, or counter) during a round, you add one extra point to your pool. You may spend animus to enhance maneuvers or activate animus-dependent feats. If you ever gain the animus class feature, this feat is immediately exchanged for the Extra Animus feat.',
    shortDescription: 'Gain an animus pool even without the animus class feature.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      {
        type: 'special',
        description: 'You cannot possess the animus class feature',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'animus'],
  },
  // 9
  {
    id: 'pow-unhindered-way',
    name: 'Unhindered Way',
    description:
      'Your speed is not reduced by medium and heavy armor, and you can gain the benefit of your Speed of Thought feat while wearing heavy armor.',
    shortDescription:
      'Move at full speed in medium and heavy armor; Speed of Thought works in heavy armor.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Speed of Thought feat (psionic feat, not yet seeded)' },
      { type: 'proficiency', proficiency: 'medium armor' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'psionic', 'armor', 'movement'],
  },
  // 10
  {
    id: 'pow-variable-wind',
    name: 'Variable Wind',
    description:
      "You gain the ability to change your active element if you cannot already. Any Solar Wind maneuver you initiate that deals fire damage instead deals damage of your active element's associated energy type. This allows you to adapt the Solar Wind discipline to different elemental variants: Glacial Frost (cold), Virulent Spray (acid), and Oncoming Storm (electricity), providing flexibility in elemental damage output beyond the traditional fire-based approach.",
    shortDescription:
      'Change the damage type of your Solar Wind maneuvers by switching active element.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'One Solar Wind maneuver known' },
      { type: 'special', description: 'One Solar Wind stance known' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'solar_wind', 'elemental'],
  },
  // 11
  {
    id: 'pow-victorious-recovery',
    name: 'Victorious Recovery',
    description:
      'Once per encounter, when you reduce an opponent to 0 or fewer hit points, you recover a number of expended maneuvers equal to your initiator modifier (minimum 1).',
    shortDescription: 'Recover maneuvers once per encounter when you defeat an opponent.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Able to initiate maneuvers' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'maneuver_recovery'],
  },
  // 12
  {
    id: 'pow-weaken-the-prey',
    name: 'Weaken the Prey',
    description:
      'Cursed creatures, diseased creatures, and creatures suffering from ability damage take a \u20132 penalty on saving throws against your maneuvers.',
    shortDescription:
      'Cursed, diseased, or ability-damaged creatures take \u20132 on saves vs. your maneuvers.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      {
        type: 'special',
        description:
          'One maneuver known from the Cursed Razor, Eternal Guardian, or Steel Serpent discipline',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'cursed_razor', 'eternal_guardian', 'steel_serpent'],
  },
  // 13
  {
    id: 'pow-weapon-group-adaptation',
    name: 'Weapon Group Adaptation',
    description:
      'Choose a weapon group (excluding siege weapons and siege firearms). That weapon group is considered associated with disciplines you have access to. This feat may be selected multiple times, with each selection applying to a different weapon group. Additionally, once you achieve a base attack bonus of +5, this feat satisfies requirements for Weapon Mastery feat prerequisites and determines eligible weapons for weapon mastery feats, functioning as the fighter class feature weapon training.',
    shortDescription: 'Add a weapon group to your discipline weapon groups.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'weapon_group'],
  },
  // 14
  {
    id: 'pow-winds-of-war',
    name: 'Winds of War',
    description:
      'You receive a +5-foot bonus to all movement speeds, with an additional +5-foot increase for each creature you currently have Claimed. This bonus stacks, allowing you to grow progressively faster as you accumulate more Claimed targets.',
    shortDescription: 'Gain +5 ft. movement speed, plus +5 ft. per Claimed creature.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: 'Dark Claim' }],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'harbinger', 'claim', 'movement'],
  },
  // 15
  {
    id: 'pow-zealous-blade',
    name: 'Zealous Blade',
    description:
      'You combine your zealot and soulknife levels when calculating the enhancement bonus for your mind blade, determining maximum enhancement bonuses, accessing blade skill effects, and selecting which blade skills you can gain. Your combined zealot and soulknife levels are treated as a single pool for psionic weapon progression purposes.',
    shortDescription:
      'Stack zealot and soulknife levels for mind blade enhancement and blade skills.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'Enhanced mind blade' },
      { type: 'class_feature', featureName: 'Zeal' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'zealot', 'soulknife', 'psionic'],
  },
];
