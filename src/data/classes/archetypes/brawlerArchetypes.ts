import { ArchetypeData } from '../types';

export const BRAWLER_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Exemplar
  // ──────────────────────────────────────────────
  {
    name: 'Exemplar',
    className: 'Brawler',
    description:
      "The exemplar is a master of a single combat style, dedicating herself to perfecting one fighting technique above all others. She trades the brawler's flexibility for unmatched expertise in her chosen specialty, becoming a paragon of that particular form of combat.",
    replacedFeatures: ['Martial Flexibility', 'Knockout'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Shtick',
        level: 1,
        description:
          'An exemplar selects one shtick at 1st level: Grappler, Loner, Pummeler, or Wrestler. Each shtick grants a suite of combat abilities and bonus feats tied to that fighting style, replacing the varied benefits of martial flexibility with focused mastery.',
        effects: [],
      },
      {
        name: 'Shtick Ability',
        level: 2,
        description:
          'At 2nd level and every 4 levels thereafter, the exemplar gains an additional ability from her chosen shtick, deepening her mastery of the chosen fighting form.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 2. Mutagenic Brawler
  // ──────────────────────────────────────────────
  {
    name: 'Mutagenic Brawler',
    className: 'Brawler',
    description:
      "The mutagenic brawler combines the brawler's martial prowess with the alchemist's mutagenic science, using alchemical mutagens to temporarily enhance her physical abilities during combat. She sacrifices some combat flexibility to gain these powerful chemical enhancements.",
    replacedFeatures: ['Martial Flexibility', "Brawler's Strike (adamantine)"],
    modifiedFeatures: ["Brawler's Flurry"],
    newFeatures: [
      {
        name: 'Mutagen',
        level: 1,
        description:
          'A mutagenic brawler can prepare a mutagen that grants a +4 alchemical bonus to one physical ability score (Strength, Dexterity, or Constitution) while imposing a -2 penalty to the corresponding mental ability score. The mutagen lasts for 10 minutes per brawler level.',
        effects: [],
      },
      {
        name: 'Feral Mutagen',
        level: 5,
        description:
          'At 5th level, when the mutagenic brawler uses her mutagen, she also grows a pair of secondary claw attacks (1d6 damage for a Medium creature). These claws are treated as natural weapons.',
        effects: [],
      },
      {
        name: 'Greater Mutagen',
        level: 10,
        description:
          "At 10th level, the mutagenic brawler's mutagen improves to grant a +6 bonus to one physical ability score and a +4 bonus to a second physical ability score, while imposing -2 penalties to the corresponding mental scores.",
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 3. Snakebite Striker
  // ──────────────────────────────────────────────
  {
    name: 'Snakebite Striker',
    className: 'Brawler',
    description:
      "The snakebite striker fights with the cunning patience of a serpent, striking with sudden bursts of speed when her foes least expect it. She combines the brawler's unarmed power with a rogue-like ability to deal sudden precision damage.",
    replacedFeatures: ['Martial Training', 'Maneuver Training'],
    modifiedFeatures: ['Martial Flexibility'],
    newFeatures: [
      {
        name: 'Sneak Attack',
        level: 1,
        description:
          'A snakebite striker gains sneak attack as the rogue ability. At 1st level she deals +1d6 sneak attack damage, increasing by +1d6 at 3rd level and every 3 levels thereafter, to a maximum of +7d6 at 19th level.',
        effects: [],
      },
      {
        name: 'Surprise Attack',
        level: 2,
        description:
          'At 2nd level, the snakebite striker can spend 1 point of martial flexibility as a swift action to treat her target as flat-footed until the end of her turn, allowing her to apply sneak attack damage more reliably.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 4. Strangler
  // ──────────────────────────────────────────────
  {
    name: 'Strangler',
    className: 'Brawler',
    description:
      "The strangler specializes in the brutal art of choking and constricting foes into submission or death. She replaces many of the brawler's broad combat abilities with laser-focused grappling techniques designed to incapacitate or kill.",
    replacedFeatures: ["Brawler's Flurry", 'Knockout', 'Combat Maneuver Mastery'],
    modifiedFeatures: ['Maneuver Training'],
    newFeatures: [
      {
        name: 'Strangle',
        level: 2,
        description:
          'When a strangler successfully maintains a grapple, she can attempt to strangle her opponent as a standard action. A strangled creature cannot speak, cast spells with verbal components, or use breath weapons. The strangled condition lasts until the grapple ends.',
        effects: [],
      },
      {
        name: 'Chokehold',
        level: 4,
        description:
          'At 4th level, when the strangler successfully strangles an opponent, that opponent must succeed on a Fortitude save (DC 10 + 1/2 brawler level + Str modifier) or fall unconscious for 1d4 rounds.',
        effects: [],
      },
      {
        name: 'Kill',
        level: 8,
        description:
          'At 8th level, the strangler can attempt to kill a helpless or unconscious grappled foe by spending a full-round action. The target must succeed on a Fortitude save (DC 10 + 1/2 brawler level + Str modifier) or die.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 5. Steel-Breaker
  // ──────────────────────────────────────────────
  {
    name: 'Steel-Breaker',
    className: 'Brawler',
    description:
      "The steel-breaker trains to destroy her enemies' equipment, dismantling their weapons and armor rather than simply overpowering them. Her strikes carry tremendous force designed to shatter steel and render foes defenseless.",
    replacedFeatures: ['Martial Training', 'AC Bonus', 'Combat Maneuver Mastery'],
    modifiedFeatures: ["Brawler's Strike"],
    newFeatures: [
      {
        name: 'Sunder Training',
        level: 2,
        description:
          'A steel-breaker gains Improved Sunder as a bonus feat at 2nd level, even if she does not meet the prerequisites. She also gains a +2 bonus on combat maneuver checks made to sunder.',
        effects: [],
      },
      {
        name: 'Armor Crusher',
        level: 5,
        description:
          "At 5th level, the steel-breaker's unarmed strikes ignore 5 points of hardness when used to sunder objects. This increases to 10 points of hardness at 10th level and 15 points at 15th level.",
        effects: [],
      },
      {
        name: 'Disarming Strike',
        level: 8,
        description:
          'At 8th level, the steel-breaker can attempt a disarm or sunder combat maneuver as a free action whenever she hits an opponent with an unarmed strike, though she may only attempt one such maneuver per round.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 6. Thunder and Fang
  // ──────────────────────────────────────────────
  {
    name: 'Thunder and Fang',
    className: 'Brawler',
    description:
      'The thunder and fang fighter wields an earth breaker in one hand and a klar in the other, combining the crushing might of a great hammer with the slashing fury of a beast-hide shield. This archetype is the signature fighting style of Shoanti warriors who train to master this demanding dual-weapon technique.',
    replacedFeatures: ['Martial Training', 'Close Weapon Mastery', "Brawler's Strike"],
    modifiedFeatures: ['Martial Flexibility'],
    newFeatures: [
      {
        name: 'Thunder and Fang Style',
        level: 1,
        description:
          'A thunder and fang brawler can wield an earth breaker as a one-handed weapon and a klar as an off-hand weapon. She is automatically proficient with both weapons and treats them as melee weapons for all purposes related to brawler class features.',
        effects: [],
      },
      {
        name: 'Crushing Blow',
        level: 5,
        description:
          "At 5th level, when wielding an earth breaker, the thunder and fang brawler's strike causes the target to be staggered for 1 round on a failed Fortitude save (DC 10 + 1/2 brawler level + Str modifier).",
        effects: [],
      },
      {
        name: 'Devastating Combo',
        level: 11,
        description:
          'At 11th level, when the thunder and fang brawler hits the same opponent with both her earth breaker and klar in the same round, she deals an additional 2d6 damage and the target must succeed on a Fortitude save or be knocked prone.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Wild Child
  // ──────────────────────────────────────────────
  {
    name: 'Wild Child',
    className: 'Brawler',
    description:
      "The wild child was raised among animals or in the wilderness, developing a feral fighting instinct and a bond with animal companions. She trades some of the brawler's trained martial knowledge for a druidic connection to nature and beast.",
    replacedFeatures: ["Brawler's Cunning", 'Martial Training', 'Combat Maneuver Mastery'],
    modifiedFeatures: ['Martial Flexibility'],
    newFeatures: [
      {
        name: 'Feral Child',
        level: 1,
        description:
          'A wild child gains Handle Animal as a class skill and adds her brawler level to Handle Animal checks made to influence her animal companion.',
        effects: [],
      },
      {
        name: 'Animal Companion',
        level: 4,
        description:
          'At 4th level, a wild child gains an animal companion as a druid of her brawler level - 3. The animal companion follows the standard druid animal companion rules for advancement.',
        effects: [],
      },
      {
        name: 'Feral Combatant',
        level: 6,
        description:
          'At 6th level, the wild child can communicate with her animal companion telepathically at a range of 100 feet. She also gains a +2 bonus on attack rolls when she and her animal companion both threaten the same target.',
        effects: [],
      },
      {
        name: 'Pack Tactics',
        level: 10,
        description:
          'At 10th level, the wild child and her animal companion can flank the same target even if they are not on opposite sides, as long as both threaten the target.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 8. Turion's Disciples Veteran
  // ──────────────────────────────────────────────
  {
    name: "Turion's Disciples Veteran",
    className: 'Brawler',
    description:
      "A veteran of Turion's Disciples is a seasoned brawler who has honed her skills through years of organized underground fighting rings. She has traded some breadth of combat training for a deep familiarity with one-on-one fighting tactics and reading opponents.",
    replacedFeatures: ["Brawler's Cunning", 'Knockout'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Read Opponent',
        level: 2,
        description:
          "As a move action, the veteran can study one opponent she can see, making a Sense Motive check (DC 15 + opponent's level) to gain a +1 insight bonus on attack rolls and damage rolls against that opponent until the start of her next turn.",
        effects: [],
      },
      {
        name: 'Ring Experience',
        level: 4,
        description:
          'At 4th level, the veteran gains a +2 bonus to AC against attacks of opportunity and a +1 bonus on attack rolls against flat-footed opponents, reflecting her experience in controlled fighting environments.',
        effects: [],
      },
      {
        name: "Veteran's Instinct",
        level: 8,
        description:
          'At 8th level, the veteran is never caught flat-footed in one-on-one combat (when she has a single opponent threatening her). She also gains the ability to spend 1 use of martial flexibility to reroll any one attack roll per combat.',
        effects: [],
      },
    ],
    source: 'Pathfinder Society Primer',
  },

  // ──────────────────────────────────────────────
  // 9. Shield-Bearer
  // ──────────────────────────────────────────────
  {
    name: 'Shield-Bearer',
    className: 'Brawler',
    description:
      'The shield-bearer uses a shield as both weapon and armor, battering opponents with powerful shield bashes while protecting herself and her allies. She sacrifices some brawler flexibility to become a master of the shield as an offensive tool.',
    replacedFeatures: ['Close Weapon Mastery', 'Unarmed Strike (primary focus)'],
    modifiedFeatures: ["Brawler's Flurry", 'Martial Flexibility'],
    newFeatures: [
      {
        name: 'Shield Training',
        level: 1,
        description:
          'A shield-bearer treats shields as brawler weapons for all class features. She reduces the attack penalty from using a shield as a weapon by 1 (to a minimum of 0) and may use her brawler unarmed strike damage die for shield bash damage if it is higher.',
        effects: [],
      },
      {
        name: 'Shield Slam',
        level: 2,
        description:
          'At 2nd level, the shield-bearer gains Shield Slam as a bonus feat, even if she does not meet the prerequisites. Creatures struck by her shield bash must succeed a Fortitude save or be knocked back 5 feet.',
        effects: [],
      },
      {
        name: 'Improved Shield Bash',
        level: 5,
        description:
          'At 5th level, the shield-bearer gains Improved Shield Bash as a bonus feat and can retain her shield bonus to AC even when making shield bash attacks during a full-attack action.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 10. Venomfist
  // ──────────────────────────────────────────────
  {
    name: 'Venomfist',
    className: 'Brawler',
    description:
      'The venomfist has developed a unique fighting technique that infuses her unarmed strikes with alchemically-induced venom, poisoning foes with each blow. She gives up some brawler versatility for the ability to debilitate enemies with toxins.',
    replacedFeatures: ['Martial Training', "Brawler's Strike (silver, cold iron)"],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Venom',
        level: 3,
        description:
          'Three times per day, the venomfist can coat her unarmed strikes with a debilitating venom as a swift action. The venom deals 1d2 Constitution damage per round for 6 rounds (Fortitude DC 10 + 1/2 brawler level + Con modifier negates). This ability lasts for 1 minute.',
        effects: [],
      },
      {
        name: 'Poison Resistance',
        level: 5,
        description:
          'At 5th level, the venomfist gains a +4 bonus on saving throws against poison effects. At 8th level she becomes immune to poisons she herself can produce.',
        effects: [],
      },
      {
        name: 'Improved Venom',
        level: 9,
        description:
          'At 9th level, the venomfist can select from multiple venom types when activating her venom ability, choosing effects that target Strength, Dexterity, or Constitution ability damage.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Dirty Tactics Toolbox',
  },
];
