// Batch 002 | first: 'Aasimar' | last: 'Ifrit' | races: 8 | traits: 72
// Source: d20pfsrd featured-races pages (Advanced Race Guide & related Paizo books).
// Descriptions copied verbatim from d20pfsrd; replaces arrays parsed from the
// "This racial trait replaces X" clauses.
import { AlternativeRacialTraitData } from '../types';

export const aasimarAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Celestial Crusader',
    description:
      'Some aasimars follow their destiny to war against the powers of ultimate evil. These individuals gain a +1 insight bonus on attack rolls and to AC against evil outsiders and a +2 racial bonus on Knowledge (planes) and Spellcraft checks to identify evil outsiders or items or effects created by evil outsiders; they may use these skills untrained for this purpose. This racial trait replaces celestial resistance and skilled.',
    replaces: ['celestial resistance', 'skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Crusading Magic',
    description:
      'Many aasimars feel obligated to train to defend the world against fiends. These aasimars gain a +2 racial bonus on caster level checks to overcome spell resistance and on Knowledge (planes) checks. This racial trait replaces the skilled and spell-like ability racial traits.',
    replaces: ['skilled', 'spell-like ability'],
    source: 'Blood of Angels',
  },
  {
    name: 'Deathless Spirit',
    description:
      'Particularly strong-willed aasimars possess celestial spirits capable of resisting the powers of death. They gain resistance 5 against negative energy damage. They do not lose hit points when they gain a negative level, and they gain a +2 racial bonus on saving throws against death effects, energy drain, negative energy, and spells or spell-like abilities of the necromancy school. This racial trait replaces celestial resistance.',
    replaces: ['celestial resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Exalted Resistance',
    description:
      'An aasimar with this racial trait gains spell resistance (SR) equal to 5 + her level against spells and spell-like abilities with the evil descriptor, as well as any spells and spell-like abilities cast by evil outsiders. This racial trait replaces celestial resistance.',
    replaces: ['celestial resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Halo',
    description:
      'Some aasimars possess the ability to manifest halos. An aasimar with this racial trait can create light centered on her head at will as a spell-like ability. When using her halo, she gains a +2 circumstance bonus on Intimidate checks against evil creatures and on saving throws against becoming blinded or dazzled. This racial trait replaces the darkvision standard racial trait.',
    replaces: ['darkvision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heavenborn',
    description:
      'Born in the celestial realms, aasimars with this racial trait gain a +2 bonus on Knowledge (planes) checks and they cast spells with the good or light descriptor at +1 caster level. This racial trait replaces the skilled and spell-like ability racial traits.',
    replaces: ['skilled', 'spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Immortal Spark',
    description:
      'Aasimars with this racial trait defy the powers of death. They gain a +2 bonus on Knowledge (history) checks and saving throws against death effects and can use lesser age resistance once per day as a spell-like ability. This racial trait replaces the skilled and spell-like ability racial traits.',
    replaces: ['skilled', 'spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Incorruptible',
    description:
      'Occasionally, aasimars arise with the ability to further ward away evil. Aasimars with this racial trait can cast corruption resistance against evil once per day as a spell-like ability. If an aasimar uses this ability on herself, the duration increases to 1 hour per level. This racial trait replaces the spell-like ability racial trait.',
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Lost Promise',
    description:
      "While many view aasimars' beauty and celestial powers as a gift, in some communities an aasimar might be persecuted for being different and fall into darkness. The forces of evil delight in such a perversion of their celestial counterparts' gifts. As long as the aasimar retains an evil alignment, she gains the maw or claw tiefling alternate racial trait. This racial trait replaces the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Blood of Angels',
  },
  {
    name: 'Scion of Humanity',
    description:
      'Some aasimars’ heavenly ancestry is extremely distant. An aasimar with this racial trait counts as an outsider (native) and a humanoid (human) for any effect related to race, including feat prerequisites and spells that affect humanoids. She can pass for human without using the Disguise skill. This racial trait replaces the Celestial language and alters the native subtype.',
    replaces: ['Celestial language'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Truespeaker',
    description:
      'There are some aasimars whose language transcends all boundaries. They gain a +2 bonus on Linguistics and Sense Motive checks, and they learn two languages each time they gain a rank in Linguistics. This racial trait replaces skilled.',
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
];

export const catfolkAltTraits: AlternativeRacialTraitData[] = [
  {
    name: "Cat's Claws",
    description:
      'Some catfolk have stronger and more developed claws than other members of their race, and can use them to make attacks. Catfolk with this racial trait have a pair of claws they can use as natural weapons. These claws are primary attacks that deal 1d4 points of damage. This racial trait replaces natural hunter.',
    replaces: ['natural hunter'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Clever Cat',
    description:
      "Catfolk's generally friendly disposition doesn't preclude craftiness. Some of them see social obstacles as games to be played and won. These catfolk receive a +2 racial bonus on Bluff, Diplomacy, and Sense Motive checks. This racial trait replaces natural hunter.",
    replaces: ['natural hunter'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Climber',
    description:
      'Catfolk hunters excel at hunting prey from trees and other high vantage points. Catfolk with this racial trait possess a climb speed of 20 feet (along with the +8 racial bonus on Climb checks a climb speed affords). This racial trait replaces sprinter.',
    replaces: ['sprinter'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Curiosity',
    description:
      'Catfolk are naturally inquisitive about the world around them, though some are more curious than others. Such catfolk gain a +4 bonus on Diplomacy checks to gather information, and Knowledge (history) and Knowledge (local) are always class skills for them. If they choose a class that has either of these Knowledge skills as class skills, they gain a +2 racial bonus on those skills instead. This racial trait replaces natural hunter.',
    replaces: ['natural hunter'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Jungle Stalker',
    description:
      "Catfolk often live in deeply forested terrain and they have become naturally sure-footed to maintain their hunting prowess in these dangerous environments. Such catfolk gain a +2 racial bonus on Acrobatics checks and can ignore the first square of difficult terrain caused by foliage each round. This racial trait replaces cat's luck and sprinter.",
    replaces: ["cat's luck", 'sprinter'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Nimble Faller',
    description:
      'Some catfolk have an amazing sense of balance and keen knowledge of their own center of gravity. Catfolk with this trait land on their feet even when they take lethal damage from a fall. Furthermore, catfolk with this trait gain a +1 bonus to their CMD against trip maneuvers. This racial trait replaces sprinter.',
    replaces: ['sprinter'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Scent',
    description:
      'Some catfolk favor a keen sense of smell over sensitive sight. Catfolk with this racial trait gain the scent ability. This racial trait replaces the low-light vision racial trait.',
    replaces: ['low-light vision'],
    source: 'Advanced Race Guide',
  },
];

export const dhampirAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Dayborn',
    description:
      'A few fortunate dhampirs were born during the day under the blessings of priests, and their blood has weaker ties to their undead bloodline than others of their kind. Such dhampirs are unhindered by daylight and lose the light sensitivity racial trait. This racial trait replaces the spell-like ability racial trait.',
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fangs',
    description:
      "On occasion, a dhampir may inherit his father's lengthy canines. Whenever the dhampir makes a grapple combat maneuver check to damage an opponent, he can choose to bite his opponent, dealing 1d3 points of damage as if using a natural bite attack. As a standard action, the dhampir can bite a creature that is bound, helpless, paralyzed, or similarly unable to defend itself. This racial trait replaces the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heir to Undying Nobility',
    description:
      "Descended from undead nobility some dhampirs inherit a bit of their ancestors' ability to control living beings. They can use command and charm person each once per day. This racial trait replaces the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Vampire Hunter',
    description:
      'Some dhampirs bear a deep hatred for their undead progenitors and their kin that can never be fully quenched. They gain a +1 bonus on attack rolls against vampires. This racial trait replaces manipulative.',
    replaces: ['manipulative'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Vampiric Empathy',
    description:
      "Though dhampirs often relate poorly to humanoids, some share an affinity with baser creatures. These dhampirs gain the ability to communicate with bats, rats, and wolves as if under the effects of a speak with animals spell (caster level equal to 1/2 the dhampir's Hit Dice). In addition, they gain a +2 racial bonus on Diplomacy checks when dealing with these animals. Whenever these dhampirs initiate an exchange, animals begin with a starting attitude of indifferent. This is a supernatural ability. This racial trait replaces manipulative.",
    replaces: ['manipulative'],
    source: 'Advanced Race Guide',
  },
];

export const drowAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Ambitious Schemer',
    description:
      'Seduction and treachery are tools for advancement in drow society, even for the martially inclined. Drow with this racial trait may choose either Bluff or Diplomacy as a class skill, and gain a +2 bonus on such skill checks. This racial trait replaces keen senses.',
    replaces: ['keen senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Ancestral Grudge',
    description:
      'The enmity between the drow and elves and dwarves is long-standing and deeply entrenched. Drow with this racial trait gain a +1 bonus on attack rolls against humanoids with the dwarf or elf subtypes (with the exception of drow) because of their special training against these reviled foes. This racial trait replaces poison use.',
    replaces: ['poison use'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Blasphemous Covenant',
    description:
      'Since their twisted beginnings, the drow have consorted with demons. Some drow have strong ties with these creatures and may call upon ancient and obscene associations to sway demonic cooperation. Drow with this racial trait gain a +2 bonus on Diplomacy checks made against unbound creatures with the demon subtype. Furthermore, demons conjured with any summon spell gain +2 hit points per Hit Die. Lastly, the cost of bribes or offerings for any planar ally spell cast by these drow to summon a demon is reduced by 20%. This racial trait replaces keen senses and poison use.',
    replaces: ['keen senses', 'poison use'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Champion of Dark Powers',
    description:
      "Some drow offer themselves to dark patrons, particularly demon lords. Drow with this racial trait apply their spell resistance only against spells with the good or healing descriptor or against spells cast by a divine spellcaster who worships a good-aligned deity. Anytime a drow with this racial trait casts a spell with the evil descriptor, the DC to resist the spell's effects increases by 2. This modifies the spell resistance racial trait.",
    replaces: ['spell resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Defensive Training',
    description:
      'Many drow cities are frequently beset by attacks from aberrations, prompting the residents train themselves to defend against them. Drow gain a +4 dodge bonus to AC against aberrations. This racial trait replaces drow immunities, keen senses, and poison use.',
    replaces: ['drow immunities', 'keen senses', 'poison use'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Poison Minion',
    description:
      "Drow sometimes augment their slaves and frontline warriors by making them toxic, causing their bodies to internally produce mawbane poison (see below). The resulting poisonous creature makes a potent weapon in the effort to discourage neighboring monsters. Any creature that hits such a character with a bite attack is immediately exposed to its poison. The save DC for this poison is equal to 10 + 1/2 the character's Hit Dice + the character's Constitution modifier. Mawbane Poison—ingested; save Fortitude as above; frequency 1/round for 4 rounds; effect 1d2 Constitution damage; cure 1 save. Drow can take this trait in place of drow immunities, light blindness, spell resistance, and weapon familiarity.",
    replaces: ['drow immunities', 'light blindness', 'spell resistance', 'weapon familiarity'],
    source: 'Bestiary 3',
  },
  {
    name: 'Seducer',
    description:
      "Certain drow possess an innate understanding of the darkest desires that lurk in every heart. Drow with this racial trait add +1 to the saving throw DCs for spells and spell-like abilities of the enchantment school. In addition, drow with a Wisdom score of 15 or higher may use charm person once per day as a spell-like ability (caster level equal to the drow's character level). This racial trait replaces drow immunities.",
    replaces: ['drow immunities'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Stalker',
    description:
      'The lands outside of drow cities, from rough-hewn tunnels to rocky caverns, are treacherous to navigate. Drow with this racial trait may move through difficult terrain without penalty while underground. In addition, drow with a Dexterity of 13 or higher gain Nimble Moves as a bonus feat. This racial trait replaces the spell-like abilities racial trait.',
    replaces: ['spell-like abilities'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Sure Step',
    description:
      'Adventurers can spend their whole careers in the alleys and sewers of large cities or the tunnels of the Underworld. Characters with this trait suffer no movement penalties when blinded or moving in darkness. Drow can take this trait in place of keen senses.',
    replaces: ['keen senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Surface Infiltrator',
    description:
      'Some drow dwell close to the surface lands, either because they serve drow causes or they were exiled. Drow with this racial trait gain low-light vision, allowing them to see twice as far as humans in conditions of dim light. This racial trait replaces the darkvision and light blindness racial traits.',
    replaces: ['darkvision', 'light blindness'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Underworld Guide',
    description:
      'Those who brave the lightless tunnels below the world’s surface learn to identify the dangerous phenomena that characterize the Underworld. Characters with this trait gain a +2 bonus on initiative checks, and on saves against traps and hazards when underground (from a lifetime of dodging accursed pools, cave-ins, and green slime). Drow can take this trait in place of keen senses.',
    replaces: ['keen senses'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Voice in the Darkness',
    description:
      'Prerequisite(s): Charisma 13+. Characters who practice coercion and intimidation in the Underworld or on the Shadow Plane learn to do so in dim light or no light at all. As long as they are in dim light or darker conditions, characters with this trait gain a +2 bonus on Intimidate and Stealth checks. Drow can take this trait in place of weapon familiarity.',
    replaces: ['weapon familiarity'],
    source: 'Advanced Race Guide',
  },
];

export const fetchlingAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Bound to Here',
    description:
      'Some fetchlings are from families that have fearfully avoided the Shadow Plane, living on the Material Plane for generations. As a result, these fetchlings are closely tied to the Material Plane. Fetchlings with this racial trait count as outsiders with the native subtype and humanoids with the human subtype for any effect related to race, including feat prerequisites and spells that affect humanoids. They can pass for human without using the Disguise skill. This racial trait replaces the +2 racial bonus on Knowledge (planes) checks from the skilled racial trait, and alters the native outsider racial trait.',
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Boundary Walker',
    description:
      'Some fetchlings deftly navigate between the worlds of shadow and light. A fetchling with this racial trait gains spell resistance equal to 5 + his character level against spells and spell-like abilities with the light or shadow descriptors, as well as spells and spell-like abilities of the illusion (shadow) subschool. This racial trait replaces the shadow blending and shadowy resistance racial traits.',
    replaces: ['shadow blending', 'shadowy resistance'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Deep Shadow Explorer',
    description:
      'Fetchlings who widely explore the Shadow Plane learn to confront fearsome things best left undescribed. Fetchlings with this racial trait gain a +2 racial bonus on all saves against fear effects. This racial trait replaces the skilled racial trait.',
    replaces: ['skilled'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Emissary',
    description:
      'Rare fetchlings excel in the role of emissary between the Shadow Plane and the Material Plane. Once per day, such a fetchling can roll twice when making a Bluff or Diplomacy check and take the better roll. This racial trait replaces shadow blending.',
    replaces: ['shadow blending'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Gloom Shimmer',
    description:
      "Some fetchlings can manipulate shadowy energy in order to displace their location instead of transporting between shadows. Upon reaching 9th level, instead of gaining shadow walk as a spell-like ability, these fetchlings gain displacement as a spell-like ability usable twice per day. For this ability, a fetchling's caster level is equal to his total Hit Dice. This racial trait modifies the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Recluse',
    description:
      "Some fetchlings learn how to deflect unwanted attention. Fetchlings with this racial trait can use sanctuary once per day as a spell-like ability. When such a fetchling reaches 9th level in any combination of classes, he gains nondetection (self only) as a spell-like ability usable once per day, and at 13th level, he gains veil (self only) usable once per day. A fetchling's caster level is equal to his total Hit Dice. This racial trait modifies the fetchling's spell-like abilities racial trait.",
    replaces: ['spell-like abilities'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Shadow Agent',
    description:
      'Families of fetchlings make their livings serving as agents, diplomats, and spies mediating between humans and the powers of the Plane of Shadow. They gain a +2 racial bonus on Bluff and Diplomacy checks. This racial trait replaces skilled.',
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Shadow Magic',
    description:
      'Fetchlings who spend their time studying the subtle magic of their adopted plane gain arcane insights on the use of shadow spells. These fetchlings gain a +1 racial bonus to the DC of any illusion (shadow) spells they cast. This racial trait replaces the skilled racial trait.',
    replaces: ['skilled'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Subtle Manipulator',
    description:
      "Rather than taking on the forms of others, some fetchling are adept at destroying the memories of other creatures. Instead of gaining disguise self as a spell-like ability, such fetchlings can use memory lapse once per day as a spell-like ability. For this ability, a fetchling's caster level is equal to his total Hit Dice. This racial trait modifies the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Umbral Escort',
    description:
      'Some fetchlings descend from talented planar travelers who dwelled in the dark places between worlds and could conduct others across the planes. A fetchling with this racial trait loses the disguise self spell-like ability, but his shadow walk and plane shift spell-like abilities need not affect himself only. This racial trait replaces the low-light vision racial trait and modifies the spell-like abilities racial trait.',
    replaces: ['low-light vision'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Unnerving Gaze',
    description:
      "Some fetchlings gain an upsetting gaze attack that they can activate three times per day as a standard action, affecting all creatures within a 30-foot cone that can see. All creatures that meet the fetchling's unnerving gaze are shaken for 1 round (DC = 10 + 1/2 the fetchling's character level + her Charisma modifier; Will negates). When the fetchling reaches 9th level, her gaze instead causes creatures to be staggered. When the fetchling reaches 13th level, her gaze instead causes creatures to be stunned. Unnerving gaze is a mind-affecting fear effect. This racial trait replaces the fetchling's spell-like abilities.",
    replaces: ['spell-like abilities'],
    source: 'Blood of Shadows',
  },
  {
    name: 'Whispers from Shadow',
    description:
      'Fetchlings are known for wheeling and dealing. A fetchling with this racial trait gains a +4 racial bonus on Bluff checks when he tells a lie and wants to convince an opponent that what he is saying is true. This racial trait replaces the skilled racial trait.',
    replaces: ['skilled'],
    source: 'Blood of Shadows',
  },
  {
    name: 'World Walker',
    description:
      'Fetchlings who have spent most of their lives on the Material Plane can become more acclimated to their new environments. Instead of gaining a +2 racial bonus on Knowledge (planes) checks, these fetchlings gain a +1 racial bonus on Knowledge (nature) and Knowledge (local) checks. This racial trait modifies the skilled racial trait.',
    replaces: ['skilled'],
    source: 'Blood of Shadows',
  },
];

export const goblinAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Cave Crawler',
    description:
      'Some goblins are born and raised in caves and rarely see the light of day. Goblins with this trait gain a climb speed of 10 feet and the +8 racial bonus on Climb checks associated with having a climb speed. Goblins with this racial trait have a base speed of 20 feet and lose the fast movement racial trait.',
    replaces: ['fast movement'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'City Scavenger',
    description:
      'Goblins who live within the boundaries of human cities survive by scavenging for refuse and hunting stray animals. Goblins with this trait gain a +2 racial bonus on Perception and Survival checks, and can use Survival to forage for food while in a city. This racial trait replaces skilled.',
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Eat Anything',
    description:
      'Raised with little or no proper food, many goblins have learned to survive by eating whatever they happen across and can digest nearly anything without getting sick. Goblins with this trait gain a +4 on Survival checks to forage for food and a +4 racial bonus on saves versus effects that cause the nauseated or sickened conditions. This racial trait replaces skilled.',
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Hard Head, Big Teeth',
    description:
      'Goblins are known for their balloon-like heads and enormous maws, but some have even more exaggeratedly large heads filled with razor-sharp teeth. Goblins with this trait gain a bite attack as a primary natural attack that deals 1d4 points of damage. This racial trait replaces skilled.',
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Junk Tinker',
    description:
      'Goblins use ramshackle equipment and vehicles that seem like they should never function. Goblins gain a +2 racial bonus on driving checks and on Craft checks to build or repair weapons or vehicles without the proper tools. They can make the attempt with any material that can hold the right shape for a few uses, but normally unfit materials produce items with the fragile quality. This racial trait alters skilled, replacing the racial bonus on Stealth checks.',
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Over-Sized Ears',
    description:
      "While goblins' ears are never dainty, these goblins have freakishly large ears capable of picking up even the smallest sounds. Goblins with this racial trait gain a +4 bonus on Perception checks. This racial trait replaces skilled.",
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Tree Runner',
    description:
      'In trackless rain forests and marshes, it can be difficult to find dry ground to build on. goblin tribes living in such areas have learned to live in the treetops. These goblins gain a +4 racial bonus on Acrobatics and Climb checks. This racial trait replaces skilled.',
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Weapon Familiarity',
    description:
      "Goblins' traditional weapons are the dogslicer and the horsechopper, weapons designed specifically to bring down their most hated foes. Goblins with this trait are proficient with the dogslicer and the horsechopper, and treat any weapon with the word 'goblin' in it as martial weapons. This racial trait replaces skilled.",
    replaces: ['skilled'],
    source: 'Advanced Race Guide',
  },
];

export const hobgoblinAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Authoritative',
    description:
      'Hobgoblins often develop a knack for controlling others. They gain a +2 racial bonus on Diplomacy and Intimidate checks. Both skills are always class skills for them. This racial trait replaces sneaky.',
    replaces: ['sneaky'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Bandy-Legged',
    description:
      'Bandy-legged hobgoblins have an even more exaggerated stature than other hobgoblins, with bowed legs and massive shoulders. Hobgoblins with this racial trait gain a +2 racial bonus on Climb and Ride checks, and a +2 racial bonus to their CMD against bull rush or trip attempts while on solid ground. The base speed of bandy-legged hobgoblins is reduced to 20 feet.',
    replaces: ['normal speed'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Battle-Hardened',
    description:
      'Incessant drills make defense second nature to some hobgoblins. Hobgoblins with this racial trait gain a +1 bonus to CMD. This racial trait replaces sneaky.',
    replaces: ['sneaky'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Engineer',
    description:
      'hobgoblin engineers tinker endlessly with fire, explosives, and the engines of war. Hobgoblins with this racial trait gain a +2 racial bonus on Craft (alchemy) and Knowledge (engineering) checks. This racial trait replaces sneaky.',
    replaces: ['sneaky'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fearsome',
    description:
      'Some hobgoblins scorn caution and subtlety for swagger and bluster. Hobgoblins with this racial trait gain a +4 racial bonus on Intimidate checks. This racial trait replaces sneaky.',
    replaces: ['sneaky'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Magehunter',
    description:
      'Hobgoblins hate and fear arcane casters. A magehunter gains a +2 racial bonus on Spellcraft checks made to identify a spell being cast and a +1 racial bonus on attack rolls against arcane spellcasters. He only gains this bonus against creatures that use spells, and not against those that only use spell-like abilities. This racial trait replaces sneaky.',
    replaces: ['sneaky'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Pit Boss',
    description:
      'Slave blood fuels the hobgoblin war machine. Pit bosses extract the last breath of labor from their charges with a liberal touch of the lash. Hobgoblins with this racial trait gain proficiency with whips and a +1 racial bonus on combat maneuver checks made to disarm or trip with a whip. This racial trait replaces sneaky.',
    replaces: ['sneaky'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Scarred',
    description:
      'A hobgoblin can scar himself with both blade and fire to toughen his hide into a mass of horny scars. Hobgoblins with this racial trait gain a +1 natural armor bonus to Armor Class. However, the repeated exposure to fire permanently damages their eyes. This racial trait replaces the darkvision racial trait.',
    replaces: ['darkvision'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Slave Hunter',
    description:
      'hobgoblin slavers excel at tracking down runaway slaves and surviving in filthy conditions. Hobgoblins with this racial trait gain a +2 racial bonus on Survival checks and a +2 racial bonus on Fortitude saves against disease. This racial trait replaces sneaky.',
    replaces: ['sneaky'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Unfit',
    description:
      'Hobgoblins who failed to secure a position in the military hold the lowest status in hobgoblin society, and quickly learn the value of currying favor with their betters. Hobgoblins with this racial trait gain proficiency in a single martial weapon and +1 racial bonus on Bluff and Diplomacy checks. This racial trait replaces sneaky.',
    replaces: ['sneaky'],
    source: 'Advanced Race Guide',
  },
];

export const ifritAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Brazen Flame',
    description:
      'Ifrits sometimes flames infuse their weapons in mortal combat, rather than protect them or grant spells. An ifrit with this racial trait deals 1 point of fire damage with its melee attacks. This racial trait replaces the energy resistance and spell-like ability traits.',
    replaces: ['energy resistance', 'spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Desert Mirage',
    description:
      'Ifrits thrive in the deserts of the world, where their keen instincts and resistance to heat give them a huge edge over their competitors. Those with this trait gain a +2 racial bonus on Stealth checks in desert environments and on saves to resist starvation and thirst. This racial trait replaces fire affinity.',
    replaces: ['fire affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Efreeti Magic',
    description:
      "Some ifrits inherit an efreeti ancestor's ability to magically change a creature's size. They can cast either enlarge person or reduce person (the ifrit chooses when using this ability) once per day as a spell-like ability (caster level equals the ifrit's level). The ifrit can use this ability to affect other ifrits as though they were humanoid creatures. This racial trait replaces the spell-like ability racial trait.",
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fire in the Blood',
    description:
      'Ifrits with this racial trait mimic the healing abilities of the mephits, gaining fast healing 2 for 1 round anytime they take fire damage (whether or not this fire damage gets through their fire resistance). The ifrits can heal up to 2 hit points per level per day with this ability, after which it ceases to function. This racial trait replaces fire affinity.',
    replaces: ['fire affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fire Insight',
    description:
      "ifrit spellcasters sometimes find that their elemental heritage makes creatures of fire more willing to serve them. Summon monster and summon nature's ally spells that the ifrit casts last 2 rounds longer than normal when used to summon creatures with the fire subtype. This racial trait replaces fire affinity.",
    replaces: ['fire affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Fire-Starter',
    description:
      'Ifrits with this racial trait derive sadistic satisfaction from watching others burn. Anytime the ifrit causes a creature to catch fire, he gains a +1 morale bonus on the next single attack roll, saving throw, skill check, or ability check that he makes in the next round. The ifrit only gains this bonus the first time he causes a particular creature to catch fire; subsequent times the creature catches fire provide no bonus. This racial trait replaces fire affinity.',
    replaces: ['fire affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Forge-Hardened',
    description:
      'Not all ifrits are descended from efreet—some instead descend from azers or even salamanders. Such ifrits gain a +2 racial bonus on Craft (armor and weapons) checks and saves to resist fatigue and exhaustion. This racial trait replaces the spell-like ability racial trait.',
    replaces: ['spell-like ability'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Hypnotic',
    description:
      'Ifrits with this racial trait evoke the entrancing nature of flame, adding +1 to the DC for all saving throws against spells or effects they cast that inflict the fascinated condition. Once per day, when a creature rolls a saving throw against such an effect from the ifrit, the ifrit can spend an immediate action to force that creature to reroll the saving throw and use the second result, even if it is worse. The ifrit must announce he is using this ability before the results of the first roll are revealed. This racial trait replaces fire affinity.',
    replaces: ['fire affinity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Mostly Human',
    description:
      "A few ifrits have appearances much closer to those of their human ancestors; in fact, they may not even realize their true race. Such geniekin appear to be human, save perhaps minor features like unusual eye color, and they count as humanoid (human) as well as outsider (native) for all purposes (such as humanoid-affecting spells such as charm person or enlarge person). These geniekin do not automatically gain their associated elemental language (but may select it as a bonus language if their Intelligence is high enough). This ability alters the geniekin's type, subtype, and languages.",
    replaces: [],
    source: 'Blood of Fire',
  },
  {
    name: 'Wildfire Heart',
    description:
      'Ifrits with this trait are as swift and dangerous as a blazing wildfire. They gain a +4 racial bonus on initiative checks. This racial trait replaces energy resistance.',
    replaces: ['energy resistance'],
    source: 'Advanced Race Guide',
  },
];

export const batch_002: Record<string, AlternativeRacialTraitData[]> = {
  Aasimar: aasimarAltTraits,
  Catfolk: catfolkAltTraits,
  Dhampir: dhampirAltTraits,
  Drow: drowAltTraits,
  Fetchling: fetchlingAltTraits,
  Goblin: goblinAltTraits,
  Hobgoblin: hobgoblinAltTraits,
  Ifrit: ifritAltTraits,
};
