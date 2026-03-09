import { ArchetypeData, ClassFeatureData } from '../types';

export const MAGUS_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Abyssal Scion
  // ──────────────────────────────────────────────
  {
    name: 'Abyssal Scion',
    className: 'Magus',
    description:
      'The abyssal scion draws power from demonic taint in his bloodline, channeling chaotic evil energy through his blade and spells. He trades refined arcane mastery for raw demonic power that grows more dangerous as he advances.',
    replacedFeatures: ['Spell Recall', 'Knowledge Pool', 'Improved Spell Recall'],
    modifiedFeatures: ['Arcane Pool', 'Magus Arcana'],
    newFeatures: [
      {
        name: 'Abyssal Arcane Pool',
        level: 1,
        description:
          "The abyssal scion's arcane pool is tainted with demonic energy. He can spend points to grant his weapon the anarchic or unholy special ability in addition to the standard enhancement bonus options.",
      },
      {
        name: 'Demonic Resilience',
        level: 5,
        description:
          'At 5th level, the abyssal scion gains resistance 5 to acid, cold, electricity, and fire. At 11th level these resistances increase to 10.',
      },
      {
        name: 'Summon Monster',
        level: 7,
        description:
          'At 7th level, the abyssal scion can spend 3 points from his arcane pool to cast summon monster IV as a spell-like ability, but can only summon demons (chaotic evil outsiders). The spell level of this ability increases by 1 (to a maximum of summon monster VI) every 3 levels thereafter.',
      },
      {
        name: 'Abyssal Transformation',
        level: 19,
        description:
          'At 19th level, the abyssal scion can spend 5 points from his arcane pool to take on a partially demonic form for 1 minute, gaining the benefits of the fiendish template and a +4 profane bonus to Strength.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of Fiends',
  },

  // ──────────────────────────────────────────────
  // 2. Arcane Archer (Magus)
  // ──────────────────────────────────────────────
  {
    name: 'Arcane Archer (Magus)',
    className: 'Magus',
    description:
      "The arcane archer magus combines the spellblade's power with ranged combat, channeling spells through arrows rather than melee weapons. He sacrifices some close-combat capability to perfect the art of magical archery.",
    replacedFeatures: ['Spellstrike', 'Heavy Armor'],
    modifiedFeatures: ['Spell Combat', 'Arcane Pool'],
    newFeatures: [
      {
        name: 'Ranged Spellstrike',
        level: 2,
        description:
          'At 2nd level, the arcane archer can deliver touch spells with ranged weapons. When using spell combat, he may cast a spell and deliver it through a ranged weapon attack rather than a melee attack.',
      },
      {
        name: 'Imbue Arrow',
        level: 5,
        description:
          "At 5th level, the arcane archer can place an area spell upon an arrow. When the arrow is fired, the spell's point of origin is where the arrow lands. The arrow must be fired during the round the spell is cast.",
      },
      {
        name: 'Seeker Arrow',
        level: 8,
        description:
          'At 8th level, the arcane archer can launch one arrow per day that ignores cover and concealment, though not total cover. At 14th level he can use this ability twice per day.',
      },
      {
        name: 'Phase Arrow',
        level: 11,
        description:
          'At 11th level, the arcane archer can launch one arrow per day that passes through all physical barriers. Magical barriers still block the arrow normally. At 17th level he can use this ability twice per day.',
      },
      {
        name: 'Hail of Arrows',
        level: 14,
        description:
          "At 14th level, once per day as a full-round action, the arcane archer can fire one arrow at each and every target within range, to a maximum of one target for every magus level he has earned. Each attack uses the magus's primary attack bonus.",
      },
      {
        name: 'Arrow of Death',
        level: 20,
        description:
          'At 20th level, the arcane archer can create a special type of slaying arrow that forces the target to make a DC 20 Fortitude save or be slain immediately. It takes 1 day to make such an arrow and lasts for a year.',
      },
    ],
    source: 'Pathfinder Player Companion: Elves of Golarion',
  },

  // ──────────────────────────────────────────────
  // 3. Black Blade (Bladebound)
  // ──────────────────────────────────────────────
  {
    name: 'Bladebound',
    className: 'Magus',
    description:
      "The bladebound magus forms a powerful bond with a sentient magical weapon called a black blade, a unique intelligent sword that grows in power alongside the magus. The black blade has its own ego, intelligence, and personality, and is the magus's most important companion.",
    replacedFeatures: ['Magus Arcana (at 3rd)', 'Knowledge Pool'],
    modifiedFeatures: ['Arcane Pool'],
    newFeatures: [
      {
        name: 'Black Blade',
        level: 3,
        description:
          'At 3rd level, the bladebound magus gains a powerful sentient weapon called a black blade. The black blade has an Intelligence score of 11, Wisdom of 7, and Charisma of 7, and gains ability score increases as the magus levels. It communicates via empathy, can speak one language at 5th magus level, and gains telepathy at 13th. The blade has its own arcane pool (equal to its Intelligence modifier) used for its special abilities.',
      },
      {
        name: 'Black Blade Strike',
        level: 3,
        description:
          "As a free action, the magus can spend a point from the black blade's arcane pool to grant the black blade a +1 bonus on damage rolls for 1 minute. This bonus increases to +2 at 9th level and +3 at 15th level.",
      },
      {
        name: 'Telepathy',
        level: 13,
        description:
          'At 13th magus level, the black blade gains telepathy and can communicate with any creature that has a language within 30 feet. The blade can also read surface thoughts of creatures touching it.',
      },
      {
        name: 'Unbreakable',
        level: 17,
        description:
          'At 17th magus level, the black blade becomes immune to the broken condition. If the black blade is somehow broken, the magus loses the bladebound archetype benefits until he gets a new black blade by performing a special 24-hour ritual.',
      },
      {
        name: 'Transfer Arcana',
        level: 3,
        description:
          "Once per day, the magus can attempt to siphon power from the black blade. He makes an opposed Will save against the blade's Will save. If he wins, he regains 1 arcane pool point. If he fails, the blade drains 1 arcane pool point from the magus.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 4. Card Caster
  // ──────────────────────────────────────────────
  {
    name: 'Card Caster',
    className: 'Magus',
    description:
      'The card caster has mastered the Harrow deck as a weapon, treating cards as thrown weapons imbued with arcane power. He forgoes heavy melee combat in favor of a deadly rain of enchanted cards flung with unerring accuracy.',
    replacedFeatures: ['Spell Combat', 'Spellstrike', 'Heavy Armor'],
    modifiedFeatures: ['Arcane Pool'],
    newFeatures: [
      {
        name: 'Harrowed Spellstrike',
        level: 1,
        description:
          'The card caster can use spell combat and spellstrike with thrown Harrow cards (treat as shuriken), delivering touch spells through thrown card attacks. He is always proficient with Harrow cards used as weapons.',
      },
      {
        name: 'Harrowing',
        level: 4,
        description:
          'At 4th level, the card caster can spend 1 point from his arcane pool to perform a quick Harrowing reading as a standard action, granting himself and all allies within 20 feet a +1 insight bonus to one ability score for 1 minute. This bonus increases by 1 for every 4 magus levels beyond 4th.',
      },
      {
        name: 'Imbued Shot',
        level: 5,
        description:
          "At 5th level, the card caster can imbue a card with a spell and throw it as a ranged attack. The card delivers the spell upon a successful hit, even if the spell is not a touch spell, applying the spell's effects to the target as if the card caster had cast the spell normally.",
      },
      {
        name: 'Far Strike',
        level: 7,
        description:
          'At 7th level, the card caster doubles the range increment of any thrown weapon he uses. This ability stacks with Far Shot.',
      },
    ],
    source: 'Pathfinder Player Companion: The Harrow Handbook',
  },

  // ──────────────────────────────────────────────
  // 5. Eldritch Scion
  // ──────────────────────────────────────────────
  {
    name: 'Eldritch Scion',
    className: 'Magus',
    description:
      'The eldritch scion draws arcane power from within rather than from books, casting spells spontaneously from a bloodline reservoir of magical energy. He functions like a magus but uses Charisma rather than Intelligence for his spellcasting and gains a sorcerer bloodline instead of studied arcana.',
    replacedFeatures: ['Spell Recall', 'Knowledge Pool', 'Improved Spell Recall'],
    modifiedFeatures: ['Arcane Pool', 'Spells'],
    newFeatures: [
      {
        name: 'Eldritch Pool',
        level: 1,
        description:
          "The eldritch scion's arcane pool is fueled by force of personality rather than intellect. His pool equals 1/2 his magus level + his Charisma modifier, and he uses Charisma for all spellcasting and concentration checks.",
      },
      {
        name: 'Bloodline',
        level: 1,
        description:
          'The eldritch scion selects a sorcerer bloodline at 1st level, gaining the bloodline arcana and bloodline powers as a sorcerer of his magus level. He does not gain bloodline spells or bonus feats from the bloodline.',
      },
      {
        name: 'Spontaneous Spellcasting',
        level: 1,
        description:
          'Unlike standard magi, the eldritch scion prepares a number of spells known (as a sorcerer) rather than preparing spells from a spellbook. He casts these spells spontaneously and uses Charisma as his primary spellcasting ability.',
      },
      {
        name: 'Eldritch Recall',
        level: 11,
        description:
          'At 11th level, once per day the eldritch scion can spend 1 hour in meditation to regain one expended spell slot of any level he can cast.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 6. Esoteric Magus
  // ──────────────────────────────────────────────
  {
    name: 'Esoteric Magus',
    className: 'Magus',
    description:
      'The esoteric magus combines magical knowledge with improvised and exotic weapons, finding power in the unexpected and the unconventional. He replaces some traditional magus training to focus on a wider, less orthodox magical toolkit.',
    replacedFeatures: ['Arcane Pool (enhancement options)', 'Fighter Training'],
    modifiedFeatures: ['Arcane Pool', 'Magus Arcana'],
    newFeatures: [
      {
        name: 'Esoteric Bond',
        level: 1,
        description:
          'The esoteric magus forms a bond with an esoteric weapon he selects at 1st level, gaining proficiency with that weapon if he lacks it. He can use his arcane pool to enhance this weapon as normal but can also spend points to bypass damage reduction of one type per point spent.',
      },
      {
        name: 'Broad Study',
        level: 6,
        description:
          'At 6th level, the esoteric magus selects two additional magus arcana from any class that uses arcana or a similar pool system. He treats his magus level as his level for qualifying for and using these arcana.',
      },
      {
        name: 'Arcane Versatility',
        level: 12,
        description:
          'At 12th level, once per day the esoteric magus can use any one arcana he does not possess for a single use, treating his magus level as his level for the purpose of its effects.',
      },
    ],
    source: 'Pathfinder Player Companion: People of the Stars',
  },

  // ──────────────────────────────────────────────
  // 7. Familiar Magus
  // ──────────────────────────────────────────────
  {
    name: 'Familiar Magus',
    className: 'Magus',
    description:
      "The familiar magus gains a wizard-style arcane familiar rather than relying solely on the arcane pool, accepting a loyal magical companion to expand his capabilities. He surrenders some martial versatility in exchange for a familiar's special abilities and the benefits of the arcane bond.",
    replacedFeatures: ['Arcane Pool (1st level)'],
    modifiedFeatures: ['Arcane Pool'],
    newFeatures: [
      {
        name: 'Familiar',
        level: 1,
        description:
          "The familiar magus gains a familiar as the wizard arcane bond class feature, using his magus level as his wizard level for determining the familiar's abilities. He still gains the arcane pool class feature, but his pool is reduced by his familiar's hit dice.",
      },
      {
        name: 'Familiar Spellstrike',
        level: 4,
        description:
          "At 4th level, the familiar magus can deliver touch spells through his familiar's touch as if the familiar were delivering them through his weapon, though the familiar must be in physical contact with the target.",
      },
      {
        name: 'Improved Familiar Bond',
        level: 10,
        description:
          "At 10th level, the familiar can share the magus's arcane pool, drawing from or contributing to it as a free action on the familiar's turn. The familiar can spend arcane pool points to enhance its own natural attacks.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 8. Flamboyant Arcana
  // ──────────────────────────────────────────────
  {
    name: 'Flamboyant Arcana',
    className: 'Magus',
    description:
      "The flamboyant arcana magus combines the swashbuckler's panache with the magus's spellblade arts, performing dazzling feats of combined swordplay and sorcery. He trades raw magical power for an increase in dramatic, style-focused combat abilities.",
    replacedFeatures: ['Spell Recall', 'Knowledge Pool'],
    modifiedFeatures: ['Magus Arcana'],
    newFeatures: [
      {
        name: 'Panache',
        level: 1,
        description:
          'The flamboyant arcana magus gains a panache pool equal to his Charisma modifier (minimum 1). This pool replenishes when he scores a critical hit or killing blow with a light or one-handed piercing melee weapon, just as a swashbuckler would.',
      },
      {
        name: 'Derring-Do',
        level: 1,
        description:
          'The flamboyant arcana magus can spend 1 panache point to add 1d6 to an Acrobatics, Climb, Escape Artist, Fly, Ride, or Swim check. He may do this after the roll but before the results are revealed.',
      },
      {
        name: 'Dodging Panache',
        level: 1,
        description:
          'When an opponent makes a melee attack against the magus, he can spend 1 panache point to move 5 feet as an immediate action. If the attack misses, the magus gains a +2 circumstance bonus to his AC until the start of his next turn.',
      },
      {
        name: 'Targeted Strike',
        level: 7,
        description:
          'At 7th level, the flamboyant arcana magus can spend 2 panache points to perform a targeted strike that imposes a condition—disarm, sunder weapon, trip—or deals Sneak Attack-style precision damage equal to 2d6 + Charisma modifier on a successful hit.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 9. Hexcrafter
  // ──────────────────────────────────────────────
  {
    name: 'Hexcrafter',
    className: 'Magus',
    description:
      "The hexcrafter has learned to blend witch hexes with magus spellblade techniques, infusing his blade with the fell power of witchcraft. He trades some of the standard magus arcana options for access to the witch's full hex list.",
    replacedFeatures: [],
    modifiedFeatures: ['Magus Arcana', 'Spells'],
    newFeatures: [
      {
        name: 'Hex Arcana',
        level: 4,
        description:
          'At 4th level and every 3 magus levels thereafter, the hexcrafter may select witch hexes in place of magus arcana. He can select any hex available to a witch of his magus level. Hexes that replicate spells use his magus level as the caster level.',
      },
      {
        name: 'Hex Magus',
        level: 4,
        description:
          'At 4th level, the hexcrafter adds certain witch spells to his magus spell list: bestow curse, major curse, and all spells from his selected patron theme (if he has one from a magus arcana).',
      },
      {
        name: 'Hexstrike',
        level: 1,
        description:
          "The hexcrafter can deliver a hex through his weapon as part of a spellstrike. When he hits with a melee attack using spellstrike and chooses to deliver a hex, the target must succeed at the hex's saving throw or suffer its effects in addition to taking weapon damage.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 10. Kensai
  // ──────────────────────────────────────────────
  {
    name: 'Kensai',
    className: 'Magus',
    description:
      'The kensai perfects one weapon as an extension of his own mind, spirit, and arcane power through concentrated focus and dedication. He sacrifices versatility and armor protection to become an unmatched warrior with his chosen blade.',
    replacedFeatures: ['Spell Combat', 'Medium Armor', 'Heavy Armor', 'Fighter Training'],
    modifiedFeatures: ['Arcane Pool', 'Magus Arcana'],
    newFeatures: [
      {
        name: 'Chosen Weapon',
        level: 1,
        description:
          'At 1st level, a kensai gains Exotic Weapon Proficiency or Martial Weapon Proficiency with his chosen weapon as a bonus feat. The kensai can only use his spell combat and spellstrike abilities with his chosen weapon.',
      },
      {
        name: 'Canny Defense',
        level: 1,
        description:
          'When wearing light or no armor and not using a shield, a kensai adds 1 point of Intelligence bonus per magus class level to his Dexterity bonus to AC, up to a maximum equal to his Intelligence modifier. If the kensai is caught flat-footed or otherwise denied his Dexterity bonus to AC, he also loses this bonus.',
      },
      {
        name: 'Weapon Focus',
        level: 1,
        description:
          'At 1st level, a kensai gains Weapon Focus with his chosen weapon as a bonus feat.',
      },
      {
        name: 'Perfect Strike',
        level: 4,
        description:
          "At 4th level, when a kensai hits with his chosen weapon, he can spend 1 point from his arcane pool as a free action to maximize his weapon damage. Don't roll for damage—treat each damage die as if it had rolled its maximum value. At 16th level this also maximizes damage from spell combat spells delivered through the weapon.",
      },
      {
        name: 'Fighter Training',
        level: 7,
        description:
          'Starting at 7th level, a kensai counts his magus level – 3 as his fighter level for the purpose of qualifying for feats. If he has actual fighter levels, these stack.',
      },
      {
        name: 'Iaijutsu',
        level: 7,
        description:
          'At 7th level, a kensai can draw his weapon as a free action in any situation. If he draws and attacks with his chosen weapon in the same turn, he gains a +2 bonus on the attack roll and the attack deals damage as if the kensai were one size category larger.',
      },
      {
        name: 'Critical Perfection',
        level: 9,
        description:
          'At 9th level, a kensai adds his Intelligence modifier on critical hit confirmation rolls with his chosen weapon. In addition, he gains one additional critical feat for his chosen weapon.',
      },
      {
        name: 'Superior Reflexes',
        level: 11,
        description:
          'At 11th level, the kensai can make a number of attacks of opportunity per round equal to his Intelligence modifier (minimum 1). This effect stacks with Combat Reflexes.',
      },
      {
        name: 'Counterstrike',
        level: 19,
        description:
          'At 19th level, whenever an enemy within reach attempts a melee attack against the kensai while he is using total defense, the kensai may make one attack of opportunity against that enemy at his highest attack bonus after the attack is resolved.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 11. Mindblade
  // ──────────────────────────────────────────────
  {
    name: 'Mindblade',
    className: 'Magus',
    description:
      'The mindblade is a psychic warrior whose blade is a construct of pure mental force, manifested from thought rather than forged from steel. He wields a psychic weapon that exists as long as his concentration holds and vanishes when dismissed.',
    replacedFeatures: ['Arcane Pool (enhancement options)', 'Heavy Armor'],
    modifiedFeatures: ['Arcane Pool', 'Spells'],
    newFeatures: [
      {
        name: 'Psychic Pool',
        level: 1,
        description:
          'The mindblade replaces his arcane pool with a psychic pool of equal size. He uses Charisma as his casting ability modifier instead of Intelligence. His psychic pool can be used to manifest and enhance his mind blade.',
      },
      {
        name: 'Mind Blade',
        level: 1,
        description:
          'As a move action, the mindblade can manifest a blade of psychic energy. This mind blade functions as a short sword (1d6, 19-20/x2) that deals half physical and half force damage. It can be dismissed as a free action. He can spend points from his psychic pool to grant the mind blade enhancement bonuses or special weapon properties.',
      },
      {
        name: 'Throw Mind Blade',
        level: 3,
        description:
          'At 3rd level, the mindblade can throw his mind blade as a ranged weapon (20-ft range increment). The blade immediately rematerializes in his hand after the attack is resolved.',
      },
      {
        name: 'Mind Shield',
        level: 7,
        description:
          'At 7th level, the mindblade can manifest a shield of psychic force as a move action, granting a +2 shield bonus to AC. He can spend 1 point from his psychic pool to increase this bonus to +4 for 1 minute.',
      },
      {
        name: 'Enhanced Mind Blade',
        level: 5,
        description:
          'At 5th level, the mindblade can customize his mind blade by selecting blade skills (similar to magus arcana) that modify its properties, such as adding reach, changing the damage type, or granting elemental damage.',
      },
    ],
    source: 'Pathfinder Player Companion: Psychic Anthology',
  },

  // ──────────────────────────────────────────────
  // 12. Myrmidarch
  // ──────────────────────────────────────────────
  {
    name: 'Myrmidarch',
    className: 'Magus',
    description:
      "The myrmidarch combines the magus's arcane power with a comprehensive martial curriculum, gaining the ability to enhance ranged weapons and wear heavy armor in exchange for some spellcasting versatility. He is the most warrior-focused of magus archetypes.",
    replacedFeatures: ['Spell Recall', 'Knowledge Pool', 'Improved Spell Recall', 'True Magus'],
    modifiedFeatures: ['Arcane Pool', 'Magus Arcana'],
    newFeatures: [
      {
        name: 'Ranged Spellstrike',
        level: 1,
        description:
          "The myrmidarch can use spellstrike to deliver touch spells through ranged weapons. When using spell combat, he can cast a spell and deliver it as part of a ranged weapon attack, adding the spell's effect to the struck target.",
      },
      {
        name: 'Weapon Training',
        level: 6,
        description:
          'At 6th level, the myrmidarch gains weapon training in one weapon group as a fighter of his magus level - 4, and gains an additional weapon group every 6 levels thereafter. He can use his arcane pool to enhance weapons from trained groups with the standard weapon enhancement options.',
      },
      {
        name: 'Armor Training',
        level: 7,
        description:
          'At 7th level, the myrmidarch gains armor training as a fighter of his magus level - 4, reducing his armor check penalty and increasing his maximum Dex bonus to AC. He also gains Heavy Armor Proficiency at 13th level.',
      },
      {
        name: 'Weapon Mastery',
        level: 20,
        description:
          'At 20th level, the myrmidarch gains weapon mastery in his first weapon group, always confirming critical hits, never dropping the weapon, and dealing maximum damage on a critical hit.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 13. Nature-Bonded Magus
  // ──────────────────────────────────────────────
  {
    name: 'Nature-Bonded Magus',
    className: 'Magus',
    description:
      'The nature-bonded magus draws power from the natural world rather than from structured arcane study, forming bonds with animals and plants in place of standard magus martial techniques. He trades refined combat prowess for a deep connection to the wild.',
    replacedFeatures: ['Arcane Pool (standard options)', 'Fighter Training'],
    modifiedFeatures: ['Spells', 'Arcane Pool'],
    newFeatures: [
      {
        name: "Nature's Arcane Pool",
        level: 1,
        description:
          'The nature-bonded magus adds druid spells to his magus spell list, and his arcane pool can be used to enhance natural weapons (claws, bite, slam) in addition to manufactured weapons. He uses Wisdom as a secondary spellcasting ability for druid spells he learns.',
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'The nature-bonded magus gains wild empathy as a druid of his magus level. He can use this ability to influence magical beasts and vermin in addition to animals.',
      },
      {
        name: 'Animal Companion',
        level: 4,
        description:
          'At 4th level, the nature-bonded magus gains a druid-style animal companion using his magus level as his effective druid level. The animal companion can deliver touch spells for the magus when directed, functioning as a spellstrike conduit.',
      },
      {
        name: 'Woodland Stride',
        level: 7,
        description:
          'At 7th level, the nature-bonded magus can move through natural undergrowth at full speed and without taking damage or suffering impairment. Magically manipulated terrain still affects him normally.',
      },
    ],
    source: 'Pathfinder Player Companion: Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // 14. Puppetmaster
  // ──────────────────────────────────────────────
  {
    name: 'Puppetmaster',
    className: 'Magus',
    description:
      'The puppetmaster has mastered the art of arcane domination, specializing in mind control and body manipulation rather than direct magical weapon techniques. He uses his blade as a focus for enchantment magic that turns enemies into extensions of his own will.',
    replacedFeatures: ['Spellstrike', 'Improved Spell Combat'],
    modifiedFeatures: ['Spell Combat', 'Magus Arcana'],
    newFeatures: [
      {
        name: 'Arcane Puppet',
        level: 1,
        description:
          "The puppetmaster can channel enchantment (compulsion) spells through his weapon using a modified spellstrike. Instead of delivering touch-range spells, he can deliver any enchantment spell with a range of touch or close through a successful melee attack, with the target making the spell's saving throw normally.",
      },
      {
        name: 'Compulsion Pool',
        level: 5,
        description:
          'At 5th level, the puppetmaster can spend points from his arcane pool to extend the duration of compulsion effects he creates. Spending 1 point doubles the duration; spending 2 points triples it.',
      },
      {
        name: 'Puppet Strike',
        level: 8,
        description:
          "At 8th level, when the puppetmaster hits a creature with a melee attack while spell combat is active, he can spend 2 arcane pool points to make the target controlled, as per dominate person, for 1 round. The target acts on the puppetmaster's initiative and follows simple commands.",
      },
      {
        name: 'Master of Strings',
        level: 14,
        description:
          'At 14th level, the puppetmaster can have multiple compulsion effects active simultaneously without concentration. He can control up to his Intelligence modifier creatures at once with his Puppet Strike ability.',
      },
    ],
    source: 'Pathfinder Player Companion: Familiar Folio',
  },

  // ──────────────────────────────────────────────
  // 15. Skirnir
  // ──────────────────────────────────────────────
  {
    name: 'Skirnir',
    className: 'Magus',
    description:
      'The skirnir bonds with a shield rather than a weapon, infusing it with arcane power to make both offense and defense inseparable. He can channel spells through his shield as a weapon and uses it to create magical barriers that protect allies as well as himself.',
    replacedFeatures: ['Spell Recall', 'Knowledge Pool'],
    modifiedFeatures: ['Arcane Pool', 'Spellstrike'],
    newFeatures: [
      {
        name: 'Arcane Bond (Shield)',
        level: 1,
        description:
          'At 1st level, the skirnir selects a shield as his arcane bond. He can use his arcane pool to grant the shield enhancement bonuses and special shield abilities (such as arrow catching or bashing). He can also use the shield as a weapon with spellstrike.',
      },
      {
        name: 'Shield Spellstrike',
        level: 2,
        description:
          'At 2nd level, the skirnir can deliver touch spells through shield bash attacks. When using spell combat, he can make shield bash attacks in place of weapon attacks to deliver spells.',
      },
      {
        name: 'Arcane Aegis',
        level: 4,
        description:
          "At 4th level, the skirnir can spend 1 arcane pool point to grant his shield's enhancement bonus as a deflection bonus to AC to one adjacent ally for 1 minute. At 10th level he can maintain this for up to two allies simultaneously.",
      },
      {
        name: 'Fortress',
        level: 13,
        description:
          'At 13th level, the skirnir can spend 3 arcane pool points to expand his shield into a magical fortress barrier as a standard action. This creates a 10-foot-diameter dome of force around himself and any adjacent allies that lasts for 1 minute.',
      },
      {
        name: 'Wall of Force',
        level: 16,
        description:
          'At 16th level, the skirnir can spend 4 arcane pool points to cast wall of force as a spell-like ability, creating an immovable, invisible barrier that cannot be dispelled, lasting for 1 round per magus level.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 16. Soul Forger
  // ──────────────────────────────────────────────
  {
    name: 'Soul Forger',
    className: 'Magus',
    description:
      'The soul forger has mastered the arcane art of crafting magical items, pouring his own life force and magical essence into every piece he creates. He can rapidly forge temporary magic weapons mid-battle and permanently enchant items far more efficiently than other magi.',
    replacedFeatures: ['Spell Recall', 'Knowledge Pool', 'Improved Spell Recall'],
    modifiedFeatures: ['Arcane Pool'],
    newFeatures: [
      {
        name: 'Arcane Bond (Object)',
        level: 1,
        description:
          'The soul forger gains Craft Magic Arms and Armor as a bonus feat at 1st level and can craft magic weapons and armor in half the normal time. He can also spend arcane pool points (1 per 1,000 gp of cost) to halve the gp cost of crafting an item.',
      },
      {
        name: 'Destruction Resistance',
        level: 3,
        description:
          'At 3rd level, any weapon or armor the soul forger creates gains an effective hardness bonus equal to half his magus level. Additionally, the soul forger gains DR 1/— for each +1 enhancement bonus on weapons he carries, to a maximum of DR 5/—.',
      },
      {
        name: 'Reforge',
        level: 9,
        description:
          "At 9th level, the soul forger can reforge a destroyed magical item as a full-round action by spending arcane pool points equal to the item's +1 equivalent cost. The item is fully restored at the end of the action.",
      },
      {
        name: 'Rapid Forging',
        level: 14,
        description:
          'At 14th level, the soul forger can spend 1 hour instead of the normal crafting time to craft a magic weapon or armor. He pays the normal cost but the item functions normally for one day before crumbling, unless he spends the remaining crafting time to make it permanent.',
      },
      {
        name: 'Battle Forging',
        level: 19,
        description:
          'At 19th level, the soul forger can spend 5 arcane pool points as a swift action to instantly forge a fully functional magic weapon of his choosing (up to +5 equivalent) from raw metal or ore in his possession. The weapon lasts 1 round per magus level.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 17. Spell Dancer
  // ──────────────────────────────────────────────
  {
    name: 'Spell Dancer',
    className: 'Magus',
    description:
      'The spell dancer, a tradition practiced primarily among elves, combines fluid dance with arcane blade techniques, channeling magic through movement rather than static formulas. He sacrifices armor proficiency and some standard techniques to become a swift, elusive warrior-mage.',
    replacedFeatures: ['Medium Armor', 'Heavy Armor', 'Fighter Training'],
    modifiedFeatures: ['Arcane Pool', 'Spell Combat'],
    newFeatures: [
      {
        name: 'Dance of Avoidance',
        level: 1,
        description:
          'When wearing light armor or no armor and not using a shield, the spell dancer gains a +1 dodge bonus to AC. This bonus increases by 1 for every 4 magus levels beyond 1st, to a maximum of +5 at 17th level.',
      },
      {
        name: 'Arcane Movement',
        level: 3,
        description:
          'At 3rd level, the spell dancer can spend 1 arcane pool point as a swift action to gain a 10-foot bonus to all movement speeds for 1 minute. At 9th level, this increases to 20 feet and grants the ability to move through difficult terrain without penalty for the duration.',
      },
      {
        name: 'Spell Dance',
        level: 5,
        description:
          'At 5th level, once per day the spell dancer can use spell combat while moving up to his speed during the same round. He can split his movement before and after the spell combat attack sequence. Additional uses per day are gained at 11th, 14th, and 17th levels.',
      },
      {
        name: 'Evasion',
        level: 9,
        description:
          'At 9th level, the spell dancer gains evasion. At 15th level this improves to improved evasion.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 18. Staff Magus
  // ──────────────────────────────────────────────
  {
    name: 'Staff Magus',
    className: 'Magus',
    description:
      'The staff magus uses a quarterstaff as his primary weapon and arcane focus, channeling spells through the staff and using its paired ends to deliver multiple magical strikes. He sacrifices some standard magus weapon versatility to become the ultimate master of the staff.',
    replacedFeatures: ['Heavy Armor'],
    modifiedFeatures: ['Arcane Pool', 'Spellstrike', 'Spell Combat'],
    newFeatures: [
      {
        name: 'Staff Weapon',
        level: 1,
        description:
          'The staff magus treats a quarterstaff as a one-handed weapon when using spell combat, allowing him to wield it one-handed for that purpose. He can use both ends of the staff to make attacks when using full attack actions.',
      },
      {
        name: 'Staff Arcana',
        level: 1,
        description:
          'The staff magus can use a magical staff with charges remaining as an arcane focus to cast his magus spells. Casting a spell this way does not expend charges from the staff. Additionally, he can use his arcane pool to recharge a staff by spending pool points equal to the spell levels of the spells stored.',
      },
      {
        name: 'Staff Spellstrike',
        level: 4,
        description:
          'At 4th level, the staff magus can channel touch spells through both ends of the staff simultaneously when making a full attack. He can deliver a touch spell through the first strike and a second spell effect through a second staff strike at a -2 penalty.',
      },
      {
        name: 'Greater Staff Arcana',
        level: 12,
        description:
          'At 12th level, the staff magus can activate any spell stored in a magical staff as a swift action instead of a standard action. He also adds his Intelligence modifier to damage rolls when using spellstrike through a magical staff.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 19. Starlight Wanderer
  // ──────────────────────────────────────────────
  {
    name: 'Starlight Wanderer',
    className: 'Magus',
    description:
      'The starlight wanderer draws power from the stars and the void between them, wielding cosmic energy as easily as cold steel. He trades some standard arcane techniques for the ability to channel starlight, darkness, and void energy through his blade.',
    replacedFeatures: ['Knowledge Pool', 'Fighter Training'],
    modifiedFeatures: ['Arcane Pool', 'Spells'],
    newFeatures: [
      {
        name: 'Starlight Pool',
        level: 1,
        description:
          "The starlight wanderer's arcane pool radiates faint starlight. He can spend 1 arcane pool point to grant his weapon the brilliant energy special ability for 1 minute, or 2 points to also make it deal cold damage (as if frost) representing the cold void of space.",
      },
      {
        name: 'Star Map',
        level: 1,
        description:
          'The starlight wanderer can navigate perfectly by the stars, gaining a permanent know direction effect while outdoors at night. He adds his magus level to Knowledge (geography) and Survival checks made to navigate.',
      },
      {
        name: 'Void Strike',
        level: 5,
        description:
          'At 5th level, once per day when the starlight wanderer hits with a melee attack, he can spend 2 arcane pool points to deal additional void damage equal to 1d6 per 2 magus levels. Creatures without a soul (constructs and undead) take double this damage.',
      },
      {
        name: 'Starfall',
        level: 11,
        description:
          'At 11th level, the starlight wanderer can spend 4 arcane pool points to call down meteoric strikes as a full-round action. Up to 5 targets within 60 feet take 6d6 bludgeoning and fire damage (Reflex half, DC 10 + 1/2 magus level + Intelligence modifier).',
      },
      {
        name: 'Astral Form',
        level: 19,
        description:
          'At 19th level, the starlight wanderer can spend 5 arcane pool points to take on a starlight form for 1 minute, gaining incorporeality, darkvision 120 ft., immunity to cold, and the ability to travel through walls at half speed.',
      },
    ],
    source: 'Pathfinder Player Companion: People of the Stars',
  },

  // ──────────────────────────────────────────────
  // 20. Umbral Magus
  // ──────────────────────────────────────────────
  {
    name: 'Umbral Magus',
    className: 'Magus',
    description:
      'The umbral magus draws power from shadow and darkness, channeling the essence of the Plane of Shadow through his blade and spells. He sacrifices some light-based fighting capability to gain mastery over darkness, shadow magic, and concealment.',
    replacedFeatures: ['Medium Armor', 'Heavy Armor'],
    modifiedFeatures: ['Arcane Pool', 'Spells'],
    newFeatures: [
      {
        name: 'Shadow Pool',
        level: 1,
        description:
          "The umbral magus's arcane pool is suffused with shadow energy. He can spend 1 arcane pool point to grant his weapon the shadow strike property (allows it to strike incorporeal creatures as if it were force), or 2 points to also deal 1d6 cold damage from shadow chill.",
      },
      {
        name: 'Darkvision',
        level: 1,
        description:
          'The umbral magus gains darkvision 30 feet. At 5th level this extends to 60 feet, and at 10th level to 120 feet. If he already has darkvision, its range increases by the same amounts.',
      },
      {
        name: 'Shadow Veil',
        level: 3,
        description:
          'At 3rd level, in dim light or darkness, the umbral magus gains a +2 circumstance bonus to AC and Stealth checks. He can spend 1 arcane pool point to extend this protection even in bright light for 1 minute.',
      },
      {
        name: 'Shadow Step',
        level: 7,
        description:
          'At 7th level, the umbral magus can spend 2 arcane pool points as a move action to teleport up to 30 feet to any area of dim light or darkness within range, reappearing in his destination space.',
      },
      {
        name: 'Shadow Mastery',
        level: 13,
        description:
          'At 13th level, the umbral magus adds shadow evocation, shadow conjuration, and shadow walk to his magus spell list. He can use his arcane pool to enhance the potency of shadow spells, treating them as 10% more real per arcane pool point spent.',
      },
      {
        name: 'Living Shadow',
        level: 19,
        description:
          'At 19th level, the umbral magus can spend 5 arcane pool points to merge with shadows as a standard action, becoming invisible and immune to nonmagical damage for 1 minute. He can still attack, causing his shadow to strike, but becomes visible again after attacking.',
      },
    ],
    source: 'Pathfinder Player Companion: Blood of Shadows',
  },

  // ──────────────────────────────────────────────
  // 21. Vorpal Sorcerer
  // ──────────────────────────────────────────────
  {
    name: 'Vorpal Sorcerer',
    className: 'Magus',
    description:
      'The vorpal sorcerer has channeled his magical energy specifically into achieving the perfect killing strike, spending years perfecting the art of the decapitating blow. He trades broad magical versatility for focused lethal precision with a bladed weapon.',
    replacedFeatures: ['Spell Recall', 'Knowledge Pool', 'Fighter Training'],
    modifiedFeatures: ['Arcane Pool'],
    newFeatures: [
      {
        name: 'Keen Edge Mastery',
        level: 1,
        description:
          'The vorpal sorcerer treats his critical threat range with edged weapons as one greater (minimum 18-20) and gains a +2 bonus on critical confirmation rolls. These bonuses stack with Improved Critical and keen weapon enhancements.',
      },
      {
        name: 'Decapitating Strike',
        level: 5,
        description:
          'At 5th level, the vorpal sorcerer can spend 3 arcane pool points when confirming a critical hit to attempt a decapitating strike. The target must succeed on a Fortitude save (DC 10 + half magus level + Intelligence modifier) or be instantly slain. Creatures immune to critical hits or without discernible anatomies are immune to this effect.',
      },
      {
        name: 'Vorpal Surge',
        level: 11,
        description:
          "At 11th level, the vorpal sorcerer's critical hits with edged weapons deal maximum damage on all damage dice before multiplying. Additionally, when he confirms a critical hit, he can use spell combat to cast a spell as a free action (in addition to his normal actions) once per round.",
      },
      {
        name: 'Perfect Kill',
        level: 17,
        description:
          'At 17th level, once per day the vorpal sorcerer can declare a perfect kill before making a full attack action. If any attack in the sequence confirms a critical hit, that critical hit automatically decapitates the target without a saving throw (subject to the normal immunity exceptions).',
      },
    ],
    source: "Pathfinder Player Companion: Dungeoneer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 22. Arcane Gladiator
  // ──────────────────────────────────────────────
  {
    name: 'Arcane Gladiator',
    className: 'Magus',
    description:
      'The arcane gladiator fights for the entertainment of crowds and the glory of victory, developing a theatrical combat style that supplements raw power with showmanship. He trades scholarly magical knowledge for combat tricks and crowd-pleasing techniques refined in the arena.',
    replacedFeatures: ['Knowledge Pool', 'Improved Spell Recall'],
    modifiedFeatures: ['Magus Arcana'],
    newFeatures: [
      {
        name: 'Crowd Favorite',
        level: 1,
        description:
          'The arcane gladiator gains Dazzling Display as a bonus feat. He can use this feat as a move action rather than a standard action, and the Intimidate check DC is reduced by 2 for each point of arcane pool he spends (maximum reduction of 6).',
      },
      {
        name: 'Arena Fighting',
        level: 4,
        description:
          'At 4th level, the arcane gladiator gains Combat Expertise and Improved Feint as bonus feats even if he does not meet the prerequisites. He can feint as a swift action by spending 1 arcane pool point.',
      },
      {
        name: 'Gladiatorial Charge',
        level: 8,
        description:
          'At 8th level, when the arcane gladiator charges, he does not take the standard -2 penalty to AC and can cast a spell with a casting time of 1 standard action as part of the charge, delivering it through the first attack.',
      },
      {
        name: 'Victory Surge',
        level: 14,
        description:
          'At 14th level, whenever the arcane gladiator reduces an enemy to 0 or fewer hit points, he regains 1 arcane pool point. He can gain a maximum of 3 arcane pool points per round from this ability.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 23. Dervish Magus
  // ──────────────────────────────────────────────
  {
    name: 'Dervish Magus',
    className: 'Magus',
    description:
      'The dervish magus combines the whirling dance combat style of the dervish tradition with arcane spellblade techniques, fighting in a spinning arc that strikes multiple foes. He gives up some direct spellpower to become a whirlwind of blade and arcane energy.',
    replacedFeatures: ['Heavy Armor', 'Fighter Training'],
    modifiedFeatures: ['Spell Combat', 'Arcane Pool'],
    newFeatures: [
      {
        name: 'Dervish Dance',
        level: 1,
        description:
          'The dervish magus gains Dervish Dance as a bonus feat even if he does not meet the prerequisites, and can use it with any light or one-handed slashing weapon. He can use Dexterity instead of Strength for his arcane pool weapon enhancement damage bonus.',
      },
      {
        name: 'Whirling Arcana',
        level: 5,
        description:
          'At 5th level, when the dervish magus uses spell combat, he can deliver his spell to every creature he can reach during a whirling attack sequence. He makes one attack roll against each target and delivers the spell to one target of his choice who was successfully hit.',
      },
      {
        name: 'Spinning Evasion',
        level: 9,
        description:
          'At 9th level, the dervish magus gains a +2 dodge bonus to AC against all melee attacks made against him while he is wielding a single one-handed or light weapon and wearing light or no armor. This increases to +4 at 15th level.',
      },
      {
        name: 'Arcane Whirlwind',
        level: 13,
        description:
          'At 13th level, once per day the dervish magus can spend 4 arcane pool points to perform an arcane whirlwind as a full-round action, making one attack at his highest base attack bonus against every creature within his reach. He delivers one spell through one struck target of his choice.',
      },
    ],
    source: 'Pathfinder Player Companion: Qadira, Gateway to the East',
  },

  // ──────────────────────────────────────────────
  // 24. Eldrich Archer
  // ──────────────────────────────────────────────
  {
    name: 'Eldritch Archer',
    className: 'Magus',
    description:
      'The eldritch archer channels arcane power through a bow, delivering spells via arrows at range rather than through melee. He relinquishes the heavy melee focus of standard magus technique to become a ranged arcane combatant without peer.',
    replacedFeatures: ['Spellstrike', 'Medium Armor', 'Heavy Armor'],
    modifiedFeatures: ['Spell Combat', 'Arcane Pool'],
    newFeatures: [
      {
        name: 'Ranged Spellstrike',
        level: 1,
        description:
          'The eldritch archer can deliver touch spells through ranged weapon attacks instead of melee. When using spell combat, he casts a spell and delivers it through a ranged weapon attack, treating the ranged weapon as the spell delivery mechanism.',
      },
      {
        name: 'Spellbane Arrow',
        level: 4,
        description:
          'At 4th level, the eldritch archer can spend 1 arcane pool point and fire a specially prepared arrow that, upon striking a target, creates a 5-foot-radius antimagic field around the target for 1 round. Spells and spell-like abilities do not function within or through this area.',
      },
      {
        name: 'Ranged Spell Combat',
        level: 8,
        description:
          'At 8th level, the eldritch archer can use spell combat at a range of up to 60 feet, casting spells and delivering them through ranged attacks with no range penalty to the spell combat sequence.',
      },
      {
        name: 'Archer Arcana',
        level: 1,
        description:
          'The eldritch archer adds distant spell, imbue arrow, seeker arrow, and phase arrow to his list of available magus arcana (accessing each at appropriate levels) and can select combat-appropriate fighter feats as magus arcana.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 25. Spire Defender
  // ──────────────────────────────────────────────
  {
    name: 'Spire Defender',
    className: 'Magus',
    description:
      'The spire defender is a guardian mage who protects a specific location or structure, developing powers that make him nearly impossible to dislodge from his post. He trades offensive flexibility for powerful defensive and territorial abilities.',
    replacedFeatures: ['Spell Recall', 'Knowledge Pool'],
    modifiedFeatures: ['Arcane Pool', 'Magus Arcana'],
    newFeatures: [
      {
        name: "Guardian's Bond",
        level: 1,
        description:
          'The spire defender selects a structure or location (up to 1,000 sq. ft. per magus level) as his bonded territory. While within this area, he gains a +2 bonus on all saving throws and a +1 deflection bonus to AC. These bonuses increase by 1 for every 4 magus levels.',
      },
      {
        name: 'Terrain Mastery',
        level: 4,
        description:
          'At 4th level, within his bonded territory the spire defender can move through any difficult terrain (including magically created) without penalty and cannot be tripped, bull rushed, or grappled unless he chooses to allow it.',
      },
      {
        name: 'Ward the Spire',
        level: 8,
        description:
          "At 8th level, the spire defender can spend 2 arcane pool points to place a magical ward on one 10-foot square within his bonded territory. Any creature entering the square without the defender's permission takes damage equal to 1d6 per 2 magus levels (Reflex half, DC 10 + half magus level + Intelligence modifier).",
      },
      {
        name: "Defender's Wrath",
        level: 14,
        description:
          'At 14th level, once per round as an immediate action within his bonded territory, the spire defender can make one attack against any creature that attempts to leave or enter his bonded territory. This attack does not count against his attacks for the round.',
      },
    ],
    source: 'Pathfinder Player Companion: Magical Marketplace',
  },

  // ──────────────────────────────────────────────
  // 26. Cabalist
  // ──────────────────────────────────────────────
  {
    name: 'Cabalist',
    className: 'Magus',
    description:
      'The cabalist combines traditional magus training with an occult tradition of secret rites and forbidden knowledge, drawing power from esoteric symbols and numerological patterns. He sacrifices some combat fluidity for access to a deeper well of ritualistic arcane power.',
    replacedFeatures: ['Improved Spell Combat', 'Fighter Training'],
    modifiedFeatures: ['Arcane Pool', 'Magus Arcana'],
    newFeatures: [
      {
        name: 'Occult Arcana',
        level: 1,
        description:
          "The cabalist gains access to the occultist's implement school system as magus arcana options. At each level he gains a magus arcana, he may instead select an implement school, gaining that school's resonant power and focus power.",
      },
      {
        name: 'Mental Focus',
        level: 1,
        description:
          'The cabalist gains a mental focus pool of 2 points per magus level that refreshes each day. He spends focus points to power implement school abilities rather than using standard spell slots, representing his deeper connection to occult practices.',
      },
      {
        name: 'Cabalistic Strike',
        level: 5,
        description:
          "At 5th level, when the cabalist uses spellstrike to deliver a spell, he can spend mental focus points to enhance the spell's effect. Each focus point spent adds 1 to the spell's save DC or extends its duration by 1 round.",
      },
      {
        name: 'Occult Mastery',
        level: 11,
        description:
          'At 11th level, the cabalist can draw upon the full power of two implement schools simultaneously, using both resonant powers when holding both implements. He can also use occultist spells as magus spells by spending 2 mental focus points per spell level.',
      },
    ],
    source: 'Pathfinder Player Companion: Occult Origins',
  },

  // ──────────────────────────────────────────────
  // 27. Jistkan Artificer
  // ──────────────────────────────────────────────
  {
    name: 'Jistkan Artificer',
    className: 'Magus',
    description:
      'Followers of the ancient Jistka Imperium tradition, these magi have learned to bond their consciousness with massive constructs called iron golems, fighting through these mechanical shells rather than their own bodies. This archetype represents the pinnacle of Jistkan construct magic.',
    replacedFeatures: ['Arcane Pool (standard bonuses)', 'Medium Armor', 'Heavy Armor'],
    modifiedFeatures: ['Spell Combat', 'Spellstrike'],
    newFeatures: [
      {
        name: 'Construct Bond',
        level: 1,
        description:
          "The Jistkan artificer forms a bond with a Small construct companion that improves as he levels. The construct has hit points equal to the magus's hit points, shares his saving throw bonuses, and can deliver touch spells for the magus. The magus can sense through the construct's senses.",
      },
      {
        name: 'Arcane Enhancement',
        level: 3,
        description:
          "At 3rd level, the Jistkan artificer can spend arcane pool points to enhance his construct companion's natural weapons as if they were manufactured weapons, granting enhancement bonuses and weapon special abilities normally available through the arcane pool.",
      },
      {
        name: 'Construct Spellstrike',
        level: 4,
        description:
          'At 4th level, the Jistkan artificer can cast touch spells and have his construct companion deliver them via its natural attacks. When spell combat is used, both the magus and construct can attack as part of the same full attack action.',
      },
      {
        name: 'Merged Consciousness',
        level: 10,
        description:
          "At 10th level, the Jistkan artificer can spend 3 arcane pool points to transfer his consciousness into his construct companion for up to 1 hour. His body becomes catatonic while his mind controls the construct, granting him the construct's physical abilities while retaining his own mental statistics and spellcasting.",
      },
    ],
    source: 'Pathfinder Player Companion: Artifacts & Legends',
  },

  // ──────────────────────────────────────────────
  // 28. Armored Battlemage
  // ──────────────────────────────────────────────
  {
    name: 'Armored Battlemage',
    className: 'Magus',
    description:
      'The armored battlemage is the quintessential magus of the front line, eschewing subtlety to develop the ability to cast freely in the heaviest armor while maintaining full combat effectiveness. He sacrifices magical refinement for the security of impenetrable defenses.',
    replacedFeatures: ['Spell Recall', 'Knowledge Pool', 'Improved Spell Recall', 'True Magus'],
    modifiedFeatures: ['Medium Armor', 'Heavy Armor'],
    newFeatures: [
      {
        name: 'Armored Casting',
        level: 1,
        description:
          'The armored battlemage reduces his arcane spell failure chance from armor by 10% at 1st level, improving by an additional 10% every 3 levels (to a maximum reduction of 70% at 19th level). He can also cast in heavy armor without arcane spell failure chance at 15th level.',
      },
      {
        name: 'Armor Mastery',
        level: 5,
        description:
          "At 5th level, the armored battlemage can spend 1 arcane pool point to reduce his armor check penalty to 0 for 1 minute. At 11th level, he can spend 2 points to also gain a +1 enhancement bonus to his armor's armor bonus for 1 minute per magus level.",
      },
      {
        name: 'Fortress Body',
        level: 11,
        description:
          'At 11th level, while wearing heavy armor the armored battlemage gains DR 3/—. This damage reduction stacks with DR gained from adamantine armor. At 17th level this increases to DR 5/—.',
      },
      {
        name: 'Arcane Bulwark',
        level: 17,
        description:
          'At 17th level, the armored battlemage can spend 4 arcane pool points as an immediate action to become immune to one spell or spell-like ability that targets him, reflecting it back at the caster. This ability can be used once per day, plus once more for every 2 arcane pool points spent.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 29. Twilight Talker
  // ──────────────────────────────────────────────
  {
    name: 'Twilight Talker',
    className: 'Magus',
    description:
      'The twilight talker pairs diplomatic and social manipulation with blade magic, using language and performance as vehicles for his arcane power. He trades warrior focus for the ability to cast spells through words and manipulate others as readily as he does his weapon.',
    replacedFeatures: ['Fighter Training', 'Heavy Armor'],
    modifiedFeatures: ['Spell Combat', 'Magus Arcana'],
    newFeatures: [
      {
        name: 'Silver Tongue',
        level: 1,
        description:
          'The twilight talker adds Bluff, Diplomacy, and Perform (oratory) to his class skill list and gains a bonus equal to half his magus level on these checks. He can use Charisma instead of Intelligence as his casting ability modifier for enchantment spells.',
      },
      {
        name: 'Verbal Strike',
        level: 3,
        description:
          "At 3rd level, the twilight talker can deliver enchantment spells with a range of close or greater through a verbal performance rather than touch. As a standard action, he can use Verbal Strike while within 30 feet of a target, making a melee touch attack roll versus the target's touch AC as if speaking were a physical blow.",
      },
      {
        name: 'Inspiring Blade',
        level: 6,
        description:
          'At 6th level, the twilight talker can spend 1 arcane pool point as a swift action to grant all allies within 30 feet a +2 morale bonus on attack rolls, saving throws, and skill checks for 1 round. At 12th level this bonus increases to +4 and lasts 2 rounds.',
      },
      {
        name: 'Legendary Orator',
        level: 14,
        description:
          'At 14th level, the twilight talker can cast up to three enchantment spells per day as if they were maximized and empowered without adjusting their spell slot level. In addition, targets of his enchantment spells take a -2 penalty on their initial saving throws.',
      },
    ],
    source: 'Pathfinder Player Companion: Faiths of Balance',
  },

  // ──────────────────────────────────────────────
  // 30. Havocker Magus (Kineticist Hybrid)
  // ──────────────────────────────────────────────
  {
    name: 'Havocker Magus',
    className: 'Magus',
    description:
      'The havocker magus channels raw elemental energy into a unique blend of kinetic blasts and spellblade techniques, delivering elemental destruction through melee and at range. He sacrifices the upper tiers of standard magus ability to access kineticist-style elemental powers.',
    replacedFeatures: ['Heavy Armor', 'Greater Spell Access', 'True Magus'],
    modifiedFeatures: ['Arcane Pool', 'Magus Arcana'],
    newFeatures: [
      {
        name: 'Kinetic Focus',
        level: 1,
        description:
          'At 1st level, the havocker magus selects one kineticist element (aether, air, earth, fire, or water). He gains the base kinetic blast of that element as a spell-like ability that deals damage as a ranged touch attack. He uses his magus level as his kineticist level for this ability.',
      },
      {
        name: 'Infusion',
        level: 3,
        description:
          'At 3rd level, the havocker magus gains one infusion wild talent of his choice from the kineticist list for his element. He gains an additional infusion at 6th, 9th, 12th, 15th, and 18th levels, and can use these infusions with his kinetic blast spell-like ability.',
      },
      {
        name: 'Kinetic Spellstrike',
        level: 5,
        description:
          "At 5th level, the havocker magus can deliver his kinetic blast through his weapon as part of a spellstrike, treating the kinetic blast as a touch spell for this purpose. This does not apply the blast's normal range—it delivers its damage to the target struck in melee.",
      },
      {
        name: 'Elemental Surge',
        level: 11,
        description:
          'At 11th level, the havocker magus can spend 3 arcane pool points to maximize the damage of his next kinetic blast or kinetic spellstrike. Any elemental damage dice on this attack deal maximum damage.',
      },
    ],
    source: 'Pathfinder Player Companion: Occult Origins',
  },
];
