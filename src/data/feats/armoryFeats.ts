import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

// Already in database (skipped): Net Adept, Net Maneuvering, Shield Snag, Potion Glutton,
//   Warrior Spirit, Exotic Weapon Proficiency, Catch Off-Guard, Throw Anything,
//   Snap Shot (UC), Improved Snap Shot (UC), Greater Snap Shot (UC), Ray Shield (UC)
//
// Missile Shield is from APG but is referenced as a prerequisite throughout the DB
// and was not yet defined — included here.
//
// Sap Adept / Sap Master: listed as UC on d20pfsrd but widely cross-listed with AA1;
//   included here sourced to Adventurer's Armory per task instructions.

export const ARMORY_FEATS: FeatDefinition[] = [
  // ==================== ADVENTURER'S ARMORY (2010) ====================

  {
    id: 'sap_adept',
    name: 'Sap Adept',
    description:
      'You know just where to strike to knock the sense out of your foe. Whenever you use a bludgeoning weapon to deal nonlethal sneak attack damage, you gain a bonus on your damage roll equal to the number of sneak attack damage dice you rolled.',
    shortDescription:
      'Bonus to nonlethal bludgeoning sneak attack damage equal to sneak attack dice rolled',
    source: "Adventurer's Armory",
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Sneak attack +1d6' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['sneak attack', 'nonlethal', 'bludgeoning', 'rogue'],
  },

  {
    id: 'sap_master',
    name: 'Sap Master',
    description:
      'You are a master at delivering painful nonlethal blows. Whenever you use a bludgeoning weapon to deal nonlethal sneak attack damage to a flat-footed opponent, roll your sneak attack dice twice and add the results together as your nonlethal sneak attack damage for that attack.',
    shortDescription:
      'Roll sneak attack dice twice vs. flat-footed opponents with bludgeoning nonlethal attacks',
    source: "Adventurer's Armory",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'sap_adept' },
      { type: 'special', description: 'Sneak attack +3d6' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['sneak attack', 'nonlethal', 'bludgeoning', 'flat-footed', 'rogue'],
  },

  {
    id: 'sly_draw',
    name: 'Sly Draw',
    description:
      'Your skill at drawing a weapon allows you to combine that action with a feint. When you draw a light weapon, you may make a Sleight of Hand check instead of a Bluff check to feint in combat. Other feats and abilities that modify feint attempts apply normally to this feint.',
    shortDescription: 'Use Sleight of Hand instead of Bluff to feint when drawing a light weapon',
    source: "Adventurer's Armory",
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'quick_draw' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['feint', 'sleight of hand', 'light weapon', 'draw'],
  },

  {
    id: 'splash_weapon_mastery',
    name: 'Splash Weapon Mastery',
    description:
      'You are skilled at throwing splash weapons with great accuracy and effect. When throwing a splash weapon, you act as if you had the Far Shot feat. When you hit with a splash weapon, select one additional square adjacent to the splash area; creatures in that square also take splash damage. When you miss with a splash weapon, you may adjust the miss direction on the grid by +1 or –1. The benefits of this feat apply only when throwing splash weapons; you do not gain the benefits of Far Shot with other ranged weapons, but this feat does qualify you for feats that require Far Shot.',
    shortDescription:
      'Treat as Far Shot with splash weapons, +1 splash square on hit, adjust miss direction',
    source: "Adventurer's Armory",
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['splash weapon', 'alchemist', 'thrown', 'range'],
  },

  {
    id: 'equipment_trick',
    name: 'Equipment Trick',
    description:
      'You understand how to use a particular type of equipment in combat. Select a type of equipment (such as boots, cloak, heavy blade scabbard, ladder, lantern, mirror, net, rope, shield, or another category with associated tricks). You gain access to all tricks related to that equipment. If the selected equipment qualifies as an improvised weapon, you may choose to treat it as a normal or improvised weapon, depending on which is more beneficial. You can take this feat multiple times; each time it applies to a different type of equipment.',
    shortDescription:
      'Gain access to all tricks for a chosen equipment type; can be taken multiple times',
    source: "Adventurer's Armory",
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'passive',
    tags: ['equipment', 'improvised', 'tricks', 'versatile'],
  },

  // ==================== ADVANCED PLAYER'S GUIDE — prerequisite filler ====================
  // Missile Shield is from APG but missing from DB and referenced as prereq in amhFeats/mythicFeats2

  {
    id: 'missile_shield',
    name: 'Missile Shield',
    description:
      'You can use your shield to deflect ranged projectile attacks. Once per round when you would normally be hit with an attack from a ranged weapon (not including spell effects, natural attacks, or massive ranged weapons), you may deflect it so that you take no damage from it, as if you had the Deflect Arrows feat. You must be wielding a light, heavy, or tower shield and be aware of the attack and not flat-footed.',
    shortDescription:
      'Once/round deflect a ranged weapon attack with your shield, taking no damage',
    source: "Adventurer's Armory",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'shield_focus' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['shield', 'ranged', 'deflect', 'defense'],
  },

  // ==================== ADVENTURER'S ARMORY 2 (2017) ====================

  {
    id: 'armor_adept',
    name: 'Armor Adept',
    description:
      'You have mastered the use of customized armor. Choose two armor modifications (such as deflecting or jarring). You no longer suffer the drawbacks of wearing armor with those modifications. You can gain this feat multiple times; each time you take it, it applies to two different armor modifications.',
    shortDescription: 'Ignore drawbacks of two chosen armor modifications',
    source: "Adventurer's Armory 2",
    types: ['combat'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['armor', 'modification', 'drawback'],
  },

  {
    id: 'weapon_adept',
    name: 'Weapon Adept',
    description:
      'You have mastered the use of customized weapons. Choose a weapon modification (such as jagged hooks). You treat weapons with that modification as being of their normal category (simple, martial, or exotic) for the purposes of proficiency and related feats. You can gain this feat multiple times; each time it applies to a different modification.',
    shortDescription:
      'Treat weapons with chosen modification as normal category for proficiency purposes',
    source: "Adventurer's Armory 2",
    types: ['combat'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['weapon', 'modification', 'proficiency'],
  },

  {
    id: 'creative_armorsmith',
    name: 'Creative Armorsmith',
    description:
      'You can quickly customize your armor on the fly. With 1 hour of work and access to masterwork armorsmithing tools, you can temporarily add an armor modification of your choice to your armor or temporarily remove an existing modification, at no cost. The modification remains for 8 hours. Other creatures wearing armor with your temporary modification treat that armor as one category more difficult and gain no benefit from the modification.',
    shortDescription: 'Spend 1 hour to temporarily add or remove an armor modification at no cost',
    source: "Adventurer's Armory 2",
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'craft_armor', ranks: 3 },
      { type: 'skill', skillId: 'knowledge_engineering', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['armor', 'modification', 'craft', 'temporary'],
  },

  {
    id: 'creative_weaponsmith',
    name: 'Creative Weaponsmith',
    description:
      'You can quickly customize your weapon on the fly. With 1 hour of work and access to masterwork weaponsmithing tools, you can temporarily add a weapon modification of your choice to your weapon or temporarily remove an existing modification, at no cost. The modification remains for 8 hours. Other creatures using your weapon treat it as one category more difficult to wield and gain no benefit from the modification.',
    shortDescription: 'Spend 1 hour to temporarily add or remove a weapon modification at no cost',
    source: "Adventurer's Armory 2",
    types: ['combat'],
    prerequisites: [
      { type: 'skill', skillId: 'craft_weapons', ranks: 3 },
      { type: 'skill', skillId: 'knowledge_engineering', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['weapon', 'modification', 'craft', 'temporary'],
  },

  {
    id: 'modification_mastery',
    name: 'Modification Mastery',
    description:
      'You can stack multiple modifications on a single piece of equipment. When using Creative Armorsmith or Creative Weaponsmith, you can add an additional modification to a weapon or armor that already has a modification, provided the second modification is one you have selected via Armor Adept or Weapon Adept. Allies can benefit from armor or weapons bearing your temporary modifications normally.',
    shortDescription:
      'Stack an additional modification on already-modified gear; allies benefit from your temporary mods',
    source: "Adventurer's Armory 2",
    types: ['combat'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Creative Armorsmith, Armor Adept, and Craft (armor) 7 ranks, OR Creative Weaponsmith, Weapon Adept, and Craft (weapons) 7 ranks; Knowledge (engineering) 7 ranks',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['armor', 'weapon', 'modification', 'stacking', 'craft'],
  },

  {
    id: 'modification_trainer',
    name: 'Modification Trainer',
    description:
      'You can teach others to use modified equipment effectively. Select a modification you have chosen via Armor Adept or Weapon Adept. Once per day, you can spend 10 minutes instructing a number of allies equal to your Charisma modifier (minimum 1) in the use of that modification. Trainees must have Intelligence 3 or higher. Instructed allies gain the benefit of Armor Adept or Weapon Adept with that modification for 8 hours.',
    shortDescription:
      'Spend 10 min to grant allies Armor/Weapon Adept benefits for a chosen modification for 8 hours',
    source: "Adventurer's Armory 2",
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Armor Adept or Weapon Adept, fighter level 4th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['armor', 'weapon', 'modification', 'training', 'allies'],
  },

  {
    id: 'modified_weapon_proficiency',
    name: 'Modified Weapon Proficiency',
    description:
      'You are trained with a specific weapon type even when it has been mechanically altered. Select a weapon with which you are proficient. You are always considered proficient with modified versions of that weapon. Normally, a modified weapon is treated as one category more difficult to wield. Special: Warpriests with the focus weapon class feature may take this feat in place of a bonus Weapon Focus feat. Kensai magi may similarly use their chosen weapon.',
    shortDescription: 'Always proficient with modified versions of a chosen weapon type',
    source: "Adventurer's Armory 2",
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Proficiency with the selected weapon' }],
    effects: [],
    activationMode: 'passive',
    tags: ['weapon', 'modification', 'proficiency'],
  },

  {
    id: 'darting_viper',
    name: 'Darting Viper',
    description:
      'You can quickly shift your dorn-dergar between close and reach configurations. When wielding a dwarven dorn-dergar, you can change whether you are using it as a normal or reach weapon as a swift action. Without this feat, changing configurations requires a move action.',
    shortDescription:
      'Change dorn-dergar reach configuration as a swift action (normally move action)',
    source: "Adventurer's Armory 2",
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 4 },
      { type: 'special', description: 'Proficiency with the dwarven dorn-dergar' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dorn-dergar', 'dwarf', 'reach', 'swift action'],
  },

  {
    id: 'dorn_dergar_master',
    name: 'Dorn-Dergar Master',
    description:
      'You have mastered wielding the dorn-dergar in one hand. You can use a dwarven dorn-dergar as a one-handed weapon. When wielding it one-handed, changing whether it is being used as a normal or reach weapon is a full-round action. If you also have the Darting Viper feat, this change is instead a move action.',
    shortDescription:
      'Wield dorn-dergar one-handed; configuration change is full-round action (move with Darting Viper)',
    source: "Adventurer's Armory 2",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'two_weapon_fighting' },
      { type: 'bab', minimum: 4 },
      { type: 'special', description: 'Proficiency with the dwarven dorn-dergar' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['dorn-dergar', 'dwarf', 'one-handed', 'reach'],
  },

  {
    id: 'hook_fighter',
    name: 'Hook Fighter',
    description:
      'In your deft hands, a climbing tool becomes a deadly weapon. You treat a grappling hook as a one-handed weapon that deals piercing damage equal to a heavy pick of its size with the disarm and trip special weapon features, without the usual improvised weapon penalty. If you are proficient with whips and the hook has 10 or more feet of rope or chain attached, it becomes a two-handed reach weapon (15-foot reach) that can be used to attack both adjacent and more distant foes. Switching between one-handed and reach modes requires a move action. When performing a reposition combat maneuver with this weapon, the target can only be moved toward you.',
    shortDescription:
      'Wield grappling hook as piercing disarm/trip weapon; with whip proficiency use as reach weapon',
    source: "Adventurer's Armory 2",
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'passive',
    tags: ['grappling hook', 'improvised', 'reach', 'disarm', 'trip'],
  },

  {
    id: 'improvisational_healer',
    name: 'Improvisational Healer',
    description:
      "You can provide medical care without proper equipment. When attempting a Heal check that normally requires a healer's kit, you do not take a penalty for not having one. When you do use a healer's kit, you can augment it with improvised supplies, gaining an additional +2 circumstance bonus on your Heal check. Additionally, when you consume or administer a potion of cure light wounds, cure moderate wounds, or cure serious wounds, treat its caster level as equal to the number of ranks you have in Heal (though each potion is still subject to its normal maximum healing—a potion of cure light wounds can cure a maximum of 1d8+5 points of damage).",
    shortDescription:
      "No penalty for missing healer's kit; +2 bonus with kit; scale cure potions to Heal ranks",
    source: "Adventurer's Armory 2",
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'heal', ranks: 1 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.heal',
        value: 2,
        source: 'Improvisational Healer',
        condition: {
          type: 'custom',
          description: "When using a healer's kit supplemented with improvised supplies",
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['heal', "healer's kit", 'potions', 'improvised'],
  },

  {
    id: 'craft_poppet',
    name: 'Craft Poppet',
    description:
      'You know how to create poppets—small constructed beings imbued with a spark of life. You can craft poppets and add augmentations to existing poppets you control. For the purposes of meeting the prerequisites for Craft Construct, you are treated as having both the Craft Magic Arms and Armor feat and the Craft Wondrous Item feat. Poppets can be enhanced with augmentations such as agile (bonus feats), armored (+2 AC), durable (+10 HP), fleet (30 ft. speed), mighty (+4 Str), nimble (+4 Dex), soaring (flight 20 ft.), and swimming (20 ft. swim speed).',
    shortDescription:
      'Craft poppet constructs and add augmentations; counts as Craft Magic Arms/Armor and Craft Wondrous Item for Craft Construct prerequisites',
    source: "Adventurer's Armory 2",
    types: ['item_creation'],
    prerequisites: [{ type: 'caster_level', minimum: 1 }],
    effects: [],
    activationMode: 'passive',
    tags: ['construct', 'poppet', 'crafting', 'item creation'],
  },

  {
    id: 'poppet_familiar',
    name: 'Poppet Familiar',
    description:
      "You can bond with a poppet, transforming it into your familiar. You may select a standard Tiny poppet as your familiar. The poppet's Wisdom increases to match its Intelligence, it gains the ability to speak and understand one language of your choice, and its class skills become Craft, Perception, Profession, and Stealth. It cannot receive crafted augmentations but gains spontaneous augmentations as you advance in level. At caster level 5th, the poppet either becomes Small or gains two augmentations of your choice. At caster level 7th, and every 2 caster levels thereafter, it gains an additional augmentation. At caster level 7th it also gains a breath weapon (1d6 piercing, 15-ft. cone, 3/day), increasing by 1d6 every 2 levels (maximum 7d6). If lost or destroyed, you can replace it via an 8-hour ritual.",
    shortDescription:
      'Select a poppet as your familiar; it gains augmentations and abilities as you level',
    source: "Adventurer's Armory 2",
    types: ['general'],
    prerequisites: [
      { type: 'caster_level', minimum: 3 },
      { type: 'class_feature', featureName: 'ability to acquire a familiar' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'poppet', 'construct', 'companion'],
  },

  {
    id: 'tool_optimizer',
    name: 'Tool Optimizer',
    description:
      'You know how to make the best of the tools at hand. You take no penalty for using an improvised tool associated with a skill in which you have at least 1 rank. Additionally, if you have at least 3 ranks in a skill, you can treat a normal tool associated with that skill as though it were a masterwork tool for the purposes of the +2 bonus on skill checks.',
    shortDescription:
      'No penalty for improvised tools (1+ rank); treat normal tools as masterwork (3+ ranks)',
    source: "Adventurer's Armory 2",
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Craft (any) 1 rank, Disable Device 1 rank, or Profession (any) 1 rank',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['tools', 'skills', 'improvised', 'masterwork'],
  },

  // ==================== MAGICAL MARKETPLACE (2013) ====================

  {
    id: 'extend_the_bulwark',
    name: 'Extend the Bulwark',
    description:
      'You can use your heavy armor to protect adjacent allies. As a free action, you may grant an adjacent ally who also has this feat a circumstance bonus to AC equal to half the armor bonus provided by your armor. This bonus lasts for 1 round. While providing this bonus, you gain no AC benefit from your armor.',
    shortDescription:
      'As a free action, grant adjacent ally (with this feat) half your armor bonus to AC for 1 round; you lose your armor bonus while doing so',
    source: 'Magical Marketplace',
    types: ['combat', 'teamwork'],
    prerequisites: [
      {
        type: 'special',
        description: 'Must wear medium or heavy armor; adjacent ally must also have this feat',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['armor', 'teamwork', 'defense', 'ally', 'AC'],
  },

  {
    id: 'quillbreaker_defense',
    name: 'Quillbreaker Defense',
    description:
      'You can sacrifice your armor spikes to reduce incoming damage. When you take damage from a non-magical attack, you may use an immediate action to give your armor spikes the broken condition, reducing the damage you take by 5. If your armor spikes are already broken, they are instead destroyed. If you use masterwork armor spikes, you reduce the damage taken by 10 rather than 5.',
    shortDescription: 'Immediate action: break armor spikes to reduce damage by 5 (masterwork: 10)',
    source: 'Magical Marketplace',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Proficiency with armor spikes' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['armor spikes', 'defense', 'immediate action', 'damage reduction'],
  },

  {
    id: 'blowout_shot_deed',
    name: 'Blowout Shot Deed',
    description:
      'By spending 1 grit point, you can retrieve a specially prepared dose of black powder from your person. The next time you fire the firearm loaded with this powder, the concussive blast knocks you back 5 feet in the direction opposite your aim (if blocked, you brace and stay put). At the first range increment, targets you hit take normal damage and must succeed at a Reflex save (DC = 10 + 1/2 your gunslinger level + your Intelligence modifier) or be pushed back 10 feet. At the second range increment, failing the save pushes creatures back 5 feet. Beyond two range increments, no concussive effect applies.',
    shortDescription:
      'Spend 1 grit: special powder blast knocks you back and pushes hit targets back on failed Reflex save',
    source: 'Magical Marketplace',
    types: ['grit'],
    prerequisites: [
      { type: 'skill', skillId: 'craft_alchemy', ranks: 3 },
      { type: 'special', description: 'Grit class feature or Amateur Gunslinger feat' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['gunslinger', 'grit', 'deed', 'firearm', 'push', 'alchemical'],
  },

  {
    id: 'whip_shot_deed',
    name: 'Whip-Shot Deed',
    description:
      'You have learned to fire your firearm simultaneously with a pistol-whip strike. Whenever you use your pistol-whip deed, you may also fire a single bullet from your firearm at the same target at the same time. Using this feat costs 2 grit points total (1 for pistol-whip and 1 for whip-shot) and requires a successful ranged touch attack against the pistol-whip target. You cannot use the scatter weapon quality when employing this feat.',
    shortDescription:
      'Spend 2 grit total: fire a bullet simultaneously with a pistol-whip deed strike',
    source: 'Magical Marketplace',
    types: ['grit'],
    prerequisites: [
      {
        type: 'special',
        description: 'Grit class feature or Amateur Gunslinger feat, pistol-whip deed',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['gunslinger', 'grit', 'deed', 'firearm', 'pistol-whip'],
  },

  // ==================== ITEM MASTERY FEATS (Weapon Master's Handbook / Magic Tactics Toolbox) ====================
  // These are the item mastery feat chain referenced in the task instructions.
  // Source books: Weapon Master's Handbook (2015), Magic Tactics Toolbox (2016)

  {
    id: 'item_mastery_ability',
    name: 'Ability Mastery',
    description:
      "Once per day, you can meditate for 10 minutes while wearing transmutation magic armor or a wondrous item with a transmutation spell of 2nd level or higher in its construction requirements that occupies a body slot. After meditation concludes, you gain a +2 enhancement bonus to one ability score of your choice for 24 hours. The item must remain equipped to maintain the benefit; removing it immediately cancels the bonus. You cannot regain the benefit until 24 hours pass from the feat's last use.",
    shortDescription:
      'Meditate 10 min with transmutation item: gain +2 enhancement bonus to one ability score for 24 hours',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +4' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.ENHANCEMENT,
        target: 'abilities.any',
        value: 2,
        source: 'Ability Mastery',
        condition: {
          type: 'custom',
          description:
            'After 10-minute meditation with transmutation magic item; item must remain equipped',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['item mastery', 'transmutation', 'ability score', 'enhancement'],
  },

  {
    id: 'item_mastery_compulsion',
    name: 'Compulsion Mastery',
    description:
      "You can channel enchantment magic from items to influence others' minds. You can cause an item that has an enchantment spell of 3rd level or higher listed in its construction requirements to cast suggestion as a spell-like ability. You gain one daily use of this ability, plus an additional use when your base Fortitude save bonus reaches +9 and +12.",
    shortDescription:
      'Activate enchantment item (3rd+ level spell) to cast suggestion 1/day (more uses at higher Fort)',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude save bonus +6' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'enchantment', 'mind-affecting', 'suggestion'],
  },

  {
    id: 'item_mastery_concealment',
    name: 'Concealment Mastery',
    description:
      'You can channel illusion magic from items to become invisible. You can cause an item with a 1st-level illusion spell in its construction requirements to cast vanish. With 7 ranks in both Stealth and Use Magic Device, you can instead cause items with 2nd-level or higher illusion spells to cast invisibility or undetectable alignment. You gain one daily use, with additional uses at base Fortitude save bonuses of +9 and +12.',
    shortDescription:
      'Activate illusion item to cast vanish (or invisibility/undetectable alignment with higher skills)',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'stealth', ranks: 3 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'illusion', 'invisibility', 'stealth'],
  },

  {
    id: 'item_mastery_curative',
    name: 'Curative Mastery',
    description:
      'You can channel conjuration healing magic from items. You can cause an item with a 1st-level or higher conjuration spell in its construction requirements to cast cure light wounds as a spell-like ability. You gain one daily use, with additional uses at base Fortitude save bonuses of +4, +6, +8, +10, and +12. By spending multiple uses, you can cast more powerful spells: 2 uses for cure moderate wounds (2nd-level+ item), 3 uses for cure serious wounds (3rd-level+), 4 uses for cure critical wounds (4th-level+), or 5 uses for breath of life (5th-level+).',
    shortDescription:
      'Activate conjuration item to cast cure wounds (scales with uses and item spell level)',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 1 },
      { type: 'special', description: 'Base Fortitude save bonus +2' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'conjuration', 'healing', 'cure'],
  },

  {
    id: 'item_mastery_curse',
    name: 'Curse Mastery',
    description:
      'You can channel necromancy magic from items to afflict foes with a curse. You can cause an item that has a necromancy spell of 2nd level or higher in its construction requirements to cast bestow curse as a spell-like ability. You gain one daily use, with additional uses when your base Fortitude save bonus reaches +9 and +12.',
    shortDescription: 'Activate necromancy item (2nd+ level spell) to cast bestow curse 1/day',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude save bonus +6' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'necromancy', 'curse', 'bestow curse'],
  },

  {
    id: 'item_mastery_dispel',
    name: 'Dispel Mastery',
    description:
      'You can channel abjuration magic from items to suppress hostile magic. You can cause an item that has an abjuration spell of 2nd level or higher in its construction requirements to cast dispel magic as a spell-like ability, but only as a targeted dispel (not an area dispel). You gain one daily use, with additional uses when your base Fortitude save bonus reaches +9 and +12.',
    shortDescription:
      'Activate abjuration item (2nd+ level spell) to cast targeted dispel magic 1/day',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude save bonus +6' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'abjuration', 'dispel magic'],
  },

  {
    id: 'item_mastery_energy',
    name: 'Energy Mastery',
    description:
      "You can channel evocation energy from items. You can cause an item that has a 1st-level or higher evocation spell with the acid, cold, electricity, or fire descriptor in its construction requirements to cast burning hands as a spell-like ability, dealing damage of the matching energy type instead of fire. You gain one daily use, with additional uses at base Fortitude save bonuses of +6, +8, +10, and +12. By spending 2 daily uses, you can cast lightning bolt instead if the item's construction spell is 3rd level or higher (damage still matches the item's energy type).",
    shortDescription:
      "Activate evocation item to cast burning hands (or lightning bolt) in the item's energy type",
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 1 },
      { type: 'special', description: 'Base Fortitude save bonus +4' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'evocation', 'energy', 'burning hands', 'lightning bolt'],
  },

  {
    id: 'item_mastery_flight',
    name: 'Flight Mastery',
    description:
      'You can activate flight magic from transmutation items. You can cause an item that has a transmutation spell of 2nd level or higher in its construction requirements to cast fly as a spell-like ability. When using armor with an enhancement bonus during this effect, you may substitute that enhancement bonus for your Dexterity modifier on Fly skill checks. You gain one daily use, with additional uses at base Fortitude save bonuses of +9 and +12.',
    shortDescription:
      'Activate transmutation item (2nd+ level spell) to cast fly; use armor enhancement bonus on Fly checks',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude save bonus +6' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'transmutation', 'fly', 'flight'],
  },

  {
    id: 'item_mastery_force_shield',
    name: 'Force Shield Mastery',
    description:
      'You can channel abjuration magic from items to create a force shield. You can cause an item that has an abjuration spell of 1st level or higher in its construction requirements to create a magical effect that functions like shield, except the shield bonus to AC is equal to 1/3 your base Fortitude save bonus (minimum +1). You gain one daily use, with additional uses at base Fortitude save bonuses of +6, +9, and +12.',
    shortDescription:
      'Activate abjuration item to create a force shield (bonus = 1/3 Fort save bonus)',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SHIELD,
        target: 'ac',
        value: 1,
        source: 'Force Shield Mastery',
        condition: {
          type: 'custom',
          description:
            'While force shield effect is active (bonus scales to 1/3 base Fortitude save bonus)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['item mastery', 'abjuration', 'shield', 'AC', 'force'],
  },

  {
    id: 'item_mastery_illusion',
    name: 'Illusion Mastery',
    description:
      'You can channel illusion magic from items to create false images. You can cause an item that has an illusion spell of 1st level or higher in its construction requirements to cast minor image as a spell-like ability. You gain one daily use, with additional uses at base Fortitude save bonuses of +6, +8, +10, and +12.',
    shortDescription:
      'Activate illusion item (1st+ level spell) to cast minor image 1/day (more uses at higher Fort)',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 2 },
      { type: 'special', description: 'Base Fortitude save bonus +4' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'illusion', 'minor image'],
  },

  {
    id: 'item_mastery_implement',
    name: 'Implement Mastery',
    description:
      "Your occultist implements count as magic items for item mastery feats. All spells you know from each implement's school count as construction requirement spells for that implement when using item mastery feats. You can spend mental focus points equal to half the base Fortitude save bonus prerequisite of an item mastery feat to activate that feat without expending a daily use. As an occultist, you may select item mastery feats in place of focus powers (if prerequisites are met).",
    shortDescription:
      'Occultist implements count as magic items for item mastery; spend mental focus to activate without daily uses',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'class_feature', featureName: 'implements' },
      { type: 'class_feature', featureName: 'mental focus' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'occultist', 'implement', 'mental focus'],
  },

  {
    id: 'item_mastery_racial',
    name: 'Racial Item Mastery',
    description:
      'You can channel items tied to your race to activate your racial spell-like abilities without expending daily charges. You must focus on an item tied to your race—one with a spell in its construction whose school and level match the racial ability you wish to activate. Qualifying racial abilities include those from racial traits, feats or traits requiring your race as a prerequisite, or class options exclusive to your race. You can use this feat once per day, gaining additional uses when your base Fortitude save bonus reaches +9 and +12.',
    shortDescription:
      'Use a racially linked item to activate racial spell-like abilities without spending daily uses',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 6 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'racial', 'spell-like ability'],
  },

  {
    id: 'item_mastery_resistance',
    name: 'Resistance Mastery',
    description:
      'Once per day, you can meditate for 10 minutes while wearing magic armor or a wondrous item with an abjuration spell of 2nd level or higher in its construction requirements. This grants either a +1 resistance bonus on all saving throws or 5 points of energy resistance against one energy type (acid, cold, electricity, fire, or sonic) for 24 hours. Removing the item immediately ends the benefit. The bonus increases by +1 (or resistance by 5 points) when your base Fortitude save bonus reaches +6, +9, and +12.',
    shortDescription:
      'Meditate 10 min with abjuration item: +1 resistance to saves or 5 energy resistance for 24 hours',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 3 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RESISTANCE,
        target: 'save.all',
        value: 1,
        source: 'Resistance Mastery',
        condition: {
          type: 'custom',
          description:
            'After 10-minute meditation with abjuration magic item; item must remain equipped; increases at higher Fort bonuses',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['item mastery', 'abjuration', 'resistance', 'saving throws', 'energy resistance'],
  },

  {
    id: 'item_mastery_restoration',
    name: 'Restoration Mastery',
    description:
      'You can channel conjuration (healing) magic from items to remove debilitating conditions. You can cause an item with a conjuration (healing) spell of 2nd level or higher in its construction requirements to cast lesser restoration as a spell-like ability. With 9 ranks in both Heal and Use Magic Device, you can instead cause items with conjuration (healing) spells of 3rd level or higher to cast remove blindness/deafness or remove paralysis. You gain one daily use, with additional uses at base Fortitude save bonuses of +9 and +12.',
    shortDescription:
      'Activate conjuration healing item to cast lesser restoration (or remove blindness/paralysis with high skills)',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'heal', ranks: 5 },
      { type: 'skill', skillId: 'use_magic_device', ranks: 5 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'conjuration', 'restoration', 'healing', 'conditions'],
  },

  {
    id: 'item_mastery_symbolic',
    name: 'Symbolic Mastery',
    description:
      "You can channel divine energy through a holy symbol of your deity into harmful magical attacks called symbolic bolts. A number of times per day equal to your base Fortitude save bonus, you can cause a holy symbol of a deity you worship (whose alignment matches yours) to unleash a symbolic bolt as a standard action. You may make a melee touch attack (no attack of opportunity) or a ranged touch attack (30-foot range). The bolt deals 1d6 + half your Use Magic Device ranks in damage, or 1d3 + half your ranks in untyped damage. Damage type is determined by your deity's domains (acid, cold, electricity, fire, negative energy, positive energy, sonic, or untyped). You can take Weapon Focus (symbolic bolt) and other weapon-affecting abilities apply normally, but magic weapon spells and abilities cannot enhance the symbolic bolt.",
    shortDescription:
      "Channel deity's holy symbol to make melee or ranged touch attacks dealing 1d6+half UMD ranks in energy damage",
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 4 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +2' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'holy symbol', 'divine', 'symbolic bolt', 'attack'],
  },

  {
    id: 'item_mastery_telekinetic',
    name: 'Telekinetic Mastery',
    description:
      'You can harness transmutation magic from items to move objects with your mind. You can cause an item that has a transmutation spell of 4th level or higher in its construction requirements to cast telekinesis as a spell-like ability. You gain one daily use, with additional uses when your base Fortitude save bonus reaches +9 and +11.',
    shortDescription: 'Activate transmutation item (4th+ level spell) to cast telekinesis 1/day',
    source: 'Magical Marketplace',
    types: ['combat', 'item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 5 },
      { type: 'special', description: 'Base Fortitude save bonus +7' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'transmutation', 'telekinesis'],
  },

  {
    id: 'item_mastery_teleportation',
    name: 'Teleportation Mastery',
    description:
      'You can channel conjuration magic from items to teleport short distances. You can cause an item that has a conjuration spell of 3rd level or higher in its construction requirements to cast dimension door as a spell-like ability. You gain one daily use, with additional uses when your base Fortitude save bonus reaches +9 and +12.',
    shortDescription: 'Activate conjuration item (3rd+ level spell) to cast dimension door 1/day',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 4 },
      { type: 'special', description: 'Base Fortitude save bonus +6' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'conjuration', 'dimension door', 'teleportation'],
  },

  {
    id: 'item_mastery_vision',
    name: 'Vision Mastery',
    description:
      'You can channel divination magic from items to enhance your sight. You can cause an item that has a divination spell of 1st level or higher in its construction requirements to grant you either darkvision (60 feet) or see invisibility. You gain one daily use, with additional uses at base Fortitude save bonuses of +6, +8, +10, and +12.',
    shortDescription:
      'Activate divination item to gain darkvision 60 ft. or see invisibility 1/day',
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 2 },
      { type: 'special', description: 'Base Fortitude save bonus +4' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'divination', 'darkvision', 'see invisibility'],
  },

  {
    id: 'item_mastery_weapon_evoker',
    name: 'Weapon Evoker Mastery',
    description:
      'You can temporarily amplify the elemental energy in your enchanted weapon. As a swift action while wielding a magic weapon with a special ability that deals extra acid, cold, electricity, fire, or sonic damage on a hit, you deal an additional 1d4 points of that same energy type with each hit you make with that weapon for 1 round.',
    shortDescription: "Swift action: deal +1d4 of your weapon's energy type for 1 round",
    source: 'Magical Marketplace',
    types: ['item_mastery'],
    prerequisites: [
      { type: 'skill', skillId: 'use_magic_device', ranks: 2 },
      { type: 'special', description: 'Base Fortitude saving throw bonus +3' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item mastery', 'evocation', 'weapon', 'energy damage', 'swift action'],
  },
];
