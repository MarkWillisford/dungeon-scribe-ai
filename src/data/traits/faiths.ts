import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const FAITH_TRAITS: TraitDefinition[] = [
  // ==================== RELIGION TRAITS ====================
  {
    id: 'blessed_touch',
    name: 'Blessed Touch',
    description:
      'You heal 1 additional point of damage when using lay on hands, channeling energy, or casting a cure spell.',
    shortDescription: '+1 HP healed with lay on hands, channel energy, or cure spells',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Sarenrae',
    prerequisites: [{ type: 'deity', deityName: 'Sarenrae' }],
    effects: [],
    tags: ['healing', 'channel', 'lay on hands', 'cure'],
  },
  {
    id: 'flame_of_the_dawnflower',
    name: 'Flame of the Dawnflower',
    description:
      'You have been raised to view even the scimitar as a holy weapon. When you score a critical hit with a scimitar, you deal 2 additional points of fire damage.',
    shortDescription: '+2 fire damage on scimitar critical hits',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Sarenrae',
    prerequisites: [{ type: 'deity', deityName: 'Sarenrae' }],
    effects: [],
    tags: ['scimitar', 'fire', 'critical', 'damage'],
  },
  {
    id: 'strong_willed',
    name: 'Strong-Willed',
    description:
      'Your fierce sense of self-reliance and independence makes you resistant to mental control. You gain a +1 trait bonus on saving throws against enchantment effects.',
    shortDescription: '+1 trait bonus on saves vs enchantment',
    source: 'Faiths of Balance',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Calistria',
    prerequisites: [{ type: 'deity', deityName: 'Calistria' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Strong-Willed',
        condition: { type: 'custom', params: {}, description: 'Against enchantment effects' },
      },
    ],
    tags: ['save', 'enchantment'],
  },
  {
    id: 'battlefield_caster',
    name: 'Battlefield Caster',
    description:
      'Your faith in your god steels your resolve on the battlefield. You receive a +1 trait bonus on concentration checks to cast defensively, and a +1 trait bonus on caster level checks.',
    shortDescription: '+1 on defensive casting concentration and caster level checks',
    source: 'Faiths of Corruption',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    prerequisites: [],
    effects: [],
    tags: ['concentration', 'defensive casting', 'caster level'],
  },
  {
    id: 'divine_warrior',
    name: 'Divine Warrior',
    description:
      'From an early age, you were raised to serve a divine power. You gain a +1 trait bonus on melee weapon damage rolls against foes who are enemies of your faith.',
    shortDescription: '+1 melee damage vs enemies of your faith',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    prerequisites: [],
    effects: [],
    tags: ['melee', 'damage', 'faith'],
  },
  {
    id: 'patient_optimist',
    name: 'Patient Optimist',
    description:
      'You know that diplomacy can take time, and sometimes you just need to keep trying. You gain a +2 trait bonus on Diplomacy checks to influence hostile or unfriendly creatures.',
    shortDescription: '+2 Diplomacy vs hostile or unfriendly creatures',
    source: 'Faiths of Purity',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Shelyn',
    prerequisites: [{ type: 'deity', deityName: 'Shelyn' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Patient Optimist',
        condition: {
          type: 'custom',
          params: {},
          description: 'To influence hostile or unfriendly creatures',
        },
      },
    ],
    tags: ['diplomacy', 'social'],
  },
  {
    id: 'underlying_principles',
    name: 'Underlying Principles',
    description:
      'You have a keen mind for seeing connections between seemingly unrelated things. You may use your Intelligence modifier when making Diplomacy checks instead of your Charisma modifier.',
    shortDescription: 'Use Int instead of Cha for Diplomacy',
    source: 'Faiths of Balance',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Abadar',
    prerequisites: [{ type: 'deity', deityName: 'Abadar' }],
    effects: [],
    tags: ['diplomacy', 'intelligence'],
  },
  {
    id: 'eyes_of_the_wild',
    name: 'Eyes of the Wild',
    description:
      'You are used to living in the wild, and are a keen observer. You gain a +2 trait bonus on Perception checks in natural settings.',
    shortDescription: '+2 Perception in natural settings',
    source: 'Faiths of Balance',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    subcategory: 'Gozreh',
    prerequisites: [{ type: 'deity', deityName: 'Gozreh' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Eyes of the Wild',
        condition: { type: 'custom', params: {}, description: 'In natural settings' },
      },
    ],
    tags: ['perception', 'nature', 'wilderness'],
  },
  {
    id: 'defy_madness',
    name: 'Defy Madness',
    description:
      'Your extravagant devotion to your faith has given you strength against corruption. You gain a +1 trait bonus on saving throws against confusion and insanity effects. You also gain a +1 trait bonus on Knowledge (dungeoneering) checks.',
    shortDescription: '+1 saves vs confusion/insanity; +1 Knowledge (dungeoneering)',
    source: 'Faiths of Balance',
    verificationStatus: 'needs_review' as const,
    category: 'religion',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeDungeoneering',
        value: 1,
        source: 'Defy Madness',
      },
    ],
    tags: ['save', 'confusion', 'insanity', 'knowledge', 'dungeoneering'],
  },
];
