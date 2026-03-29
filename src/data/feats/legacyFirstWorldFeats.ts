import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const LEGACY_FIRST_WORLD_FEATS: FeatDefinition[] = [
  // ─── Legacy of the First World (Pathfinder Player Companion, 2017) ──────────────

  {
    id: 'biological_lattice',
    name: 'Biological Lattice',
    description:
      'Your vine-covered body can store items. As a move action, you may store an item you are carrying in your vines; doing so causes you to lose your fly speed. You may retrieve the stored item as a swift action or drop it as a free action, regaining your fly speed immediately upon either action.',
    shortDescription: 'Store an item in your vines as a move action, temporarily losing your fly speed.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Gathlain race' },
      { type: 'special', description: 'Racial fly speed' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['gathlain', 'racial', 'fly', 'storage'],
  },

  {
    id: 'centered_spell',
    name: 'Centered Spell',
    description:
      "You can center the area of a spell with an area effect and duration of instantaneous on you, and exclude yourself from the effects of the spell. Your familiar is also excluded if it occupies your square and is at least one size category smaller than you. A centered spell does not use up a higher-level spell slot than the spell's actual level.",
    shortDescription: 'Center an instantaneous area spell on yourself while excluding yourself from its effects.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['metamagic'],
    prerequisites: [
      { type: 'skill', skillId: 'spellcraft', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['metamagic', 'spellcasting', 'area', 'self-exclusion'],
  },

  {
    id: 'city_locked',
    name: 'City-Locked',
    description:
      'Your soul yearns to travel the wilds, but legal obligations, honor-bound duties, or other responsibilities keep you rooted. When interacting with NPCs who live in your settlement, you gain a +1 bonus on Bluff, Diplomacy, and Sense Motive checks. Upon completing the tasks that satisfy your binding responsibility, you additionally gain a +1 bonus on Dexterity- and Intelligence-based ability checks and skill checks and on Will saving throws.',
    shortDescription: 'Gain social bonuses in your home settlement while bound by obligations.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['story'],
    prerequisites: [
      { type: 'special', description: 'You must permanently dwell in a settlement at least as large as a large town. You must also have a fey ancestor somewhere in your family line, or have The Wanderer background.' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: 1,
        source: 'City-Locked',
        condition: { type: 'custom', description: 'When interacting with NPCs who live in your settlement', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: 1,
        source: 'City-Locked',
        condition: { type: 'custom', description: 'When interacting with NPCs who live in your settlement', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: 1,
        source: 'City-Locked',
        condition: { type: 'custom', description: 'When interacting with NPCs who live in your settlement', params: {} },
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'fey', 'social', 'settlement'],
  },

  {
    id: 'conduit_casting',
    name: 'Conduit Casting',
    description:
      "When you and an ally within 30 feet both have this feat, you may cast a spell or spell-like ability through her, provided the spell appears on her class list or she can cast it as a spell-like ability (excluding spells with personal range). Your ally must use an immediate action to serve as the conduit and maintain concentration as if she were casting the spell herself. If a concentration check fails, the spell is lost. The spell originates from your ally's position rather than yours, though you retain caster level, saving throw DC, and similar determinations. Your ally selects targets, areas affected, and makes any required attack rolls.",
    shortDescription: 'Cast spells through an adjacent ally, originating the spell from their position.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['teamwork'],
    prerequisites: [
      { type: 'skill', skillId: 'spellcraft', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'spellcasting', 'fey', 'conduit'],
  },

  {
    id: 'eerily_centered',
    name: 'Eerily Centered',
    description:
      "Your emotional detachment grants you unusual resistance to emotional magic. You gain a +4 racial bonus on saving throws against spells and effects with the emotion descriptor. Fear-based effects and morale bonuses function at half their normal duration (minimum 1 round). Any self-activated abilities granting morale bonuses—such as a barbarian's rage—consume daily uses or ability rounds at double the standard rate.",
    shortDescription: 'Gain +4 on saves vs. emotion effects; fear and morale effects last half as long for you.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Bleachling racial trait' },
      { type: 'special', description: 'Gnome' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'save.will',
        value: 4,
        source: 'Eerily Centered',
        condition: { type: 'custom', description: 'Against spells and effects with the emotion descriptor', params: {} },
      },
    ],
    activationMode: 'passive',
    tags: ['gnome', 'racial', 'bleachling', 'emotion', 'save'],
  },

  {
    id: 'embrace_of_the_dark_fey',
    name: 'Embrace of the Dark Fey',
    description:
      'You have aggressive impulses from your dark fey bloodline that you manage with difficulty. You receive a +2 bonus on Intimidate checks; if you have 10 or more ranks in Intimidate, this bonus increases to +4. You also gain a +2 circumstance bonus on attack rolls to confirm critical hits. When a creature becomes shaken from your Intimidate checks, your damaging attacks against it deal 1 additional point of bleed damage.',
    shortDescription: 'Gain bonuses on Intimidate checks and critical confirmation; shaken foes take bleed damage from your attacks.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['story'],
    prerequisites: [
      { type: 'special', description: 'Evil fey ancestry (such as quickling or redcap) in your family line, or Shameful Heritage background' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.intimidate',
        value: 2,
        source: 'Embrace of the Dark Fey',
      },
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'attack',
        value: 2,
        source: 'Embrace of the Dark Fey',
        condition: { type: 'custom', description: 'On attack rolls to confirm critical hits', params: {} },
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'fey', 'intimidate', 'critical', 'bleed'],
  },

  {
    id: 'fascinated_by_the_mundane',
    name: 'Fascinated by the Mundane',
    description:
      'Your fey heritage gives you a displaced sense of wonder at ordinary things. You gain a +2 bonus on Charisma-based ability checks and skill checks other than Diplomacy checks. Upon completing the goal of making five saving throws against spells with the emotion descriptor or effects that would apply the fascinated condition, this bonus extends to Diplomacy checks as well, and you can increase any morale bonuses you receive by 1.',
    shortDescription: 'Gain +2 on Charisma-based checks (except Diplomacy) from your fey wonder at the mundane.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['story'],
    prerequisites: [
      { type: 'special', description: 'Fey ancestor in family line' },
      { type: 'special', description: 'One of these backgrounds: Adopted by the Fey, Fey Meeting, or Met a Fantastic Creature' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.charisma_checks',
        value: 2,
        source: 'Fascinated by the Mundane',
        condition: { type: 'custom', description: 'On Charisma-based ability checks and skill checks other than Diplomacy', params: {} },
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'fey', 'charisma', 'social'],
  },

  {
    id: 'hydroponic_adaptation',
    name: 'Hydroponic Adaptation',
    description:
      'Once per day as a full-round action, you can lose your fly speed to gain a swim speed of 30 feet as you reconfigure your symbiotic vines to help you move underwater. This aquatic adaptation persists for one hour or until you choose to revert to your aerial form using another full-round action.',
    shortDescription: 'Once per day, trade your fly speed for a 30-foot swim speed for one hour.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Gathlain race' },
      { type: 'special', description: 'Racial fly speed' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['gathlain', 'racial', 'fly', 'swim', 'aquatic'],
  },

  {
    id: 'improved_outflank',
    name: 'Improved Outflank',
    description:
      'You and an ally who both have this feat are considered to be flanking a foe if you are adjacent to an unoccupied square from which you would be able to flank the foe with your ally, even if you are not positioned opposite each other.',
    shortDescription: 'Flank enemies with an ally even without being on opposite sides.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'outflank' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['combat', 'teamwork', 'flank', 'positioning'],
  },

  {
    id: 'improved_precise_strike_lfw',
    name: 'Improved Precise Strike',
    description:
      'Whenever you deal additional damage with Precise Strike, you also deal 1 point of bleed damage. The bleed damage does not stack with itself if applied multiple times.',
    shortDescription: 'Dealing Precise Strike damage also causes 1 point of bleed damage.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'precise_strike' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['combat', 'teamwork', 'precise_strike', 'bleed'],
  },

  {
    id: 'introspective_performance',
    name: 'Introspective Performance',
    description:
      "When you are the only creature affected by your bardic performance or raging song, any bonuses granted by that performance or raging song are calculated as though your class level were 4 higher. This feat does not permit you to activate performances you lack the actual class level to use.",
    shortDescription: 'When solo-performing, treat your class level as 4 higher for performance or raging song bonuses.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'perform', ranks: 3 },
      { type: 'special', description: 'Bardic performance or raging song class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bard', 'skald', 'performance', 'raging_song', 'fey'],
  },

  {
    id: 'selfish_channel',
    name: 'Selfish Channel',
    description:
      'When you channel positive energy and you are the only creature healed by the channeled energy, you regain half again as many hit points (+50%) as normal. This exclusivity can occur naturally (no other living creatures in the area) or through selective channeling effects. This feat also applies to negative energy channeling for characters healed by such energy, provided they are the sole recipient of that channeled negative energy.',
    shortDescription: 'Heal 50% more hit points when you are the only creature healed by your channeled energy.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Channel energy class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['cleric', 'channel_energy', 'healing', 'fey'],
  },

  {
    id: 'spell_synergy',
    name: 'Spell Synergy',
    description:
      "When a spell or spell-like ability affects both you and an adjacent ally who also possesses this feat simultaneously, you may use an immediate action to increase that spell's effective caster level by 3 for yourself only. This boost does not extend the spell's duration or modify its effects on other recipients, and it cannot combine with other caster level increases.",
    shortDescription: 'When a spell affects you and an ally with this feat, use an immediate action to increase its caster level by 3 for you.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['teamwork'],
    prerequisites: [
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'spellcasting', 'caster_level', 'fey'],
  },

  {
    id: 'step_of_the_flighty_fey',
    name: 'Step of the Flighty Fey',
    description:
      'A creature under the effect of your feather step spell-like ability gains DR 1/cold iron for the duration of the effect. At 8 Hit Dice, this improves to DR 2/cold iron. At 16 Hit Dice, this improves to DR 3/cold iron.',
    shortDescription: 'Creatures affected by your feather step spell-like ability gain DR 1/cold iron (scaling with Hit Dice).',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Gathlain race' },
      { type: 'special', description: 'Feather step spell-like ability' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['gathlain', 'racial', 'feather_step', 'damage_reduction', 'cold_iron'],
  },

  {
    id: 'strange_yield',
    name: 'Strange Yield',
    description:
      'Once per day as a full-round action, you may extract a magical fruit from your symbiotic vines and roll percentile dice to randomly determine which common potion or oil it replicates from the 1st-level options. The magical fruit remains potent for 24 hours before losing its enchantment.',
    shortDescription: 'Once per day, extract a magical fruit from your vines that replicates a random 1st-level potion or oil.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'craft_alchemy', ranks: 5 },
      { type: 'special', description: 'Gathlain race' },
      { type: 'special', description: 'Racial fly speed' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['gathlain', 'racial', 'alchemy', 'potion', 'fey'],
  },

  {
    id: 'unfettered_rage',
    name: 'Unfettered Rage',
    description:
      'When no allies are nearby, you can safely unleash the full extent of your fury. During a rage, when making a full melee attack and no allies are within 5 feet of you or your threatened squares, you may spend an additional rage round to make one extra attack at your highest base attack bonus. This comes with a -2 penalty to all attacks and AC until the start of your next turn. This ability does not stack with similar effects such as haste.',
    shortDescription: 'While raging alone, spend an extra rage round to make one additional attack on a full attack, with a -2 penalty to attacks and AC.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Rage class feature' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['combat', 'barbarian', 'rage', 'fey', 'attack'],
  },

  {
    id: 'wild_speaker',
    name: 'Wild Speaker',
    description:
      'You can use your speak with animals spell-like ability at will. This feat allows gnomes undergoing the Bleaching to continually access their innate animal communication powers without the normal limitations of spell-like abilities.',
    shortDescription: 'Use your speak with animals spell-like ability at will.',
    source: 'Pathfinder Player Companion: Legacy of the First World',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Bleachling racial trait' },
      { type: 'special', description: 'Gnome' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['gnome', 'racial', 'bleachling', 'speak_with_animals', 'fey'],
  },
];

// CHECKPOINT: last_written=wild_speaker, written=17/17, status=complete
