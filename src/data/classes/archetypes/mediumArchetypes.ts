import { ArchetypeData, ClassFeatureData } from '../types';

export const MEDIUM_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Ectoplasm Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Ectoplasm Hunter',
    className: 'Medium',
    description:
      'The ectoplasm hunter specializes in tracking and eliminating malevolent spirits and haunts, wielding ectoplasmic energy as both a weapon and a protective barrier. She trades the broad-spectrum spirit channeling of the standard medium for focused ghost-hunting abilities and ectoplasmic manipulation.',
    replacedFeatures: ['Shared Seance', 'Astral Journey', 'Spacious Soul'],
    modifiedFeatures: ['Spirit', 'Haunt Channeler', 'Spirit Powers'],
    newFeatures: [
      {
        name: 'Ectoplasmic Sense',
        level: 1,
        description:
          'The ectoplasm hunter can detect the presence of haunts and incorporeal undead within 60 feet as a standard action. At 5th level, this becomes a free action at the start of each round. She gains a +4 bonus on saves against haunt abilities and effects from incorporeal undead.',
      },
      {
        name: 'Ectoplasm Bolt',
        level: 1,
        description:
          'The ectoplasm hunter can project a bolt of solidified ectoplasm as a standard action, making a ranged touch attack dealing 1d6 force damage per 2 medium levels (minimum 1d6). Incorporeal undead take full damage from this attack and must succeed at a Will save (DC 10 + half medium level + Charisma modifier) or be staggered for 1 round.',
      },
      {
        name: 'Haunt Bane',
        level: 3,
        description:
          "The ectoplasm hunter can suppress a haunt as a move action instead of waiting for it to manifest, succeeding automatically if her medium level equals or exceeds the haunt's CR. She gains a +2 competence bonus on attack rolls and damage rolls against haunts and incorporeal creatures.",
      },
      {
        name: 'Ectoplasmic Shell',
        level: 7,
        description:
          'Once per day as a swift action, the ectoplasm hunter can encase herself in solidified ectoplasm for a number of rounds equal to her medium level. This shell grants DR 5/magic, a 50% chance to negate incorporeal touch attacks, and the ability to strike incorporeal creatures as if using the ghost touch weapon property.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 2. Merged Mind
  // ──────────────────────────────────────────────
  {
    name: 'Merged Mind',
    className: 'Medium',
    description:
      "The merged mind does not temporarily channel spirits but instead permanently merges with one, creating a single composite consciousness that combines the medium's living perspective with a spirit's ancient wisdom. She loses the ability to switch spirits but gains dramatically deeper access to a single spirit's power.",
    replacedFeatures: [
      'Spirit (ability to change spirits daily)',
      'Propitiation',
      'Trance',
      'Ask the Spirits',
    ],
    modifiedFeatures: ['Spirit Bonus', 'Spirit Powers', 'Seance Boon'],
    newFeatures: [
      {
        name: 'Permanent Merge',
        level: 1,
        description:
          "At 1st level, the merged mind permanently bonds with a single spirit (Champion, Guardian, Hierophant, Marshal, Archmage, or Trickster), gaining all of that spirit's benefits without needing to perform a seance. She cannot change her spirit under any circumstances and is immune to being forced to change or lose her spirit.",
      },
      {
        name: 'Deep Integration',
        level: 3,
        description:
          "The merged mind's spirit powers are treated as if she were 4 levels higher for all purposes, and her spirit bonus increases by 1. She gains the spirit's taboo as a personality trait rather than a mechanical restriction — violating the spirit's essence causes her to feel deep discomfort but inflicts no mechanical penalty.",
      },
      {
        name: 'Dual Memory',
        level: 5,
        description:
          "The merged mind gains access to the memories of her bonded spirit's past life. She can make Knowledge checks as if trained in all Knowledge skills related to her spirit's domain, adding her medium level as an insight bonus to such checks. Once per day, she can recall a specific memory from the spirit to learn one piece of information (as augury).",
      },
      {
        name: 'Perfect Union',
        level: 11,
        description:
          "The merged mind and her spirit are fully unified. She gains the spirit's intermediate and greater powers at their normal levels and can use her seance boon as a constant passive benefit rather than a limited-use ability. She is immune to possession, domination, and attempts to alter her alignment.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 3. Phantom-Touched
  // ──────────────────────────────────────────────
  {
    name: 'Phantom-Touched',
    className: 'Medium',
    description:
      'The phantom-touched medium has been permanently marked by her contact with the spirit world, developing a semi-spiritual nature that blurs the boundary between the living and the dead. She gains partial incorporeality and the ability to interact with the spirit world as both a living creature and a spirit.',
    replacedFeatures: ['Shared Seance', 'Spacious Soul'],
    modifiedFeatures: ['Spirit', 'Spirit Powers', 'Haunt Channeler', 'Astral Journey'],
    newFeatures: [
      {
        name: 'Spiritual Nature',
        level: 1,
        description:
          'The phantom-touched medium counts as both living and undead for the purpose of effects that target one or the other. She has a 10% chance to negate any physical attack as the attack passes partially through her semi-incorporeal form. This chance increases to 20% at 7th level and 30% at 13th level.',
      },
      {
        name: 'Spirit Sight',
        level: 1,
        description:
          'The phantom-touched can see into the Ethereal Plane as a constant effect, perceiving ethereal creatures and objects as faint outlines. She can communicate with incorporeal undead and spirits without a ritual or seance, and spirits are instinctively aware of her semi-spiritual nature, gaining a +4 bonus on Diplomacy checks with them.',
      },
      {
        name: 'Phase Step',
        level: 3,
        description:
          'Once per day per 3 medium levels, the phantom-touched can phase step as a move action, momentarily becoming fully incorporeal to pass through solid objects up to 5 feet thick. She cannot end her movement inside a solid object and returns to her corporeal state at the end of the movement.',
      },
      {
        name: 'Ethereal Embodiment',
        level: 9,
        description:
          'Once per day, the phantom-touched can become fully incorporeal for a number of rounds equal to her medium level. While incorporeal, she retains the ability to use her spirit powers and medium abilities, and her attacks deal half damage as force effects. She can communicate normally with all creatures on the Material and Ethereal Planes.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 4. Relic Channeler
  // ──────────────────────────────────────────────
  {
    name: 'Relic Channeler',
    className: 'Medium',
    description:
      'The relic channeler channels spirits specifically through historical artifacts and sacred objects rather than through her own body, drawing power from the spiritual impressions left in significant items. She trades direct spirit channeling for the ability to unlock and wield the latent power of relics and cursed objects.',
    replacedFeatures: ['Shared Seance', 'Trance', 'Astral Journey'],
    modifiedFeatures: ['Spirit', 'Seance Boon', 'Spirit Bonus', 'Spirit Powers'],
    newFeatures: [
      {
        name: 'Relic Reading',
        level: 1,
        description:
          'The relic channeler can read the spiritual history of objects she touches, learning who previously owned the object, significant events involving the object, and any spirits bound to or associated with it. This functions as the psychometry occult skill unlock but is always active for the relic channeler without requiring a check.',
      },
      {
        name: 'Spirit of the Relic',
        level: 1,
        description:
          "Instead of channeling spirits directly, the relic channeler channels the spirit that inhabits a chosen relic (an object with historical significance worth at least 100 gp). She gains the spirit bonus and seance boon of the relic's associated spirit type (determined by the GM based on the relic's history), and her spirit powers derive from that relic's spirit.",
      },
      {
        name: 'Relic Attunement',
        level: 4,
        description:
          'The relic channeler can become attuned to multiple relics simultaneously, holding up to 3 attuned relics at 4th level, increasing by 1 every 4 levels. She can switch her active relic as a swift action and gains the seance boon of her inactive relics as passive minor benefits.',
      },
      {
        name: 'Relic Mastery',
        level: 8,
        description:
          "The relic channeler can draw out the full power of a relic, treating herself as 4 levels higher for the purpose of the relic's spirit powers. Once per day per attuned relic, she can invoke a surge of relic power, gaining one use of the relic spirit's greater power even if she does not yet meet the level requirement.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 5. Spirit Dancer
  // ──────────────────────────────────────────────
  {
    name: 'Spirit Dancer',
    className: 'Medium',
    description:
      'The spirit dancer channels multiple spirits simultaneously through ritualized movement and dance, weaving between spiritual influences with fluid grace. She trades stable spirit bonding for the ability to rapidly shift between spirits mid-combat, gaining different spirit benefits depending on her current movements.',
    replacedFeatures: ['Shared Seance', 'Propitiation', 'Spacious Soul', 'Ask the Spirits'],
    modifiedFeatures: ['Spirit', 'Spirit Powers', 'Seance Boon', 'Spirit Bonus'],
    newFeatures: [
      {
        name: 'Dance of Spirits',
        level: 1,
        description:
          'The spirit dancer can shift between her prepared spirits as a swift action by performing a brief ritual movement. She prepares up to 3 spirits during her daily seance instead of 1, but gains spirit powers and the spirit bonus of only her currently active spirit. She must perform her spirit dance for 1 round before gaining the benefits of a newly activated spirit.',
      },
      {
        name: 'Fluid Transition',
        level: 3,
        description:
          'The spirit dancer can switch spirits as a free action (once per round) when she takes a full-round movement action. When she switches spirits this way, she retains the seance boon of her previous spirit for 2 rounds as the spiritual energy fades gracefully.',
      },
      {
        name: 'Resonant Weave',
        level: 7,
        description:
          'When the spirit dancer switches between two specific spirits in the same round, she gains a resonance bonus reflecting the interplay between those two spirits. For example, switching between Champion and Marshal grants a +2 morale bonus on attack rolls for 1 round; other combinations yield different bonuses as determined by the GM.',
      },
      {
        name: 'Spirit Crescendo',
        level: 13,
        description:
          'Once per day, the spirit dancer can call upon all three of her prepared spirits simultaneously as a full-round action. For 1 round per medium level, she gains the spirit bonus, lesser spirit power, and seance boon of all three spirits at once, though she suffers the taboo of all three spirits during this time.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 6. Vocal Medium
  // ──────────────────────────────────────────────
  {
    name: 'Vocal Medium',
    className: 'Medium',
    description:
      'The vocal medium channels spirits primarily through her voice, becoming a conduit for the dead to speak directly through her. She gains powerful vocal abilities and the capacity to transmit entire spirit personalities through sound, trading visual and physical manifestations for purely auditory spirit channeling.',
    replacedFeatures: ['Haunt Channeler', 'Astral Journey', 'Spacious Soul'],
    modifiedFeatures: ['Shared Seance', 'Spirit', 'Spirit Powers', 'Seance Boon'],
    newFeatures: [
      {
        name: 'Voice of the Dead',
        level: 1,
        description:
          "The vocal medium's spirit manifests primarily through her voice. She can speak with the voice and inflection of her channeled spirit, allowing her to pass as a different person for social purposes (Disguise check using Charisma + medium level). Creatures familiar with the spirit recognize the voice automatically.",
      },
      {
        name: 'Compelling Words',
        level: 1,
        description:
          "The vocal medium channels her spirit's power into her words. When she speaks at length (at least 1 full round of speaking), she can project her spirit bonus as a bonus on Diplomacy, Intimidate, or Bluff checks. Additionally, she can use her seance boon as an auditory performance, affecting all who can hear her within 30 feet.",
      },
      {
        name: 'Haunting Wail',
        level: 4,
        description:
          "Once per day per 4 medium levels, the vocal medium can channel her spirit's most terrifying aspect into a wail as a standard action. All creatures within 30 feet who can hear must succeed at a Will save (DC 10 + half medium level + Charisma modifier) or be shaken for a number of rounds equal to her medium level.",
      },
      {
        name: 'Spirit Chorus',
        level: 8,
        description:
          'The vocal medium can channel multiple spirit voices simultaneously. Once per day, she can perform a Spirit Chorus, speaking with the voices of all six spirit types at once. For 1 minute, she gains the seance boon of all six spirits and her voice counts as a bardic performance for the purpose of feats and abilities.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 7. Ley Line Guardian
  // ──────────────────────────────────────────────
  {
    name: 'Ley Line Guardian',
    className: 'Medium',
    description:
      'The ley line guardian channels spirits through the lines of magical energy that crisscross the world rather than through personal seance, drawing power from natural magical nexuses. She trades traditional spirit bonding for the ability to tap ley lines to enhance her spirit powers dramatically when near a magical nexus.',
    replacedFeatures: ['Shared Seance', 'Propitiation'],
    modifiedFeatures: ['Spirit', 'Spirit Bonus', 'Seance Boon', 'Trance', 'Spirit Powers'],
    newFeatures: [
      {
        name: 'Ley Line Connection',
        level: 1,
        description:
          'The ley line guardian does not require other creatures for her seance and instead communes alone at a location of natural power (a stone circle, crossroads, ancient ruin, etc.) to channel her spirits. Her spirit bonus increases by 1 when she performs her seance at a ley line nexus, and this bonus lasts 24 hours.',
      },
      {
        name: 'Ley Line Tap',
        level: 2,
        description:
          'When within 60 feet of a ley line or area of concentrated magical energy (as determined by the GM), the ley line guardian can draw power from it as a swift action. This reduces her taboo penalties by 1 step (penalty by 1) for 10 minutes and grants her 1 additional use of her least spirit power.',
      },
      {
        name: 'Nexus Walker',
        level: 5,
        description:
          'The ley line guardian can sense ley lines within 1 mile and navigate to them as if using find the path. Once per day while standing on a ley line nexus, she can use teleport as a spell-like ability to travel to any other ley line nexus she has previously visited.',
      },
      {
        name: 'Channel the Weave',
        level: 11,
        description:
          "The ley line guardian can draw massive power from a ley line nexus once per day, gaining access to her spirit's greater power regardless of her current level and doubling her spirit bonus for 1 minute. This exhausting surge inflicts the exhausted condition for 1 hour after the effect ends.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 8. Haunt Collector
  // ──────────────────────────────────────────────
  {
    name: 'Haunt Collector',
    className: 'Medium',
    description:
      'The haunt collector captures and stores haunts rather than suppressing or destroying them, using these collected spiritual phenomena as weapons and tools. She trades the traditional spirit bond for the ability to maintain a collection of stored haunts that she can release on command.',
    replacedFeatures: ['Spirit', 'Shared Seance', 'Seance Boon'],
    modifiedFeatures: ['Haunt Channeler', 'Spirit Bonus', 'Spirit Powers', 'Trance'],
    newFeatures: [
      {
        name: 'Capture Haunt',
        level: 1,
        description:
          "The haunt collector can capture a haunt during its manifestation by succeeding on a Knowledge (religion) check (DC = haunt's CR + 5) and spending a standard action. She can maintain a number of captured haunts equal to half her medium level (minimum 1) in specially prepared spirit jars worth 50 gp each.",
      },
      {
        name: 'Release Haunt',
        level: 1,
        description:
          "The haunt collector can release a captured haunt as a standard action, targeting a 20-foot area. The haunt manifests as per its normal effects but is directed by the medium. Creatures in the area must make the saves specified by the haunt's original description. After release, the haunt is destroyed unless the collector recaptures it (DC increases by 2 each recapture).",
      },
      {
        name: 'Haunt Study',
        level: 3,
        description:
          "When the haunt collector captures a haunt, she gains the spiritual bonus tied to that haunt's associated spirit type as a +1 insight bonus for 24 hours. She can study captured haunts to gain information about the events that created them, functioning as a 1-hour research session on the associated history.",
      },
      {
        name: 'Haunt Mastery',
        level: 7,
        description:
          'The haunt collector can modify released haunts, amplifying or altering their effects. She can double the area of effect, increase all save DCs by her Charisma modifier, or change the damage type of a damaging haunt when she releases it. She can make one such modification per release without penalty.',
      },
    ],
    source: 'Pathfinder Player Companion: Haunted Heroes Handbook',
  },

  // ──────────────────────────────────────────────
  // 9. Spectral Emissary
  // ──────────────────────────────────────────────
  {
    name: 'Spectral Emissary',
    className: 'Medium',
    description:
      'The spectral emissary acts as a formal diplomat between the world of the living and the spirit world, spending as much time in spiritual realms as in the material world. She trades combat-oriented spirit powers for expanded astral travel capabilities and the ability to negotiate with powerful spirits.',
    replacedFeatures: ['Haunt Channeler', 'Spirit Powers (combat abilities)'],
    modifiedFeatures: ['Spirit', 'Shared Seance', 'Astral Journey', 'Ask the Spirits', 'Trance'],
    newFeatures: [
      {
        name: 'Spiritual Diplomat',
        level: 1,
        description:
          'The spectral emissary gains Diplomacy and Linguistics as class skills and adds her medium level to Diplomacy checks made with spirits and incorporeal undead. She can communicate with any spirit regardless of language, and spirits cannot attack her on sight — they must engage in at least one round of communication first.',
      },
      {
        name: 'Extended Journey',
        level: 1,
        description:
          "The spectral emissary's astral journey ability allows her to remain in the spirit world for up to 1 hour per medium level instead of the normal duration. Her physical body is protected by a ward while she journeys, gaining DR 5/— and being immune to death effects, though it still requires food and water normally.",
      },
      {
        name: 'Spirit Negotiation',
        level: 5,
        description:
          "Once per week, the spectral emissary can formally negotiate with a spirit or powerful undead to request a service or information. This functions as a 1-hour ritual with a Diplomacy check (DC varies by spirit power). On a success, the spirit performs one service of up to 1 hour's duration or reveals one major piece of information.",
      },
      {
        name: 'Intercession',
        level: 11,
        description:
          "The spectral emissary can call upon the goodwill she has built in the spirit world to intercede on behalf of a recently deceased creature, delaying the soul's departure for up to 1 week. During this time, the creature can be restored to life by any effect that would normally work. She can use this ability once per month.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 10. Trance Medium
  // ──────────────────────────────────────────────
  {
    name: 'Trance Medium',
    className: 'Medium',
    description:
      'The trance medium specializes in deep trance states that allow spirits to take far more complete control of her body than the standard medium permits, effectively becoming a vessel for complete spirit possession. She trades tactical flexibility for dramatically amplified spirit powers during deep trance.',
    replacedFeatures: ['Shared Seance', 'Ask the Spirits', 'Spacious Soul'],
    modifiedFeatures: ['Spirit', 'Trance', 'Spirit Powers', 'Spirit Bonus', 'Propitiation'],
    newFeatures: [
      {
        name: 'Deep Trance',
        level: 1,
        description:
          "The trance medium can enter a deep trance as a full-round action, ceding greater control to her channeled spirit. While in deep trance, she gains all spirit powers available to her as if she were 4 levels higher, and her spirit bonus increases by 2. However, the spirit's personality becomes dominant — the GM controls the medium's roleplay decisions.",
      },
      {
        name: 'Trance Resistance',
        level: 2,
        description:
          "The trance medium's frequent spirit possession has hardened her mind against unwanted intrusion. She gains a +4 bonus on Will saves against charm and compulsion effects, possession attempts, and all abilities that would alter or control her mind or actions.",
      },
      {
        name: 'Channeled Fury',
        level: 6,
        description:
          "While in deep trance, the trance medium's spirit can manifest partially in physical form. Her melee attacks deal bonus damage equal to her spirit bonus, and her physical attacks count as the incorporeal-affecting weapon property for striking ethereal or incorporeal creatures adjacent to her.",
      },
      {
        name: 'Sovereign Trance',
        level: 11,
        description:
          'The trance medium has developed enough mastery to maintain her own consciousness while allowing the spirit maximum expression. While in deep trance, she retains full control of her own decisions while still gaining all trance benefits. The deep trance can now be entered as a swift action once per day.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 11. Shrine Warden
  // ──────────────────────────────────────────────
  {
    name: 'Shrine Warden',
    className: 'Medium',
    description:
      'The shrine warden is bound to a specific sacred place, serving as its guardian and channeling the resident spirit of that location. She trades mobility and flexible spirit selection for increasingly powerful abilities tied to her chosen shrine, becoming almost supernaturally potent within its boundaries.',
    replacedFeatures: ['Shared Seance', 'Astral Journey', 'Propitiation'],
    modifiedFeatures: ['Spirit', 'Seance Boon', 'Spirit Powers', 'Trance'],
    newFeatures: [
      {
        name: 'Shrine Bond',
        level: 1,
        description:
          'The shrine warden bonds with a specific location (no more than a 100-foot radius) as her personal shrine. She can always channel her chosen spirit while within the shrine without performing a seance. Within the shrine, her spirit bonus increases by 2 and her spirit powers function as if she were 2 levels higher.',
      },
      {
        name: "Warden's Awareness",
        level: 2,
        description:
          "The shrine warden can sense all creatures that enter her shrine as long as they are not magically concealed, as if using arcane eye with a range limited to the shrine's boundaries. She can identify creatures she has previously encountered and is never caught flat-footed within her shrine.",
      },
      {
        name: 'Shrine Protection',
        level: 5,
        description:
          'The shrine warden can invoke the protective power of her shrine once per day as a standard action, causing it to act as a hallow effect for 1 hour per medium level. She can exclude specific creatures from this effect and can designate up to 6 creatures as "shrine champions" who gain the benefits of bless while inside.',
      },
      {
        name: 'Unassailable Sanctuary',
        level: 11,
        description:
          "The shrine warden's shrine becomes nearly inviolable. Extraplanar creatures, undead, and other spirits cannot enter the shrine without succeeding at a Will save (DC 10 + medium level + Charisma modifier). The shrine warden automatically succeeds on all saving throws against spirit influence and possession while within the shrine.",
      },
    ],
    source: 'Pathfinder Player Companion: Haunted Heroes Handbook',
  },
];
