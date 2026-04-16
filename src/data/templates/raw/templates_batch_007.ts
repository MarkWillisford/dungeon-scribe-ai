import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_007: TemplateDefinition[] = [
  // 151. Embryonic Creature (CR varies)
  {
    id: 'embryonic-creature',
    name: 'Embryonic Creature',
    description:
      'A parasitic mythos creature that implants itself in a host, drastically reducing the host\'s capabilities while feeding on its neural energy. The embryonic form retains a fraction of the base creature\'s power and can mentally control its host.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 8,
        crValue: 0,
        label: 'CR 8 or below (CR becomes 1/2 base CR, minimum 1)',
        features: [],
      },
      {
        tierIndex: 1,
        minHD: 9,
        crValue: 0,
        label: 'CR 9 or above (CR becomes 1 + 1/3 base CR)',
        features: [],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'aberration',
    typeChangeNote: 'Changes to aberration unless base creature is already an ooze',
    subtypeGains: ['mythos'],
    sizeChange: -2,
    abilityScoreChanges: [
      { ability: 'STR', change: -16, minimum: 1 },
      { ability: 'CON', change: -4 },
      { ability: 'INT', change: -4 },
      { ability: 'WIS', change: -4 },
      { ability: 'CHA', change: -4 },
    ],
    abilityScoreChangeNote:
      'Size reduced to Tiny (if normally Large or larger) or Diminutive (if normally Medium or smaller). Natural armor halved (round down). Halved damage reduction. Spell resistance reduced by 10. Elemental resistances reduced by 10.',
    features: [
      {
        scalingType: 'flat',
        name: 'Attach (Ex)',
        description:
          'Full-round touch attack to attach to a host. The target forgets the attachment via a memory lapse effect.',
      },
      {
        scalingType: 'flat',
        name: 'Neural Implant (Ex)',
        description:
          'While attached, the embryonic creature continuously detects the host\'s thoughts and deals 1 point of ability damage (randomly chosen ability) per 24 hours. The host takes a -2 penalty on saves against emotion, fear, confusion, daze, feebleminded, and insane effects.',
      },
      {
        scalingType: 'flat',
        name: 'Undetectable Parasite (Su)',
        description:
          'The embryonic creature benefits from continuous nondetection while attached to its host (DC 15 caster level check to penetrate).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Mythos Monsters (PF1)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 152. Energized Golem (CR +2)
  {
    id: 'energized-golem',
    name: 'Energized Golem',
    description:
      'A golem infused with a bound elemental spirit of air, earth, fire, or water, granting it enhanced physical prowess, an elemental aura, and the ability to discharge bursts of elemental energy.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4, condition: 'Earth or water elemental spirit; +8 STR if base creature has 10+ HD' },
      { ability: 'DEX', change: 2, condition: 'Earth or water elemental spirit; +4 DEX if base creature has 10+ HD' },
    ],
    abilityScoreChangeNote:
      'Air/fire elemental spirits grant +2 STR and +4 DEX (or +8/+4 if 10+ HD). Earth/water spirits grant +4 STR and +2 DEX (or +8/+4 if 10+ HD).',
    naturalArmorChange: 3,
    immunities: ['energy type matching elemental spirit (electricity for air, acid for earth, fire for fire, cold for water)'],
    features: [
      {
        scalingType: 'flat',
        name: 'Elemental Overcharge (Su)',
        description:
          'Natural attacks deal an additional 1d6 energy damage per 6 HD (rounded down). The energy type matches the bound elemental spirit.',
      },
      {
        scalingType: 'flat',
        name: 'Elemental Aura (Su)',
        description:
          'Emanates a damaging aura in a 5-foot radius (plus 5 feet per 10 HD), dealing 1d6 energy damage plus additional effects depending on aura type: Swirling Winds (air), Caustic Mist (earth), Immolation (fire), or Blizzard (water).',
      },
      {
        scalingType: 'flat',
        name: 'Energy Discharge (Su)',
        description:
          'Once per hour, the golem releases a burst of elemental energy in a 20-foot radius dealing 1d8 damage per 2 HD. A secondary save is required to avoid additional effects depending on the elemental type.',
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

  // 153. Enlightened Construct (CR varies)
  {
    id: 'enlightened-construct',
    name: 'Enlightened Construct',
    description:
      'A construct granted true sentience via powerful awakening magic, gaining Intelligence and Charisma, telepathy, mind-affecting psionic abilities, and a phrenic stone that stores its awakened intellect.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 1,
        label: '4 or fewer HD: +1 CR',
        features: [],
      },
      {
        tierIndex: 1,
        minHD: 5,
        maxHD: 10,
        crValue: 2,
        label: '5-10 HD: +2 CR',
        features: [],
      },
      {
        tierIndex: 2,
        minHD: 11,
        crValue: 3,
        label: '11+ HD: +3 CR',
        features: [],
      },
    ],
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      {
        ability: 'INT',
        change: 6,
        condition: 'If base Int is 10 or higher; if 9 or lower, set to 2d6+4 (treat as delta)',
      },
      { ability: 'CHA', change: 7, condition: 'Increase by 2d6 (average 7)' },
    ],
    abilityScoreChangeNote:
      'If base Intelligence is 9 or lower, roll 2d6+4 for new score. Charisma increases by 2d6.',
    features: [
      {
        scalingType: 'flat',
        name: 'Artificial Soul (Ex)',
        description:
          'The construct gains a personality and true sentience. Unlike standard constructs, it is not immune to necromancy despite its construct type, and is vulnerable to necromantic effects.',
      },
      {
        scalingType: 'flat',
        name: 'Phrenic Stone (Ex)',
        description:
          'A crystalline stone stores the construct\'s awakened intellect (Hardness 10, 20 hit points, break DC 30). If recovered intact, the phrenic stone can be reused to create a new enlightened construct body.',
      },
      {
        scalingType: 'flat',
        name: 'Telepathy (Su)',
        description: 'The construct can communicate telepathically with any creature within 100 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Lifesense (Su)',
        description: 'The construct notices and locates living creatures within 60 feet as if it possessed blindsight.',
      },
      {
        scalingType: 'flat',
        name: 'Mind Thrust (Sp)',
        description:
          'Uses per day equal to 2 + Intelligence modifier. Scales by HD: HD 1-2 Mind thrust I, HD 3-4 Mind thrust II, HD 5-7 Mind thrust III, HD 8-10 Mind thrust IV, HD 11-15 Mind thrust V, HD 16+ Mind thrust VI.',
      },
      {
        scalingType: 'flat',
        name: 'Psionic Spell-Like Abilities (Sp)',
        description:
          'Gains progressive psionic spell-like abilities by HD: HD 1-2 mindlink 3/day, HD 3-4 mental block, HD 5-6 brain lock, HD 7-8 telekinesis 3/day, HD 9-10 mind fog, HD 11-12 psychic crush, HD 13-14 recall agony, HD 15-16 antimagic field, HD 17-18 moment of prescience, HD 19-20 dominate monster. Caster level equals HD.',
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

  // 154. Enraged (CR +0) [3pp]
  {
    id: 'enraged',
    name: 'Enraged',
    description:
      'A simple template representing an animal driven into an uncontrollable rage, attacking with greater ferocity than normal. The condition can be ended by spells such as calm animals.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [{ type: 'creature_type', allowed: ['animal'] }],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'DEX', change: -4 },
      { ability: 'WIS', change: -4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Melee Prowess',
        description: '+2 bonus to all attack and damage rolls.',
      },
      {
        scalingType: 'flat',
        name: 'Increased Durability',
        description: '+2 hit points per Hit Die. +2 bonus to CMB and Fortitude saves.',
      },
      {
        scalingType: 'flat',
        name: 'Reduced Defenses',
        description: '-2 penalty to AC, Reflex saves, and Will saves.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Jon Brazer Enterprises',
      publication: 'Book of Beasts: Monsters of the River Nations',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 155. Entothrope (CR +1)
  {
    id: 'entothrope',
    name: 'Entothrope',
    description:
      'An insectile lycanthrope that can shift between humanoid, hybrid, and full vermin forms. Natural entothropes are born with the curse; afflicted entothropes contract it via a bite or sting.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    subtypeGains: ['shapechanger'],
    abilityScoreChanges: [
      { ability: 'INT', change: -2 },
      { ability: 'WIS', change: 2 },
      {
        ability: 'DEX',
        change: 2,
        condition: 'hybrid and vermin forms only',
      },
      {
        ability: 'CON',
        change: 2,
        condition: 'hybrid and vermin forms only',
      },
    ],
    abilityScoreChangeNote:
      'In hybrid and vermin forms, ability scores become whichever is higher between base creature or base vermin for each stat.',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        {
          minHD: 1,
          value: 5,
          bypassedBy: 'silver (afflicted entothrope, hybrid/vermin forms only)',
        },
      ],
    },
    features: [
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          'Can assume three forms: humanoid, hybrid, and vermin. Natural entothropes can change shape as a swift action; afflicted entothropes change as a standard action. Natural entothropes use DR 10/silver in hybrid/vermin forms; afflicted use DR 5/silver.',
      },
      {
        scalingType: 'flat',
        name: 'Curse of Entothropy (Su)',
        description:
          'Bite or sting attack in hybrid or vermin form infects the target with entothropy (DC 15 Fortitude save negates).',
      },
      {
        scalingType: 'flat',
        name: 'Entothropic Empathy (Ex)',
        description:
          'Can communicate with vermin related to the entothrope\'s base vermin form, with a +4 bonus on wild empathy checks.',
      },
      {
        scalingType: 'flat',
        name: 'Insect Mind (Ex)',
        description:
          '+4 bonus on saving throws against mind-affecting effects in humanoid and hybrid forms.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 6',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 156. Envious Creature (CR +2) [3pp]
  {
    id: 'envious-creature',
    name: 'Envious Creature',
    description:
      'A creature corrupted by dark powers of envy and malice, gaining supernatural shapeshifting abilities tied to its covetous desire for what others possess. Its defensive abilities function differently when targeting objects of its envy.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 9, value: 5, bypassedBy: 'special (see Driven by Envy)' },
        { minHD: 10, maxHD: 14, value: 10, bypassedBy: 'special (see Driven by Envy)' },
        { minHD: 15, value: 15, bypassedBy: 'special (see Driven by Envy)' },
      ],
    },
    immunities: ['mind-affecting effects'],
    srFormula: '12 + CR',
    features: [
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          'Once the envious creature fixates on a desired object, it can shapechange at will into the holder of that object. Its green eyes remain visible in any assumed form. Speaking the creature\'s true name forces it to revert to its natural form for 24 hours.',
      },
      {
        scalingType: 'flat',
        name: 'Covetous Strike (Su)',
        description:
          'Targets failing a Will save (DC 10 + 1/2 HD + Cha modifier) are compelled to steal nearby objects worth 500 gp or more. This is a compulsion effect; protection from evil does not prevent the initial establishment of the compulsion.',
      },
      {
        scalingType: 'flat',
        name: 'Cursed Relationships (Su)',
        description:
          'Once per day, the envious creature curses social relationships within 30 feet, shifting all NPC attitude toward non-envied creatures two steps negatively.',
      },
      {
        scalingType: 'flat',
        name: 'Curse of Envy (Su)',
        description:
          'Once per day, impose a penalty to the target\'s highest ability score equal to 1d6+1 per HD (maximum 1d6+20).',
      },
      {
        scalingType: 'flat',
        name: 'Driven by Envy (Ex)',
        description:
          'DR and resistances do not apply against attacks from the creature it envies. Attacks, spells, and abilities from the envied target bypass the envious creature\'s DR and energy resistance.',
      },
      {
        scalingType: 'flat',
        name: 'Spiteful Strike (Su)',
        description:
          'Once per day, the envious creature\'s attacks against its envy target automatically threaten critical hits.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 157. Erudite Strangler Creature (CR +2) [3pp]
  {
    id: 'erudite-strangler-creature',
    name: 'Erudite Strangler Creature',
    description:
      'An intelligent predator that disguises its savage nature behind a veneer of civilization and erudition, using dark knowledge to stun opponents before strangling them with prehensile limbs.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 10 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Cloak of Madness (Ex)',
        description:
          '+8 bonus on saving throws against mind-affecting compulsion effects.',
      },
      {
        scalingType: 'flat',
        name: 'Genteel Veneer (Su)',
        description:
          'A constant aura makes the creature appear completely civilized, granting undetectable alignment (creatures with fewer than 15 HD) or mind blank (15+ HD). This effect can be restored as a free action if dispelled.',
      },
      {
        scalingType: 'flat',
        name: 'Strangle Attack (Ex)',
        description:
          'Gains the strangle special attack and related grappling focus. Also gains the Improved Grapple feat (or Greater Grapple if already possessing Improved Grapple) and the Deep Study feat.',
      },
      {
        scalingType: 'flat',
        name: 'Stunning Knowledge (Su)',
        description:
          'Once per opponent per combat, the erudite strangler creature can speak a dark truth as a standard action, forcing a Will save (DC 10 + 1/2 HD + Cha modifier) or the target is stunned for 1 round. Protection from evil does not prevent this.',
      },
      {
        scalingType: 'flat',
        name: 'Insight Bonus to AC (Ex)',
        description:
          '+2 insight bonus to AC. Any existing shield bonus to AC is converted to additional insight bonus.',
      },
    ],
    spellLikeAbilities: [
      {
        spellName: 'black tentacles',
        frequency: '3/day',
        casterLevelFormula: 'equal to HD (minimum 7)',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 158. Eruphyte Creature (CR +1)
  {
    id: 'eruphyte-creature',
    name: 'Eruphyte Creature',
    description:
      'A plant creature whose neurological structure has been altered by an eruphyte parasite, granting telepathy, bardic knowledge, and a psychic thoughtspear attack.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [{ type: 'creature_type', allowed: ['plant'] }],
    abilityScoreChanges: [{ ability: 'INT', change: 6 }],
    features: [
      {
        scalingType: 'flat',
        name: 'Telepathy (Su)',
        description: 'Can communicate telepathically with any creature within 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Bardic Knowledge (Ex)',
        description:
          'Functions as the bardic knowledge ability with an effective bard level equal to half its Hit Dice (rounded down).',
      },
      {
        scalingType: 'flat',
        name: 'Thoughtsense (Su)',
        description:
          'Notices and locates living, conscious creatures within 60 feet as if it possessed the blindsight ability. This sense is defeated by nondetection and mind blank.',
      },
      {
        scalingType: 'flat',
        name: 'Thoughtspear (Su)',
        description:
          'Once per hour as a standard action, the eruphyte creature fires a psychic bolt at a target within 120 feet, dealing 1d8 damage per 2 Hit Dice (minimum 1d8). Targets also cannot attempt Knowledge checks for 1 minute. A Will save (DC 10 + 1/2 HD + Int modifier) halves the damage and negates the skill disruption. This is a mind-affecting effect.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Adventure Path #142: Gardens of Gallowspire',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 159. Eternal (CR +2) [3pp]
  {
    id: 'eternal',
    name: 'Eternal',
    description:
      'A simple template representing an immortal creature that cannot be permanently slain. Upon destruction, it returns to life and full health 2d6 minutes later. Overcoming an eternal requires divine intervention or exploiting a specific weakness.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    immunities: ['aging', 'hunger', 'sleep', 'breathing requirements'],
    features: [
      {
        scalingType: 'flat',
        name: 'Eternal (Su)',
        description:
          'The creature cannot be permanently killed. Upon destruction, it returns to life and normal well-being 2d6 minutes later (even if disintegrated), as if subject to true resurrection and heal. If the body\'s location becomes hazardous at the moment of revival, the creature teleports to the closest safe space. The eternal cannot gain levels or Hit Dice; it is unable to grow or change. Overcoming the eternal requires deity intervention or exploiting a specific weakness (material, conceptual, or combination thereof).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Super Genius Games',
      publication: 'The Genius Guide To: Simple Monster Templates',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 160. Exoskeleton (CR varies)
  {
    id: 'exoskeleton',
    name: 'Exoskeleton',
    description:
      'An undead shell created from the discarded exoskeleton or carapace of a creature via animate dead. The hollow shell retains the base creature\'s form but is animated by necromantic energy rather than life.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    typeChangeNote: 'Retains base creature subtypes except alignment and kind subtypes; does not gain the augmented subtype',
    subtypeRemoves: ['alignment subtypes', 'kind subtypes'],
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'WIS', change: 0, condition: 'Wisdom becomes 10' },
      { ability: 'CHA', change: 0, condition: 'Charisma becomes 10' },
    ],
    abilityScoreChangeNote:
      'Constitution becomes nonexistent (undead). Intelligence becomes nonexistent. Wisdom changes to 10. Charisma changes to 10.',
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'bludgeoning' },
    features: [
      {
        scalingType: 'flat',
        name: 'Natural Armor by Size',
        description:
          'Natural armor bonus based on size: Tiny or smaller +0, Small +1, Medium +2, Large +4, Huge +6, Gargantuan +9, Colossal +11.',
      },
      {
        scalingType: 'flat',
        name: 'Burst (Ex)',
        description:
          'When destroyed, the exoskeleton releases a cloud of dusty remains. All creatures adjacent to the exoskeleton must succeed at a Fortitude save (DC 10 + 1/2 HD + Charisma modifier) or become staggered for 1 round. Creatures adjacent to an exoskeleton with 10 or more Hit Dice are nauseated for 1 round instead.',
      },
      {
        scalingType: 'flat',
        name: 'Undead Traits',
        description:
          'Gains Toughness as a bonus feat. Gains a slam attack if the base creature lacks natural weapons. Base attack bonus equals 3/4 Hit Dice. Loses all skill ranks and feats. Loses attacks relying on living biology (such as poison).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 6',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 161. Eye King (CR varies) [3pp]
  {
    id: 'eye-king',
    name: 'Eye King',
    description:
      'A beholder-like aberration created when a creature is transformed by potent aberrant magic, sprouting eyestalks that fire deadly eye rays. Creatures of animal, fey, humanoid, monstrous humanoid, or vermin type become aberrations.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 5,
        crValue: 1,
        label: '5 or fewer HD: CR +1',
        features: [],
      },
      {
        tierIndex: 1,
        minHD: 6,
        maxHD: 11,
        crValue: 2,
        label: '6-11 HD: CR +2',
        features: [],
      },
      {
        tierIndex: 2,
        minHD: 12,
        maxHD: 17,
        crValue: 3,
        label: '12-17 HD: CR +3',
        features: [],
      },
      {
        tierIndex: 3,
        minHD: 18,
        crValue: 4,
        label: '18+ HD: CR +4',
        features: [],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'aberration',
    typeChangeNote:
      'Base creatures with animal, fey, humanoid, monstrous humanoid, or vermin type change to aberration. Other types remain unchanged.',
    abilityScoreChanges: [{ ability: 'CHA', change: 4 }],
    features: [
      {
        scalingType: 'flat',
        name: 'All-Around Vision (Ex)',
        description: 'The eye king cannot be flanked.',
      },
      {
        scalingType: 'flat',
        name: 'Naturally Buoyant (Su)',
        description: 'Constant feather fall effect, allowing the eye king to float and move as if flying.',
      },
      {
        scalingType: 'flat',
        name: 'Flight (Ex)',
        description:
          'Gains a fly speed of at least one-half base speed (minimum 5 ft.) with perfect maneuverability. Fly becomes a class skill.',
      },
      {
        scalingType: 'flat',
        name: 'Central Eye Beam (Su)',
        description:
          'Emanates a cone of 100 feet. The spell-like effect is selected at creation from sorcerer or cleric spells appropriate to the eye king\'s Hit Dice. Save DCs are Charisma-based.',
      },
      {
        scalingType: 'flat',
        name: 'Eye Rays (Su)',
        description:
          'Fires spell-like ability eye rays at will as a free action once per round, with a range of 100 feet. One ray per eyestalk. Effects correspond to sorcerer or cleric spells matching the eye king\'s Hit Dice. Save DCs are Charisma-based.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 162. Failed Prophet (CR +2)
  {
    id: 'failed-prophet',
    name: 'Failed Prophet',
    description:
      'A living creature transformed into a construct-like abomination by failed prophetic power, gaining kineticist-like aurokinetic abilities, extradimensional wealth storage, and powerful claw attacks.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'min_hd', minimum: 5 },
      { type: 'creature_type', allowed: ['any living creature'] },
    ],
    typeChange: 'construct',
    subtypeGains: ['augmented'],
    typeChangeNote: 'Retains all subtypes except alignment subtypes',
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 2 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote: 'Constitution score is removed (construct type).',
    naturalArmorChange: 5,
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'bludgeoning and magic' },
    immunities: ['cold', 'electricity', 'construct immunities (except mind-affecting)'],
    fastHealing: 'equal to Hit Dice when personal vault contains 1,000 gp or more',
    features: [
      {
        scalingType: 'flat',
        name: 'Silver Scent (Ex)',
        description:
          'The failed prophet can detect valuable materials via a scent-like sense, and can make a DC 20 Appraise check as a free action to identify relative values of detected materials.',
      },
      {
        scalingType: 'flat',
        name: 'Claw Attacks (Ex)',
        description:
          'Gains two claw attacks if lacking them. Reach extends 5 feet beyond natural reach. Damage is treated as one size category larger. Claws are treated as magic for the purposes of overcoming DR. Can substitute a touch attack for a greedy grab attempt.',
      },
      {
        scalingType: 'flat',
        name: 'Greedy Grab (Ex)',
        description:
          'On a successful claw or touch attack, gains a free steal combat maneuver attempt with a +4 racial bonus. Steals mundane valuables worth up to 100 gp x HD. Does not provoke attacks of opportunity.',
      },
      {
        scalingType: 'flat',
        name: 'Personal Vault (Su)',
        description:
          'Extradimensional storage with a capacity of 500 gp x Hit Dice. Contents can be stolen via a steal maneuver or Sleight of Hand check (at -5 penalty).',
      },
      {
        scalingType: 'flat',
        name: 'Aurokinesis (Su)',
        description:
          'Gains kineticist abilities with an effective kineticist level of CR -2, including gather power, kinetic blast, earth blast (automatic), and metal blast (if CR 10+). Gains a number of infusions equal to CR/3 (rounded up). If already a kineticist, gains an internal buffer or increases existing buffer by 2. Uses Intelligence, Wisdom, or Charisma in place of Constitution for all kineticist calculations.',
      },
      {
        scalingType: 'flat',
        name: 'Plutophage (Ex)',
        description:
          'Can siphon 100 gp x HD from its personal vault to negate 1 point of kinetic blast burn.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Druma, Profit and Prophecy',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 163. False Idol Creature (CR +2) [3pp]
  {
    id: 'false-idol-creature',
    name: 'False Idol Creature',
    description:
      'A chaotic evil outsider that masquerades as a deity, gaining false divine domain powers and the ability to grant dark blessings to unwitting worshippers. It is peculiarly vulnerable to divine magic and can be rebuked as undead.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'outsider',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Bound to the Faith (Su)',
        description:
          'The false idol takes a -4 penalty on saving throws against divine spells and effects, and takes 50% additional damage from divine sources. It can be rebuked or commanded as an undead creature with half its actual Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Charming Gaze (Su)',
        description:
          '30-foot range; Will save (DC 10 + 1/2 HD + Cha modifier) or subject to charm monster effect.',
      },
      {
        scalingType: 'flat',
        name: "Faith's Power (Su)",
        description:
          'Gains false faith points (1 per 20 worshippers), providing circumstance bonuses to attacks, saves, and checks, 5 temporary hit points per point, and +1 effective level per point (maximum 1/2 CR).',
      },
      {
        scalingType: 'flat',
        name: 'False Divinity (Su)',
        description:
          'Selects one cleric domain. Gains all domain spells from that domain as 3/day spell-like abilities and gains the domain\'s granted powers.',
      },
      {
        scalingType: 'flat',
        name: 'Favored of the Idol (Su)',
        description:
          'Can grant divine power to followers through deception, functioning as a false deity.',
      },
      {
        scalingType: 'flat',
        name: 'Mark of the Idol (Su)',
        description:
          'Marks willing creatures with a unique symbol granting 1/day use of a domain spell-like ability and enabling telepathy. Can dismiss the mark or cause 1d6 damage per 2 HD to marked creatures. Limited to a number of marks equal to its Hit Dice.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 164. Familial Lich (CR +0)
  {
    id: 'familial-lich',
    name: 'Familial Lich',
    description:
      'A variant lich template for spellcasters who reject undeath for themselves but seek to protect their bloodline from beyond the grave. Rather than rejuvenating in a phylactery, the familial lich\'s spirit possesses a willing family member over time.',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'good' },
    srFormula: '11 + CR',
    features: [
      {
        scalingType: 'flat',
        name: 'Familial Possession (Su)',
        description:
          'Instead of rejuvenating via a phylactery, the familial lich\'s spirit seeks the nearest living relative within 1d10 days of destruction, then attempts greater possession (CL equals HD, DC Charisma-based). A failed save grants the target permanent immunity to this creature\'s possession attempts, and the spirit moves to the next relative. On a successful possession, the familial lich shares consciousness with its host and may attempt greater possession daily. Three consecutive failed saves by a host results in the permanent transformation of that family member into a new familial lich. Eligible targets are lineal ancestors, descendants, and siblings only.',
      },
      {
        scalingType: 'flat',
        name: 'Modified Rejuvenation',
        description:
          'Loses the standard lich rejuvenation ability. DR changes from DR 15/bludgeoning and magic to DR 10/good.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 165. Fear Feeder Template (CR +1)
  {
    id: 'fear-feeder',
    name: 'Fear Feeder Template',
    description:
      'An evil outsider or undead that feeds on the fear of its prey, growing stronger with each creature it terrifies. It gains a supernatural scare ability that provides attack bonuses and temporary hit points.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['outsider', 'undead'] },
      { type: 'alignment', allowed: ['any evil'] },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Scare (Su)',
        description:
          'Once per day, the fear feeder can use scare as a spell-like ability with a caster level equal to the creature\'s total Hit Dice plus 3. Each opponent who fails its saving throw grants the fear feeder +1 bonus to attack rolls and saving throws, plus 1d8 temporary hit points. These bonuses stack per failed save and last for 1d8 rounds.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'd20pfsrd.com',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 166. Feral Dragon (CR +varies) [3pp]
  {
    id: 'feral-dragon',
    name: 'Feral Dragon',
    description:
      'A simple template representing a dragon stripped of its supernatural intelligence and abilities, reduced to a bestial state. CR equals racial Hit Dice divided by 2 or base CR -4, whichever is greater.',
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [{ type: 'creature_type', allowed: ['dragon'] }],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -4, minimum: 1 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: -15, minimum: 1 },
      { ability: 'WIS', change: -4, minimum: 1 },
    ],
    abilityScoreChangeNote:
      'CR equals racial Hit Dice divided by 2 or base CR -4, whichever is greater.',
    naturalArmorChange: -2,
    features: [
      {
        scalingType: 'flat',
        name: 'Reduced Abilities',
        description:
          'Loses all supernatural attacks except its breath weapon. Loses all spell-like abilities and innate spellcasting (retains class-based spellcasting if any). Loses all supernatural and spell-like special qualities. Loses damage reduction and spell resistance. Natural armor reduced by 2 (minimum +0). Treasure reduced by one category. Feats and skills are recalculated for its diminished capabilities.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 167. Feral Vampire (CR +3)
  {
    id: 'feral-vampire',
    name: 'Feral Vampire',
    description:
      'A living humanoid or monstrous humanoid cursed by powerful magic to transform progressively into a bestial predator over days of starvation. Unlike standard vampires, it remains a living creature that grows more dangerous the longer it goes without feeding.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid', 'monstrous humanoid'] },
      { type: 'min_hd', minimum: 5 },
    ],
    abilityScoreChangeNote:
      'Ability score changes are progressive by hunger stage. Well-fed (<24 hrs): +2 WIS. Slightly-hungry (1-2 days): no changes. Hungry (3-4 days): +2 STR, +2 DEX, +2 CON, -2 INT. Very-hungry (5-6 days): +6 STR, +4 DEX, +6 CON, -6 CHA. Starving (7+ days): +8 STR, +6 DEX, +8 CON, -6 INT (cumulative -1/day), -8 CHA.',
    features: [
      {
        scalingType: 'flat',
        name: 'Progressive Hunger Stages',
        description:
          'The feral vampire\'s abilities progress through five hunger stages. Well-fed: low-light vision, fast healing 1. Slightly-hungry: darkvision 60 ft., scent, ferocity, bite 1d6 and two claws 1d4 (Medium), wild empathy (predatory animals only), light sensitivity, aversion to holy symbols, sickened near running water. Hungry: fast healing 2, DR 5/magic or silver, base speed +10 ft., glide ability, bite can trip freely, attacks threaten 19-20/x3. Very-hungry: size increase by 1 category, darkvision 90 ft., +4 natural armor, DR must be overcome by both magic and silver, fast healing 5, pounce, speed +30 ft. total, quadruped form. Starving: darkvision 120 ft., +6 natural armor, DR 10/magic and silver, fly speed 60 ft. (poor), rake attack, Hunter\'s Call (summon 1d3 predatory animals per HD tier 3/day), Uncontrollable Hunger (DC 15+1/day Will save or must hunt sentient creatures).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Necromancers of the Northwest, LLC',
      publication: 'Liber Vampyr',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 168. Fey Animal (CR +1)
  {
    id: 'fey-animal',
    name: 'Fey Animal',
    description:
      'An animal touched by the power of the First World, changing its type to fey and granting it supernatural intelligence, fey magic, and a deadly death curse.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['animal'] }],
    typeChange: 'fey',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 10, condition: 'maximum resulting score of 12' },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: 1,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 10, value: 5, bypassedBy: 'cold iron' },
        { minHD: 11, value: 10, bypassedBy: 'cold iron' },
      ],
    },
    srFormula: 'CR + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Death Curse (Su)',
        description:
          'A creature that kills a fey animal must succeed at a Will save (DC 10 + 1/2 HD + Cha modifier) or take a -2 penalty to all rolls until the curse is removed.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Movement',
        description: 'All movement speeds increase by 10 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Fey Spell-Like Abilities (Sp)',
        description:
          'Gains cumulative spell-like abilities by HD (CL = CR): HD 1-3: dancing lights 3/day, faerie fire; HD 4-6: entangle, glitterdust; HD 7-9: deep slumber; HD 10-12: major image; HD 13-15: confusion; HD 16+: feeblemind. Also gains +4 racial bonus to Bluff and Stealth, 6 + Int modifier skill points per HD, and speaks Sylvan plus one regional language.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Lands of the Linnorm Kings',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 169. Fey Creature (CR +1 or +2)
  {
    id: 'fey-creature',
    name: 'Fey Creature',
    description:
      'A living corporeal creature transformed into or born as a fey being, gaining the fey type, a suite of enchanting spell-like abilities, damage reduction against cold iron, and a selection of special fey qualities per 4 Hit Dice.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 9,
        crValue: 1,
        label: '9 HD or fewer: CR +1',
        features: [],
      },
      {
        tierIndex: 1,
        minHD: 10,
        crValue: 2,
        label: '10+ HD: CR +2',
        features: [],
      },
    ],
    acquisitionType: 'either',
    isSimpleTemplate: false,
    typeChange: 'fey',
    abilityScoreChanges: [
      { ability: 'STR', change: -2 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 2, condition: 'creatures without Int score gain Int 3' },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: -1,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 11, value: 5, bypassedBy: 'cold iron' },
        { minHD: 12, value: 10, bypassedBy: 'cold iron' },
      ],
    },
    resistances: [
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
    ],
    srFormula: '11 + CR',
    features: [
      {
        scalingType: 'flat',
        name: 'Fey Special Qualities',
        description:
          'Gains one of the following abilities per 4 Hit Dice (or fraction thereof), chosen at creation: Camouflage (Ex, hide in natural terrain without cover/concealment, +4 Stealth), Change Shape (Su, transform into normal specimen/humanoid/animal within 1 size step, can select multiple times), Energy Resistance (Ex, resistance 10 to chosen energy, stackable), Evasion (Ex), Long Step (Su, teleport 10 ft. per HD as move action usable once per 1d4 rounds), Trackless Step (Ex), Vanish (Su, swift action invisibility 1 round usable 1 round/day per HD), or Woodland Stride (Ex, stackable for different terrain types).',
      },
      {
        scalingType: 'flat',
        name: 'Fey Spell-Like Abilities (Sp)',
        description:
          'If Int or Wis is 8 or higher, gains progressive spell-like abilities by HD (CL = HD): HD 1-2: dancing lights 3/day, faerie fire; HD 3-4: entangle, glitterdust; HD 5-6: deep slumber; HD 7-8: major image; HD 9-10: confusion; HD 11-12: feeblemind; HD 13-14: mislead; HD 15-16: project image; HD 17-18: irresistible dance; HD 19-20: scintillating pattern.',
      },
      {
        scalingType: 'flat',
        name: 'Fey Skills',
        description:
          'Gains Acrobatics, Bluff, Fly, and Stealth as class skills. 6 + Intelligence modifier skill points per racial Hit Die. Gains +4 bonus on saving throws against mind-affecting effects. Speaks Sylvan in addition to base creature languages.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 3',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 170. Fey Touched (CR +1) [3pp]
  {
    id: 'fey-touched',
    name: 'Fey Touched',
    description:
      'A simple template for creatures granted fey nature by a powerful fey patron, gaining the fey subtype, enhanced Dexterity, and damage reduction against cold iron.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    typeChange: 'base creature type and fey (treated as both)',
    subtypeGains: ['fey'],
    abilityScoreChanges: [{ ability: 'DEX', change: 4 }],
    damageReduction: {
      scalingType: 'flat',
      value: 1,
      bypassedBy: 'cold iron (value equals 1/2 creature HD, minimum 1)',
    },
    features: [
      {
        scalingType: 'flat',
        name: 'Dual Type',
        description:
          'The creature is treated as both its original type and fey for all purposes. Gains low-light vision.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Jon Brazer Enterprises',
      publication: 'Book of Beasts: Monsters of the River Nations',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 171. Fey-Touched Creature (CR +0 or +1)
  {
    id: 'fey-touched-creature',
    name: 'Fey-Touched Creature',
    description:
      'A creature descended from First World inhabitants, bearing a latent fey nature that manifests as damage reduction, limited shapeshifting, and woodland affinity. CR increases by 1 only if the base creature has 5 or more Hit Dice.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 4,
        crValue: 0,
        label: '1-4 HD: CR +0',
        features: [],
      },
      {
        tierIndex: 1,
        minHD: 5,
        crValue: 1,
        label: '5+ HD: CR +1',
        features: [],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 5, maxHD: 10, value: 5, bypassedBy: 'cold iron' },
        { minHD: 11, value: 10, bypassedBy: 'cold iron' },
      ],
    },
    srFormula: 'new CR + 5',
    features: [
      {
        scalingType: 'flat',
        name: 'Low-Light Vision',
        description: 'Can see twice as far as humans in conditions of dim light.',
      },
      {
        scalingType: 'flat',
        name: 'Fey Resilience',
        description: '+2 bonus on Will saves.',
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          'Can assume a single fixed Small or Medium humanoid form via alter self. This form is chosen when the template is applied and does not change.',
      },
      {
        scalingType: 'flat',
        name: 'Woodland Stride (Ex)',
        description: 'Can move through natural difficult terrain at normal speed.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Player Companion: Legacy of the First World',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 172. Fiend-Infused Golem (CR +2)
  {
    id: 'fiend-infused-golem',
    name: 'Fiend-Infused Golem',
    description:
      'A golem bound with a fiendish spirit during construction, gaining hellfire touch attacks, fast healing, and a catastrophic berserk liberation when destroyed. It is susceptible to banishment and dismissal effects.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'INT', change: 0, condition: 'Intelligence set to 4' },
      { ability: 'CHA', change: 0, condition: 'Charisma set to 10' },
    ],
    abilityScoreChangeNote:
      'Intelligence changes to 4. Charisma changes to 10. Alignment becomes neutral evil.',
    resistances: [{ energyType: 'fire', value: 'immunity' }],
    fastHealing: '5',
    features: [
      {
        scalingType: 'flat',
        name: 'Hellfire Touch (Su)',
        description:
          'Touch attacks deal 2d6 points of damage (half fire, half unholy damage).',
      },
      {
        scalingType: 'flat',
        name: 'Berserk Liberation (Su)',
        description:
          'There is a 2% cumulative chance per round that the bound fiend breaks free, triggering an explosion dealing 13d6 points of damage (half fire, half unholy) to all creatures within 60 feet of the golem.',
      },
      {
        scalingType: 'flat',
        name: 'DR Modification',
        description:
          'If the base creature has damage reduction, the "good" damage type is added to the bypass requirements.',
      },
      {
        scalingType: 'flat',
        name: 'Susceptibility to Banishment',
        description:
          'Unlike standard golems, the fiend-infused golem is affected by banishment and dismissal spells (modification to the standard golem immunity to magic).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Cheliax, The Infernal Empire',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 173. Fire Creature (CR +2) [3pp]
  {
    id: 'fire-creature',
    name: 'Fire Creature',
    description:
      'An incorporeal outsider of elemental fire, phasing through the mortal plane as a living flame. All natural attacks become incorporeal touch attacks dealing fire damage.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'outsider',
    subtypeGains: ['elemental', 'extraplanar', 'fire', 'incorporeal'],
    subtypeRemoves: ['cold', 'water'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote:
      'Strength score is removed (incorporeal creatures have no Strength score). All racial Hit Dice convert to d10s.',
    resistances: [{ energyType: 'fire', value: 'immunity' }],
    features: [
      {
        scalingType: 'flat',
        name: 'Heat Aura (Su)',
        description:
          '10-foot radius emanation dealing 1d6 fire damage plus an additional 1d6 fire damage for every 5 racial Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Fire Body (Ex)',
        description:
          'Melee attackers automatically take 1d6 fire damage and risk catching on fire.',
      },
      {
        scalingType: 'flat',
        name: 'Molten Swim (Ex)',
        description:
          'Replaces any swim speed with the ability to move through molten materials at the same speed.',
      },
      {
        scalingType: 'flat',
        name: 'Fire Leap (Su)',
        description:
          'Can teleport between non-magical flames within line of sight and within 200 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Burn (Ex)',
        description:
          'Touch attacks gain the burn ability, dealing 1d6 fire damage plus 1d6 for every 3 Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Fire Bolt (Ex)',
        description:
          'Ranged touch attack with a range of 100 feet, dealing slam damage as if one size category larger.',
      },
      {
        scalingType: 'flat',
        name: 'Melt (Ex)',
        description:
          'Touch attack inflicts three times the fire creature\'s Hit Dice in fire damage to non-living materials.',
      },
      {
        scalingType: 'flat',
        name: 'Fire Spellcasting (Su)',
        description:
          'Fire descriptor spells are cast at +1 caster level. Can add the fire descriptor to any damaging spell, converting half of its damage to fire damage. Spell-like abilities with the cold descriptor cannot be used.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 174. Flame-Spawned Creature (CR varies) [3pp]
  {
    id: 'flame-spawned-creature',
    name: 'Flame-Spawned Creature',
    description:
      'An outsider of elemental fire that retains its physical form, blazing with inner heat that damages nearby foes and sets attackers ablaze. Applicable to most non-cold, non-water corporeal creature types.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 3,
        crValue: 0,
        label: '3 or fewer HD: CR unchanged',
        features: [],
      },
      {
        tierIndex: 1,
        minHD: 4,
        maxHD: 8,
        crValue: 1,
        label: '4-8 HD: CR +1',
        features: [],
      },
      {
        tierIndex: 2,
        minHD: 9,
        crValue: 2,
        label: '9+ HD: CR +2',
        features: [],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'creature_type',
        allowed: [
          'aberration',
          'animal',
          'dragon',
          'fey',
          'humanoid',
          'magical beast',
          'monstrous humanoid',
          'ooze',
          'plant',
          'vermin',
        ],
      },
      {
        type: 'special',
        description: 'Base creature must not have the cold or water subtype',
      },
    ],
    typeChange: 'outsider',
    subtypeGains: ['elemental', 'fire', 'extraplanar'],
    abilityScoreChanges: [{ ability: 'DEX', change: 2 }],
    naturalArmorChange: 2,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 4, maxHD: 8, value: 5, bypassedBy: 'magic' },
        { minHD: 9, value: 10, bypassedBy: 'magic' },
      ],
    },
    resistances: [{ energyType: 'fire', value: 'immunity' }],
    features: [
      {
        scalingType: 'flat',
        name: 'Fire Damage on Natural Attacks',
        description:
          'Natural attacks deal additional fire damage: Small or smaller 1d4, Medium 1d6, Large 1d8, Huge or larger 2d6.',
      },
      {
        scalingType: 'flat',
        name: 'Burn (Ex)',
        description:
          'Creatures struck by natural attacks must succeed on a Reflex save or catch on fire for 1d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Fiery Aura (Ex)',
        description:
          'Anyone within 5 feet must succeed on a Fortitude save or take heat damage equal to the creature\'s natural attack fire damage each round.',
      },
      {
        scalingType: 'flat',
        name: 'Cold Vulnerability',
        description: 'Takes 50% additional damage from cold effects.',
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

  // 175. Flesh Plant (CR +1) [3pp]
  {
    id: 'flesh-plant',
    name: 'Flesh Plant',
    description:
      'A plant creature whose biology has been corrupted into an aberrant form, losing its plant immunities and gaining animalistic predatory traits including claws, bleed attacks, and enhanced senses.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['plant'] }],
    typeChange: 'aberration',
    subtypeGains: ['augmented plant'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      {
        ability: 'INT',
        change: 1,
        condition: 'only if base plant lacks an Intelligence score',
      },
    ],
    abilityScoreChangeNote:
      'Natural armor is replaced based on size: Medium or smaller +0, Large +2, Huge +5, Gargantuan +9, Colossal +14.',
    fastHealing: '2, plus 2 additional per 10 racial Hit Dice',
    features: [
      {
        scalingType: 'flat',
        name: 'Lost Plant Abilities',
        description:
          'Loses all plant type immunities and weaknesses (e.g., fire vulnerability, sunlight requirements). If the base creature was immune to poison, it retains immunity to the bleed effect.',
      },
      {
        scalingType: 'flat',
        name: 'Aberrant Senses',
        description: 'Gains scent, darkvision 60 feet, and tremorsense 20 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Bleed Attacks (Ex)',
        description: 'Natural attacks gain the bleed special ability (1d4 hit points per round).',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Movement',
        description:
          'Speed increases by 10 feet. If the base creature lacks a land speed, it gains a 10-foot land speed.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },
];
