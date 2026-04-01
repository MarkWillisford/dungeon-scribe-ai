import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const VILLAIN_CODEX_FEATS: FeatDefinition[] = [
  {
    id: 'balor_whip',
    name: 'Balor Whip',
    types: ['combat'],
    source: 'Villain Codex',
    description:
      'When performing a drag maneuver with a whip, you may choose not to move with your target. The target can only be dragged to a position adjacent to you, even if your check result would allow greater distance. You gain a +2 bonus on drag combat maneuver checks when using a whip. This bonus does not stack with Improved Drag bonuses. Balor Whip counts as Improved Drag for the purpose of qualifying for Quick Drag.',
    shortDescription: 'Drag foes to you with a whip; +2 on drag maneuver checks.',
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus_whip' },
      { type: 'feat', featId: 'whip_mastery' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb_drag',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'When using a whip to drag',
        },
        source: 'Balor Whip',
      },
    ],
    activationMode: 'conditional',
    tags: ['whip', 'drag', 'combat_maneuver'],
  },
  {
    id: 'coordinated_capture',
    name: 'Coordinated Capture',
    types: ['combat', 'teamwork'],
    source: 'Villain Codex',
    description:
      'When you and one or more allies possessing this feat threaten the same enemy, that enemy incurs a penalty on Acrobatics checks and concentration checks to avoid triggering attacks of opportunity equal to the number of creatures with this feat threatening the target (maximum 5).',
    shortDescription:
      "Allies with this feat impose stacking penalty on foe's Acrobatics and concentration.",
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'acrobatics_aoo',
        value: -1,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Per ally with Coordinated Capture also threatening the target (max 5 total)',
        },
        source: 'Coordinated Capture',
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'grapple', 'control'],
  },
  // covering_fire — different from PSF version; VC version requires firearms and imposes attack penalties
  {
    id: 'covering_fire_vc',
    name: 'Covering Fire',
    types: ['combat', 'teamwork'],
    source: 'Villain Codex',
    description:
      'When you hit a foe with a firearm for which you have Weapon Focus, that creature takes a -2 penalty on attack rolls for 1 round against any other ally who also has this feat (this becomes a -4 penalty on attacks of opportunity). This penalty does not stack with itself. A penalty imposed by one ally with this feat does not apply to attacks against you, allowing mutual covering between allies.',
    shortDescription:
      'Hit a foe with your Weapon Focus firearm to impose -2 attack penalty against allies.',
    prerequisites: [
      { type: 'proficiency', proficiency: 'Exotic Weapon Proficiency (firearms)' },
      { type: 'special', description: 'Weapon Focus in at least one firearm' },
    ],
    effects: [
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack_roll',
        value: -2,
        condition: {
          type: 'custom',
          params: {},
          description:
            "On foe's attacks against allies with Covering Fire, after hitting with Weapon Focus firearm; -4 on attacks of opportunity",
        },
        source: 'Covering Fire',
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'firearms', 'gunslinger'],
  },
  {
    id: 'craft_shoddy_item',
    name: 'Craft Shoddy Item',
    types: ['item_creation'],
    source: 'Villain Codex',
    description:
      "You can craft deliberately flawed items, paying only 1/5 of the item's price for raw materials (instead of the standard 1/3). The DC and crafting time remain unchanged. Shoddy items have hardness reduced by 2 and hit points halved. Weapons take damage equal to their damage output each use; armor takes damage matching the wearer's HP loss from successful attacks. Non-weapon/armor items have a 10% daily chance of gaining the broken condition. Detection requires DC 15 Appraise or Craft check with intentional inspection. Items cannot be masterwork, special materials, or single-use.",
    shortDescription: 'Craft intentionally flawed items at 1/5 material cost, concealing defects.',
    prerequisites: [{ type: 'skill', skillId: 'craft', ranks: 1 }],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'crafting_cost',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description: 'Material cost is 1/5 of item price when crafting shoddy items',
        },
        source: 'Craft Shoddy Item',
      },
    ],
    activationMode: 'conditional',
    tags: ['crafting', 'deception', 'shoddy'],
  },
  {
    id: 'cunning_vc',
    name: 'Cunning',
    types: ['general'],
    source: 'Villain Codex',
    description:
      'You gain 1 additional skill point per Hit Die. Upon taking this feat, you immediately receive a number of skill points equal to your current Hit Dice. Whenever your Hit Dice increase thereafter, you gain one bonus skill point.',
    shortDescription: 'Gain 1 bonus skill point per Hit Die, retroactively and going forward.',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill_points_per_level',
        value: 1,
        source: 'Cunning',
      },
    ],
    activationMode: 'passive',
    tags: ['skills', 'skill_points'],
  },
  {
    id: 'deadly_kiss',
    name: 'Deadly Kiss',
    types: ['general'],
    source: 'Villain Codex',
    description:
      'As a swift action when applying venom to a weapon or object, you can convert your vishkanya venom into a contact poison lasting 1d4 rounds. The converted venom has a 1-minute onset time and appears indistinguishable from saliva or blood. Additionally, you gain one extra daily use of your toxic racial trait.',
    shortDescription:
      'Convert vishkanya venom to contact poison as a swift action; gain extra daily use.',
    prerequisites: [
      { type: 'class_feature', featureName: 'toxic (Vishkanya racial trait)' },
      { type: 'race', raceName: 'Vishkanya' },
    ],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'toxic_uses_per_day',
        value: 1,
        source: 'Deadly Kiss',
      },
    ],
    activationMode: 'conditional',
    tags: ['vishkanya', 'poison', 'racial'],
  },
  {
    id: 'favored_community',
    name: 'Favored Community',
    types: ['general'],
    source: 'Villain Codex',
    description:
      "Select one permanent, stationary settlement as your favored community. While in that settlement, you gain a +2 bonus on Initiative checks and Knowledge (geography), Perception, Stealth, and Survival checks. If you already possess the ranger's favored terrain class feature and your favored community would also be a favored terrain, increase the favored terrain bonus by 2 within that settlement. These bonuses do not stack with other effects that provide favored terrain bonuses.",
    shortDescription:
      'Gain +2 on Initiative, Perception, Stealth, Survival in your chosen home settlement.',
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_local', ranks: 2 },
      {
        type: 'special',
        description: 'Must have lived in the selected settlement for at least 1 year',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'initiative',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'While in favored community',
        },
        source: 'Favored Community',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'While in favored community',
        },
        source: 'Favored Community',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.stealth',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'While in favored community',
        },
        source: 'Favored Community',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.survival',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'While in favored community',
        },
        source: 'Favored Community',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_geography',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'While in favored community',
        },
        source: 'Favored Community',
      },
    ],
    activationMode: 'conditional',
    tags: ['terrain', 'ranger', 'favored_terrain', 'settlement'],
  },
  {
    id: 'greater_balor_whip',
    name: 'Greater Balor Whip',
    types: ['combat'],
    source: 'Villain Codex',
    description:
      'When you use Improved Balor Whip to make a single attack at your highest attack bonus, your critical threat range with the whip expands to 19-20. Additionally, you gain a +4 bonus on critical confirmation rolls when threatening a critical hit with that attack.',
    shortDescription:
      'Whip attacks via Improved Balor Whip threaten 19-20 crits with +4 confirmation bonus.',
    prerequisites: [
      { type: 'feat', featId: 'balor_whip' },
      { type: 'feat', featId: 'improved_balor_whip' },
      { type: 'feat', featId: 'weapon_focus_whip' },
      { type: 'feat', featId: 'whip_mastery' },
      { type: 'bab', minimum: 16 },
    ],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'critical_threat_range',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Critical threat range becomes 19-20 when using Improved Balor Whip single attack',
        },
        source: 'Greater Balor Whip',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'critical_confirmation',
        value: 4,
        condition: {
          type: 'custom',
          params: {},
          description: 'When threatening a critical hit via Improved Balor Whip single attack',
        },
        source: 'Greater Balor Whip',
      },
    ],
    activationMode: 'conditional',
    tags: ['whip', 'critical', 'drag'],
  },
  {
    id: 'improved_balor_whip',
    name: 'Improved Balor Whip',
    types: ['combat'],
    source: 'Villain Codex',
    description:
      'When you succeed at a drag attempt with your whip against a non-adjacent target and the target ends the drag adjacent to you, as a free action you can make a single attack against the target at your highest attack bonus using the melee weapon held in your other hand. You also gain a +2 bonus on drag combat maneuver checks when using a whip. This bonus does not stack with Greater Drag bonuses.',
    shortDescription:
      'After dragging a foe adjacent with your whip, free attack with your other weapon.',
    prerequisites: [
      { type: 'feat', featId: 'balor_whip' },
      { type: 'feat', featId: 'weapon_focus_whip' },
      { type: 'feat', featId: 'whip_mastery' },
      { type: 'bab', minimum: 12 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb_drag',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'When using a whip to drag',
        },
        source: 'Improved Balor Whip',
      },
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'free_attack',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Free attack with off-hand weapon after successfully dragging non-adjacent target to adjacent',
        },
        source: 'Improved Balor Whip',
      },
    ],
    activationMode: 'conditional',
    tags: ['whip', 'drag', 'two_weapon', 'free_action'],
  },
  {
    id: 'improved_position_of_strength',
    name: 'Improved Position of Strength',
    types: ['combat'],
    source: 'Villain Codex',
    description:
      'While wielding one or more proficient weapons, you gain the Position of Strength bonus on Intimidate checks against creatures armed with fewer weapons than you are currently wielding.',
    shortDescription:
      'Apply Position of Strength Intimidate bonus vs. creatures wielding fewer weapons than you.',
    prerequisites: [
      { type: 'feat', featId: 'position_of_strength' },
      { type: 'special', description: 'Two-Weapon Fighting or Multiattack feat' },
      { type: 'skill', skillId: 'intimidate', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.intimidate',
        value: 4,
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures wielding fewer weapons than you are currently wielding',
        },
        source: 'Improved Position of Strength',
      },
    ],
    activationMode: 'conditional',
    tags: ['intimidate', 'two_weapon', 'demoralize'],
  },
  {
    id: 'musketeers_daring',
    name: "Musketeer's Daring",
    types: ['combat', 'panache'],
    source: 'Villain Codex',
    description:
      'When rolling d6s for the derring-do deed, rolling a natural 5 or 6 allows you to roll an additional d6 and add it to the result. The total number of d6s you can roll remains capped at your Dexterity modifier (minimum 1). You can trigger only one bonus d6 roll per use of derring-do.',
    shortDescription: 'Derring-do deed grants bonus d6 on natural 5 or 6 (not just 6).',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'class_feature', featureName: 'derring-do deed' },
      { type: 'level', minimum: 6, class: 'swashbuckler' },
    ],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'derring_do_deed',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Roll additional d6 on natural 5 or 6 (not just 6) when using derring-do deed',
        },
        source: "Musketeer's Daring",
      },
    ],
    activationMode: 'conditional',
    tags: ['swashbuckler', 'panache', 'derring_do', 'deed'],
  },
  {
    id: 'musketeers_dodge',
    name: "Musketeer's Dodge",
    types: ['combat', 'grit'],
    source: 'Villain Codex',
    description:
      "When you activate the gunslinger's dodge deed to move, that movement does not provoke attacks of opportunity, and you gain a +4 dodge bonus to Armor Class during that movement.",
    shortDescription: "Gunslinger's dodge movement provokes no AoO and grants +4 dodge AC.",
    prerequisites: [
      { type: 'proficiency', proficiency: 'Exotic Weapon Proficiency (firearms)' },
      { type: 'level', minimum: 3, class: 'gunslinger' },
      { type: 'class_feature', featureName: "gunslinger's dodge deed" },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 4,
        condition: {
          type: 'custom',
          params: {},
          description: "During movement granted by gunslinger's dodge deed",
        },
        source: "Musketeer's Dodge",
      },
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'movement',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description: "Gunslinger's dodge deed movement does not provoke attacks of opportunity",
        },
        source: "Musketeer's Dodge",
      },
    ],
    activationMode: 'conditional',
    tags: ['gunslinger', 'grit', 'deed', 'dodge', 'firearms'],
  },
  {
    id: 'musketeers_reposition',
    name: "Musketeer's Reposition",
    types: ['combat', 'grit'],
    source: 'Villain Codex',
    description:
      'When you hit an opponent with a two-handed firearm while using the pistol-whip deed, you may substitute a reposition combat maneuver for the standard prone effect. The repositioned foe cannot be moved closer to you, and this reposition does not provoke attacks of opportunity.',
    shortDescription:
      'Substitute a reposition combat maneuver for prone when pistol-whipping with two-handed firearm.',
    prerequisites: [
      { type: 'proficiency', proficiency: 'Exotic Weapon Proficiency (firearms)' },
      { type: 'level', minimum: 6, class: 'gunslinger' },
      { type: 'class_feature', featureName: 'pistol-whip deed' },
    ],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'pistol_whip_deed',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Replace prone effect with reposition maneuver on pistol-whip hit with two-handed firearm; target cannot be moved toward you; no AoO',
        },
        source: "Musketeer's Reposition",
      },
    ],
    activationMode: 'conditional',
    tags: ['gunslinger', 'grit', 'deed', 'reposition', 'firearms'],
  },
  {
    id: 'musketeers_sidestep',
    name: "Musketeer's Sidestep",
    types: ['combat', 'panache'],
    source: 'Villain Codex',
    description:
      'When you activate the dodging panache deed, the movement granted does not provoke attacks of opportunity from any creature. Additionally, you gain a +2 dodge bonus to your Armor Class during this movement.',
    shortDescription: 'Dodging panache deed movement provokes no AoO and grants +2 dodge AC.',
    prerequisites: [
      { type: 'class_feature', featureName: 'dodging panache deed' },
      { type: 'level', minimum: 3, class: 'swashbuckler' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'During movement granted by dodging panache deed',
        },
        source: "Musketeer's Sidestep",
      },
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'movement',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description: 'Dodging panache deed movement does not provoke attacks of opportunity',
        },
        source: "Musketeer's Sidestep",
      },
    ],
    activationMode: 'conditional',
    tags: ['swashbuckler', 'panache', 'deed', 'dodge'],
  },
  {
    id: 'natures_wrath',
    name: "Nature's Wrath",
    types: ['general'],
    source: 'Villain Codex',
    description:
      'You lose your immunity to morale bonuses and emotion-descriptor effects, and take a -1 penalty on saving throws against anger or rage emotion effects. In exchange, you gain a +1 bonus on attack rolls targeting humanoid creatures. This feat reflects a plant creature imbued with primal rage against civilization.',
    shortDescription:
      'Lose morale/emotion immunity; gain +1 attack vs. humanoids (plant creatures only).',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 1 },
      { type: 'special', description: 'Any nongood alignment, Plant type creature' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack_roll',
        value: 1,
        condition: {
          type: 'custom',
          params: {},
          description: 'Against humanoid creatures',
        },
        source: "Nature's Wrath",
      },
      {
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'saving_throw',
        value: -1,
        condition: {
          type: 'custom',
          params: {},
          description: 'Against anger or rage emotion effects',
        },
        source: "Nature's Wrath",
      },
    ],
    activationMode: 'passive',
    tags: ['plant', 'rage', 'humanoid', 'emotion'],
  },
  {
    id: 'plague_resistance',
    name: 'Plague Resistance',
    types: ['general'],
    source: 'Villain Codex',
    description:
      'When you take ability score damage or drain as the result of a disease, roll the damage or drain for each ability score twice and take the lower result. Other effects of the disease apply normally.',
    shortDescription: 'Roll disease ability damage/drain twice and take the lower result.',
    prerequisites: [{ type: 'ability_score', ability: 'CON', minimum: 13 }],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'disease_ability_damage',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Roll twice and take lower result when suffering ability damage or drain from disease',
        },
        source: 'Plague Resistance',
      },
    ],
    activationMode: 'conditional',
    tags: ['disease', 'ability_damage', 'defense'],
  },
  {
    id: 'position_of_strength',
    name: 'Position of Strength',
    types: ['combat'],
    source: 'Villain Codex',
    description:
      'While wielding one or more proficient weapons, you gain a +4 bonus on Intimidate checks against unarmed creatures (this bonus does not stack with Intimidating Prowess). When you successfully demoralize an unarmed creature using Intimidate, that creature is shaken as long as you remain armed and they remain unarmed, up to a maximum of 1 minute. Creatures with natural attacks or whose unarmed strikes deal lethal damage are considered armed for this purpose.',
    shortDescription:
      '+4 Intimidate vs. unarmed foes; demoralized foes stay shaken while you are armed.',
    prerequisites: [{ type: 'skill', skillId: 'intimidate', ranks: 5 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.intimidate',
        value: 4,
        condition: {
          type: 'custom',
          params: {},
          description: 'Against unarmed creatures while you are wielding a proficient weapon',
        },
        source: 'Position of Strength',
      },
    ],
    activationMode: 'conditional',
    tags: ['intimidate', 'demoralize', 'shaken', 'weapon'],
  },
  {
    id: 'protective_line',
    name: 'Protective Line',
    types: ['combat', 'teamwork'],
    source: 'Villain Codex',
    description:
      'When you are adjacent to an ally who also has this feat, you do not provoke attacks of opportunity while loading a firearm.',
    shortDescription:
      'No attacks of opportunity when loading a firearm while adjacent to an ally with this feat.',
    prerequisites: [{ type: 'proficiency', proficiency: 'Exotic Weapon Proficiency (firearms)' }],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'reload_firearm',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description: 'While adjacent to an ally with Protective Line',
        },
        source: 'Protective Line',
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'firearms', 'gunslinger', 'reload'],
  },
  {
    id: 'quick_stow',
    name: 'Quick Stow',
    types: ['combat'],
    source: 'Villain Codex',
    description:
      'Sheathing a weapon no longer provokes attacks of opportunity. You can combine sheathing a weapon with a move action to both draw and stow in one action. With Two-Weapon Fighting, you can sheathe two light weapons or one one-handed weapon in the time normally required for one. When you acquire an item through picking it up, Sleight of Hand theft, or a combat maneuver, you can stow the item as part of that same action. You may attempt to hide stowed items with a Sleight of Hand check at a -20 penalty, opposed by Perception.',
    shortDescription:
      'Sheathe weapons without provoking AoO; stow items as part of acquiring them.',
    prerequisites: [
      { type: 'feat', featId: 'quick_draw' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'sheathe_weapon',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description: 'Sheathing a weapon does not provoke attacks of opportunity',
        },
        source: 'Quick Stow',
      },
    ],
    activationMode: 'passive',
    tags: ['action_economy', 'two_weapon', 'item_management'],
  },
  {
    id: 'reap_the_infirm',
    name: 'Reap the Infirm',
    types: ['combat'],
    source: 'Villain Codex',
    description:
      "You can use a creature's diseased state against it. You deal an additional 1d6 points of precision damage when you hit a diseased creature with a weapon attack. You also gain a +2 bonus on combat maneuver checks against diseased creatures.",
    shortDescription: '+1d6 precision damage and +2 CMB vs. diseased creatures.',
    prerequisites: [{ type: 'bab', minimum: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage',
        value: '1d6',
        condition: {
          type: 'custom',
          params: {},
          description: 'Precision damage against diseased creatures',
        },
        source: 'Reap the Infirm',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb',
        value: 2,
        condition: {
          type: 'custom',
          params: {},
          description: 'Against diseased creatures',
        },
        source: 'Reap the Infirm',
      },
    ],
    activationMode: 'conditional',
    tags: ['disease', 'precision_damage', 'combat_maneuver'],
  },
  {
    id: 'terrifying_assassination',
    name: 'Terrifying Assassination',
    types: ['combat'],
    source: 'Villain Codex',
    description:
      'When you fail a death attack, fail an assassinate attempt (ninja master trick or slayer advanced talent), the target becomes shaken for 2d4 rounds instead of simply surviving unaffected.',
    shortDescription: 'Failed assassination or death attack leaves target shaken for 2d4 rounds.',
    prerequisites: [
      {
        type: 'special',
        description:
          'Assassinate (ninja master trick or slayer advanced talent) or death attack class feature',
      },
    ],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'failed_assassination',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Target becomes shaken for 2d4 rounds on a failed death attack or assassinate attempt',
        },
        source: 'Terrifying Assassination',
      },
    ],
    activationMode: 'conditional',
    tags: ['assassin', 'ninja', 'slayer', 'shaken', 'death_attack'],
  },
  {
    id: 'twin_fang_style',
    name: 'Twin Fang Style',
    types: ['combat', 'style'],
    source: 'Villain Codex',
    description:
      'While using this style with paired daggers or kama, when you make a full attack and hit a creature with both weapons, you reduce its armor bonus to AC by 1 until the beginning of your next turn. This reduction stacks (from multiple hits in the same full attack) to a minimum armor bonus of +0.',
    shortDescription:
      "Full attack with daggers/kama: hits with both reduce foe's armor bonus by 1 each.",
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'quick_draw' },
      { type: 'feat', featId: 'two_weapon_fighting' },
      { type: 'bab', minimum: 1 },
      { type: 'skill', skillId: 'acrobatics', ranks: 1 },
    ],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.ARMOR,
        target: 'target_armor_bonus',
        value: -1,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Per successful hit with paired daggers or kama in a full attack while using Twin Fang Style; stacks to minimum +0',
        },
        source: 'Twin Fang Style',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'dagger', 'kama', 'two_weapon', 'armor_reduction'],
  },
  {
    id: 'twin_fang_strike',
    name: 'Twin Fang Strike',
    types: ['combat'],
    source: 'Villain Codex',
    description:
      'When using Twin Fang Style with two daggers or two kama, you can strike with both weapons simultaneously during an attack action. Both attacks incur a -4 penalty. You apply precision damage and effects that trigger on a hit only once, even if both attacks hit.',
    shortDescription: 'Attack action: strike with both daggers/kama simultaneously at -4 each.',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'quick_draw' },
      { type: 'feat', featId: 'twin_fang_style' },
      { type: 'feat', featId: 'two_weapon_fighting' },
      { type: 'skill', skillId: 'acrobatics', ranks: 6 },
      { type: 'special', description: 'Base attack bonus +6 or monk level 6th' },
    ],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'attack_action',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Strike with both daggers or kama simultaneously at -4 penalty each when using Twin Fang Style',
        },
        source: 'Twin Fang Strike',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'dagger', 'kama', 'two_weapon', 'simultaneous_strike'],
  },
  {
    id: 'twin_fang_lunge',
    name: 'Twin Fang Lunge',
    types: ['combat'],
    source: 'Villain Codex',
    description:
      'While using Twin Fang Style, you can spend a full-round action to move up to twice your speed and then use Twin Fang Strike as if you were taking the attack action.',
    shortDescription: 'Full-round action: move up to 2x speed then use Twin Fang Strike.',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'quick_draw' },
      { type: 'feat', featId: 'twin_fang_strike' },
      { type: 'feat', featId: 'twin_fang_style' },
      { type: 'feat', featId: 'two_weapon_fighting' },
      { type: 'skill', skillId: 'acrobatics', ranks: 8 },
      { type: 'special', description: 'Base attack bonus +8 or monk level 8th' },
    ],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'full_round_action',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Move up to 2x speed then use Twin Fang Strike as an attack action while in Twin Fang Style',
        },
        source: 'Twin Fang Lunge',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'dagger', 'kama', 'two_weapon', 'mobility'],
  },
  {
    id: 'two_weapon_grace',
    name: 'Two-Weapon Grace',
    types: ['combat'],
    source: 'Villain Codex',
    description:
      'You can apply the benefits of Fencing Grace, Slashing Grace, or Starry Grace while wielding two weapons, but your two-weapon fighting penalties increase by 2 on all attack rolls (minimum penalty -2). Your off-hand weapon deals damage based on half your Dexterity bonus instead of half your Strength modifier. If you attack without your off-hand weapon, you retain the grace feat benefits even with an occupied other hand. Two-Weapon Grace counts as Double Slice for purposes of qualifying for the Two-Weapon Rend feat.',
    shortDescription:
      'Apply Fencing/Slashing/Starry Grace while two-weapon fighting at -2 increased penalty.',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'special', description: 'Fencing Grace, Slashing Grace, or Starry Grace' },
      { type: 'feat', featId: 'two_weapon_fighting' },
      { type: 'feat', featId: 'weapon_finesse' },
    ],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'two_weapon_fighting',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Apply grace feat benefits while two-weapon fighting; TWF penalties increase by 2 (min -2); off-hand uses half Dex modifier for damage',
        },
        source: 'Two-Weapon Grace',
      },
    ],
    activationMode: 'conditional',
    tags: ['two_weapon', 'finesse', 'dexterity', 'damage'],
  },
  {
    id: 'vishkanya_perfume',
    name: 'Vishkanya Perfume',
    types: ['general'],
    source: 'Villain Codex',
    description:
      'As a swift action, you can expend one daily use of your toxic racial trait to transform your venom into an inhaled poison for 1d4 rounds. During this duration, you select one adjacent enemy to expose to the poisoned gas. The venom functions as an inhaled poison with a DC that is 2 lower than normal. You also gain one extra daily use of your toxic racial trait.',
    shortDescription:
      'Convert vishkanya venom to inhaled poison for 1d4 rounds; gain extra daily toxic use.',
    prerequisites: [
      { type: 'feat', featId: 'deadly_kiss' },
      { type: 'class_feature', featureName: 'toxic (Vishkanya racial trait)' },
      { type: 'race', raceName: 'Vishkanya' },
    ],
    effects: [
      {
        type: 'special_rule',
        bonusType: BonusType.UNTYPED,
        target: 'vishkanya_toxic',
        value: 0,
        condition: {
          type: 'custom',
          params: {},
          description:
            'Convert venom to inhaled poison (DC -2) for 1d4 rounds as swift action; affects one adjacent enemy',
        },
        source: 'Vishkanya Perfume',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'toxic_uses_per_day',
        value: 1,
        source: 'Vishkanya Perfume',
      },
    ],
    activationMode: 'conditional',
    tags: ['vishkanya', 'poison', 'inhaled', 'racial'],
  },
];

// CHECKPOINT: last_written=vishkanya_perfume, written=26/26, status=complete
