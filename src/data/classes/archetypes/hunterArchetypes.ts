import { ArchetypeData, ClassFeatureData } from '../types';

export const HUNTER_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Divine Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Divine Hunter',
    className: 'Hunter',
    description:
      "The divine hunter serves a deity whose portfolio includes the hunt, directing her spiritual connection toward a sacred purpose. She exchanges some of the hunter's nature-based abilities for divine favor and a holy bond with her animal companion.",
    replacedFeatures: ['Animal Focus', 'One with the Wild'],
    modifiedFeatures: ['Animal Companion', "Hunter's Bond"],
    newFeatures: [
      {
        name: 'Divine Purpose',
        level: 1,
        description:
          "A divine hunter selects a deity at 1st level whose domain list includes Animal, Hunt, or a related thematic domain. She adds all domain spells of one domain from her deity's list to her hunter spell list.",
      },
      {
        name: 'Sacred Animal',
        level: 4,
        description:
          "At 4th level, the divine hunter's animal companion gains the celestial, fiendish, or entropic template (chosen to match the divine hunter's deity's alignment) and gains SR equal to the hunter's level + 5.",
      },
      {
        name: 'Holy Strike',
        level: 8,
        description:
          "At 8th level, the divine hunter's weapon attacks are treated as good (or evil, matching her deity) aligned for the purpose of overcoming damage reduction. She also adds her Wisdom modifier to damage rolls against creatures with the alignment subtype opposing her deity.",
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 2. Feykiller
  // ──────────────────────────────────────────────
  {
    name: 'Feykiller',
    className: 'Hunter',
    description:
      'The feykiller is trained to track and slay fey creatures, wielding cold iron and iron-laced lore against the capricious denizens of the First World. Her specialization makes her a terror to fey but limits her broader wilderness abilities.',
    replacedFeatures: ['One with the Wild', 'Master Hunter'],
    modifiedFeatures: ['Animal Focus', 'Teamwork Feats'],
    newFeatures: [
      {
        name: 'Fey Bane',
        level: 1,
        description:
          'A feykiller adds her Wisdom modifier (minimum +1) as a bonus on attack rolls and damage rolls against fey creatures. She is also never affected by fey enchantments that impose the confused or fascinated conditions unless she fails her saving throw by 5 or more.',
      },
      {
        name: 'Cold Iron Weapon',
        level: 2,
        description:
          "At 2nd level, the feykiller's attacks are treated as cold iron for the purpose of overcoming fey damage reduction. At 6th level, she can extend this benefit to her animal companion's natural attacks.",
      },
      {
        name: 'Iron Will Aura',
        level: 8,
        description:
          'At 8th level, the feykiller and allies within 10 feet gain a +4 morale bonus on saving throws against mind-affecting effects created by fey creatures.',
      },
      {
        name: "Fey Hunter's Quarry",
        level: 11,
        description:
          'At 11th level, once per day the feykiller can designate a fey creature as her quarry. Against her quarry, she automatically confirms all critical threats and gains blindsense 30 feet that functions only against the quarry.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 3. Forester
  // ──────────────────────────────────────────────
  {
    name: 'Forester',
    className: 'Hunter',
    description:
      "The forester is so deeply attuned to a specific woodland biome that she has become part of the forest itself. She trades the hunter's broad wilderness adaptability for an intense connection with trees and the spirits that inhabit them.",
    replacedFeatures: ['Animal Focus (self)', 'Raise Animal Companion', 'One with the Wild'],
    modifiedFeatures: ['Animal Companion'],
    newFeatures: [
      {
        name: 'Woodland Stride',
        level: 1,
        description:
          'A forester can move through any sort of undergrowth at her normal speed without taking damage or suffering any other impairment. This extends to magically manipulated vegetation at 8th level.',
      },
      {
        name: 'Forest Bond',
        level: 4,
        description:
          "At 4th level, the forester can commune with trees within 100 feet as a full-round action, learning general information about creatures that have passed within the trees' root network in the last 24 hours.",
      },
      {
        name: 'One with Trees',
        level: 8,
        description:
          'At 8th level, the forester can enter a tree and exit from any other tree within 100 feet, as tree stride. She can do this a number of times per day equal to 3 + her Wisdom modifier.',
      },
      {
        name: 'Tree Shape',
        level: 12,
        description:
          'At 12th level, the forester can assume the form of a Large tree as a standard action, gaining tremorsense 30 feet and the ability to observe everything within 30 feet. She can remain in tree form indefinitely and return to her normal form as a free action.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 4. Primal Companion Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Primal Companion Hunter',
    className: 'Hunter',
    description:
      'The primal companion hunter forges a uniquely powerful bond with her animal companion, sacrificing her own animal focus to instead empower her companion to incredible levels of primal ferocity. The companion becomes so powerful it can take on aspects beyond its normal animal nature.',
    replacedFeatures: ['Animal Focus (self)', 'Improved Empathic Link'],
    modifiedFeatures: ['Animal Focus', 'Animal Companion'],
    newFeatures: [
      {
        name: 'Primal Bond',
        level: 1,
        description:
          "A primal companion hunter's animal companion gains the benefits of two animal focus aspects simultaneously instead of one. Additionally, the companion's animal focus aspects are treated as if the hunter were 4 levels higher when determining their effects.",
      },
      {
        name: 'Primal Transformation',
        level: 8,
        description:
          "At 8th level, the primal companion hunter's animal companion can shift to a more powerful form once per day for 1 minute per hunter level. In this form, it gains a +4 enhancement bonus to Strength and Constitution, a +2 natural armor bonus, and its natural attacks are treated as magic for overcoming damage reduction.",
      },
      {
        name: 'Empowered Companion',
        level: 12,
        description:
          "At 12th level, the animal companion gains spell resistance equal to 11 + the hunter's level and becomes immune to mind-affecting effects while in its primal transformation.",
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 5. Scarab Stalker
  // ──────────────────────────────────────────────
  {
    name: 'Scarab Stalker',
    className: 'Hunter',
    description:
      "The scarab stalker follows Nethys or Sarenrae's obscure desert traditions, hunting undead and dark forces across arid wastelands alongside her desert-adapted animal companion. She replaces some nature-focused abilities with necromantic awareness and undead-hunting expertise.",
    replacedFeatures: ['One with the Wild', 'Speak with Master'],
    modifiedFeatures: ['Animal Companion', 'Animal Focus'],
    newFeatures: [
      {
        name: 'Undead Sense',
        level: 1,
        description:
          'A scarab stalker can detect undead creatures as a move action within 60 feet, as if using detect undead. She is also immune to the paralysis and energy drain caused by undead of CR equal to or less than her hunter level.',
      },
      {
        name: 'Sacred Scarab',
        level: 4,
        description:
          "At 4th level, the scarab stalker's animal companion gains the ability to detect undead creatures within 30 feet automatically, and its natural attacks are treated as if they have the ghost touch property against incorporeal undead.",
      },
      {
        name: 'Desert Adaptation',
        level: 6,
        description:
          'At 6th level, the scarab stalker and her animal companion are immune to the fatigued condition from environmental heat and need only half the normal amount of water to survive.',
      },
      {
        name: 'Tomb Raider',
        level: 10,
        description:
          'At 10th level, when the scarab stalker confirms a critical hit against an undead creature, she can choose to destroy it outright (no save) if its CR is equal to or less than half her hunter level.',
      },
    ],
    source: "Pathfinder Player Companion: Mummy's Mask",
  },

  // ──────────────────────────────────────────────
  // 6. Targeted Striker
  // ──────────────────────────────────────────────
  {
    name: 'Targeted Striker',
    className: 'Hunter',
    description:
      "The targeted striker is a precision hunter who trains both herself and her animal companion to strike vital points and exploit weaknesses. She trades some of the hunter's teamwork-focused abilities for a ruthless emphasis on crippling strikes.",
    replacedFeatures: ['Teamwork Feats (bonus)', "Hunter's Bond"],
    modifiedFeatures: ['Animal Focus'],
    newFeatures: [
      {
        name: 'Studied Target',
        level: 1,
        description:
          'As a swift action, the targeted striker can study an opponent she can see to gain a +1 competence bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against that target, and a +1 competence bonus on weapon attack rolls and damage rolls. This bonus increases by +1 for every 5 hunter levels.',
      },
      {
        name: 'Crippling Strike',
        level: 5,
        description:
          'At 5th level, once per day the targeted striker can declare a crippling strike when she confirms a critical hit against her studied target. The target is stunned for 1 round and its movement speed is reduced by half for 1 minute (Fortitude DC 10 + 1/2 hunter level + Wis modifier negates the movement reduction).',
      },
      {
        name: 'Coordinated Takedown',
        level: 9,
        description:
          "At 9th level, whenever the targeted striker and her animal companion both attack the studied target in the same round, the target takes a cumulative -2 penalty to AC and saving throws until the start of the targeted striker's next turn.",
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Verminous Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Verminous Hunter',
    className: 'Hunter',
    description:
      'The verminous hunter bonds with a vermin creature rather than a traditional animal companion, embracing the alien mindset of insects, arachnids, and other creeping things. She gains limited mental communication with her vermin companion and adopts some vermin-like qualities.',
    replacedFeatures: ['Speak with Master', 'Improved Empathic Link'],
    modifiedFeatures: ['Animal Companion', 'Animal Focus'],
    newFeatures: [
      {
        name: 'Vermin Companion',
        level: 1,
        description:
          "A verminous hunter selects a vermin companion instead of an animal companion. The vermin companion functions as a druid's animal companion, gaining the share spells and empathic link abilities. Vermin companions with Intelligence 1 or 2 cannot be taught tricks but can be commanded in combat via mental signals.",
      },
      {
        name: 'Vermin Empathy',
        level: 1,
        description:
          'The verminous hunter can improve the attitude of vermin creatures as a druid of her level, using a Charisma check against a base DC of 15 rather than a Diplomacy check.',
      },
      {
        name: 'Chitin Adaptation',
        level: 6,
        description:
          'At 6th level, the verminous hunter develops chitinous patches on her skin, granting her a +1 natural armor bonus to AC. This increases to +2 at 10th level and +3 at 14th level.',
      },
      {
        name: 'Vermin Shape',
        level: 10,
        description:
          'At 10th level, three times per day the verminous hunter can transform into any vermin of size Small to Large, as beast shape II but restricted to vermin. She can remain in vermin form for 1 hour per level per day, split up as desired.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 8. Wild Stalker
  // ──────────────────────────────────────────────
  {
    name: 'Wild Stalker',
    className: 'Hunter',
    description:
      "The wild stalker is a primal hunter who has discarded the trappings of civilization, embracing raw instinct and fury over trained tactics. She combines elements of the barbarian's rage with the hunter's connection to the wild.",
    replacedFeatures: ["Hunter's Bond", 'Teamwork Feats', 'One with the Wild'],
    modifiedFeatures: ['Animal Companion'],
    newFeatures: [
      {
        name: 'Rage',
        level: 4,
        description:
          'At 4th level, the wild stalker gains the barbarian rage ability, usable for a number of rounds per day equal to 4 + her Constitution modifier. She gains additional rounds of rage for every hunter level beyond 4th as if she were a barbarian.',
      },
      {
        name: 'Rage Powers',
        level: 6,
        description:
          "At 6th level and every 3 levels thereafter, the wild stalker gains one rage power from the barbarian's list, treating her hunter level as her barbarian level for determining prerequisites and effects.",
      },
      {
        name: 'Primal Senses',
        level: 8,
        description:
          'At 8th level, the wild stalker gains scent as an extraordinary ability while raging. At 14th level, she gains blindsense 10 feet while raging.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 9. Packmaster
  // ──────────────────────────────────────────────
  {
    name: 'Packmaster',
    className: 'Hunter',
    description:
      'Where most hunters partner with a single animal companion, the packmaster commands a pack of lesser creatures, orchestrating their movements like a battlefield general. She sacrifices the depth of a single powerful companion for the tactical flexibility of multiple smaller allies.',
    replacedFeatures: [
      'Animal Companion (single)',
      'Improved Empathic Link',
      'Raise Animal Companion',
    ],
    modifiedFeatures: ['Animal Focus', "Hunter's Bond"],
    newFeatures: [
      {
        name: 'Companions',
        level: 1,
        description:
          'Instead of one animal companion, a packmaster gains two animal companions whose combined levels equal her effective hunter level - 2 (minimum 1 each). She may command all companions simultaneously as a move action and apply her animal focus to each companion separately, though she cannot apply animal focus to herself.',
      },
      {
        name: 'Pack Tactics',
        level: 4,
        description:
          "At 4th level, all of the packmaster's animal companions gain the ability to flank together even if they are not on opposite sides of a target, as long as at least two companions threaten the same creature.",
      },
      {
        name: 'Coordinated Pack',
        level: 8,
        description:
          'At 8th level, the packmaster can grant all her animal companions a teamwork feat she knows as a swift action for 1 minute, even if the companions do not meet the prerequisites.',
      },
      {
        name: 'Pack Leader',
        level: 12,
        description:
          'At 12th level, the packmaster can add a third animal companion whose level counts against the same pool. Additionally, all animal companions gain a bonus on attack rolls equal to the number of other companions currently threatening the same target.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 10. Colluding Scoundrel
  // ──────────────────────────────────────────────
  {
    name: 'Colluding Scoundrel',
    className: 'Hunter',
    description:
      'The colluding scoundrel works in seamless concert with her animal companion to deceive, pickpocket, and ambush marks in urban environments. She trades some outdoor tracking expertise for urban cunning and the ability to use her companion as a distraction for criminal activities.',
    replacedFeatures: ['One with the Wild', 'Master Hunter'],
    modifiedFeatures: ['Animal Focus'],
    newFeatures: [
      {
        name: 'Urban Companion',
        level: 1,
        description:
          'The colluding scoundrel\'s animal companion gains Disable Device, Sleight of Hand, and Stealth as class skills. The companion can be trained to perform tasks equivalent to the "work" and "assist" tricks for these skills, using the hunter\'s bonus on those skill checks.',
      },
      {
        name: 'Diversion',
        level: 3,
        description:
          'At 3rd level, once per day per hunter level, the colluding scoundrel can direct her animal companion to create a diversion to allow the hunter to hide (as per the Bluff use for feinting in combat). While the companion performs the diversion, the hunter can also attempt Sleight of Hand with a +4 bonus.',
      },
      {
        name: 'Con Artist',
        level: 7,
        description:
          'At 7th level, the colluding scoundrel adds her Wisdom modifier to Bluff and Sleight of Hand checks. When the hunter and companion successfully use teamwork to pickpocket a target, the hunter can attempt a second, different pickpocket attempt against the same target in the same round as a free action.',
      },
      {
        name: 'Perfect Con',
        level: 11,
        description:
          "At 11th level, the colluding scoundrel can spend a full-round action directing her animal companion to take a completely different, seemingly unrelated action. Any creature observing the companion cannot attempt Perception checks to notice the hunter's own actions during that round unless the observer succeeds on a Sense Motive check (DC 20 + hunter's level).",
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 11. Courtly Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Courtly Hunter',
    className: 'Hunter',
    description:
      'The courtly hunter operates within civilized society, hunting criminals, political enemies, and social threats rather than wilderness prey. Her animal companion is carefully trained to function in urban environments, and she replaces wilderness skills with social acumen.',
    replacedFeatures: ['One with the Wild', 'Wild Empathy'],
    modifiedFeatures: ['Animal Companion', 'Teamwork Feats'],
    newFeatures: [
      {
        name: 'Social Grace',
        level: 1,
        description:
          'A courtly hunter gains Diplomacy, Bluff, and Knowledge (nobility) as class skills. She adds half her hunter level (minimum 1) as a bonus on Diplomacy checks made to gather information about a target she is hunting.',
      },
      {
        name: 'Civilized Companion',
        level: 1,
        description:
          "The courtly hunter's animal companion is trained to behave in civilized settings. It ignores the penalties from crowded areas and can make Perception checks to aid the hunter's Sense Motive checks as a free action.",
      },
      {
        name: 'Social Hunter',
        level: 5,
        description:
          'At 5th level, the courtly hunter can use her hunter abilities to track creatures through social interactions and paper trails. She substitutes Diplomacy or Bluff for Survival when tracking humanoid prey through civilized environments.',
      },
      {
        name: 'Network',
        level: 9,
        description:
          'At 9th level, the courtly hunter has cultivated informants in every major city she has spent at least one week in. She can spend 10 minutes and make a Diplomacy check (DC 15 + CR of prey) to locate the general whereabouts of a specific creature within such a city.',
      },
    ],
    source: 'Advanced Class Guide',
  },
];
