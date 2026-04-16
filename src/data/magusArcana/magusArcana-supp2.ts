import type { MagusArcanaEntry } from '@/types/classOptions';

export const magusArcanaSupp2: MagusArcanaEntry[] = [
  // ---- Ranged Tactics Toolbox ----
  {
    id: 'magus-arcana-dark-shifter',
    name: 'Dark Shifter',
    description:
      "The magus can expend 1 point from his arcane pool as a move action to change the target of an ongoing spell effect with the darkness descriptor. The new target must be within the original range of the spell. If the effect originated from another creature, the magus must succeed at a caster level check (DC = 11 + that creature's caster level).",
    prerequisites: [{ type: 'level', minimum: 6 }],
    source: 'pf1e-ppc-rtt',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-pool-ray',
    name: 'Pool Ray',
    description:
      'As a standard action, the magus can expend 1 point from his arcane pool to infuse a ranged weapon or a piece of ammunition with elemental power. After the attack roll has been made but before the results are revealed, the magus can release this energy to deal 1d6 points of acid, cold, electricity, or fire damage on a successful hit. This bonus damage increases by 1d6 at 6th level and every 3 magus levels thereafter. This arcana can be used in conjunction with ranged spellstrike.',
    source: 'pf1e-ppc-rtt',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-ranger-trap',
    name: 'Ranger Trap',
    description:
      'The magus learns a ranger trap. He can learn additional ranger traps by selecting this arcana multiple times.',
    prerequisites: [{ type: 'level', minimum: 10 }],
    source: 'pf1e-ppc-rtt',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-reach-magic',
    name: 'Reach Magic',
    description:
      'The magus can cast one spell per day as if it were modified by the Reach Spell feat. This does not increase the casting time or the effective spell level of the spell.',
    source: 'pf1e-ppc-rtt',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-throwing-magus',
    name: 'Throwing Magus',
    description:
      'When the magus enhances a weapon using his arcane pool, he can expend 1 additional point from his arcane pool to add the returning and throwing special abilities to the weapon. When the magus throws a weapon enhanced by his arcane pool and hits a foe, he regains 1 arcane pool point. The magus can regain a maximum number of arcane pool points per day equal to his Intelligence modifier in this way.',
    source: 'pf1e-ppc-rtt',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Magical Marketplace ----
  {
    id: 'magus-arcana-divinatory-strike',
    name: 'Divinatory Strike',
    description:
      "Whenever the magus scores a critical hit against a creature, he can gain preternatural insight into his foe's strengths and weaknesses as though he had rolled a natural 20 on a Knowledge check to identify the creature struck. Bonuses and penalties to Knowledge checks apply to this ability as normal.",
    source: 'pf1e-ppc-mm',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-ki-arcana',
    name: 'Ki Arcana',
    description:
      'The magus may use points from his arcane pool and ki points from a ki pool granted by another class interchangeably for any ability that requires spending points from either pool.',
    prerequisites: [
      { type: 'level', minimum: 6 },
      { type: 'special', description: 'ki pool class feature' },
    ],
    source: 'pf1e-ppc-mm',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-scroll-mastery',
    name: 'Scroll Mastery',
    description:
      'When using a scroll, the magus can expend 1 point from his arcane pool to calculate the DC for any spell contained on the scroll using his Intelligence modifier instead of the minimum modifier needed to cast a spell of that level.',
    prerequisites: [{ type: 'level', minimum: 6 }],
    source: 'pf1e-ppc-mm',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Monster Summoner's Handbook ----
  {
    id: 'magus-arcana-intuitive-protection',
    name: 'Intuitive Protection',
    description:
      "When an opponent casts a conjuration (summoning) spell and the magus successfully identifies it with a Spellcraft check, the magus can expend 1 point from his arcane pool as an immediate action to cast protection from chaos, evil, good, or law on himself. The spell lasts for a number of rounds equal to the magus's level. At 7th level, the magus can instead cast magic circle against chaos, evil, good, or law.",
    source: 'pf1e-ppc-msh',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-planar-hunter',
    name: 'Planar Hunter',
    description:
      'When the magus enhances a weapon using his arcane pool, he can expend 1 additional point from his arcane pool to add the planar special ability to the weapon, or 2 additional points to add the phase locking special ability instead.',
    prerequisites: [{ type: 'level', minimum: 9 }],
    source: 'pf1e-ppc-msh',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Heroes of the Streets ----
  {
    id: 'magus-arcana-distant-spellstrike',
    name: 'Distant Spellstrike',
    description:
      "The range of any spell the magus delivers through a ranged weapon attack increases to the maximum range of the weapon used, if that range is greater than the spell's normal range.",
    prerequisites: [
      { type: 'level', minimum: 12 },
      { type: 'special', description: 'ranged spellstrike class feature' },
    ],
    source: 'pf1e-ppc-hots',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'magus-arcana-reach-spellstrike',
    name: 'Reach Spellstrike',
    description:
      'The magus can deliver spells with a range of touch using ranged spellstrike up to a maximum range of close (25 feet + 5 feet per 2 caster levels).',
    prerequisites: [
      { type: 'level', minimum: 9 },
      { type: 'special', description: 'ranged spellstrike class feature' },
    ],
    source: 'pf1e-ppc-hots',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Agents of Evil ----
  {
    id: 'magus-arcana-vision-clouding-strike',
    name: 'Vision-Clouding Strike',
    description:
      "The magus can expend 1 or more points from his arcane pool as a swift action to empower his weapon with shadowy energy for 1 minute. The next creature struck by the weapon must succeed at a Will saving throw (DC = 1/2 the magus's level + his Intelligence modifier) or treat the magus as though he were in an area of dim light for 1d4 rounds, plus 1 additional round for each arcane pool point expended beyond the first.",
    prerequisites: [{ type: 'level', minimum: 9 }],
    source: 'pf1e-ppc-aoe',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
