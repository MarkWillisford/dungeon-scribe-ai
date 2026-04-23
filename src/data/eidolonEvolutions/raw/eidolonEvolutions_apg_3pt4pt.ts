// APG 3-Point and 4-Point Eidolon Evolutions | count: 21 (11 × 3pt, 10 × 4pt)
// Sources: Advanced Player's Guide (pf1e-apg), Ultimate Magic (pf1e-um),
//   Champions of Purity (pf1e-champions-purity), Champions of Corruption (pf1e-champions-corruption)
// All evolutions here are APG summoner (summoner: 'apg' not set unless exclusive to APG;
//   most 3pt/4pt evolutions are not also present in the Unchained list, so no summoner field is set
//   unless the AoN page specifically marks them APG-only).
// EidolonEvolutionEntry = ClassOptionBase + evolutionPointCost + stacking + effects + summoner + formRestrictions

import type { EidolonEvolutionEntry } from '@/types/classOptions';

export const eidolonEvolutionsApg3pt4pt: EidolonEvolutionEntry[] = [
  // ── 3-Point Evolutions ────────────────────────────────────────────────────

  {
    id: 'evolution-blindsense',
    name: 'Blindsense',
    description:
      "An eidolon's senses become incredibly acute, giving it blindsense out to a range of 30 feet. This ability allows the eidolon to pinpoint the location of creatures that it cannot see without having to make a Perception check, but such creatures still have total concealment from the eidolon. The summoner must be at least 9th level before selecting this evolution.",
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'grant_sense',
        target: 'blindsense',
        value: 30,
        source: 'Eidolon Evolution — Blindsense',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 9, class: 'summoner' }],
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-burrow',
    name: 'Burrow',
    description:
      'An eidolon grows thick and gnarled claws, allowing it to move through the earth. The eidolon gains a burrow speed equal to 1/2 its base speed. It can use this speed to move through dirt, clay, sand, and earth. It does not leave a hole behind, nor is its passage marked on the surface. The summoner must be at least 9th level before selecting this evolution.',
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'grant_movement',
        target: 'burrow',
        value: 15,
        source: 'Eidolon Evolution — Burrow',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 9, class: 'summoner' }],
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-celestial-appearance',
    name: 'Celestial Appearance',
    description:
      'The eidolon appears as a celestial creature and manifests some of the abilities of a celestial. Spells and effects that target creatures with the good subtype or have specific effects against such creatures affect the eidolon as if it were a celestial. The eidolon gains a +2 bonus on saves against disease, petrification, poison, and electricity spells and effects. It also gains spell resistance equal to 5 + its HD against spells with the evil descriptor. At 7th level, by spending 2 additional evolution points, this bonus on saves is increased to +4 and the spell resistance is extended to affect any spells and effects from evil creatures. At 12th level, by spending 2 additional evolution points, this protection is increased to immunity against these attacks and the spell resistance is increased to 11 + its HD (the summoner must pay for the 7th-level upgrade before paying for this 12th-level upgrade). The summoner must be good-aligned to select this evolution.',
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'saving_throw.disease_petrification_poison_electricity',
        value: 2,
        source: 'Eidolon Evolution — Celestial Appearance',
      },
      {
        type: 'special',
        target: 'special.spell-resistance-vs-evil',
        value: 0,
        source: 'Eidolon Evolution — Celestial Appearance',
      },
    ],
    prerequisites: [{ type: 'special', description: 'Summoner must be good-aligned' }],
    source: 'pf1e-champions-purity',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-damage-reduction',
    name: 'Damage Reduction',
    description:
      "An eidolon's body becomes resistant to harm, granting it damage reduction. Choose one alignment: chaotic, evil, good, or lawful. The eidolon gains DR 5 that can be bypassed by weapons that possess the chosen alignment. The alignment must be opposite to one of the alignments possessed by the eidolon. At 12th level, by spending 2 additional evolution points, the damage reduction increases to 10. The summoner must be at least 9th level before selecting this evolution.",
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.damage-reduction',
        value: 5,
        source: 'Eidolon Evolution — Damage Reduction',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 9, class: 'summoner' }],
    summoner: 'apg',
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-fiendish-appearance',
    name: 'Fiendish Appearance',
    description:
      'The eidolon appears as a fiendish creature and manifests some of the abilities of a fiend. Spells and effects that target creatures with the evil subtype or have specific effects against such creatures affect the eidolon as if it had that subtype. The eidolon gains a +2 bonus on saving throws against acid, disease, fire, and poison spells and effects. It also gains an amount of spell resistance equal to 5 + its HD against spells with the good descriptor. The summoner must be evil-aligned to select this evolution. At 7th level, by spending 2 additional evolution points, the summoner increases the bonus on saving throws to +4 and extends the spell resistance to affect any spells and spell-like abilities cast by good creatures. At 12th level, by spending 2 additional evolution points, the eidolon gains immunity to acid, disease, fire, and poison. Its spell resistance increases to an amount equal to 11 + its HD. (The summoner must pay for the 7th-level upgrade before paying for this 12th-level upgrade.)',
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'saving_throw.acid_disease_fire_poison',
        value: 2,
        source: 'Eidolon Evolution — Fiendish Appearance',
      },
      {
        type: 'special',
        target: 'special.spell-resistance-vs-good',
        value: 0,
        source: 'Eidolon Evolution — Fiendish Appearance',
      },
    ],
    prerequisites: [{ type: 'special', description: 'Summoner must be evil-aligned' }],
    source: 'pf1e-champions-corruption',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-frightful-presence',
    name: 'Frightful Presence',
    description:
      "An eidolon becomes unsettling to its foes, gaining the frightful presence ability. The eidolon can activate this ability as part of an offensive action, such as a charge or attack. Opponents within 30 feet of the eidolon must make a Will save or become shaken for 3d6 rounds. The DC of this save is equal to 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier. If the eidolon has at least 4 more Hit Dice than an opponent, that opponent becomes frightened instead. The summoner must be at least 11th level before selecting this evolution.",
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.frightful-presence',
        value: 0,
        source: 'Eidolon Evolution — Frightful Presence',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 11, class: 'summoner' }],
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-major-magic',
    name: 'Major Magic',
    description:
      "An eidolon learns to cast a major spell as a spell-like ability. Select one spell from the following list: acid arrow, cure moderate wounds, darkness, daze monster, glide, invisibility (self only), lesser restoration, levitate, minor image, scorching ray, see invisibility, or spider climb. This spell can be cast once per day as a spell-like ability. At 10th level, this spell can be cast three times per day by spending 2 additional evolution points. The caster level for this evolution is equal to the eidolon's Hit Dice – 2. The save DC for this spell is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier. The eidolon must have a Charisma score of at least 12 and must possess the minor magic evolution to take this evolution. The summoner must be at least 7th level before selecting this evolution. This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new spell from the above list.",
    evolutionPointCost: 3,
    stacking: { canRepeat: true, requiresDifferentMetadata: 'spell' },
    effects: [
      {
        type: 'special',
        target: 'special.major-magic',
        value: 0,
        source: 'Eidolon Evolution — Major Magic',
      },
    ],
    summoner: 'apg',
    prerequisites: [
      { type: 'level', minimum: 7, class: 'summoner' },
      { type: 'ability_score', ability: 'CHA', minimum: 12 },
      { type: 'evolution', evolutionId: 'evolution-minor-magic' },
    ],
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-sacrifice',
    name: 'Sacrifice',
    description:
      'An eidolon can sacrifice its own hit points to heal another creature. As a standard action, the eidolon can sacrifice up to 2 hit points per Hit Die and then touch the target creature, thereby healing the creature for half the amount sacrificed.',
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.sacrifice',
        value: 0,
        source: 'Eidolon Evolution — Sacrifice',
      },
    ],
    source: 'pf1e-champions-purity',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-see-in-darkness',
    name: 'See in Darkness',
    description:
      'An eidolon can see perfectly in darkness of any kind, including that created by deeper darkness. The summoner must be at least 9th level before selecting this evolution.',
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.see-in-darkness',
        value: 0,
        source: 'Eidolon Evolution — See in Darkness',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 9, class: 'summoner' }],
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-swallow-whole',
    name: 'Swallow Whole',
    description:
      "An eidolon gains the swallow whole ability, giving it the ability to consume its foes. If the eidolon begins its turn with a creature grappled using its bite attack (see the grab evolution), it can attempt a combat maneuver check to swallow the creature. The creature can be up to one size category smaller than the eidolon. Swallowed creatures take damage equal to the eidolon's bite damage each round plus 1d6 points of bludgeoning damage. A swallowed creature keeps the grappled condition, but can attempt to cut its way free with a light slashing or piercing weapon. The amount of damage needed to cut free is equal to 1/10 the eidolon's total hit points. The eidolon's AC against these attacks is equal to 10 + 1/2 its natural armor bonus. If a swallowed creature cuts its way out, the eidolon loses this ability until it heals this damage. Alternatively, the swallowed creature can attempt to escape the grapple as normal. Success indicates that it has returned to the eidolon's mouth, where it can attempt to escape or be swallowed again. The eidolon must possess the grab evolution, tied to a bite attack, to take this evolution. The summoner must be at least 9th level before selecting this evolution.",
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.swallow-whole',
        value: 0,
        source: 'Eidolon Evolution — Swallow Whole',
      },
    ],
    prerequisites: [
      { type: 'level', minimum: 9, class: 'summoner' },
      { type: 'evolution', evolutionId: 'evolution-grab' },
    ],
    summoner: 'apg',
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-web',
    name: 'Web',
    description:
      "An eidolon gains a pair of spinnerets, giving it the ability to spin webs. The eidolon can use these webs to support itself plus up to one creature of the same size. It can throw webbing as a ranged touch attack up to 8 times per day, entangling a creature up to one size larger than the eidolon. The webbing has a range of 50 feet and a 10-foot range increment. Creatures entangled by the web can escape with an Escape Artist check or a Strength check (at a –4 penalty). The DC of these checks is equal to 10 + 1/2 the eidolon's HD + the eidolon's Con modifier. The webs have a Hardness of 0 and a number of hit points equal to the eidolon's total Hit Dice. The eidolon can climb its own webs at its climb speed and can pinpoint any creature touching its webs. The eidolon must possess the climb evolution to take this evolution. The summoner must be at least 7th level before selecting this evolution.",
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.web',
        value: 0,
        source: 'Eidolon Evolution — Web',
      },
    ],
    prerequisites: [
      { type: 'level', minimum: 7, class: 'summoner' },
      { type: 'evolution', evolutionId: 'evolution-climb' },
    ],
    summoner: 'apg',
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ── 4-Point Evolutions ────────────────────────────────────────────────────

  {
    id: 'evolution-blindsight',
    name: 'Blindsight',
    description:
      "An eidolon's senses sharpen even further, granting it blindsight out to a range of 30 feet. The eidolon can maneuver and attack as normal, ignoring darkness, invisibility, and most forms of concealment as long as it has line of effect to the target. The eidolon must possess the blindsense evolution to take this evolution. The summoner must be at least 11th level before selecting this evolution.",
    evolutionPointCost: 4,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'grant_sense',
        target: 'blindsight',
        value: 30,
        source: 'Eidolon Evolution — Blindsight',
      },
    ],
    prerequisites: [
      { type: 'level', minimum: 11, class: 'summoner' },
      { type: 'evolution', evolutionId: 'evolution-blindsense' },
    ],
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-breath-weapon',
    name: 'Breath Weapon',
    description:
      "An eidolon learns to exhale a cone or line of magical energy, gaining a breath weapon. Select either acid, cold, electricity, or fire. The eidolon can breathe a 30-foot cone (or 60-foot line) that deals 1d6 points of damage of the selected type per HD it possesses. Those caught in the breath weapon can attempt a Reflex save for half damage. The DC is equal to 10 + 1/2 the eidolon's HD + the eidolon's Constitution modifier. The eidolon can use this ability once per day. The eidolon can use this ability 1 additional time per day by spending an additional 1 evolution point (maximum 3/day). The summoner must be at least 9th level before selecting this evolution.",
    evolutionPointCost: 4,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.breath-weapon',
        value: 0,
        source: 'Eidolon Evolution — Breath Weapon',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 9, class: 'summoner' }],
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-dimension-door',
    name: 'Dimension Door',
    description:
      "An eidolon learns to cast dimension door as a spell-like ability once per day. The caster level for this evolution is equal to the eidolon's Hit Dice. The save DC for this spell is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier. The eidolon must have a Charisma score of at least 14 to take this evolution. The summoner must be at least 13th level before selecting this evolution.",
    evolutionPointCost: 4,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.dimension-door',
        value: 0,
        source: 'Eidolon Evolution — Dimension Door',
      },
    ],
    prerequisites: [
      { type: 'level', minimum: 13, class: 'summoner' },
      { type: 'ability_score', ability: 'CHA', minimum: 14 },
    ],
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-fast-healing',
    name: 'Fast Healing',
    description:
      "An eidolon's body gains the ability to heal wounds very quickly, giving it fast healing 1. The eidolon heals 1 point of damage each round, just like natural healing. Fast healing does not restore hit points lost due to starvation, thirst, or suffocation, nor does it allow the eidolon to regrow lost body parts (or to reattach severed parts). Fast healing functions as long as the eidolon is alive. This fast healing does not function when the eidolon is not on the same plane as its summoner. The summoner can spend 2 additional evolution points per +1 fast healing to increase the fast healing rate (maximum fast healing 5). The summoner must be at least 11th level before selecting this evolution.",
    evolutionPointCost: 4,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.fast-healing',
        value: 1,
        source: 'Eidolon Evolution — Fast Healing',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 11, class: 'summoner' }],
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-incorporeal-form',
    name: 'Incorporeal Form',
    description:
      'Once per day, an eidolon can become incorporeal for 1 round per summoner level. While in this form, the eidolon gains the incorporeal subtype and incorporeal quality. It only takes half damage from corporeal sources as long as they are magic (it takes no damage from nonmagical weapons and objects). Likewise, its spells or spell-like abilities deal only half damage to corporeal creatures. The summoner must be at least 15th level before selecting this evolution.',
    evolutionPointCost: 4,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.incorporeal-form',
        value: 0,
        source: 'Eidolon Evolution — Incorporeal Form',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 15, class: 'summoner' }],
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-large',
    name: 'Large',
    description:
      'An eidolon grows in size, becoming Large. The eidolon gains a +8 bonus to Strength, a +4 bonus to Constitution, and a +2 bonus to its natural armor. It takes a –2 penalty to its Dexterity. This size change also gives the creature a –1 size penalty to its AC and on attack rolls, a +1 bonus to its CMB and CMD, a –2 penalty on Fly skill checks, and a –4 penalty on Stealth skill checks. If the eidolon has the biped base form, it also gains 10-foot reach. Any reach evolutions the eidolon possesses are added to this total. The eidolon must be Medium to take this evolution. The summoner must be at least 8th level before selecting this evolution. If 6 additional evolution points are spent, the eidolon instead becomes Huge. The eidolon gains a +16 bonus to Strength, a +8 bonus to Constitution, and a +5 bonus to its natural armor. It takes a –4 penalty to its Dexterity. This size change also gives the creature a –2 size penalty to its AC and attack rolls, a +2 bonus to its CMB and CMD, 10-foot reach, a –4 penalty on Fly skill checks, and a –8 penalty on Stealth skill checks. If the eidolon has the biped base form, its reach increases to 15 feet (10 feet for all other base forms). Any reach evolutions the eidolon possesses are added to this total. These bonuses and penalties replace, and do not stack with, those gained from becoming Large. The summoner must be at least 13th level before selecting this option.',
    evolutionPointCost: 4,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'ability.str',
        value: 8,
        source: 'Eidolon Evolution — Large',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'ability.con',
        value: 4,
        source: 'Eidolon Evolution — Large',
      },
      {
        type: 'bonus',
        bonusType: 'natural',
        target: 'ac.natural',
        value: 2,
        source: 'Eidolon Evolution — Large',
      },
      {
        type: 'penalty',
        target: 'ability.dex',
        value: -2,
        source: 'Eidolon Evolution — Large',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 8, class: 'summoner' }],
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-lifesense',
    name: 'Lifesense',
    description:
      'An eidolon can pinpoint living creatures with ease. The eidolon notices and locates living creatures within 60 feet, just as if it possessed the blindsight evolution. The eidolon must possess the undead appearance evolution to take this evolution. The summoner must be at least 11th level before selecting this evolution.',
    evolutionPointCost: 4,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'grant_sense',
        target: 'lifesense',
        value: 60,
        source: 'Eidolon Evolution — Lifesense',
      },
    ],
    prerequisites: [
      { type: 'level', minimum: 11, class: 'summoner' },
      { type: 'evolution', evolutionId: 'evolution-undead-appearance' },
    ],
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-no-breath',
    name: 'No Breath',
    description:
      'An eidolon no longer needs to breathe. The eidolon does not breathe, and is immune to effects that require breathing (such as inhaled poison). This does not give immunity to cloud or gas attacks that do not require breathing. The summoner must be at least 11th level before selecting this evolution.',
    evolutionPointCost: 4,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.no-breath',
        value: 0,
        source: 'Eidolon Evolution — No Breath',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 11, class: 'summoner' }],
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-spell-resistance',
    name: 'Spell Resistance',
    description:
      "An eidolon is protected against magic, gaining spell resistance. The eidolon's spell resistance is equal to 11 + the summoner's level. This spell resistance does not apply to spells cast by the summoner. The summoner must be at least 9th level before selecting this evolution.",
    evolutionPointCost: 4,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.spell-resistance',
        value: 0,
        source: 'Eidolon Evolution — Spell Resistance',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 9, class: 'summoner' }],
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-ultimate-magic',
    name: 'Ultimate Magic',
    description:
      "An eidolon learns to cast a powerful spell as a spell-like ability. Select one spell from the following list: arcane sight, create food and water, cure serious wounds, daylight, fireball, fly, gaseous form, lightning bolt, major image, stinking cloud, tongues, or water breathing. This spell can be cast once per day as a spell-like ability. The caster level for this evolution is equal to the eidolon's Hit Dice – 2. The save DC for this spell is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier. The eidolon must have a Charisma score of at least 13 and must possess the major magic evolution to take this evolution. The summoner must be at least 11th level before selecting this evolution. This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new spell from the above list.",
    evolutionPointCost: 4,
    stacking: { canRepeat: true, requiresDifferentMetadata: 'spell' },
    effects: [
      {
        type: 'special',
        target: 'special.ultimate-magic',
        value: 0,
        source: 'Eidolon Evolution — Ultimate Magic',
      },
    ],
    summoner: 'apg',
    prerequisites: [
      { type: 'level', minimum: 11, class: 'summoner' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'evolution', evolutionId: 'evolution-major-magic' },
    ],
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
