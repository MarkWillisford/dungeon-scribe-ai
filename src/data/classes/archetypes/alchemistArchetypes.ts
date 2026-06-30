import { ArchetypeData } from '../types';

export const ALCHEMIST_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Beastmorph
  // ──────────────────────────────────────────────
  {
    name: 'Beastmorph',
    className: 'Alchemist',
    description:
      'Beastmorphs study the physical structures of animals to gain insight into improving their mutagen. They gain bestial features when using their mutagen, eventually transforming into monstrous shapes.',
    replacedFeatures: [
      'Poison Resistance +2',
      'Poison Resistance +4',
      'Poison Resistance +6',
      'Poison Use',
      'Swift Poisoning',
      'Poison Immunity',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Beastform Mutagen',
        level: 3,
        description:
          'At 3rd level, a beastmorph gains abilities from beast shape I when using his mutagen. At 8th level, he gains abilities from beast shape II. At 13th level, he gains abilities from beast shape III. At 18th level, he gains abilities from beast shape IV.',
        effects: [],
      },
      {
        name: 'Improved Beastform Mutagen',
        level: 8,
        description:
          'At 8th level, the beastmorph gains additional natural attacks and movement types from beast shape II when using his mutagen.',
        effects: [],
      },
      {
        name: 'Greater Beastform Mutagen',
        level: 13,
        description:
          'At 13th level, the beastmorph gains abilities from beast shape III, including pounce, rake, and trample.',
        effects: [],
      },
      {
        name: 'Grand Beastform Mutagen',
        level: 18,
        description:
          'At 18th level, the beastmorph gains abilities from beast shape IV when using his mutagen.',
        effects: [],
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 2. Blightseeker
  // ──────────────────────────────────────────────
  {
    name: 'Blightseeker',
    className: 'Alchemist',
    description:
      'Blightseekers are alchemists who embrace decay and disease, studying blighted lands and pestilence to develop terrible concoctions that spread affliction.',
    replacedFeatures: ['Brew Potion', 'Poison Resistance', 'Poison Use', 'Poison Immunity'],
    modifiedFeatures: ['Bomb'],
    newFeatures: [
      {
        name: 'Blight Bomb',
        level: 1,
        description:
          'A blightseeker can create bombs that deal damage and inflict disease. At 1st level, creatures struck by the bomb must save or become sickened for 1 round per alchemist level.',
        effects: [],
      },
      {
        name: 'Plagueborn',
        level: 2,
        description:
          'At 2nd level, the blightseeker gains a +2 bonus on saving throws against disease. This bonus increases by +2 at 5th level and every 3 levels thereafter.',
        effects: [],
      },
      {
        name: 'Pandemic',
        level: 14,
        description:
          'At 14th level, when a blightseeker confirms a critical hit with a blight bomb, the disease effect spreads to all creatures adjacent to the target.',
        effects: [],
      },
    ],
    source: "Plane-Hopper's Handbook",
  },

  // ──────────────────────────────────────────────
  // 3. Bogborn Alchemist
  // ──────────────────────────────────────────────
  {
    name: 'Bogborn Alchemist',
    className: 'Alchemist',
    description:
      'Bogborn alchemists are grippli who have learned to augment their natural toxins and adapt to the dangers of swamp life through alchemical means.',
    replacedFeatures: ['Throw Anything', 'Poison Use', 'Swift Poisoning'],
    modifiedFeatures: ['Bomb', 'Mutagen'],
    newFeatures: [
      {
        name: 'Swamp Squeeze',
        level: 1,
        description:
          'At 1st level, a bogborn alchemist can compress his body to squeeze through spaces as though he were one size category smaller. He can do this for a number of rounds per day equal to his alchemist level.',
        effects: [],
      },
      {
        name: 'Amphibious Mutagen',
        level: 1,
        description:
          'When the bogborn alchemist drinks his mutagen, he gains a swim speed of 30 feet and the ability to breathe underwater.',
        effects: [],
      },
      {
        name: 'Toxin Secretion',
        level: 3,
        description:
          'At 3rd level, the bogborn alchemist can secrete contact poison from his skin as a swift action. The poison deals 1d2 Dexterity damage per round for 6 rounds (DC 10 + half alchemist level + Intelligence modifier).',
        effects: [],
      },
      {
        name: 'Tonguelash',
        level: 6,
        description:
          'At 6th level, the bogborn alchemist can use his tongue to deliver touch attacks within 15 feet, including delivering extracts and poison.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 4. Chirurgeon
  // ──────────────────────────────────────────────
  {
    name: 'Chirurgeon',
    className: 'Alchemist',
    description:
      'A chirurgeon is an alchemist who focuses on the biological processes of living creatures to develop superior healing techniques and surgical skills.',
    replacedFeatures: [
      'Poison Resistance +2',
      'Poison Resistance +4',
      'Poison Resistance +6',
      'Poison Use',
      'Poison Immunity',
      'Persistent Mutagen',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Infused Curative',
        level: 2,
        description:
          'At 2nd level, the chirurgeon can create an infused curative as a standard action, which acts as cure light wounds using his alchemist level as the caster level. This ability replaces the discovery gained at 2nd level.',
        effects: [],
      },
      {
        name: 'Anaesthetic',
        level: 5,
        description:
          'At 5th level, a chirurgeon can administer an anaesthetic to a willing or helpless creature, rendering it unconscious for 1 minute per alchemist level. The creature is helpless but does not feel pain during this time.',
        effects: [],
      },
      {
        name: 'Power Over Death',
        level: 10,
        description:
          'At 10th level, the chirurgeon adds breath of life to his formula list as a 4th-level extract.',
        effects: [],
      },
      {
        name: 'Resuscitate',
        level: 18,
        description:
          'At 18th level, the chirurgeon can restore life to a creature dead for no longer than 1 round per alchemist level by expending two uses of infused curative. This functions as raise dead.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 5. Clone Master
  // ──────────────────────────────────────────────
  {
    name: 'Clone Master',
    className: 'Alchemist',
    description:
      'Clone masters are alchemists who have mastered the art of creating clones of themselves, developing simulacra and eventually perfect duplicates to serve as backups and servants.',
    replacedFeatures: [
      'Poison Resistance +2',
      'Poison Resistance +4',
      'Poison Resistance +6',
      'Poison Use',
      'Poison Immunity',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Lesser Simulacrum',
        level: 2,
        description:
          'At 2nd level, the clone master adds lesser simulacrum to his formula list as a 3rd-level extract. This replaces the discovery gained at 2nd level.',
        effects: [],
      },
      {
        name: 'Rebirth',
        level: 8,
        description:
          'At 8th level, the clone master can prepare a clone of himself, as the spell clone. Creating the clone costs 3,000 gp and takes 1 week of work. The clone master can maintain only one clone at a time.',
        effects: [],
      },
      {
        name: 'Simulacrum',
        level: 12,
        description:
          'At 12th level, the clone master adds simulacrum to his formula list as a 5th-level extract.',
        effects: [],
      },
      {
        name: 'Clone',
        level: 16,
        description:
          'At 16th level, the clone master adds clone to his formula list as a 6th-level extract. The clone takes only 1 day to grow.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 6. Crypt Breaker
  // ──────────────────────────────────────────────
  {
    name: 'Crypt Breaker',
    className: 'Alchemist',
    description:
      'Crypt breakers are alchemists who specialize in exploring ancient tombs and ruins. They develop tools and techniques to overcome traps, undead, and the hazards of long-sealed chambers.',
    replacedFeatures: ['Bomb', 'Poison Resistance', 'Poison Use', 'Poison Immunity'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Alkahest Bomb',
        level: 1,
        description:
          "A crypt breaker's bombs deal acid damage instead of fire damage. Against constructs and undead, alkahest bombs deal an additional 1d6 damage. This ability otherwise functions as the bomb class feature.",
        effects: [],
      },
      {
        name: 'Trapfinding',
        level: 2,
        description:
          'At 2nd level, a crypt breaker gains the trapfinding ability, adding half his alchemist level (minimum 1) to Perception checks to find traps and to Disable Device checks. He can use Disable Device to disarm magic traps.',
        effects: [],
      },
      {
        name: "Crypt Breaker's Draught",
        level: 2,
        description:
          "At 2nd level, a crypt breaker gains the ability to create special draughts. These function as extracts of darkvision, detect undead, or detect secret doors. He can have one crypt breaker's draught active at a time.",
        effects: [],
      },
    ],
    source: 'Pathfinder Society Field Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Ectoplasmatist
  // ──────────────────────────────────────────────
  {
    name: 'Ectoplasmatist',
    className: 'Alchemist',
    description:
      'An ectoplasmatist studies the natures of ethereal and incorporeal creatures, developing bombs and techniques that affect spirits and ectoplasm.',
    replacedFeatures: ['Poison Resistance', 'Poison Use', 'Poison Immunity', 'Swift Poisoning'],
    modifiedFeatures: ['Bomb'],
    newFeatures: [
      {
        name: 'Ectoplasmic Bomb',
        level: 1,
        description:
          "An ectoplasmatist's bombs deal full damage to incorporeal creatures without requiring the ghost touch property. Ectoplasmic bombs deal half damage to corporeal creatures.",
        effects: [],
      },
      {
        name: 'Ectoplasmic Residue',
        level: 3,
        description:
          'At 3rd level, when an ectoplasmatist hits an incorporeal creature with an ectoplasmic bomb, the creature is covered in residue that causes it to become partially corporeal for 1 round per alchemist level. The creature takes half damage from non-magical attacks.',
        effects: [],
      },
      {
        name: 'Spiritual Sight',
        level: 5,
        description:
          'At 5th level, the ectoplasmatist can see invisible and ethereal creatures as per see invisibility for a number of rounds per day equal to his alchemist level.',
        effects: [],
      },
      {
        name: 'Greater Ectoplasmic Bomb',
        level: 10,
        description:
          "At 10th level, an ectoplasmatist's bombs deal full damage to both corporeal and incorporeal creatures.",
        effects: [],
      },
    ],
    source: 'Haunted Heroes Handbook',
  },

  // ──────────────────────────────────────────────
  // 8. Grenadier
  // ──────────────────────────────────────────────
  {
    name: 'Grenadier',
    className: 'Alchemist',
    description:
      'Grenadiers are alchemists with a talent for explosive warfare, training in martial weapons and developing techniques to enhance their destructive capabilities with alchemical weapons.',
    replacedFeatures: [
      'Brew Potion',
      'Poison Resistance +2',
      'Poison Resistance +4',
      'Poison Resistance +6',
      'Poison Use',
      'Poison Immunity',
      'Swift Poisoning',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Martial Weapon Proficiency',
        level: 1,
        description:
          'At 1st level, a grenadier picks one martial weapon to become proficient with.',
        effects: [],
      },
      {
        name: 'Alchemical Weapon',
        level: 2,
        description:
          "At 2nd level, a grenadier can, as a move action, infuse a weapon with a single harmful alchemical liquid or powder, such as alchemist's fire or sneezing powder. The substance takes effect on the next successful strike with the weapon, dealing damage as normal for the substance in addition to the weapon damage. At 6th level, he can use this ability as a swift action. At 10th level, he can combine two substances into one weapon.",
        effects: [],
      },
      {
        name: 'Precise Bombs',
        level: 2,
        description:
          'At 2nd level, a grenadier gains the precise bombs discovery as a bonus discovery.',
        effects: [],
      },
      {
        name: 'Directed Blast',
        level: 6,
        description:
          'At 6th level, a grenadier can detonate a bomb so that it deals splash damage in a 20-foot cone rather than affecting a radius. The cone starts at the alchemist and extends in the direction he chooses. The alchemist designates one creature in the cone to be the direct target of the bomb.',
        effects: [],
      },
      {
        name: 'Staggering Blast',
        level: 10,
        description:
          "At 10th level, a grenadier's direct hits with bombs can stagger the target for 1d4+1 rounds (Fort save negates). This is a poison effect.",
        effects: [],
      },
    ],
    source: 'Inner Sea World Guide',
  },

  // ──────────────────────────────────────────────
  // 9. Gun Chemist
  // ──────────────────────────────────────────────
  {
    name: 'Gun Chemist',
    className: 'Alchemist',
    description:
      'A gun chemist is an alchemist who combines alchemy with firearms, loading his weapons with specially prepared alchemical cartridges that produce explosive effects.',
    replacedFeatures: ['Bomb', 'Throw Anything', 'Brew Potion', 'Swift Alchemy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Gunsmith',
        level: 1,
        description:
          "A gun chemist gains the gunslinger's gunsmith ability. He gains a battered firearm identical to the one a 1st-level gunslinger gains.",
        effects: [],
      },
      {
        name: 'Alchemical Ordnance',
        level: 1,
        description:
          "A gun chemist can infuse a firearm with a single dose of alchemical ordnance as a move action. Alchemical ordnance deals additional damage equal to 1d6 + the gun chemist's Intelligence modifier. This damage increases by 1d6 at every odd level. He can use this ability a number of times per day equal to his class level + his Intelligence modifier.",
        effects: [],
      },
      {
        name: 'Cartridge Savant',
        level: 2,
        description:
          'At 2nd level, a gun chemist can use the Craft (alchemy) skill to create alchemical cartridges at a reduced cost and time. He also gains a bonus on attack rolls equal to his Intelligence modifier when using alchemical cartridges.',
        effects: [],
      },
      {
        name: 'Repeat Fire',
        level: 6,
        description:
          'At 6th level, a gun chemist can fire multiple doses of alchemical ordnance in a single round when making a full attack.',
        effects: [],
      },
    ],
    source: 'People of the Wastes',
  },

  // ──────────────────────────────────────────────
  // 10. Horticulturist
  // ──────────────────────────────────────────────
  {
    name: 'Horticulturist',
    className: 'Alchemist',
    description:
      'A horticulturist combines alchemy with a deep knowledge of botany, cultivating dangerous plants and using plant-based extracts to create unique effects.',
    replacedFeatures: ['Bomb', 'Throw Anything', 'Mutagen', 'Persistent Mutagen'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Appearance of Life',
        level: 1,
        description:
          'At 1st level, a horticulturist gains the ability to create floral arrangements that last a number of hours equal to his alchemist level. These arrangements can be used to improve attitudes or provide bonuses on Diplomacy checks.',
        effects: [],
      },
      {
        name: 'Cultivated Plants',
        level: 1,
        description:
          'A horticulturist cultivates alchemically augmented plants. He can have a number of cultivated plants equal to his Intelligence modifier (minimum 1). Each plant must be tended daily. He can use cultivated plants as thrown splash weapons, growing replacements overnight.',
        effects: [],
      },
      {
        name: 'Adaptive Botany',
        level: 1,
        description:
          'A horticulturist adds a number of spells from the druid and ranger spell lists to his formula list at the levels indicated.',
        effects: [],
      },
      {
        name: 'Verdant Growth',
        level: 14,
        description:
          'At 14th level, a horticulturist can use his cultivated plants to create an entangle effect (as the spell) centered on the point of impact of a thrown cultivated plant.',
        effects: [],
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 11. Inspired Chemist
  // ──────────────────────────────────────────────
  {
    name: 'Inspired Chemist',
    className: 'Alchemist',
    description:
      'Inspired chemists use cognatogen instead of mutagen, enhancing their mental faculties rather than their physical ones. They draw upon an inspiration pool similar to investigators.',
    replacedFeatures: ['Mutagen', 'Persistent Mutagen'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Cognatogen',
        level: 1,
        description:
          'At 1st level, an inspired chemist learns to create a cognatogen instead of a mutagen. The cognatogen grants a +2 alchemical bonus to one mental ability score (Intelligence, Wisdom, or Charisma) and a corresponding -2 penalty to the associated physical ability score (Strength, Dexterity, or Constitution). This improves to +4/-2 at 12th level and +6/-2 at 16th level.',
        effects: [],
      },
      {
        name: 'Inspiration',
        level: 2,
        description:
          'At 2nd level, an inspired chemist gains an inspiration pool equal to half his alchemist level + his Intelligence modifier. He can use inspiration to augment Knowledge, Linguistics, and Spellcraft checks without expending a use. Other skill checks and ability checks require spending a use. This replaces the 2nd-level discovery.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 12. Internal Alchemist
  // ──────────────────────────────────────────────
  {
    name: 'Internal Alchemist',
    className: 'Alchemist',
    description:
      'An internal alchemist studies the interaction between mind and body, using alchemy to purify and perfect his own physiology. He becomes resistant to physical ailments and gains control over his bodily processes.',
    replacedFeatures: ['Bomb', 'Throw Anything'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Breath Mastery',
        level: 1,
        description:
          'At 1st level, an internal alchemist can hold his breath for a number of hours equal to his Constitution modifier (minimum 1) before risking suffocation. He also gains immunity to inhaled poisons while holding his breath.',
        effects: [],
      },
      {
        name: 'Disease Resistance',
        level: 3,
        description:
          'At 3rd level, an internal alchemist gains a +2 bonus on all saving throws against disease. This bonus increases to +4 at 7th level and immunity at 9th level.',
        effects: [],
      },
      {
        name: 'Uncanny Dodge',
        level: 6,
        description:
          'At 6th level, an internal alchemist gains uncanny dodge, as the rogue class feature. He retains his Dexterity bonus to AC even when flat-footed.',
        effects: [],
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 10,
        description:
          'At 10th level, an internal alchemist gains improved uncanny dodge. He can no longer be flanked unless the flanking creature has at least 4 more rogue levels than the alchemist has alchemist levels.',
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 13. Mindchemist
  // ──────────────────────────────────────────────
  {
    name: 'Mindchemist',
    className: 'Alchemist',
    description:
      'A mindchemist can reach incredible levels of mental acuity by concocting a cognatogen that empowers his intellectual faculties at the expense of his physical form.',
    replacedFeatures: ['Mutagen', 'Poison Use', 'Persistent Mutagen'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Cognatogen',
        level: 1,
        description:
          'At 1st level, a mindchemist learns to create a cognatogen. A cognatogen grants a +2 alchemical bonus to one mental ability score and a -2 penalty to a corresponding physical ability score. It otherwise functions like a mutagen. At 12th level the bonus increases to +4 and at 16th level to +6.',
        effects: [],
      },
      {
        name: 'Perfect Recall',
        level: 2,
        description:
          'At 2nd level, a mindchemist has honed his memory. He adds his Intelligence bonus on Knowledge skill checks in addition to any other applicable ability modifier. He can also retry any Knowledge skill check he has previously failed.',
        effects: [],
      },
      {
        name: 'Languages of the Mind',
        level: 10,
        description:
          'At 10th level, a mindchemist can communicate telepathically with any creature within 100 feet that has a language.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 14. Preservationist
  // ──────────────────────────────────────────────
  {
    name: 'Preservationist',
    className: 'Alchemist',
    description:
      'Some alchemists are obsessed with collecting and preserving specimens of exotic creatures. These preservationists store bottled animals and monsters that they can release in combat.',
    replacedFeatures: [
      'Poison Resistance +2',
      'Poison Resistance +4',
      'Poison Resistance +6',
      'Poison Use',
      'Poison Immunity',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Bottled Ally I',
        level: 2,
        description:
          "At 2nd level, a preservationist adds summon nature's ally I to his formula list as a 1st-level extract. He can prepare this extract by imbuing a bottle with alchemical reagents and a small piece of the desired creature.",
        effects: [],
      },
      {
        name: 'Bottled Ally II',
        level: 5,
        description:
          "At 5th level, the preservationist adds summon nature's ally III to his formula list as a 2nd-level extract.",
        effects: [],
      },
      {
        name: 'Bottled Ally III',
        level: 8,
        description:
          "At 8th level, the preservationist adds summon nature's ally V to his formula list as a 3rd-level extract.",
        effects: [],
      },
      {
        name: 'Bottled Ally IV',
        level: 10,
        description:
          "At 10th level, the preservationist adds summon nature's ally VII to his formula list as a 4th-level extract.",
        effects: [],
      },
      {
        name: 'Bottled Ally V',
        level: 14,
        description:
          "At 14th level, the preservationist adds summon nature's ally IX to his formula list as a 5th-level extract.",
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 15. Psychonaut
  // ──────────────────────────────────────────────
  {
    name: 'Psychonaut',
    className: 'Alchemist',
    description:
      'A psychonaut uses his alchemy to expand his consciousness, exploring altered states and transcendent experiences to gain supernatural insights.',
    replacedFeatures: [
      'Poison Resistance +2',
      'Poison Resistance +4',
      'Poison Resistance +6',
      'Poison Use',
      'Poison Immunity',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Psychic Sensitivity',
        level: 2,
        description:
          'At 2nd level, a psychonaut can use detect thoughts as a spell-like ability once per day, using his alchemist level as the caster level.',
        effects: [],
      },
      {
        name: 'Psychic Adept',
        level: 5,
        description:
          'At 5th level, a psychonaut adds a number of divination spells to his formula list: augury (2nd), clairaudience/clairvoyance (3rd), divination (4th), and telepathy (5th).',
        effects: [],
      },
      {
        name: 'Remote Consciousness',
        level: 8,
        description:
          'At 8th level, a psychonaut can project his consciousness, gaining the effect of arcane eye once per day as a spell-like ability.',
        effects: [],
      },
      {
        name: 'Greater Psychic Adept',
        level: 10,
        description:
          'At 10th level, a psychonaut adds contact other plane, dream, and sending to his formula list.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 16. Rage Chemist
  // ──────────────────────────────────────────────
  {
    name: 'Rage Chemist',
    className: 'Alchemist',
    description:
      'Some alchemists create mutagens that tap into a primal fury, becoming unreasoning brutes when their mutagens are in effect. These rage chemists sacrifice their intellect for raw power.',
    replacedFeatures: [
      'Poison Resistance +2',
      'Poison Resistance +4',
      'Poison Resistance +6',
      'Poison Use',
      'Poison Immunity',
    ],
    modifiedFeatures: ['Mutagen'],
    newFeatures: [
      {
        name: 'Rage Mutagen',
        level: 2,
        description:
          'At 2nd level, whenever a rage chemist uses his mutagen, he gains a +2 morale bonus on melee attack rolls and melee damage rolls, but takes a -2 penalty to AC. While the mutagen is in effect, the rage chemist can make only melee attacks.',
        effects: [],
      },
      {
        name: 'Sturdy Rage',
        level: 6,
        description:
          'At 6th level, a rage chemist gains temporary hit points equal to his alchemist level when under the effect of his rage mutagen. These stack with the temporary hit points from the mutagen itself.',
        effects: [],
      },
      {
        name: 'Lumbering Rage',
        level: 10,
        description:
          "At 10th level, a rage chemist's speed is increased by 10 feet when under the effects of his rage mutagen.",
        effects: [],
      },
      {
        name: 'Furious Mutagen',
        level: 14,
        description:
          "At 14th level, a rage chemist's rage mutagen grants a +4 morale bonus on melee attack and damage rolls, and the AC penalty is reduced to -1.",
        effects: [],
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 17. Reanimator
  // ──────────────────────────────────────────────
  {
    name: 'Reanimator',
    className: 'Alchemist',
    description:
      'A reanimator is an alchemist who has discovered how to infuse dead bodies with a semblance of life. He creates undead servants using alchemy rather than necromantic magic.',
    replacedFeatures: ['Bomb', 'Throw Anything', 'Poison Use'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Simple Reanimation',
        level: 1,
        description:
          'At 1st level, a reanimator can create a single undead creature using an extract. He can reanimate a Small or Medium humanoid corpse as a zombie. The zombie persists for 24 hours or until destroyed. He can maintain a number of reanimated creatures equal to his Intelligence modifier.',
        effects: [],
      },
      {
        name: 'Create Undead',
        level: 8,
        description:
          'At 8th level, a reanimator adds create undead to his formula list as a 3rd-level extract. He can create skeletons and zombies without need for an onyx gem component.',
        effects: [],
      },
      {
        name: 'Create Greater Undead',
        level: 14,
        description:
          'At 14th level, a reanimator adds create greater undead to his formula list as a 5th-level extract. He can create shadows, wraiths, spectres, or devourers.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 18. Sacrament Alchemist
  // ──────────────────────────────────────────────
  {
    name: 'Sacrament Alchemist',
    className: 'Alchemist',
    description:
      'A sacrament alchemist blends faith and alchemy, using divine principles to guide his experiments. He views his extracts as sacred blessings bestowed through alchemical understanding.',
    replacedFeatures: ['Brew Potion', 'Poison Resistance', 'Poison Use', 'Poison Immunity'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Divine Inspiration',
        level: 1,
        description:
          'A sacrament alchemist adds a number of cleric spells to his formula list: bless (1st), aid (2nd), prayer (3rd), blessing of fervor (4th), and cleanse (5th). He uses his Intelligence modifier for these extracts.',
        effects: [],
      },
      {
        name: 'Free Healing',
        level: 2,
        description:
          'At 2nd level, a sacrament alchemist can use the lay on hands ability as a paladin of his alchemist level -1. This heals 1d6 hit points per two effective paladin levels.',
        effects: [],
      },
      {
        name: 'Blessed Bombs',
        level: 5,
        description:
          "At 5th level, the sacrament alchemist's bombs deal extra damage to undead and evil outsiders equal to the alchemist's Intelligence modifier.",
        effects: [],
      },
      {
        name: 'Channel Energy',
        level: 10,
        description:
          'At 10th level, a sacrament alchemist can channel positive energy as a cleric of his alchemist level -3. He can do this a number of times per day equal to 3 + his Charisma modifier.',
        effects: [],
      },
    ],
    source: "Healer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 19. Toxicant
  // ──────────────────────────────────────────────
  {
    name: 'Toxicant',
    className: 'Alchemist',
    description:
      'A toxicant is an alchemist who specializes in creating and using poisons, replacing his mutagen with a toxic secretion that coats his weapons or can be used as a touch attack.',
    replacedFeatures: ['Mutagen', 'Persistent Mutagen'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Toxic Secretion',
        level: 1,
        description:
          "At 1st level, a toxicant can create a poisonous secretion as a standard action. This toxin can be applied to a weapon as a move action or delivered as a melee touch attack. The poison deals 1d2 Constitution damage per round for 1 round per 2 alchemist levels (minimum 1 round). The DC is 10 + half the alchemist's level + his Intelligence modifier. Frequency 1/round, cure 1 save.",
        effects: [],
      },
      {
        name: 'Toxic Touch',
        level: 1,
        description:
          'A toxicant can deliver his toxic secretion as a melee touch attack that does not provoke attacks of opportunity.',
        effects: [],
      },
      {
        name: 'Improved Toxic Secretion',
        level: 5,
        description:
          'At 5th level, a toxicant can choose to have his toxic secretion deal Dexterity or Wisdom damage instead of Constitution damage. At 9th level, he can select Strength, Intelligence, or Charisma damage. At 13th level, his poison can deal 1d4 ability damage.',
        effects: [],
      },
      {
        name: 'Sticky Toxin',
        level: 14,
        description:
          "At 14th level, a toxicant's poison applied to a weapon remains potent for a number of hits equal to his Intelligence modifier.",
        effects: [],
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 20. Tinkerer
  // ──────────────────────────────────────────────
  {
    name: 'Tinkerer',
    className: 'Alchemist',
    description:
      'Tinkerers are alchemists who focus on building mechanical constructs rather than mixing potions. They create small clockwork familiars and eventually larger constructs to serve them.',
    replacedFeatures: ['Brew Potion', 'Mutagen', 'Persistent Mutagen'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Clockwork Familiar',
        level: 1,
        description:
          "At 1st level, a tinkerer gains a clockwork familiar that functions as the Improved Familiar feat. The familiar is a construct with the clockwork subtype. It has hit points equal to half the tinkerer's total and uses the tinkerer's base attack bonus and saving throw bonuses.",
        effects: [],
      },
      {
        name: 'Repair Construct',
        level: 1,
        description:
          'At 1st level, a tinkerer can repair his clockwork familiar by spending 10 minutes and expending an extract slot. The familiar regains 1d6 hit points per extract level spent.',
        effects: [],
      },
      {
        name: 'Clockwork Upgrade',
        level: 4,
        description:
          'At 4th level and every 4 levels thereafter, a tinkerer can add an upgrade to his clockwork familiar, granting it additional abilities such as improved natural armor, flight, extra arms, or weapon mounts.',
        effects: [],
      },
      {
        name: 'Greater Clockwork Familiar',
        level: 14,
        description:
          "At 14th level, a tinkerer's clockwork familiar becomes Medium-sized and gains improved combat capabilities, including increased Strength and natural armor.",
        effects: [],
      },
    ],
    source: 'Alchemy Manual',
  },

  // ──────────────────────────────────────────────
  // 21. Vivisectionist
  // ──────────────────────────────────────────────
  {
    name: 'Vivisectionist',
    className: 'Alchemist',
    description:
      'A vivisectionist studies living creatures by cutting them open, gaining intimate knowledge of anatomy that allows him to deal deadly sneak attacks. He gives up his bomb ability in exchange for sneak attack damage.',
    replacedFeatures: ['Bomb', 'Throw Anything'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sneak Attack',
        level: 1,
        description:
          'At 1st level, a vivisectionist gains the sneak attack ability as a rogue, dealing an extra 1d6 damage to targets denied their Dexterity bonus to AC or flanked. This damage increases by 1d6 at 3rd level and every 2 levels thereafter (2d6 at 3rd, 3d6 at 5th, etc.).',
        effects: [],
      },
      {
        name: "Torturer's Eye",
        level: 2,
        description:
          'At 2nd level, a vivisectionist can use deathwatch at will as a spell-like ability. This replaces the 2nd-level discovery.',
        effects: [],
      },
      {
        name: 'Cruel Anatomist',
        level: 3,
        description:
          'At 3rd level, a vivisectionist may use his Knowledge (nature) skill bonus in place of his Heal skill bonus.',
        effects: [],
      },
      {
        name: 'Bleeding Attack',
        level: 5,
        description:
          'At 5th level, a vivisectionist automatically gains the bleeding attack rogue talent as a bonus talent, causing living creatures damaged by his sneak attack to take 1 point of bleed damage per die of sneak attack.',
        effects: [],
      },
      {
        name: 'Crippling Strike',
        level: 17,
        description:
          'At 17th level, a vivisectionist automatically gains the crippling strike advanced rogue talent as a bonus talent.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 22. Winged Marauder
  // ──────────────────────────────────────────────
  {
    name: 'Winged Marauder',
    className: 'Alchemist',
    description:
      'A winged marauder is a goblin alchemist who has bonded with a dire bat mount, raining down alchemical destruction from the skies while cackling maniacally.',
    replacedFeatures: [
      'Mutagen',
      'Poison Resistance',
      'Poison Use',
      'Poison Immunity',
      'Swift Poisoning',
      'Persistent Mutagen',
    ],
    modifiedFeatures: ['Bomb'],
    newFeatures: [
      {
        name: 'Dire Bat',
        level: 1,
        description:
          'At 1st level, a winged marauder gains a dire bat animal companion as a druid of his alchemist level. He does not gain a mutagen.',
        effects: [],
      },
      {
        name: 'Sipping Pet',
        level: 2,
        description:
          "At 2nd level, a winged marauder's dire bat can drink extracts and benefit from the infusion discovery, even though it is not the alchemist. This replaces poison resistance.",
        effects: [],
      },
      {
        name: 'Stink Bomb',
        level: 6,
        description:
          'At 6th level, a winged marauder gains the stink bomb discovery as a bonus discovery, even if he does not meet the prerequisites.',
        effects: [],
      },
      {
        name: 'Greater Dire Bat',
        level: 14,
        description:
          "At 14th level, the winged marauder's dire bat grows stronger, gaining improved combat stats and the ability to carry the marauder and an ally aloft without difficulty.",
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 23. Bramble Brewer
  // ──────────────────────────────────────────────
  {
    name: 'Bramble Brewer',
    className: 'Alchemist',
    description:
      'A bramble brewer is a half-elf alchemist who has learned to create thorny mutagens and bramble-laced bombs, harnessing plant growth through alchemy.',
    replacedFeatures: [
      'Poison Resistance +2',
      'Poison Resistance +4',
      'Poison Resistance +6',
      'Poison Use',
      'Poison Immunity',
    ],
    modifiedFeatures: ['Mutagen', 'Bomb'],
    newFeatures: [
      {
        name: 'Bramblebrew Mutagen',
        level: 1,
        description:
          'When a bramble brewer drinks his mutagen, thorny brambles grow from his body. These function as armor spikes that deal 1d6 piercing damage. The brambles also grant a +2 natural armor bonus.',
        effects: [],
      },
      {
        name: 'Bramble Bomb',
        level: 2,
        description:
          'At 2nd level, a bramble brewer can create bombs that produce a 5-foot patch of brambles on impact. These brambles function as caltrops. At 6th level, the patch increases to a 10-foot radius.',
        effects: [],
      },
      {
        name: 'Thorny Enhancement',
        level: 5,
        description:
          "At 5th level, a bramble brewer's bramble armor spikes deal 1d8 damage and provide a +4 natural armor bonus while his mutagen is in effect.",
        effects: [],
      },
      {
        name: 'Greater Bramblebrew',
        level: 10,
        description:
          'At 10th level, a bramble brewer gains woodland stride while his mutagen is active, and his armor spikes deal 1d10 damage.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 24. Trap Breaker
  // ──────────────────────────────────────────────
  {
    name: 'Trap Breaker',
    className: 'Alchemist',
    description:
      'A trap breaker is a kobold alchemist who specializes in creating, disabling, and bypassing traps, using alchemical expertise to deal with mechanical and magical dangers.',
    replacedFeatures: ['Brew Potion', 'Poison Resistance', 'Poison Use', 'Poison Immunity'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Trapfinding',
        level: 1,
        description:
          'A trap breaker gains the trapfinding ability, adding half his alchemist level to Perception checks to find traps and Disable Device checks. He can use Disable Device to disarm magical traps.',
        effects: [],
      },
      {
        name: 'Trap Sense',
        level: 2,
        description:
          'At 2nd level, a trap breaker gains trap sense +1, gaining a bonus on Reflex saves against traps and a dodge bonus to AC against attacks by traps. This bonus increases by +1 every 2 levels (to a maximum of +9 at 20th level).',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 25. Plague Bringer
  // ──────────────────────────────────────────────
  {
    name: 'Plague Bringer',
    className: 'Alchemist',
    description:
      'A plague bringer is a ratfolk alchemist who specializes in spreading sickness and disease. He studies plagues and pestilences, becoming a vector for terrible illnesses.',
    replacedFeatures: [
      'Throw Anything',
      'Poison Resistance +4',
      'Poison Resistance +6',
      'Poison Immunity',
    ],
    modifiedFeatures: ['Poison Resistance', 'Poison Use'],
    newFeatures: [
      {
        name: 'Disease Resistance',
        level: 2,
        description:
          'At 2nd level, a plague bringer gains a +2 bonus on saving throws against disease. This bonus increases to +4 at 5th level and immunity at 8th level.',
        effects: [],
      },
      {
        name: 'Plague Vial',
        level: 1,
        description:
          'A plague bringer can create special plague vials as a standard action. A plague vial lasts until used or until the alchemist creates a new one. A creature struck by a plague vial must make a Fortitude save or contract a disease chosen by the plague bringer.',
        effects: [],
      },
      {
        name: 'Spreading Plague',
        level: 14,
        description:
          "At 14th level, a plague bringer's plague vials become more virulent. Any creature that fails its save against his plague vial can spread the disease through physical contact.",
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 26. Construct Rider
  // ──────────────────────────────────────────────
  {
    name: 'Construct Rider',
    className: 'Alchemist',
    description:
      'A construct rider creates an alchemical homunculus mount rather than learning to brew potions or use poisons, riding it into battle.',
    replacedFeatures: ['Brew Potion', 'Mutagen', 'Poison Use', 'Persistent Mutagen'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Alchemical Mount',
        level: 1,
        description:
          "At 1st level, a construct rider gains an alchemical construct mount. This mount functions as a druid's animal companion (using the horse statistics) with the construct type. It is made of alchemically treated materials and is healed by repair spells rather than cure spells.",
        effects: [],
      },
      {
        name: 'Charge Bomb',
        level: 1,
        description:
          "At 1st level, a construct rider can direct his mount to charge and deliver a bomb attack at the end of the charge. This uses the mount's movement but the rider's bomb attack.",
        effects: [],
      },
      {
        name: 'Alchemical Upgrade',
        level: 5,
        description:
          'At 5th level and every 4 levels thereafter, a construct rider can add alchemical upgrades to his mount, such as increased speed, natural armor, or elemental resistance.',
        effects: [],
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 27. Crimson Chymist
  // ──────────────────────────────────────────────
  {
    name: 'Crimson Chymist',
    className: 'Alchemist',
    description:
      'Crimson chymists are Red Mantis assassin-alchemists who create sacrament extracts infused with the power of their deity, using alchemy to enhance their assassination techniques.',
    replacedFeatures: [
      'Brew Potion',
      'Poison Resistance',
      'Poison Use',
      'Swift Poisoning',
      'Poison Immunity',
    ],
    modifiedFeatures: ['Mutagen'],
    newFeatures: [
      {
        name: 'Blood Extract',
        level: 1,
        description:
          'A crimson chymist can extract blood from a recently slain creature as a full-round action. He can use this blood in place of material components for his extracts and to enhance his mutagen.',
        effects: [],
      },
      {
        name: 'Mantis Mutagen',
        level: 1,
        description:
          'When a crimson chymist drinks his mutagen, he takes on insectile features, gaining a +2 bonus to natural armor and a pair of secondary claw attacks that deal 1d4 damage each.',
        effects: [],
      },
      {
        name: 'Sacramental Cognatogen',
        level: 3,
        description:
          'At 3rd level, a crimson chymist can create a special cognatogen using blood extracts, granting a +2 bonus to Intelligence and a +1 bonus on attack rolls made to confirm critical hits.',
        effects: [],
      },
      {
        name: 'Death Attack',
        level: 10,
        description:
          'At 10th level, a crimson chymist can study a target for 3 rounds and then make a death attack, as the assassin prestige class feature.',
        effects: [],
      },
    ],
    source: 'Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 28. Metamorph
  // ──────────────────────────────────────────────
  {
    name: 'Metamorph',
    className: 'Alchemist',
    description:
      'A metamorph eschews traditional alchemy and bombs, focusing entirely on mastering mutagen-based transformations. His mutagen grants shapeshifting abilities rivaling those of druid wild shape.',
    replacedFeatures: ['Bomb', 'Throw Anything', 'Brew Potion', 'Swift Alchemy', 'Instant Alchemy'],
    modifiedFeatures: ['Mutagen'],
    newFeatures: [
      {
        name: 'Shapeshifter Mutagen',
        level: 1,
        description:
          'At 1st level, when a metamorph drinks his mutagen, he can assume the form of a Small or Medium humanoid, as alter self. He can maintain this form for 10 minutes per alchemist level.',
        effects: [],
      },
      {
        name: 'Adaptive Physiology',
        level: 3,
        description:
          'At 3rd level, a metamorph can gain one of the following when he drinks his mutagen: climb speed 30 ft, swim speed 30 ft, darkvision 60 ft, or scent. At 7th level, he can choose two of these. At 11th, three.',
        effects: [],
      },
      {
        name: 'Greater Shapeshifter Mutagen',
        level: 5,
        description:
          'At 5th level, a metamorph can assume the form of animals (as beast shape I) when drinking his mutagen. At 9th level, this improves to beast shape II, at 13th to beast shape III, and at 17th to beast shape IV.',
        effects: [],
      },
      {
        name: 'Elemental Forms',
        level: 11,
        description:
          'At 11th level, a metamorph can assume elemental forms (as elemental body I) when drinking his mutagen. This improves to elemental body II at 13th level, III at 15th, and IV at 17th.',
        effects: [],
      },
      {
        name: 'Giant Forms',
        level: 15,
        description:
          'At 15th level, a metamorph can assume the form of a Large or Huge giant (as giant form I). At 17th level, this improves to giant form II.',
        effects: [],
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 29. Promethean Alchemist
  // ──────────────────────────────────────────────
  {
    name: 'Promethean Alchemist',
    className: 'Alchemist',
    description:
      'Promethean alchemists focus on the creation of artificial life, building homunculus companions and eventually creating life-like constructs.',
    replacedFeatures: ['Mutagen', 'Poison Use', 'Swift Poisoning', 'Persistent Mutagen'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Homunculus Companion',
        level: 1,
        description:
          "At 1st level, a promethean alchemist gains a homunculus companion. The homunculus is a construct that grows in power as the alchemist gains levels. It uses the alchemist's base attack bonus and saving throw modifiers and gains hit dice as the alchemist levels.",
        effects: [],
      },
      {
        name: 'Homunculus Link',
        level: 1,
        description:
          'At 1st level, the promethean alchemist gains an empathic link with his homunculus, allowing him to communicate emotions and share senses at short range.',
        effects: [],
      },
      {
        name: 'Improved Homunculus',
        level: 7,
        description:
          'At 7th level, the promethean alchemist can add additional abilities to his homunculus, including extra limbs, natural attacks, and special movement modes.',
        effects: [],
      },
      {
        name: 'Greater Homunculus',
        level: 14,
        description:
          "At 14th level, the homunculus companion gains the ability to deliver the alchemist's extracts and use simple alchemical items on its own.",
        effects: [],
      },
    ],
    source: 'Alchemy Manual',
  },

  // ──────────────────────────────────────────────
  // 30. Royal Alchemist
  // ──────────────────────────────────────────────
  {
    name: 'Royal Alchemist',
    className: 'Alchemist',
    description:
      'A royal alchemist serves as a personal advisor and court chemist to a ruler, specializing in antidotes, detection of poisons, and subtle social manipulation through alchemy.',
    replacedFeatures: ['Bomb', 'Throw Anything', 'Swift Alchemy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Royal Taster',
        level: 1,
        description:
          "At 1st level, a royal alchemist can identify poisons and toxins by taste with a Craft (alchemy) check (DC = the poison's save DC). He gains a +2 bonus on saves against ingested poisons.",
        effects: [],
      },
      {
        name: 'Social Alchemy',
        level: 1,
        description:
          'A royal alchemist adds his Intelligence modifier to Diplomacy and Sense Motive checks in addition to the normal ability modifier.',
        effects: [],
      },
      {
        name: "Courtier's Draught",
        level: 3,
        description:
          'At 3rd level, a royal alchemist can create special draughts that provide bonuses on Bluff, Diplomacy, or Intimidate checks equal to half his alchemist level for 1 hour.',
        effects: [],
      },
      {
        name: 'Neutralize Toxin',
        level: 6,
        description:
          'At 6th level, a royal alchemist can use neutralize poison as a spell-like ability a number of times per day equal to his Intelligence modifier.',
        effects: [],
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 31. Wasteland Blightbreaker
  // ──────────────────────────────────────────────
  {
    name: 'Wasteland Blightbreaker',
    className: 'Alchemist',
    description:
      'Wasteland blightbreakers specialize in combating the effects of magical waste and corrupted lands, using alchemy to cleanse blighted areas and cure those afflicted by supernatural corruption.',
    replacedFeatures: ['Poison Resistance', 'Poison Use', 'Poison Immunity', 'Swift Poisoning'],
    modifiedFeatures: ['Bomb'],
    newFeatures: [
      {
        name: 'Purifying Bomb',
        level: 1,
        description:
          "A wasteland blightbreaker's bombs deal extra damage against aberrations and oozes equal to his Intelligence modifier. The splash area of a purifying bomb temporarily neutralizes environmental hazards for 1 round.",
        effects: [],
      },
      {
        name: 'Corruption Resistance',
        level: 2,
        description:
          'At 2nd level, a wasteland blightbreaker gains a +2 bonus on saving throws against curses, supernatural diseases, and corruption effects. This bonus increases by +2 at 5th level and every 3 levels thereafter.',
        effects: [],
      },
      {
        name: 'Cleansing Touch',
        level: 10,
        description:
          'At 10th level, a wasteland blightbreaker can remove curses and corruption from a creature by touch, expending an extract slot. This functions as remove curse using his alchemist level as the caster level.',
        effects: [],
      },
    ],
    source: 'People of the Wastes',
  },

  // ──────────────────────────────────────────────
  // 32. Alchemical Sapper
  // ──────────────────────────────────────────────
  {
    name: 'Alchemical Sapper',
    className: 'Alchemist',
    description:
      'An alchemical sapper focuses on siege warfare and demolitions, creating powerful explosive charges and incendiary devices to destroy fortifications and enemy emplacements.',
    replacedFeatures: ['Brew Potion', 'Poison Resistance', 'Poison Use', 'Poison Immunity'],
    modifiedFeatures: ['Bomb'],
    newFeatures: [
      {
        name: 'Demolition Bomb',
        level: 1,
        description:
          "An alchemical sapper's bombs deal double damage to unattended objects and constructions. He can also plant bombs as charges with delayed fuses of up to 1 round per alchemist level.",
        effects: [],
      },
      {
        name: "Sapper's Charge",
        level: 2,
        description:
          'At 2nd level, an alchemical sapper can create special explosive charges. Placing a charge takes 1 minute and it deals 2d6 + Intelligence modifier damage in a 10-foot radius. The damage increases by 1d6 per 2 alchemist levels.',
        effects: [],
      },
      {
        name: 'Fortification Breaker',
        level: 5,
        description:
          "At 5th level, an alchemical sapper's bombs and charges ignore hardness up to his alchemist level when damaging objects.",
        effects: [],
      },
      {
        name: 'Controlled Detonation',
        level: 10,
        description:
          'At 10th level, an alchemical sapper can shape the blast of his charges, choosing which 5-foot squares within the blast radius are affected.',
        effects: [],
      },
    ],
    source: 'Heroes of the Darklands',
  },

  // ──────────────────────────────────────────────
  // 33. Aqua Chymist
  // ──────────────────────────────────────────────
  {
    name: 'Aqua Chymist',
    className: 'Alchemist',
    description:
      'Aqua chymists are alchemists who have adapted their craft to function underwater, creating bombs that work in aquatic environments and mutagens that grant aquatic adaptations.',
    replacedFeatures: ['Poison Resistance', 'Poison Use', 'Poison Immunity'],
    modifiedFeatures: ['Bomb', 'Mutagen'],
    newFeatures: [
      {
        name: 'Aquatic Bomb',
        level: 1,
        description:
          "An aqua chymist's bombs function normally underwater, dealing full damage without penalty. The bombs deal cold or sonic damage (chosen when created) instead of fire.",
        effects: [],
      },
      {
        name: 'Amphibious Mutagen',
        level: 1,
        description:
          'When an aqua chymist drinks his mutagen, he gains a swim speed of 30 feet and the ability to breathe underwater for the duration of the mutagen.',
        effects: [],
      },
      {
        name: 'Depth Tolerance',
        level: 2,
        description:
          'At 2nd level, an aqua chymist gains immunity to pressure damage from deep water. He also gains a +2 bonus on saves against cold effects, increasing by +1 every 3 levels.',
        effects: [],
      },
      {
        name: 'Aquatic Adaptation',
        level: 10,
        description:
          "At 10th level, an aqua chymist's amphibious mutagen also grants him blindsense 30 feet while underwater.",
        effects: [],
      },
    ],
    source: 'Blood of the Sea',
  },

  // ──────────────────────────────────────────────
  // 34. Herbalist
  // ──────────────────────────────────────────────
  {
    name: 'Herbalist',
    className: 'Alchemist',
    description:
      'An herbalist forgoes the more destructive aspects of alchemy, focusing instead on natural remedies, poultices, and herbal concoctions that heal and restore.',
    replacedFeatures: ['Bomb', 'Throw Anything', 'Poison Use'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Herbal Remedy',
        level: 1,
        description:
          'An herbalist can create herbal remedies as a standard action. A remedy heals 1d8 + Intelligence modifier hit points. He can create a number of remedies per day equal to his alchemist level + his Intelligence modifier. The healing increases by 1d8 at 3rd level and every 2 levels thereafter.',
        effects: [],
      },
      {
        name: "Nature's Knowledge",
        level: 1,
        description:
          'An herbalist adds his Intelligence modifier to Survival checks to find herbs and natural ingredients. He gains a +2 bonus on Knowledge (nature) checks.',
        effects: [],
      },
      {
        name: 'Restorative Remedy',
        level: 4,
        description:
          "At 4th level, an herbalist's remedies can also remove the fatigued, sickened, or shaken condition. At 8th level, they can remove exhausted, nauseated, or frightened. At 12th level, they can remove ability damage (1d4 points to one ability score).",
        effects: [],
      },
    ],
    source: 'Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // 35. Eldritch Poisoner
  // ──────────────────────────────────────────────
  {
    name: 'Eldritch Poisoner',
    className: 'Alchemist',
    description:
      'An eldritch poisoner combines spellcraft and toxicology to create magical poisons far more deadly than their mundane counterparts.',
    replacedFeatures: ['Brew Potion', 'Mutagen', 'Persistent Mutagen'],
    modifiedFeatures: ['Poison Use'],
    newFeatures: [
      {
        name: 'Arcanotoxin',
        level: 1,
        description:
          'At 1st level, an eldritch poisoner can create an arcanotoxin as a standard action. This magical poison can be applied to a weapon or delivered as a touch attack. The DC is 10 + half alchemist level + Intelligence modifier. The arcanotoxin deals 1d3 Wisdom damage and causes the target to become dazzled for 1 round.',
        effects: [],
      },
      {
        name: 'Toxic Magic',
        level: 2,
        description:
          'At 2nd level, an eldritch poisoner can infuse his extracts with poison. When a creature drinks one of his infused extracts (willingly or not), it must also save against the arcanotoxin.',
        effects: [],
      },
      {
        name: 'Improved Arcanotoxin',
        level: 6,
        description:
          'At 6th level, the eldritch poisoner can choose additional effects for his arcanotoxin: confusion for 1 round, sleep for 1 round, or blindness for 1 round. At 10th level, he can choose two effects. At 14th, three.',
        effects: [],
      },
      {
        name: 'Envenom Spell',
        level: 10,
        description:
          'At 10th level, an eldritch poisoner can add his arcanotoxin to any spell or extract with a range of touch. The target must save against both the spell and the poison.',
        effects: [],
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 36. Alchemical Trapper
  // ──────────────────────────────────────────────
  {
    name: 'Alchemical Trapper',
    className: 'Alchemist',
    description:
      'An alchemical trapper specializes in creating alchemical traps and snares, using his knowledge to lay waste to those who enter his prepared areas.',
    replacedFeatures: ['Brew Potion', 'Poison Resistance', 'Poison Use', 'Poison Immunity'],
    modifiedFeatures: ['Bomb'],
    newFeatures: [
      {
        name: 'Alchemical Trap',
        level: 1,
        description:
          'An alchemical trapper can set an alchemical bomb as a trap as a full-round action. The bomb detonates when a creature enters the trapped square. The trapper can have a number of active traps equal to his Intelligence modifier.',
        effects: [],
      },
      {
        name: 'Trapfinding',
        level: 2,
        description:
          'At 2nd level, an alchemical trapper gains the trapfinding ability, adding half his alchemist level to Perception checks to find traps and to Disable Device checks.',
        effects: [],
      },
      {
        name: 'Improved Trap',
        level: 5,
        description:
          "At 5th level, the alchemical trapper's traps can apply discovery effects to their bombs. The trap can also be set with a delayed trigger of up to 1 hour per level.",
        effects: [],
      },
      {
        name: 'Master Trapper',
        level: 10,
        description:
          "At 10th level, an alchemical trapper's traps are nearly undetectable, requiring a Perception check with a DC equal to 15 + his alchemist level + his Intelligence modifier to find.",
        effects: [],
      },
    ],
    source: 'Kobolds of Golarion',
  },

  // ──────────────────────────────────────────────
  // 37. Oenopion Researcher
  // ──────────────────────────────────────────────
  {
    name: 'Oenopion Researcher',
    className: 'Alchemist',
    description:
      'Oenopion researchers are alchemists from the city of Oenopion who focus on ooze-based experiments, creating special mutagens that grant ooze-like properties.',
    replacedFeatures: ['Poison Resistance', 'Poison Use', 'Swift Poisoning', 'Poison Immunity'],
    modifiedFeatures: ['Mutagen'],
    newFeatures: [
      {
        name: 'Ooze Mutagen',
        level: 1,
        description:
          'When an Oenopion researcher drinks his mutagen, he gains some properties of oozes. He is immune to critical hits and sneak attacks for the duration. However, he takes a -2 penalty to AC and cannot wear armor while the mutagen is active.',
        effects: [],
      },
      {
        name: 'Amorphous Body',
        level: 3,
        description:
          'At 3rd level, while his mutagen is active, the researcher can squeeze through spaces as though he were one size category smaller.',
        effects: [],
      },
      {
        name: 'Acidic Touch',
        level: 5,
        description:
          "At 5th level, while his mutagen is active, the researcher's unarmed strikes and natural attacks deal an additional 1d6 acid damage.",
        effects: [],
      },
      {
        name: 'Split',
        level: 10,
        description:
          'At 10th level, while his mutagen is active, if the researcher would be killed by a slashing weapon, he instead splits into two copies of himself, each at half his hit points.',
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting',
  },

  // ──────────────────────────────────────────────
  // 38. Dimensional Excavator
  // ──────────────────────────────────────────────
  {
    name: 'Dimensional Excavator',
    className: 'Alchemist',
    description:
      'A dimensional excavator uses alchemy to breach the boundaries between planes, creating extracts that tear holes in reality and bombs that scatter their targets across dimensions.',
    replacedFeatures: ['Poison Resistance', 'Poison Use', 'Poison Immunity', 'Swift Poisoning'],
    modifiedFeatures: ['Bomb'],
    newFeatures: [
      {
        name: 'Planar Bomb',
        level: 1,
        description:
          "A dimensional excavator's bombs can be attuned to a specific plane. When attuned, his bombs deal extra damage to outsiders native to that plane equal to his Intelligence modifier.",
        effects: [],
      },
      {
        name: 'Dimensional Breach',
        level: 3,
        description:
          'At 3rd level, a dimensional excavator adds dimension door to his formula list as a 4th-level extract.',
        effects: [],
      },
      {
        name: 'Extraplanar Extraction',
        level: 5,
        description:
          'At 5th level, the dimensional excavator can use his bombs to create brief dimensional rifts. Creatures hit by his bomb must make a Will save or be dazed for 1 round as they briefly phase between planes.',
        effects: [],
      },
      {
        name: 'Greater Planar Breach',
        level: 10,
        description:
          'At 10th level, the dimensional excavator adds plane shift to his formula list as a 5th-level extract.',
        effects: [],
      },
    ],
    source: "Plane-Hopper's Handbook",
  },

  // ──────────────────────────────────────────────
  // 39. Gloom Chymist
  // ──────────────────────────────────────────────
  {
    name: 'Gloom Chymist',
    className: 'Alchemist',
    description:
      'A gloom chymist draws upon shadow magic to fuel his alchemy, creating bombs of solidified shadow and mutagens that let him meld with darkness.',
    replacedFeatures: ['Poison Resistance', 'Poison Use', 'Poison Immunity'],
    modifiedFeatures: ['Bomb', 'Mutagen'],
    newFeatures: [
      {
        name: 'Shadow Bomb',
        level: 1,
        description:
          "A gloom chymist's bombs deal negative energy damage instead of fire damage and create an area of dim light in the splash area for 1 round per alchemist level.",
        effects: [],
      },
      {
        name: 'Shadow Mutagen',
        level: 1,
        description:
          'When a gloom chymist drinks his mutagen, he gains darkvision 60 feet and a +4 bonus on Stealth checks in areas of dim light or darkness.',
        effects: [],
      },
      {
        name: 'Shadow Walk',
        level: 3,
        description:
          'At 3rd level, a gloom chymist can use his shadow mutagen to move through areas of darkness as if using shadow walk for a number of rounds per day equal to his alchemist level.',
        effects: [],
      },
      {
        name: 'Umbral Form',
        level: 10,
        description:
          'At 10th level, while his mutagen is active, a gloom chymist can assume incorporeal form for 1 round per 2 alchemist levels per day. While incorporeal, he gains a deflection bonus to AC equal to his Intelligence modifier.',
        effects: [],
      },
    ],
    source: 'Blood of Shadows',
  },

  // ──────────────────────────────────────────────
  // 40. Concocter
  // ──────────────────────────────────────────────
  {
    name: 'Concocter',
    className: 'Alchemist',
    description:
      'Concocters are vishkanya alchemists who augment their innate toxicity with alchemical techniques, creating a wide variety of poisons that they can secrete naturally.',
    replacedFeatures: ['Brew Potion', 'Mutagen', 'Persistent Mutagen'],
    modifiedFeatures: ['Poison Use'],
    newFeatures: [
      {
        name: 'Natural Poisoner',
        level: 1,
        description:
          'A concocter can generate doses of his natural vishkanya venom more frequently. He can produce a number of extra doses per day equal to his Intelligence modifier.',
        effects: [],
      },
      {
        name: 'Improved Venom',
        level: 1,
        description:
          "A concocter's natural venom is more potent. The DC increases by 1 at 1st level and by an additional +1 for every 4 alchemist levels thereafter.",
        effects: [],
      },
      {
        name: 'Versatile Venom',
        level: 3,
        description:
          'At 3rd level, a concocter can alter his venom to deal Constitution, Dexterity, or Wisdom damage. At 7th level, he can add Strength or Charisma damage to the list.',
        effects: [],
      },
      {
        name: 'Envenom Weapon',
        level: 6,
        description:
          'At 6th level, a concocter can secrete his poison directly onto a held weapon as a swift action.',
        effects: [],
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 41. Ice Chemist
  // ──────────────────────────────────────────────
  {
    name: 'Ice Chemist',
    className: 'Alchemist',
    description:
      'An ice chemist has adapted his alchemical techniques to cold environments, creating bombs that deal cold damage and mutagens that grant resistance to frigid temperatures.',
    replacedFeatures: ['Poison Resistance', 'Poison Use', 'Poison Immunity'],
    modifiedFeatures: ['Bomb'],
    newFeatures: [
      {
        name: 'Frost Bomb',
        level: 1,
        description:
          "An ice chemist's bombs deal cold damage instead of fire damage. A creature struck directly by a frost bomb is staggered on its next turn (Fortitude save negates).",
        effects: [],
      },
      {
        name: 'Cold Resistance',
        level: 2,
        description:
          'At 2nd level, an ice chemist gains cold resistance 5. This increases to 10 at 5th level, 15 at 8th, and 20 at 10th level.',
        effects: [],
      },
      {
        name: 'Ice Body',
        level: 10,
        description:
          'At 10th level, an ice chemist can assume ice body (as the spell) for a number of rounds per day equal to his alchemist level.',
        effects: [],
      },
    ],
    source: 'People of the North',
  },

  // ──────────────────────────────────────────────
  // 42. Interrogator
  // ──────────────────────────────────────────────
  {
    name: 'Interrogator',
    className: 'Alchemist',
    description:
      'An interrogator specializes in extracting information through alchemically enhanced interrogation techniques, using truth serums and mind-affecting substances.',
    replacedFeatures: ['Brew Potion', 'Mutagen', 'Persistent Mutagen'],
    modifiedFeatures: ['Poison Use'],
    newFeatures: [
      {
        name: 'Truth Serum',
        level: 1,
        description:
          'At 1st level, an interrogator can create truth serums as a standard action. A creature that ingests a truth serum must make a Will save (DC 10 + half alchemist level + Intelligence modifier) or be unable to deliberately lie for 10 minutes per alchemist level.',
        effects: [],
      },
      {
        name: 'Painful Strike',
        level: 1,
        description:
          'At 1st level, an interrogator gains the ability to deal nonlethal damage with his bombs without penalty. A creature struck must make a Will save or become shaken for 1 round per 2 alchemist levels.',
        effects: [],
      },
      {
        name: 'Discern Lies',
        level: 5,
        description:
          'At 5th level, an interrogator adds discern lies to his formula list as a 3rd-level extract.',
        effects: [],
      },
      {
        name: 'Zone of Truth',
        level: 3,
        description:
          'At 3rd level, the interrogator adds zone of truth to his formula list as a 2nd-level extract.',
        effects: [],
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 43. Blood Alchemist
  // ──────────────────────────────────────────────
  {
    name: 'Blood Alchemist',
    className: 'Alchemist',
    description:
      'A blood alchemist uses his own blood as a catalyst for his alchemical creations, drawing upon his life force to enhance his extracts and bombs.',
    replacedFeatures: ['Brew Potion', 'Poison Resistance', 'Poison Use', 'Poison Immunity'],
    modifiedFeatures: ['Bomb'],
    newFeatures: [
      {
        name: 'Blood Component',
        level: 1,
        description:
          'A blood alchemist can use his own blood as a material component for extracts and bombs, taking 1 point of damage per extract or bomb level to increase the save DC by 1.',
        effects: [],
      },
      {
        name: 'Sanguine Mutagen',
        level: 1,
        description:
          'When a blood alchemist drinks his mutagen, he gains fast healing 1. This increases to fast healing 2 at 6th level, 3 at 10th, 4 at 14th, and 5 at 18th.',
        effects: [],
      },
      {
        name: 'Blood Bomb',
        level: 2,
        description:
          "At 2nd level, a blood alchemist can create bombs infused with his own blood. These bombs deal bleed damage equal to half the bomb's base damage on a direct hit.",
        effects: [],
      },
      {
        name: 'Vital Strike Bomb',
        level: 10,
        description:
          "At 10th level, a blood alchemist can sacrifice hit points equal to double the bomb's level to maximize the bomb's damage without increasing the level.",
        effects: [],
      },
    ],
    source: 'Magic Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 44. Fermenter
  // ──────────────────────────────────────────────
  {
    name: 'Fermenter',
    className: 'Alchemist',
    description:
      'A fermenter uses the art of brewing alcoholic beverages to create powerful alchemical effects, infusing drinks with potent extracts.',
    replacedFeatures: [
      'Bomb',
      'Throw Anything',
      'Poison Resistance',
      'Poison Use',
      'Poison Immunity',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Alchemical Brewing',
        level: 1,
        description:
          'A fermenter can create alchemical brews that function as extracts but can be consumed by any creature. Creating a brew takes 1 hour. The brew remains potent for 1 day per alchemist level.',
        effects: [],
      },
      {
        name: 'Intoxicating Vapors',
        level: 1,
        description:
          'At 1st level, a fermenter can create a 10-foot-radius cloud of intoxicating fumes a number of times per day equal to his Intelligence modifier. Creatures in the cloud must save or become sickened for 1 round per alchemist level.',
        effects: [],
      },
      {
        name: 'Fortifying Brew',
        level: 3,
        description:
          "At 3rd level, a fermenter's brews grant a +2 alchemical bonus on saves against fear and emotion effects for 1 hour. This increases by +1 every 3 levels.",
        effects: [],
      },
      {
        name: 'Master Brewer',
        level: 10,
        description:
          'At 10th level, a fermenter can create masterwork brews that duplicate the effects of potions of up to 3rd-level spells.',
        effects: [],
      },
    ],
    source: 'Advanced Class Origins',
  },

  // ──────────────────────────────────────────────
  // 45. Toxin Codexer
  // ──────────────────────────────────────────────
  {
    name: 'Toxin Codexer',
    className: 'Alchemist',
    description:
      'A toxin codexer catalogs and studies every known poison, compiling a comprehensive toxin codex that allows him to replicate and improve upon the deadliest venoms.',
    replacedFeatures: ['Brew Potion', 'Mutagen', 'Persistent Mutagen'],
    modifiedFeatures: ['Poison Use'],
    newFeatures: [
      {
        name: 'Toxin Codex',
        level: 1,
        description:
          "A toxin codexer keeps a codex of poisons similar to a wizard's spellbook. He can replicate any poison in his codex using Craft (alchemy) at a reduced cost. He begins with a number of poisons in his codex equal to 3 + his Intelligence modifier.",
        effects: [],
      },
      {
        name: 'Identify Toxin',
        level: 2,
        description:
          'At 2nd level, a toxin codexer can identify any poison as a move action with a Craft (alchemy) check.',
        effects: [],
      },
      {
        name: 'Improved Toxins',
        level: 5,
        description:
          'At 5th level, poisons created by the toxin codexer have their DC increased by 1. This increases by an additional +1 at 9th, 13th, and 17th level.',
        effects: [],
      },
      {
        name: 'Universal Antidote',
        level: 10,
        description:
          'At 10th level, a toxin codexer can create a universal antidote once per day that cures any one poison affecting a creature.',
        effects: [],
      },
    ],
    source: 'Dirty Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 46. Blazing Torchbearer
  // ──────────────────────────────────────────────
  {
    name: 'Blazing Torchbearer',
    className: 'Alchemist',
    description:
      'A blazing torchbearer is a goblin alchemist who obsesses over fire, carrying alchemically enhanced torches and creating incendiary devices that set everything ablaze.',
    replacedFeatures: ['Brew Potion', 'Poison Resistance', 'Poison Use', 'Poison Immunity'],
    modifiedFeatures: ['Bomb'],
    newFeatures: [
      {
        name: 'Fire Enthusiast',
        level: 1,
        description:
          'A blazing torchbearer gains a +1 bonus on attack rolls with fire-based weapons and alchemical items. He also gains fire resistance 5.',
        effects: [],
      },
      {
        name: 'Torch Mastery',
        level: 1,
        description:
          'A blazing torchbearer can wield a torch as a weapon dealing 1d6 + Strength modifier fire damage, and can apply alchemical substances to it as a move action.',
        effects: [],
      },
      {
        name: 'Burning Bomb',
        level: 2,
        description:
          "At 2nd level, a blazing torchbearer's bombs set the target on fire on a direct hit. The target takes an additional 1d6 fire damage on the round after being hit. This additional damage increases by 1d6 at 6th level and every 4 levels thereafter.",
        effects: [],
      },
      {
        name: 'Fire Body',
        level: 10,
        description:
          'At 10th level, a blazing torchbearer gains fire resistance 20 and his melee attacks deal an additional 1d6 fire damage.',
        effects: [],
      },
    ],
    source: 'Goblins of Golarion',
  },

  // ──────────────────────────────────────────────
  // 47. Mnemostiller
  // ──────────────────────────────────────────────
  {
    name: 'Mnemostiller',
    className: 'Alchemist',
    description:
      'A mnemostiller creates special elixirs and cognatogens that allow him to manipulate memories, both his own and those of others.',
    replacedFeatures: ['Mutagen', 'Poison Use', 'Swift Poisoning', 'Persistent Mutagen'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Cognatogen',
        level: 1,
        description:
          'A mnemostiller creates a cognatogen instead of a mutagen. The cognatogen functions as described in the mindchemist archetype.',
        effects: [],
      },
      {
        name: 'Memory Extraction',
        level: 1,
        description:
          'At 1st level, a mnemostiller can extract memories from a willing or helpless creature by touch. He can view up to 1 minute of memories per alchemist level. The creature loses those memories for 24 hours.',
        effects: [],
      },
      {
        name: 'Thought Catcher',
        level: 3,
        description:
          'At 3rd level, a mnemostiller can store extracted memories in an elixir. Any creature that drinks the elixir experiences the stored memories.',
        effects: [],
      },
      {
        name: 'Memory Erasure',
        level: 10,
        description:
          'At 10th level, a mnemostiller can permanently erase memories he has extracted, as modify memory. The target gets a Will save to resist.',
        effects: [],
      },
    ],
    source: 'Occult Origins',
  },
];
