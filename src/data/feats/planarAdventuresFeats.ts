import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const PLANAR_ADVENTURES_FEATS: FeatDefinition[] = [
  {
    id: 'apocalyptic_spell',
    name: 'Apocalyptic Spell',
    description:
      "You can infuse a spell with the devastating power of the Horsemen of the Apocalypse. When applied to a spell with an area of effect and instantaneous duration, all surfaces within the area become difficult terrain, and Climb, Fly, and Swim checks made within the area suffer a penalty equal to the spell's original spell level. These effects persist for a number of rounds equal to the spell's original spell level. The spell gains the evil descriptor. An apocalyptic spell uses a spell slot one level higher than the spell's actual level. An apocalyptic spell cannot be applied to spells with the good descriptor.",
    shortDescription: 'Area spell creates difficult terrain and skill penalties for several rounds',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['metamagic', 'planar', 'evil', 'terrain'],
  },
  // archon_style / archon_diversion / archon_justice — already in styleFeats.ts (source: Ultimate Combat)
  {
    id: 'authoritative_spell',
    name: 'Authoritative Spell',
    description:
      "You can modify a single-target spell to enforce law-like restrictions. When you cast an authoritative spell, select one prohibited action: moving closer to you, moving away from you, making melee attacks, making ranged attacks, casting offensive spells, or casting non-offensive spells. Creatures that fail their saving throw against the spell cannot perform the selected action on their next turn. The spell gains the lawful descriptor and functions as a mind-affecting compulsion effect. An authoritative spell uses a spell slot two levels higher than the spell's actual level. It cannot be applied to spells with the chaotic descriptor.",
    shortDescription: 'Single-target spell compels creatures to avoid one action type on failure',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['metamagic', 'planar', 'lawful', 'compulsion', 'mind-affecting'],
  },
  {
    id: 'axiomatic_discourse',
    name: 'Axiomatic Discourse',
    description:
      "Drawing on the precise language of Axis, you can activate this feat as part of a Diplomacy check to shift a creature's attitude. If your Diplomacy check fails, the target's attitude does not decrease unless you fail by 10 or more. You can attempt Diplomacy checks against creatures that do not speak your language at a -4 penalty. Once per day per 5 ranks in Knowledge (planes), you may roll a Diplomacy check twice and use the better result.",
    shortDescription:
      'Failed Diplomacy checks only hurt attitude on failure by 10+; can speak across language barriers',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['conduit'],
    prerequisites: [
      { type: 'skill', skillId: 'diplomacy', ranks: 3 },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['conduit', 'planar', 'social', 'diplomacy', 'axiomite'],
  },
  // azata_style / azata_mischief / azata_sprint — already in styleFeats.ts (source: Ultimate Combat)
  {
    id: 'blazing_aura_pa',
    name: 'Blazing Aura',
    description:
      'As a standard action, you shroud yourself in fire drawn from the Plane of Fire. Until the end of your turn, whenever a creature makes a successful melee attack against you, that creature takes 1d6 + half your ranks in Knowledge (planes) points of fire damage. Attacks with reach weapons bypass this effect entirely. A creature can halve this fire damage with a successful Reflex save (DC = 10 + half your level + your Constitution modifier). You can use this feat a number of times per day equal to your ranks in Knowledge (planes). With 9 or more ranks in Knowledge (planes), activating this feat is a move action. With 15 or more ranks, activation can be a move or swift action.',
    shortDescription:
      'Shroud yourself in fire; melee attackers take 1d6 + half Know(planes) ranks fire damage',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'conduit'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.fire_retribution_damage',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'When a creature makes a successful melee attack against you while Blazing Aura is active; damage is 1d6 + half Knowledge (planes) ranks, Reflex halves',
        },
        source: 'Blazing Aura',
      },
    ],
    activationMode: 'toggle',
    tags: ['combat', 'conduit', 'planar', 'fire', 'aura', 'elemental'],
  },
  {
    id: 'blissful_spell',
    name: 'Blissful Spell',
    description:
      "You can infuse a single-target spell with the peaceful essence of Nirvana. When applied to an offensive spell, creatures damaged by it suffer a -2 penalty on attack rolls and weapon damage rolls for 1 round. When applied to a beneficial spell, the target gains a +2 morale bonus on skill checks and saving throws for 1 round in addition to the spell's normal effects. A blissful spell gains the good descriptor and functions as a mind-affecting compulsion effect. A blissful spell uses a spell slot one level higher than the spell's actual level. It cannot be applied to spells with the evil descriptor.",
    shortDescription:
      'Single-target spells impose -2 attack/damage or grant +2 morale on skills/saves for 1 round',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['metamagic', 'planar', 'good', 'nirvana', 'mind-affecting'],
  },
  {
    id: 'channel_deific_essence',
    name: 'Channel Deific Essence',
    description:
      "As a standard action, you can expend one use of channel energy to invoke your deity's power, gaining the benefits of the invoke deity spell for a number of rounds equal to the number of dice in your channel energy. Only one domain ability functions at a time, and this effect cannot stack with the invoke deity spell. Alternatively, you can expend two uses of channel energy to infuse a willing target within 30 feet with deific essence instead. The target need not worship your deity but faces the same penalties for taking actions opposing your deity's teachings or alignment. Taking actions directly opposed to your deity's teachings or alignment (whether as the user or the infused target) triggers the penalties listed in invoke deity and immediately ends this effect.",
    shortDescription:
      'Expend channel energy to grant invoke deity benefits or infuse an ally with deific power',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'alignment_channel' },
      { type: 'special', description: 'Channel energy 5d6' },
      { type: 'class_feature', featureName: 'domain' },
      { type: 'special', description: 'Same alignment as patron deity' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['planar', 'divine', 'channeling', 'domain', 'deity'],
  },
  {
    id: 'chaos_reigns',
    name: 'Chaos Reigns',
    description:
      'As a swift action, you allow Abyssal wrath to overtake you. While active, you gain a slam natural attack usable with one hand dealing 1d6 damage (1d4 for Small creatures). Creatures without hands can substitute an alternate body part for this attack. You can use this feat for a number of minutes per day equal to your ranks in Knowledge (planes). Minutes need not be consecutive but must be used in 1-minute increments.',
    shortDescription:
      'Swift action: gain a 1d6 slam natural attack for minutes/day equal to Know(planes) ranks',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['conduit'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.natural_attack_slam',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'While Chaos Reigns is active; grants a 1d6 slam attack (1d4 for Small creatures)',
        },
        source: 'Chaos Reigns',
      },
    ],
    activationMode: 'toggle',
    tags: ['conduit', 'planar', 'chaotic', 'abyss', 'natural-attack'],
  },
  {
    id: 'crypt_spell',
    name: 'Crypt Spell',
    description:
      "You can infuse a damaging spell with the power of the Boneyard. A crypt spell gains the death descriptor. A creature that dies within 1 round of being damaged by a crypt spell is considered to have been killed by a death effect for the purposes of resurrection. Additionally, undead creatures damaged by the spell gain the sickened condition for a number of rounds equal to the spell's base level; if they succeed at their save, the duration is halved. If the original spell has no saving throw, undead targets may attempt a Will save against the sickened effect alone. A crypt spell uses a spell slot one level higher than the spell's actual level.",
    shortDescription:
      'Damaging spell gains death descriptor; undead become sickened; victims hard to resurrect',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['metamagic', 'planar', 'death', 'undead', 'boneyard'],
  },
  {
    id: 'death_field',
    name: 'Death Field',
    description:
      'As a move action, you generate a field of negative energy that withers plant life around you, allowing you to move through difficult terrain created by vegetation without penalty and granting immunity to plant-based spells of 3rd level or lower. Swarms that enter your space take 1d6 points of negative energy damage before attacking. At the end of each of your turns while the field is active, you take 1 point of negative energy damage; positive energy healing does not function while the field is active, and magic items or spells that protect against negative energy damage do not protect against this self-inflicted damage. Undead or those with negative energy affinity gain fast healing 1 instead of taking damage. You can use this feat for a number of rounds per day equal to your Knowledge (planes) ranks. With 11 or more ranks in Knowledge (planes), activation becomes a swift action.',
    shortDescription:
      'Negative energy field damages swarms and plant effects but harms you each turn',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['conduit'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 5 }],
    effects: [],
    activationMode: 'toggle',
    tags: ['conduit', 'planar', 'negative-energy', 'undead', 'boneyard', 'aura'],
  },
  {
    id: 'flickering_step',
    name: 'Flickering Step',
    description:
      'You can use dimension door as a spell-like ability, with a caster level equal to your ranks in Knowledge (planes). The maximum distance you can teleport is twice your base speed, and you must have line of sight and line of effect to the destination. You can use this ability once per day, plus one additional time per 5 ranks in Knowledge (planes). Fighters with this feat treat Dimensional Agility and feats listing it as a prerequisite as combat feats when selecting fighter bonus feats.',
    shortDescription:
      'Use dimension door (up to 2x base speed) once/day plus once per 5 Know(planes) ranks',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['conduit'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 9 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['conduit', 'planar', 'teleportation', 'dimension-door', 'movement'],
  },
  {
    id: 'gloomstorm',
    name: 'Gloomstorm',
    description:
      'As a swift action, you can temporarily weaken the barrier between the Material Plane and the Shadow Plane. While this feat is active, you may create new shadow weapons as a free action rather than the normal action cost. This does not expand your maximum number of concurrent shadow weapons. You can use this feat for a number of rounds per day equal to your Knowledge (planes) ranks. These rounds need not be consecutive.',
    shortDescription:
      'Swift action lets you create shadow weapons as free actions for rounds equal to Know(planes) ranks',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'conduit'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_planes', ranks: 4 },
      { type: 'class_feature', featureName: 'shadow weapon' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['combat', 'conduit', 'planar', 'shadow', 'shadow-plane'],
  },
  // grasping_tail — already in racialFeats.ts (source: Advanced Race Guide)
  {
    id: 'gravitational_vital_strike',
    name: 'Gravitational Vital Strike',
    description:
      "When using any Vital Strike feat in an area affected by light or heavy gravity, you roll the weapon's damage dice one additional time. For example, using Improved Vital Strike would result in rolling the damage dice four times rather than three before applying other modifiers. You must possess the appropriate prerequisite feat (Heavy Gravity Acclimation or Light Gravity Acclimation) matching the plane's gravity trait to benefit from this ability.",
    shortDescription:
      'Roll damage dice one extra time with Vital Strike feats in light or heavy gravity areas',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'vital_strike' },
      { type: 'special', description: 'Heavy Gravity Acclimation or Light Gravity Acclimation' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['combat', 'planar', 'gravity', 'vital-strike', 'damage'],
  },
  {
    id: 'greater_planar_infusion',
    name: 'Greater Planar Infusion',
    description:
      "You have mastered the powers of another plane. Select a plane for which you previously gained an improved infusion through the Improved Planar Infusion feat. You gain access to that plane's greater infusion ability in addition to your existing improved infusion.",
    shortDescription:
      'Gain the greater planar infusion ability for a plane you already have improved infusion for',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['conduit'],
    prerequisites: [
      { type: 'feat', featId: 'improved_planar_infusion' },
      { type: 'feat', featId: 'planar_infusion' },
      { type: 'level', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['conduit', 'planar', 'infusion', 'planar-mastery'],
  },
  {
    id: 'greater_subjective_slam',
    name: 'Greater Subjective Slam',
    description:
      'When performing a Subjective Slam, the penalty to the combat maneuver check is reduced to -1 for every 100 feet of falling speed (rather than the normal penalty). The maximum damage you can deal increases to 12d6.',
    shortDescription: 'Subjective Slam has reduced CMB penalty and deals up to 12d6 damage',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 15 },
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'subjective_mobility' },
      { type: 'feat', featId: 'subjective_slam' },
      { type: 'special', description: 'Base attack bonus +8 or monk level 7th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['combat', 'planar', 'gravity', 'maneuver', 'subjective-gravity'],
  },
  {
    id: 'healers_hands',
    name: "Healer's Hands",
    description:
      "You can treat deadly wounds as a full-round action using the Heal skill, and you take no penalty for treating wounds without a healer's kit. You can treat the same creature multiple times per day, unlike the normal restriction. When your Heal check exceeds the DC by 10 or more, add your ranks in Knowledge (planes) to the total amount healed. This bonus healing only applies to creatures responsive to positive energy. You can use this feat a number of times per day equal to your Knowledge (planes) ranks.",
    shortDescription:
      'Treat deadly wounds faster with no kit penalty; exceed DC by 10 to add Know(planes) ranks to healing',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['conduit'],
    prerequisites: [
      { type: 'skill', skillId: 'heal', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['conduit', 'planar', 'healing', 'positive-energy', 'utility'],
  },
  {
    id: 'heavens_light',
    name: "Heaven's Light",
    description:
      'As a standard action, you emit a glowing aura centered on a halo above or behind your head, producing light equivalent to a torch. With 5 or more ranks in Knowledge (planes), the light intensity increases to match a daylight spell. With 15 or more ranks in Knowledge (planes), the light becomes infused with heavenly power; evil creatures within 30 feet must succeed at a Fortitude save (DC = 10 + half your character level + your Charisma modifier) or become sickened for the duration of the aura plus 1 additional round after it ends. You can use this feat for a number of rounds per day equal to your Knowledge (planes) ranks. These rounds need not be consecutive.',
    shortDescription:
      'Emit holy light; at 15 Know(planes) ranks, evil creatures within 30 ft must save or become sickened',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['conduit'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 1 }],
    effects: [],
    activationMode: 'toggle',
    tags: ['conduit', 'planar', 'good', 'light', 'heaven', 'aura'],
  },
  {
    id: 'heavy_gravity_acclimation',
    name: 'Heavy Gravity Acclimation',
    description:
      'You do not take the normal penalties for being on heavy gravity planes. Additionally, for the purposes of determining carrying capacity, your Strength score is treated as 4 points higher than your actual score. The GM may extend this benefit to certain high-gravity locations on the Material Plane.',
    shortDescription:
      'Ignore heavy gravity plane penalties; treat Strength as 4 higher for carrying capacity',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Strength 17 or the Endurance feat' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.carrying_capacity_strength',
        value: 4,
        condition: {
          type: 'custom',
          params: {},
          description: 'For carrying capacity calculations only',
        },
        source: 'Heavy Gravity Acclimation',
      },
    ],
    activationMode: 'passive',
    tags: ['general', 'planar', 'gravity', 'exploration', 'utility'],
  },
  {
    id: 'hollow_soul',
    name: 'Hollow Soul',
    description:
      'As a move action, you enter a state of emotional and spiritual hollowness, temporarily replacing your soul with void energy from Abaddon. While active, you are treated as undead rather than living for the purposes of positive and negative energy effects (positive energy harms you, negative energy heals you). You have a 50% chance to count as undead rather than living when targeted by effects that affect either type. You are also immune to soul-targeting effects such as trap the soul. While active, you cannot benefit from beneficial mind-affecting effects, morale bonuses, or bardic performances. You can use this feat for a number of minutes per day equal to your Knowledge (planes) ranks. Minutes need not be consecutive but must be spent in 1-minute increments.',
    shortDescription:
      'Become functionally undead for energy effects; immune to soul targeting; lose morale bonuses',
    source: 'Planar Adventures',
    verificationStatus: 'needs_review' as const,
    types: ['conduit'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 9 }],
    effects: [],
    activationMode: 'toggle',
    tags: ['conduit', 'planar', 'undead', 'abaddon', 'negative-energy', 'soul'],
  },
];

// CHECKPOINT: last_written=hollow_soul, written=25/25, status=complete
