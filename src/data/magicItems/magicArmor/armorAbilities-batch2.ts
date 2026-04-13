import type { ItemSpecialAbility } from '@/types/magicItems';

// Ultimate Equipment armor special abilities, sorted by bonus equivalent then alphabetically.
export const armorAbilitiesBatch2: ItemSpecialAbility[] = [
  // +1 bonus equivalent
  {
    id: 'armor_brawling',
    name: 'Brawling',
    description: 'Grants the wearer a +2 competence bonus on unarmed attack rolls and grapple CMB checks. The wearer is also treated as having Improved Unarmed Strike for the purposes of feat prerequisites while wearing this armor.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },
  {
    id: 'armor_creeping',
    name: 'Creeping',
    description: 'Grants the wearer a +5 competence bonus on Stealth checks. Only effective while the wearer is wearing light armor.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.stealth', value: 5, source: 'Creeping Armor' },
    ],
  },
  {
    id: 'armor_dastard',
    name: 'Dastard',
    description: 'Grants a +2 profane bonus on attack rolls and damage rolls against creatures that are frightened, panicked, or cowering.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [],
  },
  {
    id: 'armor_deathless',
    name: 'Deathless',
    description: 'Grants the wearer a +2 sacred bonus on saving throws against death effects, negative energy damage, negative levels, and energy drain.',
    bonusEquivalent: 1, casterLevel: 10,
    effects: [
      { type: 'bonus', bonusType: 'sacred', target: 'save.fortitude', value: 2, source: 'Deathless Armor', condition: { type: 'custom', params: {}, description: 'vs. death effects, negative energy, and energy drain' } },
    ],
  },
  {
    id: 'armor_defiant',
    name: 'Defiant',
    description: 'Chosen at creation against a specific creature type (or subtype for humanoids/outsiders). Grants a +2 resistance bonus on saving throws and DR 2/— against attacks and effects from creatures of that type.',
    bonusEquivalent: 1, casterLevel: 8,
    effects: [],
  },
  {
    id: 'armor_expeditious',
    name: 'Expeditious',
    description: 'Grants an enhancement bonus of +5 feet to the wearer\'s base land speed. Only applicable to light armor.',
    bonusEquivalent: 1, casterLevel: 3,
    effects: [],
  },
  {
    id: 'armor_jousting',
    name: 'Jousting',
    description: 'Grants the wearer a +5 competence bonus on Ride checks. When the wearer charges while mounted, the mount gains an additional +5 feet of movement during that charge.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.ride', value: 5, source: 'Jousting Armor' },
    ],
  },
  {
    id: 'armor_mirrored',
    name: 'Mirrored',
    description: 'Grants a +5 circumstance bonus on saving throws against gaze attacks. Once per day as an immediate action, when targeted by a gaze attack, the wearer may reflect it back at its source (the originator must save against their own gaze attack).',
    bonusEquivalent: 1, casterLevel: 10,
    effects: [],
  },
  {
    id: 'armor_quenching',
    name: 'Quenching',
    description: 'Grants a +2 resistance bonus on saving throws against fire effects. Once per day, the wearer can extinguish all nonmagical fires within 20 feet as a standard action, or attempt to dispel one magical fire effect (CL 7 dispel check).',
    bonusEquivalent: 1, casterLevel: 7,
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.all', value: 2, source: 'Quenching Armor', condition: { type: 'custom', params: {}, description: 'vs. fire effects' } },
    ],
  },
  {
    id: 'armor_unrighteous',
    name: 'Unrighteous',
    description: 'Grants the wearer a +2 profane bonus on saving throws against divine spells and against spells and effects from good outsiders. The wearer radiates a faint evil aura as if they were an evil outsider of equivalent HD.',
    bonusEquivalent: 1, casterLevel: 5,
    effects: [
      { type: 'bonus', bonusType: 'profane', target: 'save.all', value: 2, source: 'Unrighteous Armor', condition: { type: 'custom', params: {}, description: 'vs. divine spells and good outsider effects' } },
    ],
  },

  // +2 bonus equivalent
  {
    id: 'armor_adhesive',
    name: 'Adhesive',
    description: 'Covered in a magical adhesive. Any creature that hits the wearer with a natural attack or unarmed strike must succeed at a DC 14 Reflex save or become stuck to the armor (as sovereign glue). A stuck creature can escape with a DC 20 Escape Artist check or by dealing 5 points of damage to itself.',
    bonusEquivalent: 2, casterLevel: 8,
    effects: [],
  },
  {
    id: 'armor_hosteling',
    name: 'Hosteling',
    description: 'As a full-round action, the wearer can store a single willing creature of up to Large size in a small extradimensional space within the armor. The stored creature is in suspended animation. The creature can be released as a free action adjacent to the wearer.',
    bonusEquivalent: 2, casterLevel: 9,
    effects: [],
  },
  {
    id: 'armor_righteous',
    name: 'Righteous',
    description: 'Grants the wearer a +2 sacred bonus on saving throws against evil spells and against spells and effects from evil outsiders. The wearer radiates a faint good aura as if they were a good outsider of equivalent HD. Evil characters who don this armor take 2 points of damage per round.',
    bonusEquivalent: 2, casterLevel: 9,
    effects: [
      { type: 'bonus', bonusType: 'sacred', target: 'save.all', value: 2, source: 'Righteous Armor', condition: { type: 'custom', params: {}, description: 'vs. evil spells and evil outsider effects' } },
    ],
  },

  // +3 bonus equivalent
  {
    id: 'armor_called',
    name: 'Called',
    description: 'As a swift action, the wearer can call the armor to themselves from up to 40 feet away. The armor flies through the air and dons itself on the wearer in an instant, requiring no action to put on. The wearer must have previously worn the armor.',
    bonusEquivalent: 3, casterLevel: 9,
    effects: [],
  },
  {
    id: 'armor_determination',
    name: 'Determination',
    description: 'Once per day, when the wearer is reduced to 0 or fewer hit points (but not killed outright), they automatically stabilize and immediately gain 2d8+10 temporary hit points. These temporary hit points last for 1 minute.',
    bonusEquivalent: 3, casterLevel: 10,
    effects: [],
  },

  // +5 bonus equivalent
  {
    id: 'armor_reflecting',
    name: 'Reflecting',
    description: 'Once per day as an immediate action, when the wearer is successfully targeted by a spell that allows a saving throw or requires an attack roll, they can reflect that spell back at the caster. The caster becomes the target and must save against their own spell.',
    bonusEquivalent: 5, casterLevel: 14,
    effects: [],
  },
];
