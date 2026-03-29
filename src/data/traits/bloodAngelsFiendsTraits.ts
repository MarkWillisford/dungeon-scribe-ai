import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const BLOOD_ANGELS_TRAITS: TraitDefinition[] = [
  {
    id: 'adrift_boa',
    name: 'Adrift',
    description:
      "You never felt accepted by your family. Your sense of alienation and difficulty connecting with those around you persists into adulthood, making you seem unusual to others who struggle to understand your motivations. You gain a +1 trait bonus on saving throws made to resist charm and compulsion effects.",
    shortDescription: '+1 trait bonus on saves vs. charm and compulsion effects.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [
      {
        type: 'bonus',
        target: 'saving_throw.charm_compulsion',
        value: 1,
        bonusType: BonusType.TRAIT,
        source: 'Adrift',
      },
    ],
    tags: ['aasimar', 'charm', 'compulsion'],
  },
  {
    id: 'bralani_step',
    name: "Bralani's Step",
    description:
      'Your celestial ancestor was a bralani, an azata celebrated for exceptional speed in combat. Once per day, you may move an additional 5 feet as part of a move action.',
    shortDescription: 'Once per day, move an extra 5 feet as part of a move action.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Musetouched)' }],
    effects: [
      {
        type: 'special',
        target: 'movement.extra_5ft',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: "Bralani's Step",
      },
    ],
    tags: ['aasimar', 'musetouched', 'movement', 'bralani'],
  },
  {
    id: 'burnished_skin',
    name: 'Burnished Skin',
    description:
      'You were severely burned during your adolescence in a destructive fire. This traumatic event left scars but also granted you unusual resistance to illusions. You gain a +2 trait bonus on saving throws made to disbelieve illusions.',
    shortDescription: '+2 trait bonus on saves to disbelieve illusions.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Emberkin)' }],
    effects: [
      {
        type: 'bonus',
        target: 'saving_throw.disbelieve_illusions',
        value: 2,
        bonusType: BonusType.TRAIT,
        source: 'Burnished Skin',
      },
    ],
    tags: ['aasimar', 'emberkin', 'illusion'],
  },
  {
    id: 'celestial_tracker',
    name: 'Celestial Tracker',
    description:
      'You have inherited the angelic tracking abilities of your celestial heritage, allowing you to pursue evildoers with supernatural skill. You gain a +1 trait bonus on Survival checks made to follow tracks, and trails are treated as up to 24 hours fresher than they actually are when you use Survival to track.',
    shortDescription: '+1 on Survival to track; trails treated as up to 24 hrs fresher.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Angelkin)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Celestial Tracker',
      },
      {
        type: 'special',
        target: 'skill.survival_tracking_freshness',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Celestial Tracker',
      },
    ],
    tags: ['aasimar', 'angelkin', 'survival', 'tracking'],
  },
  {
    id: 'clergy_member_boa',
    name: 'Clergy Member',
    description:
      'Religious leaders recognize you as a mortal manifestation of their deity. You gain a +1 trait bonus on Diplomacy checks when interacting with ordained members of your religion. Once per week, you may request aid from a temple of your faith (subject to GM approval); typical aid includes casting of a 1st-level spell or procurement of a nonmagical item worth 50 gp or less.',
    shortDescription: '+1 Diplomacy with clergy; weekly temple aid request.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Clergy Member',
      },
      {
        type: 'special',
        target: 'social.temple_aid',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Clergy Member',
      },
    ],
    tags: ['aasimar', 'diplomacy', 'religion', 'social'],
  },
  {
    id: 'enlightened_warrior',
    name: 'Enlightened Warrior',
    description:
      'Your natural affinity for maintaining inner peace and enlightenment translates effectively to combat situations. You may take levels in monk even while maintaining a neutral or neutral good alignment, ignoring the normal lawful alignment requirement.',
    shortDescription: 'May take monk levels with neutral or neutral good alignment.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Idyllkin)' }],
    effects: [
      {
        type: 'special',
        target: 'class.monk_alignment',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Enlightened Warrior',
      },
    ],
    tags: ['aasimar', 'idyllkin', 'monk', 'alignment'],
  },
  {
    id: 'ethical_leader',
    name: 'Ethical Leader',
    description:
      'Your followers and cohorts are more willing to serve you because of their confidence in your strong moral position. You gain a +1 trait bonus to your Leadership score if all your cohorts and followers have an alignment within one step of your alignment.',
    shortDescription: '+1 trait bonus to Leadership score if all followers are within one alignment step.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [
      {
        type: 'special',
        target: 'leadership_score',
        value: 1,
        bonusType: BonusType.TRAIT,
        source: 'Ethical Leader',
      },
    ],
    tags: ['aasimar', 'leadership', 'social'],
  },
  {
    id: 'faith_healer_boa',
    name: 'Faith Healer',
    description:
      'Your otherworldly appearance and calming presence convince others of your divine favor. You can make a Heal check once per week to earn money as though using the Profession skill. You gain a +1 trait bonus on all Heal checks.',
    shortDescription: '+1 trait bonus on Heal checks; can earn money with Heal weekly.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.heal',
        value: 1,
        source: 'Faith Healer',
      },
      {
        type: 'special',
        target: 'skill.heal_as_profession',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Faith Healer',
      },
    ],
    tags: ['aasimar', 'heal', 'social'],
  },
  {
    id: 'good_influence',
    name: 'Good Influence',
    description:
      'You have an inherent capacity to encourage others toward righteous conduct. You gain a +1 trait bonus on Diplomacy checks when persuading nongood creatures to support good-aligned causes, and a +1 trait bonus when persuading nonlawful creatures to follow regional laws. Both bonuses stack (+2 total) when convincing a creature that is neither good nor lawful to take a lawful good action.',
    shortDescription: '+1 Diplomacy to persuade nongood or nonlawful creatures; +2 vs. both.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Lawbringer)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Good Influence',
      },
    ],
    tags: ['aasimar', 'lawbringer', 'diplomacy', 'social'],
  },
  {
    id: 'innocent_boa',
    name: 'Innocent',
    description:
      'Your air of innocence makes others perceive you as incapable of deception or harm. When making a Bluff check to tell a lie, you gain a +5 bonus if the lie is either believable or unlikely.',
    shortDescription: '+5 on Bluff checks to tell believable or unlikely lies.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: 5,
        source: 'Innocent',
      },
    ],
    tags: ['aasimar', 'bluff', 'social'],
  },
  {
    id: 'lantern_spirit',
    name: 'Lantern Spirit',
    description:
      'Your celestial ancestor was a lantern archon for centuries before ascending to a higher rank. You feel a strange sense of nostalgia whenever you use your continual flame spell-like ability, and can use it as a move action instead of a standard action.',
    shortDescription: 'Use the continual flame spell-like ability as a move action.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Lawbringer)' }],
    effects: [
      {
        type: 'special',
        target: 'spell_like.continual_flame_action',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Lantern Spirit',
      },
    ],
    tags: ['aasimar', 'lawbringer', 'spell-like ability', 'continual flame'],
  },
  {
    id: 'lillends_harp',
    name: "Lillend's Harp",
    description:
      'Your celestial ancestor was a lillend, a celestial being renowned for grace and musical ability. You gain a +1 trait bonus on Perform (string instruments) checks. This bonus increases to +2 when making a Perform check as part of a bardic performance.',
    shortDescription: '+1 on Perform (string instruments); +2 during bardic performance.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Musetouched)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform_string',
        value: 1,
        source: "Lillend's Harp",
      },
    ],
    tags: ['aasimar', 'musetouched', 'perform', 'bard', 'lillend'],
  },
  {
    id: 'planar_negotiator_boa',
    name: 'Planar Negotiator',
    description:
      'You have developed skill in persuading outsiders to assist you. When casting lesser planar ally, planar ally, or greater planar ally, you receive a 10% discount on the monetary cost required by the summoned outsiders.',
    shortDescription: '10% discount on monetary costs when casting planar ally spells.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [
      {
        type: 'special',
        target: 'spell.planar_ally_cost',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Planar Negotiator',
      },
    ],
    tags: ['aasimar', 'outsider', 'planar ally', 'magic'],
  },
  {
    id: 'planetars_visions',
    name: "Planetar's Visions",
    description:
      "Ever since you were a child, you have experienced vivid dreams of cutting down hordes of shrieking, twisted demons. When you land a critical hit with a melee weapon against an evil outsider, you ignore an amount of that creature's damage reduction equal to your weapon's critical multiplier. This cannot reduce the outsider's damage reduction below 0.",
    shortDescription: 'Critical hits vs. evil outsiders ignore DR equal to the weapon critical multiplier.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Angelkin)' }],
    effects: [
      {
        type: 'special',
        target: 'damage_reduction.ignore_vs_evil_outsiders',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: "Planetar's Visions",
      },
    ],
    tags: ['aasimar', 'angelkin', 'critical hit', 'damage reduction', 'outsider'],
  },
  {
    id: 'pyromancer_boa',
    name: 'Pyromancer',
    description:
      'You have an innate affinity for fire magic, granting you enhanced ability with flame-based spellcasting. You gain a +1 trait bonus on damage rolls for any spell with the fire descriptor that deals damage.',
    shortDescription: '+1 trait bonus on damage rolls for fire descriptor spells.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Emberkin)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell_damage.fire',
        value: 1,
        source: 'Pyromancer',
      },
    ],
    tags: ['aasimar', 'emberkin', 'fire', 'spellcasting', 'damage'],
  },
  {
    id: 'selective_health',
    name: 'Selective Health',
    description:
      'Your celestial nature grants you natural resistance to common diseases, but your purity leaves you vulnerable to the foul afflictions spread by evil creatures. You gain a +2 trait bonus on Fortitude saves against diseases. However, when making Fortitude saves against diseases inflicted by undead creatures or evil outsiders (such as mummy rot or vrock spores), you lose this +2 bonus and instead take a -2 penalty on that save.',
    shortDescription: '+2 Fort vs. disease; -2 Fort vs. diseases from undead or evil outsiders.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [
      {
        type: 'bonus',
        target: 'saving_throw.disease',
        value: 2,
        bonusType: BonusType.TRAIT,
        source: 'Selective Health',
      },
      {
        type: 'special',
        target: 'saving_throw.disease_undead_evil_penalty',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Selective Health',
      },
    ],
    tags: ['aasimar', 'fortitude', 'disease', 'undead', 'outsider'],
  },
  {
    id: 'snake_hater',
    name: 'Snake Hater',
    description:
      'You have a deep-seated aversion to serpents and other slithering creatures, and have studied them extensively to overcome or channel this fear. You gain a +2 trait bonus on Knowledge (dungeoneering) checks, and Knowledge (dungeoneering) becomes a class skill for you.',
    shortDescription: '+2 trait bonus on Knowledge (dungeoneering); it becomes a class skill.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Plumekith)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_dungeoneering',
        value: 2,
        source: 'Snake Hater',
      },
      {
        type: 'special',
        target: 'class_skill.knowledge_dungeoneering',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Snake Hater',
      },
    ],
    tags: ['aasimar', 'plumekith', 'knowledge', 'class skill'],
  },
  {
    id: 'speech_of_the_wilds',
    name: 'Speech of the Wilds',
    description:
      'Drawing from your agathion heritage, you possess a natural aptitude for communicating across species barriers. You can speak one extra language, granting you additional linguistic versatility beyond standard character creation options.',
    shortDescription: 'Gain one bonus language at character creation.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Idyllkin)' }],
    effects: [
      {
        type: 'special',
        target: 'languages.bonus',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Speech of the Wilds',
      },
    ],
    tags: ['aasimar', 'idyllkin', 'language', 'agathion'],
  },
  {
    id: 'toxophilite_boa',
    name: 'Toxophilite',
    description:
      'You have inherited celestial archery talent from your divine ancestor. You gain a +2 trait bonus on attack rolls made to confirm critical hits with bows.',
    shortDescription: '+2 trait bonus on critical hit confirmation rolls with bows.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar (Plumekith)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.bow_crit_confirmation',
        value: 2,
        source: 'Toxophilite',
      },
    ],
    tags: ['aasimar', 'plumekith', 'bow', 'critical hit', 'archery'],
  },
  {
    id: 'wary_aasimar',
    name: 'Wary (Aasimar)',
    description:
      'You grew up among people who resented your divine heritage, and this experience fostered deep mistrust of others. You view your celestial nature as a burden rather than a blessing. You gain a +1 trait bonus on Disguise checks and a +1 trait bonus on Sense Motive checks.',
    shortDescription: '+1 trait bonus on Disguise and Sense Motive checks.',
    source: 'Pathfinder Player Companion: Blood of Angels',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disguise',
        value: 1,
        source: 'Wary (Aasimar)',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Wary (Aasimar)',
      },
    ],
    tags: ['aasimar', 'disguise', 'sense motive', 'social'],
  },
];

