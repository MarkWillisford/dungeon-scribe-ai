// Batch 001 | first: order-of-the-cockatrice | last: order-of-the-blue-rose | count: 14
// Sources: Advanced Player's Guide (pf1e-apg), Advanced Race Guide (pf1e-arg), Blood of the Elements (pf1e-ppc-boe),
//   Ultimate Combat (pf1e-uc), Inner Sea Campaigns (pf1e-isc), Pathfinder Society (pf1e-pfs)
// CavalierOrderEntry = ClassOptionBase + classSkills + edicts

import { type CavalierOrderEntry } from '@/types/classOptions';

export const cavalierOrdersBatch001: CavalierOrderEntry[] = [
  {
    id: 'order-of-the-cockatrice',
    name: 'Order of the Cockatrice',
    description:
      "A cavalier pledging to this order places personal advancement and glory above all other concerns. These cavaliers are unabashedly self-interested, seeking to enhance their own stature, prestige, and wealth through any means available. The order attracts those who believe that personal strength and cunning are the highest virtues.",
    classSkills: ['Appraise', 'Perform'],
    edicts:
      "The cavalier must keep his own interests and aims above those of all others, accept all due payment and earned rewards, and actively seek opportunities to enhance his personal stature and power.",
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'order-of-the-dragon',
    name: 'Order of the Dragon',
    description:
      "Cavaliers of this order dedicate themselves to a group of like-minded companions—often a mercenary company or adventuring band. They place loyalty and friendship above all other virtues, willingly sacrificing themselves to protect those they call allies. The bond between members of this order is considered sacred.",
    classSkills: ['Perception', 'Survival'],
    edicts:
      "The cavalier must remain loyal to his allies and always work to further the aims of the group, protecting companions from harm and defending their honor when called into doubt.",
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'order-of-the-lion',
    name: 'Order of the Lion',
    description:
      "A cavalier pledged to this order serves a sovereign—be it a king, queen, or even a local warlord—with absolute devotion. These cavaliers demonstrate unwavering dedication to their liege's safety, comfort, and the expansion of the realm. Service to their sovereign defines every aspect of their conduct.",
    classSkills: ['Knowledge (local)', 'Knowledge (nobility)'],
    edicts:
      "The cavalier must protect the life and lands of his sovereign, obey the sovereign's commands without question, and strive to expand the realm's power and prestige.",
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'order-of-the-shield',
    name: 'Order of the Shield',
    description:
      "Cavaliers of this order devote their lives to protecting the common folk—from the simple farmer to the honest craftsman. They stand as a bulwark against threats that ordinary people cannot face alone, and measure their worth by how many innocents they keep from harm. Self-sacrifice in defense of the vulnerable is their highest calling.",
    classSkills: ['Heal', 'Knowledge (local)'],
    edicts:
      "The cavalier must safeguard civilians and their prosperity, shield the vulnerable from exploitation and danger, and avoid actions that harm those unable to defend themselves.",
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'order-of-the-star',
    name: 'Order of the Star',
    description:
      "Cavaliers of this order dedicate themselves to the protection of a specific faith and all who follow its teachings. Each member must select a single religion to serve and uphold, advancing its cause through martial strength and steadfast devotion. They function as both holy warriors and protectors of the faith's clergy and laity.",
    classSkills: ['Heal', 'Knowledge (religion)'],
    edicts:
      "The cavalier must strive to protect the faith and all those who follow its teachings, adhere to the religion's strictures, promote the faith wherever possible, and serve its divine agents.",
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'order-of-the-sword',
    name: 'Order of the Sword',
    description:
      "Cavaliers pledging to this order embrace chivalry as their highest ideal. They typically serve a lord or lady and represent the broadest virtues among all cavalier orders—emphasizing courage, honor, mercy, and fairness in equal measure. Members of this order are considered the archetypal knights of the realm.",
    classSkills: ['Knowledge (nobility)', 'Knowledge (religion)'],
    edicts:
      "The cavalier must demonstrate courage against danger, show mercy to wrongdoers, give aid to the vulnerable, maintain justice and honor consistently, and protect the reputation of those he serves.",
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'order-of-the-flame',
    name: 'Order of the Flame',
    description:
      "A cavalier of this order pursues personal glory and legendary status through increasingly dangerous challenges. These warriors measure their worth by the difficulty of their victories, hurling themselves into peril to forge a reputation that will outlast their mortal lives. The order attracts those who thrive on battle and the acclaim that follows triumph.",
    classSkills: ['Knowledge (local)', 'Survival'],
    edicts:
      "The cavalier must pursue glory for himself and those with whom he associates, striving to heap renown upon his name no matter the cost, and challenging ever-more-formidable rivals to cement his reputation.",
    source: 'pf1e-ppc-boe',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'order-of-the-paw',
    name: 'Order of the Paw',
    description:
      "Only dog- or wolf-riding halflings are eligible to join this order of cavaliers. Members pledge to defend halfling communities and innocent folk from wilderness threats, conducting vigilant patrols and eliminating dangers before they reach civilization. The bond between a Paw cavalier and his canine mount is central to the order's identity.",
    classSkills: ['Knowledge (nature)', 'Survival'],
    edicts:
      "The cavalier must prioritize protecting halfling settlements and defend vulnerable creatures from dangerous threats, never taking actions that would endanger halfling communities or innocents. His mount must be a wolf or dog.",
    source: 'pf1e-arg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'order-of-the-tome',
    name: 'Order of the Tome',
    description:
      "Members of this order are devoted to preserving written knowledge for future generations, believing accumulated wisdom to be among the most precious things in the world. Some members focus instead on destroying dangerous or proscribed knowledge with equal dedication. Either way, the written word commands their absolute devotion.",
    classSkills: ['Knowledge (arcana)', 'Knowledge (religion)', 'Linguistics'],
    edicts:
      "The cavalier must protect written knowledge at all costs, believing that preservation of written works often outweighs the value of individual lives, so that future generations may benefit from accumulated wisdom.",
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'order-of-the-seal',
    name: 'Order of the Seal',
    description:
      "Cavaliers pledging to this order serve as guardians of specific charges—whether dangerous magical items, hidden temples, lost secrets, or classified information entrusted to them by a ruler. They are sworn protectors of things that must remain hidden or safe, functioning as the last line of defense for what they guard.",
    classSkills: ['Disable Device', 'Linguistics'],
    edicts:
      "The cavalier must protect his sworn charge with everything he has—his health, his honor, and his very life—preventing intrusions and, if the charge is stolen or violated, restoring it at any cost.",
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'order-of-the-penitent',
    name: 'Order of the Penitent',
    description:
      "This order is designed for cavaliers who seek redemption for past wrongs. Not all knights begin their careers as nobility; some start as thieves, murderers, or cheats, and dedicate themselves to honorable service in order to atone. The order values mercy and fairness precisely because its members understand the consequences of their absence.",
    classSkills: ['Escape Artist', 'Sense Motive'],
    edicts:
      "The cavalier must be merciful to wrongdoers and show unfettered fairness when passing judgment, assuming most creatures are not irredeemably evil and delivering those capable of trial to local law enforcement.",
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'order-of-the-blue-rose',
    name: 'Order of the Blue Rose',
    description:
      "The cavaliers of this order dedicate themselves to promoting peace in the lands they roam. These warriors combine combat expertise with diplomacy, serving as protectors of the innocent while actively seeking non-violent resolutions to conflict. They believe that preventing bloodshed is a greater act of valor than winning a battle.",
    classSkills: ['Knowledge (history)', 'Knowledge (nobility)'],
    edicts:
      "The cavalier must guard against needless violence, seek to stop conflict with a minimum of bloodshed, encourage peaceful resolutions between intelligent creatures, honor surrenders, and protect captives from harm.",
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];

// CHECKPOINT: last_written=order-of-the-blue-rose, written=12/12, status=complete
// NOTE: Order of the Nail (Hellknight PrC, not a cavalier order) and Order of the Glyph
// (unverified source) removed. 12 confirmed orders remain.
