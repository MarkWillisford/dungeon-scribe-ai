// Batch 019 | first: 'Shax' | last: 'Angradd' | count: 10
import { DeityEntry } from '@/types/deities';

export const shax: DeityEntry = {
  id: 'shax',
  name: 'Shax',
  title: 'The Blood Marquis',
  alignment: 'CE',
  portfolio: `Envy, lies, murder`,
  domains: ['chaos', 'destruction', 'evil', 'nobility'],
  subdomains: ['chaos-demon', 'evil-demon', 'leadership', 'martyr', 'rage'],
  favoredWeapon: 'Dagger',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `White bloody feather`,
  sacredAnimal: `Stork`,
  sacredColors: ['red', 'white'],
  boons: {
    obedienceRequirement: `Perform an autopsy on a creature killed within the last 24 hours, using bare hands instead of tools as much as possible. Gain a +4 profane bonus against effects that cause bleed and figment illusions.`,
    evangelist: [
    { tier: 1, description: `1: Liar’s Arcana (Sp) ventriloquism 3/day, misdirection 2/day, or glibness 1/day` },
    { tier: 2, description: `2: I Was Never Here (Sp) You can disappear from the scene of a murder at a moment’s notice or vanish before a soon-to-be victim knows of your presence. You can use invisibility once per day as an immediate action or as part of an initiative check. If you use this ability as part of an initiative check, you can target a single creature within 30 feet with the effects of modify memory but only to remove memories of your presence in the area.` },
    { tier: 3, description: `3: Charnel Retreat (Sp) The Blood Marquis grants you a tiny corner of his domain of Charnelhome to use for your own pleasures. Three times per day, you can create a portal to this place. This acts as mage’s magnificent mansion, except the mansion exists as part of the Abyss (all planar traits apply) and the portal can be seen and used by anyone. This realm continues to exist when not in use, although foodstuffs and servants are magically replenished each day. In addition, the realm is lethal to invaders. The entire mansion is under the effects of a guards and wards spell, which refreshes each day. Any food conjured by the mansion is poisoned with dark reaver powder, and the unseen servants can become spiritual allies (although only one can do so at a time). You and creatures designated by you are unaffected by these hazardous effects.` },
    ],
    exalted: [
    { tier: 1, description: `1: Killer’s Finesse (Sp) true strike 3/day, invisibility 2/day, or keen edge 1/day` },
    { tier: 2, description: `2: Life in Blood (Su) When your veins are opened, you revel in the glorious pain and exalt in the knowledge that you are closer to your unholy patron. Such wounds do not imperil your life but instead invigorate you. You treat bleed effects as fast healing. For example, if you suffer an effect that causes bleed 5, you take no damage from the effect and instead gain fast healing 5. This ability activates automatically the first time each day you suffer a bleed effect, and it continues until you are fully healed. After that point, the ability ceases to function and does not work for 24 hours, during which time bleed effects affect you normally. If you are affected by multiple bleed effects during the time in which this ability is active, you always gain fast healing equal to the most powerful bleed effect.` },
    { tier: 3, description: `3: Murderer’s Wrath (Ex) Your training and worship has honed your bloodletting skill with knives, axes, and other cutting implements. If you don’t already have the sneak attack ability, you gain sneak attack +5d6. Whenever you deal sneak attack damage with a slashing weapon, you deal 2 additional points of damage per sneak attack die.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Gifts of Slaughter (Sp) divine favor 3/day, instrument of agony 2/day, or haste 1/day` },
    { tier: 2, description: `2: Unholy Butcher (Su) Shax grants you a blessing when you use your gifts to spread death and murder. As a swift action, you can imbue a natural weapon you have or a manufactured weapon you wield with the vicious special ability for 1 round. During this round, whenever you take the 1d6 points of damage from using a vicious weapon (whether it’s one you created with this ability or otherwise), you gain a profane bonus to Armor Class and saving throws equal to the amount of damage taken until the start of your turn in the next round. This bonus does not stack with itself if you use a vicious weapon multiple times in a round, but a higher roll can increase the bonus gained. You can use this ability a number of rounds per day equal to your Hit Dice, but these rounds need not be consecutive.` },
    { tier: 3, description: `3: Bloodbath (Su) You wield daggers like paintbrushes, crafting an exquisite masterpiece of blood and gore with every surgical stroke. Whenever you use a dagger to deal damage to a creature, you also deal bleed damage equal to your Charisma modifier. This bleed damage stacks with bleed damage you have from other abilities. Whenever a creature within 15 feet of you takes bleed damage from a wound you inflict, the blood flows to you and into your wounds, healing you for an number of hit points equal to the bleed damage taken this way.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const shivaska: DeityEntry = {
  id: 'shivaska',
  name: 'Shivaska',
  title: 'The Chained Maiden',
  alignment: 'CE',
  portfolio: `Aberrations, clocks, prisons`,
  domains: ['chaos', 'darkness', 'evil', 'madness'],
  subdomains: ['chaos-demon', 'evil-demon', 'insanity', 'loss', 'nightmare'],
  favoredWeapon: 'Heavy flail',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Clock face with 13 hours`,
  sacredAnimal: `Tarantula`,
  sacredColors: ['brown', 'red'],
  boons: {
    obedienceRequirement: `You must start an obedience to Shivaska at exactly the start of an hour. You must spend this hour bound with chains, rope, manacles, a straitjacket, or some similar restraint. While bound, you must recite prayers to the Chained Maiden and strain against your bindings enough to leave marks on your flesh for the remainder of the day. Gain a +4 profane bonus to your CMD.`,
    evangelist: [
    { tier: 1, description: `1: Warp Time (Sp) expeditious retreat 3/day, time shudder 2/day, or slow 1/day` },
    { tier: 2, description: `2: Clockwork Doll (Su) Once per day as a standard action, you can transform a living creature within 30 feet that has no more Hit Dice than your own into a porcelain-skinned parody of itself, with springs and gears in place of living organs. The target can resist this transformation if it wishes with a successful Fortitude save (DC = 10 + half your Hit Dice + your Charisma modifier). A transformed creature’s type becomes construct, and it gains all traits of the construct type, including lack of a Constitution score. The transformed creature also gains the clockwork subtype, including vulnerability to electricity, but it does not gain the swift reactions trait. A transformed creature must be wound once per day with a special key (which appears as part of this transformation); as the key must be inserted into the creature’s back, this requires either a successful DC 25 Dexterity or Escape Artist check or another creature’s assistance. If the creature is not wound by midnight each night, it becomes immobile and helpless until wound again. A creature transformed into a clockwork doll becomes mindless, with an Intelligence score of 0. It can’t use any supernatural or spell-like abilities it had prior to transforming, nor can it cast spells. It also loses all feats and skill ranks. A clockwork doll follows your commands to the letter, but otherwise it remains motionless and takes no actions on its own (unless you command it to react in certain ways, such as serving as a room guardian). This transformation can be reversed only by break enchantment, miracle, polymorph any object, or wish. If the clockwork doll is slain, the creature can be brought back to life via true resurrection. You can only have one clockwork doll under your command at a time. If you create a second clockwork doll, the first one must attempt a Fortitude saving throw (DC = 10 + half your Hit Dice + your Charisma modifier); if it succeeds, it reverts to its previous form with no memories of the time spent as your clockwork doll, but if it fails this save, the clockwork doll crumbles to rubble and is destroyed. If you are slain, any clockwork doll you’ve created automatically reverts to its previous form (no save required to avoid destruction).` },
    { tier: 3, description: `3: Ineluctable Prison (Sp) You can cast imprisonment once per day as a spell-like ability.` },
    ],
    exalted: [
    { tier: 1, description: `1: Maiden’s Cry (Sp) lesser confusion 3/day, hold person 2/day, or ray of exhaustion 1/day` },
    { tier: 2, description: `2: Binding Touch (Sp) Once per day, you can cast binding as a spell-like ability, but only at a range of touch. You don’t need to expend any material components to use this ability, but assistants can’t aid you in its casting. You can have only one creature affected by this ability at a time. If you successfully use this ability on a second creature, the previously bound creature is immediately freed.` },
    { tier: 3, description: `3: Unwind the Clock (Sp) You can cast time stop once per day as a spell-like ability.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Strangler’s Secret (Sp) long arm 3/day, spider climb 2/day, or haste 1/day` },
    { tier: 2, description: `2: Summon Abyssal Horrors (Sp) Once per day as a standard action, you can summon two advanced grimslakes, as per summon monster VII. You gain telepathic communication with the summoned aberrations to a range of 100 feet, and they follow your commands perfectly for 1 minute per level before vanishing back to the Abyss.` },
    { tier: 3, description: `3: Maiden’s Wretch (Ex) Your body warps into a hunched and slimy form with rubbery flesh and tentacles for limbs, and you gain some of the powers of the aberrant creatures known as chokers. Your arms become boneless and flexible, with sucker-covered, starfish-shaped “hands.” While you can still manipulate objects and wield weapons with these appendages, they also grant you two tentacle primary natural attacks. Each tentacle deals damage appropriate to your size (1d6 if you are Medium). These tentacle attacks have a reach 5 feet greater than your normal reach, and you gain the grab and constrict abilities (your constrict damage is equal to the damage you deal with one of your tentacles plus 1-1/2 times your Strength modifier); you can grab a creature up to one size category larger than you this way. In addition, you gain the choker’s strangle and quickness special abilities.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sifkesh: DeityEntry = {
  id: 'sifkesh',
  name: 'Sifkesh',
  title: 'The Sacred Whore',
  alignment: 'CE',
  portfolio: `Despair, heresy, suicide`,
  domains: ['chaos', 'evil', 'madness', 'trickery'],
  subdomains: ['deception', 'chaos-demon', 'evil-demon', 'loss', 'nightmare', 'truth'],
  favoredWeapon: 'War razor',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Slashed feminine hands`,
  sacredAnimal: `Asp`,
  sacredColors: ['red', 'white'],
  boons: {
    obedienceRequirement: `Perform a ritualized suicide by first scribing a note lambasting your enemies and then pretending to kill yourself via strangulation or cutting. Gain a +4 profane bonus on saving throws against mind-affecting effects.`,
    evangelist: [
    { tier: 1, description: `1: Hymn of Sorrow (Sp) ear-piercing scream 3/day, hold person 2/day, or crushing despair 1/day` },
    { tier: 2, description: `2: Blasphemer’s Piety (Ex) Your blasphemous soul adapts effortlessly to reflect the convictions of others. When you are targeted by an effect based on alignment or patron deity, you can choose to be treated as having the alignment and faith of the creature originating the effect (you don’t need to know that creature’s alignment or faith to make this choice). You can also be treated as having the faith of your target or targets when using a spell or effect dependent on patron deity. Making this choice does not require an action, or even awareness that you are being targeted (in which case the ability always functions as best benefits the character in that situation). In addition, you can select feats, traits, and other options dependent on worship of particular deities as though you were a worshiper of those deities. Once per week, you can choose to perform the obedience of any lawful or good deity with which you are familiar instead of Sifkesh’s obedience. This still grants you your normal benefits from Sifkesh, not those from the other faith.` },
    { tier: 3, description: `3: Baptism of Sin (Su) Your unholy magic infects the souls of mortal creatures, washing away their morality and drawing them into the Lady of Heresy’s tender embrace. Whenever a creature fails a saving throw against one of your mind-affecting spells, that creature becomes filled with false but nevertheless convincing memories of having committed a horrific sin. A nonevil and nongood target must succeed at a Will save (DC = 10 + half your Hit Dice + your Charisma modifier) or become staggered for 1 round, while a good target must succeed at this Will save or become nauseated for 1 round. Once a creature successfully saves against this effect, it is immune to baptism of sin for 24 hours. This is a mind-affecting emotion effect.` },
    ],
    exalted: [
    { tier: 1, description: `1: Heretic’s Hiss (Sp) command 3/day, whispering wind 2/day, or suggestion 1/day` },
    { tier: 2, description: `2: Heresy (Su) You take great delight in worrying at weaknesses in the dogma of other religions. Once per day as a standard action, you can utter blasphemy or heresy against a single religion other than the worship of a demon lord. A worshiper of the targeted religion must be able to hear your utterance, or this ability fails. You gain spell resistance equal to your Hit Dice + 11 against spells cast by worshipers of the religion you spoke out against. This spell resistance lasts until you use this ability again to blaspheme a different religion or until you fail to perform your daily obedience.` },
    { tier: 3, description: `3: Mass Suicide (Sp) Your influence can drive entire groups of people to acts of self-destruction. You can cast weird once per day as a spell-like ability. Rather than assaulting the victims with images of fear, this ability assaults the targets with images and sensations of crippling sadness and despair. Those who succumb to the spell and die do so at their own hands. If no method of suicide is available for one who falls prey to this effect, the victim simply dies outright of sadness. This is a mind-affecting emotion effect.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Wallow in Despair (Sp) doom 3/day, miserable pity 2/day, or catatonia 1/day` },
    { tier: 2, description: `2: Welcome the End (Sp) With a cooing nihilistic whisper, you cause a creature to kill itself, making its body lose the drive to maintain life. You can cast phantasmal killer three times per day as a spell-like ability, but rather than this functioning as an illusion (phantasm), this is a mind-affecting enchantment (compulsion) effect. The victim must succeed at a Will save to resist the urge to end its life. On a failure, the victim must succeed at a Fortitude save or its body’s life-sustaining autonomic processes irreparably and lethally shut down.` },
    { tier: 3, description: `3: Broken Angel (Ex) Like that of your Abyssal mistress, your body has fallen to pieces. Your arms and legs do not directly attach to your body, instead floating near their original locations, while your torso sprouts angelic wings that keep it aloft. You gain a fly speed of 30 feet, with perfect maneuverability. Your limbs can disassociate briefly from the whole to attack distant targets at a moment’s notice, extending your melee reach by 15 feet, and attacks against you suffer a miss chance of 20% due to the gaps between your constantly shifting body parts. You are immune to effects that cause severed limbs or that arise from severed limbs (including the beheading effect of a vorpal sword) and also to bleed effects and bleed damage. You automatically stabilize when reduced to negative hit points.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const socothbenoth: DeityEntry = {
  id: 'socothbenoth',
  name: 'Socothbenoth',
  title: 'The Silken Sin',
  alignment: 'CE',
  portfolio: `Perversion, pride, taboos`,
  domains: ['chaos', 'charm', 'evil', 'travel'],
  subdomains: ['chaos-demon', 'evil-demon', 'exploration', 'love', 'lust'],
  favoredWeapon: 'Quarterstaff',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Eyeless snake and staff`,
  sacredAnimal: `Snake`,
  sacredColors: ['pink', 'red'],
  boons: {
    obedienceRequirement: `Achieve sexual release, either alone or with a partner, and then defile a page torn from the religious canon of a lawful good deity. Gain a +4 bonus on saves against enchantment effects.`,
    evangelist: [
    { tier: 1, description: `1: Deviant Urges (Sp) command 3/day, unnatural lust 2/day, or reckless infatuation 1/day` },
    { tier: 2, description: `2: Lurid Persuasion (Su or Sp) When you create magical effects that manipulate the thoughts and minds of others, you invest your own debased passions and influences into that magic, so that it forces creatures to violate even their most deeply felt taboos. Mind-affecting spells you cast that would normally grant an additional saving throw or a bonus on saving throws for opposing the target’s nature do not grant these bonuses or saves, as long as the intended course of action is lurid or perverse (such as causing a druid to lust after her animal companion, or a brother and sister to lust after one another). In addition, three times per day, you can cast quickened unnatural lust as a spell-like ability.` },
    { tier: 3, description: `3: Perverse Reshaping (Sp) Your deeply felt prayers and obsessive devotion to the secrets Socothbenoth whispers to you when you sleep have granted you the ability to reshape matter and grant life where life should perhaps not exist. Three times per day, you can cast polymorph any object as a spell-like ability. Unlike with the spell, you are not limited to existing forms; you could turn the target into a three-headed nymph or a centaur-like creature made only of human body parts, for example (although this does not apply to inanimate forms, such as turning a human into a sculpture of soft clay or vice versa). You can also perform partial transformations, such as granting additional body parts, changing a creature’s limbs into something else, or transforming only a creature’s tongue into a tentacle. If the resulting form would be lethal, the target gains a +4 bonus on the save. Unlike for a normal polymorph any object spell, changes you make this way can be undone only by a wish or miracle spell or by another use of this ability.` },
    ],
    exalted: [
    { tier: 1, description: `1: Sins of the Flesh (Sp) charm person 3/day, eagle’s splendor 2/day, or beast shape I 1/day` },
    { tier: 2, description: `2: Compelling Voice (Su) You have honed your voice into a weapon, and can speak in a smooth and seductive tone that slips into the minds of those who listen like the lightest brush of a lover’s breath. As a result, your mind-affecting effects become harder to resist. Increase the save DC of such effects you create by 1, or by 2 when used against an intelligent creature that is or could be sexually attracted to you.` },
    { tier: 3, description: `3: Truth in the Flesh (Sp) The raptures of physical pleasure grow old when you throw taboo to the wind, and so you have honed your faith to emulate your sinful patron’s fluidity of the flesh. You can cast shapechange once per day as a spell-like ability.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Before The Fall (Sp) delusional pride 3/day, mirror image 2/day, or heroism 1/day` },
    { tier: 2, description: `2: Violent Vice (Ex) Causing harm to others fills you with a euphoric pleasure that allows you to endure the harshest blows. Up to three times per day as you deal hit point damage to a creature, the rush of pleasure grants you temporary hit points equal to twice your Charisma modifier. These temporary hit points stack with multiple uses of this ability (but not with temporary hit points from other sources), and last for 1 minute or until depleted. As long as you are fully healed and have at least one of these temporary hit points, you gain a +4 morale bonus on attack rolls and Will saving throws.` },
    { tier: 3, description: `3: Sensuous Facade (Su) Your form has achieved the utmost perfection, granting you a measure of protection and filling you with a surge of prideful wrath whenever your beauty would be sullied by others’ assaults. Your physical appearance becomes darkly beautiful and sexually appealing, granting you a +2 profane bonus to your Charisma score. As long as you do not have an armor bonus to your Armor Class, you gain a profane bonus to your AC and on Fortitude saving throws equal to your Charisma modifier. Whenever a creature deals damage to you with an attack, you gain a profane bonus equal to your Charisma modifier on your next weapon attack roll against that creature.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const urxehl: DeityEntry = {
  id: 'urxehl',
  name: 'Urxehl',
  title: 'Trollfather',
  alignment: 'CE',
  portfolio: `Natural disasters, storms, trolls`,
  domains: ['chaos', 'evil', 'fire', 'weather'],
  subdomains: ['ash', 'catastrophe', 'chaos-demon', 'evil-demon', 'storms'],
  favoredWeapon: 'Greatclub',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Storm cloud with lightning`,
  sacredAnimal: `Bear`,
  sacredColors: ['brown', 'greed'],
  boons: {
    obedienceRequirement: `You must cavort naked atop a hill, rooftop, or mountaintop during a storm, or else ritualistically sever the fingers, toes, then arms and legs of a nonevil being, burning each severed fragment to ash before moving on to the next. Gain a +4 profane bonus on all saving throws against weather-related effects and spells.`,
    evangelist: [
    { tier: 1, description: `1: Storm’s Wrath (Sp) shocking grasp 3/day, aggressive thundercloud 2/day, or lightning bolt 1/day` },
    { tier: 2, description: `2: Tempest Hide (Ex) Urxehl rewards your devotion by transforming your skin into leathery rust-red hide (if you already have fur, hide, or scales on your body, the coloration merely changes). As a result of this transformation, you gain electricity resistance 30. If you are already immune to electricity (or if you gain immunity to electricity at a point after you gain this boon), you gain sonic resistance 30 instead. In either case, the gift allows you to enjoy the fury of the greatest of storms in relative safety.` },
    { tier: 3, description: `3: Storm of Verakivhan (Su) You can unleash the power of the Trollfather with your voice, channeling the raw fury of his eternally tempest-tormented realm in a thunderous shout. With a mighty roar, you blast those around you with deadly storms of Abyssal energy. Twice per day as a standard action, you can exude waves of energy in a 30-foot-radius burst centered on yourself. The blast does not harm natural vegetation or creatures in the area you wish to exclude from damage. Other creatures in the area take 1d8 points of acid, cold, electricity, or fire damage per character level you have (maximum 20d8) and are stunned for 1 round. You choose what type of energy damage this ability deals when you activate your storm (all targets take the same type of energy damage; you can’t cause one target to take fire damage and another to take acid damage). A creature that succeeds at a Fortitude saving throw (DC = 10 + half your Hit Dice + your Charisma modifier) takes half damage and negates the stunned effect.` },
    ],
    exalted: [
    { tier: 1, description: `1: Storm Breath (Sp) obscuring mist 3/day, gust of wind 2/day, or call lightning 1/day` },
    { tier: 2, description: `2: Earthshaker (Sp) You can cast earthquake once per day as a spell-like ability, but it affects only a 40-foot-radius spread.` },
    { tier: 3, description: `3: Invoke the True Storm (Sp) You can cast storm of vengeance as a spell-like ability once per day.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Master of Trolls (Sp) enlarge person 3/day, resist energy (acid or fire only) 2/day, or fireball 1/day` },
    { tier: 2, description: `2: Rip Flesh and Tear Limbs (Ex) Your limbs become rangy and your hands twist into ghastly claws. You gain two claw attacks, each dealing 1d6 points of damage for a Medium creature; in addition, you gain the rend ability, which requires two successful claw attacks and deals a number of points of damage equal to the damage die of one claw plus your Strength modifier. If you already have the rend ability, you deal double your existing rend damage when rending.` },
    { tier: 3, description: `3: Trollfather’s Chosen (Ex) Your flesh knits together with gruesome speed, healing wounds almost as soon as they are inflicted. You gain regeneration 5 (acid or fire). If you already have regeneration, increase the rate of healing granted by your regeneration by 10 instead.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const xoveron: DeityEntry = {
  id: 'xoveron',
  name: 'Xoveron',
  title: 'The Horned Prince',
  alignment: 'CE',
  portfolio: `Gargoyles, gluttony, ruins`,
  domains: ['chaos', 'earth', 'evil', 'strength'],
  subdomains: ['caves', 'chaos-demon', 'evil-demon', 'entropy', 'ferocity', 'petrification'],
  favoredWeapon: 'Ranseur',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `5-horned gargoyle skull`,
  sacredAnimal: `Boar`,
  sacredColors: ['black', 'brown'],
  boons: {
    obedienceRequirement: `Perch atop a high outcrop and look out over the surrounding terrain. If the outcrop is in an uninhabited area, you need do nothing more but wait for an hour, but if the outcrop is in an inhabited area (such as a city), no passersby should realize you are a living thing—any who do must be slain before the hour’s end. Gain a +4 profane bonus on saving throws against effects that cause sickness, nausea, fatigue, or exhaustion.`,
    evangelist: [
    { tier: 1, description: `1: Master of Desolation (Sp) detect secret doors 3/day, soften earth and stone 2/day, or meld into stone 1/day` },
    { tier: 2, description: `2: Ruinwalker (Sp) The Horned Prince is master of all ruins, and his blessing lets you flash instantly from place to place in such desolate areas. You can cast dimension door (self only) as a spell-like ability a number of times per day equal to your Hit Dice. Both the start and end point of your teleportation must be within a single continuous area of ruins terrain, such as an ancient dungeon or catastrophe-wracked city. Whether a given area constitutes ruins terrain is decided at the GM’s discretion.` },
    { tier: 3, description: `3: Wake the Ruined Realm (Sp) At your bidding, the remains of ancient civilizations and shattered cities rise up to destroy your foes. Once per day as a standard action, you can cause a Large stone statue within 30 feet to animate as a stone golem. The golem obeys your commands and remains active for up to 1 hour. If the stone statue you target is a statue of Xoveron, the resulting stone golem gains the advanced creature template.` },
    ],
    exalted: [
    { tier: 1, description: `1: Gargoyle’s Gift (Sp) sanctuary 3/day, shatter 2/day, or vampiric touch 1/day` },
    { tier: 2, description: `2: Glutton’s Feast (Sp) You can cast heroes’ feast once per day as a spell-like ability. The food created by this effect consists of rancid milk and raw or rotting meat. Those who partake of this feast consume their food shockingly fast, as if they were starving—it takes only 1 minute to gain the benefits of this spell. Those who don’t worship Xoveron must succeed at a Fortitude save (DC = 16 + your Charisma modifier) or be sickened by the feast for 6 hours (though all other benefits of the feast still apply).` },
    { tier: 3, description: `3: Death-Stealing Gaze (Su) You gain the death-stealing gaze ability of a nabasu. You can activate this ability as a free action and use it for up to 3 rounds per day plus a number of additional rounds equal to your Constitution modifier—these rounds need not be consecutive, but they must be used in 1-round increments. All living creatures within 30 feet of you when your death-stealing gaze is active must succeed at a Fortitude save (DC = 10 + half your Hit Dice + your Charisma modifier) or gain a negative level. A humanoid slain in this manner immediately transforms into a ghoul under your control. You can create only one ghoul in this manner per round. If multiple humanoids die from this ability simultaneously, you choose which of them rises as a ghoul. Nabasu demons that gain this boon can instead use their death-stealing gaze at will, regardless of their total number of growth points.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Gargoyle Magic (Sp) stone fist 3/day, protection from arrows 2/day, or fly 1/day` },
    { tier: 2, description: `2: Idol of Desolation (Sp) You can take on the strength of stone without sacrificing your awareness to temporarily become a sentinel of stone. You can cast statue as a spell-like ability once per day.` },
    { tier: 3, description: `3: Sculptor’s Strike (Su) The strike of your weapons causes a specified foe to calcify and harden into stone, bit by bit, eventually transforming that enemy into a favored child of Xoveron. To use sculptor’s strike, you must first designate a foe in sight within 30 feet as a standard action. Once you’ve designated the foe, whenever you deal damage to that creature with a melee weapon (including unarmed strikes and natural weapons), the creature takes 1d6 points of Dexterity drain in addition to the normal damage. If the target succeeds at a Fortitude save (DC = 10 + half your Hit Dice + your Charisma modifier) this drain is reduced to 1 point. A creature drained to 0 Dexterity in this way is permanently transformed into a gargoyle (as per polymorph any object, except no Fortitude save is allowed) and must succeed at a Will save (using this ability’s DC) or have its mind also become that of a gargoyle (as per baleful polymorph). When a creature is transformed in this way, all Dexterity drain caused by this effect is instantly healed and the creature’s hit points are fully restored. The mental change can be reversed by any effect that removes curses, but the physical transformation can only be reversed by miracle or wish. You can activate sculptor’s strike once per day to designate a foe, but once you’ve done so, that foe remains susceptible to your ability until you or it is slain. If you designate a different foe on a later day, any previously designated foe is no longer designated and can no longer be affected by this ability (unless you designate it once again at a later date).` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const yhidothrus: DeityEntry = {
  id: 'yhidothrus',
  name: 'Yhidothrus',
  title: 'The Ravager Worm',
  alignment: 'CE',
  portfolio: `Age, time, worms`,
  domains: ['chaos', 'death', 'evil', 'repose'],
  subdomains: ['ancestors', 'chaos-demon', 'evil-demon', 'entropy', 'murder'],
  favoredWeapon: 'Spiked chain',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Worm-filled hourglass`,
  sacredAnimal: `Worm`,
  sacredColors: ['black', 'pale yellow'],
  boons: {
    obedienceRequirement: `Meditate in a closed coffin partially filled with worm-infested soil or leech-infested mud. During the obedience, you must swallow or inhale at least a dozen living worms or leeches. Gain a +4 profane bonus against effects that cause slowness or magical aging, or anything that damages, drains, or penalizes ability scores.`,
    evangelist: [
    { tier: 1, description: `1: Consumption of the Worm (Sp) corrosive touch 3/day, acid arrow 2/day, or vampiric touch 1/day` },
    { tier: 2, description: `2: Nightmare Below (Ex and Su) You can crawl beneath the surface of the earth like a worm and then burst forth to horrify foes. You gain a burrow speed of 30 feet, which can be used only in mud, sand, soil, or other soft substances (not solid stone). You gain a +10 bonus on Stealth checks while burrowing. Once per hour, if you take a standard action to emerge from burrowing with a roar and spray of soil, each creature within 30 feet of your emergence that was not aware of your presence must succeed at a Will save (DC = 10 + half your Hit Dice + your Charisma modifier) or be shaken and stunned for 1 round and shaken for 2d4 rounds thereafter. The burrowing ability is an extraordinary ability, but the latter part of the ability is a supernatural, mind-affecting fear effect.` },
    { tier: 3, description: `3: The Very Worm That Gnaws (Su) As a result of your practice of sleeping in parasite-infested mud or soil to fulfill your obedience to Yhidothrus, your flesh has become riddled with an unholy infection. Yet far from being a troublesome condition, these worms are a welcome addition to your life, and as you gain this final boon, your body is devoured from the inside out by a mass of wriggling leeches, maggots, worms, and other horrid vermin, which are thereafter bound together into a cohesive whole by your foul will. When you attain this boon, you become a worm that walks. When your emergence (see above) causes creatures to become shaken, those creatures are also sickened for 1 minute.` },
    ],
    exalted: [
    { tier: 1, description: `1: Blessing of the Worm (Sp) ray of enfeeblement 3/day, gentle repose 2/day, or slow 1/day` },
    { tier: 2, description: `2: Curse of Brittle Bones (Sp) Once per day, you can cast a powerful bestow curse, heightened to a 7th-level spell, as a spell-like ability. This special curse causes the target creature to suddenly advance to venerable age. This curse imposes a –6 penalty to the target’s Strength, Dexterity, and Constitution scores, but its Intelligence, Wisdom, or Charisma scores do not increase. These penalties do not stack with any existing penalties a creature might already have as the result of advanced age.` },
    { tier: 3, description: `3: Call of the Worm (Sp) By placing a hand upon the ground and whispering a series of blasphemies to the Ravager Worm, you can call up from below an immense and destructive manifestation of your fiendish lord. You can cast summon monster IX once per day as a spell-like ability to summon one advanced fiendish purple worm.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Hasten the End (Sp) expeditious retreat 3/day, silence 2/day, or sands of time 1/day` },
    { tier: 2, description: `2: Specter of Time (Su) As a swift action when you confirm a critical hit with a weapon against a living foe, instead of dealing the additional damage from the critical hit, you can instead deal normal damage and force the target to attempt a Fortitude save (DC = 10 + half your Hit Dice + your Charisma modifier). On a failed save, the target painfully advances in years to the next age category. This aging can never have beneficial effects (such as if used against a true dragon). The target gains the penalties associated with the new age category to its Strength, Dexterity, and Constitution scores, but its Intelligence, Wisdom, or Charisma scores do not increase. This advanced age effect lasts for 24 hours before it fades and the affected creature returns to its normal age. A venerable creature (including one whose age has been magically accelerated via this ability to venerable, but not one whose age is temporarily advanced from other effects, such as per sands of time) that fails its saving throw against the aging effects of this ability is instantly slain, as if via old age (though the body instantly reverts to its original age appearance upon death). A creature slain by this effect can only be restored to life via miracle, reincarnate, true resurrection, or wish. This is a curse effect.` },
    { tier: 3, description: `3: End Time (Sp) You can call upon the Ravager Worm to temporarily consume time itself in an area surrounding you. You can cast time stop once per day as a spell-like ability. When you use this ability, those in the area of effect are subjected to a powerful vision—that the world they are in becomes wrapped in the endless coils of the Ravager Worm. The affected creatures never glimpse Yhidothrus’s head, and know only for the brief instant of eternity they spend in your time stop area that the world around them is fully wrapped in the coils of something more foul than they even imagined.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const zevgavizeb: DeityEntry = {
  id: 'zevgavizeb',
  name: 'Zevgavizeb',
  title: 'God of the Troglodytes',
  alignment: 'CE',
  portfolio: `Caverns, reptiles, troglodytes`,
  domains: ['animal', 'chaos', 'evil', 'strength'],
  subdomains: ['chaos-demon', 'evil-demon', 'ferocity', 'resolve', 'saurian'],
  favoredWeapon: 'Spiked gauntlet',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Twisted, taloned tentacle`,
  sacredAnimal: `Dinosaur`,
  sacredColors: ['black', 'green'],
  boons: {
    obedienceRequirement: `In a cavern, impale a living sacrifice on a stalagmite so that the creature does not die immediately. Dance around the sacrifice while shouting prayers to Zevgavizeb, taking time every 10 minutes to push the impaled creature further down the stalagmite. Time the dance so that at the end, the creature is at the stalagmite’s base—it need not survive to the end of the dance. Gain a +4 profane bonus on saving throws against special attacks and spells originating from reptilian creatures.`,
    evangelist: [
    { tier: 1, description: `1: As a Foulness (Sp) silent image 3/day, ghoul touch 2/day, or stinking cloud 1/day` },
    { tier: 2, description: `2: Mind Stomp (Sp) You can crush a foe’s psyche like a dinosaur stepping on a rat. You can cast psychic crush III once per day as a spell-like ability.` },
    { tier: 3, description: `3: Primeval Paragon (Sp) You are heir to the unmatched psychic power of the troglodyte lords of old, and you can wield this power to make slaves of those creatures whose service is yours by right. You can cast dominate monster once per day on humanoids, reptilian animals, or other reptile-like creatures (such as dragons). You can have only one creature dominated at a time via this effect, but the effects are permanent until you dominate a new target, at which point the previous target is released from domination. A target released this way is immediately affected by feeblemind, with no saving throw, but a target that is released from control via other methods (such as via dispel magic) does not suffer this fate.` },
    ],
    exalted: [
    { tier: 1, description: `1: Zevgavizeb’s Blessing (Sp) charm animal (reptiles only) 3/day, darkness 2/day, or greater magic fang 1/day` },
    { tier: 2, description: `2: Children of the Caves (Sp) Once per day, you can cast summon monster VII as a spell-like ability to summon one fiendish tyrannosaurus, 1d3 fiendish elasmosauruses, or 1d4+1 fiendish ankylosauruses.` },
    { tier: 3, description: `3: Primeval Might (Ex) You become infused with primeval power, gaining a +4 profane bonus to your Constitution score and natural armor.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Saurian Spellcraft (Sp) thunderstomp 3/day, darkvision 2/day, or beast shape I (reptiles only) 1/day` },
    { tier: 2, description: `2: Scaled Monstrosity (Sp) By invoking the blessing of the God of the Troglodytes, you can take the form of the mightiest reptiles ever to exist. You can cast extended beast shape IV three times per day as a spell-like ability. If you assume the form of a dinosaur and you are capable of casting spells in your original form, you can also cast spells in your dinosaur form as if you had the Natural Spell feat; treat this spell as wild shape for the purpose of that feat’s effects.` },
    { tier: 3, description: `3: Lizard Tyrant (Sp) You can cast summon monster VII once per day to summon one advanced fiendish tyrannosaurus. The duration of this spell is permanent, but you can have only one tyrannosaurus summoned this way at a time. As a summoned monster, this advanced fiendish tyrannosaurus is still hedged out by effects like protection from evil, and it can be banished as normal.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const zura: DeityEntry = {
  id: 'zura',
  name: 'Zura',
  title: 'The Vampire Queen',
  alignment: 'CE',
  portfolio: `Blood, cannibalism, vampires`,
  domains: ['chaos', 'death', 'evil', 'madness'],
  subdomains: ['blood', 'chaos-demon', 'evil-demon', 'murder', 'undead'],
  favoredWeapon: 'Rapier',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Crimson fanged skull rune`,
  sacredAnimal: `Vampire bat`,
  sacredColors: ['red'],
  boons: {
    obedienceRequirement: `Drink some of the blood of a willing creature, and allow the same creature to drink some of your own blood, after which you must meditate on the teachings of Zura. Alternatively, you can feed on the flesh of a creature of your own race until you are full. Gain a +4 profane bonus on all saving throws against the supernatural abilities of undead creatures.`,
    evangelist: [
    { tier: 1, description: `1: Vampire Magic (Sp) charm person 3/day, eagle’s splendor 2/day, or gaseous form 1/day` },
    { tier: 2, description: `2: Decadent Hungers (Su) Your palate is too refined to be satisfied by the blood and flesh of lesser beings—only sentient creatures are worthy enough to gratify your hunger. If you have access to the fresh blood or raw flesh (harvested no more than 1 hour ago from a living body) of a creature with an Intelligence score of 6 or greater, you can consume it as a full-round action; alternatively, you can consume blood or flesh from a willing or helpless living target. Upon drinking or feeding in this manner, you gain a +2 profane bonus on attack rolls, saving throws, and skill checks for 10 minutes. In addition, any spell you cast during this time takes effect as though your caster level were 2 higher; this is a profane bonus.` },
    { tier: 3, description: `3: Vampire Queen’s Mystique (Ex) You take on some of the sensuous allure of the vampire and can bend others to your will with just a glance. You gain a +4 profane bonus to your Charisma score and on Will saving throws against mind-affecting effects.` },
    ],
    exalted: [
    { tier: 1, description: `1: Zura’s Favor (Sp) deathwatch 3/day, spider climb 2/day, or vampiric touch 1/day` },
    { tier: 2, description: `2: Blood Is Life (Su) Not all of those who venerate Zura are themselves undead vampires, but all who worship her are expected to drink blood as part of their duty to the Vampire Queen. Your faith in the demon lord allows you to gain more than just religious rapture and sustenance from blood, provided the blood you drink is fresh and warm. Once per day as a full-round action, you can drink the blood of a creature that has been dead for no more than 1 hour to gain the benefits of heroes’ feast and death knell for 1 hour. The blood you imbibe must come from a creature with a minimum CR of your character level – 2.` },
    { tier: 3, description: `3: Vampirism (Su) While Zura’s favored worshipers are vampires, she still values the service of powerful cult members who yet live, for a living cultist can move about in the light of day and need not fear the weaknesses most vampires do. But this is not to say that Zura denies her greatest followers the bliss and rapture of becoming a vampire, at least for short periods of time. Thanks to your long-standing devotion to the Vampire Queen, you have become one of those chosen few to gain this peek into a vampire’s unlife without having to give up living. Once per day, you can infuse yourself with the qualities of a vampire. Apply the vampire template to yourself for the duration of this effect, which lasts for 1d6 rounds plus an additional number of rounds equal to your Charisma bonus. When the effect ends, you are staggered for 1d4 rounds. In time, most worshipers of Zura hope to become vampires, and those who do and have this boon find that they can still draw upon its effects to bolster their power. If you are already a vampire and you activate this boon, you gain the advanced creature simple template for the duration of this effect.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Blood-Slicked Knight (Sp) inflict light wounds 3/day, bloodbath 2/day, or waves of blood 1/day` },
    { tier: 2, description: `2: Bloodthirsty Savagery (Ex) Your canines develop into razor-sharp fangs, and you thirst for the blood of the living. You gain a bite attack, dealing 1d6 points of damage for a Medium creature; if you already have a bite attack, it deals damage as though you were one size category larger. Whenever you confirm a critical hit with your bite attack, you consume some of the victim’s flesh and blood, dealing 1 point of Constitution damage. When you deal Constitution damage this way, you heal 5 hit points. If you have the blood drain special attack, you gain its benefits whenever you deal damage with your bite attack, as if you had pinned your target.` },
    { tier: 3, description: `3: Vampire’s Flesh (Su) Your flesh is infused with a vampire’s undead vigor, and it repairs itself with unnatural speed. You are damaged by positive energy and healed by negative energy, as if you were undead. In addition, you gain fast healing 5 and DR 10/magic and silver. If you are already a vampire, your fast healing and DR both increase by 5. You are staggered whenever you are exposed to direct natural sunlight; if you are a vampire, this replaces your normal weakness to sunlight.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const angradd: DeityEntry = {
  id: 'angradd',
  name: 'Angradd',
  title: 'The Forge-Fire',
  alignment: 'LG',
  portfolio: `Fire, tradition, war`,
  domains: ['fire', 'good', 'law', 'war'],
  subdomains: ['good-archon', 'law-archon', 'ash', 'smoke', 'tactics'],
  favoredWeapon: 'Greataxe',
  allowedClericAlignments: ['LG', 'LN', 'NG'],
  symbol: `Smoking forge`,
  sacredAnimal: `Boar`,
  sacredColors: ['gray', 'red'],
  boons: {
    obedienceRequirement: `Build a fire, preferably as part of a ritual that includes your closest allies and comrades. Use that fire’s smoke to blacken the head of an axe while reciting battle litanies from Angradd’s Tempering (or Torag’s Hammer and Tongs, Magrim’s Measure, or Journey of the Last Breath if you also wish to show reverence for Angradd’s respected elder brothers). Clean the ash from the axe with a cloth (traditionally a red cloth, often granted to you as a gift from a family member). Successful melee attacks made with that axe by a lawful good, lawful neutral, or neutral good creature deal an additional 1 point of fire damage. (This damage is not multiplied on a critical hit.)`,
    evangelist: [
    { tier: 1, description: `1: Smoke of Righteous Flame (Sp) burning hands 3/day, discovery torch 2/day, or ash storm 1/day` },
    { tier: 2, description: `2: Bulwark Against Evil (Su) You are a shining beacon against the forces of evil and have internalized much of Angradd’s fury against those who are vile and cruel. You gain DR 5/—, which applies only against attacks from creatures with the evil subtype or attacks that can bypass DR/evil.` },
    { tier: 3, description: `3: General of the Just (Su) You are a mobile focus of the divine strategy of Angradd, able to turn the tide of battle by inspiring your allies to instinctively work together. Allies within 60 feet (not including yourself) gain a +2 morale bonus on initiative checks, on melee damage rolls while flanking, and to AC when adjacent to you or at least one other ally of yours.` },
    ],
    exalted: [
    { tier: 1, description: `1: Torch Against Evil (Sp) weapons against evil 3/day, blistering invective 2/day, or flame arrow 1/day` },
    { tier: 2, description: `2: Blazing Righteousness (Su) You can channel Angradd’s divine flames to burn agents of malevolence. As a free action, you can wreathe yourself in flames, granting you resistance 20 against fire and causing any evil creature adjacent to you at the beginning of your turn to take 2d6 points of damage (half of which is fire damage). Dismissing this ability is also a free action. This ability lasts a number of rounds per day equal to 1 + 1 per 4 Hit Dice you have (maximum 6 rounds). The rounds don’t need to be consecutive.` },
    { tier: 3, description: `3: Boon Companions (Sp) Three times per day, you can summon an ally to assist you in the fight against evil. This acts as a summon nature’s ally or summon monster spell with a spell level equal to half your Hit Dice (maximum spell level 9th). The summoned creatures must be lawful good, lawful neutral, or neutral good, and they gain the fire, good, and lawful subtypes. You can communicate with the summoned creatures as if you had a shared language.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Purifying Fire (Sp) burning hands 3/day, flames of the faithful 2/day, or fireball 1/day` },
    { tier: 2, description: `2: Cut Down to Size (Su) Any axe you wield shines with red and gold light, as the light spell. You gain Cleave as a bonus feat with any axe. If you already have Cleave, you gain the first feat from the following list that you don’t already have when wielding an axe: Great Cleave, Cleaving Finish, Improved Cleaving Finish.` },
    { tier: 3, description: `3: Army of One (Sp) Once per day you can summon a small army of allies to aid you in combat. You can summon either one greataxe made of pure force per 4 Hit Dice you have (each as a spiritual weapon spell) or one dwarven warrior made of pure force per 8 Hit Dice you have (each as spiritual ally). If you summon force weapons, you can direct all the summoned weapons with a single move action. If you summon force allies, you can direct all the summoned allies with a single swift action. This acts as a spell with a spell level equal to half your Hit Dice (maximum spell level 9th). If any of the force effects you summon with this ability are dispelled, they are all dispelled.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const batch_019: DeityEntry[] = [shax, shivaska, sifkesh, socothbenoth, urxehl, xoveron, yhidothrus, zevgavizeb, zura, angradd];