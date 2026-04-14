// Batch 001 | first: inquisition-anger | last: inquisition-zeal | count: 40
// Sources: Ultimate Magic (pf1e-um), Ultimate Combat (pf1e-uc), Blood of Angels (pf1e-ppc-boa),
//   Blood of Fiends (pf1e-ppc-bof), Champions of Purity (pf1e-ppc-cop),
//   Faiths and Philosophies (pf1e-ppc-fp), Magical Marketplace (pf1e-ppc-mm),
//   Inner Sea Intrigue (pf1e-isi), Ultimate Intrigue (pf1e-ui), Inner Sea Campaigns (pf1e-isc)
// InquisitionEntry = ClassOptionBase (base fields only)

import { type InquisitionEntry } from '@/types/classOptions';

export const inquisitionsBatch001: InquisitionEntry[] = [
  {
    id: 'inquisition-anger',
    name: 'Anger Inquisition',
    description:
      "The inquisitor channels righteous fury against her enemies, gaining the ability to make an immediate melee counterattack when struck in combat (Hateful Resort). At 6th level she can enter a barbarian-style divine rage that enhances her combat abilities (Divine Anger). Deities of conflict and destruction favor this inquisition.",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-banishment',
    name: 'Banishment Inquisition',
    description:
      "The inquisitor gains a touch attack that causes evil creatures to become shaken and evil outsiders to become frightened (Righteous Awe). At 8th level she can use a dismissal spell-like ability against outsiders (Dismissive Touch). This inquisition is favored by deities of law and good who oppose fiendish incursion.",
    source: 'pf1e-ppc-boa',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-black-powder',
    name: 'Black Powder Inquisition',
    description:
      "The inquisitor gains bonus feats related to firearms and gunsmithing, reflecting divine sanction for modern weapons in the service of faith. She can also disrupt arcane spellcasters with her firearms, imposing concentration penalties on those she shoots. This inquisition requires GM approval and has no specific deity restriction.",
    source: 'pf1e-uc',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-chivalry',
    name: 'Chivalry Inquisition',
    description:
      "The inquisitor gains access to a mount as a cavalier of her level, combining divine purpose with mounted combat. At 8th level the mount also benefits from her judgment ability (Faithful Steed), making both rider and mount more effective in battle. Deities of honor and protection favor this martial inquisition.",
    source: 'pf1e-ppc-mm',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-clandestine',
    name: 'Clandestine Inquisition',
    description:
      "The inquisitor gains an invisibility ability for covert operations (Disappear) and enhanced skill rolls for deception and stealth (Blessed Secrecy). She also gains a spell delay mechanic that lets her hold spells for later effect (Delayed Spells). This inquisition suits those who serve their deity through infiltration and subterfuge.",
    source: 'pf1e-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-conversion',
    name: 'Conversion Inquisition',
    description:
      "The inquisitor uses Wisdom instead of Charisma for all Charisma-based persuasion skills, reflecting her divine conviction as the source of her influence (Charm of Wisdom). At 8th level she can affect a creature with a dominate person-like effect through oratory (Swaying Word). Any deity may grant this inquisition.",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-crime',
    name: 'Crime Inquisition',
    description:
      "The inquisitor gains a touch ability that stirs criminal impulses in a target, disrupting their concentration and resolve (Criminal Minds). At 8th level she gains enhanced theft-related abilities and bonuses to steal combat maneuvers (Thief's Soul). This inquisition is favored by deities associated with shadow and crime.",
    source: 'pf1e-ui',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-damnation',
    name: 'Damnation Inquisition',
    description:
      "The inquisitor can invoke divine condemnation to create fear in enemies (Fear the Flames). At 8th level she can deliver a soul-rending strike that functions like a variant of phantasmal killer, threatening targets with visions of eternal torment (Collector of Souls). Deities of death and darkness favor this inquisition.",
    source: 'pf1e-ppc-bof',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-excommunication',
    name: 'Excommunication Inquisition',
    description:
      "The inquisitor can silence enemies with a touch attack, cutting off their ability to communicate or cast verbal spells (Touch of Silence). At 8th level she can extend this into a lasting silence effect centered on a target that follows them as they move (Excommunicate). This inquisition has no specific deity requirement.",
    source: 'pf1e-ppc-fp',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-execution',
    name: 'Execution Inquisition',
    description:
      "The inquisitor can designate a target as her Chosen Victim, granting herself and nearby allies bonuses on attack rolls against that creature. At 8th level she automatically confirms critical hits against her chosen victim (Executioner's Strike). This inquisition is favored by deities of justice, death, and retribution.",
    source: 'pf1e-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-fate',
    name: 'Fate Inquisition',
    description:
      "The inquisitor gains a daily augury ability, consulting divine omens to determine the likely outcome of planned actions. She also gains combat bonuses in situations that align with her augury result, acting as an agent of inevitable fate (Agent of Fate). Deities of knowledge, death, and secrecy favor this inquisition.",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-fervor',
    name: 'Fervor Inquisition',
    description:
      "The inquisitor can channel holy or unholy fire as a ranged attack that deals damage and carries her divine conviction to distant enemies (Fire of Belief). At 8th level she can use a swift action to dramatically boost her combat effectiveness for one round, representing her fervor reaching a peak (Fervent Action).",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-final-rest',
    name: 'Final Rest Inquisition',
    description:
      "The inquisitor gains an enhanced disrupt undead ability that deals more damage and carries additional effects (Disrupt Animation). At 8th level her weapon gains the disruption special property against undead, automatically destroying them when they fail a saving throw against her strikes (Unravel Animation).",
    source: 'pf1e-ppc-cop',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-heresy',
    name: 'Heresy Inquisition',
    description:
      "The inquisitor can use Wisdom instead of Charisma for Bluff checks (Righteous Infiltration) and gains doubled results on Bluff checks against other worshippers (Blessed Infiltration). At 8th level she can pronounce a curse that marks a target as a heretic, imposing penalties on the condemned (Word of Anathema). This inquisition is available to any deity.",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-illumination',
    name: 'Illumination Inquisition',
    description:
      "The inquisitor can bestow a divine touch that grants a creature a bonus on skill checks and aids them in their next task (Illuminating Touch). At 4th level she radiates an aura of enlightenment that enhances the knowledge skills of nearby allies (Aura of Enlightenment). Deities of knowledge and light favor this inquisition.",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-imprisonment',
    name: 'Imprisonment Inquisition',
    description:
      "The inquisitor's critical hits create tangles of divine energy that entangle and restrain her targets (Caging Strike). At 8th level she can pronounce a divine sentence that functions as a hold monster effect, binding a creature in place with the full weight of divine law (Divine Prison). Deities of law and order favor this inquisition.",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-justice',
    name: 'Justice Inquisition',
    description:
      "The inquisitor gains enhanced ability to confirm critical hits, ensuring that divine justice is delivered with precision (Judicious Force). At 6th level she can form chains of divine justice with a target, causing both parties to share a portion of damage dealt—a deterrent meant to promote righteous conduct (Chains of Justice).",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-oblivion',
    name: 'Oblivion Inquisition',
    description:
      "The inquisitor radiates an aura that stabilizes nearby dying creatures and helps them cling to life (Life Anchor). At 8th level her gaze can reduce a creature's mind to blankness, functioning as a feeblemind effect delivered through a horrifying stare (Stare of Oblivion). Deities of dreams, death, and madness favor this inquisition.",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-order',
    name: 'Order Inquisition',
    description:
      "The inquisitor can project a protection from chaos effect, shielding herself and nearby allies from the taint of disorder (Mantle against Chaos). At 8th level she can direct a single target with a powerful divine command that functions as a greater command spell, forcing obedience to her will (Commanding Order). Deities of law favor this inquisition.",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-persistence',
    name: 'Persistence Inquisition',
    description:
      "The inquisitor gains the Step Up feat as a bonus feat and increases her land speed, reflecting divine favor that allows her to pursue enemies relentlessly (Relentless Footing). At 6th level she can heal herself as a swift action, drawing on inner divine reserves to sustain herself through the most grueling battles (Inner Strength).",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-politics',
    name: 'Politics Inquisition',
    description:
      "The inquisitor applies her Wisdom modifier to Diplomacy and Intimidate checks, using divine discernment rather than personal charm to navigate political discourse (Labyrinthine Words). At 8th level she can commune with divine power to gain insight into the desires and secrets of political rivals, granting her leverage over them (Heart's Desire).",
    source: 'pf1e-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-possession',
    name: 'Possession Inquisition',
    description:
      "The inquisitor gains a bonus on saving throws against enchantment spells and effects (Self-Control). At 4th level she can project her consciousness into an animal, perceiving through its senses (Beast Ride). At 10th level she can perform a full body-switching effect, displacing a creature's spirit from its flesh (Body Snatch).",
    source: 'pf1e-ppc-bof',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-recovery',
    name: 'Recovery Inquisition',
    description:
      "The inquisitor gains enhanced tracking abilities and bonuses when searching for specific individuals or objects (Focused Search). At 8th level she can use a locate creature or locate object variant to home in on a specific target she is pursuing (Locate Focus). Deities associated with justice and return favor this inquisition.",
    source: 'pf1e-ppc-cop',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-redemption',
    name: 'Redemption Inquisition',
    description:
      "The inquisitor gains bonuses on skill checks made to understand and rehabilitate wrongdoers (Patient Sensibility). She also gains the ability to grant her weapon the merciful property, rendering lethal strikes nonlethal (Redeemer's Mercy). At 8th level she can perform an atonement-like ritual to restore a fallen creature to goodness (Second Chance).",
    source: 'pf1e-ppc-fp',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-reformation',
    name: 'Reformation Inquisition',
    description:
      "The inquisitor uses her Wisdom modifier for Diplomacy checks involving moral instruction or reform (Inspired Rhetoric), and gains doubled results on such checks (Blessed Correction). At 8th level she can affect a target with a charm person-like effect delivered through compelling speech, steering the creature toward better conduct (Awaken Discontent).",
    source: 'pf1e-ppc-fp',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-restoration',
    name: 'Restoration Inquisition',
    description:
      "The inquisitor gains the ability to repair damaged objects and heal minor wounds on creatures through divine touch, mending what has been broken (Mend the Broken). At 8th level she can cleanse creatures of alignment-based penalties and grant them temporary spell resistance against spells from opposing alignments (Cleanse Impunity).",
    source: 'pf1e-ppc-mm',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-revelation',
    name: 'Revelation Inquisition',
    description:
      "The inquisitor can deal fire damage to creatures that are polymorphed or disguised, burning away false forms to expose the truth beneath (Burn Shroud). At 8th level she can forcibly strip away polymorph effects, dispelling magical disguises and compelling creatures to return to their true form (Reveal Form).",
    source: 'pf1e-ppc-boa',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-secrets',
    name: 'Secrets Inquisition',
    description:
      "The inquisitor gains flexible variants of detect thoughts and similar mind-probing abilities that adapt to different types of secrets (Detect Secrets). At 8th level she gains a constant nondetection effect, ensuring that the secrets she uncovers—and her own activities—remain hidden from magical inquiry (Closed Book).",
    source: 'pf1e-ui',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-sedition',
    name: 'Sedition Inquisition',
    description:
      "The inquisitor can manipulate the attitudes of those loyal to an authority, undermining their commitment and sowing doubt among enemy ranks (Undermine Authority). At 8th level she gains Leadership as a bonus feat and enhanced abilities to attract followers to a righteous cause or rebellion (Rebel Leader). Deities of freedom favor this inquisition.",
    source: 'pf1e-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-seduction',
    name: 'Seduction Inquisition',
    description:
      "The inquisitor uses personal magnetism to control conversations and manipulate the attitudes of those who find her attractive (Disarming Flirtation). She also gains enhanced influence over creatures she has interacted with closely, inspiring a devotion that borders on compulsion (Inspire Devotion). Deities of love and desire favor this inquisition.",
    source: 'pf1e-isi',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-sin',
    name: 'Sin Inquisition',
    description:
      "The inquisitor can read a creature's mind to identify its dominant sin, learning its weakness and gaining a bonus against it (Sin Sense). At 8th level she can compel a creature to indulge its sin compulsively, leaving it distracted and vulnerable as its worst impulses take over (Indulge). Deities of corruption favor this inquisition.",
    source: 'pf1e-ppc-bof',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-spellkiller',
    name: 'Spellkiller Inquisition',
    description:
      "The inquisitor gains Disruptive as a bonus feat, making it harder for nearby spellcasters to cast defensively. She also gains an AC bonus after defeating enemies in combat, and can stagger spellcasters with her strikes, interrupting their concentration at critical moments. This inquisition requires GM approval and has no specific deity restriction.",
    source: 'pf1e-uc',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-tactics',
    name: 'Tactics Inquisition',
    description:
      "The inquisitor can grant nearby allies a haste-like movement boost as a swift action, coordinating their movements in combat (Inquisitor's Direction). At 8th level she can grant a single ally a large bonus to initiative, seizing the moment to give her side a decisive advantage at the start of battle (Grant the Initiative).",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-torture',
    name: 'Torture Inquisition',
    description:
      "The inquisitor's fearsome reputation grants her an Intimidate bonus from a lingering aura of threat (Torturer's Presence). She can also deliver a touch of fatigue to weaken enemies before questioning or combat (Torturer's Touch). At 8th level she gains the ability to boost her critical hit confirmation, ensuring her most punishing blows land (Critical Precision).",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-true-death',
    name: 'True Death Inquisition',
    description:
      "The inquisitor's cure spells deal double damage to undead, treating them with focused divine destructive energy (Back to the Graves). At 8th level she can perform a funeral rite over a slain creature that permanently prevents it from rising as undead, ensuring its soul departs without interference (Hallowed Rite).",
    source: 'pf1e-ppc-boa',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-truth',
    name: 'Truth Inquisition',
    description:
      "The inquisitor gains an insight bonus touch that aids allies in detecting deception and finding accurate information (Justice's True Path). At 8th level she can use a grapple to impose a zone of truth effect on a creature, forcing honesty upon those she has physically subdued (Grasp of Honesty). Deities of truth and law favor this inquisition.",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-valor',
    name: 'Valor Inquisition',
    description:
      "The inquisitor can use a touch to remove fear effects from allies, bolstering their resolve through her divine confidence (Touch of Resolve). At 8th level she and nearby allies become completely immune to fear effects, radiating courage that cannot be shaken by mundane or magical means (Fearless). Deities of courage and protection favor this inquisition.",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-vengeance',
    name: 'Vengeance Inquisition',
    description:
      "The inquisitor can call down a divine retribution effect that deals environmental damage to a target, punishing them through the forces of nature (Divine Retribution). At 8th level she can rise up and counterattack when reduced to negative hit points, delivering a powerful blow even as she falls (Final Vengeance). Deities of revenge favor this inquisition.",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisition-zeal',
    name: 'Zeal Inquisition',
    description:
      "The inquisitor gains an emergency healing ability that triggers when she reaches 0 hit points, granting her a burst of divine energy (Zealous Surge). At 8th level she gains a favored enemy bonus against members of religions that oppose her own deity, channeling her zeal into focused martial superiority (Scourge of the Enemy).",
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// CHECKPOINT: last_written=inquisition-zeal, written=40/40, status=complete
