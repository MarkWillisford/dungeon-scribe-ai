import { ArchetypeData } from '../types';

export const SHAMAN_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Animist
  // ──────────────────────────────────────────────
  {
    name: 'Animist',
    className: 'Shaman',
    description:
      'The animist shaman foregoes a single powerful spirit bond in favor of forming connections with many minor spirits of the natural world, allowing her to channel a broader array of minor spirit powers. She trades the wandering spirit for a rotating host of lesser spiritual allies who inhabit the world around her.',
    replacedFeatures: ['Wandering Spirit', 'Wandering Hex'],
    modifiedFeatures: ['Spirit', 'Hex'],
    newFeatures: [
      {
        name: 'Spirit Familiars',
        level: 1,
        description:
          'Instead of one wandering spirit, the animist hosts three minor spirit familiars per day from the following list: air, beast, fire, stone, water, or wood. Each grants one minor spirit power from the corresponding shaman spirit. At 8th level she may host four spirit familiars.',
      },
      {
        name: 'Animist Hexes',
        level: 2,
        description:
          'The animist may select hexes from any spirit she has hosted as a spirit familiar in the past, even on days she does not currently host that spirit. Her hex save DC equals 10 + half her shaman level + her Wisdom modifier.',
      },
      {
        name: 'Unified Spirits',
        level: 8,
        description:
          'When the animist hosts three or more spirit familiars of complementary elements (GM adjudication), she gains a +2 insight bonus on all saving throws and her spirit familiar powers count as one caster level higher.',
      },
      {
        name: 'Spirit Chorus',
        level: 16,
        description:
          'Once per day, the animist can call upon all her spirit familiars simultaneously, gaining every minor spirit power from each hosted spirit for 1 round per shaman level. Using this ability is a full-round action.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 2. Herb Witch
  // ──────────────────────────────────────────────
  {
    name: 'Herb Witch',
    className: 'Shaman',
    description:
      'The herb witch is a village healer and herbalist who supplements her spirit magic with extensive botanical knowledge, combining natural remedies with spiritual power. She trades some offensive spirit abilities for curative hexes and herbal concoctions that function like alchemical extracts.',
    replacedFeatures: ['Spirit Animal', 'Wandering Hex'],
    modifiedFeatures: ['Hex', 'Spirit'],
    newFeatures: [
      {
        name: 'Herbalism',
        level: 1,
        description:
          'The herb witch can prepare a number of herbal remedies per day equal to her Wisdom modifier. Each remedy takes 1 minute to prepare and functions as a cure light wounds potion (at 1st level), scaling to cure moderate wounds at 7th level, cure serious wounds at 13th level, and cure critical wounds at 19th level.',
      },
      {
        name: 'Green Thumb',
        level: 1,
        description:
          "The herb witch adds Heal and Knowledge (nature) to her list of class skills and gains a +4 bonus on both. She can use Heal to provide long-term care in the field without a healer's kit if natural herbs are available in the environment.",
      },
      {
        name: 'Curative Hex',
        level: 2,
        description:
          'The herb witch may select the Healing hex at 2nd level even if she does not meet the level prerequisite, and her Healing hex heals an additional 1d6 hit points per use when combined with herbal preparations administered the same round.',
      },
      {
        name: 'Antitoxin Expert',
        level: 4,
        description:
          'The herb witch gains immunity to natural (non-magical) poisons and can prepare antitoxins from natural ingredients as a 10-minute ritual, providing a +8 alchemical bonus on saves against specific poisons to any creature she treats for 24 hours.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 3. Mammoth Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Mammoth Shaman',
    className: 'Shaman',
    description:
      'The mammoth shaman bonds with the primal spirits of megafauna and ancient beasts, channeling the raw power of prehistoric creatures long since passed into the spirit world. She trades the flexibility of spirit selection for the overwhelming force of the mammoth spirit.',
    replacedFeatures: ['Wandering Spirit'],
    modifiedFeatures: ['Spirit', 'Spirit Animal'],
    newFeatures: [
      {
        name: 'Mammoth Spirit',
        level: 1,
        description:
          "The mammoth shaman's spirit is always the Battle spirit, but all spirit powers and hexes she gains deal damage as if she were two levels higher. Her spirit animal takes the form of a mammoth calf (use boar stats) that grows as she advances in level.",
      },
      {
        name: 'Trample',
        level: 8,
        description:
          "At 8th level, the mammoth shaman can invoke the mammoth spirit's ability to trample, moving through enemies as a full-round action and dealing 2d8 + Strength modifier damage to all creatures in her path (Reflex DC 10 + half level + STR modifier for half).",
      },
      {
        name: 'Herd Bond',
        level: 4,
        description:
          "The mammoth shaman can share her spirit animal's senses and speak with megafauna (creatures of the animal type of Large size or larger) as a constant effect, and gains a +4 bonus on Handle Animal checks with such creatures.",
      },
      {
        name: 'Ancient Might',
        level: 16,
        description:
          'The mammoth shaman grows to Large size for a number of minutes per day equal to her shaman level (can be split into increments). In this form she gains a +4 size bonus to Strength and Constitution and reach increases by 5 feet.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 4. Possessed Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Possessed Shaman',
    className: 'Shaman',
    description:
      'The possessed shaman does not merely commune with spirits — she allows them to fully inhabit her body, temporarily relinquishing control to gain access to potent spiritual power. She trades the subtlety of spirit guidance for the raw intensity of full spiritual possession.',
    replacedFeatures: ['Spirit Animal', 'Wandering Spirit', 'Wandering Hex'],
    modifiedFeatures: ['Spirit', 'Hex'],
    newFeatures: [
      {
        name: 'Possession',
        level: 1,
        description:
          'Once per day as a standard action, the possessed shaman can allow her spirit to fully possess her body for a number of rounds equal to her shaman level. While possessed, she gains all the spirit powers and spell-like abilities of her spirit as if she were two levels higher, but cannot speak or cast spells not granted by the spirit.',
      },
      {
        name: 'Violent Expulsion',
        level: 4,
        description:
          'When the possession ends or is forcibly ended (such as by a banishment or protection from evil effect), the possessing spirit lashes out, dealing 1d6 points of damage per shaman level to all creatures within 10 feet (Will save DC 10 + half level + WIS modifier for half).',
      },
      {
        name: 'Multiple Hosts',
        level: 8,
        description:
          'The possessed shaman can allow up to two different spirits to possess her simultaneously, but each may only grant its minor spirit power. At 16th level, she may host three spirits simultaneously.',
      },
      {
        name: 'Perfect Vessel',
        level: 16,
        description:
          'The possessed shaman no longer loses control of her actions while possessed; she retains full awareness and can cast her own spells alongside spirit-granted abilities. Her possession duration increases to 1 minute per shaman level.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 5. Primalist
  // ──────────────────────────────────────────────
  {
    name: 'Primalist',
    className: 'Shaman',
    description:
      'The primalist shaman channels ancient, unrefined spirit power rather than the more disciplined forms of modern shamanic tradition, gaining access to raw elemental and primal hexes that are more powerful but harder to control. She trades spirit animal for a deeper bond with untamed elemental force.',
    replacedFeatures: ['Spirit Animal', 'Wandering Hex'],
    modifiedFeatures: ['Hex', 'Spirit'],
    newFeatures: [
      {
        name: 'Primal Hexes',
        level: 2,
        description:
          'The primalist may select hexes from the witch hex list in addition to the shaman hex list. When she selects a witch hex, her effective shaman level for determining hex effects equals her shaman level - 2 (minimum 1).',
      },
      {
        name: 'Elemental Focus',
        level: 1,
        description:
          'The primalist chooses one element (air, earth, fire, or water) at 1st level. She adds spells of that element to her spell list if not already present and gains a +1 bonus to her caster level for spells of that element.',
      },
      {
        name: 'Wild Surge',
        level: 8,
        description:
          'Once per day, the primalist can empower any hex or spirit power by tapping raw primal energy, doubling its numerical effects (damage, duration, or area as applicable). If she does, she must succeed at a Will save (DC 15) or be stunned for 1 round from the effort.',
      },
      {
        name: 'Primal Mastery',
        level: 16,
        description:
          "The primalist's Wild Surge becomes usable three times per day and no longer risks stunning her. Additionally, she gains SR equal to 11 + her shaman level against spells and effects of her non-chosen elements.",
      },
    ],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },

  // ──────────────────────────────────────────────
  // 6. Shadow Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Shadow Shaman',
    className: 'Shaman',
    description:
      'The shadow shaman communes with the spirits of darkness and void rather than the spirits of the natural world, trading the warmth of life-giving spirit magic for the cold power of shadow and negative energy. She selects from a shadow-flavored spirit list and gains shadow-based hexes.',
    replacedFeatures: ['Wandering Spirit', 'Wandering Hex'],
    modifiedFeatures: ['Spirit', 'Spirit Animal', 'Hex'],
    newFeatures: [
      {
        name: 'Shadow Spirit',
        level: 1,
        description:
          "The shadow shaman's spirit is always the Shadow spirit (if using the Spirit of the Dead rules from Horror Adventures) or the Dark Tapestry spirit. Her spirit animal is shadowy and translucent, granting it a 20% miss chance from concealment as a constant effect.",
      },
      {
        name: 'Umbral Hex',
        level: 2,
        description:
          'The shadow shaman may select the Evil Eye, Misfortune, or Nightmare hexes from the witch list as if they were shaman hexes. These hexes are powered by shadow energy and their visual effects are always dark, shadowy manifestations.',
      },
      {
        name: 'Shadow Step',
        level: 4,
        description:
          'The shadow shaman can step between shadows as a move action, teleporting up to 30 feet between areas of dim light or darkness. At 8th level this increases to 60 feet, and at 12th level she can carry one willing creature of her size or smaller.',
      },
      {
        name: 'Child of Shadow',
        level: 16,
        description:
          'The shadow shaman gains darkvision 60 feet (or adds 60 feet if she already has darkvision), concealment in areas of dim light or darkness, and immunity to shadow-subschool spells and effects.',
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 7. Speaker for the Past
  // ──────────────────────────────────────────────
  {
    name: 'Speaker for the Past',
    className: 'Shaman',
    description:
      'The speaker for the past forms bonds with the spirits of ancestors and the long dead rather than nature spirits, trading wilderness-focused abilities for historical knowledge and the power to draw on ancestral might. Her spirit animal is an ancestral guardian rather than a natural creature.',
    replacedFeatures: ['Wandering Spirit', 'Wandering Hex'],
    modifiedFeatures: ['Spirit', 'Spirit Animal', 'Hex'],
    newFeatures: [
      {
        name: 'Ancestral Bond',
        level: 1,
        description:
          "The speaker for the past's spirit is always the Ancestors spirit. Her spirit animal takes the form of a ghostly ancestor appropriate to her heritage and grants her the ability to converse with any intelligent undead as if using speak with dead, once per day per shaman level.",
      },
      {
        name: 'Historical Awareness',
        level: 2,
        description:
          'The speaker gains a +4 bonus on all Knowledge (history) checks and can use inspiration-style free action rerolls on Knowledge (history) and Knowledge (local) checks a number of times per day equal to her Wisdom modifier.',
      },
      {
        name: 'Ancestral Wrath',
        level: 4,
        description:
          "Once per day, the speaker can channel the rage of her ancestors, gaining a +2 morale bonus on attack rolls, damage rolls, and Will saving throws for a number of rounds equal to her Wisdom modifier. This functions as the barbarian's rage for the purpose of spells that interact with it.",
      },
      {
        name: 'Chronicle of Ages',
        level: 8,
        description:
          'The speaker can cast the spell contact other plane (modified to contact ancestral spirits) once per day as a spell-like ability, with the risk of Intelligence and Charisma loss reduced to apply only on a natural 1.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 8. Spirit Warden
  // ──────────────────────────────────────────────
  {
    name: 'Spirit Warden',
    className: 'Shaman',
    description:
      'The spirit warden acts as a guardian of the boundary between the world of the living and the spirit world, specializing in preventing hauntings and laying restless undead to rest. She trades some offensive spirit power for formidable defenses against undead and spiritual corruption.',
    replacedFeatures: ['Wandering Spirit', 'Wandering Hex'],
    modifiedFeatures: ['Spirit', 'Hex', 'Spirit Animal'],
    newFeatures: [
      {
        name: 'Ward the Dead',
        level: 1,
        description:
          'The spirit warden can spend a 10-minute ritual to sanctify a location of up to 10 square feet per shaman level, preventing undead from entering and suppressing hauntings within for 24 hours. She can maintain a number of such wards equal to her Wisdom modifier.',
      },
      {
        name: "Exorcist's Insight",
        level: 1,
        description:
          'The spirit warden can detect hauntings and undead within 60 feet as a constant effect and gains a +4 bonus on Knowledge (religion) checks related to undead, haunts, and the spirit world.',
      },
      {
        name: 'Banish Haunting',
        level: 4,
        description:
          "Once per day, the spirit warden can suppress or permanently banish a haunt by succeeding on a Knowledge (religion) check (DC = the haunt's CR + 10) during the haunt's manifestation, then spending a full-round action to drive it out.",
      },
      {
        name: 'Ghostbane',
        level: 8,
        description:
          "The spirit warden's weapon attacks and spirit-granted spells affect incorporeal undead as if using ghost touch, and undead take a -2 penalty on all attack rolls and saving throws against her attacks and abilities.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 9. Unsworn Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Unsworn Shaman',
    className: 'Shaman',
    description:
      'The unsworn shaman deliberately refuses to bond with a single spirit, instead maintaining loose ties with many spirits at once. She gains access to a much wider variety of hexes and spirit powers at the cost of having weaker and more limited versions of each.',
    replacedFeatures: ['Spirit', 'Greater Possession', 'True Spirit Mastery'],
    modifiedFeatures: ['Wandering Spirit', 'Wandering Hex', 'Hex'],
    newFeatures: [
      {
        name: 'Unfettered Wandering',
        level: 1,
        description:
          'The unsworn shaman may select a different wandering spirit each day with no restriction. Additionally, she may select wandering hexes from any spirit, not just her current wandering spirit. She prepares spells from a list combining all available shaman spirits.',
      },
      {
        name: 'Spirit Dabbler',
        level: 2,
        description:
          'The unsworn shaman gains one hex from any spirit at 2nd level and every two levels thereafter. She can select hexes from any spirit, regardless of her current spirit choices. However, she cannot gain the Greater Hex or Major Hex versions of these bonus hexes.',
      },
      {
        name: 'Jack of All Spirits',
        level: 8,
        description:
          "The unsworn shaman can use any spirit's minor spirit power for 1 minute per day per shaman level by spending a full-round action to commune with that spirit. She can divide this time among multiple spirits but cannot use the same spirit more than once per day.",
      },
      {
        name: 'Spiritual Versatility',
        level: 16,
        description:
          'The unsworn shaman can change her wandering spirit twice per day instead of once, selecting a different spirit each time. Her spirit-granted spells are now always treated as if she were 4 levels higher for the purpose of spell effects.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 10. Village Witch Doctor
  // ──────────────────────────────────────────────
  {
    name: 'Village Witch Doctor',
    className: 'Shaman',
    description:
      'The village witch doctor is a community healer and spiritual advisor who blends shamanic tradition with the practical folk magic of her community, serving as a protector and guide to the people who depend on her. She trades offensive spirit power for protective and curative abilities that benefit the whole village.',
    replacedFeatures: ['Wandering Spirit', 'Wandering Hex', 'Greater Possession'],
    modifiedFeatures: ['Hex', 'Spirit Animal'],
    newFeatures: [
      {
        name: 'Communal Protection',
        level: 1,
        description:
          'The village witch doctor can designate a number of creatures equal to her Wisdom modifier as her "ward." Warded creatures gain a +1 resistance bonus on all saving throws, and the witch doctor is immediately alerted (as a mental impression) when a warded creature is in danger.',
      },
      {
        name: 'Healing Brews',
        level: 1,
        description:
          'The village witch doctor can prepare a number of herbal healing brews per day equal to 3 + her Wisdom modifier, each functioning as a potion of cure light wounds. At 4th level, half the brews function as cure moderate wounds. At 8th level, all brews function as cure serious wounds.',
      },
      {
        name: 'Communal Hex',
        level: 4,
        description:
          'The village witch doctor can apply the beneficial effects of her hexes (such as Healing, Fortune, or Ward) to all warded creatures simultaneously as a single standard action, though each creature still counts toward the once-per-day per target limitation.',
      },
      {
        name: 'Spirit of the Village',
        level: 8,
        description:
          "Within a settlement the village witch doctor has called home for at least one month, she is treated as if she had the Aid Another action succeed automatically on behalf of any warded creature's skill check, and her hexes'  DC increases by 2 when used to protect rather than harm.",
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 11. Witch Doctor
  // ──────────────────────────────────────────────
  {
    name: 'Witch Doctor',
    className: 'Shaman',
    description:
      'The witch doctor is a shaman who draws heavily on the traditions of witchcraft, mixing shamanic spirit bonds with the curse-casting and hex traditions of the witch class. She gains access to witch hexes but loses some of the deeper spirit mastery of the traditional shaman.',
    replacedFeatures: ['Greater Possession', 'True Spirit Mastery'],
    modifiedFeatures: ['Hex', 'Spirit', 'Wandering Hex'],
    newFeatures: [
      {
        name: 'Witch Hexes',
        level: 2,
        description:
          'The witch doctor can select hexes from the witch hex list in addition to the shaman hex list, treating her shaman level as her witch level for the purpose of hex effects and prerequisites. She can select major hexes at 10th level and grand hexes at 18th level.',
      },
      {
        name: 'Curse of the Witch Doctor',
        level: 4,
        description:
          'The witch doctor can bestow a minor curse on a creature by spending 1 minute in a ritual with a physical focus (a fetish doll, symbolic object, or similar). The cursed creature suffers a -2 penalty on attack rolls and saving throws for 24 hours; a successful Will save (DC 10 + half level + WIS) halves the duration.',
      },
      {
        name: 'Fetish Power',
        level: 8,
        description:
          'The witch doctor can craft fetish items that store a single hex effect for later activation. A fetish takes 1 hour and 100 gp of materials to craft and can be triggered by any creature holding it as a standard action, up to once per day.',
      },
      {
        name: 'Persistent Curse',
        level: 12,
        description:
          'Curses the witch doctor applies through her hexes or Curse of the Witch Doctor ability are treated as if they have the persistent spell metamagic applied, forcing targets who succeed on saves to roll twice and take the worse result.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 12. Bone Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Bone Shaman',
    className: 'Shaman',
    description:
      'The bone shaman communes with the spirits of ancestors through their physical remains, using bones and grave goods as foci for spirit magic. She trades the living spirit animal for a bone construct companion and develops an affinity for death-related spirits and hexes.',
    replacedFeatures: ['Spirit Animal', 'Wandering Hex'],
    modifiedFeatures: ['Spirit', 'Hex'],
    newFeatures: [
      {
        name: 'Bone Focus',
        level: 1,
        description:
          "The bone shaman carries an ancestral bone focus (a specially prepared skull or set of bones) that functions as her spirit animal focus. She can use this focus to channel spirit energy without the spirit animal being present, but loses the focus's benefits if it is destroyed (it can be replaced in a 24-hour ritual).",
      },
      {
        name: 'Bone Servant',
        level: 1,
        description:
          'The bone shaman can animate a single skeleton or zombie as a spell-like ability once per day, treating her shaman level as her cleric level for the purpose of the animate dead spell. Undead created this way count against her Hit Dice limit and dissolve at the next sunset.',
      },
      {
        name: 'Deathsense',
        level: 4,
        description:
          'The bone shaman can detect undead within 60 feet as a constant effect and gains a +2 bonus on all attack rolls and saving throws against undead. She can also sense when death has occurred within the last hour within 100 feet.',
      },
      {
        name: 'Reliquary Power',
        level: 8,
        description:
          "The bone shaman's bone focus becomes a powerful reliquary that grants an additional spirit power from her chosen spirit (as if she were 8 levels higher, selecting from the spirit's ability list). The reliquary's power resets each day at dawn.",
      },
    ],
    source: 'Pathfinder Player Companion: People of the Stars',
  },

  // ──────────────────────────────────────────────
  // 13. River Shaman
  // ──────────────────────────────────────────────
  {
    name: 'River Shaman',
    className: 'Shaman',
    description:
      'The river shaman bonds with the spirits of flowing water — rivers, streams, and floods — gaining powerful water-themed spirit abilities and the ability to commune with water-dwelling creatures. She trades the flexibility of spirit selection for deep mastery of the water and nature spirits.',
    replacedFeatures: ['Wandering Spirit', 'Wandering Hex'],
    modifiedFeatures: ['Spirit', 'Spirit Animal'],
    newFeatures: [
      {
        name: 'River Bond',
        level: 1,
        description:
          "The river shaman's spirit is always the Nature spirit, but she treats the water domain as her primary domain for all purposes. Her spirit animal must be an aquatic or amphibious creature, and it gains a swim speed equal to its land speed.",
      },
      {
        name: 'Fluid Movement',
        level: 1,
        description:
          'The river shaman gains a swim speed of 30 feet and can breathe water. She suffers no penalties for fighting in water and can move through it as difficult terrain rather than as normal water movement rules.',
      },
      {
        name: "River's Voice",
        level: 4,
        description:
          'The river shaman can speak with any creature with the aquatic subtype or a swim speed, as if using speak with animals, and can ask rivers and streams questions once per day as if using commune with nature focused on water features.',
      },
      {
        name: 'Flood Surge',
        level: 8,
        description:
          'Once per day as a standard action, the river shaman can call upon the river spirit to unleash a surge of water in a 60-foot line dealing 6d6 bludgeoning damage (Reflex DC 10 + half level + WIS modifier for half) and knocking creatures prone on a failed save.',
      },
    ],
    source: 'Pathfinder Player Companion: People of the River',
  },
];
