import { ArchetypeData, ClassFeatureData } from '../types';

export const CAVALIER_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Beast Rider
  // ──────────────────────────────────────────────
  {
    name: 'Beast Rider',
    className: 'Cavalier',
    description:
      'The beast rider forgoes a traditional horse mount in favor of a more exotic and powerful creature. These cavaliers bond with beasts that are unusual even among the wildest of mounts, gaining a more varied and dangerous companion.',
    replacedFeatures: ['Mount'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Exotic Mount',
        level: 1,
        description:
          "At 1st level, a beast rider must select one of the following creatures as his mount: ape, bear, boar, crocodile, dire bat, elk, horse, pony, shark, or wolf. As the beast rider gains levels, additional and more powerful creatures become available. The mount functions as a druid's animal companion using the cavalier's level as his druid level.",
      },
      {
        name: 'Improved Exotic Mount',
        level: 4,
        description:
          'At 4th level and every 4 levels thereafter, the beast rider may select a more powerful exotic mount from the expanded list, including creatures such as allosaurus, arsinoitherium, brachiosaurus, elephant, glyptodon, hippopotamus, mastodon, or triceratops.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 2. Dragon Knight
  // ──────────────────────────────────────────────
  {
    name: 'Dragon Knight',
    className: 'Cavalier',
    description:
      'The dragon knight is a cavalier who has forged a bond with a dragon, eventually riding it into battle. These cavaliers devote themselves entirely to draconic service, trading the broader benefits of their order for a powerful draconic mount and abilities.',
    replacedFeatures: [
      'Order',
      'Challenge',
      'Mount',
      'Tactician',
      'Expert Trainer',
      'Bonus Feat',
      'Greater Tactician',
      'Demanding Challenge',
      'Master Tactician',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Dragon Servant',
        level: 1,
        description:
          "At 1st level, a dragon knight must select a dragon as his bonded mount. This functions as the cavalier's mount ability, except the dragon knight uses his cavalier level –3 as his effective druid level for determining mount abilities.",
      },
      {
        name: 'Dragon Challenge',
        level: 1,
        description:
          'Once per day, a dragon knight can issue a draconic challenge as a swift action. When he does, he chooses one target within sight. That target takes a –2 penalty on attack rolls against creatures other than the dragon knight, and the dragon knight gains a +2 bonus on damage rolls against the target.',
      },
      {
        name: "Dragon's Fury",
        level: 5,
        description:
          "At 5th level, the dragon knight's challenge damage bonus increases by +2 and he gains a +2 morale bonus on saving throws against the challenged foe's spells and abilities.",
      },
      {
        name: 'Draconic Resistance',
        level: 9,
        description:
          "At 9th level, the dragon knight gains energy resistance 10 of the same type as his draconic mount's breath weapon energy type.",
      },
      {
        name: 'Dragon Ride',
        level: 13,
        description:
          'At 13th level, while mounted on his dragon, the dragon knight and his mount are treated as one size category larger for the purpose of combat maneuver checks.',
      },
      {
        name: 'Draconic Aura',
        level: 17,
        description:
          'At 17th level, the dragon knight radiates an aura of draconic power that gives all allies within 30 feet a +2 morale bonus on attack rolls and saving throws against fear effects.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 3. Emissary
  // ──────────────────────────────────────────────
  {
    name: 'Emissary',
    className: 'Cavalier',
    description:
      'The emissary serves as a diplomatic and martial representative of his order, traveling to foreign lands and speaking for his liege. This cavalier trades some of his battlefield ferocity for social and diplomatic capabilities.',
    replacedFeatures: ['Tactician', 'Greater Tactician', 'Master Tactician'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Diplomatic Training',
        level: 1,
        description:
          'An emissary adds half his cavalier level (minimum 1) as a bonus on all Diplomacy, Knowledge (nobility), and Sense Motive checks.',
      },
      {
        name: "Emissary's Voice",
        level: 5,
        description:
          'At 5th level, once per day the emissary can use his Diplomacy skill in place of an Intimidate check. Additionally, he may attempt to demoralize enemies as a move action rather than a standard action.',
      },
      {
        name: "Improved Emissary's Voice",
        level: 9,
        description:
          'At 9th level, the emissary may use Diplomacy in place of Bluff to feint in combat. He also gains a +4 bonus on Diplomacy checks to negotiate with any creature that is not actively hostile.',
      },
      {
        name: "Superior Emissary's Voice",
        level: 14,
        description:
          'At 14th level, the emissary can attempt to end a combat with words alone, as per the calm emotions spell, once per day as a standard action with a successful Diplomacy check (DC = 15 + the CR of the highest-CR creature in combat).',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 4. Gendarme
  // ──────────────────────────────────────────────
  {
    name: 'Gendarme',
    className: 'Cavalier',
    description:
      'The gendarme is a heavy cavalry soldier who prioritizes raw mounted combat power over the complex tactics and battlefield coordination that typify most cavaliers. These warriors sacrifice some order training for additional combat feats.',
    replacedFeatures: ['Tactician', 'Greater Tactician', 'Master Tactician', 'Demanding Challenge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Mounted Feats',
        level: 1,
        description:
          'At 1st level, a gendarme receives Mounted Combat as a bonus feat. At 5th level he gains Ride-By Attack, at 9th he gains Spirited Charge, at 13th he gains Trample, and at 17th he gains Unseat as bonus feats regardless of prerequisites.',
      },
      {
        name: 'Bonus Combat Feat',
        level: 3,
        description:
          'At 3rd level, and every 3 levels thereafter, a gendarme gains a bonus combat feat. These feats must have Mounted Combat as a prerequisite or must be mounted-combat-related.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 5. Honor Guard
  // ──────────────────────────────────────────────
  {
    name: 'Honor Guard',
    className: 'Cavalier',
    description:
      'The honor guard dedicates himself entirely to the protection of a single individual or organization, subordinating personal glory to the safety of his ward. These cavaliers are consummate defenders whose training revolves around interposing themselves between harm and those they protect.',
    replacedFeatures: ['Challenge', 'Expert Trainer', 'Demanding Challenge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Intercept',
        level: 1,
        description:
          'Once per round, when an adjacent ally is hit by an attack, the honor guard can choose to be hit by that attack instead as an immediate action, taking the full damage and effects of the attack.',
      },
      {
        name: 'Warded Mount',
        level: 1,
        description:
          "An honor guard's mount gains a +2 shield bonus to AC when the honor guard is mounted. This bonus increases by +1 for every 4 cavalier levels beyond 1st.",
      },
      {
        name: 'Call to Arms',
        level: 5,
        description:
          'At 5th level, once per day, the honor guard can spend a swift action to grant all allies within 30 feet a +2 dodge bonus to AC for 1 round. This bonus increases to +4 at 11th level and +6 at 17th level.',
      },
      {
        name: "Honor's Stand",
        level: 9,
        description:
          'At 9th level, once per day as a swift action, the honor guard can designate one ally. Until the start of his next turn, all attacks against that ally that miss hit the honor guard instead if the honor guard is within 5 feet.',
      },
      {
        name: 'Selfless Courage',
        level: 14,
        description:
          'At 14th level, the honor guard gains Mettle (as the hex) and may apply it to adjacent allies rather than only himself. Additionally, he does not take penalties for taking the intercept action.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 6. Hussar
  // ──────────────────────────────────────────────
  {
    name: 'Hussar',
    className: 'Cavalier',
    description:
      'The hussar is a light cavalry specialist who excels at rapid strikes, skirmishing, and harassing enemies before retreating beyond their reach. These cavaliers sacrifice some of their heavy-cavalry power for greater speed and maneuverability.',
    replacedFeatures: ['Mighty Charge', 'Supreme Charge', 'Expert Trainer'],
    modifiedFeatures: ['Mount (light horse or other fast mount)'],
    newFeatures: [
      {
        name: 'Fast Rider',
        level: 1,
        description:
          "A hussar's mount gains a +10-foot enhancement bonus to its base speed. This bonus increases by +5 feet at 5th level and every 4 levels thereafter.",
      },
      {
        name: 'Hit and Run',
        level: 3,
        description:
          'At 3rd level, after making a mounted charge, a hussar and his mount can move up to their speed as part of the same action without provoking attacks of opportunity from the target of the charge.',
      },
      {
        name: 'Skirmish Training',
        level: 9,
        description:
          'At 9th level, a hussar gains a +2 bonus on attack rolls and +1d6 precision damage on any round in which he moves at least 10 feet. These bonuses apply only on ranged attacks or melee attacks against flat-footed opponents.',
      },
      {
        name: 'Rapid Deployment',
        level: 14,
        description:
          'At 14th level, a hussar can mount or dismount as a free action and never takes penalties from the Ride skill for fast movement or difficult terrain while mounted.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 7. Inspiring Commander
  // ──────────────────────────────────────────────
  {
    name: 'Inspiring Commander',
    className: 'Cavalier',
    description:
      'The inspiring commander leads from the front, relying on personal valor and powerful oratory to drive allies to extraordinary effort. This archetype trades some mounted combat excellence for broader leadership and inspiring abilities.',
    replacedFeatures: ['Mount', 'Expert Trainer', 'Mighty Charge', 'Supreme Charge'],
    modifiedFeatures: ['Tactician (expanded)'],
    newFeatures: [
      {
        name: 'Inspiring Speech',
        level: 1,
        description:
          'At 1st level, once per day as a standard action, the inspiring commander delivers an inspiring speech granting all allies within 60 feet a +2 morale bonus on attack rolls, damage rolls, and saving throws against fear for a number of rounds equal to his Charisma modifier (minimum 1). This ability can be used one additional time per day at 5th level and every 4 levels thereafter.',
      },
      {
        name: 'By Example',
        level: 3,
        description:
          'At 3rd level, whenever the inspiring commander confirms a critical hit or reduces an enemy to 0 or fewer hit points, all allies within 30 feet gain a +1 morale bonus on attack rolls for 1 round.',
      },
      {
        name: 'Rally',
        level: 7,
        description:
          'At 7th level, once per day as a swift action, the inspiring commander can end a fear or shaken effect on all allies within 30 feet. The affected allies are immune to fear for 1 round after.',
      },
      {
        name: 'War Cry',
        level: 11,
        description:
          'At 11th level, once per day, the inspiring commander may release a fearsome war cry as a free action when rolling initiative, granting all allies within 60 feet a +4 bonus on their initiative checks and causing all enemies within that range to become shaken for 1 round (Will DC 10 + half cavalier level + Cha modifier negates).',
      },
      {
        name: 'Battlefield Presence',
        level: 15,
        description:
          'At 15th level, all allies within 30 feet of the inspiring commander automatically pass saving throws against the shaken condition and receive a +2 morale bonus on saving throws against all fear effects. These benefits apply as long as the inspiring commander is conscious.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 8. Knight of the Sepulcher
  // ──────────────────────────────────────────────
  {
    name: 'Knight of the Sepulcher',
    className: 'Cavalier',
    description:
      'The knight of the sepulcher is an antipaladin-tinged cavalier who has pledged his service to death and undeath, slowly transforming into an undead creature himself. These dark cavaliers exchange some standard abilities for the durability and resilience of the undead.',
    replacedFeatures: ['Expert Trainer', 'Bonus Feat', 'Demanding Challenge'],
    modifiedFeatures: ['Challenge (gains undead-related benefits)'],
    newFeatures: [
      {
        name: 'Undying Conviction',
        level: 3,
        description:
          'At 3rd level, a knight of the sepulcher gains a +2 bonus on saving throws against mind-affecting effects, death effects, and disease. At 9th level, he becomes immune to disease and sleep effects.',
      },
      {
        name: 'Skeletal Endurance',
        level: 5,
        description:
          'At 5th level, the knight of the sepulcher gains DR 2/bludgeoning or piercing. This DR increases by 2 at 9th level and every 4 levels thereafter.',
      },
      {
        name: "Death's Embrace",
        level: 9,
        description:
          'At 9th level, the knight of the sepulcher no longer needs to eat, sleep, or breathe. He also gains immunity to death effects and energy drain.',
      },
      {
        name: 'Unliving Warrior',
        level: 15,
        description:
          'At 15th level, the knight of the sepulcher gains the undead type, losing his Constitution score and using his Charisma modifier for concentration checks and other Constitution-based calculations.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 9. Luring Cavalier
  // ──────────────────────────────────────────────
  {
    name: 'Luring Cavalier',
    className: 'Cavalier',
    description:
      'The luring cavalier uses tactical retreats and feigned weakness to draw enemies into traps and unfavorable positions, sacrificing some offensive power for superior battlefield manipulation. These cavaliers are expert strategists who never fight fair if they can help it.',
    replacedFeatures: ['Challenge', 'Mighty Charge', 'Demanding Challenge', 'Supreme Charge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Lure the Foe',
        level: 1,
        description:
          'At 1st level, a luring cavalier can designate one target within sight and issue a challenge that taunts rather than engages. The target must succeed on a Will save (DC 10 + half cavalier level + Cha modifier) or take a –2 penalty on attack rolls against any creature other than the luring cavalier for 1 minute.',
      },
      {
        name: 'Feigned Retreat',
        level: 3,
        description:
          'At 3rd level, once per round, the luring cavalier may withdraw up to his speed without provoking an attack of opportunity from the creature against which he issued a challenge. Any creature that follows him during this movement provokes attacks of opportunity from the cavalier.',
      },
      {
        name: 'Careful Aim',
        level: 9,
        description:
          'At 9th level, if the luring cavalier does not move during his turn, he gains a +4 bonus on ranged attack rolls against the target of his challenge.',
      },
      {
        name: 'Catch Off Guard',
        level: 11,
        description:
          'At 11th level, any creature that charges the luring cavalier must succeed on a Reflex save (DC 10 + half cavalier level + Dex modifier) or provoke an attack of opportunity from the cavalier at the start of the charge.',
      },
      {
        name: 'Devastating Lure',
        level: 15,
        description:
          "At 15th level, creatures that fail their Will save against the luring cavalier's challenge are also compelled to move toward him on each of their turns if they are more than 5 feet away (as the compel hostility effect of the challenge).",
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 10. Musketeer
  // ──────────────────────────────────────────────
  {
    name: 'Musketeer',
    className: 'Cavalier',
    description:
      'The musketeer is an elite mounted gunslinger who combines the speed and power of cavalry with the ranged lethality of early firearms. These cavaliers are skilled in both mounted combat and the use of black powder weapons.',
    replacedFeatures: ['Expert Trainer', 'Mighty Charge', 'Supreme Charge'],
    modifiedFeatures: ['Mount (must be trained to tolerate gunfire)'],
    newFeatures: [
      {
        name: 'Firearm Proficiency',
        level: 1,
        description:
          'A musketeer gains proficiency with all firearms and treats all firearms as if they were one category smaller for the purposes of determining whether they are one-handed or two-handed weapons.',
      },
      {
        name: 'Steady Saddle',
        level: 1,
        description:
          'At 1st level, a musketeer can reload a firearm while mounted without provoking attacks of opportunity. His mount is trained to remain steady during firearms use and does not become frightened by the sounds of firearms.',
      },
      {
        name: 'Mounted Shooter',
        level: 3,
        description:
          'At 3rd level, a musketeer applies his Dexterity modifier to damage rolls made with firearms while mounted. He also ignores the –4 penalty for firing a firearm from the back of an unstable mount.',
      },
      {
        name: 'Cavalry Volley',
        level: 9,
        description:
          'At 9th level, once per day, a musketeer can make a full-attack action with a firearm at the end of a charge, applying the +2 attack bonus from the charge to all attacks.',
      },
      {
        name: 'Explosive Challenge',
        level: 11,
        description:
          "At 11th level, when the musketeer issues a challenge, he can fire a warning shot as a free action that imposes a –2 penalty to the target's AC until the start of the musketeer's next turn.",
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 11. Spellbreaker
  // ──────────────────────────────────────────────
  {
    name: 'Spellbreaker',
    className: 'Cavalier',
    description:
      'The spellbreaker is dedicated to hunting down and destroying spellcasters, viewing arcane and divine magic as dishonorable on the battlefield. These cavaliers develop specialized techniques to disrupt and counter magical threats.',
    replacedFeatures: ['Tactician', 'Greater Tactician', 'Master Tactician', 'Expert Trainer'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Spellbreaker Training',
        level: 1,
        description:
          'A spellbreaker gains Disruptive as a bonus feat at 1st level, even if he does not meet the prerequisites. He also gains a +2 bonus on all saving throws against spells and spell-like abilities.',
      },
      {
        name: 'Hostile Disruption',
        level: 3,
        description:
          'At 3rd level, once per round as an immediate action, when a spellcaster within reach attempts to cast a spell while threatened by the spellbreaker, the spellbreaker can make an attack of opportunity even if he has already used his attack of opportunity this round.',
      },
      {
        name: 'Dispelling Attack',
        level: 5,
        description:
          'At 5th level, once per day when the spellbreaker hits a creature with a melee attack, he can attempt a targeted dispel magic as part of that attack action (using his cavalier level as his caster level).',
      },
      {
        name: 'Counter Challenge',
        level: 9,
        description:
          'At 9th level, when a spellbreaker issues a challenge against a spellcaster, the target also takes a –4 penalty on concentration checks and caster level checks for the duration.',
      },
      {
        name: 'Spellkill',
        level: 15,
        description:
          'At 15th level, once per day, when a spellbreaker confirms a critical hit against a spellcaster, he can attempt to permanently destroy one prepared spell or spell slot of his choice from that creature (Will save DC 10 + half cavalier level + Str modifier negates).',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 12. Standard Bearer
  // ──────────────────────────────────────────────
  {
    name: 'Standard Bearer',
    className: 'Cavalier',
    description:
      'The standard bearer carries the banner of his order or liege into battle, providing an inspiring rallying point that empowers nearby allies. These cavaliers sacrifice personal challenge abilities for the broader benefits granted by their iconic presence.',
    replacedFeatures: ['Expert Trainer', 'Demanding Challenge'],
    modifiedFeatures: ['Tactician (banner-related)'],
    newFeatures: [
      {
        name: 'Banner',
        level: 1,
        description:
          "At 1st level, a standard bearer gains the paladin's Banner ability, treating his cavalier level as his paladin level for all purposes. His banner grants all allies within 60 feet a +2 morale bonus on saving throws against fear and a +1 morale bonus on attack rolls made as part of a charge.",
      },
      {
        name: 'Powerful Banner',
        level: 5,
        description:
          "At 5th level, the morale bonuses provided by the standard bearer's banner increase by 1 and he may unfurl his banner as a swift action rather than a move action.",
      },
      {
        name: 'Greater Banner',
        level: 11,
        description:
          "At 11th level, the standard bearer's banner provides its bonuses in a 120-foot radius. He also adds the effects of the bless spell to the banner's aura as a constant supernatural ability.",
      },
      {
        name: 'Legendary Banner',
        level: 20,
        description:
          "At 20th level, all allies within 60 feet of the standard bearer's banner are immune to fear and gain a +4 morale bonus on attack rolls made as part of a charge.",
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 13. Stormlance
  // ──────────────────────────────────────────────
  {
    name: 'Stormlance',
    className: 'Cavalier',
    description:
      'The stormlance is a cavalier who has mastered fighting in the most terrible weather conditions, embracing storms as both backdrop and weapon. These cavaliers channel the fury of thunder and lightning through their mounts and charges.',
    replacedFeatures: ['Expert Trainer', 'Bonus Feat'],
    modifiedFeatures: ['Mighty Charge', 'Supreme Charge'],
    newFeatures: [
      {
        name: 'Storm Rider',
        level: 1,
        description:
          'A stormlance and his mount suffer no penalties from wind, rain, ice, or storm conditions. Additionally, both the stormlance and his mount gain a +2 bonus on Fortitude saves against environmental hazards.',
      },
      {
        name: 'Thunderous Charge',
        level: 3,
        description:
          'At 3rd level, when a stormlance charges with a lance or spear, the strike deals an additional 1d6 electricity damage. At 9th level, this increases to 2d6, and at 15th level to 3d6.',
      },
      {
        name: 'Stormstruck Foe',
        level: 7,
        description:
          "At 7th level, any creature damaged by the stormlance's thunderous charge ability must succeed on a Fortitude save (DC 10 + half cavalier level + Str modifier) or become dazzled and deafened for 1 round from the thunder and lightning.",
      },
      {
        name: 'Eye of the Storm',
        level: 11,
        description:
          'At 11th level, once per day the stormlance can call down a bolt of lightning as part of a charge action, dealing 6d6 electricity damage (Reflex save DC 10 + half cavalier level + Cha modifier for half) to all creatures in a 5-foot-wide line between him and his target.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 14. Sword of Valor
  // ──────────────────────────────────────────────
  {
    name: 'Sword of Valor',
    className: 'Cavalier',
    description:
      'The sword of valor fights under a holy banner blessed by the gods, serving as a divine champion on the battlefield. These cavaliers blend martial excellence with divine power, becoming paragons of celestial righteousness.',
    replacedFeatures: ['Order', 'Expert Trainer', 'Mighty Charge', 'Supreme Charge'],
    modifiedFeatures: ['Challenge (holy rather than martial)'],
    newFeatures: [
      {
        name: 'Holy Banner',
        level: 1,
        description:
          "At 1st level, the sword of valor carries a holy banner that functions as a standard bearer's banner. In addition, allies within 60 feet of the banner gain a +2 sacred bonus on saving throws against evil spells and the attacks of evil outsiders.",
      },
      {
        name: 'Sacred Challenge',
        level: 1,
        description:
          "The sword of valor's challenge deals bonus damage as normal, and the target takes a –2 penalty on saving throws against good-aligned spells and effects while the challenge is in effect.",
      },
      {
        name: 'Divine Grace',
        level: 2,
        description:
          'At 2nd level, the sword of valor adds his Charisma bonus (if any) to all saving throws.',
      },
      {
        name: 'Holy Smite',
        level: 5,
        description:
          'At 5th level, three times per day as a swift action, the sword of valor can channel divine energy to add 1d6 holy damage per 5 cavalier levels to his next successful melee attack.',
      },
      {
        name: 'Celestial Mount',
        level: 11,
        description:
          "At 11th level, the sword of valor's mount gains the celestial template and the sword of valor's mount gains SR equal to 5 + the cavalier's level.",
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 15. Verdant Knight
  // ──────────────────────────────────────────────
  {
    name: 'Verdant Knight',
    className: 'Cavalier',
    description:
      'The verdant knight has dedicated himself to the defense of natural places and the creatures that dwell within them, forming a bond with nature that shapes both his mount and his fighting style. These cavaliers serve as guardians of wilderness rather than commanders of armies.',
    replacedFeatures: ['Order', 'Expert Trainer', 'Bonus Feat'],
    modifiedFeatures: ['Mount (nature-bonded animal)'],
    newFeatures: [
      {
        name: "Nature's Ally",
        level: 1,
        description:
          'A verdant knight adds his Charisma modifier (minimum 0) to wild empathy checks and Handle Animal checks. He can communicate with animals as if under the effects of speak with animals at will.',
      },
      {
        name: 'Wild Challenge',
        level: 1,
        description:
          'When a verdant knight issues a challenge, all natural animals and magical beasts within 30 feet of his target become hostile toward that target (Will DC 10 + half cavalier level + Cha modifier negates for each animal).',
      },
      {
        name: 'Woodland Stride',
        level: 5,
        description:
          'At 5th level, a verdant knight and his mount can move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at normal speed and without taking damage or suffering any other impairment.',
      },
      {
        name: "Nature's Wrath",
        level: 9,
        description:
          "At 9th level, three times per day as a swift action, the verdant knight can invoke nature's wrath, causing all plants in a 30-foot radius to animate and attempt to trip or entangle creatures (as entangle, Reflex DC 10 + half cavalier level + Wis modifier).",
      },
      {
        name: 'Wild Knight',
        level: 14,
        description:
          'At 14th level, the verdant knight is treated as a creature of the animal type for the purpose of spells and effects. He is also immune to poison and disease of natural origin.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 16. Wild Cavalier
  // ──────────────────────────────────────────────
  {
    name: 'Wild Cavalier',
    className: 'Cavalier',
    description:
      'The wild cavalier relies on instinct and ferocity rather than tactical training, forming a primal bond with his mount that borders on feral. These cavaliers trade refined military discipline for raw, savage combat effectiveness.',
    replacedFeatures: ['Tactician', 'Expert Trainer', 'Greater Tactician', 'Master Tactician'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Wilder's Challenge",
        level: 1,
        description:
          "A wild cavalier's challenge functions as normal but also frightens nearby animals and lesser beasts. When issuing a challenge, all animals and magical beasts within 30 feet of the wild cavalier that are not his allies must make a Will save (DC 10 + half cavalier level + Cha modifier) or become frightened for 1d4 rounds.",
      },
      {
        name: 'Pack Tactics',
        level: 3,
        description:
          'At 3rd level, whenever the wild cavalier and his mount both threaten the same creature, both gain a +2 flanking bonus on attack rolls against that creature (instead of the normal +2 flanking bonus requiring two attackers on opposite sides).',
      },
      {
        name: 'Feral Rider',
        level: 7,
        description:
          "At 7th level, the wild cavalier and his mount act with perfect coordination. The mount's attacks are treated as the cavalier's attacks for the purpose of flanking and sneak attack opportunities for the cavalier.",
      },
      {
        name: 'Savage Charge',
        level: 11,
        description:
          'At 11th level, when the wild cavalier or his mount charges, both gain the benefits of the Pounce ability, making a full-attack at the end of the charge.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 17. Disciple of the Pike
  // ──────────────────────────────────────────────
  {
    name: 'Disciple of the Pike',
    className: 'Cavalier',
    description:
      'The disciple of the pike specializes in fighting in formation with long polearms, coordinating with fellow soldiers to create an impenetrable wall of reach weapons. These cavaliers forgo mounted combat in favor of disciplined infantry tactics.',
    replacedFeatures: ['Mount', 'Mighty Charge', 'Supreme Charge'],
    modifiedFeatures: ['Tactician (polearm-focused teamwork feats)'],
    newFeatures: [
      {
        name: 'Pike Mastery',
        level: 1,
        description:
          'A disciple of the pike gains proficiency with all polearms and treats any polearm as if it had the brace property. He also gains Combat Reflexes as a bonus feat.',
      },
      {
        name: 'Set Spear',
        level: 3,
        description:
          'At 3rd level, as an immediate action the disciple of the pike can set his polearm against a charge, dealing double damage on a successful hit regardless of whether the polearm already has the brace property.',
      },
      {
        name: 'Formation Training',
        level: 5,
        description:
          'At 5th level, whenever the disciple of the pike and at least one ally are both wielding polearms and threatening the same creature, they both gain a +2 bonus on attack and damage rolls against that creature.',
      },
      {
        name: 'Phalanx Leader',
        level: 9,
        description:
          'At 9th level, the disciple of the pike grants the teamwork feat from his Tactician ability to a number of allies equal to twice his Charisma modifier when standing in an adjacent formation.',
      },
      {
        name: 'Steel Wall',
        level: 14,
        description:
          'At 14th level, the disciple of the pike and all allies within 10 feet that are wielding polearms gain DR 2/— while maintaining a formation (no adjacent threatened squares without a polearm-wielding ally). This DR increases by 2 at 17th and 20th levels.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 18. Courtly Knight
  // ──────────────────────────────────────────────
  {
    name: 'Courtly Knight',
    className: 'Cavalier',
    description:
      "The courtly knight is as comfortable in a lord's court as on the battlefield, trained to navigate the treacherous waters of high society as skillfully as he navigates a charge. These cavaliers sacrifice some combat training for extensive social and political skills.",
    replacedFeatures: ['Expert Trainer', 'Bonus Feat', 'Demanding Challenge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Courtly Bearing',
        level: 1,
        description:
          'A courtly knight adds his Charisma modifier as a bonus on all Diplomacy, Knowledge (nobility), and Perform (dance, oratory) checks. He may also use Diplomacy in place of Intimidate when making demoralize attempts.',
      },
      {
        name: 'Social Grace',
        level: 3,
        description:
          'At 3rd level, a courtly knight can take 10 on Diplomacy, Bluff, and Sense Motive checks even when stress or distraction would normally prevent it. Additionally, he gains a +4 bonus on Diplomacy checks to influence attitude.',
      },
      {
        name: 'Honorable Challenge',
        level: 5,
        description:
          'At 5th level, when the courtly knight issues a challenge, both he and the target are bound by the rules of honorable combat. The target takes a –4 penalty on attack rolls against creatures other than the courtly knight, and the courtly knight gains DR 5/— against attacks from the target.',
      },
      {
        name: 'Noble Mien',
        level: 9,
        description:
          "At 9th level, the courtly knight's reputation is such that all non-hostile intelligent creatures begin their attitude toward him at one step better. Additionally, any ally who can see the courtly knight gains a +2 morale bonus on Diplomacy checks.",
      },
      {
        name: 'Lord of the Court',
        level: 15,
        description:
          'At 15th level, once per day the courtly knight may call upon his network of noble contacts to gain the effects of the legend lore spell as a full-round action, with the information focused on a noble individual or political situation.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 19. Daring Champion
  // ──────────────────────────────────────────────
  {
    name: 'Daring Champion',
    className: 'Cavalier',
    description:
      'The daring champion is an unorthodox cavalier who fights more like a swashbuckler than a traditional mounted warrior, relying on speed, panache, and precise swordwork rather than heavy cavalry tactics. These cavaliers exchange their mount for superior personal combat ability.',
    replacedFeatures: ['Mount', 'Expert Trainer', 'Mighty Charge', 'Supreme Charge'],
    modifiedFeatures: ['Challenge (gains panache interaction)'],
    newFeatures: [
      {
        name: 'Panache',
        level: 1,
        description:
          "A daring champion gains the swashbuckler's panache class feature, gaining a number of panache points equal to his Charisma modifier. He gains the Opportune Parry and Riposte and Derring-Do deeds.",
      },
      {
        name: 'Swashbuckler Deeds',
        level: 1,
        description:
          "At 1st level the daring champion gains the swashbuckler's Derring-Do and Opportune Parry and Riposte deeds. At 3rd level he gains Precise Strike. At 7th level he gains Superior Feint. At 11th level he gains Bleeding Wound.",
      },
      {
        name: "Champion's Finesse",
        level: 3,
        description:
          'At 3rd level, a daring champion gains Weapon Finesse as a bonus feat and may apply his Dexterity modifier to damage rolls with light and one-handed piercing weapons.',
      },
      {
        name: 'Charmed Life',
        level: 6,
        description:
          'At 6th level, three times per day as an immediate action before attempting a saving throw, the daring champion can add his Charisma bonus to the result of the save.',
      },
      {
        name: 'Nimble',
        level: 9,
        description:
          'At 9th level, the daring champion gains a +1 dodge bonus to AC while wearing light armor or no armor. This bonus increases by 1 for every 4 levels beyond 9th.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 20. Hound Master
  // ──────────────────────────────────────────────
  {
    name: 'Hound Master',
    className: 'Cavalier',
    description:
      'The hound master forgoes the traditional cavalry mount in favor of a pack of trained hunting dogs, using them to run down quarry and overwhelm enemies through coordinated numbers. These cavaliers are skilled hunters and dog trainers whose pack becomes an extension of their will.',
    replacedFeatures: ['Mount', 'Expert Trainer', 'Mighty Charge', 'Supreme Charge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Pack Master',
        level: 1,
        description:
          'Instead of a single mount, the hound master gains a pack of up to 4 trained dogs or wolves with a combined HD equal to his cavalier level. He controls them as a druid controls an animal companion, splitting his effective druid level among them. The total HD of his pack increases by 1 for every 2 cavalier levels.',
      },
      {
        name: 'Coordinated Pack',
        level: 3,
        description:
          "At 3rd level, the hound master's animals work with unusual coordination. When two or more pack animals threaten the same target, they all gain a +2 competence bonus on attack rolls against that target.",
      },
      {
        name: 'Pack Tactics',
        level: 5,
        description:
          'At 5th level, once per round as a free action, the hound master can direct one pack animal to make an attack of opportunity against a creature that just attacked the hound master, even if that animal has already used its attack of opportunity this round.',
      },
      {
        name: 'Hunt the Quarry',
        level: 9,
        description:
          'At 9th level, once per day as a swift action, the hound master can designate a single creature as his quarry. His pack can track this creature without a Survival check and gains a +4 bonus on attack rolls against it.',
      },
      {
        name: "Alpha's Command",
        level: 14,
        description:
          'At 14th level, the hound master can control his entire pack with a single free action each turn, rather than needing individual Handle Animal checks. The pack also gains the Outflank teamwork feat as a bonus feat.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 21. Fell Rider
  // ──────────────────────────────────────────────
  {
    name: 'Fell Rider',
    className: 'Cavalier',
    description:
      'The fell rider has forged a dark pact with death, riding a skeletal or zombie mount into battle. These grim cavaliers strike fear into the hearts of enemies and bolster the undead around them through their dread presence.',
    replacedFeatures: ['Mount', 'Expert Trainer', 'Bonus Feat'],
    modifiedFeatures: ['Challenge (inflicts fear)'],
    newFeatures: [
      {
        name: 'Undead Mount',
        level: 1,
        description:
          "A fell rider's mount is an undead creature (skeleton or zombie horse at 1st level, progressing to more powerful undead as levels increase). The mount functions as a cavalier's mount except it is undead, does not need food or water, and is immune to mind-affecting effects, poison, disease, and death effects.",
      },
      {
        name: 'Deathly Aura',
        level: 3,
        description:
          'At 3rd level, the fell rider radiates an aura of death and menace. All living creatures within 10 feet of the fell rider take a –2 penalty on saving throws against fear effects. This radius increases to 20 feet at 9th level.',
      },
      {
        name: 'Negative Channel',
        level: 5,
        description:
          'At 5th level, once per day, the fell rider can channel negative energy as a cleric of half his level, damaging living creatures and healing undead within 30 feet.',
      },
      {
        name: 'Grave Rider',
        level: 11,
        description:
          'At 11th level, the fell rider and his undead mount gain DR 5/good and magic. Additionally, the fell rider and mount are immune to energy drain and death effects.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 22. Castellan
  // ──────────────────────────────────────────────
  {
    name: 'Castellan',
    className: 'Cavalier',
    description:
      'The castellan is a cavalier charged with the defense of a fortress or keep, trained as much in the art of fortification and siege warfare as in open field combat. These cavaliers are supreme defenders of fixed positions, turning walls and gates into formidable weapons.',
    replacedFeatures: ['Mount', 'Mighty Charge', 'Supreme Charge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fortress Expertise',
        level: 1,
        description:
          'A castellan adds his cavalier level as a competence bonus on Knowledge (engineering) checks related to fortifications, siege engines, and building defenses. He also gains Profession (soldier) as a class skill.',
      },
      {
        name: 'Bulwark',
        level: 3,
        description:
          'At 3rd level, when fighting defensively or using Combat Expertise, the castellan increases his dodge bonus to AC by 2. Additionally, he grants adjacent allies a +1 shield bonus to AC.',
      },
      {
        name: 'Hold the Line',
        level: 5,
        description:
          'At 5th level, once per day as an immediate action, the castellan can prevent himself and all allies within 30 feet from being moved against their will (including bull rush, drag, overrun, and similar effects) for 1 round.',
      },
      {
        name: 'Siege Commander',
        level: 9,
        description:
          'At 9th level, siege engines operated or directed by the castellan gain a +4 bonus on attack rolls and double the normal reload speed.',
      },
      {
        name: 'Unbreakable Defense',
        level: 14,
        description:
          'At 14th level, while the castellan stands his ground (does not move on his turn), he and all allies within 10 feet gain DR 5/— and a +4 morale bonus on saving throws.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 23. Constable
  // ──────────────────────────────────────────────
  {
    name: 'Constable',
    className: 'Cavalier',
    description:
      'The constable is a cavalier who serves as a law enforcement officer and judge, traveling the lands to bring criminals to justice and maintain the order of civilized society. These cavaliers trade some battlefield mobility for enhanced skills in tracking, interrogation, and nonlethal combat.',
    replacedFeatures: ['Expert Trainer', 'Bonus Feat', 'Demanding Challenge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Lawman's Eye",
        level: 1,
        description:
          'A constable gains a +2 bonus on Perception, Sense Motive, and Intimidate checks. These bonuses increase to +4 at 9th level. Additionally, the constable adds Disable Device and Escape Artist to his list of class skills.',
      },
      {
        name: 'Apprehend',
        level: 3,
        description:
          'At 3rd level, a constable can make combat maneuver checks to grapple, trip, or disarm without provoking attacks of opportunity. He also gains Improved Grapple as a bonus feat.',
      },
      {
        name: 'Nonlethal Challenge',
        level: 5,
        description:
          'At 5th level, the constable can issue a challenge that calls for nonlethal combat. If he uses only nonlethal attacks against the challenged target and subdues rather than kills it, he regains the use of that challenge.',
      },
      {
        name: 'Dread Authority',
        level: 9,
        description:
          'At 9th level, the constable gains the ability to demoralize enemies as a swift action. When he does so against the target of his challenge, the target is shaken for 1 round plus 1 round per 5 points by which his Intimidate check exceeds the DC.',
      },
      {
        name: 'Relentless Pursuit',
        level: 14,
        description:
          'At 14th level, the constable and his mount never tire when pursuing a quarry and can move at double normal overland speed for up to 8 hours without penalty. He also cannot be given the slip by mundane escape attempts made by creatures with fewer Hit Dice than his cavalier level.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 24. Fearless Knight
  // ──────────────────────────────────────────────
  {
    name: 'Fearless Knight',
    className: 'Cavalier',
    description:
      'The fearless knight has overcome all fear through sheer strength of will and unrelenting courage, inspiring allies through his audacious disregard for danger. These cavaliers trade tactical finesse for iron nerve and an almost reckless bravery that borders on the supernatural.',
    replacedFeatures: ['Tactician', 'Greater Tactician', 'Master Tactician'],
    modifiedFeatures: ['Challenge (bonus against feared foes)'],
    newFeatures: [
      {
        name: 'Fearless',
        level: 1,
        description:
          'A fearless knight is immune to the shaken condition. At 5th level he becomes immune to all fear effects. At 9th level, once per day when he would become panicked, he becomes frightened instead.',
      },
      {
        name: 'Daunting Courage',
        level: 3,
        description:
          'At 3rd level, allies within 30 feet of the fearless knight gain a +4 morale bonus on saving throws against fear. Any ally that would become panicked instead becomes shaken when the fearless knight is within this range.',
      },
      {
        name: 'Indomitable Presence',
        level: 7,
        description:
          "At 7th level, the fearless knight's mere presence unsettles cowardly enemies. Any creature that has the shaken, frightened, or panicked condition and approaches within 30 feet of the fearless knight must make a Will save (DC 10 + half cavalier level + Cha modifier) or flee in the opposite direction for 1d4 rounds.",
      },
      {
        name: 'Terrifying Charge',
        level: 11,
        description:
          'At 11th level, when the fearless knight charges, all enemies within 30 feet who witness the charge must make a Will save (DC 10 + half cavalier level + Cha modifier) or become shaken for 1 minute. Enemies already shaken become frightened.',
      },
    ],
    source: "Advanced Player's Guide",
  },
];
