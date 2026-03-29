import { type MysteryEntry } from '@/types/classOptions';

export const mysteriesBatch001: MysteryEntry[] = [
  // ── APG Core Oracle Mysteries ──────────────────────────────────────────────

  {
    id: 'battle',
    name: 'Battle',
    description:
      'An oracle with the Battle mystery draws power from martial conflict and war, augmenting allies and overwhelming foes through divine fighting mastery.',
    classSkills: ['Intimidate', 'Knowledge (engineering)', 'Perception', 'Ride'],
    bonusSpells: [
      'enlarge person',
      'fog cloud',
      'magic vestment',
      'wall of fire',
      'righteous might',
      "mass bull's strength",
      'control weather',
      'earthquake',
      'storm of vengeance',
    ],
    finalRevelation:
      'At 20th level, you become an avatar of battle. You can make a full attack and also move up to your speed as a full-round action. Your critical hits ignore damage reduction. You gain a +4 insight bonus to AC for the purpose of confirming critical hits against you. You do not die from hit point damage until your negative hit points equal or exceed twice your Constitution score.',
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'bones',
    name: 'Bones',
    description:
      "The oracle of Bones draws power from death and undeath, channeling negative energy and commanding the dead with chilling authority.",
    classSkills: ['Bluff', 'Disguise', 'Intimidate', 'Stealth'],
    bonusSpells: [
      'cause fear',
      'false life',
      'animate dead',
      'fear',
      'slay living',
      'circle of death',
      'control undead',
      'horrid wilting',
      'wail of the banshees',
    ],
    finalRevelation:
      "At 20th level, you can cast bleed or stabilize as a free action once per round. You automatically stabilize if reduced below 0 hit points. You can cast animate dead at will without expending material components (subject to your normal undead Hit Die limit). Once per day, you can cast power word kill on a creature with 150 or fewer hit points.",
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'flame',
    name: 'Flame',
    description:
      'The oracle of Flame commands the power of fire and heat, incinerating enemies and reshaping the battlefield with devastating conflagrations.',
    classSkills: ['Acrobatics', 'Climb', 'Intimidate', 'Perform'],
    bonusSpells: [
      'burning hands',
      'resist energy',
      'fireball',
      'wall of fire',
      'summon monster V',
      'fire seeds',
      'fire storm',
      'incendiary cloud',
      'fiery body',
    ],
    finalRevelation:
      'At 20th level, you can apply any one of the following metamagic feats to any fire spell you cast without increasing its level or casting time: Enlarge Spell, Extend Spell, Silent Spell, or Still Spell. You need not have these feats to use this ability.',
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'heavens',
    name: 'Heavens',
    description:
      "The oracle of Heavens draws upon the power of the night sky and celestial bodies, wielding prismatic light and the cosmos itself as weapons.",
    classSkills: ['Fly', 'Knowledge (arcana)', 'Perception', 'Survival'],
    bonusSpells: [
      'color spray',
      'hypnotic pattern',
      'daylight',
      'rainbow pattern',
      'overland flight',
      'chain lightning',
      'prismatic spray',
      'sunburst',
      'meteor swarm',
    ],
    finalRevelation:
      "At 20th level, you achieve perfect harmony with the celestial spheres. You gain a bonus on all saving throws equal to your Charisma modifier. You automatically stabilize below 0 hit points, are immune to fear, automatically confirm critical hits, and are reincarnated as a star child three days after death.",
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'life',
    name: 'Life',
    description:
      'The oracle of Life is a conduit for vital energy, sustaining and healing allies through powerful divine magic and the wellspring of living force.',
    classSkills: ['Handle Animal', 'Knowledge (nature)', 'Survival'],
    bonusSpells: [
      'detect undead',
      'lesser restoration',
      'neutralize poison',
      'restoration',
      'breath of life',
      'heal',
      'greater restoration',
      'mass heal',
      'true resurrection',
    ],
    finalRevelation:
      'At 20th level, you become a perfect channel for life energy. You gain immunity to bleed, death attacks, exhaustion, fatigue, nausea, negative levels, and the sickened condition. Ability damage cannot reduce any ability score below 1. You automatically succeed on Fortitude saves against massive damage. You do not die until your negative hit points equal or exceed twice your Constitution score.',
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'lore',
    name: 'Lore',
    description:
      'An oracle of Lore is a font of ancient and esoteric knowledge, gaining access to vast reserves of information and the wisdom of ages.',
    classSkills: ['Appraise', 'Spellcraft', 'Knowledge (arcana)', 'Knowledge (dungeoneering)', 'Knowledge (engineering)', 'Knowledge (geography)', 'Knowledge (history)', 'Knowledge (local)', 'Knowledge (nature)', 'Knowledge (nobility)', 'Knowledge (planes)', 'Knowledge (religion)'],
    bonusSpells: [
      'identify',
      'tongues',
      'locate object',
      'legend lore',
      'contact other plane',
      "mass owl's wisdom",
      'vision',
      'moment of prescience',
      'time stop',
    ],
    finalRevelation:
      "At 20th level, you can take 20 on any Knowledge skill check as a standard action. You can cast wish once per day without expending a material component, though this wish cannot increase ability scores or replicate spells with costly material components.",
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'nature',
    name: 'Nature',
    description:
      'The oracle of Nature channels the primal energy of the wild, controlling animals and plants and reshaping the natural world at her command.',
    classSkills: ['Climb', 'Fly', 'Knowledge (nature)', 'Ride', 'Survival', 'Swim'],
    bonusSpells: [
      'charm animal',
      'barkskin',
      'speak with plants',
      'grove of respite',
      'awaken',
      'stone tell',
      'creeping doom',
      'animal shapes',
      'world wave',
    ],
    finalRevelation:
      "At 20th level, you can surround yourself with an organic cocoon as a full-round action. After 8 hours within the cocoon, you emerge transformed — your creature type changes to plant, animal, or humanoid of your choice while retaining all your statistics. This transformation cleanses poisons and diseases and fully restores your hit points and ability scores.",
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'stone',
    name: 'Stone',
    description:
      'The oracle of Stone draws strength from the enduring earth, commanding rock and acid and becoming as immovable and resilient as the deepest stone.',
    classSkills: ['Appraise', 'Climb', 'Intimidate', 'Survival'],
    bonusSpells: [
      'magic stone',
      'stone call',
      'meld into stone',
      'wall of stone',
      'stoneskin',
      'stone tell',
      'statue',
      'repel metal or stone',
      'clashing rocks',
    ],
    finalRevelation:
      'At 20th level, you become a master of acid and earth. You can apply any one of the following metamagic feats to any acid or earth spell you cast without increasing its level or casting time: Enlarge Spell, Extend Spell, Silent Spell, or Still Spell. You need not have these feats to use this ability.',
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'waves',
    name: 'Waves',
    description:
      'The oracle of Waves commands water and cold, shaping seas and ice with divine authority and drowning foes in crushing currents.',
    classSkills: ['Acrobatics', 'Escape Artist', 'Knowledge (nature)', 'Swim'],
    bonusSpells: [
      'touch of the sea',
      'slipstream',
      'water breathing',
      'wall of ice',
      'geyser',
      'fluid form',
      'vortex',
      'seamantle',
      'tsunami',
    ],
    finalRevelation:
      'At 20th level, you become a master of cold and water. You can apply any one of the following metamagic feats to any cold or water spell you cast without increasing its level or casting time: Enlarge Spell, Extend Spell, Silent Spell, or Still Spell. You need not have these feats to use this ability.',
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'wind',
    name: 'Wind',
    description:
      'The oracle of Wind rides the currents of air and electricity, striking with storm and thunder while moving with uncanny swiftness.',
    classSkills: ['Acrobatics', 'Escape Artist', 'Fly', 'Stealth'],
    bonusSpells: [
      'alter winds',
      'gust of wind',
      'cloak of winds',
      'river of wind',
      'control winds',
      'sirocco',
      'control weather',
      'whirlwind',
      'winds of vengeance',
    ],
    finalRevelation:
      'At 20th level, you become a master of air and electricity. You can apply any one of the following metamagic feats to any air or electricity spell you cast without increasing its level or casting time: Enlarge Spell, Extend Spell, Silent Spell, or Still Spell. You need not have these feats to use this ability.',
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Ultimate Magic Mysteries ───────────────────────────────────────────────

  {
    id: 'ancestor',
    name: 'Ancestor',
    description:
      'An oracle of Ancestor is guided by the wisdom and power of those who came before, channeling ancestral spirits to protect, advise, and empower the living.',
    classSkills: ['Linguistics', 'Knowledge (arcana)', 'Knowledge (dungeoneering)', 'Knowledge (engineering)', 'Knowledge (geography)', 'Knowledge (history)', 'Knowledge (local)', 'Knowledge (nature)', 'Knowledge (nobility)', 'Knowledge (planes)', 'Knowledge (religion)'],
    bonusSpells: [
      'unseen servant',
      'spiritual weapon',
      'heroism',
      'spiritual ally',
      'telekinesis',
      'greater heroism',
      'ethereal jaunt',
      'vision',
      'astral projection',
    ],
    finalRevelation:
      'At 20th level, you become one with the ancestral spirits. You gain a bonus on Will saving throws equal to your Charisma modifier, blindsense out to 60 feet, and a +4 bonus to your caster level for divination spells. You can cast astral projection as a spell-like ability once per day without expending material components.',
    source: 'pf1e-um',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'metal',
    name: 'Metal',
    description:
      'An oracle of Metal commands iron and steel, shaping and controlling metallic substances and becoming an impenetrable force of forged power.',
    classSkills: ['Appraise', 'Bluff', 'Disable Device', 'Intimidate'],
    bonusSpells: [
      'lead blades',
      'heat metal',
      'keen edge',
      'versatile weapon',
      'major creation',
      'wall of iron',
      'statue',
      'repel metal or stone',
      'iron body',
    ],
    finalRevelation:
      "At 20th level, you achieve mastery over iron and steel. You gain Weapon Focus, Greater Weapon Focus, Weapon Specialization, and Greater Weapon Specialization with one metal weapon of your choice. While wearing metal armor, you ignore its armor check penalty and increase the maximum Dexterity bonus by +5. Any metal you create with magic has +10 hardness.",
    source: 'pf1e-um',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'time',
    name: 'Time',
    description:
      'The oracle of Time perceives past, present, and future as one, manipulating the flow of moments to confound enemies and reshape destiny.',
    classSkills: ['Fly', 'Knowledge (arcana)', 'Perception', 'Use Magic Device'],
    bonusSpells: [
      'memory lapse',
      'gentle repose',
      'sands of time',
      'threefold aspect',
      'permanency',
      'contingency',
      'disintegrate',
      'temporal stasis',
      'time stop',
    ],
    finalRevelation:
      'At 20th level, you stop aging and cannot die from old age, retaining all aging bonuses and penalties already accrued. You are immune to magical aging effects. You can cast time stop once per day as a spell-like ability.',
    source: 'pf1e-um',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'wood',
    name: 'Wood',
    description:
      'The oracle of Wood draws power from living timber and the forest primeval, shaping plant matter and becoming one with the verdant world.',
    classSkills: ['Climb', 'Knowledge (nature)', 'Stealth', 'Survival'],
    bonusSpells: [
      'shillelagh',
      'barkskin',
      'minor creation',
      'thorn body',
      'tree stride',
      'ironwood',
      'transmute metal to wood',
      'changestaff',
      'wooden phalanx',
    ],
    finalRevelation:
      'At 20th level, you become a plant creature with wood-like skin, gaining a +4 natural armor bonus and DR 10/— against attacks from wooden weapons. You become immune to paralysis, poison, polymorph, sleep, and stunning effects. You can meld with any tree or single block of wood as a move action, with no limit to how long you can remain.',
    source: 'pf1e-um',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Other Paizo Supplement Mysteries ──────────────────────────────────────

  {
    id: 'dragon',
    name: 'Dragon',
    description:
      'An oracle of Dragon is touched by the primordial power of dragonkind, gaining draconic abilities and ultimately transforming into a creature of terrifying might.',
    classSkills: ['Fly', 'Intimidate', 'Knowledge (arcana)', 'Perception'],
    bonusSpells: [
      'cause fear',
      'resist energy',
      'fly',
      'fear',
      'spell resistance',
      'antimagic field',
      'true seeing',
      'form of the dragon III',
      'overwhelming presence',
    ],
    finalRevelation:
      'At 20th level, you gain immunity to paralysis, sleep effects, and the energy type associated with your draconic heritage. You are treated as a dragon for the purposes of spells and effects. If you have the breath weapon revelation, you can use it without the daily limit, though you must still wait 1d4+1 rounds between uses.',
    source: 'pf1e-legacy-of-dragons',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'lunar',
    name: 'Lunar',
    description:
      'The oracle of Lunar is bound to the cycles of the moon, channeling the wild, shifting power of moonlight and lycanthropic transformation.',
    classSkills: ['Acrobatics', 'Knowledge (nature)', 'Perception', 'Survival'],
    bonusSpells: [
      'fumbletongue',
      'dust of twilight',
      'rage',
      'moonstruck',
      'aspect of the wolf',
      'litany of madness',
      'lunar veil',
      'blood mist',
      'polar midnight',
    ],
    finalRevelation:
      'At 20th level, you can transform into a lycanthrope of your choice for a number of hours equal to your Charisma modifier, gaining all the powers of a natural lycanthrope of that type. You also become immune to mind-affecting effects and effects that target only humanoids.',
    source: 'pf1e-blood-of-the-moon',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'spellscar',
    name: 'Spellscar',
    description:
      'An oracle of Spellscar bears the mark of wild and broken magic, channeling chaotic arcane energy and disrupting magical effects with dangerous primal force.',
    classSkills: ['Knowledge (arcana)', 'Knowledge (nature)', 'Survival', 'Use Magic Device'],
    bonusSpells: [
      'ray of enfeeblement',
      'obscure object',
      'dispel magic',
      'lesser globe of invulnerability',
      'break enchantment',
      'antimagic field',
      'spell turning',
      'spellscar',
      "mage's disjunction",
    ],
    finalRevelation:
      'At 20th level, whenever you cast a spell, you can choose to trigger a primal magic event in addition to the spell itself (once per minute). Both the spell and the primal magic event take effect normally — the spell is not replaced by the event.',
    source: 'pf1e-inner-sea-magic',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];

// CHECKPOINT: last_written=spellscar, written=17/17, status=complete
