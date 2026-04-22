import type { StanceDefinition } from '@/types/initiating';

export const STANCE_OVERFLOW: StanceDefinition[] = [
  // ── Scarlet Throne (PoW) ─────────────────────────────────────────────
  {
    id: 'pow-scarlet-throne-scarlet-duelist-attitude',
    name: 'Scarlet Duelist Attitude',
    disciplineId: 'scarlet-throne',
    level: 6,
    description:
      'The force of will that a disciple of Scarlet Throne possesses is enough to protect him and guide his steps through battle, and his battle focus allows him to anticipate danger before it happens. By adopting this stance, the disciple may add a +5 insight bonus to his Armor Class, CMD, and to his Initiative score.',
    prerequisites: { disciplineManeuversKnown: 2 },
    source: { bookId: 'pow', bookName: 'Path of War', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'pow-scarlet-throne-scarlet-majesty-stance',
    name: 'Scarlet Majesty Stance',
    disciplineId: 'scarlet-throne',
    level: 8,
    description:
      'The fearsome glory of a master disciple of the Scarlet Throne discipline causes him to appear as nothing less than a god of war incarnated in flesh and steel. While in this stance, any creature with an Intelligence of 1 or higher must make a Will save (DC 18 + initiation modifier) to make an attack against him. If this saving throw is a success, then it may proceed to attack him as normal. If the opponent fails, it may not attack the disciple on this round but its action is not wasted. Targets who have successfully struck the disciple for damage after a successful Will save acquire immunity to this effect for 24 hours. Should the target fail to hit the disciple after a successful Will save, it must make another Will save in subsequent rounds to attempt to attack the disciple. A single attempt to overcome the awe-inspiring presence of the Scarlet Throne disciple may be made per round by any one creature.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'pow', bookName: 'Path of War', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },

  // ── Veiled Moon (PoW) ────────────────────────────────────────────────
  {
    id: 'pow-veiled-moon-formless-dance',
    name: 'Formless Dance',
    disciplineId: 'veiled-moon',
    level: 3,
    description:
      'The Veiled Moon disciple immerses himself in a sort of dimensional flux, causing him to be able to see what cannot be perceived and seemingly be in many places at once. While in this stance, the initiator gains the benefits of a see invisibility spell and the blur spell.',
    prerequisites: { disciplineManeuversKnown: 1 },
    source: { bookId: 'pow', bookName: 'Path of War', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'pow-veiled-moon-stance-of-the-ether-gate',
    name: 'Stance of the Ether Gate',
    disciplineId: 'veiled-moon',
    level: 5,
    description:
      'By shifting his essence partially into the Astral plane, the disciple finds that moving through that plane is just as easy as moving through the Material plane. While the disciple is in this stance, he may teleport up to his movement speed as a move action, or twice his movement speed as a full-round action, at will.',
    prerequisites: { disciplineManeuversKnown: 2 },
    source: { bookId: 'pow', bookName: 'Path of War', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'pow-veiled-moon-spiritual-weapon-stance',
    name: 'Spiritual Weapon Stance',
    disciplineId: 'veiled-moon',
    level: 6,
    description:
      'By channeling ethereal energies along his weapons and his body, the initiator becomes immersed in both worlds, being as solid on the Ethereal Plane as he is on the Material. While in this stance, the initiator\'s weapons, armor, and equipment are treated as if they had the ghost touch property.',
    prerequisites: { disciplineManeuversKnown: 2 },
    source: { bookId: 'pow', bookName: 'Path of War', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
  {
    id: 'pow-veiled-moon-anchoring-spirit',
    name: 'Anchoring Spirit',
    disciplineId: 'veiled-moon',
    level: 8,
    description:
      'The Veiled Moon disciple pulls himself fully into the Ethereal and manifests a ghostly apparition of his form upon the Material, and in doing so he locks his immediate area for travel through the Ethereal or Astral plane. While in this stance, the initiator gains the incorporeal subtype.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'pow', bookName: 'Path of War', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },

  // ── Black Seraph (PoWE) ──────────────────────────────────────────────
  {
    id: 'powe-black-seraph-vampiric-aura',
    name: 'Vampiric Aura',
    disciplineId: 'black-seraph',
    level: 8,
    description:
      'The disciple of the Black Seraph radiates an aura of consuming darkness that drains the life force of all nearby foes. While in this stance, the initiator projects a 20-foot radius aura that deals 2d6 points of profane damage to all enemies within it at the start of each of the initiator\'s turns. The initiator heals a like amount of hit points for each creature damaged by this aura.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'powe', bookName: 'Path of War: Expanded', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },

  // ── Cursed Razor (PoWE) ──────────────────────────────────────────────
  {
    id: 'powe-cursed-razor-luckdrinker-aura',
    name: 'Luckdrinker Aura',
    disciplineId: 'cursed-razor',
    level: 8,
    description:
      'This cursed aura steals beneficence from your enemies and gifts it to your allies. You supernaturally sense magic around you and can twist it to your advantage. While you maintain this stance, you automatically know which spells, powers, or magical effects are active upon any individual you see within 30 feet. In addition, at the beginning of each round, you may select a power, psi-like ability, spell, or spell-like ability affecting a hostile creature within 30 feet. Make a dispel check (1d20 + your initiator level) against the effect (DC 11 + the effect\'s caster or manifester level). If you succeed, the effect is suppressed for a number of rounds equal to your initiation modifier, and one of your allies within 30 feet gains the benefit of that effect for the same duration.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'powe', bookName: 'Path of War: Expanded', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },

  // ── Elemental Flux (PoWE) ────────────────────────────────────────────
  {
    id: 'powe-elemental-flux-master-of-the-elements',
    name: 'Master of the Elements',
    disciplineId: 'elemental-flux',
    level: 8,
    description:
      'You attune your very form to roiling elemental energies and merge with them. While you maintain this stance, your type changes to outsider (native) and you gain your active element as a subtype. In addition, you are treated as if you were under the effects of the elemental body III spell. You may continue to wield weapons, wear armor, and use other items while in this form, and your new body does not damage or otherwise adversely affect your equipment.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'powe', bookName: 'Path of War: Expanded', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },

  // ── Eternal Guardian (PoWE) ──────────────────────────────────────────
  {
    id: 'powe-eternal-guardian-stance-of-the-infinite-warrior',
    name: 'Stance of the Infinite Warrior',
    disciplineId: 'eternal-guardian',
    level: 8,
    description:
      'Your eternal vigilance allows you to leave an echo of your presence behind to guard areas in which you are no longer physically present. While you maintain this stance, any square you threaten during your turn remains threatened by you until the end of your next turn. You can make melee attacks (including attacks of opportunity) against creatures within these squares, regardless of your actual location -- a flickering glimpse of how you appeared the moment you threatened that square appears and makes the attack, just as if you were actually in the square. In addition, whenever a creature enters your threatened area, you can teleport to any unoccupied space within 10 feet of that creature as an immediate action.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'powe', bookName: 'Path of War: Expanded', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },

  // ── Mithral Current (PoWE) ──────────────────────────────────────────
  {
    id: 'powe-mithral-current-mithral-lightning-stance',
    name: 'Mithral Lightning Stance',
    disciplineId: 'mithral-current',
    level: 8,
    description:
      'With blinding movements and rapid, graceful strikes, you are able to travel across the battlefield and bring death to any who would try to oppose you. While you maintain this stance, you gain a +10 foot enhancement bonus to each of your speeds, a +6 dodge bonus to your AC against attacks of opportunity, and your weapons are treated as silver for the purposes of vulnerabilities and overcoming damage reduction. Whenever an opponent makes an attack of opportunity against you, you can make a melee attack against them after their attack resolves. If it hits, it deals weapon damage as normal plus an additional 3d6 points of damage. In addition, all attacks you make as part of counter maneuvers deal an additional 3d6 points of damage on a successful hit, and you can sheathe your weapon once per round as a free action that does not provoke attacks of opportunity, even if it is not your turn.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'powe', bookName: 'Path of War: Expanded', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },

  // ── Piercing Thunder (PoWE) ──────────────────────────────────────────
  {
    id: 'powe-piercing-thunder-deadly-thunder-lancers-stance',
    name: "Deadly Thunder Lancer's Stance",
    disciplineId: 'piercing-thunder',
    level: 8,
    description:
      'Mastery of the spear and its many styles comes to you as you near the pinnacle of the Piercing Thunder discipline. While you maintain this stance, you add your initiation modifier to attack rolls, damage rolls, and Acrobatics checks to jump or tumble. In addition, you gain the benefits of the Spring Attack feat, even if you do not meet its prerequisites. When you use this feat, you can initiate a strike with an initiation action of one standard action or less instead of making a normal attack during your movement. If that strike includes a charge, you gain the normal benefits and penalties of the charge combat maneuver, although your movement is not limited to a straight line, you may move through difficult terrain or other obstacles as if you were not charging, and you do not have to end your movement after initiating your strike.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'powe', bookName: 'Path of War: Expanded', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },

  // ── Riven Hourglass (PoWE) ──────────────────────────────────────────
  {
    id: 'powe-riven-hourglass-god-of-the-hourglass-stance',
    name: 'God of the Hourglass Stance',
    disciplineId: 'riven-hourglass',
    level: 8,
    description:
      'Your control over your own time-stuff allows you to isolate your Hourglass from reality, causing you to move with unparalleled speed and grace and affording you protection from those who would manipulate your quintessence. While you maintain this stance, you gain immunity to slow effects and cannot become fatigued or exhausted. You can always act during surprise rounds, even if caught unaware. If an ally or opponent uses time stop within 50 feet, you may take one standard action during that spell\'s duration. Additionally, you gain an extra move or standard action each turn.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'powe', bookName: 'Path of War: Expanded', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },

  // ── Shattered Mirror (PoWE) ─────────────────────────────────────────
  {
    id: 'powe-shattered-mirror-unholy-mirror-stance',
    name: 'Unholy Mirror Stance',
    disciplineId: 'shattered-mirror',
    level: 8,
    description:
      'Woe and discord are multiplied by your reflective power. While you maintain this stance, you can choose to have any power, psi-like ability, spell, and/or spell-like ability that targets an opponent within 30 feet also affect a number of secondary targets equal to your initiation modifier. Each secondary target must be within 30 feet of you, and none can be affected more than once. If the original effect requires an attack roll, use the same roll for each target. If the effect deals damage, secondary targets take half as much damage as the primary target, and if it does not deal damage, its save DC is reduced by 4 instead.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'powe', bookName: 'Path of War: Expanded', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },

  // ── Sleeping Goddess (PoWE) ─────────────────────────────────────────
  {
    id: 'powe-sleeping-goddess-unimpeachable-authority-of-the-sleeping-goddess',
    name: 'Unimpeachable Authority of the Sleeping Goddess',
    disciplineId: 'sleeping-goddess',
    level: 8,
    description:
      'You focus your spirit and belief, becoming a terrible and awe-inspiring sight; the world around you pales in comparison to your reality, and those who meet your eyes can feel your presence boring into their very soul. You may enter and maintain this stance even if you are immune to mind-affecting effects or fear effects. While you maintain this stance, opponents within 60 feet of you become shaken. This stance cannot create a stronger fear condition if an opponent is already shaken; affected opponents merely remain shaken while they remain within 60 feet of you (although other fear effects can do so as normal). In addition, as a move action, you can turn your attention to an opponent within 60 feet that can see or otherwise perceive you. That opponent must succeed at a Will save (DC 18 + your initiation modifier) or become panicked for one round. If you expend your psionic focus as part of using this ability, you ignore any immunity to mind-affecting or fear effects possessed by the target. Instead, a normally-immune target gains a +5 resistance bonus on its saving throw.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'powe', bookName: 'Path of War: Expanded', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },

  // ── Tempest Gale (PoWE) ─────────────────────────────────────────────
  {
    id: 'powe-tempest-gale-eye-of-the-storm-stance',
    name: 'Eye of the Storm Stance',
    disciplineId: 'tempest-gale',
    level: 8,
    description:
      'Like the calm winds at the center of a hurricane, you are a bastion of serenity on the chaos of the battlefield. While you maintain this stance, you add your initiation modifier to damage rolls made with ranged weapons, you do not take penalties on attack rolls from attacking creatures beyond your weapon\'s first range increment, and ignore the effects of weather conditions and wind effects on your ranged attacks (including magical winds such as a wind wall spell). In addition, your ranged attacks ignore the AC bonus granted to targets by anything less than total cover, and the miss chance granted to targets by anything less than total concealment.',
    prerequisites: { disciplineManeuversKnown: 3 },
    source: { bookId: 'powe', bookName: 'Path of War: Expanded', publisher: 'Dreamscarred Press' },
    isOfficial: false,
    visibility: 'global' as const,
    rev: 1,
    verificationStatus: 'needs_review' as const,
  },
];
