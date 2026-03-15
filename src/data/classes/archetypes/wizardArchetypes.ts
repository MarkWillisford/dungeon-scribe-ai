import { ArchetypeData } from '../types';

export const WIZARD_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Arcane Bomber
  // ──────────────────────────────────────────────
  {
    name: 'Arcane Bomber',
    className: 'Wizard',
    description:
      'The arcane bomber combines alchemical knowledge with arcane power, gaining the ability to create and throw arcane bombs fueled by spell slots.',
    replacedFeatures: ['Arcane Bond', 'Cantrips'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Spellblast Bombs',
        level: 1,
        description:
          'The arcane bomber can sacrifice a prepared spell to create a bomb as a standard action. The bomb deals 1d6 fire damage per level of the spell sacrificed plus Intelligence modifier, with a splash radius of 5 feet. Targets may attempt a Reflex save for half damage.',
      },
      {
        name: 'School of the Bomb',
        level: 1,
        description:
          'The arcane bomber gains the admixture subschool of the evocation school. He does not gain a standard arcane school or opposition schools.',
      },
    ],
    source: 'Pathfinder Player Companion: Magical Marketplace',
  },

  // ──────────────────────────────────────────────
  // 2. Arcane Crafter
  // ──────────────────────────────────────────────
  {
    name: 'Arcane Crafter',
    className: 'Wizard',
    description:
      'The arcane crafter focuses on the creation of magical items, gaining enhanced crafting abilities at the expense of some arcane school powers.',
    replacedFeatures: ['Arcane School'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Metacharge',
        level: 1,
        description:
          'The arcane crafter can spend points from his arcane reservoir (3 + half wizard level) to apply metamagic feats he knows to a spell without increasing the casting time. Each point spent reduces the spell level increase by 1.',
      },
      {
        name: 'Crafting Mastery',
        level: 8,
        description:
          'The arcane crafter gains a bonus equal to half his wizard level on Spellcraft checks made to craft magic items. He can craft items in half the normal time.',
      },
    ],
    source: 'Pathfinder Player Companion: Magical Marketplace',
  },

  // ──────────────────────────────────────────────
  // 3. Arcane Physician
  // ──────────────────────────────────────────────
  {
    name: 'Arcane Physician',
    className: 'Wizard',
    description:
      'The arcane physician uses arcane magic to heal wounds and cure diseases, bridging the gap between arcane and divine healing traditions.',
    replacedFeatures: ['Scribe Scroll', 'Arcane Bond'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Appearance of Health',
        level: 1,
        description:
          'The arcane physician gains Heal as a class skill. He can use Intelligence instead of Wisdom for Heal checks. He also adds certain conjuration (healing) spells to his spellbook at appropriate levels.',
      },
      {
        name: 'Appearance of Life',
        level: 1,
        description:
          'The arcane physician can expend a spell slot to create a healing effect as a standard action. The effect heals 1d6 hit points per level of the spell slot expended. This ability functions as a spell-like ability.',
      },
    ],
    source: "Pathfinder Player Companion: Healer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 4. Bonded Wizard
  // ──────────────────────────────────────────────
  {
    name: 'Bonded Wizard',
    className: 'Wizard',
    description:
      'The bonded wizard forms a deeper connection with his bonded object, gaining enhanced abilities through it at the expense of his arcane school powers.',
    replacedFeatures: ['Arcane School'],
    modifiedFeatures: ['Arcane Bond'],
    newFeatures: [
      {
        name: 'Enhanced Bond',
        level: 1,
        description:
          "The bonded wizard's bonded object grants a +1 bonus to the DC of spells from one school chosen at 1st level. This bonus increases by +1 at 8th and 16th level.",
      },
      {
        name: 'Bond Recall',
        level: 5,
        description:
          'Once per day, the bonded wizard can use his bonded item to recall a spell he has already cast that day. At 10th level and every 5 levels thereafter, he can use this ability one additional time per day.',
      },
      {
        name: 'Improved Bond',
        level: 10,
        description:
          'The bonded wizard can use his bonded item to cast any one spell from his spellbook, even if that spell is not prepared, as a full-round action once per day.',
      },
    ],
    source: 'Pathfinder Player Companion: Familiar Folio',
  },

  // ──────────────────────────────────────────────
  // 5. Cruoromancer
  // ──────────────────────────────────────────────
  {
    name: 'Cruoromancer',
    className: 'Wizard',
    description:
      'The cruoromancer augments his arcane power with blood magic, using his own vitality or that of others to fuel enhanced spellcasting. This archetype is common among dhampir wizards.',
    replacedFeatures: ['Arcane Bond', 'Arcane School'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Blood Focus',
        level: 1,
        description:
          'The cruoromancer gains the necromancy arcane school. He may choose to take 1d4 hit points of damage when casting a necromancy spell to increase its caster level by 1.',
      },
      {
        name: 'Blood Command',
        level: 1,
        description:
          'The cruoromancer gains a blood familiar, a sanguine construct that serves as both arcane bond and familiar. It is a homunculus that shares a blood link with the wizard.',
      },
      {
        name: 'Hemorrhage',
        level: 5,
        description:
          'When the cruoromancer confirms a critical hit with a touch spell or a spell that requires an attack roll, the target takes 1 point of bleed damage per level of the spell. This bleed stacks with other bleed effects.',
      },
      {
        name: 'Blood Infusion',
        level: 10,
        description:
          'The cruoromancer can infuse a spell with blood magic by spending a move action to deal damage to himself. He can then apply one metamagic feat he knows to the next spell he casts without increasing the casting time or spell level.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of the Night',
  },

  // ──────────────────────────────────────────────
  // 6. Dimensional Excavator
  // ──────────────────────────────────────────────
  {
    name: 'Dimensional Excavator',
    className: 'Wizard',
    description:
      'The dimensional excavator specializes in conjuration magic relating to extradimensional spaces and planar travel, opening paths to other dimensions.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Extradimensional Storage',
        level: 1,
        description:
          'The dimensional excavator gains access to a personal extradimensional space that functions similarly to a bag of holding. The space grows as the wizard gains levels, starting at 10 cubic feet at 1st level.',
      },
      {
        name: 'Dimensional Sense',
        level: 1,
        description:
          'The dimensional excavator can detect extradimensional spaces and active portals within 60 feet as a standard action. At 5th level, this becomes a constant ability.',
      },
      {
        name: 'Planar Breach',
        level: 8,
        description:
          'The dimensional excavator can create small tears in planar boundaries, allowing him to reach through to retrieve objects or deposit items in his extradimensional storage as a move action.',
      },
    ],
    source: 'Pathfinder Player Companion: People of the Wastes',
  },

  // ──────────────────────────────────────────────
  // 7. Exploiter Wizard
  // ──────────────────────────────────────────────
  {
    name: 'Exploiter Wizard',
    className: 'Wizard',
    description:
      "The exploiter wizard sacrifices his arcane school to gain access to arcanist exploits, blending the flexibility of the arcanist class with the wizard's prepared casting.",
    replacedFeatures: ['Arcane School'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Arcane Reservoir',
        level: 1,
        description:
          'The exploiter wizard gains an arcane reservoir equal to 3 + half his wizard level. He can use these points to fuel arcanist exploits and to increase the DC or caster level of a spell by 1 by spending 1 point.',
      },
      {
        name: 'Exploiter Exploit',
        level: 1,
        description:
          'At 1st level and every 4 levels thereafter, the exploiter wizard gains one arcanist exploit. He uses his wizard level as his arcanist level for determining the effects and prerequisites of exploits.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 8. Familiar Adept
  // ──────────────────────────────────────────────
  {
    name: 'Familiar Adept',
    className: 'Wizard',
    description:
      'The familiar adept forms an exceptionally close bond with his familiar, gaining enhanced abilities through it but losing his arcane school powers.',
    replacedFeatures: ['Arcane School'],
    modifiedFeatures: ['Arcane Bond'],
    newFeatures: [
      {
        name: 'Familiar Bond',
        level: 1,
        description:
          'The familiar adept must select a familiar as his arcane bond. His familiar gains the ability to deliver touch spells at 1st level (instead of the normal 3rd level for familiars).',
      },
      {
        name: 'School Familiar',
        level: 1,
        description:
          "The familiar adept's familiar stores his arcane school abilities. He selects an arcane school as normal, but the school powers are channeled through his familiar. His familiar must be within arm's reach for him to use school abilities.",
      },
      {
        name: 'Familiar Feat',
        level: 5,
        description:
          "At 5th level, the familiar adept's familiar gains a bonus feat chosen from a limited list. The familiar gains an additional feat at 10th, 15th, and 20th level.",
      },
      {
        name: 'Empowered Familiar',
        level: 10,
        description:
          "The familiar adept's familiar gains spell resistance equal to 5 + the wizard's level. The familiar can also cast one spell per day from the wizard's spellbook of a level no higher than half the wizard's level.",
      },
    ],
    source: 'Pathfinder Player Companion: Familiar Folio',
  },

  // ──────────────────────────────────────────────
  // 9. Hallowed Necromancer
  // ──────────────────────────────────────────────
  {
    name: 'Hallowed Necromancer',
    className: 'Wizard',
    description:
      'The hallowed necromancer uses necromantic magic not to create undead but to destroy them, specializing in fighting the unliving and protecting the sanctity of death.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Hallowed Necromancy',
        level: 1,
        description:
          'The hallowed necromancer must choose the necromancy school. He cannot cast animate dead, create undead, or create greater undead. He gains a +2 bonus to caster level checks to overcome the spell resistance of undead.',
      },
      {
        name: 'Holy Water Affinity',
        level: 1,
        description:
          'The hallowed necromancer can create holy water as if he were a divine caster. He can also use holy water as a material component to increase the damage of his necromancy spells against undead by 1d6.',
      },
      {
        name: 'Disrupt Undead Mastery',
        level: 5,
        description:
          'The hallowed necromancer adds his Intelligence modifier to damage rolls when casting spells that specifically target or deal damage to undead creatures.',
      },
      {
        name: 'Life Anchor',
        level: 10,
        description:
          'The hallowed necromancer gains channel resistance in reverse: he gains a bonus equal to half his wizard level on saving throws against negative energy effects and death effects.',
      },
    ],
    source: "Pathfinder Player Companion: Undead Slayer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 10. Loremaster (Wizard Archetype)
  // ──────────────────────────────────────────────
  {
    name: 'Loremaster',
    className: 'Wizard',
    description:
      'The loremaster is a wizard who focuses on gathering knowledge and lore, gaining enhanced skill abilities and divination powers at the expense of direct combat magic.',
    replacedFeatures: ['Arcane School', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Lore',
        level: 1,
        description:
          "The loremaster adds half his class level (minimum 1) to all Knowledge skill checks and may make Knowledge skill checks untrained. This functions identically to the bard's bardic knowledge ability.",
      },
      {
        name: "Scholar's Edge",
        level: 1,
        description:
          'Once per day, the loremaster can add a +2 insight bonus to a single attack roll, saving throw, or skill check. He must declare the use of this ability before rolling. The bonus increases to +4 at 8th level and +6 at 16th level.',
      },
      {
        name: 'Divinatory Research',
        level: 5,
        description:
          'The loremaster gains a bonus divination spell slot at each spell level he can cast. He must prepare a divination spell in each of these bonus slots.',
      },
    ],
    source: 'Pathfinder Player Companion: Arcane Anthology',
  },

  // ──────────────────────────────────────────────
  // 11. Pact Wizard (Haunted Heroes Handbook)
  // ──────────────────────────────────────────────
  {
    name: 'Pact Wizard (HHH)',
    className: 'Wizard',
    description:
      'This pact wizard has made a bargain with an otherworldly patron, gaining oracle curse powers and access to patron spells in exchange for an increasingly restrictive curse.',
    replacedFeatures: [
      'Arcane Bond',
      'Arcane School',
      'Scribe Scroll',
      'Bonus Feats (5th, 10th, 15th, 20th)',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Patron and Curse',
        level: 1,
        description:
          'The pact wizard selects a witch patron and an oracle curse. He adds his patron spells to his spellbook at the appropriate levels. His oracle curse progresses as if he were an oracle of his wizard level minus 4 (minimum 1st).',
      },
      {
        name: 'Pact',
        level: 1,
        description:
          'The pact wizard gains the benefits and drawbacks of his chosen oracle curse. As his level increases, the curse intensifies, granting both greater power and greater restrictions.',
      },
      {
        name: 'Great Power',
        level: 5,
        description:
          'At 5th level and every 5 levels thereafter, instead of gaining a bonus feat, the pact wizard can spontaneously lose a prepared spell to cast one of his patron spells of equal or lower level.',
      },
    ],
    source: 'Pathfinder Player Companion: Haunted Heroes Handbook',
  },

  // ──────────────────────────────────────────────
  // 12. Pact Wizard (Heroes of the High Court)
  // ──────────────────────────────────────────────
  {
    name: 'Pact Wizard (HHC)',
    className: 'Wizard',
    description:
      'This pact wizard has entered into a formal agreement with an extraplanar entity, gaining additional spells and special abilities in exchange for services rendered.',
    replacedFeatures: ['Arcane Bond', 'Arcane School'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Pact',
        level: 1,
        description:
          'The pact wizard selects an outsider subtype (angel, archon, azata, daemon, demon, devil, or protean). He adds a number of spells associated with that subtype to his spellbook. He gains Planar Binding spells at reduced cost.',
      },
      {
        name: 'Pact Focus',
        level: 1,
        description:
          'The pact wizard gains a +1 bonus to the DC of spells of the conjuration (calling) subschool. This bonus increases by +1 at 8th and 16th level.',
      },
      {
        name: 'Breached Pact',
        level: 8,
        description:
          "Once per day when the pact wizard fails a saving throw, he can call upon his patron to reroll the save with a +2 bonus. If he uses this ability, his patron may demand a service in return at the GM's discretion.",
      },
    ],
    source: 'Pathfinder Player Companion: Heroes of the High Court',
  },

  // ──────────────────────────────────────────────
  // 13. Primalist
  // ──────────────────────────────────────────────
  {
    name: 'Primalist',
    className: 'Wizard',
    description:
      'The primalist draws upon primal magic forces, gaining access to a pool of primal magic that can augment his spells but carries the risk of primal magic events.',
    replacedFeatures: ['Arcane Bond', 'Arcane School'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Primal Magic',
        level: 1,
        description:
          'The primalist gains a primal magic pool equal to his Intelligence modifier. He can spend points from this pool to increase the caster level of a spell by 1 per point spent. However, each time he uses this ability, there is a 10% chance of a primal magic event.',
      },
      {
        name: 'Primal Surge',
        level: 1,
        description:
          'As a swift action, the primalist can channel raw primal energy into a spell, increasing its effective caster level by 2. After using this ability, he must succeed on a concentration check (DC 15 + spell level) or trigger a primal magic event.',
      },
      {
        name: 'Controlled Chaos',
        level: 8,
        description:
          'The primalist can roll twice on any primal magic event table and choose which result to apply. At 16th level, he can choose to negate a primal magic event entirely once per day.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 14. Scroll Scholar
  // ──────────────────────────────────────────────
  {
    name: 'Scroll Scholar',
    className: 'Wizard',
    description:
      'The scroll scholar is devoted to the art of scroll creation and usage, gaining enhanced abilities with scrolls at the expense of other class features.',
    replacedFeatures: ['Arcane Bond'],
    modifiedFeatures: ['Scribe Scroll'],
    newFeatures: [
      {
        name: 'Scroll Blade',
        level: 1,
        description:
          'The scroll scholar can turn a scroll into a weapon as a swift action, transforming it into a short sword equivalent that deals an additional 1d4 force damage. The scroll is not consumed unless its spell is activated during an attack.',
      },
      {
        name: 'Improved Scroll Casting',
        level: 1,
        description:
          'The scroll scholar adds his Intelligence modifier to caster level checks made to activate scrolls. He never provokes attacks of opportunity when activating a scroll.',
      },
      {
        name: 'Scroll Shield',
        level: 5,
        description:
          "The scroll scholar can expend a scroll as an immediate action to gain a deflection bonus to AC equal to the scroll's spell level for 1 round.",
      },
    ],
    source: "Pathfinder Player Companion: Adventurer's Armory 2",
  },

  // ──────────────────────────────────────────────
  // 15. Scrollmaster
  // ──────────────────────────────────────────────
  {
    name: 'Scrollmaster',
    className: 'Wizard',
    description:
      'The scrollmaster can use scrolls as physical weapons and shields, weaving arcane writing into martial techniques.',
    replacedFeatures: ['Arcane Bond'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Scroll Blade',
        level: 1,
        description:
          'A scrollmaster can wield a scroll as a weapon, treating it as a short sword. The scroll gains a +1 enhancement bonus for every 4 caster levels of the highest-level spell on the scroll. A scroll used in this way is not destroyed unless the scrollmaster activates its spell.',
      },
      {
        name: 'Scroll Shield',
        level: 3,
        description:
          'A scrollmaster can use a scroll as a buckler, gaining a +1 shield bonus to AC plus an additional +1 for every 4 caster levels of the highest-level spell on the scroll. The scroll is not consumed when used this way.',
      },
      {
        name: 'Improved Scroll Casting',
        level: 10,
        description:
          'At 10th level, the scrollmaster adds his Intelligence modifier to the save DCs of spells he casts from scrolls, and he does not need to make caster level checks to activate scrolls on his spell list.',
      },
    ],
    source: 'Pathfinder Player Companion: Pathfinder Society Primer',
  },

  // ──────────────────────────────────────────────
  // 16. Shadowcaster
  // ──────────────────────────────────────────────
  {
    name: 'Shadowcaster',
    className: 'Wizard',
    description:
      'The shadowcaster specializes in shadow magic, drawing power from the Plane of Shadow to create illusions and quasi-real effects of extraordinary potency.',
    replacedFeatures: ['Arcane Bond', 'Arcane School'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Shadow School',
        level: 1,
        description:
          'The shadowcaster must choose the illusion school with the shadow subschool. He treats shadow conjuration and shadow evocation spells as if they were one spell level lower for purposes of preparing them.',
      },
      {
        name: 'Shadow Bond',
        level: 1,
        description:
          "The shadowcaster's shadow serves as his arcane bond. He gains a +1 bonus to the DC of shadow and darkness spells. His shadow cannot be separated from him, but it also cannot be targeted independently.",
      },
      {
        name: 'Shadow Mastery',
        level: 8,
        description:
          'Shadow spells cast by the shadowcaster are 10% more real than normal. At 16th level, this bonus increases to 20%. This applies to all shadow conjuration, shadow evocation, and similar spells.',
      },
      {
        name: 'Shadow Well',
        level: 20,
        description:
          'The shadowcaster can merge with his shadow as a move action, becoming incorporeal for a number of rounds per day equal to his wizard level. These rounds need not be consecutive.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of Shadows',
  },

  // ──────────────────────────────────────────────
  // 17. Sin Magic Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Sin Magic Specialist',
    className: 'Wizard',
    description:
      'The sin magic specialist focuses on one of the seven schools of Thassilonian sin magic, gaining enhanced power in that school but losing access to two opposition schools entirely.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Sin Magic',
        level: 1,
        description:
          'The sin magic specialist selects one of the seven Thassilonian sin schools: Envy (abjuration), Gluttony (necromancy), Greed (transmutation), Lust (enchantment), Pride (illusion), Sloth (conjuration), or Wrath (evocation). He gains two opposition schools determined by his chosen sin.',
      },
      {
        name: 'Enhanced Specialization',
        level: 1,
        description:
          'The sin magic specialist gains an additional spell slot of each level for spells of his specialized school, for a total of two additional slots per spell level (instead of the normal one). However, he cannot cast spells from his two opposition schools at all.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 18. Spellslinger
  // ──────────────────────────────────────────────
  {
    name: 'Spellslinger',
    className: 'Wizard',
    description:
      'The spellslinger infuses firearm attacks with arcane energy, channeling spells through a gun rather than through traditional arcane foci.',
    replacedFeatures: [
      'Arcane Bond',
      'Arcane School',
      'Cantrips',
      'Scribe Scroll',
      'Bonus Feats (5th, 10th, 15th, 20th)',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Arcane Gun',
        level: 1,
        description:
          "The spellslinger gains Exotic Weapon Proficiency (firearms) and a battered firearm identical to the gunslinger's starting gun. He can cast any ranged touch attack spell through his firearm, using the firearm's range increment instead of the spell's.",
      },
      {
        name: 'Gunsmith',
        level: 1,
        description:
          'The spellslinger gains the Gunsmithing feat as a bonus feat. He can use his arcane gun as an arcane bond, though it functions differently from a standard bonded object.',
      },
      {
        name: 'Mage Bullets',
        level: 1,
        description:
          "When channeling a spell through his arcane gun, the spellslinger uses his Intelligence modifier on attack rolls instead of Dexterity. The spell and bullet resolve as a single attack against the target's touch AC within the first range increment.",
      },
      {
        name: 'School of the Gun',
        level: 1,
        description:
          'The spellslinger gains four opposition schools instead of two. He cannot select divination or universal as opposition schools. He gains no arcane school powers.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 19. Spirit Binder
  // ──────────────────────────────────────────────
  {
    name: 'Spirit Binder',
    className: 'Wizard',
    description:
      'The spirit binder specializes in summoning and binding outsiders and spirits, gaining enhanced control over called creatures.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Spirit Pact',
        level: 1,
        description:
          'The spirit binder gains a spiritual familiar that is an incorporeal spirit rather than a physical creature. The spirit familiar cannot interact with the physical world but grants a +2 bonus on Spellcraft checks and can scout up to 100 feet away.',
      },
      {
        name: 'Binding Focus',
        level: 1,
        description:
          'The spirit binder adds his Intelligence modifier to Charisma checks and Charisma-based skill checks made as part of planar binding spells and similar calling effects.',
      },
      {
        name: 'Spirit Guardian',
        level: 5,
        description:
          'The spirit binder can call upon his spirit familiar to guard him. As an immediate action, the spirit can impose a -2 penalty on one attack roll made against the wizard. At 10th level, this penalty increases to -4.',
      },
      {
        name: 'Bind Spirit',
        level: 8,
        description:
          'The spirit binder can use lesser planar binding as a spell-like ability once per day without the need for a magic circle. The bound creature must serve the wizard for up to 1 day per wizard level.',
      },
    ],
    source: 'Pathfinder Player Companion: Familiar Folio',
  },

  // ──────────────────────────────────────────────
  // 20. Spirit Whisperer
  // ──────────────────────────────────────────────
  {
    name: 'Spirit Whisperer',
    className: 'Wizard',
    description:
      'The spirit whisperer draws power from shaman spirits, blending arcane spellcasting with spiritual guidance to gain hex-like abilities and spirit powers.',
    replacedFeatures: ['Arcane School', 'Bonus Feats (5th, 10th, 15th, 20th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Spirit',
        level: 1,
        description:
          "The spirit whisperer selects a shaman spirit (such as Battle, Bones, Flame, Heavens, Life, Lore, Nature, Stone, Waves, or Wind). He gains the spirit's spirit ability and adds its spirit spells to his spellbook.",
      },
      {
        name: 'Spirit Hex',
        level: 5,
        description:
          "At 5th level and every 5 levels thereafter, the spirit whisperer gains a hex from his chosen spirit's hex list. He uses his Intelligence modifier instead of Wisdom for determining hex DCs.",
      },
      {
        name: 'Greater Spirit',
        level: 8,
        description:
          'The spirit whisperer gains the greater spirit ability of his chosen spirit. This ability typically provides a significant passive bonus or an additional ability related to the spirit.',
      },
      {
        name: 'True Spirit',
        level: 20,
        description:
          "The spirit whisperer gains the true spirit ability of his chosen spirit, representing the full manifestation of the spirit's power.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 21. Sword Binder
  // ──────────────────────────────────────────────
  {
    name: 'Sword Binder',
    className: 'Wizard',
    description:
      'The sword binder selects a sword as his bonded object and gains martial proficiency with it, blending swordplay with arcane magic in a tradition of elven warrior-wizards.',
    replacedFeatures: ['Scribe Scroll'],
    modifiedFeatures: ['Arcane Bond'],
    newFeatures: [
      {
        name: 'Sword Bond',
        level: 1,
        description:
          'The sword binder must choose a sword as his bonded object. He gains proficiency with that type of sword and can use it as both a weapon and a bonded object. He may enhance it as a magic weapon at reduced cost.',
      },
      {
        name: 'Sword of the Mage',
        level: 1,
        description:
          'The sword binder can deliver touch spells through his bonded sword when making melee attacks. The spell is discharged on the first successful hit.',
      },
      {
        name: 'Arcane Pool',
        level: 5,
        description:
          'The sword binder gains an arcane pool equal to half his wizard level plus his Intelligence modifier. He can spend points to add a +1 enhancement bonus to his bonded sword for 1 minute. For every 4 levels beyond 5th, the bonus increases by +1.',
      },
    ],
    source: 'Pathfinder Player Companion: Melee Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 22. Thassilonian Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Thassilonian Specialist',
    className: 'Wizard',
    description:
      'The Thassilonian specialist follows the ancient arcane traditions of Thassilon, focusing intensely on a single school of magic aligned with one of the seven sins while completely forsaking two others.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Thassilonian Specialization',
        level: 1,
        description:
          'The Thassilonian specialist selects one school from the seven schools of sin: Envy (abjuration), Gluttony (necromancy), Greed (transmutation), Lust (enchantment), Pride (illusion), Sloth (conjuration), or Wrath (evocation). He cannot prepare spells from his two opposition schools at all, not even using extra spell slots.',
      },
      {
        name: 'Enhanced Slot',
        level: 1,
        description:
          'The Thassilonian specialist gains two additional spell slots of each level (instead of one) for spells from his specialized school. Divination is not available as a specialization and cannot be an opposition school.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 23. Undead Master
  // ──────────────────────────────────────────────
  {
    name: 'Undead Master',
    className: 'Wizard',
    description:
      'The undead master specializes in the creation and command of undead, gaining enhanced necromantic abilities and the power to control more undead than a standard wizard.',
    replacedFeatures: ['Arcane Bond'],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Necromantic Focus',
        level: 1,
        description:
          'The undead master must select the necromancy school. He cannot select the life subschool. He adds animate dead, create undead, and create greater undead to his spellbook at the appropriate levels for free.',
      },
      {
        name: 'Undead Familiar',
        level: 1,
        description:
          'The undead master gains a skeletal or zombie familiar instead of a standard familiar. The undead familiar has the undead type and is immune to mind-affecting effects, but it can be turned or commanded as undead.',
      },
      {
        name: 'Undead Mastery',
        level: 8,
        description:
          'The undead master can control 6 HD of undead per caster level with animate dead (rather than the normal 4 HD per level). He also adds +2 to the DC of saving throws against his necromancy spells.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 24. Siege Mage
  // ──────────────────────────────────────────────
  {
    name: 'Siege Mage',
    className: 'Wizard',
    description:
      'The siege mage specializes in large-scale destruction, channeling spells through siege weapons and gaining enhanced abilities with area-of-effect evocations.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Siege Engine Bond',
        level: 1,
        description:
          "The siege mage can bond with a siege engine, using it as his bonded object. He gains proficiency with all siege engines and can channel spells through a bonded siege engine, using its range instead of the spell's range.",
      },
      {
        name: 'Empower Siege Engine',
        level: 1,
        description:
          'The siege mage can spend a spell slot to add force damage to a siege engine attack. The additional damage is 1d6 per level of the spell expended.',
      },
      {
        name: 'Siege Mastery',
        level: 5,
        description:
          'The siege mage reduces the crew needed to operate any siege engine by a number equal to half his wizard level (minimum 1 crew member). He also gains a +2 bonus on attack rolls made with siege engines.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 25. Spell Sage
  // ──────────────────────────────────────────────
  {
    name: 'Spell Sage',
    className: 'Wizard',
    description:
      'The spell sage can access spells from the cleric, druid, and bard spell lists by spending additional resources, making him one of the most versatile casters in the game.',
    replacedFeatures: ['Arcane Bond'],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Focused Spells',
        level: 1,
        description:
          'All variable numeric effects of spells cast by the spell sage are reduced by half (minimum 1). This reduction applies to damage, healing, duration, and other variable numeric values.',
      },
      {
        name: 'Spell Study',
        level: 2,
        description:
          "The spell sage can cast a spell from the cleric, druid, or bard spell list as if it were a wizard spell. Casting the spell takes a full-round action plus the spell's normal casting time and uses two spell slots: one of the appropriate level and one of one level higher. He can use this ability once per day at 2nd level, plus once more at 6th, 11th, and 16th.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 26. Arcane Savant
  // ──────────────────────────────────────────────
  {
    name: 'Arcane Savant',
    className: 'Wizard',
    description:
      'The arcane savant is a wizard who focuses on mastering the use of magical items and scrolls, gaining an extraordinary talent for activating magic items of all types.',
    replacedFeatures: ['Arcane Bond', 'Arcane School'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Adept Activation',
        level: 1,
        description:
          'The arcane savant gains a +1 bonus on Use Magic Device checks, increasing by +1 every 2 levels. He can always take 10 on Use Magic Device checks, even when stressed.',
      },
      {
        name: 'Esoteric Magic',
        level: 1,
        description:
          "At each level, the arcane savant can add one spell from any other class's spell list to his spellbook. This spell must be of a level he can cast and is treated as a wizard spell for all purposes.",
      },
      {
        name: 'Item Mastery',
        level: 5,
        description:
          'The arcane savant can use spell trigger and spell completion items as if the spells were on the wizard spell list. He uses his wizard level as his caster level for these items.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Faction Guide',
  },

  // ──────────────────────────────────────────────
  // 27. Teleportation Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Teleportation Specialist',
    className: 'Wizard',
    description:
      'The teleportation specialist focuses on the conjuration (teleportation) subschool, gaining enhanced abilities to teleport and manipulate space.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Teleportation School',
        level: 1,
        description:
          'The teleportation specialist must select the conjuration school with the teleportation subschool. He gains Shift, a supernatural ability that allows him to teleport 5 feet per wizard level as a swift action a number of times per day equal to 3 + Intelligence modifier.',
      },
      {
        name: 'Dimensional Steps',
        level: 8,
        description:
          'The teleportation specialist can teleport up to 30 feet per wizard level per day as a standard action. This movement does not provoke attacks of opportunity. The distance can be divided among multiple uses.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 28. Void Elementalist
  // ──────────────────────────────────────────────
  {
    name: 'Void Elementalist',
    className: 'Wizard',
    description:
      'The void elementalist draws upon the element of void (nothingness), manipulating gravity, darkness, and the spaces between spaces with arcane power.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Void School',
        level: 1,
        description:
          'The void elementalist selects void as his elemental school. He gains the Void Awareness ability, which provides a +2 insight bonus to AC and on saving throws for a number of rounds per day equal to his wizard level. These rounds need not be consecutive.',
      },
      {
        name: 'Aura of Nothingness',
        level: 8,
        description:
          "As a standard action, the void elementalist can create an aura of void in a 20-foot radius centered on himself. Creatures within this aura take a -2 penalty on attack rolls and saving throws. The aura lasts a number of rounds equal to the wizard's Intelligence modifier.",
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 29. Wood Elementalist
  // ──────────────────────────────────────────────
  {
    name: 'Wood Elementalist',
    className: 'Wizard',
    description:
      'The wood elementalist channels the living element of wood, gaining powers over plants and the ability to grow and shape wood with arcane energy.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Wood School',
        level: 1,
        description:
          'The wood elementalist selects wood as his elemental school. He gains Splintered Spear, a supernatural ability that creates a wooden dart he can hurl as a standard action, dealing 1d6 damage plus 1d6 per 2 wizard levels beyond 1st.',
      },
      {
        name: 'Cooperative Defense',
        level: 8,
        description:
          "As a standard action, the wood elementalist can create a shield of wood that provides a +4 shield bonus to AC to himself or an adjacent ally. The shield lasts a number of rounds equal to the wizard's Intelligence modifier.",
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 30. Metal Elementalist
  // ──────────────────────────────────────────────
  {
    name: 'Metal Elementalist',
    className: 'Wizard',
    description:
      'The metal elementalist focuses on the element of metal, gaining power over metallic objects and the ability to shape and command metal with arcane magic.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Metal School',
        level: 1,
        description:
          'The metal elementalist selects metal as his elemental school. He gains Iron Skin, a supernatural ability that grants a +2 armor bonus to AC for 10 minutes per wizard level. This bonus increases by +1 for every 5 wizard levels.',
      },
      {
        name: 'Metal Rending',
        level: 8,
        description:
          'The metal elementalist can destroy metal objects with a touch. As a melee touch attack, he can deal damage to a metal object equal to 1d6 per wizard level, bypassing hardness. He can use this ability once per day plus once per 5 wizard levels.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 31. Conjurer (Teleportation)
  // ──────────────────────────────────────────────
  // (Handled by Teleportation Specialist above)

  // ──────────────────────────────────────────────
  // 31. Arcanamirium Crafter
  // ──────────────────────────────────────────────
  {
    name: 'Arcanamirium Crafter',
    className: 'Wizard',
    description:
      'The Arcanamirium crafter is trained at the prestigious Arcanamirium academy in Absalom, specializing in the creation of wondrous items and constructs.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Crafting Focus',
        level: 1,
        description:
          'The Arcanamirium crafter gains Craft Wondrous Item as a bonus feat at 1st level instead of Scribe Scroll. He gains a +2 bonus on Spellcraft checks to create magic items.',
      },
      {
        name: 'Item Bond',
        level: 1,
        description:
          "The Arcanamirium crafter can bond with a magic item he has crafted. This item functions as his arcane bond. If the bonded item is a wondrous item, it gains an additional ability determined by the wizard's school.",
      },
      {
        name: 'Efficient Crafter',
        level: 5,
        description:
          'The Arcanamirium crafter can create magic items in three-quarters the normal time. At 10th level, he can create magic items in half the normal time.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Faction Guide',
  },

  // ──────────────────────────────────────────────
  // 32. Enhancement Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Enhancement Specialist',
    className: 'Wizard',
    description:
      'The enhancement specialist focuses on transmutation magic that improves creatures and objects, becoming a master of buff spells and physical augmentations.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Augment',
        level: 1,
        description:
          'The enhancement specialist gains the enhancement subschool of the transmutation school. His Augment ability grants a +2 enhancement bonus to one ability score of a touched creature for a number of rounds equal to half his wizard level (minimum 1). This bonus increases to +4 at 10th level.',
      },
      {
        name: 'Perfection of Self',
        level: 8,
        description:
          'As a swift action, the enhancement specialist can grant himself a +2 enhancement bonus to two ability scores for 1 round. He can use this ability a number of times per day equal to his Intelligence modifier.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 33. Counterspell Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Counterspell Specialist',
    className: 'Wizard',
    description:
      'The counterspell specialist excels at identifying and countering enemy spells, gaining enhanced abilities to negate hostile magic at the expense of offensive school powers.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Abjuration School (Counterspell)',
        level: 1,
        description:
          'The counterspell specialist must choose the abjuration school with the counterspell subschool. He gains Disruption, a supernatural ability that allows him to attempt a counterspell as an immediate action a number of times per day equal to 3 + Intelligence modifier.',
      },
      {
        name: 'Counterspell Mastery',
        level: 8,
        description:
          'The counterspell specialist can use dispel magic as a counterspell even if he has not prepared it, by sacrificing a spell of equal or higher level. At 16th level, he can use greater dispel magic in the same fashion.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 34. Life Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Life Specialist',
    className: 'Wizard',
    description:
      'The life specialist focuses on the life subschool of necromancy, using necromantic magic to heal and protect rather than to create undead.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Life School',
        level: 1,
        description:
          'The life specialist must select the necromancy school with the life subschool. He gains Healing Grace, which allows him to heal a touched creature for 1d6 hit points plus 1d6 per 2 wizard levels, usable 3 + Intelligence modifier times per day.',
      },
      {
        name: 'Share Essence',
        level: 8,
        description:
          'As a standard action, the life specialist can transfer hit points from himself to a touched creature. He can transfer up to 5 hit points per wizard level per day. The transfer does not provoke attacks of opportunity.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 35. Foresight Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Foresight Specialist',
    className: 'Wizard',
    description:
      'The foresight specialist focuses on the foresight subschool of divination, gaining extraordinary prescient abilities that let him glimpse the future.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Foresight School',
        level: 1,
        description:
          'The foresight specialist must select the divination school with the foresight subschool. He gains Prescience, allowing him to roll a d20 at the start of his turn and use that result in place of any d20 roll he makes that round. He can use this ability 3 + Intelligence modifier times per day.',
      },
      {
        name: 'Foretell',
        level: 8,
        description:
          'As a standard action, the foresight specialist can predict the outcome of events. He can grant an ally within 30 feet a +2 luck bonus on attack rolls, saving throws, or skill checks for 1 round. At 16th level, this bonus increases to +3.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 36. Admixture Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Admixture Specialist',
    className: 'Wizard',
    description:
      'The admixture specialist focuses on the admixture subschool of evocation, gaining the ability to change the energy type of his evocation spells on the fly.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Admixture School',
        level: 1,
        description:
          'The admixture specialist must select the evocation school with the admixture subschool. He gains Versatile Evocation, allowing him to change the energy type of an evocation spell (acid, cold, electricity, or fire) when casting it. He can use this ability 3 + Intelligence modifier times per day.',
      },
      {
        name: 'Elemental Manipulation',
        level: 8,
        description:
          'When the admixture specialist casts an evocation spell that deals energy damage, he can change half or all of the damage to another energy type. At 16th level, he can split the damage among up to three different energy types.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 37. Shadowcasting Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Shadow Specialist',
    className: 'Wizard',
    description:
      'The shadow specialist focuses on the shadow subschool of illusion, gaining enhanced abilities with shadow spells and quasi-real effects.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Shadow School',
        level: 1,
        description:
          'The shadow specialist must select the illusion school with the shadow subschool. He gains Binding Darkness, a supernatural ability that entangles a target within 30 feet with grasping shadows for a number of rounds equal to half his wizard level (minimum 1). He can use this ability 3 + Intelligence modifier times per day.',
      },
      {
        name: 'Shadow Step',
        level: 8,
        description:
          'The shadow specialist can travel between shadows as if by dimension door, teleporting up to 30 feet per wizard level per day. He must start and end in an area of dim light or darkness.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 38. Controller Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Controller Specialist',
    className: 'Wizard',
    description:
      'The controller specialist focuses on the controller subschool of enchantment, gaining enhanced abilities to dominate and command other creatures.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Controller School',
        level: 1,
        description:
          'The controller specialist must select the enchantment school with the controller subschool. He gains Force of Will, allowing him to attempt to compel a creature within 30 feet to take a single action (move, standard, or swift) as a standard action. The target receives a Will save to resist.',
      },
      {
        name: 'Irresistible Demand',
        level: 8,
        description:
          "Creatures affected by the controller specialist's enchantment (compulsion) spells take a -2 penalty on saves against those spells. At 16th level, this penalty increases to -4.",
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 39. Shapechange Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Shapechange Specialist',
    className: 'Wizard',
    description:
      'The shapechange specialist focuses on the shapechange subschool of transmutation, gaining enhanced abilities to alter his own form and that of others.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Shapechange School',
        level: 1,
        description:
          'The shapechange specialist must select the transmutation school with the shapechange subschool. He gains Battleshaping, allowing him to grow a natural weapon (claw, bite, or gore) as a swift action for a number of rounds per day equal to his wizard level.',
      },
      {
        name: 'Master Shapeshifter',
        level: 8,
        description:
          'When the shapechange specialist casts a polymorph spell on himself, the duration increases by 50%. At 16th level, he can maintain concentration on a polymorph spell as a move action instead of a standard action.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 40. Generation Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Generation Specialist',
    className: 'Wizard',
    description:
      'The generation specialist focuses on the generation subschool of conjuration, gaining enhanced abilities to create objects and creatures from nothing.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Generation School',
        level: 1,
        description:
          'The generation specialist must select the conjuration school with the creation subschool. He gains Create Gear, allowing him to create a single object worth no more than 1 gp per wizard level that lasts for 1 minute per wizard level. He can use this ability 3 + Intelligence modifier times per day.',
      },
      {
        name: "Creator's Will",
        level: 8,
        description:
          "Objects created by the generation specialist's conjuration (creation) spells have their duration increased by 100%. Items he creates with the Create Gear ability last 10 minutes per level instead of 1 minute per level.",
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 41. Phantasm Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Phantasm Specialist',
    className: 'Wizard',
    description:
      "The phantasm specialist focuses on the phantasm subschool of illusion, gaining enhanced abilities with mind-affecting illusions that exist only in the target's perception.",
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Phantasm School',
        level: 1,
        description:
          'The phantasm specialist must select the illusion school with the phantasm subschool. He gains Terror, a supernatural ability that makes a creature within 30 feet shaken for a number of rounds equal to half his wizard level (minimum 1). He can use this ability 3 + Intelligence modifier times per day.',
      },
      {
        name: 'Bedeviling Aura',
        level: 8,
        description:
          "The phantasm specialist can emit an aura of confusing phantasms in a 15-foot radius. Enemies within the aura have a 20% miss chance on attacks. The aura lasts a number of rounds per day equal to the wizard's level.",
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 42. Manipulator Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Manipulator Specialist',
    className: 'Wizard',
    description:
      'The manipulator specialist focuses on the manipulation subschool of enchantment, gaining enhanced abilities with charm and emotion effects.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Manipulator School',
        level: 1,
        description:
          'The manipulator specialist must select the enchantment school with the manipulation subschool. He gains Beguiling Touch, allowing him to charm a creature he touches for a number of rounds equal to half his wizard level (minimum 1) as a melee touch attack. He can use this ability 3 + Intelligence modifier times per day.',
      },
      {
        name: 'Shape Emotions',
        level: 8,
        description:
          'The manipulator specialist can modify the emotional state of a creature within 30 feet as a standard action. He can make the target friendly, hostile, or indifferent for a number of rounds equal to his Intelligence modifier. A Will save negates.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 43. Undead Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Undead Specialist',
    className: 'Wizard',
    description:
      'The undead specialist focuses on the undead subschool of necromancy, gaining enhanced abilities to create and command undead creatures.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Undead School',
        level: 1,
        description:
          'The undead specialist must select the necromancy school with the undead subschool. He gains Bolster, a supernatural ability that grants undead creatures within 30 feet a +1 profane bonus on attack rolls and saves against channeled energy for a number of rounds equal to half his wizard level.',
      },
      {
        name: 'Undead Apotheosis',
        level: 8,
        description:
          'The undead specialist gains DR 5/- against nonlethal damage and a +4 bonus on saves against disease, paralysis, poison, and sleep effects. At 20th level, he becomes immune to these effects.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 44. Scryer Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Scryer Specialist',
    className: 'Wizard',
    description:
      'The scryer specialist focuses on the scrying subschool of divination, gaining enhanced abilities to observe distant locations and creatures through magical sensors.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Scrying School',
        level: 1,
        description:
          'The scryer specialist must select the divination school with the scrying subschool. He gains Send Senses, allowing him to place a magical sensor on a point he can see that lasts for a number of rounds equal to half his wizard level (minimum 1). He can see and hear through this sensor as if he were standing there.',
      },
      {
        name: 'Scrying Adept',
        level: 8,
        description:
          'The scryer specialist is always aware when he is being observed by a scrying spell. He can use scrying as a spell-like ability once per day using his wizard level as the caster level.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 45. Banishment Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Banishment Specialist',
    className: 'Wizard',
    description:
      'The banishment specialist focuses on the banishment subschool of abjuration, gaining enhanced abilities to dispel magic, banish outsiders, and break enchantments.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Banishment School',
        level: 1,
        description:
          'The banishment specialist must select the abjuration school with the banishment subschool. He gains Unstoppable Force, allowing him to add his Intelligence modifier to caster level checks to overcome spell resistance, but only for abjuration spells.',
      },
      {
        name: 'Aura of Banishment',
        level: 8,
        description:
          'The banishment specialist can emit an aura that makes summoned and called creatures uncomfortable. Summoned and called creatures within 30 feet must succeed on a Will save or be staggered for 1 round. He can use this ability a number of rounds per day equal to his wizard level.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 46. Chirurgeon Wizard
  // ──────────────────────────────────────────────
  {
    name: 'Chirurgeon',
    className: 'Wizard',
    description:
      'The chirurgeon wizard uses transmutation magic to alter flesh and bone, serving as an arcane surgeon who can mend wounds and reshape bodies.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Infused Curative',
        level: 1,
        description:
          'The chirurgeon can prepare cure light wounds, cure moderate wounds, cure serious wounds, and cure critical wounds as wizard spells of one level higher than their cleric spell level.',
      },
      {
        name: 'Surgical Precision',
        level: 1,
        description:
          'The chirurgeon gains Heal as a class skill and can use Intelligence instead of Wisdom on Heal checks. He gains a +2 bonus on Heal checks, increasing by +1 every 4 levels.',
      },
      {
        name: 'Anatomical Knowledge',
        level: 5,
        description:
          "When the chirurgeon casts a transmutation spell that affects a creature's physical form, the duration is increased by 50%. He also gains a +1 insight bonus on attack rolls with touch spells targeting living creatures.",
      },
    ],
    source: "Pathfinder Player Companion: Healer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 47. Evoker Specialist (Intense)
  // ──────────────────────────────────────────────
  // Note: Standard evocation school with Intense Spells is a core subschool, not an archetype

  // ──────────────────────────────────────────────
  // 47. Clocksmith
  // ──────────────────────────────────────────────
  {
    name: 'Clocksmith',
    className: 'Wizard',
    description:
      'The clocksmith is a wizard who combines arcane magic with clockwork engineering, creating mechanical constructs and devices enhanced by magic.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Clockwork Familiar',
        level: 1,
        description:
          'The clocksmith gains a clockwork familiar, a construct creature that serves as both familiar and arcane bond. The clockwork familiar has the construct type but otherwise functions as a normal familiar.',
      },
      {
        name: 'Clockwork Bond',
        level: 1,
        description:
          'The clocksmith gains Craft Wondrous Item as a bonus feat at 1st level (instead of Scribe Scroll). He gains a +2 bonus on Craft checks related to clockwork devices.',
      },
      {
        name: 'Infuse Clockwork',
        level: 5,
        description:
          'The clocksmith can infuse a clockwork device with a spell, creating a delayed-use spell effect. The device activates under a specified trigger condition. He can have a number of infused devices equal to his Intelligence modifier at any time.',
      },
    ],
    source: 'Pathfinder Player Companion: People of the River',
  },

  // ──────────────────────────────────────────────
  // 48. Knowledge Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Knowledge Specialist',
    className: 'Wizard',
    description:
      'The knowledge specialist is obsessed with acquiring and cataloging knowledge, gaining enhanced divination abilities and lore at the cost of combat-oriented school powers.',
    replacedFeatures: ['Scribe Scroll'],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Focused Study',
        level: 1,
        description:
          'The knowledge specialist gains a +1 bonus on all Knowledge checks, increasing by +1 every 4 levels. He can take 20 on Knowledge checks even under stress, though doing so takes 10 times the normal time.',
      },
      {
        name: 'Lore Keeper',
        level: 1,
        description:
          'The knowledge specialist can make a Knowledge check to identify creatures as a free action instead of a standard action. He gains a +2 bonus on Knowledge checks to identify creatures.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 49. Riftwarden Orphan
  // ──────────────────────────────────────────────
  {
    name: 'Riftwarden Orphan',
    className: 'Wizard',
    description:
      'The riftwarden orphan was raised or trained by the Riftwardens, a secret society dedicated to closing planar rifts and fighting extraplanar threats.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Planar Warding',
        level: 1,
        description:
          'The riftwarden orphan gains a +1 bonus on saving throws against spells and effects from outsiders. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Counter-Summons',
        level: 1,
        description:
          'As an immediate action, the riftwarden orphan can attempt to counter a conjuration (calling) or conjuration (summoning) spell by sacrificing a prepared spell of equal or higher level. He must succeed on a Spellcraft check to identify the spell first.',
      },
      {
        name: 'Seal Breach',
        level: 5,
        description:
          'The riftwarden orphan can close extradimensional portals and rifts. As a standard action, he can attempt a caster level check against a portal or rift within 60 feet, closing it on a success.',
      },
    ],
    source: 'Pathfinder Adventure Path: Wrath of the Righteous',
  },

  // ──────────────────────────────────────────────
  // 50. Talisman Crafter
  // ──────────────────────────────────────────────
  {
    name: 'Talisman Crafter',
    className: 'Wizard',
    description:
      'The talisman crafter specializes in creating small protective charms and talismans imbued with defensive magic.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Create Talisman',
        level: 1,
        description:
          "The talisman crafter gains the ability to create talismans, small single-use protective charms. Creating a talisman takes 1 hour and costs materials equal to half the talisman's market price. Talismans function as immediate-action triggered items.",
      },
      {
        name: 'Talisman Bond',
        level: 1,
        description:
          "The talisman crafter's arcane bond is with a talisman pouch rather than a single item. As long as he has his talisman pouch, he can use it to cast any one spell from his spellbook once per day.",
      },
      {
        name: 'Improved Talismans',
        level: 5,
        description:
          'Talismans created by the talisman crafter have their caster level increased by 2. At 10th level, the DC of saves against his talismans increases by 1.',
      },
    ],
    source: "Pathfinder Player Companion: Adventurer's Armory 2",
  },

  // ──────────────────────────────────────────────
  // 51. Poleiheira Adherent
  // ──────────────────────────────────────────────
  {
    name: 'Poleiheira Adherent',
    className: 'Wizard',
    description:
      'The Poleiheira adherent studies an ancient arcane tradition focused on self-perfection through transmutation, using magic to enhance the body as well as the mind.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Physical Enhancement',
        level: 1,
        description:
          'The Poleiheira adherent must select the transmutation school. He gains Physical Enhancement as normal, but it applies to two physical ability scores instead of one. The bonus to each is reduced by 1 (minimum +1).',
      },
      {
        name: 'Martial Training',
        level: 1,
        description:
          'The Poleiheira adherent gains proficiency with one martial weapon of his choice. He can use his Intelligence modifier instead of Strength or Dexterity on attack rolls with this weapon.',
      },
      {
        name: 'Arcane Conditioning',
        level: 5,
        description:
          'The Poleiheira adherent gains a +1 natural armor bonus to AC and a +10 enhancement bonus to his base speed. These bonuses increase by +1 and +10 respectively at 10th, 15th, and 20th level.',
      },
    ],
    source: 'Pathfinder Player Companion: Arcane Anthology',
  },

  // ──────────────────────────────────────────────
  // 52. Spell Dancer
  // ──────────────────────────────────────────────
  {
    name: 'Spell Dancer',
    className: 'Wizard',
    description:
      'The spell dancer is an elven wizard who channels arcane energy through graceful combat movements, blending bladework with spellcasting in a fluid martial art.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll', 'Bonus Feats (5th, 10th, 15th, 20th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Spell Dance',
        level: 1,
        description:
          'The spell dancer gains a +10 enhancement bonus to speed and a +2 dodge bonus to AC when not wearing armor or using a shield. While spell dancing, he can cast spells as part of a full-attack action. He can spell dance a number of rounds per day equal to 3 + Intelligence modifier.',
      },
      {
        name: 'Dance of Avoidance',
        level: 5,
        description:
          'While spell dancing, the spell dancer gains a 20% miss chance against melee and ranged attacks. At 10th level, this increases to 30%, and at 15th level to 50%.',
      },
      {
        name: 'Dance of the Blade',
        level: 10,
        description:
          'While spell dancing, the spell dancer can deliver touch spells through a melee weapon attack. He gains a +2 bonus on concentration checks to cast defensively.',
      },
    ],
    source: 'Pathfinder Player Companion: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 53. Instructor Wizard
  // ──────────────────────────────────────────────
  {
    name: 'Instructor',
    className: 'Wizard',
    description:
      "The instructor wizard specializes in teaching magic to others, gaining abilities that enhance his allies' spellcasting and grant temporary access to his prepared spells.",
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Lessons',
        level: 1,
        description:
          "The instructor can spend 10 minutes teaching a willing creature, granting it the ability to use a cantrip the instructor has prepared for 24 hours. At 5th level, he can teach 1st-level spells. The taught creature uses the instructor's caster level and Intelligence modifier.",
      },
      {
        name: 'Inspiring Teacher',
        level: 1,
        description:
          'Allies within 30 feet who can hear the instructor gain a +1 morale bonus on concentration checks. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Advanced Instruction',
        level: 8,
        description:
          "The instructor can teach spells of up to half his maximum spell level to willing creatures. The creature can cast the spell once within 24 hours using the instructor's caster level.",
      },
    ],
    source: 'Pathfinder Player Companion: Arcane Anthology',
  },

  // ──────────────────────────────────────────────
  // 54. Alchemical Affinity Wizard
  // ──────────────────────────────────────────────
  {
    name: 'Alchemical Affinity',
    className: 'Wizard',
    description:
      'The alchemical affinity wizard supplements his arcane power with alchemical reagents, using material components to enhance spell effects.',
    replacedFeatures: ['Arcane Bond'],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Alchemical Study',
        level: 1,
        description:
          'The alchemical affinity wizard gains Craft (alchemy) as a class skill and can use his wizard level as his alchemist level for the purpose of crafting alchemical items. He adds his Intelligence modifier to damage when using alchemical weapons.',
      },
      {
        name: 'Reagent Focus',
        level: 1,
        description:
          'By spending alchemical reagents worth 1 gp per spell level as an additional material component, the wizard increases the DC of a spell by 1 or the caster level by 1 (his choice).',
      },
      {
        name: 'Alchemical Infusion',
        level: 5,
        description:
          'The alchemical affinity wizard can infuse an alchemical item with a spell, creating a delayed-effect item. When the alchemical item is used (thrown, consumed, etc.), it also delivers the spell effect.',
      },
    ],
    source: 'Pathfinder Player Companion: Alchemy Manual',
  },

  // ──────────────────────────────────────────────
  // 55. Spell Binder
  // ──────────────────────────────────────────────
  {
    name: 'Spell Binder',
    className: 'Wizard',
    description:
      'The spell binder is an elven wizard who stores spells in his bonded object with greater flexibility, allowing him to spontaneously convert prepared spells into specific stored spells.',
    replacedFeatures: [],
    modifiedFeatures: ['Arcane Bond'],
    newFeatures: [
      {
        name: 'Spell Pockets',
        level: 1,
        description:
          'At each level, the spell binder can designate one spell per spell level as a bonded spell. He can sacrifice any prepared spell of the same level or higher to spontaneously cast a bonded spell. He must have his bonded object to use this ability.',
      },
      {
        name: 'Versatile Bond',
        level: 5,
        description:
          'The spell binder can change his bonded spells after 8 hours of rest, selecting new bonded spells from his spellbook. This replaces the normal once-per-level selection.',
      },
    ],
    source: "Pathfinder Roleplaying Game: Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 56. Arcane Experimenter
  // ──────────────────────────────────────────────
  {
    name: 'Arcane Experimenter',
    className: 'Wizard',
    description:
      'The arcane experimenter pushes the boundaries of arcane theory, modifying spells through experimental techniques that can enhance their effects but sometimes produce unexpected results.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Experimental Casting',
        level: 1,
        description:
          "When casting a spell, the arcane experimenter can attempt to modify it by making a Spellcraft check (DC 15 + twice the spell's level). On success, he can increase the spell's DC by 1, range by 50%, or duration by 50%. On failure, the spell functions normally but he is dazed for 1 round.",
      },
      {
        name: 'Arcane Research',
        level: 1,
        description:
          "The arcane experimenter gains a +2 bonus on Spellcraft checks to learn new spells and to identify spells being cast. He can learn spells from any arcane class's spell list, adding them to his spellbook at the standard cost.",
      },
      {
        name: 'Breakthrough',
        level: 8,
        description:
          'Once per day, the arcane experimenter can apply one metamagic feat he knows to a spell without increasing the spell level or casting time. At 16th level, he can use this ability twice per day.',
      },
    ],
    source: 'Pathfinder Player Companion: Arcane Anthology',
  },

  // ──────────────────────────────────────────────
  // 57. Collegiate Arcanist
  // ──────────────────────────────────────────────
  {
    name: 'Collegiate Arcanist',
    className: 'Wizard',
    description:
      'The collegiate arcanist was trained at a formal academy, gaining broad knowledge and versatile spellcasting at the expense of deep specialization.',
    replacedFeatures: ['Arcane School'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Broad Study',
        level: 1,
        description:
          'The collegiate arcanist gains the universalist school. He can prepare any spell from his spellbook without penalty. He gains a +1 bonus on all Knowledge checks related to arcane magic.',
      },
      {
        name: 'Focused Preparation',
        level: 1,
        description:
          'Once per day, the collegiate arcanist can prepare a spell in only 1 minute (instead of the normal 15 minutes for a single spell). At 8th level, he can use this ability twice per day.',
      },
      {
        name: 'Academic Knowledge',
        level: 5,
        description:
          'The collegiate arcanist gains a +2 bonus on all trained Knowledge checks. He can make Knowledge checks untrained, and can retry a failed Knowledge check once per day.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Paths of Prestige',
  },

  // ──────────────────────────────────────────────
  // 58. Elder Mythos Scholar
  // ──────────────────────────────────────────────
  {
    name: 'Elder Mythos Scholar',
    className: 'Wizard',
    description:
      'The elder mythos scholar delves into forbidden lore from beyond the stars, gaining terrible knowledge and alien spellcasting abilities that come at the cost of his sanity.',
    replacedFeatures: ['Arcane Bond', 'Arcane School', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Extradimensional Knowledge',
        level: 1,
        description:
          'The elder mythos scholar adds one psychic or occult spell to his spellbook per wizard level. These spells are treated as arcane spells for him. He gains Knowledge (dungeoneering) and Knowledge (planes) as class skills.',
      },
      {
        name: 'Insightful Madness',
        level: 1,
        description:
          'The elder mythos scholar gains a +2 insight bonus on saves against mind-affecting effects, but takes a -2 penalty on all Charisma-based skill checks (except Intimidate). He also gains Alien Source, allowing his spells to use thought and emotion components instead of verbal and somatic.',
      },
      {
        name: 'Eldritch Revelation',
        level: 5,
        description:
          'Once per day, the elder mythos scholar can enter a trance for 1 minute to gain a flash of alien insight. He can ask one question about a creature, location, or object as if using divination. At 10th, 15th, and 20th level, he gains an additional daily use.',
      },
      {
        name: 'Unfathomable Presence',
        level: 8,
        description:
          'The elder mythos scholar gains an aura of alien wrongness. Creatures within 10 feet must succeed on a Will save or become shaken. Creatures that fail by 5 or more are frightened instead. This is a mind-affecting fear effect.',
      },
    ],
    source: 'Pathfinder Player Companion: Arcane Anthology',
  },

  // ──────────────────────────────────────────────
  // 59. Runesage
  // ──────────────────────────────────────────────
  {
    name: 'Runesage',
    className: 'Wizard',
    description:
      'The runesage specializes in the magic of runes and glyphs, gaining enhanced abilities with symbol and glyph spells and the power to inscribe magical marks.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Rune Bond',
        level: 1,
        description:
          "The runesage's arcane bond is with a set of magical runes inscribed on his body. He can use these runes to cast any one spell from his spellbook once per day. The runes also serve as his spellbook for up to 3 spells per wizard level.",
      },
      {
        name: 'Inscribe Rune',
        level: 1,
        description:
          'The runesage can inscribe a magical rune on a surface as a standard action. The rune holds a prepared spell of up to 3rd level and activates when a triggering condition is met. He can have a number of active runes equal to his Intelligence modifier.',
      },
      {
        name: 'Greater Runes',
        level: 5,
        description:
          "The runesage's inscribed runes can hold spells of up to 6th level. At 10th level, they can hold spells of any level. The DCs of his glyph and symbol spells increase by +1.",
      },
    ],
    source: 'Pathfinder Player Companion: Arcane Anthology',
  },

  // ──────────────────────────────────────────────
  // 60. Cyphermage
  // ──────────────────────────────────────────────
  {
    name: 'Cyphermage',
    className: 'Wizard',
    description:
      'The cyphermage focuses on the magic of written text, gaining enhanced abilities with scrolls, glyphs, and written magical effects.',
    replacedFeatures: ['Arcane Bond'],
    modifiedFeatures: ['Scribe Scroll'],
    newFeatures: [
      {
        name: 'Cypher Magic',
        level: 1,
        description:
          'The cyphermage gains Scribe Scroll as a bonus feat and can scribe scrolls at half the normal cost. He can also identify scrolls and written magical effects as a move action with a Spellcraft check.',
      },
      {
        name: 'Cypher Lore',
        level: 5,
        description:
          'At 5th level and every 5 levels thereafter, the cyphermage gains a cypher lore, a special ability related to scrolls and written magic. Options include swift scroll (use scrolls as a move action), glyph finder (+4 on Perception to find glyphs), and defensive scrollcasting.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 61. Arcane Warden
  // ──────────────────────────────────────────────
  {
    name: 'Arcane Warden',
    className: 'Wizard',
    description:
      'The arcane warden specializes in protective magic and warding, gaining enhanced abjuration abilities focused on defending a specific location or group.',
    replacedFeatures: ['Arcane Bond', 'Scribe Scroll'],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Ward Focus',
        level: 1,
        description:
          'The arcane warden must choose the abjuration school. He can designate a 30-foot area as his warded zone as a 10-minute ritual. Within this zone, his abjuration spells gain +1 caster level and +1 to save DCs.',
      },
      {
        name: 'Protective Ward',
        level: 1,
        description:
          'As a standard action, the arcane warden can create a protective ward on a 5-foot square that grants a +2 deflection bonus to AC to any ally standing in it. The ward lasts a number of rounds equal to his Intelligence modifier.',
      },
      {
        name: 'Greater Ward',
        level: 8,
        description:
          "The arcane warden's warded zone increases to 60 feet. Allies within it gain a +1 resistance bonus on saving throws against spells and spell-like abilities. At 16th level, this bonus increases to +2.",
      },
    ],
    source: 'Pathfinder Player Companion: Heroes of the Streets',
  },

  // ──────────────────────────────────────────────
  // Aeromancer
  // ──────────────────────────────────────────────
  {
    name: 'Aeromancer',
    className: 'Wizard',
    description:
      'An aeromancer forgoes a traditional arcane school to become a master of air and wind magic, channeling elemental air through every prepared spell.',
    replacedFeatures: ['Arcane School', 'Arcane Bond'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Air School',
        level: 1,
        description:
          'The aeromancer must specialize in the air elemental school (a subschool of conjuration). He gains the lightning flash and thunderbolt powers of the air school and treats his wizard level as his school level for all air school powers.',
      },
      {
        name: 'Wind Reader',
        level: 1,
        description:
          'The aeromancer gains a +2 bonus on Fly checks and on Perception checks made to hear distant sounds. This bonus increases to +4 at 10th level.',
      },
      {
        name: 'Eye of the Storm',
        level: 8,
        description:
          'At 8th level, the aeromancer is unaffected by natural or magical wind effects of less than windstorm strength and gains a +4 bonus on saving throws against wind-based spells and effects.',
      },
    ],
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
  },

  // ──────────────────────────────────────────────
  // Brown-Fur Transmuter
  // ──────────────────────────────────────────────
  {
    name: 'Brown-Fur Transmuter',
    className: 'Wizard',
    description:
      'A brown-fur transmuter is an elf wizard who forgoes a familiar or bonded object to bind a polymorphing spirit into herself, gaining the ability to share transmutation magic with allies.',
    replacedFeatures: ['Arcane Bond'],
    modifiedFeatures: ['Arcane School'],
    newFeatures: [
      {
        name: 'Transmutation School (Required)',
        level: 1,
        description:
          'A brown-fur transmuter must specialize in the transmutation school. She treats her familiar as a bonded object that grants her one additional spell slot of each spell level she can cast, but only for transmutation spells.',
      },
      {
        name: 'Share Transmutation',
        level: 1,
        description:
          'Whenever the brown-fur transmuter casts a personal-range transmutation spell on herself, she can choose to also affect one willing touched creature with the same spell. The ally gains the effects of the spell for its full duration.',
      },
      {
        name: 'Beast Form',
        level: 1,
        description:
          'Once per day as a standard action, the brown-fur transmuter can cast beast shape I as a spell-like ability. At 8th level this becomes beast shape II, at 12th level beast shape III, and at 16th level beast shape IV.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of the Moon',
  },

  // ──────────────────────────────────────────────
  // Eldershaper
  // ──────────────────────────────────────────────
  {
    name: 'Eldershaper',
    className: 'Wizard',
    description:
      'An eldershaper is a wizard who has unlocked an ancient elf tradition of fusing arcane magic with the living world, drawing power from elder plants and reshaping natural forms.',
    replacedFeatures: ['Arcane Bond', 'Arcane School Power (8th level)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Plant Bond',
        level: 1,
        description:
          'Instead of a standard arcane bond, the eldershaper bonds with a potted elder plant that acts as her arcane focus. The plant grows and gains powers as the eldershaper levels, granting her the ability to communicate with plants (as per speak with plants) at will.',
      },
      {
        name: 'Verdant Spell',
        level: 1,
        description:
          'The eldershaper can modify any spell with a target, area, or effect to incorporate living plant matter. Such spells deal an additional 1 point of piercing damage per spell level as thorns or vines as a secondary effect.',
      },
      {
        name: 'Shape Elder',
        level: 8,
        description:
          'At 8th level, the eldershaper can animate her bonded plant as a free action, causing it to move and act as a shambling mound with HD equal to her wizard level for a number of rounds per day equal to her Intelligence modifier.',
      },
    ],
    source: 'Pathfinder Player Companion: Elves of Golarion',
  },

  // ──────────────────────────────────────────────
  // Havocker
  // ──────────────────────────────────────────────
  {
    name: 'Havocker',
    className: 'Wizard',
    description:
      'A havocker is a gnome wizard who replaces scholarly arcane traditions with a knack for chaotic, unpredictable magic, gaining witch hexes in exchange for some spellcasting flexibility.',
    replacedFeatures: ['Arcane Bond', 'Cantrips'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hex (Slumber)',
        level: 1,
        description:
          'The havocker gains the slumber hex, functioning as the witch class feature with a Will save DC equal to 10 + half his wizard level + his Intelligence modifier. He can use this hex a number of times per day equal to 3 + his Intelligence modifier.',
      },
      {
        name: 'Havoc',
        level: 1,
        description:
          'Once per day, the havocker can cast a prepared arcane spell as if it were modified by the Maximize Spell metamagic feat without increasing its spell level or casting time. He gains an additional daily use of this ability at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Erratic Magic',
        level: 4,
        description:
          'At 4th level, whenever the havocker rolls a natural 1 on a concentration check, instead of losing the spell he may choose to trigger a wild surge from the wild magic surge table (Pathfinder Roleplaying Game: Ultimate Magic). This does not count as misfire.',
      },
    ],
    source: 'Pathfinder Player Companion: Gnomes of Golarion',
  },

  // ──────────────────────────────────────────────
  // Hex Channeler (Wizard)
  // ──────────────────────────────────────────────
  {
    name: 'Hex Channeler',
    className: 'Wizard',
    description:
      'A hex channeler merges arcane wizardry with the power of witch hexes, sacrificing arcane school specialization to weave both traditions into a unified magical practice.',
    replacedFeatures: ['Arcane School', 'Cantrips'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hex',
        level: 1,
        description:
          'The hex channeler gains a hex from the witch hex list. He gains an additional hex at 4th level and every 4 levels thereafter. He uses his wizard level as his witch level for determining hex effects, and his Intelligence modifier in place of Wisdom for hex save DCs.',
      },
      {
        name: 'Hex Channel',
        level: 4,
        description:
          'At 4th level, the hex channeler can apply a hex he knows to all creatures affected by a spell he casts as a free action. The hex is applied as if the hex channeler had used it on each target individually, with all normal limitations applying.',
      },
    ],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // Ley Line Guardian
  // ──────────────────────────────────────────────
  {
    name: 'Ley Line Guardian',
    className: 'Wizard',
    description:
      'A ley line guardian taps into the invisible lines of magical power that crisscross the world, drawing from environmental mana instead of relying solely on prepared spells.',
    replacedFeatures: ['Arcane Bond', 'Arcane School'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Conduit',
        level: 1,
        description:
          'The ley line guardian can draw power directly from a ley line she is standing on as a swift action, gaining 1d4 temporary spell points per wizard level. These points can be spent to cast prepared spells without expending spell slots at a rate of 1 point per spell level, but all such spells suffer a –2 penalty to their save DCs.',
      },
      {
        name: 'Focused Power',
        level: 1,
        description:
          'When the ley line guardian casts a spell using ley line power, she can choose to empower it (as per the Empower Spell metamagic feat) without altering the spell level or casting time. She can use this ability once per day plus one additional time per 5 wizard levels.',
      },
      {
        name: 'Ley Line Sense',
        level: 1,
        description:
          'The ley line guardian automatically senses any ley line within 30 feet, learning its strength (faint, moderate, strong, or overwhelming) and its dominant school of magic.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // Psychic Savant (Wizard)
  // ──────────────────────────────────────────────
  {
    name: 'Psychic Savant',
    className: 'Wizard',
    description:
      'A psychic savant is a wizard who has developed an unusual overlap between arcane formulae and psychic resonance, allowing him to detect and interact with psychic phenomenon.',
    replacedFeatures: ['Arcane Bond', 'Cantrips'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Psychic Sensitivity',
        level: 1,
        description:
          'The psychic savant gains the Psychic Sensitivity feat as a bonus feat at 1st level, even if he does not meet the prerequisites. He can use occult skill unlocks for Linguistics, Perception, Sense Motive, and Spellcraft.',
      },
      {
        name: 'Psychic Resonance',
        level: 1,
        description:
          'When the psychic savant successfully identifies a psychic spell or effect with a Spellcraft check, he gains a +1 insight bonus on saving throws against that specific spell or effect for 1 round per wizard level.',
      },
      {
        name: 'Thought Reader',
        level: 6,
        description:
          'At 6th level, the psychic savant can cast detect thoughts as a spell-like ability a number of times per day equal to his Intelligence modifier. At 12th level, he can also use mind probe once per day as a spell-like ability.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Occult Adventures',
  },
];
