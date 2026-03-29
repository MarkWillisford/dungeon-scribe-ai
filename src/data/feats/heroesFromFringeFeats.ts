import type { FeatDefinition } from '@/types/feats';

export const HEROES_FROM_FRINGE_FEATS: FeatDefinition[] = [
  // blood_frenzy_style / blood_frenzy_strike / blood_frenzy_assault — already in styleFeats.ts (source: Blood of the Sea, same mechanics)

  {
    id: 'citystep',
    name: 'Citystep',
    description:
      'You are as at home in the cities of mankind as your elven ancestors are within the forests. You do not treat crowds as difficult terrain and gain a +5 circumstance bonus on Stealth checks when using a crowd as cover.',
    shortDescription: 'Ignore crowd difficult terrain; +5 Stealth when using a crowd as cover.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'stealth', ranks: 1 },
      { type: 'special', description: 'Half-elf' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['half-elf', 'urban', 'stealth', 'movement'],
  },
  {
    id: 'cloak_of_stone',
    name: 'Cloak of Stone',
    description:
      'You can use the Stealth skill to hide even while being observed while you are in areas of rocky terrain or while underground. You can also hide yourself from view in the open without anything to actually hide behind as long as you are within 10 feet of rocky terrain, or at any time while you are underground.',
    shortDescription:
      'Hide while observed in rocky terrain or underground; hide in open near rocky terrain.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 17 },
      { type: 'feat', featId: 'stone_cover' },
      { type: 'feat', featId: 'stone_shroud' },
      { type: 'skill', skillId: 'stealth', ranks: 11 },
      { type: 'special', description: 'Dwarf with stonecunning racial trait' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['dwarf', 'stealth', 'stonecunning', 'underground'],
  },
  {
    id: 'cloud_invocation',
    name: 'Cloud Invocation',
    description:
      'You can invoke a spiritual connection to cloud dragons once per day as a spell-like ability, creating a thick mist. This functions like obscuring mist but with the following changes: the duration is 1 round per character level, and the effect covers only a 10-foot-radius spread that is 10 feet high.',
    shortDescription:
      'Once per day, create a modified obscuring mist (1 round/level, 10-ft radius).',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [{ type: 'special', description: "Mbe'ke dwarf" }],
    effects: [],
    activationMode: 'conditional',
    tags: ['dwarf', 'spell-like ability', 'mist', 'cloud'],
  },
  {
    id: 'dawns_blessing',
    name: "Dawn's Blessing",
    description:
      'When casting divine spells in bright light, you can treat your caster level as 1 higher. Your damaging spells with the fire or light descriptor deal one additional point of damage even outside areas of bright light.',
    shortDescription:
      '+1 caster level for divine spells in bright light; fire/light spells deal +1 damage.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast divine spells' },
      { type: 'special', description: 'Sandkin half-orc' },
      { type: 'special', description: 'Worshiper of Sarenrae' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['half-orc', 'divine', 'light', 'fire', 'Sarenrae'],
  },
  // equipment_trick — already in armoryFeats.ts (same mechanics)

  {
    id: 'frozen_skin',
    name: 'Frozen Skin',
    description:
      'Rumors abound that winter half-orcs spend so much time in the snow that a thin layer of ice covers their skin. You gain cold resistance 3. If you already have cold resistance, it is increased by 3 instead.',
    shortDescription: 'Gain cold resistance 3, or increase existing cold resistance by 3.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 15 },
      { type: 'special', description: 'Frostkin half-orc' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['half-orc', 'cold resistance', 'racial'],
  },
  {
    id: 'gifts_from_the_sea',
    name: 'Gifts from the Sea',
    description:
      'Once per day, you can fill a vial with water from a natural source. The water becomes magical and functions as a potion of a 1st-level druid spell of your choice, with a caster level equal to your Hit Dice. The potion remains effective for a number of hours equal to your Hit Dice.',
    shortDescription:
      'Once per day, fill a vial with water that becomes a 1st-level druid spell potion.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Shoreborn half-elf' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['half-elf', 'druid', 'water', 'potion'],
  },
  {
    id: 'great_expectations',
    name: 'Great Expectations',
    description:
      'Select Intelligence, Wisdom, or Charisma upon taking this feat (this choice cannot be changed). A number of times per day equal to the modifier in the chosen attribute, you can use an immediate action to gain a +2 circumstance bonus on any skill check using that attribute. The bonus can be applied after rolling, but must be declared before the results are revealed.',
    shortDescription:
      'Gain +2 circumstance bonus on skill checks of one mental stat, usable modifier times/day.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Rainkin half-orc with the skilled alternate racial trait' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['half-orc', 'skill', 'circumstance bonus'],
  },
  {
    id: 'greater_cloud_invocation',
    name: 'Greater Cloud Invocation',
    description:
      'Your Cloud Invocation ability is enhanced. The duration increases to 1 minute per character level and can be dismissed as an immediate action. You can create multiple mist clouds throughout the day within your total duration allotment, expending duration in 1-minute increments. When a new mist is created while a previous one remains active, the older mist dissipates. Additionally, the mist can remain centered on you rather than remaining stationary.',
    shortDescription:
      'Enhanced Cloud Invocation: 1 min/level, dismissible, mobile, and usable in increments.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'cloud_invocation' },
      { type: 'special', description: "Mbe'ke dwarf" },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dwarf', 'spell-like ability', 'mist', 'cloud'],
  },
  {
    id: 'hammer_throw',
    name: 'Hammer Throw',
    description:
      "You can throw a hammer with such force that it knocks your foes over. As a standard action, make a single ranged attack with a bludgeoning weapon against a creature no more than one size category larger than you within the weapon's first range increment. On a hit, immediately attempt a trip combat maneuver. This maneuver does not provoke attacks of opportunity, and failing by 10 or more does not cause you to fall prone.",
    shortDescription:
      'As a standard action, throw a bludgeoning weapon and attempt a free trip maneuver on hit.',
    source: 'Heroes from the Fringe',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'precise_shot' },
      { type: 'bab', minimum: 1 },
      { type: 'special', description: 'Dwarf' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dwarf', 'ranged', 'trip', 'hammer', 'bludgeoning'],
  },
  {
    id: 'improved_hammer_throw',
    name: 'Improved Hammer Throw',
    description: 'You can use the Hammer Throw feat against targets at any range and of any size.',
    shortDescription: 'Hammer Throw works against targets at any range and of any size.',
    source: 'Heroes from the Fringe',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'hammer_throw' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'precise_shot' },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Dwarf' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['dwarf', 'ranged', 'trip', 'hammer', 'bludgeoning'],
  },
  {
    id: 'lead_by_example',
    name: 'Lead by Example',
    description:
      'You have held positions of importance since youth, naturally inspiring others through your example. Whenever you confirm a critical hit in combat, all allies within 30 feet gain a +2 morale bonus on attack rolls for the next round.',
    shortDescription:
      'Confirming a critical hit grants all allies within 30 ft a +2 morale bonus on attacks for 1 round.',
    source: 'Heroes from the Fringe',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
      { type: 'special', description: 'Half-orc' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['half-orc', 'morale', 'leadership', 'critical hit'],
  },
  {
    id: 'master_hammer_throw',
    name: 'Master Hammer Throw',
    description:
      'You can immediately attempt a trip combat maneuver against a target that you successfully hit and damage with a thrown bludgeoning weapon with any attack, even as part of a full-attack action.',
    shortDescription:
      'Attempt a free trip on any hit with a thrown bludgeoning weapon, even during a full attack.',
    source: 'Heroes from the Fringe',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'hammer_throw' },
      { type: 'feat', featId: 'improved_hammer_throw' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'precise_shot' },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Dwarf' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dwarf', 'ranged', 'trip', 'hammer', 'bludgeoning'],
  },
  {
    id: 'pinch_time',
    name: 'Pinch Time',
    description:
      'Half-elves experience time differently from other races, and you have learned to take advantage of this unique temporal perception. Once per day, as a standard action, you can gain the benefits of haste until the end of your next turn.',
    shortDescription: 'Once per day, gain the benefits of haste until the end of your next turn.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 5 },
      { type: 'special', description: 'Spireborn half-elf' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['half-elf', 'haste', 'time'],
  },
  {
    id: 'precipice_strike',
    name: 'Precipice Strike',
    description:
      'When both you and your target occupy difficult terrain, your target is treated as flat-footed. Additionally, attacking a flat-footed enemy from higher elevation (including while falling) grants a +2 circumstance bonus to your attack roll.',
    shortDescription:
      'Treat targets as flat-footed in difficult terrain; +2 attack vs. flat-footed from higher ground.',
    source: 'Heroes from the Fringe',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Cragkin half-orc' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['half-orc', 'terrain', 'flat-footed', 'elevation'],
  },
  {
    id: 'sand_strike',
    name: 'Sand Strike',
    description:
      'You can embed sand into cestuses you wear. Sand-embedded cestuses gain +1 hardness and +5 hit points. While wearing sand-embedded cestuses, you can perform a dirty trick maneuver to blind an opponent in place of a melee attack without provoking an attack of opportunity. This action causes the sand to be removed from the cestuses. A single cestus can be embedded as a full-round action, but incurs a -4 penalty on the dirty trick check.',
    shortDescription: 'Embed sand in cestuses to enable a no-AoO blind dirty trick maneuver.',
    source: 'Heroes from the Fringe',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Dwarf, proficiency with the cestus' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dwarf', 'dirty trick', 'cestus', 'blind'],
  },
  {
    id: 'sense_allies',
    name: 'Sense Allies',
    description:
      'Wildborn who grow up together develop a heightened attunement to the presence of others, maintaining this ability throughout their lives. You are aware of the location of all allies within 60 feet, even if they are hiding, invisible, or otherwise could not normally be detected.',
    shortDescription: 'Always aware of all allies within 60 ft, even hidden or invisible.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'perception', ranks: 3 },
      { type: 'special', description: 'Wildborn half-elf' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['half-elf', 'perception', 'awareness', 'allies'],
  },
  {
    id: 'solitary_survivor',
    name: 'Solitary Survivor',
    description:
      'As a free action when no conscious allies are within 30 feet, you enter a focused state. While in this state, your melee attacks deal an additional 1d6 points of damage. This bonus damage does not multiply on critical hits. You can maintain this state for a number of rounds per day equal to your Hit Dice, and these rounds do not need to be consecutive.',
    shortDescription:
      'When alone, enter focused state for +1d6 melee damage for rounds/day equal to HD.',
    source: 'Heroes from the Fringe',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 17 },
      { type: 'bab', minimum: 4 },
      { type: 'special', description: 'Half-orc' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['half-orc', 'melee', 'damage', 'solo'],
  },
  {
    id: 'stone_cover',
    name: 'Stone Cover',
    description:
      'While in areas of rocky terrain or underground, you can gain defensive benefits. As a swift action, you gain a 10% miss chance until the start of your next turn. Alternatively, you can spend a move action to better position yourself and gain concealment. These effects do not stack with similar effects.',
    shortDescription:
      'Swift action: 10% miss chance; or move action: concealment; while in rocky terrain or underground.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'stone_shroud' },
      { type: 'skill', skillId: 'stealth', ranks: 6 },
      { type: 'special', description: 'Dwarf with stonecunning racial trait' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dwarf', 'stealth', 'stonecunning', 'underground', 'concealment'],
  },
  {
    id: 'stone_shroud',
    name: 'Stone Shroud',
    description:
      'Your connection to the earth enables you to find the perfect spot to hide among the stone. You gain a +4 bonus on Stealth checks while in areas of rocky terrain or while underground.',
    shortDescription: '+4 Stealth in rocky terrain or underground.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'skill', skillId: 'stealth', ranks: 1 },
      { type: 'special', description: 'Dwarf with stonecunning racial trait' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['dwarf', 'stealth', 'stonecunning', 'underground'],
  },
  {
    id: 'strength_in_defeat',
    name: 'Strength in Defeat',
    description:
      'You channel inner reserves and fight more intensely when your health is compromised. When reduced to half of your maximum hit points or fewer, you gain a +1 morale bonus on attack and damage rolls. This bonus increases to +2 at 8th level and to +3 at 15th level.',
    shortDescription:
      '+1 morale bonus on attack and damage at half HP or below; scales to +3 at 15th level.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'bab', minimum: 1 },
      { type: 'special', description: 'Darkborn half-elf' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['half-elf', 'morale', 'low hp', 'resilience'],
  },
  {
    id: 'twilight_words',
    name: 'Twilight Words',
    description:
      "Snowborn half-elves inherit curiosity about other cultures and excel at relating to unfamiliar groups. You can attempt a Diplomacy check to improve someone's attitude even if you do not speak a common language, though the other party must still have an Intelligence of 3 or higher.",
    shortDescription: 'Attempt Diplomacy to change attitudes without a shared language.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'diplomacy', ranks: 3 },
      { type: 'special', description: 'Snowborn half-elf' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['half-elf', 'diplomacy', 'language', 'social'],
  },
  {
    id: 'unaging',
    name: 'Unaging',
    description:
      'You take after your long-lived elven parent more than other half-elves. While your lifespan is not any longer than usual, age weighs less heavily on your shoulders. You gain a +4 racial bonus to resist any effect that would magically age you or otherwise displace you in time. Additionally, you reduce all penalties gained from magical aging by 1.',
    shortDescription: '+4 racial bonus vs. magical aging; reduce magical aging penalties by 1.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Half-elf' }],
    effects: [],
    activationMode: 'passive',
    tags: ['half-elf', 'aging', 'racial'],
  },
  {
    id: 'unraveler_of_secrets',
    name: 'Unraveler of Secrets',
    description:
      'You gain a +2 circumstance bonus on Knowledge (history) checks. Additionally, you can cast object reading once per day as a spell-like ability, attempting a Knowledge (history) check in place of an Appraise check.',
    shortDescription:
      '+2 on Knowledge (history) checks; once per day cast object reading as a spell-like ability.',
    source: 'Heroes from the Fringe',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 15 },
      { type: 'skill', skillId: 'knowledge_history', ranks: 1 },
      { type: 'special', description: 'Gloomkin half-orc' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['half-orc', 'knowledge', 'history', 'spell-like ability'],
  },
];

// CHECKPOINT: last_written=unraveler_of_secrets, written=27/27, status=complete
