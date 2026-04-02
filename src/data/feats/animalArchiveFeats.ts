import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const ANIMAL_ARCHIVE_FEATS: FeatDefinition[] = [
  // Boon Companion skipped — already in ultimateWilderness.ts (reprint)
  {
    id: 'critical_conduit',
    name: 'Critical Conduit',
    description:
      'When delivering a touch spell for your master, the critical threat range of your touch attack is doubled. This feat does not stack with Improved Critical or other effects that increase critical threat range.',
    shortDescription: 'Double critical threat range when delivering touch spells for your master.',
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'deliver touch spells' },
      { type: 'special', description: 'Familiar' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Critical Conduit',
      },
    ],
    activationMode: 'passive',
    tags: ['familiar', 'touch spell', 'critical hit'],
  },
  {
    id: 'extra_item_slot',
    name: 'Extra Item Slot',
    description:
      'Choose one magic item slot not normally available to creatures of your body type. You can now use magic items in that slot. You can take this feat multiple times, selecting a different slot each time.',
    shortDescription: 'Gain access to one extra magic item slot not normally available to your body type.',
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Non-humanoid body shape' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Extra Item Slot',
      },
    ],
    activationMode: 'passive',
    tags: ['animal companion', 'familiar', 'magic item', 'slot'],
  },
  {
    id: 'familiar_focus_aa',
    name: 'Familiar Focus',
    description:
      "Whenever your master targets you with a harmless spell or spell-like ability, your master's effective caster level for the effect is increased by 1.",
    shortDescription: "+1 to master's caster level on harmless spells targeting you.",
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Familiar' }],
    effects: [
      {
        type: 'special',
        value: 1,
        bonusType: BonusType.UNTYPED,
        target: 'caster_level',
        source: 'Familiar Focus',
      },
    ],
    activationMode: 'passive',
    tags: ['familiar', 'caster level', 'spellcasting'],
  },
  {
    id: 'familiar_spell_aa',
    name: 'Familiar Spell',
    description:
      "You can transfer prepared spells to your familiar for later casting. Variables that rely on caster level function according to your caster level, not your familiar's Hit Dice. Your familiar needs the ability to speak to cast spells with verbal components and must carry material/focus components. A familiar spell occupies a spell slot 3 levels higher than the actual spell level. Your familiar can store spell levels equal to your caster level total, with no individual spell's adjusted level exceeding half your caster level.",
    shortDescription: 'Transfer spells to your familiar for later casting (+3 spell level).',
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['metamagic'],
    prerequisites: [{ type: 'special', description: 'Spellcaster with familiar class feature' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Familiar Spell',
      },
    ],
    activationMode: 'conditional',
    tags: ['familiar', 'metamagic', 'spellcasting'],
  },
  {
    id: 'jumper',
    name: 'Jumper',
    description:
      'You always count as having a running start when making jump checks using Acrobatics. Acrobatics becomes a class skill for you.',
    shortDescription: 'Always count as having running start for jumps; Acrobatics is a class skill.',
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'acrobatics', ranks: 1 },
      { type: 'special', description: 'Creature type other than humanoid or outsider' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Jumper',
      },
    ],
    activationMode: 'passive',
    tags: ['animal companion', 'jump', 'acrobatics'],
  },
  {
    id: 'lithe_attacker',
    name: 'Lithe Attacker',
    description:
      'You can attack from nooks and crannies, even while using Escape Artist to squeeze through or into a narrow space less than half as wide as your normal space, and you do not lose your Dexterity bonus to AC while using Escape Artist to squeeze. You still take a -4 penalty to AC while squeezing.',
    shortDescription: 'Attack while squeezing without losing DEX to AC.',
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'narrow_frame' },
      { type: 'skill', skillId: 'escape_artist', ranks: 5 },
      { type: 'special', description: 'Animal or magical beast' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Lithe Attacker',
      },
    ],
    activationMode: 'conditional',
    tags: ['animal companion', 'squeeze', 'escape artist'],
  },
  {
    id: 'master_of_your_kind',
    name: 'Master of Your Kind',
    description:
      "Your master gains a +2 bonus on Handle Animal checks with animals of your kind. You can use animal messenger, animal trance, or charm animal once daily as a spell-like ability (one total use, not per ability), limited to your own species, using your master's caster level and your Charisma modifier. Your master can grant an extra daily use by sacrificing a prepared spell or slot of equal or higher level as a standard action.",
    shortDescription: "+2 Handle Animal for master; gain daily SLAs for your species.",
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Familiar' },
      { type: 'class_feature', featureName: 'speak with animals of its kind' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'handle_animal',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Master of Your Kind',
      },
    ],
    activationMode: 'passive',
    tags: ['familiar', 'handle animal', 'spell-like ability'],
  },
  {
    id: 'narrow_frame',
    name: 'Narrow Frame',
    description:
      'You do not take penalties on your attack rolls or to your AC for squeezing through a narrow space that is at least half as wide as your normal space, though each move into or through a narrow space still counts as if it were 2 squares.',
    shortDescription: 'No attack or AC penalties when squeezing through half-width spaces.',
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'escape_artist', ranks: 1 },
      { type: 'special', description: 'Animal or magical beast' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Narrow Frame',
      },
    ],
    activationMode: 'passive',
    tags: ['animal companion', 'squeeze', 'dungeon'],
  },
  {
    id: 'spell_sponge',
    name: 'Spell Sponge',
    description:
      "Whenever your master targets you with a harmless spell with a target of 'you,' the spell's duration is doubled as if modified by the Extend Spell metamagic feat. This does not affect spells with a duration of concentration, instantaneous, or permanent, or spells already modified by Extend Spell.",
    shortDescription: "Harmless spells from your master targeting you have doubled duration.",
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Animal companion or familiar' },
      { type: 'class_feature', featureName: 'share spells' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Spell Sponge',
      },
    ],
    activationMode: 'passive',
    tags: ['animal companion', 'familiar', 'spell duration', 'extend'],
  },
  {
    id: 'stable_gallop',
    name: 'Stable Gallop',
    description:
      'Your AC penalty when charging is reduced by half. Penalties on ranged attacks made by your rider are decreased by 1 with a double move or by 2 when running (minimum 0). Your rider gains a +4 bonus on concentration checks affected by your motion.',
    shortDescription: 'Reduce charge AC penalty; improve rider ranged attacks and concentration.',
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Animal or magical beast' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Stable Gallop',
      },
    ],
    activationMode: 'passive',
    tags: ['mount', 'animal companion', 'charge', 'rider'],
  },
  {
    id: 'sure_footed_aa',
    name: 'Sure-Footed',
    description:
      'You receive a +2 bonus on Acrobatics checks for balance and Reflex saves against falling. You move on steep slopes and stairs at normal speed without risk of falling when running or charging downhill.',
    shortDescription: '+2 Acrobatics (balance) and Reflex vs. falling; normal speed on slopes.',
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Quadruped animal or magical beast' }],
    effects: [
      {
        type: 'bonus',
        target: 'acrobatics',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Sure-Footed',
      },
      {
        type: 'bonus',
        target: 'reflex',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Sure-Footed',
      },
    ],
    activationMode: 'passive',
    tags: ['animal companion', 'mount', 'balance', 'quadruped'],
  },
  {
    id: 'valiant_steed',
    name: 'Valiant Steed',
    description:
      'You gain a +4 morale bonus on saves against fear and emotion effects. If you serve as a mount, your rider gains a +4 morale bonus on Handle Animal, Ride, and wild empathy checks when forcing you within range of creatures with the unnatural aura ability. The normal +2 DC penalty for pushing a wounded animal does not apply to you.',
    shortDescription: '+4 morale on fear/emotion saves; rider bonus near unnatural aura creatures.',
    source: 'Pathfinder Player Companion: Animal Archive',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Animal or magical beast' }],
    effects: [
      {
        type: 'bonus',
        target: 'fear',
        value: 4,
        bonusType: BonusType.MORALE,
        source: 'Valiant Steed',
      },
    ],
    activationMode: 'passive',
    tags: ['mount', 'animal companion', 'fear', 'morale'],
  },
];
