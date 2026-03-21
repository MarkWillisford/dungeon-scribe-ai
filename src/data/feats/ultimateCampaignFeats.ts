import type { FeatDefinition } from '@/types/feats';

export const ULTIMATE_CAMPAIGN_FEATS: FeatDefinition[] = [
  {
    id: 'accursed',
    name: 'Accursed',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'You carry a curse that can be lifted only through great effort. You gain spell resistance equal to 5 plus your character level. This resistance cannot be voluntarily suppressed, though your own spells and magic items still function automatically on you. Goal: Lift the curse or purge the fiendish blood corruption through circumstances determined by the GM. Completion Benefit: Your spell resistance changes to 11 plus your character level, applying only against harmful enchantment, necromancy, and transmutation effects. Beneficial spells bypass this resistance automatically, and you may voluntarily lower it.',
    shortDescription: 'Gain spell resistance from a curse; lifting it improves the resistance.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must carry a curse that can be lifted only by a quest or similar great undertaking, or have the Cursed Birth background.',
      },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'arisen',
    name: 'Arisen',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      "You have returned from death with renewed purpose. You remain alive until your negative hit points equal or exceed 4 plus your Constitution score (instead of the normal Constitution score threshold). Once per day as a standard action, you can gain temporary hit points equal to your Hit Dice, lasting 10 minutes. Goal: Personally meet and hear directly from your deity or that deity's chosen herald. Completion Benefit: You gain a +2 bonus on saving throws against death and fear effects, and healing spells cast upon you are treated as if cast by a caster 1 level higher.",
    shortDescription: 'Survive longer at negative HP and gain temporary hit points daily.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have been slain and brought back from the dead, or have the Left to Die or Cursed Birth background.',
      },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'battlefield_healer',
    name: 'Battlefield Healer',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'In even the fiercest battles, you risk life and limb to save your allies. When making concentration checks caused by taking damage, reduce the damage by 50% for the purpose of calculating the DC. Goal: Provoke at least 20 attacks of opportunity while casting conjuration (healing) spells on allies. Completion Benefit: You automatically succeed at concentration checks for conjuration (healing) spells caused by taking damage.',
    shortDescription: 'Halve damage for concentration check DCs when casting healing spells.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have successfully cast a conjuration (healing) spell on an ally after being hit by an attack of opportunity, or have the Battle, Chaplain, or Healed background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'champion',
    name: 'Champion',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'As a swift action, you can declare single combat with one opponent within 50 feet in line of sight, gaining a +1 bonus on attack rolls and a +1 dodge bonus to AC against that foe as long as no one else threatens that opponent. If another combatant joins the fight, the challenge ends and you suffer a -2 penalty on attack rolls and AC for 1 round. You can declare a single combat challenge at will, but cannot declare it on the same foe for another 24 hours. Goal: Achieve victory in multiple single-combat encounters against challenging opponents without interference. Completion Benefit: The bonuses increase to +2, and any confirmed critical hits you make against such a foe deal an additional 1d6 points of damage.',
    shortDescription: 'Declare single combat to gain attack and AC bonuses against one foe.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have defeated a single challenging foe without any aid from another, or have the Champion of a God, Champion of the People, Competition Champion, or Gladiator background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'damned',
    name: 'Damned',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      "From your earliest days, you were destined to sacrifice everything in your quest for power. You gain a +2 bonus on Charisma-based checks involving evil-aligned outsiders and a +1 bonus to the DC of spells and spell-like abilities against them. However, you take a -2 penalty on Charisma-based checks involving good-aligned outsiders. Goal: Successfully trade your soul to an evil outsider. Completion Benefit: You gain a +2 enhancement bonus to an ability score of your choice (cannot be dispelled except through deity intervention), and a +2 bonus on caster level checks against good-aligned outsiders. Death without the outsider's permission prevents resurrection.",
    shortDescription:
      'Gain bonuses against evil outsiders in exchange for social penalties with good outsiders.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have had friendly contact with a challenging evil-aligned outsider, possess a fiend-related sorcerous bloodline (abyssal or infernal), have direct fiendish ancestry (tiefling or half-fiend), or have the Fiend Raised or The Fiend background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'deny_the_reaper',
    name: 'Deny the Reaper',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'You gain a +2 bonus on Heal checks, increasing to +4 with 10 or more ranks in Heal. You can administer first aid as a move action and can treat deadly wounds without penalties when lacking a healing kit. Goal: Bring an ally back from the dead, including by using breath of life or reincarnate. Completion Benefit: You and allies within 10 feet gain a +2 bonus on saves against death effects. Once per day, you can spontaneously convert any 5th-level or higher conjuration healing spell into breath of life.',
    shortDescription:
      'Improve Heal checks and first aid speed; eventually protect allies from death effects.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have witnessed the death of a close companion in battle that could have been prevented (such as from bleeding, failure to stabilize, or ongoing poison damage), or have the Death in the Family or The War background.',
      },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'eldritch_researcher',
    name: 'Eldritch Researcher',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'You seek new applications for magical energy. When casting spells you personally created, your caster level increases by 1. You also gain a +2 bonus on Spellcraft checks, increasing to +4 with 10 or more ranks in Spellcraft. Goal: Create a new spell of at least 6th level. Completion Benefit: Save DCs for your personally-created spells increase by 1. When applying metamagic feats to your personally-created spells, reduce the total level adjustment by 1 (minimum the original spell level). Alchemists may apply this feat to formulae and extracts.',
    shortDescription: 'Gain caster level and Spellcraft bonuses for your own created spells.',
    prerequisites: [
      {
        type: 'special',
        description: 'You must have created a new spell, or have The Way Things Work background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'fearless_zeal',
    name: 'Fearless Zeal',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      "You demonstrate willingness to sacrifice your life for your faith. Once per day, after rolling but before results apply, you may add +2 to any single attack roll, caster level check, saving throw, or skill check. This bonus increases to +4 at 10 or more levels or Hit Dice. Goal: Die in pursuit of your faith's goals and be brought back to life (or remain deceased and inspire a new character). Completion Benefit: You become a living symbol of faith, allowing you to grant allies sharing your faith a +2 morale bonus on attack rolls and saves for 1 minute once per day.",
    shortDescription: 'Add +2 to any single roll once per day as a devotee of your faith.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have been ordained as a sacred or profane champion by high-ranking clergy, or have the Devoted, Faith-Bringer, or Moral Debt background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'feral_heart',
    name: 'Feral Heart',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'In your chest beats the heart of a wild beast. When you receive morale bonuses on Strength or attack rolls (such as from heroism or barbarian rage), you also gain a +2 bonus on Dexterity- and Strength-based ability and skill checks and a +1 bonus on Reflex saves until the effect ends. Goal: Woo and then marry or otherwise enter into a committed relationship with a person from a civilized culture; this relationship must be forged in love, not bought or coerced. Completion Benefit: You delay the penalties for the exhausted, fatigued, shaken, and sickened conditions for 1 round after first receiving them.',
    shortDescription: 'Gain Dex/Str bonuses and Reflex saves when receiving morale bonuses.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have reverted to savage behavior through a traumatic event or extended period in the wilderness, or have the Raised by Beasts background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'foeslayer',
    name: 'Foeslayer',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'Your feud with your enemies can be quenched only with blood. Choose a specific race or group of humanoids or monstrous humanoids (at GM discretion). The save DCs for your spells and abilities increase by 1 against members of the chosen group, and you gain a +1 dodge bonus to AC against their attacks. Goal: Slay an appropriate number of challenging foes from your chosen group. Completion Benefit: You gain the benefits of the Improved Critical feat on attacks made against members of your chosen race. Your dodge bonus to AC against such foes increases to +2.',
    shortDescription: 'Increase spell DCs and gain dodge AC against a chosen race of enemies.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have been defeated and robbed of at least half your possessions by a particular group of humanoids or monstrous humanoids, or have the An Eye for an Eye, Hated Foe, Raiders, or Vengeance background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'forgotten_past',
    name: 'Forgotten Past',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'The duration of mind-affecting spells that affect you is reduced to half their normal length, with a minimum of 1 round. You also gain a +2 bonus on Perception checks, increasing to +4 if you have 10 or more ranks in Perception. Goal: Regain a major portion of your lost memories through means such as a wish, divine assistance, reliving a past life, or confronting the situation that led to your memory loss. The process must involve encountering a challenging adversary. Completion Benefit: You roll twice whenever you attempt a saving throw against a mind-affecting effect, keeping the better result.',
    shortDescription: 'Halve duration of mind-affecting spells on you and gain Perception bonus.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have suffered permanent memory loss or have the Reincarnated background.',
      },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'glimpse_beyond',
    name: 'Glimpse Beyond',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'You gain a +2 bonus on Knowledge (dungeoneering) checks regarding aberrations, Knowledge (planes) checks for evil outsiders, and Knowledge (religion) checks for undead, plus the ability to make such checks untrained. This bonus increases to +4 with 10 or more ranks in the relevant skill. You also gain a +2 bonus on saves against fear effects. Goal: Be killed or driven insane by an aberration, evil outsider, or undead (as determined by the GM), leaving your mind permanently marked. Completion Benefit: Creatures attempting to read your thoughts take 1d6 Wisdom damage (Will DC 10 + 1/2 character level + Charisma modifier negates). You halve ability damage, ability drain, or penalties to Intelligence, Wisdom, or Charisma (minimum 1). However, you take a -2 penalty on Will saves and roll twice against mind-affecting effects, keeping the better result.',
    shortDescription:
      'Gain Knowledge bonuses about monsters and saves against fear from a terrifying encounter.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have faced an undead, evil outsider, or aberration with a CR greater than your level +4, or have the Raised Among the Dead or The Dead One background.',
      },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'innocent_blood',
    name: 'Innocent Blood',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'You gain a +2 bonus on Intimidate checks, increasing to +4 with 10 or more ranks in Intimidate. Each time you slay an intelligent creature, you gain a +1 bonus on attack rolls and caster level checks for 1 minute (this bonus does not stack with itself). Goal: Slay at least 200 more intelligent noncombatants, then slay a challenging foe that seeks to either bring you to justice for your crimes or usurp your position. Completion Benefit: Any shaken creature takes double the normal penalties when attacking you, making saves against your abilities, or resolving skill checks with you as a target.',
    shortDescription: 'Gain Intimidate bonus and temporary attack boost after each kill.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have slain at least 50 intelligent noncombatants for your own personal gain or for no cause at all, or have the Bloodthirsty, First Kill, or The Kill background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'liberator',
    name: 'Liberator',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'You gain a +1 bonus on attack rolls, weapon damage rolls, and skill checks when your actions would directly lead to freeing prisoners or slaves. Goal: Free at least 200 slaves through perilous rescues (not merely buying them at market). Completion Benefit: Allies within 20 feet share your bonuses. Additionally, as a standard action you can inspire enslaved individuals within 120 feet, granting them temporary hit points equal to half their character level and a +1 bonus on saving throws lasting one hour. A given creature can receive this benefit only once per day. These effects are mind-affecting and language-dependent.',
    shortDescription: 'Gain attack and skill bonuses when freeing prisoners or slaves.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have been enslaved for at least 6 months, or have the Imprisoned or Kidnapped background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'lost_legacy',
    name: 'Lost Legacy',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      "You gain a +1 bonus on Charisma-based ability checks and skill checks. Goal: Restore your family's lost claim for yourself or another family member, and in the process decisively defeat a challenging opponent opposing your birthright. Completion Benefit: You gain a +1 bonus on Wisdom ability checks, Wisdom-based skill checks, and Will saving throws.",
    shortDescription: "Gain a Charisma bonus while pursuing your family's lost title or claim.",
    prerequisites: [
      {
        type: 'special',
        description:
          'Your family must have a claim to an inherited title or position that no longer belongs to them, or you must have the Dishonored Family background.',
      },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'magnum_opus',
    name: 'Magnum Opus',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'Choose a single Craft or Perform skill. Whenever you take 10 with this skill, treat your die result as a 15 instead. Goal: Accomplish one of the following: sell a self-created artwork for at least 25,000 gp; perform at least 10 times for audiences of 100 or more achieving extraordinary results or better; or win artistic patronage from a ruler of a city or country with 100,000 or more people. Completion Benefit: You gain a +5 bonus on skill checks made with your chosen skill, and a +2 bonus on all other Craft and Perform checks for which you have at least 1 rank.',
    shortDescription: 'Treat take-10 as take-15 on a chosen Craft or Perform skill.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have sold five or more self-created artworks totaling at least 5,000 gp, performed at least five times for audiences of 50 or more achieving great performance or better, or have the Virtuoso background.',
      },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'monument_builder',
    name: 'Monument Builder',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'Raw material costs for construction projects you oversee or complete personally are reduced by 10%. You gain a +2 bonus on Knowledge (engineering) checks, increasing to +4 with 10 or more ranks in that skill. Goal: Design and construct a building worth at least 100,000 gp with great personal significance to you. Completion Benefit: The value of all buildings you construct (past and future) increases by 10% due to your growing reputation. When supervising construction projects, you and your workers accomplish double the typical work output within any given timeframe.',
    shortDescription: 'Reduce construction costs by 10% and gain Knowledge (engineering) bonus.',
    prerequisites: [
      {
        type: 'skill',
        skillId: 'knowledge_engineering',
        ranks: 1,
      },
      {
        type: 'special',
        description: 'You must have built a structure worth at least 5,000 gp.',
      },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'nation_builder',
    name: 'Nation Builder',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'You gain a +2 bonus on Perception, Stealth, and Survival checks when in unclaimed wilderness or your controlled territory. If you have 10 or more ranks in one of these skills, the bonus on that skill increases to +4. Goal: Explore and conquer approximately 1,000 square miles, defeat a challenging opponent, claim the land formally, and establish a defensive structure such as a stronghold or fortification. Completion Benefit: You gain a +2 bonus on initiative checks, attack rolls, and saving throws while in the area you have claimed.',
    shortDescription: 'Gain wilderness and territory skill bonuses as you build a nation.',
    prerequisites: [
      {
        type: 'special',
        description: 'You must have explored and claimed an area of at least 100 square miles.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'nemesis',
    name: 'Nemesis',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      "A powerful enemy wishes to cause you great harm, driving you to greater heights. For each new level you gain in a favored class, including the level gained when you chose this feat, you can choose two benefits instead of one. One benefit must be either a bonus hit point or skill point. Your nemesis also gains a +2 bonus on attack and damage rolls against you. Goal: Slay your nemesis. Causing your nemesis's death through your direct actions qualifies even if you do not strike the fatal blow, but another killing your nemesis without your involvement does not count. Completion Benefit: You gain a +2 inherent bonus to an ability score of your choice. You may also retroactively apply your extra favored class benefit to the favored class levels you gained before taking this feat.",
    shortDescription: 'Gain extra favored class benefits due to a nemesis pushing you to grow.',
    prerequisites: [
      {
        type: 'special',
        description: 'You must have at least one enemy who wishes to cause you great harm.',
      },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'prophet',
    name: 'Prophet',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'The truth has been revealed, and you have been chosen to deliver it. When you cast beneficial spells on allies, you gain a +1 sacred bonus to AC for 1 round per spell level (nonevil characters worshipping nonevil deities) or a +1 profane bonus to AC for 1 round per spell level when casting harmful spells on enemies (evil characters). Self-cast spells do not qualify unless they also affect allies. Goal: Convert an appropriate number of creatures to the worship of your deity. Completion Benefit: The AC bonus increases to +2, and the bonus also applies on saving throws for the same duration.',
    shortDescription: 'Gain AC bonus when casting beneficial spells on allies.',
    prerequisites: [
      {
        type: 'special',
        description:
          'Ability to cast divine spells. You must have received a vision from your god or another appropriate supernatural entity, or have the Marked by the Gods background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'redemption',
    name: 'Redemption',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'As an immediate action, you may add a +1 bonus to the result of an ability check, attack roll, saving throw, or skill check you have just rolled by becoming shaken for 1 minute. The bonus must be declared before results are revealed. Goal: Regain any lost class features and complete a quest to prove your worth. In the course of completing this quest, you must decisively defeat a challenging foe connected to the transgression that removed your class abilities or led to disgrace. Completion Benefit: You gain the ability to reroll a failed saving throw once per day. You must keep the result of the second roll, even if it is lower.',
    shortDescription: 'Add +1 to any roll at the cost of becoming shaken for 1 minute.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have lost class features by violating the code of conduct of a class that possesses such a code, or have the Dishonored Family background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'shamed',
    name: 'Shamed',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      "A past humiliation haunts you to this day. When you are in a conflict that is being observed by others not involved in the conflict, you gain a +1 bonus on attack rolls and skill checks. Goal: Defeat a chosen foe in a manner that publicly demonstrates your superiority, or establish your worth through alternative means such as gaining a title or becoming a region's chosen hero. Completion Benefit: Your newfound confidence gives you temporary hit points equal to your character level. These temporary hit points last until lost and refresh any time you rest long enough for natural healing to occur.",
    shortDescription: 'Gain attack and skill bonuses in observed conflicts, driven by past shame.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have been publicly embarrassed, or have the Bastard Born background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'stronghold',
    name: 'Stronghold',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'As a move action, you can issue tactical directives to grant subordinates within 60 feet one of the following bonuses: +1 to attack rolls, +1 dodge bonus to AC, or +1 to a specific saving throw. All affected creatures must receive the same benefit. This only affects commanded troops and is a language-dependent, mind-affecting effect. Goal: Establish or seize a stronghold accommodating 200 or more troops, staff it with 100 or more combat-capable soldiers under your command, maintain provisions for a half-year siege, and keep a treasury covering six months of wages. Completion Benefit: Order bonuses increase to +2 with a 120-foot range. You may also issue two distinct orders simultaneously.',
    shortDescription:
      'Issue tactical directives to grant followers combat bonuses as a move action.',
    prerequisites: [
      {
        type: 'feat',
        featId: 'leadership',
      },
      {
        type: 'special',
        description:
          'You must lead at least 10 combat-capable followers such as fighters or rangers.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'thief_of_legend',
    name: 'Thief of Legend',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'Once per day, when making a Disable Device check to open locks or a Sleight of Hand check to pick pockets, you may roll twice and use the higher result. Goal: Steal a famous and well-guarded treasure worth at least 50,000 gp while leaving no evidence of your involvement behind. The treasure must be protected by a mix of at least 8 traps or challenging foes. Completion Benefit: When triggering a trap, you can attempt a Disable Device check at a -5 penalty to interrupt it while keeping it armed. You can use this ability a number of times per day equal to 3 plus your Intelligence modifier.',
    shortDescription:
      'Roll twice on Disable Device (locks) or Sleight of Hand (pickpocket) once per day.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have stolen at least 1,000 gp worth of treasure without being caught and kept mementos of these thefts worth at least 500 gp, or have the Greed background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'town_tamer',
    name: 'Town Tamer',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'Select a specific settlement as your chosen town. When in your chosen settlement, the DC of Intimidate checks made against you increases by 10. You gain a +1 bonus on attack rolls and a +1 dodge bonus to AC against undesirable elements such as criminals or ruffians in your chosen settlement, and a +2 bonus on combat maneuver checks against them. Goal: Defeat 10 or more troublemakers in your chosen settlement with a CR equal to your character level or higher, and in the process eliminate a serious criminal threat or clean up the streets. Completion Benefit: You can designate additional settlements after residing there for one week. You gain a +2 bonus on initiative checks and a +1 bonus on saving throws when in your chosen settlement.',
    shortDescription: 'Gain combat bonuses and Intimidate resistance in your chosen settlement.',
    prerequisites: [
      {
        type: 'skill',
        skillId: 'intimidate',
        ranks: 5,
      },
      {
        type: 'special',
        description:
          'You must have a personal motivation to clean up a particular town, or have the Bounty Hunter or Champion of the People background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'true_love',
    name: 'True Love',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'You add 1 to save DCs and caster levels for spells with the emotion descriptor. You also gain a +2 bonus on Sense Motive checks, increasing to +4 with 10 or more ranks in the skill. Goal: Find a way to be with your true love (even if you cannot formally wed). Completion Benefit: You gain a +2 bonus on attack rolls, saving throws, and skill checks whenever you are below a quarter of your total hit points. This bonus disappears if the relationship ends.',
    shortDescription:
      'Boost emotion spell DCs and Sense Motive; gain combat bonuses when near death.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have found love with a person you cannot be with, have a current lover, or have the Current Lover, For Love, or The Lover background.',
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
  {
    id: 'unforgotten',
    name: 'Unforgotten',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      'You reduce nonlethal damage you take by 1 point (minimum 1 point) and gain a +1 bonus on Will saves. Goal: Locate your lost loved one alive and decisively defeat a challenging foe who kept you apart. Completion Benefit: You gain a +1 bonus on all saving throws, replacing the +1 bonus on Will saves. If the loved one is found deceased, all feat benefits are forfeited until proper burial occurs; completing the burial restores the completion benefit (but not the nonlethal damage reduction).',
    shortDescription:
      'Reduce nonlethal damage taken and gain Will save bonus while seeking a lost loved one.',
    prerequisites: [
      {
        type: 'special',
        description:
          'You must have a close relative, spouse, or dear person who vanished, was captured, or never returned from a journey with little trace, or have the Major Disaster background.',
      },
    ],
    effects: [],
    activationMode: 'passive',
  },
  {
    id: 'vengeance',
    name: 'Vengeance',
    types: ['story'],
    source: 'Ultimate Campaign',
    description:
      "You receive a +1 bonus on saving throws, attack rolls, and weapon damage rolls when facing your chosen foe and its known minions. Goal: Thwart your chosen foe. Completion Benefit: You gain a permanent +1 bonus on all saving throws. This bonus stacks with the feat's existing bonus against the chosen foe and its minions, should they remain alive.",
    shortDescription:
      'Gain attack, damage, and save bonuses against a specific foe and their minions.',
    prerequisites: [
      {
        type: 'special',
        description:
          "You must have a close family member or other loved one slain by a specific challenging foe or that foe's minions, or have the Raiders or Vengeance background.",
      },
    ],
    effects: [],
    activationMode: 'conditional',
  },
];

// CHECKPOINT: last_written=vengeance, written=28/28, status=complete
