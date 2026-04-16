// Path of War disciplines — 10 martial disciplines from Dreamscarred Press's
// Path of War (2014). Thematic intros and metadata scraped from d20pfsrd.com
// per plans/data-scraping/path-of-war-scraping.md Phase 1.

import type { DisciplineDefinition } from '@/types/initiating';

const POW_SOURCE = {
  bookId: 'pow',
  bookName: 'Path of War',
  publisher: 'Dreamscarred Press',
} as const;

export const POW_DISCIPLINES: DisciplineDefinition[] = [
  {
    id: 'broken-blade',
    name: 'Broken Blade',
    description:
      "Legend has it the first practitioner of the Broken Blade style was a powerful swordsman who, in the middle of a life-or-death duel, found his sword broken and had to cast it aside — only to realize his years of training had made his body a weapon in its own right. Disciples of the Broken Blade teach these unarmed methods in monasteries, to cloistered warrior-monks who learn to operate without the traditional tools of combat.",
    associatedSkill: 'Acrobatics',
    associatedWeaponGroups: ['close', 'monk', 'natural'],
    sourceSystem: 'pow',
    source: POW_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'golden-lion',
    name: 'Golden Lion',
    description:
      'The discipline of Golden Lion is a practice passed between war leaders, chieftains, generals, and militia leaders over the generations, meant to bring a group of warriors together into one cohesive unit. It is a discipline that greatly benefits a warrior who believes strongly in teamwork and leadership on the battlefield.',
    associatedSkill: 'Diplomacy',
    associatedWeaponGroups: ['heavy blades', 'hammers', 'pole arms'],
    sourceSystem: 'pow',
    source: POW_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'iron-tortoise',
    name: 'Iron Tortoise',
    description:
      "The discipline known as Iron Tortoise rose up from the need to protect one's self and allies from harm during wartime. Its practitioners master defensive positioning and shield work to become immovable defenders, turning every block and bash into a weapon as reliable as any blade.",
    associatedSkill: 'Bluff',
    associatedWeaponGroups: ['axes', 'heavy blades', 'close'],
    sourceSystem: 'pow',
    source: POW_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'primal-fury',
    name: 'Primal Fury',
    description:
      'The way of the Primal Fury is a simple method of undeniable ferocity coupled with unstoppable aggression in the face of the enemy. Its practitioners emulate the hunting methods of great cats and prioritize survival through stoic combat resilience, tearing through foes with savage momentum.',
    associatedSkill: 'Survival',
    associatedWeaponGroups: ['axes', 'heavy blades', 'hammers'],
    sourceSystem: 'pow',
    source: POW_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'scarlet-throne',
    name: 'Scarlet Throne',
    description:
      'The discipline of Scarlet Throne arose in the battling aristocracies of the world, where its nobles initially practiced dueling styles of little use in true war before refining them for the battlefield. Its practitioners combine elegant dueling arts with practical combat mastery, ruling any battlefield as though it were their royal court.',
    associatedSkill: 'Sense Motive',
    associatedWeaponGroups: ['heavy blades', 'light blades', 'spears'],
    sourceSystem: 'pow',
    source: POW_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'silver-crane',
    name: 'Silver Crane',
    description:
      'Disciples of the Silver Crane are men and women for whom the power of the celestial and divine flow into the arts of their blade. This goodly discipline focuses on strikes designed to combat evil, celestial combat insights, and abilities that enable warriors and their allies to endure battles against the forces of darkness.',
    associatedSkill: 'Perception',
    associatedWeaponGroups: ['bows', 'hammers', 'spears'],
    sourceSystem: 'pow',
    source: POW_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'solar-wind',
    name: 'Solar Wind',
    description:
      'The disciples of the Solar Wind discipline learn their arts on the windy plains where they train to deliver deadly force and precision in any environment. Throwing weapons and archery are their tools, and they rarely miss their mark regardless of distance or the conditions of the battlefield.',
    associatedSkill: 'Perception',
    associatedWeaponGroups: ['bows', 'crossbows', 'firearms', 'thrown'],
    sourceSystem: 'pow',
    source: POW_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'steel-serpent',
    name: 'Steel Serpent',
    description:
      'Practice of the Steel Serpent discipline dates back to ancient times, hailing from those whose work was only practiced in the dark of night, in hidden cabals dedicated to the art of killing. Steel Serpent disciples master silent assassination through stealth, poison, and anatomical knowledge combined with precise martial combat skill.',
    associatedSkill: 'Heal',
    associatedWeaponGroups: ['light blades', 'close', 'monk'],
    sourceSystem: 'pow',
    source: POW_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'thrashing-dragon',
    name: 'Thrashing Dragon',
    description:
      'The discipline known as Thrashing Dragon has a long-standing tradition amongst both ascetics and daredevils alike, as its movements and style fit both the dedication and tenacity of disciplined fighters and the erratic, improvisational style of free-spirited warriors. Its practitioners emphasize speed, grace, and acrobatic movement to evade attacks rather than block them.',
    associatedSkill: 'Acrobatics',
    associatedWeaponGroups: ['close', 'light blades', 'double'],
    sourceSystem: 'pow',
    source: POW_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'veiled-moon',
    name: 'Veiled Moon',
    description:
      'As the stillness of the moon reflected upon a still pond, the spiritualist discipline of Veiled Moon is seen as a strange and esoteric art whose mysteries are difficult to grasp and even harder to practice. Its practitioners exist between worlds, blending connections to the Astral and Ethereal planes into supernatural martial techniques.',
    associatedSkill: 'Stealth',
    associatedWeaponGroups: ['light blades', 'double', 'spears'],
    sourceSystem: 'pow',
    source: POW_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
];
