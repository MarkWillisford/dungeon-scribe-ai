// Animus Adept — Path of War: Expanded prestige class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/prestige-classes/animus-adept/

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../../types';
import type { InitiatingProgressionTable } from '../../initiatingProgressionTables';

// Incremental additions to base class progression per prestige level 1-5:
// [maneuversKnown, maneuversReadied, stancesKnown]
// Values are additive (+N at that level), not cumulative totals.
export const ANIMUS_ADEPT_PROGRESSION: InitiatingProgressionTable = [
  [0, 0, 0], // 1
  [1, 1, 0], // 2
  [0, 0, 0], // 3
  [1, 0, 1], // 4
  [0, 1, 0], // 5
];

export const ANIMUS_ADEPT_CLASS: ExpandedClassData = {
  name: 'Animus Adept',
  category: 'Prestige',
  maxLevel: 5,
  hitDie: 8,
  skillRanksPerLevel: 2,
  classSkills: ['Craft', 'Knowledge (all)', 'Profession', 'Spellcraft', 'Use Magic Device'],
  babProgression: BABProgression.Medium,
  saves: {
    fortitude: SaveProgression.Poor,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: [],
  armorProficiencies: [],
  classFeatures: [
    {
      name: 'Animus',
      level: 1,
      description:
        "At 1st level, an animus adept gains an animus pool similar to a mystic's. Outside combat, an animus adept has no animus to spend. When the animus adept enters combat, he gains an animus pool equal to 1 + his highest initiation modifier (minimum 1) at the start of his first turn, and adds one point of animus to his animus pool at the start of each of his turns thereafter. His animus pool persists for one minute after the last enemy combatant is defeated or the encounter otherwise ends. At the end of any round in which the animus adept initiates a maneuver, he adds an additional point of animus to his pool. Certain abilities, such as some class features, maneuvers, and feats, require the animus adept to expend points of animus to use. If the animus adept previously had levels in the mystic class or another class that grants an animus pool, he instead adds his animus adept level to his levels in that class to determine its strength, potentially gaining more powerful maneuver augments or increasing the amount he can spend on such augments. If the animus adept possesses the Tap Animus feat, it is exchanged for the Extra Animus feat as normal.",
    },
    {
      name: 'Martial Glyphs (Basic)',
      level: 1,
      description:
        "At 1st level, an animus adept learns to use primal magic to funnel his uncontrolled arcane energies through elemental concepts. These concepts encapsulate base principles of arcane magic, the building blocks upon which actual spells are formed, and when the animus adept combines these building blocks with his physical abilities, he can channel them into martial glyphs. When he enters this class, an animus adept learns five basic glyphs, and learns three new glyphs at each animus adept level thereafter. Each time the animus adept gains a new level in this class, he can exchange a single known glyph for any other glyph he could learn. At 1st level, he can only learn basic glyphs. At 3rd level, he gains the ability to learn advanced glyphs, and at 5th level, he can learn master glyphs. The animus adept can cast a glyph as a free action once per round when he hits with a strike. Alternatively, he can cast a glyph as a swift action. In either case, casting a glyph costs one point of animus and affects a single creature within close range (25 feet + 5 feet per 2 initiator levels). Unless otherwise noted, a glyph lasts for a number of rounds equal to 1 + the animus adept's highest initiation modifier (minimum 1 round). If a glyph allows a saving throw, its save DC is 10 + 1/2 the animus adept's initiator level + the animus adept's highest initiation modifier. Repeated applications of the same glyph do not stack with each other or change their duration. Glyphs that deal energy damage or grant energy resistance use the animus adept's choice of his active energy type (if he is psionic) or his active element's associated energy type. If the animus adept does not have an active element, he gains one, as if he knew maneuvers from the Elemental Flux discipline. Once a glyph is cast, it maintains the element that it was cast with, if any. A character with the Spellcraft skill can identify glyphs as they are cast, treating the animus adept's class level as their effective spell level. Basic glyphs: Blinding Blade (next successful strike forces Reflex save or blindness for 1 round), Dead Steel (adds 1d6 negative energy damage per six initiator levels, max 3d6; 1d8 per six levels against fey, max 3d8), Deflective Armor (natural armor bonus +2, +1 per six initiator levels, max +5), Elemental Shield (grants energy resistance equal to initiator level), Elemental Weapon (adds 1d6 energy damage per six initiator levels, max 3d6, of active element type), Evasive Armor (next successful Reflex save negates effect entirely instead of partial), Ferrous Shell (+5 armor bonus via metal shell weighing 10 lbs, not counted as actual armor), Flowing Blade (roll twice against miss chance, use better result), Ghost Armor (armor and shield gain ghost touch property), Ghost Eating Blade (weapons gain ghost touch property), Shadowmeld (grants 20% miss chance concealment).",
    },
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "At every even level, an animus adept gains a new maneuver known. His available disciplines for these maneuvers are Elemental Flux and three of his previously available disciplines, chosen when he takes his first animus adept level. He must meet a maneuver's prerequisites to learn it, as normal. He adds his full animus adept level to his initiator level to determine his total initiator level and his highest-level maneuvers known. At 2nd level and again at 5th level, an animus adept gains an additional maneuver readied.",
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        "At 4th level, an animus adept learns a new stance from any of the disciplines available to him as an animus adept. He must meet the stance's prerequisites to learn it, as normal.",
    },
    {
      name: 'Mystical Prowess',
      level: 2,
      description:
        'Starting at 2nd level, an animus adept adds his class level to Knowledge (martial) and Spellcraft checks to identify martial maneuvers, powers, spells, and glyphs. In addition, if the animus adept possesses the elemental glyphs or candle magic class features, he adds his animus adept level to his mystic level to determine their effectiveness of those abilities.',
    },
    {
      name: 'Martial Glyphs (Advanced)',
      level: 3,
      description:
        'At 3rd level, the animus adept gains the ability to learn advanced glyphs in addition to basic glyphs. Advanced glyphs: Corpse Strength (+4 profane Strength bonus; +2 save bonus vs. negative effects; heals from negative energy), Death Shield (negative energy resistance equal to initiator level; +4 bonus vs. energy drain), Elemental Armor (melee attackers take 2d6 damage of active element type), Hardened Armor (damage reduction 5/adamantine), Illusionary State (creates mirror images as the spell, using initiator level as caster level), Spirit Stride (free action teleport within 5 feet per two initiator levels, no line of effect required; expires after use), Spiritual Anchor (target affected as by dimensional anchor spell), Wind Speed (grants haste benefits: +1 attack/initiative/Reflex, +30 ft. movement, extra attack on full attack).',
    },
    {
      name: 'Mass Martial Glyphs',
      level: 4,
      description:
        "At 4th level, an animus adept's control over his roiling arcane might is such that he can become a living font of animus-infused glyphs. As a full-round action, the animus adept can cast a martial glyph against a number of allies within 30 feet equal to his highest initiation modifier.",
    },
    {
      name: 'Martial Glyphs (Master)',
      level: 5,
      description:
        'At 5th level, the animus adept can learn master glyphs in addition to basic and advanced glyphs. Master glyphs: Dispelling Burn (greater dispel magic effect using initiator level as caster level; 1d4 damage per dispelled spell level; instantaneous duration), Drowning Curse (target nauseated and unable to speak or cast spells; Fortitude save each turn to ignore effects for one round), Fortified Heart (immunity to critical hits and sneak attacks), Gravity of Iron (metal-wearing targets must make Fortitude save or be paralyzed and prone; can retry save each turn), Incandescent Array (emits daylight; grants 50% miss chance, ineffective against non-sight-based targeting), Wraithstrike (Will save or 1d3 temporary negative levels lasting until encounter ends; stacks on repeated applications).',
    },
    {
      name: 'Runic Singularity',
      level: 5,
      description:
        'At 5th level, the animus adept gains the ability to cast a martial glyph against a target within close range as part of the initiation action of a boost or when he changes his stance. In addition, he adds one additional point of animus to his animus pool at the start of each of his turns in a combat.',
    },
  ],
  prerequisites: {
    skills: [
      { name: 'Knowledge (martial)', ranks: 5 },
      { name: 'Spellcraft', ranks: 5 },
    ],
    feats: ['Animus Healing'],
    special: [
      'Ability to initiate maneuvers, initiator level 5th',
      'Must possess an animus pool (class feature or Tap Animus feat)',
    ],
  },
  spellcasting: {
    type: 'None',
    casting: 'None',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: ['elemental-flux'],
    progressionTableKey: 'animus-adept',
    recoveryMechanics: {
      primary: {
        type: 'animus_fueled',
        resourceId: 'animus',
      },
    },
  },
  source: 'Path of War: Expanded',
};
