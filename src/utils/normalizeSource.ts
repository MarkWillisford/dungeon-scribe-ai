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
  'pf1e-ddr': { bookId: 'ddr', bookName: 'Dungeon Denizens Revisited', publisher: 'Paizo' },
  'pf1e-andoran': { bookId: 'andoran', bookName: 'Andoran, Spirit of Liberty', publisher: 'Paizo' },
  'pf1e-motff': { bookId: 'motff', bookName: 'Master of the Fallen Fortress', publisher: 'Paizo' },
  'pf1e-pfs-scenario': {
    bookId: 'pfs-scenario',
    bookName: 'Pathfinder Society Scenario',
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
  'pf1e-ppc-antih': {
    bookId: 'ppc-antih',
    bookName: "Pathfinder Player Companion: Antihero's Handbook",
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

  // Bestiary series
  'pf1e-bestiary2': { bookId: 'bestiary2', bookName: 'Bestiary 2', publisher: 'Paizo' },
  'pf1e-bestiary3': { bookId: 'bestiary3', bookName: 'Bestiary 3', publisher: 'Paizo' },
  'pf1e-bestiary4': { bookId: 'bestiary4', bookName: 'Bestiary 4', publisher: 'Paizo' },
  'pf1e-bestiary5': { bookId: 'bestiary5', bookName: 'Bestiary 5', publisher: 'Paizo' },
  'pf1e-bestiary6': { bookId: 'bestiary6', bookName: 'Bestiary 6', publisher: 'Paizo' },

  // Campaign Setting / hardcover expansions
  'pf1e-isb': { bookId: 'isb', bookName: 'Inner Sea Bestiary', publisher: 'Paizo' },
  'pf1e-ios': { bookId: 'ios', bookName: 'Isles of the Shackles', publisher: 'Paizo' },
  'pf1e-tg': { bookId: 'tg', bookName: 'Technology Guide', publisher: 'Paizo' },
  'pf1e-ma': { bookId: 'ma', bookName: 'Mythic Adventures', publisher: 'Paizo' },
  'pf1e-isc': { bookId: 'isc', bookName: 'Inner Sea Combat', publisher: 'Paizo' },
  'pf1e-isr': { bookId: 'isr', bookName: 'Inner Sea Races', publisher: 'Paizo' },
  'pf1e-ist': { bookId: 'ist', bookName: 'Inner Sea Temples', publisher: 'Paizo' },
  'pf1e-ismonsters': {
    bookId: 'ismonsters',
    bookName: 'Inner Sea Monster Codex',
    publisher: 'Paizo',
  },
  'pf1e-isnpc': { bookId: 'isnpc', bookName: 'Inner Sea NPC Codex', publisher: 'Paizo' },
  'pf1e-isfaiths': { bookId: 'isfaiths', bookName: 'Inner Sea Faiths', publisher: 'Paizo' },
  'pf1e-ob': { bookId: 'ob', bookName: 'Occult Bestiary', publisher: 'Paizo' },
  'pf1e-or2': { bookId: 'or2', bookName: 'Occult Realms', publisher: 'Paizo' },
  'pf1e-deg': { bookId: 'deg', bookName: 'Dragon Empires Gazetteer', publisher: 'Paizo' },
  'pf1e-aq': { bookId: 'aq', bookName: 'Aquatic Adventures', publisher: 'Paizo' },
  'pf1e-ma2': { bookId: 'ma2', bookName: 'Mythic Adventures', publisher: 'Paizo' },
  'pf1e-concordance': {
    bookId: 'concordance',
    bookName: 'Concordance of Rivals',
    publisher: 'Paizo',
  },
  'pf1e-taldor': { bookId: 'taldor', bookName: 'Taldor, Echoes of Glory', publisher: 'Paizo' },
  'pf1e-cheliax': { bookId: 'cheliax', bookName: 'Cheliax, Empire of Devils', publisher: 'Paizo' },
  'pf1e-sargava': { bookId: 'sargava', bookName: 'Sargava, the Lost Colony', publisher: 'Paizo' },
  'pf1e-osirion': {
    bookId: 'osirion',
    bookName: 'Osirion, Legacy of Pharaohs',
    publisher: 'Paizo',
  },
  'pf1e-construct': { bookId: 'construct', bookName: 'Construct Handbook', publisher: 'Paizo' },
  'pf1e-villain-codex': { bookId: 'villain-codex', bookName: 'Villain Codex', publisher: 'Paizo' },
  'pf1e-darklands': { bookId: 'darklands', bookName: 'Darklands Revisited', publisher: 'Paizo' },
  'pf1e-uf': { bookId: 'uf', bookName: 'Ultimate Feats', publisher: 'Paizo' },

  // Player Companion books (additional)
  'pf1e-ppc-pots': {
    bookId: 'ppc-pots',
    bookName: 'Pathfinder Player Companion: People of the Sands',
    publisher: 'Paizo',
  },
  'pf1e-ppc-potn': {
    bookId: 'ppc-potn',
    bookName: 'Pathfinder Player Companion: People of the North',
    publisher: 'Paizo',
  },
  'pf1e-ppc-potw': {
    bookId: 'ppc-potw',
    bookName: 'Pathfinder Player Companion: People of the Wastes',
    publisher: 'Paizo',
  },
  'pf1e-ppc-aco2': {
    bookId: 'ppc-aco2',
    bookName: 'Pathfinder Player Companion: Advanced Class Origins',
    publisher: 'Paizo',
  },
  'pf1e-ppc-aoe2': {
    bookId: 'ppc-aoe2',
    bookName: 'Pathfinder Player Companion: Agents of Evil',
    publisher: 'Paizo',
  },
  'pf1e-ppc-alm': {
    bookId: 'ppc-alm',
    bookName: 'Pathfinder Player Companion: Alchemy Manual',
    publisher: 'Paizo',
  },
  'pf1e-ppc-arx': {
    bookId: 'ppc-arx',
    bookName: 'Pathfinder Player Companion: Animal Archive',
    publisher: 'Paizo',
  },
  'pf1e-ppc-amh': {
    bookId: 'ppc-amh',
    bookName: "Pathfinder Player Companion: Armor Master's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-bog': {
    bookId: 'ppc-bog',
    bookName: 'Pathfinder Player Companion: Bastards of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-ppc-bm': {
    bookId: 'ppc-bm',
    bookName: 'Pathfinder Player Companion: Black Markets',
    publisher: 'Paizo',
  },
  'pf1e-ppc-bsha': {
    bookId: 'ppc-bsha',
    bookName: 'Pathfinder Player Companion: Blood of Shadows',
    publisher: 'Paizo',
  },
  'pf1e-ppc-bota': {
    bookId: 'ppc-bota',
    bookName: 'Pathfinder Player Companion: Blood of the Ancients',
    publisher: 'Paizo',
  },
  'pf1e-ppc-cob2': {
    bookId: 'ppc-cob2',
    bookName: 'Pathfinder Player Companion: Champions of Balance',
    publisher: 'Paizo',
  },
  'pf1e-ppc-dtt3': {
    bookId: 'ppc-dtt3',
    bookName: 'Pathfinder Player Companion: Dirty Tactics Toolbox',
    publisher: 'Paizo',
  },
  'pf1e-ppc-da3': {
    bookId: 'ppc-da3',
    bookName: 'Pathfinder Player Companion: Divine Anthology',
    publisher: 'Paizo',
  },
  'pf1e-ppc-fap': {
    bookId: 'ppc-fap',
    bookName: 'Pathfinder Player Companion: Faiths & Philosophies',
    publisher: 'Paizo',
  },
  'pf1e-ppc-fob': {
    bookId: 'ppc-fob',
    bookName: 'Pathfinder Player Companion: Faiths of Balance',
    publisher: 'Paizo',
  },
  'pf1e-ppc-foc': {
    bookId: 'ppc-foc',
    bookName: 'Pathfinder Player Companion: Faiths of Corruption',
    publisher: 'Paizo',
  },
  'pf1e-ppc-fog': {
    bookId: 'ppc-fog',
    bookName: 'Pathfinder Player Companion: Faiths of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-ppc-fop': {
    bookId: 'ppc-fop',
    bookName: 'Pathfinder Player Companion: Faiths of Purity',
    publisher: 'Paizo',
  },
  'pf1e-ppc-fov': {
    bookId: 'ppc-fov',
    bookName: 'Pathfinder Player Companion: Faiths of Valor',
    publisher: 'Paizo',
  },
  'pf1e-ppc-gnog': {
    bookId: 'ppc-gnog',
    bookName: 'Pathfinder Player Companion: Gnomes of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-ppc-hff2': {
    bookId: 'ppc-hff2',
    bookName: 'Pathfinder Player Companion: Heroes from the Fringe',
    publisher: 'Paizo',
  },
  'pf1e-ppc-hod': {
    bookId: 'ppc-hod',
    bookName: 'Pathfinder Player Companion: Heroes of the Darklands',
    publisher: 'Paizo',
  },
  'pf1e-ppc-hog3': {
    bookId: 'ppc-hog3',
    bookName: 'Pathfinder Player Companion: Humans of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-ppc-isp': {
    bookId: 'ppc-isp',
    bookName: 'Pathfinder Player Companion: Inner Sea Primer',
    publisher: 'Paizo',
  },
  'pf1e-ppc-kotis': {
    bookId: 'ppc-kotis',
    bookName: 'Pathfinder Player Companion: Knights of the Inner Sea',
    publisher: 'Paizo',
  },
  'pf1e-ppc-mtt5': {
    bookId: 'ppc-mtt5',
    bookName: 'Pathfinder Player Companion: Magic Tactics Toolbox',
    publisher: 'Paizo',
  },
  'pf1e-ppc-mp': {
    bookId: 'ppc-mp',
    bookName: 'Pathfinder Player Companion: Magical Marketplace',
    publisher: 'Paizo',
  },
  'pf1e-ppc-mtt6': {
    bookId: 'ppc-mtt6',
    bookName: 'Pathfinder Player Companion: Melee Tactics Toolbox',
    publisher: 'Paizo',
  },
  'pf1e-ppc-msh2': {
    bookId: 'ppc-msh2',
    bookName: "Pathfinder Player Companion: Monster Summoner's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-psp': {
    bookId: 'ppc-psp',
    bookName: 'Pathfinder Player Companion: Pathfinder Society Primer',
    publisher: 'Paizo',
  },
  'pf1e-ppc-pp3': {
    bookId: 'ppc-pp3',
    bookName: 'Pathfinder Player Companion: Potions & Poisons',
    publisher: 'Paizo',
  },
  'pf1e-ppc-qge': {
    bookId: 'ppc-qge',
    bookName: 'Pathfinder Player Companion: Qadira, Gateway to the East',
    publisher: 'Paizo',
  },
  'pf1e-ppc-qc': {
    bookId: 'ppc-qc',
    bookName: 'Pathfinder Player Companion: Quests & Campaigns',
    publisher: 'Paizo',
  },
  'pf1e-ppc-rtt4': {
    bookId: 'ppc-rtt4',
    bookName: 'Pathfinder Player Companion: Ranged Tactics Toolbox',
    publisher: 'Paizo',
  },
  'pf1e-ppc-ush2': {
    bookId: 'ppc-ush2',
    bookName: "Pathfinder Player Companion: Undead Slayer's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-chr': {
    bookId: 'ppc-chr',
    bookName: 'Pathfinder Player Companion: Chronicle of Legends',
    publisher: 'Paizo',
  },
  'pf1e-ppc-vc': {
    bookId: 'ppc-vc',
    bookName: 'Pathfinder Player Companion: Villain Codex',
    publisher: 'Paizo',
  },

  // Generic / series-level codes
  'pf1e-prg': { bookId: 'prg', bookName: 'Pathfinder Roleplaying Game', publisher: 'Paizo' },
  'pf1e-adventurers-guide': {
    bookId: 'adventurers-guide',
    bookName: "Adventurer's Guide",
    publisher: 'Paizo',
  },

  // Campaign Setting books (additional)
  'pf1e-chr-righteous': {
    bookId: 'chr-righteous',
    bookName: 'Chronicle of the Righteous',
    publisher: 'Paizo',
  },
  'pf1e-fg': { bookId: 'fg', bookName: 'Faction Guide', publisher: 'Paizo' },
  'pf1e-fw': { bookId: 'fw', bookName: 'The First World, Realm of the Fey', publisher: 'Paizo' },
  'pf1e-mwangi': { bookId: 'mwangi', bookName: 'The Mwangi Expanse', publisher: 'Paizo' },
  'pf1e-rg': { bookId: 'rg', bookName: 'Rival Guide', publisher: 'Paizo' },
  'pf1e-lk': { bookId: 'lk', bookName: 'Lost Kingdoms', publisher: 'Paizo' },
  'pf1e-dog-cs': { bookId: 'dog-cs', bookName: 'Dungeons of Golarion', publisher: 'Paizo' },
  'pf1e-qje': { bookId: 'qje', bookName: 'Qadira, Jewel of the East', publisher: 'Paizo' },
  'pf1e-ctr': { bookId: 'ctr', bookName: 'Classic Treasures Revisited', publisher: 'Paizo' },
  'pf1e-hap': {
    bookId: 'hap',
    bookName: 'Horsemen of the Apocalypse: Book of the Damned Vol. 3',
    publisher: 'Paizo',
  },
  'pf1e-botd1': {
    bookId: 'botd1',
    bookName: 'Book of the Damned Vol. 1: Princes of Darkness',
    publisher: 'Paizo',
  },

  // Pathfinder Chronicles series
  'pf1e-pcc': {
    bookId: 'pcc',
    bookName: 'Pathfinder Chronicles Campaign Setting',
    publisher: 'Paizo',
  },
  'pf1e-seekers': { bookId: 'seekers', bookName: 'Seekers of Secrets', publisher: 'Paizo' },
  'pf1e-pcs-pop': { bookId: 'pcs-pop', bookName: 'Paths of Prestige', publisher: 'Paizo' },
  'pf1e-poth': { bookId: 'poth', bookName: 'Path of the Hellknight', publisher: 'Paizo' },
  'pf1e-gm': { bookId: 'gm', bookName: 'Gods and Magic', publisher: 'Paizo' },
  'pf1e-cg': { bookId: 'cg', bookName: 'Cities of Golarion', publisher: 'Paizo' },
  'pf1e-dk': { bookId: 'dk', bookName: 'Dark Markets: A Guide to Katapesh', publisher: 'Paizo' },
  'pf1e-pod': {
    bookId: 'pod',
    bookName: 'Princes of Darkness, Book of the Damned Vol. I',
    publisher: 'Paizo',
  },

  // Player Companion books (additional)
  'pf1e-ppc-dhh': {
    bookId: 'ppc-dhh',
    bookName: "Pathfinder Player Companion: Demon Hunter's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-dsh': {
    bookId: 'ppc-dsh',
    bookName: "Pathfinder Player Companion: Dragonslayer's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-dugh': {
    bookId: 'ppc-dugh',
    bookName: "Pathfinder Player Companion: Dungeoneer's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-sph': {
    bookId: 'ppc-sph',
    bookName: "Pathfinder Player Companion: Spymaster's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-ghh': {
    bookId: 'ppc-ghh',
    bookName: "Pathfinder Player Companion: Giant Hunter's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-mrm': {
    bookId: 'ppc-mrm',
    bookName: "Pathfinder Player Companion: Merchant's Manifest",
    publisher: 'Paizo',
  },
  'pf1e-ppc-dd2': {
    bookId: 'ppc-dd2',
    bookName: "Pathfinder Player Companion: Disciple's Doctrine",
    publisher: 'Paizo',
  },

  // Missing PPC codes found in data
  'pf1e-ppc-por': {
    bookId: 'ppc-por',
    bookName: 'Pathfinder Player Companion: People of the River',
    publisher: 'Paizo',
  },
  'pf1e-ppc-dep': {
    bookId: 'ppc-dep',
    bookName: 'Pathfinder Player Companion: Dragon Empires Primer',
    publisher: 'Paizo',
  },
  'pf1e-ppc-oog': {
    bookId: 'ppc-oog',
    bookName: 'Pathfinder Player Companion: Orcs of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-ppc-hhh': {
    bookId: 'ppc-hhh',
    bookName: 'Pathfinder Player Companion: Haunted Heroes Handbook',
    publisher: 'Paizo',
  },
  'pf1e-ppc-bote': {
    bookId: 'ppc-bote',
    bookName: 'Pathfinder Player Companion: Blood of the Elements',
    publisher: 'Paizo',
  },
  'pf1e-ppc-boan': {
    bookId: 'ppc-boa',
    bookName: 'Pathfinder Player Companion: Blood of Angels',
    publisher: 'Paizo',
  },

  // Campaign Setting codes
  'pf1e-pcs-dr': {
    bookId: 'pcs-dr',
    bookName: 'Pathfinder Campaign Setting: Distant Realms',
    publisher: 'Paizo',
  },

  // Alternate full-name codes
  'pf1e-ultimate-wilderness': {
    bookId: 'uw',
    bookName: 'Ultimate Wilderness',
    publisher: 'Paizo',
  },
  'pf1e-ue': {
    bookId: 'ue',
    bookName: 'Ultimate Equipment',
    publisher: 'Paizo',
  },
  'pf1e-uc-campaign': {
    bookId: 'uc-campaign',
    bookName: 'Ultimate Campaign',
    publisher: 'Paizo',
  },
  'pf1e-gmg': {
    bookId: 'gmg',
    bookName: 'GameMastery Guide',
    publisher: 'Paizo',
  },
  'pf1e-iswg': {
    bookId: 'iswg',
    bookName: 'Inner Sea World Guide',
    publisher: 'Paizo',
  },
  'pf1e-pfs': {
    bookId: 'pfs',
    bookName: 'Pathfinder Society Field Guide',
    publisher: 'Paizo',
  },
  'pf1e-society': {
    bookId: 'pfs',
    bookName: 'Pathfinder Society',
    publisher: 'Paizo',
  },
  'pf1e-bestiary': {
    bookId: 'bestiary',
    bookName: 'Bestiary',
    publisher: 'Paizo',
  },
  'pf1e-monster-codex': {
    bookId: 'monster-codex',
    bookName: 'Monster Codex',
    publisher: 'Paizo',
  },
  'pf1e-planar-adventures': {
    bookId: 'planar-adventures',
    bookName: 'Planar Adventures',
    publisher: 'Paizo',
  },
  'pf1e-pcs': {
    bookId: 'pcs',
    bookName: 'Pathfinder Campaign Setting',
    publisher: 'Paizo',
  },
  'pf1e-dw': {
    bookId: 'dw',
    bookName: 'Distant Worlds',
    publisher: 'Paizo',
  },
  'pf1e-aa2': {
    bookId: 'aa2',
    bookName: "Adventurer's Armory 2",
    publisher: 'Paizo',
  },
  'pf1e-aa1': {
    bookId: 'aa1',
    bookName: "Adventurer's Armory",
    publisher: 'Paizo',
  },
  'pf1e-wmh': {
    bookId: 'wmh',
    bookName: "Weapon Master's Handbook",
    publisher: 'Paizo',
  },
  'pf1e-ppc-botn': {
    bookId: 'ppc-botn',
    bookName: 'Pathfinder Player Companion: Blood of the Night',
    publisher: 'Paizo',
  },
  'pf1e-ppc-dog': {
    bookId: 'ppc-dog',
    bookName: 'Pathfinder Player Companion: Dwarves of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-ppc-eog': {
    bookId: 'ppc-eog',
    bookName: 'Pathfinder Player Companion: Elves of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-ppc-gnolls': {
    bookId: 'ppc-gnolls',
    bookName: 'Pathfinder Player Companion: Gnolls of the Dark Lands',
    publisher: 'Paizo',
  },
  'pf1e-ppc-gog': {
    bookId: 'ppc-gog',
    bookName: 'Pathfinder Player Companion: Goblins of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-ppc-hog2': {
    bookId: 'ppc-hog2',
    bookName: 'Pathfinder Player Companion: Halflings of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-ppc-kog': {
    bookId: 'ppc-kog',
    bookName: 'Pathfinder Player Companion: Kobolds of Golarion',
    publisher: 'Paizo',
  },
  'pf1e-ppc-potr2': {
    bookId: 'ppc-potr2',
    bookName: 'Pathfinder Player Companion: Paths of the Righteous',
    publisher: 'Paizo',
  },
  'pf1e-ppc-pits': {
    bookId: 'ppc-pits',
    bookName: 'Pathfinder Player Companion: Pirates of the Inner Sea',
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

  // Dreamscarred Press — Path of War initiating system (3pp, hosted on d20pfsrd with permission)
  'dsp-pow': {
    bookId: 'pow',
    bookName: 'Path of War',
    publisher: 'Dreamscarred Press',
  },
  'dsp-powe': {
    bookId: 'powe',
    bookName: 'Path of War: Expanded',
    publisher: 'Dreamscarred Press',
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
  // Core rulebooks
  'core rulebook': 'pf1e-core',
  'pathfinder core rulebook': 'pf1e-core',
  "advanced player's guide": 'pf1e-apg',
  'advanced players guide': 'pf1e-apg',
  'ultimate magic': 'pf1e-um',
  'ultimate combat': 'pf1e-uc',
  'ultimate equipment': 'pf1e-ue',
  'ultimate campaign': 'pf1e-uc-campaign',
  'ultimate intrigue': 'pf1e-ui',
  'ultimate wilderness': 'pf1e-uw',
  'advanced race guide': 'pf1e-arg',
  'advanced class guide': 'pf1e-acg',
  'pathfinder unchained': 'pf1e-unchained',
  unchained: 'pf1e-unchained', // after "Pathfinder " prefix is stripped

  // Hardcover expansions
  'occult adventures': 'pf1e-oa',
  'occult origins': 'pf1e-oo',
  'horror adventures': 'pf1e-ha',
  'planar adventures': 'pf1e-planar-adventures',
  'inner sea gods': 'pf1e-isg',
  'inner sea magic': 'pf1e-ismc',
  'inner sea world guide': 'pf1e-iswg',
  'orcs of golarion': 'pf1e-or',
  'gamemastery guide': 'pf1e-gmg',
  'game mastery guide': 'pf1e-gmg',
  bestiary: 'pf1e-bestiary',
  'monster codex': 'pf1e-monster-codex',
  'distant worlds': 'pf1e-dw',
  'pathfinder campaign setting': 'pf1e-pcs',
  'society field guide': 'pf1e-pfs',
  'pathfinder society field guide': 'pf1e-pfs',

  // Equipment / gear books
  "adventurer's armory": 'pf1e-aa1',
  "adventurer's armory 2": 'pf1e-aa2',
  "weapon master's handbook": 'pf1e-wmh',

  // Player Companion full titles (after prefix strip these arrive without "Pathfinder Player Companion: ")
  'blood of angels': 'pf1e-ppc-boa',
  'blood of fiends': 'pf1e-ppc-bof',
  'blood of the coven': 'pf1e-ppc-botc',
  'blood of the night': 'pf1e-ppc-botn',
  'blood of the moon': 'pf1e-ppc-botm',
  'blood of the elements': 'pf1e-ppc-bote',
  'dwarves of golarion': 'pf1e-ppc-dog',
  'elves of golarion': 'pf1e-ppc-eog',
  'gnolls of the dark lands': 'pf1e-ppc-gnolls',
  'goblins of golarion': 'pf1e-ppc-gog',
  'halflings of golarion': 'pf1e-ppc-hog2',
  'kobolds of golarion': 'pf1e-ppc-kog',
  'people of the river': 'pf1e-ppc-potr',
  'people of the stars': 'pf1e-ppc-pos',
  'paths of the righteous': 'pf1e-ppc-potr2',
  'pirates of the inner sea': 'pf1e-ppc-pits',
  'dragon empires primer': 'pf1e-ppc-dep',
  'haunted heroes handbook': 'pf1e-ppc-hhh',
  'orcs of golarion (ppc)': 'pf1e-ppc-oog',
  'legacy of dragons': 'pf1e-lod',
  'heroes of the wild': 'pf1e-ppc-hotw',
  'heroes of the streets': 'pf1e-ppc-hots',
  'heroes of the street': 'pf1e-ppc-hots',
  "weapon master's handbook (ppc)": 'pf1e-wmh',

  // Bestiary series
  'bestiary 2': 'pf1e-bestiary2',
  'bestiary 3': 'pf1e-bestiary3',
  'bestiary 4': 'pf1e-bestiary4',
  'bestiary 5': 'pf1e-bestiary5',
  'bestiary 6': 'pf1e-bestiary6',

  // Campaign Setting books (matched after prefix strip)
  'inner sea bestiary': 'pf1e-isb',
  'isles of the shackles': 'pf1e-ios',
  'technology guide': 'pf1e-tg',
  'mythic adventures': 'pf1e-ma',
  'inner sea combat': 'pf1e-isc',
  'inner sea races': 'pf1e-isr',
  'inner sea temples': 'pf1e-ist',
  'inner sea monster codex': 'pf1e-ismonsters',
  'inner sea npc codex': 'pf1e-isnpc',
  'inner sea faiths': 'pf1e-isfaiths',
  'occult bestiary': 'pf1e-ob',
  'occult realms': 'pf1e-or2',
  'occult mysteries': 'pf1e-ob',
  'dragon empires gazetteer': 'pf1e-deg',
  'aquatic adventures': 'pf1e-aq',
  'villain codex': 'pf1e-villain-codex',
  'darklands revisited': 'pf1e-darklands',
  'construct handbook': 'pf1e-construct',
  'taldor, echoes of glory': 'pf1e-taldor',
  'cheliax, empire of devils': 'pf1e-cheliax',
  'sargava, the lost colony': 'pf1e-sargava',
  'osirion, land of pharaohs': 'pf1e-osirion',
  'osirion, land of the pharaohs': 'pf1e-osirion',
  'osirion, legacy of pharaohs': 'pf1e-osirion',
  'heroes of golarion': 'pf1e-hog',
  'dungeon denizens revisited': 'pf1e-ddr',
  'andoran, spirit of liberty': 'pf1e-andoran',
  'harrow handbook': 'pf1e-harrow',
  'the harrow handbook': 'pf1e-harrow',
  'master of the fallen fortress': 'pf1e-motff',
  'society scenario': 'pf1e-pfs-scenario',
  'martial arts handbook': 'pf1e-ppc-mah',
  "antihero's handbook": 'pf1e-ppc-antih',
  'concordance of rivals': 'pf1e-concordance',
  'book of the damned': 'pf1e-botm',

  // Player Companion books (after prefix strip)
  'people of the sands': 'pf1e-ppc-pots',
  'people of the north': 'pf1e-ppc-potn',
  'people of the wastes': 'pf1e-ppc-potw',
  'advanced class origins': 'pf1e-ppc-aco2',
  'agents of evil': 'pf1e-ppc-aoe2',
  'alchemy manual': 'pf1e-ppc-alm',
  'animal archive': 'pf1e-ppc-arx',
  "armor master's handbook": 'pf1e-ppc-amh',
  'armor master': 'pf1e-ppc-amh',
  'armor masters handbook': 'pf1e-ppc-amh',
  'bastards of golarion': 'pf1e-ppc-bog',
  'black markets': 'pf1e-ppc-bm',
  'blood of shadows': 'pf1e-ppc-bsha',
  'blood of the ancients': 'pf1e-ppc-bota',
  'champions of balance': 'pf1e-ppc-cob2',
  'dirty tactics toolbox': 'pf1e-ppc-dtt3',
  'divine anthology': 'pf1e-ppc-da3',
  'faiths & philosophies': 'pf1e-ppc-fap',
  'faiths and philosophies': 'pf1e-ppc-fap',
  'faiths of balance': 'pf1e-ppc-fob',
  'faiths of corruption': 'pf1e-ppc-foc',
  'faiths of golarion': 'pf1e-ppc-fog',
  'faiths of purity': 'pf1e-ppc-fop',
  'faiths of valor': 'pf1e-ppc-fov',
  'familiar folio': 'pf1e-ppc-fp',
  'gnomes of golarion': 'pf1e-ppc-gnog',
  'heroes from the fringe': 'pf1e-ppc-hff2',
  'heroes of the darklands': 'pf1e-ppc-hod',
  'humans of golarion': 'pf1e-ppc-hog3',
  'inner sea primer': 'pf1e-ppc-isp',
  'knights of the inner sea': 'pf1e-ppc-kotis',
  'magic tactics toolbox': 'pf1e-ppc-mtt5',
  'magical marketplace': 'pf1e-ppc-mp',
  'melee tactics toolbox': 'pf1e-ppc-mtt6',
  "monster summoner's handbook": 'pf1e-ppc-msh2',
  'monster summoner': 'pf1e-ppc-msh2',
  'pathfinder society primer': 'pf1e-ppc-psp',
  'potions & poisons': 'pf1e-ppc-pp3',
  'potions and poisons': 'pf1e-ppc-pp3',
  'qadira, gateway to the east': 'pf1e-ppc-qge',
  'quests & campaigns': 'pf1e-ppc-qc',
  'quests and campaigns': 'pf1e-ppc-qc',
  'ranged tactics toolbox': 'pf1e-ppc-rtt4',
  "undead slayer's handbook": 'pf1e-ppc-ush2',
  'undead slayer': 'pf1e-ppc-ush2',
  'chronicle of legends': 'pf1e-ppc-chr',
  'heroes of the high court': 'pf1e-ppc-hothc',

  // --- entries already in SHORT_CODE_MAP but missing from here ---
  'arcane anthology': 'pf1e-ppc-aa',
  'champions of purity': 'pf1e-champions-purity',
  'champions of corruption': 'pf1e-champions-corruption',
  'blood of the beast': 'pf1e-blood-of-the-beast',
  'inner sea intrigue': 'pf1e-isi',
  'distant realms': 'pf1e-pcs-dr',
  "elemental master's handbook": 'pf1e-emh',
  'elemental masters handbook': 'pf1e-emh',
  "plane-hopper's handbook": 'pf1e-plane-hoppers-handbook',
  'psychic anthology': 'pf1e-psychic-anthology',
  "healer's handbook": 'pf1e-ppc-healh',

  // --- Dreamscarred Press (Path of War) ---
  'path of war': 'dsp-pow',
  'path of war expanded': 'dsp-powe',
  'path of war: expanded': 'dsp-powe',
  'dreamscarred press': 'dsp-pow',
  "monster hunter's handbook": 'pf1e-mhh',
  'wilderness origins': 'pf1e-wo',
  'legacy of the first world': 'pf1e-legacy-first-world',
  'blood of the sea': 'pf1e-ppc-bos',
  'cohorts & companions': 'pf1e-cohorts',
  'cohorts and companions': 'pf1e-cohorts',
  'planes of power': 'pf1e-pots',
  'the inner sea world guide': 'pf1e-iswg',
  'society primer': 'pf1e-ppc-psp',
  'campaign setting': 'pf1e-pcs',
  'player companion': 'pf1e-pp',
  'roleplaying game': 'pf1e-prg',
  core: 'pf1e-core',
  'blood of orcs': 'pf1e-or', // maps to Orcs of Golarion — same source content

  // --- new books ---
  "adventurer's guide": 'pf1e-adventurers-guide',
  'chronicle of the righteous': 'pf1e-chr-righteous',
  'faction guide': 'pf1e-fg',
  'the first world, realm of the fey': 'pf1e-fw',
  'first world, realm of the fey': 'pf1e-fw',
  'the mwangi expanse': 'pf1e-mwangi',
  'mwangi expanse': 'pf1e-mwangi',
  'rival guide': 'pf1e-rg',
  'lost kingdoms': 'pf1e-lk',
  'dungeons of golarion': 'pf1e-dog-cs',
  'qadira, jewel of the east': 'pf1e-qje',
  'classic treasures revisited': 'pf1e-ctr',
  'horsemen of the apocalypse: book of the damned vol. 3': 'pf1e-hap',
  'horsemen of the apocalypse: book of the damned, vol. 3': 'pf1e-hap',
  'book of the damned - volume 3: horsemen of the apocalypse': 'pf1e-hap',
  'book of the damned — volume 3: horsemen of the apocalypse': 'pf1e-hap',
  'book of the damned - volume 1: princes of darkness': 'pf1e-botd1',
  'princes of darkness, book of the damned vol. i': 'pf1e-pod',
  'chronicles campaign setting': 'pf1e-pcc',
  'seekers of secrets': 'pf1e-seekers',
  'paths of prestige': 'pf1e-pcs-pop',
  'path of the hellknight': 'pf1e-poth',
  'gods and magic': 'pf1e-gm',
  'cities of golarion': 'pf1e-cg',
  'dark markets, a guide to katapesh': 'pf1e-dk',
  'dark markets: a guide to katapesh': 'pf1e-dk',
  "demon hunter's handbook": 'pf1e-ppc-dhh',
  "dragonslayer's handbook": 'pf1e-ppc-dsh',
  "dungeoneer's handbook": 'pf1e-ppc-dugh',
  "spymaster's handbook": 'pf1e-ppc-sph',
  "giant hunter's handbook": 'pf1e-ppc-ghh',
  "merchant's manifest": 'pf1e-ppc-mrm',
  "disciple's doctrine": 'pf1e-ppc-dd2',

  // Adventure Path named collections (not numbered)
  'curse of the crimson throne': 'pf1e-ap', // AP series, no specific number
  'skull & shackles adventure path': 'pf1e-ap',
  'skull & shackles ap': 'pf1e-ap',
  'wrath of the righteous adventure path': 'pf1e-ap',
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

  // Handle dual-source strings like "Inner Sea World Guide / Paths of Prestige"
  // Take the first part that resolves to a known source.
  if (sourceStr.includes(' / ')) {
    const parts = sourceStr.split(' / ');
    for (const part of parts) {
      const result = normalizeSource(part.trim(), pageNum);
      if (result.bookId !== 'unknown') return result;
    }
  }

  // Check direct match first (fastest path)
  if (COMPLETE_MAP[sourceStr]) {
    const result = { ...COMPLETE_MAP[sourceStr] };
    if (pageNum !== undefined) result.page = pageNum;
    return result;
  }

  // Dynamic Adventure Path code match: handles pf1e-ap29, pf1e-ap-123, etc.
  // More reliable than the hardcoded list in generateAdventurePathMappings().
  const apCodeMatch = sourceStr.match(/^pf1e-ap-?(\d+)$/);
  if (apCodeMatch) {
    const num = apCodeMatch[1];
    return {
      bookId: `ap${num}`,
      bookName: `Pathfinder Adventure Path #${num}`,
      publisher: 'Paizo',
      ...(pageNum !== undefined && { page: pageNum }),
    };
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
    'Pathfinder Campaign Setting: ',
    'Pathfinder Campaign Setting ',
    'Pathfinder Chronicles: ',
    'Pathfinder Companion: ',
    'Pathfinder Module: ',
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

  // Strip trailing year annotation, e.g. "Ultimate Magic (2011)" → "Ultimate Magic"
  cleaned = cleaned.replace(/\s*\(\d{4}\)\s*$/, '').trim();

  // Try full name lookup (case-insensitive)
  const normalizedName = cleaned.toLowerCase();
  const fullNameMatch = FULL_NAME_MAP[normalizedName];
  if (fullNameMatch && COMPLETE_MAP[fullNameMatch]) {
    const result = { ...COMPLETE_MAP[fullNameMatch] };
    if (pageNum !== undefined) result.page = pageNum;
    return result;
  }

  // Check if the cleaned version matches any direct code
  if (COMPLETE_MAP[cleaned]) {
    const result = { ...COMPLETE_MAP[cleaned] };
    if (pageNum !== undefined) result.page = pageNum;
    return result;
  }

  // Adventure Path patterns — all resolve to "Pathfinder Adventure Path #N"
  // Handles: "Adventure Path #N", "Adventure Path #N: Subtitle", "AP #N", "AP #N: Subtitle",
  //          "#N: Subtitle" (from "PFRPG Pathfinder #N"), "N: Subtitle" (bare number)
  const apPatterns = [
    /^Adventure Path #?(\d+)(?:[:\s].*)?$/i,
    /^AP #?(\d+)(?:[:\s].*)?$/i,
    /^#(\d+)(?:[:\s].*)?$/,
    /^(\d{1,3}): .+/, // "14: Children of the Void" etc.
  ];
  for (const pat of apPatterns) {
    const m = cleaned.match(pat);
    if (m) {
      const num = m[1];
      return {
        bookId: `ap${num}`,
        bookName: `Pathfinder Adventure Path #${num}`,
        publisher: 'Paizo',
        ...(pageNum !== undefined && { page: pageNum }),
      };
    }
  }

  // Adventure Path Player's Guide free PDFs — e.g. "Rise of the Runelords Player's Guide"
  const pgMatch = cleaned.match(/^(.+?)\s+Player['\u2019]s Guide$/i);
  if (pgMatch) {
    const apName = pgMatch[1];
    const apSlug = apName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return {
      bookId: `pg-${apSlug}`,
      bookName: `${apName} Player's Guide`,
      publisher: 'Paizo',
      ...(pageNum !== undefined && { page: pageNum }),
    };
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
