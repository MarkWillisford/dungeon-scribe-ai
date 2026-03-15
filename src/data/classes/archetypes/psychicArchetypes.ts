import { ArchetypeData } from '../types';

export const PSYCHIC_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Amnesiac
  // ──────────────────────────────────────────────
  {
    name: 'Amnesiac',
    className: 'Psychic',
    description:
      'The amnesiac psychic has lost all memory of her past life, and her psychic powers are unstable and unpredictable as a result. She does not select a discipline at 1st level; instead she randomly generates her spells known and phrenic amplifications each day, representing her fragmented and recovering mental state.',
    replacedFeatures: ['Psychic Discipline', 'Discipline Spells', 'Discipline Powers'],
    modifiedFeatures: ['Phrenic Pool', 'Phrenic Amplifications'],
    newFeatures: [
      {
        name: 'Lost Memories',
        level: 1,
        description:
          'The amnesiac does not choose a discipline. Each day when she prepares spells, she randomly determines one discipline from the full psychic discipline list (roll 1d10 or GM determines). She gains the discipline spells for that discipline for that day only, treating it as her active discipline.',
      },
      {
        name: 'Scrambled Amplifications',
        level: 1,
        description:
          'The amnesiac randomly determines one phrenic amplification each day from the full amplification list rather than choosing. At 3rd level and every 3 levels thereafter, she gains one additional random amplification for that day.',
      },
      {
        name: 'Flash of Insight',
        level: 5,
        description:
          'Once per day, the amnesiac can attempt to recover a memory as a full-round action. On a successful concentration check (DC 15 + her level), she may select her discipline and one amplification for that day rather than rolling randomly, as a fragment of her true self surfaces.',
      },
      {
        name: 'Identity Reclaimed',
        level: 13,
        description:
          "The amnesiac permanently recovers enough of her past to select a single fixed discipline. She gains that discipline's powers as if she were a standard psychic, while retaining the ability to randomly generate a secondary set of amplifications each morning.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 2. Dream Scholar
  // ──────────────────────────────────────────────
  {
    name: 'Dream Scholar',
    className: 'Psychic',
    description:
      'The dream scholar draws her psychic power from the dream realm, using sleep and the subconscious mind as the source of her abilities. She gains unique dream-themed spells and the ability to enter and affect the dreams of others, trading some waking-world mental acuity for deep oneiric mastery.',
    replacedFeatures: ['Psychic Discipline', 'Discipline Powers'],
    modifiedFeatures: ['Discipline Spells', 'Phrenic Pool'],
    newFeatures: [
      {
        name: 'Dream Discipline',
        level: 1,
        description:
          "The dream scholar's discipline is always Dream. She adds dream-themed spells to her spell list (sleep, dream, nightmare, modify memory, and similar effects) and treats her caster level as 1 higher for these spells. She must sleep at least 8 hours to prepare spells and gains a +2 bonus on concentration checks during this preparation.",
      },
      {
        name: 'Dreamwalker',
        level: 1,
        description:
          'The dream scholar can enter a meditative trance during a long rest to send her consciousness into the Dimension of Dreams. While dreamwalking, she can communicate telepathically with any sleeping creature within 1 mile per psychic level, and can observe but not affect dream content.',
      },
      {
        name: 'Dream Weave',
        level: 5,
        description:
          "The dream scholar can spend 2 points from her phrenic pool when casting a mind-affecting spell to have that spell trigger during the target's next sleep rather than immediately, delaying the effect by up to 24 hours. The target gets no indication the spell was cast.",
      },
      {
        name: 'Lucid Body',
        level: 13,
        description:
          'The dream scholar can split her consciousness at will, leaving her body in a dreamlike trance while her mind acts independently. She gains the ability to use dream travel (as per the dream travel spell) once per day as a spell-like ability and is immune to sleep effects.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 3. Formless Savant
  // ──────────────────────────────────────────────
  {
    name: 'Formless Savant',
    className: 'Psychic',
    description:
      'The formless savant has transcended normal psychic discipline by dissolving the boundaries of selfhood, her psychic power emanating from a shattered or deliberately formless ego. She trades structured discipline powers for volatile but powerful surges of undirected psychic energy that can reshape reality unpredictably.',
    replacedFeatures: ['Psychic Discipline', 'Discipline Powers', 'Discipline Spells'],
    modifiedFeatures: ['Phrenic Pool', 'Phrenic Amplifications'],
    newFeatures: [
      {
        name: 'Ego Dissolution',
        level: 1,
        description:
          "The formless savant has no fixed discipline. She may prepare spells from any psychic discipline's spell list, but treats her caster level as 1 lower for spells from any single discipline list. She gains a +2 bonus on saves against mind-affecting effects due to her diffuse sense of self.",
      },
      {
        name: 'Psychic Surge',
        level: 1,
        description:
          'Once per day per 3 psychic levels, the formless savant can unleash an uncontrolled surge of psychic energy as a standard action, dealing 1d6 points of psychic damage per psychic level in a 30-foot burst (Will DC 10 + half level + Intelligence modifier for half). She cannot predict or control the exact effect.',
      },
      {
        name: 'Formless Amplification',
        level: 3,
        description:
          'The formless savant may select any phrenic amplification regardless of discipline prerequisites. When she applies an amplification, she may spend 1 additional phrenic pool point to apply a second amplification from any other list to the same spell.',
      },
      {
        name: 'Void Mind',
        level: 11,
        description:
          "The formless savant's ego is so diffuse that she becomes immune to charm effects, possession, and any ability that requires targeting a coherent sense of identity. She can deliberately reform her ego briefly as a swift action to allow beneficial mind-affecting spells to affect her for one round.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 4. Mutation Mind
  // ──────────────────────────────────────────────
  {
    name: 'Mutation Mind',
    className: 'Psychic',
    description:
      'The mutation mind channels psychic energy directly into her body, physically warping herself through mental power rather than limiting her abilities to the realm of thought. She trades traditional discipline powers for grotesque physical mutations that enhance her combat capability and survivability.',
    replacedFeatures: ['Discipline Powers', 'Psychic Discipline'],
    modifiedFeatures: ['Phrenic Pool', 'Spells'],
    newFeatures: [
      {
        name: 'Psychic Mutation',
        level: 1,
        description:
          'At 1st level and every odd level thereafter, the mutation mind manifests a physical mutation powered by psychic energy. She may choose from the following: extra limb (grants an additional attack at -5 penalty), hardened skin (+2 natural armor), or sensory organ (gains darkvision 30 feet or tremorsense 15 feet). Each mutation is a constant effect.',
      },
      {
        name: 'Accelerated Mutation',
        level: 3,
        description:
          'The mutation mind can spend 2 phrenic pool points as a swift action to temporarily manifest an additional mutation for a number of rounds equal to her Intelligence modifier. The temporary mutation dissolves at the end of its duration, leaving physical residue that imposes a -1 penalty on Charisma checks for 24 hours.',
      },
      {
        name: 'Directed Evolution',
        level: 7,
        description:
          'The mutation mind can reshape existing mutations rather than always adding new ones. As a full-round action, she can dismiss one mutation and manifest a different mutation in its place. This process deals 1d4 points of Constitution damage each time it is used, recoverable normally.',
      },
      {
        name: 'Apex Form',
        level: 15,
        description:
          'The mutation mind can enter a fully mutated apex form once per day for a number of rounds equal to her psychic level. In this form all her mutations are enhanced (bonuses doubled, additional attacks granted at no penalty) and she gains fast healing 5. Returning to normal form is a free action but leaves her staggered for 1 round.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 5. Overmind
  // ──────────────────────────────────────────────
  {
    name: 'Overmind',
    className: 'Psychic',
    description:
      'The overmind has developed her telepathic abilities to such an extent that she can link multiple minds into a shared consciousness network, acting as the hub of a mental collective. She trades individual discipline powers for the ability to share spells, senses, and actions across her linked network of allies.',
    replacedFeatures: ['Discipline Powers', 'Telepathy'],
    modifiedFeatures: ['Psychic Discipline', 'Phrenic Pool'],
    newFeatures: [
      {
        name: 'Mind Network',
        level: 1,
        description:
          'The overmind can maintain a telepathic network linking a number of willing creatures equal to her Intelligence modifier. All linked creatures can communicate telepathically with each other and with the overmind at will. The network has a range of 100 feet per psychic level and the overmind knows the location and rough emotional state of all linked creatures.',
      },
      {
        name: 'Shared Senses',
        level: 5,
        description:
          "As a swift action, the overmind can tap into the senses of any creature in her mind network, perceiving through that creature's eyes, ears, and other senses for 1 round per psychic level. She can only access one creature's senses at a time, but can switch as a free action on her turn.",
      },
      {
        name: 'Coordinated Strike',
        level: 9,
        description:
          'The overmind can spend 3 points from her phrenic pool to grant all creatures in her mind network a single free action (move action or standard action) on her turn, as she coordinates their actions through the mental link. Each creature still acts on its own turn normally.',
      },
      {
        name: 'Hive Ascendant',
        level: 17,
        description:
          "The overmind's mind network can now span 1 mile per psychic level and include any number of willing creatures. Once per day, she can merge the network into a single distributed consciousness for 1 minute, granting all members her Intelligence and Wisdom modifiers on saves and allowing any member to cast her spells using their own actions.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 6. Psychic Marauder
  // ──────────────────────────────────────────────
  {
    name: 'Psychic Marauder',
    className: 'Psychic',
    description:
      "The psychic marauder focuses her mental power on assault and domination, using her phrenic abilities offensively rather than defensively. She trades the contemplative aspects of psychic discipline for brutal psychic attacks that devastate foes' minds, often leaving permanent cognitive damage.",
    replacedFeatures: ['Psychic Consciousness', 'Dual Consciousness'],
    modifiedFeatures: ['Phrenic Pool', 'Phrenic Amplifications', 'Discipline Powers'],
    newFeatures: [
      {
        name: 'Mental Assault',
        level: 1,
        description:
          'The psychic marauder can spend 1 phrenic pool point as a standard action to launch a focused mental assault against one creature within 30 feet. The target takes 1d6 points of Intelligence damage (Will DC 10 + half level + Intelligence modifier negates). At 5th level this increases to 2d6, and at 10th to 3d6.',
      },
      {
        name: 'Aggressive Amplifications',
        level: 1,
        description:
          'The psychic marauder can select offensive phrenic amplifications (Intense Focus, Psychic Interference, Will of the Dead) without restriction and treats the save DC of amplification-enhanced spells as 2 higher when used to damage or incapacitate foes.',
      },
      {
        name: 'Mindreave',
        level: 7,
        description:
          'Once per day when the psychic marauder successfully affects a creature with a mind-affecting spell or her Mental Assault, she can reave a piece of memory from the target as a free action. The target loses access to one skill (chosen by the marauder) for 24 hours as if they had never trained in it.',
      },
      {
        name: 'Psychic Devastation',
        level: 15,
        description:
          "When the psychic marauder reduces a creature's Intelligence, Wisdom, or Charisma score to 0 through her abilities, the creature does not fall unconscious from ability damage but instead becomes fully dominated (as dominate monster) until the score is restored.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 7. Terror Weaver
  // ──────────────────────────────────────────────
  {
    name: 'Terror Weaver',
    className: 'Psychic',
    description:
      "The terror weaver specializes in the emotion discipline's fear-based abilities, weaving tapestries of primal dread that leave foes paralyzed and vulnerable. She trades broad emotional manipulation for deep mastery of terror, gaining enhanced fear effects and the ability to permanently scar the psyches of her victims.",
    replacedFeatures: ['Psychic Discipline', 'Discipline Powers'],
    modifiedFeatures: ['Discipline Spells', 'Phrenic Pool'],
    newFeatures: [
      {
        name: 'Fear Discipline',
        level: 1,
        description:
          "The terror weaver's discipline is always Emotion (Fear). She automatically adds all fear-subschool spells to her spell list regardless of spell level and treats her caster level as 2 higher for fear-based spells. The save DC of her fear spells increases by 1.",
      },
      {
        name: 'Terrifying Gaze',
        level: 1,
        description:
          'The terror weaver can use her gaze as a standard action to target one creature within 30 feet with a fear effect (shaken, Will DC 10 + half level + Intelligence modifier negates). At 5th level, failing by 5 or more causes the target to become frightened instead.',
      },
      {
        name: 'Lingering Terror',
        level: 5,
        description:
          'When the terror weaver causes a creature to become frightened or panicked, the condition lingers for an additional number of rounds equal to her Intelligence modifier even after the spell or effect expires. Additionally, any creature that witnesses her terror effects must succeed at a Will save or become shaken for 1 round.',
      },
      {
        name: 'Scarred Psyche',
        level: 13,
        description:
          "Once per day, the terror weaver can permanently brand a phobia into a target's mind. The target must currently be frightened or panicked. On a failed Will save (DC 15 + Intelligence modifier), the target gains a permanent phobia related to what it feared, suffering the shaken condition whenever it encounters the source of that fear.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 8. Thought Master
  // ──────────────────────────────────────────────
  {
    name: 'Thought Master',
    className: 'Psychic',
    description:
      'The thought master has perfected control over the minds of others, elevating the telepathy and thought-reading aspects of the psychic class into an art form. She trades defensive mental disciplines for unparalleled penetration of mental defenses and the ability to rewrite memories and personalities.',
    replacedFeatures: ['Psychic Consciousness', 'Dual Consciousness'],
    modifiedFeatures: ['Telepathy', 'Phrenic Pool', 'Discipline Powers'],
    newFeatures: [
      {
        name: 'Penetrating Telepathy',
        level: 1,
        description:
          "The thought master's telepathy ignores non-magical barriers and works on creatures that are normally immune to telepathy (such as mindless creatures, which receive limited impressions). Her surface thoughts reading ability (from the Telepathy discipline) works passively as a constant effect when within 30 feet of intelligent creatures.",
      },
      {
        name: 'Memory Palace',
        level: 3,
        description:
          'The thought master can spend 1 hour accessing a creature\'s memories (target must be willing, helpless, or under a charm effect). She can extract specific memories as if using the memory lapse spell and store up to one memory per psychic level in her mental "palace" for later review.',
      },
      {
        name: 'Rewrite',
        level: 9,
        description:
          'Once per day, the thought master can spend 10 minutes in direct telepathic contact with a willing or helpless creature to permanently alter one memory (as modify memory with no spell level limitation on the altered duration). The creature is unaware of the alteration unless magically prompted.',
      },
      {
        name: 'Identity Override',
        level: 17,
        description:
          "The thought master can attempt to permanently overwrite a creature's personality. After 1 hour of contact with a willing or helpless creature, she may attempt a Wisdom-based psychic check opposed by the target's Will save. On success, the target gains a new personality overlay of the thought master's choosing that persists indefinitely without further maintenance.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 9. Phantom Blade (Psychic)
  // ──────────────────────────────────────────────
  {
    name: 'Phantom Blade',
    className: 'Psychic',
    description:
      'The phantom blade psychic manifests her psychic power as a blade of solid thought-matter, combining mental spellcasting with formidable melee combat in a manner analogous to the magus. She trades standard phrenic amplifications for the ability to channel her spells through her psychic blade.',
    replacedFeatures: ['Phrenic Amplifications', 'Psychic Consciousness'],
    modifiedFeatures: ['Phrenic Pool', 'Spells'],
    newFeatures: [
      {
        name: 'Psychic Blade',
        level: 1,
        description:
          "The phantom blade can manifest a blade of crystallized psychic energy as a standard action. This functions as a masterwork longsword that deals psychic damage instead of physical damage, using the psychic's Intelligence modifier in place of Strength for attack and damage rolls. The blade persists until dismissed or the psychic is rendered unconscious.",
      },
      {
        name: 'Spell Strike',
        level: 2,
        description:
          "The phantom blade can deliver touch spells through her psychic blade as part of a melee attack, similar to the magus's spellstrike ability. When she delivers a spell this way, she may spend 1 phrenic pool point to deliver the spell as part of a full-attack action rather than only on the first attack.",
      },
      {
        name: 'Blade Amplification',
        level: 5,
        description:
          'The phantom blade can spend phrenic pool points to temporarily enchant her psychic blade. Each point spent grants a +1 enhancement bonus to attack and damage (maximum +5) for 1 round. She may also spend 2 points to add special weapon properties (flaming, keen, etc.) for 1 minute.',
      },
      {
        name: 'Mind Slash',
        level: 11,
        description:
          "When the phantom blade strikes a creature with her psychic blade, she may spend 2 phrenic pool points to deal additional Intelligence damage equal to her Intelligence modifier alongside the attack's normal damage. Creatures immune to mind-affecting effects are immune to this Intelligence damage.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 10. Psychic Detective
  // ──────────────────────────────────────────────
  {
    name: 'Psychic Detective',
    className: 'Psychic',
    description:
      'The psychic detective applies her mental abilities to investigation and information gathering, acting as an occult investigator who can read crime scenes and extract truth from witnesses with equal skill. She trades offensive psychic power for an expanded array of divination abilities and investigative class skills.',
    replacedFeatures: ['Discipline Powers', 'Major Amplification'],
    modifiedFeatures: ['Psychic Discipline', 'Phrenic Pool', 'Skills'],
    newFeatures: [
      {
        name: 'Investigative Mind',
        level: 1,
        description:
          'The psychic detective adds Bluff, Diplomacy, Disable Device, Disguise, Knowledge (local), Linguistics, Perception, and Sense Motive to her list of class skills. She gains a +2 bonus on these skills and may use her Intelligence modifier in place of Charisma for Diplomacy and Bluff checks when dealing with matters she has psionically investigated.',
      },
      {
        name: 'Psychometric Reading',
        level: 1,
        description:
          'By touching an object or location, the psychic detective can attempt a Psychometry check (Intelligence + psychic level vs. DC 15 + age of event in decades) to read psychic impressions left behind. Successful readings reveal emotional impressions, approximate timing, and the general identity of creatures involved in significant events at the location.',
      },
      {
        name: 'Truth Compulsion',
        level: 5,
        description:
          'The psychic detective can spend 2 phrenic pool points when casting a mind-affecting divination spell to impose a compulsion to truthfulness on the target. For the duration, the target must make a Will save (DC 10 + half level + Intelligence modifier) to deliberately lie or withhold relevant information.',
      },
      {
        name: 'Cold Case',
        level: 11,
        description:
          'The psychic detective can perform a 1-hour ritual at the scene of a past event (crime, battle, significant occurrence) to reconstruct a full psychic record of what occurred there. This functions as the retrocognition occult skill unlock but without the skill check, automatically succeeding as long as the event occurred within 1 year per psychic level.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 11. Bounded (Psychic)
  // ──────────────────────────────────────────────
  {
    name: 'Bounded',
    className: 'Psychic',
    description:
      'The bounded psychic has had her mental abilities restricted by external forces — a magical binding, cultural suppression, or traumatic psychological conditioning — and must work within strict limitations that paradoxically focus and intensify her power. She gains access to fewer spells but those she can cast are dramatically more powerful.',
    replacedFeatures: ['Psychic Discipline', 'Discipline Spells', 'Discipline Powers'],
    modifiedFeatures: ['Spells', 'Phrenic Pool'],
    newFeatures: [
      {
        name: 'Binding',
        level: 1,
        description:
          'The bounded psychic selects three spell schools at 1st level that are forbidden to her. She cannot prepare or cast spells from these schools under any circumstances. In exchange, her remaining spells are cast at +2 caster level and the save DCs of her accessible spells increase by 1.',
      },
      {
        name: 'Focused Power',
        level: 1,
        description:
          "Because the bounded psychic's mental energy cannot flow into forbidden channels, her phrenic pool is 50% larger (rounded down) than normal. Additionally, phrenic amplifications she applies to spells from her permitted schools cost 1 fewer phrenic pool point (minimum 1).",
      },
      {
        name: 'Shatter Binding',
        level: 9,
        description:
          'Once per day, the bounded psychic can temporarily break one of her bindings with a burst of psychic effort. She can access one forbidden spell school for 1 round per psychic level, but doing so deals 2d6 points of psychic damage to herself and shaken for the same duration from the mental strain.',
      },
      {
        name: 'Transcendent Break',
        level: 17,
        description:
          'Once per week, the bounded psychic can permanently break one of her three bindings, gaining unrestricted access to that school but losing the focused power bonuses she gained from the binding system. Once all bindings are broken, she becomes a standard psychic with a permanent +1 bonus to all spell DCs.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 12. Psychic Searcher
  // ──────────────────────────────────────────────
  {
    name: 'Psychic Searcher',
    className: 'Psychic',
    description:
      'The psychic searcher extends her mental awareness outward rather than inward, using her psychic sensitivity to detect hidden truths, lost objects, and concealed information across great distances. She trades close-range mental combat for long-range psychic perception and divination mastery.',
    replacedFeatures: ['Dual Consciousness', 'Telepathic Bond'],
    modifiedFeatures: ['Telepathy', 'Phrenic Pool', 'Discipline Powers'],
    newFeatures: [
      {
        name: 'Extended Awareness',
        level: 1,
        description:
          "The psychic searcher's natural sense of her surroundings extends to 60 feet, providing blindsense (emotional signatures only) at that range. She automatically detects strong emotions and psychic activity within this radius and cannot be surprised by creatures with Intelligence 3 or higher within range.",
      },
      {
        name: 'Psychic Dowsing',
        level: 3,
        description:
          'The psychic searcher can concentrate for 1 minute to locate a specific creature, object, or type of energy within 1 mile per psychic level. She must have personally encountered the target before. On a successful Spellcraft check (DC 15), she determines direction and approximate distance.',
      },
      {
        name: 'Scrying Pool',
        level: 7,
        description:
          "The psychic searcher can use any reflective surface as a scrying focus, requiring no material component for the scrying spell. When she scrys on a target she has psychically touched (skin-to-skin contact) within the past year, her caster level is treated as 5 higher for determining the spell's effectiveness.",
      },
      {
        name: 'Omniscient Search',
        level: 15,
        description:
          "Once per day, the psychic searcher can open her awareness to perceive anything connected to a single question, functioning as the legend lore spell with a casting time of 10 minutes rather than days. The information revealed may be cryptic but is always psychically accurate to the extent the universe's accumulated mental impressions allow.",
      },
    ],
    source: 'Occult Adventures',
  },
];
