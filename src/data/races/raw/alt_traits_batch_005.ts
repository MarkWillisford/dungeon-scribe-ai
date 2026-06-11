// Batch 005 | first: 'Samsaran' | last: 'Wayang' | races: 7 | traits: 23
import { AlternativeRacialTraitData } from '../types';

export const samsaranAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Mountaineer',
    description:
      'Samsarans, often from Zi Ha, who live their lives in the mountains are immune to altitude sickness and do not lose their Dexterity bonus to AC when making Climb checks or Acrobatics checks to cross narrow or slippery surfaces.',
    replaces: ['Lifebound'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Mystic Past Life',
    description:
      "You can add spells from another spellcasting class to the spell list of your current spellcasting class. You add a number of spells equal to 1 + your spellcasting class's key ability score bonus (Wisdom for clerics, and so on). The spells must be the same type (arcane or divine) as the spellcasting class you're adding them to. For example, you could add divine power to your druid class spell list, but not to your wizard class spell list because divine power is a divine spell. These spells do not have to be spells you can cast as a 1st-level character. The number of spells granted by this ability is set at 1st level. Changes to your ability score do not change the number of spells gained.",
    replaces: ['Shards of the Past'],
    source: 'Advanced Race Guide',
  },
];

export const strixAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Cautious Brawler',
    description:
      'Because strix are careful to avoid injuring other strix even when they fight with each other, they develop a talent for fighting without causing lasting harm. They gain a +1 racial bonus on damage rolls when dealing nonlethal damage and take no attack penalty when dealing nonlethal damage with a lethal weapon.',
    replaces: ['Hatred', 'Suspicious'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Dayguard',
    description:
      'Familiar with watching over its tribe during the day, the strix gains a +2 racial bonus on Perception checks and treats Perception as a class skill.',
    replaces: ['Nocturnal'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Frightening',
    description:
      'The strix looks particularly menacing and use this to its advantage, gaining a +2 racial bonus on Intimidate checks.',
    replaces: ['Nocturnal'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Nimble',
    description: 'The strix receives a +1 racial bonus on Reflex saves.',
    replaces: ['Suspicious'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Tough',
    description: 'The strix receives a +1 racial bonus on Fortitude saves.',
    replaces: ['Suspicious'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Wing-Clipped',
    description:
      'The flight of wing-clipped strix is weaker than normal, whether from deformity or injury. Their fly speed is 20 feet (poor) instead of the normal fly speed, and they must make a DC 30 Fly check to fly upward. Ostracized by their tribes and forced to deal with other races, these strix compensate for their weakness by gaining a +2 racial bonus on Bluff, Climb, and Diplomacy checks.',
    replaces: ['Normal Speed'],
    source: 'Advanced Race Guide',
  },
];

export const suliAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Energy Strike',
    description:
      "A suli with this racial trait has a stronger connection to one energy type than to the other three used by sulis. Choose one energy type: acid, cold, electricity, or fire. The suli's elemental assault ability can only deal energy damage of this type. The suli has resistance 5 to this energy type and no racial resistance to the other three types. While her elemental assault is active, the suli gains an additional ability based on the chosen energy type. This racial trait otherwise works like and replaces elemental assault. Earthfoot (acid): Whenever the suli moves through difficult terrain related to earth and stone (rubble, mud, sand, and so on), she may move through 5 feet of that difficult terrain each round as if it were normal terrain. This allows the suli to take a 5-foot step into that difficult terrain. Other kinds of difficult terrain (ice, caltrops, foliage, and so on) affect the suli normally. Firehand (fire): Instead of adding damage to a melee attack, the suli may hurl a piece of her arm-flames as if it were a thrown weapon. The suli makes a ranged touch attack; if the attack hits, the target takes 1d6 points of fire damage. The flames have a range increment of 10 feet. Icewalk (cold): The suli can walk on water-based liquids as if using water walk, except instead of hovering above the surface, she creates a temporary layer of ice that supports her and immediately melts once she moves away from it. This ice is not slippery to the suli and does not affect her balance or speed, though other ice affects her normally. Other creatures cannot travel on this ice, but the suli may carry a creature while moving. Shockshield (electricity): Once per round as an immediate action, the suli can shock a creature that touches or attacks her with a natural attack, unarmed strike, or metal melee weapon, dealing 1d6 points of electricity damage to the creature.",
    replaces: ['Elemental Assault'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Mostly Human',
    description:
      "A few ifrits, oreads, sulis, sylphs, and undines have appearances much closer to those of their human ancestors; in fact, they may not even realize their true race. Such geniekin appear to be human, save perhaps minor features like unusual eye color, and they count as humanoid (human) as well as outsider (native) for all purposes (such as humanoid-affecting spells such as charm person or enlarge person). These geniekin do not automatically gain their associated elemental language (but may select it as a bonus language if their Intelligence is high enough). This ability alters the geniekin's type, subtype, and languages.",
    replaces: ['Type', 'Subtype', 'Languages'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Trusted Mediator',
    description:
      'Sulis are renowned in Thuvia and beyond as impartial mediators, and they learn to shroud their minds to prevent magic from tampering with their judgments. They gain a +2 racial bonus on saving throws against mind-affecting effects.',
    replaces: ['Energy Resistance', 'Low-Light Vision'],
    source: 'Inner Sea Races',
  },
];

export const svirfneblinAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Healthy',
    description:
      'Svirfneblin gain a +4 bonus on Fortitude saves against disease and poison, including magical diseases.',
    replaces: ['Fortunate'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Stalwart Watcher',
    description:
      'Svirfneblin first came to Golarion to thwart the schemes of evil fey. Those who still keep to this mission, primarily dwelling in settlements far beneath Andoran, gain a +1 racial bonus on attack rolls against fey creatures and a +2 racial bonus on saving throws against mind-affecting effects.',
    replaces: ['Hatred', 'Skilled'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Stoneseer',
    description:
      "Svirfneblin add +1 to the caster level of any spells with the earth descriptor they cast. Svirfneblin also gain the following spell-like abilities: Constant—nondetection; 1/day—magic stone, stone shape, stone tell; caster level equals the svirfneblin's class levels.",
    replaces: ['Svirfneblin Magic'],
    source: 'Advanced Race Guide',
  },
];

export const vanaraAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Acrobatic',
    description:
      'Vanaras are often extraordinarily agile, capable of dancing around slower-moving humans with playful grace. They gain a +2 racial bonus on Acrobatics and Escape Artist checks. This racial trait replaces nimble.',
    replaces: ['Nimble'],
    source: 'Blood of the Beast',
  },
  {
    name: 'Change Size',
    description:
      "One vanara in every 500 is gifted with limited shapeshifting ability. Such a creature can adjust her size at will. She gains the change shape ability and the shapeshifter subtype. Instead of changing appearance, she can use change shape to reduce her size category to Small. Her ability scores don't change, only her size (and thus her weapon damage); normal size penalties and bonuses to AC and CMD and on attack and skill rolls apply. Changing size or returning to her true size is a full-round action. This racial trait alters the vanara's type and replaces nimble.",
    replaces: ['Nimble'],
    source: 'Blood of the Beast',
  },
  {
    name: 'Tree Stranger',
    description:
      'Some vanaras have spent their lives among humans in centers of learning instead of traditional treetop homes. These vanaras treat all Knowledge skills as class skills, but lose their climb speed racial trait.',
    replaces: ['Normal Speed'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Risky Troublemaker',
    description:
      'Vanara families who seek to emulate the Monkey King teach their members that unexpected opportunities are worth taking great risks. These vanaras can choose to roll twice on Use Magic Device checks. If they do, they take the higher result unless either die roll is a natural 1, in which case the check automatically fails. This racial trait replaces prehensile tail.',
    replaces: ['Prehensile Tail'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Whitecape',
    description:
      "The rare whitecape vanara clans have more in common with savanna-dwelling baboons than the jungle-dwelling monkeys that most vanaras resemble. Their stooping build grants them a +4 racial bonus to CMD when resisting a bull rush or trip. These vanaras usually have a thick mane of hair on the head and shoulders (called a 'cape') and shorter tails. This racial trait replaces prehensile tail.",
    replaces: ['Prehensile Tail'],
    source: 'Advanced Race Guide',
  },
];

export const vishkanyaAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Deceptive',
    description:
      'Vishkanya clans that make their livings robbing or killing humans train to distract targets at critical moments. They gain a +2 racial bonus on Bluff checks.',
    replaces: ['Keen Senses'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Sensual',
    description:
      'You are trained in drawing attention to yourself. You gain a +2 bonus on any one Perform skill.',
    replaces: ['Keen Senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Subtle Appearance',
    description:
      'You have normal (humanlike) eyes, and your beauty is more conventional. You gain a +4 bonus on Disguise checks to look fully human.',
    replaces: ['Low-Light Vision'],
    source: 'Advanced Race Guide',
  },
];

export const wayangAltTraits: AlternativeRacialTraitData[] = [
  {
    name: "Dissolution's Child",
    description:
      'Once per day, you may change your appearance to look as if you were little more than a 4-foot-tall area of shadow. Your physical form still exists and you are not incorporeal—only your appearance changes. This works like invisibility, except it only lasts 1 round per level (maximum 5 rounds). This is a supernatural ability.',
    replaces: ['Shadow Magic'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'In the Shadows',
    description:
      'Many wayangs perform a variety of unusual roles and tasks in wayang society. They gain a +2 racial bonus on their choice of two of the following skills: Appraise, Bluff, Craft, Profession, and Sleight of Hand.',
    replaces: ['Lurker'],
    source: 'Inner Sea Races',
  },
  {
    name: 'Poison Minion',
    description:
      "Drow sometimes augment their slaves and frontline warriors by making them toxic, causing their bodies to internally produce mawbane poison. The resulting poisonous creature makes a potent weapon in the effort to discourage neighboring monsters. Any creature that hits such a character with a bite attack is immediately exposed to its poison. The save DC for this poison is equal to 10 + 1/2 the character's Hit Dice + the character's Constitution modifier. Mawbane Poison—ingested; save Fortitude as above; frequency 1/round for 4 rounds; effect 1d2 Constitution damage; cure 1 save.",
    replaces: ['Light and Dark', 'Lurker', 'Shadow Resistance'],
    source: 'Blood of the Night',
  },
];

export const batch_005: Record<string, AlternativeRacialTraitData[]> = {
  Samsaran: samsaranAltTraits,
  Strix: strixAltTraits,
  Suli: suliAltTraits,
  Svirfneblin: svirfneblinAltTraits,
  Vanara: vanaraAltTraits,
  Vishkanya: vishkanyaAltTraits,
  Wayang: wayangAltTraits,
};
