// Occult Classes — Occult Adventures
// All 6 occult classes with psychic magic and unique mechanics.

import { BABProgression, SaveProgression } from '@/types/base';
import { ExpandedClassData } from './types';

export const OCCULT_CLASSES_EXPANDED: ExpandedClassData[] = [
  // ─── KINETICIST ────────────────────────────────────────────────────────────
  {
    name: 'Kineticist',
    category: 'Occult',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Craft',
      'Heal',
      'Intimidate',
      'Perception',
      'Profession',
      'Stealth',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons'],
    armorProficiencies: ['Light armor'],
    startingWealth: '1d6 x 10 gp',
    classFeatures: [
      {
        name: 'Burn',
        level: 1,
        description:
          "A kineticist can accept burn to use certain wild talents. For each point of burn accepted, she takes 1 point of nonlethal damage per character level that cannot be healed until after a full night's rest. A kineticist can accept a maximum number of burn points per round and per day based on her level (3 + Con modifier at 1st level).",
      },
      {
        name: 'Elemental Focus',
        level: 1,
        description:
          'A kineticist chooses one primary element (aether, air, earth, fire, or water) at 1st level. This determines her simple blast, defense wild talent, and available wild talents.',
      },
      {
        name: 'Gather Power',
        level: 1,
        description:
          'A kineticist can gather ambient elemental energy as a move action (or full-round action for more reduction) to reduce the total burn cost of a blast wild talent by 1 (or 2 for full-round, 3 at higher levels).',
      },
      {
        name: 'Infusion',
        level: 1,
        description:
          'At 1st level and every 2 levels thereafter, a kineticist gains an infusion wild talent, which modifies her kinetic blasts (form infusions change delivery, substance infusions add effects).',
      },
      {
        name: 'Kinetic Blast',
        level: 1,
        description:
          'A kineticist gains a simple blast based on her element. A simple blast deals 1d6+1 + Constitution modifier damage (increasing by 1d6+1 every 2 levels). Blasts are spell-like abilities that require a ranged touch attack (energy) or attack roll (physical).',
      },
      {
        name: 'Elemental Defense',
        level: 2,
        description:
          'At 2nd level, the kineticist gains a defense wild talent tied to her primary element, providing a passive defensive ability that scales with level and burn accepted.',
      },
      {
        name: 'Utility Wild Talent',
        level: 2,
        description:
          "At 2nd level and every 2 levels thereafter, a kineticist gains a utility wild talent, a spell-like ability that isn't directly tied to dealing damage.",
      },
      { name: 'Infusion', level: 3, description: 'Gain an additional infusion wild talent.' },
      {
        name: 'Utility Wild Talent',
        level: 4,
        description: 'Gain an additional utility wild talent.',
      },
      {
        name: 'Infusion Specialization',
        level: 5,
        description:
          'At 5th level, whenever the kineticist uses an infusion that changes the burn cost, the infusion costs 1 fewer point of burn (minimum 0). This reduction increases by 1 at 8th, 11th, 14th, 17th, and 20th levels.',
      },
      {
        name: 'Metakinesis (Empower)',
        level: 5,
        description:
          'At 5th level, by accepting 1 point of burn, a kineticist can empower her kinetic blast as if using Empower Spell (increase damage by 50%).',
      },
      { name: 'Infusion', level: 5, description: 'Gain an additional infusion wild talent.' },
      {
        name: 'Utility Wild Talent',
        level: 6,
        description: 'Gain an additional utility wild talent.',
      },
      {
        name: 'Expanded Element',
        level: 7,
        description:
          'At 7th level, a kineticist chooses a second element, gaining its basic utility wild talent and simple blast. She can choose the same element again to gain a composite blast. She gains another expanded element at 15th level.',
      },
      { name: 'Infusion', level: 7, description: 'Gain an additional infusion wild talent.' },
      {
        name: 'Infusion Specialization',
        level: 8,
        description: 'Infusion specialization reduction increases by 1.',
      },
      {
        name: 'Utility Wild Talent',
        level: 8,
        description: 'Gain an additional utility wild talent.',
      },
      {
        name: 'Metakinesis (Maximize)',
        level: 9,
        description:
          'At 9th level, by accepting 2 points of burn, a kineticist can maximize her kinetic blast as if using Maximize Spell.',
      },
      { name: 'Infusion', level: 9, description: 'Gain an additional infusion wild talent.' },
      {
        name: 'Utility Wild Talent',
        level: 10,
        description: 'Gain an additional utility wild talent.',
      },
      {
        name: 'Supercharge',
        level: 11,
        description:
          'At 11th level, the kineticist can gather power to reduce burn cost by 2 as a move action (or 3 as a full-round action).',
      },
      {
        name: 'Infusion Specialization',
        level: 11,
        description: 'Infusion specialization reduction increases by 1.',
      },
      { name: 'Infusion', level: 11, description: 'Gain an additional infusion wild talent.' },
      {
        name: 'Utility Wild Talent',
        level: 12,
        description: 'Gain an additional utility wild talent.',
      },
      {
        name: 'Metakinesis (Quicken)',
        level: 13,
        description:
          'At 13th level, by accepting 3 points of burn, a kineticist can quicken her kinetic blast (cast as a swift action).',
      },
      { name: 'Infusion', level: 13, description: 'Gain an additional infusion wild talent.' },
      {
        name: 'Infusion Specialization',
        level: 14,
        description: 'Infusion specialization reduction increases by 1.',
      },
      {
        name: 'Utility Wild Talent',
        level: 14,
        description: 'Gain an additional utility wild talent.',
      },
      {
        name: 'Expanded Element',
        level: 15,
        description:
          'At 15th level, the kineticist selects a third element (or reinforces an existing one for additional composite blasts).',
      },
      { name: 'Infusion', level: 15, description: 'Gain an additional infusion wild talent.' },
      {
        name: 'Composite Specialization',
        level: 16,
        description:
          'At 16th level, the kineticist reduces the burn cost of composite blasts by 1.',
      },
      {
        name: 'Utility Wild Talent',
        level: 16,
        description: 'Gain an additional utility wild talent.',
      },
      {
        name: 'Infusion Specialization',
        level: 17,
        description: 'Infusion specialization reduction increases by 1.',
      },
      {
        name: 'Metakinesis (Twice)',
        level: 17,
        description:
          'At 17th level, by accepting 4 points of burn, a kineticist can apply two metakinesis abilities to the same blast.',
      },
      { name: 'Infusion', level: 17, description: 'Gain an additional infusion wild talent.' },
      {
        name: 'Utility Wild Talent',
        level: 18,
        description: 'Gain an additional utility wild talent.',
      },
      { name: 'Infusion', level: 19, description: 'Gain an additional infusion wild talent.' },
      {
        name: 'Omnikinesis',
        level: 20,
        description:
          'At 20th level, the kineticist can use her kinetic blast with any element, treat all her blasts as composite for purposes of infusion specialization, and accept a maximum of 2 additional points of burn per round.',
      },
      {
        name: 'Infusion Specialization',
        level: 20,
        description: 'Infusion specialization reduction increases by 1.',
      },
      {
        name: 'Utility Wild Talent',
        level: 20,
        description: 'Gain an additional utility wild talent.',
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    source: 'Occult Adventures',
  },

  // ─── MEDIUM ────────────────────────────────────────────────────────────────
  {
    name: 'Medium',
    category: 'Occult',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Bluff',
      'Craft',
      'Diplomacy',
      'Fly',
      'Heal',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Linguistics',
      'Perception',
      'Perform',
      'Profession',
      'Sense Motive',
      'Spellcraft',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons'],
    armorProficiencies: ['Light armor', 'Medium armor'],
    startingWealth: '4d6 x 10 gp',
    classFeatures: [
      {
        name: 'Knacks',
        level: 1,
        description:
          'A medium learns a number of knacks, or 0-level psychic spells. These spells are cast like any other spell but do not consume spell slots.',
      },
      {
        name: 'Spirit',
        level: 1,
        description:
          'A medium can channel a spirit each day through a seance lasting 1 hour. She can channel one of six legendary spirits: Archmage, Champion, Guardian, Hierophant, Marshal, or Trickster. The channeled spirit grants a spirit bonus, spirit powers, and a spirit surge ability, but also imposes a taboo and the threat of influence.',
      },
      {
        name: 'Spirit Bonus',
        level: 1,
        description:
          'When channeling a spirit, the medium gains a +1 bonus that applies to different statistics depending on the spirit channeled. This bonus increases to +2 at 4th, +3 at 8th, +4 at 12th, +5 at 16th, and +6 at 20th level.',
      },
      {
        name: 'Spirit Power (Lesser)',
        level: 1,
        description:
          'At 1st level, the medium gains the lesser spirit power of her channeled spirit. Each spirit grants a different ability.',
      },
      {
        name: 'Spirit Surge',
        level: 1,
        description:
          'A medium can add a surge of spiritual power to a failed check by allowing the spirit to gain 1 point of influence over her. At 1st level, the surge is 1d6. This increases to 1d8 at 6th, 1d10 at 10th, and at 20th level she adds 1d6 to the result in addition.',
      },
      {
        name: 'Shared Seance',
        level: 2,
        description:
          'At 2nd level, the medium can share the lesser benefits of her seance with allies who participate in the ritual.',
      },
      {
        name: 'Taboo',
        level: 2,
        description:
          'At 2nd level, the medium can voluntarily accept a taboo to gain an additional use of spirit surge without allowing the spirit more influence.',
      },
      {
        name: 'Haunt Channeler',
        level: 3,
        description:
          "At 3rd level, the medium can detect haunts and can channel a haunt's energies to attempt to put it to rest. She can also communicate with the spirit behind a haunt.",
      },
      { name: 'Spirit Bonus', level: 4, description: 'Spirit bonus increases to +2.' },
      {
        name: 'Location Channel',
        level: 5,
        description:
          'At 5th level, the medium can channel the legend of a specific location instead of (or in addition to) a spirit, gaining special knowledge and abilities related to that place.',
      },
      {
        name: 'Spirit Power (Intermediate)',
        level: 6,
        description:
          'At 6th level, the medium gains the intermediate spirit power of her channeled spirit.',
      },
      { name: 'Spirit Surge', level: 6, description: 'Spirit surge increases to 1d8.' },
      {
        name: 'Connection Channel',
        level: 7,
        description:
          'At 7th level, the medium can use an object intimately connected to a person to channel information about that person.',
      },
      { name: 'Spirit Bonus', level: 8, description: 'Spirit bonus increases to +3.' },
      {
        name: 'Propitiation',
        level: 9,
        description:
          'At 9th level, the medium can make offerings to appease a spirit, reducing its influence over her by 1 point.',
      },
      { name: 'Spirit Surge', level: 10, description: 'Spirit surge increases to 1d10.' },
      {
        name: 'Spirit Power (Greater)',
        level: 11,
        description:
          'At 11th level, the medium gains the greater spirit power of her channeled spirit.',
      },
      { name: 'Spirit Bonus', level: 12, description: 'Spirit bonus increases to +4.' },
      {
        name: 'Ask the Spirits',
        level: 13,
        description:
          'At 13th level, the medium can ask the spirits a question once per day as if using the commune spell.',
      },
      {
        name: 'Astral Journey',
        level: 14,
        description:
          'At 14th level, the medium can project her consciousness to the Astral Plane once per day.',
      },
      {
        name: 'Trance of Three',
        level: 15,
        description:
          'At 15th level, the medium can channel two spirits simultaneously, gaining the lesser and intermediate powers of both.',
      },
      { name: 'Spirit Bonus', level: 16, description: 'Spirit bonus increases to +5.' },
      {
        name: 'Spirit Power (Supreme)',
        level: 17,
        description:
          'At 17th level, the medium gains the supreme spirit power of her channeled spirit.',
      },
      {
        name: 'Spacious Soul',
        level: 18,
        description:
          'At 18th level, the medium gains a +4 bonus on saving throws against possession and influence attempts. She also reduces spirit influence by an additional point each day.',
      },
      {
        name: 'Spirit Mastery',
        level: 19,
        description:
          "At 19th level, the medium's spirit can never gain enough influence to take control. She is immune to the negative effects of spirit influence.",
      },
      {
        name: 'Astral Beacon',
        level: 20,
        description:
          'At 20th level, the medium becomes a beacon for spirits and the spiritual world. She can channel any spirit without a seance, can channel three spirits simultaneously, and her spirit surge adds 1d6 to the result in addition to its normal die.',
      },
      { name: 'Spirit Bonus', level: 20, description: 'Spirit bonus increases to +6.' },
    ],
    spellcasting: {
      type: 'Psychic',
      casting: 'Spontaneous',
      spellList: 'Medium',
      spellTableKey: 'BLOODRAGER_PER_DAY',
      spellsKnownTableKey: 'BLOODRAGER_KNOWN',
    },
    source: 'Occult Adventures',
  },

  // ─── MESMERIST ─────────────────────────────────────────────────────────────
  {
    name: 'Mesmerist',
    category: 'Occult',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 6,
    classSkills: [
      'Appraise',
      'Bluff',
      'Craft',
      'Diplomacy',
      'Disguise',
      'Escape Artist',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (dungeoneering)',
      'Knowledge (history)',
      'Knowledge (local)',
      'Knowledge (nobility)',
      'Knowledge (religion)',
      'Linguistics',
      'Perception',
      'Perform',
      'Profession',
      'Sense Motive',
      'Sleight of Hand',
      'Spellcraft',
      'Stealth',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Hand crossbow', 'Sap', 'Sword cane', 'Whip'],
    armorProficiencies: ['Light armor'],
    startingWealth: '3d6 x 10 gp',
    classFeatures: [
      {
        name: 'Consummate Liar',
        level: 1,
        description:
          'A mesmerist adds half his class level (minimum 1) as a bonus on all Bluff checks.',
      },
      {
        name: 'Hypnotic Stare',
        level: 1,
        description:
          'A mesmerist can focus his stare on one creature within 30 feet as a swift action. The target takes a -2 penalty on Will saving throws. This penalty increases to -3 at 8th level. The mesmerist can maintain his stare against only one opponent at a time.',
      },
      {
        name: 'Knacks',
        level: 1,
        description:
          'Mesmerists learn a number of knacks, or 0-level psychic spells. These spells are cast like any other spell but do not consume spell slots.',
      },
      {
        name: 'Mesmerist Trick',
        level: 1,
        description:
          "A mesmerist can implant a trick in an ally's mind as a standard action, which triggers automatically when specific conditions are met (similar to a contingency). The mesmerist can maintain one implanted trick at 1st level, plus one more at 2nd, 4th, 6th, 8th, 10th, 12th, 14th, 16th, 18th, and 20th levels.",
      },
      {
        name: 'Painful Stare',
        level: 1,
        description:
          "When an attack hits the target of the mesmerist's hypnotic stare, the mesmerist can cause the target to take an additional 1 point of damage plus 1 for every 3 mesmerist levels. He can increase this to 1d6+1 per 3 levels if he makes the attack himself.",
      },
      { name: 'Mesmerist Trick', level: 2, description: 'Gain an additional mesmerist trick.' },
      {
        name: 'Towering Ego',
        level: 2,
        description: 'At 2nd level, the mesmerist adds his Charisma bonus on Will saves.',
      },
      {
        name: 'Bold Stare',
        level: 3,
        description:
          'At 3rd level and every 4 levels thereafter, a mesmerist gains a bold stare improvement that adds an additional effect to his hypnotic stare.',
      },
      {
        name: 'Touch Treatment (Minor)',
        level: 3,
        description:
          'At 3rd level, the mesmerist can remove the fascinated, shaken, or dazed condition from a willing creature with a melee touch attack as a standard action. At 6th level, he can remove moderate conditions (confused, frightened, sickened). At 10th level, greater conditions (cowering, nauseated, panicked, stunned). At 14th level, he duplicates break enchantment.',
      },
      { name: 'Mesmerist Trick', level: 4, description: 'Gain an additional mesmerist trick.' },
      {
        name: 'Manifold Tricks',
        level: 5,
        description:
          'At 5th level, the mesmerist can have two tricks implanted at the same time. This increases to 3 at 9th, 4 at 13th, and 5 at 17th level.',
      },
      {
        name: 'Mental Potency',
        level: 5,
        description:
          'At 5th level, the mesmerist can affect creatures with more HD than normal with his mind-affecting spells and abilities. He increases the maximum HD of creatures affected by 1, increasing by 1 again at 8th, 11th, 14th, 17th, and 20th level.',
      },
      { name: 'Mesmerist Trick', level: 6, description: 'Gain an additional mesmerist trick.' },
      {
        name: 'Touch Treatment (Moderate)',
        level: 6,
        description:
          'Touch treatment can now remove confused, frightened, and sickened conditions.',
      },
      { name: 'Bold Stare', level: 7, description: 'Gain an additional bold stare improvement.' },
      {
        name: 'Hypnotic Stare',
        level: 8,
        description: 'Hypnotic stare penalty increases to -3.',
      },
      { name: 'Mesmerist Trick', level: 8, description: 'Gain an additional mesmerist trick.' },
      {
        name: 'Manifold Tricks',
        level: 9,
        description: 'Can maintain 3 implanted tricks simultaneously.',
      },
      { name: 'Mesmerist Trick', level: 10, description: 'Gain an additional mesmerist trick.' },
      {
        name: 'Touch Treatment (Greater)',
        level: 10,
        description:
          'Touch treatment can now remove cowering, nauseated, panicked, and stunned conditions.',
      },
      { name: 'Bold Stare', level: 11, description: 'Gain an additional bold stare improvement.' },
      {
        name: 'Glib Lie',
        level: 11,
        description:
          "At 11th level, the mesmerist's lies are so convincing that they can fool even magical detection. His statements cannot be revealed as lies by spells like discern lies or zone of truth unless the caster succeeds at a caster level check.",
      },
      {
        name: 'Masterful Tricks',
        level: 12,
        description:
          'At 12th level, the mesmerist can select masterful tricks in addition to standard tricks.',
      },
      { name: 'Mesmerist Trick', level: 12, description: 'Gain an additional mesmerist trick.' },
      {
        name: 'Manifold Tricks',
        level: 13,
        description: 'Can maintain 4 implanted tricks simultaneously.',
      },
      { name: 'Mesmerist Trick', level: 14, description: 'Gain an additional mesmerist trick.' },
      {
        name: 'Touch Treatment (Break Enchantment)',
        level: 14,
        description: 'Touch treatment can now duplicate break enchantment.',
      },
      { name: 'Bold Stare', level: 15, description: 'Gain an additional bold stare improvement.' },
      { name: 'Mesmerist Trick', level: 16, description: 'Gain an additional mesmerist trick.' },
      {
        name: 'Manifold Tricks',
        level: 17,
        description: 'Can maintain 5 implanted tricks simultaneously.',
      },
      { name: 'Mesmerist Trick', level: 18, description: 'Gain an additional mesmerist trick.' },
      { name: 'Bold Stare', level: 19, description: 'Gain an additional bold stare improvement.' },
      { name: 'Mesmerist Trick', level: 20, description: 'Gain an additional mesmerist trick.' },
      {
        name: 'Rule Minds',
        level: 20,
        description:
          'At 20th level, the mesmerist can permanently control a creature as if using dominate monster. He can have one creature under this effect at a time. The creature does not receive periodic saving throws.',
      },
    ],
    spellcasting: {
      type: 'Psychic',
      casting: 'Spontaneous',
      spellList: 'Mesmerist',
      spellTableKey: 'SIX_LEVEL_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'SIX_LEVEL_SPONTANEOUS_KNOWN',
    },
    source: 'Occult Adventures',
  },

  // ─── OCCULTIST ─────────────────────────────────────────────────────────────
  {
    name: 'Occultist',
    category: 'Occult',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Appraise',
      'Craft',
      'Diplomacy',
      'Disable Device',
      'Disguise',
      'Fly',
      'Knowledge (arcana)',
      'Knowledge (engineering)',
      'Knowledge (history)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Linguistics',
      'Perception',
      'Profession',
      'Sense Motive',
      'Sleight of Hand',
      'Spellcraft',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (except tower shields)'],
    startingWealth: '4d6 x 10 gp',
    classFeatures: [
      {
        name: 'Focus Powers',
        level: 1,
        description:
          'An occultist gains the base focus power from each of his chosen implement schools. At 3rd level and every 2 levels thereafter, he gains an additional focus power selected from any school for which he has an implement. Activating a focus power costs mental focus from the associated implement.',
      },
      {
        name: 'Implements',
        level: 1,
        description:
          'An occultist learns to use two implement schools at 1st level and gains an additional school at 2nd, 6th, 10th, 14th, and 18th levels. Each implement school grants a resonant power (passive), a base focus power, and access to spells of that school. The occultist must carry a physical implement for each school.',
      },
      {
        name: 'Knacks',
        level: 1,
        description:
          'An occultist learns a number of knacks, or 0-level psychic spells. These spells are cast like any other spell but do not consume spell slots.',
      },
      {
        name: 'Mental Focus',
        level: 1,
        description:
          'An occultist has a pool of mental focus equal to his occultist level + Intelligence modifier. Each day he must invest mental focus into his implements to activate their resonant powers. He can also spend focus from invested implements to use focus powers. Uninvested focus serves as a generic pool.',
      },
      {
        name: 'Implements',
        level: 2,
        description: 'The occultist gains access to a 3rd implement school.',
      },
      {
        name: 'Magic Item Skill',
        level: 2,
        description:
          'At 2nd level, the occultist gains a bonus equal to half his level on Use Magic Device checks to activate magic items.',
      },
      {
        name: 'Object Reading',
        level: 2,
        description:
          'At 2nd level, an occultist can examine an item for 1 minute to learn information about its history, previous owners, and magical properties, as if using the psychometry occult skill unlock.',
      },
      { name: 'Focus Power', level: 3, description: 'Gain an additional focus power.' },
      {
        name: 'Shift Focus',
        level: 4,
        description:
          'At 4th level, as a full-round action the occultist can shift mental focus from one implement to another, moving up to his Intelligence modifier points of focus.',
      },
      {
        name: 'Aura Sight',
        level: 5,
        description:
          'At 5th level, the occultist can read the auras of creatures and objects as a standard action, functioning as the aura sight occult skill unlock.',
      },
      { name: 'Focus Power', level: 5, description: 'Gain an additional focus power.' },
      {
        name: 'Implements',
        level: 6,
        description: 'The occultist gains access to a 4th implement school.',
      },
      { name: 'Focus Power', level: 7, description: 'Gain an additional focus power.' },
      {
        name: 'Magic Circles',
        level: 8,
        description:
          'At 8th level, the occultist can draw a magic circle in 1 minute using 1 point of generic focus. The circle functions as a permanent magic circle against an alignment of his choice.',
      },
      {
        name: 'Outside Contact',
        level: 8,
        description:
          'At 8th level, the occultist can contact an outsider for information once per week. He gains additional contacts at 12th, 16th, and 20th levels.',
      },
      { name: 'Focus Power', level: 9, description: 'Gain an additional focus power.' },
      {
        name: 'Implements',
        level: 10,
        description: 'The occultist gains access to a 5th implement school.',
      },
      { name: 'Focus Power', level: 11, description: 'Gain an additional focus power.' },
      {
        name: 'Binding Circles',
        level: 12,
        description:
          'At 12th level, the occultist can draw binding circles that function as magic circles with the inward-focused effect, trapping creatures within.',
      },
      {
        name: 'Outside Contact',
        level: 12,
        description: 'The occultist gains an additional outside contact.',
      },
      { name: 'Focus Power', level: 13, description: 'Gain an additional focus power.' },
      {
        name: 'Implements',
        level: 14,
        description: 'The occultist gains access to a 6th implement school.',
      },
      { name: 'Focus Power', level: 15, description: 'Gain an additional focus power.' },
      {
        name: 'Fast Circles',
        level: 16,
        description:
          'At 16th level, the occultist can draw magic circles and binding circles as a full-round action instead of 1 minute.',
      },
      {
        name: 'Outside Contact',
        level: 16,
        description: 'The occultist gains an additional outside contact.',
      },
      { name: 'Focus Power', level: 17, description: 'Gain an additional focus power.' },
      {
        name: 'Implements',
        level: 18,
        description: 'The occultist gains access to a 7th implement school.',
      },
      { name: 'Focus Power', level: 19, description: 'Gain an additional focus power.' },
      {
        name: 'Implement Mastery',
        level: 20,
        description:
          'At 20th level, the occultist gains the ability to use all of his focus powers without needing to have the associated implement in hand. He can also invest generic focus to amplify the resonant power of one implement beyond its normal limit.',
      },
      {
        name: 'Outside Contact',
        level: 20,
        description: 'The occultist gains an additional outside contact.',
      },
    ],
    spellcasting: {
      type: 'Psychic',
      casting: 'Spontaneous',
      spellList: 'Occultist',
      spellTableKey: 'SIX_LEVEL_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'SIX_LEVEL_SPONTANEOUS_KNOWN',
    },
    source: 'Occult Adventures',
  },

  // ─── PSYCHIC ───────────────────────────────────────────────────────────────
  {
    name: 'Psychic',
    category: 'Occult',
    maxLevel: 20,
    hitDie: 6,
    skillRanksPerLevel: 2,
    classSkills: [
      'Bluff',
      'Craft',
      'Diplomacy',
      'Fly',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (dungeoneering)',
      'Knowledge (engineering)',
      'Knowledge (geography)',
      'Knowledge (history)',
      'Knowledge (local)',
      'Knowledge (nature)',
      'Knowledge (nobility)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Linguistics',
      'Perception',
      'Profession',
      'Sense Motive',
      'Spellcraft',
    ],
    babProgression: BABProgression.Low,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons'],
    armorProficiencies: [],
    startingWealth: '2d6 x 10 gp',
    classFeatures: [
      {
        name: 'Knacks',
        level: 1,
        description:
          'A psychic learns a number of knacks, or 0-level psychic spells. These spells are cast like any other spell but do not consume spell slots.',
      },
      {
        name: 'Phrenic Amplification',
        level: 1,
        description:
          'A psychic develops particular talents to augment her spellcasting. At 1st level and every 2 levels thereafter (3rd, 7th, 11th, 15th, 19th), she gains a phrenic amplification that she can apply to her spells by spending points from her phrenic pool.',
      },
      {
        name: 'Phrenic Pool',
        level: 1,
        description:
          'A psychic has a pool of supernatural mental energy equal to half her psychic level + her Wisdom or Charisma modifier (depending on discipline). She can expend points from this pool to use phrenic amplifications.',
      },
      {
        name: 'Psychic Discipline',
        level: 1,
        description:
          'A psychic selects a psychic discipline that grants additional spells and powers. Available disciplines include Abomination, Dream, Faith, Lore, Pain, Psychedelia, Rapport, Self-Perfection, and Tranquility. The discipline grants powers at 1st, 5th, and 13th levels, and bonus spells at every even level from 4th to 18th.',
      },
      {
        name: 'Discipline Power',
        level: 1,
        description: 'The psychic gains the 1st-level power of her chosen discipline.',
      },
      {
        name: 'Detect Thoughts',
        level: 2,
        description:
          "At 2nd level, a psychic can use detect thoughts as a spell-like ability at will. The DC is equal to 10 + half the psychic's level + her Charisma modifier.",
      },
      {
        name: 'Phrenic Amplification',
        level: 3,
        description: 'Gain an additional phrenic amplification.',
      },
      { name: 'Discipline Spell', level: 4, description: 'Gain a bonus discipline spell.' },
      {
        name: 'Discipline Power',
        level: 5,
        description: 'The psychic gains the 5th-level power of her chosen discipline.',
      },
      { name: 'Discipline Spell', level: 6, description: 'Gain a bonus discipline spell.' },
      {
        name: 'Phrenic Amplification',
        level: 7,
        description: 'Gain an additional phrenic amplification.',
      },
      { name: 'Discipline Spell', level: 8, description: 'Gain a bonus discipline spell.' },
      {
        name: 'Telepathic Bond',
        level: 9,
        description:
          'At 9th level, the psychic can create a telepathic bond (as the spell) as a standard action a number of times per day equal to her Charisma modifier.',
      },
      { name: 'Discipline Spell', level: 10, description: 'Gain a bonus discipline spell.' },
      {
        name: 'Major Amplifications',
        level: 11,
        description:
          'At 11th level, the psychic gains access to major amplifications whenever she would gain a phrenic amplification.',
      },
      {
        name: 'Phrenic Amplification',
        level: 11,
        description: 'Gain an additional phrenic amplification (may be major).',
      },
      { name: 'Discipline Spell', level: 12, description: 'Gain a bonus discipline spell.' },
      {
        name: 'Discipline Power',
        level: 13,
        description: 'The psychic gains the 13th-level power of her chosen discipline.',
      },
      { name: 'Discipline Spell', level: 14, description: 'Gain a bonus discipline spell.' },
      {
        name: 'Phrenic Amplification',
        level: 15,
        description: 'Gain an additional phrenic amplification (may be major).',
      },
      { name: 'Discipline Spell', level: 16, description: 'Gain a bonus discipline spell.' },
      {
        name: 'Telepathy',
        level: 17,
        description:
          'At 17th level, the psychic gains telepathy out to 100 feet. She can communicate telepathically with any creature that has a language.',
      },
      { name: 'Discipline Spell', level: 18, description: 'Gain a bonus discipline spell.' },
      {
        name: 'Phrenic Amplification',
        level: 19,
        description: 'Gain an additional phrenic amplification (may be major).',
      },
      {
        name: 'Remade Self',
        level: 20,
        description:
          "At 20th level, the psychic is constantly affected as if by an ongoing spell of her discipline's choice. She is also immune to mind-affecting effects unless she chooses to allow them, and she can rewrite her own memories and personality at will.",
      },
    ],
    spellcasting: {
      type: 'Psychic',
      casting: 'Spontaneous',
      spellList: 'Psychic',
      spellTableKey: 'FULL_9_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'FULL_9_SPONTANEOUS_KNOWN',
    },
    source: 'Occult Adventures',
  },

  // ─── SPIRITUALIST ──────────────────────────────────────────────────────────
  {
    name: 'Spiritualist',
    category: 'Occult',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Bluff',
      'Craft',
      'Fly',
      'Heal',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (dungeoneering)',
      'Knowledge (engineering)',
      'Knowledge (geography)',
      'Knowledge (history)',
      'Knowledge (local)',
      'Knowledge (nature)',
      'Knowledge (nobility)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Linguistics',
      'Profession',
      'Sense Motive',
      'Spellcraft',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Kukri', 'Sap', 'Scythe'],
    armorProficiencies: ['Light armor'],
    startingWealth: '2d6 x 10 gp',
    classFeatures: [
      {
        name: 'Etheric Tether',
        level: 1,
        description:
          'A spiritualist begins play with the ability to form a bond with a phantom, an emotional echo of a dead creature. The phantom is tethered to the spiritualist via an etheric tether and can manifest in ectoplasmic or incorporeal form.',
      },
      {
        name: 'Knacks',
        level: 1,
        description:
          'Spiritualists learn a number of knacks, or 0-level psychic spells. These spells are cast like any other spell but do not consume spell slots.',
      },
      {
        name: 'Phantom',
        level: 1,
        description:
          "A spiritualist begins play with a phantom, a spiritual entity bound to the spiritualist's consciousness. The phantom has an emotional focus (anger, dedication, despair, fear, hatred, jealousy, or zeal) that determines its abilities. It can manifest as either ectoplasmic (corporeal) or incorporeal form.",
      },
      {
        name: 'Shared Consciousness',
        level: 1,
        description:
          "At 1st level, while the phantom is confined within the spiritualist's consciousness, the spiritualist gains the Skill Focus feat in two skills determined by the phantom's emotional focus. She also gains a +4 bonus on saving throws against mind-affecting effects.",
      },
      {
        name: 'Bonded Senses',
        level: 2,
        description:
          "At 2nd level, as a standard action the spiritualist can share her phantom's senses, seeing, hearing, and smelling what it does for a number of rounds per day equal to her spiritualist level.",
      },
      {
        name: 'Bonded Manifestation',
        level: 3,
        description:
          'At 3rd level, the spiritualist can pull her phantom partially into her own body, gaining ectoplasmic armor (+4 armor bonus to AC) or incorporeal movement (20% concealment). Uses last for a number of rounds per day equal to 3 + her level. Additional options unlock at 8th, 13th, and 18th levels.',
      },
      {
        name: 'Spiritual Interference',
        level: 4,
        description:
          'At 4th level, while her phantom is manifested adjacent to her, the spiritualist gains a +2 shield bonus to AC and a +2 circumstance bonus on saving throws.',
      },
      {
        name: 'Detect Undead',
        level: 5,
        description:
          'At 5th level, the spiritualist can use detect undead at will as a spell-like ability.',
      },
      {
        name: 'Phantom Recall',
        level: 6,
        description:
          'At 6th level, once per day the spiritualist can teleport her phantom to her side as if using dimension door. This increases to 2/day at 10th, 3/day at 14th, and 4/day at 18th.',
      },
      {
        name: 'Calm Spirit',
        level: 7,
        description:
          'At 7th level, the spiritualist can use calm spirit as a spell-like ability once per day. This increases to 2/day at 11th, 3/day at 15th, and 4/day at 19th.',
      },
      {
        name: 'Bonded Manifestation',
        level: 8,
        description:
          'Bonded manifestation gains additional options: ectoplasmic tendrils (natural attacks) or incorporeal flight.',
      },
      {
        name: 'See Invisibility',
        level: 9,
        description:
          'At 9th level, the spiritualist can use see invisibility as a spell-like ability once per day, lasting 10 minutes.',
      },
      {
        name: 'Fused Consciousness',
        level: 10,
        description:
          "At 10th level, the spiritualist always gains the bonded senses benefit while her phantom is manifested, regardless of whether it's in her consciousness.",
      },
      { name: 'Phantom Recall', level: 10, description: 'Phantom recall increases to 2/day.' },
      { name: 'Calm Spirit', level: 11, description: 'Calm spirit increases to 2/day.' },
      {
        name: 'Greater Spiritual Interference',
        level: 12,
        description:
          'At 12th level, the bonuses from spiritual interference extend to all allies adjacent to the phantom.',
      },
      {
        name: 'Bonded Manifestation',
        level: 13,
        description:
          'Bonded manifestation improves: ectoplasmic armor bonus increases to +6, incorporeal form grants invisibility option.',
      },
      {
        name: 'Spiritual Bond',
        level: 14,
        description:
          'At 14th level, the spiritualist can redirect damage she takes to her manifested phantom as an immediate action.',
      },
      { name: 'Phantom Recall', level: 14, description: 'Phantom recall increases to 3/day.' },
      { name: 'Calm Spirit', level: 15, description: 'Calm spirit increases to 3/day.' },
      {
        name: 'Call Spirit',
        level: 16,
        description:
          'At 16th level, the spiritualist can use call spirit as a spell-like ability once per day.',
      },
      {
        name: 'Dual Bond',
        level: 17,
        description:
          'At 17th level, the spiritualist can use bonded manifestation more frequently (3 + 2 x class level rounds per day).',
      },
      {
        name: 'Bonded Manifestation',
        level: 18,
        description:
          'Bonded manifestation reaches full power: ectoplasmic tendrils gain full-round attack, incorporeal form gains flight.',
      },
      { name: 'Phantom Recall', level: 18, description: 'Phantom recall increases to 4/day.' },
      { name: 'Calm Spirit', level: 19, description: 'Calm spirit increases to 4/day.' },
      {
        name: 'Empowered Consciousness',
        level: 20,
        description:
          'At 20th level, the spiritualist gains immunity to mind-affecting effects and possession while her phantom is within her consciousness. If her phantom is manifested, she can recall it to her consciousness as an immediate action.',
      },
    ],
    spellcasting: {
      type: 'Psychic',
      casting: 'Spontaneous',
      spellList: 'Spiritualist',
      spellTableKey: 'SIX_LEVEL_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'SIX_LEVEL_SPONTANEOUS_KNOWN',
    },
    source: 'Occult Adventures',
  },
];
