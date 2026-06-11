// Batch 007 | first: 'Gathlain' | last: 'Trox' | races: 9 | traits: 41
// Checkpoint notes:
// - All nine races sourced from d20pfsrd .../more-races/advanced-races-11-20-rp/<slug>/
//   (Trox under .../monstrous-races-21-30-rp/trox-28-rp/). ARG-style URLs (arg-<slug>) and
//   uncommon-races/<slug> 404'd; the correct path is the "more-races/advanced-races-11-20-rp"
//   tree. legacy.aonprd.com and WebSearch were denied; AoN RacesDisplay returned only nav.
// - Source code mapping (verified on pages): PZO9280 = Advanced Race Guide;
//   PZO1140 = Heroes of the Wild; PZO9470 = Blood of the Beast;
//   PPC:WO = Wilderness Origins; PPC:HoG = Heroes of the Darklands;
//   PZO9280 (Inner Sea Bestiary base races) ART sources are as listed per-trait.
//   Gathlain traits with no source code on the page are base Advanced Race Guide.
// - Wyvaran: 8 third-party (Jon Brazer Enterprises, JBE:BoHR:AWyv) ARTs were EXCLUDED per
//   official-Paizo-only rule; only the 5 PZO9280/PZO9470 traits are included.
// - Kasatha (1 ART), Lashunta (1 ART), Syrinx (1 ART), Trox (1 ART): single official ART each.
import { AlternativeRacialTraitData } from '../types';

