import type { BloodlineEntry } from '@/types/classOptions';

export const bloodragerBloodlinesBatch1: BloodlineEntry[] = [
  {
    id: 'bloodrager-aberrant',
    name: 'Aberrant',
    classIds: ['bloodrager'],
    description: "There is a taint in your blood that is both alien and bizarre. When you bloodrage, this manifests in peculiar and terrifying ways.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Staggering Strike',
        description: "On a confirmed critical hit, the target must succeed at a Fortitude save (DC = 10 + 1/2 bloodrager level + Constitution modifier) or be staggered for 1 round.",
        levelGained: 1,
      },
      {
        name: 'Abnormal Reach',
        description: "Your reach increases by 5 feet.",
        levelGained: 4,
      },
      {
        name: 'Aberrant Fortitude',
        description: "You become immune to the sickened and nauseated conditions.",
        levelGained: 8,
      },
      {
        name: 'Unusual Anatomy',
        description: "You gain a 50% chance to negate critical hits and sneak attacks; damage is rolled normally instead.",
        levelGained: 12,
      },
      {
        name: 'Aberrant Resistance',
        description: "You become immune to disease, exhaustion, fatigue, poison, and the staggered condition.",
        levelGained: 16,
      },
      {
        name: 'Aberrant Form',
        description: "You gain constant immunity to critical hits and sneak attacks, 60-foot blindsight, and +1 damage reduction. These benefits are active even outside of bloodrage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'enlarge person',     // 7th
      'see invisibility',   // 10th
      'displacement',       // 13th
      'black tentacles',    // 16th
    ],
    bonusFeats: [
      'Combat Reflexes',
      'Great Fortitude',
      'Improved Disarm',
      'Improved Grapple',
      'Improved Initiative',
      'Improved Unarmed Strike',
      'Iron Will',
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-abyssal',
    name: 'Abyssal',
    classIds: ['bloodrager'],
    description: "Generations ago, a demon spread its filth into the essence of your bloodline. While it doesn't manifest in all of your kin, in those moments when you're bloodraging, you embody its terrifying presence.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Claws',
        description: "You grow claws while bloodraging that function as natural weapons dealing 1d6 damage (1d4 if Small). At 4th level they are treated as magic weapons for damage reduction. At 8th level damage increases to 1d8 (1d6 if Small). At 12th level your claws deal an additional 1d6 fire damage.",
        levelGained: 1,
      },
      {
        name: 'Demonic Bulk',
        description: "When entering a bloodrage, you can choose to grow one size category larger, even if you are not humanoid.",
        levelGained: 4,
      },
      {
        name: 'Demon Resistances',
        description: "You gain resistance 5 to acid, cold, and fire. At 16th level, these resistances increase to 10.",
        levelGained: 8,
      },
      {
        name: 'Abyssal Bloodrage',
        description: "Your Strength bonus from bloodraging increases by 2. The AC penalty from bloodraging becomes -4. At 16th level the bonus increases by 4, and at 20th level by 6.",
        levelGained: 12,
      },
      {
        name: 'Demonic Aura',
        description: "You exude a 5-foot aura of fire that deals 2d6 + Constitution modifier fire damage to any creature that ends its turn within the aura.",
        levelGained: 16,
      },
      {
        name: 'Demonic Immunities',
        description: "You become immune to electricity and poison. You have this benefit constantly, even while not bloodraging.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'ray of enfeeblement', // 7th
      "bull's strength",     // 10th
      'rage',                // 13th
      'stoneskin',           // 16th
    ],
    bonusFeats: [
      'Cleave',
      'Great Fortitude',
      'Improved Bull Rush',
      'Improved Sunder',
      'Intimidating Prowess',
      'Power Attack',
      'Toughness',
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-aquatic',
    name: 'Aquatic',
    classIds: ['bloodrager'],
    description: "The anger in your blood rises from the ocean depths, seeded by descent from undersea empires, creeping ichthyic infiltrators into remote seaside villages, or something deeper still.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Underwater Attacks',
        description: "Your bludgeoning and slashing melee attacks underwater ignore the usual underwater attack penalties.",
        levelGained: 1,
      },
      {
        name: 'Aquatic Adaptation',
        description: "You gain a 30-foot swim speed and the ability to breathe both water and air. At 8th level you gain cold resistance 5. At 12th level your swim speed increases to 60 feet and you retain these benefits even outside of bloodrage.",
        levelGained: 4,
      },
      {
        name: 'Watersense',
        description: "You gain tremorsense with a 30-foot range while in water. At 12th level this increases to 60 feet.",
        levelGained: 8,
      },
      {
        name: 'Wavedarter',
        description: "While underwater during bloodrage, your reach increases by 5 feet and you gain the effects of haste.",
        levelGained: 12,
      },
      {
        name: 'Currentcaller',
        description: "You can call up a current with a speed up to 20 feet in the direction of your choice in your space (moving with you) that lasts until the end of your turn.",
        levelGained: 16,
      },
      {
        name: 'Deep Fury',
        description: "You gain tremorsense 120 feet while in water, evasion, and immunity to cold and pressure damage. These benefits are constant, even outside of bloodrage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'hydraulic push',    // 7th
      'slipstream',        // 10th
      'hydraulic torrent', // 13th
      'control water',     // 16th
    ],
    bonusFeats: [
      'Aquadynamic Focus',
      'Dodge',
      'Lightning Reflexes',
      'Mobility',
      'Skill Focus (Fly)',
      'Steam Spell',
      'Toughness',
    ],
    source: 'pf1e-cs-aa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-arcane',
    name: 'Arcane',
    classIds: ['bloodrager'],
    description: "The eldritch nature of the blood coursing through your veins transforms you into a spell-breaking terror.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Disruptive Bloodrage',
        description: "The DC to cast spells defensively increases by 2 for enemies within your threatened area. This stacks with the Disruptive feat.",
        levelGained: 1,
      },
      {
        name: 'Arcane Bloodrage',
        description: "Upon entering a bloodrage, you can apply the effects of blur, protection from arrows, resist energy, or spider climb. These effects last for the duration of the rage.",
        levelGained: 4,
      },
      {
        name: 'Greater Arcane Bloodrage',
        description: "When entering a bloodrage you can apply the effects of displacement or haste in addition to the arcane bloodrage power.",
        levelGained: 8,
      },
      {
        name: "Caster's Scourge",
        description: "You gain a number of extra attacks of opportunity equal to your Dexterity modifier (minimum 1) that can only be used against spellcasters casting defensively within your threatened area. This is a constant ability.",
        levelGained: 12,
      },
      {
        name: 'True Arcane Bloodrage',
        description: "When entering a bloodrage you can apply the effects of beast shape IV, form of the dragon I, or transformation.",
        levelGained: 16,
      },
      {
        name: "Caster's Bane",
        description: "Spellcasters with a lower caster level than you always provoke attacks of opportunity when casting within your threatened area, even if they succeed at casting defensively. This is a constant ability.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'magic missile',  // 7th
      'invisibility',   // 10th
      'lightning bolt', // 13th
      'dimension door', // 16th
    ],
    bonusFeats: [
      'Combat Reflexes',
      'Disruptive',
      'Improved Initiative',
      'Iron Will',
      'Power Attack',
      'Quick Draw',
      'Spellbreaker',
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-black-blood',
    name: 'Black Blood',
    classIds: ['bloodrager'],
    description: "Contact with the black blood of Orv - by you or one of your ancestors - transformed your bloodline. This necromantic taint in your blood mutates you into something peculiar.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Black Blood',
        description: "You gain constant immunity to black blood effects. While bloodraging, after taking slashing or piercing damage, you can use an immediate action to grant your melee attacks the frost weapon special ability for 2 rounds. Usable three times per day.",
        levelGained: 1,
      },
      {
        name: 'Abnormal Reach',
        description: "Your reach increases by 5 feet.",
        levelGained: 4,
      },
      {
        name: 'Black Blood Resistance',
        description: "You gain resistance 5 to cold and a +2 bonus on saving throws against ability drain, death effects, disease, energy drain, paralysis, and poison. At 16th level the resistance increases to 10 and the bonus to +4.",
        levelGained: 8,
      },
      {
        name: 'Retributive Spray',
        description: "When struck by a slashing or piercing attack, black blood sprays toward the attacker, dealing 1d8 cold damage plus 1 per 2 bloodrager levels (Reflex save DC = 10 + half bloodrager level + Constitution modifier halves).",
        levelGained: 12,
      },
      {
        name: 'Black Blood Transfusion',
        description: "Your critical hits transfer black blood to the target; positive energy healing removes it without providing its benefit.",
        levelGained: 16,
      },
      {
        name: 'Black Blood Immunity',
        description: "You gain constant immunity to cold, nonlethal damage, critical hits, and sneak attacks.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'chill touch',      // 7th
      'unshakable chill', // 10th
      'elemental aura',   // 13th
      'black tentacles',  // 16th
    ],
    bonusFeats: [
      'Combat Reflexes',
      'Diehard',
      'Endurance',
      'Great Fortitude',
      'Improved Initiative',
      'Iron Will',
      'Toughness',
    ],
    source: 'pf1e-ppc-aco',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-celestial',
    name: 'Celestial',
    classIds: ['bloodrager'],
    description: "By way of a celestial ancestor or divine intervention, the blood of angels fills your body with a holy potency, granting you a majestic visage and angelic powers when you enter your bloodrage.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Angelic Attacks',
        description: "Your melee attacks count as good-aligned for the purpose of overcoming damage reduction. You deal an additional 1d6 damage to evil outsiders, stacking with similar effects.",
        levelGained: 1,
      },
      {
        name: 'Celestial Resistances',
        description: "You gain resistance 5 to acid and cold. At 12th level these resistances increase to 10.",
        levelGained: 4,
      },
      {
        name: 'Conviction',
        description: "Once per bloodrage you can reroll one ability check, skill check, or saving throw you just made.",
        levelGained: 8,
      },
      {
        name: 'Wings of Heaven',
        description: "You sprout feathery wings granting a fly speed of 60 feet with good maneuverability. At 20th level the fly speed increases to 80 feet.",
        levelGained: 12,
      },
      {
        name: 'Angelic Protection',
        description: "You gain a +4 deflection bonus to AC and a +4 resistance bonus on saving throws against evil creatures; you are also affected by protection from evil (non-dispellable).",
        levelGained: 16,
      },
      {
        name: 'Ascension',
        description: "You gain immunity to acid, cold, and petrification; resistance 10 to electricity and fire; and a +4 racial bonus on saving throws against poison. These benefits persist outside of bloodrage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'bless',           // 7th
      'resist energy',   // 10th
      'heroism',         // 13th
      'holy smite',      // 16th
    ],
    bonusFeats: [
      'Dodge',
      'Improved Initiative',
      'Iron Will',
      'Mobility',
      'Mounted Combat',
      'Ride-By Attack',
      'Weapon Focus',
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-destined',
    name: 'Destined',
    classIds: ['bloodrager'],
    description: "Your bloodline is destined for great things. When you bloodrage, you exude a greatness that makes all but the most legendary creatures seem lesser.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Destined Strike',
        description: "Up to three times per day (five times at 12th level), you can grant yourself an insight bonus equal to 1/2 your bloodrager level (minimum 1) on a single melee attack roll.",
        levelGained: 1,
      },
      {
        name: 'Fated Bloodrager',
        description: "You gain a +1 luck bonus to AC and on saving throws. This bonus increases by 1 for every 4 bloodrager levels (maximum +5 at 20th level).",
        levelGained: 4,
      },
      {
        name: 'Certain Strike',
        description: "Once per bloodrage, you can reroll one attack roll after rolling but before the results are revealed.",
        levelGained: 8,
      },
      {
        name: 'Defy Death',
        description: "Once per day, when an attack would reduce you to 0 or fewer hit points, you can make a DC 20 Fortitude save; success reduces you to 1 hit point instead.",
        levelGained: 12,
      },
      {
        name: 'Unstoppable',
        description: "Your critical threats automatically confirm. Enemy critical threats against you confirm only on a natural 20.",
        levelGained: 16,
      },
      {
        name: 'Victory or Death',
        description: "You become immune to paralysis, petrification, the stunned condition, the dazed condition, and the staggered condition. This is constant, even outside of bloodrage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'shield',                  // 7th
      'blur',                    // 10th
      'protection from energy',  // 13th
      'freedom of movement',     // 16th
    ],
    bonusFeats: [
      'Diehard',
      'Endurance',
      'Improved Initiative',
      'Intimidating Prowess',
      'Leadership',
      'Lightning Reflexes',
      'Weapon Focus',
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-draconic',
    name: 'Draconic',
    classIds: ['bloodrager'],
    description: "At some point in your family's history, a dragon interbred with your bloodline. Now, the sublime monster's ancient power fuels your bloodrage.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Claws',
        description: "You grow claws that function as natural weapons dealing 1d6 damage (1d4 if Small). At 4th level they are treated as magic weapons for damage reduction. At 8th level damage increases to 1d8 (1d6 if Small). At 12th level your claws deal an additional 1d6 energy damage of your draconic energy type.",
        levelGained: 1,
      },
      {
        name: 'Draconic Resistance',
        description: "You gain resistance 5 to your draconic energy type and a +1 natural armor bonus. At 8th level the resistance increases to 10 and the natural armor bonus to +2. At 16th level the natural armor bonus increases to +4.",
        levelGained: 4,
      },
      {
        name: 'Breath Weapon',
        description: "Once per day, you can use a breath weapon dealing 1d6 points of energy damage per bloodrager level of your draconic energy type (Reflex DC = 10 + 1/2 level + Constitution modifier for half). Usable twice per day at 16th level, three times per day at 20th level.",
        levelGained: 8,
      },
      {
        name: 'Dragon Wings',
        description: "Upon entering a bloodrage, you grow wings granting a fly speed of 60 feet with average maneuverability. At 16th level the speed increases to 80 feet with good maneuverability.",
        levelGained: 12,
      },
      {
        name: 'Dragon Form',
        description: "While bloodraging, you can transform into your chosen dragon type as per form of the dragon II.",
        levelGained: 16,
      },
      {
        name: 'Power of Wyrms',
        description: "You gain immunity to paralysis, sleep, and the energy damage type of your draconic bloodline, plus 60-foot blindsense. These benefits are constant, even outside of bloodrage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'shield',          // 7th
      'resist energy',   // 10th
      'fly',             // 13th
      'fear',            // 16th
    ],
    bonusFeats: [
      'Blind-Fight',
      'Cleave',
      'Great Fortitude',
      'Improved Initiative',
      'Power Attack',
      'Skill Focus (Fly)',
      'Toughness',
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-elemental',
    name: 'Elemental',
    classIds: ['bloodrager'],
    description: "At 1st level, select one of the four elements: air, earth, fire, or water. This selection cannot be changed. Your abilities are based on this element.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Elemental Strikes',
        description: "Three times per day as a swift action, your melee attacks deal 1d6 additional energy damage of your chosen element type for 1 round. At 8th level, usable five times per day. At 20th level, this bonus is constant and does not require activation.",
        levelGained: 1,
      },
      {
        name: 'Elemental Resistance',
        description: "You gain energy resistance 10 against your chosen element type.",
        levelGained: 4,
      },
      {
        name: 'Elemental Movement',
        description: "You gain a movement ability based on your chosen element: fly 60 feet (air), burrow 30 feet (earth), +30 feet base speed (fire), or swim 60 feet (water).",
        levelGained: 8,
      },
      {
        name: 'Power of the Elements',
        description: "Your elemental strike damage bypasses energy resistance and deals half damage to creatures immune to your element type.",
        levelGained: 12,
      },
      {
        name: 'Elemental Form',
        description: "Once per day when entering a bloodrage, you can assume the form of an elemental as per elemental body IV.",
        levelGained: 16,
      },
      {
        name: 'Elemental Body',
        description: "You gain immunity to sneak attacks, critical hits, and energy damage of your chosen element type. These benefits are constant, even outside of bloodrage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'burning hands',         // 7th (energy type varies)
      'scorching ray',         // 10th (energy type varies)
      'protection from energy', // 13th
      'elemental body i',      // 16th
    ],
    bonusFeats: [
      'Cleave',
      'Dodge',
      'Great Fortitude',
      'Improved Initiative',
      'Lightning Reflexes',
      'Power Attack',
      'Weapon Focus',
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-fey',
    name: 'Fey',
    classIds: ['bloodrager'],
    description: "One of your ancestors was fey, or the fey realm somehow intermixed with your bloodline. It affects your bloodrage in tricky and surprising ways.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Confusing Critical',
        description: "Each time you confirm a critical hit, the target must succeed at a Will saving throw (DC = 10 + 1/2 bloodrager level + Constitution modifier) or be confused for 1 round.",
        levelGained: 1,
      },
      {
        name: 'Leaping Charger',
        description: "When you charge, you ignore difficult terrain (but not other creatures). You can move through it at normal speed and it does not impede your charge.",
        levelGained: 4,
      },
      {
        name: 'Blurring Movement',
        description: "As long as you move at least 10 feet, you gain the effects of blur for 1 round.",
        levelGained: 8,
      },
      {
        name: 'Quickling Bloodrage',
        description: "While bloodraging, you are treated as if you are under the effects of haste.",
        levelGained: 12,
      },
      {
        name: 'One with Nature',
        description: "Creatures of the animal or plant type do not attack you unless magically compelled or unless you attack them first. Three times per day as a move action, you can transport yourself between trees as tree stride (at half range).",
        levelGained: 16,
      },
      {
        name: 'Fury of the Fey',
        description: "When entering a bloodrage, choose one creature type (or subtype for outsiders or humanoids). All of your melee attacks gain the bane property against creatures of that type. This does not stack with other forms of bane.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'entangle',         // 7th
      'hideous laughter', // 10th
      'haste',            // 13th
      'confusion',        // 16th
    ],
    bonusFeats: [
      'Combat Reflexes',
      'Dodge',
      'Improved Initiative',
      'Intimidating Prowess',
      'Lightning Reflexes',
      'Mobility',
      'Step Up',
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-hag',
    name: 'Hag',
    classIds: ['bloodrager'],
    description: "Hags interbreed with other races frequently, and those children who escape their grasp may pass their heritage on to later generations before it reemerges. The potent humors that accompany hag blood are better suited to a bloodrager's ferocity than to traditional spellcasting.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Evil Eye',
        description: "As a standard action, you can curse an opponent within 30 feet, imposing a -2 penalty to AC and attack rolls for 1 round per class level or until the target hits you. The target can negate this with a Will save. Usable 3 + Charisma modifier times per day.",
        levelGained: 1,
      },
      {
        name: 'Hag Fortitude',
        description: "At 4th level you gain immunity to mundane and magical diseases. At 8th level you also gain immunity to poison.",
        levelGained: 4,
      },
      {
        name: 'Hag Transformation',
        description: "While bloodraging, you gain a +2 morale bonus to Strength, low-light vision, and darkvision 60 feet, but suffer a -2 penalty to Dexterity and Wisdom. At 16th level, the morale bonus from this power also applies to Fortitude and Reflex saving throws against spells.",
        levelGained: 12,
      },
      {
        name: 'Covenguard',
        description: "You can cast bestow curse three times per day as a spell-like ability. You count as a hag for the purposes of joining a hag coven (requiring at least one actual hag).",
        levelGained: 16,
      },
      {
        name: 'Curse Conduit',
        description: "You gain immunity to negative energy damage and spells with the curse descriptor. On a confirmed critical hit, you can immediately cast bestow curse as a free action.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'chill touch',       // 7th
      'blindness/deafness', // 10th
      'bestow curse',      // 13th
      'charm monster',     // 16th
    ],
    bonusFeats: [
      'Blind-Fight',
      'Deceitful',
      'Great Fortitude',
      'Improved Natural Attack',
      'Intimidating Prowess',
      "Mother's Gift",
    ],
    source: 'pf1e-ppc-botc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-infernal',
    name: 'Infernal',
    classIds: ['bloodrager'],
    description: "The Pit lives in your blood. Maybe one of your ancestors was seduced by the powers of Hell or made a deal with a devil. Either way, its corruption seethes within your lineage.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Hellfire Strike',
        description: "As a swift action up to three times per day, your melee attacks gain the flaming weapon special ability for 1 round. At 12th level, usable five times per day and the weapon gains flaming burst instead.",
        levelGained: 1,
      },
      {
        name: 'Infernal Resistance',
        description: "You gain fire resistance 5 and a +2 bonus on saving throws against poison. At 8th level, fire resistance increases to 10 and the poison bonus increases to +4.",
        levelGained: 4,
      },
      {
        name: 'Diabolical Arrogance',
        description: "You gain a +4 bonus on saving throws against enchantment and fear effects.",
        levelGained: 8,
      },
      {
        name: 'Dark Wings',
        description: "You can grow batlike wings from your back, giving you a fly speed of 60 feet with average maneuverability. At 16th level, your fly speed increases to 80 feet with good maneuverability.",
        levelGained: 12,
      },
      {
        name: 'Hellfire Charge',
        description: "Your charge attacks gain hellfire strike benefits without expending uses. If hellfire strike is already active, fire damage from your attacks ignores fire resistance of 10 or lower.",
        levelGained: 16,
      },
      {
        name: 'Fiend of the Pit',
        description: "You gain immunity to fire and poison, resistance 10 to acid and cold, and the ability to see in magical darkness. These benefits are constant, even outside of bloodrage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'protection from good', // 7th
      'scorching ray',        // 10th
      'suggestion',           // 13th
      'fire shield',          // 16th
    ],
    bonusFeats: [
      'Blind-Fight',
      'Combat Reflexes',
      'Deceitful',
      'Improved Disarm',
      'Improved Sunder',
      'Intimidating Prowess',
      'Iron Will',
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-kyton',
    name: 'Kyton',
    classIds: ['bloodrager'],
    description: "Just as an eclipse drives animals wild, so too does the darkness unleash a madness from deep within you.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Painful Strike',
        description: "When you confirm a critical hit, the target is sickened for a number of rounds equal to 1/2 your bloodrager level (minimum 1) and must succeed at concentration checks (DC 15 + spell level) to cast spells.",
        levelGained: 1,
      },
      {
        name: 'Grasping Chains',
        description: "You gain a +4 bonus on Climb checks. At 9th level this bonus increases to +8 and you gain a climb speed equal to half your base speed.",
        levelGained: 4,
      },
      {
        name: 'Armor of Chains',
        description: "You gain resistance 5 to cold and a +4 armor bonus to AC. At 16th level the resistance increases to 10 and the armor bonus to +8.",
        levelGained: 8,
      },
      {
        name: "Agony's Embrace",
        description: "When you confirm a critical hit, your Strength bonus from bloodraging increases by 2 for 1d6 rounds (or +4 at 16th level, +6 at 20th level).",
        levelGained: 12,
      },
      {
        name: 'Unnerving Gaze',
        description: "You have a 30-foot gaze attack. Creatures that fail their Will saves are shaken for 1d3 rounds.",
        levelGained: 16,
      },
      {
        name: 'Kyton Immunities',
        description: "You gain immunity to cold and DR 10/good and silver. These benefits are constant, even outside of bloodrage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'persuasive goad', // 7th
      'pain strike',     // 10th
      'deeper darkness', // 13th
      'fear',            // 16th
    ],
    bonusFeats: [
      'Alertness',
      'Blind-Fight',
      'Exotic Weapon Proficiency (spiked chain)',
      'Great Fortitude',
      'Improved Dirty Trick',
      'Iron Will',
      'Toughness',
    ],
    source: 'pf1e-ppc-aco',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-martyred',
    name: 'Martyred',
    classIds: ['bloodrager'],
    description: "One of your ancestors paid the ultimate price for her beliefs. This distant relative martyred herself out of a devout dedication to some specific cause, and that sacrifice has infused you with power that you can use for good - or for ill.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Ancestral Strikes',
        description: "Three times per day as a swift action, your melee attacks deal 1d6 additional good-aligned damage if you are good, or 1d6 evil-aligned damage if you are evil, for 1 round.",
        levelGained: 1,
      },
      {
        name: "Martyr's Resistances",
        description: "You gain fire resistance 5 and a +2 bonus on saving throws against fear and pain effects. At 8th level these bonuses improve.",
        levelGained: 4,
      },
      {
        name: "Forebear's Reserves",
        description: "You can reroll a saving throw once during a bloodrage. You must decide to use this ability after the die is rolled but before the GM reveals the result.",
        levelGained: 8,
      },
      {
        name: 'Ancestral Champion',
        description: "Your ancestral strikes deal 2d6 additional damage against creatures of the alignment opposite to yours.",
        levelGained: 12,
      },
      {
        name: 'Sacrificial Exchange',
        description: "As a swift action once per day while bloodraging, you can take a -2 penalty to Armor Class to grant one ally within 30 feet a +4 morale bonus to one ability score.",
        levelGained: 16,
      },
      {
        name: 'Eternal Martyr',
        description: "You become immune to death effects. The cost to resurrect you is halved, and you cannot be transformed into undead.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'endure elements',     // 7th
      'surmount affliction', // 10th
      'heroism',             // 13th
      'blessing of fervor',  // 16th
    ],
    bonusFeats: [
      'Diehard',
      'Endurance',
      'Heroic Defiance',
      'Heroic Recovery',
      'Leadership',
      'Persuasive',
      'Toughness',
    ],
    source: 'pf1e-ppc-ah',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-medusa',
    name: 'Medusa',
    classIds: ['bloodrager'],
    description: "Ancient medusa blood runs through your veins, granting you fearsome powers of petrification and serpentine resilience when you enter your bloodrage.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Gaze',
        description: "As a standard action, target a creature within 30 feet. If the target fails a Fortitude save, its speed is halved for a number of rounds equal to your Constitution modifier (minimum 1).",
        levelGained: 1,
      },
      {
        name: 'Gift of the Ancients',
        description: "You gain a +2 resistance bonus on saving throws against gaze attacks and poison, plus a +2 competence bonus on Perception checks. These bonuses increase by 2 at 8th level.",
        levelGained: 4,
      },
      {
        name: 'Staggering Gaze',
        description: "Creatures affected by your gaze ability become staggered in addition to having their speed halved.",
        levelGained: 8,
      },
      {
        name: "Viper's Touch",
        description: "You develop two venomous claws dealing 1d8 damage (1d6 if Small). Your claws deliver poison on a hit (Fortitude DC = 10 + 1/2 bloodrager level + Constitution modifier; frequency 1/round for 6 rounds; effect 1d2 Strength damage; cure 1 save).",
        levelGained: 12,
      },
      {
        name: 'Stone Resistance',
        description: "You gain acid resistance 10, immunity to disease, poison, the sickened condition, and the staggered condition, and you cannot be flanked.",
        levelGained: 16,
      },
      {
        name: 'True Petrification',
        description: "Your gaze ability can permanently petrify targets as flesh to stone, or you may choose to use the weaker slowing version instead.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'cause fear',   // 7th
      'resist energy', // 10th
      'hold person',  // 13th
      'stoneskin',    // 16th
    ],
    bonusFeats: [
      'Alertness',
      'Blind-Fight',
      'Great Fortitude',
      'Improved Initiative',
      'Improved Unarmed Strike',
      'Intimidating Prowess',
      'Toughness',
    ],
    source: 'pf1e-ppc-hog',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-naga',
    name: 'Naga',
    classIds: ['bloodrager'],
    description: "The blood of the powerful, serpentine aberrations known as nagas runs through your veins, fueling your bloodrage.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Serpent Fangs',
        description: "You gain a bite attack as a primary natural weapon dealing 1d8 damage (1d6 if Small) plus your Strength modifier. At 4th level your fangs overcome damage reduction as magic weapons. At 8th level damage increases to 1d10 (1d8 if Small).",
        levelGained: 1,
      },
      {
        name: 'Serpentine Swim',
        description: "You gain a swim speed equal to your base speed.",
        levelGained: 4,
      },
      {
        name: 'Naga Defenses',
        description: "Upon entering a bloodrage, you gain a +2 enhancement bonus to natural armor and a +4 bonus on saving throws against poison. At 16th level these bonuses increase to +4 and +8. At 20th level the natural armor bonus increases to +6 and you become immune to poison.",
        levelGained: 8,
      },
      {
        name: 'Poison Fangs',
        description: "Your bite delivers poison on a hit (Fortitude DC = 10 + 1/2 bloodrager level + Constitution modifier; frequency 1/round for 6 rounds; effect 1d2 Constitution damage; cure 1 save).",
        levelGained: 12,
      },
      {
        name: 'Naga Form',
        description: "Upon entering a bloodrage, you can assume the form of a naga via naga shape III.",
        levelGained: 16,
      },
      {
        name: 'Naga Thoughts',
        description: "Upon entering a bloodrage, you gain immunity to charm effects and mind-reading, a +2 bonus on saves against mind-affecting effects, the ability to see invisible creatures, and at-will detect thoughts.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'ray of enfeeblement', // 7th
      'invisibility',        // 10th
      'lightning bolt',      // 13th
      'poison',              // 16th
    ],
    bonusFeats: [
      'Alertness',
      'Combat Casting',
      'Combat Reflexes',
      'Dodge',
      'Lightning Reflexes',
      'Power Attack',
      'Stealthy',
    ],
    source: 'pf1e-ppc-bob',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-phoenix',
    name: 'Phoenix',
    classIds: ['bloodrager'],
    description: "Your bloodline descends from a phoenix or someone touched by its immortal fire. When you bloodrage, you channel phoenix fire to sear enemies and restore the vitality of allies.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Dispelling Strikes',
        description: "When you confirm a critical hit against a target, you can attempt to dispel one magical effect on the target as targeted dispel magic. Limited to one dispel attempt per creature per day. At 8th level you gain a +2 bonus on the dispel check. At 20th level you can dispel all effects instead.",
        levelGained: 1,
      },
      {
        name: 'Heart of Fire',
        description: "You gain fire resistance 5 and a bonus to hit point healing from cure spells of +1 HP per die. At 8th level the resistance increases to 10 and the bonus healing increases to +2 HP per die.",
        levelGained: 4,
      },
      {
        name: 'Blazing Vitality',
        description: "While bloodraging, you create a 10-foot aura that grants allies temporary hit points equal to your Constitution modifier when they end their turns within it. This effect lasts 1 minute.",
        levelGained: 8,
      },
      {
        name: 'Molten Wings',
        description: "Flame wings sprout from your back, granting a fly speed of 60 feet with average maneuverability. At 16th level the speed increases to 80 feet with good maneuverability.",
        levelGained: 12,
      },
      {
        name: 'Self-Resurrection',
        description: "Once per day while bloodraging and below 0 hit points, you can call upon your phoenix heritage to function as breath of life. At 20th level this functions as heal instead.",
        levelGained: 16,
      },
      {
        name: 'Phoenix Fire',
        description: "While bloodraging, your melee attacks deal 2d6 additional fire damage; enemies within 20 feet take 4d6 fire damage at the start of your turn (Reflex DC = 10 + 1/2 bloodrager level + Constitution modifier negates); and attackers using non-reach weapons take 1d6 fire damage per hit.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'burning hands',     // 7th
      'lesser restoration', // 10th
      'cure serious wounds', // 13th
      'fire shield',        // 16th
    ],
    bonusFeats: [
      'Combat Reflexes',
      'Critical Focus',
      'Diehard',
      'Dodge',
      'Endurance',
      'Improved Initiative',
      'Mobility',
    ],
    source: 'pf1e-ap144',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-salamander',
    name: 'Salamander',
    classIds: ['bloodrager'],
    description: "Salamanders are fierce warriors and master smiths, and you wield their might and mastery of metal by birthright.",
    bloodlineArcana: "",
    powers: [
      {
        name: "Serpent's Tail",
        description: "Your legs transform into a serpentine tail, reducing your speed by 10 feet (minimum 5). You become immune to trip attempts and gain a tail slap natural attack dealing 1d6 + Strength modifier (1d4 if Small). At 4th level the speed penalty is removed. At 8th level damage increases to 1d8 (1d6 if Small). At 12th level your reach increases by 5 feet.",
        levelGained: 1,
      },
      {
        name: 'Salamander Scales',
        description: "You gain fire resistance 5 and a +1 natural armor bonus. At 8th level fire resistance increases to 10 and natural armor to +2. At 16th level fire resistance increases to 20 and natural armor to +3.",
        levelGained: 4,
      },
      {
        name: 'Bloodsmith',
        description: "Upon entering a bloodrage, you can enhance one weapon, shield, or armor piece with greater magic weapon or magic vestment (caster level equals your bloodrager level) until the bloodrage ends.",
        levelGained: 8,
      },
      {
        name: 'Scorching Heat',
        description: "Your natural attacks and attacks with metal weapons deal 1d6 additional fire damage. Creatures you are grappling take 2d6 fire damage per round. Your equipment is unharmed by this fire.",
        levelGained: 12,
      },
      {
        name: 'Master Bloodsmith',
        description: "You can affect up to two items with your bloodsmith power simultaneously. At 20th level you can affect up to three items.",
        levelGained: 16,
      },
      {
        name: 'Essence of Fire',
        description: "You become immune to fire damage and your bloodrager damage reduction increases by 5 (or you gain DR 10/magic if you did not already have DR). These benefits are constant, even outside of bloodrage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'lead blades',       // 7th
      'make whole',        // 10th
      'versatile weapon',  // 13th
      'fire shield',       // 16th (warm shield only)
    ],
    bonusFeats: [
      'Cleave',
      'Improved Grapple',
      'Improved Iron Will',
      'Iron Will',
      'Power Attack',
      'Skill Focus (Perception)',
      'Toughness',
    ],
    source: 'pf1e-ppc-emh',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-shadow',
    name: 'Shadow',
    classIds: ['bloodrager'],
    description: "Your fury absorbs light, warmth, and strength. The darkness of the Shadow Plane flows through your bloodline, granting you command over shadows.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Shadow Vision',
        description: "While bloodraging, you gain low-light vision if you don't already have it, or add 30 feet to your existing darkvision. At 10th level you gain darkvision 30 feet or increase existing darkvision by an additional 30 feet.",
        levelGained: 1,
      },
      {
        name: 'Shades of Rage',
        description: "Whenever you enter a bloodrage, the light level within 30 feet of you decreases by one step. Magical light can dispel this effect if the caster succeeds at a caster level check (DC 10 + your bloodrager level).",
        levelGained: 4,
      },
      {
        name: 'Strength of Shadows',
        description: "You gain cold resistance 10 and your melee attacks deal additional cold damage equal to the weapon's critical multiplier. At 13th level the resistance increases to 20. At 18th level you become immune to cold.",
        levelGained: 8,
      },
      {
        name: 'Strike Through Shadow',
        description: "Once per day, you can declare a single melee attack as a strike through shadow; the attack moves through your target's shadow and strikes from below or inside its armor, resolving against touch AC. Additional uses at 15th and 18th levels.",
        levelGained: 12,
      },
      {
        name: 'Shadow Door',
        description: "You can take any part of your movement through shadows, teleporting to another location within 60 feet as dimension door. This ability cannot be used in brightly lit areas. You can teleport 10 feet per class level in total per day.",
        levelGained: 16,
      },
      {
        name: 'Shadow Warrior',
        description: "You can see perfectly in both natural and magical darkness. Whenever you deal hit point damage with a spell or attack, you also deal 2 points of Strength damage to each creature that took damage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'ray of enfeeblement', // 7th
      'darkvision',          // 10th
      'deeper darkness',     // 13th
      'shadow conjuration',  // 16th
    ],
    bonusFeats: [
      'Blind-Fight',
      'Combat Reflexes',
      'Improved Initiative',
      'Lightning Reflexes',
      'Quick Draw',
      'Step Up',
    ],
    source: 'pf1e-ppc-bos',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-shapechanger',
    name: 'Shapechanger',
    classIds: ['bloodrager'],
    description: "The blood of doppelgangers, faceless stalkers, lycanthropes, or other shapechangers courses through your veins.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Shifting Aspect',
        description: "During a bloodrage, you gain the benefits of the Aspect of the Beast feat, selecting one manifestation per bloodrage.",
        levelGained: 1,
      },
      {
        name: 'Spontaneous Change',
        description: "While bloodraging, you can cast transmutation spells that affect only yourself as a swift action. The spell lasts for the duration of your bloodrage.",
        levelGained: 4,
      },
      {
        name: 'Evolving Aspect',
        description: "You gain the Aspect of the Beast feat as a bonus feat; select one manifestation permanently. You may select a second manifestation while bloodraging.",
        levelGained: 8,
      },
      {
        name: 'Beastskin',
        description: "Your damage reduction increases by 2 while bloodraging, and this additional DR is bypassed by silver. Your natural attacks are treated as silver for the purpose of overcoming damage reduction.",
        levelGained: 12,
      },
      {
        name: 'Shed Skin',
        description: "When your bloodrage ends, you can immediately attempt to dispel one spell or spell-like ability affecting you as an immediate action.",
        levelGained: 16,
      },
      {
        name: 'True Shapechanger',
        description: "You become immune to transmutation spells and effects unless you choose to be affected. You can cast greater polymorph at will, but only to affect yourself.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'enlarge person', // 7th
      'alter self',     // 10th
      'fly',            // 13th
      'stoneskin',      // 16th
    ],
    bonusFeats: [
      'Dodge',
      'Fleet',
      'Improved Initiative',
      'Improved Unarmed Strike',
      'Lightning Reflexes',
      'Power Attack',
      'Weapon Focus',
    ],
    source: 'pf1e-ppc-lfw',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-sphinx',
    name: 'Sphinx',
    classIds: ['bloodrager'],
    description: "Your lineage traces to those who traded riddles with ancient sphinxes, and you carry their blend of arcane power and violent fury. Though typically scholarly, you become terrifying when bloodraging.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Claws',
        description: "You grow claws that function as natural weapons dealing 1d6 damage (1d4 if Small). At 4th level they are treated as magic weapons. At 8th level damage increases to 1d8 (1d6 if Small). At 12th level your claws have a threat range of 19-20.",
        levelGained: 1,
      },
      {
        name: 'Roar',
        description: "As a standard action, usable 3 + Charisma modifier times per day, enemies within 60 feet must succeed at a Will save or become frightened for 1d6 rounds. At 10th level you can instead cause panic, stunning, and deafness. At 16th level you can cause paralysis for 1 round.",
        levelGained: 4,
      },
      {
        name: 'Desert Fortitude',
        description: "You gain resistance 5 to electricity and fire, a constant endure elements effect, and a +2 competence bonus on saving throws against arcane spells. At 16th level the resistances increase to 10.",
        levelGained: 8,
      },
      {
        name: 'Rending Rage',
        description: "You gain a rend attack that deals 2d4 + 1-1/2x your Strength modifier extra damage when you hit with both claws. At 18th level this increases to 2d6 + 1-1/2x Strength modifier.",
        levelGained: 12,
      },
      {
        name: 'Master of Mysteries',
        description: "Once per day, you can cast maze or symbol of insanity as a spell-like ability. You gain spell resistance equal to 11 + your bloodrager level.",
        levelGained: 16,
      },
      {
        name: 'Final Riddle',
        description: "You gain immunity to fire and electricity, ignore environmental temperature penalties, and gain a +6 competence bonus on saving throws against arcane spells. These benefits apply constantly, even outside of bloodrage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'divine favor',     // 7th
      'touch of idiocy',  // 10th
      'searing light',    // 13th
      'bestow curse',     // 16th
    ],
    bonusFeats: [
      'Alertness',
      'Combat Casting',
      'Dazzling Display',
      'Improved Critical',
      'Iron Will',
      'Rending Fury',
      'Skill Focus (Intimidate)',
      'Voice of the Sibyl',
    ],
    source: 'pf1e-ppc-hog',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-undead',
    name: 'Undead',
    classIds: ['bloodrager'],
    description: "The taint of undeath runs in your family's veins. When you bloodrage, this manifests in frightening powers drawn from beyond the grave.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Frightful Charger',
        description: "When you charge, the target of your charge becomes shaken for a number of rounds equal to 1/2 your bloodrager level (minimum 1). This is a mind-affecting fear effect and cannot escalate an existing fear condition.",
        levelGained: 1,
      },
      {
        name: 'Ghost Strike',
        description: "Your melee attacks gain the ghost touch weapon property.",
        levelGained: 4,
      },
      {
        name: "Death's Gift",
        description: "You gain cold resistance 10 and DR 10/- against nonlethal damage.",
        levelGained: 8,
      },
      {
        name: 'Frightful Strikes',
        description: "Once per bloodrage as a swift action, your melee attacks are empowered with fear for 1 round: shaken creatures become frightened. At 16th level, frightened creatures become panicked.",
        levelGained: 12,
      },
      {
        name: 'Incorporeal Bloodrager',
        description: "Once per day, you can become incorporeal, taking half damage from corporeal magic sources and no damage from non-magic weapons. Your attacks function normally while incorporeal.",
        levelGained: 16,
      },
      {
        name: 'One Foot in the Grave',
        description: "You gain constant immunity to cold, nonlethal damage, paralysis, and sleep. Your DR increases to 8. Unintelligent undead ignore you unless you attack them. You gain a +4 morale bonus on saving throws against spells cast by undead.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'chill touch',    // 7th
      'false life',     // 10th
      'vampiric touch', // 13th
      'enervation',     // 16th
    ],
    bonusFeats: [
      'Diehard',
      'Dodge',
      'Endurance',
      'Intimidating Prowess',
      'Iron Will',
      'Mobility',
      'Toughness',
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-verdant',
    name: 'Verdant',
    classIds: ['bloodrager'],
    description: "Your body is suffused with raw plant life. When you bloodrage, your plantlike characteristics bolster your durability and grant you some control over vegetation.",
    bloodlineArcana: "",
    powers: [
      {
        name: 'Verdant Growth',
        description: "You gain fast healing 1 while bloodraging. This increases by 1 at 4th level and every 3 levels thereafter (maximum fast healing 6 at 19th level). This can stack with fast healing from other class features up to half the total, not exceeding your Charisma bonus.",
        levelGained: 1,
      },
      {
        name: 'Oaken Skin',
        description: "When entering a bloodrage, your skin thickens like bark and you gain a +2 enhancement bonus to your natural armor. This bonus increases by 1 at 8th level and every 4 levels thereafter.",
        levelGained: 4,
      },
      {
        name: 'Botanical Plasticity',
        description: "As a swift action, you can bend and twist the plant life within your body to elongate your limbs. Your reach increases by 5 feet until the end of your turn.",
        levelGained: 8,
      },
      {
        name: 'Verdant Call',
        description: "When entering a bloodrage, you can animate nearby plants as wilderness soldiers using your Charisma modifier. These animated plants last for the duration of the bloodrage.",
        levelGained: 12,
      },
      {
        name: "Nature's Thorns",
        description: "Creatures that hit you in melee take 4d6 points of piercing damage on the first successful attack per round.",
        levelGained: 16,
      },
      {
        name: 'Verdant Apotheosis',
        description: "You gain tremorsense 30 feet and immunity to paralysis, poison, sleep, and the stunned condition while bloodraging.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'entangle',         // 7th
      'greensight',       // 10th
      'burst of nettles', // 13th
      'command plants',   // 16th
    ],
    bonusFeats: [
      'Bolstered Resilience',
      'Diehard',
      'Endurance',
      'Great Fortitude',
      'Power Attack',
      'Raging Vitality',
      'Toughness',
    ],
    source: 'pf1e-uw',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'bloodrager-vestige',
    name: 'Vestige',
    classIds: ['bloodrager'],
    description: "You are the descendant of great heroes from a lost civilization. Their accumulated battle experience flows through your blood.",
    bloodlineArcana: "",
    powers: [
      {
        name: "Warrior's Discipline",
        description: "As a swift action, you can tap into untold generations of battle experience to control your fury, halving your morale bonuses to use Intelligence- or Charisma-based skills normally for 1 round.",
        levelGained: 1,
      },
      {
        name: 'Ancient Tactics',
        description: "Bonuses from battlefield positioning (flanking, cover) increase by 1 for you and nearby allies. You can expend spell slots to boost this further until your next turn.",
        levelGained: 4,
      },
      {
        name: 'Legacy Style',
        description: "You can use any style feat while bloodraging. If you do not meet a feat's prerequisites, you can spend a spell slot to use it for 1 round per spell level of the slot expended.",
        levelGained: 8,
      },
      {
        name: "War's Memory",
        description: "Once per day, you can manifest an illusion of an ancestor's bloody battlefield functioning as hallucinatory terrain, causing fear penalties and the shaken condition in affected creatures.",
        levelGained: 12,
      },
      {
        name: 'Legacy Conduit',
        description: "By expending a spell slot, you can share the benefits of a selected style feat with allies within 30 feet.",
        levelGained: 16,
      },
      {
        name: 'Call to Arms',
        description: "Once per day, you can summon a number of ghostly warrior ancestors equal to your Constitution modifier. These function as spiritual ally using your Strength modifier.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      'true strike',        // 7th
      'false life',         // 10th
      'phantom steed',      // 13th
      'mass enlarge person', // 16th
    ],
    bonusFeats: [
      'Combat Casting',
      'Exotic Weapon Proficiency',
      'Greater Weapon Focus',
      'Greater Weapon Specialization',
      'Iron Will',
      'Weapon Focus',
      'Weapon Specialization',
    ],
    source: 'pf1e-ppc-boa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
