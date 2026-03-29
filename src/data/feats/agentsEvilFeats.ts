import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const AGENTS_EVIL_FEATS: FeatDefinition[] = [
  {
    id: 'associate',
    name: 'Associate',
    description:
      'You have established good standing with a large organization, though you lack official membership status. Upon selecting a single organization with which you have positive relations, you gain a +4 circumstance bonus on Diplomacy checks to influence members of that group and on gather information checks about the organization. In any settlement of small town size or larger, you can spend 1d4 hours locating a representative of that organization and attempt a Diplomacy check (DC = 20 + the gp cost of the requested service, minimum 1 gp). On a success, the service is provided free; on a failure, you pay the standard rate. This check may be attempted once per week per organization.',
    shortDescription: 'Gain +4 Diplomacy/gather info with a chosen organization and access their services for free.',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Maintain a positive relationship with an organization for at least 6 months or achieve a major accomplishment on behalf of an organization' },
    ],
    effects: [
      {
        type: 'skill_bonus',
        target: 'diplomacy',
        value: 4,
        bonusType: BonusType.CIRCUMSTANCE,
        source: 'Associate',
      },
    ],
    activationMode: 'passive',
    tags: ['social', 'organization'],
  },
  {
    id: 'betrayed',
    name: 'Betrayed',
    description:
      'Believing in a just cause left you with a knife in your back. Now you hoard your trust in others, rarely sharing it. When you are affected by a harmful area of effect created by an ally, you may roll your saving throw twice and use the better result. However, doing so prevents you from providing flanking bonuses to allies for 1 hour. Goal: Track down and either bring to justice or slay those who betrayed you. Completion Benefit: Allies and enemies no longer grant cover bonuses on your attacks against other creatures. Additionally, you gain a 20% miss chance against attacks of opportunity made by creatures threatened by your allies.',
    shortDescription: 'Roll saves twice vs. friendly fire; story feat with goals tied to hunting down betrayers.',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['story'],
    prerequisites: [
      { type: 'special', description: 'Had a valuable item worth at least 1,000 gp per character level stolen by a former ally, been left for dead by a former ally, or have the Wrong Enemy background' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Betrayed',
      },
    ],
    activationMode: 'conditional',
    tags: ['story', 'saving throw', 'betrayal'],
  },
  {
    id: 'coven_caster',
    name: 'Coven Caster',
    description:
      "You share your mother's gift for working in groups. As a standard action, you can attempt a special aid another action (1d20 + your choice of your Intelligence or Charisma modifier; DC 10). If you succeed, you increase an adjacent spellcaster's caster level by 1 until the beginning of your next turn. If you also possess the covenant witch hex, this bonus applies to all coven members within 30 feet.",
    shortDescription: "Aid another to boost an adjacent spellcaster's caster level by 1.",
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'Changeling' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Coven Caster',
      },
    ],
    activationMode: 'conditional',
    tags: ['changeling', 'coven', 'spellcasting', 'aid another'],
  },
  {
    id: 'cursed_love',
    name: 'Cursed Love',
    description:
      "You have a romantic interest who has fallen to some dark influence and rejects you out of shame or fear of newfound capabilities. Select a corruption type your lover embraced. You receive +2 bonuses on Diplomacy and Sense Motive checks against such creatures, and +2 bonuses on saving throws against their corruption-spreading effects. Once per day, when you are reduced below 0 HP by such a creature's attack, you gain temporary HP equal to half your character level instead of falling.",
    shortDescription: 'Gain bonuses against a chosen corruption type; story feat tied to a cursed romantic bond.',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['story'],
    prerequisites: [
      { type: 'special', description: 'Have a romantic interest who has fallen to dark influence and rejects you, or have the Bad Romance or Temptation background' },
    ],
    effects: [
      {
        type: 'skill_bonus',
        target: 'diplomacy',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Cursed Love',
      },
      {
        type: 'skill_bonus',
        target: 'sense_motive',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Cursed Love',
      },
    ],
    activationMode: 'conditional',
    tags: ['story', 'evil', 'corruption', 'social'],
  },
  {
    id: 'dead_inside',
    name: 'Dead Inside',
    description:
      'You are devoid of both hatred and joy. While many regard you as callous, you have no particular malice in your heart. When you are the target of a spell or spell-like ability with the emotion or fear descriptor, you can roll your saving throw twice and take the better result. Goal: Overcome your detachment through a significant emotional experience or achieve complete emotional neutrality. Completion Benefit: You master your emotions. You can ignore any morale bonuses or penalties applied to you by outside forces.',
    shortDescription: 'Roll saves twice against emotion and fear effects; story feat for emotionally detached characters.',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['story'],
    prerequisites: [
      { type: 'special', description: 'Failed saving throws against at least five different emotion-manipulating spells or supernatural fear effects, or possess the Sunless or Sole Survivor background' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Dead Inside',
      },
    ],
    activationMode: 'conditional',
    tags: ['story', 'fear', 'emotion', 'saving throw'],
  },
  {
    id: 'gruesome_butcher',
    name: 'Gruesome Butcher',
    description:
      'You are dedicated to slaughter against a specific group. Select a particular nation, organization, or humanoid subtype. You receive +4 bonuses on Sense Motive checks to identify affiliated creatures, and on Bluff and Diplomacy checks to hide your animosity toward them. Goal: Deliver killing blows to enemies whose combined Hit Dice total 10 times your character level. Completion Benefit: You gain +2 bonuses on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against your chosen enemies, plus +2 bonuses on weapon attack and damage rolls against them.',
    shortDescription: 'Gain bonuses to conceal hatred toward a chosen enemy group; story feat for relentless hunters.',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['story'],
    prerequisites: [
      { type: 'special', description: 'Been rendered unconscious and left for dead on a battlefield between warring factions, or possess the Child Soldier or Drafted background' },
    ],
    effects: [
      {
        type: 'skill_bonus',
        target: 'sense_motive',
        value: 4,
        bonusType: BonusType.UNTYPED,
        source: 'Gruesome Butcher',
      },
      {
        type: 'skill_bonus',
        target: 'bluff',
        value: 4,
        bonusType: BonusType.UNTYPED,
        source: 'Gruesome Butcher',
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'favored enemy', 'social', 'hunter'],
  },
  {
    id: 'otherworldly_influence',
    name: 'Otherworldly Influence',
    description:
      'You have caught the attention of powerful evil beings from beyond the Material Plane. You receive a +2 bonus on Bluff and Diplomacy checks when negotiating with evil outsiders. Additionally, you gain spell resistance equal to 5 + your character level against spells and spell-like abilities from evil-subtype outsiders. Goal: Obtain a valuable boon from an evil creature without incurring debt or acting under magical compulsion. Completion Benefit: Your spell resistance expands to function against spells and spell-like abilities from all outsiders, regardless of alignment.',
    shortDescription: 'Gain +2 vs. evil outsiders in social checks and SR against their magic; story feat.',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['story'],
    prerequisites: [
      { type: 'special', description: 'Refused an evil creature with at least 15 Hit Dice who offered gifts or assistance, or possess the Planar Offering background' },
    ],
    effects: [
      {
        type: 'skill_bonus',
        target: 'bluff',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Otherworldly Influence',
      },
      {
        type: 'skill_bonus',
        target: 'diplomacy',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Otherworldly Influence',
      },
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Otherworldly Influence',
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'outsider', 'evil', 'spell resistance', 'social'],
  },
  {
    id: 'overachiever',
    name: 'Overachiever',
    description:
      'You take only half the normal penalties from exhaustion. Once per day, you may skip rest to study or practice, gaining a +3 bonus on checks with one selected skill for 24 hours, but becoming fatigued. Goal: Humiliate a member of your hated group by defeating them at something they excel in. Completion Benefit: When forgoing rest, you may apply the +3 bonus to a different skill each time. If you have 10 or more ranks in the selected skill, this bonus increases to +6.',
    shortDescription: 'Halve exhaustion penalties and gain +3 to a skill by skipping rest; story feat for driven overachievers.',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['story'],
    prerequisites: [
      { type: 'special', description: 'Defeated by the same individual, organization, or creature type at least four times, or possess the Boarding School or Humiliated background' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Overachiever',
      },
    ],
    activationMode: 'conditional',
    tags: ['story', 'exhaustion', 'skill', 'drive'],
  },
  {
    id: 'pathfinder_society_ally',
    name: 'Pathfinder Society Ally',
    description:
      "The Pathfinder Society's vast archives are available for you to exploit. In any settlement that is the size of a small town or larger, you can spend 1d4 hours researching notes from available Pathfinders to gain a +4 circumstance bonus on a single Knowledge check.",
    shortDescription: "Spend 1d4 hours in a town to gain +4 on a single Knowledge check from the Pathfinder Society's archives.",
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'associate' },
    ],
    effects: [
      {
        type: 'skill_bonus',
        target: 'knowledge',
        value: 4,
        bonusType: BonusType.CIRCUMSTANCE,
        source: 'Pathfinder Society Ally',
      },
    ],
    activationMode: 'conditional',
    tags: ['knowledge', 'organization', 'Pathfinder Society', 'research'],
  },
  {
    id: 'red_mantis_collaborator',
    name: 'Red Mantis Collaborator',
    description:
      'You pass along private details to the Red Mantis, and they protect you in return. Anyone attempting Diplomacy or Survival checks to locate you during a stay in a Red Mantis safe house takes a -10 penalty, and anyone attempting to scry upon you or magically divine your location must first succeed at a caster level check (DC = 15 + your character level). You can stay in a Red Mantis safe house for up to 1 day per character level.',
    shortDescription: 'Use Red Mantis safe houses; pursuers take -10 to locate you and must beat a CL check to scry you.',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'associate' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Red Mantis Collaborator',
      },
    ],
    activationMode: 'conditional',
    tags: ['organization', 'Red Mantis', 'stealth', 'hiding', 'safe house'],
  },
  {
    id: 'smiting_reversal',
    name: 'Smiting Reversal',
    description:
      "You have learned to withstand the onslaught of holy or unholy forces and turn their power against them. You can use this feat three times per day. When you are targeted by an enemy's smite attack, you can immediately make an attack of opportunity against that enemy. The attack roll receives a bonus equal to your Charisma modifier, and if it hits, the damage roll gains a bonus equal to your character level. This attack of opportunity bypasses all damage reduction the target possesses.",
    shortDescription: "Three times per day, make an attack of opportunity when targeted by a smite, bypassing the attacker's DR.",
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'power_attack' },
      { type: 'feat', featId: 'toughness' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Smiting Reversal',
      },
    ],
    activationMode: 'conditional',
    tags: ['combat', 'smite', 'attack of opportunity', 'DR bypass'],
  },
  {
    id: 'sunder_blessing',
    name: 'Sunder Blessing',
    description:
      "Your contempt for divine authority allows you to dismantle blessed magical effects through combat techniques. You may attempt to sunder an ongoing divine spell effect or divine spell-like ability via a combat maneuver check. Against effects not on creatures, you must succeed against CMD 15 + the caster level. For effects on creatures, you make a standard sunder maneuver against the creature's CMD + 5. Success suppresses the effect for 1 round; exceeding CMD by 5+ extends this to 2 rounds; exceeding by 10+ dispels it entirely.",
    shortDescription: 'Sunder active divine spell effects or spell-like abilities with a combat maneuver check.',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'disruptive' },
      { type: 'level', minimum: 8 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Sunder Blessing',
      },
    ],
    activationMode: 'conditional',
    tags: ['combat', 'sunder', 'divine', 'anti-caster', 'CMB'],
  },
  {
    id: 'sycophant',
    name: 'Sycophant',
    description:
      "You elicit pity or disgust from your enemies. As a standard action, you can compel an opponent to show mercy by making a successful Diplomacy check against a DC equal to 15 plus the target's Will save modifier. Success causes the target's next attack against you to deal nonlethal damage without the usual -4 penalty. Regardless of outcome, you cannot use this feat on the same creature again within 24 hours.",
    shortDescription: "Diplomacy check to compel a foe's next attack to deal nonlethal damage instead of lethal.",
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Sycophant',
      },
    ],
    activationMode: 'conditional',
    tags: ['social', 'diplomacy', 'nonlethal', 'mercy'],
  },
  {
    id: 'whispering_way_disciple',
    name: 'Whispering Way Disciple',
    description:
      "Your research has gained the attention of the Whispering Way, which rewards you with access to its libraries. You can combine your blood and unholy water once per day to create either a potion of cure light wounds or inflict light wounds as a full-round action, though this costs 1 Constitution damage. In any settlement of small town size or larger, you gain access to purchase scrolls of undead-related spells regardless of local legality.",
    shortDescription: "Craft potions of cure/inflict light wounds from your blood daily; buy necromantic scrolls in any town.",
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'associate' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Whispering Way Disciple',
      },
    ],
    activationMode: 'conditional',
    tags: ['organization', 'Whispering Way', 'undead', 'necromancy', 'alchemy'],
  },
  {
    id: 'wretched_curator',
    name: 'Wretched Curator',
    description:
      'You view all knowledge as valuable and reject restrictions on information based on moral concerns. You can purchase potions and scrolls of evil-descriptor spells at a 10% discount regardless of settlement size or local laws. You gain a +4 bonus on Knowledge (arcana), Spellcraft, and Use Magic Device checks related to evil-descriptor spells or forbidden works. Goal: Own evil-descriptor spell scrolls and forbidden tomes totaling 50 gp per character level, and successfully cast an occult ritual (5th level or higher) with the evil descriptor.',
    shortDescription: 'Buy evil-spell items at 10% discount and gain +4 on checks related to evil magic; story feat.',
    source: 'Pathfinder Player Companion: Agents of Evil',
    types: ['story'],
    prerequisites: [
      { type: 'special', description: 'Purchased a scroll or spellbook containing a spell with the evil descriptor in an illegal location, or possess the Secret Society Inductee or Diabolical Upbringing background' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special',
        source: 'Wretched Curator',
      },
      {
        type: 'skill_bonus',
        target: 'knowledge_arcana',
        value: 4,
        bonusType: BonusType.UNTYPED,
        source: 'Wretched Curator',
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'evil', 'spellcraft', 'forbidden lore'],
  },
];

// CHECKPOINT: last_written=wretched_curator, written=15/15, status=complete
