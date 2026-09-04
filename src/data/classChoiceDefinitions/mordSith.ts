import { ClassChoiceDefinition, ClassChoiceOption } from '@/types/classChoices';
import { STYLE_FEATS } from '@/data/feats/styleFeats';
import { STYLE_FEATS_2 } from '@/data/feats/styleFeats2';
import { POW_STYLE_FEATS } from '@/data/feats/pow-style-feats';
import { POW_STYLE_FEATS_PART2 } from '@/data/feats/pow-style-feats-part2';
import { POW_STYLE_FEATS_PART3 } from '@/data/feats/pow-style-feats-part3';

// Sourced from the seeded feats collection. Picker does not gate by prereqs yet;
// the class waives trainable prereqs (BAB, ability scores, skill ranks, other feats)
// but not immutable ones (race, class abilities, gender, alignment). Real gating
// is a followup — see GH issue for the ClassChoice prereq engine.
const STYLE_FEAT_OPTIONS: ClassChoiceOption[] = [
  ...STYLE_FEATS,
  ...STYLE_FEATS_2,
  ...POW_STYLE_FEATS,
  ...POW_STYLE_FEATS_PART2,
  ...POW_STYLE_FEATS_PART3,
]
  .filter((f) => f.types.includes('style'))
  .map((f) => ({
    id: f.id,
    name: f.name,
    description: f.shortDescription ?? f.description.slice(0, 120),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const STYLE_STRIKES = [
  {
    id: 'elbow-smash',
    name: 'Elbow Smash',
    description: 'Target is staggered for 1 round on hit (Fort negates).',
  },
  {
    id: 'flying-kick',
    name: 'Flying Kick',
    description: 'Move up to speed as part of the style strike attack without provoking AoOs.',
  },
  {
    id: 'hammerblow',
    name: 'Hammerblow',
    description: 'Double your Strength bonus to damage on this attack (two-handed hold).',
  },
  {
    id: 'headbutt',
    name: 'Headbutt',
    description: 'Swift action unarmed attack; target staggered 1 round on hit (Fort negates).',
  },
  {
    id: 'knockdown-blow',
    name: 'Knockdown Blow',
    description: 'Free CMB trip attempt against target on hit; no AoO provoked.',
  },
  {
    id: 'leg-sweep',
    name: 'Leg Sweep',
    description: 'Free CMB trip attempt against any target you hit during a full attack.',
  },
  {
    id: 'mystic-strike',
    name: 'Mystic Strike',
    description: 'Your attacks bypass DR and SR until the start of your next turn.',
  },
  {
    id: 'painful-strike',
    name: 'Painful Strike',
    description: 'Target is nauseated for 1 round on hit (Fort negates).',
  },
  {
    id: 'penetrating-strike',
    name: 'Penetrating Strike',
    description: 'Treat the target as one size category smaller for this attack.',
  },
  {
    id: 'shattering-punch',
    name: 'Shattering Punch',
    description: "Reduce target's DR by 5 for 1 minute on hit (Fort negates).",
  },
  {
    id: 'spin-kick',
    name: 'Spin Kick',
    description: 'Make one additional attack at your lowest BAB as part of a full attack.',
  },
  {
    id: 'spinning-throw',
    name: 'Spinning Throw',
    description: 'Free bull rush or trip against the target on hit; no AoO provoked.',
  },
  // Spell-Infused Shuriken style strikes (spend spell slot levels to power)
  {
    id: 'seeking-star',
    name: 'Seeking Star',
    description:
      'Spend 1 spell slot level: next thrown weapon ignores cover (not total cover) and gains +4 to hit.',
  },
  {
    id: 'spell-charged-shuriken',
    name: 'Spell-Charged Shuriken',
    description:
      'Spend 2 spell slot levels: next thrown weapon applies one Agiel Strike condition on hit (same save as Agiel Strike).',
  },
  {
    id: 'arcane-ricochet',
    name: 'Arcane Ricochet',
    description:
      'Spend 2 spell slot levels: thrown weapon ricochets to a second target within 30 ft, using the same attack bonus.',
  },
  {
    id: 'energy-burst-shuriken',
    name: 'Energy Burst Shuriken',
    description:
      'Spend 4–6 spell slot levels: thrown weapon explodes. Primary target takes Agiel damage + 1d6/slot level (no save). Creatures within 10 ft take Agiel damage + 1/slot level (Reflex DC 10 + ½ level + Cha for half).',
  },
];

export const mordSithDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'mord-sith-style-strike',
    className: 'mord sith',
    featureName: 'Style Strike',
    description:
      'At 5th level and every 4 levels thereafter, the Mord-Sith learns one style strike from the Unchained Monk list.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [5, 9, 13, 17],
    },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'style-strikes',
        name: 'Style Strikes',
        options: STYLE_STRIKES,
      },
    ],
    source: 'Homebrew',
    isOfficial: false,
    createdBy: 'mark',
    verificationStatus: 'needs_review' as const,
    visibility: 'campaign',
    rev: 1,
  },
  {
    id: 'mord-sith-bonus-feat',
    className: 'mord sith',
    featureName: 'Bonus Feat',
    description:
      'At 6th, 10th, 14th, and 18th level, the Mord-Sith selects one bonus feat from the Mord-Sith bonus feat list. Trainable prerequisites (BAB, ability scores, skill ranks, other feats) are waived, EXCEPT for Elemental Fist and Stunning Fist. Immutable prerequisites (race, class abilities, gender, alignment) must still be met. Starting at 10th level, she may instead gain a wildcard style slot. NOTE: picker does not yet enforce prerequisites — verify manually.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [6, 10, 14, 18],
    },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'mord-sith-bonus-feats',
        name: 'Mord-Sith Bonus Feats',
        options: [
          {
            id: 'stunning-fist',
            name: 'Stunning Fist',
            description: 'Requires meeting prerequisites.',
          },
          {
            id: 'elemental-fist',
            name: 'Elemental Fist',
            description: 'Requires meeting prerequisites.',
          },
          {
            id: 'superstition',
            name: 'Superstition',
            description:
              'Counts Mord-Sith levels as barbarian levels. Never considered raging; "once per rage" = "once per combat" (once per round at 17th).',
          },
          {
            id: 'disruptive',
            name: 'Disruptive',
            description: 'Increase the DC to cast spells defensively near you by 4.',
          },
          {
            id: 'eater-of-magic',
            name: 'Eater of Magic',
            description:
              'When you succeed on a saving throw against a magical effect, gain temporary HP.',
          },
          {
            id: 'spellbreaker',
            name: 'Spellbreaker',
            description: 'Enemies provoke AoOs from you when they cast spells near you.',
          },
          {
            id: 'witch-hunter',
            name: 'Witch Hunter',
            description:
              'Gain a +2 bonus on damage rolls against creatures with spells or spell-like abilities.',
          },
          {
            id: 'deflect-arrows',
            name: 'Deflect Arrows',
            description: 'Deflect one ranged attack per round as an immediate action.',
          },
          {
            id: 'medusas-wrath',
            name: "Medusa's Wrath",
            description:
              'Make two additional attacks against a staggered, stunned, or dazed foe during a full attack.',
          },
          {
            id: 'snatch-arrows',
            name: 'Snatch Arrows',
            description: 'Catch deflected ranged weapons and use them as improvised melee weapons.',
          },
          {
            id: 'spring-attack',
            name: 'Spring Attack',
            description:
              'Move before and after a melee attack without provoking AoOs from the target.',
          },
        ],
      },
      {
        id: 'combat-style-feats',
        name: 'Combat Style Feats',
        options: STYLE_FEAT_OPTIONS,
      },
      {
        id: 'combat-maneuver-feats',
        name: 'Combat Maneuver Feats',
        options: [
          // Bull Rush
          {
            id: 'improved_bull_rush',
            name: 'Improved Bull Rush',
            description: '+2 to bull rush CMB/CMD, no AoO when bull rushing',
          },
          {
            id: 'greater_bull_rush',
            name: 'Greater Bull Rush',
            description: 'Additional +2 bull rush, pushed foe provokes AoOs',
          },
          {
            id: 'bull_rush_strike',
            name: 'Bull Rush Strike',
            description: 'Free bull rush on critical hit if confirm roll exceeds CMD',
          },
          // Dirty Trick
          {
            id: 'improved_dirty_trick',
            name: 'Improved Dirty Trick',
            description: '+2 dirty trick CMB/CMD, no AoO on dirty trick',
          },
          {
            id: 'greater_dirty_trick',
            name: 'Greater Dirty Trick',
            description: '+2 more to dirty trick CMB, longer duration, standard action to remove',
          },
          {
            id: 'dirty_trick_master',
            name: 'Dirty Trick Master',
            description: 'Escalate dirty trick conditions to worse versions.',
          },
          // Disarm
          {
            id: 'improved_disarm',
            name: 'Improved Disarm',
            description: '+2 to disarm CMB/CMD, no AoO when disarming',
          },
          {
            id: 'greater_disarm',
            name: 'Greater Disarm',
            description: 'Additional +2 to disarm, weapon lands 15 ft. away',
          },
          {
            id: 'disarming_strike',
            name: 'Disarming Strike',
            description: 'Free disarm on critical hit if confirm roll exceeds CMD',
          },
          // Drag
          {
            id: 'improved_drag',
            name: 'Improved Drag',
            description: '+2 on drag CMB/CMD, no AoO when dragging',
          },
          {
            id: 'greater_drag',
            name: 'Greater Drag',
            description: 'Successful drag provokes AoOs from all threatening allies',
          },
          {
            id: 'dragging_strike',
            name: 'Dragging Strike',
            description: 'Free-action drag attempt on a successful melee hit',
          },
          // Grapple
          {
            id: 'improved_grapple',
            name: 'Improved Grapple',
            description: '+2 to grapple CMB/CMD, no AoO when grappling',
          },
          {
            id: 'greater_grapple',
            name: 'Greater Grapple',
            description: 'Additional +2 grapple, maintain grapple as move action',
          },
          // Overrun
          {
            id: 'improved_overrun',
            name: 'Improved Overrun',
            description: '+2 to overrun CMB/CMD, no AoO, targets cannot avoid',
          },
          {
            id: 'greater_overrun',
            name: 'Greater Overrun',
            description: 'Additional +2 overrun, prone foes provoke AoOs',
          },
          // Reposition
          {
            id: 'improved_reposition',
            name: 'Improved Reposition',
            description: '+2 reposition CMB/CMD, no AoO on reposition',
          },
          {
            id: 'greater_reposition',
            name: 'Greater Reposition',
            description: '+2 more to reposition CMB, repositioned foe provokes AoOs from allies',
          },
          {
            id: 'repositioning_strike',
            name: 'Repositioning Strike',
            description: 'Free reposition on critical hit if confirm roll exceeds CMD',
          },
          // Steal
          {
            id: 'improved_steal',
            name: 'Improved Steal',
            description: '+2 steal CMB/CMD, no AoO on steal',
          },
          {
            id: 'greater_steal',
            name: 'Greater Steal',
            description: '+2 more to steal CMB, stolen items go unnoticed until used',
          },
          // Sunder
          {
            id: 'improved_sunder',
            name: 'Improved Sunder',
            description: '+2 to sunder CMB/CMD, no AoO when sundering',
          },
          {
            id: 'greater_sunder',
            name: 'Greater Sunder',
            description: 'Additional +2 sunder, excess damage goes to wielder',
          },
          {
            id: 'sundering_strike',
            name: 'Sundering Strike',
            description: 'Free sunder on critical hit if confirm roll exceeds CMD',
          },
          // Trip
          {
            id: 'improved_trip',
            name: 'Improved Trip',
            description: '+2 to trip CMB/CMD, no AoO when tripping',
          },
          {
            id: 'greater_trip',
            name: 'Greater Trip',
            description: 'Additional +2 trip, tripped foe provokes AoOs',
          },
          {
            id: 'tripping_strike',
            name: 'Tripping Strike',
            description: 'Free trip on critical hit if confirm roll exceeds CMD',
          },
        ],
      },
      {
        id: 'mord-sith-style-feats',
        name: 'Mord-Sith Style Feats',
        options: [
          {
            id: 'circle-of-suffering',
            name: 'Circle of Suffering',
            description:
              'Style feat. While using this style, any opponent you threaten that takes any movement (including 5-foot steps) provokes an AoO from you. Opponents cannot use the withdraw action to treat their starting square as unthreatened. Prerequisites: Improved Unarmed Strike, Intimidate 3 ranks.',
          },
          {
            id: 'inescapable-grasp',
            name: 'Inescapable Grasp',
            description:
              'Style feat. Your threatened area increases by 5 feet. When you hit someone with an AoO, they cannot use teleportation or similar effects for 1 round; if they attempt to anyway, treat it as a spell that failed to overcome your SR (requires Spelldrinker). Prerequisites: Circle of Suffering, BAB +6, Intimidate 6 ranks.',
          },
          {
            id: 'spell-shatter',
            name: 'Spell Shatter',
            description:
              'Style feat. When you hit a creature with an AoO while they are casting a spell, you can steal that spell even if they would succeed at casting defensively, treating it as if the spell failed to overcome your SR (requires Spelldrinker). Prerequisites: Inescapable Grasp, BAB +11, Intimidate 9 ranks.',
          },
        ],
      },
      {
        id: 'wildcard-style-slot',
        name: 'Wildcard Style Slot',
        minClassLevel: 10,
        options: [
          {
            id: 'wildcard-style-slot',
            name: 'Wildcard Style Slot',
            description:
              'Gain a wildcard style slot to spend on feats within any style feat path you enter.',
          },
        ],
      },
    ],
    source: 'Homebrew',
    isOfficial: false,
    createdBy: 'mark',
    verificationStatus: 'needs_review' as const,
    visibility: 'campaign',
    rev: 1,
  },
];
