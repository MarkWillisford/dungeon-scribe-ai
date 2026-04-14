import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const QUESTS_CAMPAIGNS_FEATS: FeatDefinition[] = [
  {
    id: 'apotheosis',
    name: 'Apotheosis',
    types: ['story'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'You have touched divinity and strive to be recognized as a divine peer. You gain a +2 bonus on Constitution checks to stabilize while dying. When you or an allied worshipper of your deity casts augury or a similar divination, the chance of receiving a meaningful reply increases by 5% (to a maximum of 95%). Goal: Be acknowledged by another divine being, directly or through a representative, as a peer, even if only a minor one. Completion Benefit: Once per day as an immediate action, you can cause any die roll made by a creature within 100 feet of you to be rerolled. You choose which result to use, deciding after the initial roll but before the GM reveals results.',
    shortDescription:
      'Gain stabilization bonuses and improved divination results; complete the goal to force die rerolls.',
    prerequisites: [
      {
        type: 'special',
        description:
          "You must have had direct contact with a deity or godlike being, or been raised from the dead at a deity or godlike being's personal behest.",
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'constitution_check.stabilize',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Apotheosis',
        condition: {
          type: 'custom',
          description: 'when making Constitution checks to stabilize while dying',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'divine', 'divination', 'stabilization'],
  },
  {
    id: 'artifact_hunter',
    name: 'Artifact Hunter',
    types: ['story'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      "You have glimpsed a legendary artifact and now seek to claim it. You gain a +2 bonus on Use Magic Device checks when emulating a class feature, ability score, race, or alignment (increases to +4 with 10 or more ranks in Use Magic Device). Once per day, you can choose to treat a Use Magic Device check result as though you had rolled a 15; if you have 10 or more ranks in Use Magic Device, you can use this ability twice per day. Goal: Claim ownership of an artifact. Completion Benefit: Three times per day when you activate a use-activated or command word magic item, you may increase the item's effective caster level by +2 as a free action (once per round).",
    shortDescription:
      'Gain bonuses to Use Magic Device and reliable check results; complete the goal to empower magic items.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have come within sight of a legendary artifact at some point in your past.',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.use_magic_device',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Artifact Hunter',
        condition: {
          type: 'custom',
          description:
            'when emulating a class feature, ability score, race, or alignment (increases to +4 with 10+ ranks)',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'magic_items', 'use_magic_device'],
  },
  {
    id: 'blessed_qc',
    name: 'Blessed',
    types: ['story'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'Celestial blood or contact with good outsiders has marked you. You gain a +2 bonus on Charisma-based checks involving good-aligned outsiders and a +1 bonus to the DC of spells and spell-like abilities you use against such creatures, but you take a -2 penalty on Charisma-based checks involving evil-aligned outsiders. Goal: Thwart or decisively defeat an evil creature that qualifies as a challenging foe, but show mercy and convert that creature toward good. Completion Benefit: You gain protection from evil as a constant spell-like ability, and a +2 bonus on caster level checks against evil-aligned outsiders.',
    shortDescription:
      'Gain bonuses against good outsiders and a penalty against evil ones; complete the goal for constant protection from evil.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have had friendly contact with a good outsider qualifying as a challenging foe, be a sorcerer with the celestial bloodline, or have direct celestial ancestry (such as aasimar).',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.charisma_checks',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Blessed',
        condition: {
          type: 'custom',
          description: 'on Charisma-based checks involving good-aligned outsiders',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'outsiders', 'celestial', 'good'],
  },
  {
    id: 'center_of_power',
    name: 'Center of Power',
    types: ['general'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      "You designate one building in your kingdom as your center of power and assign a follower from your Leadership feat to oversee it. When that follower dedicates themselves entirely to managing that location for a full kingdom turn, the building's effects on Economy, Stability, Fame, and Loyalty are doubled, while any penalties it imposes are eliminated. Only one building can be your center of power at a time. The follower need not be the same person each month, but the position must remain staffed throughout the month. You may reassign your center of power once per year.",
    shortDescription:
      'Assign a follower to a kingdom building to double its benefits and eliminate its penalties.',
    prerequisites: [
      {
        type: 'special',
        description: 'Leadership score 13',
      },
      {
        type: 'feat',
        featId: 'leadership',
      },
      {
        type: 'special',
        description: 'Must hold a leadership role related to running a kingdom.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['kingdom_building', 'leadership', 'followers', 'buildings'],
  },
  {
    id: 'dynasty_founder',
    name: 'Dynasty Founder',
    types: ['story'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      "You seek to establish a lasting dynasty over a chosen region. You gain followers as if you had the Leadership feat, though you cannot attract followers of a level higher than your level minus 2. If you already possess Leadership, increase your Leadership score by 3 when determining follower count. Goal: Thwart all rivals to rulership over the chosen region, including at least one challenging foe. Completion Benefit: Gain control of the settlement. Once per year after gaining this benefit, you may attempt a DC 25 Diplomacy check (modified by the settlement's Society modifier) or Intimidate check (modified by its Law modifier) to move the settlement's alignment one step toward yours, replace one settlement quality, change the government type, or significantly alter the laws. On failure, popular opposition blocks the change. Additionally, your followers gain a +1 morale bonus on attack rolls and saving throws as long as they can see you.",
    shortDescription:
      'Gain followers and strive to found a dynasty; complete the goal to control a settlement and inspire followers.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have lived in the chosen city for at least 1 year, or be the heir of a former city leader.',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['story', 'kingdom_building', 'leadership', 'followers', 'dynasty'],
  },
  {
    id: 'expert_trainer_qc',
    name: 'Expert Trainer',
    types: ['general'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'Choose three character classes. For the purposes of retraining, you are always considered to have a retraining synergy with these classes, regardless of your current class. Retraining any class option takes you half the time it normally would (and thus half the gp cost). Retraining a class itself still requires the standard duration. Special: If you retrain this feat, the retraining process takes twice as long as normal for this feat specifically.',
    shortDescription:
      'Gain retraining synergy with three chosen classes and halve the time to retrain class options.',
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['retraining', 'class_options', 'downtime'],
  },
  {
    id: 'explorer',
    name: 'Explorer',
    types: ['story'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'You have struck out into unmapped wilderness and survived. You can provide twice as much food and water for other people when attempting a Survival check to get along in the wild. You gain a +2 bonus on all Knowledge (geography) checks (increases to +4 with 10 or more ranks). Goal: Cross through a dangerous place without a map or knowledgeable guide, stopping no longer than 16 hours at a time, and overcome an appropriate number of natural hazards, obstacles, and enemies, at least one of which must qualify as a challenging foe. Completion Benefit: You and one ally per 3 ranks of Survival can move overland without being slowed by difficult terrain (allies must remain within 30 feet of you). Once per day you can make a preternaturally accurate estimate of your path, as if you had cast find the path on yourself (caster level equals your character level).',
    shortDescription:
      'Forage more efficiently and gain Knowledge (geography) bonuses; complete the goal to ignore difficult terrain.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have crossed at least 30 miles of wilderness without a map or guide.',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.knowledge_geography',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Explorer',
        condition: {
          type: 'custom',
          description: 'on Knowledge (geography) checks (increases to +4 with 10+ ranks)',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'survival', 'wilderness', 'geography'],
  },
  {
    id: 'focused_overseer',
    name: 'Focused Overseer',
    types: ['general'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'You can spend a day of downtime to purchase one type of capital at half its normal cost; this capital must match the focus capital chosen for Focused Worker. However, the neglected capital from your Focused Worker feat costs half again its normal amount. These price changes apply to both purchased and earned capital. Special: You may take this feat twice, but only if you have also taken Focused Worker twice. Each instance affects only one focus capital; the second time you take this feat, choose the other focus capital from your Focused Worker feats.',
    shortDescription:
      'Purchase your focus capital at half cost during downtime, but pay more for neglected capital.',
    prerequisites: [
      {
        type: 'feat',
        featId: 'focused_worker',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['downtime', 'capital', 'kingdom_building'],
  },
  {
    id: 'focused_worker',
    name: 'Focused Worker',
    types: ['general'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'Choose a focus capital (Goods, Influence, Labor, or Magic) and a separate neglected capital from the same list. When performing skilled work to gain your focus capital, you earn 50% more than normal (rounded down). When performing skilled work for your neglected capital, you gain only half the usual amount. This feat only affects capital gained by performing skilled work, not capital gained through unskilled work, purchasing, or running a business. Special: You may take this feat twice; the second time, choose the remaining two capital types as your new focus and neglected categories.',
    shortDescription:
      'Specialize in one type of downtime capital, gaining more of it but less of another.',
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['downtime', 'capital', 'kingdom_building', 'skilled_work'],
  },
  {
    id: 'fortunate_manager',
    name: 'Fortunate Manager',
    types: ['general'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'During the Event phase of downtime, if an event occurs and the GM rolls on a building event table or organization event table, you may, once per week, choose to roll twice on the applicable table and choose either result. You must declare you are using this feat before the results of the initial roll are revealed.',
    shortDescription:
      'Once per week during downtime, roll twice on a building or organization event table and choose either result.',
    prerequisites: [
      {
        type: 'special',
        description: 'You must own at least one building.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['downtime', 'buildings', 'events', 'kingdom_building'],
  },
  {
    id: 'fortunate_ruler',
    name: 'Fortunate Ruler',
    types: ['general'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      "During a kingdom's Event phase, once an event's type and danger level has been determined, you may choose to roll twice on the applicable kingdom or settlement table and choose either result. You must declare use of this ability before the initial roll results are revealed.",
    shortDescription:
      'During kingdom events, roll twice on the event table and choose either result.',
    prerequisites: [
      {
        type: 'special',
        description: 'You must hold the Ruler leadership role for a kingdom.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['kingdom_building', 'events', 'ruler', 'leadership'],
  },
  {
    id: 'inspirational_commander',
    name: 'Inspirational Commander',
    types: ['general'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'You or any army under your command gains a +2 bonus on Morale checks. Additionally, you gain two additional boons of your choice (see Ultimate Campaign for boon options).',
    shortDescription:
      'Grant a +2 morale bonus on Morale checks to yourself and armies you command, plus two army boons.',
    prerequisites: [
      {
        type: 'ability_score',
        ability: 'CHA',
        minimum: 13,
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'army.morale_check',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Inspirational Commander',
        condition: {
          type: 'custom',
          description: 'on Morale checks for you or any army under your command',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['army', 'morale', 'war', 'leadership', 'boons'],
  },
  {
    id: 'natural_ruler',
    name: 'Natural Ruler',
    types: ['general'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      "Choose an ability score. Any time your leadership role calls for that ability score to affect one of your kingdom's attributes, your modifier to that ability score is treated as being +2 higher. You also grant your kingdom +2 Stability while occupying a leadership role. Special: You may gain this feat multiple times; each time you must choose a different ability score. The bonus to Stability stacks.",
    shortDescription:
      'Your chosen ability score is treated as +2 higher for kingdom roles, and you grant +2 Stability.',
    prerequisites: [
      {
        type: 'special',
        description: 'Must hold a leadership role related to running a kingdom.',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'kingdom.stability',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Natural Ruler',
        condition: {
          type: 'custom',
          description: 'while occupying a leadership role in a kingdom',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['kingdom_building', 'leadership', 'ability_score'],
  },
  {
    id: 'object_of_legend',
    name: 'Object of Legend',
    types: ['story'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'You have a personal stake in obtaining a legendary object. You gain a +2 bonus on Knowledge checks to gain information on the object of your quest (increases to +4 with 10 or more ranks in the relevant Knowledge skill). Once per day when you threaten a critical hit against a foe who specifically aims to stop you from completing your quest, you gain a +10 bonus on your critical hit confirmation roll; you must announce use of this ability after threatening the critical hit but before rolling confirmation. This bonus does not stack with other feat bonuses to confirmation rolls. Goal: Attain the object of your quest as determined by you and the GM. Completion Benefit: You gain renown throughout a region; you can be the subject of legend lore regardless of level, commoners know of your deeds, and you gain a specific benefit keyed to the object of your quest. Special: This feat may be taken more than once; each time select a new quest object.',
    shortDescription:
      'Gain knowledge bonuses about your quest object and a daily critical confirmation bonus against those who oppose you.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have some highly personal stake in attaining the object of your quest, as determined by you and the GM.',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.knowledge',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Object of Legend',
        condition: {
          type: 'custom',
          description:
            'on Knowledge checks to gain information on the object of your quest (increases to +4 with 10+ ranks)',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'quest', 'critical_hits', 'knowledge'],
  },
  {
    id: 'planar_traveler',
    name: 'Planar Traveler',
    types: ['story'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'Otherworldly heritage or birth marks you as a wanderer between planes. You gain a +2 bonus on Survival checks when outside your home plane. You can identify portals and other planar connections, as well as where they lead, by sight or touch with a successful DC 20 Perception check. Goal: Spend at least 24 consecutive hours on three different planes other than your home plane, or more than a month on a single plane other than your home plane (demiplanes do not count). Completion Benefit: When using spells or magic items to travel to another plane, you always arrive exactly where you intended. When identifying portals, you also gain a glimpse of what you would see, hear, and smell upon arriving.',
    shortDescription:
      'Gain Survival bonuses on other planes and identify portals; complete the goal to always arrive at your intended planar destination.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must be related to an outsider or have been born on a plane other than the Material Plane.',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.survival',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Planar Traveler',
        condition: {
          type: 'custom',
          description: 'on Survival checks when outside your home plane',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'planar', 'outsider', 'survival', 'portals'],
  },
  {
    id: 'precocious_youth',
    name: 'Precocious Youth',
    types: ['general'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'You remove one penalty associated with the young age category, choosing between -2 Constitution, -2 Strength, or -2 Wisdom. Upon reaching adulthood, you may exchange this feat for Great Fortitude, Iron Will, or Lightning Reflexes. Special: This feat can be taken up to three times; each instance removes a different age penalty and must be swapped for a distinct feat upon reaching adulthood.',
    shortDescription:
      'As a young character, remove one age-category ability score penalty; swap this feat for a save feat upon adulthood.',
    prerequisites: [
      {
        type: 'special',
        description: 'Young age category.',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['young_character', 'age', 'ability_score'],
  },
  {
    id: 'superintendent',
    name: 'Superintendent',
    types: ['general'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'When a room you own gains the broken condition, you may repair it for half the normal cost in gold pieces and other capital (rounded up). Buildings and organizations you have created are not affected by capital attrition until 1 month of your absence; from that point, capital attrition affects them as normal.',
    shortDescription:
      'Repair broken rooms at half cost and delay capital attrition on your buildings and organizations by one month.',
    prerequisites: [
      {
        type: 'special',
        description: 'You must own at least one room.',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['downtime', 'buildings', 'capital', 'kingdom_building', 'repair'],
  },
  {
    id: 'truth_seeker',
    name: 'Truth-Seeker',
    types: ['story'],
    source: 'Quests and Campaigns',
    verificationStatus: 'needs_review' as const,
    description:
      'You have visited a forgotten ruin and hunger for lost knowledge. You gain a +2 bonus on all Knowledge (history) checks (increases to +4 with 10 or more ranks). Goal: Discover, explore, and publicly reveal an important secret that has been unknown to the world for at least 100 years. Completion Benefit: Within 10 feet of secret doors, the GM secretly makes an immediate Perception check for you to notice the passage. On Will saves against illusions, you roll twice and take the better result.',
    shortDescription:
      'Gain Knowledge (history) bonuses; complete the goal to automatically detect secret doors and roll twice against illusions.',
    prerequisites: [
      {
        type: 'special',
        description:
          "You must have visited a ruin or forgotten place that has been abandoned for at least five times as long as you've been alive.",
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.knowledge_history',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Truth-Seeker',
        condition: {
          type: 'custom',
          description: 'on Knowledge (history) checks (increases to +4 with 10+ ranks)',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'knowledge', 'history', 'illusions', 'secret_doors'],
  },
];

// CHECKPOINT: last_written=truth_seeker, written=18/18, status=complete
