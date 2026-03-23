import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const MONSTER_SUMMONER_FEATS: FeatDefinition[] = [
  // ─── Monster Summoner's Handbook (Pathfinder Player Companion, 2015) ──────────────

  {
    id: 'augment_calling',
    name: 'Augment Calling',
    description: "You select an outsider subtype (such as angel or elemental). When casting planar ally or planar binding spells targeting your chosen subtype, you can call 2 additional Hit Dice of outsiders with that subtype. With planar ally spells, the outsider reduces its price demand by 25% (minimum 1,000 gp). With planar binding spells, you gain a +2 bonus on Charisma checks when requesting services.",
    shortDescription: 'Call 2 extra HD of outsiders of a chosen subtype and get better terms when using planar ally or planar binding.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'spell_focus_conjuration' },
      { type: 'special', description: 'Ability to cast lesser planar ally, lesser planar binding, or a higher-level version of these spells' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'planar_binding_charisma_check',
        value: 2,
        source: 'Augment Calling',
        condition: { type: 'custom', description: 'When making Charisma checks to request services via planar binding against chosen outsider subtype', params: {} },
      },
    ],
    activationMode: 'passive',
    tags: ['summoning', 'outsider', 'planar', 'calling'],
  },

  {
    id: 'banishing_critical',
    name: 'Banishing Critical',
    description: "Upon confirming a critical hit using Arcane Strike or an arcane pool-enhanced weapon against a summoned creature (one you identified via Spellcraft), the target must succeed at a Will save (DC = 10 + 1/2 character level + Intelligence modifier) or be sent back to its home plane as per the dismissal spell.",
    shortDescription: 'On a critical hit against a summoned creature, force it to make a Will save or be dismissed to its home plane.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['critical'],
    prerequisites: [
      { type: 'special', description: 'Arcane Strike or Disruptive' },
      { type: 'skill', skillId: 'spellcraft', ranks: 8 },
      { type: 'special', description: 'Arcane pool class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'critical', 'dismissal', 'banishment', 'arcane'],
  },

  {
    id: 'dimensional_awareness',
    name: 'Dimensional Awareness',
    description: "If a summoned or called creature materializes in a space you threaten, you can make an attack of opportunity against that creature before it acts, gaining a +2 circumstance bonus on the attack roll if you successfully identified the spell used to summon or call that creature.",
    shortDescription: 'Make an attack of opportunity against summoned creatures as they appear in your threatened squares.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Arcane Strike or Disruptive' },
      { type: 'feat', featId: 'banishing_critical' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'skill', skillId: 'spellcraft', ranks: 8 },
      { type: 'special', description: 'Arcane pool class feature' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'attack',
        value: 2,
        source: 'Dimensional Awareness',
        condition: { type: 'custom', description: 'When making an attack of opportunity against a summoned creature and the summoning spell was successfully identified', params: {} },
      },
    ],
    activationMode: 'conditional',
    tags: ['summoning', 'attack_of_opportunity', 'anti-summoning'],
  },

  {
    id: 'dimensional_disruption',
    name: 'Dimensional Disruption',
    description: "When using Dimensional Awareness to make an attack of opportunity against a creature being summoned or called into a threatened square, you may spend an immediate action to force the creature back to its home plane. This requires a Spellcraft check with a DC equal to 15 plus the creature's CR (minimum 1) plus the summoning spell's level. Success prevents the creature from acting and immediately banishes it. A summoning or calling spell can normally be disrupted only by a failed concentration check or by countering the spell.",
    shortDescription: "Spend an immediate action during a Dimensional Awareness attack of opportunity to banish a summoned creature via a Spellcraft check.",
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Arcane Strike or Disruptive' },
      { type: 'feat', featId: 'banishing_critical' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'feat', featId: 'dimensional_awareness' },
      { type: 'skill', skillId: 'spellcraft', ranks: 8 },
      { type: 'special', description: 'Arcane pool class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'anti-summoning', 'banishment', 'spellcraft'],
  },

  {
    id: 'dispel_focus',
    name: 'Dispel Focus',
    description: "Whenever you attempt a dispel check based on your caster level, you gain a +2 bonus on the check.",
    shortDescription: 'Gain a +2 bonus on dispel checks.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast dispel magic' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'dispel_check',
        value: 2,
        source: 'Dispel Focus',
      },
    ],
    activationMode: 'passive',
    tags: ['dispelling', 'magic', 'spellcasting'],
  },

  {
    id: 'expanded_summon_monster',
    name: 'Expanded Summon Monster',
    description: "For each spell level 1-9, select two creatures from the expanded summon monster table. You then add these creatures to the summon monster table of the same level, allowing you to summon them with the appropriate summon monster spell. Once made, these choices cannot be changed. You can take this feat multiple times. Each time you do, you can select two more monsters from the table to add to the summon monster table of the same level.",
    shortDescription: 'Add two creatures of your choice to the summon monster list for each applicable spell level.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast a summon monster spell' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['summoning', 'summon_monster', 'expanded_list'],
  },

  {
    id: 'greater_dispel_focus',
    name: 'Greater Dispel Focus',
    description: "Whenever you attempt a dispel check based on your caster level, you gain a +2 bonus to the check. This stacks with the bonus from Dispel Focus, providing a total of +4 on dispel checks.",
    shortDescription: 'Gain an additional +2 bonus on dispel checks (stacks with Dispel Focus for a total of +4).',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'dispel_focus' },
      { type: 'special', description: 'Ability to cast dispel magic' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'dispel_check',
        value: 2,
        source: 'Greater Dispel Focus',
      },
    ],
    activationMode: 'passive',
    tags: ['dispelling', 'magic', 'spellcasting'],
  },

  {
    id: 'planar_focus',
    name: 'Planar Focus',
    description: "By studying other planes, you've learned to take on aspects of outsiders as well as animals. When you use your animal focus class feature, you can choose any of the following new aspects unless they conflict with your alignment. Air: You are constantly under the effects of feather fall; at 10th level this upgrades to levitate. Chaotic (chaotic alignment only): You have a 25% chance to negate extra damage from critical hits and precision damage. Cold: Creatures that strike you with melee attacks take 1d4 cold damage per 2 class levels (minimum 1d4). Earth: You gain a burrow speed equal to your base land speed and a +2 natural armor bonus. Evil (evil alignment only): You gain a +1 profane bonus to AC and saves against good outsiders; this increases to +2 at 10th level. Fire: Your natural attacks and melee weapons deal 1d6 fire damage per 4 class levels (minimum 1d6). Good (good alignment only): You gain a +1 sacred bonus to AC and saves against evil outsiders; this increases to +2 at 10th level. Lawful (lawful alignment only): You automatically succeed on saving throws to avoid the effects of polymorph and petrification effects. Shadow: You gain a +5 bonus on Stealth checks and Sleight of Hand checks. Water: You gain a 30-foot swim speed and can breathe both water and air.",
    shortDescription: 'When using animal focus, gain access to planar aspects (Air, Chaotic, Cold, Earth, Evil, Fire, Good, Lawful, Shadow, Water) in addition to animal aspects.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_planes', ranks: 5 },
      { type: 'special', description: 'Animal focus class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['hunter', 'animal_focus', 'planar', 'outsider', 'shapeshift'],
  },

  {
    id: 'scouting_summons',
    name: 'Scouting Summons',
    description: "This metamagic feat allows you to possess a single summoned creature from a conjuration (summoning) spell, functioning like magic jar without requiring a receptacle. You maintain this connection until either taking damage (requiring a concentration check against damage dealt) or the summoned creature is reduced to 0 hit points or lower, in which case you take damage equal to double the spell slot level used. A scouting summons spell takes up a spell slot 2 levels higher than normal.",
    shortDescription: 'Possess a summoned creature as per magic jar without a receptacle; costs +2 spell levels.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['metamagic'],
    prerequisites: [
      { type: 'feat', featId: 'spell_focus_conjuration' },
      { type: 'special', description: 'Ability to cast magic jar' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'metamagic', 'possession', 'scouting'],
  },

  {
    id: 'solid_shadows',
    name: 'Solid Shadows',
    description: "When casting greater shadow conjuration, greater shadow evocation, shadow conjuration, or shadow evocation (and similar spells with the shadow descriptor at GM discretion), that spell is 20% more real than normal. A solid shadows spell takes up a spell slot 1 level higher than the spell's actual level.",
    shortDescription: 'Shadow spells with the shadow descriptor are 20% more real; costs +1 spell level.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['metamagic'],
    prerequisites: [
      { type: 'feat', featId: 'spell_focus_illusion' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['metamagic', 'shadow', 'illusion', 'conjuration', 'evocation'],
  },

  {
    id: 'summon_guardian_spirit',
    name: 'Summon Guardian Spirit',
    description: "A guardian spirit has selected you as its ward. You select one creature qualifying as an improved familiar and apply the guardian spirit template to it, adding it to your summon monster III or summon nature's ally III list. When summoned, the spell duration becomes 1 minute per level. The guardian spirit retains memories between summonings and remains singular — multiple versions cannot exist simultaneously. If killed while summoned, it cannot be resummoned for 24 hours. You may perform a 24-hour ritual to attune the guardian spirit to higher-level summon spells, allowing adjustments to ability selections based on the spell level used.",
    shortDescription: "Add a guardian spirit creature to your summon monster III or summon nature's ally III list; it retains memories between summonings.",
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: "Ability to cast summon monster III or summon nature's ally III" },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'guardian', 'familiar', 'spirit'],
  },

  {
    id: 'tattoo_attunement',
    name: 'Tattoo Attunement',
    description: "You've learned to absorb summoned creatures into temporary spell tattoos. As a standard action, you can touch a summoned creature and transform it into a magical tattoo on your body. The tattoo occupies one magic item slot for Medium or smaller creatures, plus one additional adjacent slot per size category above Medium. You can maintain only one such tattoo at a time. While tattooed, the creature cannot act, does not require sustenance or air, and retains its remaining summoning duration. The creature may remain in tattoo form for a number of hours equal to your caster level. If still tattooed when this period ends, the tattoo vanishes and the creature returns to its native plane. As a standard action (provoking attacks of opportunity), you can restore the creature to normal form in an adjacent square. It becomes staggered for 1 round upon emergence. This is a supernatural ability.",
    shortDescription: 'Transform a summoned creature into a magical tattoo for storage, then release it later.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Inscribe Magical Tattoo or Varisian Tattoo' },
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'tattoo', 'storage', 'supernatural'],
  },

  {
    id: 'tattoo_conversion',
    name: 'Tattoo Conversion',
    description: "You can use a standard action (provoking attacks of opportunity) to make a melee touch attack against a summoned creature, converting it into a magical tattoo on your body via Tattoo Attunement. When transforming the creature back from tattoo form, you make an opposed Spellcraft check against its original summoner (automatically succeeding if they are unconscious or dead). Success means the creature treats you as its summoner for the spell's remaining duration, provided it fails a Will save (DC = 10 + your caster level). This ability functions once per day and is supernatural in nature.",
    shortDescription: 'Steal a summoned creature by converting it into your tattoo and taking control of it with an opposed Spellcraft check.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Inscribe Magical Tattoo or Varisian Tattoo' },
      { type: 'feat', featId: 'tattoo_attunement' },
      { type: 'skill', skillId: 'spellcraft', ranks: 15 },
      { type: 'special', description: 'Ability to cast control summoned creature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'tattoo', 'control', 'steal', 'supernatural'],
  },

  {
    id: 'tattoo_transformation',
    name: 'Tattoo Transformation',
    description: "When using Tattoo Attunement on a summoned creature, you gain that creature's elemental resistance while it is in tattoo form. If the creature has multiple elemental resistances, you select only one. Immunities grant resistance 20 instead. For instance, a creature with resistance 10 to both fire and cold and immunity to electricity allows you to gain resistance 10 to fire or cold, or resistance 20 to electricity.",
    shortDescription: 'While a summoned creature is stored as a tattoo via Tattoo Attunement, gain one of its elemental resistances.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Inscribe Magical Tattoo or Varisian Tattoo' },
      { type: 'feat', featId: 'tattoo_attunement' },
      { type: 'skill', skillId: 'spellcraft', ranks: 9 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'elemental_resistance',
        value: 0,
        source: 'Tattoo Transformation',
        condition: { type: 'custom', description: 'While a summoned creature is stored as a tattoo via Tattoo Attunement; gain one elemental resistance the tattooed creature possesses', params: {} },
      },
    ],
    activationMode: 'conditional',
    tags: ['summoning', 'tattoo', 'elemental_resistance', 'defensive'],
  },

  {
    id: 'versatile_summon_monster',
    name: 'Versatile Summon Monster',
    description: "Pick any two templates from the following list: aerial, aqueous, chthonic, dark, fiery, or primordial. Rather than using the celestial, entropic, fiendish, or resolute templates, you may apply one of your chosen templates to each creature you summon with summon monster spells. You may vary the template among multiple summoned creatures from the same casting. You can select this feat more than once. Each time you do, you can choose an additional two templates.",
    shortDescription: 'Apply alternative summoning templates (aerial, aqueous, chthonic, dark, fiery, primordial) in place of the standard celestial/fiendish options.',
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'summon_monster', 'template', 'versatile'],
  },

  {
    id: "versatile_summon_natures_ally",
    name: "Versatile Summon Nature's Ally",
    description: "When casting summon nature's ally spells, you can apply one of five templates (aerial, aqueous, chthonic, fiery, or primordial) to summoned animals, humanoids, or vermin instead of granting Augment Summoning benefits. If you summon multiple creatures with one casting, they must all have the same template.",
    shortDescription: "Apply alternative templates (aerial, aqueous, chthonic, fiery, primordial) to summon nature's ally instead of granting Augment Summoning benefits.",
    source: "Pathfinder Player Companion: Monster Summoner's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'augment_summoning' },
      { type: 'feat', featId: 'spell_focus_conjuration' },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'summon_natures_ally', 'template', 'druid', 'ranger'],
  },
];

// CHECKPOINT: last_written=versatile_summon_natures_ally, written=16/16, status=complete