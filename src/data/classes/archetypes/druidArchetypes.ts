import { ArchetypeData } from '../types';

export const DRUID_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Aquatic Druid
  // ──────────────────────────────────────────────
  {
    name: 'Aquatic Druid',
    className: 'Druid',
    description:
      'An aquatic druid is the guardian of lakes, rivers, and oceans, gaining powers tied to aquatic environments and creatures.',
    replacedFeatures: [
      'Nature Bond',
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape', 'Wild Empathy'],
    newFeatures: [
      {
        name: 'Aquatic Adaptation',
        level: 2,
        description:
          'The aquatic druid gains a swim speed equal to half her land speed. She can hold her breath for a number of rounds equal to 4 times her Constitution score before she must start making checks to avoid drowning.',
        effects: [],
      },
      {
        name: 'Natural Swimmer',
        level: 3,
        description:
          'The aquatic druid gains a bonus on Swim checks equal to half her druid level and can always take 10 on Swim checks.',
        effects: [],
      },
      {
        name: "Resist Ocean's Fury",
        level: 4,
        description:
          'The aquatic druid gains a +4 bonus on saving throws against the spell-like and supernatural abilities of creatures with the aquatic or water subtype.',
        effects: [],
      },
      {
        name: 'Aquatic Wild Shape',
        level: 4,
        description:
          'Wild shape functions as beast shape III for aquatic creatures only at 6th level, improving to beast shape IV for aquatic creatures at 8th level, and elemental body (water only) at 10th level.',
        effects: [],
      },
      {
        name: 'Seaborn',
        level: 9,
        description:
          'The aquatic druid gains the aquatic subtype, the amphibious special quality, and a swim speed equal to her land speed. She can breathe water freely.',
        effects: [],
      },
      {
        name: 'Deep Diver',
        level: 13,
        description:
          'The aquatic druid gains immunity to pressure damage from deep water and cold damage from frigid water. She gains blindsense 30 feet while underwater.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 2. Arctic Druid
  // ──────────────────────────────────────────────
  {
    name: 'Arctic Druid',
    className: 'Druid',
    description:
      'An arctic druid watches over the icy tundra and frozen wastes, drawing power from the cold and snow.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Arctic Native',
        level: 2,
        description:
          'The arctic druid gains cold resistance 5 and treats ice and snow as normal terrain rather than difficult terrain.',
        effects: [],
      },
      {
        name: 'Icewalking',
        level: 3,
        description:
          'The arctic druid can move across icy surfaces without penalty and does not need to make Acrobatics checks to run or charge on ice.',
        effects: [],
      },
      {
        name: 'Arctic Endurance',
        level: 4,
        description:
          'The arctic druid gains a +4 bonus on saving throws against cold-based effects and the spell-like abilities of creatures with the cold subtype.',
        effects: [],
      },
      {
        name: 'Arctic Wild Shape',
        level: 6,
        description:
          'The arctic druid can assume the form of animals native to cold environments. At 6th level she adds cold-climate creatures. At 10th level she can become a Large ice elemental.',
        effects: [],
      },
      {
        name: 'Snowcaster',
        level: 9,
        description:
          'The arctic druid gains cold resistance 20 and can see through natural and magical fog, sleet, and snow without penalty.',
        effects: [],
      },
      {
        name: 'Flurry Form',
        level: 13,
        description:
          'The arctic druid can assume a gaseous form made of swirling snow at will, functioning as gaseous form but with a fly speed of 60 feet.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 3. Bat Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Bat Shaman',
    className: 'Druid',
    description:
      'A bat shaman is a druid whose totem is the bat, gaining abilities related to darkness, echolocation, and flight.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Bat)',
        level: 2,
        description:
          'The bat shaman may adopt an aspect of the bat while retaining her normal form. She gains one of the following: a fly speed of 30 feet (average), darkvision 60 feet, or blindsense 20 feet. At 7th level she may select two aspects, and at 12th level all three. She can use this ability for a number of minutes per day equal to her druid level, in 1-minute increments.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The bat shaman may cast summon nature's ally as a standard action when summoning bats, and summoned bat creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Bat)',
        level: 6,
        description:
          "The bat shaman's wild shape is treated as two levels higher for bat forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 4. Bear Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Bear Shaman',
    className: 'Druid',
    description:
      'A bear shaman is a druid whose totem is the bear, gaining strength, toughness, and ferocity associated with ursines.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Bear)',
        level: 2,
        description:
          'The bear shaman may adopt an aspect of the bear while retaining her normal form. She gains one of the following: movement (+10 enhancement bonus to land speed), senses (low-light vision, scent), toughness (+2 natural armor, Endurance feat), or natural weapons (two claw attacks 1d6 plus grab for a Medium druid). At 7th level she may select two aspects, and at 12th level all three. Usable a number of minutes per day equal to her druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The bear shaman may cast summon nature's ally as a standard action when summoning bears, and summoned bear creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Bear)',
        level: 6,
        description:
          "The bear shaman's wild shape is treated as two levels higher for bear forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 5. Blight Druid
  // ──────────────────────────────────────────────
  {
    name: 'Blight Druid',
    className: 'Druid',
    description:
      'A blight druid draws power from decay and corruption in the natural world, serving as an agent of entropy and destruction.',
    replacedFeatures: [
      'Nature Sense',
      'Nature Bond',
      'Wild Empathy',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
      'Timeless Body',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: "Nature's Destruction",
        level: 1,
        description:
          'A blight druid gains a +2 bonus on Knowledge (nature) and Survival checks relating to blighted, cursed, or diseased terrain.',
        effects: [],
      },
      {
        name: 'Miasma',
        level: 1,
        description:
          'Starting at 1st level, the blight druid can create a cloud of nauseating miasma within 30 feet as a standard action. The cloud is a 10-foot-radius spread lasting 1 round per druid level. Creatures entering or starting their turn in the cloud must succeed on a Fortitude save or be sickened for 1 round. Uses per day equal to 3 + Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Vermin Empathy',
        level: 1,
        description:
          'A blight druid can improve the attitude of vermin as a normal druid can with animals. She gains a bonus on these checks equal to her druid level.',
        effects: [],
      },
      {
        name: 'Resist Corruption',
        level: 4,
        description:
          'The blight druid gains a +4 bonus on saves against disease, energy drain, and the effects of negative energy.',
        effects: [],
      },
      {
        name: 'Blighted Wild Shape',
        level: 6,
        description:
          'When using wild shape, the blight druid can expend an additional use to add the diseased creature template to her form, gaining a disease attack appropriate to the form.',
        effects: [],
      },
      {
        name: 'Plaguebearer',
        level: 9,
        description:
          'The blight druid becomes immune to all diseases. Any creature striking her with a natural attack or unarmed strike must save against filth fever.',
        effects: [],
      },
      {
        name: 'Incarnation of Entropy',
        level: 13,
        description:
          'The blight druid becomes immune to energy drain and death effects. She does not age and cannot be magically aged, though any penalties she has already taken remain.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 6. Cave Druid
  // ──────────────────────────────────────────────
  {
    name: 'Cave Druid',
    className: 'Druid',
    description:
      'A cave druid protects the underground caverns and subterranean ecosystems, attuned to fungus, oozes, and creatures of the deep earth.',
    replacedFeatures: [
      'Nature Sense',
      'Wild Empathy',
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Cavesense',
        level: 1,
        description:
          'A cave druid adds Knowledge (dungeoneering) to her class skills and gains a +2 bonus on Knowledge (dungeoneering) and Survival checks made underground.',
        effects: [],
      },
      {
        name: 'Tunnelrunner',
        level: 2,
        description:
          'The cave druid can move through natural difficult terrain underground at normal speed. She also gains a +1 bonus on initiative checks and Knowledge (dungeoneering), Perception, Stealth, and Survival checks while underground. This bonus increases by +1 every 3 levels thereafter.',
        effects: [],
      },
      {
        name: 'Lightfoot',
        level: 3,
        description:
          'The cave druid cannot be tracked underground. She may choose to leave a trail if desired.',
        effects: [],
      },
      {
        name: 'Resist Subterranean Corruption',
        level: 4,
        description:
          'The cave druid gains a +4 bonus on saves against the abilities of oozes and aberrations.',
        effects: [],
      },
      {
        name: 'Cave Wild Shape',
        level: 6,
        description:
          'At 6th level, the cave druid can use wild shape to assume ooze forms as beast shape III. At 8th level she adds Small and Medium ooze forms. At 10th level she adds Tiny and Large ooze forms.',
        effects: [],
      },
      {
        name: 'Subterranean Immunity',
        level: 9,
        description:
          'The cave druid gains immunity to all poisons and diseases from vermin, oozes, and aberrations.',
        effects: [],
      },
      {
        name: 'Timeless Body (Underground)',
        level: 13,
        description:
          'The cave druid gains tremorsense 30 feet and can sense the presence of tunnels and caves within 100 feet, as if using the spell find the path, but limited to subterranean areas.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 7. Desert Druid
  // ──────────────────────────────────────────────
  {
    name: 'Desert Druid',
    className: 'Druid',
    description:
      'A desert druid protects arid wastes, sandswept badlands, and scorching dunes, gaining powers suited to the harshest dry environments.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape', 'Nature Bond'],
    newFeatures: [
      {
        name: 'Desert Native',
        level: 2,
        description:
          'The desert druid gains fire resistance 5 and treats sand and loose earth as normal terrain rather than difficult terrain.',
        effects: [],
      },
      {
        name: 'Sandwalker',
        level: 3,
        description:
          'The desert druid leaves no trail in sandy or dusty terrain and cannot be tracked in such environments. She may choose to leave a trail if desired.',
        effects: [],
      },
      {
        name: 'Desert Endurance',
        level: 4,
        description:
          'The desert druid gains a +4 bonus on saving throws against fire-based effects and the spell-like and supernatural abilities of creatures with the fire subtype.',
        effects: [],
      },
      {
        name: 'Desert Wild Shape',
        level: 6,
        description:
          'At 6th level the desert druid adds desert-dwelling creatures to her available wild shape forms. At 10th level she can assume the form of a Small or Medium fire elemental, as elemental body I.',
        effects: [],
      },
      {
        name: 'Shimmering Heat',
        level: 9,
        description:
          'The desert druid gains fire resistance 20 and a +4 bonus on Stealth checks in desert terrain due to heat distortion.',
        effects: [],
      },
      {
        name: 'Sandform',
        level: 13,
        description:
          'The desert druid can transform into a cloud of whirling sand at will, functioning as gaseous form but with a fly speed of 60 feet. She deals 1d6 points of slashing damage to creatures she passes through.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 8. Dinosaur Druid
  // ──────────────────────────────────────────────
  {
    name: 'Dinosaur Druid',
    className: 'Druid',
    description:
      'A dinosaur druid has a deep connection to the primeval beasts of a lost age, gaining abilities that harken back to the time of saurian dominance.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Nature Bond', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Primeval Bond',
        level: 1,
        description:
          'A dinosaur druid must select an animal companion from among dinosaur companions. Alternatively, she may select the Animal or Scalykind domain.',
        effects: [],
      },
      {
        name: 'Dinosaur Wild Shape',
        level: 4,
        description:
          'At 4th level, the dinosaur druid can wild shape into a dinosaur as beast shape II. Her effective druid level for wild shape into dinosaur forms is her druid level + 1. Her wild shape for non-dinosaur forms treats her level as her druid level - 2.',
        effects: [],
      },
      {
        name: 'Saurian Fortitude',
        level: 4,
        description:
          'The dinosaur druid gains a +4 bonus on saving throws against disease and the supernatural abilities of dinosaurs and reptiles.',
        effects: [],
      },
      {
        name: 'Primal Surge',
        level: 9,
        description:
          'Once per day, when using wild shape to assume a dinosaur form, the dinosaur druid can grant herself a +2 alchemical bonus to Strength, Dexterity, or Constitution for the duration of the wild shape.',
        effects: [],
      },
      {
        name: 'Ancient Guardian',
        level: 13,
        description: 'The dinosaur druid gains DR 2/— while in a dinosaur wild shape form.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 9. Dragon Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Dragon Shaman',
    className: 'Druid',
    description:
      'A dragon shaman is a druid whose totem is the dragon, gaining draconic aspects including breath weapons, frightful presence, and elemental resistance.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Dragon Totem',
        level: 1,
        description:
          'The dragon shaman must choose a dragon type (chromatic or metallic). This determines the energy type of her totem transformation abilities. If she selects an animal companion, it gains the draconic companion archetype.',
        effects: [],
      },
      {
        name: 'Totem Transformation (Dragon)',
        level: 2,
        description:
          'The dragon shaman may adopt aspects of her dragon totem while in her normal form. She gains one of the following: movement (+30 ft fly speed with average maneuverability), senses (blindsense 30 ft), toughness (+2 natural armor), or natural weapons (two claw attacks and a bite). At 7th level she may select two aspects, at 12th level all four. Usable a number of minutes per day equal to her druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The dragon shaman may cast summon nature's ally as a standard action when summoning reptilian creatures, and summoned reptilian creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Dragon)',
        level: 6,
        description:
          "At 6th level, the dragon shaman's wild shape treats her druid level as two levels higher for assuming reptilian forms, and two levels lower for all other forms. At 12th level, she can use form of the dragon I instead of beast shape.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 10. Eagle Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Eagle Shaman',
    className: 'Druid',
    description:
      'An eagle shaman is a druid whose totem is the eagle, gaining keen senses, flight, and the majestic bearing of raptors.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Eagle)',
        level: 2,
        description:
          'The eagle shaman may adopt aspects of the eagle. She gains one of the following: movement (+30 ft fly speed with average maneuverability), senses (+4 racial bonus on Perception), natural weapons (2 talons 1d4 and bite 1d4), or toughness (+2 natural armor). At 7th level she may select two aspects, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The eagle shaman may cast summon nature's ally as a standard action when summoning eagles or rocs, and summoned bird creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Eagle)',
        level: 6,
        description:
          "The eagle shaman's wild shape is treated as two levels higher for eagle and bird forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 11. Feral Shifter
  // ──────────────────────────────────────────────
  {
    name: 'Feral Shifter',
    className: 'Druid',
    description:
      'A feral shifter forgoes the broader aspects of druidic magic to focus on the primal power of wild shape, becoming a savage combatant.',
    replacedFeatures: [
      'Nature Bond',
      'Nature Sense',
      'Wild Empathy',
      'A Thousand Faces',
      'Timeless Body',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Savage',
        level: 1,
        description:
          'A feral shifter gains Improved Unarmed Strike as a bonus feat and deals damage with unarmed strikes as a monk of her druid level - 4 (minimum 1st level monk).',
        effects: [],
      },
      {
        name: 'Feral Instinct',
        level: 1,
        description:
          'The feral shifter gains a +2 bonus on initiative checks and a +2 bonus on Perception checks. These bonuses increase by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Enhanced Wild Shape',
        level: 4,
        description:
          'The feral shifter gains wild shape at 4th level as normal, but her effective druid level for wild shape is her druid level + 2. She can also maintain her wild shape for 2 additional hours per use.',
        effects: [],
      },
      {
        name: 'Feral Combat',
        level: 6,
        description:
          'While in wild shape, the feral shifter gains a +1 bonus on attack and damage rolls with natural weapons. This bonus increases by +1 at 10th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Primal Fury',
        level: 9,
        description:
          'Once per day while in wild shape, the feral shifter can enter a primal fury as a free action, gaining +4 Strength, +4 Constitution, and -2 AC for a number of rounds equal to her Wisdom modifier.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 12. Goliath Druid
  // ──────────────────────────────────────────────
  {
    name: 'Goliath Druid',
    className: 'Druid',
    description:
      'A goliath druid focuses on the largest creatures and most towering plants, eventually becoming a colossus of the natural world.',
    replacedFeatures: ['Woodland Stride', 'Trackless Step', 'A Thousand Faces', 'Venom Immunity'],
    modifiedFeatures: ['Nature Bond', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Face of the Wild',
        level: 1,
        description:
          'A goliath druid must select an animal companion. Her animal companion must be a megafauna or other Large or larger creature. At 7th level, the companion gains a +2 size bonus to Strength.',
        effects: [],
      },
      {
        name: 'Great Wild Shape',
        level: 4,
        description:
          'At 4th level, the goliath druid can wild shape into Large animals. At 6th level she can become Huge animals. At 8th level she gains giant form I, and at 12th level giant form II. She cannot assume forms smaller than Medium.',
        effects: [],
      },
      {
        name: 'Colossus Stride',
        level: 2,
        description:
          'The goliath druid and her mount or animal companion treat difficult terrain caused by natural undergrowth, rubble, or uneven ground as normal terrain.',
        effects: [],
      },
      {
        name: 'Powerful Build',
        level: 9,
        description:
          'While in wild shape, the goliath druid gains a +2 bonus to CMB and CMD and can wield weapons one size category larger without penalty.',
        effects: [],
      },
      {
        name: 'Enormous Presence',
        level: 13,
        description:
          'While in a wild shape form of Huge size or larger, the goliath druid gains frightful presence with a range of 30 feet. Creatures must succeed on a Will save (DC 10 + half druid level + Wisdom modifier) or become shaken.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 13. Green Faith Initiate
  // ──────────────────────────────────────────────
  {
    name: 'Green Faith Initiate',
    className: 'Druid',
    description:
      'A Green Faith initiate is a devout follower of the Green Faith philosophy, gaining powers from her direct connection to the natural world rather than any specific deity.',
    replacedFeatures: ["Resist Nature's Lure", 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Nature Bond'],
    newFeatures: [
      {
        name: 'Aura of the Green Faith',
        level: 1,
        description:
          'A Green Faith initiate selects one of the following Green Faith philosophies at 1st level: the Green, the Stag, or the Storm. This choice determines bonus spells and some class features.',
        effects: [],
      },
      {
        name: 'Green Faith Tenets',
        level: 4,
        description:
          'The Green Faith initiate gains a +4 bonus on saving throws against enchantment effects and abilities of fey creatures.',
        effects: [],
      },
      {
        name: "Nature's Wholeness",
        level: 9,
        description:
          'The Green Faith initiate gains fast healing 1 while standing on natural earth or stone. This increases to fast healing 3 at 13th level.',
        effects: [],
      },
      {
        name: 'One with the Green',
        level: 13,
        description:
          'The Green Faith initiate can merge with a living plant or tree once per day as a full-round action, as if using tree stride, but she can remain within the plant indefinitely. While merged, she heals 1 hit point per hour and is aware of her surroundings within 60 feet.',
        effects: [],
      },
    ],
    source: 'Faiths & Philosophies',
  },

  // ──────────────────────────────────────────────
  // 14. Jungle Druid
  // ──────────────────────────────────────────────
  {
    name: 'Jungle Druid',
    className: 'Druid',
    description:
      'A jungle druid thrives in tropical forests and dense jungles, mastering the oppressive heat, disease-ridden swamps, and diverse wildlife of the tropics.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Jungle Guardian',
        level: 2,
        description:
          'The jungle druid moves through jungle undergrowth at normal speed and without taking damage or other impairment. She also gains a climb speed of 15 feet.',
        effects: [],
      },
      {
        name: 'Verdant Passage',
        level: 3,
        description:
          'The jungle druid cannot be tracked through jungle or forest terrain. She may choose to leave a trail if desired.',
        effects: [],
      },
      {
        name: 'Torrid Endurance',
        level: 4,
        description:
          'The jungle druid gains a +4 bonus on saves against disease, the extraordinary and supernatural abilities of magical beasts native to tropical environments, and on Fortitude saves against extreme heat.',
        effects: [],
      },
      {
        name: 'Jungle Wild Shape',
        level: 6,
        description:
          'The jungle druid can assume the form of tropical animals and dinosaurs. Her effective druid level for assuming forms of tropical animals is her druid level + 1.',
        effects: [],
      },
      {
        name: 'Jungle Resilience',
        level: 9,
        description:
          'The jungle druid gains immunity to disease and a +4 bonus on saves against paralysis and poison.',
        effects: [],
      },
      {
        name: 'Chameleon Step',
        level: 13,
        description:
          'The jungle druid can cast tree stride at will while in a jungle or forest environment.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 15. Kraken Caller
  // ──────────────────────────────────────────────
  {
    name: 'Kraken Caller',
    className: 'Druid',
    description:
      'A kraken caller is a druid of the deep oceans who forges a bond with the great tentacled leviathans of the abyss, gaining terrible powers from the darkest depths.',
    replacedFeatures: [
      'Nature Bond',
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Tentacle',
        level: 1,
        description:
          'The kraken caller grows a single tentacle as a primary natural attack dealing 1d6 bludgeon damage for a Medium druid. At 4th level and every 4 levels thereafter, she gains an additional tentacle, to a maximum of 5 tentacles at 16th level. Tentacles have grab.',
        effects: [],
      },
      {
        name: 'Oceanic Adaptation',
        level: 2,
        description: 'The kraken caller can breathe underwater and gains a swim speed of 30 feet.',
        effects: [],
      },
      {
        name: 'Resist the Depths',
        level: 4,
        description:
          'The kraken caller gains a +4 bonus on saves against the supernatural abilities of aquatic and water creatures and immunity to pressure damage from deep water.',
        effects: [],
      },
      {
        name: 'Abyssal Wild Shape',
        level: 6,
        description:
          'The kraken caller can wild shape into aquatic creatures, including octopi and squid, treating her effective druid level as two levels higher for such forms.',
        effects: [],
      },
      {
        name: 'Inky Cloud',
        level: 9,
        description:
          'Once per day while underwater, the kraken caller can emit a 20-foot-radius cloud of ink that provides total concealment. The cloud lasts for 1 minute.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 16. Lion Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Lion Shaman',
    className: 'Druid',
    description:
      'A lion shaman is a druid whose totem is the lion, embodying regal authority, courage, and the power of the pride.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Lion)',
        level: 2,
        description:
          'The lion shaman may adopt aspects of the lion while in normal form. She gains one of the following: movement (+20 ft enhancement bonus to speed), senses (scent 30 ft), natural weapons (bite 1d4 and 2 claws 1d4 plus rake), or toughness (+2 natural armor). At 7th level she may select two, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The lion shaman may cast summon nature's ally as a standard action when summoning felines, and summoned feline creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Lion)',
        level: 6,
        description:
          "The lion shaman's wild shape is treated as two levels higher for feline forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 17. Menhir Savant
  // ──────────────────────────────────────────────
  {
    name: 'Menhir Savant',
    className: 'Druid',
    description:
      'A menhir savant draws spiritual power from ancient standing stones and sacred sites, gaining the ability to sense and manipulate the flow of spiritual energy.',
    replacedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Spirit Sense',
        level: 1,
        description:
          'The menhir savant can detect undead, fey, and outsiders within 30 feet as a standard action, as if using detect undead but applying to all three creature types.',
        effects: [],
      },
      {
        name: 'Place Magic',
        level: 2,
        description:
          'The menhir savant learns to identify and draw power from places of spiritual significance. She gains a +1 bonus to caster level when casting druid spells at such a site. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Walk the Lines',
        level: 9,
        description:
          'The menhir savant can transport herself along ley lines as if using teleport, but only between known places of power. She can use this ability once per day, plus one additional time per day for every 4 druid levels beyond 9th.',
        effects: [],
      },
      {
        name: 'Empty Body',
        level: 13,
        description:
          'The menhir savant can become ethereal as if using ethereal jaunt for a number of rounds per day equal to her druid level. These rounds need not be consecutive.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 18. Mooncaller
  // ──────────────────────────────────────────────
  {
    name: 'Mooncaller',
    className: 'Druid',
    description:
      'A mooncaller draws power from the moon, gaining the ability to channel lunar energy for divination, illumination, and transformation.',
    replacedFeatures: ["Resist Nature's Lure", 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Moonlight',
        level: 1,
        description:
          'A mooncaller adds the following spells to her druid spell list: 1st — faerie fire, 3rd — daylight, 4th — moonstruck, 7th — lunar veil.',
        effects: [],
      },
      {
        name: 'Resist Lycanthropy',
        level: 4,
        description:
          'The mooncaller gains a +4 bonus on saves against the curse of lycanthropy and any effects that would change her form against her will.',
        effects: [],
      },
      {
        name: 'Purity of Body',
        level: 9,
        description:
          'The mooncaller gains immunity to all diseases, including supernatural and magical diseases.',
        effects: [],
      },
      {
        name: 'Wolfsbane',
        level: 13,
        description:
          'A mooncaller can cast remove curse once per day as a spell-like ability (caster level equal to her druid level) specifically to cure lycanthropy. She can also use her wild shape to assume a hybrid lycanthrope form, gaining the benefits of a lycanthrope template but without contracting lycanthropy.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 19. Mountain Druid
  // ──────────────────────────────────────────────
  {
    name: 'Mountain Druid',
    className: 'Druid',
    description:
      'A mountain druid protects high peaks, alpine meadows, and rocky crags, gaining powers over stone and earth.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Mountaineer',
        level: 2,
        description:
          'The mountain druid gains a climb speed of 10 feet and a +4 bonus on saves against altitude sickness and similar effects. She treats rocky slopes and scree as normal terrain.',
        effects: [],
      },
      {
        name: 'Sure-Footed',
        level: 3,
        description:
          'The mountain druid cannot be tracked in rocky or mountainous terrain and gains a +4 bonus on Acrobatics checks to avoid falling.',
        effects: [],
      },
      {
        name: 'Spire Walker',
        level: 4,
        description:
          'The mountain druid gains a +4 bonus on saves against petrification and the spell-like abilities of creatures with the earth subtype.',
        effects: [],
      },
      {
        name: 'Mountain Wild Shape',
        level: 6,
        description:
          'At 6th level the mountain druid adds mountain-dwelling creatures to her wild shape options. At 10th level she can assume the form of a Small or Medium earth elemental, at 12th level a Large earth elemental.',
        effects: [],
      },
      {
        name: 'Stoneform',
        level: 9,
        description:
          'The mountain druid gains DR 2/adamantine. This increases to DR 4/adamantine at 13th level.',
        effects: [],
      },
      {
        name: 'Mountain Stone',
        level: 13,
        description:
          'The mountain druid can transform into a stone formation at will, as if using statue. She retains her senses while in stone form.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 20. Nature Fang
  // ──────────────────────────────────────────────
  {
    name: 'Nature Fang',
    className: 'Druid',
    description:
      'A nature fang is a druid who stalks and slays those who despoil the natural world, trading wild shape for the studied combat techniques of a slayer.',
    replacedFeatures: ['Wild Shape', 'A Thousand Faces', 'Venom Immunity'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Studied Target',
        level: 4,
        description:
          "At 4th level, the nature fang gains the slayer's studied target class feature. She can study a target as a move action, gaining a +1 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against that target, as well as a +1 bonus on weapon attack and damage rolls against it. This bonus increases by +1 at 8th, 12th, 16th, and 20th level.",
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 4,
        description:
          'At 4th level and every 2 levels thereafter, the nature fang gains a slayer talent. She can select ranger combat style, weapon training, or any slayer talent for which she qualifies.',
        effects: [],
      },
      {
        name: 'Sneak Attack',
        level: 4,
        description:
          'At 4th level, the nature fang gains sneak attack +1d6. This increases by +1d6 at 8th, 12th, 16th, and 20th level.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 21. Plains Druid
  // ──────────────────────────────────────────────
  {
    name: 'Plains Druid',
    className: 'Druid',
    description:
      'A plains druid watches over vast grasslands, savannas, and steppes, drawing power from open spaces and the creatures that roam them.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Plains Traveler',
        level: 2,
        description:
          'The plains druid gains a +10-foot enhancement bonus to her base land speed when wearing no armor or light armor. She treats tall grass and similar undergrowth as normal terrain.',
        effects: [],
      },
      {
        name: 'Run Like the Wind',
        level: 3,
        description:
          'The plains druid leaves no trail in grassland environments and cannot be tracked in such terrain. She gains the Run feat as a bonus feat.',
        effects: [],
      },
      {
        name: 'Savanna Ambush',
        level: 4,
        description:
          'The plains druid gains a +4 bonus on saving throws against the extraordinary and supernatural abilities of herd animals and a +4 bonus on Stealth checks in grassland terrain.',
        effects: [],
      },
      {
        name: 'Plains Wild Shape',
        level: 6,
        description:
          'The plains druid can assume the forms of plains-dwelling creatures. At 6th level she adds large herd animals, and at 10th level she can assume the form of a Small or Medium air elemental.',
        effects: [],
      },
      {
        name: 'Evasion',
        level: 9,
        description: 'The plains druid gains evasion, as the rogue class feature.',
        effects: [],
      },
      {
        name: 'Whirlwind Strike',
        level: 13,
        description:
          'The plains druid can create a whirlwind once per day as a standard action, functioning as control winds centered on her position.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 22. Reincarnated Druid
  // ──────────────────────────────────────────────
  {
    name: 'Reincarnated Druid',
    className: 'Druid',
    description:
      'A reincarnated druid has been reborn many times, carrying memories of past lives and gaining unique insights and abilities from each incarnation.',
    replacedFeatures: [
      'Nature Bond',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
      'Timeless Body',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Past Lives',
        level: 1,
        description:
          'The reincarnated druid adds a +2 bonus on two Knowledge skills of her choice, representing knowledge from past lives. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Mysterious Stranger',
        level: 1,
        description:
          'At 1st level, a reincarnated druid can select one of the following as a bonus feat: Alertness, Blind-Fight, or Spell Focus (any school she cast in a past life).',
        effects: [],
      },
      {
        name: 'Resist Death',
        level: 4,
        description:
          'A reincarnated druid gains a +4 bonus on saving throws against death effects, energy drain, and negative levels.',
        effects: [],
      },
      {
        name: 'Many Lives',
        level: 5,
        description:
          'At 5th level, if the reincarnated druid is killed, she may be reincarnated (as the spell) one day later. The reincarnated druid appears near her previous body. She can use this ability once at 5th level, plus one additional time for every 5 druid levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Cheat Death',
        level: 9,
        description:
          'Once per day when the reincarnated druid would be reduced to 0 or fewer hit points, she can delay the effect for 1 round, remaining conscious and able to act normally for that round.',
        effects: [],
      },
      {
        name: 'Tongue of Many',
        level: 13,
        description:
          'The reincarnated druid gains the ability to speak with any living creature as if under a permanent tongues effect.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 23. Saurian Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Saurian Shaman',
    className: 'Druid',
    description:
      'A saurian shaman is a druid whose totem is the great lizard, gaining aspects and abilities linked to dinosaurs and reptiles.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Saurian)',
        level: 2,
        description:
          'The saurian shaman may adopt aspects of the dinosaur. She gains one of the following: movement (+10 ft enhancement bonus to speed), senses (scent 30 ft), natural weapons (bite 1d6, two claw attacks 1d4), or toughness (+2 natural armor). At 7th level she may select two, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The saurian shaman may cast summon nature's ally as a standard action when summoning reptiles or dinosaurs, and summoned creatures of those types gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Saurian)',
        level: 6,
        description:
          "The saurian shaman's wild shape is treated as two levels higher for reptilian and dinosaur forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 24. Shark Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Shark Shaman',
    className: 'Druid',
    description:
      "A shark shaman is a druid whose totem is the shark, gaining predatory power, bloodlust, and the relentless aggression of the ocean's apex hunter.",
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Shark)',
        level: 2,
        description:
          'The shark shaman may adopt aspects of the shark. She gains one of the following: movement (swim speed 30 ft), senses (scent 30 ft, blindsense 30 ft in water), natural weapons (bite 1d6), or toughness (+2 natural armor). At 7th level she may select two, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The shark shaman may cast summon nature's ally as a standard action when summoning sharks or aquatic creatures, and summoned creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Shark)',
        level: 6,
        description:
          "The shark shaman's wild shape is treated as two levels higher for shark and aquatic forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 25. Snake Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Snake Shaman',
    className: 'Druid',
    description:
      'A snake shaman is a druid whose totem is the serpent, gaining venomous strikes, sinuous agility, and hypnotic charm.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Snake)',
        level: 2,
        description:
          'The snake shaman may adopt aspects of the snake. She gains one of the following: movement (+20 ft enhancement to speed, climb speed 20 ft), senses (scent 30 ft), natural weapons (bite 1d4 plus poison [frequency 1/round for 6 rounds; effect 1 Con; cure 1 save; save DC 10 + half druid level + Wis modifier]), or toughness (+2 natural armor). At 7th level two, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The snake shaman may cast summon nature's ally as a standard action when summoning snakes or reptiles, and summoned creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Snake)',
        level: 6,
        description:
          "The snake shaman's wild shape is treated as two levels higher for snake forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 26. Storm Druid
  // ──────────────────────────────────────────────
  {
    name: 'Storm Druid',
    className: 'Druid',
    description:
      'A storm druid channels the fury of tempests and thunderstorms, gaining power over wind, lightning, and rain.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Nature Bond'],
    newFeatures: [
      {
        name: 'Windwalker',
        level: 2,
        description:
          'The storm druid gains a +2 bonus on Acrobatics and Fly checks. She is never knocked prone or pushed back by winds of any strength. This bonus increases to +4 at 7th level.',
        effects: [],
      },
      {
        name: 'Stormvoice',
        level: 3,
        description:
          'The storm druid can speak and be heard clearly in any weather conditions, including gale-force winds. She gains a +4 bonus on Perception checks that rely on hearing.',
        effects: [],
      },
      {
        name: 'Eyes of the Storm',
        level: 4,
        description:
          'The storm druid can see through natural weather effects such as fog, rain, and snow without penalty. She gains a +4 bonus on saves against air and electricity effects.',
        effects: [],
      },
      {
        name: 'Windlord',
        level: 9,
        description:
          'The storm druid gains a fly speed of 60 feet (average maneuverability) when outdoors. She can use this ability for a number of minutes per day equal to her druid level.',
        effects: [],
      },
      {
        name: 'Storm Lord',
        level: 13,
        description:
          'The storm druid gains electricity resistance 20 and can call lightning (as the spell) once per day as a spell-like ability without expending a spell slot. She is immune to deafness caused by thunder.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 27. Swamp Druid
  // ──────────────────────────────────────────────
  {
    name: 'Swamp Druid',
    className: 'Druid',
    description:
      'A swamp druid is the warden of marshes, bogs, and fens, gaining abilities suited to the murky and disease-ridden wetlands.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Marshwight',
        level: 2,
        description:
          'The swamp druid moves through bogs and quicksand without penalty. She gains a swim speed of 15 feet.',
        effects: [],
      },
      {
        name: 'Swamp Strider',
        level: 3,
        description:
          'The swamp druid cannot be tracked in swamp or marsh terrain and gains a +4 bonus on saves against disease.',
        effects: [],
      },
      {
        name: 'Pond Scum',
        level: 4,
        description:
          'The swamp druid gains a +4 bonus on saves against the spell-like abilities of fey and the supernatural abilities of aberrations found in swamps.',
        effects: [],
      },
      {
        name: 'Swamp Wild Shape',
        level: 6,
        description:
          'The swamp druid can assume the forms of swamp-dwelling creatures. At 6th level she adds crocodilians and swamp creatures. At 10th level she can assume the form of a Small or Medium water elemental.',
        effects: [],
      },
      {
        name: 'Slippery',
        level: 9,
        description:
          'The swamp druid gains a +4 bonus to CMD against grapple attempts and the constant benefit of freedom of movement while in swamp terrain.',
        effects: [],
      },
      {
        name: 'Bog Walker',
        level: 13,
        description:
          'The swamp druid can use transport via plants at will, but only between swamp or marsh locations. She also gains tremorsense 30 feet while standing in swamp terrain.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 28. Tempest Druid
  // ──────────────────────────────────────────────
  {
    name: 'Tempest Druid',
    className: 'Druid',
    description:
      'A tempest druid is a master of weather who can call down devastating storms and ride the winds, sacrificing her animal bond for raw elemental fury.',
    replacedFeatures: ['Nature Bond', "Resist Nature's Lure", 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Storm Burst',
        level: 1,
        description:
          'The tempest druid can create a storm burst as a standard action targeting one creature within 30 feet as a ranged touch attack, dealing 1d6 nonlethal damage + 1 per two druid levels and causing the target to be buffeted by wind (-2 on attack rolls for 1 round). Uses per day equal to 3 + Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Wind Sight',
        level: 4,
        description:
          'The tempest druid can see and hear through wind and storms without penalty. She gains a +4 bonus on saves against effects with the air or electricity descriptors.',
        effects: [],
      },
      {
        name: 'Storm Shape',
        level: 6,
        description:
          'When using wild shape, the tempest druid can assume the form of a Small or Medium air elemental at 6th level, a Large air elemental at 8th level, a Huge air elemental at 10th level, and a Greater air elemental at 12th level.',
        effects: [],
      },
      {
        name: 'Eye of the Hurricane',
        level: 9,
        description:
          'The tempest druid gains electricity resistance 20 and a +4 bonus on saves against sonic effects.',
        effects: [],
      },
      {
        name: 'Storm Master',
        level: 13,
        description:
          'The tempest druid can control weather (as the spell) once per day as a spell-like ability. The casting time is reduced to 1 minute, and she can maintain the weather for 24 hours without concentration.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 29. Urban Druid
  // ──────────────────────────────────────────────
  {
    name: 'Urban Druid',
    className: 'Druid',
    description:
      'An urban druid is attuned to the rhythms of civilization rather than the wild, finding nature in the cracks of cobblestones and the creatures that thrive in cities.',
    replacedFeatures: [
      'Nature Sense',
      'Wild Empathy',
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'Wild Shape',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Nature Bond'],
    newFeatures: [
      {
        name: 'Loremaster',
        level: 1,
        description:
          'An urban druid adds Diplomacy, Knowledge (history), Knowledge (local), and Knowledge (nobility) to her class skill list. She gains a +2 bonus on Diplomacy and Knowledge (local) checks.',
        effects: [],
      },
      {
        name: 'Crowd Empathy',
        level: 1,
        description:
          'The urban druid can influence the mood of crowds, functioning as wild empathy but affecting humanoids in groups of 10 or more. She adds her druid level + Charisma modifier to the check.',
        effects: [],
      },
      {
        name: 'Urban Bond',
        level: 1,
        description:
          'The urban druid selects a domain from among Community, Knowledge, Nobility, Protection, Repose, or Weather. She does not gain an animal companion.',
        effects: [],
      },
      {
        name: 'Urban Stride',
        level: 2,
        description:
          'The urban druid can move through crowds and urban difficult terrain at her normal speed.',
        effects: [],
      },
      {
        name: 'A Thousand Faces (Urban)',
        level: 6,
        description:
          'At 6th level, the urban druid gains the ability to change her appearance at will, as if using disguise self, but the effect is not an illusion.',
        effects: [],
      },
      {
        name: 'Mental Strength',
        level: 4,
        description:
          'The urban druid gains a +4 bonus on saving throws against enchantment spells and effects.',
        effects: [],
      },
      {
        name: 'Immunity to Compulsion',
        level: 9,
        description: 'The urban druid is immune to charm and compulsion effects.',
        effects: [],
      },
      {
        name: 'Urbanite',
        level: 13,
        description:
          'The urban druid gains an insight bonus equal to half her druid level on Bluff, Diplomacy, Intimidate, and Sense Motive checks while in a settlement.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 30. Wild Whisperer
  // ──────────────────────────────────────────────
  {
    name: 'Wild Whisperer',
    className: 'Druid',
    description:
      'A wild whisperer develops an especially deep connection with wild creatures, expanding her empathic communication to forge powerful telepathic links with animals.',
    replacedFeatures: ['Woodland Stride', 'Trackless Step', 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Wild Empathy', 'Nature Bond'],
    newFeatures: [
      {
        name: 'Enhanced Wild Empathy',
        level: 1,
        description:
          'The wild whisperer gains a bonus on wild empathy checks equal to half her druid level (minimum 1) in addition to the normal bonus.',
        effects: [],
      },
      {
        name: 'Primal Speech',
        level: 2,
        description:
          'The wild whisperer can speak with animals at will as per the spell speak with animals.',
        effects: [],
      },
      {
        name: 'Animal Telepathy',
        level: 4,
        description:
          'The wild whisperer gains telepathy with a range of 100 feet, but only with animals and magical beasts with Intelligence 1 or 2.',
        effects: [],
      },
      {
        name: 'Beast Bond',
        level: 9,
        description:
          'Once per day, the wild whisperer can forge a telepathic bond with a single animal within 30 feet, as if using the spell telepathic bond, lasting 10 minutes per druid level.',
        effects: [],
      },
      {
        name: "Commune with Nature's Children",
        level: 13,
        description:
          'Once per day, the wild whisperer can simultaneously communicate with all animals within 1 mile, gaining information about the surrounding territory as if using commune with nature, but filtered through the perspectives of local wildlife.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 31. Wolf Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Wolf Shaman',
    className: 'Druid',
    description:
      'A wolf shaman is a druid whose totem is the wolf, gaining the pack tactics, endurance, and cunning of wolves.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Wolf)',
        level: 2,
        description:
          'The wolf shaman may adopt aspects of the wolf while in normal form. She gains one of the following: movement (+20 ft enhancement bonus to speed), senses (scent 30 ft, low-light vision), natural weapons (bite 1d4 plus trip), or toughness (+2 natural armor). At 7th level two, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The wolf shaman may cast summon nature's ally as a standard action when summoning canines, and summoned canine creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Wolf)',
        level: 6,
        description:
          "The wolf shaman's wild shape is treated as two levels higher for canine forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 32. World Walker
  // ──────────────────────────────────────────────
  {
    name: 'World Walker',
    className: 'Druid',
    description:
      'A world walker is a druid who roams the planes, protecting the natural balance across multiple realities and adapting to alien environments.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Planar Empathy',
        level: 1,
        description:
          'The world walker can use wild empathy on creatures from any plane, including outsiders with an Intelligence of 1 or 2.',
        effects: [],
      },
      {
        name: 'Planar Stride',
        level: 2,
        description:
          'The world walker can move through planar terrain features (such as areas of wild magic or unstable reality) without penalty.',
        effects: [],
      },
      {
        name: 'Adapt to Plane',
        level: 3,
        description:
          'The world walker automatically adapts to the environmental conditions of whatever plane she is on, gaining immunity to harmful planar traits (such as fire-dominant or negative-dominant planes) after spending 1 hour on a plane.',
        effects: [],
      },
      {
        name: 'Planar Resistance',
        level: 4,
        description:
          'The world walker gains a +4 bonus on saves against the spell-like abilities of outsiders.',
        effects: [],
      },
      {
        name: 'Planar Wild Shape',
        level: 6,
        description:
          'The world walker can use wild shape to assume the form of creatures native to other planes, treating her level as normal for extraplanar beasts and magical beasts.',
        effects: [],
      },
      {
        name: 'Planar Shift',
        level: 9,
        description:
          'The world walker can use plane shift as a spell-like ability once per day, but only on herself. At 13th level she can bring along willing companions as per the normal spell.',
        effects: [],
      },
    ],
    source: 'Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 33. Ape Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Ape Shaman',
    className: 'Druid',
    description:
      'An ape shaman is a druid whose totem is the ape, gaining the strength, agility, and cleverness of the great primates.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Ape)',
        level: 2,
        description:
          'The ape shaman may adopt aspects of the ape. She gains one of the following: movement (climb speed 20 ft, +4 bonus on Climb), senses (low-light vision, scent), natural weapons (2 slams 1d6), or toughness (+2 natural armor, Endurance). At 7th level two, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The ape shaman may cast summon nature's ally as a standard action when summoning primates, and summoned primate creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Ape)',
        level: 6,
        description:
          "The ape shaman's wild shape is treated as two levels higher for ape and primate forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 34. Boar Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Boar Shaman',
    className: 'Druid',
    description:
      'A boar shaman is a druid whose totem is the boar, gaining ferocity, toughness, and relentless aggression.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Boar)',
        level: 2,
        description:
          'The boar shaman may adopt aspects of the boar. She gains one of the following: movement (+10 ft enhancement to speed), senses (low-light vision, scent), natural weapons (gore 1d8), or toughness (+2 natural armor, ferocity). At 7th level two, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The boar shaman may cast summon nature's ally as a standard action when summoning boars, and summoned boar creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Boar)',
        level: 6,
        description:
          "The boar shaman's wild shape is treated as two levels higher for boar forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 35. Frog Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Frog Shaman',
    className: 'Druid',
    description:
      'A frog shaman is a druid whose totem is the frog, gaining leaping ability, aquatic adaptation, and a long sticky tongue.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Frog)',
        level: 2,
        description:
          'The frog shaman may adopt aspects of the frog. She gains one of the following: movement (swim speed 30 ft, +4 on Acrobatics to jump), senses (low-light vision, scent), natural weapons (tongue attack to grab, bite 1d4 plus grab), or toughness (+2 natural armor). At 7th level two, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The frog shaman may cast summon nature's ally as a standard action when summoning amphibians, and summoned amphibian creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Frog)',
        level: 6,
        description:
          "The frog shaman's wild shape is treated as two levels higher for amphibian forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 36. Survivor
  // ──────────────────────────────────────────────
  {
    name: 'Survivor',
    className: 'Druid',
    description:
      'A survivor druid focuses on personal toughness and endurance, having learned to thrive in the harshest conditions through sheer physical resilience.',
    replacedFeatures: ['Nature Bond', 'Wild Empathy', "Resist Nature's Lure", 'Venom Immunity'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hardened Survivor',
        level: 1,
        description:
          'The survivor gains Toughness as a bonus feat and adds Intimidate to her list of class skills.',
        effects: [],
      },
      {
        name: 'Endure Elements',
        level: 1,
        description: 'The survivor is under a constant endure elements effect.',
        effects: [],
      },
      {
        name: 'Inured to Pain',
        level: 4,
        description:
          'The survivor gains DR 1/— which increases by 1 at 8th level and every 4 levels thereafter, to a maximum of DR 5/— at 20th level.',
        effects: [],
      },
      {
        name: 'Overland Expert',
        level: 4,
        description:
          'The survivor gains a +4 bonus on Constitution checks to avoid nonlethal damage from forced marches, starvation, thirst, and hot or cold environments.',
        effects: [],
      },
      {
        name: 'Last One Standing',
        level: 9,
        description:
          'Once per day when reduced below 0 hit points, the survivor can act normally for 1 additional round before falling unconscious.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 37. Feral Child (Druid Archetype)
  // ──────────────────────────────────────────────
  {
    name: 'Feral Child',
    className: 'Druid',
    description:
      'A feral child was raised in the wild by animals, gaining bestial instincts and an animal companion in place of some spellcasting ability.',
    replacedFeatures: [
      'Nature Sense',
      'Woodland Stride',
      'Trackless Step',
      'A Thousand Faces',
      'Timeless Body',
    ],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy'],
    newFeatures: [
      {
        name: 'Illiteracy',
        level: 1,
        description:
          'A feral child does not know how to read or write. She can spend 2 skill points to become literate.',
        effects: [],
      },
      {
        name: 'Feral Bond',
        level: 1,
        description:
          'A feral child must select an animal companion for her nature bond. The companion can be from any terrain type.',
        effects: [],
      },
      {
        name: 'Beast Senses',
        level: 1,
        description:
          'The feral child gains low-light vision and a +2 bonus on Perception and Survival checks. At 5th level she gains scent.',
        effects: [],
      },
      {
        name: 'Native Cunning',
        level: 2,
        description:
          'The feral child gains trap sense +1 as a barbarian of her druid level. This increases by +1 every 3 levels thereafter.',
        effects: [],
      },
      {
        name: 'Evasion',
        level: 3,
        description: 'At 3rd level, the feral child gains evasion as a rogue.',
        effects: [],
      },
      {
        name: 'Savage Instinct',
        level: 9,
        description:
          'The feral child gains uncanny dodge. At 13th level, she gains improved uncanny dodge.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 38. Drovier
  // ──────────────────────────────────────────────
  {
    name: 'Drovier',
    className: 'Druid',
    description:
      'A drovier is a herder and protector of livestock who uses her druidic powers to manage and enhance herds of domesticated animals.',
    replacedFeatures: [
      'Nature Sense',
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy'],
    newFeatures: [
      {
        name: 'Herd Mentality',
        level: 1,
        description:
          'The drovier gains a +2 bonus on Handle Animal checks and can handle an animal companion as a free action. She can push an animal companion as a move action.',
        effects: [],
      },
      {
        name: 'Herd Bond',
        level: 1,
        description:
          'The drovier must select an animal companion. She can maintain a number of animal companions equal to her Wisdom modifier (minimum 1), but their effective druid levels are divided among them.',
        effects: [],
      },
      {
        name: 'Crowd Control',
        level: 2,
        description:
          'The drovier gains a +4 bonus on wild empathy checks to influence domesticated animals and can influence groups of animals simultaneously.',
        effects: [],
      },
      {
        name: "Drover's Stride",
        level: 3,
        description:
          'The drovier and her animal companions gain a +10 foot enhancement bonus to movement when traveling overland as a group.',
        effects: [],
      },
      {
        name: 'Stampede',
        level: 4,
        description:
          'The drovier can command her animal companions to stampede as a full-round action. All companions charge the same target, gaining +2 to attack and damage in addition to the normal charge bonus.',
        effects: [],
      },
      {
        name: 'Herd Resilience',
        level: 9,
        description:
          "All of the drovier's animal companions within 30 feet gain a +2 morale bonus on saving throws.",
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 39. Nithveil Adept
  // ──────────────────────────────────────────────
  {
    name: 'Nithveil Adept',
    className: 'Druid',
    description:
      'A Nithveil adept specializes in the boundary between the living world and the realm of the dead, using natural magic to commune with and control spirits.',
    replacedFeatures: ['Nature Bond', 'Wild Empathy', "Resist Nature's Lure", 'Venom Immunity'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Spirit Empathy',
        level: 1,
        description:
          'The Nithveil adept can use wild empathy to influence incorporeal undead and spirits, using Wisdom instead of Charisma for the check.',
        effects: [],
      },
      {
        name: 'Deathwatch Aura',
        level: 1,
        description: 'The Nithveil adept is under a constant deathwatch effect.',
        effects: [],
      },
      {
        name: 'Spirit Bond',
        level: 1,
        description:
          'Instead of a nature bond, the Nithveil adept selects the Ancestors, Death, or Repose domain.',
        effects: [],
      },
      {
        name: 'Resist the Grave',
        level: 4,
        description:
          'The Nithveil adept gains a +4 bonus on saves against death effects, energy drain, and necromancy effects.',
        effects: [],
      },
      {
        name: 'Speak with Dead',
        level: 9,
        description:
          'The Nithveil adept can use speak with dead as a spell-like ability a number of times per day equal to her Wisdom modifier.',
        effects: [],
      },
    ],
    source: 'Paths of the Righteous',
  },

  // ──────────────────────────────────────────────
  // 40. Toxicologist
  // ──────────────────────────────────────────────
  {
    name: 'Toxicologist',
    className: 'Druid',
    description:
      'A toxicologist is a druid who specializes in natural poisons and venoms, using her knowledge of toxic flora and fauna to create and deliver deadly concoctions.',
    replacedFeatures: ['Woodland Stride', 'Trackless Step', 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Venomcraft',
        level: 1,
        description:
          'The toxicologist can use Craft (alchemy) to create natural poisons. She adds her Wisdom modifier to Craft (alchemy) checks to create poisons and never risks poisoning herself when crafting or applying poisons.',
        effects: [],
      },
      {
        name: 'Toxic Wild Shape',
        level: 4,
        description:
          'When assuming a form that has a poison attack via wild shape, the save DC for the poison increases by 2. At 8th level this bonus increases to +4.',
        effects: [],
      },
      {
        name: 'Venom Resistance',
        level: 4,
        description:
          'The toxicologist gains a +4 bonus on saves against poison. At 9th level, this increases to immunity.',
        effects: [],
      },
      {
        name: 'Contact Toxin',
        level: 6,
        description:
          'The toxicologist can secrete poison through her skin, affecting creatures that touch her or that she touches. The poison deals 1d3 Constitution damage (Fortitude negates, DC 10 + half druid level + Wisdom modifier). She can use this a number of rounds per day equal to her druid level.',
        effects: [],
      },
      {
        name: 'Master Toxicologist',
        level: 13,
        description:
          "The toxicologist can combine two poisons into a single dose that delivers both effects simultaneously. The save DC is equal to the higher of the two poisons' DCs + 2.",
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 41. Season Sage
  // ──────────────────────────────────────────────
  {
    name: 'Season Sage',
    className: 'Druid',
    description:
      'A season sage is attuned to the cycle of the seasons, gaining different powers as the year progresses and embodying the eternal cycle of nature.',
    replacedFeatures: ['Nature Bond', "Resist Nature's Lure", 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Seasonal Affinity',
        level: 1,
        description:
          'The season sage chooses a favored season. During that season, she gains a +1 bonus on caster level checks and DCs for druid spells. During the opposite season, she takes a -1 penalty. These bonuses and penalties increase by 1 at 5th level and every 5 levels thereafter.',
        effects: [],
      },
      {
        name: 'Seasonal Transformation',
        level: 4,
        description:
          'The season sage can shift her affinity to any season once per day as a standard action, gaining the benefits and drawbacks of the chosen season for 1 hour per druid level.',
        effects: [],
      },
      {
        name: "Winter's Touch / Summer's Fury",
        level: 6,
        description:
          'Depending on her current season, the sage gains a bonus: Spring grants fast healing 1 in natural light; Summer adds +1d6 fire damage to attacks; Autumn grants +2 on saves vs. enchantment and illusion; Winter adds +1d6 cold damage to attacks.',
        effects: [],
      },
      {
        name: 'Master of Seasons',
        level: 9,
        description:
          'The season sage can shift seasons as a swift action and maintains benefits for 24 hours.',
        effects: [],
      },
      {
        name: 'Eternal Cycle',
        level: 13,
        description:
          'The season sage embodies all four seasons simultaneously, gaining all seasonal benefits without any penalties.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 42. Devolutionist
  // ──────────────────────────────────────────────
  {
    name: 'Devolutionist',
    className: 'Druid',
    description:
      'A devolutionist uses her primal magic to revert creatures and landscapes to more primitive states, wielding devolution as both a weapon and a tool of restoration.',
    replacedFeatures: ['Nature Bond', 'Woodland Stride', 'Trackless Step', 'A Thousand Faces'],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Devolving Touch',
        level: 1,
        description:
          'As a melee touch attack, the devolutionist can cause a creature to partially revert to a more primitive form, imposing a -2 penalty to Intelligence and Charisma for 1 round per druid level (Will negates). Uses per day equal to 3 + Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Primeval Bond',
        level: 1,
        description:
          'The devolutionist must select an animal companion from among megafauna or dinosaur companions.',
        effects: [],
      },
      {
        name: 'Ancestral Form',
        level: 4,
        description:
          'When using wild shape, the devolutionist can assume the forms of prehistoric or megafauna versions of normal animals, adding +2 to Strength and -2 to Dexterity in addition to the normal adjustments.',
        effects: [],
      },
      {
        name: 'Reverse Evolution',
        level: 9,
        description:
          'Once per day, the devolutionist can target a creature within 30 feet with a devolution effect. The target must succeed on a Fortitude save or be transformed into a more primitive version of itself for 1 round per druid level, losing access to all spell-like and supernatural abilities.',
        effects: [],
      },
      {
        name: 'Primordial Mastery',
        level: 13,
        description:
          'The devolutionist can permanently revert a Small or smaller area of worked or cultivated land to wilderness with an 8-hour ritual.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 43. Restorer
  // ──────────────────────────────────────────────
  {
    name: 'Restorer',
    className: 'Druid',
    description:
      'A restorer is a druid focused on healing blighted lands and curing corruption in the natural world, specializing in restorative magic.',
    replacedFeatures: ['Wild Shape', 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Nature Bond'],
    newFeatures: [
      {
        name: 'Restorative Touch',
        level: 1,
        description:
          'The restorer can touch a creature or plant to remove the sickened condition. At 4th level she can remove disease, at 8th level neutralize poison, and at 12th level remove curse. Each use costs one daily use. Uses per day equal to 3 + Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Cleansing Bond',
        level: 1,
        description: 'The restorer adds the Healing domain to her available nature bond domains.',
        effects: [],
      },
      {
        name: 'Purify Land',
        level: 4,
        description:
          'The restorer can purify a 10-foot-radius area of natural terrain, removing magical corruption, blight, and contamination with a 1-minute ritual. The radius increases by 10 feet at 8th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Mending Shape',
        level: 6,
        description:
          'Instead of wild shape, the restorer gains the ability to channel positive energy as a cleric of her druid level - 5 (minimum 1st), usable a number of times per day equal to 3 + Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Greater Restoration',
        level: 13,
        description:
          'Once per day the restorer can cast restoration as a spell-like ability without material components.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 44. Leshy Warden
  // ──────────────────────────────────────────────
  {
    name: 'Leshy Warden',
    className: 'Druid',
    description:
      "A leshy warden forms a special bond with a leshy companion, a small plant creature that serves as both ally and extension of the druid's will.",
    replacedFeatures: ['Nature Bond', 'Woodland Stride', 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Leshy Companion',
        level: 1,
        description:
          'The leshy warden gains a leshy familiar that functions as an improved familiar. The leshy gains Hit Dice and abilities as the druid levels, using the animal companion progression but with the plant type.',
        effects: [],
      },
      {
        name: 'Green Empathy',
        level: 1,
        description:
          'The leshy warden can use wild empathy on plant creatures in addition to animals.',
        effects: [],
      },
      {
        name: 'Plantspeaker',
        level: 2,
        description:
          'The leshy warden can move through any sort of undergrowth (including magically manipulated undergrowth) at her normal speed without damage.',
        effects: [],
      },
      {
        name: 'Leshy Caller',
        level: 4,
        description:
          "When casting summon nature's ally, the leshy warden can summon leshy creatures of appropriate CR in addition to the normal options.",
        effects: [],
      },
      {
        name: 'Verdant Immunity',
        level: 9,
        description:
          'The leshy warden gains immunity to poison and a +4 bonus on saves against effects that target plants.',
        effects: [],
      },
      {
        name: 'One with the Forest',
        level: 13,
        description:
          'The leshy warden can merge with any tree as tree stride at will and can remain within a tree indefinitely, maintaining awareness of her surroundings within 120 feet.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 45. Pack Lord
  // ──────────────────────────────────────────────
  {
    name: 'Pack Lord',
    className: 'Druid',
    description:
      'A pack lord forms bonds with multiple animal companions, leading a pack of devoted creatures into battle.',
    replacedFeatures: ['A Thousand Faces', 'Timeless Body'],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Pack Bond',
        level: 1,
        description:
          "The pack lord must select an animal companion. At 4th level and every 3 levels thereafter, she gains an additional animal companion. Each companion's effective druid level is her druid level minus 3 per companion after the first (minimum 1).",
        effects: [],
      },
      {
        name: 'Pack Tactics',
        level: 2,
        description:
          "The pack lord's animal companions are considered to be flanking any creature that at least two of them threaten, regardless of positioning.",
        effects: [],
      },
      {
        name: 'Reduced Wild Shape',
        level: 4,
        description:
          "The pack lord's effective druid level for wild shape is her druid level - 4 (minimum 1). She cannot use wild shape to become an elemental.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 46. Feyspeaker
  // ──────────────────────────────────────────────
  {
    name: 'Feyspeaker',
    className: 'Druid',
    description:
      'A feyspeaker is a druid whose focus on the First World has given her a talent for enchantment and illusion magic, using Charisma rather than Wisdom for spellcasting.',
    replacedFeatures: ['A Thousand Faces', "Resist Nature's Lure"],
    modifiedFeatures: ['Spellcasting', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Charisma-Based Spellcasting',
        level: 1,
        description:
          'A feyspeaker uses Charisma instead of Wisdom as her spellcasting ability score for druid spells. She also adds the following spells to her druid spell list at the indicated levels from the sorcerer/wizard list: all enchantment and illusion spells.',
        effects: [],
      },
      {
        name: 'Fey Magic',
        level: 1,
        description:
          'A feyspeaker adds the following spells to her druid spell list: 1st — charm person, 2nd — hideous laughter, 3rd — deep slumber, 4th — charm monster, 5th — dominate person, 6th — cloak of dreams.',
        effects: [],
      },
      {
        name: 'Fey Shape',
        level: 6,
        description:
          'At 6th level, the feyspeaker can use wild shape to assume the form of a Small or Medium fey creature, as if using alter self. At 8th level she can become a Tiny fey. At 12th level she can use fey form II.',
        effects: [],
      },
      {
        name: 'Fey Resistance',
        level: 4,
        description:
          'The feyspeaker gains a +4 bonus on saves against the spell-like and supernatural abilities of fey creatures.',
        effects: [],
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 47. Halcyon Druid
  // ──────────────────────────────────────────────
  {
    name: 'Halcyon Druid',
    className: 'Druid',
    description:
      'A halcyon druid follows the tradition of Old-Mage Jatembe, blending arcane and divine magic through a deep connection with the natural world and Magaambya teachings.',
    replacedFeatures: ['Nature Bond', 'Wild Shape', 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Halcyon Magic',
        level: 1,
        description:
          'The halcyon druid adds one wizard spell of each spell level she can cast to her druid spell list. She can change these spells when she prepares spells each day. These spells are cast as divine spells.',
        effects: [],
      },
      {
        name: 'Peaceful Bond',
        level: 1,
        description:
          'The halcyon druid adds charm animal, calm animals, and hold animal to her 1st-level spell list. She gains a +2 bonus on Diplomacy and Handle Animal checks.',
        effects: [],
      },
      {
        name: 'Feather Magic',
        level: 4,
        description:
          'The halcyon druid can use a feather as an additional divine focus. When doing so, she gains a +1 bonus on caster level checks to overcome spell resistance. This bonus increases by +1 at 8th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Natural Arcana',
        level: 6,
        description:
          'Instead of wild shape, the halcyon druid can add a number of wizard spells equal to her Wisdom modifier to her druid spell list each day. These spells must be of spell levels she can cast.',
        effects: [],
      },
      {
        name: 'Dual Magic',
        level: 9,
        description:
          'The halcyon druid can apply one metamagic feat she knows to a spell without increasing its casting time, usable once per day. Uses increase by one at 13th level and 17th level.',
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 48. Life Channeler
  // ──────────────────────────────────────────────
  {
    name: 'Life Channeler',
    className: 'Druid',
    description:
      'A life channeler druid draws on the vital energy of the natural world to fuel powerful healing, channeling the raw life force of plants and animals around her.',
    replacedFeatures: ['Nature Bond', 'Wild Empathy', 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Life Channel',
        level: 1,
        description:
          'The life channeler can channel positive energy as a cleric of her druid level. She can use this ability a number of times per day equal to 3 + her Charisma modifier.',
        effects: [],
      },
      {
        name: "Nature's Vitality",
        level: 1,
        description:
          'When channeling energy in a natural area (not worked stone or urban settings), the life channeler heals an additional 1d6 points of damage.',
        effects: [],
      },
      {
        name: 'Absorb Blight',
        level: 4,
        description:
          'The life channeler can absorb diseases and poisons from a willing creature she touches, transferring them to herself. She gains a +4 bonus on saves against diseases and poisons absorbed this way.',
        effects: [],
      },
      {
        name: 'Greater Life Channel',
        level: 9,
        description:
          "The life channeler's channel energy can now also remove one of the following conditions: fatigued, shaken, or sickened.",
        effects: [],
      },
    ],
    source: 'Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 49. Skinshaper
  // ──────────────────────────────────────────────
  {
    name: 'Skinshaper',
    className: 'Druid',
    description:
      'A skinshaper specializes in transformative magic, using specially prepared animal skins to enhance her wild shape abilities.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Skin Collection',
        level: 1,
        description:
          'The skinshaper collects animal hides and skins to fuel her abilities. She can prepare a number of skins equal to her Wisdom modifier. Each skin takes 8 hours to prepare and represents a specific animal form.',
        effects: [],
      },
      {
        name: 'Skin Shift',
        level: 2,
        description:
          'By donning a prepared skin, the skinshaper can wild shape into the corresponding animal as a standard action, even before she normally gains wild shape. She can maintain this form for a number of hours per day equal to her druid level.',
        effects: [],
      },
      {
        name: 'Rapid Skinshift',
        level: 4,
        description:
          'The skinshaper can change between prepared skins as a move action. At 8th level, this becomes a swift action.',
        effects: [],
      },
      {
        name: 'Skin Mastery',
        level: 9,
        description:
          'When using a prepared skin, the skinshaper gains a +2 bonus to one physical ability score of her choice for the duration of the transformation.',
        effects: [],
      },
      {
        name: 'Perfect Skin',
        level: 13,
        description:
          'The skinshaper can create a skin from a magical beast she has slain, allowing her to wild shape into that magical beast.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 50. Progenitor
  // ──────────────────────────────────────────────
  {
    name: 'Progenitor',
    className: 'Druid',
    description:
      'A progenitor druid focuses on nurturing and protecting young creatures and new growth, gaining powers tied to birth, growth, and the protection of offspring.',
    replacedFeatures: ['Woodland Stride', 'Trackless Step', 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Nature Bond'],
    newFeatures: [
      {
        name: 'Nurturing Bond',
        level: 1,
        description:
          "A progenitor who selects an animal companion gains the ability to enhance her companion's growth. The companion gains +2 hit points per druid level.",
        effects: [],
      },
      {
        name: 'Protective Instinct',
        level: 2,
        description:
          'The progenitor and her animal companion gain a +2 morale bonus on attack rolls and AC when adjacent to each other. This increases to +3 at 8th level and +4 at 14th level.',
        effects: [],
      },
      {
        name: 'Growth Domain',
        level: 4,
        description:
          'The progenitor adds enlarge person and plant growth to her spell list as 1st and 3rd-level druid spells respectively.',
        effects: [],
      },
      {
        name: 'Accelerated Growth',
        level: 9,
        description:
          'Once per day, the progenitor can cause a plant or her animal companion to undergo a burst of growth, increasing its size by one category for 1 minute per druid level.',
        effects: [],
      },
      {
        name: 'Circle of Life',
        level: 13,
        description:
          'Once per day, the progenitor can cast reincarnate as a spell-like ability without material components.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 51. Tundra Druid
  // ──────────────────────────────────────────────
  {
    name: 'Tundra Druid',
    className: 'Druid',
    description:
      'A tundra druid is a guardian of frozen, windswept steppes and permafrost lands, gaining powers of cold and endurance.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Tundra Native',
        level: 2,
        description:
          'The tundra druid gains cold resistance 5 and treats snow and ice as normal terrain.',
        effects: [],
      },
      {
        name: 'Snowrunner',
        level: 3,
        description:
          'The tundra druid cannot be tracked across snow or ice. She gains a +4 bonus on Survival checks in cold environments.',
        effects: [],
      },
      {
        name: 'Tundra Endurance',
        level: 4,
        description:
          'The tundra druid gains a +4 bonus on saves against cold effects and effects that cause fatigue or exhaustion.',
        effects: [],
      },
      {
        name: 'Tundra Wild Shape',
        level: 6,
        description:
          'The tundra druid can assume forms of tundra-dwelling creatures. At 10th level she can become a Small or Medium cold-aspected elemental.',
        effects: [],
      },
      {
        name: 'Frozen Resilience',
        level: 9,
        description:
          'The tundra druid gains cold resistance 20 and immunity to fatigue from cold environments.',
        effects: [],
      },
      {
        name: 'Permafrost Guardian',
        level: 13,
        description:
          'The tundra druid gains immunity to cold. She can create a wall of ice once per day as a spell-like ability.',
        effects: [],
      },
    ],
    source: 'Inner Sea World Guide',
  },

  // ──────────────────────────────────────────────
  // 52. Sky Druid
  // ──────────────────────────────────────────────
  {
    name: 'Sky Druid',
    className: 'Druid',
    description:
      'A sky druid focuses on the open sky, soaring birds, and weather patterns, gaining the ability to fly and command the winds.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Nature Bond', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Sky Bond',
        level: 1,
        description:
          'A sky druid must select a flying animal companion or the Air or Weather domain.',
        effects: [],
      },
      {
        name: 'Skywalker',
        level: 2,
        description:
          'The sky druid gains a +2 bonus on Fly checks and treats wind effects as one step less severe for purposes of determining their effect on her.',
        effects: [],
      },
      {
        name: 'Cloudgazer',
        level: 3,
        description:
          'The sky druid can see through fog, mist, and clouds without penalty. She gains a +4 bonus on Perception checks in outdoor environments.',
        effects: [],
      },
      {
        name: 'Resist the Gale',
        level: 4,
        description:
          'The sky druid gains a +4 bonus on saves against air and electricity effects and cannot be knocked prone by wind.',
        effects: [],
      },
      {
        name: 'Soaring Wild Shape',
        level: 6,
        description:
          'The sky druid gains wild shape at 6th level. Her effective druid level for assuming flying forms is her druid level + 2. Her effective druid level for all other forms is her druid level - 2.',
        effects: [],
      },
      {
        name: 'Skymaster',
        level: 9,
        description:
          'The sky druid gains a fly speed of 60 feet with good maneuverability for a number of minutes per day equal to her druid level.',
        effects: [],
      },
      {
        name: 'One with the Sky',
        level: 13,
        description:
          'The sky druid can fly at will (as the spell overland flight). She is immune to altitude sickness and pressure damage from high altitudes.',
        effects: [],
      },
    ],
    source: 'Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 53. River Druid
  // ──────────────────────────────────────────────
  {
    name: 'River Druid',
    className: 'Druid',
    description:
      'A river druid is the guardian of flowing waterways, from mighty rivers to babbling brooks, gaining powers over currents and freshwater ecosystems.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'River Guardian',
        level: 2,
        description:
          'The river druid gains a swim speed of 20 feet and can hold her breath for a number of rounds equal to 4 times her Constitution score.',
        effects: [],
      },
      {
        name: 'Current Sense',
        level: 3,
        description:
          'The river druid cannot be tracked through water. She gains a +4 bonus on Survival checks near rivers and streams.',
        effects: [],
      },
      {
        name: 'Resist the Current',
        level: 4,
        description:
          'The river druid gains a +4 bonus on saves against water-based effects and cannot be moved by water currents against her will.',
        effects: [],
      },
      {
        name: 'River Wild Shape',
        level: 6,
        description:
          'The river druid can assume the forms of freshwater aquatic creatures. At 10th level she can assume the form of a Small or Medium water elemental.',
        effects: [],
      },
      {
        name: 'Water Breathing',
        level: 9,
        description:
          'The river druid can breathe underwater freely and gains a swim speed equal to her land speed.',
        effects: [],
      },
      {
        name: 'Torrent',
        level: 13,
        description:
          'Once per day the river druid can create a powerful rush of water in a 60-foot line, dealing 1d6 bludgeon damage per druid level (Reflex half) and pushing creatures back 10 feet.',
        effects: [],
      },
    ],
    source: 'Inner Sea World Guide',
  },

  // ──────────────────────────────────────────────
  // 54. Draconic Druid
  // ──────────────────────────────────────────────
  {
    name: 'Draconic Druid',
    className: 'Druid',
    description:
      'A draconic druid channels the ancient power of dragons through nature, gaining draconic features and eventually the ability to assume dragon form.',
    replacedFeatures: [
      'Nature Bond',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
      'Timeless Body',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Dragon Companion',
        level: 1,
        description:
          'The draconic druid gains an animal companion that has the draconic template applied to it (gaining darkvision 60 ft, a bite attack, and energy resistance 5 of a chosen type).',
        effects: [],
      },
      {
        name: 'Draconic Resilience',
        level: 4,
        description:
          'The draconic druid gains energy resistance 5 matching her chosen dragon type. This increases to 10 at 9th level and 20 at 13th level.',
        effects: [],
      },
      {
        name: 'Dragon Shape',
        level: 8,
        description:
          'At 8th level, the draconic druid can use wild shape to assume the form of a dragon as per form of the dragon I. At 12th level she can use form of the dragon II, and at 16th level form of the dragon III.',
        effects: [],
      },
      {
        name: 'Draconic Senses',
        level: 9,
        description: 'The draconic druid gains blindsense 30 feet and darkvision 60 feet.',
        effects: [],
      },
      {
        name: 'Dragon Apotheosis',
        level: 15,
        description:
          'The draconic druid gains the dragon type, gaining immunity to sleep and paralysis effects, and her energy resistance becomes immunity.',
        effects: [],
      },
    ],
    source: 'Legacy of Dragons',
  },

  // ──────────────────────────────────────────────
  // 55. Crocodile Domain (Crocodile Shaman)
  // ──────────────────────────────────────────────
  {
    name: 'Crocodile Shaman',
    className: 'Druid',
    description:
      'A crocodile shaman is a druid whose totem is the crocodile, gaining patience, stealth, and the devastating ambush tactics of the great reptilian predators.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Crocodile)',
        level: 2,
        description:
          'The crocodile shaman may adopt aspects of the crocodile. She gains one of the following: movement (swim speed 30 ft), senses (low-light vision, +4 Stealth in water), natural weapons (bite 1d6 plus grab and death roll), or toughness (+2 natural armor). At 7th level two, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The crocodile shaman may cast summon nature's ally as a standard action when summoning crocodilians or reptiles, and summoned creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Crocodile)',
        level: 6,
        description:
          "The crocodile shaman's wild shape is treated as two levels higher for reptilian forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 56. Stag Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Stag Shaman',
    className: 'Druid',
    description:
      'A stag shaman is a druid whose totem is the stag, embodying grace, speed, and the wild nobility of the forest.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Stag)',
        level: 2,
        description:
          'The stag shaman may adopt aspects of the stag. She gains one of the following: movement (+20 ft enhancement to speed), senses (low-light vision, scent), natural weapons (gore 1d6), or toughness (+2 natural armor). At 7th level two, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The stag shaman may cast summon nature's ally as a standard action when summoning ungulates or herd animals, and summoned creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Stag)',
        level: 6,
        description:
          "The stag shaman's wild shape is treated as two levels higher for ungulate and cervid forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 57. Elemental Ally
  // ──────────────────────────────────────────────
  {
    name: 'Elemental Ally',
    className: 'Druid',
    description:
      'An elemental ally forges a bond with an elemental spirit, gaining an eidolon-like elemental companion that grows in power as the druid advances.',
    replacedFeatures: ['Nature Bond', 'Venom Immunity', 'A Thousand Faces', 'Timeless Body'],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Elemental Companion',
        level: 1,
        description:
          "The elemental ally gains an elemental companion that functions similarly to a summoner's eidolon. She chooses air, earth, fire, or water. The elemental uses the eidolon base statistics, but has the elemental subtype. Its abilities improve as the druid levels.",
        effects: [],
      },
      {
        name: 'Elemental Attunement',
        level: 4,
        description:
          "The elemental ally gains energy resistance 5 matching her elemental companion's type (electricity for air, acid for earth, fire for fire, cold for water). This increases to 10 at 9th level and 20 at 14th level.",
        effects: [],
      },
      {
        name: 'Elemental Wild Shape',
        level: 6,
        description:
          'The elemental ally can wild shape into an elemental of her chosen type starting at 6th level (as elemental body I), improving at the normal rate. She cannot wild shape into animals.',
        effects: [],
      },
      {
        name: 'Greater Elemental Bond',
        level: 9,
        description:
          'The elemental companion gains an additional evolution pool point for every 4 druid levels.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 58. Shaman of the Green
  // ──────────────────────────────────────────────
  {
    name: 'Shaman of the Green',
    className: 'Druid',
    description:
      'A shaman of the green focuses entirely on plant magic, replacing animal empathy and companionship with mastery of the plant kingdom.',
    replacedFeatures: ['Nature Bond', 'Wild Empathy', 'Woodland Stride', 'Venom Immunity'],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Plant Bond',
        level: 1,
        description:
          'The shaman of the green selects the Plant domain or gains a plant companion (using the treant sapling or other plant companion statistics).',
        effects: [],
      },
      {
        name: 'Plant Empathy',
        level: 1,
        description:
          'The shaman of the green can communicate empathically with plants and plant creatures, functioning as wild empathy but for plants.',
        effects: [],
      },
      {
        name: 'Green Stride',
        level: 2,
        description:
          'The shaman of the green can move through any sort of undergrowth, including magically manipulated undergrowth such as entangle, at her normal speed and without damage.',
        effects: [],
      },
      {
        name: 'Plant Wild Shape',
        level: 6,
        description:
          'At 6th level, the shaman of the green can use wild shape to become a Small or Medium plant creature (as plant shape I). At 8th level she can become a Large plant (plant shape II), and at 10th level a Huge plant (plant shape III). She can only assume plant forms.',
        effects: [],
      },
      {
        name: 'Plant Immunity',
        level: 9,
        description:
          'The shaman of the green gains immunity to poison, paralysis, polymorph, and stunning.',
        effects: [],
      },
    ],
    source: 'Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 59. Raven Shaman
  // ──────────────────────────────────────────────
  {
    name: 'Raven Shaman',
    className: 'Druid',
    description:
      'A raven shaman is a druid whose totem is the raven, gaining cunning, trickery, and the ominous mysticism of the corvid.',
    replacedFeatures: [],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Totem Transformation (Raven)',
        level: 2,
        description:
          'The raven shaman may adopt aspects of the raven. She gains one of the following: movement (fly speed 30 ft, average), senses (+4 Perception, low-light vision), natural weapons (bite 1d4, mimicry of any voice or sound heard within 24 hours), or trickery (+4 Bluff, Sleight of Hand). At 7th level two, at 12th level all. Usable minutes per day equal to druid level.',
        effects: [],
      },
      {
        name: 'Totemic Summons',
        level: 5,
        description:
          "The raven shaman may cast summon nature's ally as a standard action when summoning corvids or ravens, and summoned raven-type creatures gain temporary hit points equal to her druid level.",
        effects: [],
      },
      {
        name: 'Wild Shape (Raven)',
        level: 6,
        description:
          "The raven shaman's wild shape is treated as two levels higher for corvid and bird forms and two levels lower for all other forms.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 60. Fungal Druid
  // ──────────────────────────────────────────────
  {
    name: 'Fungal Druid',
    className: 'Druid',
    description:
      'A fungal druid communes with mushrooms and fungal organisms, gaining unique abilities tied to spores, decomposition, and the alien intelligence of mycelium networks.',
    replacedFeatures: [
      'Nature Bond',
      'Wild Empathy',
      'Woodland Stride',
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Fungal Empathy',
        level: 1,
        description:
          'A fungal druid can communicate empathically with fungi and fungal creatures. She can make wild empathy checks against fungal creatures and plant creatures with fungal associations.',
        effects: [],
      },
      {
        name: 'Spore Cloud',
        level: 2,
        description:
          'The fungal druid can release a cloud of spores as a standard action. This creates a 10-foot-radius cloud of spores centered on the druid lasting 1 round per druid level. Creatures entering or starting their turn in the cloud must succeed on a Fortitude save (DC 10 + half druid level + Wisdom modifier) or be nauseated for 1 round. Uses per day equal to 3 + Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Mycelial Network',
        level: 4,
        description:
          'The fungal druid can, as a full-round action, attune herself to local fungal mycelium. For 24 hours, she gains tremorsense 30 feet in any area where her network extends (determined by the GM based on environment).',
        effects: [],
      },
      {
        name: 'Fungal Wild Shape',
        level: 6,
        description:
          'When the fungal druid uses wild shape, she can assume the form of a fungal or ooze creature. At 6th level she can become a Small or Medium plant (mushroom variant), at 8th level a Large fungal creature, and at 10th level she can replicate the abilities of a specific dangerous fungal monster.',
        effects: [],
      },
      {
        name: 'Decomposer',
        level: 9,
        description:
          "The fungal druid's touch can cause rapid decomposition. As a melee touch attack, she can cause an object or dead creature to decay as if 1 week had passed (Fortitude DC 10 + half druid level + Wisdom modifier negates for living creatures). Uses per day equal to Wisdom modifier.",
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 61. Geyser Druid
  // ──────────────────────────────────────────────
  {
    name: 'Geyser Druid',
    className: 'Druid',
    description:
      'A geyser druid draws power from geothermal activity, hot springs, and volcanic water sources, channeling superheated steam and boiling water.',
    replacedFeatures: [
      'Nature Bond',
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Thermal Adaptation',
        level: 2,
        description:
          'The geyser druid gains fire resistance 5 and cold resistance 5. She treats geothermal terrain (hot springs, fumaroles, geyser fields) as normal terrain rather than difficult terrain.',
        effects: [],
      },
      {
        name: 'Steam Blast',
        level: 1,
        description:
          'As a standard action, the geyser druid can release a blast of scalding steam in a 15-foot cone. Creatures in the area take 1d6 fire damage per two druid levels (Reflex DC 10 + half druid level + Wisdom modifier for half). Uses per day equal to 3 + Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Boiling Spring',
        level: 4,
        description:
          'The geyser druid gains fire resistance 10 and gains a +4 bonus on saves against fire effects and the supernatural abilities of fire creatures.',
        effects: [],
      },
      {
        name: 'Geyser Burst',
        level: 9,
        description:
          'Once per day, the geyser druid can call forth a geyser eruption beneath a creature within 30 feet. The target takes 8d6 fire damage and is launched 20 feet into the air (Reflex DC 10 + half druid level + Wisdom modifier negates and halves damage).',
        effects: [],
      },
      {
        name: 'Scalding Aura',
        level: 13,
        description:
          'The geyser druid radiates extreme heat. Any creature within 5 feet takes 2d6 fire damage at the start of its turn. She gains immunity to fire.',
        effects: [],
      },
    ],
    source: 'Inner Sea World Guide',
  },

  // ──────────────────────────────────────────────
  // 62. Island Druid
  // ──────────────────────────────────────────────
  {
    name: 'Island Druid',
    className: 'Druid',
    description:
      'An island druid is guardian of an isolated landmass, attuned to both the lush tropical life and the surrounding sea, forming a bond with both terrestrial and aquatic nature.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Nature Bond', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Island Adaptation',
        level: 2,
        description:
          'The island druid gains a swim speed of 20 feet and a climb speed of 15 feet, representing her mastery of island terrain. She gains a +2 bonus on Knowledge (nature) and Survival checks on islands.',
        effects: [],
      },
      {
        name: 'Sea Sense',
        level: 3,
        description:
          'The island druid cannot be tracked on island terrain and gains a +4 bonus on Perception checks to spot approaching sea threats or weather changes.',
        effects: [],
      },
      {
        name: 'Coastal Resistance',
        level: 4,
        description:
          'The island druid gains a +4 bonus on saves against the extraordinary and supernatural abilities of aquatic creatures and creatures with the water subtype.',
        effects: [],
      },
      {
        name: 'Island Wild Shape',
        level: 6,
        description:
          'The island druid can assume the forms of creatures native to islands, including tropical birds, sea turtles, and reef fish. At 10th level she can become a Small or Medium water elemental.',
        effects: [],
      },
      {
        name: 'Barrier Reef',
        level: 9,
        description:
          'The island druid can breathe both air and water freely and gains a swim speed equal to her land speed.',
        effects: [],
      },
    ],
    source: 'Isles of the Shackles',
  },

  // ──────────────────────────────────────────────
  // 63. Ley Line Guardian (Druid)
  // ──────────────────────────────────────────────
  {
    name: 'Ley Line Guardian',
    className: 'Druid',
    description:
      'A ley line guardian is a druid who sacrifices prepared spellcasting for the ability to tap into ley lines—streams of magical energy that run through the world—granting spontaneous power at a cost.',
    replacedFeatures: ['Nature Bond', 'Wild Shape', 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Spellcasting'],
    newFeatures: [
      {
        name: 'Conduit',
        level: 1,
        description:
          "A ley line guardian casts druid spells spontaneously rather than from a prepared list, using Wisdom to determine bonus spells and save DCs. She knows a number of spells equal to 4 + her Wisdom modifier at 1st level, plus 2 additional spells for each spell level she gains access to. However, when she casts a spell, she must succeed on a concentration check (DC 10 + twice the spell's level) or the spell fails and she is staggered for 1 round.",
        effects: [],
      },
      {
        name: 'Ley Line Connection',
        level: 2,
        description:
          'The ley line guardian can sense ley lines within 1 mile and can draw power from one as a full-round action while standing on it, regaining one expended spell slot of any level she can cast.',
        effects: [],
      },
      {
        name: 'Resist Spellblight',
        level: 4,
        description:
          'The ley line guardian gains a +4 bonus on saves against harmful effects from ley lines, such as wild magic surges and magical contamination.',
        effects: [],
      },
      {
        name: 'Draw Power',
        level: 9,
        description:
          'While connected to a ley line, the ley line guardian can cast a spell of 4th level or lower without expending a spell slot, once per day. At 13th level, this extends to any spell level she can cast.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 64. Living Fossil
  // ──────────────────────────────────────────────
  {
    name: 'Living Fossil',
    className: 'Druid',
    description:
      'A living fossil druid is so attuned to the ancient past that she can perceive echoes of prehistoric times, commune with extinct creatures, and eventually take on the qualities of an ancient being.',
    replacedFeatures: [
      'Nature Bond',
      'Wild Empathy',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
      'Timeless Body',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Paleontologist',
        level: 1,
        description:
          'A living fossil druid adds Knowledge (history) and Knowledge (nature) to her class skills and gains a +4 bonus on both when identifying prehistoric creatures, plants, or environments.',
        effects: [],
      },
      {
        name: 'Fossil Sight',
        level: 2,
        description:
          'The living fossil can read the echoes of the past in stone and earth. Once per day she can cast stone tell as a spell-like ability (CL equals druid level), but the stones relay information about events from thousands of years ago rather than recent events.',
        effects: [],
      },
      {
        name: 'Prehistoric Bond',
        level: 4,
        description:
          'The living fossil gains a +4 bonus on saves against the extraordinary and supernatural abilities of ancient creatures (dinosaurs, megafauna, and similar prehistoric life).',
        effects: [],
      },
      {
        name: 'Ancient Wild Shape',
        level: 6,
        description:
          "The living fossil's wild shape is treated as two levels higher for prehistoric animals (dinosaurs, megafauna, and extinct creatures). She can assume the forms of extinct species known only from fossils.",
        effects: [],
      },
      {
        name: 'Timeless Being',
        level: 9,
        description:
          "The living fossil's aging slows dramatically. She gains DR 2/— as her body hardens like ancient bone. This increases by 2 at 13th and 17th level.",
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 65. Nature's Exile
  // ──────────────────────────────────────────────
  {
    name: "Nature's Exile",
    className: 'Druid',
    description:
      "Cursed by nature itself, a nature's exile druid has been cast out from the natural order, gaining power through her transgression and forming bonds with creatures that thrive in corruption.",
    replacedFeatures: [
      'Nature Bond',
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Vermin Companion',
        level: 1,
        description:
          "A nature's exile must select a vermin creature as her nature bond instead of the normal options. The vermin functions as a druid animal companion, using the ranger's level for all calculations. The exile cannot use wild empathy on normal animals — instead, she can influence vermin with wild empathy checks.",
        effects: [],
      },
      {
        name: 'Cursed Body',
        level: 1,
        description:
          "The nature's exile bears the mark of her curse. She gains the stench extraordinary ability (as the special ability, 10-foot radius, Fort DC 10 + half druid level + Wisdom modifier, sickened for 10 rounds).",
        effects: [],
      },
      {
        name: 'Vermin Wild Shape',
        level: 6,
        description:
          "The nature's exile can use wild shape to assume vermin forms, as per beast shape II for a vermin creature. She can only assume vermin and ooze forms.",
        effects: [],
      },
      {
        name: 'Poison Immunity',
        level: 9,
        description:
          "The nature's exile becomes immune to all poisons and gains a +4 bonus on saves against disease.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 66. Nature's Savant
  // ──────────────────────────────────────────────
  {
    name: "Nature's Savant",
    className: 'Druid',
    description:
      "A nature's savant is an academic druid who focuses on studying and cataloguing the natural world, trading some mystical power for encyclopedic knowledge of nature.",
    replacedFeatures: ['Wild Shape', 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Master Naturalist',
        level: 1,
        description:
          "A nature's savant gains a +2 bonus on all Knowledge (nature) checks and can make Knowledge (nature) checks untrained. At 5th level, this bonus increases to +4, and she can identify any natural creature with a DC 10 check.",
        effects: [],
      },
      {
        name: 'Encyclopedic Knowledge',
        level: 4,
        description:
          "The nature's savant can share her knowledge as a move action, granting all allies within 30 feet the benefits of her favored enemy bonus against one creature type she identifies for 1 minute per druid level. She must succeed on a Knowledge check to identify the creature type.",
        effects: [],
      },
      {
        name: 'Natural Authority',
        level: 9,
        description:
          "When the nature's savant succeeds on a Knowledge (nature) check, she can spend 1 minute explaining her findings to grant allies a +2 competence bonus on attack rolls and saves against that creature type for 24 hours.",
        effects: [],
      },
      {
        name: 'Supreme Naturalist',
        level: 13,
        description:
          "The nature's savant knows every natural creature, plant, and phenomenon. She always succeeds on Knowledge (nature) checks to identify natural creatures and knows all their special powers and vulnerabilities automatically.",
        effects: [],
      },
    ],
    source: 'Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // 67. Penitent Druid
  // ──────────────────────────────────────────────
  {
    name: 'Penitent Druid',
    className: 'Druid',
    description:
      'A penitent druid has committed some great sin against nature and now seeks redemption through service and hardship, gaining power from her suffering and dedication to making amends.',
    replacedFeatures: [
      'Nature Bond',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
      'Timeless Body',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Penance',
        level: 1,
        description:
          'A penitent druid voluntarily undertakes a series of ongoing penances (determined with the GM) that restrict her behavior. In exchange, she gains a +2 sacred bonus on all saving throws as long as she adheres to her penances.',
        effects: [],
      },
      {
        name: 'Redemptive Bond',
        level: 1,
        description:
          'Instead of nature bond, the penitent druid gains a spirit companion from a creature she harmed or failed to protect. This spirit functions as a druid animal companion, but takes incorporeal form when convenient and is immune to poison and disease.',
        effects: [],
      },
      {
        name: "Nature's Forgiveness",
        level: 4,
        description:
          'For each penance fulfilled, the penitent druid gains one of the following benefits: fast healing 1, DR 1/—, or +1 on caster level checks. She can accumulate up to three such benefits at once.',
        effects: [],
      },
      {
        name: 'Atonement',
        level: 9,
        description:
          'When the penitent druid successfully restorates a blighted area or defeats a significant despoiler of nature, she heals 1d8 hit points per druid level and removes one negative condition.',
        effects: [],
      },
      {
        name: 'Absolution',
        level: 13,
        description:
          "The penitent druid's dedication earns true absolution. She gains the Timeless Body class feature, immunity to energy drain, and a +4 sacred bonus on all saves against necromancy effects.",
        effects: [],
      },
    ],
    source: 'Paths of the Righteous',
  },

  // ──────────────────────────────────────────────
  // 68. Primal Shifter
  // ──────────────────────────────────────────────
  {
    name: 'Primal Shifter',
    className: 'Druid',
    description:
      'A primal shifter pushes wild shape to its absolute limits, spending more time in animal form than humanoid and eventually becoming something beyond either.',
    replacedFeatures: [
      'Nature Bond',
      'Nature Sense',
      'Wild Empathy',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
      'Timeless Body',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Improved Wild Shape',
        level: 1,
        description:
          "A primal shifter's wild shape is treated as three levels higher than her druid level for determining what forms she can assume. She can maintain wild shape indefinitely, with no limit on duration.",
        effects: [],
      },
      {
        name: 'Natural Instincts',
        level: 1,
        description:
          'The primal shifter gains low-light vision, scent, and a +2 bonus on initiative checks that persist even in humanoid form.',
        effects: [],
      },
      {
        name: 'Hybrid Form',
        level: 4,
        description:
          'At 4th level, the primal shifter can maintain a hybrid form between human and animal while using wild shape. In hybrid form, she gains all the natural weapons and movement modes of her animal form but can still speak and cast spells.',
        effects: [],
      },
      {
        name: 'Primal Fury',
        level: 9,
        description:
          'While in wild shape, the primal shifter can enter a feral rage as a free action, gaining +4 Strength and +4 Constitution for a number of rounds per day equal to her druid level. While raging, she cannot cast spells or use items.',
        effects: [],
      },
      {
        name: 'Eternal Wild Shape',
        level: 13,
        description:
          "The primal shifter's wild shape becomes her true form. She gains the benefits of her wild shape form continuously (natural armor, movement modes, and senses) while in humanoid form and can switch as a swift action.",
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 69. Serene Warrior
  // ──────────────────────────────────────────────
  {
    name: 'Serene Warrior',
    className: 'Druid',
    description:
      'A serene warrior druid combines martial training with natural magic, striking with the calm precision of flowing water rather than the unpredictable fury of the storm.',
    replacedFeatures: [
      'Nature Bond',
      'Wild Empathy',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Martial Training',
        level: 1,
        description:
          'A serene warrior gains proficiency with all martial weapons and light and medium armor without the normal spellcasting failure chance. She also gains the Weapon Finesse feat as a bonus feat.',
        effects: [],
      },
      {
        name: "Nature's Discipline",
        level: 2,
        description:
          'The serene warrior adds her Wisdom modifier to damage rolls when wielding a finesse weapon and to AC (as a monk) when wearing light or no armor, to a maximum equal to half her druid level.',
        effects: [],
      },
      {
        name: 'Combat Wild Shape',
        level: 6,
        description:
          'The serene warrior can use wild shape as a swift action. While in wild shape, she retains the ability to cast spells with somatic components.',
        effects: [],
      },
      {
        name: 'Tranquil Strike',
        level: 9,
        description:
          'Once per round, when the serene warrior hits with a melee attack, she can attempt a combat maneuver against the target as a free action, using her Wisdom modifier instead of Strength for the CMB check.',
        effects: [],
      },
      {
        name: 'Natural Flow',
        level: 13,
        description:
          'The serene warrior gains the Improved Unarmed Strike feat and her unarmed strikes deal damage as a monk two levels lower. She can make unarmed strikes using wild shape natural weapons.',
        effects: [],
      },
    ],
    source: 'Martial Arts Handbook',
  },

  // ──────────────────────────────────────────────
  // 70. Shepherd (Druid Archetype)
  // ──────────────────────────────────────────────
  {
    name: 'Shepherd',
    className: 'Druid',
    description:
      'A shepherd druid watches over a community and its livestock, using nature magic to protect animals and people, healing the wounded and ensuring the safety of the flock.',
    replacedFeatures: ['Wild Shape', 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Nature Bond', 'Wild Empathy'],
    newFeatures: [
      {
        name: 'Tending Bond',
        level: 1,
        description:
          "A shepherd must select an animal companion. She can maintain a number of animal companions equal to half her Wisdom modifier (minimum 1). Each companion's effective druid level is her druid level. She also gains Handle Animal as a class skill with a bonus equal to half her druid level.",
        effects: [],
      },
      {
        name: 'Protective Ward',
        level: 2,
        description:
          'The shepherd can designate a 30-foot-radius area as her protective ward as a full-round action. Animals within the ward gain a +2 sacred bonus on all saves and +2 hit points per druid level as temporary hit points. The ward lasts 1 hour per druid level and can be moved at will as a standard action.',
        effects: [],
      },
      {
        name: 'Lay on Hands',
        level: 4,
        description:
          'The shepherd can lay on hands as a paladin of her druid level, but she can only use this ability on animals and animal companions.',
        effects: [],
      },
      {
        name: 'Flock Guardian',
        level: 9,
        description:
          "The shepherd can sense the health and location of any animal companion or creature in her protective ward within 1 mile. If any such creature is injured, she knows immediately and can plane shift to that creature's location once per day.",
        effects: [],
      },
    ],
    source: 'People of the River',
  },

  // ──────────────────────────────────────────────
  // 71. Spider Druid
  // ──────────────────────────────────────────────
  {
    name: 'Spider Druid',
    className: 'Druid',
    description:
      "A spider druid communes with arachnids and the complex webs of nature's hidden architecture, gaining abilities related to webbing, poison, and patient ambush.",
    replacedFeatures: [
      'Nature Bond',
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Wild Shape', 'Wild Empathy'],
    newFeatures: [
      {
        name: 'Spider Empathy',
        level: 1,
        description:
          'A spider druid can use wild empathy on spiders and other arachnids as if they were animals. She gains a +4 bonus on these checks.',
        effects: [],
      },
      {
        name: 'Webwalker',
        level: 2,
        description:
          'The spider druid can move through webs (natural and magical) at her normal speed without becoming entangled. She gains a climb speed of 20 feet when moving on webbed surfaces.',
        effects: [],
      },
      {
        name: 'Spin Web',
        level: 4,
        description:
          'The spider druid can spin webs as a standard action, as the web spell (CL equals druid level). Uses per day equal to 3 + Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Spider Wild Shape',
        level: 6,
        description:
          'The spider druid can use wild shape to assume spider and arachnid forms. Her effective druid level for spider forms is her druid level + 2. She can only assume vermin and spider forms.',
        effects: [],
      },
      {
        name: 'Venom',
        level: 9,
        description:
          'The spider druid gains a poison attack with her natural weapons or unarmed strikes. The poison deals 1d4 Con damage (Fortitude DC 10 + half druid level + Wisdom modifier) with a frequency of 1/round for 6 rounds.',
        effects: [],
      },
      {
        name: 'Web Mistress',
        level: 13,
        description:
          'The spider druid can create a permanent web network in any area she inhabits for more than 1 week. This network gives her tremorsense 60 feet within the web-covered area.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 72. Stone Druid
  // ──────────────────────────────────────────────
  {
    name: 'Stone Druid',
    className: 'Druid',
    description:
      'A stone druid is attuned to the deep earth and ancient stone, gaining endurance, stonework knowledge, and eventually the ability to merge with rock itself.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Nature Bond', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Stonewarder',
        level: 2,
        description:
          'The stone druid gains a +2 bonus on Perception checks to find unusual stonework and secret doors. She can move through rubble and rocky terrain at full speed.',
        effects: [],
      },
      {
        name: 'Earthsense',
        level: 3,
        description:
          'The stone druid cannot be tracked on natural stone surfaces. She gains tremorsense 10 feet while in contact with stone or earth, increasing by 10 feet at 7th level and every 4 levels thereafter.',
        effects: [],
      },
      {
        name: 'Stoneblood',
        level: 4,
        description:
          'The stone druid gains a +4 bonus on saves against the spell-like and supernatural abilities of earth creatures and against petrification effects.',
        effects: [],
      },
      {
        name: 'Stone Wild Shape',
        level: 6,
        description:
          'The stone druid can wild shape into earth elementals. At 6th level she can become a Small earth elemental, at 8th level a Medium, at 10th level a Large, and at 12th level a Huge earth elemental.',
        effects: [],
      },
      {
        name: 'Skin of Stone',
        level: 9,
        description:
          'The stone druid gains DR 3/adamantine. This increases by 1 at 13th and 17th levels.',
        effects: [],
      },
      {
        name: 'One with Stone',
        level: 13,
        description:
          'Once per day, the stone druid can meld into stone as the meld into stone spell. She can remain merged indefinitely and can sense all vibrations within 60 feet while merged.',
        effects: [],
      },
    ],
    source: 'Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 73. Swarm Monger
  // ──────────────────────────────────────────────
  {
    name: 'Swarm Monger',
    className: 'Druid',
    description:
      'A swarm monger commands hordes of insects and other small creatures, using their collective power to overwhelm foes and serve as both weapon and shield.',
    replacedFeatures: ['Nature Bond', 'Woodland Stride', 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Wild Empathy', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Swarm Empathy',
        level: 1,
        description:
          'A swarm monger can use wild empathy on swarms as if they were single creatures. She gains a +4 bonus on these checks. She can also use Handle Animal on swarms that have an Intelligence of 1 or 2.',
        effects: [],
      },
      {
        name: 'Call Swarm',
        level: 2,
        description:
          'The swarm monger can call a swarm of insects or similar vermin as a standard action. The swarm functions as if summoned by summon swarm (CL equals druid level). Uses per day equal to 3 + Wisdom modifier. At 6th level, she can call a more powerful vermin swarm using her wild empathy bonus as an effective Handle Animal check.',
        effects: [],
      },
      {
        name: 'Swarm Companion',
        level: 4,
        description:
          'The swarm monger can bind a permanent swarm companion, treating it as a druid animal companion using her druid level. The swarm gains bonus Hit Dice and abilities as it advances.',
        effects: [],
      },
      {
        name: 'Swarm Form',
        level: 6,
        description:
          'The swarm monger can use wild shape to assume the form of a swarm. In this form she acts as a standard swarm of her type (insects, spiders, or similar) with Hit Dice equal to her druid level. She can only assume swarm or vermin forms with wild shape.',
        effects: [],
      },
      {
        name: 'Insect Immunity',
        level: 9,
        description:
          'The swarm monger gains immunity to swarm damage and distraction effects from vermin swarms. She is never affected by her own swarms.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 74. Tide Pool Druid
  // ──────────────────────────────────────────────
  {
    name: 'Tide Pool Druid',
    className: 'Druid',
    description:
      'A tide pool druid is fascinated with the rich miniature ecosystems of coastal tide pools, channeling the resilience of intertidal life and the rhythmic power of the tides.',
    replacedFeatures: [
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
    ],
    modifiedFeatures: ['Nature Bond', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Tidal Attunement',
        level: 2,
        description:
          'The tide pool druid gains a +2 bonus on all Knowledge (nature) checks relating to aquatic life, coastal environments, and tidal rhythms. She can predict tides and coastal weather with perfect accuracy.',
        effects: [],
      },
      {
        name: 'Tidal Stride',
        level: 3,
        description:
          'The tide pool druid can move through shallow coastal water, kelp beds, and tidal pools at full speed without penalty. She gains a swim speed of 20 feet.',
        effects: [],
      },
      {
        name: 'Resist the Sea',
        level: 4,
        description:
          'The tide pool druid gains a +4 bonus on saves against the spell-like abilities of sea creatures and cannot be moved by natural tidal currents or waves.',
        effects: [],
      },
      {
        name: 'Intertidal Wild Shape',
        level: 6,
        description:
          'The tide pool druid can assume the forms of creatures found in tide pools, including crabs, starfish, sea anemones, and small octopi. Her wild shape for such creatures is treated as two levels higher.',
        effects: [],
      },
      {
        name: 'Tide Master',
        level: 9,
        description:
          'Once per day, the tide pool druid can call the tide. She creates a surge of water in a 60-foot line that deals 4d8 bludgeoning damage (Reflex half, DC 10 + half druid level + Wisdom modifier) and pushes creatures 20 feet back.',
        effects: [],
      },
    ],
    source: 'Isles of the Shackles',
  },

  // ──────────────────────────────────────────────
  // 75. Tree Singer
  // ──────────────────────────────────────────────
  {
    name: 'Tree Singer',
    className: 'Druid',
    description:
      'A tree singer is an elven druid variant whose magic is expressed through song and whose bond with the forest is so deep she can communicate with and even animate trees.',
    replacedFeatures: ['Nature Bond', "Resist Nature's Lure", 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: 'Tree Singing',
        level: 1,
        description:
          'A tree singer can communicate with plants and plant creatures by singing to them, as speak with plants (CL equals druid level). She gains a +4 bonus on Perform (sing) checks and uses this skill in place of Knowledge (nature) to identify plant creatures.',
        effects: [],
      },
      {
        name: 'Woodland Bond',
        level: 1,
        description:
          'A tree singer must choose an animal companion with the woodland type, or select the Plant domain. She cannot choose a domain that does not relate to forests or plants.',
        effects: [],
      },
      {
        name: 'Warden of Wood',
        level: 4,
        description:
          'The tree singer gains a +4 bonus on saves against fire effects and the spell-like abilities of fire creatures. Wooden items she carries gain a +2 bonus on saves against fire.',
        effects: [],
      },
      {
        name: 'Awaken Wood',
        level: 9,
        description:
          'Once per day, the tree singer can use awaken as a spell-like ability (CL equals druid level) targeting only plant life. The awakened plant begins with an attitude of Friendly toward the tree singer.',
        effects: [],
      },
      {
        name: 'Living Grove',
        level: 13,
        description:
          'Trees within 1 mile of a tree singer are attuned to her. Once per day, she can pass from tree to tree as tree stride, but only between trees that are at least 100 years old. She can also transport willing creatures with her.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 76. Caretaker
  // ──────────────────────────────────────────────
  {
    name: 'Caretaker',
    className: 'Druid',
    description:
      'A caretaker druid forgoes the wild power of shapeshifting and offensive magic to focus entirely on healing and protecting the living creatures in her charge.',
    replacedFeatures: ['Wild Shape', "Resist Nature's Lure", 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Nature Bond'],
    newFeatures: [
      {
        name: 'Healing Hands',
        level: 1,
        description:
          'A caretaker can channel positive energy as a cleric of her druid level, using Wisdom to determine uses per day (3 + Wisdom modifier). She adds her Wisdom modifier to the hit points healed.',
        effects: [],
      },
      {
        name: 'Remedy',
        level: 2,
        description:
          'The caretaker can remove one of the following conditions from a creature by touch as a standard action: dazed, fatigued, shaken, or sickened. Uses per day equal to 3 + Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Revitalize',
        level: 4,
        description:
          'At 4th level, the caretaker can remove the exhausted, frightened, nauseated, or stunned condition with a touch (one condition per touch). This replaces one use of healing hands.',
        effects: [],
      },
      {
        name: 'Life Aura',
        level: 9,
        description:
          'The caretaker radiates an aura of life. All allies within 30 feet of her gain fast healing 1. Undead creatures that enter the aura take 1d6 positive energy damage per round.',
        effects: [],
      },
      {
        name: 'True Healer',
        level: 13,
        description:
          'The caretaker can restore 1 point of ability damage or 1 negative level from a touched creature as a standard action, usable a number of times per day equal to her Wisdom modifier.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 77. Cultivator
  // ──────────────────────────────────────────────
  {
    name: 'Cultivator',
    className: 'Druid',
    description:
      'A cultivator druid manages the land and nurtures growth rather than leaving nature entirely wild, using magic to coax extraordinary productivity from the earth.',
    replacedFeatures: ['Wild Shape', "Resist Nature's Lure", 'Venom Immunity', 'A Thousand Faces'],
    modifiedFeatures: ['Nature Bond'],
    newFeatures: [
      {
        name: 'Green Thumb',
        level: 1,
        description:
          'A cultivator adds Profession (farmer) and Profession (herbalist) to her class skills with a bonus equal to half her druid level. She can cause plants to grow as the plant growth spell (crops only) once per day per druid level.',
        effects: [],
      },
      {
        name: 'Cultivated Bond',
        level: 1,
        description:
          'A cultivator must select the Plant domain or a plant creature as her animal companion.',
        effects: [],
      },
      {
        name: 'Verdant Touch',
        level: 4,
        description:
          'The cultivator can improve the quality of soil, water, or plant life with a touch. Once per day, she can treat 100 square feet of land to remove blight or make it exceptionally fertile, granting a +4 bonus on Survival and Profession checks to harvest or gather food from the treated area.',
        effects: [],
      },
      {
        name: 'Growth Field',
        level: 9,
        description:
          'The cultivator can create a rapid growth effect in a 30-foot-radius area once per day. All plants in the area grow to twice their size over 1 round, providing cover and difficult terrain to non-plant creatures.',
        effects: [],
      },
      {
        name: 'Master Cultivator',
        level: 13,
        description:
          'The cultivator can create a garden of remarkable power. With 1 hour of work, she can consecrate a 1-acre area, granting fast healing 1 to any creature that rests there for 1 hour per day.',
        effects: [],
      },
    ],
    source: 'Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // 78. Forest Warden
  // ──────────────────────────────────────────────
  {
    name: 'Forest Warden',
    className: 'Druid',
    description:
      'A forest warden is the designated protector of a specific ancient woodland, bound to it by oath and nature magic, gaining power from and for the defense of her forest home.',
    replacedFeatures: [
      'Nature Bond',
      'Woodland Stride',
      'Trackless Step',
      "Resist Nature's Lure",
      'Venom Immunity',
    ],
    modifiedFeatures: ['Wild Shape'],
    newFeatures: [
      {
        name: "Warden's Grove",
        level: 1,
        description:
          'A forest warden selects a specific forest as her warden grove (up to 10 square miles per druid level). Within this grove, she gains a +4 bonus on Perception, Survival, and Knowledge (nature) checks. She always knows the health and condition of her grove, even from a distance of up to 1 mile per druid level.',
        effects: [],
      },
      {
        name: 'Forest Bond',
        level: 1,
        description:
          'The forest warden must select an animal companion native to her warden grove, or the Plant domain.',
        effects: [],
      },
      {
        name: "Grove's Defense",
        level: 4,
        description:
          'Within her warden grove, the forest warden can animate trees as the animate plants spell (CL equals druid level) once per day. The animated plants obey her commands for 1 hour per druid level.',
        effects: [],
      },
      {
        name: 'Sense Intrusion',
        level: 9,
        description:
          'The forest warden instantly knows when any creature enters her warden grove and can perceive the location and identity of any creature within the grove as a standard action, as if using detect magic (but for living creatures).',
        effects: [],
      },
      {
        name: 'Grove Guardian',
        level: 13,
        description:
          'Within her warden grove, the forest warden gains DR 5/— and all her spells are treated as if maximized (without changing their spell level). She can tree stride within the grove at will as a standard action.',
        effects: [],
      },
    ],
    source: 'Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // 79. Durthan
  // ──────────────────────────────────────────────
  {
    name: 'Durthan',
    className: 'Druid',
    description:
      'A durthan is a dark druid who serves the corrupted forces of nature and the Shadow Plane, an evil counterpart to the traditional druid who draws power from entropy and shadow.',
    replacedFeatures: [
      "Resist Nature's Lure",
      'Venom Immunity',
      'A Thousand Faces',
      'Timeless Body',
    ],
    modifiedFeatures: ['Nature Bond', 'Wild Shape'],
    newFeatures: [
      {
        name: 'Shadow Bond',
        level: 1,
        description:
          'A durthan must select the Darkness, Evil, or Trickery domain as her nature bond, or select an animal companion with the advanced template or Shadow Creature template.',
        effects: [],
      },
      {
        name: 'Shadow Cloak',
        level: 2,
        description:
          'The durthan gains a +4 bonus on Stealth checks in dim light or darkness and can use Stealth as a move action instead of a standard action.',
        effects: [],
      },
      {
        name: 'Corrupt Wild Shape',
        level: 6,
        description:
          "When using wild shape, the durthan can assume a shadow version of any animal form, gaining the Shadow Creature template in addition to the form's normal benefits. This grants concealment (20% miss chance) from lighting attacks.",
        effects: [],
      },
      {
        name: 'Undead Empathy',
        level: 4,
        description:
          'The durthan can use wild empathy on undead creatures as if they were animals, using Wisdom instead of Charisma. She gains a +4 bonus on Intimidate checks against undead.',
        effects: [],
      },
      {
        name: 'Shadow Walk',
        level: 9,
        description:
          'The durthan can use shadow walk as a spell-like ability once per day (CL equals druid level). At 13th level, she can use it twice per day.',
        effects: [],
      },
    ],
    source: 'Inner Sea Magic',
  },
];
