// Batch 012 | first: 'Mist Creature (CR +1)' | last: 'Necrophage Brute (CR +3)' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_012: TemplateDefinition[] = [
  // 276. Mist Creature (CR +1) [3pp]
  {
    id: 'mist-creature',
    name: 'Mist Creature',
    description:
      'An inherited template for living, corporeal creatures without the earth or fire subtype. The creature transforms into an outsider with air, elemental, and water subtypes, gaining the ability to assume gaseous form and command the mists.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['undead', 'construct'] },
      { type: 'special', description: 'Cannot have the earth or fire subtype' },
    ],
    typeChange: 'outsider',
    subtypeGains: ['air', 'elemental', 'water'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 2 },
    ],
    immunities: ['inhaled poisons', 'gas-based attacks', 'fog and cloud-based spells'],
    resistances: [
      { energyType: 'cold', value: 10 },
      { energyType: 'fire', value: 10 },
    ],
    spellLikeAbilities: [
      { spellName: 'fog cloud', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'obscuring mist', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'stinking cloud', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'cloudkill', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'solid fog', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Gaseous Form (Su)',
        description:
          'The mist creature can assume gaseous form at will as a move action with no duration limit. While in gaseous form it can use its spell-like abilities and cloud sight normally.',
      },
      {
        scalingType: 'flat',
        name: 'Cloud Sight (Ex)',
        description:
          'The mist creature can see through fog, clouds, gases, mists, and smoke without concealment penalties, even while in gaseous form.',
      },
      {
        scalingType: 'flat',
        name: 'Air Mastery (Ex)',
        description:
          'Any airborne creature takes a -1 penalty on attack and damage rolls against a mist creature.',
      },
      {
        scalingType: 'flat',
        name: 'Mistborn Stealth (Ex)',
        description:
          'The mist creature gains a +15 circumstance bonus on Stealth checks when in fog, clouds, or smoke while in gaseous form.',
      },
      {
        scalingType: 'flat',
        name: 'Languages',
        description:
          'If capable of speech, the mist creature gains Aquan and Auran as bonus languages.',
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

  // 277. Modular (CR +3)
  {
    id: 'modular',
    name: 'Modular',
    description:
      'An applied template for constructs that grants akashic abilities and extraordinary versatility, allowing the construct to reshape its abilities and shape veils from the akashic record.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    subtypeGains: ['akashic'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 2 },
      { ability: 'INT', change: 4, minimum: 14 },
      { ability: 'WIS', change: 4 },
    ],
    abilityScoreChangeNote:
      'If the base construct lacks an Intelligence score or its final Intelligence would be below 14, Intelligence becomes 14 instead.',
    features: [
      {
        scalingType: 'flat',
        name: 'Akashic Wiring (Su)',
        description:
          'The construct gains an essence pool equal to its construct Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Artificial Veilweaving (Su)',
        description:
          'The construct can shape a number of veils equal to half its racial Hit Dice, using its Intelligence modifier for veilweaving and its racial Hit Dice as its veilweaver level. It may reshape veils after 1 hour of focus; no rest is required between reshapings.',
      },
      {
        scalingType: 'flat',
        name: 'Design Flexibility (Ex)',
        description:
          'The construct may swap one feat for another (meeting all prerequisites) during a 1-hour reconfiguration process. It also gains the martial flexibility class feature, treating its racial Hit Dice as its class level for this purpose.',
      },
      {
        scalingType: 'flat',
        name: 'Veilshifting (Su)',
        description:
          'The construct can use the veilshifting ability of the vizier akashic magus class once per day.',
      },
      {
        scalingType: 'flat',
        name: 'Creation Cost Increase',
        description:
          'Creating a modular construct increases the creation cost by 25,000 gp and the Craft DC by +5. The creator must have access to an essence pool.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 278. Mongrel Giant (CR +1)
  {
    id: 'mongrel-giant',
    name: 'Mongrel Giant',
    description:
      'An inherited template for any creature with the giant subtype, representing a giant with mixed ancestry from two different giant bloodlines. The mongrel giant selects one of 27 giant ancestry options granting unique immunities, spell-like abilities, and special qualities.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'subtype', required: ['giant'] },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 2 },
    ],
    abilityScoreChangeNote:
      'Additional ability score bonuses of +2 to +8 are granted by the chosen giant ancestry option. Rune Giant mongrel ancestry grants CR +2 instead of +1.',
    features: [
      {
        scalingType: 'flat',
        name: 'Giant Ancestry (Ex)',
        description:
          'The mongrel giant chooses one of 27 giant ancestry options (Ash, Cloud, Cliff, Cyclops, Desert, Eclipse, Fire, Forest, Fog, Frost, Glacial, Hagspawn, Hill, Jungle, Lava, Marsh, Moon, Mountain, Ocean, Plague, Rune, Shadow, Stone, Storm, Sun, Taiga, Titan). Each ancestry grants unique benefits such as elemental immunities, resistances, spell-like abilities (1/day at caster level equal to HD), weapon proficiencies, special senses, and movement modes. Stone ancestry also grants +2 natural armor. Rune Giant ancestry grants immunity to cold, electricity, and fire and increases CR adjustment to +2.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 279. Monstrous Lycanthrope (CR special) [3pp]
  {
    id: 'monstrous-lycanthrope',
    name: 'Monstrous Lycanthrope',
    description:
      'A 3rd-party template (Green Ronin Publishing) for creatures that can shapeshift into a monstrous non-animal form rather than a standard animal. The base monster must be within one size category of the base creature.',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Base monster form must be within one size category of the base creature' },
    ],
    subtypeGains: ['shapechanger'],
    abilityScoreChanges: [
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: -2, minimum: 1 },
    ],
    abilityScoreChangeNote:
      'Hybrid and monster forms gain an additional +2 Str and +2 Con. Physical ability scores in monster and hybrid forms use whichever score is higher between the base creature and base monster.',
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'silver' },
    features: [
      {
        scalingType: 'flat',
        name: 'CR Adjustment',
        description:
          'CR equals the base creature\'s CR + 1/3 the CR of the base monster (minimum +1). Afflicted versions gain DR 5/silver in monster or hybrid form only; natural versions gain DR 10/silver in all forms.',
      },
      {
        scalingType: 'flat',
        name: 'Change Shape (Su)',
        description:
          'Natural monstrous lycanthropes shift between forms as a move-equivalent action. Afflicted versions must succeed at Constitution checks (DC 15 to transform, DC 20 to revert to base form). A full moon grants a +5 morale bonus on transformation checks but a -5 penalty on reversion checks. The creature automatically reverts at sunrise or after 8 hours of rest.',
      },
      {
        scalingType: 'flat',
        name: 'Curse of Lycanthropy (Su)',
        description:
          'Natural monstrous lycanthropes transmit lycanthropy through their natural attacks against humanoid targets within one size category (Fortitude DC 15 negates).',
      },
      {
        scalingType: 'flat',
        name: 'Lycanthropic Empathy (Ex)',
        description:
          'Natural versions gain a +4 racial bonus on Diplomacy checks with related monsters in any form. Afflicted versions gain this benefit only in monster or hybrid form.',
      },
      {
        scalingType: 'flat',
        name: 'Monstrous Blood (Ex)',
        description:
          'The monstrous lycanthrope counts as both its base creature type and its base monster type for the purposes of spells and effects in all forms.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 280. Moonbound Werewolf (CR varies)
  {
    id: 'moonbound-werewolf',
    name: 'Moonbound Werewolf',
    description:
      'A variant werewolf template whose power waxes and wanes with the lunar cycle. Depending on the moon phase, the encounter CR can shift up or down by 1 from the base werewolf\'s CR.',
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must already have the werewolf template' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Moonbound (Su)',
        description:
          'The moonbound werewolf\'s statistics change with the lunar cycle. Full moon (3 days): +4 Str/Con in human form, +6 in hybrid/animal forms, DR 10/silver and magic, CR +1. Nearly full moon (4 days before and after full): +2 Str/Con in human form, +4 in hybrid/animal forms, DR 10/silver, standard CR. Other days: standard werewolf statistics with DR 5/silver in animal or hybrid form. New moon (3 days): -2 Str/Con in all forms (replaces normal +2 bonuses), no damage reduction, CR -1. GMs may randomly determine the moon phase by rolling 1d8.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 281. Moss Lich (CR +2) [3pp]
  {
    id: 'moss-lich',
    name: 'Moss Lich',
    description:
      'A 3rd-party template representing a spellcasting plant-creature that has achieved immortality by binding its soul to the living earth. Unlike a standard lich, a moss lich draws power from fertile soil and lush vegetation.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'plant',
    typeChangeNote: 'Do not recalculate base attack bonus, saves, or skill ranks.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 4 },
      { ability: 'WIS', change: 4 },
    ],
    naturalArmorChange: 5,
    damageReduction: { scalingType: 'flat', value: 15, bypassedBy: 'slashing and magic' },
    regeneration: 'equal to HD (suppressed by death effects and negative energy; only active when in contact with moist, fertile soil)',
    features: [
      {
        scalingType: 'flat',
        name: 'Rejuvenating Seed (Su)',
        description:
          'A moss lich can spend 1d10 days growing a rejuvenating seed. After the moss lich is destroyed, it fully regrows from this seed in 1d10 days. Only one mature seed can exist at a time.',
      },
      {
        scalingType: 'flat',
        name: 'Moss Magic (Su)',
        description:
          'The moss lich gains a +1 caster level bonus while in thick vegetation and can affect moss patches as if they were trees for spell purposes.',
      },
      {
        scalingType: 'flat',
        name: 'Moss Shape (Su)',
        description:
          'At will, the moss lich can transform into a moss patch or meld with existing moss, functioning as the tree shape ability.',
      },
      {
        scalingType: 'flat',
        name: 'Verdant Stride (Su)',
        description:
          'The moss lich passes through natural vegetation without leaving a trace and ignores difficult terrain from vegetation.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Wild Growth (Su)',
        description:
          'Plants within one mile of a moss lich grow twice as fast but produce half the normal yield.',
      },
      {
        scalingType: 'flat',
        name: 'Entrap (Su)',
        description:
          'Creatures struck by the moss lich\'s slam attack are infected with magical spores that create a permanent vine entanglement (hardness 5, 2 hit points per HD of the moss lich) unless removed by magic.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats and Skills',
        description:
          'Gains Diehard, Endurance, Great Fortitude, and Toughness as bonus feats. Gains a +8 racial bonus on Perception, Stealth, and Survival checks.',
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

  // 282. Muck Creature (CR +1) [3pp]
  {
    id: 'muck-creature',
    name: 'Muck Creature',
    description:
      'An inherited template for living, corporeal creatures without the air or fire subtype that have been suffused with the essence of elemental earth and water, becoming beings of living muck and silt.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Cannot have the air or fire subtype' },
    ],
    typeChange: 'outsider',
    subtypeGains: ['earth', 'elemental', 'extraplanar', 'water'],
    abilityScoreChanges: [
      { ability: 'CON', change: 4 },
      { ability: 'CHA', change: -2, minimum: 1 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Hit Dice',
        description: 'All racial Hit Dice become d10s.',
      },
      {
        scalingType: 'flat',
        name: 'Speed',
        description:
          'Gains climb and swim speeds each equal to half the highest base speed (or retains if the base creature already has a higher climb or swim speed).',
      },
      {
        scalingType: 'flat',
        name: 'Earth Mastery (Ex)',
        description:
          'While touching earth, the muck creature gains a +1 morale bonus on attack and damage rolls. It takes a -4 penalty on attack rolls against airborne creatures or while airborne itself.',
      },
      {
        scalingType: 'flat',
        name: 'Water Mastery (Ex)',
        description:
          'While touching water, the muck creature gains a +1 morale bonus on attack and damage rolls.',
      },
      {
        scalingType: 'flat',
        name: 'Grab (Ex)',
        description: 'All of the muck creature\'s natural melee attacks gain the grab ability.',
      },
      {
        scalingType: 'flat',
        name: 'Exude Muck (Ex)',
        description:
          'As a full-round action, the muck creature creates a 10-foot-radius slippery zone that functions as a grease spell. The save DC is Constitution-based.',
      },
      {
        scalingType: 'flat',
        name: 'Mudball (Ex)',
        description:
          'Ranged touch attack dealing nonlethal slam damage and coating the target in sludge that grants fire resistance 3 for 1 minute.',
      },
      {
        scalingType: 'flat',
        name: 'Smother (Ex)',
        description:
          'On a successful grapple, the muck creature fills the opponent\'s mouth and nose with muck, preventing speech and verbal spell components. The target must succeed at a Fortitude save or become nauseated.',
      },
      {
        scalingType: 'flat',
        name: 'Languages',
        description: 'Gains Aquan and Terran as bonus languages.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          '+10 racial bonus on Escape Artist checks; +4 racial bonus on Perception and Stealth checks in mud or silt areas.',
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

  // 283. Mummified Animal (CR +varies) [from -cr-varies-2 URL]
  {
    id: 'mummified-animal',
    name: 'Mummified Animal',
    description:
      'An acquired template for animal creatures that transforms them into undead servants. CR is unchanged for creatures with 4 or fewer HD, +1 for 5-10 HD, and +2 for 11+ HD.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
    ],
    typeChange: 'undead',
    typeChangeNote: 'Do not recalculate BAB, saves, or skills.',
    abilityScoreChanges: [
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
      { ability: 'CHA', change: 0, condition: 'Charisma becomes 14 regardless of base score' },
    ],
    abilityScoreChangeNote:
      'Loses Constitution score entirely (undead). Charisma becomes 14.',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 2, bypassedBy: '-' },
        { minHD: 6, maxHD: 10, value: 5, bypassedBy: '-' },
        { minHD: 11, maxHD: 20, value: 10, bypassedBy: '-' },
      ],
    },
    features: [
      {
        scalingType: 'flat',
        name: 'CR Scaling',
        description:
          'CR is unchanged for creatures with 4 or fewer HD, increases by +1 for 5-10 HD, and increases by +2 for 11 or more HD.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Flight Reduction',
        description:
          'Winged creatures retain flight but their maneuverability drops to clumsy. Other movement types are retained normally.',
      },
      {
        scalingType: 'flat',
        name: "Servant's Curse (Su)",
        description:
          "Once per day, the mummified animal\'s touch or a natural weapon hit delivers a curse. Targets who fail a Will save (DC 10 + 1/2 HD + Charisma modifier) take 1d3 points of Dexterity damage and 1d3 points of Wisdom damage. A successful save negates the effect.",
      },
      {
        scalingType: 'flat',
        name: 'Retained Abilities',
        description:
          'Retains all special attacks and abilities of the base creature except those that require a living body (such as poison or musk).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 284. Mummified Animal (CR varies) [from -cr-varies URL — alternate version]
  {
    id: 'mummified-animal-2',
    name: 'Mummified Animal (Alternate)',
    description:
      'An alternate acquired template for animal creatures transforming them into undead servants. Functionally identical to the primary Mummified Animal template; CR unchanged for 4 or fewer HD, +1 for 5-10 HD, +2 for 11+ HD.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
    ],
    typeChange: 'undead',
    typeChangeNote: 'Do not recalculate BAB, saves, or skills.',
    abilityScoreChanges: [
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
      { ability: 'CHA', change: 0, condition: 'Charisma becomes 14 regardless of base score' },
    ],
    abilityScoreChangeNote:
      'Loses Constitution score entirely (undead). Charisma becomes 14.',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 2, bypassedBy: '-' },
        { minHD: 6, maxHD: 10, value: 5, bypassedBy: '-' },
        { minHD: 11, maxHD: 20, value: 10, bypassedBy: '-' },
      ],
    },
    features: [
      {
        scalingType: 'flat',
        name: 'CR Scaling',
        description:
          'CR is unchanged for creatures with 4 or fewer HD, increases by +1 for 5-10 HD, and increases by +2 for 11 or more HD.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Flight Reduction',
        description:
          'Winged creatures retain flight but their maneuverability drops to clumsy. Other movement types are retained normally.',
      },
      {
        scalingType: 'flat',
        name: "Servant's Curse (Su)",
        description:
          "Once per day, the mummified animal\'s touch or a natural weapon hit delivers a curse. Targets who fail a Will save (DC 10 + 1/2 HD + Charisma modifier) take 1d3 points of Dexterity damage and 1d3 points of Wisdom damage. A successful save negates the effect.",
      },
      {
        scalingType: 'flat',
        name: 'Retained Abilities',
        description:
          'Retains all special attacks and abilities of the base creature except those that require a living body (such as poison or musk).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 285. Mummified Creature (CR +1)
  {
    id: 'mummified-creature',
    name: 'Mummified Creature',
    description:
      'An acquired template for living, corporeal creatures that transforms them into powerful undead mummies retaining much of their original cunning and combat ability, along with devastating offensive powers.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead (augmented)',
    typeChangeNote: 'Retains all subtypes except alignment subtypes. Does not recalculate class or racial HD.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'INT', change: -2, minimum: 1 },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
    ],
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '-' },
    features: [
      {
        scalingType: 'flat',
        name: 'Alignment',
        description: 'Becomes any evil alignment.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Undead Immunities',
        description: 'Gains all standard undead immunities.',
      },
      {
        scalingType: 'flat',
        name: 'Elemental Vulnerability',
        description:
          'Vulnerable to one randomly determined energy type (electricity, acid, fire, cold, or sonic). A successful DC 20 Perception check reveals a mark on the body or wrappings identifying the vulnerability.',
      },
      {
        scalingType: 'flat',
        name: 'Speed Reduction',
        description:
          'All speeds decrease by 10 feet (minimum 5). Flight maneuverability worsens by one step to clumsy.',
      },
      {
        scalingType: 'flat',
        name: 'Slam Attack',
        description:
          'Gains a powerful slam attack if it lacks natural attacks, treating the creature as one size category larger for damage purposes.',
      },
      {
        scalingType: 'flat',
        name: 'Burst of Vengeance (Su)',
        description:
          'Twice per day as a swift action, the mummified creature acts as if affected by haste for 1 round.',
      },
      {
        scalingType: 'flat',
        name: 'Dust Stroke (Su)',
        description:
          'Killing blows disintegrate the victim\'s body into ash and dust, preventing raise dead (though resurrection still functions).',
      },
      {
        scalingType: 'flat',
        name: 'Frightful Presence (Su)',
        description:
          'Activates within a 30-foot aura; affected creatures are shaken for 1d6 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'Gains Toughness and Improved Natural Attack for each of its existing natural attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonus',
        description: 'Gains a +4 racial bonus on Stealth checks.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 286. Mummy Lord (CR +2)
  {
    id: 'mummy-lord',
    name: 'Mummy Lord',
    description:
      'An acquired template for corporeal creatures with 8 or more Hit Dice, transforming them into supremely powerful undead mummy rulers with the ability to command undead and devastate foes with sandstorm powers. Costs 50,000 gp in mummification materials.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'min_hd', minimum: 8 },
    ],
    typeChange: 'undead (augmented)',
    typeChangeNote: 'BAB, saves, and skill ranks remain unchanged. Racial Hit Dice become d8s; class levels unchanged. Uses Charisma modifier for bonus hit points.',
    abilityScoreChanges: [
      { ability: 'STR', change: 8 },
      { ability: 'CHA', change: 6 },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
    ],
    immunities: ['cold', 'electricity'],
    features: [
      {
        scalingType: 'flat',
        name: 'Alignment',
        description: 'Becomes any evil alignment.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance',
        description: 'Gains channel resistance +4.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Armor',
        description:
          'Natural armor bonus equals the higher of +1 per 2 Hit Dice or the base creature\'s existing bonus.',
      },
      {
        scalingType: 'flat',
        name: 'Great Despair (Su)',
        description:
          'Creatures within a 30-foot radius must succeed at a Will save or be paralyzed with fear for 1d4 rounds, then shaken for an additional 1d4 rounds. Creatures that succeed are immune to this effect for 24 hours.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          'Rebuilds over 1d10 days after destruction. Permanent destruction requires three consecutive castings of consecrate, hallow, and dispel evil.',
      },
      {
        scalingType: 'flat',
        name: 'Slam Attack',
        description:
          'Treats the creature as one size category larger for slam damage; delivers insidious mummy rot on a hit.',
      },
      {
        scalingType: 'flat',
        name: 'Insidious Mummy Rot (Su)',
        description:
          'Both a curse and a disease dealing 2d4 Constitution and 2d4 Charisma damage per day. The curse must be removed before the disease can be cured. Failed Heal checks waste any spell used. Victims who die are reduced to sand.',
      },
      {
        scalingType: 'flat',
        name: 'Sandstorm Wrath (Su)',
        description:
          'Three times per day, the mummy lord unleashes a 40-foot cone dealing 2d8 points of fire and slashing damage per 3 Hit Dice. Creatures that fail a Reflex save are blinded for 2d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Undead Mastery (Su)',
        description:
          'Controls undead within 50 feet (Will save, Charisma-based). Can command 6 Hit Dice of undead for every Hit Die it possesses.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          '+8 racial bonus on Intimidate, Sense Motive, and Stealth. Class skills gained: Climb, Disguise, Fly, Knowledge (arcana), Knowledge (religion), Perception, Spellcraft.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Toughness as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 287. Mummy, Dune (CR +3)
  {
    id: 'dune-mummy',
    name: 'Dune Mummy',
    description:
      'An acquired template for living, corporeal creatures that transforms them into powerful desert undead mummies. More potent than the standard mummified creature template, the dune mummy gains a larger CR increase and a higher natural armor bonus.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead (augmented)',
    typeChangeNote: 'Retains other subtypes except alignment subtypes. All racial Hit Dice become d8s; uses Charisma modifier for bonus hit points.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'INT', change: -2, minimum: 1 },
      { ability: 'CON', change: 0, condition: 'Constitution score removed (undead)' },
    ],
    naturalArmorChange: 5,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '-' },
    features: [
      {
        scalingType: 'flat',
        name: 'Alignment',
        description: 'Becomes any evil alignment.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Elemental Vulnerability',
        description:
          'Vulnerable to one randomly determined energy type (fire, acid, cold, electricity, or sonic).',
      },
      {
        scalingType: 'flat',
        name: 'Speed Reduction',
        description:
          'All speeds decrease by 10 feet (minimum 5). Flight maneuverability worsens by one step.',
      },
      {
        scalingType: 'flat',
        name: 'Slam Attack',
        description:
          'Gains a slam attack dealing damage as a creature one size category larger. All attacks are treated as magical for the purposes of overcoming damage reduction.',
      },
      {
        scalingType: 'flat',
        name: 'Dust Stroke (Su)',
        description:
          'Successful killing blows disintegrate the victim\'s body into dust and ash, preventing raise dead (resurrection still functions).',
      },
      {
        scalingType: 'flat',
        name: 'Sudden Burst of Vengeance (Su)',
        description:
          'Twice per day as a free action, the dune mummy acts as if affected by haste for one round.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'Gains Improved Natural Attack for each of its natural attacks.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 288. Mutant (CR +1)
  {
    id: 'mutant',
    name: 'Mutant',
    description:
      'An acquired template for living, corporeal creatures twisted by radiation or wild magic into aberrant forms. Each mutant gains one or more beneficial mutations offset by at least one deformity.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'aberration (augmented)',
    typeChangeNote: 'Hit Dice, base attack bonus, and saves are unchanged.',
    abilityScoreChanges: [
      { ability: 'STR', change: 0, condition: 'Player/GM selects two abilities to gain +4 and two to take -2' },
    ],
    abilityScoreChangeNote:
      'Gains +4 bonus to two chosen ability scores and -2 penalty to two chosen ability scores.',
    immunities: ['radiation'],
    features: [
      {
        scalingType: 'flat',
        name: 'Deformity',
        description:
          'Must choose one deformity: Blind, Deaf, Fragile (staggered 1 round on failed Fort save), Fractured Mind (confused 1 round on failed Will save), Lame (-10 ft. speed), Light Blindness, Mindless (no Int, loses feats and skills, immune to mind-affecting), Misshapen (humanoids cannot wear standard armor), Mutant Spasms (failed Ref save prevents AoOs and immediate actions for 1 round), Poor Ability (-4 to one additional ability score), Useless Arm, or Vulnerability (susceptible to one energy type, losing any existing immunity/resistance).',
      },
      {
        scalingType: 'flat',
        name: 'Mutations',
        description:
          'Gains one mutation upon acquiring the template plus one additional mutation per 4 Hit Dice. Taking a second deformity grants an additional mutation. Available mutations include: Armored (+2 natural armor, stackable), Bulbous Eyes (darkvision 60 ft., low-light vision), Celerity (swift action haste 1 round with 1d4 round recharge, +2 Initiative), Echolocation (blindsense 30 ft., Blind-Fight), Extra Arm (Multiweapon Fighting if 3+ arms), Fast Healing 5, Feral (bite and claws), Gills (aquatic subtype, amphibious, swim speed), Increased Speed (+10 ft. to one speed), Leaping (+10 Acrobatics for jumps), Mental Armor (swift action mage armor), Rage (barbarian rage using HD as level), Resistance (energy resistance 10, stackable for 20 or immunity), Rugged (DR 5/-), Sealed Mind (immune to mind-affecting), Slam attacks, Spell-Like Ability, Stench, Telepathy (100 ft., at-will detect thoughts), Wings (40 ft. fly, average maneuverability).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Class Skills',
        description:
          'Gains Climb, Intimidate, Knowledge (any one), Perception, Sense Motive, Survival, and Swim as class skills.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 289. Mutant Creature (CR +1)
  {
    id: 'mutant-creature',
    name: 'Mutant Creature',
    description:
      'An acquired template nearly identical to the Mutant template for living, corporeal creatures warped by radiation or magic into aberrant forms. Each gains beneficial mutations offset by deformities.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'aberration (augmented)',
    typeChangeNote: 'Hit Dice, base attack bonus, and saves are unchanged.',
    abilityScoreChangeNote:
      'Gains +4 bonus to two chosen ability scores and -2 penalty to two chosen ability scores.',
    immunities: ['radiation'],
    features: [
      {
        scalingType: 'flat',
        name: 'Deformity',
        description:
          'Must choose one deformity: Blind, Deaf, Fragile (staggered 1 round on failed Fort save), Fractured Mind (confused 1 round on failed Will save), Lame (-10 ft. speed), Light Blindness, Mindless (no Int, loses feats and skills, immune to mind-affecting), Misshapen (humanoids cannot wear standard armor), Spasms (loses Dex bonus and cannot make AoOs for 1 round on failed Ref save), Poor Ability (-4 to one additional ability score), Useless Arm, or Vulnerability (susceptible to one energy type, losing any existing immunity/resistance). A second deformity may be taken to gain an extra mutation.',
      },
      {
        scalingType: 'flat',
        name: 'Mutations',
        description:
          'Gains one mutation upon acquiring the template plus one additional per 4 Hit Dice. Available mutations include: Armored (+2 natural armor, stackable), Bulbous Eyes (darkvision 60 ft., low-light vision), Celerity (swift action haste 1 round with 1d4 round recharge, +2 Initiative), Extra Arm (Multiweapon Fighting if 3+ arms), Feral (bite and claws), Fast Healing 5, Gills (aquatic, amphibious, swim speed), Increased Speed (+10 ft., stackable), Leaping (+10 Acrobatics for jumps, counts as running start), Mental Armor (swift action mage armor), Rage (barbarian rage using HD as level), Resistance (energy resistance 10, stackable for 20 or immunity), Rugged (DR 5/-), Sealed Mind (immune to mind-affecting), Slam, Sonar (blindsense 30 ft., Blind-Fight), Spell-Like Ability, Stench, Telepathy (100 ft., at-will detect thoughts), Wings (40 ft. fly, average maneuverability).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Class Skills',
        description:
          'Gains Climb, Intimidate, Knowledge (any one), Perception, Sense Motive, Survival, and Swim as class skills.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 290. Mutant Goblin (CR +1)
  {
    id: 'mutant-goblin',
    name: 'Mutant Goblin',
    description:
      'A simple acquired template applied to goblins that have been twisted by strange magic or vile alchemy, granting four random mutations from a short list of monstrous abilities.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid'] },
      { type: 'special', description: 'Must be a goblin or goblinoid' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'INT', change: -2 },
    ],
    naturalArmorChange: 4,
    features: [
      {
        scalingType: 'flat',
        name: 'Random Mutations',
        description:
          'Gains four random mutations from the following list, plus one additional mutation per 5 Hit Dice: Breath Weapon (line of acidic blood, 20 ft.; 30 ft. if 5+ HD; 1d4 acid damage per HD, or 1d6 per HD if 5+ HD; usable every 1d4 rounds; Reflex DC 10 + 1/2 HD + Con mod); Claws (natural claw attacks with grab ability); Extra Arm (functional extra arm, stackable); Fast Healing (fast healing 1 at base, 2 at 5 HD, 5 at 10 HD); Venomous Bite (poisonous bite attack; poison functions as wyvern poison except DC 10 + 1/2 HD + Con mod); Wings (fly speed 30 ft., clumsy maneuverability).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 291. Mythic Guardian Creature (CR varies)
  {
    id: 'mythic-guardian-creature',
    name: 'Mythic Guardian Creature',
    description:
      'An inherited template for animals that grants mythic power tied to a sacred guardian role. The creature gains a mythic rank equal to half its base CR and mythic abilities that scale with rank, transforming it into a protector of a location or person.',
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
    ],
    subtypeGains: ['mythic'],
    features: [
      {
        scalingType: 'flat',
        name: 'Mythic Rank',
        description:
          'Gains a mythic rank equal to half the base creature\'s CR, along with standard mythic benefits: ability score bonuses, bonus hit points, mythic feats, mythic power, natural armor increases, and spell resistance increases.',
      },
      {
        scalingType: 'flat',
        name: 'Paired Protectors (Su)',
        description:
          'When two or more mythic guardian creatures are within 30 feet of one another, they both radiate a magic circle against evil effect. If dispelled, either creature can reactivate it as a swift action.',
      },
      {
        scalingType: 'flat',
        name: 'Rank-Based Abilities',
        description:
          'Gains abilities by mythic rank (tied to base CR): Rank 1 (CR 1-2): Stony Defense (hardness 8, speed -10 ft., reflects 1d6 damage); Rank 2 (CR 3-4): Stalwart Guardian (+2 sacred bonus on saves); Rank 3 (CR 5-6): Fearsome Roar (30-ft. radius Will save or shaken 1d4+rank rounds); Rank 4 (CR 7-8): Ghost Sight, Stalwart Guardian increases to +4; Rank 5 (CR 9-10): Ghost Killer (natural attacks gain ghost touch), Metallic Defense; Rank 6 (CR 11-12): Banishing Bite, Stalwart Guardian increases to +6; Rank 7 (CR 13-14): Second Save; Rank 8 (CR 15-16): Retributive Strike, Stalwart Guardian increases to +8; Rank 9 (CR 17-18): Adamantine Defense, Sacred Guardian (moving hallow effect; doubled bonuses with paired guardians); Rank 10 (CR 19-20): Mighty Roar (acts as holy word), Stalwart Guardian increases to +10.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 292. Mythic Jiang-Shi (CR +varies)
  {
    id: 'mythic-jiang-shi',
    name: 'Mythic Jiang-Shi',
    description:
      'An acquired template applied to existing jiang-shi creatures, granting a mythic rank equal to half the base jiang-shi\'s CR and escalating powers that overcome the jiang-shi\'s classic weaknesses.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must already have the jiang-shi template' },
    ],
    subtypeGains: ['mythic'],
    features: [
      {
        scalingType: 'flat',
        name: 'Mythic Rank',
        description:
          'Gains a mythic rank equal to half the base jiang-shi\'s CR. Standard mythic benefits apply: ability score bonuses, bonus hit points, mythic feats, mythic power, natural armor increases, and spell resistance increases. CR adjusts only through mythic rank.',
      },
      {
        scalingType: 'flat',
        name: 'Rank-Based Abilities',
        description:
          'Rank 2: Tearing Claws (claws inflict 1d6 bleed; drain chi DC increases by mythic rank against bleeding opponents); Rank 3: Channel Resistance +8; Rank 4: Overcomes mirror weakness; Rank 5: Improved Chi Drain (2 negative levels; drains 2 ki points or grants +2 to saves for rounds equal to rank), Leaping (always running start, +20 Acrobatics); Rank 6: Channel Resistance +12, overcomes handbell weakness; Rank 7: Flight (30-ft. fly, perfect maneuverability), Greater Chi Drain (stuns 1d4 rounds on failed save); Rank 8: Create Spawn (creatures with 5+ HD killed by drain chi rise as jiang-shi in 1d4 days), overcomes cooked rice weakness; Rank 9: Channel Resistance +16; Rank 10: Mass Chi Drain (2 mythic power, drain chi all creatures within 30 ft.), overcomes peach wood weapon and permanent-destruction weaknesses.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 293. Mythic Lycanthrope Template (CR +varies) [3pp]
  {
    id: 'mythic-lycanthrope',
    name: 'Mythic Lycanthrope',
    description:
      'A 3rd-party acquired template applied to creatures with the lycanthrope template, granting a mythic rank equal to half the base lycanthrope\'s CR and escalating powers tied to the beast within.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must already have a lycanthrope template' },
    ],
    subtypeGains: ['mythic'],
    features: [
      {
        scalingType: 'flat',
        name: 'Mythic Rank',
        description:
          'Gains a mythic rank equal to half the base lycanthrope\'s CR. Standard mythic benefits apply: ability score bonuses, bonus hit points, natural armor increases, mythic feats, mythic power, and spell resistance increases.',
      },
      {
        scalingType: 'flat',
        name: 'Rank-Based Abilities',
        description:
          'Rank 1 (CR 1-3): Bloodthirsty (blood rage; bite inflicts bleed equal to half mythic rank; crits or mythic power add Con bleed), Curse of Lycanthropy (DC + mythic rank; non-mythic effects cannot remove it), Regeneration (equal to mythic tier; suppressed only by silver), Skintalker (converse with related animals, +mythic rank to Diplomacy). Rank 2 (CR 4-5): Bloodscent (multiply scent range by mythic rank; pinpoint bleeding creatures; tracking bonus). Rank 3 (CR 6-7): Brotherhood of the Skin (summon nature\'s ally III hourly; can double or apply savage mythic template). Rank 4 (CR 8-9): Enhanced Rage (+4 Str/Con in blood rage; can reallocate up to 4 to Dex), Sovereign Skin (DR/silver in humanoid form; 25% fortification in other forms). Rank 5 (CR 10-11): Great Beast (increase size at will). Rank 6 (CR 12-13): Herald of the Skin (sense/speak through summoned animals). Rank 7 (CR 14-15): Run with the Pack (touch polymorph into animal, Fort save). Rank 8 (CR 16-17): Create Mythic Lycanthrope (mythic power to accelerate or create mythic lycanthropes; fortification 50%). Rank 9 (CR 18-19): Impervious Skin (DR/silver +5; non-silver/mithral weapons cannot overcome DR). Rank 10 (CR 20+): Wild Hunt (grant quarry to allies; enhanced movement via mythic power; fortification 75%).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Unknown (3PP)',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 294. Mythic Penanggalen (CR +varies)
  {
    id: 'mythic-penanggalen',
    name: 'Mythic Penanggalen',
    description:
      'An acquired template applied to creatures with the penanggalen template, granting a mythic rank equal to half the base penanggalen\'s CR. A creature with mythic tiers that becomes a mythic penanggalen loses its existing tiers and gains abilities from this template instead.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Must already have the penanggalen template' },
    ],
    subtypeGains: ['mythic'],
    features: [
      {
        scalingType: 'flat',
        name: 'Mythic Rank',
        description:
          'Gains a mythic rank equal to half the CR of the base penanggalen. Standard mythic benefits apply: ability bonuses, hit point increases, natural armor improvements, spell resistance increases, and mythic feats. CR adjusts only through the mythic rank gained.',
      },
      {
        scalingType: 'flat',
        name: 'Tier Replacement',
        description:
          'A penanggalen that already has mythic tiers loses those tiers and all abilities from them when this template is applied. Abilities are keyed to the original base penanggalen CR rather than the final CR.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 295. Mythic Xenoid Creatures (MR 1 or 2, CR +1)
  {
    id: 'mythic-xenoid-creature',
    name: 'Mythic Xenoid Creature',
    description:
      'A simple acquired template for creatures that have been impregnated with xenoid essence, granting them tentacles, fortification, and the ability to spread their condition to others. Gains mythic rank 1 (or 2 if 11+ HD).',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    subtypeGains: ['mythic'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Mythic Rank',
        description:
          'Gains mythic rank 1 (or rank 2 if the base creature has 11 or more HD).',
      },
      {
        scalingType: 'flat',
        name: 'HD-Scaled Defenses',
        description:
          'HD 1-4: +2 natural armor, acid and electricity resistance 10, 50% fortification, 1 tentacle. HD 5-10: +4 natural armor, acid and electricity resistance 20, 75% fortification, 2 tentacles. HD 11+: +6 natural armor, acid and electricity resistance 30, 100% fortification, 4 tentacles.',
      },
      {
        scalingType: 'flat',
        name: 'Grab (Ex)',
        description: 'All tentacles gain the grab ability.',
      },
      {
        scalingType: 'flat',
        name: 'Tentacle Rake (Ex)',
        description:
          'Can make tentacle rake attacks as primary attacks against charged, grappled, or pinned foes.',
      },
      {
        scalingType: 'flat',
        name: 'Rotting Rake (Su)',
        description:
          'On a successful grapple, the creature deals 1d3 points of Strength damage per tentacle hit. A Fortitude save (DC 10 + 1/2 HD + Con modifier) halves the damage.',
      },
      {
        scalingType: 'flat',
        name: 'True Strike (Su)',
        description:
          'As a swift action, usable a number of times per day equal to its Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Pseudonatural Impregnation (Su)',
        description:
          'Over 8 hours, the creature can implant xenoid essence into a willing or helpless target, granting the mythic xenoid template. This costs 1 mythic power (2 mythic power for mythic targets). The target may attempt a Fortitude save (DC 10 + 1/2 HD + Con modifier) to resist.',
      },
      {
        scalingType: 'flat',
        name: 'Unnatural Form (Su)',
        description:
          'Creates a frightful presence effect whenever the creature is observed. Gains additional abilities per 4 Hit Dice.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 296. Mythic-Colour-Blighted Simple Template (CR +1)
  {
    id: 'mythic-colour-blighted',
    name: 'Mythic-Colour-Blighted',
    description:
      'A simple template for creatures drained by a mythic colour out of space\'s feed attack. The creature becomes an aggressive, decaying thrall that endangers itself daily with a lethal Fortitude save.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    features: [
      {
        scalingType: 'flat',
        name: 'Ability Score Note',
        description:
          'A Charisma score drained to 0 by a mythic colour out of space\'s feed attack is raised to 1; otherwise ability scores are not altered by this template.',
      },
      {
        scalingType: 'flat',
        name: 'Colour Immunity',
        description:
          'Immune to further feed attacks from colours out of space while bearing this template.',
      },
      {
        scalingType: 'flat',
        name: 'Aggressive Behavior (Ex)',
        description:
          'Gains a +2 bonus on attack rolls and weapon damage rolls against creatures not exuding colour out of space coloration.',
      },
      {
        scalingType: 'flat',
        name: 'Daily Decay (Ex)',
        description:
          'Every 24 hours, the creature must succeed at a DC 12 Fortitude save or crumble into fine white ash—an instant death effect.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Lassitude (Su)',
        description:
          'Creatures within 30 feet must succeed at a Will save (DC equal to the mythic colour out of space\'s aura DC) or become overwhelmed with listlessness, taking a -4 penalty on Will saves and refusing to travel more than one mile from the location where they failed. The effect ends via break enchantment or removal from the area; affected creatures may attempt a new Will save daily. This is a mind-affecting effect.',
      },
      {
        scalingType: 'flat',
        name: 'Removal',
        description:
          'The template can be removed by restoring all drained ability scores to their normal values.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 297. Mythical Animal (CR +2) [3pp]
  {
    id: 'mythical-animal',
    name: 'Mythical Animal',
    description:
      'An inherited template (3pp, Tome of Horrors Complete) for non-dire animals with 1 or more HD, representing legendary beasts of myth and fable with dramatically enhanced physical capabilities and the appearance of ordinary animals.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
      { type: 'special', description: 'Cannot be a dire animal. Must have 1 or more HD.' },
    ],
    abilityScoreChangeNote:
      'Small or smaller: +4 Str, +12 Dex, +4 Con, +4 Wis, +4 Cha (minimum 10). Medium: +10 Str, +10 Dex, +6 Con, +4 Wis, +4 Cha (minimum 10). Large or larger: +12 Str, +4 Dex, +6 Con, +4 Wis, +4 Cha (minimum 10).',
    features: [
      {
        scalingType: 'flat',
        name: 'Increased Hit Dice',
        description:
          'Increase racial HD by 50%, then double the result. No size category change. Recalculate BAB, saves, skills, and ability DCs accordingly.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Natural Armor',
        description: 'Natural armor bonus is doubled from the base creature\'s natural armor bonus.',
      },
      {
        scalingType: 'flat',
        name: 'Good Saves',
        description: 'All three saves (Fortitude, Reflex, Will) become good saves.',
      },
      {
        scalingType: 'flat',
        name: 'Increased Speed',
        description:
          'Land speed increases by +10 feet. Swim and fly speeds each increase by +20 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Improved Natural Attacks',
        description:
          'Damage dice for all natural attacks increase as if the creature had the Improved Natural Attack feat applied to each.',
      },
      {
        scalingType: 'flat',
        name: 'Additional CR Increase',
        description:
          'CR increases by an additional +1 per 3 Hit Dice added by the template beyond the base +2 CR adjustment.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'Gains Endurance, Improved Initiative, and Iron Will as bonus feats (if prerequisites are met and not already possessed), plus additional feats from increased Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Indistinguishable Appearance',
        description:
          'The mythical animal appears indistinguishable from a normal animal of its kind, though its eyes may betray its unusual nature. Mythical animals answer to animal lords.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonus',
        description: 'Gains a +4 racial bonus on Perception checks.',
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

  // 298. Mythos Undead (CR +1)
  {
    id: 'mythos-undead',
    name: 'Mythos Undead',
    description:
      'An acquired template for creatures risen as servants of the Great Old Ones, combining the resilience of undeath with the alien menace of the mythos. They are always chaotic and nearly impossible to destroy permanently without reducing them to negative hit points equal to their maximum.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead (augmented)',
    typeChangeNote: 'Hit Dice, base attack bonus, and saves remain unchanged.',
    abilityScoreChanges: [
      { ability: 'CHA', change: 4 },
      { ability: 'CON', change: 0, condition: 'Constitution score removed; Charisma used for hit points and Fortitude saves (undead trait)' },
    ],
    abilityScoreChangeNote:
      'Gains +4 to either Strength or Dexterity (choose one) and +2 to either Intelligence or Wisdom (choose one). Charisma also gains +4. Constitution is replaced by Charisma for hit points and Fortitude saves.',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 10, value: 5, bypassedBy: '-' },
        { minHD: 11, value: 10, bypassedBy: '-' },
      ],
    },
    features: [
      {
        scalingType: 'flat',
        name: 'Alignment',
        description:
          'Always chaotic evil or chaotic neutral, or matching the alignment of the Great Old One it serves.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance',
        description:
          '+2 channel resistance (or +4 if the base creature has 11 or more Hit Dice).',
      },
      {
        scalingType: 'flat',
        name: 'Undead Immunities',
        description: 'Gains all standard undead immunities and defensive abilities.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          'Returns after 24 hours unless completely destroyed (reduced to negative hit points equal to its maximum hit points or disintegrated).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'Gains Toughness and Iron Will as bonus feats.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },

  // 299. N'gathau (CR +3) [3pp]
  {
    id: 'ngathau',
    name: "N'gathau",
    description:
      "A 3rd-party acquired template (Tome of Horrors) for humanoids or monstrous humanoids of Small to Large size with a minimum of 6 Hit Dice, representing beings who have been mutilated and transformed into extraplanar outsiders serving a mysterious council called the Twelve.",
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid', 'monstrous humanoid'] },
      { type: 'min_hd', minimum: 6 },
      { type: 'special', description: 'Must be Small to Large size' },
    ],
    typeChange: 'outsider',
    subtypeGains: ['augmented', 'evil', 'extraplanar', "n'gathau"],
    abilityScoreChanges: [
      { ability: 'STR', change: 8 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 2 },
    ],
    naturalArmorChange: 4,
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'magic' },
    immunities: ['poison', 'acid'],
    resistances: [
      { energyType: 'fire', value: 5 },
      { energyType: 'cold', value: 5 },
    ],
    srFormula: 'CR + 11',
    features: [
      {
        scalingType: 'flat',
        name: 'Alignment',
        description: 'Always neutral evil.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Hit Dice',
        description:
          'All racial Hit Dice become d10s with maximum hit points. Class Hit Dice are unchanged.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description:
          "Retains all base creature attacks and gains a slam attack if lacking one. All natural attacks count as evil and magic for overcoming damage reduction.",
      },
      {
        scalingType: 'flat',
        name: "Cruelty's Bliss (Su)",
        description:
          "When the n'gathau scores a critical hit, it gains a +2 competence bonus on attack rolls, checks, and saves against that opponent for the remainder of the encounter.",
      },
      {
        scalingType: 'flat',
        name: 'Delicious Agony (Su)',
        description:
          "On a successful grapple, the n'gathau can make a claw attack dealing 1d2 points of Constitution drain. The creature heals 5 hit points per point drained. This ability is useless against boneless creatures.",
      },
      {
        scalingType: 'flat',
        name: 'Exquisite Suffering (Su)',
        description:
          "Melee touch attack requiring a Will save (DC 10 + 1/2 HD + Constitution modifier). On a failed save, the target is stunned for 1 round. A target that succeeds is immune to this ability for one day.",
      },
      {
        scalingType: 'flat',
        name: 'Horrifying Appearance (Su)',
        description:
          "Creatures with fewer Hit Dice than the n'gathau must succeed at a Will save or become shaken for 1d6 rounds. Creatures that succeed are immune for one day.",
      },
      {
        scalingType: 'flat',
        name: 'Limited Immortality (Ex)',
        description:
          "When slain, the Twelve (a ruling council) decide whether the n'gathau is resurrected. If so, it returns with no memory of its death and receives new mutilations.",
      },
      {
        scalingType: 'flat',
        name: 'Mutilations (Ex)',
        description:
          "Gains 1d4+1 mutilations from a random table. Each mutilation provides mechanical effects such as skill bonuses, ability score adjustments, or damage modifications.",
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'Gains Improved Critical, Iron Will, Toughness, and Weapon Focus (applicable to natural and weapon attacks) as bonus feats.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          '+8 racial bonus on Intimidate and Sense Motive. Gains outsider skill progression.',
      },
      {
        scalingType: 'flat',
        name: 'Class Restrictions',
        description:
          'Clerics lose turn undead and gain rebuke undead; must worship the Quorum with access only to Death, Destruction, Evil, and Knowledge domains. Sorcerers and wizards permanently lose familiar bonds. Alignment restrictions eliminate paladins.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors',
    },
    visibility: 'global',
    rev: 1,
  },

  // 300. Necrophage Brute (CR +3)
  {
    id: 'necrophage-brute',
    name: 'Necrophage Brute',
    description:
      'A complex acquired template representing a creature whose body has been taken over by a necrophage parasite, transforming it into a mindless, devastatingly strong aberration that deals double damage to objects and structures.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'aberration',
    typeChangeNote: 'Recalculate feats, skills, saves, and hit points. All racial Hit Dice become d8s and 3 racial HD are added.',
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'CON', change: 6 },
      { ability: 'CHA', change: -4 },
      { ability: 'INT', change: 0, condition: 'Intelligence score removed (mindless)' },
    ],
    abilityScoreChangeNote:
      'Intelligence score is removed entirely (creature becomes mindless). Loses all feats and skills dependent on Intelligence.',
    naturalArmorChange: 8,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '-' },
    immunities: ['cold', 'disease', 'mind-affecting effects', 'poison'],
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'Gains darkvision 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Climb Speed',
        description:
          'Gains a climb speed of 10 feet if the host creature lacks one. Retains all host movement modes.',
      },
      {
        scalingType: 'flat',
        name: 'Slam Attacks',
        description:
          'Gains 2 slam attacks dealing 1d8 damage each (medium size).',
      },
      {
        scalingType: 'flat',
        name: 'Siege Strikes (Ex)',
        description:
          'All attacks deal double damage to targets with Hardness.',
      },
      {
        scalingType: 'flat',
        name: 'Limb Weakness',
        description:
          'The necrophage brute has a weakness involving its limbs (specific mechanical details vary by source).',
      },
      {
        scalingType: 'flat',
        name: 'Retained Natural Attacks',
        description:
          'Retains natural attacks from the host creature. Loses all base creature special attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description:
          'Gains Weapon Focus as a bonus feat for each of its natural weapons.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder RPG (d20pfsrd)',
    },
    visibility: 'global',
    rev: 1,
  },
];
