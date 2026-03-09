import { ArchetypeData, ClassFeatureData } from '../types';

export const WARPRIEST_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Arsenal Chaplain
  // ──────────────────────────────────────────────
  {
    name: 'Arsenal Chaplain',
    className: 'Warpriest',
    description:
      'An arsenal chaplain forgoes the divine blessings of a patron deity to instead serve a god of war or smithing, focusing entirely on mastering one supreme weapon. She sacrifices blessings for extraordinary mastery of a single favored weapon that she dedicates wholly to her faith.',
    replacedFeatures: ['Blessings', 'Sacred Armor', 'Aspect of War'],
    modifiedFeatures: ['Sacred Weapon', 'Fervor', 'Bonus Feats'],
    newFeatures: [
      {
        name: 'Weapon Master',
        level: 1,
        description:
          'An arsenal chaplain treats her sacred weapon as a fighter of her warpriest level for the purpose of selecting fighter weapon group feats and qualifying for feats requiring fighter level. She can select feats with her warpriest bonus feats from any fighter weapon training feat chain associated with her sacred weapon.',
      },
      {
        name: 'Weapon Expertise',
        level: 3,
        description:
          'At 3rd level, the arsenal chaplain gains a competence bonus on attack rolls with her sacred weapon equal to half the enhancement bonus she has applied via Sacred Weapon (minimum +1). This bonus is in addition to the normal Sacred Weapon attack bonus.',
      },
      {
        name: 'Weapon Supremacy',
        level: 9,
        description:
          'At 9th level, when making a full-attack action with her sacred weapon, the arsenal chaplain may make one additional attack at her highest base attack bonus. This additional attack does not stack with haste or similar effects.',
      },
      {
        name: 'Holy Arsenal',
        level: 20,
        description:
          "At 20th level, the arsenal chaplain's sacred weapon is treated as having every alignment property (holy, axiomatic, anarchic, or unholy as appropriate for her deity). She also treats all critical threats with her sacred weapon as automatically confirmed.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 2. Champion of the Faith
  // ──────────────────────────────────────────────
  {
    name: 'Champion of the Faith',
    className: 'Warpriest',
    description:
      'A champion of the faith is a crusading warrior-priest who casts aside personal power to inspire armies of believers and lead them to victory in the name of her god. She sacrifices her own combat enhancements to become an unparalleled leader of holy warriors.',
    replacedFeatures: ['Sacred Armor', 'Sacred Weapon Enhancement', 'Aspect of War'],
    modifiedFeatures: ['Fervor', 'Blessings', 'Channel Energy'],
    newFeatures: [
      {
        name: 'Inspiring Word',
        level: 1,
        description:
          "A champion of the faith can use fervor to empower an ally's next attack rather than her own. By spending 1 use of fervor as a swift action, she grants an adjacent ally a +2 sacred bonus on attack and damage rolls until the end of the ally's next turn.",
      },
      {
        name: 'Holy Aura',
        level: 3,
        description:
          'At 3rd level, allies within 10 feet of the champion of the faith gain a +1 morale bonus on saves versus fear effects and on Will saves against enchantment spells. This aura is always active as long as the champion is conscious.',
      },
      {
        name: 'War Banner',
        level: 7,
        description:
          'At 7th level, the champion of the faith can consecrate a banner to her deity as a 10-minute ritual. While she carries this banner, all allies within 60 feet who can see it gain a +2 morale bonus on attack rolls and saves against fear. This bonus increases to +4 at 14th level.',
      },
      {
        name: 'Inspiring Channel',
        level: 10,
        description:
          'At 10th level, when the champion of the faith channels energy to heal allies, all healed allies also gain a +1 sacred bonus on attack rolls and damage rolls for 1 round per 4 warpriest levels.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 3. Cult Leader
  // ──────────────────────────────────────────────
  {
    name: 'Cult Leader',
    className: 'Warpriest',
    description:
      'A cult leader is a warpriest who uses fervor and divine manipulation to bind followers to her service, channeling faith through charismatic domination rather than martial excellence. She trades combat power for the ability to compel obedience and strengthen her devoted minions.',
    replacedFeatures: ['Sacred Weapon Enhancement', 'Sacred Armor', 'Aspect of War'],
    modifiedFeatures: ['Fervor', 'Blessings', 'Channel Energy'],
    newFeatures: [
      {
        name: 'Fanatical Followers',
        level: 1,
        description:
          'A cult leader gains the Leadership feat as a bonus feat at 1st level. Her followers gain a +1 morale bonus on attack rolls and saves when within 30 feet of her. Cohorts who share her deity gain additional benefits from her blessings.',
      },
      {
        name: 'Compelled Devotion',
        level: 3,
        description:
          "At 3rd level, the cult leader can use her fervor to affect a willing or charmed ally rather than herself, granting that ally the benefits of fervor's spell use. Additionally, she can spend 2 uses of fervor to cast charm person (DC 10 + half warpriest level + Wisdom modifier) as a spell-like ability.",
      },
      {
        name: 'Ecstatic Worship',
        level: 7,
        description:
          'At 7th level, the cult leader can perform a 1-minute ritual that grants all willing followers within 30 feet a +2 morale bonus on attack rolls, saves, and ability checks for 10 minutes per warpriest level. Followers who participate in the ritual are also immune to fear during this time.',
      },
      {
        name: 'Cult Sacrifice',
        level: 12,
        description:
          'At 12th level, once per day the cult leader can call upon a willing follower to sacrifice themselves. The follower is reduced to 0 hp and the cult leader regains all expended fervor uses and channels energy as if having recharged. The follower is stabilized automatically.',
      },
    ],
    source: 'Pathfinder RPG: Inner Sea Intrigue',
  },

  // ──────────────────────────────────────────────
  // 4. Disenchanter
  // ──────────────────────────────────────────────
  {
    name: 'Disenchanter',
    className: 'Warpriest',
    description:
      'A disenchanter is a warpriest devoted to a deity who opposes arcane magic, training to strip magical enhancements from enemies and disrupt hostile spells. She trades some of her own magical power for the ability to unmake the magic of others.',
    replacedFeatures: ['Sacred Weapon Enhancement', 'Aspect of War', 'Bonus Feats (some)'],
    modifiedFeatures: ['Fervor', 'Blessings', 'Sacred Armor'],
    newFeatures: [
      {
        name: 'Disrupting Strike',
        level: 1,
        description:
          'A disenchanter can attempt to dispel a single magical effect on a target with each melee attack. After hitting, she can attempt a dispel check (1d20 + warpriest level) against one magical effect on the target as a free action, using her warpriest level as the caster level.',
      },
      {
        name: 'Antimagic Fervor',
        level: 3,
        description:
          'At 3rd level, the disenchanter can spend fervor to add a +4 sacred bonus to a single dispel check. She can also use fervor to cast dispel magic as a spell-like ability (1 use), using her warpriest level as the caster level.',
      },
      {
        name: 'Spell Disruption Aura',
        level: 7,
        description:
          'At 7th level, the disenchanter radiates an antimagic presence in a 10-foot aura. Enemy spellcasters within the aura must succeed at a concentration check (DC 15 + spell level) when casting spells. This aura can be suppressed or activated as a free action.',
      },
      {
        name: 'Null Strike',
        level: 12,
        description:
          "At 12th level, the disenchanter's melee attacks are treated as having the disrupting property against all spellcasters, not just undead. Spellcasters struck must succeed at a Will save (DC 10 + half warpriest level + Wisdom modifier) or lose their highest-level prepared spell or spell slot.",
      },
      {
        name: 'Antimagic Aegis',
        level: 17,
        description:
          'At 17th level, the disenchanter is immune to spells and spell-like abilities with the arcane descriptor when she has at least one use of fervor remaining. She can also use greater dispel magic as a spell-like ability (3 uses of fervor) once per day.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 5. Divine Commander
  // ──────────────────────────────────────────────
  {
    name: 'Divine Commander',
    className: 'Warpriest',
    description:
      'A divine commander leads troops in the name of her deity, combining military tactics with divine fervor to drive armies to victory. She trades personal combat enhancement for extraordinary mounted combat ability and tactical command over groups of soldiers.',
    replacedFeatures: ['Sacred Armor', 'Sacred Weapon Enhancement', 'Aspect of War'],
    modifiedFeatures: ['Fervor', 'Blessings', 'Bonus Feats'],
    newFeatures: [
      {
        name: 'Mounted Warrior',
        level: 1,
        description:
          "A divine commander gains Mounted Combat as a bonus feat. She may use Fervor to empower her mount's attacks as if the mount were herself. Her mount also gains the benefits of her Sacred Weapon when it is the divine commander's steed.",
      },
      {
        name: 'Tactical Blessing',
        level: 3,
        description:
          'At 3rd level, the divine commander can use her blessings to affect her mount in addition to herself, or to affect all allies within 30 feet who can see her (at half normal duration). Each use of a blessing affects either herself and her mount, or all qualifying allies.',
      },
      {
        name: 'Battle Standard',
        level: 7,
        description:
          'At 7th level, the divine commander can consecrate a battle standard that, when carried into battle, grants all allies within 60 feet a +2 bonus on attack rolls, saves, and Ride checks. The standard is effective for 1 hour per day of consecration per warpriest level.',
      },
      {
        name: "Commander's Rally",
        level: 12,
        description:
          'At 12th level, once per day as a swift action, the divine commander can grant all allies within 60 feet who can see and hear her a single move action that they must use before the start of her next turn. This free action occurs simultaneously for all affected allies.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 6. Forgepriest
  // ──────────────────────────────────────────────
  {
    name: 'Forgepriest',
    className: 'Warpriest',
    description:
      'A forgepriest serves a deity of smithing and craft, learning to imbue weapons and armor with divine power through sacred metalworking rather than in-combat enhancements. She sacrifices some spellcasting versatility to become a master of magical item creation and enhancement.',
    replacedFeatures: ['Channel Energy', 'Aspect of War'],
    modifiedFeatures: ['Sacred Weapon', 'Sacred Armor', 'Fervor', 'Bonus Feats'],
    newFeatures: [
      {
        name: 'Forge Mastery',
        level: 1,
        description:
          'A forgepriest gains the Master Craftsman feat as a bonus feat and reduces the time required to craft magical weapons and armor by 25%. She may craft magical items as if she had any spellcasting class of level equal to her warpriest level.',
      },
      {
        name: 'Sacred Forge',
        level: 2,
        description:
          "At 2nd level, the forgepriest can use her Fervor to temporarily enhance a weapon or suit of armor she touches as a standard action. The enhancement bonus applied equals half the Fervor dice (minimum +1) and lasts 1 minute per warpriest level. Multiple uses don't stack.",
      },
      {
        name: 'Divine Artisan',
        level: 5,
        description:
          'At 5th level, the forgepriest can produce magical weapons and armor at 50% of the normal gold cost. She also adds her Wisdom modifier to her effective caster level when crafting metal-based magical items.',
      },
      {
        name: 'Living Weapon',
        level: 10,
        description:
          "At 10th level, the forgepriest can permanently bind her divine power into a weapon during a 1-hour ritual, creating a sacred weapon that grows with her. This weapon automatically upgrades its enhancement bonus to match the forgepriest's sacred weapon table without additional cost.",
      },
      {
        name: 'Master of the Forge',
        level: 20,
        description:
          'At 20th level, the forgepriest can create legendary artifacts once per year using only normal crafting materials, as long as she performs a week-long ritual. The artifact has a base price equal to her warpriest level x 10,000 gp worth of power.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Mantis Zealot
  // ──────────────────────────────────────────────
  {
    name: 'Mantis Zealot',
    className: 'Warpriest',
    description:
      'A mantis zealot is a warpriest of Achaekek, the god of divine assassins, who combines the Red Mantis style of killing with divine fervor. She trades healing and defensive abilities for precise, lethal strikes backed by divine sanction.',
    replacedFeatures: ['Channel Energy', 'Sacred Armor', 'Aspect of War'],
    modifiedFeatures: ['Fervor', 'Blessings', 'Sacred Weapon'],
    newFeatures: [
      {
        name: "Killer's Fervor",
        level: 1,
        description:
          'A mantis zealot cannot use fervor to heal; instead, she can use fervor to empower her strikes with divine precision. Spending a use of fervor as a swift action allows her next attack to deal an additional 1d6 damage per 2 warpriest levels and ignore up to 5 points of damage reduction.',
      },
      {
        name: 'Death Mark',
        level: 3,
        description:
          "At 3rd level, the mantis zealot can designate one target per day as her divine quarry by studying them for 1 full round. Against her divine quarry, she gains a +2 sacred bonus on attack rolls and the DC of her blessings' special effects increases by 2.",
      },
      {
        name: 'Soul Harvest',
        level: 7,
        description:
          "At 7th level, when the mantis zealot slays her divine quarry, she gains temporary hit points equal to the slain creature's HD and all expended fervor uses are restored. She can designate a new divine quarry immediately after slaying the previous one.",
      },
      {
        name: "Achaekek's Touch",
        level: 12,
        description:
          'At 12th level, once per day the mantis zealot can attempt an assassination strike. She must be adjacent to her divine quarry and make a melee attack. If the attack hits and deals damage, the target must succeed at a Fortitude save (DC 10 + half warpriest level + Wisdom modifier) or be slain outright.',
      },
    ],
    source: 'Pathfinder RPG: Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 8. Proclaimer
  // ──────────────────────────────────────────────
  {
    name: 'Proclaimer',
    className: 'Warpriest',
    description:
      'A proclaimer is a warpriest who fights with faith-fueled words as readily as weapons, using the power of divine proclamation to inspire allies and break the resolve of enemies. She trades some martial ability for exceptional oratorical power backed by genuine divine authority.',
    replacedFeatures: ['Sacred Armor', 'Sacred Weapon Enhancement (some)', 'Aspect of War'],
    modifiedFeatures: ['Fervor', 'Channel Energy', 'Blessings'],
    newFeatures: [
      {
        name: 'Divine Proclamation',
        level: 1,
        description:
          'A proclaimer can use Fervor to issue a divine proclamation instead of casting a spell. Enemies within 30 feet who hear her proclamation must succeed at a Will save (DC 10 + half warpriest level + Wisdom modifier) or be shaken for 1 round. Allies within 30 feet gain a +2 morale bonus on their next saving throw.',
      },
      {
        name: 'Voice of the Faithful',
        level: 3,
        description:
          "At 3rd level, the proclaimer's channel energy heals all allies within range who share her deity (or deity's portfolio) for an additional 1d6 hit points. Undead in range who are opposed to her deity take this extra damage instead.",
      },
      {
        name: 'Rallying Call',
        level: 7,
        description:
          'At 7th level, as a standard action the proclaimer can issue a rallying call that removes the shaken, frightened, or panicked condition from all allies within 60 feet who can hear her. Affected allies are also immune to fear effects for 1 round per warpriest level.',
      },
      {
        name: 'Condemnation',
        level: 12,
        description:
          'At 12th level, once per day the proclaimer can condemn a single creature within 60 feet. The condemned creature must succeed at a Will save (DC 10 + half warpriest level + Wisdom modifier) or take a –4 penalty on all d20 rolls for 1 minute per warpriest level. This effect ends if the proclaimer is slain or rendered unconscious.',
      },
    ],
    source: 'Pathfinder RPG: Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 9. Sacred Fist
  // ──────────────────────────────────────────────
  {
    name: 'Sacred Fist',
    className: 'Warpriest',
    description:
      "A sacred fist channels divine power through her body rather than weapons, using unarmed combat as her sacred conduit. She combines the warpriest's divine power with the monk's martial arts, treating her unarmed strikes as her sacred weapon and gaining monk-style combat techniques.",
    replacedFeatures: [
      'Weapon Proficiencies (martial)',
      'Sacred Weapon (manufactured)',
      'Bonus Feats',
    ],
    modifiedFeatures: ['Fervor', 'Sacred Weapon', 'Blessings'],
    newFeatures: [
      {
        name: 'Flurry of Blows',
        level: 1,
        description:
          'A sacred fist can make a flurry of blows with unarmed strikes as a monk of her warpriest level. Her unarmed strike damage is treated as a monk of her warpriest level. These unarmed strikes function as her sacred weapon for all warpriest class features.',
      },
      {
        name: 'Stunning Fist',
        level: 1,
        description:
          'A sacred fist gains Stunning Fist as a bonus feat at 1st level. The DC for her Stunning Fist is 10 + half her warpriest level + her Wisdom modifier rather than her Constitution modifier.',
      },
      {
        name: 'Sacred Body',
        level: 3,
        description:
          "At 3rd level, the sacred fist's body is treated as a sacred weapon for the purpose of bypassing damage reduction, gaining the alignment properties of her deity. At 9th level, her unarmed strikes are treated as magic weapons with a +1 enhancement bonus that increases by +1 for every 4 levels thereafter.",
      },
      {
        name: 'Ki Fervor',
        level: 5,
        description:
          'At 5th level, the sacred fist gains a ki pool (Wisdom modifier + half warpriest level). She can spend ki points to fuel fervor uses (1 ki point = 1 fervor use) or fervor uses to restore ki points (1 fervor use = 2 ki points). Her ki pool can power standard monk ki abilities.',
      },
      {
        name: 'Diamond Soul',
        level: 17,
        description:
          'At 17th level, the sacred fist gains spell resistance equal to her warpriest level + 10. This works as the monk ability of the same name.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 10. Shieldbearer
  // ──────────────────────────────────────────────
  {
    name: 'Shieldbearer',
    className: 'Warpriest',
    description:
      'A shieldbearer dedicates herself to a deity of protection and defense, mastering the use of her shield as both weapon and divine conduit. She trades offensive sacred weapon enhancements for extraordinary defensive abilities that protect both herself and her allies.',
    replacedFeatures: ['Sacred Weapon Enhancement (offensive)', 'Aspect of War'],
    modifiedFeatures: ['Sacred Armor', 'Fervor', 'Blessings', 'Sacred Weapon'],
    newFeatures: [
      {
        name: 'Shield of Faith',
        level: 1,
        description:
          "A shieldbearer's shield is treated as her sacred weapon. She can apply sacred weapon enhancements to her shield, and the shield's sacred enhancement bonus applies to her Armor Class as a sacred bonus (not enhancement) that stacks with her shield's normal enhancement bonus.",
      },
      {
        name: 'Protective Fervor',
        level: 2,
        description:
          'At 2nd level, the shieldbearer can use fervor to cast protective spells on adjacent allies rather than only on herself. Any fervor spell with a range of "touch" or "personal" can be cast on an adjacent ally as a swift action.',
      },
      {
        name: 'Shield Wall',
        level: 6,
        description:
          'At 6th level, allies adjacent to the shieldbearer gain a +2 shield bonus to AC as long as the shieldbearer is wielding a shield and is not flat-footed. This bonus increases to +4 at 12th level.',
      },
      {
        name: 'Interposing Shield',
        level: 9,
        description:
          "At 9th level, once per round as an immediate action, the shieldbearer can interpose her shield between an adjacent ally and an incoming attack, forcing the attacker to target the shieldbearer instead. The shieldbearer's AC against this redirected attack is calculated using only her sacred armor bonus and sacred shield bonus.",
      },
      {
        name: 'Inviolate Aegis',
        level: 15,
        description:
          'At 15th level, the shieldbearer can spend 3 uses of fervor to create a dome of divine energy with a 10-foot radius centered on herself. For 1 round, all allies within the dome gain total cover from attacks originating outside the dome. The dome does not hinder movement.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 11. Dawnflower Dervish (Warpriest)
  // ──────────────────────────────────────────────
  {
    name: 'Dawnflower Dervish',
    className: 'Warpriest',
    description:
      'A Dawnflower dervish is a warpriest of Sarenrae who combines whirling dervish combat with divine fervor, turning the flowing dance of desert warriors into a sacred weapon of the Dawnflower. She excels at fighting multiple opponents with curved blades while channeling the healing and searing light of her goddess.',
    replacedFeatures: ['Sacred Armor', 'Bonus Feats (some)', 'Aspect of War'],
    modifiedFeatures: ['Sacred Weapon', 'Fervor', 'Blessings'],
    newFeatures: [
      {
        name: 'Dervish Dance',
        level: 1,
        description:
          "A Dawnflower dervish gains Dervish Dance as a bonus feat at 1st level and treats the scimitar as her sacred weapon regardless of her deity's favored weapon. While using Dervish Dance, she adds her Dexterity modifier to damage rolls with a scimitar.",
      },
      {
        name: 'Battle Dance',
        level: 2,
        description:
          'At 2nd level, as a move action the Dawnflower dervish can begin a battle dance. While dancing, she gains a +2 bonus to AC and a +2 bonus on Reflex saves. She can use fervor while battle dancing without ending the dance.',
      },
      {
        name: 'Whirling Blades',
        level: 6,
        description:
          'At 6th level, when the Dawnflower dervish makes a full-attack action while battle dancing, she can make one additional attack at her highest attack bonus against a second adjacent opponent. This extra attack uses her Sacred Weapon damage.',
      },
      {
        name: 'Searing Light',
        level: 10,
        description:
          'At 10th level, the Dawnflower dervish can channel her fervor as radiant energy. Once per day per 4 warpriest levels, she can cause her scimitar to deal an additional 2d6 fire and radiant damage on a successful hit for 1 round. Undead take 4d6 additional damage instead.',
      },
    ],
    source: 'Pathfinder RPG: Inner Sea Combat',
  },
];
