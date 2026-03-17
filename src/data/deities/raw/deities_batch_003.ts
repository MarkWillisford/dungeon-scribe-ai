// Batch 003 | first: 'Rovagug' | last: 'Milani' | count: 10
import { DeityEntry } from '@/types/deities';

export const rovagug: DeityEntry = {
  id: 'rovagug',
  name: 'Rovagug',
  title: 'The Rough Beast',
  alignment: 'CE',
  portfolio: `Destruction, disaster, wrath`,
  domains: ['chaos', 'destruction', 'evil', 'war', 'weather'],
  subdomains: ['blood', 'cannibalism', 'catastrophe', 'corruption', 'chaos-demodand', 'evil-demodand', 'chaos-demon', 'evil-demon', 'hatred', 'lightning', 'protean', 'rage', 'storms'],
  favoredWeapon: 'Greataxe',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Fanged spider`,
  sacredAnimal: `Scorpion`,
  sacredColors: ['brown', 'red'],
  boons: {
    obedienceRequirement: `Smash an assortment of items worth at least 10 gp, preferably something fragile, aesthetically beautiful, or with significance to a good-aligned deity (particularly Sarenrae). The more devout servants of Rovagug seek out and hoard particularly expensive, artistic, or rare items, such as fine bottles of wine or delicate curios, to smash during their obedience. Roll in the shards of the destroyed items, howling and shouting praises and curses invoking the Rough Beast, until the shards draw blood and your lungs ache. Gain a +4 bonus on attack and damage rolls against objects.`,
    evangelist: [
    { tier: 1, description: `1: Agent of the Beast (Sp) protection from good 3/day, align weapon (evil only) 2/day, or magic circle against good 1/day` },
    { tier: 2, description: `2: Destructive Spell (Su) By calling on the rage of the Rough Beast, you gain the ability to deal terrific damage with your spells. You can use this ability when casting a spell that deals hit point damage and has a casting time of 1 standard action or less. You can choose to cast the spell as a full-round action to gain a +4 bonus to its save DC. In addition, you treat all 1s rolled on your damage dice for the spell as 2s instead.` },
    { tier: 3, description: `3: The Destroyer's Gifts (Su) You feel the touch of an alien presence at the corner of your mind, as if something hungry and hateful had taken root and now holds a measure of dominion over your thoughts. You gain an extra spell slot of the highest spell level you can cast. If you prepare spells, you can prepare one spell in this spell slot every day from the Chaos or Destruction domain spell lists. You may choose any spell from the lists even if you are an arcane spellcaster, and you can change this spell selection every time you prepare spells. If you are a spontaneous spellcaster, you can cast one spell from either of the domain spell lists as if it was on your known spells list. You can cast this spell only once per day, though you can choose a different spell to cast each time you regain your spells for the day.` },
    ],
    exalted: [
    { tier: 1, description: `1: Destructive Force (Sp) breakAPG 3/day, bull’s strength 2/day, or shatter 1/day` },
    { tier: 2, description: `2: Bestow Destructive Smite (Su) You can bestow the Destruction domain’s destructive smite granted power upon an ally. As a standard action, you can spend one use of your destructive smite to grant its power to any ally within 30 feet, channeling into him the erratic force of Rovagug’s rage. Your ally must make the destructive smite within 1 round of being granted the power or its use is wasted. Your ally uses your level to calculate the power of the destructive smite. If you don’t have access to the Destruction domain, you instead gain access to the destructive smite granted power but only for your personal use, as normal.` },
    { tier: 3, description: `3: Apocalyptic Ally (Sp) Once per day as a standard action, you can tear a violent breach between your location and the Outer Rifts—the deepest, foulest pits of the Abyss—and summon forth a pair of nyogoth qlippoth (Pathfinder RPG Bestiary 2 224). You gain telepathy with the creatures to a range of 100 feet, and they follow your commands perfectly for 1 minute for every Hit Die you possess before vanishing back into the Abyss. The qlippoth don’t follow commands that would cause them to act in overtly good or lawful ways. Such commands not only earn terrifying roars from the creatures, but could cause the nyogoths to attack you if the command is particularly egregious.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Inexorable Death (Sp) doom 3/day, death knell 2/day, or inflict serious wounds 1/day` },
    { tier: 2, description: `2: Wicked Claws (Ex) Your fingernails grow into thick, jagged talons, unevenly matched and vaguely resembling the spurs of a giant insect or the fangs of some unspeakable beast. You gain a pair of claw attacks. These are primary natural attacks that deal 1d8 points of slashing damage if you’re Medium or 1d6 points of damage if you’re Small.` },
    { tier: 3, description: `3: Disintegrating Blow (Sp) Once per day, you can channel a glimpse of Rovagug’s hatred through your weapon, recreating the effects of disintegrate. You must declare your use of this ability before you roll your attack. On a hit, the target is affected as if targeted by disintegrate cast by a wizard of a level equal to your Hit Dice (maximum CL 20th). If your attack misses, the disintegrate effect is wasted.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const apsu: DeityEntry = {
  id: 'apsu',
  name: 'Apsu',
  title: 'The Waybringer',
  alignment: 'LG',
  portfolio: `Good dragons, leadership, peace`,
  domains: ['artifice', 'good', 'law', 'scalykind', 'travel'],
  subdomains: ['good-archon', 'law-archon', 'construct', 'dragon', 'exploration', 'toil', 'trade'],
  favoredWeapon: 'Bite or quarterstaff',
  allowedClericAlignments: ['LG', 'LN', 'NG'],
  symbol: `Silver dragon above pool`,
  sacredColors: ['metallic colors'],
  boons: {
    obedienceRequirement: `Pick a direction, and walk that way for the next 30 minutes. During this time, catalog all of the areas you pass and consider any tactical advantages that can be found in the terrain. After this, retrace your steps, but instead of plotting tactics, appreciate the beauty and scenery that you find along your way, and speak quiet prayers to or praises of the Waybringer, keeping in mind that none of what you’ve seen would exist were it not for Apsu. You then gain a +2 sacred bonus on Perception checks while you are traveling in this area, and a +4 sacred bonus on checks to notice enemies for the purpose of acting in a surprise round while you are traveling or camping there.`,
    evangelist: [
    { tier: 1, description: `1: Maker's Ways (Sp) floating disk 3/day, align weapon (law only) 2/day, or tiny hut 1/day` },
    { tier: 2, description: `2: Touch of the Artificer (Su) You have discovered divinely inspired lines of primordial energy—gifts from Apsu, you believe—that can imbue weapons with bursts of magic. Up to three times per day, as a standard action, you can touch a single weapon and grant it the dancing property for the next 3 rounds. A single weapon cannot be targeted by this effect more than once per day.` },
    { tier: 3, description: `3: Crafter's Pride You have learned the intrinsic nature of what gives life to objects, and can pour your soul into the construction of a given creation to infuse it with a semblance of blessed life. Once per week, you can cast animate objects on a single object that you’ve created. The effect does not have a duration; the animated object remains indefinitely as a companion, following your commands as best it can. You cannot animate a new companion while one is already serving you, though as a full-round action you can dismiss a companion, reducing it to lifelessness. If your companion is destroyed, you cannot use this ability again for another week. You cannot affect an object animated in this way with a permanency spell.` },
    ],
    exalted: [
    { tier: 1, description: `1: Waybringer's Ingenuity (Sp) blurred movementACG 3/day, levitate 2/day, or haste 1/day` },
    { tier: 2, description: `2: Eyes of the Pursued (Su) You adhere to Apsu’s dictate of living to fight another day, and you’ve mastered the art of monitoring places you’ve left. Anytime you use a teleportation effect to move, you can place an invisible magic sensor in the area from which you just departed. As long as you are on the same plane as the sensor, you can see and hear everything occurring within 30 feet of the sensor as a swift action. The sensor lasts for a number of rounds equal to your Hit Dice. You can have a maximum number of active sensors equal to your number of Hit Dice.` },
    { tier: 3, description: `3: Homeward Bound (Su) As a follower of Apsu, you deeply understand the importance of having a safe place to which you can retreat; you’ve come to count on several safe homes, creating ties to them when necessary. Once per month, you can designate a location to be your refuge. Once per week as a full-round action that provokes attacks of opportunity, you can teleport yourself and any willing creatures within 30 feet of you to the safe home of your choice, regardless of distance, as long as it is on the same plane. You can have a maximum number of refuges equal to half your Hit Dice. As long as none of your allies are in a refuge, you can remove its designation as a safe home as a swift action, but if you do so, you can never again designate it as a safe home.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Exiled's Wrath (Sp) color spray 3/day, scorching ray 2/day, or draconic reservoirAPG 1/day` },
    { tier: 2, description: `2: Apsu's Shroud (Su) Apsu smiles upon your martial prowess and protects you with a halo of divine energy from his distant realm. You gain a +1 sacred bonus to your Armor Class, which increases to +2 against attacks from evil-aligned creatures. This bonus increases to +3 if the attacker is an evil-aligned true dragon. If an evilaligned true dragon confirms a critical hit against you, the creature must succeed at a Fortitude save (DC = 10 + 1/2 your Hit Dice + your Charisma modifier) or be blinded for 1 round.` },
    { tier: 3, description: `3: Chromatic Scourge (Su) You channel the righteous and immortal fury of Apsu into your weapon, making it ready for the endless fight against Dahak and his wicked allies. Once per day as a swift action, you can imbue your weapon with the hidden wrath of Apsu. If your target is evil, you gain a +20 profane bonus on your next single attack. If your opponent is an evil-aligned creature of the dragon type, treat your next single attack roll as both an automatic hit and a critical threat. You gain a +4 profane bonus to confirm the critical hit.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const easivra: DeityEntry = {
  id: 'easivra',
  name: 'Easivra',
  title: 'The Dawn Eagle',
  alignment: 'LG',
  portfolio: `Avians, gold, the sun`,
  domains: ['animal', 'good', 'law', 'sun'],
  subdomains: ['good-archon', 'law-archon', 'day', 'feather', 'light'],
  favoredWeapon: 'Morningstar',
  allowedClericAlignments: ['LG', 'LN', 'NG'],
  symbol: `Eagle head in profile`,
  sacredAnimal: `Golden eagle`,
  sacredColors: ['blue', 'gold'],
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const gruhastha: DeityEntry = {
  id: 'gruhastha',
  name: 'Gruhastha',
  title: 'The Keeper',
  alignment: 'LG',
  portfolio: `The Vudrani holy book`,
  domains: ['animals', 'good', 'knowledge', 'law', 'travel'],
  subdomains: ['knowledge-education', 'exploration', 'friendship', 'memory', 'purity', 'thought'],
  favoredWeapon: 'Shortbow',
  allowedClericAlignments: ['LG', 'LN', 'NG'],
  symbol: `A mandala with four open books set as the gates of the compass points`,
  boons: {
    obedienceRequirement: `Spend at least an hour teaching someone to read, analyze allegories, or otherwise improve her self-education skills. You can also use this time to study under a more learned teacher. If neither a student nor a teacher is available, spend the hour working on a literacy primer, book of fables, or other educational text to be donated to a school or library. After devoting an hour to this work, you gain a +2 sacred bonus on Diplomacy and Sense Motive checks for the next 24 hours.`,
    evangelist: [
    { tier: 1, description: `1: Transcendent Mind (Sp) burst of insight 3/day, calm emotions 2/day, or communal share language 1/day` },
    { tier: 2, description: `2: Clarity’s Blessing (Su) The clarity of your teaching can shelter others from certain mental assaults. Once per day as a swift action, you can invoke Gruhastha’s blessing to grant companions within 60 feet a +4 sacred bonus on saves against confusion and fear effects. You can protect a number of people equal to your Hit Die, and the protection lasts for an hour.` },
    { tier: 3, description: `3: Keeper’s Mercy (Su) Though you are willing to use violence in the face of implacable evils, it is always a last resort and used as precisely and minimally as possible. Even in the midst of combat, you do your best to reduce true harm. For a number of rounds per day equal to your Hit Dice, you can cause your own attacks with unarmed strikes, weapons, and natural weapons or those of another creature within 10 feet of you to deal nonlethal damage. Damage dealt to creatures or objects that are not subject to nonlethal damage is not converted and remains lethal damage. An unwilling target can negate this effect with a successful Will save (DC = 10 + half your Hit Dice + your Charisma modifier).` },
    ],
    exalted: [
    { tier: 1, description: `1: Push Toward Peace (Sp) know the enemy 3/day, enthrall 2/day, or suggestion 1/day` },
    { tier: 2, description: `2: Restore Lost Learning (Su) The Keeper is an embodiment of a sacred text, and the written word is of tremendous importance to you. You have a sacred connection to books and other written records that allows you to commune with them, even when they have been irreparably damaged. Given a fragment of a written or etched text, you can divine the missing portion of the text at the rate of 100 words per day. Magical or cursed texts can resist this effect or return incomplete results at the GM’s discretion.` },
    { tier: 3, description: `3: Call the Keeper (Sp) You both learn from and teach the finest of Gruhastha’s scholars. Once per day as a standard action, you can summon a Keeper of Lore (advanced manu manasaputra) to consult on a topic of your choice for 1 hour. A Keeper of Lore has a +25 bonus on Knowledge checks. A Keeper of Lore will not serve in combat except under the most desperate circumstances, and regular use of the manasaputra in combat is considered an abuse of Gruhastha’s gift.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Speaker of Fable (Sp) speak with animal 3/day, animal messenger 2/day, or greater animal aspect 1/day` },
    { tier: 2, description: `2: Trace Corruption (Su) You are a champion of the truth, and have been granted the divine insight to know when other creatures are being forced to act counter to their own natures. You can detect charms, compulsions, and possession effects, as per detect charm, by concentrating for 1 round on a single creature within 100 feet. If you identify such an effect, you can concentrate for another round to obtain a glimpse of the effect’s creator in your mind’s eye. Such images are foggy and fragmentary, sufficient to determine the creature’s type and a vague description, but not enough to identify individuals unless they bear unusual distinguishing marks. You can use this ability a number of times per day equal to half your Hit Dice.` },
    { tier: 3, description: `3: Sacred Tutelage (Su) Though you are willing to confront dangers directly, you also educate fellow companions and like-minded faiths in the best practices for defeating their shared foes; as it is written in the Azvadeva Pujila, each warrior can aim only a single spear, but a teacher can aim ten thousand. As a swift action, you can provide divine guidance to your allies in combat. Allies able to see you gain a +2 sacred bonus on attack rolls. You can provide your guidance for a number of rounds equal to your Hit Dice per day (maximum 20 rounds). The rounds in which you provide guidance don’t need to be consecutive, and you can end this ability as a free action.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const cihuaCouatl: DeityEntry = {
  id: 'cihua-couatl',
  name: 'Cihua Couatl',
  title: 'The War Children',
  alignment: 'NG',
  portfolio: `Childbirth, protection, and warfare`,
  domains: ['good', 'healing', 'protection', 'strength', 'war'],
  subdomains: ['agathion', 'defense', 'ferocity', 'resolve', 'restoration', 'tactics'],
  favoredWeapon: 'Shortspear',
  allowedClericAlignments: ['LG', 'NG', 'CG', 'N'],
  symbol: `two couatls consuming each other’s tails with their wings overlapping in the center`,
  sacredAnimal: `hawk`,
  source: 'pf1e-ap',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const kazutal: DeityEntry = {
  id: 'kazutal',
  name: 'Kazutal',
  title: 'Mother Jaguar',
  alignment: 'NG',
  portfolio: `Community, liberty, and safety`,
  domains: ['community', 'good', 'liberation', 'protection', 'strength'],
  subdomains: [],
  favoredWeapon: 'Machete',
  allowedClericAlignments: ['LG', 'NG', 'CG', 'N'],
  symbol: `A jaguar’s head on a circular green background`,
  boons: {
    obedienceRequirement: `Gather with others for an hour and discuss a topic that threatens the bonds of your community, family, or friendship. If you and your allies are fortunate enough that no such malady is currently a challenge, read and recite passages from She of Grace and Might to remind yourselves of your goals and aspirations for the day. If you are traveling alone, find others to speak to about the beneficial strengths of community and freedom to develop that community into a more positive place. Guide any arguments during this discussion toward understanding and acceptance, even if afterward not all parties agree on the final resolution. Gain a +2 sacred bonus on Diplomacy and Intimidate checks.`,
    evangelist: [
    { tier: 1, description: `1: Strong Ally (Sp) liberating command 3/day, mirror image 2/day, or dispel magic 1/day` },
    { tier: 2, description: `2: Liberating Surge (Su) When your allies are threatened, you have the tools to alleviate them of their imposed limitations. Once per day as a standard action, you can cast either break enchantment or freedom of movement as a spell-like ability targeting one of your allies within 300 feet whom you can perceive. The spell has a caster level equal to your character level.` },
    { tier: 3, description: `3: Shared Expertise (Su) You know that your bond to your allies is your greatest benefit. Each time you complete your obedience, you can select a bonus teamwork feat. You must meet the prerequisites for this feat. All of your allies are treated as if they possessed the same teamwork feat as you for the purpose of determining whether you receive the benefit of the teamwork feat. As a free action, you can grant this feat to all allies within 30 feet who can see and hear you. Allies do not need to meet the prerequisites of the bonus teamwork feat. You can grant this feat for a number of rounds per day equal to your Hit Dice. These rounds need not be consecutive. You can select a different teamwork feat for this boon each time you complete your obedience.` },
    ],
    exalted: [
    { tier: 1, description: `1: Preparation (Sp) anticipate peril 3/day, anticipate thoughts 2/day, or magic circle against evil 1/day` },
    { tier: 2, description: `2: Defending Shield (Su) Your dedication to protecting your community manifests as a way to shield yourself and others. Three times per day as a standard action, you can summon a mystical glowing shield that sheds light as a torch. This shield manifests in a square within 30 feet of you, and it can share your space or that of any of your allies. If the defending shield is in a creature’s square, it grants that creature a sacred bonus to its Armor Class equal to your Wisdom modifier. You can move the shield to a different square within 30 feet of you as a swift action and can dismiss the shield as a free action. The defending shield lasts for 10 rounds each time it is summoned.` },
    { tier: 3, description: `3: Bountiful Refuge (Su) You know the benefits of a communal meal shared with friends and family. Once per day, you can create a safe extradimensional space that you and your allies can occupy for a number of hours equal to your Hit Dice. The space holds as many as eight creatures (of any size) that you designate, all of which must be within 30 feet of you when you use this ability. Creatures in the extradimensional space are hidden beyond the reach of spells (including divinations) unless those spells work across planes. Creatures within the space can see the environs outside of the space, but those outside cannot see inside. Within the refuge is a bountiful table set with as many chairs as the number of creatures invited in, and the table holds a delicious feast that acts as the heroes’ feast spell with a caster level equal to your Hit Dice.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Dedicated Might (Sp) true strike 3/day, bull’s strength 2/day, or heroism 1/day` },
    { tier: 2, description: `2: Caring Defender (Su) Protection of self and community is paramount to you. You gain a +2 sacred bonus to your Armor Class. When using the aid another action to increase an ally’s Armor Class, this sacred bonus increases to +4 and the ally gains an additional +2 bonus to her Armor Class against attacks.` },
    { tier: 3, description: `3: Allied Actions (Su) You understand that any actions undertaken for good are multiplied by those within your community. Once per day as a standard action, you can cast battlemind link as a spell-like ability. In addition, once per day you can cast deflection as a spell-like ability. The caster level of these spells is equal to your character level.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const kurgess: DeityEntry = {
  id: 'kurgess',
  name: 'Kurgess',
  title: 'The Strong Man',
  alignment: 'NG',
  portfolio: `Bravery, competition, sport`,
  domains: ['community', 'good', 'luck', 'strength', 'travel'],
  subdomains: ['agathion', 'competition', 'family', 'fate', 'home', 'resolve', 'strength-self-realization', 'trade'],
  favoredWeapon: 'Javelin',
  allowedClericAlignments: ['LG', 'NG', 'CG', 'N'],
  symbol: `Flexing arm with chain`,
  sacredAnimal: `Horse`,
  sacredColors: ['gold', 'white'],
  boons: {
    obedienceRequirement: `Find the nearest boulder, log, or other unattended object that you can reliably lift over your head, and hold it up high for the duration of the obedience while meditating on the ennobling nature of sports and tests of physical might. If you are interrupted at any time by any creature or person, you must challenge your interrupter to a contest of strength, speed, or stamina, with the boulder or another object of your obedience used as the main focus of the competition. Regardless of who wins, you gain a +2 sacred bonus on Acrobatics and Climb checks.`,
    evangelist: [
    { tier: 1, description: `1: Blessed Runner (Sp) longstrider 3/day, cat’s grace 2/day, or haste 1/day` },
    { tier: 2, description: `2: Strong One (Su) You are wise enough to know that strength is a useful attribute for more than just competition and combat, and Kurgess smiles upon you for this wisdom, granting you greater strength for your everyday activities. You gain a +2 sacred bonus on all Strength-based skill checks.` },
    { tier: 3, description: `3: Farmer’s Brawn (Su) Great strength finds those who need it most, granting even the weakest individuals nearsupernatural abilities in moments of panic or to rescue loved ones, and Kurgess’s evangelists are especially prone to such instantaneous bursts of brawn. Treat your carrying capacity as though your Strength ability score were 3 points higher than it actually is. Once per day, as long as you are wearing light, medium, or no armor, you can lift up to two unconscious or dead Medium or smaller creatures and their equipment onto your shoulders and still move up to your base speed, ignoring the added weight of your fallen comrades. You cannot both attack and move in the same round while carrying one or more creatures in this way. You can carry your companions in this way for a number of rounds equal to your Hit Dice; afterward, they encumber you as normal.` },
    ],
    exalted: [
    { tier: 1, description: `1: Holy Strength (Sp) enlarge person 3/day, bull’s strength 2/day, or rage 1/day` },
    { tier: 2, description: `2: Coordinated Escape (Su) You and your allies know it is better to flee and live to continue the fight another day than to die honorable deaths that accomplish nothing. Three times per day as a standard action, you can shout an inspirational command that affects you and any allies within 60 feet for a number of rounds equal to your Hit Dice. During this time, affected characters can use the withdraw action to move up to triple their base speed (instead of up to double their base speed).` },
    { tier: 3, description: `3: Break the Anvil (Su) You don’t believe it is enough to shame your enemies by relieving them of their weapons—if possible, you must shatter those weapons so they can never again stand against you. Once per day, you can perform a disarm or sunder combat maneuver with a +4 competence bonus against an adjacent creature and a weapon it holds. If you succeed, the creature’s weapon is simultaneously damaged and disarmed, as though you had succeeded at both combat maneuvers simultaneously. If you exceed the target’s Combat Maneuver Defense by 10 or more, the target drops the items it is carrying in both hands, but you only sunder the weapon you initially targeted. If you don’t have either the Improved Disarm or Improved Sunder feat or a similar ability, this attempt provokes attacks of opportunity as normal; however, if you have one of the feats or a similar ability, this attempt does not provoke attacks of opportunity.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Master of Games (Sp) true strike 3/day, bear’s endurance 2/day, or heroism 1/day` },
    { tier: 2, description: `2: Reveal Frauds (Sp) Like Kurgess, your keen sense of honor will not allow you to brook cheats among your ranks, and the insight bestowed by your devotion to your ideals has taught you to spot a fraud based on a hunch. You can use discern lies, as per the spell, for a number of rounds per day equal to your Hit Dice. These rounds need not be consecutive. Activating this ability is an immediate action.` },
    { tier: 3, description: `3: Unchained Savior (Su) You are nothing without your teammates, and are willing to sacrifice your own safety to keep them alive. Once per day as an immediate action, if an ally within 60 feet of you would normally take enough damage to fall unconscious or die, you can move to an adjacent space and intercept the killing blow, taking the damage in your ally’s place. If the attack would have inflicted any effects other than hit point damage, those effects are negated. If the damage would bring you to negative hit points, you are brought to 0 hit points instead, and the remaining damage is negated. Any attacks of opportunity you provoke by moving in this way are resolved after you take the damage from the intercepted blow; you take any damage from those attacks as normal.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const mazludeh: DeityEntry = {
  id: 'mazludeh',
  name: 'Mazludeh',
  title: 'Mother of Hearth and Wall',
  alignment: 'NG',
  portfolio: `Balance, community, negotiation, and twilight`,
  domains: ['artifice', 'community', 'good', 'knowledge'],
  subdomains: ['agathion', 'good-archon', 'good-azata', 'cooperation', 'family', 'memory'],
  favoredWeapon: 'Heavy shield',
  allowedClericAlignments: ['LG', 'NG', 'CG', 'N'],
  symbol: `Seven eggs encircled by a snake eating its own tail`,
  sacredAnimal: `Anaconda`,
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const omrataji: DeityEntry = {
  id: 'omrataji',
  name: 'Omrataji',
  title: 'The Spirit in Silver',
  alignment: 'NG',
  portfolio: `Silver, silverwork, and silver mining`,
  domains: ['artifice', 'earth', 'good', 'nobility'],
  subdomains: ['friendship', 'leadership', 'metal', 'toil'],
  favoredWeapon: 'Spiked chain',
  allowedClericAlignments: ['LG', 'NG', 'CG', 'N'],
  symbol: `A shimmering silver star`,
  sacredAnimal: `Mole`,
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const milaniBatch: DeityEntry = {
  id: 'milani',
  name: 'Milani',
  title: 'The Everbloom',
  alignment: 'CG',
  portfolio: `Devotion, hope, uprisings`,
  domains: ['chaos', 'good', 'healing', 'liberation', 'protection'],
  subdomains: ['chaos-azata', 'good-azata', 'defense', 'freedom', 'purity', 'restoration', 'revolution', 'riot'],
  favoredWeapon: 'Morningstar',
  allowedClericAlignments: ['NG', 'CG', 'CN'],
  symbol: `Rose on bloody street`,
  sacredAnimal: `Mouse`,
  sacredColors: ['red', 'white'],
  boons: {
    obedienceRequirement: `Spend time meditating among roses you have planted yourself, so you can inhale their sacred scent while offering prayers to Milani. If no such roses are available, you can instead brew tea from herbs and rose petals and share the tea with close friends or neighbors. Preferred topics for conversation during this teatime include hopes for the future and preparations for times of need, but the act of sharing is itself enough. During times of war or conflict, though, you must instead spend time sparring, preferably with friends or neighbors whom you plan to fight alongside during the conflicts to come. If you are imprisoned and unable to spar, you can instead sing any song of hope or resistance in unison with one or more fellow prisoners. You gain a +2 sacred bonus on all saving throws against charm and compulsion effects, and a +2 sacred bonus on all rolls made to dispel or remove such effects from others.`,
    evangelist: [
    { tier: 1, description: `1: Voice of the Everbloom (Sp) command 3/day, enthrall 2/day, or suggestion 1/day` },
    { tier: 2, description: `2: Inspiring Presence (Su) Your mere presence bolsters your companions to fight harder in the face of even the most overwhelming odds and bolsters their hearts against growing weary of battle. Once per day as a standard action, you can provide all allies within 30 feet of you with a +1 sacred bonus on attack rolls, saving throws, and weapon damage rolls for a number of rounds equal to your Hit Dice.` },
    { tier: 3, description: `3: Invoke Uprising (Sp) Even shackles of the mind do not escape your notice, and you can use an inspiring word from the teachings of Milani to help others find the strength to break those shackles. You are automatically aware of any creature within 10 feet of you that is currently under the effects of a charm, compulsion, or possession effect. Three times per day as a swift action, you can inspire such a creature to throw off the influence, granting that creature a new saving throw to immediately end the effect. If the effect does not normally allow a saving throw, calculate the save DC as normal if it is a spell; if it’s not a spell, the DC is equal to 10 + 1/2 the source’s Hit Dice + the source’s Charisma modifier. The creature gains a sacred bonus on this saving throw equal to your Charisma bonus (minimum +1). This bonus is doubled if you include a physical touch as part of your invocation to rise up against the effect. In either case, this is a language-dependent effect.` },
    ],
    exalted: [
    { tier: 1, description: `1: Sacred Partisan (Sp) divine favor 3/day, spiritual weapon 2/day, or magic vestment 1/day` },
    { tier: 2, description: `2: Alleyport (Sp) As the patron deity of urban uprisings, the Everbloom grants you the power to appear wherever in a settlement, dungeon, or other tight space you are most needed, or to escape to fight another day. Once per day as a swift action, you can teleport as per dimension door, but only when you are in an area no wider than your space, and you can arrive in only an area of similar width.` },
    { tier: 3, description: `3: Wall of Roses (Sp) You can call upon Milani’s symbolic roses to defend the innocent and the righteous while stymieing oppressors and their minions. Once per day, you can cast wall of thorns. The wall consists of a dense tangle of roses through which you and other worshipers of Milani can pass with ease. The wall of roses heals from damage dealt to it at a rate of 5 hit points per round; it is immune to fire damage; and all piercing damage it deals bypasses damage reduction as if it were a good, magic, and silver weapon. Evil and lawful creatures damaged by a wall of roses automatically become sickened for the next minute (this is a poison effect).` },
    ],
    sentinel: [
    { tier: 1, description: `1: Neighborhood Guardian (Sp) protection from evil 3/day, shield other 2/day, or magic circle against evil 1/day` },
    { tier: 2, description: `2: Stoic Guardian (Ex) Inspired by Milani’s valor and steadfastness, you refuse to let magic corrupt your thoughts and deny fear any hold on your actions. You are immune to fear and charm effects, and gain a +4 sacred bonus on all saving throws against compulsion effects.` },
    { tier: 3, description: `3: Martyrdom (Su) Your deeds and faith have earned you the Everbloom’s blessing to give your life for a worthy cause and still fight on, and she shelters you in battle. As an immediate action once per day, whenever a single creature within 300 feet of you is slain by an effect or hit point damage, you can redirect that effect or damage onto yourself. You gain no saving throw to reduce effects redirected in this manner. If the effect kills you, you are restored to life in 1d4 rounds, as per resurrection, but once this resurrection effect occurs, you lose the ability to use martyrdom for 1 year.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const batch_003: DeityEntry[] = [rovagug, apsu, easivra, gruhastha, cihuaCouatl, kazutal, kurgess, mazludeh, omrataji, milaniBatch];