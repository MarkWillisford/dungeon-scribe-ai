import type { MaterialDefinition } from '@/types/equipment';

export const EXTRA_MATERIALS: MaterialDefinition[] = [
  {
    id: 'astral_driftmetal',
    name: 'Astral Driftmetal',
    description:
      'Found drifting through the Astral Plane, this silvery metal occasionally incorporates fragments of planar debris. Weapons made of astral driftmetal are treated as ghost touch weapons against incorporeal creatures on the Astral Plane. Armor provides a +1 deflection bonus against attacks from incorporeal creatures.',
    weaponCostModifier: '+2000 gp',
    armorCostModifier: '+2000 gp',
    hardness: 12,
    hpPerInch: 25,
    properties: [
      'treated as ghost touch vs incorporeal on Astral Plane',
      '+1 deflection bonus vs incorporeal (armor)',
    ],
    applicableTo: ['weapon', 'armor'],
    source: 'Distant Worlds',
  },
  {
    id: 'cassisian_steel',
    name: 'Cassisian Steel',
    description:
      'Named after the cassisian angels who first demonstrated its manufacture, this bright, almost white steel has a faint inner luminosity. Cassisian steel weapons deal +1 damage against evil outsiders and undead. Armor made from cassisian steel grants the wearer a +1 sacred bonus on saving throws against spells with the evil descriptor.',
    weaponCostModifier: '+1500 gp',
    armorCostModifier: '+2000 gp',
    hardness: 12,
    hpPerInch: 30,
    properties: [
      '+1 damage vs evil outsiders and undead (weapons)',
      '+1 sacred bonus on saves vs evil spells (armor)',
    ],
    applicableTo: ['weapon', 'armor'],
    source: 'Inner Sea World Guide',
  },
  {
    id: 'cryptstone',
    name: 'Cryptstone',
    description:
      'Carved from limestone quarried from ancient necromantic sites, cryptstone contains trace amounts of negative energy. Weapons made of cryptstone deal +1 damage against living creatures but -1 damage against undead. Undead targeted by cryptstone weapons do not receive their turn undead resistance bonus.',
    weaponCostModifier: '+400 gp',
    hardness: 7,
    hpPerInch: 8,
    properties: [
      '+1 damage vs living creatures',
      '-1 damage vs undead',
      'undead lose turn undead resistance vs this weapon',
    ],
    applicableTo: ['weapon'],
    source: 'Pathfinder Campaign Setting',
  },
  {
    id: 'elven_pine',
    name: 'Elven Pine',
    description:
      'This ancient timber, cultivated and treated by elven foresters over centuries, is stronger and lighter than ordinary wood. Weapons made of elven pine weigh half as much as normal. Shields and armor made of elven pine reduce their armor check penalty by 1.',
    weaponCostModifier: '+300 gp',
    shieldCostModifier: '+200 gp/lb',
    armorCostModifier: '+200 gp/lb',
    hardness: 6,
    hpPerInch: 12,
    properties: [
      'half weight (weapons)',
      '-1 armor check penalty (shields/armor)',
      'counts as wood',
    ],
    applicableTo: ['weapon', 'armor', 'shield'],
    source: "Adventurer's Armory",
  },
  {
    id: 'fireblast_powder_inlay',
    name: 'Fireblast Powder Inlay',
    description:
      'Weapons inlaid with channels of compressed fireblast powder can be triggered to deal additional fire damage. Once per day as a free action, the wielder can activate the inlay, causing the next successful hit to deal an additional 2d6 fire damage. The inlay burns out after each use and must be replaced.',
    weaponCostModifier: '+1000 gp (initial inlay); 100 gp per replacement',
    hardness: 10,
    hpPerInch: 30,
    properties: [
      'once per day: +2d6 fire damage on next hit (free action)',
      'inlay burns out after each use (100 gp to replace)',
    ],
    applicableTo: ['weapon'],
    source: "Adventurer's Armory",
  },
  {
    id: 'lazurite',
    name: 'Lazurite',
    description:
      'This rich blue mineral is found near deposits of lapis lazuli and contains trace amounts of magically resonant crystals. Lazurite weapons deal +1 sonic damage on a hit. Lazurite is brittle and has the fragile quality.',
    weaponCostModifier: '+600 gp',
    hardness: 6,
    hpPerInch: 6,
    properties: ['+1 sonic damage', 'fragile'],
    applicableTo: ['weapon'],
    source: 'Inner Sea World Guide',
  },
  {
    id: 'liquid_glass',
    name: 'Liquid Glass',
    description:
      'Through a rare alchemical process, glass can be treated to remain permanently pliable while retaining its cutting edge. Liquid glass weapons have the same statistics as obsidian but lack the fragile quality. On a confirmed critical hit they shatter violently, dealing an additional 1d4 points of bleed damage.',
    weaponCostModifier: '+500 gp',
    hardness: 7,
    hpPerInch: 8,
    properties: [
      'not fragile (unlike obsidian)',
      '+1d4 bleed damage on critical hit',
      'counts as glass',
    ],
    applicableTo: ['weapon'],
    source: 'Ultimate Equipment',
  },
  {
    id: 'nexavaran_steel',
    name: 'Nexavaran Steel',
    description:
      'This advanced steel alloy developed in Nex combines alchemical treatments with precise metallurgical processes. Nexavaran steel weapons gain a +1 bonus on damage rolls. Armor made of Nexavaran steel has its armor check penalty reduced by 1 and its maximum Dex bonus increased by 1.',
    weaponCostModifier: '+1000 gp',
    armorCostModifier: '+2500 gp',
    hardness: 12,
    hpPerInch: 30,
    properties: [
      '+1 damage bonus (weapons)',
      '-1 armor check penalty (armor)',
      '+1 max Dex bonus (armor)',
    ],
    applicableTo: ['weapon', 'armor'],
    source: 'Inner Sea World Guide',
  },
  {
    id: 'pelts_beast',
    name: 'Beast Pelt (Armor)',
    description:
      'Specially prepared pelts from large magical beasts can be fashioned into light armor equivalent to leather. Pelts from creatures with energy resistance may retain a trace of that protection. Pelt armor costs half as much as normal leather armor of equivalent quality.',
    armorCostModifier: '+50 gp to +500 gp depending on source creature',
    hardness: 3,
    hpPerInch: 5,
    properties: [
      'light armor only',
      'may grant energy resistance 1 (creature-dependent)',
      'treated as leather or hide',
    ],
    applicableTo: ['armor'],
    source: 'Ultimate Equipment',
  },
  {
    id: 'soarwood',
    name: 'Soarwood',
    description:
      'This rare buoyant wood is supernaturally light and has been used in the construction of flying vessels. Items made from soarwood weigh one-quarter of normal. Shields made of soarwood do not interfere with Swim checks and grant the bearer a +2 circumstance bonus on Fly checks.',
    shieldCostModifier: '+2000 gp',
    armorCostModifier: '+1500 gp (light)',
    hardness: 5,
    hpPerInch: 10,
    properties: [
      'one-quarter weight',
      '+2 circumstance bonus on Fly checks (bearer)',
      'no swim check penalty from shield',
    ],
    applicableTo: ['armor', 'shield'],
    source: 'Inner Sea World Guide',
  },
  {
    id: 'sunsilk',
    name: 'Sunsilk',
    description:
      'Woven from the cocoons of sun spiders, rare creatures that spin their silk in the hottest desert regions, sunsilk is lighter than silk but stronger than leather. Armor made from sunsilk counts as one armor category lighter for movement and proficiency purposes and provides fire resistance 1.',
    armorCostModifier: '+500 gp (light), +2000 gp (medium)',
    hardness: 4,
    hpPerInch: 8,
    properties: ['one armor category lighter', 'fire resistance 1', 'light or medium armor only'],
    applicableTo: ['armor'],
    source: 'Inner Sea World Guide',
  },
  {
    id: 'voidglass',
    name: 'Voidglass',
    description:
      'This dark glass is formed by meteorites striking desert sands at tremendous velocity, fusing sky-metal traces with silica. Voidglass weapons deal +1 cold damage as they leach warmth from whatever they strike. Voidglass has the fragile quality and shatters on a natural 1 on an attack roll.',
    weaponCostModifier: '+800 gp',
    hardness: 6,
    hpPerInch: 5,
    properties: [
      '+1 cold damage',
      'fragile',
      'shatters on natural 1 attack roll',
      'counts as glass',
    ],
    applicableTo: ['weapon'],
    source: 'People of the Stars',
  },
  {
    id: 'wyrmbone',
    name: 'Wyrmbone',
    description:
      "Harvested from the skeletal remains of true dragons, wyrmbone is far denser and harder than ordinary bone. Weapons carved from wyrmbone deal damage as if one size larger and may deal energy damage matching the dragon's type on a critical hit (1d6, Fort DC 13 negates). Wyrmbone items cost five times as much as normal bone equivalents.",
    weaponCostModifier: 'x5 bone cost',
    armorCostModifier: 'x5 bone cost',
    hardness: 8,
    hpPerInch: 12,
    properties: [
      'damage as one size larger (weapons)',
      '1d6 energy damage on crit matching dragon type (DC 13)',
      'heavier than bone but lighter than steel',
    ],
    applicableTo: ['weapon', 'armor'],
    source: 'Ultimate Equipment',
  },
];
