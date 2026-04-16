import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

// Blood of the Coven (9), Dungeoneer's Handbook (9), Black Markets (9)

export const TIER3_BATCH1_FEATS: FeatDefinition[] = [
  // ─── Blood of the Coven ──────────────────────────────────────────────────────
  {
    id: 'awakened_hag_heritage',
    name: 'Awakened Hag Heritage',
    description:
      'You gain a +2 racial bonus on saving throws against arcane spells and an additional heritage-specific ability based on your hag lineage. As a drawback, daily at midnight there is a 50% chance you radiate an evil aura for 24 hours.',
    shortDescription:
      '+2 racial saves vs. arcane spells plus hag heritage ability; risk of evil aura.',
    source: 'Pathfinder Player Companion: Blood of the Coven',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: "Iron Will or Mother's Gift" },
      { type: 'race', raceName: 'Changeling' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.arcane',
        value: 2,
        bonusType: BonusType.RACIAL,
        source: 'Awakened Hag Heritage',
      },
    ],
    activationMode: 'passive',
    tags: ['changeling', 'hag', 'heritage', 'arcane'],
  },
  {
    id: 'coven_touched',
    name: 'Coven-Touched',
    description:
      'You can join a changeling coven even without the coven hex, with effective witch level equal to half your character level. You select one 0-level witch spell and cast it 3/day as a spell-like ability (CL = character level, DC = 10 + INT mod).',
    shortDescription: 'Join a coven without the hex; gain a 0-level witch SLA 3/day.',
    source: 'Pathfinder Player Companion: Blood of the Coven',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 11 },
      { type: 'race', raceName: 'Changeling' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Coven-Touched',
      },
    ],
    activationMode: 'passive',
    tags: ['changeling', 'coven', 'witch', 'spell-like ability'],
  },
  {
    id: 'cursed_conduit',
    name: 'Cursed Conduit',
    description:
      "You are not compelled to keep or use cursed items you touch as long as your character level equals or exceeds the item's caster level. You gain a bonus on saves against curse effects equal to one-third the caster level of the highest-level cursed item you carry.",
    shortDescription:
      'Resist cursed item compulsion; save bonus vs. curses from carried cursed items.',
    source: 'Pathfinder Player Companion: Blood of the Coven',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'save.curse',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Cursed Conduit',
      },
    ],
    activationMode: 'passive',
    tags: ['curse', 'cursed item', 'saving throw'],
  },
  {
    id: 'enhanced_coven',
    name: 'Enhanced Coven',
    description:
      'Your changeling coven can cast three more spells each day from its list of spell-like abilities. If multiple members of your coven take this feat, the benefits stack.',
    shortDescription: '+3 daily coven SLAs (stacks across coven members).',
    source: 'Pathfinder Player Companion: Blood of the Coven',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'Changeling' },
      { type: 'special', description: 'Coven hex or Coven-Touched' },
    ],
    effects: [
      {
        type: 'special',
        value: 3,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Enhanced Coven',
      },
    ],
    activationMode: 'passive',
    tags: ['changeling', 'coven', 'spell-like ability'],
  },
  {
    id: 'familiar_link_coven',
    name: 'Familiar Link',
    description:
      "You can establish empathic connections with coven members' familiars, gaining access to share spells, deliver touch spells, and scry on familiar abilities. You gain a +5 bonus on Spellcraft checks to help your familiar learn spells from a coven member's familiar.",
    shortDescription:
      "Access coven members' familiar abilities; +5 Spellcraft for familiar spell sharing.",
    source: 'Pathfinder Player Companion: Blood of the Coven',
    verificationStatus: 'needs_review' as const,
    types: ['teamwork'],
    prerequisites: [
      { type: 'special', description: 'Coven hex or Coven-Touched' },
      { type: 'special', description: 'Familiar or spirit animal class feature' },
      { type: 'level', minimum: 1, class: 'Witch' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.spellcraft',
        value: 5,
        bonusType: BonusType.UNTYPED,
        source: 'Familiar Link',
      },
    ],
    activationMode: 'passive',
    tags: ['changeling', 'coven', 'familiar', 'teamwork', 'witch'],
  },
  {
    id: 'latent_curse',
    name: 'Latent Curse',
    description:
      'You can imbue curse-descriptor spells into objects. The spell targets the next creature to interact with the object. Only the first creature is affected. The cursed object remains active for 1 day per caster level. Uses a spell slot 1 level higher.',
    shortDescription: 'Imbue curse spells into objects as traps (+1 spell level).',
    source: 'Pathfinder Player Companion: Blood of the Coven',
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Latent Curse',
      },
    ],
    activationMode: 'conditional',
    tags: ['curse', 'metamagic', 'trap', 'object'],
  },
  {
    id: 'metamagical_synergy',
    name: 'Metamagical Synergy',
    description:
      "When all three coven members with this feat cast the same spell in the same round, they resolve it once on the last caster's initiative and may apply one metamagic feat (Empower, Enlarge, Extend, Maximize, or Widen) without altering the spell slot. Casters need not possess the metamagic feat.",
    shortDescription: 'Coven members cast same spell together to apply free metamagic.',
    source: 'Pathfinder Player Companion: Blood of the Coven',
    verificationStatus: 'needs_review' as const,
    types: ['teamwork'],
    prerequisites: [{ type: 'feat', featId: 'allied_spellcaster' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Metamagical Synergy',
      },
    ],
    activationMode: 'conditional',
    tags: ['coven', 'teamwork', 'metamagic', 'cooperative casting'],
  },
  {
    id: 'scapegoat',
    name: 'Scapegoat',
    description:
      "You gain a +2 bonus on saves against curses. Once per day as a standard action, touch a cursed creature and attempt a character level check against the curse's DC. Success removes the curse but transfers it to you.",
    shortDescription: '+2 saves vs. curses; 1/day transfer a curse from an ally to yourself.',
    source: 'Pathfinder Player Companion: Blood of the Coven',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Great Fortitude or Iron Will' }],
    effects: [
      {
        type: 'bonus',
        target: 'special.curse',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Scapegoat',
      },
    ],
    activationMode: 'conditional',
    tags: ['curse', 'saving throw', 'transfer', 'support'],
  },
  {
    id: 'sin_sharing_critical',
    name: 'Sin-Sharing Critical',
    description:
      'When you confirm a critical hit, you may transfer one curse affecting you to the target (Will DC = 10 + BAB negates). The curse lasts 1d4 minutes or remaining duration, whichever is less. If the target saves or you have no curses, the target must roll twice on its next check and take the worse result.',
    shortDescription: 'On crit, transfer a curse to the target or impose disadvantage.',
    source: 'Pathfinder Player Companion: Blood of the Coven',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'critical'],
    prerequisites: [
      { type: 'feat', featId: 'critical_focus' },
      { type: 'bab', minimum: 13 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Sin-Sharing Critical',
      },
    ],
    activationMode: 'conditional',
    tags: ['critical hit', 'curse', 'transfer', 'debuff'],
  },

  // ─── Dungeoneer's Handbook ────────────────────────────────────────────────────
  {
    id: 'arcane_trap_suppressor',
    name: 'Arcane Trap Suppressor',
    description:
      "When you use dispel magic or greater dispel magic against a magical trap and your caster level check surpasses the trap's Disable Device DC, the trap becomes inoperative for 1d4 minutes rather than 1d4 rounds.",
    shortDescription: 'Dispel magic suppresses traps for minutes instead of rounds.',
    source: "Pathfinder Player Companion: Dungeoneer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast dispel magic or greater dispel magic' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Arcane Trap Suppressor',
      },
    ],
    activationMode: 'conditional',
    tags: ['trap', 'dispel', 'dungeon', 'spellcasting'],
  },
  {
    id: 'close_call',
    name: 'Close Call',
    description:
      'Once per day, you may reroll either a Disable Device or Sleight of Hand check. You must decide after the attempt but before results are revealed. You must take the second result.',
    shortDescription: '1/day reroll a Disable Device or Sleight of Hand check.',
    source: "Pathfinder Player Companion: Dungeoneer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'deft_hands' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Close Call',
      },
    ],
    activationMode: 'conditional',
    tags: ['reroll', 'disable device', 'sleight of hand', 'rogue'],
  },
  {
    id: 'coaxing_spell',
    name: 'Coaxing Spell',
    description:
      "Your mind-affecting spells can affect mindless oozes and vermin as if they weren't mindless, but has no effect on other creature types. Uses a spell slot 2 levels higher.",
    shortDescription: 'Mind-affecting spells work on mindless oozes and vermin (+2 spell level).',
    source: "Pathfinder Player Companion: Dungeoneer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['metamagic'],
    prerequisites: [
      { type: 'feat', featId: 'spell_focus_enchantment' },
      { type: 'skill', skillId: 'knowledge_dungeoneering', ranks: 6 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Coaxing Spell',
      },
    ],
    activationMode: 'conditional',
    tags: ['metamagic', 'enchantment', 'mind-affecting', 'ooze', 'vermin'],
  },
  {
    id: 'cursed_item_detection',
    name: 'Cursed Item Detection',
    description:
      'You gain a +2 bonus on checks to identify magic item properties. You need only exceed the DC by 5 (instead of 10) to determine whether an item is cursed.',
    shortDescription: '+2 identify magic items; detect curses at DC+5 instead of DC+10.',
    source: "Pathfinder Player Companion: Dungeoneer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'spellcraft', ranks: 5 },
      { type: 'special', description: 'Ability to cast detect magic' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.spellcraft',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Cursed Item Detection',
      },
    ],
    activationMode: 'passive',
    tags: ['cursed item', 'identify', 'spellcraft', 'dungeon'],
  },
  {
    id: 'dampen_presence',
    name: 'Dampen Presence',
    description:
      "You may use the Stealth skill to hide from any creature attempting to perceive you using blindsight or blindsense, even if you are clearly in that creature's perceptual field. This provides no advantage against other perception types.",
    shortDescription: 'Use Stealth to hide from blindsight and blindsense.',
    source: "Pathfinder Player Companion: Dungeoneer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'skill_focus_stealth' },
      { type: 'skill', skillId: 'stealth', ranks: 5 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'skill.stealth',
        source: 'Dampen Presence',
      },
    ],
    activationMode: 'conditional',
    tags: ['stealth', 'blindsight', 'blindsense', 'dungeon'],
  },
  {
    id: 'ostentatious_display_dh',
    name: 'Ostentatious Display',
    description:
      'While wearing a valuable nonmagical item (worth 5%+ of character wealth) in a magic item slot, you gain a +1 bonus on a corresponding skill. Belt/chest/shoulders: +1 Intimidate. Body/feet/neck: +1 Diplomacy. Eyes/hands/headband: +1 Bluff. Head/ring/wrists: +1 Perform.',
    shortDescription: '+1 skill bonus from valuable nonmagical items in magic item slots.',
    source: "Pathfinder Player Companion: Dungeoneer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'special',
        value: 1,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Ostentatious Display',
      },
    ],
    activationMode: 'passive',
    tags: ['social', 'wealth', 'magic item slot', 'skill bonus'],
  },
  {
    id: 'tactical_reposition',
    name: 'Tactical Reposition',
    description:
      'When you reposition an enemy into a hazardous location (pit, blade barrier, etc.), the enemy is treated as having triggered the hazard and takes a -2 penalty to AC and saves to mitigate it.',
    shortDescription: 'Repositioned enemies take -2 AC and saves vs. triggered hazards.',
    source: "Pathfinder Player Companion: Dungeoneer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_reposition' },
    ],
    effects: [
      {
        type: 'special',
        value: -2,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Tactical Reposition',
      },
    ],
    activationMode: 'conditional',
    tags: ['reposition', 'combat maneuver', 'trap', 'hazard', 'dungeon'],
  },
  {
    id: 'torch_handling',
    name: 'Torch Handling',
    description:
      'You treat torches as simple weapons. The radius of illumination from any torch or mundane light source you carry increases by 10 feet. Once per day you may reroll a save to resist an effect that would extinguish your light source.',
    shortDescription:
      'Torches are simple weapons; +10 ft light radius; 1/day reroll vs. light extinguish.',
    source: "Pathfinder Player Companion: Dungeoneer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [],
    effects: [
      {
        type: 'special',
        value: 10,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Torch Handling',
      },
    ],
    activationMode: 'passive',
    tags: ['torch', 'light', 'dungeon', 'simple weapon'],
  },
  {
    id: 'torchbearer_dh',
    name: 'Torchbearer',
    description:
      'You gain a 1st-level cohort (torchbearer) with no followers, who must be 3+ levels below you and can only take alchemist, bard, fighter, ranger, or rogue levels. They must have Torch Handling at 1st level and require no compensation. At 8th level, this feat automatically upgrades to Leadership.',
    shortDescription: 'Gain a torchbearer cohort; upgrades to Leadership at level 8.',
    source: "Pathfinder Player Companion: Dungeoneer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'level', minimum: 5 }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Torchbearer',
      },
    ],
    activationMode: 'passive',
    tags: ['cohort', 'leadership', 'torch', 'dungeon'],
  },

  // ─── Black Markets ────────────────────────────────────────────────────────────
  {
    id: 'black_market_dealings',
    name: 'Black Market Dealings',
    description:
      'You gain a +4 bonus on Diplomacy checks to access black markets without paying gold. Failed checks by less than 10 have no consequences. You can use Diplomacy to treat a black market/settlement as one size category larger for base value, available items, and purchase limits (1/week).',
    shortDescription: '+4 Diplomacy for black market access; expand market size 1/week.',
    source: 'Pathfinder Player Companion: Black Markets',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'skill.diplomacy',
        value: 4,
        bonusType: BonusType.UNTYPED,
        source: 'Black Market Dealings',
      },
    ],
    activationMode: 'conditional',
    tags: ['black market', 'diplomacy', 'trade', 'social'],
  },
  {
    id: 'black_market_sleuth',
    name: 'Black Market Sleuth',
    description:
      'Roll twice on Diplomacy checks to access black markets or learn about those with connections, taking the better result. Roll twice on Knowledge (local) about black markets and criminals. Track individuals in urban areas using Diplomacy instead of Survival.',
    shortDescription:
      'Roll twice on black market Diplomacy/Knowledge (local); track in cities with Diplomacy.',
    source: 'Pathfinder Player Companion: Black Markets',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'diplomacy', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_local', ranks: 1 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Black Market Sleuth',
      },
    ],
    activationMode: 'conditional',
    tags: ['black market', 'diplomacy', 'knowledge', 'tracking'],
  },
  {
    id: 'connected_criminal',
    name: 'Connected Criminal',
    description:
      'Diplomacy checks to access black markets take only 5d4 minutes. You gain the Crime modifier of an accessed black market for Bluff, Diplomacy, Profession, and Sleight of Hand when earning money. Capital spending limits are treated as 5 points higher.',
    shortDescription: 'Faster black market access; gain Crime modifier for earning checks.',
    source: 'Pathfinder Player Companion: Black Markets',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_local', ranks: 5 }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Connected Criminal',
      },
    ],
    activationMode: 'passive',
    tags: ['black market', 'criminal', 'downtime', 'earning'],
  },
  {
    id: 'infuse_poison',
    name: 'Infuse Poison',
    description:
      "You can imbue an ingested poison with a spell of 3rd level or lower that targets creatures and has a casting time under 1 minute. When the poison is ingested, the target receives the spell's effects. Crafting takes 2 hours for poisons ≤250 gp, or 1 day per 1,000 gp. Raw materials cost half the poison's base price.",
    shortDescription: 'Imbue ingested poisons with spells up to 3rd level.',
    source: 'Pathfinder Player Companion: Black Markets',
    verificationStatus: 'needs_review' as const,
    types: ['item_creation'],
    prerequisites: [
      { type: 'feat', featId: 'brew_potion' },
      { type: 'skill', skillId: 'craft_alchemy', ranks: 5 },
      { type: 'caster_level', minimum: 3 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Infuse Poison',
      },
    ],
    activationMode: 'passive',
    tags: ['poison', 'item creation', 'alchemy', 'crafting'],
  },
  {
    id: 'pesh_euphoria',
    name: 'Pesh Euphoria',
    description:
      "When consuming pesh, you gain a +2 bonus on saves against emotion and fear effects. Once per day, if you fail such a save while under pesh's initial effect, you may retry 1 round later at the same DC.",
    shortDescription: '+2 saves vs. emotion/fear on pesh; 1/day retry a failed save.',
    source: 'Pathfinder Player Companion: Black Markets',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Sahir-Afiyun feat or pesh addict' }],
    effects: [
      {
        type: 'bonus',
        target: 'fear',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Pesh Euphoria',
      },
    ],
    activationMode: 'conditional',
    tags: ['pesh', 'drug', 'fear', 'emotion', 'katapesh'],
  },
  {
    id: 'pesh_healing',
    name: 'Pesh Healing',
    description:
      'When you take a dose of pesh, you gain temporary hit points equal to your total Hit Dice for 1 hour. Temporary hit points from additional doses do not stack.',
    shortDescription: 'Gain temp HP equal to HD for 1 hour when taking pesh.',
    source: 'Pathfinder Player Companion: Black Markets',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Sahir-Afiyun feat or pesh addict' }],
    effects: [
      {
        type: 'bonus',
        target: 'hp.temporary',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Pesh Healing',
      },
    ],
    activationMode: 'conditional',
    tags: ['pesh', 'drug', 'temporary hp', 'katapesh'],
  },
  {
    id: 'pesh_rejuvenation',
    name: 'Pesh Rejuvenation',
    description:
      "When reduced to 0 or fewer HP while under pesh's initial effect, you can end that effect as an immediate action to gain temporary HP equal to your Constitution score for 1 hour. You become sickened for 1d6 hours afterward.",
    shortDescription: 'End pesh effect when dying for temp HP equal to CON; sickened afterward.',
    source: 'Pathfinder Player Companion: Black Markets',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Sahir-Afiyun feat or pesh addict' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Pesh Rejuvenation',
      },
    ],
    activationMode: 'conditional',
    tags: ['pesh', 'drug', 'survival', 'katapesh'],
  },
  {
    id: 'sahir_afiyun',
    name: 'Sahir-Afiyun',
    description:
      'You reduce Constitution or Wisdom damage from pesh by 1. You can add sahir-afiyun spells to your class spell list: one spell of your highest castable level or two spells one level lower. All such spells require pesh as a material component. Can be taken multiple times.',
    shortDescription: 'Reduce pesh ability damage by 1; add pesh-powered spells to your list.',
    source: 'Pathfinder Player Companion: Black Markets',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'spell_focus' },
      { type: 'caster_level', minimum: 3 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Sahir-Afiyun',
      },
    ],
    activationMode: 'passive',
    tags: ['pesh', 'drug', 'spellcasting', 'katapesh'],
  },
  {
    id: 'wary_smuggler',
    name: 'Wary Smuggler',
    description:
      'You gain a +5 bonus on Sleight of Hand checks to conceal small non-weapon objects on your body, or on a single animal or vehicle. In urban areas, you can always take 10 on Perception, Sleight of Hand, and Stealth checks.',
    shortDescription:
      '+5 Sleight of Hand to conceal objects; always take 10 on urban Perception/Stealth/SoH.',
    source: 'Pathfinder Player Companion: Black Markets',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'perception', ranks: 5 },
      { type: 'skill', skillId: 'sleight_of_hand', ranks: 5 },
      { type: 'skill', skillId: 'stealth', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.sleight_of_hand',
        value: 5,
        bonusType: BonusType.UNTYPED,
        source: 'Wary Smuggler',
      },
    ],
    activationMode: 'passive',
    tags: ['smuggling', 'stealth', 'urban', 'sleight of hand'],
  },
];
