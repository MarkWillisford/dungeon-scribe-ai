import { ArchetypeData } from '../types';

export const MESMERIST_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Cult Master
  // ──────────────────────────────────────────────
  {
    name: 'Cult Master',
    className: 'Mesmerist',
    description:
      'The cult master uses hypnotic power not to influence individuals but to bind groups of followers into a fanatical collective. She trades some of her individual-targeting tricks for abilities that affect multiple creatures simultaneously and builds a loyal coterie of devotees.',
    replacedFeatures: ['Consummate Liar', 'Towering Ego'],
    modifiedFeatures: ['Hypnotic Stare', 'Mesmerist Tricks', 'Bold Stare'],
    newFeatures: [
      {
        name: 'Cult Indoctrination',
        level: 1,
        description:
          'The cult master can spend 1 minute performing a hypnotic ritual on a willing or helpless creature to add it to her cult. Cult members are treated as if under a permanent suggestion to follow her orders and gain a +2 morale bonus on saves against effects that would turn them against her.',
        effects: [],
      },
      {
        name: 'Mass Hypnotic Stare',
        level: 3,
        description:
          'The cult master can maintain her Hypnotic Stare against a number of creatures equal to her Charisma modifier (minimum 1) simultaneously, though each creature beyond the first imposes a -1 penalty on her concentration checks.',
        effects: [],
      },
      {
        name: 'Flock Mentality',
        level: 7,
        description:
          'Cult members within 30 feet of the cult master gain a +2 morale bonus on attack rolls and saves against fear when at least two other cult members are adjacent to them. They also share one use of any mesmerist trick implanted on a cult member as a free action.',
        effects: [],
      },
      {
        name: 'Unbreakable Devotion',
        level: 11,
        description:
          'Cult members within 60 feet of the cult master are immune to mind-affecting effects from sources other than the cult master herself, and the cult master can dismiss any enchantment effect on a cult member as a swift action.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 2. Esoteric
  // ──────────────────────────────────────────────
  {
    name: 'Esoteric',
    className: 'Mesmerist',
    description:
      'The esoteric mesmerist delves into the hidden connections between the mind and the occult, supplementing hypnotic talents with psychic resonances drawn from strange lore. She trades some mesmerist tricks for occult skill unlocks and the ability to tap into object psychometry.',
    replacedFeatures: ['Manifold Tricks', 'Mental Potency'],
    modifiedFeatures: ['Mesmerist Tricks', 'Bold Stare', 'Touch Treatment'],
    newFeatures: [
      {
        name: 'Occult Knowledge',
        level: 1,
        description:
          'The esoteric gains all occult skill unlocks (as per the Psychic Sensitivity feat) as bonus abilities. She can use these skill unlocks without spending points from a spell pool, using her mesmerist level as her effective caster level.',
        effects: [],
      },
      {
        name: 'Object Reading',
        level: 2,
        description:
          "The esoteric can examine an object for 1 minute to read its psychic impressions, learning one piece of information per 2 mesmerist levels about the object's history, last owner, or significant events associated with it.",
        effects: [],
      },
      {
        name: 'Esoteric Stare',
        level: 5,
        description:
          "When the esoteric's Hypnotic Stare is active against a creature, she can read its surface thoughts as a free action once per round (no save) and gains a +2 insight bonus on Bluff, Diplomacy, and Intimidate checks against that creature.",
        effects: [],
      },
      {
        name: 'Psychic Resonance',
        level: 9,
        description:
          'The esoteric can charge a touched object with psychic energy as a standard action, allowing the next creature to handle the object within 24 hours to be affected as if by one of her implanted mesmerist tricks without any action required.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 3. Eyebiter
  // ──────────────────────────────────────────────
  {
    name: 'Eyebiter',
    className: 'Mesmerist',
    description:
      "The eyebiter is a mesmerist who channels her hypnotic power through her familiar — a creature inhabiting or replacing one of her own eyes. She trades some mesmerist tricks and bold stare improvements for abilities tied to her eye familiar's supernatural sight.",
    replacedFeatures: ['Consummate Liar', 'Glib Lie'],
    modifiedFeatures: ['Hypnotic Stare', 'Bold Stare', 'Painful Stare'],
    newFeatures: [
      {
        name: 'Eye Familiar',
        level: 1,
        description:
          "The eyebiter bonds with a small creature that inhabits her eye socket or melds with her eye. This familiar grants darkvision 60 ft., a +4 bonus on Perception checks, and the ability to share the eyebiter's field of vision from up to 100 feet away. The familiar uses standard familiar statistics.",
        effects: [],
      },
      {
        name: 'Shared Vision',
        level: 3,
        description:
          "The eyebiter can see through her familiar's eyes as a free action, and while doing so her Hypnotic Stare can be delivered through the familiar's line of sight rather than her own. This allows her to maintain a stare on creatures she cannot personally see.",
        effects: [],
      },
      {
        name: 'Eye Strike',
        level: 7,
        description:
          "Once per round when the eyebiter's Painful Stare deals damage, the eye familiar launches itself at the target as a free attack, dealing 1d6 piercing damage and potentially blinding the target for 1 round (Fortitude DC 10 + half mesmerist level + CHA modifier negates the blindness).",
        effects: [],
      },
      {
        name: 'All-Seeing Stare',
        level: 11,
        description:
          "The eyebiter's Hypnotic Stare ignores cover and concealment as long as she can see the target through any magical or mundane means, including her familiar's shared vision. She also gains true seeing for 1 round per mesmerist level per day as a swift action.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 4. Flimflam Artist
  // ──────────────────────────────────────────────
  {
    name: 'Flimflam Artist',
    className: 'Mesmerist',
    description:
      'The flimflam artist is a con artist and grifter who uses mesmerist powers to enhance elaborate deceptions and swindles rather than combat-focused hypnosis. She trades several combat-oriented abilities for superior social manipulation tools and the capacity to maintain multiple simultaneous deceptions.',
    replacedFeatures: ['Towering Ego', 'Rule Minds'],
    modifiedFeatures: ['Consummate Liar', 'Mesmerist Tricks', 'Painful Stare'],
    newFeatures: [
      {
        name: 'The Long Con',
        level: 1,
        description:
          'The flimflam artist can maintain a complex deception on multiple creatures simultaneously. She can have a number of creatures under active Bluff-sustained false beliefs equal to her Charisma modifier, and extending these beliefs costs only a swift action per day rather than repeated checks.',
        effects: [],
      },
      {
        name: 'Shell Game',
        level: 3,
        description:
          'As a standard action, the flimflam artist can perform a distracting trick or sleight of hand that forces all creatures within 30 feet to succeed on a Will save (DC 10 + half mesmerist level + CHA modifier) or be unable to accurately recall the positions or identities of up to three objects or people she designates for 1 minute.',
        effects: [],
      },
      {
        name: 'False Persona',
        level: 5,
        description:
          'The flimflam artist can adopt a convincing false identity backed by subtle hypnotic suggestion. Creatures she has interacted with for at least 1 minute accept her assumed persona as genuine unless they succeed on a Will save or a Sense Motive check opposed by her Bluff.',
        effects: [],
      },
      {
        name: 'Mark the Sucker',
        level: 9,
        description:
          'The flimflam artist selects one creature per day as her "mark." She gains a +4 bonus on all Bluff, Diplomacy, and Sleight of Hand checks against the mark, and the mark\'s Will saves against her mesmerist abilities are made at a -2 penalty.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 5. Gastrophrenic Mesmerist
  // ──────────────────────────────────────────────
  {
    name: 'Gastrophrenic Mesmerist',
    className: 'Mesmerist',
    description:
      'The gastrophrenic mesmerist channels psychic power through her gastrointestinal tract, using unusual biological resonances to project hypnotic effects. She trades typical touch-based and stare-based delivery methods for sound-based projections emanating from her abdomen.',
    replacedFeatures: ['Touch Treatment', 'Painful Stare'],
    modifiedFeatures: ['Hypnotic Stare', 'Mesmerist Tricks', 'Bold Stare'],
    newFeatures: [
      {
        name: 'Belly Voice',
        level: 1,
        description:
          'The gastrophrenic mesmerist can project her voice as if from any location within 30 feet as a free action (as the ventriloquism spell). This projection carries hypnotic resonance; creatures who hear the voice and fail a Will save are treated as if they had been subject to her Hypnotic Stare for 1 round.',
        effects: [],
      },
      {
        name: 'Resonant Trick',
        level: 2,
        description:
          'The gastrophrenic mesmerist can implant mesmerist tricks through sound rather than touch, affecting any creature within 30 feet that can hear her as a standard action. Sonic-delivered tricks have their save DC increased by 2.',
        effects: [],
      },
      {
        name: 'Gut Feeling',
        level: 5,
        description:
          "The gastrophrenic mesmerist's digestive psychic connection grants her a +4 bonus on saving throws against nausea and disease, and she can spend 1 use of Hypnotic Stare per day to project a wave of psychic nausea affecting all enemies within 20 feet (Fortitude DC 10 + half mesmerist level + CHA modifier or nauseated for 1 round).",
        effects: [],
      },
      {
        name: 'Stomach Knot',
        level: 9,
        description:
          'By spending 1 use of her Hypnotic Stare as a standard action, the gastrophrenic mesmerist can inflict a crippling psychic stomach cramp on a creature within 30 feet. The creature is staggered for 1 round per mesmerist level (Will negates, DC 10 + half mesmerist level + CHA modifier).',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 6. Lore Seeker
  // ──────────────────────────────────────────────
  {
    name: 'Lore Seeker',
    className: 'Mesmerist',
    description:
      'The lore seeker uses hypnotic abilities to pry secrets from reluctant minds and artifacts, blending mesmerist talents with psychic investigation. She trades combat-focused abilities for enhanced information-gathering through hypnotic interrogation and psychic resonance reading.',
    replacedFeatures: ['Towering Ego', 'Rule Minds'],
    modifiedFeatures: ['Hypnotic Stare', 'Touch Treatment', 'Bold Stare'],
    newFeatures: [
      {
        name: 'Hypnotic Interrogation',
        level: 1,
        description:
          'The lore seeker can place a creature she has hypnotized into a compliant trance for 1 minute per mesmerist level. While in this trance, the creature answers questions truthfully as if affected by zone of truth and cannot lie unless it succeeds on a Will save (DC 10 + half mesmerist level + CHA modifier).',
        effects: [],
      },
      {
        name: 'Psychic Inquiry',
        level: 3,
        description:
          'The lore seeker adds Sense Motive, Knowledge (arcana), and Knowledge (history) to the list of skills she can use Hypnotic Stare bonuses for, and she can use her mesmerist level in place of ranks in these skills when gathering information through direct psychic contact.',
        effects: [],
      },
      {
        name: 'Memory Probe',
        level: 5,
        description:
          'Once per day as a full-round action, the lore seeker can probe the memories of a hypnotized or willing creature, accessing one specific memory or piece of information per 2 mesmerist levels. The creature is aware of the probe unless it fails a Will save.',
        effects: [],
      },
      {
        name: 'Stolen Secrets',
        level: 11,
        description:
          'After a successful Memory Probe, the lore seeker can retain extracted information as a +2 insight bonus on one Knowledge skill of her choice for 24 hours. She can have a maximum number of retained bonuses equal to her Charisma modifier.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 7. Soul Custodian
  // ──────────────────────────────────────────────
  {
    name: 'Soul Custodian',
    className: 'Mesmerist',
    description:
      'The soul custodian uses mesmerist talents to protect and preserve the souls of the living, warding companions against possession, soul-stealing, and death. She trades offensive tricks for protective abilities that shield allies from the most insidious psychic and spiritual threats.',
    replacedFeatures: ['Consummate Liar', 'Glib Lie', 'Mental Potency'],
    modifiedFeatures: ['Touch Treatment', 'Mesmerist Tricks', 'Bold Stare'],
    newFeatures: [
      {
        name: 'Soul Ward',
        level: 1,
        description:
          "The soul custodian can protect a willing creature's soul as a standard action, granting it a +4 sacred bonus on saving throws against death effects, energy drain, and possession for 1 hour per mesmerist level. She can maintain a number of soul wards equal to her Charisma modifier.",
        effects: [],
      },
      {
        name: 'Anti-Possession Stare',
        level: 3,
        description:
          "The soul custodian's Hypnotic Stare can be directed at a possessed creature; while staring at such a creature she forces the possessing entity to make a Will save each round (DC 10 + half mesmerist level + CHA modifier) or be expelled from the host body.",
        effects: [],
      },
      {
        name: 'Soul Anchor',
        level: 7,
        description:
          "Creatures under the soul custodian's Soul Ward cannot be killed outright by death effects, instead being reduced to -1 hit points and stabilized on their first failed save against such an effect per day. This protection resets each dawn.",
        effects: [],
      },
      {
        name: 'Guardian of the Departed',
        level: 13,
        description:
          'When a creature protected by Soul Ward dies within 60 feet of the soul custodian, she can spend an immediate action to hold the soul in stasis for up to 1 minute per mesmerist level. During this time, resurrection magic is twice as effective on the creature and the soul cannot be captured by negative energy or soul-stealing effects.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 8. Vexing Daredevil
  // ──────────────────────────────────────────────
  {
    name: 'Vexing Daredevil',
    className: 'Mesmerist',
    description:
      'The vexing daredevil combines mesmerist hypnosis with acrobatic daring, using distracting feats of physical prowess to deliver hypnotic effects and set up Painful Stare triggers. She trades some purely mental abilities for martial mobility and swashbuckling flair that keeps enemies off-balance.',
    replacedFeatures: ['Consummate Liar', 'Mental Potency'],
    modifiedFeatures: ['Hypnotic Stare', 'Painful Stare', 'Mesmerist Tricks'],
    newFeatures: [
      {
        name: 'Daring Feint',
        level: 1,
        description:
          'The vexing daredevil can feint as a move action rather than a standard action, and a successful feint also activates her Hypnotic Stare against the feinted creature for 1 round without requiring line of sight to have been maintained prior to the feint.',
        effects: [],
      },
      {
        name: 'Acrobatic Delivery',
        level: 2,
        description:
          'The vexing daredevil can deliver touch-range mesmerist tricks as part of an Acrobatics check to move through a threatened square. She does not provoke attacks of opportunity from a creature she implants a trick on in this manner.',
        effects: [],
      },
      {
        name: 'Pain and Poise',
        level: 5,
        description:
          'When the vexing daredevil triggers her Painful Stare, she can immediately take a 5-foot step as a free action even if she has already moved this turn. Additionally, Painful Stare deals an extra 1d6 damage against any creature that failed a saving throw against her abilities this round.',
        effects: [],
      },
      {
        name: 'Reckless Stare',
        level: 9,
        description:
          "Once per round when an enemy attacks the vexing daredevil and misses, she can immediately activate her Painful Stare against that attacker as an immediate action, dealing damage as if the stare had just been triggered by an ally's attack.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 9. Thought Eater
  // ──────────────────────────────────────────────
  {
    name: 'Thought Eater',
    className: 'Mesmerist',
    description:
      'The thought eater feeds on the psychic energy of conscious minds, draining mental resources from victims of her Hypnotic Stare to fuel her own abilities. She trades some social mesmerist abilities for a predatory psychic hunger that sustains and empowers her.',
    replacedFeatures: ['Consummate Liar', 'Glib Lie', 'Rule Minds'],
    modifiedFeatures: ['Hypnotic Stare', 'Painful Stare', 'Bold Stare'],
    newFeatures: [
      {
        name: 'Psychic Drain',
        level: 1,
        description:
          'When the thought eater triggers her Painful Stare, the target must also succeed on a Will save (DC 10 + half mesmerist level + CHA modifier) or lose one prepared spell or spell slot of the lowest level available. The thought eater gains 1 temporary hit point per spell level drained, lasting 1 hour.',
        effects: [],
      },
      {
        name: 'Consume Focus',
        level: 3,
        description:
          "Once per day per target, when a creature fails a saving throw against one of the thought eater's mesmerist abilities, she can drain its concentration, imposing a -4 penalty on all concentration checks and denying it the ability to ready actions for 1 round per mesmerist level.",
        effects: [],
      },
      {
        name: 'Mental Sustenance',
        level: 7,
        description:
          'The thought eater does not need to eat or sleep as long as she has drained at least one spell or psychic ability from a conscious creature in the past 24 hours. She also gains a +2 morale bonus on saving throws against mind-affecting effects.',
        effects: [],
      },
      {
        name: 'Devour Mind',
        level: 13,
        description:
          "Once per day as a full-round action against a creature under the thought eater's Hypnotic Stare, she can attempt to devour a significant memory or known spell. On a failed Will save, the creature permanently loses one memorized spell or prepared ability of up to 4th level (thought eater's choice), which the thought eater can use once herself as a spell-like ability within 24 hours.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 10. Mirror Mesmerist
  // ──────────────────────────────────────────────
  {
    name: 'Mirror Mesmerist',
    className: 'Mesmerist',
    description:
      "The mirror mesmerist specializes in illusions and deceptive reflections, turning the mesmerist's psychological toolkit toward creating mirror images and phantasmal doubles. She trades some social abilities for enhanced illusion magic and the ability to weaponize reflected perceptions.",
    replacedFeatures: ['Towering Ego', 'Mental Potency', 'Rule Minds'],
    modifiedFeatures: ['Hypnotic Stare', 'Mesmerist Tricks', 'Bold Stare'],
    newFeatures: [
      {
        name: 'Mirror Image',
        level: 1,
        description:
          'The mirror mesmerist can cast mirror image as a spell-like ability a number of times per day equal to her Charisma modifier (minimum 1), using her mesmerist level as the caster level. Images created by this ability last for 1 minute per mesmerist level.',
        effects: [],
      },
      {
        name: 'Reflected Stare',
        level: 3,
        description:
          'When the mirror mesmerist has mirror image active, her Hypnotic Stare can be directed from any of her active images rather than from herself, making it impossible to determine which image is the source of the stare without a successful Perception check (DC 10 + mesmerist level).',
        effects: [],
      },
      {
        name: 'Phantasmal Trick',
        level: 5,
        description:
          'The mirror mesmerist can implant a mesmerist trick through a mirror image. When that image is struck and destroyed, the trick is automatically triggered as if the creature that destroyed the image were the target.',
        effects: [],
      },
      {
        name: 'Hall of Mirrors',
        level: 11,
        description:
          'Once per day as a full-round action, the mirror mesmerist creates a 20-foot-radius field of psychic mirror images around herself lasting 1 round per mesmerist level. All creatures in the area except the mesmerist have a 50% miss chance on attacks and suffer the effects of her Hypnotic Stare automatically.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 11. Aberrant Mesmerist
  // ──────────────────────────────────────────────
  {
    name: 'Aberrant Mesmerist',
    className: 'Mesmerist',
    description:
      'The aberrant mesmerist has made contact with alien intelligences beyond the stars, warping her hypnotic abilities with unsettling non-Euclidean psychic resonances. She trades conventional social abilities for fear-based stare effects and the ability to impose madness on her victims.',
    replacedFeatures: ['Consummate Liar', 'Glib Lie', 'Towering Ego'],
    modifiedFeatures: ['Hypnotic Stare', 'Painful Stare', 'Bold Stare'],
    newFeatures: [
      {
        name: 'Alien Gaze',
        level: 1,
        description:
          "The aberrant mesmerist's Hypnotic Stare inflicts the shaken condition on the target (Will negates, DC 10 + half mesmerist level + CHA modifier) rather than imposing a Wisdom penalty. A target already shaken becomes frightened for 1 round.",
        effects: [],
      },
      {
        name: 'Maddening Whispers',
        level: 3,
        description:
          "When the aberrant mesmerist triggers her Painful Stare, the target hears maddening whispers and must succeed on a Will save or be confused for 1 round. On a natural 1, the target gains a permanent minor insanity (GM's discretion from the Occult Adventures list).",
        effects: [],
      },
      {
        name: 'Non-Euclidean Mind',
        level: 7,
        description:
          "The aberrant mesmerist's own mind has become partially alien and is immune to confusion, insanity, and the shaken condition from non-magical sources. She gains a +4 bonus on saving throws against mind-affecting effects from aberrations.",
        effects: [],
      },
      {
        name: 'From Beyond',
        level: 13,
        description:
          'Once per day as a standard action, the aberrant mesmerist can project an image of the alien intelligences she has contacted into the mind of a creature within 60 feet. The creature must succeed on a Will save (DC 10 + half mesmerist level + CHA modifier) or be permanently insane as the insanity spell.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 12. Psychic Wrestler
  // ──────────────────────────────────────────────
  {
    name: 'Psychic Wrestler',
    className: 'Mesmerist',
    description:
      'The psychic wrestler uses mesmerist power to dominate grapple contests, imposing mental shackles that restrain opponents as effectively as physical holds. She trades most social abilities for a combat-focused style that makes her an unexpectedly dangerous close-quarters combatant.',
    replacedFeatures: ['Consummate Liar', 'Glib Lie', 'Towering Ego', 'Rule Minds'],
    modifiedFeatures: ['Hypnotic Stare', 'Painful Stare', 'Mesmerist Tricks'],
    newFeatures: [
      {
        name: 'Psychic Hold',
        level: 1,
        description:
          'The psychic wrestler can initiate a grapple against any creature she has successfully used Hypnotic Stare against this round, using her mesmerist level + CHA modifier in place of her CMB. Creatures grappled by her cannot use Spellcraft or concentration without succeeding on a Will save first.',
        effects: [],
      },
      {
        name: 'Mind Lock',
        level: 3,
        description:
          'While grappling a creature under her Hypnotic Stare, the psychic wrestler can use her Painful Stare as a free action once per round, and the stare damage is doubled while a creature is grappled.',
        effects: [],
      },
      {
        name: 'Psychic Choke',
        level: 7,
        description:
          'While maintaining a grapple, the psychic wrestler can attempt to render a creature unconscious using psychic pressure rather than physical strangulation. Each round of maintained grapple, the creature must succeed on a Will save (DC 10 + half mesmerist level + CHA modifier) or lose 1d4 Wisdom. At 0 Wisdom, the creature falls unconscious.',
        effects: [],
      },
      {
        name: 'Iron Grip of the Mind',
        level: 11,
        description:
          "The psychic wrestler's grapple checks are treated as if she had the Greater Grapple feat, and grappled creatures cannot teleport or use dimension door to escape unless they succeed on a Will save against the psychic wrestler's save DC.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },
];
