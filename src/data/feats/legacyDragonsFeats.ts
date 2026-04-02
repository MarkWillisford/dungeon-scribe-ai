import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const LEGACY_DRAGONS_FEATS: FeatDefinition[] = [
  // ─── Legacy of Dragons (Pathfinder Player Companion, 2016) ──────────────

  {
    id: 'brood_defender',
    name: 'Brood Defender',
    description:
      "If an opponent misses its attack on an ally after you successfully used the aid another action to improve that ally's AC this round, you can attempt an Intimidate check as an immediate action to demoralize that opponent.",
    shortDescription:
      'Demoralize opponents as an immediate action when they miss an ally you aided.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'bodyguard' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'special', description: 'Wyvaran' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['wyvaran', 'aid_another', 'intimidate', 'demoralize'],
  },

  {
    id: 'draconian_law',
    name: 'Draconian Law',
    description:
      "When fighting an enemy you've witnessed breaking the law, you gain a +1 circumstance bonus on your first attack roll and on all damage rolls against that target until it has been tried for its crime.",
    shortDescription:
      'Gain a +1 circumstance bonus on attack and damage rolls against lawbreakers you witnessed.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Lawful alignment' },
      { type: 'special', description: 'Wyvaran' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'attack.melee',
        value: 1,
        source: 'Draconian Law',
        condition: {
          type: 'custom',
          description:
            'Against an enemy you have witnessed breaking the law (first attack roll only)',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'damage.melee',
        value: 1,
        source: 'Draconian Law',
        condition: {
          type: 'custom',
          description:
            'Against an enemy you have witnessed breaking the law, until it has been tried for its crime',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['wyvaran', 'lawful', 'circumstance', 'attack', 'damage'],
  },

  {
    id: 'draconic_heritage',
    name: 'Draconic Heritage',
    description:
      "You awaken draconic power within your bloodline by selecting one dragon type. You gain that dragon's associated heritage ability, with save DCs calculated as 10 + 1/2 your Hit Dice + your Charisma modifier. Options include: Chromatic (shroud arms in elemental energy as a swift action for 1 round, adding 1d6 energy damage to unarmed strikes, usable 3 + Charisma bonus times daily); Esoteric (project a psychic barrage within 15 feet as a standard action, potentially dazing the target for 1 round, usable once per 4 character levels); Imperial (emit a command aura in a 10-foot radius for 1 round granting allies +2 Will saves against fear while enemies suffer -2 penalties, usable 3 + Charisma bonus times daily); Metallic (gain energy resistance 5 against your chosen element until your next turn, usable 3 + Charisma bonus times daily); Outer (generate an alien aura in a 5-foot radius that sickens enemies failing a Will save, usable once per 4 character levels); Primal (create an elemental aura in a 10-foot radius dealing 1d6 damage and creating difficult terrain, usable once per 4 character levels); Drake (gain +10 enhancement bonus to speed for 1 round, usable 3 + Charisma bonus times daily); Linnorm (curse melee attackers as an immediate action imposing -2 penalties on their checks and rolls for 1 round, usable once per 4 character levels). You can take this feat only once. If you gain a bloodrager or sorcerer bloodline, you must choose draconic.",
    shortDescription: 'Awaken a draconic heritage ability based on a chosen dragon type.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'CHA', minimum: 13 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['draconic', 'heritage', 'bloodline', 'dragon', 'charisma'],
  },

  {
    id: 'draconic_manifestation',
    name: 'Draconic Manifestation',
    description:
      'You unlock additional draconic powers beyond basic claw manifestation. When manifesting claws, you infuse yourself with dormant bloodline abilities. For bloodragers, this functions as a free action during bloodrage only, lasting a number of rounds per day equal to 3 + your Charisma modifier. Benefits by bloodline type: Chromatic (immunity to paralysis and sleep effects); Esoteric (20% concealment against all incoming attacks); Imperial (+1 circumstance bonus per 4 levels on Intimidate checks; immunity to fear effects); Metallic (10-foot aura granting allies +2 morale bonus on saves against fear and evil spells; creatures can reroll fear saves once daily upon entering the aura); Outer (does not need to breathe; immunity to gas-based and smell effects); Primal (5-foot aura dealing 1 damage per 4 levels based on dragon type to creatures within it).',
    shortDescription:
      'Unlock additional draconic manifestation powers tied to your draconic bloodline type.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Access to natural claw attacks' },
      { type: 'special', description: 'Bloodrager or sorcerer with the draconic bloodline' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['draconic', 'bloodline', 'claws', 'manifestation', 'bloodrager', 'sorcerer'],
  },

  {
    id: 'linnorm_style',
    name: 'Linnorm Style',
    description:
      "While using this style, you take a -2 penalty to AC against melee attacks. After any creature makes a melee attack against you, you can add your Wisdom modifier to unarmed strike damage against that specific creature instead of your Strength bonus (or Dexterity bonus if normally applicable). This bonus lasts until the start of that creature's next turn.",
    shortDescription:
      'Accept a -2 AC penalty in melee to add Wisdom modifier to unarmed damage against attackers.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Base attack bonus +3 or monk level 3rd' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'wisdom', 'retributive', 'linnorm'],
  },

  {
    id: 'linnorm_vengeance',
    name: 'Linnorm Vengeance',
    description:
      'While using Linnorm Style and hit by a melee attack, you gain a +2 bonus on subsequent unarmed strike rolls against that attacker until their next turn. You can voluntarily accept hits that would normally miss; such attacks deal minimum damage only. If a melee attack would render you unconscious or dead, you may make one free retaliatory unarmed strike before falling; however, upon restoration to consciousness or life, you become stunned for 1 round.',
    shortDescription:
      'While in Linnorm Style, gain bonuses against attackers and make retaliatory strikes before falling unconscious.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'linnorm_style' },
      { type: 'special', description: 'Base attack bonus +6 or monk level 6th' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 2,
        source: 'Linnorm Vengeance',
        condition: {
          type: 'custom',
          description:
            'While using Linnorm Style, on unarmed strike rolls against a creature that hit you in melee, until their next turn',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'retributive', 'linnorm', 'attack_bonus'],
  },

  {
    id: 'linnorm_wrath',
    name: 'Linnorm Wrath',
    description:
      'When you use the Linnorm Vengeance feat to allow an enemy to hit you, you can make a retaliatory unarmed strike attack against that opponent as an immediate action (this counts as an attack of opportunity). Once per day, when a melee attack deals damage sufficient to knock you unconscious or kill you, the attacker must succeed at a Fortitude saving throw (DC = 10 + 1/2 character level + Wisdom modifier) or become stunned for 1 round.',
    shortDescription:
      'Make an immediate retaliatory unarmed strike when allowing hits via Linnorm Vengeance; once per day force attackers to save or be stunned when struck down.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'linnorm_style' },
      { type: 'feat', featId: 'linnorm_vengeance' },
      { type: 'special', description: 'Base attack bonus +9 or monk level 9th' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'retributive', 'linnorm', 'stun', 'immediate_action'],
  },

  {
    id: 'relic_familiarity',
    name: 'Relic Familiarity',
    description:
      "Your ancestral clan possessed a notable collection of ancient artifacts, providing familiarity with identifying such items. You gain a +2 bonus on Appraise checks to determine item value and a +2 bonus on Spellcraft checks to identify magical properties. When you exceed the DC by 5 or more points, you determine additional details about the item at the GM's discretion, such as its country of origin, the crafter's race, techniques employed in its creation, or whether it has any historical significance.",
    shortDescription:
      'Gain +2 on Appraise and Spellcraft checks to identify items; exceeding DC by 5+ reveals additional details.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Wyvaran' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.appraise',
        value: 2,
        source: 'Relic Familiarity',
        condition: {
          type: 'custom',
          description: 'On Appraise checks to determine item value',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.spellcraft',
        value: 2,
        source: 'Relic Familiarity',
        condition: {
          type: 'custom',
          description: 'On Spellcraft checks to identify magical properties',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['wyvaran', 'appraise', 'spellcraft', 'identification', 'items'],
  },

  {
    id: 'sincere_flattery',
    name: 'Sincere Flattery',
    description:
      'Wyvarans have little skill in creating original art, but they have proven to be experts in imitating and even improving on it. You receive a +4 circumstance bonus when using Craft checks to recreate an object you have previously observed. By dedicating one week to studying the specific object, this bonus increases to +8. The study period does not count toward the actual crafting time.',
    shortDescription:
      'Gain +4 (or +8 after a week of study) on Craft checks to recreate objects you have observed.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Wyvaran' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skill.craft',
        value: 4,
        source: 'Sincere Flattery',
        condition: {
          type: 'custom',
          description:
            'On Craft checks to recreate an object you have previously observed (+8 if you spend one week studying the object)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['wyvaran', 'craft', 'imitation', 'circumstance'],
  },

  {
    id: 'tail_maneuvers',
    name: 'Tail Maneuvers',
    description:
      'When you do not use your tail as a weapon, you gain a +2 bonus to your CMD and on any combat maneuver checks you attempt until the beginning of your next turn.',
    shortDescription:
      'Forego your tail attack to gain +2 CMD and on combat maneuver checks until your next turn.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Dragon creature type' },
      { type: 'special', description: 'Tail attack' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmd',
        value: 2,
        source: 'Tail Maneuvers',
        condition: {
          type: 'custom',
          description: 'When not using tail as a weapon, until the beginning of your next turn',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['dragon', 'tail', 'cmd', 'combat_maneuver'],
  },

  {
    id: 'tatzlwyrm_claw_style',
    name: 'Tatzlwyrm Claw Style',
    description:
      "Your curled fingers can tear into opponents' flesh and snatch free grappled allies. While using this style, your unarmed attacks can deal slashing damage instead of the standard bludgeoning. When striking an opponent who has another creature grappled or pinned, you may use a swift action to attempt a grapple combat maneuver check against that opponent's CMD. On a successful check, you force the target to release a grappled creature or downgrade a pinned creature to merely grappled status.",
    shortDescription:
      'Unarmed attacks deal slashing damage; use a swift action to free grappled allies when striking their grappler.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'escape_artist', ranks: 1 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'grapple', 'slashing', 'tatzlwyrm'],
  },

  {
    id: 'tatzlwyrm_grappler',
    name: 'Tatzlwyrm Grappler',
    description:
      'While utilizing the Tatzlwyrm Claw Style feat, when an opponent tries to grapple you, you may make an Escape Artist check. Should this result exceed your CMD, you can treat that check result as your CMD against the grapple attempt. You must perceive the attack and not be caught flat-footed.',
    shortDescription:
      'While in Tatzlwyrm Style, use an Escape Artist check result as your CMD against grapple attempts.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'tatzlwyrm_claw_style' },
      { type: 'skill', skillId: 'escape_artist', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'grapple', 'escape_artist', 'tatzlwyrm'],
  },

  {
    id: 'tatzlwyrm_rake',
    name: 'Tatzlwyrm Rake',
    description:
      "While using Tatzlwyrm Style, you can attempt a combat maneuver check to maintain a grapple without using your arms. You must employ at least two limbs for this purpose. Using all four legs to maintain the grapple prevents any movement during that time. When your combat maneuver check exceeds the target's result by 10 or more, you gain a swift action to make one unarmed strike against the grappled opponent.",
    shortDescription:
      "While in Tatzlwyrm Style, maintain grapples without your arms and gain a swift unarmed strike when your CMB exceeds the target's by 10+.",
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'tatzlwyrm_claw_style' },
      { type: 'feat', featId: 'tatzlwyrm_grappler' },
      { type: 'skill', skillId: 'escape_artist', ranks: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'unarmed', 'grapple', 'tatzlwyrm', 'combat_maneuver'],
  },

  {
    id: 'wyvaran_spellcasting',
    name: 'Wyvaran Spellcasting',
    description:
      'Select one spell you can cast obtained through your draconic bloodline, the Scalykind domain, or the Dragon subdomain. The chosen spell must be at least one spell level below your highest castable spell level. Once selected, you may cast this spell as a spell-like ability twice per day.',
    shortDescription:
      'Cast one draconic bloodline or domain spell twice per day as a spell-like ability.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 6 },
      { type: 'special', description: 'Wyvaran' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['wyvaran', 'spellcasting', 'spell-like_ability', 'draconic', 'bloodline'],
  },

  {
    id: 'wyvern_fury_style',
    name: 'Wyvern Fury Style',
    description:
      "This style allows practitioners to blend sweeping whip attacks with rapid dagger strikes, mimicking a wyvern's dual threat of fangs and venomous tail. While using this style, you can make attacks with a dagger, punching dagger, scorpion whip, spiked gauntlet, or whip when using a flurry of blows or brawler's flurry. However, only a single attack per flurry can utilize a whip or scorpion whip.",
    shortDescription:
      "While in this style, include daggers, whips, and related weapons in flurry of blows or brawler's flurry attacks.",
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'exotic_weapon_proficiency_whip' },
      { type: 'skill', skillId: 'acrobatics', ranks: 3 },
      { type: 'special', description: "Brawler's flurry or flurry of blows class feature" },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'flurry', 'whip', 'dagger', 'wyvern', 'brawler', 'monk'],
  },

  {
    id: 'wyvern_sting',
    name: 'Wyvern Sting',
    description:
      'While using Wyvern Fury Style, you may use a swift action after successfully hitting an opponent with a whip or scorpion whip to designate one ally. That chosen ally gains the ability to move out of spaces threatened by that specific foe without triggering attacks of opportunity from that enemy, lasting until your next turn begins.',
    shortDescription:
      'After hitting with a whip while in Wyvern Fury Style, use a swift action to let one ally move past that foe without provoking attacks of opportunity.',
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'exotic_weapon_proficiency_whip' },
      { type: 'feat', featId: 'wyvern_fury_style' },
      { type: 'skill', skillId: 'acrobatics', ranks: 6 },
      { type: 'special', description: "Brawler's flurry or flurry of blows class feature" },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'whip', 'wyvern', 'ally', 'movement', 'attacks_of_opportunity'],
  },

  {
    id: 'wyvern_wing',
    name: 'Wyvern Wing',
    description:
      "While employing the Wyvern Fury Style feat during a flurry of blows or brawler's flurry, you gain an additional 5-foot step beyond your normal one. This extra step may only occur between two attacks within your flurry sequence, and you may take both 5-foot steps consecutively without requiring an attack between them.",
    shortDescription:
      "While in Wyvern Fury Style, gain an extra 5-foot step during a flurry of blows or brawler's flurry.",
    source: 'Pathfinder Player Companion: Legacy of Dragons',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'exotic_weapon_proficiency_whip' },
      { type: 'feat', featId: 'wyvern_fury_style' },
      { type: 'feat', featId: 'wyvern_sting' },
      { type: 'skill', skillId: 'acrobatics', ranks: 10 },
      { type: 'special', description: "Brawler's flurry or flurry of blows class feature" },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'whip', 'wyvern', 'movement', 'flurry', 'five_foot_step'],
  },
];

// CHECKPOINT: last_written=wyvern_wing, written=17/17, status=complete
