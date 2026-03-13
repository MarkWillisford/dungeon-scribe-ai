import { ArchetypeData } from '../types';

export const ANTIPALADIN_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Blighted Myrmidon
  // ──────────────────────────────────────────────
  {
    name: 'Blighted Myrmidon',
    className: 'Antipaladin',
    description:
      'The blighted myrmidon has been touched by powerful corruption and channels the blight of the land through his weapons and body. He trades some of his divine power for a connection to diseased and corrupted nature spirits, spreading pestilence wherever he treads.',
    replacedFeatures: ['Plague Bringer', 'Cruelty', 'Channel Negative Energy'],
    modifiedFeatures: ['Touch of Corruption'],
    newFeatures: [
      {
        name: 'Blight Touch',
        level: 3,
        description:
          "At 3rd level, a blighted myrmidon's touch of corruption also deals 1d4 points of Constitution damage to the target on a failed Fortitude save (DC 10 + half antipaladin level + Charisma modifier). This replaces the cruelty gained at 3rd level.",
      },
      {
        name: 'Blighted Weapons',
        level: 5,
        description:
          "At 5th level, the blighted myrmidon's weapons are treated as diseased for the purpose of overcoming damage reduction and deal an additional 1d6 points of negative energy damage on a successful hit against good-aligned creatures.",
      },
      {
        name: 'Aura of Pestilence',
        level: 8,
        description:
          'At 8th level, the blighted myrmidon radiates an aura of pestilence in a 10-foot radius. All creatures in this aura must succeed at a Fortitude save (DC 10 + half antipaladin level + Charisma modifier) each round or become sickened for 1 round.',
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Corruption',
  },

  // ──────────────────────────────────────────────
  // 2. Corrupt Blade
  // ──────────────────────────────────────────────
  {
    name: 'Corrupt Blade',
    className: 'Antipaladin',
    description:
      "The corrupt blade is an antipaladin who has pledged her sword arm to evil above all else, channeling dark power directly into her strikes rather than relying on supernatural auras. She is a pure instrument of evil's wrath, sacrificing subtlety for devastating offensive power.",
    replacedFeatures: ['Aura of Cowardice', 'Aura of Despair', 'Aura of Vengeance', 'Aura of Sin'],
    modifiedFeatures: ['Smite Good'],
    newFeatures: [
      {
        name: 'Corrupted Strike',
        level: 1,
        description:
          'When a corrupt blade uses smite good, she adds her antipaladin level as a bonus on damage rolls rather than just to the first attack, but she loses the AC bonus from smite good. This corrupted power is more lethal but leaves her more exposed.',
      },
      {
        name: 'Dark Weapon Bond',
        level: 5,
        description:
          'At 5th level, the corrupt blade forms a bond with her weapon, treating it as evil-aligned and granting it a +1 enhancement bonus that increases by +1 for every 4 antipaladin levels beyond 5th, to a maximum of +4 at 17th level.',
      },
      {
        name: 'Blade of Malice',
        level: 11,
        description:
          "At 11th level, the corrupt blade's weapon gains the ability to deal 2d6 additional points of negative energy damage on a successful hit, and critical hits with the weapon automatically deal maximum damage from this additional energy.",
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Corruption',
  },

  // ──────────────────────────────────────────────
  // 3. Dread Vanguard
  // ──────────────────────────────────────────────
  {
    name: 'Dread Vanguard',
    className: 'Antipaladin',
    description:
      'The dread vanguard is the spearhead of evil armies, a dark champion who leads forces of corruption into battle and empowers allies with the force of his evil will. He trades personal supernatural defenses for abilities that bolster his wicked companions.',
    replacedFeatures: ['Unholy Resilience', 'Aura of Cowardice', 'Channel Negative Energy'],
    modifiedFeatures: ['Smite Good', 'Touch of Corruption'],
    newFeatures: [
      {
        name: 'Rallying Smite',
        level: 1,
        description:
          'When a dread vanguard uses smite good, all evil allies within 30 feet gain a +1 morale bonus on attack rolls for 1 round. This bonus increases to +2 at 10th level and +3 at 20th level.',
      },
      {
        name: 'Evil Vanguard',
        level: 3,
        description:
          'At 3rd level, the dread vanguard provides a +2 profane bonus to AC to all evil allies within 10 feet. This bonus increases by +1 at 7th level and every 4 levels thereafter, to a maximum of +6 at 19th level.',
      },
      {
        name: 'Dread Standard',
        level: 9,
        description:
          "At 9th level, a dread vanguard can designate a banner that functions as an antipaladin's unholy symbol. Evil allies within 60 feet who can see the standard gain a +2 morale bonus on saves against fear and a +1 morale bonus on attack rolls.",
      },
    ],
    source: 'Pathfinder Player Companion: Armor Masters Handbook',
  },

  // ──────────────────────────────────────────────
  // 4. Fearmonger
  // ──────────────────────────────────────────────
  {
    name: 'Fearmonger',
    className: 'Antipaladin',
    description:
      'The fearmonger specializes in breaking the will of her enemies through supernatural terror, weaponizing the aura of cowardice into a devastating tool of psychological warfare. Enemies who face a fearmonger find their courage crumbling before they even cross blades.',
    replacedFeatures: ['Touch of Corruption', 'Cruelty', 'Plague Bringer'],
    modifiedFeatures: ['Aura of Cowardice'],
    newFeatures: [
      {
        name: 'Terrifying Presence',
        level: 1,
        description:
          'At 1st level, a fearmonger gains the Dazzling Display feat as a bonus feat and can use it as a move action rather than a standard action. She adds her Charisma modifier to Intimidate checks in addition to her Strength or Dexterity modifier.',
      },
      {
        name: 'Creeping Dread',
        level: 3,
        description:
          'At 3rd level, when the fearmonger causes a creature to become shaken, the duration is doubled. At 8th level, shaken creatures in her aura of cowardice automatically become frightened instead of shaken while in the aura.',
      },
      {
        name: 'Paralyzing Terror',
        level: 11,
        description:
          'At 11th level, once per day as a standard action the fearmonger can force all creatures within 30 feet to make a Will save (DC 10 + half antipaladin level + Charisma modifier) or become panicked for 1d4 rounds. Evil creatures are immune.',
      },
    ],
    source: 'Pathfinder Player Companion: Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 5. Iron Tyrant
  // ──────────────────────────────────────────────
  {
    name: 'Iron Tyrant',
    className: 'Antipaladin',
    description:
      'The iron tyrant is a heavily armored enforcer of evil, trading mobility and stealth for iron-clad resilience and the ability to deny enemies escape. The iron tyrant looms over battlefields as an unstoppable engine of oppression, punishing those foolish enough to flee.',
    replacedFeatures: ['Smite Good', 'Aura of Cowardice'],
    modifiedFeatures: ['Unholy Resilience', 'Touch of Corruption'],
    newFeatures: [
      {
        name: 'Armor Mastery',
        level: 1,
        description:
          'An iron tyrant reduces the armor check penalty of any armor he wears by 2 (to a minimum of 0) and increases the maximum Dexterity bonus of any armor by 2. He treats medium armor as light armor for the purpose of movement speed.',
      },
      {
        name: 'Punishing Grip',
        level: 3,
        description:
          'At 3rd level, the iron tyrant gains Improved Grapple as a bonus feat. Creatures grappled by an iron tyrant are also shaken for the duration of the grapple and take 1d6 points of negative energy damage per round while pinned.',
      },
      {
        name: "Tyrant's Domain",
        level: 9,
        description:
          "At 9th level, the iron tyrant's mere presence in an area causes non-evil creatures within 30 feet to treat all terrain as difficult terrain on a failed Will save (DC 10 + half antipaladin level + Charisma modifier). This save is attempted once per encounter.",
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Corruption',
  },

  // ──────────────────────────────────────────────
  // 6. Knight of the Eternal Night
  // ──────────────────────────────────────────────
  {
    name: 'Knight of the Eternal Night',
    className: 'Antipaladin',
    description:
      'The knight of the eternal night serves the void between the stars and the darkness that devours light itself. Drawing power from pure nihilistic darkness, these antipaladins channel shadow energy and seek to extinguish all light and hope in the world.',
    replacedFeatures: ['Plague Bringer', 'Channel Negative Energy'],
    modifiedFeatures: ['Smite Good', 'Unholy Resilience'],
    newFeatures: [
      {
        name: 'Darkness Domain',
        level: 1,
        description:
          "The knight of the eternal night gains the Darkness subdomain as a bonus domain and can use its granted powers as an antipaladin of her level. She can use the domain's abilities a number of times per day equal to 3 + her Charisma modifier.",
      },
      {
        name: 'Shadow Smite',
        level: 1,
        description:
          'When the knight uses smite good, her weapon also deals an additional 1d6 points of cold damage and creates a 10-foot radius of magical darkness centered on the target for 1 round per antipaladin level.',
      },
      {
        name: 'One with Darkness',
        level: 11,
        description:
          'At 11th level, the knight of the eternal night gains darkvision 60 feet (or increases existing darkvision by 30 feet) and becomes immune to magical light effects of 6th level or lower. She gains a +4 profane bonus on saves against light-based spells.',
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Corruption',
  },

  // ──────────────────────────────────────────────
  // 7. Tyrant
  // ──────────────────────────────────────────────
  {
    name: 'Tyrant',
    className: 'Antipaladin',
    description:
      'The tyrant is an antipaladin focused on domination and control rather than destruction, bending others to her will and building a network of subjugated servants. She uses supernatural compulsion and divine intimidation to enslave rather than slay.',
    replacedFeatures: ['Touch of Corruption', 'Plague Bringer'],
    modifiedFeatures: ['Cruelty', 'Aura of Cowardice'],
    newFeatures: [
      {
        name: 'Dominating Presence',
        level: 1,
        description:
          'The tyrant adds half her antipaladin level (minimum 1) as a profane bonus on Intimidate checks. Humanoids demoralized by the tyrant remain shaken for 24 hours rather than the normal duration.',
      },
      {
        name: 'Subjugation',
        level: 3,
        description:
          'At 3rd level, once per day as a standard action, the tyrant can attempt to dominate a humanoid within 30 feet as per the spell dominate person. The save DC equals 10 + half antipaladin level + Charisma modifier. Additional uses become available at 9th and 15th level.',
      },
      {
        name: 'Iron Will of the Tyrant',
        level: 9,
        description:
          "At 9th level, creatures dominated or compelled by the tyrant receive a –4 penalty on all saving throws against the tyrant's spells and abilities. The tyrant is immune to charm and compulsion effects from non-evil sources.",
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Corruption',
  },

  // ──────────────────────────────────────────────
  // 8. Unholy Barrister
  // ──────────────────────────────────────────────
  {
    name: 'Unholy Barrister',
    className: 'Antipaladin',
    description:
      'The unholy barrister serves lawful evil patrons such as devils, acting as an enforcer of infernal contracts and a collector of damned souls. He wields the power of binding oaths and binding law as a weapon against those who would escape their dark bargains.',
    replacedFeatures: ['Plague Bringer', 'Aura of Cowardice'],
    modifiedFeatures: ['Touch of Corruption', 'Cruelty'],
    newFeatures: [
      {
        name: 'Infernal Contract',
        level: 1,
        description:
          'Once per day, the unholy barrister can offer a creature a bargain granting it a +2 profane bonus on attack rolls, saves, or ability checks for 24 hours. If the creature accepts and then breaks the agreement, it becomes cursed (as bestow curse) with no saving throw.',
      },
      {
        name: 'Soul Binding',
        level: 5,
        description:
          'At 5th level, when a creature dies within 30 feet of the unholy barrister, he can attempt to bind the soul (Will save DC 10 + half antipaladin level + Charisma modifier negates). A bound soul cannot be raised or resurrected without first freeing it, requiring a wish or miracle.',
      },
      {
        name: "Devil's Due",
        level: 11,
        description:
          'At 11th level, the unholy barrister can call upon an erinyes as per planar ally once per week without requiring a payment of treasure. The erinyes serves willingly as a fellow agent of lawful evil.',
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Corruption',
  },

  // ──────────────────────────────────────────────
  // 9. Seal-Breaker
  // ──────────────────────────────────────────────
  {
    name: 'Seal-Breaker',
    className: 'Antipaladin',
    description:
      'The seal-breaker is devoted to unmaking divine protections and wards, specializing in destroying the sacred barriers and holy powers that shelter good creatures from evil. Where paladins build walls of righteousness, the seal-breaker tears them down.',
    replacedFeatures: ['Cruelty', 'Aura of Despair'],
    modifiedFeatures: ['Smite Good', 'Touch of Corruption'],
    newFeatures: [
      {
        name: 'Dispel Good',
        level: 1,
        description:
          'Once per day per 3 antipaladin levels, the seal-breaker can use dispel magic as a spell-like ability targeting only divine spells, protection effects, or good-subtype spell effects. His caster level equals his antipaladin level.',
      },
      {
        name: 'Ward Shattering',
        level: 5,
        description:
          'At 5th level, when the seal-breaker hits with smite good, the target loses any active protection from evil, sanctuary, or shield of faith effect in addition to taking normal smite damage. Spell resistance does not apply to this suppression.',
      },
      {
        name: 'Profane Unmaking',
        level: 9,
        description:
          'At 9th level, once per day the seal-breaker can use greater dispel magic as a spell-like ability. Additionally, any consecrated or hallowed ground he stands on is treated as unconsecrated for all purposes while he remains in the area.',
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Corruption',
  },

  // ──────────────────────────────────────────────
  // 10. Deathspeaker
  // ──────────────────────────────────────────────
  {
    name: 'Deathspeaker',
    className: 'Antipaladin',
    description:
      'The deathspeaker communes with the dead and serves as a conduit between the living world and the negative energy plane. Trading some of his martial prowess for necromantic mastery, the deathspeaker commands undead and speaks with the voices of the grave.',
    replacedFeatures: ['Plague Bringer', 'Smite Good'],
    modifiedFeatures: ['Channel Negative Energy', 'Touch of Corruption'],
    newFeatures: [
      {
        name: 'Command Undead',
        level: 1,
        description:
          'The deathspeaker gains Command Undead as a bonus feat and can command a number of Hit Dice of undead equal to twice his antipaladin level. His effective cleric level for this purpose equals his antipaladin level.',
      },
      {
        name: 'Speak with Dead',
        level: 3,
        description:
          'At 3rd level, the deathspeaker can use speak with dead as a spell-like ability a number of times per day equal to his Charisma modifier. Unlike the standard spell, corpses of good-aligned individuals are not immune to his questioning.',
      },
      {
        name: 'Create Undead',
        level: 9,
        description:
          'At 9th level, the deathspeaker can use create undead as a spell-like ability once per week. At 14th level, he can instead use create greater undead once per week. The created undead are automatically under his control.',
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Corruption',
  },
];
