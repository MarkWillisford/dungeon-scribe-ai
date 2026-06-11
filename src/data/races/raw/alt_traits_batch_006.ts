// Batch 006 | first: 'Gnoll' | last: 'Aquatic Elf' | races: 7 | traits: 6
// Checkpoint notes:
// - Gnoll: d20pfsrd (standard-races-1-10-rp/gnoll-6-rp) has NO Alternate Racial Traits
//   section. AoN (RacesDisplay?ItemName=Gnoll) returned HTTP 500. No official ARTs exist
//   for the ARG playable Gnoll. -> empty array.
// - Lizardfolk: d20pfsrd (standard-races-1-10-rp/lizardfolk-8-rp) has NO Alternate Racial
//   Traits section. AoN returned HTTP 500. No official ARTs. -> empty array.
// - Monkey Goblin: d20pfsrd (standard-races-1-10-rp/monkey-goblin-10-rp) has NO Alternate
//   Racial Traits section. -> empty array.
// - Aquatic Elf: d20pfsrd page (race-points-unknown/aquatic-elves) 404'd repeatedly;
//   sourced 3 ARTs from Archives of Nethys (RacesDisplay?ItemName=Aquatic%20Elf).
import { AlternativeRacialTraitData } from '../types';

export const gnollAltTraits: AlternativeRacialTraitData[] = [];

export const lizardfolkAltTraits: AlternativeRacialTraitData[] = [];

export const monkeyGoblinAltTraits: AlternativeRacialTraitData[] = [];

export const skinwalkerAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Beast Talker',
    description:
      "Some skinwalkers' ability to communicate with animals is stronger than their ability to transform. Such skinwalkers can only use their change shape ability once per day for 1 minute per level, but they can use their speak with animals spell-like ability at will.",
    replaces: ['Change Shape', 'Spell-Like Ability'],
    source: 'Blood of the Moon',
  },
];

export const triaxianAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Transitional Lore',
    description:
      'Transitional triaxians are often instilled from a young age with the lore they need to prepare for the next winter or summer; they gain a +1 racial bonus on Knowledge (nature) and Survival checks.',
    replaces: ['Seasoned'],
    source: 'People of the Stars',
  },
];

export const androidAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Repairing Nanites',
    description:
      'Some androids cannot prompt their nanites to aid them in any endeavor, but instead find that their nanites stitch their wounds together. The first time each day that such an android has taken an amount of damage greater than or equal to twice her Hit Dice, the nanites automatically activate, without an action. Her circuitry-tattoos glow with light equivalent to that of a torch for 1 round and she heals a number of hit points equal to twice her Hit Dice.',
    replaces: ['Nanite Surge'],
    source: 'People of the Stars',
  },
];

export const aquaticElfAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Deep Sea Dweller',
    description:
      'Aquatic elves who live far beneath the surface have adapted to the inhospitable conditions of the ocean depths. Aquatic elves with this racial trait gain darkvision with a range of 60 feet and cold resistance 5.',
    replaces: ['Low-Light Vision', 'Elven Immunities'],
    source: 'Blood of the Sea',
  },
  {
    name: 'Surfacer Antagonist',
    description:
      'Aquatic elves generally distrust humans, but for some, the suspicion has become festering hatred. Those who have lost loved ones to human aggression or have watched humans loot artifacts from venerated undersea ruins view all humans as enemies. Aquatic elves with this racial trait receive a +1 bonus on attack rolls against humans.',
    replaces: ['Elven Magic'],
    source: 'Blood of the Sea',
  },
  {
    name: 'Surface Features',
    description:
      'Some aquatic elves appear almost indistinguishable from surface elves. Their coloring, height, and weight all suggest those of a surface elf, and the webbing between their digits is almost transparent. Aquatic elves with this racial trait gain a +4 bonus on Bluff and Disguise checks when attempting to pass themselves off as surface elves.',
    replaces: ['Keen Senses'],
    source: 'Blood of the Sea',
  },
];

export const batch_006: Record<string, AlternativeRacialTraitData[]> = {
  Gnoll: gnollAltTraits,
  Lizardfolk: lizardfolkAltTraits,
  'Monkey Goblin': monkeyGoblinAltTraits,
  Skinwalker: skinwalkerAltTraits,
  Triaxian: triaxianAltTraits,
  Android: androidAltTraits,
  'Aquatic Elf': aquaticElfAltTraits,
};
