// Alternate Classes — all 3 alternate classes from Pathfinder 1e
// Source: https://www.d20pfsrd.com/classes/alternate-classes/

import { BABProgression, SaveProgression } from '@/types/base';
import { ExpandedClassData } from './types';

export const ALTERNATE_CLASSES_EXPANDED: ExpandedClassData[] = [
  // ─── ANTIPALADIN ─────────────────────────────────────────────────────────────
  {
    name: 'Antipaladin',
    category: 'Alternate',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 2,
    classSkills: [
      'Bluff',
      'Craft',
      'Disguise',
      'Handle Animal',
      'Intimidate',
      'Knowledge (religion)',
      'Profession',
      'Ride',
      'Sense Motive',
      'Spellcraft',
      'Stealth',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields'],
    startingWealth: '5d6 x 10 gp',
    alignment: 'Chaotic Evil',
    classFeatures: [
      {
        name: 'Aura of Evil',
        level: 1,
        description:
          "The power of an antipaladin's aura of evil (see the detect evil spell) is equal to his antipaladin level.",
        effects: [],
      },
      {
        name: 'Detect Good',
        level: 1,
        description:
          'At will, an antipaladin can use detect good, as the spell. An antipaladin can, as a move action, concentrate on a single item or individual within 60 feet and determine if it is good, learning the strength of its aura as if having studied it for 3 rounds. While focusing on one individual or object, the antipaladin does not detect good in any other object or individual within range.',
        effects: [],
      },
      {
        name: 'Smite Good',
        level: 1,
        description:
          'Once per day, an antipaladin can call out against the forces of good as a swift action. He chooses one target within sight to smite. If the target is good, the antipaladin adds his Charisma bonus (if any) to his attack rolls and adds his antipaladin level to all damage rolls made against the target. If the target is an outsider with the good subtype, a good-aligned dragon, or a good-aligned cleric or paladin, the bonus to damage on the first successful attack increases to 2 points of damage per level the antipaladin possesses. Regardless of the target, smite good attacks automatically bypass any DR the creature might possess. In addition, while smite good is in effect, the antipaladin gains a deflection bonus equal to his Charisma modifier (if any) to his AC against attacks made by the target of his smite. The smite good effect remains until the target of the smite is dead or the next time the antipaladin rests and regains his uses of this ability.',
        effects: [],
      },
      {
        name: 'Unholy Resilience',
        level: 2,
        description:
          'At 2nd level, an antipaladin gains a bonus equal to his Charisma bonus (if any) on all saving throws.',
        effects: [],
      },
      {
        name: 'Touch of Corruption',
        level: 2,
        description:
          'Beginning at 2nd level, an antipaladin surrounds his hand with a fiendish flame, causing terrible wounds to open on those he touches. Each day he can use this ability a number of times equal to 1/2 his antipaladin level + his Charisma modifier. As a touch attack, an antipaladin can cause 1d6 points of damage for every two antipaladin levels he possesses. Using this ability is a standard action that does not provoke attacks of opportunity. Alternatively, an antipaladin can use this power to heal undead creatures, restoring 1d6 hit points for every two levels the antipaladin possesses. This ability is modified by any feat, spell, or effect that specifically works with the lay on hands paladin class feature.',
        effects: [],
      },
      {
        name: 'Aura of Cowardice',
        level: 3,
        description:
          'At 3rd level, an antipaladin radiates a palpably daunting aura that causes all enemies within 10 feet to take a -4 penalty on saving throws against fear effects. Creatures that are normally immune to fear lose that immunity while within 10 feet of an antipaladin with this ability. This ability functions only while the antipaladin remains conscious, not if he is unconscious or dead.',
        effects: [],
      },
      {
        name: 'Plague Bringer',
        level: 3,
        description:
          'At 3rd level, the powers of darkness make an antipaladin a beacon of corruption and disease. An antipaladin does not take any damage or take any penalty from diseases. He can still contract diseases and spread them to others, but he is otherwise immune to their effects.',
        effects: [],
      },
      {
        name: 'Cruelty',
        level: 3,
        description:
          "At 3rd level, and every three levels thereafter, an antipaladin can select one cruelty. Each cruelty adds an effect to the antipaladin's touch of corruption ability. Whenever the antipaladin uses touch of corruption to deal damage to one target, the target also receives the additional effect from one of the cruelties possessed by the antipaladin. The target receives a Fortitude save to avoid this cruelty. If the save is successful, the target takes the damage as normal, but not the effects of the cruelty. The DC of this save is equal to 10 + 1/2 the antipaladin's level + the antipaladin's Charisma modifier. At 3rd level, the antipaladin can select from the following initial cruelties: fatigued, shaken, or sickened.",
        effects: [],
      },
      {
        name: 'Channel Negative Energy',
        level: 4,
        description:
          'When an antipaladin reaches 4th level, he gains the supernatural ability to channel negative energy like a cleric. Using this ability consumes two uses of his touch of corruption ability. An antipaladin uses his level as his effective cleric level when channeling negative energy. This is a Charisma-based ability.',
        effects: [],
      },
      {
        name: 'Spells',
        level: 4,
        description:
          "Beginning at 4th level, an antipaladin gains the ability to cast a small number of divine spells which are drawn from the antipaladin spell list. An antipaladin must choose and prepare his spells in advance. To prepare or cast a spell, an antipaladin must have a Charisma score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against an antipaladin's spell is 10 + the spell level + the antipaladin's Charisma modifier. Like other spellcasters, an antipaladin can cast only a certain number of spells of each spell level per day. Through 3rd level, an antipaladin has no caster level. At 4th level and higher, his caster level is equal to his antipaladin level - 3.",
        effects: [],
      },
      {
        name: 'Smite Good',
        level: 4,
        description: 'At 4th level, the antipaladin may smite good 2 times per day.',
        effects: [],
      },
      {
        name: 'Fiendish Boon',
        level: 5,
        description:
          'Upon reaching 5th level, an antipaladin receives a boon from his dark patrons. This boon can take one of two forms. The first type of bond allows the antipaladin to enhance his weapon as a standard action by calling upon a fiendish spirit for 1 minute per antipaladin level. At 5th level, the spirit grants the weapon a +1 enhancement bonus. For every three levels beyond 5th, the weapon gains another +1 enhancement bonus, to a maximum of +6 at 20th level. These bonuses can be added to the weapon, stacking with existing weapon bonuses to a maximum of +5, or they can be used to add weapon properties (flaming, keen, vicious at +1; anarchic, flaming burst, unholy, wounding at +2; speed at +3; vorpal at +5). An antipaladin can use this ability once per day at 5th level, and one additional time per day for every four levels beyond 5th, to a total of four times per day at 17th level. The second type of boon allows an antipaladin to gain the service of a fiendish servant, as if using the spell summon monster III. The creature gained serves the antipaladin as a loyal mount or companion.',
        effects: [],
      },
      {
        name: 'Cruelty',
        level: 6,
        description:
          'At 6th level, the following cruelties are added to the list that can be selected: dazed, diseased (as the contagion spell), and staggered.',
        effects: [],
      },
      {
        name: 'Smite Good',
        level: 7,
        description: 'At 7th level, the antipaladin may smite good 3 times per day.',
        effects: [],
      },
      {
        name: 'Aura of Despair',
        level: 8,
        description:
          'At 8th level, enemies within 10 feet of an antipaladin take a -2 penalty on all saving throws. This ability functions only while the antipaladin remains conscious, not if he is unconscious or dead.',
        effects: [],
      },
      {
        name: 'Cruelty',
        level: 9,
        description:
          'At 9th level, the following cruelties are added to the list that can be selected: cursed (as bestow curse), exhausted (the target must already be fatigued), frightened (the target must already be shaken), nauseated (the target must already be sickened), and poisoned (as the poison spell).',
        effects: [],
      },
      {
        name: 'Smite Good',
        level: 10,
        description: 'At 10th level, the antipaladin may smite good 4 times per day.',
        effects: [],
      },
      {
        name: 'Aura of Vengeance',
        level: 11,
        description:
          "At 11th level, an antipaladin can expend two uses of his smite good ability to grant the ability to smite good to all allies within 10 feet, using his bonuses. Allies must use this smite good ability by the start of the antipaladin's next turn and the bonuses last for 1 minute. Using this ability is a free action.",
        effects: [],
      },
      {
        name: 'Cruelty',
        level: 12,
        description:
          'At 12th level, the following cruelties are added to the list that can be selected: blinded, deafened, paralyzed, and stunned.',
        effects: [],
      },
      {
        name: 'Smite Good',
        level: 13,
        description: 'At 13th level, the antipaladin may smite good 5 times per day.',
        effects: [],
      },
      {
        name: 'Aura of Sin',
        level: 14,
        description:
          "At 14th level, an antipaladin's weapons are treated as evil-aligned for the purposes of overcoming damage reduction. Any attack made against an enemy within 10 feet of him is also treated as evil-aligned for the purposes of overcoming damage reduction. This ability functions only while the antipaladin remains conscious, not if he is unconscious or dead.",
        effects: [],
      },
      {
        name: 'Cruelty',
        level: 15,
        description: 'At 15th level, the antipaladin can select another cruelty.',
        effects: [],
      },
      {
        name: 'Smite Good',
        level: 16,
        description: 'At 16th level, the antipaladin may smite good 6 times per day.',
        effects: [],
      },
      {
        name: 'Aura of Depravity',
        level: 17,
        description:
          'At 17th level, an antipaladin gains DR 5/good. Each enemy within 10 feet takes a -4 penalty on saving throws against compulsion effects. This ability functions only while the antipaladin remains conscious, not if he is unconscious or dead.',
        effects: [],
      },
      {
        name: 'Cruelty',
        level: 18,
        description: 'At 18th level, the antipaladin can select another cruelty.',
        effects: [],
      },
      {
        name: 'Smite Good',
        level: 19,
        description: 'At 19th level, the antipaladin may smite good 7 times per day.',
        effects: [],
      },
      {
        name: 'Unholy Champion',
        level: 20,
        description:
          'At 20th level, an antipaladin becomes a conduit for the might of the dark powers. His DR increases to 10/good. Whenever he uses smite good and successfully strikes a good outsider, the outsider is also subject to a banishment, using his antipaladin level as the caster level (his weapon and unholy symbol automatically count as objects that the subject hates). After the banishment effect and the damage from the attack are resolved, the smite immediately ends. In addition, whenever he channels negative energy or uses touch of corruption to damage a creature, he deals the maximum possible amount.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Prepared',
      spellList: 'Antipaladin',
      spellTableKey: 'FOUR_LEVEL_PREPARED_PER_DAY',
    },
    source: "Advanced Player's Guide",
  },

  // ─── NINJA ───────────────────────────────────────────────────────────────────
  {
    name: 'Ninja',
    category: 'Alternate',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 8,
    classSkills: [
      'Acrobatics',
      'Appraise',
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Disable Device',
      'Disguise',
      'Escape Artist',
      'Intimidate',
      'Knowledge (local)',
      'Knowledge (nobility)',
      'Linguistics',
      'Perception',
      'Perform',
      'Profession',
      'Sense Motive',
      'Sleight of Hand',
      'Stealth',
      'Swim',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [
      'Simple weapons',
      'Kama',
      'Katana',
      'Kusarigama',
      'Nunchaku',
      'Sai',
      'Shortbow',
      'Short sword',
      'Shuriken',
      'Siangham',
      'Wakizashi',
    ],
    armorProficiencies: ['Light armor'],
    startingWealth: '4d6 x 10 gp',
    classFeatures: [
      {
        name: 'Poison Use',
        level: 1,
        description:
          'At 1st level, a ninja is trained in the use of poison and cannot accidentally poison herself when applying poison to a weapon.',
        effects: [],
      },
      {
        name: 'Sneak Attack +1d6',
        level: 1,
        description:
          "If a ninja can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The ninja's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the ninja flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every two ninja levels thereafter. Should the ninja score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet.",
        effects: [],
      },
      {
        name: 'Ki Pool',
        level: 2,
        description:
          "At 2nd level, a ninja gains a pool of ki points, supernatural energy she can use to accomplish amazing feats. The number of points in the ninja's ki pool is equal to 1/2 her ninja level + her Charisma modifier. By spending 1 point from her ki pool, a ninja can make one additional attack at her highest attack bonus (as part of a full attack), increase her speed by 20 feet for 1 round, or give herself a +4 insight bonus on Stealth checks for 1 round. Each of these powers is activated as a swift action. A ninja can gain additional powers that consume points from her ki pool by selecting certain ninja tricks.",
        effects: [],
      },
      {
        name: 'Ninja Trick',
        level: 2,
        description:
          'Starting at 2nd level, a ninja gains one ninja trick. She gains an additional ninja trick for every 2 levels attained after 2nd. Unless otherwise noted, a ninja cannot select an individual ninja trick more than once.',
        effects: [],
      },
      {
        name: 'No Trace +1',
        level: 3,
        description:
          'At 3rd level, a ninja learns to cover her tracks, remain hidden, and conceal her presence. The DC to track a ninja using the Survival skill increases by +1. In addition, her training gives her a +1 insight bonus on Disguise skill checks and on opposed Stealth checks whenever she is stationary and does not take any action for at least 1 round. This bonus increases by 1 every three levels thereafter.',
        effects: [],
      },
      {
        name: 'Sneak Attack +2d6',
        level: 3,
        description: 'Sneak attack damage increases to +2d6.',
        effects: [],
      },
      {
        name: 'Ninja Trick',
        level: 4,
        description: 'The ninja gains an additional ninja trick.',
        effects: [],
      },
      {
        name: 'Uncanny Dodge',
        level: 4,
        description:
          'Starting at 4th level, a ninja can react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dexterity bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A ninja with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action against her.',
        effects: [],
      },
      {
        name: 'Sneak Attack +3d6',
        level: 5,
        description: 'Sneak attack damage increases to +3d6.',
        effects: [],
      },
      {
        name: 'Light Steps',
        level: 6,
        description:
          'Starting at 6th level, a ninja learns to move while barely touching the surface beneath her. As a full-round action, she can move up to twice her speed, ignoring difficult terrain. While moving in this way, any surface will support her, no matter how much she weighs. This allows her to move across water, lava, or even the thinnest tree branches. She must end her move on a surface that can support her normally. She cannot move across air in this way, nor can she walk up walls or other vertical surfaces. When moving in this way, she does not take damage from surfaces or hazards that deal damage based on her weight, nor does she activate location-based traps that are triggered by walking over them.',
        effects: [],
      },
      {
        name: 'Ninja Trick',
        level: 6,
        description: 'The ninja gains an additional ninja trick.',
        effects: [],
      },
      {
        name: 'No Trace +2',
        level: 6,
        description: 'No trace bonus increases to +2.',
        effects: [],
      },
      {
        name: 'Sneak Attack +4d6',
        level: 7,
        description: 'Sneak attack damage increases to +4d6.',
        effects: [],
      },
      {
        name: 'Ninja Trick',
        level: 8,
        description: 'The ninja gains an additional ninja trick.',
        effects: [],
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 8,
        description:
          'At 8th level, a ninja can no longer be flanked. This defense denies another rogue or ninja the ability to sneak attack the ninja by flanking her, unless the attacker has at least four more rogue or ninja levels than the target does.',
        effects: [],
      },
      {
        name: 'No Trace +3',
        level: 9,
        description: 'No trace bonus increases to +3.',
        effects: [],
      },
      {
        name: 'Sneak Attack +5d6',
        level: 9,
        description: 'Sneak attack damage increases to +5d6.',
        effects: [],
      },
      {
        name: 'Master Tricks',
        level: 10,
        description:
          'At 10th level, a ninja may select a master trick whenever she could select a ninja trick. Master tricks are more powerful and often have prerequisites that must be met before they can be chosen.',
        effects: [],
      },
      {
        name: 'Ninja Trick',
        level: 10,
        description: 'The ninja gains an additional ninja trick (may be a master trick).',
        effects: [],
      },
      {
        name: 'Sneak Attack +6d6',
        level: 11,
        description: 'Sneak attack damage increases to +6d6.',
        effects: [],
      },
      {
        name: 'Ninja Trick',
        level: 12,
        description: 'The ninja gains an additional ninja trick (may be a master trick).',
        effects: [],
      },
      {
        name: 'No Trace +4',
        level: 12,
        description: 'No trace bonus increases to +4.',
        effects: [],
      },
      {
        name: 'Sneak Attack +7d6',
        level: 13,
        description: 'Sneak attack damage increases to +7d6.',
        effects: [],
      },
      {
        name: 'Ninja Trick',
        level: 14,
        description: 'The ninja gains an additional ninja trick (may be a master trick).',
        effects: [],
      },
      {
        name: 'No Trace +5',
        level: 15,
        description: 'No trace bonus increases to +5.',
        effects: [],
      },
      {
        name: 'Sneak Attack +8d6',
        level: 15,
        description: 'Sneak attack damage increases to +8d6.',
        effects: [],
      },
      {
        name: 'Ninja Trick',
        level: 16,
        description: 'The ninja gains an additional ninja trick (may be a master trick).',
        effects: [],
      },
      {
        name: 'Sneak Attack +9d6',
        level: 17,
        description: 'Sneak attack damage increases to +9d6.',
        effects: [],
      },
      {
        name: 'Ninja Trick',
        level: 18,
        description: 'The ninja gains an additional ninja trick (may be a master trick).',
        effects: [],
      },
      {
        name: 'No Trace +6',
        level: 18,
        description: 'No trace bonus increases to +6.',
        effects: [],
      },
      {
        name: 'Sneak Attack +10d6',
        level: 19,
        description: 'Sneak attack damage increases to +10d6.',
        effects: [],
      },
      {
        name: 'Hidden Master',
        level: 20,
        description:
          'At 20th level, a ninja becomes a true master of her art. She can, as a standard action, cast greater invisibility on herself. While invisible in this way, she cannot be detected by any means, and not even invisibility purge, see invisibility, or true seeing can reveal her. She uses her ninja level as her caster level for this ability. Using this ability consumes 3 ki points from her ki pool. In addition, whenever the ninja deals sneak attack damage, she can sacrifice additional sneak attack damage dice to apply a penalty to one ability score of the target equal to the number of sneak attack dice sacrificed for 1 minute. This penalty does not stack with itself and cannot reduce an ability score below 1.',
        effects: [],
      },
      {
        name: 'Ninja Trick',
        level: 20,
        description: 'The ninja gains an additional ninja trick (may be a master trick).',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Ultimate Combat',
  },

  // ─── SAMURAI ─────────────────────────────────────────────────────────────────
  {
    name: 'Samurai',
    category: 'Alternate',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Handle Animal',
      'Intimidate',
      'Profession',
      'Ride',
      'Sense Motive',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons', 'Katana', 'Naginata', 'Wakizashi'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields'],
    startingWealth: '5d6 x 10 gp',
    classFeatures: [
      {
        name: 'Challenge',
        level: 1,
        description:
          "Once per day, a samurai can challenge a foe to combat. As a swift action, the samurai chooses one target within sight to challenge. The samurai's melee attacks deal extra damage equal to his samurai level whenever the attacks are made against the target of his challenge. The samurai can use this ability once per day at 1st level, plus one additional time per day for every three levels beyond 1st, to a maximum of seven times per day at 19th level. Challenging a foe requires much of the samurai's concentration. The samurai takes a -2 penalty to his Armor Class, except against attacks made by the target of his challenge.",
        effects: [],
      },
      {
        name: 'Mount',
        level: 1,
        description:
          "A samurai gains the service of a loyal and trusty steed to carry him into battle. This mount functions as a druid's animal companion, using the samurai's level as his effective druid level. The creature must be one that he is capable of riding and is suitable as a mount. A Medium samurai can select a camel or a horse. A Small samurai can select a pony or wolf, but can also select a boar or a dog if he is at least 4th level. The samurai does not take an armor check penalty on Ride checks while riding his mount. The mount is always considered combat trained and begins play with Light Armor Proficiency as a bonus feat. Should the samurai's mount die, the samurai may find another mount to serve him after 1 week of mourning.",
        effects: [],
      },
      {
        name: 'Order',
        level: 1,
        description:
          "At 1st level, a samurai must pledge himself to a specific order. The order grants the samurai a number of bonuses, class skills, and special abilities. In addition, each order includes a number of edicts that the samurai must follow. If he violates these edicts, he loses the benefits of his order's challenge ability for 24 hours. Most samurai belong to the order of the warrior and are dedicated to their lord. Those without a master, or those who have been separated from their masters, are ronin.",
        effects: [],
      },
      {
        name: 'Resolve',
        level: 1,
        description:
          'Starting at 1st level, the samurai gains resolve that he can call upon to endure even the most devastating wounds and afflictions. He can use this ability once per day at 1st level, plus one additional time per day for every two samurai levels beyond 1st. Whenever the samurai defeats the target of his challenge, he regains one daily use of his resolve, up to his maximum. Defeating the target includes reducing the target to 0 hit points or fewer, or the target surrendering. The samurai can use his resolve in the following ways: Determined -- As a standard action, the samurai can spend one use of his resolve to remove the fatigued, shaken, or sickened condition. At 8th level, he can alternatively remove the exhausted, frightened, nauseated, or staggered condition. Resolute -- Whenever the samurai is required to make a Fortitude or Will save, he can spend one use of his resolve as an immediate action to roll twice and take the better result. He must decide to use this ability before he rolls the saving throw. Unstoppable -- When the samurai is reduced to fewer than 0 hit points but is not killed, he can spend one use of his resolve as an immediate action to instantly stabilize and remain conscious. He is staggered, but he does not fall unconscious and begin dying if he takes a standard action.',
        effects: [],
      },
      {
        name: 'Order Ability',
        level: 2,
        description: 'At 2nd level, the samurai gains an ability determined by his chosen order.',
        effects: [],
      },
      {
        name: 'Weapon Expertise',
        level: 3,
        description:
          'At 3rd level, a samurai selects one type of weapon that he can use with weapon expertise: katana, longbow, naginata, or wakizashi. The samurai can draw the selected weapon as a free action as if he had the Quick Draw feat. In addition, whenever he threatens a critical hit with the selected weapon, he gains a +2 bonus on the confirmation roll. Finally, his samurai levels count as fighter levels and stack with any fighter levels he possesses for the purpose of meeting the prerequisites for feats that specifically select weapons, such as Weapon Specialization.',
        effects: [],
      },
      {
        name: 'Challenge',
        level: 4,
        description: 'At 4th level, the samurai may issue a challenge 2 times per day.',
        effects: [],
      },
      {
        name: 'Mounted Archer',
        level: 4,
        description:
          'At 4th level, the samurai becomes skilled at firing ranged weapons while mounted. A samurai only takes a -2 penalty on attack rolls with ranged weapons while his mount takes a double move. This penalty increases to -4 while his mount is running.',
        effects: [],
      },
      {
        name: 'Banner',
        level: 5,
        description:
          "At 5th level, a samurai's banner becomes a symbol of inspiration to his allies and companions. As long as the samurai's banner is clearly visible, all allies within 60 feet receive a +2 morale bonus on saving throws against fear and a +1 morale bonus on attack rolls made as part of a charge. At 10th level, and every five levels thereafter, these bonuses increase by +1. The banner must be at least Small or larger and must be carried or displayed by the samurai or his mount to function.",
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 6,
        description:
          'At 6th level, and every six levels thereafter, a samurai gains a bonus feat in addition to those gained from normal advancement. These bonus feats must be selected from those listed as combat feats. The samurai must meet the prerequisites of these bonus feats.',
        effects: [],
      },
      {
        name: 'Challenge',
        level: 7,
        description: 'At 7th level, the samurai may issue a challenge 3 times per day.',
        effects: [],
      },
      {
        name: 'Order Ability',
        level: 8,
        description:
          'At 8th level, the samurai gains an additional ability determined by his chosen order.',
        effects: [],
      },
      {
        name: 'Greater Resolve',
        level: 9,
        description:
          'At 9th level, a samurai can spend his resolve to negate some of the most serious combat effects. After a critical hit is confirmed against him, the samurai can spend one use of his resolve as an immediate action to treat that critical hit as a normal hit. Effects that only trigger on a critical hit do not trigger when the samurai uses this ability.',
        effects: [],
      },
      {
        name: 'Challenge',
        level: 10,
        description: 'At 10th level, the samurai may issue a challenge 4 times per day.',
        effects: [],
      },
      {
        name: 'Banner',
        level: 10,
        description:
          'At 10th level, the banner bonuses increase by +1 (+3 vs. fear, +2 on charge attacks).',
        effects: [],
      },
      {
        name: 'Honorable Stand',
        level: 11,
        description:
          'At 11th level, a samurai can make an honorable stand, deciding to fight his challenged foe to the bitter end no matter the cost. He can make an honorable stand once per day at 11th level, plus one additional time per day at 16th level. As a swift action, the samurai declares his honorable stand. While in this stance, the samurai is immune to the shaken, frightened, and panicked conditions. He does not fall unconscious while below 0 hit points. Lastly, whenever the samurai makes a saving throw, he can spend one use of his resolve to reroll the saving throw after the first roll is made. He must take the result of the second roll, even if it is worse.',
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 12,
        description: 'The samurai gains an additional combat bonus feat.',
        effects: [],
      },
      {
        name: 'Demanding Challenge',
        level: 12,
        description:
          'At 12th level, whenever a samurai declares a challenge, his target must pay attention to the threat he poses. As long as the target is within the threatened area of the samurai, it takes a -2 penalty to its AC on attacks made by anyone other than the samurai.',
        effects: [],
      },
      {
        name: 'Challenge',
        level: 13,
        description: 'At 13th level, the samurai may issue a challenge 5 times per day.',
        effects: [],
      },
      {
        name: 'Greater Banner',
        level: 14,
        description:
          "At 14th level, a samurai's banner becomes a rallying call to his allies. All allies within 60 feet receive a +2 morale bonus on saving throws against charm and compulsion spells and effects. In addition, while his banner is displayed, the samurai can spend a standard action to wave the banner through the air, granting all allies within 60 feet an additional saving throw against any one spell or effect that is targeting them. This save is made at the original DC. Spells and effects that do not allow saving throws are unaffected by this ability. An ally cannot benefit from this ability more than once per day.",
        effects: [],
      },
      {
        name: 'Banner',
        level: 15,
        description:
          'At 15th level, the banner bonuses increase by +1 (+4 vs. fear, +3 on charge attacks).',
        effects: [],
      },
      {
        name: 'Order Ability',
        level: 15,
        description:
          'At 15th level, the samurai gains an additional ability determined by his chosen order.',
        effects: [],
      },
      {
        name: 'Challenge',
        level: 16,
        description: 'At 16th level, the samurai may issue a challenge 6 times per day.',
        effects: [],
      },
      {
        name: 'Honorable Stand',
        level: 16,
        description: 'At 16th level, the samurai may make an honorable stand 2 times per day.',
        effects: [],
      },
      {
        name: 'True Resolve',
        level: 17,
        description:
          'At 17th level, a samurai can spend uses of his resolve to avoid death. If he has at least 2 uses of his resolve remaining, he can spend all of the daily uses of his resolve that he has to cheat death. Regardless of the source of the attack that would have killed him, he is left alive, at -1 hit points (or lower if he was already below -1), unconscious, and stable.',
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 18,
        description: 'The samurai gains an additional combat bonus feat.',
        effects: [],
      },
      {
        name: 'Challenge',
        level: 19,
        description: 'At 19th level, the samurai may issue a challenge 7 times per day.',
        effects: [],
      },
      {
        name: 'Last Stand',
        level: 20,
        description:
          'At 20th level, a samurai can make a last stand once per day whenever he makes a challenge. While this challenge is in effect, all melee and ranged weapons deal the minimum amount of damage to the samurai, unless the attack scored is a critical hit. In addition, the samurai remains conscious and is not staggered while he is below 0 hit points. While using this ability, the samurai cannot be killed by melee or ranged weapons unless they are wielded by the target of his challenge. He can be killed by spells, environmental effects, and other indirect forms of damage. This ability has no effect on attacks that do not deal hit point damage. This effect lasts until the challenge ends or the samurai attacks a creature other than the target of his challenge.',
        effects: [],
      },
      {
        name: 'Banner',
        level: 20,
        description:
          'At 20th level, the banner bonuses increase by +1 (+5 vs. fear, +4 on charge attacks).',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Ultimate Combat',
  },
];
