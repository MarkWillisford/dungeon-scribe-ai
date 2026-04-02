import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const KOBOLD_GOLARION_FEATS: FeatDefinition[] = [
  {
    id: 'ancient_draconic',
    name: 'Ancient Draconic',
    description:
      'You gain a +1 bonus on caster level checks to overcome spell resistance when casting arcane spells that have a verbal component. In addition, when casting language-dependent arcane spells while speaking Draconic, all intelligent creatures with any language can comprehend your words.',
    shortDescription:
      '+1 CL vs SR on verbal arcane spells; language-dependent spells understood by all intelligent creatures when spoken in Draconic.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'caster_level', minimum: 5 },
      { type: 'special', description: 'Speaks Draconic' },
    ],
    effects: [
      {
        type: 'special',
        target: 'caster_level.spell_resistance',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Ancient Draconic',
      },
    ],
    activationMode: 'passive',
    tags: ['arcane', 'draconic', 'kobold', 'spell_resistance'],
  },
  {
    id: 'improved_learn_ranger_trap',
    name: 'Improved Learn Ranger Trap',
    description:
      'You learn one additional ranger trap and can now use both extraordinary and supernatural versions of any ranger traps you know.',
    shortDescription:
      'Learn an additional ranger trap and access both extraordinary and supernatural versions of known traps.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'learn_ranger_trap' },
      { type: 'skill', skillId: 'survival', ranks: 8 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['ranger', 'trap', 'kobold'],
  },
  {
    id: 'kobold_confidence',
    name: 'Kobold Confidence',
    description:
      'You may use your Charisma, Intelligence, or Wisdom in place of Constitution to determine your bonus to Fortitude saves and your maximum negative hit points before death. You select which ability score to use when you take this feat, and this choice cannot be changed.',
    shortDescription:
      'Use Cha, Int, or Wis instead of Con for Fortitude saves and negative HP threshold.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'race', raceName: 'Kobold' },
    ],
    effects: [
      {
        type: 'ability_substitution',
        target: 'saving_throw.fort',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Kobold Confidence',
      },
    ],
    activationMode: 'passive',
    tags: ['kobold', 'fortitude', 'racial'],
  },
  {
    id: 'kobold_flood',
    name: 'Kobold Flood',
    description:
      "You can attempt a grapple maneuver to mount a prone Medium or Large opponent. If successful, you move into the target's square and position yourself on top of them. The target must win a grapple check to stand up and break free from your control.",
    shortDescription:
      'Grapple a prone Medium or Large opponent to mount them; they must win a grapple check to stand.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'kobold_groundling' },
      { type: 'feat', featId: 'kobold_style' },
      { type: 'special', description: 'Small size or smaller' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Kobold Flood',
      },
    ],
    activationMode: 'conditional',
    tags: ['kobold', 'grapple', 'style', 'size', 'combat_maneuver'],
  },
  {
    id: 'kobold_groundling',
    name: 'Kobold Groundling',
    description: 'Prone creatures are denied their Dexterity bonus to AC against your attacks.',
    shortDescription: 'Prone creatures lose their Dex bonus to AC against your attacks.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'kobold_style' },
      { type: 'special', description: 'Small size or smaller' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Kobold Groundling',
      },
    ],
    activationMode: 'conditional',
    tags: ['kobold', 'style', 'prone', 'size'],
  },
  {
    id: 'kobold_style',
    name: 'Kobold Style',
    description:
      'While using this style, you receive a +4 bonus on combat maneuver checks against opponents who are denied their Dexterity bonus to AC.',
    shortDescription:
      '+4 bonus on combat maneuver checks against opponents denied their Dex bonus to AC.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'special', description: 'Small size or smaller' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'cmb',
        value: 4,
        bonusType: BonusType.UNTYPED,
        source: 'Kobold Style',
      },
    ],
    activationMode: 'conditional',
    tags: ['kobold', 'style', 'combat_maneuver', 'size'],
  },
  {
    id: 'learn_ranger_trap',
    name: 'Learn Ranger Trap',
    description:
      "Select one ranger trap. You may use this trap a number of times per day equal to your Wisdom bonus (minimum 1). The trap's DC equals 10 + half your character level + your Wisdom modifier. The trap lasts one day per two character levels. Non-rangers can only create extraordinary traps, which have a DC penalty of 2.",
    shortDescription:
      'Gain one ranger trap usable Wis-mod times per day (minimum 1); non-rangers only access extraordinary versions.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'survival', ranks: 5 }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Learn Ranger Trap',
      },
    ],
    activationMode: 'conditional',
    tags: ['ranger', 'trap', 'kobold'],
  },
  {
    id: 'merciless_magic',
    name: 'Merciless Magic',
    description:
      'The DC to resist your spells increases by 1 for targets that are already afflicted with any of the following conditions: blinded, dying, entangled, exhausted, frightened, helpless, nauseated, panicked, paralyzed, or stunned.',
    shortDescription:
      '+1 spell save DC against targets that are blinded, dying, entangled, exhausted, frightened, helpless, nauseated, panicked, paralyzed, or stunned.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast spells' },
      { type: 'race', raceName: 'Kobold' },
    ],
    effects: [
      {
        type: 'special',
        target: 'spell.save_dc',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Merciless Magic',
      },
    ],
    activationMode: 'conditional',
    tags: ['kobold', 'spell', 'save_dc', 'racial'],
  },
  {
    id: 'merciless_precision',
    name: 'Merciless Precision',
    description:
      'You deal an additional 1d6 points of sneak attack damage against targets that are blinded, dying, entangled, exhausted, frightened, helpless, nauseated, panicked, paralyzed, or stunned.',
    shortDescription:
      '+1d6 sneak attack damage against targets suffering from specific conditions.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Sneak attack class feature' },
      { type: 'race', raceName: 'Kobold' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'damage.sneak_attack',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Merciless Precision',
      },
    ],
    activationMode: 'conditional',
    tags: ['kobold', 'sneak_attack', 'racial'],
  },
  {
    id: 'mixed_scales',
    name: 'Mixed Scales',
    description:
      'You may select an additional scale color beyond your original choice, gaining the benefits of both this color and the color you originally chose. If you possess both the Draconic Aspect feat and the dragon-scaled racial trait, this benefit applies to both. When you use an ability that depends on your scale color, you choose which color provides those benefits.',
    shortDescription:
      'Gain the benefits of a second kobold scale color in addition to your original.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Draconic Aspect feat or dragon-scaled racial trait' },
      { type: 'race', raceName: 'Kobold' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Mixed Scales',
      },
    ],
    activationMode: 'passive',
    tags: ['kobold', 'racial', 'draconic'],
  },
  {
    id: 'redeemed_kobold',
    name: 'Redeemed Kobold',
    description:
      'Your scales take on a metallic sheen appropriate for a good-aligned metallic dragon that shares any existing energy affinity you possess, or whom you have chosen to emulate. You receive a +2 circumstance bonus on Diplomacy checks when dealing with good creatures, and your Charisma counts as 2 points higher for the purpose of channeling positive energy.',
    shortDescription:
      'Metallic-sheen scales; +2 Diplomacy with good creatures; Cha +2 for channeling positive energy.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Good alignment' },
      { type: 'race', raceName: 'Kobold' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.diplomacy',
        value: 2,
        bonusType: BonusType.CIRCUMSTANCE,
        source: 'Redeemed Kobold',
      },
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Redeemed Kobold',
      },
    ],
    activationMode: 'conditional',
    tags: ['kobold', 'racial', 'good', 'channel_energy', 'diplomacy'],
  },
  {
    id: 'scaled_disciple',
    name: 'Scaled Disciple',
    description:
      'You gain a +1 bonus to caster level for spells from the dragon domain or its subdomains. Your spontaneous divine spellcasting qualifies in place of arcane casting for the dragon disciple prestige class, allowing your spellcasting to progress within that class. You may add bonus spells from the blood of dragons ability to your list of castable divine spells.',
    shortDescription:
      '+1 CL for dragon domain spells; divine casting qualifies for Dragon Disciple; can cast blood of dragons bonus spells as divine.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to spontaneously cast divine spells' },
      { type: 'race', raceName: 'Kobold' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'caster_level.dragon_domain',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Scaled Disciple',
      },
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Scaled Disciple',
      },
    ],
    activationMode: 'passive',
    tags: ['kobold', 'racial', 'draconic', 'divine', 'prestige_class'],
  },
  {
    id: 'small_but_deadly',
    name: 'Small But Deadly',
    description:
      'You ignore your Strength penalty to damage when making attacks with your racial natural weapons and weapons for which you have the Weapon Focus feat.',
    shortDescription:
      'Ignore Str penalty to damage with racial natural weapons and Weapon Focus weapons.',
    source: 'Pathfinder Player Companion: Kobolds of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Weapon Focus feat or natural weapon' },
      { type: 'special', description: 'Small size or smaller' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Small But Deadly',
      },
    ],
    activationMode: 'passive',
    tags: ['kobold', 'size', 'natural_weapon', 'damage'],
  },
  // Tribe Mentality (teamwork) — already exists in teamworkFeats.ts as 'tribe_mentality' sourced from Kobolds of Golarion. Skipped: same name, same mechanics.
  // Wall of Flesh (teamwork) — already exists in teamworkFeats.ts as 'wall_of_flesh' sourced from Kobolds of Golarion. Skipped: same name, same mechanics.
];

// CHECKPOINT: last_written=small_but_deadly, written=13/13, status=complete
