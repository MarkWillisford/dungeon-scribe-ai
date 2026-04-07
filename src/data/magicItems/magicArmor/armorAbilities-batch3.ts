import type { ItemSpecialAbility } from '@/types/magicItems';

// Armor special abilities — batch 3 (items 51–75).
// Sources: Ultimate Equipment, Advanced Class Guide, Armor Master's Handbook,
// Aquatic Adventures, Agents of Evil, and other Pathfinder 1e supplements.
// Flat-price abilities (no standard +X equivalent) use the nearest rounded
// bonus equivalent based on the gp add-on (each +1 ≈ 1,000 gp for comparison).
export const armorAbilitiesBatch3: ItemSpecialAbility[] = [
  // +1 bonus equivalent (or ~1,000 gp flat)
  {
    id: 'armor_steaming',
    name: 'Steaming',
    description: 'Three times per day, the wearer can create a cloud of scorching steam that persists for 5 rounds or until dismissed. While active, creatures grappling the wearer or in its square take 1d6 points of fire damage at the start of each turn; other creatures within 5 feet take 1 point of fire damage. Any creature within 5 feet that makes a melee attack or combat maneuver against the wearer must succeed at a DC 14 Reflex save or take 1d6 points of fire damage. This ability only functions on medium and heavy armor.',
    bonusEquivalent: 2, casterLevel: 3,
    effects: [],
  },
  {
    id: 'armor_volcanic',
    name: 'Volcanic',
    description: 'Once per day, the wearer can cause a cloud of smoke and hot molten liquid to shoot forth from the armor in a 5-foot radius centered on the wearer. The smoke grants concealment, while the liquid inflicts 1d6 fire damage and can ignite combustible materials. One round after activation, the smoke dissipates and the liquid hardens into difficult terrain. The wearer is immune to the smoke, fire damage, and difficult terrain produced by this ability. This ability functions only on heavy armor.',
    bonusEquivalent: 2, casterLevel: 14,
    effects: [],
  },
  {
    id: 'armor_burdenless',
    name: 'Burdenless',
    description: 'The wearer\'s carrying capacity is increased by 50% across each load category (light, medium, and heavy).',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },
  {
    id: 'armor_expeditious',
    name: 'Expeditious',
    description: 'Grants an enhancement bonus of +5 feet to the wearer\'s base land speed. This ability only applies to light armor.',
    bonusEquivalent: 1, casterLevel: 3,
    effects: [],
  },
  {
    id: 'armor_amorphous',
    name: 'Amorphous',
    description: 'Grants a +5 competence bonus on Escape Artist checks and to CMD against grapple combat maneuvers. Once per day, the wearer can assume a liquid form that can pass through any space through which thick mud could reasonably flow. While in liquid form, movement speed decreases by 10 feet and only move actions are permitted; the effect lasts up to 1 minute or until the wearer uses a move action to revert to normal. Must be crafted from leather, fabric, or another flexible, organic material.',
    bonusEquivalent: 1, casterLevel: 8,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.escape_artist', value: 5, source: 'Amorphous Armor' },
      { type: 'bonus', bonusType: 'competence', target: 'cmd', value: 5, source: 'Amorphous Armor', condition: { type: 'custom', params: {}, description: 'vs. grapple only' } },
    ],
  },
  {
    id: 'armor_restful',
    name: 'Restful',
    description: 'The wearer\'s sleep requirement is reduced from 8 hours to 2 hours daily. They do not suffer fatigue from sleeping in the armor and awaken fully refreshed, recovering hit points, ability damage, and gaining disease and poison resistance as if completing normal rest. Additional rest beyond 2 hours provides no extra healing benefits, and the effect functions only once per 24-hour period.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },
  {
    id: 'armor_cloudburst',
    name: 'Cloudburst',
    description: 'When the wearer is struck by an attack dealing at least 10 points of electricity damage, the armor becomes charged for 1 round. On the wearer\'s next turn they may use shocking grasp as a swift action. The spell deals 1d6 points of electricity damage for every 10 points of electricity damage dealt to the wearer since their last turn (maximum 5d6 for 50 or more points taken). The damage is based on the triggering attack before resistances or immunities are applied.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },
  {
    id: 'armor_comfort',
    name: 'Comfort',
    description: 'The armor sheds dirt and sweat as they accumulate, remaining comfortable in any weather. The wearer can sleep in it without penalty (treated as light armor for the purpose of rest), eliminates saving throw penalties from extreme heat, and the armor functions as cold-weather clothing in frigid conditions. The armor check penalty is reduced by 1 (minimum 0), and the armor always appears immaculately clean.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },
  {
    id: 'armor_corsair',
    name: 'Corsair',
    description: 'Grants the wearer a +5 competence bonus on Acrobatics checks. Whenever the wearer regains a grit or panache point, the bonus on Acrobatics checks doubles until the beginning of the wearer\'s next turn.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.acrobatics', value: 5, source: 'Corsair Armor' },
    ],
  },
  {
    id: 'armor_creeping',
    name: 'Creeping',
    description: 'The armor\'s check penalty does not apply to Stealth checks. Once per day as a command word, the wearer gains a bonus on Stealth checks equal to the armor\'s enhancement bonus for 1 minute.',
    bonusEquivalent: 1, casterLevel: 7,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 5, source: 'Creeping Armor', condition: { type: 'custom', params: {}, description: 'No armor check penalty to Stealth; daily bonus equals enhancement bonus' } },
    ],
  },
  {
    id: 'armor_deceiving',
    name: 'Deceiving',
    description: 'The armor alters how divination spells perceive the wearer\'s alignment aura, causing the wearer to always radiate an alternate alignment chosen at creation. This effect cannot be suppressed and only affects detection magic — the wearer\'s actual alignment is unchanged for class features, smite abilities, and alignment-dependent spell effects. Attackers who use alignment-based attacks may attempt a DC 20 Sense Motive check to notice that something is amiss.',
    bonusEquivalent: 1, casterLevel: 7,
    effects: [],
  },
  {
    id: 'armor_malevolent',
    name: 'Malevolent',
    description: 'Grants a +2 competence bonus on Bluff and Intimidate checks attempted during violent conflict. Additionally, the armor\'s enhancement bonus can be applied to attack rolls made against flat-footed or prone enemies.',
    bonusEquivalent: 1, casterLevel: 7,
    effects: [],
  },
  {
    id: 'armor_rallying',
    name: 'Rallying',
    description: 'The wearer\'s presence inspires nearby allies. All allies within 30 feet of the wearer gain a +4 morale bonus on saving throws against fear effects. This bonus increases to +6 if the wearer already possesses an ability that grants morale bonuses against fear (such as a paladin\'s aura of courage or a bard\'s countersong).',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },
  {
    id: 'armor_spirit_bonded',
    name: 'Spirit-bonded',
    description: 'Grants the wearer a +1 bonus on saving throws to resist psychic spells and effects originating from incorporeal creatures. If the wearer possesses the spirit bonus class feature (medium class), that bonus increases by 1. This ability applies exclusively to medium armor.',
    bonusEquivalent: 1, casterLevel: 9,
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.all', value: 1, source: 'Spirit-bonded Armor', condition: { type: 'custom', params: {}, description: 'vs. psychic spells and effects from incorporeal creatures' } },
    ],
  },
  {
    id: 'armor_locksmith',
    name: 'Locksmith',
    description: 'The armor\'s armor check penalty does not apply to Disable Device checks. The wearer can generate masterwork thieves\' tools from their fingertips at will, leaving no physical trace when retracted. Identifying this armor\'s lock-picking capability requires a Spellcraft check exceeding the normal DC by 15. Additionally, the wearer chooses how to allocate the armor\'s enhancement bonus at the start of each turn between the armor itself or Disable Device checks as a free action. This ability applies exclusively to light armor.',
    bonusEquivalent: 1, casterLevel: 3,
    effects: [],
  },

  // ~+2 bonus equivalent (or ~2,000–9,999 gp flat)
  {
    id: 'armor_adhesive',
    name: 'Adhesive',
    description: 'The armor is covered in a magical adhesive. Any creature that hits the wearer with a natural attack or unarmed strike must succeed at a DC 14 Reflex save or become stuck to the armor (as sovereign glue). A stuck creature can escape with a DC 20 Escape Artist check or by dealing 5 points of damage to itself.',
    bonusEquivalent: 2, casterLevel: 8,
    effects: [],
  },
  {
    id: 'armor_spiteful',
    name: 'Spiteful',
    description: 'This ability requires the wearer to possess the panache class feature. When an enemy\'s melee attack would reduce the wearer to below 0 hit points, the wearer may expend 1 panache point as an immediate action to make a single melee attack against the attacker. This counterattack occurs before the wearer becomes unconscious or dies.',
    bonusEquivalent: 2, casterLevel: 7,
    effects: [],
  },
  {
    id: 'armor_hosteling',
    name: 'Hosteling',
    description: 'As a full-round action, the wearer can store a single willing creature of up to Large size in a small extradimensional space within the armor. The stored creature is in suspended animation. The creature can be released as a free action adjacent to the wearer.',
    bonusEquivalent: 2, casterLevel: 9,
    effects: [],
  },
  {
    id: 'armor_radiant',
    name: 'Radiant',
    description: 'The armor shines as brightly as a torch when worn. This radiance can be suppressed or resumed on command. Once per day, the wearer may command the armor to brighten to daylight spell intensity for 1 hour or until dismissed.',
    bonusEquivalent: 2, casterLevel: 6,
    effects: [],
  },
  {
    id: 'armor_trackless',
    name: 'Trackless',
    description: 'Survival checks made to track the wearer suffer a –5 penalty. Additionally, the wearer receives a +5 competence bonus on Stealth checks. This ability can only be applied to leather armor or hide armor.',
    bonusEquivalent: 2, casterLevel: 5,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 5, source: 'Trackless Armor' },
    ],
  },

  // +3 bonus equivalent
  {
    id: 'armor_arrow_collecting',
    name: 'Arrow-collecting',
    description: 'The wearer gains a 20% miss chance against ranged projectile attacks (excluding thrown weapons, spell rays, and siege weapon projectiles). Missed projectiles orbit the armor with a maximum capacity of 5 pieces; additional projectiles drop at the wearer\'s feet. As a standard action, the wearer can fire all collected projectiles at a single target within 30 feet, making separate attack rolls for each. Projectiles become unusable if not fired within 5 minutes or if anyone attempts to grab or move them. This ability applies only to medium armor.',
    bonusEquivalent: 3, casterLevel: 11,
    effects: [],
  },
  {
    id: 'armor_brawling',
    name: 'Brawling',
    description: 'Grants the wearer a +2 bonus on unarmed attack and damage rolls, including combat maneuver checks made to grapple. Unarmed strikes count as magic weapons for the purpose of bypassing damage reduction. These bonuses do not apply to natural weapons. This quality applies only to light armor.',
    bonusEquivalent: 3, casterLevel: 5,
    effects: [],
  },
  {
    id: 'armor_cotraveling',
    name: 'Cotraveling',
    description: 'The wearer can attune up to five willing creatures by touching them, each corresponding to one arm of a spiral embroidered on the armor. Once per day as a free action, when the wearer is transported to another plane via a spell or effect, they may activate the armor to bring all attuned creatures within 30 feet along with them. All five attunement slots deactivate after use regardless of how many creatures traveled; the wearer must wait 24 hours before attuning new creatures.',
    bonusEquivalent: 3, casterLevel: 14,
    effects: [],
  },
  {
    id: 'armor_fortification_moderate',
    name: 'Fortification (Moderate)',
    description: '50% chance to negate a critical hit or sneak attack, treating it as a normal hit.',
    bonusEquivalent: 3, casterLevel: 13,
    effects: [],
  },
  {
    id: 'armor_ghost_touch',
    name: 'Ghost Touch',
    description: 'The armor\'s enhancement bonus applies against the touch attacks of incorporeal creatures. The armor can be donned or removed by an incorporeal creature.',
    bonusEquivalent: 3, casterLevel: 15,
    effects: [],
  },
];
