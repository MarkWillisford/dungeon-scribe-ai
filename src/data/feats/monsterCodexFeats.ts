import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const MONSTER_CODEX_FEATS: FeatDefinition[] = [
  {
    id: 'ancestral_enmity',
    name: 'Ancestral Enmity',
    types: ['combat'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description: 'You gain a +2 bonus on melee attack rolls against dwarves and gnomes.',
    shortDescription: '+2 on melee attacks against dwarves and gnomes.',
    prerequisites: [{ type: 'special', description: 'Giant subtype' }],
    effects: [
      {
        type: 'bonus',
        target: 'attack',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Ancestral Enmity',
        condition: {
          type: 'custom',
          description: 'when attacking dwarves or gnomes in melee',
          params: {},
        },
      },
    ],
  },
  {
    id: 'angelbane_strike',
    name: 'Angelbane Strike',
    types: ['combat'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'When using Channel Smite against living good-aligned creatures, treat all 1s on the channel smite damage dice as 2s. Against good outsiders or divine casters serving good deities, you are considered 2 levels higher when determining how many channel energy damage dice you roll.',
    shortDescription:
      'Enhance Channel Smite against good-aligned foes, treating 1s as 2s and gaining extra dice vs. good outsiders.',
    prerequisites: [
      { type: 'feat', featId: 'channel_smite' },
      { type: 'special', description: 'Divine caster level 5th' },
      { type: 'special', description: 'Channel negative energy class feature' },
      { type: 'special', description: 'Demon lord patron deity' },
    ],
    effects: [],
  },
  {
    id: 'awesome_charge',
    name: 'Awesome Charge',
    types: ['combat'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'When you hit your opponent with a charge attack, you can attempt an awesome blow combat maneuver against that opponent as a free action.',
    shortDescription: 'Attempt an awesome blow as a free action after hitting with a charge.',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 25 },
      { type: 'feat', featId: 'awesome_blow' },
      { type: 'feat', featId: 'improved_bull_rush' },
      { type: 'feat', featId: 'power_attack' },
    ],
    effects: [],
  },
  {
    id: 'bag_of_bones',
    name: 'Bag of Bones',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'passive',
    description:
      'You are treated as one size category smaller when calculating squeeze penalties and receive a +5 competence bonus on Escape Artist checks. If you have 10 or more Hit Dice, the bonus increases to +9.',
    shortDescription:
      'Count as one size smaller for squeezing; +5 competence bonus on Escape Artist checks.',
    prerequisites: [{ type: 'special', description: 'Ghoul' }],
    effects: [
      {
        type: 'bonus',
        target: 'skill_escape_artist',
        value: 5,
        bonusType: BonusType.COMPETENCE,
        source: 'Bag of Bones',
        condition: {
          type: 'custom',
          description: 'always',
          params: {},
        },
      },
    ],
  },
  {
    id: 'blood_tide',
    name: 'Blood Tide',
    types: ['combat'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'When you are in blood frenzy, instead of making your regular attacks, you can make one melee attack at your highest base attack bonus against each bleeding or wounded opponent within reach. You must use natural weapons, and you must make a separate attack roll for each opponent. You can use different natural weapons against different targets. When using Blood Tide, you forfeit any extra attacks granted by other feats, spells, or abilities.',
    shortDescription:
      'While in blood frenzy, attack each bleeding foe within reach once at highest BAB.',
    prerequisites: [
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'greater_blood_frenzy' },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Blood frenzy ability' },
      { type: 'special', description: 'Sahuagin' },
    ],
    effects: [],
  },
  {
    id: 'born_of_frost',
    name: 'Born of Frost',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'passive',
    description:
      'Your natural weapons and unarmed strikes deal an additional 1d6 points of cold damage. Creatures that strike you with natural weapons or unarmed strikes take 1 point of cold damage.',
    shortDescription:
      'Natural attacks deal +1d6 cold damage; attackers using natural weapons take 1 cold damage.',
    prerequisites: [{ type: 'special', description: 'Frost giant' }],
    effects: [],
  },
  {
    id: 'chilled_rock',
    name: 'Chilled Rock',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'passive',
    description:
      'You transfer the cold of your body to the rocks you throw. When you throw rocks using the rock throwing ability, they deal an additional 1d6 points of cold damage.',
    shortDescription: 'Thrown rocks deal an additional 1d6 cold damage.',
    prerequisites: [
      { type: 'feat', featId: 'born_of_frost' },
      { type: 'special', description: 'Frost giant' },
    ],
    effects: [],
  },
  {
    id: 'cleaving_sweep',
    name: 'Cleaving Sweep',
    types: ['combat'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'When you use a full-attack action with a two-handed weapon, you can attempt a trip combat maneuver at your highest base attack bonus against each opponent within reach instead of making your regular attacks. You must make a separate maneuver check for each target.',
    shortDescription:
      'When making a full attack with a two-handed weapon, attempt a trip against each opponent within reach.',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'cleave' },
      { type: 'feat', featId: 'improved_trip' },
      { type: 'feat', featId: 'weapon_focus_greataxe' },
      { type: 'bab', minimum: 11 },
    ],
    effects: [],
  },
  {
    id: 'coordinated_reposition',
    name: 'Coordinated Reposition',
    types: ['teamwork'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'You are skilled in coordinating combat positioning with your allies. When an ally who also has this feat and threatens the same creature as you takes a 5-foot step, you may use an immediate action to move 5 feet without provoking attacks of opportunity.',
    shortDescription:
      'When a teamwork ally takes a 5-foot step near a shared foe, move 5 feet as an immediate action.',
    prerequisites: [{ type: 'feat', featId: 'step_up' }],
    effects: [],
  },
  {
    id: 'corpse_companion',
    name: 'Corpse Companion',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'passive',
    description:
      'Your animal companion becomes an undead creature. It retains its Hit Dice, base attack bonus, saving throws, skills, and tricks, but loses its Constitution score and gains a Charisma of 12. If the undead companion is destroyed, any replacement animal companion also becomes undead with the same modifications.',
    shortDescription:
      'Transform your animal companion into an undead creature with modified statistics.',
    prerequisites: [
      { type: 'special', description: 'Animal companion class feature' },
      { type: 'special', description: 'Ghoul' },
    ],
    effects: [],
  },
  {
    id: 'corrupted_flesh',
    name: 'Corrupted Flesh',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'passive',
    description:
      'You have sickened, rotting flesh from some deformity or vestigial limb that has turned fetid and necrotic, yet refuses to heal or fall off. You gain the stench special ability with a DC of 10 + 1/2 your HD + your Constitution modifier.',
    shortDescription: 'Gain the stench special ability from your rotting flesh.',
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 15 },
      { type: 'special', description: '6 Hit Dice' },
      { type: 'special', description: 'Ogre' },
    ],
    effects: [],
  },
  {
    id: 'extra_croaking',
    name: 'Extra Croaking',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'passive',
    description:
      'You gain one extra use of terrifying croak per hour. If your recharge time is less than 1 hour, you instead gain an extra use each time the ability recharges.',
    shortDescription: 'Gain one extra use of terrifying croak per hour (or per recharge).',
    prerequisites: [
      { type: 'special', description: 'Boggard' },
      { type: 'special', description: 'Terrifying croak ability' },
    ],
    effects: [],
  },
  {
    id: 'fetid_breath',
    name: 'Fetid Breath',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'You can exhale a 30-foot cone of vile-smelling, moist air mixed with phlegm and remnants of old meals. Creatures in the area must succeed at a Fortitude save (DC = 10 + 1/2 HD + Constitution modifier) or become nauseated for 1d6 minutes. Affected creatures can spend a full-round action to attempt another save to end the effect. You can use this breath weapon twice per day, plus one additional use per day for every 6 Hit Dice beyond the initial 6.',
    shortDescription:
      'Exhale a 30-ft. cone; creatures that fail a Fortitude save are nauseated for 1d6 minutes.',
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 15 },
      { type: 'feat', featId: 'corrupted_flesh' },
      { type: 'special', description: '6 Hit Dice' },
      { type: 'special', description: 'Ogre' },
    ],
    effects: [],
  },
  {
    id: 'gluttonous_gobbler',
    name: 'Gluttonous Gobbler',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'When you begin your turn grappling a creature at least two size categories smaller than you, you may use a move action to place the grappled creature into your mouth and attempt another grapple combat maneuver check to pin it. On a success, you may swallow the opponent using your swallow whole special ability.',
    shortDescription:
      'While grappling a much smaller creature, use a move action to attempt to swallow it whole.',
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Improved Grapple feat or grab ability' },
      { type: 'special', description: 'Ogre of size Large or larger' },
    ],
    effects: [],
  },
  {
    id: 'gnawer',
    name: 'Gnawer',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'passive',
    description:
      'Your bite attack ignores hardness equal to 3 plus half your character level. As a full-round action, you can deal double your bite damage to unattended inanimate objects. If you also have the Burrowing Teeth feat, you can burrow through solid stone at a speed of 5 feet per 10 minutes.',
    shortDescription:
      'Bite ignores hardness; deal double bite damage to inanimate objects as a full-round action.',
    prerequisites: [
      { type: 'feat', featId: 'sharptooth' },
      { type: 'special', description: 'Ratfolk' },
    ],
    effects: [],
  },
  {
    id: 'gray_dwarf_magic',
    name: 'Gray Dwarf Magic',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'passive',
    description:
      'Choose one spell-like ability that is usable once per day and is granted by a duergar racial trait you do not have. You can use this ability once per day with a caster level equal to your character level.',
    shortDescription:
      'Gain one once-per-day spell-like ability from a duergar racial trait you lack.',
    prerequisites: [{ type: 'special', description: 'Duergar' }],
    effects: [],
  },
  {
    id: 'great_rend',
    name: 'Great Rend',
    types: ['combat'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'If you are able to use your rend ability on the same turn that you also succeed at a bite attack, your rend deals an amount of additional damage equal to half your Strength modifier.',
    shortDescription:
      'When you rend and bite on the same turn, rend deals +1/2 Strength modifier damage.',
    prerequisites: [
      { type: 'special', description: 'Bite attack' },
      { type: 'special', description: 'Rend ability' },
      { type: 'special', description: 'Troll' },
    ],
    effects: [],
  },
  {
    id: 'horn_rider',
    name: 'Horn Rider',
    types: ['combat'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'You gain a +1 shield bonus to AC when lashed into a horn harness. You may select Mounted Archery without needing 1 rank in Ride or the Mounted Combat feat.',
    shortDescription:
      '+1 shield bonus to AC while lashed in a horn harness; qualify for Mounted Archery without Ride ranks.',
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [
      {
        type: 'bonus',
        target: 'ac',
        value: 1,
        bonusType: BonusType.SHIELD,
        source: 'Horn Rider',
        condition: {
          type: 'custom',
          description: 'while lashed into a horn harness',
          params: {},
        },
      },
    ],
  },
  {
    id: 'horn_riders_charge',
    name: "Horn Rider's Charge",
    types: ['combat'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'Whenever you are lashed into a horn harness and you ready an action to make a melee attack against the target of a charge made by the creature you are lashed to, you gain the attack bonus for charging and your attack deals double damage (or triple damage with a lance). This benefit does not stack with Spirited Charge.',
    shortDescription:
      "When lashed in a horn harness and readying against your mount's charge target, gain charge bonus and deal double (or triple with lance) damage.",
    prerequisites: [
      { type: 'feat', featId: 'horn_rider' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
  },
  {
    id: 'hurtful',
    name: 'Hurtful',
    types: ['combat'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'When you successfully demoralize an opponent within your melee reach with an Intimidate check, you can make a single melee attack against that creature as a swift action. If your attack fails to damage the target, its shaken condition from being demoralized immediately ends.',
    shortDescription:
      'After demoralizing a foe within reach, make one melee attack against it as a swift action.',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
    ],
    effects: [],
  },
  {
    id: 'icy_stare',
    name: 'Icy Stare',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'As a standard action, you can direct your icy stare against a single creature or object within 10 feet. The target must make a Fortitude save (DC = 10 + 1/2 HD + Charisma modifier) or take 1d6 cold damage. Objects cannot save. A creature that takes damage must also succeed at a Fortitude save or suffer 1 point of Strength damage. This feat does not grant an actual gaze attack — foes and allies are not in danger simply by meeting your gaze.',
    shortDescription:
      'Standard action: target within 10 ft. takes 1d6 cold damage (Fort negates) and possibly 1 Str damage.',
    prerequisites: [
      { type: 'feat', featId: 'born_of_frost' },
      { type: 'special', description: 'Frost giant' },
    ],
    effects: [],
  },
  {
    id: 'innate_arcana',
    name: 'Innate Arcana',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'You can expend two arcane spell slots or prepared spells to cast one of your racial spell-like abilities. Each expended spell must be of equal or higher level than the sorcerer/wizard spell equivalent of the targeted racial ability.',
    shortDescription:
      'Expend two arcane spell slots to cast one of your racial spell-like abilities.',
    prerequisites: [
      { type: 'special', description: 'Arcane spellcaster' },
      { type: 'special', description: 'Caster level 4th' },
      { type: 'special', description: 'Serpentfolk' },
    ],
    effects: [],
  },
  {
    id: 'innate_flexibility',
    name: 'Innate Flexibility',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'passive',
    description:
      'You gain a number of additional uses of your once-per-day racial spell-like abilities equal to the number of such abilities you have. These extra uses can be distributed among any combination of qualifying abilities. This feat counts both standard duergar spell-like abilities and those granted by duergar racial traits. You can take this feat multiple times. Its effects stack.',
    shortDescription:
      'Gain extra daily uses of once-per-day racial spell-like abilities equal to how many you possess.',
    prerequisites: [
      { type: 'special', description: 'Duergar' },
      { type: 'special', description: 'Two racial spell-like abilities usable once per day' },
    ],
    effects: [],
  },
  {
    id: 'mighty_bite',
    name: 'Mighty Bite',
    types: ['combat'],
    source: 'Monster Codex',
    activationMode: 'conditional',
    description:
      'When you successfully damage an opponent with your rend ability, the critical threat range of your bite attack becomes 18-20 until the start of your next turn. This benefit does not stack with other effects that increase the critical threat range of your bite, such as the keen weapon ability or the Improved Critical feat.',
    shortDescription:
      'After a successful rend, your bite critical threat range becomes 18-20 until your next turn.',
    prerequisites: [
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Bite attack' },
      { type: 'special', description: 'Rend ability' },
      { type: 'special', description: 'Troll' },
    ],
    effects: [],
  },
  {
    id: 'motivated_march',
    name: 'Motivated March',
    types: ['general'],
    source: 'Monster Codex',
    activationMode: 'passive',
    description:
      'You and a number of allies up to 10 times your character level reduce the amount of nonlethal damage taken as a result of a forced march by half. Additionally, affected creatures may delay the fatigued effect of a forced march for a number of hours equal to your Charisma modifier (minimum 1). Those who delay the effect become exhausted instead of fatigued when it takes effect.',
    shortDescription:
      'Allies suffer half nonlethal damage from forced marches and can delay fatigue by Cha mod hours (becoming exhausted instead).',
    prerequisites: [],
    effects: [],
  },
];

// CHECKPOINT: last_written=motivated_march, written=25/25, status=complete
