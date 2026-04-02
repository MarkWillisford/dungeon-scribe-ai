import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const MYTHIC_FEATS_2: FeatDefinition[] = [
  {
    id: 'fabulous_figments_mythic',
    name: 'Fabulous Figments (Mythic)',
    description:
      'Your illusions are nearly impossible to see through. Benefit: Non-mythic creatures cannot identify your illusion spells with Spellcraft checks, including those made using arcane sight, detect magic, or similar abilities. When a mythic creature attempts to identify one of your illusion spells, add your tier to the Spellcraft DC. If a mythic creature learns from another creature that one of your illusions is fake, it gains only a +2 bonus on Will saves to disbelieve your illusion spells. Non-mythic creatures gain no bonus from being informed.',
    shortDescription:
      'Non-mythic creatures cannot identify your illusion spells; mythic creatures add your tier to the DC.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'spell_focus_illusion' }],
    effects: [],
    activationMode: 'passive',
    tags: ['illusion', 'spellcraft', 'mythic'],
  },
  {
    id: 'marked_for_glory_mythic',
    name: 'Marked for Glory (Mythic)',
    description:
      'You were destined for mythic power from birth. Benefit: You can use the surge ability once per day, adding 1d6 to the result of one of your d20 rolls. If you have or gain mythic tiers, you gain one additional use of your surge ability per day.',
    shortDescription:
      'Use surge once per day; gain an additional daily surge use if you have mythic tiers.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [
      { type: 'special', description: 'Great Fortitude, Iron Will, or Lightning Reflexes' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['surge', 'destiny', 'mythic'],
  },
  {
    id: 'maximize_surge_mythic',
    name: 'Maximize Surge (Mythic)',
    description:
      'You can push your mythic power to its absolute limits. Benefit: Once per day, you can expend two uses of mythic power when you surge to treat your surge die as if it rolled the maximum possible result. You can select this feat multiple times. Each time you do, you gain one additional daily use of this ability.',
    shortDescription:
      'Expend two mythic power uses to maximize your surge die result once per day.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'special', description: '6th mythic tier' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['surge', 'mythic power', 'mythic'],
  },
  {
    id: 'medusas_wrath_mythic',
    name: "Medusa's Wrath (Mythic)",
    description:
      "Your Medusa's Wrath strike can leave your opponent unable to act. Benefit: You may forgo the two additional unarmed strikes of Medusa's Wrath to instead make a single unarmed strike at your highest base attack bonus. If you successfully hit your opponent, it must succeed at a Fortitude saving throw (DC 10 + 1/2 your character level + your Wisdom modifier) or be staggered for 1 round. You can expend one use of mythic power when you stagger a target with Medusa's Wrath to extend the duration of the staggered condition by a number of rounds equal to half your tier.",
    shortDescription:
      'Forgo extra strikes to stagger a target; spend mythic power to extend stagger duration.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'medusas_wrath' }],
    effects: [],
    activationMode: 'passive',
    tags: ['unarmed', 'stagger', 'monk', 'mythic'],
  },
  {
    id: 'missile_shield_mythic',
    name: 'Missile Shield (Mythic)',
    description:
      'You can deflect an almost impossible number of ranged attacks. Benefit: When using Missile Shield, you can deflect an additional number of ranged attacks per round equal to half your tier. You can expend one use of mythic power as an immediate action to deflect a single ray from a ray spell or effect targeting you.',
    shortDescription:
      'Deflect additional ranged attacks equal to half tier; spend mythic power to deflect rays.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'missile_shield' }],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'defense', 'shield', 'mythic'],
  },
  {
    id: 'mobility_mythic',
    name: 'Mobility (Mythic)',
    description:
      'You move across the battlefield with preternatural grace. Benefit: The dodge bonus to AC from Mobility increases to +6. Once per round when a movement-triggered attack of opportunity misses you, you can shift 5 feet as a free action. This movement does not provoke attacks of opportunity, but it does count as a 5-foot step.',
    shortDescription:
      'Mobility grants +6 dodge bonus; shift 5 feet when an attack of opportunity misses you.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'mobility' }],
    effects: [
      {
        type: 'bonus',
        target: 'ac',
        value: 6,
        bonusType: BonusType.DODGE,
        condition: {
          type: 'custom',
          description: 'When moving through threatened squares',
          params: {},
        },
        source: 'Mobility (Mythic)',
      },
    ],
    activationMode: 'passive',
    tags: ['movement', 'dodge', 'defense', 'mythic'],
  },
  {
    id: 'monastic_legacy_mythic',
    name: 'Monastic Legacy (Mythic)',
    description:
      'Your training outside the monastery strengthens your abilities within it. Benefit: Add half your non-monk class levels to your monk level when determining your AC bonus from the Still Mind class feature. As a free action, you can expend one use of mythic power to add half your tier to your effective monk level for determining your unarmed strike damage and AC bonus. This benefit lasts until the start of your next turn.',
    shortDescription:
      'Add half non-monk levels to monk level for AC; spend mythic power to boost effective monk level.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'monastic_legacy' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['monk', 'multiclass', 'mythic'],
  },
  {
    id: 'mounted_archery_mythic',
    name: 'Mounted Archery (Mythic)',
    description:
      'You are a peerless mounted archer. Benefit: When using the Ride skill to use your mount as cover, you can still make a single ranged weapon attack as a standard action. When your mount is moving, you can expend one use of mythic power to negate the penalties on ranged weapon attack rolls while mounted until the start of your next turn.',
    shortDescription:
      'Attack while using mount as cover; spend mythic power to negate mounted archery penalties.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'mounted_archery' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['mounted', 'ranged', 'archery', 'mythic'],
  },
  {
    id: 'mounted_combat_mythic',
    name: 'Mounted Combat (Mythic)',
    description:
      'You and your mount act as one on the battlefield. Benefit: You can negate additional hits against your mount per round equal to your tier. Once per round as an immediate action, you can expend one use of mythic power to substitute a Ride check for a single Reflex saving throw your mount must make.',
    shortDescription:
      'Negate additional hits against mount per round equal to tier; substitute Ride check for mount Reflex save.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'mounted_combat' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mounted', 'defense', 'mythic'],
  },
  {
    id: 'mythic_paragon_mythic',
    name: 'Mythic Paragon (Mythic)',
    description:
      'Your mythic power surpasses that of other mythic beings of your tier. Benefit: Your tier is considered 2 higher for the purposes of determining the potency of your mythic abilities, mythic feats, and mythic spells. This does not grant you access to abilities or spells that require a higher tier, nor does it grant you additional uses of mythic power or improve your surge die.',
    shortDescription: 'Treat your tier as 2 higher for determining mythic ability potency.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['tier', 'potency', 'mythic'],
  },
  {
    id: 'mythic_spell_lore_mythic',
    name: 'Mythic Spell Lore (Mythic)',
    description:
      'You have learned how to unlock the mythic potential of your spells. Benefit: You can learn a number of mythic spells equal to your tier and can expend mythic power when casting them to enhance the results. To select a mythic spell, you must be able to cast the non-mythic version of that spell or have it on your list of spells known. Whenever you gain a new tier, you can select an additional mythic spell. Special: You can select this feat multiple times.',
    shortDescription:
      'Learn mythic spells equal to tier; expend mythic power when casting to enhance effects.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'special', description: 'Ability to cast spells' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['spells', 'mythic power', 'mythic'],
  },
  {
    id: 'natural_spell_mythic',
    name: 'Natural Spell (Mythic)',
    description:
      'You can use magic items and speak while in wild shape. Benefit: While in wild shape, you can activate spell completion and spell trigger magic items that you could use before wild shaping. You do not need to physically manipulate the item when using it in this way. You can also speak normally while in wild shape.',
    shortDescription: 'Activate magic items and speak normally while in wild shape.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'natural_spell' }],
    effects: [],
    activationMode: 'passive',
    tags: ['druid', 'wild shape', 'magic items', 'mythic'],
  },
  {
    id: 'nimble_moves_mythic',
    name: 'Nimble Moves (Mythic)',
    description:
      'You dance across obstructed terrain with ease. Benefit: For every 2 tiers you possess, you can move through up to 5 feet of difficult terrain each round as if it were normal terrain (minimum 5 feet). This benefit stacks with the benefit of Nimble Moves and Acrobatic Steps.',
    shortDescription: 'Move through 5 feet of difficult terrain per 2 tiers as normal terrain.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'nimble_moves' }],
    effects: [],
    activationMode: 'passive',
    tags: ['movement', 'terrain', 'mythic'],
  },
  {
    id: 'penetrating_strike_mythic',
    name: 'Penetrating Strike (Mythic)',
    description:
      'Your attacks pierce through the toughest defenses. Benefit: When using Penetrating Strike or Greater Penetrating Strike, you ignore an additional point of damage reduction for every 3 tiers you possess. The effects of these feats now apply to damage reduction without a type (such as DR 10/-).',
    shortDescription: 'Ignore additional DR per 3 tiers; also applies to untyped damage reduction.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'penetrating_strike' }],
    effects: [],
    activationMode: 'passive',
    tags: ['damage reduction', 'penetration', 'mythic'],
  },
  {
    id: 'persuasive_mythic',
    name: 'Persuasive (Mythic)',
    description:
      'Your powers of persuasion are supernaturally effective. Benefit: The bonus on Diplomacy and Intimidate checks from Persuasive increases by 2. You can expend one use of mythic power to treat a Diplomacy or Intimidate check as if you rolled a 20. You must decide to use this ability before making the roll.',
    shortDescription:
      'Persuasive bonus increases by 2; spend mythic power to treat a check as a 20.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'persuasive' }],
    effects: [
      {
        type: 'bonus',
        target: 'skill.diplomacy',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Persuasive (Mythic)',
      },
      {
        type: 'bonus',
        target: 'skill.intimidate',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Persuasive (Mythic)',
      },
    ],
    activationMode: 'passive',
    tags: ['social', 'diplomacy', 'intimidate', 'mythic'],
  },
  {
    id: 'pinpoint_targeting_mythic',
    name: 'Pinpoint Targeting (Mythic)',
    description:
      'You can target your foes precisely even while on the move. Benefit: You can use Pinpoint Targeting even if you move this round, but only if the distance you move is equal to or less than 5 feet per tier.',
    shortDescription: 'Use Pinpoint Targeting while moving up to 5 feet per tier.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'pinpoint_targeting' }],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'targeting', 'movement', 'mythic'],
  },
  {
    id: 'point_blank_shot_mythic',
    name: 'Point-Blank Shot (Mythic)',
    description:
      'At close range, your shots are almost supernaturally accurate. Benefit: The bonus on attack rolls and damage rolls from Point-Blank Shot increases to +2. As a swift action, you can expend one use of mythic power to gain an additional bonus on attack and damage rolls equal to half your tier until the end of your turn.',
    shortDescription:
      'Point-Blank Shot bonus increases to +2; spend mythic power for additional bonus equal to half tier.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'point_blank_shot' }],
    effects: [
      {
        type: 'bonus',
        target: 'attack.ranged',
        value: 2,
        bonusType: BonusType.UNTYPED,
        condition: { type: 'custom', description: 'Within 30 feet', params: {} },
        source: 'Point-Blank Shot (Mythic)',
      },
      {
        type: 'bonus',
        target: 'damage.ranged',
        value: 2,
        bonusType: BonusType.UNTYPED,
        condition: { type: 'custom', description: 'Within 30 feet', params: {} },
        source: 'Point-Blank Shot (Mythic)',
      },
    ],
    activationMode: 'passive',
    tags: ['ranged', 'attack', 'damage', 'mythic'],
  },
  {
    id: 'potent_surge_mythic',
    name: 'Potent Surge (Mythic)',
    description:
      'Your mythic surge is particularly powerful. Benefit: Whenever you use your surge ability, add 1 to your surge result.',
    shortDescription: 'Add 1 to your surge result whenever you surge.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'special.surge_result',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Potent Surge (Mythic)',
      },
    ],
    activationMode: 'passive',
    tags: ['surge', 'mythic power', 'mythic'],
  },
  {
    id: 'power_attack_mythic',
    name: 'Power Attack (Mythic)',
    description:
      'Your attacks are devastatingly powerful. Benefit: When you use Power Attack, you gain a +3 bonus on melee damage rolls instead of +2. When your base attack bonus reaches +4, and every 4 points of base attack bonus thereafter, the bonus on melee damage rolls increases by +3 instead of +2. You can expend one use of mythic power when you activate Power Attack to ignore the penalties on melee attack rolls and combat maneuver checks for 1 minute.',
    shortDescription:
      'Power Attack grants +3 damage instead of +2; spend mythic power to negate attack penalties.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'power_attack' }],
    effects: [],
    activationMode: 'passive',
    tags: ['melee', 'damage', 'attack', 'mythic'],
  },
  {
    id: 'powerful_shape_mythic',
    name: 'Powerful Shape (Mythic)',
    description:
      'Your wild shapes are immensely powerful. Benefit: When you use wild shape, you can apply the giant simple template from the Pathfinder RPG Bestiary to the animal form you select. This replaces the normal benefit of Powerful Shape. As a free action, you can expend one use of mythic power to combine the effects of mythic and non-mythic Powerful Shape for a number of rounds equal to your tier.',
    shortDescription:
      'Apply giant simple template to wild shape forms; spend mythic power to combine both Powerful Shape effects.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'powerful_shape' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['druid', 'wild shape', 'size', 'mythic'],
  },
  {
    id: 'prophetic_visionary_mythic',
    name: 'Prophetic Visionary (Mythic)',
    description:
      'Your prophetic visions are incredibly accurate. Benefit: You can use the augury ability granted by Prophetic Visionary at will, but each use still requires 10 minutes in a trance. Your chance of a successful augury increases by 1% per mythic tier you possess. A successful augury also grants you the benefits of the guidance spell, but with a bonus equal to your tier that functions as an insight bonus rather than a competence bonus.',
    shortDescription:
      'Use augury at will; successful augury grants insight bonus equal to tier from guidance.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'prophetic_visionary' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['divination', 'augury', 'mythic'],
  },
  {
    id: 'quick_draw_mythic',
    name: 'Quick Draw (Mythic)',
    description:
      'You can draw any item with supernatural speed. Benefit: You can use Quick Draw to draw any item, not just weapons, as long as the item is stored or concealed on your person. As a move action, you can expend one use of mythic power to retrieve up to two hidden items, provided you have two free hands.',
    shortDescription:
      'Quick Draw applies to any item; spend mythic power to retrieve two hidden items as a move action.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'quick_draw' }],
    effects: [],
    activationMode: 'passive',
    tags: ['drawing', 'items', 'speed', 'mythic'],
  },
  {
    id: 'racial_heritage_mythic',
    name: 'Racial Heritage (Mythic)',
    description:
      "Your racial heritage is even more pronounced than usual. Benefit: You gain a single racial trait of your choice from the race you picked when you took the non-mythic Racial Heritage feat. That racial trait cannot modify your size or ability scores. You also gain the racial language of the race (if any) if you don't already know it.",
    shortDescription: 'Gain a racial trait and language from the race chosen for Racial Heritage.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'racial_heritage' }],
    effects: [],
    activationMode: 'passive',
    tags: ['race', 'racial traits', 'language', 'mythic'],
  },
  {
    id: 'rapid_reload_mythic',
    name: 'Rapid Reload (Mythic)',
    description:
      'You reload any crossbow or firearm with blinding speed. Benefit: You gain the benefits of Rapid Reload with all crossbows and firearms, not just the one you originally chose when you gained that feat. As a swift action, you can expend one use of mythic power to gain the ability to reload crossbows and firearms without provoking attacks of opportunity for 1 minute.',
    shortDescription:
      'Rapid Reload applies to all crossbows and firearms; spend mythic power to reload without provoking AoOs.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'rapid_reload' }],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'crossbow', 'firearm', 'reload', 'mythic'],
  },
  {
    id: 'rapid_shot_mythic',
    name: 'Rapid Shot (Mythic)',
    description:
      "You fire a hail of arrows or bolts with supernatural speed. Benefit: When using Rapid Shot, you can either ignore the feat's -2 penalty on attack rolls or make two additional attacks instead of one.",
    shortDescription: 'Ignore Rapid Shot penalty or make two additional attacks instead of one.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'rapid_shot' }],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'attack', 'speed', 'mythic'],
  },
  {
    id: 'rhetorical_flourish_mythic',
    name: 'Rhetorical Flourish (Mythic)',
    description:
      'Your verbal manipulations are astonishingly effective. Benefit: When you successfully use Rhetorical Flourish against a non-mythic creature, the bonus you gain on your subsequent Diplomacy check increases by your tier. Against mythic creatures, the bonus increases by half your tier. You can expend one use of mythic power to reroll a Bluff check, taking the new result even if it is lower.',
    shortDescription:
      'Rhetorical Flourish bonus increases by tier vs. non-mythic (half tier vs. mythic); reroll Bluff with mythic power.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'rhetorical_flourish' }],
    effects: [],
    activationMode: 'passive',
    tags: ['social', 'bluff', 'diplomacy', 'mythic'],
  },
  {
    id: 'ride_by_attack_mythic',
    name: 'Ride-By Attack (Mythic)',
    description:
      'You can cut down multiple foes in a single mounted charge. Benefit: After hitting an opponent with a Ride-By Attack, you can continue to make attacks against additional targets. You gain one additional attack for every 3 mythic tiers you possess, and these additional attacks cannot exceed your normal full attack. Each attack after the first takes the appropriate multiple attack penalty, and you must move at least 10 feet between each attack.',
    shortDescription: 'Make additional attacks during Ride-By Attack; one extra per 3 tiers.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'ride_by_attack' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mounted', 'charge', 'attack', 'mythic'],
  },
  {
    id: 'run_mythic',
    name: 'Run (Mythic)',
    description:
      'You run with preternatural speed and endurance. Benefit: When running, you move seven times your normal speed if wearing medium, light, or no armor and carrying no more than a medium load, or six times your speed if wearing heavy armor or carrying a heavy load. When jumping after a running start, you gain an additional bonus on your Acrobatics check equal to your tier + 4.',
    shortDescription:
      'Run at 7x speed (6x in heavy armor); gain tier+4 bonus on running jump; run longer before checks.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'run' }],
    effects: [],
    activationMode: 'passive',
    tags: ['movement', 'speed', 'endurance', 'mythic'],
  },
  {
    id: 'saving_shield_mythic',
    name: 'Saving Shield (Mythic)',
    description:
      'Your shield protects allies with remarkable effectiveness. Benefit: The shield bonus you grant an ally with Saving Shield increases to +3. If an attack against an adjacent ally that you negate with Saving Shield would have hit that ally, you can make an immediate attack of opportunity against the attacker if they are within your melee reach.',
    shortDescription:
      'Saving Shield grants +3 shield bonus to ally; negate an attack to make AoO against attacker.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'saving_shield' }],
    effects: [
      {
        type: 'bonus',
        target: 'special.ac_ally_shield',
        value: 3,
        bonusType: BonusType.SHIELD,
        condition: {
          type: 'custom',
          description: 'When using Saving Shield on an adjacent ally',
          params: {},
        },
        source: 'Saving Shield (Mythic)',
      },
    ],
    activationMode: 'passive',
    tags: ['shield', 'defense', 'ally', 'mythic'],
  },
  {
    id: 'scorpion_style_mythic',
    name: 'Scorpion Style (Mythic)',
    description:
      "Your Scorpion Style can slow a foe to a crawl. Benefit: Add your mythic tier to the number of rounds the target's base land speed is reduced when you use Scorpion Style. You can expend one use of mythic power when you hit the target with Scorpion Style to cause the target to be affected by the slow spell unless it succeeds at a Fortitude saving throw.",
    shortDescription:
      'Add tier to Scorpion Style duration; spend mythic power to slow target on failed Fortitude save.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat', 'style'],
    prerequisites: [{ type: 'feat', featId: 'scorpion_style' }],
    effects: [],
    activationMode: 'passive',
    tags: ['unarmed', 'slow', 'monk', 'mythic'],
  },
  {
    id: 'selective_channeling_mythic',
    name: 'Selective Channeling (Mythic)',
    description:
      'You selectively channel energy with incredible precision. Benefit: When you channel energy, the damage you heal or deal increases by a number of points equal to twice the number of targets you excluded from your channeled energy. You can expend one use of mythic power to increase the number of targets you exclude from your channeled energy by half your tier.',
    shortDescription:
      'Channeling damage increases by 2x the number of excluded targets; spend mythic power to exclude more targets.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'selective_channeling' }],
    effects: [],
    activationMode: 'passive',
    tags: ['channel', 'cleric', 'healing', 'mythic'],
  },
  {
    id: 'self_sufficient_mythic',
    name: 'Self-Sufficient (Mythic)',
    description:
      'Your ability to tend to your own needs is supernaturally honed. Benefit: The bonus on Heal and Survival checks from Self-Sufficient increases by 2. You can expend one use of mythic power to treat a Heal or Survival check as if you rolled a 20. You must decide to use this ability before making the roll.',
    shortDescription:
      'Self-Sufficient bonus increases by 2; spend mythic power to treat a Heal or Survival check as a 20.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'self_sufficient' }],
    effects: [
      {
        type: 'bonus',
        target: 'skill.heal',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Self-Sufficient (Mythic)',
      },
      {
        type: 'bonus',
        target: 'skill.survival',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Self-Sufficient (Mythic)',
      },
    ],
    activationMode: 'passive',
    tags: ['heal', 'survival', 'self-reliance', 'mythic'],
  },
  {
    id: 'shatter_defenses_mythic',
    name: 'Shatter Defenses (Mythic)',
    description:
      'Your strikes leave opponents completely vulnerable. Benefit: An opponent you affect with Shatter Defenses is flat-footed to all attacks, not just yours.',
    shortDescription:
      'Shatter Defenses makes opponents flat-footed to all attacks, not just yours.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'shatter_defenses' }],
    effects: [],
    activationMode: 'passive',
    tags: ['melee', 'flat-footed', 'debuff', 'mythic'],
  },
  {
    id: 'shield_focus_mythic',
    name: 'Shield Focus (Mythic)',
    description:
      "Your shield is your fortress. Benefit: You add your shield bonus and your shield's enhancement bonus to your touch AC. As an immediate action, you can expend one use of mythic power to add your shield bonus and your shield's enhancement bonus to a Fortitude or Reflex saving throw just before you roll it.",
    shortDescription:
      'Add shield bonus to touch AC; spend mythic power to add shield bonus to a Fortitude or Reflex save.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'shield_focus' }],
    effects: [],
    activationMode: 'passive',
    tags: ['shield', 'defense', 'touch AC', 'mythic'],
  },
  {
    id: 'shield_slam_mythic',
    name: 'Shield Slam (Mythic)',
    description:
      'Your shield bashes send foes crashing into obstacles. Benefit: When you bull rush an opponent into a wall or other surface using Shield Slam, the opponent takes 1d6 points of damage per 2 tiers you possess if it is knocked prone by striking a surface. As an immediate action, you can expend one use of mythic power to add your tier to a combat maneuver check to bull rush using Shield Slam.',
    shortDescription:
      'Bull rush into wall deals 1d6 per 2 tiers; spend mythic power to add tier to bull rush check.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'shield_slam' }],
    effects: [],
    activationMode: 'passive',
    tags: ['shield', 'bull rush', 'combat maneuver', 'mythic'],
  },
  {
    id: 'shot_on_the_run_mythic',
    name: 'Shot on the Run (Mythic)',
    description:
      'You can fire multiple shots while on the run. Benefit: When using Shot on the Run, you can make two ranged attacks at your highest base attack bonus at any point during your movement, instead of just one.',
    shortDescription: 'Make two ranged attacks during Shot on the Run movement instead of one.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'shot_on_the_run' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'movement', 'attack', 'mythic'],
  },
  {
    id: 'skill_focus_mythic',
    name: 'Skill Focus (Mythic)',
    description:
      'Your mastery of a skill is absolute. Benefit: You can always take 10 or 20 on checks with the skill you chose for Skill Focus, even when you are rushed or threatened. Special: You can gain this feat multiple times. Each time you take it, it applies to a different non-mythic Skill Focus feat.',
    shortDescription:
      'Always take 10 or 20 on your Skill Focus skill, even when rushed or threatened.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'skill_focus' }],
    effects: [],
    activationMode: 'passive',
    tags: ['skills', 'take 10', 'take 20', 'mythic'],
  },
  {
    id: 'snatch_arrows_mythic',
    name: 'Snatch Arrows (Mythic)',
    description:
      "You can use caught projectiles as weapons with blinding speed. Benefit: When you catch a thrown weapon that can also be used as a melee weapon, you can make a melee attack with it as an immediate action against a foe within that weapon's melee reach. You can expend one use of mythic power to make this attack without spending an immediate action.",
    shortDescription:
      'Make immediate melee attack with caught thrown weapons; spend mythic power to do so without action.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'snatch_arrows' }],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'defense', 'counter-attack', 'mythic'],
  },
  {
    id: 'sociable_mythic',
    name: 'Sociable (Mythic)',
    description:
      'Your social grace is supernatural. Benefit: You provide the +2 bonus on Diplomacy checks from the Sociable feat to your allies automatically, without spending a move action. As a move action, you can provide a +4 bonus on Diplomacy checks to your allies for a number of rounds equal to your mythic tier.',
    shortDescription:
      'Sociable bonus applies automatically; use move action to grant +4 bonus for rounds equal to tier.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'sociable' }],
    effects: [],
    activationMode: 'passive',
    tags: ['social', 'diplomacy', 'ally', 'mythic'],
  },
  {
    id: 'spell_focus_mythic',
    name: 'Spell Focus (Mythic)',
    description:
      "Your focused magic is supernaturally potent. Benefit: Choose a school of magic for which you have Spell Focus. The bonus to spell save DCs from Spell Focus and Greater Spell Focus for that school each increase by 1. You can expend one use of mythic power when casting a spell from the chosen school to force any of the spell's targets to roll their saving throws twice, taking the lower result. Special: You can gain this feat multiple times, each time applying to a different school.",
    shortDescription:
      'Spell Focus bonus increases by 1; spend mythic power to force targets to roll saves twice (take lower).',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'spell_focus' }],
    effects: [],
    activationMode: 'passive',
    tags: ['spells', 'save DC', 'school', 'mythic'],
  },
  {
    id: 'spell_mastery_mythic',
    name: 'Spell Mastery (Mythic)',
    description:
      'You can prepare your mastered spells with unparalleled speed. Benefit: You can prepare the spells you have selected with Spell Mastery as a full-round action. By expending one use of mythic power as a full-round action, you can prepare all of your mastered spells at the same time.',
    shortDescription:
      'Prepare Spell Mastery spells as full-round action; spend mythic power to prepare all at once.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'spell_mastery' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['spells', 'preparation', 'wizard', 'mythic'],
  },
  {
    id: 'spell_penetration_mythic',
    name: 'Spell Penetration (Mythic)',
    description:
      'Your spells pierce through magical defenses. Benefit: Add half your tier to caster level checks to overcome spell resistance. If you have Greater Spell Penetration, add your full tier instead.',
    shortDescription:
      'Add half tier to caster level checks vs. spell resistance; full tier if you have Greater Spell Penetration.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'spell_penetration' }],
    effects: [],
    activationMode: 'passive',
    tags: ['spells', 'spell resistance', 'caster level', 'mythic'],
  },
  {
    id: 'spellbreaker_mythic',
    name: 'Spellbreaker (Mythic)',
    description:
      'Your ability to disrupt spellcasting is nearly absolute. Benefit: Non-mythic creatures you threaten provoke attacks of opportunity when they use a spell or spell-like ability, even if they cast defensively or cast a quickened spell. You can expend one use of mythic power to make a ranged attack of opportunity against a non-mythic creature within 30 feet that uses a spell or spell-like ability.',
    shortDescription:
      'Non-mythic casters provoke AoOs even when defensive; spend mythic power for ranged AoOs against casters.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'spellbreaker' }],
    effects: [],
    activationMode: 'passive',
    tags: ['spellcasting', 'disruption', 'attack of opportunity', 'mythic'],
  },
  {
    id: 'spirited_charge_mythic',
    name: 'Spirited Charge (Mythic)',
    description:
      'Your mounted charges are utterly devastating. Benefit: When you hit an opponent with a mounted charge, the target must succeed at a Fortitude save (DC 10 + 1/2 your character level + your Str modifier) or be staggered for a number of rounds equal to your tier. If you used a lance, the DC of this save increases by 2. As a free action before making your charge attack, you can expend one use of mythic power to daze the target on a failed save instead of staggering it.',
    shortDescription:
      'Mounted charge staggers on failed Fortitude save for rounds equal to tier; spend mythic power to daze instead.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'spirited_charge' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mounted', 'charge', 'stagger', 'mythic'],
  },
  {
    id: 'spontaneous_metafocus_mythic',
    name: 'Spontaneous Metafocus (Mythic)',
    description:
      'You can freely choose which spell benefits from your metamagic mastery. Benefit: You can change which spell your Spontaneous Metafocus feat applies to each morning when you restore your expended spell slots. The spell it applies to can be of any level.',
    shortDescription:
      'Change Spontaneous Metafocus target spell each morning when restoring spell slots.',
    source: 'Mythic Adventures',
    types: ['mythic', 'metamagic'],
    prerequisites: [{ type: 'feat', featId: 'spontaneous_metafocus' }],
    effects: [],
    activationMode: 'passive',
    tags: ['metamagic', 'spontaneous', 'spells', 'mythic'],
  },
  {
    id: 'spring_attack_mythic',
    name: 'Spring Attack (Mythic)',
    description:
      'Your Spring Attacks are devastatingly fluid. Benefit: When using Spring Attack, you no longer need to move at least 10 feet before making your attack. You can expend one use of mythic power at the start of a Spring Attack to have your movement during that attack not provoke attacks of opportunity.',
    shortDescription:
      'No minimum movement required for Spring Attack; spend mythic power to avoid AoOs during movement.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'spring_attack' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['movement', 'melee', 'attack', 'mythic'],
  },
  {
    id: 'stealthy_mythic',
    name: 'Stealthy (Mythic)',
    description:
      'Your ability to move without detection is supernaturally honed. Benefit: The bonus on Escape Artist and Stealth checks from Stealthy increases by 2. You can expend one use of mythic power to treat an Escape Artist or Stealth check as if you rolled a 20. You must decide to use this ability before making the roll.',
    shortDescription:
      'Stealthy bonus increases by 2; spend mythic power to treat Escape Artist or Stealth check as a 20.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'stealthy' }],
    effects: [
      {
        type: 'bonus',
        target: 'skill.stealth',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Stealthy (Mythic)',
      },
      {
        type: 'bonus',
        target: 'skill.escape_artist',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Stealthy (Mythic)',
      },
    ],
    activationMode: 'passive',
    tags: ['stealth', 'escape artist', 'mythic'],
  },
  {
    id: 'strike_back_mythic',
    name: 'Strike Back (Mythic)',
    description:
      'You can reach out and strike foes no matter where they stand. Benefit: When you make a melee attack as a readied action against a foe outside your melee reach, you can take a 5-foot step toward that foe. If you expend one use of mythic power, you can move your speed toward that foe instead.',
    shortDescription:
      'Take 5-foot step when making readied attack outside reach; spend mythic power to move full speed instead.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'strike_back' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['reach', 'readied action', 'movement', 'mythic'],
  },
  {
    id: 'strong_comeback_mythic',
    name: 'Strong Comeback (Mythic)',
    description:
      'You have an incredible ability to bounce back from failure. Benefit: Whenever you are allowed to reroll an ability check, a skill check, or a saving throw, roll two dice and take the higher result, then add the bonus from Strong Comeback.',
    shortDescription:
      'When rerolling, roll two dice and take the higher result before adding Strong Comeback bonus.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'strong_comeback' }],
    effects: [],
    activationMode: 'passive',
    tags: ['reroll', 'saving throw', 'skill check', 'mythic'],
  },
  {
    id: 'stunning_fist_mythic',
    name: 'Stunning Fist (Mythic)',
    description:
      'Your Stunning Fist attack is almost impossible to resist and can be used multiple times in a round. Benefit: The DC of your Stunning Fist increases by half your tier. You can use Stunning Fist multiple times per round, though you must still expend a daily use each time. As a free action, you can expend one use of mythic power to use Stunning Fist without expending one of your daily uses.',
    shortDescription:
      'Stunning Fist DC increases by half tier; usable multiple times per round; spend mythic power to use without daily use.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'stunning_fist' }],
    effects: [],
    activationMode: 'passive',
    tags: ['unarmed', 'stun', 'monk', 'mythic'],
  },
  {
    id: 'throw_anything_mythic',
    name: 'Throw Anything (Mythic)',
    description:
      'You can throw any object with tremendous force and accuracy. Benefit: You add half your tier to the range increment of any thrown weapon or improvised thrown weapon. When you throw an improvised weapon, you use your full base attack bonus instead of taking a non-proficiency penalty. You can expend one use of mythic power when you throw a weapon to deal damage as if the thrown weapon were one size category larger.',
    shortDescription:
      'Add half tier to thrown weapon range; no penalty for improvised thrown weapons; spend mythic power to increase damage.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'throw_anything' }],
    effects: [
      {
        type: 'bonus',
        target: 'attack.thrown',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Throw Anything (Mythic)',
      },
      {
        type: 'bonus',
        target: 'damage.thrown',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Throw Anything (Mythic)',
      },
    ],
    activationMode: 'passive',
    tags: ['thrown', 'improvised', 'splash', 'mythic'],
  },
  {
    id: 'titan_strike_mythic',
    name: 'Titan Strike (Mythic)',
    description:
      'Your unarmed strikes hit with the force of a giant. Benefit: Your unarmed strikes deal damage as if you were one size category larger. You also gain a +1 bonus for each size category your target is larger than you on combat maneuver checks to bull rush, drag, grapple, overrun, reposition, sunder, and trip that target, as well as on the DC of your Stunning Fist attempts against that target.',
    shortDescription:
      'Unarmed strikes deal damage as one size larger; +1 per size category target exceeds you on CMBs and Stunning Fist DC.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'improved_unarmed_strike_mythic' }],
    effects: [],
    activationMode: 'passive',
    tags: ['unarmed', 'size', 'combat maneuver', 'mythic'],
  },
  {
    id: 'toughness_mythic',
    name: 'Toughness (Mythic)',
    description:
      'Your body is supernaturally resilient. Benefit: You gain twice as many hit points from Toughness as normal. When your hit points drop below 0, you gain DR 10/epic. This DR stacks with any other DR/epic you might possess.',
    shortDescription: 'Double hit points from Toughness; gain DR 10/epic when below 0 hit points.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'toughness' }],
    effects: [],
    activationMode: 'passive',
    tags: ['hit points', 'damage reduction', 'durability', 'mythic'],
  },
  {
    id: 'trample_mythic',
    name: 'Trample (Mythic)',
    description:
      "Your mount's trample is devastatingly powerful. Benefit: When you knock down an opponent with an overrun combat maneuver while mounted, your mount can make two hoof attacks against that opponent instead of one. You can expend one use of mythic power to automatically confirm a critical hit scored with one of these hoof attacks.",
    shortDescription:
      'Mount makes two hoof attacks on overrun knockdown; spend mythic power to auto-confirm a critical hit.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'trample' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mounted', 'overrun', 'trample', 'mythic'],
  },
  {
    id: 'tripping_staff_mythic',
    name: 'Tripping Staff (Mythic)',
    description:
      'Your quarterstaff trips foes with supernatural ease. Benefit: You gain a bonus to your CMD against trip maneuvers and on trip combat maneuver checks made with a quarterstaff equal to half your mythic tier. When an opponent you threaten fails a trip combat maneuver against you while you are wielding a quarterstaff, that failure provokes an attack of opportunity from you, which you must make with your quarterstaff.',
    shortDescription:
      'Bonus equal to half tier on trip CMB and CMD with quarterstaff; enemy failed trips provoke AoO.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'tripping_staff' }],
    effects: [],
    activationMode: 'passive',
    tags: ['staff', 'trip', 'combat maneuver', 'mythic'],
  },
  {
    id: 'turn_undead_mythic',
    name: 'Turn Undead (Mythic)',
    description:
      'Your ability to turn undead is terrifyingly powerful. Benefit: The range of your Turn Undead increases by 10 feet per tier, and non-mythic undead take a penalty on their saving throws equal to your tier. You can expend one use of mythic power when you activate Turn Undead to destroy affected undead instead of causing them to flee.',
    shortDescription:
      'Turn Undead range increases 10 ft per tier; non-mythic undead get penalty on saves; spend mythic power to destroy undead.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'turn_undead' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['undead', 'channel', 'cleric', 'mythic'],
  },
  {
    id: 'two_fisted_drinker_mythic',
    name: 'Two-Fisted Drinker (Mythic)',
    description:
      'You can draw and quaff two drinks at once. Benefit: You can draw two potions or other beverages from accessible containers as a move action, and you can drink two potions or other beverages as a standard action. You must have both hands free to use this feat.',
    shortDescription: 'Draw two potions as a move action; drink two potions as a standard action.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'quick_draw' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['potions', 'drinking', 'mythic'],
  },
  {
    id: 'two_weapon_defense_mythic',
    name: 'Two-Weapon Defense (Mythic)',
    description:
      'Your twin weapons form an impenetrable shield. Benefit: When using Two-Weapon Defense, you apply the highest enhancement bonus from your two weapons to the shield bonus granted by that feat.',
    shortDescription:
      'Apply the highest weapon enhancement bonus to the Two-Weapon Defense shield bonus.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'two_weapon_defense' }],
    effects: [],
    activationMode: 'passive',
    tags: ['two-weapon', 'defense', 'shield bonus', 'mythic'],
  },
  {
    id: 'two_weapon_fighting_mythic',
    name: 'Two-Weapon Fighting (Mythic)',
    description:
      'Your two-weapon fighting skills are perfectly balanced. Benefit: As an immediate action, you can expend one use of mythic power when you surge to negate the penalties on attack rolls for two-weapon fighting for a number of rounds equal to your tier.',
    shortDescription:
      'Spend mythic power to negate two-weapon fighting attack penalties for rounds equal to tier.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'two_weapon_fighting' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['two-weapon', 'attack', 'penalty', 'mythic'],
  },
  {
    id: 'two_weapon_rend_mythic',
    name: 'Two-Weapon Rend (Mythic)',
    description:
      'Your dual weapon rending tears massive wounds in your enemies. Benefit: The damage of your Two-Weapon Rend increases to 2d8 points plus twice your Strength modifier. You can expend one use of mythic power to gain a bonus on this damage equal to twice your tier.',
    shortDescription:
      'Two-Weapon Rend damage increases to 2d8 + 2x Str; spend mythic power for bonus equal to twice tier.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'two_weapon_rend' }],
    effects: [],
    activationMode: 'passive',
    tags: ['two-weapon', 'damage', 'rend', 'mythic'],
  },
  {
    id: 'undead_master_mythic',
    name: 'Undead Master (Mythic)',
    description:
      'You command the undead with incredible power. Benefit: When you cast animate dead or use the Command Undead feat, add your tier to your caster level when determining the number of Hit Dice of undead you animate. This stacks with the increased caster level of Undead Master. When you cast command undead, the duration of the spell is tripled rather than doubled.',
    shortDescription:
      'Add tier to caster level when animating undead; triple (not double) duration of command undead.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'undead_master' }],
    effects: [],
    activationMode: 'passive',
    tags: ['undead', 'animate dead', 'necromancy', 'mythic'],
  },
  {
    id: 'unseat_mythic',
    name: 'Unseat (Mythic)',
    description:
      'You hurl your opponents from their mounts with devastating force. Benefit: When you successfully bull rush an opponent off his mount with the Unseat feat, your opponent takes 1d6 points of falling damage per 2 tiers you possess.',
    shortDescription:
      'Unseating a rider deals 1d6 falling damage per 2 tiers; reducible by Acrobatics or similar.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'unseat' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mounted', 'bull rush', 'falling damage', 'mythic'],
  },
  {
    id: 'valiant_vault_mythic',
    name: 'Valiant Vault (Mythic)',
    description:
      'Your mount vaults over obstacles and enemies with supernatural agility. Benefit: Your mount is always treated as having a running start when jumping. You can expend one use of mythic power to grant your mount a +10 bonus on Acrobatics checks, or a +20 bonus on Acrobatics checks to jump. During a mounted charge, you can guide your mount to leap over creatures in your path.',
    shortDescription:
      'Mount always has running start for jumps; spend mythic power for +10/+20 jump bonus; vault over creatures when charging.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [
      { type: 'feat', featId: 'mounted_combat' },
      { type: 'feat', featId: 'ride_by_attack' },
      { type: 'skill', skillId: 'ride', ranks: 5 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mounted', 'acrobatics', 'charge', 'mythic'],
  },
  {
    id: 'vital_strike_mythic',
    name: 'Vital Strike (Mythic)',
    description:
      'Your attacks deal tremendous damage. Benefit: When you use Vital Strike, Improved Vital Strike, or Greater Vital Strike, multiply the Strength bonus, magic bonus, and other bonuses that would normally be multiplied on a critical hit by the number of weapon damage dice you roll for that feat.',
    shortDescription:
      'Vital Strike multiplies Strength, magic, and other normally-multiplied bonuses by the number of damage dice rolled.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'vital_strike' }],
    effects: [],
    activationMode: 'passive',
    tags: ['damage', 'vital strike', 'multiplier', 'mythic'],
  },
  {
    id: 'voice_of_the_sibyl_mythic',
    name: 'Voice of the Sibyl (Mythic)',
    description:
      'Your voice carries supernatural power. Benefit: You gain a +1 bonus on all Bluff, Diplomacy, and Perform (oratory) skill checks for every 3 tiers you possess. This bonus stacks with the bonus from Voice of the Sibyl. If you have 10 or more ranks in at least two of these skills, you gain a +2 bonus to the DC of any language-dependent spell you cast.',
    shortDescription:
      '+1 to Bluff, Diplomacy, and Perform (oratory) per 3 tiers; +2 DC to language-dependent spells with 10+ ranks in two skills.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'voice_of_the_sibyl' }],
    effects: [],
    activationMode: 'passive',
    tags: ['social', 'bluff', 'diplomacy', 'language', 'mythic'],
  },
  {
    id: 'warrior_priest_mythic',
    name: 'Warrior Priest (Mythic)',
    description:
      'Your faith makes you a formidable combatant. Benefit: You gain a bonus equal to half your tier on initiative checks and on concentration checks to cast a spell or use a spell-like ability when casting defensively or while grappled. These bonuses stack with the bonuses from Warrior Priest.',
    shortDescription:
      'Add half tier to initiative and concentration checks for defensive casting; stacks with Warrior Priest.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'warrior_priest' }],
    effects: [],
    activationMode: 'passive',
    tags: ['cleric', 'concentration', 'initiative', 'mythic'],
  },
  {
    id: 'weapon_finesse_mythic',
    name: 'Weapon Finesse (Mythic)',
    description:
      "Your precision with light weapons is unparalleled. Benefit: When using Weapon Finesse, you can use your Dexterity modifier instead of your Strength modifier on damage rolls. If you are wielding a shield, that shield's armor check penalty no longer applies to your attack rolls or damage rolls.",
    shortDescription:
      'Use Dexterity instead of Strength on damage rolls; shield armor check penalty no longer applies to attacks.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'weapon_finesse' }],
    effects: [],
    activationMode: 'passive',
    tags: ['finesse', 'dexterity', 'damage', 'mythic'],
  },
  {
    id: 'weapon_focus_mythic',
    name: 'Weapon Focus (Mythic)',
    description:
      'Your focus with your chosen weapon is supernaturally precise. Benefit: The bonuses from Weapon Focus and Greater Weapon Focus with your chosen weapon are doubled. As a swift action, you can expend one use of mythic power to gain an additional bonus on attack rolls with your chosen weapon equal to half your tier until the end of your turn. Special: You can gain this feat multiple times.',
    shortDescription:
      'Weapon Focus and Greater Weapon Focus bonuses are doubled; spend mythic power for half-tier bonus on attacks.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'weapon_focus' }],
    effects: [],
    activationMode: 'passive',
    tags: ['weapon', 'attack', 'focus', 'mythic'],
  },
  {
    id: 'weapon_specialization_mythic',
    name: 'Weapon Specialization (Mythic)',
    description:
      'Your weapon specialization is supernaturally effective. Benefit: When using your chosen weapon, you gain a bonus equal to half your tier on damage rolls. This stacks with the bonus from Weapon Specialization and Greater Weapon Specialization. Special: You can gain this feat multiple times.',
    shortDescription:
      'Gain bonus equal to half tier on damage rolls with chosen weapon; stacks with Weapon Specialization bonuses.',
    source: 'Mythic Adventures',
    types: ['mythic', 'combat'],
    prerequisites: [{ type: 'feat', featId: 'weapon_specialization' }],
    effects: [],
    activationMode: 'passive',
    tags: ['weapon', 'damage', 'specialization', 'mythic'],
  },
  {
    id: 'witch_knife_mythic',
    name: 'Witch Knife (Mythic)',
    description:
      'Your witch knife is the focus of all your magical power. Benefit: You can use your witch knife as an additional focus component for all your witch spells, not just your patron spells, adding 1 to their DC. This bonus stacks with the bonus to patron spells granted by Witch Knife, granting your patron spells a total +2 bonus to their DC. Additionally, the hand holding the witch knife is still considered free for the purpose of casting spells and delivering touch attacks.',
    shortDescription:
      'Witch knife adds +1 DC to all witch spells (+2 to patron spells); hand is still considered free.',
    source: 'Mythic Adventures',
    types: ['mythic'],
    prerequisites: [{ type: 'feat', featId: 'witch_knife' }],
    effects: [],
    activationMode: 'passive',
    tags: ['witch', 'patron', 'spell DC', 'mythic'],
  },
];
