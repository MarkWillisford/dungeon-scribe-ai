import { ArchetypeData } from '../types';

export const STALKER_ZEALOT_POW_ARCHETYPES: ArchetypeData[] = [
  // ── Brutal Slayer (Stalker) ──────────────────────────────────────────
  {
    name: 'Brutal Slayer',
    className: 'Stalker',
    description:
      'The brutal slayer is a terrifying predator of the night who emphasizes strength and fury over grace and finesse, wielding heavy two-handed weapons with devastating speed.',
    replacedFeatures: ['Deadly Strike', 'Dodge Bonus'],
    modifiedFeatures: ['Maneuvers', 'Maneuvers Readied', 'Stalker Arts'],
    newFeatures: [
      {
        name: 'Brutal Strikes',
        level: 1,
        description:
          'Whenever a brutal slayer confirms a critical hit against a creature, he gains a +4 profane bonus to Strength for a number of rounds equal to his brutal slayer initiation modifier. This bonus increases to +6 at 8th level and to +8 at 16th level. This ability replaces deadly strike.',
      },
      {
        name: 'Armor of Scars',
        level: 1,
        description:
          "At 1st level, a brutal slayer gains a +1 bonus to his natural armor bonus to AC (this stacks with his existing natural armor bonus, if any). At 4th level and every four levels thereafter, this bonus increases by +1. In addition, the brutal slayer's instincts enable him to better dodge incoming blows; whenever he spends a full-round action to recover maneuvers, he gains a dodge bonus to AC equal to his brutal slayer initiation modifier. This ability replaces the stalker's dodge bonus.",
      },
      {
        name: 'Muscle Memory',
        level: 2,
        description:
          "Starting at 2nd level, a brutal slayer may add 1/2 his Strength modifier to his AC and to Reflex saves instead of his Dexterity modifier. At 6th level, the brutal slayer may add his full Strength modifier instead of his Dexterity modifier, rather than 1/2. The brutal slayer's Strength bonus to his AC is still limited by his armor's maximum Dexterity bonus.",
      },
      {
        name: 'Maneuver Recovery',
        level: 1,
        description:
          'The brutal slayer may take a full-round action to recover a number of expended maneuvers equal to his brutal slayer initiation modifier (minimum 2). When he does so, he gains temporary hit points equal to twice his initiator level and damage reduction equal to his brutal slayer initiation modifier (minimum 0), both lasting for one round. In addition, his next melee strike deals additional bleed damage equal to his initiation modifier until stopped by magical healing or a DC 15 Heal check. Alternatively, the brutal slayer may spend a standard action to recover a single expended maneuver.',
      },
      {
        name: 'Stalker Art: Brutal Ambush',
        level: 1,
        description:
          'Attacks the brutal slayer makes against flat-footed opponents gain the benefit of his brutal strikes ability as though he had confirmed a critical hit.',
      },
      {
        name: 'Stalker Art: Brutal Assault',
        level: 1,
        description:
          'As a swift action, the brutal slayer may expend one point of ki to gain the benefit of his brutal strikes ability against a chosen creature for a number of rounds equal to his initiation modifier.',
      },
      {
        name: 'Stalker Art: Furious Strikes',
        level: 1,
        description:
          'The Strength bonus from brutal strikes increases by +2. In addition, the brutal slayer treats his class level as his base attack bonus for the purpose of qualifying for critical feats.',
      },
      {
        name: 'Stalker Art: Cruel Strike',
        level: 1,
        description:
          'While under the effects of his brutal strikes ability, the brutal slayer may choose to reduce his damage by 1/4 to sicken the target for a number of rounds equal to his initiation modifier.',
      },
    ],
    disciplineSwaps: {
      gained: ['black-seraph', 'primal-fury'],
      lost: ['thrashing-dragon'],
    },
    source: 'Path of War',
  },

  // ── Discordant Crusader (Zealot) ─────────────────────────────────────
  {
    name: 'Discordant Crusader',
    className: 'Zealot',
    description:
      'Discordant crusaders are warrior zealots who choose to blend both good and evil into one style, using the strength of one to supplement the fury of the other.',
    replacedFeatures: ['Mission', 'Defiance', 'Conviction', 'Metaphysical Transcendence'],
    modifiedFeatures: ['Maneuvers'],
    newFeatures: [
      {
        name: 'Moral Ambiguity',
        level: 1,
        description:
          'A discordant crusader decides the nature of his own path, for good or ill. Starting at 1st level, the discordant crusader can initiate maneuvers with the Good and Evil descriptors regardless of his alignment, and regular use of these maneuvers does not threaten to change his alignment.',
      },
      {
        name: 'Grey Aura',
        level: 4,
        description:
          "Starting at 4th level, as long as the discordant crusader is psionically focused, his alignment cannot be discerned by spells and effects as long as his class level is higher than the effect's caster level. In addition, whenever he deals profane damage, he can expend his psionic focus as a free action to instead deal an equal amount of sacred damage. Alternatively, he can use this ability when he deals sacred damage to instead deal an equal amount of profane damage. This ability replaces the mission gained at 4th level.",
      },
      {
        name: 'Paired Weapons',
        level: 5,
        description:
          'Starting at 5th level, a discordant crusader treats all Black Seraph discipline weapons as Silver Crane discipline weapons, and vice versa. This ability replaces defiance.',
      },
      {
        name: 'Divided Focus',
        level: 6,
        description:
          'At 6th level, a discordant crusader gains Discipline Focus (Black Seraph) and Discipline Focus (Silver Crane) as bonus feats, even if he does not meet their prerequisites. This ability replaces the conviction gained at 6th level.',
      },
      {
        name: 'Twofold Fire',
        level: 8,
        description:
          "At 8th level, a discordant crusader gains the ability to augment his Black Seraph and Silver Crane strikes by spending power points. The maximum number of power points that may be spent is equal to one plus one additional power point for every four initiator levels the discordant crusader possesses, to a maximum of 6. Augment options: For every power point the discordant crusader spends, the strike deals an additional 1d6 points of profane damage (if a Black Seraph strike) or sacred damage (if a Silver Crane strike). Alternatively, for every 3 power points the discordant crusader spends, the target takes a -4 penalty to their AC (if a Black Seraph strike) or on their attack rolls (if a Silver Crane strike) for one minute. A successful Will save (DC 10 + the strike's level + the discordant crusader's initiation modifier) negates this penalty. This ability replaces the mission gained at 8th level.",
      },
      {
        name: 'Twinned Avatar',
        level: 16,
        description:
          'At 16th level, the discordant crusader can enter two stances, one each from the Black Seraph and Silver Crane disciplines, with a single swift action. Doing so is taxing for the discordant crusader, and he can only maintain the stances together for a number of rounds equal to 3 + his discordant crusader initiation modifier. These rounds do not need to be consecutive, but after he reaches this maximum he must wait an equal number of rounds before he can use this ability again. At 20th level, the discordant crusader can maintain a Black Seraph and a Silver Crane stance together indefinitely. This ability replaces metaphysical transcendence.',
      },
    ],
    disciplineSwaps: {
      gained: ['black-seraph', 'silver-crane'],
      lost: ['piercing-thunder'],
    },
    source: 'Path of War',
  },

  // ── Void Prophet (Zealot) ────────────────────────────────────────────
  {
    name: 'Void Prophet',
    className: 'Zealot',
    description:
      'Void prophets are psionicists who have touched the endless void and now compel others to experience it. They travel as nihilistic warriors, sharing the empty purity of their power with those who would stand against them.',
    replacedFeatures: [
      'Compartmentalized Aid',
      'Mission',
      'Zeal',
      'Commitment',
      'Metaphysical Transcendence',
    ],
    modifiedFeatures: ['Maneuvers', 'Maneuvers Readied'],
    newFeatures: [
      {
        name: 'Unwilling Participant',
        level: 1,
        description:
          "A void prophet gains Unwilling Participant as a bonus feat. The save DC to resist being added to the void prophet's collective is equal to 10 + 1/2 the void prophet's initiator level + the void prophet's initiation modifier.",
      },
      {
        name: 'Expanded Collective',
        level: 1,
        description:
          'A void prophet gains Expanded Collective as a bonus feat. This ability replaces compartmentalized aid.',
      },
      {
        name: 'Maneuver Recovery',
        level: 1,
        description:
          "The void prophet's maneuver recovery is altered. She recovers one expended maneuver when she adds an unwilling creature to her collective. She recovers a number of expended maneuvers equal to her void prophet initiation modifier (minimum 2) when a member of her collective reaches 0 or fewer hit points. Alternatively, she can meditate as a standard action to recover a single expended maneuver.",
      },
      {
        name: 'Hollow Faith',
        level: 1,
        description:
          'Starting at 1st level, the void prophet can add unwilling members to her collective as a move action, or as a swift action by expending her psionic focus. A void prophet never loses power points as a result of an unwilling member of her collective dying. At 4th level, the void prophet may designate any number of creatures in her collective as a free action at the beginning of her turn. Those creatures suffer a -2 penalty to armor class, attack rolls, skill checks, caster level checks (such as those made to overcome spell resistance), and manifester level checks. At 8th level, the void prophet gains the ability to augment her maneuvers by spending power points. The maximum number of power points that may be spent is equal to one plus one additional power point for every four initiator levels the void prophet possesses, to a maximum of 6. This ability replaces mission.',
      },
      {
        name: 'Preach the Silence',
        level: 5,
        description:
          "Whenever a creature fails a saving throw to resist being added to the void prophet's collective, the void prophet's allies in the collective gain a +1 morale bonus to attack rolls and saving throws for a number of rounds equal to her initiation modifier. This bonus increases at 5th level and every five levels thereafter. This ability replaces zeal.",
      },
      {
        name: 'Endless Hunger',
        level: 3,
        description:
          "At 3rd level, the void prophet may attempt to add a creature who fails its saving throw against one of her strikes to her collective as a free action. If the strike does not normally allow a save, the creature must instead succeed at a Will save (DC 10 + the strike's level + the void prophet's initiation modifier) to avoid being added. If the creature is successfully added to the collective, the void prophet cannot recover that strike as part of the same action. This ability replaces commitment.",
      },
      {
        name: 'The Consuming Void',
        level: 16,
        description:
          'At 16th level, the void prophet may expend the soul of an unwilling creature that has died and merged with her collective through her metaphysical transcendence ability as a free action. If she does, that creature dies (and leaves the collective) and the void prophet regains her psionic focus. This ability alters and replaces metaphysical transcendence.',
      },
    ],
    disciplineSwaps: {
      gained: ['cursed-razor', 'riven-hourglass'],
      lost: ['golden-lion', 'solar-wind'],
    },
    source: 'Path of War',
  },
];
