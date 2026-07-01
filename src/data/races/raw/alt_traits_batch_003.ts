// Batch 003 | first: 'Kobold' | last: 'Undine' | races: 8 | traits: 69
import { AlternativeRacialTraitData } from '../types';

export const koboldAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Beast Bond',
    description:
      'Kobolds with this racial trait gain a +2 racial bonus on Handle Animal and Ride checks. Handle Animal and Ride are always class skills for them. This racial trait replaces crafty.',
    replaces: ['crafty'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Day Raider',
    description:
      "Some kobolds rove far from their underground homes, growing accustomed to the light of the sun. Kobolds with this racial trait don't have light sensitivity, and they have low-light vision instead of darkvision. This racial trait replaces darkvision and light sensitivity.",
    replaces: ['darkvision', 'light sensitivity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Dragon Affinity',
    description:
      'Kobold sorcerers with the draconic bloodline or the kobold bloodline (Pathfinder Player Companion: Blood of Dragons) treat their Charisma scores as 2 points higher for all sorcerer spells and class abilities. This racial trait replaces the armor racial trait.',
    replaces: ['armor'],
    source: 'Blood of Dragons',
  },
  {
    name: 'Dragonmaw',
    description:
      'Your draconic heritage makes you smile- not just because it makes you happy, but also because your powerful teeth and jaws are proof of your kinship with a chromatic dragon. You gain a bite attack that deals 1d4 points of damage. Once per day, you can deal 1d6 points of additional energy damage with your bite attack. The damage type depends on your scale color: acid for black or green; electricity for blue; fire for red; cold for white. If you have a different scale color, you still gain a bite attack, but cannot deal the additional energy damage. This racial traits replaces the armor racial trait.',
    replaces: ['armor'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Dragon-Scaled',
    description:
      "Some kobolds are hatched with scales of such vivid color that their connection to a particular sort of chromatic dragon seems undeniable. Whether this coloration is just a quirk of a stray egg or a trait shared by all the members of a tribe, these kobolds gain a resistance that makes them especially suited to work alongside dragons matching the color of the kobold's scales. Black-scaled and green-scaled kobolds with this racial trait gain acid resistance 5. Blue-scaled kobolds with this racial trait gain electricity resistance 5. Red-scaled kobolds with this racial trait gain fire resistance 5. White-scaled kobolds with this racial trait gain cold resistance 5. This racial trait replaces the armor racial trait.",
    replaces: ['armor'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Echo Whistler',
    description:
      "Three times per day, you can attempt to trick someone by making a Bluff check against the listener's Sense Motive check. You get a +2 circumstance bonus on this check if you're in tunnels. This racial trait replaces crafty.",
    replaces: ['crafty'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Frightener',
    description:
      'You gain a +1 racial bonus to the DC of saving throws against spells you cast with the fear descriptor. This racial trait replaces the armor racial trait.',
    replaces: ['armor'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Gliding Wings',
    description:
      'Some kobolds are born with wings that, while too weak for actual flying, do allow them to fall at a very slow and safe pace. A kobold with wings can use them to glide. It can make a DC 15 Fly check to fall safely from any height without taking falling damage, as if using feather fall. When falling safely, it may make an additional DC 15 Fly check to glide, moving 5 feet laterally for every 20 feet it falls. This racial trait replaces crafty.',
    replaces: ['crafty'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Jester',
    description:
      'Kobolds with this racial trait gain a +2 racial bonus on Diplomacy and Perform checks. Diplomacy and Perform are always class skills for them. This racial trait replaces crafty.',
    replaces: ['crafty'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Prehensile Tail',
    description:
      "Your tail is especially flexible and strong, so you've learned to use it for both movement and simple tricks. You gain a +2 racial bonus on Acrobatics and Climb checks, and you can use your tail to draw a hidden weapon as a move action instead of as a standard action. This racial trait replaces the armor racial trait.",
    replaces: ['armor'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Secret Strider',
    description:
      'Twice per day, you can move through natural surroundings without leaving a trail for 1 minute, increasing the DC of any attempts to track you by 10. This racial trait replaces crafty.',
    replaces: ['crafty'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Shoulder to Shoulder',
    description:
      'You can occupy the same space as one other Small ally without penalty. If you share a space with another kobold who has this trait, you each gain a +1 circumstance bonus to AC. This racial trait replaces crafty.',
    replaces: ['crafty'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Spellcaster Sneak',
    description:
      'You gain a +2 racial bonus on Stealth checks, and once per day you can gain the benefit of the Silent Spell feat on a spell you cast. This racial trait replaces crafty.',
    replaces: ['crafty'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Wild Forest Kobold',
    description:
      'You gain a +2 racial bonus on Perception and Survival checks, and Stealth and Survival are always class skills for you. This racial trait replaces crafty.',
    replaces: ['crafty'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Wyrmcrowned',
    description:
      'Choose either Diplomacy or Intimidate. You gain a +2 racial bonus on checks with that skill, and it is always a class skill for you. This racial trait replaces crafty.',
    replaces: ['crafty'],
    source: 'Advanced Race Guide',
  },
];

export const orcAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Dayrunner',
    description:
      'Orcs refuse to yield to any foe, including the sun. Some spend hour upon hour glaring at the sun until their ruined eyes acclimatize to bright light. Orcs with this racial trait take a -2 penalty on all ranged attack rolls. This racial trait replaces light sensitivity.',
    replaces: ['light sensitivity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Feral',
    description:
      'Orcs have the ability to fend for themselves long before they master the rudiments of their language and culture. Having needed to hunt bugs and tiny animals for food to survive while still infants, feral orcs fight all the harder to survive when at the brink of death. Orcs with this racial trait gain Survival as a class skill and gain a +1 racial bonus on melee weapon attack and damage rolls when at negative hit points. Feral orcs without additional languages due to high Intelligence scores or ranks in Linguistics can only communicate with grunts and gestures. This racial trait replaces weapon familiarity and the orc automatic languages.',
    replaces: ['weapon familiarity', 'automatic languages'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Reckless Climber',
    description:
      'Mountain-dwelling orcs thrive on taking insane risks to defeat foes and show up rivals. They gain a +4 racial bonus on Climb checks without rope and on Acrobatics checks to maintain balance. This racial trait replaces ferocity.',
    replaces: ['ferocity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Smeller',
    description:
      'Orcs with this racial trait gain a limited scent ability with half the normal range. This racial trait replaces ferocity and weapon familiarity.',
    replaces: ['ferocity', 'weapon familiarity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Squalid',
    description:
      'Some orcs exist in surroundings so filthy and pestilent that even other orcs would have difficulty living in them. Orcs with this racial trait gain a +2 racial bonus on saving throws made to resist nausea, the sickened condition, and disease. This racial trait replaces ferocity.',
    replaces: ['ferocity'],
    source: 'Advanced Race Guide',
  },
];

export const oreadAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Crystalline Form',
    description:
      'Oreads with this trait gain a +2 racial bonus to AC against rays thanks to their reflective crystalline skin. In addition, once per day, they can deflect a single ray attack targeted at them as if they were using the Deflect Arrows feat. This racial trait replaces earth affinity.',
    replaces: ['earth affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Earth Insight',
    description:
      "Oread spellcasters sometimes find that their elemental heritage makes creatures of earth more willing to serve them. Summon monster and summon nature's ally spells that such oreads cast last 2 rounds longer than normal when used to summon creatures with the earth subtype. This racial trait replaces earth affinity.",
    replaces: ['earth affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Ferrous Growth',
    description:
      'Once per day, such an oread can cause a touched piece of non-magical iron or steel to grow into an object up to 10 pounds in weight, such as a sword, crowbar, or light steel shield. This object remains in this form for 10 minutes or until broken or destroyed, at which point it shrinks back to its original size and shape. This racial trait replaces the spell-like ability racial trait.',
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fertile Soil',
    description:
      'Oread sorcerers with the verdant bloodline treat their Charisma score as 2 points higher for all sorcerer spells and class abilities. Oread clerics with the Plant domain use their domain powers and spells at +1 caster level. This racial trait replaces earth affinity.',
    replaces: ['earth affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Granite Skin',
    description:
      'Rocky growths cover the skin of oreads with this racial trait. They gain a +1 racial bonus to natural armor. This racial trait replaces energy resistance.',
    replaces: ['energy resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Isolated',
    description:
      'Many oreads are loners and raise their families in isolated groups, either in deep caverns or high mountains. They gain a +2 racial bonus on Perception checks and Knowledge (dungeoneering) checks, and they can use Knowledge (dungeoneering) untrained. They begin play speaking only Terran, rather than Common and Terran. This racial trait replaces energy resistance and alters the oread’s starting languages.',
    replaces: ['energy resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Mountain-Born',
    description:
      "Oreads are drawn to mountains and other high places, and after many generations they've grown well suited to their environment. Oreads with this racial trait gain a +2 racial bonus on Acrobatics checks made to cross narrow ledges and on saves against altitude fatigue and sickness. This racial trait replaces the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Mostly Human',
    description:
      'A few oreads have appearances much closer to those of their human ancestors; in fact, they may not even realize their true race. Such geniekin appear to be human, save perhaps minor features like unusual eye color, and they count as humanoid (human) as well as outsider (native) for all purposes (such as humanoid-affecting spells such as charm person or enlarge person). These geniekin do not automatically gain their associated elemental language (but may select it as a bonus language if their Intelligence is high enough). This ability alters the geniekin’s type, subtype, and languages.',
    replaces: ['type', 'subtype', 'languages'],
    source: 'Blood of Angels',
  },
  {
    name: 'Oread Gem Magic',
    description:
      'Oreads with this racial trait can augment their earth-related spells and spell-like abilities through the use of precious and semiprecious gemstones as additional material components (see Table: Oread Gem Magic below). The gems are destroyed in the process, granting the spell the listed effects in addition to its normal effects unless otherwise noted. Only one instance of oread gem magic can be applied to a spell at a time; excess expended gems do not stack. This racial trait replaces the earth affinity racial trait.',
    replaces: ['earth affinity'],
    source: 'Blood of the Elements',
  },
  {
    name: 'Stone in the Blood',
    description:
      "Oreads with this racial trait mimic the healing abilities of the mephits, gaining fast healing 2 for 1 round anytime they are subject to acid damage (the acid damage does not need to overcome the oread's resistances or immunities to activate this ability). The oread can heal up to 2 hit points per level per day with this ability, after which it ceases to function. This racial trait replaces earth affinity.",
    replaces: ['earth affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Treacherous Earth',
    description:
      'Once per day, an oread with this racial trait can will the earth to rumble and shift, transforming a 10-foot-radius patch of earth, unworked stone, or sand into an area of difficult terrain for minutes equal to oread level. This racial trait replaces the spell-like ability racial trait.',
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Gemsoul (Crystal Oread)',
    description:
      'Some oreads have a stronger connection to the element of earth through crystalline beings. Gemsouls have ability score modifiers of +2 Str, +2 Cha, -2 Wis. Gemsouls gain color spray as a spell-like ability. This racial trait replaces the earth affinity racial trait.',
    replaces: ['earth affinity'],
    source: "Plane-Hopper's Handbook",
  },
  {
    name: 'Ironsoul (Metal Oread)',
    description:
      'Some oreads have a stronger connection to the element of earth through beings of metal. Ironsouls have ability score modifiers of +2 Con, +2 Wis, -2 Dex. Ironsouls gain unerring weapon as a spell-like ability. This racial trait replaces the earth affinity racial trait.',
    replaces: ['earth affinity'],
    source: "Plane-Hopper's Handbook",
  },
];

export const ratfolkAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Cornered Fury',
    description:
      'Ratfolk can fight viciously when cut off from friends and allies. Whenever a ratfolk with this racial trait is reduced to half or fewer of his hit points, and has no conscious ally within 30 feet, he gains a +2 racial bonus on melee attack rolls and to Armor Class. This racial trait replaces swarming.',
    replaces: ['swarming'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Market Dweller',
    description:
      'Some ratfolk are practiced at taking advantage of foes. They gain a +2 racial bonus on Bluff, Sense Motive, and Sleight of Hand checks. This racial trait replaces tinker.',
    replaces: ['tinker'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Scent',
    description:
      'Some ratfolk have much more strongly developed senses of smell, instead of keen eyes and ears. These ratfolk have the scent ability, but take a -2 penalty on all Perception checks based primarily on sight or hearing. This racial trait replaces tinker.',
    replaces: ['tinker'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Skulk',
    description:
      'Some ratfolk can blend easily into their environments, and move with surprising grace. Ratfolk gain a +2 racial bonus on Stealth checks, and take only a -5 penalty on Stealth checks made to hide from creatures they have distracted with a Bluff check (rather than the normal -10 penalty). This racial trait replaces tinker.',
    replaces: ['tinker'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Unnatural',
    description:
      "Some ratfolk unnerve normal animals, and train to defend themselves against the inevitable attacks from such creatures. These ratfolk take a -4 penalty on all Charisma-based skill checks to affect creatures of the animal type, and receive a +2 dodge bonus to AC against animals. An animal's starting attitude toward ratfolk is one step worse than normal. This racial trait replaces rodent empathy.",
    replaces: ['rodent empathy'],
    source: 'Advanced Race Guide',
  },
];

export const sylphAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Air Insight',
    description:
      "Sylph spellcasters sometimes find that their elemental heritage makes creatures of air more willing to serve them. Summon monster and summon nature's ally spells that the sylph casts last 2 rounds longer than normal when used to summon creatures with the air subtype. This racial trait replaces air affinity.",
    replaces: ['air affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Breeze-Kissed',
    description:
      "A sylph with this racial trait surrounds herself with swirling winds, gaining a +2 racial bonus to AC against non-magical ranged attacks. The sylph can calm or renew these winds as a swift action. Once per day, the sylph can channel this wind into a single gust, making a bull rush or trip combat maneuver attempt against one creature within 30 feet. Whether or not the attempt succeeds, the winds are exhausted and no longer provide a bonus to the sylph's AC for 24 hours. This is a supernatural ability. This racial trait replaces air affinity.",
    replaces: ['air affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Like the Wind',
    description:
      'A sylph with this racial trait gains a +5 foot bonus to her base speed. This racial trait replaces energy resistance.',
    replaces: ['energy resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Mostly Human',
    description:
      'A few sylphs have appearances much closer to those of their human ancestors; in fact, they may not even realize their true race. Such geniekin appear to be human, save perhaps minor features like unusual eye color, and they count as humanoid (human) as well as outsider (native) for all purposes (such as humanoid-affecting spells such as charm person or enlarge person). These geniekin do not automatically gain their associated elemental language (but may select it as a bonus language if their Intelligence is high enough). This ability alters the geniekin’s type, subtype, and languages.',
    replaces: ['type', 'subtype', 'languages'],
    source: 'Blood of Angels',
  },
  {
    name: 'Sky Speaker',
    description:
      'Sylphs with this racial trait feel kinship toward the creatures of the air, and can use speak with animals once per day to speak to birds or other flying animals. Her caster level for these effects is equal to her level. This racial trait replaces the spell-like ability racial trait.',
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Secretive',
    description:
      'Sylphs gain a +2 racial bonus on saving throws against enchantment and divination spells and effects. This racial trait replaces energy resistance and the spell-like ability racial trait.',
    replaces: ['energy resistance', 'spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Storm in the Blood',
    description:
      'A sylph with this racial trait gains fast healing 2 for 1 round anytime she takes electricity damage (whether or not this electricity damage gets through her electricity resistance). The sylph can heal up to 2 hit points per level per day with this ability, after which it ceases to function. This racial trait replaces air affinity.',
    replaces: ['air affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Thunderous Resilience',
    description:
      'Sylphs with this racial trait gain sonic resistance 5. This racial trait replaces energy resistance.',
    replaces: ['energy resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Weather Savvy',
    description:
      "Some sylphs are so in tune with the air and sky that they can sense the slightest change in atmospheric conditions. Sylphs with this trait can spend a full-round action to predict the weather in an area for the next 24 hours. The sylph's prediction is always accurate, but cannot account for spells or supernatural effects that might alter the forecast. This racial trait replaces the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Whispering Wind',
    description:
      'Some sylphs are especially thin and wispy, as though they were made more of air than flesh. Sylphs with this racial trait gain a +4 racial bonus on Stealth checks. This racial trait replaces the spell-like ability racial trait.',
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Smokesoul (Fume Sylph)',
    description:
      'Veiled and surreptitious, smokesoul sylphs are natural deceivers, always concealing their true intentions. Smokesouls have ability score modifiers of +2 Dex, +2 Cha, -2 Con. Smokesouls gain blurred movement as a spell-like ability. Their smoke affinity racial trait functions as the base sylph’s air affinity, but benefits sorcerers with the shadow bloodline and spellcasters with the Smoke subdomain instead.',
    replaces: ['air affinity'],
    source: "Plane-Hopper's Handbook",
  },
  {
    name: 'Stormsoul (Lightning Sylph)',
    description:
      'With an abundance of confidence and a shortage of patience, stormsoul sylphs are personalities who cannot be ignored. Stormsouls have ability score modifiers of +2 Dex, +2 Cha, -2 Wis. Stormsouls gain shocking grasp as a spell-like ability. Their lightning affinity racial trait functions as the base sylph’s air affinity, but benefits sorcerers with the stormborn bloodline and spellcasters with the Weather domain instead.',
    replaces: ['air affinity'],
    source: "Plane-Hopper's Handbook",
  },
];

export const tenguAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Carrion Sense',
    description:
      "Many tengus have a natural ability to sniff out carrion. While their sense of smell isn't as keen as that of other species, it is particularly attuned to the scent of injuries or death. Tengus with this racial trait have a limited scent ability, which only functions for corpses and badly wounded creatures (50% or fewer hit points). This racial trait replaces gifted linguist.",
    replaces: ['gifted linguist'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Claw Attack',
    description:
      'Tengus with this racial trait have learned to use their claws as natural weapons. They gain two claw attacks as primary natural attacks that deal 1d3 points of damage, and are treated as having the Improved Unarmed Strike feat for the purpose of qualifying for other feats. As a tengu with this trait gains levels, his claw attacks improve. At 5th level, the tengu’s claw attacks deal 1d4 points of damage. At 9th level, the tengu can make claw attacks at a +0 bonus and they deal 1d6 points of damage. This racial trait replaces swordtrained.',
    replaces: ['swordtrained'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Deft Swords',
    description:
      'Some tengu learn dazzling blade techniques that allow them to use their weapons to protect against combat maneuvers. They gain a +2 dodge bonus to CMD while wielding a swordlike weapon. This racial trait replaces the natural weapon and sneaky racial traits.',
    replaces: ['natural weapon', 'sneaky'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Exotic Weapon Training',
    description:
      'Instead of swords, some tengus are trained in exotic weaponry. Such tengus choose a number of eastern weapons equal to 3 + their Intelligence bonus, and gain proficiency with these weapons. This racial trait replaces swordtrained.',
    replaces: ['swordtrained'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Glide',
    description:
      'Some tengus can use their feathered arms and legs to glide. Tengus with this racial trait can make a DC 15 Fly check to fall safely from any height without taking falling damage, as if using feather fall. When falling safely, a tengu may make an additional DC 15 Fly check to glide, moving 5 feet laterally for every 20 feet he falls. This racial trait replaces gifted linguist.',
    replaces: ['gifted linguist'],
    source: 'Advanced Race Guide',
  },
];

export const tieflingAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Beguiling Liar',
    description:
      "These tieflings' practice of telling habitual falsehoods grants them a +4 racial bonus on Bluff checks to convince an opponent that what they are saying is true when they tell a lie. This racial trait replaces skilled.",
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Bullying',
    description:
      'Tieflings are often disparaged and kept low in the social order, where they commonly resort to robbing those weaker than themselves. Tieflings with this racial trait gain a +1 racial bonus on combat maneuver checks to disarm or steal. This racial trait replaces skilled.',
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fiendish Sprinter',
    description:
      'Tieflings with this trait gain a 10-foot racial bonus to their speed when using the charge, run, or withdraw actions. This racial trait replaces skilled.',
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Light from the Darkness',
    description:
      "Tieflings who deny the evil of their heritage to go on to become heroes refuse to use the dark magic of their blood, but their struggle grants them uncanny resilience against evil's touch. As long as they retain a good alignment, they gain the aasimar's incorruptible alternate racial trait. This racial trait replaces the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Maw or Claw',
    description:
      'The tiefling can choose a bite attack that deals 1d6 points of damage or two claws that each deal 1d4 points of damage. These attacks are primary natural attacks. This racial trait replaces the spell-like ability racial trait.',
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Pass for Human',
    description:
      "Discrimination against tieflings with horrifically fiendish features is so intense that even tieflings look up to those precious few of their kind who can pass as human. These tieflings have otherworldly features that are so subtle, they aren't often noticed unless the tiefling points them out (for example, eyes that flash red in the throes of passion, or fingernails that are naturally hard and pointed). Such a tiefling doesn't need to succeed at a Disguise check to appear to be human and count as humanoid (human) as well as outsider (native) for all purposes (such as humanoid-affecting spells like charm person or enlarge person). The tiefling does not automatically gain his associated outsider language (but may select it as a bonus language if his Intelligence score is high enough), and he may not select other racial traits that would grant him obviously fiendish features (such as the fiendish sprinter, maw or claw, prehensile tail, scaled skin, or vestigial wings alternate racial traits). This ability alters the tiefling's type, subtype, and languages.",
    replaces: ['type', 'subtype', 'languages'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Prehensile Tail',
    description:
      'Many tieflings have tails, but some have long, flexible tails that can be used to carry items. While they cannot wield weapons with their tails, they can use them to retrieve small, stowed objects carried on their persons as a swift action. This racial trait replaces fiendish sorcery.',
    replaces: ['fiendish sorcery'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Scaled Skin',
    description:
      'A tiefling with this trait gains resistance 5 in the chosen energy type and also gains a +1 natural armor bonus to AC. This racial trait replaces fiendish resistance.',
    replaces: ['fiendish resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Smite Good',
    description:
      "Once per day, a tiefling with this racial trait can smite a good-aligned creature. As a swift action, the tiefling chooses one target within sight to smite. If this target is good, the tiefling adds her Charisma bonus (if any) to attack rolls against the target and gains a bonus on damage rolls against the target equal to her number of Hit Dice. This effect lasts until the first time the tiefling successfully hits her designated target. This racial trait replaces fiendish sorcery and the tiefling's spell-like ability.",
    replaces: ['fiendish sorcery', 'spell-like ability'],
    source: 'Agents of Evil',
  },
  {
    name: 'Soul Seer',
    description:
      'Rare tieflings have a peculiar sight that allows them to see the state of a creature’s soul. They can use deathwatch at will as spell-like ability. This racial trait replaces the spell-like ability and fiendish sorcery racial traits.',
    replaces: ['spell-like ability', 'fiendish sorcery'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Underworld Guide',
    description:
      "Those who brave the lightless tunnels below the world's surface learn to identify the dangerous phenomena that characterize the Underworld. Characters with this trait gain a +2 bonus on initiative checks, and on saves against traps and hazards when underground (from a lifetime of dodging accursed pools, cave-ins, and green slime). Tieflings can take this trait in place of the darkness spell-like ability.",
    replaces: ['spell-like ability'],
    source: 'The Inner Sea World Guide',
  },
  {
    name: 'Vestigial Wings',
    description:
      'Some tieflings possess a pair of undersized, withered, or stunted wings like a mockery of those of their fiendish forbearer. Sometimes these wings are leathery, like those of a bat. Other times they are covered with a scattering of black, red, or violet feathers. Rare manifestations can take even more bizarre forms. These wings do not provide the lift required for actual flight, but do have enough power to aid flight attained by some other method, and grant a +4 racial bonus on Fly skill checks. This racial trait replaces skilled.',
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
];

export const undineAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Acid Breath',
    description:
      "Undines whose outsider heritage can be traced to a water mephit can wield acid as a weapon. Such an undine has a breath weapon that is a 5-foot cone of acidic water usable once per day. The breath deals 1d8 points of acid damage per two character levels (maximum 5d8). A Reflex saving throw (DC 10 + 1/2 the undine's level + the undine's Constitution modifier) halves the damage. This racial trait replaces the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Amphibious',
    description:
      'Some undines are born with a permanent bond to water. Undines with this racial trait gain the aquatic subtype and amphibious special quality. This racial trait replaces the spell-like ability racial trait.',
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Deepsight',
    description:
      'The eyes of some undines are especially adapted to the lightless depths of the oceans, but not to air-filled environments. An undine with this racial trait has darkvision 120 feet when underwater, but otherwise has no darkvision at all. This racial trait replaces darkvision.',
    replaces: ['darkvision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Flesh Chameleon',
    description:
      'Some undines can change their coloration to match human skin tones. As a standard action, an undine with this racial trait can change her natural blue hue to match any normal human skin tone, and can revert to normal as a free action. This grants a +4 racial bonus on Disguise checks to appear human. This racial trait replaces energy resistance.',
    replaces: ['energy resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Hydrated Vitality',
    description:
      'An undine with this racial trait gains fast healing 2 for 1 round anytime she submerges completely within a body of natural salt water, fresh water, or brackish water. Stagnant, poisoned, or trapped water (such as an artificial pit or a bag of holding) does not activate this ability. The undine can heal up to 2 hit points per level per day with this ability, after which it ceases to function. This racial trait replaces water affinity.',
    replaces: ['water affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Mostly Human',
    description:
      'A few undines have appearances much closer to those of their human ancestors; in fact, they may not even realize their true race. Such geniekin appear to be human, save perhaps minor features like unusual eye color, and they count as humanoid (human) as well as outsider (native) for all purposes (such as humanoid-affecting spells such as charm person or enlarge person). These geniekin do not automatically gain their associated elemental language (but may select it as a bonus language if their Intelligence is high enough). This ability alters the geniekin’s type, subtype, and languages.',
    replaces: ['type', 'subtype', 'languages'],
    source: 'Blood of Angels',
  },
  {
    name: 'Nereid Fascination',
    description:
      "Some undines can trace their ancestry to nereids as well as to outsiders. Once per day as a standard action, such an undine can create a 20-foot-radius aura that causes humanoids within the aura's range to become fascinated with her for a number of rounds equal to 1/2 the undine's character level (minimum 1). Targets may resist with a Will save (DC 10 + 1/2 the undine's level + the undine's Charisma modifier). This is a supernatural ability. This racial trait replaces the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Ooze Breath',
    description:
      "Some undines' outsider heritage can be traced to ooze mephits. These undines have a breath weapon that is a 5-foot cone of slime usable once per day. The slime deals 1d4 points of acid damage per two character levels (maximum 5d4) and sickens creatures in the area for 3 rounds. A successful Reflex saving throw (DC 10 + 1/2 the undine's level + the undine's Constitution modifier) halves the damage and negates the sickened effect. This racial trait replaces the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Terrain Chameleon',
    description:
      'Some undines can change their coloration to blend in with underwater terrain, mixing browns, grays, and greens to resemble kelp or other natural water plants. As a standard action, an undine with this racial trait can change her coloration, gaining a +4 bonus on Stealth checks in underwater environments. She can return to normal as a free action. This racial trait replaces energy resistance.',
    replaces: ['energy resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Triton Magic',
    description:
      "Some undines descend from tritons, rather than genies. Undines with this racial trait can use summon nature's ally I as a spell-like ability, but only to summon a dolphin. This racial trait replaces the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Water Sense',
    description:
      'Undines with this racial trait can sense vibrations in water, granting them blindsense 30 feet against creatures in contact with the same body of water. This racial trait replaces energy resistance.',
    replaces: ['energy resistance'],
    source: 'Advanced Race Guide',
  },
];

export const batch_003: Record<string, AlternativeRacialTraitData[]> = {
  Kobold: koboldAltTraits,
  Orc: orcAltTraits,
  Oread: oreadAltTraits,
  Ratfolk: ratfolkAltTraits,
  Sylph: sylphAltTraits,
  Tengu: tenguAltTraits,
  Tiefling: tieflingAltTraits,
  Undine: undineAltTraits,
};
