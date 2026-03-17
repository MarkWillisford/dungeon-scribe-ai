// Batch 018 | first: 'Jezelda' | last: 'Pazuzu' | count: 10
import { DeityEntry } from '@/types/deities';

export const jezelda: DeityEntry = {
  id: 'jezelda',
  name: 'Jezelda',
  title: 'Mistress of the Hungry Moon',
  alignment: 'CE',
  portfolio: `Desolation, the moon, werewolves`,
  domains: ['animal', 'chaos', 'evil', 'trickery'],
  subdomains: ['deception', 'chaos-demon', 'evil-demon', 'fur', 'moon'],
  favoredWeapon: 'Scimitar',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Full moon above moor`,
  sacredAnimal: `Wolf`,
  sacredColors: ['black', 'silver'],
  boons: {
    obedienceRequirement: `Under the night sky, offer prayers to the moon. On nights when there is no moon, you must supplement your prayers by sacrificing a living creature by tearing out its throat with your teeth and feeding on the still-warm body. Gain a +4 profane bonus on saving throws attempted when the moon is visible in the night sky.`,
    evangelist: [
    { tier: 1, description: `1: Moonshadow (Sp) keen senses 3/day, darkness 2/day, or rage 1/day` },
    { tier: 2, description: `2: Lunatic Potency (Su) The light of the moon fills your spells with maddening power and opens your heart to pure and primal rage. The DC of spells and spell-like abilities you cast under the light of the moon increase by 1, and you are healed of an amount of damage equal to the spell’s level as the spell is cast. During nights of the full moon, spells with the fear or emotion descriptor have their save DCs increased by 2 and you are healed of an amount of damage equal to twice the spell’s level when you cast such a spell.` },
    { tier: 3, description: `3: Howl at the Moon (Su) You take on the aspect of the wolf— you become more rugged, your ears become elongated, and you sprout sharp fangs and fur. You gain a +2 profane bonus to your Strength, the scent ability, and a +4 bonus on trip combat maneuvers checks. You gain a bite natural attack that deals damage appropriate to your size (1d6 if you are Medium). As a swift action or whenever you hit with a bite attack, you can attempt combat maneuver to trip your foe; this trip attempt does not provoke attacks of opportunity.` },
    ],
    exalted: [
    { tier: 1, description: `1: Gift of the Moon (Sp) charm animal 3/day, summon nature’s ally II (1 fiendish wolf or 1d3 wolves only) 2/day, or beast shape I 1/day` },
    { tier: 2, description: `2: Afflicted Lycanthrope (Su) You contract lycanthropy and become a werewolf (even if you couldn’t normally gain that template). If you are already a werewolf, you become a true lycanthrope. If you are already a true lycanthrope, you gain a +2 bonus to your Strength and Constitution scores.` },
    { tier: 3, description: `3: True Lycanthrope (Su) You can use your lycanthropic change shape ability as a swift action. You become a true lycanthrope if you were an afflicted lycanthrope. If you are already a true lycanthrope, you gain another +2 bonus to your Strength and Constitution scores.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Desolation of Flesh (Sp) ray of enfeeblement 3/day, feast of ashes 2/day, or ray of exhaustion 1/day` },
    { tier: 2, description: `2: Beast Within (Su) You contract lycanthropy and become a werewolf (even if you couldn’t normally gain that template). If you are already a werewolf, you become a true lycanthrope. If you are already a true lycanthrope, you gain a +2 bonus to your Dexterity score and a 10-foot increase to your base speed in your hybrid or animal form.` },
    { tier: 3, description: `3: Lupine Champion (Su) You can use your lycanthropic change shape ability as a swift action. You become a true lycanthrope if you were an afflicted lycanthrope. If you are already a true lycanthrope, your natural armor bonus increases by 2 in your hybrid and animal form, or it increases by 6 when you’re not wearing armor. In addition, you gain the pounce ability when in your hybrid form (whether you are a true lycanthrope or not), but only when you make attacks with natural weapons.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const jubilex: DeityEntry = {
  id: 'jubilex',
  name: 'Jubilex',
  title: 'The Faceless Lord',
  alignment: 'CE',
  portfolio: `Ooze, poison, sloth`,
  domains: ['chaos', 'destruction', 'evil', 'water'],
  subdomains: ['catastrophe', 'chaos-demon', 'evil-demon', 'flotsam', 'rage'],
  favoredWeapon: 'Heavy mace',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Melting red eye`,
  sacredColors: ['green', 'red'],
  boons: {
    obedienceRequirement: `Submerge a small, severed piece of a human body in a vial of acid and chant praise to Jubilex as the flesh dissolves. Gain a +4 profane bonus on all saving throws against poison.`,
    evangelist: [
    { tier: 1, description: `1: Spreading Slime (Sp) corrosive touch 3/day, web 2/day, or stinking cloud 1/day` },
    { tier: 2, description: `2: Deliquescent Blessing (Su and Sp) The blessing of the Faceless Lord grants you a measure of kinship to jellies, oozes, and slimes. Unintelligent oozes never attack you, and intelligent oozes have an initial starting attitude of friendly toward you. You gain ooze empathy—this works like a druid’s wild empathy (using your character level as your druid level), except only with oozes. You can use this ability to influence intelligent oozes as though using the Diplomacy skill. In addition, once per day, you can transform a creature’s body into an ooze; this acts as per baleful polymorph, except that the target is transformed into an ooze. A creature of 3 Hit Dice or fewer becomes a gray ooze, one with 4–9 Hit Dice becomes a gelatinous cube or ochre jelly (chosen randomly), and a creature of 10 or more Hit Dice becomes a black pudding. The target’s gear does not transform with it; any such items fall under or within the ooze’s body, which may cause them to take damage or to be destroyed. If the ooze has the split ability, splitting the ooze creates one ooze that retains the creature’s original identity (for the purpose of memories or restoring the creature) and one normal, mindless ooze.` },
    { tier: 3, description: `3: Faceless Form (Ex) Your form twists into a reflection of Jubilex’s own shapeless appearance—your flesh becomes translucent emerald slime, your skin takes on a nauseating glistening sheen, and ogling crimson eyes sprout across your body. You gain the amorphous, all-around vision, and compression universal monster abilities. Your body still retains enough rigidity that you can speak, wield objects and weapons, and wear items like armor. In addition, if you have a hand free and not covered by a glove, you can make a touch attack as a standard action; on a hit, the touched creature takes 4d6 points of acid damage.` },
    ],
    exalted: [
    { tier: 1, description: `1: Sign of the Faceless Lord (Sp) grease 3/day, delay poison 2/day, or slow 1/day` },
    { tier: 2, description: `2: Poisonous Touch (Sp) Just as the Faceless Lord’s touch carries within it all manner of virulent toxins, so can you cause your flesh to exude deadly poison. Up to three times per day, you can cast poison as a spell-like ability. If you make an attack with a melee weapon, you can activate this ability as a swift action as part of your attack, targeting the foe struck.` },
    { tier: 3, description: `3: Call Forth the Spawn (Sp) Three times per day, you can cast destruction as a spell-like ability. The body of a creature slain by this ability immediately transforms into an ochre jelly under your mental control. Ochre jellies created by this ability melt away into noxious residue after 1 hour.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Toxification (Sp) ray of sickening 3/day, pernicious poison 2/day, or eruptive pustules 1/day` },
    { tier: 2, description: `2: Abyssal Humors (Ex and Su) The sickness of the Undersump has infused your flesh, and you spread its horror with every crushing blow. You gain immunity to poison. Three times per day, as a swift action, you can exude a poison worth up to 50 gp per character level you have. This poison remains potent for 1 hour before turning to gritty dust. You can apply this poison to a weapon you wield as part of exuding it, deliver it as a contact poison with a touch, exhale it as an inhaled poison into an adjacent creature’s face, or otherwise use this poison as you choose.` },
    { tier: 3, description: `3: Roiling Mind (Su) Your mind becomes the churning blankness of a mindless ooze, thick with a psychic toxin that poisons those who reach inside. You gain immunity to mind-affecting effects.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const kabriri: DeityEntry = {
  id: 'kabriri',
  name: 'Kabriri',
  title: 'Him Who Gnaws',
  alignment: 'CE',
  portfolio: `Ghouls, graves, secrets kept by the dead`,
  domains: ['chaos', 'death', 'evil', 'knowledge'],
  subdomains: ['chaos-demon', 'evil-demon', 'memory', 'murder', 'undead'],
  favoredWeapon: 'Flail',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Skull bowl of maggots`,
  sacredAnimal: `Grave worms`,
  sacredColors: ['blue', 'ivory'],
  boons: {
    obedienceRequirement: `You must partake of a cannibal feast; the body upon which you feed must either be at least a week old or be eaten while atop a grave. Gain a +4 profane bonus on all saving throws against paralysis and against disease effects from undead.`,
    evangelist: [
    { tier: 1, description: `1: Shadow of Death (Sp) chill touch 3/day, gentle repose 2/day, or assume appearance 1/day` },
    { tier: 2, description: `2: Corpse Communion (Sp) You can rifle through the minds of the dead in search of forbidden knowledge or lost lore. Three times per day, you can touch a corpse of any age to gain knowledge from it as a standard action. This works similarly to speak with dead, except that you receive all answers immediately and telepathically (removing the need for the body to have intact vocal structures) and the dead creature gains no saving throw against this effect, regardless of its alignment. If you take the time to consume a significant portion of the corpse, you can ask two additional questions. This option increases the casting time to 10 minutes. Of course, regardless of the method by which you choose to commune with the corpse, the body might not hold the knowledge you seek, and once you use this ability on a dead body, you can’t use it again on the same body again in the future.` },
    { tier: 3, description: `3: Lore of the Countless Dead (Sp) Your hunger for forbidden knowledge allows you to tap into the collective spellcraft of all the multiverse’s innumerable dead, a repository of arcana stretching back to the dawn of time. Once per day as a standard action, you can cast any spell of 7th level or lower, as if using wish to cast another spell. This is the equivalent of a 9th-level spell, and any DCs and other effects are calculated as a 9th-level spell, regardless of the spell’s normal level.` },
    ],
    exalted: [
    { tier: 1, description: `1: Kiss of the Grave (Sp) deathwatch 3/day, ghoul touch 2/day, or speak with dead 1/day` },
    { tier: 2, description: `2: Undead Minion (Sp) Worship of Kabriri has revealed to you secret methods by which you can coax unlife from rotten flesh and old bones. You can cast create undead as a spell-like ability twice per day. The undead created obey you without question. You can have only one such minion active at a time; if you use this ability to create a new undead minion, the previous undead is destroyed.` },
    { tier: 3, description: `3: Ghoulish Apotheosis (Ex) For you, death is not an ending but a beginning. The next time you die, you rise as a ghoul after 24 hours. Your type changes to undead and you lose all the abilities of your previous race, replacing them with a +2 natural armor bonus, darkvision 60 feet, channel resistance +2, and a ghoul’s physical attacks. You do not change your total Hit Dice or alter your ability scores. If you achieve this boon when you’re already an undead creature, you instead gain a +4 profane bonus to your Charisma score.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Charnel Pits (Sp) expeditious excavation 3/day, create pit 2/day, or stinking cloud 1/day` },
    { tier: 2, description: `2: Ghoulish Hungers (Ex) You hunger for the flesh of the dead... and the living. You gain a bite attack that deals damage appropriate for your size (1d6 if you’re Medium). Any creature damaged by your bite attack must succeed at a Fortitude save or become infected with ghoul fever. The save DC of this ghoul fever is equal to 10 + half your Hit Dice + your Constitution modifier (or your Charisma modifier, if you have no Constitution score).` },
    { tier: 3, description: `3: Undertaker (Sp) With nothing but your will alone, you can slaughter and entomb your foes in one fell swoop. Once per day, you can cast finger of death as a spell-like ability. Any creature killed by this effect is immediately entombed 6 feet underground within a 6-inch-thick stone sarcophagus, along with its gear. One week after interment, a creature entombed by this ability breaks free from its sarcophagus as a chaotic evil ghast with all class levels it had in life; these ghasts are not under your control, but are often friendly toward you.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const kostchtchie: DeityEntry = {
  id: 'kostchtchie',
  name: 'Kostchtchie',
  title: 'The Deathless Frost',
  alignment: 'CE',
  portfolio: `Cold, giants, revenge`,
  domains: ['chaos', 'evil', 'strength', 'war'],
  subdomains: ['chaos-demon', 'evil-demon', 'ferocity', 'ice', 'tactics'],
  favoredWeapon: 'Warhammer',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Icy rune-carved hammer`,
  sacredAnimal: `Polar bear`,
  sacredColors: ['blue', 'white'],
  boons: {
    obedienceRequirement: `Spill the blood of a living creature onto snowcovered ground; the creature must remain alive during the entire obedience, and must die within a minute of the obedience’s end. Gain a +4 bonus on all saving throws against cold.`,
    evangelist: [
    { tier: 1, description: `1: Frozen Vengeance (Sp) frostbite 3/day, chill metal 2/day, or unadulterated loathing 1/day` },
    { tier: 2, description: `2: Deathless Vengeance (Sp) After you are slain, you will not rest until your killer is dragged shrieking into death with you. One round after your demise, your soul rises from your corpse and instantly seeks out your killer. This acts as per phantasmal revenge, except this is a necromancy effect with the death descriptor instead of the spell’s normal school, subschool, and descriptors.` },
    { tier: 3, description: `3: Eternal Vengeance (Sp) While Kostchtchie’s centuries of labor have brought him no closer to discovering the legendary torc that holds his cloven soul, he has learned much about the manner in which his soul was captured, and he gifts you with a fragment of that knowledge. Once per day, when you are the target of an attack or spell that would either kill you or render you helpless, you can target your attacker with a trap the soul spell as an immediate action after you resolve the effects of the attack on yourself (even if you are dead when this effect occurs). Instead of a gemstone, you must be carrying a piece of jewelry (such as a bracelet, ring, or torc) of adequate value to contain the target’s soul. (Value derived from magical properties counts for this purpose.) A single piece of jewelry can hold only one soul, but if you are restored to life, you can release a trapped individual as a standard action by holding the jewelry out before you, which causes the target to reappear prone in that square. A creature released this way is stunned for 1d4 rounds.` },
    ],
    exalted: [
    { tier: 1, description: `1: Frozen Wrath (Sp) chill touch 3/day, bull’s strength 2/day, or sleet storm 1/day` },
    { tier: 2, description: `2: Cold’s Caress (Ex) Your lord’s realm is a perpetually frozen landscape, and in unholy anticipation of taking your rightful place in that land your body has begun to adapt and change. You gain cold resistance 30. If you are immune to cold, or gain immunity to cold at a point after you gain this boon, you instead gain fire resistance 30.` },
    { tier: 3, description: `3: Wrath of Frost (Sp) Regardless of your true form, you see purity and power in the hulking shape of all giants. As a reward for your faith and devotion, you have gained the ability to cast giant form I as a spell-like ability once per day. Three times during this ability’s duration, you can cast empowered cone of cold as a spell-like ability.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Giant’s Might (Sp) enlarge person 3/day, bear’s endurance 2/day, or force punch 1/day` },
    { tier: 2, description: `2: Twisted Grasp (Ex) Your arms become longer, nearly dragging the ground when you walk, and appear to be bloated with unnatural muscle. You gain a slam attack that deals damage as appropriate for a creature one size category larger than yourself (1d8 for a Medium creature). If you already have one or more slam or claw attacks, those attacks deal damage as though you were one size category larger. This does not affect the size of manufactured weapons you can wield, but you gain a +2 bonus on damage rolls with manufactured melee weapons.` },
    { tier: 3, description: `3: Titan Shape (Sp) Through the blessing of the Deathless Frost, you can swell to giant size and crush your enemies with your titanic might. You can cast extended giant form II once per day as a spell-like ability. While under this effect, your gear resizes to fit your giant form. You can use this ability to assume a Huge-sized form of a giant that normally isn’t Huge, such as a frost giant.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const mazmezz: DeityEntry = {
  id: 'mazmezz',
  name: 'Mazmezz',
  title: 'The Creeping Queen',
  alignment: 'CE',
  portfolio: `Bindings, driders, vermin`,
  domains: ['animal', 'chaos', 'destruction', 'evil'],
  subdomains: ['catastrophe', 'chaos-demon', 'evil-demon', 'insect', 'rage', 'venom'],
  favoredWeapon: 'Net',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Skull in spiderweb`,
  sacredAnimal: `Spider`,
  sacredColors: ['black', 'white'],
  boons: {
    obedienceRequirement: `Bind a living creature so only a few key portions of anatomy (such as the belly, mouth, or eyes) remain exposed, allowing you to torment these exposed areas with needles, tiny knives, or poisonous vermin. Gain a +4 profane bonus on grapple checks and to CMD.`,
    evangelist: [
    { tier: 1, description: `1: Webspinner (Sp) web bolt 3/day, web shelter 2/day, or vermin shape I 1/day` },
    { tier: 2, description: `2: Blessing of the Creeping Queen (Ex) The dreams you experience of becoming one with the Creeping Queen finally manifest in reality with a welcome change to your form. Your lower half swells into a bloated spider’s body, complete with eight spindly legs and dripping spinnerets. You become one size category larger, but your reach and the size of weapons you wield do not change. You gain the web universal monster ability (usable seven times per day) and a climb speed of 20 feet. You gain darkvision with a range of 60 feet (or the range of your existing darkvision increases by 30 feet). Finally, you gain a permanent +2 bonus to your Strength, Dexterity, or Constitution score (your choice).` },
    { tier: 3, description: `3: Arachnidal Rebirth (Su) The Creeping Queen often uses the bodies of her victims as sources of nourishment for her brood, and the monstrosities that hatch from her corpse-implanted eggs often incorporate elements of the body in which they were birthed. In emulation of this horrific method of reproduction, you have been granted the ability to curse a foe to rebirth itself—when you do so, its new and horrible form bursts from the husk of its old flesh. This works like the witch’s forced reincarnation hex, but instead of becoming a random race, the creature’s new body is that of a spider of its original size category with the head of its original form. As with reincarnate, a rebirthed creature can be returned to its original form only through a wish or miracle spell. This ability can be used once per day, and a successful Fortitude save (DC = 10 + half your Hit Dice + your Charisma modifier) negates this effect. If you have the hex or hex arcana class feature, you can use the DC for your hexes instead.` },
    ],
    exalted: [
    { tier: 1, description: `1: Mazmezz’s Embrace (Sp) animate rope 3/day, web 2/day, or snare 1/day` },
    { tier: 2, description: `2: Spider’s Blessing (Sp) Through study of eldritch patterns in the webs spun by spiders influenced by the Abyss, you have unlocked in your mind a pair of magical powers associated with the Creeping Queen you adore so. You can cast poison and vermin shape II once per day each as spell-like abilities.` },
    { tier: 3, description: `3: Temporal Web (Sp) As you continue to study the patterns and twists in Abyssally influenced spiderwebs, you unlock a greater magical talent within yourself and can use webbing to trap a victim in place and outside of time’s flow itself. Once per day, you can cast temporal stasis heightened to function as a 9th-level spell. The target of this ability appears to be wrapped tightly in spiderwebs. You can maintain up to three targets in temporal webs at a time; if you use this ability on a fourth target, you must select one of the other three targets to immediately release.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Adhesive Arcana (Sp) adhesive spittle 3/day, spider climb 2/day, or slow 1/day` },
    { tier: 2, description: `2: Caught in the Web (Sp) You can call out to Mazmezz to wrap your foes in paralytic webs. Three times per day, you can cast quickened web as a spell-like ability.` },
    { tier: 3, description: `3: Trapped Like Flies (Su) If a target begins a turn entangled in a web you created, it must succeed at a Fortitude save (DC = 10 + half your Hit Dice + your Charisma modifier) or take 1d6 points of Strength drain. This is a poison effect.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const mestama: DeityEntry = {
  id: 'mestama',
  name: 'Mestama',
  title: 'The Mother of Witches',
  alignment: 'CE',
  portfolio: `Cruelty, deception, hags`,
  domains: ['chaos', 'charm', 'evil', 'trickery'],
  subdomains: ['deception', 'chaos-demon', 'evil-demon', 'lust', 'thievery'],
  favoredWeapon: 'Punching dagger',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Eye on three sharp stones`,
  sacredAnimal: `Black widow`,
  sacredColors: ['black', 'red'],
  boons: {
    obedienceRequirement: `Perform an act of cruelty upon a nonbeliever of Mestama after spending an hour observing the nonbeliever— preferably from a vantage unknown by the vicitm. This act must, at the very least, incite the victim to tears or anger. Gain a +4 profane bonus on saves against illusions.`,
    evangelist: [
    { tier: 1, description: `1: Deceiver (Sp) silent image 3/day, invisibility 2/day, or glibness 1/day` },
    { tier: 2, description: `2: Covenant of Three (Su or Sp) You may not be a hag, but you can wield hags’ power in conjunction with your sisters. You count as a hag for the purpose of forming a coven. You can be part of a coven only if it has no male members. If you are already a hag (or already count as one for the purpose of forming a coven), you can use project image once per day as a spell-like ability.` },
    { tier: 3, description: `3: Black Magic (Su) The Mother of Witches imbues you with the darkest power of witchcraft. You gain a grand hex, chosen from any of those available to witches. This hex’s DC is equal to 10 + half your level + your Intelligence, Wisdom, or Charisma modifier (whichever is highest); if you are a witch, you can use your hexes’ DC instead. If you are not a witch or a hag, you can use this hex only once per day.` },
    ],
    exalted: [
    { tier: 1, description: `1: Witch’s Trick (Sp) disguise self 3/day, misdirection 2/day, or bestow curse 1/day` },
    { tier: 2, description: `2: Elder’s Grace (Ex) You immediately age to the next age category, gaining all of the appropriate bonuses to your mental ability scores without taking any penalties to your physical ability scores. If you are venerable when you achieve this boon, you die and become a ghost. Any illusion effect you create gains a +2 profane bonus to the save DC. This transformation into a ghost persists even if you fail to perform your obedience.` },
    { tier: 3, description: `3: Shriek of the Damned (Sp) Once per day, you can cast wail of the banshee as a spell-like ability.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Tormentor’s Invocation (Sp) ill omen 3/day, blindness/deafness 2/day, or pain strike 1/day` },
    { tier: 2, description: `2: Widow’s Cruelty (Ex or Su) Mestama grants you a form meant to beguile and slay, as well as the power to join a witch coven. You count as a hag for the purpose of forming a coven. In addition, your nails become razor sharp, granting you two natural claw attacks that deal damage appropriate to your size (1d4 for a Medium creature). If you already had claw attacks, those attacks deal damage as though you were one size larger instead. You become female (if you weren’t already) and physically attractive; depending on how drastic the changes are, you may or may not still be recognizable as your former self. Hags do not become physically attractive in this way.` },
    { tier: 3, description: `3: Maiming Strike (Su) With a single ripping claw, you destroy a creature’s virility and wreck its physical and magical potency. Three times per day, you can make a single claw attack as a standard action. In addition to taking normal claw damage, the creature struck must succeed at a Fortitude save (DC = 10 + half your Hit Dice + your Strength or Dexterity modifier, whichever is higher) or become permanently mutilated in a physical and spiritual way. The victim takes a –6 penalty to its Strength, Dexterity, or Constitution score (chosen by you) and on caster level checks, concentration checks, and spell penetration checks. The victim can no longer sire or birth children. This is a curse effect.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const nocticula: DeityEntry = {
  id: 'nocticula',
  name: 'Nocticula',
  title: 'Our Lady in Shadow',
  alignment: 'CE',
  portfolio: `Assassins, darkness, lust`,
  domains: ['chaos', 'charm', 'darkness', 'evil'],
  subdomains: ['chaos-demon', 'evil-demon', 'loss', 'lust', 'night', 'darkness-shadow'],
  favoredWeapon: 'Hand crossbow',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Thorny pointed crown`,
  sacredAnimal: `Bat`,
  sacredColors: ['black', 'pink'],
  boons: {
    obedienceRequirement: `Ingest a dose of psychedelic plants or fungi and engage in any number of sexual acts (either alone or with others), during which at least a pint of blood must be shed. Gain a +4 profane bonus on saves against blindness and charm effects.`,
    evangelist: [
    { tier: 1, description: `1: Kiss of the Succubus (Sp) unnatural lust 3/day, detect thoughts 2/day, or vampiric touch 1/day` },
    { tier: 2, description: `2: Tempting Flesh (Su) You can shape your flesh into seductive forms. You gain the change shape universal monster ability, usable once per day as a standard action, allowing you to take the shape of any Small or Medium humanoid. Your natural form becomes beautiful and sexually appealing, and you gain horns, a pointed tail, and small wings. While in your natural form, you gain a tiefling’s darkvision and fiendish resistance racial traits as well as the prehensile tail and vestigial wings alternate racial traits. If you’re already a tiefling, you gain a +2 bonus to Charisma instead of these additional tiefling traits. In any form, you gain a +4 bonus on Bluff checks to deceive or lie.` },
    { tier: 3, description: `3: Deadly Caress (Su) Like with a succubus, romantic or sexual contact with you can be deadly. When you engage in an act of passion (such as a kiss) with another creature, you bestow one negative level upon that creature. You must grapple an unwilling creature to use this ability on them. Such an act of passion also has the effect of a suggestion spell asking the victim to accept another act of passion. The DC of this suggestion, as well as the DC to remove any negative levels bestowed this way, is equal to 10 + half your Hit Dice + your Charisma modifier. You can initially activate this ability only once per day, but once you do so to target a specific creature, you can affect that creature with this ability at will.` },
    ],
    exalted: [
    { tier: 1, description: `1: The Lady’s Charms (Sp) charm person 3/day, darkness 2/day, or suggestion 1/day` },
    { tier: 2, description: `2: Instant Blindness (Sp) Three times per day, you can cast quickened blindness/deafness as a spell-like ability.` },
    { tier: 3, description: `3: Dominate Thrall (Sp) Once per day, you can cast dominate monster as a spell-like ability. You can have only one creature dominated at a time via this effect, but the effects are permanent until you dominate a new target, at which point the previous target is released from domination but is stunned for 1d4 rounds.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Murder Walks Unseen (Sp) vanish 3/day, invisibility 2/day, or twilight knife 1/day` },
    { tier: 2, description: `2: Right behind You (Ex) You gain sneak attack +2d6; this stacks with sneak attack dice from other sources. Whenever you make a sneak attack against a creature that is aware of your presence and considers you an ally, your sneak attack dice are increased to d10s; this applies to both sneak attack dice gained through this boon and those from other sources.` },
    { tier: 3, description: `3: Death Is But a Word (Sp) Your devotion to Nocticula is rewarded with a single whisper from her lips to your ear alone, revealing one of the countless words Our Lady in Shadow knows to cause death. Each of her worshipers receives a unique word. When you learn it, you can use the word to cast power word kill as a spell-like ability once per day.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const nurgal: DeityEntry = {
  id: 'nurgal',
  name: 'Nurgal',
  title: 'The Shining Scourge',
  alignment: 'CE',
  portfolio: `Deserts, senseless warfare, the sun`,
  domains: ['chaos', 'evil', 'fire', 'sun'],
  subdomains: ['ash', 'day', 'chaos-demon', 'evil-demon', 'smoke', 'thirst'],
  favoredWeapon: 'Heavy mace',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Lion jaws around the sun`,
  sacredAnimal: `Lion`,
  sacredColors: ['yellow', 'orange'],
  boons: {
    obedienceRequirement: `Offer prayers to Nurgal during an hour-long ritual of self-flagellation with a salt-encrusted whip—the ritual must end at noon. If this obedience does not take place under the light of the sun, you must end the ritual by swallowing a handful of sand and salt. Gain a +4 profane bonus on all Fortitude saving throws against effects that cause fatigue or exhaustion, or that damage, drain, or penalize ability scores.`,
    evangelist: [
    { tier: 1, description: `1: Sun’s Wrath (Sp) burning hands 3/day, flaming sphere 2/day, or searing light 1/day` },
    { tier: 2, description: `2: High Noon (Su) Nurgal’s guidance sharpens your aim and steadies your hand, allowing you to make otherwise impossible attacks. Three times per day as a move action, you can use this power to improve the next melee or ranged attack you make during your turn; if you are in an area of bright light, you can instead use this ability as a swift action. For the purpose of this enhanced attack, you are treated as if you had true seeing against the target. If the target of the attack is within 30 feet, your enhanced attack targets the creature’s touch AC. If this attack is made using a firearm, the result is never a misfire, regardless of the attack roll. If the attack threatens a critical hit, the critical threat is automatically confirmed. Any attack that hits threatens a critical hit that must be confirmed as normal. If you hit the target and deal damage, the creature must attempt a Fortitude save (DC = 10 + half your Hit Dice + your Strength modifier) or be staggered for 1d3 rounds.` },
    { tier: 3, description: `3: Solar Weaponry (Sp) You strike with the power of the sun, channeling its deadly light through your weapons. As a swift action up to three times per day, you can transform your weapon into raw energy for 3 rounds, giving it the qualities of a brilliant energy weapon. Any creature struck by your weapon must succeed at a Fortitude saving throw (DC = 10 + half your Hit Dice + your Charisma modifier) or be permanently blinded. Unlike normal brilliant energy weapons, this weapon is made of pure sunlight and can harm undead creatures normally. Against undead foes that are particularly vulnerable to sun, the weapon also functions as a disrupting weapon.` },
    ],
    exalted: [
    { tier: 1, description: `1: Desert’s Embrace (Sp) endure elements 3/day, scorching ray 2/day, or daylight1/day` },
    { tier: 2, description: `2: Nurgal’s Breath (Sp) You can cast sunbeam as a spell-like ability once per day. The beam of sunlight you create with this ability issues from your open mouth.` },
    { tier: 3, description: `3: Desiccating Pulse (Sp) You can cast horrid wilting three times per day as a spell-like ability.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Lord of War (Sp) divine favor 3/day, tactical acumen 2/day, or deadly juggernaut 1/day` },
    { tier: 2, description: `2: Acceptable Losses (Su) The most important responsibility of your minions is ensuring your survival on the battlefield. Once per day as an immediate action, when you are hit by an attack or affected by a spell or effect, you can transfer its effects to a creature within 30 feet. This creature must be one that is under your control or command or that otherwise considers itself subordinate to you. You suffer no effects from a transferred effect. If the effect is one that affects multiple creatures (such as horrid wilting or a breath weapon), the recipient of the transfer can suffer its effects twice. You can decide to transfer the effect or attack after the results of the attack rolls or saving throws have been revealed.` },
    { tier: 3, description: `3: Avatar of Strife (Sp) You can call upon the Shining Scourge to fill you with his burning light, which spreads mindless warfare everywhere you go. Once per day as a standard action, you can begin radiating an aura of blazing light equivalent to that created by daylight, lasting 1 round per Hit Die. Any creature within 60 feet of you must succeed at a Will save (DC = 10 + half your Hit Dice + your Charisma modifier) at the start of its turn or be compelled to attack the nearest conscious creature that round (similar to the “attack nearest creature” result of the confusion spell). Worshipers of Nurgal are immune to this effect. As a swift action, you can command a creature affected by your aura to direct its attacks against a creature of your choice within the effect’s 60-foot area; this designation lasts until the effect ends.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const orcus: DeityEntry = {
  id: 'orcus',
  name: 'Orcus',
  title: 'Prince of Undeath',
  alignment: 'CE',
  portfolio: `Death, necromancy, wrath`,
  domains: ['chaos', 'death', 'evil', 'magic'],
  subdomains: ['chaos-demon', 'evil-demon', 'divine', 'murder', 'undead'],
  favoredWeapon: 'Heavy mace',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Four-horned goat head`,
  sacredAnimal: `Goat`,
  sacredColors: ['ivory', 'red'],
  boons: {
    obedienceRequirement: `Grind a half-pound of bones from the skeleton of a sentient creature, mix with water to create a gray paste, and then eat it at the end of a long recitation of prayers to Orcus. Gain a +4 profane bonus on all saving throws against death and negative energy effects.`,
    evangelist: [
    { tier: 1, description: `1: Power of Death (Sp) inflict light wounds 3/day, death knell 2/day, or animate dead 1/day` },
    { tier: 2, description: `2: Destined for Undeath (Su) Your soul is tainted with the essence of undeath. You are damaged by positive energy and healed by negative energy, as if you were undead; the bonus on saving throws granted by your obedience applies against positive energy effects instead of negative energy effects (you retain the bonus on saving throws against death effects). In addition, you gain immunity to exhaustion, fatigue, and nonlethal damage, and you gain a +4 bonus on saving throws against death effects, diseases, mind-affecting effects, paralysis, poisons, stunning, and effects that cause damage, drain, or penalties to your physical ability scores.` },
    { tier: 3, description: `3: Word of Finality (Sp) With a single word of unfathomably dark power, you can invoke a concentrated upsurge of negative energy within a living target’s body, snuffing out a creature’s life force with horrific speed. Once per day, you can cast power word kill as a spell-like ability. This is a necromancy (death) effect instead of an enchantment (compulsion) [mind-affecting] effect.` },
    ],
    exalted: [
    { tier: 1, description: `1: Necromancer’s Secrets (Sp) detect undead 3/day, command undead 2/day, or vampiric touch 1/day` },
    { tier: 2, description: `2: Invoke Death (Sp) Once per day, you can cast slay living as a spell-like ability. A creature slain by this spell immediately rises from death as a juju zombie. The juju zombie is not under your control, but it will not attack you.` },
    { tier: 3, description: `3: Call the Dead (Sp) Once per day, you can summon a nightwing, 1d3 devourers, or 1d4+1 advanced mohrgs as if you had cast summon monster IX.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Abyssal Rage (Sp) doom 3/day, sound burst 2/day, or rage 1/day` },
    { tier: 2, description: `2: Aspect of the Prince (Sp) You can take on a form resembling that of the Prince of Undeath himself. You can cast divine vessel once per day as a spell-like ability, but only to assume a fiendish aspect. Instead of gaining two claw attacks from this fiendish aspect, you gain a gore attack that deals 2d6 points of damage.` },
    { tier: 3, description: `3: Wand of Orcus (Sp) Like the legendary Wand of Orcus, you can cause your mace to inflict instant death upon those it strikes. Once per day as a swift action upon successfully hitting a creature with a melee attack with a heavy mace, you can cast slay living on that creature. You must be wielding a heavy mace when you utilize this ability—while the heavy mace can itself be magical, it can’t be one that bears any form of lawful or good magic (such as a holy weapon) or one that has particular power over undead (such as an undead bane or disrupting weapon).` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const pazuzu: DeityEntry = {
  id: 'pazuzu',
  name: 'Pazuzu',
  title: 'King of the Wind Demons',
  alignment: 'CE',
  portfolio: `The sky, temptation, winged creatures`,
  domains: ['air', 'chaos', 'evil', 'trickery'],
  subdomains: ['cloud', 'deception', 'chaos-demon', 'evil-demon', 'wind'],
  favoredWeapon: 'Longsword',
  allowedClericAlignments: ['CN', 'NE', 'CE'],
  symbol: `Himself, right hand raised`,
  sacredAnimal: `All flying animals`,
  sacredColors: ['brown', 'red'],
  boons: {
    obedienceRequirement: `String up the intestines of a freshly killed creature somewhere that will attract the attention of hungry birds (such as the branches of a tree or the crenellations of a tower), then meditate on the offering. Gain a +4 profane bonus on all saving throws against effects from flying creatures and compulsion effects.`,
    evangelist: [
    { tier: 1, description: `1: Pazuzu’s Voice (Sp) lesser confusion 3/day, honeyed tongue 2/day, or suggestion 1/day` },
    { tier: 2, description: `2: Siren of the Skies (Ex) Your form becomes avian in aspect—your hair transforms into a mane of feathers, feathered wings sprout from your back, and your face takes on a birdlike profile with a hooked nose and chin. Your new wings grant you a fly speed equal to your base speed (good maneuverability). In addition, your voice becomes sweet and melodic, with an astonishing range. You gain a +4 bonus on Perform (oratory) and Perform (sing) checks, and the save DCs of language-dependent or sonic effects you create increase by 1. When you must attempt opposed Charisma checks against a charmed subject to convince it to do something it wouldn’t ordinarily do, you can roll twice and take the result you prefer as your actual result.` },
    { tier: 3, description: `3: Avian Mastery (Su) Any creature flying under its own power (flight from a source other than a spell, spell-like ability, or magic item) that attempts to attack you with a melee attack must attempt a Will save (DC = 10 + half your Hit Dice + your Charisma modifier). If the creature fails, it can’t follow through with the attack, that part of its action is lost, and it can’t directly attack you for the remainder of the round. Once a creature succeeds at this save, it is immune to this ability for 24 hours.` },
    ],
    exalted: [
    { tier: 1, description: `1: Whispers on the Wind (Sp) charm person 3/day, enthrall 2/day, or fly 1/day` },
    { tier: 2, description: `2: Possession (Sp) You can cast possession three times per day as a spell-like ability.` },
    { tier: 3, description: `3: True Temptation (Sp) If any creature speaks Pazuzu’s name aloud three times with a single breath, and that creature is within 60 feet of you, you can cast charm monster on that creature as an immediate action. You can use this spell-like ability up to three times per day. Creatures with fly speeds take a –4 penalty on saving throws against this effect. If a creature that fails its save against this effect is under the benefits of protection from evil or a similar effect, that effect is immediately and automatically dispelled. You can use this ability against a creature that has not invoked Pazuzu’s name, but if you do so, it functions as a normal (non-quickened) charm monster spell that does not dispel protection from evil effects.` },
    ],
    sentinel: [
    { tier: 1, description: `1: Master of Air (Sp) feather fall 3/day, gust of wind 2/day, or wind wall 1/day` },
    { tier: 2, description: `2: The Wind, My Shield (Su) A cylinder of swirling wind constantly surrounds you, an effect you can dismiss or reactivate as a free action. While this effect is active, you gain a +4 deflection bonus to Armor Class, and all ranged attacks against you suffer a 50% miss chance. These supernatural winds can even deflect ranged touch spell effects (such as rays) and massive ranged weapons such as ballista bolts or thrown boulders. As a standard action, you can also direct these winds to assail a creature within 30 feet; this acts as a bull rush or trip attempt, using your Constitution modifier in place of your Strength modifier. You can maintain this wind shield for a number of rounds per day equal to your Hit Dice, but these rounds need not be consecutive.` },
    { tier: 3, description: `3: Champion of Shibaxet (Sp) The King of the Wind Demons grants you mastery over the power of the winds. You can cast winds of vengeance as a spell-like ability once per day.` },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const batch_018: DeityEntry[] = [jezelda, jubilex, kabriri, kostchtchie, mazmezz, mestama, nocticula, nurgal, orcus, pazuzu];