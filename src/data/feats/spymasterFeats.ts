import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const SPYMASTER_FEATS: FeatDefinition[] = [
  {
    id: 'ascendant',
    name: 'Ascendant',
    description:
      "You and your apparent allies gain a +2 bonus on skill checks to gain influence or request a favor. This bonus ends against individuals or organizations where you've failed relevant checks. Sense Motive checks against you and allies increase by DC 2.",
    shortDescription: '+2 on influence/favor checks; Sense Motive against you is harder.',
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Secret Shame drawback or Bastard-Born background; no publicly known major faults',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Ascendant',
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'social', 'influence', 'diplomacy'],
  },
  {
    id: 'conciliator',
    name: 'Conciliator',
    description:
      'You are skilled at defusing tense situations and mediating disputes. You gain a +2 bonus on Diplomacy checks to improve attitudes and on Sense Motive checks to determine enchantment effects on others.',
    shortDescription: '+2 Diplomacy to improve attitudes and Sense Motive vs. enchantments.',
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'diplomacy', ranks: 3 },
      { type: 'skill', skillId: 'sense_motive', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.diplomacy',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Conciliator',
      },
      {
        type: 'bonus',
        target: 'skill.sense_motive',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Conciliator',
      },
    ],
    activationMode: 'passive',
    tags: ['social', 'diplomacy', 'sense motive', 'espionage'],
  },
  {
    id: 'golden_league_tattoos',
    name: 'Golden League Tattoos',
    description:
      'You have impressive commemorative tattoos visible unless concealed or disguised. You may take 10 on Intimidate checks against viewers of the tattoos despite stress. Knowledge (local) becomes usable for the presence tactic in verbal duels, and successfully winning an exchange with this tactic prevents penalties if repeated within the same duel.',
    shortDescription:
      'Take 10 on Intimidate; use Knowledge (local) for verbal duel presence tactic.',
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Regional trait associated with one of the Dragon Empires nations',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Golden League Tattoos',
      },
    ],
    activationMode: 'passive',
    tags: ['intimidate', 'tattoo', 'dragon empires', 'verbal duel'],
  },
  {
    id: 'inerrant_justice',
    name: 'Inerrant Justice',
    description:
      'Once per day, you can choose to take the maximum possible weapon damage die roll rather than rolling when you hit a foe that is unaware of you or considers you an ally. Bonus dice from sneak attack, surprise attack, and Vital Strike are rolled normally. Upon completing the story goal, this becomes usable once per combat.',
    shortDescription: 'Maximize weapon damage once/day vs. unaware foes; once/combat after goal.',
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Must have witnessed or suffered a grave injustice that went unpunished, or possess An Eye for an Eye or Raiders background',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        source: 'Inerrant Justice',
      },
    ],
    activationMode: 'conditional',
    tags: ['story', 'damage', 'surprise', 'maximize'],
  },
  {
    id: 'infiltrator_story',
    name: 'Infiltrator',
    description:
      'Once per day, when you successfully save against a divination effect, you learn what would have been revealed and can spend an immediate action to feed false information fitting your cover. Upon completing the story goal, whenever a spell or spell-like ability would reveal information about you, you can attempt a Will save to negate the reveal entirely or provide false details instead.',
    shortDescription:
      'Counter divinations with false info; Will save to negate info-gathering after goal.',
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Must have adopted an assumed or secret identity associated with an enemy organization',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Infiltrator',
      },
    ],
    activationMode: 'conditional',
    tags: ['story', 'espionage', 'divination', 'counter-intelligence'],
  },
  {
    id: 'magical_enigma',
    name: 'Magical Enigma',
    description:
      "Select a class feature (bloodline power, eidolon evolutions, revelation, phantom abilities, spirit animal, or witch's familiar) and treat your class level as 1 higher or relevant ability score as 2 higher for calculating that power's effects. This enhances potency but does not grant access to higher-level abilities.",
    shortDescription:
      "Treat class level as +1 or ability score as +2 for one class feature's effects.",
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          "Bloodline, eidolon, mystery, phantom, spirit animal, or witch's familiar class feature; unknown secret about magic or family history",
      },
    ],
    effects: [
      {
        type: 'special',
        value: 1,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Magical Enigma',
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'class feature', 'bloodline', 'mystery', 'familiar'],
  },
  {
    id: 'oblivating_stare',
    name: 'Oblivating Stare',
    description:
      'Targets of your hypnotic stare lose awareness of other creatures. When conditions permit taking 10 on skill checks, other creatures can attempt Stealth checks against the target without needing cover or concealment. If the target fails a Perception check by 5 or more, it forgets the stealthy creature existed. The effect ends and grants 24-hour immunity if the stare ends, the target takes damage, or circumstances change.',
    shortDescription:
      'Hypnotic stare targets lose awareness of nearby creatures; enables allied Stealth.',
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Allure bold stare improvement' },
      { type: 'class_feature', featureName: 'hypnotic stare' },
      { type: 'level', minimum: 5, class: 'Mesmerist' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Oblivating Stare',
      },
    ],
    activationMode: 'conditional',
    tags: ['mesmerist', 'stare', 'stealth', 'memory'],
  },
  {
    id: 'puppet_master',
    name: 'Puppet Master',
    description:
      'When you succeed at a Diplomacy check to make a request by 5 or more, the DCs of additional requests you attempt increase by 1 per request, rather than the normal 5.',
    shortDescription: 'Successful requests only raise DC by 1 instead of 5 for follow-up requests.',
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Survived an encounter with a challenging foe by striking a deal, or possess the Boss, Liege Lord, or Well-Connected Friend background',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Puppet Master',
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'diplomacy', 'social', 'manipulation'],
  },
  {
    id: 'pure_legion_assault',
    name: 'Pure Legion Assault',
    description:
      'You gain a +2 bonus on saving throws against divine spells, effects, and abilities from outsiders. When you make a saving throw against a divine spell, you gain a +1 bonus on attack rolls against the creature that cast it.',
    shortDescription:
      '+2 saves vs. divine/outsider effects; +1 attack vs. divine casters you save against.',
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 1 },
      { type: 'special', description: 'Pure Legion Recruit trait' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.divine',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Pure Legion Assault',
      },
      {
        type: 'bonus',
        target: 'attack.melee',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Pure Legion Assault',
      },
    ],
    activationMode: 'conditional',
    tags: ['rahadoum', 'anti-divine', 'outsider', 'pure legion'],
  },
  {
    id: 'rival_story',
    name: 'Rival',
    description:
      'When you gain this feat, and every 2 character levels thereafter, either you gain 1 skill point or your Fame score increases by 1 (if using the reputation system from Ultimate Campaign).',
    shortDescription: 'Gain 1 skill point or +1 Fame every 2 levels.',
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description: 'Must have at least one enemy who wishes to outdo you',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 1,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Rival',
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'skill points', 'fame', 'reputation'],
  },
  {
    id: 'sense_loyalties',
    name: 'Sense Loyalties',
    description:
      'After interacting with a target for at least 1 hour, you can make a DC 20 Sense Motive check to intuit their loyalty to a deity, patron, or government. The creature can oppose this with a Bluff check. You can attempt to identify one specific loyalty per 2 ranks of Sense Motive by introducing relevant topics into conversation. Introducing topics yourself may alert observers.',
    shortDescription: "Sense Motive to detect a target's loyalties after 1 hour of interaction.",
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_nobility', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 1 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Sense Loyalties',
      },
    ],
    activationMode: 'conditional',
    tags: ['sense motive', 'social', 'espionage', 'loyalty'],
  },
  {
    id: 'supernatural_spy',
    name: 'Supernatural Spy',
    description:
      'Select a class feature (alchemist discovery, arcane discovery, arcanist exploit, or magus arcana). Treat your Intelligence, Wisdom, or Charisma as 2 points higher when calculating effects and save DCs for that selected class feature. This enhances potency but does not grant additional abilities.',
    shortDescription:
      "Treat one ability score as +2 for a selected class feature's effects and DCs.",
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Alchemist discovery, arcane discovery, arcanist exploit, or magus arcana class feature; unknown secret about magic or family history',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Supernatural Spy',
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'class feature', 'alchemist', 'arcanist', 'magus'],
  },
  {
    id: 'wily_warrior',
    name: 'Wily Warrior',
    description:
      'Once per day, you can use your ranks in Sense Motive in place of your total Will saving throw modifier when attempting a Will save. You must decide before making the save. Completion Benefit: Bluff and Intimidate DCs against you increase by 5.',
    shortDescription:
      'Use Sense Motive ranks as Will save 1/day; +5 DC vs. Bluff/Intimidate after goal.',
    source: "Pathfinder Player Companion: Spymaster's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['story'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 1 },
      { type: 'skill', skillId: 'sense_motive', ranks: 1 },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.will',
        source: 'Wily Warrior',
      },
    ],
    activationMode: 'conditional',
    tags: ['story', 'will save', 'sense motive', 'bluff'],
  },
];
