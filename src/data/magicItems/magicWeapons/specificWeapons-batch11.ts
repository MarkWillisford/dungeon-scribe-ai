import type { MagicWeaponDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const specificWeaponsBatch11: MagicWeaponDefinition[] = [
  // 251
  {
    id: 'weapon-purging-falcata',
    name: 'Purging Falcata',
    category: 'magic_weapon', source: 'Inner Sea Combat', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9, slot: 'none', price: 19318, weight: 4,
    description: '+2 falcata first constructed for use during Taldor\'s great purge of the Sarenite Cult of the Dawnflower, inscribed with various religious slurs. The blade can be attuned to any single deity (typically set at creation). Against followers of the attuned religion, the weapon deals an additional 2d6 damage (not multiplied on critical hits). A wielder with the challenge class feature suffers no AC penalty when challenging attuned religion members; against such challenged targets the extra damage increases to 3d6.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['weapon of awe'], cost: 9818 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'falcata', enhancementBonus: 2, weaponSpecialAbilities: [],
  },
  // 252
  {
    id: 'weapon-bow-of-erastil',
    name: 'Bow of Erastil',
    category: 'magic_weapon', source: 'Mythic Adventures', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15, slot: 'none', price: 19500, weight: 5,
    description: '+1 distance composite longbow (+6 Str) that generates golden arrows automatically as its string is drawn (endless ammunition). By expending one use of mythic power, the wielder makes a single attack roll against all enemies within 60 feet; damage applies to all hit targets, with only one enemy chosen for critical confirmation if applicable.',
    construction: { feats: ['Craft Magic Arms and Armor', 'Mythic Crafter'], spells: ['clairaudience/clairvoyance', 'haste'], cost: 9750 },
    physicalStats: { hardness: 5, hitPoints: 10, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'composite_longbow', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'distance', name: 'Distance', description: 'The weapon\'s range increment is doubled.', bonusEquivalent: 1, casterLevel: 6, effects: [] },
    ],
  },
  // 253
  {
    id: 'weapon-skirmishing-spear',
    name: 'Skirmishing Spear',
    category: 'magic_weapon', source: 'Mythic Adventures', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7, slot: 'none', price: 19502, weight: 6,
    description: '+1 returning spear that, when thrown, is treated as a one-handed weapon and grants a +2 bonus on attack rolls. On a hit, the wielder can spend one use of mythic power as an immediate action to teleport adjacent to the target via dimension door; the spear returns to the wielder\'s hand on arrival. The wielder can act normally after teleporting and, if no move action was taken before throwing, may continue a full attack.',
    construction: { feats: ['Craft Magic Arms and Armor', 'Mythic Crafter'], spells: ['dimension door', 'telekinesis'], cost: 9902 },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'spear', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'returning', name: 'Returning', description: 'The weapon returns to the thrower\'s hand at the start of its next turn.', bonusEquivalent: 1, casterLevel: 7, effects: [] },
    ],
  },
  // 254
  {
    id: 'weapon-talon-sword',
    name: 'Talon Sword',
    category: 'magic_weapon', source: 'Andoran, Spirit of Liberty', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 8, slot: 'none', price: 19515, weight: 6,
    description: '+2 defending alchemical silver bastard sword, easily recognized by its notched blade and golden quillons crafted like upswept eagle wings. Favored by the Eagle Knights, its defending ability also protects the wielder\'s mount, transferring part of the weapon\'s enhancement bonus to the mount\'s AC as well.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['shield of faith', 'shield other'], cost: 10015 },
    physicalStats: { hardness: 8, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'bastard_sword', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'defending', name: 'Defending', description: 'Allows the wielder to transfer some or all of the weapon\'s enhancement bonus to AC as a free action.', bonusEquivalent: 1, casterLevel: 8, effects: [] },
    ],
  },
  // 255
  {
    id: 'weapon-harbingers-scythe',
    name: "Harbinger's Scythe",
    category: 'magic_weapon', source: 'Pathfinder #139: The Dead Road', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7, slot: 'none', price: 19518, weight: 10,
    description: '+2 scythe. Once per day after confirming a critical hit, the wielder can trigger a soul-stealing wave affecting all enemies within 10 feet. Targets must succeed at a DC 16 Will save or gain one temporary negative level lasting one hour. This ability does not activate against helpless or unaware creatures, or those with Hit Dice less than half the wielder\'s total.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['enervation'], cost: 9918 },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 20 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'scythe', enhancementBonus: 2, weaponSpecialAbilities: [],
  },
  // 256
  {
    id: 'weapon-shadowbound-chains',
    name: 'Shadowbound Chains',
    category: 'magic_weapon', source: 'Inner Sea Combat', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9, slot: 'none', price: 19725, weight: 10,
    description: '+1 vicious viridium spiked chain that appears jagged and spiked, shifting between hues of muted green and deep violet. Followers of Zon-Kuthon wielding it gain immunity to viridium\'s disease effect. When the wielder damages a creature below 0 hp without killing it, they may summon a shadow duplicate as a free action that remains friendly to the wielder and lacks spawn abilities. The original target cannot receive healing above -1 hp while its shadow exists. The shadow persists for 10 rounds or until the host dies, whichever occurs first. Only one shadow may exist per wielder.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['shadow conjuration'], cost: 11125 },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 20 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'spiked_chain', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'vicious', name: 'Vicious', description: 'On each hit, deals an additional 2d6 damage to the target and 1d6 damage to the wielder.', bonusEquivalent: 1, casterLevel: 9, effects: [] },
    ],
  },
  // 257
  {
    id: 'weapon-shieldmarshals-pistol',
    name: "Shieldmarshal's Pistol",
    category: 'magic_weapon', source: "Weapon Master's Handbook", isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9, slot: 'none', price: 20050, weight: 5,
    description: '+1 double-barreled pistol containing a single preset grit feat. Anyone who wields or carries the shieldmarshal\'s pistol and meets the feat\'s prerequisites gains the feat\'s benefit. Typical options include Deft Shootist Deed, Fabulist, Gun Twirling, Leaping Shot Deed, No Name, or Ricochet Shot Deed. The granted feat cannot satisfy prerequisites for other abilities.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['share memory'], cost: 11050 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'continuous', effects: [],
    baseWeaponId: 'double_barreled_pistol', enhancementBonus: 1, weaponSpecialAbilities: [],
  },
  // 258
  {
    id: 'weapon-doubleshot-pepperbox',
    name: 'Doubleshot Pepperbox',
    category: 'magic_weapon', source: "Pathfinder #60: From Hell's Heart", isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7, slot: 'none', price: 20300, weight: 5,
    description: '+1 thundering pepperbox featuring dragon-motif ornamentation and an intricately carved wooden grip. Unlike standard pepperboxes with independent barrels, this version permits firing two barrels with the same action like a double-barreled pistol (at a -4 penalty to each shot).',
    construction: { feats: ['Craft Magic Arms and Armor', 'Rapid Shot'], spells: ['blindness/deafness', 'haste'], cost: 11800 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'pepperbox', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'thundering', name: 'Thundering', description: 'On a critical hit deals 1d8 sonic damage (or 2d8 on a x3 critical, 3d8 on a x4), and the target must save or be deafened permanently.', bonusEquivalent: 1, casterLevel: 5, effects: [] },
    ],
  },
  // 259
  {
    id: 'weapon-firedrake-pistol',
    name: 'Firedrake Pistol',
    category: 'magic_weapon', source: 'Ultimate Equipment', isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5, slot: 'none', price: 20300, weight: 4,
    description: '+1 flaming pistol with a barrel carved in the semblance of a roaring dragon and a grip wrapped in polished red dragonhide. The wielder may elect to convert all damage from the weapon to fire. As a standard action, by expending one unit of ammunition, the wielder can create a cone of fire equivalent to burning hands.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['burning hands', 'fireball'], cost: 10800 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'pistol', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'flaming', name: 'Flaming', description: 'Deals an additional 1d6 fire damage on each successful hit.', bonusEquivalent: 1, casterLevel: 10, effects: [] },
    ],
  },
  // 260
  {
    id: 'weapon-ricochet-hammer',
    name: 'Ricochet Hammer',
    category: 'magic_weapon', source: 'Ultimate Equipment', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7, slot: 'none', price: 20301, weight: 2,
    description: '+1 returning light hammer. When thrown by a wielder with multiple attacks from a high base attack bonus, the hammer rebounds off the first target to strike a second target, continuing for each of the wielder\'s additional attacks. Range penalties apply cumulatively to each successive target. The weapon only continues ricocheting if it successfully hits; a miss ends the ricochet sequence. Ricocheting attacks count as the wielder\'s additional attacks that round.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['telekinesis'], cost: 10150 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'light_hammer', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'returning', name: 'Returning', description: 'The weapon returns to the thrower\'s hand at the start of its next turn.', bonusEquivalent: 1, casterLevel: 7, effects: [] },
    ],
  },
  // 261
  {
    id: 'weapon-shields-bane-ulfen',
    name: "Shields' Bane (Ulfen)",
    category: 'magic_weapon', source: 'Inner Sea Races', isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5, slot: 'none', price: 20310, weight: 6,
    description: '+1 long-bearded battleaxe. The weapon ignores all shield bonuses to the target\'s AC and grants the wielder a +4 competence bonus on combat maneuver checks to sunder or disarm equipment granting shield bonuses. Its creator must be Ulfen.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['shatter', 'true strike'], cost: 10310 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'continuous', effects: [],
    baseWeaponId: 'battleaxe', enhancementBonus: 1, weaponSpecialAbilities: [],
  },
  // 262
  {
    id: 'weapon-valorous-blade',
    name: 'Valorous Blade',
    category: 'magic_weapon', source: "Weapon Master's Handbook", isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9, slot: 'none', price: 20315, weight: 5,
    description: '+1 valiant scimitar. Once per day, after using it to defeat or incapacitate an enemy, the wielder can activate an inspiration ability as a standard action within one minute. This grants all visible allies within 60 feet a +2 morale bonus on attack rolls, skill checks, and saving throws for 10 minutes.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['good hope', 'true strike'], cost: 10315 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'command_word', effects: [],
    baseWeaponId: 'scimitar', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'valiant', name: 'Valiant', description: 'Grants bonus against fear and bonus when outnumbered.', bonusEquivalent: 1, casterLevel: 9, effects: [] },
    ],
  },
  // 263
  {
    id: 'weapon-crystalline-starknife',
    name: 'Crystalline Starknife',
    category: 'magic_weapon', source: 'Pathfinder #64: Beyond the Doomsday Door', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 13, slot: 'none', price: 20324, weight: 2,
    description: '+2 starknife crafted from a crystal-like substance similar in appearance to ice but as hard as steel. It deals an additional 1d6 damage against crystalline creatures. When thrown in bright or normal light, it creates prismatic colors that dazzle struck targets (DC 14 Will save negates) for 1 round, or daze them on a critical hit. When wielded by a worshipper of Desna, the weapon gains the returning ability.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['daylight', 'shatter'], cost: 10324 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'starknife', enhancementBonus: 2, weaponSpecialAbilities: [],
  },
  // 264
  {
    id: 'weapon-earthcracker',
    name: 'Earthcracker',
    category: 'magic_weapon', source: 'Down the Blighted Path', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 12, slot: 'none', price: 20340, weight: 18,
    description: '+1 thundering earth breaker. Three times daily as a standard action, the wielder can slam it against the ground to create a violent wave that travels in a 30-foot line, turning affected squares into difficult terrain. The wielder gains a free trip attempt against one creature in the affected area without provoking attacks of opportunity and without risking being knocked prone. Landing a natural 20 on this trip check deals an additional 2d8 sonic damage to the target.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['blindness/deafness', 'stone shape'], cost: 10170 },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 20 },
    activationCategory: 'command_word', effects: [],
    baseWeaponId: 'earth_breaker', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'thundering', name: 'Thundering', description: 'On a critical hit deals 1d8 sonic damage (or more on larger crit multipliers), and the target must save or be deafened permanently.', bonusEquivalent: 1, casterLevel: 5, effects: [] },
    ],
  },
  // 265
  {
    id: 'weapon-dueling-bokken-tengu',
    name: 'Dueling Bokken (Tengu)',
    category: 'magic_weapon', source: 'Inner Sea Races', isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3, slot: 'none', price: 20350, weight: 3,
    description: '+1 merciful wooden training katana created by a peaceful tengu bladesmith as a safer alternative to steel blades. It functions as a normal katana except it deals bludgeoning damage instead of slashing. Its creator must be a tengu.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['keen edge'], cost: 10350 },
    physicalStats: { hardness: 5, hitPoints: 5, breakDC: 16 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'katana', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'merciful', name: 'Merciful', description: 'Deals an additional 1d6 damage, but all damage dealt is nonlethal.', bonusEquivalent: 1, casterLevel: 5, effects: [] },
    ],
  },
  // 266
  {
    id: 'weapon-hellcallers-edge',
    name: "Hellcaller's Edge",
    category: 'magic_weapon', source: 'Cheliax, Empire of Devils', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9, slot: 'none', price: 20350, weight: 8,
    description: '+2 greatsword pulsing with crimson light synchronized to the bearer\'s heartbeat, bestowed as a reward for unwavering loyalty to Hellknight paravicars. Once daily as a standard action, the wielder may strike the blade against the ground to create a planar rift, generating a 10-foot-radius, 40-foot-high cylinder of magical flames dealing 9d6 damage (DC 17 Reflex save for half). Half the damage is fire; the other half is divine and bypasses fire resistance and immunity.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['flame strike'], cost: 10350 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'command_word', effects: [],
    baseWeaponId: 'greatsword', enhancementBonus: 2, weaponSpecialAbilities: [],
  },
  // 267
  // 268
  {
    id: 'weapon-scoundrels-sword-cane',
    name: "Scoundrel's Sword Cane",
    category: 'magic_weapon', source: 'Pathfinder #58: Island of Empty Eyes', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7, slot: 'none', price: 20925, weight: 4,
    description: '+2 sword cane with a skull and partial backbone carved from ivory at the top and a wooden scabbard covered in gray sharkskin. The wielder can use Weapon Finesse with this weapon, applying her Dexterity modifier to attack rolls, even though it is not a light weapon. The skull\'s eyes grant the wielder a +5 competence bonus on Perception checks. Once daily, the wielder can peer through the skull\'s eyes like a periscope, viewing over obstacles or around corners. When using the cane for concealment, the wielder applies the skull\'s Diminutive size modifier to Stealth checks rather than her own.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['arcane eye', 'obscure object'], cost: 10635 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'sword_cane', enhancementBonus: 2, weaponSpecialAbilities: [],
  },
  // 269
  {
    id: 'weapon-arrow-slicer',
    name: 'Arrow Slicer',
    category: 'magic_weapon', source: "Antihero's Handbook", isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 6, slot: 'none', price: 21310, weight: 2,
    description: '+1 limning short sword that pulsates with a faint blue glow when wielded, brightening when targeted by ranged attacks and granting a +2 Perception bonus in surprise rounds. Once per round, the wielder can attempt a DC 20 Reflex save as an immediate action to deflect non-firearm ammunition. Exceeding the DC by 5 or more also slices the projectile in half, causing all visible foes within 30 feet to become shaken for 1d4 rounds (fear effect, once per day per creature). Large projectiles cannot be deflected.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['faerie fire', 'wind wall'], cost: 10810 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'shortsword', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'limning', name: 'Limning', description: 'Coats struck creatures in faerie fire for 1 round.', bonusEquivalent: 1, casterLevel: 5, effects: [] },
    ],
  },
  // 270
  {
    id: 'weapon-sparkwake-starknife',
    name: 'Sparkwake Starknife',
    category: 'magic_weapon', source: 'Ultimate Equipment', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 8, slot: 'none', price: 21324, weight: 3,
    description: '+1 shock starknife that leaves a faint trail of sparks when thrown. Once per day, the weapon can be thrown and transforms mid-flight into a lightning bolt (8th-level caster, DC 14 Reflex save for half damage) before returning to physical form at the end of the spell\'s path.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['lightning bolt'], cost: 10824 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'command_word', effects: [],
    baseWeaponId: 'starknife', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'shock', name: 'Shock', description: 'Deals an additional 1d6 electricity damage on each successful hit.', bonusEquivalent: 1, casterLevel: 8, effects: [] },
    ],
  },
  // 271
  {
    id: 'weapon-starknife-of-the-void',
    name: 'Starknife of the Void',
    category: 'magic_weapon', source: 'Chronicle of the Righteous', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ILLUSION }],
    casterLevel: 5, slot: 'none', price: 21324, weight: 3,
    description: '+2 returning starknife designed by devotees of Black Butterfly, typically found in dark, isolated locations like sealed vaults and underwater caches. On a confirmed critical hit, the target must succeed at a DC 14 Fortitude save or be struck blind or deaf (as chosen by the wielder); multiple hits can inflict both conditions.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['blindness/deafness', 'telekinesis'], cost: 10824 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'starknife', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'returning', name: 'Returning', description: 'The weapon returns to the thrower\'s hand at the start of its next turn.', bonusEquivalent: 1, casterLevel: 7, effects: [] },
    ],
  },
  // 272
  {
    id: 'weapon-cornerstone-crossbow',
    name: 'Cornerstone Crossbow',
    category: 'magic_weapon', source: 'Heroes of the Streets', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 12, slot: 'none', price: 21335, weight: 9,
    description: '+1 light crossbow that generates force bolts which anchor to structures within 80 feet, creating a tether line. As a move action, the wielder can pull herself to the anchor point. The force bolt disappears after 1d4 rounds, upon the wielder landing, or when a new bolt is fired, whichever occurs first. The wielder must succeed at a Climb check if no platform exists at the anchor point or fall immediately.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['levitate', 'true seeing'], cost: 10835 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'command_word', effects: [],
    baseWeaponId: 'light_crossbow', enhancementBonus: 1, weaponSpecialAbilities: [],
  },
  // 273
  {
    id: 'weapon-bone-bearers-cutter',
    name: "Bone Bearer's Cutter",
    category: 'magic_weapon', source: "Monster Hunter's Handbook", isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 10, slot: 'none', price: 21802, weight: 1,
    description: '+1 wounding dagger with bone handle engravings. Once per day as a standard action, the wielder can drive the blade into a target\'s appendage with a -5 attack penalty. On a hit, the dagger embeds itself in bone, inflicting a -2 penalty on the target\'s attack rolls, damage rolls, and Reflex saves for 1 minute. A DC 15 Strength check removes it. The weapon also grants a +4 competence bonus on skill checks attempted in conjunction with the Harvest Parts feat.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['bleed', "crafter's fortune", 'howling agony'], cost: 10901 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'dagger', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'wounding', name: 'Wounding', description: 'Each hit causes 1 bleed damage per round; bleed damage stacks with itself up to a maximum amount.', bonusEquivalent: 2, casterLevel: 10, effects: [] },
    ],
  },
  // 274
  {
    id: 'weapon-rostland-edge',
    name: 'Rostland Edge',
    category: 'magic_weapon', source: "Adventurer's Guide", isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10, slot: 'none', price: 21820, weight: 3,
    description: '+2 countering impervious Aldori dueling sword. If the weapon is ever destroyed, it explodes with tremendous force, dealing 10d6 points of fire damage to every creature within a 20-foot-radius spread (DC 14 Reflex save for half).',
    construction: { feats: ['Combat Reflexes', 'Craft Magic Arms and Armor'], spells: ["cat's grace", 'fabricate', 'fireball', 'make whole'], cost: 11070 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'aldori_dueling_sword', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'countering', name: 'Countering', description: 'Grants a +4 bonus to attack rolls when used in conjunction with aid another, parry, or similar actions.', bonusEquivalent: 1, casterLevel: 5, effects: [] },
      { id: 'impervious', name: 'Impervious', description: 'Doubles the weapon\'s hardness and hit points for purposes of resisting sunder damage.', bonusEquivalent: 1, casterLevel: 10, effects: [] },
    ],
  },
  // 275
  {
    id: 'weapon-luck-blade',
    name: 'Luck Blade',
    category: 'magic_weapon', source: 'Ultimate Equipment', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17, slot: 'none', price: 62360, weight: 2,
    description: '+2 short sword that grants the possessor a +1 luck bonus on all saving throws. Once per day the wielder can reroll one roll she just made, before the results are revealed; she must accept the new result. The luck blade also contains 1 wish that can be expended by the possessor; once the wish is used, the sword retains its other properties as a standard +2 luck-bonus short sword.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['miracle', 'wish'], cost: 31180 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'command_word', effects: [],
    baseWeaponId: 'shortsword', enhancementBonus: 2, weaponSpecialAbilities: [],
  },
];
