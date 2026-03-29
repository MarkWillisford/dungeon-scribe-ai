import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const PLANE_HOPPER_FEATS: FeatDefinition[] = [
  // asura_style / asura_sight / asura_spellrend — already in styleFeats.ts
  {
    id: 'blackfire_summoning',
    name: 'Blackfire Summoning',
    description:
      "When you summon a single evil outsider, it appears in a flash of blackfire, harming all adjacent nonevil creatures. Damage dealt equals twice the summoned creature's CR; affected creatures may attempt a Will save (DC = the summoning spell's DC) to halve the damage. This increases the spell's effective level by 1. If you possess the blackfire pact class feature, you may apply this feat to outsiders matching your blackfire pact selection without increasing the spell's effective level.",
    shortDescription:
      'Summoned evil outsider appears in blackfire blast damaging nearby nonevil creatures',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'sacred_summons' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'evil', 'planar', 'fire', 'conjuration'],
  },
  // cerberus_style/snare/crush (ACG) = flat-footed bonuses — different feat, different mechanics
  // These are the Plane-Hopper's Handbook versions: chain unarmed strikes to multiple targets
  {
    id: 'cerberus_style_phb',
    name: 'Cerberus Style',
    description:
      'You rain blows upon your enemies from three directions, like the three heads of the cerberus guardians of Hell. As a standard action, make a single unarmed strike against one opponent within reach at your full base attack bonus. On a hit, you deal normal damage and may make up to two additional attacks against different foes within reach at your full base attack bonus. Each additional attack beyond the first imposes a -2 penalty to your Armor Class until the start of your next turn.',
    shortDescription:
      'Standard action unarmed strike that can chain to two more targets at full BAB',
    source: "Plane-Hopper's Handbook",
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'cleave' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'cerberus', 'planar', 'multi-attack'],
  },
  {
    id: 'cerberus_snare_phb',
    name: 'Cerberus Snare',
    description:
      'When you deal damage using Cerberus Style, the target cannot take 5-foot steps until the start of your next turn and is barred from dimensional travel, functioning as the dimensional anchor spell for 1 round. Spell resistance applies; your caster level equals your character level for resistance checks.',
    shortDescription: 'Cerberus Style hits prevent 5-ft steps and dimensional travel for 1 round',
    source: "Plane-Hopper's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'cerberus_style_phb' },
      { type: 'bab', minimum: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'cerberus', 'planar', 'movement'],
  },
  {
    id: 'cerberus_crush_phb',
    name: 'Cerberus Crush',
    description:
      'When you strike from three directions, you channel deadly force into each blow. You may apply the benefits of Vital Strike, Improved Vital Strike, and Greater Vital Strike to all attacks made using Cerberus Style.',
    shortDescription: 'Apply Vital Strike benefits to all Cerberus Style attacks',
    source: "Plane-Hopper's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'cerberus_snare_phb' },
      { type: 'feat', featId: 'cerberus_style_phb' },
      { type: 'feat', featId: 'vital_strike' },
      { type: 'bab', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'cerberus', 'planar', 'damage'],
  },
  {
    id: 'chance_death',
    name: 'Chance Death',
    description:
      'You survived death through sheer luck, having narrowly escaped a fatal accident or catastrophe. Once per day, if you would die from an attack or failed saving throw, you may use an immediate action to reroll that attack or save; you must accept the second result. At 11th level, this ability can be used twice per day.',
    shortDescription: 'Once per day reroll an attack or save that would kill you',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'Duskwalker' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['duskwalker', 'origin', 'death', 'reroll', 'planar'],
  },
  {
    id: 'cosmic_gate',
    name: 'Cosmic Gate',
    description:
      "You understand that the stars reflected in Cynosure's pools are actually gateways usable for planar travel. Once per day, you can briefly enter Cynosure and use the pools located there to instantly travel to a nearby location on the Material Plane; this functions as teleport except you are always considered very familiar with your destination.",
    shortDescription:
      "Once per day teleport to Material Plane via Cynosure's star pools, always very familiar",
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'lady_lucks_guidance' },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 10 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['planar', 'travel', 'Desna', 'teleport', 'Cynosure'],
  },
  {
    id: 'crystalline_cloud',
    name: 'Crystalline Cloud',
    description:
      'Instead of affecting only yourself, you generate a cloud of crystalline dust in a 10-foot radius centered on you. You maintain the cloud as a free action while remaining in its area; it consumes 2 rounds of crystalline dust per round of activation. Wind of 11+ mph disperses it immediately. If you also have Gilded Weapons, chaotic creatures entering the cloud must succeed at a Fortitude save (DC = 10 + half your character level + your Charisma modifier) or become sickened for 1 round.',
    shortDescription: 'Project crystalline dust as a 10-ft radius cloud benefiting allies',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'Aphorite' },
      { type: 'level', minimum: 5 },
      { type: 'class_feature', featureName: 'crystalline dust' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['aphorite', 'racial', 'crystalline dust', 'planar'],
  },
  {
    id: 'dark_affinity',
    name: 'Dark Affinity',
    description:
      'You have observed the dark stalkers and adopted some of their tricks. You can cast darkness once per day as a spell-like ability, using your character level as the caster level. At 7th character level, you also gain the ability to cast deeper darkness once per day as a spell-like ability, using your character level as the caster level.',
    shortDescription: 'Cast darkness 1/day; deeper darkness 1/day at level 7',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [{ type: 'level', minimum: 3 }],
    effects: [
      {
        type: 'spell_like_ability',
        bonusType: BonusType.UNTYPED,
        target: 'darkness',
        value: '1/day',
        source: 'Dark Affinity',
      },
    ],
    activationMode: 'conditional',
    tags: ['spell-like', 'darkness', 'planar', 'dark stalker'],
  },
  {
    id: 'deconstruct_spell',
    name: 'Deconstruct Spell',
    description:
      "When you successfully counterspell or dispel a spell once per day, you may deconstruct it to recover crystalline dust rounds equal to half the spell's level (rounded down). Recovery cannot exceed your maximum crystalline dust rounds.",
    shortDescription: 'Successful counterspell or dispel recovers crystalline dust rounds',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Improved Counterspell feat or ability to cast dispel magic or greater dispel magic',
      },
      { type: 'race', raceName: 'Aphorite' },
      { type: 'class_feature', featureName: 'crystalline dust' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aphorite', 'racial', 'crystalline dust', 'counterspell', 'planar'],
  },
  {
    id: 'deliberate_death',
    name: 'Deliberate Death',
    description:
      'Someone killed you: a monster, a murderer, a soldier, an executioner — someone made a conscious decision to end your life. Once per day, when reduced below 0 hit points by an attack or ability from another character, you can take an immediate action to perform a single standard action. This action must be used to attack or harm the creature responsible for the damage. At 11th level, this ability can be used twice per day.',
    shortDescription:
      'When reduced below 0 HP by a foe, take an immediate standard action to attack that foe',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'Duskwalker' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['duskwalker', 'origin', 'death', 'retribution', 'planar'],
  },
  {
    id: 'dreamwalker',
    name: 'Dreamwalker',
    description:
      'Your dreams are as vivid as your waking hours, and you can slip into a dreamlike state with no effort. You automatically arrive unhindered when entering the Dimension of Dreams, without needing to make a Charisma check.',
    shortDescription:
      'Automatically arrive unhindered in the Dimension of Dreams without Charisma checks',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 17 },
      { type: 'feat', featId: 'lucid_dreamer' },
      { type: 'feat', featId: 'practiced_dreamer' },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 10 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['dream', 'planar', 'Dimension of Dreams', 'travel'],
  },
  {
    id: 'ephemeral_tread',
    name: 'Ephemeral Tread',
    description:
      'Once per day, when you are in the Dimension of Dreams in your physical body, you can attempt an impossible action as a standard action as though you were in a lucid body. No positive modifiers apply to the roll except your Charisma modifier.',
    shortDescription:
      'Once per day attempt an impossible action in the Dimension of Dreams while in physical form',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
      { type: 'feat', featId: 'lucid_dreamer' },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dream', 'planar', 'Dimension of Dreams'],
  },
  {
    id: 'experienced_ghost_hunter',
    name: 'Experienced Ghost Hunter',
    description:
      "You've fought enough specters that doing so has become second nature. You can activate your ghost hunter ability as a swift action to grant your weapons the ghost touch special ability, and you gain one additional daily use of your ghost hunter ability.",
    shortDescription: 'Activate ghost hunter as swift action; gain 1 extra daily use',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 7 },
      { type: 'race', raceName: 'Duskwalker' },
      { type: 'class_feature', featureName: 'ghost hunter' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['duskwalker', 'racial', 'ghost touch', 'undead', 'planar'],
  },
  {
    id: 'extra_crystalline_dust',
    name: 'Extra Crystalline Dust',
    description:
      'You gain 3 additional rounds per day to use your crystalline dust ability. This feat may be selected up to two additional times (three total), with each selection stacking to grant up to 9 additional rounds per day.',
    shortDescription: 'Gain 3 extra crystalline dust rounds per day (stackable up to 3 times)',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'Aphorite' },
      { type: 'class_feature', featureName: 'crystalline dust' },
    ],
    effects: [
      {
        type: 'resource_increase',
        bonusType: BonusType.UNTYPED,
        target: 'crystalline_dust.rounds_per_day',
        value: 3,
        source: 'Extra Crystalline Dust',
      },
    ],
    activationMode: 'passive',
    tags: ['aphorite', 'racial', 'crystalline dust', 'planar'],
  },
  {
    id: 'find_the_flaw',
    name: 'Find the Flaw',
    description:
      "You sense the minute imperfections in the otherwise ordered structure of your foes' weapons and armor. When performing a sunder combat maneuver, you ignore hardness equal to your Intelligence modifier.",
    shortDescription: 'Ignore hardness equal to your INT modifier when sundering',
    source: "Plane-Hopper's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'improved_sunder' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 1 },
      { type: 'skill', skillId: 'craft_armor_or_weapons', ranks: 5 },
      { type: 'race', raceName: 'Aphorite' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aphorite', 'racial', 'sunder', 'combat maneuver', 'planar'],
  },
  {
    id: 'ghost_hunting_team',
    name: 'Ghost Hunting Team',
    description:
      'Your intense hatred of undead extends to your companions. When you activate your ghost hunter ability to grant your weapons the ghost touch property, the effect now extends to all allies within 30 feet. You also gain one additional daily use of your ghost hunter ability.',
    shortDescription:
      'Ghost hunter ghost touch effect extends to allies within 30 ft; 1 extra daily use',
    source: "Plane-Hopper's Handbook",
    types: ['teamwork'],
    prerequisites: [
      { type: 'race', raceName: 'Duskwalker' },
      { type: 'class_feature', featureName: 'ghost hunter' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['duskwalker', 'racial', 'teamwork', 'ghost touch', 'undead', 'planar'],
  },
  {
    id: 'gilded_weapons',
    name: 'Gilded Weapons',
    description:
      'Axiomatic energies flow from the golden dust you shed, harming chaotic beings on contact. As a swift action, expend 1 round of your crystalline dust ability to coat up to two natural weapons or held manufactured weapons with crystalline dust for 1 round. Coated weapons deal an additional 1d6 damage to creatures with the chaotic subtype. This extra damage does not stack with other alignment-based weapon enhancements such as the axiomatic weapon special ability.',
    shortDescription:
      'Swift action: coat weapons with crystalline dust to deal +1d6 damage to chaotic creatures',
    source: "Plane-Hopper's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'Aphorite' },
      { type: 'class_feature', featureName: 'crystalline dust' },
      { type: 'special', description: 'Nonchaotic alignment' },
    ],
    effects: [
      {
        type: 'bonus_damage',
        bonusType: BonusType.UNTYPED,
        target: 'weapon.damage.chaotic_creatures',
        value: '1d6',
        source: 'Gilded Weapons',
        condition: {
          type: 'target_type',
          params: { subtype: 'chaotic' },
          description: 'Target has the chaotic subtype',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['aphorite', 'racial', 'crystalline dust', 'axiomatic', 'planar'],
  },
  {
    id: 'greater_planar_mentor',
    name: 'Greater Planar Mentor',
    description:
      'Your mentor views you as an equal and can respond when summoned. You can benefit from your Planar Mentor feat one additional time per day. You also gain access to new spell-like abilities through Improved Planar Mentor: once per day, cast one of the following based on your alignment (CL = character level) targeting a single creature within 30 feet — blasphemy (evil), dictum (lawful), holy word (good), slay living (neutral), or word of chaos (chaotic). Once per week, you may cast greater planar ally as a spell-like ability to summon your specific planar mentor, who requires only half the standard payment for services.',
    shortDescription:
      'Extra Planar Mentor use/day, alignment word SLA, and weekly greater planar ally for your mentor',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'improved_planar_mentor' },
      { type: 'feat', featId: 'planar_mentor' },
      { type: 'level', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['planar', 'outsider', 'mentor', 'alignment', 'summoning'],
  },
  {
    id: 'improved_planar_mentor',
    name: 'Improved Planar Mentor',
    description:
      "Your planar mentor's influence grows as you advance. You can activate your Planar Mentor boon one additional time per day. While the boon is active, your weapons and natural weapons overcome damage reduction as though they were weapons of your mentor's alignment (neutral grants cold iron and silver DR bypass). Once daily while benefiting from the boon, cast one alignment-based spell-like ability (CL = character level): chaotic (chaos hammer, magic circle against law, or summon monster IV [chaotic outsiders]); evil (magic circle against good, summon monster IV [evil outsiders], or unholy blight); good (holy smite, magic circle against evil, or summon monster IV [good outsiders]); lawful (magic circle against chaos, order's wrath, or summon monster IV [lawful outsiders]); neutral (bestow curse, prayer, or summon monster IV [unaligned outsiders]). Using this spell-like ability ends the boon.",
    shortDescription: 'Extra Planar Mentor use/day, alignment DR bypass, and daily alignment SLA',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'planar_mentor' },
      { type: 'level', minimum: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['planar', 'outsider', 'mentor', 'alignment', 'spell-like'],
  },
  {
    id: 'improved_stellar_wanderer',
    name: 'Improved Stellar Wanderer',
    description:
      'You have mastered the art of planar travel through your time on Cynosure. When using Stellar Wanderer for planar travel, you can bring up to eight creatures with you, and your arrival point is 1d% miles from your intended destination rather than the standard 5 to 500 miles.',
    shortDescription:
      'Stellar Wanderer brings 8 passengers and arrives within 1d% miles of destination',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'stellar_wanderer' },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 15 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['planar', 'travel', 'Desna', 'Cynosure', 'plane shift'],
  },
  {
    id: 'ineffable_count_of_the_clock',
    name: 'Ineffable Count of the Clock',
    description:
      "You realize that the endless march of time is more of a drunkard's lurch, and this grants you status in the eyes of the Many. Three times per day as a free action, you can temporarily increase your speed up to your base speed value until the end of your turn. The following round, your speed decreases by that same amount, representing a temporal momentum shift.",
    shortDescription:
      'Three times per day increase speed by up to base speed for 1 turn; lose same next round',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Fey creature type or Fey Obedience (Shyka)' },
      {
        type: 'special',
        description: 'Must have visited or interacted with an outsider from the Dimension of Time',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fey', 'court title', 'time', 'movement', 'planar'],
  },
  {
    id: 'knight_of_the_twisted_word',
    name: 'Knight of the Twisted Word',
    description:
      'You have earned recognition from Count Ranalc and received a title in his exiled court. Once per day, you can cast glibness as a spell-like ability. Your caster level equals your Hit Dice.',
    shortDescription: 'Cast glibness once per day as a spell-like ability',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Fey creature type or Fey Obedience (Count Ranalc)' },
      { type: 'level', minimum: 7 },
      {
        type: 'special',
        description:
          'Must have betrayed or deceived a demon with CR at least 2 higher than your level when taking this feat',
      },
    ],
    effects: [
      {
        type: 'spell_like_ability',
        bonusType: BonusType.UNTYPED,
        target: 'glibness',
        value: '1/day',
        source: 'Knight of the Twisted Word',
      },
    ],
    activationMode: 'conditional',
    tags: ['fey', 'court title', 'deception', 'planar', 'Count Ranalc'],
  },
  {
    id: 'lady_lucks_guidance',
    name: "Lady Luck's Guidance",
    description:
      'Desna has taken a liking to you and guides you from the stars as you travel. Once per day during overland travel, if you succeed at a DC 25 Knowledge (geography) check to follow the stars, you and up to eight additional creatures travel twice the usual distance during overland travel.',
    shortDescription:
      'Once per day double overland travel speed for up to 9 creatures on a DC 25 Knowledge (geography) check',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_geography', ranks: 5 },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['planar', 'travel', 'Desna', 'overland', 'Cynosure'],
  },
  {
    id: 'lonely_death',
    name: 'Lonely Death',
    description:
      'Whether because you were lost in wilderness or quarantined during a plague, you died alone, unnoticed, and unmourned. Twice per day, when reduced below 0 hit points, you can use an immediate action to move up to twice your base speed. If this movement brings you into cover or concealment, you may attempt a Stealth check to hide. At 11th level, you gain two additional daily uses (four total).',
    shortDescription:
      'When reduced below 0 HP, move up to 2x base speed and attempt to hide in cover',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'Duskwalker' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['duskwalker', 'origin', 'death', 'movement', 'stealth', 'planar'],
  },
  {
    id: 'marcher_lord_of_the_cerulean_abyss',
    name: 'Marcher-Lord of the Cerulean Abyss',
    description:
      "You have carved your name and Ragadahn's holy symbol on a living dragon or outsider with the aquatic or water subtype, earning noble status in Ragadahn's hierarchy. Creatures you have dealt hit point damage to during the current round take a -2 penalty on combat maneuver checks and to their CMD until the beginning of your next round.",
    shortDescription:
      'Creatures you damaged this round take -2 to CMB and CMD until your next turn',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Fey creature type or Fey Obedience (Ragadahn)' },
      {
        type: 'special',
        description:
          "Must have carved your name and Ragadahn's holy symbol on a living dragon or outsider with aquatic/water subtype with CR at least 2 higher than your level when taking this feat",
      },
    ],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'combat_maneuver_bonus',
        value: -2,
        source: 'Marcher-Lord of the Cerulean Abyss',
        condition: {
          type: 'custom',
          params: { trigger: 'dealt_damage_this_round' },
          description: 'Target must have been dealt hit point damage by you this round',
        },
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'combat_maneuver_defense',
        value: -2,
        source: 'Marcher-Lord of the Cerulean Abyss',
        condition: {
          type: 'custom',
          params: { trigger: 'dealt_damage_this_round' },
          description: 'Target must have been dealt hit point damage by you this round',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['fey', 'court title', 'combat maneuver', 'Ragadahn', 'planar'],
  },
  {
    id: 'personal_chronicler',
    name: 'Personal Chronicler',
    description:
      'Psychopomps have assigned a nosoi scribe to document your deeds. You gain a fledgling nosoi familiar using your character level as the wizard level equivalent; choose either a raven (granting +3 Diplomacy) or whippoorwill (granting +3 Intimidate). At 5th level or higher with existing familiar access, the bird is treated as a true nosoi (as if you had taken Improved Familiar). This feat can be taken a second time at 7th level or higher if you lack other familiar sources. Willingly consorting with sahkils or undead causes your familiar to abandon you; you must cast atonement to regain it.',
    shortDescription:
      'Gain a nosoi (raven or whippoorwill) familiar that upgrades to true nosoi at level 5',
    source: "Plane-Hopper's Handbook",
    types: ['story'],
    prerequisites: [{ type: 'race', raceName: 'Duskwalker' }],
    effects: [
      {
        type: 'skill_bonus',
        bonusType: BonusType.UNTYPED,
        target: 'diplomacy',
        value: 3,
        source: 'Personal Chronicler',
        condition: {
          type: 'custom',
          params: { familiar_choice: 'raven' },
          description: 'Only if raven familiar selected',
        },
      },
    ],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Nosoi Familiar Type',
        options: ['Raven (+3 Diplomacy)', 'Whippoorwill (+3 Intimidate)'],
        affectsEffects: true,
      },
    ],
    tags: ['duskwalker', 'familiar', 'psychopomp', 'planar'],
  },
  {
    id: 'planar_mentor',
    name: 'Planar Mentor',
    description:
      "An outsider is watching over you. The more you impress it, the more it shares its power and knowledge. Choose a non-unique outsider with 18 Hit Dice or fewer whose alignment is within one step of your own as your mentor. Twice daily (three times for neutral mentors), by fulfilling alignment-based conditions, you gain energy resistance equal to your character level plus alignment-specific benefits for a number of rounds equal to your Charisma modifier + 1 (minimum 1): Chaotic — acid resistance + 10% miss chance from concealment; Evil — fire resistance + bleed damage equal to half your level; Good — electricity resistance + +2 bonus on saving throws; Lawful — cold resistance + light fortification; Neutral — chosen energy resistance + +2 bonus on skill checks. If your mentor is killed or imprisoned, the feat's benefits are lost; you may secure a new mentor at level gain via an 8-hour ritual costing 200 gp × the mentor's Hit Dice.",
    shortDescription:
      'Bond with an outsider mentor for alignment-based energy resistance and bonus benefits',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'energy_resistance',
        bonusType: BonusType.UNTYPED,
        target: 'energy_resistance.alignment_energy',
        value: 'character_level',
        source: 'Planar Mentor',
        condition: {
          type: 'custom',
          params: { trigger: 'mentor_boon_active' },
          description: 'Mentor boon must be active',
        },
      },
    ],
    activationMode: 'conditional',
    choices: [
      {
        type: 'custom',
        label: 'Planar Mentor Outsider',
        affectsEffects: true,
      },
    ],
    tags: ['planar', 'outsider', 'mentor', 'alignment', 'energy resistance'],
  },
  {
    id: 'practiced_dreamer',
    name: 'Practiced Dreamer',
    description:
      'Your time in the Dimension of Dreams has improved your ability to manipulate its landscape. Once per day, you may reroll a failed attempt at an impossible action, including casting unavailable spells, gaining spell effects, or conjuring magic items. You also gain an additional +2 bonus on Charisma checks when determining your initial condition upon entering a dream using your lucid body.',
    shortDescription:
      'Reroll one failed impossible action per day; +2 CHA checks on dream entry condition',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
      { type: 'feat', featId: 'lucid_dreamer' },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 5 },
    ],
    effects: [
      {
        type: 'skill_bonus',
        bonusType: BonusType.UNTYPED,
        target: 'charisma_check.dream_entry_condition',
        value: 2,
        source: 'Practiced Dreamer',
      },
    ],
    activationMode: 'conditional',
    tags: ['dream', 'planar', 'Dimension of Dreams', 'reroll'],
  },
  {
    id: 'reflexive_crystalline_dust',
    name: 'Reflexive Crystalline Dust',
    description:
      'Your trained vigilance allows you to deploy your crystalline dust defenses with exceptional speed. You can activate your crystalline dust ability as an immediate action when you are targeted by an attack, rather than requiring a standard action.',
    shortDescription: 'Activate crystalline dust as an immediate action when targeted by an attack',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'swift_crystalline_dust' },
      { type: 'race', raceName: 'Aphorite' },
      { type: 'class_feature', featureName: 'crystalline dust' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aphorite', 'racial', 'crystalline dust', 'reaction', 'planar'],
  },
  {
    id: 'retributive_summoning',
    name: 'Retributive Summoning',
    description:
      "Your training in counterspelling summons is so extensive that you can redirect some of your foes' power to call forth your own allies. When you successfully counter a summoning spell using dispel magic or your own summon monster spell, you may summon nonevil creatures as though you had cast a summon monster spell of 2 levels lower than the spell you countered.",
    shortDescription:
      'Counter a summoning spell to immediately summon your own nonevil creatures at -2 spell levels',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Spell Focus (conjuration) or counter-summons class feature',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'counterspell', 'conjuration', 'planar'],
  },
  {
    id: 'scribe_spell_equation',
    name: 'Scribe Spell Equation',
    description:
      'You manipulate crystalline dust runes and glyphs to create magical equations that store spells, visible only to you as a specific pattern in your crystalline dust. Scribing a spell equation mirrors the scroll scribing process and requires only one free hand to trace the final glyph for activation. Material costs equal those of scribing equivalent scrolls. You can store one spell equation initially, plus one additional spell at character levels 10, 15, and 20 (maximum four spells).',
    shortDescription:
      'Create crystalline dust spell equations that function as scrolls requiring one free hand',
    source: "Plane-Hopper's Handbook",
    types: ['item_creation'],
    prerequisites: [
      { type: 'feat', featId: 'scribe_scroll' },
      { type: 'race', raceName: 'Aphorite' },
      { type: 'caster_level', minimum: 5 },
      { type: 'class_feature', featureName: 'crystalline dust' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['aphorite', 'racial', 'crystalline dust', 'scroll', 'item creation', 'planar'],
  },
  {
    id: 'spell_praxis',
    name: 'Spell Praxis',
    description:
      "You can solve your spell equations in the instant your blade strikes a foe. When you successfully hit an opponent with a melee weapon, you may activate one prepared spell equation as an immediate action. The spell must be 3rd level or lower, must target one or more creatures, must have a standard casting time, and targets only the creature struck regardless of the spell's normal targeting parameters.",
    shortDescription:
      'On melee hit, activate a prepared spell equation (3rd level or lower) as an immediate action targeting the struck creature',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'scribe_scroll' },
      { type: 'feat', featId: 'scribe_spell_equation' },
      { type: 'race', raceName: 'Aphorite' },
      { type: 'caster_level', minimum: 5 },
      { type: 'class_feature', featureName: 'crystalline dust' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aphorite', 'racial', 'crystalline dust', 'spellstrike', 'melee', 'planar'],
  },
  {
    id: 'stellar_wanderer',
    name: 'Stellar Wanderer',
    description:
      "You have gained Desna's trust, and she has taught you her realm's secrets. Once per week, you may access the pools of Cynosure for instant planar transportation, functioning as the plane shift spell, allowing travel from Cynosure to any plane.",
    shortDescription: 'Once per week use Cynosure pools to plane shift to any plane',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 15 },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 10 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['planar', 'travel', 'Desna', 'Cynosure', 'plane shift'],
  },
  {
    id: 'swamp_dweller',
    name: 'Swamp Dweller',
    description:
      "You've trained with the Muckmouth lizardfolk of the Hao Jin Tapestry and absorbed their aquatic expertise. You gain a +2 bonus on Swim checks (increasing to +4 with 10 or more ranks in Swim), and this bonus doubles in marshy terrain. You move normally into shallow bog squares without movement penalty. Deep bog squares cost only 2 squares of movement instead of normal difficult terrain costs.",
    shortDescription:
      '+2/+4 Swim bonus; ignore shallow bog movement penalties; deep bogs cost 2 squares',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'special', description: 'Must have visited the Hao Jin Tapestry' },
    ],
    effects: [
      {
        type: 'skill_bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.swim',
        value: 2,
        source: 'Swamp Dweller',
      },
    ],
    activationMode: 'passive',
    tags: ['terrain', 'swim', 'marsh', 'Hao Jin', 'planar'],
  },
  {
    id: 'swift_crystalline_dust',
    name: 'Swift Crystalline Dust',
    description:
      'You can activate your crystalline dust ability as a swift action instead of as a move action, allowing you to use it while still taking a standard action in the same round.',
    shortDescription: 'Activate crystalline dust as a swift action instead of a move action',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'Aphorite' },
      { type: 'class_feature', featureName: 'crystalline dust' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aphorite', 'racial', 'crystalline dust', 'action economy', 'planar'],
  },
  {
    id: 'triple_baron',
    name: 'Triple-Baron',
    description:
      'The Three have seen your offerings and proclaimed them satisfactory, even before you actually had the chance to show those offerings to them. Three times daily as an immediate action, before rolling an attack roll, saving throw, or skill check, you may roll three d20s and apply the middle result. This ability is incompatible with other mechanics involving dice rerolls or selecting between two results.',
    shortDescription:
      'Three times per day roll 3d20 and take the middle result for an attack, save, or skill check',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Fey creature type or Fey Obedience (Magdh)' },
      {
        type: 'special',
        description:
          'Must possess three gifts valued at minimum 100 gp each sourced from three separate planes, with at least two planes having opposing planar characteristics',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fey', 'court title', 'Magdh', 'dice', 'fate', 'planar'],
  },
  {
    id: 'waking_dream',
    name: 'Waking Dream',
    description:
      "You can manipulate the world of dreams, even in your physical form. You gain an additional impossible action attempt per day while in the Dimension of Dreams in physical form (totaling two attempts daily). However, when traveling to the Dimension of Dreams physically, you must succeed on a DC 15 Charisma check or arrive at a disadvantage due to your interference with the realm's fabric.",
    shortDescription:
      'Gain a second impossible action attempt per day in the Dimension of Dreams; risk disadvantage on arrival',
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 17 },
      { type: 'feat', featId: 'ephemeral_tread' },
      { type: 'feat', featId: 'lucid_dreamer' },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 10 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dream', 'planar', 'Dimension of Dreams'],
  },
  {
    id: 'willing_death',
    name: 'Willing Death',
    description:
      "You died because you valued someone else's life above your own — whether as a soldier, a lover, or a heroic figure. Twice per day as an immediate action, when an ally within 30 feet would die from an attack or failed saving throw, you may redirect the damage and effects to yourself. This functions as paladin's sacrifice. At 11th level, you gain two additional uses per day (four total).",
    shortDescription:
      "Twice per day redirect lethal damage from an ally within 30 ft to yourself (as paladin's sacrifice)",
    source: "Plane-Hopper's Handbook",
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'Duskwalker' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['duskwalker', 'origin', 'sacrifice', 'ally', 'planar'],
  },
];
