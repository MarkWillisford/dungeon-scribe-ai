import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_005: TemplateDefinition[] = [
  // 101. Despiser Creature (CR +2) [3pp]
  {
    id: 'despiser-creature',
    name: 'Despiser Creature',
    description:
      'A tormented incorporeal aberration that radiates suicidal despondency, dragging victims into fractured dimensional horror. Requires a base creature with Intelligence 4 or higher.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Intelligence 4 or higher' },
    ],
    typeChange: 'aberration',
    subtypeGains: ['extraplanar', 'incorporeal', 'augmented'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 6 },
      { ability: 'CON', change: 6 },
      { ability: 'WIS', change: -4 },
      { ability: 'CHA', change: 6 },
    ],
    immunities: ['incorporeal immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Incorporeal',
        description:
          'The despiser creature is incorporeal. It loses all non-ghost-touch attacks and gains a deflection bonus to AC equal to its Charisma modifier (minimum +1). It gains a fly speed equal to double its highest base speed with perfect maneuverability.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation',
        description:
          'A destroyed despiser creature restores itself in 2d4 days. Permanent destruction requires reflecting its gaze attack back at it.',
      },
      {
        scalingType: 'flat',
        name: 'Aura of Despondency (Su)',
        description:
          '60-foot aura. Creatures within range must succeed on a Will save or suffer the despondency madness condition.',
      },
      {
        scalingType: 'flat',
        name: 'Fractured Dimension (Su)',
        description:
          'As a swift action, the despiser creature can use greater teleport or plane shift at will. As a standard action, its touch attack can teleport a target into a solid object, dealing 2d6+1 Con damage per round until the target escapes.',
      },
      {
        scalingType: 'flat',
        name: 'Gaze of Suicidal Despair (Su)',
        description:
          '30-foot range gaze attack. Targets that fail their save are compelled to attempt coup de grace actions against themselves for 2d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerability to Gaze Attacks',
        description:
          'The despiser creature takes a -4 penalty against gaze attacks and loses any resistances or immunities it would otherwise have to gaze effects.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 102. Devil-Bound Creature (CR +Varies) [3pp]
  {
    id: 'devil-bound-creature',
    name: 'Devil-Bound Creature',
    description:
      'A creature that has knowingly signed a contract with a devil, gaining infernal power at the cost of its soul. CR adjustment varies by devil type (+1 to +3). Ability bonuses, diabolic attacks, and spell-like abilities depend on the specific devil bound.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description: 'Must have knowingly signed a binding contract with a devil',
      },
    ],
    subtypeGains: ['evil'],
    immunities: ['fire', 'poison'],
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Contract Bound (Su)',
        description:
          "Upon the creature's death or failure to fulfill contract terms, its soul becomes imprisoned in a gem held by the contracting devil. Only direct intervention by a deity can break the binding. Resurrection requires miracle or wish while the contract is active.",
      },
      {
        scalingType: 'flat',
        name: 'Profane Armor (Su)',
        description: 'The creature gains a +2 profane bonus to Armor Class.',
      },
      {
        scalingType: 'flat',
        name: 'Diabolic Attack (varies by devil type)',
        description:
          'Each devil type grants a specific diabolic special attack. Barbed: +4 Str/Dex/Con. Bearded: +2 Str/Dex/Con, -2 Int (min 1). Bone: +4 Str/Dex/Con. Kyton: +2 Str/Dex/Con, -2 Int (min 1). Erinyes: +4 Str/Dex/Con, +2 Wis, +4 Cha. Hellcat: +4 Str/Dex, +2 Con. Horned: +6 Str, +4 Dex/Con, +2 Wis, +4 Cha. Ice Devil: +4 to all physical and mental scores. Imp: +2 Dex. Pit Fiend: +6 Str, +4 Dex/Con, +4 Int/Wis/Cha. Kyton, Horned Devil, and Pit Fiend also gain regeneration 5 (bypassed by silvered/good weapons or good-aligned spells).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 103. Devilbound Creature (CR +1)
  {
    id: 'devilbound-creature',
    name: 'Devilbound Creature',
    description:
      'A creature whose soul is contractually bound to Hell, granting infernal gifts in exchange for eternal servitude upon death. Requires 5+ Hit Dice and Intelligence, Wisdom, and Charisma scores of 3 or higher.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'min_hd', minimum: 5 },
      {
        type: 'special',
        description:
          'Intelligence, Wisdom, and Charisma scores of 3 or higher',
      },
    ],
    subtypeGains: ['evil'],
    naturalArmorChange: 4,
    resistances: [{ energyType: 'fire', value: 30 }],
    regeneration: '5 (good spells or good-aligned weapons)',
    features: [
      {
        scalingType: 'flat',
        name: 'See in Darkness (Su)',
        description:
          'The devilbound creature can see perfectly in darkness of any kind, including that created by deeper darkness.',
      },
      {
        scalingType: 'flat',
        name: 'Contract Bound (Su)',
        description:
          "Upon death, the creature's soul is imprisoned in a gem and transferred to the contracting devil's possession. Resurrection while the contract is active requires miracle or wish only. If the contracting devil dies, the creature's soul is destroyed permanently.",
      },
      {
        scalingType: 'flat',
        name: 'Summon Devil (Sp)',
        description:
          '1/day with 100% success, the devilbound creature can summon a devil for 1 hour. The devil type scales with effective caster level: Lemure at 3rd, up to Ice Devil at 17th.',
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities (varies by devil type)',
        description:
          '3/day spell-like abilities that vary by the specific devil bound to (e.g., invisibility, dimension door, fireball, cone of cold). Variable ability score increases of +2 distributed across attributes depending on devil type.',
      },
      {
        scalingType: 'flat',
        name: '+4 bonus on saving throws against poison',
        description:
          'The devilbound creature gains a +4 bonus on all saving throws against poison effects.',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Bestiary 4',
    },
    visibility: 'global',
    rev: 1,
  },

  // 104. Diamond (CR +2) [3pp]
  {
    id: 'diamond',
    name: 'Diamond',
    description:
      'A simple template that transforms a creature into a living diamond entity, typically a denizen of the elemental plane of earth or a divine guardian. Grants crystalline armor and a manifested diamond blade that scales with Hit Dice.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: true,
    features: [
      {
        scalingType: 'flat',
        name: 'Diamond Armor (Su)',
        description:
          'The diamond creature gains a natural armor bonus equal to its higher of Constitution or Charisma modifier. It also gains 10 temporary hit points per Hit Die that restore at dawn each day but cannot be healed by other means.',
      },
      {
        scalingType: 'flat',
        name: 'Diamond Blade (Su)',
        description:
          'A keen scimitar of speed matching the base creature\'s size manifests and cannot be disarmed or sundered. Enhancement bonus: +1 per 5 Hit Dice (maximum +5). If the creature\'s Dexterity exceeds Strength, it gains Weapon Finesse as a bonus feat. The speed property grants two attacks per round.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Super Genius Games',
      publication: 'The Genius Guide To: Simple Monster Templates',
    },
    visibility: 'global',
    rev: 1,
  },

  // 105. Dichotomous Creature (CR +1) [3pp]
  {
    id: 'dichotomous-creature',
    name: 'Dichotomous Creature',
    description:
      'The fusion of two outsiders of opposing alignments within one CR of each other, creating a true neutral entity compelled to hunt creatures of its component alignments. Gains the higher statistics of both base creatures plus an extra d10 Hit Die.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Two outsiders within one CR of each other sharing at least one pair of opposing alignment components',
      },
    ],
    subtypeRemoves: ['alignment subtypes'],
    features: [
      {
        scalingType: 'flat',
        name: 'Combined Statistics',
        description:
          'The dichotomous creature uses the higher ability scores of both base creatures, the higher deflection and natural armor bonuses, the highest DR (excluding alignment-based), all immunities retained from both, the highest shared resistances (non-shared resistances reduced by 5), and the highest spell resistance. It gains the higher HD plus one additional d10.',
      },
      {
        scalingType: 'flat',
        name: 'Detect Alignment (Su)',
        description:
          'The dichotomous creature continuously knows the alignment of any creature within 60 feet as if under continuous detect alignment spells. This ability can be suppressed or resumed as a free action.',
      },
      {
        scalingType: 'flat',
        name: 'Enforced Balance (Su)',
        description:
          "The creature is compelled to hunt creatures bearing the original opposing alignments of its component outsiders. It gains alignment points for each Hit Die of slain creatures matching those original alignments. Upon accumulating points equal to twice its current HD, it reverts to one base outsider's original form, permanently destroying the other component.",
      },
      {
        scalingType: 'flat',
        name: 'Combined Attacks and Spell-Like Abilities',
        description:
          'Retains all natural attacks and weapons from both base creatures; uses higher damage dice when shared. Spell-like abilities use the higher caster level and combine both creatures\' options, but alignment-based abilities and summon abilities cannot be used.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 106. Dire Creature (CR +2) [3pp]
  {
    id: 'dire-creature',
    name: 'Dire Creature',
    description:
      'An inherited template for animals that creates a larger, stronger, more dangerous version of the base creature — the classic dire animal. Size increases by one category (Tiny or smaller become Small), with dramatically enhanced physical ability scores, HD, natural armor, and attack damage.',
    crAdjustment: 2,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal'] },
    ],
    sizeChange: 1,
    naturalArmorChange: 5,
    abilityScoreChanges: [
      { ability: 'STR', change: 8 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 8 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Increased Hit Dice',
        description:
          'Small dire creatures gain base HD +1 (minimum 2). Medium dire creatures gain base HD +3 (minimum 4). Large or larger dire creatures have their HD doubled (minimum 6). Skills and feats are recalculated for the new HD total.',
      },
      {
        scalingType: 'flat',
        name: 'Increased Speed',
        description:
          "The dire creature's base speed increases by 10 feet.",
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Natural Attacks',
        description:
          "All natural attack damage dice increase by one step per the size progression table, reflecting the creature's greater size and ferocity.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors Complete',
    },
    visibility: 'global',
    rev: 1,
  },

  // 107. Divine Champion Creature (CR +2) [3pp]
  {
    id: 'divine-champion-creature',
    name: 'Divine Champion Creature',
    description:
      'A creature chosen by a deity to serve as its mortal avatar, able to transform into a divine outsider form of increased size and power. The avatar form grants immunity to many conditions, energy resistances, DR, a divine weapon enhancement, and an explosive transformation. Requires Intelligence 4+ and the ability to speak a language.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Intelligence 4 or higher' },
      { type: 'special', description: 'Ability to speak a language' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Avatar Form (Su)',
        description:
          "Via command word (immediate action), the creature transforms into an outsider (native) form one size category larger with d12 Hit Dice and a +20 Perception bonus. The avatar form has a separate HP pool; damage transfers between forms only via directed healing. Duration: 4 + Con modifier + 2 rounds per HD daily. Extended use causes fatigue. Upon transformation, the creature gains 3 ability points plus 1 per HD (maximum 23 total), permanently assigned.",
      },
      {
        scalingType: 'flat',
        name: "Avatar's Companion (Su)",
        description:
          "An animal companion within 30 feet transforms alongside the champion, gaining the avatar form's DR, immunities, resistances, and temporary HP equal to its maximum HP.",
      },
      {
        scalingType: 'flat',
        name: 'Avatar Weapon (Su)',
        description:
          "One weapon transforms with the avatar. Enhancement bonus scales: +1 at 5 HD, +1 per 3 HD thereafter (maximum +6 at 20 HD, capped at +5 to stack with magical properties).",
      },
      {
        scalingType: 'flat',
        name: 'Domain',
        description:
          "The champion selects one deity domain; powers are accessible only in avatar form.",
      },
      {
        scalingType: 'flat',
        name: 'Explosive Transformation (Su)',
        description:
          "Creatures within 5 feet when the champion transforms take 1d6 damage per HD (chosen energy type). Reflex save DC 10 + 1/2 HD + Con modifier negates.",
      },
      {
        scalingType: 'flat',
        name: 'Avatar Form Defenses',
        description:
          "In avatar form: immune to ability drain, ability damage, disease, energy drain, poison, and polymorph. Resist 5 to four energy types, increasing by 5 per 4 HD (becomes immunity at resist 25+). DR 5/special (DR 10 at CR 10+, DR 15 at CR 15+); the special bypass requires a specific weapon type, alignment, and material. Vulnerability to one non-selected energy type; that damage cannot be regenerated. Gains darkvision 60 ft. and fly 30 ft. (perfect).",
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          "Gains one bonus feat plus one per 6 HD (maximum 4 bonus feats).",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 108. Divine Guardian (CR +1) [3pp]
  {
    id: 'divine-guardian',
    name: 'Divine Guardian',
    description:
      'A creature chosen by a deity to guard a sacred location, granted divine power and fast healing but bound to remain within the site. Leaving causes the template to be lost and inflicts severe Constitution drain.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    fastHealing: '5',
    immunities: ['mind-affecting effects', 'disease', 'poison'],
    features: [
      {
        scalingType: 'flat',
        name: 'Subtypes (varies)',
        description:
          'The divine guardian gains alignment and/or elemental subtypes matching the grantor deity (e.g., lawful, good, fire, water).',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Speed',
        description:
          "All movement speeds double. Flight maneuverability becomes perfect if not already. Creatures with a water subtype gain a swim speed equal to their highest speed.",
      },
      {
        scalingType: 'flat',
        name: 'Initiative Bonus',
        description: 'The divine guardian gains a +4 bonus on initiative checks.',
      },
      {
        scalingType: 'flat',
        name: 'Ability Healing (Ex)',
        description:
          'The divine guardian recovers 1 point of ability damage per round per damaged ability score.',
      },
      {
        scalingType: 'flat',
        name: 'Blessed Life (Ex)',
        description:
          'The divine guardian does not age and has no need for breathing, food, drink, or sleep.',
      },
      {
        scalingType: 'flat',
        name: 'Sacred Site (Ex)',
        description:
          "The guardian is bound to protect a specific sacred location. Leaving the site causes the template to be lost and inflicts 6d6 Constitution drain (or 2d6 per HD for creatures without Constitution).",
      },
      {
        scalingType: 'flat',
        name: 'Dimension Door (Sp)',
        description:
          'At will within the bounds of the sacred site. Caster level equals Hit Dice.',
      },
      {
        scalingType: 'flat',
        name: 'Bound to the Faith (Su)',
        description:
          "Clerics or paladins of the grantor deity rebuke or command the guardian using half its actual Hit Dice for the purpose of that ability.",
      },
      {
        scalingType: 'flat',
        name: 'Spell-Like Abilities by HD',
        description:
          'Gains additional spell-like abilities based on Hit Dice (cumulative). Caster level equals total Hit Dice; save DCs are Charisma-based.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 109. Dread Allip (CR +3) [3pp]
  {
    id: 'dread-allip',
    name: 'Dread Allip',
    description:
      'The undead spirit of a creature driven to suicide by a dread allip\'s domination, transformed into a powerful incorporeal undead that spreads madness and commands lesser allips. Requires a living creature with Intelligence 3+ that dies via suicide under dread allip compulsion.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Intelligence 3 or higher' },
      {
        type: 'special',
        description:
          'Must have committed suicide under the domination of a dread allip or from an externally-commanded self-destructive act',
      },
    ],
    typeChange: 'undead',
    subtypeGains: ['incorporeal', 'augmented'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 2 },
      { ability: 'CHA', change: 8 },
    ],
    abilityScoreChangeNote:
      'Strength and Constitution scores are eliminated (incorporeal undead).',
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Incorporeal',
        description:
          'The dread allip is incorporeal. It loses all armor, shield, and natural armor bonuses to AC and gains a deflection bonus equal to its Charisma modifier (minimum +1). It gains a fly speed equal to its highest base speed with perfect maneuverability. Racial HD become d8s.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The dread allip gains a +4 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Babble (Su)',
        description:
          'Hypnotic effect; creatures within 60 feet must succeed on a save or be affected as by hypnotism for 2d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Command Allips (Su)',
        description:
          'As a free action, the dread allip automatically commands all normal allips within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Creatures that die while dominated by the dread allip or from its self-destructive commands rise as dread allips.',
      },
      {
        scalingType: 'flat',
        name: 'Dominating Trample (Su)',
        description:
          'Once per 1d4 rounds, the dread allip can dominate creatures it contacts (Will save DC based on Charisma).',
      },
      {
        scalingType: 'flat',
        name: 'Touch of Insanity (Su)',
        description:
          'Incorporeal touch attacks deal 1d6 Wisdom damage. Critical hits deal damage plus 1d4 Wisdom drain.',
      },
      {
        scalingType: 'flat',
        name: 'Madness (Su)',
        description:
          'Creatures that use telepathy or mind-control effects against the dread allip take 1d6 Wisdom damage.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 110. Dread Banshee Creature (CR +3) [3pp]
  {
    id: 'dread-banshee-creature',
    name: 'Dread Banshee Creature',
    description:
      'An incorporeal undead horror of chaotic evil alignment that kills with its wail and inspires paralyzing terror. Gains powerful ability bonuses, a devastating dread wail, and the ability to detect living creatures by their heartbeats.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['incorporeal', 'augmented'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 12 },
      { ability: 'WIS', change: 8 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote:
      'Strength and Constitution scores are eliminated (incorporeal undead).',
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Incorporeal',
        description:
          'The dread banshee creature is incorporeal. Loses all armor, shield, and natural armor AC bonuses; gains deflection bonus equal to Charisma modifier (minimum +1). Gains fly speed equal to double its highest base speed with perfect maneuverability; loses all other speeds. Racial HD become d8s.',
      },
      {
        scalingType: 'flat',
        name: 'Incorporeal Touch Attack',
        description:
          'Primary incorporeal touch attack dealing 3d6 + 1d6 per CR negative energy damage.',
      },
      {
        scalingType: 'flat',
        name: 'Daylight Vulnerability',
        description:
          'The dread banshee suffers a -4 penalty on all attack rolls, checks, and saving throws in natural sunlight.',
      },
      {
        scalingType: 'flat',
        name: 'Dread Terror (Su)',
        description:
          'Creatures hit by the touch attack must succeed on a Will save or cower for 1d4+1 rounds; a successful save leaves the target shaken for 1 round. The dread banshee attempts to dispel fear-protection effects using greater dispel magic.',
      },
      {
        scalingType: 'flat',
        name: 'Dread Wail (Su)',
        description:
          'Standard action (usable every 1d4 rounds). 80-foot radius sonic death effect. Creatures must make a Fortitude save or take 10 damage per CR. Successful saves leave victims sickened for 1d8+1 rounds. Penetrates silence spells of 3rd level or lower.',
      },
      {
        scalingType: 'flat',
        name: 'Hear Heartbeat (Ex)',
        description:
          'Detects living creatures by their heartbeats within 120 feet (functions as blindsight).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'Gains Dodge, Eschew Materials, Mobility, Spring Attack, and Weapon Focus (touch) as bonus feats.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 111. Dread Blood Knight (CR +3) [3pp]
  {
    id: 'dread-blood-knight',
    name: 'Dread Blood Knight',
    description:
      'A simple template applied to blood knights, transforming them into even more lethal undead with enhanced damage reduction, immunity to sonic effects, and the ability to dissolve into a mobile blood pool. Gains significantly improved Strength, Dexterity, and Charisma.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: true,
    prerequisites: [
      { type: 'creature_type', allowed: ['undead'] },
      { type: 'special', description: 'Must be a blood knight' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 6 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 8 },
    ],
    damageReduction: { scalingType: 'flat', value: 15, bypassedBy: 'bludgeoning' },
    srFormula: 'CR + 12',
    immunities: ['sonic'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The dread blood knight gains a +4 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Deflection AC',
        description:
          "Loses natural armor bonus; gains deflection bonus equal to 3 + base creature's original natural armor bonus.",
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Bleed',
        description:
          'Bleed ability improved to 2d4 damage per round.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Blood Drain',
        description:
          'Blood drain deals 2 Constitution damage (2d4 on grapple).',
      },
      {
        scalingType: 'flat',
        name: 'Fountain of Blood',
        description:
          '30-foot radius blood fountain effect.',
      },
      {
        scalingType: 'flat',
        name: 'Poison Blood',
        description:
          'The dread blood knight gains a +3 racial bonus to all poison blood DCs.',
      },
      {
        scalingType: 'flat',
        name: 'Slithering Blood (Ex)',
        description:
          "Can transform into a mobile blood pool for a number of minutes per day equal to its Charisma modifier. In this form, the dread blood knight gains ooze immunities, a slam attack, and a contact poison.",
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'Gains Toughness as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 112. Dread Bodak (CR +2) [3pp]
  {
    id: 'dread-bodak',
    name: 'Dread Bodak',
    description:
      'The undead remnant of a creature destroyed by a dread bodak or slain via a death effect, transformed into a more powerful bodak that can instantly kill with its gaze and create spawn. Retains all racial subtypes.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: -4, minimum: 1 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated (undead).',
    naturalArmorChange: 8,
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'magic and cold iron' },
    resistances: [
      { energyType: 'acid', value: 20 },
      { energyType: 'electricity', value: 'immunity' },
      { energyType: 'fire', value: 'immunity' },
    ],
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The dread bodak gains a +4 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Sunlight Vulnerability',
        description:
          'Each round of exposure to direct sunlight deals 2d6 points of damage to the dread bodak.',
      },
      {
        scalingType: 'flat',
        name: 'Killing Gaze (Su)',
        description:
          '30-foot range. Creatures that fail a Fortitude save are reduced to -1 hit points.',
      },
      {
        scalingType: 'flat',
        name: 'Death Wail (Su)',
        description:
          'Kills dying creatures within 100 feet. The dread bodak gains temporary benefits from each creature slain this way.',
      },
      {
        scalingType: 'flat',
        name: 'Command Bodaks (Su)',
        description:
          'As a free action, automatically commands all normal bodaks within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Creatures slain by the dread bodak rise as dread bodaks under its control.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 113. Dread Crucifixion Spirit (CR +3)
  {
    id: 'dread-crucifixion-spirit',
    name: 'Dread Crucifixion Spirit',
    description:
      'A chaotic evil incorporeal undead of terrifying cruelty that can rip souls from living bodies and suspend them crucified in midair. Its touch paralyzes, its gaze inflicts lasting penalties, and it regenerates rapidly unless a specific researched condition is met.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['incorporeal', 'augmented'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 6 },
      { ability: 'WIS', change: 8 },
      { ability: 'CHA', change: 10 },
    ],
    abilityScoreChangeNote:
      'Strength and Constitution scores are eliminated (incorporeal undead).',
    damageReduction: {
      scalingType: 'hd_tiered',
      tiers: [
        { minHD: 1, maxHD: 5, value: 5, bypassedBy: '-' },
        { minHD: 6, maxHD: 11, value: 10, bypassedBy: '-' },
        { minHD: 12, value: 15, bypassedBy: '-' },
      ],
    },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
      { energyType: 'fire', value: 10 },
      { energyType: 'sonic', value: 10 },
    ],
    srFormula: 'CR + 11',
    immunities: [
      'undead immunities',
      'positive energy',
      'channel energy',
      'turn undead',
      'command undead',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Incorporeal',
        description:
          'The dread crucifixion spirit is incorporeal. Loses armor, shield, and natural armor AC bonuses; gains deflection bonus equal to Charisma modifier (minimum +1). Gains fly speed equal to double its highest base speed with perfect maneuverability; loses all other speeds. Racial HD become d8s.',
      },
      {
        scalingType: 'flat',
        name: 'Resistances Scale by CR',
        description:
          'All energy resistances increase to 20 at CR 6+ and 30 at CR 12+.',
      },
      {
        scalingType: 'flat',
        name: 'Incorporeal Touch with Paralysis',
        description:
          'CR 3-5: 1d4 negative energy + paralysis 1d2 rounds (Fort negates). CR 6-11: 1d8 + paralysis 1d4 rounds. CR 12-17: 2d8 + paralysis 2d4 rounds. CR 18+: 4d8 + paralysis 2d8 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Command Crucifixion Spirits (Su)',
        description:
          'As a free action, automatically commands all normal crucifixion spirits within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Creatures with Charisma 15+ killed by the dread crucify soul ability rise as crucifixion spirits under the dread crucifixion spirit\'s control.',
      },
      {
        scalingType: 'flat',
        name: 'Dread Crucify Soul (Su)',
        description:
          'Swift action, usable Charisma bonus times daily (minimum 1). Ranged touch attack within 5 feet per HD. A hit rips the target\'s soul from its body and suspends it crucified in midair. The soul takes initial negative levels (CR 3-5: 1; CR 6-11: 2; CR 12-17: 3; CR 18+: 3) and one additional per round. The victim can escape with a successful Will save (DC 10 + 1/2 HD + Cha modifier) each round. Slain targets cannot be resurrected except by wish, miracle, or true resurrection (50% failure chance).',
      },
      {
        scalingType: 'flat',
        name: 'Improved Rejuvenation (Su)',
        description:
          'Regenerates in 1d4 hours after destruction. Research (Knowledge [Religion] DC 20 + HD + Wis modifier) is required to find the condition for permanent destruction.',
      },
      {
        scalingType: 'flat',
        name: 'Tortuous Trample (Su)',
        description:
          'Full-round action, moving double speed in a straight line. Creatures passed through must make a Reflex save (DC 10 + 1/2 HD + Dex modifier) or be subject to dread crucify soul and paralysis. Limited by daily uses of crucify soul; each target can only be affected once per round.',
      },
      {
        scalingType: 'flat',
        name: 'Tormenting Gaze (Su)',
        description:
          '30-foot aura. Fortitude save (DC 10 + 1/2 HD + Cha modifier). Failure imposes penalties on attacks, skills, and ability checks: CR 3-5: -2 for 1 minute; CR 6-11: -4 for 1 hour; CR 12-17: -6 for 8 hours; CR 18+: -8 for 24 hours. A given spirit cannot affect the same target again for 24 hours after a failed save.',
      },
      {
        scalingType: 'flat',
        name: 'Unnatural Aura (Su)',
        description:
          'Animals will not willingly approach within 30 feet. Masters require DC 25 Handle Animal, Ride, or wild empathy check.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'Gains Dodge, Eschew Materials, Great Fortitude, Iron Will, Mobility, Spring Attack, Toughness, and Weapon Focus (touch).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 114. Dread Devourer (CR +3) [3pp]
  {
    id: 'dread-devourer',
    name: 'Dread Devourer',
    description:
      'A more powerful undead variant of the devourer, with a massive natural armor bonus, energy drain on natural attacks, a devastating devour soul ability, and an array of necromantic spell-like abilities. Requires a living creature with a chest cavity or similar body part.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description: 'Must have a chest cavity or similar body part',
      },
    ],
    typeChange: 'undead',
    subtypeGains: ['evil', 'extraplanar', 'augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 10 },
      { ability: 'DEX', change: 2 },
      { ability: 'INT', change: 6 },
      { ability: 'WIS', change: 6 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated (undead).',
    naturalArmorChange: 13,
    srFormula: 'HD + 10',
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The dread devourer gains a +4 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Blindsense 30 ft.',
        description: 'The dread devourer gains blindsense with a 30-foot radius.',
      },
      {
        scalingType: 'flat',
        name: 'Energy Drain',
        description:
          'All natural attacks bestow 1 negative level on a successful hit.',
      },
      {
        scalingType: 'flat',
        name: 'Devour Soul (Su)',
        description:
          'Touch attack dealing 12d6 + 1 per caster level damage. A Fortitude save reduces the damage to 3d6 + 1 per caster level.',
      },
      {
        scalingType: 'flat',
        name: 'Command Devourers (Su)',
        description:
          'As a free action, automatically commands all normal devourers within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Spell Deflection (Su)',
        description:
          'Specific spells targeting the dread devourer are redirected to trapped souls it contains.',
      },
    ],
    spellLikeAbilities: [
      { spellName: 'animate dead', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'circle of death', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'confusion', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'control undead', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'create undead', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'deeper darkness', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'desecrate', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'dominate monster', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'horrid wilting', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'inflict serious wounds', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'planar ally', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'plane shift', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'ray of enfeeblement', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'true seeing', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 115. Dread Ghast (CR +2) [3pp]
  {
    id: 'dread-ghast',
    name: 'Dread Ghast',
    description:
      'A powerful undead that applies to living creatures to create an enhanced ghast variant with paralytic natural attacks, a nauseating stench aura, and the ability to command lesser undead and create spawn at midnight.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 8 },
      { ability: 'INT', change: 6 },
      { ability: 'WIS', change: 8 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated (undead).',
    naturalArmorChange: 4,
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The dread ghast gains a +4 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Stench (Ex)',
        description:
          '20-foot radius aura. Creatures within range must succeed on a Fortitude save (DC based on Charisma) or be sickened for 1d6+4 minutes.',
      },
      {
        scalingType: 'flat',
        name: 'Unnatural Aura (Su)',
        description:
          'Animals will not willingly approach within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Paralytic Natural Attacks',
        description:
          'All natural attacks gain the paralysis ability (1d4+1 rounds, Fort save negates). If the base creature has a mouth with no bite attack, it gains a bite. If it has arms without natural attacks, it gains primary claw attacks. Damage is treated as one size category larger.',
      },
      {
        scalingType: 'flat',
        name: 'Command Ghasts and Ghouls (Su)',
        description:
          'As a free action, automatically commands all normal ghasts and ghouls within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Creatures killed by the dread ghast rise as dread ghasts at the next midnight. This can be prevented by protection from evil or gentle repose cast before that time.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 116. Dread Ghost (CR +3) [3pp]
  {
    id: 'dread-ghost',
    name: 'Dread Ghost',
    description:
      'A more powerful incorporeal undead variant of the ghost template, requiring base Intelligence and Charisma of at least 10. Gains improved channel resistance, spell resistance, and selects from a list of powerful dread ghost abilities equal to 1 per 3 CR (minimum 1), always including corrupting touch.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Intelligence 10 or higher' },
      { type: 'special', description: 'Charisma 10 or higher' },
    ],
    typeChange: 'undead',
    subtypeGains: ['incorporeal'],
    abilityScoreChanges: [
      { ability: 'CHA', change: 8 },
    ],
    abilityScoreChangeNote:
      'Strength and Constitution scores are eliminated (incorporeal undead).',
    srFormula: 'HD + 10',
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Incorporeal',
        description:
          'The dread ghost is incorporeal. Loses all armor, shield, and natural armor bonuses to AC and gains a deflection bonus equal to its Charisma modifier (minimum +1). Gains fly speed equal to double its highest base speed with perfect maneuverability. Racial HD become d8s.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance +8',
        description:
          'The dread ghost gains a +8 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Improved Rejuvenation (Su)',
        description:
          'Restores itself in 1d4 hours after destruction. Permanent destruction requires resolving its reason for haunting (GM-determined).',
      },
      {
        scalingType: 'flat',
        name: 'Dread Ghost Abilities',
        description:
          'Gains one ability per 3 CR points (minimum 1). First ability must be corrupting touch. Options include: Aligned Attacks (+1d6/2HD vs opposing alignment), Chilling Aura (3d6 cold, 20 ft), Corrupting Gaze (4d10 + 1d6 Cha damage), Corrupting Touch (mandatory; d8 damage per CR via supernatural aging), Death Wail (reduce target to -1 hp), Draining Touch (1d2 ability drain, heals ghost), Frightful Moan (panics, 30 ft), Horrific Appearance (1d4 ability damage gaze), Invisibility (greater invisibility at will), Malevolence (magic jar-like possession), Power over Undead (enslaves undead within 30 ft), Shattering Presence (6d6 force to objects), Telekinesis (at will).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 117. Dread Ghoul (CR +1) [3pp]
  {
    id: 'dread-ghoul',
    name: 'Dread Ghoul',
    description:
      'An undead template applicable to any living creature, creating an enhanced ghoul with improved paralysis (elves are not immune), command over lesser ghouls, and spawn creation. Notable for scent ability and equalized climb/land speeds.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 2 },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated (undead).',
    naturalArmorChange: 2,
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The dread ghoul gains a +4 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Scent (Ex)',
        description: 'The dread ghoul gains the scent ability.',
      },
      {
        scalingType: 'flat',
        name: 'Equalized Speeds',
        description:
          'Climb and land speeds equalize to the higher value. If either is missing, the dread ghoul gains it at the same speed as the other. If both are missing, it gains both at half its highest base speed.',
      },
      {
        scalingType: 'flat',
        name: 'Paralytic Natural Attacks',
        description:
          'All natural attacks gain paralysis (1d4+1 rounds, Fort save negates). Notably, elves are NOT immune to a dread ghoul\'s paralysis. If the base creature has a mouth without a bite attack, it gains one. If it has arms without natural or slam attacks, it gains primary claw attacks; slam attacks become claws with damage treated as one size category larger.',
      },
      {
        scalingType: 'flat',
        name: 'Command Ghouls (Su)',
        description:
          'As a free action, automatically commands all normal ghouls within 30 feet. Normal ghouls never attack the dread ghoul unless compelled.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Creatures killed by the dread ghoul rise as dread ghouls at the next midnight. Spawned creatures are not controlled by their creator. Prevented by protection from evil or gentle repose.',
      },
      {
        scalingType: 'flat',
        name: 'Survival Bonus',
        description:
          'The dread ghoul gains a +8 racial bonus on Survival checks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 118. Dread Lacedon (CR +1) [3pp]
  // Note: title says CR+1 but creating section says CR+2; using CR+1 per the listing name
  {
    id: 'dread-lacedon',
    name: 'Dread Lacedon',
    description:
      'An aquatic undead template that creates an enhanced lacedon (aquatic ghoul) with grab, improved paralysis, nauseating flesh, and a control water spell-like ability. Can command lesser lacedons and ghouls and creates spawn at midnight.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['aquatic'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated (undead).',
    naturalArmorChange: 3,
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The dread lacedon gains a +4 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Equalized Speeds',
        description:
          'Swim and land speeds equalize. Missing movement type is granted at the same rate as the present one.',
      },
      {
        scalingType: 'flat',
        name: 'Nauseating Flesh (Ex)',
        description:
          'Any creature that eats the dread lacedon must succeed on a DC 20 Fortitude save or be nauseated for 1 day.',
      },
      {
        scalingType: 'flat',
        name: 'Grab and Paralytic Attacks',
        description:
          'All natural attacks gain grab and paralysis (1d4+1 rounds, Fort save negates). If the base creature lacks bite or claw attacks, it gains them.',
      },
      {
        scalingType: 'flat',
        name: 'Command Lacedons and Ghouls (Su)',
        description:
          'As a free action, automatically commands all normal lacedons and ghouls within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Creatures killed by the dread lacedon rise as dread lacedons at the next midnight.',
      },
    ],
    spellLikeAbilities: [
      {
        spellName: 'control water',
        frequency: '3/day',
        casterLevelFormula: 'equal to total HD',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 119. Dread Lich (CR +1 or +3) [3pp]
  {
    id: 'dread-lich',
    name: 'Dread Lich',
    description:
      'A more powerful lich variant with enhanced necromantic abilities, a cursed paralytic touch that drains Constitution, automatically empowered necromancy spells, and improved defenses. CR +1 if applied to an existing lich, or CR +3 if applied to a living creature directly.',
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['evil'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote:
      'Constitution score is eliminated (undead). CR adjustment is +1 if applied to an existing lich, or +3 if applied to a living creature.',
    naturalArmorChange: 5,
    damageReduction: { scalingType: 'flat', value: 15, bypassedBy: 'magic and good' },
    immunities: [
      'cold',
      'electricity',
      'polymorph (except self-cast)',
      'undead immunities',
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +6',
        description:
          'The dread lich gains a +6 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Dread Fear Aura (Su)',
        description:
          'Creatures with fewer than 5 HD within a 60-foot radius that look upon the dread lich must succeed on a Will save or become panicked.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          'If destroyed, the dread lich reforms from its phylactery in 1d10 days.',
      },
      {
        scalingType: 'flat',
        name: 'Flight (Su)',
        description:
          'Gains a supernatural fly speed with perfect maneuverability.',
      },
      {
        scalingType: 'flat',
        name: 'Cursed Touch (Su)',
        description:
          'Touch attack causes paralysis and Constitution drain (1 point per day) via Death Curse. Creatures reduced to 0 Constitution disintegrate.',
      },
      {
        scalingType: 'flat',
        name: 'Touch Damage',
        description:
          'Touch deals 1d10 + (Hit Dice / 2) negative energy damage to living creatures; heals undead for the same amount.',
      },
      {
        scalingType: 'flat',
        name: 'Empowered Spells (Su)',
        description:
          'All necromancy spells, evil descriptor spells, and spell-like abilities cast by the dread lich are automatically treated as if affected by Empower Spell at no cost.',
      },
      {
        scalingType: 'flat',
        name: 'Strong Spellweaving (Su)',
        description:
          'All dread lich spells impose a -4 penalty on dispel checks made against them.',
      },
      {
        scalingType: 'flat',
        name: 'Phylactery',
        description:
          'Requires Craft Wondrous Item and caster level 15+. Cost: 200,000 gp. Typical form: Tiny mithral box (hardness 20, 40 hp, break DC 40).',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'Gains Combat Casting, Command Undead, Greater Spell Penetration, Spell Focus (necromancy), and Spell Penetration as bonus feats.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 120. Dread Lord (CR +1)
  {
    id: 'dread-lord',
    name: 'Dread Lord',
    description:
      'A powerful evil creature that has claimed dominion over a specific territory, gaining a suite of selectable domain-based powers but becoming landlocked within 5 miles per HD. Must be any evil alignment with Intelligence and Charisma of at least 6.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['LE', 'NE', 'CE'] },
      { type: 'special', description: 'Intelligence 6 or higher' },
      { type: 'special', description: 'Charisma 6 or higher' },
    ],
    abilityScoreChanges: [
      { ability: 'INT', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'good or silver' },
    fastHealing: '5 (fewer than 10 HD) or 10 (10+ HD)',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision 120 ft.',
        description: 'The dread lord gains darkvision with a 120-foot range.',
      },
      {
        scalingType: 'flat',
        name: 'Landlocked (Ex)',
        description:
          "The dread lord's powers are derived from a fixed domain with a radius of 5 miles per HD. It loses all template benefits while outside this domain.",
      },
      {
        scalingType: 'flat',
        name: 'One with the Land (Su)',
        description:
          "Can shape domain hazards (24-hour process) and gains a +2 bonus on Will saves while within its domain.",
      },
      {
        scalingType: 'flat',
        name: 'Domain Powers (selected per 3 HD)',
        description:
          'The dread lord selects one power per 3 HD from: All-Seeing (speak with animals/plants/stone tell 3/day; clairaudience/clairvoyance 3/day at CR 5+), Dream Dominion (dream and nightmare 1/day; dominate monster at CR 9+), Fear Aura (60 ft., shaken for duration + 1 minute), Magical Mastery (+2 caster level, +1 spell DC), Master of the Four Winds (fog cloud/gust of wind 3/day; control weather 1/day at CR 5+; control winds 1/day at CR 8+), Physical Mastery (+4 profane Str/Dex/Con), Plant Affinity (entangle at will; plant growth 1/day; tree stride at will at CR 5+; liveoak 1/day at CR 10+), Unquestioned Ruler (charm animal/person and detect thoughts at will; dominate animal/person and mass suggestion 3/day at CR 10+).',
      },
    ],
    sourceInfo: {
      type: 'official',
      publication: 'Pathfinder Roleplaying Game Horror Adventures',
    },
    visibility: 'global',
    rev: 1,
  },

  // 121. Dread Mohrg (CR +2) [3pp]
  {
    id: 'dread-mohrg',
    name: 'Dread Mohrg',
    description:
      'An undead template for evil living creatures with a mouth and digestive tract, creating an enhanced mohrg variant with powerful slam and tongue attacks, create spawn that generates fast zombies, and multiple energy resistances.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['LE', 'NE', 'CE'] },
      {
        type: 'special',
        description: 'Must have a mouth and digestive tract including intestines',
      },
    ],
    typeChange: 'undead',
    subtypeGains: ['evil'],
    abilityScoreChanges: [
      { ability: 'STR', change: 10 },
      { ability: 'DEX', change: 8 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated (undead).',
    naturalArmorChange: 9,
    resistances: [
      { energyType: 'cold', value: 10 },
      { energyType: 'electricity', value: 10 },
      { energyType: 'fire', value: 10 },
    ],
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The dread mohrg gains a +4 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Unnatural Aura (Su)',
        description: 'Animals will not willingly approach within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Tongue Attack',
        description:
          'Primary gore-like tongue attack dealing damage as one size larger. Also grants paralysis.',
      },
      {
        scalingType: 'flat',
        name: 'Slam Attacks',
        description:
          'Two slam attacks dealing damage as three size categories larger.',
      },
      {
        scalingType: 'flat',
        name: 'Paralysis',
        description: 'Natural attacks inflict paralysis (1d4+4 rounds, Fort save negates).',
      },
      {
        scalingType: 'flat',
        name: 'Command Mohrgs and Zombies (Su)',
        description:
          'As a free action, automatically commands all normal mohrgs and zombies within 30 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          "Slain creatures become advanced fast zombies. The dread mohrg heals 1d6 HP per HD of each victim and gains a haste effect.",
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 122. Dread Mummy (CR +3) [3pp]
  {
    id: 'dread-mummy',
    name: 'Dread Mummy',
    description:
      'A devastating undead template that creates a mummy-like creature with enormous Strength, cold immunity, a fear aura that paralyzes, a death breath, and a powerful suite of nature-themed spell-like abilities. Killed creatures turn to dust and reform as new dread mummies.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    abilityScoreChanges: [
      { ability: 'STR', change: 14 },
      { ability: 'DEX', change: 4 },
      { ability: 'INT', change: 2 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated (undead).',
    naturalArmorChange: 10,
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '-' },
    immunities: ['cold', 'undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The dread mummy gains a +4 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Fire Vulnerability',
        description: 'The dread mummy takes half again as much damage from fire effects.',
      },
      {
        scalingType: 'flat',
        name: 'Greater Despair (Su)',
        description:
          '100-foot aura. Creatures within range must succeed on a Fortitude save (DC based on Charisma) or be paralyzed with fear for 1d4 rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Breath of Death (Su)',
        description:
          '30-foot cone usable every 1d4 rounds. Inflicts 1d4 negative levels. Creatures killed by this ability rise as juju zombies or dread zombies.',
      },
      {
        scalingType: 'flat',
        name: 'Mummy Rot (Su)',
        description:
          'Transmitted through all natural attacks. Functions as the standard mummy rot ability.',
      },
      {
        scalingType: 'flat',
        name: 'Create Spawn (Su)',
        description:
          'Creatures killed by mummy rot turn to dust and reform as new dread mummies under the creator\'s control after one week, provided the creator survives.',
      },
    ],
    spellLikeAbilities: [
      { spellName: 'animal messenger', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'calm animals', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'command undead', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'heat metal', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'summon swarm', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
      { spellName: 'commune with nature', frequency: '3/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'control winds', frequency: '3/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'dominate animal', frequency: '3/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'insect plague', frequency: '3/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'control weather', frequency: '1/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'creeping doom', frequency: '1/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'earthquake', frequency: '1/day', casterLevelFormula: 'equal to HD' },
      { spellName: 'sunbeam', frequency: '1/day', casterLevelFormula: 'equal to HD' },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 123. Dread Phantom Armor (CR +2) [3pp]
  {
    id: 'dread-phantom-armor',
    name: 'Dread Phantom Armor',
    description:
      'The undead spirit of someone betrayed by trusted allies, inhabiting the armor that was gifted to them. Can disguise itself as mundane armor, blinds and traps wearers, and curses targets into losing their equipment bonuses.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      {
        type: 'special',
        description:
          'Corpse of a creature betrayed by trusted allies; the armor must have been gifted by those former allies',
      },
    ],
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated (undead).',
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +6',
        description:
          'The dread phantom armor gains a +6 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Armor Bonus',
        description:
          'The dread phantom armor gains an armor bonus of +9 and loses any natural armor bonus.',
      },
      {
        scalingType: 'flat',
        name: 'Dread Armor (Su)',
        description:
          'Grants magical armor enhancement bonuses based on HD: +1 at 2 HD, increasing by +1 per 2 additional HD (maximum +10 at 20 HD).',
      },
      {
        scalingType: 'flat',
        name: 'Freeze (Ex)',
        description:
          'Can appear as normal, nonmagical armor. The dread phantom armor takes 20 on Stealth checks to appear as a mundane item.',
      },
      {
        scalingType: 'flat',
        name: 'Armored Cage (Ex)',
        description:
          'Grapples and blinds any creature wearing it. Gains a +4 bonus on grapple checks against its wearer and can make free action grapple checks to maintain the hold.',
      },
      {
        scalingType: 'flat',
        name: 'Naked Strike (Su)',
        description:
          'Once per round, a curse attack against a target. On a failed Will save (DC 10 + 1/2 HD + Cha modifier), the target loses all equipment bonuses for 24 hours. Targets that succeed are immune to this ability for 24 hours.',
      },
      {
        scalingType: 'flat',
        name: 'Command Phantom Armors (Su)',
        description:
          'As a free action, automatically commands all normal phantom armors within 30 feet.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 124. Dread Poltergeist (CR +3) [3pp]
  {
    id: 'dread-poltergeist',
    name: 'Dread Poltergeist',
    description:
      'A naturally invisible incorporeal undead bound to its death location, wielding terrifying psychic projections and telekinesis to torment the living. Gains a killing image ability (phantasmal killer) and can manipulate objects up to 10 lbs per HD.',
    crAdjustment: 3,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Intelligence score (living creature)' },
      { type: 'special', description: 'Charisma 3 or higher' },
    ],
    typeChange: 'undead',
    subtypeGains: ['incorporeal'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote:
      'Strength and Constitution scores are eliminated (incorporeal undead). If base creature Strength exceeded Dexterity, Dexterity is set to match the former Strength score instead.',
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'good' },
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Incorporeal',
        description:
          'The dread poltergeist is incorporeal. Loses armor, shield, and natural armor AC bonuses; gains deflection bonus equal to Charisma modifier (minimum +1). Gains fly speed equal to its highest base speed with perfect maneuverability. Racial HD become d8s.',
      },
      {
        scalingType: 'flat',
        name: 'Channel Resistance +2',
        description:
          'The dread poltergeist gains a +2 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Invisibility (Su)',
        description:
          'The dread poltergeist is naturally invisible and remains so even when attacking.',
      },
      {
        scalingType: 'flat',
        name: 'Site Bound (Ex)',
        description:
          'Must remain within 300 feet of its death location. Cannot leave this area.',
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          'Reforms after 2d4 days unless the condition of its haunting is resolved.',
      },
      {
        scalingType: 'flat',
        name: 'Frightener (Su)',
        description:
          '30-foot fear effect. Will save (DC based on Charisma, +3 racial bonus). Failure inflicts a fear condition.',
      },
      {
        scalingType: 'flat',
        name: 'Terrifying Image (Su)',
        description:
          'At will. Functions as major image with an additional fear effect. DC based on Charisma (+3 racial bonus).',
      },
      {
        scalingType: 'flat',
        name: 'Killing Image (Su)',
        description:
          '1/day. Functions as phantasmal killer. DC based on Charisma (+3 racial bonus).',
      },
      {
        scalingType: 'flat',
        name: 'Manipulation (Su)',
        description:
          'Can use and carry equipment weighing up to 10 lbs per HD as if corporeal.',
      },
    ],
    spellLikeAbilities: [
      {
        spellName: 'mage hand',
        frequency: 'at_will',
        casterLevelFormula: 'equal to total HD',
      },
      {
        spellName: 'telekinesis',
        frequency: 'at_will',
        casterLevelFormula: 'equal to total HD',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 125. Dread Revenant (CR +2) [3pp]
  {
    id: 'dread-revenant',
    name: 'Dread Revenant',
    description:
      'A lawful evil undead driven by an unresolved compulsion, with powerful regeneration equal to its Charisma score, blindsense, and energy-draining slam attacks that can strangle victims. Automatically restores itself in 2d4 days unless the compulsion is resolved.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    abilityScoreChangeNote: 'Constitution score is eliminated (undead). Charisma modifier is used for bonus HP.',
    naturalArmorChange: 4,
    immunities: ['undead immunities'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description:
          'The dread revenant gains a +4 bonus on Will saves to resist channeled energy.',
      },
      {
        scalingType: 'flat',
        name: 'Regeneration (Su)',
        description:
          "Regeneration equal to the creature's Charisma score. The specific attack form that bypasses this regeneration is chosen to be specific to the base creature.",
      },
      {
        scalingType: 'flat',
        name: 'Blindsense 60 ft.',
        description: 'The dread revenant gains blindsense with a 60-foot radius.',
      },
      {
        scalingType: 'flat',
        name: 'Slam Attacks',
        description:
          'Two slam attacks (if the creature lacks them). Successful hits bestow 1 negative level (2 negative levels if the base creature has 10+ HD).',
      },
      {
        scalingType: 'flat',
        name: 'Death Grip (Ex)',
        description:
          "Upon a successful dual-slam grapple check, the dread revenant can strangle its opponent through asphyxiation mechanics.",
      },
      {
        scalingType: 'flat',
        name: 'Rejuvenation (Su)',
        description:
          'Automatically restores itself in 2d4 days after destruction. Only resolving the source of its compulsion prevents this.',
      },
      {
        scalingType: 'flat',
        name: 'Stealth Bonus',
        description: 'The dread revenant gains a +8 racial bonus on Stealth checks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing LLC',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },
];
