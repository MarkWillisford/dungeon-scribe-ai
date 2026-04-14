import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const ACG_EXTRA_FEATS: FeatDefinition[] = [
  // ==================== COMBAT FEATS ====================
  {
    id: 'deadly_dealer',
    name: 'Deadly Dealer',
    description:
      'You can throw a card as though it were a dart, with the same range increment and damage. You must use the Arcane Strike feat to use cards as weapons. A card that is thrown is destroyed after it hits or misses its target.',
    shortDescription: 'Throw cards as darts using Arcane Strike',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'arcane_strike' },
      { type: 'special', description: 'Ability to cast arcane spells' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'thrown', 'card', 'magus'],
  },
  {
    id: 'disorienting_maneuver',
    name: 'Disorienting Maneuver',
    description:
      "When you successfully use Acrobatics to move through an opponent's threatened area without provoking an attack of opportunity, you gain a +2 bonus on attack rolls against that opponent until the start of your next turn.",
    shortDescription: "+2 attack after tumbling through foe's space",
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'dodge' },
      { type: 'skill', skillId: 'acrobatics', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 2,
        source: 'Disorienting Maneuver',
        condition: {
          type: 'custom',
          params: { state: 'tumbled_through' },
          description: "After tumbling through opponent's threatened area",
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['acrobatics', 'tumble', 'attack bonus'],
  },
  {
    id: 'dispelling_fist',
    name: 'Dispelling Fist',
    description:
      'If you have dispel magic prepared or are able to cast it spontaneously, you can spend a swift action to cast it as a touch spell through your unarmed strike. You must hit the target with an unarmed strike to deliver the spell.',
    shortDescription: 'Deliver dispel magic through unarmed strike',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Ability to cast dispel magic' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['unarmed', 'dispel', 'spellstrike'],
  },
  {
    id: 'fortified_armor_training',
    name: 'Fortified Armor Training',
    description:
      'When you are hit by a critical hit or sneak attack while wearing medium or heavy armor, there is a 25% chance that the critical hit or sneak attack is negated and damage is instead rolled normally.',
    shortDescription: '25% chance to negate critical/sneak attack in medium/heavy armor',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'proficiency', proficiency: 'medium armor' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['armor', 'fortification', 'critical', 'defense'],
  },
  {
    id: 'improved_bravery',
    name: 'Improved Bravery',
    description:
      'Your bravery bonus on Will saves also applies to all saving throws against mind-affecting effects, not just fear effects.',
    shortDescription: 'Bravery applies to all mind-affecting saves',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'bravery class feature' },
      { type: 'level', minimum: 4, class: 'fighter' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['fighter', 'bravery', 'saving throw', 'mind-affecting'],
  },
  {
    id: 'intimidating_bravery',
    name: 'Intimidating Bravery',
    description:
      'You add your bravery bonus to Intimidate checks. Your bravery bonus is also added as a bonus to the DC of Intimidate checks attempted against you.',
    shortDescription: 'Add bravery bonus to Intimidate checks and Intimidate DC',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: 'bravery class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['fighter', 'bravery', 'intimidate'],
  },
  {
    id: 'martial_dominance',
    name: 'Martial Dominance',
    description:
      'When you successfully demoralize an opponent using Intimidate, you can also make a combat maneuver check against that opponent as a free action. If you succeed, the opponent is also shaken for 1 round in addition to the normal effects of the combat maneuver.',
    shortDescription: 'Free combat maneuver after successful demoralize',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'intimidate', ranks: 8 },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['intimidate', 'combat maneuver', 'demoralize'],
  },
  {
    id: 'phalanx_formation',
    name: 'Phalanx Formation',
    description:
      'When you wield a reach weapon, you can also use it against adjacent foes. In addition, allies with this feat do not provide soft cover to opponents you attack with reach weapons.',
    shortDescription: 'Use reach weapons against adjacent foes, ignore ally soft cover',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'passive',
    tags: ['reach', 'formation', 'teamwork-like'],
  },
  {
    id: 'prodigious_two_weapon_fighting',
    name: 'Prodigious Two-Weapon Fighting',
    description:
      'You may fight with a one-handed weapon in your off hand as if it were a light weapon. In addition, you may use your Strength score instead of your Dexterity score for the purpose of meeting the prerequisites of Two-Weapon Fighting and feats that list Two-Weapon Fighting as a prerequisite.',
    shortDescription: 'Use one-handed weapon as light in off hand, Str for TWF prereqs',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'ability_score', ability: 'STR', minimum: 13 }],
    effects: [],
    activationMode: 'passive',
    tags: ['two-weapon fighting', 'strength', 'prerequisite substitution'],
  },
  {
    id: 'risky_striker',
    name: 'Risky Striker',
    description:
      'When using Power Attack, you can take an additional -1 penalty on melee attack rolls and add a +2 bonus on melee damage rolls against creatures two or more size categories larger than you. This additional penalty and bonus scale like Power Attack.',
    shortDescription: 'Extra Power Attack damage vs larger foes',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 1 },
      { type: 'race', raceName: 'halfling' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['halfling', 'power attack', 'damage', 'size'],
  },

  // ==================== RAGING FEATS ====================
  {
    id: 'raging_concentration',
    name: 'Raging Concentration',
    description:
      'You can use concentration checks for spells while bloodraging. You gain a +4 bonus on concentration checks while bloodraging.',
    shortDescription: 'Cast spells while bloodraging, +4 concentration',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'bloodrage class feature' },
      { type: 'class_feature', featureName: 'bloodrager spellcasting' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'spell.concentration',
        value: 4,
        source: 'Raging Concentration',
        condition: {
          type: 'custom',
          params: { state: 'bloodraging' },
          description: 'While bloodraging',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['bloodrager', 'concentration', 'spellcasting'],
  },
  {
    id: 'raging_deathstrike',
    name: 'Raging Deathstrike',
    description:
      'While bloodraging, when you confirm a critical hit, you can end your bloodrage as an immediate action to deal an additional amount of damage equal to twice your bonus damage from Power Attack.',
    shortDescription: 'End bloodrage on crit to deal bonus Power Attack damage',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'class_feature', featureName: 'bloodrage class feature' },
      { type: 'bab', minimum: 12 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bloodrager', 'critical', 'damage', 'power attack'],
  },
  {
    id: 'raging_throw',
    name: 'Raging Throw',
    description:
      "While raging, as a standard action, you can spend a round of rage to attempt a bull rush combat maneuver against a target. If you succeed, you can throw the target as if using the Awesome Blow feat. You do not need to meet Awesome Blow's prerequisites.",
    shortDescription: 'Throw enemies while raging using bull rush',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'class_feature', featureName: 'rage class feature' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['rage', 'bull rush', 'throw', 'barbarian'],
  },

  // ==================== SPELL / CASTER FEATS ====================
  {
    id: 'spell_bane',
    name: 'Spell Bane',
    description:
      'While your bane class feature is active, any spell you cast on a target affected by your bane has its save DC increased by 2.',
    shortDescription: '+2 save DC on spells vs bane target',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'bane class feature' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'spell.save_dc',
        value: 2,
        source: 'Spell Bane',
        condition: {
          type: 'custom',
          params: { state: 'bane_active' },
          description: 'Target is affected by your bane',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['inquisitor', 'bane', 'spell DC'],
  },
  {
    id: 'dispel_synergy',
    name: 'Dispel Synergy',
    description:
      'When you successfully dispel or counterspell a spell, you gain a +2 bonus on attack rolls, saving throws, ability checks, and skill checks for 1 round.',
    shortDescription: '+2 to attacks, saves, checks for 1 round after dispelling',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast dispel magic or greater dispel magic' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dispel', 'morale', 'spellcasting'],
  },
  {
    id: 'sacred_geometry',
    name: 'Sacred Geometry',
    description:
      "When you cast a spell with a metamagic feat applied to it, you can use your ranks in Knowledge (engineering) to calculate special prime numbers. If you succeed, you can apply the metamagic feat to the spell without increasing the spell's level.",
    shortDescription: 'Apply metamagic without increasing spell level via calculation',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_engineering', ranks: 2 },
      { type: 'special', description: 'Any metamagic feat' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['metamagic', 'knowledge', 'spellcasting'],
  },
  {
    id: 'stylized_spell',
    name: 'Stylized Spell',
    description:
      "A stylized spell has slightly different verbal and somatic components than normal, making it more difficult to identify. The DC of any Spellcraft check to identify a stylized spell as it is being cast increases by 5. A stylized spell uses up a spell slot one level higher than the spell's actual level.",
    shortDescription: '+5 DC to identify your spells, +1 spell level',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 5 },
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['metamagic', 'deception', 'spellcraft'],
  },
  {
    id: 'tenacious_spell',
    name: 'Tenacious Spell',
    description:
      "When a creature succeeds at its saving throw against a tenacious spell, the creature still suffers the spell's effects for 1 round (as if it had failed its save) before the spell ends. A tenacious spell uses up a spell slot one level higher than the spell's actual level.",
    shortDescription: 'Spell effects persist for 1 round even on successful save',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['metamagic', 'duration', 'saving throw'],
  },
  {
    id: 'familiar_spell',
    name: 'Familiar Spell',
    description:
      "You can transfer a prepared spell or unused spell slot to your familiar. Your familiar can then deliver the spell as a touch attack at any time before your next time you prepare spells or regain spell slots. A familiar spell uses up a spell slot one level higher than the spell's actual level.",
    shortDescription: 'Transfer spells to familiar for later delivery',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [{ type: 'special', description: 'Familiar class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['metamagic', 'familiar', 'spell delivery'],
  },

  // ==================== STYLE FEATS: DIVA ====================
  {
    id: 'diva_style',
    name: 'Diva Style',
    description:
      'While using this style, you can use your Perform (act, comedy, dance, oratory, or sing) skill modifier in place of your Bluff skill modifier for the purpose of feinting in combat.',
    shortDescription: 'Use Perform instead of Bluff to feint',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'perform', ranks: 1 },
      { type: 'special', description: 'Bardic performance or raging song class feature' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'perform', 'feint', 'bard', 'skald'],
  },
  {
    id: 'diva_advance',
    name: 'Diva Advance',
    description:
      'While using Diva Style, after a successful feint, you can take a 5-foot step as an immediate action even if you have already taken one this round. This 5-foot step does not count against your movement on your next turn.',
    shortDescription: 'Free 5-foot step after successful feint',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'diva_style' },
      { type: 'skill', skillId: 'perform', ranks: 5 },
      { type: 'bab', minimum: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'perform', 'feint', 'movement'],
  },
  {
    id: 'diva_strike',
    name: 'Diva Strike',
    description:
      'While using Diva Style, when you hit a flat-footed opponent with a melee attack, that opponent is also fascinated by you until the beginning of your next turn or until it is attacked again.',
    shortDescription: 'Fascinate flat-footed targets on melee hit',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'diva_advance' },
      { type: 'skill', skillId: 'perform', ranks: 7 },
      { type: 'bab', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'perform', 'fascinate', 'flat-footed'],
  },

  // ==================== STYLE FEATS: OUTSLUG ====================
  {
    id: 'outslug_style',
    name: 'Outslug Style',
    description:
      'While using this style, you gain a +1 bonus on attack rolls with unarmed strikes when you move at least 5 feet before making the attack. In addition, you gain a +1 dodge bonus to AC against melee attacks from opponents you are not adjacent to.',
    shortDescription: '+1 attack after moving, +1 dodge AC vs non-adjacent foes',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 1,
        source: 'Outslug Style',
        condition: {
          type: 'custom',
          params: { state: 'non_adjacent_attacker' },
          description: 'Against melee attacks from non-adjacent opponents',
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'movement', 'dodge'],
  },
  {
    id: 'outslug_sprint',
    name: 'Outslug Sprint',
    description:
      'While using Outslug Style, you gain a +2 bonus to your CMD against bull rush, drag, and reposition combat maneuvers. In addition, when you use the 5-foot step action, you can move up to 10 feet.',
    shortDescription: '+2 CMD vs repositioning, 10 ft 5-foot steps',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'outslug_style' },
      { type: 'bab', minimum: 7 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmd.bull_rush',
        value: 2,
        source: 'Outslug Sprint',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'CMD', 'movement'],
  },
  {
    id: 'outslug_weave',
    name: 'Outslug Weave',
    description:
      'While using Outslug Style, your bonus on attack rolls from Outslug Style increases to +2, and your dodge bonus to AC increases to +2 against melee attacks from opponents you are not adjacent to.',
    shortDescription: 'Outslug Style bonuses increase to +2',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'outslug_sprint' },
      { type: 'bab', minimum: 10 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 2,
        source: 'Outslug Weave',
        condition: {
          type: 'custom',
          params: { state: 'non_adjacent_attacker' },
          description: 'Against melee attacks from non-adjacent opponents',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'dodge', 'attack bonus'],
  },

  // ==================== MOONLIGHT STALKER CHAIN ====================
  {
    id: 'moonlight_stalker',
    name: 'Moonlight Stalker',
    description:
      'While you have concealment from an opponent, you gain a +2 bonus on attack and damage rolls against that opponent.',
    shortDescription: '+2 attack and damage when you have concealment',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'blind_fight' },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'special', description: 'Darkvision or low-light vision racial trait' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 2,
        source: 'Moonlight Stalker',
        condition: {
          type: 'custom',
          params: { state: 'has_concealment' },
          description: 'While you have concealment',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 2,
        source: 'Moonlight Stalker',
        condition: {
          type: 'custom',
          params: { state: 'has_concealment' },
          description: 'While you have concealment',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['concealment', 'stealth', 'attack', 'damage'],
  },
  {
    id: 'moonlight_stalker_feint',
    name: 'Moonlight Stalker Feint',
    description:
      'While you have concealment from an opponent, you can feint against that opponent as a swift action.',
    shortDescription: 'Swift action feint while concealed',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'moonlight_stalker' },
      { type: 'skill', skillId: 'bluff', ranks: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['concealment', 'feint', 'swift action'],
  },
  {
    id: 'moonlight_stalker_master',
    name: 'Moonlight Stalker Master',
    description:
      'While you have concealment from an opponent, your bonus from Moonlight Stalker increases to +4 on attack rolls and +2 on damage rolls. In addition, you gain a +2 bonus to CMD.',
    shortDescription: 'Improved Moonlight Stalker bonuses, +2 CMD',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'moonlight_stalker_feint' },
      { type: 'bab', minimum: 6 },
      { type: 'skill', skillId: 'bluff', ranks: 9 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmd',
        value: 2,
        source: 'Moonlight Stalker Master',
        condition: {
          type: 'custom',
          params: { state: 'has_concealment' },
          description: 'While you have concealment',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['concealment', 'stealth', 'attack', 'CMD'],
  },

  // ==================== FEINTING / DECEPTION ====================
  {
    id: 'blistering_feint',
    name: 'Blistering Feint',
    description:
      'When you successfully feint against an opponent, the target of your feint takes fire damage equal to your Charisma modifier (minimum 1). This damage does not apply if the target is immune to fire.',
    shortDescription: 'Deal fire damage equal to Cha mod on successful feint',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_feint' },
      { type: 'special', description: 'Ability to cast a fire spell or fire domain/bloodline' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['feint', 'fire', 'damage', 'charisma'],
  },
  {
    id: 'confounding_tumble_deed',
    name: 'Confounding Tumble Deed',
    description:
      "When you use Acrobatics to move through an opponent's threatened area or space without provoking an attack of opportunity, you can spend 1 panache point to deny that opponent his Dexterity bonus to AC against your next attack before the end of your turn.",
    shortDescription: 'Spend panache to deny Dex to AC after tumbling',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['panache'],
    prerequisites: [
      { type: 'skill', skillId: 'acrobatics', ranks: 5 },
      { type: 'class_feature', featureName: 'panache class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['panache', 'tumble', 'acrobatics', 'swashbuckler'],
  },

  // ==================== COMPANION / FAMILIAR FEATS ====================
  {
    id: 'evolved_companion',
    name: 'Evolved Companion',
    description:
      'Select a 1-point evolution from the eidolon evolutions list. Your animal companion gains this evolution. The animal companion must conform to any limitations of the evolution. This feat can be taken multiple times; each time, select a different 1-point evolution.',
    shortDescription: 'Grant a 1-point eidolon evolution to animal companion',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Animal companion or mount class feature' }],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: '1-Point Evolution',
        affectsEffects: true,
        effectTargetTemplate: 'companion.evolution.{choice}',
      },
    ],
    tags: ['companion', 'evolution', 'hunter', 'druid', 'ranger'],
  },
  {
    id: 'familiar_focus',
    name: 'Familiar Focus',
    description:
      'Whenever you target your familiar with a harmless spell or use share spells, your effective caster level for the spell is increased by 1.',
    shortDescription: '+1 effective caster level on spells targeting familiar',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Familiar class feature' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'caster_level.familiar',
        value: 1,
        source: 'Familiar Focus',
      },
    ],
    activationMode: 'conditional',
    tags: ['familiar', 'caster level', 'spellcasting'],
  },
  {
    id: 'spirits_gift',
    name: "Spirit's Gift",
    description:
      'You can grant your animal companion one hex from the list of shaman hexes. The animal companion retains this hex for 24 hours or until you spend another full-round action to grant a different hex.',
    shortDescription: 'Grant a shaman hex to your animal companion',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'animal focus class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['hunter', 'shaman', 'hex', 'animal companion'],
  },

  // ==================== SHAMAN / SPIRIT FEATS ====================
  {
    id: 'shaman_hex_secret',
    name: 'Shaman Hex Secret',
    description:
      "You learn one hex from the witch hex list. You use your shaman level as your witch level for this hex, and your Wisdom modifier in place of your Intelligence modifier for the hex's effects.",
    shortDescription: 'Learn a witch hex using shaman level and Wis',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'hex class feature (shaman)' },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['shaman', 'hex', 'witch'],
  },
  {
    id: 'shamanic_channel',
    name: 'Shamanic Channel',
    description:
      'You can channel positive or negative energy as a cleric of a level equal to your shaman level. You may use this ability a number of times per day equal to 1 + your Charisma modifier.',
    shortDescription: 'Channel energy as cleric of your shaman level',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'spirit magic class feature' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['shaman', 'channel energy', 'healing'],
  },

  // ==================== MISCELLANEOUS COMBAT ====================
  {
    id: 'improved_monster_lore',
    name: 'Improved Monster Lore',
    description:
      'You gain a sacred bonus on all skill checks to identify creatures equal to half your level (minimum 1). This bonus stacks with your monster lore class feature.',
    shortDescription: '+1/2 level sacred bonus to identify creatures',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'monster lore class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['inquisitor', 'knowledge', 'monster lore', 'identification'],
  },
  {
    id: 'scarred_by_war',
    name: 'Scarred by War',
    description:
      'Your scars from combat grant you a +2 bonus on Intimidate checks and a +1 natural armor bonus to AC.',
    shortDescription: '+2 Intimidate, +1 natural armor',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 5 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.intimidate',
        value: 2,
        source: 'Scarred by War',
      },
      {
        type: 'bonus',
        bonusType: BonusType.NATURAL,
        target: 'ac',
        value: 1,
        source: 'Scarred by War',
      },
    ],
    activationMode: 'passive',
    tags: ['intimidate', 'natural armor', 'defense'],
  },
  {
    id: 'snoutgrip',
    name: 'Snoutgrip',
    description:
      'When you succeed at a grapple check against a creature with a bite attack, you can prevent that creature from using its bite attack until the grapple ends. The creature can attempt a combat maneuver check or Escape Artist check on its turn to end this effect.',
    shortDescription: "Grapple to prevent foe's bite attack",
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['grapple', 'monster', 'natural attack', 'defense'],
  },
  {
    id: 'strong_comeback',
    name: 'Strong Comeback',
    description:
      'When you reroll an ability check, skill check, or saving throw, you gain a +2 circumstance bonus on the reroll.',
    shortDescription: '+2 bonus on rerolled checks and saves',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['reroll', 'saving throw', 'skill', 'reliability'],
  },
  {
    id: 'trap_wrecker',
    name: 'Trap Wrecker',
    description:
      'You can attempt to disarm magical traps using Strength and brute force. You use your attack bonus in place of a Disable Device skill check when trying to disable a trap. You must be adjacent to the trap to use this ability.',
    shortDescription: 'Use attack bonus to disable traps via brute force',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'class_feature', featureName: 'rage class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['rage', 'traps', 'disable device', 'barbarian'],
  },
  {
    id: 'burning_amplification_acg',
    name: 'Burning Amplification',
    description:
      "When you cast a spell with the fire descriptor, targets that fail their saving throw against the spell catch fire, taking 1d6 points of fire damage per round for a number of rounds equal to the spell's level.",
    shortDescription: 'Fire spells cause targets to catch fire on failed save',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast 3rd-level arcane spells' },
      { type: 'special', description: 'Fire bloodline, fire domain, or fire school' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fire', 'damage', 'spellcasting', 'bloodline'],
  },

  // ==================== FAITH / COURAGE FEATS ====================
  {
    id: 'fearless_zeal',
    name: 'Fearless Zeal',
    description:
      'When you are under the effects of a morale bonus, you are immune to fear effects. If you are already affected by a fear effect when you receive a morale bonus, the fear effect is suppressed for the duration of the morale bonus.',
    shortDescription: 'Immune to fear while benefiting from morale bonuses',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy class feature' },
      { type: 'special', description: 'Aura of courage class feature or aura class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fear', 'morale', 'immunity', 'paladin'],
  },

  // ==================== TEAMWORK FEATS ====================
  {
    id: 'underhanded_teamwork',
    name: 'Underhanded Teamwork',
    description:
      'When you flank a creature with an ally who also has this feat, you gain a +1 bonus on attack rolls against that creature in addition to the normal flanking bonus. This increases to +2 if the ally is also making a sneak attack.',
    shortDescription: 'Extra flanking bonus with allies who have this feat',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'class_feature', featureName: 'sneak attack 1d6' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 1,
        source: 'Underhanded Teamwork',
        condition: {
          type: 'custom',
          params: { state: 'flanking_with_feat_ally' },
          description: 'When flanking with an ally who has this feat',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['teamwork', 'flanking', 'sneak attack', 'rogue'],
  },
  {
    id: 'coordinated_distraction',
    name: 'Coordinated Distraction',
    description:
      'Whenever you and an ally who also has this feat are both adjacent to the same opponent, that opponent takes a -1 penalty on concentration checks. This penalty increases to -2 if you are both threatening that opponent.',
    shortDescription: "-1 to foe's concentration when adjacent with ally with this feat",
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'passive',
    tags: ['teamwork', 'concentration', 'disruption'],
  },

  // ==================== GAZE FEATS ====================
  {
    id: 'soulful_gaze',
    name: 'Soulful Gaze',
    description:
      "Your mesmerist stare imposes a -2 penalty on the target's Will saves against your mind-affecting spells and abilities instead of the normal -1 penalty.",
    shortDescription: 'Mesmerist stare imposes -2 Will penalty instead of -1',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'mesmerist stare class feature' },
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mesmerist', 'stare', 'Will save', 'mind-affecting'],
  },
  {
    id: 'soulless_gaze',
    name: 'Soulless Gaze',
    description:
      "Your mesmerist stare also imposes a -2 penalty on the target's Sense Motive checks and a -2 penalty on saving throws against fear effects.",
    shortDescription: 'Mesmerist stare also penalizes Sense Motive and fear saves',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'mesmerist stare class feature' },
      { type: 'feat', featId: 'soulful_gaze' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mesmerist', 'stare', 'fear', 'sense motive'],
  },

  // ==================== MISCELLANEOUS ====================
  {
    id: 'port_in_a_storm',
    name: 'Port in a Storm',
    description:
      'When an adjacent ally is targeted by an attack or forced to make a Reflex save, you can take a 5-foot step to put yourself between the attacker and the ally. You become the target of the attack or the effect instead.',
    shortDescription: 'Intercept attacks targeting adjacent allies',
    source: 'Advanced Class Guide',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 3 },
      { type: 'special', description: 'Shield proficiency' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['defense', 'shield', 'ally protection', 'bodyguard'],
  },
];
