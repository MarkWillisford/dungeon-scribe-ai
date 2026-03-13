import { ArchetypeData } from '../types';

export const SUMMONER_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // BASE SUMMONER ARCHETYPES (Advanced Player's Guide + supplements)
  // ──────────────────────────────────────────────

  // 1. Broodmaster
  // ──────────────────────────────────────────────
  {
    name: 'Broodmaster',
    className: 'Summoner',
    description:
      'Rather than bonding with a single powerful eidolon, the broodmaster forms bonds with multiple smaller eidolons simultaneously, commanding a swarm of lesser creatures. Each broodling is weaker than a standard eidolon but the broodmaster can summon and direct several at once.',
    replacedFeatures: [
      'Eidolon',
      'Bond Senses',
      'Shield Ally',
      "Maker's Call",
      'Transposition',
      'Aspect',
      'Greater Shield Ally',
      'Life Bond',
      'Merge Forms',
      'Greater Aspect',
      'Twin Eidolon',
    ],
    modifiedFeatures: ['Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Broodling',
        level: 1,
        description:
          "The broodmaster gains a number of broodlings equal to 1 + his Constitution modifier (minimum 1). Each broodling is a weaker eidolon that begins with 1 evolution point and 1/4 the standard eidolon's ability score increases. Broodlings share an evolution pool with a total number of points equal to the standard eidolon pool.",
      },
      {
        name: 'Brood Link',
        level: 1,
        description:
          'The broodmaster can communicate with all broodlings telepathically within 100 feet. If a broodling is killed, the broodmaster takes 2d6 points of damage and the remaining broodlings persist. He can resummon killed broodlings as per the standard eidolon resummon rules.',
      },
      {
        name: 'Greater Brood',
        level: 12,
        description:
          'At 12th level, the broodmaster can have up to 1 + his Constitution modifier broodlings active simultaneously, with each sharing a larger evolution pool. He can direct all broodlings with a single command as a free action.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 2. Master Summoner
  // ──────────────────────────────────────────────
  {
    name: 'Master Summoner',
    className: 'Summoner',
    description:
      'The master summoner sacrifices the bond with his eidolon to focus entirely on his summoning magic, gaining access to a wider variety of summoned creatures and enhanced summon monster abilities. His eidolon is significantly weakened, but his summon monster spell-like ability becomes extraordinarily powerful.',
    replacedFeatures: [
      'Shield Ally',
      "Maker's Call",
      'Transposition',
      'Aspect',
      'Greater Shield Ally',
      'Life Bond',
      'Merge Forms',
      'Greater Aspect',
      'Twin Eidolon',
    ],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Lesser Eidolon',
        level: 1,
        description:
          "A master summoner's eidolon is significantly weaker than normal. The eidolon's Hit Dice, saving throw bonuses, attack bonuses, skill ranks, and evolution pool are all reduced by half (rounded down). The eidolon is still dismissed if the summoner falls unconscious.",
      },
      {
        name: 'Enhanced Summon Monster',
        level: 1,
        description:
          "The master summoner's summon monster spell-like ability is usable a number of times per day equal to 5 + his Charisma modifier. Additionally, he can have a number of summoned creatures equal to half his summoner level (minimum 1) active simultaneously, rather than just one.",
      },
      {
        name: 'Rapid Summoning',
        level: 1,
        description:
          'The master summoner can use his summon monster spell-like ability as a standard action instead of a full-round action. This applies only to his summon monster SLA, not to the spell itself if cast separately.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 3. Synthesist
  // ──────────────────────────────────────────────
  {
    name: 'Synthesist',
    className: 'Summoner',
    description:
      "Rather than maintaining a separate eidolon, the synthesist fuses his eidolon to his own body, wearing the creature like a living shell. While fused, the synthesist gains the eidolon's evolutions and physical form, dramatically transforming his capabilities in combat.",
    replacedFeatures: [
      'Bond Senses',
      'Shield Ally',
      "Maker's Call",
      'Transposition',
      'Aspect',
      'Greater Shield Ally',
      'Life Bond',
      'Merge Forms',
      'Greater Aspect',
      'Twin Eidolon',
    ],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Fused Eidolon',
        level: 1,
        description:
          "The synthesist summons the spirit of his eidolon into his own body as a full-round action. While fused, the synthesist gains the eidolon's evolutions, physical ability score increases, natural armor, and natural attacks. He uses the eidolon's physical ability scores if they are higher than his own. The synthesist's hit points and mental ability scores remain his own.",
      },
      {
        name: 'Fused Link',
        level: 1,
        description:
          "The synthesist can take damage in place of his eidolon while fused; any damage dealt to the eidolon form first reduces the temporary hit points granted by the eidolon, then the synthesist's own hit points. Separating from the eidolon is a full-round action.",
      },
      {
        name: 'Shielded Meld',
        level: 4,
        description:
          'At 4th level, while the synthesist is fused with his eidolon, he gains a +2 bonus to AC and to his CMD. This bonus increases to +4 at 12th level.',
      },
      {
        name: "Maker's Jump",
        level: 6,
        description:
          'At 6th level, while the synthesist is fused with his eidolon, he can cast dimension door as a spell-like ability using his summoner level as the caster level. He can use this ability once per day, plus one additional time at 14th level.',
      },
      {
        name: 'Split Forms',
        level: 16,
        description:
          "At 16th level, the synthesist and his eidolon can separate as a swift action, with the eidolon manifesting adjacent to him. The eidolon persists independently for a number of rounds equal to the synthesist's Charisma modifier before being dismissed.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 4. Devil Binder
  // ──────────────────────────────────────────────
  {
    name: 'Devil Binder',
    className: 'Summoner',
    description:
      'The devil binder specializes in the summoning and binding of devils, gaining infernal powers and the ability to call forth more powerful infernal creatures. He trades some of his summon monster versatility for enhanced control over lawful evil outsiders.',
    replacedFeatures: ['Bond Senses', "Maker's Call", 'Aspect', 'Greater Aspect'],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Infernal Eidolon',
        level: 1,
        description:
          "The devil binder's eidolon must be an outsider with the lawful and evil subtypes. It gains the fiendish template's fire resistance 5 and cold resistance 5 at no evolution cost. The summoner gains a +2 bonus on Diplomacy and Intimidate checks against devils and other lawful evil outsiders.",
      },
      {
        name: 'Infernal Summons',
        level: 1,
        description:
          'When the devil binder uses his summon monster SLA, he can only summon creatures with the lawful and/or evil subtypes, but he may summon one creature from one list higher than normal (e.g., summon monster IV can produce a creature from the summon monster V list).',
      },
      {
        name: 'Hellfire Touch',
        level: 4,
        description:
          "At 4th level, the devil binder's eidolon gains a +1d6 fire damage bonus on all natural attacks. This bonus increases to +2d6 at 12th level. This fire damage bypasses fire resistance possessed by evil creatures.",
      },
      {
        name: 'Infernal Bargain',
        level: 8,
        description:
          "At 8th level, the devil binder can offer a soul pledge as part of summoning a devil, extending the duration of a summoned devil to 1 hour per level instead of 1 round per level. Making a bargain has cumulative moral and metaphysical consequences at the GM's discretion.",
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 5. First Worlder
  // ──────────────────────────────────────────────
  {
    name: 'First Worlder',
    className: 'Summoner',
    description:
      'The first worlder forges a connection with the First World, the primordial realm of the fey, bonding with a fey eidolon and gaining access to fey-related summon monster options. His magic takes on the unpredictable and whimsical nature of the First World.',
    replacedFeatures: ['Bond Senses', 'Shield Ally', 'Life Bond', 'Twin Eidolon'],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Fey Eidolon',
        level: 1,
        description:
          "The first worlder's eidolon gains the fey type and loses the outsider type. It gains low-light vision, a +2 bonus to Charisma, and the Fey subtype at no evolution cost. The eidolon has a whimsical nature and may occasionally act independently on whims (GM discretion).",
      },
      {
        name: 'First World Summons',
        level: 1,
        description:
          'When using summon monster, the first worlder may instead summon fey creatures of the appropriate CR, selecting from a fey summon list. Summoned fey gain the advanced template if the first worlder is 8th level or higher.',
      },
      {
        name: 'Primal Magic',
        level: 6,
        description:
          'At 6th level, whenever the first worlder casts a summoner spell, there is a 5% chance the spell is enhanced by primal magic, duplicating the effects of a random spell of equal or lower level. This percentage increases by 1% per 2 levels beyond 6th.',
      },
      {
        name: 'First World Connection',
        level: 16,
        description:
          'At 16th level, the first worlder and his eidolon both gain damage reduction 5/cold iron. The summoner also gains the ability to plane shift to the First World once per week as a spell-like ability.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of the Fey',
  },

  // ──────────────────────────────────────────────
  // 6. Wild Caller
  // ──────────────────────────────────────────────
  {
    name: 'Wild Caller',
    className: 'Summoner',
    description:
      'The wild caller bonds with the natural world rather than extraplanar entities, gaining a nature-based eidolon and expanding his summon monster list to include natural creatures. He trades some arcane power for a stronger connection with nature.',
    replacedFeatures: ['Cantrips', 'Bond Senses', 'Aspect', 'Greater Aspect'],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA', 'Spell List'],
    newFeatures: [
      {
        name: 'Natural Eidolon',
        level: 1,
        description:
          "The wild caller's eidolon must be of the magical beast or animal base form and gains the nature's bond quality, allowing it to serve as a druid's animal companion would. The eidolon gains the Survival skill and Perception as bonus skills.",
      },
      {
        name: "Nature's Call",
        level: 1,
        description:
          'The wild caller adds the following spells to his spell list: entangle, barkskin, call lightning, freedom of movement, and commune with nature. He uses his summon monster SLA to summon creatures from the natural world (animals, magical beasts) in addition to standard outsiders.',
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'The wild caller gains the wild empathy ability as a druid of his summoner level. He can use wild empathy to improve the attitude of his summoned natural creatures, granting them a +2 morale bonus on attack rolls while within 30 feet.',
      },
      {
        name: 'Verdant Aspect',
        level: 10,
        description:
          "At 10th level, the wild caller's eidolon gains the plant subtype in addition to its normal type, gaining immunity to mind-affecting effects and paralysis, and gains the ability to speak with plants at will.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 7. Spirit Summoner
  // ──────────────────────────────────────────────
  {
    name: 'Spirit Summoner',
    className: 'Summoner',
    description:
      'The spirit summoner bonds with a spirit eidolon rather than a physical outsider, calling upon the power of departed souls and spiritual forces. He gains shamanic abilities and access to spirit-based powers at the cost of some physical eidolon capabilities.',
    replacedFeatures: ['Bond Senses', "Maker's Call", 'Transposition', 'Life Bond', 'Merge Forms'],
    modifiedFeatures: ['Eidolon'],
    newFeatures: [
      {
        name: 'Spirit Eidolon',
        level: 1,
        description:
          "The spirit summoner's eidolon is an incorporeal spirit that gains the incorporeal subtype and channel resistance +2 at no evolution cost. The spirit eidolon can pass through solid objects and ignores non-magical armor. It cannot make physical attacks unless it manifests a spiritual form as a swift action.",
      },
      {
        name: 'Spiritual Interference',
        level: 4,
        description:
          "At 4th level, the spirit summoner can direct his eidolon to interfere with a target's spiritual connection to the world. As a standard action, the eidolon can impose a -2 penalty on the target's saves against mind-affecting and death effects for 1 round per summoner level.",
      },
      {
        name: 'Haunting Presence',
        level: 8,
        description:
          "At 8th level, the spirit eidolon generates an aura of spiritual unease in a 10-foot radius. Enemies within this aura become shaken unless they succeed on a Will save (DC 10 + half the summoner's level + his Charisma modifier).",
      },
      {
        name: 'Spirit Walk',
        level: 14,
        description:
          'At 14th level, the spirit summoner can enter a spiritual state as a full-round action, becoming incorporeal himself for a number of rounds equal to his Charisma modifier. While incorporeal, he can interact with his spirit eidolon as though they share the same space.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 8. Morphic Savant
  // ──────────────────────────────────────────────
  {
    name: 'Morphic Savant',
    className: 'Summoner',
    description:
      'The morphic savant has an unusually flexible connection to his eidolon, allowing him to rapidly reshape its evolutions over time. He sacrifices some stability for greater adaptability, able to reassign evolution points more frequently than other summoners.',
    replacedFeatures: ['Shield Ally', 'Greater Shield Ally', 'Life Bond'],
    modifiedFeatures: ['Eidolon', 'Aspect', 'Greater Aspect'],
    newFeatures: [
      {
        name: 'Rapid Evolution',
        level: 1,
        description:
          "The morphic savant can reassign up to 2 evolution points from his eidolon's evolution pool each day during a 1-hour bonding ritual. These points can be placed into any evolutions the eidolon qualifies for. The number of reassignable points increases to 4 at 8th level and 6 at 16th level.",
      },
      {
        name: 'Flexible Form',
        level: 6,
        description:
          "At 6th level, the morphic savant's eidolon can change one evolution mid-combat once per encounter as a full-round action, provided the eidolon is adjacent to the summoner. This reshaping causes the eidolon to become staggered for 1 round afterward.",
      },
      {
        name: 'Instant Adaptation',
        level: 14,
        description:
          "At 14th level, the morphic savant can reshape his eidolon's form as a standard action once per day, instantly reassigning up to 4 evolution points. The eidolon can use the new evolutions immediately and is not staggered by this change.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 9. Evolutionist
  // ──────────────────────────────────────────────
  {
    name: 'Evolutionist',
    className: 'Summoner',
    description:
      'The evolutionist studies the eidolon as a living experiment in magical adaptation, pushing the boundaries of what evolutions are possible. He gains access to experimental evolutions unavailable to standard summoners but must accept unpredictable side effects.',
    replacedFeatures: [
      'Bond Senses',
      'Shield Ally',
      'Greater Shield Ally',
      "Maker's Call",
      'Transposition',
    ],
    modifiedFeatures: ['Eidolon'],
    newFeatures: [
      {
        name: 'Experimental Evolution',
        level: 1,
        description:
          "The evolutionist's eidolon gains access to experimental evolutions each time it would normally gain evolution points. These can include non-standard combinations or enhanced versions of existing evolutions, but each experimental evolution has a 10% chance of causing an unwanted side effect (GM determines).",
      },
      {
        name: 'Adaptive Resilience',
        level: 5,
        description:
          "At 5th level, the evolutionist's eidolon can adapt in response to damage types it receives. When the eidolon takes more than 10 damage of a single type in a round, it gains resistance 5 to that damage type until the beginning of the summoner's next turn.",
      },
      {
        name: 'Accelerated Evolution',
        level: 10,
        description:
          'At 10th level, the evolutionist can spend 1 hour studying his eidolon to grant it 2 bonus evolution points that last 24 hours. These bonus points must be spent on evolutions the eidolon already has, enhancing them to their next tier.',
      },
      {
        name: 'Perfect Evolution',
        level: 18,
        description:
          "At 18th level, the evolutionist's eidolon no longer suffers side effects from experimental evolutions. Additionally, the eidolon gains 2 permanent bonus evolution points that do not count against its normal pool.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 10. Facade Summoner
  // ──────────────────────────────────────────────
  {
    name: 'Facade Summoner',
    className: 'Summoner',
    description:
      'The facade summoner hides the true nature of his eidolon behind a humanoid illusion, passing off his otherworldly companion as a normal person or ally. He gains social abilities and illusion powers that help both summoner and eidolon blend into civilized society.',
    replacedFeatures: [
      'Bond Senses',
      'Shield Ally',
      'Greater Shield Ally',
      'Aspect',
      'Greater Aspect',
    ],
    modifiedFeatures: ['Eidolon'],
    newFeatures: [
      {
        name: 'Disguised Eidolon',
        level: 1,
        description:
          "The facade summoner's eidolon gains the ability to appear as a Medium humanoid of any race as a standard action, as per alter self. This disguise is a supernatural ability with no duration limit. Observers must succeed on a Perception check (DC 10 + summoner level + his Charisma modifier) to see through the disguise.",
      },
      {
        name: 'Social Training',
        level: 1,
        description:
          "The facade summoner and his eidolon gain a bonus equal to half the summoner's level on Disguise, Bluff, and Diplomacy checks. The eidolon can speak and otherwise act as a humanoid while disguised.",
      },
      {
        name: 'Improved Facade',
        level: 8,
        description:
          "At 8th level, the facade summoner's eidolon can perfectly mimic a specific individual it has observed for at least 1 minute, as per disguise self with the additional ability to impersonate that individual. It gains a +10 bonus on Disguise checks to impersonate specific people.",
      },
      {
        name: 'Double Agent',
        level: 14,
        description:
          "At 14th level, the facade summoner can use his eidolon as a remote sensory anchor, seeing through the eidolon's eyes and hearing through its ears at any range, even across planes, for up to 1 hour per day. During this time the eidolon acts autonomously according to last given instructions.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 11. Ferocious Summoner
  // ──────────────────────────────────────────────
  {
    name: 'Ferocious Summoner',
    className: 'Summoner',
    description:
      'The ferocious summoner pushes his eidolon to greater heights of destructive power, sacrificing defensive and utility abilities for raw offensive might. Both summoner and eidolon become focused single-mindedly on overwhelming enemies.',
    replacedFeatures: [
      'Bond Senses',
      'Shield Ally',
      "Maker's Call",
      'Greater Shield Ally',
      'Life Bond',
    ],
    modifiedFeatures: ['Eidolon'],
    newFeatures: [
      {
        name: 'Ferocious Eidolon',
        level: 1,
        description:
          "The ferocious summoner's eidolon gains a +2 morale bonus on attack rolls and damage rolls but takes a -2 penalty to AC. At 8th level these bonuses and penalties double to +4 and -4 respectively.",
      },
      {
        name: 'Battle Bond',
        level: 4,
        description:
          "At 4th level, when the ferocious summoner's eidolon confirms a critical hit, the summoner gains a +2 morale bonus on concentration checks and caster level checks until the end of his next turn. This bonus increases to +4 at 12th level.",
      },
      {
        name: 'Killing Frenzy',
        level: 10,
        description:
          "At 10th level, when the ferocious summoner's eidolon reduces a creature to 0 or fewer hit points, the eidolon gains an additional attack at its highest attack bonus as an immediate action. This ability can trigger only once per round.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 12. Godcaller
  // ──────────────────────────────────────────────
  {
    name: 'Godcaller',
    className: 'Summoner',
    description:
      "The godcaller channels the power of a deity through his summoning magic, binding his eidolon to represent an aspect of divine might. His summon monster list is aligned to his patron deity's portfolio, and he gains divine-flavored abilities reflecting his god's domain.",
    replacedFeatures: [
      'Bond Senses',
      'Shield Ally',
      "Maker's Call",
      'Transposition',
      'Aspect',
      'Greater Aspect',
    ],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA', 'Spell List'],
    newFeatures: [
      {
        name: 'Divine Eidolon',
        level: 1,
        description:
          "The godcaller must be a worshiper of a specific deity. His eidolon gains the celestial or fiendish template (matching the deity's alignment) at no evolution cost and gains a sacred or profane bonus to one ability score equal to the summoner's Charisma modifier divided by 2.",
      },
      {
        name: 'Domain Summons',
        level: 1,
        description:
          "The godcaller's summon monster list is filtered to include only creatures appropriate to his deity's portfolio and alignment. However, he may summon one creature of a type one step above his current SLA level when summoning creatures aligned with his deity.",
      },
      {
        name: 'Divine Invocation',
        level: 6,
        description:
          'At 6th level, the godcaller can beseech his deity for aid once per day as a standard action. He gains the benefit of a prayer spell for a number of rounds equal to his Charisma modifier, using his summoner level as the caster level.',
      },
      {
        name: 'Avatar Aspect',
        level: 14,
        description:
          "At 14th level, the godcaller's eidolon temporarily transforms into a divine avatar once per day as a full-round action, gaining the advanced template and a divine aura that causes all enemies within 30 feet to be shaken for 1 round per summoner level (Will negates).",
      },
    ],
    source: 'Pathfinder Player Companion: Divine Anthology',
  },

  // ──────────────────────────────────────────────
  // 13. Naturalist
  // ──────────────────────────────────────────────
  {
    name: 'Naturalist',
    className: 'Summoner',
    description:
      "The naturalist bonds with an eidolon that mimics a natural animal, gaining abilities that blur the line between summoner and druid. He exchanges some arcane summoning flexibility for the ability to call upon nature's power and empathize with animals.",
    replacedFeatures: ['Bond Senses', "Maker's Call", 'Transposition', 'Life Bond', 'Merge Forms'],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Animal Eidolon',
        level: 1,
        description:
          "The naturalist's eidolon must use the quadruped or serpentine base form and represents a powerful natural animal. It gains a bonus on Survival and Perception checks equal to half the summoner's level and can be used as a mount by the summoner without requiring Handle Animal checks.",
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'The naturalist gains wild empathy as a ranger of his summoner level. He can use this ability on his eidolon to grant it a +4 morale bonus on attack and damage rolls against a specific target for 1 minute.',
      },
      {
        name: "Nature's Summons",
        level: 3,
        description:
          'When using summon monster, the naturalist may instead summon animals or magical beasts of the appropriate CR. Summoned animals under his control gain a +2 morale bonus to attack and damage rolls while within 30 feet of his eidolon.',
      },
      {
        name: 'Pack Tactics',
        level: 10,
        description:
          "At 10th level, the naturalist's eidolon and any summoned animals all gain the ability to flank cooperatively; if two of the naturalist's summoned creatures are flanking the same target, all of the naturalist's creatures attacking that target gain a flanking bonus.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 14. Soulbound Summoner
  // ──────────────────────────────────────────────
  {
    name: 'Soulbound Summoner',
    className: 'Summoner',
    description:
      'The soulbound summoner ties the very essence of his soul to his eidolon, creating an unbreakable bond that grants both tremendous power but also makes their fates inextricably linked. Damage to one affects the other, but both become far more powerful as a result.',
    replacedFeatures: [
      'Bond Senses',
      'Shield Ally',
      "Maker's Call",
      'Transposition',
      'Greater Shield Ally',
    ],
    modifiedFeatures: ['Eidolon', 'Life Bond'],
    newFeatures: [
      {
        name: 'Soul Bond',
        level: 1,
        description:
          'The soulbound summoner and his eidolon are permanently linked at the soul level. Any time either takes damage, the other takes half that amount. They share a pool of "soul points" equal to the summoner\'s level + his Charisma modifier that can be spent to negate damage to either party (1 point per 5 damage negated).',
      },
      {
        name: 'Shared Resilience',
        level: 4,
        description:
          'At 4th level, the soulbound summoner and his eidolon share saving throw bonuses; both use whichever bonus is higher for each save type. Additionally, any condition affecting one (such as fear or confusion) can be voluntarily transferred to the other as an immediate action.',
      },
      {
        name: 'Empowered Bond',
        level: 12,
        description:
          "At 12th level, the soulbound summoner gains 2 bonus evolution points that may only be spent on evolutions that also grant an ability to the summoner himself (such as ability score increases or resistances). These points do not count against the eidolon's normal pool.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 15. Shadow Caller
  // ──────────────────────────────────────────────
  {
    name: 'Shadow Caller',
    className: 'Summoner',
    description:
      "The shadow caller draws forth creatures of shadow and darkness, bonding with a shadow-touched eidolon and summoning creatures from the Shadow Plane. He gains stealth and shadow abilities but loses some of the standard summoner's bright magical versatility.",
    replacedFeatures: [
      'Bond Senses',
      'Shield Ally',
      "Maker's Call",
      'Greater Shield Ally',
      'Aspect',
    ],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Shadow Eidolon',
        level: 1,
        description:
          "The shadow caller's eidolon has the shadow subtype and gains darkvision 60 ft., hide in plain sight in areas of dim light or darkness, and a +4 racial bonus on Stealth checks. The eidolon's natural attacks deal half their damage as cold damage.",
      },
      {
        name: 'Shadow Summons',
        level: 1,
        description:
          'When the shadow caller uses his summon monster SLA, he may summon shadow-touched variants of the listed creatures. Shadow-touched creatures gain darkvision 60 ft. and deal an additional 1d6 cold damage with natural attacks but have their hit points reduced by 10%.',
      },
      {
        name: 'Umbral Bond',
        level: 6,
        description:
          'At 6th level, the shadow caller can step into a shadow and emerge from another shadow within 30 feet as a move action, provided both shadows are at least 1 square in size. He can bring his eidolon with him if it is within 5 feet. He can use this ability a number of times per day equal to his Charisma modifier.',
      },
      {
        name: 'Shadowform',
        level: 14,
        description:
          'At 14th level, the shadow caller can become a living shadow once per day as a full-round action for a number of rounds equal to his summoner level. While in shadow form, he is incorporeal, can merge with any shadow, and gains a +20 bonus on Stealth checks.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of Shadows',
  },

  // ──────────────────────────────────────────────
  // 16. Controller
  // ──────────────────────────────────────────────
  {
    name: 'Controller',
    className: 'Summoner',
    description:
      'The controller focuses on dominating and directing his eidolon and summoned creatures with unparalleled precision, granting them greater tactical flexibility at the cost of some direct power. He excels at coordinating multiple minions in complex battlefield strategies.',
    replacedFeatures: ['Bond Senses', 'Shield Ally', "Maker's Call", 'Greater Shield Ally'],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Tactical Command',
        level: 1,
        description:
          'The controller can issue commands to his eidolon and all summoned creatures as a swift action instead of a move action. All creatures under his command gain a +2 competence bonus on attack rolls when adjacent to at least one other creature under his command.',
      },
      {
        name: 'Battlefield Coordination',
        level: 4,
        description:
          'At 4th level, the controller can use the aid another action on behalf of any creature under his command within 60 feet as a move action, without needing line of effect. This allows him to grant attack or AC bonuses to his minions from behind cover.',
      },
      {
        name: 'Perfect Formation',
        level: 10,
        description:
          'At 10th level, if the controller has his eidolon and at least one summoned creature adjacent to a target, both gain a +4 flanking bonus instead of +2, and all creatures under his command threatening the same target may roll twice and take the better result on their first attack roll each round.',
      },
      {
        name: 'Master Tactician',
        level: 16,
        description:
          "At 16th level, the controller's summoned creatures gain a number of bonus hit points equal to his Charisma modifier and a +2 bonus to all saving throws while within 60 feet of him. He can also redirect a summoned creature's actions to any target as a free action once per round.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // UNCHAINED SUMMONER ARCHETYPES
  // ──────────────────────────────────────────────

  // 17. Unchained Synthesist
  // ──────────────────────────────────────────────
  {
    name: 'Synthesist',
    className: 'Unchained Summoner',
    description:
      "The unchained synthesist fuses with his eidolon as with the base synthesist, but is rebuilt for the unchained summoner's spell list and balanced eidolon framework. While fused, the unchained synthesist gains the eidolon's physical evolutions and form, replacing his own physical ability scores with the eidolon's when they are higher.",
    replacedFeatures: [
      'Bond Senses',
      'Shield Ally',
      "Maker's Call",
      'Transposition',
      'Aspect',
      'Greater Shield Ally',
      'Life Bond',
      'Merge Forms',
      'Greater Aspect',
      'Twin Eidolon',
    ],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Fused Eidolon',
        level: 1,
        description:
          "The unchained synthesist summons his eidolon into his body as a full-round action. While fused, he gains the eidolon's physical ability score modifiers in place of his own when they are higher, the eidolon's natural armor, and all of the eidolon's evolutions. Mental ability scores remain the summoner's own.",
      },
      {
        name: 'Fused Link',
        level: 1,
        description:
          "While fused, the synthesist and eidolon share a single hit point pool. Damage dealt to the fused form reduces the synthesist's actual hit points. The synthesist can separate from the eidolon as a full-round action; the eidolon then has its own hit point total equal to its base maximum.",
      },
      {
        name: 'Shielded Meld',
        level: 4,
        description:
          'At 4th level, while fused with his eidolon, the synthesist gains a +2 shield bonus to AC. This bonus increases by +2 at 8th, 12th, 16th, and 20th levels.',
      },
      {
        name: "Maker's Jump",
        level: 6,
        description:
          'At 6th level, while fused, the synthesist can cast dimension door as a spell-like ability once per day using his summoner level as the caster level. At 14th level he can use this ability twice per day.',
      },
      {
        name: 'Split Forms',
        level: 16,
        description:
          'At 16th level, the synthesist can separate from his eidolon as a swift action. The eidolon manifests adjacent to him and acts independently for a number of rounds equal to his Charisma modifier before returning to its fused state.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 18. Unchained Broodmaster
  // ──────────────────────────────────────────────
  {
    name: 'Broodmaster',
    className: 'Unchained Summoner',
    description:
      "The unchained broodmaster rebuilds the broodmaster concept on the unchained summoner's framework, maintaining multiple weaker eidolons from the unchained eidolon's subtypes. He commands several specialized broodlings rather than one powerful companion, with each broodling drawn from one of the standard unchained eidolon subtypes.",
    replacedFeatures: [
      'Eidolon',
      'Bond Senses',
      'Shield Ally',
      "Maker's Call",
      'Transposition',
      'Aspect',
      'Greater Shield Ally',
      'Life Bond',
      'Merge Forms',
      'Greater Aspect',
      'Twin Eidolon',
    ],
    modifiedFeatures: ['Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Broodlings',
        level: 1,
        description:
          "The unchained broodmaster gains a number of broodlings equal to 1 + his Constitution modifier (minimum 2). Each broodling is a weaker unchained eidolon with half the normal evolution points and hit dice. All broodlings share an evolution pool totaling the normal unchained eidolon's pool.",
      },
      {
        name: 'Brood Link',
        level: 1,
        description:
          "The broodmaster shares a telepathic link with all broodlings within 100 feet. If a broodling is slain, the broodmaster takes 1d6 damage per broodling HD lost and may resummon any slain broodling after resting. The broodlings collectively cannot exceed the summoner's level in total Hit Dice.",
      },
      {
        name: 'Greater Brood',
        level: 12,
        description:
          'At 12th level, each broodling gains 2 additional evolution points. The broodmaster can issue a command to all broodlings simultaneously as a move action rather than a full-round action.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 19. Unchained Master Summoner
  // ──────────────────────────────────────────────
  {
    name: 'Master Summoner',
    className: 'Unchained Summoner',
    description:
      "The unchained master summoner trades the power of his eidolon for an enormously enhanced summon monster ability, built on the unchained summoner's rebalanced spell list. He maintains a diminished eidolon but can flood the battlefield with summoned creatures, calling them as a standard action and maintaining multiple simultaneously.",
    replacedFeatures: [
      'Shield Ally',
      "Maker's Call",
      'Transposition',
      'Aspect',
      'Greater Shield Ally',
      'Life Bond',
      'Merge Forms',
      'Greater Aspect',
      'Twin Eidolon',
    ],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Lesser Eidolon',
        level: 1,
        description:
          "The master summoner's unchained eidolon has its evolution pool reduced by half, its hit dice halved, and its saving throw bonuses reduced by 2. The eidolon is still subject to all normal unchained eidolon rules but is substantially weaker than normal.",
      },
      {
        name: 'Enhanced Summon Monster',
        level: 1,
        description:
          "The unchained master summoner's summon monster SLA is usable 5 + Charisma modifier times per day and can be activated as a standard action. He may have a number of summoned creatures simultaneously equal to half his summoner level, and his summon monster SLA applies the unchained summoner's spell list.",
      },
      {
        name: 'Rapid Calling',
        level: 4,
        description:
          'At 4th level, the unchained master summoner can use his summon monster SLA as a move action instead of a standard action. At 12th level he can use it as a swift action once per round.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 20. Unchained Wild Caller
  // ──────────────────────────────────────────────
  {
    name: 'Wild Caller',
    className: 'Unchained Summoner',
    description:
      "The unchained wild caller adapts the wild caller concept to the unchained summoner's framework, bonding with a nature-themed eidolon and accessing nature spells from the unchained summoner's revised spell list. He blends the unchained summoner's power with the natural world.",
    replacedFeatures: ['Bond Senses', 'Aspect', 'Greater Aspect'],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA', 'Spell List'],
    newFeatures: [
      {
        name: 'Natural Eidolon',
        level: 1,
        description:
          "The unchained wild caller's eidolon must use the quadruped or serpentine subtype from the unchained eidolon framework and gains a +2 bonus to Wisdom, Survival, and Perception as bonus skills at no evolution cost.",
      },
      {
        name: "Nature's Call",
        level: 1,
        description:
          'The unchained wild caller adds entangle, barkskin, call lightning, and freedom of movement to his spell list at their normal spell levels. When using summon monster, he may summon animals and magical beasts in addition to the standard unchained summoner creature list.',
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'The unchained wild caller gains wild empathy as a ranger of his summoner level, which he can also use to influence his summoned natural creatures, granting them a +2 morale bonus on attack rolls for 1 minute per successful check.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 21. Unchained Devil Binder
  // ──────────────────────────────────────────────
  {
    name: 'Devil Binder',
    className: 'Unchained Summoner',
    description:
      "The unchained devil binder specializes in binding infernal outsiders using the unchained summoner's revised framework. His eidolon must reflect an infernal subtype, and his summon monster abilities are focused on devils and other lawful evil outsiders, with enhanced infernal control abilities.",
    replacedFeatures: ['Bond Senses', "Maker's Call", 'Aspect', 'Greater Aspect'],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Infernal Eidolon',
        level: 1,
        description:
          "The unchained devil binder's eidolon must use the quadruped or biped subtype with lawful evil alignment and gains fire resistance 10 and cold resistance 5 at no evolution cost, reflecting its infernal nature. The summoner gains a +2 bonus on Knowledge (planes) checks regarding devils.",
      },
      {
        name: 'Infernal Summons',
        level: 1,
        description:
          "The unchained devil binder's summon monster SLA can only call lawful or evil outsiders, but he may summon one creature from the next higher summon monster list when summoning devils specifically.",
      },
      {
        name: 'Hellfire Aura',
        level: 8,
        description:
          "At 8th level, the unchained devil binder's eidolon radiates an aura of hellfire in a 10-foot radius. Enemies in this aura take 1d6 fire damage per round (no save). This damage increases to 2d6 at 14th level and 3d6 at 20th level.",
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 22. Unchained First Worlder
  // ──────────────────────────────────────────────
  {
    name: 'First Worlder',
    className: 'Unchained Summoner',
    description:
      "The unchained first worlder bonds with a fey-subtype eidolon using the unchained summoner's framework, gaining access to First World magic and fey summons. He exchanges some combat stability for the unpredictable magic of the First World.",
    replacedFeatures: ['Bond Senses', 'Shield Ally', 'Life Bond', 'Twin Eidolon'],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Fey Eidolon',
        level: 1,
        description:
          "The unchained first worlder's eidolon gains the fey creature template modifications (low-light vision, +2 Charisma, DR 5/cold iron at 8th level) at no evolution cost. The eidolon's subtype changes to include fey alongside its normal unchained eidolon subtype.",
      },
      {
        name: 'First World Summons',
        level: 1,
        description:
          'When using summon monster, the unchained first worlder may summon fey creatures in addition to the standard unchained summoner creature list. Summoned fey gain a +1 bonus on saving throws for each 4 summoner levels.',
      },
      {
        name: 'Primal Surge',
        level: 8,
        description:
          "At 8th level, once per day when casting a summoner spell, the unchained first worlder can invoke a primal surge. The spell's caster level increases by 1d4 for this casting, but a roll of 4 causes an additional random First World primal magic event (GM determines).",
      },
    ],
    source: 'Pathfinder Player Companion: Blood of the Fey',
  },

  // ──────────────────────────────────────────────
  // 23. Unchained Spirit Summoner
  // ──────────────────────────────────────────────
  {
    name: 'Spirit Summoner',
    className: 'Unchained Summoner',
    description:
      'The unchained spirit summoner bonds with a spirit eidolon using the unchained framework, tapping into the power of shamanic traditions. His spirit eidolon is incorporeal and shamanic in nature, granting him access to shaman-like abilities tied to the spiritual world.',
    replacedFeatures: ['Bond Senses', "Maker's Call", 'Transposition', 'Life Bond', 'Merge Forms'],
    modifiedFeatures: ['Eidolon'],
    newFeatures: [
      {
        name: 'Spirit Eidolon',
        level: 1,
        description:
          "The unchained spirit summoner's eidolon is incorporeal and gains channel resistance +4 and the ability to become visible or invisible as a free action. It cannot use evolutions that require a physical body (such as claws or pounce) but gains access to special spirit-only evolutions such as haunting strike and spiritual interference.",
      },
      {
        name: 'Spirit Sight',
        level: 4,
        description:
          'At 4th level, the unchained spirit summoner gains the ability to see invisible and ethereal creatures while his spirit eidolon is manifested, as per see invisibility. This is a supernatural sense that costs no action to maintain.',
      },
      {
        name: 'Spiritual Conduit',
        level: 10,
        description:
          "At 10th level, the unchained spirit summoner can channel energy through his spirit eidolon. Once per day, the eidolon can deliver a touch spell of 5th level or lower on the summoner's behalf, even to a target on a different plane as long as the eidolon can reach them.",
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 24. Unchained Morphic Savant
  // ──────────────────────────────────────────────
  {
    name: 'Morphic Savant',
    className: 'Unchained Summoner',
    description:
      "The unchained morphic savant adapts the morphic savant to the unchained summoner's evolution framework, gaining the ability to rapidly reassign unchained eidolon evolution points. His eidolon is flexible and adaptable but never fully optimized in a single direction.",
    replacedFeatures: ['Shield Ally', 'Greater Shield Ally', 'Life Bond'],
    modifiedFeatures: ['Eidolon', 'Aspect', 'Greater Aspect'],
    newFeatures: [
      {
        name: 'Rapid Evolution',
        level: 1,
        description:
          "Once per day during a 1-hour bonding period, the unchained morphic savant can reassign up to 2 evolution points in his unchained eidolon's pool. At 8th level he can reassign up to 4 points, and at 16th level up to 6 points.",
      },
      {
        name: 'Flexible Form',
        level: 6,
        description:
          'At 6th level, the unchained morphic savant can have his eidolon reshape one evolution mid-combat as a full-round action, provided the eidolon is adjacent. The eidolon is staggered for 1 round following the reshaping.',
      },
      {
        name: 'Adaptive Mastery',
        level: 14,
        description:
          'At 14th level, the unchained morphic savant can instantly reassign up to 4 evolution points as a standard action once per day without staggering the eidolon. The eidolon gains the new evolutions immediately.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 25. Unchained Shadow Caller
  // ──────────────────────────────────────────────
  {
    name: 'Shadow Caller',
    className: 'Unchained Summoner',
    description:
      'The unchained shadow caller summons creatures of shadow using the unchained framework, bonding with an eidolon touched by the Shadow Plane. His summon monster list includes shadow-plane creatures and his eidolon gains shadow-based evolutions unavailable to other unchained summoners.',
    replacedFeatures: [
      'Bond Senses',
      'Shield Ally',
      "Maker's Call",
      'Greater Shield Ally',
      'Aspect',
    ],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA'],
    newFeatures: [
      {
        name: 'Shadow Eidolon',
        level: 1,
        description:
          "The unchained shadow caller's eidolon gains the shadow subtype, darkvision 60 ft., a +4 bonus on Stealth checks, and the hide in plain sight ability in dim light or darkness at no evolution cost. The eidolon's damage type with natural attacks includes cold as a secondary component.",
      },
      {
        name: 'Shadow Summons',
        level: 1,
        description:
          'When using his summon monster SLA, the unchained shadow caller may summon creatures from the Shadow Plane (shadow mastiff, shadow demon, etc.) in addition to the standard unchained summoner list. Shadow creatures summoned this way gain a +2 bonus on attack rolls against targets in dim light or darkness.',
      },
      {
        name: 'Step Through Shadow',
        level: 8,
        description:
          'At 8th level, the unchained shadow caller can teleport between shadows up to 40 feet as a move action, bringing his eidolon if it is adjacent. Both arrive in dim light or darkness at the destination. He can use this ability a number of times per day equal to his Charisma modifier.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of Shadows',
  },

  // ──────────────────────────────────────────────
  // 26. Unchained Godcaller
  // ──────────────────────────────────────────────
  {
    name: 'Godcaller',
    className: 'Unchained Summoner',
    description:
      "The unchained godcaller bonds with a divinely infused eidolon on the unchained framework, channeling his deity's power through his summoning. His eidolon reflects divine might rather than purely extraplanar force, and his summon monster options are aligned to his patron deity.",
    replacedFeatures: [
      'Bond Senses',
      'Shield Ally',
      "Maker's Call",
      'Transposition',
      'Aspect',
      'Greater Aspect',
    ],
    modifiedFeatures: ['Eidolon', 'Summon Monster SLA', 'Spell List'],
    newFeatures: [
      {
        name: 'Divine Eidolon',
        level: 1,
        description:
          "The unchained godcaller's eidolon gains a sacred or profane bonus (matching deity alignment) to one ability score equal to half the summoner's Charisma modifier and is treated as having the celestial or fiendish template for purposes of damage reduction and resistances at no evolution cost.",
      },
      {
        name: 'Aligned Summons',
        level: 1,
        description:
          "The unchained godcaller's summon monster SLA is restricted to creatures matching his deity's alignment and portfolio, but he may summon one creature from the next higher list when summoning outsiders of his deity's exact alignment.",
      },
      {
        name: 'Divine Favor',
        level: 6,
        description:
          'At 6th level, once per day as a standard action, the unchained godcaller can call upon his deity for direct favor, granting himself and his eidolon a sacred or profane bonus to attack rolls and saving throws equal to one-quarter his summoner level for a number of rounds equal to his Charisma modifier.',
      },
    ],
    source: 'Pathfinder Player Companion: Divine Anthology',
  },

  // ──────────────────────────────────────────────
  // 27. Unchained Evolutionist
  // ──────────────────────────────────────────────
  {
    name: 'Evolutionist',
    className: 'Unchained Summoner',
    description:
      "The unchained evolutionist studies the unchained eidolon as a mutable magical experiment, pushing unchained evolution framework to its limits. He gains access to enhanced and experimental evolutions but risks instability in his eidolon's form.",
    replacedFeatures: [
      'Bond Senses',
      'Shield Ally',
      'Greater Shield Ally',
      "Maker's Call",
      'Transposition',
    ],
    modifiedFeatures: ['Eidolon'],
    newFeatures: [
      {
        name: 'Experimental Evolution',
        level: 1,
        description:
          "The unchained evolutionist's eidolon can take evolutions from outside its normal subtype list, but each cross-subtype evolution has a 15% chance of triggering an instability event (the eidolon acts erratically for 1 round, per the GM's determination).",
      },
      {
        name: 'Adaptive Resistance',
        level: 5,
        description:
          "At 5th level, the unchained evolutionist's eidolon gains resistance 5 to a damage type that damaged it in the previous round. This adaptation persists until the eidolon takes damage of a different type or the encounter ends.",
      },
      {
        name: 'Superior Evolution',
        level: 10,
        description:
          "At 10th level, the unchained evolutionist's eidolon gains 2 bonus evolution points that cannot be used for cross-subtype evolutions. These points enhance existing evolutions to their maximum tier at reduced cost.",
      },
      {
        name: 'Flawless Form',
        level: 18,
        description:
          'At 18th level, the unchained evolutionist eliminates instability from cross-subtype evolutions. The eidolon gains 2 additional permanent evolution points that can be spent on any evolution regardless of subtype restrictions.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },
];
