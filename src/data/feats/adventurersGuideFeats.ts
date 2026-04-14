import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const ADVENTURERS_GUIDE_FEATS: FeatDefinition[] = [
  {
    id: 'additional_affiliations',
    name: 'Additional Affiliations',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You have an expansive personality and can forge more affiliations than normal. Increase your affiliation slot total by 2. Normally you have a number of affiliation slots equal to your Charisma modifier + 1 (minimum 1). You can take this feat multiple times; each time you do so, your number of affiliation slots increases by 2.',
    shortDescription: 'Gain 2 additional affiliation slots; can be taken multiple times',
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['affiliation', 'social'],
  },

  {
    id: 'agile_maiden',
    name: 'Agile Maiden',
    types: ['combat'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      "The Gray Maidens' signature armor hinders you less than others. For the purpose of class features (such as a ranger's combat style, a barbarian's fast movement, or a magus's spellcasting), you treat Gray Maiden plate as medium armor or heavy armor, whichever is more beneficial to a given ability. This does not affect the armor's statistics, and it is still considered heavy armor for all other purposes.",
    shortDescription: 'Treat Gray Maiden plate as medium or heavy armor for class features',
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      {
        type: 'special',
        description: 'Endurance or armor training class feature',
      },
      { type: 'proficiency', proficiency: 'heavy armor' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['gray_maidens', 'armor', 'class_feature'],
  },

  {
    id: 'aldori_artistry',
    name: 'Aldori Artistry',
    types: ['combat'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You can do more with your blade than slash and stab. Choose one of the following combat maneuvers: disarm, reposition, steal, sunder, or trip. You gain a +2 bonus when performing the selected maneuver while wielding an Aldori dueling sword. This bonus does not stack with the bonus provided by a combat maneuver feat with "improved" in its name (such as Improved Trip). You can select this feat multiple times, choosing a different combat maneuver each time.',
    shortDescription: '+2 on one chosen combat maneuver while wielding an Aldori dueling sword',
    prerequisites: [
      {
        type: 'proficiency',
        proficiency: 'Aldori dueling sword',
      },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'bab', minimum: 2 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb',
        value: 2,
        source: 'Aldori Artistry',
        condition: {
          type: 'custom',
          description: 'When performing chosen maneuver while wielding an Aldori dueling sword',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['aldori', 'combat_maneuver', 'dueling_sword'],
  },

  {
    id: 'aldori_dueling_disciple',
    name: 'Aldori Dueling Disciple',
    types: ['combat'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'Your prowess in Aldori swordplay grants you bravado. You gain a +2 morale bonus on Intimidate checks to demoralize opponents, and the DC of any attempt to demoralize you increases by 2. When you are participating in a duel, these bonuses increase to +4.',
    shortDescription: '+2 morale on Intimidate to demoralize; +4 during duels',
    prerequisites: [
      {
        type: 'proficiency',
        proficiency: 'Aldori dueling sword',
      },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'feat', featId: 'weapon_focus' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'skill.intimidate',
        value: 2,
        source: 'Aldori Dueling Disciple',
        condition: {
          type: 'custom',
          description: 'When demoralizing opponents (+4 during duels)',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['aldori', 'intimidate', 'dueling'],
  },

  {
    id: 'aldori_dueling_mastery',
    name: 'Aldori Dueling Mastery',
    types: ['combat'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You have mastered the impenetrable Aldori fighting style. You gain a +2 bonus on initiative checks as long as you start combat with an Aldori dueling sword in your hand. As long as you wield only a single Aldori dueling sword in one hand (not using a shield, an off-hand weapon, armor spikes, unarmed strikes, or natural weapons), you gain a +2 shield bonus to your AC. If you wield the sword in two hands, this bonus drops to a +1 shield bonus to AC. Although the dueling sword deals slashing damage, you treat it as a piercing weapon for the purpose of bypassing damage reduction.',
    shortDescription:
      '+2 initiative; +2 shield AC when wielding only an Aldori dueling sword one-handed',
    prerequisites: [
      {
        type: 'proficiency',
        proficiency: 'Aldori dueling sword',
      },
      { type: 'feat', featId: 'quick_draw' },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'feat', featId: 'weapon_focus' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'initiative',
        value: 2,
        source: 'Aldori Dueling Mastery',
        condition: {
          type: 'custom',
          description: 'When starting combat with an Aldori dueling sword in hand',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.SHIELD,
        target: 'ac',
        value: 2,
        source: 'Aldori Dueling Mastery',
        condition: {
          type: 'custom',
          description: 'While wielding only an Aldori dueling sword in one hand',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['aldori', 'initiative', 'ac', 'dueling_sword'],
  },

  {
    id: 'aldori_style',
    name: 'Aldori Style',
    types: ['combat', 'style'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You have learned the classic Aldori dueling stance. While using Aldori Style and wielding only a single Aldori dueling sword in one hand (not using a shield, an off-hand weapon, armor spikes, unarmed strikes, or natural weapons), when you fight defensively or use Combat Expertise, you gain a +2 bonus on weapon damage rolls.',
    shortDescription:
      '+2 weapon damage when fighting defensively or using Combat Expertise with an Aldori dueling sword',
    prerequisites: [
      { type: 'feat', featId: 'alertness' },
      {
        type: 'proficiency',
        proficiency: 'Aldori dueling sword',
      },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'feat', featId: 'weapon_focus' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'weapon.damage',
        value: 2,
        source: 'Aldori Style',
        condition: {
          type: 'custom',
          description:
            'While using Aldori Style with only an Aldori dueling sword, when fighting defensively or using Combat Expertise',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['aldori', 'style', 'dueling_sword', 'damage'],
  },

  {
    id: 'aldori_style_aegis',
    name: 'Aldori Style Aegis',
    types: ['combat'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      "Baron Aldori's dueling style is at its strongest when employed in one-on-one duels. Adjusting to a reverse grip and keeping your blade in motion, you parry your rival's strikes with ease. While using Aldori Style, at the beginning of your turn, you can designate a focused target as a swift action. This designation lasts until the beginning of your next turn, and you take a -2 penalty to your AC against all other creatures' attacks for that duration. As an immediate action while using Combat Expertise or fighting defensively, you can attempt to parry the focused target's attack. This functions as the swashbuckler's opportune parry and riposte deed, except that it does not cost panache and you cannot riposte.",
    shortDescription:
      'Designate one foe and parry their attacks as an immediate action while using Aldori Style',
    prerequisites: [
      { type: 'feat', featId: 'aldori_style' },
      { type: 'feat', featId: 'alertness' },
      { type: 'feat', featId: 'combat_reflexes' },
      {
        type: 'proficiency',
        proficiency: 'Aldori dueling sword',
      },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'feat', featId: 'weapon_focus' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aldori', 'style', 'dueling_sword', 'parry', 'duel'],
  },

  {
    id: 'aldori_style_conquest',
    name: 'Aldori Style Conquest',
    types: ['combat'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'Defense is now second nature to you, and your blade punishes those who try to attack and fail. When you attempt to parry an attack using Aldori Style Aegis, you do not take any penalties on the attack roll incurred from using Combat Expertise or fighting defensively.',
    shortDescription: 'No attack roll penalties when parrying with Aldori Style Aegis',
    prerequisites: [
      { type: 'feat', featId: 'aldori_style' },
      { type: 'feat', featId: 'aldori_style_aegis' },
      { type: 'feat', featId: 'alertness' },
      { type: 'feat', featId: 'combat_reflexes' },
      {
        type: 'proficiency',
        proficiency: 'Aldori dueling sword',
      },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'feat', featId: 'weapon_focus' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aldori', 'style', 'dueling_sword', 'parry', 'duel'],
  },

  {
    id: 'al_zabriti_trained_horse',
    name: 'Al-Zabriti-Trained Horse',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'This horse was trained by the Al-Zabriti tribespeople. It knows more tricks and is more loyal to its rider than most mounts. This horse automatically knows the tricks included in the combat riding trick (attack, come, defend, down, guard, and heel), and these tricks do not count against the normal maximum number of tricks the horse can learn. The Handle Animal DC to get the horse to perform a trick is reduced by 5, and the DC to teach the horse new tricks is reduced by 5.',
    shortDescription: 'Horse knows combat riding tricks for free; Handle Animal DCs reduced by 5',
    prerequisites: [{ type: 'special', description: 'Horse' }],
    effects: [],
    activationMode: 'passive',
    tags: ['animal', 'horse', 'handle_animal', 'mounted'],
  },

  {
    id: 'armored_rider',
    name: 'Armored Rider',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      "You are accustomed to riding while wearing armor, and your armor doesn't hinder your riding skills. You don't take the usual armor check penalty on Ride checks. If you are knocked unconscious while in a saddle, you always remain in the saddle. Normally, if you are knocked unconscious while riding, you have a 50% chance to stay in the saddle (75% if you're in a military saddle).",
    shortDescription: 'No armor check penalty on Ride; always stay in saddle when unconscious',
    prerequisites: [
      { type: 'feat', featId: 'mounted_combat' },
      { type: 'skill', skillId: 'ride', ranks: 3 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['mounted', 'ride', 'armor'],
  },

  {
    id: 'aspis_partner',
    name: 'Aspis Partner',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You have earned the attention of the Aspis Consortium and can call in favors when necessary. Whenever you are in a settlement that is the size of a small town or larger, you can purchase (but not sell) items through your Aspis contacts. Treat your current settlement as though it were a metropolis to determine its base value and available magic items. You pay a 5% markup for such items, and orders take 3d6 days to be delivered through Consortium channels. You can pay an additional 1,000 gp to have your item magically delivered to you in 1d3 days instead.',
    shortDescription: 'Purchase items as if in a metropolis through Aspis Consortium contacts',
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['aspis_consortium', 'faction', 'social', 'equipment'],
  },

  {
    id: 'cold_celerity',
    name: 'Cold Celerity',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You are a child of the frozen north, and you draw strength from the biting cold and unforgiving conditions. When you are in conditions of severe cold (below 0 degrees F), you gain a +2 bonus on initiative checks and a +1 bonus on attack rolls. In addition, you gain the bonus on attack rolls for 1 round after any round in which you take cold damage.',
    shortDescription:
      '+2 initiative and +1 attack in severe cold conditions or after taking cold damage',
    prerequisites: [{ type: 'feat', featId: 'endurance' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'initiative',
        value: 2,
        source: 'Cold Celerity',
        condition: {
          type: 'custom',
          description: 'In severe cold conditions (below 0 degrees F)',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.all',
        value: 1,
        source: 'Cold Celerity',
        condition: {
          type: 'custom',
          description: 'In severe cold conditions or for 1 round after taking cold damage',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['cold', 'environment', 'initiative', 'attack'],
  },

  {
    id: 'cypher_magic',
    name: 'Cypher Magic',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      "Your intimacy with runes and the mysteries of ancient arcana has taught you secret ways to draw greater power from magical writings. The Cyphermages of Riddleport initially devised these unusual methods, but they have since spread far and wide through the Inner Sea region. You cast spells from scrolls at 1 caster level higher than the scroll's caster level. In addition, you gain a +2 bonus on caster level checks to activate a scroll with a higher caster level than your own.",
    shortDescription:
      'Cast from scrolls at +1 caster level; +2 on caster level checks for higher-CL scrolls',
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 15 },
      { type: 'feat', featId: 'scribe_scroll' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'spell.caster_level',
        value: 1,
        source: 'Cypher Magic',
        condition: {
          type: 'custom',
          description: 'When casting spells from scrolls',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'spell.caster_level_check',
        value: 2,
        source: 'Cypher Magic',
        condition: {
          type: 'custom',
          description: 'When activating a scroll with a higher caster level than your own',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['scrolls', 'arcane', 'cyphermages', 'caster_level'],
  },

  {
    id: 'cypher_script',
    name: 'Cypher Script',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'Through researching lengthy, ancient, arcane scripts salvaged from Thassilonian ruins, you have discovered a more efficient method of recording spells. Any spell you scribe in your spellbook costs half as much as normal and takes up only half the room it normally would (round all fractions up). As with the Cypher Magic feat, Cypher Script was originally developed by the Cyphermages of Riddleport.',
    shortDescription: 'Spells scribed in spellbook cost half gold and take half space',
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 1 },
      { type: 'skill', skillId: 'linguistics', ranks: 1 },
      { type: 'skill', skillId: 'spellcraft', ranks: 1 },
      { type: 'class_feature', featureName: 'spellbook' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['spellbook', 'arcane', 'cyphermages', 'preparation'],
  },

  {
    id: 'devil_sense',
    name: 'Devil Sense',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You instinctively sense the presence of fiends. At the beginning of your turn each round, if you are within 60 feet of an outsider with the evil subtype, you instinctively sense that something unholy is near. You may experience this sense as an unpleasant smell or taste (such as sulfur), as gooseflesh on your arms or neck, or as an ineffable sense of dread. This sense does not alert you to the direction of the outsider. Anything that can thwart or mislead detect evil can likewise block this sense.',
    shortDescription: 'Sense evil outsiders within 60 feet at the start of each turn',
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      {
        type: 'special',
        description: 'Ability to cast detect evil as a spell or spell-like ability',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['fiend', 'detection', 'evil', 'hellknights'],
  },

  {
    id: 'duelist_of_the_roaring_falls',
    name: 'Duelist of the Roaring Falls',
    types: ['combat'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You have embraced the Roaring Falls method of Aldori swordplay, known for its elegant, sweeping strikes. When you use an Aldori dueling sword to deal damage to a shaken, frightened, or panicked foe, you can add your Dexterity bonus to damage rolls instead of your Strength bonus. If you can already add your Dexterity bonus to damage rolls, you instead gain a +1 competence bonus on damage rolls made with an Aldori dueling sword. When you attempt a dueling parry during a duel, the penalty on your attack roll to parry is reduced from -5 to -3. To gain these benefits, you must be wielding only an Aldori dueling sword.',
    shortDescription: 'Add Dex to damage vs. frightened foes; reduced parry penalty in duels',
    prerequisites: [
      { type: 'feat', featId: 'aldori_dueling_disciple' },
      {
        type: 'proficiency',
        proficiency: 'Aldori dueling sword',
      },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aldori', 'dueling_sword', 'dexterity', 'fear', 'duel'],
  },

  {
    id: 'duelist_of_the_shrouded_lake',
    name: 'Duelist of the Shrouded Lake',
    types: ['combat'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You have embraced the Shrouded Lake style of Aldori swordplay, known for its circuitous footwork. When attempting to bull rush or reposition a foe, you gain a +1 insight bonus on the combat maneuver check and a +4 dodge bonus to your AC against attacks of opportunity you provoke. You also gain a +1 insight bonus to your CMD against bull rush and reposition attempts. When you attempt a dueling dodge during a duel, your bonus to AC increases to +6. To gain these benefits, you must be wielding only an Aldori dueling sword.',
    shortDescription:
      '+1 insight on bull rush/reposition; +4 dodge AC vs. attacks of opportunity; +6 AC on dueling dodge',
    prerequisites: [
      { type: 'feat', featId: 'aldori_dueling_disciple' },
      {
        type: 'proficiency',
        proficiency: 'Aldori dueling sword',
      },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'cmb',
        value: 1,
        source: 'Duelist of the Shrouded Lake',
        condition: {
          type: 'custom',
          description:
            'When attempting to bull rush or reposition while wielding only an Aldori dueling sword',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 4,
        source: 'Duelist of the Shrouded Lake',
        condition: {
          type: 'custom',
          description:
            'Against attacks of opportunity provoked during bull rush or reposition while wielding only an Aldori dueling sword',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'cmd',
        value: 1,
        source: 'Duelist of the Shrouded Lake',
        condition: {
          type: 'custom',
          description:
            'Against bull rush and reposition attempts while wielding only an Aldori dueling sword',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['aldori', 'dueling_sword', 'bull_rush', 'reposition', 'duel'],
  },

  {
    id: 'eagles_resolve',
    name: "Eagle's Resolve",
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      "You are resolute in your opposition to slavery and oppression, and the very thought of mental control disgusts you. You receive a +1 bonus on saving throws against mind-affecting effects. When you succeed at such a saving throw, you gain a +2 morale bonus on all attack rolls, damage rolls, and saving throws against the source of that effect for a number of rounds equal to the spell's level, or if the effect is not a spell, for a number of rounds equal to one-third the Hit Dice of the creature that created the effect.",
    shortDescription:
      '+1 save vs. mind-affecting; on success, +2 morale on attacks and saves vs. source',
    prerequisites: [{ type: 'feat', featId: 'iron_will' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 1,
        source: "Eagle's Resolve",
        condition: {
          type: 'custom',
          description: 'Against mind-affecting effects',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['andoran', 'steel_falcons', 'mind_affecting', 'saving_throws'],
  },

  {
    id: 'expert_boarder',
    name: 'Expert Boarder',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      "You are as comfortable dangling from a ship's rigging as you are on stable land. Acrobatics and Climb are class skills for you. You gain a +2 bonus on Acrobatics and Climb checks to climb or swing on a rope or ship's rigging. You do not provoke attacks of opportunity from climbing or swinging on a rope or ship's rigging.",
    shortDescription: '+2 Acrobatics/Climb on rigging; no AoOs from climbing or swinging on ropes',
    prerequisites: [{ type: 'special', description: 'Affiliated with the Gray Corsairs' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.acrobatics',
        value: 2,
        source: 'Expert Boarder',
        condition: {
          type: 'custom',
          description: "When climbing or swinging on a rope or ship's rigging",
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.climb',
        value: 2,
        source: 'Expert Boarder',
        condition: {
          type: 'custom',
          description: "When climbing or swinging on a rope or ship's rigging",
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['andoran', 'gray_corsairs', 'acrobatics', 'climb', 'naval'],
  },

  {
    id: 'extra_spontaneous_spell_mastery',
    name: 'Extra Spontaneous Spell Mastery',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You are able to spontaneously cast spells you have mastered more frequently than your peers. You gain one additional use of your spontaneous spell mastery ability per day. You can take this feat multiple times.',
    shortDescription: 'Gain one additional use of spontaneous spell mastery per day',
    prerequisites: [
      {
        type: 'class_feature',
        featureName: 'Magaambyan arcanist spontaneous spell mastery',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['magaambya', 'arcanist', 'spontaneous', 'spellcasting'],
  },

  {
    id: 'falcons_cry',
    name: "Falcon's Cry",
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You inspire others to throw off the shackles of oppression. As a standard action, you can grant everyone within 60 feet who is able to see and hear you the ability to roll twice when attempting an Escape Artist check, a Will save against compulsions, or a Strength check to break chains, manacles, or similar bonds. Such checks must be attempted before the beginning of your next turn. You can do this once per day, plus one additional time for every 3 character levels that you have.',
    shortDescription:
      'Grant allies within 60 ft. to roll twice on Escape Artist, Will vs. compulsions, or Strength to break bonds',
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Affiliated with the Steel Falcons' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['andoran', 'steel_falcons', 'inspiration', 'freedom', 'leadership'],
  },

  {
    id: 'falling_water_gambit',
    name: 'Falling Water Gambit',
    types: ['combat'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'You have integrated both the Roaring Falls and Shrouded Lake techniques of Aldori swordplay into a seamless union. When attacking a creature denied its Dexterity bonus to AC because of your successful feint, you increase the threat range of your Aldori dueling sword by 1 (typically to 18-20/x2), and gain a +2 bonus on attack rolls to confirm critical hits. After you make a dueling dodge or succeed at a dueling parry during a duel, you can make an attack of opportunity against the foe who attacked you if that foe is shaken, frightened, or panicked. To gain these benefits, you must be wielding only an Aldori dueling sword.',
    shortDescription:
      'Increased crit range on feinted foes; attack of opportunity after successful duel defense vs. frightened foes',
    prerequisites: [
      { type: 'feat', featId: 'aldori_dueling_disciple' },
      { type: 'feat', featId: 'duelist_of_the_roaring_falls' },
      { type: 'feat', featId: 'duelist_of_the_shrouded_lake' },
      {
        type: 'proficiency',
        proficiency: 'Aldori dueling sword',
      },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'critical_confirmation',
        value: 2,
        source: 'Falling Water Gambit',
        condition: {
          type: 'custom',
          description:
            'When attacking a creature denied Dex to AC from your feint while wielding only an Aldori dueling sword',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['aldori', 'dueling_sword', 'feint', 'critical', 'duel'],
  },

  {
    id: 'fanged_crown_massacre',
    name: 'Fanged Crown Massacre',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      'Driven by your loyalty to a fallen queen, you can inspire your allies to brutal acts. Whenever an ally within 30 feet makes an attack, you can attempt a DC 10 Perform (oratory) check as an immediate action. If you are successful, the ally gains a +2 morale bonus on her attack roll. If an attack affected in this way would normally deal nonlethal damage, it deals lethal damage instead. This ability has no effect if your ally cannot hear you speak or understand your words.',
    shortDescription: 'Immediate action: +2 morale on ally attack roll; nonlethal becomes lethal',
    prerequisites: [
      { type: 'feat', featId: 'bodyguard' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'skill', skillId: 'perform', ranks: 3 },
      { type: 'special', description: 'Any evil alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['gray_maidens', 'leadership', 'morale', 'inspire'],
  },

  {
    id: 'forceful_charge',
    name: 'Forceful Charge',
    types: ['general'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      "This animal's charges move its enemies. Once per round when this animal companion hits an opponent with a charge attack, it can initiate a bull rush against that target as a free action. If it moves its full speed as part of the charge, it gains a +4 bonus on its combat maneuver check to resolve this bull rush.",
    shortDescription: 'Animal companion can bull rush on a charge hit; +4 CMC if moving full speed',
    prerequisites: [
      { type: 'feat', featId: 'improved_bull_rush' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'special', description: 'Animal companion' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb',
        value: 4,
        source: 'Forceful Charge',
        condition: {
          type: 'custom',
          description:
            'When animal companion moves full speed as part of a charge and initiates a bull rush',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['animal_companion', 'charge', 'bull_rush', 'mounted'],
  },

  {
    id: 'garens_discipline',
    name: "Garen's Discipline",
    types: ['combat'],
    source: "Adventurer's Guide",
    verificationStatus: 'needs_review' as const,
    description:
      "You've learned to defend yourself against spell and storm with dazzling flourishes of your weapon. Whenever you use Combat Expertise, fight defensively, or take the total defense action, choose a type of saving throw. Once per round before attempting a saving throw using the selected save, you gain a +2 bonus on that save. If you have a base attack bonus of +11 or higher, this bonus increases to +3. If you have a base attack bonus of +16 or higher, the bonus instead increases to +4.",
    shortDescription: '+2 bonus on chosen save type when fighting defensively; scales with BAB',
    prerequisites: [
      { type: 'feat', featId: 'alertness' },
      {
        type: 'proficiency',
        proficiency: 'Aldori dueling sword',
      },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 2,
        source: "Garen's Discipline",
        condition: {
          type: 'custom',
          description:
            'Once per round on chosen save type when using Combat Expertise, fighting defensively, or taking total defense (+3 at BAB +11, +4 at BAB +16)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['aldori', 'dueling_sword', 'saving_throws', 'defensive'],
  },
];

// CHECKPOINT: last_written=garens_discipline, written=25/25, status=complete
