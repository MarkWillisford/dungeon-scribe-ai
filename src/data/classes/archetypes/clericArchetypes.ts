import { ArchetypeData } from '../types';

export const CLERIC_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Angelfire Apostle
  // ──────────────────────────────────────────────
  {
    name: 'Angelfire Apostle',
    className: 'Cleric',
    description:
      'An angelfire apostle channels the purifying flames of the celestial realms, wielding holy fire to smite evil and heal the faithful.',
    replacedFeatures: ['Channel Energy', 'Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Angelfire',
        level: 1,
        description:
          'The angelfire apostle gains a pool of angelfire points equal to 3 + her Charisma modifier. She can use these points to create rays of holy fire as a ranged touch attack dealing 1d6 fire damage per two cleric levels (minimum 1d6). Half of this damage is fire and half is divine, not subject to fire resistance.',
      },
      {
        name: 'Angelic Aspect',
        level: 8,
        description:
          'At 8th level, the angelfire apostle can manifest angelic wings as a swift action for a number of rounds per day equal to her cleric level. These wings grant a fly speed of 60 feet with good maneuverability.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 2. Asmodean Advocate
  // ──────────────────────────────────────────────
  {
    name: 'Asmodean Advocate',
    className: 'Cleric',
    description:
      'An Asmodean advocate is a barrister of Hell who uses legal acumen and infernal contracts to bind others, serving Asmodeus through litigation and manipulation.',
    replacedFeatures: ['Channel Energy', 'Spontaneous Casting'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Infernal Bureaucracy',
        level: 1,
        description:
          'The Asmodean advocate adds Bluff, Diplomacy, Intimidate, and Sense Motive to her class skills. She gains a bonus equal to half her cleric level (minimum 1) on Diplomacy and Intimidate checks.',
      },
      {
        name: 'Contract of Servitude',
        level: 1,
        description:
          'Instead of channeling energy, the advocate can draw up binding contracts. Creatures that sign must succeed at a Will save or be affected as by a geas/quest spell. The advocate can have a number of active contracts equal to her Charisma modifier.',
      },
      {
        name: 'Spontaneous Casting (Charm Spells)',
        level: 1,
        description:
          'An Asmodean advocate can spontaneously convert prepared spells into charm spells from the cleric spell list rather than cure or inflict spells.',
      },
    ],
    source: 'Inner Sea Intrigue',
  },

  // ──────────────────────────────────────────────
  // 3. Blossoming Light
  // ──────────────────────────────────────────────
  {
    name: 'Blossoming Light',
    className: 'Cleric',
    description:
      'A blossoming light is a healer of extraordinary power who channels an overwhelming amount of positive energy, specializing in healing and the destruction of undead.',
    replacedFeatures: [
      'Domain (2nd domain)',
      'Medium Armor Proficiency',
      'Heavy Armor Proficiency',
      'Shield Proficiency',
    ],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Channel Energy (Enhanced)',
        level: 1,
        description:
          'A blossoming light channels positive energy as a cleric of her level, but gains two additional uses of channel energy per day. She must choose to channel positive energy. She can only channel to heal living creatures or damage undead.',
      },
      {
        name: 'Luminous Font',
        level: 1,
        description:
          'At 1st level, the blossoming light gains an additional use of channel energy per day for every 2 cleric levels she possesses beyond 1st. She cannot use this ability to channel negative energy.',
      },
      {
        name: 'Positive Focus',
        level: 3,
        description:
          'At 3rd level, a blossoming light adds her Charisma modifier to the damage she deals to undead with channel energy, and to the hit points she restores to living creatures with channel energy.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 4. Cardinal
  // ──────────────────────────────────────────────
  {
    name: 'Cardinal',
    className: 'Cleric',
    description:
      'A cardinal is a political and spiritual leader within her faith, wielding influence and authority over religious organizations and their followers.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Legate',
        level: 1,
        description:
          'A cardinal gains a bonus equal to half her cleric level (minimum 1) on Diplomacy, Intimidate, and Knowledge (nobility) checks. She can use Diplomacy to make requests of creatures whose attitude is indifferent or better without the normal increase in DC.',
      },
      {
        name: 'Inspiring Word',
        level: 1,
        description:
          'As a standard action, a cardinal can speak an inspiring word to grant all allies within 30 feet a +2 morale bonus on saving throws against fear and charm effects for 1 minute. She can use this ability a number of times per day equal to 3 + her Charisma modifier.',
      },
      {
        name: 'Church Authority',
        level: 8,
        description:
          'At 8th level, a cardinal can call upon the resources and followers of her church. She gains Leadership as a bonus feat, using her cleric level + Charisma modifier as her leadership score.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 5. Cloistered Cleric
  // ──────────────────────────────────────────────
  {
    name: 'Cloistered Cleric',
    className: 'Cleric',
    description:
      'A cloistered cleric is a scholarly priest who focuses on knowledge and lore rather than martial prowess, trading combat ability for academic expertise.',
    replacedFeatures: ['Medium Armor Proficiency', 'Heavy Armor Proficiency', 'Shield Proficiency'],
    modifiedFeatures: ['Hit Die (d6 instead of d8)', 'BAB (3/4 instead of 3/4)'],
    newFeatures: [
      {
        name: 'Breadth of Knowledge',
        level: 1,
        description:
          'A cloistered cleric treats all Knowledge skills as class skills and gains a +1 bonus on all Knowledge skill checks. This bonus increases by +1 for every 3 cleric levels she possesses.',
      },
      {
        name: 'Well-Read',
        level: 1,
        description:
          'A cloistered cleric gains Scribe Scroll as a bonus feat at 1st level. She also gains 4 additional skill ranks per level (for a total of 6 + Int modifier per level).',
      },
      {
        name: 'Verbal Grace',
        level: 1,
        description:
          'A cloistered cleric adds Linguistics and all Knowledge skills to her class skill list.',
      },
    ],
    source: 'Core Rulebook (3.5 variant)',
  },

  // ──────────────────────────────────────────────
  // 6. Crashing Wave
  // ──────────────────────────────────────────────
  {
    name: 'Crashing Wave',
    className: 'Cleric',
    description:
      'A crashing wave cleric serves a deity of water or the sea, using the power of waves and tides to overwhelm foes and protect allies.',
    replacedFeatures: ['Channel Energy', 'Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Tidal Surge',
        level: 1,
        description:
          'As a standard action, the crashing wave can release a surge of water in a 30-foot line dealing 1d6 bludgeoning damage per 2 cleric levels (minimum 1d6). Affected creatures must succeed on a Reflex save or be knocked prone. She can use this ability a number of times per day equal to 3 + her Charisma modifier.',
      },
      {
        name: 'Water Mastery',
        level: 1,
        description:
          'A crashing wave must select the Water domain (or one of its subdomains) as one of her domains. She gains a +1 bonus on attack and damage rolls if both she and her foe are touching water.',
      },
      {
        name: 'Fluid Motion',
        level: 6,
        description:
          'At 6th level, a crashing wave gains a swim speed equal to her base land speed and can breathe underwater. She also gains a +4 bonus to CMD against bull rush and trip attempts.',
      },
    ],
    source: 'Blood of the Sea',
  },

  // ──────────────────────────────────────────────
  // 7. Crusader
  // ──────────────────────────────────────────────
  {
    name: 'Crusader',
    className: 'Cleric',
    description:
      'A crusader is a militant cleric who focuses on martial skill at the expense of some spellcasting ability, serving as a holy warrior on the front lines of battle.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Bonus Feat',
        level: 1,
        description:
          'At 1st level and every 5 levels thereafter (5th, 10th, 15th, 20th), a crusader gains a bonus feat in addition to those gained from normal advancement. These bonus feats must be selected from the following: Heavy Armor Proficiency, Improved Shield Bash, Martial Weapon Proficiency, Saving Shield, Shield Focus, Tower Shield Proficiency, or Weapon Focus. At 10th level, the crusader adds Vital Strike and Greater Shield Focus to the list. At 20th level, Devastating Strike and Greater Vital Strike are added.',
      },
      {
        name: 'Diminished Spellcasting',
        level: 1,
        description:
          'A crusader receives one fewer spell slot of each spell level she can cast. If this would remove her ability to cast spells of a given level, she can cast only domain spells of that level.',
      },
      {
        name: "Legion's Blessing",
        level: 8,
        description:
          'At 8th level, a crusader can confer the benefits of a single beneficial spell upon a number of willing creatures equal to half her cleric level as a full-round action. The spell must have a casting time of 1 standard action or less and a range of touch. She expends the spell once and all targets receive its effects.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 8. Demonic Apostle
  // ──────────────────────────────────────────────
  {
    name: 'Demonic Apostle',
    className: 'Cleric',
    description:
      'A demonic apostle is a cleric devoted to a demon lord, channeling the chaotic evil energies of the Abyss to gain demonic powers and command fiendish allies.',
    replacedFeatures: ['Channel Energy', 'Domain (1st domain)'],
    modifiedFeatures: ['Spontaneous Casting'],
    newFeatures: [
      {
        name: 'Demonic Mark',
        level: 1,
        description:
          'A demonic apostle bears a physical mark of her patron demon lord. This mark grants her a +2 profane bonus on saving throws against poison and a +4 profane bonus on saving throws against the spell-like abilities of demons.',
      },
      {
        name: 'Energize Spell',
        level: 1,
        description:
          'A demonic apostle can spontaneously convert prepared spells into summon monster spells of the same level or lower, but can only summon demons or chaotic evil creatures.',
      },
      {
        name: 'Demonic Channel',
        level: 1,
        description:
          'Instead of channeling energy, a demonic apostle can channel demonic fury. All enemies within 30 feet must succeed on a Will save or be shaken for a number of rounds equal to her Charisma modifier. She can use this ability a number of times per day equal to 3 + her Charisma modifier.',
      },
      {
        name: 'Demonic Transformation',
        level: 12,
        description:
          'At 12th level, the demonic apostle undergoes a partial transformation, gaining resistance 10 to two of the following energy types: acid, cold, electricity, or fire. She also gains darkvision 60 feet if she does not already have it.',
      },
    ],
    source: 'Book of the Damned',
  },

  // ──────────────────────────────────────────────
  // 9. Divine Strategist
  // ──────────────────────────────────────────────
  {
    name: 'Divine Strategist',
    className: 'Cleric',
    description:
      'A divine strategist channels the battle wisdom of her deity, specializing in tactical leadership and turning the tide of combat through superior strategy.',
    replacedFeatures: ['Channel Energy', 'Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Master Tactician',
        level: 1,
        description:
          'A divine strategist can, as a standard action, grant any single teamwork feat she possesses to all allies within 30 feet who can see and hear her. Allies retain this bonus feat for 3 rounds plus 1 round for every 2 cleric levels. She can use this ability a number of times per day equal to 3 + her Wisdom modifier.',
      },
      {
        name: 'Caster Support',
        level: 8,
        description:
          'At 8th level, as a swift action, a divine strategist can grant one ally within 30 feet a +2 sacred (or profane) bonus on caster level checks, concentration checks, and attack rolls with spells for 1 round. She can use this ability once per day at 8th level, plus one additional time for every 4 levels beyond 8th.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 10. Ecclesitheurge
  // ──────────────────────────────────────────────
  {
    name: 'Ecclesitheurge',
    className: 'Cleric',
    description:
      'An ecclesitheurge is a cleric focused on divine magic above all else, forsaking armor training to gain greater flexibility with her domain spells.',
    replacedFeatures: ['Medium Armor Proficiency', 'Heavy Armor Proficiency', 'Shield Proficiency'],
    modifiedFeatures: ['Domains'],
    newFeatures: [
      {
        name: "Ecclesitheurge's Vow",
        level: 1,
        description:
          'An ecclesitheurge must forgo wearing any armor or using shields. If she wears armor or carries a shield, she loses access to all cleric spells and class features until she atones.',
      },
      {
        name: 'Blessing of the Faithful',
        level: 3,
        description:
          'At 3rd level, as a standard action the ecclesitheurge can bless an ally within 30 feet, granting that ally a +2 sacred or profane bonus (matching her alignment) on attack rolls, skill checks, ability checks, or saving throws (her choice). This lasts for 1 round and can be used a number of times per day equal to 3 + her Wisdom modifier.',
      },
      {
        name: 'Domain Mastery',
        level: 1,
        description:
          'An ecclesitheurge selects one domain as her primary domain and one as her secondary domain. She can use her non-domain spell slots to prepare domain spells from her primary domain. She can change her secondary domain each day during prayer, selecting from any domain granted by her deity.',
      },
      {
        name: 'Bonded Holy Symbol',
        level: 1,
        description:
          'An ecclesitheurge forms a bond with her holy symbol. Once per day, she can use the bonded holy symbol to cast any one spell from one of her domains that she is capable of casting, even if she did not prepare that spell.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 11. Evangelist
  // ──────────────────────────────────────────────
  {
    name: 'Evangelist',
    className: 'Cleric',
    description:
      'An evangelist is a cleric who inspires allies through stirring oratory and sermon, functioning partly as a divine bard who trades domain power for performance abilities.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Public Speaker',
        level: 1,
        description:
          'An evangelist gains Perform (oratory) as a class skill. She adds her Wisdom modifier (in addition to Charisma) to Perform (oratory) checks.',
      },
      {
        name: 'Sermonic Performance',
        level: 1,
        description:
          'An evangelist gains the ability to deliver sermons that function as bardic performances, using Perform (oratory) as the relevant skill. She can use this ability for a number of rounds per day equal to 4 + her Charisma modifier, increasing by 2 rounds for each level after 1st. At 1st level she gains countersong and inspire courage. At 3rd level she gains fascinate. At 6th level she gains inspire competence. At 9th level she gains inspire greatness. At 12th level she gains soothing performance. At 15th level she gains inspire heroics.',
      },
      {
        name: 'Spontaneous Casting',
        level: 1,
        description:
          'An evangelist can spontaneously cast any spell she can deliver as a sermonic performance, rather than cure or inflict spells.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 12. Fiendish Vessel
  // ──────────────────────────────────────────────
  {
    name: 'Fiendish Vessel',
    className: 'Cleric',
    description:
      'A fiendish vessel is a tiefling cleric who embraces her fiendish heritage, channeling infernal or abyssal power to summon and command fiends.',
    replacedFeatures: ['Channel Energy', 'Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Alignment Restriction',
        level: 1,
        description:
          'A fiendish vessel must be neutral evil, chaotic evil, or lawful evil. She must worship an evil outsider deity or demon lord.',
      },
      {
        name: 'Fiendish Familiar',
        level: 1,
        description:
          'A fiendish vessel gains an imp, quasit, or cacodaemon familiar, as the arcane bond wizard class feature. The familiar grants Alertness and can deliver touch spells for the cleric.',
      },
      {
        name: 'Channel Evil',
        level: 1,
        description:
          'A fiendish vessel channels negative energy but can only use it to heal evil outsiders and creatures with the evil subtype, or to damage good outsiders and creatures with the good subtype. She can use this ability a number of times per day equal to 3 + her Charisma modifier.',
      },
      {
        name: 'Fiendish Summoning',
        level: 1,
        description:
          'A fiendish vessel adds summon monster spells to her spell list. When using these spells, she can only summon fiendish creatures or evil outsiders.',
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 13. Foundation of Faith
  // ──────────────────────────────────────────────
  {
    name: 'Foundation of Faith',
    className: 'Cleric',
    description:
      'A foundation of faith serves as a pillar of her religious community, drawing strength from the faithful around her and bolstering allies through unwavering devotion.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Gather the Faithful',
        level: 1,
        description:
          'A foundation of faith gains a bonus on channel energy healing equal to the number of allies within 30 feet who share her deity (maximum bonus equal to her cleric level).',
      },
      {
        name: 'Pillar of Faith',
        level: 1,
        description:
          'A foundation of faith can, as an immediate action, grant an ally within 30 feet a sacred bonus equal to half her cleric level on a single saving throw. She can use this ability a number of times per day equal to 3 + her Wisdom modifier.',
      },
      {
        name: 'Unwavering Devotion',
        level: 8,
        description:
          'At 8th level, a foundation of faith becomes immune to fear effects. Allies within 10 feet gain a +4 morale bonus on saving throws against fear effects.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 14. Herald Caller
  // ──────────────────────────────────────────────
  {
    name: 'Herald Caller',
    className: 'Cleric',
    description:
      'A herald caller specializes in summoning the sacred heralds and servitors of her deity, calling upon divine agents to fight on her behalf.',
    replacedFeatures: [
      'Medium Armor Proficiency',
      'Heavy Armor Proficiency',
      'Shield Proficiency',
      'Domain (2nd domain)',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Call Heralds',
        level: 1,
        description:
          'A herald caller can use summon monster spells as spell-like abilities a number of times per day equal to 3 + her Charisma modifier. She can only summon creatures appropriate to her deity. These summons last 1 round per cleric level.',
      },
      {
        name: 'Divine Heralds',
        level: 4,
        description:
          'At 4th level, a herald caller can apply the celestial or fiendish template (as appropriate for her alignment) to creatures she summons. Summoned creatures gain a +2 sacred or profane bonus on attack and damage rolls.',
      },
      {
        name: 'Mighty Heralds',
        level: 8,
        description:
          'At 8th level, creatures the herald caller summons gain an additional +2 hit points per Hit Die. At 12th level, they gain DR 5/evil or DR 5/good (as appropriate).',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 15. Merciful Healer
  // ──────────────────────────────────────────────
  {
    name: 'Merciful Healer',
    className: 'Cleric',
    description:
      'A merciful healer is a compassionate cleric dedicated entirely to healing and removing afflictions, channeling only positive energy to ease suffering.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Channel Energy (Merciful)',
        level: 1,
        description:
          'A merciful healer must channel positive energy. When she channels energy to heal, she can choose to also remove one of the following conditions from all targets healed: fatigued, shaken, or sickened. At 6th level, she adds dazed, diseased, and staggered to the list. At 14th level she adds exhausted, frightened, nauseated, and poisoned.',
      },
      {
        name: 'Combat Medic',
        level: 1,
        description:
          'A merciful healer does not provoke attacks of opportunity when using the Heal skill to stabilize a dying creature or to treat poison.',
      },
      {
        name: 'True Healer',
        level: 8,
        description:
          'At 8th level, when a merciful healer channels positive energy, she can choose to apply the benefits of one of the following spells to all creatures healed: remove blindness/deafness, remove curse, or remove disease. She expends a use of channel energy and a spell slot of the appropriate level.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 16. Roaming Exorcist
  // ──────────────────────────────────────────────
  {
    name: 'Roaming Exorcist',
    className: 'Cleric',
    description:
      'A roaming exorcist is a wandering holy person who specializes in identifying and driving out possessing spirits, hauntings, and other supernatural afflictions.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Spirit Sleuth',
        level: 1,
        description:
          'A roaming exorcist adds her Wisdom modifier on Diplomacy checks to gather information and on all Knowledge checks to identify undead, haunts, and possession effects. She gains Detect Undead as an at-will spell-like ability.',
      },
      {
        name: 'Haunted Eyes',
        level: 1,
        description:
          'A roaming exorcist gains a +2 sacred bonus on Perception checks and on saving throws against effects from undead, haunts, and possessing creatures. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Exorcism',
        level: 1,
        description:
          "A roaming exorcist can use channel energy to attempt to end a possession effect or destroy a haunt. She makes a channel energy check against the possessing creature's Will save or the haunt's DC. Success immediately ends the possession or destroys the haunt.",
      },
      {
        name: 'Ectoplasmic Channel',
        level: 6,
        description:
          "At 6th level, a roaming exorcist's channeled energy fully affects incorporeal undead without the normal 50% reduction.",
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 17. Separatist
  // ──────────────────────────────────────────────
  {
    name: 'Separatist',
    className: 'Cleric',
    description:
      "A separatist is a cleric who has an unusual interpretation of her deity's dogma, choosing one domain not normally offered by her deity.",
    replacedFeatures: [],
    modifiedFeatures: ['Domains'],
    newFeatures: [
      {
        name: 'Forbidden Domain',
        level: 1,
        description:
          "A separatist selects one domain from her deity's list and one domain not normally available to her deity. The separatist's effective cleric level for the forbidden domain is her cleric level - 3 (minimum 1st). All other domain abilities and granted spells use her normal cleric level.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 18. Stoic Caretaker
  // ──────────────────────────────────────────────
  {
    name: 'Stoic Caretaker',
    className: 'Cleric',
    description:
      'A stoic caretaker is a dwarven cleric who tends to the community with quiet resilience, absorbing the suffering of others and enduring it through sheer fortitude.',
    replacedFeatures: ['Channel Energy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Absorb Affliction',
        level: 1,
        description:
          'A stoic caretaker can, as a standard action, touch an ally and transfer one condition affecting the ally to herself. She can absorb the following conditions: fatigued, shaken, sickened, and staggered. At 6th level she adds dazed, diseased, exhausted, and frightened. The caretaker suffers the condition for its remaining duration.',
      },
      {
        name: 'Stoic Endurance',
        level: 1,
        description:
          'A stoic caretaker gains a +2 sacred bonus on saving throws against effects she absorbed from allies. This bonus increases to +4 at 8th level. She can use absorb affliction a number of times per day equal to 3 + her Wisdom modifier.',
      },
      {
        name: "Martyr's Resilience",
        level: 8,
        description:
          "At 8th level, when the stoic caretaker absorbs a condition from an ally, she can make an immediate Fortitude save to negate the condition entirely rather than taking it upon herself. The DC equals the original effect's save DC.",
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 19. Theologian
  // ──────────────────────────────────────────────
  {
    name: 'Theologian',
    className: 'Cleric',
    description:
      "A theologian focuses on a single domain to the exclusion of all else, gaining unparalleled mastery over that domain's magic and abilities.",
    replacedFeatures: ['Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Focused Domain',
        level: 1,
        description:
          "A theologian selects only one domain. She gains all the domain's granted powers as normal. She gains a focused domain spell slot at each spell level she can cast. She can prepare her domain spells in her regular spell slots.",
      },
      {
        name: 'Domain Secret',
        level: 5,
        description:
          'At 5th level, the theologian selects one Metamagic feat. When she applies this feat to a spell from her focused domain, the modified spell uses a spell slot one level lower than normal (minimum one level higher than the unmodified spell). At 10th level and every 5 levels thereafter, she gains an additional metamagic feat that benefits from this ability.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 20. Undead Lord
  // ──────────────────────────────────────────────
  {
    name: 'Undead Lord',
    className: 'Cleric',
    description:
      'An undead lord is a cleric who commands a powerful undead companion and channels negative energy to bolster and raise undead servants.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: ['Channel Energy', 'Spontaneous Casting'],
    newFeatures: [
      {
        name: 'Death Magic',
        level: 1,
        description:
          'An undead lord must be evil and must channel negative energy. She must select the Undead subdomain (or Death domain if Undead is unavailable). She cannot channel energy to heal living creatures.',
      },
      {
        name: 'Corpse Companion',
        level: 1,
        description:
          "An undead lord gains a powerful undead companion, similar to an animal companion but undead. The corpse companion is a human skeleton or zombie and advances as the cleric gains levels, using the druid's animal companion progression. The corpse companion gains channel resistance +4 and is not destroyed when reduced to 0 hit points but becomes inert until healed.",
      },
      {
        name: 'Bonus Feats',
        level: 10,
        description:
          'At 10th level and every 5 levels thereafter, an undead lord gains Command Undead or one of the following bonus feats: Channel Smite, Extra Channel, Improved Channel, or Selective Channel.',
      },
      {
        name: 'Unlife Healer',
        level: 8,
        description:
          "At 8th level, the undead lord's channeled negative energy heals undead creatures for an additional 50%. She can spontaneously cast inflict spells by sacrificing prepared spells.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 21. Mendevian Priest
  // ──────────────────────────────────────────────
  {
    name: 'Mendevian Priest',
    className: 'Cleric',
    description:
      'A Mendevian priest is a crusading cleric hardened by the war against the Worldwound, specializing in fighting demons and protecting allies from fiendish corruption.',
    replacedFeatures: ['Domain (2nd domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Demon Hunter',
        level: 1,
        description:
          'A Mendevian priest gains a +2 sacred bonus on Knowledge (planes) checks to identify demons and their abilities. She also gains a +1 sacred bonus on attack rolls against creatures with the demon subtype. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Banishing Channel',
        level: 1,
        description:
          'When a Mendevian priest channels positive energy, she can choose to deal her channel damage only to demons and evil outsiders within range. Affected creatures that fail their saves are also staggered for 1 round.',
      },
      {
        name: 'Wardbreaker',
        level: 8,
        description:
          'At 8th level, a Mendevian priest gains a +4 sacred bonus on caster level checks to overcome spell resistance of evil outsiders and on dispel checks against spells cast by evil outsiders.',
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 22. Devolutionist
  // ──────────────────────────────────────────────
  {
    name: 'Devolutionist',
    className: 'Cleric',
    description:
      'A devolutionist is a cleric who wields the power of entropy and devolution, weakening foes by devolving them into more primitive forms.',
    replacedFeatures: ['Channel Energy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Devolving Touch',
        level: 1,
        description:
          "As a melee touch attack, a devolutionist can cause a living creature to partially devolve, taking a -2 penalty to one physical ability score of the devolutionist's choice for 1 round per cleric level. She can use this ability a number of times per day equal to 3 + her Wisdom modifier.",
      },
      {
        name: 'Atavistic Surge',
        level: 8,
        description:
          'At 8th level, a devolutionist can cause a burst of devolutionary energy in a 30-foot radius. All enemies must succeed on a Fortitude save or take a -4 penalty to Intelligence and Charisma for 1 round per cleric level. She can use this ability once per day at 8th level, plus one additional time at 14th and 20th levels.',
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 23. Iron Priest
  // ──────────────────────────────────────────────
  {
    name: 'Iron Priest',
    className: 'Cleric',
    description:
      'An iron priest worships a deity of artifice and constructs, gaining the ability to channel divine energy into mechanical devices and constructs.',
    replacedFeatures: ['Domain (1st domain)', 'Channel Energy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Animate Servant',
        level: 1,
        description:
          "An iron priest can channel energy into a suit of armor or mechanical object to animate it as a construct companion. This functions as an animal companion using the druid's animal companion progression, except the companion is a construct with hardness instead of natural armor.",
      },
      {
        name: 'Repair',
        level: 1,
        description:
          'Instead of channeling energy normally, an iron priest can channel to repair constructs within 30 feet, healing them for the amount of damage her channel energy would normally heal. She can use this ability a number of times per day equal to 3 + her Charisma modifier.',
      },
      {
        name: 'Construct Mastery',
        level: 8,
        description:
          "At 8th level, an iron priest's construct companion gains an additional +2 bonus to Strength and Constitution (or hardness equivalent) and gains the ability to be enchanted as if it were a suit of magic armor.",
      },
    ],
    source: 'Faiths and Philosophies',
  },

  // ──────────────────────────────────────────────
  // 24. Forgemaster
  // ──────────────────────────────────────────────
  {
    name: 'Forgemaster',
    className: 'Cleric',
    description:
      'A forgemaster is a dwarven cleric who combines divine magic with masterful smithing, creating magical arms and armor imbued with divine power.',
    replacedFeatures: ['Domain (1st domain)', 'Channel Energy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Artificer',
        level: 1,
        description:
          'A forgemaster adds her cleric level to Craft (armor) and Craft (weapons) checks. She gains Craft Magic Arms and Armor as a bonus feat at 3rd level. She can use her cleric caster level as her effective wizard level for the purposes of meeting item creation prerequisites.',
      },
      {
        name: 'Divine Smith',
        level: 1,
        description:
          'A forgemaster must select the Artifice domain. She does not gain a second domain. Instead, she gains the ability to channel divine energy into items she crafts, reducing the gold and time cost of crafting magic arms and armor by 25%.',
      },
      {
        name: 'Steel Skin',
        level: 6,
        description:
          'At 6th level, a forgemaster gains a +1 sacred bonus to natural armor. This bonus increases by +1 at 12th and 18th levels.',
      },
      {
        name: 'Runeforger',
        level: 8,
        description:
          'At 8th level, a forgemaster can imbue any weapon or armor she crafts with a temporary magical enhancement. As a full-round action, she can grant a weapon or armor a +1 enhancement bonus (or equivalent special ability) for 1 minute per cleric level. She can use this ability once per day plus one additional time per day for every 4 levels beyond 8th.',
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 25. Scroll Scholar
  // ──────────────────────────────────────────────
  {
    name: 'Scroll Scholar',
    className: 'Cleric',
    description:
      'A scroll scholar is a cleric who studies divine magic in written form, gaining mastery over scrolls and the ability to enhance scrolls beyond their normal power.',
    replacedFeatures: ['Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Scroll Savant',
        level: 1,
        description:
          'A scroll scholar gains Scribe Scroll as a bonus feat at 1st level. She uses her cleric level as her caster level for the purposes of scribing scrolls. She gains a +4 bonus on Use Magic Device checks to activate scrolls.',
      },
      {
        name: 'Enhanced Scrolls',
        level: 5,
        description:
          'At 5th level, scrolls scribed by a scroll scholar have their caster level increased by 1 for all effects. At 10th level, this bonus increases to +2.',
      },
      {
        name: 'Scroll Master',
        level: 8,
        description:
          "At 8th level, a scroll scholar can use scrolls of any class's spell list using her cleric caster level. She does not need to make a Use Magic Device check for scrolls on other class spell lists, provided the spell level does not exceed the maximum spell level she can cast.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 26. Theologian of the Old Way (Varisian Pilgrim)
  // ──────────────────────────────────────────────
  {
    name: 'Varisian Pilgrim',
    className: 'Cleric',
    description:
      'A Varisian pilgrim is a wandering cleric who reads the future in the stars and harrow cards, gaining divination powers in place of a second domain.',
    replacedFeatures: ['Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Caravan Bond',
        level: 1,
        description:
          'A Varisian pilgrim gains Harrowed as a bonus feat. She can perform a harrowing once per day as a full-round action. Allies who participate in the harrowing gain a +1 luck bonus on one type of d20 roll (attack, save, skill, or ability check) for 24 hours.',
      },
      {
        name: 'Star Reader',
        level: 1,
        description:
          'A Varisian pilgrim can read portents in the stars. At the beginning of each day, she can select one of the following benefits: +1 insight bonus on initiative, +1 insight bonus on Fortitude saves, +1 insight bonus on Reflex saves, or +1 insight bonus on Will saves. This bonus increases by +1 at 8th and 16th levels.',
      },
    ],
    source: 'Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 27. Divine Scourge
  // ──────────────────────────────────────────────
  {
    name: 'Divine Scourge',
    className: 'Cleric',
    description:
      'A divine scourge is a cleric who punishes the wicked with divine condemnation, cursing sinners and those who violate the laws of her faith.',
    replacedFeatures: ['Channel Energy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Condemnation',
        level: 1,
        description:
          'A divine scourge can pronounce a condemnation upon a visible creature within 30 feet as a standard action. The target takes a -2 penalty on attack rolls, saving throws, ability checks, and skill checks for 1 round per cleric level (Will negates). She can use this ability a number of times per day equal to 3 + her Wisdom modifier.',
      },
      {
        name: 'Word of Anathema',
        level: 8,
        description:
          "At 8th level, a divine scourge's condemnation penalty increases to -4. Additionally, she can expend two uses of condemnation to render the target sickened (or nauseated if it was already sickened) for the duration.",
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 28. Hidden Priest
  // ──────────────────────────────────────────────
  {
    name: 'Hidden Priest',
    className: 'Cleric',
    description:
      'A hidden priest conceals her devotion to her deity, often operating in lands where her faith is outlawed. She disguises her divine magic as arcane or mundane activity.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'False Arcanist',
        level: 1,
        description:
          "A hidden priest can disguise her divine spells as arcane spells. Observers must succeed on a Spellcraft check (DC 15 + spell level + hidden priest's Wisdom modifier) to recognize the spells as divine rather than arcane. Her holy symbol can be disguised as an arcane focus.",
      },
      {
        name: 'Secret Faith',
        level: 1,
        description:
          'A hidden priest gains a +5 bonus on Bluff checks to conceal her true faith. She can prepare domain spells in her regular spell slots and does not need to openly display a holy symbol.',
      },
      {
        name: 'Unseen Devotion',
        level: 5,
        description:
          "At 5th level, a hidden priest can cast spells without verbal or somatic components a number of times per day equal to her Wisdom modifier (minimum 1). This functions as the Silent Spell and Still Spell metamagic feats but does not increase the spell's level.",
      },
    ],
    source: 'Inner Sea Intrigue',
  },

  // ──────────────────────────────────────────────
  // 29. Herald of the Horn
  // ──────────────────────────────────────────────
  {
    name: 'Herald of the Horn',
    className: 'Cleric',
    description:
      'A herald of the horn uses a sacred musical instrument to channel divine power, calling allies to battle and striking fear into the hearts of enemies.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Sacred Instrument',
        level: 1,
        description:
          'A herald of the horn selects a wind instrument (horn, trumpet, etc.) as her divine focus. She gains Perform (wind instruments) as a class skill and can channel energy through her instrument, increasing the range of her channel energy to 60 feet.',
      },
      {
        name: 'Call to Arms',
        level: 1,
        description:
          'As a standard action, a herald of the horn can blow her sacred instrument to grant all allies within 60 feet a +1 morale bonus on attack rolls and saving throws against fear effects for 1 round per cleric level. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Dread Blast',
        level: 8,
        description:
          'At 8th level, a herald of the horn can blow her instrument to create a 30-foot cone of sonic energy dealing 1d6 sonic damage per cleric level (Fortitude half). Creatures that fail the save are also deafened for 1 round per cleric level. She can use this ability once per day, plus one additional time at 14th and 20th levels.',
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 30. Appeaser
  // ──────────────────────────────────────────────
  {
    name: 'Appeaser',
    className: 'Cleric',
    description:
      'An appeaser is a cleric who worships all gods rather than a single deity, placating many divine powers to gain a broad range of divine favors.',
    replacedFeatures: ['Domains'],
    modifiedFeatures: ['Aura'],
    newFeatures: [
      {
        name: 'No Aura',
        level: 1,
        description:
          'An appeaser does not have an aura corresponding to any particular alignment. She does not have a patron deity and does not register as any specific alignment for the purposes of detect spells.',
      },
      {
        name: 'Appease',
        level: 1,
        description:
          "Each day, an appeaser can pray to any deity or deities and select any two domains available to the chosen deity or deities. She gains those domains' granted powers and spells for the day. She cannot select the same two domains on consecutive days.",
      },
      {
        name: 'Versatile Channeler',
        level: 1,
        description:
          'An appeaser can channel either positive or negative energy, chosen each time she channels. She takes a -2 penalty on channel energy DCs when channeling the energy type opposite her current alignment.',
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 31. Sarenite Purifier (Purifier)
  // ──────────────────────────────────────────────
  {
    name: 'Sarenite Purifier',
    className: 'Cleric',
    description:
      'A Sarenite purifier uses holy fire to cleanse evil and corruption, specializing in fire-based divine magic and the redemption of the fallen.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Purifying Flame',
        level: 1,
        description:
          'When channeling positive energy to harm undead, a Sarenite purifier deals fire damage instead of positive energy damage. Undead with vulnerability to fire take additional damage as normal. Living creatures healed by her channel energy also gain fire resistance 5 for 1 round.',
      },
      {
        name: 'Flame of Redemption',
        level: 1,
        description:
          'A Sarenite purifier adds burning hands to her spell list as a 1st-level spell, fireball as a 3rd-level spell, and fire shield as a 4th-level spell. These spells deal half fire damage and half divine damage that is not subject to fire resistance.',
      },
      {
        name: 'Sacred Immolation',
        level: 8,
        description:
          'At 8th level, once per day as a swift action, a Sarenite purifier can wreathe herself in holy flame for 1 round per cleric level. She gains fire resistance 20 and any creature that strikes her with a melee attack takes 1d6 + her Wisdom modifier in fire damage.',
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 32. Fateful Channel (Groetus)
  // ──────────────────────────────────────────────
  {
    name: 'Fateful Channel',
    className: 'Cleric',
    description:
      'A fateful channel cleric sees the impending end of all things, channeling entropic energy that weakens and dooms those caught in its wake.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Doom Channel',
        level: 1,
        description:
          'When a fateful channel cleric channels negative energy to damage living creatures, creatures that fail their save are also affected by the doom spell for 1 round per cleric level.',
      },
      {
        name: 'Inevitable End',
        level: 1,
        description:
          'A fateful channel cleric gains a +1 bonus on caster level checks to overcome spell resistance when casting necromancy spells. This bonus increases by +1 for every 4 cleric levels she possesses.',
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 33. Channeler of the Unknown
  // ──────────────────────────────────────────────
  {
    name: 'Channeler of the Unknown',
    className: 'Cleric',
    description:
      'A channeler of the unknown draws divine power from mysterious or unknown sources, receiving divine magic without knowing the identity of her patron.',
    replacedFeatures: ['Domains'],
    modifiedFeatures: ['Aura'],
    newFeatures: [
      {
        name: 'Unknown Patron',
        level: 1,
        description:
          'A channeler of the unknown does not worship a specific deity and has no alignment aura. Each day, she receives her domain spells and powers from an unknown source. She selects two domains from any available domains, which cannot be changed until the next day.',
      },
      {
        name: 'Mysterious Insight',
        level: 1,
        description:
          'A channeler of the unknown gains a +2 bonus on Knowledge (religion) checks and can make such checks untrained. Once per day, she can reroll a single d20 roll before the result is revealed.',
      },
      {
        name: 'Enigmatic Channel',
        level: 3,
        description:
          'At 3rd level, when a channeler of the unknown channels energy, she can choose to have it affect only a single target within range rather than the normal burst. The target takes a -2 penalty on its saving throw against this focused channel.',
      },
    ],
    source: 'Concordance of Rivals',
  },

  // ──────────────────────────────────────────────
  // 34. Devilbane Priest
  // ──────────────────────────────────────────────
  {
    name: 'Devilbane Priest',
    className: 'Cleric',
    description:
      'A devilbane priest specializes in combating devils and infernal corruption, using holy power to detect and destroy fiendish influence.',
    replacedFeatures: ['Domain (2nd domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Detect Fiends',
        level: 1,
        description:
          'A devilbane priest gains detect evil as an at-will spell-like ability. When using this ability, she can also determine if a target is an evil outsider (and specifically a devil) as if she had studied the target for 3 rounds.',
      },
      {
        name: 'Damnation Channel',
        level: 1,
        description:
          'When channeling positive energy, a devilbane priest can choose to deal her channel damage only to evil outsiders within range. Against devils specifically, the damage die increases from d6 to d8.',
      },
      {
        name: 'Fiend Slayer',
        level: 8,
        description:
          'At 8th level, a devilbane priest gains a +2 sacred bonus on saving throws against the spell-like and supernatural abilities of evil outsiders. Weapons she wields count as good-aligned and silver for the purpose of overcoming damage reduction.',
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 35. Lawgiver (Abadar)
  // ──────────────────────────────────────────────
  {
    name: 'Lawgiver',
    className: 'Cleric',
    description:
      'A lawgiver is a cleric of Abadar who focuses on bringing civilization and order to the wild, serving as judge and arbiter in frontier communities.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Aura of Law',
        level: 1,
        description:
          'A lawgiver radiates a powerful aura of law. She gains a +2 sacred bonus on Diplomacy and Intimidate checks when acting in an official judicial capacity. Chaotic creatures within 10 feet take a -1 penalty on attack rolls and saving throws.',
      },
      {
        name: 'Judicious Strike',
        level: 1,
        description:
          'A lawgiver can pronounce judgment on a foe as a swift action. For 1 round per cleric level, she gains a +1 sacred bonus on attack and damage rolls against the judged creature. This bonus increases by +1 at 5th level and every 5 levels thereafter. She can use this ability a number of times per day equal to 3 + her Wisdom modifier.',
      },
      {
        name: 'Binding Verdict',
        level: 8,
        description:
          'At 8th level, once per day, a lawgiver can pronounce a binding verdict on a creature within 30 feet. The target must succeed on a Will save or be affected as though by a mark of justice spell.',
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 36. Irorian Paladin (Cleric archetype)
  // ──────────────────────────────────────────────
  {
    name: 'Irorian Paladin',
    className: 'Cleric',
    description:
      'An Irorian paladin is a cleric of Irori who pursues physical and spiritual perfection, combining martial arts with divine magic.',
    replacedFeatures: [
      'Medium Armor Proficiency',
      'Heavy Armor Proficiency',
      'Shield Proficiency',
      'Domain (1st domain)',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Unarmed Strike',
        level: 1,
        description:
          'An Irorian paladin gains Improved Unarmed Strike as a bonus feat at 1st level. Her unarmed strike damage increases as a monk of her cleric level - 3 (minimum 1).',
      },
      {
        name: 'Personal Trial',
        level: 1,
        description:
          'An Irorian paladin can challenge herself as a swift action, gaining a +1 sacred bonus on attack rolls, damage rolls, and saving throws for 1 round per cleric level. She can use this ability a number of times per day equal to 3 + her Wisdom modifier. The bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Ki Pool',
        level: 4,
        description:
          'At 4th level, an Irorian paladin gains a ki pool equal to half her cleric level + her Wisdom modifier. She can spend ki to make one additional unarmed attack at her highest BAB, increase her speed by 20 feet for 1 round, or gain a +4 dodge bonus to AC for 1 round.',
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 37. Ashen Forgemaster
  // ──────────────────────────────────────────────
  {
    name: 'Ashen Forgemaster',
    className: 'Cleric',
    description:
      'An ashen forgemaster is a duergar cleric who channels divine magic through the forge, crafting arms with the dark blessings of their underground deity.',
    replacedFeatures: ['Channel Energy', 'Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Dark Forge',
        level: 1,
        description:
          'An ashen forgemaster gains Craft Magic Arms and Armor as a bonus feat. She can use her channel energy to power the crafting process, reducing the time to create magic weapons or armor by 25%. She can use this ability a number of times per day equal to 3 + her Wisdom modifier.',
      },
      {
        name: 'Forge Bond',
        level: 1,
        description:
          'An ashen forgemaster forms a bond with a single weapon or suit of armor. Once per day, she can enhance this item as a standard action, granting it a +1 enhancement bonus for 1 minute per cleric level. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 38. Elder Mythos Cultist
  // ──────────────────────────────────────────────
  {
    name: 'Elder Mythos Cultist',
    className: 'Cleric',
    description:
      'An elder mythos cultist worships the Great Old Ones or Outer Gods, drawing eldritch power from these alien entities that exist beyond the fabric of normal reality.',
    replacedFeatures: ['Domains', 'Spontaneous Casting'],
    modifiedFeatures: ['Aura'],
    newFeatures: [
      {
        name: 'Extradimensional Source',
        level: 1,
        description:
          'An elder mythos cultist gains her power from an alien entity. She does not select domains; instead, she adds certain occult spells to her spell list, such as confusion, nightmare, and insanity. She gains bonus spells based on her chosen patron entity.',
      },
      {
        name: 'Unspeakable Bond',
        level: 1,
        description:
          "An elder mythos cultist's aura is one of madness rather than alignment. Creatures that detect her aura must succeed on a Will save or be shaken for 1d4 rounds.",
      },
      {
        name: 'Spontaneous Casting (Madness)',
        level: 1,
        description:
          "An elder mythos cultist can spontaneously cast spells from her patron entity's list by sacrificing prepared spells of the same level or higher, rather than casting cure or inflict spells.",
      },
      {
        name: 'Void Channeling',
        level: 5,
        description:
          'At 5th level, when channeling energy, an elder mythos cultist can choose to have her channel deal half its damage as negative energy and half as damage that cannot be resisted or reduced, representing the alien energy of the void.',
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 39. Shoanti Shaman (Cleric)
  // ──────────────────────────────────────────────
  {
    name: 'Shoanti Shaman',
    className: 'Cleric',
    description:
      'A Shoanti shaman is a spiritual leader of the Shoanti people who channels the primal spirits of the land, serving as healer, counselor, and protector of the tribe.',
    replacedFeatures: ['Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Totem Spirit',
        level: 1,
        description:
          'A Shoanti shaman selects a Shoanti quah (clan). She gains specific bonus spells and a totem ability based on her quah. For example, the Lyrune-Quah (Moon Clan) grants darkvision and bonus divination spells.',
      },
      {
        name: 'Spirit Guide',
        level: 5,
        description:
          'At 5th level, a Shoanti shaman can commune with her totem spirit once per day, as the commune spell but limited to questions about the local area, spirits, or threats to her people.',
      },
    ],
    source: 'Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 40. Closeted Cleric
  // ──────────────────────────────────────────────
  {
    name: 'Closeted Cleric',
    className: 'Cleric',
    description:
      'A closeted cleric hides her faith from a hostile society, pretending to worship one deity while secretly serving another. She excels at deception and covert worship.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: ['Aura'],
    newFeatures: [
      {
        name: 'False Piety',
        level: 1,
        description:
          'A closeted cleric selects a false deity in addition to her true deity. Her aura registers as that of her false deity to all forms of magical detection. She gains Bluff as a class skill and adds her Wisdom modifier on Bluff checks to maintain her false identity.',
      },
      {
        name: 'Hidden Symbol',
        level: 1,
        description:
          'A closeted cleric can use a hidden holy symbol (concealed on her person) as her divine focus without needing to present it openly. She can cast spells with divine focus components using subtle gestures.',
      },
      {
        name: 'Covert Channeling',
        level: 3,
        description:
          'At 3rd level, a closeted cleric can channel energy without any visible or audible display. Observers cannot identify the source of the channel energy without a Perception check (DC 10 + cleric level + Wisdom modifier).',
      },
    ],
    source: 'Inner Sea Intrigue',
  },

  // ──────────────────────────────────────────────
  // 41. Divine Paragon
  // ──────────────────────────────────────────────
  {
    name: 'Divine Paragon',
    className: 'Cleric',
    description:
      "A divine paragon is the ultimate expression of her deity's will, gaining an obedience and boons from her deity at the cost of some domain flexibility.",
    replacedFeatures: ['Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Deific Obedience',
        level: 1,
        description:
          'A divine paragon gains Deific Obedience as a bonus feat. She uses her cleric level as her effective Hit Dice for determining what boons she receives from her obedience.',
      },
      {
        name: 'Evangelist Boons',
        level: 5,
        description:
          'At 5th level, a divine paragon gains the first boon of her deity. At 11th level she gains the second boon, and at 14th level she gains the third boon. These are drawn from the evangelist boon list unless she selects the sentinel or exalted path.',
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 42. Triadic Priest
  // ──────────────────────────────────────────────
  {
    name: 'Triadic Priest',
    className: 'Cleric',
    description:
      'A triadic priest worships a group of three allied deities simultaneously, gaining access to a broader range of domains but with reduced specialization.',
    replacedFeatures: [],
    modifiedFeatures: ['Domains'],
    newFeatures: [
      {
        name: 'Triadic Domains',
        level: 1,
        description:
          "A triadic priest selects three allied deities to worship. She selects her two domains from the combined domain lists of all three deities. She can prepare domain spells from any of the three deities' domain lists each day.",
      },
      {
        name: 'Shared Blessings',
        level: 8,
        description:
          'At 8th level, a triadic priest can call upon the combined might of her three patron deities. Once per day as a swift action, she can add +2 to the save DC of a single spell she casts. At 16th level, this bonus increases to +4.',
      },
    ],
    source: 'Inner Sea Faiths',
  },

  // ──────────────────────────────────────────────
  // 43. Aontrai
  // ──────────────────────────────────────────────
  {
    name: 'Aontrai',
    className: 'Cleric',
    description:
      "An aontrai is a cleric who serves as a missionary and traveler, wandering the world to spread her deity's faith and gain converts among foreign peoples.",
    replacedFeatures: ['Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Wanderer's Lore",
        level: 1,
        description:
          'An aontrai gains all Knowledge skills as class skills and adds half her cleric level (minimum 1) as a bonus on Knowledge (geography) and Knowledge (local) checks. She gains one bonus language at each odd cleric level.',
      },
      {
        name: "Traveler's Ward",
        level: 1,
        description:
          'An aontrai can place a protective ward on herself and a number of allies equal to her Wisdom modifier. Warded creatures gain a +1 sacred bonus to AC and on saving throws while traveling overland. This bonus increases by +1 at 8th and 16th levels.',
      },
    ],
    source: 'Faiths and Philosophies',
  },

  // ──────────────────────────────────────────────
  // 44. Cleric of the Green Faith
  // ──────────────────────────────────────────────
  {
    name: 'Cleric of the Green Faith',
    className: 'Cleric',
    description:
      'A cleric of the Green Faith worships nature itself rather than a specific deity, gaining access to druidic magic alongside her divine power.',
    replacedFeatures: ['Domains'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Nature Priest',
        level: 1,
        description:
          'A cleric of the Green Faith selects two domains from the following: Air, Animal, Earth, Fire, Plant, Water, or Weather. She cannot select domains not on this list. She adds Knowledge (nature) and Survival to her class skills.',
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'A cleric of the Green Faith gains wild empathy as the druid ability, using her cleric level as her druid level.',
      },
    ],
    source: 'Faiths and Philosophies',
  },

  // ──────────────────────────────────────────────
  // 45. Idealist
  // ──────────────────────────────────────────────
  {
    name: 'Idealist',
    className: 'Cleric',
    description:
      'An idealist is a cleric who follows a philosophy or ideal rather than a specific deity, drawing divine power from the strength of her convictions.',
    replacedFeatures: [],
    modifiedFeatures: ['Domains', 'Aura'],
    newFeatures: [
      {
        name: 'Philosophical Focus',
        level: 1,
        description:
          "An idealist does not worship a deity. She selects two domains from any available domains that match her philosophical beliefs (subject to GM approval). Her aura matches her alignment rather than a deity's alignment.",
      },
      {
        name: 'Inspired Conviction',
        level: 1,
        description:
          'Once per day, an idealist can draw upon the strength of her convictions to add a +2 morale bonus on a single attack roll, saving throw, or skill check. This bonus increases to +3 at 10th level and +4 at 20th level.',
      },
    ],
    source: 'Faiths and Philosophies',
  },

  // ──────────────────────────────────────────────
  // 46. Раtient Ambusher (Norgorber)
  // ──────────────────────────────────────────────
  {
    name: 'Patient Ambusher',
    className: 'Cleric',
    description:
      'A patient ambusher is a cleric who specializes in stealth and assassination, using divine magic to enhance her ability to strike from the shadows.',
    replacedFeatures: [
      'Medium Armor Proficiency',
      'Heavy Armor Proficiency',
      'Shield Proficiency',
      'Domain (1st domain)',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sneak Attack',
        level: 1,
        description:
          'A patient ambusher gains sneak attack as a rogue of her cleric level - 2 (minimum +1d6). At 1st level she gains +1d6 sneak attack damage. This increases by +1d6 at 5th level and every 4 levels thereafter.',
      },
      {
        name: 'Ambush Training',
        level: 1,
        description:
          'A patient ambusher adds Stealth to her class skills and gains a +2 bonus on initiative checks. She is proficient with all simple and martial weapons but only light armor.',
      },
      {
        name: 'Divine Assassin',
        level: 8,
        description:
          'At 8th level, a patient ambusher can study a target for 1 round as a standard action. On her next attack against that target within 1 round per cleric level, she adds her Wisdom modifier to the attack and damage rolls in addition to any sneak attack damage.',
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 47. Separatist (Razmiran Priest)
  // ──────────────────────────────────────────────
  {
    name: 'Razmiran Priest',
    className: 'Cleric',
    description:
      'A Razmiran priest serves the Living God Razmir, who is actually a mortal wizard. These priests use arcane magic disguised as divine power to maintain the fraud.',
    replacedFeatures: ['Domains', 'Spontaneous Casting', 'Channel Energy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'False Channel',
        level: 1,
        description:
          'A Razmiran priest can channel energy, but uses scrolls or potions to produce the effect rather than true divine power. She must expend a scroll or potion of cure/inflict wounds to channel energy. The channel functions as normal but requires the consumed item.',
      },
      {
        name: 'False Casting',
        level: 1,
        description:
          'A Razmiran priest casts divine spells from scrolls and wands, using Use Magic Device in place of true spellcasting. She gains a bonus on UMD checks equal to her cleric level. She does not prepare or cast spells normally.',
      },
      {
        name: 'Master of Lies',
        level: 1,
        description:
          'A Razmiran priest gains a +4 bonus on Bluff checks to pass off her magic as divine spellcasting. At 8th level, this bonus increases to +8.',
      },
    ],
    source: 'Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 48. Undead Scourge
  // ──────────────────────────────────────────────
  {
    name: 'Undead Scourge',
    className: 'Cleric',
    description:
      'An undead scourge is a cleric dedicated to the destruction of undead, channeling positive energy with devastating effect against the unliving.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Smite Undead',
        level: 1,
        description:
          'An undead scourge gains the ability to smite undead as a swift action. She adds her Charisma modifier to attack rolls and her cleric level to damage rolls against undead for 1 round. She can use this ability a number of times per day equal to 1 + her Charisma modifier.',
      },
      {
        name: 'Bonus Feat',
        level: 1,
        description:
          'An undead scourge gains Command Undead or Turn Undead as a bonus feat at 1st level. She also gains Extra Channel as a bonus feat at 4th level.',
      },
      {
        name: 'Empowered Channel',
        level: 8,
        description:
          'At 8th level, when an undead scourge channels positive energy to damage undead, she adds her Charisma modifier to the damage dealt. At 16th level, she adds double her Charisma modifier.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 49. Theologian (Variant) - Deity's Favored
  // ──────────────────────────────────────────────
  {
    name: "Deity's Favored",
    className: 'Cleric',
    description:
      "A deity's favored is chosen by her god to serve as a special instrument of divine will, gaining a unique favored weapon bond and enhanced combat prowess.",
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sacred Weapon',
        level: 1,
        description:
          "A deity's favored gains Weapon Focus with her deity's favored weapon as a bonus feat. At 1st level, her deity's favored weapon deals damage as if she were a warpriest of her cleric level.",
      },
      {
        name: 'Divine Weapon Bond',
        level: 4,
        description:
          "At 4th level, as a standard action, a deity's favored can enhance her deity's favored weapon with a +1 enhancement bonus for 1 minute per cleric level. For every 4 levels beyond 4th, this bonus increases by +1 (max +5 at 20th). She can also add weapon special abilities (flaming, holy, etc.) in place of enhancement bonuses.",
      },
    ],
    source: "Weapon Master's Handbook",
  },

  // ──────────────────────────────────────────────
  // 50. Mercenary Healer
  // ──────────────────────────────────────────────
  {
    name: 'Mercenary Healer',
    className: 'Cleric',
    description:
      'A mercenary healer sells her healing services for profit, using divine magic as a commodity. She is skilled at appraisal and negotiation alongside her divine abilities.',
    replacedFeatures: ['Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Healing for Hire',
        level: 1,
        description:
          'A mercenary healer gains Appraise and Profession (merchant) as class skills. When she uses channel energy or a cure spell on a willing creature, she can demand payment. If the creature agrees to pay, the healing is enhanced by 50% (rounded down).',
      },
      {
        name: 'Efficient Healer',
        level: 5,
        description:
          'At 5th level, a mercenary healer can cast cure spells using a spell slot one level lower than normal (minimum 1st-level slot). She can use this ability a number of times per day equal to her Wisdom modifier.',
      },
    ],
    source: 'Quests and Campaigns',
  },

  // ──────────────────────────────────────────────
  // 51. Cloistered Cleric (PF1e version)
  // ──────────────────────────────────────────────
  // Note: Already included above as entry #5

  // ──────────────────────────────────────────────
  // 52. Herald Caller (variant - already included as #14)
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // 53. Shaman of the Sacred Pool
  // ──────────────────────────────────────────────
  {
    name: 'Sacred Attendant',
    className: 'Cleric',
    description:
      'A sacred attendant is a halfling cleric who tends to the spiritual needs of her community with exceptional skill, channeling positive energy with particular effectiveness.',
    replacedFeatures: ['Domain (1st domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Community Healer',
        level: 1,
        description:
          'When a sacred attendant channels positive energy, she can choose a number of allies equal to her Wisdom modifier. These allies heal an additional 1d6 points of damage from the channel. This bonus increases by 1d6 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Protective Ward',
        level: 1,
        description:
          'A sacred attendant can place a ward on an ally as a standard action, granting a +2 deflection bonus to AC for a number of rounds equal to 3 + her Wisdom modifier. She can use this ability a number of times per day equal to 3 + her Wisdom modifier.',
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // Firebrand Preacher
  // ──────────────────────────────────────────────
  {
    name: 'Firebrand Preacher',
    className: 'Cleric',
    description:
      'A firebrand preacher is a passionate, militant servant of her deity who inspires allies and demoralizes foes through impassioned sermons and divine wrath.',
    replacedFeatures: ['Channel Energy', 'Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Fiery Speech',
        level: 1,
        description:
          'The firebrand preacher can deliver a rousing sermon as a standard action, granting all allies within 30 feet a +1 morale bonus on attack rolls and weapon damage rolls for a number of rounds equal to her Charisma modifier. This bonus increases by +1 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Denounce',
        level: 1,
        description:
          'As a standard action, the firebrand preacher can denounce an enemy within 30 feet, causing the target to become shaken for a number of rounds equal to her cleric level (Will save negates; DC = 10 + half cleric level + Charisma modifier). Creatures already shaken become frightened for 1 round instead.',
      },
      {
        name: 'Sermon of Wrath',
        level: 8,
        description:
          'At 8th level, when the firebrand preacher uses Fiery Speech, she can also apply a –2 penalty on saving throws to all enemies within 30 feet for the same duration. Enemies who fail a Will save (DC 10 + half cleric level + Charisma modifier) are shaken for 1 round.',
      },
    ],
    source: 'Pathfinder Player Companion: Faiths and Philosophies',
  },

  // ──────────────────────────────────────────────
  // Hallowed Necromancer (Cleric)
  // ──────────────────────────────────────────────
  {
    name: 'Hallowed Necromancer',
    className: 'Cleric',
    description:
      'A hallowed necromancer is a good-aligned cleric who harnesses necromantic power not to create undead but to destroy them utterly, channeling holy energy through necromantic formulae.',
    replacedFeatures: ['Channel Energy', 'Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hallowed Necromancy',
        level: 1,
        description:
          'The hallowed necromancer gains a pool of hallowed energy equal to 3 + her Wisdom modifier. She can expend points from this pool to augment her channeled energy: spending 1 point allows her channel to also destroy any undead creature reduced to 0 hit points, leaving no remains that could be reanimated.',
      },
      {
        name: 'Detect Undead',
        level: 1,
        description:
          'The hallowed necromancer can use detect undead at will as a spell-like ability. She gains a +4 bonus on Perception checks to notice undead creatures and is never surprised by undead.',
      },
      {
        name: 'Corpse Ward',
        level: 4,
        description:
          'At 4th level, the hallowed necromancer can consecrate a corpse as a standard action by touch, preventing it from being animated as undead for 24 hours per cleric level. She can have a number of corpses warded equal to her Wisdom modifier at any one time.',
      },
      {
        name: 'Disrupt Undead Mastery',
        level: 8,
        description:
          "At 8th level, the hallowed necromancer's channel energy treats all undead as if they had half their normal channel resistance. Additionally, undead that fail their save against her channel energy are also staggered for 1 round.",
      },
    ],
    source: "Pathfinder Player Companion: Undead Slayer's Handbook",
  },

  // ──────────────────────────────────────────────
  // Hidden Cultist
  // ──────────────────────────────────────────────
  {
    name: 'Hidden Cultist',
    className: 'Cleric',
    description:
      'A hidden cultist worships a prohibited deity in secret, concealing her divine power behind a mundane facade while developing abilities to infiltrate and deceive.',
    replacedFeatures: ['Aura', 'Channel Energy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hidden Aura',
        level: 1,
        description:
          'The hidden cultist can suppress her divine aura as an immediate action. While suppressed, she registers as a non-cleric (or as a cleric of a neutral faith) to detect spells. Activating or suppressing the aura is a free action once per round.',
      },
      {
        name: 'Mask Alignment',
        level: 1,
        description:
          'The hidden cultist gains the Deceitful feat as a bonus feat and adds her cleric level to Bluff checks made to conceal her faith or alignment. She can also use Disguise in place of Bluff when dealing with divine detect effects.',
      },
      {
        name: 'Cult Secret',
        level: 4,
        description:
          'At 4th level, the hidden cultist selects one of the following abilities: Poison Use (as assassin), Trapfinding (as rogue), or a single rogue talent. This reflects secret training received from her cult.',
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Corruption',
  },

  // ──────────────────────────────────────────────
  // Inner Sea Pirate
  // ──────────────────────────────────────────────
  {
    name: 'Inner Sea Pirate',
    className: 'Cleric',
    description:
      'An Inner Sea pirate cleric serves a deity of the sea, plunder, or freedom and trades some clerical formality for the gritty survival skills of a nautical corsair.',
    replacedFeatures: ['Domain (2nd domain)', 'Channel Energy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sea Legs',
        level: 1,
        description:
          'The Inner Sea pirate gains the Sea Legs feat as a bonus feat even if she does not meet the prerequisites. She is never at risk of falling overboard from normal ship movement and gains a +2 bonus on Swim checks.',
      },
      {
        name: 'Brine Blessing',
        level: 1,
        description:
          'Once per day, the Inner Sea pirate can call on her deity to grant herself or an ally a +4 sacred (or profane) bonus on Swim checks and immunity to the nauseated condition from sea sickness for 1 hour per cleric level.',
      },
      {
        name: 'Plunder and Pillage',
        level: 4,
        description:
          'At 4th level, the Inner Sea pirate can spontaneously convert any prepared spell into a summon monster spell of the same level, but only to summon aquatic or amphibious creatures.',
      },
      {
        name: 'Walk the Plank',
        level: 8,
        description:
          'At 8th level, once per day as a standard action, the Inner Sea pirate can issue a divine command that forces a single creature within 30 feet to move directly toward the nearest body of water or edge (Will save negates; DC = 10 + half cleric level + Wisdom modifier). The creature moves at its full speed each round for 1 round per cleric level or until it enters water or falls.',
      },
    ],
    source: 'Pathfinder Player Companion: Pirates of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // Lore Keeper (Cleric)
  // ──────────────────────────────────────────────
  {
    name: 'Lore Keeper',
    className: 'Cleric',
    description:
      "A lore keeper is a cleric who sacrifices some of her deity's combat power to pursue divine scholarship, gaining unparalleled knowledge of history and the planes.",
    replacedFeatures: ['Channel Energy', 'Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Lore',
        level: 1,
        description:
          'The lore keeper adds half her cleric level (minimum 1) as a bonus on all Knowledge skill checks and may make all Knowledge checks untrained.',
      },
      {
        name: 'Divine Knowledge',
        level: 1,
        description:
          'Once per day per 2 cleric levels, the lore keeper can ask her deity a question as a full-round action, as if using the divination spell. The result is always at least 90% accurate.',
      },
      {
        name: 'Recall',
        level: 4,
        description:
          'At 4th level, the lore keeper gains the ability to perfectly recall any piece of information she has personally read, heard, or experienced. This functions as the eidetic memory bardic ability but applies to all Knowledge skills.',
      },
      {
        name: 'Sacred Library',
        level: 8,
        description:
          "At 8th level, once per day the lore keeper can tap into her deity's complete divine knowledge as a full-round action, gaining a +20 insight bonus on a single Knowledge check. This check cannot fail on a natural 1.",
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Purity',
  },

  // ──────────────────────────────────────────────
  // Monastic Disciple
  // ──────────────────────────────────────────────
  {
    name: 'Monastic Disciple',
    className: 'Cleric',
    description:
      'A monastic disciple is a cleric who trains in a contemplative religious order, blending divine magic with disciplined martial and mental practices borrowed from the monk tradition.',
    replacedFeatures: ['Channel Energy', 'Domain (1st domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Monastic Training',
        level: 1,
        description:
          'The monastic disciple gains Improved Unarmed Strike as a bonus feat and treats her cleric level as her monk level for the purpose of determining her unarmed strike damage. Her unarmed strikes are treated as magic weapons for the purpose of overcoming damage reduction.',
      },
      {
        name: 'Ascetic Movement',
        level: 1,
        description:
          'The monastic disciple gains a +10-foot enhancement bonus to her base land speed while wearing light armor or no armor and not carrying a medium or heavy load.',
      },
      {
        name: 'Still Mind',
        level: 4,
        description:
          'At 4th level, the monastic disciple gains a +2 bonus on saving throws against enchantment spells and effects.',
      },
      {
        name: 'Ki Strike',
        level: 8,
        description:
          'At 8th level, the monastic disciple gains a ki pool equal to half her Wisdom modifier (minimum 1). She can spend 1 ki point as a swift action to gain one additional attack at her highest base attack bonus when making a full-attack action with her unarmed strike.',
      },
    ],
    source: 'Pathfinder Player Companion: Faiths & Philosophies',
  },

  // ──────────────────────────────────────────────
  // Pilgrim
  // ──────────────────────────────────────────────
  {
    name: 'Pilgrim',
    className: 'Cleric',
    description:
      'A pilgrim is a wandering cleric who finds spiritual strength through travel and hardship, gaining boons from the journey itself rather than from a fixed religious institution.',
    replacedFeatures: ['Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Wanderer's Blessing",
        level: 1,
        description:
          'The pilgrim gains a +2 bonus on Survival checks and Constitution checks to avoid nonlethal damage from a forced march. She and all allies within 30 feet reduce overland travel time by 10% when she leads the group.',
      },
      {
        name: 'Road Wisdom',
        level: 1,
        description:
          'The pilgrim gains one of the following as a bonus skill: Diplomacy, Linguistics, or Survival. She adds her Wisdom modifier as a bonus on Diplomacy checks to gather information in a settlement she has visited before.',
      },
      {
        name: 'Sacred Journey',
        level: 4,
        description:
          'At 4th level, once per day, the pilgrim can designate a specific destination as her sacred journey. While traveling toward that destination, she and her companions are warded from hostile weather and suffer no penalties from poor environmental conditions such as extreme heat or cold.',
      },
      {
        name: "Pilgrim's Grace",
        level: 8,
        description:
          "At 8th level, the pilgrim's wandering lifestyle grants her a divine boon. She can use any one of the following once per day: longstrider, hero's feast (self only), or find the path.",
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Golarion',
  },

  // ──────────────────────────────────────────────
  // Planecaller
  // ──────────────────────────────────────────────
  {
    name: 'Planecaller',
    className: 'Cleric',
    description:
      'A planecaller specializes in planar binding and summoning, trading broad clerical versatility for deep expertise in calling and commanding outsiders from beyond the Material Plane.',
    replacedFeatures: ['Channel Energy', 'Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Planar Calling',
        level: 1,
        description:
          'The planecaller adds all summon monster spells to her cleric spell list. When casting summon monster spells, she can choose to summon outsiders of any alignment without alignment-based penalties. The duration of her summon monster spells is doubled.',
      },
      {
        name: 'Planar Focus',
        level: 1,
        description:
          'The planecaller gains a +2 bonus on Charisma checks and Charisma-based skill checks when interacting with outsiders. This bonus applies to planar binding and planar ally spells.',
      },
      {
        name: 'Binding Circle',
        level: 4,
        description:
          'At 4th level, the planecaller can draw a binding circle as a 10-minute ritual that acts as a magic circle against chaos, evil, good, or law (her choice) but enhanced to also prevent the contained outsider from using any teleportation or extradimensional travel abilities.',
      },
      {
        name: 'Planar Mastery',
        level: 8,
        description:
          'At 8th level, the planecaller can cast planar ally once per day as a spell-like ability without expending a spell slot. The called outsider serves for 1 hour per cleric level and does not require payment for standard tasks.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of Angels',
  },

  // ──────────────────────────────────────────────
  // Ravener Hunter (Cleric)
  // ──────────────────────────────────────────────
  {
    name: 'Ravener Hunter',
    className: 'Cleric',
    description:
      'A ravener hunter is a cleric devoted to the destruction of ravenous undead and the creatures that prey on civilization, channeling divine power specifically against these foes.',
    replacedFeatures: ['Domain (2nd domain)', 'Channel Energy'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Favored Enemy (Undead)',
        level: 1,
        description:
          'The ravener hunter gains undead as a favored enemy, gaining a +2 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against undead, as well as a +2 bonus on weapon attack and damage rolls. These bonuses increase by +2 at 5th level and every 5 levels thereafter.',
      },
      {
        name: 'Disrupt Undead',
        level: 1,
        description:
          'The ravener hunter can cast disrupt undead as a spell-like ability at will. At 4th level, the damage increases to 2d6, at 8th level to 3d6, and at 12th level to 4d6.',
      },
      {
        name: 'Quarry',
        level: 8,
        description:
          'At 8th level, the ravener hunter can designate one undead creature as her quarry as a free action. Against her quarry, she gains a +2 insight bonus on attack rolls and her critical hit multiplier increases by 1. She can have only one quarry at a time.',
      },
    ],
    source: 'Pathfinder Player Companion: Champions of Purity',
  },

  // ──────────────────────────────────────────────
  // Temple Builder
  // ──────────────────────────────────────────────
  {
    name: 'Temple Builder',
    className: 'Cleric',
    description:
      'A temple builder is a cleric who dedicates herself to constructing, consecrating, and maintaining holy sites, gaining powers related to sacred architecture and divine wards.',
    replacedFeatures: ['Channel Energy', 'Domain (2nd domain)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sacred Construction',
        level: 1,
        description:
          'The temple builder can consecrate an area as a 1-hour ritual, creating a 30-foot-radius sacred zone centered on a fixed point. Within this zone, all allies gain a +1 morale bonus on saving throws against fear and a +1 sacred (or profane) bonus on attack rolls. The zone lasts until dispelled.',
      },
      {
        name: 'Stonecutting',
        level: 1,
        description:
          'The temple builder gains a +2 bonus on all Craft checks related to construction or stonecutting and on Perception checks to notice unusual stonework. She can detect if a structure has been supernaturally constructed with a DC 15 Perception check.',
      },
      {
        name: 'Ward the Temple',
        level: 4,
        description:
          'At 4th level, the temple builder can spend 10 minutes sanctifying a building or defined area up to 100 square feet per cleric level. While within this warded area, allies gain a +4 bonus on saving throws against spells cast by creatures outside the warded area.',
      },
      {
        name: 'Living Temple',
        level: 8,
        description:
          'At 8th level, once per day, the temple builder can cause a structure she has warded to temporarily animate and defend itself, functioning as a wall of stone at her caster level for 1 minute, or as a spiritual weapon that strikes enemies who attempt to damage or desecrate the structure.',
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Balance',
  },

  // ──────────────────────────────────────────────
  // Urban Apostle
  // ──────────────────────────────────────────────
  {
    name: 'Urban Apostle',
    className: 'Cleric',
    description:
      'An urban apostle is a street-level divine servant who operates among the common people of cities, serving as confessor, healer, and protector to the urban poor and downtrodden.',
    replacedFeatures: ['Domain (2nd domain)'],
    modifiedFeatures: ['Channel Energy'],
    newFeatures: [
      {
        name: 'Voice of the People',
        level: 1,
        description:
          'The urban apostle adds Diplomacy, Knowledge (local), and Linguistics to her list of class skills. She also gains a +2 bonus on Diplomacy checks in urban environments and a bonus on Knowledge (local) checks equal to half her cleric level.',
      },
      {
        name: 'Urban Channel',
        level: 1,
        description:
          'When the urban apostle channels positive energy in an urban settlement, she can choose to affect only humanoids (excluding herself). This selective channeling does not count against the normal limit of creatures she can exclude from a channel.',
      },
      {
        name: 'Community Aid',
        level: 4,
        description:
          'At 4th level, once per day, the urban apostle can grant a number of creatures equal to her Wisdom modifier the ability to take 10 on any one skill check in the next 24 hours even in stressful situations, as long as they remain within the same settlement.',
      },
      {
        name: 'Street Preacher',
        level: 8,
        description:
          'At 8th level, the urban apostle can deliver a 1-minute sermon in a public space to grant all allies who heard it a +1 morale bonus on saving throws against mind-affecting effects and a +2 bonus on Diplomacy checks for 24 hours.',
      },
    ],
    source: 'Pathfinder Player Companion: Heroes of the Streets',
  },
];
