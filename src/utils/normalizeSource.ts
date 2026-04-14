/**
 * normalizeSource.ts — Pathfinder 1e game data source normalization
 *
 * Converts inconsistent source formats (short codes and full book names)
 * into canonical GameDataSource records for seeding to Firestore.
 *
 * Handles ~150 short codes from scrapers and human-authored data.
 * Gracefully handles unknown sources with warnings instead of crashes.
 */

import type { GameDataSource, TemplateSourceInfo } from '@/types/gameData';

/**
 * Comprehensive lookup table: short code → GameDataSource
 *
 * Format:
 *  - 'pf1e-core' → Core Rulebook
 *  - 'pf1e-apg' → Advanced Player's Guide
 *  - 'pf1e-ppc-*' → Pathfinder Player Companion series
 *  - 'pf1e-ap###' → Adventure Path modules
 *  - Custom/homebrew → preserved as-is
 */
const SHORT_CODE_MAP: Record<string, GameDataSource> = {
  // Core rulebooks
  'pf1e-core': {
    bookId: 'crb',
    bookName: 'Core Rulebook',
    publisher: 'Paizo',
  },
  'pf1e-apg': {
    bookId: 'apg',
    bookName: "Advanced Player's Guide",
    publisher: 'Paizo',
  },
  'pf1e-um': {
    bookId: 'um',
    bookName: 'Ultimate Magic',
    publisher: 'Paizo',
  },
  'pf1e-uc': {
    bookId: 'uc',
    bookName: 'Ultimate Combat',
    publisher: 'Paizo',
  },
  'pf1e-arg': {
    bookId: 'arg',
    bookName: 'Advanced Race Guide',
    publisher: 'Paizo',
  },
  'pf1e-acg': {
    bookId: 'acg',
    bookName: 'Advanced Class Guide',
    publisher: 'Paizo',
  },
  'pf1e-unchained': {
    bookId: 'unchained',
    bookName: 'Pathfinder Unchained',
    publisher: 'Paizo',
  },
  'pf1e-ui': {
    bookId: 'ui',
    bookName: 'Ultimate Intrigue',
    publisher: 'Paizo',
  },
  'pf1e-uw': {
    bookId: 'uw',
    bookName: 'Ultimate Wilderness',
    publisher: 'Paizo',
  },

  // Hardcover expansions
  'pf1e-oa': {
    bookId: 'oa',
    bookName: 'Occult Adventures',
    publisher: 'Paizo',
  },
  'pf1e-occult-adventures': {
    bookId: 'oa',
    bookName: 'Occult Adventures',
    publisher: 'Paizo',
  },
  'pf1e-oo': {
    bookId: 'oo',
    bookName: 'Occult Origins',
    publisher: 'Paizo',
  },
  'pf1e-occult-origins': {
    bookId: 'oo',
    bookName: 'Occult Origins',
    publisher: 'Paizo',
  },
  'pf1e-ha': {
    bookId: 'ha',
    bookName: 'Horror Adventures',
    publisher: 'Paizo',
  },
  'pf1e-or': {
    bookId: 'or',
    bookName: 'Orcs of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-orcs': {
    bookId: 'or',
    bookName: 'Orcs of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-isg': {
    bookId: 'isg',
    bookName: 'Inner Sea Gods',
    publisher: 'Paizo',
  },
  'pf1e-inner-sea-gods': {
    bookId: 'isg',
    bookName: 'Inner Sea Gods',
    publisher: 'Paizo',
  },
  'pf1e-ismc': {
    bookId: 'ismc',
    bookName: 'Inner Sea Magic',
    publisher: 'Paizo',
  },
  'pf1e-inner-sea-magic': {
    bookId: 'ismc',
    bookName: 'Inner Sea Magic',
    publisher: 'Paizo',
  },
  'pf1e-phh': {
    bookId: 'phh',
    bookName: "Psychic's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-emh': {
    bookId: 'emh',
    bookName: "Elemental Master's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-elemental-masters-handbook': {
    bookId: 'emh',
    bookName: "Elemental Master's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-mhh': {
    bookId: 'mhh',
    bookName: "Monster Hunter's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-mah': {
    bookId: 'mah',
    bookName: "Martial Artist's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-martial-arts-handbook': {
    bookId: 'mah',
    bookName: "Martial Artist's Handbook",
    publisher: 'Paizo',
  },

  // Supplement series
  'pf1e-b1': {
    bookId: 'b1',
    bookName: 'Bonus Bestiary 1',
    publisher: 'Paizo',
  },
  'pf1e-b2': {
    bookId: 'b2',
    bookName: 'Bonus Bestiary 2',
    publisher: 'Paizo',
  },
  'pf1e-b3': {
    bookId: 'b3',
    bookName: 'Bonus Bestiary 3',
    publisher: 'Paizo',
  },
  'pf1e-b4': {
    bookId: 'b4',
    bookName: 'Bonus Bestiary 4',
    publisher: 'Paizo',
  },
  'pf1e-b5': {
    bookId: 'b5',
    bookName: 'Bonus Bestiary 5',
    publisher: 'Paizo',
  },
  'pf1e-b6': {
    bookId: 'b6',
    bookName: 'Bonus Bestiary 6',
    publisher: 'Paizo',
  },

  // Campaign settings/gazetteers
  'pf1e-hog': {
    bookId: 'hog',
    bookName: 'Heroes of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-heroes-of-golarion': {
    bookId: 'hog',
    bookName: 'Heroes of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-isi': {
    bookId: 'isi',
    bookName: 'Inner Sea Intrigue',
    publisher: 'Paizo',
  },
  'pf1e-da': {
    bookId: 'da',
    bookName: 'Distant Shores',
    publisher: 'Paizo',
  },

  // Magic/spellcasting supplements
  'pf1e-mc': {
    bookId: 'mc',
    bookName: 'Magic of Golarion',
    publisher: 'Paizo',
  },

  // Special/niche books
  'pf1e-aa': {
    bookId: 'aa',
    bookName: 'Advanced Arcana',
    publisher: 'Paizo',
  },
  'pf1e-aco': {
    bookId: 'aco',
    bookName: 'Alchemy Codex',
    publisher: 'Paizo',
  },
  'pf1e-ag': {
    bookId: 'ag',
    bookName: 'Alchemy Guide',
    publisher: 'Paizo',
  },
  'pf1e-ap': {
    bookId: 'ap',
    bookName: 'Pathfinder Adventure Path',
    publisher: 'Paizo',
  },
  'pf1e-cc': {
    bookId: 'cc',
    bookName: 'Chronicles of the Crusades',
    publisher: 'Paizo',
  },
  'pf1e-cs-aa': {
    bookId: 'cs-aa',
    bookName: 'Campaign Setting: Advanced Arcana',
    publisher: 'Paizo',
  },
  'pf1e-cs-qje': {
    bookId: 'cs-qje',
    bookName: 'Campaign Setting: Quest for Jade Empire',
    publisher: 'Paizo',
  },
  'pf1e-cohorts': {
    bookId: 'cohorts',
    bookName: 'Cohorts & Companions',
    publisher: 'Paizo',
  },
  'pf1e-concordance-rivals': {
    bookId: 'concordance-rivals',
    bookName: 'Concordance of Rivals',
    publisher: 'Paizo',
  },
  'pf1e-blood-moon': {
    bookId: 'blood-moon',
    bookName: 'Blood Moon',
    publisher: 'Paizo',
  },
  'pf1e-blood-of-the-beast': {
    bookId: 'blood-of-the-beast',
    bookName: 'Blood of the Beast',
    publisher: 'Paizo',
  },
  'pf1e-blood-of-the-moon': {
    bookId: 'blood-of-the-moon',
    bookName: 'Blood of the Moon',
    publisher: 'Paizo',
  },
  'pf1e-blood-shadows': {
    bookId: 'blood-shadows',
    bookName: 'Blood Shadows',
    publisher: 'Paizo',
  },
  'pf1e-book-of-the-damned': {
    bookId: 'book-of-the-damned',
    bookName: 'Book of the Damned',
    publisher: 'Paizo',
  },
  'pf1e-botm': {
    bookId: 'botm',
    bookName: 'Book of the Damned',
    publisher: 'Paizo',
  },
  'pf1e-champions-corruption': {
    bookId: 'champions-corruption',
    bookName: 'Champions: Corruption',
    publisher: 'Paizo',
  },
  'pf1e-champions-purity': {
    bookId: 'champions-purity',
    bookName: 'Champions: Purity',
    publisher: 'Paizo',
  },
  'pf1e-champs-purity': {
    bookId: 'champions-purity',
    bookName: 'Champions: Purity',
    publisher: 'Paizo',
  },
  'pf1e-harrow': {
    bookId: 'harrow',
    bookName: 'Harrow Handbook',
    publisher: 'Paizo',
  },
  'pf1e-hh': {
    bookId: 'hh',
    bookName: 'Harrow Handbook',
    publisher: 'Paizo',
  },
  'pf1e-heroes-street': {
    bookId: 'heroes-street',
    bookName: 'Heroes of the Streets',
    publisher: 'Paizo',
  },
  'pf1e-heroes-wild': {
    bookId: 'heroes-wild',
    bookName: 'Heroes of the Wild',
    publisher: 'Paizo',
  },
  'pf1e-horror-realms': {
    bookId: 'horror-realms',
    bookName: 'Horror Realms',
    publisher: 'Paizo',
  },
  'pf1e-lod': {
    bookId: 'lod',
    bookName: 'Legacy of Dragons',
    publisher: 'Paizo',
  },
  'pf1e-legacy-of-dragons': {
    bookId: 'lod',
    bookName: 'Legacy of Dragons',
    publisher: 'Paizo',
  },
  'pf1e-legacy-first-world': {
    bookId: 'legacy-first-world',
    bookName: 'Legacy: First World',
    publisher: 'Paizo',
  },
  'pf1e-plane-hoppers-handbook': {
    bookId: 'plane-hoppers-handbook',
    bookName: "Plane Hopper's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-pots': {
    bookId: 'pots',
    bookName: 'Planes of Power',
    publisher: 'Paizo',
  },
  'pf1e-psychic-anthology': {
    bookId: 'psychic-anthology',
    bookName: 'Psychic Anthology',
    publisher: 'Paizo',
  },
  'pf1e-rtt': {
    bookId: 'rtt',
    bookName: 'Rogue Talent Tome',
    publisher: 'Paizo',
  },
  'pf1e-spy': {
    bookId: 'spy',
    bookName: "Spy's Guide to Golarion",
    publisher: 'Paizo',
  },
  'pf1e-vc': {
    bookId: 'vc',
    bookName: 'Varscona Chronicles',
    publisher: 'Paizo',
  },
  'pf1e-wilderness-origins': {
    bookId: 'wo',
    bookName: 'Wilderness Origins',
    publisher: 'Paizo',
  },
  'pf1e-wo': {
    bookId: 'wo',
    bookName: 'Wilderness Origins',
    publisher: 'Paizo',
  },

  // Pathfinder Player Companion series (pf1e-ppc-*)
  // These are the most numerous and need systematic mapping
  'pf1e-ppc-aa': {
    bookId: 'ppc-aa',
    bookName: 'Pathfinder Player Companion: Arcane Anthology',
    publisher: 'Paizo',
  },
  'pf1e-ppc-aco': {
    bookId: 'ppc-aco',
    bookName: "Pathfinder Player Companion: Ancestral Companion's Codex",
    publisher: 'Paizo',
  },
  'pf1e-ppc-ag': {
    bookId: 'ppc-ag',
    bookName: 'Pathfinder Player Companion: Advanced Gear',
    publisher: 'Paizo',
  },
  'pf1e-ppc-ah': {
    bookId: 'ppc-ah',
    bookName: 'Pathfinder Player Companion: Advanced Heritages',
    publisher: 'Paizo',
  },
  'pf1e-ppc-ahh': {
    bookId: 'ppc-ahh',
    bookName: 'Pathfinder Player Companion: Advanced Heritages Handbook',
    publisher: 'Paizo',
  },
  'pf1e-ppc-aoe': {
    bookId: 'ppc-aoe',
    bookName: 'Pathfinder Player Companion: Advanced Origin Essentials',
    publisher: 'Paizo',
  },
  'pf1e-ppc-boa': {
    bookId: 'ppc-boa',
    bookName: 'Pathfinder Player Companion: Blood of Angels',
    publisher: 'Paizo',
  },
  'pf1e-ppc-bob': {
    bookId: 'ppc-bob',
    bookName: 'Pathfinder Player Companion: Blood of Beasts',
    publisher: 'Paizo',
  },
  'pf1e-ppc-boe': {
    bookId: 'ppc-boe',
    bookName: 'Pathfinder Player Companion: Blood of Elves',
    publisher: 'Paizo',
  },
  'pf1e-ppc-bof': {
    bookId: 'ppc-bof',
    bookName: 'Pathfinder Player Companion: Blood of Fiends',
    publisher: 'Paizo',
  },
  'pf1e-ppc-bos': {
    bookId: 'ppc-bos',
    bookName: 'Pathfinder Player Companion: Blood of the Sea',
    publisher: 'Paizo',
  },
  'pf1e-ppc-botc': {
    bookId: 'ppc-botc',
    bookName: 'Pathfinder Player Companion: Blood of the Coven',
    publisher: 'Paizo',
  },
  'pf1e-ppc-botm': {
    bookId: 'ppc-botm',
    bookName: 'Pathfinder Player Companion: Blood of the Moon',
    publisher: 'Paizo',
  },
  'pf1e-ppc-btm': {
    bookId: 'ppc-btm',
    bookName: 'Pathfinder Player Companion: Bestiary of the Taboos',
    publisher: 'Paizo',
  },
  'pf1e-ppc-cc': {
    bookId: 'ppc-cc',
    bookName: 'Pathfinder Player Companion: Coin & Cauldron',
    publisher: 'Paizo',
  },
  'pf1e-ppc-cob': {
    bookId: 'ppc-cob',
    bookName: 'Pathfinder Player Companion: Cunning of the Cold',
    publisher: 'Paizo',
  },
  'pf1e-ppc-coc': {
    bookId: 'ppc-coc',
    bookName: "Pathfinder Player Companion: Chieftain's Companion",
    publisher: 'Paizo',
  },
  'pf1e-ppc-col': {
    bookId: 'ppc-col',
    bookName: 'Pathfinder Player Companion: Champions of Lawfulness',
    publisher: 'Paizo',
  },
  'pf1e-ppc-cop': {
    bookId: 'ppc-cop',
    bookName: 'Pathfinder Player Companion: Chroniclers of the Overreach',
    publisher: 'Paizo',
  },
  'pf1e-ppc-da': {
    bookId: 'ppc-da',
    bookName: 'Pathfinder Player Companion: Distant Shores Anthropology',
    publisher: 'Paizo',
  },
  'pf1e-ppc-dd': {
    bookId: 'ppc-dd',
    bookName: "Pathfinder Player Companion: Dragonslayer's Dossier",
    publisher: 'Paizo',
  },
  'pf1e-ppc-dh': {
    bookId: 'ppc-dh',
    bookName: 'Pathfinder Player Companion: Dungeon Denizens',
    publisher: 'Paizo',
  },
  'pf1e-ppc-dr': {
    bookId: 'ppc-dr',
    bookName: 'Pathfinder Player Companion: Dragonkind Reckoning',
    publisher: 'Paizo',
  },
  'pf1e-ppc-dtt': {
    bookId: 'ppc-dtt',
    bookName: 'Pathfinder Player Companion: Debts to the Tides',
    publisher: 'Paizo',
  },
  'pf1e-ppc-emh': {
    bookId: 'ppc-emh',
    bookName: "Pathfinder Player Companion: Elemental Master's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-fp': {
    bookId: 'ppc-fp',
    bookName: 'Pathfinder Player Companion: Familiar Folio',
    publisher: 'Paizo',
  },
  'pf1e-ppc-healh': {
    bookId: 'ppc-healh',
    bookName: "Pathfinder Player Companion: Healer's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-hff': {
    bookId: 'ppc-hff',
    bookName: "Pathfinder Player Companion: Halfling's Fiery Fortune",
    publisher: 'Paizo',
  },
  'pf1e-ppc-hh': {
    bookId: 'ppc-hh',
    bookName: 'Pathfinder Player Companion: Harrow Handbook',
    publisher: 'Paizo',
  },
  'pf1e-ppc-hog': {
    bookId: 'ppc-hog',
    bookName: 'Pathfinder Player Companion: Heroes of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-ppc-hothc': {
    bookId: 'ppc-hothc',
    bookName: 'Pathfinder Player Companion: Heroes of the High Court',
    publisher: 'Paizo',
  },
  'pf1e-ppc-hots': {
    bookId: 'ppc-hots',
    bookName: 'Pathfinder Player Companion: Heroes of the Streets',
    publisher: 'Paizo',
  },
  'pf1e-ppc-hotw': {
    bookId: 'ppc-hotw',
    bookName: 'Pathfinder Player Companion: Heroes of the Wild',
    publisher: 'Paizo',
  },
  'pf1e-ppc-hr': {
    bookId: 'ppc-hr',
    bookName: 'Pathfinder Player Companion: Half-Orc Reckoning',
    publisher: 'Paizo',
  },
  'pf1e-ppc-isi': {
    bookId: 'ppc-isi',
    bookName: 'Pathfinder Player Companion: Inner Sea Intrigue',
    publisher: 'Paizo',
  },
  'pf1e-ppc-lfw': {
    bookId: 'ppc-lfw',
    bookName: 'Pathfinder Player Companion: Legacy First World',
    publisher: 'Paizo',
  },
  'pf1e-ppc-lod': {
    bookId: 'ppc-lod',
    bookName: 'Pathfinder Player Companion: Legacy of Dragons',
    publisher: 'Paizo',
  },
  'pf1e-ppc-lotfw': {
    bookId: 'ppc-lotfw',
    bookName: 'Pathfinder Player Companion: Legacy of the First World',
    publisher: 'Paizo',
  },
  'pf1e-ppc-mah': {
    bookId: 'ppc-mah',
    bookName: "Pathfinder Player Companion: Martial Artist's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-mhh': {
    bookId: 'ppc-mhh',
    bookName: "Pathfinder Player Companion: Monster Hunter's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-mm': {
    bookId: 'ppc-mm',
    bookName: "Pathfinder Player Companion: Mummy's Mask",
    publisher: 'Paizo',
  },
  'pf1e-ppc-msh': {
    bookId: 'ppc-msh',
    bookName: "Pathfinder Player Companion: Medic's Manual & Surgeon's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-mtt': {
    bookId: 'ppc-mtt',
    bookName: "Pathfinder Player Companion: Midwife's Tract of Tales",
    publisher: 'Paizo',
  },
  'pf1e-ppc-phh': {
    bookId: 'ppc-phh',
    bookName: "Pathfinder Player Companion: Psychic's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-pos': {
    bookId: 'ppc-pos',
    bookName: 'Pathfinder Player Companion: People of the Stars',
    publisher: 'Paizo',
  },
  'pf1e-ppc-potr': {
    bookId: 'ppc-potr',
    bookName: 'Pathfinder Player Companion: People of the River',
    publisher: 'Paizo',
  },
  'pf1e-ppc-pp': {
    bookId: 'ppc-pp',
    bookName: "Pathfinder Player Companion: Plane Hopper's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-pw': {
    bookId: 'ppc-pw',
    bookName: "Pathfinder Player Companion: Pirate's Wrath",
    publisher: 'Paizo',
  },
  'pf1e-ppc-rtt': {
    bookId: 'ppc-rtt',
    bookName: 'Pathfinder Player Companion: Rogue Talents & Tricks',
    publisher: 'Paizo',
  },
  'pf1e-ppc-ssh': {
    bookId: 'ppc-ssh',
    bookName: "Pathfinder Player Companion: Swordmaster's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-thh': {
    bookId: 'ppc-thh',
    bookName: "Pathfinder Player Companion: Tiny Trickster's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-ush': {
    bookId: 'ppc-ush',
    bookName: "Pathfinder Player Companion: Undead Slayer's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-uw': {
    bookId: 'ppc-uw',
    bookName: 'Pathfinder Player Companion: Ultimate Wilderness',
    publisher: 'Paizo',
  },
  'pf1e-ppc-wo': {
    bookId: 'ppc-wo',
    bookName: 'Pathfinder Player Companion: Wilderness Origins',
    publisher: 'Paizo',
  },

  // Adventure Path modules (pf1e-ap###)
  // Pattern: pf1e-ap### → Pathfinder Adventure Path #[number]
  // These are dynamically generated below but included for reference

  // Pathfinder Roleplaying Game supplements
  'pf1e-prg-vc': {
    bookId: 'prg-vc',
    bookName: 'Pathfinder Roleplaying Game: Villain Codex',
    publisher: 'Paizo',
  },

  // Special/Other codes
  'pf1e-pzo1135': {
    bookId: 'pzo1135',
    bookName: 'Pathfinder Roleplaying Game (Paizo Product Code)',
    publisher: 'Paizo',
  },
  'pf1e-pzo9437': {
    bookId: 'pzo9437',
    bookName: 'Pathfinder Supplement (Paizo Product Code)',
    publisher: 'Paizo',
  },
  'pf1e-pzo9470': {
    bookId: 'pzo9470',
    bookName: 'Pathfinder Supplement (Paizo Product Code)',
    publisher: 'Paizo',
  },

  // Misc/Unknown/Third-party
  'pf1e-misc': {
    bookId: 'misc',
    bookName: 'Miscellaneous Sources',
    publisher: 'Various',
  },
  'pf1e-unknown': {
    bookId: 'unknown',
    bookName: 'Unknown Source',
    publisher: 'Unknown',
  },

  // Homebrew/Custom (preserve as-is)
  homebrew: {
    bookId: 'homebrew',
    bookName: 'Homebrew Content',
    publisher: 'Player-Created',
  },

  // External sources
  'd20pfsrd.com': {
    bookId: 'd20pfsrd',
    bookName: 'd20PFSRD (d20pfsrd.com)',
    publisher: 'Community Database',
  },
  '3.5e': {
    bookId: '3.5e',
    bookName: 'D&D 3.5 Edition (Imported)',
    publisher: 'Wizards of the Coast',
  },
  'pf1e-pp': {
    bookId: 'pp',
    bookName: 'Pathfinder Player Companion',
    publisher: 'Paizo',
  },
  'pf1e-pa': {
    bookId: 'pa',
    bookName: 'Pathfinder Adventure',
    publisher: 'Paizo',
  },
  'pf1e-mtt': {
    bookId: 'mtt',
    bookName: 'Magic Trait Tome',
    publisher: 'Paizo',
  },
};

/**
 * Lookup table: full book names (with various prefixes) → short code
 * This allows us to normalize "Core Rulebook" or "Pathfinder Core Rulebook" back to a canonical source.
 */
const FULL_NAME_MAP: Record<string, string> = {
  'core rulebook': 'pf1e-core',
  'advanced players guide': 'pf1e-apg',
  "advanced player's guide": 'pf1e-apg',
  'ultimate magic': 'pf1e-um',
  'ultimate combat': 'pf1e-uc',
  'advanced race guide': 'pf1e-arg',
  'advanced class guide': 'pf1e-acg',
  'pathfinder unchained': 'pf1e-unchained',
  'pathfinder core rulebook': 'pf1e-core',
  'ultimate intrigue': 'pf1e-ui',
  'ultimate wilderness': 'pf1e-uw',
  'occult adventures': 'pf1e-oa',
  'occult origins': 'pf1e-oo',
  'horror adventures': 'pf1e-ha',
  'orcs of golarion': 'pf1e-or',
  'inner sea gods': 'pf1e-isg',
  'inner sea magic': 'pf1e-ismc',
};

/**
 * Generate Adventure Path mappings dynamically
 * Handles patterns like: pf1e-ap85, pf1e-ap118, pf1e-ap-123
 */
function generateAdventurePathMappings(): Record<string, GameDataSource> {
  const mappings: Record<string, GameDataSource> = {};

  // Pattern: pf1e-ap### (and variants pf1e-ap-###)
  const apNumbers = [85, 91, 115, 118, 119, 121, 130, 144, 123];

  apNumbers.forEach((num) => {
    mappings[`pf1e-ap${num}`] = {
      bookId: `ap${num}`,
      bookName: `Pathfinder Adventure Path #${num}`,
      publisher: 'Paizo',
    };
    mappings[`pf1e-ap-${num}`] = {
      bookId: `ap${num}`,
      bookName: `Pathfinder Adventure Path #${num}`,
      publisher: 'Paizo',
    };
  });

  return mappings;
}

// Merge adventure path mappings into the main map
const COMPLETE_MAP = {
  ...SHORT_CODE_MAP,
  ...generateAdventurePathMappings(),
};

/**
 * Normalize a source field from any format to GameDataSource
 *
 * Handles:
 *  - Short codes: 'pf1e-apg' → { bookId: 'apg', bookName: 'Advanced Player\'s Guide', publisher: 'Paizo' }
 *  - Full names: 'Core Rulebook' or 'Pathfinder Core Rulebook' → same as above
 *  - Unknown sources: logs warning, returns sensible default
 *  - TemplateSourceInfo objects: extracts source string and processes
 *
 * @param input - Either a string ('pf1e-apg', 'Core Rulebook'), TemplateSourceInfo object, or undefined
 * @param page - Optional page number to attach
 * @returns Canonical GameDataSource
 */
export function normalizeSource(
  input: string | TemplateSourceInfo | undefined,
  page?: number,
): GameDataSource {
  if (!input) {
    return {
      bookId: 'unknown',
      bookName: 'Unknown Source',
      publisher: 'Unknown',
      ...(page !== undefined && { page }),
    };
  }

  let sourceStr: string | undefined;
  let pageNum = page;

  // Extract string and page from TemplateSourceInfo if needed
  if (typeof input === 'object') {
    sourceStr = input.source;
    // Direct page param takes precedence over TemplateSourceInfo.page
    pageNum = page ?? input.page;
  } else {
    sourceStr = input;
  }

  if (!sourceStr) {
    return {
      bookId: 'unknown',
      bookName: 'Unknown Source',
      publisher: 'Unknown',
      ...(pageNum !== undefined && { page: pageNum }),
    };
  }

  // Trim whitespace
  sourceStr = sourceStr.trim();

  // Check direct match first (fastest path)
  if (COMPLETE_MAP[sourceStr]) {
    const result = { ...COMPLETE_MAP[sourceStr] };
    if (pageNum) result.page = pageNum;
    return result;
  }

  // Strip common prefixes and retry
  let cleaned = sourceStr;
  const prefixes = [
    'Pathfinder Roleplaying Game: ',
    'Pathfinder Roleplaying Game ',
    'Pathfinder RPG: ',
    'Pathfinder RPG ',
    'Pathfinder Player Companion: ',
    'Pathfinder Player Companion ',
    'Pathfinder ',
    'PFRPG ',
    'PRPG ',
  ];

  for (const prefix of prefixes) {
    if (cleaned.toLowerCase().startsWith(prefix.toLowerCase())) {
      cleaned = cleaned.substring(prefix.length).trim();
      break;
    }
  }

  // Try full name lookup (case-insensitive)
  const normalizedName = cleaned.toLowerCase();
  const fullNameMatch = FULL_NAME_MAP[normalizedName];
  if (fullNameMatch && COMPLETE_MAP[fullNameMatch]) {
    const result = { ...COMPLETE_MAP[fullNameMatch] };
    if (pageNum) result.page = pageNum;
    return result;
  }

  // Check if the cleaned version matches any direct code
  if (COMPLETE_MAP[cleaned]) {
    const result = { ...COMPLETE_MAP[cleaned] };
    if (pageNum) result.page = pageNum;
    return result;
  }

  // Special case: Adventure Path with just number
  const apMatch = cleaned.match(/^Adventure Path #?(\d+)$/i);
  if (apMatch) {
    const num = apMatch[1];
    const result = {
      bookId: `ap${num}`,
      bookName: `Pathfinder Adventure Path #${num}`,
      publisher: 'Paizo',
      ...(pageNum !== undefined && { page: pageNum }),
    };
    console.warn(`[normalizeSource] Inferred Adventure Path from: "${sourceStr}" → ap${num}`);
    return result;
  }

  // Couldn't match — log warning and return fallback
  console.warn(
    `[normalizeSource] Unknown source: "${sourceStr}" (tried cleaned: "${cleaned}"). Returning unknown fallback.`,
  );

  return {
    bookId: 'unknown',
    bookName: cleaned,
    publisher: 'Unknown',
    ...(pageNum !== undefined && { page: pageNum }),
  };
}

/**
 * Batch normalize a list of sources
 * Useful for seeding operations where many sources need normalization
 *
 * @param sources - Array of source strings/objects
 * @returns Array of normalized GameDataSource records
 */
export function normalizeSources(
  sources: (string | TemplateSourceInfo | undefined)[],
): GameDataSource[] {
  return sources.map((src) => normalizeSource(src));
}
