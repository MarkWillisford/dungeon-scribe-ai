// Batch 001 | first: 'Abomination (CR +1)' | last: 'Aquatic Creature (CR +0)' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_001: TemplateDefinition[] = [
  // 1. Abomination (CR +1) [3pp]
  {
    id: 'abomination',
    name: 'Abomination',
    description:
      'A horrific hybrid of two base creatures, combining their physical traits into a new monstrous form. One creature must be an animal, vermin, or humanoid.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal', 'vermin', 'humanoid'] },
    ],
    typeChange: 'magical beast (if animal/vermin hybrid) or monstrous humanoid (if humanoid hybrid)',
    abilityScoreChanges: [
      { ability: 'STR', change: 0, condition: 'Average both creatures, then apply size-difference penalty (-2/-4/-6 for 1-2/3-4/5+ size steps)' },
      { ability: 'DEX', change: 0, condition: 'Average both creatures, then apply size-difference penalty (-2/-4/-6 for 1-2/3-4/5+ size steps)' },
      { ability: 'CON', change: 0, condition: 'Average if same size; use highest if different sizes' },
    ],
    abilityScoreChangeNote:
      'INT rerolled as 1d4+2; WIS rerolled as 2d6; CHA rerolled as 2d6.',
    features: [
      {
        scalingType: 'flat',
        name: 'Hybrid Form',
        description:
          'Size equals the larger of the two base creatures. Hit Dice change to d10s; combine HD for same-sized creatures (divide by 2) or use the higher minus 1 for different sizes. Natural armor equals the higher of the two base creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Combined Movement',
        description:
          'Average base speeds (round up). 75% chance of losing flight if size difference exceeds one category.',
      },
      {
        scalingType: 'flat',
        name: 'Inherited Abilities',
        description:
          '50% chance of inheriting any special quality, attack, or defense possessed by only one base creature. Abilities shared by both are automatically inherited.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors Complete',
    },
    visibility: 'global',
    rev: 1,
  },

  // 2. Acid Creature (CR +2) [3pp]
  {
    id: 'acid-creature',
    name: 'Acid Creature',
    description:
      'A living elemental manifestation of acid. Any living corporeal creature can become an acid creature, transforming into an outsider with elemental and extraplanar subtypes.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any living corporeal creature.' },
    ],
    typeChange: 'outsider',
    subtypeGains: ['elemental', 'extraplanar'],
    subtypeRemoves: ['water', 'aquatic'],
    immunities: ['acid'],
    features: [
      {
        scalingType: 'flat',
        name: 'Water Vulnerability',
        description:
          'For every gallon of freshwater an acid creature is exposed to, it takes 1d6 damage.',
      },
      {
        scalingType: 'flat',
        name: 'Acidic Strikes (Ex)',
        description:
          'Natural attacks deal an extra 1d6 acid damage (Medium baseline), plus 1d6 per 5 racial HD. Scales with size.',
      },
      {
        scalingType: 'flat',
        name: 'Acidic Body (Ex)',
        description:
          'Corrodes non-stone materials on sustained touch. Creatures grappling the acid creature take acidic strike damage each round.',
      },
      {
        scalingType: 'flat',
        name: 'Acid Pool (Ex)',
        description:
          "Creates a pool of acid with radius equal to twice the creature's space dealing base 1d6 damage (Medium), scaling with size.",
      },
      {
        scalingType: 'flat',
        name: 'Acid Rain (Ex)',
        description:
          'Flying acid creatures drip acid on creatures below. Reflex save (Dexterity-based DC) for half damage.',
      },
      {
        scalingType: 'flat',
        name: 'Engulf',
        description: 'Engulfed opponents take acidic strike damage each round.',
      },
      {
        scalingType: 'flat',
        name: 'Acidic Spellcasting',
        description:
          'Acid descriptor spells are cast at +1 caster level. Water descriptor spells are converted to acid.',
      },
      {
        scalingType: 'flat',
        name: 'Acidic Swimming (Ex)',
        description:
          'Gains a swim speed equal to its highest base speed (minimum 20 ft.) and can swim through acid.',
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

  // 3. Aetheric Creature (CR +0 or +1)
  {
    id: 'aetheric-creature',
    name: 'Aetheric Creature',
    description:
      'A creature suffused with aetheric force energy, granting it flight, limited telekinesis, and force-based defenses. CR +0 for creatures with fewer than 5 HD; CR +1 for 5+ HD.',
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'special',
        description:
          'Non-outsider creature lacking the air, cold, earth, fire, or water subtypes.',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Aetheric Flight',
        description:
          'Gains a fly speed equal to its base movement speed with good maneuverability.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 ft.',
      },
      {
        scalingType: 'hd_threshold',
        name: 'Aetheric Defense (1-4 HD)',
        description: 'DR -/-; resistance to force 2.',
        minimumHD: 1,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Aetheric Defense (5-10 HD)',
        description: 'DR 3/-; resistance to force 5.',
        minimumHD: 5,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Aetheric Defense (11+ HD)',
        description:
          'DR 5/-; resistance to force 10. Natural attacks gain the ghost touch property.',
        minimumHD: 11,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Telekinetic Abilities (1-4 HD)',
        description:
          'Gains mage hand, open/close, scoop, and telekinetic projectile as at-will spell-like abilities. Caster level equals HD.',
        minimumHD: 1,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Force Strikes (5-10 HD)',
        description: 'Natural attacks deal +1 force damage.',
        minimumHD: 5,
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Librarians & Leviathans',
      publication: "The Antipaladin's Almanac",
    },
    visibility: 'global',
    rev: 1,
  },

  // 4. Agathion Invested (CR +2-3) [3pp]
  {
    id: 'agathion-invested',
    name: 'Agathion Invested',
    description:
      "A living non-evil creature that has willingly agreed to serve as a host for an inhabiting agathion, granting it celestial power and the ability to transform into the agathion's form. CR +3 for cetaceal or draconal-invested.",
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Living non-evil creature that willingly agrees to agathion inhabitation.',
      },
    ],
    subtypeGains: ['good', 'shapechanger'],
    abilityScoreChangeNote:
      'Varies by agathion type. Avoral: Dex +4, Cha +2. Cetaceal: Str +4, Con +2. Draconal: Str +4 plus +2 to any other. Leonal: Str +4, Dex +2. Silvanshee: Dex +4, Wis +2. Vulpinal: Int +4, Cha +2.',
    resistances: [{ energyType: 'electricity', value: 20 }],
    features: [
      {
        scalingType: 'flat',
        name: 'Sacred Attacks (Su)',
        description:
          "Each melee attack deals an extra 1d6 damage to evil creatures. All weapons count as magic and good-aligned.",
      },
      {
        scalingType: 'flat',
        name: 'Agathion Form (Su)',
        description:
          "At will, can transform into the inhabiting agathion. Remains active for a number of rounds per day equal to the host's Charisma score.",
      },
      {
        scalingType: 'flat',
        name: 'Inhabited (Su)',
        description: 'Constant telepathic communication with the inhabiting agathion.',
      },
      {
        scalingType: 'flat',
        name: 'Spell Vulnerability',
        description:
          'Subject to dismissal, dispel good, and banishment effects as an outsider.',
      },
      {
        scalingType: 'flat',
        name: 'Sacred Saves',
        description:
          '+4 sacred bonus on saving throws against poison and petrification.',
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

  // 5. Agent of Chaos Creature (CR +2) [3pp]
  {
    id: 'agent-of-chaos',
    name: 'Agent of Chaos Creature',
    description:
      'A creature transformed by raw chaos energy into an unpredictable force of disorder. Gains massive ability boosts, spell immunity, and several chaos-themed supernatural abilities.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    subtypeGains: ['chaotic'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: -4 },
      { ability: 'CHA', change: 4 },
    ],
    immunities: [
      'spells and spell-like abilities that allow spell resistance (except law descriptor spells)',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Law Vulnerability',
        description:
          'Takes 50% additional damage from lawful-aligned weapons and law descriptor spells. Suffers a -4 penalty on saving throws against law descriptor effects.',
      },
      {
        scalingType: 'flat',
        name: 'Chaos Field (Su)',
        description:
          "10-foot radius aura that causes automatic spell mishap for any spell cast within it. Supernatural effects treat caster level as equal to the creature's HD. Can be suppressed as a standard action.",
      },
      {
        scalingType: 'flat',
        name: 'Chaos Curse (Su)',
        description:
          '3/day; makes chaos field effects permanent via bestow curse mechanics on 3rd-level or higher spells.',
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description: '3/day; functions as polymorph.',
      },
      {
        scalingType: 'flat',
        name: 'Infusion of Chaos (Su)',
        description:
          'All attacks gain the chaos descriptor. Damage-dealing supernatural and spell abilities deal half their damage as chaotic damage.',
      },
      {
        scalingType: 'flat',
        name: 'Pandemoniac Corruption (Su)',
        description:
          'Outsiders only. Transmitted via natural attacks (Fort save DC 10 + 1/2 HD + Con modifier). Victims are incapacitated after 3d6 days and die within 3d12 hours. Spellcasters who die from this effect burst into a new agent of chaos.',
      },
      {
        scalingType: 'flat',
        name: 'Warpwave (Su)',
        description:
          'A successful melee attack triggers a Fortitude save (DC 10 + 1/2 HD + Con modifier) from the target or a random effect from a d20 table is applied.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 6. Aggregate (CR +1)
  {
    id: 'aggregate',
    name: 'Aggregate',
    description:
      'A robot that has been merged with an artificial intelligence (AI), combining the physical capabilities of the robot with the mental faculties of the AI into a single unified entity.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
      {
        type: 'special',
        description: 'Base creature must be a robot with sufficient storage capacity to house an AI.',
      },
    ],
    abilityScoreChangeNote:
      "Uses the base AI's INT, WIS, and CHA scores in place of the robot's. Retains the robot's STR, DEX, and CON.",
    features: [
      {
        scalingType: 'flat',
        name: 'Combined Defenses',
        description:
          'Retains all base robot defensive abilities plus all base AI defensive abilities.',
      },
      {
        scalingType: 'flat',
        name: 'All-Around Vision (Ex)',
        description:
          'When located in areas with cameras or sensors controlled by the base AI, the aggregate gains all-around vision.',
      },
      {
        scalingType: 'flat',
        name: 'Alignment Shift',
        description: "Alignment changes to match the base AI's alignment.",
      },
      {
        scalingType: 'flat',
        name: 'Tactical Initiative',
        description:
          "Uses the base AI's Intelligence modifier for Initiative checks instead of the robot's Dexterity modifier.",
      },
      {
        scalingType: 'flat',
        name: 'Combined Attacks',
        description: 'Retains base robot attacks and gains base AI special attacks.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Technology Guide',
    },
    visibility: 'global',
    rev: 1,
  },

  // 7. Airborne Creature (CR +1) [3pp]
  {
    id: 'airborne-creature',
    name: 'Airborne Creature',
    description:
      'An aquatic-dwelling aberration, animal, dragon, or magical beast that has adapted to the skies, trading its aquatic nature for aerial mastery.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'creature_type',
        allowed: ['aberration', 'animal', 'dragon', 'magical beast'],
      },
      { type: 'special', description: 'Base creature must be aquatic-dwelling.' },
    ],
    subtypeRemoves: ['aquatic'],
    abilityScoreChanges: [{ ability: 'DEX', change: 2 }],
    spellLikeAbilities: [
      {
        spellName: 'levitate',
        frequency: 'at_will',
        casterLevelFormula: 'equal to HD',
        condition: 'self only',
      },
      {
        spellName: 'control winds',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '1-8 HD',
      },
      {
        spellName: 'control winds',
        frequency: '3/day',
        casterLevelFormula: 'equal to HD',
        condition: '9-16 HD',
      },
      {
        spellName: 'control winds',
        frequency: 'at_will',
        casterLevelFormula: 'equal to HD',
        condition: '17+ HD',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Aerial Movement',
        description:
          'Fly speed replaces swim speed at an equal rate. Gains the Flyby Attack bonus feat.',
      },
      {
        scalingType: 'flat',
        name: 'Cloud Sight (Ex)',
        description: 'Can see through fog and clouds with perfect clarity.',
      },
      {
        scalingType: 'flat',
        name: 'Cloud Form (Su)',
        description: 'Can transform into vapor as a swift action.',
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

  // 8. Alacritous Creature (CR +2) [3pp]
  {
    id: 'alacritous-creature',
    name: 'Alacritous Creature',
    description:
      'A creature of supernatural speed and agility, capable of moving and acting at impossible velocities. Must not be incorporeal and must have a minimum move rate of 30 feet.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Not incorporeal; minimum move rate of 30 feet.' },
    ],
    spellLikeAbilities: [
      {
        spellName: 'freedom of movement',
        frequency: 'constant',
        casterLevelFormula: 'HD + 4',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Speed',
        description: 'All movement rates are doubled.',
      },
      {
        scalingType: 'flat',
        name: 'Improved Evasion (Ex)',
        description: 'As the rogue class ability.',
      },
      {
        scalingType: 'flat',
        name: 'Improved Uncanny Dodge (Ex)',
        description: 'As the barbarian class ability, at a level equal to total HD + 4.',
      },
      {
        scalingType: 'flat',
        name: 'Duck Aside (Ex)',
        description:
          '20% chance to step away from any attack that would otherwise hit it when not using Split Second. Stacks with concealment miss chance.',
      },
      {
        scalingType: 'flat',
        name: 'Pounce',
        description: 'Can make a full attack at the end of a charge.',
      },
      {
        scalingType: 'flat',
        name: 'Split Second (Su)',
        description:
          'Full-round action allowing double movement plus two standard actions (one at the original location, one at the new location). May charge/pounce or use Spring Attack. Treated as present at both locations for opportunity attacks until actions complete. Cannot be used in consecutive rounds.',
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

  // 9. Alchemical Construct (CR +0)
  {
    id: 'alchemical-construct',
    name: 'Alchemical Construct',
    description:
      'A construct suffused with alchemical reagents, granting it acid-dealing attacks but making it vulnerable to fire and susceptible to bleed damage from critical hits.',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    subtypeGains: ['alchemical'],
    features: [
      {
        scalingType: 'flat',
        name: 'Alchemy (Ex)',
        description:
          'All natural attacks made by the alchemical construct deal an additional 1d6 acid damage.',
      },
      {
        scalingType: 'flat',
        name: 'Broken Containers (Ex)',
        description:
          'Melee weapon attacks against the construct deal 1 point of acid damage to the attacker (1d6 on critical hits). The construct suffers 1d6 bleed damage from critical hits and can receive first aid from the Heal skill to stop bleeding.',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerable to Fire',
        description: 'Takes 150% as much damage as normal from fire attacks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Drop Dead Studios',
      publication: 'Ultimate Engineering',
    },
    visibility: 'global',
    rev: 1,
  },

  // 10. Alchemically Invisible (CR +2)
  {
    id: 'alchemically-invisible',
    name: 'Alchemically Invisible',
    description:
      'A creature rendered permanently and involuntarily invisible through alchemical treatment, but plagued by periodic bouts of confusion from the disorienting effect.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    features: [
      {
        scalingType: 'flat',
        name: 'Natural Invisibility (Ex)',
        description: 'The creature is naturally invisible at all times.',
      },
      {
        scalingType: 'flat',
        name: 'Disoriented (Ex)',
        description:
          'At the start of each combat round, the creature must succeed at a DC 15 Will save or become confused for 1 round.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Campaign Setting: Rival Guide',
    },
    visibility: 'global',
    rev: 1,
  },

  // 11. Alchemically Quickened (CR +1)
  {
    id: 'alchemically-quickened',
    name: 'Alchemically Quickened',
    description:
      'A creature treated with alchemical accelerants that increase its speed and grant a blurring effect when moving rapidly, though the treatment causes periodic bouts of mania.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    features: [
      {
        scalingType: 'flat',
        name: 'Quickened Speed',
        description: 'Base speed increases by 10 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Blur Effect (Ex)',
        description:
          'Each round the creature moves more than 10 feet, it gains the effect of a blur spell until the start of its next turn.',
      },
      {
        scalingType: 'flat',
        name: 'Alchemical Mania',
        description:
          'The creature suffers periodic bouts of mania as a side effect of its alchemical treatment.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: "Pathfinder Society Scenario #2-26: The Mantis's Prey",
    },
    visibility: 'global',
    rev: 1,
  },

  // 12. Alebrije (CR +2)
  {
    id: 'alebrije',
    name: 'Alebrije',
    description:
      'A vibrantly colored psychic animal or magical beast infused with dream energy from the Dimension of Dreams, granting it powerful dream-manipulation abilities and extraplanar nature.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal', 'magical beast'] },
    ],
    typeChange: 'magical beast (extraplanar)',
    typeChangeNote: 'Do not recalculate base attack bonus, saves, or skill ranks.',
    naturalArmorChange: 2,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 6 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 6 },
      { ability: 'CHA', change: 4 },
    ],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 5, maxHD: 10, value: 5, bypassedBy: 'magic' },
        { minHD: 11, value: 10, bypassedBy: 'magic' },
      ],
    },
    resistances: [
      { energyType: 'cold', value: 5 },
      { energyType: 'fire', value: 5 },
    ],
    srFormula: 'CR + 6 (at 5-10 HD) or CR + 11 (at 11+ HD)',
    spellLikeAbilities: [
      {
        spellName: 'dream',
        frequency: '3/day',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
      {
        spellName: 'nightmare',
        frequency: '3/day',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
      {
        spellName: 'dream council',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
      {
        spellName: 'dream travel',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
      {
        spellName: 'mind thrust III',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
      {
        spellName: 'plane shift',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
        condition: 'self plus 50 lbs. only',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Light Fortification',
        description:
          'Has light fortification (25% chance to negate critical hits and sneak attacks).',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Natural Attacks',
        description:
          'Primary natural attack damage dice increase by one step. All natural attacks count as magical for overcoming damage reduction.',
      },
      {
        scalingType: 'hd_threshold',
        name: 'Wings (5+ HD)',
        description: 'Grows wings; gains a fly speed of 20 ft. (average maneuverability).',
        minimumHD: 5,
      },
      {
        scalingType: 'hd_threshold',
        name: 'Improved Flight (11+ HD)',
        description:
          'Fly speed improves to 40 ft. (average). Existing fliers improve maneuverability one step.',
        minimumHD: 11,
      },
      {
        scalingType: 'flat',
        name: 'Size Increase (8+ HD)',
        description: 'Increases by one size category at 8 or more Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Dreamsight (Su)',
        description: 'Can notice and locate sleeping creatures within 500 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Telepathy',
        description: '100-foot range. Speaks one language of choice.',
      },
      {
        scalingType: 'flat',
        name: 'Senses',
        description: 'Darkvision 120 ft., scent.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Adventure Path #144: Midwives to Death',
    },
    visibility: 'global',
    rev: 1,
  },

  // 13. Alter Ego (CR +0)
  {
    id: 'alter-ego',
    name: 'Alter Ego',
    description:
      'A psychic construct duplicate of a living creature, created from ectoplasm and mental energy. It perfectly resembles its progenitor but is dependent on proximity to its source.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description: 'Corporeal creature with an Intelligence score of 3 or higher.',
      },
    ],
    typeChange: 'construct',
    typeChangeNote:
      'Retains all subtypes except alignment subtypes and subtypes indicating kind.',
    subtypeRemoves: ['alignment subtypes', 'kind-indicating subtypes'],
    abilityScoreChanges: [{ ability: 'DEX', change: 4 }],
    abilityScoreChangeNote: 'Loses Constitution score (construct trait).',
    naturalArmorChange: -2,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 10, value: 5, bypassedBy: 'adamantine' },
        { minHD: 11, value: 10, bypassedBy: 'adamantine' },
      ],
    },
    fastHealing: '1 (or 3 if 11+ Hit Dice)',
    features: [
      {
        scalingType: 'flat',
        name: 'Construct Traits',
        description: 'Gains all standard construct immunities and traits.',
      },
      {
        scalingType: 'flat',
        name: 'Progenitor Dependence (Ex)',
        description: 'Becomes nauseated if it moves beyond 1 mile from its living progenitor.',
      },
      {
        scalingType: 'flat',
        name: 'Replicated Gear (Ex)',
        description:
          "Copies of equipment are made of ectoplasm and dissolve 1 round after leaving the alter ego's possession.",
      },
      {
        scalingType: 'flat',
        name: 'Sense Progenitor (Su)',
        description:
          'Always knows the direction and distance to its progenitor. Blocks scrying against the progenitor. Maintains constant detect thoughts and true seeing against the progenitor (CL 20th, undispellable).',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Slam',
        description:
          'Gains a slam attack dealing damage as one size category larger than the base creature.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 6',
    },
    visibility: 'global',
    rev: 1,
  },

  // 14. Amalgam Creature (CR Special) [3pp]
  {
    id: 'amalgam-creature',
    name: 'Amalgam Creature',
    description:
      'A complex fusion of two base creatures into a single entity, combining their physical forms, abilities, and mental faculties. One of the most complicated templates in existence.',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Two base creatures to combine.' },
    ],
    abilityScoreChangeNote:
      'Mental ability scores averaged (round down if 10+, round up if below 10). Physical ability scores averaged with size adjustments applied stepwise.',
    features: [
      {
        scalingType: 'flat',
        name: 'Amalgam Form',
        description:
          'Size equals the larger base creature. Body form matches the creature with the most total HD. Limbs combine from both creatures. Natural armor is averaged from both base creatures (rounded down), adjusted for size differences.',
      },
      {
        scalingType: 'flat',
        name: 'Combined Type',
        description:
          'Type determined by cross-referencing base creature types on the provided table. Retains non-conflicting subtypes from both base creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Combined Movement',
        description:
          'Possesses all movement modes from both creatures. Uses the higher speed when both have the same mode. Uses the better fly maneuverability if applicable.',
      },
      {
        scalingType: 'flat',
        name: 'Combined Defenses',
        description:
          'Retains all immunities, resistances, and damage reduction from both creatures. Uses higher value when both have the same ability type. Immunity supersedes resistance. Retains all weaknesses from both creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Combined Attacks',
        description:
          "Retains primary attacks from creature with more HD. Gains secondary attacks from the other creature's limb-associated attacks. Weapon attacks are always primary.",
      },
      {
        scalingType: 'flat',
        name: 'Combined Spellcasting',
        description:
          'Retains all spellcasting and spell-like abilities from both creatures. Caster level equals HD. Uses the higher ability score if creatures used different casting abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Combined Senses',
        description:
          "Combines both creatures' senses and uses the highest range values.",
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

  // 15. Amber Creature (CR +1) [3pp]
  {
    id: 'amber-creature',
    name: 'Amber Creature',
    description:
      'A construct formed of animate amber resin, possessing hardness, adhesive surfaces, and the disturbing ability to trap living creatures within its body to sustain itself.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    typeChange: 'construct',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
    ],
    abilityScoreChangeNote: 'Loses Constitution score (construct trait).',
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Construct Traits',
        description: 'Gains all standard construct immunities and traits.',
      },
      {
        scalingType: 'flat',
        name: 'Hardness (Ex)',
        description:
          'Gains hardness equal to its Hit Dice. Takes only half damage from energy attacks (before hardness is applied). Spells affecting objects bypass this protection.',
      },
      {
        scalingType: 'flat',
        name: 'Adhesive (Ex)',
        description:
          'Melee attackers must succeed at a Reflex save or their weapon adheres to the creature.',
      },
      {
        scalingType: 'flat',
        name: 'Anathema of Movement (Su)',
        description:
          'Automatically dispels freedom of movement effects, or takes damage if it cannot dispel them.',
      },
      {
        scalingType: 'flat',
        name: 'Moving Engulf (Ex)',
        description: 'Can attempt to engulf creatures during a move action or charge.',
      },
      {
        scalingType: 'flat',
        name: 'Trapped in Amber (Ex)',
        description:
          'Must suffocate at least one living creature within itself each week or become immobile. Gains 1d6 temporary hit points per HD of each creature it kills in this manner.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 16. Amphibious Creature (CR +?) [3pp]
  {
    id: 'amphibious-creature',
    name: 'Amphibious Creature',
    description:
      'A creature adapted to both aquatic and terrestrial environments. The CR adjustment varies based on the base creature.',
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'special',
        description:
          'Living, corporeal creature that breathes air and lacks a swim speed, OR breathes water and lacks a land speed.',
      },
    ],
    subtypeGains: ['aquatic'],
    abilityScoreChanges: [
      { ability: 'DEX', change: -2, minimum: 1 },
      { ability: 'CON', change: 2 },
    ],
    naturalArmorChange: -2,
    features: [
      {
        scalingType: 'flat',
        name: 'Amphibious (Ex)',
        description:
          'Gains the amphibious universal monster ability, allowing it to breathe both air and water.',
      },
      {
        scalingType: 'flat',
        name: 'Low-Light Vision',
        description: 'Gains low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Breathing Skin (Ex)',
        description:
          '-2 penalty on Fortitude saves against gases, contact or inhaled poisons, and inhaled effects.',
      },
      {
        scalingType: 'flat',
        name: 'Aquatic Speed',
        description:
          'Land-based creatures gain a swim speed equal to their highest other speed. Water-based creatures gain a land speed 10 ft. slower than their swim speed. All land/climb/fly/burrow speeds reduced by 10 ft. (minimum 5 ft.).',
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

  // 17. Amphisbaena Creature (CR +2) [3pp]
  {
    id: 'amphisbaena-creature',
    name: 'Amphisbaena Creature',
    description:
      'A creature with two heads, one at each end of its body, granting it all-around vision and the terrifying ability to split in two and continue fighting when bisected.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Base creature must have a definite head.' },
    ],
    typeChange:
      'Animals and vermin become magical beasts; humanoids become monstrous humanoids; others unchanged.',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -2 },
      { ability: 'CON', change: 2 },
    ],
    resistances: [{ energyType: 'cold', value: 10 }],
    features: [
      {
        scalingType: 'flat',
        name: 'All-Around Vision (Ex)',
        description:
          'Cannot be flanked. Sees in all directions simultaneously. Gains a +4 racial bonus on Perception checks.',
      },
      {
        scalingType: 'flat',
        name: 'Split (Ex)',
        description:
          'When the creature takes sufficient slashing damage in a single attack (thresholds: 10+ for Tiny through 60+ for Colossal), it splits into two functional halves each retaining half the original hit points. The halves reattach after 1d2 days. Cannot split again until fully reattached.',
      },
      {
        scalingType: 'flat',
        name: 'Two-Headed Attacks',
        description:
          'Each head can independently make forequarter attacks. Gains an additional bite attack from its second head.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors Complete',
    },
    visibility: 'global',
    rev: 1,
  },

  // 18. Amphisbaena Serpent Template (CR +2)
  {
    id: 'amphisbaena-serpent-template',
    name: 'Amphisbaena Serpent Template',
    description:
      'A template for snakes that grow a second head at their tail, becoming a two-headed serpent with regenerative capabilities and uncanny defensive instincts.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
      {
        type: 'special',
        description: 'Base creature must be a snake with the animal or dire animal type.',
      },
    ],
    typeChange: 'magical beast',
    regeneration: '3 (fire and acid deal normal damage)',
    features: [
      {
        scalingType: 'flat',
        name: 'Second Bite',
        description:
          'Gains an extra bite attack from its second head. Retains all base creature attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Improved Uncanny Dodge (Ex)',
        description: 'Identical to the rogue class ability.',
      },
      {
        scalingType: 'flat',
        name: 'Split (Su)',
        description: 'Severed portions of the creature reattach within one minute.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Magic Skull Games',
      publication: 'Grimoire Viperian: A Tome of Exotic Lore',
    },
    visibility: 'global',
    rev: 1,
  },

  // 19. Angelic Vessel (CR varies) [3pp]
  {
    id: 'angelic-vessel',
    name: 'Angelic Vessel',
    description:
      'A living non-evil creature that has consented to house an angel within its body, gaining celestial power and sacred attacks. CR adjustment varies by angel type (+2 to +5).',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Living, non-evil creature. Not an outsider or undead. Willing consent required.',
      },
    ],
    subtypeGains: ['good'],
    abilityScoreChangeNote:
      "INT, WIS, and CHA increase to match the inhabiting angel's scores if they are higher.",
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'evil' },
    resistances: [
      { energyType: 'acid', value: 20 },
      { energyType: 'cold', value: 20 },
    ],
    srFormula: '11 + total HD',
    spellLikeAbilities: [
      {
        spellName: 'detect evil',
        frequency: 'at_will',
        casterLevelFormula: 'equal to HD',
      },
      {
        spellName: 'cure light wounds',
        frequency: 'at_will',
        casterLevelFormula: 'equal to HD',
        condition: 'not available for cassisian-invested',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Deflection Bonus',
        description: 'Gains a deflection bonus to AC equal to its Charisma modifier (minimum +0).',
      },
      {
        scalingType: 'flat',
        name: 'Sacred Attacks (Su)',
        description:
          'Melee attacks deal +2d6 damage against evil creatures (+1d6 for cassisian-invested).',
      },
      {
        scalingType: 'flat',
        name: 'Sacred Smite (Su)',
        description:
          'As a swift action, can call upon holy power. Usable 1 + 1 per 5 HD times per day.',
      },
      {
        scalingType: 'flat',
        name: 'Angelic Inhabitation (Su)',
        description:
          'The angel mentally guides and communicates with its host via two-way telepathy.',
      },
      {
        scalingType: 'flat',
        name: 'Dying Burst (Su)',
        description:
          'When slain, releases a burst equivalent to a holy word effect with a 60-foot range.',
      },
      {
        scalingType: 'flat',
        name: 'Spell Vulnerability',
        description:
          'Affected by dismissal, dispel good, and banishment as an outsider with the good subtype.',
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

  // 20. Animal Lord (CR +2)
  {
    id: 'animal-lord',
    name: 'Animal Lord',
    description:
      'A powerful humanoid who has bonded deeply with a specific species of animal, gaining the ability to transform into that animal, command animals of its affinity, and share their supernatural traits.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid'] },
      { type: 'min_hd', minimum: 10 },
    ],
    typeChange: 'outsider (native, shapechanger)',
    subtypeGains: ['native', 'shapechanger'],
    naturalArmorChange: 2,
    abilityScoreChangeNote:
      'Uses the higher ability score between base creature and base animal form for each ability, then increases all scores by +4.',
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'silver' },
    immunities: [
      'varies by species affinity (charm, disease, or poison depending on type)',
    ],
    spellLikeAbilities: [
      {
        spellName: 'charm animal',
        frequency: 'at_will',
        casterLevelFormula: 'equal to HD',
        dcAbility: 'CHA',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          "Can transform into its affinity animal form as a move action. Animal form is limited to one size category larger than the base humanoid.",
      },
      {
        scalingType: 'flat',
        name: 'Dominion (Su)',
        description: 'Can speak with animals of its affinity species at will.',
      },
      {
        scalingType: 'flat',
        name: 'Species-Specific Abilities',
        description:
          'Gains unique abilities based on its animal affinity (e.g., Bear Hug, Savage Assault, Deadly Leap, etc.).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 3',
    },
    visibility: 'global',
    rev: 1,
  },

  // 21. Animus Shade (CR +2)
  {
    id: 'animus-shade',
    name: 'Animus Shade',
    description:
      'The incorporeal undead remnant of a psychic creature that died from psychic injury. It retains fragments of its former mind but radiates destructive mental static.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living creature.' },
      { type: 'special', description: 'Charisma score of 6 or higher.' },
      { type: 'special', description: 'Intelligence score of 8 or higher.' },
      { type: 'special', description: 'Must have died from psychic injury.' },
    ],
    typeChange: 'undead',
    subtypeGains: ['incorporeal'],
    abilityScoreChanges: [{ ability: 'CHA', change: 4 }],
    abilityScoreChangeNote:
      'Loses Strength and Constitution scores (incorporeal undead trait).',
    immunities: [
      'alignment-based effects',
      'ability damage',
      'ability drain',
      'energy drain',
      'fatigue',
      'exhaustion',
      'negative energy',
      'paralysis',
      'death effects',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Incorporeal Movement',
        description:
          'Fly speed 30 ft. (perfect maneuverability), or better if the base creature had a superior fly speed.',
      },
      {
        scalingType: 'flat',
        name: 'Deflection Bonus',
        description: 'Gains a deflection bonus to AC equal to its Charisma modifier.',
      },
      {
        scalingType: 'flat',
        name: 'Mental Static (Su)',
        description:
          'Aura of disruptive psychic energy that interferes with concentration and psychic abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Mental Schism (Su)',
        description: 'Immune to all alignment-based effects.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: '+4 bonus on saving throws against channel energy effects.',
      },
      {
        scalingType: 'flat',
        name: 'Animus Insinuation (Su)',
        description: 'Touch attack that functions as id insinuation.',
      },
      {
        scalingType: 'flat',
        name: 'Corrupt Intent (Su)',
        description: 'Imposes an attack penalty on affected targets.',
      },
      {
        scalingType: 'flat',
        name: 'Rend Psyche (Su)',
        description: 'Ranged touch attack that deals Charisma damage.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Darkvision 60 ft.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 6',
    },
    visibility: 'global',
    rev: 1,
  },

  // 22. Apocalypse Swarm (CR +3) [3pp]
  {
    id: 'apocalypse-swarm',
    name: 'Apocalypse Swarm',
    description:
      'An apocalyptically empowered swarm creature of immense destructive capability, capable of splitting itself, inducing terror, and regenerating rapidly from damage.',
    crAdjustment: 3,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'subtype', required: ['swarm'] },
    ],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 2 },
    ],
    fastHealing: '10',
    srFormula: '11 + 1/2 total racial HD',
    features: [
      {
        scalingType: 'flat',
        name: 'Alignment Subtypes',
        description: "Gains alignment subtypes matching the base creature's alignment.",
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Swarm',
        description:
          'Gains 5 racial Hit Dice beyond the base creature total. All movement speeds doubled. Melee damage increases by +2d6.',
      },
      {
        scalingType: 'flat',
        name: 'Fear Aura (Su)',
        description:
          '100-foot range. Any creature that enters or begins its turn in the aura must succeed at a Will save (Charisma-based DC) or be frightened for 10 rounds. Success leaves the creature shaken for 10 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Split (Ex)',
        description:
          'When the swarm takes damage equal to or greater than its HD in a single attack, it divides into two identical swarms.',
      },
      {
        scalingType: 'flat',
        name: 'Greater Distraction (Ex)',
        description:
          'Any living creature damaged by the swarm becomes nauseated for 1d4 rounds. A Fortitude save (DC 10 + 1/2 HD + Con modifier) negates.',
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

  // 23. Apostle Kyton (CR +2) - Arcforge/Legendary Games version [3pp]
  {
    id: 'apostle-kyton',
    name: 'Apostle Kyton',
    description:
      'A humanoid or monstrous humanoid transformed into a psionic kyton outsider through ritual pain and devotion, gaining extraordinary physical enhancement and the ability to regenerate.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid', 'monstrous humanoid'] },
    ],
    typeChange: 'outsider (kyton, native, psionic)',
    subtypeGains: ['kyton', 'native', 'psionic', 'augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 6 },
      { ability: 'CHA', change: 6 },
    ],
    naturalArmorChange: 4,
    immunities: ['cold'],
    regeneration: '1/2 Hit Dice (negated by good weapons, good spells, and silver)',
    srFormula: '11 + CR (power resistance)',
    features: [
      {
        scalingType: 'flat',
        name: 'Agonizing Prayer (Su)',
        description: 'A supernatural attack that inflicts agonizing pain on enemies.',
      },
      {
        scalingType: 'flat',
        name: 'Bleeding Touch (Su)',
        description: 'Touch attack dealing bleed damage.',
      },
      {
        scalingType: 'flat',
        name: 'Seductive Oration (Su)',
        description: 'Supernatural ability to compel or influence through spoken words.',
      },
      {
        scalingType: 'flat',
        name: 'Unnerving Gaze (Su)',
        description: 'Gaze attack that unnerves and unsettles targets.',
      },
      {
        scalingType: 'hd_threshold',
        name: 'Ectoplasmic Voyager (Ps)',
        description: 'At-will psi-like ability. Manifester level equals HD.',
        minimumHD: 11,
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Darkvision 60 ft.',
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

  // 24. Apostle Kyton (CR +2) - Paizo/Horror Adventures version
  {
    id: 'apostle-kyton-2',
    name: 'Apostle Kyton',
    description:
      'A humanoid or monstrous humanoid transformed into a kyton outsider through ritual self-torture and dark devotion, gaining immense physical power, cold immunity, and regeneration.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid', 'monstrous humanoid'] },
    ],
    typeChange: 'outsider (kyton, native)',
    subtypeGains: ['kyton', 'native', 'augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 6 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 6 },
      { ability: 'CHA', change: 6 },
    ],
    naturalArmorChange: 4,
    immunities: ['cold'],
    regeneration: '1/2 Hit Dice (negated by good weapons, good spells, and silver)',
    srFormula: '11 + CR',
    spellLikeAbilities: [
      {
        spellName: 'shadow walk',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: '11-19 HD; at will at 20+ HD',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Agonizing Prayer (Su)',
        description:
          'Full-round action sonic pain effect that torments nearby creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Bleeding Touch (Su)',
        description: 'Touch attack dealing 1 + 1d6 per 10 HD bleed damage.',
      },
      {
        scalingType: 'flat',
        name: 'Seductive Oration (Su)',
        description:
          'Full-round action ability that deals Wisdom damage to fascinated or willing creatures.',
      },
      {
        scalingType: 'flat',
        name: 'Unnerving Gaze (Su)',
        description: 'Gaze attack that causes fascination.',
      },
      {
        scalingType: 'flat',
        name: 'Shadow Traveler (Ex)',
        description: 'When using shadow walk, travels at approximately 100 mph.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Darkvision 60 ft.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    visibility: 'global',
    rev: 1,
  },

  // 25. Aquatic Creature (CR +0) [3pp]
  {
    id: 'aquatic-creature',
    name: 'Aquatic Creature',
    description:
      'A simple template representing the aquatic adaptation of any land or flying creature, granting it the ability to operate underwater.',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    subtypeGains: ['aquatic'],
    features: [
      {
        scalingType: 'flat',
        name: 'Aquatic Adaptation (Ex)',
        description:
          'Exclusive underwater dwellers replace their land or fly speed with an identical swim speed. Land-capable creatures gain the amphibious quality, reduce land speed by 10 ft., lose fly speed, and gain a swim speed equal to their original speed.',
      },
      {
        scalingType: 'flat',
        name: 'Low-Light Vision',
        description: 'Gains low-light vision 60 ft.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Open Design LLC',
      publication: 'Kobold Quarterly issue 13',
    },
    visibility: 'global',
    rev: 1,
  },
];
