import type { NinjaTrickEntry } from '@/types/classOptions';

export const ninjaTricksMaster: NinjaTrickEntry[] = [
  // ── Ultimate Combat ──────────────────────────────────────────────────────────

  {
    id: 'ninja-trick-advanced-talent',
    name: 'Advanced Talent',
    trickTier: 'master',
    description:
      'The ninja can select a rogue talent from the list of advanced talents in place of a ninja trick. The ninja cannot select a rogue talent that has the same name as a ninja trick. A ninja can select the improved evasion advanced talent as a master trick only if she already has evasion (either from the ninja class feature or from the evasion master trick).',
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-assassinate',
    name: 'Assassinate',
    trickTier: 'master',
    description:
      "A ninja with this master trick can kill foes that are unable to defend themselves. To attempt to assassinate a target, the ninja must first study her target for 1 round as a standard action. On the following round, if the ninja makes a sneak attack against the target and the target is denied its Dexterity bonus to AC, the sneak attack has the additional effect of possibly killing the target. This attempt automatically fails if the target recognizes the ninja as an enemy. If the sneak attack is successful, the target must attempt a Fortitude saving throw with a DC equal to 10 + 1/2 the ninja's level + the ninja's Charisma modifier. If the target fails this save, it dies. If the target succeeds at this saving throw, the target is instead staggered for 1d4 rounds and is immune to that ninja's assassinate ability for 24 hours. The ninja must have a master trick slot to select this trick.",
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-blinding-bomb',
    name: 'Blinding Bomb',
    trickTier: 'master',
    description:
      "Whenever the ninja throws a smoke bomb, all living creatures caught in the smoke cloud must make a Fortitude saving throw with a DC equal to 10 + 1/2 the ninja's level + the ninja's Charisma modifier or be blinded by the black, noxious smoke for 1d4 rounds. A ninja with this trick cannot combine it with the choking bomb trick, but she can combine it with the poison bomb trick.",
    prerequisites: [{ type: 'special', description: 'Choking bomb ninja trick' }],
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-deadly-shuriken',
    name: 'Deadly Shuriken',
    trickTier: 'master',
    description:
      'As a full-round action, a ninja with this master trick can take careful aim and pool all of her attack potential into a single, deadly shuriken throw. When she does this, she throws a single shuriken, but makes a number of attack rolls equal to the number of attacks she could make with a full attack action using her highest base attack bonus. If any of these attack rolls hit the target, the attack deals damage as normal, and for each hit beyond the first, the ninja deals an additional 1d6 points of damage. Precision damage and extra damage from weapon special abilities (such as flaming) are added only once to this damage. If one or more rolls are critical threats, she confirms the critical with a single confirmation roll made using her highest base attack bonus -5, plus an additional -1 per critical threat beyond the first.',
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-evasion',
    name: 'Evasion',
    trickTier: 'master',
    description:
      'A ninja can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can only be used if the ninja is wearing light armor or no armor. A helpless ninja does not gain the benefit of evasion.',
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-feat',
    name: 'Feat',
    trickTier: 'master',
    description: 'A ninja may gain any feat that she qualifies for in place of a ninja trick.',
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-ghost-step',
    name: 'Ghost Step',
    trickTier: 'master',
    description:
      'As a swift action, a ninja with this trick can pass through walls as if she were a ghost. Until the end of her turn, she can pass through a wall or other surface that is up to 5 feet thick per level as if she were incorporeal. She must spend 1 ki point each time she uses this ability.',
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-invisible-blade',
    name: 'Invisible Blade',
    trickTier: 'master',
    description:
      'Whenever a ninja uses the vanishing trick ninja trick, she is treated as if she were under the effects of greater invisibility rather than standard invisibility.',
    prerequisites: [{ type: 'special', description: 'Vanishing trick ninja trick' }],
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-master-disguise',
    name: 'Master Disguise',
    trickTier: 'master',
    description:
      "A ninja with this trick can take on the appearance of other creatures and individuals. Whenever the ninja uses the sudden disguise ninja trick, the duration of that disguise increases to 10 minutes per level. In addition, as a standard action the ninja can take on the appearance of a specific individual that she has seen before, lasting for 1 minute per level. Creatures that are familiar with the individual may attempt a Will saving throw with a DC equal to 10 + 1/2 the ninja's level + the ninja's Charisma modifier to see through the disguise. If the ninja has heard the individual speak, the illusion also includes the individual's voice.",
    prerequisites: [{ type: 'special', description: 'Sudden disguise ninja trick' }],
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-see-the-unseen',
    name: 'See the Unseen',
    trickTier: 'master',
    description:
      'A ninja with this trick learns how to see that which cannot be seen. As a swift action, the ninja can cast see invisibility as a spell-like ability, using her ninja level as the caster level. She must spend 1 ki point each time she uses this ability.',
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-shadow-split',
    name: 'Shadow Split',
    trickTier: 'master',
    description:
      "This trick allows the ninja to create an illusory double of herself that moves away from her, allowing the ninja to create a distraction. When the ninja uses this trick, she creates a single illusory duplicate of herself that moves in a straight line in a direction of the ninja's choosing. This illusory duplicate moves at twice the ninja's speed and lasts for 1 round per level. Creatures that interact with the illusion may attempt a Will saving throw with a DC equal to 10 + 1/2 the ninja's level + the ninja's Charisma modifier to disbelieve it. The ninja must spend 1 ki point each time she uses this ability.",
    prerequisites: [{ type: 'special', description: 'Shadow clone ninja trick' }],
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-unarmed-combat-mastery',
    name: 'Unarmed Combat Mastery',
    trickTier: 'master',
    description:
      'A ninja who selects this trick deals damage with her unarmed strikes as if she were a monk of her ninja level -4. If the ninja has levels in monk, this trick allows her levels in both classes to stack when determining the damage dealt by her unarmed strikes. She must have Improved Unarmed Strike to select this trick.',
    prerequisites: [{ type: 'feat', featId: 'improved-unarmed-strike' }],
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-unbound-steps',
    name: 'Unbound Steps',
    trickTier: 'master',
    description:
      'This trick allows a ninja to use her ki to walk through the air. Whenever the ninja uses the light steps class feature, she can walk on air as part of her movement, ascending or descending as she desires. She must end her movement on a solid surface. The ninja must spend 1 ki point each time she uses this ability.',
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Chronicle of Legends ─────────────────────────────────────────────────────

  {
    id: 'ninja-trick-acceleration-of-form',
    name: 'Acceleration of Form',
    trickTier: 'master',
    description:
      'A ninja with this trick can spend 1 ki point as a standard action to gain the benefits of displacement and haste for 1 round per 2 ninja levels.',
    source: 'pf1e-ppc-col',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-all-the-stars-in-the-sky',
    name: 'All the Stars in the Sky',
    trickTier: 'master',
    description:
      'Whenever a ninja with this trick buys a set of 50 identical magic shuriken, she thereafter replenishes them at no cost and never runs out of that type of shuriken. She can upgrade this set of shuriken at the cost of upgrading a single shuriken from its current enhancement bonus to the desired new enhancement bonus, and the entire set is treated as having the new enhancement bonus.',
    source: 'pf1e-ppc-col',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-false-face',
    name: 'False Face',
    trickTier: 'master',
    description:
      'A ninja with this trick gains the change shape universal monster rule, allowing her to assume the appearance of any Small or Medium humanoid as per alter self, as long as she has at least 1 ki point remaining in her ki pool.',
    source: 'pf1e-ppc-col',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-fractured-mirror',
    name: 'Fractured Mirror',
    trickTier: 'master',
    description:
      "When a ninja with this trick uses the shadow clone ninja trick, she gains one additional clone for every 3 ninja levels she has, to a maximum of eight clones at 18th level. As a move action, the ninja can move any or all of her clones up to her speed, or she can split them so that some remain in place and others move. Separated clones have an AC equal to the ninja's AC -5, can provide flanking, are destroyed if they are hit by any attack, and do not occupy a space.",
    prerequisites: [{ type: 'special', description: 'Shadow clone ninja trick' }],
    source: 'pf1e-ppc-col',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-kami-warden',
    name: 'Kami Warden',
    trickTier: 'master',
    description:
      "A ninja with this trick gains Bodyguard and In Harm's Way as bonus feats, ignoring their prerequisites. When the ninja uses In Harm's Way to intercept an attack targeting an adjacent ally, she can spend 1 ki point as a free action to gain DR 10/cold iron and resistance 10 to acid, electricity, and fire against that intercepted attack.",
    source: 'pf1e-ppc-col',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-spiritual-companion',
    name: 'Spiritual Companion',
    trickTier: 'master',
    description:
      "A ninja with this trick gains an improved familiar, treating her ninja level as her wizard level for the purpose of determining what improved familiar she can select and for any abilities of the familiar that are based on the master's level. She must have an alignment compatible with her chosen familiar. The ninja can select from the following improved familiars: calligraphy wyrm, pipefox, shikigami kami, or spirit oni.",
    prerequisites: [
      { type: 'special', description: 'Compatible alignment with chosen improved familiar' },
    ],
    source: 'pf1e-ppc-col',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Martial Arts Handbook ────────────────────────────────────────────────────

  {
    id: 'ninja-trick-deep-cover',
    name: 'Deep Cover',
    trickTier: 'master',
    description:
      "A ninja with this trick gains the dual identity and seamless guise class features as a vigilante, except that the two identities are called the ninja's social identity and ninja identity rather than social and vigilante. The ninja can spend 1 ki point to change identities as a move action instead of requiring 1 minute.",
    source: 'pf1e-ppc-mah',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-greater-ki-venom',
    name: 'Greater Ki Venom',
    trickTier: 'master',
    description:
      "A ninja with this trick can further improve her ki venom. When the ninja uses ki venom, she can spend 2 ki points instead of 1 to increase the poison's damage die to a d8, or to change the ability score damage from Dexterity to Constitution.",
    prerequisites: [{ type: 'special', description: 'Ki venom ninja trick' }],
    source: 'pf1e-ppc-mah',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-many-guises',
    name: 'Many Guises',
    trickTier: 'master',
    description:
      'A ninja with this trick gains the vigilante social talent of the same name. When using this social talent, the ninja uses her ninja level in place of her vigilante level.',
    prerequisites: [{ type: 'special', description: 'Deep cover ninja trick' }],
    source: 'pf1e-ppc-mah',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  {
    id: 'ninja-trick-occulted-soul',
    name: 'Occulted Soul',
    trickTier: 'master',
    description:
      'A ninja with this trick can still her mind to bypass magical detection. The ninja can spend 1 ki point to cast nondetection on herself as a spell-like ability, using her ninja level as the caster level.',
    source: 'pf1e-ppc-mah',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── Champions of Balance ─────────────────────────────────────────────────────

  {
    id: 'ninja-trick-kawarimi',
    name: 'Kawarimi',
    trickTier: 'master',
    description:
      "Once per day when a successful attack is made against the ninja, she can spend 1 ki point as an immediate action to attempt a Stealth check opposed by the attacker's Perception check (this use of Stealth can be attempted even while observed, provided the ninja has cover or concealment or an ability that allows her to attempt Stealth while observed). If the check succeeds, the attack instead strikes an inanimate object in the ninja's square or an adjacent square (such as a piece of furniture or a door), the ninja moves to any adjacent square without provoking attacks of opportunity, and she is treated as hidden.",
    source: 'pf1e-ppc-cob',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
