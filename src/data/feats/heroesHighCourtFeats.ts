import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const HEROES_HIGH_COURT_FEATS: FeatDefinition[] = [
  {
    id: 'aspiring_noble',
    name: 'Aspiring Noble',
    description:
      'You aspire to elevate your family into the ranks of recognized nobility. In a chosen settlement, you gain a +2 bonus on either Diplomacy or Intimidate checks (your choice at the time of feat selection) when dealing with commoners. This bonus increases to +4 if you have 10 or more ranks in your selected skill. Goal: Have your family recognized as nobility by either three established noble families or a ruling monarch. Completion Benefit: Your bonus applies to all citizens in your chosen settlement, and your bonus on interactions with commoners increases to +4 (+6 with 10 or more ranks).',
    shortDescription:
      '+2 (or +4 with 10+ ranks) on Diplomacy or Intimidate vs commoners in chosen settlement.',
    source: 'Heroes of the High Court',
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'You must be a member of an established family that is not yet recognized as nobility.',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.diplomacy',
        value: 2,
        source: 'Aspiring Noble',
        condition: {
          type: 'custom',
          description: 'When interacting with commoners in your chosen settlement',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['noble', 'social', 'story', 'diplomacy', 'intimidate', 'court'],
  },

  {
    id: 'conceal_aura',
    name: 'Conceal Aura',
    description:
      'You have learned to suppress the outward manifestations of your alignment. You can weaken your alignment aura to avoid detection by effects such as detect evil, detect good, and similar alignment-detection spells and abilities. As a standard action, you can suppress your alignment aura for 24 hours. While suppressed, your aura strength is treated as one step weaker (Overwhelming becomes Strong, Strong becomes Moderate, Moderate becomes Faint, and Faint is undetectable). If you have the aura class feature (such as a cleric or paladin), this feat allows you to suppress the strength of that aura as well.',
    shortDescription:
      'Suppress your alignment aura for 24 hours, treating it as one strength weaker for detection.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have a detectable alignment aura (e.g., be a cleric, paladin, or have a strong alignment from class levels or magic items).',
      },
    ],
    effects: [
      {
        type: 'special',
        target: 'special.alignment_aura',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Conceal Aura',
        condition: {
          type: 'custom',
          description: 'When actively suppressing aura as a standard action for 24 hours',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['aura', 'alignment', 'detection', 'stealth', 'court', 'noble'],
  },

  {
    id: 'conservatory_trained',
    name: 'Conservatory-Trained',
    description:
      'Your formal education at a noble conservatory has sharpened your instincts for reading people. You gain a +2 bonus on discovery checks while using the influence system (as described in Ultimate Intrigue). If you have 10 or more ranks in a skill used for a discovery check, the bonus increases to +4 for that check.',
    shortDescription:
      '+2 (or +4 with 10+ ranks) on discovery checks when using the influence system.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Must have received formal noble or courtly education.',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'influence.discovery_checks',
        value: 2,
        source: 'Conservatory-Trained',
        condition: {
          type: 'custom',
          description: 'When making discovery checks using the influence system',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['influence', 'intrigue', 'social', 'court', 'noble', 'discovery'],
  },

  {
    id: 'countering_loophole',
    name: 'Countering Loophole',
    description:
      'You have mastered the art of turning magical compulsions back upon their casters. When you successfully counter a charm or compulsion spell, you can redirect that spell back at the original caster. The caster must attempt a saving throw against the spell (using your relevant ability score modifier and spell-related statistics if applicable), or the spell affects them instead. If the spell has a limited number of targets and the caster is not a valid target, this feat has no effect.',
    shortDescription:
      'When you counterspell a charm or compulsion, redirect it back at the original caster.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'improved_counterspell' }],
    effects: [
      {
        type: 'special',
        target: 'special.counterspell',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Countering Loophole',
        condition: {
          type: 'custom',
          description: 'When successfully countering a charm or compulsion spell',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['counterspell', 'charm', 'compulsion', 'magic', 'court', 'intrigue'],
  },

  {
    id: 'enlightened_noble',
    name: 'Enlightened Noble',
    description:
      'Your noble upbringing has deepened, granting you enhanced benefits based on the Noble Scion type you selected. Scion of the Arts: A number of times per day equal to your Charisma modifier, you can roll 2d20 when making a Perform check and take the higher result. Scion of Lore: You may attempt untrained Knowledge checks; if you have 10 or more ranks in a Knowledge skill, you gain a +2 bonus on that Knowledge check. Scion of Magic: Once per day, add +2 to your caster level for a single concentration check, Use Magic Device check, or when attempting to overcome spell resistance. Scion of Peace: Once per day when taking 10 on a Wisdom-based skill, treat the result as if you had rolled an 18. Scion of War: After rolling initiative, you may use an immediate action to attempt a Bluff check to feint or an Intimidate check to demoralize against one creature that will act after you in the initiative order.',
    shortDescription:
      'Enhanced Noble Scion benefits: extra abilities based on your chosen Noble Scion type.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'noble_scion' },
      { type: 'skill', skillId: 'knowledge_nobility', ranks: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['noble', 'noble scion', 'court', 'social', 'charisma'],
  },

  {
    id: 'ennobled_resistances',
    name: 'Ennobled Resistances',
    description:
      'Your investiture enhances multiple saving throws simultaneously. When you spend investiture points to grant yourself a bonus on saving throws, you may select a second type of saving throw to gain the same bonus. For example, if you spend investiture to gain a bonus on Fortitude saves, you also gain the same bonus on Will saves (or any other saving throw type you designate at the time). This doubles the defensive benefit of each investiture expenditure.',
    shortDescription:
      'When boosting a saving throw with investiture, also apply the same bonus to a second saving throw type.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'investiture' },
      { type: 'level', minimum: 4 },
    ],
    effects: [
      {
        type: 'special',
        target: 'save.all',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Ennobled Resistances',
        condition: {
          type: 'custom',
          description: 'When spending investiture points to boost a saving throw',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['investiture', 'saving throws', 'invested regent', 'noble', 'defense'],
  },

  {
    id: 'extra_investiture_points',
    name: 'Extra Investiture Points',
    description:
      'You have developed a deeper wellspring of investiture energy. You gain 2 additional investiture points. You can take this feat multiple times; the effects stack.',
    shortDescription: 'Gain 2 additional investiture points. Can be taken multiple times.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'investiture' }],
    effects: [],
    activationMode: 'passive',
    tags: ['investiture', 'invested regent', 'noble', 'resource'],
  },

  {
    id: 'extra_vested_power',
    name: 'Extra Vested Power',
    description:
      'You have unlocked an additional supernatural or spell-like ability through your investiture. You gain one additional vested power, selected from those you qualify for based on your character level. You can take this feat multiple times, each time selecting a different vested power you qualify for.',
    shortDescription:
      'Gain one additional vested power from the invested regent list. Can be taken multiple times.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'vested power' }],
    effects: [],
    activationMode: 'passive',
    tags: ['investiture', 'vested power', 'invested regent', 'noble', 'ability'],
  },

  {
    id: 'inured_to_draconic_majesty',
    name: 'Inured to Draconic Majesty',
    description:
      "You have spent enough time around dragons to believe that much of their fearsomeness is bluster. You gain a +4 bonus on saving throws against extraordinary or supernatural fear effects, such as a dragon's frightful presence ability. In addition, if a failed saving throw against such an effect would leave you frightened, you are instead shaken. If it would leave you panicked, you are instead frightened.",
    shortDescription:
      '+4 saves vs draconic/supernatural fear; reduce fear conditions by one step on failed saves.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Favored enemy (dragon) class feature, or 1 rank in Knowledge (arcana).',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 4,
        source: 'Inured to Draconic Majesty',
        condition: {
          type: 'custom',
          description: 'Against extraordinary or supernatural fear effects',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['dragon', 'fear', 'saving throw', 'draconic', 'court'],
  },

  {
    id: 'legalistic_reading',
    name: 'Legalistic Reading',
    description:
      "You have a scholar's eye for the letter of magical law. Through careful study of a scroll's wording before casting, you can squeeze a second use from the magic before it is consumed. You may use a scroll twice before it is consumed. The second use of the scroll occurs normally and expends the scroll after the spell is cast.",
    shortDescription: 'Use a scroll twice before it is consumed.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'spellcraft', ranks: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['scroll', 'magic item', 'spellcraft', 'court', 'intrigue'],
  },

  {
    id: 'noble_impostor',
    name: 'Noble Impostor',
    description:
      'You have mastered the art of passing yourself off as a member of the nobility. You gain a +2 bonus on Bluff and Knowledge (nobility) checks. Both skills become class skills for you. Goal: Successfully convince either three noble families, a ruling monarch, or a settlement of small city size or larger that you are a member of an existing or previously unknown noble house. Completion Benefit: You gain followers as if you had the Leadership feat. If you also have the Leadership feat, your Leadership score increases by 3 for the purpose of determining how many followers you have.',
    shortDescription:
      '+2 Bluff and Knowledge (nobility); goal to be accepted as a false noble earns followers.',
    source: 'Heroes of the High Court',
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description: 'You must not be a member of an established family or recognized nobility.',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.bluff',
        value: 2,
        source: 'Noble Impostor',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.knowledge_nobility',
        value: 2,
        source: 'Noble Impostor',
      },
    ],
    activationMode: 'passive',
    tags: ['noble', 'bluff', 'deception', 'social', 'story', 'court'],
  },

  {
    id: 'noble_stipend',
    name: 'Noble Stipend',
    description:
      'You receive a regular allowance from your noble family or from an inheritance. At the beginning of every week, you receive 100 gp that you can spend only on services and nonmaterial goods, such as hiring entertainers, messengers, mounts, servants, transport, or workers; enhancing your lifestyle quality; securing invitations to exclusive events or entry to restricted locations; or paying for lodgings, stabling, taxes, and tolls. This gold cannot be used to purchase weapons, armor, or other physical items.',
    shortDescription: 'Receive 100 gp per week usable only for services and nonmaterial goods.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'noble_scion' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['noble', 'wealth', 'court', 'social', 'gold'],
  },

  {
    id: 'peerless_courtier',
    name: 'Peerless Courtier',
    description:
      'You have learned to translate skill at arms into social influence as a favored hero of the court. Choose one skill from the following list: Bluff, Diplomacy, or Sense Motive. You may substitute your base attack bonus for your number of ranks in the chosen skill for the purpose of skill checks. Additionally, the chosen skill becomes a class skill for you. You can select this feat up to three times. Each time you select it, choose a different skill from the list.',
    shortDescription:
      'Substitute BAB for ranks in Bluff, Diplomacy, or Sense Motive; that skill becomes a class skill.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'bab', minimum: 3 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['noble', 'social', 'bluff', 'diplomacy', 'sense motive', 'court', 'BAB'],
  },

  {
    id: 'righteous_orator',
    name: 'Righteous Orator',
    description:
      'Your faith and conviction translate into rhetorical power in verbal confrontations. When participating in a verbal duel (as described in Ultimate Intrigue) against an evil creature, you can use one daily use of your smite evil ability to gain the same bonuses and benefits to a verbal duel tactic check that smite evil normally grants to an attack roll and damage roll. The Charisma bonus to the relevant check and the bonus against the creature\'s relevant "AC equivalent" apply as normal. If you use this ability and the creature is not evil, you lose that use of smite evil for the day as normal.',
    shortDescription:
      'Expend smite evil to apply its bonuses to verbal duel tactic checks against evil creatures.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'smite evil' }],
    effects: [
      {
        type: 'special',
        target: 'special.verbal_duel',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Righteous Orator',
        condition: {
          type: 'custom',
          description: 'When using smite evil during a verbal duel against an evil creature',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['smite evil', 'verbal duel', 'paladin', 'court', 'intrigue', 'social'],
  },

  {
    id: 'seeker_of_the_eternal_emperor',
    name: 'Seeker of the Eternal Emperor',
    description:
      "You have devoted yourself to the search for an ancient and eternal ruler, and this dedication has enhanced your divinatory abilities and tempered your curse. You treat your oracle level as 1 lower (minimum 1st level) when determining the effects of your oracle's curse. Additionally, you do not require additional time to spontaneously cast divination spells modified by the Enlarge Spell or Extend Spell metamagic feats. Normally, applying metamagic to a spontaneously cast spell increases the casting time.",
    shortDescription:
      'Oracle curse treated as 1 level lower; no extra casting time for Enlarge/Extend on divination spells.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description:
          "Enlarge Spell or Extend Spell metamagic feat, and oracle's curse class feature.",
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['oracle', 'divination', 'metamagic', 'curse', 'extend spell', 'enlarge spell', 'court'],
  },

  {
    id: 'self_exiled_noble',
    name: 'Self-Exiled Noble',
    description:
      'You have left your noble family behind and forged a new path. You gain a +2 bonus on Disguise checks, and Disguise becomes a class skill for you. Additionally, you gain a +1 bonus on attack rolls and damage rolls against members of your former noble family. Goal: Escape your former name by establishing your own noble legacy, and decisively defeat a challenging foe from your former family who would seek to return you to your old home. Completion Benefit: The bonus on attack rolls and damage rolls increases to +2 and expands to apply against anyone who threatens your allies or your new noble legacy.',
    shortDescription:
      '+2 Disguise (class skill); +1 attack/damage vs former family; goal leads to expanded bonuses.',
    source: 'Heroes of the High Court',
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have intentionally left your noble family and changed your name or appearance afterward.',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.disguise',
        value: 2,
        source: 'Self-Exiled Noble',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.all',
        value: 1,
        source: 'Self-Exiled Noble',
        condition: {
          type: 'custom',
          description: 'Against members of your former noble family',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['noble', 'story', 'exile', 'disguise', 'court', 'social'],
  },

  {
    id: 'sense_magical_interrogation',
    name: 'Sense Magical Interrogation',
    description:
      'Your instincts and training alert you when magical compulsion would strip away your secrets. You automatically know when you are subject to truth magic, such as zone of truth, detect thoughts, discern lies, or similar effects that magically compel honesty or expose your thoughts. You do not need to succeed at a saving throw or make any check to detect these effects; you simply know they are being used on you.',
    shortDescription:
      'Automatically know when subjected to zone of truth, detect thoughts, or similar truth magic.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'sense_motive', ranks: 3 }],
    effects: [
      {
        type: 'special',
        target: 'special.sense_truth_magic',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Sense Magical Interrogation',
        condition: {
          type: 'custom',
          description: 'Whenever subjected to truth-revealing or thought-reading magic',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['sense motive', 'truth magic', 'zone of truth', 'interrogation', 'court', 'intrigue'],
  },

  {
    id: 'student_of_sulunai',
    name: 'Student of Sulunai',
    description:
      'You have studied the legendary courtly teachings of Sulunai, a master advisor known for guiding nobles to better decisions through thoughtful counsel. When you use an ability that allows another creature to reroll a check (such as the aid another action in certain contexts, or a bardic performance that grants rerolls), the creature gains a +2 insight bonus on the reroll. This bonus applies only when your assistance directly enables the reroll.',
    shortDescription: 'Creatures you help reroll a check gain a +2 insight bonus on that reroll.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_nobility', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'special.ally_reroll',
        value: 2,
        source: 'Student of Sulunai',
        condition: {
          type: 'custom',
          description: 'When your assistance grants another creature a reroll on a check',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['insight', 'reroll', 'aid', 'court', 'knowledge nobility', 'social'],
  },

  {
    id: 'veiled_contempt',
    name: 'Veiled Contempt',
    description:
      'You are skilled at disguising your dissatisfaction with the current regime or authority, masking your true feelings behind a courtly facade. The DC for Sense Motive checks to get a hunch about you is equal to 20 + your ranks in Bluff, instead of the normal DC of 20. If the Sense Motive check is specifically to assess your allegiance or trustworthiness, the DC is equal to 20 + two times your ranks in Bluff.',
    shortDescription:
      'Raise Sense Motive DC against you to 20 + Bluff ranks; double for allegiance checks.',
    source: 'Heroes of the High Court',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'bluff', ranks: 3 }],
    effects: [
      {
        type: 'special',
        target: 'special.sense_motive_dc_against_you',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Veiled Contempt',
        condition: {
          type: 'custom',
          description:
            'When others attempt Sense Motive checks to read your intentions or allegiance',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['bluff', 'sense motive', 'social', 'court', 'deception', 'intrigue', 'noble'],
  },
];

// CHECKPOINT: last_written=veiled_contempt, written=19/19, status=complete
