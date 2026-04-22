// Path of War: Expanded disciplines — 10 additional martial disciplines from
// Dreamscarred Press's Path of War: Expanded (2015). Thematic intros and
// metadata scraped from d20pfsrd.com per plans/data-scraping/path-of-war-scraping.md
// Phase 1.

import type { DisciplineDefinition } from '@/types/initiating';

const POWE_SOURCE = {
  bookId: 'powe',
  bookName: 'Path of War: Expanded',
  publisher: 'Dreamscarred Press',
} as const;

export const POW_EXTENDED_DISCIPLINES: DisciplineDefinition[] = [
  {
    id: 'black-seraph',
    name: 'Black Seraph',
    description:
      'The secrets of the Black Seraph discipline are taught by possessing fiends and demonic tutors to their pawns, as a way of enticing fools who desire power into learning their secrets — or on occasion seized by those with wills strong enough to tear those secrets from their infernal prisoners. This dark martial path emphasizes devastating two-handed strikes, vicious counters, intimidation, and ruthless tactics.',
    associatedSkill: 'Intimidate',
    associatedWeaponGroups: ['axes', 'flails', 'polearms'],
    sourceSystem: 'pow-extended',
    source: POWE_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'cursed-razor',
    name: 'Cursed Razor',
    description:
      'The discipline known now as Cursed Razor has dark origins indeed, spawned forth from the bodyguards of an ancient demonic cult. Though its techniques stem from malice, they are not necessarily evil — pragmatic warriors and champions use them to turn the fiends\u2019 own arts against fiendish foes.',
    associatedSkill: 'Spellcraft',
    associatedWeaponGroups: ['heavy blades', 'light blades', 'spears'],
    sourceSystem: 'pow-extended',
    source: POWE_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'elemental-flux',
    name: 'Elemental Flux',
    description:
      'Equal parts martial discipline and magical art form, Elemental Flux is a martial art said to have roots in the bloodlines of genies and their mortal descendants. Its practitioners blend arcane elemental energies with martial strikes to create magic-infused attacks that flow between the four classical elements.',
    associatedSkill: 'Spellcraft',
    associatedWeaponGroups: ['light blades', 'monk', 'thrown'],
    sourceSystem: 'pow-extended',
    source: POWE_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'eternal-guardian',
    name: 'Eternal Guardian',
    description:
      'One legend claims Eternal Guardian was created by the god who first separated the planes, dividing the mortal from the immortal; another insists it was founded by a single warrior who swore to defend his city from an entire invading army. The discipline centers on unwavering devotion to protecting allies or cursing foes who would harm what its practitioners have sworn to defend.',
    associatedSkill: 'Intimidate',
    associatedWeaponGroups: ['hammers', 'heavy blades', 'polearms'],
    sourceSystem: 'pow-extended',
    source: POWE_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'mithral-current',
    name: 'Mithral Current',
    description:
      'Like the flashing rapids, thundering waterfalls, and deep, silent depths of the ocean, disciples of Mithral Current embody the many forms and ever-changing nature of water. Its practitioners flow between offense and defense with fluid grace, drawing, striking, and sheathing their blades in a single continuous motion.',
    associatedSkill: 'Perform (dance)',
    associatedWeaponGroups: ['light blades', 'heavy blades', 'polearms'],
    sourceSystem: 'pow-extended',
    source: POWE_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'piercing-thunder',
    name: 'Piercing Thunder',
    description:
      'The Piercing Thunder discipline finds its traditions rooted in one of the oldest weapons known to intelligent beings: the spear. This martial practice emphasizes overwhelming force through reach and mobility, demonstrating that mastery of the pole and spear speaks louder than rank or title.',
    associatedSkill: 'Acrobatics',
    associatedWeaponGroups: ['polearms', 'spears'],
    sourceSystem: 'pow-extended',
    source: POWE_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'riven-hourglass',
    name: 'Riven Hourglass',
    description:
      'Some souls rejected the inevitability of time itself, learning through skill with a blade to cleave the hourglass in twain and alter the passage of time to their benefit. Practitioners of Riven Hourglass manipulate the temporal essence within all beings to turn battles in their favor before the first blow is struck.',
    associatedSkill: 'Autohypnosis',
    associatedWeaponGroups: ['flails', 'hammers', 'light blades'],
    sourceSystem: 'pow-extended',
    source: POWE_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'shattered-mirror',
    name: 'Shattered Mirror',
    description:
      'The strange and, in some ways, disquieting discipline known as Shattered Mirror is ancient and misunderstood. Its practitioners seek to master reflections and deception through supernatural means, their art allegedly originating from a warrior once caught in a magical duel with a mirror of opposition.',
    associatedSkill: 'Craft (glassmaking)',
    associatedWeaponGroups: ['heavy blades', 'light blades', 'close'],
    sourceSystem: 'pow-extended',
    source: POWE_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
    adminNotes:
      'associatedSkill per d20pfsrd is any of Craft (glassmaking), Craft (painting), Craft (sculpture), or Craft (sketching). Stored here as Craft (glassmaking); UI or rules layer should treat any matching Craft specialty as eligible.',
  },
  {
    id: 'sleeping-goddess',
    name: 'Sleeping Goddess',
    description:
      "Though some put their trust in a well-crafted sword or a solid shield, the greatest warriors know that a tempered mind and devotion to one's ideals are the sharpest weapon and the toughest armor. Sleeping Goddess adepts strike at the conceptual basis of their foes' reality through psionics and overwhelming belief, transcending physical limitations.",
    associatedSkill: 'Autohypnosis',
    associatedWeaponGroups: ['flails', 'heavy blades', 'monk', 'spears'],
    sourceSystem: 'pow-extended',
    source: POWE_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'tempest-gale',
    name: 'Tempest Gale',
    description:
      'Like the whipping winds of a great storm front, the arrows, slings, bullets, and thrown weapons of a Tempest Gale disciple reach out across the battlefield to find their target without error. This ranged discipline emphasizes masterful technique, precision strikes, and the ability to transform any projectile into an unerring missile.',
    associatedSkill: 'Sleight of Hand',
    associatedWeaponGroups: ['bows', 'crossbows', 'firearms', 'thrown'],
    sourceSystem: 'pow-extended',
    source: POWE_SOURCE,
    isOfficial: false,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
];
