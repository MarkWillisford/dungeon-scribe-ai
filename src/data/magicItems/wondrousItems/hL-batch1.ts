import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsHL1: WondrousItemDefinition[] = [
  // ---- 1. Crystal Helm --------------------------------------------------------
  {
    id: 'wondrous-crystal-helm',
    name: 'Crystal Helm',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'head',

    price: 24000,
    weight: 3,

    description:
      'This transparent, spherical helm resembles an inverted bowl. Donning or removing it requires ' +
      'a standard action due to an invisible magical film sealing the opening. When placed on land, ' +
      'it fills with salt water; underwater, it fills with air. The wearer can breathe normally so ' +
      'long as they can respire in water or air respectively. The contents continuously replenish ' +
      'without leaking.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['air breathing', 'water breathing'],
      cost: 12000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.crystal_helm_breathing',
        value: 0,
        source: 'Crystal Helm',
      },
    ],
  },

  // ---- 2. Halo of Inner Calm --------------------------------------------------
  {
    id: 'wondrous-halo-of-inner-calm',
    name: 'Halo of Inner Calm',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 15,
    slot: 'head',

    price: 16000,
    weight: 1,

    description:
      'This silvery headpiece resembles a halo. When worn by a tiefling, it hovers above the head ' +
      'while occupying the head magic item slot. It grants a +4 resistance bonus on saving throws ' +
      'against all spells with the emotion descriptor. When worn by a good-aligned tiefling, it ' +
      'also grants spell resistance 13 against spells with the evil descriptor, and a +2 sacred ' +
      'bonus on all saving throws.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['holy aura'],
      specialRequirements: ['Creator must be a good-aligned tiefling'],
      cost: 8000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 4,
        source: 'Halo of Inner Calm',
        condition: {
          type: 'custom',
          params: { descriptor: 'emotion' },
          description: 'against spells with the emotion descriptor only',
        },
      },
      {
        type: 'special',
        target: 'special.spell_resistance',
        value: 13,
        source: 'Halo of Inner Calm',
        condition: {
          type: 'custom',
          params: { descriptor: 'evil', alignment: 'good', raceRestriction: 'tiefling' },
          description: 'SR 13 against evil descriptor spells; good-aligned tiefling wearer only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'sacred',
        target: 'save.all',
        value: 2,
        source: 'Halo of Inner Calm',
        condition: {
          type: 'custom',
          params: { alignment: 'good', raceRestriction: 'tiefling' },
          description: 'good-aligned tiefling wearer only',
        },
      },
    ],
  },

  // ---- 3. Halo of Menace ------------------------------------------------------
  {
    id: 'wondrous-halo-of-menace',
    name: 'Halo of Menace',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9,
    slot: 'head',

    price: 84000,
    weight: 1,

    description:
      'This floating steel halo is worn on the head and creates a 20-foot-radius aura affecting ' +
      'hostile creatures within range. Those creatures must succeed at a DC 20 Will save or suffer ' +
      'a -2 penalty on attack rolls, saving throws, and AC for 24 hours or until they successfully ' +
      'hit the wearer or damage it with a spell or supernatural ability. Chaotic creatures take a ' +
      '-2 penalty on the saving throw. Once a creature resists or breaks the effect, it cannot be ' +
      'affected by the same halo for 24 hours. This is a mind-affecting effect.',

    construction: {
      feats: ['Craft Wondrous Item', "Order's Wrath"],
      spells: [],
      specialRequirements: ['Creator must be an aasimar or archon'],
      cost: 42000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.halo_of_menace_aura',
        value: 0,
        source: 'Halo of Menace',
      },
    ],
  },

  // ---- 4. Hand of Glory -------------------------------------------------------
  {
    id: 'wondrous-hand-of-glory',
    name: 'Hand of Glory',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.UNIVERSAL }],
    casterLevel: 5,
    slot: 'neck',

    price: 8000,
    weight: 2,

    description:
      'This mummified human hand is worn as a necklace. A single magic ring placed on one of its ' +
      'fingers grants its benefits to the wearer without counting against the standard two-ring ' +
      'limit. The hand also grants the wearer the ability to cast daylight and see invisibility ' +
      'once per day each, independent of any ring worn on it.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate dead', 'daylight', 'see invisibility'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.hand_of_glory_ring_slot',
        value: 0,
        source: 'Hand of Glory',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'daylight',
            spellName: 'Daylight',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'see_invisibility',
            spellName: 'See Invisibility',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 5. Hand of Hoarded Deaths ----------------------------------------------
  {
    id: 'wondrous-hand-of-hoarded-deaths',
    name: 'Hand of Hoarded Deaths',
    category: 'wondrous',
    source: 'Champions of Corruption',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'hands',

    price: 25000,
    weight: 0,

    description:
      'This black silk glove allows the wearer to cast death knell at will. Rather than gaining ' +
      'immediate benefits, the wearer stores the siphoned life energy within the glove, which can ' +
      'hold up to five deaths indefinitely. The wearer activates stored deaths by touching herself ' +
      'with the glove as a swift action, granting death knell\'s benefits for 10 minutes. Multiple ' +
      'deaths can be spent simultaneously; temporary hit points stack, but ability bonuses do not. ' +
      'Combined durations add together when multiple deaths are used at once.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['death knell', 'false life'],
      cost: 12500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.hand_hoarded_deaths_storage',
        value: 0,
        source: 'Hand of Hoarded Deaths',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'death_knell',
            spellName: 'Death Knell',
            casterLevel: 7,
            usesPerDay: 0,
            saveDC: 13,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 6. Hand of Stone -------------------------------------------------------
  {
    id: 'wondrous-hand-of-stone',
    name: 'Hand of Stone',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'neck',

    price: 27000,
    weight: 2,

    description:
      'This mummified stone hand is worn around the neck. The wearer can sense creatures and objects ' +
      'that are in contact with earth or stone within 30 feet. To use this ability, the wearer must ' +
      'spend a standard action concentrating on the hand; the tremorsense lasts until the start of ' +
      'the wearer\'s next turn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['clairaudience/clairvoyance'],
      cost: 13500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.tremorsense_30ft',
        value: 30,
        source: 'Hand of Stone',
      },
    ],
  },

  // ---- 7. Hand of the Mage ----------------------------------------------------
  {
    id: 'wondrous-hand-of-the-mage',
    name: 'Hand of the Mage',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 2,
    slot: 'neck',

    price: 900,
    weight: 2,

    description:
      'This mummified elf hand is suspended by a golden chain worn around the neck, occupying the ' +
      'neck magic item slot. The wearer gains the ability to utilize the spell mage hand at will.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage hand'],
      cost: 450,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'mage_hand',
            spellName: 'Mage Hand',
            casterLevel: 2,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 8. Handkerchief of Finding ---------------------------------------------
  {
    id: 'wondrous-handkerchief-of-finding',
    name: 'Handkerchief of Finding',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',

    price: 15000,
    weight: 0,

    description:
      'This perfumed white handkerchief must be carried for one week to attune to the bearer. The ' +
      'bearer must be aware of the item\'s magical properties to attune successfully. Once attuned, ' +
      'the bearer always knows the direction to the handkerchief as long as both are on the same plane.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['locate object'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.handkerchief_direction_sense',
        value: 0,
        source: 'Handkerchief of Finding',
      },
    ],
  },

  // ---- 9. Handstraps of Roofjumping -------------------------------------------
  {
    id: 'wondrous-handstraps-of-roofjumping',
    name: 'Handstraps of Roofjumping',
    category: 'wondrous',
    source: "Legacy of Fire Player's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 1500,
    weight: 0,

    description:
      'These cloth strips feature urban embroidery and function like hand wraps. When donned, they ' +
      'provide a +1 competence bonus to Acrobatics checks and a +1 competence bonus on Reflex saves ' +
      'made to catch a ledge or arrest a fall.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace", 'jump'],
      cost: 750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 1,
        source: 'Handstraps of Roofjumping',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'save.reflex',
        value: 1,
        source: 'Handstraps of Roofjumping',
        condition: {
          type: 'custom',
          params: { situation: 'catch_ledge_or_arrest_fall' },
          description: 'to catch a ledge or arrest a fall only',
        },
      },
    ],
  },

  // ---- 10. Harness of Grabbing Vines ------------------------------------------
  {
    id: 'wondrous-harness-of-grabbing-vines',
    name: 'Harness of Grabbing Vines',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'body',

    price: 40000,
    weight: 1,

    description:
      'This magical harness allows winged wearers to use their wings as additional limbs for ' +
      'manipulation and grappling when grounded, enabling combat maneuvers and object handling ' +
      'without using hands. Upon activation, vine-like roots anchor the wearer in place, permitting ' +
      'climbing via legs and wings at a reduced speed while gaining the benefits of anchored step.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['anchored step', 'spider climb'],
      cost: 20000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 14,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.harness_grabbing_vines_wing_limbs',
        value: 0,
        source: 'Harness of Grabbing Vines',
      },
      {
        type: 'special',
        target: 'special.harness_grabbing_vines_anchor',
        value: 0,
        source: 'Harness of Grabbing Vines',
      },
    ],
  },

  // ---- 11. Harness of Hovering ------------------------------------------------
  {
    id: 'wondrous-harness-of-hovering',
    name: 'Harness of Hovering',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'body',

    price: 12000,
    weight: 1,

    description:
      'This leather harness with silver fixtures enables the wearer to remain suspended in the air ' +
      'without needing wings. Activating or deactivating the effect requires pulling the harness as ' +
      'a swift action, which triggers a levitate spell on the wearer. Notably, the levitate effect ' +
      'cannot move the wearer vertically in either direction.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['levitate'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 14,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.levitate_stationary',
        value: 0,
        source: 'Harness of Hovering',
      },
    ],
  },

  // ---- 12. Harness, Eidolon Anchoring -----------------------------------------
  {
    id: 'wondrous-harness-eidolon-anchoring',
    name: 'Harness, Eidolon Anchoring',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'body',

    price: 6000,
    weight: 1,

    description:
      'This ornate leather harness features loadstone studs along its straps. When an eidolon wears ' +
      'it, the harness anchors the outsider to its current plane. When the eidolon would otherwise ' +
      'be forced to return to its home plane (due to falling to negative hit points or its summoner ' +
      'becoming unconscious), it can expend a use of its summoner\'s summon monster spell-like ' +
      'ability as a free action to remain on the Material Plane for 1 additional round. The summoner ' +
      'need not be conscious but must be within 100 feet; a conscious summoner can refuse the ' +
      'expenditure. If the triggering condition persists after 1 round, the eidolon may expend ' +
      'another use or return to its home plane.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dimensional anchor'],
      cost: 3000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 14,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.eidolon_anchoring',
        value: 0,
        source: 'Harness, Eidolon Anchoring',
      },
    ],
  },

  // ---- 13. Harp of Charming ---------------------------------------------------
  {
    id: 'wondrous-harp-of-charming',
    name: 'Harp of Charming',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 7500,
    weight: 5,

    description:
      'This hand-held harp requires both hands to operate. When played, the performer can ' +
      'incorporate one suggestion effect into their music for every 10 minutes of performance, ' +
      'provided they succeed on a DC 14 Perform (string instruments) check. A failed check ' +
      'prevents the audience from being affected by that harpist\'s performances for 24 hours. ' +
      'The suggestion carries a Will save DC of 14 to resist.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['suggestion'],
      cost: 3750,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.harp_charming_suggestion',
        value: 0,
        source: 'Harp of Charming',
      },
    ],
  },

  // ---- 14. Harp of Contagion --------------------------------------------------
  {
    id: 'wondrous-harp-of-contagion',
    name: 'Harp of Contagion',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'none',

    price: 13000,
    weight: 5,

    description:
      'A wooden harp carved with venomous creature imagery. Once per day, the player can target a ' +
      'single opponent with a poison effect (DC 16 Fortitude). The harp also grants allies within ' +
      '30 feet a +2 resistance bonus on saves against disease and poison while the player maintains ' +
      'a standard action each round. Bards with the countersong bardic performance ability may ' +
      'expend bardic performance rounds to redirect their countersong against disease and poison ' +
      'instead of sonic or language-dependent effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['poison', 'resistance'],
      cost: 6500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 2,
        source: 'Harp of Contagion',
        condition: {
          type: 'custom',
          params: { against: 'disease_and_poison' },
          description: 'allies within 30 feet against disease and poison while actively playing',
        },
      },
      {
        type: 'special',
        target: 'special.harp_contagion_countersong',
        value: 0,
        source: 'Harp of Contagion',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'poison',
            spellName: 'Poison',
            casterLevel: 7,
            usesPerDay: 1,
            saveDC: 16,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 15. Harp of Shattering -------------------------------------------------
  {
    id: 'wondrous-harp-of-shattering',
    name: 'Harp of Shattering',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',

    price: 8000,
    weight: 5,

    description:
      'This finely crafted masterwork harp fits comfortably in one hand but requires two hands to ' +
      'play. It contains 10 charges that restore each dawn. By succeeding at a DC 10 Perform ' +
      '(string) check, the user can expend charges to cast break (1 charge) or shatter (2 charges).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['break', 'shatter'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 10, rechargeMethod: 'Recharges all 10 charges each dawn' },

    effects: [
      {
        type: 'special',
        target: 'special.harp_shattering_charges',
        value: 0,
        source: 'Harp of Shattering',
      },
    ],
  },

  // ---- 16. Harp of Slumber ----------------------------------------------------
  {
    id: 'wondrous-harp-of-slumber',
    name: 'Harp of Slumber',
    category: 'wondrous',
    source: 'Mythic Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 37500,
    weight: 5,

    description:
      'This pale white harp is crafted from solid glass. Plucking a single string produces a ' +
      'lullaby effect at will. Up to 3 times per day, strumming creates a sleep effect; succeeding ' +
      'on a DC 13 Perform (string instruments) check upgrades this to a deep slumber effect instead. ' +
      'All effects have a DC increased by 2 against giants. A mythic user can expend one use of ' +
      'mythic power when strumming to cast mythic sleep or mythic deep slumber (with a successful ' +
      'DC 13 Perform check) instead.',

    construction: {
      feats: ['Craft Wondrous Item', 'Mythic Crafter'],
      spells: ['deep slumber', 'lullaby', 'sleep'],
      cost: 18250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.harp_slumber_effects',
        value: 0,
        source: 'Harp of Slumber',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'lullaby',
            spellName: 'Lullaby',
            casterLevel: 5,
            usesPerDay: 0,
            activationAction: 'standard',
          },
          {
            spellId: 'sleep',
            spellName: 'Sleep',
            casterLevel: 5,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 17. Harp of Storms -----------------------------------------------------
  {
    id: 'wondrous-harp-of-storms',
    name: 'Harp of Storms',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 22000,
    weight: 2,

    description:
      'This whale-ivory harp features gold filigree depicting winds and clouds. Three times per day ' +
      'as a standard action, the player can create a wind cloak aura providing a 20% miss chance ' +
      'against all ranged attacks for 1 minute. As a move action (or swift action with a successful ' +
      'DC 15 Perform check), the harp grants an air walk effect for 1 round. The player can also ' +
      'cast gust of wind as a standard action. Additionally, a successful Perform (strings) check ' +
      'as a standard action deals electricity damage equal to the check result to a target within ' +
      '30 feet (DC 15 Reflex save halves).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['air walk', 'call lightning', 'gust of wind'],
      cost: 11000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.harp_storms_wind_cloak',
        value: 0,
        source: 'Harp of Storms',
      },
      {
        type: 'special',
        target: 'special.harp_storms_lightning',
        value: 0,
        source: 'Harp of Storms',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'air_walk',
            spellName: 'Air Walk',
            casterLevel: 7,
            usesPerDay: 3,
            activationAction: 'move',
          },
          {
            spellId: 'gust_of_wind',
            spellName: 'Gust of Wind',
            casterLevel: 7,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 18. Harp, Doomharp -----------------------------------------------------
  {
    id: 'wondrous-harp-doomharp',
    name: 'Harp, Doomharp',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 4,
    slot: 'none',

    price: 10000,
    weight: 5,

    description:
      'This masterwork instrument is crafted from bone and sun-dried sinew, creating a vague sense ' +
      'of unease in anyone near it. Any character with the bardic performance class feature can use ' +
      'it to perform a dirge of doom regardless of bard level. Bards who already possess the dirge ' +
      'of doom ability and use this harp extend the effect\'s radius to 60 feet instead of the ' +
      'standard distance.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cause fear'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.doomharp_dirge_of_doom',
        value: 0,
        source: 'Harp, Doomharp',
      },
      {
        type: 'special',
        target: 'special.doomharp_extended_radius',
        value: 60,
        source: 'Harp, Doomharp',
        condition: {
          type: 'custom',
          params: { classFeature: 'dirge_of_doom' },
          description: 'bards who already possess dirge of doom only',
        },
      },
    ],
  },

  // ---- 19. Harrow Deck of Secret Schemes --------------------------------------
  {
    id: 'wondrous-harrow-deck-of-secret-schemes',
    name: 'Harrow Deck of Secret Schemes',
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'none',

    price: 34400,
    weight: 0,

    description:
      'This specialized harrow deck contains 54 standard cards plus six additional trump cards. ' +
      'The user can distribute trump cards to willing recipients to establish covert communication ' +
      'channels. By performing a 10-minute variant harrowing, the user can learn the name of the ' +
      'most recent spell or magic item used to divine information about the trump card\'s recipient, ' +
      'or learn the content of messages sent concerning the recipient within 1 mile. Once per day, ' +
      'a command word reveals this divination information along with identifying features of the ' +
      'caster or item user (DC 16 Will save negates). A card recipient can send up to 25 words by ' +
      'tearing the card as a standard action; the next harrowing reveals this message instead. ' +
      'Once all six trump cards are destroyed, the deck becomes non-magical.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect scrying', 'sending'],
      cost: 16200,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 6, rechargeMethod: 'Does not recharge; each trump card is a one-use charge' },

    effects: [
      {
        type: 'special',
        target: 'special.harrow_deck_trump_cards',
        value: 0,
        source: 'Harrow Deck of Secret Schemes',
      },
    ],
  },

  // ---- 20. Harvester's Bindings -----------------------------------------------
  {
    id: 'wondrous-harvesters-bindings',
    name: "Harvester's Bindings",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 5,
    slot: 'wrists',

    price: 8500,
    weight: 0,

    description:
      'Bronze bracers featuring an elaborate crisscross pattern on their exterior with six barbs ' +
      'lining the interior. They grant a +2 circumstance bonus on Fortitude saves against venomous ' +
      'creature poisons. When the wearer fails a save against venomous poison, speaking the command ' +
      'word triggers the barbs to pierce the skin and extract the toxin as a standard action. The ' +
      'venom can then be transferred to an empty vial while the bracers glow (lasting 1 minute). ' +
      'Extracted poison remains viable for up to 1 hour. Only one poison dose can be stored; ' +
      'attempting to siphon while already holding a dose causes that stored poison to affect the ' +
      'wearer instead.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['drain poison', 'neutralize poison'],
      cost: 4250,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'save.fortitude',
        value: 2,
        source: "Harvester's Bindings",
        condition: {
          type: 'custom',
          params: { against: 'venomous_creature_poison' },
          description: 'against venomous creature poisons only',
        },
      },
      {
        type: 'special',
        target: 'special.harvesters_bindings_siphon',
        value: 0,
        source: "Harvester's Bindings",
      },
    ],
  },

  // ---- 21. Hat of Disguise ----------------------------------------------------
  {
    id: 'wondrous-hat-of-disguise',
    name: 'Hat of Disguise',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 1,
    slot: 'head',

    price: 1800,
    weight: 0,

    description:
      'This headwear enables the wearer to modify their physical appearance as with the disguise ' +
      'self spell. The hat itself becomes part of the transformation and can assume various ' +
      'headwear forms (comb, ribbon, headband, cap, coif, hood, helmet, etc.) as appropriate ' +
      'to the disguise.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['disguise self'],
      cost: 900,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'disguise_self',
            spellName: 'Disguise Self',
            casterLevel: 1,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 21b. Hat of Disguise, Greater (variant) --------------------------------
  {
    id: 'wondrous-hat-of-disguise-greater',
    name: 'Hat of Disguise, Greater',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'head',

    price: 12000,
    weight: 0,

    description:
      'This enhanced version of the hat of disguise functions as the alter self spell rather than ' +
      'disguise self, allowing more comprehensive physical transformations including changing size ' +
      'category (within limits) and gaining physical qualities of the assumed form. The hat ' +
      'integrates into the disguise effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alter self'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'alter_self',
            spellName: 'Alter Self',
            casterLevel: 3,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 22. Hat of Human Guise -------------------------------------------------
  {
    id: 'wondrous-hat-of-human-guise',
    name: 'Hat of Human Guise',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'head',

    price: 800,
    weight: 0,

    description:
      'This hat allows the wearer to alter her appearance as with a disguise self spell, except she ' +
      'can only appear as a plainly dressed Small human child, adult halfling, or adult gnome. The ' +
      'wearer may make minor adjustments to the hat\'s appearance as part of the disguise, but must ' +
      'maintain an unremarkable, everyday appearance — no nobles or distinctive individuals.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['disguise self'],
      cost: 400,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'disguise_self',
            spellName: 'Disguise Self',
            casterLevel: 3,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 23. Hat of Infinite Disguises ------------------------------------------
  {
    id: 'wondrous-hat-of-infinite-disguises',
    name: 'Hat of Infinite Disguises',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 11,
    slot: 'head',

    price: 25000,
    weight: 1,

    description:
      'An ornate, colorful hat decorated with cultural trinkets from many lands. The wearer can ' +
      'speak a command word to disguise themselves (following the veil spell mechanics, affecting ' +
      'only themselves) at will. A second command word dispels the disguise. The hat itself can be ' +
      'styled to match any appropriate headwear as part of the disguise.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['veil'],
      cost: 12500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'veil',
            spellName: 'Veil',
            casterLevel: 11,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 24. Hat, Investigator's ------------------------------------------------
  {
    id: 'wondrous-hat-investigators',
    name: "Hat, Investigator's",
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 8,
    slot: 'head',

    price: 7000,
    weight: 0,

    description:
      'A black deerstalker cap bearing an eye-like design. It grants a +2 competence bonus on ' +
      'Knowledge checks made to identify monsters. When an investigator uses inspiration to ' +
      'identify a nonhumanoid creature, the wearer can record the inspiration die result. Within ' +
      'one minute, the wearer may add this recorded result to an attack roll, skill check, or ' +
      'saving throw against that creature without spending inspiration. Only one result can be ' +
      'recorded at a time; recording a new result replaces the previous one.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['know the enemy'],
      cost: 3500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.knowledge',
        value: 2,
        source: "Hat, Investigator's",
        condition: {
          type: 'custom',
          params: { purpose: 'identify_monsters' },
          description: 'to identify monsters only',
        },
      },
      {
        type: 'special',
        target: 'special.investigators_hat_inspiration_record',
        value: 0,
        source: "Hat, Investigator's",
      },
    ],
  },

  // ---- 25. Hat, Magician's ----------------------------------------------------
  {
    id: 'wondrous-hat-magicians',
    name: "Hat, Magician's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'head',

    price: 20000,
    weight: 0,

    description:
      'A conical hat decorated with mystic symbols embroidered in gold thread. Three times per day ' +
      'as a free action when casting a prepared spell, the wearer can shift a metamagic feat between ' +
      'two prepared spells, provided the receiving spell does not exceed the original slot level. ' +
      'This ability does not increase casting time and provides no benefit to spontaneous casting ' +
      'or spell-like abilities.',

    construction: {
      feats: ['Craft Wondrous Item', 'Mnemonic Enhancer'],
      spells: [],
      cost: 10000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.magicians_hat_metamagic_shift',
        value: 3,
        source: "Hat, Magician's",
      },
    ],
  },
];
