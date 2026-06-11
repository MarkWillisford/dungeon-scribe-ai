// Batch 001 | first: 'Dwarf' | last: 'Human' | races: 7 | traits: 322
import { AlternativeRacialTraitData } from '../types';

export const dwarfAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Ancient Enmity',
    description:
      'Dwarves have long been in conflict with elves, especially the hated drow. Dwarves with this racial trait receive a +1 racial bonus on attack rolls against humanoid creatures of the elf subtype. This racial trait replaces hatred.',
    replaces: ['Hatred'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Barrow Scholar',
    description:
      'Dwarves with this racial trait gain a +2 racial bonus on Knowledge (religion) checks to identify undead and can attempt them untrained. This racial trait replaces stonecunning.',
    replaces: ['Stonecunning'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Barrow Warden',
    description:
      'Dwarves with this racial trait gain a +1 bonus on attack rolls and a +1 dodge bonus to their AC against undead. This racial trait replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Behind the Veil',
    description:
      'Characters with this trait gain a +2 bonus on Bluff and Sleight of Hand checks while benefiting from concealment or cover. Dwarves can take this trait in place of stonecunning.',
    replaces: ['Stonecunning'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Breath Weapon',
    description:
      "Dwarves with this racial trait can call upon the spirit of a sacred dragon to channel a fraction of that dragon's power. Once per day, the dwarf can make a supernatural breath attack, dealing 1d4 points of damage of the chosen damage type, plus 1d4 points of damage of that type for every 2 levels above 1st the dwarf has (to a maximum of 5d4 at 9th level). This replaces greed, hatred, stonecunning, and weapon familiarity.",
    replaces: ['Greed', 'Hatred', 'Stonecunning', 'Weapon Familiarity'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Craftsman',
    description:
      'Dwarves are known for their superior craftsmanship when it comes to metallurgy and stonework. Dwarves with this racial trait receive a +2 racial bonus on all Craft or Profession checks related to metal or stone. This racial trait replaces greed.',
    replaces: ['Greed'],
    source: 'Advanced Race Guide',
  },
  {
    name: "Death's End",
    description:
      'Dwarves with this racial trait gain a +2 bonus to AC against undead and a +2 bonus on saving throws against spells and spell-like abilities cast by undead. This replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Deep Tradition',
    description:
      'A dwarf with this racial trait gains a +1 bonus on melee attack rolls and a +1 bonus to AC against attacks of opportunity made by drow, duergar, creatures of the aberration type, or creatures of the giant or orc subtype. This replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Deep Warrior',
    description:
      'Dwarves with this racial trait grew up facing the abominations that live deep beneath the surface. They receive a +2 dodge bonus to AC against monsters of the aberration type and a +2 racial bonus on combat maneuver checks made to grapple such creatures (or to continue a grapple). This racial trait replaces defensive training.',
    replaces: ['Defensive Training'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Desert Delver',
    description:
      'Desert dwarves have adapted to the extremes of cold and heat. Dwarves with this racial trait gain cold and fire resistance 1 and treat the temperature as 20 degrees cooler or warmer when determining the effects of extreme heat or extreme cold environments. This replaces defensive training.',
    replaces: ['Defensive Training'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Dimdweller',
    description:
      'Whenever characters with this trait benefit from concealment or full concealment due to darkness or dim light, they gain a +2 racial bonus on Intimidate, Perception, and Stealth checks. Dwarves can take this trait in place of greed and stonecunning.',
    replaces: ['Greed', 'Stonecunning'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Dusksight',
    description:
      'When making ranged attacks, characters with this trait can reroll the miss chance granted by cover to any target in dim light, and take the better of the two rolls. The miss chance for total concealment applies normally. Dwarves can take this trait in place of hatred and darkvision, also gaining low-light vision.',
    replaces: ['Hatred', 'Darkvision'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Fey Magic',
    description:
      'The character has a mystic connection to one terrain type. The character selects three 0-level druid spells and one 1st-level druid spell. If the character has a Charisma score of 11 or higher, when in the selected terrain, she gains these spells as spell-like abilities that can be cast once per day. This trait replaces greed and stonecunning.',
    replaces: ['Greed', 'Stonecunning'],
    source: 'Heroes of the Wild',
  },
  {
    name: 'Fey Thoughts',
    description:
      'Select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Escape Artist, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. The selected skills are always class skills for the character. This trait replaces hatred.',
    replaces: ['Hatred'],
    source: 'Heroes of the Wild',
  },
  {
    name: 'Giant Hunter',
    description:
      'Dwarves with this racial trait gain a +1 bonus on attack rolls against humanoids with the giant subtype. Furthermore, they gain a +2 bonus on Survival checks to find and follow tracks made by humanoids with the giant subtype. This racial trait replaces the hatred racial trait.',
    replaces: ['Hatred'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Healthy',
    description:
      'Dwarves with this racial trait gain a +2 racial bonus on saves against disease and poison, and they need one fewer consecutive successful save (minimum 1) to be cured of diseases and poisons. This racial trait replaces hardy.',
    replaces: ['Hardy'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Industrious Urbanite',
    description:
      'Dwarves who have adapted to the expectations of their host cities make double the normal progress on Craft checks to create non-magical items and gain a +4 bonus on Profession checks to earn money. This racial trait replaces hatred.',
    replaces: ['Hatred'],
    source: 'Heroes of the Streets',
  },
  {
    name: 'Iron Citizen',
    description:
      'Dwarves with this racial trait gain a +2 bonus on Diplomacy and Sense Motive checks, and Diplomacy is a class skill for such dwarves. This replaces stability.',
    replaces: ['Stability'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Iron Within',
    description:
      'Dwarves with this racial trait gain 1 ki point. The dwarf can expend the ki point as a swift action to either gain a +2 dodge bonus to AC for 1 round or increase her base speed by 20 feet for 1 round. This replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Lasting Grudge',
    description:
      'Dwarves are notorious for their long-lasting grudges. Those who live up to this racial reputation gain a +1 racial bonus on attack rolls against any individual creature that has attacked them 1 day ago or longer. This racial trait replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Lorekeeper',
    description:
      'Dwarves keep extensive records about their history and the world around them. Dwarves with this racial trait receive a +2 racial bonus on Knowledge (history) checks that pertain to dwarves or their enemies. They can make such skill checks untrained. This racial trait replaces greed.',
    replaces: ['Greed'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Low-Light Vision',
    description: 'Feyborn dwarves gain low-light vision. This trait replaces darkvision.',
    replaces: ['Darkvision'],
    source: 'Bloodlines',
  },
  {
    name: 'Magic Resistant',
    description:
      'Some of the older dwarven clans are particularly resistant to magic. Dwarves with this racial trait gain spell resistance equal to 5 + their character level. Dwarves with this racial trait take a -2 penalty on all concentration checks made in relation to arcane spells. This racial trait replaces hardy.',
    replaces: ['Hardy'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Minesight',
    description:
      'Dwarves with this racial trait increase the range of their darkvision to 90 feet; however, they are automatically dazzled in bright light and take a -2 penalty on saving throws against effects with the light descriptor. This racial trait replaces darkvision.',
    replaces: ['Darkvision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Mountaineer',
    description:
      'Mountain dwarves are skilled at climbing and navigating narrow ledges. Dwarves with this racial trait are immune to altitude sickness and do not lose their Dexterity bonus to AC when making Climb or Acrobatics checks to cross narrow or slippery surfaces. This racial trait replaces stability.',
    replaces: ['Stability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Poison Minion',
    description:
      'Drow sometimes augment their slaves. Any creature that hits such a character with a bite attack is immediately exposed to its poison. Mawbane Poison—ingested; save Fortitude as above; frequency 1/round for 4 rounds; effect 1d2 Constitution damage; cure 1 save. Dwarves can take this trait in place of defensive training and hardy.',
    replaces: ['Defensive Training', 'Hardy'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Relentless',
    description:
      'Dwarves are skilled at pushing their way through a battlefield, tossing aside lesser foes with ease. Dwarves with this racial trait receive a +2 bonus on combat maneuver checks made to bull rush or overrun an opponent. This bonus only applies while both the dwarf and his opponent are standing on the ground. This racial trait replaces stability.',
    replaces: ['Stability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Rock Stepper',
    description:
      'Dwarves with this racial trait can skillfully negotiate rocky terrain. They can ignore difficult terrain created by rubble, broken ground, or steep stairs when they take a 5-foot step. This racial trait replaces stonecunning.',
    replaces: ['Stonecunning'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Saltbeard',
    description:
      'Dwarves occasionally found iron cities along rugged seacoasts. They gain a +2 bonus on Profession (sailor) and Survival checks while at sea. They gain a +1 racial bonus on attack rolls and a +2 dodge bonus to AC against creatures with the aquatic or water subtype. This racial trait replaces defensive training, hatred, and stonecunning.',
    replaces: ['Defensive Training', 'Hatred', 'Stonecunning'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Sense Aberration',
    description:
      'Dwarves with this trait gain a +2 racial bonus on Knowledge (dungeoneering) checks and on Perception checks to notice disguised or hidden aberrations. This racial trait replaces stonecunning.',
    replaces: ['Stonecunning'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Shadowhunter',
    description:
      'Characters with this trait deal 50% weapon damage to incorporeal creatures when using non-magical weapons. They also gain a +2 bonus on saving throws to remove negative levels, and recover physical ability damage from attacks by undead creatures at a rate of 2 points per ability score per day. Dwarves can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Shadowplay',
    description:
      'Characters with this trait cast spells with the darkness, light, or shadow descriptor at +1 caster level. Dwarves can take this trait in place of greed.',
    replaces: ['Greed'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Siege Survivor',
    description:
      'Dwarves who make their homes in the Sky Citadels are trained to outlast sieges. They gain Endurance as a bonus feat. In addition, during rounds in which they have not moved, they gain a +1 racial bonus on attack rolls against foes who also did not move since their last turn. This racial trait replaces greed, hardy, and hatred.',
    replaces: ['Greed', 'Hardy', 'Hatred'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Slag Child',
    description:
      "Dwarves from dishonored families must append '-slag,' '-slagsun,' or '-slagdam' to their surnames. They gain a +2 racial bonus on Stealth and Survival checks. This racial trait replaces defensive training and hatred.",
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Sky Sentinel',
    description:
      'As creatures with a deep affinity for the ground, dwarves are wary of attacks from above. Enemies on higher ground gain no attack roll bonus against dwarves with this racial trait, and they gain a +1 racial bonus on attack rolls, a +2 dodge bonus to AC, and a +2 bonus on Perception checks against flying creatures. This racial trait replaces defensive training, hatred, and stonecunning.',
    replaces: ['Defensive Training', 'Hatred', 'Stonecunning'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Spell Smasher',
    description:
      'Dwarven families who are threatened by hostile magic-users train intently to thwart spellcasting. They gain a +1 racial bonus on attack rolls against creatures in the process of casting spells or spell-like abilities. This racial trait replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Spiritual Support',
    description:
      'Dwarves greatly value loyalty in faith, and their gods readily reward them for it. They gain a +1 racial bonus to their caster levels when casting conjuration (healing) spells upon allies. This racial trait replaces greed and hardy.',
    replaces: ['Greed', 'Hardy'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Stoic Negotiator',
    description:
      'Some dwarves use their unwavering stubbornness to get what they want in negotiations. They gain a +2 racial bonus on Bluff, Diplomacy, and Profession (merchant) checks. This racial trait replaces defensive training, hatred, and stonecunning.',
    replaces: ['Defensive Training', 'Hatred', 'Stonecunning'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Stonesinger',
    description:
      "Some dwarves' affinity for the earth grants them greater powers. Dwarves with this racial trait are treated as one level higher when casting spells with the earth descriptor. This racial trait replaces stonecunning.",
    replaces: ['Stonecunning'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Stubborn',
    description:
      'Dwarves are renowned for their stubbornness. Dwarves with this racial trait receive a +2 racial bonus on Will saves to resist spells and spell-like abilities of the enchantment (charm) and enchantment (compulsion) schools. This racial trait replaces hardy.',
    replaces: ['Hardy'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Surface Survivalist',
    description:
      'Some dwarves have dwelt so long above ground they have lost their ability to see at night. They treat wind conditions and either hot or cold climates (choose one) as one step less severe. This racial trait replaces darkvision.',
    replaces: ['Darkvision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Tightfisted',
    description:
      'Dwarves with this racial trait gain a +4 racial bonus to their CMD against disarm and steal combat maneuvers and a +2 racial bonus on Perception checks to notice Sleight of Hand attempts. This racial trait replaces stability and stonecunning.',
    replaces: ['Stability', 'Stonecunning'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Treasure Sense',
    description:
      'Some dwarves have learned to sense the presence of material wealth with dragonlike precision. This ability functions as scent, except it can detect only precious metals (copper, silver, and gold) and creatures primarily made of such materials. This trait replaces stability and stonecunning.',
    replaces: ['Stability', 'Stonecunning'],
    source: 'Legacy of Dragons',
  },
  {
    name: 'Unstoppable',
    description:
      'Some dwarves train from a young age to outlast orcs on the battlefield. They gain Toughness as a bonus feat and a +1 racial bonus on Fortitude saves. This racial trait replaces hardy.',
    replaces: ['Hardy'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Viscous Blood',
    description:
      'Dwarves with this trait takes 1 less point of hit point damage, ability damage, or ability drain (minimum 1) from bleed and blood drain. They can attempt Heal checks to staunch their own bleeding as a swift action each round. This racial trait replaces hardy.',
    replaces: ['Hardy'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Voice in the Darkness',
    description:
      'Characters who practice coercion and intimidation in the Underworld or on the Shadow Plane learn to do so in dim light or no light at all. They gain a +2 bonus on Intimidate and Stealth checks. Dwarves can take this trait in place of stonecunning.',
    replaces: ['Stonecunning'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Xenophobic',
    description:
      "Isolationist dwarves despise non-dwarven humanoids. They speak only Dwarven and do not gain any bonus languages from possessing a high Intelligence score. However, their untrusting nature gives them a +1 bonus against mind-affecting effects, except for fear affects. This racial trait replaces a dwarf's normal languages.",
    replaces: ['Languages'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Wanderer',
    description:
      'You gain Endurance as a bonus feat, and Climb and Swim are class skills for them. This racial trait replaces hardy.',
    replaces: ['Hardy'],
    source: 'Legacy of the First World',
  },
  {
    name: 'Wyrmscourged',
    description:
      'Dwarves with this racial trait gain a +1 bonus on attack rolls and a +2 dodge bonus to AC and on saving throws against the extraordinary, supernatural, and spell-like abilities of dragons. They also gain a +2 racial bonus on Knowledge (arcana) checks to identify dragons and can make such checks untrained. This racial trait replaces defensive training, hatred, and stonecunning.',
    replaces: ['Defensive Training', 'Hatred', 'Stonecunning'],
    source: 'Advanced Race Guide',
  },
];

export const elfAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Ageless Patience',
    description:
      'These elves gain a +2 racial bonus when taking 20 on skill checks. This racial trait replaces elven magic and keen senses.',
    replaces: ['Elven Magic', 'Keen Senses'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Aquatic Mastery',
    description:
      'Elves with this racial trait increase the DC of any spell with the water descriptor they cast by 1. This replaces weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Arcane Focus',
    description:
      'Elves with this racial trait gain a +2 racial bonus on concentration checks made to cast arcane spells defensively. This racial trait replaces weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Behind the Veil',
    description:
      'Characters with this trait gain a +2 bonus on Bluff and Sleight of Hand checks while benefiting from concealment or cover. Elves can take this trait in place of low-light vision.',
    replaces: ['Low-Light Vision'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Blended View',
    description:
      'Characters with this trait keep their low-light vision but also gain darkvision to a distance of 60 feet. Elves can take this trait in place of keen senses.',
    replaces: ['Keen Senses'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Blightborn',
    description:
      'They gain a +2 racial bonus on saving throws against necromancy spells and spell-like abilities and spells and spell-like abilities with the curse descriptor, as well as on saving throws to remove temporary negative levels. This racial trait replaces elven immunities.',
    replaces: ['Elven Immunities'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Creepy',
    description:
      'Non-elf humanoids take a -1 penalty on saving throws against spells these elves cast that cause confusion or fear. In addition, elves with this trait gain a +2 racial bonus on Intimidate checks to demoralize. This racial trait replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Crossbow Training',
    description:
      'An elf with this trait can reload a light crossbow as a free action and a heavy crossbow as a move action, provided that she is proficient with the weapon. If she selects the Rapid Reload feat for a heavy crossbow, she can reload the weapon as a free action. This racial trait replaces weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Elves of Golarion',
  },
  {
    name: 'Darkvision',
    description:
      'Elves with this racial trait gain darkvision with a range of 60 feet, but also gain sensitivity to light and are dazzled in areas of bright light or within the radius of a daylight spell. This racial trait replaces low-light vision.',
    replaces: ['Low-Light Vision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Desert Runner',
    description:
      'Elves with this racial trait receive a +4 racial bonus on Constitution checks and Fortitude saves to avoid fatigue, exhaustion, or ill effects from running, forced marches, starvation, thirst, or hot or cold environments. This racial trait replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Devoted Companion',
    description:
      'Elves with this alternate racial trait gain a +1 racial bonus on attack rolls and caster level checks while adjacent to an ally who has been reduced to fewer than half her maximum hit points. This replaces elven magic and weapon familiarity.',
    replaces: ['Elven Magic', 'Weapon Familiarity'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Dimdweller',
    description:
      'Whenever characters with this trait benefit from concealment or full concealment due to darkness or dim light, they gain a +2 racial bonus on Intimidate, Perception, and Stealth checks. Elves can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Disinterested Observer',
    description:
      'These elves gain a +1 racial bonus on attack rolls and skill checks made as part of readied actions in combat. This racial trait replaces the elven magic and weapon familiarity traits.',
    replaces: ['Elven Magic', 'Weapon Familiarity'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Dragon Magic',
    description:
      'Elves with this racial trait who take a draconic bloodline as a class feature treat their Charisma scores as 2 points higher when determining the DC and uses per day of all bloodline abilities and bloodline spells. Additionally, elves with this trait add spells with the draconic descriptor to their class spell lists for any spellcasting classes in which they have levels. This racial trait replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Legacy of Dragons',
  },
  {
    name: 'Draconic Consular',
    description:
      'Elves with this racial trait gain a +1 bonus on Diplomacy and Knowledge (arcana) checks. This racial trait replaces keen senses.',
    replaces: ['Keen Senses'],
    source: 'Legacy of Dragons',
  },
  {
    name: 'Dreamspeaker',
    description:
      "Elves with this racial trait add +1 to the saving throw DCs of spells of the divination school and sleep effects they cast. In addition, elves with Charisma scores of 15 or higher may use dream once per day as a spell-like ability (caster level is equal to the elf's character level). This racial trait replaces elven immunities.",
    replaces: ['Elven Immunities'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Dusksight',
    description:
      'When making ranged attacks, characters with this trait can reroll the miss chance granted by cover to any target in dim light, and take the better of the two rolls. The miss chance for total concealment applies normally. Elves can take this trait in place of keen senses.',
    replaces: ['Keen Senses'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Eastern Weapon Mastery',
    description:
      'Elves with this racial trait are proficient with fighting fans and tonfa, and they treat katanas, kusarigamas, and wakizashis as martial weapons. This replaces weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Elemental Resistance',
    description:
      'Elves with this racial trait gain elemental resistance 5 to acid, cold, electricity, or fire. This choice is made at character creation, and once made it cannot be changed. This racial trait replaces elven immunities.',
    replaces: ['Elven Immunities'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Elven Arrogance',
    description:
      'Their racial bonus on saving throws against enchantments increases by 1 (to +3) against such effects from non-elf humanoids, but they begin play speaking only Elven, and if they have high Intelligence scores, they can select bonus languages from only 1 ancient language, Celestial, Draconic, and Sylvan.',
    replaces: ['Languages'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Envoy',
    description:
      "Elves with this racial trait and an Intelligence score of 11 or higher gain the following spell-like abilities once per day: comprehend languages, detect magic, detect poison, and read magic. The caster level for these effects is equal to the elf's level. This racial trait replaces elven magic.",
    replaces: ['Elven Magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Eternal Grudge',
    description:
      'Elves with this racial trait receive a +1 bonus on attack rolls against humanoids of the dwarf and orc subtypes because of special training against these hated foes. This racial trait replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fey Magic',
    description:
      "The character has a mystic connection to one terrain type, selected from the ranger's favored terrain list. The character selects three 0-level druid spells and one 1st-level druid spell. If the character has a Charisma score of 11 or higher, when in the selected terrain, she gains these spells as spell-like abilities that can be cast once per day. The caster level for these effects is equal to the user's character level. The DC for the spell-like abilities is equal to 10 + the spell's level + the user's Charisma modifier. These spells are treated as being from a fey source for the purposes of the druid's resist nature's lure class feature and similar abilities. This trait replaces keen senses.",
    replaces: ['Keen Senses'],
    source: 'Heroes of the Wild',
  },
  {
    name: 'Fey-Sighted',
    description:
      'You gain detect magic as a constant spell-like ability, with a caster level equal to your character level. This racial trait replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Legacy of the First World',
  },
  {
    name: 'Fey Thoughts',
    description:
      'Select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Escape Artist, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. The selected skills are always class skills for the character. This trait replaces racial weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Heroes of the Wild',
  },
  {
    name: 'Fleet-Footed',
    description:
      'Elves with this racial trait receive Run as a bonus feat and a +2 racial bonus on initiative checks. This racial trait replaces keen senses and weapon familiarity.',
    replaces: ['Keen Senses', 'Weapon Familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Frostmelding',
    description:
      'Elves with this alternate racial trait can use meld into stone as a spell-like ability once per day, with a caster level equal to their character level, except that they instead meld with snow and ice and the spell duration is 1 round per level. This replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Human-raised',
    description:
      "Although they lose the opportunity to train in traditional elven arts, these elves pick up a bit of their adoptive parents' skills. They gain Skill Focus as a bonus feat. This racial trait replaces elven magic and weapon familiarity.",
    replaces: ['Elven Magic', 'Weapon Familiarity'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Illustrious Urbanite',
    description:
      'They gain Spell Focus with conjuration, illusion, or transmutation spells as a bonus feat. When casting spells of this school, the elves can choose to have the spell leave undamaged any building or structure that would normally be affected. This racial trait replaces keen senses.',
    replaces: ['Keen Senses'],
    source: 'Heroes of the Streets',
  },
  {
    name: 'Keeper of Secrets',
    description:
      'The save DCs of enchantment spells they cast against humanoids increase by 1 and they receive a +2 racial bonus on Bluff and Linguistics checks to omit or cover up facts. This racial trait replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Light against Darkness',
    description:
      'Elves with this trait receive a +1 bonus on attack rolls against outsiders with the demon subtype. This racial trait replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Lightbringer',
    description:
      'Elves with this racial trait are immune to light-based blindness and dazzle effects, and are treated as one level higher when determining the effects of any light-based spell or effect they cast (including spell-like and supernatural abilities). Elves with Intelligence scores of 10 or higher may use light at will as a spell-like ability. This racial trait replaces the elven immunities and elven magic racial traits.',
    replaces: ['Elven Immunities', 'Elven Magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Long-Limbed',
    description:
      'Elves with this racial trait have a base move speed of 35 feet. This racial trait replaces weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Loremasters',
    description:
      'They gain a +2 racial bonus on Knowledge (history), Knowledge (local), and Spellcraft checks. This racial trait replaces elven magic and keen senses.',
    replaces: ['Elven Magic', 'Keen Senses'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Memories Beyond Death',
    description:
      'These elves gain a +2 racial bonus on saving throws against fear effects. They also choose two Knowledge skills and always treat those skills as class skills. If they take a class that grants either or both of those skills as class skills, they gain a +1 racial bonus on the overlapping skill or skills. This racial trait replaces elven immunities and elven magic.',
    replaces: ['Elven Immunities', 'Elven Magic'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Moonkissed',
    description:
      'Elves with this alternate racial trait gain a +1 racial bonus on saving throws. This replaces elven immunities and keen senses.',
    replaces: ['Elven Immunities', 'Keen Senses'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Natural Swimmer',
    description:
      'Elves with this trait gain a +2 racial bonus on Swim checks and can always take 10 on a Swim check, even if distracted or endangered when swimming. This racial trait replaces elven magic and keen senses.',
    replaces: ['Elven Magic', 'Keen Senses'],
    source: 'Elves of Golarion',
  },
  {
    name: 'Overwhelming Magic',
    description:
      'These elves gain Spell Focus as a bonus feat. This racial trait replaces elven magic and weapon familiarity.',
    replaces: ['Elven Magic', 'Weapon Familiarity'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Perfect',
    description:
      'Elves with this racial trait receive a +1 racial bonus on Bluff and Diplomacy checks against humanoids and a +2 racial bonus on saving throws against transmutation spells and spell-like effects. This racial trait replaces elven immunities.',
    replaces: ['Elven Immunities'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Poison Minion',
    description:
      "Any creature that hits such a character with a bite attack is immediately exposed to its poison. The save DC for this poison is equal to 10 + 1/2 the character's Hit Dice + the character's Constitution modifier. Mawbane Poison—ingested; save Fortitude as above; frequency 1/round for 4 rounds; effect 1d2 Constitution damage; cure 1 save. Elves can take this trait in place of elven magic and weapon familiarity.",
    replaces: ['Elven Magic', 'Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Retreat Magic',
    description:
      'These elves gain a +1 racial bonus to their caster levels for the purpose of determining the range and duration of all conjuration and illusion spells that they cast. This racial trait replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Sense Thoughts',
    description:
      'Elves with this alternate racial trait can use detect thoughts as a spell-like ability once per day, with a caster level equal to their character level. This replaces elven immunities and keen senses.',
    replaces: ['Elven Immunities', 'Keen Senses'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Shadowhunter',
    description:
      'Characters with this trait deal 50% weapon damage to incorporeal creatures when using non-magical weapons (including natural and unarmed attacks), as if using magic weapons. They also gain a +2 bonus on saving throws to remove negative levels, and recover physical ability damage from attacks by undead creatures at a rate of 2 points per ability score per day (rather than the normal 1 point per ability score per day). Elves can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Shadowplay',
    description:
      "Characters with this trait cast spells with the darkness, light, or shadow descriptor at +1 caster level. Elves can take this trait in place of elven magic, also gaining the fetchling's spell-like abilities racial trait.",
    replaces: ['Elven Magic'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Silent Hunter',
    description:
      'Elves with this racial trait reduce the penalty for using Stealth while moving by 5 and can make Stealth checks while running at a -20 penalty (this number includes the penalty reduction from this racial trait). This racial trait replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Slender',
    description:
      'Elves with this trait gain a +2 racial bonus on Escape Artist checks, on combat maneuver checks to escape a grapple, and to CMD against grapples. This racial trait replaces elven immunities.',
    replaces: ['Elven Immunities'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Spirit of the Waters',
    description:
      'They gain a +4 racial bonus on Swim checks, can always take 10 while swimming, and may choose Aquan as a bonus language. They are proficient with longspear, trident, and net. This racial trait replaces elven magic and weapon familiarity.',
    replaces: ['Elven Magic', 'Weapon Familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Tongue of the Sea',
    description:
      "Elves with this racial trait begin play speaking an ancient language and Elven. Elves with high Intelligence scores can choose from the following languages: Aboleth, Abyssal, Aklo, Aquan, Common, and Undercommon. This racial trait replaces an elf's normal languages.",
    replaces: ['Languages'],
    source: 'Elves of Golarion',
  },
  {
    name: 'Urbanite',
    description:
      'Elves with this racial trait gain a +2 racial bonus on Diplomacy checks made to gather information and Sense Motive checks made to get a hunch about a social situation. This racial trait replaces keen senses.',
    replaces: ['Keen Senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Vigilance',
    description:
      'You gain a +2 dodge bonus to AC against attacks by chaotic creatures. This trait replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Legacy of the First World',
  },
  {
    name: 'Voice in the Darkness',
    description:
      'As long as they are in dim light or darker conditions, characters with this trait gain a +2 bonus on Intimidate and Stealth checks. Elves can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Woodcraft',
    description:
      'Elves with this racial trait gain a +1 racial bonus on Knowledge (nature) and Survival checks. In forest terrain, these bonuses improve to +2. This racial trait replaces elven magic.',
    replaces: ['Elven Magic'],
    source: 'Advanced Race Guide',
  },
];

export const gnomeAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Academician',
    description:
      'Gnomes with this racial trait gain a +2 bonus on any single Knowledge skill. This racial trait replaces the obsessive racial trait.',
    replaces: ['Obsessive'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Architectural Ingenuity',
    description:
      'These gnomes gain a +2 racial bonus on Knowledge (engineering) checks and on Craft and Perception checks related to structures (including structural traps). This racial trait replaces keen senses and obsessive.',
    replaces: ['Keen Senses', 'Obsessive'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Artistic',
    description:
      'Gnomes with this racial trait gain a +2 racial bonus on a Perform skill of their choice. This replaces obsessive.',
    replaces: ['Obsessive'],
    source: 'Heroes for the High Road',
  },
  {
    name: 'Behind the Veil',
    description:
      'Characters with this trait gain a +2 bonus on Bluff and Sleight of Hand checks while benefiting from concealment or cover. Gnomes can take this trait in place of low-light vision.',
    replaces: ['Low-Light Vision'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Blended View',
    description:
      'Characters with this trait keep their low-light vision but also gain darkvision to a distance of 60 feet. Gnomes can take this trait in place of keen senses.',
    replaces: ['Keen Senses'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Bond to the Land',
    description:
      'These gnomes gain a +2 dodge bonus to AC when in a specific terrain type selected from the ranger list of favored terrains. This choice is made at character creation, and cannot be changed. This racial trait replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Charming Diviner',
    description:
      "Gnomes with this racial trait treat their caster level as 1 higher for the purposes of divination spells they cast. Additionally, if the gnome has a Wisdom or Charisma score of 11 or higher, she also gains the ability to cast charm animal as a spell-like ability three times per day. The caster level for this effect is equal to the gnome's level, and the DC for these spells is equal to 10 + the spell's level + the gnome's Charisma modifier. This replaces gnome magic.",
    replaces: ['Gnome Magic'],
    source: 'Heroes for the High Road',
  },
  {
    name: 'Darkvision',
    description:
      'Some gnome strains have lived in the underground depths for so long they have given up on light entirely and gained darkvision with a range of 60 feet. This racial trait replaces low-light vision and keen senses.',
    replaces: ['Low-Light Vision', 'Keen Senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Dimdweller',
    description:
      'Whenever characters with this trait benefit from concealment or full concealment due to darkness or dim light, they gain a +2 racial bonus on Intimidate, Perception, and Stealth checks. Gnomes can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Dirty Trickster',
    description:
      'All gnomes love pranks, but some specialize in those improvised during battle. These gnomes gain a +2 racial bonus on dirty trick combat maneuvers. They need not meet the Intelligence requirement to select Combat Expertise, Improved Dirty Trick, and any feat with Improved Dirty Trick as a prerequisite. This racial trait replaces defensive training, hatred, and keen senses.',
    replaces: ['Defensive Training', 'Hatred', 'Keen Senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Dusksight',
    description:
      'When making ranged attacks, characters with this trait can reroll the miss chance granted by cover to any target in dim light, and take the better of the two rolls. The miss chance for total concealment applies normally. Gnomes can take this trait in place of keen senses.',
    replaces: ['Keen Senses'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Eternal Hope',
    description:
      'Gnomes with this racial trait receive a +2 racial bonus on saving throws against fear and despair effects. Once per day, after rolling a 1 on a d20, the gnome may reroll and use the second result. This racial trait replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Explorer',
    description:
      'These gnomes gain a +2 racial bonus on Climb checks and checks for one Knowledge skill of their choice. This racial trait replaces hatred and obsessive.',
    replaces: ['Hatred', 'Obsessive'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fairy Catcher',
    description:
      'Some gnomes are especially sensitive to the presence of fey and receive a +2 racial bonus on Perception, Sense Motive, and Survival checks against fey, a +2 racial bonus on saving throws against the spells, spell-like abilities, and supernatural abilities of fey (this bonus stacks with the bonus granted by illusion resistance), and a +2 bonus on caster level checks to overcome the spell resistance of fey. The racial trait replaces defensive training, hatred, and keen senses.',
    replaces: ['Defensive Training', 'Hatred', 'Keen Senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Faerie Dragon Magic',
    description:
      "Some gnomes ally with capricious faerie dragons or share a supernatural kinship with these enigmatic creatures. Gnomes with this trait add 1 to the DCs of saves against the illusion spells they cast. Additionally, a gnome with a Charisma score of 11 or higher can use each of the following spell-like abilities once per day: ghost sound, grease, and silent image. The caster level for these effects is equal to the gnome's character level. The DC for these spells is equal to 10 + the spell's level + the gnome's Charisma modifier. This trait replaces gnome magic.",
    replaces: ['Gnome Magic'],
    source: 'Occult Adventures',
  },
  {
    name: 'Fell Magic',
    description:
      "Gnomes add +1 to the DC of any saving throws against necromancy spells that they cast. Gnomes with Wisdom scores of 11 or higher also gain the following spell-like abilities: 1/day—bleed, chill touch, detect poison, and touch of fatigue. The caster level for these effects is equal to the gnome's level. The DC for these spells is equal to 10 + the spell's level + the gnome's Wisdom modifier. This racial trait replaces gnome magic.",
    replaces: ['Gnome Magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fey Fortitude',
    description:
      'Gnomes with this racial trait are infused with a connection to life. They gain a +2 racial bonus on saves to resist death effects. This replaces weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Heroes for the High Road',
  },
  {
    name: 'Fey Magic',
    description:
      "Gnomes with this racial trait increase the DC of spells of the compulsion subschool they cast by 1. Additionally, if the gnome has a Charisma score of 11 or higher, she also gains the following spell-like abilities: 1/day—charm person, dancing lights, entangle, and prestidigitation. The caster level for these effects is equal to the gnome's level. The DC for these spells is equal to 10 + the spell's level + the gnome's Charisma modifier. This replaces gnome magic, illusion resistance, and obsessive.",
    replaces: ['Gnome Magic', 'Illusion Resistance', 'Obsessive'],
    source: 'Heroes for the High Road',
  },
  {
    name: 'Fey Thoughts',
    description:
      'Select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Escape Artist, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. The selected skills are always class skills for the character. This trait replaces racial weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fey-Tongued',
    description:
      'You gain haunted fey aspect and speak with plants instead of dancing lights and speak with animals as spell-like abilities from the gnome magic racial trait. This racial trait alters the gnome magic racial trait.',
    replaces: ['Gnome Magic'],
    source: 'Dirty Tactics Toolbox',
  },
  {
    name: 'Gift of Tongues',
    description:
      'Gnomes love languages and learning about those they meet. Gnomes with this racial trait gain a +1 bonus on Bluff and Diplomacy checks, and they learn one additional language every time they put a rank in the Linguistics skill. This racial trait replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Inquisitive',
    description:
      "Gnomes have a knack for being in places they shouldn't be. Gnomes with this trait gain a +2 racial bonus on Disable Device and Escape Artist checks. This racial trait replaces keen senses and obsessive.",
    replaces: ['Keen Senses', 'Obsessive'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Intrepid Settler',
    description:
      'These intrepid gnomes gain a +2 racial bonus on saving throws against fear effects and on Acrobatics, Climb, and Swim checks. This racial trait replaces illusion resistance, keen senses, and obsessive.',
    replaces: ['Illusion Resistance', 'Keen Senses', 'Obsessive'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Knack with Poison',
    description:
      'Some gnomes have an instinctive understanding of poisons and their uses. Gnomes gain a +2 racial bonus on Fortitude saves against poison and a +2 bonus on Craft (alchemy) checks to make poison. The bonus on Fortitude saving throws against poisons increases to +4 if the gnome accidentally poisons himself when applying or readying the substance. This racial trait replaces illusion resistance and obsessive.',
    replaces: ['Illusion Resistance', 'Obsessive'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Magical Linguist',
    description:
      "Gnomes study languages in both their mundane and supernatural manifestations. Gnomes with this racial trait add +1 to the DC of spells they cast with the language-dependent descriptor or those that create glyphs, symbols, or other magical writings. They gain a +2 racial bonus on saving throws against such spells. Gnomes with Charisma scores of 11 or higher also gain the following spell-like abilities: 1/day—arcane mark, comprehend languages, message, read magic. The caster level for these effects is equal to the gnome's level. This racial trait replaces gnome magic and illusion resistance.",
    replaces: ['Gnome Magic', 'Illusion Resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Master Tinker',
    description:
      'Gnomes experiment with all manner of mechanical devices. Gnomes with this racial trait gain a +1 bonus on Disable Device and Knowledge (engineering) checks. They are treated as proficient with any weapon they have personally crafted. This racial trait replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Nature Affinity',
    description:
      'Gnomes with this racial trait gain a +2 racial bonus on Fortitude saves against diseases and poisons inflicted by fey, plants, and forest-related hazards. This replaces keen senses.',
    replaces: ['Keen Senses'],
    source: 'Heroes for the High Road',
  },
  {
    name: 'Nosophobia',
    description:
      'You gain a +4 bonus on Fortitude saves against disease and poison, including magical diseases. This racial trait replaces obsessive.',
    replaces: ['Obsessive'],
    source: 'Dirty Tactics Toolbox',
  },
  {
    name: 'Poison Minion',
    description:
      "Drow sometimes augment their slaves and frontline warriors by making them toxic, causing their bodies to internally produce mawbane poison. The resulting poisonous creature makes a potent weapon in the effort to discourage neighboring monsters. Any creature that hits such a character with a bite attack is immediately exposed to its poison. The save DC for this poison is equal to 10 + 1/2 the character's Hit Dice + the character's Constitution modifier. Mawbane Poison—ingested; save Fortitude as above; frequency 1/round for 4 rounds; effect 1d2 Constitution damage; cure 1 save. Gnomes can take this trait in place of defensive training, gnome magic, and illusion resistance.",
    replaces: ['Defensive Training', 'Gnome Magic', 'Illusion Resistance'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Pyromaniac',
    description:
      "Gnomes with this racial trait are treated as one level higher when casting spells with the fire descriptor, using granted powers of the Fire domain, using the bloodline powers of the fire elemental bloodline or the revelations of the oracle's flame mystery, and determining the damage of alchemist bombs that deal fire damage (this ability does not give gnomes early access to level-based powers; it only affects the powers they could use without this ability). Gnomes with Charisma scores of 11 or higher also gain the following spell-like abilities: 1/day—dancing lights, flare, prestidigitation, produce flame. The caster level for these effects is equal to the gnome's level; the DCs are Charisma-based. This racial trait replaces gnome magic and illusion resistance.",
    replaces: ['Gnome Magic', 'Illusion Resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Shadow Dodger',
    description:
      'Gnomes with this trait gain a +4 dodge bonus to their AC against incorporeal creatures and partially real creatures and objects, such as those created by shadow conjuration, but only if successfully disbelieved. This racial trait replaces defensive training and illusion resistance.',
    replaces: ['Defensive Training', 'Illusion Resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Shadow Foe',
    description:
      'Gnomes with this trait receive a +1 bonus on attack rolls and to their AC against humanoids of the dark folk and wayang subtypes, and outsiders native to the Shadow Plane. This racial trait replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Shadowhunter',
    description:
      'Characters with this trait deal 50% weapon damage to incorporeal creatures when using non-magical weapons (including natural and unarmed attacks), as if using magic weapons. They also gain a +2 bonus on saving throws to remove negative levels, and recover physical ability damage from attacks by undead creatures at a rate of 2 points per ability score per day (rather than the normal 1 point per ability score per day). Gnomes can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Shadowplay',
    description:
      'Characters with this trait cast spells with the darkness, light, or shadow descriptor at +1 caster level. Gnomes can take this trait in place of gnome magic.',
    replaces: ['Gnome Magic'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Sound Mimicry',
    description:
      "Gnomes with this racial trait are skilled at imitating sounds and voices. Doing so requires a Bluff check opposed by the listener's Sense Motive check, and the gnome gains a +4 racial bonus on Bluff checks to mimic sounds (including accents and speech patterns) she has listened to for at least 10 minutes. Listeners unfamiliar with a particular sound take a -4 penalty on the Sense Motive check. This replaces weapon familiarity.",
    replaces: ['Weapon Familiarity'],
    source: 'Heroes for the High Road',
  },
  {
    name: 'Stalker',
    description:
      'Some gnomes become obsessed with specific individuals. Once per day, such a gnome can observe a creature for 10 minutes. After that, she gains a +1 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against that creature. She also gains a +1 bonus on weapon attack and damage rolls against that creature. These bonuses last for 1 day. This racial trait replaces defensive training, hatred, and obsessive.',
    replaces: ['Defensive Training', 'Hatred', 'Obsessive'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Student of the City',
    description:
      'Gnomes of the city learn all they can from newcomers and tend to make contacts in all quarters. They gain a +2 racial bonus on Knowledge (local) checks, and can use that skill to gather information in place of Diplomacy. This racial trait replaces obsessive.',
    replaces: ['Obsessive'],
    source: 'Heroes of the Streets',
  },
  {
    name: 'Utilitarian Magic',
    description:
      "Some gnomes develop practical magic to assist them with their obsessive projects. These gnomes add 1 to the DC of any saving throws against transmutation spells they cast. If their Intelligence score is 11 or higher, they also gain the following spell-like abilities 1/day—mage hand, open/close, prestidigitation, and unseen servant. The DC for these spells is equal to 10 + the spell's level + the gnome's Intelligence modifier. This racial trait replaces gnome magic.",
    replaces: ['Gnome Magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Vivacious',
    description:
      "Some gnomes recover 50% more hit points (minimum 1) whenever they recover hit points from rest. Whenever they are healed of hit point damage by a spell, they heal an additional amount equal to 1/2 the spell's caster level (minimum 0). The extra healing does not apply to spells that grant fast healing or similar effects. This racial trait replaces gnome magic and keen senses.",
    replaces: ['Gnome Magic', 'Keen Senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Warden of Nature',
    description:
      'Gnomes must often protect their homes against unnatural or pestilential infestations. Gnomes with this racial trait gain a +2 dodge bonus to AC against aberrations, oozes, and vermin, and a +1 bonus on attack rolls against them because of their special training. This racial trait replaces defensive training and hatred.',
    replaces: ['Defensive Training', 'Hatred'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Wright',
    description:
      'Some gnomes prefer to use their natural talents with mechanisms to drive machines. These gnomes gain a +2 racial bonus on driving checks and on Craft checks to build or repair vehicles. This racial trait replaces hatred and obsessive.',
    replaces: ['Hatred', 'Obsessive'],
    source: 'Advanced Race Guide',
  },
];

export const halfElfAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Alert for Betrayal',
    description:
      'You gain a +2 racial bonus on saves against illusion spells and effects. Perception and Sense Motive are class skills for you. This racial trait replaces adaptability.',
    replaces: ['Adaptability'],
    source: 'Legacy of the First World',
  },
  {
    name: 'Ancestral Arms',
    description:
      'Half-elves with this racial trait receive Exotic Weapon Proficiency or Martial Weapon Proficiency with one weapon as a bonus feat at 1st level. This racial trait replaces the adaptability racial trait.',
    replaces: ['Adaptability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Arcane Training',
    description:
      'Half-elves with this racial trait have only one favored class, and it must be an arcane spellcasting class. They can use spell trigger and spell completion items for their favored class as if one level higher (or as a 1st-level character if they have no levels in that class). This racial trait replaces the multitalented racial trait.',
    replaces: ['Multitalented'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Behind the Veil',
    description:
      'Characters with this trait gain a +2 bonus on Bluff and Sleight of Hand checks while benefiting from concealment or cover. Half-elves can take this trait in place of low-light vision.',
    replaces: ['Low-Light Vision'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Blended View',
    description:
      'Prerequisite(s): low-light vision. Half-drow whose non-drow parent had low-light vision might be blessed with a legacy of versatile senses. Characters with this trait keep their low-light vision but also gain darkvision to a distance of 60 feet. Half-elves can take this trait in place of multitalented.',
    replaces: ['Multitalented'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Child of the Sea',
    description:
      'Half-elves from a coastal region with this racial trait gain a +4 racial bonus on Swim checks as well as on Profession (sailor) and Wisdom checks to pilot a sea vessel. They also have an innate sense of direction and can never get lost at sea. This racial trait replaces the low-light vision and keen senses racial traits.',
    replaces: ['Low-Light Vision', 'Keen Senses'],
    source: 'Blood of the Beast',
  },
  {
    name: 'Cold-Honed',
    description:
      'Half-elves from arctic regions with this racial trait can move through natural snow and ice at their normal speed and gain a +4 racial bonus on Fortitude saves to avoid nonlethal damage from cold environments. This racial trait replaces the elven immunities racial trait.',
    replaces: ['Elven Immunities'],
    source: 'Blood of the Beast',
  },
  {
    name: 'Dimdweller',
    description:
      'Whenever characters with this trait benefit from concealment or full concealment due to darkness or dim light, they gain a +2 racial bonus on Intimidate, Perception, and Stealth checks. Half-elves can take this trait in place of adaptability.',
    replaces: ['Adaptability'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Disregarded',
    description:
      "Half-elves with this trait practice magical techniques to conceal their fey features from casual scrutiny. These half-elves treat their caster level as 1 higher when casting illusion spells. Half-elves with a Charisma score of 11 or higher also gain the following spell-like abilities 1/day—guidance, innocence, lullaby, and mage hand. The caster level for these effects is equal to the half-elf's level. The DC for these spells is equal to 10 + the spell's level + the half-elf's Charisma modifier. This racial trait replaces keen senses.",
    replaces: ['Keen Senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Dragon Soul',
    description:
      "Some half-elves have forsaken a part of their lineage by embracing a more distant connection to dragons. Half-elves with this trait choose to count as either elves or humans for any effect regarding race. Additionally, half-elves with this trait also count as dragons for the purposes of effects targeting creatures by type (such as a ranger's favored enemy and bane weapons, but not for prerequisites), and gain a +2 racial bonus on all saving throws against fear, sleep and paralysis effects. This trait replaces adaptability, elf blood, and elven immunities.",
    replaces: ['Adaptability', 'Elf Blood', 'Elven Immunities'],
    source: 'Legacy of the First World',
  },
  {
    name: 'Dreamer',
    description:
      'Half-elves with this trait gain a +2 racial saving throw bonus against illusion spells and effects. In addition, when entering a dreamscape in a lucid body, a half-elf with this racial trait treats her Charisma score as 2 points higher for the purpose of effects related to the Dimension of Dreams. This racial trait replaces elven immunities.',
    replaces: ['Elven Immunities'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Drow-Blooded',
    description:
      'Some half-elves born of drow parents exhibit more drow traits than others—particularly many of the physical features of the drow—and have darkvision 60 feet and light blindness. This racial trait replaces the low-light vision racial trait.',
    replaces: ['Low-Light Vision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Drow Heritage',
    description:
      'Half-elves with this trait count as drow for the purposes of any effect related to race, including prerequisites. This racial trait replaces the ability to choose any language as a bonus language, instead limiting the character to the bonus languages offered to drow.',
    replaces: ['Languages'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Drow Magic',
    description:
      "A few half-elves with drow ancestry exhibit the innate magic of that race. Half-elves with this trait have drow blood somewhere in their background, and can cast dancing lights, darkness, and faerie fire each once per day, using the half-elf's character level as the caster level for these spell-like abilities. This racial trait replaces the adaptability and multitalented racial traits.",
    replaces: ['Adaptability', 'Multitalented'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Drow-Trained',
    description:
      'Characters with this trait are proficient with the hand crossbow, rapier, and shortsword. This racial trait replaces the adaptability racial trait.',
    replaces: ['Adaptability'],
    source: "Dungeoneer's Handbook",
  },
  {
    name: 'Dual Minded',
    description:
      'The mixed ancestry of some half-elves makes them resistant to mental attacks. Half-elves with this racial trait gain a +2 bonus on all Will saving throws. This racial trait replaces the adaptability racial trait.',
    replaces: ['Adaptability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Dusksight',
    description:
      'When making ranged attacks, characters with this trait can reroll the miss chance granted by cover to any target in dim light, and take the better of the two rolls. The miss chance for total concealment applies normally. Half-elves can take this trait in place of keen senses.',
    replaces: ['Keen Senses'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Elf-Scorned',
    description:
      'Many half-elves, especially half-drow, are rejected by their elven parents and feel nothing but hatred and fear toward their inhuman ancestors. They gain a +1 racial bonus on attack rolls and a +2 dodge bonus to AC against elves. This racial trait replaces elven immunities and multitalented.',
    replaces: ['Elven Immunities', 'Multitalented'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Eye for Opportunity',
    description:
      'Constantly facing the rough edges of two societies, some half-elves develop a knack for finding overlooked opportunities. They gain a +1 racial bonus on attacks of opportunity. This racial trait replaces adaptability and keen senses.',
    replaces: ['Adaptability', 'Keen Senses'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Fey Magic',
    description:
      "The character has a mystic connection to one terrain type, selected from the ranger's favored terrain list. The character selects three 0-level druid spells and one 1st-level druid spell. If the character has a Charisma score of 11 or higher, when in the selected terrain, she gains these spells as spell-like abilities that can be cast once per day. The caster level for these effects is equal to the user's character level. The DC for the spell-like abilities is equal to 10 + the spell's level + the user's Charisma modifier. These spells are treated as being from a fey source for the purposes of the druid's resist nature's lure class feature and similar abilities. This trait replaces keen senses.",
    replaces: ['Keen Senses'],
    source: 'Heroes of the Wild',
  },
  {
    name: 'Fey Thoughts',
    description:
      'Select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Escape Artist, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. The selected skills are always class skills for the character. This trait replaces multitalented.',
    replaces: ['Multitalented'],
    source: 'Heroes of the Wild',
  },
  {
    name: 'Inspire Imitation',
    description:
      'Whenever a half-elf succeeds at a skill check, she can inspire imitators as a swift action. Any ally within 30 feet who witnesses the successful check and attempts the same check within the next minute gains a +2 bonus on the check as if from the aid another action. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Heroes of the Streets',
  },
  {
    name: 'Integrated',
    description:
      'Many half-elves are skilled in the art of ingratiating themselves into a community as if they were natives. Half-elves with this racial trait gain a +1 bonus on Bluff, Disguise, and Knowledge (local) checks. This racial trait replaces the adaptability racial trait.',
    replaces: ['Adaptability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Jungle Affinity',
    description:
      'Half-elves from a jungle with this racial trait gain a +4 racial bonus on Stealth checks while within jungle terrain, and can move through natural difficult terrain at their normal speed while within jungle. This racial trait replaces the multi-talented racial trait.',
    replaces: ['Multitalented'],
    source: 'Blood of the Beast',
  },
  {
    name: 'Kindred-Raised',
    description:
      "While most think of people with one human and one elven parent when they think of half-elves, some half-elves are raised by two half-elven parents. Such half-elves feel less like outsiders, making them more confident, but less adaptable without the exposure to a human parent. They gain a +2 bonus to Charisma and one other ability score of their choice. This racial trait replaces the half-elf's usual racial ability score modifiers, as well as adaptability, elven immunities, keen senses, and multitalented.",
    replaces: ['Adaptability', 'Elven Immunities', 'Keen Senses', 'Multitalented'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Mismatched',
    description:
      'Rather than having bodily and facial features that are a blend of elven and human, or tending towards one parent or the other, a rare few half-elves have a strange combination of features. They have noticeable mismatched eyes and ears, as well as uneven limbs. Half-elves with this trait take a -2 penalty on Reflex saves but receive a +4 racial bonus on initiative checks. This racial trait replaces keen senses and low-light vision.',
    replaces: ['Keen Senses', 'Low-Light Vision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Mordant Envoy',
    description:
      "Half-elves from mountainous regions add +1 to the caster level of any transmutation spells they cast. Spireborn with a Charisma score of 11 or higher also gain the following spell-like abilities: 1/day—comprehend languages, detect secret doors, erase, read magic. The caster level for these effects is equal to the user's character level. This racial trait replaces the adaptability racial trait.",
    replaces: ['Adaptability'],
    source: 'Blood of the Beast',
  },
  {
    name: 'Multidisciplined',
    description:
      'Born to two races, half-elves have a knack for combining different magical traditions. If a half-elf with this racial trait has spellcasting abilities from at least two different classes, the effects of spells she casts from all her classes are calculated as though her caster level were 1 level higher, to a maximum of her character level. This racial trait replaces multitalented.',
    replaces: ['Multitalented'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Poison Minion',
    description:
      "Drow sometimes augment their slaves and frontline warriors by making them toxic, causing their bodies to internally produce mawbane poison (see below). The resulting poisonous creature makes a potent weapon in the effort to discourage neighboring monsters. Any creature that hits such a character with a bite attack is immediately exposed to its poison. The save DC for this poison is equal to 10 + 1/2 the character's Hit Dice + the character's Constitution modifier. Mawbane Poison—ingested; save Fortitude as above; frequency 1/round for 4 rounds; effect 1d2 Constitution damage; cure 1 save. Half-elves can take this trait in place of elven immunities and keen senses.",
    replaces: ['Elven Immunities', 'Keen Senses'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Reflexive Improvisation',
    description:
      'Half-elves raised among elves often stumble unprepared into each new stage of life because their elven relatives are unaccustomed to the speed of their maturation. They gain a +2 racial bonus on untrained skill checks. This racial trait replaces adaptability and multitalented.',
    replaces: ['Adaptability', 'Multitalented'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Round Ears',
    description:
      "Sometimes half-elves are born with no obvious elven features. Their parents may even be humans with only faint traces of elven blood. They gain the human's skilled racial trait. In addition, they receive a +4 racial bonus on Disguise checks to appear human. This racial trait replaces adaptability, keen senses, and low-light vision.",
    replaces: ['Adaptability', 'Keen Senses', 'Low-Light Vision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Sea Legs',
    description:
      'Many half-elves find their way onto the water early in their youth, whether they live with trader families, work as smugglers, or plunder alongside pirates. These half-elves receive a +2 racial bonus on Swim checks, as well as a +4 racial bonus on Acrobatics checks to move on narrow or slippery surfaces, and on Climb checks on docks and ships. This racial trait replaces adaptability.',
    replaces: ['Adaptability'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Shadowhunter',
    description:
      'Characters with this trait deal 50% weapon damage to incorporeal creatures when using non-magical weapons (including natural and unarmed attacks), as if using magic weapons. They also gain a +2 bonus on saving throws to remove negative levels, and recover physical ability damage from attacks by undead creatures at a rate of 2 points per ability score per day (rather than the normal 1 point per ability score per day). Half-elves can take this trait in place of elven immunities.',
    replaces: ['Elven Immunities'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Sure Step',
    description:
      'Adventurers can spend their whole careers in the alleys and sewers of large cities or the tunnels of the Underworld. Characters with this trait suffer no movement penalties when blinded or moving in darkness. Half-elves can take this trait in place of keen senses.',
    replaces: ['Keen Senses'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Sociable',
    description:
      "Half-elves are skilled at charming others and recovering from faux pas. If half-elves with this racial trait attempt to change a creature's attitude with a Diplomacy check and fail by 5 or more, they can try to influence the creature a second time even if 24 hours have not passed. This racial trait replaces the adaptability racial trait.",
    replaces: ['Adaptability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Sophisticate',
    description:
      'Half-elves who strive to embody the culture in which they live develop a keen instinct for the ebb and flow of fashions, fads, and political trends. They gain a +2 racial bonus on Knowledge (history) and Knowledge (local) checks and can use those skills untrained even for checks with a DC of 10 or more. This racial trait replaces elven immunities.',
    replaces: ['Elven Immunities'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Starchild',
    description:
      'Some half-elves descend from elves who are not from this world, but rather visitors from another world, plane, or dimension. Half-elves with this trait gain Psychic Sensitivity as a bonus feat at 1st level. This racial trait replaces adaptability.',
    replaces: ['Adaptability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Thinblood Resilience',
    description:
      'Half-elves from the underdark with this racial trait are accustomed to torture at the hands of their drow forebears, and gain a +2 racial bonus on Fortitude saves against poison and disease, including magical diseases. Darkborn also gain the poison use ability and never risk accidentally poisoning themselves. This racial trait replaces the elven immunities racial trait.',
    replaces: ['Elven Immunities'],
    source: 'Blood of the Beast',
  },
  {
    name: 'Underworld Guide',
    description:
      "Those who brave the lightless tunnels below the world's surface learn to identify the dangerous phenomena that characterize the Underworld. Characters with this trait gain a +2 bonus on initiative checks, and on saves against traps and hazards when underground (from a lifetime of dodging accursed pools, cave-ins, and green slime). Half-elves can take this trait in place of keen senses.",
    replaces: ['Keen Senses'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Voice in the Darkness',
    description:
      'Prerequisite(s): Charisma 13+. Characters who practice coercion and intimidation in the Underworld or on the Shadow Plane learn to do so in dim light or no light at all. As long as they are in dim light or darker conditions, characters with this trait gain a +2 bonus on Intimidate and Stealth checks. Half-elves can take this trait in place of adaptability.',
    replaces: ['Adaptability'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Wary',
    description:
      "Many half-elves have spent their long lives moving from place to place, often driven out by the hostility of others. Such experiences have made them wary of others' motivations. Half-elves with this trait gain a +1 racial bonus on Sense Motive and Bluff checks. This racial trait replaces the keen senses racial trait.",
    replaces: ['Keen Senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Water Child',
    description:
      'Some half-elves are born of elves adapted to life on or near the water. These half-elves gain a +4 racial bonus on Swim checks, can always take 10 while swimming, and may choose Aquan as a bonus language. This racial trait replaces the adaptability and multitalented racial traits.',
    replaces: ['Adaptability', 'Multitalented'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Weapon Familiarity',
    description:
      "Half-elves raised among elves often feel pitied and mistrusted by their longer-lived kin, and yet they receive training in elf weapons. They gain the elf's weapon familiarity trait. This racial trait replaces adaptability.",
    replaces: ['Adaptability'],
    source: 'Inner Sea Races',
  },
];

export const halflingAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Blessed',
    description:
      'Halflings with this trait receive a +2 racial bonus on saving throws against curse effects and hexes. This bonus stacks with the bonus granted by halfling luck. This racial trait replaces fearless.',
    replaces: ['Fearless'],
    source: 'Horror Adventures',
  },
  {
    name: 'Evasive Nomad',
    description:
      "Song'o halflings rarely grow up in one place, as they are quick to move to a new home whenever they are discovered. Halflings with this racial trait gain a +2 racial bonus on Reflex saves, but they take a -2 penalty on saving throws against fear effects. This replaces fearless.",
    replaces: ['Fearless'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Fey Thoughts',
    description:
      'The character sees the world more like a native of the First World. Select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Escape Artist, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. The selected skills are always class skills for the character. A halfling can take it in place of fearless.',
    replaces: ['Fearless'],
    source: 'Heroes of the Wild',
  },
  {
    name: 'Irrepressible',
    description:
      'Halflings with this trait receive a +2 racial bonus on saving throws against dominate and possession effects. This bonus stacks with the bonus granted by halfling luck. This racial trait replaces fearless.',
    replaces: ['Fearless'],
    source: 'Horror Adventures',
  },
  {
    name: 'Small Quarter Ally',
    description:
      'Segadan halflings most often live in the Small Quarter alongside other people of similar stature, such as gnomes. A halfling with this racial trait grants herself and all allies of the same size category within 60 feet a +1 luck bonus on saving throws against fear effects. This replaces fearless.',
    replaces: ['Fearless'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Craven',
    description:
      'While most halflings are fearless, some are skittish, making them particularly alert. Halflings with this racial trait gain a +1 bonus on initiative checks and a +1 bonus on attack rolls when flanking. They take a -2 penalty on saves against fear effects and gain no benefit from morale bonuses on such saves. When affected by a fear effect, their base speed increases by 10 feet and they gain a +1 dodge bonus to Armor Class. This racial trait replaces fearless and halfling luck.',
    replaces: ['Fearless', 'Halfling Luck'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Wanderlust',
    description:
      'Halflings love travel and maps. Halflings with this racial trait receive a +2 bonus on Knowledge (geography) and Survival checks. When casting spells or using abilities that provide or enhance movement, halflings treat their caster level as +1 higher than normal. This racial trait replaces fearless and halfling luck.',
    replaces: ['Fearless', 'Halfling Luck'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fey-Quickened',
    description:
      'Some fey-blooded halflings are faster than their kin, yet retain a sharp eye for danger. These halflings gain Run as a bonus feat and a +2 racial bonus on initiative checks. This racial trait replaces fearless and keen senses.',
    replaces: ['Fearless', 'Keen Senses'],
    source: 'Legacy of the First World',
  },
  {
    name: 'Practicality',
    description:
      'Halflings value hard work and common sense. Halflings with this racial trait gain a +2 bonus on any one Craft or Profession skill, as well as on Sense Motive checks and saves against illusions. This racial trait replaces fearless and sure-footed.',
    replaces: ['Fearless', 'Sure-Footed'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Joyous Companion',
    description:
      "Halflings enjoy the companionship of copper dragons and other lighthearted representatives of dragonkind and learn to share the joyousness of that bond with others. When halflings with this trait cast spells or use spell-like abilities of the abjuration school or with the emotion descriptor, they can confer a +1 morale bonus on saves versus fear on all adjacent allies for a number of rounds equal to the spell's level. This trait replaces fearless and weapon familiarity.",
    replaces: ['Fearless', 'Weapon Familiarity'],
    source: 'Legacy of Dragons',
  },
  {
    name: 'Skulker',
    description:
      'Oppressed halflings train from a young age to take advantage of times when their oppressors ignore them. Such halflings gain a +1 racial bonus on attacks against foes who are denied their Dexterity bonus to AC. This racial trait replaces fearless and weapon familiarity.',
    replaces: ['Fearless', 'Weapon Familiarity'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Underfoot Dodger',
    description:
      'City-dwelling halflings do not treat crowd squares as difficult terrain and they gain a +5 bonus on Acrobatics checks to move through the spaces of larger foes. This racial trait replaces fearless and weapon familiarity.',
    replaces: ['Fearless', 'Weapon Familiarity'],
    source: 'Heroes of the Streets',
  },
  {
    name: 'Adaptable Luck',
    description:
      'Some halflings have greater control over their innate luck. This ability gives them more options for how they can apply their good fortune from day to day, but also narrows its scope. Three times per day, a halfling can gain a +2 luck bonus on an ability check, attack roll, saving throw, or skill check. If halflings choose to use the ability before they make the roll or check, they gain the full +2 bonus; if they choose to do so afterward, they only gain a +1 bonus. Using adaptive luck in this way is not an action. This racial trait replaces halfling luck.',
    replaces: ['Halfling Luck'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Halfling Jinx',
    description:
      'You lose the halfling luck racial trait (and its +1 racial bonus on saving throws) and instead gain the ability to curse another creature with bad luck at will as a standard action. This curse has a range of 30 feet, and you must be able to see the target and have line of effect to it. The target gets a Will saving throw to resist this jinx (DC = 10 + 1/2 your level + your Charisma modifier). If your target makes this saving throw, it is immune to your jinx ability for 24 hours. A jinxed creature takes a -1 penalty on all saving throws. This jinx lasts for 24 hours or until you attempt to use your jinx again. A jinx is a supernatural ability, is not mind-affecting, does not allow spell resistance, and can affect any kind of creature not immune to luck effects.',
    replaces: ['Halfling Luck'],
    source: 'Halflings of Golarion',
  },
  {
    name: 'Luckbringer',
    description:
      'Halflings with this trait learn to share their luck with others much in the way a gold dragon can imbue objects with good fortune. Once per day as a standard action, a halfling with this trait can confer good luck on a single nonmagical token (such as a button or a ring). Any creature carrying this token gains a +1 luck bonus on Will saves. This effect lasts for 1 hour. This trait replaces lucky.',
    replaces: ['Lucky'],
    source: 'Legacy of Dragons',
  },
  {
    name: 'Underfoot',
    description:
      'Halflings must train hard to effectively fight bigger opponents. Halflings with this racial trait gain a +1 dodge bonus to AC against foes larger than themselves and a +1 bonus on Reflex saving throws to avoid trample attacks. This racial trait replaces halfling luck.',
    replaces: ['Halfling Luck'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Unlucky Halfling',
    description:
      'These halflings take a -1 penalty on saving throws but also gain a +1 racial bonus to the caster level and save DC of all curse spells and spell-like abilities. In addition, such halflings can use ill omen as a spell-like ability once per day. This racial trait replaces halfling luck.',
    replaces: ['Halfling Luck'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Unfettered',
    description:
      'Former slips liberated from slavery train to ensure they will never be slaves again. They gain a +4 racial bonus on Escape Artist checks and a +2 racial bonus on saving throws against effects that cause the entangled condition, to CMD against grapples, and on combat maneuver checks to escape a grapple. This racial trait replaces halfling luck and keen senses.',
    replaces: ['Halfling Luck', 'Keen Senses'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Caretaker',
    description:
      "Humans often entrust halfling families with the care of children and animals, a task that has helped them develop keen insight. Such halflings gain a +2 racial bonus on Sense Motive checks. In addition, when they acquire an animal companion, bonded mount, cohort, or familiar, that creature gains a +2 bonus to one ability score of the character's choice. This racial trait replaces halfling luck, sure-footed, and weapon familiarity.",
    replaces: ['Halfling Luck', 'Sure-Footed', 'Weapon Familiarity'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Acquisitive',
    description:
      'Halflings with this trait receive a +2 racial bonus on Appraise checks. This bonus increases to +4 when used to determine the most valuable item visible in a treasure hoard. This racial trait replaces keen senses.',
    replaces: ['Keen Senses'],
    source: 'Horror Adventures',
  },
  {
    name: 'Attentive',
    description:
      'Halflings with this trait receive a +2 racial bonus on Sense Motive checks. This bonus increases to +4 to notice when someone is enchanted or possessed. This racial trait replaces keen senses.',
    replaces: ['Keen Senses'],
    source: 'Horror Adventures',
  },
  {
    name: 'Danger Detection',
    description:
      "Song'o halflings have learned to hone in on any indication of danger. Halflings with this racial trait gain a +4 racial bonus on Perception checks to notice a creature using Stealth, as well as Perception checks to notice a weapon being drawn or a hidden trap (or similar signs of danger, subject to the GM's discretion). This replaces keen senses.",
    replaces: ['Keen Senses'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Dusksight',
    description:
      "Characters who operate below canopies or fight in dimly lit caves and shadowy planes of existence learn to use their low-light vision to deduce a foe's position from the flickers of shadows around a target. When making ranged attacks, characters with this trait can reroll the miss chance granted by cover to any target in dim light, and take the better of the two rolls. The miss chance for total concealment applies normally. Elves, gnomes, half-elves, and halflings can take this trait in place of keen senses.",
    replaces: ['Keen Senses'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Fey Magic',
    description:
      "The character has a mystic connection to one terrain type, selected from the ranger's favored terrain list. The character selects three 0-level druid spells and one 1st-level druid spell. If the character has a Charisma score of 11 or higher, when in the selected terrain, she gains these spells as spell-like abilities that can be cast once per day. The caster level for these effects is equal to the user's character level. The DC for the spell-like abilities is equal to 10 + the spell's level + the user's Charisma modifier. These spells are treated as being from a fey source for the purposes of the druid's resist nature's lure class feature and similar abilities. An elf, half-elf, or halfling can take this trait in place of keen senses.",
    replaces: ['Keen Senses'],
    source: 'Heroes of the Wild',
  },
  {
    name: 'Low Blow',
    description:
      'Some halflings train extensively in the art of attacking larger creatures. Halflings with this racial trait gain a +1 bonus on critical confirmation rolls against opponents larger than themselves. This racial trait replaces keen senses.',
    replaces: ['Keen Senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Polyglot',
    description:
      'Some halflings, especially those who spend a lot of time traveling, develop a talent for learning new languages. These halflings gain a +2 racial bonus on Linguistics checks, and it is always a class skill for them. Halflings with this racial trait also begin play with the ability to speak Common, Halfling, and any one other language of their choice (except for secret languages, such as Druidic) in addition to bonus languages due to high Intelligence. They still gain the normal list of halfling bonus languages. This racial trait replaces keen senses and alters the halfling language racial trait.',
    replaces: ['Keen Senses', 'Languages'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Creepy Doll',
    description:
      "Glassy eyes and porcelain skin make some halflings look more like dolls than living creatures. If they cease moving and pretend to be a doll while they aren't being observed, they can use the Stealth skill without cover or concealment. A successful Stealth check still allows other creatures to notice the halfling; they just believe the halfling is a doll, similar to the freeze universal monster ability (without being able to take 20). In addition, they take no size penalty on Intimidate checks against larger humanoids. The racial trait replaces keen senses and sure-footed.",
    replaces: ['Keen Senses', 'Sure-Footed'],
    source: 'Horror Adventures',
  },
  {
    name: 'Human Shadow',
    description:
      'Halflings seem to pop up wherever humans are found, in part because they actively support and move with human explorers, settlers, and travelers without drawing attention to themselves. These halflings can use Stealth to hide behind creatures at least one size category larger than themselves, without any other source of concealment or cover. As long as the halflings are within 30 feet of a human, they gain a +2 racial bonus on Sleight of Hand checks and Stealth checks. This racial trait replaces keen senses and sure-footed.',
    replaces: ['Keen Senses', 'Sure-Footed'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Ingratiating',
    description:
      'Halflings often survive at the whims of larger, more aggressive races. Because of this, they go out of their way to make themselves more useful, or at least entertaining, to larger folk. Halflings with this racial trait gain a +2 bonus on skill checks for a single Perform skill of their choice, and Perform is always a class skill for them. They also gain a +2 bonus on Craft and Profession checks. This racial trait replaces keen senses and sure-footed.',
    replaces: ['Keen Senses', 'Sure-Footed'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fleet of Foot',
    description:
      'Some halflings are quicker than their kin but less cautious. Halflings with this racial trait move at normal speed and have a base speed of 30 feet. This racial trait replaces slow speed and sure-footed.',
    replaces: ['Slow Speed', 'Sure-Footed'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Driven Worker',
    description:
      'Many halfling families have developed techniques to accomplish work faster and more efficiently, whether to contribute to the community or to please overbearing masters. These halflings gain a +4 racial bonus on checks with one Craft, Perform, or Profession skill. This racial trait replaces sure-footed.',
    replaces: ['Sure-Footed'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Festive',
    description:
      "Halflings who hail from Segada partake in the City of Keys' many festivals to foster a strong sense of community and bring fortune to their peers. Once per day, a halfling with this racial trait can grant an ally within 60 feet a +2 luck bonus on one skill check as a free action; this bonus can be applied after the ally's check result is determined. This replaces sure-footed.",
    replaces: ['Sure-Footed'],
    source: 'Heroes from the Fringe',
  },
  {
    name: 'Outrider',
    description:
      'Some halflings specialize in mounted combat. Halflings with this racial trait gain a +2 bonus on Handle Animal and Ride checks. This racial trait replaces sure-footed.',
    replaces: ['Sure-Footed'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Secretive Survivor',
    description:
      'Halflings from poor and desperate communities, most often in big cities, must take what they need without getting caught in order to survive. They gain a +2 racial bonus on Bluff and Stealth checks. This racial trait replaces sure-footed.',
    replaces: ['Sure-Footed'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Shiftless',
    description:
      "Halflings have a reputation for larceny and guile—and sometimes it's well deserved. Halflings with this racial trait gain a +2 racial bonus on Bluff and Sleight of Hand checks, and Sleight of Hand is always a class skill for them. This racial trait replaces sure-footed.",
    replaces: ['Sure-Footed'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Surreptitious',
    description:
      'Halflings skilled in eavesdropping on suspicious visitors are highly prized in human courts. These halflings are skilled at maintaining innocuous disguises and vanishing before being confronted. Halflings with this trait gain a +2 racial bonus on Disguise and Stealth checks. This racial trait replaces sure-footed.',
    replaces: ['Sure-Footed'],
    source: 'Heroes of the High Court',
  },
  {
    name: 'Swift as Shadows',
    description:
      'Halflings possess incredible stealth even while moving through obstructed areas. Halflings with this racial trait reduce the penalty for using Stealth while moving by 5, and reduce the Stealth check penalty for sniping by 10. This racial trait replaces sure-footed.',
    replaces: ['Sure-Footed'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Warslinger',
    description:
      'Halflings are experts at the use of the sling. Halflings with this racial trait can reload a sling as a free action. Reloading a sling still requires two hands and provokes attacks of opportunity. This racial trait replaces sure-footed.',
    replaces: ['Sure-Footed'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Deep Jungle',
    description:
      "Some reclusive halfling tribes flourish in tropical locales. These halflings begin play speaking only Halfling (in addition to any additional languages gained from having a high Intelligence score), rather than Common and Halfling. They gain a +2 racial bonus on Survival checks and are proficient with blowguns. In addition, they have the poison use ability (they never risk poisoning themselves accidentally). This racial trait alters halflings' languages and replaces sure-footed and weapon familiarity.",
    replaces: ['Languages', 'Sure-Footed', 'Weapon Familiarity'],
    source: 'Horror Adventures',
  },
  {
    name: 'Resourceful',
    description:
      'Halflings with this trait do not take any penalties for using improvised weapons. This trait counts as the Catch Off Guard or Throw Anything feats for the purpose of qualifying for feats. This racial talent replaces sure-footed and weapon familiarity.',
    replaces: ['Sure-Footed', 'Weapon Familiarity'],
    source: 'Horror Adventures',
  },
  {
    name: 'Behind the Veil',
    description:
      'Characters with this trait slyly cover their body language and movements by acting in a shadowed or partitioned areas. These characters gain a +2 bonus on Bluff and Sleight of Hand checks while benefiting from concealment or cover. Halflings can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Dimdweller',
    description:
      'Characters with this trait are at home in gloomy conditions. Whenever these characters benefit from concealment or full concealment due to darkness or dim light, they gain a +2 racial bonus on Intimidate, Perception, and Stealth checks. Elves, gnomes, halflings, and half-orcs can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Shadowhunter',
    description:
      'Those who understand the connection between shadows and the Negative Energy Plane know how to fight the spirits of darkness. Characters with this trait deal 50% weapon damage to incorporeal creatures when using nonmagical weapons (including natural and unarmed attacks), as if using magic weapons. They also gain a +2 bonus on saving throws to remove negative levels, and recover physical ability damage from attacks by undead creatures at a rate of 2 points per ability score per day (rather than the normal 1 point per ability score per day). Dwarves, elves, gnomes, half-orcs, and halflings can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Shadowplay',
    description:
      'Some illusionists are experts in manipulating light and darkness. Characters with this trait cast spells with the darkness, light, or shadow descriptor at +1 caster level. Halflings can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
];

export const halfOrcAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Acute Darkvision',
    description:
      'Some half-orcs have exceptionally sharp darkvision, gaining darkvision 90 feet. This racial trait replaces orc ferocity.',
    replaces: ['Orc Ferocity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Beastmaster',
    description:
      'Some half-orcs have a spiritual kinship with fantastical beasts, capturing them for sport or living and hunting with them. A half-orc with this trait treats whips and nets as martial weapons and gains a +2 racial bonus on Handle Animal checks. This racial trait replaces orc ferocity.',
    replaces: ['Orc Ferocity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Behind the Veil',
    description:
      'Characters with this trait gain a +2 bonus on Bluff and Sleight of Hand checks while benefiting from concealment or cover. Half-orcs can take this trait in place of intimidating, also gaining the shadow blending fetchling racial trait.',
    replaces: ['Intimidating'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Bestial',
    description:
      'The orc blood of some half-orcs manifests in the form of particularly prominent orc features, exacerbating their bestial appearances but improving their already keen senses. They gain a +2 racial bonus on Perception checks. This racial trait replaces orc ferocity.',
    replaces: ['Orc Ferocity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Burning Assurance',
    description:
      'Half-orcs acquire as a result of prejudice, and their self-confidence puts others at ease. Desert half-orcs with this racial trait gain a +2 racial bonus on Diplomacy checks. This replaces intimidating.',
    replaces: ['Intimidating'],
    source: 'Heroes for the High Road',
  },
  {
    name: 'Cavewight',
    description:
      'Some half-orcs live far below the surface, seeking freedom in winding cave complexes. Half-orcs with this racial trait gain a +1 racial bonus on Knowledge (dungeoneering) and Survival checks made underground. This racial trait replaces the intimidating racial trait.',
    replaces: ['Intimidating'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Chain Fighter',
    description:
      'Some half-orcs have escaped from slavery and reforged the chains of their imprisonment into deadly weapons. Half-orcs with this racial trait are proficient with flails and heavy flails, and treat dire flails and spiked chains as martial weapons. This racial trait replaces weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'City-Raised',
    description:
      'Half-orcs with this trait know little of their orc ancestry and were raised among humans and other half-orcs in a large city. City-raised half-orcs are proficient with whips and longswords, and receive a +2 racial bonus on Knowledge (local) checks. This racial trait replaces weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Cliffside Charger',
    description:
      'Half-orcs with this racial trait can move through natural difficult terrain at their normal speed; magically altered terrain affects them normally. In addition, you gain a +10-foot racial bonus to speed while charging. This replaces orc ferocity and weapon familiarity.',
    replaces: ['Orc Ferocity', 'Weapon Familiarity'],
    source: 'Heroes for the High Road',
  },
  {
    name: 'Dimdweller',
    description:
      'Whenever characters with this trait benefit from concealment or full concealment due to darkness or dim light, they gain a +2 racial bonus on Intimidate, Perception, and Stealth checks. Half-orcs can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Divided Attention',
    description:
      'Half-orcs must learn to divide their attention among multiple threats to stay alive, since both humans and orcs often attempt to put them in their place. Half-orcs gain a +1 dodge bonus to AC against foes who flank them. This racial trait replaces intimidating and orc ferocity.',
    replaces: ['Intimidating', 'Orc Ferocity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Dragon Sight',
    description:
      'Half-orcs with this trait gain some of the keen senses of dragonkind. They have darkvision with a range of 120 feet. This replaces darkvision and intimidating.',
    replaces: ['Darkvision', 'Intimidating'],
    source: 'Dragon Empires Primer',
  },
  {
    name: 'Dragon Slayer',
    description:
      'Some half-orcs train to defend their kind against dragons that would take advantage of or enslave them. Half-orcs with this trait gain a +2 dodge bonus to their AC against dragons and a +1 racial bonus on attack rolls against dragons. This trait replaces orc ferocity.',
    replaces: ['Orc Ferocity'],
    source: 'Dragon Empires Primer',
  },
  {
    name: 'Dusksight',
    description:
      'When making ranged attacks, characters with this trait can reroll the miss chance granted by cover to any target in dim light, and take the better of the two rolls. The miss chance for total concealment applies normally. Half-orcs can take this trait in place of weapon familiarity, also gaining low-light vision.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Evader',
    description:
      'While underground, half-orcs with this racial trait gain a +5 racial bonus on Survival checks to avoid becoming lost and a +1 racial bonus on Stealth checks. This replaces intimidating.',
    replaces: ['Intimidating'],
    source: 'Heroes for the High Road',
  },
  {
    name: 'Fey Magic',
    description:
      "The character has a mystic connection to one terrain type, selected from the ranger's favored terrain list. The character selects three 0-level druid spells and one 1st-level druid spell. If the character has a Charisma score of 11 or higher, when in the selected terrain, she gains these spells as spell-like abilities that can be cast once per day. The caster level for these effects is equal to the user's character level. The DC for the spell-like abilities is equal to 10 + the spell's level + the user's Charisma modifier. These spells are treated as being from a fey source for the purposes of the druid's resist nature's lure class feature and similar abilities. This trait replaces orc ferocity.",
    replaces: ['Orc Ferocity'],
    source: 'Heroes of the Wild',
  },
  {
    name: 'Fey Thoughts',
    description:
      'Select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Escape Artist, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. The selected skills are always class skills for the character. This trait replaces racial weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Heroes of the Wild',
  },
  {
    name: 'Forest Walker',
    description:
      'More at home in the forests and jungles of the world, these half-orcs are well adapted to their surroundings. Half-orcs with this trait have low-light vision and gain a +2 racial bonus on Climb checks. This racial trait replaces darkvision.',
    replaces: ['Darkvision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Gatecrasher',
    description:
      'Many half-orcs revel in acts of wanton destruction. Half-orcs with this racial trait gain a +2 racial bonus on Strength checks to break objects and on sunder combat maneuver checks. This racial trait replaces orc ferocity.',
    replaces: ['Orc Ferocity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Hatred',
    description:
      "Half-orcs raised among orcs must prove themselves against their people's enemies. Half-orcs with this racial trait gain a +1 racial bonus on attack rolls against humanoids of the dwarf, elf, and human subtypes because of their special training against these hated foes. This racial trait replaces intimidating and orc ferocity.",
    replaces: ['Intimidating', 'Orc Ferocity'],
    source: 'Blood of the Beast',
  },
  {
    name: 'Human-Raised',
    description:
      "Some half-orcs raised as humans lack their cousins' ferocity and training in orc weapons, but pick up a bit of their human parents' skills. They gain the human's skilled racial trait. This racial trait replaces orc ferocity and weapon familiarity.",
    replaces: ['Orc Ferocity', 'Weapon Familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Inured',
    description:
      'Half-orcs raised by orcs often become desensitized to the violence around them. Half-orcs with this trait gain a +4 bonus on Will saving throws to avoid sanity damage caused by encountering monsters, extreme violence, or death. This racial trait replaces orc ferocity.',
    replaces: ['Orc Ferocity'],
    source: 'Ultimate Intrigue',
  },
  {
    name: 'Low-Light Vision',
    description: 'Feyborn half-orcs gain low-light vision. This trait replaces darkvision.',
    replaces: ['Darkvision'],
    source: 'Bloodlines',
  },
  {
    name: 'Monstrous Sympathy',
    description:
      'Some half-orcs know how monsters think. They receive a +2 racial bonus on Bluff, Diplomacy, and Sense Motive checks against evil creatures. This racial trait replaces intimidating and orc ferocity.',
    replaces: ['Intimidating', 'Orc Ferocity'],
    source: 'Ultimate Intrigue',
  },
  {
    name: 'Orc Atavism',
    description:
      "Some half-orcs have much stronger orc blood than human blood. Such half-orcs count as only half-orcs and orcs (not also humans) for any effect related to race. They gain a +2 bonus to Strength and a -2 penalty to one mental ability score of their choice. Finally, they gain the ferocity universal monster ability. This racial trait replaces the half-orc's usual racial ability score modifiers, as well as intimidating, orc blood, and orc ferocity.",
    replaces: ['Intimidating', 'Orc Blood', 'Orc Ferocity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Overlooked Mastermind',
    description:
      "Some half-orcs use half-orcs' brutish stereotypes to their advantage, causing others to underestimate their intelligence and scheming. Such half-orcs gain a +2 racial bonus on Bluff, Diplomacy, and Sense Motive checks. This bonus increases to +4 against other humanoids. They also receive a +2 racial bonus on Bluff checks to feign ignorance and Sense Motive checks to intercept secret messages, and this stacks with the above bonus. This racial trait replaces intimidating, orc ferocity, and weapon familiarity.",
    replaces: ['Intimidating', 'Orc Ferocity', 'Weapon Familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Pain Tolerance',
    description:
      'Some half-orcs have an increased tolerance for pain. They gain DR 1/— against nonlethal damage and receive a +2 racial bonus on saving throws against spells and spell-like effects with the pain descriptor. This racial trait replaces intimidating and orc ferocity.',
    replaces: ['Intimidating', 'Orc Ferocity'],
    source: 'Ultimate Intrigue',
  },
  {
    name: 'Pariah',
    description:
      'While many cultures discriminate against half-orcs, in some, particularly dwarven communities, half-orcs are complete social pariahs. It goes without saying that such a culture does not provide outlets for a half-orc to practice with traditional orc weapons. The few half-orcs who survive to adulthood in such harsh social climates are deeply scarred by their abusive treatment and find it hard to express and understand normal emotions. Such half-orcs gain a +2 racial bonus on saving throws against emotion and fear effects and a -2 penalty on Bluff, Diplomacy, and Sense Motive checks. This racial trait replaces weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Poison Minion',
    description:
      "Drow sometimes augment their slaves and frontline warriors by making them toxic, causing their bodies to internally produce mawbane poison (see below). The resulting poisonous creature makes a potent weapon in the effort to discourage neighboring monsters. Any creature that hits such a character with a bite attack is immediately exposed to its poison. The save DC for this poison is equal to 10 + 1/2 the character's Hit Dice + the character's Constitution modifier. Mawbane Poison—ingested; save Fortitude as above; frequency 1/round for 4 rounds; effect 1d2 Constitution damage; cure 1 save. Half-orcs can take this trait in place of orc ferocity and weapon familiarity.",
    replaces: ['Orc Ferocity', 'Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Projection',
    description:
      'Some half-orcs channel negative emotions through magic. The DCs of any saving throws against spells with the fear or pain descriptor they cast increase by 1. This racial trait replaces orc ferocity and weapon familiarity.',
    replaces: ['Orc Ferocity', 'Weapon Familiarity'],
    source: 'Ultimate Intrigue',
  },
  {
    name: 'Rock Climber',
    description:
      'Half-orcs from mountainous regions are excellent climbers, and sometimes ambush prey by leaping down from above. Half-orcs with this racial trait gain a +1 racial bonus on Acrobatics and Climb checks. This racial trait replaces the intimidating trait.',
    replaces: ['Intimidating'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Sacred Tattoo',
    description:
      'Many half-orcs decorate themselves with tattoos, piercings, and ritual scarification, which they consider sacred markings. Half-orcs with this racial trait gain a +1 luck bonus on all saving throws. This racial trait replaces orc ferocity.',
    replaces: ['Orc Ferocity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Scavenger',
    description:
      'Some half-orcs eke out a leaving picking over the garbage heaps of society, and must learn to separate rare finds from the inevitable dross. Half-orcs with this racial trait receive a +2 racial bonus on Appraise checks and on Perception checks to find hidden objects (including traps and secret doors), determine whether food is spoiled, or identify a potion by taste. This racial trait replaces the intimidating trait.',
    replaces: ['Intimidating'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Sea Raider',
    description:
      'Half-orcs frequently take up sailing as pirates, raiders, and fishers, where they are known as tenacious fighters. They gain a +2 racial bonus on Profession (sailor) checks and Craft checks to repair ships, and a +1 racial bonus on damage rolls against foes and objects in or on top of the water. This racial trait replaces darkvision.',
    replaces: ['Darkvision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Shadowhunter',
    description:
      'Characters with this trait deal 50% weapon damage to incorporeal creatures when using non-magical weapons (including natural and unarmed attacks), as if using magic weapons. They also gain a +2 bonus on saving throws to remove negative levels, and recover physical ability damage from attacks by undead creatures at a rate of 2 points per ability score per day (rather than the normal 1 point per ability score per day). Half-orcs can take this trait in place of weapon familiarity.',
    replaces: ['Weapon Familiarity'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Shadowplay',
    description:
      "Characters with this trait cast spells with the darkness, light, or shadow descriptor at +1 caster level. Half-orcs can take this trait in place of intimidating, also gaining the gnome's illusion resistance racial trait.",
    replaces: ['Intimidating'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Shaman Enhancement',
    description:
      'You gain a +2 racial bonus on Spellcraft checks. In addition, when such a half-orc acquires an animal companion, bonded mount, cohort, familiar, or spirit animal, that creature gains a +2 bonus to Strength, Dexterity, or Constitution, as selected by the half-orc. This racial trait replaces weapon familiarity and intimidating.',
    replaces: ['Weapon Familiarity', 'Intimidating'],
    source: 'Blood of the Ancients',
  },
  {
    name: "Shaman's Apprentice",
    description:
      'Only the most stalwart survive the years of harsh treatment that an apprenticeship to an orc shaman entails. Half-orcs with this trait gain Endurance as a bonus feat. This racial trait replaces the intimidating trait.',
    replaces: ['Intimidating'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Skilled',
    description:
      'Second- and third-generation half-orcs often favor their human heritage more than their orc heritage. Half-orcs with this trait gain 1 additional skill rank per level. This racial trait replaces darkvision.',
    replaces: ['Darkvision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Smog Sight',
    description:
      'Half-orcs with this racial trait can see double the normal range in dense fog and smoke (including magic effects like obscuring mist) and ignore concealment from smoke or fog for targets within 5 feet. This racial trait replaces darkvision.',
    replaces: ['Darkvision'],
    source: 'Ultimate Intrigue',
  },
  {
    name: 'Squalid',
    description:
      'Some half-orcs exist in surroundings so filthy and pestilent that even orcs would have difficulty living in them. Half-orcs with this racial trait gain a +2 racial bonus on saving throws made to resist nausea, the sickened condition, and disease. This racial trait replaces orc ferocity.',
    replaces: ['Orc Ferocity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Stoic',
    description:
      "Some half-orcs learn to suppress their strong emotions. They don't usually gain morale bonuses, but instead gain a +2 racial bonus on saving throws against emotion and fear effects, and the DC to intimidate them increases by 2. They can choose to gain morale bonuses when they would normally be able to do so, but if they do, they lose the benefits from this racial trait for 24 hours. This racial trait replaces intimidating and orc ferocity.",
    replaces: ['Intimidating', 'Orc Ferocity'],
    source: 'Ultimate Intrigue',
  },
  {
    name: 'Tenacious',
    description:
      'City-dwelling half-orcs must often be tenacious to get by. Once per day if a half-orc fails a Fortitude save, Will save, or Constitution check, he can reroll the save or check. The half-orc must take the second result, even if it is worse. This racial trait replaces orc ferocity.',
    replaces: ['Orc Ferocity'],
    source: 'Heroes of the Streets',
  },
  {
    name: 'Toothy',
    description:
      "Some half-orcs' tusks are large and sharp, granting a bite attack. This is a primary natural attack that deals 1d4 points of piercing damage. This racial trait replaces orc ferocity.",
    replaces: ['Orc Ferocity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Unflinching Valor',
    description:
      'Half-orcs with this racial trait gain a +2 racial bonus on saving throws against fear effects, and a +1 racial bonus to CMD to avoid being grappled. This replaces intimidating.',
    replaces: ['Intimidating'],
    source: 'Heroes for the High Road',
  },
  {
    name: 'Voice in the Darkness',
    description:
      'Prerequisite(s): Charisma 13+. Characters who practice coercion and intimidation in the Underworld or on the Shadow Plane learn to do so in dim light or no light at all. As long as they are in dim light or darker conditions, characters with this trait gain a +2 bonus on Intimidate and Stealth checks. Half-orcs can take this trait in place of intimidating.',
    replaces: ['Intimidating'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Warded Skin',
    description:
      'Half-orcs with this racial trait gain spell resistance against divine magic equal to 6 + their level. Additionally, divine spells cast on them by demon worshipers have a 10% chance of failure. This replaces orc ferocity.',
    replaces: ['Orc Ferocity'],
    source: 'Heroes for the High Road',
  },
  {
    name: 'War-Leader',
    description:
      'Some orcs seek out human mates in hopes of birthing intelligent leaders for their interminable war efforts. When nature and luck smile upon this endeavor and a half-orc child shows cunning, that child is raised with many harrowing opportunities to learn how to best lead on the battlefield. Such half-orcs gain a +2 bonus on Diplomacy and Profession (soldier) checks as well as to their Leadership score (for the purpose of the Leadership feat). Armies they control in mass combat gain a +1 bonus to Morale. This racial trait replaces darkvision and orc ferocity.',
    replaces: ['Darkvision', 'Orc Ferocity'],
    source: 'Advanced Race Guide',
  },
];

export const humanAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Adoptive Parentage',
    description:
      "Choose one humanoid race without the human subtype. You start play with that race's languages and gain that race's weapon familiarity racial trait (if any). If the race does not have weapon familiarity, you gain either Skill Focus or Weapon Focus as a bonus feat that is appropriate for that race instead. This racial trait replaces the bonus feat trait.",
    replaces: ['Bonus Feat'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Alchemically Enhanced',
    description:
      "A human with this trait gains a +3 racial bonus to Constitution, Dexterity, or Strength. However, the character's biology is now more susceptible to chemicals, causing her to take a -2 penalty on Fortitude saving throws against poison. This racial trait replaces the +2 bonus to any one ability score and the bonus feat racial trait.",
    replaces: ['Ability Score Bonus', 'Bonus Feat'],
    source: 'The Worldwound',
  },
  {
    name: 'Aquatic Ancestry',
    description:
      'Humans with deep one or skum ancestry may exhibit prominent round eyes or webbed fingers and toes. They gain a racial bonus equal to half their character level on Swim checks and Swim is always a class skill for them. In addition, they can hold their breath for twice as long as normal. When the racial bonus on Swim checks from this ability becomes +8 or higher, they can always take 10 on Swim checks, even when threatened or distracted. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Awareness',
    description:
      "Humans raised within monastic traditions or communities that encourage mindfulness seem to shrug off many dangers more easily than other humans. They gain a +1 racial bonus on all saving throws and concentration checks. This racial trait replaces humans' bonus feat.",
    replaces: ['Bonus Feat'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Comprehensive Education',
    description:
      'Humans raised with skilled teachers draw upon vast swathes of knowledge gained over centuries of civilization. They gain all Knowledge skills as class skills, and they gain a +1 racial bonus on skill checks for each Knowledge skill that they gain as a class skill from their class levels. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Dimdweller',
    description:
      'Whenever characters with this trait benefit from concealment or full concealment due to darkness or dim light, they gain a +2 racial bonus on Intimidate, Perception, and Stealth checks. Humans can take this trait in place of the skilled trait, also gaining darkvision to a range of 60 feet.',
    replaces: ['Skilled'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Draconic Heritage',
    description:
      "At times, a human's family history can have a dragon's power bound to the bloodline. Humans with this trait gain darkvision with a range of 10 feet and low-light vision. They can also ignore the Charisma prerequisite for Eldritch Heritage and any feat that has Eldritch Heritage as a prerequisite, but can select only the draconic bloodline with these feats. This replaces the bonus skill rank humans receive at each level.",
    replaces: ['Skilled'],
    source: 'Legacy of Dragons',
  },
  {
    name: 'Dragon Scholar',
    description:
      "Dragons have a long history of individual interactions with specific humans, and some humans seek to better understand this relationship. Humans with this trait receive a +2 racial bonus on caster level checks to overcome a dragon's spell resistance. In addition, they receive a +3 racial bonus on Knowledge (arcana) checks related to creatures of the dragon type. This trait replaces humans' bonus feat racial trait.",
    replaces: ['Bonus Feat'],
    source: 'Legacy of Dragons',
  },
  {
    name: 'Dual Talent',
    description:
      'Some humans are uniquely skilled at maximizing their natural gifts. These humans pick two ability scores and gain a +2 racial bonus in each of those scores. This racial trait replaces the +2 bonus to any one ability score, the bonus feat, and the skilled traits.',
    replaces: ['Ability Score Bonus', 'Bonus Feat', 'Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Eye for Talent',
    description:
      "Humans have great intuition for hidden potential. They gain a +2 racial bonus on Sense Motive checks. In addition, when they acquire an animal companion, bonded mount, cohort, or familiar, that creature gains a +2 bonus to one ability score of the character's choice. This racial trait replaces the bonus feat trait.",
    replaces: ['Bonus Feat'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fey Magic',
    description:
      "The character has a mystic connection to one terrain type, selected from the ranger's favored terrain list. The character selects three 0-level druid spells and one 1st-level druid spell. If the character has a Charisma score of 11 or higher, when in the selected terrain, she gains these spells as spell-like abilities that can be cast once per day. The caster level for these effects is equal to the user's character level. The DC for the spell-like abilities is equal to 10 + the spell's level + the user's Charisma modifier. These spells are treated as being from a fey source for the purposes of the druid's resist nature's lure class feature and similar abilities. In addition, select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Escape Artist, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. The selected skills are always class skills for the character. Lastly, the human also gains low-light vision. This trait replaces skilled.",
    replaces: ['Skilled'],
    source: 'Heroes of the Wild',
  },
  {
    name: 'Focused Study',
    description:
      'All humans are skillful, but some, rather than being generalists, tend to specialize in a handful of skills. At 1st, 8th, and 16th level, such humans gain Skill Focus in a skill of their choice as a bonus feat. This racial trait replaces the bonus feat trait.',
    replaces: ['Bonus Feat'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Frontier Survivor',
    description:
      'Humans with this trait gain the Technologist feat, which grants them understanding of technological subjects. Additionally, they gain a +2 racial bonus on Survival checks in the ruins of cities. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'The Worldwound',
  },
  {
    name: 'Giant Ancestry',
    description:
      'Humans with ogre or troll ancestry end up having hulking builds and asymmetrical features. Such humans gain a +1 bonus on combat maneuver checks and to CMD, but a -2 penalty on Stealth checks. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heart of the Fey',
    description:
      'You gain low-light vision, gain a +1 racial bonus on Reflex and Will saves, and treat Knowledge (nature) and Perception as class skills. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Legacy of the First World',
  },
  {
    name: 'Heart of the Fields',
    description:
      'Humans born in rural areas are used to hard labor. They gain a racial bonus equal to half their character level to any one Craft or Profession skill, and once per day they may ignore an effect that would cause them to become fatigued or exhausted. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heart of the Mountains',
    description:
      'Humans born in the mountains are skilled at negotiating heights and precipices. They gain a +2 racial bonus on Climb checks and Acrobatics checks to move on narrow surfaces and uneven ground. Furthermore, they are considered acclimated to the effects of high altitude. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heart of the Sea',
    description:
      'Humans born near the sea are always drawn to it. They gain a +2 racial bonus on Profession (sailor) and Swim checks, and these are always class skills for them. They can hold their breath twice as long as normal, and spellcasters gain a +4 racial bonus on concentration checks when attempting to cast spells underwater. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heart of the Slums',
    description:
      "Humans who eke out a life in a city's teeming slums must be quick and clever. They gain a +2 racial bonus on Sleight of Hand and Stealth checks, and a +4 racial bonus on Survival checks in urban and underground settings. In addition, they may roll twice when saving against disease, taking the better roll. This racial trait replaces skilled.",
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heart of the Snows',
    description:
      'Humans born in chilly climes treat cold climates as one category less severe. They gain a +2 racial bonus on Fortitude saving throws against the effects of cold climates, on any check or saving throw to avoid slipping and falling, and to CMD against trip combat maneuvers. This bonus applies on Acrobatics and Climb checks made in slippery conditions. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heart of the Streets',
    description:
      'Humans from bustling cities are skilled with crowds. They gain a +1 racial bonus on Reflex saves and a +1 dodge bonus to Armor Class when adjacent to at least two other allies. Crowds do not count as difficult terrain for them. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heart of the Sun',
    description:
      'Humans born in tropical climates treat hot climates as one category less severe. They also gain a +2 racial bonus on Fortitude saving throws against the effects of a hot climate, as well as against the poison and distraction ability of swarms and vermin. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heart of the Wilderness',
    description:
      'Humans raised in the wild learn the hard way that only the strong survive. They gain a racial bonus equal to half their character level on Survival checks. They also gain a +5 racial bonus on Constitution checks to stabilize when dying and add half their character level to their Constitution score when determining the negative hit point total necessary to kill them. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heroic',
    description:
      'Some humans are born heroes. In campaigns that use the optional hero point system, each time these humans gain a level, they gain 2 hero points instead of 1. If they take the Blood of Heroes feat, they gain 3 hero points each level instead of 2. This racial trait replaces the bonus feat trait.',
    replaces: ['Bonus Feat'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'History of Terrors',
    description:
      'Humans with this trait gain a +2 racial bonus on saving throws to resist mind-affecting effects. The bonus increases to +4 if the effect is also a fear effect. This racial trait replaces the skilled trait.',
    replaces: ['Skilled'],
    source: 'The Worldwound',
  },
  {
    name: 'Imposter-Wary',
    description:
      'You gain a +2 racial bonus on saving throws against illusion spells and effects, 1 free rank in Sense Motive at 1st level, and 1 additional rank in Sense Motive whenever they gain a level. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Legacy of the First World',
  },
  {
    name: 'Industrious',
    description:
      'Humans are known for their drive and work ethic. Humans with this racial trait gain a +2 racial bonus on concentration checks and checks with their choice of one Craft or Profession skill. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Innovative',
    description:
      'Humans have come to shape the world because they are inveterate innovators. Humans with this racial trait gain a +2 racial bonus on Knowledge (arcana) and Spellcraft checks to independently research spells, create magic items they have never encountered before, and identify unique magical effects. They also gain a +2 racial bonus on Charisma-based skill checks to persuade others to adopt a new ideology or further the cause of discovery and progress. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Institutional Memory',
    description:
      'Humans rely on their institutions to remember the distant past and to preserve their own memories for the distant future. They gain a +4 racial bonus on Knowledge checks to answer questions about any organizations, guilds, or religions to which they belong, and they can attempt such skill checks untrained. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Military Tradition',
    description:
      'Several human cultures raise all children (or all children of a certain social class) to serve in the military or defend themselves with force of arms. They gain proficiency with up to two martial or exotic weapons appropriate to their culture. This racial trait replaces the bonus feat trait.',
    replaces: ['Bonus Feat'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Mixed Heritage',
    description:
      "Often human civilization is defined by more than one characteristic. A human with this trait may select a second 'Heart of the' racial trait. This replaces the bonus feat racial trait.",
    replaces: ['Bonus Feat'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'One of the Multitude',
    description:
      'City-dwelling humans are skilled at blending in with the busy multitudes of the city. They gain a +1 racial bonus on Bluff, Diplomacy, Disguise, Sleight of Hand, and Stealth checks when within 10 feet of at least two other humanoids. They gain a +1 racial bonus on attacks of opportunity made while flanking. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Heroes of the Streets',
  },
  {
    name: 'Piety',
    description:
      'Humans place great trust in the gods to protect them. Humans with this trait receive a +2 racial bonus on Knowledge (religion) checks and Knowledge (religion) is always a class skill for them. In addition, once per day before attempting an attack roll, saving throw, ability check, or skill check, such a human can call out to his deity in order to receive a +2 racial bonus on that roll; he can use this ability only if he is able to speak. This racial trait replaces the bonus feat racial trait.',
    replaces: ['Bonus Feat'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Poison Minion',
    description:
      "Drow sometimes augment their slaves and frontline warriors by making them toxic, causing their bodies to internally produce mawbane poison. The resulting poisonous creature makes a potent weapon in the effort to discourage neighboring monsters. Any creature that hits such a character with a bite attack is immediately exposed to its poison. The save DC for this poison is equal to 10 + 1/2 the character's Hit Dice + the character's Constitution modifier. Mawbane Poison—ingested; save Fortitude as above; frequency 1/round for 4 rounds; effect 1d2 Constitution damage; cure 1 save. Humans can take this trait in place of skilled.",
    replaces: ['Skilled'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Practiced Hunter',
    description:
      'Members of some human cultures train from youth to find and follow the trails of vital game and at the same time hide the evidence of their own passage. These humans gain a +2 racial bonus on Stealth and Survival checks, and Stealth and Survival are always class skills for them. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Psychic Defense',
    description:
      'Humans from cultures steeped in the occult sometimes train their minds to resist outside influence. They gain a +2 racial bonus on saving throws against psychic spells and spell-like abilities, including those that originate from the psychic magic ability. This racial trait replaces the bonus feat trait.',
    replaces: ['Bonus Feat'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Rationalize',
    description:
      'Humans have the ability to assuage their own fears by convincing themselves that what they saw or read is not real. Humans with this trait gain a +3 bonus on saving throws against effects that cause sanity damage. This racial trait replaces the bonus feat trait.',
    replaces: ['Bonus Feat'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Reptilian Ancestry',
    description:
      'Humans with reptoid or serpentfolk ancestry sometimes have nictitating membranes or patches of scaly skin. They gain a +2 racial bonus on saving throws against mind-affecting effects and poisons. This racial trait replaces the bonus feat trait.',
    replaces: ['Bonus Feat'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Self-Made Fate',
    description:
      'Some humans build nations that deny the importance of gods and divine magic, and those raised to avoid divine influence develop a knack for defying divine magic. They gain a +2 racial bonus on saving throws against divine spells and spell-like abilities, as well as the spells and spell-like abilities of aeons, psychopomps, and outsiders with an alignment subtype. This racial trait replaces the bonus feat trait.',
    replaces: ['Bonus Feat'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Shadowhunter',
    description:
      'Characters with this trait deal 50% weapon damage to incorporeal creatures when using non-magical weapons (including natural and unarmed attacks), as if using magic weapons. They also gain a +2 bonus on saving throws to remove negative levels, and recover physical ability damage from attacks by undead creatures at a rate of 2 points per ability score per day (rather than the normal 1 point per ability score per day). Humans can take this trait in place of their bonus feat, also gaining Iron Will as a bonus feat.',
    replaces: ['Bonus Feat'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Silver Tongued',
    description:
      "Human are often adept at subtle manipulation and putting even sworn foes at ease. Humans with this trait gain a +2 bonus on Diplomacy and Bluff checks. In addition, when they use Diplomacy to shift a creature's attitude, they can shift up to three steps up rather than just two. This racial trait replaces skilled.",
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Social Ties',
    description:
      'Some human societies run on complex webs of favors and loyalties that canny members can intuitively exploit with relative ease. These humans gain a +2 racial bonus on Diplomacy checks, and on any skill checks to recruit members and teams for an organization. They also add a +1 racial bonus to their Leadership scores (if they gain the Leadership feat). This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Tribalistic',
    description:
      'Many humans naturally form into cliques or tribes, and these humans work exceptionally well with those they view as fellow tribe members. Such humans gain a +2 racial bonus on attack rolls and skill checks to use the aid another action to aid humans of the same ethnicity. Humans with this racial trait must hail from an ethnicity that has its own language other than Common, and they only start with that language; if they have high Intelligence scores, they can select their bonus languages from among Common, Giant, Goblin, and Halfling. This racial trait alters starting and bonus languages.',
    replaces: ['Languages'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Unstoppable Magic',
    description:
      'Humans from civilizations built upon advanced magic are educated in a variety of ways to accomplish their magical goals. They gain a +2 racial bonus on caster level checks against spell resistance. This racial trait replaces the bonus feat trait.',
    replaces: ['Bonus Feat'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Wayfarer',
    description:
      'Humans maintain the largest trade networks and the farthest-reaching civilizations, putting them in contact with a huge number of cultures. Humans with this racial trait gain a +2 racial bonus on Survival checks to avoid becoming lost, Knowledge (geography) checks, and Knowledge (local) checks. Whenever these humans gain a rank in Linguistics, they learn two languages rather than one. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Inner Sea Races',
  },
];

export const batch_001: Record<string, AlternativeRacialTraitData[]> = {
  Dwarf: dwarfAltTraits,
  Elf: elfAltTraits,
  Gnome: gnomeAltTraits,
  'Half-Elf': halfElfAltTraits,
  Halfling: halflingAltTraits,
  'Half-Orc': halfOrcAltTraits,
  Human: humanAltTraits,
};
