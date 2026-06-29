import { ArchetypeData } from '../types';

export const INQUISITOR_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Branded Heretic
  // ──────────────────────────────────────────────
  {
    name: 'Branded Heretic',
    className: 'Inquisitor',
    description:
      "A branded heretic has been cast out by her church but continues to pursue her own twisted interpretation of her deity's will, marked with a blasphemous brand. She turns the stigma of her exile into a source of power, using her brand to channel divine energy in unconventional ways.",
    replacedFeatures: ['Domain', 'Detect Alignment'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Heretical Brand',
        level: 1,
        description:
          'The branded heretic bears a profane brand (chosen at 1st level) that acts as a divine focus and grants her a +2 bonus on Bluff, Disguise, and Stealth checks. The brand glows faintly when she uses divine abilities and cannot be concealed by mundane means.',
        effects: [],
      },
      {
        name: 'Brand Power',
        level: 1,
        description:
          'Once per day per inquisitor level, the branded heretic can activate her brand as a swift action to gain a +2 profane bonus on attack rolls, saving throws, or skill checks for 1 round. The type of bonus available depends on her chosen brand.',
        effects: [],
      },
      {
        name: 'Heretical Judgment',
        level: 3,
        description:
          'When the branded heretic uses judgment, she can apply a profane bonus instead of a sacred bonus. Enemies who know she is a branded heretic take a –1 penalty on saving throws against her spells and abilities.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 2. Caster Inquisitor (Sanctified Slayer variant approach; distinct archetype)
  // ──────────────────────────────────────────────
  {
    name: 'Caster Inquisitor',
    className: 'Inquisitor',
    description:
      "The caster inquisitor focuses on divine magic above martial prowess, sacrificing some of the inquisitor's combat power for enhanced spellcasting. This archetype is ideal for inquisitors who serve as battlefield controllers and support casters.",
    replacedFeatures: ['Bane', 'Greater Bane'],
    modifiedFeatures: ['Judgment'],
    newFeatures: [
      {
        name: 'Extended Judgment',
        level: 1,
        description:
          "The caster inquisitor's judgment lasts for a number of rounds equal to her inquisitor level plus her Wisdom modifier rather than until the combat ends, but she may have one additional judgment active at a time.",
        effects: [],
      },
      {
        name: 'Spell Focus (Inquisitor)',
        level: 5,
        description:
          'At 5th level the caster inquisitor adds her Wisdom modifier as a bonus on concentration checks and adds one additional spell per spell level per day to her spells known from the inquisitor list.',
        effects: [],
      },
      {
        name: 'Greater Spell Might',
        level: 11,
        description:
          'The caster inquisitor can expend a use of judgment as a swift action to maximize the damage dice of the next damaging inquisitor spell she casts before the end of her turn.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 3. Diabolist Enforcer
  // ──────────────────────────────────────────────
  {
    name: 'Diabolist Enforcer',
    className: 'Inquisitor',
    description:
      'A diabolist enforcer serves Asmodeus or another devil-lord, enforcing infernal contracts and rooting out those who break their oaths to Hell. She gains access to devil-touched abilities in exchange for strict adherence to lawful evil doctrine.',
    replacedFeatures: ['Domain', 'Detect Alignment'],
    modifiedFeatures: ['Judgment'],
    newFeatures: [
      {
        name: 'Infernal Contract',
        level: 1,
        description:
          "The diabolist enforcer can bind a creature to a verbal or written contract as a full-round action (Will negates, DC 10 + 1/2 inquisitor level + Wisdom modifier). A creature that breaks the contract takes 1d6 damage per inquisitor level (Fortitude half) and is marked as a contract-breaker, making the enforcer's abilities more effective against it.",
        effects: [],
      },
      {
        name: 'Hellfire Judgment',
        level: 1,
        description:
          'When using the destruction judgment, the diabolist enforcer deals half fire and half unholy damage. Against creatures that have broken a contract she enforces, the damage bonus increases by 1d6.',
        effects: [],
      },
      {
        name: "Devil's Tongue",
        level: 3,
        description:
          'The diabolist enforcer adds her Wisdom modifier to all Diplomacy and Intimidate checks in addition to her Charisma modifier, and gains a +2 bonus on saves against mind-affecting effects.',
        effects: [],
      },
      {
        name: 'Summon Devil',
        level: 8,
        description:
          'Once per day as a standard action, the diabolist enforcer can summon a single devil of CR equal to her inquisitor level – 4 (minimum 1). The summoned devil serves her for 1 minute per inquisitor level before returning to Hell.',
        effects: [],
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 4. Exarch
  // ──────────────────────────────────────────────
  {
    name: 'Exarch',
    className: 'Inquisitor',
    description:
      "An exarch is the chosen representative of her deity's will, acting as an emissary among mortals and a divine enforcer on the material plane. She trades some independent capability for enhanced leadership and divine authority over followers of her faith.",
    replacedFeatures: ['Solo Tactics', 'Teamwork Feats'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Divine Authority',
        level: 1,
        description:
          "The exarch can use Diplomacy in place of Intimidate to demoralize enemies who share her faith's pantheon, and gains a +2 bonus on Diplomacy and Knowledge (religion) checks. She may use her Wisdom modifier instead of Charisma on Diplomacy checks made to influence members of her own faith.",
        effects: [],
      },
      {
        name: 'Lead the Faithful',
        level: 5,
        description:
          'The exarch can grant one teamwork feat she knows to all allies within 30 feet as a standard action. This effect lasts for a number of rounds equal to her Wisdom modifier (minimum 1). She can use this ability once per day at 5th level, plus one additional time per day for every four levels beyond 5th.',
        effects: [],
      },
      {
        name: 'Divine Mandate',
        level: 9,
        description:
          'Once per day, the exarch can issue a divine mandate as a standard action, compelling a creature within 60 feet to take a specific action on its next turn (Will negates, DC 10 + 1/2 inquisitor level + Wisdom modifier). The mandate must be a single sentence command, and the creature acts to the best of its ability to fulfill the mandate.',
        effects: [],
      },
      {
        name: 'Voice of the Divine',
        level: 13,
        description:
          "The exarch's divine authority becomes absolute within her faith. She can use lead the faithful as a move action, and allies benefiting from her shared teamwork feats gain a +1 morale bonus on attack rolls and saving throws.",
        effects: [],
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 5. Heretic
  // ──────────────────────────────────────────────
  {
    name: 'Heretic',
    className: 'Inquisitor',
    description:
      "A heretic has turned away from her original faith but still wields divine power through sheer force of conviction, drawing magic from her own beliefs rather than a deity's sanction. She excels at surviving on her own and operating outside established religious structures.",
    replacedFeatures: ['Domain', 'Judgment (1/day)', 'Second Judgment', 'Third Judgment'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Conviction',
        level: 1,
        description:
          'The heretic draws power from her own unshakeable beliefs. She gains a number of conviction points per day equal to her Wisdom modifier (minimum 1). She can spend conviction points to add a +2 bonus on any d20 roll as an immediate action, or to power other heretic abilities.',
        effects: [],
      },
      {
        name: "Liar's Tongue",
        level: 1,
        description:
          'The heretic gains a +4 bonus on Bluff checks to pass off lies as truths, and can use Bluff in place of Diplomacy when interacting with any creature who does not know her true identity. She may use Bluff as a class skill even if it is not normally on the inquisitor class skill list.',
        effects: [],
      },
      {
        name: 'Righteous Indignation',
        level: 3,
        description:
          'When the heretic is attacked by a creature affiliated with her former faith, she gains a +2 morale bonus on attack rolls and damage rolls against that creature for 1 minute. This bonus increases to +4 at 10th level.',
        effects: [],
      },
      {
        name: 'Blessed Heresy',
        level: 8,
        description:
          'The heretic has perfected her own theological framework. She can prepare one additional domain spell per spell level per day (chosen from any inquisitor domain list), and gains the domain power of a domain of her choice. This chosen domain can be changed each morning during her hour of meditation.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 6. Iconoclast
  // ──────────────────────────────────────────────
  {
    name: 'Iconoclast',
    className: 'Inquisitor',
    description:
      "An iconoclast hunts down those who create or use magic items for evil purposes, specializing in destroying magical creations and nullifying the power of opponents' items. She is particularly effective against constructs and magically-enhanced foes.",
    replacedFeatures: ['Detect Alignment', 'Exploit Weakness'],
    modifiedFeatures: ['Bane'],
    newFeatures: [
      {
        name: 'Detect Magic',
        level: 1,
        description:
          'The iconoclast can use detect magic at will as a spell-like ability. Unlike the standard spell, she can use this ability as a swift action and can immediately identify the school of any magical aura she detects.',
        effects: [],
      },
      {
        name: 'Sunder Blessing',
        level: 1,
        description:
          "When the iconoclast sunders a weapon with magical enhancements or a magic item, she adds her Wisdom modifier as a bonus on the combat maneuver check. Items she sunders cannot benefit from the broken condition's delay to total destruction; they are fully destroyed at 0 hit points.",
        effects: [],
      },
      {
        name: 'Nullify',
        level: 8,
        description:
          'Once per day, the iconoclast can touch a magic item as a standard action, suppressing all of its magical properties for a number of rounds equal to her inquisitor level (no save for attended items belonging to unconscious or willing creatures; Will negates for held or worn items). She can use this ability one additional time per day at 14th level.',
        effects: [],
      },
      {
        name: 'Item Destruction Judgment',
        level: 3,
        description:
          "When the iconoclast uses her bane ability against a construct, she also suppresses the construct's damage reduction and any energy immunity it possesses for the duration of the bane. Against non-construct opponents, she can suppress one magic item's function for 1 round per hit that deals damage.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 7. Immolator
  // ──────────────────────────────────────────────
  {
    name: 'Immolator',
    className: 'Inquisitor',
    description:
      "An immolator serves a deity of fire, wielding divine flames to purify corruption and incinerate her deity's enemies. She replaces some standard inquisitor abilities with fire-based powers and develops an immunity to fire over time.",
    replacedFeatures: ['Domain', 'Bane'],
    modifiedFeatures: ['Judgment'],
    newFeatures: [
      {
        name: 'Flame of the Faithful',
        level: 1,
        description:
          'The immolator gains fire resistance 5 at 1st level, increasing to resistance 10 at 5th level and immunity to fire at 10th level. She can channel fire through her weapons; as a swift action, her weapon deals an additional 1d4 fire damage on a successful hit for a number of rounds equal to her Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Burning Judgment',
        level: 1,
        description:
          "The immolator's destruction judgment deals fire damage instead of its normal damage type, and targets struck by her burning judgment catch fire (1d6 fire damage per round, Reflex DC 15 to extinguish). She can use the fire subdomain's fire bolt power in place of her domain power.",
        effects: [],
      },
      {
        name: 'Pyre',
        level: 5,
        description:
          'Once per day, the immolator can create a 10-foot-radius burst of divine fire centered on herself or a point within 30 feet as a standard action, dealing 1d6 fire damage per inquisitor level (Reflex half, DC 10 + 1/2 inquisitor level + Wisdom modifier). Creatures that fail the save are set on fire.',
        effects: [],
      },
      {
        name: 'Immolating Bane',
        level: 11,
        description:
          "When the immolator activates bane, her weapon also deals 1d6 fire damage per hit on affected creatures. This fire damage is not subject to fire resistance or immunity when used against creatures that are the primary target of her deity's wrath (as determined by her deity's domains).",
        effects: [],
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 8. Infiltrator
  // ──────────────────────────────────────────────
  {
    name: 'Infiltrator',
    className: 'Inquisitor',
    description:
      'An infiltrator specializes in disguising herself as a member of the group she is investigating, adopting their beliefs, practices, and even their supernatural abilities. She is a master spy who works from the inside to bring down organizations that threaten her faith.',
    replacedFeatures: ['Domain', 'Detect Alignment'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Misdirection',
        level: 1,
        description:
          "The infiltrator can use misdirection as a spell-like ability at will, targeting herself only. She also gains a +4 bonus on Disguise checks and can create a disguise in half the normal time. When she adopts a disguise to infiltrate a specific organization, she can ask her deity one question per day (as per commune) about that organization's activities.",
        effects: [],
      },
      {
        name: 'Forbidden Lore',
        level: 1,
        description:
          "The infiltrator can use the knowledge, skills, and spell-like abilities of another deity's domain for a limited time. She selects one domain at 1st level; she gains the domain's 1st-level power and can prepare one domain spell per day from that domain's list. She can change her selected domain each morning.",
        effects: [],
      },
      {
        name: 'Adaptive Tactics',
        level: 4,
        description:
          'The infiltrator learns the teamwork feats of her enemies. Whenever she witnesses an enemy use a teamwork feat, she may use that feat herself for 24 hours as if she possessed it. She can benefit from a number of borrowed teamwork feats simultaneously equal to her Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Deep Cover',
        level: 8,
        description:
          'The infiltrator can completely suppress her divine aura and alignment aura, making her undetectable by detect evil/good/law/chaos, discern lies, detect thoughts, and similar divination spells for 24 hours per use. She can use this ability a number of times per day equal to her Wisdom modifier.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 9. Monster Tactician
  // ──────────────────────────────────────────────
  {
    name: 'Monster Tactician',
    className: 'Inquisitor',
    description:
      'A monster tactician summons creatures to fight alongside her, sharing her teamwork feats with her summoned allies and using them as tactical assets. She trades some personal combat power for an ever-growing arsenal of called monsters.',
    replacedFeatures: ['Bane', 'Greater Bane', 'Exploit Weakness'],
    modifiedFeatures: ['Solo Tactics', 'Teamwork Feats'],
    newFeatures: [
      {
        name: 'Summon Monster (Sp)',
        level: 1,
        description:
          'The monster tactician gains the ability to cast summon monster I as a spell-like ability a number of times per day equal to 3 + her Wisdom modifier. She gains access to summon monster II at 3rd level, III at 5th, IV at 7th, V at 9th, VI at 11th, VII at 13th, VIII at 15th, and IX at 17th level.',
        effects: [],
      },
      {
        name: 'Monster Teamwork',
        level: 1,
        description:
          "The monster tactician can grant any teamwork feat she possesses to any creature she has summoned with her summon monster ability. The summoned creature is treated as having the feat for as long as it remains summoned and in range of the monster tactician's solo tactics ability.",
        effects: [],
      },
      {
        name: 'Summon Tactics',
        level: 5,
        description:
          'When the monster tactician uses summon monster, she can simultaneously grant one teamwork feat she knows to all summoned creatures within 30 feet as part of the same action. At 11th level, she can grant two teamwork feats simultaneously.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 10. Preacher
  // ──────────────────────────────────────────────
  {
    name: 'Preacher',
    className: 'Inquisitor',
    description:
      "A preacher is a wandering evangelist who travels the roads spreading her deity's word with equal parts fervor and intimidation, inspiring allies and terrifying the faithless. She excels at boosting her companions through powerful oratory rather than tactical teamwork.",
    replacedFeatures: ['Solo Tactics', 'Teamwork Feats'],
    modifiedFeatures: ['Judgment'],
    newFeatures: [
      {
        name: 'Preaching',
        level: 1,
        description:
          'The preacher can spend 1 minute delivering a sermon to grant all allies within 60 feet a +1 morale bonus on attack rolls, weapon damage rolls, and saving throws against fear for 10 minutes per inquisitor level. This bonus increases to +2 at 5th level, +3 at 10th level, and +4 at 15th level.',
        effects: [],
      },
      {
        name: 'Rousing Speech',
        level: 3,
        description:
          'The preacher can deliver a rousing speech as a standard action to grant all allies within 30 feet the benefit of remove fear for 1 round, plus a +2 morale bonus on attack rolls and weapon damage rolls for a number of rounds equal to her Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Soothing Voice',
        level: 3,
        description:
          'The preacher can calm hostile crowds and enemies through the power of her words. She may use calm emotions as a spell-like ability a number of times per day equal to her Wisdom modifier, but only within 30 feet and only against humanoids.',
        effects: [],
      },
      {
        name: 'Zealous Condemnation',
        level: 9,
        description:
          "The preacher can call out a single enemy as a swift action, condemning it before her allies. All allies within 60 feet gain the benefit of the preacher's bane ability against that target for 1 round per inquisitor level. This ability can be used once per day, plus once per day per four inquisitor levels beyond 9th.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 11. Ravener Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Ravener Hunter',
    className: 'Inquisitor',
    description:
      'A ravener hunter is dedicated to hunting and destroying demons and other raveners of the Worldwound, combining divine power with exceptional knowledge of demonology. She learns to resist demonic corruption and to share her anti-demon techniques with allies.',
    replacedFeatures: ['Domain'],
    modifiedFeatures: ['Judgment', 'Bane'],
    newFeatures: [
      {
        name: 'Demonic Bane',
        level: 1,
        description:
          "The ravener hunter's bane ability always functions against demons, regardless of the daily activation requirement. Her bane damage against demons is 2d6 instead of the normal 2d6, and she can use this ability for a number of rounds equal to twice her inquisitor level.",
        effects: [],
      },
      {
        name: 'Resist Corruption',
        level: 1,
        description:
          'The ravener hunter gains a +4 bonus on saving throws against the spell-like abilities of demons and against demonic corruption effects such as demonic possession and the corruption descriptor. She gains this bonus on Sense Motive checks to detect demonic influence as well.',
        effects: [],
      },
      {
        name: 'Demonology Expertise',
        level: 3,
        description:
          'The ravener hunter adds her Wisdom modifier as a bonus on Knowledge (planes) checks related to demons. Once per day per four inquisitor levels, she can attempt a Knowledge (planes) check as a free action to recall one specific vulnerability or ability of a demon she has identified.',
        effects: [],
      },
      {
        name: 'Ward Against Corruption',
        level: 7,
        description:
          'The ravener hunter can create a ward against demonic corruption centered on herself with a radius of 10 feet per inquisitor level. All allies within the ward gain the benefit of her resist corruption ability. This ward lasts for 1 minute per inquisitor level and can be used once per day.',
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting: Demons Revisited',
  },

  // ──────────────────────────────────────────────
  // 12. Relic Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Relic Hunter',
    className: 'Inquisitor',
    description:
      "A relic hunter seeks out holy relics and sacred items, wielding them in her deity's service and learning to unlock powers that others cannot access. She forms a special bond with divine relics that grows more powerful as she advances.",
    replacedFeatures: ['Domain', 'Cunning Initiative'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sacred Relic',
        level: 1,
        description:
          'The relic hunter bonds with one holy relic (a non-consumable magic item worth up to 1,000 gp per inquisitor level) chosen at 1st level. She treats this item as if her caster level were 4 higher for the purpose of activating its abilities, and the item gains an additional use per day of any limited-use ability.',
        effects: [],
      },
      {
        name: 'Relic Empowerment',
        level: 3,
        description:
          'The relic hunter can draw additional power from her bonded relic. As a swift action, she can expend one use of judgment to activate a single spell-like ability of her bonded relic even if she has used all charges for the day. She can do this once per day at 3rd level, plus one additional time per day for every four levels beyond 3rd.',
        effects: [],
      },
      {
        name: 'Relic Seeker',
        level: 5,
        description:
          'The relic hunter can sense the presence of relics and holy items within 60 feet, and can attempt a Knowledge (religion) or Spellcraft check to identify their properties without using identify or similar spells. She gains a +4 bonus on Perception and Survival checks to locate hidden or buried relics.',
        effects: [],
      },
      {
        name: 'Relic Bond',
        level: 9,
        description:
          "The relic hunter's bond with her sacred relic deepens. She can recall her bonded relic to her hand as a free action (as if using telekinesis), and if the relic is destroyed, she can spend 8 hours in prayer to reform it at full power, provided the original relic's remains exist.",
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Intrigue',
  },

  // ──────────────────────────────────────────────
  // 13. Sacred Huntmaster
  // ──────────────────────────────────────────────
  {
    name: 'Sacred Huntmaster',
    className: 'Inquisitor',
    description:
      "A sacred huntmaster bonds with an animal companion, hunting alongside her beast as an extension of her deity's will. She shares her judgment and teamwork feats with her companion, creating a devastating divine hunting pair.",
    replacedFeatures: ['Domain', 'Solo Tactics'],
    modifiedFeatures: ['Teamwork Feats'],
    newFeatures: [
      {
        name: 'Animal Companion',
        level: 1,
        description:
          "The sacred huntmaster gains an animal companion as per the druid class feature, treating her inquisitor level as her effective druid level. The animal companion is considered to have any teamwork feat the sacred huntmaster possesses for the purpose of the inquisitor's solo tactics ability.",
        effects: [],
      },
      {
        name: 'Shared Judgment',
        level: 1,
        description:
          "The sacred huntmaster can designate her animal companion as the target of her judgment, applying the judgment's effect to the companion's attacks and defenses rather than her own. She may split judgment between herself and her companion starting at the level she would normally gain a second judgment.",
        effects: [],
      },
      {
        name: 'Coordinated Hunt',
        level: 5,
        description:
          "When both the sacred huntmaster and her animal companion are adjacent to the same enemy, they both gain a +2 bonus on attack rolls against that enemy. This bonus increases to +4 at 10th level. The animal companion also benefits from the huntmaster's bane ability.",
        effects: [],
      },
      {
        name: 'Master Hunter',
        level: 11,
        description:
          "The sacred huntmaster's bond with her companion allows for extraordinary synchronized attacks. Once per round when the huntmaster confirms a critical hit, her animal companion can make a free attack against the same target as an immediate action.",
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 14. Sanctified Slayer
  // ──────────────────────────────────────────────
  {
    name: 'Sanctified Slayer',
    className: 'Inquisitor',
    description:
      "A sanctified slayer focuses entirely on destruction and precision strikes, trading the inquisitor's teamwork abilities for the studied target and slayer talent progression of the slayer class. She is an efficient and lethal killer devoted to her deity's justice.",
    replacedFeatures: [
      'Solo Tactics',
      'Teamwork Feats (5th)',
      'Teamwork Feats (9th)',
      'Teamwork Feats (13th)',
      'Teamwork Feats (17th)',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Studied Target',
        level: 1,
        description:
          'The sanctified slayer can study a foe she can observe as a move action, gaining a +1 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against that creature, plus a +1 bonus on attack rolls and weapon damage rolls against it. She can maintain one studied target at a time at 1st level, gaining an additional studied target at 5th, 10th, 15th, and 20th level.',
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 4,
        description:
          "At 4th level and every 4 levels thereafter, the sanctified slayer gains a slayer talent from the slayer's talent list. She treats her inquisitor level as her slayer level for the purpose of meeting prerequisites. At 12th level, she may select advanced slayer talents.",
        effects: [],
      },
      {
        name: 'Swift Study',
        level: 7,
        description:
          'The sanctified slayer can use her studied target ability as a swift action instead of a move action.',
        effects: [],
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 15. Sin Eater
  // ──────────────────────────────────────────────
  {
    name: 'Sin Eater',
    className: 'Inquisitor',
    description:
      'A sin eater purifies the world by consuming the sins of the fallen, taking evil into herself and transforming it into divine power. She performs last rites on the dead and can temporarily absorb the transgressions of others to fuel her righteous judgment.',
    replacedFeatures: ['Domain'],
    modifiedFeatures: ['Judgment'],
    newFeatures: [
      {
        name: 'Consume Sin',
        level: 1,
        description:
          "As a standard action, the sin eater can perform a ritual over a recently slain creature (dead no more than 1 minute per inquisitor level) to absorb its sins. She gains a number of temporary hit points equal to the creature's Hit Dice, gains a +2 morale bonus on attack rolls and saving throws for 1 minute, and the creature's soul is cleansed and may pass on peacefully.",
        effects: [],
      },
      {
        name: 'Burden of Sin',
        level: 1,
        description:
          'The sin eater can voluntarily absorb a curse, disease, or poison afflicting a willing adjacent creature as a standard action, transferring the condition to herself. She gains a +4 bonus on saves against conditions she voluntarily absorbs through this ability. She may cleanse one such burden per day at 1st level, plus one per four inquisitor levels beyond 1st.',
        effects: [],
      },
      {
        name: 'Empowered by Sin',
        level: 5,
        description:
          'The sin eater has become accustomed to carrying corruption. She gains a +2 bonus on saving throws against all curse, disease, poison, and death effects. Once per day, she can channel absorbed sin outward in a 30-foot burst dealing 1d6 negative energy damage per two inquisitor levels (Will half, DC 10 + 1/2 inquisitor level + Wisdom modifier).',
        effects: [],
      },
      {
        name: 'Final Absolution',
        level: 11,
        description:
          'Once per day, the sin eater can grant absolution to a dying creature she touches (a standard action), stabilizing it and removing all curses, diseases, and poisons afflicting it. The cleansed creature gains immunity to its original afflictions for 24 hours. The sin eater herself absorbs all of the removed conditions simultaneously.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 16. Spellbreaker
  // ──────────────────────────────────────────────
  {
    name: 'Spellbreaker',
    className: 'Inquisitor',
    description:
      'A spellbreaker is a divine hunter of arcane casters, trained to interrupt spellcasting, dispel magic, and cut down wizards and sorcerers before they can act. She is the bane of enemy spellcasters and magical creatures alike.',
    replacedFeatures: ['Domain', 'Detect Alignment'],
    modifiedFeatures: ['Bane'],
    newFeatures: [
      {
        name: 'Forbid Action',
        level: 1,
        description:
          "As an immediate action, the spellbreaker can attempt to interrupt a spell being cast within 30 feet. She makes an opposed Wisdom check against the caster's concentration check; if she succeeds, the spell is lost. She can use this ability once per round, and may add her Wisdom modifier as a bonus on this Wisdom check.",
        effects: [],
      },
      {
        name: 'Detect Magic',
        level: 1,
        description:
          'The spellbreaker can use detect magic as a spell-like ability at will. She can determine the school of any magical aura as a free action on the round she detects it, and can make a Spellcraft check to identify spells being cast within 60 feet as a free action.',
        effects: [],
      },
      {
        name: 'Antimagic Judgment',
        level: 3,
        description:
          'When the spellbreaker uses her destruction judgment against a creature with active spell buffs, she can choose to target those buffs instead of the creature. She makes a dispel check (1d20 + inquisitor level) against DC 11 + the caster level of each buff, potentially stripping multiple effects.',
        effects: [],
      },
      {
        name: 'Spell Rending',
        level: 6,
        description:
          "The spellbreaker's bane ability functions against creatures actively casting spells or with 3 or more active spell effects. Whenever she strikes such a creature with her bane weapon, she can make a free dispel check against one of its active spells as a free action.",
        effects: [],
      },
      {
        name: 'Disrupting Attack',
        level: 9,
        description:
          'Any time the spellbreaker successfully strikes a spellcasting creature in melee, that creature must succeed at a concentration check (DC 15 + the level of any spell it was attempting to cast) or lose the spell. This check is in addition to any concentration check required by the hit itself.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 17. Witch Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Witch Hunter',
    className: 'Inquisitor',
    description:
      'A witch hunter specializes in identifying and neutralizing magical threats, developing an almost supernatural ability to resist and dispel the enchantments and hexes of witches and other arcane practitioners. She is particularly adept at protecting allies from magical compulsion.',
    replacedFeatures: ['Domain', 'Detect Alignment', 'Bane'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Witch's Bane",
        level: 1,
        description:
          'The witch hunter gains a +2 bonus on saving throws against spells, spell-like abilities, and supernatural abilities of arcane casters. This bonus increases to +4 against hexes and witch spells specifically. She can use detect magic at will as a spell-like ability.',
        effects: [],
      },
      {
        name: 'Identify Magic User',
        level: 1,
        description:
          'The witch hunter can attempt a Knowledge (arcana) check in place of a Perception or Sense Motive check to identify an arcane spellcaster, determine if a creature has an active magical effect on it, or sense the presence of a magical aura. She adds her Wisdom modifier as a bonus on these Knowledge checks.',
        effects: [],
      },
      {
        name: 'Spell Sage',
        level: 3,
        description:
          'The witch hunter gains Spellcraft as a class skill and adds her Wisdom modifier as a bonus on Spellcraft checks. She can identify any spell as it is cast (no action, Spellcraft DC 15 + spell level) and can share this identification with allies within 30 feet as a free action.',
        effects: [],
      },
      {
        name: 'Burning Magic',
        level: 5,
        description:
          "Whenever an arcane spell fails to affect the witch hunter due to her saving throw or spell resistance, the spell's energy is redirected. The original caster takes 1d6 damage per level of the failed spell (Fortitude negates, DC 10 + 1/2 inquisitor level + Wisdom modifier). The witch hunter can use this ability once per day per five inquisitor levels.",
        effects: [],
      },
      {
        name: 'Break Enchantment',
        level: 7,
        description:
          'Once per day, the witch hunter can use break enchantment as a spell-like ability with a caster level equal to her inquisitor level. She may additionally use this ability once per day at 13th level.',
        effects: [],
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 18. Anger Inquisitor
  // ──────────────────────────────────────────────
  {
    name: 'Anger Inquisitor',
    className: 'Inquisitor',
    description:
      'An anger inquisitor serves a deity of wrath, channeling divine fury into her combat style and judgment. She strikes with terrifying force and can cause enemies to become confused by her overwhelming aggression.',
    replacedFeatures: ['Domain', 'Cunning Initiative'],
    modifiedFeatures: ['Judgment'],
    newFeatures: [
      {
        name: 'Divine Wrath',
        level: 1,
        description:
          'When the anger inquisitor enters combat and activates her judgment, she can enter a state of divine fury as a swift action. She gains a +2 bonus on melee attack rolls and a +4 bonus on melee damage rolls while in divine wrath, but takes a –2 penalty to AC. This state lasts for a number of rounds equal to 3 + her Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Terrifying Strike',
        level: 3,
        description:
          'When the anger inquisitor confirms a critical hit against an enemy, that enemy must succeed at a Will save (DC 10 + 1/2 inquisitor level + Wisdom modifier) or become shaken for 1d4 rounds. If the enemy is already shaken, they become frightened instead.',
        effects: [],
      },
      {
        name: 'Wrath Judgment',
        level: 5,
        description:
          "The anger inquisitor's destruction judgment deals an additional die of damage on the first successful hit each round. At 10th level, this becomes an additional two dice, and at 15th level, an additional three dice. The type of the bonus damage matches her weapon's base damage.",
        effects: [],
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 19. Cold Iron Warden
  // ──────────────────────────────────────────────
  {
    name: 'Cold Iron Warden',
    className: 'Inquisitor',
    description:
      'A cold iron warden specializes in hunting fey, devils, and demons — creatures vulnerable to cold iron — bringing divine justice to those who meddle in mortal affairs. She learns to exploit the weaknesses of extraplanar beings and supernatural creatures.',
    replacedFeatures: ['Domain', 'Detect Alignment'],
    modifiedFeatures: ['Bane', 'Exploit Weakness'],
    newFeatures: [
      {
        name: 'Cold Iron Bane',
        level: 1,
        description:
          "The cold iron warden's bane ability is particularly effective against creatures with vulnerability to cold iron. Against such creatures, her bane damage is 3d6 instead of 2d6, and the weapon is treated as cold iron for the purpose of overcoming damage reduction.",
        effects: [],
      },
      {
        name: 'Detect Supernatural',
        level: 1,
        description:
          'The cold iron warden can detect fey, outsiders, and creatures with supernatural abilities within 60 feet at will as a standard action. After concentrating for 3 rounds, she can pinpoint the location and type of each such creature within range.',
        effects: [],
      },
      {
        name: 'Planar Expertise',
        level: 3,
        description:
          'The cold iron warden gains a +4 bonus on Knowledge (planes) and Knowledge (nature) checks related to fey and outsiders. She can take 10 on these checks even when threatened or distracted.',
        effects: [],
      },
      {
        name: "Warden's Ward",
        level: 7,
        description:
          'The cold iron warden can create a protective ward in a 20-foot radius centered on herself as a standard action. Within this ward, fey and outsiders must succeed at a Will save (DC 10 + 1/2 inquisitor level + Wisdom modifier) or be unable to use teleportation, plane shift, or dimensional travel for 1 minute.',
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting: Fey Revisited',
  },

  // ──────────────────────────────────────────────
  // 20. Death's Ferryman
  // ──────────────────────────────────────────────
  {
    name: "Death's Ferryman",
    className: 'Inquisitor',
    description:
      "A death's ferryman serves a psychopomp deity such as Pharasma, guiding the dead to their proper rest and hunting down undead that evade death's embrace. She gains power over the undead and can see into the spirit world.",
    replacedFeatures: ['Domain'],
    modifiedFeatures: ['Judgment', 'Bane'],
    newFeatures: [
      {
        name: 'Spirit Sight',
        level: 1,
        description:
          "The death's ferryman can see invisible undead and incorporeal creatures as if they were visible, and can detect undead within 60 feet at will. She can see into the Ethereal Plane to a distance of 30 feet as if using see invisibility.",
        effects: [],
      },
      {
        name: 'Undead Bane',
        level: 1,
        description:
          "The death's ferryman's bane ability always functions against undead without expending uses. Her bane damage against undead is treated as positive energy, bypassing undead immunity to such damage types from bane specifically.",
        effects: [],
      },
      {
        name: 'Lay to Rest',
        level: 4,
        description:
          "As a full-round action, the death's ferryman can make a single melee attack against an undead creature. If the attack hits and the undead has fewer than 10 hit points per inquisitor level, it must succeed at a Will save (DC 10 + 1/2 inquisitor level + Wisdom modifier) or be immediately destroyed. A destroyed undead cannot be raised again for 24 hours.",
        effects: [],
      },
      {
        name: "Psychopomp's Judgment",
        level: 8,
        description:
          "When using her judgment against undead, the death's ferryman can use the destruction and healing judgments simultaneously, dealing damage to undead while simultaneously healing herself for the same amount.",
        effects: [],
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 21. Keeper of Constructs
  // ──────────────────────────────────────────────
  {
    name: 'Keeper of Constructs',
    className: 'Inquisitor',
    description:
      'A keeper of constructs serves a deity of artifice or invention, developing a bond with mechanical beings and learning to command and repair constructs as extensions of her divine will. She may eventually replace her animal companion with a construct servant.',
    replacedFeatures: ['Domain', 'Solo Tactics'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Construct Bond',
        level: 1,
        description:
          'The keeper of constructs forms a bond with a construct creature, treating it as her animal companion. She uses her inquisitor level as her effective druid level for the companion. She can share her teamwork feats with her construct companion, and the construct gains DR 2/— while bonded.',
        effects: [],
      },
      {
        name: 'Repair Construct',
        level: 1,
        description:
          'The keeper of constructs can repair a construct as if using a cure wounds spell of the appropriate level, using her Wisdom modifier in place of the normal spellcasting ability modifier. She can perform emergency repairs as a standard action, healing 1d8 hit points per two inquisitor levels.',
        effects: [],
      },
      {
        name: 'Command Construct',
        level: 5,
        description:
          'Once per day per four inquisitor levels, the keeper of constructs can attempt to override the control of an independent or enemy-controlled construct within 30 feet (Will negates, DC 10 + 1/2 inquisitor level + Wisdom modifier). A successful command places the construct under her control for 1 hour per inquisitor level.',
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 22. Living Grimoire
  // ──────────────────────────────────────────────
  {
    name: 'Living Grimoire',
    className: 'Inquisitor',
    description:
      "A living grimoire uses her deity's holy text as a weapon, infusing the sacred tome with divine power and wielding it as a bludgeoning instrument of faith. Her holy text grows in power as she advances, eventually becoming a truly formidable divine weapon.",
    replacedFeatures: ['Judgment (standard damage)', 'Bane'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Holy Text',
        level: 1,
        description:
          "The living grimoire wields her deity's holy text as a weapon (treat as a club or book-equivalent weapon). The text gains a +1 enhancement bonus at 1st level, increasing by +1 for every four inquisitor levels. She can use her Wisdom modifier instead of Strength on attack and damage rolls with the holy text.",
        effects: [],
      },
      {
        name: 'Sacred Word',
        level: 1,
        description:
          "As a swift action, the living grimoire can speak a sacred word from her text, causing it to deal 1d6 bonus divine damage on the next hit. At 4th level, she can speak sacred words as a free action once per round. The type of bonus damage (fire, cold, acid, etc.) depends on her deity's portfolio.",
        effects: [],
      },
      {
        name: 'Text of Judgment',
        level: 3,
        description:
          'The living grimoire can channel her judgment through her holy text. Her judgment bonuses apply only when she is wielding her holy text, but the bonuses are increased by her Wisdom modifier (minimum +1). If her holy text is destroyed, she can reconsecrate a replacement over 24 hours of prayer.',
        effects: [],
      },
      {
        name: 'Sermon of Destruction',
        level: 8,
        description:
          'Once per day, the living grimoire can open her holy text to a specific passage as a full-round action, creating a 30-foot-radius burst of divine energy dealing 1d6 damage per inquisitor level (Will half, DC 10 + 1/2 inquisitor level + Wisdom modifier). The damage type is determined by her deity.',
        effects: [],
      },
    ],
    source: 'Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 23. Oath-Bound Inquisitor
  // ──────────────────────────────────────────────
  {
    name: 'Oath-Bound Inquisitor',
    className: 'Inquisitor',
    description:
      'An oath-bound inquisitor swears a mighty oath before her deity, binding herself to a specific crusade or calling that grants her additional divine power in exchange for strict behavioral requirements. Breaking her oath strips her of her powers until she atones.',
    replacedFeatures: ['Domain'],
    modifiedFeatures: ['Judgment'],
    newFeatures: [
      {
        name: 'Sacred Oath',
        level: 1,
        description:
          "At 1st level, the oath-bound inquisitor chooses a sacred oath (destroy undead, protect the innocent, eliminate heresy, etc.). She gains a +2 sacred bonus on saves and attack rolls related to her oath's purpose, and her judgment bonuses are increased by 1 when fighting enemies that violate her oath's principles.",
        effects: [],
      },
      {
        name: "Oath's Blessing",
        level: 3,
        description:
          "The power of the oath-bound inquisitor's commitment manifests as a protective blessing. She gains spell resistance equal to 11 + her inquisitor level against spells and effects created by creatures that violate her oath, and is immune to fear when actively pursuing her oath's goals.",
        effects: [],
      },
      {
        name: "Oath's Wrath",
        level: 9,
        description:
          'Once per day, the oath-bound inquisitor can invoke the full power of her sacred oath. For 1 minute, her judgment bonuses are doubled, she gains a +4 sacred bonus on all saving throws, and her weapon attacks against oath-violating creatures deal an additional 2d6 sacred damage.',
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Gods',
  },

  // ──────────────────────────────────────────────
  // 24. Psychic Detective
  // ──────────────────────────────────────────────
  {
    name: 'Psychic Detective',
    className: 'Inquisitor',
    description:
      'A psychic detective combines divine insight with investigative skills honed to a razor edge, using occult techniques and divine revelation to uncover crimes and criminals. She trades some combat power for exceptional information-gathering capabilities.',
    replacedFeatures: ['Bane', 'Greater Bane'],
    modifiedFeatures: ['Judgment'],
    newFeatures: [
      {
        name: "Investigator's Eye",
        level: 1,
        description:
          'The psychic detective gains Perception, Sense Motive, and Knowledge (local) as class skills and adds her Wisdom modifier as a bonus on these checks in addition to any ability modifier normally used. She can attempt all Knowledge checks untrained and can make them as free actions when observing a crime scene.',
        effects: [],
      },
      {
        name: 'Object Reading',
        level: 1,
        description:
          'Once per day per inquisitor level, the psychic detective can use object reading as the occultist ability of the same name by touching an object for 1 minute. She treats her inquisitor level as her occultist level for this purpose.',
        effects: [],
      },
      {
        name: 'Psychic Judgment',
        level: 3,
        description:
          "When the psychic detective uses judgment against a creature she has studied for at least 1 round, her judgment bonuses are increased by 2. She can study a creature as a move action by making a successful Perception or Sense Motive check (DC 10 + creature's CR).",
        effects: [],
      },
      {
        name: 'Read the Scene',
        level: 7,
        description:
          'The psychic detective can cast retrocognition once per day as a spell-like ability, treating her inquisitor level as her caster level. Additionally, she can use legend lore once per week as a spell-like ability focused on a specific criminal act or transgression.',
        effects: [],
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 25. Lich Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Lich Hunter',
    className: 'Inquisitor',
    description:
      'A lich hunter dedicates her existence to destroying liches and other powerful undead spellcasters, developing specialized techniques to overcome their defenses and destroy their phylacteries. She is one of the most feared opponents a lich can face.',
    replacedFeatures: ['Domain', 'Detect Alignment'],
    modifiedFeatures: ['Bane', 'True Judgment'],
    newFeatures: [
      {
        name: 'Phylactery Sense',
        level: 1,
        description:
          'The lich hunter can sense the presence of undead within 60 feet as a free action, and can determine if an undead creature has a phylactery within 1 mile by concentrating for 1 minute. She gains a +4 bonus on Knowledge (religion) checks related to liches and similar undead spellcasters.',
        effects: [],
      },
      {
        name: 'Undead Slaying Strike',
        level: 1,
        description:
          "The lich hunter's bane ability deals 3d6 damage against undead instead of 2d6, and the enhancement bonus of her bane weapon is +3 against undead. When she confirms a critical hit against an undead spellcaster, it must succeed at a Fortitude save (DC 10 + 1/2 inquisitor level + Wisdom modifier) or be unable to cast spells for 1 round.",
        effects: [],
      },
      {
        name: 'Lich Lore',
        level: 4,
        description:
          "The lich hunter automatically succeeds at Knowledge checks to identify liches and their abilities. She knows the theoretical location of the lich's phylactery type (a general sense, not a GPS) and gains a +4 bonus on saves against the spells and spell-like abilities of undead.",
        effects: [],
      },
      {
        name: 'Destroy Phylactery',
        level: 10,
        description:
          'The lich hunter can destroy a phylactery with a single successful strike if she is aware of its presence and purpose. She must make an attack roll against AC 5; a successful hit reduces the phylactery to 0 hit points regardless of its actual hit points. After destroying a phylactery, she cannot use this ability again for 24 hours.',
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting: Undead Revisited',
  },

  // ──────────────────────────────────────────────
  // 26. Urban Inquisitor
  // ──────────────────────────────────────────────
  {
    name: 'Urban Inquisitor',
    className: 'Inquisitor',
    description:
      'An urban inquisitor operates in cities and densely populated areas, rooting out corruption and crime within civilization rather than hunting in the wilderness. She is an expert at navigating urban social hierarchies and using city environments to her advantage.',
    replacedFeatures: ['Track', 'Cunning Initiative'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'City Shadow',
        level: 1,
        description:
          'The urban inquisitor gains Bluff, Disguise, Intimidate, and Knowledge (local) as class skills. She gains a +2 bonus on Stealth and Perception checks in urban environments, and can move at full speed while using the Stealth skill in cities without penalty.',
        effects: [],
      },
      {
        name: 'Urban Tracking',
        level: 1,
        description:
          'In place of Track, the urban inquisitor gains Urban Tracking as a bonus feat. She can gather information about a specific individual in a city in 30 minutes (instead of 1d4+1 hours) and adds her Wisdom modifier to gather information checks in addition to her Charisma modifier.',
        effects: [],
      },
      {
        name: 'Crowd Tactics',
        level: 5,
        description:
          'The urban inquisitor can move through a crowd without provoking attacks of opportunity. She can use the crowd as concealment (gaining a 20% miss chance) and can use the bodies of bystanders to intercept attacks, redirecting one attack per round to the nearest non-hostile creature with a successful Reflex save (DC 15).',
        effects: [],
      },
      {
        name: 'System Mastery',
        level: 9,
        description:
          'The urban inquisitor understands city bureaucracy and criminal networks completely. She can call in favors once per day, gaining access to city guard assistance, criminal contacts, or noble connections providing aid equal to a creature with CR equal to her inquisitor level – 4.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 27. Vampire Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Vampire Hunter',
    className: 'Inquisitor',
    description:
      "A vampire hunter specializes in the tracking and destruction of vampires and other blood-drinking undead, learning their weaknesses intimately and developing resistances to their most dangerous abilities. She is the embodiment of a vampire's nightmare.",
    replacedFeatures: ['Domain', 'Detect Alignment'],
    modifiedFeatures: ['Bane', 'True Judgment'],
    newFeatures: [
      {
        name: 'Vampire Expertise',
        level: 1,
        description:
          'The vampire hunter gains a +4 bonus on Knowledge (religion) checks related to vampires and similar undead. She automatically identifies vampires and their spawn on sight and knows all of their common weaknesses and methods of destruction. She gains a +2 sacred bonus on saves against vampire special attacks including blood drain, domination, and energy drain.',
        effects: [],
      },
      {
        name: 'Blessed Stake',
        level: 1,
        description:
          'The vampire hunter can treat any piercing weapon she wields as a blessed stake for the purpose of vampire weaknesses. Vampires struck by her weapon lose their fast healing for 1 round per hit and cannot use gaseous form for 1 round per inquisitor level after being struck.',
        effects: [],
      },
      {
        name: 'Sunlight Judgment',
        level: 3,
        description:
          'When the vampire hunter uses her destruction judgment against vampires or creatures with light sensitivity or light blindness, the damage bonus is doubled. She can also use judgment to create an aura of daylight (as the spell) that persists for 1 round per inquisitor level once per day.',
        effects: [],
      },
      {
        name: 'True Death',
        level: 8,
        description:
          "Once per day, when the vampire hunter reduces a vampire to 0 hit points, she can attempt to destroy it permanently rather than forcing it to return to its coffin. She makes a Knowledge (religion) check (DC 15 + vampire's CR); success means the vampire is permanently slain and cannot reform.",
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting: Undead Revisited',
  },
];
