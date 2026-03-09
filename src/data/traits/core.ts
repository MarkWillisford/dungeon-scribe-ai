import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const APG_TRAITS: TraitDefinition[] = [
  // ==================== COMBAT TRAITS ====================
  {
    id: 'anatomist',
    name: 'Anatomist',
    description:
      'You have studied the workings of anatomy, either as a student at university or as an apprentice mortician or necromancer. You know where to aim your blows to strike vital organs. You get a +1 trait bonus on all rolls made to confirm critical hits.',
    shortDescription: '+1 trait bonus to confirm critical hits',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [],
    tags: ['critical', 'confirm'],
  },
  {
    id: 'armor_expert',
    name: 'Armor Expert',
    description:
      "You have worn armor as long as you can remember, either as part of your training to become a knight's squire or simply because you were seeking to emulate your favorite hero. When you wear armor of any sort, reduce that suit's armor check penalty by 1, to a minimum check penalty of 0.",
    shortDescription: 'Reduce armor check penalty by 1',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [],
    tags: ['armor', 'armor check penalty'],
  },
  {
    id: 'bullied',
    name: 'Bullied',
    description:
      'You were bullied often as a child, and you are now always ready to defend yourself with swift strikes. You gain a +1 trait bonus on attacks of opportunity.',
    shortDescription: '+1 trait bonus on attacks of opportunity',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.all',
        value: 1,
        source: 'Bullied',
        condition: { type: 'custom', params: {}, description: 'On attacks of opportunity only' },
      },
    ],
    tags: ['attacks of opportunity', 'attack'],
  },
  {
    id: 'courageous',
    name: 'Courageous',
    description:
      "Your childhood was brutal, yet you persevered primarily through force of will and the hope that no matter how difficult things became, as long as you kept a level head you'd make it through. You gain a +2 trait bonus on saving throws against fear effects.",
    shortDescription: '+2 trait bonus on saves vs fear',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Courageous',
        condition: { type: 'custom', params: {}, description: 'Against fear effects' },
      },
    ],
    tags: ['fear', 'save', 'will'],
  },
  {
    id: 'deft_dodger',
    name: 'Deft Dodger',
    description:
      'Growing up in a rough neighborhood or a dangerous environment has honed your senses. You gain a +1 trait bonus on Reflex saves.',
    shortDescription: '+1 trait bonus on Reflex saves',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.reflex',
        value: 1,
        source: 'Deft Dodger',
      },
    ],
    tags: ['save', 'reflex'],
  },
  {
    id: 'dirty_fighter',
    name: 'Dirty Fighter',
    description:
      "You wouldn't have lived to make it out of childhood without the aid of a sibling, friend, or companion you could always count on to distract your enemies long enough for you to do a little extra damage on the sly. When you hit a foe you are flanking, you deal 1 additional point of damage (this damage is added to your base damage, and is multiplied on a critical hit). This additional damage is a trait bonus.",
    shortDescription: '+1 damage when flanking',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 1,
        source: 'Dirty Fighter',
        condition: { type: 'custom', params: {}, description: 'When flanking' },
      },
    ],
    tags: ['flanking', 'damage', 'melee'],
  },
  {
    id: 'fencer',
    name: 'Fencer',
    description:
      'You were trained in a tradition of swordplay that teaches the use of bladed weapons for both offense and defense. You gain a +1 trait bonus on attacks of opportunity made with daggers, swords, and similar bladed weapons.',
    shortDescription: '+1 trait bonus on AoOs with bladed weapons',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.all',
        value: 1,
        source: 'Fencer',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'bladed' },
          description: 'On attacks of opportunity with bladed weapons',
        },
      },
    ],
    tags: ['attacks of opportunity', 'sword', 'blade'],
  },
  {
    id: 'killer',
    name: 'Killer',
    description:
      "You made your first kill at a very young age and found the task of extinguishing the life of another creature much easier than extinguishing a candle. You deal additional damage equal to your weapon's critical hit modifier when you score a successful critical hit with a weapon; this additional damage is added to the final total, and is not multiplied on a critical hit. This extra damage is a trait bonus.",
    shortDescription: 'Extra damage equal to weapon crit modifier on critical hits',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [],
    tags: ['critical', 'damage'],
  },
  {
    id: 'reactionary',
    name: 'Reactionary',
    description:
      'You were bullied often as a child, but never quite developed an offensive response. Instead, you became adept at anticipating sudden attacks and reacting to danger quickly. You gain a +2 trait bonus on initiative checks.',
    shortDescription: '+2 trait bonus on initiative checks',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 2,
        source: 'Reactionary',
      },
    ],
    tags: ['initiative'],
  },
  {
    id: 'resilient',
    name: 'Resilient',
    description:
      'Growing up in a violent neighborhood or rife with plague has made you tougher than most. You gain a +1 trait bonus on Fortitude saves.',
    shortDescription: '+1 trait bonus on Fortitude saves',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Resilient',
      },
    ],
    tags: ['save', 'fortitude'],
  },
  {
    id: 'weapon_training_trait',
    name: 'Weapon Training',
    description:
      'You were particularly eager to learn a particular weapon as a child, and shared your enthusiasm with a mentor or instructor. You gain a +1 trait bonus on damage rolls with a single weapon of your choice.',
    shortDescription: '+1 trait bonus on damage with a chosen weapon',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.weapon.{choice}',
        value: 1,
        source: 'Weapon Training',
      },
    ],
    choices: [
      {
        type: 'weapon',
        label: 'Weapon',
        affectsEffects: true,
        effectTargetTemplate: 'damage.weapon.{choice}',
      },
    ],
    tags: ['weapon', 'damage'],
  },
  {
    id: 'defender_of_the_society',
    name: 'Defender of the Society',
    description:
      'Your time spent studying the greatest warriors of the Society has taught you new defensive techniques. You gain a +1 trait bonus to Armor Class when wearing medium or heavy armor.',
    shortDescription: '+1 trait bonus to AC in medium or heavy armor',
    source: "Advanced Player's Guide",
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'ac',
        value: 1,
        source: 'Defender of the Society',
        condition: {
          type: 'custom',
          params: {},
          description: 'When wearing medium or heavy armor',
        },
      },
    ],
    tags: ['ac', 'armor', 'pathfinder society'],
  },
  // ==================== FAITH TRAITS ====================
  {
    id: 'birthmark',
    name: 'Birthmark',
    description:
      'You were born with a strange birthmark that looks very similar to the holy symbol of the god you chose to worship later in life. This birthmark can serve you as a divine focus for casting spells, and you gain a +2 trait bonus on all saving throws against charm and compulsion effects.',
    shortDescription:
      '+2 trait bonus on saves vs charm and compulsion; birthmark serves as divine focus',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Birthmark',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against charm and compulsion effects',
        },
      },
    ],
    tags: ['save', 'charm', 'compulsion', 'divine focus'],
  },
  {
    id: 'caretaker',
    name: 'Caretaker',
    description:
      'As the oldest child in your family, you were called upon to care for your younger siblings. You gain a +1 trait bonus on Heal checks.',
    shortDescription: '+1 trait bonus on Heal checks',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.heal',
        value: 1,
        source: 'Caretaker',
      },
    ],
    tags: ['skill', 'heal'],
  },
  {
    id: 'child_of_the_temple',
    name: 'Child of the Temple',
    description:
      'You have long served at a temple in a city, and your constant exposure to the site and its lore has made you something of an expert on the subject. You gain a +1 trait bonus on Knowledge (nobility) and Knowledge (religion) checks, and one of these skills (your choice) is always a class skill for you.',
    shortDescription:
      '+1 on Knowledge (nobility) and Knowledge (religion); one becomes class skill',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeNobility',
        value: 1,
        source: 'Child of the Temple',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeReligion',
        value: 1,
        source: 'Child of the Temple',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['knowledgeNobility', 'knowledgeReligion'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'knowledge', 'nobility', 'religion', 'class skill'],
  },
  {
    id: 'devotee_of_the_green',
    name: 'Devotee of the Green',
    description:
      'Your faith in the natural world or one of the gods of nature makes it easy for you to pick up new tricks when dealing with animals and plants. You gain a +1 trait bonus on Knowledge (geography) and Knowledge (nature) checks, and one of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 on Knowledge (geography) and Knowledge (nature); one becomes class skill',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeGeography',
        value: 1,
        source: 'Devotee of the Green',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeNature',
        value: 1,
        source: 'Devotee of the Green',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['knowledgeGeography', 'knowledgeNature'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'knowledge', 'geography', 'nature', 'class skill'],
  },
  {
    id: 'ease_of_faith',
    name: 'Ease of Faith',
    description:
      'Your mentor, the person who taught you the most about your faith, had a way of making complicated things easy to understand. His patience and eloquence were the perfect foil to your own occasionally difficult personality. You gain a +1 bonus on Diplomacy checks, and Diplomacy is always a class skill for you.',
    shortDescription: '+1 on Diplomacy; Diplomacy is a class skill',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Ease of Faith',
      },
    ],
    tags: ['skill', 'diplomacy', 'class skill'],
  },
  {
    id: 'fates_favored',
    name: "Fate's Favored",
    description:
      'The fates watch over you. Whenever you are under the effect of a luck bonus of any kind, that bonus increases by 1.',
    shortDescription: 'All luck bonuses increased by 1',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [],
    tags: ['luck', 'bonus'],
  },
  {
    id: 'history_of_heresy',
    name: 'History of Heresy',
    description:
      'You were raised with heretical views that have made it difficult for you to accept most religious beliefs and, as a result, you tend to rely on yourself. As long as you do not possess any levels in a class that grants divine spellcasting, you gain a +1 trait bonus on all saving throws made against divine spells.',
    shortDescription: '+1 trait bonus on saves vs divine spells (if no divine casting class)',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'History of Heresy',
        condition: {
          type: 'custom',
          params: {},
          description:
            'Against divine spells, only if you have no divine spellcasting class levels',
        },
      },
    ],
    tags: ['save', 'divine', 'heresy'],
  },
  {
    id: 'indomitable_faith',
    name: 'Indomitable Faith',
    description:
      'You were born in a region where your faith was not popular, but you never abandoned it. Your constant struggle to maintain your own faith has bolstered your drive. You receive a +1 trait bonus on Will saves.',
    shortDescription: '+1 trait bonus on Will saves',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Indomitable Faith',
      },
    ],
    tags: ['save', 'will'],
  },
  {
    id: 'sacred_conduit',
    name: 'Sacred Conduit',
    description:
      'Your body is a sacred conduit of divine energy. Whenever you channel energy, you gain a +1 trait bonus to the save DC of your channel energy.',
    shortDescription: '+1 trait bonus to channel energy save DC',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [],
    tags: ['channel', 'dc'],
  },
  {
    id: 'sacred_touch',
    name: 'Sacred Touch',
    description:
      'You were exposed to a potent source of positive energy as a child, perhaps growing up near a sacred landmark or holy site. As a standard action, you may automatically stabilize a dying creature merely by touching it.',
    shortDescription: 'Stabilize dying creature with a touch as standard action',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [],
    tags: ['healing', 'stabilize'],
  },
  {
    id: 'scholar_of_the_great_beyond',
    name: 'Scholar of the Great Beyond',
    description:
      'Your great faith and devotion to the afterlife has granted you a wider perspective on the nature of existence. You gain a +1 trait bonus on Knowledge (history) and Knowledge (planes) checks, and one of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 on Knowledge (history) and Knowledge (planes); one becomes class skill',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeHistory',
        value: 1,
        source: 'Scholar of the Great Beyond',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgePlanes',
        value: 1,
        source: 'Scholar of the Great Beyond',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['knowledgeHistory', 'knowledgePlanes'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'knowledge', 'history', 'planes', 'class skill'],
  },
  // ==================== MAGIC TRAITS ====================
  {
    id: 'classically_schooled',
    name: 'Classically Schooled',
    description:
      'Your apprenticeship or schooling gave you a keen understanding of the workings of magic. You gain a +1 trait bonus on Spellcraft checks, and Spellcraft is always a class skill for you.',
    shortDescription: '+1 on Spellcraft; Spellcraft is a class skill',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.spellcraft',
        value: 1,
        source: 'Classically Schooled',
      },
    ],
    tags: ['skill', 'spellcraft', 'class skill'],
  },
  {
    id: 'focused_mind',
    name: 'Focused Mind',
    description:
      'Your childhood was either dominated by lessons of some sort (whether musical, academic, or other) or by a strict regimen of meditation and focus. This has since given you the ability to maintain your focus even when distractions might otherwise affect you. You gain a +2 trait bonus on concentration checks.',
    shortDescription: '+2 trait bonus on concentration checks',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['concentration', 'casting'],
  },
  {
    id: 'dangerously_curious',
    name: 'Dangerously Curious',
    description:
      'You have always been intrigued by magic, possibly because you were the young apprentice of a magician or witch. You gain a +1 bonus on Use Magic Device checks, and Use Magic Device is always a class skill for you.',
    shortDescription: '+1 on Use Magic Device; UMD is a class skill',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.useMagicDevice',
        value: 1,
        source: 'Dangerously Curious',
      },
    ],
    tags: ['skill', 'use magic device', 'class skill'],
  },
  {
    id: 'gifted_adept',
    name: 'Gifted Adept',
    description:
      'Your interest in magic was extravagant and well-served by your instructors. Pick one spell when you choose this trait — from this point on, whenever you cast that spell, its effects manifest at +1 caster level.',
    shortDescription: '+1 caster level for one chosen spell',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [],
    choices: [{ type: 'custom', label: 'Spell', affectsEffects: false }],
    tags: ['caster level', 'spell'],
  },
  {
    id: 'hedge_magician',
    name: 'Hedge Magician',
    description:
      'You apprenticed for a time to a craftsman who often built magic items, and you picked up many of his tricks. Whenever you craft a magic item, you reduce the required gp cost to make the item by 5%.',
    shortDescription: 'Reduce magic item crafting cost by 5%',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['crafting', 'magic items', 'cost'],
  },
  {
    id: 'magical_knack',
    name: 'Magical Knack',
    description:
      "You were raised, either wholly or in part, by a magical creature, perhaps even one who passed itself off as a member of your race. This close exposure to magic has given you a knack for it. Pick a class when you gain this trait — your caster level in that class gains a +2 trait bonus as long as this bonus doesn't raise your caster level above your current Hit Dice.",
    shortDescription: '+2 trait bonus to caster level in one class (max = HD)',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [],
    choices: [{ type: 'custom', label: 'Spellcasting Class', affectsEffects: false }],
    tags: ['caster level', 'multiclass'],
  },
  {
    id: 'magical_lineage',
    name: 'Magical Lineage',
    description:
      "One of your parents was a gifted spellcaster who not only used metamagic often, but developed many metamagic feats before passing away. Pick one spell when you choose this trait. When you apply metamagic feats to this spell that add at least 1 level to the spell, treat its actual level as 1 lower for determining the spell's final adjusted level.",
    shortDescription: 'Reduce metamagic cost of one spell by 1 level',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [],
    choices: [{ type: 'custom', label: 'Spell', affectsEffects: false }],
    tags: ['metamagic', 'spell level'],
  },
  {
    id: 'mathematical_prodigy',
    name: 'Mathematical Prodigy',
    description:
      'Mathematics has always come easily for you, and you have always been able to "see the math" in the physical and magical world. You gain a +1 bonus on Knowledge (arcana) and Knowledge (engineering) checks, and one of these skills (your choice) is always a class skill for you.',
    shortDescription:
      '+1 on Knowledge (arcana) and Knowledge (engineering); one becomes class skill',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeArcana',
        value: 1,
        source: 'Mathematical Prodigy',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeEngineering',
        value: 1,
        source: 'Mathematical Prodigy',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['knowledgeArcana', 'knowledgeEngineering'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'knowledge', 'arcana', 'engineering', 'class skill'],
  },
  {
    id: 'pragmatic_activator',
    name: 'Pragmatic Activator',
    description:
      'While others affect a reverent tone when handling magical devices, possibly even addressing them, you treat them as you would any other tool. You may use your Intelligence modifier when making Use Magic Device checks instead of your Charisma modifier.',
    shortDescription: 'Use Int instead of Cha for Use Magic Device checks',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['use magic device', 'intelligence'],
  },
  {
    id: 'resilient_caster',
    name: 'Resilient Caster',
    description:
      'Your great faith in yourself or a higher power grants you the ability to shrug off the effects of foes who attempt to interfere with your spellcasting. You gain a +1 trait bonus on concentration checks.',
    shortDescription: '+1 trait bonus on concentration checks',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['concentration', 'casting'],
  },
  {
    id: 'spark_of_creation',
    name: 'Spark of Creation',
    description:
      'You have always had a knack for making things. You gain a +1 trait bonus on Craft checks, and the cost of creating magic items is reduced by 5%.',
    shortDescription: '+1 on Craft checks; reduce magic item creation cost by 5%',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craft',
        value: 1,
        source: 'Spark of Creation',
      },
    ],
    tags: ['craft', 'magic items', 'cost'],
  },
  {
    id: 'volatile_conduit',
    name: 'Volatile Conduit',
    description:
      'You have a talent for channeling volatile energies. Once per day as a swift action, you can increase the DC of a spell you cast by 1.',
    shortDescription: 'Once per day, +1 spell DC as swift action',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['spell dc', 'daily'],
  },
  // ==================== SOCIAL TRAITS ====================
  {
    id: 'adopted',
    name: 'Adopted',
    description:
      "You were adopted and raised by someone not of your actual race, and you learned a skill or trait from your adoptive parents and culture. As a result, you may select a race trait from your adoptive parents' race.",
    shortDescription: 'Select a race trait from another race',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [],
    tags: ['race', 'adoptive'],
  },
  {
    id: 'charming',
    name: 'Charming',
    description:
      'Blessed with good looks, you have come to depend on the fact that others find you attractive. You gain a +1 trait bonus when you use Bluff or Diplomacy on a character that is (or could be) sexually attracted to you, and a +1 trait bonus to the save DC of any language-dependent spell you cast on such characters or creatures.',
    shortDescription:
      '+1 on Bluff/Diplomacy vs attracted characters; +1 spell DC for language-dependent spells',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [],
    tags: ['bluff', 'diplomacy', 'spell dc', 'charm'],
  },
  {
    id: 'child_of_the_streets',
    name: 'Child of the Streets',
    description:
      'You grew up on the streets of a large city, and as a result you have developed a knack for picking pockets and hiding small objects on your person. You gain a +1 trait bonus on Sleight of Hand checks, and Sleight of Hand is always a class skill for you.',
    shortDescription: '+1 on Sleight of Hand; Sleight of Hand is a class skill',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sleightOfHand',
        value: 1,
        source: 'Child of the Streets',
      },
    ],
    tags: ['skill', 'sleight of hand', 'class skill'],
  },
  {
    id: 'fast_talker',
    name: 'Fast-Talker',
    description:
      'You had a knack for getting yourself into trouble as a child, and as a result developed a silver tongue at an early age. You gain a +1 trait bonus on Bluff checks, and Bluff is always a class skill for you.',
    shortDescription: '+1 on Bluff; Bluff is a class skill',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Fast-Talker',
      },
    ],
    tags: ['skill', 'bluff', 'class skill'],
  },
  {
    id: 'highlander',
    name: 'Highlander',
    description:
      'You were born and raised in rugged badlands or steep mountains, and you have become something of an expert at evading the predators, extractors, slavers, and other dangerous forces that dwell there. You gain a +1 trait bonus on Stealth checks, and Stealth is always a class skill for you. This trait bonus increases to +2 in hilly or rocky areas.',
    shortDescription: '+1 on Stealth (+2 in hilly/rocky areas); Stealth is a class skill',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth',
        value: 1,
        source: 'Highlander',
      },
    ],
    tags: ['skill', 'stealth', 'class skill', 'terrain'],
  },
  {
    id: 'merchant_family',
    name: 'Merchant Family',
    description:
      'You have come from a family that has prospered in the trade business. You gain a +1 trait bonus on Appraise checks, and Appraise is always a class skill for you.',
    shortDescription: '+1 on Appraise; Appraise is a class skill',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Merchant Family',
      },
    ],
    tags: ['skill', 'appraise', 'class skill'],
  },
  {
    id: 'poverty_stricken',
    name: 'Poverty-Stricken',
    description:
      'Your childhood was tough, and your parents had to make every copper stretch. You gain a +1 bonus on Survival checks, and Survival is always a class skill for you.',
    shortDescription: '+1 on Survival; Survival is a class skill',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Poverty-Stricken',
      },
    ],
    tags: ['skill', 'survival', 'class skill'],
  },
  {
    id: 'rich_parents',
    name: 'Rich Parents',
    description:
      'You were born into a rich family, perhaps even combatant of the nobility, and even though you turned to adventuring, you enjoy a generous starting wealth. You start with an additional 900 gp.',
    shortDescription: 'Start with 900 extra gold',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [],
    tags: ['gold', 'wealth', 'starting'],
  },
  {
    id: 'suspicious',
    name: 'Suspicious',
    description:
      'You discovered at an early age that someone you trusted, perhaps a mentor or family member, had been involved in criminal activity. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is always a class skill for you.',
    shortDescription: '+1 on Sense Motive; Sense Motive is a class skill',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.senseMotive',
        value: 1,
        source: 'Suspicious',
      },
    ],
    tags: ['skill', 'sense motive', 'class skill'],
  },
  {
    id: 'bully',
    name: 'Bully',
    description:
      'You grew up in an environment where the weights and the bullies thrived. As a result, you learned how to intimidate others. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you.',
    shortDescription: '+1 on Intimidate; Intimidate is a class skill',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Bully',
      },
    ],
    tags: ['skill', 'intimidate', 'class skill'],
  },
  {
    id: 'civilized',
    name: 'Civilized',
    description:
      'You hail from a settlement where diplomacy and order is the norm. You gain a +1 trait bonus on Knowledge (local) and Knowledge (nobility) checks, and one of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 on Knowledge (local) and Knowledge (nobility); one becomes class skill',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeLocal',
        value: 1,
        source: 'Civilized',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeNobility',
        value: 1,
        source: 'Civilized',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['knowledgeLocal', 'knowledgeNobility'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'knowledge', 'local', 'nobility', 'class skill'],
  },
  {
    id: 'warrior_of_old',
    name: 'Warrior of Old',
    description:
      'As a child, you put in long hours on combat drills, and even learned the basics of war before you began your adventuring career. You gain a +2 trait bonus on initiative checks.',
    shortDescription: '+2 trait bonus on initiative checks',
    source: "Advanced Player's Guide",
    category: 'race',
    subcategory: 'Elf',
    prerequisites: [{ type: 'race', raceName: 'Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 2,
        source: 'Warrior of Old',
      },
    ],
    tags: ['initiative', 'elf'],
  },
  {
    id: 'exile',
    name: 'Exile',
    description:
      'You were exiled from your homeland for some reason. You gain a +2 trait bonus on initiative checks.',
    shortDescription: '+2 trait bonus on initiative checks',
    source: "Advanced Player's Guide",
    category: 'race',
    subcategory: 'Half-Elf',
    prerequisites: [{ type: 'race', raceName: 'Half-Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 2,
        source: 'Exile',
      },
    ],
    tags: ['initiative', 'half-elf'],
  },
  {
    id: 'world_traveler',
    name: 'World Traveler',
    description:
      'Your family has taken you on journeys far and wide, and you have learned a great deal from your travels. You gain a +1 trait bonus on one of the following skills: Diplomacy, Knowledge (local), or Sense Motive. That skill is always a class skill for you.',
    shortDescription:
      '+1 on Diplomacy, Knowledge (local), or Sense Motive (your choice); becomes class skill',
    source: "Advanced Player's Guide",
    category: 'race',
    subcategory: 'Human',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.{choice}',
        value: 1,
        source: 'World Traveler',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Skill',
        options: ['diplomacy', 'knowledgeLocal', 'senseMotive'],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: ['skill', 'human', 'class skill'],
  },
  {
    id: 'focused_disciple',
    name: 'Focused Disciple',
    description:
      'When weaker-willed minds would be overwhelmed by a spell, your training allows you to maintain your composure and concentrate on the task at hand. You gain a +2 trait bonus on saving throws against charm and compulsion effects.',
    shortDescription: '+2 trait bonus on saves vs charm and compulsion',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Focused Disciple',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against charm and compulsion effects',
        },
      },
    ],
    tags: ['save', 'charm', 'compulsion'],
  },
  // ==================== ADDITIONAL POPULAR TRAITS ====================
  {
    id: 'bruising_intellect',
    name: 'Bruising Intellect',
    description:
      'Your sharp intellect and cunning observation allow you to browbeat and humiliate others through your command of the facts. You may use your Intelligence modifier when making Intimidate checks instead of your Charisma modifier.',
    shortDescription: 'Use Int instead of Cha for Intimidate checks',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [],
    tags: ['intimidate', 'intelligence'],
  },
  {
    id: 'clever_wordplay',
    name: 'Clever Wordplay',
    description:
      "Your cunning and logic are more than a match for another's eloquence and grace. Choose one Charisma-based skill. You may use your Intelligence modifier when making checks with that skill instead of your Charisma modifier.",
    shortDescription: 'Use Int instead of Cha for one Cha-based skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Charisma-based Skill',
        options: [
          'bluff',
          'diplomacy',
          'disguise',
          'handleAnimal',
          'intimidate',
          'perform',
          'useMagicDevice',
        ],
        affectsEffects: false,
      },
    ],
    tags: ['intelligence', 'charisma', 'skill'],
  },
  {
    id: 'student_of_philosophy',
    name: 'Student of Philosophy',
    description:
      'You can use your Intelligence modifier in place of your Charisma modifier on Diplomacy checks to persuade others and on Bluff checks to convince others that a lie is true. (This trait does not affect Diplomacy checks to gather information or Bluff checks to feint in combat.)',
    shortDescription: 'Use Int instead of Cha for Diplomacy (persuade) and Bluff (lie)',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [],
    tags: ['intelligence', 'diplomacy', 'bluff'],
  },
  {
    id: 'wisdom_in_the_flesh',
    name: 'Wisdom in the Flesh',
    description:
      "Your body responds to your extravagant devotion to your god. Choose a Strength-, Constitution-, or Dexterity-based skill. You make checks with that skill using your Wisdom modifier instead of the skill's normal ability score. That skill is also always a class skill for you.",
    shortDescription:
      'Use Wis instead of Str/Con/Dex for one physical skill; it becomes class skill',
    source: 'Ultimate Campaign',
    category: 'religion',
    prerequisites: [],
    effects: [],
    choices: [{ type: 'skill', label: 'Physical Skill', affectsEffects: false }],
    tags: ['wisdom', 'skill', 'class skill', 'physical'],
  },
  {
    id: 'magical_talent',
    name: 'Magical Talent',
    description:
      'Either from an inherent knack or careful study, you have mastered the use of a cantrip. Choose a 0-level spell. You may cast that spell once per day as a spell-like ability. The caster level for this ability is equal to your character level.',
    shortDescription: 'Cast one chosen 0-level spell once per day as spell-like ability',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [],
    choices: [{ type: 'custom', label: '0-level Spell', affectsEffects: false }],
    tags: ['cantrip', 'spell-like ability', 'daily'],
  },
  {
    id: 'desperate_focus',
    name: 'Desperate Focus',
    description:
      'You have often found yourself in situations where a lack of focus could get you killed. You gain a +2 trait bonus on concentration checks.',
    shortDescription: '+2 trait bonus on concentration checks',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['concentration', 'casting'],
  },
  {
    id: 'beast_of_the_society',
    name: 'Beast of the Society',
    description:
      'A druid of the Pathfinder Society has shown you the ways of the wild. You gain a +1 bonus on Knowledge (nature) checks, and Knowledge (nature) is always a class skill for you. Your wild shape ability lasts for an additional 2 rounds.',
    shortDescription: '+1 Knowledge (nature); class skill; +2 rounds wild shape',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeNature',
        value: 1,
        source: 'Beast of the Society',
      },
    ],
    tags: ['knowledge', 'nature', 'wild shape', 'druid', 'class skill'],
  },
  {
    id: 'havoc_of_the_society',
    name: 'Havoc of the Society',
    description:
      'Thanks to your studies of the arcane arts taught at a Pathfinder Lodge, you deal +1 damage when using force effects (such as magic missile, wall of force, etc.).',
    shortDescription: '+1 damage with force spells',
    source: "Advanced Player's Guide",
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['force', 'damage', 'spell'],
  },
  {
    id: 'exalted_of_the_society',
    name: 'Exalted of the Society',
    description:
      'The Living God Aroden keeps a special watch over you. You may channel energy 1 additional time per day.',
    shortDescription: '+1 channel energy use per day',
    source: "Advanced Player's Guide",
    category: 'faith',
    prerequisites: [],
    effects: [],
    tags: ['channel', 'daily', 'cleric'],
  },
  {
    id: 'eyes_and_ears_of_the_city',
    name: 'Eyes and Ears of the City',
    description:
      "Your religious ones have entrusted you with the task of watching over the city's inhabitants. You gain a +1 trait bonus on Perception checks, and Perception is always a class skill for you.",
    shortDescription: '+1 on Perception; Perception is a class skill',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Eyes and Ears of the City',
      },
    ],
    tags: ['skill', 'perception', 'class skill'],
  },
  {
    id: 'scholar_of_ruins',
    name: 'Scholar of Ruins',
    description:
      'From exploring the ancient ruins dotting the landscape, you have developed a keen eye for spotting traps. You gain a +1 trait bonus on Knowledge (dungeoneering) and Perception checks made to notice and identify traps.',
    shortDescription: '+1 on Knowledge (dungeoneering) and Perception to find traps',
    source: "Advanced Player's Guide",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeDungeoneering',
        value: 1,
        source: 'Scholar of Ruins',
      },
    ],
    tags: ['skill', 'knowledge', 'dungeoneering', 'traps'],
  },
];
