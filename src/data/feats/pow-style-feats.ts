import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

/**
 * Path of War — Style Feats (feats 1–25 of ~57)
 * Source: d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/feats/
 *
 * Style feats come in chains of 3 per discipline (Style → intermediate → capstone).
 * ~19 discipline chains = ~57 style feats total.
 * Overflow: ~32 feats remain for future batches.
 *
 * Chains covered in this batch:
 *   1. Black Seraph (Expanded)
 *   2. Broken Blade (Core)
 *   3. Cursed Razor (Expanded)
 *   4. Elemental Flux (Expanded)
 *   5. Eternal Guardian (Expanded)
 *   6. Golden Lion (Core)
 *   7. Iron Tortoise (Core)
 *   8. Mithral Current (Expanded)
 *   9. Piercing Thunder (Expanded) — style feat only
 */
export const POW_STYLE_FEATS: FeatDefinition[] = [
  // ── Black Seraph Chain (Path of War: Expanded) ──────────────────────
  // 1
  {
    id: 'pow-black-seraph-style',
    name: 'Black Seraph Style',
    description:
      'Your dark fighting techniques grant you power over those who fear you. While using this style, you gain a +1 profane bonus to your AC and on saving throws against creatures that are shaken, frightened, panicked, or cowering. This bonus increases by +1 at 5th character level and at every five levels thereafter.',
    shortDescription:
      'Gain a scaling profane bonus to AC and saves against fear-afflicted creatures.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'intimidate', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'black-seraph' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'black_seraph'],
  },
  // 2
  {
    id: 'pow-black-seraphs-malevolence',
    name: "Black Seraph's Malevolence",
    description:
      'Your dark power punishes the fearful. While using Black Seraph Style, you treat creatures that are shaken, frightened, panicked, or cowering as if they were good-aligned for the purpose of dealing profane damage to them.',
    shortDescription:
      'Treat fear-afflicted creatures as good-aligned for profane damage.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-black-seraph-style' },
      { type: 'skill', skillId: 'intimidate', ranks: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'black_seraph'],
  },
  // 3
  {
    id: 'pow-black-seraph-annihilation',
    name: 'Black Seraph Annihilation',
    description:
      'Your terrifying presence overwhelms even the most stalwart minds. While using Black Seraph Style, creatures within 30 feet of you can be affected by fear effects even if they are normally immune to fear. Creatures within 30 feet of you that are normally immune to mind-affecting effects can still be affected by fear effects, although they gain a +5 resistance bonus on saves against such effects.',
    shortDescription:
      'Nearby creatures lose immunity to fear effects.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-black-seraph-style' },
      { type: 'feat', featId: 'pow-black-seraphs-malevolence' },
      { type: 'skill', skillId: 'intimidate', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'black_seraph'],
  },

  // ── Broken Blade Chain (Path of War) ────────────────────────────────
  // 4
  {
    id: 'pow-broken-blade-style',
    name: 'Broken Blade Style',
    description:
      'Your training in the Broken Blade discipline has made your unarmed strikes devastatingly effective against armor and objects. While using this style, your unarmed strikes ignore an amount of damage reduction and hardness equal to 1/2 your character level.',
    shortDescription:
      'Unarmed strikes ignore DR and hardness equal to half your level.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved-unarmed-strike' },
      { type: 'skill', skillId: 'acrobatics', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'broken-blade' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'broken_blade'],
  },
  // 5
  {
    id: 'pow-broken-blade-crush',
    name: 'Broken Blade Crush',
    description:
      'Your unarmed attacks can shatter armor with ease. While using Broken Blade Style, once per round when you hit an opponent wearing armor with an unarmed strike, you may attempt a sunder combat maneuver against that armor as a free action. This sunder attempt does not provoke attacks of opportunity.',
    shortDescription:
      'Sunder armor as a free action once per round when you hit with an unarmed strike.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-broken-blade-style' },
      { type: 'skill', skillId: 'acrobatics', ranks: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'broken_blade'],
  },
  // 6
  {
    id: 'pow-broken-blade-rhythm',
    name: 'Broken Blade Rhythm',
    description:
      'Your fluid martial arts allow you to chain strikes into devastating combat maneuvers. While using Broken Blade Style, once per round after you successfully hit an opponent with an unarmed strike, you may attempt a combat maneuver against any foe within melee reach as a free action. This combat maneuver attempt does not provoke attacks of opportunity.',
    shortDescription:
      'Attempt a free combat maneuver once per round after hitting with an unarmed strike.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-broken-blade-style' },
      { type: 'feat', featId: 'pow-broken-blade-crush' },
      { type: 'skill', skillId: 'acrobatics', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'broken_blade'],
  },

  // ── Cursed Razor Chain (Path of War: Expanded) ──────────────────────
  // 7
  {
    id: 'pow-cursed-razor-style',
    name: 'Cursed Razor Style',
    description:
      'Your cursed blade draws blood that refuses to stop flowing. While using this style, when you deal melee damage to a cursed creature, it suffers 2 points of bleed damage plus an additional 2 points for every four character levels you possess. This bleed damage persists until magical healing is applied or the target succeeds on a DC 15 Heal check.',
    shortDescription:
      'Deal scaling bleed damage to cursed creatures you hit in melee.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'spellcraft', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'cursed-razor' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'cursed_razor'],
  },
  // 8
  {
    id: 'pow-cursed-razor-plague',
    name: 'Cursed Razor Plague',
    description:
      'Your curses spread like a virulent plague. While using Cursed Razor Style, when you curse an opponent through means other than this feat, you can cause an additional opponent within 30 feet to gain the cursed condition for the same duration. The secondary target receives only the cursed condition itself, not any supplementary effects from the original curse. This is a supernatural ability.',
    shortDescription:
      'When you curse a creature, spread the cursed condition to a nearby creature.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-cursed-razor-style' },
      { type: 'skill', skillId: 'spellcraft', ranks: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'cursed_razor'],
  },
  // 9
  {
    id: 'pow-cursed-razor-massacre',
    name: 'Cursed Razor Massacre',
    description:
      'Your blade reaps through the cursed with terrible efficiency. While using Cursed Razor Style, once per round when you hit a cursed creature with a melee attack, you can make an additional melee attack against a different cursed creature within reach at your highest base attack bonus as a free action. You may use this ability even when it is not your turn.',
    shortDescription:
      'Make a free melee attack against another cursed creature when you hit one.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-cursed-razor-style' },
      { type: 'feat', featId: 'pow-cursed-razor-plague' },
      { type: 'skill', skillId: 'spellcraft', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'cursed_razor'],
  },

  // ── Elemental Flux Chain (Path of War: Expanded) ────────────────────
  // 10
  {
    id: 'pow-elemental-flux-style',
    name: 'Elemental Flux Style',
    description:
      'Your mastery of the elements allows you to shift between them with fluid grace. While using this style, you may change your active element once per round as a free action, allowing you to adapt your elemental combat approach on the fly.',
    shortDescription:
      'Change your active element once per round as a free action.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'spellcraft', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'elemental-flux' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'elemental_flux'],
  },
  // 11
  {
    id: 'pow-elemental-flux-shift',
    name: 'Elemental Flux Shift',
    description:
      'Changing elements fuels your attacks with residual energy. While using Elemental Flux Style, when you switch your active element, your next attack before the end of your turn deals bonus energy damage equal to your initiation modifier of the energy type associated with your previous active element. This is a supernatural ability.',
    shortDescription:
      'Deal bonus energy damage on your next attack after switching elements.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-elemental-flux-style' },
      { type: 'skill', skillId: 'spellcraft', ranks: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'elemental_flux'],
  },
  // 12
  {
    id: 'pow-elemental-flux-explosion',
    name: 'Elemental Flux Explosion',
    description:
      'Your weapons crackle with barely contained elemental fury. While using Elemental Flux Style, your weapons gain the burst weapon special ability corresponding to your active element\u2019s energy type (flaming burst for fire, icy burst for cold, shocking burst for electricity, or corrosive burst for acid). This is a supernatural ability.',
    shortDescription:
      'Your weapons gain the elemental burst property matching your active element.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-elemental-flux-style' },
      { type: 'feat', featId: 'pow-elemental-flux-shift' },
      { type: 'skill', skillId: 'spellcraft', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'elemental_flux'],
  },

  // ── Eternal Guardian Chain (Path of War: Expanded) ──────────────────
  // 13
  {
    id: 'pow-eternal-guardian-style',
    name: 'Eternal Guardian Style',
    description:
      'Your combat maneuvers carry the weight of ancient curses. While using this style, whenever you succeed on a combat maneuver attempt against an opponent, that opponent becomes cursed for one round. This is a supernatural ability.',
    shortDescription:
      'Successful combat maneuvers curse the target for one round.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'intimidate', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'eternal-guardian' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'eternal_guardian'],
  },
  // 14
  {
    id: 'pow-eternal-guardian-oath',
    name: 'Eternal Guardian Oath',
    description:
      'You bind cursed foes to face you alone. While using Eternal Guardian Style, you may expend a readied counter as an immediate action to cause all cursed creatures you threaten to suffer a \u20134 penalty on attack rolls against any target other than you until the start of your next turn.',
    shortDescription:
      'Expend a counter to penalize cursed creatures\u2019 attacks against others.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-eternal-guardian-style' },
      { type: 'skill', skillId: 'intimidate', ranks: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'eternal_guardian'],
  },
  // 15
  {
    id: 'pow-eternal-guardian-endurance',
    name: 'Eternal Guardian Endurance',
    description:
      'Destroying cursed foes replenishes your martial reserves. While using Eternal Guardian Style, once per round when you reduce a cursed opponent to 0 or fewer hit points, you can recover an expended maneuver as a free action.',
    shortDescription:
      'Recover a maneuver when you reduce a cursed creature to 0 hit points.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-eternal-guardian-style' },
      { type: 'feat', featId: 'pow-eternal-guardian-oath' },
      { type: 'skill', skillId: 'intimidate', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'eternal_guardian'],
  },

  // ── Golden Lion Chain (Path of War) ─────────────────────────────────
  // 16
  {
    id: 'pow-golden-lion-style',
    name: 'Golden Lion Style',
    description:
      'Your coordinated fighting style lets you capitalize on your allies\u2019 missed attacks. While using this style, once per round when an ally other than yourself misses a melee attack against an opponent you both flank, you may make an attack of opportunity against that opponent.',
    shortDescription:
      'Make an attack of opportunity when an ally misses a flanked opponent.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'diplomacy', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'golden-lion' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'golden_lion'],
  },
  // 17
  {
    id: 'pow-golden-lion-charge',
    name: 'Golden Lion Charge',
    description:
      'You rush to the defense of your allies with leonine fury. While using Golden Lion Style, when an opponent within 30 feet misses an ally with an attack, you may expend a readied counter as an immediate action to move up to your speed toward that opponent. If your movement ends with the opponent within melee reach, you may make an attack of opportunity against that opponent.',
    shortDescription:
      'Expend a counter to move toward and attack an enemy that missed an ally.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-golden-lion-style' },
      { type: 'skill', skillId: 'diplomacy', ranks: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'golden_lion'],
  },
  // 18
  {
    id: 'pow-golden-lion-command',
    name: 'Golden Lion Command',
    description:
      'Your commanding presence bolsters all nearby allies as you strike. While using Golden Lion Style, you can expend a readied boost as a swift action to grant all allies within 30 feet 5 temporary hit points each time you make an attack this round. These temporary hit points stack with themselves and last for one round.',
    shortDescription:
      'Expend a boost to grant allies temporary hit points with each attack you make.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-golden-lion-style' },
      { type: 'feat', featId: 'pow-golden-lion-charge' },
      { type: 'skill', skillId: 'diplomacy', ranks: 11 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['path_of_war', 'style', 'golden_lion'],
  },

  // ── Iron Tortoise Chain (Path of War) ───────────────────────────────
  // 19
  {
    id: 'pow-iron-tortoise-style',
    name: 'Iron Tortoise Style',
    description:
      'Your shield strikes land with the force of a much larger combatant. While using this style, you deal damage with shield bash attacks as though you were one size category larger than you actually are. This stacks with other effects that increase your effective size or your weapon\u2019s effective size.',
    shortDescription:
      'Shield bashes deal damage as if you were one size larger.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 3 },
      { type: 'proficiency', proficiency: 'shields' },
      { type: 'discipline_access', disciplineId: 'iron-tortoise' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'iron_tortoise'],
  },
  // 20
  {
    id: 'pow-iron-tortoise-shell',
    name: 'Iron Tortoise Shell',
    description:
      'Your defensive counters grant you exceptional reflexive agility. While using Iron Tortoise Style, whenever you initiate a counter, you gain evasion (as the rogue class feature) until the end of your next turn. If you already have evasion, you gain improved evasion instead for the same duration.',
    shortDescription:
      'Gain evasion until end of next turn when you initiate a counter.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-iron-tortoise-style' },
      { type: 'skill', skillId: 'bluff', ranks: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'iron_tortoise'],
  },
  // 21
  {
    id: 'pow-iron-tortoise-snap',
    name: 'Iron Tortoise Snap',
    description:
      'Your shield bashes set up devastating follow-up attacks. While using Iron Tortoise Style, when you hit a creature with a shield bash, you may make an additional attack with a different weapon you are wielding at your highest base attack bonus against that same creature. You may use this ability to make up to two additional attacks per round.',
    shortDescription:
      'Make a bonus weapon attack when you hit with a shield bash, up to twice per round.',
    source: 'Path of War',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-iron-tortoise-style' },
      { type: 'feat', featId: 'pow-iron-tortoise-shell' },
      { type: 'skill', skillId: 'bluff', ranks: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'iron_tortoise'],
  },

  // ── Mithral Current Chain (Path of War: Expanded) ───────────────────
  // 22
  {
    id: 'pow-mithral-current-style',
    name: 'Mithral Current Style',
    description:
      'Your graceful swordplay blends dance and deception. While using this style and carrying a sheathed weapon within reach, you can make a feint as a swift action. You may substitute a Perform (dance) check for the Bluff check when feinting in this manner.',
    shortDescription:
      'Feint as a swift action using Perform (dance) while carrying a sheathed weapon.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'quick-draw' },
      { type: 'skill', skillId: 'perform-dance', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'mithral-current' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'mithral_current'],
  },
  // 23
  {
    id: 'pow-mithral-current-flow',
    name: 'Mithral Current Flow',
    description:
      'You move like quicksilver, slipping away from attacks that fail to connect. While using Mithral Current Style, whenever an opponent misses you with a melee attack, you can move up to 10 feet as a free action without provoking attacks of opportunity, even if it is not your turn. You may use this ability once per round.',
    shortDescription:
      'Move 10 feet without provoking when an opponent misses you with a melee attack.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-mithral-current-style' },
      { type: 'skill', skillId: 'perform-dance', ranks: 7 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'mithral_current'],
  },
  // 24
  {
    id: 'pow-mithral-current-slice',
    name: 'Mithral Current Slice',
    description:
      'Your quickdraw strikes exploit weaknesses with silver-like precision. While using Mithral Current Style, on the first round in which you draw a weapon and attack with it, your first attack deals damage as though the target were vulnerable to silver, increasing the damage dealt by 50%.',
    shortDescription:
      'First attack after drawing a weapon treats the target as vulnerable to silver.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'pow-mithral-current-style' },
      { type: 'feat', featId: 'pow-mithral-current-flow' },
      { type: 'skill', skillId: 'perform-dance', ranks: 11 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['path_of_war', 'style', 'mithral_current'],
  },

  // ── Piercing Thunder Chain (Path of War: Expanded) — style feat only ─
  // 25
  {
    id: 'pow-piercing-thunder-style',
    name: 'Piercing Thunder Style',
    description:
      'Your mastery of reach weapons turns the battlefield into a deadly killing ground. While using this style and wielding a reach weapon, opponents provoke an attack of opportunity from you when they enter any square you threaten. If an opponent would also provoke an attack of opportunity by leaving a threatened square at the same time, you make only a single attack of opportunity rather than multiple.',
    shortDescription:
      'Opponents provoke attacks of opportunity when entering your threatened squares with a reach weapon.',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'skill', skillId: 'acrobatics', ranks: 3 },
      { type: 'discipline_access', disciplineId: 'piercing-thunder' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['path_of_war', 'style', 'piercing_thunder'],
  },
];
