import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const ISG_FEATS: FeatDefinition[] = [
  // ==================== INNER SEA GODS ====================
  // Already in database (skipped): Deific Obedience, Diverse Obedience

  // ── General Divine Feats ─────────────────────────────────────────────────────

  {
    id: 'guided_hand',
    name: 'Guided Hand',
    description:
      "You may use your Wisdom modifier in place of your Strength or Dexterity modifier on attack rolls with your deity's favored weapon.",
    shortDescription: "Use WIS instead of STR/DEX on attack rolls with deity's favored weapon",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'special', description: 'Must worship a deity with a favored weapon' },
    ],
    effects: [
      {
        type: 'ability_substitution',
        bonusType: BonusType.UNTYPED,
        target: 'attack_rolls.favored_weapon',
        value: 'WIS',
        source: 'Guided Hand',
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'wisdom', 'favored weapon', 'attack'],
  },

  {
    id: 'war_blessing',
    name: 'War Blessing',
    description:
      'You can use two warpriest blessings simultaneously. As a swift action, you can activate two blessings at once, gaining both their minor benefits. These blessings must be from two different domains.',
    shortDescription: 'Activate two warpriest blessings simultaneously as a swift action',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'blessings' },
      { type: 'special', description: 'Warpriest level 10th' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['divine', 'warpriest', 'blessing'],
  },

  // weapon_of_the_chosen / improved_weapon_of_the_chosen / greater_weapon_of_the_chosen
  //   — already in database (acg.ts), skipped

  {
    id: 'haunt_scavenger',
    name: 'Haunt Scavenger',
    description:
      'You can identify haunts as if using detect undead and are treated as one level higher for the purpose of channeling energy to destroy or damage haunts. Additionally, when you destroy a haunt, you regain a number of hit points equal to your level.',
    shortDescription: 'Better haunt detection/destruction; regain HP when destroying haunts',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['divine', 'haunt', 'undead', 'channel energy'],
  },

  // divine_interference — already in database (umagic-extra.ts), skipped
  // voice_of_the_sibyl — already in database (ultimateIntrigue.ts), skipped

  // ── Divine Fighting Technique Feats ──────────────────────────────────────────

  {
    id: 'divine_fighting_technique_abadar',
    name: "Divine Fighting Technique (Abadar's Crossbow Training)",
    description:
      "You have mastered Abadar's divine fighting style, which focuses on precision with crossbows. You treat crossbows as your deity's favored weapon for the purpose of Weapon Focus and similar feats. At the basic level, you gain a bonus on attack rolls with crossbows equal to the number of allies adjacent to your target (maximum +4). At the advanced level, you can reload a hand or light crossbow as a free action, and a heavy crossbow as a move action. At the ultimate level, your crossbow attacks ignore concealment and cover less than total cover.",
    shortDescription:
      "Abadar's crossbow fighting style: flanking bonus, fast reload, ignore concealment",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Abadar' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Abadar as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Abadar', 'crossbow', 'ranged'],
  },

  {
    id: 'divine_fighting_technique_asmodeus',
    name: "Divine Fighting Technique (Asmodeus's Mandate)",
    description:
      "You have mastered Asmodeus's divine fighting style with the mace. At the basic level, when you attack with a heavy mace and deal damage, the target takes a -2 penalty to AC against your attacks for 1 round. At the advanced level, a creature damaged by your mace must succeed at a Will save (DC 10 + your Strength modifier + your level) or be compelled to follow a one-word command as a free action. At the ultimate level, your mace attacks deal an additional 1d6 fire damage, and creatures you command become shaken for 1 round.",
    shortDescription: "Asmodeus's mace style: AC penalty, command word, bonus fire damage",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Asmodeus' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Asmodeus as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Asmodeus', 'mace', 'lawful evil'],
  },

  {
    id: 'divine_fighting_technique_calistria',
    name: "Divine Fighting Technique (Calistria's Sting)",
    description:
      "You have mastered Calistria's divine fighting style with the whip. At the basic level, you treat the whip as a weapon that can deal lethal damage without penalty and can use it to disarm opponents without provoking attacks of opportunity. At the advanced level, when you make a successful trip or disarm maneuver with a whip, the target becomes flat-footed until the start of its next turn. At the ultimate level, your whip attacks have a chance to entangle the target, and entangled opponents cannot take attacks of opportunity.",
    shortDescription: "Calistria's whip style: lethal whip, maneuver mastery, entangle",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Calistria' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Calistria as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Calistria', 'whip', 'chaotic neutral'],
  },

  {
    id: 'divine_fighting_technique_cayden_cailean',
    name: "Divine Fighting Technique (Cayden Cailean's Blade and Tankard)",
    description:
      "You have mastered Cayden Cailean's divine fighting style with the rapier and tankard. At the basic level, you can fight with a rapier and a tankard (treated as a club) simultaneously. At the advanced level, you can make an off-hand bash with the tankard as part of a full attack without penalty. At the ultimate level, you can drink from a flask or tankard as a swift action, and doing so gives you a morale bonus on attack rolls for 1 minute.",
    shortDescription:
      "Cayden's dual-weapon style with rapier and tankard; drink as swift action for attack bonus",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Cayden Cailean' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Cayden Cailean as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Cayden Cailean', 'rapier', 'two-weapon'],
  },

  {
    id: 'divine_fighting_technique_desna',
    name: "Divine Fighting Technique (Desna's Shooting Star)",
    description:
      "You have mastered Desna's divine fighting style with the starknife. At the basic level, you can use Dexterity instead of Strength on attack and damage rolls with a starknife. At the advanced level, when you throw a starknife and hit, the target is dazzled for 1 round. At the ultimate level, you can throw a starknife as part of a charge action, and the starknife returns to your hand after each throw.",
    shortDescription:
      "Desna's starknife style: DEX to attack/damage, dazzle on hit, returning throws",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Desna' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Desna as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Desna', 'starknife', 'ranged'],
  },

  {
    id: 'divine_fighting_technique_erastil',
    name: "Divine Fighting Technique (Erastil's Blessing)",
    description:
      "You have mastered Erastil's divine fighting style with the longbow. At the basic level, as a free action once per round, you can apply a +1 insight bonus on damage rolls with a longbow against a target that is threatening one of your allies. At the advanced level, this bonus increases to +3 and applies to all attacks in a full attack against such targets. At the ultimate level, once per day, you can loose an arrow blessed by Erastil that functions as a heal spell on a willing target or a harm spell on an unwilling one.",
    shortDescription:
      "Erastil's longbow style: bonus damage against foes threatening allies, blessed arrow",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Erastil' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Erastil as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Erastil', 'longbow', 'ranged'],
  },

  {
    id: 'divine_fighting_technique_gorum',
    name: "Divine Fighting Technique (Gorum's Accuracy)",
    description:
      "You have mastered Gorum's divine fighting style with the greatsword. At the basic level, once per round as a free action you can reroll one attack roll made with a greatsword and take the higher result. At the advanced level, you may reroll twice per round. At the ultimate level, you may instead choose the result that deals the most damage on a confirmed critical hit.",
    shortDescription:
      "Gorum's greatsword style: reroll attack rolls once per round (advanced: twice)",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Gorum' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Gorum as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Gorum', 'greatsword', 'chaotic neutral'],
  },

  {
    id: 'divine_fighting_technique_gozreh',
    name: "Divine Fighting Technique (Gozreh's Trident)",
    description:
      "You have mastered Gozreh's divine fighting style with the trident. At the basic level, you gain a +2 bonus on combat maneuver checks to disarm or trip opponents with a trident, and do not provoke attacks of opportunity when doing so. At the advanced level, when you score a hit with a trident, you can push your opponent back 5 feet as a free action. At the ultimate level, once per day, as a full-round action you may hurl your trident to call down a lightning bolt along its path.",
    shortDescription: "Gozreh's trident style: maneuver mastery, push back, lightning strike",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Gozreh' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Gozreh as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Gozreh', 'trident', 'true neutral'],
  },

  {
    id: 'divine_fighting_technique_iomedae',
    name: "Divine Fighting Technique (Iomedae's Sword Oath)",
    description:
      "You have mastered Iomedae's divine fighting style with the longsword. At the basic level, when you fight with a longsword, you can grant an adjacent ally a +2 bonus to AC as a free action once per round. At the advanced level, your longsword threatens a critical on a 19-20 (or improves an existing range by 1) and your adjacent allies' critical threats against your target are automatically confirmed. At the ultimate level, once per day, your longsword counts as holy and vorpal for one round.",
    shortDescription:
      "Iomedae's longsword style: grant ally AC bonus, improved criticals, holy/vorpal blade",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Iomedae' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Iomedae as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Iomedae', 'longsword', 'lawful good'],
  },

  {
    id: 'divine_fighting_technique_irori',
    name: "Divine Fighting Technique (Irori's Concentrated Strike)",
    description:
      "You have mastered Irori's divine fighting style with the unarmed strike. At the basic level, once per round as a swift action you may designate one target; your unarmed strikes deal an additional 1d6 damage against that target until the start of your next turn. At the advanced level, your unarmed strikes count as cold iron and silver for overcoming DR. At the ultimate level, once per day, you can make a single unarmed strike that staggers the opponent for 1d4 rounds on a failed Fortitude save.",
    shortDescription:
      "Irori's unarmed style: bonus damage against chosen target, penetrate DR, stagger",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Irori' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Irori as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Irori', 'unarmed strike', 'lawful neutral'],
  },

  {
    id: 'divine_fighting_technique_lamashtu',
    name: "Divine Fighting Technique (Lamashtu's Mark)",
    description:
      "You have mastered Lamashtu's divine fighting style with the falchion. At the basic level, on a successful hit with a falchion, you mark the target; marked creatures suffer a -2 penalty to AC against your attacks for 1 minute. At the advanced level, your falchion attacks ignore the first 5 points of DR. At the ultimate level, once per day, on a critical hit with a falchion you can cause the target to permanently take on a bestial deformity of your choice.",
    shortDescription:
      "Lamashtu's falchion style: mark target for -2 AC, penetrate DR, bestial deformity on crit",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Lamashtu' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Lamashtu as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Lamashtu', 'falchion', 'chaotic evil'],
  },

  {
    id: 'divine_fighting_technique_nethys',
    name: "Divine Fighting Technique (Nethys's Blinding Touch)",
    description:
      "You have mastered Nethys's divine fighting style with the quarterstaff. At the basic level, once per round as a free action after a successful hit with a quarterstaff, you can cause the target to become dazzled for 1 round (Will save DC 10 + your Wisdom modifier + your ranks in Spellcraft negates). At the advanced level, the target can instead be blinded. At the ultimate level, you can use both ends of the quarterstaff simultaneously — once on your turn to channel a touch spell, and once on a readied action.",
    shortDescription: "Nethys's quarterstaff style: dazzle/blind on hit, dual-channel touch spells",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Nethys' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Nethys as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Nethys', 'quarterstaff', 'true neutral'],
  },

  {
    id: 'divine_fighting_technique_norgorber',
    name: "Divine Fighting Technique (Norgorber's Sneak)",
    description:
      "You have mastered Norgorber's divine fighting style with the short sword. At the basic level, when you attack a flat-footed opponent with a short sword, you add your Sneak Attack damage or, if you don't have Sneak Attack, you deal an extra 1d6 precision damage. At the advanced level, the precision damage increases to 2d6 and applies whenever you have any flanking bonus. At the ultimate level, once per day, one of your short sword attacks can deliver a contact poison without requiring you to apply it.",
    shortDescription:
      "Norgorber's short sword style: precision damage, no Sneak Attack required, contact poison",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Norgorber' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Norgorber as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Norgorber', 'short sword', 'neutral evil'],
  },

  {
    id: 'divine_fighting_technique_pharasma',
    name: "Divine Fighting Technique (Pharasma's Blade)",
    description:
      "You have mastered Pharasma's divine fighting style with the dagger. At the basic level, your daggers are treated as ghost touch weapons against undead, and you gain a +2 bonus on attack rolls against undead with a dagger. At the advanced level, when you confirm a critical hit against an undead with a dagger, it is immediately destroyed as if you had used a stake through the heart. At the ultimate level, once per day your dagger attack can deal maximum damage against any undead or evil outsider.",
    shortDescription:
      "Pharasma's dagger style: ghost touch vs undead, instant undead destruction on crit",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Pharasma' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Pharasma as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Pharasma', 'dagger', 'true neutral'],
  },

  {
    id: 'divine_fighting_technique_rovagug',
    name: "Divine Fighting Technique (Rovagug's Destruction)",
    description:
      "You have mastered Rovagug's divine fighting style with the greataxe. At the basic level, when you deal damage with a greataxe, you can attempt to sunder a worn or carried item on the same attack as a free action. At the advanced level, your sunder attempts with greataxes do not provoke attacks of opportunity and ignore the first 5 points of hardness. At the ultimate level, once per day, as a full-round action you can make a single greataxe attack that deals damage to everything in a 10-foot line from you to the target.",
    shortDescription: "Rovagug's greataxe style: free sunder, ignore hardness, line attack",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Rovagug' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Rovagug as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Rovagug', 'greataxe', 'chaotic evil'],
  },

  {
    id: 'divine_fighting_technique_sarenrae',
    name: "Divine Fighting Technique (Sarenrae's Mercy)",
    description:
      "You have mastered Sarenrae's divine fighting style with the scimitar. At the basic level, you gain the benefit of Slashing Grace with a scimitar (add Dexterity instead of Strength to damage), and can sheath or draw a scimitar as a free action. At the advanced level, when you could reduce a target to 0 or fewer HP, you may instead reduce them to 1 HP and cause them to fall unconscious for 1 minute. At the ultimate level, you can cast a spell with a range of touch or personal as a swift action immediately after making a successful scimitar attack.",
    shortDescription:
      "Sarenrae's scimitar style: DEX to damage, nonlethal option, swift touch spells",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Sarenrae' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Sarenrae as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Sarenrae', 'scimitar', 'neutral good'],
  },

  {
    id: 'divine_fighting_technique_shelyn',
    name: "Divine Fighting Technique (Shelyn's Zeal)",
    description:
      "You have mastered Shelyn's divine fighting style with the glaive. At the basic level, you can use a glaive to execute a Trip maneuver without provoking attacks of opportunity, gaining a +2 bonus on the CMB check. At the advanced level, your glaive attacks deal nonlethal damage at no penalty, and tripped opponents are also dazzled for 1 round. At the ultimate level, once per day, when you make a full attack with a glaive, all opponents in your reach must succeed at a Will save (DC 10 + your Charisma modifier + your level) or be fascinated by you for 1 round.",
    shortDescription:
      "Shelyn's glaive style: trip mastery, nonlethal attacks, fascinate nearby foes",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Shelyn' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Shelyn as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Shelyn', 'glaive', 'neutral good'],
  },

  {
    id: 'divine_fighting_technique_torag',
    name: "Divine Fighting Technique (Torag's Patient Strike)",
    description:
      "You have mastered Torag's divine fighting style with the warhammer. At the basic level, as a full-round action you may study your opponent and make a single warhammer attack at your highest BAB; if this attack hits, it deals double damage. At the advanced level, the studied attack deals triple damage. At the ultimate level, once per day, the studied attack also deals maximum damage and staggers the opponent for 1 round on a failed Fortitude save.",
    shortDescription:
      "Torag's warhammer style: study for double/triple damage, stagger on save failure",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Torag' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Torag as patron',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['divine', 'fighting technique', 'Torag', 'warhammer', 'lawful good'],
  },

  {
    id: 'divine_fighting_technique_urgathoa',
    name: "Divine Fighting Technique (Urgathoa's Hunger)",
    description:
      "You have mastered Urgathoa's divine fighting style with the scythe. At the basic level, when you confirm a critical hit with a scythe, the target gains 1 negative level (no saving throw). At the advanced level, when you deal damage with a scythe, you gain temporary HP equal to half the damage dealt (maximum = your level). At the ultimate level, once per day, a creature you kill with a scythe rises as a zombie under your command at the start of your next turn.",
    shortDescription:
      "Urgathoa's scythe style: negative level on crit, temp HP from damage, create zombies",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Urgathoa' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Urgathoa as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Urgathoa', 'scythe', 'neutral evil'],
  },

  {
    id: 'divine_fighting_technique_zon_kuthon',
    name: "Divine Fighting Technique (Zon-Kuthon's Flensing Strike)",
    description:
      "You have mastered Zon-Kuthon's divine fighting style with spiked chains. At the basic level, when you hit with a spiked chain, you deal 1 point of bleed damage in addition to normal damage. At the advanced level, you can make a trip attempt as a free action whenever you deal bleed damage, and the bleed damage increases to 2 points. At the ultimate level, once per day, on a hit with a spiked chain you can cause the target's natural armor bonus to decrease by 2 for 24 hours (multiple applications stack).",
    shortDescription:
      "Zon-Kuthon's spiked chain style: bleed damage, free trip, reduce natural armor",
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Must worship Zon-Kuthon' },
      {
        type: 'special',
        description:
          'BAB +5 or 5 levels in a class that grants divine spellcasting with Zon-Kuthon as patron',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'fighting technique', 'Zon-Kuthon', 'spiked chain', 'lawful evil'],
  },

  // ── Additional ISG Feats ──────────────────────────────────────────────────────

  {
    id: 'channel_discord',
    name: 'Channel Discord',
    description:
      'You can channel divine energy to cause discord among your enemies. When you channel energy to harm creatures, you can choose to instead impose a -2 penalty on all attack rolls, saving throws, and skill checks to all creatures affected that fail their saving throw. This penalty lasts for a number of rounds equal to your Charisma modifier (minimum 1).',
    shortDescription:
      'Channel energy to impose -2 on attacks, saves, and skills rather than dealing damage',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'special', description: 'Must worship a chaotic deity' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['divine', 'channel energy', 'chaotic', 'debuff'],
  },

  // channel_smite — already in Core Rulebook (core.ts), skipped

  {
    id: 'quicken_channel',
    name: 'Quicken Channel',
    description:
      'You can channel divine energy with a thought. You can channel energy as a swift action, but doing so expends two uses of channel energy.',
    shortDescription: 'Channel energy as a swift action (costs 2 uses)',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'special', description: 'Ability to channel energy 6 times per day' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['divine', 'channel energy', 'swift action'],
  },

  // selective_channeling — already in Core Rulebook (core.ts), skipped

  {
    id: 'holy_vindicator_devotion',
    name: 'Holy Vindicator Devotion',
    description:
      "Your dedication to your deity empowers your sacred abilities. You gain a +1 bonus on caster level checks made to overcome spell resistance when casting divine spells from your deity's domain. In addition, when you channel energy, you may choose to have it deal 1 additional die of damage (or heal 1 additional die of hit points).",
    shortDescription:
      '+1 caster level vs SR for domain spells; channel energy deals/heals one extra die',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'special', description: 'Must worship a deity and have access to a domain' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'caster_level_checks.spell_resistance.domain',
        value: 1,
        source: 'Holy Vindicator Devotion',
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'channel energy', 'domain', 'spell resistance'],
  },

  {
    id: 'sacred_conduit',
    name: 'Sacred Conduit',
    description:
      'Your birth was particularly auspicious, and you have always had an instinctive link to the divine. Whenever you channel energy, your channeling DC is increased by 1.',
    shortDescription: '+1 to channel energy DC',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'channel energy' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'channel_energy.dc',
        value: 1,
        source: 'Sacred Conduit',
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'channel energy', 'DC'],
  },

  // alignment_channel — already in Core Rulebook (core.ts) as a single feat with alignment choice; skipped
  // improved_channel — already in Core Rulebook (core.ts), skipped

  {
    id: 'versatile_channel',
    name: 'Versatile Channel',
    description:
      'Your channel energy can affect different types of creatures. Choose one type of creature affected by your channel energy (undead or living). Once per day, when you channel energy, you can choose to affect the other type of creature instead.',
    shortDescription: 'Once per day, channel energy can target the opposite creature type',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'channel energy' }],
    effects: [],
    activationMode: 'toggle',
    tags: ['divine', 'channel energy', 'versatile'],
  },

  {
    id: 'holy_strike',
    name: 'Holy Strike',
    description:
      'Your weapons strike with divine power against evil. Your weapons are treated as good-aligned for the purpose of overcoming damage reduction. Additionally, when you attack an evil creature, you deal 1 additional point of damage. This is not multiplied on a critical hit.',
    shortDescription: 'Weapons overcome evil DR; +1 damage against evil creatures',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must be good-aligned' },
      { type: 'special', description: 'Must worship a good-aligned deity' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.vs_evil',
        value: 1,
        source: 'Holy Strike',
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'good', 'damage reduction', 'holy'],
  },

  {
    id: 'unholy_strike',
    name: 'Unholy Strike',
    description:
      'Your weapons strike with dark power against good. Your weapons are treated as evil-aligned for the purpose of overcoming damage reduction. Additionally, when you attack a good creature, you deal 1 additional point of damage. This is not multiplied on a critical hit.',
    shortDescription: 'Weapons overcome good DR; +1 damage against good creatures',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must be evil-aligned' },
      { type: 'special', description: 'Must worship an evil-aligned deity' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.vs_good',
        value: 1,
        source: 'Unholy Strike',
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'evil', 'damage reduction', 'unholy'],
  },

  {
    id: 'domain_strike',
    name: 'Domain Strike',
    description:
      'You can channel a domain power through your unarmed strikes. As a swift action before making a melee attack, you can deliver a domain power that normally requires a melee touch attack through your unarmed strike or natural weapon instead. The attack counts as a melee touch attack for the purposes of delivering the power.',
    shortDescription: 'Deliver a melee touch domain power through an unarmed strike',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'domain' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['divine', 'domain', 'unarmed strike', 'touch attack'],
  },

  {
    id: 'divine_dignity',
    name: 'Divine Dignity',
    description:
      'Your divine calling sets you apart from others. You gain a bonus equal to your Charisma modifier (minimum +1) on saving throws against charm and compulsion effects. In addition, once per day when you fail a saving throw against a mind-affecting effect, you may reroll the saving throw and take the better result.',
    shortDescription:
      'CHA mod to saves vs. charm/compulsion; once/day reroll a failed mind-affecting save',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Must worship a deity' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'mind-affecting', 'saving throw', 'charisma'],
  },

  {
    id: 'defy_the_divine',
    name: 'Defy the Divine',
    description:
      'You have trained yourself to resist divine powers. You gain a +1 bonus on saving throws against divine spells. This bonus increases to +2 against divine spells cast by worshipers of a deity opposed to yours.',
    shortDescription:
      '+1 to saves vs divine spells; +2 vs divine spells from worshipers of opposed deity',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must worship a deity' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RESISTANCE,
        target: 'save.all',
        value: 1,
        source: 'Defy the Divine',
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'saving throw', 'resistance', 'anti-divine'],
  },

  {
    id: 'divine_protection',
    name: 'Divine Protection',
    description:
      'Your faith protects you from harm. Once per day, as an immediate action, you can add your Charisma modifier as a bonus on one saving throw you are about to make.',
    shortDescription: 'Once per day, add CHA modifier to a saving throw as an immediate action',
    source: 'Inner Sea Gods',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Must worship a deity' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['divine', 'saving throw', 'charisma', 'immediate action'],
  },

  // faith_healing — ID already used in Occult Adventures (different feat with same name); skipped to avoid duplicate
];
