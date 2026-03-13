import { ArchetypeData } from '../types';

export const PALADIN_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Chosen One
  // ──────────────────────────────────────────────
  {
    name: 'Chosen One',
    className: 'Paladin',
    description:
      'A chosen one is a paladin who was chosen by a celestial emissary that takes the form of a familiar, guiding the paladin along her path.',
    replacedFeatures: ['Smite Evil', 'Divine Grace', 'Lay on Hands', 'Divine Bond'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Divine Emissary',
        level: 1,
        description:
          "The chosen one gains a familiar as an arcane bond, as a wizard of her paladin level. The familiar also has an alignment that matches the paladin and can use the paladin's detect evil ability at will.",
      },
      {
        name: 'Delayed Grace',
        level: 2,
        description:
          'A chosen one gains divine grace at 4th level instead of 2nd. The emissary grants guidance and support but requires the paladin to prove herself first.',
      },
      {
        name: 'Lay on Paws',
        level: 2,
        description:
          "At 2nd level, the chosen one's emissary can use lay on hands as the paladin ability, using the paladin's level to determine the amount healed. The chosen one does not gain lay on hands herself until 4th level.",
      },
      {
        name: 'Emissary Smite',
        level: 1,
        description:
          'The chosen one gains smite evil at 1st level but the emissary must designate the target. Additional uses follow the standard paladin progression.',
      },
      {
        name: 'True Form',
        level: 11,
        description:
          "At 11th level, the emissary reveals its true celestial form, gaining the celestial template. It gains SR equal to 5 + the paladin's level and resistance to acid, cold, and electricity 10.",
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 2. Divine Defender
  // ──────────────────────────────────────────────
  {
    name: 'Divine Defender',
    className: 'Paladin',
    description:
      'A divine defender is a paladin focused on protecting a specific location or site, channeling divine power into a powerful ward.',
    replacedFeatures: [
      'Smite Evil',
      'Channel Positive Energy',
      'Divine Bond',
      'Aura of Justice',
      'Holy Champion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Shared Defense',
        level: 1,
        description:
          'At 1st level, a divine defender can designate a single ally as being under her protection as a move action. The ally gains a +1 sacred bonus to AC and saving throws. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Divine Guardian',
        level: 4,
        description:
          'At 4th level, the divine defender can spend two uses of lay on hands to create a 20-foot-radius zone centered on herself that provides DR 2/evil to all allies within it for 1 minute. The DR increases by 2 at 8th, 12th, 16th, and 20th level.',
      },
      {
        name: 'Aura of the Defender',
        level: 11,
        description:
          "At 11th level, the divine defender can expend one use of smite evil to grant all allies within 10 feet the ability to smite evil once, using the paladin's bonuses.",
      },
      {
        name: 'Holy Bastion',
        level: 20,
        description:
          'At 20th level, the divine defender becomes a conduit of divine power. Her DR increases to 10/evil, and any evil creature striking her in melee takes 1d6 points of holy damage.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 3. Divine Guardian
  // ──────────────────────────────────────────────
  {
    name: 'Divine Guardian',
    className: 'Paladin',
    description:
      'A divine guardian is a paladin sworn to protect a specific ward, gaining supernatural abilities to shield her charge from harm.',
    replacedFeatures: ['Smite Evil', 'Divine Bond', 'Aura of Justice', 'Aura of Faith'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Guardians Favor',
        level: 1,
        description:
          'The divine guardian selects a single creature as her ward. She gains a +1 sacred bonus on attack rolls and damage rolls against creatures threatening her ward. This bonus increases by +1 at 4th level and every 3 levels thereafter.',
      },
      {
        name: 'Protectors Bond',
        level: 5,
        description:
          'At 5th level, as an immediate action, the divine guardian can redirect an attack made against her ward to herself. She must be adjacent to her ward to use this ability.',
      },
      {
        name: 'Holy Shield',
        level: 11,
        description:
          'At 11th level, the divine guardian can project a shimmering field of force that grants her ward a +4 deflection bonus to AC and a +4 resistance bonus on saving throws for a number of rounds equal to her Charisma modifier.',
      },
      {
        name: 'Sacrificial Bond',
        level: 14,
        description:
          "At 14th level, when the divine guardian's ward would be reduced to 0 or fewer hit points, the divine guardian can sacrifice her own hit points to prevent the damage on a one-for-one basis as an immediate action.",
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 4. Divine Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Divine Hunter',
    className: 'Paladin',
    description:
      'A divine hunter trades heavy armor proficiency and some defensive auras for precision with ranged weapons, combining divine power with deadly aim.',
    replacedFeatures: [
      'Aura of Courage',
      'Channel Positive Energy',
      'Aura of Resolve',
      'Aura of Justice',
    ],
    modifiedFeatures: ['Divine Bond'],
    newFeatures: [
      {
        name: 'Precise Shot',
        level: 1,
        description:
          'At 1st level, a divine hunter gains Precise Shot as a bonus feat, even if she does not meet the prerequisites.',
      },
      {
        name: 'Shared Precision',
        level: 3,
        description:
          'At 3rd level, when a divine hunter hits an evil creature with a ranged attack, she grants her allies within 10 feet the ability to ignore the cover that creature has for 1 round.',
      },
      {
        name: 'Divine Bond (Ranged)',
        level: 5,
        description:
          'At 5th level, a divine hunter forms a bond with her ranged weapon. She can add enhancement bonuses or special abilities (flaming, holy, seeking, etc.) to her ranged weapon for 1 minute per level.',
      },
      {
        name: 'Aura of Care',
        level: 8,
        description:
          "At 8th level, a divine hunter and her allies within 10 feet do not provide soft cover to enemies against each other's ranged attacks.",
      },
      {
        name: "Hunter's Blessing",
        level: 11,
        description:
          'At 11th level, the divine hunter can expend two uses of smite evil to grant all allies within 10 feet Precise Shot and her shared precision ability for 1 minute.',
      },
      {
        name: 'Righteous Hunter',
        level: 14,
        description:
          "At 14th level, the divine hunter's ranged attacks against evil creatures ignore any miss chance from concealment (but not total concealment). At 17th level, she ignores total concealment as well.",
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 5. Empyreal Knight
  // ──────────────────────────────────────────────
  {
    name: 'Empyreal Knight',
    className: 'Paladin',
    description:
      'An empyreal knight dedicates herself to the service of a specific celestial patron, eventually gaining the ability to call a celestial ally.',
    replacedFeatures: ['Divine Bond', 'Aura of Faith', 'Aura of Righteousness', 'Holy Champion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Voices of the Spheres',
        level: 2,
        description:
          'At 2nd level, an empyreal knight gains Celestial as a bonus language and a +2 bonus on Knowledge (planes) and Knowledge (religion) checks.',
      },
      {
        name: 'Celestial Ally',
        level: 5,
        description:
          'At 5th level, the empyreal knight can call upon a celestial ally as if using lesser planar ally once per week. The ally serves without payment if the task aligns with good. At 8th level this improves to planar ally, and at 14th level to greater planar ally.',
      },
      {
        name: 'Celestial Heart',
        level: 11,
        description:
          'At 11th level, the empyreal knight gains a +4 sacred bonus on saving throws against poison and petrification. She gains resistance to acid 10, cold 10, and electricity 10.',
      },
      {
        name: 'Celestial Form',
        level: 20,
        description:
          "At 20th level, the empyreal knight's type changes to outsider (native). She gains DR 10/evil, immunity to acid, cold, and electricity, and the ability to fly at twice her base speed with perfect maneuverability.",
      },
    ],
    source: 'Knights of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // 6. Ghost Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Ghost Hunter',
    className: 'Paladin',
    description:
      'A ghost hunter specializes in combating incorporeal undead and haunts, gaining tools to interact with and destroy such threats.',
    replacedFeatures: [
      'Divine Health',
      'Mercy (3rd)',
      'Mercy (6th)',
      'Channel Positive Energy',
      'Divine Bond',
    ],
    modifiedFeatures: ['Detect Evil', 'Smite Evil'],
    newFeatures: [
      {
        name: 'Detect Undead',
        level: 1,
        description:
          "A ghost hunter's detect evil ability is replaced with detect undead. She can use this at will as a move action.",
      },
      {
        name: 'Ghostly Strike',
        level: 1,
        description:
          "When using smite evil against an undead creature, the ghost hunter's weapons are treated as having the ghost touch property for the duration of the smite.",
      },
      {
        name: 'Haunt Siphon',
        level: 3,
        description:
          'At 3rd level, a ghost hunter can siphon energy from a haunt, dealing damage to it with a touch attack equal to her lay on hands healing amount. She can also attempt to neutralize a haunt by channeling positive energy directly into it.',
      },
      {
        name: 'Spectral Ally',
        level: 5,
        description:
          'At 5th level, the ghost hunter forms a divine bond with a ghostly weapon, which gains the ghost touch special ability in addition to other enhancement bonuses.',
      },
      {
        name: 'Phantom Purge',
        level: 6,
        description:
          'At 6th level, the ghost hunter can spend two uses of lay on hands to create a 20-foot burst of positive energy that forces all incorporeal undead within range to make a Will save or become corporeal for a number of rounds equal to her Charisma modifier.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 7. Holy Gun
  // ──────────────────────────────────────────────
  {
    name: 'Holy Gun',
    className: 'Paladin',
    description:
      'A holy gun channels divine power through firearms rather than melee weapons, combining faith and firepower against the forces of evil.',
    replacedFeatures: [
      'Smite Evil',
      'Divine Grace',
      'Aura of Courage',
      'Channel Positive Energy',
      'Divine Bond',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Have Gun',
        level: 1,
        description:
          'At 1st level, the holy gun gains Amateur Gunslinger and Gunsmithing as bonus feats. She also gains a battered firearm identical to the one gained by a gunslinger.',
      },
      {
        name: 'Divine Grit',
        level: 2,
        description:
          'At 2nd level, a holy gun gains a grit pool equal to her Charisma modifier. She can spend grit to perform deeds as a gunslinger of her paladin level. She regains grit when she confirms a critical hit with a firearm or reduces an evil creature to 0 or fewer hit points.',
      },
      {
        name: 'Holy Grit',
        level: 3,
        description:
          'At 3rd level, the holy gun can spend 2 grit points to add her Charisma bonus to a single firearm attack roll. At 7th level she adds her Charisma bonus to firearm damage as well.',
      },
      {
        name: 'Smiting Shot',
        level: 1,
        description:
          'At 1st level, a holy gun can spend one use of smite evil to make a single firearm attack that adds her Charisma modifier to the attack roll and her paladin level to the damage roll against evil targets. Additional uses are gained at 4th level and every 3 levels thereafter.',
      },
      {
        name: 'Divine Bond (Firearm)',
        level: 5,
        description:
          'At 5th level, the holy gun forms a bond with a firearm, which can be enhanced with special abilities such as distance, flaming, holy, or reliable.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 8. Holy Tactician
  // ──────────────────────────────────────────────
  {
    name: 'Holy Tactician',
    className: 'Paladin',
    description:
      'A holy tactician inspires her allies on the battlefield, granting them teamwork feats and coordinating their efforts against the forces of evil.',
    replacedFeatures: [
      'Mercy (3rd)',
      'Channel Positive Energy',
      'Divine Bond',
      'Aura of Justice',
      'Holy Champion',
    ],
    modifiedFeatures: ['Smite Evil'],
    newFeatures: [
      {
        name: "Weal's Champion",
        level: 1,
        description:
          'Once per day as a swift action, a holy tactician can choose a single evil target and grant her allies within 30 feet a +2 sacred bonus on attack rolls and a +2 sacred bonus to AC against that target. This effect lasts a number of rounds equal to her Charisma modifier.',
      },
      {
        name: 'Tactical Acumen',
        level: 3,
        description:
          'At 3rd level, a holy tactician gains a bonus teamwork feat. She gains an additional teamwork feat at 6th level and every 6 levels thereafter.',
      },
      {
        name: 'Battlefield Presence',
        level: 5,
        description:
          'At 5th level, as a swift action, the holy tactician can grant one of her teamwork feats to all allies within 30 feet who can see and hear her. Allies retain this feat for 3 rounds plus 1 round per 2 paladin levels.',
      },
      {
        name: 'Guide the Battle',
        level: 8,
        description:
          'At 8th level, the holy tactician can spend a standard action to allow a single ally within 30 feet to make an attack at her highest base attack bonus.',
      },
      {
        name: 'Masterful Presence',
        level: 20,
        description:
          'At 20th level, the holy tactician can grant all of her teamwork feats to all allies within 30 feet as a swift action. She also doubles the range of all her tactical abilities.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 9. Hospitaler
  // ──────────────────────────────────────────────
  {
    name: 'Hospitaler',
    className: 'Paladin',
    description:
      'A hospitaler focuses on healing and removing afflictions, becoming an unparalleled medic on the battlefield at the cost of some of her offensive power.',
    replacedFeatures: ['Smite Evil (1st)', 'Smite Evil (4th)', 'Aura of Justice', 'Holy Champion'],
    modifiedFeatures: ['Channel Positive Energy'],
    newFeatures: [
      {
        name: 'Power of Faith',
        level: 4,
        description:
          'At 4th level, a hospitaler can spend one use of channel positive energy to remove conditions from a single target. She can remove the fatigued, shaken, or sickened condition. At 8th level she can remove dazed, staggered, or diseased. At 12th level, exhausted, frightened, nauseated, or poisoned.',
      },
      {
        name: 'Enhanced Channel',
        level: 1,
        description:
          'A hospitaler gains channel positive energy at 1st level (rather than 4th). She adds 1d6 to the amount of healing her channel energy provides at 1st level and an additional 1d6 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Aura of Healing',
        level: 11,
        description:
          'At 11th level, a hospitaler can spend one use of channel positive energy to provide fast healing 3 to all allies within 30 feet for 1 round per paladin level.',
      },
      {
        name: 'Supreme Healer',
        level: 20,
        description:
          'At 20th level, whenever a hospitaler channels positive energy or uses lay on hands, the targets heal the maximum possible amount. She can also expend 10 uses of lay on hands to cast resurrection.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 10. Invigorator
  // ──────────────────────────────────────────────
  {
    name: 'Invigorator',
    className: 'Paladin',
    description:
      'An invigorator channels divine energy to bolster allies, granting temporary hit points and vigor rather than directly healing wounds.',
    replacedFeatures: ['Lay on Hands', 'Mercy (3rd)', 'Mercy (6th)', 'Channel Positive Energy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Invigorate',
        level: 2,
        description:
          'At 2nd level, as a standard action the invigorator can grant a single ally a number of temporary hit points equal to 1d6 per 2 paladin levels plus her Charisma modifier. These temporary hit points last for 1 minute per paladin level.',
      },
      {
        name: 'Vigor of Life',
        level: 3,
        description:
          'At 3rd level, when the invigorator uses invigorate, the target also gains a +2 morale bonus on attack rolls and saving throws for 1 round per paladin level.',
      },
      {
        name: 'Mass Invigorate',
        level: 4,
        description:
          'At 4th level, the invigorator can spend two uses of invigorate to grant temporary hit points to all allies within 30 feet. Each ally gains temporary hit points as if targeted individually.',
      },
      {
        name: 'Undying Vigor',
        level: 6,
        description:
          'At 6th level, when the invigorator uses invigorate on an ally who is below 0 hit points, that ally is automatically stabilized and can act on their next turn as if they had 1 hit point (though their actual hit points remain unchanged).',
      },
    ],
    source: "Healer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 11. Iroran Paladin
  // ──────────────────────────────────────────────
  {
    name: 'Iroran Paladin',
    className: 'Paladin',
    description:
      'An Iroran paladin (also called an enlightened paladin) seeks perfection of body and mind through martial arts and meditation in service to Irori.',
    replacedFeatures: [
      'Detect Evil',
      'Smite Evil',
      'Divine Grace',
      'Lay on Hands',
      'Mercy',
      'Channel Positive Energy',
      'Divine Bond',
      'Aura of Justice',
      'Aura of Faith',
      'Holy Champion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Confident Defense',
        level: 1,
        description:
          'When wearing no armor and not using a shield, an Iroran paladin adds her Charisma bonus (if any) as a dodge bonus to AC. This bonus is lost when she is flat-footed, helpless, or encumbered.',
      },
      {
        name: 'Unarmed Strike',
        level: 1,
        description:
          'At 1st level, an Iroran paladin gains Improved Unarmed Strike as a bonus feat. She deals unarmed damage as a monk of her paladin level.',
      },
      {
        name: 'Personal Trial',
        level: 1,
        description:
          'Once per day, an Iroran paladin can challenge herself by focusing on self-improvement. She gains a +1 insight bonus on attack rolls, damage rolls, saving throws, skill checks, and ability checks for 1 minute. This bonus increases by +1 at 4th level and every 3 levels thereafter.',
      },
      {
        name: 'Ki Pool',
        level: 4,
        description:
          'At 4th level, the Iroran paladin gains a ki pool equal to half her paladin level + her Charisma modifier. She can spend ki to make an additional unarmed attack, increase speed by 20 feet, or gain a +4 dodge bonus to AC for 1 round.',
      },
      {
        name: 'Detect Improvement',
        level: 1,
        description:
          'An Iroran paladin can detect if a creature is of a lower character level than herself at will, but she cannot detect alignment.',
      },
      {
        name: 'Aura of Excellence',
        level: 11,
        description:
          'At 11th level, each ally within 10 feet gains a +2 morale bonus on all ability checks and skill checks. This aura functions only while the Iroran paladin is conscious.',
      },
      {
        name: 'Perfect Champion',
        level: 20,
        description:
          'At 20th level, the Iroran paladin achieves bodily perfection. Her type changes to outsider (native). She gains DR 5/evil, immunity to compulsion effects, and all her personal trial bonuses double.',
      },
    ],
    source: 'Divine Anthology',
  },

  // ──────────────────────────────────────────────
  // 12. Knight of the Sepulcher
  // ──────────────────────────────────────────────
  {
    name: 'Knight of the Sepulcher',
    className: 'Paladin',
    description:
      'An antipaladin archetype variant for the paladin, the knight of the sepulcher is infused with undead energies and seeks to master death itself. This is technically an antipaladin archetype but is included for completeness.',
    replacedFeatures: [
      'Aura of Courage',
      'Aura of Resolve',
      'Channel Positive Energy',
      'Aura of Justice',
      'Aura of Righteousness',
      'Holy Champion',
    ],
    modifiedFeatures: ['Divine Health'],
    newFeatures: [
      {
        name: 'Touch of the Crypt',
        level: 5,
        description:
          'At 5th level, the knight of the sepulcher gains a +2 bonus on saving throws against mind-affecting effects, death effects, and poison. She also gains DR 5/bludgeoning. This DR increases by 5 at 10th, 15th, and 20th level.',
      },
      {
        name: 'Fortitude of the Crypt',
        level: 8,
        description:
          'At 8th level, the knight of the sepulcher gains immunity to poison. She also no longer needs to eat, drink, or breathe.',
      },
      {
        name: 'Cloak of the Crypt',
        level: 10,
        description:
          'At 10th level, the knight of the sepulcher gains immunity to energy drain and negative levels. She also gains resistance to cold 10 and electricity 10.',
      },
      {
        name: 'Will of the Crypt',
        level: 15,
        description:
          'At 15th level, the knight of the sepulcher gains immunity to death effects, paralysis, sleep, and stunning. Once per day when she would be killed, she can attempt a DC 20 Will save to instead be reduced to 1 hit point.',
      },
      {
        name: 'Weapon of the Crypt',
        level: 20,
        description:
          'At 20th level, the knight of the sepulcher becomes an undead creature. She gains all undead immunities but can still be healed by positive energy. Her type permanently changes to undead.',
      },
    ],
    source: 'Knights of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // 13. Martyr
  // ──────────────────────────────────────────────
  {
    name: 'Martyr',
    className: 'Paladin',
    description:
      'A martyr willingly suffers pain and hardship to protect others, drawing divine power from self-sacrifice and enduring wounds meant for her allies.',
    replacedFeatures: ['Smite Evil', 'Divine Grace', 'Aura of Justice', 'Holy Champion'],
    modifiedFeatures: ['Lay on Hands'],
    newFeatures: [
      {
        name: 'Stigmata',
        level: 1,
        description:
          'At 1st level, as a swift action, the martyr can cause wounds to open on her body, taking 1d6 points of damage. She and all allies within 30 feet gain a +1 sacred bonus on attack rolls, damage rolls, or saving throws (chosen when stigmata is activated). The bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Sacrificial Shield',
        level: 2,
        description:
          "At 2nd level, as an immediate action, the martyr can redirect damage dealt to an adjacent ally to herself. She takes the full damage in the ally's place. She can use this a number of times per day equal to her Charisma modifier.",
      },
      {
        name: 'Lay on Hands (Self-Sacrifice)',
        level: 2,
        description:
          "A martyr's lay on hands heals an additional 1d6 hit points when used on others, but heals 1d6 fewer hit points when used on herself.",
      },
      {
        name: 'Aura of Sacrifice',
        level: 11,
        description:
          'At 11th level, all allies within 10 feet gain fast healing 2 whenever the martyr has stigmata active. This fast healing increases to 4 at 15th level.',
      },
      {
        name: 'Supreme Martyr',
        level: 20,
        description:
          'At 20th level, when the martyr would be killed, she can choose to remain alive at 1 hit point and emit a 30-foot burst of positive energy healing all allies for 10d6 hit points. She can do this once per day.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 14. Oathbound Paladin (Oath Against Chaos)
  // ──────────────────────────────────────────────
  {
    name: 'Oath Against Chaos',
    className: 'Paladin',
    description:
      'An oathbound paladin who has sworn an oath against chaos dedicates herself to battling chaotic outsiders and creatures of disorder.',
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice'],
    modifiedFeatures: ['Smite Evil'],
    newFeatures: [
      {
        name: 'Smite Chaos',
        level: 1,
        description:
          'This functions as smite evil, but against chaotic-aligned creatures rather than evil ones. Against chaotic outsiders, the bonus to damage on the first attack increases to 2 points per paladin level.',
      },
      {
        name: 'Aura of Order',
        level: 8,
        description:
          'At 8th level, the paladin can spend two uses of smite chaos to grant all allies within 10 feet the ability to overcome chaotic DR with their weapons for 1 minute.',
      },
      {
        name: 'Holy Order',
        level: 11,
        description:
          "At 11th level, the paladin can spend one use of smite chaos to grant all allies within 10 feet the ability to smite chaos once, using the paladin's level to determine the damage bonus.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 15. Oathbound Paladin (Oath Against Corruption)
  // ──────────────────────────────────────────────
  {
    name: 'Oath Against Corruption',
    className: 'Paladin',
    description:
      'A paladin who takes the oath against corruption dedicates herself to destroying fiends and cleansing their taint from the world.',
    replacedFeatures: ['Aura of Courage', 'Aura of Justice'],
    modifiedFeatures: ['Smite Evil'],
    newFeatures: [
      {
        name: 'Anchoring Aura',
        level: 8,
        description:
          "At 8th level, the paladin's aura hampers evil outsiders' extradimensional travel. Evil outsiders within 20 feet must succeed on a Will save (DC 10 + half paladin level + Charisma modifier) to use any teleportation or plane-shifting ability.",
      },
      {
        name: 'Holy Vessel',
        level: 11,
        description:
          'At 11th level, the paladin can spend two uses of smite evil to grant protection from evil to all allies within 10 feet for 1 minute per paladin level, with a caster level equal to her paladin level.',
      },
      {
        name: 'Corruption Purge',
        level: 1,
        description:
          "When using smite evil against an evil outsider, the paladin's weapon bypasses all DR the outsider possesses.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 16. Oathbound Paladin (Oath Against the Wyrm)
  // ──────────────────────────────────────────────
  {
    name: 'Oath Against the Wyrm',
    className: 'Paladin',
    description:
      'A paladin who takes the oath against the wyrm dedicates herself to the destruction of dragons, becoming a fearsome dragonslayer.',
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice'],
    modifiedFeatures: ['Smite Evil'],
    newFeatures: [
      {
        name: 'Breath Evasion',
        level: 8,
        description:
          'At 8th level, the paladin gains evasion but only against breath weapons. At 11th level, she gains improved evasion against breath weapons.',
      },
      {
        name: 'Divine Dragonbane',
        level: 11,
        description:
          'At 11th level, the paladin can spend two uses of smite evil to grant all allies within 10 feet the dragonbane special ability on their weapons for 1 minute.',
      },
      {
        name: 'Wyrm Smite',
        level: 1,
        description:
          'When using smite evil against a dragon, the paladin adds her Charisma modifier to attack rolls and double her paladin level to damage on the first successful attack.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 17. Oathbound Paladin (Oath of Vengeance)
  // ──────────────────────────────────────────────
  {
    name: 'Oath of Vengeance',
    className: 'Paladin',
    description:
      'A paladin who takes the oath of vengeance dedicates herself to punishing those who have committed heinous sins, pursuing justice with relentless fury.',
    replacedFeatures: ['Channel Positive Energy', 'Aura of Justice'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Vow of Vengeance',
        level: 1,
        description:
          'As a swift action, the paladin can channel her wrathful fury against a single evil creature she can see. She gains a +1 sacred bonus on attack rolls and damage rolls against the target. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Powerful Justice',
        level: 4,
        description:
          'At 4th level, the paladin can spend two uses of lay on hands to gain an extra use of smite evil that day.',
      },
      {
        name: 'Channel Wrath',
        level: 11,
        description:
          'At 11th level, when the paladin activates smite evil, she can expend one use of lay on hands to deal extra damage equal to her lay on hands amount on the first successful attack.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 18. Oathbound Paladin (Oath of Charity)
  // ──────────────────────────────────────────────
  {
    name: 'Oath of Charity',
    className: 'Paladin',
    description:
      'A paladin who takes the oath of charity dedicates herself to protecting the weak and poor, vowing poverty for herself while enriching others.',
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice'],
    modifiedFeatures: ['Divine Bond'],
    newFeatures: [
      {
        name: 'Charitable Hands',
        level: 2,
        description:
          'At 2nd level, when the paladin uses lay on hands on another creature, she heals an extra 50% more hit points than normal. When used on herself, she heals 50% less.',
      },
      {
        name: 'Generous Soul',
        level: 8,
        description:
          'At 8th level, the paladin and all allies within 10 feet gain a +4 sacred bonus on saving throws against compulsion effects.',
      },
      {
        name: 'Aura of Charity',
        level: 11,
        description:
          'At 11th level, when the paladin uses channel positive energy, she can choose to split the healing dice, granting the full amount to the most injured allies first.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 19. Oathbound Paladin (Oath of Chastity)
  // ──────────────────────────────────────────────
  {
    name: 'Oath of Chastity',
    className: 'Paladin',
    description:
      'A paladin who takes the oath of chastity has forsworn romantic and physical pleasures, gaining enhanced purity of body and mind.',
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice'],
    modifiedFeatures: ['Divine Health'],
    newFeatures: [
      {
        name: 'Pure of Mind',
        level: 2,
        description:
          'At 2nd level, the paladin gains a +4 sacred bonus on saving throws against charm and compulsion effects. This bonus applies to allies within 10 feet at 8th level.',
      },
      {
        name: 'Pure of Body',
        level: 8,
        description:
          'At 8th level, the paladin is immune to all diseases, including supernatural and magical diseases. She also gains immunity to ability damage and drain from poison.',
      },
      {
        name: 'Aura of Purity',
        level: 11,
        description:
          'At 11th level, allies within 10 feet gain a +4 sacred bonus on saving throws against disease, poison, and compulsion effects.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 20. Sacred Servant
  // ──────────────────────────────────────────────
  {
    name: 'Sacred Servant',
    className: 'Paladin',
    description:
      'A sacred servant serves a specific deity, gaining access to a domain and the ability to call upon planar allies aligned with her faith.',
    replacedFeatures: [
      'Smite Evil (4th)',
      'Smite Evil (10th)',
      'Smite Evil (16th)',
      'Divine Bond',
      'Aura of Justice',
      'Holy Champion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Deity Domain',
        level: 4,
        description:
          "At 4th level, a sacred servant selects one domain from among those belonging to her deity. She gains the domain's granted power as a cleric of her paladin level - 3. She also adds the domain spells to her paladin spell list.",
      },
      {
        name: 'Call Celestial Ally',
        level: 8,
        description:
          'At 8th level, once per day the sacred servant can call upon a celestial ally as if using lesser planar ally. At 12th level this improves to planar ally. At 16th level this improves to greater planar ally.',
      },
      {
        name: 'Divine Ally',
        level: 5,
        description:
          "At 5th level, the sacred servant's divine bond functions as the standard paladin divine bond, but she must select a weapon bond. The weapon gains the axiomatic or holy special ability automatically.",
      },
      {
        name: 'Holy Herald',
        level: 20,
        description:
          'At 20th level, the sacred servant becomes a vessel of her deity. She gains DR 10/evil, regeneration 5 (overcome by evil weapons and spells), and her call celestial ally ability can be used at will.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 21. Sacred Shield
  // ──────────────────────────────────────────────
  {
    name: 'Sacred Shield',
    className: 'Paladin',
    description:
      'A sacred shield is a paladin who focuses on defense and protecting allies rather than offense, using her shield as a conduit for divine protection.',
    replacedFeatures: [
      'Smite Evil',
      'Channel Positive Energy',
      'Divine Bond',
      'Aura of Justice',
      'Aura of Faith',
      'Holy Champion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Bastion of Good',
        level: 1,
        description:
          'At 1st level, a sacred shield can designate a single ally within close range as her ward. She gains a deflection bonus equal to her Charisma modifier to AC when adjacent to her ward. She can change her ward as a swift action.',
      },
      {
        name: 'Holy Shield',
        level: 4,
        description:
          "At 4th level, as a standard action, the sacred shield can grant her shield's AC bonus (including enhancement) to an adjacent ally. This lasts until the start of her next turn, during which time the sacred shield loses her shield bonus to AC.",
      },
      {
        name: 'Divine Bond (Shield)',
        level: 5,
        description:
          'At 5th level, the sacred shield forms a divine bond with her shield. She can add enhancement bonuses or special abilities (arrow deflection, bashing, blinding, fortification, reflecting, spell resistance) to her shield.',
      },
      {
        name: 'Improved Bastion',
        level: 11,
        description:
          'At 11th level, the sacred shield can designate two wards instead of one. She gains her deflection bonus when adjacent to either ward.',
      },
      {
        name: 'Perfect Bastion',
        level: 20,
        description:
          "At 20th level, the sacred shield's ward gains DR 10/evil while adjacent to her. Any evil creature that strikes her ward in melee takes 1d6 holy damage.",
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 22. Shining Knight
  // ──────────────────────────────────────────────
  {
    name: 'Shining Knight',
    className: 'Paladin',
    description:
      'A shining knight is a mounted paladin who excels at fighting from horseback, becoming a symbol of divine justice on the battlefield.',
    replacedFeatures: ['Divine Health', 'Mercy (3rd)', 'Mercy (9th)', 'Mercy (15th)'],
    modifiedFeatures: ['Divine Bond'],
    newFeatures: [
      {
        name: 'Skilled Rider',
        level: 3,
        description:
          'At 3rd level, a shining knight gains Ride as a class skill and does not take armor check penalties on Ride checks. She gains Mounted Combat as a bonus feat.',
      },
      {
        name: 'Divine Bond (Mount)',
        level: 5,
        description:
          'A shining knight must select a mount as her divine bond. The mount gains additional hit points, AC bonuses, and special abilities beyond a standard paladin mount.',
      },
      {
        name: "Knight's Charge",
        level: 9,
        description:
          'At 9th level, the shining knight can make a devastating charge, adding her Charisma bonus to the attack roll and dealing double damage on a successful mounted charge (triple with a lance).',
      },
      {
        name: 'Mounted Mastery',
        level: 15,
        description:
          'At 15th level, the shining knight never takes damage from a failed Ride check or being unhorsed. She gains Ride-By Attack and Spirited Charge as bonus feats if she does not already have them.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 23. Stonelord
  // ──────────────────────────────────────────────
  {
    name: 'Stonelord',
    className: 'Paladin',
    description:
      'A dwarven paladin who channels the strength of the earth, a stonelord draws power from stone and earth to protect her people from the threats below and above.',
    replacedFeatures: [
      'Detect Evil',
      'Smite Evil',
      'Divine Grace',
      'Lay on Hands',
      'Channel Positive Energy',
      'Divine Bond',
      'Mercy',
      'Aura of Courage',
      'Aura of Resolve',
      'Aura of Justice',
      'Aura of Faith',
      'Aura of Righteousness',
      'Holy Champion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Heartstone',
        level: 2,
        description:
          'At 2nd level, a stonelord gains a special stone that serves as a focus for her powers. She can use it to cast stone call once per day per 4 paladin levels. The heartstone also provides a +2 bonus on Craft checks related to stone.',
      },
      {
        name: 'Stonestrike',
        level: 1,
        description:
          'Once per day, a stonelord can draw upon the power of stone to enhance her attacks. She gains a +1 bonus on attack and damage rolls that increases by +1 at 4th level and every 3 levels thereafter. This ability lasts 1 round per paladin level.',
      },
      {
        name: 'Stone Servant',
        level: 5,
        description:
          "At 5th level, the stonelord gains an earth elemental companion. It functions as a druid's animal companion, using the paladin's level as her effective druid level. The companion gains DR/adamantine equal to the paladin's level.",
      },
      {
        name: 'Defensive Stance',
        level: 4,
        description:
          'At 4th level, a stonelord gains the defensive stance ability as a stalwart defender of her level - 3. She gains a +2 dodge bonus to AC, a +2 morale bonus on Will saves, and a +4 bonus to CMD against bull rush and trip while in this stance.',
      },
      {
        name: 'Earth Glide',
        level: 12,
        description:
          'At 12th level, the stonelord can pass through stone, dirt, or almost any other sort of earth as easily as a fish swims through water for a number of rounds per day equal to her paladin level.',
      },
      {
        name: 'Stone Body',
        level: 20,
        description:
          "At 20th level, the stonelord's body transforms to living stone. She gains DR 10/adamantine, immunity to petrification, blindsense 60 feet (against creatures touching the ground), and earth glide at will.",
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 24. Tempered Champion
  // ──────────────────────────────────────────────
  {
    name: 'Tempered Champion',
    className: 'Paladin',
    description:
      'A tempered champion gives up spellcasting entirely, instead gaining combat feats and martial prowess to battle evil with blade and shield.',
    replacedFeatures: ['Spellcasting', 'Aura of Faith', 'Aura of Righteousness'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Bonus Feat',
        level: 4,
        description:
          'At 4th level and every 3 levels thereafter, a tempered champion gains a bonus combat feat in place of spellcasting. She must meet the prerequisites for these feats.',
      },
      {
        name: 'Combat Edge',
        level: 11,
        description:
          'At 11th level, the tempered champion gains weapon training as a fighter, selecting one weapon group. Her bonus increases by +1 at 14th, 17th, and 20th level.',
      },
      {
        name: 'Armored Ease',
        level: 14,
        description:
          'At 14th level, the tempered champion reduces the armor check penalty of any armor she wears by 3 (to a minimum of 0) and increases the maximum Dexterity bonus by 2.',
      },
      {
        name: 'Martial Champion',
        level: 20,
        description:
          'At 20th level, the tempered champion can add vorpal, speed, or brilliant energy to her weapon using her divine bond without counting it against her enhancement bonus limit.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 25. Temple Champion
  // ──────────────────────────────────────────────
  {
    name: 'Temple Champion',
    className: 'Paladin',
    description:
      'A temple champion serves as the militant arm of a temple, gaining warpriest blessings instead of certain paladin abilities.',
    replacedFeatures: [
      'Mercy',
      'Channel Positive Energy',
      'Aura of Justice',
      'Aura of Faith',
      'Aura of Righteousness',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Blessings',
        level: 3,
        description:
          "At 3rd level, a temple champion gains the warpriest's blessings class feature. She selects two blessings from her deity's domains, using her paladin level - 2 as her effective warpriest level.",
      },
      {
        name: 'Bonus Feat',
        level: 4,
        description:
          'At 4th level, the temple champion gains a bonus feat from the warpriest bonus feat list. She gains additional bonus feats at 8th, 12th, 16th, and 20th level.',
      },
      {
        name: "Temple Champion's Resolve",
        level: 11,
        description:
          'At 11th level, when using her blessings, the temple champion can choose to apply the major blessing even if her effective warpriest level would not normally allow it.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 26. Tortured Crusader
  // ──────────────────────────────────────────────
  {
    name: 'Tortured Crusader',
    className: 'Paladin',
    description:
      'A tortured crusader draws strength from personal suffering and emotional anguish, using Wisdom rather than Charisma as her defining attribute.',
    replacedFeatures: [
      'Detect Evil',
      'Smite Evil',
      'Divine Grace',
      'Lay on Hands',
      'Channel Positive Energy',
      'Aura of Courage',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Tortured Resolve',
        level: 1,
        description:
          'A tortured crusader uses Wisdom instead of Charisma for all paladin class features, including smite evil, lay on hands, and divine grace. She must be non-evil but does not need to be lawful good.',
      },
      {
        name: 'Self-Flagellation',
        level: 2,
        description:
          'At 2nd level, as a swift action the tortured crusader can deal 1d6 points of damage to herself to gain a +1 morale bonus on attack rolls, saving throws, and skill checks for 1 round. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
      },
      {
        name: 'Lay on Hands (Suffering)',
        level: 2,
        description:
          'At 2nd level, the tortured crusader gains lay on hands but can only use it on others, never herself. She cannot use it to harm undead.',
      },
      {
        name: 'Smite Evil (Modified)',
        level: 1,
        description:
          'A tortured crusader gains smite evil, but the bonus to damage is equal to half her paladin level (minimum 1) rather than her full level. Against evil outsiders, evil dragons, and undead, the bonus is equal to her full level.',
      },
      {
        name: 'Pain Is Penance',
        level: 3,
        description:
          'At 3rd level, whenever the tortured crusader takes damage from an evil source, she gains a +1 sacred bonus on her next attack roll against that creature. This bonus increases by +1 at 9th level and again at 15th level.',
      },
      {
        name: 'Courage Through Tears',
        level: 3,
        description:
          'At 3rd level, the tortured crusader gains immunity to fear effects. She does not project an aura of courage to her allies.',
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 27. Undead Scourge
  // ──────────────────────────────────────────────
  {
    name: 'Undead Scourge',
    className: 'Paladin',
    description:
      'An undead scourge specializes in detecting and destroying the undead, channeling holy power specifically tailored to combating the living dead.',
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice', 'Aura of Righteousness'],
    modifiedFeatures: ['Smite Evil'],
    newFeatures: [
      {
        name: 'Smite Undead',
        level: 1,
        description:
          "The undead scourge's smite evil works normally against evil creatures but deals double the bonus damage against undead. Against undead that are not evil, the smite still functions but without the deflection bonus to AC.",
      },
      {
        name: 'Aura of Life',
        level: 8,
        description:
          'At 8th level, the undead scourge and all allies within 10 feet gain a +4 morale bonus on saving throws against negative energy effects and death effects. Additionally, undead within this aura take a -4 penalty on Will saves.',
      },
      {
        name: 'Undead Annihilation',
        level: 11,
        description:
          'At 11th level, the undead scourge can spend one use of channel positive energy to instead deal maximum damage to all undead within 30 feet (no save). She can use this ability once per day plus once more at 15th and 19th level.',
      },
      {
        name: 'Aura of Unlife Resistance',
        level: 14,
        description:
          'At 14th level, the paladin and allies within 10 feet are immune to energy drain and negative levels. This aura functions only while the paladin is conscious.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 28. Virtuoso Bravo
  // ──────────────────────────────────────────────
  {
    name: 'Virtuoso Bravo',
    className: 'Paladin',
    description:
      'A virtuoso bravo is a paladin who fights with panache and finesse, combining the grace of a swashbuckler with divine purpose.',
    replacedFeatures: [
      'Lay on Hands',
      'Mercy',
      'Channel Positive Energy',
      'Divine Bond',
      'Aura of Justice',
      'Aura of Faith',
      'Holy Champion',
    ],
    modifiedFeatures: ['Smite Evil'],
    newFeatures: [
      {
        name: 'Panache and Deeds',
        level: 1,
        description:
          "At 1st level, the virtuoso bravo gains a panache pool equal to her Charisma modifier and access to the swashbuckler's derring-do, dodging panache, and opportune parry and riposte deeds.",
      },
      {
        name: "Bravo's Smite",
        level: 1,
        description:
          "The virtuoso bravo's smite evil grants a bonus to damage rolls with one-handed piercing melee weapons equal to her paladin level. She does not gain the deflection bonus to AC.",
      },
      {
        name: 'Nimble',
        level: 3,
        description:
          'At 3rd level, the virtuoso bravo gains a +1 dodge bonus to AC while wearing light or no armor. This bonus increases by +1 at 7th level and every 4 levels thereafter (max +5 at 19th).',
      },
      {
        name: "Bravo's Holy Strike",
        level: 5,
        description:
          'At 5th level, while the virtuoso bravo has at least 1 panache point, her weapon attacks count as magic and good-aligned for the purpose of overcoming DR. At 11th level, they also count as cold iron and silver.',
      },
      {
        name: 'Advanced Deeds',
        level: 4,
        description:
          "At 4th level, the virtuoso bravo gains swashbuckler's grace and superior feint deeds. At 11th level, she gains bleeding wound, evasive, and subtle blade. At 20th level, she gains deadly stab and stunning stab.",
      },
      {
        name: 'Divine Finesse',
        level: 20,
        description:
          'At 20th level, the virtuoso bravo automatically confirms all critical hits with one-handed piercing melee weapons. Her smite evil attacks deal maximum damage, and she regains 2 panache whenever she reduces an evil creature to 0 or fewer hit points.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 29. Warrior of the Holy Light
  // ──────────────────────────────────────────────
  {
    name: 'Warrior of the Holy Light',
    className: 'Paladin',
    description:
      'A warrior of the holy light foregoes spellcasting to channel divine radiance, projecting auras that protect allies and harm the wicked.',
    replacedFeatures: ['Spellcasting', 'Aura of Faith', 'Aura of Righteousness'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Power of Faith',
        level: 4,
        description:
          'At 4th level, a warrior of the holy light can spend one use of lay on hands to project one of several auras: aura of healing (fast healing 2 for allies within 30 ft), aura of courage (+4 sacred bonus to saves vs fear), or aura of resolve (+4 sacred bonus to saves vs charm). At 8th level she adds aura of conviction (spell resistance equal to 11 + paladin level).',
      },
      {
        name: 'Shining Light',
        level: 14,
        description:
          'At 14th level, the warrior of the holy light can release a 30-foot burst of divine radiance that deals 1d6 points of damage per paladin level to evil creatures and heals 1d6 per paladin level for good creatures. Neutral creatures are unaffected. She can use this once per day.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 30. Holy Guide
  // ──────────────────────────────────────────────
  {
    name: 'Holy Guide',
    className: 'Paladin',
    description:
      'A holy guide uses her divine connection to navigate treacherous terrain and guide her allies safely through dangerous wilderness.',
    replacedFeatures: ['Mercy (3rd)', 'Mercy (9th)', 'Mercy (15th)', 'Divine Bond'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Favored Terrain',
        level: 3,
        description:
          'At 3rd level, the holy guide gains favored terrain as a ranger. She selects one terrain type and gains a +2 bonus on initiative checks, Knowledge (geography), Perception, Stealth, and Survival checks in that terrain. She gains an additional terrain at 9th and 15th level.',
      },
      {
        name: 'Dungeoneer',
        level: 5,
        description:
          'At 5th level, the holy guide can spend one use of lay on hands to grant all allies within 30 feet the benefits of her favored terrain bonuses for 1 minute per paladin level.',
      },
      {
        name: 'Terrain Bond',
        level: 5,
        description:
          'At 5th level, the holy guide forms a bond with her environment. While in her favored terrain, she gains a +2 sacred bonus to AC and saving throws. At 11th level this bonus increases to +4.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 31. Redeemer
  // ──────────────────────────────────────────────
  {
    name: 'Redeemer',
    className: 'Paladin',
    description:
      'A redeemer seeks to bring evil creatures back to the light rather than simply destroying them, offering mercy even to the most wicked.',
    replacedFeatures: [
      'Smite Evil (1st)',
      'Mercy (3rd)',
      'Channel Positive Energy',
      'Aura of Justice',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Merciful Smite',
        level: 1,
        description:
          "At 1st level, the redeemer can use merciful smite instead of smite evil. It functions like smite evil but deals nonlethal damage and does not bypass DR. If the target is rendered unconscious, the redeemer can attempt a Diplomacy check to shift the creature's attitude.",
      },
      {
        name: 'Aura of Mercy',
        level: 3,
        description:
          'At 3rd level, the redeemer gains a +4 sacred bonus on Diplomacy checks to influence evil creatures. All allies within 10 feet gain a +2 bonus on such checks as well.',
      },
      {
        name: 'Redemption',
        level: 4,
        description:
          "At 4th level, the redeemer can spend two uses of lay on hands to attempt to redeem an evil creature. The target must be willing (or helpless) and makes a Will save. On a failure, the creature's alignment shifts one step toward good.",
      },
      {
        name: 'Associates',
        level: 11,
        description:
          'At 11th level, the redeemer can associate with evil creatures without losing her paladin abilities, as long as she is actively working to redeem them.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 32. Luring Cavalier (Oath of the People's Council)
  // ──────────────────────────────────────────────
  {
    name: "Oath of the People's Council",
    className: 'Paladin',
    description:
      "A paladin who swears the oath of the people's council dedicates herself to protecting the common folk and serving as a champion of democratic ideals.",
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice'],
    modifiedFeatures: ['Smite Evil'],
    newFeatures: [
      {
        name: 'Rallying Smite',
        level: 1,
        description:
          'When the paladin uses smite evil, all allies within 30 feet gain a +1 morale bonus on attack rolls against the smite target. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Communal Defense',
        level: 8,
        description:
          'At 8th level, the paladin can spend two uses of lay on hands to grant all allies within 30 feet a +2 sacred bonus to AC for a number of rounds equal to her Charisma modifier.',
      },
      {
        name: 'Aura of the People',
        level: 11,
        description:
          'At 11th level, all allies within 10 feet gain a +4 sacred bonus on saving throws against fear and compulsion effects. This aura functions only while the paladin is conscious.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 33. Oath Against Savagery
  // ──────────────────────────────────────────────
  {
    name: 'Oath Against Savagery',
    className: 'Paladin',
    description:
      'A paladin who swears an oath against savagery dedicates herself to protecting civilization from barbarian hordes and savage beasts.',
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice'],
    modifiedFeatures: ['Smite Evil'],
    newFeatures: [
      {
        name: 'Holy Reach',
        level: 1,
        description:
          "When using smite evil against a target with the rage ability, the paladin's smite damage bonus increases by 2.",
      },
      {
        name: 'Calming Touch',
        level: 8,
        description:
          'At 8th level, the paladin can spend a use of lay on hands to attempt to end a rage, frenzy, or similar effect on a creature. The target makes a Will save (DC 10 + half paladin level + Charisma modifier) or the effect ends.',
      },
      {
        name: 'Aura of Civilization',
        level: 11,
        description:
          'At 11th level, allies within 10 feet gain a +2 sacred bonus to AC and CMD against creatures with the rage ability. Enemies with rage within the aura must succeed on a Will save each round or lose their rage.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 34. Oath Against Undeath
  // ──────────────────────────────────────────────
  {
    name: 'Oath Against Undeath',
    className: 'Paladin',
    description:
      'A paladin who swears an oath against undeath dedicates herself to the annihilation of all undead creatures and the prevention of their creation.',
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice'],
    modifiedFeatures: ['Smite Evil', 'Channel Positive Energy'],
    newFeatures: [
      {
        name: 'Detect Undead',
        level: 1,
        description: 'The paladin can use detect undead at will in addition to detect evil.',
      },
      {
        name: 'Ghost Touch Aura',
        level: 8,
        description:
          'At 8th level, the paladin can spend two uses of smite evil to grant all allies within 10 feet the ability to strike incorporeal undead as if their weapons had the ghost touch property for 1 minute.',
      },
      {
        name: 'Aura of Life',
        level: 11,
        description:
          'At 11th level, undead within 10 feet of the paladin take a -4 penalty on Will saves and cannot be created within the area. Undead summoning and creation spells automatically fail if the undead would appear within this aura.',
      },
      {
        name: 'Superior Channel',
        level: 4,
        description:
          'At 4th level, the paladin adds +2d6 to the damage dealt when channeling positive energy to harm undead. This additional damage increases by +1d6 at 8th level and every 4 levels thereafter.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 35. Oath Against Fiends
  // ──────────────────────────────────────────────
  {
    name: 'Oath Against Fiends',
    className: 'Paladin',
    description:
      'A paladin who swears an oath against fiends dedicates herself to fighting demons, devils, and other evil outsiders above all other evils.',
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice'],
    modifiedFeatures: ['Smite Evil'],
    newFeatures: [
      {
        name: 'Anchoring Aura',
        level: 8,
        description:
          "At 8th level, the paladin's aura hampers evil outsiders' extradimensional travel. Evil outsiders within 20 feet must succeed on a concentration check (DC 15 + paladin level) to use any teleportation or plane-shifting ability.",
      },
      {
        name: 'Holy Vessel',
        level: 11,
        description:
          'At 11th level, the paladin can spend two uses of smite evil to project a 20-foot-radius circle of protection from evil that lasts for 1 minute per paladin level.',
      },
      {
        name: 'Fiend Hunter',
        level: 1,
        description:
          'When using smite evil against an evil outsider, the paladin adds +2d6 damage on her first successful attack rather than the standard bonus equal to her paladin level.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 36. Wilderness Warden
  // ──────────────────────────────────────────────
  {
    name: 'Wilderness Warden',
    className: 'Paladin',
    description:
      'A wilderness warden extends her divine protection to the natural world, defending wild places and the creatures that inhabit them.',
    replacedFeatures: ['Detect Evil', 'Divine Bond', 'Aura of Justice', 'Aura of Faith'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Detect Despoilers',
        level: 1,
        description:
          'A wilderness warden can use detect evil at will but it only detects creatures that have committed acts of wanton destruction against nature or natural creatures.',
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'The wilderness warden gains wild empathy as a druid, using her paladin level as her druid level.',
      },
      {
        name: 'Animal Companion',
        level: 5,
        description:
          'At 5th level, the wilderness warden gains an animal companion as a druid of her paladin level - 4. The animal companion gains celestial template abilities at 11th level.',
      },
      {
        name: 'Aura of the Wild',
        level: 11,
        description:
          'At 11th level, the wilderness warden and all allies within 10 feet gain a +4 sacred bonus on saving throws against spells and effects that target natural terrain (such as transmute rock to mud).',
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 37. Gray Paladin
  // ──────────────────────────────────────────────
  {
    name: 'Gray Paladin',
    className: 'Paladin',
    description:
      'A gray paladin has loosened her code of conduct to fight evil with more flexibility, accepting moral compromise as a necessary tool in the war against darkness.',
    replacedFeatures: [
      'Smite Evil',
      'Divine Grace',
      'Aura of Courage',
      'Divine Health',
      'Aura of Resolve',
    ],
    modifiedFeatures: ['Lay on Hands'],
    newFeatures: [
      {
        name: 'Weakened Grace',
        level: 2,
        description:
          'At 2nd level, the gray paladin gains a +1 bonus on all saving throws instead of adding her full Charisma bonus. This bonus increases by +1 at 6th level and every 4 levels thereafter.',
      },
      {
        name: 'Flexible Smite',
        level: 1,
        description:
          'The gray paladin can smite evil as a standard paladin but the bonus to damage is halved. However, she does not lose her smite if the target is not evil; instead the smite deals no bonus damage against non-evil targets but still grants the attack bonus.',
      },
      {
        name: 'Gray Lay on Hands',
        level: 2,
        description:
          "A gray paladin's lay on hands heals 1d4 points of damage per 2 paladin levels (rather than 1d6).",
      },
      {
        name: 'Smite Chaos',
        level: 4,
        description:
          'At 4th level, the gray paladin can use one of her daily smite evil uses to instead smite chaos. This functions as smite evil but targets chaotic creatures instead.',
      },
      {
        name: 'Gray Aura',
        level: 3,
        description:
          'At 3rd level, the gray paladin is immune to fear. She does not radiate an aura of courage. At 8th level, she becomes immune to charm effects but does not project an aura of resolve.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 38. Mind Sword
  // ──────────────────────────────────────────────
  {
    name: 'Mind Sword',
    className: 'Paladin',
    description:
      'A mind sword is a paladin who manifests her divine power as a weapon formed from pure will and faith, creating blades of psychic energy.',
    replacedFeatures: ['Detect Evil', 'Divine Bond', 'Aura of Resolve', 'Aura of Faith'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Psychic Spellcasting',
        level: 4,
        description:
          'A mind sword casts spells as psychic spells rather than divine spells. She uses thought and emotion components instead of verbal and somatic components.',
      },
      {
        name: 'Soul Blade',
        level: 5,
        description:
          'At 5th level, the mind sword can manifest a weapon of pure psychic energy as a free action. The weapon functions as a weapon of her choice with an enhancement bonus equal to +1 per 5 paladin levels. It deals force damage and can harm incorporeal creatures.',
      },
      {
        name: 'Detect Thoughts',
        level: 1,
        description:
          'The mind sword can use detect thoughts at will in place of detect evil. She can focus on a single creature to read surface thoughts as the spell.',
      },
      {
        name: 'Mental Fortitude',
        level: 8,
        description:
          'At 8th level, the mind sword gains immunity to mind-affecting effects and projects this immunity as an aura to allies within 10 feet at 11th level.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 39. Holy Sword
  // ──────────────────────────────────────────────
  {
    name: 'Sword of Valor',
    className: 'Paladin',
    description:
      'A sword of valor is a paladin dedicated to a specific holy weapon tradition, gaining enhanced abilities with that weapon at the cost of versatility.',
    replacedFeatures: ['Channel Positive Energy', 'Mercy (3rd)', 'Mercy (12th)', 'Mercy (18th)'],
    modifiedFeatures: ['Divine Bond'],
    newFeatures: [
      {
        name: 'Ancestral Weapon',
        level: 1,
        description:
          'At 1st level, the sword of valor selects one type of weapon. She gains Weapon Focus with that weapon as a bonus feat. At 8th level, she gains Improved Critical with the weapon.',
      },
      {
        name: 'Inspiring Weapon',
        level: 3,
        description:
          'At 3rd level, when the sword of valor confirms a critical hit with her chosen weapon, all allies within 30 feet gain a +1 morale bonus on attack rolls for 1 round.',
      },
      {
        name: 'Sacred Weapon',
        level: 5,
        description:
          'At 5th level, when using divine bond on her chosen weapon, the enhancement bonus increases by +1 and she can add the brilliant energy, holy avenger, or speed special abilities.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 40. Faithful Wanderer
  // ──────────────────────────────────────────────
  {
    name: 'Faithful Wanderer',
    className: 'Paladin',
    description:
      'A faithful wanderer travels the world combating evil wherever she finds it, gaining survival skills and the ability to fight fiends in remote locations.',
    replacedFeatures: ['Divine Health', 'Mercy (3rd)', 'Mercy (9th)', 'Channel Positive Energy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Wanderer's Lore",
        level: 1,
        description:
          'The faithful wanderer adds Knowledge (geography), Knowledge (nature), and Survival to her class skills. She gains a +2 bonus on these skills, increasing by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Resist Temptation',
        level: 3,
        description:
          'At 3rd level, the faithful wanderer gains a +4 sacred bonus on saving throws against the spell-like abilities and supernatural abilities of evil outsiders.',
      },
      {
        name: 'Fiendsworn Enemy',
        level: 4,
        description:
          'At 4th level, the faithful wanderer gains a +2 bonus on attack and damage rolls against evil outsiders. This bonus increases by +2 at 9th and 14th level.',
      },
      {
        name: 'Terrain Stride',
        level: 9,
        description:
          'At 9th level, the faithful wanderer can move through difficult terrain at full speed. She also gains resistance to fire 10 and cold 10.',
      },
    ],
    source: "Plane-Hopper's Handbook",
  },

  // ──────────────────────────────────────────────
  // 41. Silver Champion
  // ──────────────────────────────────────────────
  {
    name: 'Silver Champion',
    className: 'Paladin',
    description:
      'A silver champion is devoted to Abadar or another god of civilization, combining mounted combat with an order of cavalier-like abilities.',
    replacedFeatures: [
      'Mercy (3rd)',
      'Mercy (6th)',
      'Mercy (9th)',
      'Mercy (12th)',
      'Mercy (15th)',
      'Mercy (18th)',
    ],
    modifiedFeatures: ['Divine Bond'],
    newFeatures: [
      {
        name: 'Cavalier Order',
        level: 3,
        description:
          'At 3rd level, the silver champion selects a cavalier order. She gains the 2nd-level order ability. She gains the 8th-level order ability at 9th level and the 15th-level order ability at 18th level.',
      },
      {
        name: 'Challenge',
        level: 6,
        description:
          "At 6th level, the silver champion gains the cavalier's challenge ability, using half her paladin level as her cavalier level. She gains one use per day at 6th level and an additional use at 12th and 18th level.",
      },
      {
        name: 'Silver Mount',
        level: 5,
        description:
          'The silver champion must select a mount as her divine bond. The mount gains the benefits of her cavalier order in addition to the standard paladin mount abilities.',
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 42. Dawnflower Anchorite (Rewritten as Dawnflower Dervish)
  // ──────────────────────────────────────────────
  {
    name: 'Dawnflower Dervish',
    className: 'Paladin',
    description:
      'A Dawnflower dervish is a paladin devoted to Sarenrae who uses the scimitar in a flowing, dance-like style that combines grace with holy power.',
    replacedFeatures: ['Mercy (3rd)', 'Aura of Courage', 'Channel Positive Energy'],
    modifiedFeatures: ['Smite Evil', 'Divine Bond'],
    newFeatures: [
      {
        name: 'Dervish Dance',
        level: 1,
        description:
          'At 1st level, the Dawnflower dervish gains Dervish Dance as a bonus feat even if she does not meet the prerequisites. She can use her Charisma modifier instead of Dexterity for attack rolls with scimitars.',
      },
      {
        name: 'Radiant Charge',
        level: 3,
        description:
          'At 3rd level, when the Dawnflower dervish charges an evil creature, her scimitar blazes with holy fire, dealing an extra 1d6 fire damage on a successful hit. This damage increases by 1d6 at 7th level and every 4 levels thereafter.',
      },
      {
        name: 'Searing Light',
        level: 4,
        description:
          'At 4th level, the dervish can channel positive energy through her scimitar to project searing light as a spell-like ability a number of times per day equal to her Charisma modifier.',
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 43. Vindictive Bastard (Ex-Paladin)
  // ──────────────────────────────────────────────
  {
    name: 'Vindictive Bastard',
    className: 'Paladin',
    description:
      'A vindictive bastard is a paladin who has fallen from grace but channels her remaining divine power into righteous anger rather than seeking atonement.',
    replacedFeatures: [
      'Aura of Good',
      'Detect Evil',
      'Smite Evil',
      'Divine Grace',
      'Lay on Hands',
      'Mercy',
      'Channel Positive Energy',
      'Divine Bond',
      'Aura of Courage',
      'Aura of Resolve',
      'Aura of Justice',
      'Aura of Faith',
      'Aura of Righteousness',
      'Holy Champion',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Solo Tactics',
        level: 1,
        description:
          'The vindictive bastard gains solo tactics as the inquisitor class feature. She is treated as though her allies also possessed the same teamwork feats she has for determining the bonuses from her teamwork feats.',
      },
      {
        name: 'Fist of the Avenger',
        level: 1,
        description:
          'Once per day, the vindictive bastard can declare a fist of vengeance against a creature that has harmed her or her allies. She gains a +1 bonus on attack and damage rolls against that creature, increasing by +1 at 4th level and every 3 levels thereafter.',
      },
      {
        name: 'Teamwork Feat',
        level: 3,
        description:
          'At 3rd level and every 3 levels thereafter, the vindictive bastard gains a bonus teamwork feat. She must meet the prerequisites for the feat.',
      },
      {
        name: 'Resentful Aura',
        level: 8,
        description:
          'At 8th level, allies within 10 feet of the vindictive bastard gain a +2 morale bonus on attack rolls against any creature that has damaged the vindictive bastard within the last round.',
      },
      {
        name: 'Gang Up',
        level: 11,
        description:
          'At 11th level, the vindictive bastard can grant all allies within 30 feet one of her teamwork feats as a standard action. Allies retain this feat for 3 rounds plus 1 round per 2 paladin levels.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 44. Holy Light (Dawnflower)
  // ──────────────────────────────────────────────
  {
    name: 'Iomedaean Sword Knight',
    className: 'Paladin',
    description:
      'An Iomedaean sword knight is a paladin who serves Iomedae with unwavering martial discipline, specializing in longsword combat and leading crusades.',
    replacedFeatures: ['Mercy (6th)', 'Mercy (12th)', 'Mercy (18th)', 'Channel Positive Energy'],
    modifiedFeatures: ['Divine Bond'],
    newFeatures: [
      {
        name: "Crusader's Zeal",
        level: 4,
        description:
          'At 4th level, the sword knight can spend two uses of lay on hands to grant all allies within 30 feet a +1 morale bonus on attack rolls and weapon damage rolls for 1 minute. This bonus increases by +1 at 10th and 16th level.',
      },
      {
        name: 'Blade of Valor',
        level: 6,
        description:
          'At 6th level, the sword knight gains Weapon Specialization with the longsword as a bonus feat, even if she does not meet the prerequisites.',
      },
      {
        name: 'Holy Avenger Bond',
        level: 5,
        description:
          'At 5th level, when using divine bond on a longsword, the sword knight can add the defending, keen, or holy special abilities. At 11th level, she can also add speed or brilliant energy.',
      },
    ],
    source: 'Paths of the Righteous',
  },

  // ──────────────────────────────────────────────
  // 45. Oath of Loyalty
  // ──────────────────────────────────────────────
  {
    name: 'Oath of Loyalty',
    className: 'Paladin',
    description:
      'A paladin who swears an oath of loyalty is unwaveringly devoted to a single liege or order, gaining exceptional abilities to protect and serve them.',
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Loyal Guardian',
        level: 1,
        description:
          'The paladin selects a single creature as her liege. She gains a +1 sacred bonus on attack rolls and AC when adjacent to her liege. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Loyal Oath',
        level: 8,
        description:
          "At 8th level, the paladin can spend a use of smite evil to grant her liege a sacred bonus on attack rolls, saving throws, and AC equal to the paladin's Charisma modifier for 1 minute.",
      },
      {
        name: 'Aura of Loyalty',
        level: 11,
        description:
          'At 11th level, all allies within 10 feet gain a +4 sacred bonus on saving throws against compulsion effects. If an ally within this aura would be forced to act against the paladin or her liege, that ally can immediately attempt a new saving throw.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 46. Oath Against Grotesquery
  // ──────────────────────────────────────────────
  {
    name: 'Oath Against Grotesquery',
    className: 'Paladin',
    description:
      'A paladin who swears an oath against grotesquery dedicates herself to fighting aberrations and the unnatural horrors that threaten reality.',
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice'],
    modifiedFeatures: ['Smite Evil'],
    newFeatures: [
      {
        name: 'Aberration Lore',
        level: 1,
        description:
          'The paladin gains a +2 bonus on Knowledge (dungeoneering) checks to identify aberrations and their weaknesses. This bonus increases by +2 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Purifying Smite',
        level: 1,
        description:
          'When using smite evil against an aberration, the paladin deals extra damage equal to her paladin level on every successful attack (not just the first) for the duration of the smite.',
      },
      {
        name: 'Aura of Normalcy',
        level: 8,
        description:
          'At 8th level, the paladin projects an aura that suppresses transmutation effects within 10 feet. Allies within the aura gain a +4 sacred bonus on saving throws against polymorph, petrification, and other form-altering effects.',
      },
      {
        name: 'Banish the Unnatural',
        level: 11,
        description:
          'At 11th level, when the paladin uses channel positive energy, aberrations within range take damage as if they were undead.',
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 47. Divine Scion
  // ──────────────────────────────────────────────
  {
    name: 'Divine Scion',
    className: 'Paladin',
    description:
      'A divine scion is a paladin who draws power from a divine bloodline, manifesting celestial abilities that grow more potent as she gains levels.',
    replacedFeatures: ['Detect Evil', 'Mercy (3rd)', 'Mercy (9th)', 'Mercy (15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Celestial Bloodline',
        level: 1,
        description:
          'At 1st level, the divine scion gains a bloodline power from the celestial sorcerer bloodline, using her paladin level as her sorcerer level.',
      },
      {
        name: 'Heavenly Sight',
        level: 1,
        description:
          'The divine scion can detect evil and good simultaneously at will. At 5th level, she can also see invisible evil creatures within 30 feet.',
      },
      {
        name: 'Wings of the Celestial',
        level: 9,
        description:
          'At 9th level, the divine scion can sprout celestial wings as a swift action, gaining a fly speed of 60 feet with good maneuverability for a number of minutes per day equal to her paladin level.',
      },
      {
        name: 'Celestial Resistance',
        level: 15,
        description:
          'At 15th level, the divine scion gains resistance to acid 20, cold 20, and electricity 20. She also gains DR 5/evil.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 48. Combat Healer Squire (variant)
  // ──────────────────────────────────────────────
  {
    name: 'Knight of Coins',
    className: 'Paladin',
    description:
      'A knight of coins serves Abadar as a protector of commerce and trade routes, using divine power to ensure fair dealing and punish thieves.',
    replacedFeatures: ['Detect Evil', 'Mercy (3rd)', 'Mercy (9th)', 'Aura of Justice'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Detect Deceit',
        level: 1,
        description:
          'The knight of coins can use detect evil at will, but she can also sense whether a creature has lied in the last minute. She gains a +4 sacred bonus on Sense Motive checks.',
      },
      {
        name: 'Lawful Commerce',
        level: 3,
        description:
          'At 3rd level, the knight of coins gains a +2 bonus on Appraise and Profession (merchant) checks. She can also detect whether an item is stolen by handling it for 1 round.',
      },
      {
        name: 'Smite Thief',
        level: 9,
        description:
          'At 9th level, the knight of coins can use smite evil against any creature that has committed theft, even if the creature is not evil. The smite otherwise functions normally.',
      },
      {
        name: 'Aura of Fair Trade',
        level: 11,
        description:
          'At 11th level, all creatures within 10 feet cannot lie or break a verbal contract. Creatures that attempt to do so must make a Will save (DC 10 + half paladin level + Charisma modifier) or be unable to complete the action.',
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 49. Oathbound Paladin (Oath of the Skyseeker)
  // ──────────────────────────────────────────────
  {
    name: 'Oath of the Skyseeker',
    className: 'Paladin',
    description:
      'A paladin who swears the oath of the skyseeker dedicates herself to protecting travelers and pilgrims, gaining abilities related to travel and exploration.',
    replacedFeatures: ['Aura of Resolve', 'Aura of Justice'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Explorer's Grace",
        level: 1,
        description:
          'The paladin gains a +10 foot enhancement bonus to her base speed. At 7th level, she can share this bonus with all allies within 10 feet.',
      },
      {
        name: "Pilgrim's Shield",
        level: 8,
        description:
          'At 8th level, the paladin can spend two uses of lay on hands to grant all allies within 30 feet the benefits of endure elements and freedom of movement for 1 hour per paladin level.',
      },
      {
        name: 'Wings of the Sky',
        level: 11,
        description:
          'At 11th level, the paladin can sprout angelic wings as a swift action, gaining a fly speed of 60 feet with good maneuverability for a number of minutes per day equal to her paladin level.',
      },
    ],
    source: 'Paths of the Righteous',
  },

  // ──────────────────────────────────────────────
  // 50. Legate
  // ──────────────────────────────────────────────
  {
    name: 'Legate',
    className: 'Paladin',
    description:
      "A legate is a paladin who serves as an official representative of her church or order, gaining diplomatic abilities and the authority to command in her deity's name.",
    replacedFeatures: ['Detect Evil', 'Channel Positive Energy', 'Aura of Justice'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Diplomatic Mandate',
        level: 1,
        description:
          'The legate gains Diplomacy and Linguistics as class skills. She adds her Charisma modifier as a sacred bonus to Diplomacy checks and can use detect evil as detect thoughts when speaking with a creature for at least 1 minute.',
      },
      {
        name: 'Commanding Presence',
        level: 4,
        description:
          'At 4th level, the legate can spend one use of lay on hands to issue a command as the spell (Will DC 10 + half paladin level + Charisma modifier) to an evil creature within 30 feet.',
      },
      {
        name: 'Inspired Diplomacy',
        level: 8,
        description:
          "At 8th level, when the legate successfully shifts a creature's attitude to friendly or better using Diplomacy, she can also place a suggestion effect on the creature as the spell.",
      },
      {
        name: 'Aura of Authority',
        level: 11,
        description:
          'At 11th level, the legate projects an aura of divine authority. All allies within 10 feet gain a +2 sacred bonus on Diplomacy and Intimidate checks. Evil creatures within the aura take a -2 penalty on Will saves.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // Chevalier
  // ──────────────────────────────────────────────
  {
    name: 'Chevalier',
    className: 'Paladin',
    description:
      'Chevaliers are mounted knights who have devoted themselves to a noble code of chivalry. They are the epitome of knightly virtue, equally skilled at mounted combat and courtly ceremony.',
    replacedFeatures: ['Aura of Courage', 'Divine Health'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Born to the Saddle',
        level: 1,
        description:
          'A chevalier gains Mounted Combat as a bonus feat at 1st level. She also adds half her paladin level (minimum 1) on Ride checks.',
      },
      {
        name: 'Courtly Grace',
        level: 3,
        description:
          'At 3rd level, the chevalier adds her Charisma modifier on Diplomacy and Sense Motive checks.',
      },
      {
        name: 'Knight Errant',
        level: 5,
        description:
          "At 5th level, the chevalier's divine bond must be with a mount. The mount gains the benefits of the paladin's divine bond and the chevalier can share her lay on hands with her mount as a free action (instead of a swift action).",
      },
      {
        name: 'Chivalric Charge',
        level: 9,
        description:
          "At 9th level, the chevalier does not take the -2 AC penalty when charging while mounted. Additionally, if the chevalier's smite evil is active, she deals double the normal bonus damage on a mounted charge.",
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // Collegiate Crusader
  // ──────────────────────────────────────────────
  {
    name: 'Collegiate Crusader',
    className: 'Paladin',
    description:
      'Collegiate crusaders are paladins who have been trained in formal academies of holy war. They approach their faith with an analytical mind, combining tactical brilliance with divine power.',
    replacedFeatures: ['Divine Grace', 'Divine Health'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Tactical Training',
        level: 1,
        description:
          'A collegiate crusader gains one teamwork feat as a bonus feat at 1st level and every 4 levels thereafter. She does not need to meet the prerequisites of these teamwork feats.',
      },
      {
        name: 'Academic Divinity',
        level: 3,
        description:
          'At 3rd level, the collegiate crusader adds all Knowledge skills to her class skill list and gains a bonus on Knowledge checks equal to half her paladin level.',
      },
      {
        name: 'Inspire Tactics',
        level: 8,
        description:
          'At 8th level, as a standard action, the collegiate crusader can grant all allies within 30 feet who can see and hear her one of her teamwork feats for 1 round per 2 paladin levels.',
      },
    ],
    source: 'Pathfinder Player Companion: Knights of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // Crusader (Paladin)
  // ──────────────────────────────────────────────
  {
    name: 'Crusader',
    className: 'Paladin',
    description:
      'Crusaders are warriors of faith who have taken up arms in the name of their deity to reclaim sacred ground, destroy heretics, and carry the light of their god to darkened lands.',
    replacedFeatures: ['Divine Grace', 'Lay on Hands'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Delayed Spells',
        level: 1,
        description:
          'A crusader does not gain spells until 4th level. At 4th level and beyond, she casts spells as a paladin of her level – 3.',
      },
      {
        name: 'Bonus Combat Feat',
        level: 1,
        description:
          'At 1st level and every 3 levels thereafter, a crusader gains a bonus combat feat in addition to the feats any character receives from leveling. She must meet the prerequisites for these feats.',
      },
      {
        name: 'Righteous Mandate',
        level: 4,
        description:
          'At 4th level, once per day as a swift action, a crusader can declare a righteous mandate against a single creature type or specific named foe. She gains a +2 sacred bonus on attack and damage rolls against that target for 1 minute per paladin level.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // Devoted Muse
  // ──────────────────────────────────────────────
  {
    name: 'Devoted Muse',
    className: 'Paladin',
    description:
      'Devoted muses are Shelynite paladins who weave art and beauty into their holy crusade, inspiring allies through song, dance, and artistic expression while fighting with grace and poise.',
    replacedFeatures: ['Divine Bond', 'Aura of Courage'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Artistic Soul',
        level: 1,
        description:
          'A devoted muse adds Perform to her list of class skills and gains a bonus on Perform checks equal to half her paladin level. She may use Charisma on attack rolls when performing a combat routine (treat as panache/deeds for purposes of interactions).',
      },
      {
        name: 'Inspiring Performance',
        level: 5,
        description:
          "At 5th level, the devoted muse can make a Perform check as a standard action. All allies within 30 feet who observe the performance gain a +2 morale bonus on attack rolls and saves vs. fear for a number of rounds equal to the devoted muse's Charisma modifier.",
      },
      {
        name: 'Beautiful Smite',
        level: 9,
        description:
          'At 9th level, when the devoted muse uses smite evil, affected enemies must make a Will save (DC 10 + half paladin level + Charisma modifier) or become fascinated for 1 round per 2 paladin levels.',
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Purity',
  },

  // ──────────────────────────────────────────────
  // Divine Servant
  // ──────────────────────────────────────────────
  {
    name: 'Divine Servant',
    className: 'Paladin',
    description:
      "Divine servants are utterly devoted to their deity's will, sacrificing personal autonomy for a direct and powerful connection to divine power. They serve as the hands of their god made flesh.",
    replacedFeatures: ['Mercies', 'Divine Bond'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Divine Directive',
        level: 1,
        description:
          "A divine servant gains access to one domain from her deity's domain list, functioning as a cleric of her paladin level. She uses her Wisdom modifier for domain powers.",
      },
      {
        name: 'Instrument of Fate',
        level: 5,
        description:
          'At 5th level, once per day the divine servant can ask her deity a yes/no question and receive a truthful answer (as the augury spell, but with 100% accuracy).',
      },
      {
        name: 'Will Made Manifest',
        level: 11,
        description:
          "At 11th level, once per day the divine servant can call upon her deity for direct assistance. This functions as a miracle spell, but only for effects appropriate to her deity's portfolio.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // Evangelist (Paladin)
  // ──────────────────────────────────────────────
  {
    name: 'Evangelist',
    className: 'Paladin',
    description:
      'Evangelists are paladins who carry their faith to the unconverted through words as much as by blade. They are holy speakers, recruiters, and the public face of their religion.',
    replacedFeatures: ['Smite Evil', 'Aura of Courage'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fervent Speech',
        level: 1,
        description:
          'An evangelist can use Diplomacy to demoralize enemies (as Intimidate) by delivering a short speech. She adds her Charisma bonus to the check and the effect lasts twice as long as normal.',
      },
      {
        name: 'Inspiring Words',
        level: 3,
        description:
          'At 3rd level, once per day as a standard action, the evangelist can speak inspiring words that grant allies within 60 feet who can hear her a +2 sacred bonus on one type of check (attack, damage, or saving throw) for 1 minute.',
      },
      {
        name: 'Conversion',
        level: 8,
        description:
          'At 8th level, once per day the evangelist can attempt to convert a non-evil creature. After 1 minute of speech, the target must succeed on a Will save (DC 10 + half paladin level + Charisma modifier) or shift one step toward good alignment.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // Forgemaster (Paladin)
  // ──────────────────────────────────────────────
  {
    name: 'Forgemaster',
    className: 'Paladin',
    description:
      'Forgemasters are dwarven paladins who dedicate themselves to Torag, the god of the forge. They channel divine power through their crafted weapons and armor, becoming living embodiments of dwarven craftsmanship.',
    replacedFeatures: ['Lay on Hands', 'Mercies', 'Divine Bond'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Runeforger',
        level: 1,
        description:
          "A forgemaster can inscribe sacred runes on weapons and armor she crafts or owns. These runes grant a +1 sacred bonus to the item's effective enhancement bonus for the purpose of bypassing damage reduction. This increases to +2 at 8th level.",
      },
      {
        name: 'Sacred Smith',
        level: 3,
        description:
          'At 3rd level, the forgemaster gains a bonus on Craft (armor) and Craft (weapons) checks equal to half her paladin level. She can create masterwork items in half the normal time.',
      },
      {
        name: 'Divine Forge',
        level: 5,
        description:
          "At 5th level, the forgemaster's divine bond applies to weapons or armor she crafts herself. Additionally, she can use her lay on hands uses (even though she lacks the class feature) to instantly repair a broken weapon or armor as a standard action.",
      },
      {
        name: 'Living Bastion',
        level: 11,
        description:
          "At 11th level, the forgemaster's armor is blessed by Torag himself. Any armor the forgemaster wears that she crafted grants DR 3/— and acid and fire resistance 10.",
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // Gallant
  // ──────────────────────────────────────────────
  {
    name: 'Gallant',
    className: 'Paladin',
    description:
      'Gallants are Shelynite or Caydenite paladins who blend courtly grace with righteous combat. They fight with style and flair, inspiring those around them through deeds of derring-do.',
    replacedFeatures: ['Divine Health', 'Aura of Courage'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Stylish Fighter',
        level: 1,
        description:
          'A gallant uses her Charisma modifier instead of Strength on attack rolls when wielding a light or one-handed piercing weapon. She gains a panache pool equal to her Charisma modifier.',
      },
      {
        name: 'Daring Deed',
        level: 3,
        description:
          'At 3rd level, the gallant gains access to swashbuckler deeds as if she were a swashbuckler of her paladin level – 2. She can use her panache pool to activate these deeds.',
      },
      {
        name: 'Inspiring Panache',
        level: 7,
        description:
          'At 7th level, whenever the gallant spends panache to perform a deed in sight of allies, those allies gain a +2 morale bonus on their next attack roll.',
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Purity',
  },

  // ──────────────────────────────────────────────
  // Glorious Rider
  // ──────────────────────────────────────────────
  {
    name: 'Glorious Rider',
    className: 'Paladin',
    description:
      'Glorious riders are mounted paladins who have refined the bond between holy warrior and divine steed to an art. They fight as one with their mount, a union blessed by the gods.',
    replacedFeatures: ['Aura of Courage', 'Divine Health'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Holy Bond',
        level: 1,
        description:
          "A glorious rider's divine bond must be with a mount, and she gains this ability at 1st level rather than 5th. Her mount gains benefits as if the paladin were 2 levels higher.",
      },
      {
        name: 'Mounted Smite',
        level: 3,
        description:
          'At 3rd level, when a glorious rider uses smite evil while mounted, the bonus to AC applies to her mount as well. The damage bonus from smite evil also applies to mounted charge attacks.',
      },
      {
        name: 'Celestial Steed',
        level: 9,
        description:
          "At 9th level, the glorious rider's mount grows wings and gains a fly speed equal to twice its land speed (good maneuverability). Once per day, the mount can use holy word as a spell-like ability (CL = paladin level).",
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // Knight of Ozem
  // ──────────────────────────────────────────────
  {
    name: 'Knight of Ozem',
    className: 'Paladin',
    description:
      'Knights of Ozem are an order of holy warriors dedicated to the memory of Aroden and the defeat of the undead. They are among the most implacable foes of necromancy and undeath in the Inner Sea region.',
    replacedFeatures: ['Mercies', 'Divine Bond'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Undead Bane',
        level: 1,
        description:
          "A knight of Ozem's smite evil ability deals double the normal extra damage against undead. Her channel energy (if gained through spells) only heals living creatures and only harms undead.",
      },
      {
        name: 'Burial Rites',
        level: 3,
        description:
          'At 3rd level, the knight of Ozem can perform burial rites in 1 hour. Any creature that dies while under her rites cannot be raised as an undead for 1 week per paladin level.',
      },
      {
        name: 'Desecration Sense',
        level: 6,
        description:
          'At 6th level, the knight of Ozem can detect the presence of desecrated ground, necromantic magic, and undead within 60 feet as a free action. She always knows the direction to the nearest such area.',
      },
      {
        name: 'Consecrating Touch',
        level: 11,
        description:
          'At 11th level, once per day the knight of Ozem can consecrate an area of 40-foot radius as the consecrate spell, lasting 1 day per paladin level.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea NPC Codex',
  },

  // ──────────────────────────────────────────────
  // Knight of the Inner Sea
  // ──────────────────────────────────────────────
  {
    name: 'Knight of the Inner Sea',
    className: 'Paladin',
    description:
      'Knights of the Inner Sea are versatile holy warriors trained in the varied traditions of the Inner Sea region, blending different schools of knightly combat and virtue.',
    replacedFeatures: ['Divine Grace', 'Mercies'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Knightly Training',
        level: 1,
        description:
          'A knight of the Inner Sea gains a bonus feat at 1st level and every 4 levels thereafter from the list of combat feats. She must meet the prerequisites for these feats.',
      },
      {
        name: 'Order Code',
        level: 3,
        description:
          'At 3rd level, the knight of the Inner Sea selects an order (Petal, Cockatrice, Sword, or Shield). She gains an order ability based on this selection.',
      },
      {
        name: 'Inspired Challenge',
        level: 8,
        description:
          'At 8th level, the knight of the Inner Sea can issue a challenge once per day per 4 paladin levels. When challenging a single foe, she gains a +2 competence bonus on attack rolls against that foe and the foe takes a -2 penalty to AC against her attacks.',
      },
    ],
    source: 'Pathfinder Player Companion: Knights of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // Lance of Faith
  // ──────────────────────────────────────────────
  {
    name: 'Lance of Faith',
    className: 'Paladin',
    description:
      "Lances of faith are paladins who focus on ranged combat and mounted archery, acting as the long reach of their deity's justice against distant foes.",
    replacedFeatures: ['Divine Bond', 'Aura of Courage'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Precise Shot',
        level: 1,
        description:
          'A lance of faith gains Precise Shot as a bonus feat at 1st level, even if she does not meet the prerequisites.',
      },
      {
        name: 'Holy Shot',
        level: 5,
        description:
          'At 5th level, the lance of faith can add her smite evil bonus damage to ranged attacks made with a bow or crossbow.',
      },
      {
        name: 'Arrow of Law',
        level: 9,
        description:
          'At 9th level, once per day when the lance of faith hits an evil creature with a ranged attack, she can spend a use of smite evil to have that shot also count as the smite evil attack, dealing all applicable bonus damage.',
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Purity',
  },

  // ──────────────────────────────────────────────
  // Light of Iomedae
  // ──────────────────────────────────────────────
  {
    name: 'Light of Iomedae',
    className: 'Paladin',
    description:
      "Lights of Iomedae are Iomedaean paladins who have dedicated themselves to being beacons of hope and righteous radiance, channeling the Inheritor's light to inspire allies and blind enemies.",
    replacedFeatures: ['Mercies', 'Divine Bond'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Radiant Aura',
        level: 1,
        description:
          'A light of Iomedae constantly emits light as a torch. She can increase this to bright light in a 30-foot radius (and shadowy illumination to 60 feet) as a free action.',
      },
      {
        name: 'Blinding Light',
        level: 5,
        description:
          'At 5th level, once per day as a standard action, the light of Iomedae can emit a burst of holy light in a 30-foot cone. Evil creatures in the area must succeed on a Fortitude save (DC 10 + half paladin level + Charisma modifier) or be blinded for 1d4 rounds.',
      },
      {
        name: 'Inspiring Radiance',
        level: 9,
        description:
          "At 9th level, allies within the light of Iomedae's radiant aura gain a +2 sacred bonus on saving throws against fear and mind-affecting effects. This bonus increases by +1 every 4 levels beyond 9th.",
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Valor',
  },

  // ──────────────────────────────────────────────
  // Mendevian Crusader
  // ──────────────────────────────────────────────
  {
    name: 'Mendevian Crusader',
    className: 'Paladin',
    description:
      'Mendevian crusaders are hardened veterans of the endless crusades against the Worldwound. They are experts at fighting demons and surviving in the hellish conditions of that blighted region.',
    replacedFeatures: ['Mercies', 'Divine Grace'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Demon Hunter',
        level: 1,
        description:
          "A Mendevian crusader's smite evil deals double damage against demons (outsiders with the chaotic and evil subtypes). She also gains a +2 bonus on saving throws against the spell-like and supernatural abilities of demons.",
      },
      {
        name: "Crusader's Resolve",
        level: 3,
        description:
          'At 3rd level, the Mendevian crusader is immune to the shaken condition and gains a +4 bonus on saving throws against confusion, fear, and possession.',
      },
      {
        name: 'Ward Against Corruption',
        level: 7,
        description:
          'At 7th level, the Mendevian crusader and all allies within 10 feet of her gain a +2 sacred bonus on saving throws against corruption and demonic magic (spells with the chaos or evil descriptor).',
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Valor',
  },

  // ──────────────────────────────────────────────
  // Oathbreaker
  // ──────────────────────────────────────────────
  {
    name: 'Oathbreaker',
    className: 'Paladin',
    description:
      'An oathbreaker is a paladin who has fallen from grace but refused to repent. Rather than becoming a blackguard, she continues wielding divine power twisted by her corruption.',
    replacedFeatures: ['Smite Evil', 'Lay on Hands', 'Aura of Good', 'Aura of Courage'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Smite Good',
        level: 1,
        description:
          'An oathbreaker gains smite good, which functions like smite evil except it targets good-aligned creatures. She uses Charisma to add to attack rolls and her paladin level to damage rolls against good creatures.',
      },
      {
        name: 'Aura of Evil',
        level: 1,
        description:
          'The oathbreaker projects a strong aura of evil (as a cleric of her paladin level). This aura identifies her to detect evil.',
      },
      {
        name: 'Corrupt Touch',
        level: 2,
        description:
          'At 2nd level, the oathbreaker can channel negative energy through her touch, dealing 1d6 negative energy damage per two paladin levels. She can use this ability a number of times per day equal to 3 + Charisma modifier.',
      },
      {
        name: 'Aura of Despair',
        level: 8,
        description:
          'At 8th level, enemies within 10 feet of the oathbreaker take a –2 penalty on all saving throws.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // Sword of Justice
  // ──────────────────────────────────────────────
  {
    name: 'Sword of Justice',
    className: 'Paladin',
    description:
      'Swords of justice are Abadar-devoted paladins who act as enforcers of law and commerce, ensuring that trade is fair and that the laws of civilization are upheld throughout the Inner Sea.',
    replacedFeatures: ['Divine Bond', 'Aura of Courage'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Legal Expertise',
        level: 1,
        description:
          'A sword of justice adds Knowledge (local) and Profession (merchant) to her class skill list. She also gains a bonus on Sense Motive checks equal to half her paladin level.',
      },
      {
        name: 'Smite Lawbreaker',
        level: 3,
        description:
          'At 3rd level, once per day the sword of justice can designate a creature as a lawbreaker as a swift action. She gains a +4 sacred bonus on attack rolls and +2 per paladin level to damage against that creature for 1 minute.',
      },
      {
        name: "Lawkeeper's Bond",
        level: 5,
        description:
          "At 5th level, the sword of justice's divine bond enhances her weapon to become a lawful weapon, and can add the merciful or bane (lawless) special ability instead of the standard options.",
      },
      {
        name: 'Aura of Law',
        level: 11,
        description:
          'At 11th level, allies within 10 feet of the sword of justice are under the effect of zone of truth while she maintains concentration, and she gains a +4 bonus on Sense Motive to detect lies.',
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Balance',
  },

  // ──────────────────────────────────────────────
  // Redemption Knight
  // ──────────────────────────────────────────────
  {
    name: 'Redemption Knight',
    className: 'Paladin',
    description:
      'Redemption knights believe that no soul is truly lost and devote themselves to reforming the wicked. They wade into evil not to destroy it, but to convert it, and their power grows from acts of mercy.',
    replacedFeatures: ['Smite Evil', 'Aura of Courage'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Merciful Strike',
        level: 1,
        description:
          "A redemption knight's melee attacks deal nonlethal damage without the normal -4 penalty. She can choose at the time of the attack whether to deal lethal or nonlethal damage.",
      },
      {
        name: 'Reforming Presence',
        level: 3,
        description:
          'At 3rd level, any creature that the redemption knight successfully reduces to 0 or fewer hit points using nonlethal damage is subjected to an atonement effect (as the spell) if it is willing at the time it regains consciousness.',
      },
      {
        name: 'Aura of Reclamation',
        level: 8,
        description:
          'At 8th level, evil creatures within 10 feet of the redemption knight take a -2 penalty on saving throws against mind-affecting spells that change alignment and against compulsion effects that redirect harmful behavior.',
      },
      {
        name: "Penitent's Blessing",
        level: 11,
        description:
          'At 11th level, once per day the redemption knight can cast atonement as a spell-like ability, but only targeting a willing creature that she has personally defeated in combat.',
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Purity',
  },
];
