// Batch 002 | first: 'Green Faith' | last: 'Lamashtu' | count: 10
import { DeityEntry } from '@/types/deities';

export const greenFaith: DeityEntry = {
  id: 'green-faith',
  name: 'Green Faith',
  title: 'The Old Faith',
  alignment: 'N',
  portfolio: `Air, beast, earth, fire, water`,
  domains: ['air', 'animal', 'earth', 'fire', 'plant'],
  subdomains: ['leshy'],
  favoredWeapon: 'Druidic weapons',
  allowedClericAlignments: ['LN', 'N', 'CN', 'NG', 'NE'],
  source: 'pf1e-ap',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const nethys: DeityEntry = {
  id: 'nethys',
  name: 'Nethys',
  title: 'The All-Seeing Eye',
  alignment: 'N',
  portfolio: `Magic`,
  domains: ['destruction', 'knowledge', 'magic', 'protection', 'rune'],
  subdomains: ['aeon', 'arcane', 'catastrophe', 'defense', 'divine', 'knowledge-education', 'rites', 'solitude', 'thought', 'wards'],
  favoredWeapon: 'Quarterstaff',
  allowedClericAlignments: ['LN', 'N', 'CN', 'NG', 'NE'],
  symbol: `Two-toned mask`,
  sacredAnimal: `Zebra`,
  sacredColors: ['black', 'white'],
  boons: {
    obedienceRequirement: `Inscribe blessings to Nethys, arcane formulae, and lines of prayer on a blank parchment. Don’t inscribe a complete spell—only notations sufficient to potentially spur a reader to study magic in an effort to complete the incantation. At the culmination of your obedience, cast any spell or spell-like ability or activate a spell completion or spell trigger magic item. Gain a +4 sacred or profane bonus on concentration checks. The type of bonus depends on your alignment—if you’re neither good nor evil, you must choose either sacred or profane the first time you perform your obedience, and this choice can’t be changed.`,
    evangelist: [
    { tier: 1, description: `1: Arcane Essence (Sp) mage armor 3/day, mirror image 2/day, or fly 1/day` },
    { tier: 2, description: `2: Arcane Eye (Sp) You can use arcane eye three times per day as a spell-like ability. The arcane eye you summon functions as if you had cast arcane sight and were able to view its information through the arcane eye. This allows you to see magical auras through the arcane eye, and potentially identify the schools of magic involved. You can also potentially determine the spellcasting or spell-like abilities of viewed creatures, as noted in the spell description.` },
    { tier: 3, description: `3: Robes of Nethys (Su) You can manifest an illusory robe that absorbs hostile spells for a number of rounds per day equal to 1 + 1 for every 4 Hit Dice you possess (maximum 6 rounds). These rounds don’t need to be consecutive, and you can activate or deactivate the robe as a free action. The robe functions as a lesser globe of invulnerability except that it only excludes hostile spell effects of 3rd level or lower. Any spell that would force you to attempt a saving throw; cause you to take hit point damage, negative levels, ability drain, or ability damage; or end your life is considered hostile for the purposes of this effect. Unlike a lesser globe of invulnerability, you can move normally while cloaked in the robes.` },
    ],
    exalted: [
    { tier: 1, description: `1: Magical Essences (Sp) magic aura 3/day, misdirection 2/day, or arcane sight 1/day` },
    { tier: 2, description: `2: Staff Channel (Su) You can deliver touch spells with a casting time of one standard action or longer through a quarterstaff. Using this ability doesn’t change the casting time or other qualities of the spell, but you must make a melee attack with your quarterstaff against the target’s AC rather than a touch attack against its touch AC. If you hit the target, you deal quarterstaff damage as well as discharge the spell effect. You can hold the charge as normal when delivering a touch spell through a quarterstaff.` },
    { tier: 3, description: `3: Pure Magic Aura (Su) You radiate an aura of the pure essence of magic. You can use this ability a number of rounds per day equal to 1 + 1 for every 4 Hit Dice you possess (maximum 6 rounds). These rounds don’t need to be consecutive, and you can activate and deactivate your aura as a free action. You and any allies within 20 feet of you increase your caster levels by 1d4. Roll this die when you activate this ability and use the same value for all who gain this benefit. The increase affects spell qualities (such as duration and number of targets) that rely on caster level, as well as caster level checks made to overcome spell resistance. The bonus caster levels don’t grant higher-level spell slots or cause the recipients to learn new spells.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Magical Enhancer (Sp) magic weapon 3/day, arrow eruptionAPG 2/day, or keen edge 1/day` },
    { tier: 2, description: `2: Disrupt Defenses (Su) You have attuned yourself to the essence within magic weapons, and can conjure up that same aura within any weapon you hold. Any weapon attacks you make are considered magic for the purposes of overcoming damage reduction, regardless of the composition or special qualities (or lack thereof) of the weapon you hold.` },
    { tier: 3, description: `3: Nethys's Protection (Su) A complex arcane sigil manifests on your skin. The location of this sigil varies by individual, but always appears in a place easily displayed. (Most commonly, the sigil resembles a third eye.) While the sigil remains uncovered, you gain a deflection bonus to AC equal to 1 + 1 for every 4 Hit Dice you possess (maximum +6). You lose the deflection bonus if the sigil becomes obscured, but it returns once the sigil is made visible once again.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const pharasma: DeityEntry = {
  id: 'pharasma',
  name: 'Pharasma',
  title: 'Lady of Graves',
  alignment: 'N',
  portfolio: `Birth, death, fate, prophecy`,
  domains: ['death', 'healing', 'knowledge', 'repose', 'water'],
  subdomains: ['ancestors', 'flowing', 'ice', 'memory', 'death-psychopomp', 'repose-psychopomp', 'resurrection', 'souls', 'thought'],
  favoredWeapon: 'Dagger',
  allowedClericAlignments: ['LN', 'N', 'CN', 'NG', 'NE'],
  symbol: `Spiraling comet`,
  sacredAnimal: `Whippoorwill`,
  sacredColors: ['blue', 'white'],
  boons: {
    obedienceRequirement: `Collect small bones whenever it is convenient and respectful to do so. When it comes time to perform your obedience, lay out the bones in a spiral. At one end of the spiral lay a slip of parchment on which you have written the name of someone newly born. At the other end of the spiral, lay a slip of parchment on which you have written the name of someone newly deceased. Chant hymns from The Bones Land in a Spiral while proceeding solemnly around the spiral, trailing a black scarf on the ground behind you. Gain a +2 profane or sacred bonus on attack rolls made with daggers. The type of bonus depends on your alignment—if you’re neither good nor evil, you must choose either sacred or profane the first time you perform your obedience, and this choice can’t be changed.`,
    evangelist: [
    { tier: 1, description: `1: Quietude (Sp) forced quietUM 3/day, silence 2/day, or hold person 1/day` },
    { tier: 2, description: `2: Strike the Unrestful (Su) As a free action, you can grant the ghost touch weapon special ability to a weapon that you hold. If that weapon is not magical, it is considered magical while under the effect of this ability. This ability affects only weapons held in your hand; if you drop the weapon or give it away, the effect ends on that weapon. You can affect a weapon in this way a number of rounds each day equal to 1 + 1 for every 4 Hit Dice you possess (maximum 6 rounds). These rounds don’t need to be consecutive.` },
    { tier: 3, description: `3: Ally from the Tomb (Sp) Once per day as a standard action, you can summon a pair of vanth psychopomps (Pathfinder RPG Bestiary 4 221) and gain telepathy with them to a range of 100 feet. The vanths follow your commands perfectly for 1 minute for every Hit Die you possess before vanishing back to their home in the Boneyard. The vanths don’t follow commands that would cause them to aid or permit the existence of undead, and they could attack you if the command is particularly egregious.` },
    ],
    exalted: [
    { tier: 1, description: `1: Preserver (Sp) sanctuary 3/day, gentle repose 2/day, or speak with dead 1/day` },
    { tier: 2, description: `2: Decomposition (Su) You can ensure the final rest of a creature. As a standard action, you can touch a corpse and cause it to dissolve into black ash. A corpse dissolved this way cannot be raised as an undead creature by any means short of a miracle or wish. The black ash left behind can, however, be used as the “corpse” for spells that return the dead to true life—such as raise dead—as long as the entire collection of ash is kept together.` },
    { tier: 3, description: `3: The Veil Is Drawn Aside (Su) You gain the Extra Revelation feat, choosing a revelation from either your chosen mystery or the Bones mystery. If you don’t have the revelation class feature, you instead gain a +4 sacred or profane bonus on saving throws against necromancy spells and death effects.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Undead Slayer (Sp) hide from undead 3/day, defending bone 2/day, or halt undead 1/day` },
    { tier: 2, description: `2: Disrupting Strike (Su) Three times per day, you can channel disruptive energy through your weapon against an undead creature. You must declare your use of this ability before you roll your attack. If your attack hits an undead creature, you deal an extra 1d6 points of damage plus 1d6 points of damage for every 4 Hit Dice you possess (maximum 6d6). If your attack misses or your target was not an undead creature, the use of the ability is wasted.` },
    { tier: 3, description: `3: Tethered to the Material (Ex) You cling ferociously to life—you will go to Pharasma’s realm when she calls you and no sooner. Once per day, you can send yourself into a determined state that lasts for 1 minute. While in this determined state, you can fall to a number of negative hit points equal to 10 + your Constitution score before you die. If you drop to negative hit points while in this determined state, you can continue to act normally, and do not bleed each round due to taking actions. If your determined state ends while you still have a number of negative hit points equal to or greater than your Constitution score, you die instantly. If your determined state ends while you still have negative hit points, but the number of negative hit points is not equal to or greater than your Constitution score, you fall unconscious and gain the dying condition as normal.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const calistria: DeityEntry = {
  id: 'calistria',
  name: 'Calistria',
  title: 'The Savored Sting',
  alignment: 'CN',
  portfolio: `Lust, revenge, trickery`,
  domains: ['chaos', 'charm', 'knowledge', 'luck', 'trickery'],
  subdomains: ['chaos-azata', 'captivation', 'curse', 'deception', 'innuendo', 'lust', 'memory', 'thievery'],
  favoredWeapon: 'Whip',
  allowedClericAlignments: ['CG', 'CN', 'CE', 'N'],
  symbol: `Three daggers`,
  sacredAnimal: `Wasp`,
  sacredColors: ['black', 'yellow'],
  boons: {
    obedienceRequirement: `Engage in sexual activity with another individual in exchange for money, information, or another valuable resource. This must be a willing act on both your parts; you should not endanger yourself or otherwise enter a situation that makes you uncomfortable. Pray aloud to Calistria before and after the act, and encourage your partner to do the same. If no suitable partner is available, wrap yourself in yellow silk and hold your holy symbol against your chest. Meditate on the teachings of Calistria and fantasize about taking vengeance against one who wronged you. Gain a +4 sacred or profane bonus on Charisma checks and Charisma-based skill checks when interacting with an intelligent creature that could be sexually attracted to you. The type of bonus depends on your alignment—if you’re neither good nor evil, you must choose either sacred or profane the first time you perform your obedience. Once made, this choice can’t be changed.`,
    evangelist: [
    { tier: 1, description: `1: Warpsong (Sp) saving finaleAPG 3/day, piercing shriekUM 2/day, or sculpt sound 1/day` },
    { tier: 2, description: `2: Shimmering Sting (Sp) Once per day, you can cast rainbow pattern. Rather than appearing as a multitude of colors, this spell manifests as a swarm of shimmering wasps. The wasps shine as brightly as gold and fly in an intricate, mesmerizing pattern. The saving throw DC for this ability is Charisma-based.` },
    { tier: 3, description: `3: Vengeful Song (Su) You can reflect a spell targeted against you back at its source with a blast of scornful music. Once per day when you have been specifically targeted by a spell, you may attempt a Perform check as an immediate action. If your Perform check equals or exceeds the spell’s save DC, the spell returns immediately to its caster, who must suffer its effects. The caster can attempt a saving throw as normal to negate the returned spell’s effects. If the spell normally allows no saving throw, calculate the Perform DC as if the spell did allow a save, taking into account any feats or special abilities the caster may have that would affect the DC. If the spell had multiple targets (for example, a magic missile with three bolts, one of which was targeted at you), you reflect only the portion of the spell targeting you. This ability has no effect on area spells or any spells whose description has no Target entry.` },
    ],
    exalted: [
    { tier: 1, description: `1: Calistria's Tongue (Sp) charm person 3/day, eagle’s splendor 2/day, or suggestion 1/day` },
    { tier: 2, description: `2: Stunning Touch (Su) When using the dazing touch power granted by the Charm domain, you can cause the creature touched to become stunned for 1 round instead of dazed. If you don’t have access to the Charm domain, you instead gain the ability to use the dazing touch power a number of times per day equal to 3 + your Wisdom modifier, as listed in the ability; however, you only daze your opponents instead of stunning them.` },
    { tier: 3, description: `3: Protective Grace (Ex) You may add your Charisma bonus to your AC while wearing light or no armor. This bonus applies against touch attacks. Any condition that would cause you to lose your Dexterity bonus to AC also causes you to lose your Charisma bonus to AC.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Lucky Strike (Sp) divine favor 1/day, align weapon (chaotic only) 2/day, or keen edge 1/day` },
    { tier: 2, description: `2: Winsome Lash (Su) You can lash out with your melee weapon as if it were a whip, no matter what the weapon’s type truly is. Your melee weapon elongates and grows flexible, gaining an extra 5 feet of reach while still maintaining its ability to strike targets adjacent to you (provided the weapon could normally do so). Using this ability does not provoke attacks of opportunity, and you can apply this ability only to melee weapons. You can use this ability a number of rounds per day equal to 1 + 1 for every 4 Hit Dice you possess (maximum 6 rounds). The rounds don’t need to be consecutive, and activating and deactivating the ability is a free action.` },
    { tier: 3, description: `3: Sting Like a Wasp (Ex) For a number of rounds per day equal to your Charisma bonus, you can ignore attacks of opportunity you would otherwise provoke due to your movement. Using this ability is a free action, and the rounds in which you use it don’t need to be consecutive. You still provoke attacks of opportunity normally for actions other than moving.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const gorum: DeityEntry = {
  id: 'gorum',
  name: 'Gorum',
  title: 'Our Lord in Iron',
  alignment: 'CN',
  portfolio: `Battle, strength, weapons`,
  domains: ['chaos', 'destruction', 'glory', 'strength', 'war'],
  subdomains: ['blood', 'duels', 'ferocity', 'fist', 'legend', 'protean', 'rage', 'resolve', 'tactics'],
  favoredWeapon: 'Greatsword',
  allowedClericAlignments: ['CG', 'CN', 'CE', 'N'],
  symbol: `Sword in mountain`,
  sacredAnimal: `Rhinoceros`,
  sacredColors: ['gray', 'red'],
  boons: {
    obedienceRequirement: `Dress yourself in the heaviest set of metal armor you own. Shout your oath of loyalty to Gorum at the top of your lungs, punctuating each pause for breath by smashing your weapon against a shield or against your armor-clad body. After your oath is done, kneel on one knee with your weapon resting against your shoulder. Recite your victories in battle in a sonorous voice until the time for your obedience is done. If you should be attacked while conducting your obedience, slay the creature who dared test your might. (You may be assisted by allies, but you must strike the killing blow.) Gain a +4 sacred or profane bonus on Strength checks and Strengthbased skill checks. The type of bonus depends on your alignment—if you’re neither good nor evil, you must choose either sacred or profane the first time you perform your obedience, and this choice can’t be changed.`,
    evangelist: [
    { tier: 1, description: `1: Weaponsmith (Sp) crafter’s fortuneAPG 3/day, fox’s cunning 2/day, or greater magic weapon 1/day` },
    { tier: 2, description: `2: War Mount (Ex) If you make a full attack while mounted, your mount also attacks with great enthusiasm. You must attempt a Ride check as normal to fight with a combat-trained mount. If your Ride check succeeds, your mount can attack with a +4 bonus on its attack and damage rolls.` },
    { tier: 3, description: `3: Chaotic Charge (Ex) Three times per day, you can make a chaotic charge attack while mounted. You must declare your use of this ability before you roll your attack. You take an extra –2 penalty to AC in addition to the normal AC penalty for charging, but you deal an extra 2d6 points of damage to creatures of lawful alignment on a successful mounted charge. If you have the cavalier’s charge, mighty charge, or supreme charge class ability, you instead deal an extra 3d6 points of damage to creatures of lawful alignment on a successful wild charge and don’t take the AC penalty.` },
    ],
    exalted: [
    { tier: 1, description: `1: Battler (Sp) magic stone 3/day, spiritual weapon 2/day, or deadly juggernaut 1/day` },
    { tier: 2, description: `2: Mass Strength Surge (Su) When using the strength surge granted power from the Strength domain, you can target allies within 30 feet of you instead of having to touch a single target. You can target a maximum number of allies equal to 1 + 1 for every 4 Hit Dice you possess (maximum 6). If you don’t have access to the Strength domain, you instead gain the ability to use the strength surge granted power a number of times per day equal to 3 + your Wisdom modifier, as listed in the strength surge description. However, you can touch only a single target when using this granted power.` },
    { tier: 3, description: `3: Gorum's Shout (Sp) Once per day, you can use word of chaos as a spell-like ability. In order to use this ability, you must shout a battle cry at top volume, ending your shout in praise to Gorum.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Mighty Warrior (Sp) enlarge person 3/day, bull’s strength 2/day, or beast shape I 1/day` },
    { tier: 2, description: `2: Two-Handed Smash (Ex) If you make a full attack while wielding a two-handed melee weapon, you may make a single unarmed strike in addition to your normal attacks. In essence, after you complete your two-handed weapon attacks, you smash with your elbow, kick out with a foot, or make some other unarmed strike against an opponent. This bonus attack is made at your highest base attack bonus, and provokes an attack of opportunity if you lack the Improved Unarmed Strike feat or a similar ability. If you’re Medium, you deal 1d6 points of damage with this unarmed strike; if you’re Small, you deal 1d4 points of damage. Add half your Strength bonus to the damage dealt. The attack roll for the unarmed strike is subject to the normal penalties for two-weapon fighting unless you have the feats to reduce these penalties.` },
    { tier: 3, description: `3: Devout Rage (Ex) You enter a holy or unholy frenzy whenever you rage, depending on your alignment. You gain a +2 bonus on your attack and damage rolls while raging. If you don’t have the rage class feature, you can fly into a rage once per day as the rage spell, though you don’t need to concentrate. Instead, the rage lasts for a number of rounds equal to your Hit Dice or until you choose to end it, whichever comes first.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const asmodeus: DeityEntry = {
  id: 'asmodeus',
  name: 'Asmodeus',
  title: 'Prince of Darkness',
  alignment: 'LE',
  portfolio: `Contracts, pride, slavery, tyranny`,
  domains: ['evil', 'fire', 'law', 'magic', 'trickery'],
  subdomains: ['arcane', 'ash', 'corruption', 'deception', 'evil-devil', 'law-devil', 'divine', 'greed', 'law-legislation', 'rites', 'smoke', 'sovereignty'],
  favoredWeapon: 'Mace',
  allowedClericAlignments: ['LG', 'LN', 'LE', 'NE'],
  symbol: `Red pentagram`,
  sacredAnimal: `Serpent`,
  sacredColors: ['black', 'red'],
  boons: {
    obedienceRequirement: `Using a ruby-bladed knife, inscribe symmetrical cuts into the flesh of another creature—preferably an unwilling sentient being you own or hold dominion over. The blade may be solid ruby or forged of metal and edged with serrated ruby fragments. Devout priests of Asmodeus take pride in crafting elaborate daggers made entirely of ruby. Drain the victim’s blood into a bowl of bone made from the skull of a sentient humanoid. The amount of blood drained is up to you; you don’t have to drain so much that you make the creature weak or too useless to serve you. Use the bowl of blood to draw a large pentagram on the ground. Kneel within the pentagram and concentrate on the glory you will bring to the Prince of Darkness’s name. Gain a +4 profane bonus on saving throws against fire effects.`,
    evangelist: [
    { tier: 1, description: `1: Pitiless Judgment (Sp) wrathAPG 3/day, flames of the faithfulAPG 2/day, or bestow curse 1/day` },
    { tier: 2, description: `2: Tireless Judgment (Ex) You gain Favored JudgmentUM as a bonus feat, choosing chaotic outsider, good outsider, or a subtype of humanoid. If you don’t have the judgment class feature, you instead gain a +4 profane bonus on Survival checks made to track a creature or individual. This boon doesn’t grant you any ranks in the Survival skill; therefore, if you have no ranks, you still can follow tracks only if the DC of the task is 10 or lower.` },
    { tier: 3, description: `3: Resounding Judgment (Sp) Once per day, you can channel the effects of resounding blowAPG through your weapon, though you don’t need to cast (or even know) the spell. You must declare your use of this ability before you make the attack roll. On a hit, the target is affected as if you had cast resounding blow before your attack, and the surrounding area rings with the sound of vicious, booming laughter. You don’t gain the stunning effect of the spell unless you have access to the judgment or smite ability. If your attack misses, the resounding blow effect is wasted.` },
    ],
    exalted: [
    { tier: 1, description: `1: Darkfire (Sp) burning hands 3/day, darkness 2/day, or deeper darkness 1/day` },
    { tier: 2, description: `2: Embersight (Su) Your eyes take on the appearance of red-hot, glowing embers, granting you the ability to see in darkness much like devils. You gain darkvision to a range of 60 feet. If you chose either darkness or deeper darkness as the spell-like ability granted by your first boon, you can also see perfectly through both darkness and deeper darkness. If you already have darkvision to a range of 60 feet or more, instead increase the range of your darkvision by 10 feet. Your eyes make you extremely distinctive, causing you to take a –4 penalty on Disguise checks.` },
    { tier: 3, description: `3: Hellfire Blast (Sp) You can use delayed blast fireball once per day as a spell-like ability to throw a sphere of soulscouring hellfire. The hellfire is a distinctive mixture of black and crimson flames in which screaming devilish faces can be seen twisting and writhing. Half the damage from this spell is fire, while the other half is unholy. This damage modification applies only to the delayed blast fireball you create through this boon, not to any other spells, effects, or attacks.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Unholy Warrior (Sp) protection from good 3/day, death knell 2/day, or defile armorAPG 1/day` },
    { tier: 2, description: `2: Deceitful Duelist (Ex) Your devotion to the Prince of Darkness has imbued you with some of his trickery. Three times per day, you can attempt a feint as a swift action. You gain a +4 profane bonus on your Bluff check when attempting to feint using this ability. If you successfully attack a creature that has lost its Dexterity bonus to AC as a result of your feint, you deal an additional 1d6 points of damage. This is in addition to any other precision-based damage you deal—such as from a sneak attack—and isn’t multiplied on a critical hit.` },
    { tier: 3, description: `3: Diabolical Resistances (Su) Your dark patron rewards your faith with a few drops of devilish blood in your veins, granting you a measure of the resilience enjoyed by devilkind. Your skin takes on a ruddy cast, and your teeth grow slightly sharper. To a casual observer you may look no different, but anyone who studies you closely notices these traits. You gain fire resistance 10 and a +4 profane bonus on saving throws against poison.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const zonKuthon: DeityEntry = {
  id: 'zon-kuthon',
  name: 'Zon-Kuthon',
  title: 'The Midnight Lord',
  alignment: 'LE',
  portfolio: `Darkness, envy, loss, pain`,
  domains: ['darkness', 'death', 'destruction', 'evil', 'law'],
  subdomains: ['catastrophe', 'evil-devil', 'law-devil', 'evil-kyton', 'law-kyton', 'loss', 'murder', 'night', 'darkness-shadow', 'death-shadow', 'sovereignty', 'undead'],
  favoredWeapon: 'Spiked chain',
  allowedClericAlignments: ['LG', 'LN', 'LE', 'NE'],
  symbol: `Chained skull`,
  sacredAnimal: `Bat`,
  sacredColors: ['dark gray', 'red'],
  boons: {
    obedienceRequirement: `Persuade a creature to allow you to inflict a small amount of pain on it. This can be as subtle as thin needles under the skin or as overt as a lashing with a whip— whatever the subject agrees to. If you can legally procure an individual, such as through legalized slavery, you may use a purchased subject instead. If no suitable individuals can be located, coil a spiked chain into a nest and kneel on it, letting your weight sink your knees into the spikes. Whip your own back while chanting praises to Zon-Kuthon. Gain a +2 sacred bonus on saving throws against spells that deal hit point damage.`,
    evangelist: [
    { tier: 1, description: `1: Unbending Faith (Sp) protection from chaos 3/day, arrow of lawUM 2/day, or pain strikeAPG 1/day` },
    { tier: 2, description: `2: Strike of the Endless (Ex) Three times per day, you can make a strike of the endless against an opponent. You must declare your use of this ability before you roll your attack, and if your attack misses, the strike is wasted. You make an unarmed strike against your target, and if you hit, your target must succeed at a Fortitude save (with a DC equal to 10 + 1/2 your Hit Dice + your Wisdom modifier) or be blinded for 1d4 rounds. This ability doesn’t work against creatures without eyes or who see by means other than vision (such as with blindsight or tremorsense). If you have a ki pool, you may spend 1 point from it to increase the saving throw DC of this ability by 4.` },
    { tier: 3, description: `3: Agonizing Blow (Ex) Once per day, you can make an unarmed strike that deals agonizing pain to a single target. You must declare your use of this ability before you roll your attack, and if your attack misses, the strike is wasted. You make an unarmed strike against your target, and if you hit, your target must succeed at a Will save (with a DC equal to 10+ 1/2 your Hit Dice + your Wisdom modifier) or take 2d6 points of nonlethal damage each round for the next 10 rounds as terrible pain rips through its body. Additionally, during those 10 rounds, your target is nauseated, and you gain a +4 circumstance bonus on Intimidate checks against it. If the target succeeds at its saving throw, it instead takes 1d6 points of nonlethal damage per round for the next 10 rounds, and is sickened for those 10 rounds. If you have a ki pool, you may spend 1 point from it to increase the saving throw DC of this ability by 4.` },
    ],
    exalted: [
    { tier: 1, description: `1: Obscurement (Sp) obscuring mist 3/day, invisibility 2/day, or deeper darkness 1/day` },
    { tier: 2, description: `2: Path of Darkness (Sp) Once per day, you can use shadow walk as a spell-like ability. When you reach your desired endpoint along the shadow path, you materialize directly where you desire instead of being shunted in a random direction as you normally would. Furthermore, if you use this ability on an unwilling creature, the creature takes a –2 penalty on its saving throw.` },
    { tier: 3, description: `3: Fleshrending Ally (Sp) Once per day as a standard action, you can summon an interlocutor kyton (Pathfinder RPG Bestiary 3 174) to serve you. You gain telepathy with the interlocutor to a range of 100 feet. The kyton follows your commands perfectly for 1 minute for every Hit Die you possess before it vanishes back to its home on the Plane of Shadow. The interlocutor refuses to follow any commands that would cause it to act in an overly good or chaotic way. Such commands earn a spiky snarl of disapproval, or could even cause the kyton to attack you if the command is particularly egregious.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Envious Death (Sp) compel hostilityUC 3/day, touch of bloodletting 2/day, or vampiric touch 1/day` },
    { tier: 2, description: `2: Rending Trip (Ex) When you successfully trip an opponent using a spiked chain, your tripped opponent immediately provokes an attack of opportunity from you. In addition, you gain a +2 bonus on any attacks of opportunity you make against opponents you have tripped with a spiked chain within the last round.` },
    { tier: 3, description: `3: Sight of Perfect Night (Ex) All the training you have done in perfect darkness has left you with the uncanny ability to sense your surroundings even in the blackest night. You gain blindsense with a range of 20 feet. If you already have blindsense with a range of 20 feet or greater, instead increase the range of your blindsense by 10 feet.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const norgorber: DeityEntry = {
  id: 'norgorber',
  name: 'Norgorber',
  title: 'The Reaper of Reputation',
  alignment: 'NE',
  portfolio: `Greed, murder, poison, secrets`,
  domains: ['charm', 'death', 'evil', 'knowledge', 'trickery'],
  subdomains: ['artifice-alchemy', 'captivation', 'daemon', 'deception', 'knowledge-espionage', 'trickery-espionage', 'greed', 'memory', 'murder', 'death-shadow', 'thievery', 'thought'],
  favoredWeapon: 'Short sword',
  allowedClericAlignments: ['N', 'NE', 'LE', 'CE'],
  symbol: `One-eyed mask`,
  sacredAnimal: `Spider`,
  sacredColors: ['black', 'gray'],
  boons: {
    obedienceRequirement: `While moving through a crowd of people (at least six individuals), whisper a prayer to Norgorber so quietly that no one hears you. If you suspect a member of the crowd heard you, you must follow that individual and prick her with a poisoned needle or other sharp implement. If you can’t locate a suitable crowd, dig a hole at least 6 inches deep in the ground, whisper your prayers into the hole, and bury the sound. At the end of your obedience, dip a needle in poison and leave it on a road, jutting from a windowsill, or anywhere else a passerby might inadvertently prick herself. Gain a +3 profane bonus on Bluff checks and on Diplomacy checks to gather information.`,
    evangelist: [
    { tier: 1, description: `1: Secrets and Lies (Sp) comprehend languages 3/day, detect thoughts 2/day, or clairaudience/clairvoyance 1/day` },
    { tier: 2, description: `2: Noxious Bomb (Ex) As a full-round action, you can combine a vial of poison with a thrown alchemist bomb. The bomb deals normal direct hit and splash damage, plus the target of the direct hit must save successfully or suffer the effects of the poison. Only contact and injury poisons can be used this way. Creatures hit by the bomb’s splash damage are unaffected by the poison. If you don’t have the bomb class feature, this boon instead functions the same as poison expertise, the second divine boon for sentinels of Norgorber.` },
    { tier: 3, description: `3: Secret Self (Sp) Once per day, you can use greater invisibility on yourself as a spell-like ability. When you use this spell-like ability, you gain certain gifts from Norgorber in addition to the spell effects. You gain a +4 profane bonus on Perception checks while invisible. You gain a +2 profane bonus on attack rolls made with thrown weapons, ranged weapons, and short swords while invisible as well. These bonuses apply only when you’re using this spell-like ability, not when you’re affected by any other spell or effect that grants greater invisibility. In addition, the invisibility effect lasts for 1 minute/level instead of the normal 1 round/level.` },
    ],
    exalted: [
    { tier: 1, description: `1: Poison Tongue (Sp) command 3/day, distressing toneUM 2/day, or suggestion 1/day` },
    { tier: 2, description: `2: Masterful Poisoner (Ex) You know the best techniques for storing and applying poisons. Your knowledge of the proper methods of handling and applying poisons grants them additional potency. The saving throw DC of any poison you use increases by 2. This effect applies only to poisons you administer directly, including applying the poison to a weapon you use. Giving the weapon to another person reduces the poison’s efficacy back to normal, as the weapon’s new owner does not have your skill at storing and using the poisoned item.` },
    { tier: 3, description: `3: Virulent Ally (Sp) Once per day as a standard action, you can summon a piscodaemon (Pathfinder RPG Bestiary 2 72) to serve you. The piscodaemon follows your commands perfectly for 1 minute for every Hit Die you possess before vanishing back to its home in Abaddon. The piscodaemon doesn’t follow commands that would cause it to act in altruistically good ways, and could attack you if a command is particularly egregious.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Poison Tongue (Sp) command 3/day, distressing toneUM 2/day, or suggestion 1/day` },
    { tier: 2, description: `2: Masterful Poisoner (Ex) You know the best techniques for storing and applying poisons. Your knowledge of the proper methods of handling and applying poisons grants them additional potency. The saving throw DC of any poison you use increases by 2. This effect applies only to poisons you administer directly, including applying the poison to a weapon you use. Giving the weapon to another person reduces the poison’s efficacy back to normal, as the weapon’s new owner does not have your skill at storing and using the poisoned item.` },
    { tier: 3, description: `3: Virulent Ally (Sp) Once per day as a standard action, you can summon a piscodaemon (Pathfinder RPG Bestiary 2 72) to serve you. The piscodaemon follows your commands perfectly for 1 minute for every Hit Die you possess before vanishing back to its home in Abaddon. The piscodaemon doesn’t follow commands that would cause it to act in altruistically good ways, and could attack you if a command is particularly egregious.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const urgathoa: DeityEntry = {
  id: 'urgathoa',
  name: 'Urgathoa',
  title: 'The Pallid Princess',
  alignment: 'NE',
  portfolio: `Disease, gluttony, undeath`,
  domains: ['death', 'evil', 'magic', 'strength', 'war'],
  subdomains: ['blood', 'cannibalism', 'corruption', 'daemon', 'divine', 'ferocity', 'murder', 'death-plague', 'evil-plague', 'strength-self-realization', 'death-shadow', 'undead'],
  favoredWeapon: 'Scythe',
  allowedClericAlignments: ['N', 'NE', 'LE', 'CE'],
  symbol: `Skull-decorated fly`,
  sacredAnimal: `Fly`,
  sacredColors: ['red', 'green'],
  boons: {
    obedienceRequirement: `Cover a table (or suitable flat surface) with a black velvet cloth and spread a feast atop it. If you are in the wilderness or another area where fine food is not readily available, load the table with the best quality food you can find in whatever amount you have. Eat to the point of painful fullness, sipping wine between dishes and reciting a prayer to Urgathoa. At the end of the hour, consume a piece of rotten fruit, rancid meat, moldy cheese, or other spoiled bit of food. Trust in Urgathoa to protect you from any sickness or disease that might follow. Treat your caster level as 1 higher when casting necromancy spells.`,
    evangelist: [
    { tier: 1, description: `1: Pestilent Penitent (Sp) curse water 3/day, feast of ashesAPG 2/day, or contagion 1/day` },
    { tier: 2, description: `2: Death Knowledge (Su) Your knowledge of the arcane workings of death increases. Your familiar can teach you one new spell from either the Death or Magic domain spell list. The spell must be of a level you can cast, and once you choose the spell, your selection can’t be changed. If you cast spells from a spellbook, you learn a new spell in the same manner, though it appears magically in your spellbook. If you cast spells spontaneously, you can choose one spell to add to your list of spells known, but you gain no additional spell slots.` },
    { tier: 3, description: `3: Blight of Ruin (Su) Your blight hex gains power from Urgathoa’s favor. If you use your blight hex on a plot of land, you can affect an area whose radius is equal to 20 × your combined witch and evangelist levels. If you blight a creature of the animal or plant type, increase the saving throw DC by 4 and the curse’s effect to 2 points of Constitution damage per day. If the target successfully saves against your blight hex, it instead takes 3d6 points of negative energy damage. If you don’t have access to the blight hex, you instead gain the ability to use mass festerAPG once per day as a spell-like ability.` },
    ],
    exalted: [
    { tier: 1, description: `1: Mistress of Undeath (Sp) inflict light wounds 3/day, desecrate 2/day, or animate dead 1/day` },
    { tier: 2, description: `2: Bolstering Channel (Su) When you channel negative energy to heal undead creatures, you infuse the targets with negative energy made more powerful by Urgathoa’s influence. Any undead creatures healed by your channeled energy increase their movement speed by 10 feet for 1 round for every Hit Die you possess.` },
    { tier: 3, description: `3: Ally from the Grave (Sp) The Pallid Princess’s servants have taken notice of your deeds and answer your call. Once per day as a standard action, you can summon a bhuta (Pathfinder RPG Bestiary 3 41) to serve you. You gain telepathy with the bhuta to a range of 100 feet. The bhuta follows your commands perfectly for 1 minute for every Hit Die you possess before vanishing back to its home. It doesn’t obey commands that would make it perform overly good acts, and such instructions could cause it to attack you if they are particularly egregious.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Glutton for Slaughter (Sp) magic missile 3/day, acid arrow 2/day, or fireball 1/day` },
    { tier: 2, description: `2: Scythe Wielder (Ex) You have trained extensively with Urgathoa’s deadly favored weapon and with many related weapons, and you wield them with the skill of the Pallid Princess’s most favored undead champions. If you selected the heavy blades group for your weapon training class feature, increase your attack and damage bonuses with heavy blades by 1. If you don’t have the weapon training class feature, you instead gain a +1 bonus on attack and damage rolls with the scythe only.` },
    { tier: 3, description: `3: Fearless in the Face of Undeath (Ex) You have spent too much time among the unliving to be taken in by their tricks and abilities, and you are proof against many of their powers. Increase your bravery saving throw bonus by 1. This bonus now applies to saving throws against any spells and effects generated by undead creatures, as well as against fear effects. The bonus also applies to nonmagical effects generated by undead creatures, such as a deathweb’s poison. If you don’t have the bravery class feature, you instead gain a +2 profane bonus on saving throws against spells and effects generated by undead.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lamashtu: DeityEntry = {
  id: 'lamashtu',
  name: 'Lamashtu',
  title: 'Mother of Monsters',
  alignment: 'CE',
  portfolio: `Madness, monsters, nightmares`,
  domains: ['chaos', 'evil', 'madness', 'strength', 'trickery'],
  subdomains: ['cannibalism', 'corruption', 'deception', 'chaos-demon', 'evil-demon', 'ferocity', 'insanity', 'nightmare', 'riot', 'thievery', 'truth'],
  favoredWeapon: 'Falchion',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Three-eyed jackal`,
  sacredAnimal: `Jackal`,
  sacredColors: ['red', 'yellow'],
  boons: {
    obedienceRequirement: `(Deific Obedience) Sacrifice an unwilling living creature in the name of the Mother of Monsters. Draw the process out to inspire the maximum terror and suffering in your victim. The death blow you deal should be savage and destructive—do not grant your sacrifice a clean death. Once the creature is dead, remove one of its bones and sharpen it to a point. Use the bone to cut yourself deeply enough to leave a scar. Leave the sacrificed creature’s mutilated form in the open where scavengers may devour it or travelers may see it and know of Lamashtu’s power. Gain a +1 natural armor bonus to your AC.(Demonic Obedience) Engage in a tryst with the sincere intention of being impregnated or impregnating your partner, or sacrifice a creature that has been alive for no more than a week. Gain a +4 profane bonus on saves against insanity, confusion, and polymorph effects.`,
    evangelist: [
    { tier: 1, description: `1: Savage Summoner (Sp) summon monster I 3/day, summon swarm 2/day, or summon nature’s ally III 1/day` },
    { tier: 2, description: `2: Terrifying Eidolon (Su) Your eidolon gains the frightful presence evolution for free, if you wish. Whenever you gain a new level in the summoner class (or the evangelist prestige class, if your aligned class has the eidolon class feature) and you reassign your evolution points, you can choose to assign or remove the frightful presence evolution. Once your choice has been made, it can’t be altered until the next time you gain an appropriate level. If you don’t have the eidolon class feature, you can instead use summon monster V once per day as a spell-like ability.` },
    { tier: 3, description: `3: Tainted Ally (Sp) Once per day as a standard action, you can summon a baregara (Pathfinder RPG Bestiary 3 34). The baregara follows your commands perfectly for 1 minute for every Hit Die you possess before vanishing back to its home in the Abyss. The baregara doesn’t follow commands that would cause it to act in lawful, good, or otherwise beneficial ways. Such commands not only earn a snarl of disgust from the creature, but could cause the baregara to attack you if the command is particularly egregious.` },
    ],
    exalted: [
    { tier: 1, description: `1: Howling Terror (Sp) cause fear 3/day, mad hallucinationUM 2/day, or fear 1/day` },
    { tier: 2, description: `2: Maddening Thoughts (Su) Your mind constantly swirls with dark whispers and disturbing thoughts. You gain a +4 profane bonus on saving throws against mind-affecting (compulsion) spells and effects and against divination spells and effects that attempt to read your thoughts. Anyone who targets you with such a spell or effect must succeed at a Will saving throw (with a DC equal to 10 + your Wisdom modifier + 1/2 your Hit Dice) or take 1d4 points of Wisdom damage.` },
    { tier: 3, description: `3: Monstrous Transformation (Sp) Once per day, you can use baleful polymorph, except you change the target into a horribly mutated form of the chosen animal. The target takes a –4 penalty on its saving throw to resist your spell (if the new form would prove fatal for the creature, it still gains a +4 bonus on its saving throw, effectively negating this penalty). In addition to the other effects of the spell, the subject is in constant pain from its twisted and disfigured form, and takes 1d6 points of nonlethal damage each round. This constant agony imposes a –2 penalty on all of the target’s ability checks, skill checks, saving throws, attack rolls, and damage rolls.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Ferocious Battler (Sp) stone fistAPG 3/day, bear’s endurance 2/day, or greater magic fang 1/day` },
    { tier: 2, description: `2: Bestial Jaws (Ex) Your jaw distends slightly and you grow prominent canines. You gain a bite attack that deals 1d4 points of damage if you’re Medium or 1d3 points of damage if you’re Small, plus half your Strength bonus. When part of a full attack, the bite attack is made at your full base attack bonus – 5. You can also make a bite attack as part of the action to maintain or break free from a grapple. This attack is resolved before the grapple check is attempted. If the bite attack hits, you gain a +2 bonus on your grapple check and any other grapple check against the same creature this round.` },
    { tier: 3, description: `3: Scarred Form (Su) An armorlike epidermis of thick scars covers you. You take a –2 penalty on Charisma checks and Charisma-based skill checks. You gain damage reduction 5/—. If you already had damage reduction with no method of bypass (such as from the barbarian’s damage reduction class feature), you instead increase that damage reduction by 5.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const batch_002: DeityEntry[] = [greenFaith, nethys, pharasma, calistria, gorum, asmodeus, zonKuthon, norgorber, urgathoa, lamashtu];