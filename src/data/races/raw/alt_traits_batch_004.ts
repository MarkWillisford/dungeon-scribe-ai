// Batch 004 | first: 'Changeling' | last: 'Nagaji' | races: 7 | traits: 35
// Source: d20pfsrd.com uncommon races pages (arg-*). Source abbreviations resolved:
//   PZO9280 / no-marker -> Advanced Race Guide
//   PPC:AoE  -> Pathfinder Player Companion: Agents of Evil
//   PPC:BotS -> Pathfinder Player Companion: Blood of the Sea
//   PPC:BotB -> Pathfinder Player Companion: Blood of the Beast
//   PPC:HftF -> Pathfinder Player Companion: Heroes from the Fringe
import { AlternativeRacialTraitData } from '../types';

export const changelingAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Hag Magic (First Version)',
    description:
      "Some changelings develop a gift for spellcasting instead of their mothers' overtly fearsome traits. A changeling with this trait displays one or more stark white streaks in her hair as a child. The DCs of any saving throws against enchantment spells she casts increase by 1, and if her Charisma score is 11 or higher, she also gains the following spell-like abilities, usable once per day each: dancing lights, detect magic, disguise self, and pass without trace.",
    replaces: ['claws', 'natural armor'],
    source: 'Agents of Evil',
  },
  {
    name: 'Hag Magic (Second Version)',
    description:
      "Some changelings have an innate talent for magic. They can choose one 1st- or 0-level spell from the witch spell list that does not have a material component costing more than 1 gp. They can use the chosen spell as a spell-like ability once per day if it is a 1st-level spell or three times per day if it is a 0-level spell (caster level equal to the changeling's character level).",
    replaces: ['natural armor'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Mist Child',
    description:
      'When the changeling has concealment or total concealment, the miss chance of attacks against her increases by 5%.',
    replaces: ['hulking changeling'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Object of Desire',
    description:
      'The changeling adds +1 to her caster level when casting charm person and charm monster.',
    replaces: ['green widow'],
    source: 'Advanced Race Guide',
  },
  {
    name: "Ocean's Daughter",
    description:
      'The changeling gains a +1 trait bonus on Swim checks. She automatically succeeds at Swim checks made to avoid nonlethal damage from swimming.',
    replaces: ['sea lungs'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Witchborn',
    description:
      'Most changelings are talented witches. They gain a +2 bonus to Intelligence and Charisma instead of a +2 bonus to Wisdom and Charisma.',
    replaces: ['ability score modifiers'],
    source: 'Advanced Race Guide',
  },
];

export const duergarAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Blood Enmity',
    description:
      'Duergar have long warred against their dwarven cousins and the hated drow. Duergar with this racial trait receive a +1 racial bonus on attack rolls against humanoid creatures of the dwarf or elf subtypes.',
    replaces: ['invisibility'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Daysighted',
    description:
      'The cruel light of the sun harms some duergar less than others. Such duergar lack the light sensitivity racial trait, but have darkvision of only 60 feet.',
    replaces: ['light sensitivity', 'superior darkvision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Deep Magic',
    description:
      'Duergar spellcasters labor long to overcome the inborn spell resistance (SR) held by so many of their underground foes. Duergar with this racial trait receive a +2 racial bonus on caster level checks made to overcome spell resistance and a +2 racial bonus on dispel checks.',
    replaces: ['enlarge person', 'invisibility'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Dwarf Traits',
    description:
      'Duergar can select any dwarf racial trait that replaces stability. They can select dwarf racial traits that replace the hardy dwarf racial trait by giving up duergar immunities instead.',
    replaces: ['stability', 'duergar immunities'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Magical Taskmaster',
    description:
      "Some duergar demonstrate magic of a more insidious kind than the rest of their kin. They can use charm person once per day as a spell-like ability. The save DC is equal to 10 + 1/2 duergar's Hit Dice + duergar's Wisdom modifier.",
    replaces: ['invisibility'],
    source: 'Advanced Race Guide',
  },
];

export const gillmanAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Deep Gillman',
    description:
      'Some gillmen live in the deeper ocean and almost never visit the land above the sea. Such gillmen gain darkvision to a range of 60 feet and resist cold 5, in order to survive the lightless depths.',
    replaces: ['amphibious', 'enchantment resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Riverfolk',
    description:
      'Some gillmen groups live in colonies along vast riverways, and have adapted to living on land for much longer periods. Gillmen with this trait have a thin coating of natural oil that keeps their skin from cracking even without water. However, this natural oil also makes such gillmen particularly susceptible to flames, and they gain vulnerability to fire.',
    replaces: ['water dependent'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Slimehunter',
    description:
      'Gillmen with this trait are from lineages that have fought against aboleths since the aberrations rescued their human ancestors. They receive a +2 racial bonus on saving throws against aboleth spells, spell-like abilities, and supernatural abilities.',
    replaces: ['enchantment resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Submerged',
    description:
      'Gillmen who live in deep water are accustomed to the gloom of the depths. Though these gillmen can venture onto land, they are uncomfortable doing so and must return to the ocean sooner than other gillmen. Gillmen with this racial trait gain low-light vision but must submerge themselves in water every 12 hours or die within 2d4 hours.',
    replaces: ['water dependent'],
    source: 'Blood of the Sea',
  },
  {
    name: 'Taskmaster',
    description:
      'The aboleth fleshcrafters created some gillmen as overseers among their kin, allowing them to exude pheromones into the air or water. Generations later, the descendants of these taskmaster gillmen retain the ability to influence others. Gillmen with this trait gain a +2 racial bonus on Diplomacy checks.',
    replaces: ['enchantment resistance'],
    source: 'Blood of the Sea',
  },
  {
    name: 'Throwback',
    description:
      'Some gillmen are throwbacks to their land-dwelling human ancestors. Gillmen with this racial trait do not have the amphibious trait, have the human subtype instead of the aquatic subtype, have no swim speed or bonuses to the Swim skill, cannot breathe water, and do not have the water dependent racial trait.',
    replaces: ['amphibious', 'water dependent'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Truthseer',
    description:
      'Gillmen with this racial trait gain a +2 racial bonus on saving throws against non-aboleth illusion spells or effects, but they take a -2 penalty on such saving throws against aboleth sources.',
    replaces: ['enchantment resistance'],
    source: 'Blood of the Sea',
  },
  {
    name: 'Venomkissed',
    description:
      'Some gillmen display an innate resistance to the toxic creatures of the deep. In gillman communities, venomkissed gillmen take on the dangerous task of domesticating jellyfish, octopuses, sea snakes, and other venomous creatures. Solitary venomkissed gillmen make their homes near beds of poisonous coral and anemones, using the creatures as natural defense. Gillmen with this racial trait gain a +2 racial saving throw bonus against poison.',
    replaces: ['enchantment resistance'],
    source: 'Blood of the Sea',
  },
];

export const grippliAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Defensive Training',
    description:
      'Gripplis often live in close proximity to very large animals and dangerous creatures they must learn to avoid in order to survive. They gain a +2 dodge bonus to AC against Large or larger animals and magical beasts.',
    replaces: ['swamp stride', 'weapon familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Glider',
    description:
      'Gripplis’ aerodynamic bodies and thick webbing between the toes enable a falling grippli to treat the distance fallen as half the actual distance. The grippli can steer himself while falling, moving horizontally up to a number of feet equal to half the vertical distance fallen. The grippli cannot use this trait if it is wearing heavy armor, is carrying a heavy load, or is unable to react to the fall (such as being helpless).',
    replaces: ['swamp stride'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Jumper',
    description:
      'Gripplis with this trait are always considered to have a running start when making Acrobatics checks to jump.',
    replaces: ['camouflage'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Princely',
    description:
      'The grippli gains proficiency with rapiers and a +2 racial bonus on Diplomacy and Intimidate checks.',
    replaces: ['swamp stride', 'weapon familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Toxic Skin (Ex)',
    description:
      'Once per day as a swift action, a grippli can create a poison that can be applied to a weapon or delivered as a touch attack. Alternatively, the grippli can smear the poison on its own body as a standard action, affecting the first creature to hit it with an unarmed strike or natural weapon. The poison loses its potency after 1 hour. The grippli is immune to its own poison.',
    replaces: ['swamp stride', 'camouflage'],
    source: 'Advanced Race Guide',
  },
];

export const kitsuneAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Duplicitous',
    description:
      'Many kitsune prefer to avoid the attention they often attract from human neighbors and attempt to convince all around them that they are human. They gain a +2 racial bonus on Bluff and Disguise checks.',
    replaces: ['kitsune magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fast Shifter (Su)',
    description:
      'You were born with an innate talent for switching between your natural forms. Using your racial change shape ability is a move action instead of a standard action.',
    replaces: ['kitsune magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Gregarious (Ex)',
    description:
      'Even among your own kind, your gift for making friends stands out. Whenever you successfully use Diplomacy to win over an individual, that creature takes a -2 penalty to resist any of your Charisma-based skill checks for the next 24 hours.',
    replaces: ['agile'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Keen Kitsune',
    description:
      'Such characters gain a +2 bonus to Dexterity and Intelligence instead of Dexterity and Charisma.',
    replaces: ['ability score modifiers'],
    source: 'Blood of the Beast',
  },
  {
    name: 'Multilingual',
    description:
      "They speak Common, Sylvan, and the racial language of their human form's ethnicity, and they can learn any language they want (except Druidic and other secret languages) if they have high Intelligence scores.",
    replaces: ['agile', 'languages'],
    source: 'Blood of the Beast',
  },
  {
    name: 'Skilled',
    description:
      'They gain an additional skill rank at 1st level and one additional skill rank whenever they gain a level.',
    replaces: ['agile', 'kitsune magic'],
    source: 'Blood of the Beast',
  },
  {
    name: 'Superior Shapeshifter',
    description: 'They gain Fox Shape as a bonus feat at 1st level, ignoring its prerequisites.',
    replaces: ['kitsune magic'],
    source: 'Blood of the Beast',
  },
];

export const merfolkAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Darkvision',
    description:
      'Some Merfolk favor the lightless depths over shallower waters. Merfolk with this racial trait gain darkvision with a range of 60 feet and light sensitivity.',
    replaces: ['low-light vision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Seasinger',
    description:
      'The beautiful voices of the merfolk are legendary. A seasinger gains a +2 racial bonus on Perform (sing) checks and a +1 racial bonus to the save DC of language-dependent spells.',
    replaces: ['low-light vision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Secret Magic',
    description:
      "Merfolk sometimes manifest magical powers they are unwilling to explain to non-merfolk, leading scholars to speculate that the magic originates from the merfolk's rumored eldritch patrons. Such merfolk have only a 40-foot swim speed, but they add +1 to the DC of any enchantment spells they cast, and if they have a Charisma score of 13 or higher, they gain the ability to cast the following spell-like abilities: At will—speak with animals (aquatic animals only); 1/day—fins to feet (self only), hydraulic push.",
    replaces: ['armor'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Strongtail',
    description:
      'A few merfolk have broad, strong tails that are more suited for land travel than the typical merfolk tail. Merfolk with this racial trait have a land speed of 15 feet and a swim speed of 30 feet.',
    replaces: [],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Unexpected Ally',
    description:
      "Merfolk with this racial trait gain a +2 bonus on Diplomacy checks to influence a creature's attitude. In addition, merfolk with this racial trait gain a +1 racial bonus on checks to perform the aid another action.",
    replaces: ['low-light vision'],
    source: 'Heroes from the Fringe',
  },
];

export const nagajiAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Hypnotic Gaze (Sp)',
    description:
      "The nagaji's gaze is so intense it stops others in their tracks. Once per day, it can attempt to hypnotize a single target, as per the spell hypnotism (caster level equal to the nagaji's Hit Dice). The DC of this effect is equal to 11 + the nagaji's Charisma modifier. The effects of the hypnotic gaze only last a single round.",
    replaces: ["serpent's sense"],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Serpent Affinity',
    description:
      'Nagaji clerics with this racial trait and the Scalykind domain use their domain powers and spells at +1 caster level. This increase is a racial bonus.',
    replaces: ['resistant'],
    source: 'Advanced Race Guide',
  },
];

export const batch_004: Record<string, AlternativeRacialTraitData[]> = {
  Changeling: changelingAltTraits,
  Duergar: duergarAltTraits,
  Gillman: gillmanAltTraits,
  Grippli: grippliAltTraits,
  Kitsune: kitsuneAltTraits,
  Merfolk: merfolkAltTraits,
  Nagaji: nagajiAltTraits,
};
