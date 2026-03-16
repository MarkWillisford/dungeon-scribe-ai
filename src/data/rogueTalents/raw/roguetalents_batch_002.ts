// Batch 002 | first: 'Obfuscate Story' | last: 'Weapon Snatcher' | count: 113
// Standard talents O–Z (66) + All advanced talents (47)
import { RogueTalentDocument } from '@/types/classOptions';

// ── Standard Talents O–Z: Entries 1–20 ──────────────────────────────────────

export const obfuscateStory: RogueTalentDocument = {
  id: 'obfuscate-story',
  name: 'Obfuscate Story',
  talentTier: 'standard',
  description:
    "A rogue with this talent can make opposed Diplomacy checks while another person recounts an event. If successful, the rogue interjects comments that muddle the target's recall of accurate details without the target realizing what happened. If the rogue fails the check, the target gets a Sense Motive check (DC equal to the failed Diplomacy result) to detect the deliberate confusion attempt.",
  source: 'pf1e-arg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const obscuringBlow: RogueTalentDocument = {
  id: 'obscuring-blow',
  name: 'Obscuring Blow',
  talentTier: 'standard',
  description:
    "Once per day, a rogue may forgo sneak attack damage to cloud an opponent's vision. The rogue must declare this use before attacking. Upon a successful hit, the attack deals normal damage, and the target treats all other creatures as having concealment, suffering a 20% miss chance on attack rolls for a number of rounds equal to half the rogue's level. A successful Fortitude save reduces the effect to 1 round. The save DC equals 10 + 1/2 the rogue's level + the rogue's Intelligence modifier.",
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const occultDungeoneer: RogueTalentDocument = {
  id: 'occult-dungeoneer',
  name: 'Occult Dungeoneer',
  talentTier: 'standard',
  description:
    "A rogue with this talent can use spell-trigger and spell-completion magic items as if the spells detect secret doors, detect traps, knock, locate object, and obscure object were on her spell list. When using a device that allows the wielder to set the caster level (such as a staff), the rogue may use her class level in place of any required caster level. Additionally, the rogue can cast knock as a supernatural ability once per day, using her rogue level as the caster level.",
  source: 'pf1e-mtt',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const occultMysticism: RogueTalentDocument = {
  id: 'occult-mysticism',
  name: 'Occult Mysticism',
  talentTier: 'standard',
  description:
    'The rogue has been trained in a minor occult technique. The rogue gains Psychic Sensitivity as a bonus feat.',
  source: 'pf1e-ag',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const offensiveDefense: RogueTalentDocument = {
  id: 'offensive-defense',
  name: 'Offensive Defense',
  talentTier: 'standard',
  description:
    'When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, the rogue gains a +1 dodge bonus to AC for each sneak attack die rolled for one round. The dodge bonus applies only against the creature that was sneak attacked and does not stack with itself.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const oneOfThoseFaces: RogueTalentDocument = {
  id: 'one-of-those-faces',
  name: 'One of Those Faces',
  talentTier: 'standard',
  description:
    'A rogue with this talent can use disguise self as a spell-like ability for up to 10 minutes per character level each day. This duration does not need to be consecutive, but it must be used in 10-minute increments. Once this ability is used, the rogue must maintain the same alternate appearance for the next 24 hours when using the ability again.',
  source: 'pf1e-spy',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const papercraftTools: RogueTalentDocument = {
  id: 'papercraft-tools',
  name: 'Papercraft Tools',
  talentTier: 'standard',
  description:
    "A rogue with this talent can use a playing card in place of thieves' tools when making Disable Device checks. A standard playing card functions as regular thieves' tools and is destroyed after use. A harrow card used in this way functions as masterwork thieves' tools and grants a +2 circumstance bonus on the Disable Device check, but is also destroyed after use.",
  source: 'pf1e-harrow',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const peerlessManeuver: RogueTalentDocument = {
  id: 'peerless-maneuver',
  name: 'Peerless Maneuver',
  talentTier: 'standard',
  description:
    'Once per day, a rogue with this talent can roll two dice while making an Acrobatics check and take the better result. She must decide to use this ability before making the check. A rogue can use this ability one additional time per day for every 5 rogue levels she possesses.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const philologist: RogueTalentDocument = {
  id: 'philologist',
  name: 'Philologist',
  talentTier: 'standard',
  description:
    'A rogue with this talent can reroll any Linguistics check made to decipher unfamiliar written language. Additionally, a failed Linguistics check cannot lead to drawing false conclusions from a subsequent failed Wisdom check. The rogue receives only one reroll per inscription, message, or text encountered.',
  source: 'pf1e-pots',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const pierceTheDarkness: RogueTalentDocument = {
  id: 'pierce-the-darkness',
  name: 'Pierce the Darkness',
  talentTier: 'standard',
  description:
    "A rogue with this talent gains blindsense out to a range of 5 feet, but only against creatures concealed by darkness or her own blindness. The rogue still incurs normal miss chances when attacking creatures with concealment.",
  source: 'pf1e-heroes-street',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const poisonUse: RogueTalentDocument = {
  id: 'poison-use',
  name: 'Poison Use',
  talentTier: 'standard',
  description:
    'The rogue is trained in the use of poison, and cannot accidentally poison herself when applying poison to a weapon.',
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const positioningAttack: RogueTalentDocument = {
  id: 'positioning-attack',
  name: 'Positioning Attack',
  talentTier: 'standard',
  description:
    'Once per day, when a rogue with this talent hits a creature with a melee attack, she can move up to 30 feet without provoking attacks of opportunity. The movement must end in a space adjacent to the creature hit with the melee attack.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const powerfulSneak: RogueTalentDocument = {
  id: 'powerful-sneak',
  name: 'Powerful Sneak',
  talentTier: 'standard',
  description:
    "Whenever a rogue with this talent uses the full-attack action, she can elect to take a –2 penalty on all attack rolls until the start of her next turn. If an attack during this time is a sneak attack, she treats all 1s on the sneak attack damage dice as 2s.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const quickDisable: RogueTalentDocument = {
  id: 'quick-disable',
  name: 'Quick Disable',
  talentTier: 'standard',
  description:
    'It takes a rogue with this ability half the normal amount of time to disable a trap using the Disable Device skill (minimum 1 round).',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const quickDisguise: RogueTalentDocument = {
  id: 'quick-disguise',
  name: 'Quick Disguise',
  talentTier: 'standard',
  description:
    'A rogue with this talent can create a disguise more quickly than normal. The time required to alter appearance based on the changes made is as follows: minor details only — full-round action; different gender — 1 minute; different race — 1 minute; different age category — 1 minute; different size category — 1 minute. These times are cumulative, so a female rogue wanting to disguise herself as a male of a different race takes 2 minutes.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const quickScrounge: RogueTalentDocument = {
  id: 'quick-scrounge',
  name: 'Quick Scrounge',
  talentTier: 'standard',
  description:
    'A rogue with this talent can search a creature, object, or area in half as much time as normal. When a Perception check would normally take a full-round action or less, the action required decreases by one step (full-round action to standard action, standard action to move action, move action to swift action, swift action to immediate action). This talent provides no benefit for Perception checks attempted as free actions or those requiring no action.',
  source: 'pf1e-blood-moon',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const quickTrapsmith: RogueTalentDocument = {
  id: 'quick-trapsmith',
  name: 'Quick Trapsmith',
  talentTier: 'standard',
  description:
    "As a full-round action, a rogue with this talent can set a mechanical trap she has constructed. The trap's Challenge Rating cannot exceed half her rogue level. The rogue must have already purchased the components and completed the trap's construction, and must have those components available.",
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const rapidBoost: RogueTalentDocument = {
  id: 'rapid-boost',
  name: 'Rapid Boost',
  talentTier: 'standard',
  description:
    'Once per day, a rogue with this talent can roll two dice while attempting a Sleight of Hand check and take the better result. The rogue must decide to use this ability before making the check. A rogue can use this ability one additional time per day for every 5 rogue levels she possesses.',
  source: 'pf1e-harrow',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const rapidPerception: RogueTalentDocument = {
  id: 'rapid-perception',
  name: 'Rapid Perception',
  talentTier: 'standard',
  description:
    "A rogue with this talent can perform a Perception check to intentionally search for a specific item or creature as a swift action instead of a move action. When searching for an invisible creature, the creature's bonus on its Stealth check from its invisibility is halved.",
  source: 'pf1e-mtt',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const resiliency: RogueTalentDocument = {
  id: 'resiliency',
  name: 'Resiliency',
  talentTier: 'standard',
  description:
    'Once per day, a rogue with this talent can gain a number of temporary hit points equal to her rogue level. Activating this ability is an immediate action that can be performed when she is brought to 0 or fewer hit points. This ability can be used to prevent her from dying. These temporary hit points last for 1 minute. If the rogue\'s hit points drop below 0 due to the loss of these temporary hit points, she falls unconscious and is dying as normal.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ── Standard Talents O–Z: Entries 21–40 ─────────────────────────────────────

export const ridingStunt: RogueTalentDocument = {
  id: 'riding-stunt',
  name: 'Riding Stunt',
  talentTier: 'standard',
  description:
    "A rogue with this talent gains the following benefits while mounted: the penalty for riding without a saddle is reduced from –5 to –2; when making a mount leap with a Ride check, the rogue uses whichever modifier is higher — her Ride modifier or her mount's jump modifier; she gains a +5 competence bonus on Ride checks to soften falls from a mount and to perform fast mounts and dismounts; and she can attempt a DC 15 Ride check to recover from being in a covering position as a free action instead of a move action (failure still requires a move action).",
  prerequisites: [{ type: 'skill', skillId: 'ride', ranks: 1 }],
  source: 'pf1e-isc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const rogueCrawl: RogueTalentDocument = {
  id: 'rogue-crawl',
  name: 'Rogue Crawl',
  talentTier: 'standard',
  description:
    'While prone, a rogue with this talent can move at half speed. This movement provokes attacks of opportunity as normal. Additionally, the rogue can take a 5-foot step while crawling.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ropeMaster: RogueTalentDocument = {
  id: 'rope-master',
  name: 'Rope Master',
  talentTier: 'standard',
  description:
    'A rogue with this ability can move at her normal speed when using a rope with the Climb skill, can take 10 when using Acrobatics to move over narrow surfaces even when in danger or distracted, and gains a +4 bonus when determining the DC to escape bonds when she ties up a creature.',
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sacredSneakAttack: RogueTalentDocument = {
  id: 'sacred-sneak-attack',
  name: 'Sacred Sneak Attack',
  talentTier: 'standard',
  description:
    "A rogue who worships a good-aligned deity or has a good alignment can treat her sneak attack damage as good-aligned for the purpose of overcoming damage reduction. This benefit applies only to the sneak attack damage, not to the weapon's normal damage.",
  prerequisites: [{ type: 'special', description: 'Good alignment' }],
  source: 'pf1e-champs-purity',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sacrificeSelf: RogueTalentDocument = {
  id: 'sacrifice-self',
  name: 'Sacrifice Self',
  talentTier: 'standard',
  description:
    "A rogue with this talent can sacrifice her own evasion to protect an adjacent ally. When both the rogue and an adjacent ally are targeted by an area effect that allows a Reflex save for half damage, the rogue can accept the full damage of the effect and have her ally take no damage (if the rogue makes her saving throw) or half damage (if the rogue fails her saving throw). If the rogue also possesses improved evasion, she can instead attempt a saving throw for her ally; if successful, neither the rogue nor her ally takes any damage.",
  prerequisites: [
    { type: 'class_feature', featureName: 'evasion' },
    {
      type: 'special',
      description: 'Improved Evasion required to use the secondary save option',
    },
  ],
  source: 'pf1e-champs-purity',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const scavenger: RogueTalentDocument = {
  id: 'scavenger',
  name: 'Scavenger',
  talentTier: 'standard',
  description:
    'A rogue with this talent can pick up and stow an object as a swift action instead of requiring two separate move actions. Additionally, the rogue gains a +2 bonus on Sleight of Hand checks to pick the pockets of creatures that are stunned or disabled.',
  source: 'pf1e-blood-moon',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const scryingFamiliarity: RogueTalentDocument = {
  id: 'scrying-familiarity',
  name: 'Scrying Familiarity',
  talentTier: 'standard',
  description:
    'A rogue with this talent can roll twice and take the better result on saving throws against divination (scrying) spells and effects, on Perception checks to notice scrying sensors, and on caster level checks to overcome spell resistance when using a scrying spell or effect. Additionally, upon detecting a magical sensor, the rogue may attempt a Stealth check opposed by the caster\'s caster level check to avoid being detected by that sensor.',
  source: 'pf1e-spy',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const scrySlip: RogueTalentDocument = {
  id: 'scry-slip',
  name: 'Scry Slip',
  talentTier: 'standard',
  description:
    "Whenever a rogue with this talent is targeted by a scrying effect that allows a Will saving throw, the caster must first succeed at a caster level check with a DC equal to 15 + the rogue's class level or the effect automatically fails. This benefit extends to the rogue and any objects she carries or holds.",
  source: 'pf1e-mtt',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const setUp: RogueTalentDocument = {
  id: 'set-up',
  name: 'Set-Up',
  talentTier: 'standard',
  description:
    "Once per round, the rogue can spend her sneak attack damage to instead create an opening for an adjacent ally. When the rogue hits a target in melee and would deal sneak attack damage, she can forgo that damage; the next melee attack her adjacent ally makes against that target before the rogue's next turn treats the target as flanked, even if the ally is not actually flanking the target. The rogue cannot use this ability against creatures she could not flank with the ally.",
  source: 'pf1e-cc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const shadowsChill: RogueTalentDocument = {
  id: 'shadows-chill',
  name: "Shadow's Chill",
  talentTier: 'standard',
  description:
    'When a rogue with this talent hits a creature with a melee weapon dealing sneak attack damage, a number of damage points equal to the number of sneak attack dice rolled becomes cold damage. The remaining sneak attack damage and normal weapon damage remain unaffected.',
  prerequisites: [{ type: 'special', description: 'Cold resistance from a racial trait' }],
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const shoveAside: RogueTalentDocument = {
  id: 'shove-aside',
  name: 'Shove Aside',
  talentTier: 'standard',
  description:
    'When both a rogue with this talent and an adjacent ally are targeted by an attack that requires a saving throw, the rogue can accept a –4 penalty on her own saving throw to grant her ally a +4 bonus on the saving throw against that attack. If the rogue possesses evasion, she forfeits that ability against the attack; if she possesses improved evasion, it is reduced to standard evasion against that attack.',
  prerequisites: [{ type: 'class_feature', featureName: 'evasion' }],
  source: 'pf1e-cc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const signaturePoison: RogueTalentDocument = {
  id: 'signature-poison',
  name: 'Signature Poison',
  talentTier: 'standard',
  description:
    "A rogue with this talent selects one type of poison (such as bloodroot or oil of taggit). When the rogue uses that poison, the poison's saving throw DC increases by +2. A rogue can take this talent multiple times; each time, it applies to a new type of poison.",
  source: 'pf1e-pp',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const silencingStrike: RogueTalentDocument = {
  id: 'silencing-strike',
  name: 'Silencing Strike',
  talentTier: 'standard',
  description:
    "When a rogue with this talent damages a creature with a sneak attack, she can magically render the creature mute for 1 round unless it succeeds at a Will save (DC = 10 + half the rogue's level + the rogue's Charisma modifier). A rogue can use this ability a number of times per day equal to half her rogue level.",
  source: 'pf1e-ag',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sleightOfHandStunt: RogueTalentDocument = {
  id: 'sleight-of-hand-stunt',
  name: 'Sleight of Hand Stunt',
  talentTier: 'standard',
  description:
    "Instead of making an attack of opportunity, when an opponent provokes an attack of opportunity by firing a projectile weapon while threatened, the rogue can attempt a Sleight of Hand check against that opponent's CMD. If successful, the rogue plucks the ammunition from the provoking weapon, negating the attack. The rogue may use this ability as many times per round as she could make attacks of opportunity. At the GM's discretion, certain projectile weapons (like siege engines or firearms) may be immune to this ability. A rogue may select multiple skill stunts, each keyed to a different Dexterity- or Strength-based skill, but cannot select the same skill stunt twice.",
  prerequisites: [{ type: 'skill', skillId: 'sleight-of-hand', ranks: 1 }],
  source: 'pf1e-isc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const slowReactions: RogueTalentDocument = {
  id: 'slow-reactions',
  name: 'Slow Reactions',
  talentTier: 'standard',
  description:
    "Opponents damaged by the rogue's sneak attack cannot make attacks of opportunity for 1 round.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const snapShot: RogueTalentDocument = {
  id: 'snap-shot',
  name: 'Snap Shot',
  talentTier: 'standard',
  description:
    "A rogue with this talent treats her initiative roll as a 20 during a surprise round, but she may only take an attack action with a ranged weapon during the surprise round. Her normal initiative applies for subsequent rounds. If two or more rogues both have this talent, their initiative is determined normally among themselves, but they all act before other creatures. This ability has no effect if the rogue is unable to act during the surprise round.",
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sneakTraining: RogueTalentDocument = {
  id: 'sneak-training',
  name: 'Sneak Training',
  talentTier: 'standard',
  description:
    "The rogue is treated as having the sneak attack class feature of a rogue of her current level for the purpose of meeting prestige class prerequisites. This talent does not increase the amount of sneak attack damage she deals (if she already has the sneak attack class feature) or grant the sneak attack class feature if she does not already have it. This talent is most useful for rogues that lack the sneak attack class feature, such as those with the phantom thief archetype.",
  source: 'pf1e-ap130',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sneakyManeuver: RogueTalentDocument = {
  id: 'sneaky-maneuver',
  name: 'Sneaky Maneuver',
  talentTier: 'standard',
  description:
    "When a rogue with this talent could make a sneak attack with a melee weapon, she can instead take a –2 penalty on her attack roll to attempt a dirty trick, disarm, steal, sunder, or trip combat maneuver as a swift action if the attack hits. The –2 penalty applies only to the attack roll, not the combat maneuver check. The maneuver still provokes attacks of opportunity unless the rogue has an ability that prevents this.",
  prerequisites: [{ type: 'special', description: 'Must be capable of making a sneak attack' }],
  source: 'pf1e-misc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const snipersEye: RogueTalentDocument = {
  id: 'snipers-eye',
  name: "Sniper's Eye",
  talentTier: 'standard',
  description:
    'A rogue with this talent can apply her sneak attack damage on ranged attacks targeting foes within 30 feet that benefit from concealment. Foes with total concealment are still immune.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const spellStoring: RogueTalentDocument = {
  id: 'spell-storing',
  name: 'Spell Storing',
  talentTier: 'standard',
  description:
    'A rogue with this talent can store a single targeted harmless spell of up to 2nd level that has a casting time of 1 standard action. When such a spell is cast on the rogue and she does not have a stored spell, she can choose to store the spell instead of experiencing its effects immediately. The rogue can use the stored spell as a standard action, at which point the spell takes effect (acting in all ways as if it had just been cast on her).',
  prerequisites: [{ type: 'skill', skillId: 'use-magic-device', ranks: 1 }],
  source: 'pf1e-mtt',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ── Standard Talents O–Z: Entries 41–60 ─────────────────────────────────────

export const standUp: RogueTalentDocument = {
  id: 'stand-up',
  name: 'Stand Up',
  talentTier: 'standard',
  description:
    'A rogue with this ability can stand up from a prone position as a free action. This still provokes attacks of opportunity for standing up while threatened by a foe.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const stealTheStory: RogueTalentDocument = {
  id: 'steal-the-story',
  name: 'Steal the Story',
  talentTier: 'standard',
  description:
    "After using obfuscate story, a rogue with this talent can make an opposed Diplomacy check to further manipulate the account. Success imposes a penalty equal to the rogue's highest ability score modifier (Intelligence, Wisdom, or Charisma) on the target's Diplomacy and Intimidate checks with those who heard the altered story. The penalty persists until the target repairs her reputation or discredits the rogue.",
  prerequisites: [{ type: 'special', description: 'obfuscate story rogue talent' }],
  source: 'pf1e-arg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const stealthStunt: RogueTalentDocument = {
  id: 'stealth-stunt',
  name: 'Stealth Stunt',
  talentTier: 'standard',
  description:
    "When a rogue with this talent has concealment, instead of making an attack of opportunity against an opponent who provokes one, she may attempt a Stealth check opposed by the provoking opponent's CMD. If successful, the opponent is treated as flat-footed against the rogue's first melee attack before the end of the rogue's next turn. This ability does not consume any of the rogue's available attacks of opportunity for the round. A rogue may select multiple skill stunts, each keyed to a different Dexterity- or Strength-based skill, but cannot select the same one twice.",
  prerequisites: [{ type: 'skill', skillId: 'stealth', ranks: 1 }],
  source: 'pf1e-isc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const stemTheFlow: RogueTalentDocument = {
  id: 'stem-the-flow',
  name: 'Stem the Flow',
  talentTier: 'standard',
  description:
    "When a rogue with this talent successfully deals sneak attack damage to a creature that has the ability to channel energy, she can sacrifice 3d6 points of her sneak attack damage. The target is unable to channel energy for a number of rounds equal to half the rogue's level.",
  source: 'pf1e-champs-purity',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const strongImpression: RogueTalentDocument = {
  id: 'strong-impression',
  name: 'Strong Impression',
  talentTier: 'standard',
  description: 'A rogue who selects this talent gains Intimidating Prowess as a bonus feat.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const strongStroke: RogueTalentDocument = {
  id: 'strong-stroke',
  name: 'Strong Stroke',
  talentTier: 'standard',
  description:
    'A rogue with this talent can roll twice when making Swim checks and take the better result. If she already rolls twice due to another ability, she instead gains a +2 insight bonus on both rolls. Additionally, if an effect forces her to roll two dice and take the worse result, she only rolls 1d20 for Swim checks.',
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const superiorSniper: RogueTalentDocument = {
  id: 'superior-sniper',
  name: 'Superior Sniper',
  talentTier: 'standard',
  description:
    'A rogue who selects this talent gains Expert Sniper as a bonus feat. If she already has this feat, she can instead select any feat that lists Expert Sniper as a prerequisite, as long as she meets that feat\'s other prerequisites.',
  source: 'pf1e-mtt',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const suppressPoison: RogueTalentDocument = {
  id: 'suppress-poison',
  name: 'Suppress Poison',
  talentTier: 'standard',
  description:
    "A rogue with this talent can delay the effects of a poison affecting her. When she fails a saving throw against a poison, she can use an immediate action to attempt a second saving throw. If she succeeds, the poison does not affect her for a number of rounds equal to her Constitution modifier (minimum 1 round), though this duration counts against the total duration of the poison's effect. This ability provides no benefit against poisons with an immediate onset.",
  source: 'pf1e-pp',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const surpriseAttack: RogueTalentDocument = {
  id: 'surprise-attack',
  name: 'Surprise Attack',
  talentTier: 'standard',
  description:
    'During the surprise round, opponents are always considered flat-footed to a rogue with this ability, even if they have already acted.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const survivalist: RogueTalentDocument = {
  id: 'survivalist',
  name: 'Survivalist',
  talentTier: 'standard',
  description: 'A rogue with this talent adds Heal and Survival to her list of class skills.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const swiftPoison: RogueTalentDocument = {
  id: 'swift-poison',
  name: 'Swift Poison',
  talentTier: 'standard',
  description:
    'A rogue with this talent can apply poison to a weapon as a move action, instead of a standard action.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const swiftTracker: RogueTalentDocument = {
  id: 'swift-tracker',
  name: 'Swift Tracker',
  talentTier: 'standard',
  description:
    'While following tracks, the rogue can move at her normal speed without penalty while using the Survival skill. In addition, the penalty for moving at up to twice her normal speed while following tracks is reduced to –10.',
  source: 'pf1e-heroes-wild',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const swimmingStunt: RogueTalentDocument = {
  id: 'swimming-stunt',
  name: 'Swimming Stunt',
  talentTier: 'standard',
  description:
    "Once per round, when making an attack against an underwater opponent that would qualify for sneak attack damage, a rogue with this talent can attempt a Swim check as a free action against that opponent's CMD. If both the attack and Swim check succeed and the attack deals sneak attack damage, the rogue may forfeit one or more sneak attack dice to reduce the opponent's remaining breath-holding capacity by 1 round per die sacrificed.",
  prerequisites: [{ type: 'skill', skillId: 'swim', ranks: 1 }],
  source: 'pf1e-isc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const terrainMastery: RogueTalentDocument = {
  id: 'terrain-mastery',
  name: 'Terrain Mastery',
  talentTier: 'standard',
  description:
    "A rogue with this talent gains a favored terrain ability identical to the ranger class feature of the same name, except that the ability does not increase in power with her level as the ranger's does. A rogue may select this talent more than once, each time applying it to a different terrain type.",
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const theWholeTime: RogueTalentDocument = {
  id: 'the-whole-time',
  name: 'The Whole Time',
  talentTier: 'standard',
  description:
    "A rogue with this talent is practiced at attacking from magical concealment. She can use spell-trigger and spell-completion items as if the spells greater invisibility, invisibility, and vanish were on her spell list. Additionally, when she becomes visible after making a weapon or spell attack, she can sheathe her weapon as a free action and adopt a neutral posture. With a successful Bluff or Disguise check opposed by the Sense Motive or Perception checks of any witnesses, those observers gain no obvious indication that she was the source of the attack.",
  source: 'pf1e-mtt',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const thrillOfTheChase: RogueTalentDocument = {
  id: 'thrill-of-the-chase',
  name: 'Thrill of the Chase',
  talentTier: 'standard',
  description:
    'Once per chase or once per day, a rogue with this talent gains one d20 reroll she can use at any time after the original roll is made but before the results of the roll are revealed. Additionally, the rogue receives the Run feat as a bonus feat.',
  source: 'pf1e-isi',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const toxicRegurgitation: RogueTalentDocument = {
  id: 'toxic-regurgitation',
  name: 'Toxic Regurgitation',
  talentTier: 'standard',
  description:
    'A rogue with this talent can ingest a noninhaled poison as a standard action, storing it temporarily in her body without suffering harm. She is not affected by the poison while it is stored, and she does not need to attempt saving throws against it. The suspension lasts for a number of hours equal to her Constitution modifier (minimum 1 hour). If not expelled before that time, the poison affects her normally. While the poison is stored, she can expel it as a ranged touch attack against a target within 10 feet without provoking attacks of opportunity; a hit exposes the target to the poison as if it were a contact poison. A rogue can store only one poison at a time; storing a new poison causes any previously stored poison to immediately affect her normally.',
  source: 'pf1e-pp',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const trapSpotter: RogueTalentDocument = {
  id: 'trap-spotter',
  name: 'Trap Spotter',
  talentTier: 'standard',
  description:
    'Whenever a rogue with this talent comes within 10 feet of a trap, she receives an immediate Perception skill check to notice the trap. This check should be made in secret by the GM.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const umbralGear: RogueTalentDocument = {
  id: 'umbral-gear',
  name: 'Umbral Gear',
  talentTier: 'standard',
  description:
    "While in dim light or darkness, a rogue with this talent can create a single shadow-touched item as a standard action. The item can be a crowbar, 50 feet of silk rope, a glass cutter, a light melee weapon she is proficient with, a reversible cloak, a set of thieves' tools, or a wire saw (or a similar item at the GM's discretion). The rogue has a daily allotment of 10 + her rogue level minutes for using these items; duration must be used in 1-minute increments, and the items dissolve when she stops touching them or the duration expires. Selecting this talent multiple times grants an additional 10 minutes of duration per selection, and at two selections she also gains access to enhanced options: 50 feet of silk rope with a grappling hook, a masterwork light melee weapon, or a set of masterwork thieves' tools.",
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const unbalancingTrick: RogueTalentDocument = {
  id: 'unbalancing-trick',
  name: 'Unbalancing Trick',
  talentTier: 'standard',
  description:
    'A rogue with this talent gains Improved Trip as a bonus feat, even if she does not meet the prerequisites. At 6th level, she qualifies for the Greater Trip feat, though she must take that feat normally to gain its benefits.',
  source: 'pf1e-emh',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ── Standard Talents O–Z: Entries 61–66 ─────────────────────────────────────

export const underhanded: RogueTalentDocument = {
  id: 'underhanded',
  name: 'Underhanded',
  talentTier: 'standard',
  description:
    "A rogue with this talent gains a +4 circumstance bonus on Sleight of Hand checks made to conceal a weapon. When a rogue with this talent makes a sneak attack during the surprise round against an opponent who was unaware of the concealed weapon used in the attack, she can roll the sneak attack damage dice twice and take the better result. The rogue can use this ability a number of times per day equal to her Charisma modifier (minimum 0).",
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const underhandedTrick: RogueTalentDocument = {
  id: 'underhanded-trick',
  name: 'Underhanded Trick',
  talentTier: 'standard',
  description:
    'A rogue with this talent gains Improved Dirty Trick as a bonus feat, even if she does not meet the prerequisites. At 6th level, she qualifies for Greater Dirty Trick and may take it as a normal feat if she meets its other prerequisites. When the rogue successfully inflicts the blinded condition on a target using a dirty trick, the target cannot remove the condition during the first round of blindness.',
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const wallScramble: RogueTalentDocument = {
  id: 'wall-scramble',
  name: 'Wall Scramble',
  talentTier: 'standard',
  description:
    'A rogue with this talent can roll twice when making Climb checks and take the better of the two rolls. If she already rolls twice due to another ability, she instead gains a +2 insight bonus on both rolls. Additionally, if an effect forces her to roll two dice and take the worse result, she rolls only 1d20 for Climb checks.',
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const weaponTraining: RogueTalentDocument = {
  id: 'weapon-training',
  name: 'Weapon Training',
  talentTier: 'standard',
  description: 'A rogue that selects this talent gains Weapon Focus as a bonus feat.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const wildMagic: RogueTalentDocument = {
  id: 'wild-magic',
  name: 'Wild Magic',
  talentTier: 'standard',
  description:
    "A rogue with this talent can cast a 0-level spell from the druid spell list as a spell-like ability three times per day. Her rogue level is her caster level for this spell, and the save DC equals 10 + the rogue's Wisdom modifier.",
  prerequisites: [{ type: 'ability_score', ability: 'WIS', minimum: 10 }],
  source: 'pf1e-heroes-wild',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const withoutATrace: RogueTalentDocument = {
  id: 'without-a-trace',
  name: 'Without a Trace',
  talentTier: 'standard',
  description:
    "When a rogue with this talent successfully uses evasion or improved evasion to take no damage from an attack, she can attempt to hide as an immediate action by making a Stealth check with a –20 penalty. She gains a +1 bonus on the Stealth check for every die of damage the avoided attack would have dealt. She can attempt this check while being observed if she has cover, concealment, or an ability that allows her to use Stealth while observed.",
  prerequisites: [
    { type: 'special', description: 'Evasion or Improved Evasion class feature' },
  ],
  source: 'pf1e-rtt',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ── Advanced Talents: Entries 67–80 ─────────────────────────────────────────

export const againstTheWall: RogueTalentDocument = {
  id: 'against-the-wall',
  name: 'Against the Wall',
  talentTier: 'advanced',
  description:
    'A rogue with this talent is treated as flanking any opponent adjacent to a stone wall (whether the stone is worked or unworked).',
  source: 'pf1e-emh',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const alignedDisguise: RogueTalentDocument = {
  id: 'aligned-disguise',
  name: 'Aligned Disguise',
  talentTier: 'advanced',
  description:
    'A rogue with this talent who has the ability to use disguise self can simultaneously mask her alignment aura when using that ability. She can appear as having any specific alignment or as having no alignment to spells and effects such as detect evil. The alignment masking lasts for the duration of the disguise self effect. This ability provides no protection against spells or effects that cause harm based on alignment.',
  prerequisites: [
    { type: 'special', description: 'disguise self spell-like ability (e.g., from one of those faces talent)' },
  ],
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const anotherDay: RogueTalentDocument = {
  id: 'another-day',
  name: 'Another Day',
  talentTier: 'advanced',
  description:
    'Once per day, when a rogue with this talent is reduced to 0 or fewer hit points by a melee attack, she can take a 5-foot step as an immediate action. If this movement takes her out of the reach of the attacker, she takes no damage from the attack. The rogue is staggered for 1 round on her next turn.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const blindingStrike: RogueTalentDocument = {
  id: 'blinding-strike',
  name: 'Blinding Strike',
  talentTier: 'advanced',
  description:
    'A rogue who selects this talent gains Blinding Critical as a bonus feat, even if she does not meet the prerequisites.',
  prerequisites: [
    { type: 'special', description: 'obscuring blow rogue talent' },
    { type: 'level', minimum: 15, class: 'rogue' },
  ],
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const confoundingBlades: RogueTalentDocument = {
  id: 'confounding-blades',
  name: 'Confounding Blades',
  talentTier: 'advanced',
  description:
    "When a rogue with this talent hits a creature using a melee weapon that deals sneak attack damage, the target cannot make attacks of opportunity for 1d4+1 rounds.",
  prerequisites: [{ type: 'special', description: 'slow reactions rogue talent' }],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const cripplingStrike: RogueTalentDocument = {
  id: 'crippling-strike',
  name: 'Crippling Strike',
  talentTier: 'advanced',
  description:
    'A rogue with this ability can deliver sneak attacks with such precision that her blows weaken and slow opponents. An opponent damaged by one of her sneak attacks also takes 2 points of Strength damage.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const danceOfDisorientingShadows: RogueTalentDocument = {
  id: 'dance-of-disorienting-shadows',
  name: 'Dance of Disorienting Shadows',
  talentTier: 'advanced',
  description:
    'A rogue with this talent can attempt a Perform (dance) check in place of a combat maneuver check when attempting a reposition combat maneuver.',
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const deadlyCocktail: RogueTalentDocument = {
  id: 'deadly-cocktail',
  name: 'Deadly Cocktail',
  talentTier: 'advanced',
  description:
    "A rogue with this talent can apply two doses of poison to a weapon simultaneously. These can be separate poisons, in which case they both affect the target individually, or two doses of the same toxin, in which case the poisons' frequency is extended by 50% and the save DC increases by +2. This is an exception to the normal rule that injury poisons can only be applied in a single dose.",
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const deadlySneak: RogueTalentDocument = {
  id: 'deadly-sneak',
  name: 'Deadly Sneak',
  talentTier: 'advanced',
  description:
    'When a rogue with this talent uses the powerful sneak rogue talent, she treats all 1s and 2s on sneak attack damage dice as 3s.',
  prerequisites: [{ type: 'special', description: 'powerful sneak rogue talent' }],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const defensiveRoll: RogueTalentDocument = {
  id: 'defensive-roll',
  name: 'Defensive Roll',
  talentTier: 'advanced',
  description:
    'The rogue can roll with a potentially lethal blow to take less damage from it once per day. When she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or blow, but not a spell or special ability), the rogue can attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half that amount of damage. She must be aware of the attack and able to react to it—if she is denied her Dexterity bonus to AC, she cannot use this ability. Evasion does not apply to the defensive roll.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const dispellingAttack: RogueTalentDocument = {
  id: 'dispelling-attack',
  name: 'Dispelling Attack',
  talentTier: 'advanced',
  description:
    "The rogue can spend a standard action to make a single melee attack. If this attack hits a creature and deals sneak attack damage, the lowest-level spell effect currently active on the target is targeted by a dispel magic effect. The caster level for this effect equals the rogue's level.",
  prerequisites: [{ type: 'special', description: 'major magic rogue talent' }],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const entanglementOfBlades: RogueTalentDocument = {
  id: 'entanglement-of-blades',
  name: 'Entanglement of Blades',
  talentTier: 'advanced',
  description:
    "When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, that creature cannot take a 5-foot step until the beginning of the rogue's next turn.",
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const familiar: RogueTalentDocument = {
  id: 'familiar',
  name: 'Familiar',
  talentTier: 'advanced',
  description:
    "A rogue with this talent gains a familiar as though she had the wizard's arcane bond class feature. The rogue's effective wizard level for this ability equals her rogue level – 4.",
  prerequisites: [
    { type: 'special', description: 'major magic rogue talent' },
    { type: 'special', description: 'minor magic rogue talent' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fastTumble: RogueTalentDocument = {
  id: 'fast-tumble',
  name: 'Fast Tumble',
  talentTier: 'advanced',
  description:
    'When a rogue with this talent uses Acrobatics to move through threatened squares, the DC of the Acrobatics check does not increase by 10 for moving at full speed.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ── Advanced Talents: Entries 81–100 ────────────────────────────────────────

export const feat: RogueTalentDocument = {
  id: 'feat',
  name: 'Feat',
  talentTier: 'advanced',
  description:
    'A rogue may gain any feat that she qualifies for in place of a rogue talent.',
  prerequisites: [
    { type: 'special', description: 'Must meet the prerequisite(s) of the selected feat' },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const foundersBlessing: RogueTalentDocument = {
  id: 'founders-blessing',
  name: "Founders' Blessing",
  talentTier: 'advanced',
  description:
    'Once per day, the rogue can select a skill in which she has no ranks. After spending 10 minutes communing with spirits, she gains a luck bonus equal to her rogue level on checks with that skill and can use the skill as if she were trained in it. This benefit lasts for 8 hours.',
  source: 'pf1e-ag',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const frugalTrapsmith: RogueTalentDocument = {
  id: 'frugal-trapsmith',
  name: 'Frugal Trapsmith',
  talentTier: 'advanced',
  description:
    'When a rogue with this talent constructs a mechanical trap, she only pays 75% of the normal cost.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const getawayMaster: RogueTalentDocument = {
  id: 'getaway-master',
  name: 'Getaway Master',
  talentTier: 'advanced',
  description: 'A rogue with this talent gains a +10 bonus on all Drive checks.',
  prerequisites: [{ type: 'special', description: 'getaway artist rogue talent' }],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const glibFacade: RogueTalentDocument = {
  id: 'glib-facade',
  name: 'Glib Facade',
  talentTier: 'advanced',
  description:
    'A rogue with this talent can use glibness as a spell-like ability once per day, using her rogue level as the caster level.',
  prerequisites: [{ type: 'special', description: 'innocent facade rogue talent' }],
  source: 'pf1e-mtt',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const hardMinded: RogueTalentDocument = {
  id: 'hard-minded',
  name: 'Hard Minded',
  talentTier: 'advanced',
  description:
    "A rogue with this talent automatically receives a save to disbelieve any illusion she can see each round at the start of her turn, even if she hasn't interacted with it. Additionally, if she fails a saving throw against a non-disbelief illusion, she can attempt the save again 1 round later at the same DC. She gets only one extra chance to succeed at her saving throw.",
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const harrowStrike: RogueTalentDocument = {
  id: 'harrow-strike',
  name: 'Harrow Strike',
  talentTier: 'advanced',
  description:
    "Once per day, when the rogue makes a sneak attack, she can draw a card at random from a harrow deck. If the attack hits, the rogue deals ability damage equal to her number of sneak attack dice instead of the normal sneak attack damage; the specific ability score damaged corresponds to the suit of the card drawn. The rogue gains additional daily uses of this ability at 15th level and again at 20th level (maximum three times per day).",
  prerequisites: [{ type: 'special', description: 'Must possess a harrow deck' }],
  source: 'pf1e-harrow',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const hiddenMind: RogueTalentDocument = {
  id: 'hidden-mind',
  name: 'Hidden Mind',
  talentTier: 'advanced',
  description:
    "A rogue with this talent uses various devious techniques, including mental exercises and dusting her clothing with a small amount of lead, to protect herself from divinations. The protection functions identically to casting nondetection with a caster level equal to the rogue's class level. This talent is available only to standard and unchained rogues, not to other classes or alternate classes that can select rogue talents (such as ninjas).",
  prerequisites: [{ type: 'level', minimum: 10, class: 'rogue' }],
  source: 'pf1e-ui',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const hideInPlainSight: RogueTalentDocument = {
  id: 'hide-in-plain-sight',
  name: 'Hide in Plain Sight',
  talentTier: 'advanced',
  description:
    "A rogue with this talent selects one terrain type from the ranger's favored terrain list. While in that terrain, she can use the Stealth skill to hide even while being observed. The rogue may select this talent multiple times, each time selecting a different terrain type.",
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const huntersSurprise: RogueTalentDocument = {
  id: 'hunters-surprise',
  name: "Hunter's Surprise",
  talentTier: 'advanced',
  description:
    'Once per day, a rogue with this talent can designate a single adjacent enemy as her prey. Until the end of her next turn, she can add her sneak attack damage to all attacks made against that creature, even if she is not flanking it or it is not flat-footed.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const improvedEvasion: RogueTalentDocument = {
  id: 'improved-evasion',
  name: 'Improved Evasion',
  talentTier: 'advanced',
  description:
    "This ability works like evasion, except that while the rogue still takes no damage on a successful Reflex saving throw against attacks such as a dragon's breath weapon or a fireball, henceforth she takes only half damage on a failed save. A helpless rogue does not gain the benefit of improved evasion.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const improvedShadowsChill: RogueTalentDocument = {
  id: 'improved-shadows-chill',
  name: "Improved Shadow's Chill",
  talentTier: 'advanced',
  description:
    'When a rogue with this talent hits a creature with a melee weapon dealing sneak attack damage, all of the sneak attack damage is cold damage. Normal weapon damage is unaffected.',
  prerequisites: [
    { type: 'special', description: 'Cold resistance racial trait' },
    { type: 'special', description: "shadow's chill rogue talent" },
  ],
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const knockOutBlow: RogueTalentDocument = {
  id: 'knock-out-blow',
  name: 'Knock-Out Blow',
  talentTier: 'advanced',
  description:
    "Once per day, the rogue can forgo her sneak attack damage to attempt to knock out an opponent. If the attack hits, it deals normal damage, but instead of dealing sneak attack damage, the target falls unconscious for 1d4 rounds. A successful Fortitude save (DC = 10 + half the rogue's level + her Intelligence modifier) reduces this effect to staggered for 1 round.",
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const masterOfDisguise: RogueTalentDocument = {
  id: 'master-of-disguise',
  name: 'Master of Disguise',
  talentTier: 'advanced',
  description:
    'Once per day, a rogue with this talent can gain a +10 bonus on a single Disguise check.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const masterTricks: RogueTalentDocument = {
  id: 'master-tricks',
  name: 'Master Tricks',
  talentTier: 'advanced',
  description:
    'A rogue with this talent can select a master trick (a ninja trick from the master tricks list) in place of an advanced rogue talent. She cannot select a ninja trick with the same name as an existing rogue talent. If the trick requires ki points, she can use it only if she has a ki pool.',
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const opportunist: RogueTalentDocument = {
  id: 'opportunist',
  name: 'Opportunist',
  talentTier: 'advanced',
  description:
    'Once per round, the rogue can make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. This attack counts as the rogue\'s attack of opportunity for that round. Even a rogue with the Combat Reflexes feat cannot use the opportunist ability more than once per round.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const petrifyingStrike: RogueTalentDocument = {
  id: 'petrifying-strike',
  name: 'Petrifying Strike',
  talentTier: 'advanced',
  description:
    'Whenever the rogue damages a creature with one of her sneak attacks, she also deals 2 points of Dexterity damage to that creature as its body petrifies.',
  source: 'pf1e-emh',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const redirectAttack: RogueTalentDocument = {
  id: 'redirect-attack',
  name: 'Redirect Attack',
  talentTier: 'advanced',
  description:
    'Once per day, when a rogue with this talent is hit with a melee attack, she can redirect the attack to strike at an adjacent creature with a free action. The attacker must make a new attack roll against the new target using the same bonuses as the original attack roll.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const reflexiveShadowShield: RogueTalentDocument = {
  id: 'reflexive-shadow-shield',
  name: 'Reflexive Shadow Shield',
  talentTier: 'advanced',
  description:
    "Once per day as an immediate action, a rogue with this talent gains cold or electricity resistance equal to half her rogue level for 1 round. If the rogue possesses the shadowy resistance racial trait, this resistance stacks with that trait; otherwise it does not stack with any existing cold or electricity resistance the character has.",
  prerequisites: [{ type: 'special', description: 'resiliency rogue talent' }],
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const resonatingRumbles: RogueTalentDocument = {
  id: 'resonating-rumbles',
  name: 'Resonating Rumbles',
  talentTier: 'advanced',
  description:
    "When a rogue with this talent makes a successful sneak attack against a creature with the tremorsense ability, she can subtract 3 dice from her sneak attack damage to prevent that creature from using tremorsense for a number of rounds equal to half her rogue level.",
  source: 'pf1e-emh',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ── Advanced Talents: Entries 101–113 ───────────────────────────────────────

export const rumormonger: RogueTalentDocument = {
  id: 'rumormonger',
  name: 'Rumormonger',
  talentTier: 'advanced',
  description:
    'A rogue with this talent can spend time spreading rumors through a settlement. She may attempt this a number of times per week equal to her Charisma modifier (minimum 0). The DC to spread a rumor depends on the size of the settlement: Small Town DC 18, Large Town DC 20, Small City DC 25, Large City DC 30, Metropolis DC 35. Rumors take 1 week to spread; exceeding the DC by 5 or more reduces propagation time by 1d4 days. A failed check means the rumor gains no traction; failing by 5 or more causes an opposing rumor to take hold instead.',
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const seeInDarkness: RogueTalentDocument = {
  id: 'see-in-darkness',
  name: 'See in Darkness',
  talentTier: 'advanced',
  description:
    'The rogue gains the see in darkness universal monster ability, allowing her to see perfectly in darkness of any kind, including magical darkness.',
  prerequisites: [{ type: 'special', description: 'Darkvision' }],
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const shadowDuplicate: RogueTalentDocument = {
  id: 'shadow-duplicate',
  name: 'Shadow Duplicate',
  talentTier: 'advanced',
  description:
    "Once per day as an immediate action when the rogue is hit in combat, she can create a single shadow duplicate of herself, as per the mirror image spell. The GM randomly determines whether the incoming attack connected with the real rogue or the duplicate. The duplicate persists for a number of rounds equal to the rogue's character level or until destroyed. This ability cannot be combined with the mirror image spell. The caster level equals her rogue level. The rogue gains one additional daily use for every 5 rogue levels she possesses.",
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const shrinewalk: RogueTalentDocument = {
  id: 'shrinewalk',
  name: 'Shrinewalk',
  talentTier: 'advanced',
  description:
    "A rogue with this ability can create her own shrine simply by designating an area in any urban region by placing a unique marking or rune on a wall or the ground. The marking is non-magical and loses its function if defaced or erased (but not if merely hidden or painted over). Once the shrine is established, the rogue can use word of recall once per day to return to the shrine. A rogue can maintain only one shrine at a time; creating a new one deactivates the previous shrine.",
  source: 'pf1e-ag',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const skillMastery: RogueTalentDocument = {
  id: 'skill-mastery',
  name: 'Skill Mastery',
  talentTier: 'advanced',
  description:
    'The rogue becomes so confident in the use of certain skills that she can use them reliably even under adverse conditions. Upon acquiring this ability, she selects a number of skills equal to 3 + her Intelligence modifier. When making a skill check with one of the selected skills, she may take 10 even if stress and distractions would normally prevent her from doing so. This ability can be taken multiple times; each time, it applies to a new set of skills.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const slipperyMind: RogueTalentDocument = {
  id: 'slippery-mind',
  name: 'Slippery Mind',
  talentTier: 'advanced',
  description:
    'If a rogue with slippery mind is affected by an enchantment spell or effect and fails her saving throw, she can attempt it again 1 round later at the same DC. She gets only one extra chance to succeed on her saving throw.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const stalker: RogueTalentDocument = {
  id: 'stalker',
  name: 'Stalker',
  talentTier: 'advanced',
  description:
    "A rogue with this talent can select a vigilante talent. She counts as a 10th-level vigilante with the stalker specialization for the purpose of selecting and using that talent. Her sneak attack functions as a hidden strike, but deals only half the normal amount of damage when applying vigilante talents; talents marked with an asterisk cannot be applied to her sneak attacks. This talent is available only to standard and unchained rogues, not to other classes or alternate classes that can select rogue talents (such as ninjas).",
  prerequisites: [{ type: 'level', minimum: 10, class: 'rogue' }],
  source: 'pf1e-ui',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const stealthySniper: RogueTalentDocument = {
  id: 'stealthy-sniper',
  name: 'Stealthy Sniper',
  talentTier: 'advanced',
  description:
    'When a rogue with this talent uses the Stealth skill to snipe, the penalty on the Stealth check to maintain her hidden status after making a ranged attack is reduced from –20 to –10.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const stonySkin: RogueTalentDocument = {
  id: 'stony-skin',
  name: 'Stony Skin',
  talentTier: 'advanced',
  description:
    'A rogue with this talent gains DR 2/adamantine. The rogue can select this talent up to three times; each additional selection increases the damage reduction by 1 (maximum DR 4/adamantine).',
  source: 'pf1e-emh',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const thoughtfulReexamining: RogueTalentDocument = {
  id: 'thoughtful-reexamining',
  name: 'Thoughtful Reexamining',
  talentTier: 'advanced',
  description:
    'Once per day, a rogue with this talent can reroll a Knowledge, Sense Motive, or Perception skill check. The reroll can be made at any time during the same day as the initial check, allowing the rogue to try to gain new or better information from the roll.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const unlockKi: RogueTalentDocument = {
  id: 'unlock-ki',
  name: 'Unlock Ki',
  talentTier: 'advanced',
  description:
    "A rogue with this talent increases the ki points gained from the ki pool rogue talent so that the total equals 1/2 her rogue level + her highest mental ability score modifier. Additionally, she can expend 2 ki points as a swift action to gain the skill unlocks for one skill based on her ranks in that skill for 1 minute.",
  prerequisites: [{ type: 'special', description: 'ki pool rogue talent' }],
  source: 'pf1e-mtt',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const unwittingAlly: RogueTalentDocument = {
  id: 'unwitting-ally',
  name: 'Unwitting Ally',
  talentTier: 'advanced',
  description:
    "A rogue with this talent can spend a swift action to attempt to make an opponent act as an ally for the purpose of flanking for 1 round. The opponent must be able to hear and see the rogue. The rogue makes a Bluff check opposed by the opponent's Sense Motive check. If successful, the opponent counts as an ally for flanking purposes until the start of the rogue's next turn. The rogue cannot use this ability on the same opponent for 24 hours after a success or failure. If the Bluff check fails by 5 or more, the rogue cannot use the ability against any opponent within line of sight for 24 hours.",
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const weaponSnatcher: RogueTalentDocument = {
  id: 'weapon-snatcher',
  name: 'Weapon Snatcher',
  talentTier: 'advanced',
  description:
    'A rogue with this talent can make a Sleight of Hand check in place of a combat maneuver check when attempting to disarm an opponent.',
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ── Batch array (entries 1–113) ──────────────────────────────────────────────

export const batch_002: RogueTalentDocument[] = [
  // Standard O–Z
  obfuscateStory,
  obscuringBlow,
  occultDungeoneer,
  occultMysticism,
  offensiveDefense,
  oneOfThoseFaces,
  papercraftTools,
  peerlessManeuver,
  philologist,
  pierceTheDarkness,
  poisonUse,
  positioningAttack,
  powerfulSneak,
  quickDisable,
  quickDisguise,
  quickScrounge,
  quickTrapsmith,
  rapidBoost,
  rapidPerception,
  resiliency,
  ridingStunt,
  rogueCrawl,
  ropeMaster,
  sacredSneakAttack,
  sacrificeSelf,
  scavenger,
  scryingFamiliarity,
  scrySlip,
  setUp,
  shadowsChill,
  shoveAside,
  signaturePoison,
  silencingStrike,
  sleightOfHandStunt,
  slowReactions,
  snapShot,
  sneakTraining,
  sneakyManeuver,
  snipersEye,
  spellStoring,
  standUp,
  stealTheStory,
  stealthStunt,
  stemTheFlow,
  strongImpression,
  strongStroke,
  superiorSniper,
  suppressPoison,
  surpriseAttack,
  survivalist,
  swiftPoison,
  swiftTracker,
  swimmingStunt,
  terrainMastery,
  theWholeTime,
  thrillOfTheChase,
  toxicRegurgitation,
  trapSpotter,
  umbralGear,
  unbalancingTrick,
  underhanded,
  underhandedTrick,
  wallScramble,
  weaponTraining,
  wildMagic,
  withoutATrace,
  // Advanced
  againstTheWall,
  alignedDisguise,
  anotherDay,
  blindingStrike,
  confoundingBlades,
  cripplingStrike,
  danceOfDisorientingShadows,
  deadlyCocktail,
  deadlySneak,
  defensiveRoll,
  dispellingAttack,
  entanglementOfBlades,
  familiar,
  fastTumble,
  feat,
  foundersBlessing,
  frugalTrapsmith,
  getawayMaster,
  glibFacade,
  hardMinded,
  harrowStrike,
  hiddenMind,
  hideInPlainSight,
  huntersSurprise,
  improvedEvasion,
  improvedShadowsChill,
  knockOutBlow,
  masterOfDisguise,
  masterTricks,
  opportunist,
  petrifyingStrike,
  redirectAttack,
  reflexiveShadowShield,
  resonatingRumbles,
  rumormonger,
  seeInDarkness,
  shadowDuplicate,
  shrinewalk,
  skillMastery,
  slipperyMind,
  stalker,
  stealthySniper,
  stonySkin,
  thoughtfulReexamining,
  unlockKi,
  unwittingAlly,
  weaponSnatcher,
];
