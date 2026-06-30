import { ArchetypeData } from '../types';

export const SPIRITUALIST_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Bone Speaker
  // ──────────────────────────────────────────────
  {
    name: 'Bone Speaker',
    className: 'Spiritualist',
    description:
      "The bone speaker forms her spiritual bond not with a free-willed phantom but with the lingering spirit of a specific deceased ancestor, channeling that ancestor's knowledge and power through physical remains. She trades the phantom's combat utility for powerful necromantic abilities and the ability to animate and command the undead.",
    replacedFeatures: ['Phantom', 'Bonded Manifestation', 'Phantom Recall'],
    modifiedFeatures: ['Etheric Tether', 'Spiritual Interference'],
    newFeatures: [
      {
        name: 'Ancestral Remains',
        level: 1,
        description:
          "The bone speaker bonds with the remains of a specific ancestor (a skull or significant bone) rather than a free phantom. This focus grants her access to the ancestor's knowledge: she may add two skills her ancestor possessed to her class skill list and makes Knowledge checks as if trained in any field the ancestor mastered.",
        effects: [],
      },
      {
        name: 'Animate Ancestor',
        level: 1,
        description:
          "The bone speaker can animate her ancestral remains as a skeletal servant using animate dead as a spell-like ability once per day, treating her spiritualist level as her caster level. The animated ancestor has special qualities based on the ancestor's life and is more powerful than a standard skeleton of equivalent HD.",
        effects: [],
      },
      {
        name: 'Necromantic Communion',
        level: 4,
        description:
          "The bone speaker can communicate with any intelligent undead as if under a constant speak with dead effect. Additionally, she can spend 10 minutes in ritual communion with her ancestral remains to ask up to three questions of her ancestor's spirit, as if casting contact other plane targeting her ancestor's afterlife.",
        effects: [],
      },
      {
        name: 'Undead Mastery',
        level: 8,
        description:
          "The bone speaker can control a number of undead equal to twice her spiritualist level in Hit Dice, rather than the standard limit. Undead she controls gain a +2 bonus to attack rolls and saving throws while within 30 feet of her ancestral remains, as the ancestor's spirit rallies them.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 2. Geistjaeger
  // ──────────────────────────────────────────────
  {
    name: 'Geistjaeger',
    className: 'Spiritualist',
    description:
      'The geistjaeger is a hunter of dangerous spirits and undead, using her bond with her phantom as a weapon against the very creatures it resembles. She trades some of the supportive aspects of the phantom bond for aggressive anti-spirit capabilities and the ability to track and trap incorporeal threats.',
    replacedFeatures: ['Calm Spirit', 'Fused Consciousness'],
    modifiedFeatures: [
      'Phantom',
      'Etheric Tether',
      'Spiritual Interference',
      'Bonded Manifestation',
    ],
    newFeatures: [
      {
        name: 'Spirit Hunter',
        level: 1,
        description:
          "The geistjaeger gains the favored enemy ability against undead and incorporeal creatures, functioning as the ranger's favored enemy with a starting bonus of +2. This bonus increases by +2 at 5th, 10th, 15th, and 20th level. Her phantom gains these bonuses as well when manifested.",
        effects: [],
      },
      {
        name: 'Ghost Touch',
        level: 1,
        description:
          "The geistjaeger's weapons are treated as having the ghost touch property when attacking incorporeal creatures and undead with the incorporeal subtype. At 5th level, she can temporarily grant this property to any weapon she touches for 1 minute per spiritualist level as a swift action.",
        effects: [],
      },
      {
        name: 'Spirit Trap',
        level: 4,
        description:
          'The geistjaeger can prepare spirit traps during an 8-hour rest, creating up to her spiritualist level in trap-tokens made of salt, iron, and spirit-binding sigils. A trap, when triggered by an incorporeal or undead creature, forces the target to make a Will save (DC 10 + half level + Charisma modifier) or be anchored in place for 1d4+1 rounds.',
        effects: [],
      },
      {
        name: 'Phantom Blade',
        level: 8,
        description:
          "The geistjaeger can channel her phantom's essence through a weapon she holds, allowing her weapon to deal full damage to incorporeal creatures (as if it were a ghost touch weapon of the appropriate type) and granting it a +1d6 damage bonus against undead. This effect lasts for 1 minute per spiritualist level and can be used a number of times per day equal to her Charisma modifier.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 3. Haunted
  // ──────────────────────────────────────────────
  {
    name: 'Haunted',
    className: 'Spiritualist',
    description:
      'The haunted spiritualist does not voluntarily bond with her phantom — rather, she is involuntarily haunted by a spirit that has attached itself to her, often traumatically. The haunting grants her power but also subjects her to unpredictable spiritual phenomena that can help or hinder at inopportune moments.',
    replacedFeatures: ['Bonded Manifestation', 'Calm Spirit'],
    modifiedFeatures: ['Phantom', 'Etheric Tether', 'Detect Undead'],
    newFeatures: [
      {
        name: 'Involuntary Haunting',
        level: 1,
        description:
          "The haunted spiritualist's phantom manifests without her consent at random moments. At the start of each day, roll 1d20: on a result of 10 or lower, the phantom partially manifests at an inconvenient moment during that day (GM determination), imposing a -2 penalty on one skill check or saving throw as the phantom disrupts her concentration. On a result of 11 or higher, the phantom assists her unexpectedly, granting a +2 bonus once that day.",
        effects: [],
      },
      {
        name: 'Poltergeist Effect',
        level: 1,
        description:
          'The haunted spiritualist is surrounded by constant minor spiritual activity. She can use mage hand, open/close, and ghost sound at will as spell-like abilities, but these manifest in eerie and unsettling ways (items moving on their own, whispers, cold drafts) that impose a -4 penalty on her Stealth checks.',
        effects: [],
      },
      {
        name: 'Frightful Presence',
        level: 4,
        description:
          "The phantom's unwilling presence makes the spiritualist unnerving to those around her. Creatures within 10 feet who observe her must succeed at a Will save (DC 10 + half spiritualist level + Charisma modifier) or become shaken for 1 minute. A creature that succeeds is immune to this effect from her for 24 hours.",
        effects: [],
      },
      {
        name: 'Haunt Absorption',
        level: 8,
        description:
          "The haunted spiritualist can absorb the energy of a haunt rather than suppressing or destroying it. As a standard action during a haunt's manifestation, she can make a Charisma check (DC = the haunt's CR + 5) to absorb its energy, gaining temporary hit points equal to the haunt's CR and one use of the phantom's emotional focus ability.",
        effects: [],
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 4. Mindblade (Spiritualist)
  // ──────────────────────────────────────────────
  {
    name: 'Mindblade',
    className: 'Spiritualist',
    description:
      "The mindblade spiritualist channels her phantom's essence into a weapon of pure psychic force, fighting in melee with a blade of solidified spiritual energy rather than summoning a separate phantom companion. She trades the external phantom for an internalized weapon bond that enhances her combat effectiveness.",
    replacedFeatures: ['Phantom', 'Bonded Manifestation', 'Phantom Recall', 'Fused Consciousness'],
    modifiedFeatures: ['Etheric Tether', 'Phrenic Pool', 'Spells'],
    newFeatures: [
      {
        name: 'Spirit Blade',
        level: 1,
        description:
          'The mindblade manifests a weapon of hardened phantom ectoplasm as a move action. This weapon functions as a masterwork weapon of any one-handed melee type she is proficient with, dealing damage as the base weapon but with the ghost touch property and using her Charisma modifier for attack and damage in addition to Strength. The blade dissipates if she releases it or is knocked unconscious.',
        effects: [],
      },
      {
        name: 'Blade Bond',
        level: 2,
        description:
          "The mindblade's spirit blade gains enhancement bonuses as she levels: +1 at 3rd level, +2 at 7th, +3 at 11th, +4 at 15th, and +5 at 19th. She may convert up to half the enhancement bonus to equivalent special weapon properties (keen, flaming, etc.) each morning.",
        effects: [],
      },
      {
        name: 'Phantom Strike',
        level: 5,
        description:
          'When the mindblade strikes a creature with her spirit blade, she can expend 1 point from her etheric tether pool (if she has one) to simultaneously deal psychic damage equal to her Charisma modifier to the struck creature. This psychic damage bypasses damage reduction and hardness.',
        effects: [],
      },
      {
        name: 'Dual Blades',
        level: 10,
        description:
          'The mindblade can manifest two spirit blades simultaneously, one in each hand, as a move action. The off-hand blade functions as a light weapon for the purpose of two-weapon fighting penalty calculations. Each blade maintains independent enhancement bonuses equal to half her normal blade bond bonus (rounded down).',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 5. Onmyoji
  // ──────────────────────────────────────────────
  {
    name: 'Onmyoji',
    className: 'Spiritualist',
    description:
      'The onmyoji is an Eastern spirit-worker who uses paper talismans, ritual circles, and traditional divination methods to control and communicate with spirits. She trades the Western-style phantom bond for a system of paper shikigami servants and the ability to seal, purify, and ward against malevolent spirits.',
    replacedFeatures: ['Phantom', 'Calm Spirit', 'Bonded Manifestation', 'Phantom Recall'],
    modifiedFeatures: ['Spiritual Interference', 'Detect Undead'],
    newFeatures: [
      {
        name: 'Shikigami',
        level: 1,
        description:
          'The onmyoji creates paper shikigami servants rather than bonding with a phantom. She can create and maintain a number of shikigami equal to her Charisma modifier, each functioning as a familiar appropriate to her spiritualist level. Shikigami are destroyed by water and fire damage, but she can create replacements during a 10-minute ritual using paper, ink, and a drop of her blood.',
        effects: [],
      },
      {
        name: 'Ofuda Seals',
        level: 1,
        description:
          'The onmyoji can prepare paper talismans (ofuda) during a 1-hour ritual, creating up to her spiritualist level in ofuda per day. An ofuda can store one prepared spell of 3rd level or lower, which can be triggered by any creature holding it as a standard action. Ofuda deteriorate after 24 hours if unused.',
        effects: [],
      },
      {
        name: 'Spirit Binding',
        level: 4,
        description:
          'The onmyoji can inscribe a binding circle (a 10-foot-radius diagram requiring 10 minutes to draw) that traps any spirit, undead, or incorporeal creature that enters it. Trapped creatures must succeed at a Will save (DC 10 + half level + Charisma modifier) each round or remain unable to leave the circle. The circle lasts for 1 hour per spiritualist level.',
        effects: [],
      },
      {
        name: 'Greater Shikigami',
        level: 8,
        description:
          "The onmyoji's shikigami grow more powerful, now functioning as animal companions of her spiritualist level - 3. She can have one greater shikigami in addition to her standard shikigami servants, and this greater shikigami can be made of cloth, wood, or other materials in addition to paper, granting it immunity to fire damage.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 6. Phantom Blade (Spiritualist)
  // ──────────────────────────────────────────────
  {
    name: 'Phantom Blade',
    className: 'Spiritualist',
    description:
      "The phantom blade spiritualist (not to be confused with the psychic archetype of the same name) fuses her phantom entirely into her weapon, creating a spirit-infused blade that grows in power as the bond deepens. She trades a separate phantom companion for a weapon that combines the phantom's power with her own combat skill.",
    replacedFeatures: ['Phantom', 'Bonded Manifestation', 'Phantom Recall', 'Etheric Tether'],
    modifiedFeatures: ['Spiritual Interference', 'Fused Consciousness'],
    newFeatures: [
      {
        name: 'Bonded Weapon',
        level: 1,
        description:
          "The spiritualist bonds her phantom into a specific weapon (chosen at 1st level). This weapon is treated as a magic weapon with the ghost touch property and a +1 enhancement bonus. The phantom's emotional focus determines the weapon's damage type (Anger = slashing, Fear = piercing, Hatred = bludgeoning, etc.).",
        effects: [],
      },
      {
        name: 'Phantom Fury',
        level: 3,
        description:
          "The bonded weapon's enhancement bonus increases by +1 at 3rd level and every 4 levels thereafter (to a maximum of +5 at 19th level). The spiritualist may channel her phantom's emotional focus as a swift action, causing the weapon to deal an additional 1d6 energy damage appropriate to the phantom's emotional focus for 1 round per spiritualist level.",
        effects: [],
      },
      {
        name: 'Spirit Manifestation',
        level: 7,
        description:
          "The spiritualist can cause her phantom to partially manifest from the bonded weapon as a standard action, projecting a spiritual aura that extends 5 feet around the weapon. Creatures within this aura take a -2 penalty on Will saves against the spiritualist's spells and are treated as if they were in contact with the weapon for the purpose of ghost touch effects.",
        effects: [],
      },
      {
        name: 'Fused Strike',
        level: 11,
        description:
          "The phantom's consciousness fully merges with the weapon and the spiritualist's fighting style. When she makes a full attack with her bonded weapon, she gains one additional attack at her highest attack bonus. This additional attack deals damage as the bonded weapon plus the phantom's emotional focus bonus damage.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 7. Ectoplasmatist
  // ──────────────────────────────────────────────
  {
    name: 'Ectoplasmatist',
    className: 'Spiritualist',
    description:
      "The ectoplasmatist focuses on the physical substance of spiritual energy rather than the personality of her phantom, shaping raw ectoplasm into tools, weapons, armor, and constructs. She trades the phantom's independent personality and combat capabilities for direct control over ectoplasmic matter.",
    replacedFeatures: ['Phantom', 'Bonded Manifestation', 'Calm Spirit', 'Phantom Recall'],
    modifiedFeatures: ['Etheric Tether', 'Spiritual Interference'],
    newFeatures: [
      {
        name: 'Ectoplasm Shaping',
        level: 1,
        description:
          'The ectoplasmatist can extrude and shape ectoplasm from her body as a move action. She can create simple objects (tools, weapons, shields) with volume up to 1 cubic foot per spiritualist level. These objects have hardness 5 and hit points equal to twice her spiritualist level, and dissolve after 1 hour or when she dismisses them.',
        effects: [],
      },
      {
        name: 'Ectoplasmic Armor',
        level: 1,
        description:
          'As a standard action, the ectoplasmatist can encase herself in ectoplasmic armor, gaining an armor bonus to AC equal to 3 + her Charisma modifier (maximum +8 at 20th level). This armor does not impose armor check penalties, has no maximum Dexterity bonus, and allows her to use arcane spells without somatic component issues. The armor persists until dismissed.',
        effects: [],
      },
      {
        name: 'Ectoplasmic Tendril',
        level: 4,
        description:
          'The ectoplasmatist can extrude ectoplasmic tendrils from her body as natural attacks. She gains two tendril attacks (primary natural attacks) that deal 1d6 bludgeoning damage each plus her Charisma modifier. The tendrils have reach 10 feet and the grab special attack. At 8th level, successful grabs allow her to drain 1 point of Strength from the grabbed creature each round.',
        effects: [],
      },
      {
        name: 'Ectoplasmic Construct',
        level: 8,
        description:
          'The ectoplasmatist can spend 1 hour to create a persistent ectoplasmic construct servant with Hit Dice equal to half her spiritualist level. This construct obeys her mental commands and can take any form she imagines. If destroyed, she can reform it during her next 1-hour ritual. She can have only one ectoplasmic construct at a time.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 8. Totem Spiritualist
  // ──────────────────────────────────────────────
  {
    name: 'Totem Spiritualist',
    className: 'Spiritualist',
    description:
      'The totem spiritualist bonds with the collective spirit of an animal species rather than an individual human ghost, channeling the primal essence of beasts into her phantom. She trades the emotional complexity of a human phantom for the raw instinctual power of an animal spirit.',
    replacedFeatures: ['Phantom Recall', 'Fused Consciousness'],
    modifiedFeatures: ['Phantom', 'Bonded Manifestation', 'Etheric Tether'],
    newFeatures: [
      {
        name: 'Totem Phantom',
        level: 1,
        description:
          "The totem spiritualist's phantom takes the form of a Large animal spirit of her choosing (bear, wolf, eagle, serpent, etc.) rather than a humanoid ghost. The phantom uses the standard phantom statistics but gains natural attacks appropriate to its animal form and the scent ability. It cannot speak but communicates through the spiritualist's emotional bond.",
        effects: [],
      },
      {
        name: 'Totem Bond',
        level: 1,
        description:
          'The spiritualist can speak with animals of the same species as her totem phantom at will as a spell-like ability. Animals of that species are automatically friendly toward her and will not attack her unless magically compelled. She gains a +4 bonus on Handle Animal checks with her totem animal species.',
        effects: [],
      },
      {
        name: 'Primal Manifestation',
        level: 4,
        description:
          "When the totem phantom manifests in ectoplasmic form, it appears as a translucent giant version of its animal form and gains the powerful charge ability (double damage on charge) and the trample ability appropriate to its size. The phantom's natural attacks deal damage as if it were one size category larger.",
        effects: [],
      },
      {
        name: 'Feral Fusion',
        level: 12,
        description:
          "The totem spiritualist can fuse with her phantom in a more primal way than standard fused consciousness. While fused, she gains the phantom's natural attacks, the scent ability, and a +4 bonus to Strength and Constitution. She also gains the phantom's immunities and can move at double speed as if under haste for a number of rounds equal to her spiritualist level per day.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 9. Voice of the Grave
  // ──────────────────────────────────────────────
  {
    name: 'Voice of the Grave',
    className: 'Spiritualist',
    description:
      'The voice of the grave acts as a medium between the living and the dead, her primary role being communication and negotiation with deceased spirits rather than combat. She trades direct phantom combat capability for unparalleled ability to speak with, understand, and guide dead souls.',
    replacedFeatures: ['Spiritual Interference', 'Greater Spiritual Interference'],
    modifiedFeatures: ['Phantom', 'Detect Undead', 'Calm Spirit'],
    newFeatures: [
      {
        name: 'Seance',
        level: 1,
        description:
          'The voice of the grave can conduct a seance over 10 minutes to contact the spirit of any deceased creature whose name she knows and who has been dead for no more than 1 year per spiritualist level. The contacted spirit can answer up to three questions honestly, though it knows only what it knew in life and what it has observed from the afterlife.',
        effects: [],
      },
      {
        name: 'Spirit Tongue',
        level: 1,
        description:
          'The voice of the grave can understand and speak with any undead creature regardless of its intelligence or communication ability. She can communicate with mindless undead through emotional impressions and instinctual commands. Intelligent undead are automatically aware that she can understand them and receive a -4 penalty on Bluff checks made against her.',
        effects: [],
      },
      {
        name: 'Peaceful Passage',
        level: 4,
        description:
          "The voice of the grave can counsel a haunting spirit or recently-created undead to pass on peacefully. As a 10-minute ritual, she can make a Diplomacy check (DC = the undead's Will save + 10) to convince an undead or haunting spirit to dissolve voluntarily. Success causes the undead to crumble peacefully without combat, granting full experience.",
        effects: [],
      },
      {
        name: 'Death Messenger',
        level: 8,
        description:
          'The voice of the grave can send her phantom as a messenger to the afterlife, allowing it to carry messages to specific deceased individuals and return with their responses. This ritual takes 1 hour and the phantom is away for up to 1 day. The phantom can retrieve information the deceased knows from their afterlife perspective.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 10. Exciter
  // ──────────────────────────────────────────────
  {
    name: 'Exciter',
    className: 'Spiritualist',
    description:
      "The exciter draws on her phantom's emotional energy to boost her own physical performance and that of her allies, channeling the phantom's passions into supernatural inspiration and enhancement. She trades the phantom's independent combat role for a buffer/enhancer role that makes the whole party more effective.",
    replacedFeatures: ['Calm Spirit', 'Fused Consciousness'],
    modifiedFeatures: ['Phantom', 'Etheric Tether', 'Bonded Manifestation'],
    newFeatures: [
      {
        name: 'Emotional Surge',
        level: 1,
        description:
          "The exciter can draw on her phantom's emotional focus to surge with power. As a swift action, she can grant herself or one ally within 30 feet a +2 morale bonus on attack rolls, damage rolls, or saving throws (chosen when activated) for 1 round. She can use this ability a number of times per day equal to 3 + her Charisma modifier.",
        effects: [],
      },
      {
        name: 'Phantom Inspiration',
        level: 4,
        description:
          "The exciter's phantom radiates emotional energy that inspires allies. All allies within 30 feet of the phantom (whether manifested physically or spiritually) gain a +1 morale bonus on Will saving throws and a +1 morale bonus on attack rolls against creatures that have attacked the exciter or her allies in the last round.",
        effects: [],
      },
      {
        name: 'Shared Passion',
        level: 8,
        description:
          "The exciter can extend her phantom's emotional focus bonuses to allies. As a standard action, she can choose a number of allies equal to her Charisma modifier within 30 feet to benefit from the phantom's emotional focus ability for 1 minute. Each ally gains the same bonus the phantom normally provides based on its emotional focus.",
        effects: [],
      },
      {
        name: 'Ecstatic Frenzy',
        level: 12,
        description:
          "Once per day, the exciter can unleash her phantom's full emotional energy in a 30-foot burst. All allies in the area gain a +4 morale bonus to Strength, Dexterity, and Constitution, a +2 morale bonus on attack rolls, and 10 temporary hit points for 1 minute per spiritualist level. All enemies in the area must make a Will save (DC 10 + half level + Charisma modifier) or become shaken.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 11. Fractured Mind
  // ──────────────────────────────────────────────
  {
    name: 'Fractured Mind',
    className: 'Spiritualist',
    description:
      "The fractured mind spiritualist's psyche has been shattered by traumatic contact with spirits, leaving her with multiple semi-independent personality fragments that manifest as different phantom aspects. She trades a single coherent phantom for multiple fractured aspects that she can switch between, each with different capabilities.",
    replacedFeatures: ['Phantom Recall', 'Omnipresent Haunting'],
    modifiedFeatures: ['Phantom', 'Bonded Manifestation', 'Fused Consciousness'],
    newFeatures: [
      {
        name: 'Fractured Phantom',
        level: 1,
        description:
          "The fractured mind's phantom has two emotional foci instead of one, representing two fragmented personality aspects. She may switch between aspects as a swift action, gaining the benefits of the active aspect's emotional focus abilities. Both aspects share the phantom's hit points, abilities, and bonded senses.",
        effects: [],
      },
      {
        name: 'Personality Shift',
        level: 4,
        description:
          "When the fractured mind switches between phantom aspects, she can channel the shift's psychic energy into a brief burst. Once per round when switching aspects, she can make a free melee touch attack against an adjacent creature that deals 2d6 psychic damage (Will DC 10 + half level + Charisma modifier for half).",
        effects: [],
      },
      {
        name: 'Third Fragment',
        level: 8,
        description:
          "The fractured mind's psyche has fractured further, granting her phantom a third emotional focus aspect. She may choose any emotional focus not already represented by her existing aspects. Switching between aspects is now a free action once per turn.",
        effects: [],
      },
      {
        name: 'Integrated Fractures',
        level: 16,
        description:
          "The fractured mind has accepted her condition and learned to manifest all aspects simultaneously. When she uses bonded manifestation, all of her phantom's emotional focus abilities are active simultaneously. When fused with her phantom, she gains the benefits of all emotional focus aspects at once and is immune to mind-affecting effects targeting her sense of identity.",
        effects: [],
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 12. Relic Channeler
  // ──────────────────────────────────────────────
  {
    name: 'Relic Channeler',
    className: 'Spiritualist',
    description:
      "The relic channeler bonds her phantom to a physical object imbued with spiritual significance rather than allowing it to manifest freely, focusing the phantom's energy through a relic to produce powerful localized effects. She trades the phantom's mobile combat utility for powerful magical effects tied to the relic's location.",
    replacedFeatures: ['Bonded Manifestation', 'Phantom Recall', 'Omnipresent Haunting'],
    modifiedFeatures: ['Phantom', 'Etheric Tether', 'Spiritual Interference'],
    newFeatures: [
      {
        name: 'Spirit Relic',
        level: 1,
        description:
          'The relic channeler bonds her phantom to a physical object of significance (a weapon, piece of jewelry, or other meaningful item). The relic acts as the physical anchor for her phantom; the phantom cannot manifest more than 100 feet from the relic but the relic acts as a conduit for spiritual energy. The spiritualist gains a +2 bonus on all spiritualist class abilities while holding or wearing the relic.',
        effects: [],
      },
      {
        name: 'Relic Aura',
        level: 3,
        description:
          "The spirit relic radiates an aura of the phantom's emotional focus in a 30-foot radius. Allies within the aura gain the phantom's emotional focus bonus as a morale bonus to the relevant stat. Enemies within the aura must succeed on a Will save (DC 10 + half level + Charisma modifier) or suffer a -1 penalty on saves against the spiritualist's spells and abilities.",
        effects: [],
      },
      {
        name: 'Channel Through Relic',
        level: 7,
        description:
          "The relic channeler can cast her spells through the spirit relic rather than from her own location. While holding or wearing the relic, she can project any touch spell or close-range spell as if her position were the relic's location (if she has placed it elsewhere), with a range of 100 feet per spiritualist level.",
        effects: [],
      },
      {
        name: 'Relic Apotheosis',
        level: 13,
        description:
          "The spirit relic becomes a powerful focus for all the phantom's energy. While the relic is held or worn, the spiritualist treats her spiritualist level as 4 higher for all class abilities. Additionally, the relic can be used to project the phantom's full manifestation to any location within 1 mile as a swift action, though the phantom can only remain at the remote location for 1 minute before returning.",
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },
];
