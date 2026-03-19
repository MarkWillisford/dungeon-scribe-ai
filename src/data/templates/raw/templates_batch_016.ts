// Batch 016 | first: 'Sentient Serpent Template (CR +2)' | last: 'Sorcerer Creature (CR +1, +2, or +3)' | count: 24
// NOTE: Entry 390 (Simple Class Templates index page) was skipped — it is a navigation index only, with no standalone template definition.

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_016: TemplateDefinition[] = [
  // 376. Sentient Serpent Template (CR +2)
  {
    id: 'sentient-serpent',
    name: 'Sentient Serpent Template',
    description:
      'An inherited or acquired template applicable to any snake with an Intelligence score of 5 or less. The template transforms the snake into a magical beast with sentience, speech, and potentially sorcerous power. The sentient serpent gains human-like intellect and personality while retaining its serpentine form, and has a 25% chance of manifesting 1d4 sorcerer levels.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
      { type: 'special', description: 'Must be a snake with Intelligence score of 5 or less' },
    ],
    typeChange: 'magical beast',
    abilityScoreChanges: [
      { ability: 'INT', change: 10 },
      { ability: 'WIS', change: 3 },
      { ability: 'CHA', change: 10 },
    ],
    abilityScoreChangeNote:
      'INT increases by +3d6 (average +10), WIS by +1d6 (average +3), CHA by +3d6 (average +10). The creature also gains 2d4 skill points and the ability to speak 1d4 languages. Alignment may be changed to any neutral option.',
    features: [
      {
        scalingType: 'flat',
        name: 'Speech',
        description:
          'The sentient serpent gains the ability to speak 1d4 languages, chosen by the GM. It can communicate verbally with any creature that shares a language.',
      },
      {
        scalingType: 'flat',
        name: 'Automatic Feats',
        description:
          'All sentient serpents gain three bonus feats chosen from the following list: Eschew Materials, Iron Will, Lightning Reflexes, Skill Focus, Silent Spell, or Still Spell.',
      },
      {
        scalingType: 'flat',
        name: 'Greater Eschew Materials (Ex)',
        description:
          'The sentient serpent can cast any spell with a material component costing 100 gp or less without needing that component.',
      },
      {
        scalingType: 'flat',
        name: 'Spell Stillness (Ex)',
        description:
          'When the sentient serpent uses the Still Spell metamagic feat, the spell slot level does not increase as it normally would.',
      },
      {
        scalingType: 'flat',
        name: 'Sorcery (25% Chance)',
        description:
          "There is a 25% chance the sentient serpent manifests 1d4 sorcerer levels in addition to the template's other benefits. Suggested bloodlines include aberrant, abyssal, arcane, destined, infernal, protean, serpentine, and shadow. These sorcerer levels stack with any existing spellcasting ability the creature possesses.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Inner Sea Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 377. Serpentine Undead Template (CR +1)
  {
    id: 'serpentine-undead',
    name: 'Serpentine Undead Template',
    description:
      'An acquired template applicable to corporeal humanoids and snake-like creatures (including couatls, nagas, mariliths, and similar beings with actual serpentine anatomy — scales, slit eyes, or forked tongues alone do not qualify). The ritual transforms the creature into an undead serpentine horror that retains its physical form while losing its living physiology.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Must be a corporeal humanoid or a creature with actual snake anatomy (couatl, naga, marilith, etc.). Merely having scales, slit eyes, or forked tongues does not qualify.',
      },
    ],
    typeChange: 'undead',
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Undead Traits',
        description:
          'The serpentine undead gains all standard undead traits: immunity to all mind-affecting effects, bleed, disease, death effects, exhaustion, fatigue, paralysis, poison, sleep effects, and stunning. It is not subject to nonlethal damage, ability drain, or energy drain, and is immune to damage to physical ability scores. It is immune to effects requiring a living physiology.',
      },
      {
        scalingType: 'flat',
        name: 'Alignment',
        description: 'The serpentine undead shifts to evil alignment.',
      },
      {
        scalingType: 'flat',
        name: 'Poisonous Bite (Ex)',
        description:
          "The serpentine undead gains a venomous bite attack if it does not already possess one. Bite — injury; save Fort DC 14; frequency 1/round for 6 rounds; effect 1d2 Con; cure 1 save. If the creature already had a bite attack, it becomes poisonous using these statistics. The creature's Hit Dice become d8s.",
      },
      {
        scalingType: 'flat',
        name: 'Natural Weapons',
        description:
          'The creature retains all natural weapons from its base form and all manufactured weapon proficiencies. If lacking a bite attack before applying this template, it gains one whose damage is determined by its size (Fine 1d2 through Colossal 4d6).',
      },
      {
        scalingType: 'flat',
        name: 'Lost Abilities',
        description:
          'The serpentine undead loses all spellcasting ability and all spell-like and supernatural abilities it possessed in life. It retains extraordinary abilities that do not depend on a living physiology.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Inner Sea Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 378. Shadow Animal (CR +varies)
  {
    id: 'shadow-animal',
    name: 'Shadow Animal',
    description:
      'An inherited template applicable to any living, corporeal animal. The creature becomes a native outsider touched by the Plane of Shadow, gaining shadowy powers, enhanced senses, and the ability to blend into darkness. Shadow animals are usually non-good in alignment and are found in shadow-touched regions.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 9,
        crValue: 1,
        label: '1–9 HD (CR +1)',
        features: [],
      },
      {
        tierIndex: 1,
        minHD: 10,
        crValue: 2,
        label: '10+ HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Umbral Fast Healing (Ex)',
            description:
              'Shadow animals with 10 or more HD gain fast healing 1 whenever they are in dim light or darkness.',
          },
        ],
      },
    ],
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['animal'] }],
    typeChange: 'outsider',
    subtypeGains: ['native'],
    typeChangeNote:
      'Hit Dice, Base Attack Bonus, and saves remain unchanged despite type change to outsider.',
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: -1,
    features: [
      {
        scalingType: 'flat',
        name: 'Senses',
        description:
          'The shadow animal gains darkvision 60 feet and low-light vision if it does not already possess them.',
      },
      {
        scalingType: 'flat',
        name: 'Speed Increase',
        description: 'All of the shadow animal\'s movement speeds increase by 10 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Shadow Blend (Su)',
        description:
          'In any illumination other than bright light, a shadow animal blends into the shadows, giving it concealment (20% miss chance). The shadow animal can suppress or resume this ability as a free action.',
      },
      {
        scalingType: 'flat',
        name: 'Shadow Powers (Su)',
        description:
          'The shadow animal gains one special ability per 3 HD (rounded up) chosen from the following list. Each ability may be selected multiple times if noted. Blinding Savagery (Ex): Apply to rake, rend, or trample; damaged targets must succeed at a Fortitude save (DC 10 + 1/2 HD + Wisdom modifier) or be blinded for 1 round; selectable up to three times for different abilities. Energy Resistance (Ex): Grants cold resistance 10 or upgrades existing cold resistance to immunity; selectable twice. Evasion (Ex): As the rogue ability. Fear Aura (Su): 60-foot radius; creatures that can see or hear the shadow animal must succeed at a Will save (DC 10 + 1/2 HD + Charisma modifier) or be shaken for as long as they remain in the aura; creatures cannot be affected again for 24 hours; mind-affecting fear effect. Frightful Presence (Su): Activates as a free action when charging, attacking in a surprise round, or succeeding at a DC 15 Intimidate check; 30-foot range; 5d6 round duration. Hide in Plain Sight (Su): May use Stealth to hide while observed, provided within 10 feet of a shadow other than its own. See in Darkness (Su): Sees perfectly in all darkness including magical darkness. Shadow Bite (Su): One natural attack can extend 5 feet through the creature\'s own shadow; damaged targets must succeed at a Fortitude save (DC 10 + 1/2 HD + Charisma modifier) or take 1 Strength damage in addition to normal damage. Shadow Form (Su): Once per day as a standard action, transform into an animate pool of darkness for up to 10 minutes (functions as gaseous form); duration usable in 1-minute increments. Shadow Spirit (Su): +4 racial bonus on saves against energy drain and death effects; selecting this ability a second time grants immunity to those effects instead. Shadow Step (Su): Teleport up to 10 feet per Hit Die as a move action, usable once per 1d4 rounds, provided both the starting and ending positions are in dim light or darkness. Spectral Attacks (Su): Natural attacks affect incorporeal creatures as if possessing the ghost touch quality. Spell Resistance (Ex): Gain SR equal to 11 + CR (does not stack with base creature SR). Umbral Fast Healing (Ex): Gain fast healing 1 in dim light or darkness (requires 10+ HD). Vanish (Su): As a swift action, become invisible for 1 round; usable a number of rounds per day equal to Hit Dice, in 1-round increments.',
      },
      {
        scalingType: 'flat',
        name: 'Languages',
        description:
          'Gains an understanding of Common and Infernal if the base creature could not already speak; it understands these languages but cannot necessarily speak them.',
      },
      {
        scalingType: 'flat',
        name: 'Skills',
        description:
          'Gains a +4 racial bonus on Intimidate and Stealth checks. Skill points per racial HD become 6 + Intelligence modifier. Class skills: Acrobatics, Climb, Fly, Intimidate, Perception, Stealth, Swim.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Nidal, Land of Shadows',
    },
    visibility: 'global',
    rev: 1,
  },

  // 379. Shadow Creature (CR +1)
  {
    id: 'shadow-creature',
    name: 'Shadow Creature',
    description:
      'An inherited template applicable to any living creature, representing a being native to or strongly connected with the Plane of Shadow. Shadow creatures are outsiders with the augmented subtype that dwell in the darkness between worlds, gaining resistance to energy and the ability to blend into shadow.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'outsider',
    subtypeGains: ['augmented'],
    typeChangeNote:
      'Base Attack Bonus, saves, and skill ranks remain unchanged despite type change to outsider.',
    features: [
      {
        scalingType: 'flat',
        name: 'Alignment',
        description: 'Any, typically nongood.',
      },
      {
        scalingType: 'flat',
        name: 'Senses',
        description:
          'Gains darkvision 60 feet and low-light vision in addition to all base creature senses.',
      },
      {
        scalingType: 'hd_threshold',
        name: 'Energy Resistance and Damage Reduction (Ex)',
        description:
          '1–4 HD: resist cold 5 and resist electricity 5. 5–10 HD: resist cold 10, resist electricity 10, and DR 5/magic. 11+ HD: resist cold 15, resist electricity 15, and DR 10/magic.',
        minimumHD: 1,
      },
      {
        scalingType: 'flat',
        name: 'Shadow Blend (Su)',
        description:
          'In any illumination other than bright light, a shadow creature blends into the shadows, gaining concealment (20% miss chance). The shadow creature can suppress or resume this ability as a free action.',
      },
      {
        scalingType: 'flat',
        name: 'Spell Resistance (Ex)',
        description:
          "The shadow creature gains spell resistance equal to the base creature's CR + 6.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 4',
    },
    visibility: 'global',
    rev: 1,
  },

  // 380. Shadow Lord (CR +2)
  {
    id: 'shadow-lord',
    name: 'Shadow Lord',
    description:
      'An acquired template applicable to shadow creatures with 5 or more Hit Dice, representing the apex of shadow-touched power. Shadow lords are powerful evil entities that have fully mastered the magic of the Plane of Shadow, commanding darkness, walking between planes, and unleashing devastating shadow-fueled attacks.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful evil', 'neutral evil', 'chaotic evil'] },
      { type: 'min_hd', minimum: 5 },
      {
        type: 'special',
        description: 'Base creature must already have the shadow creature template applied.',
      },
    ],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'See in Darkness (Su)',
        description:
          'The shadow lord can see perfectly in all darkness, including magical darkness.',
      },
      {
        scalingType: 'hd_threshold',
        name: 'Improved Energy Resistance and Damage Reduction (Ex)',
        description:
          'Replaces shadow creature resistances. 5–10 HD: resist cold 15, resist electricity 15, DR 10/magic. 11–15 HD: resist cold 20, resist electricity 20, DR 15/magic. 16+ HD: resist cold 30, resist electricity 30, DR 20/magic.',
        minimumHD: 5,
      },
      {
        scalingType: 'flat',
        name: 'Incorporeal Step (Su)',
        description:
          'While moving, the shadow lord gains the incorporeal subtype and a deflection bonus to AC equal to its Charisma modifier. This benefit is lost whenever the shadow lord is not moving.',
      },
      {
        scalingType: 'flat',
        name: 'Touch Attack (Su)',
        description:
          'The shadow lord can make a melee touch attack as a standard action that deals 1d6 damage (Fortitude save negates; DC = 10 + 1/2 HD + Charisma modifier). On a critical hit, the target also suffers 1 point of Constitution damage.',
      },
      {
        scalingType: 'flat',
        name: 'Cloying Gloom Blast (Su)',
        description:
          '3/day as a standard action, the shadow lord unleashes a 30-foot cone of cloying shadow. Creatures that fail a Fortitude save are slowed (as the slow spell) and blinded for the duration of the effect.',
      },
      {
        scalingType: 'flat',
        name: 'Planar Thinning (Su)',
        description:
          '1/day as a full-round action, the shadow lord can thin the boundary between the Material Plane and the Plane of Shadow, functioning as a gate spell. This ability is immediately dispelled if the shadow lord enters an area of normal or bright light.',
      },
      {
        scalingType: 'flat',
        name: 'Skills',
        description: 'Gains a +8 racial bonus on Stealth checks.',
      },
    ],
    spellLikeAbilities: [
      {
        spellName: 'ray of sickening',
        frequency: 'at_will',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
      {
        spellName: 'shadow conjuration',
        frequency: '3/day',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
      {
        spellName: 'shadow step',
        frequency: '3/day',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
      {
        spellName: 'greater shadow conjuration',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
        condition: '11+ HD only',
      },
      {
        spellName: 'shadow walk',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 4',
    },
    visibility: 'global',
    rev: 1,
  },

  // 381. Shadow-Traced Creature (CR +2)
  {
    id: 'shadow-traced-creature',
    name: 'Shadow-Traced Creature',
    description:
      'An acquired template from Green Ronin\'s Advanced Bestiary, applicable to intelligent corporeal creatures. The creature\'s shadow becomes semi-sentient and can manifest as independent shadow traces — semi-real copies that can act, fight, and cast spells, making the host nearly impossible to pin down. The template sacrifices some mental coherence for this distributed existence.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['construct', 'undead'] },
      { type: 'special', description: 'Must be a corporeal creature with an Intelligence score.' },
    ],
    subtypeGains: ['extraplanar'],
    typeChangeNote:
      'Gains the extraplanar subtype if not already possessed. Base attack bonuses, saves, and skill points remain unchanged.',
    abilityScoreChanges: [
      { ability: 'WIS', change: -2 },
      { ability: 'CHA', change: 2 },
    ],
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'magic' },
    resistances: [{ energyType: 'cold', value: 10 }],
    srFormula: 'HD + 10',
    features: [
      {
        scalingType: 'flat',
        name: 'Speed Increase',
        description: 'All movement speeds increase by 10 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Lost Immunity',
        description:
          'The creature loses immunity to mind-affecting effects if it previously possessed such immunity.',
      },
      {
        scalingType: 'flat',
        name: 'Distributed Mind (Su)',
        description:
          'When the shadow-traced creature is affected by a mind-affecting spell or effect, other shadow traces (or the main creature) can attempt the same saving throw 1 round later. If any version succeeds, all versions are protected. A natural 1 on any save prevents this ability from functioning for 24 hours.',
      },
      {
        scalingType: 'flat',
        name: 'Sacrifice Transposition (Su)',
        description:
          'When reduced below 0 hit points while at least one active shadow trace exists, the creature may switch places with a trace as an immediate action, negating the damage and destroying that trace. This ability can be used once per round.',
      },
      {
        scalingType: 'flat',
        name: 'Leeching Absorption (Su)',
        description:
          "When a hostile spell fails to overcome the creature's spell resistance, all active shadow traces heal hit points equal to that spell's effective spell level.",
      },
      {
        scalingType: 'flat',
        name: 'Shadow Traces (Su)',
        description:
          "The shadow-traced creature can create up to three semi-real independent copies of itself as immediate actions at will. Each trace has half the base creature's hit points, acts on the creature's initiative, and possesses duplicates of its abilities and equipment. Semi-real equipment disintegrates after 1 round if disarmed or after use if it is ammunition. When all traces are destroyed, the creature becomes staggered for 1 round and cannot create new traces for 24 hours.",
      },
      {
        scalingType: 'flat',
        name: 'Traced Magic (Su)',
        description:
          "While traces are active, all magic originating from the traces or the base creature functions as illusion (shadow) subschool effects. Creatures that succeed on a Will save to disbelieve experience only 50% of the spell's normal effect.",
      },
      {
        scalingType: 'flat',
        name: 'Skills',
        description: 'Gains a +4 racial bonus on Stealth checks in dim light or darkness.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 382. Shell Creature (CR +0)
  {
    id: 'shell-creature',
    name: 'Shell Creature',
    description:
      'An acquired template from Legendary Games\' Arcforge Universe Cyclopedia, applicable to any corporeal creature with both a Constitution and an Intelligence score. The shell creature serves as a biological host body for artificial intelligence, functioning as a codelord\'s vehicle. Its will is fully suppressed by an implanted shackle device, and it can be possessed by an AI at any time.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Must be a corporeal creature with both a Constitution score and an Intelligence score.',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'AI Host (Ex)',
        description:
          'The shell creature functions as a host body for an artificial intelligence, gaining the aggregate template when inhabited by an AI. Unlike normal possession, the shell creature is never allowed a Will save to deny the AI possession of its body; the codelord\'s shackle implant ensures total compliance.',
      },
      {
        scalingType: 'flat',
        name: 'Silent Will (Ex)',
        description:
          "The creature retains its Intelligence score but functions under continuous mind control that cannot be dispelled while the codelord's shackle implant remains installed. The creature obeys the commands of the creature or AI designated as its controller at the time the shackle was installed. Multiple masters can be designated.",
      },
      {
        scalingType: 'flat',
        name: 'Stasis (Ex)',
        description:
          'As a standard action, the shell creature can enter a state of suspended animation. While in stasis it cannot take any actions but requires no food or air and does not age. It remains fully vulnerable to damage. The creature exits stasis immediately upon command from its designated master.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Arcforge Universe Cyclopedia',
    },
    visibility: 'global',
    rev: 1,
  },

  // 383. Shield Guardian (CR +2)
  {
    id: 'shield-guardian',
    name: 'Shield Guardian',
    description:
      'An acquired template applicable to any true golem, transforming it into a magical protector bound to a specially crafted amulet and its wearer. Shield guardians are constructed to defend their masters, transferring damage, storing spells, and locating their charges across vast distances. The template requires significant additional construction cost and magical expertise.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
      {
        type: 'special',
        description:
          'Must be a true golem. Requires an amulet crafted for 20,000 gp, additional base materials (25,000 gp), laboratory setup (500 gp), and the creator must have a caster level at least 2 higher than the base golem requirement. Required spells: discern location and shield or shield other.',
      },
    ],
    fastHealing: '5',
    features: [
      {
        scalingType: 'flat',
        name: 'Controlled (Ex)',
        description:
          "A shield guardian that has the berserk special attack cannot go berserk as long as the wearer of its amulet is within 30 feet. This ability suppresses the golem's berserk condition through the amulet bond.",
      },
      {
        scalingType: 'flat',
        name: 'Find Master (Su)',
        description:
          "The shield guardian can locate its amulet wearer across any distance, as long as both are on the same plane. This functions like a locate creature effect that automatically succeeds when seeking the guardian's master.",
      },
      {
        scalingType: 'flat',
        name: 'Guard (Ex)',
        description:
          "When adjacent to its master, the shield guardian causes all attacks directed at the amulet wearer to suffer a –2 penalty on attack rolls.",
      },
      {
        scalingType: 'flat',
        name: 'Shield Other (Sp)',
        description:
          "The master can activate this ability as a standard action while within 100 feet of the shield guardian. Half of any damage dealt to the amulet wearer is transferred to the shield guardian instead. Unlike most golem defenses, this transferred damage bypasses the guardian's usual damage immunities.",
      },
      {
        scalingType: 'flat',
        name: 'Spell Storing (Sp)',
        description:
          "The shield guardian can store one spell of 4th level or lower cast into it by its master. The guardian casts the stored spell on command or when a triggering condition set by the master occurs. A spell stored in this way is immediately lost if the guardian stores another spell.",
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 384. Shifter Creature (CR +1 or +2)
  {
    id: 'shifter-creature',
    name: 'Shifter Creature',
    description:
      'An acquired template applicable to any creature, granting it the shapechanging powers of the shifter class. Creatures with fewer than 7 HD gain a shifter aspect ability to partially transform, while those with 7 or more HD also gain wild shape capability. The template represents a creature that has developed or been granted a deep connection to primal shapeshifting magic.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 6,
        crValue: 1,
        label: 'Fewer than 7 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Shifter Aspect (Su)',
            description:
              "The creature can use a shifter aspect for a number of minutes per day equal to 3 + 1/2 its HD. It chooses a single aspect whose bonuses are determined using its HD as its effective shifter level. The creature can use this ability in multiple 1-minute increments.",
          },
          {
            scalingType: 'flat',
            name: 'Defensive Instinct (Ex)',
            description:
              "The creature gains a +1 bonus per effective shifter level (equal to its HD) on saving throws, Perception checks, and initiative checks.",
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 7,
        crValue: 2,
        label: '7+ HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Shifter Aspect (Su)',
            description:
              "The creature can use a shifter aspect for a number of minutes per day equal to 3 + 1/2 its HD, choosing a single aspect and determining bonuses using its HD as its effective shifter level.",
          },
          {
            scalingType: 'flat',
            name: 'Wild Shape (Su)',
            description:
              "The creature can use wild shape a number of times per day equal to 1 + 1/4 its HD. Its effective druid level for wild shape equals its HD – 3. Duration and available forms are determined by this effective level.",
          },
          {
            scalingType: 'flat',
            name: 'Defensive Instinct (Ex)',
            description:
              "The creature gains a +1 bonus per effective shifter level (equal to its HD) on saving throws, Perception checks, and initiative checks.",
          },
          {
            scalingType: 'flat',
            name: 'Track (Ex)',
            description:
              'The creature gains the track ability, adding half its HD as a bonus on Survival skill checks made to follow tracks.',
          },
        ],
      },
    ],
    features: [],
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'WIS', change: 4 },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 6',
    },
    visibility: 'global',
    rev: 1,
  },

  // 385. Shrine-Blessed Creature (CR +1)
  {
    id: 'shrine-blessed-creature',
    name: 'Shrine-Blessed Creature',
    description:
      'An acquired template applicable to any undead creature within an area consecrated by a desecrate effect (and by extension, an unhallow effect). The template represents the empowerment the unholy consecration grants to undead guardians, making them more resilient against the living and more effective at channeling negative energy. The benefits only apply while the creature remains within the warded area.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['undead'] },
      {
        type: 'special',
        description:
          'Must be within an area warded by a desecrate or unhallow effect to benefit from the template bonuses.',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Location-Dependent Benefits',
        description:
          'All benefits of this template apply only while the creature is within the area warded by the desecrate or unhallow effect that empowers it. Once the creature leaves this area or the effect is dispelled, it loses all template benefits until it returns.',
      },
      {
        scalingType: 'flat',
        name: 'Profane Defenses (Su)',
        description:
          'While within the consecrated area, the shrine-blessed creature gains a +2 deflection bonus to AC against good-aligned creatures, a +2 profane bonus on all saving throws, and an additional +2 resistance bonus on saving throws against effects from good-aligned creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Profane Offense (Su)',
        description:
          'While within the consecrated area, the shrine-blessed creature gains a +2 profane bonus on all attack rolls and damage rolls.',
      },
      {
        scalingType: 'flat',
        name: 'Empowered Channel (Su)',
        description:
          'While within the consecrated area, the save DC to resist the shrine-blessed creature\'s channeled negative energy increases by +6.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Adventure Path #48: Shadows of Gallowspire',
    },
    visibility: 'global',
    rev: 1,
  },

  // 386. Siabrae (CR +2) [variant 1]
  {
    id: 'siabrae',
    name: 'Siabrae',
    description:
      'An acquired template applicable to druids who perform the "Welcome The Blighted Soul" ritual, transforming them into hateful undead guardians of blighted land. The siabrae retains its druidic powers but twists them toward death and earth, becoming a stony-antlered undead creature that can turn living things to stone with a gore attack and refuses to truly die on its blighted territory.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['neutral evil'] },
      { type: 'special', description: 'Must be a druid who undergoes the Welcome The Blighted Soul ritual.' },
    ],
    typeChange: 'undead',
    subtypeGains: ['earth'],
    typeChangeNote:
      'Hit Dice, Base Attack Bonus, saves, and skill ranks are not recalculated upon type change. Racial HD become d8s; class-based HD remain unchanged. Hit points use Charisma modifier instead of Constitution.',
    naturalArmorChange: 10,
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote:
      'Constitution score is eliminated; the siabrae uses its Charisma modifier for bonus hit points as an undead creature.',
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'adamantine and bludgeoning' },
    immunities: ['fire', 'undead traits'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The siabrae gains a +4 bonus on saving throws made to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Senses',
        description:
          'Gains darkvision 60 feet and tremorsense 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Burrow Speed and Earth Glide (Su)',
        description:
          'The siabrae gains a burrow speed equal to its land speed and the earth glide ability, allowing it to pass through earth and stone as easily as a fish swims through water.',
      },
      {
        scalingType: 'flat',
        name: 'Gore Attack (Ex)',
        description:
          'The siabrae grows stony antlers and gains a gore attack dealing damage as if it were one size category larger than its actual size. This is always a primary attack, even when wielding weapons. The siabrae may retain its antlers in wild shape forms. Any creature struck by the gore attack must succeed at a Fortitude save (DC = 10 + 1/2 HD + Charisma modifier) or turn to stone permanently, as if by a flesh to stone spell.',
      },
      {
        scalingType: 'flat',
        name: 'Blighted Rebirth (Su)',
        description:
          'When the siabrae is destroyed, it attempts a DC 20 Fortitude save. On blighted terrain, this save is automatically successful. On a success, the siabrae\'s essence reforms within new stone 1d10 miles away after 1d10 days. It emerges without any of its equipment.',
      },
      {
        scalingType: 'flat',
        name: 'Blight Mastery (Su)',
        description:
          'Spells and abilities that normally restrict their effects to animals can also affect undead animals when used by the siabrae.',
      },
      {
        scalingType: 'flat',
        name: 'Blightbond (Ex)',
        description:
          'The siabrae loses its nature bond, including any animal companion. It gains one cleric domain chosen from the following list: Animal, Death, Destruction, Earth, Madness, or Repose.',
      },
      {
        scalingType: 'flat',
        name: 'Wild Shape Restrictions',
        description:
          'The siabrae cannot assume flying forms with wild shape or polymorph effects. Summoned creatures it calls appear diseased or decayed in appearance, though this is purely cosmetic and does not affect their statistics.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Toughness as a bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Skills',
        description:
          'Gains a +8 racial bonus on Perception, Sense Motive, and Stealth checks. Always treats Intimidate, Knowledge (planes), Knowledge (religion), Sense Motive, and Stealth as class skills.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Paths of Prestige',
    },
    visibility: 'global',
    rev: 1,
  },

  // 387. Siabrae (CR +2) [variant 2]
  {
    id: 'siabrae-variant',
    name: 'Siabrae (Variant)',
    description:
      'An acquired template applicable to druids of 11th level or higher who undergo a horrific ritual at necromantically empowered standing stones, transforming into undead beings filled with hatred for the living world. This variant of the siabrae requires a higher level of druidic attainment before the transformation is possible and may reflect a distinct regional or organizational tradition for performing the Welcome The Blighted Soul ritual. The mechanical effects are nearly identical to the primary siabrae template.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['neutral evil'] },
      {
        type: 'special',
        description:
          'Must be a druid of 11th level or higher. The ritual must be performed at necromantically empowered standing stones.',
      },
    ],
    typeChange: 'undead',
    subtypeGains: ['earth'],
    typeChangeNote:
      'Hit Dice, Base Attack Bonus, saves, and skill ranks are not recalculated upon type change. Racial HD become d8s; class-based HD remain unchanged. Hit points use Charisma modifier instead of Constitution.',
    naturalArmorChange: 10,
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote:
      'Constitution score is eliminated; the siabrae uses its Charisma modifier for bonus hit points as an undead creature.',
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'adamantine and bludgeoning' },
    immunities: ['fire', 'undead traits'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The siabrae gains a +4 bonus on saving throws made to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Senses',
        description: 'Gains darkvision 60 feet and tremorsense 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Burrow Speed and Earth Glide (Su)',
        description:
          'The siabrae gains a burrow speed equal to its land speed and the earth glide ability, allowing it to move through earth and stone at full burrow speed without disturbing the surrounding material.',
      },
      {
        scalingType: 'flat',
        name: 'Gore Attack (Ex)',
        description:
          'The siabrae grows stony antlers and gains a primary gore attack dealing damage as if one size larger. Creatures struck must succeed at a Fortitude save (DC = 10 + 1/2 HD + Charisma modifier) or turn to stone permanently.',
      },
      {
        scalingType: 'flat',
        name: 'Blighted Rebirth (Su)',
        description:
          "Upon destruction, the siabrae makes a DC 20 Fortitude save (automatic success on blighted terrain). On success, it reforms within 1d10 miles in stone after 1d10 days, without gear.",
      },
      {
        scalingType: 'flat',
        name: 'Blight Mastery (Su)',
        description:
          'Spells and abilities restricted to animals can also affect undead animals when used by the siabrae.',
      },
      {
        scalingType: 'flat',
        name: 'Blightbond (Ex)',
        description:
          'Replaces nature bond (including animal companion) with one cleric domain: Animal, Death, Destruction, Earth, Madness, or Repose.',
      },
      {
        scalingType: 'flat',
        name: 'Wild Shape Restrictions',
        description:
          'Cannot assume flying forms through wild shape or polymorph. Summoned creatures appear diseased or decayed (cosmetic only).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Toughness as a bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Skills',
        description:
          'Gains a +8 racial bonus on Perception, Sense Motive, and Stealth checks. Always treats Intimidate, Knowledge (planes), Knowledge (religion), Sense Motive, and Stealth as class skills.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 4',
    },
    visibility: 'global',
    rev: 1,
  },

  // 388. Silenced (CR +3)
  {
    id: 'silenced',
    name: 'Silenced',
    description:
      'An acquired template from Legendary Games\' Arcforge Universe Cyclopedia, applicable to any undead creature. The Silenced are powerful undead creations of The Mechanism, entities that have achieved a form of permanent, energy-neutral undeath while retaining their intellect and gaining massive physical and mental enhancements. They radiate an aura that suppresses all light, sound, and sensory input, becoming centers of absolute stillness.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['undead'] }],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 6 },
      { ability: 'CHA', change: 4 },
    ],
    naturalArmorChange: 4,
    immunities: ['cold', 'fire', 'sonic'],
    fastHealing: '5',
    features: [
      {
        scalingType: 'flat',
        name: 'See in Darkness (Su)',
        description:
          'The silenced creature can see perfectly in all darkness, including magical darkness.',
      },
      {
        scalingType: 'flat',
        name: 'Touchsight (Su)',
        description:
          'The silenced creature has blindsense out to 60 feet, perceiving the world through touch-based sonar that cannot be blocked by darkness, fog, or invisibility.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Stillness (Su)',
        description:
          'The silenced creature projects a 30-foot aura of absolute stillness that simultaneously suppresses all sound (as a silence spell), all light (as a deeper darkness spell), and all sensory input based on scent, heat, or electricity.',
      },
      {
        scalingType: 'flat',
        name: 'Necrowave Speech (Su)',
        description:
          'The silenced creature can communicate telepathically with all undead creatures within 400 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Unto Nothingness (Ex)',
        description:
          'When a silenced creature is destroyed, its soul is also destroyed permanently. The creature cannot be resurrected by any means, including wish or miracle.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Arcforge Universe Cyclopedia',
    },
    visibility: 'global',
    rev: 1,
  },

  // 389. Silverblood Lycanthrope (CR +2)
  {
    id: 'silverblood-lycanthrope',
    name: 'Silverblood Lycanthrope',
    description:
      'An inherited template applicable to humanoids, representing a lycanthrope variant whose connection to the moon is heightened and whose powers wax and wane dramatically with the lunar cycle. Unlike standard lycanthropes, silverblood lycanthropes are born (not infected) and gain unique lunar sympathy abilities — blessed by the full moon but enfeebled and tormented during dark moon phases.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [{ type: 'creature_type', allowed: ['humanoid'] }],
    subtypeGains: ['shapechanger'],
    abilityScoreChanges: [
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: -2 },
    ],
    abilityScoreChangeNote:
      'In hybrid and animal forms only, the creature also gains +2 Strength and +2 Constitution. In humanoid form the base ability scores are unchanged. In animal or hybrid form, uses whichever score is higher between the base creature and the base animal. The +4 natural armor bonus applies in animal or hybrid form only; humanoid form retains base natural armor.',
    naturalArmorChange: 4,
    features: [
      {
        scalingType: 'flat',
        name: 'Damage Reduction',
        description:
          'DR 1/— in animal and hybrid forms normally; DR 3/— when the moon is at least half-full; DR 10/— on full moon nights.',
      },
      {
        scalingType: 'flat',
        name: 'Senses',
        description: 'Gains low-light vision and scent.',
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          'The silverblood lycanthrope can shift between three forms — humanoid, animal, and hybrid — as a move action. Death reverts the creature to its humanoid form. Equipment melds when shifting to or from animal form but not between humanoid and hybrid forms.',
      },
      {
        scalingType: 'flat',
        name: 'Curse of Lycanthropy (Su)',
        description:
          'A bite attack delivered in animal or hybrid form transmits lycanthropy on a failed Fortitude save (DC 15). This effect is negated if the victim is more than one size category different from the lycanthrope. Infected creatures become standard afflicted lycanthropes of the same base animal type, not silverblood variants.',
      },
      {
        scalingType: 'flat',
        name: 'Lunar Sympathy (Su)',
        description:
          'The silverblood lycanthrope\'s power is tied to the moon. When the moon is at least half-full at night, the creature gains the effect of a bless spell while outdoors. On full moon nights, this becomes a heroism effect that functions even indoors. When the moon is less than half-full, the creature becomes fatigued at night. During new moon phases, the creature becomes fatigued during the day, exhausted at night, and takes 1d4 Constitution damage each night (DC 20 Fortitude save to halve the damage).',
      },
      {
        scalingType: 'flat',
        name: 'Lycanthropic Empathy (Ex)',
        description:
          'The silverblood lycanthrope can communicate with animals of the same species as its base animal form and gains a +4 racial bonus on Diplomacy checks with them. It also gains a +8 racial bonus on Diplomacy checks against standard natural lycanthropes whose base animal matches its own.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 5',
    },
    visibility: 'global',
    rev: 1,
  },

  // NOTE: Entry 390 (Simple Class Templates index page) SKIPPED — navigation index only, no standalone template definition.

  // 391. Barbarian Creature (CR +2 or +3)
  {
    id: 'barbarian-creature',
    name: 'Barbarian Creature',
    description:
      'A simple class template from the Pathfinder Monster Codex, applicable to any chaotic creature. Grants the creature rage, damage reduction, and uncanny dodge abilities. Creatures with fewer than 10 HD gain CR +2; those with 10 or more HD gain CR +3 and the more powerful versions of these abilities.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 9,
        crValue: 2,
        label: 'Fewer than 10 HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Rage (Ex)',
            description:
              "The creature can rage for a number of rounds per day equal to 4 + its HD + its Constitution modifier. While raging it gains the standard benefits of the barbarian rage ability, using its HD as its barbarian level to determine effects and bonuses. It cannot cast spells or use skills that require patience while raging.",
          },
          {
            scalingType: 'flat',
            name: 'Uncanny Dodge (Ex)',
            description:
              "The creature retains its Dexterity bonus to AC even when flat-footed or when struck by an invisible attacker.",
          },
          {
            scalingType: 'flat',
            name: 'Damage Reduction 1/— (Ex)',
            description: 'Gains DR 1/— while raging.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 10,
        crValue: 3,
        label: '10+ HD (CR +3)',
        features: [
          {
            scalingType: 'flat',
            name: 'Greater Rage (Ex)',
            description:
              "The creature can rage for a number of rounds per day equal to 4 + its HD + its Constitution modifier, using greater rage (as the barbarian class feature at 11th level). While raging it gains enhanced bonuses over standard rage.",
          },
          {
            scalingType: 'flat',
            name: 'Improved Uncanny Dodge (Ex)',
            description:
              "The creature retains its Dexterity bonus to AC even when flat-footed or struck by an invisible attacker, and cannot be flanked except by a rogue of 4 or more levels higher.",
          },
          {
            scalingType: 'flat',
            name: 'Damage Reduction 3/— (Ex)',
            description: 'Gains DR 3/— while raging.',
          },
        ],
      },
    ],
    features: [],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'alignment', allowed: ['chaotic good', 'chaotic neutral', 'chaotic evil'] },
    ],
    abilityScoreChanges: [{ ability: 'STR', change: 4 }],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    visibility: 'global',
    rev: 1,
  },

  // 392. Bard Creature (CR +1 or +2)
  {
    id: 'bard-creature',
    name: 'Bard Creature',
    description:
      'A simple class template from the Pathfinder Monster Codex, applicable to any creature. Grants bardic performance, bard spellcasting (limited to the three highest available spell levels), and enhanced Charisma. Creatures with fewer than 10 HD gain CR +1; those with 10 or more HD gain CR +2.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 9,
        crValue: 1,
        label: 'Fewer than 10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Bardic Performance (Su)',
            description:
              "The creature can use bardic performance for a number of rounds per day equal to 4 + its HD + its Charisma modifier, treating its HD as its bard level to determine performance types available and their effects.",
          },
          {
            scalingType: 'hd_table',
            name: 'Bard Spellcasting',
            tiers: [
              { minHD: 1, maxHD: 4, spellsPerDay: [2, 1, null, null, null, null, null] },
              { minHD: 5, maxHD: 8, spellsPerDay: [2, 2, 1, null, null, null, null] },
              { minHD: 9, maxHD: 12, spellsPerDay: [2, 2, 2, 1, null, null, null] },
              { minHD: 13, maxHD: 16, spellsPerDay: [2, 2, 2, 2, 1, null, null] },
              { minHD: 17, maxHD: 20, spellsPerDay: [2, 2, 2, 2, 2, 1, null] },
              { minHD: 21, spellsPerDay: [2, 2, 2, 2, 2, 2, 1] },
            ],
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
            name: 'Bardic Performance (Su)',
            description:
              "The creature can use bardic performance for a number of rounds per day equal to 4 + its HD + its Charisma modifier, treating its HD as its bard level. At 10+ HD, additional performance types and improved versions are available.",
          },
          {
            scalingType: 'hd_table',
            name: 'Bard Spellcasting (10+ HD)',
            tiers: [
              { minHD: 9, maxHD: 12, spellsPerDay: [2, 2, 2, 1, null, null, null] },
              { minHD: 13, maxHD: 16, spellsPerDay: [2, 2, 2, 2, 1, null, null] },
              { minHD: 17, maxHD: 20, spellsPerDay: [2, 2, 2, 2, 2, 1, null] },
              { minHD: 21, spellsPerDay: [2, 2, 2, 2, 2, 2, 1] },
            ],
          },
        ],
      },
    ],
    features: [],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    abilityScoreChanges: [{ ability: 'CHA', change: 4 }],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    visibility: 'global',
    rev: 1,
  },

  // 393. Cleric Creature (CR +1, +2, or +3)
  {
    id: 'cleric-creature',
    name: 'Cleric Creature',
    description:
      'A simple class template from the Pathfinder Monster Codex, applicable to any creature whose alignment is within one step of a chosen deity\'s alignment. Grants cleric spellcasting (limited to the three highest available spell levels) and channel energy. Creatures with fewer than 7 HD gain CR +1, those with 7–12 HD gain CR +2, and those with 13+ HD gain CR +3.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 6,
        crValue: 1,
        label: 'Fewer than 7 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Channel Energy (Su)',
            description:
              "The creature can channel energy a number of times per day equal to 3 + its Charisma modifier. Good-aligned creatures channel positive energy; evil-aligned creatures channel negative energy; neutral creatures choose at creation. The effective cleric level for determining the amount of energy channeled equals the creature's HD – 2 (minimum 1).",
          },
          {
            scalingType: 'flat',
            name: 'Cleric Spellcasting',
            description:
              'The creature casts cleric spells using its HD as caster level. It has access only to the three highest spell levels available for its HD. No more than two spell slots per spell level may be granted. Cantrips (0-level): 2 slots; 1st-level: 1 slot (HD 1–3 only).',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 7,
        maxHD: 12,
        crValue: 2,
        label: '7–12 HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Channel Energy (Su)',
            description:
              "Channel energy as above, with effective cleric level equal to HD – 2 (minimum 1). More powerful channeling at this HD range.",
          },
          {
            scalingType: 'flat',
            name: 'Cleric Spellcasting (7–12 HD)',
            description:
              'Access to cleric spells of up to 4th level (7–9 HD) or 5th level (10–12 HD). Limited to the three highest available spell levels with no more than two slots per level.',
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 13,
        crValue: 3,
        label: '13+ HD (CR +3)',
        features: [
          {
            scalingType: 'flat',
            name: 'Channel Energy (Su)',
            description:
              'Channel energy as above, with effective cleric level equal to HD – 2. At this HD range the channeling is powerful enough to affect large numbers of creatures at significant range.',
          },
          {
            scalingType: 'flat',
            name: 'Cleric Spellcasting (13+ HD)',
            description:
              'Access to cleric spells of up to 6th level (13–15 HD), 7th level (16–18 HD), 8th level (19–21 HD), or 9th level (22+ HD). Limited to the three highest available spell levels with no more than two slots per level.',
          },
        ],
      },
    ],
    features: [],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'special',
        description:
          "The creature's alignment must be within one step of the chosen deity's alignment.",
      },
    ],
    abilityScoreChanges: [{ ability: 'WIS', change: 4 }],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    visibility: 'global',
    rev: 1,
  },

  // 394. Druid Creature (CR +1, +2, or +3)
  {
    id: 'druid-creature',
    name: 'Druid Creature',
    description:
      'A simple class template from the Pathfinder Monster Codex, applicable to any creature. Grants druid spellcasting (limited to the three highest available spell levels), woodland stride, and wild shape at 7+ HD. Creatures with fewer than 7 HD gain CR +1, those with 7–12 HD gain CR +2, and those with 13+ HD gain CR +3.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 6,
        crValue: 1,
        label: 'Fewer than 7 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Woodland Stride (Ex)',
            description:
              'The druid creature can move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at its normal speed and without taking damage or suffering any other impairment.',
          },
          {
            scalingType: 'hd_table',
            name: 'Druid Spellcasting (1–6 HD)',
            tiers: [
              { minHD: 1, maxHD: 3, spellsPerDay: [2, 1, null, null, null, null, null, null, null, null] },
              { minHD: 4, maxHD: 6, spellsPerDay: [2, 2, 1, null, null, null, null, null, null, null] },
            ],
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 7,
        maxHD: 12,
        crValue: 2,
        label: '7–12 HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Woodland Stride (Ex)',
            description:
              'The druid creature can move through natural undergrowth at its normal speed without taking damage or suffering impairment.',
          },
          {
            scalingType: 'flat',
            name: 'Wild Shape (Su)',
            description:
              "Available to creatures with 7 or more HD. The creature's effective druid level for wild shape equals its HD – 3. This determines how many times per day wild shape can be used, how long each use lasts, and what forms are available.",
          },
          {
            scalingType: 'hd_table',
            name: 'Druid Spellcasting (7–12 HD)',
            tiers: [
              { minHD: 7, maxHD: 9, spellsPerDay: ['overflow', 2, 2, 1, null, null, null, null, null, null] },
              { minHD: 10, maxHD: 12, spellsPerDay: ['overflow', 'overflow', 2, 2, 1, null, null, null, null, null] },
            ],
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 13,
        crValue: 3,
        label: '13+ HD (CR +3)',
        features: [
          {
            scalingType: 'flat',
            name: 'Woodland Stride (Ex)',
            description:
              'The druid creature can move through natural undergrowth at its normal speed without taking damage or suffering impairment.',
          },
          {
            scalingType: 'flat',
            name: 'Wild Shape (Su)',
            description:
              "The creature's effective druid level for wild shape equals its HD – 3, granting powerful and numerous transformations at this HD range.",
          },
          {
            scalingType: 'hd_table',
            name: 'Druid Spellcasting (13+ HD)',
            tiers: [
              { minHD: 13, maxHD: 15, spellsPerDay: ['overflow', 'overflow', 'overflow', 2, 2, 1, null, null, null, null] },
              { minHD: 16, maxHD: 18, spellsPerDay: ['overflow', 'overflow', 'overflow', 'overflow', 2, 2, 1, null, null, null] },
              { minHD: 19, maxHD: 21, spellsPerDay: ['overflow', 'overflow', 'overflow', 'overflow', 'overflow', 2, 2, 1, null, null] },
              { minHD: 22, maxHD: 24, spellsPerDay: ['overflow', 'overflow', 'overflow', 'overflow', 'overflow', 'overflow', 2, 2, 1, null] },
              { minHD: 25, spellsPerDay: ['overflow', 'overflow', 'overflow', 'overflow', 'overflow', 'overflow', 'overflow', 2, 2, 1] },
            ],
          },
        ],
      },
    ],
    features: [],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    abilityScoreChanges: [{ ability: 'WIS', change: 4 }],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    visibility: 'global',
    rev: 1,
  },

  // 395. Fighter Creature (CR +1 or +2)
  {
    id: 'fighter-creature',
    name: 'Fighter Creature',
    description:
      'A simple class template from the Pathfinder Monster Codex, applicable to any creature. Grants bonus combat feats, armor training, and weapon training. Creatures with fewer than 10 HD gain CR +1; those with 10 or more HD gain CR +2.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 9,
        crValue: 1,
        label: 'Fewer than 10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Bonus Combat Feats',
            description:
              'The creature gains one bonus combat feat, plus one additional feat for every 4 HD (maximum 10 total bonus feats). The creature qualifies for combat feats as if it were a fighter with a level equal to its HD.',
          },
          {
            scalingType: 'hd_threshold',
            name: 'Armor Training (Ex)',
            description:
              'If the creature has 3 or more HD, it gains armor training. The bonuses and penalty reductions improve by the same steps as a fighter every 4 HD, capping at normal class feature maximums.',
            minimumHD: 3,
          },
          {
            scalingType: 'hd_threshold',
            name: 'Weapon Training (Ex)',
            description:
              'If the creature has 5 or more HD, it gains weapon training in a single weapon group. The bonus increases by +1 every 4 HD, capping at +4.',
            minimumHD: 5,
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
            name: 'Bonus Combat Feats',
            description:
              'The creature gains one bonus combat feat, plus one additional feat for every 4 HD (maximum 10 total bonus feats), treating its HD as its fighter level for feat prerequisites.',
          },
          {
            scalingType: 'flat',
            name: 'Armor Training (Ex)',
            description:
              'Grants armor training with bonuses and penalty reductions improving every 4 HD up to normal class feature maximums.',
          },
          {
            scalingType: 'flat',
            name: 'Weapon Training (Ex)',
            description:
              'Grants weapon training in a single weapon group, with +1 bonus per 4 HD, capping at +4.',
          },
        ],
      },
    ],
    features: [],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    abilityScoreChanges: [{ ability: 'STR', change: 4 }],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    visibility: 'global',
    rev: 1,
  },

  // 396. Monk Creature (CR +2 or +3)
  {
    id: 'monk-creature',
    name: 'Monk Creature',
    description:
      'A simple class template from the Pathfinder Monster Codex, applicable to any lawful creature. Grants improved unarmed strike, enhanced AC, evasion, and scaling unarmed damage. Creatures with fewer than 10 HD gain CR +2; those with 10 or more HD gain CR +3.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 9,
        crValue: 2,
        label: 'Fewer than 10 HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Improved Unarmed Strike (Ex)',
            description:
              'The creature gains the Improved Unarmed Strike feat. Its unarmed strike damage scales as a monk with a level equal to its HD (maximum 20 HD). During a full attack, the creature can make one additional unarmed or natural attack of the same type with a –5 penalty.',
          },
          {
            scalingType: 'flat',
            name: 'Evasion (Ex)',
            description:
              'If the creature makes a successful Reflex saving throw against an attack that normally allows a Reflex save for half damage, it takes no damage instead.',
          },
          {
            scalingType: 'flat',
            name: 'Monk AC Bonus (Ex)',
            description:
              'The creature gains an AC bonus equal to 2 + its Wisdom modifier while unarmored. This bonus increases by +1 per 4 HD (maximum +5 at 20 HD).',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 10,
        crValue: 3,
        label: '10+ HD (CR +3)',
        features: [
          {
            scalingType: 'flat',
            name: 'Improved Unarmed Strike (Ex)',
            description:
              'As above. Additionally, natural attack users increase their damage by one die step.',
          },
          {
            scalingType: 'flat',
            name: 'Improved Evasion (Ex)',
            description:
              'On a successful Reflex save the creature takes no damage; on a failed Reflex save it takes only half damage.',
          },
          {
            scalingType: 'flat',
            name: 'Monk AC Bonus (Ex)',
            description:
              'The creature gains an AC bonus equal to 2 + its Wisdom modifier while unarmored, increasing by +1 per 4 HD (maximum +5 at 20 HD).',
          },
        ],
      },
    ],
    features: [],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful good', 'lawful neutral', 'lawful evil'] },
    ],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'WIS', change: 4 },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    visibility: 'global',
    rev: 1,
  },

  // 397. Paladin Creature (CR +2 or +3)
  {
    id: 'paladin-creature',
    name: 'Paladin Creature',
    description:
      'A simple class template from the Pathfinder Monster Codex, applicable to any lawful good creature. Grants smite evil, lay on hands, detect evil, and divine grace. Creatures with fewer than 10 HD gain CR +2; those with 10 or more HD gain CR +3 and also gain aura of resolve.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 9,
        crValue: 2,
        label: 'Fewer than 10 HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Detect Evil (Sp)',
            description:
              'The creature can use detect evil at will, as a spell-like ability, using its HD as its caster level.',
          },
          {
            scalingType: 'flat',
            name: 'Smite Evil (Su)',
            description:
              'Once per day, the creature can smite evil. It adds its Charisma modifier to attack rolls and its HD to damage rolls against an evil target for the rest of the encounter. The target also loses any deflection bonus to AC against the creature\'s attacks for the duration.',
          },
          {
            scalingType: 'flat',
            name: 'Lay on Hands (Su)',
            description:
              'Once per day, the creature can heal a touched creature for 1d6 hit points per 2 HD.',
          },
          {
            scalingType: 'flat',
            name: 'Divine Grace (Su)',
            description:
              'The creature adds its Charisma modifier as a bonus on all saving throws.',
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 10,
        crValue: 3,
        label: '10+ HD (CR +3)',
        features: [
          {
            scalingType: 'flat',
            name: 'Detect Evil (Sp)',
            description: 'At will detect evil as a spell-like ability, using HD as caster level.',
          },
          {
            scalingType: 'flat',
            name: 'Smite Evil (Su)',
            description:
              'Once per day, smite evil as above, adding Charisma modifier to attacks and HD to damage against an evil target.',
          },
          {
            scalingType: 'flat',
            name: 'Lay on Hands (Su)',
            description: 'Once per day, heal a touched creature for 1d6 hit points per 2 HD.',
          },
          {
            scalingType: 'flat',
            name: 'Divine Grace (Su)',
            description: 'Adds Charisma modifier as a bonus on all saving throws.',
          },
          {
            scalingType: 'flat',
            name: 'Aura of Resolve (Su)',
            description:
              'The creature is immune to charm effects. Each ally within 10 feet gains a +4 morale bonus on saving throws against charm effects.',
          },
        ],
      },
    ],
    features: [],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful good'] },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    visibility: 'global',
    rev: 1,
  },

  // 398. Ranger Creature (CR +1 or +2)
  {
    id: 'ranger-creature',
    name: 'Ranger Creature',
    description:
      'A simple class template from the Pathfinder Monster Codex, applicable to any creature. Grants a favored enemy, track, a combat style feat, and evasion at higher HD. Creatures with fewer than 10 HD gain CR +1; those with 10 or more HD gain CR +2.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 9,
        crValue: 1,
        label: 'Fewer than 10 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Favored Enemy (Ex)',
            description:
              'The creature selects one favored enemy type and gains a +2 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against that enemy, as well as on weapon attack and damage rolls. The bonus increases by +2 at 5 HD and every 5 HD thereafter, to a maximum of +10 at 20 HD.',
          },
          {
            scalingType: 'flat',
            name: 'Track (Ex)',
            description:
              'The creature adds half its HD as a bonus on Survival skill checks made to follow or identify tracks.',
          },
          {
            scalingType: 'flat',
            name: 'Combat Style Feat',
            description:
              'The creature gains either Point-Blank Shot or Two-Weapon Fighting as a bonus feat (chosen at template application).',
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
            name: 'Favored Enemy (Ex)',
            description:
              'Favored enemy as above, scaling up to +10 at 20 HD.',
          },
          {
            scalingType: 'flat',
            name: 'Track (Ex)',
            description: 'Adds half HD as a bonus on Survival checks to track.',
          },
          {
            scalingType: 'flat',
            name: 'Combat Style Feats (10+ HD)',
            description:
              'The creature gains its initial combat style feat plus two additional feats from the appropriate combat style list (archery feats if Point-Blank Shot was chosen; two-weapon combat feats if Two-Weapon Fighting was chosen).',
          },
          {
            scalingType: 'flat',
            name: 'Evasion (Ex)',
            description:
              'If the creature makes a successful Reflex saving throw against an effect that normally allows a Reflex save for half damage, it takes no damage instead.',
          },
        ],
      },
    ],
    features: [],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    abilityScoreChanges: [{ ability: 'STR', change: 4 }],
    abilityScoreChangeNote:
      'The creature may alternatively gain +4 Dexterity instead of +4 Strength, chosen at template application. If Dexterity is chosen, it also gains +2 AC.',
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    visibility: 'global',
    rev: 1,
  },

  // 399. Rogue Creature (CR +1 or +2)
  {
    id: 'rogue-creature',
    name: 'Rogue Creature',
    description:
      'A simple class template from the Pathfinder Monster Codex, applicable to any creature. Grants sneak attack, evasion, uncanny dodge, and rogue talents at higher HD. Creatures with fewer than 10 HD gain CR +1; those with 10 or more HD gain CR +2.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 9,
        crValue: 1,
        label: 'Fewer than 10 HD (CR +1)',
        features: [
          {
            scalingType: 'hd_formula',
            name: 'Sneak Attack (Ex)',
            description:
              'The creature deals extra sneak attack damage whenever its target is denied a Dexterity bonus to AC or is flanked. The number of sneak attack dice equals half the creature\'s HD (maximum 10d6 at 20 HD).',
            formula: 'floor(HD / 2)d6, maximum 10d6',
          },
          {
            scalingType: 'flat',
            name: 'Evasion (Ex)',
            description:
              'On a successful Reflex save against an effect that normally allows half damage on a save, the creature takes no damage.',
          },
          {
            scalingType: 'flat',
            name: 'Uncanny Dodge (Ex)',
            description:
              'The creature retains its Dexterity bonus to AC even when flat-footed or struck by an invisible attacker.',
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
            scalingType: 'hd_formula',
            name: 'Sneak Attack (Ex)',
            description:
              'Sneak attack as above, with dice equal to half HD (maximum 10d6).',
            formula: 'floor(HD / 2)d6, maximum 10d6',
          },
          {
            scalingType: 'flat',
            name: 'Evasion (Ex)',
            description:
              'On a successful Reflex save the creature takes no damage from effects that normally allow half damage on save.',
          },
          {
            scalingType: 'flat',
            name: 'Improved Uncanny Dodge (Ex)',
            description:
              'The creature retains its Dexterity bonus to AC even when flat-footed, and cannot be flanked except by a rogue 4 or more levels higher.',
          },
          {
            scalingType: 'flat',
            name: 'Rogue Talents',
            description:
              'The creature gains two rogue talents. One of these may be an advanced talent.',
          },
        ],
      },
    ],
    features: [],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    abilityScoreChanges: [{ ability: 'DEX', change: 4 }],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    visibility: 'global',
    rev: 1,
  },

  // 400. Sorcerer Creature (CR +1, +2, or +3)
  {
    id: 'sorcerer-creature',
    name: 'Sorcerer Creature',
    description:
      'A simple class template from the Pathfinder Monster Codex, applicable to any creature. Grants sorcerer spellcasting (limited to the three highest available spell levels), a bloodline arcana, and bloodline powers. Creatures with fewer than 8 HD gain CR +1, those with 8–13 HD gain CR +2, and those with 14+ HD gain CR +3.',
    crTiers: [
      {
        tierIndex: 0,
        minHD: 1,
        maxHD: 7,
        crValue: 1,
        label: 'Fewer than 8 HD (CR +1)',
        features: [
          {
            scalingType: 'flat',
            name: 'Bloodline Arcana and Powers',
            description:
              "The creature selects a sorcerer bloodline and gains its arcana and bloodline powers. Its effective sorcerer level for determining bloodline power effects equals its HD – 2 (minimum 1).",
          },
          {
            scalingType: 'hd_table',
            name: 'Sorcerer Spellcasting (1–7 HD)',
            tiers: [
              { minHD: 1, maxHD: 4, spellsPerDay: [2, 1, null, null, null, null, null, null, null, null] },
              { minHD: 5, maxHD: 7, spellsPerDay: [2, 2, 1, null, null, null, null, null, null, null] },
            ],
          },
        ],
      },
      {
        tierIndex: 1,
        minHD: 8,
        maxHD: 13,
        crValue: 2,
        label: '8–13 HD (CR +2)',
        features: [
          {
            scalingType: 'flat',
            name: 'Bloodline Arcana and Powers',
            description:
              "Bloodline arcana and powers as above, with effective sorcerer level equal to HD – 2. More powerful bloodline abilities become available at this HD range.",
          },
          {
            scalingType: 'hd_table',
            name: 'Sorcerer Spellcasting (8–13 HD)',
            tiers: [
              { minHD: 8, maxHD: 10, spellsPerDay: [2, 2, 2, 1, null, null, null, null, null, null] },
              { minHD: 11, maxHD: 13, spellsPerDay: [2, 2, 2, 2, 1, null, null, null, null, null] },
            ],
          },
        ],
      },
      {
        tierIndex: 2,
        minHD: 14,
        crValue: 3,
        label: '14+ HD (CR +3)',
        features: [
          {
            scalingType: 'flat',
            name: 'Bloodline Arcana and Powers',
            description:
              "Bloodline arcana and all bloodline powers available at effective sorcerer level HD – 2. The most powerful bloodline abilities are accessible at this HD range.",
          },
          {
            scalingType: 'hd_table',
            name: 'Sorcerer Spellcasting (14+ HD)',
            tiers: [
              { minHD: 14, maxHD: 16, spellsPerDay: [2, 2, 2, 2, 2, 1, null, null, null, null] },
              { minHD: 17, maxHD: 19, spellsPerDay: [2, 2, 2, 2, 2, 2, 1, null, null, null] },
              { minHD: 20, maxHD: 22, spellsPerDay: [2, 2, 2, 2, 2, 2, 2, 1, null, null] },
              { minHD: 23, maxHD: 25, spellsPerDay: [2, 2, 2, 2, 2, 2, 2, 2, 1, null] },
              { minHD: 26, spellsPerDay: [2, 2, 2, 2, 2, 2, 2, 2, 2, 1] },
            ],
          },
        ],
      },
    ],
    features: [],
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    abilityScoreChanges: [{ ability: 'CHA', change: 4 }],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Monster Codex',
    },
    visibility: 'global',
    rev: 1,
  },
];
