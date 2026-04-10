import type { ItemSpecialAbility } from '@/types/magicItems';
import { Alignment } from '@/types/base';

// Weapon special abilities, batch 3 (items 51–74).
// Sources: Ultimate Equipment, Advanced Player's Guide, and other Pathfinder 1e supplements.
// Note: speed, brilliant_energy, and unholy appear in batch1; shocking_burst and stalking appear
// in batch2 — those entries are preserved here under distinct IDs for completeness of this batch.
export const weaponAbilitiesBatch3: ItemSpecialAbility[] = [
  // +2 bonus equivalent
  {
    id: 'peaceful',
    name: 'Peaceful',
    description: 'When a creature takes nonlethal damage from a peaceful weapon, it becomes shaken for 1 round each time it deals lethal damage to another living creature. The shaken condition\'s duration stacks from multiple attacks but cannot escalate to frightened. If the target\'s nonlethal damage from this weapon is fully healed, future strikes do not extend the shaken condition (though existing shaken conditions persist until their duration expires).',
    bonusEquivalent: 2, casterLevel: 8,
    effects: [],
  },
  {
    id: 'phase_locking',
    name: 'Phase Locking',
    description: 'A creature damaged by a phase locking weapon is affected as though by the dimensional anchor spell for 1 round, preventing dimensional travel and planar shifting.',
    bonusEquivalent: 2, casterLevel: 7,
    effects: [],
  },
  {
    id: 'planestriking',
    name: 'Planestriking',
    description: 'A planestriking weapon functions as a planar weapon, overcoming up to 5 points of damage reduction against outsiders. When the wielder is on a plane different from their native plane, the weapon ignores up to 10 points of damage reduction when used against outsiders native to that specific plane.',
    bonusEquivalent: 2, casterLevel: 9,
    effects: [],
  },
  {
    id: 'potent',
    name: 'Potent',
    description: 'As a swift action, the wielder can expend one use of mythic power to increase the weapon\'s enhancement bonus by half their mythic tier (minimum 1, maximum total +6 enhancement) and give it the ability to bypass damage reduction. These benefits last for 1 round. Both melee and ranged weapons can have this ability; ammunition cannot.',
    bonusEquivalent: 2, casterLevel: 12,
    effects: [],
  },
  {
    id: 'runeforged',
    name: 'Runeforged',
    description: 'These Thassilonian weapons combine two allied magic schools to oppose a third. The wielder gains a +2 morale bonus on saving throws against the opposed school\'s spells, but suffers a –2 penalty on Diplomacy checks. Carrying two runeforged weapons imposes a –5 penalty on attack rolls, Will saves, and skill checks. The seven types are Covetous/Charitable (vs. evokers), Dominant/Commanding (vs. transmuters), Jealous/Trusting (vs. necromancers), Miserly/Generous (vs. illusionists), Parasitic/Symbiotic (vs. enchanters), Sadistic/Compassionate (vs. abjurers), and Tyrannical/Liberal (vs. conjurers), each providing unique combat benefits against their opposed school.',
    bonusEquivalent: 2, casterLevel: 13,
    effects: [],
  },
  {
    id: 'sharding',
    name: 'Sharding',
    description: 'The wielder can make a ranged attack with a sharding weapon without releasing it. The weapon splits off a magical duplicate of itself that flies at the target using the same proficiency as the original. The range increment is 10 feet. The duplicate vanishes after hitting or missing its target. Only melee or thrown weapons can have this ability.',
    bonusEquivalent: 2, casterLevel: 10,
    effects: [],
  },
  {
    id: 'shattering',
    name: 'Shattering',
    description: 'A shattering weapon functions as a breaking weapon and also explodes with a resounding crash on a successful critical hit, dealing an extra 1d10 points of damage to objects and crystalline creatures (2d10 for ×3 crit multipliers, 3d10 for ×4). This extra damage is dealt regardless of whether the breaking ability is active and ignores the hardness of objects with a hardness of 10 or lower. Against crystalline creatures, the shattering damage stacks with bane and similar abilities.',
    bonusEquivalent: 2, casterLevel: 8,
    effects: [],
  },
  {
    id: 'shocking_burst_ue',
    name: 'Shocking Burst',
    description: 'This weapon functions as a shock weapon and detonates with a burst of electricity upon a successful critical strike (the wielder is unharmed). In addition to the +1d6 electricity damage from the shock ability, it deals an extra 1d10 points of electricity damage on a critical hit (2d10 for ×3, 3d10 for ×4). The extra electricity damage occurs even if the shock ability is not currently active.',
    bonusEquivalent: 2, casterLevel: 10,
    effects: [],
  },
  {
    id: 'silencing',
    name: 'Silencing',
    description: 'A silencing weapon makes no sound when drawn or swung. On a hit, the wielder can create a muffling aura around the target that suppresses all sounds coming from it until the beginning of the wielder\'s next turn (the target retains normal hearing and speech, including verbal spell components). On a confirmed critical hit, the weapon triggers a mobile magical silence effect (Will DC 13 negates) that lasts a number of rounds equal to the weapon\'s critical multiplier, filling only the target\'s space.',
    bonusEquivalent: 2, casterLevel: 8,
    effects: [],
  },
  {
    id: 'stalking_ue',
    name: 'Stalking',
    description: 'As a standard action within 60 feet (requiring line of sight and effect), the wielder can study a target. On hitting a studied creature, the weapon deals +1d6 precision damage per consecutive round spent studying that target, up to a number of bonus dice equal to the weapon\'s enhancement bonus. The bonus resets if the wielder attacks a different creature, studies a new target, or moves more than 60 feet from the studied target.',
    bonusEquivalent: 2, casterLevel: 10,
    effects: [],
  },
  {
    id: 'toxic',
    name: 'Toxic',
    description: 'A toxic weapon enhances poison delivery. It increases the save DCs of poisons applied to the weapon by 2. Additionally, there is a 25% chance per strike that the poison dose is not consumed and remains on the weapon for another attack; a single dose can be preserved this way only once.',
    bonusEquivalent: 2, casterLevel: 7,
    effects: [],
  },
  {
    id: 'treasonous',
    name: 'Treasonous',
    description: 'A treasonous weapon functions like a patriotic weapon but is attuned against a specific nationality. When used against members of that nationality, the weapon\'s enhancement bonus increases by +2 and it deals an additional 2d6 damage against those targets. This extra damage is not multiplied on a critical hit.',
    bonusEquivalent: 2, casterLevel: 12,
    effects: [],
  },
  {
    id: 'unholy_ue',
    name: 'Unholy',
    description: 'An unholy weapon is imbued with the power of evil. It deals an extra 2d6 points of damage against good-aligned creatures. On a confirmed critical hit against a good-aligned creature, the target gains 1 permanent negative level (Fort DC 14 negates). Good-aligned characters who wield an unholy weapon take 2 points of unholy backlash damage each round they hold it.',
    bonusEquivalent: 2, casterLevel: 7,
    effects: [],
    alignmentRequired: [Alignment.LawfulEvil, Alignment.NeutralEvil, Alignment.ChaoticEvil],
  },

  // +3 bonus equivalent
  {
    id: 'gory',
    name: 'Gory',
    description: 'A gory weapon functions similarly to a wounding weapon but with enhanced effects. It inflicts 1d2 points of bleed damage each time it strikes a creature. When the wielder confirms a critical hit with a gory weapon, they may make an Intimidate check to demoralize the target as an immediate action, gaining a bonus on the check equal to their character level.',
    bonusEquivalent: 3, casterLevel: 15,
    effects: [],
  },
  {
    id: 'redeemed',
    name: 'Redeemed',
    description: 'A redeemed weapon was formerly an unholy weapon that has been purified. It now functions as a holy weapon, dealing an additional 2d6 damage against evil-aligned creatures. The wielder also receives a sacred bonus on saving throws against evil outsider spells and abilities equal to the weapon\'s enhancement bonus, and a +5 competence bonus on Knowledge (planes) checks regarding evil outsiders. When applied to an unholy weapon, the redeemed property replaces unholy and requires paying for an additional +1 enhancement bonus.',
    bonusEquivalent: 3, casterLevel: 12,
    effects: [],
  },
  {
    id: 'speed_ue',
    name: 'Speed',
    description: 'When making a full-attack action, the wielder of a speed weapon may make one extra attack with it at their highest bonus. This additional attack is in addition to all attacks normally allowed.',
    bonusEquivalent: 3, casterLevel: 7,
    effects: [],
  },

  // +4 bonus equivalent
  {
    id: 'brilliant_energy_ue',
    name: 'Brilliant Energy',
    description: 'A brilliant energy weapon ignores all armor and shield bonuses to AC (including the natural armor bonus of constructs and undead). The weapon passes through inanimate matter as if it were not there. It cannot harm undead, constructs, or objects, and the wielder cannot use it to damage inanimate objects.',
    bonusEquivalent: 4, casterLevel: 16,
    effects: [],
  },

  // Flat gp cost abilities (non-standard enhancement equivalent)
  {
    id: 'impervious_weapon',
    name: 'Impervious',
    description: 'An impervious weapon resists damage and degradation. Metallic weapons are immune to rust; wooden components cannot rot or warp regardless of magical or supernatural causes. The weapon gains double its enhancement bonus to hardness and hit points. The break DC and the wielder\'s CMD against sunder attempts each receive a bonus equal to twice the weapon\'s enhancement bonus.',
    bonusEquivalent: 1, casterLevel: 7,
    effects: [],
  },
  {
    id: 'exclusionary',
    name: 'Exclusionary',
    description: 'The wielder can choose to exclude damaged creatures from her channel energy abilities for up to 1 minute. She can maintain exclusions on a number of targets equal to her Wisdom bonus plus the weapon\'s enhancement bonus. When this limit is exceeded, the longest-excluded target loses its exclusion.',
    bonusEquivalent: 1, casterLevel: 1,
    effects: [],
  },
  {
    id: 'glamered_weapon',
    name: 'Glamered',
    description: 'A glamered weapon can be commanded to change its appearance to look like another object of comparable size. It retains all actual properties, including weight, while disguised. Its magical nature remains concealed unless revealed by true seeing or equivalent magic. This ability is suppressed for 1 minute after the weapon is used in combat.',
    bonusEquivalent: 1, casterLevel: 10,
    effects: [],
  },
  {
    id: 'resizing',
    name: 'Resizing',
    description: 'A resizing weapon instantly shrinks or grows to suit the size of any creature that picks it up unless it is currently wielded by another creature. The weapon returns to its original size 1 round after the wielder releases it.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },
  {
    id: 'sacrosanct',
    name: 'Sacrosanct',
    description: 'A sacrosanct weapon takes the form of its deity\'s favored weapon and serves as a holy or unholy symbol. Once per day when the wielder uses the sacrosanct weapon to channel energy, they can increase the radius of the channel energy to 40 feet. The wielder must possess the ability to channel positive or negative energy. As an alternative to the daily use, the wielder may expend one use of mythic power to activate this ability instead.',
    bonusEquivalent: 1, casterLevel: 8,
    effects: [],
  },
  {
    id: 'liberating',
    name: 'Liberating',
    description: 'A liberating weapon aids escape and freedom of movement. Once per round as a free action when the wielder succeeds on an Escape Artist check or is the target of a freedom of movement effect, the weapon\'s wielder gains the benefits of a break enchantment spell. The weapon also grants a +2 competence bonus on Escape Artist checks.',
    bonusEquivalent: 1, casterLevel: 7,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.escape_artist', value: 2, source: 'Liberating Weapon' },
    ],
  },
  {
    id: 'transformative_greater',
    name: 'Transformative (Greater)',
    description: 'By speaking a command word, the wielder of a greater transformative weapon can change the weapon into any other weapon type (except ammunition). It can freely change between simple, martial, and exotic weapons of any handedness (light, one-handed, or two-handed) and between melee and ranged forms. All enhancement bonuses and special abilities transfer to the new form; abilities incompatible with the new shape are non-functional. Double weapons that lose that quality must choose which end\'s abilities to sacrifice; non-double weapons gaining it apply all abilities to only one end. The weapon reverts to its true form after remaining unattended for 1 day.',
    bonusEquivalent: 2, casterLevel: 15,
    effects: [],
  },
];
