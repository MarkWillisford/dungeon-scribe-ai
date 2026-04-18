import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

/**
 * Path of War feats — Part 2 (feats 26–50 of ~90 regular feats)
 * Source: d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/feats/
 *
 * Covers: Extended Mark through Lightning Recovery (alphabetical).
 * Part 1 covered Advanced Study through Eternal Hourglass (25 feats).
 */
export const POW_FEATS_PART2: FeatDefinition[] = [
  // 1
  {
    id: 'pow-extended-mark',
    name: 'Extended Mark',
    description:
      'Your armiger\u2019s mark lingers longer than normal. The duration of your armiger\u2019s mark is doubled.',
    shortDescription: 'Double the duration of your armiger\u2019s mark.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'armiger\u2019s mark' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'warder', 'armiger_mark'],
  },
  // 2
  {
    id: 'pow-extra-animus',
    name: 'Extra Animus',
    description:
      'Your connection to your animus pool is stronger than most. Your initial animus pool at the start of each combat increases by 2 points. You can take this feat multiple times. Each additional time you take the feat, your initial animus pool increases by 1 point instead of 2.',
    shortDescription: 'Increase your starting animus total by 2.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must possess an animus pool' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'animus'],
  },
  // 3
  {
    id: 'pow-extra-conviction',
    name: 'Extra Conviction',
    description:
      'You have trained to master additional convictions. Choose a conviction that you meet the prerequisites for. You gain the benefit of that conviction. You can take this feat multiple times. Each time you take the feat, you choose an additional conviction you meet the prerequisites for.',
    shortDescription: 'Gain an additional conviction.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'conviction' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'zealot', 'conviction'],
  },
  // 4
  {
    id: 'pow-extra-gambit',
    name: 'Extra Gambit',
    description:
      'You have learned additional methods of rallying your allies and recovering your martial techniques. You may select another gambit method in which to regain maneuvers. You may select this feat multiple times, selecting a new gambit each time.',
    shortDescription: 'Select another gambit method to regain maneuvers.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Ability to initiate a gambit' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'level', minimum: 3, class: 'warlord' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'warlord', 'gambit', 'recovery'],
  },
  // 5
  {
    id: 'pow-extra-granted-maneuver',
    name: 'Extra Granted Maneuver',
    description:
      'You have an additional maneuver at the ready when combat begins. When you are granted your maneuvers at the start of combat and after you expend all your remaining maneuvers, you can choose one additional maneuver to be granted from your withheld maneuvers.',
    shortDescription: 'Gain an additional granted maneuver at combat start.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Granted maneuvers class feature' },
      { type: 'initiator_level', minimum: 3 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'granted_maneuver', 'crusader'],
  },
  // 6
  {
    id: 'pow-extra-ki',
    name: 'Extra Ki',
    description:
      'You have a deeper reserve of ki than most. Your ki pool increases by 2. You can gain Extra Ki multiple times. Its effects stack.',
    shortDescription: 'Increase your ki pool by 2.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'ki pool' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'ki'],
  },
  // 7
  {
    id: 'pow-extra-marks',
    name: 'Extra Marks',
    description:
      'You can place your mark on more creatures each day. You gain two additional daily uses of your armiger\u2019s mark class feature. This feat can be taken multiple times. Its effects stack.',
    shortDescription: 'Use armiger\u2019s mark two additional times per day.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'armiger\u2019s mark' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'warder', 'armiger_mark'],
  },
  // 8
  {
    id: 'pow-extra-presence',
    name: 'Extra Presence',
    description:
      'You have learned to project additional tactical presences. You select one tactical presence meeting your prerequisites and can adopt it when activating your tactical presence class feature. You can take this feat multiple times. Each time you take the feat, you choose an additional tactical presence you meet the prerequisites for. You can select tactical presences normally available only to a specific warlord archetype with this feat even if you do not possess that archetype.',
    shortDescription: 'Gain an additional tactical presence.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'tactical presence' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'warlord', 'tactical_presence'],
  },
  // 9
  {
    id: 'pow-extra-readied-maneuver',
    name: 'Extra Readied Maneuver',
    description:
      'You are able to keep more martial techniques at the ready. Choose a martial disciple class you have levels in. Your maneuvers readied for that class increases by one. If that class has granted maneuvers (such as the mystic), the number of maneuvers you are granted at the beginning of an encounter and when you recover your maneuvers also increases by one. You may select this feat multiple times, applying it to multiple classes (if you possess multiple initiator classes) or multiple times to a single class. This feat may not alter maneuvers readied from the Martial Training feat chain.',
    shortDescription: 'Ready an additional martial maneuver.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Ability to initiate a martial maneuver' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'maneuver', 'readied'],
  },
  // 10
  {
    id: 'pow-extra-stalker-art',
    name: 'Extra Stalker Art',
    description:
      'You have studied additional stalker techniques. You may select a new stalker art and add it to your known stalker arts. You may select this feat multiple times, selecting a new stalker art each time.',
    shortDescription: 'Learn a new stalker art.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'level', minimum: 3, class: 'stalker' },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'stalker', 'stalker_art'],
  },
  // 11
  {
    id: 'pow-feral-goddess',
    name: 'Feral Goddess',
    description:
      'Your psionic abilities and martial training combine to create devastating natural weapons. You reduce the power point cost for manifesting psionic powers that grant natural weapons (such as claws of the beast or metamorphosis) by 1 point, to a minimum of 0. In addition, you treat natural weapons created by psionic powers as Sleeping Goddess discipline weapons and as magic weapons for the purposes of overcoming damage reduction.',
    shortDescription: 'Reduce cost of natural weapon powers by 1; treat them as discipline weapons.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'One Sleeping Goddess maneuver known' },
      {
        type: 'special',
        description:
          'Ability to manifest a psionic power that grants natural weapons (such as claws of the beast or metamorphosis)',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'sleeping_goddess', 'psionic', 'natural_weapons'],
  },
  // 12
  {
    id: 'pow-flowing-mithral-fist',
    name: 'Flowing Mithral Fist',
    description:
      'Your unarmed strikes flow like quicksilver, blending the art of Mithral Current into your hand-to-hand combat. Your unarmed strikes function as Mithral Current discipline weapons and as silver weapons for the purpose of overcoming damage reduction or dealing bonus damage to creatures vulnerable to silver. In addition, you can conceal your hands once per round as a free action that does not provoke attacks of opportunity\u2014even when it is not your turn\u2014by placing them in pockets, sleeves, or other non-threatening positions.',
    shortDescription:
      'Unarmed strikes count as Mithral Current discipline weapons and silver weapons; sheathe hands freely.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'One Mithral Current stance known' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'mithral_current', 'unarmed'],
  },
  // 13
  {
    id: 'pow-forge-of-the-goddess',
    name: 'Forge of the Goddess',
    description:
      'Your psionic crafting abilities are enhanced by your martial training. You treat any weapon you create with the call weaponry power as a Sleeping Goddess discipline weapon. In addition, you reduce the power point cost for manifesting call weaponry by 1 (to a minimum of 0).',
    shortDescription: 'Call weaponry creates Sleeping Goddess discipline weapons at reduced cost.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'One Sleeping Goddess maneuver known' },
      { type: 'special', description: 'Ability to manifest call weaponry' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'sleeping_goddess', 'psionic'],
  },
  // 14
  {
    id: 'pow-fuse-styles',
    name: 'Fuse Styles',
    description:
      'You have learned to blend your martial stances with style feats seamlessly. You can enter a fighting style and a martial stance with the same swift action.',
    shortDescription: 'Enter a style feat and a martial stance simultaneously.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'special', description: 'One Style feat' },
      { type: 'special', description: 'One stance known' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'stance'],
  },
  // 15
  {
    id: 'pow-giant-slayer',
    name: 'Giant Slayer',
    description:
      'You specialize in fighting foes larger than yourself, using their size against them. When you make a charge attack, you do not provoke attacks of opportunity from the target of your charge. In addition, you gain a +1 bonus on attack rolls made during charges for each size category larger than you the target of the attack is.',
    shortDescription:
      'No AoO from charge target; +1 to hit per size category larger.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'charge', 'size'],
  },
  // 16
  {
    id: 'pow-grasp-of-darkness',
    name: 'Grasp of Darkness',
    description:
      'Your dark claim reaches further and recovers more power. When you use your dark claim class feature to Claim a creature, you recover two expended maneuvers rather than one, and can Claim two additional opponents within close range. You do not recover additional maneuvers for Claiming these opponents beyond the one granted by this feat.',
    shortDescription: 'Recover two maneuvers when Claiming; Claim two additional targets.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'dark claim' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'harbinger', 'claim', 'recovery'],
  },
  // 17
  {
    id: 'pow-greater-unarmed-strike',
    name: 'Greater Unarmed Strike',
    description:
      'Your unarmed strikes are devastatingly powerful. Your unarmed strikes have their base damage increased to 1d8 (for a Medium size creature). At character level 10th, this increases to 1d10 base damage. If you are a monk, brawler, or other class that gains increased unarmed damage based on your level, you instead add 4 to your effective class level to determine your unarmed strike damage dice.',
    shortDescription: 'Unarmed strikes deal 1d8 damage (1d10 at 10th level); monks add 4 to effective level.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'level', minimum: 3 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'unarmed', 'damage'],
  },
  // 18
  {
    id: 'pow-guards-glare',
    name: "Guard's Glare",
    description:
      "Your intimidating presence prevents marked foes from retreating. A creature that is demoralized, frightened, shaken, or panicked while marked by your armiger\u2019s mark must succeed at a Will save (DC 10 + 1/2 your warder level + your warder initiation modifier) to move away from you. The creature only needs to make this save once per round. This is a mind-affecting fear effect.",
    shortDescription: 'Marked and scared creatures must save to move away from you.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'armiger\u2019s mark' },
      { type: 'skill', skillId: 'intimidate', ranks: 4 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'warder', 'armiger_mark', 'fear', 'intimidate'],
  },
  // 19
  {
    id: 'pow-haft-strike',
    name: 'Haft Strike',
    description:
      'You know how to grip a polearm to strike at adjacent opponents. You can hold a reach weapon differently to threaten adjacent squares as well as squares within the weapon\u2019s normal reach. You take a \u20132 penalty to AC when using this feat. You must choose to use this feat before making an attack roll during your turn, and its effects last until the start of your next turn.',
    shortDescription: 'Take \u20132 AC to threaten adjacent squares with a reach weapon.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 5 }],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'ac',
        value: -2,
        source: 'Haft Strike',
      },
    ],
    activationMode: 'toggle',
    tags: ['path_of_war', 'reach', 'polearm'],
  },
  // 20
  {
    id: 'pow-hone-weapon',
    name: 'Hone Weapon',
    description:
      'You can sharpen weapons to a razor edge. You can spend ten minutes using a whetstone to sharpen piercing or slashing weapons or up to 20 pieces of such ammunition. The newly-honed weapon gains a +1 bonus on damage rolls for one day. This bonus increases by +1 at character level 4th and at every four levels thereafter. The honing process does not affect the weapon\u2019s hardness or hit points, and applies to both magical and nonmagical manufactured weapons only.',
    shortDescription: 'Sharpen a weapon for +1 damage/day, scaling every 4 levels.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_martial', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 1,
        source: 'Hone Weapon',
      },
    ],
    activationMode: 'passive',
    tags: ['path_of_war', 'weapon', 'damage'],
  },
  // 21
  {
    id: 'pow-improved-blade-meditation',
    name: 'Improved Blade Meditation',
    description:
      'Your blade meditation is faster than most. You can activate your blade meditation class feature as a standard action instead of as a full-round action.',
    shortDescription: 'Use blade meditation as a standard action.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'blade meditation' },
      { type: 'level', minimum: 7, class: 'mystic' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'mystic', 'blade_meditation'],
  },
  // 22
  {
    id: 'pow-improved-quick-draw',
    name: 'Improved Quick Draw',
    description:
      'Your mastery of the quick draw allows you to threaten even with a sheathed weapon. You are considered to be threatening all squares within reach of your weapon even if it is sheathed, and can draw your weapon when making an attack of opportunity. When you draw your weapon in this way, you may sheathe your weapon without provoking attacks of opportunity after the attack is resolved.',
    shortDescription: 'Threaten with sheathed weapons; draw for AoOs and sheathe freely.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'quick_draw' }],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'mithral_current', 'quick_draw', 'sheathe'],
  },
  // 23
  {
    id: 'pow-inner-fire',
    name: 'Inner Fire',
    description:
      'You can channel psionic focus to accelerate your power gathering. By expending your psionic focus while gathering power, a swift action is treated as a move action\u2019s worth of gathering power, and a move action is treated as a full round\u2019s worth of gathering power. You cannot use other gathering power methods during the same turn you use this feat.',
    shortDescription: 'Expend psionic focus to gather power faster.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'gather power' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'kineticist', 'psionic', 'gather_power'],
  },
  // 24
  {
    id: 'pow-kinetic-duelist',
    name: 'Kinetic Duelist',
    description:
      'You can create a second kinetic blade to fight with two weapons. When you use the kinetic blade wild talent, you may make a second kinetic blade in your off hand. You can only make one attack with this second kinetic blade, regardless of how many off-hand attacks you would normally receive. You pay burn costs for the second kinetic blade as normal, and can make the second kinetic blade using a different kinetic blast than the first, if you wish. If you used gather power to reduce the cost of the first kinetic blade, the reduction from gather power does not apply to the second blade\u2019s cost as well.',
    shortDescription: 'Create a second kinetic blade in your off hand.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'two_weapon_fighting' },
      { type: 'special', description: 'Kinetic blade wild talent' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'kineticist', 'kinetic_blade', 'two_weapon'],
  },
  // 25
  {
    id: 'pow-lightning-recovery',
    name: 'Lightning Recovery',
    description:
      'You can instantly recover a martial technique after using it. As a free action, after using a martial strike, counter, or boost, you may instantly recover that maneuver. You may use this ability once per day. You may select this feat multiple times, gaining an additional daily use each time.',
    shortDescription: 'Recover a maneuver immediately after use, once per day.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Ability to initiate martial maneuvers' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'recovery', 'maneuver'],
  },
];
