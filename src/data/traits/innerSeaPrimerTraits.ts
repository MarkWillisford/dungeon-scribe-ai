import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const INNER_SEA_PRIMER_TRAITS: TraitDefinition[] = [
  // ==================== REGIONAL TRAITS — ABSALOM ====================
  {
    id: 'absalom_hotspur',
    name: 'Absalom Hotspur',
    description:
      'You grew up on the streets of Absalom and have worked as both guide and bodyguard for visitors to the city. You gain a +1 trait bonus on Initiative checks and a +1 trait bonus on Knowledge (local) checks.',
    shortDescription: '+1 Initiative, +1 Knowledge (local)',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Absalom',
    prerequisites: [{ type: 'region', regionName: 'Absalom' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Absalom Hotspur',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Absalom Hotspur',
      },
    ],
    tags: ['absalom', 'initiative', 'knowledge_local', 'urban'],
  },
  // ==================== REGIONAL TRAITS — ANDORAN ====================
  {
    id: 'andoren_freedom_fighter',
    name: 'Andoren Freedom Fighter',
    description:
      "You've dedicated your life to fighting against oppression, tyranny, and slavery. You gain a +1 trait bonus on attack rolls and damage rolls against slavers or any creature unlawfully holding someone captive.",
    shortDescription: '+1 attack and damage against slavers and captors',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Andoran',
    prerequisites: [{ type: 'region', regionName: 'Andoran' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack_vs_slavers',
        value: 1,
        source: 'Andoren Freedom Fighter',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage_vs_slavers',
        value: 1,
        source: 'Andoren Freedom Fighter',
      },
    ],
    tags: ['andoran', 'combat', 'slavers', 'freedom'],
  },
  {
    id: 'freed_slave_andoran',
    name: 'Freed Slave (Andoran)',
    description:
      'You were born into or sold into slavery but gained freedom through the efforts of Andoren abolitionists. Your resilience during captivity forged a strong will that enabled you to rebuild your life after emancipation. You gain a +1 trait bonus on Will saves.',
    shortDescription: '+1 Will saves',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Andoran',
    prerequisites: [{ type: 'region', regionName: 'Andoran' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Freed Slave (Andoran)',
      },
    ],
    tags: ['andoran', 'save', 'will', 'resilience'],
  },
  // ==================== REGIONAL TRAITS — BELKZEN ====================
  {
    id: 'dominator',
    name: 'Dominator',
    description:
      'You grew up in the Hold of Belkzen, where orc culture values dominance and strength above all else. You gain a +2 trait bonus on all attempts to demoralize an opponent in combat using the Intimidate skill.',
    shortDescription: '+2 Intimidate to demoralize in combat',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Belkzen',
    prerequisites: [{ type: 'region', regionName: 'Belkzen' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate_demoralize',
        value: 2,
        source: 'Dominator',
      },
    ],
    tags: ['belkzen', 'intimidate', 'demoralize', 'combat'],
  },
  {
    id: 'linebreaker',
    name: 'Linebreaker',
    description:
      'Growing up along the border between Belkzen and Lastwall has taught you how to storm enemy battle lines and quickly overwhelm them. When charging, add 10 feet to your base speed.',
    shortDescription: '+10 feet to speed when charging',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Belkzen',
    prerequisites: [{ type: 'region', regionName: 'Belkzen' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'speed.charge',
        value: 10,
        source: 'Linebreaker',
      },
    ],
    tags: ['belkzen', 'charge', 'speed', 'combat'],
  },
  // ==================== REGIONAL TRAITS — BREVOY ====================
  {
    id: 'issian_noble',
    name: 'Issian Noble',
    description:
      'You are a scion of one of the warring noble houses of Brevoy, and are well versed in maneuvering through the cutthroat world of Brevic politics. You gain a +1 trait bonus on Knowledge (nobility) and Sense Motive checks.',
    shortDescription: '+1 Knowledge (nobility) and Sense Motive',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Brevoy',
    prerequisites: [{ type: 'region', regionName: 'Brevoy' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Issian Noble',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Issian Noble',
      },
    ],
    tags: ['brevoy', 'nobility', 'sense_motive', 'politics'],
  },
  {
    id: 'swordlords_page',
    name: "Swordlord's Page",
    description:
      "You have received training under the Aldori swordlords of Brevoy, though you have not yet achieved full swordlord status yourself. You gain a +1 attack bonus to confirm critical hits when using an edged weapon you are proficient with.",
    shortDescription: '+1 to confirm critical hits with edged weapons',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Brevoy',
    prerequisites: [{ type: 'region', regionName: 'Brevoy' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'critical_confirm.edged',
        value: 1,
        source: "Swordlord's Page",
      },
    ],
    tags: ['brevoy', 'aldori', 'critical', 'edged_weapon'],
  },
  // ==================== REGIONAL TRAITS — CHELIAX ====================
  {
    id: 'aspiring_hellknight',
    name: 'Aspiring Hellknight',
    description:
      'Your family has a legacy of service in the Hellknights. Your strict upbringing and military discipline have cultivated an commanding presence. You gain a +1 trait bonus on Intimidate checks and Intimidate is always a class skill for you.',
    shortDescription: '+1 Intimidate, Intimidate is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Cheliax',
    prerequisites: [{ type: 'region', regionName: 'Cheliax' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Aspiring Hellknight',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.intimidate',
        value: 0,
        source: 'Aspiring Hellknight',
      },
    ],
    tags: ['cheliax', 'intimidate', 'hellknight', 'class_skill'],
  },
  {
    id: 'secret_revolutionary',
    name: 'Secret Revolutionary',
    description:
      'You are dedicated to restoring Cheliax to its former glory prior to House Thrune. You have undergone rigorous training to endure interrogation and torture. You gain a +1 trait bonus on Will saves against mind-affecting effects and a +1 trait bonus on Fortitude saves against drugs or poisons.',
    shortDescription: '+1 Will vs. mind-affecting, +1 Fortitude vs. drugs/poisons',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Cheliax',
    prerequisites: [{ type: 'region', regionName: 'Cheliax' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will_vs_mind_affecting',
        value: 1,
        source: 'Secret Revolutionary',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude_vs_poison',
        value: 1,
        source: 'Secret Revolutionary',
      },
    ],
    tags: ['cheliax', 'save', 'will', 'fortitude', 'mind_affecting', 'poison'],
  },
  // ==================== REGIONAL TRAITS — DRUMA ====================
  {
    id: 'devotee_of_kalistrade',
    name: 'Devotee of Kalistrade',
    description:
      "As an adherent of the Prophecies of Kalistrade, you understand the significance of executing favorable transactions. You gain a +1 trait bonus on Appraise checks and a +1 trait bonus on Bluff checks when attempting to negotiate deals with those who don't share your faith.",
    shortDescription: '+1 Appraise, +1 Bluff to negotiate deals',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Druma',
    prerequisites: [{ type: 'region', regionName: 'Druma' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Devotee of Kalistrade',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff_negotiate',
        value: 1,
        source: 'Devotee of Kalistrade',
      },
    ],
    tags: ['druma', 'appraise', 'bluff', 'trade', 'kalistrade'],
  },
  {
    id: 'purchased_loyalty',
    name: 'Purchased Loyalty',
    description:
      'As a member of the Drumish Mercenary League, you maintain unwavering loyalty to whoever has contracted your services until that agreement ends. Once per day, when defending someone who has purchased your services, you may roll twice when making a Will save against charm effects and take the better result.',
    shortDescription: 'Once/day roll twice on Will vs. charm when defending employer',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Druma',
    prerequisites: [{ type: 'region', regionName: 'Druma' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'save.will_vs_charm_reroll',
        value: 0,
        source: 'Purchased Loyalty',
      },
    ],
    tags: ['druma', 'save', 'will', 'charm', 'reroll', 'mercenary'],
  },
  // ==================== REGIONAL TRAITS — FIVE KINGS MOUNTAINS ====================
  {
    id: 'mountain_guide',
    name: 'Mountain Guide',
    description:
      'You are skilled at getting along in the mountains, enabling you to find hidden trails and secret entrances into the caverns beneath mountains. You gain a +1 trait bonus on Knowledge (geography) and Survival checks in mountainous areas, and Knowledge (geography) becomes a class skill for you.',
    shortDescription: '+1 Knowledge (geography) and Survival in mountains, class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Five Kings Mountains',
    prerequisites: [{ type: 'region', regionName: 'Five Kings Mountains' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_geography',
        value: 1,
        source: 'Mountain Guide',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival_mountain',
        value: 1,
        source: 'Mountain Guide',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_geography',
        value: 0,
        source: 'Mountain Guide',
      },
    ],
    tags: ['five_kings_mountains', 'knowledge_geography', 'survival', 'mountains', 'class_skill'],
  },
  {
    id: 'perseverance',
    name: 'Perseverance',
    description:
      'The hardships of the Five Kings Mountains have instilled in you the ability to overcome adversity through determination. When you have more than one Will saving throw to overcome an effect (such as from greater command or hold person, or by using the good fortune ability of the Luck domain), you receive a +3 trait bonus on the extra Will saves against that effect.',
    shortDescription: '+3 on additional Will saves against repeating effects',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Five Kings Mountains',
    prerequisites: [{ type: 'region', regionName: 'Five Kings Mountains' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will_repeated',
        value: 3,
        source: 'Perseverance',
      },
    ],
    tags: ['five_kings_mountains', 'save', 'will', 'mind_affecting'],
  },
  // ==================== REGIONAL TRAITS — GALT ====================
  {
    id: 'inspiring_speaker',
    name: 'Inspiring Speaker',
    description:
      'You have training in the art of public speaking and crowd management, developing skills in both energizing and pacifying large audiences. You gain a +1 trait bonus on Bluff and Diplomacy checks when addressing crowds of 10 people or more.',
    shortDescription: '+1 Bluff and Diplomacy with crowds of 10+',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Galt',
    prerequisites: [{ type: 'region', regionName: 'Galt' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff_crowd',
        value: 1,
        source: 'Inspiring Speaker',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy_crowd',
        value: 1,
        source: 'Inspiring Speaker',
      },
    ],
    tags: ['galt', 'bluff', 'diplomacy', 'crowds', 'social'],
  },
  {
    id: 'silent_watcher',
    name: 'Silent Watcher',
    description:
      'You can sense an ugly mood brewing in a crowd, and know how to dodge wrathful mobs when they seek victims for their anger. You gain a +1 trait bonus on Sense Motive checks in crowds and a +1 trait bonus on Stealth checks in city streets.',
    shortDescription: '+1 Sense Motive in crowds, +1 Stealth in city streets',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Galt',
    prerequisites: [{ type: 'region', regionName: 'Galt' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive_crowds',
        value: 1,
        source: 'Silent Watcher',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth_urban',
        value: 1,
        source: 'Silent Watcher',
      },
    ],
    tags: ['galt', 'sense_motive', 'stealth', 'urban', 'crowd'],
  },
  // ==================== REGIONAL TRAITS — GEB ====================
  {
    id: 'enemy_of_the_undead',
    name: 'Enemy of the Undead',
    description:
      "Your disgust with Geb's undead aristocracy and how it treats the living has fostered a deep-seated hatred that provides supernatural resistance. You gain a +2 trait bonus on saving throws against any spells or spell-like abilities from an undead creature.",
    shortDescription: '+2 saves vs. spells from undead',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Geb',
    prerequisites: [{ type: 'region', regionName: 'Geb' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all_vs_undead_spells',
        value: 2,
        source: 'Enemy of the Undead',
      },
    ],
    tags: ['geb', 'save', 'undead', 'resistance'],
  },
  {
    id: 'friend_of_the_dead',
    name: 'Friend of the Dead',
    description:
      'Your close association with the intelligent undead of Geb has imparted some of their otherworldly essence to you, and this essence helps you in your dealings with the undead. You gain a +2 trait bonus on Diplomacy checks made against sentient undead creatures.',
    shortDescription: '+2 Diplomacy against sentient undead',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Geb',
    prerequisites: [{ type: 'region', regionName: 'Geb' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy_vs_undead',
        value: 2,
        source: 'Friend of the Dead',
      },
    ],
    tags: ['geb', 'diplomacy', 'undead', 'social'],
  },
  // ==================== REGIONAL TRAITS — GOKA ====================
  {
    id: 'cosmopolitan',
    name: 'Cosmopolitan',
    description:
      'Your experience in Goka, where many peoples intersect and numerous languages are spoken, has enhanced your communication abilities. You gain a +1 trait bonus on Linguistics checks and Linguistics becomes a class skill for you.',
    shortDescription: '+1 Linguistics, Linguistics is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Goka',
    prerequisites: [{ type: 'region', regionName: 'Goka' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 1,
        source: 'Cosmopolitan',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.linguistics',
        value: 0,
        source: 'Cosmopolitan',
      },
    ],
    tags: ['goka', 'linguistics', 'languages', 'class_skill'],
  },
  // ==================== REGIONAL TRAITS — IRRISEN ====================
  {
    id: 'winter_warrior',
    name: 'Winter Warrior',
    description:
      "You grew up in Irrisen's frozen landscape, making survival in harsh winter conditions instinctive. You gain a +1 trait bonus on Stealth and Survival checks in ice- or snow-covered terrain.",
    shortDescription: '+1 Stealth and Survival in ice/snow terrain',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Irrisen',
    prerequisites: [{ type: 'region', regionName: 'Irrisen' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth_snow',
        value: 1,
        source: 'Winter Warrior',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival_snow',
        value: 1,
        source: 'Winter Warrior',
      },
    ],
    tags: ['irrisen', 'stealth', 'survival', 'cold', 'snow'],
  },
  {
    id: 'winters_soul',
    name: "Winter's Soul",
    description:
      "The eternal winter of Irrisen is as much a part of you as it is the land. You may cast ray of frost once per day as a spell-like ability, using your highest caster level (or CL 1st if you lack caster levels).",
    shortDescription: 'Cast ray of frost 1/day as spell-like ability',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Irrisen',
    prerequisites: [{ type: 'region', regionName: 'Irrisen' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'spell_like.ray_of_frost',
        value: 0,
        source: "Winter's Soul",
      },
    ],
    tags: ['irrisen', 'spell_like', 'cold', 'ray_of_frost'],
  },
  // ==================== REGIONAL TRAITS — ISGER ====================
  {
    id: 'bounty_hunter',
    name: 'Bounty Hunter',
    description:
      'You have dedicated yourself to apprehending the bandits plaguing Isger. You gain a +1 trait bonus on Survival checks to find or follow tracks and a +1 trait bonus on Perception checks to avoid being surprised.',
    shortDescription: '+1 Survival to track, +1 Perception vs. surprise',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Isger',
    prerequisites: [{ type: 'region', regionName: 'Isger' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival_track',
        value: 1,
        source: 'Bounty Hunter',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception_surprise',
        value: 1,
        source: 'Bounty Hunter',
      },
    ],
    tags: ['isger', 'survival', 'perception', 'tracking'],
  },
  {
    id: 'isgeri_orphan',
    name: 'Isgeri Orphan',
    description:
      "You were raised in one of the many Asmodean orphanages throughout the Isgeri countryside. Whether or not you took to their teachings, your strict indoctrination at the hands of the 'devil nuns' has toughened your body to punishment. You gain a +1 trait bonus on Fortitude saves.",
    shortDescription: '+1 Fortitude saves',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Isger',
    prerequisites: [{ type: 'region', regionName: 'Isger' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Isgeri Orphan',
      },
    ],
    tags: ['isger', 'save', 'fortitude', 'asmodean'],
  },
  // ==================== REGIONAL TRAITS — JALMERAY ====================
  {
    id: 'candidate_for_perfection',
    name: 'Candidate for Perfection',
    description:
      'You have begun training to enter one of the Houses of Perfection, and have honed your body, mind, and spirit into one well-trained weapon. You gain a +1 trait bonus on attack of opportunity attack rolls made with unarmed strikes.',
    shortDescription: '+1 attack on attacks of opportunity with unarmed strikes',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Jalmeray',
    prerequisites: [{ type: 'region', regionName: 'Jalmeray' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.aoo_unarmed',
        value: 1,
        source: 'Candidate for Perfection',
      },
    ],
    tags: ['jalmeray', 'unarmed', 'attack_of_opportunity', 'combat'],
  },
  {
    id: 'secret_of_the_impossible_kingdom',
    name: 'Secret of the Impossible Kingdom',
    description:
      'You have studied the ancient lore of Vudra at a monastery in Jalmeray, and have learned a mystical secret that empowers your spellcasting. Select one spell; whenever you cast that spell, it functions as if cast by a caster one level higher.',
    shortDescription: 'One chosen spell functions at +1 caster level',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Jalmeray',
    prerequisites: [{ type: 'region', regionName: 'Jalmeray' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'caster_level.chosen_spell',
        value: 1,
        source: 'Secret of the Impossible Kingdom',
      },
    ],
    tags: ['jalmeray', 'spellcasting', 'caster_level', 'vudra'],
  },
  // ==================== REGIONAL TRAITS — KATAPESH ====================
  {
    id: 'merchants_child',
    name: "Merchant's Child",
    description:
      'One of your close relatives was a gifted merchant in the bustling bazaars of Katapesh, and taught you early in life how to see the innate value in any object. You gain a +1 trait bonus on Appraise checks and Appraise becomes a class skill for you.',
    shortDescription: '+1 Appraise, Appraise is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Katapesh',
    prerequisites: [{ type: 'region', regionName: 'Katapesh' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: "Merchant's Child",
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.appraise',
        value: 0,
        source: "Merchant's Child",
      },
    ],
    tags: ['katapesh', 'appraise', 'trade', 'class_skill'],
  },
  {
    id: 'pesh_addict',
    name: 'Pesh Addict',
    description:
      'You have a history with pesh addiction, which may or may not have been overcome. Your past struggles with the narcotic substance have provided unique insights into that subculture. Your starting wealth is reduced to half the normal amount. You gain a +1 trait bonus on Bluff, Knowledge (local), and Sense Motive checks, and one of these three skills (your choice) becomes a class skill for you. This trait may only be taken at 1st level.',
    shortDescription: '+1 Bluff, Knowledge (local), Sense Motive; one becomes class skill; half starting wealth',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Katapesh',
    prerequisites: [
      { type: 'region', regionName: 'Katapesh' },
      { type: 'special', description: 'Must be taken at 1st level' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Pesh Addict',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Pesh Addict',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Pesh Addict',
      },
    ],
    tags: ['katapesh', 'bluff', 'knowledge_local', 'sense_motive', 'addiction'],
  },
  // ==================== REGIONAL TRAITS — KYONIN ====================
  {
    id: 'iadaran_illusionist',
    name: 'Iadaran Illusionist',
    description:
      'You have lived in Iadara for so long that you are very familiar with illusions. You gain a +1 trait bonus on caster level checks made with illusion spells and a +1 trait bonus on Will saves to disbelieve illusions.',
    shortDescription: '+1 CL with illusion spells, +1 Will to disbelieve illusions',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Kyonin',
    prerequisites: [{ type: 'region', regionName: 'Kyonin' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'caster_level.illusion',
        value: 1,
        source: 'Iadaran Illusionist',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will_disbelieve_illusion',
        value: 1,
        source: 'Iadaran Illusionist',
      },
    ],
    tags: ['kyonin', 'illusion', 'caster_level', 'save', 'elf'],
  },
  {
    id: 'treerazors_bane',
    name: "Treerazor's Bane",
    description:
      "You have experience combating Treerazer and the creatures under the demon's influence, providing training in identifying and exploiting their vulnerabilities. You gain a +2 trait bonus on weapon damage against demons, evil fey, and plants and animals corrupted by evil.",
    shortDescription: '+2 weapon damage vs. demons, evil fey, and corrupted plants/animals',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Kyonin',
    prerequisites: [{ type: 'region', regionName: 'Kyonin' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage_vs_demons_evil_fey',
        value: 2,
        source: "Treerazor's Bane",
      },
    ],
    tags: ['kyonin', 'damage', 'demons', 'fey', 'combat', 'elf'],
  },
  // ==================== REGIONAL TRAITS — LANDS OF THE LINNORM KINGS ====================
  {
    id: 'friend_of_the_fey',
    name: 'Friend of the Fey',
    description:
      'You possess a distinctive connection with fey creatures due to growing up near them in the Lands of the Linnorm Kings. You gain a +2 trait bonus on Diplomacy checks against fey creatures.',
    shortDescription: '+2 Diplomacy against fey',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Lands of the Linnorm Kings',
    prerequisites: [{ type: 'region', regionName: 'Lands of the Linnorm Kings' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy_vs_fey',
        value: 2,
        source: 'Friend of the Fey',
      },
    ],
    tags: ['linnorm_kings', 'diplomacy', 'fey', 'social'],
  },
  {
    id: 'viking_blood',
    name: 'Viking Blood',
    description:
      'You have the imposing physique and fearsome reputation characteristic of northern warriors. Your intimidating appearance and unpredictable demeanor give you an edge in social confrontations. You gain a +1 trait bonus on Intimidate checks and Intimidate is always a class skill for you.',
    shortDescription: '+1 Intimidate, Intimidate is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Lands of the Linnorm Kings',
    prerequisites: [{ type: 'region', regionName: 'Lands of the Linnorm Kings' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Viking Blood',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.intimidate',
        value: 0,
        source: 'Viking Blood',
      },
    ],
    tags: ['linnorm_kings', 'intimidate', 'viking', 'class_skill'],
  },
  // ==================== REGIONAL TRAITS — LASTWALL ====================
  {
    id: 'crusader_tactician',
    name: 'Crusader Tactician',
    description:
      "You received training at Vigil's Crusader War College, encompassing knowledge of heraldry and siege tactics. You gain a +1 trait bonus on Knowledge (engineering) and Knowledge (nobility) checks, and one of these two skills becomes a class skill for you.",
    shortDescription: '+1 Knowledge (engineering) and Knowledge (nobility); one is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Lastwall',
    prerequisites: [{ type: 'region', regionName: 'Lastwall' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_engineering',
        value: 1,
        source: 'Crusader Tactician',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Crusader Tactician',
      },
    ],
    tags: ['lastwall', 'knowledge_engineering', 'knowledge_nobility', 'military'],
  },
  {
    id: 'lastwall_cavalry_rider',
    name: 'Lastwall Cavalry Rider',
    description:
      'You grew up riding the formidable warhorses native to Lastwall from an early age, developing exceptional horsemanship skills through lifelong practice. You gain a +1 trait bonus on Ride checks and Ride becomes a class skill for you.',
    shortDescription: '+1 Ride, Ride is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Lastwall',
    prerequisites: [{ type: 'region', regionName: 'Lastwall' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.ride',
        value: 1,
        source: 'Lastwall Cavalry Rider',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.ride',
        value: 0,
        source: 'Lastwall Cavalry Rider',
      },
    ],
    tags: ['lastwall', 'ride', 'cavalry', 'class_skill'],
  },
  // ==================== REGIONAL TRAITS — MANA WASTES / ALKENSTAR ====================
  {
    id: 'alkenstar_defender',
    name: 'Alkenstar Defender',
    description:
      'You have lived in Alkenstar and served in its militia. You know just where to aim to do the most damage. You receive a +1 trait bonus on all rolls to confirm critical hits when using ranged weapons.',
    shortDescription: '+1 to confirm critical hits with ranged weapons',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Mana Wastes',
    prerequisites: [{ type: 'region', regionName: 'Mana Wastes' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'critical_confirm.ranged',
        value: 1,
        source: 'Alkenstar Defender',
      },
    ],
    tags: ['alkenstar', 'mana_wastes', 'ranged', 'critical', 'combat'],
  },
  {
    id: 'mana_wastes_survivalist',
    name: 'Mana Wastes Survivalist',
    description:
      'You grew up in or extensively explored the Mana Wastes, a harsh and blighted region. The extreme environment has strengthened your physical resilience and conditioning. You gain a +1 trait bonus on Fortitude saves.',
    shortDescription: '+1 Fortitude saves',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Mana Wastes',
    prerequisites: [{ type: 'region', regionName: 'Mana Wastes' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Mana Wastes Survivalist',
      },
    ],
    tags: ['mana_wastes', 'save', 'fortitude', 'survivalist'],
  },
  // ==================== REGIONAL TRAITS — MENDEV ====================
  {
    id: 'child_of_the_crusades',
    name: 'Child of the Crusades',
    description:
      'Your parents fought against the demonic forces of the Worldwound. You have inherited their resilience and determination in the face of overwhelming darkness. You gain a +2 trait bonus on all saves against fear.',
    shortDescription: '+2 saves vs. fear',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Mendev',
    prerequisites: [{ type: 'region', regionName: 'Mendev' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all_vs_fear',
        value: 2,
        source: 'Child of the Crusades',
      },
    ],
    tags: ['mendev', 'save', 'fear', 'crusade', 'worldwound'],
  },
  {
    id: 'cynic',
    name: 'Cynic',
    description:
      'As a native of Mendev, you have witnessed numerous individuals claiming religious justification for their actions. This experience has taught you to evaluate people based on their actual conduct rather than their stated intentions. You gain a +1 trait bonus on Sense Motive checks and Sense Motive is always a class skill for you.',
    shortDescription: '+1 Sense Motive, Sense Motive is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Mendev',
    prerequisites: [{ type: 'region', regionName: 'Mendev' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Cynic',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.sense_motive',
        value: 0,
        source: 'Cynic',
      },
    ],
    tags: ['mendev', 'sense_motive', 'class_skill', 'crusade'],
  },
  // ==================== REGIONAL TRAITS — MOLTHUNE ====================
  {
    id: 'imperial_soldier',
    name: 'Imperial Soldier',
    description:
      "You've served in the Imperial Army of Molthune. Choose one of the following skills: Heal, Intimidate, or Ride. You gain a +1 trait bonus to the chosen skill and that skill becomes a class skill for you.",
    shortDescription: '+1 to Heal, Intimidate, or Ride (choice); class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Molthune',
    prerequisites: [{ type: 'region', regionName: 'Molthune' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.choice_heal_intimidate_ride',
        value: 1,
        source: 'Imperial Soldier',
      },
    ],
    tags: ['molthune', 'heal', 'intimidate', 'ride', 'military', 'class_skill'],
  },
  {
    id: 'signaler',
    name: 'Signaler',
    description:
      "By observing Imperial military practices in Molthune, you have learned to employ flags, smoke signals, and other methods to send secret messages. You gain a +5 trait bonus on Bluff checks to receive secret messages and a +5 trait bonus on Sense Motive checks to intercept messages.",
    shortDescription: '+5 Bluff to receive secret messages, +5 Sense Motive to intercept messages',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Molthune',
    prerequisites: [{ type: 'region', regionName: 'Molthune' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff_secret_messages',
        value: 5,
        source: 'Signaler',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive_intercept',
        value: 5,
        source: 'Signaler',
      },
    ],
    tags: ['molthune', 'bluff', 'sense_motive', 'secret_messages', 'military'],
  },
  // ==================== REGIONAL TRAITS — MWANGI EXPANSE ====================
  {
    id: 'artifact_hunter',
    name: 'Artifact Hunter',
    description:
      'You possess knowledge of legendary artifacts and treasures said to be hidden throughout the Mwangi Expanse, drawing on both historical accounts and geographical understanding of the region. You gain a +1 trait bonus on Knowledge (geography) and Knowledge (history) checks, and one of these two Knowledge skills becomes a class skill for you.',
    shortDescription: '+1 Knowledge (geography) and Knowledge (history); one is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Mwangi Expanse',
    prerequisites: [{ type: 'region', regionName: 'Mwangi Expanse' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_geography',
        value: 1,
        source: 'Artifact Hunter',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Artifact Hunter',
      },
    ],
    tags: ['mwangi_expanse', 'knowledge_geography', 'knowledge_history', 'exploration'],
  },
  {
    id: 'jungle_walker',
    name: 'Jungle Walker',
    description:
      'You have training in navigating the treacherous jungle environment of the Mwangi Expanse, including knowledge of how to avoid its most perilous hazards. You gain a +2 trait bonus on Survival checks in jungle terrain.',
    shortDescription: '+2 Survival in jungle terrain',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Mwangi Expanse',
    prerequisites: [{ type: 'region', regionName: 'Mwangi Expanse' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival_jungle',
        value: 2,
        source: 'Jungle Walker',
      },
    ],
    tags: ['mwangi_expanse', 'survival', 'jungle', 'wilderness'],
  },
  // ==================== REGIONAL TRAITS — NEX ====================
  {
    id: 'oenopion_alchemist',
    name: 'Oenopion Alchemist',
    description:
      'You studied with the alchemists of Oenopion, perfecting your craft in the homunculus factories, golemworks, and ooze colony. You gain a +1 trait bonus on Craft (alchemy) checks.',
    shortDescription: '+1 Craft (alchemy)',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Nex',
    prerequisites: [{ type: 'region', regionName: 'Nex' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craft_alchemy',
        value: 1,
        source: 'Oenopion Alchemist',
      },
    ],
    tags: ['nex', 'craft_alchemy', 'alchemy'],
  },
  {
    id: 'quantium_university_graduate',
    name: 'Quantium University Graduate',
    description:
      "You graduated from one of Quantium's justly famous arcane academies, and the rigorous program of study has honed your mind. You gain a +2 trait bonus on concentration checks when casting arcane spells.",
    shortDescription: '+2 concentration checks for arcane spells',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Nex',
    prerequisites: [{ type: 'region', regionName: 'Nex' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'concentration.arcane',
        value: 2,
        source: 'Quantium University Graduate',
      },
    ],
    tags: ['nex', 'concentration', 'arcane', 'spellcasting'],
  },
  // ==================== REGIONAL TRAITS — NIDAL ====================
  {
    id: 'nidalese_shadowcaster',
    name: 'Nidalese Shadowcaster',
    description:
      'You have trained with the shadow magic practitioners of Nidal and gained expertise in their distinctive spellcasting techniques. Select one spell bearing the shadow descriptor; whenever you cast that particular spell, its effect manifests at +1 caster level.',
    shortDescription: 'One chosen shadow spell functions at +1 caster level',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Nidal',
    prerequisites: [{ type: 'region', regionName: 'Nidal' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'caster_level.shadow_spell',
        value: 1,
        source: 'Nidalese Shadowcaster',
      },
    ],
    tags: ['nidal', 'shadow', 'caster_level', 'spellcasting'],
  },
  {
    id: 'uskwood_hunter',
    name: 'Uskwood Hunter',
    description:
      "You served the Umbral Court in Pangolais, covertly tracking intruders through the city's shadowed streets and reporting their whereabouts to local officials. You gain a +1 trait bonus on Stealth checks and Stealth becomes a class skill for you.",
    shortDescription: '+1 Stealth, Stealth is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Nidal',
    prerequisites: [{ type: 'region', regionName: 'Nidal' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth',
        value: 1,
        source: 'Uskwood Hunter',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.stealth',
        value: 0,
        source: 'Uskwood Hunter',
      },
    ],
    tags: ['nidal', 'stealth', 'class_skill', 'shadow'],
  },
  // ==================== REGIONAL TRAITS — NIRMATHAS ====================
  {
    id: 'fangwood_diplomat',
    name: 'Fangwood Diplomat',
    description:
      "You've lived and worked among the disparate guerrilla groups of the Fangwood. You gain a +1 trait bonus on Diplomacy checks and Diplomacy becomes a class skill for you.",
    shortDescription: '+1 Diplomacy, Diplomacy is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Nirmathas',
    prerequisites: [{ type: 'region', regionName: 'Nirmathas' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Fangwood Diplomat',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.diplomacy',
        value: 0,
        source: 'Fangwood Diplomat',
      },
    ],
    tags: ['nirmathas', 'diplomacy', 'class_skill', 'fangwood'],
  },
  {
    id: 'nirmathi_militia',
    name: 'Nirmathi Militia',
    description:
      "You have served in one of Nirmathas's militia bands and acquired practical combat experience. Choose one skill: Profession (soldier), Ride, or Survival. You gain a +1 trait bonus to checks with that skill and treat it as a class skill regardless of class.",
    shortDescription: '+1 to Profession (soldier), Ride, or Survival (choice); class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Nirmathas',
    prerequisites: [{ type: 'region', regionName: 'Nirmathas' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.choice_profession_soldier_ride_survival',
        value: 1,
        source: 'Nirmathi Militia',
      },
    ],
    tags: ['nirmathas', 'profession_soldier', 'ride', 'survival', 'militia', 'class_skill'],
  },
  // ==================== REGIONAL TRAITS — NUMERIA ====================
  {
    id: 'technic_tinkerer',
    name: 'Technic Tinkerer',
    description:
      "You have uncovered minor secrets of the Technic League and mastered a modest bit of magic. Select one 0-level spell; you may cast it once per day as a spell-like ability using your highest caster level (or CL 1st if you have no caster level).",
    shortDescription: 'Cast one chosen 0-level spell 1/day as spell-like ability',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Numeria',
    prerequisites: [{ type: 'region', regionName: 'Numeria' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'spell_like.chosen_cantrip',
        value: 0,
        source: 'Technic Tinkerer',
      },
    ],
    tags: ['numeria', 'spell_like', 'cantrip', 'technic_league'],
  },
  {
    id: 'touched_by_the_sky',
    name: 'Touched by the Sky',
    description:
      "You obtained a rare vial of fluid from crashed Numerian wreckage on the plains. After consuming it to avoid detection, you gained a supernatural ability. You can stabilize a dying creature with a touch as a standard action.",
    shortDescription: 'Stabilize a dying creature with a touch (standard action)',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Numeria',
    prerequisites: [{ type: 'region', regionName: 'Numeria' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'ability.stabilize_touch',
        value: 0,
        source: 'Touched by the Sky',
      },
    ],
    tags: ['numeria', 'stabilize', 'healing', 'supernatural'],
  },
  // ==================== REGIONAL TRAITS — OSIRION ====================
  {
    id: 'antiquities_smuggler',
    name: 'Antiquities Smuggler',
    description:
      "You have experience smuggling contraband relics from Osirion's ancient past, developing practical skills through years of moving illegal antiquities. Choose one of the following skills: Appraise, Bluff, or Sleight of Hand. You gain a +1 trait bonus on that skill and it is always a class skill for you.",
    shortDescription: '+1 to Appraise, Bluff, or Sleight of Hand (choice); class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Osirion',
    prerequisites: [{ type: 'region', regionName: 'Osirion' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.choice_appraise_bluff_sleight_of_hand',
        value: 1,
        source: 'Antiquities Smuggler',
      },
    ],
    tags: ['osirion', 'appraise', 'bluff', 'sleight_of_hand', 'class_skill'],
  },
  {
    id: 'osirionologist',
    name: 'Osirionologist',
    description:
      'You have studied the history of ancient Osirion, and may have even ventured inside one of the great pyramids. You gain a +1 trait bonus on Knowledge (engineering) and Knowledge (history) checks, one of these knowledge skills becomes a class skill for you, and you may select Ancient Osiriani as one of your bonus languages.',
    shortDescription: '+1 Knowledge (engineering) and (history); one class skill; bonus language',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Osirion',
    prerequisites: [{ type: 'region', regionName: 'Osirion' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_engineering',
        value: 1,
        source: 'Osirionologist',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Osirionologist',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'bonus_language.ancient_osiriani',
        value: 0,
        source: 'Osirionologist',
      },
    ],
    tags: ['osirion', 'knowledge_engineering', 'knowledge_history', 'language', 'history'],
  },
  // ==================== REGIONAL TRAITS — QADIRA ====================
  {
    id: 'genie_caller',
    name: 'Genie-Caller',
    description:
      'You have studied the magical practices of summoning genies, enhancing your overall conjuration abilities. Once per day, you may cast one conjuration (summoning) spell as if your caster level were 2 higher than normal.',
    shortDescription: 'Once/day cast one conjuration (summoning) spell at +2 caster level',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Qadira',
    prerequisites: [{ type: 'region', regionName: 'Qadira' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'caster_level.conjuration_summoning',
        value: 2,
        source: 'Genie-Caller',
      },
    ],
    tags: ['qadira', 'conjuration', 'summoning', 'caster_level', 'genie'],
  },
  {
    id: 'rider_of_paresh',
    name: 'Rider of Paresh',
    description:
      "You call the Plains of Paresh home, whether you were born among the plains' tribes or in the glittering towers of Katheer. The horses are your kin. When mounted and charging, your mount's speed increases by 10 feet. You must possess the Mounted Combat feat to select this trait.",
    shortDescription: "Mounted charge: +10 feet to mount's speed (requires Mounted Combat)",
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Qadira',
    prerequisites: [
      { type: 'region', regionName: 'Qadira' },
      { type: 'special', description: 'Mounted Combat feat' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'speed.mount_charge',
        value: 10,
        source: 'Rider of Paresh',
      },
    ],
    tags: ['qadira', 'mounted', 'charge', 'speed', 'cavalry'],
  },
  // ==================== REGIONAL TRAITS — RAHADOUM ====================
  {
    id: 'rahadoumi_cultist',
    name: 'Rahadoumi Cultist',
    description:
      'You are a secret practitioner of a forbidden faith in Rahadoum. Through your experience, you have mastered the art of concealing your spiritual beliefs while learning to recognize fellow believers through their subtle signals. You gain a +5 trait bonus on Bluff checks to receive secret messages and a +5 trait bonus on Sense Motive checks to intercept secret messages from others of your faith.',
    shortDescription: '+5 Bluff to receive secret messages, +5 Sense Motive to intercept',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Rahadoum',
    prerequisites: [{ type: 'region', regionName: 'Rahadoum' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff_secret_messages',
        value: 5,
        source: 'Rahadoumi Cultist',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive_intercept',
        value: 5,
        source: 'Rahadoumi Cultist',
      },
    ],
    tags: ['rahadoum', 'bluff', 'sense_motive', 'secret_messages', 'religion'],
  },
  {
    id: 'rahadoumi_disbeliever',
    name: 'Rahadoumi Disbeliever',
    description:
      'You are a Rahadoumi character who consciously rejects divine covenants, developing spiritual conviction strong enough to resist godly magic. You gain a +2 trait bonus on saving throws against divine spells, but must make saving throws against divine magic even when the effect would be beneficial.',
    shortDescription: '+2 saves vs. divine spells (must also save against beneficial divine magic)',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Rahadoum',
    prerequisites: [{ type: 'region', regionName: 'Rahadoum' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all_vs_divine_spells',
        value: 2,
        source: 'Rahadoumi Disbeliever',
      },
    ],
    tags: ['rahadoum', 'save', 'divine', 'disbeliever'],
  },
  // ==================== REGIONAL TRAITS — RAZMIRAN ====================
  {
    id: 'acolyte_of_razmir',
    name: 'Acolyte of Razmir',
    description:
      'You are either a current adherent of the Razmiri faith or a former follower who has since abandoned it. You gain a +1 trait bonus on Knowledge (local) and Knowledge (religion) checks, one of these two skills becomes a class skill for you, and the bonus increases to +2 when checks specifically involve details of the Razmiri faith.',
    shortDescription: '+1 Knowledge (local) and (religion); +2 for Razmiri details; one class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Razmiran',
    prerequisites: [{ type: 'region', regionName: 'Razmiran' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Acolyte of Razmir',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'Acolyte of Razmir',
      },
    ],
    tags: ['razmiran', 'knowledge_local', 'knowledge_religion', 'razmir'],
  },
  {
    id: 'soldier_of_the_faith',
    name: 'Soldier of the Faith',
    description:
      'You have served as an enforcer for Razmir, either directly or aboard the faith barges of Lake Encarthan, gaining experience in the intimidation methods employed by Razmiran. You gain a +1 trait bonus on Intimidate checks and Intimidate becomes a class skill for you.',
    shortDescription: '+1 Intimidate, Intimidate is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Razmiran',
    prerequisites: [{ type: 'region', regionName: 'Razmiran' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Soldier of the Faith',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.intimidate',
        value: 0,
        source: 'Soldier of the Faith',
      },
    ],
    tags: ['razmiran', 'intimidate', 'class_skill', 'razmir'],
  },
  // ==================== REGIONAL TRAITS — REALM OF THE MAMMOTH LORDS ====================
  {
    id: 'mammoth_master',
    name: 'Mammoth Master',
    description:
      'You have training and expertise in capturing and domesticating large prehistoric creatures like mammoths, mastodons, and woolly rhinoceroses found in the Mammoth Lords region. You gain a +4 trait bonus on Handle Animal checks related to these creatures.',
    shortDescription: '+4 Handle Animal with mammoths, mastodons, and woolly rhinoceroses',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Realm of the Mammoth Lords',
    prerequisites: [{ type: 'region', regionName: 'Realm of the Mammoth Lords' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.handle_animal_mammoth',
        value: 4,
        source: 'Mammoth Master',
      },
    ],
    tags: ['mammoth_lords', 'handle_animal', 'mammoth', 'prehistoric'],
  },
  {
    id: 'superstitious',
    name: 'Superstitious',
    description:
      'You distrust magic that extends beyond shamanic traditions native to your homeland of the Realm of the Mammoth Lords. As long as you do not possess any levels in a class that grants arcane spellcasting power, you gain a +1 trait bonus on all saving throws against arcane spells.',
    shortDescription: '+1 saves vs. arcane spells (only if no arcane spellcasting class levels)',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Realm of the Mammoth Lords',
    prerequisites: [
      { type: 'region', regionName: 'Realm of the Mammoth Lords' },
      { type: 'special', description: 'No class levels granting arcane spellcasting' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all_vs_arcane_spells',
        value: 1,
        source: 'Superstitious',
      },
    ],
    tags: ['mammoth_lords', 'save', 'arcane', 'conditional'],
  },
  // ==================== REGIONAL TRAITS — RIVER KINGDOMS ====================
  {
    id: 'bandit',
    name: 'Bandit',
    description:
      "You have belonged to one of the River Kingdoms' bandit gangs since childhood. Choose one skill from the following: Escape Artist, Intimidate, or Stealth. You gain a +1 trait bonus on that skill and it becomes a class skill for you.",
    shortDescription: '+1 to Escape Artist, Intimidate, or Stealth (choice); class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'River Kingdoms',
    prerequisites: [{ type: 'region', regionName: 'River Kingdoms' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.choice_escape_artist_intimidate_stealth',
        value: 1,
        source: 'Bandit',
      },
    ],
    tags: ['river_kingdoms', 'escape_artist', 'intimidate', 'stealth', 'class_skill'],
  },
  {
    id: 'riverfolk',
    name: 'Riverfolk',
    description:
      'You have grown up along the Sellen River system tributaries, developing comfort and familiarity with aquatic environments and nautical life. You gain a +2 trait bonus on Profession (sailor) checks and a +2 trait bonus on skill checks involving rope use.',
    shortDescription: '+2 Profession (sailor), +2 to rope use checks',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'River Kingdoms',
    prerequisites: [{ type: 'region', regionName: 'River Kingdoms' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.profession_sailor',
        value: 2,
        source: 'Riverfolk',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.rope_use',
        value: 2,
        source: 'Riverfolk',
      },
    ],
    tags: ['river_kingdoms', 'profession_sailor', 'rope', 'nautical'],
  },
  // ==================== REGIONAL TRAITS — SARGAVA ====================
  {
    id: 'jungle_guide',
    name: 'Jungle Guide',
    description:
      'You gained experience outfitting and guiding expeditions deep into the Mwangi interior in search of ancient ruins and lost cities. You gain a +1 trait bonus on Handle Animal and Survival checks in jungle terrain, and one of these two skills becomes a class skill for you.',
    shortDescription: '+1 Handle Animal and Survival in jungle; one is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Sargava',
    prerequisites: [{ type: 'region', regionName: 'Sargava' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.handle_animal',
        value: 1,
        source: 'Jungle Guide',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival_jungle',
        value: 1,
        source: 'Jungle Guide',
      },
    ],
    tags: ['sargava', 'handle_animal', 'survival', 'jungle', 'exploration'],
  },
  {
    id: 'sargavan_guard',
    name: 'Sargavan Guard',
    description:
      'You served in the Sargavan Guard, either as a colonial sub-praetor or as a native Mwangi regular, and have grown accustomed to marching in hot temperatures while wearing armor. When wearing any armor, you reduce your armor check penalty by 1 (minimum 0).',
    shortDescription: 'Reduce armor check penalty by 1 (minimum 0)',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Sargava',
    prerequisites: [{ type: 'region', regionName: 'Sargava' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'armor_check_penalty',
        value: 1,
        source: 'Sargavan Guard',
      },
    ],
    tags: ['sargava', 'armor', 'armor_check_penalty', 'military'],
  },
  // ==================== REGIONAL TRAITS — SHACKLES ====================
  {
    id: 'shackles_seafarer',
    name: 'Shackles Seafarer',
    description:
      "You have developed familiarity with the Shackles' challenging maritime environment, including its dangerous coastlines, water currents, and tidal patterns. You gain a +1 trait bonus on Knowledge (nature) and Knowledge (geography) checks while on the ocean, a +1 trait bonus on Swim checks, and Swim becomes a class skill for you.",
    shortDescription: '+1 Knowledge (nature/geography) at sea, +1 Swim, Swim is class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'The Shackles',
    prerequisites: [{ type: 'region', regionName: 'The Shackles' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nature_ocean',
        value: 1,
        source: 'Shackles Seafarer',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_geography_ocean',
        value: 1,
        source: 'Shackles Seafarer',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.swim',
        value: 1,
        source: 'Shackles Seafarer',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.swim',
        value: 0,
        source: 'Shackles Seafarer',
      },
    ],
    tags: ['shackles', 'swim', 'knowledge_nature', 'knowledge_geography', 'pirate', 'nautical'],
  },
  {
    id: 'stormrunner',
    name: 'Stormrunner',
    description:
      'You have experience sailing treacherous waters, particularly around the Eye of Abendego. You have developed sea legs and maintain balance even on unstable surfaces. You gain a +2 trait bonus on Acrobatics checks to keep your footing on uneven ground or unsteady surfaces.',
    shortDescription: '+2 Acrobatics on uneven or unsteady surfaces',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'The Shackles',
    prerequisites: [{ type: 'region', regionName: 'The Shackles' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics_unsteady',
        value: 2,
        source: 'Stormrunner',
      },
    ],
    tags: ['shackles', 'acrobatics', 'balance', 'nautical'],
  },
  // ==================== REGIONAL TRAITS — SODDEN LANDS ====================
  {
    id: 'abendego_spellpiercer',
    name: 'Abendego Spellpiercer',
    description:
      'You have experience surviving the relentless storms of a perpetual hurricane and have developed resilience when casting magic during harsh weather conditions. You gain a +2 trait bonus on concentration checks when spellcasting.',
    shortDescription: '+2 concentration checks when spellcasting',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'The Sodden Lands',
    prerequisites: [{ type: 'region', regionName: 'The Sodden Lands' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'concentration',
        value: 2,
        source: 'Abendego Spellpiercer',
      },
    ],
    tags: ['sodden_lands', 'concentration', 'spellcasting', 'storm'],
  },
  {
    id: 'oagan_diver',
    name: 'Oagan Diver',
    description:
      'You have familiarity with the diving bells used in Oagon and personal experience exploring the submerged ruins of Lirgen. You gain a +1 trait bonus on Swim checks and Swim becomes a class skill for you.',
    shortDescription: '+1 Swim, Swim is a class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'The Sodden Lands',
    prerequisites: [{ type: 'region', regionName: 'The Sodden Lands' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.swim',
        value: 1,
        source: 'Oagan Diver',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.swim',
        value: 0,
        source: 'Oagan Diver',
      },
    ],
    tags: ['sodden_lands', 'swim', 'class_skill', 'diving'],
  },
  // ==================== REGIONAL TRAITS — STEAMING SEA ====================
  {
    id: 'hermean_paragon',
    name: 'Hermean Paragon',
    description:
      "You are a product of Hermea's selective breeding programs, whether your parents were chosen as citizens or you yourself were selected but failed to meet the island's stringent expectations. You gain a +2 trait bonus on Initiative checks.",
    shortDescription: '+2 Initiative',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'The Steaming Sea',
    prerequisites: [{ type: 'region', regionName: 'The Steaming Sea' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 2,
        source: 'Hermean Paragon',
      },
    ],
    tags: ['hermea', 'steaming_sea', 'initiative', 'breeding'],
  },
  {
    id: 'mordant_heritage',
    name: 'Mordant Heritage',
    description:
      'You have lived among the Mordant Spire elves and know their strange ways. You gain a +1 trait bonus on Swim checks and a +1 trait bonus on saving throws against enchantment effects.',
    shortDescription: '+1 Swim, +1 saves vs. enchantment',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'The Steaming Sea',
    prerequisites: [{ type: 'region', regionName: 'The Steaming Sea' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.swim',
        value: 1,
        source: 'Mordant Heritage',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all_vs_enchantment',
        value: 1,
        source: 'Mordant Heritage',
      },
    ],
    tags: ['mordant_spire', 'steaming_sea', 'swim', 'enchantment', 'elf'],
  },
  // ==================== REGIONAL TRAITS — TALDOR ====================
  {
    id: 'chivalrous',
    name: 'Chivalrous',
    description:
      "You were raised on tales of heroic knights and benevolent wizards from Taldor's Golden Age, and try to emulate their great deeds. You gain a +1 trait bonus on Diplomacy checks and Knowledge (history) checks.",
    shortDescription: '+1 Diplomacy and Knowledge (history)',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Taldor',
    prerequisites: [{ type: 'region', regionName: 'Taldor' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Chivalrous',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Chivalrous',
      },
    ],
    tags: ['taldor', 'diplomacy', 'knowledge_history', 'chivalry'],
  },
  {
    id: 'wealthy_dabbler',
    name: 'Wealthy Dabbler',
    description:
      "You study magic at one of Taldor's social clubs, impressing peers through knowledge of basic magical techniques. Select two non-harmful arcane cantrips; you may cast each once per day. Your caster level is 1st, or equal to your class level if you possess a class that can cast these cantrips.",
    shortDescription: 'Cast two chosen harmless arcane cantrips 1/day each',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Taldor',
    prerequisites: [{ type: 'region', regionName: 'Taldor' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'spell_like.two_cantrips',
        value: 0,
        source: 'Wealthy Dabbler',
      },
    ],
    tags: ['taldor', 'arcane', 'cantrip', 'spell_like', 'noble'],
  },
  // ==================== REGIONAL TRAITS — THUVIA ====================
  {
    id: 'desert_nomad',
    name: 'Desert Nomad',
    description:
      "You were born and raised in Thuvia's desert interior, granting you resilience to harsh environmental conditions. You gain a +4 trait bonus on saving throws against hot conditions and a +1 trait bonus on all saving throws against fire effects.",
    shortDescription: '+4 saves vs. hot conditions, +1 saves vs. fire',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Thuvia',
    prerequisites: [{ type: 'region', regionName: 'Thuvia' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all_vs_hot_conditions',
        value: 4,
        source: 'Desert Nomad',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all_vs_fire',
        value: 1,
        source: 'Desert Nomad',
      },
    ],
    tags: ['thuvia', 'save', 'fire', 'heat', 'desert'],
  },
  {
    id: 'thuvian_merchant',
    name: 'Thuvian Merchant',
    description:
      'You have traveled the great circular trade route around Thuvia, following the sale of the sun orchid elixir from city to city, and are used to haggling with foreigners. You gain a +1 trait bonus on Appraise, Bluff, and Sense Motive checks made during business deals and transactions.',
    shortDescription: '+1 Appraise, Bluff, and Sense Motive during business transactions',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Thuvia',
    prerequisites: [{ type: 'region', regionName: 'Thuvia' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise_trade',
        value: 1,
        source: 'Thuvian Merchant',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff_trade',
        value: 1,
        source: 'Thuvian Merchant',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive_trade',
        value: 1,
        source: 'Thuvian Merchant',
      },
    ],
    tags: ['thuvia', 'appraise', 'bluff', 'sense_motive', 'trade', 'merchant'],
  },
  // ==================== REGIONAL TRAITS — USTALAV ====================
  {
    id: 'superstitious_ward',
    name: 'Superstitious Ward',
    description:
      'You have overcome superstitious fears of the supernatural threats common to your homeland of Ustalav. Rather than being frightened of vampire and ghost folklore, you have learned practical methods for dealing with undead creatures. You may cast disrupt undead once per day as a spell-like ability at your highest caster level (or CL 1st if you have no caster level).',
    shortDescription: 'Cast disrupt undead 1/day as spell-like ability',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Ustalav',
    prerequisites: [{ type: 'region', regionName: 'Ustalav' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'spell_like.disrupt_undead',
        value: 0,
        source: 'Superstitious Ward',
      },
    ],
    tags: ['ustalav', 'undead', 'spell_like', 'disrupt_undead'],
  },
  {
    id: 'ustalavic_noble',
    name: 'Ustalavic Noble',
    description:
      "You hail from an aristocratic family in Ustalav whose former prominence has faded over time. You gain a +1 trait bonus on Diplomacy checks, a +1 trait bonus on Knowledge (nobility) checks, and your starting money is increased by 100 gp.",
    shortDescription: '+1 Diplomacy, +1 Knowledge (nobility), +100 gp starting wealth',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Ustalav',
    prerequisites: [{ type: 'region', regionName: 'Ustalav' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Ustalavic Noble',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Ustalavic Noble',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'starting_wealth',
        value: 100,
        source: 'Ustalavic Noble',
      },
    ],
    tags: ['ustalav', 'diplomacy', 'knowledge_nobility', 'noble', 'wealth'],
  },
  // ==================== REGIONAL TRAITS — VARISIA ====================
  {
    id: 'shoanti_tribesman',
    name: 'Shoanti Tribesman',
    description:
      'You were born or adopted into a Shoanti tribe. Choose one of the following skills: Climb, Survival, or Swim. You receive a +1 trait bonus to whichever skill you select, and that skill becomes a class skill for your character regardless of class.',
    shortDescription: '+1 to Climb, Survival, or Swim (choice); class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Varisia',
    prerequisites: [{ type: 'region', regionName: 'Varisia' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.choice_climb_survival_swim',
        value: 1,
        source: 'Shoanti Tribesman',
      },
    ],
    tags: ['varisia', 'shoanti', 'climb', 'survival', 'swim', 'class_skill'],
  },
  {
    id: 'varisian_wanderer',
    name: 'Varisian Wanderer',
    description:
      'You were raised among or have spent time with a group of Varisian nomads, whether travelers, Sczarni criminals, or entertainers, and have learned their ways. Select one skill: Perform (any type), Profession (fortuneteller), or Sleight of Hand. You receive a +1 trait bonus to the chosen skill and it becomes a class skill regardless of your character class.',
    shortDescription: '+1 to Perform, Profession (fortuneteller), or Sleight of Hand (choice); class skill',
    source: 'Pathfinder Player Companion: Inner Sea Primer',
    category: 'regional',
    subcategory: 'Varisia',
    prerequisites: [{ type: 'region', regionName: 'Varisia' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.choice_perform_fortune_sleight',
        value: 1,
        source: 'Varisian Wanderer',
      },
    ],
    tags: ['varisia', 'perform', 'sleight_of_hand', 'fortune_teller', 'class_skill'],
  },
];

// CHECKPOINT: last_written=varisian_wanderer, written=76/76, status=complete
