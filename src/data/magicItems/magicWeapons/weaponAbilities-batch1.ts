import type { ItemSpecialAbility } from '@/types/magicItems';
import { Alignment } from '@/types/base';

// All Core Rulebook weapon special abilities, sorted by bonus equivalent then alphabetically.
export const weaponAbilitiesBatch1: ItemSpecialAbility[] = [
  // +1 bonus equivalent
  {
    id: 'bane',
    name: 'Bane',
    description: 'Chosen at creation against a specific creature type (or subtype for humanoids/outsiders). Grants +2 enhancement bonus to attack rolls and +2d6 bonus damage against that creature type.',
    bonusEquivalent: 1, casterLevel: 8,
    effects: [],
  },
  {
    id: 'corrosive',
    name: 'Corrosive',
    description: 'Deals +1d6 acid damage on a successful hit.',
    bonusEquivalent: 1, casterLevel: 10,
    effects: [],
  },
  {
    id: 'defending',
    name: 'Defending',
    description: 'Allows the wielder to transfer some or all of the sword\'s enhancement bonus to their AC as a free action each round. The total enhancement bonus used for attack + AC cannot exceed the weapon\'s enhancement bonus.',
    bonusEquivalent: 1, casterLevel: 8,
    effects: [],
  },
  {
    id: 'flaming',
    name: 'Flaming',
    description: 'Deals +1d6 fire damage on a successful hit.',
    bonusEquivalent: 1, casterLevel: 10,
    effects: [],
  },
  {
    id: 'frost',
    name: 'Frost',
    description: 'Deals +1d6 cold damage on a successful hit.',
    bonusEquivalent: 1, casterLevel: 8,
    effects: [],
  },
  {
    id: 'ghost_touch',
    name: 'Ghost Touch',
    description: 'Deals damage normally against incorporeal creatures regardless of the weapon\'s enhancement bonus. An incorporeal creature\'s 50% miss chance does not apply. Can be picked up and used by incorporeal creatures.',
    bonusEquivalent: 1, casterLevel: 15,
    effects: [],
  },
  {
    id: 'keen',
    name: 'Keen',
    description: 'Doubles the threat range of the weapon. Only applicable to piercing or slashing weapons. Does not stack with Improved Critical feat or other keen effects.',
    bonusEquivalent: 1, casterLevel: 10,
    effects: [],
  },
  {
    id: 'ki_focus',
    name: 'Ki Focus',
    description: 'The weapon acts as an extension of the wielder\'s ki. A monk (or other ki user) may use ki abilities through the weapon as if striking with an unarmed strike, including spending ki for extra attacks.',
    bonusEquivalent: 1, casterLevel: 8,
    effects: [],
  },
  {
    id: 'merciful',
    name: 'Merciful',
    description: 'Deals +1d6 nonlethal damage. On command, all damage dealt by the weapon becomes nonlethal. Activating or deactivating this property is a free action.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },
  {
    id: 'mighty_cleaving',
    name: 'Mighty Cleaving',
    description: 'Allows the wielder to make one additional Cleave attempt per round (gaining up to two Cleave attempts in a single round instead of one).',
    bonusEquivalent: 1, casterLevel: 8,
    effects: [],
  },
  {
    id: 'returning',
    name: 'Returning',
    description: 'A thrown weapon returns to the thrower\'s hand at the start of their next turn. Only applicable to thrown weapons.',
    bonusEquivalent: 1, casterLevel: 7,
    effects: [],
  },
  {
    id: 'seeking',
    name: 'Seeking',
    description: 'The weapon compensates for concealment, allowing the attacker to ignore the miss chance granted by concealment (but not total concealment). Only applicable to ranged weapons.',
    bonusEquivalent: 1, casterLevel: 12,
    effects: [],
  },
  {
    id: 'shock',
    name: 'Shock',
    description: 'Deals +1d6 electricity damage on a successful hit.',
    bonusEquivalent: 1, casterLevel: 8,
    effects: [],
  },
  {
    id: 'spell_storing',
    name: 'Spell Storing',
    description: 'Allows a spellcaster to store a single targeted spell of up to 3rd level in the weapon. The next time the weapon strikes a creature and the wielder wills it, the stored spell is discharged. A spell stored in the weapon works only if it is of a level less than or equal to the wielder\'s caster level.',
    bonusEquivalent: 1, casterLevel: 12,
    effects: [],
  },
  {
    id: 'throwing',
    name: 'Throwing',
    description: 'A melee weapon with this ability can be thrown by a wielder proficient in the weapon\'s use as if it were a ranged weapon. The weapon has a range increment of 10 feet.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },
  {
    id: 'thundering',
    name: 'Thundering',
    description: 'On a confirmed critical hit, deals an extra 1d8 sonic damage (2d8 for ×3 crit multiplier, 3d8 for ×4). The target must succeed at a DC 14 Fortitude save or be permanently deafened.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },

  // +2 bonus equivalent
  {
    id: 'anarchic',
    name: 'Anarchic',
    description: 'Deals +2d6 damage against lawful creatures. Lawful characters wielding this weapon take 2 points of chaotic backlash damage each round they hold it.',
    bonusEquivalent: 2, casterLevel: 7,
    effects: [],
    alignmentRequired: [Alignment.ChaoticGood, Alignment.ChaoticNeutral, Alignment.ChaoticEvil],
  },
  {
    id: 'axiomatic',
    name: 'Axiomatic',
    description: 'Deals +2d6 damage against chaotic creatures. Chaotic characters wielding this weapon take 2 points of lawful backlash damage each round they hold it.',
    bonusEquivalent: 2, casterLevel: 7,
    effects: [],
    alignmentRequired: [Alignment.LawfulGood, Alignment.LawfulNeutral, Alignment.LawfulEvil],
  },
  {
    id: 'disruption',
    name: 'Disruption',
    description: 'On a hit against an undead creature, the target must succeed at a DC 14 Will save or be destroyed. Only applicable to bludgeoning weapons.',
    bonusEquivalent: 2, casterLevel: 14,
    effects: [],
  },
  {
    id: 'holy',
    name: 'Holy',
    description: 'Deals +2d6 damage against evil creatures. On a confirmed critical hit against an evil creature, the target gains 1 permanent negative level (Fort DC 14 negates). Evil characters wielding a holy weapon take 2 points of holy backlash damage each round they hold it.',
    bonusEquivalent: 2, casterLevel: 7,
    effects: [],
    alignmentRequired: [Alignment.LawfulGood, Alignment.NeutralGood, Alignment.ChaoticGood],
  },
  {
    id: 'unholy',
    name: 'Unholy',
    description: 'Deals +2d6 damage against good creatures. On a confirmed critical hit against a good creature, the target gains 1 permanent negative level (Fort DC 14 negates). Good characters wielding an unholy weapon take 2 points of unholy backlash damage each round they hold it.',
    bonusEquivalent: 2, casterLevel: 7,
    effects: [],
    alignmentRequired: [Alignment.LawfulEvil, Alignment.NeutralEvil, Alignment.ChaoticEvil],
  },
  {
    id: 'vicious',
    name: 'Vicious',
    description: 'Deals +2d6 damage on a successful hit. However, each time it deals this extra damage, the wielder also takes 1d6 points of damage.',
    bonusEquivalent: 1, casterLevel: 9,
    effects: [],
  },
  {
    id: 'wounding',
    name: 'Wounding',
    description: 'On a hit, causes 1 point of bleed damage per round in addition to normal damage. Multiple wounds from a wounding weapon stack (each hit adds 1 more bleed/round). Only magical healing or a DC 15 Heal check stops the bleeding.',
    bonusEquivalent: 2, casterLevel: 10,
    effects: [],
  },

  // +3 bonus equivalent
  {
    id: 'speed',
    name: 'Speed',
    description: 'Grants one additional attack at the wielder\'s highest bonus when the wielder makes a full attack action. This extra attack is in addition to all attacks normally allowed.',
    bonusEquivalent: 3, casterLevel: 7,
    effects: [],
  },

  // +4 bonus equivalent
  {
    id: 'brilliant_energy',
    name: 'Brilliant Energy',
    description: 'Ignores armor and shield bonuses to AC (including natural armor of constructs and undead). The weapon passes through inanimate matter as if it were not there. Cannot harm undead, constructs, or objects.',
    bonusEquivalent: 4, casterLevel: 16,
    effects: [],
  },
  {
    id: 'dancing',
    name: 'Dancing',
    description: 'As a standard action, can be released to fly and fight on its own for 4 rounds using the wielder\'s BAB plus their highest mental ability score modifier. After 4 rounds it returns and the wielder must hold it for 4 rounds before it can dance again.',
    bonusEquivalent: 4, casterLevel: 15,
    effects: [],
  },

  // +5 bonus equivalent
  {
    id: 'vorpal',
    name: 'Vorpal',
    description: 'On a natural roll of 20 (confirmed critical) against a creature with a head, the weapon severs the head from the body, instantly killing it (Fort DC 20 negates for creatures immune to critical hits). Only applicable to slashing weapons.',
    bonusEquivalent: 5, casterLevel: 18,
    effects: [],
  },
];
