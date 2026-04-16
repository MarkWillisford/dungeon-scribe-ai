// Batch 011 | first: 'Lamia Harridan (CR +1)' | last: 'Missing (CR +3)' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_011: TemplateDefinition[] = [
  // 251. Lamia Harridan (CR +1) — first URL variant
  {
    id: 'lamia-harridan',
    name: 'Lamia Harridan',
    description:
      'A Large lamia or lamia matriarch of at least 10th level in a divine spellcasting class who has grown to Huge size through fell power, gaining greater strength, pounce, and a more devastating wisdom-draining touch.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['monstrous humanoid'] },
      { type: 'special', description: 'Must be a Large lamia or lamia matriarch with at least 10 levels in a divine spellcasting class; excludes kuchrimas and hungerers.' },
    ],
    sizeChange: 1,
    abilityScoreChanges: [
      { ability: 'STR', change: 8 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 3,
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'magic' },
    srFormula: 'CR + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Size Increase to Huge',
        description:
          'The harridan grows from Large to Huge. Size penalty on attack rolls becomes –2; base claw damage increases to 1d6.',
      },
      {
        scalingType: 'flat',
        name: 'Pounce (Ex)',
        description:
          'The harridan gains the pounce ability, allowing it to make a full attack at the end of a charge. When using pounce, it also gains rake attacks with its hind claws, which deal damage identical to its normal claw attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Wisdom Drain (Su)',
        description:
          'The harridan drains 1d8 points of Wisdom each time it hits with its touch attack (increased from the base lamia).',
      },
      {
        scalingType: 'flat',
        name: 'Elevated Spell-Like Ability Caster Level',
        description:
          "The caster level for the harridan's spell-like abilities increases to match her divine spellcasting class level.",
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 252. Lamia Harridan (CR +1) — second URL (duplicate; append -2)
  {
    id: 'lamia-harridan-2',
    name: 'Lamia Harridan',
    description:
      'Duplicate listing of the Lamia Harridan template (CR +1). A Large lamia of at least 10th divine spellcasting level transformed into a Huge, pouncing predator with greater physical power and a more potent wisdom drain.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['monstrous humanoid'] },
      { type: 'special', description: 'Must be a Large lamia or lamia matriarch with at least 10 levels in a divine spellcasting class; excludes kuchrimas and hungerers.' },
    ],
    sizeChange: 1,
    abilityScoreChanges: [
      { ability: 'STR', change: 8 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 3,
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'magic' },
    srFormula: 'CR + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Size Increase to Huge',
        description:
          'The harridan grows from Large to Huge. Size penalty on attack rolls becomes –2; base claw damage increases to 1d6.',
      },
      {
        scalingType: 'flat',
        name: 'Pounce (Ex)',
        description:
          'Gains pounce, allowing a full attack at the end of a charge. When pouncing, also gains rake attacks with hind claws identical to normal claw attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Wisdom Drain (Su)',
        description: 'Drains 1d8 points of Wisdom each time it hits with its touch attack.',
      },
      {
        scalingType: 'flat',
        name: 'Elevated Spell-Like Ability Caster Level',
        description:
          "Caster level for spell-like abilities increases to match the harridan's divine spellcasting class level.",
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 253. Landwalker (CR +1) [3pp]
  {
    id: 'landwalker',
    name: 'Landwalker',
    description:
      'An aquatic animal, magical beast, or vermin that has adapted to life on land. It gains a ground speed, amphibious quality, and increased physical hardiness, but its swim speed is slightly reduced.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Must be an aquatic animal, magical beast, or vermin with the aquatic subtype and a land speed of 5 feet or less.',
      },
    ],
    typeChange: 'magical beast (if not already)',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -2 },
      { ability: 'CON', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Adapted Land Speed',
        description:
          "The landwalker gains a ground speed equal to one-half its swim speed or 20 feet, whichever is greater. Its swim speed is reduced by 10 feet (minimum 10 feet). All racial Hit Dice change to d10s; base attack bonus, base saves, and skill points are not recalculated.",
      },
      {
        scalingType: 'flat',
        name: 'Senses',
        description:
          'Gains darkvision 60 feet (or greater if already possessed) and low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Amphibious (Ex)',
        description: 'The landwalker can breathe both air and water.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Necromancer Games',
      publication: 'Tome of Horrors Complete',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 254. Lawbound Creature (CR +1) [3pp]
  {
    id: 'lawbound-creature',
    name: 'Lawbound Creature',
    description:
      'A creature infused with the power of absolute law, gaining lawful subtypes, order-enforcing auras, and the ability to punish chaos. It must remain lawful neutral or lose the template.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful neutral'] },
    ],
    subtypeGains: ['lawful'],
    abilityScoreChangeNote:
      'Choose one set at template application — Physical Focus: +2 Str, +2 Dex, +2 Con; –2 Int, –2 Wis, –2 Cha (minimum 1 each). Mental Focus: –2 Str, –2 Dex, –2 Con (minimum 1 each); +2 Int, +2 Wis, +2 Cha.',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 4, value: 5, bypassedBy: 'chaotic' },
        { minHD: 5, maxHD: 9, value: 10, bypassedBy: 'chaotic' },
        { minHD: 10, value: 15, bypassedBy: 'chaotic' },
      ],
    },
    spellLikeAbilities: [
      {
        spellName: 'protection from chaos',
        frequency: 'constant',
        casterLevelFormula: 'equal to HD',
      },
      {
        spellName: 'charm person',
        frequency: '3/day',
        casterLevelFormula: 'equal to HD',
      },
      {
        spellName: 'dominate person',
        frequency: '3/day',
        casterLevelFormula: 'equal to HD',
        condition: 'only 1 at a time',
      },
      {
        spellName: 'charm monster',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
      },
      {
        spellName: 'dominate monster',
        frequency: '1/day',
        casterLevelFormula: 'equal to HD',
        condition: 'only 1 at a time',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'See Law (Su)',
        description:
          'At will, the lawbound creature can identify any lawful creatures, spells, and magic items that it can see.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Order (Su)',
        description:
          'Non-lawful creatures within 10 feet suffer a –5 penalty on ability checks, skill checks, and level checks, and automatically miss attacks and fail saving throws on a natural roll of 5 or lower.',
      },
      {
        scalingType: 'flat',
        name: 'Lawful Strike (Su)',
        description:
          'Melee and ranged attacks deal an extra +1d6 damage against chaotic creatures or creatures with the chaotic subtype. All attacks count as lawful-aligned for the purposes of overcoming DR.',
      },
      {
        scalingType: 'flat',
        name: "Law's Shift (Su)",
        description:
          "Once per day, the lawbound creature may touch a target to force its alignment one step toward lawful (Will save negates; DC is Charisma-based). Creatures reduced to lawful alignment lose this vulnerability.",
      },
      {
        scalingType: 'flat',
        name: "Chaos's Failure (Su)",
        description:
          "Chaotic spells cast within 60 feet of the lawbound creature require the caster to succeed on a caster level check (DC is Charisma-based) or the spell fails.",
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

  // 255. Lich (CR +2)
  {
    id: 'lich',
    name: 'Lich',
    description:
      'A powerful spellcaster who has achieved undead immortality by binding their soul to a phylactery. The lich gains formidable undead defenses, a paralyzing touch, a fear aura, and the ability to rejuvenate after destruction as long as the phylactery survives.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'min_hd', minimum: 11 },
      {
        type: 'special',
        description:
          'Must be a spellcaster capable of casting at least 5th-level spells. Must craft a phylactery (Craft Wondrous Item, 120,000 gp, CL 11+).',
      },
    ],
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote: 'Constitution score is removed (undead have no Con score). Bonus HP use Charisma modifier.',
    naturalArmorChange: 5,
    damageReduction: { scalingType: 'flat', value: 15, bypassedBy: 'bludgeoning and magic' },
    resistances: [
      { energyType: 'cold', value: 'immunity' },
      { energyType: 'electricity', value: 'immunity' },
    ],
    immunities: ['standard undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'The lich gains a +4 bonus to saves against channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The lich gains darkvision with a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Touch Attack',
        description:
          'The lich can make one melee touch attack per round as a natural weapon, dealing 1d8 points of damage to living creatures + 1 point per 2 Hit Dice of the lich.',
      },
      {
        scalingType: 'flat',
        name: 'Fear Aura (Su)',
        description:
          'Creatures of fewer than 5 HD within 60 feet of the lich that fail a Will save (DC 10 + 1/2 HD + Cha modifier) are frightened for a number of rounds equal to the lich\'s HD. Creatures of 5 or more HD that fail the save are shaken for the same duration.',
      },
      {
        scalingType: 'flat',
        name: 'Paralyzing Touch (Su)',
        description:
          'Any living creature hit by the lich\'s touch attack must succeed at a Fortitude save (DC 10 + 1/2 HD + Cha modifier) or be permanently paralyzed. Remove paralysis or any spell that can remove a curse can end the effect.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          "If destroyed, the lich's phylactery reassembles the lich's body over 1d10 days. The lich can be permanently destroyed only by destroying the phylactery first, then slaying the lich.",
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonuses',
        description:
          'The lich gains a +8 racial bonus on Perception, Sense Motive, and Stealth checks. Class skills become: Climb, Disguise, Fly, Intimidate, Knowledge (arcana), Knowledge (religion), Perception, Sense Motive, Spellcraft, Stealth.',
      },
      {
        scalingType: 'flat',
        name: 'Undead HD',
        description: 'All racial Hit Dice become d8s. Class-based Hit Dice remain unchanged.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 256. Lich, Psychic (CR +2)
  {
    id: 'lich-psychic',
    name: 'Psychic Lich',
    description:
      'A psychic spellcaster who has achieved undead immortality by binding their consciousness to a memoir object. The psychic lich retains vulnerability to mind-affecting effects, feeding on them for healing, and gains a bewildering touch in place of paralysis.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'min_hd', minimum: 11 },
      {
        type: 'special',
        description:
          'Must be a psychic spellcaster capable of casting at least 5th-level spells. Must craft a memoir (Craft Wondrous Item, 120,000 gp, CL 11+).',
      },
    ],
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote: 'Constitution score is removed (undead have no Con score). Bonus HP use Charisma modifier.',
    naturalArmorChange: 5,
    damageReduction: { scalingType: 'flat', value: 15, bypassedBy: 'bludgeoning and magic' },
    resistances: [
      { energyType: 'cold', value: 'immunity' },
      { energyType: 'electricity', value: 'immunity' },
    ],
    immunities: ['standard undead immunities (but NOT mind-affecting immunity — see Psychic Feast)'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'The psychic lich gains a +4 bonus to saves against channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'Gains darkvision with a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Touch Attack',
        description:
          'The psychic lich can make one melee touch attack per round as a natural weapon, dealing 1d8 points of damage + 1 point per 2 Hit Dice to a target. Ineffective against creatures immune to mind-affecting effects.',
      },
      {
        scalingType: 'flat',
        name: 'Bewildering Touch (Su)',
        description:
          "Any living creature hit by the psychic lich's touch attack must succeed at a Fortitude save (DC 10 + 1/2 HD + Cha modifier) or become permanently confused. This confusion can be removed by calm emotions or a successful save against a curse-removal spell with the same DC.",
      },
      {
        scalingType: 'flat',
        name: 'Psychic Feast (Ex)',
        description:
          'The psychic lich does not gain standard undead immunity to mind-affecting effects; instead it gains a +4 bonus on saves against them. When the psychic lich succeeds on a saving throw against a reduced-effect (half-effect) attack, it takes no effect. When a mind-affecting spell that the psychic lich fails to resist successfully takes effect, the lich heals 1d8 hit points plus the spell\'s caster level.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          "If destroyed, the psychic lich's body reforms near its memoir in 10d10 days, or sooner if the memoir is read. The lich can be permanently destroyed only by forcing it into a psychic duel (via instigate psychic duel), casting mindscape door while it is in the memoir, or using plane shift to send the memoir to another plane.",
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'The psychic lich gains Psychic Combatant and Psychic Defender as bonus feats without needing to meet their prerequisites.',
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonuses',
        description:
          'The psychic lich gains a +8 racial bonus on Perception, Sense Motive, and Stealth checks. Class skills become: Climb, Disguise, Fly, Intimidate, Knowledge (arcana), Knowledge (religion), Perception, Sense Motive, Spellcraft, Stealth.',
      },
      {
        scalingType: 'flat',
        name: 'Undead HD',
        description: 'All racial Hit Dice become d8s. Class-based Hit Dice remain unchanged.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG Occult Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 257. Lifespark Construct (CR Special) [3pp]
  {
    id: 'lifespark-construct',
    name: 'Lifespark Construct',
    description:
      'A construct that has been granted a spirit and limited sentience, losing some construct immunities in exchange for the ability to think, feel, and repair itself. Its Intelligence, Wisdom, and Charisma are replaced with new scores.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'New Ability Scores',
        description:
          'Replace Intelligence, Wisdom, and Charisma with new scores as if creating a new character. All other ability scores remain unchanged.',
      },
      {
        scalingType: 'flat',
        name: 'Healing Immunity (Ex)',
        description:
          'Cannot be affected by spells with the healing descriptor unless the spell specifically states it can affect constructs.',
      },
      {
        scalingType: 'flat',
        name: 'Open Mind (Ex)',
        description:
          'The lifespark construct is no longer immune to mind-affecting effects and takes a –2 penalty on saving throws against them.',
      },
      {
        scalingType: 'flat',
        name: 'Spirit Within (Ex)',
        description:
          'Can be affected by astral projection, clone, magic jar, and soul bind as if living. Still immune to death effects. Can be the target of reincarnate.',
      },
      {
        scalingType: 'flat',
        name: 'Accelerated Repair (Ex)',
        description:
          'As a full-round action, the lifespark construct can repair itself by making a Craft check; it heals 1d4 hit points per point by which the check exceeds the DC. This action provokes attacks of opportunity.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Points',
        description:
          'Gains (2 + Int modifier, minimum 1) skill points per Hit Die. Typically invests in Craft skills for self-repair.',
      },
      {
        scalingType: 'flat',
        name: 'Languages',
        description:
          "Can speak without a mouth. Automatically knows the creator's language plus any bonus languages the creator knows.",
      },
      {
        scalingType: 'flat',
        name: 'Feats',
        description:
          'Retains bonus feats; loses other feats except racial bonus feats. Recalculates feats based on total character level (racial + class HD).',
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

  // 258. Limbjack (CR +1) [3pp]
  {
    id: 'limbjack',
    name: 'Limbjack',
    description:
      'A living creature that has had one or more limbs replaced with mechanical or magical constructs, granting it near-invulnerable replaced limbs, a shield bonus, potentially doubled movement speed, and the ability to upgrade those limbs as weapons.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['ooze'] },
      { type: 'special', description: 'Must be a living, corporeal creature.' },
    ],
    abilityScoreChangeNote:
      'Gains +2 Strength per arm replaced. Gains +2 Constitution if all arms or all legs are replaced (bonuses stack if both conditions are met).',
    features: [
      {
        scalingType: 'flat',
        name: 'Shield Bonus (Ex)',
        description:
          'Gains a shield bonus to AC equal to 1 + 1 per arm replaced + 2 if all legs are replaced.',
      },
      {
        scalingType: 'flat',
        name: 'Limb Defense (Ex)',
        description:
          'Against attacks specifically targeting replaced limbs, the creature gains DR 20/adamantine and resistance 30 to acid, cold, and fire. Against spells specifically targeting replaced limbs, it gains SR equal to 15 + the creature\'s CR.',
      },
      {
        scalingType: 'flat',
        name: 'Metal Body (Ex)',
        description:
          'The limbjack counts as a ferrous creature for the purposes of rusting grasp and other effects that have special interactions with metal.',
      },
      {
        scalingType: 'flat',
        name: 'Doubled Speed and Tireless (Ex)',
        description:
          'If all legs are replaced, the base land speed is doubled. The limbjack does not have a limit to how long it can run, nor does it risk fatigue or exhaustion from forced marching.',
      },
      {
        scalingType: 'flat',
        name: 'Mechanical Natural Attacks',
        description:
          "For each replaced arm that previously lacked natural attacks, the limbjack gains a slam or claw attack dealing damage as if one size category larger. Natural attacks on replaced limbs increase their damage by one step.",
      },
      {
        scalingType: 'flat',
        name: 'Upgradable Limbs (Ex)',
        description:
          'Natural attacks associated with a replaced limb can be upgraded to be masterwork, made of special materials, or enchanted as magic weapons.',
      },
      {
        scalingType: 'flat',
        name: 'CR Scaling Note',
        description:
          'CR increases by an additional +1 for every 2 arms replaced beyond the first two, and by an additional +1 if all limbs are replaced.',
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

  // 259. Living Flesh Golem Simple Template (CR +2)
  {
    id: 'living-flesh-golem',
    name: 'Living Flesh Golem Simple Template',
    description:
      'A living corporeal creature transformed into a flesh golem-like construct hybrid. It retains its original spirit and class levels but gains the resilience, strength, and berserk fury of a flesh golem.',
    crAdjustment: 2,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'special', description: 'Must be a living corporeal creature.' },
    ],
    typeChange: 'construct',
    abilityScoreChanges: [{ ability: 'STR', change: 6 }],
    abilityScoreChangeNote: 'Constitution score is removed (construct). Mental ability scores are retained.',
    naturalArmorChange: 10,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 9, value: 5, bypassedBy: 'adamantine' },
        { minHD: 10, maxHD: 14, value: 10, bypassedBy: 'adamantine' },
        { minHD: 15, value: 15, bypassedBy: 'adamantine' },
      ],
    },
    immunities: ['construct traits', 'immunity to magic (as flesh golem)'],
    features: [
      {
        scalingType: 'flat',
        name: 'Construct Bonus Hit Points',
        description:
          'Gains bonus hit points based on size as per the construct creature type rules.',
      },
      {
        scalingType: 'flat',
        name: 'Berserk (Ex)',
        description:
          "When damaged in combat, the creature must succeed on a DC 13 Will save or go berserk, attacking the nearest living creature. A successful DC 19 Charisma check by the creature's owner can override the berserk state for 1 minute.",
      },
      {
        scalingType: 'flat',
        name: 'Animating Spirit (Ex)',
        description:
          'Despite its construct type, the creature retains its spirit and is vulnerable to soul-affecting spells: astral projection, clone, magic jar, and soul bind can target it. It cannot be raised or resurrected but can be reincarnated. It takes a –2 penalty on saves against mind-affecting effects.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 260. Lostling Creature (CR +2)
  {
    id: 'lostling-creature',
    name: 'Lostling Creature',
    description:
      'A chaotic evil undead-like entity perpetually lost between worlds, spreading disorientation wherever it wanders. It warps the senses of those nearby, controls weather, creates spawn, suppresses divination, and drains Wisdom from those it strikes.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must be a corporeal creature.' },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 6 },
      { ability: 'CHA', change: 6 },
    ],
    naturalArmorChange: 4,
    features: [
      {
        scalingType: 'flat',
        name: 'Energy Immunity and Vulnerability',
        description:
          'The lostling selects one energy type (acid, cold, electricity, fire, or sonic) matching its death conditions and becomes immune to it. It gains vulnerability to the opposite energy type.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Disorientation (Su)',
        description:
          'Living creatures within 30 feet must succeed at a Will save (DC 10 + 1/2 HD + Cha modifier) or be cursed with a –4 circumstance penalty to initiative, attack rolls, and numerous skill checks (Acrobatics, Climb, Fly, Perception, Swim). Affected creatures move in random directions (1d8). The penalty increases to –8 for CR 11+ lostlings. The curse is broken by 24 hours of blindfolded leading or curse-removal magic.',
      },
      {
        scalingType: 'flat',
        name: 'Control Weather (Sp)',
        description:
          'Once per day, the lostling can cast control weather at a caster level equal to its Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Creatures killed by the lostling rise as lostlings in 1d4 days (1d4 rounds for CR 11+ lostlings) under the creator\'s command.',
      },
      {
        scalingType: 'flat',
        name: 'Divination Suppression (Su)',
        description:
          'The lostling is surrounded by an invisible barrier (1-mile radius per HD) that suppresses divination spells as if within an antimagic field.',
      },
      {
        scalingType: 'flat',
        name: 'Harsh Elements (Su)',
        description:
          'Melee, ranged, and touch attacks deal an additional 1d6 energy damage (2d6 for CR 11+, with half that amount as divine damage). Critical hits deal additional energy damage based on the critical multiplier.',
      },
      {
        scalingType: 'flat',
        name: 'Wisdom Drain (Su)',
        description:
          'Creatures hit by the lostling must succeed at a Will save or suffer 1d3 Wisdom drain; the lostling gains 5 temporary hit points per drain. Creatures reduced to 0 Wisdom fall into a helpless, nightmare-plagued sleep and eventually die from starvation.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 261. Lusting Creature (CR +2) [3pp]
  {
    id: 'lusting-creature',
    name: 'Lusting Creature',
    description:
      'A creature consumed by supernatural desire, radiating an aura of debilitating lust, burning enemies with fiery passion, and seducing any creature it chooses. It is immune to fire and mind-affecting effects and gains terrifying social and magical powers.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must have Intelligence 4 or higher.' },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: 8 },
    ],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 9, value: 5, bypassedBy: 'good' },
        { minHD: 10, maxHD: 14, value: 10, bypassedBy: 'good' },
        { minHD: 15, value: 15, bypassedBy: 'good' },
      ],
    },
    resistances: [
      { energyType: 'cold', value: 10 },
      { energyType: 'fire', value: 'immunity' },
    ],
    immunities: ['mind-affecting effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Cold Resistance Scaling',
        description: 'Cold resistance 10 increases to 20 at CR 10+ and 30 at CR 15+.',
      },
      {
        scalingType: 'flat',
        name: 'Ferocity (Ex)',
        description: 'The lusting creature gains the ferocity ability.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Lust (Su)',
        description:
          'Radiates an aura with a range of 5 feet per Hit Die (maximum 100 feet). Creatures that fail a Will save suffer a –2 circumstance penalty on AC, attack rolls, CMB, CMD, damage rolls, initiative, saving throws, skill checks, and ability checks. They cannot use abilities requiring Intelligence, Wisdom, or Charisma; cannot cast spells; and cannot activate magic items.',
      },
      {
        scalingType: 'flat',
        name: 'Burning Desire (Su)',
        description:
          "Melee and ranged attacks deal an additional 2d6 fire damage. Supernatural abilities deal 2d6 fire damage on failed saves. This can be suppressed as a free action.",
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          'At will as a free action, the lusting creature can transform into the same species as a creature it desires a relationship with.',
      },
      {
        scalingType: 'flat',
        name: 'Language of Longing (Su)',
        description:
          "Grants a +2 racial bonus to saving throw DCs of enchantment (charm) and enchantment (compulsion) spells. The creature's enchantment spells are no longer language-dependent.",
      },
      {
        scalingType: 'flat',
        name: 'Sire Offspring (Su)',
        description:
          'Guaranteed to produce viable offspring with any creature; can mature offspring to adulthood in one year and one day.',
      },
      {
        scalingType: 'flat',
        name: 'Stripping Gaze (Su)',
        description:
          'Gaze attack with 30-foot range. Creatures that fail a Will save lose all equipment-based bonuses and protections (armor, shield, magic rings, magic cloaks, etc.) except those from artifacts or divine relics. Removable by remove curse.',
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonuses',
        description: 'Gains +8 racial bonus on Bluff and Diplomacy checks.',
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

  // 262. Lycanthrope (CR +1)
  {
    id: 'lycanthrope',
    name: 'Lycanthrope',
    description:
      'A humanoid afflicted or born with the ability to assume animal or hybrid form, gaining the natural attacks and senses of a specific animal, a silver-bypassed DR, and the ability to spread its curse through bite. Natural lycanthropes control the transformation at will; afflicted ones struggle against involuntary shifts.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid'] },
    ],
    subtypeGains: ['shapechanger'],
    abilityScoreChanges: [
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: -2 },
    ],
    abilityScoreChangeNote:
      'In hybrid and animal form, also gain +2 Str and +2 Con. In animal or hybrid form, use whichever score is higher between base creature and base animal for each physical ability score.',
    damageReduction: {
      scalingType: 'flat',
      value: 10,
      bypassedBy: 'silver (natural lycanthropes; afflicted have DR 5/silver in animal or hybrid form only)',
    },
    features: [
      {
        scalingType: 'flat',
        name: 'Animal Form Benefits',
        description:
          "In animal and hybrid forms, gains the base animal's natural attacks, natural armor bonus (increased by +2), speed, and senses (low-light vision, scent). Hybrid form uses base creature's speed.",
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          'Can assume three forms: humanoid, animal, and hybrid. Equipment does not meld in humanoid or hybrid forms. Natural lycanthropes shift as a move action. Afflicted lycanthropes use a full-round action and must make a Constitution check (DC 15 for animal/hybrid, DC 20 for humanoid). A full moon grants a +5 morale bonus to animal/hybrid checks and a –5 penalty to humanoid checks. Afflicted lycanthropes revert to humanoid form at sunrise or after 8 hours of rest.',
      },
      {
        scalingType: 'flat',
        name: 'Curse of Lycanthropy (Su)',
        description:
          "A natural lycanthrope's bite attack can infect humanoids within one size category with lycanthropy on a failed Fortitude save (DC 15 negates).",
      },
      {
        scalingType: 'flat',
        name: 'Lycanthropic Empathy (Ex)',
        description:
          'Natural lycanthropes can communicate with related animals in any form and gain a +4 racial bonus on Diplomacy checks with them. Afflicted lycanthropes gain this only in animal or hybrid form.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 263. Mad Harlequin Creature (CR +3) [3pp]
  {
    id: 'mad-harlequin-creature',
    name: 'Mad Harlequin Creature',
    description:
      'A chaotic evil creature consumed by utter madness, laughing through acid squirts, confusion auras, and a cone of laughing gas. It is immune to mind-affecting effects, reflects them back at casters, and can only be permanently slain by destroying its arch-nemesis.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must have Intelligence 3 or higher.' },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 6 },
      { ability: 'CHA', change: 8 },
    ],
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 5, bypassedBy: 'bludgeoning and good' },
        { minHD: 6, maxHD: 11, value: 10, bypassedBy: 'bludgeoning, magic, and good' },
        { minHD: 12, value: 15, bypassedBy: 'bludgeoning, magic, lawful, and good' },
      ],
    },
    fastHealing: '1',
    immunities: ['mind-affecting effects (via Absurd Thoughts)'],
    features: [
      {
        scalingType: 'flat',
        name: 'Absurd Thoughts (Su)',
        description:
          'Mind-affecting spells and effects automatically fail against the mad harlequin creature. Casters whose spells fail in this way must succeed on a Will save or become subject to a random madness affliction with immediate onset.',
      },
      {
        scalingType: 'flat',
        name: 'Acid Squirt (Su)',
        description:
          'Once per day as a swift action, the harlequin makes a ranged touch attack (5-foot range) dealing 1d6 + Con modifier acid damage plus 1d6 per 2 HD (maximum 10d6). The target is also blinded and sickened unless it succeeds on a Fortitude save. The duration extends 1 round per 3 HD (maximum 6 rounds); at 6 HD, the blindness becomes permanent on a failed save.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Confusion (Su)',
        description:
          'At 8 or more HD, the creature radiates a 30-foot aura that causes confusion (Will save negates). This can be activated as an immediate action.',
      },
      {
        scalingType: 'flat',
        name: 'Breath Weapon (Su)',
        description:
          "As a swift action usable once per 1d4 rounds, the creature breathes a cone of laughing gas. Creatures that fail a Will save suffer hideous laughter for 1 round per HD of the base creature. The cone's size scales from 15 feet (1–2 HD) up to 70 feet (21+ HD).",
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description: 'The mad harlequin creature gains the shapechange ability.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          "The creature resurrects within 1 day unless its arch-nemesis (chosen by the GM) is permanently destroyed. If the arch-nemesis is later brought back to life, the harlequin revives as well.",
      },
      {
        scalingType: 'flat',
        name: 'Vulnerability to Sanity (Su)',
        description:
          'The creature is immune to remove curse. Spells such as greater restoration, heal, limited wish, miracle, and wish can cure its insanity and remove the template, but the creature receives a –4 penalty on saves against these spells.',
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonus',
        description: 'Gains a +8 racial bonus on Disguise checks; Disguise is always a class skill.',
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

  // 264. Maddened (+0 CR) [3pp]
  {
    id: 'maddened',
    name: 'Maddened',
    description:
      'A creature infected with Assimilation Madness, a viral disease that slowly destroys Constitution and Charisma while making the creature more savage and contagious. It gains minor combat bonuses and immunity to fear.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'creature_type',
        allowed: ['animal', 'humanoid', 'monstrous humanoid'],
      },
      {
        type: 'special',
        description: 'Must not be immune to disease.',
      },
    ],
    subtypeGains: ['augmented'],
    immunities: ['fear'],
    features: [
      {
        scalingType: 'flat',
        name: 'Infected (Su)',
        description:
          'The maddened creature carries Assimilation Madness. Afflicted creatures must succeed on a DC 14 Fortitude save or contract the disease, which deals 1d2 Con and 1d2 Cha damage per day. The disease is cured by 2 consecutive successful saves.',
      },
      {
        scalingType: 'flat',
        name: 'Contagious (Ex)',
        description:
          'During the first 24 hours of infection, exposed creatures must succeed on a DC 12 Fortitude save or contract the virus (DC 10 if contact is through direct bodily fluids only).',
      },
      {
        scalingType: 'flat',
        name: 'Bloodthirsty (Ex)',
        description:
          'The maddened creature gains a +1 morale bonus on attack and damage rolls against creatures that are currently taking bleed damage.',
      },
      {
        scalingType: 'flat',
        name: 'Savagery (Ex)',
        description:
          'Gains a +2 morale bonus on combat maneuver checks made to bull rush, drag, or overrun.',
      },
      {
        scalingType: 'flat',
        name: 'Charisma Damage Defense',
        description:
          'Gains a +1 bonus on saving throws against mind-affecting effects for every 2 points of Charisma damage it has taken. This bonus instead becomes a penalty to saves against confusion and insanity effects.',
      },
      {
        scalingType: 'flat',
        name: 'Racial Skill Bonus',
        description: 'Gains a +4 racial bonus on Intimidate checks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown',
      publication: 'Third-Party Publication',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 265. Magma Creature (CR +1) [3pp]
  {
    id: 'magma-creature',
    name: 'Magma Creature',
    description:
      'A creature native to or transformed by the Elemental Plane of Earth and Fire, surrounded by burning magma and capable of burrowing through lava as easily as water. Its natural attacks burn and grab, and it can engulf smaller foes.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'outsider',
    subtypeGains: ['earth', 'elemental', 'extraplanar', 'fire'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: -6, minimum: 1 },
      { ability: 'CON', change: 4 },
    ],
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Racial HD to d10',
        description: 'All racial Hit Dice become d10s.',
      },
      {
        scalingType: 'flat',
        name: 'Fiery Aura (Ex)',
        description:
          'Any creature within 10 feet takes 2d6 fire damage per round. A Fortitude save (DC Constitution-based) halves the damage. The magma creature can suppress this aura as a free action.',
      },
      {
        scalingType: 'flat',
        name: 'Burrow and Magma Movement (Ex)',
        description:
          'Gains a burrow speed equal to its highest movement speed. Can swim through magma or lava at its burrow speed as though moving through water with a swim speed.',
      },
      {
        scalingType: 'flat',
        name: 'Burning Natural Attacks',
        description:
          'All natural attacks gain the burn (2d6) and grab abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Engulf (Ex)',
        description:
          'Can engulf creatures one size smaller or less, dealing 2d6 bludgeoning and 4d6 fire damage.',
      },
      {
        scalingType: 'flat',
        name: 'Earth Mastery (Ex)',
        description:
          'Gains a +1 bonus on attack and damage rolls when both the magma creature and its opponent are touching the ground. Takes a –4 penalty when the opponent is airborne or waterborne. Also applies to bull rush and overrun maneuvers.',
      },
      {
        scalingType: 'flat',
        name: 'Languages',
        description: 'Gains Ignan and Terran if capable of speech.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown',
      publication: 'Third-Party Publication',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 266. Mana Wasted Mutant (CR +1)
  {
    id: 'mana-wasted-mutant',
    name: 'Mana-Wasted Mutant',
    description:
      'A creature warped by magical radiation or the collapse of a mana font, becoming an aberration with a random physical deformity, mutations that manifest as special abilities, and a strong resistance to further magical corruption.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'aberration',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'CON', change: 2 },
      { ability: 'CHA', change: -2 },
    ],
    naturalArmorChange: 2,
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 10, value: 5, bypassedBy: 'cold iron' },
        { minHD: 11, value: 10, bypassedBy: 'cold iron' },
      ],
    },
    srFormula: 'adjusted CR + 11',
    immunities: ['disease', 'poison'],
    features: [
      {
        scalingType: 'flat',
        name: 'Saves Against Mind-Affecting Effects',
        description: 'Gains a +4 bonus on saving throws against mind-affecting effects.',
      },
      {
        scalingType: 'flat',
        name: 'No Spell-Like Abilities',
        description: 'Loses all spell-like abilities. Class-based spellcasting is unchanged.',
      },
      {
        scalingType: 'flat',
        name: 'No Magical Flight',
        description:
          'Winged mutants lose any magical flight ability; if they retain physical wings, their maneuverability becomes clumsy.',
      },
      {
        scalingType: 'flat',
        name: 'Deformity',
        description:
          'Gains one randomly determined deformity: Deformed Arm (–2 Str checks with that arm; cannot use two-handed items), Deformed Leg (–10 ft. speed, –4 Acrobatics and Climb), Shattered Mind (–2 Wis; –2 Will saves against confusion/insanity), or Warped Hide (mottled appearance; –2 Cha; –4 Diplomacy).',
      },
      {
        scalingType: 'flat',
        name: 'Mutations',
        description:
          'Gains one special ability per 4 Hit Dice (minimum 1). The first ability must be Disease. Additional abilities chosen from: Acid Resistance, Acidic Pustules, Breath Weapon, Disease, Increased Speed.',
      },
      {
        scalingType: 'flat',
        name: 'Class Skills',
        description: 'Gains Climb, Intimidate, Stealth, and Survival as class skills.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 267. Manimal (CR +1) [3pp]
  {
    id: 'manimal',
    name: 'Manimal',
    description:
      'An animal that has gained humanoid form and rudimentary intelligence, transitioning from an animal to a monstrous humanoid with weapons proficiency, improved mental faculties, and a dual nature that makes it simultaneously susceptible and resistant to effects targeting animals.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
    ],
    typeChange: 'monstrous humanoid',
    abilityScoreChanges: [
      { ability: 'INT', change: 8 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Racial HD to d10',
        description: 'All racial Hit Dice become d10s. Base attack bonus, saves, and skill points are recalculated based on the monstrous humanoid type.',
      },
      {
        scalingType: 'flat',
        name: 'Humanoid Form',
        description:
          'Adjusted to humanoid proportions: "long" reach becomes "tall"; extraordinary reach adds 5 feet. Retains all base creature attacks except those dependent on limbs converted to legs. Loses rake. Gains weapon and armor proficiencies of monstrous humanoids.',
      },
      {
        scalingType: 'flat',
        name: 'Amphibious (Ex)',
        description:
          'Aquatic manimal base creatures that lacked this ability gain the ability to breathe both air and water equally.',
      },
      {
        scalingType: 'flat',
        name: 'Animal Blood (Ex)',
        description:
          'Counts as an animal, monstrous humanoid, and humanoid simultaneously for spell and ability targeting purposes. When targeted by an animal-affecting effect, the manimal may attempt a Will save (DC 10 + spell level + caster\'s relevant ability modifier, or DC 10 + 1/2 HD + Charisma modifier for non-spells). Success grants 24-hour immunity. The awaken spell has no effect on manimals.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown',
      publication: 'Third-Party Publication',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 268. Many-Angled Creature (CR +1) [3pp]
  {
    id: 'many-angled-creature',
    name: 'Many-Angled Creature',
    description:
      'A creature touched by non-Euclidean geometry and alien madness, whose very presence distorts logic and reality. Observers risk confusion and madness simply by viewing it, and it deflects one attack per round back at its attacker.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'aberration',
    subtypeGains: ['extraplanar', 'augmented'],
    abilityScoreChanges: [{ ability: 'CHA', change: 4 }],
    immunities: ['mind-affecting spells and effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Unnatural Aura (Su)',
        description: 'The creature radiates an unnatural aura with a range of 100 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Evasion and Improved Evasion (Ex)',
        description:
          'Gains evasion (no damage on successful Reflex save against half-damage effects) and improved evasion (half damage even on a failed save).',
      },
      {
        scalingType: 'flat',
        name: 'Aberrant Behavior (Ex)',
        description:
          'Creatures with Intelligence 3 or higher that encounter logical problems while facing the many-angled creature must succeed on a Will save (DC 10 + 1/2 HD + Wis modifier) or suffer the effects of a confusion spell. Creatures with Int 2 or lower make this check at the start of confrontation. A new save is allowed after each 24-hour period.',
      },
      {
        scalingType: 'flat',
        name: 'Impossible Geometry (Ex)',
        description:
          'Creatures within 30 feet that view the many-angled creature must succeed on a Will save (DC 10 + 1/2 HD + Cha modifier) or gain a form of madness (depersonalization). Victims may avert their gaze. Daily saves are allowed. This is a mind-affecting compulsion effect.',
      },
      {
        scalingType: 'flat',
        name: 'Warp Space/Time (Ex)',
        description:
          'Automatically deflects one attack per round directed against it back upon the attacker. This applies to spells targeting the creature specifically, not area effects.',
      },
      {
        scalingType: 'flat',
        name: 'Non-Euclidean Assault (Su)',
        description:
          'Creatures hit by the many-angled creature must succeed on a Fortitude save (DC 10 + 1/2 HD + Cha modifier) or suffer ability damage and conditions based on the creature\'s CR for 1d4+1 rounds.',
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

  // 269. Meat Puppet (CR +varies) [3pp]
  {
    id: 'meat-puppet',
    name: 'Meat Puppet',
    description:
      'The animated corpse of a slain creature, reanimated as a powerful undead with grab and constrict, channel resistance, regeneration bypassed by cold iron or good, and fixed ability scores replacing the original. Class HD and most special qualities are stripped away.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 0 },
      { ability: 'WIS', change: 0 },
      { ability: 'CHA', change: 0 },
    ],
    abilityScoreChangeNote:
      'Constitution is removed (undead). Intelligence set to 3, Wisdom to 14, Charisma to 14 regardless of base creature values. Strength and Dexterity are deltas from base. Bonus HP use Charisma modifier.',
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'slashing or piercing' },
    immunities: ['standard undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Natural Armor Reduction',
        description:
          "The meat puppet's natural armor bonus is half the base creature's natural armor bonus (round down).",
      },
      {
        scalingType: 'flat',
        name: 'Hit Dice Rebuild',
        description:
          'Class-level HD are dropped (minimum 1 HD retained). Racial HD are converted to d8s. Bonus HD are added by size: Tiny +1, Small/Medium +3, Large +5, Huge +7, Gargantuan +11, Colossal +15. Base attack bonus becomes 3/4 of total HD.',
      },
      {
        scalingType: 'flat',
        name: 'Speed Reduction',
        description: 'Loses fly and burrow speeds; retains land, swim, and climb speeds.',
      },
      {
        scalingType: 'flat',
        name: 'Slam Attacks',
        description:
          'Gains 2 slam attacks (or one per lost natural attack, whichever is greater). Slam damage is calculated as if one size category larger.',
      },
      {
        scalingType: 'flat',
        name: 'Grab and Constrict (Ex)',
        description: 'Gains the grab and constrict special attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'Gains a +4 bonus on saves against channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Regeneration (Ex)',
        description: 'Gains regeneration healing 1 hit point per round per Hit Die, bypassed by cold iron or good-aligned damage.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'Gains darkvision with a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Skills and Feats',
        description:
          'Gains 1 skill rank per HD. Class skills: Climb, Disguise, Fly, Intimidate, Knowledge (arcana), Knowledge (religion), Perception, Sense Motive, Spellcraft, Stealth. Gains Toughness as a bonus feat; loses base creature feats and gains feats normally for total HD.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Frog God Games Supplement',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 270. Metal-Clad Creature (CR +Varies) [3pp]
  {
    id: 'metal-clad-creature',
    name: 'Metal-Clad Creature',
    description:
      'A creature whose body is partially or fully encased in a particular metal, gaining the strengths and weaknesses of that metal — from adamantine\'s near-invulnerable DR to silver\'s divine purity and lead\'s divination-blocking opacity.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChangeNote:
      'Varies by metal type. Adamantine: +4 Str, –6 Dex, +6 Con, +2 Cha. Steel: +4 Str, –4 Dex, +2 Con. Mithral: +4 Str, +2 Con, +2 Cha. Silver: +2 Int, +2 Wis, +4 Cha. Iron: +2 Str, –4 Dex, +2 Con, –2 Wis. Other metals have smaller adjustments.',
    features: [
      {
        scalingType: 'flat',
        name: 'Natural Armor Bonus',
        description:
          'Natural armor bonus varies by metal: Gold/Tin +2, Iron/Silver +3, Steel/Bronze +4, Mithral +5, Lead +6, Adamantine +10. Various metals also grant fortification.',
      },
      {
        scalingType: 'flat',
        name: 'Speed Reduction',
        description:
          "Each of the metal-clad creature's speeds is reduced by 10 feet (minimum 5 feet). Mithral-clad creatures suffer no speed reduction.",
      },
      {
        scalingType: 'flat',
        name: 'Slam Attack',
        description:
          "If the creature lacks natural attacks, it gains a slam attack. Slam damage is as if two size categories larger.",
      },
      {
        scalingType: 'flat',
        name: 'Metallic Limbs',
        description:
          'Natural attacks function as the encasing metal for the purposes of overcoming DR. Adamantine: attacks bypass hardness under 20 and creature\'s natural armor is nearly impenetrable. Iron: attacks count as cold iron. Silver/Mithral: attacks count as their metal. Lead: poison DC increases by +1 if the creature has poison.',
      },
      {
        scalingType: 'flat',
        name: 'Metal-Specific Immunities and Weaknesses',
        description:
          "Lead-clad: immune to divination spells targeting it for information; invisible to scrying and location spells. Silver-clad: immune to gaze attacks and reflects them. All types: vulnerable to electricity (except Adamantine, Lead, Platinum). Iron/Steel: vulnerable to rusting attacks. Adamantine: DR 10/adamantine.",
      },
      {
        scalingType: 'flat',
        name: 'Skill Penalties',
        description:
          'Suffers –4 on Acrobatics, Climb, Escape Artist, Sleight of Hand, Stealth, and Swim checks (except Mithral and Tin). Additional bonuses per metal may apply.',
      },
      {
        scalingType: 'flat',
        name: 'CR Adjustment by Metal',
        description:
          'CR varies from +1 (Tin) to +6 (Adamantine) depending on the metal used. Exact values are listed in the metal table.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown',
      publication: 'Third-Party Publication',
    },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 271. Mhondoro-Possessed Creature (CR +1)
  {
    id: 'mhondoro-possessed-creature',
    name: 'Mhondoro-Possessed Creature',
    description:
      'A humanoid creature possessed by a mhondoro (ancestor spirit), gaining its ancestral wisdom, expanded darkvision, negative energy resistance, and regeneration — while also being able to draw on the spirit\'s skill bonuses and language knowledge.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid'] },
    ],
    resistances: [{ energyType: 'negative energy', value: 10 }],
    regeneration: '5 (electricity, force, or sonic)',
    features: [
      {
        scalingType: 'flat',
        name: 'Expanded Darkvision',
        description:
          'Gains darkvision with a range of 60 feet. If the host already has darkvision, the range increases by 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Ancestral Vigor (Su)',
        description: 'Grants a +2 insight bonus on all saving throws.',
      },
      {
        scalingType: 'flat',
        name: 'Mhondoro Skill Sharing',
        description:
          "The host may use the mhondoro's skill bonuses in place of its own for Intelligence-, Wisdom-, or Charisma-based skills, if the mhondoro's are higher.",
      },
      {
        scalingType: 'flat',
        name: 'Languages',
        description:
          'The possessed creature can speak, read, and write any languages known to the mhondoro.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 272. Mighty (CR +5) [3pp]
  {
    id: 'mighty',
    name: 'Mighty',
    description:
      'A simple template representing the most powerful exemplar of its kind — a chieftain, pack leader, or legendary specimen. It receives sweeping bonuses to HP, AC, attacks, saves, CMD, speed, and spell DCs, along with immunity to common disabling effects.',
    crAdjustment: 5,
    acquisitionType: 'either',
    isSimpleTemplate: true,
    immunities: ['mind-affecting abilities', 'sleep', 'paralysis'],
    features: [
      {
        scalingType: 'flat',
        name: 'Bonus Hit Points',
        description: 'Gains +10 bonus hit points per Hit Die (minimum +50).',
      },
      {
        scalingType: 'flat',
        name: 'Dodge Bonus to AC',
        description: 'Gains a +5 dodge bonus to AC.',
      },
      {
        scalingType: 'flat',
        name: 'Attack and CMB Bonus',
        description: 'Gains a +10 bonus to all attack rolls and CMB.',
      },
      {
        scalingType: 'flat',
        name: 'CMD Bonus',
        description: 'Gains a +15 bonus to CMD.',
      },
      {
        scalingType: 'flat',
        name: 'Initiative Bonus',
        description: 'Gains a +5 bonus to initiative.',
      },
      {
        scalingType: 'flat',
        name: 'Speed Bonus',
        description:
          'Gains a +30-foot bonus to all speeds, up to a maximum of double the base speed.',
      },
      {
        scalingType: 'flat',
        name: 'Save and Check Bonuses',
        description:
          'Gains a +5 bonus to all saving throws, damage rolls, ability checks, and skill checks.',
      },
      {
        scalingType: 'flat',
        name: 'Spell DC Bonus',
        description: 'Saving throw DCs for any ability or spell the creature uses increase by 7.',
      },
      {
        scalingType: 'flat',
        name: 'Damage Reduction',
        description:
          'Gains DR 1/— for every three full Hit Dice. This overlaps with (does not stack with) any existing DR the creature has.',
      },
      {
        scalingType: 'flat',
        name: 'Spell Resistance',
        description: "Spell resistance equals the base creature's CR + 12.",
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

  // 273. Miniature Creature (CR varies) [3pp]
  {
    id: 'miniature-creature',
    name: 'Miniature Creature',
    description:
      'A creature dramatically reduced in size by four size categories (minimum Fine), with correspondingly reduced physical ability scores, hit dice, speed, and natural armor. CR is drastically reduced — roughly one-half to one-quarter — and must be evaluated individually.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    sizeChange: -4,
    features: [
      {
        scalingType: 'flat',
        name: 'Ability Score Changes by Original Size',
        description:
          'Strength decreases by 0–10 depending on original size (minimum 1). Dexterity increases by 0–8. Constitution decreases by 0–16 (minimum 1). Exact values are given in Table 2-29 by original size category.',
      },
      {
        scalingType: 'flat',
        name: 'Reduced Hit Dice',
        description:
          'Hit Dice are reduced by one quarter. Base attack bonus, saves, and all derived statistics are recalculated based on the new HD total.',
      },
      {
        scalingType: 'flat',
        name: 'Speed Reduction',
        description:
          'Speed decreases per Table 2-30: e.g., 5–35 ft. becomes 5 ft.; 40–55 ft. becomes 10 ft.; and so on.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Armor Reduction',
        description:
          'Natural armor is reduced per Table 2-29 (minimum +0).',
      },
      {
        scalingType: 'flat',
        name: 'Size-Based Combat Adjustments',
        description:
          'AC size modifier and attack rolls updated for new size. Natural attacks deal damage as the new size. Space and reach per Table 2-29; extraordinary reach divided by 4, rounded to nearest 5 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Scaled Special Abilities',
        description:
          'Damage reduction reduced to one-fifth (minimum 1). Fast healing/regeneration reduced to one-fifth (minimum 1). Sense ranges (darkvision, scent, etc.) divided by 20, rounding to nearest 5 feet. Aura ranges divided by 20, rounding to nearest 5 feet. Ability damage/drain minimum 1.',
      },
      {
        scalingType: 'flat',
        name: 'Skills and Feats',
        description:
          'Excess skill ranks become racial modifiers. Stealth and Fly adjust for size; Acrobatics adjusts for speed change. All feats are retained despite new ability requirements; excess feats become bonus feats.',
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

  // 274. Minimal Creature Simple Template (CR -1 per Size Decrease)
  {
    id: 'minimal-creature',
    name: 'Minimal Creature Simple Template',
    description:
      'A simple template that shrinks an animal or animal-like beast, reducing it to Small size with reduced natural armor, smaller attack damage, and weaker physical ability scores. CR decreases by 1 per size category decreased.',
    acquisitionType: 'either',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'creature_type',
        allowed: ['animal'],
      },
      {
        type: 'special',
        description:
          'Cannot be applied to creatures that increase in power through aging or feeding (dragons, barghests) or to Fine-sized creatures.',
      },
    ],
    sizeChange: -1,
    abilityScoreChanges: [
      { ability: 'STR', change: -4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: -2 },
    ],
    abilityScoreChangeNote: 'Applied per size category of decrease.',
    naturalArmorChange: -2,
    features: [
      {
        scalingType: 'flat',
        name: 'Reduced Attack Damage',
        description:
          'Decrease all natural attack damage dice by one step per size category of decrease.',
      },
      {
        scalingType: 'flat',
        name: 'CR Reduction',
        description:
          'CR decreases by 1 for each size category decreased (e.g., reducing two sizes gives CR –2).',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder RPG Bestiary' },
    verificationStatus: 'needs_review',
    visibility: 'global',
    rev: 1,
  },

  // 275. Missing (CR +3) [3pp]
  {
    id: 'missing',
    name: 'Missing',
    description:
      'A creature that has been partially phased out of reality, appearing displaced from its true location and fading into invisibility between attacks. It gains displacement, evasion, supernatural invisibility, and a powerful stealth bonus from its shadowed nature.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      {
        type: 'special',
        description: 'Animals become magical beasts; humanoids become monstrous humanoids when this template is applied.',
      },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Type Change',
        description:
          'Animals become magical beasts. Humanoids become monstrous humanoids. All other creature types remain unchanged. Base creature statistics are not recalculated to reflect the type change.',
      },
      {
        scalingType: 'flat',
        name: 'Displacement (Su)',
        description:
          "The missing creature appears about 2 feet away from its true location, granting a 50% miss chance as if it had total concealment. Unlike actual concealment, enemies can still target the creature normally. True seeing reveals its true location.",
      },
      {
        scalingType: 'flat',
        name: 'Evasion (Ex)',
        description:
          'If the creature makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, it instead takes no damage. Helpless creatures do not benefit from evasion.',
      },
      {
        scalingType: 'flat',
        name: 'Invisibility (Su)',
        description:
          'After not attacking for 1 full round, the creature becomes invisible as a free action. It becomes visible if it attacks or takes hit point damage. If it takes damage, it becomes invisible again at the beginning of its next turn.',
      },
      {
        scalingType: 'flat',
        name: 'Shadowed (Su)',
        description:
          'The creature gains a bonus to Stealth checks equal to its Hit Dice and can make Stealth checks even when observed or in normal or bright light.',
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
];
