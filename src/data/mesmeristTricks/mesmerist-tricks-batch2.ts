// Batch 2 | Items 23-52 (Shadow Blend → Mental Fallback)
// Sources: Occult Adventures (pf1e-oa), Occult Origins (pf1e-oo),
//          Occult Realms (pf1e-or), Heroes of Golarion (pf1e-hog)
// Count: 22 tricks (14 listed above) + 8 additional masterful tricks = 22 total in this file

import type { MesmeristTrickEntry } from '@/types/classOptions';

export const mesmeristTricksBatch2: MesmeristTrickEntry[] = [
  {
    id: 'mesmerist-trick-shadow-blend',
    name: 'Shadow Blend',
    trickTier: 'masterful',
    description:
      "When the subject attempts a Stealth check while in an area of dim or darker light, the mesmerist can trigger this trick as a free action. The subject gains total concealment (50% miss chance) while in dim or dark light, or concealment (20% miss chance) against creatures with darkvision. This effect lasts for 1 round per mesmerist level or until the subject enters normal light or brighter.",
    source: 'pf1e-or',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-shadow-splinter',
    name: 'Shadow Splinter',
    trickTier: 'standard',
    description:
      "When the subject takes damage from an attack, the mesmerist can trigger this trick as a free action to reduce the damage dealt to the subject by an amount equal to 3 + the mesmerist's Charisma modifier (to a maximum of the total damage dealt). A shadow duplicate redirects this damage to one other eligible creature within the reach or range of the triggering attack. That creature can attempt a Will saving throw (DC 10 + half the mesmerist's level + the mesmerist's Charisma modifier) to disbelieve and avoid the redirected damage. This trick cannot be triggered if no eligible second creature is within range.",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-slip-bonds',
    name: 'Slip Bonds',
    trickTier: 'standard',
    description:
      "While this trick is implanted, the subject gains a +2 circumstance bonus on Escape Artist checks. When the subject is grappled, pinned, or otherwise physically restrained, the mesmerist can trigger this trick as a free action to briefly render the subject incorporeal, allowing her to pass through the bonds and escape. At 12th level, the subject remains incorporeal until the beginning of the mesmerist's next turn.",
    source: 'pf1e-oo',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-spatial-switch',
    name: 'Spatial Switch',
    trickTier: 'masterful',
    description:
      "When an enemy moves adjacent to or attacks either the subject or the mesmerist (provided the subject and mesmerist are within 100 feet of each other), the mesmerist can trigger this trick as a free action to teleport both himself and the subject, swapping their positions. If the trick is triggered by an attack against either party, the swap occurs before the hit is determined. This is a conjuration (teleportation) effect. The mesmerist cannot implant this trick on himself.",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-spectral-smoke',
    name: 'Spectral Smoke',
    trickTier: 'standard',
    description:
      "When the subject is attacked or is the target of a spell that requires an attack roll, the mesmerist can trigger this trick as a free action to cause a cloud of illusory smoke to fill the subject's square and a 10-foot-radius area around her. This smoke functions as fog cloud but is an illusion (figment) — it is not dispersed by wind and can be used underwater. Creatures can attempt a Will saving throw (DC 10 + half the mesmerist's level + the mesmerist's Charisma modifier) to disbelieve the smoke and see through it. The smoke lasts for 1 round per mesmerist level. The radius increases by 5 feet for every 5 class levels the mesmerist possesses (to a maximum radius of 30 feet at 20th level).",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-spell-anticipation',
    name: 'Spell Anticipation',
    trickTier: 'masterful',
    description:
      "When the mesmerist implants this trick, he expends one spell slot and binds one of his known mesmerist spells with a casting time of 1 standard action that targets a single creature to the trick. When the subject is targeted by an enemy spell, the mesmerist can trigger this trick as a free action to cast the bound spell against the enemy spellcaster, provided the spellcaster is within the spell's range as measured from the subject's position. The enemy's spell still takes full effect against the subject.",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-telepathic-link',
    name: 'Telepathic Link',
    trickTier: 'standard',
    description:
      "When the subject and her allies are outnumbered by enemies in combat, the mesmerist can trigger this trick as a free action to establish a telepathic connection between himself and the subject. The two can communicate telepathically for 1 minute per mesmerist level. The connection severs automatically if they move more than medium range (100 feet + 10 feet per mesmerist level) apart. Both parties must share a language to exchange meaningful communication.",
    source: 'pf1e-hog',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-umbral-shield',
    name: 'Umbral Shield',
    trickTier: 'standard',
    description:
      "When the subject would be exposed to a harmful bright light or sunlight effect, the mesmerist can trigger this trick as a free action. The subject ignores all harmful effects of bright light for 1 minute and gains immunity to the dazzled condition for the duration of the effect.",
    source: 'pf1e-or',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-umbral-transformation',
    name: 'Umbral Transformation',
    trickTier: 'masterful',
    description:
      "When triggered, the subject briefly transforms into a living shadow for 1 round, gaining the benefits of the shadow body occult skill unlock. After the transformation ends, the subject becomes staggered for 1 round.",
    source: 'pf1e-or',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-unwitting-messenger',
    name: 'Unwitting Messenger',
    trickTier: 'standard',
    description:
      "When the mesmerist implants this trick, he specifies a recipient and recites a verbal message of up to five words per mesmerist level. The subject has no memory of the message, the recipient, or having received the trick. When the subject encounters the specified recipient, she automatically delivers the message verbatim without being aware she has done so. The subject is fooled by mundane disguises and most illusions — if the recipient is disguised when the subject encounters them, the message is not delivered. An undelivered message dissipates after 24 hours.",
    source: 'pf1e-oo',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-vanish-arrow',
    name: 'Vanish Arrow',
    trickTier: 'standard',
    description:
      "Before a ranged attack roll is made against the subject, the mesmerist can trigger this trick as a free action to attempt a Sleight of Hand check opposed by the attacker's Perception check. If the mesmerist succeeds, the attack automatically misses and the projectile or thrown weapon ends up in the mesmerist's possession. Thrown weapons grant the attacker a +4 bonus on the Perception check. Unusually massive ranged weapons and natural ranged attacks or spell-based ranged attacks cannot be affected. If the attacker is making a full attack, only the triggering attack is affected.",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-vision-of-blood',
    name: 'Vision of Blood',
    trickTier: 'masterful',
    description:
      "When the subject hits a creature with a weapon attack, natural weapon attack, or unarmed strike, the mesmerist can trigger this trick as a free action to make the target believe its wound is far more severe than it actually is. The target must succeed at a Will saving throw (DC 10 + half the mesmerist's level + the mesmerist's Charisma modifier) or become stunned for 1 round. If the triggering attack was a confirmed critical hit, the target receives no saving throw.",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-voice-of-reason',
    name: 'Voice of Reason',
    trickTier: 'standard',
    description:
      "When the subject attempts a saving throw to disbelieve a sight-based illusion, the mesmerist can trigger this trick as a free action (provided the mesmerist has not been affected by and has not already disbelieved the same illusion). The subject gains an insight bonus on the saving throw equal to the mesmerist's Charisma modifier. This trick cannot be used on illusions that do not allow a saving throw to disbelieve.",
    source: 'pf1e-hog',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-willful-ignorance',
    name: 'Willful Ignorance',
    trickTier: 'masterful',
    description:
      "When the subject attempts to tell a deliberate lie, the mesmerist can trigger this trick as a free action to make that specific lie undetectable by magical truth-detection. Any spell or effect that would detect lies or compel truth regarding that particular statement must succeed at a caster level check against a DC of 15 + the mesmerist's level, or it fails to detect the lie or force the subject to speak truthfully about that matter.",
    source: 'pf1e-oo',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  // ── MASTERFUL TRICKS (8 additional) ──────────────────────────────────────────
  {
    id: 'mesmerist-trick-allay-pain',
    name: 'Allay Pain',
    trickTier: 'masterful',
    description:
      "When the subject is hit with an attack that deals nonlethal damage, the mesmerist can trigger this trick as a free action to grant the subject DR 15/— against that attack. This DR applies only to the triggering attack. This trick costs 2 uses of the mesmerist trick ability. The mesmerist must be at least 12th level to select this trick.",
    source: 'pf1e-or',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-avian-escape',
    name: 'Avian Escape',
    trickTier: 'masterful',
    description:
      "When the subject takes damage from an enemy attack, the mesmerist can trigger this trick as a free action to transform the subject into a raven (as beast shape III). This is a polymorph effect. While transformed, the subject cannot speak or use any items, but can fly away to safety. The mesmerist must be at least 12th level to select this trick. This trick costs 2 uses of the mesmerist trick ability.",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-concealing-veil',
    name: 'Concealing Veil',
    trickTier: 'masterful',
    description:
      "When this trick is triggered, the subject is affected by a nondetection spell for 1 round per mesmerist level. This makes the subject difficult to detect via divination magic or scrying. This trick costs 2 uses of the mesmerist trick ability. The mesmerist must be at least 12th level to select this trick.",
    source: 'pf1e-oo',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-cursed-sanction',
    name: 'Cursed Sanction',
    trickTier: 'masterful',
    description:
      "When the subject is attacked or targeted by a spell that requires an attack roll, the mesmerist can trigger this trick as a free action. A visible circular symbol appears on the subject's forehead while this trick is implanted. When triggered, the attacker takes a -4 penalty on attack rolls, saving throws, ability checks, and skill checks for 1 minute per mesmerist level (Will negates; DC 10 + half the mesmerist's level + the mesmerist's Charisma modifier). This trick costs 2 uses of the mesmerist trick ability. The mesmerist must be at least 12th level to select this trick.",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-faked-death',
    name: 'Faked Death',
    trickTier: 'masterful',
    description:
      "When the subject is damaged by an attack, the mesmerist can trigger this trick as a free action. The subject appears to fall down dead via a programmed image illusion (figment and glamer components) and simultaneously becomes invisible as per the invisibility spell. The invisibility lasts for a number of rounds equal to the mesmerist's level or until the subject makes an attack, whichever comes first. The illusory corpse remains visible. Creatures can attempt a Will saving throw (DC 10 + half the mesmerist's level + the mesmerist's Charisma modifier) to disbelieve each component separately. This trick costs 2 uses of the mesmerist trick ability. The mesmerist must be at least 12th level to select this trick.",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-free-in-body',
    name: 'Free in Body',
    trickTier: 'masterful',
    description:
      "When the subject begins her turn while grappled or under a movement-impeding effect (such as entangle or hold person), the mesmerist can trigger this trick as a free action to grant the subject the benefits of freedom of movement for 1 minute. This allows the subject to move and attack normally despite magic that impedes movement or grappling effects. This trick costs 2 uses of the mesmerist trick ability. The mesmerist must be at least 12th level to select this trick.",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-greater-mask-misery',
    name: 'Greater Mask Misery',
    trickTier: 'masterful',
    description:
      "This trick functions as the mask misery trick, but can be used to ignore greater conditions as well. When the subject is affected by a greater condition (such as paralyzed, stunned, or unconscious), the mesmerist can trigger this trick to suppress that condition for 1d4 rounds. The subject must have the mask misery trick implanted in addition to this trick. This trick costs 2 uses of the mesmerist trick ability. The mesmerist must be at least 12th level to select this trick.",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mesmerist-trick-mental-fallback',
    name: 'Mental Fallback',
    trickTier: 'masterful',
    description:
      "When the subject is affected by a charm or compulsion effect from an enemy, the mesmerist can trigger this trick as a free action. For a number of rounds equal to the mesmerist's level (or until the triggering effect's duration ends, whichever is shorter), the subject acts as though the mesmerist had cast the charm or compulsion effect rather than the enemy, allowing the mesmerist to direct the subject's actions within the bounds of the effect. The mesmerist cannot implant this trick on himself. This trick costs 2 uses of the mesmerist trick ability. The mesmerist must be at least 12th level to select this trick.",
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
