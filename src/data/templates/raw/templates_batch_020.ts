// Batch 020 | first: 'Waxwork Creature' | last: 'Redeemed Mord-Sith Creature' | count: 19

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_020: TemplateDefinition[] = [
  // 476. Waxwork Creature (CR varies)
  {
    id: 'waxwork-creature',
    name: 'Waxwork Creature',
    description:
      'An inherited template that transforms a creature into a wax construct. The creature becomes a construct type, losing its Constitution and Intelligence scores (Wisdom and Charisma both become 10). Its natural armor increases by size (from +0 for Tiny to +11 for Colossal). It gains Waxen Regeneration (Su), restoring 5 HP/round (10 HP/round with 11+ HD), which is disabled for one round after taking fire damage. At 0 HP it becomes staggered but continues to regenerate rather than being destroyed. It is immune to cold but vulnerable to fire. It gains a slam attack and retains natural weapons but loses all special attacks, most special qualities, all skills, and all feats (gaining only Improved Initiative). Its racial HD convert to d10s with bonus HP by size. Flight maneuverability drops to clumsy; it floats and must make DC 20 Swim checks to submerge.',
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'construct',
    features: [
      {
        scalingType: 'flat',
        name: 'Waxen Regeneration (Su)',
        description:
          'A waxwork creature restores 5 hit points per round. A waxwork creature with 11 or more HD restores 10 hit points per round. Fire damage disables this regeneration for 1 round after the creature is hit. The creature becomes staggered at 0 HP instead of destroyed while regenerating, and ignores damage that would reduce it below 0 HP.',
      },
      {
        scalingType: 'flat',
        name: 'Freeze (Ex)',
        description:
          'A waxwork creature can hold itself so still it appears to be a wax sculpture. A waxwork creature that uses freeze can take 20 on Stealth checks to hide in plain sight as a wax sculpture.',
      },
      {
        scalingType: 'flat',
        name: 'Construct Traits',
        description:
          'A waxwork creature gains all standard construct immunities and traits, including immunity to cold damage. It has no Constitution score (Wisdom and Charisma become 10). Racial HD convert to d10s with bonus HP by size (Small +10, Medium +20, Large +30, Huge +40, Gargantuan +60, Colossal +80). BAB equals HD. All saves equal +1/3 HD.',
      },
    ],
    immunities: ['cold', 'all construct immunities'],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Horror Adventures' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 477. Whispering Phantasm Creature (CR +2)
  {
    id: 'whispering-phantasm-creature',
    name: 'Whispering Phantasm Creature',
    description:
      'An acquired template for corporeal creatures with Intelligence 6 or higher. The creature gains a bond with a single mortal on the Material Plane, haunting them from the Ethereal Plane. It gains Constitution +4, Charisma +6, a fly speed of 30 ft. (perfect), natural invisibility (except when manifesting to its bonded victim), and the bonus feats Improved Initiative and Skill Focus (Stealth). It can shift between the Ethereal Plane and the plane of its bonded victim as a free action (returning as a move action). While ethereal, it is nearly undetectable. During surprise rounds it gains a full round of actions when shifting to attack. Its bonded victim can always perceive it. A binding spell cast on the victim affects the phantasm instead, trapping it for a year and a day.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Bonded Victim (Su)',
        description:
          'The whispering phantasm forms a bond with a creature, usually a humanoid of the Material Plane. The bonded victim can always perceive the whispering phantasm regardless of what plane either is on. They communicate via a constant telepathic bond or whispering wind with no distance or planar limit. The bond is released if the phantasm is bound (the victim becomes permanently immune). Forming a new bond requires 24 uninterrupted hours of meditation.',
      },
      {
        scalingType: 'flat',
        name: 'Ethereal Ambush (Ex)',
        description:
          'During the surprise round, when a whispering phantasm shifts from the Ethereal Plane to the plane of its bonded victim, it gains a full round of actions rather than only a standard action.',
      },
      {
        scalingType: 'flat',
        name: 'Ethereal Jaunt (Su)',
        description:
          'The whispering phantasm can shift from the Ethereal Plane to the plane its bonded victim is on as a free action (even if the planes are not normally connected) and back again as a move action. Otherwise functions as the ethereal jaunt spell (CL 15th).',
      },
      {
        scalingType: 'flat',
        name: 'Ethereal Stealth (Su)',
        description:
          "While ethereal, detection effects (detect invisibility, detect magic, true seeing, etc.) automatically fail unless a successful caster level check (DC 15 + phantasm's CR) is made. Effects without a caster level require a Will save (DC 10 + 1/2 HD + Charisma modifier).",
      },
      {
        scalingType: 'flat',
        name: 'Natural Invisibility',
        description:
          'The whispering phantasm is naturally invisible unless it chooses to manifest to its bonded victim.',
      },
      {
        scalingType: 'flat',
        name: 'Bound Flaw (Weakness)',
        description:
          "A binding spell cast on the bonded victim affects the phantasm instead. The binding spell's DC increases by 4 and automatically overcomes immunities and spell resistance. The binding imprisons the phantasm on the Ethereal Plane for one year and one day, negating its abilities; afterward it remains trapped until the binding's focus is destroyed.",
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

  // 478. Wight (CR +1)
  {
    id: 'wight-template',
    name: 'Wight',
    description:
      'An acquired template for living corporeal creatures. The creature becomes undead (augmented), gains Strength +2, Dexterity +2, Wisdom +2, Charisma +4, loses its Constitution score, and gains +4 natural armor. It gains darkvision 60 ft., uses Charisma for bonus HP, and its racial HD convert to d8s. It gains an energy drain slam attack (1 negative level, Will save DC = 10 + 1/2 HD + Cha), Create Spawn (slain humanoids rise as enslaved wights in 1d4 rounds), a +8 racial bonus to Stealth, the Blind-Fight feat, and resurrection vulnerability (raise dead or similar destroys it on a failed Will save). Always lawful evil.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: 4,
    features: [
      {
        scalingType: 'flat',
        name: 'Energy Drain (Su)',
        description:
          "A wight's slam or natural weapon attacks inflict one negative level on a hit. The Will save DC to remove the negative level is 10 + 1/2 HD + Charisma modifier.",
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Any humanoid slain by the wight rises as a wight in 1d4 rounds. Spawn have a –2 penalty to all d20 rolls and checks and –2 HP per HD. Spawn are enslaved to the creator until its death, whereupon they become independent wights.',
      },
      {
        scalingType: 'flat',
        name: 'Resurrection Vulnerability (Su)',
        description:
          'A raise dead or similar spell cast on the wight destroys it (Will negates). The wight does not gain a saving throw if it is helpless.',
      },
      {
        scalingType: 'flat',
        name: 'Undead Traits',
        description:
          'No Constitution score; uses Charisma modifier for bonus HP. Racial HD convert to d8s. Class-level HD, BAB, and saves are unchanged. Gains darkvision 60 ft. and +8 racial bonus on Stealth checks. Gains Blind-Fight as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'AndyCollins.net',
      publication: 'Wight Template (web)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 479. Winter-Touched Fey (CR +0)
  {
    id: 'winter-touched-fey',
    name: 'Winter-Touched Fey',
    description:
      "A simple acquired template applicable to any fey creature except those with the fire subtype. The creature's alignment shifts to evil and it gains the cold subtype. Its attacks (natural or manufactured) deal numbing cold, forcing struck creatures to succeed at a Constitution-based Fortitude save or become staggered for 1 round. This template can be used with summoned creatures.",
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    subtypeGains: ['cold', 'evil (alignment)'],
    features: [
      {
        scalingType: 'flat',
        name: 'Numbing Cold (Su)',
        description:
          "Creatures struck by the winter-touched fey's natural or manufactured weapon attacks must succeed at a Fortitude save (DC is Constitution-based) or become staggered for 1 round.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Adventure Path #67: The Snows of Summer',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 480. Wishtouched (CR +1)
  {
    id: 'wishtouched',
    name: 'Wishtouched',
    description:
      'An acquired third-party template for any creature that has successfully wished upon a star. The creature gains a +4 inherent bonus to one ability score, damage reduction (DR 5/cold iron with fewer than 10 HD; DR 10/cold iron with 10+ HD), and a –3 penalty on saving throws against fey spells and spell-like abilities. It gains HD-based spell-like abilities (1/day, CL = HD): faerie fire (1–3 HD), silence (4–6 HD), gravity bow (7–9 HD), lesser geas (9–13 HD), life bubble (14–16 HD), or voidflight (17+ HD). The creature also develops Starquiet: at adulthood its hearing-dependent abilities function at half range; at middle age it becomes mute (verbal spell components replaced by emotional components).',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 9, value: 5, bypassedBy: 'cold iron' },
        { minHD: 10, value: 10, bypassedBy: 'cold iron' },
      ],
    },
    features: [
      {
        scalingType: 'flat',
        name: 'Ability Score Bonus',
        description:
          'The wishtouched gains a +4 inherent bonus to one ability score, typically associated with the nature of its granted wish.',
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities (Su)',
        description:
          "Once per day, CL equals base creature's HD. By HD range: 1–3 HD: faerie fire; 4–6 HD: silence; 7–9 HD: gravity bow; 9–13 HD: lesser geas; 14–16 HD: life bubble; 17+ HD: voidflight (transmutation, grants vacuum flight at Speed 1 with varying acceleration, minimum 50 ft./round atmospheric flight at CL 1, scaling to 250 ft. at CL 20+).",
      },
      {
        scalingType: 'flat',
        name: 'Starquiet',
        description:
          'The wishtouched progressively loses its voice as it ages. At adulthood it becomes soft-spoken; all hearing-dependent abilities function at half their normal range. At middle age it becomes completely mute; verbal spell components are replaced with emotional components.',
      },
      {
        scalingType: 'flat',
        name: 'Fey Magic Vulnerability',
        description:
          'The wishtouched takes a –3 penalty on saving throws against the spells and spell-like abilities of fey, and against fey-touched celestial phenomena.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'd20pfsrd.com Publishing',
      publication: 'Wishtouched (3pp)',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 481. Witchfire Creature (CR +3)
  {
    id: 'witchfire-creature',
    name: 'Witchfire Creature',
    description:
      "An acquired template for living, intelligent creatures with hexes, hex-like abilities, spell-like abilities of 2nd level or higher, or innate curse/charm abilities. The creature becomes an incorporeal undead (augmented) with an evil alignment, losing all base speeds but gaining a fly speed equal to double its highest base speed (perfect). It loses Strength and Constitution (using Charisma for HP), gains Dexterity +8 and Charisma +10, and gains channel resistance +4. It is immune to fire. Its deflection bonus to AC equals its Charisma modifier (minimum +1). It attacks with an incorporeal touch or a 60-foot ranged witchfire bolt dealing 1d6 fire per CR. Creatures damaged must save (Will DC = 10 + 1/2 HD + Cha) or be engulfed by witchflame for 1 minute/HD, causing them to glow, become sickened, and gain fire vulnerability (+50% fire damage). It can automatically command normal will-o'-wisps within 30 feet. It gains HD-scaled spell-like abilities up to energy drain (3/day) at 19–20 HD.",
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['incorporeal', 'augmented'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 8 },
      { ability: 'CHA', change: 10 },
    ],
    immunities: ['fire', 'undead traits'],
    features: [
      {
        scalingType: 'flat',
        name: 'Witchflame (Su)',
        description:
          "Creatures damaged by the witchfire creature's touch or bolt attacks must succeed on a Will save (DC 10 + 1/2 HD + Charisma modifier) or become engulfed in sickly green witchflame for 1 minute per HD. Affected creatures glow as per faerie fire, become sickened, and gain vulnerability to fire (+50% fire damage). The effect is removed by break enchantment, miracle, remove curse, or wish (effective CL must exceed the witchfire's HD). Entering the witchfire's square or striking it in melee also triggers this save.",
      },
      {
        scalingType: 'flat',
        name: 'Witchfire Bolt (Su)',
        description:
          'Ranged touch attack, 60-foot range, deals 1d6 fire damage per final CR plus witchflame effect.',
      },
      {
        scalingType: 'flat',
        name: "Command Will-o'-Wisp (Su)",
        description:
          "As a free action, the witchfire creature automatically commands all normal will-o'-wisps within 30 feet, as dominate monster (DC 10 + 1/2 HD + Cha modifier). Normal will-o'-wisps will not attack the witchfire creature unless compelled.",
      },
      {
        scalingType: 'hd_threshold',
        name: 'Spell-Like Abilities (HD 1–2)',
        description:
          "Disguise self (at will), CL equals creature's HD or base creature's SLA CL (whichever is higher).",
        minimumHD: 1,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Spell-Like Abilities (HD 3–4)',
        description: 'Gains dancing lights (at will).',
        minimumHD: 3,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Spell-Like Abilities (HD 5–6)',
        description: 'Gains ghost sound (at will).',
        minimumHD: 5,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Spell-Like Abilities (HD 7–8)',
        description: 'Gains ray of enfeeblement (at will).',
        minimumHD: 7,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Spell-Like Abilities (HD 9–10)',
        description: 'Gains pyrotechnics (at will).',
        minimumHD: 9,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Spell-Like Abilities (HD 11–12)',
        description: 'Gains invisibility (at will).',
        minimumHD: 11,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Spell-Like Abilities (HD 13–14)',
        description: "Gains summon (level 4, 2 will-o'-wisps, 50%) 1/day.",
        minimumHD: 13,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Spell-Like Abilities (HD 15–16)',
        description: 'Gains nondetection (continuous).',
        minimumHD: 15,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Spell-Like Abilities (HD 17–18)',
        description: 'Gains screen (at will).',
        minimumHD: 17,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Spell-Like Abilities (HD 19–20)',
        description: 'Gains energy drain (3/day).',
        minimumHD: 19,
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

  // 482. Worm That Walks (CR +2)
  {
    id: 'worm-that-walks',
    name: 'Worm That Walks',
    description:
      "An acquired template applied to evil spellcasting creatures. The creature's type changes to vermin with the augmented subtype. It gains Dexterity +4, Constitution +4, and loses its natural armor bonus but gains an insight bonus to AC equal to its Wisdom modifier (minimum +2). Racial HD convert to d8s. It gains DR 15/—, immunity to disease, paralysis, poison, and sleep, and fast healing equal to its CR. It is immune to critical hits and flanking but takes 150% damage from area effects. It gains blindsight 30 ft. and darkvision 60 ft. It loses all natural attacks and gains a slam with grab. While grappling, it can deal swarm damage (swift action) and the grappled creature must save or become nauseated. It can discorporate into a true swarm (standard action) and reform as a full-round action. It gains Diehard and +8 racial bonuses to Perception, Sense Motive, and Stealth.",
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'vermin',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
    ],
    damageReduction: { scalingType: 'flat', value: 15, bypassedBy: '—' },
    fastHealing: 'equal to CR',
    immunities: ['disease', 'paralysis', 'poison', 'sleep', 'critical hits', 'flanking'],
    features: [
      {
        scalingType: 'flat',
        name: 'Worm That Walks Traits',
        description:
          'Immune to critical hits and flanking. Takes 150% damage from area effects. Becomes staggered at 0 HP and dying at negative HP. Immune to single-target spells (except those cast by itself). Gains blindsight 30 ft. and darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Discorporate',
        description:
          'As a standard action the worm that walks can collapse into a true swarm with Strength 1, losing defensive abilities but gaining standard swarm traits (including swarm damage and immunity to weapon damage). It can reform into its normal body as a full-round action while at 1 or more HP.',
      },
      {
        scalingType: 'flat',
        name: 'Squirming Embrace (Ex)',
        description:
          'While grappling a creature, the worm that walks can deal its swarm damage as a swift action. The grappled creature must make a Fortitude save (DC 10 + 1/2 HD + Con modifier) or become nauseated for 1 round.',
      },
      {
        scalingType: 'flat',
        name: 'Tenacious (Ex)',
        description: 'The worm that walks gains a +4 racial bonus to grapple CMB and CMD.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 2' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 483. Wrathful Creature (CR +1)
  {
    id: 'wrathful-creature',
    name: 'Wrathful Creature',
    description:
      'An acquired third-party template applicable to any creature with Intelligence 3 or higher that has been consumed by a blood feud. The creature gains Strength +6, Constitution +4, and the ferocity special quality. It hunts a specific chosen foe and gains several supernatural abilities tied to revenge. When its chosen foe is slain the template ends, transferring to the closest blood relative or friend of the slain foe.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'CON', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Ferocity',
        description: 'The wrathful creature can continue fighting even when below 0 hit points.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Feud (Ex)',
        description:
          'Upon killing its chosen foe, the wrathful creature loses this template. The template immediately transfers to the closest blood relative or close friend of the slain foe.',
      },
      {
        scalingType: 'flat',
        name: 'Cold Vengeance (Ex)',
        description:
          'Once per day as a free action, the wrathful creature gains the benefit of any single barbarian rage power, using its Hit Dice as its barbarian level, without suffering the rage penalties.',
      },
      {
        scalingType: 'flat',
        name: 'Discern Kith (Sp)',
        description:
          "Once per day, the wrathful creature learns the name, relationship, and location of one of its chosen foe's allies, as per discern location.",
      },
      {
        scalingType: 'flat',
        name: 'Disproportionate Retribution (Ex)',
        description:
          'Once per day as part of a melee attack action, the wrathful creature deals damage equal to 150% of the damage dealt to it by a single attack within the last round, replacing all normal damage and effects.',
      },
      {
        scalingType: 'flat',
        name: 'Taking You With Me (Su)',
        description:
          'When killed by its chosen foe, the wrathful creature explodes, dealing 5 points of damage per Hit Die (half fire, half divine) to all creatures within 10 feet per HD. A Reflex save (DC 10 + 1/2 HD + Con modifier) halves the damage.',
      },
      {
        scalingType: 'flat',
        name: 'Vengeful List (Su)',
        description:
          "Against its chosen foes, the wrathful creature's weapons gain the bane property. At CR 15+, the enhancement bonus increases by 2 with an additional +3d6 damage. Critical hits force a Fortitude save (DC 10 + 1/2 HD + Con modifier) or the victim takes 10 damage per HD (this effect ignores critical immunity). At CR 15+, it also affects later-added foes.",
      },
      {
        scalingType: 'flat',
        name: 'Worse than Death (Su)',
        description:
          "The wrathful creature can negate lethal damage or effects to instead render the opponent permanently unconscious. It may also scar, blind, remove appendages, or suppress the victim's abilities or magic item use. This curse is removed by break enchantment, limited wish, miracle, remove curse, or wish cast by a divine caster whose CL exceeds the wrathful creature's CR and whose deity governs mercy.",
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

  // 484. Wretched (CR +0)
  {
    id: 'wretched',
    name: 'Wretched',
    description:
      "An acquired third-party template applicable to corporeal animals, humanoids, or monstrous humanoids afflicted by a disease that destroys self-worth. Animals become magical beasts; other types remain unchanged. The creature's Charisma drops to 1 and it takes a –4 circumstance penalty to AC (it will not defend itself). It transmits the disease gloomtouch via touch or natural attacks and gains the wretchedness aura (opponents must make a Will save or fail to attack it). It is immune to charm effects but does not resist commands from others. Its alignment becomes neutral.",
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [{ ability: 'CHA', change: -9 }],
    abilityScoreChangeNote: 'Charisma is set to 1 (not a relative change).',
    immunities: ['charm effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Wretchedness (Su)',
        description:
          'Any creature attempting to strike or cast a targeted spell at the wretched creature must make a Will save (DC based on Wisdom). On a failed save, the attack or spell fails and the action is lost. On a success, the creature may attack and is immune to this ability for 24 hours.',
      },
      {
        scalingType: 'flat',
        name: 'Gloom Touch (Su)',
        description:
          'The wretched creature transmits the disease gloomtouch with a successful touch or natural attack.',
      },
      {
        scalingType: 'flat',
        name: 'Type Change (Animals Only)',
        description:
          'Animal base creatures become magical beasts when this template is applied. Humanoids and monstrous humanoids retain their original type.',
      },
    ],
    sourceInfo: { type: 'third_party', publisher: 'Wayfinder', publication: 'Wayfinder #1' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 485. Wyrmskull (CR varies — decreases from base)
  {
    id: 'wyrmskull',
    name: 'Wyrmskull',
    description:
      "An acquired template for dragons of young adult age or older. The dragon becomes an undead construct shrunken to a skull-sized form (type changes to undead, augmented dragon; size reduced by two categories to a maximum of Large). CR is reduced from base: –2 (young adult/adult), –3 (mature adult/old), –4 (very old/ancient), –5 (wyrm/great wyrm). It loses Constitution (using Charisma for HP), gains Int +2, Wis +2, Cha +2, Dex +4 (due to size reduction), DR 5/bludgeoning, and telepathy 100 ft. Its fly speed is half the base creature's speed (perfect maneuverability). It retains only its bite attack and breath weapon, and gains bardic knowledge (as a bard of half its HD). New SLAs: legend lore, speak with dead, whispering wind (each 1/day). It can create skeletal warriors (one per age category, weekly, lasting 1 hour).",
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    sizeChange: -2,
    abilityScoreChanges: [
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
      { ability: 'DEX', change: 4 },
    ],
    abilityScoreChangeNote:
      'Dexterity +4 from size reduction (typically). Constitution score eliminated (undead).',
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'bludgeoning' },
    features: [
      {
        scalingType: 'flat',
        name: 'Ghostlight (Su)',
        description:
          "The wyrmskull's bite ignores the incorporeal miss chance and adds 1d6 energy damage matching its breath weapon type. Creatures hit are limned with faerie fire for 1 minute.",
      },
      {
        scalingType: 'flat',
        name: 'Speiro (Su)',
        description:
          "Once per week, the wyrmskull can create skeletal warriors equal in number to its age category. Warriors possess the wyrmskull's fast healing 5, damage reduction, spell resistance, and breath weapon immunity. The effect lasts 1 hour.",
      },
      {
        scalingType: 'flat',
        name: 'Lorewarden (Ex)',
        description:
          "The wyrmskull gains bardic knowledge as a bard whose level equals half the wyrmskull's Hit Dice.",
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities (Su)',
        description:
          "Once per day each: legend lore, speak with dead, whispering wind. The wyrmskull also retains the base creature's spell-like abilities.",
      },
      {
        scalingType: 'flat',
        name: 'Telepathy',
        description:
          'The wyrmskull can communicate telepathically with any creature within 100 feet that shares a language.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Adventure Path #22: The End of Eternity',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 486. Xenoid Creature (CR +0 or +1)
  {
    id: 'xenoid-creature',
    name: 'Xenoid Creature',
    description:
      "An acquired template for any living creature. The creature's type changes to aberration and it gains the shapechanger and mythos subtypes (optionally extraplanar). Intelligence minimum becomes 3. Its alignment shifts one step toward evil while maintaining its lawful/chaotic axis. It gains an insight bonus to AC based on HD (+1 at 1–4 HD, +2 at 5–10 HD, +3 at 11+ HD), darkvision 60 ft., acid and electricity resistance scaled by HD (5/10/15), spell resistance (new CR + 5), and increasing fortification against critical hits and sneak attacks (25%/50%/75%). Once per day as a swift action it can use true strike. It can reveal its true nature (standard or immediate action after a critical hit), creating a frightful presence affecting creatures with fewer HD. While in its true form it takes 1d6 nonlethal damage per hour and cannot heal until reverting. CR is +0 for 1–4 HD, +1 for 5+ HD.",
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'aberration',
    subtypeGains: ['shapechanger', 'mythos'],
    features: [
      {
        scalingType: 'flat',
        name: 'Unnatural Anatomy (Ex)',
        description:
          'Grants fortification against critical hits and sneak attacks. 1–4 HD: 25%; 5–10 HD: 50%; 11+ HD: 75%.',
      },
      {
        scalingType: 'flat',
        name: 'True Strike (Su)',
        description:
          'Once per day as a swift action, the xenoid creature can gain the benefit of true strike (+20 insight bonus on its next attack roll).',
      },
      {
        scalingType: 'flat',
        name: 'Unnatural Form (Su)',
        description:
          "As a standard action (or an immediate action after a confirmed critical hit), the xenoid reveals its true alien form. Non-xenoid creatures in line of sight are subject to frightful presence affecting those with fewer HD (panicked applies only to creatures with less than half the xenoid's HD). Duration: 1 hour per Hit Die. Also grants one ability from the following list: all-around vision, blindsense 30 ft., compression, +5 natural reach, no breath, poisonous blood, split, stench, trip, or unnatural aura.",
      },
      {
        scalingType: 'flat',
        name: 'Transformation Compulsion',
        description:
          'The xenoid must remain in its natural (non-true) form for no more than a number of hours equal to its Constitution score. After that time it must make a Will save (DC 15, +1 per additional hour) or become confused for 1d6 rounds and involuntarily transform.',
      },
      {
        scalingType: 'flat',
        name: 'Toxic Reality (Ex, Weakness)',
        description:
          'While in its unnatural true form, the xenoid takes 1d6 nonlethal damage per hour and cannot heal nonlethal damage until it returns to its natural form or enters an alien environment.',
      },
    ],
    srFormula: 'new CR + 5',
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'electricity', value: 10 },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 4' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 487. Yellow Musk Zombie (CR +0)
  {
    id: 'yellow-musk-zombie',
    name: 'Yellow Musk Zombie',
    description:
      "An acquired template for corporeal humanoids, monstrous humanoids, or aberrations with Intelligence 1 or higher, created by a yellow musk creeper. The creature's type changes to plant. Dexterity –4 (minimum 8), Intelligence becomes 2, Wisdom becomes 10, Charisma becomes 1. Natural armor increases by size (Small +1 through Colossal +11). All HD become d8s. It gains darkvision 60 ft., a slam attack (size-based damage), and must remain within 200 feet of its creator yellow musk creeper. After 2 months the zombie wanders off, dies, and new yellow musk creepers sprout from its body within an hour. It loses all special attacks and class bonus feats.",
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'plant',
    abilityScoreChanges: [{ ability: 'DEX', change: -4 }],
    abilityScoreChangeNote:
      'Dexterity –4 (minimum 8). Intelligence set to 2, Wisdom set to 10, Charisma set to 1.',
    features: [
      {
        scalingType: 'flat',
        name: 'Link to Creator (Ex)',
        description:
          'A yellow musk zombie cannot move more than 200 feet away from the yellow musk creeper that created it.',
      },
      {
        scalingType: 'flat',
        name: 'Sprout New Creeper (Ex)',
        description:
          'After approximately 2 months of existence, the yellow musk zombie wanders up to 1 mile from its creator, collapses, and dies. Within one hour, new yellow musk creepers sprout from its corpse.',
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

  // 488. Zombie (CR varies)
  {
    id: 'zombie-template',
    name: 'Zombie',
    description:
      "An acquired template applied to any corporeal creature except undead. The creature's type changes to undead. It loses Constitution and Intelligence; Wisdom and Charisma become 10. Strength +2, Dexterity –2. Natural armor increases by size. Racial HD become d8s with bonus HD by size. All racial feat, skill ranks, and special attacks are lost. It gains DR 5/slashing, the staggered condition (only one move or standard action per round, but can charge), and retains all natural weapons plus a slam attack dealing damage as if one size larger. Notable variants include: Fast Zombie (Dex +2 instead of –2, no DR, no staggered, Quick Strikes), Plague Zombie (contagious zombie rot disease, Death Burst explosion on death), and Void Zombie (Fast + tongue blood drain).",
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: -2 },
    ],
    abilityScoreChangeNote:
      'Constitution and Intelligence scores are lost (undead). Wisdom and Charisma set to 10.',
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'slashing' },
    immunities: [
      'undead immunities (cold, nonlethal damage, paralysis, sleep, stunning, disease, death effects)',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Staggered (Ex)',
        description:
          'Zombies have poor reflexes and can only perform a single move action or standard action each round. A zombie can move up to its speed and attack in the same round as a charge action.',
      },
      {
        scalingType: 'flat',
        name: 'Undead Traits',
        description:
          'No Constitution score (Wisdom and Charisma set to 10, HP from Charisma modifier). Racial HD become d8s. All skills and feats lost; gains Toughness as a bonus feat. No additional feats from HD increases. Natural armor increases by size: Tiny/smaller +0, Small +1, Medium +2, Large +3, Huge +4, Gargantuan +7, Colossal +11.',
      },
      {
        scalingType: 'flat',
        name: 'Variant: Fast Zombie',
        description:
          'Speed +10 ft.; no DR 5/slashing; gains Quick Strikes (additional slam attack on a full attack); Dex +2 instead of –2; loses the staggered condition.',
      },
      {
        scalingType: 'flat',
        name: 'Variant: Plague Zombie',
        description:
          'No DR 5/slashing. Death Burst: explodes on death, exposing adjacent creatures to zombie rot disease. Disease (zombie rot): Fort save DC 10 + 1/2 HD + Cha modifier; onset 1d4 days; 1d2 Con damage/day; cured by 2 consecutive saves. Corpses rise as plague zombies in 2d6 hours.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 489. Zombie Lord (CR +1)
  {
    id: 'zombie-lord',
    name: 'Zombie Lord',
    description:
      'An acquired template for any corporeal creature except undead, with a minimum Intelligence of 3. Unlike common zombies, zombie lords retain their cunning and do not gain the staggered condition. The creature becomes undead, loses Constitution, gains Strength +2, Dexterity +2, and adds 2 racial HD (creatures without racial HD gain 2 undead HD). DR 5/slashing, channel resistance +4, and all standard undead traits apply. Racial HD convert to d8s. Skills: 4 + Int modifier per racial HD. Gains Toughness as a bonus feat. Any evil alignment.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 2 },
    ],
    abilityScoreChangeNote:
      'Constitution score is lost (undead). Racial HD convert to d8s and +2 racial HD are added.',
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'slashing' },
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Undead Mastery',
        description:
          'Unlike common zombies, zombie lords do not gain the staggered condition. They retain their intelligence (minimum 3) and full action economy. Channel resistance +4. Skills: 4 + Int modifier per racial HD.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Hit Dice',
        description:
          'The zombie lord gains 2 additional racial Hit Dice (d8s). Creatures without racial HD gain 2 undead HD instead.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 4' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 490. Zombie, Juju (CR +1 or +2) [TOHC version]
  {
    id: 'juju-zombie-tohc',
    name: 'Zombie, Juju (TOHC)',
    description:
      'An acquired template from the Tome of Horrors Complete, applied to humanoids and monstrous humanoids. CR is equal to base creature if 5 HD or fewer; +1 if 6–10 HD; +2 if 11+ HD. The creature becomes undead (augmented), retaining class HD and BAB. Strength +4, Dexterity +2, Charisma +4; Intelligence becomes 4, Wisdom becomes 10; Constitution score lost. Natural armor increases by size. Gains channel resistance +4, DR 5/magic and slashing (DR 10 at 11+ HD), immunity to cold, electricity, and magic missiles, and fire resistance 10. Retains weapons and gains a slam attack. Gains Improved Initiative and Toughness, and a +8 racial bonus to Climb.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote:
      'Intelligence set to 4, Wisdom set to 10, Constitution score lost (undead). CR: base creature if 5 HD or fewer; +1 at 6–10 HD; +2 at 11+ HD.',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 10, value: 5, bypassedBy: 'magic and slashing' },
        { minHD: 11, value: 10, bypassedBy: 'magic and slashing' },
      ],
    },
    resistances: [{ energyType: 'fire', value: 10 }],
    immunities: ['cold', 'electricity', 'magic missiles', 'undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'The juju zombie gains channel resistance +4.',
      },
      {
        scalingType: 'flat',
        name: 'Slam Attack',
        description:
          'Gains a slam attack dealing damage as if one size category larger (Medium = 1d6). Natural weapons function as magic for overcoming DR.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats and Skills',
        description:
          'Gains Improved Initiative and Toughness. Gains a +8 racial bonus on Climb checks. Flight maneuverability (if applicable) drops to clumsy.',
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

  // 491. Zombie, Juju (CR +1) [Bestiary 2 version]
  {
    id: 'juju-zombie',
    name: 'Zombie, Juju',
    description:
      'An acquired template from Pathfinder Roleplaying Game Bestiary 2, applied to any living corporeal creature. CR is +1. The creature becomes undead (retaining subtypes except alignment and kind subtypes). Strength +4, Dexterity +2; Constitution score replaced by Charisma for HP and saves. Natural armor +3 above base. Racial HD convert to d8s. Gains channel resistance +4, DR 5/magic and slashing (DR 10 at 11+ HD), fire resistance 10, and immunity to cold, electricity, and magic missiles. Retains all weapons and proficiencies; gains a slam attack dealing damage as if one size larger. Natural weapons are treated as magic. Gains Improved Initiative and Toughness and a +8 racial bonus to Climb. Loses most special attacks and qualities.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
    ],
    abilityScoreChangeNote:
      'Constitution replaced by Charisma for HP and saves (undead). Natural armor +3 over base creature.',
    naturalArmorChange: 3,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 10, value: 5, bypassedBy: 'magic and slashing' },
        { minHD: 11, value: 10, bypassedBy: 'magic and slashing' },
      ],
    },
    resistances: [{ energyType: 'fire', value: 10 }],
    immunities: ['cold', 'electricity', 'magic missiles', 'undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'The juju zombie gains channel resistance +4.',
      },
      {
        scalingType: 'flat',
        name: 'Slam Attack',
        description:
          'Gains a slam attack dealing damage as if one size category larger. Natural weapons are treated as magic for overcoming DR.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats and Skills',
        description:
          'Gains Improved Initiative and Toughness as bonus feats. Gains +8 racial bonus on Climb checks. Flight maneuverability (if applicable) drops to clumsy; magical flight is unaffected.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 2' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 492. Zombie, Slime (CR varies)
  {
    id: 'zombie-slime',
    name: 'Zombie, Slime',
    description:
      "An acquired third-party template (also called Olive Slime Creature) for any corporeal creature except undead, constructs, and elementals. The creature's type changes to plant. Strength +2, Dexterity –2; Intelligence becomes 2, Wisdom becomes 10, Charisma becomes 1. Class levels are dropped (minimum 1 HD), remaining dice doubled and converted to d8s. BAB equals 3/4 HD. Natural armor increases by size. Gains darkvision 60 ft., low-light vision, DR 5/— (1–5 HD), DR 10/— (6–10 HD), DR 15/— (11+ HD), immunity to electricity, and all plant-type immunities. Loses all base creature attacks; gains a slam attack by size. Its slam inflicts olive slime (Fortitude save or become infested). On death, it dissolves into a pool of olive slime. It maintains a mind link with its creator olive slime (200-mile range) and telepathic bonds with fellow slime zombies (100-ft range). Speed –10 ft. (minimum 20 ft.).",
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'plant',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: -2 },
    ],
    abilityScoreChangeNote:
      'Intelligence set to 2, Wisdom set to 10, Charisma set to 1. Class levels dropped; remaining dice doubled and converted to d8s.',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 5, bypassedBy: '—' },
        { minHD: 6, maxHD: 10, value: 10, bypassedBy: '—' },
        { minHD: 11, value: 15, bypassedBy: '—' },
      ],
    },
    immunities: ['electricity', 'plant-type immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Infestation (Ex)',
        description:
          "Any creature hit by the slime zombie's slam attack must succeed on a Fortitude save (DC based on Constitution) or become infested with olive slime.",
      },
      {
        scalingType: 'flat',
        name: 'Death Throes (Ex)',
        description:
          'Upon reaching 0 hit points, the slime zombie transforms in a single round into a pool of olive slime.',
      },
      {
        scalingType: 'flat',
        name: 'Mind Link (Su)',
        description:
          'The slime zombie has a symbiotic connection with its creator olive slime, allowing communication over up to 200 miles on the same plane.',
      },
      {
        scalingType: 'flat',
        name: 'Telepathic Bond (Su)',
        description:
          'The slime zombie can communicate with other slime zombies created by the same olive slime within 100 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Green Slime Vulnerability',
        description: 'The slime zombie takes 2d6 damage per round from contact with green slime.',
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

  // 493. Saint (LA +2 / CR +2) [Book of Exalted Deeds]
  {
    id: 'saint',
    name: 'Saint',
    description:
      'An acquired template representing a living creature of good alignment whose entire life embodies celestial virtue. Saints are mortals elevated through sanctification, their type changing to outsider (native). They gain divine protections including damage reduction, fast healing, immunities, and a protective aura of celestial light.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    crAdjustment: 2,
    laAdjustment: 2,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful good', 'neutral good', 'chaotic good'] },
      { type: 'creature_type_excluded', excluded: ['outsider', 'elemental'] },
    ],
    typeChange: 'outsider',
    subtypeGains: ['native'],
    abilityScoreChanges: [
      { ability: 'CON', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 4, maxHD: 7, value: 5, bypassedBy: 'magic' },
        { minHD: 8, maxHD: 11, value: 5, bypassedBy: 'evil' },
        { minHD: 12, value: 10, bypassedBy: 'evil' },
      ],
    },
    resistances: [
      { energyType: 'acid', value: 'immunity' },
      { energyType: 'cold', value: 'immunity' },
      { energyType: 'electricity', value: 'immunity' },
      { energyType: 'fire', value: 10 },
    ],
    immunities: ['petrification'],
    fastHealing: 'floor(HD / 2), maximum 10',
    spellLikeAbilities: [
      {
        spellName: 'Guidance',
        frequency: 'at_will',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
      {
        spellName: 'Resistance',
        frequency: 'at_will',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
      {
        spellName: 'Virtue',
        frequency: 'at_will',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
      {
        spellName: 'Bless',
        frequency: 'at_will',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Holy Power (Su)',
        description:
          "The save DCs of any and all of the saint's special attacks, including spells as well as spell-like, supernatural, and extraordinary abilities, increase by +2.",
        id: 'holy-power',
        activationMode: 'passive',
        shortDescription: '+2 to save DCs of all special attacks, spells, and abilities',
      },
      {
        scalingType: 'flat',
        name: 'Holy Touch (Su)',
        description:
          "A saint's melee attacks with any weapon (or unarmed) deal an additional 1d6 points of holy damage against evil creatures, and 1d8 points against evil undead and evil outsiders. Any evil creature that strikes a saint with a natural weapon takes holy damage as if hit by the saint's attack.",
        id: 'holy-touch',
        activationMode: 'passive',
        shortDescription:
          'Melee attacks deal +1d6 holy damage to evil, +1d8 to evil undead/outsiders',
      },
      {
        scalingType: 'flat',
        name: 'Protective Aura (Su)',
        description:
          "As a free action, a saint can surround herself with a nimbus of light having a radius of 20 feet. This acts as a double-strength magic circle against evil and as a lesser globe of invulnerability, both as cast by a cleric whose level equals the saint's Hit Dice.",
        id: 'protective-aura',
        activationMode: 'toggle',
        shortDescription:
          'Free action — 20-ft radius double magic circle against evil + lesser globe of invulnerability (CL = HD)',
      },
      {
        scalingType: 'flat',
        name: 'Keen Vision (Ex)',
        description: 'Saints have low-light vision and 60-foot darkvision.',
      },
      {
        scalingType: 'flat',
        name: 'Tongues (Su)',
        description:
          'A saint can speak with any creature that has a language, as though using a tongues spell cast by a 14th-level cleric. This ability is always active.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Book of Exalted Deeds' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 494. Redeemed Mord-Sith Creature (CR +1 or +2)
  {
    id: 'redeemed-mord-sith-creature',
    name: 'Redeemed Mord-Sith Creature',
    description:
      'A creature that has undergone the Mord-Sith transformation but been redeemed retains the core disciplines of the order — redirection, spelldrinker, and agiel techniques — while discarding its darker aspects. CR increases by +1 for creatures with fewer than 10 HD and by +2 for creatures with 10 or more HD.',

    acquisitionType: 'acquired',
    isSimpleTemplate: false,

    prerequisites: [
      { type: 'alignment', allowed: ['lawful good', 'lawful neutral', 'lawful evil'] },
    ],

    abilityScoreChanges: [{ ability: 'CHA', change: 4 }],

    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 9,
        crValue: 1,
        label: '1–9 HD',
        features: [
          {
            scalingType: 'flat',
            name: 'Agiel Strike (Ex)',
            id: 'agiel-strike',
            activationMode: 'conditional',
            shortDescription: 'Unarmed/agiel melee attacks deal +1d6 pain damage (Fort negates)',
            description:
              "The creature's unarmed strikes and agiel attacks deal an additional 1d6 points of pain damage. A successful Fortitude save (DC 10 + 1/2 HD + Cha modifier) negates the pain damage. The creature may use this ability a number of times per day equal to 3 + its Charisma modifier.",
            resourcePool: {
              id: 'agiel-strike-pool',
              name: 'Agiel Strike',
              rechargeOn: 'rest',
              maxFormula: '3 + chaMod',
              restRecoveryMode: 'full',
            },
          },
          {
            scalingType: 'flat',
            name: 'Spelldrinker (Su)',
            id: 'spelldrinker',
            activationMode: 'passive',
            shortDescription: 'Immune to spells/SLAs that allow spell resistance',
            description:
              'The creature is immune to any spell or spell-like ability that allows spell resistance. When a spell that allows SR targets the creature and fails to penetrate, the creature absorbs the magical energy and heals 1 hit point per spell level.',
          },
          {
            scalingType: 'flat',
            name: 'Redirection (Ex)',
            id: 'redirection',
            activationMode: 'conditional',
            shortDescription: 'Redirect targeted spells/SLAs to a new target (uses = HD/day)',
            description:
              'As an immediate action, the creature can redirect a spell or spell-like ability that targets it to another creature within 30 feet. The redirected effect uses the original attack roll and saving throw DC. The creature may use this ability a number of times per day equal to its total HD.',
            resourcePool: {
              id: 'redirection-pool',
              name: 'Redirection',
              rechargeOn: 'rest',
              maxFormula: 'level',
              restRecoveryMode: 'full',
            },
          },
          {
            scalingType: 'flat',
            name: 'Spell Resistance (Ex)',
            id: 'spell-resistance',
            activationMode: 'passive',
            shortDescription: 'SR = 10 + HD',
            description: 'The creature gains spell resistance equal to 10 + its total HD.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 10,
        crValue: 2,
        label: '10+ HD',
        features: [
          {
            scalingType: 'hd_threshold',
            name: 'AC Bonus (Ex)',
            id: 'ac-bonus',
            minimumHD: 10,
            activationMode: 'passive',
            shortDescription: 'Add CHA modifier to AC when unarmored and unencumbered',
            description:
              'When the creature is unarmored and unencumbered, it adds its Charisma modifier (if positive) as a deflection bonus to its Armor Class.',
          },
          {
            scalingType: 'hd_threshold',
            name: 'Improved Spell Resistance (Ex)',
            id: 'improved-spell-resistance',
            minimumHD: 10,
            activationMode: 'passive',
            shortDescription: 'SR increases by +5 (total SR = 15 + HD)',
            description:
              "At 10 or more HD, the creature's spell resistance increases by an additional 5, for a total of 15 + its total HD.",
          },
          {
            scalingType: 'hd_threshold',
            name: 'Counterstrike (Ex)',
            id: 'counterstrike',
            minimumHD: 10,
            activationMode: 'conditional',
            shortDescription: 'Immediate action melee attack when a spell fails to penetrate SR',
            description:
              "Whenever a spell or spell-like ability fails to penetrate the creature's spell resistance, the creature may make a single melee attack as an immediate action against the caster, provided the caster is within reach. The creature may use this ability a number of times per day equal to 3 + its Charisma modifier.",
            resourcePool: {
              id: 'counterstrike-pool',
              name: 'Counterstrike',
              rechargeOn: 'rest',
              maxFormula: '3 + chaMod',
              restRecoveryMode: 'full',
            },
          },
        ],
      },
    ],

    features: [],

    sourceInfo: { type: 'homebrew', createdBy: 'Mark Willisford' },
    verificationStatus: 'needs_review',
    visibility: 'campaign',
    rev: 1,
  },
];
