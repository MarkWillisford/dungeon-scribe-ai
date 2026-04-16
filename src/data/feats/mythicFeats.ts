import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const MYTHIC_FEATS: FeatDefinition[] = [
  {
    id: 'accursed_hex_mythic',
    name: 'Accursed Hex (Mythic)',
    description:
      'When you use Accursed Hex to target a creature with one of your hexes a second time, that creature must roll its saving throw twice and take the lower result.',
    shortDescription: 'Targets re-hexed must roll saves twice and take the lower result',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'accursed_hex' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'hex', 'witch'],
  },
  {
    id: 'acrobatic_mythic',
    name: 'Acrobatic (Mythic)',
    description:
      'The bonus granted by Acrobatic on Acrobatics and Fly checks increases by 2. You can expend one use of mythic power to treat an Acrobatics or Fly check as if you had rolled a natural 20. You must decide to use this ability before making the roll.',
    shortDescription:
      '+2 bonus increase on Acrobatics/Fly; spend mythic power to treat roll as natural 20',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'acrobatic' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.acrobatics',
        value: 2,
        source: 'Acrobatic (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.fly',
        value: 2,
        source: 'Acrobatic (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
    ],
    activationMode: 'passive',
    tags: ['mythic', 'acrobatics', 'fly', 'skill'],
  },
  {
    id: 'alertness_mythic',
    name: 'Alertness (Mythic)',
    description:
      'The bonus granted by Alertness on Perception and Sense Motive checks increases by 2. You can expend one use of mythic power to treat a Perception or Sense Motive check as if you had rolled a natural 20. You must decide to use this ability before making the roll.',
    shortDescription:
      '+2 bonus increase on Perception/Sense Motive; spend mythic power to treat roll as natural 20',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'alertness' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: 2,
        source: 'Alertness (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: 2,
        source: 'Alertness (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
    ],
    activationMode: 'passive',
    tags: ['mythic', 'perception', 'sense_motive', 'skill'],
  },
  {
    id: 'alignment_channel_mythic',
    name: 'Alignment Channel (Mythic)',
    description:
      'Your channeled energy affects any creatures with the alignment chosen when you took Alignment Channel (not just outsiders, and not just those with the alignment subtype), but grants only half healing or deals only half damage to these targets. You may instead expend two uses of mythic power when using Alignment Channel to treat all targets of the chosen alignment as if they possessed that alignment subtype, granting full healing or dealing full damage.',
    shortDescription:
      'Channel affects all creatures of chosen alignment at half effect; spend 2 mythic power for full effect',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'alignment_channel' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'channel_energy', 'alignment'],
  },
  {
    id: 'animal_affinity_mythic',
    name: 'Animal Affinity (Mythic)',
    description:
      'The bonus granted by Animal Affinity on Handle Animal and Ride checks increases by 2. You can expend one use of mythic power to cast speak with animals as a spell-like ability with a caster level equal to twice your mythic tier.',
    shortDescription:
      '+2 bonus increase on Handle Animal/Ride; spend mythic power to cast speak with animals',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'animal_affinity' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.handle_animal',
        value: 2,
        source: 'Animal Affinity (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.ride',
        value: 2,
        source: 'Animal Affinity (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
    ],
    activationMode: 'passive',
    tags: ['mythic', 'handle_animal', 'ride', 'skill'],
  },
  {
    id: 'arcane_armor_training_mythic',
    name: 'Arcane Armor Training (Mythic)',
    description:
      'You no longer need to spend a swift action to activate the spell failure reduction from Arcane Armor Training. When wearing light armor, you gain an additional 20% reduction to your arcane spell failure chance beyond what the standard feat provides.',
    shortDescription:
      'Arcane Armor Training activates automatically; additional 20% spell failure reduction in light armor',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'arcane_armor_training' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'arcane', 'armor', 'spell_failure'],
  },
  {
    id: 'arcane_blast_mythic',
    name: 'Arcane Blast (Mythic)',
    description:
      'You can reduce the damage dice of your Arcane Blast by half to perform a trip or bull rush combat maneuver against your target, gaining a bonus to the maneuver check equal to half the spell level sacrificed and using Intelligence or Charisma instead of Strength. You can expend one use of mythic power to change the damage dice of your Arcane Blast to d8s instead of d6s.',
    shortDescription:
      'Trade half damage for trip/bull rush; spend mythic power to upgrade damage to d8s',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'arcane_blast' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'arcane', 'blast', 'combat_maneuver'],
  },
  {
    id: 'arcane_shield_mythic',
    name: 'Arcane Shield (Mythic)',
    description:
      'When activating Arcane Shield, you add half your mythic tier to the deflection bonus granted to your AC. You may expend one use of mythic power to extend the duration to a number of rounds equal to your tier, rather than the standard duration.',
    shortDescription:
      'Arcane Shield grants deflection bonus +half tier; spend mythic power to extend duration',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'arcane_shield' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'arcane', 'shield', 'ac'],
  },
  {
    id: 'arcane_strike_mythic',
    name: 'Arcane Strike (Mythic)',
    description:
      'The effect of Arcane Strike lasts 1 minute instead of 1 round. By expending one use of mythic power when activating Arcane Strike, you gain the ability to add one magic weapon special ability with a base price modifier of +1 to your weapons. This modifier increases to +2 at 4th tier, +3 at 7th tier, and +4 at 10th tier.',
    shortDescription:
      'Arcane Strike lasts 1 minute; spend mythic power to add magic weapon property',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'arcane_strike' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'arcane', 'strike', 'weapon'],
  },
  {
    id: 'aspect_of_the_beast_mythic',
    name: 'Aspect of the Beast (Mythic)',
    description:
      "Your bestial nature manifests in one of four ways. Mythic Senses: You gain darkvision if you don't have it, or increase existing darkvision range by 30 feet plus 10 feet per tier. Mythic Claws: Your claws deal 1d4 damage (1d3 if Small), or increase by one die type; by expending mythic power after hitting with both claws you can rend, dealing extra damage equal to one claw's damage plus 1-1/2 times your Strength bonus. Mythic Leap: You remove the 10-foot running requirement for jumping and gain +5 on Acrobatics checks for jumps (+10 if you have predator's leap). Mythic Instinct: You gain +2 bonuses to both initiative and Survival checks, stacking with wild instinct bonuses.",
    shortDescription:
      'Enhanced beast manifestations: improved darkvision, rending claws, better jumping, or initiative/Survival bonuses',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'aspect_of_the_beast' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'beast', 'natural_attack', 'darkvision'],
  },
  {
    id: 'athletic_mythic',
    name: 'Athletic (Mythic)',
    description:
      'The bonus granted by Athletic on Climb and Swim checks increases by 2. By expending one use of mythic power, you may treat a Climb or Swim check as if a natural 20 was rolled. You must decide to use this ability before making the roll.',
    shortDescription:
      '+2 bonus increase on Climb/Swim; spend mythic power to treat roll as natural 20',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'athletic' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.climb',
        value: 2,
        source: 'Athletic (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.swim',
        value: 2,
        source: 'Athletic (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
    ],
    activationMode: 'passive',
    tags: ['mythic', 'climb', 'swim', 'skill'],
  },
  {
    id: 'augment_summoning_mythic',
    name: 'Augment Summoning (Mythic)',
    description:
      "Creatures you summon are considered mythic for the purpose of interacting with other mythic creatures, but don't gain mythic abilities themselves. They are subject to mythic spells and effects as 1st-tier mythic creatures. Additionally, if a summoned creature has damage reduction, that reduction becomes DR/epic.",
    shortDescription: 'Summoned creatures count as mythic; their DR becomes DR/epic',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'augment_summoning' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'summoning', 'conjuration'],
  },
  {
    id: 'bleeding_critical_mythic',
    name: 'Bleeding Critical (Mythic)',
    description:
      'The bleed damage from Bleeding Critical increases based on your mythic tier. The DC to stop the bleeding with a Heal check becomes 15 plus half your tier, while magical healing ends it normally. Additionally, you can expend one use of mythic power to add 1 point of Constitution bleed alongside normal hit point bleed, with each additional use of mythic power increasing this effect by 1.',
    shortDescription:
      'Increased bleed damage and DC by tier; spend mythic power to add Constitution bleed',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'critical', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'bleeding_critical' },
      { type: 'feat', featId: 'critical_focus_mythic' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mythic', 'bleed', 'critical', 'constitution'],
  },
  {
    id: 'blind_fight_mythic',
    name: 'Blind-Fight (Mythic)',
    description:
      'By spending a swift action and expending one use of mythic power, you can ignore all miss chances due to concealment or total concealment for a number of rounds equal to your tier.',
    shortDescription:
      'Spend mythic power as swift action to ignore all concealment miss chances for rounds equal to tier',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'blind_fight' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'blindfight', 'concealment'],
  },
  {
    id: 'catch_off_guard_mythic',
    name: 'Catch Off-Guard (Mythic)',
    description:
      'The damage you deal with improvised weapons increases by your mythic tier. You also gain a bonus to your Combat Maneuver Defense equal to your tier whenever an opponent attempts to sunder or disarm an improvised weapon you are wielding.',
    shortDescription:
      'Improvised weapon damage +tier; CMD bonus equal to tier vs. sunder/disarm of improvised weapons',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'catch_off_guard' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'improvised_weapon', 'cmd'],
  },
  {
    id: 'channel_smite_mythic',
    name: 'Channel Smite (Mythic)',
    description:
      'When using Channel Smite, you gain a bonus on your attack roll equal to the number of d6s granted by your channel energy class feature. The bonus is sacred (positive energy) or profane (negative energy). If the attack misses, you may expend one use of mythic power as a free action to release the channeled energy, producing the normal effects of your channel energy class feature centered on the creature you were attempting to smite.',
    shortDescription:
      'Attack bonus equal to channel energy dice; on miss, spend mythic power to release channel energy anyway',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'channel_smite' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'channel_energy', 'smite'],
  },
  {
    id: 'charge_through_mythic',
    name: 'Charge Through (Mythic)',
    description:
      'You can ignore allies in your path when determining whether or not you can charge your target. Additionally, after performing at least one overrun attempt during a charge using Charge Through, you may expend one use of mythic power as a free action to attempt another overrun against a different opponent in the path of the same charge.',
    shortDescription:
      'Ignore allies when charging; spend mythic power for additional overrun during same charge',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'charge_through' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mythic', 'charge', 'overrun'],
  },
  {
    id: 'cleave_mythic',
    name: 'Cleave (Mythic)',
    description:
      'When using Cleave or Great Cleave, you can attack foes within reach that are not adjacent to your original target. By expending one use of mythic power, you may continue making attacks against any foes within reach as long as each attack hits. You cannot target the same opponent more than once per round with this ability.',
    shortDescription:
      'Cleave/Great Cleave can reach non-adjacent foes; spend mythic power to chain unlimited attacks',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'cleave' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'cleave', 'melee'],
  },
  {
    id: 'combat_expertise_mythic',
    name: 'Combat Expertise (Mythic)',
    description:
      'Whenever you use Combat Expertise, you gain an additional +2 dodge bonus to your AC beyond the normal benefits. You can expend one use of mythic power to eliminate the attack roll and combat maneuver penalties imposed by Combat Expertise for 1 minute.',
    shortDescription:
      'Additional +2 dodge AC with Combat Expertise; spend mythic power to negate penalties for 1 minute',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 2,
        source: 'Combat Expertise (Mythic)',
        condition: { type: 'custom', params: {}, description: 'While using Combat Expertise' },
      },
    ],
    activationMode: 'toggle',
    tags: ['mythic', 'combat_expertise', 'ac', 'dodge'],
  },
  {
    id: 'combat_reflexes_mythic',
    name: 'Combat Reflexes (Mythic)',
    description:
      'You can make any number of additional attacks of opportunity per round. As a swift action, you may expend one use of mythic power to gain the ability until the start of your next turn to make attacks of opportunity against enemies you have already made attacks of opportunity against during the current round, but only when they provoke through movement.',
    shortDescription:
      'Unlimited attacks of opportunity per round; spend mythic power to re-attack same foe when they move',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'attacks_of_opportunity', 'combat_reflexes'],
  },
  {
    id: 'command_undead_mythic',
    name: 'Command Undead (Mythic)',
    description:
      'The Will save DC to resist your Command Undead increases by half your mythic tier, and intelligent undead cannot attempt additional saves after their initial resistance check. Non-mythic creatures automatically fail when trying to command your undead servants. You gain a +4 bonus on Charisma checks to prevent mythic creatures from taking control of your undead.',
    shortDescription:
      'Higher DC vs. command undead, intelligent undead get no retry; +4 bonus protecting undead from mythic takeover',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'command_undead' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'undead', 'command', 'necromancy'],
  },
  {
    id: 'mythic_crafter',
    name: 'Mythic Crafter (Mythic)',
    description:
      'You can create any mythic magic item for which you have the appropriate item creation feat. Additionally, you gain a +5 bonus on skill checks when creating non-mythic magic items.',
    shortDescription: 'Create mythic magic items; +5 on skill checks for non-mythic item creation',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'special', description: 'Any item creation feat' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.spellcraft',
        value: 5,
        source: 'Mythic Crafter (Mythic)',
        condition: {
          type: 'custom',
          params: {},
          description: 'When creating non-mythic magic items',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['mythic', 'item_creation', 'crafting'],
  },
  {
    id: 'critical_focus_mythic',
    name: 'Critical Focus (Mythic)',
    description:
      'You automatically confirm critical threats against non-mythic opponents. When threatening a critical hit against creatures with fortification armor or similar effects, those creatures must roll twice and accept the worse result when determining whether the critical hit is negated.',
    shortDescription:
      'Auto-confirm criticals vs. non-mythic; fortification must roll twice to negate',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'critical_focus' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'critical', 'confirm'],
  },
  {
    id: 'critical_mastery_mythic',
    name: 'Critical Mastery (Mythic)',
    description:
      'The number of critical feats you may apply on a critical hit increases by 1 for every 3 tiers you possess, in addition to the number granted by the base Critical Mastery feat.',
    shortDescription: 'Apply additional critical feats on criticals, scaling with tiers',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'critical_mastery' },
      { type: 'feat', featId: 'critical_focus_mythic' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'critical', 'critical_mastery'],
  },
  {
    id: 'dastardly_finish_mythic',
    name: 'Dastardly Finish (Mythic)',
    description:
      'You can deliver a coup de grace against dazed and staggered non-mythic opponents in addition to the conditions allowed by the base feat. Whenever an opponent attempts a Fortitude saving throw to survive one of your coup de grace attacks, that creature takes a penalty to that saving throw equal to your tier.',
    shortDescription:
      'Coup de grace dazed/staggered non-mythic foes; Fortitude save penalty equal to tier',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'dastardly_finish' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mythic', 'coup_de_grace', 'dastardly'],
  },
  {
    id: 'dazzling_display_mythic',
    name: 'Dazzling Display (Mythic)',
    description:
      'You can perform Dazzling Display as a standard action (–5 penalty on Intimidate), move action (–10 penalty), or swift action (–20 penalty). By spending one use of mythic power before making the Intimidate check, targets become frightened rather than shaken.',
    shortDescription:
      'Dazzling Display as standard/move/swift action with penalties; spend mythic power to frighten instead of shake',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'dazzling_display' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'intimidate', 'dazzling_display', 'fear'],
  },
  {
    id: 'deadly_aim_mythic',
    name: 'Deadly Aim (Mythic)',
    description:
      'When using Deadly Aim, you gain a +3 bonus on ranged damage rolls instead of +2. When your base attack bonus reaches +4, and every +4 thereafter, the bonus on ranged damage rolls increases by +3 rather than +2.',
    shortDescription:
      'Deadly Aim grants +3 ranged damage (instead of +2), scaling by +3 per +4 BAB',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'deadly_aim' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'ranged', 'deadly_aim', 'damage'],
  },
  {
    id: 'deadly_stroke_mythic',
    name: 'Deadly Stroke (Mythic)',
    description:
      'By spending one use of mythic power while making a Deadly Stroke attack, you can instantly slay a non-mythic living creature. The target may attempt a Fortitude save (DC 10 + base attack bonus + mythic tier) to negate the instant death effect. Even if the save succeeds, the attack still delivers double damage and Constitution bleed. This ability cannot kill constructs, oozes, or creatures immune to critical hits or precision damage.',
    shortDescription:
      'Spend mythic power on Deadly Stroke to potentially instantly kill non-mythic living creatures',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'deadly_stroke' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'deadly_stroke', 'instant_death'],
  },
  {
    id: 'death_from_above_mythic',
    name: 'Death from Above (Mythic)',
    description:
      "When charging an opponent from higher ground or while airborne, the weapon's critical multiplier increases by 2 (maximum ×6). This benefit doesn't combine with other abilities that modify critical multipliers. Upon a successful charge attack from above, you may execute a trip combat maneuver against your target as a free action without provoking attacks of opportunity.",
    shortDescription:
      'Charging from above increases critical multiplier by 2; free trip attempt on successful aerial charge',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'death_from_above' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mythic', 'charge', 'aerial', 'critical'],
  },
  {
    id: 'deceitful_mythic',
    name: 'Deceitful (Mythic)',
    description:
      'The bonus on Bluff and Disguise checks from Deceitful increases by 2. By spending one use of mythic power, you may treat a single Bluff or Disguise check as if you had rolled a natural 20. You must decide to use this ability before making the roll.',
    shortDescription:
      '+2 bonus increase on Bluff/Disguise; spend mythic power to treat roll as natural 20',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'deceitful' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: 2,
        source: 'Deceitful (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.disguise',
        value: 2,
        source: 'Deceitful (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
    ],
    activationMode: 'passive',
    tags: ['mythic', 'bluff', 'disguise', 'skill'],
  },
  {
    id: 'deepsight_mythic',
    name: 'Deepsight (Mythic)',
    description: 'The range of your darkvision increases by 10 feet per mythic tier.',
    shortDescription: 'Darkvision range increases by 10 feet per tier',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'deepsight' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'darkvision', 'vision'],
  },
  {
    id: 'defensive_combat_training_mythic',
    name: 'Defensive Combat Training (Mythic)',
    description:
      'You add half your mythic tier to your Combat Maneuver Defense (CMD). This bonus stacks with other bonuses to CMD.',
    shortDescription: '+half mythic tier to CMD',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'defensive_combat_training' },
      { type: 'special', description: '4th mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'cmd', 'defensive_combat_training'],
  },
  {
    id: 'deflect_arrows_mythic',
    name: 'Deflect Arrows (Mythic)',
    description:
      'When using the standard Deflect Arrows feat, you can deflect an additional number of ranged attacks per round equal to half your tier. You can also expend one use of mythic power as an immediate action to deflect a single ray from a ray spell or effect targeting you.',
    shortDescription:
      'Deflect additional ranged attacks per round equal to half tier; spend mythic power to deflect ray spells',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'deflect_arrows' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'deflect_arrows', 'ranged_defense'],
  },
  {
    id: 'deft_hands_mythic',
    name: 'Deft Hands (Mythic)',
    description:
      'The bonus granted by Deft Hands on Disable Device and Sleight of Hand checks increases by 2. By expending one use of mythic power, you may treat either a Disable Device or Sleight of Hand check as though you rolled a natural 20. You must commit to using this ability before rolling.',
    shortDescription:
      '+2 bonus increase on Disable Device/Sleight of Hand; spend mythic power to treat roll as natural 20',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'deft_hands' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.disable_device',
        value: 2,
        source: 'Deft Hands (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sleight_of_hand',
        value: 2,
        source: 'Deft Hands (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
    ],
    activationMode: 'passive',
    tags: ['mythic', 'disable_device', 'sleight_of_hand', 'skill'],
  },
  {
    id: 'detect_expertise_mythic',
    name: 'Detect Expertise (Mythic)',
    description:
      'You gain the benefits of Detect Expertise instantaneously, without the standard 3-round observation period. Additionally, non-mythic creatures lose their ability to make Will saves against this effect.',
    shortDescription: 'Detect Expertise benefits are immediate; non-mythic creatures cannot resist',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'detect_expertise' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'detect', 'divination'],
  },
  {
    id: 'disruptive_mythic',
    name: 'Disruptive (Mythic)',
    description:
      "The DC for defensive spellcasting within your threatened area increases by half your mythic tier, stacking with the original Disruptive feat's bonus. Additionally, non-mythic spellcasters remain hindered by Disruptive's effects even when you cannot make attacks of opportunity.",
    shortDescription:
      'Defensive spellcasting DC further increased by half tier; non-mythic spellcasters always hindered',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'disruptive' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'disruptive', 'spellcasting', 'melee'],
  },
  {
    id: 'distance_thrower_mythic',
    name: 'Distance Thrower (Mythic)',
    description: 'Thrown weapons wielded by you have twice their normal range.',
    shortDescription: 'Thrown weapon range doubled',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 17 },
      { type: 'feat', featId: 'distance_thrower' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'thrown_weapon', 'range'],
  },
  {
    id: 'divine_interference_mythic',
    name: 'Divine Interference (Mythic)',
    description:
      "When using Divine Interference, the penalty applied to the opponent's attack roll equals twice the level of the spell sacrificed. You may expend one use of mythic power to instead increase this penalty to triple the spell's level.",
    shortDescription:
      'Divine Interference penalty doubled; spend mythic power to triple the penalty',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'divine_interference' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'divine', 'interference', 'attack_penalty'],
  },
  {
    id: 'dodge_mythic',
    name: 'Dodge (Mythic)',
    description:
      'The AC bonus granted by Dodge increases by 1. As an immediate action, you can expend one use of mythic power to gain an additional +10 dodge bonus to AC against one attack.',
    shortDescription:
      'Dodge bonus increased by 1; spend mythic power as immediate action for +10 dodge vs. one attack',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'dodge' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 1,
        source: 'Dodge (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
    ],
    activationMode: 'passive',
    tags: ['mythic', 'dodge', 'ac'],
  },
  {
    id: 'dreadful_carnage_mythic',
    name: 'Dreadful Carnage (Mythic)',
    description:
      'The intimidation effect from Dreadful Carnage affects non-mythic enemies within 60 feet, in addition to all enemies within the standard 30-foot range. By expending one use of mythic power before making the Intimidate check, demoralized enemies become frightened rather than shaken for the same duration.',
    shortDescription:
      'Dreadful Carnage affects non-mythic foes within 60 feet; spend mythic power to frighten instead of shake',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'dreadful_carnage' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'intimidate', 'fear', 'carnage'],
  },
  {
    id: 'drink_is_life_mythic',
    name: 'Drink Is Life (Mythic)',
    description:
      'You can consume alcoholic beverages without penalty and as a swift action. When you drink alcohol, you gain one benefit from polypurpose panacea (only one active at a time). By expending mythic power while drinking, you can heal 2 points of ability damage, negate a temporary ability score penalty, or remove a condition (confused, diseased, exhausted, fatigued, frightened, nauseated, poisoned, shaken, sickened, or staggered).',
    shortDescription:
      'Drink alcohol as swift action for polypurpose panacea benefit; spend mythic power to remove conditions',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 19 },
      { type: 'special', description: '3rd mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'alcohol', 'healing', 'conditions'],
  },
  {
    id: 'dual_path_mythic',
    name: 'Dual Path (Mythic)',
    description:
      "You can follow two mythic paths. Upon selecting this feat, you gain a 1st-tier ability from a second mythic path. Whenever you gain a new path ability, you may select from either of your two paths' ability lists or from universal path abilities.",
    shortDescription: 'Follow two mythic paths; choose abilities from either path',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [{ type: 'special', description: '1st mythic tier' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'path', 'dual_path'],
  },
  {
    id: 'eagle_eyes_mythic',
    name: 'Eagle Eyes (Mythic)',
    description:
      'You ignore up to –10 in penalties from distance on visual Perception checks, doubling the normal –5 penalty reduction from the base feat. As a swift action, you can expend one use of mythic power to completely eliminate all distance-related penalties on visual Perception checks for 1 round.',
    shortDescription:
      'Ignore up to –10 distance penalty on Perception; spend mythic power to eliminate all distance penalties for 1 round',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'eagle_eyes' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'perception', 'vision', 'distance'],
  },
  {
    id: 'eldritch_heritage_mythic',
    name: 'Eldritch Heritage (Mythic)',
    description:
      "You gain sorcerer bloodline powers corresponding to your Eldritch Heritage feat, treating your sorcerer level as your character level minus 2 for determining bloodline power effects. For the bloodline's initial 1st-level power, you use your complete character level.",
    shortDescription:
      'Gain bloodline powers from Eldritch Heritage at character level (first power) or level –2 (others)',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'eldritch_heritage' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'bloodline', 'sorcerer', 'heritage'],
  },
  {
    id: 'elemental_channel_mythic',
    name: 'Elemental Channel (Mythic)',
    description:
      'Rather than being restricted to a single elemental subtype, you can now affect any elemental subtype when using Elemental Channel. Before each use, you designate which elemental subtype to target. By expending a use of mythic power during activation, you may select a second elemental subtype to affect simultaneously.',
    shortDescription:
      'Channel against any elemental subtype; spend mythic power to affect two subtypes simultaneously',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'elemental_channel' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'channel_energy', 'elemental'],
  },
  {
    id: 'elemental_fist_mythic',
    name: 'Elemental Fist (Mythic)',
    description:
      'The extra energy damage dealt by Elemental Fist increases to 1d8 points. You gain bonus daily uses equal to your mythic tier. You can spend one use of mythic power as an immediate action to add the extra damage from Elemental Fist to all of your unarmed strikes until the beginning of your next turn, counting as a single use of Elemental Fist.',
    shortDescription:
      'Elemental Fist deals 1d8 extra damage; bonus daily uses equal to tier; spend mythic power to apply to all attacks',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'elemental_fist' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'elemental_fist', 'unarmed', 'energy'],
  },
  {
    id: 'elemental_focus_mythic',
    name: 'Elemental Focus (Mythic)',
    description:
      'Select an energy type for which you have Elemental Focus. The save DC bonus from both Elemental Focus and Greater Elemental Focus increases by 1 for spells of that energy type. When casting spells with the chosen energy descriptor, you may spend one use of mythic power to force targets to roll saving throws twice and take the lower result.',
    shortDescription:
      '+1 to Elemental Focus DC; spend mythic power to force targets to roll saves twice (take lower)',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'elemental_focus' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'elemental', 'spell_focus', 'save_dc'],
  },
  {
    id: 'elven_accuracy_mythic',
    name: 'Elven Accuracy (Mythic)',
    description:
      'When making attacks with longbows or shortbows (including composite versions), you can disregard standard concealment entirely. Total concealment still imposes a miss chance. If a shot misses due to total concealment, you may attempt to reroll that miss chance using the mechanics from the base Elven Accuracy feat.',
    shortDescription:
      'Ignore standard concealment with bows; reroll total concealment miss chances',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'elven_accuracy' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'bow', 'concealment', 'elf'],
  },
  {
    id: 'endurance_mythic',
    name: 'Endurance (Mythic)',
    description:
      'The bonus granted by Endurance increases by half your mythic tier. When you fail checks to resist non-lethal damage from forced marches, starvation, thirst, environmental extremes, or slow suffocation, you reduce the damage taken by half. You can also rest in heavy armor without incurring fatigue.',
    shortDescription:
      'Endurance bonus increases by half tier; halve non-lethal damage from fatigue sources; rest in heavy armor',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'endurance' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'endurance', 'constitution', 'fatigue'],
  },
  {
    id: 'eschew_materials_mythic',
    name: 'Eschew Materials (Mythic)',
    description:
      'You can cast any spell with a material component costing 10 gp per tier or less without providing that component. By expending one use of mythic power while casting, you can ignore material components costing up to 50 gp per tier. Expending two uses allows you to cast spells requiring material components costing up to 100 gp per tier without providing them.',
    shortDescription:
      'Ignore material components up to 10 gp/tier; spend mythic power to increase this limit',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'eschew_materials' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'spellcasting', 'material_components'],
  },
  {
    id: 'extra_mythic_power_mythic',
    name: 'Extra Mythic Power (Mythic)',
    description: 'You gain two extra uses of mythic power each day.',
    shortDescription: '+2 daily uses of mythic power',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [{ type: 'special', description: '1st mythic tier' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'mythic_power'],
  },
  {
    id: 'extra_path_ability',
    name: 'Extra Path Ability (Mythic)',
    description:
      'Choose one mythic ability from your path or from the universal path abilities that you meet the prerequisites for. You gain that path ability.',
    shortDescription: 'Gain one additional mythic path ability',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [{ type: 'special', description: '3rd mythic tier' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'path_ability'],
  },
  {
    id: 'far_shot_mythic',
    name: 'Far Shot (Mythic)',
    description:
      'As a swift action, you can expend one use of mythic power to ignore all range increment penalties for your ranged attacks until the end of your turn.',
    shortDescription:
      'Spend mythic power as swift action to ignore all range increment penalties until end of turn',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'far_shot' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'ranged', 'range_increment'],
  },
  {
    id: 'fast_empathy_mythic',
    name: 'Fast Empathy (Mythic)',
    description: 'You can use wild empathy as a swift action rather than a standard action.',
    shortDescription: 'Wild empathy as a swift action',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'fast_empathy' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'wild_empathy', 'druid', 'ranger'],
  },
  {
    id: 'fire_music_mythic',
    name: 'Fire Music (Mythic)',
    description:
      'When converting bard spell damage to fire damage, that damage ignores fire resistance up to your tier. For summon monster spells cast as bard spells with a fiery appearance, summoned creatures gain an additional 5 fire resistance and 1d4 points of fire damage to all natural attacks instead of the standard +1 bonus; creatures with the fire subtype gain the same benefits.',
    shortDescription:
      'Fire Music damage ignores fire resistance up to tier; fiery summons gain fire resistance 5 and 1d4 fire on natural attacks',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'fire_music' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'bard', 'fire', 'music'],
  },
  {
    id: 'fleet_mythic',
    name: 'Fleet (Mythic)',
    description:
      "Your base land speed increases by 5 feet, regardless of what armor you wear or whether you're encumbered. This bonus stacks with the regular Fleet feat. You can take this mythic version multiple times, but only up to the number of times you've taken the non-mythic Fleet feat.",
    shortDescription:
      '+5 ft. base land speed regardless of armor or encumbrance; can take multiple times',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'fleet' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'speed', 'movement'],
  },
  {
    id: 'furious_focus_mythic',
    name: 'Furious Focus (Mythic)',
    description:
      "When using Furious Focus, you avoid Power Attack's attack roll penalty on attacks made as attacks of opportunity. As a free action, you can expend one use of mythic power to negate Power Attack's penalty on all melee attacks you make for 1 round while using this feat.",
    shortDescription:
      'No Power Attack penalty on attacks of opportunity; spend mythic power to negate penalty for 1 round',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'furious_focus' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'power_attack', 'furious_focus'],
  },
  {
    id: 'gnome_trickster_mythic',
    name: 'Gnome Trickster (Mythic)',
    description:
      'You gain blur and vanish as spell-like abilities usable once per day. Your gnome spell-like abilities can be used an additional number of times daily equal to half your mythic tier, and this flexibility applies to any gnome spell-like ability. The caster level for gnome spell-like abilities increases to your character level plus mythic tier.',
    shortDescription:
      'Gain blur and vanish 1/day; bonus daily uses of gnome SLAs equal to half tier; CL for SLAs = level + tier',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'gnome_trickster' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'gnome', 'spell_like_ability', 'racial'],
  },
  {
    id: 'gorgons_fist_mythic',
    name: "Gorgon's Fist (Mythic)",
    description:
      "When you hit with Gorgon's Fist and the target fails its Fortitude save, the target becomes dazed for 1 round instead of staggered. You can expend one use of mythic power immediately after hitting with a Gorgon's Fist attack but before the target makes its saving throw to increase the saving throw DC by an amount equal to half your mythic tier.",
    shortDescription:
      "Gorgon's Fist dazes instead of staggers; spend mythic power before save to increase DC by half tier",
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'gorgons_fist' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'gorgons_fist', 'unarmed', 'stagger', 'daze'],
  },
  {
    id: 'great_fortitude_mythic',
    name: 'Great Fortitude (Mythic)',
    description:
      'Whenever you make a Fortitude saving throw against a spell, spell-like ability, or supernatural ability from a non-mythic source, roll twice and take the higher result.',
    shortDescription: 'Roll Fortitude saves twice vs. non-mythic sources; take higher result',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'great_fortitude' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'fortitude', 'save'],
  },
  {
    id: 'guided_hand_mythic',
    name: 'Guided Hand (Mythic)',
    description:
      "You can add your Wisdom modifier instead of your Strength or Dexterity modifier on damage rolls when attacking with your deity's favored weapon.",
    shortDescription: "Use Wisdom modifier on damage rolls with deity's favored weapon",
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'guided_hand' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'wisdom', 'damage', 'favored_weapon', 'divine'],
  },
  {
    id: 'heroic_defiance_mythic',
    name: 'Heroic Defiance (Mythic)',
    description:
      'Once per day as an immediate action, when a harmful condition (such as panicked, paralyzed, or stunned) would affect you, you make a Will save with a bonus equal to your mythic tier against the original DC. Success negates the condition entirely. If you fail, onset is delayed until the end of your next turn. The feat cannot prevent hit point or ability damage, does not apply to permanent or instantaneous effects, and only addresses conditions that allow saving throws.',
    shortDescription:
      '1/day resist a harmful condition as immediate action (Will save + tier); on failure, delay onset',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'heroic_defiance' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'condition', 'will_save', 'heroic'],
  },
  {
    id: 'heroic_recovery_mythic',
    name: 'Heroic Recovery (Mythic)',
    description:
      'As a swift action, you can expend one use of mythic power to activate Heroic Recovery additional times. When you do so, add your mythic tier to the result of the Fortitude save.',
    shortDescription:
      'Spend mythic power as swift action to use Heroic Recovery again; add tier to Fortitude save',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'heroic_recovery' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'heroic_recovery', 'fortitude'],
  },
  {
    id: 'improved_bull_rush_mythic',
    name: 'Improved Bull Rush (Mythic)',
    description:
      'You gain a bonus equal to half your mythic tier on checks to bull rush, and to your CMD when an opponent bull rushes you. These bonuses stack with those from Improved Bull Rush. Additionally, you can make an attack of opportunity against any creature attempting to bull rush you, unless that creature also has this feat.',
    shortDescription:
      '+half tier on bull rush checks and CMD vs. bull rush; AoO against bull rushers',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_bull_rush' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'bull_rush', 'combat_maneuver'],
  },
  {
    id: 'improved_channel_mythic',
    name: 'Improved Channel (Mythic)',
    description:
      'When non-mythic creatures take damage from your channel energy ability, those creatures must roll their saving throws twice and apply the lower of the two results.',
    shortDescription:
      'Non-mythic creatures roll channel energy saves twice and take the lower result',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'improved_channel' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'channel_energy', 'cleric'],
  },
  {
    id: 'improved_counterspell_mythic',
    name: 'Improved Counterspell (Mythic)',
    description:
      'When counterspelling, you can use a spell of the same school that is the same or higher spell level as the target spell.',
    shortDescription: 'Counterspell using same-school spells of equal or higher level',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'improved_counterspell' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mythic', 'counterspell', 'spellcasting'],
  },
  {
    id: 'improved_critical_mythic',
    name: 'Improved Critical (Mythic)',
    description:
      'Your critical multiplier with your chosen weapon increases by 1 (to a maximum of ×6). You can take this feat multiple times; each time applies to a different weapon paired with a separate non-mythic Improved Critical feat.',
    shortDescription:
      'Critical multiplier with chosen weapon +1 (max ×6); can be taken multiple times for different weapons',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_critical' },
      { type: 'bab', minimum: 8 },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'critical', 'multiplier'],
  },
  {
    id: 'improved_dirty_trick_mythic',
    name: 'Improved Dirty Trick (Mythic)',
    description:
      'You gain a bonus equal to half your mythic tier on checks to attempt a dirty trick maneuver, and to your CMD when opponents attempt this maneuver against you. These bonuses stack with those from Improved Dirty Trick. Additionally, you can make an attack of opportunity against any creature that attempts a dirty trick maneuver against you, unless it also has this feat.',
    shortDescription:
      '+half tier on dirty trick checks and CMD vs. dirty tricks; AoO against dirty trick attempts',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_dirty_trick' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'dirty_trick', 'combat_maneuver'],
  },
  {
    id: 'improved_disarm_mythic',
    name: 'Improved Disarm (Mythic)',
    description:
      'You gain a bonus equal to half your mythic tier on checks to disarm, and to your CMD when an opponent tries to disarm you. These bonuses stack with those from Improved Disarm. You can also make an attack of opportunity against any creature attempting to disarm you, unless that creature also has this feat.',
    shortDescription: '+half tier on disarm checks and CMD vs. disarm; AoO against disarm attempts',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_disarm' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'disarm', 'combat_maneuver'],
  },
  {
    id: 'improved_drag_mythic',
    name: 'Improved Drag (Mythic)',
    description:
      'You gain a bonus equal to half your mythic tier on checks to drag, and to your CMD when an opponent tries to drag you. These bonuses stack with those from Improved Drag. Additionally, you can make an attack of opportunity against any creature attempting to drag you, unless it also has this feat.',
    shortDescription: '+half tier on drag checks and CMD vs. drag; AoO against drag attempts',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_drag' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'drag', 'combat_maneuver'],
  },
  {
    id: 'improved_familiar_mythic',
    name: 'Improved Familiar (Mythic)',
    description:
      'For every 3 mythic tiers you possess, your familiar gains a +2 bonus to an ability score of your choice, with these bonuses stacking. Your familiar also gains a natural armor bonus equal to your mythic tier, and if it already possesses spell resistance, that spell resistance increases by your tier.',
    shortDescription:
      '+2 to familiar ability score per 3 tiers; familiar gains natural armor equal to tier; SR increased by tier',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'improved_familiar' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'familiar', 'wizard', 'sorcerer'],
  },
  {
    id: 'improved_grapple_mythic',
    name: 'Improved Grapple (Mythic)',
    description:
      'You gain a bonus equal to half your mythic tier on checks to grapple, and to your CMD when an opponent tries to grapple you. These bonuses stack with those from Improved Grapple. Additionally, you can make an attack of opportunity against any creature attempting to grapple you, unless that creature also has this feat.',
    shortDescription:
      '+half tier on grapple checks and CMD vs. grapple; AoO against grapple attempts',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'grapple', 'combat_maneuver'],
  },
  {
    id: 'improved_initiative_mythic',
    name: 'Improved Initiative (Mythic)',
    description:
      'The bonus from Improved Initiative increases by your mythic tier; these bonuses stack. You can also expend one use of mythic power to treat your initiative roll as a natural 20 instead of rolling normally.',
    shortDescription:
      'Initiative bonus further increased by tier; spend mythic power to treat initiative roll as natural 20',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_initiative' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'initiative'],
  },
  {
    id: 'improved_overrun_mythic',
    name: 'Improved Overrun (Mythic)',
    description:
      'You gain a bonus equal to half your mythic tier on checks to overrun, and to your CMD when an opponent tries to overrun you. These bonuses stack with those from Improved Overrun. Additionally, you can make an attack of opportunity against any creature that attempts to overrun you, unless that creature also has this feat.',
    shortDescription:
      '+half tier on overrun checks and CMD vs. overrun; AoO against overrun attempts',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_overrun' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'overrun', 'combat_maneuver'],
  },
  {
    id: 'improved_reposition_mythic',
    name: 'Improved Reposition (Mythic)',
    description:
      'You gain a bonus equal to half your mythic tier on checks to attempt a reposition combat maneuver, and to your CMD when an opponent attempts a reposition against you. These bonuses stack with those from Improved Reposition. You can also make an attack of opportunity against any creature that attempts to reposition you, unless it also has this feat.',
    shortDescription:
      '+half tier on reposition checks and CMD vs. reposition; AoO against reposition attempts',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_reposition' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'reposition', 'combat_maneuver'],
  },
  {
    id: 'improved_steal_mythic',
    name: 'Improved Steal (Mythic)',
    description:
      'You gain a bonus equal to half your mythic tier on checks to attempt a steal combat maneuver, and to your CMD when an opponent attempts a steal against you. These bonuses stack with those from Improved Steal. Additionally, you can make an attack of opportunity against any creature attempting to steal from you, unless that creature also has this feat.',
    shortDescription: '+half tier on steal checks and CMD vs. steal; AoO against steal attempts',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_steal' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'steal', 'combat_maneuver'],
  },
  {
    id: 'improved_stonecunning_mythic',
    name: 'Improved Stonecunning (Mythic)',
    description:
      'You gain stone tell as a spell-like ability usable once per day, with a caster level equal to twice your mythic tier.',
    shortDescription: 'Gain stone tell as SLA 1/day; CL = twice mythic tier',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'improved_stonecunning' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'dwarf', 'stonecunning', 'stone_tell'],
  },
  {
    id: 'improved_sunder_mythic',
    name: 'Improved Sunder (Mythic)',
    description:
      "You gain a bonus equal to half your mythic tier on checks to sunder, and to your CMD when an opponent tries to sunder an object you are using. These bonuses stack with those from Improved Sunder. You can also make an attack of opportunity against any creature attempting to sunder an object you're using, provided that creature doesn't also have this feat.",
    shortDescription: '+half tier on sunder checks and CMD vs. sunder; AoO against sunder attempts',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_sunder' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'sunder', 'combat_maneuver'],
  },
  {
    id: 'improved_trip_mythic',
    name: 'Improved Trip (Mythic)',
    description:
      'You gain a bonus equal to half your mythic tier on checks to trip, and to your CMD when an opponent tries to trip you. These bonuses stack with those from Improved Trip. You can also make an attack of opportunity against any creature attempting to trip you, unless that creature also has this feat.',
    shortDescription: '+half tier on trip checks and CMD vs. trip; AoO against trip attempts',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_trip' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'trip', 'combat_maneuver'],
  },
  {
    id: 'improved_unarmed_strike_mythic',
    name: 'Improved Unarmed Strike (Mythic)',
    description:
      "You add half your mythic tier to damage rolls made with unarmed strikes. As a swift action, you can expend one use of mythic power to overcome the hardness of objects with your unarmed strikes for a number of rounds equal to your tier, unless that object's hardness exceeds 15.",
    shortDescription:
      '+half tier to unarmed strike damage; spend mythic power to bypass object hardness (up to 15) for rounds equal to tier',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'unarmed_strike', 'monk'],
  },
  {
    id: 'intimidating_prowess_mythic',
    name: 'Intimidating Prowess (Mythic)',
    description:
      'You gain a bonus on Intimidate checks equal to your mythic tier against non-mythic foes, or half your tier against mythic adversaries. If you also have the mythic version of Persuasive, you may spend one use of mythic power to treat an Intimidate check as if you had rolled a natural 20, declared before rolling.',
    shortDescription:
      '+tier on Intimidate vs. non-mythic (half vs. mythic); with Persuasive (Mythic), spend mythic power for natural 20',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'intimidating_prowess' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'intimidate', 'strength', 'charisma'],
  },
  {
    id: 'iron_will_mythic',
    name: 'Iron Will (Mythic)',
    description:
      'Whenever you roll a Will saving throw against a spell, spell-like ability, or supernatural ability from a non-mythic source, roll twice and take the higher result.',
    shortDescription: 'Roll Will saves twice vs. non-mythic sources; take higher result',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'iron_will' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'will', 'save'],
  },
  {
    id: 'knockout_artist_mythic',
    name: 'Knockout Artist (Mythic)',
    description:
      'When dealing non-lethal damage with an unarmed strike combined with sneak attack, you roll d8s instead of d6s for each sneak attack die.',
    shortDescription: 'Non-lethal unarmed sneak attack dice are d8s instead of d6s',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'knockout_artist' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mythic', 'sneak_attack', 'unarmed', 'non_lethal'],
  },
  {
    id: 'legendary_teamwork_mythic',
    name: 'Legendary Teamwork (Mythic)',
    description:
      'Any fixed numeric bonuses you gain from teamwork feats are increased by 1. This enhancement does not apply to variable bonuses or non-numeric effects such as additional attacks of opportunity, extra movement, or other supplementary actions.',
    shortDescription: 'Fixed numeric bonuses from teamwork feats increased by 1',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'teamwork'],
    prerequisites: [
      { type: 'special', description: 'Any two teamwork feats' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'teamwork'],
  },
  {
    id: 'lightning_reflexes_mythic',
    name: 'Lightning Reflexes (Mythic)',
    description:
      'Whenever you roll a Reflex saving throw against a spell, spell-like ability, or supernatural ability from a non-mythic source, roll twice and take the higher result.',
    shortDescription: 'Roll Reflex saves twice vs. non-mythic sources; take higher result',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'lightning_reflexes' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'reflex', 'save'],
  },
  {
    id: 'lucky_halfling_mythic',
    name: 'Lucky Halfling (Mythic)',
    description:
      "When activating Lucky Halfling, you add your mythic tier to the saving throw bonus granted. If an ally's save would normally leave them suffering partial effects, you can expend one use of mythic power to negate those effects entirely, granting a full success.",
    shortDescription:
      "Lucky Halfling bonus increased by mythic tier; spend mythic power to upgrade ally's partial success to full success",
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'lucky_halfling' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'halfling', 'save', 'luck', 'racial'],
  },
  {
    id: 'lucky_surge_mythic',
    name: 'Lucky Surge (Mythic)',
    description:
      'When activating your surge ability, you roll the surge dice twice and keep the higher result. If you already benefit from rolling surge dice twice and selecting the higher outcome, this feat instead allows you to roll three times and take the best result.',
    shortDescription:
      'Roll surge dice twice; take higher (or three times if already rolling twice)',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'potent_surge' },
      { type: 'special', description: '3rd mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'surge', 'luck'],
  },
  {
    id: 'lunge_mythic',
    name: 'Lunge (Mythic)',
    description:
      'Whenever you use Lunge and hit a creature with the melee attack, you no longer take a –2 penalty to AC against that creature. You can expend one use of mythic power when using Lunge to negate the AC penalty regardless of hit or miss and gain a +2 bonus on attacks of opportunity you make while Lunge is in effect.',
    shortDescription:
      'No AC penalty from Lunge on a hit; spend mythic power to negate penalty on miss and gain +2 on AoO',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'lunge' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['mythic', 'lunge', 'reach', 'melee'],
  },
  {
    id: 'magical_aptitude_mythic',
    name: 'Magical Aptitude (Mythic)',
    description:
      'The bonus on Spellcraft and Use Magic Device checks from Magical Aptitude increases by 2. You can expend one use of mythic power to treat a Spellcraft or Use Magic Device check as if you had rolled a natural 20. You must commit to using this ability before rolling.',
    shortDescription:
      '+2 bonus increase on Spellcraft/Use Magic Device; spend mythic power to treat roll as natural 20',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic'],
    prerequisites: [
      { type: 'feat', featId: 'magical_aptitude' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.spellcraft',
        value: 2,
        source: 'Magical Aptitude (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.use_magic_device',
        value: 2,
        source: 'Magical Aptitude (Mythic)',
        condition: { type: 'always', params: {}, description: 'Always active' },
      },
    ],
    activationMode: 'passive',
    tags: ['mythic', 'spellcraft', 'use_magic_device', 'skill'],
  },
  {
    id: 'manyshot_mythic',
    name: 'Manyshot (Mythic)',
    description:
      'When performing a full-attack action with a bow while using Manyshot, you fire two arrows with both your first and second attacks, instead of just your first attack.',
    shortDescription: 'Manyshot fires two arrows with both the first and second attacks',
    source: 'Mythic Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'manyshot' },
      { type: 'special', description: '1st mythic tier' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic', 'manyshot', 'bow', 'ranged'],
  },
];

// HANDOFF: Last feat collected was "Manyshot (Mythic)". Next agent resumes from "Marked for Glory (Mythic)".
