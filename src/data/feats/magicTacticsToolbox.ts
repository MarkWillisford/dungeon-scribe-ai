import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const MAGIC_TACTICS_FEATS: FeatDefinition[] = [
  // ==================== MAGIC TACTICS TOOLBOX ====================
  {
    id: 'blood_hex',
    name: 'Blood Hex',
    description:
      'Blood hex feats are supernatural curse effects powered by inflicting wounds. Blood hexes work only against targets you have recently damaged. The saving throw DC for a blood hex is 10 + 1/2 your character level + the highest of your Intelligence, Wisdom, or Charisma modifier. You can target the same creature with the same blood hex only once per 24 hours. The number of times per day you can use blood hexes equals the number of blood hex feats you possess, plus one additional use at 4th level and every 4 levels thereafter. Effects from different blood hexes can affect one creature simultaneously, but the same blood hex effect does not stack with itself. Blood hexes count as hexes for abilities that work against hexes. Shamans and witches gain special benefits with blood hexes and can use each blood hex an unlimited number of times per day (still respecting the 24-hour targeting restriction).',
    shortDescription: 'Use supernatural curse effects powered by dealing wounds',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to deal hit point damage to a target' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['hex', 'curse', 'blood', 'shaman', 'witch'],
  },
  {
    id: 'abeyance_blood_hex',
    name: 'Abeyance (Blood Hex)',
    description:
      'As a standard action, you can target a creature you have dealt damage to with a metal weapon since your last turn. That creature must make a Will save or lose access to spell-like abilities it can use more than once daily for up to 1 minute or until fully healed. For shamans and witches, this hex prevents all spell-like ability use during its duration.',
    shortDescription: 'Curse a wounded foe to suppress its spell-like abilities',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 1 },
      { type: 'feat', featId: 'blood_hex' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['hex', 'curse', 'blood', 'spell-like ability', 'shaman', 'witch'],
  },
  {
    id: 'ability_mastery_item_mastery',
    name: 'Ability Mastery (Item Mastery)',
    description:
      'Once per day, you can meditate for 10 minutes on a magic armor suit or wondrous item with a transmutation spell requirement (2nd level or higher) that occupies a body slot. Upon completing this meditation, you gain a +2 enhancement bonus to one ability score of your choice for 24 hours. You must continuously wear the item to maintain the benefit. Removing the item before 24 hours ends the bonus immediately. You cannot regain the benefit until 24 hours after last activation. Only one active bonus from this feat at a time.',
    shortDescription:
      'Meditate on a transmutation item to gain a +2 enhancement bonus to an ability score',
    source: 'Magic Tactics Toolbox',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +4' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'special.ability_score',
        value: 2,
        source: 'Ability Mastery',
        condition: {
          type: 'custom',
          params: {},
          description:
            'While wearing a qualifying transmutation magic item after 10-minute meditation',
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['item mastery', 'ability score', 'transmutation', 'enhancement'],
  },
  {
    id: 'acute_shot',
    name: 'Acute Shot',
    description:
      'When you gain a magic bonus on a ranged attack roll, you may deduct any range penalties from your damage roll instead of your attack roll. Additionally, you can deal sneak attack damage to targets with partial concealment when your ranged attack has a magical bonus and otherwise qualifies for sneak attack damage. However, you are limited to using a number of sneak attack dice equal to your magic bonus value on the attack roll.',
    shortDescription:
      'Shift range penalties to damage when attacking with magic bonuses; ignore partial concealment for sneak attack',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'far_shot' },
      { type: 'feat', featId: 'precise_shot' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'sneak attack', 'magic bonus', 'concealment'],
  },
  {
    id: 'alchemical_strike',
    name: 'Alchemical Strike',
    description:
      "When you throw a single alchemical item as a full-attack action, you gain a +2 bonus to the DC of any effects from that alchemical item. When your base attack bonus reaches +11 and every 5 points thereafter, the DC increases by an additional 2. This feat does not apply to an alchemist's bombs. Alchemists may take this feat as a discovery without meeting prerequisites, using their class level to determine their effective base attack bonus for calculating the feat's benefits.",
    shortDescription: 'Throw alchemical items as full attacks with increased DC',
    source: 'Magic Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'throw_anything' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['alchemical', 'thrown', 'DC', 'alchemist'],
  },
  {
    id: 'blunt_blade_blood_hex',
    name: 'Blunt Blade (Blood Hex)',
    description:
      "As a standard action, you can curse an enemy's combat accuracy if you have dealt damage to them within the last minute. The target must succeed at a Fortitude save or automatically fail to confirm all critical threats. This effect lasts for 1 round. For shamans or witches specifically, the curse prevents the target from dealing precision damage or sneak attack damage during the hex's duration.",
    shortDescription: 'Curse a wounded foe to prevent critical hit confirmations',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'bab', minimum: 6 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 1 },
      { type: 'feat', featId: 'blood_hex' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['hex', 'curse', 'blood', 'critical', 'shaman', 'witch'],
  },
  {
    id: 'brisk_spell_mtt',
    name: 'Brisk Spell',
    description:
      'When you apply this metamagic feat to a spell that grants creatures new movement types, the speed of that movement type increases by 10 feet. Using this metamagic does not increase the spell slot required — the spell uses a slot of its normal level.',
    shortDescription:
      'Spells granting movement types increase that speed by 10 ft, with no level increase',
    source: 'Magic Tactics Toolbox',
    types: ['metamagic'],
    prerequisites: [{ type: 'ability_score', ability: 'DEX', minimum: 13 }],
    effects: [],
    activationMode: 'toggle',
    tags: ['metamagic', 'movement', 'speed', 'no level increase'],
  },
  {
    id: 'bulls_eye_blood_hex',
    name: "Bull's Eye (Blood Hex)",
    description:
      "As a standard action, you can curse a creature you have dealt ranged weapon damage to since your last turn began. The target must succeed at a Reflex save or you gain two benefits: you don't take penalties on ranged attacks against that creature for the first range increment, and you ignore any bonus to its Armor Class from cover (though total cover still applies). This effect lasts 1 minute. For shamans or witches, the ability applies to any ranged attack damage dealt since their last turn, and the benefits extend to all their ranged attacks against affected creatures.",
    shortDescription: 'Curse a wounded ranged foe to negate range penalties and cover AC bonuses',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'mobility' },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'shot_on_the_run' },
      { type: 'bab', minimum: 4 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 1 },
      { type: 'feat', featId: 'blood_hex' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['hex', 'curse', 'blood', 'ranged', 'cover', 'shaman', 'witch'],
  },
  {
    id: 'burning_amplification',
    name: 'Burning Amplification',
    description:
      "When casting a spell with the fire descriptor, you may accept a -1 penalty on attack rolls and reduce the saving throw DC by 1. In exchange, targets dealt fire damage automatically catch on fire. The burning damage is delayed until the targets' next turn, and each target can attempt a Reflex saving throw (DC = 10 + the spell's level + your spellcasting ability score modifier) to extinguish the flames before being damaged each round. You must declare use of this feat before making attack rolls or before your targets attempt their saving throws. This feat has no effect on spells that neither allow a saving throw nor require an attack roll.",
    shortDescription: 'Trade -1 attack/DC on fire spells to set targets ablaze',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'toggle',
    tags: ['fire', 'amplification', 'burning', 'spellcasting'],
  },
  {
    id: 'cataract_blood_hex',
    name: 'Cataract (Blood Hex)',
    description:
      "As a full-round action, you curse a wounded enemy's eyes. The target must succeed at a Fortitude save or suffer vision obscurement for 1 round. During this time, any creature the affected enemy makes a ranged touch attack against gains concealment. Shamans and witches can use this blood hex against any creature they have damaged within the past minute and can activate it as a standard action instead.",
    shortDescription:
      'Curse a wounded foe to obscure its vision, granting concealment to targets of its ranged touch attacks',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'skill', skillId: 'perception', ranks: 5 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 1 },
      { type: 'feat', featId: 'blood_hex' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['hex', 'curse', 'blood', 'vision', 'concealment', 'shaman', 'witch'],
  },
  {
    id: 'channeling_variance',
    name: 'Channeling Variance',
    description:
      'Three times per day when you channel energy, you can apply the modifications of a chosen variant channeling ability to your channeled energy. If you already possess a variant channeling ability, the feat instead lets you channel energy without those modifications three times daily. The feat can be selected twice; selecting it a second time removes the daily use limit.',
    shortDescription: 'Alter channeled energy with variant channeling abilities 3/day',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'Domain class feature' },
      { type: 'class_feature', featureName: 'Channel energy' },
      { type: 'special', description: 'Must worship and receive spells from a deity' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['channel energy', 'variant channeling', 'cleric', 'divine'],
  },
  {
    id: 'chilling_amplification',
    name: 'Chilling Amplification',
    description:
      "When casting a spell with the cold descriptor, you may accept a -1 penalty on attack rolls and reduce the spell's saving throw DC by 1. In exchange, targets dealt cold damage have their movement speed reduced by 5 feet and cannot take 5-foot steps. This effect persists for 1 round + 1 round per 3 spell levels of the spell. You must commit to using this feat before making attack rolls or before targets attempt their saving throws. The feat does not function with spells that neither allow saving throws nor require attack rolls.",
    shortDescription: 'Trade -1 attack/DC on cold spells to slow targets and prevent 5-foot steps',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'toggle',
    tags: ['cold', 'amplification', 'movement', 'spellcasting'],
  },
  {
    id: 'concealment_mastery_item_mastery',
    name: 'Concealment Mastery (Item Mastery)',
    description:
      'You can leverage illusion magic items for concealment purposes. You can cause an item with a 1st-level or higher illusion spell in its construction requirements to cast vanish. With 7 ranks in both Stealth and Use Magic Device, the feat expands to allow items with 2nd-level or higher illusion spells to cast either invisibility or undetectable alignment. You gain one use per day, with additional daily uses when your base Fortitude save bonus reaches +9 and +12.',
    shortDescription: 'Use illusion magic items to cast vanish or invisibility',
    source: 'Magic Tactics Toolbox',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'stealth', ranks: 3 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['item mastery', 'concealment', 'illusion', 'invisibility'],
  },
  {
    id: 'consumption_blood_hex',
    name: 'Consumption (Blood Hex)',
    description:
      'As a full-round action, you can curse a wounded opponent. The creature must succeed at a Fortitude save or if it uses any of the following class abilities during the next minute, it must spend at least two daily uses or rounds of that ability: arcane pool, arcane reservoir, bardic performance, bloodrage, bomb, inspiration, ki pool, mental focus, mesmerist trick, phrenic pool, rage, or raging song. Characters with the shaman or witch class can activate this ability as a standard action instead.',
    shortDescription: 'Curse a wounded foe to double the resource cost of its class abilities',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 5 },
      { type: 'feat', featId: 'blood_hex' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['hex', 'curse', 'blood', 'resources', 'shaman', 'witch'],
  },
  {
    id: 'disconcerting_stare',
    name: 'Disconcerting Stare',
    description:
      'When you trigger your painful stare, your target must succeed at a Will save (DC = 10 + 1/2 your mesmerist level + your Charisma modifier) or take a -6 penalty on Disable Device and Perception checks, plus a -2 penalty on Reflex saves for one minute. Targets with trap finding or trap sense abilities also lose those benefits for the duration if they fail the save.',
    shortDescription: 'Trigger painful stare to inflict perception/trap penalties on a foe',
    source: 'Magic Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'Painful stare' },
      { type: 'special', description: 'Mesmerist level 5th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mesmerist', 'stare', 'painful stare', 'trap'],
  },
  {
    id: 'eldritch_assault',
    name: 'Eldritch Assault',
    description:
      'When attacking from magical concealment (such as displacement or invisibility spells), the first attack roll you make each round that is a critical threat is automatically confirmed as a critical hit.',
    shortDescription: 'Auto-confirm critical threats while attacking from magical concealment',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'blind_fight' },
      { type: 'feat', featId: 'improved_initiative' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['concealment', 'critical', 'invisibility', 'displacement'],
  },
  {
    id: 'encouraging_spell_mtt',
    name: 'Encouraging Spell',
    description:
      "Any morale bonus granted by an encouraging spell is increased by 1. An encouraging spell uses up a spell slot 1 level higher than the spell's actual level.",
    shortDescription: 'Increase morale bonuses from spells by 1 (level +1)',
    source: 'Magic Tactics Toolbox',
    types: ['metamagic'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'skill', skillId: 'diplomacy', ranks: 6 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['metamagic', 'morale bonus', 'buff'],
  },
  {
    id: 'expanded_metakinesis',
    name: 'Expanded Metakinesis',
    description:
      'Select one metamagic feat from the following list: Disruptive Spell, Ectoplasmic Spell, Furious Spell, Merciful Spell, or Piercing Spell. By accepting 1 point of burn, you can modify your kinetic blast to function as though you had applied the chosen metamagic effect. This feat may be taken multiple times, with each selection applying to a different metamagic option from the approved list.',
    shortDescription: 'Apply a selected metamagic effect to your kinetic blast for 1 burn',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'Kinetic blast' },
      { type: 'class_feature', featureName: 'Metakinesis' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['kineticist', 'kinetic blast', 'metakinesis', 'burn', 'metamagic'],
  },
  {
    id: 'extra_blood_hex',
    name: 'Extra Blood Hex',
    description:
      'You can use blood hexes two additional times per day. This feat can be taken multiple times; each instance grants two more daily uses of blood hexes. Characters who later take levels in shaman or witch classes may immediately replace this feat with any blood hex feat for which they meet the prerequisites.',
    shortDescription: 'Gain 2 additional daily uses of blood hexes',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 15 },
      { type: 'special', description: 'Two or more blood hex feats' },
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 5 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['hex', 'blood', 'extra uses'],
  },
  {
    id: 'extra_variance',
    name: 'Extra Variance',
    description:
      "You gain one additional variant channeling ability matching your deity's domains, subdomains, or areas of concern. Three times daily, you can apply this variant's modifications to your channel energy, reducing the damage dealt or healing performed by your channeled energy as normal. Multiple variant abilities cannot be applied simultaneously. This feat can be selected multiple times. Upon selecting it twice, you gain the flexibility to use any variant channeling ability chosen with this feat whenever you channel energy.",
    shortDescription: 'Gain an additional variant channeling ability usable 3/day',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Channeling Variance feat or variant channeling ability' },
      { type: 'class_feature', featureName: 'Channel energy' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['channel energy', 'variant channeling', 'cleric', 'divine'],
  },
  {
    id: 'falter_blood_hex',
    name: 'Falter (Blood Hex)',
    description:
      "As a standard action, you can curse an enemy you have dealt damage to since your last turn. The target must succeed at a Will save or be unable to take a 5-foot step, delay an action, or ready an action for 1 round. For shamans or witches, this blood hex can target any creature damaged within the past minute, and affected creatures also have their movement rate halved during the effect's duration.",
    shortDescription: 'Curse a wounded foe to prevent 5-ft steps, delays, and readied actions',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 5 },
      { type: 'feat', featId: 'blood_hex' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['hex', 'curse', 'blood', 'movement', 'shaman', 'witch'],
  },
  {
    id: 'force_shield_mastery_item_mastery',
    name: 'Force Shield Mastery (Item Mastery)',
    description:
      'You can activate an abjuration magic item to create a protective force barrier. When you use an item with an abjuration spell of 1st level or higher in its construction requirements, you can generate an effect functioning like the shield spell. The AC bonus equals 1/3 your base Fortitude save bonus (minimum +1). You gain one daily use of this ability, with additional uses at base Fortitude save bonuses of +6, +9, and +12.',
    shortDescription: 'Use an abjuration magic item to generate a shield spell effect',
    source: 'Magic Tactics Toolbox',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['item mastery', 'abjuration', 'shield', 'force'],
  },
  {
    id: 'hinder_blood_hex',
    name: 'Hinder (Blood Hex)',
    description:
      'As a standard action, you can curse an opponent you have damaged with a melee attack within the last minute. The target must succeed at a Reflex save or suffer a -10 penalty on any initiative check it makes in the next minute. For shamans or witches, this hex instead prevents the target from taking a full-attack action for 1 round, and can be extended using the cackle hex ability.',
    shortDescription: 'Curse a wounded melee foe with -10 initiative penalty',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 5 },
      { type: 'feat', featId: 'blood_hex' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['hex', 'curse', 'blood', 'initiative', 'shaman', 'witch'],
  },
  {
    id: 'hindrance_dismissal',
    name: 'Hindrance Dismissal',
    description:
      'You can dismiss pit spells (such as create pit, hungry pit, spiked pit) and wall spells (such as wall of fire, wall of ice) that you have cast, provided they have a duration of at least 1 round. You may dismiss these conjured effects as a standard action, following normal spell dismissal rules.',
    shortDescription: 'Dismiss pit and wall spells you have cast as a standard action',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'toggle',
    tags: ['conjuration', 'pit spell', 'wall spell', 'dismiss'],
  },
  {
    id: 'implement_mastery_item_mastery',
    name: 'Implement Mastery (Item Mastery)',
    description:
      "You treat your implements as magic items for purposes of item mastery feats. Spells known from each implement's associated school count as effective construction requirements. When activating an item mastery feat using an implement, you can expend mental focus points equal to half the feat's base Fortitude save bonus prerequisite to activate the feat without consuming one of its daily uses. Occultists with this feat may select item mastery feats instead of focus powers, provided they meet all prerequisites.",
    shortDescription: 'Use occultist implements as qualifying magic items for item mastery feats',
    source: 'Magic Tactics Toolbox',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'class_feature', featureName: 'Implements class feature' },
      { type: 'class_feature', featureName: 'Mental focus class feature' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['item mastery', 'occultist', 'implement', 'mental focus'],
  },
  {
    id: 'manifold_stare',
    name: 'Manifold Stare',
    description:
      'You can trigger your painful stare one additional time per round. This feat can be taken multiple times — once at 3rd level, again at 9th level, and once more at 15th level, with effects stacking. A mesmerist may take this feat instead of a bold stare improvement.',
    shortDescription: 'Trigger painful stare one additional time per round',
    source: 'Magic Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'Painful stare' },
      { type: 'special', description: 'Mesmerist level 3rd' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mesmerist', 'stare', 'painful stare'],
  },
  {
    id: 'practiced_ritualist',
    name: 'Practiced Ritualist',
    description:
      "You receive a +2 bonus on skill checks to perform occult rituals, and on Intelligence checks to learn the method of casting an occult ritual. Additionally, when serving as the primary caster, you increase saving throw DCs against the ritual's effects by 2. If the ritual requires secondary casters, that minimum number decreases by 1.",
    shortDescription:
      '+2 bonus on occult ritual skill checks; increase ritual DCs and reduce secondary caster requirements',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_history', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.occult_ritual_skill_checks',
        value: 2,
        source: 'Practiced Ritualist',
        condition: {
          type: 'always',
          params: {},
          description: 'Always active for occult ritual checks',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['occult', 'ritual', 'skill bonus'],
  },
  {
    id: 'racial_item_mastery_item_mastery',
    name: 'Racial Item Mastery (Item Mastery)',
    description:
      'You can focus on an item associated with your race to use a racial spell-like ability that you have without expending any uses per day. The ability must come from racial traits, race-specific feats or traits, or class options exclusive to your race. You must use a magic item with a spell in its construction requirement that matches the same school and spell level as the racial ability you want to activate. You can employ this feat once daily, with additional uses granted when your base Fortitude save reaches +9 and +12.',
    shortDescription:
      'Use a racial spell-like ability via a matching magic item without spending daily uses',
    source: 'Magic Tactics Toolbox',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 6 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
      { type: 'special', description: 'Must have at least one racial spell-like ability' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['item mastery', 'racial', 'spell-like ability'],
  },
  {
    id: 'resistance_mastery_item_mastery',
    name: 'Resistance Mastery (Item Mastery)',
    description:
      'By meditating for 10 minutes daily with an abjuration magic item, you gain either a +1 resistance bonus on all saving throws or 5 points of energy resistance against one energy type. The benefit lasts 24 hours and requires continuous wearing of the item. The resistance bonus and energy resistance both increase as your base Fortitude saving throw bonus increases (+6, +9, and +12). Only one benefit may be active at a time.',
    shortDescription:
      'Meditate with an abjuration item to gain saving throw resistance or energy resistance',
    source: 'Magic Tactics Toolbox',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RESISTANCE,
        target: 'save.all',
        value: 1,
        source: 'Resistance Mastery',
        condition: {
          type: 'custom',
          params: {},
          description:
            'While wearing a qualifying abjuration magic item after 10-minute meditation',
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['item mastery', 'abjuration', 'resistance', 'energy resistance', 'saving throws'],
  },
  {
    id: 'restoration_mastery_item_mastery',
    name: 'Restoration Mastery (Item Mastery)',
    description:
      'You can cause an item with a conjuration (healing) spell of 2nd level or higher in its construction requirements to cast lesser restoration. With 9 ranks in both Heal and Use Magic Device, you can instead cause an item with a conjuration (healing) spell of 3rd level or higher to cast either remove blindness/deafness or remove paralysis. You gain one daily use, with additional uses at base Fortitude save bonuses of +9 and +12.',
    shortDescription: 'Use a healing magic item to cast lesser restoration or remove conditions',
    source: 'Magic Tactics Toolbox',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'heal', ranks: 5 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 5 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['item mastery', 'conjuration', 'healing', 'restoration'],
  },
  {
    id: 'scale_and_skin',
    name: 'Scale and Skin',
    description:
      'Whenever a transmutation spell or spell-like ability affects you, your natural armor bonus increases by 1. If you have no natural armor bonus to Armor Class, you treat your natural armor bonus as 0 for the purposes of this feat. If the caster level of the transmutation effect is 10th or higher, the bonus increases by 2 instead. The duration of this bonus lasts as long as the transmutation spell continues to affect you.',
    shortDescription:
      'Gain +1 (or +2 at CL 10+) natural armor when affected by transmutation magic',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'CON', minimum: 13 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.NATURAL,
        target: 'ac',
        value: 1,
        source: 'Scale and Skin',
        condition: {
          type: 'custom',
          params: {},
          description: 'While affected by a transmutation spell or spell-like ability',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['transmutation', 'natural armor', 'AC'],
  },
  {
    id: 'shocking_amplification',
    name: 'Shocking Amplification',
    description:
      'When casting an electricity descriptor spell targeting one or more creatures, you may accept a -1 penalty on attack rolls and reduce the saving throw DC by 1. In exchange, the target closest to you that is dealt electricity damage by the spell becomes fatigued for 1 round. This effect cannot make an already fatigued creature become exhausted. You must declare use before rolling or before the target saves. The feat has no effect on spells lacking both saving throws and attack rolls.',
    shortDescription: 'Trade -1 attack/DC on electricity spells to fatigue the closest target hit',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'toggle',
    tags: ['electricity', 'amplification', 'fatigue', 'spellcasting'],
  },
  {
    id: 'symbolic_mastery_item_mastery',
    name: 'Symbolic Mastery (Item Mastery)',
    description:
      "A number of times daily equal to your base Fortitude save bonus, you can create a symbolic bolt — a magical attack delivered via melee touch or ranged ray (30-foot range) as a standard action. The bolt deals 1d6 + 1/2 your total number of ranks in the Use Magic Device skill. You choose the damage type from those granted by your deity's cleric domains: acid, cold, electricity, fire, negative energy, positive energy, or sonic. Untyped damage deals reduced damage (1d3 + 1/2 your ranks in Use Magic Device). You can take Weapon Focus (symbolic bolt) to apply bonuses to both melee and ranged versions.",
    shortDescription:
      'Channel divine power through your holy symbol as melee touch or ranged ray attacks',
    source: 'Magic Tactics Toolbox',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 4 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +2' },
      { type: 'special', description: 'Must worship a deity' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['item mastery', 'holy symbol', 'divine', 'ray', 'melee touch'],
  },
  {
    id: 'uncertainty_blood_hex',
    name: 'Uncertainty (Blood Hex)',
    description:
      'By spending a full-round action targeting a creature you have damaged within the last minute, you force a Will save. On failure, the target suffers a -6 penalty to skill checks in one chosen skill from this list: Bluff, Diplomacy, or Intimidate. The effect persists until the subject recovers all hit point damage or one hour passes, whichever comes first. For shamans and witches, the action becomes standard instead of full-round, and the penalty applies to all three skills simultaneously rather than just one.',
    shortDescription:
      'Curse a wounded foe with -6 penalty to a social skill (all three for shamans/witches)',
    source: 'Magic Tactics Toolbox',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'skill', skillId: 'bluff', ranks: 5 },
      { type: 'skill', skillId: 'diplomacy', ranks: 5 },
      { type: 'skill', skillId: 'intimidate', ranks: 5 },
      { type: 'feat', featId: 'blood_hex' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['hex', 'curse', 'blood', 'social', 'shaman', 'witch'],
  },
  {
    id: 'vast_spell_mtt',
    name: 'Vast Spell',
    description:
      "When applied to a spell that targets multiple creatures within 30 feet of each other, the maximum distance apart of those you target with the spell increases to 60 feet. A vast spell uses up a spell slot 1 level higher than the spell's actual level.",
    shortDescription:
      'Increase the spacing between targets of multi-target spells from 30 ft to 60 ft (level +1)',
    source: 'Magic Tactics Toolbox',
    types: ['metamagic'],
    prerequisites: [{ type: 'caster_level', minimum: 3 }],
    effects: [],
    activationMode: 'toggle',
    tags: ['metamagic', 'area', 'multi-target', 'range'],
  },
  {
    id: 'weapon_evoker_mastery_item_mastery',
    name: 'Weapon Evoker Mastery (Item Mastery)',
    description:
      'As a swift action while wielding a magic weapon with a special ability that deals extra acid, cold, fire, electricity, or sonic damage, you inflict an additional 1d4 points of damage of that same type with each successful hit for 1 round.',
    shortDescription:
      "Swift action: add 1d4 energy damage to a magic weapon's energy special ability for 1 round",
    source: 'Magic Tactics Toolbox',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 2 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['item mastery', 'weapon', 'energy damage', 'evocation'],
  },
];
