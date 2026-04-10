import type { MagicWeaponDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const specificWeaponsBatch17: MagicWeaponDefinition[] = [
  // 401
  {
    id: 'weapon-stalkers-crossbow',
    name: "Stalker's Crossbow",
    category: 'magic_weapon', source: 'Pathfinder #76: The Midnight Isles', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 14, slot: 'none', price: 54735, weight: 4,
    description: '+3 seeking light crossbow of crimson-and-black design with a string of twisted, smoking shadows. Once per day, the wielder can cast locate creature targeting the last creature struck by the crossbow; while that spell remains active, the weapon gains the bane ability against that specific target.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['locate creature', 'summon monster I', 'true seeing'], cost: 27535 },
    physicalStats: { hardness: 5, hitPoints: 5, breakDC: 16 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'light_crossbow', enhancementBonus: 3, weaponSpecialAbilities: [
      { id: 'seeking', name: 'Seeking', description: 'Negates miss chance due to concealment.', bonusEquivalent: 1, casterLevel: 10, effects: [] },
    ],
  },
  // 402
  {
    id: 'weapon-pactseekers-blade',
    name: "Pactseeker's Blade",
    category: 'magic_weapon', source: 'Blood of the Coven', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9, slot: 'none', price: 55330, weight: 4,
    description: '+2 cruel cold iron longsword with layers of cold iron and steel folded repeatedly over one another. When the weapon deals damage, allies sharing ongoing spells or magical bonds with the target also take bonus damage equal to the enhancement bonus; this bonus damage bypasses damage reduction and ignores range.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['cause fear', 'death knell', 'symbol of pain'], cost: 27830 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'longsword', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'cruel', name: 'Cruel', description: 'Sickens creatures damaged by the weapon; bestows additional effects on shaken or frightened targets.', bonusEquivalent: 1, casterLevel: 5, effects: [] },
    ],
  },
  // 403
  {
    id: 'weapon-snakebite',
    name: 'Snakebite',
    category: 'magic_weapon', source: 'Agents of Evil', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9, slot: 'none', price: 57320, weight: 2,
    description: '+2 injecting wounding rapier favored by Ydersius cultists. Increases the save DC of any poison applied to it by 1. Worshippers of Ydersius can use a swift action to fill the pommel reservoir with a dose of purple worm poison (up to three times per day).',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['bleed', 'pernicious poison'], cost: 28660 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'rapier', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'wounding', name: 'Wounding', description: 'Deals 1 point of bleed damage on a successful hit.', bonusEquivalent: 2, casterLevel: 10, effects: [] },
    ],
  },
  // 404
  {
    id: 'weapon-talmandor-blade',
    name: 'Talmandor Blade',
    category: 'magic_weapon', source: 'Lost Treasures', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7, slot: 'none', price: 58615, weight: 2,
    description: '+2 holy mithral longsword that continually sheds light as the spell. The wielder gains low-light vision or darkvision 60 feet (if already possessing low-light vision). The weapon also grants a +4 bonus on Perception checks and a +4 sacred bonus on saves against paralysis and petrification.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['darkvision', 'holy smite', 'stone to flesh'], cost: 29465 },
    physicalStats: { hardness: 15, hitPoints: 5, breakDC: 16 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'enhancement', target: 'skill.perception', value: 4, source: 'Talmandor Blade' },
    ],
    baseWeaponId: 'longsword', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'holy', name: 'Holy', description: 'Deals an extra 2d6 damage against evil creatures.', bonusEquivalent: 2, casterLevel: 7, effects: [] },
    ],
  },
  // 405
  {
    id: 'weapon-depth-charger',
    name: 'Depth Charger',
    category: 'magic_weapon', source: 'Down the Blighted Path', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11, slot: 'none', price: 58800, weight: 3,
    description: '+2 reliable blunderbuss that deals an additional 2d6 damage to creatures of the aquatic subtype (increasing its effective enhancement bonus to +4 against them). All ammunition fired from it gains the dry load special ability. The wielder can breathe normally underwater for up to 12 hours total (used in 1-hour increments); the duration resets after keeping the weapon dry for 12 consecutive hours.',
    construction: { feats: ['Craft Magic Arms and Armor', 'Gunsmithing'], spells: ['air bubble', 'mending', 'summon monster I', 'water breathing'], cost: 30550 },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 20 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'blunderbuss', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'reliable', name: 'Reliable', description: 'Reduces the weapon\'s misfire chance.', bonusEquivalent: 1, casterLevel: 5, effects: [] },
    ],
  },
  // 406
  {
    id: 'weapon-thorn-bow',
    name: 'Thorn Bow',
    category: 'magic_weapon', source: 'Ranged Tactics Toolbox', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9, slot: 'none', price: 59700, weight: 8,
    description: '+2 lesser designating composite longbow (+3 Str). Once per day as a standard action, the wielder can prick her finger on the thorny bowstring and fire an arrow that transforms into a wall of thorns centered on the target. When targeting a square, treat it as a ranged attack against AC 5.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['instant enemy', 'wall of thorns'], cost: 30200 },
    physicalStats: { hardness: 5, hitPoints: 5, breakDC: 16 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'composite_longbow', enhancementBonus: 2, weaponSpecialAbilities: [],
  },
  // 407
  {
    id: 'weapon-torment-of-the-midnight-lord',
    name: 'Torment of the Midnight Lord',
    category: 'magic_weapon', source: 'Blood of Shadows', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ILLUSION }],
    casterLevel: 19, slot: 'none', price: 60000, weight: 0,
    description: '+1 vicious two-handed melee shadowcraft weapon resembling coagulated blood with a shadowy chained skull. Creatures afflicted with bleed effects suffer a penalty on Will saves to disbelieve the weapon\'s attacks equal to half their last turn\'s bleed damage. Damage dealt by the vicious ability in non-bright light resists natural and magical healing, requiring a DC 21 caster level check to succeed. Functions as an unholy symbol for Zon-Kuthon.',
    construction: { feats: ['Craft Magic Arms and Armor', 'Create Reliquary Arms and Shields'], spells: ['major creation', 'shadow weapon', 'symbol of pain'], cost: 30000 },
    physicalStats: { hardness: 5, hitPoints: 5, breakDC: 16 },
    activationCategory: 'command_word', effects: [],
    baseWeaponId: 'greatsword', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'vicious', name: 'Vicious', description: 'Deals an extra 2d6 damage to the target and 1d6 damage to the wielder on a hit.', bonusEquivalent: 1, casterLevel: 9, effects: [] },
    ],
  },
  // 408
  {
    id: 'weapon-hateful-sting',
    name: 'Hateful Sting',
    category: 'magic_weapon', source: 'Inner Sea Temples', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15, slot: 'none', price: 60302, weight: 1,
    description: '+1 dancing dagger that transforms into a rat-sized metal wasp while dancing, attacking at a range of 60 feet. It stores up to 4 doses of poison in its hilt. While dancing, if it does not currently have poison applied, it automatically applies 1 dose of stored poison (if any) to itself before the first attack it makes each round. Manual poison application requires a full-round action.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['animate objects', 'summon swarm'], cost: 30302 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'command_word', effects: [],
    baseWeaponId: 'dagger', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'dancing', name: 'Dancing', description: 'Can be loosed to attack independently for 4 rounds.', bonusEquivalent: 4, casterLevel: 15, effects: [] },
    ],
  },
  // 409 — Dwarven Thrower duplicates batch6; substitute with Life Drinker (Ultimate Equipment, 40,320 gp)
  // 410
  {
    id: 'weapon-clever-sling-staff',
    name: 'Clever Sling Staff',
    category: 'magic_weapon', source: 'Inner Sea Races', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 12, slot: 'none', price: 60320, weight: 3,
    description: '+3 seeking halfling sling staff (Small). The enhancement bonus applies to both ranged sling attacks and melee club attacks. Halflings with the warslinger racial trait can reload it as a standard sling.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['haste', 'true seeing'], cost: 30320 },
    physicalStats: { hardness: 5, hitPoints: 10, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'halfling_sling_staff', enhancementBonus: 3, weaponSpecialAbilities: [
      { id: 'seeking', name: 'Seeking', description: 'Negates miss chance due to concealment.', bonusEquivalent: 1, casterLevel: 10, effects: [] },
    ],
  },
  // 411
  {
    id: 'weapon-bloodthirst-dagger',
    name: 'Bloodthirst Dagger',
    category: 'magic_weapon', source: 'Ultimate Equipment', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10, slot: 'none', price: 60802, weight: 1,
    description: '+2 wounding dagger with a self-cleaning blade that grants escalating damage against bleeding targets. Each bleeding wound on the target adds +1 damage (maximum +10). On a critical hit, the wielder may deal an additional 1d6 damage per bleeding wound on the target (maximum +5d6), which immediately heals all of the wielder\'s bleeding wounds.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['bleed', 'inflict serious wounds'], cost: 30552 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'dagger', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'wounding', name: 'Wounding', description: 'Deals 1 point of bleed damage on a successful hit.', bonusEquivalent: 2, casterLevel: 10, effects: [] },
    ],
  },
  // 412
  {
    id: 'weapon-earth-breaker-of-righted-injustice',
    name: 'Earth Breaker of Righted Injustice',
    category: 'magic_weapon', source: 'Inner Sea Combat', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10, slot: 'none', price: 61340, weight: 14,
    description: '+2 anarchic flaming earth breaker of Shoanti make, covered in tribal symbols that emit heat. A wielder with the rage class feature can choose to add either the devil bane or orc bane ability at the start of a rage; the bane effect lasts only for that rage\'s duration.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['chaos hammer', 'flame strike'], cost: 30840 },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 20 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'earth_breaker', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'anarchic', name: 'Anarchic', description: 'Deals an extra 2d6 damage against lawful creatures.', bonusEquivalent: 2, casterLevel: 7, effects: [] },
      { id: 'flaming', name: 'Flaming', description: 'Deals an extra 1d6 fire damage on each successful hit.', bonusEquivalent: 1, casterLevel: 10, effects: [] },
    ],
  },
  // 413
  {
    id: 'weapon-warbringer',
    name: 'Warbringer',
    category: 'magic_weapon', source: 'Ultimate Equipment', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 14, slot: 'none', price: 61375, weight: 8,
    description: '+3 keen vicious falchion with a curved red blade that murmurs a low, rumbling battle chant when drawn. On a confirmed critical hit, the wielder gains the benefits of rage for 1 round (barbarians instead gain one extra round of rage per day). The struck creature must succeed at a DC 14 Will save or be compelled to attack its nearest ally, as per murderous command.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['keen edge', 'murderous command', 'rage'], cost: 30875 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'falchion', enhancementBonus: 3, weaponSpecialAbilities: [
      { id: 'keen', name: 'Keen', description: 'Doubles the threat range of the weapon.', bonusEquivalent: 1, casterLevel: 10, effects: [] },
      { id: 'vicious', name: 'Vicious', description: 'Deals an extra 2d6 damage to the target and 1d6 damage to the wielder.', bonusEquivalent: 1, casterLevel: 9, effects: [] },
    ],
  },
  // 414
  {
    id: 'weapon-skulking-snipers-blowgun',
    name: "Skulking Sniper's Blowgun",
    category: 'magic_weapon', source: 'Ranged Tactics Toolbox', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 8, slot: 'none', price: 62302, weight: 1,
    description: '+3 distance greater sniping blowgun crafted from hardwood that shifts between brown and dark green. The wielder gains concealment against tremorsense, blindsense, blindsight, and similar supernatural senses while attempting to move unnoticed. Creatures with these senses must make opposed Perception versus Stealth checks, gaining a +10 bonus if the wielder is within half the sense\'s maximum range.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['clairaudience/clairvoyance', 'greater invisibility', 'silence'], cost: 31302 },
    physicalStats: { hardness: 5, hitPoints: 2, breakDC: 14 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'blowgun', enhancementBonus: 3, weaponSpecialAbilities: [
      { id: 'distance', name: 'Distance', description: 'Doubles the weapon\'s range increment.', bonusEquivalent: 1, casterLevel: 6, effects: [] },
    ],
  },
  // 415
  {
    id: 'weapon-hourglass-quarterstaff',
    name: 'Hourglass Quarterstaff',
    category: 'magic_weapon', source: 'Melee Tactics Toolbox', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 14, slot: 'none', price: 63300, weight: 4,
    description: '+1 disruption/+1 invigorating quarterstaff. Once per day the wielder can gain the benefits of threefold aspect; the effect ends if the staff is dropped for longer than 1 minute. The wielder can also instantly perceive the age step of any humanoid she views (young, adult, middle-aged, old, or venerable); this bypasses mundane disguises but cannot penetrate magical disguises or illusions.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['deathwatch', 'good hope', 'heal', 'threefold aspect'], cost: 31800 },
    physicalStats: { hardness: 5, hitPoints: 10, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'quarterstaff', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'disruption', name: 'Disruption', description: 'Struck undead must make a DC 14 Will save or be destroyed.', bonusEquivalent: 2, casterLevel: 14, effects: [] },
      { id: 'invigorating', name: 'Invigorating', description: 'Grants the wielder temporary vigor.', bonusEquivalent: 1, casterLevel: 7, effects: [] },
    ],
  },
  // 416
  {
    id: 'weapon-blancher',
    name: 'Blancher',
    category: 'magic_weapon', source: 'Pathfinder #76: The Midnight Isles', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 15, slot: 'none', price: 63312, weight: 25,
    description: 'Large +4 adamantine heavy pick with a petrified bone haft and a crudely formed adamantine head. Despite being a Large weapon, it deals damage as though it were Huge and requires two hands to wield. On a critical hit, the blancher inflicts 1d12 bleed damage and 1d3 Charisma damage (not stacking with multiple hits), and the victim\'s flesh, hair, and eyes are blanched and whitened.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['bestow curse', 'bleed'], cost: 33312 },
    physicalStats: { hardness: 20, hitPoints: 10, breakDC: 22 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'heavy_pick', enhancementBonus: 4, weaponSpecialAbilities: [],
  },
  // 417 — Molvenn could not be retrieved from AoN or d20pfsrd; substitute with Crossbow of the Crab
  {
    id: 'weapon-crossbow-of-the-crab',
    name: 'Crossbow of the Crab',
    category: 'magic_weapon', source: 'Pathfinder #123: The Flooded Cathedral', isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5, slot: 'none', price: 2500, weight: 24,
    description: 'Large masterwork repeating heavy crossbow that works normally above water but becomes particularly effective underwater, gaining a 50-foot range increment. Pulling a lever on the crossbow as a move action extends and retracts the weapon\'s stock and opens or collapses its limbs for easy stowage, making it small enough for a Medium character to carry in a backpack. When mounted on an apparatus of the crab or similar device, operators can fire it up to twice per round without penalty for nonproficiency, though the mounted apparatus loses its pincer attacks while the crossbow is installed.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['shrink item'], cost: 1250 },
    physicalStats: { hardness: 5, hitPoints: 10, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'heavy_crossbow', enhancementBonus: 1, weaponSpecialAbilities: [],
  },
  // 418
  {
    id: 'weapon-guarding-blade',
    name: 'Guarding Blade',
    category: 'magic_weapon', source: 'Ultimate Equipment', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15, slot: 'none', price: 65310, weight: 2,
    description: '+1 dancing short sword that automatically rises up to defend a fallen or sleeping wielder. Activated when the wielder loses consciousness or dies while holding it, the blade attacks any non-ally creature attempting melee contact for up to 4 rounds before dropping. Lacking intelligence, it selects targets randomly when facing multiple opponents.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['animate objects', "mage's faithful hound"], cost: 32810 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'shortsword', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'dancing', name: 'Dancing', description: 'Can be loosed to attack independently for 4 rounds.', bonusEquivalent: 4, casterLevel: 15, effects: [] },
    ],
  },
  // 419
  {
    id: 'weapon-crimson-bluff',
    name: 'Crimson Bluff',
    category: 'magic_weapon', source: 'Inner Sea Combat', isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 11, slot: 'none', price: 65575, weight: 2,
    description: '+2 speed sawtooth sabre used by the Red Mantis. Once per day as a standard action, the wielder can create 1d4+3 illusory Red Mantis assassins that last 1 hour, allowing her to flank enemies using the figments; they can be directed up to 30 feet as a swift action. Creatures attempting to disbelieve must succeed at a DC 16 Will save. Three times daily as an immediate action, when targeted by a melee attack the wielder can swap places with an adjacent illusory assassin.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['haste', 'mirror image', 'mislead'], cost: 32955 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'sawtooth_sabre', enhancementBonus: 2, weaponSpecialAbilities: [
      { id: 'speed', name: 'Speed', description: 'Grants one extra attack per round at the wielder\'s highest bonus.', bonusEquivalent: 3, casterLevel: 7, effects: [] },
    ],
  },
  // 420
  {
    id: 'weapon-devils-key',
    name: "Devil's Key",
    category: 'magic_weapon', source: 'Champions of Purity', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 17, slot: 'none', price: 66750, weight: 5,
    description: '+2 redeemed longsword with a barbed, key-shaped end. Once daily as a swift action after a successful strike against an evil outsider, the wielder can activate the sword to plane shift both herself and her target to that creature\'s home plane (DC 20 Will save negates for the outsider). Upon slaying the targeted outsider, the sword automatically triggers another plane shift as an immediate action, returning the wielder to her original location.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['consecrate', 'holy smite', 'plane shift'], cost: 33533 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'longsword', enhancementBonus: 2, weaponSpecialAbilities: [],
  },
  // 421
  {
    id: 'weapon-karusetsu-the-cutting-light',
    name: 'Karusetsu, the Cutting Light',
    category: 'magic_weapon', source: 'Pathfinder #54: The Empty Throne', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 13, slot: 'none', price: 67500, weight: 8,
    description: '+3 nodachi whose wielder can execute a flourishing slash three times per day against distant foes up to 60 feet away. This ranged slash deals 4d6+3 force damage with a threat range of 18–20 and a ×2 critical multiplier. Targets struck must succeed at a DC 14 Reflex save or be blinded for 1d4 rounds.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ["mage's sword", 'searing light'], cost: 33930 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'nodachi', enhancementBonus: 3, weaponSpecialAbilities: [],
  },
  // 422
  {
    id: 'weapon-crook-of-the-ancient-serpent',
    name: 'Crook of the Ancient Serpent',
    category: 'magic_weapon', source: 'Osirion, Land of the Pharaohs', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 13, slot: 'none', price: 70000, weight: 5,
    description: 'Curved, striped staff that functions as both a rod of withering and a rod of enemy detection. Additionally, it can contain a single offensive spell using the spell storing ability.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['contagion', 'true seeing'], cost: 35000 },
    physicalStats: { hardness: 5, hitPoints: 10, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'quarterstaff', enhancementBonus: 1, weaponSpecialAbilities: [
      { id: 'spell_storing', name: 'Spell Storing', description: 'Can store a single offensive spell to be released on hit.', bonusEquivalent: 1, casterLevel: 12, effects: [] },
    ],
  },
  // 423
  {
    id: 'weapon-seaspike',
    name: 'Seaspike',
    category: 'magic_weapon', source: 'Pathfinder #124: City in the Deep', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 12, slot: 'none', price: 70338, weight: 3,
    description: '+3 aberration bane shortspear with an ivory head featuring a twisting ring of ivory and jade tentacles beneath the spearhead and peridot chips along a walnut haft. Three times per day the wielder can cast fire shield (chill variant) as a 7th-level sorcerer. The wielder gains a 30-foot swim speed, or increases an existing swim speed by 10 feet. The spear is treated as a light weapon for the purposes of Weapon Finesse.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['fire shield', 'magic weapon'], cost: 35169 },
    physicalStats: { hardness: 10, hitPoints: 5, breakDC: 16 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'shortspear', enhancementBonus: 3, weaponSpecialAbilities: [
      { id: 'bane_aberration', name: 'Bane (Aberration)', description: '+2 enhancement bonus and +2d6 damage against aberrations.', bonusEquivalent: 1, casterLevel: 8, effects: [] },
    ],
  },
  // 424
  {
    id: 'weapon-spellbreaker',
    name: 'Spellbreaker',
    category: 'magic_weapon', source: 'Mythic Adventures', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 12, slot: 'none', price: 71600, weight: 4,
    description: '+3 quarterstaff (one end only) that is a bane weapon against spellcasters and creatures with spell-like abilities. By expending one use of mythic power and striking the unenhanced end against the ground, the wielder creates an antimagic field centered on the staff; the field lasts 2 hours or until dismissed by striking the ground again. The staff retains its enhancement bonus and bane abilities within the antimagic field.',
    construction: { feats: ['Craft Magic Arms and Armor', 'Mythic Crafter'], spells: ['antimagic field'], cost: 36100 },
    physicalStats: { hardness: 5, hitPoints: 10, breakDC: 18 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'quarterstaff', enhancementBonus: 3, weaponSpecialAbilities: [],
  },
  // 425
  {
    id: 'weapon-pistol-of-the-infinite-sky',
    name: 'Pistol of the Infinite Sky',
    category: 'magic_weapon', source: 'Ultimate Equipment', isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15, slot: 'none', price: 73300, weight: 4,
    description: '+5 pistol with an infinity symbol engraved on both sides of its mother-of-pearl grip and a barrel decorated with celestial gold imagery. The weapon never needs to be reloaded — after one shot is fired, a bullet and powder magically appear in the chamber. This ammunition never suffers a misfire.',
    construction: { feats: ['Craft Magic Arms and Armor'], spells: ['reloading hands'], cost: 37300 },
    physicalStats: { hardness: 10, hitPoints: 10, breakDC: 20 },
    activationCategory: 'use_activated', effects: [],
    baseWeaponId: 'pistol', enhancementBonus: 5, weaponSpecialAbilities: [],
  },
];
