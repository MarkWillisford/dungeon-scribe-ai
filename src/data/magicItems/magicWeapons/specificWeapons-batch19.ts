import type { MagicWeaponDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const specificWeaponsBatch19: MagicWeaponDefinition[] = [
  // 451
  {
    id: 'weapon-blade-of-the-willing-martyr',
    name: 'Blade of the Willing Martyr',
    category: 'magic_weapon', source: 'Seekers of Secrets', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 18, slot: 'none', price: 150000, weight: 1,
    description: '+3 keen vicious athame (dagger). Its signature power activates outside combat by applying the wielder\'s blood to the target or the target\'s possessions or body parts. The target makes a DC 23 Will save; on a failure, a soul link is established so that should the wielder die, the target dies, suffering the same apparent injuries and symptoms, and likewise the wielder dies if the target dies. Only break enchantment or remove curse can sever this link.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['enervation', 'keen edge', 'symbol of death'], cost: 75000 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'dagger', enhancementBonus: 3, weaponSpecialAbilities: [
      { id: 'keen', name: 'Keen', description: 'Doubles the threat range of the weapon.', bonusEquivalent: 1, casterLevel: 10, effects: [] },
      { id: 'vicious', name: 'Vicious', description: 'Deals an extra 2d6 damage to the target and 1d6 damage to the wielder.', bonusEquivalent: 1, casterLevel: 9, effects: [] },
    ],
  },
  // 452
  {
    id: 'weapon-jorngarls-harm',
    name: "Jorngarl's Harm",
    category: 'magic_weapon', source: 'Classic Treasures Revisited', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 18, slot: 'none', price: 150320, weight: 24,
    description: 'Large +2 keen vorpal greataxe with an adamantine haft and a guillotine-style blade that laughs when it kills. The weapon traps the souls of those it slays, preventing resurrection until the soul is released.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['circle of death', 'enervation', 'keen edge'], cost: 75320 },
    physicalStats: { hardness: 20, hitPoints: 10, breakDC: 22 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'greataxe', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'keen', name: 'Keen', description: 'Doubles the threat range of the weapon.', bonusEquivalent: 1, casterLevel: 10, effects: [] },
      { id: 'vorpal', name: 'Vorpal', description: 'On a natural 20 that is confirmed, severs the target\'s head.', bonusEquivalent: 5, casterLevel: 18, effects: [] },
    ],
  },
  // 453
  {
    id: 'weapon-sword-of-inner-fire',
    name: 'Sword of Inner Fire',
    category: 'magic_weapon', source: 'Mythic Adventures', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16, slot: 'none', price: 151315, weight: 4,
    description: '+1 flaming burst brilliant energy longsword with a copper hilt wreathed in blue and white flame. For a mythic wielder, the fire damage bypasses resistance and immunity. By expending one use of mythic power, the wielder can enable the weapon to damage nonliving creatures for 1 round. At 3rd tier or higher, the wielder can absorb the sword into her body, gaining a +5 deflection bonus to AC and a +2 luck bonus on saves, with her eyes burning orange.',
    construction: { feats: ['Craft Magic Arms and Armor', 'Mythic Crafter'], spells: ['flame strike', 'gaseous form', 'instant summons', 'shield of faith'], cost: 75815 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'longsword', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'flaming_burst', name: 'Flaming Burst', description: 'Deals an extra 1d6 fire damage and explodes with flame on a critical hit.', bonusEquivalent: 2, casterLevel: 12, effects: [] },
      { id: 'brilliant_energy', name: 'Brilliant Energy', description: 'Ignores nonliving matter and armor or shield bonuses.', bonusEquivalent: 4, casterLevel: 16, effects: [] },
    ],
  },
  // 454
  {
    id: 'weapon-ghost-iron-scimitar',
    name: 'Ghost Iron Scimitar',
    category: 'magic_weapon', source: 'Pathfinder #66: The Dead Heart of Xin', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 20, slot: 'none', price: 162315, weight: 8,
    description: '+2 dancing keen ghost touch scimitar crafted from inubrix skymetal. It represents a failed attempt by Xin to create an eighth Alara\'hai (Sword of Sin); it maintains normal damage despite the soft material and is magically protected from being broken. The weapon ignores armor and shield bonuses granted by metal objects, but it cannot damage creatures made of metal.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['animate objects', 'keen edge', 'plane shift'], cost: 100315 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'scimitar', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'dancing', name: 'Dancing', description: 'Can be loosed to attack independently for 4 rounds.', bonusEquivalent: 4, casterLevel: 15, effects: [] },
      { id: 'keen', name: 'Keen', description: 'Doubles the threat range of the weapon.', bonusEquivalent: 1, casterLevel: 10, effects: [] },
      { id: 'ghost_touch', name: 'Ghost Touch', description: 'Can affect incorporeal creatures as if they were corporeal.', bonusEquivalent: 1, casterLevel: 9, effects: [] },
    ],
  },
  // 455
  {
    id: 'weapon-arrow-splitter',
    name: 'Arrow Splitter',
    category: 'magic_weapon', source: 'Ranged Tactics Toolbox', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 15, slot: 'none', price: 180375, weight: 3,
    description: '+5 second chance longbow crafted from willow wood. A creature struck by an arrow fired from an arrow splitter takes an additional 1d6 points of precision damage for each arrow that hits it within the same round. The second arrow adds 1d6 extra damage, the third adds 2d6, and so forth.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['ricochet shot', 'sonic thrust'], cost: 90375 },
    physicalStats: { hardness: 5, hitPoints: 5, breakDC: 16 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'longbow', enhancementBonus: 5, weaponSpecialAbilities: [
      { id: 'second_chance', name: 'Second Chance', description: 'Grants one reroll on a missed attack per day.', bonusEquivalent: 1, casterLevel: 5, effects: [] },
    ],
  },
  // 456
  {
    id: 'weapon-mournful-razor',
    name: 'Mournful Razor',
    category: 'magic_weapon', source: 'Pathfinder #78: City of Locusts', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 20, slot: 'none', price: 182308, weight: 1,
    description: '+3 vorpal war razor that automatically resizes from Tiny to Huge while retaining its status as a light weapon. Targets struck by a sneak attack from the razor must succeed at a DC 16 Will save or suffer a despair curse: a cursed creature has a 50% chance each round to act normally, and the curse persists while the creature remains wounded.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['bestow curse', 'circle of death', 'keen edge'], cost: 91308 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'war_razor', enhancementBonus: 3, weaponSpecialAbilities: [
      { id: 'vorpal', name: 'Vorpal', description: 'On a natural 20 that is confirmed, severs the target\'s head.', bonusEquivalent: 5, casterLevel: 18, effects: [] },
    ],
  },
  // 457
  {
    id: 'weapon-sirocco-cannon',
    name: 'Sirocco Cannon',
    category: 'magic_weapon', source: "Pathfinder #60: From Hell's Heart", isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10, slot: 'none', price: 184500, weight: 800,
    description: '+1 shocking burst cannon that generates special ammunition three times per day. Upon impact, the projectile creates a furnace-wind effect in a 20-foot radius extending 60 feet high for 10 rounds. The wind deals 4d6+10 fire damage, knocks creatures prone, and fatigues them (DC 19 Fortitude save halves damage and negates the knockdown). Water-type creatures take double damage and suffer a –4 penalty on their saves.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['lightning bolt', 'sirocco'], cost: 95400 },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 20 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'cannon', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'shocking_burst', name: 'Shocking Burst', description: 'Deals extra electricity damage and bursts with lightning on a critical hit.', bonusEquivalent: 2, casterLevel: 12, effects: [] },
    ],
  },
  // 458
  {
    id: 'weapon-sacred-avenger',
    name: 'Sacred Avenger',
    category: 'magic_weapon', source: 'Mythic Adventures', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 20, slot: 'none', price: 202630, weight: 4,
    description: '+3 longsword that becomes a +5 holy defiant cold iron longsword in the hands of a paladin or lawful good mythic creature. For a mythic paladin, the sword can be commanded to manifest brilliant energy and grants spell resistance equal to 5 + the paladin\'s levels + mythic tier. The wielder can use mythic greater dispel magic once per round and is healed 1d6 damage per spell level dispelled in this way.',
    construction: { feats: ['Craft Magic Arms and Armor', 'Mythic Crafter'], spells: ['gaseous form', 'greater dispel magic', 'holy aura'], cost: 102630 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'longsword', enhancementBonus: 3, weaponSpecialAbilities: [],
  },
  // 459
  // 460
  // 461
  // 462
  // 463
  // 464
  {
    id: 'weapon-effortless-lace',
    name: 'Effortless Lace',
    category: 'magic_weapon', source: "Giant Hunter's Handbook", isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15, slot: 'none', price: 2500, weight: 0,
    description: 'A magical silk ribbon that enhances one-handed piercing or slashing weapons. When wrapped around a weapon\'s grip for 24 hours, it permanently reduces the attack penalty for undersized wielders by 2 (minimum 0). For properly-sized users, the weapon gains the light weapon property for feats and abilities. The ribbon must remain attached or its magic is lost; weapon destruction or dispelling effects also destroy the ribbon.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['shrink item'], cost: 1250 },
    physicalStats: { hardness: 2, hitPoints: 2, breakDC: 10 },
    activationCategory: 'continuous', effects: [],
    baseWeaponId: 'longsword', enhancementBonus: 1, weaponSpecialAbilities: [],
  },
  // 465
  {
    id: 'weapon-blade-of-lifes-defense',
    name: "Blade of Life's Defense",
    category: 'magic_weapon', source: "Merchant's Manifest", isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3, slot: 'none', price: 170, weight: 6,
    description: 'A khopesh with a polished silver blade etched with vine and leaf motifs. It provides a +1 sacred bonus on saving throws against the abilities of undead and functions as a standard khopesh otherwise.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['bless'], cost: 85 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'sacred', target: 'save.all', value: 1, source: "Blade of Life's Defense", condition: { type: 'custom', params: {}, description: 'against abilities of undead' } },
    ],
    baseWeaponId: 'khopesh', enhancementBonus: 1, weaponSpecialAbilities: [],
  },
  // 466
  {
    id: 'weapon-secure-sheath',
    name: 'Secure Sheath',
    category: 'magic_weapon', source: 'Martial Arts Handbook', isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 4, slot: 'none', price: 500, weight: 1,
    description: 'A magical sheath that takes various decorative forms. Once a character wears it continuously for 24 hours, they become the owner. If anyone other than the owner attempts to draw a weapon from a secure sheath, they find that the weapon is stuck and must succeed at a DC 20 Strength check to pull it out.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['glue seal'], cost: 250 },
    physicalStats: { hardness: 5, hitPoints: 2, breakDC: 14 },
    activationCategory: 'continuous', effects: [],
    baseWeaponId: 'longsword', enhancementBonus: 1, weaponSpecialAbilities: [],
  },
  // 467
  // 468
  // 469
  // 470
  // 471
  // 472
  // 473
  // 474
  // 475
];
