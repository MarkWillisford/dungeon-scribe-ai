import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const ISWG_FEATS_2: FeatDefinition[] = [
  // rugged_northerner — already in adventurersGuideFeats2.ts (same mechanics: cold condition downgrade)

  {
    id: 'secret_signs',
    name: 'Secret Signs',
    types: ['general'],
    source: 'Inner Sea World Guide',
    verificationStatus: 'needs_review' as const,
    description:
      'You gain a +4 bonus on Bluff checks made to pass secret messages. Additionally, observers must succeed at a Perception check opposed by your Sleight of Hand check to notice you casting a spell with only somatic components, and Spellcraft checks to identify your spells that have somatic components take a -2 penalty.',
    shortDescription: '+4 Bluff to pass secret messages; somatic spellcasting harder to notice',
    prerequisites: [{ type: 'ability_score', ability: 'INT', minimum: 13 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: 4,
        source: 'Secret Signs',
        condition: {
          type: 'custom',
          description: 'When making Bluff checks to pass secret messages',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['bluff', 'stealth', 'social', 'spellcasting'],
  },

  {
    id: 'shade_of_the_uskwood',
    name: 'Shade of the Uskwood',
    types: ['general'],
    source: 'Inner Sea World Guide',
    verificationStatus: 'needs_review' as const,
    description:
      'You are ordained as one of the albino druids of the Uskwood and carry an Umbrae-Token — a potent effigy of hair, twigs, and blood treated as a wooden unholy symbol that radiates faint necromancy magic. The following spells are added to your druid spell list: 0th (disrupt undead, ray of frost); 1st (ghost sound, touch of fatigue); 2nd (chill touch, spectral hand); 3rd (ghoul touch, invisibility); 4th (displacement, ray of exhaustion); 5th (animate dead, phantasmal killer); 6th (nightmare, waves of fatigue); 7th (circle of death, shadow walk); 8th (mass invisibility, waves of exhaustion); 9th (horrid wilting, weird). All fire descriptor spells are removed from all of your spell lists; you cannot cast fire spells or activate them from magic devices, and you cannot wild shape into fire subtype creatures. If your Umbrae-Token is destroyed, all benefits of this feat cease until you travel to the Uskwood and receive an atonement spell from a fellow Zon-Kuthon worshiper who creates you a new token.',
    shortDescription: 'Gain necromancy/cold druid spells and Umbrae-Token; lose all fire spells',
    prerequisites: [
      { type: 'special', description: 'Neutral evil alignment' },
      { type: 'special', description: 'Patron deity must be Zon-Kuthon' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['druid', 'zon-kuthon', 'necromancy', 'cold', 'uskwood', 'story'],
  },

  {
    id: 'shrewd_tactician',
    name: 'Shrewd Tactician',
    types: ['combat'],
    source: 'Inner Sea World Guide',
    verificationStatus: 'needs_review' as const,
    description:
      "Your experience dealing with pirates, thieves, and assassins has made you exceptionally cautious. Opponents do not gain the standard +2 bonus on attack rolls for flanking you, though they can still use flanking to qualify for and use sneak attacks against you. You also gain a +3 bonus on Sense Motive checks when resisting an opponent's Bluff check to feint in combat.",
    shortDescription: 'Deny flanking attack bonus; +3 Sense Motive vs feint attempts',
    prerequisites: [
      { type: 'feat', featId: 'alertness' },
      { type: 'feat', featId: 'combat_reflexes' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: 3,
        source: 'Shrewd Tactician',
        condition: {
          type: 'custom',
          description: "When resisting an opponent's Bluff check to feint in combat",
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['flanking', 'sense_motive', 'feint', 'defensive'],
  },

  {
    id: 'stoic',
    name: 'Stoic',
    types: ['general'],
    source: 'Inner Sea World Guide',
    verificationStatus: 'needs_review' as const,
    description:
      'A series of unforgiving trials has taught you that fear can be overcome through experience. You gain a +1 bonus on all saving throws made against fear effects. Upon successfully saving against any fear effect, you become immune to further fear effects from that same source for 24 hours.',
    shortDescription: '+1 on saves vs fear; immune to that fear source for 24h after saving',
    prerequisites: [{ type: 'feat', featId: 'iron_will' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 1,
        source: 'Stoic',
        condition: {
          type: 'custom',
          description: 'Against fear effects',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['fear', 'saving_throw', 'will', 'morale'],
  },

  // storm_lashed — already in adventurersGuideFeats3.ts (same mechanics)

  {
    id: 'survivor',
    name: 'Survivor',
    types: ['general'],
    source: 'Inner Sea World Guide',
    verificationStatus: 'needs_review' as const,
    description:
      'Only the strong thrive in your homeland, and you are no weakling, even among your kin. You gain a +5 bonus on Constitution checks made to stabilize while dying. Once per day, you can spend an immediate action to negate the additional damage dealt by a critical hit or sneak attack against you, reducing it to normal damage.',
    shortDescription: '+5 to stabilize; once/day negate crit or sneak attack extra damage',
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'feat', featId: 'diehard' },
      { type: 'feat', featId: 'endurance' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.constitution_check_stabilize',
        value: 5,
        source: 'Survivor',
        condition: {
          type: 'custom',
          description: 'When making Constitution checks to stabilize while dying',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['stabilize', 'dying', 'critical_hit', 'sneak_attack', 'defensive'],
  },

  {
    id: 'taldan_duelist',
    name: 'Taldan Duelist',
    types: ['combat'],
    source: 'Inner Sea World Guide',
    verificationStatus: 'needs_review' as const,
    description:
      'You are trained in rondelero, the Taldan technique of fighting with a falcata and buckler. When fighting with a falcata and a buckler, your shield bonus to AC increases by +1 and you gain a +2 bonus on Acrobatics checks.',
    shortDescription: '+1 shield bonus with falcata and buckler; +2 Acrobatics',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'special', description: 'Exotic Weapon Proficiency (falcata)' },
      { type: 'special', description: 'Shield Proficiency (buckler)' },
      { type: 'special', description: 'Weapon Focus (falcata)' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SHIELD,
        target: 'ac',
        value: 1,
        source: 'Taldan Duelist',
        condition: {
          type: 'custom',
          description: 'When fighting with a falcata and a buckler',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.acrobatics',
        value: 2,
        source: 'Taldan Duelist',
        condition: {
          type: 'custom',
          description: 'When fighting with a falcata and a buckler',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['falcata', 'buckler', 'taldan', 'shield', 'acrobatics', 'rondelero'],
  },

  {
    id: 'totem_spirit',
    name: 'Totem Spirit',
    types: ['general'],
    source: 'Inner Sea World Guide',
    verificationStatus: 'needs_review' as const,
    description:
      "You are mystically tied to your tribe's sacred totem. The benefit you gain depends on your Shoanti tribe: Lyrune-Quah (Moon Clan) — +1 bonus on Will saves and a +2 bonus on Perception checks; Shadde-Quah (Axe Clan) — rage for 3 additional rounds per day (if you have the rage ability) and a +2 bonus on Intimidate checks; Shriikirri-Quah (Hawk Clan) — +2 bonus on Initiative checks and a +2 bonus on Ride checks; Shundar-Quah (Spire Clan) — +1 bonus on Fortitude saves and a +2 bonus on Perception checks; Sklar-Quah (Sun Clan) — +1 bonus on Reflex saves and a +2 bonus on Acrobatics checks; Skoan-Quah (Skull Clan) — +2 bonus on weapon damage rolls against undead and a +2 bonus on Heal checks; Tamiir-Quah (Wind Clan) — base land speed increases by 5 feet and a +2 bonus on Acrobatics checks.",
    shortDescription: 'Gain tribal totem benefit based on your Shoanti clan',
    prerequisites: [{ type: 'special', description: 'Must be a member of a Shoanti tribe' }],
    effects: [],
    activationMode: 'passive',
    tags: ['shoanti', 'tribal', 'totem', 'varisia', 'story'],
  },

  {
    id: 'varisian_tattoo',
    name: 'Varisian Tattoo',
    types: ['general'],
    source: 'Inner Sea World Guide',
    verificationStatus: 'needs_review' as const,
    description:
      'Your intricate tattoos, typically featuring Thassilonian script, inspire and empower your natural magic. You cast spells from your chosen school at +1 caster level. In addition, you gain one spell-like ability usable three times per day determined by your school: Abjuration — resistance; Conjuration — acid splash; Enchantment — daze; Evocation — dancing lights; Illusion — ghost sound; Necromancy — touch of fatigue; Transmutation — mage hand. (Divination cannot be chosen for this feat.)',
    shortDescription: '+1 caster level for chosen school; gain 3/day SLA from that school',
    prerequisites: [
      { type: 'special', description: 'Spell Focus in a school of magic other than divination' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'spell.caster_level',
        value: 1,
        source: 'Varisian Tattoo',
        condition: {
          type: 'custom',
          description: 'For spells of the school chosen when this feat was taken (not divination)',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['varisian', 'tattoo', 'caster_level', 'spell_like_ability', 'thassilonian'],
  },

  {
    id: 'wand_dancer',
    name: 'Wand Dancer',
    types: ['combat', 'performance'],
    source: 'Inner Sea World Guide',
    verificationStatus: 'needs_review' as const,
    description:
      'You are trained in a Garundi courtly tradition that blends dance with wand magic. When using a spell trigger item, you can move both before and after triggering the item, as long as your total distance moved does not exceed your speed. In addition, your movement does not provoke attacks of opportunity from a single creature potentially affected by your spell trigger item. You must move at least 5 feet both before and after using the spell trigger item to gain these benefits.',
    shortDescription: 'Move before and after using a spell trigger item; one foe does not get AoO',
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'mobility' },
      { type: 'skill', skillId: 'perform_dance', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['wand', 'spell_trigger', 'movement', 'dance', 'garundi'],
  },
];

// CHECKPOINT: last_written=wand_dancer, written=10/10, status=complete
