import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsMPFill: WondrousItemDefinition[] = [
  // ── batch 1 gap ──────────────────────────────────────────────
  {
    id: 'wondrous-mage-shot',
    name: 'Mage Shot',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',
    price: 118,
    weight: 0,
    description:
      'Mage shots are alchemical paper cartridges that replace the normal damage of a firearm with energy damage. ' +
      'Available in acid, cold, electricity, and fire varieties. On a hit, the firearm deals its normal damage as ' +
      'the chosen energy type instead of physical damage. Dragoon cartridge versions cost three times the listed price.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['acid splash'], cost: 59 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.mage_shot_energy_damage', value: 0, source: 'Mage Shot' }],
  },

  // ── batch 3 gaps ─────────────────────────────────────────────
  {
    id: 'wondrous-master-of-four-quarters',
    name: 'Master of Four Quarters',
    category: 'wondrous',
    source: 'Legacy of Fire',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9,
    slot: 'none',
    price: 12000,
    weight: 0,
    description:
      'An ivory seal adorned with red and blue jewels. Once daily, the user can present the seal as a standard action ' +
      'to cast charm monster against a single elemental creature within spell range. The target makes a DC 16 Will save ' +
      'to resist. If the elemental shares the same subtype as the imprisoned genie, it suffers a -4 penalty to its saving throw.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['charm monster'], cost: 6000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.master_four_quarters_charm', value: 0, source: 'Master of Four Quarters' }],
  },
  {
    id: 'wondrous-masters-squeeze-box',
    name: "Master's Squeeze-Box",
    category: 'wondrous',
    source: 'Ultimate Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 6000,
    weight: 5,
    description:
      'This magical concertina functions as a masterwork instrument, granting a +2 bonus on Perform (keyboard instruments) ' +
      'checks. The item switches between compressed and extended states as a free action during play. When compressed, the ' +
      'wielder gains the compression ability. When extended, the wielder becomes immune to constriction damage and burial ' +
      'damage, though suffocation protection is excluded.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['cushioning bands', 'grease'], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.perform_keyboard', value: 2, source: "Master's Squeeze-Box" },
    ],
  },
  {
    id: 'wondrous-memory-musk-gourd',
    name: 'Memory Musk Gourd',
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 16,
    slot: 'none',
    price: 4800,
    weight: 1,
    description:
      'This jungle-sourced gourd functions as a splash weapon causing those within 10 feet of impact to be dazed ' +
      'and blinded by the fumes for 1d4 rounds and forget the events of the previous round. A DC 20 Will save reduces ' +
      'this to one round of being dazzled. The effect qualifies as mind-affecting poison, and alchemists may substitute ' +
      'their bomb ability DC for the standard save difficulty.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['modify memory', 'waves of ecstasy'], cost: 2400 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.memory_musk_gourd_daze', value: 0, source: 'Memory Musk Gourd' }],
  },
  {
    id: 'wondrous-metalseeker-swarm',
    name: 'Metalseeker Swarm',
    category: 'wondrous',
    source: 'People of the River',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 5500,
    weight: 3,
    description:
      'A cube of Numerian steel that transforms into mechanical fireflies when activated once daily. The swarm covers ' +
      'a 60-foot radius, highlighting metal objects with candlelight-level illumination. Metal-armored creatures appear ' +
      'as if affected by faerie fire, while those wielding metal weapons become dazzled. The effect lasts 5 minutes ' +
      'before the fireflies reform into cube shape.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['detect metal', 'faerie fire', 'summon swarm'], cost: 2750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.metalseeker_swarm_detect', value: 0, source: 'Metalseeker Swarm' }],
  },
  {
    id: 'wondrous-migrus-locker',
    name: 'Migrus Locker',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 6,
    slot: 'none',
    price: 10000,
    weight: 20,
    description:
      'A fossilized wood locker that houses a desiccated, hairless cat-like creature with a humanoid face. When opened, ' +
      'the migrus animates and mimics the appearance of whoever releases it, treating that creature as its master. The ' +
      'creature follows simple verbal commands and takes a literal approach to problem-solving while collecting trophies. ' +
      'Upon death, it decays overnight and reconstitutes at dawn within the locker. The migrus possesses attributes of a ' +
      'cat familiar but has the construct type and cannot be permanently destroyed except by destroying the locker itself ' +
      '(hardness 5, 10 hp).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['reincarnate'], cost: 5000 },
    physicalStats: { hardness: 5, hitPoints: 10, breakDC: 15 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.migrus_locker_construct', value: 0, source: 'Migrus Locker' }],
  },
  {
    id: 'wondrous-mist-projector',
    name: 'Mist Projector',
    category: 'wondrous',
    source: 'Technology Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 4500,
    weight: 10,
    description:
      'This Numerian device projects a cone of fog that functions as obscuring mist. The lesser version creates a ' +
      '20-foot cone, while the greater version produces a 40-foot cone. The mist dissipates naturally after 5 rounds. ' +
      'The device can be activated three times per day.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['obscuring mist'], cost: 2250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.mist_projector_fog', value: 0, source: 'Mist Projector' }],
  },

  // ── batch 4 gaps ─────────────────────────────────────────────
  {
    id: 'wondrous-monuments-truth',
    name: "Monument's Truth",
    category: 'wondrous',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 12,
    slot: 'none',
    price: 3600,
    weight: 0,
    description:
      'An aromatic salve applied to gravestones or monuments that enables the user to pose six questions to the ' +
      'deceased, functioning like speak with dead. The buried creature must have possessed Intelligence 3+ and rested ' +
      'beneath the monument for at least one year. The item fails if multiple such creatures are interred at the same ' +
      'location, as their psychic impressions become too confused.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['speak with dead', 'stone tell'], cost: 1800 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.monuments_truth_speak_dead', value: 0, source: "Monument's Truth" }],
  },
  {
    id: 'wondrous-mummified-guardian',
    name: 'Mummified Guardian',
    category: 'wondrous',
    source: 'Mummy\'s Mask Player\'s Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'none',
    price: 3500,
    weight: 3,
    description:
      'A mummified house cat dried, filled with sand, and bound in linen wrappings that protects corpses from ' +
      'desecration. When placed in a sarcophagus with a dead body, it infuses the remains with positive energy, ' +
      'preventing undead transformation. The item generates a magical ward that triggers when the sarcophagus opens — ' +
      'creatures with 5 Hit Dice or fewer within 20 feet must make a DC 13 Will save or become frightened for 3 rounds ' +
      '(shaken for 1 round on success). After activation, only the sanctification ability remains.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['alarm', 'sanctify corpse', 'scare'], cost: 1750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.mummified_guardian_ward', value: 0, source: 'Mummified Guardian' }],
  },
  {
    id: 'wondrous-murderers-silence',
    name: "Murderer's Silence",
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'none',
    price: 900,
    weight: 1,
    description:
      'This black serum prevents corpses from being interrogated via speak with dead by destroying vocal organs. ' +
      'Application requires pouring the liquid down a corpse\'s throat as a full-round action (provoking attacks of ' +
      'opportunity). The following round, the tongue, vocal cords, and lips deteriorate. The item affects only these ' +
      'specific body parts and cannot be reversed by flesh-restoring magic. Other spirit communication methods remain functional.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['contagion'], cost: 450 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.murderers_silence_prevent_speak', value: 0, source: "Murderer's Silence" }],
  },
  {
    id: 'wondrous-music-box-trap',
    name: 'Music Box Trap',
    category: 'wondrous',
    source: 'Adventurer\'s Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'none',
    price: 20160,
    weight: 2,
    description:
      'This ornamental music box features a miniature Varisian dancer and functions as a spell repository. A ' +
      'spellcaster can store a single targeted mind-affecting spell of up to 4th level within it. When opened, the ' +
      'box plays briefly and the stored spell automatically targets whoever opens it after a 1-round delay. The ' +
      'original caster remains the spell\'s source for all game purposes. A DC 25 Perception check reveals the ' +
      'dancer\'s fixed gaze toward the target. Closing the box preserves the stored spell for later use.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['permanency', 'spite'], cost: 10080 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.music_box_trap_spell_store', value: 0, source: 'Music Box Trap' }],
  },
  {
    id: 'wondrous-mute-marionette',
    name: 'Mute Marionette',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'none',
    price: 16500,
    weight: 2,
    description:
      'This hag-shaped doll with sewn lips attunes to a creature type from the ranger\'s favored enemies list. When ' +
      'the owner shakes it within 30 feet of attuned creatures, those creatures must make a DC 11 Will save or suffer ' +
      'a 10% chance of spell failure for one hour. A creature cannot be targeted more than once per 24 hours. Once ' +
      'daily, the doll can cast confusion (DC 16) affecting all attuned creatures in a 15-foot radius burst within 170 feet.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['confusion', 'fumbletongue'], cost: 8250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.mute_marionette_spell_failure', value: 0, source: 'Mute Marionette' }],
  },
  {
    id: 'wondrous-navigators-eye',
    name: "Navigator's Eye",
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',
    price: 28800,
    weight: 6,
    description:
      'This brass astrolabe grants a +2 competence bonus on Knowledge (geography), Profession (sailor), and Survival ' +
      'checks used for navigation on land or sea, in addition to the standard +2 circumstance bonus an astrolabe ' +
      'provides. Once daily, the user can spend a move action making a DC 20 Perception check to gain true seeing for ' +
      '1 round, penetrating concealment from smoke or fog and providing a +10 competence bonus to Perception checks ' +
      'for locating hidden or disguised creatures and objects.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['know direction', 'true seeing'], cost: 14400 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.knowledge_geography', value: 2, source: "Navigator's Eye" },
      { type: 'bonus', bonusType: 'competence', target: 'skill.profession_sailor', value: 2, source: "Navigator's Eye" },
      { type: 'bonus', bonusType: 'competence', target: 'skill.survival', value: 2, source: "Navigator's Eye", condition: { type: 'custom', params: {}, description: 'navigation only' } },
    ],
  },

  // ── batch 5 gaps ─────────────────────────────────────────────
  {
    id: 'wondrous-fey-child-necklace',
    name: 'Fey Child Necklace',
    category: 'wondrous',
    source: 'Fey Revisited',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'neck',
    price: 9000,
    weight: 0,
    description:
      'This delicate silver chain bears a tiny charm shaped like a leaf. The wearer gains a +2 resistance bonus ' +
      'on saving throws against fey spell-like abilities and supernatural abilities. Once per day, the wearer can ' +
      'cast charm person as a spell-like ability (DC 13). If the wearer is a changeling, the save DC increases by 2.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['charm person', 'protection from evil'], cost: 4500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'resistance', target: 'save.will', value: 2, source: 'Fey Child Necklace', condition: { type: 'custom', params: {}, description: 'vs. fey spell-like and supernatural abilities' } },
    ],
  },
  {
    id: 'wondrous-necrograft-sallowflesh',
    name: 'Necrograft (Sallowflesh)',
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 5,
    slot: 'none',
    price: 20000,
    weight: 4,
    description:
      'Rotted skin scarification grafted onto the body. Grants a +2 natural armor bonus to AC. Mindless undead ' +
      'ignore the wearer; intelligent undead must succeed at a DC 11 Will save or mistake the wearer for undead.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate dead', 'hide from undead'], cost: 10000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'natural_armor', target: 'ac', value: 2, source: 'Necrograft (Sallowflesh)' },
    ],
  },
  {
    id: 'wondrous-needles-of-fleshgraving',
    name: 'Needles of Fleshgraving',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 8000,
    weight: 1,
    description:
      'These specialized tattooing needles provide a +5 competence bonus on Craft (tattoos) checks. Once daily, they ' +
      'can transform an object into a tattoo on a consenting creature over 10 minutes. Objects may attempt a DC 17 ' +
      'Fortitude save to resist. The resulting tattoo appears as a miniaturized version and radiates faint transmutation ' +
      'magic. A bearer can remove the tattoo as a standard action, reverting it to its original form. The tattoo ' +
      'automatically reverts after 7 days, upon dispelling, or when the tattooed creature dies.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['shrink item'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.craft_tattoo', value: 5, source: 'Needles of Fleshgraving' },
    ],
  },
  {
    id: 'wondrous-nobles-vigilant-pillbox',
    name: "Noble's Vigilant Pillbox",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',
    price: 3600,
    weight: 0,
    description:
      'A heart-shaped charm with three pearls (white, silver, black) that each offer detection and benefit abilities. ' +
      'The white pearl detects poison in a 10-foot radius and grants delay poison when swallowed. The silver pearl ' +
      'detects diseases within 10 feet and provides remove disease when consumed. The black pearl reveals invisible ' +
      'creatures nearby and grants see invisibility for 1 minute when swallowed. A command word activates all three ' +
      'pearls\' passive abilities for 1 round.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['delay poison', 'detect poison', 'remove disease', 'see invisibility'], cost: 1800 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.nobles_pillbox_detect', value: 0, source: "Noble's Vigilant Pillbox" }],
  },
  {
    id: 'wondrous-nose-ring-of-unearthly-scent',
    name: 'Nose Ring of Unearthly Scent',
    category: 'wondrous',
    source: 'Pathfinder #82: Secrets of the Sphinx',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'head',
    price: 11475,
    weight: 0,
    description:
      'This magical nose ring grants the wearer the ability to perceive curses as distinctive odors containing ' +
      'brimstone and iron notes. By using a standard action to sniff a target, the wearer gains information as if ' +
      'using detect magic, except this effect only detects curses and cursed items. Additionally, once daily as a ' +
      'standard action, the wearer can inhale the air while contemplating a specific plan to receive guidance ' +
      'comparable to the augury spell.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['augury', 'detect magic'], cost: 5738 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.nose_ring_curse_detect', value: 0, source: 'Nose Ring of Unearthly Scent' }],
  },
  {
    id: 'wondrous-null-spike',
    name: 'Null Spike',
    category: 'wondrous',
    source: 'People of the Wastes',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 45000,
    weight: 1,
    description:
      'This adamantine spike features rootlike filaments of cold iron wound around it. When driven into stone weighing ' +
      'at least 1,000 pounds, it creates a 60-foot radius aura that causes spells to have a 30% chance of failure. ' +
      'The effect persists until removal. As a weapon, it functions as a +1 adamantine dagger.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['antimagic field'], cost: 22500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.null_spike_antimagic', value: 0, source: 'Null Spike' }],
  },
  {
    id: 'wondrous-numerology-cylinder',
    name: 'Numerology Cylinder',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 5000,
    weight: 1,
    description:
      'This eight-faced cylindrical puzzle contains a dozen rotatable rings inscribed with numbers. By spending a ' +
      'full-round action to manipulate the rings into significant numeric combinations, the user attempts a DC 25 ' +
      'Knowledge (arcana) or DC 20 Intelligence check. Success grants a +2 insight bonus on caster level checks ' +
      '(such as to overcome spell resistance) for 24 hours. Failure locks the mechanism for 24 hours.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['dispel magic'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'insight', target: 'special.caster_level_check', value: 2, source: 'Numerology Cylinder' },
    ],
  },
  {
    id: 'wondrous-oath-breakers-brand',
    name: "Oath Breaker's Brand",
    category: 'wondrous',
    source: 'People of the River',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'none',
    price: 2500,
    weight: 2,
    description:
      'An iron medallion placed between two persons\' palms during a handshake to enforce their agreement. Should ' +
      'either party violate the accord, a hideous mark appears on the top of the unfaithful creature\'s hand. This ' +
      'stigma imposes a -8 penalty to Diplomacy and Bluff checks in the River Kingdoms while visible, persisting for ' +
      'one year until removed via break enchantment, limited wish, miracle, remove curse, or wish.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['mark of justice'], cost: 1250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.oath_breakers_brand_mark', value: 0, source: "Oath Breaker's Brand" }],
  },
  {
    id: 'wondrous-oculus-of-magnetic-fury',
    name: 'Oculus of Magnetic Fury',
    category: 'wondrous',
    source: 'Technology Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',
    price: 90000,
    weight: 1,
    description:
      'This device originates from a robot\'s eye. The wielder can activate it once hourly as a standard action to ' +
      'target a single robot within 60 feet with an electromagnetic pulse. The targeted robot sustains 10d6 points of ' +
      'electricity damage and becomes helpless for 1 minute. A successful DC 18 Will save reduces damage by half and ' +
      'prevents the helpless condition. Affected robots may attempt new saves each round to recover.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disable construct', 'lightning bolt'], cost: 45000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.oculus_magnetic_fury_emp', value: 0, source: 'Oculus of Magnetic Fury' }],
  },
  {
    id: 'wondrous-ofuda-of-dimensional-warding',
    name: 'Ofuda of Dimensional Warding',
    category: 'wondrous',
    source: 'Dragon Empires Gazetteer',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 15,
    slot: 'none',
    price: 80000,
    weight: 0,
    description:
      'These 6-inch paper talismans originate from Tianjing province. When affixed to a prominent structure and a ' +
      '24-hour ritual is performed, they establish a dimensional lock effect within a 240-foot radius. The effect ' +
      'persists until the ofuda is removed or the structure it is attached to moves, which terminates the protection ' +
      'until the ritual is repeated.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['dimensional lock'], cost: 40000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.ofuda_dimensional_lock', value: 0, source: 'Ofuda of Dimensional Warding' }],
  },
  {
    id: 'wondrous-machinebane-oil',
    name: 'Machinebane Oil',
    category: 'wondrous',
    source: 'Technology Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 750,
    weight: 0,
    description:
      'A violet-hued oil designed to damage metal constructs. When thrown as a ranged touch attack (20-foot range), ' +
      'a struck construct must make a DC 15 Reflex save or become staggered for 5 rounds. If the initial save fails, ' +
      'the construct takes 2 points of Dexterity damage on each subsequent failed save at the start of its turn over ' +
      'those 5 rounds. The oil also negates benefits from energizing salve.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disable construct'], cost: 375 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.machinebane_oil_stagger', value: 0, source: 'Machinebane Oil' }],
  },
  {
    id: 'wondrous-ointment-of-void-sealing',
    name: 'Ointment of Void Sealing',
    category: 'wondrous',
    source: 'People of the Stars',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'none',
    price: 3000,
    weight: 25,
    description:
      'Supplied in a 4-gallon brass tub, this sticky substance coats the user in a translucent amber layer when ' +
      'applied as a standard action. It creates a perfect seal protecting from the extreme cold and vacuum of outer ' +
      'space, and provides breathable air equivalent to the planetary adaptation spell. Effects persist for 3 hours ' +
      'before deteriorating. One tub covers four Medium creatures; Large creatures need double doses.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['planetary adaptation'], cost: 1500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.void_sealing_space_protection', value: 0, source: 'Ointment of Void Sealing' }],
  },
  {
    id: 'wondrous-one-way-window',
    name: 'One-Way Window',
    category: 'wondrous',
    source: 'Ultimate Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',
    price: 7500,
    weight: 1,
    description:
      'This magical frame (3 by 5 inches) allows viewing through solid surfaces when placed against them. The ' +
      'viewing is one-directional with no evidence appearing on the opposite side. It blocks items, light, sound, ' +
      'spells, and divination magic like true seeing. It penetrates up to 1 foot of wood, 6 inches of stone, or ' +
      '1 inch of metal, but lead blocks it entirely. Requires ambient light in the viewed area.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['clairaudience/clairvoyance'], cost: 3750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.one_way_window_scry', value: 0, source: 'One-Way Window' }],
  },

  // ── batch 6 gaps ─────────────────────────────────────────────
  {
    id: 'wondrous-orb-of-the-waybringer',
    name: 'Orb of the Waybringer',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'neck',
    price: 3900,
    weight: 1,
    description:
      'A giant pearl carved with intertwined flying dragons on a silver chain that resizes to fit the wearer. The ' +
      'wearer can breathe a cone of searing electricity once daily (functioning as burning hands but dealing electrical ' +
      'damage). If Apsu is the wearer\'s patron deity, they gain an additional daily use of eagle\'s splendor. The orb ' +
      'produces light or darkness when commanded.',
    construction: { feats: ['Craft Wondrous Item'], spells: ["eagle's splendor", 'light', 'shocking grasp'], cost: 1950 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.orb_waybringer_breath', value: 0, source: 'Orb of the Waybringer' }],
  },
  {
    id: 'wondrous-orbicular-sac',
    name: 'Orbicular Sac',
    category: 'wondrous',
    source: 'Monster Codex',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'none',
    price: 500,
    weight: 0,
    description:
      'This magical spider egg sac conjures a substantial spider web when broken as a standard action. The web ' +
      'materializes in an adjacent square, measuring 5 feet thick with dimensions up to 20 feet wide and high. The ' +
      'web requires a DC 20 Perception check in bright light to spot, with the DC increasing by 4 for each step below ' +
      'bright light. The effect functions like the web spell (DC 13). Additional sacs can enhance existing webs, ' +
      'extending duration by 30 minutes and increasing DCs by 2 (capped at +10).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['invisibility', 'web'], cost: 250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.orbicular_sac_web', value: 0, source: 'Orbicular Sac' }],
  },
  {
    id: 'wondrous-origami-swarm',
    name: 'Origami Swarm',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 300,
    weight: 0,
    description:
      'This magical item consists of folded paper crafted to resemble small pests. When activated through specific ' +
      'folding techniques, it multiplies into hundreds of duplicates filling a 10-foot space. These constructs function ' +
      'similarly to a rat swarm but feature fire vulnerability and the construct type, lacking disease-spreading ' +
      'capabilities. The creatures do not attack their creator but remain otherwise hostile for 5 rounds before ' +
      'becoming inert. The item loses all magical properties after activation.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['animate objects'], cost: 150 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.origami_swarm_construct', value: 0, source: 'Origami Swarm' }],
  },
  {
    id: 'wondrous-ornamental-kobold-spellbook',
    name: 'Ornamental Kobold Spellbook',
    category: 'wondrous',
    source: 'Kobolds of Golarion',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 11,
    slot: 'none',
    price: 8000,
    weight: 2,
    description:
      'This spellbook converts each inscribed spell into a greater glyph of warding (DC 19, spell glyph). When an ' +
      'unauthorized person reads a spell, the glyph activates against that individual. The pages containing the ' +
      'triggered spell are destroyed, though the remainder of the book remains intact. Pages containing harmless ' +
      'spells or spells that cannot be attached to a glyph are unaffected.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['erase', 'greater glyph of warding'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.kobold_spellbook_glyph', value: 0, source: 'Ornamental Kobold Spellbook' }],
  },
  {
    id: 'wondrous-pact-parchment',
    name: 'Pact Parchment',
    category: 'wondrous',
    source: 'Villain Codex',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 11,
    slot: 'none',
    price: 3500,
    weight: 0,
    description:
      'A blood-signed contract that magically binds willing signatories to fulfill stated agreements. Those who ' +
      'break the pact incur a -4 penalty to attack rolls, saves, ability checks, and skill checks until they satisfy ' +
      'the pact\'s conditions or the parchment is destroyed.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['geas/quest'], cost: 1750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.pact_parchment_binding', value: 0, source: 'Pact Parchment' }],
  },
  {
    id: 'wondrous-padma-blossom',
    name: 'Padma Blossom',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 3,
    slot: 'none',
    price: 8000,
    weight: 0,
    description:
      'A lotus flower crafted from pink jade that promotes mental clarity and emotional stability. The wielder gains ' +
      'a +3 competence bonus on concentration checks and suppresses morale bonuses, fear effects, and the confused, ' +
      'dazed, or stunned conditions. The bearer can cast calm emotions twice daily.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['calm emotions', 'remove fear'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'special.concentration_check', value: 3, source: 'Padma Blossom' },
    ],
  },
  {
    id: 'wondrous-pain-ward-of-the-ostiarius',
    name: 'Pain Ward of the Ostiarius',
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'neck',
    price: 6000,
    weight: 0,
    description:
      'A charred, hook-covered metal object that grips directly onto the wearer\'s chest. Upon attachment, the wearer ' +
      'loses 1 HP permanently and gains a +10 circumstance bonus against theft and removal attempts. It functions as ' +
      'an unholy symbol for evil deities. The item grants evil wearers a +4 profane bonus on saving throws against ' +
      'pain descriptor abilities. Once daily, the wearer can make a touch attack dealing 1d8+5 points of negative ' +
      'energy damage and sickening the victim for 1d4 rounds (DC 11 Fortitude save for half damage and no sickness).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['inflict light wounds', 'resistance'], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'profane', target: 'save.fortitude', value: 4, source: 'Pain Ward of the Ostiarius', condition: { type: 'custom', params: {}, description: 'vs. pain effects; evil wearers only' } },
    ],
  },
  {
    id: 'wondrous-tribal-war-paint',
    name: 'Tribal War Paint',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',
    price: 100,
    weight: 0,
    description:
      'This small clay pot contains a thick, colored paste made from rare plants and minerals. When applied to the ' +
      'skin as a full-round action, the paint magically enhances the wearer\'s physical prowess, granting a +2 ' +
      'competence bonus on Intimidate checks for 24 hours. The paint loses its magical properties if not applied ' +
      'within 1 hour of opening the container.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['cause fear'], cost: 50 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.intimidate', value: 2, source: 'Tribal War Paint' },
    ],
  },
  {
    id: 'wondrous-war-paint-of-the-terrible-visage',
    name: 'War Paint of the Terrible Visage',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 1,
    slot: 'none',
    price: 100,
    weight: 0,
    description:
      'A small clay container holding colored face paint. When applied to a creature\'s face, the wearer can use a ' +
      'swift action to trigger the paint\'s magic, causing it to rearrange into a disturbing appearance. This effect ' +
      'targets one visible creature within 30 feet with a cause fear spell (DC 11). The magic depletes after one use, ' +
      'and the paint must be activated within 24 hours of application or loses its potency.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['cause fear'], cost: 50 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.war_paint_cause_fear', value: 0, source: 'War Paint of the Terrible Visage' }],
  },
  {
    id: 'wondrous-panacea-flask',
    name: 'Panacea Flask',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',
    price: 6000,
    weight: 0,
    description:
      'This pewter flask provides the benefits of remove disease once per day when filled with alcohol. The drinker ' +
      'receives a +1 morale bonus to saving throws for 1 hour, followed by sickness until 8 hours of sleep.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['remove disease', 'resistance'], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'morale', target: 'save.all', value: 1, source: 'Panacea Flask', condition: { type: 'custom', params: {}, description: 'for 1 hour after drinking' } },
    ],
  },
  {
    id: 'wondrous-papyrus-of-eternal-rest',
    name: 'Papyrus of Eternal Rest',
    category: 'wondrous',
    source: "Mummy's Mask Player's Guide",
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 1,
    slot: 'none',
    price: 4000,
    weight: 0,
    description:
      'A 12-inch papyrus scroll inscribed with Minkaian pictographs and anointed with holy water. When wielded and ' +
      'presented, it grants a gaze attack (30-foot range) against haunts and incorporeal undead, dealing 1d6 damage ' +
      'and imposing the sickened condition (DC 12 Will save negates sickness and halves damage). Haunts cannot avoid ' +
      'the gaze; incorporeal undead can. The item occupies one hand but does not count as an occupied hand for feats.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bane', 'disrupt undead'], cost: 2000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.papyrus_eternal_rest_gaze', value: 0, source: 'Papyrus of Eternal Rest' }],
  },
  {
    id: 'wondrous-paradox-box',
    name: 'Paradox Box',
    category: 'wondrous',
    source: 'Rise of the Runelords Anniversary Edition',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 9,
    slot: 'none',
    price: 5000,
    weight: 30,
    description:
      'This ornate stone chest (1.5 by 1.5 by 1 foot) has no visible seams or hinges. It requires a command word or ' +
      'combination to access an extradimensional storage space of 1 cubic foot. Contents do not affect the chest\'s ' +
      'weight. The box has hardness 8 and 90 hit points; if destroyed, contents scatter randomly to the Ethereal Plane.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['arcane lock', 'secret chest'], cost: 2500 },
    physicalStats: { hardness: 8, hitPoints: 90, breakDC: 28 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.paradox_box_storage', value: 0, source: 'Paradox Box' }],
  },
  {
    id: 'wondrous-paralyzing-snare',
    name: 'Paralyzing Snare',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9,
    slot: 'none',
    price: 2250,
    weight: 2,
    description:
      'A 5-foot wire loop that becomes concealed when activated. Locating it requires a successful DC 30 Perception ' +
      'check with trapfinding ability. Any creature stepping into it must make a DC 26 Will save or become magically ' +
      'paralyzed via hold monster spell effect. The paralysis ends if the command word is spoken, a DC 30 Disable ' +
      'Device check succeeds, or the Will save is made. The snare is destroyed upon effect termination.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['snare', 'hold monster'], cost: 1125 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.paralyzing_snare_hold', value: 0, source: 'Paralyzing Snare' }],
  },
  {
    id: 'wondrous-parting-glass',
    name: 'Parting Glass',
    category: 'wondrous',
    source: 'Inner Sea Temples',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 12,
    slot: 'none',
    price: 23000,
    weight: 1,
    description:
      'This magical drinking vessel is engraved with the names of adventuring companies and their honored dead. When ' +
      'used in a toast with at least one other creature, the drinker gains a +5 morale bonus on their next saving throw ' +
      'within 24 hours (once per day), and one poison affecting them is neutralized.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['greater heroism', 'neutralize poison'], cost: 11500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'morale', target: 'save.all', value: 5, source: 'Parting Glass', condition: { type: 'custom', params: {}, description: 'next saving throw within 24 hours after toast' } },
    ],
  },
  {
    id: 'wondrous-sea-tyrants-patch',
    name: "Sea Tyrant's Patch",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 15,
    slot: 'eyes',
    price: 70000,
    weight: 0,
    description:
      'An ornate silk eye patch adorned with gold embroidery and pearl studs arranged in a whirlpool pattern. The ' +
      'wearer gains constant effects from touch of the sea and water breathing spells. Once daily, the wearer may ' +
      'activate mass charm monster as a command action.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['mass charm monster', 'touch of the sea', 'water breathing'], cost: 35000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.sea_tyrants_patch_water', value: 0, source: "Sea Tyrant's Patch" }],
  },

  // ── batch 7 gaps ─────────────────────────────────────────────
  {
    id: 'wondrous-purifying-pearl',
    name: 'Purifying Pearl',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 10,
    slot: 'none',
    price: 19000,
    weight: 0,
    description:
      'This luminescent white pearl purifies up to 10 cubic feet of food or drink that it touches per day using ' +
      'purify food and drink effects. Additionally, when placed in a creature\'s mouth as a standard action, it ' +
      'functions as a neutralize poison spell cast at 10th caster level once daily.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['neutralize poison', 'purify food and drink'], cost: 9500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.purifying_pearl_cleanse', value: 0, source: 'Purifying Pearl' }],
  },
  {
    id: 'wondrous-prophets-pectoral',
    name: "Prophet's Pectoral",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'chest',
    price: 6000,
    weight: 1,
    description:
      'This chestplate features sacred stones, graven star-patterns, and wisdom-writings of the ancients. It enhances ' +
      'divination magic by adding 1d6 to d% rolls for augury, divination, and contact other plane spells. When casting ' +
      'commune or commune with nature, the wearer can ask one additional question or obtain one additional piece of ' +
      'information.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['divination', 'guidance'], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.prophets_pectoral_divination', value: 0, source: "Prophet's Pectoral" }],
  },
  {
    id: 'wondrous-pelt-of-the-wolf',
    name: 'Pelt of the Wolf',
    category: 'wondrous',
    source: 'Blood of the Moon',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'shoulders',
    price: 14800,
    weight: 3,
    description:
      'This wolf-skin cloak activates up to five times daily. When struck in combat, the wearer can spend one use as ' +
      'a swift action to summon a ghostly wolf that attacks the aggressor with a bite (1d6+1 damage). The apparition ' +
      'continues attacking each round if additional uses are spent, cannot be redirected, and disappears if the target ' +
      'moves beyond 5 feet or dies. For human wearers: grants a +1 morale bonus on saves against emotion effects, ' +
      'plus the ability to reduce fear condition severity with a new save at turn start.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['remove fear', 'spiritual weapon'], cost: 7400 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'morale', target: 'save.will', value: 1, source: 'Pelt of the Wolf', condition: { type: 'custom', params: {}, description: 'vs. emotion effects; human wearers only' } },
    ],
  },
  {
    id: 'wondrous-pendant-of-the-blood-scarab',
    name: 'Pendant of the Blood Scarab',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'neck',
    price: 1000,
    weight: 0,
    description:
      'A ruby scarab pendant set in gold that helps wearers identify vulnerable points on enemies. The wearer can use ' +
      'an immediate action once per day to automatically confirm a threatened critical hit with any attack. Upon ' +
      'activation, the amulet\'s animated legs scratch the wearer\'s skin, dealing 1d6 damage. The item must contact ' +
      'bare flesh to function.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['true strike'], cost: 500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.blood_scarab_auto_confirm_crit', value: 0, source: 'Pendant of the Blood Scarab' }],
  },
  {
    id: 'wondrous-pendant-of-the-souk',
    name: 'Pendant of the Souk',
    category: 'wondrous',
    source: 'Magnimar, City of Monuments',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'neck',
    price: 4000,
    weight: 0,
    description:
      'This golden falcon-shaped pendant serves as the traditional badge of office for the Prince or Princess of the ' +
      'Market in Magnimar\'s Bazaar of Sails. The wearer gains a +5 competence bonus on Appraise checks. By holding ' +
      'it to their brow, the wearer can cast identify once daily. Additionally, the pendant becomes warm around ' +
      'illusions, providing a +2 insight bonus on saving throws to disbelieve illusion effects.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['identify'], cost: 2000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.appraise', value: 5, source: 'Pendant of the Souk' },
      { type: 'bonus', bonusType: 'insight', target: 'save.will', value: 2, source: 'Pendant of the Souk', condition: { type: 'custom', params: {}, description: 'vs. illusion effects only' } },
    ],
  },
  {
    id: 'wondrous-knowledge-pendant',
    name: 'Knowledge Pendant',
    category: 'wondrous',
    source: 'Pathfinder Society Primer',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'neck',
    price: 5000,
    weight: 0,
    description:
      'This silver pendant shaped like an open book grants its wearer a +5 competence bonus on one Knowledge skill ' +
      'chosen at the time of creation. Once per day, the wearer can activate the pendant to use that Knowledge skill ' +
      'untrained as if they had ranks in it, even on checks that cannot normally be made untrained.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['fox\'s cunning'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.knowledge', value: 5, source: 'Knowledge Pendant', condition: { type: 'custom', params: {}, description: 'one chosen Knowledge skill' } },
    ],
  },
  {
    id: 'wondrous-pendulate-divan-of-the-emperor',
    name: 'Pendulate Divan of the Emperor',
    category: 'wondrous',
    source: 'Legacy of Fire',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 17,
    slot: 'none',
    price: 65000,
    weight: 200,
    description:
      'This ornate palanquin floats 3 feet above the ground and can carry up to four Medium creatures. It moves at a ' +
      'speed of 40 feet per round at the mental direction of its occupant. Once per day, the divan can plane shift ' +
      'to any plane the user designates. The divan provides its occupants with endure elements and a +4 morale bonus ' +
      'on saves against fear effects while seated.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['endure elements', 'overland flight', 'plane shift'], cost: 32500 },
    physicalStats: { hardness: 5, hitPoints: 40, breakDC: 20 },
    activationCategory: 'use_activated',
    effects: [
      { type: 'bonus', bonusType: 'morale', target: 'save.will', value: 4, source: 'Pendulate Divan of the Emperor', condition: { type: 'custom', params: {}, description: 'vs. fear effects while seated' } },
    ],
  },
  {
    id: 'wondrous-periapt-of-placebos',
    name: 'Periapt of Placebos',
    category: 'wondrous',
    source: 'Ultimate Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'neck',
    price: 3600,
    weight: 1,
    description:
      'This necklace features a polished bezoar gem on a silver chain, resembling more valuable protective amulets. ' +
      'While it provides no actual immunity, wearers gain confidence that helps against disease and poison. The item ' +
      'grants a +2 morale bonus to all Fortitude saving throws against diseases and poisons. Identification checks ' +
      'failing by 5 or more result in mistaking it for a superior protective necklace.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['delusional pride'], cost: 1800 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'morale', target: 'save.fortitude', value: 2, source: 'Periapt of Placebos', condition: { type: 'custom', params: {}, description: 'vs. disease and poison' } },
    ],
  },
  {
    id: 'wondrous-periapt-of-temporary-familiar',
    name: 'Periapt of Temporary Familiar',
    category: 'wondrous',
    source: 'Familiar Folio',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'neck',
    price: 8000,
    weight: 1,
    description:
      'This blue crystal amulet contains a pearl figurine of a miniature animal from the familiar list. The wearer ' +
      'can activate it three times daily to summon a temporary familiar matching the figurine\'s depiction. The ' +
      'summoned creature possesses all familiar abilities as though the wearer were a 5th-level wizard and persists ' +
      'for 5 minutes or until reduced to 0 hit points. If defeated, it cannot be re-summoned for 24 hours. Only ' +
      'individuals without existing familiars may use this item.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['summon monster V'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.periapt_temp_familiar_summon', value: 0, source: 'Periapt of Temporary Familiar' }],
  },
  {
    id: 'wondrous-perilous-puzzle-box',
    name: 'Perilous Puzzle Box',
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',
    price: 5000,
    weight: 1,
    description:
      'A mahogany cube with brass latticework that functions as a magical puzzle box. When solved, it provides access ' +
      'to an extradimensional compartment holding up to 10 pounds of objects. Users can store a single touch spell ' +
      '(4th level or lower) that activates only when someone fails to solve the scrambled puzzle. Solving requires ' +
      'successful DC 20 Intelligence checks. The puzzle triggers a 1-minute timer after initial scrambling; if unsolved ' +
      'within that time, the stored spell automatically discharges at the holder.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['imbue with spell ability', 'secret chest'], cost: 2500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.perilous_puzzle_box_trap', value: 0, source: 'Perilous Puzzle Box' }],
  },
  {
    id: 'wondrous-pestilence-clasp',
    name: 'Pestilence Clasp',
    category: 'wondrous',
    source: 'Pathfinder: Spiral of Bones',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 8,
    slot: 'neck',
    price: 8000,
    weight: 0,
    description:
      'This dark iron pin fastens cloaks or capes and depicts a fly with soul gem fragments as eyes. Once daily as ' +
      'a standard action, the wearer exhales black flies in a 15-foot cone dealing 8d6 points of slashing damage with ' +
      'a DC 18 Reflex save for half damage. Living creatures taking damage must succeed at a DC 18 Fortitude save or ' +
      'become sickened for 1 minute. Daemons are immune to these effects.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['vomit swarm'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.pestilence_clasp_fly_cone', value: 0, source: 'Pestilence Clasp' }],
  },
  {
    id: 'wondrous-philanderous-compact',
    name: 'Philanderous Compact',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 1,
    slot: 'none',
    price: 1500,
    weight: 0,
    description:
      'This cosmetic case contains a mirror, face powder, rouge, and puff. Once per day, the user can activate it ' +
      'with a command word to change their appearance as per disguise self. Additionally, it grants a +2 competence ' +
      'bonus on Diplomacy checks to gather information.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disguise self'], cost: 750 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.diplomacy', value: 2, source: 'Philanderous Compact', condition: { type: 'custom', params: {}, description: 'gather information only' } },
    ],
  },

  // ── batch 8 gaps ─────────────────────────────────────────────
  {
    id: 'wondrous-pipes-of-shifting-tempo',
    name: 'Pipes of Shifting Tempo',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',
    price: 18000,
    weight: 2,
    description:
      'These pan pipes feature intricate Azlanti-inspired internal chambers. Three times daily, the player can make ' +
      'a DC 15 Perform (wind instruments) check as a standard action. Success allows casting either slow (grave melody) ' +
      'or haste (allegro melody), affecting up to five creatures per use, with effects functioning at the item\'s ' +
      'caster level.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['haste', 'slow'], cost: 9000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.pipes_shifting_tempo_haste_slow', value: 0, source: 'Pipes of Shifting Tempo' }],
  },
  {
    id: 'wondrous-pipes-of-the-warren-guardian',
    name: 'Pipes of the Warren Guardian',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 6000,
    weight: 0,
    description:
      'These yellow-ivory pipes bound in bronze with amber decorations allow the user to summon 1d4+1 dire rats once ' +
      'per day via summon monster III. The summoned creatures possess the swarming racial trait and count as ratfolk for ' +
      'swarming purposes.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['summon monster III'], cost: 3000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.pipes_warren_guardian_summon', value: 0, source: 'Pipes of the Warren Guardian' }],
  },
  {
    id: 'wondrous-pirate-queens-bones',
    name: "Pirate Queen's Bones",
    category: 'wondrous',
    source: 'Inner Sea Combat',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',
    price: 10800,
    weight: 300,
    description:
      'This ship figurehead grants maritime combat advantages. Once daily, it can curse an enemy vessel struck during ' +
      'ramming attacks. The targeted ship\'s pilot must make a DC 14 Will save or suffer a -4 penalty to Profession ' +
      '(sailor) checks. The cursed ship cannot gain tactical superiority in naval combat. The curse persists until ' +
      'removed. The figurehead also provides a daily ability to cast false life (CL 5th) on the ship\'s captain.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bestow curse', 'false life'], cost: 5400 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.pirate_queens_bones_curse', value: 0, source: "Pirate Queen's Bones" }],
  },
  {
    id: 'wondrous-pirate-queens-tricorne',
    name: "Pirate Queen's Tricorne",
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'head',
    price: 2600,
    weight: 1,
    description:
      'A black leather tricorne hat with weather-beaten, salt-stained appearance. Grants the wearer a +2 competence ' +
      'bonus on Profession (sailor) and Swim checks. If the associated deity is the wearer\'s patron, they can speak ' +
      'a command word once per day to transform the hat into a small ship\'s boat (cutter, jolly boat, or longboat) ' +
      'measuring 20 feet long with two pairs of oars, a single mast, square sail, and accommodates up to 12 passengers. ' +
      'After 8 hours or upon command, the boat returns to hat form.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['guidance', 'shrink item'], cost: 1300 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [
      { type: 'bonus', bonusType: 'competence', target: 'skill.profession_sailor', value: 2, source: "Pirate Queen's Tricorne" },
      { type: 'bonus', bonusType: 'competence', target: 'skill.swim', value: 2, source: "Pirate Queen's Tricorne" },
    ],
  },
  {
    id: 'wondrous-planar-carriage',
    name: 'Planar Carriage',
    category: 'wondrous',
    source: 'Planar Adventures',
    isOfficial: true,
    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 9,
    slot: 'none',
    price: 121500,
    weight: 1500,
    description:
      'A large metal-and-wood vehicle functioning as a heavy wagon with magical propulsion. The driver uses Spellcraft ' +
      'or Use Magic Device checks to operate it. Maximum speed is 90 feet with 30-foot acceleration. Once daily, when ' +
      'moving at maximum speed, the driver can attempt a DC 20 check to open a planar gate and transport occupants to ' +
      'another plane. The carriage provides planar adaptation benefits to all occupants while on other planes.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['gate', 'haste', 'planar adaptation'], cost: 60750 },
    physicalStats: { hardness: 5, hitPoints: 60, breakDC: 25 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.planar_carriage_transport', value: 0, source: 'Planar Carriage' }],
  },
  {
    id: 'wondrous-planar-guide',
    name: 'Planar Guide',
    category: 'wondrous',
    source: 'Planar Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',
    price: 5400,
    weight: 0,
    description:
      'A brass compass-like device that helps travelers navigate planes without magnetic poles. When activated, it ' +
      'points toward the plane ruler\'s stronghold or three closest approximations, displaying the entity\'s name or ' +
      'holy symbol. A lever enables portal-finding up to 3 miles away. The device has a 5% cumulative chance of ' +
      'malfunction per use, directing users toward hazards instead — this resets upon encountering such a hazard.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['locate portal', 'planar orientation'], cost: 2700 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.planar_guide_compass', value: 0, source: 'Planar Guide' }],
  },
  {
    id: 'wondrous-planar-strap',
    name: 'Planar Strap',
    category: 'wondrous',
    source: 'Planar Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',
    price: 500,
    weight: 0,
    description:
      'This leather strap attaches to a weapon\'s grip, granting the weapon immunity to harmful environmental effects ' +
      'of a plane, such as heat or acidity. The protection excludes non-environmental energy effects like spell damage. ' +
      'Requires a full-round action to apply or remove; only one strap per weapon.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['planar adaptation'], cost: 250 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.planar_strap_weapon_protect', value: 0, source: 'Planar Strap' }],
  },
  {
    id: 'wondrous-platter-of-exquisite-feasting',
    name: 'Platter of Exquisite Feasting',
    category: 'wondrous',
    source: 'Villain Codex',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',
    price: 250,
    weight: 1,
    description:
      'This silver oval platter holds up to 1 cubic foot of food. Once daily, the user may activate it to transform ' +
      'contents into another food type or quality of their choice. The transformed food appears and smells authentic ' +
      'but maintains its original texture, taste, nourishment, and satiation. Spoiled or poisoned food stays ' +
      'compromised and remains detectable through magical examination.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['purify food and drink'], cost: 125 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.platter_feasting_transform', value: 0, source: 'Platter of Exquisite Feasting' }],
  },
  {
    id: 'wondrous-players-prize',
    name: "Player's Prize",
    category: 'wondrous',
    source: 'Kingmaker',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',
    price: 3000,
    weight: 1,
    description:
      'A tiny copper statue of a featureless dancing figure awarded to contest winners. When a bard inscribes a ' +
      'personal rune on it, the item penalizes creatures carrying it with a -2 penalty on Will saves against that ' +
      'bard\'s bardic performances and a -2 penalty on opposed skill checks. The bard can retrieve the statue within ' +
      '30 feet as an immediate action once per day using a command word.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bestow curse', 'telekinesis'], cost: 1500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.players_prize_bard_curse', value: 0, source: "Player's Prize" }],
  },
  {
    id: 'wondrous-poison-popcushion',
    name: 'Poison Popcushion',
    category: 'wondrous',
    source: 'Dirty Tactics Toolbox',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'none',
    price: 700,
    weight: 2,
    description:
      'A gel-filled sack about the size of a fist with tiny metal studs on its exterior. When attacked (AC 7, hardness 0), ' +
      'it explodes in a 10-foot radius, dealing 1d4+1 piercing damage per round for 1d3 rounds. A DC 13 Reflex save ' +
      'halves damage. The item can be loaded with 3 doses of injury poison before placement; affected creatures take ' +
      'poison damage with a Fortitude save DC that is 4 lower than normal.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['arrow eruption'], cost: 350 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.poison_popcushion_explode', value: 0, source: 'Poison Popcushion' }],
  },
  {
    id: 'wondrous-poison-vial-of-distance',
    name: 'Poison Vial of Distance',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'none',
    price: 3000,
    weight: 1,
    description:
      'This magical vial allows assassins to apply poisons from up to 30 feet away using contact or ingested poisons. ' +
      'The user adds poison to the vial, shakes it toward the target, and makes a ranged touch attack with a +4 ' +
      'circumstance bonus. Successful attacks deliver the poison to the intended creature or object.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['mage hand'], cost: 1500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.poison_vial_ranged_delivery', value: 0, source: 'Poison Vial of Distance' }],
  },
  {
    id: 'wondrous-polish-of-inconspicuous-armor',
    name: 'Polish of Inconspicuous Armor',
    category: 'wondrous',
    source: 'Inner Sea Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',
    price: 750,
    weight: 0,
    description:
      'A tar-black armor polish in a small tin containing one dose, sufficient for a single Medium suit or two Small ' +
      'suits. After a 10-minute application period, the armor gains a glamered appearance matching the user\'s ' +
      'visualization. The item maintains all actual properties including weight and penalties while altering only its ' +
      'visual appearance. The effect persists for 24 hours.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['disguise self'], cost: 375 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.polish_glamered_armor', value: 0, source: 'Polish of Inconspicuous Armor' }],
  },
  {
    id: 'wondrous-gunfighters-poncho',
    name: "Gunfighter's Poncho",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 6,
    slot: 'shoulders',
    price: 14000,
    weight: 1,
    description:
      'This magical woolen poncho provides defensive benefits against ranged attacks and hostile magic. The wearer ' +
      'receives a +2 luck bonus to touch AC. Once daily as an immediate action, the wearer may negate one ranged touch ' +
      'attack unless it is a confirmed critical hit, but must fall prone when using this ability.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['bullet shield'], cost: 7000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [
      { type: 'bonus', bonusType: 'luck', target: 'ac.touch', value: 2, source: "Gunfighter's Poncho" },
    ],
  },

  // ── batch 9 gaps ─────────────────────────────────────────────
  {
    id: 'wondrous-firefoot-powder',
    name: 'Firefoot Powder',
    category: 'wondrous',
    source: 'Rival Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',
    price: 1000,
    weight: 0,
    description:
      'This bright red powder containing rare herbs and black salt covers two 5-foot squares per dose. Creatures ' +
      'entering a powdered area must succeed on a DC 14 Fortitude save or suffer 1d6 points of nonlethal damage per ' +
      'round for 5 rounds while becoming sickened from sensations of burning feet and legs. The effect lasts 24 hours ' +
      'or until triggered, at which point the magic dissipates.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['pain strike'], cost: 500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.firefoot_powder_burn', value: 0, source: 'Firefoot Powder' }],
  },
  {
    id: 'wondrous-preserving-flask-1st',
    name: 'Preserving Flask (1st)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 17,
    slot: 'none',
    price: 1000,
    weight: 0,
    description:
      'This durable flask preserves alchemical extracts indefinitely. An extract stored in a preserving flask remains ' +
      'potent until it is consumed or otherwise removed. Each flask corresponds to a specific extract level. Preserved ' +
      'extracts count against an alchemist\'s daily preparation limit when created but not on subsequent days. The ' +
      'item maintains the extract\'s original duration, caster level, and properties.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['creator must be able to create 1st-level extracts'], cost: 500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.preserving_flask_store', value: 0, source: 'Preserving Flask (1st)' }],
  },
  {
    id: 'wondrous-preyfinder',
    name: 'Preyfinder',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'none',
    price: 85000,
    weight: 0,
    description:
      'A brass compass painted blood red and decorated with predator imagery. Functions as a standard compass while ' +
      'also tracking creatures. The bearer applies a creature\'s blood (no more than 1 week old) to activate tracking. ' +
      'The target can make a DC 18 Will save to resist; failure marks them as quarry. The bearer can spend a standard ' +
      'action to divine the quarry\'s location within 100 miles. Slayers with studied target gain +1 insight bonus to ' +
      'attacks/damage, or can add their own blood for a +2 morale bonus to attacks, saves, and skill checks for 1 minute.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['blood biography', 'heroism', 'locate creature'], cost: 42500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.preyfinder_track_quarry', value: 0, source: 'Preyfinder' }],
  },
  {
    id: 'wondrous-primal-dowser',
    name: 'Primal Dowser',
    category: 'wondrous',
    source: 'People of the Wastes',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',
    price: 1800,
    weight: 1,
    description:
      'A triangular metal rod containing two tubes inlaid with gemstones — emeralds on one and sapphires on the other. ' +
      'When activated as a standard action, it detects variant magic within 60 feet for up to 10 minutes daily. The ' +
      'emeralds glow near primal or wild magic areas, while sapphires glow in magic dead zones. Duration can be split ' +
      'into 1-minute intervals.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['detect magic'], cost: 900 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.primal_dowser_detect', value: 0, source: 'Primal Dowser' }],
  },
  {
    id: 'wondrous-propagation-pod',
    name: 'Propagation Pod',
    category: 'wondrous',
    source: 'Ultimate Wilderness',
    isOfficial: true,
    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15,
    slot: 'none',
    price: 48000,
    weight: 250,
    description:
      'An urn-shaped magical vessel designed for ghorans. The bottom contains Druidic glyphs and fertile soil, while ' +
      'the stained glass top cycles through rain, stars, and sun imagery. A ghoran can expend its seed into the pod, ' +
      'which then develops an exact replica of their current appearance over 2d6 days. The resulting clone remains in ' +
      'stasis indefinitely, functioning as per the clone spell. Upon the original ghoran\'s death, the pod shatters.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['clone', 'plant growth'], cost: 24000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.propagation_pod_clone', value: 0, source: 'Propagation Pod' }],
  },
  {
    id: 'wondrous-protective-ruff',
    name: 'Protective Ruff',
    category: 'wondrous',
    source: 'Ultimate Intrigue',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'neck',
    price: 1000,
    weight: 0,
    description:
      'A lace collar worn around the neck that redirects up to 10 damage points intended for items in any equipped ' +
      'slots to itself. The ruff has 10 hp and hardness 5. When damaged, it ceases function at 0 hp and is destroyed ' +
      'below that threshold. While functioning, it regenerates 1 hp hourly.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['mending'], cost: 500 },
    physicalStats: { hardness: 5, hitPoints: 10, breakDC: 15 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.protective_ruff_item_shield', value: 0, source: 'Protective Ruff' }],
  },
  {
    id: 'wondrous-psychic-aurascope',
    name: 'Psychic Aurascope',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'none',
    price: 8000,
    weight: 4,
    description:
      'This magical haunt detector contains swirling white vapor that shifts between multiple hues when activated. When ' +
      'touching a creature or object, the user can activate it to display colors representing alignment aura, emotion ' +
      'aura, health aura, and magic aura. Users without occult training can employ the read aura skill unlock once ' +
      'daily. When examining haunt-associated objects, the auras display skulls, anguished faces, and flashes of ' +
      'scenes relating to the haunt\'s formation.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['analyze aura', 'speak with haunt'], cost: 4000 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.psychic_aurascope_read', value: 0, source: 'Psychic Aurascope' }],
  },
  {
    id: 'wondrous-pull-ring-of-scent',
    name: 'Pull-Ring of Scent',
    category: 'wondrous',
    source: 'Animal Archive',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'headband',
    price: 11000,
    weight: 1,
    description:
      'A brass ring placed on an animal\'s nose, muzzle, or head to attach lead ropes or bridles. The wearer and ' +
      'rider produce no scent, preventing tracking by smell. Additionally, the wearer gains scent ability within 30 ' +
      'feet, or if already possessing scent, the range extends by 30 feet (maximum 60 feet).',
    construction: { feats: ['Craft Wondrous Item'], spells: ['beast shape I'], cost: 5500 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'continuous',
    effects: [{ type: 'special', target: 'special.pull_ring_scent_grant', value: 0, source: 'Pull-Ring of Scent' }],
  },
  {
    id: 'wondrous-pyre-bead',
    name: 'Pyre Bead',
    category: 'wondrous',
    source: 'Osirion, Legacy of Pharaohs',
    isOfficial: true,
    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 2,
    slot: 'none',
    price: 1440,
    weight: 0,
    description:
      'A tiny glass bead that transforms into a 10-foot-by-10-foot pile of logs with an 8-foot post at center when ' +
      'commanded. A second command word ignites the heap, which burns for 4 hours before reverting to bead form. The ' +
      'owner must wait twice the burn duration before reactivating it.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['produce flame'], cost: 720 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'command_word',
    effects: [{ type: 'special', target: 'special.pyre_bead_ignite', value: 0, source: 'Pyre Bead' }],
  },
  {
    id: 'wondrous-pyre-salt',
    name: 'Pyre Salt',
    category: 'wondrous',
    source: 'Path of the Hellknight',
    isOfficial: true,
    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',
    price: 700,
    weight: 0,
    description:
      'Glistening black-and-white granules that smell of smoke. When cast into a flame at least 10 feet by 10 feet in ' +
      'area, it causes fire damage to double for 1 round. Objects or creatures destroyed by this enhanced fire become ' +
      'resistant to restoration magic — spellcasters attempting mending, make whole, raise dead, or resurrection must ' +
      'succeed at a DC 20 caster level check or their spell fails.',
    construction: { feats: ['Craft Wondrous Item'], spells: ['death knell', 'pyrotechnics'], cost: 350 },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },
    activationCategory: 'use_activated',
    effects: [{ type: 'special', target: 'special.pyre_salt_enhance_fire', value: 0, source: 'Pyre Salt' }],
  },
];
