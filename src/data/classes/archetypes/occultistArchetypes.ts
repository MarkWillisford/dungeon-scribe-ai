import { ArchetypeData, ClassFeatureData } from '../types';

export const OCCULTIST_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Battle Host
  // ──────────────────────────────────────────────
  {
    name: 'Battle Host',
    className: 'Occultist',
    description:
      "The battle host focuses her psychic power through a single bonded weapon that serves as the nexus of her implement collection. She trades the broad multi-implement approach for intense specialization in her weapon's resonant powers, gaining martial ability at the cost of versatility.",
    replacedFeatures: ['Implements', 'Magic Item Skill', 'Outside Contact', 'Binding Circles'],
    modifiedFeatures: ['Mental Focus', 'Focus Powers', 'Implement Mastery'],
    newFeatures: [
      {
        name: 'Bonded Weapon',
        level: 1,
        description:
          'The battle host selects a single weapon as her bonded implement, which counts as all implement schools for the purpose of focus powers. She invests all her mental focus into this weapon each day and cannot use other implements. The weapon gains a +1 enhancement bonus at 1st level, increasing by 1 for every 4 occultist levels.',
      },
      {
        name: 'Object Lesson',
        level: 2,
        description:
          "The battle host gains proficiency with her bonded weapon regardless of its type, and can apply any combat feat she knows to attacks with the bonded weapon even if she does not otherwise meet the prerequisites. She also adds her occultist level to the weapon's damage rolls against studied targets.",
      },
      {
        name: 'War Mind',
        level: 5,
        description:
          "The battle host's bonded weapon gains the ability to store focus powers, releasing them as part of a melee attack as a swift action. She can spend points from her mental focus as part of an attack to add the effects of any focus power she knows to the weapon's damage.",
      },
      {
        name: 'Weapon Soul',
        level: 11,
        description:
          "The battle host's bonded weapon becomes a semi-sentient artifact of her psychic self, allowing her to call it to her hand as a free action from any distance. If the weapon is destroyed, it reforms in her hand 24 hours later at dawn.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 2. Haunt Collector
  // ──────────────────────────────────────────────
  {
    name: 'Haunt Collector',
    className: 'Occultist',
    description:
      'The haunt collector specializes in capturing, studying, and weaponizing haunts — the lingering psychic impressions of traumatic events. She trades some implement versatility for the ability to interact with and control haunts that would normally be dangerous environmental hazards.',
    replacedFeatures: ['Outside Contact', 'Aura Sight'],
    modifiedFeatures: ['Implements', 'Mental Focus', 'Focus Powers'],
    newFeatures: [
      {
        name: 'Haunt Sense',
        level: 1,
        description:
          "The haunt collector automatically senses the presence of haunts within 60 feet, as the detect undead spell for haunts only. She can spend 1 point of mental focus to identify a haunt's origin, triggering condition, and all effects without triggering it herself.",
      },
      {
        name: 'Capture Haunt',
        level: 3,
        description:
          'After neutralizing or bypassing a haunt, the haunt collector can spend 2 points of mental focus to capture it within a specially prepared vial or implement. She can store a number of captured haunts equal to her occultist level and release them as standard actions to affect a target location.',
      },
      {
        name: 'Redirect Haunt',
        level: 7,
        description:
          "The haunt collector can redirect a triggered haunt, causing it to affect only creatures she designates rather than all in range. She can also use a captured haunt as an implement, investing focus into it to power focus powers appropriate to the haunt's emotional resonance.",
      },
      {
        name: 'Haunt Mastery',
        level: 11,
        description:
          'The haunt collector is immune to the effects of haunts she has previously identified and can command haunt-type hazards within 60 feet as a standard action, delaying their triggering for up to 1 hour per occultist level or redirecting them to trigger on a single designated creature.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 3. Necroccultist
  // ──────────────────────────────────────────────
  {
    name: 'Necroccultist',
    className: 'Occultist',
    description:
      'The necroccultist focuses her implement studies on the necromantic resonances of bone, grave goods, and death-touched objects, replacing some of the standard implement schools with necromantic alternatives. She trades life-preserving abilities for power over death and the undead.',
    replacedFeatures: ['Binding Circles', 'Aura Sight', 'Assumed Form'],
    modifiedFeatures: ['Implements', 'Mental Focus', 'Focus Powers', 'Implement Mastery'],
    newFeatures: [
      {
        name: 'Death Touch',
        level: 1,
        description:
          'The necroccultist can invest mental focus into any bone, burial goods, or item associated with death to use it as a necromancy implement. She gains the necromancy implement school in addition to her normal school selections, treating her occultist level as her caster level for all necromancy implements.',
      },
      {
        name: 'Command Dead',
        level: 3,
        description:
          'As a standard action, the necroccultist can spend 2 points of mental focus to command undead creatures within 30 feet, as the command undead spell, using her occultist level as the caster level. The DC equals 10 + half occultist level + Intelligence modifier.',
      },
      {
        name: 'Grave Implements',
        level: 5,
        description:
          "The necroccultist's implements resonate with death energy; she can apply the ghost touch property to any of her implements as a free action by spending 1 point of mental focus. She also gains a +2 bonus on saves against death effects and energy drain.",
      },
      {
        name: 'Animate Relic',
        level: 9,
        description:
          'The necroccultist can permanently animate a corpse as a zombie or skeleton (as animate dead) by spending 3 points of mental focus and touching the corpse. Animated corpses created this way count as her implements and can be invested with mental focus like any other implement.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 4. Panoply Savant
  // ──────────────────────────────────────────────
  {
    name: 'Panoply Savant',
    className: 'Occultist',
    description:
      'The panoply savant specializes in using matched sets of implements called panoplies, drawing additional power from the resonance between related objects. She trades some individual implement power for synergistic bonuses when wielding complete panoply sets.',
    replacedFeatures: ['Outside Contact', 'Magic Item Skill'],
    modifiedFeatures: ['Implements', 'Mental Focus', 'Implement Mastery', 'Focus Powers'],
    newFeatures: [
      {
        name: 'Panoply Bond',
        level: 1,
        description:
          "The panoply savant selects one panoply at 1st level (such as the mage's paraphernalia, trappings of the warrior, or silksworn accoutrements). When she has all items of a panoply equipped and invested, she gains bonus focus powers from the panoply and a +2 bonus on all checks using implements from that panoply.",
      },
      {
        name: 'Panoply Resonance',
        level: 3,
        description:
          "Each implement in the panoply savant's selected panoply generates a minor resonance effect when adjacent to another panoply implement. She can spend 1 point of mental focus to activate a resonance ability for 1 round per occultist level, gaining a panoply-specific bonus (such as improved saves, enhanced senses, or bonus damage).",
      },
      {
        name: 'Expanded Panoply',
        level: 7,
        description:
          'The panoply savant selects a second panoply and may use focus powers from both panoplies simultaneously. When she has at least one item from each panoply equipped, she gains a +1 insight bonus on all saving throws per complete panoply she has fully equipped.',
      },
      {
        name: 'Master of Sets',
        level: 13,
        description:
          "The panoply savant's panoplies are so perfectly attuned that she can switch which panoply she is actively drawing resonance from as a swift action. She also reduces the mental focus cost of all panoply-specific focus powers by 1 (minimum 1).",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 5. Self-Perfection Occultist
  // ──────────────────────────────────────────────
  {
    name: 'Self-Perfection Occultist',
    className: 'Occultist',
    description:
      'The self-perfection occultist treats her own body as the ultimate implement, channeling mental focus inward to enhance her physical and mental capabilities rather than empowering objects. She trades standard implement schools for body-enhancement focus powers and martial self-improvement.',
    replacedFeatures: [
      'Implements',
      'Magic Item Skill',
      'Outside Contact',
      'Binding Circles',
      'Aura Sight',
    ],
    modifiedFeatures: ['Mental Focus', 'Focus Powers', 'Implement Mastery'],
    newFeatures: [
      {
        name: 'Living Implement',
        level: 1,
        description:
          "The self-perfection occultist's body serves as her primary implement. She selects two implement schools at 1st level and can invest mental focus into herself rather than objects, with each invested point providing a +1 enhancement bonus to a chosen physical or mental ability score for 24 hours.",
      },
      {
        name: 'Focused Body',
        level: 2,
        description:
          'The self-perfection occultist can spend 1 point of mental focus as a swift action to gain a +2 enhancement bonus to Strength, Dexterity, or Constitution for 1 round per occultist level. She can activate this ability a number of times per day equal to her Intelligence modifier.',
      },
      {
        name: 'Inner Resonance',
        level: 5,
        description:
          "The self-perfection occultist's focus powers affect her own body with unusual efficiency. All focus powers with personal range have their duration doubled, and focus powers that grant enhancement bonuses to her own statistics are treated as one occultist level higher for calculating their magnitude.",
      },
      {
        name: 'Perfect Form',
        level: 11,
        description:
          'Once per day as a standard action, the self-perfection occultist can enter a state of perfect psychophysical alignment for 1 minute per occultist level. During this time, she gains a +4 enhancement bonus to all six ability scores, is immune to ability damage and drain, and her unarmed strikes deal damage as a monk of her occultist level.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 6. Silksworn
  // ──────────────────────────────────────────────
  {
    name: 'Silksworn',
    className: 'Occultist',
    description:
      'The silksworn focuses on clothing and adornments as her implements, drawing power from the psychic impressions left in garments worn during significant events. She trades some raw implement power for an elegant social-focused implement school and enhanced abilities when fully arrayed in her chosen attire.',
    replacedFeatures: ['Outside Contact', 'Binding Circles'],
    modifiedFeatures: ['Implements', 'Mental Focus', 'Implement Mastery', 'Focus Powers'],
    newFeatures: [
      {
        name: 'Garment Implements',
        level: 1,
        description:
          "The silksworn uses clothing, jewelry, and accessories as her implements. She gains the silksworn panoply as a bonus panoply and can invest mental focus into any worn garment or accessory, granting it a psychic resonance that supplements the item's mundane effects.",
      },
      {
        name: 'Arrayed for Power',
        level: 2,
        description:
          'When the silksworn is wearing at least three clothing-based implements simultaneously, she gains a +2 competence bonus on all Charisma-based skill checks and her focus powers that deal psychic damage deal an additional 1d6 damage.',
      },
      {
        name: 'Fashionable Focus',
        level: 5,
        description:
          'The silksworn can change which garments serve as her active implements as a full-round action by rearranging, donning, or doffing clothing items. She can distribute her mental focus among new implements immediately after this rearrangement without waiting until the next day.',
      },
      {
        name: 'Psychic Couture',
        level: 11,
        description:
          'The silksworn can create a set of psychically resonant garments by investing 1 hour of work and 3 points of permanent mental focus. These garments function as magic items of her choice with a total market value up to 2,000 gp times her occultist level, and they reform each dawn if destroyed.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 7. Trappings of the Warrior
  // ──────────────────────────────────────────────
  {
    name: 'Trappings of the Warrior',
    className: 'Occultist',
    description:
      'The trappings of the warrior occultist channels her psychic power through weapons and armor as her implements, drawing on the martial history of battle-worn equipment. She trades scholarly implement schools for combat-focused panoply powers and enhanced martial capability.',
    replacedFeatures: ['Outside Contact', 'Aura Sight', 'Assumed Form'],
    modifiedFeatures: ['Implements', 'Mental Focus', 'Focus Powers', 'Implement Mastery'],
    newFeatures: [
      {
        name: "Warrior's Panoply",
        level: 1,
        description:
          'The trappings occultist uses the trappings of the warrior panoply as her primary implement set. She gains proficiency with all martial weapons and medium armor, and can invest mental focus into any weapon or piece of armor she wears or wields, treating it as an implement of the transmutation or abjuration school.',
      },
      {
        name: 'Battle Memory',
        level: 2,
        description:
          "By spending 1 point of mental focus, the trappings occultist can read the battle history of any weapon or armor she holds, learning the most significant combat the item was used in and gaining a +2 insight bonus on attack rolls or AC for 1 round per occultist level based on that item's martial heritage.",
      },
      {
        name: 'Martial Focus',
        level: 5,
        description:
          "The trappings occultist can spend mental focus to grant her weapons and armor temporary magical enhancements. Each point spent grants +1 to a weapon's enhancement bonus or +1 to armor's enhancement bonus (maximum total enhancement bonus equal to half occultist level) for 1 minute per occultist level.",
      },
      {
        name: 'Legendary Arms',
        level: 11,
        description:
          "The trappings occultist's weapons and armor resonate so strongly with her psychic power that they are treated as intelligent items under her control. They gain the ability to speak, sense their surroundings to 30 feet, and boost the occultist's combat ability by granting her a bonus combat feat while she wields or wears them.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 8. Tome Eater
  // ──────────────────────────────────────────────
  {
    name: 'Tome Eater',
    className: 'Occultist',
    description:
      'The tome eater occultist literally consumes written texts to absorb their psychic knowledge, using devoured books as a form of implement that channels the resonant mental energy of recorded thought. She trades physical implements for the power of consumed knowledge.',
    replacedFeatures: ['Magic Item Skill', 'Outside Contact', 'Binding Circles'],
    modifiedFeatures: ['Implements', 'Mental Focus', 'Focus Powers'],
    newFeatures: [
      {
        name: 'Devour Text',
        level: 1,
        description:
          "The tome eater can eat a written text as a standard action, destroying it but absorbing its psychic resonance. She gains a +4 insight bonus on Knowledge checks related to the text's subject for 24 hours and recovers 1 point of mental focus per 5 pages consumed.",
      },
      {
        name: 'Absorbed Implement',
        level: 3,
        description:
          'After consuming a magical text (scroll, spellbook, or tome), the tome eater can treat the consumed knowledge as an implement of the appropriate school for 24 hours, investing mental focus into it as if it were a physical object she still possessed.',
      },
      {
        name: 'Recite Knowledge',
        level: 5,
        description:
          "The tome eater can regurgitate psychic copies of consumed texts as standard actions, producing a perfect replica of any text she has eaten in the past year. She can also use consumed text knowledge to aid another creature's Knowledge check as an immediate action, granting a +4 bonus.",
      },
      {
        name: 'Living Library',
        level: 11,
        description:
          "The tome eater's mind becomes a repository of consumed knowledge that functions as a portable library. She is always treated as having access to a relevant text for any Knowledge check and can spend 3 points of mental focus to reproduce any spell contained in a text she has consumed as a one-time spell-like ability.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 9. Reliquarian
  // ──────────────────────────────────────────────
  {
    name: 'Reliquarian',
    className: 'Occultist',
    description:
      'The reliquarian specializes in sacred relics and objects of divine significance, blending occultist implement powers with divine resonances. She trades some arcane-oriented implement schools for divine-attuned equivalents and gains the ability to channel divine energy through her relics.',
    replacedFeatures: ['Aura Sight', 'Assumed Form'],
    modifiedFeatures: ['Implements', 'Mental Focus', 'Focus Powers', 'Implement Mastery'],
    newFeatures: [
      {
        name: 'Sacred Implement',
        level: 1,
        description:
          'The reliquarian can invest mental focus into holy symbols, relics, and consecrated objects, treating them as implements that channel divine energy. She gains access to the conjuration implement school through sacred implements and can use channel energy (2d6, positive energy) a number of times per day equal to her Intelligence modifier.',
      },
      {
        name: 'Relic Attunement',
        level: 3,
        description:
          'The reliquarian can attune to divine artifacts associated with any deity, regardless of alignment, by spending 1 hour in meditation. Attuned artifacts are treated as if she met all alignment prerequisites and function as implements of the appropriate school at her full occultist level.',
      },
      {
        name: 'Divine Resonance',
        level: 7,
        description:
          "When the reliquarian invests mental focus into a sacred implement, she gains the benefits of a cleric domain power associated with the relic's patron deity. This domain power functions at her occultist level and refreshes each dawn.",
      },
      {
        name: 'Relic Repository',
        level: 13,
        description:
          'The reliquarian can store her sacred implements in a psychic space, summoning any of them to hand as a swift action. She can maintain a number of stored relics equal to her occultist level and invests mental focus into all stored relics simultaneously at dawn without needing to be holding them.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 10. Aetheric Adept
  // ──────────────────────────────────────────────
  {
    name: 'Aetheric Adept',
    className: 'Occultist',
    description:
      'The aetheric adept channels mental focus through charged aetheric crystals and alchemical matrices, blending occultist implement power with aetheric engineering. She trades some implement schools for the ability to craft and use volatile psychic batteries that augment her focus powers.',
    replacedFeatures: ['Binding Circles', 'Outside Contact'],
    modifiedFeatures: ['Implements', 'Mental Focus', 'Focus Powers'],
    newFeatures: [
      {
        name: 'Aetheric Battery',
        level: 1,
        description:
          'The aetheric adept can craft aetheric crystal batteries using Craft (alchemy), each capable of storing up to 3 points of mental focus. Batteries are created at half cost and can be used to fuel her focus powers as if they were drawn from her own mental focus pool, with up to her Intelligence modifier batteries active at once.',
      },
      {
        name: 'Overcharge',
        level: 3,
        description:
          "By drawing on an aetheric battery for more power than it was designed for, the aetheric adept can spend 2 extra points of focus from a battery (causing it to shatter) to increase a focus power's effective caster level by 4 or double its duration.",
      },
      {
        name: 'Battery Resonance',
        level: 7,
        description:
          'Aetheric batteries held by or on the aetheric adept passively augment her senses. She gains a +2 bonus on Perception and Sense Motive checks per active battery (maximum +8), and can detect magical auras within 30 feet as a constant effect when she has at least one charged battery.',
      },
      {
        name: 'Aetheric Cascade',
        level: 13,
        description:
          'Once per day, the aetheric adept can detonate all her remaining batteries simultaneously as a standard action, releasing the stored energy as a psychic shockwave. All creatures within 30 feet take 1d6 force damage per point of focus released (Reflex DC 10 + half occultist level + INT modifier for half), and the aetheric adept gains 1 temporary mental focus per 3 points released, lasting 1 hour.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 11. Psychic Researcher
  // ──────────────────────────────────────────────
  {
    name: 'Psychic Researcher',
    className: 'Occultist',
    description:
      'The psychic researcher approaches occultism as an empirical science, documenting implement resonances and cataloging psychic phenomena with academic rigor. She trades some combat-focused abilities for superior knowledge gathering and the ability to share implement benefits with her research subjects.',
    replacedFeatures: ['Assumed Form', 'Aura Sight'],
    modifiedFeatures: ['Mental Focus', 'Focus Powers', 'Outside Contact'],
    newFeatures: [
      {
        name: 'Academic Study',
        level: 1,
        description:
          'The psychic researcher adds all Knowledge skills to the list of skills she can augment with mental focus, spending 1 point of focus to gain a +4 bonus on any Knowledge check. She can also take 20 on Knowledge checks regarding occult subjects without additional time cost when she has at least 5 points of mental focus invested in a relevant implement.',
      },
      {
        name: 'Shared Resonance',
        level: 3,
        description:
          'The psychic researcher can extend the benefits of one of her invested implements to an adjacent willing creature as a move action. The creature gains the passive ability of the selected implement for 1 minute per occultist level as if it had invested 1 point of mental focus into the implement itself.',
      },
      {
        name: 'Field Notes',
        level: 5,
        description:
          'After observing a creature or object for at least 1 minute and succeeding on a relevant Knowledge check, the psychic researcher records detailed field notes that grant a +2 insight bonus on all rolls against or relating to that specific creature or object type for 24 hours.',
      },
      {
        name: 'Breakthrough Discovery',
        level: 11,
        description:
          'Once per week, the psychic researcher can make a breakthrough discovery about an occult phenomenon she has studied for at least 1 day. This grants her a bonus focus power from any implement school she does not already have access to, usable once per day for 1 week before it fades without continued study.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 12. Planar Investigator
  // ──────────────────────────────────────────────
  {
    name: 'Planar Investigator',
    className: 'Occultist',
    description:
      'The planar investigator specializes in implements drawn from across the planes, using objects originating from extraplanar realms to access unique focus powers tied to their plane of origin. She trades some standard implement schools for planar-resonance abilities and superior extraplanar knowledge.',
    replacedFeatures: ['Magic Item Skill', 'Binding Circles', 'Assumed Form'],
    modifiedFeatures: ['Implements', 'Mental Focus', 'Focus Powers', 'Implement Mastery'],
    newFeatures: [
      {
        name: 'Planar Implement',
        level: 1,
        description:
          'The planar investigator can use objects originating from or strongly associated with specific planes as implements. Each planar implement grants access to a unique focus power themed to its plane of origin (elemental planes grant elemental powers, outer planes grant alignment-based powers, etc.), in addition to its normal implement school powers.',
      },
      {
        name: 'Planar Attunement',
        level: 3,
        description:
          "By spending 1 hour attuning to a planar implement, the planar investigator gains resistance to that plane's dominant energy type (10 points) and a +4 bonus on Knowledge (planes) and Knowledge (geography) checks related to that specific plane.",
      },
      {
        name: 'Cross-Planar Resonance',
        level: 7,
        description:
          'When the planar investigator has implements from two or more different planes invested simultaneously, they create cross-planar resonance. She can spend 2 points of mental focus to cast plane shift as a spell-like ability, but only to planes for which she currently has invested implements.',
      },
      {
        name: 'Master of Many Planes',
        level: 13,
        description:
          'The planar investigator can use her Aura Sight ability to identify the planar origin of any creature, object, or magical effect within 60 feet as a free action. She also gains immunity to the environmental effects of all planes for which she has invested planar implements.',
      },
    ],
    source: 'Occult Adventures',
  },
];
