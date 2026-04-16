import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsRZ9: WondrousItemDefinition[] = [
  {
    id: 'wondrous-swordmasters-flair',
    name: "Swordmaster's Flair",
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',
    price: 2500,
    weight: 0,
    description:
      'Colorful off-hand accessories granting combat abilities. Swashbucklers spend panache; others get 1 free daily use. ' +
      'Blue Scarf: +5 ft reach with light/one-handed piercing. Green Glove: negate difficult terrain. Red Sash: bonus trip vs. ' +
      'chargers. White Lace Kerchief: blindfight vs. adjacent unseen enemies.',
    construction: { feats: ['Craft Wondrous Item', 'Blind-Fight', 'Improved Trip', 'Lunge', 'Nimble Moves'], spells: ['good hope'], cost: 1250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.swordmasters_flair_variant', value: 0, source: "Swordmaster's Flair" }],
  },
  {
    id: 'wondrous-symbol-of-luck',
    name: 'Symbol of Luck',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',
    price: 6000,
    weight: 1,
    description:
      'Glass sphere matching owner\'s holy symbol. When a halfling with luck racial traits channels healing energy, recipients ' +
      'gain +1 luck bonus on saves for rounds equal to dice healed.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['divine favor'], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'bonus', bonusType: 'luck', target: 'save.all', value: 1, source: 'Symbol of Luck', condition: { type: 'custom', params: {}, description: 'halfling channeler only; duration = healing dice' } }],
  },
  {
    id: 'wondrous-talisman-of-the-summoned-steed',
    name: 'Talisman of the Summoned Steed',
    category: 'wondrous',
    source: 'Taldor, Echoes of Glory',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 1,
    slot: 'none',
    price: 3600,
    weight: 0,
    description:
      'Onyx stallion charm with a tiny twine bridle. Command word manifests a saddled light horse; same command returns it. ' +
      'If killed, reverts to talisman and unusable for 24 hours. Each talisman\'s horse has unique coloring.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['mount'], cost: 1800 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.talisman_summoned_steed', value: 0, source: 'Talisman of the Summoned Steed' }],
  },
  {
    id: 'wondrous-talons-of-leng',
    name: 'Talons of Leng',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15,
    slot: 'hands',
    price: 67000,
    weight: 1,
    description:
      'Ornate gold filigree talons granting +3 natural claw attacks (1d4 Medium, 1d3 Small). Crits force DC 20 Will or ' +
      'permanent confusion. Wearer gains confusion immunity but permanent -2 Wisdom. Don\'t interfere with spellcasting or items.',
    construction: { feats: ['Craft Magic Arms and Armor', 'Craft Wondrous Item'], spells: ['greater magic fang', 'insanity'], cost: 33500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'immunity', target: 'special.confused', value: 0, source: 'Talons of Leng' },
      { type: 'penalty', target: 'ability.wis', value: -2, source: 'Talons of Leng' },
    ],
  },
  {
    id: 'wondrous-tankard-of-the-drunken-hero',
    name: 'Tankard of the Drunken Hero',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 5300,
    weight: 1,
    description:
      'Worn copper/tin tankard with belt handle. +1 resistance on Fort and Will saves. Drink alcohol for remove fear. ' +
      'If Cayden Cailean is patron: functions as holy symbol, heroism on alcohol consumption. 1/day auto-escape ' +
      'ropes/locks (DC 25 or lower) within 5 min of binding.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate rope', 'heroism', 'knock', 'remove fear', 'resistance'], cost: 2650 },
    physicalStats: { hardness: 5, hitPoints: 3, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.fortitude', value: 1, source: 'Tankard of the Drunken Hero' },
      { type: 'bonus', bonusType: 'resistance', target: 'save.will', value: 1, source: 'Tankard of the Drunken Hero' },
    ],
  },
  // Deferred items (AoN pages did not render):
  // Swarmlord's Jar, Swordlord's Cloak, Symbol of Sanguine Protection,
  // Symbol of Unholy Command, Tabard (Crusader's), Tablet of Languages Lost,
  // Tablet of Spell Storing, Tablet of the First Law, Talisman of Beast Training,
  // Talisman of Soul-Eating, Talisman of the Orc Mother's Fury,
  // Talisman (Beast), Talisman (Deathbalm), Talisman (Death's Head),
  // Talisman (Greater), Talisman (Lesser), Talisman (Melancholic),
  // Talisman (Sanguine), Tattoo (Animal Totem), Tattoo (Caster's)
];
