import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsMP2: WondrousItemDefinition[] = [
  {
    id: 'wondrous-mask-of-cutting-flesh',
    name: 'Mask of Cutting Flesh',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'head',
    price: 3000,
    weight: 1,
    description:
      'This black leather facial covering features bone and metal studs with openings for eyes, mouth, and nostrils, laced at the back. ' +
      'The wearer enjoys a +2 resistance bonus on Fortitude saving throws. If Zon-Kuthon is the wearer\'s patron deity, they may activate ' +
      'an invisible slashing attack once daily against targets within 100 feet, dealing 2d4+2 points of force damage. The mask can reshape ' +
      'itself into a cap or conceal itself as a free action.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate rope', 'magic missile', 'resistance'], cost: 1500 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.fortitude', value: 2, source: 'Mask of Cutting Flesh' },
    ],
  },
  {
    id: 'wondrous-mask-of-destruction-and-creation',
    name: 'Mask of Destruction and Creation',
    category: 'wondrous',
    source: 'Faiths of Balance',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
    ],
    casterLevel: 5,
    slot: 'head',
    price: 5000,
    weight: 0,
    description:
      'This reversible silken mask features a flat white side and a colorful swirling side with black background. ' +
      'The white side grants once-per-day detect magic. The black side permits once-per-day read magic. If the wearer\'s ' +
      'patron deity matches the mask\'s associated deity, additional powers unlock: casting magic missile (3rd-level caster) ' +
      'via the black side and disguise self via the white side, each usable once daily.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['detect magic', 'disguise self', 'magic missile', 'read magic'], cost: 2500 },
    activationCategory: 'use_activated',
    spellLikeAbilities: [
      { spells: [
        { spellId: 'detect_magic', spellName: 'Detect Magic', casterLevel: 5, usesPerDay: 1, activationAction: 'standard' },
        { spellId: 'read_magic', spellName: 'Read Magic', casterLevel: 5, usesPerDay: 1, activationAction: 'standard' },
      ] },
    ],
    effects: [{ type: 'special', target: 'special.mask_destruction_creation_deity_bonus', value: 0, source: 'Mask of Destruction and Creation' }],
  },
  {
    id: 'wondrous-mask-of-giants-lesser',
    name: 'Mask of Giants (Lesser)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'head',
    price: 30000,
    weight: 1,
    description:
      'This wooden facial covering depicts a leering humanoid with an oversized nose and ears. It enables druids with wild shape ' +
      'to assume giant-type humanoid forms (ogre, troll, fire giant, frost giant, or stone giant). The wearer gains sensory abilities ' +
      'the form possesses (darkvision 60 feet, low-light vision, or scent) and receives a +4 size bonus to Strength, -2 penalty to ' +
      'Dexterity, and +1 natural armor bonus.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['giant form I'], cost: 15000 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'ability.str', value: 4, bonusType: 'size', source: 'Mask of Giants (Lesser)' },
      { type: 'penalty', target: 'ability.dex', value: -2, source: 'Mask of Giants (Lesser)' },
      { type: 'bonus', target: 'ac.natural', value: 1, source: 'Mask of Giants (Lesser)' },
    ],
  },
  {
    id: 'wondrous-mask-of-giants-greater',
    name: 'Mask of Giants (Greater)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 13,
    slot: 'head',
    price: 90000,
    weight: 1,
    description:
      'As the lesser mask, but with improved abilities. The wearer gains rend, regeneration 5, rock catching, and rock throwing. ' +
      'If the giant form has energy immunities or resistances, the wearer gains resistance 20 to that energy type. Statistics improve ' +
      'to +6 size bonus to Strength, -2 penalty to Dexterity, +4 size bonus to Constitution, and +4 natural armor bonus.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['giant form I'], cost: 45000 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'ability.str', value: 6, bonusType: 'size', source: 'Mask of Giants (Greater)' },
      { type: 'penalty', target: 'ability.dex', value: -2, source: 'Mask of Giants (Greater)' },
      { type: 'bonus', target: 'ability.con', value: 4, bonusType: 'size', source: 'Mask of Giants (Greater)' },
      { type: 'bonus', target: 'ac.natural', value: 4, source: 'Mask of Giants (Greater)' },
    ],
  },
  {
    id: 'wondrous-mask-of-stony-demeanor',
    name: 'Mask of Stony Demeanor',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'head',
    price: 8000,
    weight: 4,
    description:
      'This magical headpiece transforms the wearer\'s visage into stone and their voice into an emotionless tone. ' +
      'It grants a +10 competence bonus on Bluff checks made to lie and a +5 competence bonus on Bluff checks made to feint, ' +
      'though it penalizes hidden message attempts with a -5 modifier.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['innocence', 'stone shape'], cost: 4000 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.bluff', value: 10, source: 'Mask of Stony Demeanor', condition: { type: 'custom', params: {}, description: 'to lie only' } },
      { type: 'bonus', bonusType: 'competence', target: 'skill.bluff', value: 5, source: 'Mask of Stony Demeanor', condition: { type: 'custom', params: {}, description: 'to feint only' } },
      { type: 'penalty', target: 'skill.bluff', value: -5, source: 'Mask of Stony Demeanor', condition: { type: 'custom', params: {}, description: 'hidden messages only' } },
    ],
  },
  {
    id: 'wondrous-mask-of-the-cursed-eye',
    name: 'Mask of the Cursed Eye',
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'head',
    price: 2500,
    weight: 1,
    description:
      'This magical mask features a prominent bloodshot eye. When someone other than an ally observes the wearer through scrying ' +
      'or penetrates magical disguises using divination magic, that observer becomes blinded for 1d4 minutes (Fortitude DC 16 negates). ' +
      'The wearer gains a brief mental impression of the perpetrator, sufficient for scrying or teleportation attempts. Functions once per day.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['blindness/deafness'], cost: 1250 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.mask_cursed_eye_scry_retaliation', value: 0, source: 'Mask of the Cursed Eye' }],
  },
  {
    id: 'wondrous-mask-of-the-far-traveler',
    name: 'Mask of the Far Traveler',
    category: 'wondrous',
    source: 'Planar Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'head',
    price: 38000,
    weight: 0,
    description:
      'This leather half-mask covers the wearer\'s nose and mouth. It enables creatures on their native plane to understand ' +
      'the wearer\'s words in their own language. The mask also grants a +5 competence bonus on Diplomacy checks and on Bluff ' +
      'checks to tell a lie by replicating local idioms. Does not function on the Material Plane.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['tongues'], cost: 19000 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.diplomacy', value: 5, source: 'Mask of the Far Traveler' },
      { type: 'bonus', bonusType: 'competence', target: 'skill.bluff', value: 5, source: 'Mask of the Far Traveler', condition: { type: 'custom', params: {}, description: 'to lie only; non-Material Plane only' } },
    ],
  },
  {
    id: 'wondrous-mask-of-the-krenshar',
    name: 'Mask of the Krenshar',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'head',
    price: 7200,
    weight: 1,
    description:
      'This leather headpiece becomes invisible when donned. The wearer can activate it three times daily to create an illusory ' +
      'effect making their face appear to reveal skull and muscle beneath the skin. Observers within 100 feet must pass a Will save ' +
      '(DC 13) or become frightened or shaken depending on Hit Dice. True seeing negates the illusion.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disguise self', 'scare'], cost: 3600 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.mask_krenshar_fear', value: 0, source: 'Mask of the Krenshar' }],
  },
  {
    id: 'wondrous-mask-of-the-mantis',
    name: 'Mask of the Mantis',
    category: 'wondrous',
    source: 'Adventurer\'s Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'head',
    price: 6000,
    weight: 1,
    description:
      'This magical helmet resembles a praying mantis and conceals the wearer\'s identity. It has 3 daily charges. ' +
      'The wearer can expend a charge to gain darkvision 60 feet, see invisibility, deathwatch, or a +5 competence bonus on ' +
      'Perception checks. Each ability lasts 30 minutes and multiple effects can stack. Charges restore after 24 hours.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['darkvision', 'deathwatch', 'see invisibility'], cost: 3000 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.mask_mantis_charges', value: 0, source: 'Mask of the Mantis' }],
  },
  {
    id: 'wondrous-mask-of-the-rabbit-prince',
    name: 'Mask of the Rabbit Prince',
    category: 'wondrous',
    source: 'Planar Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'head',
    price: 12000,
    weight: 0,
    description:
      'This magical headpiece features a rabbit design with large felt ears. The wearer gains a +2 morale bonus to initiative ' +
      'and fear saving throws, plus they always count as having a running start for Acrobatics jump checks.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['jump', 'remove fear'], cost: 6000 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'morale', target: 'initiative', value: 2, source: 'Mask of the Rabbit Prince' },
      { type: 'bonus', bonusType: 'morale', target: 'save.fear', value: 2, source: 'Mask of the Rabbit Prince' },
    ],
  },
  {
    id: 'wondrous-mask-of-the-skull',
    name: 'Mask of the Skull',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 13,
    slot: 'head',
    price: 22000,
    weight: 3,
    description:
      'An ivory, copper, or wooden skull-like mask fashioned to expose the wearer\'s lower face. Once daily after 1 hour of wear, ' +
      'it can fly up to 50 feet to attack a target via touch attack using the wearer\'s BAB. On a hit, the target makes a DC 20 ' +
      'Fortitude save or takes 130 damage (as finger of death); a successful save deals 3d6+13 damage. The mask then returns. ' +
      'It has AC 16, 10 hit points, and hardness 6.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate objects', 'finger of death', 'fly'], cost: 11000 },
    physicalStats: { hardness: 6, hitPoints: 10, breakDC: 20 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.mask_skull_finger_of_death', value: 0, source: 'Mask of the Skull' }],
  },
  {
    id: 'wondrous-ferocious-war-mask',
    name: 'Ferocious War Mask',
    category: 'wondrous',
    source: 'Sargava, the Lost Colony',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 4,
    slot: 'head',
    price: 3700,
    weight: 5,
    description:
      'An oversized wooden mask that covers the face and extends down to the waist, carved as a stylized bestial face distorted ' +
      'with rage. The light wood is magically reinforced to grant a +1 armor bonus. Once per day as a free action, the wearer can ' +
      'cause the mask to contort ferociously, causing a single creature within 15 feet to make a DC 14 Will save or become frightened.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['cause fear', 'mage armor'], cost: 1850 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'ac', value: 1, bonusType: 'armor', source: 'Ferocious War Mask' },
      { type: 'special', target: 'special.war_mask_frighten', value: 0, source: 'Ferocious War Mask' },
    ],
  },
  {
    id: 'wondrous-grapplers-mask',
    name: "Grappler's Mask",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'head',
    price: 5000,
    weight: 2,
    description:
      'This dark leather mask has geometric patterns meant to appear intimidating. It covers the face while leaving the mouth ' +
      'and eyes exposed. The wearer gains the ability to attempt to bull rush and grapple without provoking attacks of opportunity.',
    construction: { feats: ['Craft Wondrous Item'], spells: ["bull's strength", "cat's grace", 'expeditious retreat'], cost: 2500 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.grapplers_mask_no_aoo', value: 0, source: "Grappler's Mask" }],
  },
  {
    id: 'wondrous-hollow-mask',
    name: 'Hollow Mask',
    category: 'wondrous',
    source: 'Pathfinder #124: City in the Deep',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'head',
    price: 3000,
    weight: 2,
    description:
      'A porous wooden mask that fits tightly against the wearer\'s face. It stores air, allowing underwater breathing for up to ' +
      '5 minutes. While submerged with air remaining, the mask converts speech into water vibrations, enabling normal communication ' +
      'with others wearing hollow masks within 60 feet. Requires equal replenishment time after use.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['air bubble', 'message'], cost: 1500 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.hollow_mask_underwater_breathing', value: 0, source: 'Hollow Mask' }],
  },
  {
    id: 'wondrous-holy-mask-of-the-living-god',
    name: 'Holy Mask of the Living God',
    category: 'wondrous',
    source: 'Gods and Magic',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 1,
    slot: 'head',
    price: 2100,
    weight: 1,
    description:
      'An iron mask resembling the visage of Razmir featuring a diamond-shaped ivory ornament. When Razmir is the wearer\'s patron ' +
      'deity, they gain a +2 competence bonus on Heal and Intimidate checks. Additionally, the wearer can cast cause fear and cure ' +
      'light wounds once daily each.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['cause fear', 'shadow conjuration'], cost: 1050 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.heal', value: 2, source: 'Holy Mask of the Living God', condition: { type: 'custom', params: {}, description: 'worshiper of Razmir only' } },
      { type: 'bonus', bonusType: 'competence', target: 'skill.intimidate', value: 2, source: 'Holy Mask of the Living God', condition: { type: 'custom', params: {}, description: 'worshiper of Razmir only' } },
    ],
  },
  {
    id: 'wondrous-medusa-mask',
    name: 'Medusa Mask',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'head',
    price: 10000,
    weight: 1,
    description:
      'This gold-plated iron mask features radiating snake tails from a central gemstone. It provides a +4 bonus on all saving ' +
      'throws against visual effects, including gaze attacks and sight-based illusions. Once daily, the wearer can activate the ' +
      'gemstone to force a creature within 30 feet to make a DC 15 Fortitude save or face petrification for one minute.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['flesh to stone', 'resistance'], cost: 5000 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'save.visual', value: 4, source: 'Medusa Mask' },
      { type: 'special', target: 'special.medusa_mask_petrify', value: 0, source: 'Medusa Mask' },
    ],
  },
  {
    id: 'wondrous-miasmatic-mask',
    name: 'Miasmatic Mask',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'head',
    price: 23000,
    weight: 1,
    description:
      'A dark purple mask adorned with amethysts that enables the wearer to assume a poisonous gaseous form once daily. ' +
      'The transformation lasts 5 minutes and requires a standard action to activate (provokes AoOs). If the wearer cannot ' +
      'fit in their original form\'s space upon reverting, they shift to the nearest available location.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['miasmatic form'], cost: 11500 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.miasmatic_mask_gaseous_form', value: 0, source: 'Miasmatic Mask' }],
  },
  {
    id: 'wondrous-misers-mask',
    name: "Miser's Mask",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'head',
    price: 3000,
    weight: 1,
    description:
      'This wooden mask resembles a miser\'s gaunt visage. It grants the wearer the scent ability limited to detecting coins ' +
      'and gems. The mask provides a +5 competence bonus on Appraise checks made to ascertain the value of gems.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bloodhound'], cost: 1500 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.appraise', value: 5, source: "Miser's Mask", condition: { type: 'custom', params: {}, description: 'gem valuation only' } },
      { type: 'special', target: 'special.misers_mask_scent_coins', value: 0, source: "Miser's Mask" },
    ],
  },
  {
    id: 'wondrous-plague-mask',
    name: 'Plague Mask',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'head',
    price: 7500,
    weight: 2,
    description:
      'This bird-styled mask features goggles connected to a ceramic beak covering the nose and mouth. The non-magical goggles ' +
      'can be swapped with other eye slot items. It provides a +4 resistance bonus on saving throws against disease. The wearer ' +
      'can cast remove disease once daily on a touched creature.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['remove disease'], cost: 3750 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.disease', value: 4, source: 'Plague Mask' },
    ],
    spellLikeAbilities: [
      { spells: [{ spellId: 'remove_disease', spellName: 'Remove Disease', casterLevel: 5, usesPerDay: 1, activationAction: 'standard' }] },
    ],
  },
  {
    id: 'wondrous-plaguebringers-mask',
    name: "Plaguebringer's Mask",
    category: 'wondrous',
    source: 'Curse of the Crimson Throne',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'head',
    price: 2000,
    weight: 2,
    description:
      'This magical doctor\'s mask offers a +2 resistance bonus against nauseating scents and immunity to a specific disease ' +
      'selected during creation. Additionally, it obscures the wearer\'s alignment from magical detection, registering as neutral.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['misdirection', 'remove disease'], cost: 1000 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.nausea', value: 2, source: "Plaguebringer's Mask" },
      { type: 'immunity', target: 'disease', value: 0, source: "Plaguebringer's Mask", condition: { type: 'custom', params: {}, description: 'specific disease chosen at creation' } },
    ],
  },
  {
    id: 'wondrous-reapers-mask',
    name: "Reaper's Mask",
    category: 'wondrous',
    source: 'Rise of the Runelords Anniversary Edition',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'head',
    price: 12000,
    weight: 1,
    description:
      'This magical mask provides enhanced perception against fearful creatures and increased slashing damage against living foes. ' +
      'It allows the user to cast confusion twice daily. However, donning the mask inflicts 1 point of Charisma damage.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['confusion', 'deathwatch'], cost: 6000 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'special', target: 'special.reapers_mask_enhanced_perception', value: 0, source: "Reaper's Mask" },
      { type: 'penalty', target: 'ability.cha', value: -1, source: "Reaper's Mask" },
    ],
    spellLikeAbilities: [
      { spells: [{ spellId: 'confusion', spellName: 'Confusion', casterLevel: 7, usesPerDay: 2, activationAction: 'standard' }] },
    ],
  },
  {
    id: 'wondrous-seashell-diving-mask',
    name: 'Seashell Diving Mask',
    category: 'wondrous',
    source: 'Heroes from the Fringe',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'head',
    price: 6000,
    weight: 3,
    description:
      'A pink conch shell with leather straps and clear viewing mask that enables underwater breathing. The wearer gains a ' +
      '+4 competence bonus on Perception checks underwater and can detect magical auras as if having cast detect magic.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['air bubble', 'detect magic'], cost: 3000 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.perception', value: 4, source: 'Seashell Diving Mask', condition: { type: 'custom', params: {}, description: 'underwater only' } },
      { type: 'special', target: 'special.seashell_mask_underwater_breathing', value: 0, source: 'Seashell Diving Mask' },
    ],
  },
  {
    id: 'wondrous-skin-mask',
    name: 'Skin Mask',
    category: 'wondrous',
    source: 'Rise of the Runelords Anniversary Edition',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'head',
    price: 1500,
    weight: 0,
    description:
      'A mask crafted from preserved human skin. It grants a +2 competence bonus on Perception checks against creatures that ' +
      'aren\'t immune to fear and a +1 profane bonus on damage with slashing weapons against living creatures. Donning the mask ' +
      'inflicts 1 point of Charisma damage as the wearer\'s thoughts become tangled with images of murder.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['deathwatch', 'rage'], cost: 750 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.perception', value: 2, source: 'Skin Mask', condition: { type: 'custom', params: {}, description: 'vs. creatures not immune to fear' } },
      { type: 'damage', bonusType: 'profane', target: 'damage.slashing', value: 1, source: 'Skin Mask', condition: { type: 'custom', params: {}, description: 'vs. living creatures only' } },
      { type: 'penalty', target: 'ability.cha', value: -1, source: 'Skin Mask' },
    ],
  },
  {
    id: 'wondrous-stalkers-mask',
    name: "Stalker's Mask",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'head',
    price: 3500,
    weight: 1,
    description:
      'This grotesque headpiece crafted from preserved human facial sections allows the wearer to appear shadowy and gain a +5 bonus ' +
      'to Stealth. Once daily, the wearer can mimic the appearance of an observed creature within 60 feet for one hour, providing a ' +
      '+10 bonus on related Disguise checks. The mask also grants a +1 bonus on attack and damage rolls against the mimicked creature.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disguise self', 'rage'], cost: 1750 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', target: 'skill.stealth', value: 5, source: "Stalker's Mask" },
      { type: 'special', target: 'special.stalkers_mask_disguise', value: 0, source: "Stalker's Mask" },
    ],
  },
  {
    id: 'wondrous-vermin-mask',
    name: 'Vermin Mask',
    category: 'wondrous',
    source: 'People of the Wastes',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'head',
    price: 10080,
    weight: 1,
    description:
      'These carved wooden masks depict wasteland vermin like giant ants, scorpions, or spiders. When worn during wild shape or ' +
      'vermin shape matching the mask\'s design, the wearer can speak normally and gains extended duration — 3 additional hours ' +
      'for wild shape or 7 extra minutes for the spell.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['vermin shape I'], cost: 5040 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.vermin_mask_extended_duration', value: 0, source: 'Vermin Mask' }],
  },
  {
    id: 'wondrous-visage-of-the-broodlord',
    name: 'Visage of the Broodlord',
    category: 'wondrous',
    source: 'Lost Kingdoms',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 6,
    slot: 'head',
    price: 9600,
    weight: 1,
    description:
      'This wicker and insect-resin mask renders the wearer immune to swarm distraction attacks. Additionally, once per day ' +
      'the wearer can transform into an insect as per vermin shape I.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['vermin shape I'], cost: 4800 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'immunity', target: 'special.swarm_distraction', value: 0, source: 'Visage of the Broodlord' },
    ],
    spellLikeAbilities: [
      { spells: [{ spellId: 'vermin_shape_i', spellName: 'Vermin Shape I', casterLevel: 6, usesPerDay: 1, activationAction: 'standard' }] },
    ],
  },
];
