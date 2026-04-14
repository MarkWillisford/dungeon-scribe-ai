import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const DTT_FEATS: FeatDefinition[] = [
  // ==================== DIRTY TACTICS TOOLBOX ====================
  // Already in database: Dirty Fighting, Underhanded Trick, Kitsune Style, Kitsune Tricks, Kitsune Vengeance

  {
    id: 'ambuscading_spell',
    name: 'Ambuscading Spell',
    description:
      'During a surprise round, your opponents that have not yet acted take a –2 penalty on saving throws against spells you cast. Creatures that have already acted take a –1 penalty during the surprise round.',
    shortDescription:
      'Opponents take –2 (or –1 if acted) on saves vs. your spells during a surprise round.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['surprise', 'spell', 'ambush', 'saving throw'],
  },

  {
    id: 'ambush_awareness',
    name: 'Ambush Awareness',
    description:
      'If you fail your Perception check to act during a surprise round, you can still take a total defense action during the surprise round.',
    shortDescription:
      'Act during surprise rounds even if you fail your Perception check (total defense only).',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'alertness' }],
    effects: [],
    activationMode: 'passive',
    tags: ['surprise', 'ambush', 'perception', 'defense'],
  },

  {
    id: 'befuddling_initiative',
    name: 'Befuddling Initiative',
    description:
      'You treat each opponent that begins a surprise round flat-footed as being flat-footed until its action in the first full round of combat, even if it acts on the surprise round.',
    shortDescription:
      'Flat-footed foes in the surprise round remain flat-footed until their first full-round action.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'improved_initiative' }],
    effects: [],
    activationMode: 'passive',
    tags: ['surprise', 'ambush', 'flat-footed', 'initiative'],
  },

  {
    id: 'dastardly_trick',
    name: 'Dastardly Trick',
    description:
      'When you attempt a dirty trick combat maneuver check and expend 1 point of panache, if the maneuver is successful, your opponent must succeed at a Will save (DC = 10 + 1/2 your character level + your Charisma modifier) to remove its dirty trick condition.',
    shortDescription:
      'Spend 1 panache on a dirty trick to make the condition require a Will save to remove.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'panache'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'special', description: 'Amateur Swashbuckler or panache class feature' },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_dirty_trick' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dirty trick', 'panache', 'swashbuckler', 'maneuver'],
  },

  {
    id: 'dedicated_adversary',
    name: 'Dedicated Adversary',
    description:
      "Choose a specific creature type (such as wolf, frost giant, goblin, or babau demon). You gain the ranger's favored enemy class ability against this particular type of creature with a bonus of +2. This does not qualify you for prerequisites requiring the favored enemy class feature. If you later gain the favored enemy class feature, you may exchange this feat for another feat you meet the requirements for that specifically requires favored enemy. You can take this feat multiple times; each time it applies to a different creature type.",
    shortDescription: 'Gain +2 favored enemy bonus against one specific creature type.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'No levels in a class that has the favored enemy class feature',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack_and_damage.favored_enemy',
        value: 2,
        source: 'Dedicated Adversary',
        condition: { type: 'custom', params: {}, description: 'Against the chosen creature type' },
      },
    ],
    activationMode: 'passive',
    tags: ['favored enemy', 'ranger', 'hunter'],
  },

  {
    id: 'deep_toxin',
    name: 'Deep Toxin',
    description:
      "When you use Vital Strike with a poisoned weapon, the poison's duration is extended by one frequency increment (for example, large scorpion venom lasts 7 rounds instead of 6). The poison takes effect immediately and does not have an onset time.",
    shortDescription:
      "Vital Strike with a poisoned weapon extends the poison's duration by one frequency and removes onset time.",
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'vital_strike' },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Craft (poison) 6 ranks or poison use class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['poison', 'vital strike', 'duration'],
  },

  {
    id: 'dirty_critical_hit',
    name: 'Dirty Critical Hit',
    description:
      "Whenever you confirm a critical hit, you can also affect the target as if you had succeeded at a dirty trick combat maneuver check, imposing one condition normally associated with dirty trick for 1 round (unless you have additional feats or class abilities that expand your dirty trick options). Only one critical feat's effects may be applied to a single critical hit, except if you have the Critical Mastery feat.",
    shortDescription:
      'On a confirmed critical hit, also apply a dirty trick condition for 1 round.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'critical'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'critical_focus' },
      { type: 'feat', featId: 'improved_dirty_trick' },
      { type: 'bab', minimum: 11 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['critical', 'dirty trick', 'maneuver'],
  },

  {
    id: 'dirty_disarm',
    name: 'Dirty Disarm',
    description:
      "You can perform a dirty trick combat maneuver and a disarm combat maneuver against the same opponent as a full-round action. Make one combat maneuver check to resolve both maneuvers simultaneously. When your CMB differs between the two maneuvers, apply the lower bonus; when your target's CMD differs, use the higher value. If your check is successful, you complete both combat maneuvers.",
    shortDescription:
      'Combine a dirty trick and disarm maneuver into a single full-round action check.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_dirty_trick' },
      { type: 'feat', featId: 'improved_disarm' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dirty trick', 'disarm', 'maneuver', 'combination'],
  },

  {
    id: 'dirty_grapple',
    name: 'Dirty Grapple',
    description:
      "You can perform a dirty trick combat maneuver and start or continue a grapple against the same opponent as a full-round action. Make one combat maneuver check to resolve both maneuvers simultaneously. When your CMB differs between the two maneuvers, apply the lower bonus; when your target's CMD differs, use the higher value. If your check is successful, you complete both combat maneuvers.",
    shortDescription:
      'Combine a dirty trick and grapple maneuver into a single full-round action check.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_dirty_trick' },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dirty trick', 'grapple', 'maneuver', 'combination'],
  },

  {
    id: 'equipment_trick_dtt',
    name: 'Equipment Trick',
    description:
      "Choose a specific piece of equipment (such as a cloak, heavy blade scabbard, or sunrod). You can use any equipment trick related to the chosen item as long as you meet the trick's prerequisites. If the equipment would normally function as an improvised weapon, you may treat it as either a standard weapon or improvised weapon based on which benefits you most. You can take this feat multiple times; each time it applies to a new type of equipment.",
    shortDescription: 'Learn combat applications for a chosen piece of equipment.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'passive',
    tags: ['equipment', 'improvised weapon', 'trick'],
  },

  {
    id: 'expert_sniper',
    name: 'Expert Sniper',
    description:
      'You reduce the penalty on your Stealth checks to stay hidden while sniping by 10. The normal penalty for sniping is –20, so with this feat it is reduced to –10.',
    shortDescription: 'Reduce the Stealth penalty for sniping by 10 (from –20 to –10).',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'stealth', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.stealth.snipe_penalty_reduction',
        value: 10,
        source: 'Expert Sniper',
        condition: {
          type: 'custom',
          params: {},
          description: 'When sniping (reduces –20 penalty to –10)',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['sniper', 'stealth', 'ranged'],
  },

  {
    id: 'extra_impromptu_sneak_attack',
    name: 'Extra Impromptu Sneak Attack',
    description:
      'You can use your impromptu sneak attack ability one additional time per day. You can take this feat multiple times; its effects stack.',
    shortDescription: 'Gain one additional use of impromptu sneak attack per day.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'impromptu sneak attack' }],
    effects: [],
    activationMode: 'passive',
    tags: ['sneak attack', 'rogue', 'arcane trickster'],
  },

  {
    id: 'flexible_foe',
    name: 'Flexible Foe',
    description:
      'Once per day, you can spend a swift action to alter the subtype of one of your favored enemy choices within its category (for example, switching from one humanoid race to another). When activated this way, the bonus is always +2 regardless of normal progression. The effect lasts for a number of rounds equal to your character level. You can take this feat multiple times; each additional selection grants one extra daily use.',
    shortDescription:
      'Once per day, swap a favored enemy subtype as a swift action for character level rounds.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'bab', minimum: 5 },
      {
        type: 'special',
        description: 'Favored enemy (any humanoid or any outsider), favored enemy class feature',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['favored enemy', 'ranger', 'adaptive'],
  },

  {
    id: 'flying_tackle',
    name: 'Flying Tackle',
    description:
      'When performing an overrun combat maneuver against a flat-footed opponent that results in the opponent being knocked prone, you may also fall prone to attempt a grapple as a free action. This grapple attempt does not provoke attacks of opportunity from your target.',
    shortDescription:
      'After an overrun that knocks a flat-footed foe prone, drop prone to attempt a free grapple.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'improved_overrun' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['overrun', 'grapple', 'maneuver', 'prone'],
  },

  {
    id: 'friendly_shroud',
    name: 'Friendly Shroud',
    description:
      'When you are adjacent to an ally who has also spent at least one round without moving, and both of you attempt Stealth checks, the ally may use your Stealth check result if it is higher than their own.',
    shortDescription:
      'An adjacent stationary ally may use your Stealth check result if it is higher than theirs.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'stealth', ranks: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['stealth', 'teamwork', 'allies'],
  },

  {
    id: 'frightening_ambush',
    name: 'Frightening Ambush',
    description:
      'You can make an Intimidate check as a free action to demoralize an opponent who is flat-footed when you attack that opponent.',
    shortDescription: 'Demoralize a flat-footed foe as a free action when you attack them.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'intimidate', ranks: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['intimidate', 'demoralize', 'ambush', 'flat-footed', 'fear'],
  },

  {
    id: 'improved_lookout',
    name: 'Improved Lookout',
    description:
      'Whenever you are adjacent to an ally who also has the Lookout teamwork feat, when either of you first takes an action, you both lose the flat-footed condition.',
    shortDescription:
      'You and an adjacent ally with Lookout both lose flat-footed when either of you acts.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'lookout' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['lookout', 'teamwork', 'flat-footed', 'surprise'],
  },

  {
    id: 'inspired_sneak_attack',
    name: 'Inspired Sneak Attack',
    description:
      'When dealing sneak attack or studied strike damage, you can spend one use of inspiration to reroll any sneak attack dice that show 1s. With the powerful sneak rogue talent, you reroll dice that came up 1s instead of treating them as 2s. With the deadly sneak advanced talent, you reroll dice showing 1s or 2s instead of treating them as 3s. You must take the result of the rerolls, even if it is worse than the original result.',
    shortDescription:
      'Spend inspiration to reroll sneak attack dice showing 1s (or 1s and 2s with advanced talents).',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'inspiration' },
      { type: 'special', description: 'Sneak attack or studied strike class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['sneak attack', 'inspiration', 'investigator', 'reroll'],
  },

  {
    id: 'lightning_rager',
    name: 'Lightning Rager',
    description:
      'If caught unawares during a surprise round, you can enter a rage as an immediate action. If you do, you gain a +2 insight bonus to your Armor Class for the remainder of the surprise round.',
    shortDescription:
      'Enter rage as an immediate action during a surprise round and gain +2 insight bonus to AC.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'rage' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'ac',
        value: 2,
        source: 'Lightning Rager',
        condition: {
          type: 'custom',
          params: {},
          description: 'During the surprise round after entering rage as an immediate action',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['rage', 'barbarian', 'surprise', 'ambush'],
  },

  {
    id: 'master_sniper',
    name: 'Master Sniper',
    description:
      'While hiding, you can make two ranged attacks at your highest attack bonus as a full-round action and then immediately attempt a Stealth check to stay hidden. Both attack rolls take a –2 penalty. You incur standard penalties on the Stealth check to stay concealed, and any effects that enhance sniping abilities apply to this action.',
    shortDescription:
      'Make two sniping attacks at your highest bonus as a full-round action, then re-hide; both attacks at –2.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'expert_sniper' },
      { type: 'feat', featId: 'rapid_shot' },
      { type: 'skill', skillId: 'stealth', ranks: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['sniper', 'stealth', 'ranged', 'full attack'],
  },

  {
    id: 'poison_shot_deed',
    name: 'Poison Shot Deed',
    description:
      'You can expend 1 grit point to load a firearm with a single dose of inhaled or ingested poison as a move action without risk of exposure. When you fire the loaded weapon as a standard action, it sprays poison in a 15-foot cone. Any creatures caught in the blast take no damage but are exposed to this poison and must each immediately attempt a save against the poison as though the onset time had elapsed.',
    shortDescription:
      'Spend 1 grit to load a firearm with poison, then spray it in a 15-foot cone as a standard action.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['grit'],
    prerequisites: [{ type: 'special', description: 'Amateur Gunslinger or grit class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['grit', 'poison', 'gunslinger', 'firearm', 'area'],
  },

  {
    id: 'powerful_poisoning',
    name: 'Powerful Poisoning',
    description:
      "When you deal damage with Power Attack using a poisoned weapon, you can sacrifice the Power Attack bonus damage to increase the poison's save DC by 1. When your base attack bonus reaches +4, and every +4 thereafter, the bonus to the poison's save DC increases by an additional 1. The DC cannot exceed 15 + half your character level.",
    shortDescription:
      "Sacrifice Power Attack bonus damage to raise a poison's save DC by 1 (plus more at higher BAB).",
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'power_attack' },
      { type: 'special', description: 'Craft (poison) 3 ranks or poison use class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['poison', 'power attack', 'save DC'],
  },

  {
    id: 'reflexive_caster',
    name: 'Reflexive Caster',
    description:
      'If you fail the Perception check that would prevent you from acting during a surprise round, you still roll initiative normally. You can act on your initiative count in the surprise round, but can only take a standard action to cast an abjuration spell that targets only yourself.',
    shortDescription:
      'Even if you fail your surprise-round Perception check, you can cast a self-targeting abjuration spell.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'caster_level', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['surprise', 'abjuration', 'spellcasting', 'defense'],
  },

  {
    id: 'scurrying_swarmer',
    name: 'Scurrying Swarmer',
    description:
      'You can enter the space of any ally that is your size or up to one size category larger and gain swarming benefits as though that ally had the swarming racial trait. Additionally, you treat any ally sharing your space as having the same teamwork feats that you do for the purpose of determining whether you gain a bonus from teamwork feats. The ally must actually possess those feats to receive any benefits themselves.',
    shortDescription:
      "Ratfolk can enter larger allies' spaces and treat them as having your teamwork feats.",
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'ratfolk' },
      { type: 'special', description: 'Swarming racial trait' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['ratfolk', 'swarming', 'teamwork', 'racial'],
  },

  {
    id: 'sneaking_critical',
    name: 'Sneaking Critical',
    description:
      "Whenever you confirm a critical hit on a sneak attack, you can roll an additional number of sneak attack dice equal to your weapon's critical modifier.",
    shortDescription:
      "On a confirmed critical sneak attack, roll extra sneak attack dice equal to the weapon's crit multiplier.",
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'critical'],
    prerequisites: [
      { type: 'feat', featId: 'critical_focus' },
      { type: 'bab', minimum: 9 },
      { type: 'class_feature', featureName: 'sneak attack' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['sneak attack', 'critical', 'rogue', 'damage'],
  },

  {
    id: 'superior_dirty_trick',
    name: 'Superior Dirty Trick',
    description:
      'Choose one condition that can be imposed by the dirty trick combat maneuver (such as blinded or entangled). The target must spend a full-round action in order to remove that condition. You can take this feat multiple times; each time it applies to a different condition from dirty trick maneuvers.',
    shortDescription:
      'One chosen dirty trick condition requires a full-round action (instead of a standard) to remove.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'greater_dirty_trick' },
      { type: 'feat', featId: 'improved_dirty_trick' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['dirty trick', 'maneuver', 'condition'],
  },

  {
    id: 'terrifying_assault',
    name: 'Terrifying Assault',
    description:
      'When using Intimidate to demoralize an opponent during a surprise round, if you exceed the DC by 10 or more, you can make the target frightened for 1 round instead of shaken.',
    shortDescription:
      'Demoralize during a surprise round: exceed DC by 10 to make the target frightened instead of shaken.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'frightening_ambush' },
      { type: 'skill', skillId: 'intimidate', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['intimidate', 'demoralize', 'frightened', 'surprise', 'fear'],
  },

  {
    id: 'toxic_spell',
    name: 'Toxic Spell',
    description:
      "You can infuse a targeted spell that allows a Fortitude save to negate with a dose of contact or injury poison. When a creature fails its saving throw against the spell, it is also exposed to the poison, which takes effect immediately without onset delay. The poison uses its own save DC but benefits from spell-enhancing effects like Spell Focus. Toxic Spell increases the spell's effective level by 1 and requires a spell that is negated on a successful Fortitude save.",
    shortDescription:
      'Infuse a Fortitude-save spell with poison; failed saves trigger immediate poison exposure. +1 spell level.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [
      { type: 'skill', skillId: 'craft_poison', ranks: 5 },
      { type: 'caster_level', minimum: 3 },
      {
        type: 'special',
        description: 'Ability to cast 2nd-level spells; poison use class feature',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['metamagic', 'poison', 'fortitude save'],
  },

  {
    id: 'treacherous_toxin',
    name: 'Treacherous Toxin',
    description:
      "When making a sneak attack with a poisoned weapon, you can reduce your sneak attack damage to increase the poison's save DC. For each 1d6 of sneak attack damage you forgo, the poison's save DC increases by 1. This cannot raise the DC beyond 15 plus half your character level.",
    shortDescription:
      "Sacrifice sneak attack dice to raise a poison's save DC by 1 per die foregone.",
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'bab', minimum: 5 },
      { type: 'class_feature', featureName: 'sneak attack' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['poison', 'sneak attack', 'save DC', 'rogue'],
  },

  {
    id: 'trick_spell',
    name: 'Trick Spell',
    description:
      "You can only apply this metamagic feat to enchantment spells that affect a single target and allow a Will save to negate. When a target fails its saving throw against the enhanced spell, it experiences the spell's normal effects and you also automatically attempt a dirty trick combat maneuver using your caster level in place of your base attack bonus and your Charisma modifier in place of your Strength modifier. Feats that affect dirty trick maneuvers apply to this check. Trick Spell increases the spell's effective level by 1.",
    shortDescription:
      'Enchantment spells that a target fails also trigger an automatic dirty trick maneuver. +1 spell level.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [
      { type: 'caster_level', minimum: 1 },
      { type: 'special', description: 'Chaotic neutral alignment, worshiper of Calistria' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['metamagic', 'dirty trick', 'enchantment', 'calistria'],
  },

  {
    id: 'unseen_poison',
    name: 'Unseen Poison',
    description:
      'When creatures attempt to magically detect poisons you carry, they must succeed at a caster level check (DC = 10 + your character level). If the check fails, that detection spell or magical ability cannot identify any poison you possess for the duration of the spell.',
    shortDescription:
      'Your poisons are hidden from magical detection unless the caster succeeds at a caster level check (DC 10 + your level).',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 5 },
      { type: 'skill', skillId: 'craft_poison', ranks: 5 },
      { type: 'special', description: 'Ability to cast nondetection' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['poison', 'stealth', 'magical detection', 'deception'],
  },

  {
    id: 'verify',
    name: 'Verify',
    description:
      'You receive a +5 bonus on Sense Motive checks to detect lies about whether creatures have honored contracts or formal agreements they have made. When you successfully identify a creature as having violated such an agreement, that creature takes a –2 penalty on saving throws against your spells, spell-like abilities, and supernatural abilities.',
    shortDescription:
      '+5 Sense Motive vs. lies about contracts; caught liars take –2 on saves vs. your abilities.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'caster_level', minimum: 1 },
      { type: 'special', description: 'Lawful evil alignment, worshiper of Asmodeus' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.sense_motive',
        value: 5,
        source: 'Verify',
        condition: {
          type: 'custom',
          params: {},
          description: 'When detecting lies about contracts or formal agreements',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['sense motive', 'asmodeus', 'lawful evil', 'contract', 'divine'],
  },

  {
    id: 'wasp_familiar',
    name: 'Wasp Familiar',
    description:
      "You gain a familiar through the arcane bond class feature, treating your character level as your wizard level for this purpose. The familiar is a cat-sized, chaotic neutral wasp with the statistics of a greensting scorpion, but with a base speed of 10 ft. and a fly speed of 40 ft. (average). If you already have access to a familiar and are at least 5th level, you receive a familiar with the statistics of an imp instead, replacing its invisibility with an unnatural lust ability (DC 14, usable three times per day). If you violate Calistria's code of conduct to a degree that would cause a cleric to lose their spells, your familiar turns hostile; recovering it requires an atonement spell and raising the familiar from the dead. You can take this feat twice if you are at least 7th level and have no other source of familiar access, at which point you receive an imp-based wasp familiar.",
    shortDescription:
      'Gain a wasp familiar (greensting scorpion stats with fly speed); worshipers of Calistria only.',
    source: 'Dirty Tactics Toolbox',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Chaotic neutral alignment, worshiper of Calistria' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'calistria', 'chaotic neutral', 'arcane bond'],
  },
];
