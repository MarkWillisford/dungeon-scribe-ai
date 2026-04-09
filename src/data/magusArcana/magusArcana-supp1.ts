// Magus Arcana — Supplement Book Batch 1
// Entries: 12 (Advanced Class Guide: 2, Blood of the Moon: 6, The Harrow Handbook: 1, Disciple's Doctrine: 3)
// Source: https://www.aonprd.com/MagusArcana.aspx

import type { MagusArcanaEntry } from '@/types/classOptions';

export const magusArcanaSupp1: MagusArcanaEntry[] = [
  // ---- Advanced Class Guide ----

  {
    id: 'magus-arcana-flamboyant-arcana',
    name: 'Flamboyant Arcana',
    description:
      "The magus gains the derring-do and opportune parry and riposte deeds from the swashbuckler class. The magus can spend arcane pool points rather than panache points to use these deeds. Effects that add to, reduce the cost of, or otherwise affect panache or grit do not affect the magus's arcane pool. The arcane pool cannot be used to perform deeds or fuel abilities that require panache or grit and are not part of this arcana.",
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-arcane-deed',
    name: 'Arcane Deed',
    description:
      "The magus can pick any one deed from the swashbuckler class feature that a swashbuckler of his magus level could use. The magus can use this deed by spending arcane pool points instead of panache points. For the purpose of swashbuckler deeds only, the magus's effective swashbuckler level is equal to his magus level. The magus can select this arcana multiple times; each time it is selected, he gains another deed.",
    prerequisites: [{ type: 'special', description: 'flamboyant arcana magus arcana' }],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ---- Blood of the Moon ----

  {
    id: 'magus-arcana-aquatic-agility',
    name: 'Aquatic Agility',
    description:
      'The magus can spend 1 point from his arcane pool as an immediate action to gain water breathing for 1 round per magus level. While this ability is active, the magus ignores the effects of rough water and takes no penalty on attack rolls or to his movement speed from being underwater. The magus must be at least 6th level to select this arcana.',
    prerequisites: [{ type: 'level', minimum: 6 }],
    source: 'pf1e-ppc-btm',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-arcane-scent',
    name: 'Arcane Scent',
    description:
      "The magus can spend 1 point from his arcane pool to gain the scent ability for 1 hour per magus level, but only for detecting spellcasters. As a move action, the magus can attempt a Spellcraft check (DC 10 + the target creature's caster level) to determine the highest level of spell that creature is capable of casting. A magus can attempt only one such check per creature per 24 hours.",
    source: 'pf1e-ppc-btm',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-natural-spell-combat',
    name: 'Natural Spell Combat',
    description:
      'The magus can use his spell combat ability with a natural attack of his choice, gaining a +2 bonus on concentration checks to cast defensively when doing so. The magus cannot wield a weapon in an appendage he uses to make his chosen natural attack if that attack requires the appendage to be free. The magus can select this arcana multiple times; each time it is selected, it applies to a different natural attack.',
    source: 'pf1e-ppc-btm',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-rakshasas-fortune',
    name: "Rakshasa's Fortune",
    description:
      "Whenever the magus casts a polymorph subschool spell on himself, he draws a card from a harrow deck he owns. If the card drawn is a true match (matching both suit and alignment), the duration of the spell is doubled and the magus gains two of the following abilities: darkvision 60 ft., low-light vision, scent, or a +2 natural armor bonus. If the card is a partial match (matching only suit or alignment), the magus gains one such ability. If the card is an opposite match (matching neither suit nor alignment), the spell's duration is halved and the magus loses one ability he would otherwise have gained. The magus must be at least 9th level and own a complete harrow deck to select this arcana.",
    prerequisites: [
      { type: 'level', minimum: 9 },
      { type: 'special', description: 'must own a complete harrow deck' },
    ],
    source: 'pf1e-ppc-btm',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-spell-trickery',
    name: 'Spell Trickery',
    description:
      'Once per day, after the magus successfully performs a dirty trick combat maneuver, he can cast one of his prepared spells from the illusion or enchantment school with a casting time of 1 standard action or less as a swift action. The magus must be at least 12th level to select this arcana.',
    prerequisites: [{ type: 'level', minimum: 12 }],
    source: 'pf1e-ppc-btm',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-spell-scars',
    name: 'Spell-Scars',
    description:
      'The magus can inscribe magical scar-tattoos on his body that function as scrolls. The magus can cast a spell from a spell-scar exactly like casting from a scroll. The magus can also treat spell-scars like the Spell Mastery feat, preparing spells from them without expending the spell-scar. The magus can store a total of 18 spell levels worth of spell-scars on his body. Creating spell-scars follows the same rules as scribing scrolls.',
    source: 'pf1e-ppc-btm',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ---- The Harrow Handbook ----

  {
    id: 'magus-arcana-arcane-dealer',
    name: 'Arcane Dealer',
    description:
      'The magus gains the Deadly Dealer feat as a bonus feat. In addition, the magus can use his arcane pool to enhance a deck of cards as if it were a ranged weapon, treating the deck as having 54 pieces of ammunition. The magus must use Arcane Strike or spend arcane pool points to enhance the deck in this way. The magus must be at least 6th level to select this arcana.',
    prerequisites: [{ type: 'level', minimum: 6 }],
    source: 'pf1e-ppc-thh',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ---- Disciple's Doctrine ----

  {
    id: 'magus-arcana-book-bound',
    name: 'Book-Bound',
    description:
      'While the magus is wielding his spellbook in his off hand, he can take an immediate action to gain a +4 bonus on one concentration check made within the next round. This bonus stacks with other bonuses, including the bonus from the concentrate arcana. The magus can use this ability three times per day.',
    source: 'pf1e-ppc-dd',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-circle-of-order',
    name: 'Circle of Order',
    description:
      'The magus can spend 1 point from his arcane pool as a swift action to gain a dodge bonus to AC equal to half his magus level (maximum +10) until the beginning of his next turn. This bonus applies only against attacks and effects from chaotic-aligned creatures and chaotic outsiders. The magus must be at least 9th level to select this arcana.',
    prerequisites: [{ type: 'level', minimum: 9 }],
    source: 'pf1e-ppc-dd',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-tabriss-step',
    name: "Tabris's Step",
    description:
      'The magus can spend 1 point from his arcane pool as a swift action to gain the effects of a water walk spell for 10 minutes per magus level. The magus can instead spend 2 points from his arcane pool to extend this effect to a number of creatures touched equal to his magus level. The magus must be at least 6th level to select this arcana.',
    prerequisites: [{ type: 'level', minimum: 6 }],
    source: 'pf1e-ppc-dd',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
