import { ArchetypeData, ClassFeatureData } from '../types';

export const GUNSLINGER_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Blatherskite
  // ──────────────────────────────────────────────
  {
    name: 'Blatherskite',
    className: 'Gunslinger',
    description:
      'The blatherskite is a boastful, fast-talking gunslinger who unnerves foes with an endless stream of taunts, bluster, and tall tales. She uses her sharp tongue as a weapon, demoralizing enemies and bolstering allies through sheer audacity.',
    replacedFeatures: ['Grit', "Deeds (Gunslinger's Dodge, Utility Shot, Slinger's Luck)"],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Swagger',
        level: 1,
        description:
          'The blatherskite gains a grit-like pool called swagger. She can use swagger points in place of grit points for all purposes. She gains a number of swagger points equal to her Charisma modifier (minimum 1) instead of her Wisdom modifier, and recovers swagger by demoralizing foes (as the Intimidate skill) or by confirming critical hits.',
      },
      {
        name: 'Deed: Unnerving Calm',
        level: 1,
        description:
          "At 1st level, the blatherskite can spend 1 swagger point to make an Intimidate check to demoralize all enemies within 30 feet as a move action. The DC equals 10 + the target's Hit Dice + the target's Wisdom modifier.",
      },
      {
        name: 'Deed: Rattling Words',
        level: 7,
        description:
          'At 7th level, the blatherskite can spend 1 swagger point when she confirms a critical hit to cause the target to become frightened for 1 round rather than shaken. This replaces Utility Shot.',
      },
      {
        name: 'Deed: Boastful Dodge',
        level: 1,
        description:
          "At 1st level, the blatherskite can spend 1 swagger point as an immediate action when she is hit by a ranged attack to take a 5-foot step and impose a -4 penalty on the triggering attack roll, potentially causing it to miss. This replaces Gunslinger's Dodge.",
      },
    ],
    source: 'Pathfinder Player Companion: Ranged Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 2. Bolt Ace
  // ──────────────────────────────────────────────
  {
    name: 'Bolt Ace',
    className: 'Gunslinger',
    description:
      "The bolt ace replaces the gunslinger's firearms expertise with supreme mastery of crossbows, becoming a deadly precision shooter who brings the gunslinger's grit and deeds to bear with bolts rather than bullets. She treats crossbows as firearms for the purpose of all gunslinger class features and feats.",
    replacedFeatures: [
      'Gunsmith',
      'Gun Training 1',
      'Gun Training 2',
      'Gun Training 3',
      'Gun Training 4',
      'Gun Mastery',
    ],
    modifiedFeatures: [
      'Grit (uses Wisdom, applies to crossbows)',
      'Deeds (all deeds modified to function with crossbows)',
    ],
    newFeatures: [
      {
        name: 'Crossbow Expert',
        level: 1,
        description:
          'At 1st level, the bolt ace gains Rapid Reload as a bonus feat. She can use crossbows in place of firearms for all gunslinger class features, deeds, and feats that require or modify firearms. She is also proficient with all crossbows.',
      },
      {
        name: 'Deed: Crossbow Specialist',
        level: 1,
        description:
          "The bolt ace's Deadeye deed functions with crossbows. At 1st level she can resolve a crossbow attack against the target's touch AC within the first range increment, spending 1 grit point.",
      },
      {
        name: 'Crossbow Training',
        level: 5,
        description:
          'At 5th level, the bolt ace adds her Dexterity modifier to damage rolls with crossbows. This bonus increases by +1 for every 4 levels beyond 5th (maximum +5 at 17th level). This replaces Gun Training.',
      },
      {
        name: 'Crossbow Mastery',
        level: 20,
        description:
          "At 20th level, the bolt ace's crossbow attacks are automatically confirmed critical hits against foes who are denied their Dexterity bonus, and her crossbow critical multiplier increases by 1. This replaces Gun Mastery.",
      },
    ],
    source: 'Pathfinder Player Companion: People of the Stars',
  },

  // ──────────────────────────────────────────────
  // 3. Buccaneer
  // ──────────────────────────────────────────────
  {
    name: 'Buccaneer',
    className: 'Gunslinger',
    description:
      'The buccaneer is a piratical gunslinger who roams the high seas, using rum, bravado, and a brace of pistols to carve out a legend. She draws on her Charisma and daring lifestyle rather than calm focus, and recovers grit through acts of piracy and carousing.',
    replacedFeatures: ['Grit', "Deeds (Gunslinger's Dodge, Utility Shot, Slinger's Luck)"],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Panache',
        level: 1,
        description:
          'The buccaneer gains a grit-like pool called panache equal to her Charisma modifier (minimum 1). She regains panache by performing daring acts of piracy, spending at least 1 hour carousing (consuming alcohol), or by confirming critical hits with firearms. She uses panache in place of grit for all deeds and gunslinger class features.',
      },
      {
        name: 'Deed: Rum Courage',
        level: 1,
        description:
          'At 1st level, the buccaneer can spend 1 panache point as a swift action to gain a +2 morale bonus on saving throws against fear effects and a +2 morale bonus on Will saves for 1 round per gunslinger level.',
      },
      {
        name: 'Deed: Daring Dodge',
        level: 1,
        description:
          "The buccaneer's version of Gunslinger's Dodge functions identically but is fueled by panache, reflecting her instinct for dramatic escapes rather than tactical repositioning.",
      },
      {
        name: 'Sea Legs',
        level: 2,
        description:
          "At 2nd level, the buccaneer gains a bonus equal to half her gunslinger level on Acrobatics and Climb checks made aboard ships or in water, and she is never considered flat-footed while standing on a ship's deck.",
      },
    ],
    source: 'Pathfinder Player Companion: Pirates of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // 4. Bushwhacker
  // ──────────────────────────────────────────────
  {
    name: 'Bushwhacker',
    className: 'Gunslinger',
    description:
      "The bushwhacker is a frontier scout and ambush specialist who excels at picking off foes from concealment before they know danger is near. She sacrifices some of the gunslinger's reactive mobility for superior stealth and the power of the first volley.",
    replacedFeatures: [
      "Deeds (Gunslinger's Dodge, Startling Shot, Bleeding Wound)",
      'Nimble +1',
      'Nimble +2',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Ambush',
        level: 1,
        description:
          'When the bushwhacker acts in the surprise round, she may make a full attack with a firearm rather than a single attack. She must be within the first range increment of her target.',
      },
      {
        name: 'Deed: Shot on the Run (Ambush Variant)',
        level: 3,
        description:
          'At 3rd level, the bushwhacker can move up to half her speed, make a single firearm attack, and then move up to half her speed again as a standard action, without provoking attacks of opportunity from the attacked creature. She must spend 1 grit point to use this deed.',
      },
      {
        name: 'Sneak Attack',
        level: 2,
        description:
          'At 2nd level, the bushwhacker gains sneak attack +1d6. This bonus increases by +1d6 at 5th level and every 3 gunslinger levels thereafter (to a maximum of +6d6 at 17th level). This functions exactly as the rogue class feature.',
      },
      {
        name: 'Camouflage',
        level: 7,
        description:
          "At 7th level, the bushwhacker can use the Stealth skill to hide in any natural terrain, even if it does not provide cover or concealment. This functions as the ranger's camouflage ability.",
      },
    ],
    source: 'Pathfinder Player Companion: Ranged Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 5. Drifter
  // ──────────────────────────────────────────────
  {
    name: 'Drifter',
    className: 'Gunslinger',
    description:
      "The drifter is a wandering, rootless gunslinger who fights with instinct and muscle memory honed over years on the road. She swaps the gunslinger's technical knowledge for raw fighting ability and an uncanny knack for survival.",
    replacedFeatures: [
      'Gunsmith',
      'Bonus Feats (all)',
      'Gun Training 1',
      'Gun Training 2',
      'Gun Training 3',
      'Gun Training 4',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Makeshift Gunsmithing',
        level: 1,
        description:
          'The drifter gains Gunsmithing as a bonus feat but can only use it to repair broken firearms, not to craft new ones. She keeps her weapons working through improvised field repairs.',
      },
      {
        name: "Drifter's Courage",
        level: 1,
        description:
          'At 1st level, the drifter gains a +2 bonus on saving throws against fear effects. This bonus increases to +4 at 8th level and to +6 at 16th level.',
      },
      {
        name: 'Grit Surge',
        level: 3,
        description:
          'At 3rd level, the drifter can spend a grit point as a swift action to gain a +4 bonus on her next attack roll or a +4 dodge bonus to AC until the start of her next turn.',
      },
      {
        name: 'Rapid Recovery',
        level: 5,
        description:
          'At 5th level, the drifter regains 1 grit point whenever she reduces an enemy to 0 or fewer hit points with a firearm attack, in addition to the normal method of recovering grit by confirming a critical hit.',
      },
      {
        name: "Wanderer's Instinct",
        level: 11,
        description:
          'At 11th level, the drifter is never caught flat-footed and can no longer be surprised, provided she is conscious.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 6. Experimental Gunsmith
  // ──────────────────────────────────────────────
  {
    name: 'Experimental Gunsmith',
    className: 'Gunslinger',
    description:
      'The experimental gunsmith is an inventor as much as a fighter, constantly modifying and improving her weapons with alchemical and mechanical enhancements. She sacrifices some combat reflexes for the ability to craft and field-test exotic firearm modifications.',
    replacedFeatures: [
      'Nimble +1',
      'Nimble +2',
      'Nimble +3',
      'Nimble +4',
      'Bonus Feats (2nd, 6th, 10th, 14th, 18th)',
    ],
    modifiedFeatures: ['Gunsmith (expanded to include crafting modifications)'],
    newFeatures: [
      {
        name: 'Firearm Modification',
        level: 1,
        description:
          'At 1st level, the experimental gunsmith gains Craft (alchemy) as a class skill and can use it to add temporary modifications to her firearm. She can create a number of modifications per day equal to her Intelligence modifier, each lasting 24 hours.',
      },
      {
        name: 'Alchemical Shot',
        level: 3,
        description:
          'At 3rd level, the experimental gunsmith can load her firearm with an alchemical cartridge as a move action. She can create alchemical cartridges (e.g., fire, acid, smoke) at half the normal cost using Craft (alchemy).',
      },
      {
        name: 'Overcharge',
        level: 7,
        description:
          'At 7th level, the experimental gunsmith can overcharge a firearm as a standard action, adding +2d6 damage on the next shot. However, the firearm gains the broken condition on a misfire or after the shot is made, until repaired.',
      },
      {
        name: 'Stable Prototype',
        level: 11,
        description:
          "At 11th level, the experimental gunsmith's overcharged shots no longer automatically give the broken condition. The firearm only becomes broken on a misfire when overcharged.",
      },
      {
        name: 'Masterwork Invention',
        level: 15,
        description:
          'At 15th level, the experimental gunsmith can permanently enhance one of her firearms with a unique modification chosen from a list, granting a persistent +2 enhancement bonus or a special property such as returning, reliable, or seeking.',
      },
    ],
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
  },

  // ──────────────────────────────────────────────
  // 7. Firebrand
  // ──────────────────────────────────────────────
  {
    name: 'Firebrand',
    className: 'Gunslinger',
    description:
      'The firebrand is a revolutionary idealist who uses firearms as symbols of liberation and the right of the common person to stand against tyranny. She inspires allies with her conviction and turns her passion into a fighting force as potent as her powder and shot.',
    replacedFeatures: ["Deeds (Utility Shot, Slinger's Luck)", 'Bonus Feats (4th, 8th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Inspirational Shooter',
        level: 1,
        description:
          'The firebrand gains the bardic performance ability Inspire Courage at 1st level, using her gunslinger level as her bard level. She can perform for a number of rounds per day equal to 4 + her Charisma modifier, plus 2 for each gunslinger level beyond 1st.',
      },
      {
        name: 'Deed: Rally the Troops',
        level: 7,
        description:
          'At 7th level, the firebrand can spend 1 grit point as a swift action to grant all allies within 30 feet a +2 morale bonus on attack rolls and saving throws against fear for 1 round. This replaces Utility Shot.',
      },
      {
        name: 'Deed: Incendiary Shot',
        level: 11,
        description:
          "At 11th level, the firebrand can spend 2 grit points to fire an incendiary round that deals half her firearm damage as fire damage and sets targets on fire (as alchemist's fire) on a successful hit.",
      },
      {
        name: 'Rallying Presence',
        level: 4,
        description:
          'At 4th level, allies within 30 feet of the firebrand who can see or hear her gain a +2 morale bonus on saving throws against fear as long as she has at least 1 grit point remaining.',
      },
    ],
    source: 'Pathfinder Player Companion: Pathfinder Society Primer',
  },

  // ──────────────────────────────────────────────
  // 8. Maverick
  // ──────────────────────────────────────────────
  {
    name: 'Maverick',
    className: 'Gunslinger',
    description:
      'The maverick is a self-taught, rule-breaking gunslinger who has developed a highly individualistic fighting style through trial, error, and stubbornness. She trades formal training and bonus feats for a unique collection of improvised tricks.',
    replacedFeatures: ['Bonus Feats (2nd, 6th, 10th, 14th, 18th)', 'Deeds (Utility Shot)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Maverick Deed',
        level: 2,
        description:
          'At 2nd level and every 4 levels thereafter, the maverick learns a unique deed of her own invention. She may choose deeds from any gunslinger archetype or invent new applications for existing deeds with GM approval. Each maverick deed costs 1 grit point to activate.',
      },
      {
        name: 'Improvised Shot',
        level: 3,
        description:
          'At 3rd level, the maverick can reload using improvised materials in a pinch. If she has materials on hand (cloth, powder, makeshift projectile), she can fashion a single shot in 1 minute without the Gunsmithing feat.',
      },
      {
        name: "Street Fighter's Cunning",
        level: 5,
        description:
          'At 5th level, the maverick gains a +2 bonus on Bluff, Intimidate, and Sense Motive checks against creatures she has hit with a firearm this combat.',
      },
      {
        name: 'Wild Gambit',
        level: 11,
        description:
          'At 11th level, once per day the maverick can declare a wild gambit before making an attack roll. If the attack hits, she rolls twice on the deed benefit and takes the better result. If it misses, she loses 2 grit points.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 9. Mysterious Stranger
  // ──────────────────────────────────────────────
  {
    name: 'Mysterious Stranger',
    className: 'Gunslinger',
    description:
      'The mysterious stranger is a lone wolf gunslinger who relies on Charisma and force of personality rather than careful preparation, channeling an almost supernatural calm into her shooting. She is the quintessential wandering hero whose past is as loaded as her pistols.',
    replacedFeatures: [
      'Grit',
      "Deeds (Slinger's Luck)",
      'Gun Training 1',
      'Gun Training 2',
      'Gun Training 3',
      'Gun Training 4',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Luck',
        level: 1,
        description:
          'At 1st level, the mysterious stranger gains a pool of luck points equal to her Charisma modifier (minimum 1). She uses luck points exactly as grit points for all gunslinger class features, recovering them by the same methods. Her grit pool is replaced entirely by her luck pool.',
      },
      {
        name: 'Deed: Focused Aim',
        level: 1,
        description:
          "At 1st level, the mysterious stranger can spend 1 luck point as a swift action to add her Charisma bonus (minimum +1) to a single firearm attack roll made before the end of her turn. This replaces the Slinger's Luck deed.",
      },
      {
        name: 'Charmed Life',
        level: 5,
        description:
          'At 5th level, the mysterious stranger adds her Charisma modifier to her firearm damage rolls instead of her Dexterity modifier. This replaces Gun Training 1.',
      },
      {
        name: "Stranger's Fortune",
        level: 9,
        description:
          'At 9th level, the mysterious stranger can spend 1 luck point to reroll any one d20 roll and take the better result. She can use this ability once per round. This replaces Gun Training 2.',
      },
      {
        name: 'Impossible Luck',
        level: 13,
        description:
          'At 13th level, the mysterious stranger is treated as if she always has the maximum number of luck points for the purpose of deed prerequisites. This replaces Gun Training 3.',
      },
      {
        name: 'Legendary Shooter',
        level: 17,
        description:
          "At 17th level, the mysterious stranger's firearm attacks automatically confirm critical hits against flat-footed targets. This replaces Gun Training 4.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 10. Pistolero
  // ──────────────────────────────────────────────
  {
    name: 'Pistolero',
    className: 'Gunslinger',
    description:
      'The pistolero specializes exclusively in one-handed firearms, becoming a master of close-quarters gun fighting. She trades versatility with other firearms for unmatched skill with pistols and revolvers, dancing through melee while raining fire on enemies.',
    replacedFeatures: [
      'Deeds (Utility Shot, Startling Shot, Bleeding Wound)',
      'Gun Training 1',
      'Gun Training 2',
      'Gun Training 3',
      'Gun Training 4',
    ],
    modifiedFeatures: ['Gun Mastery (one-handed firearms only)'],
    newFeatures: [
      {
        name: 'Deed: Up Close and Deadly',
        level: 1,
        description:
          "At 1st level, when the pistolero hits a target within her firearm's first range increment with a one-handed firearm, she can spend 1 grit point to deal +1d6 extra precision damage. This bonus increases by +1d6 for every 4 gunslinger levels beyond 1st (maximum +5d6 at 17th level). This replaces Utility Shot.",
      },
      {
        name: "Deed: Gunslinger's Calm",
        level: 7,
        description:
          'At 7th level, the pistolero can spend 1 grit point as a free action to ignore the penalties from the shaken, sickened, or entangled conditions until the end of her next turn while using a one-handed firearm. This replaces Startling Shot.',
      },
      {
        name: 'Deed: Pistol Whip (Enhanced)',
        level: 11,
        description:
          "At 11th level, the pistolero's Pistol-Whip deed deals an additional 2d6 damage and the target must succeed at a Fortitude save (DC 10 + half gunslinger level + Dexterity modifier) or be staggered for 1 round. This replaces Bleeding Wound.",
      },
      {
        name: 'One-Handed Firearm Training',
        level: 5,
        description:
          'At 5th level, the pistolero adds her Dexterity modifier to damage with one-handed firearms. This bonus increases by +1 for every 4 gunslinger levels beyond 5th, to a maximum of +5 at 17th level. This replaces Gun Training.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 11. Siege Gunner
  // ──────────────────────────────────────────────
  {
    name: 'Siege Gunner',
    className: 'Gunslinger',
    description:
      "The siege gunner specializes in operating large-scale siege weapons and artillery rather than personal firearms. She applies the gunslinger's precision and grit to cannons, ballistas, and other crew-served weapons, becoming invaluable in large-scale military engagements.",
    replacedFeatures: [
      'Gunsmith',
      'Nimble +1',
      'Nimble +2',
      'Nimble +3',
      'Nimble +4',
      "Deeds (Gunslinger's Dodge, Quick Clear, Pistol-Whip)",
    ],
    modifiedFeatures: ['Grit (applies to siege weapons as well as firearms)'],
    newFeatures: [
      {
        name: 'Siege Weapon Proficiency',
        level: 1,
        description:
          'At 1st level, the siege gunner gains proficiency with all siege weapons and can use the Gunsmithing feat to maintain and repair siege engines.',
      },
      {
        name: 'Deed: Rapid Loader',
        level: 1,
        description:
          'At 1st level, the siege gunner can spend 1 grit point to reduce the loading time of a siege weapon by one category (from full-round to standard, or standard to move action).',
      },
      {
        name: 'Deed: Targeting Shot',
        level: 3,
        description:
          'At 3rd level, the siege gunner can spend 1 grit point to make a siege weapon attack that targets a specific component of a fortification (gate, wall section, tower). On a hit, that component takes double damage.',
      },
      {
        name: 'Crew Master',
        level: 5,
        description:
          'At 5th level, the siege gunner reduces the minimum crew requirement for any siege weapon she operates by 1 (minimum 1). At 10th level, she can operate most crew-served weapons alone.',
      },
      {
        name: 'Deed: Plunging Fire',
        level: 7,
        description:
          'At 7th level, the siege gunner can spend 2 grit points to fire a siege weapon in an arc, targeting creatures behind cover or inside fortifications. The attack ignores cover bonuses to AC.',
      },
      {
        name: 'Artillery Master',
        level: 11,
        description:
          "At 11th level, the siege gunner adds her Dexterity modifier as a bonus on attack rolls with siege weapons and can direct her crew to fire with full BAB rather than the weapon's base accuracy.",
      },
    ],
    source: 'Pathfinder Campaign Setting: Castles of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // 12. Targeter
  // ──────────────────────────────────────────────
  {
    name: 'Targeter',
    className: 'Gunslinger',
    description:
      'The targeter is a calculating sniper who takes her time to place each shot with devastating precision, preferring a single telling bullet over a hail of fire. She eschews reactive deeds in favor of careful preparation and enhanced aimed fire.',
    replacedFeatures: [
      "Deeds (Gunslinger's Dodge, Startling Shot, Death's Shot)",
      'Nimble +1',
      'Nimble +2',
    ],
    modifiedFeatures: ['Deadeye (enhanced range for touch AC resolution)'],
    newFeatures: [
      {
        name: 'Deed: Aimed Shot',
        level: 1,
        description:
          "At 1st level, the targeter can spend 1 grit point as a full-round action to make a single attack against a target's touch AC at any range within her firearm's maximum range (not just the first increment). This replaces Gunslinger's Dodge.",
      },
      {
        name: 'Deed: Called Shot',
        level: 7,
        description:
          'At 7th level, the targeter can spend 2 grit points to declare a called shot before attacking, targeting a specific body part. On a hit, the target suffers an additional effect based on the location (arm: disarmed; leg: speed halved; head: stunned 1 round; body: sickened 1d4 rounds). This replaces Startling Shot.',
      },
      {
        name: 'Patient Aim',
        level: 2,
        description:
          'At 2nd level, the targeter gains a +2 bonus on attack rolls with firearms when she has not moved since the beginning of her last turn. This bonus increases by +1 every 4 levels thereafter.',
      },
      {
        name: 'Deed: Kill Shot',
        level: 15,
        description:
          "At 15th level, the targeter can spend 3 grit points to make a single shot that deals maximum damage on a hit. If the target is reduced to 0 or fewer hit points by this attack, it is also killed outright (no negative HP survival). This replaces Death's Shot.",
      },
    ],
    source: 'Pathfinder Player Companion: Ranged Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 13. Techslinger
  // ──────────────────────────────────────────────
  {
    name: 'Techslinger',
    className: 'Gunslinger',
    description:
      'The techslinger has mastered the use of technological firearms from Numeria and the Androffan legacy, wielding laser pistols, arc rifles, and plasma weapons with the same instinct a traditional gunslinger brings to her powder and shot. She blends science and grit into a lethal combination.',
    replacedFeatures: ['Gunsmith', 'Deeds (Quick Clear, Expert Loading)'],
    modifiedFeatures: [
      'Grit (applies to technological firearms)',
      'Gun Training (applies to technological firearms)',
    ],
    newFeatures: [
      {
        name: 'Technologist',
        level: 1,
        description:
          "At 1st level, the techslinger gains the Technologist feat as a bonus feat even if she doesn't meet its prerequisites. She is automatically proficient with all technological firearms and can use the Gunsmithing feat to maintain and charge technological weapons.",
      },
      {
        name: 'Deed: Recharge',
        level: 1,
        description:
          'At 1st level, the techslinger can spend 1 grit point to restore 1 charge to a technological firearm as a move action. She can only use this deed a number of times per day equal to her Wisdom modifier (minimum 1). This replaces Quick Clear.',
      },
      {
        name: 'Energy Efficiency',
        level: 3,
        description:
          'At 3rd level, the techslinger treats all technological firearms as having the reliable weapon property, reducing their chance of malfunction. She also reduces the charge cost of technological firearms by 1 (minimum 1) when she uses her Gun Training bonus.',
      },
      {
        name: 'Deed: Power Surge',
        level: 7,
        description:
          'At 7th level, the techslinger can spend 2 grit points to overcharge a technological firearm, doubling the die size of its energy damage on the next attack. The weapon then cannot fire again until recharged. This replaces Expert Loading.',
      },
      {
        name: 'System Integration',
        level: 11,
        description:
          'At 11th level, the techslinger can attune herself to a technological firearm over 1 hour. The attuned weapon never misfires in her hands and she can recharge it faster (as a swift action using the Recharge deed).',
      },
    ],
    source: 'Pathfinder Campaign Setting: Technology Guide',
  },

  // ──────────────────────────────────────────────
  // 14. Gulch Gunner
  // ──────────────────────────────────────────────
  {
    name: 'Gulch Gunner',
    className: 'Gunslinger',
    description:
      'The gulch gunner is a close-quarters specialist who has learned to fight effectively in confined spaces such as mine shafts, narrow canyons, and ship corridors. She turns the disadvantages of tight terrain into lethal advantages.',
    replacedFeatures: ["Deeds (Gunslinger's Dodge, Utility Shot)"],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Deed: Battered Pistol',
        level: 1,
        description:
          "At 1st level, the gulch gunner can spend 1 grit point when making a pistol-whip attack to also make the target drop one held item (as the disarm combat maneuver, using her gunslinger level + Dexterity modifier as her CMB). This replaces Gunslinger's Dodge.",
      },
      {
        name: 'Close-Quarters Shooter',
        level: 2,
        description:
          'At 2nd level, the gulch gunner does not provoke attacks of opportunity when firing a firearm while adjacent to an enemy.',
      },
      {
        name: 'Deed: Corner Shot',
        level: 7,
        description:
          'At 7th level, the gulch gunner can spend 1 grit point to fire around corners. She can make a firearm attack against a target that has cover from a wall or barrier as if it had only partial cover, and she does not need line of sight if she has line of effect. This replaces Utility Shot.',
      },
      {
        name: 'Tunnel Fighter',
        level: 9,
        description:
          'At 9th level, the gulch gunner gains a +2 dodge bonus to AC in areas of confined space (corridors, tunnels, rooms smaller than 10 feet wide). She also cannot be flanked in these conditions.',
      },
    ],
    source: 'Pathfinder Player Companion: Ranged Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 15. Musketeer
  // ──────────────────────────────────────────────
  {
    name: 'Musketeer',
    className: 'Gunslinger',
    description:
      "The musketeer is a disciplined military gunslinger who specializes in two-handed firearms, bayonet fighting, and formation tactics. She sacrifices some of the classic gunslinger's individual flair for the precision of a trained soldier.",
    replacedFeatures: [
      "Deeds (Gunslinger's Dodge, Pistol-Whip, Startling Shot)",
      'Gun Training 1',
      'Gun Training 2',
    ],
    modifiedFeatures: ['Nimble (applies only while wearing light or no armor)'],
    newFeatures: [
      {
        name: 'Two-Handed Firearm Training',
        level: 5,
        description:
          'At 5th level, the musketeer adds her Dexterity modifier to damage rolls with two-handed firearms. This bonus increases by +1 for every 4 gunslinger levels beyond 5th (maximum +5 at 17th level). This replaces Gun Training 1.',
      },
      {
        name: 'Bayonet Mastery',
        level: 1,
        description:
          'At 1st level, the musketeer gains proficiency with bayonets and can attach or detach a bayonet as a free action. She adds half her gunslinger level as a bonus on damage rolls with bayonets.',
      },
      {
        name: 'Deed: Formation Volley',
        level: 7,
        description:
          "At 7th level, the musketeer can spend 1 grit point to coordinate with up to 3 allies within 30 feet, granting them each a +2 bonus on their next ranged attack roll made before the end of the musketeer's next turn. This replaces Startling Shot.",
      },
      {
        name: 'Disciplined Shooting',
        level: 9,
        description:
          'At 9th level, the musketeer gains a +2 competence bonus on attack rolls with two-handed firearms when she has not moved since the beginning of her last turn, or when she is adjacent to at least one ally.',
      },
    ],
    source: "Pathfinder Player Companion: Armor Master's Handbook",
  },

  // ──────────────────────────────────────────────
  // 16. Mysterious Avenger
  // ──────────────────────────────────────────────
  {
    name: 'Mysterious Avenger',
    className: 'Gunslinger',
    description:
      "The mysterious avenger is a masked vigilante gunslinger who uses her reputation and disguise to fight crime and injustice. She blends the gunslinger's deadly skill with a carefully cultivated dual identity that strikes fear into lawbreakers.",
    replacedFeatures: ['Bonus Feats (4th, 8th)', "Deeds (Slinger's Luck)"],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Dual Identity',
        level: 1,
        description:
          'The mysterious avenger maintains two identities: a social identity and a vigilante identity. While in her vigilante identity (masked, costumed), she gains a +2 bonus on Intimidate checks and is treated as if she has the Intimidating Prowess feat.',
      },
      {
        name: 'Terror of the Guilty',
        level: 3,
        description:
          "At 3rd level, while in her vigilante identity, the mysterious avenger's Demoralize attempts affect all enemies who can see and hear her, not just a single target. This functions as the Dazzling Display feat.",
      },
      {
        name: 'Deed: Signature Shot',
        level: 5,
        description:
          "At 5th level, the mysterious avenger can spend 1 grit point to fire a shot that leaves a distinctive mark on the target (a brand, a symbolic wound pattern). The target is marked for 24 hours: the avenger always knows which direction the target is, and can track her by smell. This replaces Slinger's Luck.",
      },
      {
        name: 'Legend',
        level: 11,
        description:
          "At 11th level, the mysterious avenger's reputation precedes her. Enemies who have witnessed her deeds in her vigilante identity must succeed at a Will save (DC 10 + half gunslinger level + Charisma modifier) or be shaken for the first round of combat.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 17. Spellslinger (Gunslinger Variant)
  // ──────────────────────────────────────────────
  {
    name: 'Spellslinger',
    className: 'Gunslinger',
    description:
      'The spellslinger is a wizard archetype rather than a true gunslinger archetype, but a gunslinger variant exists for gunslingers who have dabbled in arcane magic, channeling spell energy through their firearms. This hybrid gains limited spellcasting at the cost of some grit-fueled abilities.',
    replacedFeatures: [
      'Bonus Feats (6th, 10th, 14th, 18th)',
      'Deeds (Utility Shot, Bleeding Wound, Expert Loading)',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Arcane Bond (Firearm)',
        level: 1,
        description:
          'The spellslinger bonds with her firearm as an arcane bond item, allowing her to channel spells through it. She casts spells as a wizard of half her gunslinger level, gaining a spellbook and preparing spells normally.',
      },
      {
        name: 'Spellshot',
        level: 3,
        description:
          "At 3rd level, the spellslinger can deliver a touch spell through her firearm as part of a ranged attack. The spell uses the firearm's range increment and the attack roll as the touch attack roll. The spell is discharged whether or not the attack hits.",
      },
      {
        name: 'Arcane Deed',
        level: 5,
        description:
          "At 5th level, the spellslinger can spend grit points to enhance spells delivered through her firearm: 1 grit extends the spell's range, 2 grit doubles the spell's effective caster level for determining damage or duration.",
      },
      {
        name: 'Mystic Bullet',
        level: 11,
        description:
          'At 11th level, the spellslinger can load a spell into a bullet as a full-round action. The bullet can be fired at any time within 24 hours, releasing the spell on impact. Only spells with a range of touch or close can be loaded this way.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },
];
