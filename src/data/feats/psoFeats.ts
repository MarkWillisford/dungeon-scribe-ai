import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const PSO_FEATS: FeatDefinition[] = [
  // ==================== COHORTS AND COMPANIONS (Paizo, 2015) ====================
  // Already in database: Bred Commander (miscBooks2), Ferocious Loyalty (bloodOfTheMoon),
  //   Bonded Mind (acg), Underfoot (ultimateWilderness), Monstrous Companion / Blazing Channel /
  //   Channel Surge / Charnel Soldiers (miscBooks2)

  {
    id: 'bolster_companion',
    name: 'Bolster Companion',
    description:
      'You can spend a standard action to bolster your animal companion, familiar, or mount. The companion gains a +2 morale bonus on attack rolls and saving throws until the start of your next turn. At 10th level this bonus increases to +4.',
    shortDescription: 'Grant animal companion +2 morale on attacks and saves as a standard action',
    source: 'Cohorts and Companions',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'animal companion, familiar, or mount' }],
    effects: [],
    activationMode: 'toggle',
    tags: ['companion', 'familiar', 'mount', 'morale'],
  },
  {
    id: 'devoted_to_the_cause',
    name: 'Devoted to the Cause',
    description:
      'Your cohort or followers benefit from your dedication. Your cohort gains a +2 morale bonus on Will saves against fear and compulsion effects. Additionally, whenever your cohort or a follower would be killed or rendered unconscious, you gain a +1 morale bonus on attack and damage rolls for 1 minute.',
    shortDescription: 'Cohort gains +2 Will vs. fear; you gain +1 attack/damage when ally falls',
    source: 'Cohorts and Companions',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'leadership' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['cohort', 'leadership', 'morale'],
  },
  {
    id: 'expanded_familiar',
    name: 'Expanded Familiar',
    description:
      'You may select a familiar from a broader list of eligible creatures. When selecting your familiar, you may choose any creature on the standard list or any creature on the expanded familiar list for your race or region, subject to GM approval.',
    shortDescription: 'Select a familiar from an expanded list of eligible creatures',
    source: 'Cohorts and Companions',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'familiar' }],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'companion'],
  },
  {
    id: 'familiar_tactics',
    name: 'Familiar Tactics',
    description:
      "Your familiar can use any teamwork feat you know, treating you as if you also had the feat for the purpose of activating the feat's effects. Your familiar must be adjacent to you to use this feat.",
    shortDescription: 'Your familiar can use your teamwork feats as if it had them',
    source: 'Cohorts and Companions',
    types: ['general', 'teamwork'],
    prerequisites: [
      { type: 'class_feature', featureName: 'familiar' },
      { type: 'special', description: 'Must have at least one teamwork feat' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['familiar', 'teamwork', 'companion'],
  },
  {
    id: 'greater_ferocious_loyalty',
    name: 'Greater Ferocious Loyalty',
    description:
      'When an ally with Ferocious Loyalty becomes helpless or is killed within 30 feet of you, the morale bonus from Ferocious Loyalty increases to +4 on attack rolls and you also gain a +2 morale bonus on damage rolls for 1 minute or until the foe responsible is defeated.',
    shortDescription:
      'Ferocious Loyalty bonus increases to +4 attack and adds +2 damage when ally falls',
    source: 'Cohorts and Companions',
    types: ['teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'ferocious_loyalty' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'morale', 'companion'],
  },
  {
    id: 'improved_familiars_touch',
    name: "Improved Familiar's Touch",
    description:
      'Your familiar can deliver touch spells for you at a greater range. Instead of requiring your familiar to touch the target in the same round you cast the spell, your familiar may deliver the touch spell up to 1 round later per caster level you possess (maximum 5 rounds).',
    shortDescription: 'Familiar can delay delivering your touch spells for up to 1 round/level',
    source: 'Cohorts and Companions',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'familiar' },
      { type: 'special', description: 'Familiar can deliver touch spells' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['familiar', 'touch spell', 'spellcasting'],
  },
  {
    id: 'monstrous_cohort',
    name: 'Monstrous Cohort',
    description:
      "You may take a monstrous humanoid or magical beast as a cohort instead of a humanoid. The cohort's level is treated as 2 lower than normal for purposes of Leadership score calculations. The cohort must have an Intelligence score of at least 3.",
    shortDescription: 'Take a monstrous humanoid or magical beast as your Leadership cohort',
    source: 'Cohorts and Companions',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'leadership' }],
    effects: [],
    activationMode: 'passive',
    tags: ['cohort', 'leadership', 'monster'],
  },
  {
    id: 'mounted_blade',
    name: 'Mounted Blade',
    description:
      "While mounted, you can make a melee attack against a target adjacent to your mount in addition to attacking your mount's target when you use the charge action. The secondary attack is made with a –5 penalty.",
    shortDescription:
      'Make a secondary melee attack against a different target when charging while mounted',
    source: 'Cohorts and Companions',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'mounted_combat' },
      { type: 'skill', skillId: 'ride', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mounted', 'combat', 'charge'],
  },
  {
    id: 'retainer',
    name: 'Retainer',
    description:
      'You gain the services of a loyal retainer — a 1st-level NPC of a class appropriate to your needs. This NPC does not fight for you but provides non-combat assistance. The retainer levels up at half your rate and can be replaced if lost after 1 week of searching.',
    shortDescription: 'Gain a loyal non-combat retainer NPC who assists you',
    source: 'Cohorts and Companions',
    types: ['general'],
    prerequisites: [{ type: 'level', minimum: 3 }],
    effects: [],
    activationMode: 'passive',
    tags: ['cohort', 'followers', 'npc'],
  },
  {
    id: 'rough_and_ready',
    name: 'Rough and Ready',
    description:
      'You are skilled at fighting with improvised weapons. You do not take the –4 penalty on attack rolls when using improvised weapons. Additionally, improvised weapons you wield deal damage as if they were one size larger than their actual size.',
    shortDescription: 'No penalty with improvised weapons; deal damage as if one size larger',
    source: 'Cohorts and Companions',
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'passive',
    tags: ['improvised weapon', 'combat', 'adaptable'],
  },
  {
    id: 'shared_vigilance',
    name: 'Shared Vigilance',
    description:
      'When you and an ally with this feat are adjacent, both of you gain a +2 bonus on Perception checks. If either of you is flat-footed or surprised, the other is not, as long as they are not themselves surprised.',
    shortDescription:
      '+2 Perception when adjacent to ally with this feat; prevent surprise if ally is alert',
    source: 'Cohorts and Companions',
    types: ['teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'perception', ranks: 1 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.perception',
        value: 2,
        source: 'Shared Vigilance',
        condition: {
          type: 'custom',
          description: 'When adjacent to an ally who also has Shared Vigilance',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'perception', 'vigilance'],
  },
  {
    id: 'shield_companion',
    name: 'Shield Companion',
    description:
      'As an immediate action, when your animal companion, familiar, or mount would be hit by an attack, you can redirect that attack to yourself instead. You must be adjacent to the companion to use this ability.',
    shortDescription:
      'Redirect attacks targeting your companion to yourself as an immediate action',
    source: 'Cohorts and Companions',
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: 'animal companion, familiar, or mount' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['companion', 'familiar', 'mount', 'defense'],
  },
  {
    id: 'talented_companion',
    name: 'Talented Companion',
    description:
      "Your animal companion or familiar gains one additional trick or ability it normally could not know. The bonus trick doesn't count against the maximum number of tricks the companion can learn.",
    shortDescription:
      'Your animal companion or familiar learns one additional trick beyond its limit',
    source: 'Cohorts and Companions',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'animal companion or familiar' }],
    effects: [],
    activationMode: 'passive',
    tags: ['companion', 'familiar', 'tricks'],
  },
  {
    id: 'uncanny_cohort',
    name: 'Uncanny Cohort',
    description:
      "Your cohort is unusually capable. Your cohort's effective cohort level is treated as 1 higher than normal for the purpose of determining its statistics, and it gains one additional feat.",
    shortDescription: 'Cohort counts as 1 level higher and gains an extra feat',
    source: 'Cohorts and Companions',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'leadership' }],
    effects: [],
    activationMode: 'passive',
    tags: ['cohort', 'leadership'],
  },

  // ==================== PATHFINDER SOCIETY FIELD GUIDE (Paizo, 2011) ====================
  // Already in database: Ally Shield (teamworkFeats), Deadeye Bowman (miscBooks1)
  // Shoulder to Shoulder and Terrain Advantage checked — not found, include below

  {
    id: 'field_commander',
    name: 'Field Commander',
    description:
      'You are skilled at directing allies in combat. As a standard action, you may grant one teamwork feat you know to all allies within 30 feet who can see and hear you. This benefit lasts for 3 rounds. Allies do not need to meet the prerequisites for the granted feat.',
    shortDescription:
      'Grant allies within 30 ft. one of your teamwork feats for 3 rounds as a standard action',
    source: 'Pathfinder Society Field Guide',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'iron_will' },
      { type: 'special', description: 'Must have at least one teamwork feat' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['commander', 'teamwork', 'leadership'],
  },
  {
    id: 'friend_to_animals',
    name: 'Friend to Animals',
    description:
      "Animals regard you as non-threatening. You receive a +4 bonus on Handle Animal checks and wild animals don't attack you unless provoked or directed. You can cast speak with animals once per day as a spell-like ability (CL = your character level).",
    shortDescription: "+4 Handle Animal; animals don't attack unprovoked; speak with animals 1/day",
    source: 'Pathfinder Society Field Guide',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'handle_animal', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.handle_animal',
        value: 4,
        source: 'Friend to Animals',
      },
    ],
    activationMode: 'passive',
    tags: ['animals', 'handle animal', 'nature'],
  },
  {
    id: 'shoulder_to_shoulder',
    name: 'Shoulder to Shoulder',
    description:
      'When you and an adjacent ally with this feat are both attacking the same target, you each gain a +1 bonus on attack rolls and a +1 bonus to AC. Both bonuses increase by 1 for every additional ally with this feat also in the group (maximum +4).',
    shortDescription:
      '+1 attack and +1 AC per adjacent ally with this feat all attacking the same target',
    source: 'Pathfinder Society Field Guide',
    types: ['combat', 'teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 1,
        source: 'Shoulder to Shoulder',
        condition: {
          type: 'custom',
          description: 'When adjacent ally with this feat attacks the same target',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'ac',
        value: 1,
        source: 'Shoulder to Shoulder',
        condition: {
          type: 'custom',
          description: 'When adjacent ally with this feat attacks the same target',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'combat', 'flanking'],
  },
  {
    id: 'terrain_advantage',
    name: 'Terrain Advantage',
    description:
      'Whenever you and an ally with this feat are both in the same type of terrain (forest, underground, etc.) and you have at least 5 ranks in the appropriate Knowledge skill for that terrain, your allies gain a +2 bonus on attack rolls against flat-footed opponents while within 30 feet of you.',
    shortDescription:
      'Allies within 30 ft. gain +2 attack vs. flat-footed foes in your favored terrain',
    source: 'Pathfinder Society Field Guide',
    types: ['teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_nature', ranks: 5 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'terrain', 'ranger'],
  },

  // ==================== PATHFINDER SOCIETY PRIMER (Paizo, 2013) ====================

  {
    id: 'defender_of_society',
    name: 'Defender of Society',
    description:
      'You gain a +1 trait bonus to Armor Class against opponents that are two or more CR higher than your current level. In addition, you treat your Armor Class as 1 point higher for the purpose of determining whether you are struck by a critical hit.',
    shortDescription: '+1 AC vs. opponents 2+ CR higher than your level',
    source: 'Pathfinder Society Primer',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Must be a member of the Pathfinder Society or similar organization',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'ac',
        value: 1,
        source: 'Defender of Society',
        condition: {
          type: 'custom',
          description: 'Against opponents 2 or more CR higher than your character level',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['defense', 'society', 'armor class', 'trait'],
  },
  {
    id: 'ground_thrower',
    name: 'Ground Thrower',
    description:
      'You are skilled at throwing weapons while prone. You do not take penalties on ranged attack rolls when you are prone with a thrown weapon. Additionally, you do not provoke attacks of opportunity for throwing weapons while prone.',
    shortDescription: 'No penalty or AoO when throwing weapons while prone',
    source: 'Pathfinder Society Primer',
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'passive',
    tags: ['thrown weapon', 'prone', 'combat'],
  },
  {
    id: 'infiltrator',
    name: 'Infiltrator',
    description:
      'You have a knack for blending in with local groups. You may use Disguise in place of Bluff to create a diversion to hide and to pass messages. When infiltrating an organization, you gain a +4 bonus on Bluff and Disguise checks made to maintain your cover identity.',
    shortDescription:
      'Use Disguise instead of Bluff to hide; +4 Bluff/Disguise when maintaining cover identity',
    source: 'Pathfinder Society Primer',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'disguise', ranks: 3 },
      { type: 'skill', skillId: 'bluff', ranks: 3 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['disguise', 'bluff', 'infiltration', 'society'],
  },
  {
    id: 'know_the_enemy',
    name: 'Know the Enemy',
    description:
      "You can make a Knowledge check as a move action instead of a standard action when attempting to identify a monster's abilities and weaknesses. Additionally, you gain a +2 bonus on the first attack roll made against a creature you successfully identified with a Knowledge check in the current combat.",
    shortDescription: 'Identify monsters as a move action; +2 on first attack vs. identified foe',
    source: 'Pathfinder Society Primer',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_dungeoneering', ranks: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['knowledge', 'monster', 'tactics', 'society'],
  },
  {
    id: 'librarian',
    name: 'Librarian',
    description:
      'You have an encyclopedic knowledge of lore and can rapidly research information. When using the Research rules or making untrained Knowledge checks, you gain a +2 competence bonus. Additionally, you may make any Knowledge check untrained if you have access to a library.',
    shortDescription:
      '+2 competence on research/untrained Knowledge checks; make any Knowledge untrained with library access',
    source: 'Pathfinder Society Primer',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_history', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'skills.knowledge_untrained',
        value: 2,
        source: 'Librarian',
        condition: {
          type: 'custom',
          description: 'When researching or making untrained Knowledge checks',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['knowledge', 'research', 'lore', 'society'],
  },
  {
    id: 'master_of_disguise',
    name: 'Master of Disguise',
    description:
      'You are extraordinarily skilled at assuming other identities. You gain a +4 bonus on Disguise checks and can change your appearance as a standard action instead of 1d3×10 minutes. Additionally, you can maintain a disguise while speaking or performing other actions that would normally reveal your true identity.',
    shortDescription:
      '+4 Disguise; change appearance as a standard action; maintain disguise while speaking',
    source: 'Pathfinder Society Primer',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'disguise', ranks: 5 },
      { type: 'feat', featId: 'deceitful' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.disguise',
        value: 4,
        source: 'Master of Disguise',
      },
    ],
    activationMode: 'passive',
    tags: ['disguise', 'infiltration', 'deception', 'society'],
  },
  {
    id: 'melee_crafter',
    name: 'Melee Crafter',
    description:
      'You can craft melee weapons without having access to the Craft (weapons) skill at the required rank, treating your ranks in Craft (armor) or another appropriate Craft skill as half their value for the purpose of crafting melee weapons. Additionally, you reduce the time required to craft a melee weapon by 25%.',
    shortDescription: 'Craft melee weapons using substitute Craft skills; 25% faster crafting',
    source: 'Pathfinder Society Primer',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'craft_magic_arms_and_armor' },
      { type: 'skill', skillId: 'craft_weapons', ranks: 5 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['crafting', 'weapons', 'society'],
  },
  {
    id: 'quick_preparation',
    name: 'Quick Preparation',
    description:
      'You can prepare your spells in half the normal time. Instead of requiring 1 hour to prepare spells, you need only 30 minutes. This feat also halves the time required to refresh your spells if you have a class feature that allows you to do so.',
    shortDescription: 'Prepare spells in half the normal time (30 minutes instead of 1 hour)',
    source: 'Pathfinder Society Primer',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Ability to prepare spells' }],
    effects: [],
    activationMode: 'passive',
    tags: ['spellcasting', 'preparation', 'society'],
  },
  {
    id: 'scholar_of_the_ancients',
    name: 'Scholar of the Ancients',
    description:
      'Growing up with access to ancient texts and works of Thassilonian and Azlanti history has given you insight into the secrets of the ancients. You gain a +2 bonus on Knowledge (arcana) and Knowledge (history) checks relating to ancient civilizations. Additionally, you can identify ancient magic items and constructs as if you were 2 levels higher.',
    shortDescription:
      '+2 Knowledge (arcana/history) on ancient civilizations; identify ancient items as 2 levels higher',
    source: 'Pathfinder Society Primer',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 1 },
      { type: 'skill', skillId: 'knowledge_history', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.knowledge_arcana',
        value: 2,
        source: 'Scholar of the Ancients',
        condition: {
          type: 'custom',
          description: 'Only on checks relating to ancient civilizations (Thassilon, Azlant)',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.knowledge_history',
        value: 2,
        source: 'Scholar of the Ancients',
        condition: {
          type: 'custom',
          description: 'Only on checks relating to ancient civilizations (Thassilon, Azlant)',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['knowledge', 'history', 'thassilon', 'society'],
  },
  {
    id: 'societys_ward',
    name: "Society's Ward",
    description:
      'Your training in the Pathfinder Society has made you resilient. You gain a +1 bonus on Reflex saves and a +1 bonus on Fortitude saves against traps and environmental hazards.',
    shortDescription: '+1 Reflex saves and +1 Fortitude saves vs. traps and environmental hazards',
    source: 'Pathfinder Society Primer',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must be associated with the Pathfinder Society' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'saving_throw.reflex',
        value: 1,
        source: "Society's Ward",
        condition: {
          type: 'custom',
          description: 'Against traps and environmental hazards',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'saving_throw.fortitude',
        value: 1,
        source: "Society's Ward",
        condition: {
          type: 'custom',
          description: 'Against traps and environmental hazards',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['defense', 'traps', 'society', 'saves'],
  },
  {
    id: 'student_of_philosophy',
    name: 'Student of Philosophy',
    description:
      'You can use your Intelligence modifier in place of your Charisma modifier on Diplomacy checks to persuade others and on Bluff checks to convince others that a lie is true. This does not affect Bluff checks for feinting in combat or Diplomacy checks to gather information.',
    shortDescription:
      'Use Intelligence instead of Charisma for Diplomacy (persuasion) and Bluff (lying)',
    source: 'Pathfinder Society Primer',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'INT', minimum: 13 }],
    effects: [
      {
        type: 'ability_substitution',
        bonusType: BonusType.UNTYPED,
        target: 'skills.diplomacy_persuasion',
        value: 'INT',
        source: 'Student of Philosophy',
      },
      {
        type: 'ability_substitution',
        bonusType: BonusType.UNTYPED,
        target: 'skills.bluff_deception',
        value: 'INT',
        source: 'Student of Philosophy',
      },
    ],
    activationMode: 'passive',
    tags: ['intelligence', 'diplomacy', 'bluff', 'society'],
  },
  {
    id: 'versatile_spontaneity',
    name: 'Versatile Spontaneity',
    description:
      'Once per day, you can use one of your spell slots to cast a spell from a different spell list as if it were on your class spell list, provided that spell is of a level equal to or lower than the level of the spell slot expended. The spell must be one you could cast if you were a member of the appropriate class.',
    shortDescription:
      "Once per day, use a spell slot to cast a spell from another class's spell list",
    source: 'Pathfinder Society Primer',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ability to cast spells spontaneously' },
      { type: 'level', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spellcasting', 'spontaneous', 'flexibility', 'society'],
  },

  // ==================== FACTION GUIDE (Paizo, 2010) ====================

  {
    id: 'andoren_falconry',
    name: 'Andoren Falconry',
    description:
      "You have been trained in the Andoren art of falconry. You gain a trained eagle or hawk as a familiar (even if you cannot normally have a familiar), treating your character level as your effective wizard level for this purpose. The bird can deliver messages, scout, and attack as directed. If you already have a familiar, it instead gains a fly speed of 40 ft. (average) if it doesn't already have one.",
    shortDescription: 'Gain a trained eagle or hawk familiar regardless of class',
    source: 'Faction Guide',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'handle_animal', ranks: 3 },
      { type: 'special', description: 'Must be a member of the Eagle Knights or Andoren faction' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['andoran', 'faction', 'familiar', 'falcon'],
  },
  {
    id: 'chelish_bastard',
    name: 'Chelish Bastard',
    description:
      'Your Chelish heritage gives you a number of social advantages in the empire. You gain a +2 bonus on Intimidate checks and a +1 bonus on Bluff checks while in Cheliax or dealing with Chelish citizens. You are treated as a Chelish citizen for the purpose of laws and rights.',
    shortDescription:
      '+2 Intimidate and +1 Bluff in Cheliax or with Chelish citizens; treated as Chelish citizen',
    source: 'Faction Guide',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Must have Chelish heritage or be part of the Cheliax faction',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.intimidate',
        value: 2,
        source: 'Chelish Bastard',
        condition: {
          type: 'custom',
          description: 'While in Cheliax or interacting with Chelish citizens',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.bluff',
        value: 1,
        source: 'Chelish Bastard',
        condition: {
          type: 'custom',
          description: 'While in Cheliax or interacting with Chelish citizens',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['cheliax', 'faction', 'social', 'intimidate'],
  },
  {
    id: 'desert_runner',
    name: 'Desert Runner',
    description:
      'You are inured to the dangers of desert travel. You gain a +4 bonus on Constitution checks and Fortitude saves made to resist the effects of fatigue, exhaustion, and hot environments. You also gain a +2 bonus on Survival checks in desert terrain.',
    shortDescription: '+4 Fort vs. fatigue/heat; +2 Survival in deserts',
    source: 'Faction Guide',
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'saving_throw.fortitude',
        value: 4,
        source: 'Desert Runner',
        condition: {
          type: 'custom',
          description: 'Against fatigue, exhaustion, and hot environment effects',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.survival',
        value: 2,
        source: 'Desert Runner',
        condition: {
          type: 'custom',
          description: 'In desert terrain',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['osirion', 'faction', 'desert', 'survival', 'endurance'],
  },
  {
    id: 'osirionologist',
    name: 'Osirionologist',
    description:
      "Your study of Osirion's ancient history and culture gives you deep insight into the lore of the region. You gain a +2 bonus on Knowledge (history) checks regarding Osirion and its ancient past. Additionally, you can identify Osiriani artifacts and constructs as if your caster level were 2 higher, and you gain a +2 bonus on Linguistics checks to decipher Osiriani inscriptions.",
    shortDescription:
      '+2 Knowledge (history) on Osirion; identify Osiriani items at CL+2; +2 Linguistics on Osiriani',
    source: 'Faction Guide',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_history', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.knowledge_history',
        value: 2,
        source: 'Osirionologist',
        condition: {
          type: 'custom',
          description: 'On checks relating to Osirion and its ancient history',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.linguistics',
        value: 2,
        source: 'Osirionologist',
        condition: {
          type: 'custom',
          description: 'On Linguistics checks to decipher Osiriani inscriptions',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['osirion', 'faction', 'knowledge', 'history', 'linguistics'],
  },
  {
    id: 'qadiran_horsemaster',
    name: 'Qadiran Horsemaster',
    description:
      "Your Qadiran training with horses gives you an exceptional bond with your mount. Your mount gains +2 hit points per Hit Die, and you gain a +2 bonus on Ride checks. Additionally, your mount's speed increases by 10 feet and it does not become fatigued from overland travel at normal speed.",
    shortDescription:
      'Mount gains +2 HP/HD; +2 Ride; mount speed +10 ft. and no fatigue from travel',
    source: 'Faction Guide',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'ride', ranks: 5 },
      { type: 'class_feature', featureName: 'mount' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.ride',
        value: 2,
        source: 'Qadiran Horsemaster',
      },
    ],
    activationMode: 'passive',
    tags: ['qadira', 'faction', 'mounted', 'horse', 'ride'],
  },
  {
    id: 'spear_dancer',
    name: 'Spear Dancer',
    description:
      'You have learned to use the spear with a fluid, dance-like fighting style. When fighting with a spear or longspear in two hands, you gain a +1 dodge bonus to AC and your attacks of opportunity with the weapon deal an additional 1d6 points of damage. Additionally, you can use a longspear as a reach weapon and as a melee weapon against adjacent foes without the usual –4 penalty.',
    shortDescription:
      '+1 dodge AC and +1d6 AoO damage when fighting with spear two-handed; use longspear adjacent without penalty',
    source: 'Faction Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 3 },
      { type: 'special', description: 'Weapon Focus must apply to spear or longspear' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 1,
        source: 'Spear Dancer',
        condition: {
          type: 'custom',
          description: 'When fighting with a spear or longspear wielded in two hands',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['spear', 'faction', 'combat', 'dodge', 'reach'],
  },
];
