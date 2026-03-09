import { ArchetypeData, ClassFeatureData } from '../types';

export const INVESTIGATOR_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Conspiracy Theorist
  // ──────────────────────────────────────────────
  {
    name: 'Conspiracy Theorist',
    className: 'Investigator',
    description:
      'The conspiracy theorist sees hidden patterns and sinister connections everywhere, developing an uncanny ability to piece together seemingly unrelated clues into a coherent (if sometimes paranoid) whole. She substitutes social manipulation and rumor-tracking for standard investigator talents, trading alchemy for a web of informants.',
    replacedFeatures: ['Alchemy', 'Poison Lore', 'Poison Resistance', 'Poison Immunity'],
    modifiedFeatures: ['Inspiration', 'Investigator Talents'],
    newFeatures: [
      {
        name: 'Rumor Mill',
        level: 1,
        description:
          'Instead of alchemy, the conspiracy theorist maintains a network of contacts and rumor sources. She can spend 10 minutes gathering local rumors to gain a +4 bonus on one Knowledge check related to local events, organizations, or persons.',
      },
      {
        name: 'Pattern Recognition',
        level: 3,
        description:
          'The conspiracy theorist adds half her investigator level (minimum 1) as a bonus on Sense Motive checks and gains a free Sense Motive check against any creature she observes for at least 1 round.',
      },
      {
        name: 'Uncover the Truth',
        level: 5,
        description:
          'By spending 1 inspiration point, the conspiracy theorist can attempt a special Insight check to determine whether a piece of information is true, false, or deliberately misleading, as the spell discern lies for one statement.',
      },
      {
        name: 'Web of Secrets',
        level: 11,
        description:
          'The conspiracy theorist automatically knows when a creature within 30 feet is attempting to deceive her or a nearby ally, allowing an immediate Sense Motive check as a free action even outside her turn.',
      },
    ],
    source: 'Pathfinder Player Companion: Dirty Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 2. Empiricist
  // ──────────────────────────────────────────────
  {
    name: 'Empiricist',
    className: 'Investigator',
    description:
      'The empiricist relies on logic and keen observation rather than gut instinct, channeling her inspiration into INT-based skill checks rather than Wisdom-based perception. Her unwavering reliance on evidence makes her exceptionally effective at determining truth from falsehood.',
    replacedFeatures: [],
    modifiedFeatures: ['Inspiration', 'Keen Recollection'],
    newFeatures: [
      {
        name: 'Ceaseless Observation',
        level: 1,
        description:
          'The empiricist uses her Intelligence modifier in place of the normal ability modifier for Disable Device, Perception, Sense Motive, and Use Magic Device checks, and can use Inspiration on these checks without spending a use.',
      },
      {
        name: 'Unfailing Logic',
        level: 4,
        description:
          'The empiricist gains a +2 bonus on saving throws against illusion spells and effects. She may spend 1 inspiration point as a swift action to treat any illusion she interacts with as disbelieved for 1 round.',
      },
      {
        name: 'Inexorable Logic',
        level: 9,
        description:
          'The empiricist can spend 1 inspiration point to reroll any saving throw against a mind-affecting effect; she must take the second result even if it is lower.',
      },
      {
        name: 'Empirical Logic',
        level: 14,
        description:
          'The empiricist adds her Intelligence modifier rather than her Wisdom modifier on Will saving throws against enchantment and illusion effects.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 3. Gravedigger
  // ──────────────────────────────────────────────
  {
    name: 'Gravedigger',
    className: 'Investigator',
    description:
      'The gravedigger investigates crimes that touch the boundary between life and death, developing expertise in forensic examination of corpses and the undead. She trades standard alchemy for a grim toolkit of funerary reagents and necrological knowledge.',
    replacedFeatures: ['Alchemy', 'Poison Lore'],
    modifiedFeatures: ['Studied Combat', 'Studied Strike'],
    newFeatures: [
      {
        name: 'Forensic Examination',
        level: 1,
        description:
          'The gravedigger can examine a corpse as a 1-minute ritual to determine cause and approximate time of death, as speak with dead without a spell, though only for three questions and requiring a DC 15 Knowledge (religion) check.',
      },
      {
        name: 'Funerary Reagents',
        level: 1,
        description:
          'The gravedigger brews oils and unguents that preserve bodies and repel undead. She can prepare a number of reagents per day equal to her investigator level; each requires 1 minute to apply and lasts 1 hour.',
      },
      {
        name: 'Death Sense',
        level: 3,
        description:
          'The gravedigger can sense undead creatures within 30 feet as if she had the detect undead spell active, and gains a +2 bonus on Knowledge (religion) checks related to undead and burial rites.',
      },
      {
        name: 'Grave Strike',
        level: 4,
        description:
          "When using Studied Strike against undead, the gravedigger deals full precision damage regardless of the undead type's immunity to critical hits, and adds her Intelligence modifier as bonus damage on the attack.",
      },
    ],
    source: "Pathfinder Player Companion: Adventurer's Armory 2",
  },

  // ──────────────────────────────────────────────
  // 4. Jinyiwei
  // ──────────────────────────────────────────────
  {
    name: 'Jinyiwei',
    className: 'Investigator',
    description:
      'The jinyiwei is an imperial agent of an autocratic regime, trained to operate in the shadows of palace intrigue and to root out dissent with ruthless efficiency. She trades alchemy for martial prowess and surveillance techniques drawn from imperial training.',
    replacedFeatures: [
      'Alchemy',
      'Poison Lore',
      'Poison Resistance',
      'Poison Immunity',
      'Swift Alchemy',
    ],
    modifiedFeatures: ['Inspiration'],
    newFeatures: [
      {
        name: 'Imperial Mandate',
        level: 1,
        description:
          'The jinyiwei receives a writ of authority that grants a +4 bonus on Intimidate checks against creatures who know her affiliation, and she is treated as having the Quick Draw feat for drawing her signature jian sword.',
      },
      {
        name: 'Shadow Surveillance',
        level: 1,
        description:
          'The jinyiwei can make Stealth checks to tail a target in an urban environment without penalty even while maintaining observation, and gains a +2 bonus on Perception and Stealth checks in crowds.',
      },
      {
        name: 'Swordplay Talent',
        level: 3,
        description:
          'The jinyiwei gains Weapon Focus (jian) as a bonus feat at 3rd level and adds her Intelligence modifier to damage rolls with a jian when she has used Studied Combat against the target.',
      },
      {
        name: 'Implacable Agent',
        level: 7,
        description:
          'The jinyiwei is immune to fear effects from targets she has studied and gains a +4 morale bonus on saving throws against mind-affecting effects from sources that know her as an imperial agent.',
      },
    ],
    source: 'Dragon Empires Gazetteer',
  },

  // ──────────────────────────────────────────────
  // 5. Lamplighter
  // ──────────────────────────────────────────────
  {
    name: 'Lamplighter',
    className: 'Investigator',
    description:
      'The lamplighter is an urban investigator who uses alchemical light to expose the truth lurking in dark alleys and shadowy conspiracies. She trades some investigator talents for specialized illumination alchemicals and the ability to reveal invisible or hidden foes.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Alchemy', 'Investigator Talents'],
    newFeatures: [
      {
        name: 'Alchemical Illumination',
        level: 1,
        description:
          'The lamplighter can craft alchemical illumination items at half cost and twice normal speed. She can create a special lantern that reveals invisible creatures and objects within its light radius (30 feet) as a standard action.',
      },
      {
        name: 'Expose',
        level: 2,
        description:
          'As a standard action, the lamplighter can illuminate a single creature within 30 feet with alchemical luminescent dust, negating its concealment, invisibility, or hiding bonus for 1 minute per investigator level.',
      },
      {
        name: 'City Light',
        level: 6,
        description:
          'The lamplighter never suffers penalties from darkness conditions and can see in magical darkness up to 30 feet, as if she had darkvision with the ability to pierce magical darkness.',
      },
      {
        name: 'Beacon',
        level: 11,
        description:
          'The lamplighter can designate one creature per investigator level as a "person of interest." She always knows the general direction of designated creatures within 1 mile and gains a +2 bonus on all checks against them.',
      },
    ],
    source: 'Pathfinder Player Companion: Heroes of the Streets',
  },

  // ──────────────────────────────────────────────
  // 6. Questioner
  // ──────────────────────────────────────────────
  {
    name: 'Questioner',
    className: 'Investigator',
    description:
      'The questioner uses diplomatic and psychological methods to extract information, replacing some physical investigation skills with social expertise and reading people. She trades trapfinding for an uncanny ability to spot evasion and lies in conversation.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Inspiration', 'Investigator Talents'],
    newFeatures: [
      {
        name: 'Psychological Insight',
        level: 1,
        description:
          'The questioner can spend inspiration on Bluff, Diplomacy, Intimidate, and Sense Motive checks without using an investigator talent. She gains a +2 bonus on all such checks when interrogating a creature she has studied for at least 1 minute.',
      },
      {
        name: 'Read Motive',
        level: 2,
        description:
          "After 1 round of conversation, the questioner can attempt a Sense Motive check (DC 15 + target's Bluff) to learn the target's primary motivation or current emotional state.",
      },
      {
        name: 'Lie Detector',
        level: 5,
        description:
          'The questioner detects lies as a constant effect (as the spell) when in conversation with a willing or restrained subject, and can extract information from an unwilling subject with a successful opposed Sense Motive vs. Bluff check.',
      },
      {
        name: 'Breaking Point',
        level: 9,
        description:
          "By spending 1 inspiration point, the questioner can shatter a creature's resolve during interrogation, forcing a Will save (DC 10 + half investigator level + INT modifier) or compelling the creature to answer one question truthfully.",
      },
    ],
    source: "Pathfinder Player Companion: Spymaster's Handbook",
  },

  // ──────────────────────────────────────────────
  // 7. Psychic Detective
  // ──────────────────────────────────────────────
  {
    name: 'Psychic Detective',
    className: 'Investigator',
    description:
      "The psychic detective supplements her investigative acumen with psychic magic, replacing the investigator's alchemical extracts with psychic spells drawn from the psychic spell list. She trades inspiration on some skill checks for raw psychic power.",
    replacedFeatures: [
      'Alchemy',
      'Poison Lore',
      'Poison Resistance',
      'Poison Immunity',
      'Swift Alchemy',
    ],
    modifiedFeatures: ['Inspiration'],
    newFeatures: [
      {
        name: 'Psychic Magic',
        level: 1,
        description:
          'The psychic detective casts spells drawn from the psychic spell list as a spontaneous caster, using Intelligence as her casting stat. Her caster level equals her investigator level and she can cast a number of spells per day as per the psychic detective spell progression.',
      },
      {
        name: 'Psychic Inspiration',
        level: 2,
        description:
          'The psychic detective can spend inspiration on concentration checks and Knowledge (arcana, dungeoneering, and planes) checks. She adds her Intelligence modifier to concentration checks as a free benefit.',
      },
      {
        name: 'Telepathic Intuition',
        level: 5,
        description:
          'The psychic detective can read surface thoughts of a creature she has studied, as the detect thoughts spell, by spending 1 inspiration point. She does not need to concentrate once the connection is established for 1 round.',
      },
      {
        name: 'Psychic Strike',
        level: 4,
        description:
          "The psychic detective's studied strike deals psychic damage that bypasses all damage reduction and can affect incorporeal creatures as if the attack were a force effect.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 8. Sleuth
  // ──────────────────────────────────────────────
  {
    name: 'Sleuth',
    className: 'Investigator',
    description:
      "The sleuth is a daring, street-smart investigator who relies on panache and luck rather than carefully measured alchemicals. She trades the investigator's alchemy for the swashbuckler's panache mechanic and uses grit-like points to power her derring-do.",
    replacedFeatures: [
      'Alchemy',
      'Poison Lore',
      'Poison Resistance',
      'Poison Immunity',
      'Swift Alchemy',
      'True Inspiration',
    ],
    modifiedFeatures: ['Inspiration', 'Investigator Talents'],
    newFeatures: [
      {
        name: 'Luck',
        level: 1,
        description:
          'The sleuth gains a pool of luck points equal to her Charisma modifier (minimum 1). She can spend luck points to power deeds similar to the swashbuckler, and regains luck whenever she succeeds on a Reflex save, confirms a critical hit, or reduces a foe to 0 hp.',
      },
      {
        name: 'Deeds',
        level: 1,
        description:
          'The sleuth gains a series of deeds at 1st, 3rd, 7th, and 11th level, including Dodging Panache (spend 1 luck point to add CHA to AC for 1 round), Charmed Life (spend luck point before a save for +CHA bonus), and similar luck-based abilities.',
      },
      {
        name: 'Unflinching',
        level: 11,
        description:
          'The sleuth is immune to fear effects while she has at least 1 luck point remaining, and gains a +2 morale bonus on all saves against enchantment effects.',
      },
      {
        name: 'Consummate Liar',
        level: 3,
        description:
          'The sleuth adds half her investigator level (minimum 1) on all Bluff checks and never takes the penalty for outrageous lies when talking her way out of immediate danger.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 9. Tinkerer
  // ──────────────────────────────────────────────
  {
    name: 'Tinkerer',
    className: 'Investigator',
    description:
      "The tinkerer replaces traditional alchemical extracts with complex mechanical devices and clockwork gadgets, modifying the investigator's craft-focused abilities to reflect an engineering rather than chemical mindset. She excels at creating and disabling mechanical traps and constructs.",
    replacedFeatures: ['Alchemy', 'Swift Alchemy', 'Instant Alchemy'],
    modifiedFeatures: ['Trapfinding', 'Investigator Talents'],
    newFeatures: [
      {
        name: 'Gadgeteer',
        level: 1,
        description:
          'The tinkerer can craft mechanical gadgets using Craft (clockwork) in place of Craft (alchemy). Each day she can prepare a number of single-use gadgets equal to her investigator level + Intelligence modifier, each taking 10 minutes to assemble.',
      },
      {
        name: 'Mechanical Insight',
        level: 1,
        description:
          'The tinkerer gains a +4 bonus on Disable Device checks against mechanical traps and constructs, and can take 10 on Disable Device checks even when threatened or in combat against such targets.',
      },
      {
        name: 'Rapid Assembly',
        level: 3,
        description:
          'The tinkerer can assemble a gadget as a standard action rather than taking 10 minutes, though improvised gadgets assembled this way have a 10% chance of malfunction on each use.',
      },
      {
        name: 'Construct Companion',
        level: 7,
        description:
          "The tinkerer constructs a small mechanical companion (statistics as a familiar appropriate to her level). The companion can deliver extracts and perform simple tasks but does not share the tinkerer's skill or save bonuses.",
      },
    ],
    source: 'Pathfinder Player Companion: Alchemy Manual',
  },

  // ──────────────────────────────────────────────
  // 10. Tome Eater
  // ──────────────────────────────────────────────
  {
    name: 'Tome Eater',
    className: 'Investigator',
    description:
      'The tome eater is a bizarre investigator who literally consumes written knowledge — eating pages, scrolls, and books to absorb their information and magical potency. She replaces alchemical extracts with devoured scroll magic, trading physical resilience for voracious mental intake.',
    replacedFeatures: [
      'Alchemy',
      'Poison Lore',
      'Poison Resistance',
      'Poison Immunity',
      'Swift Alchemy',
    ],
    modifiedFeatures: ['Inspiration'],
    newFeatures: [
      {
        name: 'Consume Knowledge',
        level: 1,
        description:
          "As a standard action, the tome eater can eat a page of written text to gain a +4 bonus on one Knowledge check related to the text's subject within 24 hours, or eat a scroll to cast it immediately as if it were a spell-trigger item she activates.",
      },
      {
        name: 'Digest Spell',
        level: 3,
        description:
          'The tome eater can devour a scroll of a spell she could cast and retain it in a mental "stomach" for a number of hours equal to her investigator level. She can cast it once during that period without the scroll, using her Intelligence modifier as the spellcasting modifier.',
      },
      {
        name: 'Eidetic Consumption',
        level: 5,
        description:
          'After consuming at least one page of text from a source, the tome eater recalls its contents perfectly and can reproduce the text verbatim. She gains the benefits of Skill Focus in any skill the text was a treatise on for 24 hours.',
      },
      {
        name: 'Voracious Mind',
        level: 11,
        description:
          "The tome eater can consume an entire book as a full-round action, gaining a +2 insight bonus on all Knowledge checks in the book's subject area permanently (maximum +10 total from this ability) and +1d4 temporary inspiration points that last 1 hour.",
      },
    ],
    source: 'Pathfinder Player Companion: Blood of Shadows',
  },

  // ──────────────────────────────────────────────
  // 11. Cryptid Scholar
  // ──────────────────────────────────────────────
  {
    name: 'Cryptid Scholar',
    className: 'Investigator',
    description:
      'The cryptid scholar dedicates herself to cataloging and understanding creatures that exist at the edges of credibility — monsters dismissed as legend, aberrations misidentified by common folk, and beings that defy conventional taxonomy. She trades poison expertise for an exhaustive bestiary of the improbable.',
    replacedFeatures: ['Poison Lore', 'Poison Resistance', 'Poison Immunity'],
    modifiedFeatures: ['Studied Combat', 'Studied Strike', 'Investigator Talents'],
    newFeatures: [
      {
        name: 'Creature Lore',
        level: 1,
        description:
          'The cryptid scholar adds all Knowledge skills to the list of skills she can use inspiration on without spending a talent, and can always take 10 on Knowledge checks to identify creatures even in stressful situations.',
      },
      {
        name: 'Cryptid Field Notes',
        level: 1,
        description:
          'The cryptid scholar maintains a detailed field journal. Each time she successfully identifies a new creature type, she records it. She gains a cumulative +1 bonus (maximum +5) on attack rolls and saves against creature types she has cataloged for at least 1 week.',
      },
      {
        name: 'Debunk and Exploit',
        level: 4,
        description:
          "When the cryptid scholar identifies a creature's special abilities (via a successful Knowledge check), she can spend 1 inspiration point to immediately determine one weakness or vulnerability of that creature as a free action.",
      },
      {
        name: 'Impossible Anatomy',
        level: 9,
        description:
          "The cryptid scholar's studied strike deals full precision damage against creatures normally immune to it (such as oozes, plants, and constructs) by targeting the specific physiological quirks she has cataloged.",
      },
    ],
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
  },

  // ──────────────────────────────────────────────
  // 12. Mastermind
  // ──────────────────────────────────────────────
  {
    name: 'Mastermind',
    className: 'Investigator',
    description:
      'The mastermind trades personal investigation for orchestrating others, building networks of agents and directing operations from behind the scenes. She gives up some direct combat ability in exchange for powerful leadership and information-brokering capabilities.',
    replacedFeatures: ['Poison Lore', 'Poison Resistance', 'Poison Immunity', 'Swift Alchemy'],
    modifiedFeatures: ['Studied Combat', 'Inspiration'],
    newFeatures: [
      {
        name: 'Agency Network',
        level: 1,
        description:
          'The mastermind begins play with a network of three informants who provide information on any one topic per week at no cost. At 5th, 10th, and 15th level, she gains three additional informants who become more specialized in nature.',
      },
      {
        name: 'Direct Agent',
        level: 3,
        description:
          "As a standard action, the mastermind can grant an ally within 30 feet who can see or hear her the benefit of her Studied Combat bonus against the mastermind's current studied target for a number of rounds equal to her Intelligence modifier.",
      },
      {
        name: 'Countermeasures',
        level: 5,
        description:
          'The mastermind spends 1 inspiration point to designate a location or route as "secured." For 24 hours, she and her allies gain a +4 bonus on Perception checks and cannot be surprised in that area.',
      },
      {
        name: 'Five Moves Ahead',
        level: 9,
        description:
          "At the start of each day, the mastermind may designate one creature she knows exists. She gains a +2 competence bonus on all d20 rolls made against that creature's schemes, minions, or direct actions.",
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 13. Profiler
  // ──────────────────────────────────────────────
  {
    name: 'Profiler',
    className: 'Investigator',
    description:
      "The profiler is a specialized investigator who focuses on understanding criminal psychology and building psychological profiles of suspects and targets. She trades hands-on trap expertise for mental modeling capabilities that let her anticipate a studied target's behavior.",
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Studied Combat', 'Inspiration'],
    newFeatures: [
      {
        name: 'Build a Profile',
        level: 1,
        description:
          'By observing or studying a creature for 10 minutes and succeeding at a DC 15 Sense Motive check, the profiler builds a psychological profile. She gains a +2 bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks against the profiled creature.',
      },
      {
        name: 'Predict Behavior',
        level: 3,
        description:
          'Once per day per target the profiler has profiled, she can predict one action the target will take in the next hour with 70% accuracy (determined by the GM). On a successful prediction, she gains a +4 bonus on the next check made relevant to that action.',
      },
      {
        name: 'Signature Analysis',
        level: 5,
        description:
          'The profiler can link crimes or events to a known perpetrator by spending 1 hour examining evidence and succeeding on a DC 20 Knowledge (local) check. On success, she learns whether a specific person committed or is implicated in a given act.',
      },
      {
        name: 'Inside the Mind',
        level: 11,
        description:
          "The profiler's Studied Combat bonus applies even when she cannot directly observe a studied creature, as long as she has a complete profile on it and it is within 100 feet.",
      },
    ],
    source: 'Pathfinder Player Companion: Dirty Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 14. Relic Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Relic Hunter',
    className: 'Investigator',
    description:
      'The relic hunter is an investigator who blends investigative skill with divine knowledge, working alongside religious institutions to track down holy (and unholy) artifacts. She trades poison expertise for divine sensitivity and knowledge of sacred lore.',
    replacedFeatures: ['Poison Lore', 'Poison Resistance', 'Poison Immunity'],
    modifiedFeatures: ['Alchemy', 'Investigator Talents'],
    newFeatures: [
      {
        name: 'Divine Sensitivity',
        level: 1,
        description:
          'The relic hunter automatically detects active divine magic within 30 feet as if using detect magic, and can spend 1 inspiration point to identify the deity or faith associated with any divine magical item or effect.',
      },
      {
        name: 'Sacred Research',
        level: 1,
        description:
          'The relic hunter adds Knowledge (religion) and Knowledge (history) to the list of skills she can use inspiration on without spending a talent and gains a +2 bonus on both skills.',
      },
      {
        name: 'Attune to Relic',
        level: 4,
        description:
          'The relic hunter can attune to one divine artifact per investigator level at any given time. She treats attuned relics as if she met all alignment prerequisites and gains a +1 bonus on saves while holding or wearing an attuned item.',
      },
      {
        name: 'Relic Lore',
        level: 7,
        description:
          'By studying a divine artifact for 1 hour, the relic hunter learns all of its command words, functions, and history as if she had cast legend lore on it. She can share this knowledge with others by spending 10 minutes in explanation.',
      },
    ],
    source: 'Pathfinder Player Companion: Chronicle of Legends',
  },
];
