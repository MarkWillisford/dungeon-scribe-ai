import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const ANTIHERO_FEATS: FeatDefinition[] = [
  // ==================== ANTIHERO'S HANDBOOK (2017) ====================

  {
    id: 'bloody_mess_ah',
    name: 'Bloody Mess',
    description:
      'When you sustain piercing, slashing, or bleed damage equal to at least twice your character level, you can make an Intimidate check as an immediate action to demoralize one opponent within 30 feet who dealt that damage. If the damage was dealt by a critical hit, a successful Intimidate check causes the target to become sickened rather than shaken. You can use this feat only once per round for demoralizing purposes.',
    shortDescription:
      'Use an immediate action to demoralize a nearby attacker after taking enough piercing or slashing damage',
    source: "Antihero's Handbook",
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Skill Focus (Intimidate)' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['intimidate', 'demoralize', 'blood', 'immediate action'],
  },

  {
    id: 'casting_conduit_ah',
    name: 'Casting Conduit',
    description:
      "You can cast touch spells that deal hit point damage through a willing, adjacent ally who also possesses this feat. The ally takes minimum damage from the spell, then can use an immediate action to make a touch attack against an adjacent enemy to deliver the spell at full damage. If the ally is grappled or pinned, the spell automatically transfers to the grappling foe without requiring an attack roll. This ability does not function if the targeted ally is immune to the spell's effect.",
    shortDescription:
      'Channel a damaging touch spell through an adjacent ally with this feat, who delivers it to a nearby enemy',
    source: "Antihero's Handbook",
    types: ['teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'spellcraft', ranks: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'touch spells', 'spellcasting', 'conduit'],
  },

  {
    id: 'deceitful_incompetence_ah',
    name: 'Deceitful Incompetence',
    description:
      'When you make an attack of opportunity in a single round after you have already made an unsuccessful attack of opportunity that round, you gain a cumulative +2 insight bonus on your attack roll for each unsuccessful attack of opportunity you have already made that round.',
    shortDescription:
      'Gain a cumulative +2 insight bonus on each subsequent attack of opportunity after a failed one in the same round',
    source: "Antihero's Handbook",
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'combat_reflexes' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'combat.attack',
        value: 2,
        source: 'Deceitful Incompetence',
        condition: {
          type: 'custom',
          params: {},
          description:
            'On attacks of opportunity after a failed attack of opportunity in the same round (cumulative +2 per prior failure)',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['attack of opportunity', 'insight bonus', 'combat reflexes'],
  },

  {
    id: 'designated_antagonist_ah',
    name: 'Designated Antagonist',
    description:
      "When you successfully use the Antagonize feat's ability, you can cause the targeted creature to focus on a willing ally who also possesses this feat, as though that ally had activated the Antagonize ability instead.",
    shortDescription: "Redirect a foe's Antagonize hostility onto an ally who also has this feat",
    source: "Antihero's Handbook",
    types: ['teamwork'],
    prerequisites: [{ type: 'feat', featId: 'antagonize' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'antagonize', 'redirection', 'social'],
  },

  {
    id: 'fall_guy_ah',
    name: 'Fall Guy',
    description:
      'An ally who also has this feat can spend a standard action appearing socially inept through bumbling and gaffes in the presence of witnesses. That ally takes a –2 penalty on future Charisma-based skill checks against those witnesses, while you gain a +2 competence bonus on Charisma-based skill checks against those same witnesses. Both effects last 24 hours.',
    shortDescription:
      'An ally sacrifices social standing to grant you a +2 competence bonus on Charisma-based checks against shared witnesses',
    source: "Antihero's Handbook",
    types: ['teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'bluff', ranks: 1 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'skills.charisma_based',
        value: 2,
        source: 'Fall Guy',
        condition: {
          type: 'custom',
          params: {},
          description:
            'Against witnesses who watched your ally perform social gaffes in the last 24 hours',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'social', 'charisma', 'competence bonus'],
  },

  {
    id: 'faulty_teamwork_ah',
    name: 'Faulty Teamwork',
    description:
      "When an ally who also has this feat fails her saving throw (including voluntarily failing the save) against a spell that would harm her with an area of effect that includes her, intelligent enemies within the spell's area take a –2 penalty on their saving throws to resist the spell's effects.",
    shortDescription:
      'When an ally with this feat fails a save against a harmful AoE spell, enemies in the area take a –2 save penalty',
    source: "Antihero's Handbook",
    types: ['teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'area of effect', 'saving throws', 'exploitation'],
  },

  {
    id: 'opportunistic_grappler_ah',
    name: 'Opportunistic Grappler',
    description:
      'While you are grappled but not controlling the grapple, you can attempt a dirty trick combat maneuver against your grappler without incurring an attack of opportunity or a penalty on the check. If you possess the Improved Dirty Trick feat, you gain a +2 bonus on dirty trick combat maneuver checks made in this way, and any condition imposed by a successful dirty trick lasts 1 additional round. This bonus stacks with bonuses from Improved Dirty Trick and Greater Dirty Trick.',
    shortDescription:
      'While grappled, attempt a dirty trick against your grappler without penalty or provoking; bonus with Improved Dirty Trick',
    source: "Antihero's Handbook",
    types: ['combat'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['grapple', 'dirty trick', 'combat maneuver', 'defensive'],
  },

  {
    id: 'piercing_gambit_ah',
    name: 'Piercing Gambit',
    description:
      'You can deliberately cast a spell that fails, wasting the prepared spell or spell slot. When you do so, the spell produces no effect, but an ally who also possesses this feat gains a bonus on caster level checks to overcome spell resistance. The bonus equals half the level of the spell slot you expended (minimum 1). This bonus persists until the start of your next turn.',
    shortDescription:
      'Waste a spell slot to grant an ally a bonus on caster level checks to overcome spell resistance',
    source: "Antihero's Handbook",
    types: ['teamwork'],
    prerequisites: [
      { type: 'special', description: 'Spell Penetration or Bluff 3 ranks' },
      { type: 'caster_level', minimum: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'spell resistance', 'caster level', 'sacrifice'],
  },

  {
    id: 'sacrificial_aid_ah',
    name: 'Sacrificial Aid',
    description:
      "An ally who also has this feat can assist you when disabling a trap. The ally rolls 1d20 and adds either her total bonus on Disable Device checks or her character level, whichever is higher. If the result of the ally's roll is 10 or greater, you gain a +4 bonus on your Disable Device check. However, if you fail to disable the trap, your ally becomes the target of the trap's effects instead of you. If the trap has multiple targets, your ally is subject to its effects twice.",
    shortDescription:
      'An ally helps disable a trap but becomes the target of its effects if you fail',
    source: "Antihero's Handbook",
    types: ['teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.disable_device',
        value: 4,
        source: 'Sacrificial Aid',
        condition: {
          type: 'custom',
          params: {},
          description: 'When assisting ally rolls 10 or higher on their assistance check',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'disable device', 'traps', 'sacrifice'],
  },

  {
    id: 'sheltering_stubbornness_ah',
    name: 'Sheltering Stubbornness',
    description:
      'When you fail a saving throw against a mind-affecting effect that has a duration of 1 round or longer, you can choose to become dazzled for the first round instead of suffering the normal effect of the mind-affecting effect. The mind-affecting effect then functions as normal on subsequent rounds. If you have an immunity or other ability that prevents the dazzled condition, this feat provides no benefit.',
    shortDescription:
      'When you fail a save against a lasting mind-affecting effect, become dazzled for the first round instead',
    source: "Antihero's Handbook",
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'iron_will' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['mind-affecting', 'will save', 'dazzled', 'iron will', 'mental defense'],
  },

  {
    id: 'spell_bluff_teamwork_ah',
    name: 'Spell Bluff',
    description:
      "When an ally who also has this feat fails her saving throw (including voluntarily failing the save) against a harmful spell with an area of effect that includes her, intelligent enemies within the spell's area take a –2 penalty on their saving throws to resist the spell's effects.",
    shortDescription:
      'Allies exploit failed saves against AoE spells to impose a –2 save penalty on intelligent enemies in the area',
    source: "Antihero's Handbook",
    types: ['teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'area of effect', 'saving throws', 'spellcasting', 'exploitation'],
  },

  {
    id: 'take_this_ah',
    name: 'Take This',
    description:
      "If you are adjacent to an ally who also has this feat but is unable to act, you can retrieve a held or openly carried item from that ally's body as a swift action that does not provoke attacks of opportunity. For the purposes of this feat, an ally who is unable to act counts for teamwork feat purposes.",
    shortDescription:
      'Retrieve a held or carried item from an adjacent incapacitated ally as a swift action without provoking',
    source: "Antihero's Handbook",
    types: ['teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'swift action', 'items', 'incapacitated'],
  },

  {
    id: 'vindictive_fall_ah',
    name: 'Vindictive Fall',
    description:
      'When an opponent causes you to fall prone through a spell, effect, or successful trip combat maneuver, you can attempt a trip combat maneuver against any enemy within melee reach as an immediate action. The target does not need to be the creature that originally tripped you. Unless you have the Improved Trip feat or a similar ability, this trip attempt provokes attacks of opportunity normally.',
    shortDescription:
      'When tripped or knocked prone by an enemy, immediately attempt a trip maneuver against any enemy within melee reach',
    source: "Antihero's Handbook",
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'lightning_reflexes' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['trip', 'prone', 'immediate action', 'combat maneuver', 'reactive'],
  },
];
