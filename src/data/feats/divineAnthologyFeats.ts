import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const DIVINE_ANTHOLOGY_FEATS: FeatDefinition[] = [
  {
    id: 'bravery_in_action',
    name: 'Bravery in Action',
    description:
      'Your courage quickens your reflexes. You add the bonus from bravery to your initiative checks.',
    shortDescription: 'Add bravery bonus to initiative checks',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'bravery' },
      { type: 'special', description: 'Must worship Cayden Cailean' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'initiative',
        value: 'bravery_bonus',
        source: 'Bravery in Action',
      },
    ],
    activationMode: 'passive',
    tags: ['bravery', 'initiative', 'Cayden Cailean', 'fighter'],
  },
  {
    id: 'crowd_control',
    name: 'Crowd Control',
    description:
      'You and your allies are trained to prevent enemies from moving around or through your formation. You gain a +2 competence bonus to your CMD when enemies attempt to use Acrobatics to move through your threatened squares. This bonus increases by 2 for each ally within your reach that also has this feat.',
    shortDescription:
      '+2 competence CMD vs. Acrobatics through threatened squares; +2 per allied feat-holder in reach',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'bab', minimum: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'CMD.vs_acrobatics_through_threatened',
        value: 2,
        source: 'Crowd Control',
        condition: {
          type: 'custom',
          params: { trigger: 'enemy_acrobatics_through_threatened_square' },
          description: 'When an enemy attempts Acrobatics to move through your threatened squares',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['teamwork', 'CMD', 'formation', 'Torag'],
  },
  // diverse_obedience (ISG) = access different prestige class boons — different feat, different mechanics
  // This DA version = +2 effective HD for boon availability + choose from any boon category
  {
    id: 'diverse_obedience_da',
    name: 'Diverse Obedience',
    description:
      "Your devotion makes you more flexible in accessing your deity's divine boons. You are treated as though you had 2 more Hit Dice than you actually do when determining which boons from your Deific Obedience feat are available to you. This does not accelerate boons tied to prestige class levels. In addition, whenever you gain a new boon through Deific Obedience, you may choose that boon from the evangelist, exalted, or sentinel boon categories. Each such choice is permanent.",
    shortDescription: 'Treated as +2 HD for Deific Obedience boons; choose boons from any category',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'deific_obedience' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 5 },
      { type: 'special', description: 'Alignment must match your worshiped deity' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'deific_obedience.effective_hit_dice',
        value: 2,
        source: 'Diverse Obedience',
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'deific obedience', 'boon', 'hit dice'],
  },
  {
    id: 'divine_communion',
    name: 'Divine Communion',
    description:
      "You can call upon your deity for guidance. Once per day as a swift action, you can ask your deity whether a particular course of action would please them and what its alignment implications would be. If the GM determines the action is in keeping with your deity's wishes, you gain an insight bonus equal to your Wisdom modifier (minimum +1) on any one d20 roll directly related to that action, made during the current round. You gain one additional use of this ability per day for every 3 ranks you have in Knowledge (religion), to a maximum of 6 times per day.",
    shortDescription:
      'Swift action: gain WIS insight bonus on one d20 roll if action pleases deity',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'special', description: "Alignment must match your worshiped deity's alignment" },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'd20_roll.deity_approved_action',
        value: 'WIS_modifier',
        source: 'Divine Communion',
        condition: {
          type: 'custom',
          params: { trigger: 'deity_approved_action', action_cost: 'swift' },
          description:
            "When acting in accordance with your deity's wishes (swift action to activate, once per day per 3 Knowledge (religion) ranks)",
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['divine', 'insight', 'guidance', 'wisdom', 'deity'],
  },
  {
    id: 'divine_fighting_technique',
    name: 'Divine Fighting Technique',
    description:
      "You have learned your deity's favored fighting style. You gain access to your patron deity's divine fighting technique and all of its associated benefits for which you qualify. Clerics can sacrifice a domain power to gain access to their deity's technique without meeting its prerequisites. Inquisitors can sacrifice a domain power or teamwork feat bonus to gain access. Warpriests can sacrifice a minor or major blessing to gain access to a technique's initial or advanced benefit respectively.\n\nThe following techniques are available:\n\n**Abadar's Crossbow (Initial):** You can perform a ranged steal combat maneuver with a crossbow, using your Dexterity modifier in place of your Strength modifier. **(Advanced, requires Rapid Reload, BAB +10):** You can perform a ranged dirty trick maneuver to pin a creature to a surface.\n\n**Asmodeus's Mandate (Initial, light or heavy mace):** A critical threat with a mace sickens the target for 1 round; a confirmed critical extends this to 2 rounds. **(Advanced, requires Int 13, Combat Expertise, Improved Feint, BAB +10 or Bluff 10):** After hitting a Dexterity-denied target, perform a dirty trick as a swift action.\n\n**Calistria's Poisoned Lash (Initial, whip):** Apply poison to your whip as a move action without risk of poisoning yourself; delivers contact poison on combat maneuvers or attacks. **(Advanced, requires Whip Mastery, BAB +10):** Apply poison as a swift action; stack up to 3 doses of poison.\n\n**Cayden Cailean's Blade and Tankard (Initial):** Wield tankards as light maces and use dirty tricks with them without provoking attacks of opportunity. **(Advanced, requires Two-Weapon Fighting feats, BAB +10):** Refill a tankard as a swift action; gain +2 on dirty trick maneuvers.\n\n**Desna's Shooting Star (Initial, starknife):** Add your Charisma bonus to starknife attack and damage rolls instead of Strength or Dexterity. **(Advanced, requires Dex 17, Point-Blank Shot, Rapid Shot, BAB +11 or Sleight of Hand 11 ranks):** As a full-round action, throw a starknife multiple times (roll 1d4 for number of strikes).\n\n**Erastil's Distracting Shot (Initial, longbow or shortbow):** Your ranged attack grants an adjacent ally a +2 bonus to AC until your next turn. **(Advanced, requires Dex 17, Point-Blank Shot, Precise Shot, BAB +10):** A hit grants +4 AC to the selected ally and +2 AC to allies within 30 feet.\n\n**Gorum's Swordmanship (Initial, greatsword):** Apply Vital Strike to charge attacks; reapply the extra damage to your first attack of opportunity after a charge. **(Advanced, requires Str 13, Cleave, Power Attack, Vital Strike, BAB +10):** Vital Strike damage counts as continuous injury damage for concentration checks.\n\n**Iomedae's Inspiring Sword (Initial, longsword):** As a full-round action, display your longsword to grant allies a +2 sacred bonus to attack rolls, saves, and skill checks. **(Advanced, requires Dazzling Display, Weapon Focus (longsword), BAB +10):** Grant the bonus as a standard action attack.\n\n**Irori's Perfected Fist (Initial, unarmed strike):** Take a -2 penalty to deal average unarmed damage instead of rolling. **(Advanced, requires Critical Focus, Weapon Focus (unarmed strike), BAB +10 or monk 10):** Remove the penalty; confirmed critical deals maximum weapon damage.\n\n**Lamashtu's Carving (Initial, falchion or kukri):** As a standard action, make an attack converting your ability modifier to bleed damage instead of hit point damage. **(Advanced, requires Str 13, Dazing Assault, Power Attack, BAB +10):** Bleeding targets hit must succeed at a Fortitude save or become staggered for 1 round.\n\n**Norgorber's Silent Shiv (Initial):** Your first attack against an unaware target deals damage as if the weapon were one size larger. **(Advanced, requires Stealth 10 ranks):** As a swift action, attempt a Stealth check; success treats the target as unaware for this technique.\n\n**Rovagug's Thunder (Initial, greataxe or natural attacks):** A successful dirty trick deals 1d6 nonlethal damage plus your Charisma modifier; beating CMD by 5+ imposes an additional penalty. **(Advanced, requires Power Attack, BAB +10):** Ignore hardness and damage reduction equal to your Power Attack penalty.\n\n**Sarenrae's Mercy (Initial, scimitar):** Apply nonlethal damage with a scimitar without penalty; other damage sources can also become nonlethal. **(Advanced, requires Great Fortitude, Weapon Focus (scimitar), Heal 10 ranks):** Regain 1d6 HP per round when dealing nonlethal damage (2d6 with a scimitar).\n\n**Torag's Patient Strikes (Initial, warhammer):** Add your Wisdom bonus to attacks of opportunity made with a warhammer; make attacks of opportunity while flat-footed. **(Advanced, requires Vital Strike, Weapon Focus (warhammer), BAB +10):** Declare an attack of opportunity to apply Vital Strike; a critical hit grants a free disarm or trip attempt.\n\n**Urgathoa's Hunger (Initial, scythe):** As a swift action, gain temporary hit points equal to damage dealt with a scythe (usable a number of times per day equal to your Wisdom modifier). **(Advanced, requires Heal 10 ranks, BAB +7):** As a swift action, force a target to immediately attempt saves against their current disease afflictions.\n\n**Zon-Kuthon's Flensing (Initial, spiked chain):** Attacks with a spiked chain sicken both you and the target; the target must succeed at a Fortitude save or the sickened condition lasts longer. **(Advanced, BAB +10):** Any sickening effect applied via the chain requires a Fortitude save or the target is nauseated for 1 round first.",
    shortDescription:
      "Access your patron deity's divine fighting style; initial and advanced technique benefits based on deity",
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Must worship a single patron deity that has an established divine fighting technique',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    choices: [
      {
        type: 'custom',
        label: "Patron Deity's Fighting Technique",
        options: [
          "Abadar's Crossbow",
          "Asmodeus's Mandate",
          "Calistria's Poisoned Lash",
          "Cayden Cailean's Blade and Tankard",
          "Desna's Shooting Star",
          "Erastil's Distracting Shot",
          "Gorum's Swordmanship",
          "Iomedae's Inspiring Sword",
          "Irori's Perfected Fist",
          "Lamashtu's Carving",
          "Norgorber's Silent Shiv",
          "Rovagug's Thunder",
          "Sarenrae's Mercy",
          "Torag's Patient Strikes",
          "Urgathoa's Hunger",
          "Zon-Kuthon's Flensing",
        ],
        affectsEffects: true,
      },
    ],
    tags: ['divine', 'deity', 'favored weapon', 'combat style', 'technique'],
  },
  {
    id: 'minor_miracle',
    name: 'Minor Miracle',
    description:
      "Your faith allows you to perform small divine miracles. Select two domains associated with your deity. Once per day, by displaying your holy symbol and offering a supplication, you can cast the 1st-level spell associated with either of the two chosen domains as a spell-like ability. Your caster level for this ability equals your total Hit Dice, and the DC of any saving throw equals 10 + 1 + your Charisma modifier. You choose which domain's spell to use when you activate this ability.",
    shortDescription: 'Once/day cast 1st-level domain spell as SLA; CL = HD',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 12 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 5 },
      { type: 'special', description: 'Alignment must match your worshiped deity' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.domain_spell_1st_level',
        value: 1,
        source: 'Minor Miracle',
        condition: {
          type: 'custom',
          params: { uses_per_day: 1, caster_level: 'hit_dice' },
          description:
            'Once per day; caster level equals total Hit Dice; DC = 10 + 1 + CHA modifier',
        },
      },
    ],
    activationMode: 'conditional',
    choices: [
      {
        type: 'custom',
        label: 'First Deity Domain (choose 1st-level spell)',
        affectsEffects: true,
      },
      {
        type: 'custom',
        label: 'Second Deity Domain (choose 1st-level spell)',
        affectsEffects: true,
      },
    ],
    tags: ['divine', 'spell-like ability', 'domain', 'miracle', 'deity'],
  },
  {
    id: 'reward_of_the_faithful',
    name: 'Reward of the Faithful',
    description:
      "Your faith is rewarded by your deity and your fellow worshipers. Whenever you are the only target of a divine spell cast by a follower of your chosen deity other than yourself, that spell's caster level is treated as though it were 2 higher than it actually is. Additionally, when a worshiper of your deity heals you with channeled energy or a cure spell, you regain 1 additional hit point per die of healing rolled.",
    shortDescription:
      'Divine spells from fellow worshipers treat CL as +2; +1 HP per healing die from worshipers',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_religion', ranks: 1 },
      { type: 'special', description: 'Alignment must match that of your worshiped deity' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'incoming_divine_spell.caster_level',
        value: 2,
        source: 'Reward of the Faithful',
        condition: {
          type: 'custom',
          params: { caster_must_share_deity: true, must_be_sole_target: true },
          description:
            'When targeted alone by a divine spell from a fellow worshiper of your deity',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'healing.hp_per_die',
        value: 1,
        source: 'Reward of the Faithful',
        condition: {
          type: 'custom',
          params: { healer_must_share_deity: true, source: 'channel_energy_or_cure_spell' },
          description:
            'When healed via channeled energy or cure spell by a worshiper of your deity',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['divine', 'healing', 'caster level', 'faith', 'deity'],
  },
  {
    id: 'unbound_bravery',
    name: 'Unbound Bravery',
    description:
      'Your courage lets you slip free of any restraint. You add your bravery bonus to Escape Artist checks and to combat maneuver checks to escape a grapple. If your bravery bonus is +2 or higher, once per day as an immediate action you can grant that bonus to an adjacent ally for a single Will saving throw against a fear effect, a single Escape Artist check, or a single combat maneuver check to escape a grapple. You must declare this before the result of the check is revealed.',
    shortDescription:
      'Add bravery bonus to Escape Artist and grapple escapes; grant bonus to ally once/day',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'bravery' },
      { type: 'special', description: 'Must worship Cayden Cailean' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.escape_artist',
        value: 'bravery_bonus',
        source: 'Unbound Bravery',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'CMB.escape_grapple',
        value: 'bravery_bonus',
        source: 'Unbound Bravery',
      },
    ],
    activationMode: 'passive',
    tags: ['bravery', 'escape artist', 'grapple', 'Cayden Cailean', 'fighter'],
  },
  {
    id: 'undaunted_bravery',
    name: 'Undaunted Bravery',
    description:
      'It takes more than the average threat to intimidate you. You add your bravery bonus to Intimidate checks and to the DC of Intimidate checks made to demoralize you.',
    shortDescription: 'Add bravery bonus to Intimidate checks and to DC to demoralize you',
    source: 'Divine Anthology',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'bravery' },
      { type: 'special', description: 'Must worship Cayden Cailean' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.intimidate',
        value: 'bravery_bonus',
        source: 'Undaunted Bravery',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.intimidate_dc_vs_self',
        value: 'bravery_bonus',
        source: 'Undaunted Bravery',
      },
    ],
    activationMode: 'passive',
    tags: ['bravery', 'intimidate', 'demoralize', 'Cayden Cailean', 'fighter'],
  },
];
