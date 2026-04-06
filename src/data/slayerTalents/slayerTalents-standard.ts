import type { SlayerTalentEntry } from '@/types/classOptions';

export const slayerTalentsStandard: SlayerTalentEntry[] = [
  // ── Advanced Class Guide ──────────────────────────────────────────────────

  {
    id: 'slayer-talent-foil-scrutiny',
    name: 'Foil Scrutiny',
    talentTier: 'standard',
    description:
      'The slayer gains a +2 bonus on Bluff and Disguise checks, and on Will saves to resist mind-reading spells and effects.',
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-poison-use',
    name: 'Poison Use',
    talentTier: 'standard',
    description:
      'The slayer is trained in the use of poison and cannot accidentally poison himself when applying poison to a weapon.',
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-ranger-combat-style',
    name: 'Ranger Combat Style',
    talentTier: 'standard',
    description:
      "The slayer selects a ranger combat style and gains a combat feat from that style's first list. At 6th level, the slayer can select from the style's 6th-level feat list. At 10th level, the slayer can select from the style's 10th-level feat list. The slayer need not meet any prerequisites for the chosen feat. This talent can be selected multiple times; each time it is selected, the slayer either chooses a new combat style or gains an additional feat from a style already chosen.",
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-rogue-talent',
    name: 'Rogue Talent',
    talentTier: 'standard',
    description:
      "The slayer selects one rogue talent. Any talent effects based on rogue level use the slayer's class level instead. The slayer cannot select a rogue talent that has the same name as a slayer talent. This talent can be selected multiple times; each time it is selected, the slayer chooses a different rogue talent.",
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-slowing-strike',
    name: 'Slowing Strike',
    talentTier: 'standard',
    description:
      "A creature the slayer hits with a sneak attack has its speed halved for 1d4 rounds (Fortitude DC = 10 + 1/2 the slayer's level + the slayer's Intelligence modifier negates). Against a creature with multiple movement types, the slayer chooses which movement type to affect. This talent has no effect on a creature that has only a single movement type. Halving a creature's fly speed also reduces its maneuverability by one step.",
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-trapfinding',
    name: 'Trapfinding',
    talentTier: 'standard',
    description:
      'The slayer gains Disable Device as a class skill. The slayer also gains the trapfinding and trap sense rogue abilities, using his slayer level as his effective rogue level.',
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Advanced Class Origins (ACO) ──────────────────────────────────────────

  {
    id: 'slayer-talent-blood-reader',
    name: 'Blood Reader',
    talentTier: 'standard',
    description:
      'While able to see a studied target, a slayer with this talent knows exactly how many hit points his opponent has remaining. This only works against living targets.',
    source: 'pf1e-aco',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-studied-ally',
    name: 'Studied Ally',
    talentTier: 'standard',
    description:
      "The slayer can study an ally or friendly creature he can see as a move action. The slayer gains a +1 bonus on checks and attack rolls to use the aid another action to help with that ally's skill checks, attacks, or AC. This bonus increases at the same rate as a slayer's studied target bonus. At 7th level, a slayer can study an ally as a move or swift action. A slayer's studied ally counts against the number of studied targets he can have active at once.",
    source: 'pf1e-aco',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Distant Realms (DR) ───────────────────────────────────────────────────
  // Source: Pathfinder Campaign Setting: Distant Realms

  {
    id: 'slayer-talent-aligned-sneak-attack',
    name: 'Aligned Sneak Attack',
    talentTier: 'standard',
    description:
      "When making a sneak attack against a creature that has damage reduction that can be overcome by weapons of a particular alignment (such as DR 5/good), the slayer's attack reduces that damage reduction by an amount equal to the number of sneak attack dice rolled until the end of the slayer's turn.",
    source: 'pf1e-pcs-dr',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-sever-alignment',
    name: 'Sever Alignment',
    talentTier: 'standard',
    description:
      "When a slayer deals sneak attack damage against an opponent with an alignment subtype, he can forgo his sneak attack damage to scramble the target's metaphysical nature. The target must succeed at a Fortitude save (DC = 10 + half the slayer's level + the slayer's Intelligence modifier) or lose its aligned damage reduction, aligned regeneration, and alignment-descriptor spellcasting for 1 round per 2d6 points of sneak attack damage foregone.",
    source: 'pf1e-pcs-dr',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Dirty Tactics Toolbox (DTT) ───────────────────────────────────────────

  {
    id: 'slayer-talent-catfolk-rogue-talent',
    name: 'Catfolk Rogue Talent',
    talentTier: 'standard',
    description:
      "A catfolk slayer can select one of the following catfolk rogue talents in place of a slayer talent: deadly scratch, graceful faller, nimble climber, or vicious claws. Any talent effects based on rogue level use the slayer's class level. The slayer must fulfill any prerequisites.",
    source: 'pf1e-ppc-dtt',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Elemental Master's Handbook (EMH) ────────────────────────────────────

  {
    id: 'slayer-talent-castling',
    name: 'Castling',
    talentTier: 'standard',
    description:
      'The slayer treats soft cover granted by creatures of her size or larger as though it were cover instead. Cover the slayer gains from this talent does not allow her to attempt Stealth checks.',
    source: 'pf1e-ppc-emh',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-extra-earthcraft',
    name: 'Extra Earthcraft',
    talentTier: 'standard',
    description:
      'The slayer gains 2 additional earthcraft points each day. The slayer must have the earthcraft ability to select this talent.',
    prerequisites: [{ type: 'special', description: 'earthcraft ability' }],
    source: 'pf1e-ppc-emh',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-fortified-position',
    name: 'Fortified Position',
    talentTier: 'standard',
    description:
      'Whenever the slayer gains a bonus on Reflex saves due to cover, she gains an equal bonus on Fortitude saves.',
    source: 'pf1e-ppc-emh',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-unbalancing-trick',
    name: 'Unbalancing Trick',
    talentTier: 'standard',
    description:
      'The slayer gains Improved Trip as a bonus feat, even if she does not meet the prerequisites. At 6th level, she is treated as if she meets all the prerequisites of Greater Trip (although she must take the feat as normal to gain its benefits).',
    source: 'pf1e-ppc-emh',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Heroes of Golarion (HG) ───────────────────────────────────────────────

  {
    id: 'slayer-talent-jaguars-grace',
    name: "Jaguar's Grace",
    talentTier: 'standard',
    description:
      'The slayer does not take the normal -4 penalty when dealing nonlethal damage using a weapon that normally deals lethal damage. Attacks made this way can apply nonlethal sneak attack damage.',
    source: 'pf1e-ppc-hog',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-jaguars-pounce',
    name: "Jaguar's Pounce",
    talentTier: 'standard',
    description:
      'When a slayer deals sneak attack damage, he can attempt a disarm or trip combat maneuver as an immediate action as if the target were flat-footed (losing its Dexterity bonus to CMD).',
    source: 'pf1e-ppc-hog',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-jaguars-protection',
    name: "Jaguar's Protection",
    talentTier: 'standard',
    description:
      "When a slayer deals sneak attack damage, he draws the target's attention away from his allies. The affected enemy takes a -2 penalty on attack rolls made against anyone other than the slayer for 1 minute.",
    source: 'pf1e-ppc-hog',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Martial Arts Handbook (MAH) ───────────────────────────────────────────

  {
    id: 'slayer-talent-eternal-opposition',
    name: 'Eternal Opposition',
    talentTier: 'standard',
    description:
      'Samsaran only. When his studied target is of the dragon, fey, outsider, or undead type, the slayer gains a +2 insight bonus to his AC against its attacks and on saving throws.',
    source: 'pf1e-ppc-mah',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-experience-across-ages',
    name: 'Experience Across Ages',
    talentTier: 'standard',
    description:
      'Samsaran only. Once per day, the slayer can attempt a Knowledge check as if he had a number of ranks equal to his slayer level. A slayer can use this talent one additional time per day for every 5 slayer levels he has.',
    source: 'pf1e-ppc-mah',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-inured-to-terror',
    name: 'Inured to Terror',
    talentTier: 'standard',
    description:
      'Samsaran only. When a slayer fails a saving throw against a fear effect, he can attempt the saving throw a second time to reduce the severity of the effect. Additionally, the DC of Intimidate checks to demoralize him increases by 2.',
    source: 'pf1e-ppc-mah',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-mountainside-ambush',
    name: 'Mountainside Ambush',
    talentTier: 'standard',
    description:
      'Samsaran only. If a slayer deals sneak attack damage to a creature unaware of his presence while standing on higher ground than his target, the sneak attack deals maximum damage instead of rolling.',
    source: 'pf1e-ppc-mah',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-mystic-veil',
    name: 'Mystic Veil',
    talentTier: 'standard',
    description:
      'Samsaran only. The slayer can cast silent image as a spell-like ability once per day for every 2 slayer levels he has, using his slayer level as his caster level.',
    source: 'pf1e-ppc-mah',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-recall-training',
    name: 'Recall Training',
    talentTier: 'standard',
    description:
      'Samsaran only. Once per day, the slayer can take a move action to gain the benefit of a combat feat he does not have. This effect lasts for 1 minute per slayer level he has.',
    source: 'pf1e-ppc-mah',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Potions and Poisons (PP) ──────────────────────────────────────────────

  {
    id: 'slayer-talent-focused-poison',
    name: 'Focused Poison',
    talentTier: 'standard',
    description:
      'When the slayer studies a target, he can reduce the number of additional studied targets he can maintain. For each target so reduced, the DC of poisons used against his studied target increases by 1.',
    source: 'pf1e-ppc-pp',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-redirect-poison',
    name: 'Redirect Poison',
    talentTier: 'standard',
    description:
      'When a creature unsuccessfully attacks the slayer with a poisoned weapon, the slayer can attempt to redirect the attack to a creature within his reach as an immediate action.',
    source: 'pf1e-ppc-pp',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Spymaster's Handbook (SH) ─────────────────────────────────────────────

  {
    id: 'slayer-talent-one-of-those-faces',
    name: 'One of Those Faces',
    talentTier: 'standard',
    description:
      'Each day, the slayer can use disguise self as a spell-like ability for up to 10 minutes per character level in 10-minute increments. Once used, whenever this ability is used again in the next 24 hours the slayer must take on the same alternate appearance chosen the first time.',
    source: 'pf1e-ppc-ssh',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-scrying-familiarity',
    name: 'Scrying Familiarity',
    talentTier: 'standard',
    description:
      'The slayer rolls twice and takes the better result on saving throws against divination (scrying) spells, on Perception checks to notice scrying sensors, and on caster level checks to overcome spell resistance when using scrying.',
    source: 'pf1e-ppc-ssh',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Ultimate Wilderness (UW) ──────────────────────────────────────────────

  {
    id: 'slayer-talent-sticks-and-stones',
    name: 'Sticks and Stones',
    talentTier: 'standard',
    description: 'The slayer gains Catch Off-Guard as a bonus feat.',
    source: 'pf1e-ppc-uw',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-sunlight-strike',
    name: 'Sunlight Strike',
    talentTier: 'standard',
    description:
      'The slayer can reflect sunlight (or other sources of bright light) into the eyes of an adjacent target as a swift action, causing it to gain the dazzled condition for 1 round.',
    source: 'pf1e-ppc-uw',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-sure-footing',
    name: 'Sure Footing',
    talentTier: 'standard',
    description:
      'The slayer gains a +5 bonus on Acrobatics checks to move on narrow surfaces and loose or uneven ground.',
    source: 'pf1e-ppc-uw',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'slayer-talent-toxin-training',
    name: 'Toxin Training',
    talentTier: 'standard',
    description:
      'The slayer chooses one ability score and gains a +4 bonus on saving throws against poisons that deal damage to the chosen ability score. This talent can be selected multiple times; each time it is selected, the slayer chooses a different ability score.',
    source: 'pf1e-ppc-uw',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
