import { ArchetypeData, ClassFeatureData } from '../types';

export const SORCERER_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Crossblooded
  // ──────────────────────────────────────────────
  {
    name: 'Crossblooded',
    className: 'Sorcerer',
    description:
      'A crossblooded sorcerer selects two bloodlines, gaining some abilities from each but suffering from the confusion of conflicting magical heritages. She gains a narrower spell selection but can pick bloodline powers from either bloodline.',
    replacedFeatures: [
      'Bloodline',
      'Bloodline Arcana',
      'Bloodline Powers',
      'Bloodline Spells',
      'Bloodline Feats',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Dual Bloodlines',
        level: 1,
        description:
          'The crossblooded sorcerer selects two bloodlines. She gains the bloodline arcana of both bloodlines. At each level where she gains a bloodline power, she chooses one power from either bloodline. She takes a -2 penalty on Will saves.',
      },
      {
        name: 'Drawback',
        level: 1,
        description:
          'A crossblooded sorcerer has one fewer spell known at each level (including cantrips) than normal. She must also take a -2 penalty on Will saves.',
      },
      {
        name: 'Crossblooded Bloodline Power',
        level: 1,
        description:
          'At 1st, 3rd, 9th, 15th, and 20th levels, the crossblooded sorcerer selects one of the two bloodline powers available from her two bloodlines at that level.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 2. Wildblooded
  // ──────────────────────────────────────────────
  {
    name: 'Wildblooded',
    className: 'Sorcerer',
    description:
      'A wildblooded sorcerer has a mutated version of a standard bloodline, gaining an altered bloodline arcana and one different bloodline power while otherwise functioning as the parent bloodline.',
    replacedFeatures: ['Bloodline Arcana', 'Bloodline Powers'],
    modifiedFeatures: ['Bloodline'],
    newFeatures: [
      {
        name: 'Mutated Bloodline',
        level: 1,
        description:
          'A wildblooded sorcerer selects a mutated bloodline (such as Brutal, Empyreal, Sage, Sylvan, etc.). The mutated bloodline modifies the parent bloodline, replacing the bloodline arcana and one or more bloodline powers with new ones. All other aspects of the parent bloodline remain the same.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 3. Tattooed Sorcerer
  // ──────────────────────────────────────────────
  {
    name: 'Tattooed Sorcerer',
    className: 'Sorcerer',
    description:
      'The tattooed sorcerer draws magical power from intricate tattoos inked on her body, gaining a familiar formed from a tattoo and enhanced metamagic abilities at the cost of some bloodline powers.',
    replacedFeatures: ['Eschew Materials', 'Bloodline Power (1st)', 'Bloodline Power (9th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Familiar Tattoo',
        level: 1,
        description:
          "A tattooed sorcerer gains a familiar as a wizard of equal level. The familiar can transform into a tattoo on the sorcerer's body as a standard action, and can revert to its normal form as a free action.",
      },
      {
        name: "Mage's Tattoo",
        level: 1,
        description:
          "At 1st level, the tattooed sorcerer gains Varisian Tattoo (Mage's Tattoo) as a bonus feat, increasing the caster level of spells from one school of magic by 1.",
      },
      {
        name: 'Bloodline Tattoo',
        level: 9,
        description:
          'At 9th level, the tattooed sorcerer can pick a single spell from her bloodline spell list and add it to her spells known. Additionally, she gains Spell Focus in the school of her Varisian Tattoo as a bonus feat.',
      },
      {
        name: 'Create Spell Tattoo',
        level: 7,
        description:
          'At 7th level, the tattooed sorcerer gains the Inscribe Magical Tattoo feat as a bonus feat.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 4. Razmiran Priest (Sorcerer)
  // ──────────────────────────────────────────────
  {
    name: 'Razmiran Priest',
    className: 'Sorcerer',
    description:
      'A Razmiran priest is a sorcerer who poses as a divine caster of the Living God Razmir. By using magic items and arcane trickery, she can mimic divine spellcasting and channel energy to fool the faithful.',
    replacedFeatures: ['Bloodline Power (1st)', 'Bloodline Power (9th)', 'Bloodline Spells'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'False Piety',
        level: 1,
        description:
          'A Razmiran priest adds certain cleric spells to her sorcerer spell list: cure/inflict spells, remove disease, neutralize poison, etc. She must use a holy symbol of Razmir as her focus component for these spells.',
      },
      {
        name: 'False Channel',
        level: 1,
        description:
          'At 1st level, a Razmiran priest can activate a scroll or wand of cure light wounds or inflict light wounds by spending a 1st-level spell slot, using her caster level and Charisma modifier. She may also expend two uses of this ability to simulate channel energy.',
      },
      {
        name: 'False Casting',
        level: 9,
        description:
          'At 9th level, a Razmiran priest using a scroll or wand can attempt a Bluff check to disguise the true nature of the spell being cast, appearing as though she is casting a divine spell using verbal and somatic components.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 5. Seeker
  // ──────────────────────────────────────────────
  {
    name: 'Seeker',
    className: 'Sorcerer',
    description:
      'A seeker sorcerer is devoted to uncovering lost magical knowledge and recovering ancient arcane secrets. She gains trapfinding and additional class skills at the expense of some bloodline abilities.',
    replacedFeatures: ['Bloodline Power (3rd)', 'Bloodline Power (15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Tinkering',
        level: 1,
        description:
          'A seeker adds Disable Device to her list of class skills. In addition, she gains Perception and Disable Device as class skills and can use her Charisma modifier in place of her Wisdom modifier on Perception checks.',
      },
      {
        name: 'Seeker Lore',
        level: 3,
        description:
          'At 3rd level, a seeker gains a bonus equal to half her sorcerer level on Perception checks, Knowledge (arcana) checks, and Spellcraft checks to identify magic items or decipher scrolls.',
      },
      {
        name: 'Seeker Magic',
        level: 15,
        description:
          'At 15th level, a seeker can modify her spells with a special form of metamagic, applying the effects of any one metamagic feat she knows without increasing the casting time or spell level, once per day.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 6. Mongrel Mage
  // ──────────────────────────────────────────────
  {
    name: 'Mongrel Mage',
    className: 'Sorcerer',
    description:
      'A mongrel mage has no single bloodline. Instead, her magical heritage is an unpredictable mix, allowing her to select different bloodline powers each day but never fully mastering any single bloodline.',
    replacedFeatures: [
      'Bloodline',
      'Bloodline Arcana',
      'Bloodline Powers',
      'Bloodline Spells',
      'Bloodline Feats',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Mongrel Reservoir',
        level: 1,
        description:
          "Each day when preparing her mind for spellcasting (1 hour of meditation), the mongrel mage selects one sorcerer bloodline. She gains access to that bloodline's 1st-level bloodline power and bloodline arcana for that day.",
      },
      {
        name: 'Flexible Bloodline Power',
        level: 3,
        description:
          'At 3rd, 9th, 15th, and 20th levels, the mongrel mage gains the ability to select an additional bloodline power from her currently chosen bloodline during her daily meditation. The power must be appropriate for her level.',
      },
      {
        name: 'Improved Mongrel Reservoir',
        level: 5,
        description:
          'At 5th level, the mongrel mage may choose her bloodline arcana from any bloodline, independent of the bloodline she selects for her bloodline powers.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Eldritch Scrapper
  // ──────────────────────────────────────────────
  {
    name: 'Eldritch Scrapper',
    className: 'Sorcerer',
    description:
      'An eldritch scrapper is a sorcerer who channels her arcane power into melee combat, gaining martial flexibility and combat feats in place of some bloodline powers.',
    replacedFeatures: ['Bloodline Power (1st)', 'Bloodline Power (9th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Martial Flexibility',
        level: 1,
        description:
          "At 1st level, an eldritch scrapper gains the brawler's martial flexibility ability, using her sorcerer level as her brawler level. She can gain the use of one combat feat as a move action for 1 minute, a number of times per day equal to 3 + half her sorcerer level.",
      },
      {
        name: 'Bloodline Dweomer',
        level: 9,
        description:
          'At 9th level, when the eldritch scrapper uses martial flexibility, she may also gain the benefit of one of the following feats: Arcane Strike, Combat Casting, Improved Counterspell, or any feat that lists one of her bloodline bonus feats as a prerequisite.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 8. False Priest
  // ──────────────────────────────────────────────
  {
    name: 'False Priest',
    className: 'Sorcerer',
    description:
      'A false priest pretends to be a divine caster, using deception and arcane magic to impersonate a cleric or oracle. She gains the ability to fake divine magic and use wands and scrolls of divine spells.',
    replacedFeatures: ['Bloodline Power (3rd)', 'Bloodline Power (9th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'False Focus',
        level: 1,
        description:
          'A false priest gains False Focus as a bonus feat at 1st level. She can use a holy symbol as a divine focus to cast her arcane spells, disguising them as divine magic.',
      },
      {
        name: 'False Arcanist',
        level: 3,
        description:
          'At 3rd level, a false priest can use her Bluff skill to attempt to disguise her sorcerer spells as divine spells when observed. She gains a bonus equal to half her sorcerer level on Bluff checks made for this purpose.',
      },
      {
        name: 'Mimic Divine Magic',
        level: 9,
        description:
          'At 9th level, a false priest may expend a sorcerer spell slot to activate a divine scroll or wand of the same level or lower, using her own caster level and Charisma modifier for any required checks.',
      },
    ],
    source: 'Pathfinder Roleplaying Game: Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 9. Sorcerer of Sleep
  // ──────────────────────────────────────────────
  {
    name: 'Sorcerer of Sleep',
    className: 'Sorcerer',
    description:
      'The sorcerer of sleep focuses on enchantment and sleep-related magic, enhancing her ability to put foes to sleep and manipulate dreams at the expense of some bloodline abilities.',
    replacedFeatures: ['Bloodline Power (3rd)', 'Bloodline Power (9th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Lullaby',
        level: 3,
        description:
          'At 3rd level, the sorcerer of sleep gains a +1 bonus to the save DC of spells with the sleep descriptor. This bonus increases by +1 at 7th, 11th, and 15th levels. Additionally, sleep effects she creates can affect creatures with more Hit Dice than normal.',
      },
      {
        name: 'Dreamshaper',
        level: 9,
        description:
          'At 9th level, the sorcerer of sleep can enter the dreams of a sleeping creature as per the dream spell. She can do this a number of times per day equal to her Charisma modifier. She also gains immunity to magical sleep effects.',
      },
    ],
    source: 'Pathfinder Player Companion: Heroes of the Streets',
  },

  // ──────────────────────────────────────────────
  // 10. Wishcrafter
  // ──────────────────────────────────────────────
  {
    name: 'Wishcrafter',
    className: 'Sorcerer',
    description:
      'A wishcrafter sorcerer, common among ifrit and other genie-blooded beings, manipulates luck and fate to grant minor wishes to allies, trading bloodline powers for wish-granting abilities.',
    replacedFeatures: ['Bloodline Power (3rd)', 'Bloodline Power (9th)', 'Bloodline Power (15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Wishbound Arcana',
        level: 1,
        description:
          'When the wishcrafter uses a spell to grant a target a morale bonus or luck bonus, the bonus increases by 1. This stacks with other effects that increase such bonuses.',
      },
      {
        name: "Heart's Desire",
        level: 3,
        description:
          'At 3rd level, the wishcrafter can spend a standard action to grant an ally within 30 feet a +2 morale bonus on attack rolls, saves, ability checks, or skill checks for a number of rounds equal to half her sorcerer level. She can use this ability a number of times per day equal to 3 + her Charisma modifier.',
      },
      {
        name: 'Expanded Wish',
        level: 9,
        description:
          "At 9th level, the wishcrafter's heart's desire ability improves. She can grant a +4 morale bonus instead of +2, or she can grant two different +2 morale bonuses simultaneously.",
      },
      {
        name: 'Perfect Wish',
        level: 15,
        description:
          "At 15th level, when the wishcrafter uses heart's desire, she can grant the target the effects of one of the following spells: heroism, good hope, or divine favor, using her sorcerer level as the caster level.",
      },
    ],
    source: "Pathfinder Player Companion: Legacy of Fire Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 11. Nine-Tailed Heir
  // ──────────────────────────────────────────────
  {
    name: 'Nine-Tailed Heir',
    className: 'Sorcerer',
    description:
      'A nine-tailed heir is a kitsune sorcerer who embraces the mystical connection to the legendary nine-tailed fox, gaining magical tails that provide spell-like abilities in place of standard bloodline powers.',
    replacedFeatures: [
      'Bloodline Power (3rd)',
      'Bloodline Power (9th)',
      'Bloodline Power (15th)',
      'Bloodline Power (20th)',
    ],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Magical Tail',
        level: 3,
        description:
          'At 3rd level and every 4 levels thereafter (7th, 11th, 15th, 19th), the nine-tailed heir gains Magical Tail as a bonus feat. Each tail grants a new spell-like ability usable twice per day: disguise self, charm person, misdirection, invisibility, suggestion, displacement, confusion, dominate person.',
      },
      {
        name: 'Kitsune Mastery',
        level: 20,
        description:
          'At 20th level, the nine-tailed heir gains all nine magical tails if she does not already have them, and each spell-like ability granted by Magical Tail becomes usable three times per day instead of twice.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of the Beast',
  },

  // ──────────────────────────────────────────────
  // 12. Blood Havoc
  // ──────────────────────────────────────────────
  {
    name: 'Blood Havoc',
    className: 'Sorcerer',
    description:
      'A blood havoc sorcerer channels her bloodline into raw destructive power, increasing the damage of her spells at the cost of reduced bloodline versatility.',
    replacedFeatures: ['Bloodline Power (1st)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Blood Havoc',
        level: 1,
        description:
          'Whenever the sorcerer casts a bloodline spell that deals damage, she adds 1 point of damage per die rolled. This replaces the 1st-level bloodline power granted by her bloodline. This bonus applies only to spells that appear on her bloodline spell list.',
      },
    ],
    source: 'Pathfinder Player Companion: Magic Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 13. Blood Intensity
  // ──────────────────────────────────────────────
  {
    name: 'Blood Intensity',
    className: 'Sorcerer',
    description:
      'A blood intensity sorcerer pushes her bloodline spells beyond their normal limits, increasing the maximum damage dice of her spells at the cost of a bloodline power.',
    replacedFeatures: ['Bloodline Power (3rd)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Blood Intensity',
        level: 3,
        description:
          'Whenever the sorcerer casts a bloodline spell that deals damage, she may increase the maximum number of damage dice by an amount equal to her Charisma modifier. She must actually have sufficient caster levels to achieve the increased dice. This replaces the 3rd-level bloodline power.',
      },
    ],
    source: 'Pathfinder Player Companion: Magic Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 14. Blood Piercing
  // ──────────────────────────────────────────────
  {
    name: 'Blood Piercing',
    className: 'Sorcerer',
    description:
      'A blood piercing sorcerer infuses her bloodline spells with the ability to penetrate magical defenses, treating spell resistance and energy resistance as reduced.',
    replacedFeatures: ['Bloodline Power (9th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Blood Piercing',
        level: 9,
        description:
          'Whenever the sorcerer casts a bloodline spell against a target with spell resistance, she treats the spell resistance as 5 lower than its actual value. Additionally, if the spell deals energy damage, she treats any energy resistance the target has as 5 lower. This replaces the 9th-level bloodline power.',
      },
    ],
    source: 'Pathfinder Player Companion: Magic Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 15. Primal Sorcerer
  // ──────────────────────────────────────────────
  {
    name: 'Primal Sorcerer',
    className: 'Sorcerer',
    description:
      'The primal sorcerer draws power from the raw elemental forces of the First World, gaining primal magic abilities that inject chaos and wild magic into her casting.',
    replacedFeatures: ['Bloodline Power (3rd)', 'Bloodline Power (15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Primal Magic',
        level: 3,
        description:
          'At 3rd level, the primal sorcerer gains the ability to channel primal magic. Once per day, she may attempt to replace one of her spells as she casts it with a random spell of the same level, drawn from any class spell list. She gains an additional daily use at 7th level and every 4 levels thereafter.',
      },
      {
        name: 'Primal Surge',
        level: 15,
        description:
          'At 15th level, the primal sorcerer can channel a surge of primal energy as a swift action. For 1 round, her caster level increases by 2 and the save DCs of her spells increase by 1. She can use this ability once per day, plus one additional time at 18th level.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 16. Sage (Wildblooded variant)
  // ──────────────────────────────────────────────
  // Note: Sage, Empyreal, Sylvan, etc. are Wildblooded mutations,
  // included as part of the Wildblooded archetype above.

  // ──────────────────────────────────────────────
  // 17. Linnorm Scion
  // ──────────────────────────────────────────────
  {
    name: 'Linnorm Scion',
    className: 'Sorcerer',
    description:
      'The linnorm scion is an Ulfen sorcerer who draws power from the blood of linnorms, gaining draconic abilities flavored by the primordial linnorm dragons of the north.',
    replacedFeatures: ['Bloodline', 'Bloodline Arcana', 'Bloodline Powers', 'Bloodline Spells'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Linnorm Bloodline',
        level: 1,
        description:
          "The linnorm scion selects one type of linnorm (crag, ice, tarn, etc.). She gains a modified draconic bloodline tied to that linnorm type, with energy type and abilities matching the chosen linnorm. Her bloodline arcana adds +1 damage per die to spells matching her linnorm's energy type.",
      },
      {
        name: 'Linnorm Resistance',
        level: 3,
        description:
          'At 3rd level, the linnorm scion gains energy resistance 5 to the energy type associated with her linnorm. This increases to 10 at 9th level.',
      },
      {
        name: 'Breath of the Linnorm',
        level: 9,
        description:
          "At 9th level, the linnorm scion can exhale a breath weapon matching her linnorm's energy type once per day. The breath weapon deals 1d6 damage per sorcerer level in a 30-foot cone (Reflex half). She gains an additional use at 17th level.",
      },
      {
        name: 'Death Curse',
        level: 15,
        description:
          "At 15th level, any creature that strikes the killing blow against the linnorm scion is affected by a curse based on her linnorm type (such as vulnerability to the linnorm's energy type). This functions automatically and requires no action.",
      },
      {
        name: 'Linnorm Form',
        level: 20,
        description:
          'At 20th level, the linnorm scion can transform into a linnorm of her chosen type once per day as a standard action, as form of the dragon III but adjusted for the linnorm form.',
      },
    ],
    source: 'Pathfinder Player Companion: People of the North',
  },

  // ──────────────────────────────────────────────
  // 18. Sanguine Wildblooded
  // ──────────────────────────────────────────────
  {
    name: "Zhyen'kuthii (Tattooed Agent)",
    className: 'Sorcerer',
    description:
      'Adopted from the dark traditions of the Darklands, this sorcerer brand their spells as arcane tattoos, gaining enhanced focus in one school of magic and the ability to inscribe spell tattoos.',
    replacedFeatures: ['Bloodline Power (1st)', 'Bloodline Power (9th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Focused Tattoo',
        level: 1,
        description:
          'The tattooed agent gains Spell Focus in one school of her choice as a bonus feat at 1st level. She gains a masterwork tattoo that acts as a bonded object for that school.',
      },
      {
        name: 'Inscribe Tattoo',
        level: 9,
        description:
          "At 9th level, the tattooed agent gains the ability to inscribe spell tattoos, functioning as scrolls but inscribed on a willing creature's body.",
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 19. Bloodline Mutations (General Note)
  // ──────────────────────────────────────────────
  // Blood Havoc, Blood Intensity, and Blood Piercing above can
  // be taken in place of specific bloodline powers as "mutations."
  // They are included as standalone archetype entries for data purposes.

  // ──────────────────────────────────────────────
  // 20. Spell Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Spell Specialist',
    className: 'Sorcerer',
    description:
      'The spell specialist focuses on perfecting individual spells rather than breadth of magical knowledge, gaining the ability to enhance specific known spells to greater effect.',
    replacedFeatures: ['Bloodline Power (3rd)', 'Bloodline Power (15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Focused Spell',
        level: 3,
        description:
          'At 3rd level, the spell specialist selects one spell she knows. When she casts that spell, her caster level is treated as 2 higher. She selects an additional spell at 7th, 11th, and 15th levels.',
      },
      {
        name: 'Perfected Spell',
        level: 15,
        description:
          'At 15th level, the spell specialist selects one of her focused spells. She can cast that spell as a spell-like ability once per day without expending a spell slot.',
      },
    ],
    source: 'Pathfinder Player Companion: Arcane Anthology',
  },

  // ──────────────────────────────────────────────
  // 21. Imperious Bloodline / Martyred Bloodline
  // ──────────────────────────────────────────────
  // These are bloodlines, not archetypes. Only actual archetypes are included.

  // ──────────────────────────────────────────────
  // 22. Ley Line Guardian
  // ──────────────────────────────────────────────
  {
    name: 'Ley Line Guardian',
    className: 'Sorcerer',
    description:
      'A ley line guardian taps into the invisible lines of magical energy that crisscross the world, drawing upon ley lines to enhance her spellcasting at the cost of becoming dependent on proximity to such power sources.',
    replacedFeatures: ['Bloodline Power (3rd)', 'Bloodline Power (9th)'],
    modifiedFeatures: ['Bloodline Arcana'],
    newFeatures: [
      {
        name: 'Ley Line Sense',
        level: 1,
        description:
          'The ley line guardian can sense the presence and direction of ley lines within 1 mile per sorcerer level. She gains a bonus on Knowledge (arcana) checks equal to half her sorcerer level to identify ley lines and their properties.',
      },
      {
        name: 'Conduit Surge',
        level: 3,
        description:
          "At 3rd level, while within 1 mile of a ley line, the ley line guardian can draw upon the ley line's power as a swift action, increasing her effective caster level by 1d4 for a single spell. Using this ability causes fatigue for 1 round per caster level increase.",
      },
      {
        name: 'Ley Line Affinity',
        level: 9,
        description:
          'At 9th level, the ley line guardian does not become fatigued from conduit surge. She gains an additional use of conduit surge per day equal to her Charisma modifier.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 23. Astral Bloodline / Starsoul Bloodline
  // ──────────────────────────────────────────────
  // These are bloodlines, not archetypes.

  // ──────────────────────────────────────────────
  // 24. Karmic Sorcerer
  // ──────────────────────────────────────────────
  {
    name: 'Karmic Sorcerer',
    className: 'Sorcerer',
    description:
      'A karmic sorcerer draws upon the forces of fate and karma, gaining abilities that manipulate destiny and balance, replacing some bloodline powers with karmic abilities.',
    replacedFeatures: ['Bloodline Power (3rd)', 'Bloodline Power (15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Karmic Pool',
        level: 3,
        description:
          'At 3rd level, the karmic sorcerer gains a karmic pool equal to her Charisma modifier. When she or an ally within 30 feet fails a saving throw, she can spend 1 point from her karmic pool as an immediate action to grant a reroll. The karmic pool replenishes each day.',
      },
      {
        name: 'Karmic Balance',
        level: 15,
        description:
          'At 15th level, whenever the karmic sorcerer scores a critical hit or an enemy critically fails a save against one of her spells, she regains 1 point in her karmic pool. Additionally, she can spend 2 points from her karmic pool to force an enemy to reroll a successful saving throw.',
      },
    ],
    source: 'Pathfinder Player Companion: Occult Origins',
  },

  // ──────────────────────────────────────────────
  // 25. Wishing Lamp (Genie-Caller)
  // ──────────────────────────────────────────────
  {
    name: 'Wishing Lamp',
    className: 'Sorcerer',
    description:
      'A wishing lamp sorcerer channels her bloodline power through a special lamp or vessel that contains a genie spirit. She gains a bound genie companion and wish-related abilities.',
    replacedFeatures: ['Bloodline Power (1st)', 'Bloodline Power (9th)', 'Bloodline Power (15th)'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Bound Genie',
        level: 1,
        description:
          'At 1st level, the wishing lamp sorcerer gains a lamp or vessel that houses a minor genie spirit. The spirit can provide counsel, granting a +2 bonus on Knowledge (planes) checks. Once per day, the spirit can cast prestidigitation, mending, or light as a spell-like ability.',
      },
      {
        name: "Genie's Gift",
        level: 9,
        description:
          "At 9th level, the bound genie can manifest briefly once per day, performing a single task as though under the effect of unseen servant but with the ability to carry up to 100 pounds and deliver touch spells on the sorcerer's behalf.",
      },
      {
        name: 'Greater Wish',
        level: 15,
        description:
          "At 15th level, the bound genie can grant a limited wish once per week. This functions as the limited wish spell but costs no material component. Using this ability risks the genie attempting to twist the wish's intent.",
      },
    ],
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
  },

  // ──────────────────────────────────────────────
  // 26. Umbral Scion
  // ──────────────────────────────────────────────
  {
    name: 'Umbral Scion',
    className: 'Sorcerer',
    description:
      'An umbral scion draws power from the Shadow Plane, weaving shadow magic into her bloodline abilities. She gains shadow-based powers and enhanced illusion magic at the cost of standard bloodline powers.',
    replacedFeatures: ['Bloodline Power (1st)', 'Bloodline Power (9th)'],
    modifiedFeatures: ['Bloodline Arcana'],
    newFeatures: [
      {
        name: 'Shadow Arcana',
        level: 1,
        description:
          "The umbral scion's bloodline arcana changes to grant a +1 bonus to the save DC of spells with the shadow or darkness descriptor. This bonus increases by +1 at 10th and 20th level.",
      },
      {
        name: 'Shadow Cloak',
        level: 1,
        description:
          'At 1st level, the umbral scion can wreathe herself in shadows as a standard action, gaining concealment (20% miss chance) for a number of rounds per day equal to 3 + her Charisma modifier. These rounds need not be consecutive.',
      },
      {
        name: 'Shadow Step',
        level: 9,
        description:
          'At 9th level, the umbral scion can teleport between shadows as a move action, traveling up to 30 feet. Both the departure and arrival points must be in dim light or darkness. She can use this ability a number of times per day equal to her Charisma modifier.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of Shadows',
  },
];
