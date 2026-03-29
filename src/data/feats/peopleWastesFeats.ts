import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const PEOPLE_WASTES_FEATS: FeatDefinition[] = [
  // ─── People of the Wastes (Pathfinder Player Companion, 2017) ──────────────

  {
    id: 'agent_of_purity',
    name: 'Agent of Purity',
    description:
      'You have devoted your life to purging blight from the world. Select one terrain type connected to the relevant blight. You gain a +1 bonus on Knowledge (geography) and Knowledge (nature) checks regarding the blighted terrain and can attempt those checks untrained. Additionally, you receive a +1 bonus on attack rolls against creatures corrupted by the relevant blight, and you gain a +1 bonus on saving throws against the abilities of such creatures. Once per day, you can cast consecrate, neutralize poison, remove curse, or remove disease as a spell-like ability using your character level as caster level. Goal: Slay or cure at least 50 creatures corrupted by the relevant blight, and then slay a challenging foe closely connected to spreading the blight.',
    shortDescription:
      'Gain bonuses against blighted creatures and terrain knowledge; once per day cast a purifying spell as a spell-like ability.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'A friend or ally must have been significantly corrupted by a specific natural or supernatural blight, or you must possess a regional background trait tied to a specific blight.',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_geography',
        value: 1,
        source: 'Agent of Purity',
        condition: {
          type: 'custom',
          description: 'Checks regarding blighted terrain',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_nature',
        value: 1,
        source: 'Agent of Purity',
        condition: {
          type: 'custom',
          description: 'Checks regarding blighted terrain',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack',
        value: 1,
        source: 'Agent of Purity',
        condition: {
          type: 'custom',
          description: 'Against creatures corrupted by the relevant blight',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['blight', 'story', 'knowledge', 'terrain'],
  },

  {
    id: 'aligned_crafting',
    name: 'Aligned Crafting',
    description:
      'Your magical creations reject those you oppose. When crafting magic weapons, armor, shields, or wondrous items, you can imbue them with your alignment. Creatures whose alignment differs from yours by more than one step become sickened while using or wearing the item. Once infused with your alignment, the item cannot later receive conflicting special abilities (for example, a lawful good weapon cannot gain anarchic abilities). This alignment infusion increases construction costs by 10%.',
    shortDescription:
      'Imbue crafted magic items with your alignment, sickening creatures of opposing alignment who use them.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['item_creation'],
    prerequisites: [
      {
        type: 'feat',
        featId: 'craft_magic_arms_and_armor',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['crafting', 'alignment', 'magic_items'],
  },

  {
    id: 'battering_ram',
    name: 'Battering Ram',
    description:
      'Sometimes smacking your firearm against a solid surface is all that is needed to unjam it. Sometimes that solid surface is a creature. You gain the ability to use the pistol-whip deed despite your firearm being broken. When you successfully hit with this deed, you may expend 1 grit point as an immediate action to clear the broken condition from the firearm, provided the firearm received that condition specifically from a misfire.',
    shortDescription:
      'Use pistol-whip even with a broken firearm; expend 1 grit on a hit to clear a misfire-caused broken condition.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['grit'],
    prerequisites: [
      {
        type: 'skill',
        skillId: 'craft_alchemy',
        ranks: 3,
      },
      {
        type: 'special',
        description: 'Grit class feature or Amateur Gunslinger feat',
      },
      {
        type: 'special',
        description: 'Pistol-whip gunslinger deed',
      },
      {
        type: 'special',
        description: 'Quick clear gunslinger deed',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['firearm', 'grit', 'gunslinger', 'pistol-whip', 'broken'],
  },

  {
    id: 'create_enhanced_firearm',
    name: 'Create Enhanced Firearm',
    description:
      'When crafting a firearm or magical firearm, you may use reinforced components to improve reliability. This increases the item total construction cost by 10%, and reduces the weapon misfire chance by 1 (though this reduction cannot exceed 1 total).',
    shortDescription:
      'Craft firearms with a reduced misfire chance by 1, at a 10% increase in construction cost.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['item_creation'],
    prerequisites: [
      {
        type: 'feat',
        featId: 'craft_magic_arms_and_armor',
      },
      {
        type: 'special',
        description: 'Craft (weapons) 1 rank or Gunsmithing feat',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['firearm', 'crafting', 'misfire', 'gunsmithing'],
  },

  {
    id: 'elemental_conversion',
    name: 'Elemental Conversion',
    description:
      'You can infuse your elemental spells with primal magic. Once per day when casting a spell dealing acid, cold, electricity, or fire damage, you can infuse it with primal magic and randomly transform its element. Roll 1d4 after casting but before effects resolve: 1 = acid, 2 = cold, 3 = electricity, 4 = fire. In areas where primal magic is predominant or very common, you can use this ability once per hour instead.',
    shortDescription:
      'Once per day, randomly convert the energy type of an elemental spell when casting it.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['general'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['primal_magic', 'elemental', 'energy_type', 'spellcasting'],
  },

  {
    id: 'primal_kineticist',
    name: 'Primal Kineticist',
    description:
      'When primal magic surrounds you, you can channel it to transform the nature of your kinetic blasts. In areas where primal magic is predominant or very common, you may accept 1 point of burn to randomly determine which simple blast type you use instead of your own (roll 1d10: air, cold, earth, electric, fire, gravity, negative, telekinetic, water, or wood). You may apply applicable form or substance infusions to the randomly selected blast, paying normal burn costs for those infusions.',
    shortDescription:
      'In areas of primal magic, spend 1 burn to randomly transform your kinetic blast into a different simple blast type.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['general'],
    prerequisites: [
      {
        type: 'level',
        class: 'kineticist',
        minimum: 1,
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['kineticist', 'primal_magic', 'kinetic_blast', 'burn'],
  },

  {
    id: 'primal_strike',
    name: 'Primal Strike',
    description:
      'You have learned to draw primal magic through your body to befuddle your enemies. Before attacking, you can declare a primal strike. On a hit, damage is dealt normally and the target must succeed at a Fortitude save (DC = 10 + half character level + Wisdom modifier) or be confused for 1 round (or 1d4 rounds in areas of primal magic). You can use this ability once per day per 4 character levels (minimum 1), limited to once per round maximum. This is a mind-affecting compulsion effect. Monks calculate uses as monk level plus one additional use per 4 non-monk levels, still capped at once per round.',
    shortDescription:
      'Declare a primal strike before attacking; on a hit the target must save or be confused for 1 round.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['combat'],
    prerequisites: [
      {
        type: 'ability_score',
        ability: 'WIS',
        minimum: 17,
      },
      {
        type: 'feat',
        featId: 'improved_unarmed_strike',
      },
      {
        type: 'bab',
        minimum: 8,
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['unarmed', 'primal_magic', 'confusion', 'mind-affecting', 'compulsion'],
  },

  {
    id: 'reinforced_crafting',
    name: 'Reinforced Crafting',
    description:
      'Your magical creations are hardier than most. When crafting magic weapons, armor, or shields, you can incorporate a fortifying element that increases construction costs by 10%. For weapons, the broken condition penalty reduces to -1 instead of -2 on attack and damage rolls. For armor and shields, the AC bonus reduction becomes one-quarter instead of one-half when broken. All other broken condition effects remain unchanged.',
    shortDescription:
      'Craft magic weapons, armor, or shields that suffer reduced penalties from the broken condition.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['item_creation'],
    prerequisites: [
      {
        type: 'feat',
        featId: 'craft_magic_arms_and_armor',
      },
      {
        type: 'special',
        description: 'Ability to cast make whole or mending',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['crafting', 'broken_condition', 'magic_items', 'weapons', 'armor'],
  },

  {
    id: 'runic_charge',
    name: 'Runic Charge',
    description:
      'You can deliver touch spells with frightful ferocity. When you have two free hands, you may cast a touch-range spell and deliver it during a charge action against a single target. This grants a +2 bonus on caster level checks to overcome spell resistance, and the touch attack critical threat range becomes 19-20. This expanded threat range does not stack with other similar abilities such as Improved Critical.',
    shortDescription:
      'Deliver a touch spell during a charge action, gaining +2 to overcome SR and a 19-20 critical threat range.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['combat'],
    prerequisites: [
      {
        type: 'level',
        minimum: 5,
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'caster_level_check',
        value: 2,
        source: 'Runic Charge',
        condition: {
          type: 'custom',
          description: 'When overcoming spell resistance during a runic charge',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['touch_spell', 'charge', 'spell_resistance', 'critical', 'spellcasting'],
  },

  {
    id: 'signature_strike_style',
    name: 'Signature Strike Style',
    description:
      'Your accuracy when attacking is both delightfully artistic and chillingly deadly. When hitting creatures with called shots, targeted strike deeds, or targeting gunslinger deeds, they must succeed at a Will save (DC = 10 + half character level + Charisma modifier) or become shaken for 1d3 rounds. This fear effect does not stack with itself or other fear effects; it only extends duration if the target is already shaken. Additionally, damaging attacks can leave a distinctive mark (letter, shape, or symbol). The mark heals naturally as damage heals. By spending 1 grit or panache point as a free action, you can make the mark a permanent scar unless the target succeeds at a Fortitude save (same DC). You gain a +2 bonus on Perception checks to identify creatures bearing your mark. You must be using this style and wielding a weapon matching your Weapon Focus to gain these benefits.',
    shortDescription:
      'Called shots and targeted strikes can shake foes; precision attacks leave identifying marks on targets.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['combat', 'style'],
    prerequisites: [
      {
        type: 'feat',
        featId: 'precise_shot',
      },
      {
        type: 'feat',
        featId: 'weapon_focus',
      },
      {
        type: 'bab',
        minimum: 7,
      },
      {
        type: 'skill',
        skillId: 'intimidate',
        ranks: 7,
      },
      {
        type: 'special',
        description:
          'Improved Called Shot feat, targeted strike swashbuckler deed, or targeting gunslinger deed',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: 2,
        source: 'Signature Strike Style',
        condition: {
          type: 'custom',
          description: 'To identify creatures bearing your mark',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'called_shot', 'intimidate', 'shaken', 'fear', 'mark'],
  },

  {
    id: 'signature_strike_taunt',
    name: 'Signature Strike Taunt',
    description:
      'Your mocking strikes leave your foe deeply embarrassed and infuriated. Enemies who become shaken through Signature Strike Style suffer an additional -2 AC penalty while that shaken condition remains active. During this period, you may perform combat maneuvers against the affected target without triggering attacks of opportunity.',
    shortDescription:
      'Foes shaken by Signature Strike Style take -2 AC and cannot make attacks of opportunity against your combat maneuvers.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['combat'],
    prerequisites: [
      {
        type: 'feat',
        featId: 'precise_shot',
      },
      {
        type: 'feat',
        featId: 'signature_strike_style',
      },
      {
        type: 'feat',
        featId: 'weapon_focus',
      },
      {
        type: 'bab',
        minimum: 9,
      },
      {
        type: 'skill',
        skillId: 'intimidate',
        ranks: 9,
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'signature_strike', 'shaken', 'combat_maneuver', 'ac_penalty'],
  },

  {
    id: 'signature_strike_triumph',
    name: 'Signature Strike Triumph',
    description:
      "With an effortless flourish, you strike terror into your foes and inspire your allies. When using Signature Strike Style to impose the shaken condition on a creature, the duration extends to 1d4+1 rounds instead of the standard 1d3 rounds. Additionally, upon confirming a critical hit against a marked creature, one visible ally within 60 feet may attempt a new saving throw against one ongoing emotion, fear, or mind-affecting effect from the marked creature. If successful and the effect has 24 hours or less remaining, it ends entirely; if more than 24 hours remain, it is suppressed for 1 minute.",
    shortDescription:
      "Extend shaken duration from Signature Strike Style; critical hits against marked creatures let nearby allies reroll saves against that creature's mind effects.",
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['combat'],
    prerequisites: [
      {
        type: 'feat',
        featId: 'precise_shot',
      },
      {
        type: 'feat',
        featId: 'signature_strike_style',
      },
      {
        type: 'feat',
        featId: 'signature_strike_taunt',
      },
      {
        type: 'feat',
        featId: 'weapon_focus',
      },
      {
        type: 'bab',
        minimum: 11,
      },
      {
        type: 'skill',
        skillId: 'intimidate',
        ranks: 11,
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'signature_strike', 'shaken', 'fear', 'critical', 'mind-affecting'],
  },

  {
    id: 'sizzling_shot',
    name: 'Sizzling Shot',
    description:
      'Your firearm ammunition ignites when discharged, allowing you to modify the damage type of your shots. While you maintain at least 1 grit point when firing bullets or similar ammunition, you can divide the attack damage equally between fire damage and bludgeoning/piercing damage. Additionally, you can expend 1 grit point when declaring such an attack to grant the fired ammunition the flaming weapon special ability for that single attack.',
    shortDescription:
      'Split firearm damage between fire and physical damage; spend 1 grit to add the flaming special ability for one shot.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['grit'],
    prerequisites: [
      {
        type: 'special',
        description: 'Grit class feature or Amateur Gunslinger feat',
      },
      {
        type: 'bab',
        minimum: 4,
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['firearm', 'grit', 'fire_damage', 'flaming', 'gunslinger'],
  },

  {
    id: 'spell_drinker',
    name: 'Spell Drinker',
    description:
      "The magic that cannot harm you only makes you stronger. Once per hour, when you successfully save against a creature's spell or spell-like ability, you can use an immediate action to gain temporary hit points equal to 1d6 plus the spell's level (lasting 1 minute). During this duration, you receive a +2 bonus on saving throws against that same creature's spells and spell-like abilities. Characters with 10 or more Hit Dice gain double the temporary hit points. These temporary hit points stack with other sources but not with themselves.",
    shortDescription:
      "Once per hour, successfully saving against a spell grants temporary hit points and a +2 bonus on saves against that creature's spells.",
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['general'],
    prerequisites: [
      {
        type: 'ability_score',
        ability: 'CON',
        minimum: 13,
      },
      {
        type: 'special',
        description: 'Great Fortitude, Iron Will, or Lightning Reflexes',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'saving_throw',
        value: 2,
        source: 'Spell Drinker',
        condition: {
          type: 'custom',
          description: "Against the triggering creature's spells and spell-like abilities while temporary hit points last",
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['saving_throw', 'temporary_hit_points', 'spells', 'spell-like_ability'],
  },

  {
    id: 'stock_striker_style',
    name: 'Stock-Striker Style',
    description:
      "Your fighting technique makes you equally deadly with your firearm's stock as with its bullets. When executing the pistol-whip deed under this style, you receive a +1 bonus on the attack roll and on the combat maneuver check to knock the target prone; this increases to +2 when you use a two-handed firearm. Successfully knocking a target prone prevents that target from triggering attacks of opportunity against you until the end of your next turn when making ranged firearm attacks. One-handed firearms gain classification as light weapons for Weapon Finesse and similar abilities when performing pistol-whip.",
    shortDescription:
      'Gain bonuses on pistol-whip attack and trip maneuver; knocking foes prone prevents their opportunity attacks against your firearms.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['combat', 'style'],
    prerequisites: [
      {
        type: 'special',
        description: 'Pistol-whip gunslinger deed',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'firearm', 'pistol-whip', 'combat_maneuver', 'prone', 'gunslinger'],
  },

  {
    id: 'stock_striker_sweep',
    name: 'Stock-Striker Sweep',
    description:
      'When using Stock-Striker Style and successfully knocking a target prone via the pistol-whip deed, you can use a swift action to either push the target 5 feet away or perform the pistol-whip deed a second time against an adjacent foe within reach, with the second use costing 0 grit points.',
    shortDescription:
      'After knocking a foe prone with pistol-whip, use a swift action to push them away or pistol-whip a second adjacent foe for free.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['combat'],
    prerequisites: [
      {
        type: 'feat',
        featId: 'stock_striker_style',
      },
      {
        type: 'bab',
        minimum: 7,
      },
      {
        type: 'special',
        description: 'Pistol-whip gunslinger deed',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'firearm', 'pistol-whip', 'combat_maneuver', 'prone', 'gunslinger', 'swift_action'],
  },

  {
    id: 'stock_striker_takedown',
    name: 'Stock-Striker Takedown',
    description:
      "When you knock a target prone using the pistol-whip deed while employing Stock-Striker Style, you may fire one barrel of a loaded firearm as a move action. If your firearm has the scatter quality, you can make a scattering shot that includes the target. You suffer no attack penalty against prone foes with this attack, and your weapon's critical multiplier increases by 1 (maximum x5).",
    shortDescription:
      'After knocking a foe prone with pistol-whip, fire your firearm as a move action with no penalty against the prone target and +1 critical multiplier.',
    source: 'Pathfinder Player Companion: People of the Wastes',
    types: ['combat'],
    prerequisites: [
      {
        type: 'feat',
        featId: 'point_blank_shot',
      },
      {
        type: 'feat',
        featId: 'stock_striker_style',
      },
      {
        type: 'feat',
        featId: 'stock_striker_sweep',
      },
      {
        type: 'bab',
        minimum: 9,
      },
      {
        type: 'special',
        description: 'Pistol-whip gunslinger deed',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'firearm', 'pistol-whip', 'prone', 'gunslinger', 'critical', 'scatter'],
  },
];

// CHECKPOINT: last_written=stock_striker_takedown, written=17/17, status=complete