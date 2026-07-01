import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_003: TemplateDefinition[] = [
  // 51. Blood Magic Creature (CR +2) [3pp]
  {
    id: 'blood-magic-creature',
    name: 'Blood Magic Creature',
    description:
      'A creature infused with potent blood magic, granting it a regenerative blood pool fueled by killing and caustic, poisonous blood.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'special', description: 'Must have Intelligence 4 or higher' }],
    abilityScoreChanges: [
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Blood Point (Su)',
        description:
          'Gains 1 blood point when killing a non-plant living creature; a special blood-filled pool is fully replenished. Maximum pool equals 10 + HD + Charisma modifier. As a free action, may spend blood points to: add +2 to any d20 roll (1 point), add +2 to ability DC (1 point), gain an extra melee/ranged attack during a full attack (1 point), temporarily use a feat meeting prerequisites (1 point), or recall a prepared spell (1 point).',
      },
      {
        scalingType: 'flat',
        name: 'Caustic Blood (Ex)',
        description:
          'Creatures that hit the blood magic creature with a melee attack take 2d6 acid damage (Reflex save half, DC 10 + 1/2 HD + Con modifier). Blood points may be expended to add a poison effect (same DC).',
      },
      {
        scalingType: 'flat',
        name: 'Regeneration (Su)',
        description:
          'Gains regeneration equal to 10 points per HD (maximum 150). Costs 6 blood points to activate. Bypassed by bludgeoning, fire, and acid.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Spell-Like Abilities (Sp)',
        description:
          "Creatures with Intelligence or Wisdom 8 or higher gain cumulative spell-like abilities based on HD, each costing blood points equal to the spell level. Caster level equals the creature's HD or the base creature's caster level, whichever is higher.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 52. Blood of Yog-Sothoth (CR +1)
  {
    id: 'blood-of-yog-sothoth',
    name: 'Blood of Yog-Sothoth',
    description:
      'A humanoid descended from or tainted by Yog-Sothoth, becoming an aberration with alien constitution, a sickening stench, and resistance to the elements.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['humanoid'] }],
    typeChange: 'aberration (augmented humanoid)',
    subtypeGains: ['augmented humanoid'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: -2 },
      { ability: 'CHA', change: -4 },
    ],
    resistances: [
      { energyType: 'cold', value: 5 },
      { energyType: 'fire', value: 5 },
    ],
    immunities: ['disease'],
    features: [
      {
        scalingType: 'flat',
        name: 'Low-Light Vision',
        description: 'Gains low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Stench (Su)',
        description:
          'As a swift action, the blood of Yog-Sothoth intensifies its alien scent. Creatures in range must succeed at a Fortitude save (DC 10 + 1/2 HD + Con modifier) or become sickened for 1 round. Usable for a number of rounds per day equal to total Hit Dice. This is a poison, mind-affecting, fear effect. Immune to the stench of other Blood of Yog-Sothoth creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Aberrant Resilience',
        description:
          'Gains a +4 racial bonus on saves against mind-affecting effects. Racial Hit Dice become d8s; class-based Hit Dice are unchanged. Gains Toughness as a bonus feat. Gains a +4 racial bonus on Intimidate and Stealth checks.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Mythos Monsters (Legendary Games, 2022)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 53. Boreal Creature (CR +1)
  {
    id: 'boreal-creature',
    name: 'Boreal Creature',
    description:
      'A creature native to or transformed by frozen northern lands, gaining cold resistance, icy natural attacks, and an ability to move without leaving a trail in snow.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'special',
        description: 'Huge or smaller corporeal creature; cannot have the fire subtype.',
      },
    ],
    subtypeGains: ['cold'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CON', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Cold Natural Attacks',
        description: 'All natural attacks deal an additional 1d6 cold damage on a hit.',
      },
      {
        scalingType: 'flat',
        name: 'Trackless Step (Ex)',
        description:
          'A boreal creature does not leave a trail in snow and cannot be tracked. It can choose to leave a trail if it wishes. Does not apply to aquatic boreal creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Arctic Stealth',
        description:
          'Gains a +4 bonus on Stealth and Survival checks in snowy environments. Aquatic boreal creatures gain this bonus in frigid waters instead.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Irrisen, Land of Eternal Winter',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 54. Brain Cylinder (CR 1/4) [3pp]
  {
    id: 'brain-cylinder',
    name: 'Brain Cylinder',
    description:
      'A living brain removed from its body and encased in an armored glass cylinder, becoming an immobile construct retaining mental abilities but losing physical capabilities.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'special', description: 'Corporeal living creature with a brain.' }],
    typeChange: 'construct',
    sizeChange: -3,
    abilityScoreChanges: [{ ability: 'WIS', change: -2 }],
    abilityScoreChangeNote:
      'Loses Strength and Constitution scores entirely. Dexterity reduced to 0. Intelligence and Charisma retained. Wisdom takes -2 from transplantation trauma.',
    naturalArmorChange: 6,
    immunities: ['cold damage', 'nonlethal damage', 'critical hits'],
    features: [
      {
        scalingType: 'flat',
        name: 'Armored Casing',
        description:
          'Gains Hardness 20 from the armored glass casing. Takes half damage from fire, sonic, and all non-electricity energy before applying hardness. Takes half damage from ranged weapons.',
      },
      {
        scalingType: 'flat',
        name: 'Immobile',
        description:
          'Loses all movement speeds and cannot move independently. Takes an additional -2 penalty to AC due to immobility and Dexterity 0.',
      },
      {
        scalingType: 'flat',
        name: 'Retained Mental Abilities',
        description:
          'Retains spell-like abilities (function normally), psychic magic (with concentration check DC 15 + spell level for emotion components), and other mental abilities. Can cast spells with verbal components only if a speech module is attached; cannot use somatic, material, or focus components.',
      },
      {
        scalingType: 'flat',
        name: 'Sensory Attachments',
        description:
          'Blind and deaf without attachments. Standard action to attach or detach vision, hearing, or speech modules. Loses supernatural senses dependent on physical body.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Petersen Games',
      publication: "Sandy Petersen's Cthulhu Mythos",
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 55. Bramble (CR +1) [3pp]
  {
    id: 'bramble',
    name: 'Bramble',
    description:
      'A living creature transformed into a plant-like thorn-covered entity, capable of lashing foes with bramble whips, firing thorn darts, and entangling undergrowth.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'special', description: 'Living, corporeal creature that breathes air.' },
    ],
    typeChange: 'plant (augmented)',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: -2, minimum: 1 },
      { ability: 'DEX', change: 4 },
    ],
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Woodland Stride',
        description:
          'Can move through natural undergrowth at normal speed without damage or impairment. Magically manipulated undergrowth still impedes movement.',
      },
      {
        scalingType: 'flat',
        name: 'Quick Draw',
        description: 'Gains Quick Draw as a bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Gore Attack and Grab',
        description:
          'Gains a gore attack (primary if no other natural attacks, secondary otherwise). All natural attacks gain the grab ability.',
      },
      {
        scalingType: 'flat',
        name: 'Thorny Grasp',
        description:
          'Deals automatic piercing damage while grappling. Also deals damage to creatures that attempt a bull rush, grapple, overrun, or trip against the bramble.',
      },
      {
        scalingType: 'flat',
        name: 'Prickle Whip (1/day)',
        description:
          'Once per day, unravels and detaches one tangled strand as a lethal whip that ignores armor. Usable for up to 1 hour.',
      },
      {
        scalingType: 'flat',
        name: 'Thorn Dart (2/day per HD)',
        description:
          'Can pull a long thorn from its body and use it as a dart. Usable twice per day per Hit Die.',
      },
      {
        scalingType: 'flat',
        name: 'Forest Stealth',
        description: 'Gains a +8 circumstance bonus on Stealth checks in forests or thickets.',
      },
    ],
    spellLikeAbilities: [
      {
        spellName: 'entangle',
        frequency: '1/day (plus 1 per 5 HD)',
        casterLevelFormula: 'equal to total HD',
      },
      {
        spellName: 'thorn walk',
        frequency: '1/day (plus 1 per 5 HD)',
        casterLevelFormula: 'equal to total HD',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary (2014)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 56. Broken Soul (CR +2)
  {
    id: 'broken-soul',
    name: 'Broken Soul',
    description:
      'A creature whose soul has been shattered by extreme trauma, leaving it physically powerful but psychically scarred, with horrifying gaze and wail attacks.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living creature with Intelligence 3 or higher.' },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 6 },
      { ability: 'WIS', change: -2, minimum: 1 },
    ],
    abilityScoreChangeNote:
      'Also gains +2 to one ability score of choice and -6 to another ability score of choice (minimum 1).',
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '—' },
    resistances: [
      { energyType: 'acid', value: 5 },
      { energyType: 'cold', value: 5 },
      { energyType: 'electricity', value: 5 },
      { energyType: 'fire', value: 5 },
      { energyType: 'sonic', value: 5 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Shattered Psyche',
        description:
          'Gains Diehard, Endurance, Great Fortitude, and Toughness as bonus feats. Gains a +8 racial bonus on Intimidate checks. Takes a -10 racial penalty on Concentration checks. Speed is reduced by 10 feet (minimum 5 feet).',
      },
      {
        scalingType: 'flat',
        name: 'Agonized Wail (Su)',
        description:
          'Emits an agonized wail that inspires terror within 120 feet. Creatures must succeed at a Will save or become shaken for as long as they remain within range. Successful save grants 24-hour immunity. This is a sonic mind-affecting fear effect.',
      },
      {
        scalingType: 'flat',
        name: 'Baleful Gaze (Su)',
        description:
          'Creatures within 60 feet must succeed at a Fortitude save or take 1d4 points of Strength, Constitution, and Charisma drain. A creature cannot be affected again for 1 minute after a successful save.',
      },
      {
        scalingType: 'flat',
        name: 'Torturous Touch (Su)',
        description:
          'Touch attack dealing 2d6 slashing damage and 1d6 Dexterity damage. The target falls prone and becomes dazed for 1d4 rounds. A Fortitude save negates the Dexterity damage and the prone/dazed condition.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 4',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 57. Calcified Creature (CR +1)
  {
    id: 'calcified-creature',
    name: 'Calcified Creature',
    description:
      'A living creature whose body has been calcified by an incutilis lord, becoming a mindless but physically powerful servant with enhanced natural armor and darkvision.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [{ type: 'special', description: 'Living corporeal creature.' }],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
    ],
    abilityScoreChangeNote:
      'Loses Intelligence score entirely, becoming mindless, but retains skill use.',
    naturalArmorChange: 4,
    immunities: ['mind-affecting effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'Gains darkvision to a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Calcified Stealth',
        description: 'Gains a +8 racial bonus on Stealth checks in dim or no light.',
      },
      {
        scalingType: 'flat',
        name: 'Retained Abilities',
        description:
          "Retains the base creature's feats, physical skills, extraordinary abilities, spell-like abilities, and supernatural abilities.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Module: Plunder & Peril',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 58. Carnival Animal (CR +1) [3pp]
  {
    id: 'carnival-animal',
    name: 'Carnival Animal',
    description:
      'A magical clockwork-like animal construct styled as a carnival toy, capable of levitation, shrinking, engulfing foes, and exploding in a burst of confetti when destroyed.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['animal'] }],
    typeChange: 'construct (augmented animal)',
    subtypeGains: ['augmented animal'],
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'piercing' },
    immunities: ['falling damage'],
    features: [
      {
        scalingType: 'flat',
        name: 'Compression (Ex)',
        description: 'Gains the compression ability; standard rules apply.',
      },
      {
        scalingType: 'flat',
        name: 'Weightless (Ex)',
        description:
          'Immune to falling damage and weighs 1/16th of a typical creature of its kind.',
      },
      {
        scalingType: 'flat',
        name: 'Deafening Burst (Ex)',
        description:
          'When reduced to 0 hit points, explodes into confetti and streamers with a deafening pop before vanishing. Adjacent creatures must make a Reflex save (DC 10 + 1/2 racial HD + Str modifier) or be stunned for 1 round.',
      },
      {
        scalingType: 'flat',
        name: 'Sonic Attack (Su)',
        description:
          'Breath weapon dealing 1d6 sonic damage per racial Hit Die (Reflex save half, same DC as Deafening Burst). Recharges in 1d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Swallow Whole (Ex)',
        description:
          'Can swallow creatures up to its size, dealing bludgeoning damage equal to its bite damage. Can choose to deal no damage or resume damage as a free action.',
      },
      {
        scalingType: 'flat',
        name: 'Carnival Agility',
        description:
          'Gains a +8 racial bonus on Acrobatics, Climb, Escape Artist, and Disguise checks (as specific animal). Gains Improved Grapple as a bonus feat even without the prerequisites.',
      },
    ],
    spellLikeAbilities: [
      {
        spellName: 'levitate',
        frequency: 'at_will',
        casterLevelFormula: 'equal to HD',
      },
      {
        spellName: 'shrink (to Fine size, as beast shape III)',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Radiance House',
      publication: 'Pact Magic Unbound: Grimoire of Lost Souls (2016)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 59. Carnivorous Creature (CR +1)
  {
    id: 'carnivorous-creature',
    name: 'Carnivorous Creature',
    description:
      'A formerly herbivorous animal transformed into a predatory magical beast, gaining size, a bite attack, darkvision, scent, and an evil disposition.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
      { type: 'special', description: 'Base creature must be a herbivorous animal.' },
    ],
    typeChange: 'magical beast',
    sizeChange: 1,
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'Gains darkvision to a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Scent',
        description: 'Gains the scent ability if not already possessed.',
      },
      {
        scalingType: 'flat',
        name: 'Bite Attack',
        description:
          'Gains a bite attack if not already possessed. Damage scales with creature size; this is a primary natural weapon. Alignment restricted to any evil.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Mediterranean Monsters (Legendary Games, 2024)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 60. Cataclysmic Creature (CR 25) [3pp]
  {
    id: 'cataclysmic-creature',
    name: 'Cataclysmic Creature',
    description:
      'A supernaturally empowered being of catastrophic might, elevated to CR 25 with divine damage, near-total immunities, and the ability to obliterate everything within miles.',
    crAdjustment: 25,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    sizeChange: 1,
    abilityScoreChanges: [
      { ability: 'STR', change: 10 },
      { ability: 'DEX', change: 10 },
      { ability: 'CON', change: 10 },
      { ability: 'CHA', change: 10 },
    ],
    naturalArmorChange: 10,
    damageReduction: { scalingType: 'flat', value: 25, bypassedBy: '—' },
    srFormula: '37',
    immunities: [
      'ability drain',
      'acid',
      'disease',
      'death by massive damage',
      'cold',
      'electricity',
      'fire',
      'mind-affecting effects',
      'stunning',
      'paralysis',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Cataclysmic Attacks',
        description:
          'All melee and ranged attacks gain a +5 enhancement bonus and deal an additional +5d6 divine damage per successful hit.',
      },
      {
        scalingType: 'flat',
        name: 'Divine Puissance (Su)',
        description: 'Grants a +2 divine bonus to all saving throws and +3 divine bonus to AC.',
      },
      {
        scalingType: 'flat',
        name: 'Divine Retribution (Su)',
        description:
          'Creatures that strike the cataclysmic creature must succeed at a Fortitude save (DC 25 + Cha modifier) or take 300 divine damage; success halves the damage. Natural weapon and unarmed attackers trigger the same save. Successful save grants 24-hour immunity.',
      },
      {
        scalingType: 'flat',
        name: 'Divine Rejuvenation (Su)',
        description:
          'Three times per day as a standard action, restores all lost hit points without provoking attacks of opportunity.',
      },
      {
        scalingType: 'flat',
        name: 'Word of the Cataclysm (Su)',
        description:
          'Once per day, unleashes destructive energy dealing 300 points of damage to all creatures and objects within a 12,000 ft. radius (the cataclysmic creature is immune). A Fortitude save (DC 25 + Cha modifier) halves the damage and grants 24-hour immunity.',
      },
      {
        scalingType: 'flat',
        name: 'Unrestricted Feats',
        description:
          'May select any feat regardless of class restrictions, provided all other qualifications are met.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 61. Cave Creature (CR +1) [3pp]
  {
    id: 'cave-creature',
    name: 'Cave Creature',
    description:
      'A subterranean-adapted creature with enhanced senses, a climb speed, and claw attacks, but weakened by light and surface instincts.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'special',
        description:
          'Living, corporeal creature with a Dexterity score; not an ooze; normally surface-active.',
      },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: -2, minimum: 1 },
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: -2, minimum: 1 },
    ],
    naturalArmorChange: 1,
    features: [
      {
        scalingType: 'flat',
        name: 'Cave Senses',
        description:
          'Gains either blindsight 60 ft. or darkvision +60 ft. (chosen at creation). Also gains the light blindness weakness (blinded for 1 round, then dazzled while in bright light).',
      },
      {
        scalingType: 'flat',
        name: 'Climb Speed',
        description:
          'Gains a climb speed equal to half its base land speed (or 10 ft. if the base creature lacks a climb or land speed).',
      },
      {
        scalingType: 'flat',
        name: 'Stone Stealth',
        description: 'Gains a +4 circumstance bonus on Stealth checks in natural stone areas.',
      },
      {
        scalingType: 'flat',
        name: 'Claw Attacks',
        description:
          'Gains one or more primary claw attacks if the base creature lacks natural attacks. Damage is calculated as if the creature were one size category larger.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary (2014)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 62. Celestial-Blessed Creature (CR +1) [3pp]
  {
    id: 'celestial-blessed-creature',
    name: 'Celestial-Blessed Creature',
    description:
      'A creature that has merged with a willing celestial being, gaining sacred damage on attacks, celestial blessings, and unique powers depending on the celestial type.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful good', 'neutral good', 'chaotic good'] },
      {
        type: 'special',
        description:
          'Both the celestial and the mortal must be willing, conscious, and in physical contact for one hour.',
      },
    ],
    subtypeGains: ['good'],
    resistances: [{ energyType: 'electricity', value: 20 }],
    features: [
      {
        scalingType: 'flat',
        name: 'Sacredness (Su)',
        description:
          "All melee attacks deal 1d6 extra damage to evil-aligned creatures. All of the creature's weapons are treated as magic and good-aligned for purposes of overcoming damage reduction.",
      },
      {
        scalingType: 'flat',
        name: 'Blessed (Su)',
        description: 'Gains a +1 morale bonus on attack rolls and saving throws.',
      },
      {
        scalingType: 'flat',
        name: 'Heavenly Health (Ex)',
        description:
          'Gains a +2 resistance bonus on Fortitude saves against poison and petrification.',
      },
      {
        scalingType: 'flat',
        name: 'Inhabited (Ex)',
        description:
          'A celestial is merged within the creature and is undetectable by most magic. The celestial cannot exit or communicate while merged.',
      },
      {
        scalingType: 'flat',
        name: 'Celestial Quality (Su)',
        description:
          "Gains a special ability based on the type of celestial merged: Astral Deva grants Stunning Strike 5/day (Fortitude or stunned 1d6 rounds); Avoral grants Lightning Bolt 3/day (Sp); Bralani grants Wind Wall at will (Sp); Ghaele grants Fear 3/day (Sp); Hound Archon grants Mage's Faithful Hound 1/day (Sp); Lantern Archon grants Searing Light 3/day (Sp); Leonal grants Pounce (Ex); Planetar grants Flame Strike 1/day (Sp); Solar grants Slaying Shot 1/day (Su, Fortitude or die); Trumpet Archon grants Clarion Call 1/day (Su, Fortitude or paralyzed 1d4 rounds within 30 ft.).",
      },
    ],
    choices: [
      {
        id: 'celestial-type',
        label: 'Celestial Type',
        optionSource: 'inline',
        optionGroups: [
          {
            id: 'celestial-types',
            name: '',
            options: [
              {
                id: 'astral-deva',
                name: 'Astral Deva',
                description:
                  'Grants Stunning Strike 5/day (Fortitude DC 10+HD+Str or stunned 1d6 rounds).',
                grantsFeature: {
                  id: 'stunning-strike',
                  scalingType: 'flat',
                  name: 'Stunning Strike 5/day',
                  description:
                    'The creature can attempt a stunning strike. The target must succeed on a Fortitude save (DC 10 + HD + Str modifier) or be stunned for 1d6 rounds.',
                  shortDescription: 'Stun; Fort or stunned 1d6 rounds',
                  activationMode: 'action',
                  resourcePool: {
                    id: 'stunning_strike_uses',
                    name: 'Stunning Strike',
                    rechargeOn: 'rest',
                    maxFormula: '5',
                    restRecoveryMode: 'full',
                  },
                },
              },
            ],
          },
        ],
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary (2004)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 63. Chaosborne (CR +1) [3pp]
  {
    id: 'chaosborne',
    name: 'Chaosborne',
    description:
      'A chaotic creature warped by pure entropic energy, gaining random ability score changes, shifting energy immunities, and debilitating auras against lawful foes.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'alignment',
        allowed: ['chaotic good', 'chaotic neutral', 'chaotic evil'],
      },
    ],
    subtypeGains: ['chaotic'],
    abilityScoreChangeNote:
      'Ability scores are randomly modified upon acquisition. Roll 1d8: 1) Str-2, Dex+2, Con-2, Int+2, Wis-2, Cha+2; 2) Str+2, Dex-2, Con+2, Int-2, Wis+2, Cha-2; 3) Str+2, Dex+2, Con+2, Int-2, Wis-2, Cha-2; 4) Str-2, Dex-2, Con-2, Int+2, Wis+2, Cha+2; 5) Str+4, Dex-4, Con+4, Int-4, Wis+4, Cha-4; 6) Str-4, Dex+4, Con-4, Int+4, Wis-4, Cha+4; 7) Str+4, Dex+4, Con-8, Int-4, Wis-4, Cha+8; 8) Str-4, Dex-8, Con+8, Int+4, Wis-8, Cha+8.',
    features: [
      {
        scalingType: 'flat',
        name: 'Random Energy Immunity (Ex)',
        description:
          'Immune to one energy type that changes each round: acid, cold, electricity, fire, sonic, force, positive energy, or negative energy.',
      },
      {
        scalingType: 'flat',
        name: 'See Chaos (Su)',
        description:
          'Constant ability to identify chaotic creatures, spells, and magic items within sight range.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Anarchy (Su)',
        description:
          'Nonchaotic creatures within 10 feet take a -5 penalty on ability checks, skill checks, and level checks (Will save negates). On a natural roll of 5 or below, affected targets automatically miss on attack rolls and fail saving throws.',
      },
      {
        scalingType: 'flat',
        name: "Law's Failing (Su)",
        description:
          'Lawful casters within 60 feet attempting to cast spells with the lawful descriptor must succeed on a caster level check or the ability fails.',
      },
      {
        scalingType: 'flat',
        name: 'Entropic Blow (Su)',
        description:
          'Melee attacks deal an additional 1d6 damage to lawful-aligned creatures or those with the lawful subtype.',
      },
      {
        scalingType: 'flat',
        name: 'Chaosborne Curse (Su)',
        description:
          'Touch attack that transmits the Chaosborne template to chaotic creatures. The victim must succeed on a Will save or gain the template and fall unconscious for 1d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Gaze of Discord (Ex)',
        description:
          'Chaotic creatures within 30 feet become dazed for 1 round; lawful creatures become confused. Will save negates. This is a mind-affecting compulsion gaze effect.',
      },
      {
        scalingType: 'flat',
        name: 'Spell Vulnerability (Ex)',
        description:
          'The template is permanently removed by remove curse, break enchantment (within one week of acquisition), or dispel chaos.',
      },
    ],
    spellLikeAbilities: [
      {
        spellName: 'protection from law',
        frequency: 'constant',
        casterLevelFormula: 'equal to HD',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary (2014)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 64. Cheitan (CR +varies) [3pp]
  {
    id: 'cheitan',
    name: 'Cheitan',
    description:
      'A fiery outsider template applied to humanoids and monstrous humanoids, granting fire resistance, heat attacks, flight, and fire-based spell-like abilities that scale with Hit Dice.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 1,
        label: '1-4 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'CR +1 Tier Abilities',
            description:
              'Gains: fire resistance 20, darkvision 60 ft., heat (Ex), 2 slam attacks, fly 40 ft. (perfect), detect magic 3/day (Sp), produce flame 3/day (Sp).',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 2,
        label: '5-10 HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'CR +2 Tier Abilities',
            description:
              'Adds pyrotechnics at 5-6 HD, wall of fire at 7-8 HD, and scorching ray (1 ray, 3/day) at 9-10 HD.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 3,
        label: '11+ HD (CR +3)',
        features: [
          {
            scalingType: 'flat',
            name: 'CR +3 Tier Abilities',
            description: 'Adds gaseous form at 11-12 HD; plane shift (limited planes) at 13+ HD.',
          },
        ],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'creature_type',
        allowed: ['humanoid', 'monstrous humanoid', 'outsider'],
      },
      { type: 'special', description: 'Cannot be an efreeti.' },
    ],
    typeChange: 'outsider (native)',
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 3,
    resistances: [{ energyType: 'fire', value: 20 }],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description:
          'Gains darkvision to a range of 60 feet, or retains base creature darkvision if greater.',
      },
      {
        scalingType: 'flat',
        name: 'Fly Speed',
        description:
          'Gains a fly speed of 40 feet with perfect maneuverability (unless base creature has a better fly speed).',
      },
      {
        scalingType: 'flat',
        name: 'Slam Attacks',
        description:
          'Gains two slam attacks if lacking natural attacks. Damage scales by size (1d3 Fine through 4d6 Colossal).',
      },
      {
        scalingType: 'flat',
        name: 'Heat (Ex)',
        description:
          'Deals 1d3 extra fire damage whenever it hits in melee with a natural attack, or each round it maintains a hold while grappling.',
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities (Sp)',
        description:
          'Gains fire-based spell-like abilities based on HD (requires Int or Wis 8+; CL = HD; DCs Cha-based): 1-2 HD detect magic 3/day; 3-4 HD produce flame 3/day; 5-6 HD pyrotechnics; 7-8 HD wall of fire; 9-10 HD scorching ray (1 ray, 3/day); 11-12 HD gaseous form; 13+ HD plane shift (limited planes).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Necromancer Games / Frog God Games',
      publication: 'Tome of Horrors Complete',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 65. Chine Creature (CR +3) [3pp]
  {
    id: 'chine-creature',
    name: 'Chine Creature',
    description:
      'A creature transformed into a modular living construct, losing spellcasting and supernatural abilities but gaining massive physical enhancements, hardness, fast healing, and selectable mechanical utilities.',
    crAdjustment: 3,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    typeChange: 'construct',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote:
      'Gains +4 to STR, DEX, INT, and CHA. Loses Constitution score entirely (construct trait).',
    fastHealing: '1',
    features: [
      {
        scalingType: 'flat',
        name: 'Hardness 20',
        description:
          'Gains Hardness 20 instead of natural armor. Takes half damage from energy attacks before applying hardness. Spells that deal object damage (such as shatter) ignore this hardness. Takes -4 penalty on all saves against spells.',
      },
      {
        scalingType: 'flat',
        name: 'Construct Traits',
        description: 'Gains all standard construct immunities and traits.',
      },
      {
        scalingType: 'flat',
        name: 'Supremely Ungifted',
        description: 'Loses all spells, spell-like abilities, and supernatural abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Propagating Wounds',
        description:
          'Creatures struck by the chine creature must save or contract chine affliction, causing exponential daily damage.',
      },
      {
        scalingType: 'flat',
        name: 'Instant Communication',
        description: 'Can communicate mentally with other chine creatures on the same plane.',
      },
      {
        scalingType: 'flat',
        name: 'Chine Utilities (modular)',
        description:
          'Gains one selectable chine utility per 2 CR points (some cost more). Options include: Amorphous (3 utilities, immunity to precision damage and crits), Blindsense 30 ft. (3 utilities), Ethereal Jaunt (4 utilities), Inhuman Speed +60 ft. (3 utilities), Natural Invisibility (4 utilities), All-Around Vision, Burrow/Climb/Flight, Electrical Charge, Heat (+1d6 fire on touch), Buzzsaw (bleed), Plasma Tool (5-ft line attack), Chosen Task (+8 skill), Scent, Stench, Telescopic Reach, and others.',
      },
      {
        scalingType: 'flat',
        name: 'Chine Natural Attacks',
        description:
          'All natural attacks bypass material DR and hardness below 20. Gains Multiattack as a bonus feat if possessing 3 or more natural attacks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 66. Clockwork Automaton (CR +0) [3pp]
  {
    id: 'clockwork-automaton',
    name: 'Clockwork Automaton',
    description:
      'A creature whose soul has been transplanted into a mechanical clockwork body, retaining its mind and personality but gaining construct traits with unique vulnerabilities.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Base creature must have Intelligence 3 or higher, a definable corporeal body, and a soul capable of free transport.',
      },
    ],
    typeChange: 'construct (retains other aspects)',
    resistances: [
      { energyType: 'cold', value: 5 },
      { energyType: 'fire', value: 5 },
    ],
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'bludgeoning' },
    features: [
      {
        scalingType: 'flat',
        name: 'Reinforced Design (Ex)',
        description:
          'Gains damage reduction 5/bludgeoning and cold/fire resistance 5. Loses natural armor bonuses of the base creature.',
      },
      {
        scalingType: 'flat',
        name: 'Oiled Workings (Ex)',
        description:
          'Grease spell cast on the automaton triggers a haste effect lasting 1d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Mental Vulnerability (Ex)',
        description:
          'Remains vulnerable to mind-affecting spells and morale effects (exception to normal construct immunities).',
      },
      {
        scalingType: 'flat',
        name: 'Spirit Within (Ex)',
        description:
          'Remains vulnerable to soul-affecting spells such as astral projection, clone, magic jar, and soul bind.',
      },
      {
        scalingType: 'flat',
        name: 'Metallic Body (Ex)',
        description:
          'Affected by metal-targeting spells. Rusting grasp causes stagger for 1d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Delicate Joints (Ex)',
        description:
          'Takes 150% damage from acid, or becomes entangled for 1d4 rounds if immune to acid.',
      },
      {
        scalingType: 'flat',
        name: 'Conductive Frame (Ex)',
        description:
          'Takes 150% damage from electricity, or becomes dazed for 1d4 rounds if immune to electricity.',
      },
      {
        scalingType: 'flat',
        name: 'Windup Key (Ex)',
        description:
          'Requires 60 seconds of winding to operate for one day per Hit Die. Cannot function without being wound.',
      },
      {
        scalingType: 'flat',
        name: 'Maintenance (Ex)',
        description: 'Requires monthly maintenance; penalties accrue for neglect.',
      },
      {
        scalingType: 'flat',
        name: 'Integration (Ex)',
        description: 'Can permanently incorporate wearable magical items into its body.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown (J. Augis, B. Nace, R. Veneklase)',
      publication: 'Clockwork Automaton (2011)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 67. Clockwork Construct (CR +0) — Drop Dead Studios
  {
    id: 'clockwork-construct',
    name: 'Clockwork Construct',
    description:
      'A construct that gains the clockwork subtype, granting it winding mechanics, electrical vulnerability, and enhanced reflexes.',
    crAdjustment: 0,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    prerequisites: [{ type: 'creature_type', allowed: ['construct'] }],
    subtypeGains: ['clockwork'],
    features: [
      {
        scalingType: 'flat',
        name: 'Winding',
        description:
          'A fully wound clockwork can remain active for 1 day per Hit Die. Shorter or longer durations are possible. Mechanoids with this template instead require an attached battery depleted every 24 hours.',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerable to Electricity',
        description: 'Takes 150% damage from electrical attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Swift Reactions',
        description:
          'Gains Improved Initiative and Lightning Reflexes as bonus feats. Gains a +2 dodge bonus to AC.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Drop Dead Studios',
      publication: 'Ultimate Engineering (2024)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 68. Clockwork Construct (CR +0) — Paizo
  {
    id: 'clockwork-construct-2',
    name: 'Clockwork Construct',
    description:
      'The official Paizo clockwork construct template, granting the clockwork subtype with winding mechanics, electrical vulnerability, and bonus feats for enhanced reactions.',
    crAdjustment: 0,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    subtypeGains: ['clockwork'],
    features: [
      {
        scalingType: 'flat',
        name: 'Winding',
        description:
          'A fully wound clockwork can remain active for 1 day per HD, but shorter or longer durations are possible. Requires a special key to function.',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerable to Electricity',
        description: 'Takes 150% damage from electrical attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Swift Reactions',
        description:
          'Gains Improved Initiative and Lightning Reflexes as bonus feats. Gains a +2 dodge bonus to AC.',
      },
      {
        scalingType: 'flat',
        name: 'Difficult to Create',
        description: 'Creation time and gp cost are increased by 50%.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: The Inner Sea World Guide',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 69. Clockwork Creature (CR +1; 3PP) — Green Ronin Advanced Bestiary
  {
    id: 'clockwork-creature',
    name: 'Clockwork Creature',
    description:
      'A creature rebuilt as a clockwork construct by a skilled artificer, losing its original nature but gaining construct resilience, scaled damage reduction, and spell resistance.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'construct',
    subtypeGains: ['clockwork'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: -6 },
      { ability: 'WIS', change: -2, minimum: 1 },
      { ability: 'CHA', change: -6, minimum: 1 },
    ],
    abilityScoreChangeNote:
      'Loses Constitution score (construct). INT -6 (mindless if reduced to 0 or below). WIS minimum 1. CHA minimum 1. Natural armor increases by 1 per 2 racial Hit Dice.',
    srFormula: 'CR + 5 (maximum 25)',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 5, bypassedBy: 'adamantine' },
        { minHD: 6, maxHD: 20, value: 10, bypassedBy: 'adamantine' },
        { minHD: 21, value: 15, bypassedBy: 'adamantine' },
      ],
    },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'fire', value: 10 },
      { energyType: 'sonic', value: 10 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Metal Body',
        description:
          'Counts as a ferrous creature for purposes of rusting grasp and similar effects.',
      },
      {
        scalingType: 'flat',
        name: 'Created Mind',
        description:
          'Obeys its creator or designated surrogate. Intelligent clockwork creatures may attempt a Will save (DC 20) to disobey a command; a second save (DC 15) applies if the command would cause direct harm.',
      },
      {
        scalingType: 'flat',
        name: 'Creator Bond',
        description:
          'Detects the location of its creator within 100 feet and gains a +10 circumstance bonus against Bluff and Disguise checks impersonating the creator.',
      },
      {
        scalingType: 'flat',
        name: 'Clockwork Slam',
        description:
          'Gains a slam attack if the base creature lacks natural attacks. Damage scales by size. Gains Dodge, Improved Initiative, and Lightning Reflexes as racial bonus feats. Gains +5 racial bonus on Craft (clockwork) and Disable Device. Takes -5 penalty on Stealth checks.',
      },
      {
        scalingType: 'flat',
        name: 'Construct Conversion',
        description:
          'All racial HD convert to d10s. Gains construct bonus HP. Loses CON-based bonus HP. Loses electricity immunity unless base creature had it; gains vulnerability to electricity instead.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary (2014)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 70. Clockwork Creature (CR +1; 3PP) — Tome of Horrors Complete
  {
    id: 'clockwork-creature-tohc',
    name: 'Clockwork Creature (ToHC)',
    description:
      'A creature rebuilt as a clockwork construct per the Tome of Horrors Complete rules, losing class levels and spellcasting but gaining construct resilience with adamantine damage reduction.',
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'construct',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -2 },
    ],
    abilityScoreChangeNote:
      'Wisdom is set to 11 and Charisma to 1 regardless of base values. Loses Constitution score. All HD become d10s; class-level HD are dropped.',
    naturalArmorChange: 2,
    srFormula: 'CR + 5 (maximum 25)',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 10, value: 5, bypassedBy: 'adamantine' },
        { minHD: 11, maxHD: 20, value: 10, bypassedBy: 'adamantine' },
        { minHD: 21, value: 15, bypassedBy: 'adamantine' },
      ],
    },
    features: [
      {
        scalingType: 'flat',
        name: 'Construct Conversion',
        description:
          'All HD become d10s; class-level HD are dropped. Gains bonus HP based on size (Small 10, Medium 20, Large 30, Huge 40, Gargantuan 60, Colossal 80). Retains natural attacks; gains two slams if base creature had none. Retains extraordinary attacks; loses all spell-like, spellcasting, and supernatural abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Command Protocols',
        description:
          'Understands Common for accepting orders. Continues last command if creator dies. Has a 50% chance to become free-willed or cease functioning if unable to complete its final order.',
      },
      {
        scalingType: 'flat',
        name: 'Construct Traits',
        description:
          'Gains all standard construct immunities. Loses all feats (except bonus feats), skill points (retains racial skill bonuses), languages, defensive abilities, and spellcasting.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Necromancer Games / Frog God Games',
      publication: 'Tome of Horrors Complete',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 71. Cold Creature (CR +2) [3pp]
  {
    id: 'cold-creature',
    name: 'Cold Creature',
    description:
      'An outsider infused with elemental cold, gaining an icy aura, freezing attacks, and the ability to transform foes and liquids to ice.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'outsider',
    subtypeGains: ['cold', 'elemental', 'extraplanar', 'incorporeal'],
    subtypeRemoves: ['fire'],
    immunities: ['cold'],
    features: [
      {
        scalingType: 'flat',
        name: 'Cold Aura (Su)',
        description:
          'Emits a 10-foot radius aura of supernatural cold dealing 1d6 cold damage plus an additional 1d6 per 5 racial HD. Cannot be suppressed.',
      },
      {
        scalingType: 'flat',
        name: 'Cold Body (Ex)',
        description: 'Creatures that strike the cold creature in melee take 1d6 cold damage.',
      },
      {
        scalingType: 'flat',
        name: 'Cold Walk (Ex)',
        description:
          'Treats snow and ice as normal terrain; suffers no movement penalties on such surfaces.',
      },
      {
        scalingType: 'flat',
        name: 'Cold Spellcasting (Su)',
        description:
          'Casts cold descriptor spells at +1 caster level. Can add the cold descriptor to damaging spells (half damage becomes cold). Cannot cast fire descriptor spells.',
      },
      {
        scalingType: 'flat',
        name: 'Freezing Blows (Ex)',
        description:
          'Attacks deal extra cold damage based on the slam damage for a creature one size category larger than the cold creature.',
      },
      {
        scalingType: 'flat',
        name: 'Freezing Embrace (Su)',
        description:
          "Once per day plus once per 5 racial HD. Can turn creatures to ice via Fortitude save. Larger creatures take 1d6 cold damage multiplied by the cold creature's total Hit Dice.",
      },
      {
        scalingType: 'flat',
        name: 'Freezing Touch (Ex)',
        description:
          'Freezes non-creature liquids to a 1-inch depth in a 10-foot radius, expanding 1 inch in depth and 10 feet in radius per round of continued contact.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary (2014)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 72. Collective Creature (CR +1) [3pp]
  {
    id: 'collective-creature',
    name: 'Collective Creature',
    description:
      'A swarm of animals or vermin that coheres into a single magical beast body, gaining damage reduction, engulf, and ranged sling attacks while remaining vulnerable to area effects.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal', 'vermin'] },
      { type: 'subtype', required: ['swarm'] },
    ],
    typeChange: 'magical beast',
    subtypeRemoves: ['swarm'],
    naturalArmorChange: 4,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 5, bypassedBy: 'bludgeoning' },
        { minHD: 6, maxHD: 11, value: 10, bypassedBy: 'bludgeoning' },
        { minHD: 12, value: 15, bypassedBy: 'bludgeoning' },
      ],
    },
    features: [
      {
        scalingType: 'flat',
        name: 'One from Many (Ex)',
        description:
          'Not subject to critical hits or flanking. Reducing the collective creature to 0 HP breaks it apart into its component creatures. Never staggered or dying. Can voluntarily disperse at will.',
      },
      {
        scalingType: 'flat',
        name: 'Collective Traits (Ex)',
        description:
          'Can move through squares occupied by enemies without impediment, though this provokes attacks of opportunity. Can move through cracks large enough for component creatures. Cannot be tripped.',
      },
      {
        scalingType: 'flat',
        name: 'Immune to Single-Target Effects',
        description:
          'Immune to single-target spells and effects targeting a specific number of creatures (except mind-affecting effects). Taking nonlethal damage to 0 HP causes disorganization.',
      },
      {
        scalingType: 'flat',
        name: 'Weakness: Area Effects',
        description: 'Takes 50% additional damage from area effects and splash weapons.',
      },
      {
        scalingType: 'flat',
        name: 'Engulf (Ex)',
        description:
          'Can occupy the same squares as fitting creatures as a standard action. Opponents must make Reflex saves or become grappled within the collective body. Engulfed creatures take slam damage and special attack effects each round.',
      },
      {
        scalingType: 'flat',
        name: 'Many from One (Ex)',
        description:
          'Can sling a clump at a target within 10 feet as a ranged touch attack (1d6 damage, 10-foot range increment). The collective takes 1 point of damage per use.',
      },
      {
        scalingType: 'flat',
        name: 'Swarming Body (Ex)',
        description:
          'Unarmed attackers and natural weapon users take 1d4 (1d6 Large, 1d8 Huge) damage. Inherits disease or poison from the base swarm.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Necromancer Games / Frog God Games',
      publication: 'Tome of Horrors Complete',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 73. Colliatur Monstrosity (CR +2 to CR +7) [3pp]
  {
    id: 'colliatur-monstrosity',
    name: 'Colliatur Monstrosity',
    description:
      'A living creature massively enlarged by colliatur crystal growth into a Colossal monstrosity, with enormous ability score bonuses, soul-devouring, and a catastrophic detonation at death.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        crValue: 7,
        label: 'Small base (CR +7)',
        features: [
          {
            scalingType: 'flat',
            name: 'Small Base Bonuses',
            description: 'CR +7; Str +36, Dex -8, Con +16, Int -4; natural armor +20.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 1,
        crValue: 5,
        label: 'Medium base (CR +5)',
        features: [
          {
            scalingType: 'flat',
            name: 'Medium Base Bonuses',
            description: 'CR +5; Str +28, Dex -6, Con +12, Int -4; natural armor +16.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 1,
        crValue: 4,
        label: 'Large base (CR +4)',
        features: [
          {
            scalingType: 'flat',
            name: 'Large Base Bonuses',
            description: 'CR +4; Str +20, Dex -4, Con +10, Int -4; natural armor +14.',
          },
        ],
      },
      {
        tierIndex: 3,
        minHD: 1,
        crValue: 3,
        label: 'Huge base (CR +3)',
        features: [
          {
            scalingType: 'flat',
            name: 'Huge Base Bonuses',
            description: 'CR +3; Str +16, Dex -2, Con +8, Int -4; natural armor +12.',
          },
        ],
      },
      {
        tierIndex: 4,
        minHD: 1,
        crValue: 2,
        label: 'Gargantuan base (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Gargantuan Base Bonuses',
            description: 'CR +2; Str +8, Con +6, Int -4; natural armor +10.',
          },
        ],
      },
    ],
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Corporeal living creature, Small or larger.' },
    ],
    typeChange: 'augmented (retains base type)',
    subtypeGains: ['augmented'],
    sizeChange: 4,
    abilityScoreChangeNote:
      'Varies by base size. Small: Str+36/Dex-8/Con+16/Int-4; Medium: Str+28/Dex-6/Con+12/Int-4; Large: Str+20/Dex-4/Con+10/Int-4; Huge: Str+16/Dex-2/Con+8/Int-4; Gargantuan: Str+8/Con+6/Int-4.',
    damageReduction: { scalingType: 'flat', value: 7, bypassedBy: '—' },
    features: [
      {
        scalingType: 'flat',
        name: 'Colossal Size',
        description: 'Becomes Colossal size with 30 ft. space and +20 ft. bonus reach.',
      },
      {
        scalingType: 'flat',
        name: 'Mighty (Ex)',
        description: 'Double carrying capacity.',
      },
      {
        scalingType: 'flat',
        name: 'Magnitude (Su)',
        description:
          'Movement causes ground quakes that knock creatures prone (Reflex DC 10 + HD). Can also perform a 60 ft. radius stomp as a standard action.',
      },
      {
        scalingType: 'flat',
        name: 'Crystalline Armageddon (Su)',
        description:
          'At 0 HP, all creatures within 100 ft. take 1d8 x HD nonlethal damage (Reflex save halves).',
      },
      {
        scalingType: 'flat',
        name: 'Soul Destruction (Su)',
        description:
          'Creatures that die within 100 ft. forfeit their souls unless they succeed at a Will save. When HD x 10 souls are absorbed, the monstrosity gains fly 60 ft. (clumsy) and starflight.',
      },
      {
        scalingType: 'flat',
        name: 'Trample and Swallow (Ex)',
        description:
          'Gains standard trample ability. Creatures with a bite attack also gain fast swallow, grab, and swallow whole.',
      },
    ],
    spellLikeAbilities: [
      { spellName: 'alien surge', frequency: '2/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'greater alien surge', frequency: '2/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'crystal explosion', frequency: '2/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'crystal expulsion', frequency: '2/day', casterLevelFormula: 'equal to HD' },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'AAW Games',
      publication: 'Aventyr Bestiary (2017)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 74. Commando Construct (CR varies)
  {
    id: 'commando-construct',
    name: 'Commando Construct',
    description:
      'A construct upgraded with enhanced combat programming, gaining increased Strength, Dexterity, natural armor, d12 HD, bonus combat feats, and selectable offensive and tactical abilities.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 9,
        crValue: 1,
        label: '1-9 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: '1-9 HD: 1 special attack option',
            description: 'Selects 1 option from the special attack list.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 10,
        crValue: 2,
        label: '10+ HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: '10+ HD: 2-3 special attack options',
            description:
              'Selects 2 options at 9-12 HD or 3 options at 13+ HD from the special attack list.',
          },
        ],
      },
    ],
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['construct'] }],
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
    ],
    naturalArmorChange: 4,
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Hit Dice',
        description:
          'All Hit Dice become d12s. Hit points increase to 1.5x the normal construct bonus for its size.',
      },
      {
        scalingType: 'flat',
        name: 'Tactical Awareness (Ex)',
        description:
          'Gains a +2 initiative bonus plus +1 per 5 HD (maximum +6). Never unaware of combat; always acts in the surprise round.',
      },
      {
        scalingType: 'flat',
        name: 'Energized Alacrity (Su)',
        description:
          'Once per minute as a swift action, gains a +30-foot bonus to all speeds for 1 round with the option to make a full attack at the end of a move.',
      },
      {
        scalingType: 'flat',
        name: 'Special Attack Options (choose per HD)',
        description:
          'Selectable options: Brutal Attacks (bonus damage equal to highest-damage attack + 2x Str modifier); Energy Attacks (1d6 energy damage on melee); Extra Attack (bonus attack at highest BAB); Knockdown Strike (trip on hit); Knockout Strike (full attack for unconsciousness, Fortitude 10+half HD+Str modifier); Precision (roll twice to confirm crits); Reach (+5 ft. reach); Retaliatory Strike (AoO when enemy attacks adjacent ally); Sneak Attack (rogue-style, scales with HD); Sundering Blows (sunder on critical hit).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Combat Feats',
        description:
          'Gains 1 bonus combat feat at creation plus 1 additional combat feat per 4 HD (maximum 10 total).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Construct Handbook',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 75. Constructed Creatures (CR +1) [3pp]
  {
    id: 'constructed-creatures',
    name: 'Constructed Creatures',
    description:
      'A formerly living creature rebuilt as a construct, losing its original biological nature and gaining standard construct immunities while retaining extraordinary abilities with STR/DEX-based saves.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'creature_type',
        allowed: [
          'aberration',
          'animal',
          'dragon',
          'humanoid',
          'magical beast',
          'monstrous humanoid',
          'vermin',
        ],
      },
    ],
    typeChange: 'construct',
    subtypeRemoves: ['all except swarm'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -2 },
    ],
    abilityScoreChangeNote:
      'Loses Constitution score entirely. Intelligence set to 0 (mindless). Wisdom set to 11. Charisma set to 1.',
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Construct Conversion',
        description:
          'All racial HD convert to d10s. Loses CON-based bonus HP; gains size-based construct HP. Base attack bonus equals Hit Dice (fast progression). Saving throws recalculated.',
      },
      {
        scalingType: 'flat',
        name: 'Construct Traits',
        description:
          'Gains all standard construct immunities. Damage reduction scales with Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Retained Attacks',
        description:
          'Retains natural attacks and weapon proficiencies. Humanoid constructs without natural attacks gain a slam attack. Retains extraordinary abilities without saving throws and extraordinary abilities with STR/DEX-based DCs.',
      },
      {
        scalingType: 'flat',
        name: 'Lost Abilities',
        description:
          'Loses all supernatural special attacks, spell-like abilities, and extraordinary attacks with CON-based save DCs (except swarm distraction).',
      },
      {
        scalingType: 'flat',
        name: 'Simplified Skills and Feats',
        description:
          'Loses all skill points and feats except those that improve attacks or innate abilities (e.g., Ability Focus, Improved Natural Attack, Multiattack).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rogue Genius Games',
      publication: 'The Construct Companion (2015)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },
];
