import type { SlayerTalentEntry } from '@/types/classOptions';

export const slayerTalentsAdvanced: SlayerTalentEntry[] = [
  // ---- Advanced Class Guide -----------------------------------------------

  {
    id: 'slayer-talent-assassinate',
    name: 'Assassinate',
    talentTier: 'advanced',
    description:
      "A slayer with this advanced talent can kill foes that are unable to defend themselves. To attempt to assassinate a target, the slayer must first study his target for 1 round as a standard action. On the following round, if the slayer makes a sneak attack against the target and the target is denied its Dexterity bonus to AC, the sneak attack has the additional effect of possibly killing the target. This attempt automatically fails if the target recognizes the slayer as an enemy before the attack. If the sneak attack is successful and the target fails a Fortitude saving throw (DC = 10 + 1/2 the slayer's level + the slayer's Intelligence modifier), the target dies. If the target's saving throw succeeds, the target is instead reduced to the damage dealt by the sneak attack normally. A slayer can only attempt to assassinate a given creature once per day. A target that survives is immune to further assassination attempts by that slayer for 24 hours.",
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-rogue-ninja-advanced-talents',
    name: 'Rogue and Ninja Advanced Talents',
    talentTier: 'advanced',
    description:
      "A slayer with this advanced talent can select one of the following rogue advanced talents or ninja master tricks in place of a slayer advanced talent: another secret, confounding blades, crippling strike, defensive roll, dispelling attack, entanglement of blades, feat, improved evasion, knock-out blow, master of disguise, opportunist, or skill mastery. The slayer's level counts as her rogue level for determining the effects of those talents that depend on rogue level. This talent can be selected multiple times; each time, it applies to a new rogue advanced talent or ninja master trick.",
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-slayer-camouflage',
    name: 'Slayer Camouflage',
    talentTier: 'advanced',
    description:
      "A slayer with this advanced talent can use the Stealth skill to hide in any of her favored terrains, even if the terrain doesn't grant cover or concealment.",
    prerequisites: [{ type: 'special', description: 'terrain mastery slayer talent' }],
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-woodland-stride',
    name: 'Woodland Stride',
    talentTier: 'advanced',
    description:
      'A slayer with this advanced talent can move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at his normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion, however, still affect him.',
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Chronicle of Legends -----------------------------------------------

  {
    id: 'slayer-talent-armored-marauder',
    name: 'Armored Marauder',
    talentTier: 'advanced',
    description:
      'The slayer gains proficiency with heavy armor. In addition, the armor check penalty of any heavy armor the slayer wears is reduced by 1 for every 6 class levels he possesses.',
    source: 'pf1e-ppc-col',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-armored-swiftness',
    name: 'Armored Swiftness',
    talentTier: 'advanced',
    description:
      'The slayer can move at full speed while wearing heavy armor. In addition, the maximum Dexterity bonus of any heavy armor the slayer wears increases by 1 for every 6 class levels he possesses.',
    prerequisites: [{ type: 'special', description: 'armored marauder slayer talent' }],
    source: 'pf1e-ppc-col',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-marksmans-shot',
    name: "Marksman's Shot",
    talentTier: 'advanced',
    description:
      'As a standard action, the slayer can make a single ranged attack against a studied target at his highest base attack bonus. If the attack hits, the slayer doubles the number of sneak attack dice he rolls when determining the damage dealt by this attack.',
    source: 'pf1e-ppc-col',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-reaping-stalker',
    name: 'Reaping Stalker',
    talentTier: 'advanced',
    description:
      'The slayer treats sickles and scythes as if they were one size category larger than they actually are for the purpose of determining the damage dice they deal. In addition, the critical threat range of sickles and scythes increases by 1 when wielded by the slayer. This increase does not stack with other effects that increase the threat range of these weapons.',
    source: 'pf1e-ppc-col',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-swallow-reversal',
    name: 'Swallow Reversal',
    talentTier: 'advanced',
    description:
      'As a standard action, the slayer can make a single melee attack against a studied target. When doing so, the slayer rolls his attack roll twice and takes the higher result. The slayer can use this ability against a given studied target only once per day.',
    source: 'pf1e-ppc-col',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
