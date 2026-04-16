// Batch 2 | first: investigator-talent-rogue-talent | last: investigator-talent-twilight-talon-improvisation | count: 18
// Sources: Advanced Class Guide (pf1e-acg), Advanced Class Origins (pf1e-aco), Inner Sea Intrigue (pf1e-ppc-isi)
// InvestigatorTalentEntry = ClassOptionBase (base fields only)

import { type InvestigatorTalentEntry } from '@/types/classOptions';

export const investigatorTalentsBatch2: InvestigatorTalentEntry[] = [
  // ---- Advanced Class Guide (ACG) remaining talents (R-Z) ----
  {
    id: 'investigator-talent-rogue-talent',
    name: 'Rogue Talent',
    description:
      "An investigator can select one of the following rogue talents in place of an investigator talent: acrobatic assist, assault leader, black market connections, camouflage, canny observer, charmer, coax information, combat swipe, convincing liar, cunning trigger, deft palm, demand attention, expert leaper, fast fingers, fast getaway, fast picks, fast stealth, firearm training, got your back, guileful polyglot, grit, hard to fool, hold breath, honeyed words, iron guts, lasting poison, ledge walker, major magic, minor magic, nimble climber, peerless maneuver, quick disable, quick disguise, quick trapsmith, resilience, rogue crawl, rope master, stand up, strong stroke, terrain master, trap spotter, or wall scrambler. Any talent effects based on rogue level use the investigator's class level. If the rogue talent has a prerequisite (such as the major magic rogue talent requiring the minor magic talent), the investigator must fulfill the prerequisite before selecting that rogue talent. This talent can be selected multiple times; each time, it grants the investigator a new rogue talent.",
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-studied-defense',
    name: 'Studied Defense',
    description:
      "Requires 9th level investigator. When an investigator with this talent uses his studied combat ability, he can choose to apply that ability's insight bonus to his AC against attacks made by the target of his studied combat instead of to attack rolls against the target of his studied combat. (The insight bonus on damage rolls remains.) He must choose which type of bonus he gains when using studied combat, and it cannot be changed until he uses studied combat again.",
    prerequisites: [{ type: 'level', minimum: 9, class: 'investigator' }],
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-tenacious-inspiration',
    name: 'Tenacious Inspiration',
    description:
      'Requires 13th level investigator. When an investigator rolls his inspiration die, he can roll an additional inspiration die and take the higher result.',
    prerequisites: [{ type: 'level', minimum: 13, class: 'investigator' }],
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-toppling-strike',
    name: 'Toppling Strike',
    description:
      'Requires 9th level investigator. When the investigator deals damage with studied strike, he can perform a trip combat maneuver as a free action against the creature damaged by studied strike. This trip does not provoke attacks of opportunity.',
    prerequisites: [{ type: 'level', minimum: 9, class: 'investigator' }],
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-unconventional-inspiration',
    name: 'Unconventional Inspiration',
    description:
      'An investigator with this talent can pick any one skill. He can add his inspiration die to checks attempted with that skill without expending a use of inspiration.',
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-underworld-inspiration',
    name: 'Underworld Inspiration',
    description:
      "An investigator can use his inspiration on Bluff, Disable Device, Disguise, Intimidate, or Sleight of Hand checks without expending uses of inspiration, provided he's trained in the skill.",
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Advanced Class Origins (ACO) ----
  {
    id: 'investigator-talent-applied-engineering',
    name: 'Applied Engineering',
    description:
      'The investigator can leverage his knowledge of engineering to solve tasks that normally require brute strength or keen eyes. He can expend one use of inspiration as a full-round action to study an object or area and attempt a Knowledge (engineering) check. On his next turn, he can use the result of that Knowledge (engineering) check in place of a Strength check to break the object or in place of a Perception check to locate hidden doors or compartments in that area.',
    source: 'pf1e-aco',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-domino-effect',
    name: 'Domino Effect',
    description:
      'Requires 5th level investigator. When the investigator uses studied strike, he uses his opponents against each other and sets himself up for his next move. Whenever he successfully deals damage to an opponent with studied strike, as a free action the investigator can apply the effects of studied combat to an opponent adjacent to the first.',
    prerequisites: [{ type: 'level', minimum: 5, class: 'investigator' }],
    source: 'pf1e-aco',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-prolonged-study',
    name: 'Prolonged Study',
    description:
      'Requires 13th level investigator. The investigator can study his opponents for long periods of time. The effects of his studied combat ability last for a number of rounds equal to twice his Intelligence modifier (minimum 2) or until he deals damage with a studied strike, whichever comes first.',
    prerequisites: [{ type: 'level', minimum: 13, class: 'investigator' }],
    source: 'pf1e-aco',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-slowing-strike',
    name: 'Slowing Strike',
    description:
      "Requires 7th level investigator. When the investigator deals damage with studied strike, the opponent must succeed at a Fortitude saving throw (DC = 10 + 1/2 the investigator's class level + his Intelligence modifier) or have each of its movement speeds reduced by 5 feet (to a minimum of 5 feet) until the creature is healed through the application of any spell that cures hit point damage or with a successful DC 15 Heal check. Multiple slowing strikes stack, to a minimum movement speed of 5 feet.",
    prerequisites: [{ type: 'level', minimum: 7, class: 'investigator' }],
    source: 'pf1e-aco',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-timed-strike',
    name: 'Timed Strike',
    description:
      'The longer the investigator studies his opponent, the greater the damage he ultimately deals with his studied strike. When the investigator makes a studied strike, he deals a number of points of additional damage equal to the number of consecutive rounds he studied the target with studied combat.',
    source: 'pf1e-aco',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Inner Sea Intrigue (pf1e-ppc-isi) ----
  {
    id: 'investigator-talent-atheist-inspiration',
    name: 'Atheist Inspiration',
    description:
      'The investigator can use her inspiration on saving throws against divine spells without expending uses of inspiration. This talent counts as the Divine Defiance feat for the purposes of meeting prerequisites.',
    source: 'pf1e-ppc-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-false-spellcaster',
    name: 'False Spellcaster',
    description:
      'The investigator can modify her extracts to be delivered as oils applied covertly to the skin. She can fake verbal and somatic components while using an extract this way to deceive observers into believing she is casting a spell; she attempts a Bluff check to determine how convincing the ruse is. If observers try to identify the "spell," those succeeding at a Spellcraft check opposed by her Bluff check realize the truth. The DC to identify what the extract does is 20 + the extract\'s spell level, regardless of whether the deception succeeds. If the investigator possesses the infusion alchemist discovery, she can deliver infusions at touch range, but the hint of residue grants targets a +2 bonus on the opposed Spellcraft check to realize she is not truly casting spells.',
    source: 'pf1e-ppc-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-favored-beat',
    name: 'Favored Beat',
    description:
      'The investigator is familiar with a specific community in which she gains the benefits of renown. She gains the renown vigilante social talent. The investigator can designate an entire settlement or a specific portion of a settlement (such as a district or neighborhood) based on its population. When selecting additional investigator talents, she may choose from the following vigilante social talents (from Ultimate Intrigue), using her investigator level as her vigilante level for prerequisite purposes: celebrity discount, celebrity perks, gossip collector, great renown, incredible renown, or loyal aid. For the purpose of vigilante social talents, the investigator does not have a vigilante identity and is always considered to be in her social identity.',
    source: 'pf1e-ppc-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-iconoclastic-strike',
    name: 'Iconoclastic Strike',
    description:
      'Requires 13th level investigator. When an investigator deals damage with a studied strike, she can perform a sunder combat maneuver as a free action against the creature the studied strike damaged. If the object targeted by the sunder is a holy symbol or divine scroll, this sunder does not provoke attacks of opportunity and deals maximum damage on a successful combat maneuver check.',
    prerequisites: [{ type: 'level', minimum: 13, class: 'investigator' }],
    source: 'pf1e-ppc-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-silencing-strike',
    name: 'Silencing Strike',
    description:
      "Requires 15th level investigator. When the investigator deals damage with a studied strike, the target must succeed at a Fortitude saving throw (DC = 10 + 1/2 the investigator's class level + her Intelligence modifier) or be unable to speak (including being unable to use verbal components for spells) for 1d4+1 rounds. A successful save reduces the duration to 1 round. This talent has no effect on creatures immune to critical hits.",
    prerequisites: [{ type: 'level', minimum: 15, class: 'investigator' }],
    source: 'pf1e-ppc-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-sustained-inspirational-expertise',
    name: 'Sustained Inspirational Expertise',
    description:
      'Requires 11th level investigator and the Inspirational Expertise talent. When the investigator grants a bonus to allies via the Inspirational Expertise investigator talent, she can expend one use of inspiration as a swift action the following round to extend the granted bonus for 1 additional round. The insight bonus granted decreases by 1 each round this ability is used.',
    prerequisites: [
      { type: 'level', minimum: 11, class: 'investigator' },
      { type: 'special', description: 'Inspirational Expertise investigator talent' },
    ],
    source: 'pf1e-ppc-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-twilight-talon-improvisation',
    name: 'Twilight Talon Improvisation',
    description:
      'Whenever the investigator deals studied strike damage with an improvised weapon, she can perform a dirty trick combat maneuver targeting that foe as a free action. This combat maneuver provokes attacks of opportunity as normal unless the investigator has a feat or other ability to prevent it.',
    source: 'pf1e-ppc-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
