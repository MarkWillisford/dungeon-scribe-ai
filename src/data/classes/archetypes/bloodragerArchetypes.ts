import { ArchetypeData, ClassFeatureData } from '../types';

// Standard Bloodrager class features (for reference in replacedFeatures/modifiedFeatures):
// Bloodrage, Bloodline (and bloodline powers), Fast Movement, Uncanny Dodge,
// Blood Sanctuary, Improved Uncanny Dodge, Damage Reduction, Indomitable Will,
// Greater Bloodrage, Tireless Bloodrage, Mighty Bloodrage

export const BLOODRAGER_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Bloodrider
  // ──────────────────────────────────────────────
  {
    name: 'Bloodrider',
    className: 'Bloodrager',
    description:
      'The bloodrider charges across battlefields on a bloodline-infused mount, channeling his magical fury through the bond between rider and steed. He sacrifices some defensive bloodrager abilities to become a devastating mounted combatant whose mount benefits from his bloodline power.',
    replacedFeatures: ['Fast Movement', 'Blood Sanctuary'],
    modifiedFeatures: ['Bloodrage', 'Bloodline'],
    newFeatures: [
      {
        name: 'Bloodline-Bonded Mount',
        level: 1,
        description:
          "The bloodrider gains a bloodline-bonded mount, treating his bloodrager level as his paladin level for determining the mount's abilities. While bloodraging, both the bloodrider and his mount gain the benefits of his bloodline powers.",
      },
      {
        name: 'Mounted Bloodrage',
        level: 1,
        description:
          "When bloodraging while mounted, the bloodrider can transfer the benefit of his bloodline's 1st-level power to his mount instead of himself. He can also cast spells requiring a touch attack through his mount's natural attacks.",
      },
      {
        name: 'Charging Bloodrage',
        level: 4,
        description:
          "At 4th level, while bloodraging and mounted, the bloodrider adds his bloodline's bonus damage on charge attacks. His mount also benefits from his damage reduction while he is bloodraging and mounted.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 2. Crossblooded Rager
  // ──────────────────────────────────────────────
  {
    name: 'Crossblooded Rager',
    className: 'Bloodrager',
    description:
      'The crossblooded rager carries the taint of two different bloodlines, each warring within her for dominance. She gains access to powers and bonus spells from both bloodlines but suffers from mental instability due to the conflicting magical heritage.',
    replacedFeatures: ['Bloodline (single)'],
    modifiedFeatures: ['Bloodline', 'Bloodrage', 'Indomitable Will'],
    newFeatures: [
      {
        name: 'Two Bloodlines',
        level: 1,
        description:
          'The crossblooded rager selects two bloodrager bloodlines. At each level where she gains a bloodline power, she selects which of the two bloodlines provides that power. Bonus spells are drawn from whichever bloodline provides a spell at the lower level.',
      },
      {
        name: 'Conflicting Heritage',
        level: 1,
        description:
          "The crossblooded rager's will save bonus from bloodline powers is reduced by 2. Additionally, once per bloodrage, when she fails a Will save, she must act erratically for 1 round as determined by the GM, representing the mental strain of two bloodlines fighting for supremacy.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 3. Draconic Bloodrager
  // ──────────────────────────────────────────────
  {
    name: 'Draconic Bloodrager',
    className: 'Bloodrager',
    description:
      'Though all bloodragers can select the draconic bloodline, the draconic bloodrager archetype commits fully to dragonhood, accelerating her transformation into something more dragon than mortal. She replaces some standard bloodrager features with enhanced draconic manifestations.',
    replacedFeatures: ['Blood Sanctuary', 'Damage Reduction'],
    modifiedFeatures: ['Bloodline', 'Bloodrage'],
    newFeatures: [
      {
        name: 'Draconic Bloodline (Required)',
        level: 1,
        description:
          'The draconic bloodrager must select the draconic bloodline. Her draconic bloodline powers activate at 2 levels earlier than normal, and she grows draconic scales providing a +2 natural armor bonus that increases to +4 at 8th level and +6 at 16th level.',
      },
      {
        name: 'Breath Weapon',
        level: 4,
        description:
          "At 4th level, the draconic bloodrager can use her draconic bloodline's breath weapon while bloodraging as a swift action, spending 1 round of bloodrage. The damage dice increase by one step at 8th level and every 4 levels thereafter.",
      },
      {
        name: 'Dragon Form',
        level: 16,
        description:
          'At 16th level, while bloodraging, the draconic bloodrager can assume the form of a dragon (as per form of the dragon II) for a number of rounds per day equal to her bloodrager level.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 4. Id Rager
  // ──────────────────────────────────────────────
  {
    name: 'Id Rager',
    className: 'Bloodrager',
    description:
      "The id rager's bloodline power stems not from ancestral heritage but from the unbridled force of his own psyche, manifesting as psychic magic that erupts during his bloodrage. He replaces typical bloodline features with psychic powers that blur the line between emotion and arcane force.",
    replacedFeatures: ['Bloodline Spells', 'Blood Sanctuary'],
    modifiedFeatures: ['Bloodline', 'Bloodrage'],
    newFeatures: [
      {
        name: 'Emotional Focus',
        level: 1,
        description:
          'The id rager selects an emotional focus that defines his psychic power: anger, dedication, despair, fear, hatred, or jealousy. During bloodrage, he gains a +2 bonus on concentration checks and his spells ignore the verbal component requirement.',
      },
      {
        name: 'Psychic Bloodrage Spells',
        level: 4,
        description:
          'At 4th level, the id rager adds psychic spells to his bloodrager spell list based on his emotional focus. At 4th, 8th, 12th, and 16th levels he gains one additional spell known from the psychic class list of the same level as his highest available bloodrager spell slot.',
      },
      {
        name: 'Unleashed Psyche',
        level: 8,
        description:
          'At 8th level, when the id rager ends his bloodrage voluntarily, he can channel the psychic residue into a telekinetic burst, dealing 1d6 force damage per 2 bloodrager levels (Reflex half, DC 10 + half his level + his Constitution modifier) to all creatures within 30 feet.',
      },
    ],
    source: 'Pathfinder RPG: Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 5. Primalist
  // ──────────────────────────────────────────────
  {
    name: 'Primalist',
    className: 'Bloodrager',
    description:
      "The primalist taps into the primal rage shared by all bloodragers but expands her options by accessing the barbarian's rage powers, sacrificing some bloodline development to blend the two classes' abilities. She is a fierce hybrid who can take rage powers in place of bloodline powers.",
    replacedFeatures: [],
    modifiedFeatures: ['Bloodline'],
    newFeatures: [
      {
        name: 'Rage Powers',
        level: 4,
        description:
          'At 4th level, and at every 4 levels thereafter (8th, 12th, 16th, 20th), the primalist can choose to gain a rage power from the barbarian rage power list instead of her bloodline power. She uses her bloodrager level as her effective barbarian level for the purpose of prerequisites and effects.',
      },
      {
        name: 'Primal Synergy',
        level: 8,
        description:
          "At 8th level, the primalist's rage powers and bloodline powers work in concert. Once per bloodrage, she can activate a rage power as a free action without spending an action, provided she has already used that rage power normally this bloodrage.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 6. Reformed Fiend
  // ──────────────────────────────────────────────
  {
    name: 'Reformed Fiend',
    className: 'Bloodrager',
    description:
      'Bearing fiendish blood that she struggles to control and redirect toward good ends, the reformed fiend channels destructive dark power against evil rather than indulging it. She trades the broad protection of blood sanctuary for the ability to smite evil with her bloodline energy.',
    replacedFeatures: ['Blood Sanctuary', 'Indomitable Will'],
    modifiedFeatures: ['Bloodrage', 'Bloodline'],
    newFeatures: [
      {
        name: 'Against the Darkness',
        level: 1,
        description:
          'The reformed fiend must have the abyssal or infernal bloodline. While bloodraging, she gains a bonus on damage rolls against evil creatures equal to half her bloodrager level (minimum 1), and her attacks are treated as good-aligned for the purpose of overcoming damage reduction.',
      },
      {
        name: 'Resist Temptation',
        level: 2,
        description:
          'At 2nd level, the reformed fiend gains a +2 bonus on Will saves against compulsions and enchantments from evil sources. This bonus increases by 1 for every 4 levels beyond 2nd.',
      },
      {
        name: 'Purifying Bloodrage',
        level: 8,
        description:
          'At 8th level, once per bloodrage, the reformed fiend can spend 1 round of bloodrage as a swift action to add the holy weapon property to one weapon she wields for a number of rounds equal to her Constitution modifier.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Steelblood
  // ──────────────────────────────────────────────
  {
    name: 'Steelblood',
    className: 'Bloodrager',
    description:
      'The steelblood forsakes the wild uncontrolled fury of typical bloodragers, instead channeling magical energy into disciplined defensive fighting from behind heavy armor. He sacrifices speed and offense for near-invulnerability when fully equipped.',
    replacedFeatures: ['Fast Movement', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: ['Bloodrage'],
    newFeatures: [
      {
        name: 'Inured to Misfortune',
        level: 1,
        description:
          'The steelblood is proficient with heavy armor and tower shields. He can cast bloodrager spells while wearing heavy armor without arcane spell failure.',
      },
      {
        name: 'Blood Deflection',
        level: 2,
        description:
          'At 2nd level, while bloodraging, the steelblood can add his Constitution modifier as a deflection bonus to AC. This deflection bonus replaces the bonus he would gain from Dodge or a similar feat while bloodraging.',
      },
      {
        name: 'Fortified Bloodrage',
        level: 5,
        description:
          "At 5th level, the steelblood's armor gains the fortification property (25%) while he is bloodraging. This increases to moderate fortification (50%) at 11th level and heavy fortification (75%) at 17th level.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 8. Untouchable Rager
  // ──────────────────────────────────────────────
  {
    name: 'Untouchable Rager',
    className: 'Bloodrager',
    description:
      "The untouchable rager's blood burns so hot that spells and magical effects simply cannot take hold, making her an almost impenetrable foe for arcane and divine spellcasters. She sacrifices her own ability to be magically enhanced in exchange for extraordinary resistance to hostile magic.",
    replacedFeatures: ['Blood Sanctuary', 'Indomitable Will', 'Uncanny Dodge'],
    modifiedFeatures: ['Bloodrage'],
    newFeatures: [
      {
        name: 'Disruptive Bloodrage',
        level: 1,
        description:
          'While bloodraging, the untouchable rager gains spell resistance equal to 6 + her bloodrager level. This spell resistance applies to all spells, including beneficial ones cast by allies.',
      },
      {
        name: 'Rage Against Magic',
        level: 4,
        description:
          'At 4th level, while bloodraging, the untouchable rager gains a +4 bonus on saving throws against spells and spell-like abilities in addition to her normal bloodrage bonuses. She also gains Disruptive as a bonus feat.',
      },
      {
        name: 'Antimagic Fury',
        level: 12,
        description:
          'At 12th level, while bloodraging, if the untouchable rager successfully saves against a spell or spell-like ability that targets only her, she can immediately make a free attack against the caster as an immediate action if the caster is within her reach.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 9. Spelleater
  // ──────────────────────────────────────────────
  {
    name: 'Spelleater',
    className: 'Bloodrager',
    description:
      'The spelleater hungers for magical energy, consuming hostile spells and converting their power into vitality that fuels his bloodrage. He trades standard defensive features for the ability to devour magic itself and transform it into regenerative power.',
    replacedFeatures: ['Blood Sanctuary', 'Damage Reduction', 'Indomitable Will'],
    modifiedFeatures: ['Bloodrage'],
    newFeatures: [
      {
        name: 'Spell Eating',
        level: 1,
        description:
          "When the spelleater succeeds at a saving throw against a spell, he gains temporary hit points equal to the spell's level. These temporary hit points last for 1 minute and stack with other temporary hit points up to his bloodrager level.",
      },
      {
        name: 'Consume Magic',
        level: 4,
        description:
          'At 4th level, while bloodraging, the spelleater gains fast healing equal to half the spell level whenever he succeeds at a saving throw against a spell or spell-like ability. This fast healing lasts for 2 rounds.',
      },
      {
        name: 'Devour Spell',
        level: 8,
        description:
          'At 8th level, once per bloodrage as an immediate action, the spelleater can attempt to absorb a spell targeting him (spell level up to half his bloodrager level). If he succeeds on a caster level check (DC 11 + spell level), the spell is negated and he heals 1d8 hit points per spell level.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 10. Urban Bloodrager
  // ──────────────────────────────────────────────
  {
    name: 'Urban Bloodrager',
    className: 'Bloodrager',
    description:
      "The urban bloodrager controls and restrains the magical fury within, channeling it with precision rather than wild abandon. She retains her mental faculties during bloodrage, allowing her to make more calculated decisions, though her rage is less physically intense than a standard bloodrager's.",
    replacedFeatures: ['Fast Movement'],
    modifiedFeatures: ['Bloodrage'],
    newFeatures: [
      {
        name: 'Controlled Bloodrage',
        level: 1,
        description:
          'When the urban bloodrager enters a bloodrage, she does not gain the +4 morale bonus to Constitution but does not take the -2 penalty to AC. She can choose to add her bloodrage bonus to Intelligence or Wisdom rather than Strength or Dexterity.',
      },
      {
        name: 'Restrained Power',
        level: 1,
        description:
          'While in a controlled bloodrage, the urban bloodrager can use Charisma-, Dexterity-, and Intelligence-based skills, and she can use any ability that requires patience or concentration that a standard bloodrager cannot.',
      },
      {
        name: 'Focused Bloodline',
        level: 4,
        description:
          "At 4th level, the urban bloodrager can activate bloodline powers even outside of bloodrage by spending 1 round of bloodrage per round she uses the power, maintaining mental control while accessing her bloodline's magic.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 11. Greenrager
  // ──────────────────────────────────────────────
  {
    name: 'Greenrager',
    className: 'Bloodrager',
    description:
      'The greenrager draws power from the wild places of the world, channeling the primal fury of nature through her bloodrage. She forms a bond with the natural world that manifests as plant-like growths and nature-themed bloodline manifestations.',
    replacedFeatures: ['Blood Sanctuary', 'Damage Reduction'],
    modifiedFeatures: ['Bloodline', 'Bloodrage'],
    newFeatures: [
      {
        name: "Nature's Bloodrage",
        level: 1,
        description:
          'While bloodraging, the greenrager is considered to be under the effects of a pass without trace spell. Additionally, plants do not impede her movement while she is bloodraging, and difficult terrain from natural plant growth does not slow her.',
      },
      {
        name: 'Verdant Growth',
        level: 4,
        description:
          'At 4th level, while bloodraging, the greenrager can cause plants within 30 feet to grasp and entangle foes as a free action once per rage. This functions as an entangle spell (DC 10 + half her level + her Constitution modifier) lasting for 1d4 rounds.',
      },
      {
        name: 'Thorn Body',
        level: 8,
        description:
          'At 8th level, while bloodraging, the greenrager sprouts thorns from her skin. Any creature that strikes her with an unarmed attack or natural weapon takes 1d6 piercing damage + her Constitution modifier. She also gains a thorn melee attack dealing 1d4 piercing damage.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 12. Rageshaper
  // ──────────────────────────────────────────────
  {
    name: 'Rageshaper',
    className: 'Bloodrager',
    description:
      "The rageshaper's bloodrage transforms his body into a monstrous form that reflects his bloodline heritage, causing physical alterations that make him increasingly inhuman as his fury peaks. He sacrifices spellcasting for more powerful physical transformations.",
    replacedFeatures: ['Bloodrager Spells (all)'],
    modifiedFeatures: ['Bloodrage', 'Bloodline'],
    newFeatures: [
      {
        name: 'Shaping Bloodrage',
        level: 1,
        description:
          'When the rageshaper enters a bloodrage, he gains one bloodline-appropriate physical transformation (claws, fangs, scales, wings, etc.) determined by his bloodline, as if he had cast beast shape I on himself. The forms available improve as he levels.',
      },
      {
        name: 'Bestial Growth',
        level: 4,
        description:
          'At 4th level, the rageshaper gains a second physical transformation during bloodrage. At 8th level he gains a third, and at 12th level he gains a fourth. These stack with his bloodline powers.',
      },
      {
        name: 'Complete Transformation',
        level: 16,
        description:
          "At 16th level, the rageshaper can choose to fully transform into a creature appropriate to his bloodline (as per greater beast shape or a form appropriate to his bloodline's creature type) when entering bloodrage. This replaces his normal bloodrage bonuses for that rage.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },
];
