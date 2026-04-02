import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

// Taldor, Echoes of Glory (8), People of the Sands (5 new), Andoran, Spirit of Liberty (4)
// Distant Shores (6) — all reprints already in acg.ts/teamworkFeats.ts, skipped entirely
// People of Sands: Out of the Sun already in teamworkFeats.ts

export const TIER3_BATCH4_FEATS: FeatDefinition[] = [
  // ─── Taldor, Echoes of Glory ──────────────────────────────────────────────────
  // Note: Pre-PF1e book (2009). Skill names adapted (Hide→Stealth, Spot→Perception, etc.)
  {
    id: 'experienced_vagabond',
    name: 'Experienced Vagabond',
    description:
      'You gain a +1 bonus on Bluff, Diplomacy, Knowledge (local), and Sense Motive checks when dealing with criminals and underclass members. When traveling with another character who has this feat, gain a +2 circumstance bonus on Perception checks to avoid being surprised.',
    shortDescription:
      '+1 social skills with criminals; +2 Perception vs. surprise with a fellow vagabond.',
    source: 'Pathfinder Companion: Taldor, Echoes of Glory',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 2 },
      { type: 'skill', skillId: 'knowledge_local', ranks: 2 },
      { type: 'special', description: 'Member of an underclass' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.bluff',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Experienced Vagabond',
      },
      {
        type: 'bonus',
        target: 'skill.knowledge_local',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Experienced Vagabond',
      },
    ],
    activationMode: 'conditional',
    tags: ['taldor', 'underclass', 'social', 'criminal'],
  },
  {
    id: 'galley_slave',
    name: 'Galley Slave',
    description:
      'You gain a +2 circumstance bonus on Profession (sailor) and Use Rope checks while aboard a ship with oars. You gain +2 damage on your first successful attack each battle when fighting on a ship.',
    shortDescription: '+2 sailor/rope checks on oared ships; +2 first-attack damage on ships.',
    source: 'Pathfinder Companion: Taldor, Echoes of Glory',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'profession_sailor', ranks: 2 },
      { type: 'special', description: 'Current or former galley slave' },
    ],
    effects: [
      {
        type: 'damage',
        target: 'special.first_attack_ship',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Galley Slave',
      },
    ],
    activationMode: 'conditional',
    tags: ['taldor', 'ship', 'sailor', 'naval'],
  },
  {
    id: 'master_of_the_ledger',
    name: 'Master of the Ledger',
    description:
      'You gain +2 on Appraise checks, +2 on one Profession skill, and +4 on Sense Motive checks for hunches when dealing with your profession. You can invest 100+ gp in marketplaces and check monthly profits (50% chance of 25% return). Gain +1 Diplomacy and Intimidate with those in your invested marketplace.',
    shortDescription: '+2 Appraise/Profession; invest in markets for passive income.',
    source: 'Pathfinder Companion: Taldor, Echoes of Glory',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'appraise', ranks: 6 },
      { type: 'special', description: 'Profession (any) 6 ranks' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.appraise',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Master of the Ledger',
      },
    ],
    activationMode: 'passive',
    tags: ['taldor', 'merchant', 'investment', 'appraise', 'profession'],
  },
  {
    id: 'sneaky_vagabond',
    name: 'Sneaky Vagabond',
    description:
      'You gain a +2 bonus on Stealth checks when others are actively searching for you (+4 in crowds). You gain a +2 circumstance bonus on Diplomacy and Knowledge (local) checks to find a hiding place.',
    shortDescription: '+2/+4 Stealth when hunted; +2 to find hiding places.',
    source: 'Pathfinder Companion: Taldor, Echoes of Glory',
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'skill.stealth',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Sneaky Vagabond',
      },
    ],
    activationMode: 'conditional',
    tags: ['taldor', 'stealth', 'hiding', 'urban'],
  },
  {
    id: 'taldan_conscript',
    name: 'Taldan Conscript',
    description:
      'When using farm implements as weapons (hand axe, pick, pitchfork, or scythe), gain +1 damage. When fighting alongside other conscripts, gain +1 initiative.',
    shortDescription: '+1 damage with farm weapons; +1 initiative with fellow conscripts.',
    source: 'Pathfinder Companion: Taldor, Echoes of Glory',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Taldan serf in service to a lord' }],
    effects: [
      {
        type: 'damage',
        target: 'special.farm_weapons',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Taldan Conscript',
      },
    ],
    activationMode: 'passive',
    tags: ['taldor', 'conscript', 'farm weapons', 'initiative'],
  },
  {
    id: 'taldan_knight',
    name: 'Taldan Knight',
    description:
      'You gain a cohort as per the Leadership feat — a human or halfling commoner, expert, or warrior with Taldan Squire. When within 10 feet of your squire, gain +2 initiative and +1 dodge AC.',
    shortDescription: 'Gain a squire cohort; +2 initiative and +1 dodge AC near them.',
    source: 'Pathfinder Companion: Taldor, Echoes of Glory',
    types: ['general'],
    prerequisites: [
      { type: 'bab', minimum: 6 },
      { type: 'proficiency', proficiency: 'heavy armor' },
      { type: 'special', description: 'Proficient in a martial weapon' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'initiative',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Taldan Knight',
      },
      {
        type: 'bonus',
        target: 'ac',
        value: 1,
        bonusType: BonusType.DODGE,
        source: 'Taldan Knight',
      },
    ],
    activationMode: 'conditional',
    tags: ['taldor', 'knight', 'cohort', 'leadership', 'squire'],
  },
  {
    id: 'taldan_squire',
    name: 'Taldan Squire',
    description:
      'Gain +2 initiative when within 50 feet of a mounted ally with Mounted Combat. Gain +1 dodge AC within 10 feet of an injured mounted ally.',
    shortDescription: '+2 initiative near mounted allies; +1 dodge AC near injured mounted allies.',
    source: 'Pathfinder Companion: Taldor, Echoes of Glory',
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 1 },
      { type: 'special', description: 'Proficient in a martial weapon' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'initiative',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Taldan Squire',
      },
    ],
    activationMode: 'conditional',
    tags: ['taldor', 'squire', 'mounted', 'initiative', 'dodge'],
  },
  {
    id: 'urban_forager',
    name: 'Urban Forager',
    description:
      'You can apply Survival checks in urban environments to sustain yourself and others (DC 10), resist starvation/thirst (DC 15), and gain tracking bonuses on firm ground (DC 15).',
    shortDescription: 'Use Survival skill in urban environments for food, water, and tracking.',
    source: 'Pathfinder Companion: Taldor, Echoes of Glory',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_local', ranks: 4 },
      { type: 'skill', skillId: 'survival', ranks: 4 },
      { type: 'special', description: 'Track feat or class feature' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'skill.survival',
        source: 'Urban Forager',
      },
    ],
    activationMode: 'passive',
    tags: ['taldor', 'urban', 'survival', 'tracking', 'foraging'],
  },

  // ─── People of the Sands (5 new — Out of the Sun already in teamworkFeats) ───
  {
    id: 'horn_of_the_criosphinx_ps',
    name: 'Horn of the Criosphinx',
    description:
      'When making a successful charge attack with a two-handed weapon wielded in both hands, add double your Strength bonus to damage instead of 1.5x. Monks can use this with both hands empty for unarmed strikes.',
    shortDescription: '2x STR to damage on charge with two-handed weapon (instead of 1.5x).',
    source: 'Pathfinder Player Companion: People of the Sands',
    types: ['combat'],
    prerequisites: [{ type: 'special', description: 'Base attack bonus +6 or monk level 6th' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        source: 'Horn of the Criosphinx',
      },
    ],
    activationMode: 'conditional',
    tags: ['charge', 'two-handed', 'strength', 'sphinx', 'monk'],
  },
  {
    id: 'osirionology',
    name: 'Osirionology',
    description:
      'Pick one Intelligence-based skill. You gain a +3 bonus on that skill in relation to Osirion or its people. You also gain +1 on all other Intelligence-based skills in relation to Osirion.',
    shortDescription: '+3 on one INT skill and +1 on others regarding Osirion.',
    source: 'Pathfinder Player Companion: People of the Sands',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_history', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_local', ranks: 1 },
      { type: 'skill', skillId: 'linguistics', ranks: 1 },
    ],
    effects: [
      {
        type: 'special',
        value: 3,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Osirionology',
      },
    ],
    activationMode: 'passive',
    tags: ['osirion', 'knowledge', 'intelligence', 'regional'],
  },
  {
    id: 'thuvian_grenadier',
    name: 'Thuvian Grenadier',
    description:
      'You can exclude one creature from splash weapon damage. Allies with this feat automatically avoid your splash damage on hits. If you miss near an ally with this feat, they can attempt a DC 20 Reflex save to catch it. With Snatch Arrows, they can toss it back as an immediate action.',
    shortDescription: 'Exclude allies from splash damage; allies can catch missed splash weapons.',
    source: 'Pathfinder Player Companion: People of the Sands',
    types: ['teamwork'],
    prerequisites: [{ type: 'special', description: 'Precise Shot or Throw Anything' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Thuvian Grenadier',
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'splash weapon', 'alchemy', 'thuvia'],
  },
  {
    id: 'undermine_ps',
    name: 'Undermine',
    description:
      'When you use a combat maneuver to move a creature into or through a square adjacent to an ally with this feat, the foe treats all adjacent squares as difficult terrain next turn. Acrobatics DC increases by 2 for each ally with this feat adjacent to the foe.',
    shortDescription: 'Repositioned foes treat ally-adjacent squares as difficult terrain.',
    source: 'Pathfinder Player Companion: People of the Sands',
    types: ['teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Undermine',
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'difficult terrain', 'combat maneuver', 'reposition'],
  },
  {
    id: 'wings_of_the_androsphinx',
    name: 'Wings of the Androsphinx',
    description:
      'You gain +2 AC against charge attacks. If a charging creature misses, use an immediate action to reposition it. When using a readied action to attack a charger, you can attack and reposition as a free action before the charge resolves.',
    shortDescription: '+2 AC vs. charges; reposition failed chargers.',
    source: 'Pathfinder Player Companion: People of the Sands',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'improved_reposition' },
      { type: 'special', description: 'Base attack bonus +1 or monk level 1st' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'ac',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Wings of the Androsphinx',
      },
    ],
    activationMode: 'conditional',
    tags: ['charge', 'reposition', 'sphinx', 'defense', 'monk'],
  },

  // ─── Andoran, Spirit of Liberty ───────────────────────────────────────────────
  {
    id: 'chainbreaker',
    name: 'Chainbreaker',
    description:
      'Once per round, when attacking an opponent known to own or trade in slaves, add +1 damage per 4 HD to a melee attack, ranged attack, or targeted spell.',
    shortDescription: 'Bonus damage vs. slavers equal to HD/4.',
    source: 'Pathfinder Companion: Andoran, Spirit of Liberty',
    types: ['achievement'],
    prerequisites: [
      {
        type: 'special',
        description: 'Over five occasions, free 50+ sentient beings from unjust captivity',
      },
    ],
    effects: [
      {
        type: 'damage',
        target: 'special.slavers',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Chainbreaker',
      },
    ],
    activationMode: 'conditional',
    tags: ['andoran', 'achievement', 'slavery', 'freedom', 'damage'],
  },
  {
    id: 'devils_foe',
    name: "Devil's Foe",
    description:
      "Your attacks are treated as good-aligned for the purpose of bypassing devils' damage reduction.",
    shortDescription: 'Attacks count as good-aligned vs. devil DR.',
    source: 'Pathfinder Companion: Andoran, Spirit of Liberty',
    types: ['achievement'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Face 10 different devils in combat, taking damage from 5+ attacks each without falling',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: "Devil's Foe",
      },
    ],
    activationMode: 'passive',
    tags: ['andoran', 'achievement', 'devil', 'good', 'damage reduction'],
  },
  {
    id: 'eagle_knight_candidate',
    name: 'Eagle Knight Candidate',
    description:
      'Choose one Eagle Knights branch: Golden Legion (move action to grant allies within 30 ft +1 attack, AC, saves for 1 round), Steel Falcons (+1/+2 damage vs. concealed foes), or Twilight Talons (double crit range in surprise round vs. unaware targets).',
    shortDescription: 'Choose an Eagle Knight branch for a unique combat benefit.',
    source: 'Pathfinder Companion: Andoran, Spirit of Liberty',
    types: ['achievement'],
    prerequisites: [
      { type: 'level', minimum: 5 },
      {
        type: 'special',
        description:
          'Letters of commendation from four Eagle Knights and a council member or mayor',
      },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Eagle Knight Candidate',
      },
    ],
    activationMode: 'conditional',
    tags: ['andoran', 'achievement', 'eagle knight', 'leadership'],
  },
  {
    id: 'talmandors_lifting',
    name: "Talmandor's Lifting",
    description:
      'When casting a healing spell on an unharmed creature, the spell gains golden wings and a modified duration of 1 hour (or until discharged). It automatically triggers as a swift action when the target takes relevant damage.',
    shortDescription:
      'Precast healing spells on healthy allies; auto-triggers when they take damage.',
    source: 'Pathfinder Companion: Andoran, Spirit of Liberty',
    types: ['achievement'],
    prerequisites: [
      { type: 'special', description: 'Take 10d6+ falling damage on three occasions and survive' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: "Talmandor's Lifting",
      },
    ],
    activationMode: 'conditional',
    tags: ['andoran', 'achievement', 'healing', 'precast', 'golden wings'],
  },
];