// CHECKPOINT: last_written=wary_aasimar, written=20/20, status=complete Blood of Angels

export const BLOOD_FIENDS_TRAITS: TraitDefinition[] = [
  // ── Faultspawn ─────────────────────────────────────────────────────────────
  {
    id: 'arms_master_bof',
    name: 'Arms Master',
    description:
      "The legendary battle prowess of your ancestors ensures that you have a certain amount of innate martial skill. You take a -2 penalty on attack rolls made with weapons with which you are not proficient instead of the normal -4.",
    shortDescription: 'Reduce the non-proficiency attack penalty from -4 to -2.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Faultspawn)' }],
    effects: [
      {
        type: 'special',
        target: 'attack.nonproficiency_penalty',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Arms Master',
      },
    ],
    tags: ['tiefling', 'faultspawn', 'attack', 'proficiency'],
  },
  {
    id: 'prayer_breaker',
    name: 'Prayer Breaker',
    description:
      "If a divine spellcaster makes a concentration check to avoid losing a spell because of an injury you caused, increase the DC of that check by +2.",
    shortDescription: 'Concentration DCs for divine spellcasters you injure increase by 2.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Faultspawn)' }],
    effects: [
      {
        type: 'special',
        target: 'concentration_dc.divine_vs_self',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Prayer Breaker',
      },
    ],
    tags: ['tiefling', 'faultspawn', 'divine magic', 'concentration'],
  },
  // ── Grimspawn ──────────────────────────────────────────────────────────────
  {
    id: 'deaths_deputy',
    name: "Death's Deputy",
    description:
      "You gain a +2 trait bonus on the damage dealt for any attack that would already reduce your target to negative hit points without this trait.",
    shortDescription: '+2 damage on attacks that would already reduce the target to negative hit points.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Grimspawn)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.killing_blow',
        value: 2,
        source: "Death's Deputy",
      },
    ],
    tags: ['tiefling', 'grimspawn', 'damage', 'killing blow'],
  },
  {
    id: 'soul_eater_bof',
    name: 'Soul Eater',
    description:
      "The act of murder allows you to draw vitality from fleeing souls. Whenever you use a coup de grace action to kill a creature (either by damage or through a failed Fortitude save), you gain a number of temporary hit points equal to half your character level (minimum 1) for 1 minute. These temporary hit points do not stack with multiple coups de grace.",
    shortDescription: 'Gain temp HP equal to half your level (min 1) for 1 minute after a coup de grace kill.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Grimspawn)' }],
    effects: [
      {
        type: 'special',
        target: 'temp_hp.coup_de_grace',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Soul Eater',
      },
    ],
    tags: ['tiefling', 'grimspawn', 'temporary hit points', 'coup de grace'],
  },
  // ── Hellspawn ──────────────────────────────────────────────────────────────
  {
    id: 'blood_stalker',
    name: 'Blood Stalker',
    description:
      "Some infernal instinct makes it much easier for you to locate creatures whose blood you have drawn. You gain a +4 trait bonus on Survival checks made to track or follow a trail so long as you have dealt damage to the creature you are hunting within the last week.",
    shortDescription: '+4 on Survival checks to track creatures you have damaged in the last week.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Hellspawn)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 4,
        source: 'Blood Stalker',
      },
    ],
    tags: ['tiefling', 'hellspawn', 'survival', 'tracking'],
  },
  {
    id: 'unearth_secrets',
    name: 'Unearth Secrets',
    description:
      "You gain a +2 trait bonus on Sense Motive checks when trying to get a hunch that might reveal a target's hidden vice, dark impulse, or any other craving it would not want publicly revealed.",
    shortDescription: '+2 on Sense Motive checks to detect hidden vices or secret cravings.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Hellspawn)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 2,
        source: 'Unearth Secrets',
      },
    ],
    tags: ['tiefling', 'hellspawn', 'sense motive', 'social'],
  },
  // ── Beastbrood ─────────────────────────────────────────────────────────────
  {
    id: 'bent_body',
    name: 'Bent Body',
    description:
      "While nothing is actually reversed, your bones and limbs are slightly out of alignment. You gain a +2 trait bonus to CMD when resisting grapple attempts.",
    shortDescription: '+2 trait bonus to CMD against grapple attempts.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Beastbrood)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmd.vs_grapple',
        value: 2,
        source: 'Bent Body',
      },
    ],
    tags: ['tiefling', 'beastbrood', 'cmd', 'grapple'],
  },
  {
    id: 'tough_skin_bof',
    name: 'Tough Skin',
    description:
      "You retain a small amount of your ancestors' unyielding skin. You gain a +1 trait bonus to AC when opponents attempt to confirm critical hits with either bludgeoning or slashing weapons.",
    shortDescription: '+1 trait bonus to AC against critical hit confirmation rolls with bludgeoning or slashing weapons.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Beastbrood)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'ac.vs_crit_confirmation',
        value: 1,
        source: 'Tough Skin',
      },
    ],
    tags: ['tiefling', 'beastbrood', 'ac', 'critical hit'],
  },
  // ── Hungerseed ─────────────────────────────────────────────────────────────
  {
    id: 'big_boned_bof',
    name: 'Big Boned',
    description:
      "Your ancestors' great size has gifted you with an exceptionally sturdy frame. You gain a +1 trait bonus on combat maneuver checks made to overrun opponents and a +1 trait bonus to CMD against trip attempts.",
    shortDescription: '+1 on overrun combat maneuvers; +1 CMD vs. trip.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Hungerseed)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb.overrun',
        value: 1,
        source: 'Big Boned',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmd.vs_trip',
        value: 1,
        source: 'Big Boned',
      },
    ],
    tags: ['tiefling', 'hungerseed', 'cmb', 'cmd', 'overrun', 'trip'],
  },
  {
    id: 'superior_clutch',
    name: 'Superior Clutch',
    description:
      "Your hands not only are bigger than normal, but also have a strong grip useful for wielding large weapons. You gain a +1 trait bonus on damage rolls when using weapons intended for creatures of a larger size.",
    shortDescription: '+1 trait bonus on damage rolls with oversized weapons.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Hungerseed)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.oversized_weapon',
        value: 1,
        source: 'Superior Clutch',
      },
    ],
    tags: ['tiefling', 'hungerseed', 'damage', 'oversized weapon'],
  },
  // ── Shackleborn ────────────────────────────────────────────────────────────
  {
    id: 'chain_master',
    name: 'Chain Master',
    description:
      "Your fiendish ancestry has granted you unnatural skill with the chain, and your enemies know to stay away when you wield it as a weapon. You gain a +2 trait bonus on combat maneuver checks made to trip opponents with a spiked chain or whip.",
    shortDescription: '+2 on trip combat maneuvers with a spiked chain or whip.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Shackleborn)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb.trip',
        value: 2,
        source: 'Chain Master',
      },
    ],
    tags: ['tiefling', 'shackleborn', 'cmb', 'trip', 'spiked chain', 'whip'],
  },
  {
    id: 'pain_artist',
    name: 'Pain Artist',
    description:
      "Some trace of your kyton heritage makes people realize you are capable of anything, especially when they are bound and at your mercy. You gain a +2 trait bonus on Intimidate checks made against helpless creatures.",
    shortDescription: '+2 on Intimidate checks against helpless creatures.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Shackleborn)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 2,
        source: 'Pain Artist',
      },
    ],
    tags: ['tiefling', 'shackleborn', 'intimidate', 'helpless'],
  },
  // ── Pitborn ────────────────────────────────────────────────────────────────
  {
    id: 'deadly_rush',
    name: 'Deadly Rush',
    description:
      "When you hurl yourself against a foe with reckless abandon, you often land particularly telling blows. You gain a +2 trait bonus on critical hit confirmation rolls made as part of a charge.",
    shortDescription: '+2 on critical hit confirmation rolls made during a charge.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Pitborn)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.crit_confirmation_charge',
        value: 2,
        source: 'Deadly Rush',
      },
    ],
    tags: ['tiefling', 'pitborn', 'charge', 'critical hit'],
  },
  {
    id: 'flair_for_destruction',
    name: 'Flair for Destruction',
    description:
      "You have a talent for striking objects at their weakest points. You gain a +1 trait bonus on weapon damage rolls when attacking objects and constructs.",
    shortDescription: '+1 trait bonus on damage rolls against objects and constructs.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Pitborn)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.vs_objects_constructs',
        value: 1,
        source: 'Flair for Destruction',
      },
    ],
    tags: ['tiefling', 'pitborn', 'damage', 'constructs', 'objects'],
  },
  // ── Spitespawn ─────────────────────────────────────────────────────────────
  {
    id: 'buried_anxiety',
    name: 'Buried Anxiety',
    description:
      "You laugh at what makes others tremble, but are secretly disturbed by a particular sort of mundane item. Pick a specific sort of object, color, sound, or similar relatively common phenomenon. You gain a +2 trait bonus on saving throws made to resist fear effects, except when you can see, hear, smell, or taste the particular phenomenon you have selected.",
    shortDescription: '+2 on saves vs. fear effects, except when exposed to your chosen mundane trigger.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Spitespawn)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.fear',
        value: 2,
        source: 'Buried Anxiety',
      },
    ],
    tags: ['tiefling', 'spitespawn', 'fear', 'saving throw'],
  },
  {
    id: 'shift_the_blame',
    name: 'Shift the Blame',
    description:
      "You have learned many tricks to keep yourself from facing the consequences of your misdeeds. You gain a +1 trait bonus on Bluff and Diplomacy checks made to convince someone that another person is actually at fault for your actions.",
    shortDescription: '+1 on Bluff and Diplomacy to convince others someone else is at fault for your actions.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Spitespawn)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Shift the Blame',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Shift the Blame',
      },
    ],
    tags: ['tiefling', 'spitespawn', 'bluff', 'diplomacy', 'social'],
  },
  // ── Foulspawn ──────────────────────────────────────────────────────────────
  {
    id: 'god_scorn',
    name: 'God Scorn',
    description:
      "Your contempt for the gods and their sad little priests makes it easier to shake off the effects of their prayers. You gain a +1 trait bonus on saving throws against divine spells.",
    shortDescription: '+1 trait bonus on saving throws against divine spells.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Foulspawn)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.divine',
        value: 1,
        source: 'God Scorn',
      },
    ],
    tags: ['tiefling', 'foulspawn', 'divine magic', 'saving throw'],
  },
  {
    id: 'repulsive_bof',
    name: 'Repulsive',
    description:
      "Your repulsiveness causes people to almost instinctively shy away from making physical contact with you. You gain a +1 bonus to combat maneuver checks made for overrun and reposition actions.",
    shortDescription: '+1 on overrun and reposition combat maneuver checks.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (Foulspawn)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb.overrun',
        value: 1,
        source: 'Repulsive',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb.reposition',
        value: 1,
        source: 'Repulsive',
      },
    ],
    tags: ['tiefling', 'foulspawn', 'cmb', 'overrun', 'reposition'],
  },
  // ── The Motherless ─────────────────────────────────────────────────────────
  {
    id: 'repel_sin',
    name: 'Repel Sin',
    description:
      "You have an instinctive revulsion for the sins that led to the rise of demons and subsequent downfall of qlippoth. You gain a +2 trait bonus on saving throws made against spells and effects with the evil descriptor.",
    shortDescription: '+2 trait bonus on saves against spells and effects with the evil descriptor.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (The Motherless)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.evil_descriptor',
        value: 2,
        source: 'Repel Sin',
      },
    ],
    tags: ['tiefling', 'the motherless', 'evil descriptor', 'saving throw'],
  },
  {
    id: 'vile_kiss',
    name: 'Vile Kiss',
    description:
      "You have learned how to exploit the natural disgust you provoke when in close proximity to others. You gain a +2 trait bonus on combat maneuver checks to perform a dirty trick combat maneuver for the purpose of making your opponent sickened.",
    shortDescription: '+2 on dirty trick combat maneuvers to sicken opponents.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling (The Motherless)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb.dirty_trick',
        value: 2,
        source: 'Vile Kiss',
      },
    ],
    tags: ['tiefling', 'the motherless', 'cmb', 'dirty trick', 'sickened'],
  },
  // ── General Tiefling Traits ────────────────────────────────────────────────
  {
    id: 'anticipate_evil',
    name: 'Anticipate Evil',
    description:
      "You can read subtle clues in the body language of fiends, allowing you to react just a bit faster than normal when dealing with such beings. You gain a +1 trait bonus on opposed Dexterity-based skill checks against outsiders with the evil subtype, and when initiative is tied with evil outsiders you always act first regardless of initiative modifier differences.",
    shortDescription: '+1 on opposed Dex-based skill checks vs. evil outsiders; always win initiative ties against them.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.dex_opposed_vs_evil_outsiders',
        value: 1,
        source: 'Anticipate Evil',
      },
      {
        type: 'special',
        target: 'initiative.tie_vs_evil_outsiders',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Anticipate Evil',
      },
    ],
    tags: ['tiefling', 'evil outsider', 'initiative', 'dexterity'],
  },
  {
    id: 'beast_bully',
    name: 'Beast Bully',
    description:
      "You have learned how to exploit the fear felt by creatures of the natural world when they sense the shadow in your soul. You can make an Intimidate check instead of a Handle Animal check when trying to handle or push an animal.",
    shortDescription: 'Use Intimidate in place of Handle Animal checks to handle or push animals.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'special',
        target: 'skill.intimidate_as_handle_animal',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Beast Bully',
      },
    ],
    tags: ['tiefling', 'intimidate', 'handle animal', 'animals'],
  },
  {
    id: 'blessing_of_darkness',
    name: 'Blessing of Darkness',
    description:
      "Whenever a spellcaster capable of channeling negative energy casts a beneficial spell on you, she acts as if she were one level higher for the purpose of determining that spell's effects.",
    shortDescription: 'Spellcasters using negative energy channeling treat their level as 1 higher when casting beneficial spells on you.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'special',
        target: 'caster_level.negative_energy_beneficial',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Blessing of Darkness',
      },
    ],
    tags: ['tiefling', 'negative energy', 'caster level', 'spellcasting'],
  },
  {
    id: 'born_damned',
    name: 'Born Damned',
    description:
      "The inherent sacrilege that taints your soul sometimes crowds out lesser banes. You gain a +2 trait bonus on saving throws against curses and magical effects that produce curses.",
    shortDescription: '+2 trait bonus on saving throws against curses and curse-producing effects.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.curse',
        value: 2,
        source: 'Born Damned',
      },
    ],
    tags: ['tiefling', 'curse', 'saving throw'],
  },
  {
    id: 'dark_magic_affinity',
    name: 'Dark Magic Affinity',
    description:
      "Whenever you cast a spell with the evil descriptor, you act as if you were one level higher for the purpose of determining that spell's effects.",
    shortDescription: 'Treat your caster level as 1 higher when casting spells with the evil descriptor.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'special',
        target: 'caster_level.evil_descriptor',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Dark Magic Affinity',
      },
    ],
    tags: ['tiefling', 'evil descriptor', 'caster level', 'spellcasting'],
  },
  {
    id: 'wary_tiefling',
    name: 'Ever Wary',
    description:
      "Constant fear that your fiendish nature might provoke a sudden attack ensures that you never completely let down your guard. During the surprise round and before your first action in combat, you can apply half your Dexterity bonus (if any) to your AC. You still count as flat-footed for the purposes of attacks and effects.",
    shortDescription: 'Apply half your Dex bonus to AC during the surprise round and before your first action; still flat-footed.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'special',
        target: 'ac.surprise_round_half_dex',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Ever Wary',
      },
    ],
    tags: ['tiefling', 'ac', 'dexterity', 'surprise round', 'flat-footed'],
  },
  {
    id: 'family_connections_bof',
    name: 'Family Connections',
    description:
      "Your dark ancestry gives you a special insight into how to motivate or placate fiends and their kin. You gain a +2 trait bonus on Bluff and Diplomacy checks made against outsiders belonging to the evil subtype.",
    shortDescription: '+2 trait bonus on Bluff and Diplomacy against evil outsiders.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 2,
        source: 'Family Connections',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Family Connections',
      },
    ],
    tags: ['tiefling', 'bluff', 'diplomacy', 'evil outsider', 'social'],
  },
  {
    id: 'friendless_bof',
    name: 'Friendless',
    description:
      "You have grown used to looking after yourself without help. You can make Heal checks on yourself for the purposes of treating deadly wounds, diseases, and poisons.",
    shortDescription: 'You can use Heal on yourself to treat deadly wounds, diseases, and poisons.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'special',
        target: 'skill.heal_self',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Friendless',
      },
    ],
    tags: ['tiefling', 'heal', 'self-healing', 'disease', 'poison'],
  },
  {
    id: 'inciter_bof',
    name: 'Inciter',
    description:
      "You always seem to know the perfect words to sow discord. You gain a +2 trait bonus on Bluff checks made to convince creatures to attack each other.",
    shortDescription: '+2 on Bluff checks to convince creatures to attack each other.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 2,
        source: 'Inciter',
      },
    ],
    tags: ['tiefling', 'bluff', 'social', 'deception'],
  },
  {
    id: 'motherless_bof',
    name: 'Motherless',
    description:
      "Your birth killed your mother, and you learned, even before words, how to manipulate others into looking after you. You gain a +2 trait bonus on Bluff and Disguise checks made to appear injured, sickly, or otherwise weakened.",
    shortDescription: '+2 on Bluff and Disguise checks to appear injured, sickly, or weakened.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 2,
        source: 'Motherless',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disguise',
        value: 2,
        source: 'Motherless',
      },
    ],
    tags: ['tiefling', 'bluff', 'disguise', 'social', 'deception'],
  },
  {
    id: 'prideful_temper',
    name: 'Prideful Temper',
    description:
      "Memories of the cruel abuse and taunts you suffered as a child cause you to strike back with great fury at anyone who slanders you. You gain a +1 trait bonus on attack rolls made against creatures that have insulted you until you successfully deal damage to that creature.",
    shortDescription: '+1 on attack rolls against creatures that have insulted you, until you deal damage to them.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.vs_insulter',
        value: 1,
        source: 'Prideful Temper',
      },
    ],
    tags: ['tiefling', 'attack', 'social'],
  },
  {
    id: 'prolong_magic_bof',
    name: 'Prolong Magic',
    description:
      "Constant drills and preparation allow you to get more out of your innate magic. Whenever you use a spell-like ability gained through your tiefling heritage, it automatically acts as if affected by the Extend Spell metamagic feat.",
    shortDescription: 'Tiefling heritage spell-like abilities automatically function as if affected by Extend Spell.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'special',
        target: 'spell_like.racial_extend_spell',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Prolong Magic',
      },
    ],
    tags: ['tiefling', 'spell-like ability', 'extend spell', 'metamagic'],
  },
  {
    id: 'shadow_stabber',
    name: 'Shadow Stabber',
    description:
      "An instinct for dishonorable conduct serves you well when fighting opponents who are blind, oblivious, or blundering around in the dark. You gain a +2 trait bonus on melee weapon damage rolls made against foes that cannot see you.",
    shortDescription: '+2 trait bonus on melee damage rolls against foes that cannot see you.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee_vs_blind',
        value: 2,
        source: 'Shadow Stabber',
      },
    ],
    tags: ['tiefling', 'damage', 'melee', 'blind', 'stealth'],
  },
  {
    id: 'suicidal_bof',
    name: 'Suicidal',
    description:
      "Shame and horror fill your subconscious, and you never stop looking for ways to grant yourself the peace of the grave. Once per day as an immediate action, you can redirect any attack originally aimed at an adjacent creature to target yourself instead.",
    shortDescription: 'Once per day as an immediate action, redirect an attack aimed at an adjacent creature to yourself.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'special',
        target: 'combat.redirect_attack_to_self',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Suicidal',
      },
    ],
    tags: ['tiefling', 'immediate action', 'redirect attack'],
  },
  {
    id: 'twilight_zeal',
    name: 'Twilight Zeal',
    description:
      "You gain a +1 trait bonus on Will saving throws when in dim light or darkness.",
    shortDescription: '+1 trait bonus on Will saves in dim light or darkness.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.will',
        value: 1,
        source: 'Twilight Zeal',
      },
    ],
    tags: ['tiefling', 'will save', 'darkness', 'dim light'],
  },
  {
    id: 'underling_bof',
    name: 'Underling',
    description:
      "People tend to assume you either are, or are willing to become, a minor cog in some evil cabal or conspiracy. You gain a +2 trait bonus on Bluff and Diplomacy checks made to either join or imply that you already belong to an evil organization.",
    shortDescription: '+2 on Bluff and Diplomacy to join or claim membership in evil organizations.',
    source: 'Pathfinder Player Companion: Blood of Fiends',
    category: 'race',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 2,
        source: 'Underling',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Underling',
      },
    ],
    tags: ['tiefling', 'bluff', 'diplomacy', 'social', 'evil organization'],
  },
];

// CHECKPOINT: last_written=underling_bof, written=36/36, status=complete Blood of Fiends
