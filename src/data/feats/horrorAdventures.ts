import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const HORROR_ADVENTURES_FEATS: FeatDefinition[] = [
  {
    id: 'absorb_spirit',
    name: 'Absorb Spirit',
    description:
      "When an incorporeal undead with rejuvenation or a haunt is reduced to 0 hit points within 30 feet of you, you can immediately try to absorb its essence as it attempts to rejuvenate. You must attempt a Will saving throw (DC = 5 + twice the creature's CR). If you succeed, the spirit is absorbed into your body and you prevent it from rejuvenating. While the spirit is within your body, you must attempt a Constitution check each day (DC = 10 + the creature's CR). If you fail, you take 1d4 Constitution damage and 1d4 Wisdom damage. If you succeed, you take 1 Constitution damage and 1 Wisdom damage. This damage cannot be prevented, healed, or suppressed in any way while you harbor the spirit. You can release the spirit as a standard action at any time. If you die from Constitution damage while harboring the spirit, the spirit is automatically released. If Wisdom damage causes you to become comatose, the spirit takes control of your body.",
    shortDescription:
      'Absorb nearby incorporeal undead or haunts at 0 HP, trapping them in your body at the cost of daily Con/Wis damage',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      {
        type: 'special',
        description: 'Must have died at least once or been possessed by an undead creature',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['undead', 'incorporeal', 'spirit', 'haunt'],
  },
  {
    id: 'aura_flare',
    name: 'Aura Flare',
    description:
      "Once per day when you channel energy, your divine aura flares outward. Evil creatures within the area of your channeled energy (if you channel positive energy) or good creatures within the area of your channeled energy (if you channel negative energy) must succeed at a Fortitude save or become fatigued for 1d4 rounds (if you have a strong aura) or become staggered for 1d4 rounds (if you have an overwhelming aura). The DC of this saving throw equals 10 + 1/2 your class level + your Charisma modifier. If you have an overwhelming aura, you can choose to use the strong aura's effect instead. This is a mind-affecting fear effect.",
    shortDescription:
      'Once/day when channeling energy, your divine aura fatigues or staggers opposing-alignment creatures in the area',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      {
        type: 'special',
        description:
          'Aura, aura of good, or aura of evil class feature; channel energy 4d6; strong or overwhelming good or evil aura',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aura', 'channel energy', 'fear', 'divine'],
  },
  {
    id: 'blood_feast_ha',
    name: 'Blood Feast',
    description:
      'When you successfully damage a living creature using your bite attack, you gain a +1 morale bonus on attack and damage rolls with your bite attack until the end of your next turn.',
    shortDescription:
      '+1 morale bonus on bite attack and damage rolls until end of next turn after damaging a living creature with a bite',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Bite attack' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'attack_and_damage.bite',
        value: 1,
        condition: {
          type: 'custom',
          description:
            'After successfully damaging a living creature with a bite attack, until end of next turn',
          params: {},
        },
        source: 'Blood Feast',
      },
    ],
    activationMode: 'conditional',
    tags: ['bite', 'natural attack', 'morale'],
  },
  {
    id: 'blood_spurt',
    name: 'Blood Spurt',
    description:
      "When an adjacent creature's melee attack deals bleed damage to you, that creature must succeed at a Fortitude save (DC = 10 + 1/2 your character level + your Constitution modifier) or be blinded for 1d4 rounds. A creature only needs to attempt this saving throw for the first of its attacks that deals bleed damage to you each round. If you have an ability that deals bleed damage, you can spend a standard action to deal 1 point of bleed damage to yourself and spray blood at one adjacent creature of your choice, which must then attempt the saving throw.",
    shortDescription:
      'Adjacent attackers dealing bleed damage risk blindness; you can self-inflict 1 bleed as a standard action to trigger the effect',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 2 },
      { type: 'special', description: 'Susceptibility to bleed damage' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bleed', 'blind', 'blood'],
  },
  {
    id: 'bouncing_spell_like_ability',
    name: 'Bouncing Spell-Like Ability',
    description:
      'Choose one of your spell-like abilities, subject to the restrictions below. You can use that ability as a bouncing spell-like ability three times per day (or less, if the ability is usable only once or twice per day). When you target a single creature with a bouncing spell-like ability and the ability has no effect on that creature—whether from a successful saving throw, immunity, or other reasons—you can use a swift action to redirect the ability to another eligible target within range. The ability affects the new target as if you had just used the ability. An ability that has any effect on a creature cannot be redirected in this way. You can only select a spell-like ability duplicating a spell with a level equal to or less than 1/2 your caster level (round down) – 1.',
    shortDescription:
      'Selected spell-like ability can be redirected to a new target as a swift action if it has no effect on the first',
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [
      { type: 'caster_level', minimum: 4 },
      { type: 'special', description: 'Spell-like ability at caster level 4th or higher' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spell-like ability', 'monster feat', 'redirect'],
  },
  {
    id: 'brutal_coup_de_grace',
    name: 'Brutal Coup de Grace',
    description:
      'When you perform a coup de grace with a weapon with which you have Weapon Focus and kill the target, each foe within 30 feet who sees or hears the coup de grace must succeed at a Will save (DC = 10 + 1/2 your character level + your Charisma modifier) or become shaken for 1 minute. This is a mind-affecting fear effect.',
    shortDescription:
      'Killing a coup de grace with your Weapon Focus weapon forces nearby foes to save or become shaken for 1 minute',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'dazzling_display' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 5 },
      { type: 'special', description: 'Proficiency with the selected weapon' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fear', 'coup de grace', 'intimidate'],
  },
  {
    id: 'bully_breed',
    name: 'Bully Breed',
    description:
      'Your animal companion or mount gains Intimidate as a class skill and can attempt to demoralize an opponent as a move action whenever it damages an opponent with a natural attack. It can select Dazzling Display and Shatter Defenses as feats if it meets all the prerequisites. This feat does not allow your animal companion or mount to use Intimidate to make a creature friendly.',
    shortDescription:
      'Animal companion or mount gains Intimidate as class skill and can demoralize foes after hitting with natural attacks as a move action',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'handle_animal', ranks: 4 },
      { type: 'skill', skillId: 'intimidate', ranks: 4 },
      { type: 'class_feature', featureName: 'animal companion or mount' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['animal companion', 'mount', 'intimidate'],
  },
  {
    id: 'clarity_of_pain',
    name: 'Clarity of Pain',
    description:
      "Three times per day, when you fail a saving throw against a charm or compulsion effect, you can deal 1d6 points of damage to yourself using a piercing or slashing weapon as an immediate action to attempt the saving throw again. You can't use this feat if damage reduction would prevent this self-inflicted damage. You must accept the second result, even if it is worse.",
    shortDescription:
      'Three times/day, deal yourself 1d6 damage to reroll a failed save vs charm or compulsion (must accept second result)',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'feat', featId: 'improved_iron_will' },
      { type: 'feat', featId: 'iron_will' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['pain', 'charm', 'compulsion', 'reroll'],
  },
  {
    id: 'consume_essence',
    name: 'Consume Essence',
    description:
      'When you begin your turn with one or more swallowed creatures inside you, each swallowed creature must succeed at a Fortitude save (DC = 10 + 1/2 your Hit Dice + your Charisma modifier) or gain a temporary negative level. Creatures that die from these temporary negative levels are consumed as if by disintegrate. This is a death effect. If you are undead, each temporary negative level a swallowed creature gains adds 5 temporary hit points to the amount of damage a swallowed creature must deal to cut its way free (to a maximum of 15 temporary hit points). These temporary hit points last for 10 minutes.',
    shortDescription:
      'Swallowed creatures must save each turn or gain a negative level; undead gain temp HP from each negative level inflicted',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 6 },
      {
        type: 'special',
        description:
          'Evil alignment; swallow whole universal monster ability; must be magical beast, outsider, or undead type',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['swallow whole', 'negative level', 'undead'],
  },
  {
    id: 'contagious_spell',
    name: 'Contagious Spell',
    description:
      "When a creature fails its caster level check to remove your spell by 5 or more, the spell transfers to the creature attempting the removal instead. This transferred spell affects the creature as if you had just cast the spell on it, and it may be entitled to a saving throw or spell resistance check. A contagious spell only affects targeted harmful spells with ranges other than personal. A contagious spell uses a spell slot 2 levels higher than the spell's actual level.",
    shortDescription:
      'Targeted harmful spells transfer to failed dispellers (by 5+); uses a spell slot 2 levels higher',
    source: 'Horror Adventures',
    types: ['metamagic'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['metamagic', 'dispel', 'transfer'],
  },
  {
    id: 'disconcerting_knowledge',
    name: 'Disconcerting Knowledge',
    description:
      'When you spend a standard action to attempt an Intimidate check to demoralize a creature with a base CR of 2 or higher, you can substitute the appropriate Knowledge skill check for the Intimidate check. The creature must be intelligent and must be able to understand you for this ability to work.',
    shortDescription:
      'Substitute a Knowledge skill for Intimidate to demoralize intelligent creatures of CR 2+ that can understand you',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Bardic knowledge class ability or Knowledge domain; two Knowledge skills at 3+ ranks each',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['knowledge', 'intimidate', 'demoralize'],
  },
  {
    id: 'disrupting_fist',
    name: 'Disrupting Fist',
    description:
      'After you confirm a critical hit with an unarmed strike against an undead creature, you can spend a swift action to expend two uses of channel energy. The undead must succeed at a Will save (DC = 10 + your base attack bonus) or be destroyed.',
    shortDescription:
      'After confirming a critical hit with unarmed strike vs undead, spend swift action and 2 channel energy uses to destroy it (Will save negates)',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'channel_smite' },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'bab', minimum: 9 },
      { type: 'special', description: 'Channel positive energy 4d6' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['channel energy', 'undead', 'unarmed', 'critical'],
  },
  {
    id: 'disruptive_spell_like_ability',
    name: 'Disruptive Spell-Like Ability',
    description:
      'Choose one of your spell-like abilities, subject to the restrictions below. You can use that ability as a disruptive spell-like ability three times per day (or less, if the ability is usable only once or twice per day). Creatures that take damage from or fail their saving throws against your disruptive spell-like ability must attempt concentration checks when casting spells or using spell-like abilities for 1 round. The DC for this concentration check equals the DC of the disruptive ability + the level of the spell being cast. Creatures that succeed at their saving throw against the disruptive ability are not affected. You can only select a spell-like ability duplicating a spell with a level equal to or less than 1/2 your caster level (round down) – 1.',
    shortDescription:
      'Selected spell-like ability forces concentration checks on affected creatures for 1 round',
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [
      { type: 'caster_level', minimum: 4 },
      { type: 'special', description: 'Spell-like ability at caster level 4th or higher' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spell-like ability', 'monster feat', 'concentration'],
  },
  {
    id: 'enemy_cult',
    name: 'Enemy Cult',
    description:
      "Select a detection spell appropriate to your opposition (detect chaos, detect evil, detect good, or detect law). You can cast this spell twice per day as a spell-like ability with a caster level equal to your character level. Goal: Defeat the cult's leader in a significant conflict and drive the cult out of or destroy its presence in the region. Completion Benefit: You gain a +2 resistance bonus on saving throws against evil creatures and a +2 deflection bonus to AC against attacks from evil creatures. These bonuses are doubled against evil summoned creatures.",
    shortDescription:
      'Cast a detection spell 2/day (SLA); complete goal to gain +2 resistance saves and +2 deflection AC vs evil (doubled vs summoned evil)',
    source: 'Horror Adventures',
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Encounter with an opposing cult, or backgrounds: Angelic Encounter, False Witness, The Omen, or Terrible Secret',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['story feat', 'cult', 'detection', 'alignment'],
  },
  {
    id: 'engulf_revulsion',
    name: 'Engulf Revulsion',
    description:
      'When you successfully engulf or smother an opponent, or when you maintain a grapple against an opponent you have engulfed or smothered, that opponent must succeed at a Will save (DC = 10 + 1/2 your Hit Dice + your Strength modifier) or become shaken for 1 round. This is a mind-affecting fear effect.',
    shortDescription:
      'Engulfed/smothered opponents must save (Will DC 10 + 1/2 HD + Str) or be shaken 1 round',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Engulf or smother universal monster ability' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['engulf', 'smother', 'fear', 'grapple'],
  },
  {
    id: 'engulf_horror',
    name: 'Engulf Horror',
    description:
      'When you successfully engulf or smother an opponent, or when you maintain a grapple against an opponent you have engulfed or smothered, that opponent must succeed at a Will save (DC = 10 + 1/2 your Hit Dice + your Strength modifier) or become staggered for 1 round. This is a mind-affecting fear effect.',
    shortDescription:
      'Engulfed/smothered opponents must save (Will DC 10 + 1/2 HD + Str) or be staggered 1 round',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'engulf_revulsion' },
      { type: 'special', description: 'Engulf or smother universal monster ability' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['engulf', 'smother', 'fear', 'stagger'],
  },
  {
    id: 'exorcising_mutilation',
    name: 'Exorcising Mutilation',
    description:
      'When you fail a saving throw against a possession or domination effect, you can immediately deal 4 points of Constitution damage to yourself as an immediate action to reroll the saving throw. This damage cannot be reduced in any way, and it can only be healed through natural means. You must accept the second result, even if it is worse. If you succeed at the saving throw, you are immune to that specific spell or ability from that creature for 24 hours. You must be wielding a lethal piercing or slashing weapon, possess a claw attack, or have a means of drawing such a weapon as a free action that does not require you to also spend your immediate action.',
    shortDescription:
      'Deal yourself 4 Con damage (irreducible) to reroll a failed save vs possession/domination; success grants 24-hour immunity',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 15 },
      { type: 'feat', featId: 'clarity_of_pain' },
      { type: 'feat', featId: 'improved_iron_will' },
      { type: 'feat', featId: 'iron_will' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['possession', 'domination', 'reroll', 'pain'],
  },
  {
    id: 'exsanguinate',
    name: 'Exsanguinate',
    description:
      'Once per round, when you successfully pin an opponent, that opponent takes double the normal damage from your blood drain.',
    shortDescription: 'When you pin an opponent, your blood drain deals double damage',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [
      {
        type: 'special',
        description: 'Blood drain universal monster ability, grab universal monster ability',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.blood_drain',
        value: 2,
        condition: {
          type: 'custom',
          description: 'When pinning an opponent (doubles blood drain damage)',
          params: {},
        },
        source: 'Exsanguinate',
      },
    ],
    activationMode: 'conditional',
    tags: ['blood drain', 'grapple', 'pin'],
  },
  {
    id: 'fear_eater',
    name: 'Fear Eater',
    description:
      'As a standard action, you can touch another creature to remove a fear effect from that creature. The fear effect then affects you for its remaining duration. If the fear effect affects its target differently depending on the subject, you suffer the most severe version of the effect. You cannot resist this transferred fear with saving throws, spell resistance, or other defenses.',
    shortDescription:
      'Touch another creature to transfer a fear effect from them to yourself for its remaining duration',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'iron_will' },
      { type: 'special', description: 'No immunity to fear effects' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fear', 'transfer', 'touch'],
  },
  {
    id: 'fearsome_spell_like_ability',
    name: 'Fearsome Spell-Like Ability',
    description:
      "Choose one of your spell-like abilities, subject to the restrictions below. You can use that ability as a fearsome spell-like ability three times per day (or less, if the ability is usable only once or twice per day). When a target takes damage from or fails its saving throw against your fearsome spell-like ability, that creature becomes shaken for a number of rounds equal to the spell-like ability's equivalent spell level. For a fearsome spell-like ability that doesn't allow a saving throw, the target must attempt a Will save (DC = the ability's normal DC) to avoid the shaken effect. If the ability already has the potential to make a creature shaken, the durations stack. This feat cannot make a creature frightened or panicked. You can only select a spell-like ability duplicating a spell with a level equal to or less than 1/2 your caster level (round down) – 2.",
    shortDescription:
      'Selected spell-like ability shakes targets for rounds equal to spell level; durations stack with existing shaken',
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [
      { type: 'caster_level', minimum: 6 },
      { type: 'special', description: 'Spell-like ability at caster level 6th or higher' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spell-like ability', 'monster feat', 'shaken', 'fear'],
  },
  {
    id: 'fleshwarper',
    name: 'Fleshwarper',
    description:
      'You can create fleshwarped creatures and fleshcraft grafts. Newly created fleshwarped creatures have average hit points for their Hit Dice. See the fleshwarping section in Horror Adventures for full rules.',
    shortDescription:
      'Craft fleshwarped creatures and fleshcraft grafts using alchemical techniques',
    source: 'Horror Adventures',
    types: ['item_creation'],
    prerequisites: [
      { type: 'skill', skillId: 'craft_alchemy', ranks: 5 },
      { type: 'skill', skillId: 'heal', ranks: 5 },
      { type: 'special', description: 'Evil alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['item creation', 'fleshwarping', 'alchemy', 'evil'],
  },
  {
    id: 'ghost_guide',
    name: 'Ghost Guide',
    description:
      'When you communicate with a ghost or haunt through adventuring, a spell such as call spirit, speak with haunt, or speak with dead, a seance, or a talking board, you gain a +2 bonus on Diplomacy and Sense Motive checks with that ghost or haunt. If you have more than 10 ranks in one of these skills, the bonus increases to +4. Goal: Put a number of ghosts, haunts, and similar undead to their final rest appropriate to your level. Completion Benefit: You retain the normal benefit and additionally increase your effective caster level by 2 for spells and abilities used to communicate with spirits.',
    shortDescription:
      '+2 (or +4 with 10+ ranks) Diplomacy/Sense Motive with ghosts/haunts during communication; completion bonus: +2 effective caster level for spirit communication',
    source: 'Horror Adventures',
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Must have encountered a ghost or haunt, or possess backgrounds: the Bones, the Died, the Raised Among the Dead, or The Dead One',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: 2,
        condition: {
          type: 'custom',
          description: 'When communicating with a ghost or haunt',
          params: {},
        },
        source: 'Ghost Guide',
      },
    ],
    activationMode: 'conditional',
    tags: ['story feat', 'ghost', 'haunt', 'spirit', 'diplomacy'],
  },
  {
    id: 'gruesome_shapechanger',
    name: 'Gruesome Shapechanger',
    description:
      'When you use a polymorph or change shape ability, your old form explodes in blood and viscera that congeals into difficult terrain and adds 5 to the Acrobatics DC in that area. Any creature that witnesses this transformation must succeed at a Fortitude save (DC = 10 + 1/2 your Hit Dice + your Constitution modifier) or become sickened for 1 minute. You must wait 1d4 rounds between uses of your change shape ability.',
    shortDescription:
      'Shapeshifting creates bloody difficult terrain, sickens witnesses (Fort save), and imposes a 1d4-round cooldown between changes',
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [{ type: 'special', description: 'Shapechanger subtype' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['shapechanger', 'polymorph', 'sickened'],
  },
  {
    id: 'horrific_gorging',
    name: 'Horrific Gorging',
    description:
      "As a full-round action, you can consume a dead, unconscious, paralyzed, or helpless humanoid creature that you could swallow whole. Doing so deals your bite attack's damage to the creature as a critical hit and triggers your swallow whole ability. Any creature within 30 feet that witnesses this must succeed at a Will save (DC = 10 + 1/2 your Hit Dice + your Charisma modifier) or become shaken for 1d4 rounds. This is a mind-affecting fear effect.",
    shortDescription:
      'Full-round action: consume a helpless humanoid as a critical bite + swallow whole; witnesses save or be shaken 1d4 rounds',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [
      {
        type: 'special',
        description: 'Bite attack, Large or larger size, swallow whole universal monster ability',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['swallow whole', 'bite', 'fear', 'monster'],
  },
  {
    id: 'incorporeal_intuition',
    name: 'Incorporeal Intuition',
    description:
      "You can detect incorporeal creatures that are hiding inside solid objects if they are adjacent to you, and you can attempt a Knowledge (religion) check with a –5 penalty to identify them and learn about their special powers and vulnerabilities. When you ready an action to attack an incorporeal creature as it emerges from a wall, it doesn't gain the cover bonus it would normally receive.",
    shortDescription:
      'Detect adjacent incorporeal creatures through walls; identify them with Knowledge (religion) –5; deny cover bonus on readied attacks as they emerge',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Psychic Sensitivity or ability to cast psychic spells; Spirit Sense feat',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['incorporeal', 'undead', 'detection', 'psychic'],
  },
  {
    id: 'intensified_spell_like_ability',
    name: 'Intensified Spell-Like Ability',
    description:
      "Choose one of your spell-like abilities, subject to the restrictions below. You can use that ability as an intensified spell-like ability three times per day (or less, if the ability is usable only once or twice per day). When intensified, the maximum number of the ability's damage dice increases by 5 levels. You can only select a spell-like ability duplicating a spell with a level equal to or less than 1/2 your caster level (round down) – 1.",
    shortDescription: 'Selected spell-like ability has maximum damage dice increased by 5 levels',
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [
      { type: 'caster_level', minimum: 4 },
      { type: 'special', description: 'Spell-like ability at caster level 4th or higher' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spell-like ability', 'monster feat', 'damage'],
  },
  {
    id: 'latching_horror',
    name: 'Latching Horror',
    description:
      'When you use your attach ability, the target must succeed at a Will save (DC = 10 + 1/2 your Hit Dice + your Constitution modifier) or become shaken while you remain attached. This is a mind-affecting fear effect.',
    shortDescription:
      'When you attach to a creature, it must save or be shaken while you remain attached',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Attach universal monster ability' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['attach', 'fear', 'shaken', 'monster'],
  },
  {
    id: 'lifeless_gaze',
    name: 'Lifeless Gaze',
    description:
      'You gain a +2 insight bonus on Will saving throws against emotion effects and a +2 insight bonus on Bluff checks. When a humanoid creature attempts to use a telepathic ability to read your mind, it becomes shaken for 2d4 rounds whether or not it succeeds. When a creature fails a Diplomacy check against you by 5 or more, it becomes shaken for 2d4 rounds.',
    shortDescription:
      '+2 insight on Will vs emotion, +2 insight Bluff; mind-readers become shaken 2d4 rounds; failed Diplomacy vs you by 5+ triggers shaken 2d4 rounds',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'iron_will' },
      { type: 'skill', skillId: 'bluff', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'saving_throws_vs_emotion',
        value: 2,
        source: 'Lifeless Gaze',
      },
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'skill.bluff',
        value: 2,
        source: 'Lifeless Gaze',
      },
    ],
    activationMode: 'passive',
    tags: ['insight', 'bluff', 'emotion', 'fear', 'telepathy'],
  },
  {
    id: 'lingering_spell_like_ability',
    name: 'Lingering Spell-Like Ability',
    description:
      "Choose one of your spell-like abilities, subject to the restrictions below. You can use that ability as a lingering spell-like ability three times per day (or less, if the ability is usable only once or twice per day). An instantaneous spell-like ability that affects an area persists until the beginning of its next turn. Creatures entering the area are subject to the spell-like ability's effects. You can only select a spell-like ability duplicating a spell with a level equal to or less than 1/2 your caster level (round down) – 1.",
    shortDescription:
      'Selected instantaneous area spell-like ability persists until start of next turn; creatures entering the area are affected',
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [
      { type: 'caster_level', minimum: 4 },
      { type: 'special', description: 'Spell-like ability at caster level 4th or higher' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spell-like ability', 'monster feat', 'area'],
  },
  {
    id: 'mutilating_ritualist',
    name: 'Mutilating Ritualist',
    description:
      "Once per ritual, you can use an immediate action to deal yourself 1d6 hit points of damage per 2 Hit Dice and 1d4 Constitution damage (or Charisma damage if you're undead) using a piercing or slashing weapon. This damage cannot be reduced or prevented and doesn't disrupt the ritual. Doing so allows you to roll twice for the next skill check made as part of a ritual casting and take the better result. If the ritual has the fear descriptor or is of the phantasm subschool, the DC of its saving throw increases by 1. Multiple characters using this feat can each apply it once per ritual, but the DC bonuses do not stack.",
    shortDescription:
      'Self-inflict irreducible damage during rituals to roll twice on next skill check and (vs fear/phantasm) increase save DC by 1',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 4 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 4 },
      { type: 'skill', skillId: 'spellcraft', ranks: 4 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ritual', 'pain', 'occult', 'self-harm'],
  },
  {
    id: 'profane_studies',
    name: 'Profane Studies',
    description:
      'You gain a +5 bonus on Knowledge (planes) checks involving evil outsiders. When you cast a summon monster spell to summon an evil outsider, your caster level is treated as 2 higher for the purpose of determining the duration of the spell.',
    shortDescription:
      '+5 Knowledge (planes) vs evil outsiders; caster level +2 for summon monster duration when summoning evil outsiders',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 4 },
      { type: 'special', description: 'Ability to cast a summon monster spell' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_planes',
        value: 5,
        condition: {
          type: 'custom',
          description: 'Checks involving evil outsiders',
          params: {},
        },
        source: 'Profane Studies',
      },
    ],
    activationMode: 'passive',
    tags: ['knowledge', 'planes', 'outsider', 'summoning', 'evil'],
  },
  {
    id: 'protector_of_the_people',
    name: 'Protector of the People',
    description:
      'You temporarily gain the Craft Construct feat without meeting its prerequisites, but only for the purpose of creating a single golem. This use of Craft Construct cannot be used as a prerequisite for any other feat. Goal: Create a golem of CR 5 or higher and donate it to your community for its defense. Completion Benefit: You permanently gain Craft Construct as a bonus feat without needing to meet its prerequisites, and the cost of any construct you craft that is less expensive than the donated golem is reduced by 10%.',
    shortDescription:
      'Temporarily gain Craft Construct to build one golem; completion: permanently gain Craft Construct and 10% cost reduction on cheaper constructs',
    source: 'Horror Adventures',
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Community facing persecution, or backgrounds: Raiders, Righting a Wrong, The War, or The Way Things Work',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['story feat', 'construct', 'golem', 'crafting', 'community'],
  },
  {
    id: 'purging_emesis',
    name: 'Purging Emesis',
    description:
      "As a full-round action that provokes attacks of opportunity, you can attempt a new saving throw against an ingested poison's initial effect. If successful, you become nauseated for 1 round but purge the poison from your body. The square you occupy becomes difficult terrain until someone cleans it (typically 1 round) or until it dries (typically 1 hour). You must wait at least 1 hour and consume food or drink before you can use this feat again.",
    shortDescription:
      'Full-round action: new save vs ingested poison; success purges it but causes 1 round nauseated and creates difficult terrain',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'great_fortitude' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['poison', 'save', 'nausea'],
  },
  {
    id: 'putrid_summons',
    name: 'Putrid Summons',
    description:
      "When you cast a summoning spell, you can choose to have a single summoned creature gain the stench universal monster ability. The creature is sickened for a number of rounds equal to the spell's level. When you use this feat, the summoned creature is summoned from the next lower version of the summoning spell.",
    shortDescription:
      'A summoned creature gains the stench ability but is drawn from the next lower summoning list',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'spell_focus_conjuration' },
      { type: 'special', description: "Ability to cast summon monster or summon nature's ally" },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'stench', 'conjuration'],
  },
  {
    id: 'reach_spell_like_ability',
    name: 'Reach Spell-Like Ability',
    description:
      "Choose one of your spell-like abilities, subject to the restrictions below. You can use that ability as a reach spell-like ability three times per day (or less, if the ability is usable only once or twice per day). When you use this ability, the ability's range increases: touch becomes close, close becomes medium, and medium becomes long. Melee touch attacks become ranged touch attacks. You can only select a spell-like ability duplicating a spell with a level equal to or less than 1/2 your caster level (round down) – 1.",
    shortDescription:
      'Selected touch/close/medium spell-like ability has its range increased one step (touch→close, close→medium, medium→long)',
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [
      { type: 'caster_level', minimum: 4 },
      { type: 'special', description: 'Spell-like ability at caster level 4th or higher' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spell-like ability', 'monster feat', 'range'],
  },
  {
    id: 'sacrificial_adept',
    name: 'Sacrificial Adept',
    description:
      'By performing a 10-minute ritual that ends in a successful coup de grace against a sentient creature with a number of Hit Dice equal to or greater than your level, you can enhance one spell you know or have prepared. Choose either a +2 bonus on attack rolls and combat maneuver checks made with the spell, or a +2 bonus on caster level checks to overcome spell resistance. This bonus applies for 24 hours and for all castings of the spell during that period. You can perform this ritual a number of times per day equal to your Charisma modifier, and each spell can benefit from only one enhancement at a time.',
    shortDescription:
      'Ritual coup de grace of a sentient creature: grant one prepared/known spell +2 attack/CMB or +2 CL vs SR for 24 hours',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 4 },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 4 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 4 },
      { type: 'skill', skillId: 'spellcraft', ranks: 4 },
      { type: 'special', description: 'Ability to cast 3rd-level spells; evil alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ritual', 'sacrifice', 'evil', 'spellcasting'],
  },
  {
    id: 'sacrificial_ritualist',
    name: 'Sacrificial Ritualist',
    description:
      "When you initiate an occult ritual by sacrificing either one creature with a number of Hit Dice equal to or greater than twice the ritual's effective level or multiple creatures whose total Hit Dice equal or exceed twice the ritual's effective level, you and all secondary casters gain a +4 bonus on all skill checks necessary to complete the occult ritual. These sacrifices are in addition to any other sacrificial components the ritual requires.",
    shortDescription:
      'Sacrifice creature(s) with HD ≥ 2× ritual level to grant all casters +4 on ritual skill checks',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'mutilating_ritualist' },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 4 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 4 },
      { type: 'skill', skillId: 'spellcraft', ranks: 4 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'ritual_skill_checks',
        value: 4,
        condition: {
          type: 'custom',
          description: 'When initiating a ritual with qualifying sacrifices',
          params: {},
        },
        source: 'Sacrificial Ritualist',
      },
    ],
    activationMode: 'conditional',
    tags: ['ritual', 'sacrifice', 'occult', 'evil'],
  },
  {
    id: 'scarring_spell_like_ability',
    name: 'Scarring Spell-Like Ability',
    description:
      'Choose one of your spell-like abilities with the emotion or fear descriptor, subject to the restrictions below. You can use that ability as a scarring spell-like ability three times per day (or less, if the ability is usable only once or twice per day). When a target fails its saving throw against your scarring spell-like ability, that target takes a –2 penalty on saving throws against emotion and fear effects you create and a –1 penalty on saving throws against other emotion and fear effects for the next 24 hours. Multiple applications of this effect do not stack. You can only select a spell-like ability duplicating a spell with a level equal to or less than 1/2 your caster level (round down) – 1.',
    shortDescription:
      'Selected emotion/fear spell-like ability imposes –2 on saves vs your emotion/fear effects and –1 vs others for 24 hours on failed save',
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [
      { type: 'caster_level', minimum: 4 },
      {
        type: 'special',
        description:
          'Spell-like ability at caster level 4th or higher with emotion or fear descriptor',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spell-like ability', 'monster feat', 'fear', 'emotion', 'penalty'],
  },
  {
    id: 'shatter_control',
    name: 'Shatter Control',
    description:
      'As a full-round action, you can make a melee attack or a ranged attack against a single undead creature within 30 feet of you, dealing normal damage on a hit. If the undead creature is being controlled by another creature using magic or an extraordinary ability and that controlling creature is within 120 feet, the controlling creature must succeed at a Will save (DC = 10 + 1/2 your level + your Charisma modifier) or lose control of the undead creature for 10 minutes. While no longer controlled, the undead attacks its former controller.',
    shortDescription:
      'Full-round attack vs undead: controller within 120 ft must save or lose control for 10 minutes; uncontrolled undead attacks its controller',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Channel positive energy 4d6' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['undead', 'control', 'channel energy', 'dispel'],
  },
  {
    id: 'sickening_spell_like_ability',
    name: 'Sickening Spell-Like Ability',
    description:
      "Choose one of your damaging spell-like abilities, subject to the restrictions below. You can use that ability as a sickening spell-like ability three times per day (or less, if the ability is usable only once or twice per day). When a target takes damage from your sickening spell-like ability and fails its saving throw, it becomes sickened for a number of rounds equal to the spell-like ability's equivalent spell level. For a sickening spell-like ability that doesn't allow a saving throw, the target must attempt a Fortitude save (DC = the ability's normal DC) to avoid being sickened. You can only select a spell-like ability duplicating a spell with a level equal to or less than 1/2 your caster level (round down) – 2.",
    shortDescription:
      'Selected damaging spell-like ability sickens targets that fail their save for rounds equal to spell level',
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [
      { type: 'caster_level', minimum: 6 },
      { type: 'special', description: 'Spell-like ability at caster level 6th or higher' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spell-like ability', 'monster feat', 'sickened'],
  },
  {
    id: 'skin_suit',
    name: 'Skin Suit',
    description:
      "Once per day, you can spend a full-round action to alter your appearance to look like a young adult humanoid, as per alter self (though this doesn't change your ability scores). While disguised, you can't use any natural attacks that are slashing or piercing (such as claws or bites) or deliver energy drain or ability damage or drain through natural attacks without ending the effect. This disguise also masks your alignment (as undetectable alignment) and causes you to register as living to detection effects. The disguise automatically ends at sundown. If you take lethal damage while disguised, you must succeed at a Reflex save (DC = damage taken) or the disguise is destroyed.",
    shortDescription:
      'Once/day, appear as living humanoid (alter self); masks alignment; ends at sundown or on failed Reflex save after taking lethal damage',
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 7 },
      { type: 'special', description: 'Undead creature that was originally humanoid' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['undead', 'disguise', 'alter self', 'monster'],
  },
  {
    id: 'spawnlink',
    name: 'Spawnlink',
    description:
      "As a full-round action, you can establish a sensory link with one of your spawn that is currently on your plane. While looking through your spawn's eyes, your body is blinded. You can communicate through your spawn if it has the ability to speak, using your own voice. Maintaining this link requires a standard action each round. If your linked spawn is reduced to 0 or fewer hit points, you are blinded and dazed for 1d6 rounds with no saving throw.",
    shortDescription:
      "Full-round action: see through a spawn's eyes (your body is blinded); if spawn drops to 0 HP you are blinded and dazed 1d6 rounds",
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'special', description: 'Create spawn monster ability' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spawn', 'undead', 'sensory link', 'monster'],
  },
  {
    id: 'spirit_speaker',
    name: 'Spirit Speaker',
    description:
      "You can communicate mentally with any spirit you have absorbed using Absorb Spirit, and you can attempt Diplomacy checks to improve the spirit's attitude, gaining a +4 bonus if you are a medium with the haunt channeler class feature. Once the spirit's attitude is indifferent or better, you can request information about what is needed to put it to rest. Each time you attempt a Diplomacy check using this ability to influence the spirit's attitude or make a request, you take 1 point of Wisdom damage that cannot be prevented, reduced, healed, or suppressed until you release the spirit.",
    shortDescription:
      'Communicate with absorbed spirits; Diplomacy to improve attitude; each Diplomacy check costs 1 Wis damage (irreducible until release)',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'feat', featId: 'absorb_spirit' },
      { type: 'skill', skillId: 'diplomacy', ranks: 5 },
      {
        type: 'special',
        description: 'Must have died at least once or been possessed by an undead creature',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spirit', 'ghost', 'diplomacy', 'undead'],
  },
  {
    id: 'stubborn_curse',
    name: 'Stubborn Curse',
    description:
      'When a creature attempts a caster level check to remove a curse effect you created, it must roll twice and take the worse result.',
    shortDescription:
      'Creatures attempting to remove your curse effects must roll the caster level check twice and take the worse result',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Ability to cast a spell or spell-like ability with the curse descriptor, or a special ability with a curse effect',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['curse', 'dispel', 'removal'],
  },
  {
    id: 'touch_of_evil',
    name: 'Touch of Evil',
    description:
      "As a standard action, you can expend three uses of your channel negative energy ability and make a melee touch attack. You can attempt a Sleight of Hand check opposed by the target's Perception to disguise this touch. On a successful hit, the target must succeed at a Will save (DC = 10 + 1/2 your character level + your Charisma modifier) or you implant a suggestion in its mind similar to a suggestion spell, except that the suggested course of action can be harmful or destructive to the target. If the suggestion involves a creature or object, the target waits 1d6+1 days before attempting to carry it out. The creature can attempt another Will save at the original DC right before doing so. If the creature fails this save, it gains a +4 circumstance bonus on one roll used to carry out the suggestion. The creature also takes 1 point of Wisdom damage per day until the suggestion is completed or resisted.",
    shortDescription:
      'Spend 3 channel negative energy uses: touch attack implants harmful suggestion (Will save); target suffers 1 Wis damage/day until acted upon or resisted',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Channel negative energy 6d6; evil alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['channel energy', 'suggestion', 'compulsion', 'evil'],
  },
  {
    id: 'traumatic_spell_like_ability',
    name: 'Traumatic Spell-Like Ability',
    description:
      "Choose one of your spell-like abilities with the emotion or fear descriptor, subject to the restrictions below. You can use that ability as a traumatic spell-like ability three times per day (or less, if the ability is usable only once or twice per day). When a target fails its saving throw against your traumatic spell-like ability, the next time it sleeps it must succeed at a Will save (DC = the ability's normal DC) or suffer the effects of a nightmare spell. If it fails this saving throw, it must attempt another the following night at a DC 2 lower, and so on until it succeeds. Creatures that succeed at their saving throw against the original ability are not affected. You can only select a spell-like ability duplicating a spell with a level equal to or less than 1/2 your caster level (round down) – 2.",
    shortDescription:
      'Selected emotion/fear spell-like ability: on failed save, target must save each sleep or suffer nightmare; DC drops by 2 on each success',
    source: 'Horror Adventures',
    types: ['monster'],
    prerequisites: [
      { type: 'caster_level', minimum: 6 },
      {
        type: 'special',
        description:
          'Spell-like ability at caster level 6th or higher with emotion or fear descriptor',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spell-like ability', 'monster feat', 'fear', 'nightmare'],
  },
  {
    id: 'twisted_love',
    name: 'Twisted Love',
    description:
      'You gain a +2 bonus on saving throws against enchantment effects and a +2 bonus on Bluff and Diplomacy checks to influence your pursuer or her minions. Goal: Break the heart of your pursuer in a dramatic and significant manner. Completion Benefit: You retain the bonus on saving throws against enchantment effects, and if you succeed at a Will save against such an effect, the caster does not learn that you succeeded.',
    shortDescription:
      '+2 saves vs enchantments, +2 Bluff/Diplomacy vs pursuer; completion: successful enchantment saves are not revealed to the caster',
    source: 'Horror Adventures',
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'You must resemble a lost loved one of a challenging evil creature, close enough to be mistaken as its reincarnation or reborn form',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'saving_throws_vs_enchantment',
        value: 2,
        source: 'Twisted Love',
      },
    ],
    activationMode: 'passive',
    tags: ['story feat', 'enchantment', 'bluff', 'diplomacy'],
  },
  {
    id: 'unyielding_ferocity',
    name: 'Unyielding Ferocity',
    description:
      "When you are reduced to 0 or fewer hit points but remain conscious through your ferocity ability, you can make a full attack on your next turn (or on your current turn, if you are brought below 0 hit points during your own turn). However, you can't use Charisma-, Dexterity-, or Intelligence-based skills other than Acrobatics, Fly, Intimidate, and Ride, and you can't use any ability that requires patience or concentration, including spellcasting, until you have more than 0 hit points.",
    shortDescription:
      'While conscious via ferocity at 0 HP, make a full attack; but lose most Cha/Dex/Int skills and concentration-based abilities until above 0 HP',
    source: 'Horror Adventures',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 19 },
      { type: 'special', description: 'Ferocity monster ability' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ferocity', 'rage', 'full attack', 'monster'],
  },
  {
    id: 'zealous_mind',
    name: 'Zealous Mind',
    description:
      'When you are affected by charm or compulsion magic from a chaotic source or from a creature of an alignment that is the opposite of yours on the good-evil axis, you gain a +2 bonus on saving throws and on opposed Charisma checks to resist or end those effects. This bonus stacks with the bonus from Unimpeachable Honor.',
    shortDescription:
      '+2 saves and opposed Cha checks vs charm/compulsion from chaotic sources or alignment-opposite creatures; stacks with Unimpeachable Honor',
    source: 'Horror Adventures',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'iron_will' },
      { type: 'feat', featId: 'unimpeachable_honor' },
      { type: 'special', description: 'Lawful alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'saving_throws_vs_charm_compulsion',
        value: 2,
        condition: {
          type: 'custom',
          description:
            'Against charm or compulsion from chaotic sources or alignment-opposite creatures',
          params: {},
        },
        source: 'Zealous Mind',
      },
    ],
    activationMode: 'conditional',
    tags: ['lawful', 'charm', 'compulsion', 'will'],
  },
];