export const gathlainAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Arboreal Vitality',
    description:
      'Some gathlains draw exceptional nourishment from any kind of tree through their wings, although their wings are much more delicate. A gathlain with this racial trait has a fly speed of only 20 feet (poor maneuverability) but gains fast healing 2 for 1 round whenever he is adjacent to a living tree larger than he is. The gathlain can heal up to 2 hit points per level per day with this ability, after which it ceases to function.',
    replaces: ['Fly Speed'],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },
  {
    name: 'Body Thorns',
    description:
      'Gathlains that mature in particularly hostile environments develop thorns on their vines to protect them from overeager herbivores. You are considered to be wearing masterwork armor spikes when not wearing armor or bulky clothing, and are proficient with armor spikes. These thorns can be sundered or destroyed as if they were a worn object (hardness 1, 5 hp), but grow back 1 week later.',
    replaces: ['Spell-Like Abilities'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
  {
    name: 'Bower Born',
    description:
      'Some gathlain sprout beautiful but delicate hibiscus flowers on their vines and emit a seductive pheromone. You gain a +2 racial bonus on Diplomacy and Handle Animal checks.',
    replaces: ['Natural Armor'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
  {
    name: 'Fey Resilience',
    description:
      'Even gathlains who leave the First World can retain a bit of the supernatural resilience shared by many fey. A gathlain with this racial trait gains DR 1/cold iron. This DR increases by 1 for every 5 HD the gathlain has.',
    replaces: ['Spell-Like Abilities'],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },
  {
    name: 'Flighty',
    description:
      'Some gathlains are too easily distracted to miss anything going on around them. They gain Perception as a class skill and gain a +2 racial bonus on saving throws against patterns and effects that cause the fascinated condition.',
    replaces: ['Natural Armor'],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },
  {
    name: 'Honey Whisperer',
    description:
      'Some gathlains keep bees of all sizes, collecting their honey and sometimes even riding the largest of them. They can use Handle Animal and wild empathy to influence vermin as if they were animals with an Intelligence score of 1.',
    replaces: ['Natural Armor'],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },
  {
    name: 'Intense Curiosity',
    description:
      'Some gathlains habitually fixate on someone or something nearby and examine its every detail. When taking 20 on the check, they gain a +4 racial bonus on Perception and Survival checks to find and follow tracks and to predict the weather.',
    replaces: ['Spell-Like Abilities'],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },
  {
    name: 'Natural Bounty',
    description:
      "Some gathlains command natural plants in a different way, with their control increasing as they grow more powerful. Once per day, a gathlain with this racial trait can cast goodberry as a spell-like ability. When the gathlain's character level reaches 9th, he can cast plant growth (overgrowth only) as a spell-like ability once per day, and at 13th level, he can cast heroes' feast as a spell-like ability once per day. The gathlain's caster level for these abilities is equal to his character level.",
    replaces: ['Natural Armor', 'Spell-Like Abilities'],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },
  {
    name: 'Nimbus of Vitality',
    description:
      'Gathlains sometimes are able to channel life-giving energy. As a standard action once per day, they can surround themselves in an aura that affects them as faerie fire and grants fast healing 2. The nimbus lasts for 3 rounds plus 1 additional round per 2 character levels the gathlain possesses.',
    replaces: ['Spell-Like Abilities'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
  {
    name: 'Otherworldly Gossip',
    description:
      "Many gathlains excitedly share every last bit of gossip they can find. These gathlains gain a +2 racial bonus on Diplomacy checks to gather information and on checks with one Knowledge skill of the gathlain's choice. Once the choice of Knowledge skill is made, it can't be changed.",
    replaces: ['Spell-Like Abilities'],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },
  {
    name: 'Photosynthetic Vision',
    description:
      "Occasionally the tendrils of a gathlain's symbiotic vines wrap around the gathlain's face like a leafy mask. You gain a +2 racial bonus on Perception checks.",
    replaces: ['Low-Light Vision'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
  {
    name: 'Soaring Agility',
    description:
      'A gathlain whose seed spends a long time drifting through the air before coming to rest grows with a natural aerial agility. Gathlains with this racial trait gain a +1 dodge bonus to AC against attacks originating from at least 20 feet below the gathlain.',
    replaces: ['Natural Armor'],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },
  {
    name: 'Sticky Tendrils',
    description:
      'When a gathlain seed finds itself taking root in an environment that warps and changes erratically, the resulting gathlain learns to cling tenaciously with its vines. You can cling to walls and even ceilings as long as the surface has handholds, and it is treated as being constantly under the effects of a non-magical spider climb spell (except that you may not cling to smooth surfaces). Your vines provide only the ability to glide rather than true flight; you take no damage from falling, as if subject to a constant non-magical feather fall spell. While in midair, you can move up to 5 feet horizontally for every 1 foot you fall, at a speed of 60 feet per round. You cannot gain height with your wings, but instead coast in other directions as you fall. If subjected to strong winds or any other effect that causes you to rise, you can take advantage of this updraft to increase the distance you can glide.',
    replaces: ['Fly Speed'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
  {
    name: 'Symbiotic Imbalance',
    description:
      "Occasionally the conditions for a gathlain seed's growth heavily favor the plant portion of its body, causing more nutrients to go to the building of its vine wings and fewer to developing the gathlain's legs. These gathlains have larger wings than normal. They have a base speed of 20 feet and a fly speed of 40 feet (average).",
    replaces: ['Speed'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
  {
    name: 'Titled',
    description:
      'Certain gathlains play at the games of courtly intrigue that dominate much of Fey World culture, assuming titles that other fey may or may not recognize. These gathlains treat Bluff, Diplomacy, and Knowledge (nobility) as class skills.',
    replaces: ['Feather Step'],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },
  {
    name: 'Tree-Born',
    description:
      'Some gathlains take after their tree ancestors, standing more firmly but moving more slowly. They have no Constitution penalty but have a base speed of 20 feet and a fly speed of 30 feet (clumsy maneuverability).',
    replaces: ['Constitution Penalty', 'Speed'],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },
  {
    name: 'Tree Dialect',
    description:
      "A rare few gathlains are born with the knowledge of an ancient way of speech that allows them to communicate with trees. Once per day, they can cast speak with plants (trees only) as a spell-like ability with a caster level equal to the gathlain's character level.",
    replaces: ['Spell-Like Abilities'],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },
  {
    name: 'Whimsical Outlook',
    description:
      'Some gathlains can use their unusual mentality as a defense against efforts to control their minds. Once per day when a gathlain with this trait attempts a Will saving throw, he can roll the saving throw twice and use the better result. He must decide to use this ability before attempting the saving throw.',
    replaces: ['Spell-Like Abilities'],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },
];

export const ghoranAltTraits: AlternativeRacialTraitData[] = [
  {
    name: "Creator's Legacy",
    description:
      "Infused with the druidic magic of their creator, ghorans quickly take to nature-based spells and spellcasting. Ghoran bloodragers and sorcerers with the verdant bloodline treat their Charisma score as 2 points higher for sorcerer spells and class abilities. Ghoran clerics and druids with the Plant domain use their domain powers and spells at +1 caster level. This doesn't give the ghoran early access to level-based powers; it affects only powers that could already be used without this trait.",
    replaces: ['Past-Life Knowledge'],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },
  {
    name: 'Disgusting',
    description:
      'Such ghorans gain a +2 racial bonus on Escape Artist and combat maneuver checks to escape a grapple against any creature that has a bite attack with the grab ability.',
    replaces: ['Delicious', 'Past-Life Knowledge'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
  {
    name: 'Fecund Earth',
    description:
      "Once per day, a ghoran with this racial trait can cast plant growth as a spell-like ability with a caster level equal to the ghoran's character level.",
    replaces: ['Past-Life Knowledge', 'Nature Magic'],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },
  {
    name: 'Intoxicating Aroma',
    description:
      'Once per day, as a spell-like ability, a ghoran with this racial trait can emit an intoxicating aroma that causes creatures within 30 feet to be fascinated for 1d4 rounds.',
    replaces: ['Nature Magic'],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },
  {
    name: 'Magical Absorption',
    description:
      'Whenever such a ghoran succeeds at a saving throw against a spell or spell-like ability, she regains 1 hit point per level of the spell, though this affects the ghoran only if she is above 0 hit points. A ghoran can use this ability a number of times per day equal to her level.',
    replaces: ['Past-Life Knowledge', 'Nature Magic'],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },
  {
    name: 'Martial Recollection',
    description:
      'Whenever ghorans with this racial trait grow new bodies from their seeds, they reselect all combat feats known instead of reallocating skill ranks.',
    replaces: ['Nature Magic'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
  {
    name: 'Natural Camouflage',
    description:
      "Ghorans with this racial trait choose one terrain from the ranger's favored terrain list other than planes, urban, or water. These ghorans gain a +4 racial bonus on Stealth checks when in their chosen terrain.",
    replaces: ['Natural Armor'],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },
  {
    name: 'Occult Scion',
    description:
      'The ghoran gains Psychic Sensitivity as a bonus feat and treats Knowledge (arcana) and Knowledge (planes) as class skills.',
    replaces: ['Past-Life Knowledge'],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },
  {
    name: 'Spelleater',
    description:
      "Once per day, the ghoran can cast dispel magic as a spell-like ability, with a caster level equal to the ghoran's character level. If the ghoran's favored class is a spellcasting class, the ghoran gains a +2 racial bonus on dispel checks.",
    replaces: ['Past-Life Knowledge', 'Nature Magic'],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },
];

export const kasathaAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Stealthy',
    description:
      'Kasatha must often take great pains to hide their existence from others. Such kasathas gain a +2 racial bonus on Stealth checks. Stealth is always a class skill for them.',
    replaces: ['Jumper', 'Stalker'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
];

export const lashuntaAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Insidious Telepathy',
    description:
      'Some lashunta have a knack for manipulating the minds of those they communicate with telepathically. They gain a +1 racial bonus on Charisma-based skill checks to influence any creature with whom they are telepathically communicating. If a lashunta telepathically issues a command to a charmed or dominated creature, she gains a +1 racial bonus on Charisma checks to compel the creature to follow that order.',
    replaces: ['Lashunta Magic'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
];

export const shabtiAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Blank Slate',
    description:
      'Some shabti are bereft of memories of their past lives but can accomplish great improvisations. Shabti with this racial trait can, once per day as a free action, treat any skill as though they had a number of ranks equal to half of their character levels for one skill check (minimum 1 rank).',
    replaces: ['Past Life Knowledge'],
    source: 'Pathfinder Roleplaying Game Bestiary 5',
  },
  {
    name: 'Facsimile',
    description:
      'A few shabti are made with such skill they are nearly perfect copies of a mortal. Shabti with this racial trait appear to be human, save perhaps for minor features like unusual skin color. They count as humanoid (human) as well as outsider (native) for all purposes (such as humanoid-affecting spells like charm person).',
    replaces: ['Immune to Undeath', 'Native Subtype'],
    source: 'Pathfinder Roleplaying Game Bestiary 5',
  },
  {
    name: 'Pharaonic Will',
    description:
      'Rather than working to influence others, some shabti focus inward. Once per day as an immediate action after failing a save against a charm, compulsion, or fear effect, a shabti with this racial trait can reroll the save with a +2 racial bonus.',
    replaces: ['Spell-Like Ability'],
    source: 'Pathfinder Roleplaying Game Bestiary 5',
  },
  {
    name: 'Soul Sympathy',
    description:
      'Crafted to suffer punishments intended for their masters, some shabti can use this mortal connection to serve as reciprocal conduits. As an immediate action after being afflicted by temporary negative levels, a shabti with this racial trait can force the creature that inflicted the negative levels to suffer the same cumulative penalties, hit point loss, and caster level reduction. The shabti can use this ability only on an enemy within 60 feet and can share penalties with only one creature at a time. The shabti can sever this link as a free action.',
    replaces: ['Resist Level Drain'],
    source: 'Pathfinder Roleplaying Game Bestiary 5',
  },
];

export const syrinxAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Oppressive',
    description:
      "As a swift action, a syrinx can attempt a Sense Motive check against a DC of 10 + a creature's Hit Dice + its Charisma modifier or a DC of 10 + the creature's Bluff modifier, whichever is higher. On a success, syrinx gains a +4 racial bonus on Intimidate checks against that target and a +1 racial bonus to the DC of any fear effects she uses against that target.",
    replaces: ['Nocturnal', 'Pride'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
];

export const wyrwoodAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Experimental Body',
    description:
      'Some wyrwoods have been built from rare materials in an effort to imbue them with special properties. Choose one of the following abilities. Blessed: These wyrwoods contain divine relics. Wyrwoods with this trait can use divine favor once per day as a spell-like ability with a caster level equal to their Hit Dice. Enchanted: Crafted from the remnants of broken staves, wands and other items, these wyrwoods have a natural attunement to the arcane. Wyrwoods with this trait treat their Intelligence score as 2 higher for the purpose of determining bonus spells or extracts per day. Fey-Touched: These wyrwoods have components that create a powerful link to the First World. Wyrwoods with this trait can use charm animal once per day as a spell-like ability with a caster level equal to their Hit Dice. Scorched: These wyrwoods are built from the ruins of cities and structures destroyed by conflict. Once per day, after a successful melee attack against an enemy, wyrwoods with this trait can deal an additional number of points of damage equal to their Wisdom modifier as a free action.',
    replaces: ['Darkvision', 'Low-Light Vision'],
    source: 'Pathfinder Player Companion: Heroes of the Darklands',
  },
  {
    name: 'Living Machine',
    description:
      "Through generations of refining the techniques of creation, many young wyrwoods have become closer to organic beings than constructs. These wyrwoods are constructs with the living machine subtype. They gain a Constitution score and can be targeted by spells and effects that target living creatures or constructs, as well as those that require a Fortitude save. They are no longer immune to ability damage, ability drain, energy drain, exhaustion, or fatigue. Wyrwoods with this trait require sleep, but they do not need to breathe or eat. They are not destroyed when reduced to 0 hit points, instead becoming unconscious and stable. They are destroyed when reduced to a negative number of hit points equal to their Constitution score. They can be raised or resurrected when destroyed. This alters the wyrwood's creature type.",
    replaces: ['Construct Type'],
    source: 'Pathfinder Player Companion: Heroes of the Darklands',
  },
  {
    name: 'Repair Magic',
    description:
      'Some wyrwoods have developed magic to keep them more self-sufficient. They can use make whole as a spell-like ability once per day.',
    replaces: ['Darkvision'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
];

export const wyvaranAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Evasive Maneuvers',
    description:
      'Coastal wyvarans often take to the air to defend their territory from intruding ships, and are forced to learn aerial maneuvers to avoid siege fire. They fly with an average maneuverability instead of clumsy, and they gain a +2 dodge bonus to AC and on Reflex saving throws against siege weapons.',
    replaces: ['Darkvision', 'Slapping Tail'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
  {
    name: 'Memories of the Forgotten',
    description:
      'Generations of wyvaran elders pass down tales that predate written history. While many ignore these or dismiss them as simple stories, others revere the lore of their elders. These wyvarans consider it their sacred duty to study the lost histories and pass them down to others. They gain a +2 racial bonus on two Knowledge skills of their choice. Those Knowledge skills are class skills for them.',
    replaces: ['Flight'],
    source: 'Pathfinder Player Companion: Blood of the Beast',
  },
  {
    name: 'Vestigial Wings',
    description:
      'When resources are particularly scarce, some young wyvarans develop smaller-than-average wings incapable of flight. However, these wings are perfectly suited for other acrobatic maneuvers. These wyvarans gain a +2 racial bonus on Acrobatics and Climb checks, and one of these is a class skill for them. In addition, they can ignore the first 20 feet of falling damage when they make a successful Acrobatics check.',
    replaces: ['Flight'],
    source: 'Pathfinder Player Companion: Blood of the Beast',
  },
  {
    name: 'Neglected Heritage',
    description:
      "Because of their dwindling population and cultural stagnation, some wyvarans have given up on their people, favoring a life among other races instead. These wyvarans lose Draconic as a starting language, but gain a +1 racial bonus on Diplomacy checks when making requests and gathering information. They can't take Draconic as a bonus language, but can learn it normally with Linguistics.",
    replaces: ['Languages'],
    source: 'Pathfinder Player Companion: Blood of the Beast',
  },
  {
    name: 'Greed',
    description:
      'Most wyvarans crave treasure, but for some, amassing wealth is a compulsion. Wyvarans with this trait gain a +2 on racial bonus on Appraise checks, and Appraise is a class skill for them. They gain a +2 racial bonus on Sleight of Hand checks when attempting to take items from other creatures. They can also use their tails to attempt these Sleight of Hand checks.',
    replaces: ['Slapping Tail'],
    source: 'Pathfinder Player Companion: Blood of the Beast',
  },
];

export const troxAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Tremorsense',
    description:
      'Some trox have developed a closeness to the earth that helps them thwart the invisibility of their duergar enemies. They gain tremorsense to a range of 30 feet.',
    replaces: ['Frenzy', 'Burrow'],
    source: 'Pathfinder Roleplaying Game: Advanced Race Guide',
  },
];

export const batch_007: Record<string, AlternativeRacialTraitData[]> = {
  Gathlain: gathlainAltTraits,
  Ghoran: ghoranAltTraits,
  Kasatha: kasathaAltTraits,
  Lashunta: lashuntaAltTraits,
  Shabti: shabtiAltTraits,
  Syrinx: syrinxAltTraits,
  Wyrwood: wyrwoodAltTraits,
  Wyvaran: wyvaranAltTraits,
  Trox: troxAltTraits,
};
