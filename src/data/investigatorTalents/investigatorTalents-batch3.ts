// Batch 3 | Sources: Magic Tactics Toolbox, Elemental Master's Handbook, Potions and Poisons,
//           Disciple's Doctrine, Adventurer's Guide, Spymaster's Handbook | count: 20
// InvestigatorTalentEntry = ClassOptionBase (base fields only)

import { type InvestigatorTalentEntry } from '@/types/classOptions';

export const investigatorTalentsBatch3: InvestigatorTalentEntry[] = [
  // ---- Magic Tactics Toolbox ----
  {
    id: 'investigator-talent-eldritch-conduit',
    name: 'Eldritch Conduit',
    description:
      'As a full-round action, an investigator with this talent can use two potions, two wands, or two scrolls simultaneously. Each item is expended normally, but the investigator gains the magical effect of one while calculating its effects using the caster level of the other. The investigator must still succeed at Use Magic Device checks for scrolls or wands unless another ability permits otherwise, making only one skill check for both items.',
    source: 'pf1e-ppc-mtt',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-just-a-face-in-the-crowd',
    name: 'Just a Face in the Crowd',
    description:
      'The investigator gains a bonus equal to half his class level on Disguise and Perception checks when 10 or more creatures of his size are within 30 feet of him.',
    source: 'pf1e-ppc-mtt',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-occult-dungeoneer',
    name: 'Occult Dungeoneer',
    description:
      'An investigator with this ability can use spell-trigger and spell-completion items as if the following spells were on an accessible spell list: detect secret doors, detect traps, knock, locate object, and obscure object. If the device allows applying a personal caster level (such as a staff), the investigator may use his class level as his caster level. Additionally, the investigator can use knock as a supernatural ability once per day, using his investigator level as his caster level.',
    source: 'pf1e-ppc-mtt',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-the-whole-time',
    name: 'The Whole Time',
    description:
      "An investigator with this ability can use spell-trigger and spell-completion items as if greater invisibility, invisibility, and vanish were on an accessible spell list. Additionally, if the investigator becomes visible as a result of making a weapon or spell attack, he can sheathe his weapon as a free action and adopt a neutral posture. With a successful Bluff or Disguise check (opposed by witnesses' Sense Motive or Perception), observers cannot obviously identify him as the source of the attack.",
    source: 'pf1e-ppc-mtt',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Elemental Master's Handbook ----
  {
    id: 'investigator-talent-castling',
    name: 'Castling',
    description:
      'The investigator treats soft cover granted by creatures of her size or larger as though it were cover instead. Cover gained from this talent does not allow Stealth check attempts.',
    source: 'pf1e-ppc-emh',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-extra-earthcraft',
    name: 'Extra Earthcraft',
    description:
      'The investigator gains 2 additional earthcraft points each day. The investigator must possess the earthcraft ability to select this talent.',
    prerequisites: [{ type: 'special', description: 'earthcraft ability' }],
    source: 'pf1e-ppc-emh',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-fortified-position',
    name: 'Fortified Position',
    description:
      'Whenever the investigator gains a bonus on Reflex saves due to cover, she gains an equal bonus on Fortitude saves as well.',
    source: 'pf1e-ppc-emh',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-unbalancing-trick',
    name: 'Unbalancing Trick',
    description:
      'The investigator gains Improved Trip as a bonus feat regardless of prerequisites. At 6th level, she is treated as meeting all prerequisites for Greater Trip (though she must take the feat normally to gain its benefits).',
    source: 'pf1e-ppc-emh',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Potions and Poisons ----
  {
    id: 'investigator-talent-anathema',
    name: 'Anathema',
    description:
      'When creating or preparing a poison (including those created through racial or class abilities), the investigator can spend one use of inspiration to create an anathema instead. Anathemas function as poisons but also affect creatures that are normally immune to poison by exploiting inherent vulnerabilities. The creator selects one creature type from the ranger favored enemy list and chooses one of the following special abilities to affect: damage reduction (except DR/--), energy resistance, fast healing, movement speed, or spell resistance. The delivery method and save DC match those of the component poison. If the target fails its save, the chosen ability value is reduced by 5 (minimum 0) for 1 round per investigator level.',
    source: 'pf1e-ppc-pp',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-greater-anathema',
    name: 'Greater Anathema',
    description:
      'The ability reduction granted by anathema increases to 10. The investigator also adds DR/-- and regeneration to the list of special abilities that can be affected. Additionally, when creating an anathema the investigator can designate a specific creature kind (such as vampires) within the chosen creature type; when the anathema is used against that specific kind, the save DC is 2 higher than the component poison. The investigator must possess the anathema talent to select this talent.',
    prerequisites: [{ type: 'special', description: 'anathema investigator talent' }],
    source: 'pf1e-ppc-pp',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-lingering-venom',
    name: 'Lingering Venom',
    description:
      'Requires 5th level investigator. Poisons that the investigator personally applies to weapons and traps, or otherwise inflicts upon foes, require one additional successful save to cure.',
    prerequisites: [{ type: 'level', minimum: 5, class: 'investigator' }],
    source: 'pf1e-ppc-pp',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Disciple's Doctrine ----
  {
    id: 'investigator-talent-numerical-alchemy',
    name: 'Numerical Alchemy',
    description:
      "The investigator's skill with mental mathematics allows him to know exactly which muscle movements are necessary to mix an extract in the quickest, most efficient way. The investigator can expend one use of inspiration to mix an extract in 1 round instead of the normal 1 minute.",
    source: 'pf1e-ppc-dd',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-greater-numerical-alchemy',
    name: 'Numerical Alchemy, Greater',
    description:
      'Requires 11th level investigator and the Numerical Alchemy talent. The investigator can calculate his movements and account for his reactions to danger or unexpected situations with lightning speed. He can expend one use of inspiration to mix an extract as a standard action.',
    prerequisites: [
      { type: 'level', minimum: 11, class: 'investigator' },
      { type: 'special', description: 'numerical alchemy investigator talent' },
    ],
    source: 'pf1e-ppc-dd',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-numerical-strike',
    name: 'Numerical Strike',
    description:
      'Requires 5th level investigator. Once per day when the investigator has confirmed a critical hit with a studied strike, he can deal average damage instead of rolling damage as normal. This includes the damage dealt by the successful attack as well as the additional damage from the studied strike. He can expend one use of inspiration to use this ability a second time per day. Using this ability does not require an action.',
    prerequisites: [{ type: 'level', minimum: 5, class: 'investigator' }],
    source: 'pf1e-ppc-dd',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-greater-numerical-strike',
    name: 'Numerical Strike, Greater',
    description:
      'Requires 13th level investigator and the Numerical Strike talent. Once per day when the investigator has confirmed a critical hit with a studied strike, he can deal maximum damage instead of rolling damage as normal. This includes the damage dealt by the successful attack as well as the additional damage from the studied strike. He can expend one use of inspiration to use this ability a second time per day. Using this ability does not require an action.',
    prerequisites: [
      { type: 'level', minimum: 13, class: 'investigator' },
      { type: 'special', description: 'numerical strike investigator talent' },
    ],
    source: 'pf1e-ppc-dd',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-masterful-numerical-strike',
    name: 'Numerical Strike, Masterful',
    description:
      'Requires 17th level investigator and the Numerical Strike and Numerical Strike, Greater talents. The investigator can use both numerical strike and greater numerical strike three times per day without expending uses of inspiration, but he can never use either ability more than three times per day each.',
    prerequisites: [
      { type: 'level', minimum: 17, class: 'investigator' },
      { type: 'special', description: 'numerical strike investigator talent' },
      {
        type: 'special',
        description: 'numerical strike greater investigator talent',
      },
    ],
    source: 'pf1e-ppc-dd',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Adventurer's Guide ----
  {
    id: 'investigator-talent-chroniclers-insight',
    name: "Chronicler's Insight",
    description:
      "The investigator can peruse a Pathfinder Chronicle as a standard action, applying its benefits as though he had studied it for the full 1d4 rounds. Upon studying a Pathfinder Chronicle, the investigator can expend one use of inspiration to apply the volume's benefits for a number of hours equal to his Intelligence modifier and gain an additional benefit based on the volume's associated Knowledge skill: Arcana/Nature/Planes/Religion -- the investigator's studied strike attacks overcome damage reduction as if the weapon had the appropriate property (adamantine for arcana, cold iron for nature, chaos/evil/good/law for planes, silver for religion), and he gains a +1 insight bonus on saving throws against creatures identifiable by that Knowledge skill; Dungeoneering -- the investigator can deal half his studied strike damage to creatures immune to sneak attacks; Engineering -- the investigator gains a circumstance bonus equal to one-third his level on inspiration-assisted Disable Device checks for locks and Perception checks for hidden compartments; Geography -- the investigator increases any bonuses to AC and Reflex saves from cover by 1; History -- the investigator can study a foe using studied combat a second time in 24 hours as a full-round action without expending inspiration; Local/Nobility -- the investigator gains a circumstance bonus equal to one-third his level on relevant Bluff, Diplomacy, and Intimidate checks when using inspiration. The investigator can have only one such ongoing benefit at a time; activating a new benefit ends the previous one.",
    source: 'pf1e-ppc-ag',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-didactic-strike',
    name: 'Didactic Strike',
    description:
      "When the investigator activates his studied strike, he can end his studied combat and choose not to deal his studied strike damage. He is instead able to show any allies within 30 feet who can see him a weak spot on the target. Until the beginning of the investigator's next turn, each affected ally's first attack that hits the target deals additional damage equal to one-third the investigator's level. He can end this effect as an immediate action to instead cause an affected ally's first successful attack to deal the investigator's full studied strike damage. This additional damage is precision damage and does not affect creatures that are immune to sneak attacks.",
    source: 'pf1e-ppc-ag',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ---- Spymaster's Handbook ----
  {
    id: 'investigator-talent-one-of-those-faces',
    name: 'One of Those Faces',
    description:
      'Each day, the investigator can use disguise self as a spell-like ability for up to 10 minutes per character level. This duration need not be continuous, but it must be used in 10-minute increments. Additionally, once the investigator has used this ability, whenever he uses it again for the next 24 hours he must take the same alternate appearance. The investigator must possess at least one of the following traits to select this talent: Brute, Failed Apprentice, Militia Veteran, Rapscallion, River Rat, Vagabond Child, Well-Informed, Narrows Survivor, or Wealthy Dabbler.',
    prerequisites: [
      {
        type: 'special',
        description:
          'must possess at least one of the following traits: Brute, Failed Apprentice, Militia Veteran, Rapscallion, River Rat, Vagabond Child, Well-Informed, Narrows Survivor, or Wealthy Dabbler',
      },
    ],
    source: 'pf1e-ppc-ssh',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'investigator-talent-scrying-familiarity',
    name: 'Scrying Familiarity',
    description:
      "The investigator is well acquainted with scrying sensors. He can roll twice and take the better result on saving throws against divination (scrying) spells and effects, on Perception checks to notice scrying sensors, and on caster level checks to overcome spell resistance when he uses a scrying spell or effect. If the investigator notices a magical sensor, he can attempt a Stealth check opposed by the caster's caster level check to avoid being detected by the sensor.",
    source: 'pf1e-ppc-ssh',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
