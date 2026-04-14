// Batch 001 | first: 'Acrobatic Assist' | last: 'Ninja Trick' | count: 83
import { RogueTalentEntry } from '@/types/classOptions';

// ── Entries 1–20 ────────────────────────────────────────────────────────────

export const acrobaticAssist: RogueTalentEntry = {
  id: 'acrobatic-assist',
  name: 'Acrobatic Assist',
  talentTier: 'standard',
  description:
    'You can expend an attack of opportunity to perform an aid another action assisting an adjacent ally\'s Acrobatics check, provided the ally makes the check as part of movement through your space or an adjacent space. When you successfully use aid another to help an ally with an Acrobatics check, that ally gains a +1 dodge bonus to AC against attacks of opportunity triggered by moving out of or within threatened areas until the end of their turn. Investigators can select this rogue talent through the rogue talent option for investigator talents.',
  source: 'pf1e-cc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const acrobaticStunt: RogueTalentEntry = {
  id: 'acrobatic-stunt',
  name: 'Acrobatic Stunt',
  talentTier: 'standard',
  description:
    'This is a skill stunt talent. The rogue can take a –10 penalty on an Acrobatics check to move at full speed while using Acrobatics.',
  prerequisites: [{ type: 'skill', skillId: 'acrobatics', ranks: 1 }],
  source: 'pf1e-isc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const accuratePoisoner: RogueTalentEntry = {
  id: 'accurate-poisoner',
  name: 'Accurate Poisoner',
  talentTier: 'standard',
  description:
    'When the rogue successfully hits an opponent with a poisoned weapon and would deal sneak attack damage, she can forgo the sneak attack damage and increase the poison\'s duration by 2 rounds (for example, large scorpion venom lasts for 8 rounds instead of 6 rounds, and drow poison lasts for 4 minutes instead of 2 minutes).',
  source: 'pf1e-pp',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const ambuscadingGrapple: RogueTalentEntry = {
  id: 'ambuscading-grapple',
  name: 'Ambuscading Grapple',
  talentTier: 'standard',
  description:
    'When you succeed at a combat maneuver check to grapple an unaware opponent, you can immediately deal sneak attack damage to the target. This counts as having hit with a sneak attack for the purpose of other abilities and talents.',
  source: 'pf1e-mhh',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const armorPiercer: RogueTalentEntry = {
  id: 'armor-piercer',
  name: 'Armor Piercer',
  talentTier: 'standard',
  description:
    'When you hit with an attack that deals sneak attack damage, you can forgo one or more sneak attack dice to reduce the target\'s natural armor bonus by that amount (minimum natural armor bonus of +0) until the end of your next turn. A creature cannot be affected by this ability again for 1 minute.',
  source: 'pf1e-mhh',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const assaultLeader: RogueTalentEntry = {
  id: 'assault-leader',
  name: 'Assault Leader',
  talentTier: 'standard',
  description:
    'Once per day, when the rogue misses with an attack on a flanked opponent, she can designate a single ally who is also flanking the target that her attack missed. That ally can make a single melee attack against the opponent as an immediate action.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const bardicPretender: RogueTalentEntry = {
  id: 'bardic-pretender',
  name: 'Bardic Pretender',
  talentTier: 'standard',
  description:
    'The rogue knows enough about music and performance to survive in a bardic college and can fake what she doesn\'t know. The rogue qualifies as having the inspire competence bardic performance class feature for purposes of meeting prestige class requirements. This talent does not grant the actual bardic performance ability itself.',
  source: 'pf1e-ap130',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const befuddlingStrike: RogueTalentEntry = {
  id: 'befuddling-strike',
  name: 'Befuddling Strike',
  talentTier: 'standard',
  description:
    'When the rogue deals sneak attack damage against an opponent, that opponent takes a –2 penalty on attack rolls against the rogue for 1d4 rounds.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const blackMarketConnections: RogueTalentEntry = {
  id: 'black-market-connections',
  name: 'Black Market Connections',
  talentTier: 'standard',
  description:
    'A rogue with this talent has enough pull with local criminal elements to trade in illegal goods. The rogue treats a settlement as one size category larger for the purpose of determining available magic items (see Table 15–1 in the Core Rulebook). If the rogue succeeds at a Diplomacy check (DC 10 + 2 × the number of items gained per week from illegal trade in this settlement this month), she can treat the settlement as two size categories larger. On a failed check, the rogue cannot use this talent in this settlement for one week; if she fails the check by 5 or more, local criminal organizations may take an interest in the rogue (at the GM\'s discretion). This ability does not apply in settlements where the criminal element has been eliminated or in which the rogue has been publicly identified as an enemy of the criminal organizations operating there.',
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const bleedingAttack: RogueTalentEntry = {
  id: 'bleeding-attack',
  name: 'Bleeding Attack',
  talentTier: 'standard',
  description:
    'A rogue with this ability can cause living opponents to bleed by hitting them with a sneak attack. This attack causes the target to take 1 additional point of damage each round for each die of the rogue\'s sneak attack (e.g., 4d6 means 4 points of bleed). Bleeding creatures take that amount of damage every round at the start of each of their turns. The bleeding can be stopped by a DC 15 Heal check or the application of any effect that heals hit point damage. Bleeding damage from this ability does not stack with itself. Bleeding damage bypasses any DR the creature might possess.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const bomber: RogueTalentEntry = {
  id: 'bomber',
  name: 'Bomber',
  talentTier: 'standard',
  description:
    'A rogue with this talent can create a number of bombs per day equal to her Intelligence modifier (minimum 1). These bombs act as alchemist\'s bombs, except they deal damage equal to the damage dealt by the rogue\'s sneak attack (without the Intelligence modifier to damage that alchemists add to their bombs).',
  source: 'pf1e-rtt',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const bombersDiscovery: RogueTalentEntry = {
  id: 'bombers-discovery',
  name: "Bomber's Discovery",
  talentTier: 'standard',
  description: "A rogue with this talent gains an alchemist's discovery that modifies a bomb.",
  prerequisites: [{ type: 'special', description: 'bomber rogue talent' }],
  source: 'pf1e-rtt',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const camouflage: RogueTalentEntry = {
  id: 'camouflage',
  name: 'Camouflage',
  talentTier: 'standard',
  description:
    'A rogue with this talent can craft simple but effective camouflage from the surrounding foliage. The rogue needs 1 minute to prepare the camouflage, but once she does, it is good for the rest of the day or until the rogue fails a saving throw against an area effect spell that deals fire, cold, or acid damage, whichever comes first. The rogue gains a +4 bonus on Stealth checks while in the terrain that matches the foliage used to make the camouflage. This talent cannot be used in areas without natural foliage.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const cannyObserver: RogueTalentEntry = {
  id: 'canny-observer',
  name: 'Canny Observer',
  talentTier: 'standard',
  description:
    'When a rogue with this talent makes a Perception check to hear the details of a conversation or to find concealed or secret objects (including doors and traps), she gains a +4 bonus.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const cardSharp: RogueTalentEntry = {
  id: 'card-sharp',
  name: 'Card Sharp',
  talentTier: 'standard',
  description:
    'A rogue with this talent gains Deadly Dealer as a bonus feat, even if she does not meet the prerequisites. Thrown cards function as darts, though the rogue cannot enhance cards with additional magical power unless she possesses the Arcane Strike feat. This talent otherwise operates identically to the Deadly Dealer feat.',
  source: 'pf1e-harrow',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const carefulStab: RogueTalentEntry = {
  id: 'careful-stab',
  name: 'Careful Stab',
  talentTier: 'standard',
  description:
    'When a rogue with this talent reduces a creature to fewer than 0 hp with precision damage, she can choose to leave that creature at –1 hp and stable.',
  source: 'pf1e-ag',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const castling: RogueTalentEntry = {
  id: 'castling',
  name: 'Castling',
  talentTier: 'standard',
  description:
    "The rogue treats soft cover granted by creatures of her size or larger as though it were cover instead. Cover the rogue gains from this talent does not allow her to attempt Stealth checks.",
  source: 'pf1e-emh',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const charmer: RogueTalentEntry = {
  id: 'charmer',
  name: 'Charmer',
  talentTier: 'standard',
  description:
    'Once per day, the rogue can roll two dice while making a Diplomacy check, and take the better result. She must decide to use this talent before making the Diplomacy check. A rogue can use this ability one additional time per day for every 5 rogue levels she possesses.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const climbingStunt: RogueTalentEntry = {
  id: 'climbing-stunt',
  name: 'Climbing Stunt',
  talentTier: 'standard',
  description:
    'This is a skill stunt. The rogue can take a –10 penalty on a Climb check to move at full speed while climbing. Rogues may select multiple skill stunts keyed to different Dexterity or Strength-based skills, but cannot choose the same talent twice.',
  prerequisites: [{ type: 'skill', skillId: 'climb', ranks: 1 }],
  source: 'pf1e-isc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const cloyingShades: RogueTalentEntry = {
  id: 'cloying-shades',
  name: 'Cloying Shades',
  talentTier: 'standard',
  description:
    'When using dimension door or an equivalent teleportation ability (such as abundant step or shadow jump), all creatures adjacent to the rogue at the start and end of her teleportation are entangled by grasping shadows for 1 round. Affected creatures may attempt a Reflex saving throw to negate the effect. The DC equals 10 + 1/2 the rogue\'s level + the higher of the rogue\'s Intelligence or Charisma modifier. The entanglement effect does not anchor creatures in place.',
  prerequisites: [
    {
      type: 'special',
      description:
        'Must be able to cast dimension door as a spell or spell-like ability (including class features like abundant step or shadow jump)',
    },
  ],
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ── Entries 21–40 ───────────────────────────────────────────────────────────

export const coaxInformation: RogueTalentEntry = {
  id: 'coax-information',
  name: 'Coax Information',
  talentTier: 'standard',
  description:
    'A rogue with this talent can use Bluff or Diplomacy in place of Intimidate to force an opponent to act friendly toward her.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const combatSwipe: RogueTalentEntry = {
  id: 'combat-swipe',
  name: 'Combat Swipe',
  talentTier: 'standard',
  description: 'A rogue who selects this talent gains Improved Steal as a bonus feat.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const combatTrick: RogueTalentEntry = {
  id: 'combat-trick',
  name: 'Combat Trick',
  talentTier: 'standard',
  description: 'A rogue that selects this talent gains a bonus combat feat.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const convincingLie: RogueTalentEntry = {
  id: 'convincing-lie',
  name: 'Convincing Lie',
  talentTier: 'standard',
  description:
    'When a rogue with this talent successfully uses Bluff to convince someone that what she is saying is true, if that same listener is questioned by another individual, she automatically uses the rogue\'s Bluff modifier to convince the questioner, rather than making her own Bluff check (she uses the rogue\'s skill modifier instead of her own). If the listener has a higher Bluff modifier than the rogue, the listener can use her own Bluff modifier +2 instead. This effect lasts for a number of days equal to 1/2 the rogue\'s level + her Charisma modifier.',
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const cunningTrigger: RogueTalentEntry = {
  id: 'cunning-trigger',
  name: 'Cunning Trigger',
  talentTier: 'standard',
  description:
    'A rogue with this talent can use a swift action to set off any trap within 30 feet that she constructed.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const dampenPresence: RogueTalentEntry = {
  id: 'dampen-presence',
  name: 'Dampen Presence',
  talentTier: 'standard',
  description:
    'A rogue who selects this talent gains Dampen Presence as a bonus feat. The rogue does not need to meet the feat\'s prerequisites. Additionally, the rogue is treated as having the Skill Focus (Stealth) feat for purposes of meeting prerequisites for any feat that lists Dampen Presence as a prerequisite.',
  source: 'pf1e-mtt',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const deftPalm: RogueTalentEntry = {
  id: 'deft-palm',
  name: 'Deft Palm',
  talentTier: 'standard',
  description:
    'A rogue with this talent can make a Sleight of Hand check to conceal a weapon while holding it in plain sight, even while she is being observed.',
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const demandAttention: RogueTalentEntry = {
  id: 'demand-attention',
  name: 'Demand Attention',
  talentTier: 'standard',
  description:
    'Once per round, the rogue can sacrifice sneak attack damage to distract a creature she hits with a sneak attack. The target must succeed at a Will save with DC equal to 10 + the number of sneak attack dice sacrificed + the rogue\'s Charisma modifier or become distracted until the start of the rogue\'s next turn. A distracted creature is so focused on the rogue that it cannot observe other characters within 30 feet, allowing those targets to attempt Stealth checks to hide. A distracted opponent automatically fails Perception checks against creatures located more than 30 feet away. Investigators and slayers can select this talent through their respective rogue talent options.',
  source: 'pf1e-cc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const demonLantern: RogueTalentEntry = {
  id: 'demon-lantern',
  name: 'Demon Lantern',
  talentTier: 'standard',
  description:
    "Once per day when she casts dancing lights, the rogue can conjure a single demon's lantern instead of the usual four lights. This conjured lantern functions as a hypnotic pattern spell cast by a wizard of the rogue's level, while also providing illumination equivalent to a torch. The effect fascinates only one target whose Hit Dice don't surpass the rogue's class level. The save DC equals 11 plus the rogue's Intelligence modifier.",
  prerequisites: [
    { type: 'ability_score', ability: 'INT', minimum: 11 },
    { type: 'special', description: 'minor magic rogue talent (dancing lights)' },
  ],
  source: 'pf1e-harrow',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const developedPoisonImmunity: RogueTalentEntry = {
  id: 'developed-poison-immunity',
  name: 'Developed Poison Immunity',
  talentTier: 'standard',
  description:
    'When this talent is taken, select a single animal or plant poison that the rogue has been poisoned with but survived. The rogue automatically succeeds at all Fortitude saves against exposure to the selected poison.',
  prerequisites: [
    { type: 'special', description: 'Must have previously survived exposure to the chosen poison' },
  ],
  source: 'pf1e-heroes-wild',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const disablingStunt: RogueTalentEntry = {
  id: 'disabling-stunt',
  name: 'Disabling Stunt',
  talentTier: 'standard',
  description:
    "This talent allows a rogue to make a Disable Device check against a construct's CMD as a standard action without provoking attacks of opportunity. Upon success, the rogue bypasses the construct's damage reduction when dealing sneak attack damage for 1 minute. Standard penalties apply if attempting this without thieves' tools. A rogue may select multiple skill stunts but only one per different skill, and cannot choose the same stunt twice.",
  prerequisites: [{ type: 'skill', skillId: 'disable-device', ranks: 1 }],
  source: 'pf1e-isc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const diseaseUse: RogueTalentEntry = {
  id: 'disease-use',
  name: 'Disease Use',
  talentTier: 'standard',
  description:
    'A rogue with this talent can apply filth from garbage, a sewer, a city street, a polluted area, or long-unwashed clothing or fur to a weapon as a standard action. The weapon then delivers filth fever on its next successful strike. The rogue avoids disease exposure unless wounded by the contaminated weapon. After a successful attack, the filth disperses and must be reapplied to use the ability again.',
  source: 'pf1e-blood-moon',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const distractingAttack: RogueTalentEntry = {
  id: 'distracting-attack',
  name: 'Distracting Attack',
  talentTier: 'standard',
  description:
    'A rogue with this talent can make sneak attacks with subtle flourishes that disorient and distract her enemy. When she hits a creature with a melee attack that deals sneak attack damage, she can forgo the additional damage to cause the creature to become flat-footed against one target of her choosing until the beginning of her next turn. The rogue cannot designate herself as the beneficiary of this ability. Creatures with uncanny dodge are immune to this talent\'s effects.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const eerieDisappearance: RogueTalentEntry = {
  id: 'eerie-disappearance',
  name: 'Eerie Disappearance',
  talentTier: 'standard',
  description:
    "As a full-round action, the rogue can move up to her speed. If she successfully reaches a location that offers her cover or concealment, any creature observing her must attempt a Perception check opposed by the rogue's Stealth check. On a failed check, the observer loses track of the rogue and fails to note where she moved to. The rogue does not take a penalty on this Stealth check for moving up to her speed. At the end of her movement, the rogue can attempt an Intimidate check to demoralize all foes within 60 feet who were aware of her at any point during her movement and are unaware of her current location. She rolls the Intimidate check only once and compares her result to the DC for each opponent.",
  prerequisites: [{ type: 'level', minimum: 6, class: 'rogue' }],
  source: 'pf1e-heroes-street',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const eldritchConduit: RogueTalentEntry = {
  id: 'eldritch-conduit',
  name: 'Eldritch Conduit',
  talentTier: 'standard',
  description:
    'As a full-round action, a rogue with this talent can use two potions, two wands, or two scrolls. The rogue expends both items normally but gains the magical effect of one item while using the caster level from the other item to calculate that effect\'s power. Only one Use Magic Device check is needed for both items (if required for scrolls or wands).',
  source: 'pf1e-mtt',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const emboldeningStrike: RogueTalentEntry = {
  id: 'emboldening-strike',
  name: 'Emboldening Strike',
  talentTier: 'standard',
  description:
    'When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, she gains a +1 circumstance bonus on saving throws for every 2 sneak attack dice rolled (minimum +1) for 1 round.',
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const escapingStunt: RogueTalentEntry = {
  id: 'escaping-stunt',
  name: 'Escaping Stunt',
  talentTier: 'standard',
  description:
    'A rogue can use an immediate action to make an Escape Artist check in place of a Reflex saving throw against any effect that would impose the entangled condition. Once per day when targeted by a grapple combat maneuver, the rogue can attempt an Escape Artist check as an immediate action, using that result instead of her CMD against the maneuver. The rogue gains one additional daily use for every 5 rogue levels possessed. Rogues may select multiple skill stunts keyed to different Dexterity or Strength-based skills but cannot select the same stunt twice.',
  prerequisites: [{ type: 'skill', skillId: 'escape-artist', ranks: 1 }],
  source: 'pf1e-isc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const esotericScholar: RogueTalentEntry = {
  id: 'esoteric-scholar',
  name: 'Esoteric Scholar',
  talentTier: 'standard',
  description:
    'Once a day, a rogue with this talent may attempt a Knowledge check, even when she is not trained in that Knowledge skill.',
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const expertCipher: RogueTalentEntry = {
  id: 'expert-cipher',
  name: 'Expert Cipher',
  talentTier: 'standard',
  description:
    'A rogue with this talent can make a Linguistics check to decipher a single page of text as a full-round action rather than the standard 1 minute. When attempting a Use Magic Device check to cast a spell from a scroll, the rogue is treated as having the minimum ability score necessary to cast that particular spell. The rogue may add her Intelligence modifier to Use Magic Device skill checks instead of using her Charisma modifier.',
  source: 'pf1e-da',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const expertLeaper: RogueTalentEntry = {
  id: 'expert-leaper',
  name: 'Expert Leaper',
  talentTier: 'standard',
  description:
    'When a rogue with this talent makes Acrobatics checks to jump, she is always considered to have a running start. Whenever she deliberately falls, a successful DC 15 Acrobatics check allows her to ignore the first 20 feet fallen, instead of the first 10 feet.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ── Entries 41–60 ───────────────────────────────────────────────────────────

export const extinguishingStrike: RogueTalentEntry = {
  id: 'extinguishing-strike',
  name: 'Extinguishing Strike',
  talentTier: 'standard',
  description:
    'Whenever the rogue lands a melee attack dealing sneak attack damage, she automatically extinguishes non-magical light sources worn or carried by the creature (such as lit torches, lanterns, or sunrods). Additionally, once per day the rogue can attempt a dispel check (as per dispel magic) against any magical sources of light a target carries, using her rogue level as the caster level.',
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const faceInTheCrowd: RogueTalentEntry = {
  id: 'face-in-the-crowd',
  name: 'Face in the Crowd',
  talentTier: 'standard',
  description:
    'When the rogue makes opposed checks using Perception, Sense Motive, Bluff, Disguise, Sleight of Hand, or Stealth, those who oppose her checks take a –2 penalty if the rogue is within 30 feet of at least two non-hostile characters of her apparent type. The penalty increases to –4 when within 30 feet of eight or more such creatures, or when occupying a square within a crowd.',
  source: 'pf1e-blood-moon',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const falseAttacker: RogueTalentEntry = {
  id: 'false-attacker',
  name: 'False Attacker',
  talentTier: 'standard',
  description:
    "Whenever the rogue strikes a foe from hiding, she can attempt a Bluff check as an immediate action (opposed by the target's Sense Motive or Perception check, whichever has a higher bonus) before rolling damage to convince the foe that another creature was the attacker. If successful and the rogue maintains concealment or cover, her stealth doesn't end. The Bluff check uses normal modifiers for convincing someone of a falsehood and requires no shared language—physical trickery suffices.",
  source: 'pf1e-heroes-street',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const falseFriend: RogueTalentEntry = {
  id: 'false-friend',
  name: 'False Friend',
  talentTier: 'standard',
  description:
    'A rogue with this talent gains a +4 bonus when making Bluff checks to convince someone she has never met or who doesn\'t know her well that they are previously acquainted or know each other well.',
  source: 'pf1e-arg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const fastFingers: RogueTalentEntry = {
  id: 'fast-fingers',
  name: 'Fast Fingers',
  talentTier: 'standard',
  description:
    'Once per day, a rogue with this talent can roll two dice while making a Sleight of Hand check and take the better result. She must decide to use this talent before making the Sleight of Hand check. A rogue can use this ability one additional time per day for every 5 rogue levels she possesses.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const fastGetaway: RogueTalentEntry = {
  id: 'fast-getaway',
  name: 'Fast Getaway',
  talentTier: 'standard',
  description:
    'After successfully making a sneak attack or using the Sleight of Hand skill, a rogue with this talent can spend a move action to take the withdraw action. Her movement for this withdraw action is limited to her normal speed.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const fastPicks: RogueTalentEntry = {
  id: 'fast-picks',
  name: 'Fast Picks',
  talentTier: 'standard',
  description:
    "A rogue with this talent can use the Disable Device skill to attempt to open a lock as a standard action instead of a full-round action. Normal: Picking a lock takes a full-round action.",
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const fastStealth: RogueTalentEntry = {
  id: 'fast-stealth',
  name: 'Fast Stealth',
  talentTier: 'standard',
  description:
    'This ability allows a rogue to move at full speed using the Stealth skill without penalty.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const favoredTerrain: RogueTalentEntry = {
  id: 'favored-terrain',
  name: 'Favored Terrain',
  talentTier: 'standard',
  description:
    "The rogue selects one terrain from the ranger's favored terrain list; she gains this as a favored terrain, as the ranger class feature. If the rogue also has the hide in plain sight advanced talent, the favored terrain selections must align between both talents. For rogues with ranger levels, effective ranger level equals actual ranger level plus 5 when calculating bonuses and gaining new terrains from this talent.",
  prerequisites: [{ type: 'level', minimum: 5, class: 'rogue' }],
  source: 'pf1e-heroes-wild',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const feintFromShadows: RogueTalentEntry = {
  id: 'feint-from-shadows',
  name: 'Feint from Shadows',
  talentTier: 'standard',
  description:
    'A rogue with this talent can feint in combat using a ranged weapon against a target within 30 feet and cause the opponent to lose his Dexterity modifier against her next melee or ranged attack. The rogue must have partial concealment (but not full concealment) from the feint target.',
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const finesseRogue: RogueTalentEntry = {
  id: 'finesse-rogue',
  name: 'Finesse Rogue',
  talentTier: 'standard',
  description: 'A rogue that selects this talent gains Weapon Finesse as a bonus feat.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const firearmTraining: RogueTalentEntry = {
  id: 'firearm-training',
  name: 'Firearm Training',
  talentTier: 'standard',
  description: 'A rogue with this talent gains Exotic Weapon Proficiency (firearms).',
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const flyingStunt: RogueTalentEntry = {
  id: 'flying-stunt',
  name: 'Flying Stunt',
  talentTier: 'standard',
  description:
    "A rogue with this talent can make a Fly check against a target's CMD as a swift action when charging from above. On success, the rogue adds damage equal to her Dexterity modifier to the attack. This additional damage counts as precision damage and doesn't multiply on critical hits. Creatures immune to sneak attacks are also immune to this extra damage. Rogues may select multiple skill stunts each tied to a different Dexterity or Strength-based skill, but cannot choose the same one twice.",
  prerequisites: [{ type: 'skill', skillId: 'fly', ranks: 1 }],
  source: 'pf1e-isc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const focusingAttack: RogueTalentEntry = {
  id: 'focusing-attack',
  name: 'Focusing Attack',
  talentTier: 'standard',
  description:
    'When selecting this talent, the rogue must choose the confused, shaken, or sickened condition. When the rogue has the selected condition and hits a creature with a melee attack that deals sneak attack damage, the rogue no longer has that condition. A rogue can take this talent up to three times, selecting a different condition each time. She can remove only a single effect on herself with each melee attack that deals sneak attack damage, even if the talent has been taken multiple times.',
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const followClues: RogueTalentEntry = {
  id: 'follow-clues',
  name: 'Follow Clues',
  talentTier: 'standard',
  description:
    'A rogue with this talent can use Perception to follow tracks as per the Survival skill.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const fortifiedPosition: RogueTalentEntry = {
  id: 'fortified-position',
  name: 'Fortified Position',
  talentTier: 'standard',
  description:
    'Whenever the rogue gains a bonus on Reflex saves due to cover, she gains an equal bonus on Fortitude saves.',
  source: 'pf1e-emh',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const getawayArtist: RogueTalentEntry = {
  id: 'getaway-artist',
  name: 'Getaway Artist',
  talentTier: 'standard',
  description:
    'A rogue with this talent adds Fly, Handle Animal, and Ride to her list of class skills, and gains a +2 bonus on all driving checks.',
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const gloomMagic: RogueTalentEntry = {
  id: 'gloom-magic',
  name: 'Gloom Magic',
  talentTier: 'standard',
  description:
    "A rogue gains the ability to cast darkness two times per day as a spell-like ability. The darkness created does not impair the rogue's vision, and the caster level equals the rogue's level.",
  prerequisites: [
    { type: 'ability_score', ability: 'INT', minimum: 12 },
    { type: 'special', description: 'minor magic rogue talent' },
  ],
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const gotYourBack: RogueTalentEntry = {
  id: 'got-your-back',
  name: 'Got Your Back',
  talentTier: 'standard',
  description:
    'Once per round as an immediate action, you may expend an attack of opportunity to attempt an aid another check to improve an ally\'s attack. Both you and your ally must be flanking the same opponent. This action counts as consuming an attack of opportunity. The Investigator class can adopt this rogue talent through their rogue talent investigator talent selection option.',
  source: 'pf1e-cc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const greaterGloomMagic: RogueTalentEntry = {
  id: 'greater-gloom-magic',
  name: 'Greater Gloom Magic',
  talentTier: 'standard',
  description:
    "A rogue with this talent gains the ability to cast deeper darkness once each day as a spell-like ability. The darkness doesn't impair the rogue's vision, and the caster level equals the rogue's level.",
  prerequisites: [
    { type: 'ability_score', ability: 'INT', minimum: 13 },
    { type: 'special', description: 'gloom magic rogue talent' },
    { type: 'special', description: 'minor magic rogue talent' },
  ],
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ── Entries 61–83 ───────────────────────────────────────────────────────────

export const greenTongue: RogueTalentEntry = {
  id: 'green-tongue',
  name: 'Green Tongue',
  talentTier: 'standard',
  description:
    'The rogue gains one bonus language from the following options: Aklo, Aquan, Auran, Giant, Ignan, Sylvan, or Terran. Additionally, the rogue may make a Linguistics check (DC 15) to communicate basic concepts with magical beasts and monstrous humanoids that don\'t share a common language with her.',
  source: 'pf1e-heroes-wild',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const grigJig: RogueTalentEntry = {
  id: 'grig-jig',
  name: 'Grig Jig',
  talentTier: 'standard',
  description:
    'Once daily, the rogue targets one humanoid within 30 feet and makes a Perform (dance) check as a full-round action without provoking attacks of opportunity. The target must succeed at a Will save (DC equal to the rogue\'s dance check result) or begin dancing uncontrollably. The effect persists as long as the rogue continues dancing each round. The dancing ends if the target is attacked or faces immediate danger. Each round, the target may attempt an Acrobatics check, Perform (dance) check, or Will save to end the effect. A creature who resists cannot be affected by the same rogue\'s ability for 24 hours. This is a mind-affecting effect. The rogue gains one daily use, plus one additional use per 5 rogue levels attained.',
  prerequisites: [{ type: 'ability_score', ability: 'INT', minimum: 12 }],
  source: 'pf1e-harrow',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const grit: RogueTalentEntry = {
  id: 'grit',
  name: 'Grit',
  talentTier: 'standard',
  description:
    'A rogue with this talent gains the Amateur Gunslinger feat and one grit feat of her choice. She must meet all requirements for whichever grit feat she selects.',
  prerequisites: [{ type: 'special', description: 'firearm training rogue talent' }],
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const guilefulPolyglot: RogueTalentEntry = {
  id: 'guileful-polyglot',
  name: 'Guileful Polyglot',
  talentTier: 'standard',
  description:
    'A rogue with at least one rank in Linguistics gains four additional languages. A rogue without any ranks in Linguistics gains two additional languages. If the rogue later gains ranks in Linguistics, she gains two additional languages (to a total of four extra languages above and beyond those normally granted by Linguistics ranks).',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const hairpinTrick: RogueTalentEntry = {
  id: 'hairpin-trick',
  name: 'Hairpin Trick',
  talentTier: 'standard',
  description:
    "The rogue is skilled at making do with anything she can find. She takes no penalty on Disable Device checks for using improvised tools, and can attempt such checks without any tools at a –4 penalty. She treats all non-improvised Thieves' tools as masterwork and doubles the bonus she gets from masterwork Thieves' tools from +2 to +4.",
  source: 'pf1e-ag',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const hardToFool: RogueTalentEntry = {
  id: 'hard-to-fool',
  name: 'Hard to Fool',
  talentTier: 'standard',
  description:
    'Once per day, a rogue with this talent can roll two dice while making a Sense Motive check, and take the better result. She must decide to use this ability before making the Sense Motive check. A rogue can use this ability one additional time per day for every 5 rogue levels she possesses.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const headsUp: RogueTalentEntry = {
  id: 'heads-up',
  name: 'Heads Up',
  talentTier: 'standard',
  description:
    'When you make a Perception check, as an immediate or swift action you can allow one adjacent ally to act as if they had also made a Perception check with the same result.',
  source: 'pf1e-cc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const holdBreath: RogueTalentEntry = {
  id: 'hold-breath',
  name: 'Hold Breath',
  talentTier: 'standard',
  description:
    'A rogue with this talent increases the number of rounds she can hold her breath by 2. This talent may be selected multiple times, with each selection providing an additional +2 rounds.',
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const honeyedWords: RogueTalentEntry = {
  id: 'honeyed-words',
  name: 'Honeyed Words',
  talentTier: 'standard',
  description:
    'Once per day, the rogue can roll two dice while making a Bluff check, and take the better result. She must choose to use this talent before making the Bluff check. A rogue can use this ability one additional time per day for every five rogue levels she possesses.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const innocentFacade: RogueTalentEntry = {
  id: 'innocent-facade',
  name: 'Innocent Facade',
  talentTier: 'standard',
  description:
    "A rogue with this talent can cast the innocence spell as a spell-like ability once per day, using her rogue level as the caster level. Investigators may select this talent in place of an investigator talent, provided they have the required underworld inspiration talent first.",
  prerequisites: [{ type: 'special', description: 'minor magic rogue talent' }],
  source: 'pf1e-mtt',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const ironGuts: RogueTalentEntry = {
  id: 'iron-guts',
  name: 'Iron Guts',
  talentTier: 'standard',
  description:
    'A rogue with this talent has either a cast-iron stomach or has trained herself to withstand poisons, especially ingested ones. She gains a +1 bonus on saving throws against ingested poisons and a +4 bonus on saving throws against spells and effects that inflict the nauseated or sickened conditions.',
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const justAFaceInTheCrowd: RogueTalentEntry = {
  id: 'just-a-face-in-the-crowd',
  name: 'Just a Face in the Crowd',
  talentTier: 'standard',
  description:
    'The rogue receives a bonus equal to half her class level on Disguise and Perception checks when 10 or more creatures of her size are within 30 feet of her.',
  source: 'pf1e-mtt',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const kiPool: RogueTalentEntry = {
  id: 'ki-pool',
  name: 'Ki Pool',
  talentTier: 'standard',
  description:
    "A rogue gains a small ki pool similar to a ninja's, but without extra attacks. The rogue receives a number of ki points equal to her Wisdom modifier (minimum 1) that replenish at the start of each day. If the rogue already possesses or later gains another ki pool, she receives half her Wisdom bonus (minimum 1) as bonus ki points added to that pool. The rogue can spend a ki point to gain a +10-foot bonus to movement until the end of her turn.",
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const knockoutQueen: RogueTalentEntry = {
  id: 'knockout-queen',
  name: 'Knockout Queen',
  talentTier: 'standard',
  description:
    'Once per day, the rogue can create 1 or more doses of drow poison by spending 25 gp per dose; this process takes 30 minutes of work, regardless of the number of doses she creates. The rogue may produce a maximum quantity equal to one dose for every three rogue levels (minimum one dose). This poison creation requires no skill check, though the product deteriorates within twenty-four hours if unused.',
  source: 'pf1e-ag',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const lastDitchEffort: RogueTalentEntry = {
  id: 'last-ditch-effort',
  name: 'Last Ditch Effort',
  talentTier: 'standard',
  description:
    'Once per day, a rogue with this ability who accidentally activates a trap while attempting to disarm it may immediately attempt another Disable Device check to disarm it, albeit at a –5 penalty. The second check result must be accepted regardless of whether it\'s lower than the first attempt.',
  source: 'pf1e-pots',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const lastingPoison: RogueTalentEntry = {
  id: 'lasting-poison',
  name: 'Lasting Poison',
  talentTier: 'standard',
  description:
    'A rogue with this talent can apply poison to a weapon in such a way that it remains effective for two successful attacks rather than one. The poison remains on the weapon for 1 minute before drying. Targets of the weapon receive a +2 circumstance bonus on saving throws against the poison, however. Applying poison in this way requires a full-round action, or a standard action if the rogue also has the swift poison talent.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const ledgeWalker: RogueTalentEntry = {
  id: 'ledge-walker',
  name: 'Ledge Walker',
  talentTier: 'standard',
  description:
    'This ability allows a rogue to move along narrow surfaces at full speed using the Acrobatics skill without penalty. In addition, a rogue with this ability is not flat-footed when using Acrobatics to move along narrow surfaces.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const lingeringPoison: RogueTalentEntry = {
  id: 'lingering-poison',
  name: 'Lingering Poison',
  talentTier: 'standard',
  description:
    "When she delivers a contact or injury poison, instead of the poison's normal onset time, the rogue can delay the poison's effects until up to 1 day from when it is delivered (minimum 1 round). The poison remains detectable through standard detection methods like detect poison spells and similar abilities.",
  source: 'pf1e-pp',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const majorMagic: RogueTalentEntry = {
  id: 'major-magic',
  name: 'Major Magic',
  talentTier: 'standard',
  description:
    "A rogue with this talent gains the ability to cast a 1st-level spell from the sorcerer/wizard spell list two times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 11 + the rogue's Intelligence modifier. The rogue must have an Intelligence of at least 11 to select this talent.",
  prerequisites: [
    { type: 'ability_score', ability: 'INT', minimum: 11 },
    { type: 'special', description: 'minor magic rogue talent' },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const mienOfDespair: RogueTalentEntry = {
  id: 'mien-of-despair',
  name: 'Mien of Despair',
  talentTier: 'standard',
  description:
    'When the rogue successfully uses Intimidate to demoralize a foe or executes a successful feint, the opponent loses any morale bonuses and cannot benefit from any morale bonuses for 1d4+1 rounds.',
  source: 'pf1e-blood-shadows',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const minorMagic: RogueTalentEntry = {
  id: 'minor-magic',
  name: 'Minor Magic',
  talentTier: 'standard',
  description:
    "A rogue with this talent gains the ability to cast a 0-level spell from the sorcerer/wizard spell list. This spell can be cast three times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 10 + the rogue's Intelligence modifier. The rogue must have an Intelligence of at least 10 to select this talent.",
  prerequisites: [{ type: 'ability_score', ability: 'INT', minimum: 10 }],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const nimbleClimber: RogueTalentEntry = {
  id: 'nimble-climber',
  name: 'Nimble Climber',
  talentTier: 'standard',
  description:
    'When a rogue with this talent fails a Climb check by 5 or more, she can immediately make another Climb check at the surface\'s base DC +10. If this check succeeds, she halts her descent and avoids taking fall damage entirely from this recovery attempt.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const ninjaTrick: RogueTalentEntry = {
  id: 'ninja-trick',
  name: 'Ninja Trick',
  talentTier: 'standard',
  description:
    'A rogue with this talent may select a trick from the ninja trick list. The rogue can choose but cannot use talents requiring ki points, unless she possesses a ki pool. A rogue cannot choose a ninja trick sharing the same name as an existing rogue talent. A rogue may select this talent multiple times.',
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ── Batch array (entries 1–83) ───────────────────────────────────────────────

export const batch_001: RogueTalentEntry[] = [
  acrobaticAssist,
  acrobaticStunt,
  accuratePoisoner,
  ambuscadingGrapple,
  armorPiercer,
  assaultLeader,
  bardicPretender,
  befuddlingStrike,
  blackMarketConnections,
  bleedingAttack,
  bomber,
  bombersDiscovery,
  camouflage,
  cannyObserver,
  cardSharp,
  carefulStab,
  castling,
  charmer,
  climbingStunt,
  cloyingShades,
  coaxInformation,
  combatSwipe,
  combatTrick,
  convincingLie,
  cunningTrigger,
  dampenPresence,
  deftPalm,
  demandAttention,
  demonLantern,
  developedPoisonImmunity,
  disablingStunt,
  diseaseUse,
  distractingAttack,
  eerieDisappearance,
  eldritchConduit,
  emboldeningStrike,
  escapingStunt,
  esotericScholar,
  expertCipher,
  expertLeaper,
  extinguishingStrike,
  faceInTheCrowd,
  falseAttacker,
  falseFriend,
  fastFingers,
  fastGetaway,
  fastPicks,
  fastStealth,
  favoredTerrain,
  feintFromShadows,
  finesseRogue,
  firearmTraining,
  flyingStunt,
  focusingAttack,
  followClues,
  fortifiedPosition,
  getawayArtist,
  gloomMagic,
  gotYourBack,
  greaterGloomMagic,
  greenTongue,
  grigJig,
  grit,
  guilefulPolyglot,
  hairpinTrick,
  hardToFool,
  headsUp,
  holdBreath,
  honeyedWords,
  innocentFacade,
  ironGuts,
  justAFaceInTheCrowd,
  kiPool,
  knockoutQueen,
  lastDitchEffort,
  lastingPoison,
  ledgeWalker,
  lingeringPoison,
  majorMagic,
  mienOfDespair,
  minorMagic,
  nimbleClimber,
  ninjaTrick,
];
