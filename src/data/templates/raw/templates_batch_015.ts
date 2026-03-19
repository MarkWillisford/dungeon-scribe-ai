// Batch 015 | first: 'Radiant Creature (CR +1)' | last: 'Selenic Creature (CR +?)' | count: 25

import { TemplateDefinition } from '../types';

export const TEMPLATES_BATCH_015: TemplateDefinition[] = [
  // 351. Radiant Creature (CR +1)
  {
    id: 'radiant-creature',
    name: 'Radiant Creature',
    description:
      'Mortal creatures destroyed by the Positive Energy Plane\'s overwhelming fury and instantaneously reincarnated as glowing incarnations of their previous forms infused with positive energy. Radiant creatures cannot exist long outside the Positive Energy Plane; they treat all other planes as though they were major negative-dominant for purposes of the essence trait.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living creature with CR 3 or higher.' },
    ],
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '—' },
    immunities: ['blindness', 'fire', 'mind-affecting effects', 'all effects from positive-dominant essence traits'],
    fastHealing: 'equal to Hit Dice',
    features: [
      {
        scalingType: 'flat',
        name: 'Darkvision',
        description: 'The radiant creature gains darkvision 60 ft.',
      },
      {
        scalingType: 'flat',
        name: 'Radiance Burst (Su)',
        description:
          'One of the radiant creature\'s natural attacks (or its unarmed strike if it has no natural attacks) gains the radiance burst ability. A creature struck by this attack is blinded for 1 round unless it succeeds at a Fortitude save (DC = 10 + half the radiant creature\'s HD + its Constitution modifier). This ability triggers automatically on the first successful attack the radiant creature makes each round.',
      },
      {
        scalingType: 'flat',
        name: 'Planar Exile',
        description:
          'A radiant creature cannot exist for long outside the Positive Energy Plane. It treats all other planes as though they had the major negative-dominant essence trait.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Planar Adventures' },
    visibility: 'global',
    rev: 1,
  },

  // 352. Radioactive Creature (CR +3, listed as CR +4 in title)
  {
    id: 'radioactive-creature',
    name: 'Radioactive Creature',
    description:
      'A creature infused with magical radiation that sheds electrons violently, posing significant threats through contamination and energy release. Despite the URL indicating CR +4, the rules text specifies the CR adjustment as +3.',
    crAdjustment: 3,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    naturalArmorChange: 3,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 4 },
      { ability: 'INT', change: -2 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    immunities: ['radiation effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Radiant Glow (Ex)',
        description:
          'The radioactive creature constantly emits light equivalent to a torch.',
      },
      {
        scalingType: 'flat',
        name: 'Contamination Aura (Ex)',
        description:
          'The radioactive creature radiates harmful radiation in a 30-foot aura. Creatures within the aura are subject to a radiation effect that scales by the creature\'s Hit Dice (Low/Medium/High/Severe). The save DC equals 10 + 1/2 the creature\'s HD + its Constitution modifier. A new save is required each round a creature remains in the aura.',
      },
      {
        scalingType: 'flat',
        name: 'Nuclear Heat (Ex)',
        description:
          'When the radioactive creature uses fire-based abilities, creatures affected by those abilities must also make radiation saves.',
      },
      {
        scalingType: 'flat',
        name: 'Radioactive Touch (Ex)',
        description:
          'The first natural weapon strike the radioactive creature makes each round requires the target to make a radiation save.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Legendary Games',
      publication: 'Arcforge Universe Cyclopedia',
    },
    visibility: 'global',
    rev: 1,
  },

  // 353. Rampant Creature (CR +1)
  {
    id: 'rampant-creature',
    name: 'Rampant Creature',
    description:
      'A plant creature empowered by an overwhelming drive to spread and grow, transforming the landscape around it and spawning new plant life. The rampant creature is vulnerable to negative energy, which disrupts its aura of growth.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['plant'] },
      { type: 'min_hd', minimum: 8 },
    ],
    abilityScoreChanges: [
      { ability: 'CON', change: 4 },
    ],
    regeneration: '5 (negative energy)',
    features: [
      {
        scalingType: 'flat',
        name: 'Aura of Growth (Su)',
        description:
          'Living plants within 1 mile of the rampant creature grow at triple their normal rate. Plants within 100 feet of the creature are affected as by the overgrowth function of the plant growth spell. Overgrown plants return to normal growth 1 hour after the rampant creature moves beyond 1 mile range, or immediately if the rampant creature takes negative energy damage (which also disables the aura for 1 minute).',
      },
      {
        scalingType: 'flat',
        name: 'Verdant Genesis (Su)',
        description:
          'Once per week, living plants within 1 mile of the rampant creature transform into new plant creatures with combined Hit Dice not exceeding the rampant creature\'s total Hit Dice. New creatures gain 1 permanent negative level for each full day spent beyond 1 mile from the creature that spawned them. This ability cannot be suppressed.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Adventure Path #142: Gardens of Gallowspire' },
    visibility: 'global',
    rev: 1,
  },

  // 354. Ravager Vessel (CR +0)
  {
    id: 'ravager-vessel',
    name: 'Ravager Vessel',
    description:
      'A ravager vessel is created when a ravager spirit severs the connection between a living creature\'s body and soul, allowing it to permanently take control over the creature\'s body. The vessel retains the form and memories of the host but is now piloted by the ravager spirit.',
    crAdjustment: 0,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['outsider'] },
      { type: 'special', description: 'Must be a living creature (not an outsider).' },
    ],
    typeChange: 'outsider',
    subtypeGains: ['augmented', 'native', 'occult', 'ravager spirit'],
    abilityScoreChanges: [
      { ability: 'CON', change: 2 },
      { ability: 'CHA', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Increased Speed',
        description: 'The ravager vessel\'s base land speed increases by 10 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Hijacked Vessel (Su)',
        description:
          'The ravager vessel gains a binder level equal to its Hit Dice and is treated as being in a Permanent Pact with a ravager spirit. It cannot seal pacts with other spirits unless it possesses the Amateur Pactmaker feat, the bind spirit class feature, or a similar ability. This pact does not count against the creature\'s limit for simultaneously bound spirits.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Radiance House',
      publication: 'Pact Magic Unbound: Grimoire of Lost Souls',
    },
    visibility: 'global',
    rev: 1,
  },

  // 355. Ravener (CR +2)
  {
    id: 'ravener',
    name: 'Ravener',
    description:
      'An undead dragon created when an evil ancient or older true dragon undergoes a dark necromantic transformation to escape mortality. Raveners are skeletal and driven by an insatiable hunger for souls to fuel their magic and sustain their existence. They exchange spells prepared for soul points, consumed from their soul ward to power their magic.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful evil', 'neutral evil', 'chaotic evil'] },
      { type: 'creature_type', allowed: ['dragon'] },
      { type: 'special', description: 'Must be an evil true dragon of Ancient age category or older.' },
    ],
    typeChange: 'undead',
    typeChangeNote: 'Retains all dragon subtypes. All racial Hit Dice become d8s; uses Charisma modifier for bonus hit points instead of Constitution.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote: 'Loses Constitution score (undead). Gains deflection bonus to AC equal to half its Charisma bonus (minimum +1).',
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'good' },
    immunities: ['undead traits'],
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'The ravener gains channel resistance +4.',
      },
      {
        scalingType: 'flat',
        name: 'Soul Ward (Su)',
        description:
          'The ravener is surrounded by an intangible field of siphoned soul energy. This soul ward has a number of hit points equal to twice the ravener\'s Hit Dice (maximum capacity). The ravener uses soul ward hit points instead of spell slots to power its soul magic.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Threat Range',
        description:
          'All of the ravener\'s natural weapons have their threat range increased to 19-20. A critical hit from a natural weapon inflicts 1 negative level on the target (Fortitude DC 10 + 1/2 HD + Cha modifier negates).',
      },
      {
        scalingType: 'flat',
        name: 'Breath Weapon',
        description:
          'The save DC for the ravener\'s breath weapon is Charisma-based. A creature that fails its save against the breath weapon gains 2 negative levels; a successful save results in 1 negative level.',
      },
      {
        scalingType: 'flat',
        name: 'Cowering Fear (Su)',
        description:
          'The ravener\'s frightful presence causes affected creatures to be cowered during the first round of exposure, then shaken for the remaining duration.',
      },
      {
        scalingType: 'flat',
        name: 'Soul Consumption (Su)',
        description:
          'When a living creature within 30 feet of the ravener dies, that creature must succeed at a Will save or have its soul consumed by the ravener, replenishing soul ward hit points.',
      },
      {
        scalingType: 'flat',
        name: 'Soul Magic (Su)',
        description:
          'The ravener casts spells using soul ward hit points instead of spell slots. Each spell consumes soul ward hit points equal to twice the spell\'s level (minimum 2).',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          'The ravener gains a +8 racial bonus on Intimidate, Perception, and Stealth checks.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Roleplaying Game Bestiary 2' },
    visibility: 'global',
    rev: 1,
  },

  // 356. Ravenous Creature (CR +1) — Advanced Bestiary variant
  {
    id: 'ravenous-creature',
    name: 'Ravenous Creature',
    description:
      'A creature cursed with a supernatural hunger for cannibalistic sustenance. The template represents beings affected by dark powers rewarding depravity, or those succumbing to wendigo-like afflictions. Ravenous creatures must consume their own kind\'s flesh regularly or face supernatural starvation.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living, intelligent creature that has consumed the flesh of its own kind.' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 6 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 4 },
    ],
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: '—' },
    fastHealing: '10 (when fed within 24 hours)',
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Senses',
        description: 'The ravenous creature gains darkvision 60 ft. (added to existing darkvision) and low-light vision.',
      },
      {
        scalingType: 'flat',
        name: 'Bite Attack',
        description:
          'The ravenous creature gains a secondary bite attack (or increased damage if a bite already exists).',
      },
      {
        scalingType: 'flat',
        name: 'Cannibalistic Healing (Ex)',
        description:
          'The ravenous creature gains fast healing 10 when it has eaten within the past 24 hours. If it consumes the flesh of its own kind within 1 hour, it heals all ability damage and drain.',
      },
      {
        scalingType: 'flat',
        name: 'Ravenous Body (Ex)',
        description:
          'The ravenous creature must feed on members of its own kind every 3 days or begin to starve. Each day without feeding deals nonlethal damage equal to the creature\'s Constitution score. When this nonlethal damage exceeds its hit point total, the creature dies.',
      },
      {
        scalingType: 'flat',
        name: 'Favored Prey (Ex)',
        description:
          'The ravenous creature gains a +2 bonus on attack and damage rolls and skill checks against creatures of the same type. Against members of its own kind specifically, this bonus increases to +4.',
      },
      {
        scalingType: 'flat',
        name: 'Hungry Frenzy (Ex)',
        description:
          'The ravenous creature can enter a barbarian-like rage usable a number of rounds per day equal to its Charisma modifier (minimum 1), but only against members of its own kind. If the creature is starving, all bonuses from this ability are doubled.',
      },
      {
        scalingType: 'flat',
        name: 'Ageless (Ex)',
        description:
          'The ravenous creature does not age as long as it is not starving.',
      },
      {
        scalingType: 'flat',
        name: 'Sprint (Ex)',
        description:
          'Once per hour, the ravenous creature can move at 10 times its base speed when it charges.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          'The ravenous creature gains a +4 racial bonus on Acrobatics, Escape Artist, Intimidate, and Stealth checks, and a +8 racial bonus on Climb, Perception, and Survival checks.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'The ravenous creature gains Blind-Fight, Improved Grapple, and Improved Unarmed Strike as bonus feats.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 357. Ravenous Creature (CR +1) [TOHC variant]
  {
    id: 'ravenous-creature-tohc',
    name: 'Ravenous Creature (Tome of Horrors Complete)',
    description:
      'A humanoid or monstrous humanoid transformed through a dark ritual into a savage, feral cannibal. The transformation requires slaying a humanoid with bare hands or a light slashing weapon, consuming all flesh within 6 hours, and drinking the blood while reciting the Ritual of Becoming. The transformation occurs 1d6 days later and takes one night to complete. The creature is driven by primal instincts and loses most of its civilized qualities.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid', 'monstrous humanoid'] },
      { type: 'special', description: 'Must be of Small to Large size. Must have slain a humanoid with bare hands or a light slashing weapon, consumed all flesh within 6 hours, and drunk the blood while reciting the Ritual of Becoming.' },
    ],
    typeChange: 'monstrous humanoid (if not already)',
    typeChangeNote: 'Does not gain the Augmented subtype. Humanoids becoming monstrous humanoids change their Hit Dice to d10s and recalculate base attack bonus, saves, and skills accordingly.',
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'CON', change: 2 },
      { ability: 'CHA', change: 4 },
      { ability: 'INT', change: -13, condition: 'Intelligence drops to 3 regardless of base score' },
    ],
    naturalArmorChange: 6,
    resistances: [
      { energyType: 'cold', value: 5 },
      { energyType: 'electricity', value: 5 },
    ],
    immunities: ['fear effects'],
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Senses',
        description: 'The ravenous creature gains darkvision 60 ft. (increases existing darkvision by 50%), low-light vision, and the scent ability.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description:
          'The ravenous creature gains two claw attacks and one bite attack. Damage by size: Small (claws 1d3, bite 1d4), Medium (claws 1d4, bite 1d6), Large (claws 1d6, bite 1d8). It uses only natural weapons and will not use ranged or manufactured melee weapons.',
      },
      {
        scalingType: 'flat',
        name: 'Primal Scream (Ex)',
        description:
          'As a standard action, the ravenous creature emits a howl audible 2 miles away. Animals flee automatically. Intelligent creatures within 300 feet with fewer Hit Dice than the ravenous creature must succeed at a Will save (DC 10 + 1/2 HD + Charisma modifier) or become panicked for 2d4 rounds. This is a sonic, mind-affecting fear effect. Creatures that succeed at or are immune to the save are immune to this creature\'s primal scream for one day.',
      },
      {
        scalingType: 'flat',
        name: 'Rage (Ex)',
        description:
          'Whenever the ravenous creature takes damage in combat, there is a 50% chance it enters an uncontrollable berserk rage that lasts until it or its opponent is dead. While raging it gains Str +4, Con +4, and takes a -2 penalty to AC. It cannot voluntarily end the rage.',
      },
      {
        scalingType: 'flat',
        name: 'Altered Skills and Feats',
        description:
          'The ravenous creature loses all of its base character\'s skill points and gains 1 x HD skill points. Only Perception, Stealth, and Survival are class skills. It loses all base feats and gains Great Fortitude and Skill Focus (Survival) as bonus feats. It may only select feats from a restricted list of combat and physical feats.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Frog God Games',
      publication: 'Tome of Horrors Complete',
    },
    visibility: 'global',
    rev: 1,
  },

  // 358. Rawboned Creature (CR +2)
  {
    id: 'rawboned-creature',
    name: 'Rawboned Creature',
    description:
      'Creatures warped by chaotic warpwaves or entropic magical events, rawboned remnants experience maddening pain, bone-wrenching horror, and sinew so taut it should snap, driving them to combat with wild abandon and no tactical sense. They gain the chaotic subtype and are notable for their tremorsense, extended reach, and brutal rending attacks.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type_excluded', excluded: ['ooze'] },
      { type: 'special', description: 'Any living, corporeal creature that is not an ooze.' },
    ],
    subtypeGains: ['chaotic'],
    naturalArmorChange: 2,
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: -2, minimum: 2 },
      { ability: 'CHA', change: -2, minimum: 2 },
    ],
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'bludgeoning' },
    features: [
      {
        scalingType: 'flat',
        name: 'Additional Hit Dice',
        description: 'The rawboned creature gains 2 additional racial Hit Dice of the appropriate type for its creature type.',
      },
      {
        scalingType: 'flat',
        name: 'Increased Speed',
        description:
          'The rawboned creature\'s base land speed increases by 10 feet. All other movement modes increase by 5 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Tremorsense 10 ft.',
        description: 'The rawboned creature gains tremorsense with a range of 10 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Extended Reach',
        description: 'The rawboned creature\'s reach increases by 5 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description:
          'The rawboned creature gains two claws, one bite, and one slam attack if it does not already possess them. Damage is appropriate to its size.',
      },
      {
        scalingType: 'flat',
        name: 'Rend (Ex)',
        description:
          'The rawboned creature gains a rend attack triggered by a bite and two claw hits. Rend damage equals the bite attack damage increased by two steps plus 1-1/2 times the creature\'s Strength bonus. If the creature already has rend, its damage increases by one step instead.',
      },
      {
        scalingType: 'flat',
        name: 'Cold Vulnerability',
        description: 'The rawboned creature gains vulnerability to cold.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'The rawboned creature gains Combat Reflexes and Improved Initiative as bonus feats.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description: 'The rawboned creature gains a +4 racial bonus on Perception and Survival checks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 359. Recycled Construct (CR -1)
  {
    id: 'recycled-construct',
    name: 'Recycled Construct',
    description:
      'A skilled artificer can revitalize a ruined construct by jury-rigging the pieces left intact. The patchwork nature of a recycled construct renders it fragile and leaves key circuitry exposed. The template reduces the construct\'s CR by 1 and introduces the malfunction weakness, making the construct vulnerable to precision damage and critical hits.',
    crAdjustment: -1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
      { type: 'min_hd', minimum: 3 },
      { type: 'special', description: 'Creator must have the Craft Construct and Technologist feats. For robots and clockworks, requires remains of complex constructs worth 50,000 gp or more.' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Reduced Natural Armor',
        description:
          'Any natural armor bonus the recycled construct possesses is reduced by 1 (minimum +0). This is one of six possible glitches that may affect the construct.',
      },
      {
        scalingType: 'flat',
        name: 'Spell Resistance Replaces Magic Immunity',
        description:
          'The recycled construct\'s immunity to magic is replaced with spell resistance equal to the base creature\'s CR + 11. Effects that were exceptions to the construct\'s magic immunity automatically bypass this spell resistance.',
      },
      {
        scalingType: 'flat',
        name: 'Reduced Damage Reduction',
        description:
          'Any damage reduction or hardness the recycled construct possesses is reduced by 5.',
      },
      {
        scalingType: 'flat',
        name: 'Malfunction (Ex)',
        description:
          'Whenever the recycled construct takes precision damage or a critical hit, it is staggered for 1 round and must roll on the malfunction table (1d10). A successful Disable Device check (DC 20 + base creature\'s HD) made before the precision damage is applied allows the attacker to roll twice and choose the result. Malfunction results range from no effect to sparks, flailing attacks, lubricant leakage, disarming, smoke or steam emission, shrapnel explosion, deafening screech, dispel magic pulse, or a berserk state.',
      },
      {
        scalingType: 'flat',
        name: 'Glitches',
        description:
          'For each failed Knowledge (engineering) check (DC 20 + base creature\'s CR) during construction, the recycled construct gains one glitch. The six possible glitches reduce hit points, movement, attack bonus, armor, skills, or impose a 5% chance each round of erratic behavior (as confusion).',
      },
      {
        scalingType: 'flat',
        name: 'Altered Natural Attack',
        description:
          'One of the recycled construct\'s natural attacks is removed. This slot may be replaced with a masterwork weapon.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Campaign Setting: Construct Handbook' },
    visibility: 'global',
    rev: 1,
  },

  // 360. Red Jester Creature (CR +2)
  {
    id: 'red-jester-creature',
    name: 'Red Jester Creature',
    description:
      'The undying remains of an executed court jester, appearing as a horrid walking corpse whose skin and body have transformed to resemble brightly colored clothes, floppy shoes, jingling bells, and a jester\'s hat. The creature\'s face is permanently pulling into a broad and horrific grin. Red jesters are created when those who drew from a deck of many things and suffered death are reanimated by dark humor and chaos.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Intelligence 13 or higher, ability to draw cards from a deck of many things, typically a corporeal creature with a humanoid figure.' },
    ],
    typeChange: 'undead',
    subtypeGains: ['augmented'],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 8 },
      { ability: 'INT', change: 4 },
      { ability: 'WIS', change: 4 },
      { ability: 'CHA', change: 6 },
    ],
    abilityScoreChangeNote: 'Loses Constitution score (undead).',
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'good' },
    immunities: ['undead traits'],
    srFormula: '11 + red jester\'s CR',
    features: [
      {
        scalingType: 'flat',
        name: 'Channel Resistance +4',
        description: 'The red jester creature gains channel resistance +4.',
      },
      {
        scalingType: 'flat',
        name: 'Fear Cackle (Su)',
        description:
          'As a free action, the red jester can emit a cackle in a 60-foot radius. This is a sonic, mind-affecting fear effect. The save DC is 10 + 1/2 the red jester\'s HD + its Charisma modifier.',
      },
      {
        scalingType: 'flat',
        name: 'Jester\'s Deck (Su)',
        description:
          'As a standard action, the red jester can draw a playing card and make a ranged touch attack (range 20 feet) that functions as a draw from a deck of many things. At CR 11 or higher, this becomes a swift action with a range of 40 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Merriment Strike (Su)',
        description:
          'When the red jester hits with a melee attack, the target must succeed at a Will save or fall to the ground laughing for 1d3 rounds (dazed condition). The DC is 10 + 1/2 HD + Charisma modifier.',
      },
      {
        scalingType: 'flat',
        name: 'Unassailable Mind (Ex)',
        description:
          'Any creature that attempts to affect the red jester with a mind-affecting effect must succeed at a Will save (same DC as merriment strike) or suffer a lesser confusion effect (or full insanity at CR 11 or higher).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 361. Revenant (CR +0)
  {
    id: 'revenant',
    name: 'Revenant',
    description:
      'Revenants are vampire-type undead that retain their humanity far better than typical undead. They can masquerade as living creatures, require blood for sustenance, and employ cruomancy—a blood-based magical system. Unlike standard vampires, revenants retain their Constitution score and are not instantly destroyed at 0 hit points. They must take 3 lesser weaknesses and 2 greater weaknesses from established lists.',
    crAdjustment: 0,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    typeChange: 'undead',
    subtypeGains: ['augmented', 'risen'],
    features: [
      {
        scalingType: 'flat',
        name: 'Altered Hit Dice',
        description:
          'Racial Hit Dice become d8s. Class-based Hit Dice are unchanged. The revenant uses its Wisdom modifier for bonus hit points instead of Constitution or Charisma.',
      },
      {
        scalingType: 'flat',
        name: 'Darkvision 60 ft.',
        description: 'The revenant gains darkvision with a range of 60 feet.',
      },
      {
        scalingType: 'flat',
        name: 'Risen Subtype Traits',
        description:
          'The revenant retains its Constitution score and gains modified undead traits: it is immune to bleed, death effects, disease, exhaustion, fatigue, paralysis, and poison. It is not immune to Fortitude-based effects. It gains a +4 racial bonus on saves against mind-affecting effects (but is not immune), and a +4 racial bonus on saves against ability drain, ability damage, energy drain, sleep, and stunning. It is not immune to nonlethal damage. It is harmed by positive energy and healed by negative energy. At 0 hit points it becomes unconscious or hibernating rather than immediately destroyed; it is destroyed when its negative hit points exceed its Constitution score.',
      },
      {
        scalingType: 'flat',
        name: 'Blood Dependency (mandatory weakness)',
        description:
          'The revenant must expend 1 blood point per day as a full-round action. Failure to do so results in escalating penalties.',
      },
      {
        scalingType: 'flat',
        name: 'Sunlight Vulnerability (mandatory weakness)',
        description:
          'The revenant suffers light necrosis in sunlight and incurs additional blood point costs for activating abilities while exposed to sunlight.',
      },
      {
        scalingType: 'flat',
        name: 'Additional Weaknesses',
        description:
          'The revenant must select 3 lesser weaknesses (from: garlic, grave dirt, holy symbols, mirrors, running water, silver vulnerability, stakes, unsettling aura) and 2 greater weaknesses (from: fire vulnerability, great sunlight vulnerability, unmistakable appearance, unwelcome).',
      },
      {
        scalingType: 'flat',
        name: 'Cruomancy',
        description:
          'The revenant gains a cruomancer level equal to its racial Hit Dice plus class levels (minimum 1). Its blood point pool maximum equals 1 + its racial Hit Dice (minimum 1), plus 1 per 2 non-cruomancy class levels. It gains Vampire\'s Bite as a bonus feat plus one additional qualifying vampire feat.',
      },
      {
        scalingType: 'flat',
        name: 'Becoming a Revenant (Ritual)',
        description:
          'A character can voluntarily become a revenant via a 1-hour ritual costing 500 gp in materials. The character wounds itself and bleeds into a ceremonial bowl at 1 HP per round. Upon reaching 0 HP, the character makes DC 15 Wisdom checks each round; success ends the bleeding and transforms the character into a revenant.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Necromancers of the Northwest',
      publication: 'Liber Vampyr',
    },
    visibility: 'global',
    rev: 1,
  },

  // 362. River-Born (CR +0)
  {
    id: 'river-born',
    name: 'River-Born',
    description:
      'Creatures that were born and live near rivers are as comfortable in water as they are on land.',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    features: [
      {
        scalingType: 'flat',
        name: 'Swim Class Skill',
        description: 'Swim is always a class skill for the river-born creature.',
      },
      {
        scalingType: 'flat',
        name: 'Hold Breath (Ex)',
        description:
          'The river-born creature can hold its breath for a number of rounds equal to 2 times its Constitution score before it risks drowning.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Jon Brazer Enterprises',
      publication: 'Book of Beasts: Monsters of the River Nations',
    },
    visibility: 'global',
    rev: 1,
  },

  // 363. Robot (CR +0)
  {
    id: 'robot',
    name: 'Robot',
    description:
      'A construct template that grants the robot subtype to any construct, making it an intelligent mechanical being with specific vulnerabilities and operational requirements. Robots are vulnerable to critical hits and take increased damage from electricity.',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    subtypeGains: ['robot'],
    immunities: ['stunned condition (from sources other than critical hits)'],
    features: [
      {
        scalingType: 'flat',
        name: 'Intelligence Score',
        description:
          'The robot gains an Intelligence score of 10 if it did not previously have one. It is intelligent with skills and feats appropriate to its Hit Dice. Class skills: Climb, Disable Device, Fly, Knowledge (all), Linguistics, Perception, and Sense Motive.',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerable to Critical Hits',
        description:
          'When a robot is struck by a critical hit, it must succeed at a Fortitude save (DC 15) or be stunned for 1 round. On a successful save, the robot is instead staggered for 1 round.',
      },
      {
        scalingType: 'flat',
        name: 'Electricity Vulnerability',
        description:
          'The robot takes 150% damage from electricity attacks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Drop Dead Studios',
      publication: 'Ultimate Engineering',
    },
    visibility: 'global',
    rev: 1,
  },

  // 364. Ruination Creature (CR +2)
  {
    id: 'ruination-creature',
    name: 'Ruination Creature',
    description:
      'Living agents of decay and corrosion that spread destruction wherever they go. These creatures appear as distorted and aberrant versions of a normal member of their species with discolored bone spurs, labored breathing, and movements accompanied by groans. Their mere presence corrodes objects and suppresses healing in a wide area.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 4 },
      { ability: 'CON', change: 8 },
    ],
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'silver' },
    immunities: ['acid', 'negative energy'],
    srFormula: '12 + creature\'s CR',
    features: [
      {
        scalingType: 'flat',
        name: 'Corroding Strike (Su)',
        description:
          'The ruination creature\'s melee attacks deal acid damage (1d6 to 5d6 based on CR) in addition to normal damage. Targets that fail a Reflex save (DC 10 + 1/2 CR + Constitution modifier) continue to take acid damage for 1d4 rounds. Creatures that strike the ruination creature with natural weapons or unarmed strikes take the same acid damage.',
      },
      {
        scalingType: 'flat',
        name: 'Degeneration (Su)',
        description:
          'All living creatures within 120 feet must succeed at Fortitude saves (DC 10 + 1/2 HD + Constitution modifier) or lose any regeneration or fast healing they possess for 24 hours. Creatures that fail their saves also take 1 point of negative energy damage per round while within range; the ruination creature regenerates an amount equal to the damage dealt. Conjuration (healing) spells cast within this aura require a caster level check to function.',
      },
      {
        scalingType: 'flat',
        name: 'Ruin Object (Su)',
        description:
          'Unattended non-silver objects within 120 feet must make Fortitude saves (DC 15 + 1/2 CR + Constitution modifier) or have their hit points reduced to half their maximum and gain the broken condition. The ruination creature can focus this ability as a swift action every 1d4 rounds on attended objects, undead, or constructs, dealing 1d6 per Hit Die.',
      },
      {
        scalingType: 'flat',
        name: 'Vulnerabilities',
        description:
          'The ruination creature has vulnerability to silver and electricity. Electricity descriptor spells bypass its spell resistance.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description:
          'The ruination creature gains Improved Sunder, Greater Sunder, and Power Attack as bonus feats.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          'The ruination creature gains a +8 racial bonus on Disable Device checks and a +2 bonus on all Dexterity-based skill checks.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Rite Publishing',
      publication: 'Pathways Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 365. Runeplated Construct (CR +1)
  {
    id: 'runeplated-construct',
    name: 'Runeplated Construct',
    description:
      'A magical template that infuses constructs with sin magic from one of seven schools (corresponding to the seven sins: Envy, Gluttony, Greed, Lust, Pride, Sloth, or Wrath), granting them enhanced combat abilities and magical resistances tied to their assigned sin. The construct gains the ability to channel sin energy through its attacks and gains resistance to opposing schools.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['construct'] },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Opposition School Resistance (Su)',
        description:
          'The runeplated construct gains a +2 bonus on saving throws against spells and spell-like abilities from the schools of magic opposed to its sin school. It cannot use spell-like abilities from its opposed schools, and gains +1 additional daily use of spell-like abilities from its own school.',
      },
      {
        scalingType: 'flat',
        name: 'Infused Attack (Su)',
        description:
          'The runeplated construct\'s melee attacks deal additional effects based on its sin type. Each of the seven sins (Envy, Gluttony, Greed, Lust, Pride, Sloth, Wrath) imparts a unique mechanical effect tied to that school of magic.',
      },
      {
        scalingType: 'flat',
        name: 'Runeplated (Su)',
        description:
          'The runeplated construct is restricted from casting or using spell-like abilities from its opposed schools of magic.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Campaign Setting: Construct Handbook' },
    visibility: 'global',
    rev: 1,
  },

  // 366. Runescarred (CR +1)
  {
    id: 'runescarred',
    name: 'Runescarred',
    description:
      'A template based on renegade dwarven warriors who underwent taboo rituals to gain powers similar to those of the rune giants they fight. The runescarred creature channels rune energy through metal weapons to deliver debilitating arcane attacks.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['humanoid'] },
    ],
    naturalArmorChange: 2,
    features: [
      {
        scalingType: 'flat',
        name: 'Rune Spark (Su)',
        description:
          'Three times per day, the runescarred creature can focus rune energy through a metal weapon as part of a melee attack (it must declare this before the attack roll). On a successful hit, the weapon releases a blast of arcane sparks that daze the target for 1 round and deal 1d6 points of damage (half fire and half electricity). On a miss, the ability discharges and requires 1d4+1 rounds to recharge before it can be used again.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Campaign Setting: Lost Cities of Golarion' },
    visibility: 'global',
    rev: 1,
  },

  // 367. Runeslave (CR +1)
  {
    id: 'runeslave',
    name: 'Runeslave',
    description:
      'A giant marked with painful runes that slowly consume its body and mind. Runeslaves gain significant combat abilities at the cost of a progressive, incurable wasting disease called arcane decay. Each week the disease progresses, the giant gains another runescar. When the number of runescars equals the giant\'s Hit Dice, it dies.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['giant'] },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'DEX', change: 2 },
      { ability: 'INT', change: -2 },
      { ability: 'WIS', change: -2 },
      { ability: 'CHA', change: -2 },
    ],
    immunities: ['fear effects', 'exhaustion', 'fatigue', 'nonlethal damage'],
    features: [
      {
        scalingType: 'flat',
        name: 'Increased Speed',
        description: 'The runeslave\'s base land speed increases by 20 feet. Other movement types are unchanged.',
      },
      {
        scalingType: 'flat',
        name: 'Resist Pain (Ex)',
        description:
          'The runeslave is immune to nonlethal damage. Against effects that inflict pain (such as a symbol of pain spell), the runeslave gains a +4 bonus on all saving throws.',
      },
      {
        scalingType: 'flat',
        name: 'Arcane Surge (Su)',
        description:
          'Once per day as a swift action, the runeslave can gain the benefits of the haste spell for 6 rounds. Using this ability forces the giant to make an additional Fortitude save against arcane decay.',
      },
      {
        scalingType: 'flat',
        name: 'Arcane Decay (Su)',
        description:
          'The runeslave is afflicted with arcane decay (disease: Fortitude DC 15; frequency 1/week; effect—gain one runescar; cure—none, except via limited wish, miracle, or wish). When the number of runescars equals the runeslave\'s Hit Dice, it dies.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feats',
        description: 'The runeslave gains Diehard and Toughness as bonus feats.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Adventure Path: Rise of the Runelords Anniversary Edition' },
    visibility: 'global',
    rev: 1,
  },

  // 368. Runewarped Creature (CR +1)
  {
    id: 'runewarped-creature',
    name: 'Runewarped Creature',
    description:
      'Creatures twisted by powerful magic into aberrations that hunger for magical energy. They bear altered or additional limb joints, elongated fingers, and a massive jaw capable of delivering a powerful bite. Created either through deliberate runewarping by mages or through exposure to aberrant energies. Runewarped creatures lose all spells and spell-like abilities but gain the ability to drain magic from others.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'creature_type', allowed: ['animal', 'humanoid', 'monstrous humanoid'] },
    ],
    typeChange: 'aberration',
    typeChangeNote: 'Base attack bonus, saves, and skill ranks are unchanged from base creature. All racial Hit Dice become d8s; class-based Hit Dice remain unchanged.',
    naturalArmorChange: 2,
    abilityScoreChanges: [
      { ability: 'STR', change: 4 },
      { ability: 'CON', change: 2 },
      { ability: 'INT', change: -4, minimum: 1 },
      { ability: 'CHA', change: -2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Senses',
        description: 'The runewarped creature gains darkvision 60 feet, low-light vision, and magic-scent.',
      },
      {
        scalingType: 'hd_threshold',
        name: 'Damage Reduction',
        description: 'Gains DR 5/magic.',
        minimumHD: 5,
      },
      {
        scalingType: 'flat',
        name: 'Spell Resistance',
        description:
          'The runewarped creature gains spell resistance equal to its new CR + 6 (or CR + 11 if it has 11 or more Hit Dice).',
      },
      {
        scalingType: 'flat',
        name: 'Magic-Scent (Ex)',
        description:
          'The runewarped creature can detect spellcasters within 60 feet, sensing their location and the relative power of their magical auras.',
      },
      {
        scalingType: 'flat',
        name: 'Consume Magic (Su)',
        description:
          'When the runewarped creature bites a creature, the target must succeed at a Constitution-based Will save or lose its highest-level prepared spell, uncast spell slot, or remaining use of its highest-level spell-like ability. If the target has no remaining spells or spell-like abilities, the bite has no additional effect.',
      },
      {
        scalingType: 'flat',
        name: 'Enhanced Bite',
        description:
          'The runewarped creature\'s bite damage is calculated as if it were one size category larger than it actually is. Existing bites increase their damage by one step.',
      },
      {
        scalingType: 'flat',
        name: 'Lost Spellcasting',
        description: 'The runewarped creature loses all spells and spell-like abilities it previously possessed.',
      },
    ],
    sourceInfo: { type: 'official', publication: 'Pathfinder Adventure Path #133: Secrets of Roderic\'s Cove' },
    visibility: 'global',
    rev: 1,
  },

  // 369. Saurian Creature (CR +1)
  {
    id: 'saurian-creature',
    name: 'Saurian Creature',
    description:
      'Saurians are reptile-like beings exhibiting the scales, teeth, and claws of a lizard with coloration typically ranging to one or two shades per individual. They represent creatures that have undergone a reptilian transformation, gaining the powerful physical traits of saurian predators.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Non-reptilian animal, humanoid, monstrous humanoid, or magical beast lacking the reptilian subtype.' },
    ],
    subtypeGains: ['reptilian'],
    typeChangeNote: 'Humanoid base creatures gain the reptilian subtype.',
    naturalArmorChange: 2,
    abilityScoreChanges: [
      { ability: 'DEX', change: -2, minimum: 1 },
      { ability: 'CON', change: 2 },
      { ability: 'WIS', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Senses',
        description: 'The saurian creature gains low-light vision and the scent ability.',
      },
      {
        scalingType: 'flat',
        name: 'Natural Attacks',
        description:
          'The saurian creature gains a secondary bite attack for each mouth (if it lacks natural mouth attacks) and a primary claw attack per arm (if it lacks natural arm attacks). It also gains rake (2 claws, damage matching claw attack).',
      },
      {
        scalingType: 'flat',
        name: 'Leaping Pounce (Ex)',
        description:
          'When the saurian creature charges at least 10 feet by jumping, it may make a full attack at the end of the charge, including its rake attacks.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          'The saurian creature gains a +8 racial bonus on Acrobatics (jump) and Survival checks. If capable of speech, it gains Draconic as a bonus language.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 370. Savant Creature (CR special)
  {
    id: 'savant-creature',
    name: 'Savant Creature',
    description:
      'Savants are creatures gifted with unusual intelligence due to some accident of birth. Physically weak and socially inept, they live on the fringes of the social order. They possess enlarged skulls and physical deformities. The template represents intellectual brilliance coupled with physical weakness and social dysfunction. CR adjustment is typically +0 or +1 for physical combat, or +2 if the savant casts spells as a cleric, druid, or wizard.',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Base creature must have an Intelligence score of 3 or higher.' },
    ],
    abilityScoreChanges: [
      { ability: 'STR', change: -2, minimum: 1 },
      { ability: 'DEX', change: -2, minimum: 1 },
      { ability: 'CON', change: -2, minimum: 1 },
      { ability: 'INT', change: 10 },
      { ability: 'WIS', change: 6 },
      { ability: 'CHA', change: -4, minimum: 1 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Deductive Leap (Ex)',
        description:
          'Once per round, the savant creature can substitute its Intelligence modifier for any ability modifier on a saving throw before rolling.',
      },
      {
        scalingType: 'flat',
        name: 'Uncanny Dodge (Ex)',
        description:
          'The savant creature gains the uncanny dodge ability identical to that of a rogue. If it already possesses uncanny dodge, it gains improved uncanny dodge instead.',
      },
      {
        scalingType: 'flat',
        name: 'Combat Insight (Ex)',
        description:
          'The savant creature gains a +2 insight bonus to AC and on attack and damage rolls against creatures it has observed in combat for 3 or more rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Mastery (Ex)',
        description:
          'The savant creature chooses 10 skills; it may take 10 on checks with those skills even when under stress or distracted.',
      },
      {
        scalingType: 'flat',
        name: 'Home Advantage (Ex)',
        description:
          'In areas the savant creature knows very well, it gains a +4 insight bonus on initiative checks, Perception checks, and Stealth checks.',
      },
      {
        scalingType: 'flat',
        name: 'Altered Skills',
        description:
          'Recalculate skill points. Treat Bluff, Diplomacy, Intimidate, Sense Motive, Disable Device, Linguistics, Knowledge (all), and Use Magic Device as class skills. Gain a +6 insight bonus on social and Knowledge checks against creatures the savant has observed. May use Knowledge, Disable Device, Linguistics, and Use Magic Device untrained.',
      },
      {
        scalingType: 'flat',
        name: 'Bonus Feat',
        description: 'The savant creature gains Blind-Fight as a bonus feat.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 371. Scalding Creature (CR +1)
  {
    id: 'scalding-creature',
    name: 'Scalding Creature',
    description:
      'Beings partially composed of superheated water with constantly emitting boiling water and steam. Found where the elemental planes of fire and water meet, or in locations on the Material Plane that simulate such conditions. Scalding creatures can transform into a cloud of scalding steam and see through all mists and vapors.',
    crAdjustment: 1,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Living corporeal creature without the earth subtype.' },
    ],
    typeChange: 'outsider',
    subtypeGains: ['elemental', 'extraplanar', 'fire', 'water'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 6 },
      { ability: 'INT', change: -2, minimum: 1 },
      { ability: 'WIS', change: 2 },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Altered Hit Dice',
        description: 'The scalding creature\'s Hit Dice change to d10s.',
      },
      {
        scalingType: 'flat',
        name: 'Fly Speed',
        description:
          'The scalding creature gains a perfect fly speed equal to its fastest base movement speed.',
      },
      {
        scalingType: 'flat',
        name: 'Languages',
        description: 'The scalding creature gains Aquan and Ignan as bonus languages.',
      },
      {
        scalingType: 'flat',
        name: 'Cloud Sight (Ex)',
        description:
          'The scalding creature can see through clouds, gases, fogs, mists, and smoke without penalty. Such conditions do not grant concealment against it.',
      },
      {
        scalingType: 'flat',
        name: 'Steam Body (Ex)',
        description:
          'The scalding creature\'s body is composed of steam and vapor, granting it constant concealment (20% miss chance).',
      },
      {
        scalingType: 'flat',
        name: 'Breath Weapon (Su)',
        description:
          'Every 1d4 rounds, the scalding creature can exhale superheated steam as either a 60-foot line (1d6 fire damage per Hit Die, maximum 20d6, Reflex save half) or a 10-foot radius spread (1d6 fire damage per 2 Hit Dice, maximum 10d6, no save). The save DC is Constitution-based.',
      },
      {
        scalingType: 'flat',
        name: 'Scalding Form (Su)',
        description:
          'The scalding creature can burn creatures within its steam form as per incendiary cloud, dealing 1d6 damage per 2 Hit Dice per round (Reflex save halves). Half of this damage is fire damage and half is untyped. This ability can be used 1 + 1 per 5 Hit Dice times per day, for a duration of at least the creature\'s Constitution modifier in rounds.',
      },
      {
        scalingType: 'flat',
        name: 'Scalding Touch (Ex)',
        description:
          'All of the scalding creature\'s natural attacks and a single touch attack deal an additional 1d4 fire damage (scaling up with size).',
      },
      {
        scalingType: 'flat',
        name: 'Steam Form (Su)',
        description:
          'The scalding creature can assume a cloud form at will as a move action, otherwise functioning as the gaseous form spell. It gains a +5 bonus on Stealth checks while in fog, steam, or clouds.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 372. Scalewoven Creature (CR +2)
  {
    id: 'scalewoven-creature',
    name: 'Scalewoven Creature',
    description:
      'A creature bonded with a living carapace of scaleweaver scales that functions as masterwork full plate armor. The carapace grants tremendous protection but inflicts a temporary negative level upon the host each day and can deliver a deadly poison if broken or destroyed.',
    crAdjustment: 2,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    abilityScoreChanges: [
      { ability: 'STR', change: 2 },
      { ability: 'INT', change: -2, minimum: 1 },
      { ability: 'WIS', change: -2 },
      { ability: 'CHA', change: -2 },
    ],
    damageReduction: { scalingType: 'flat', value: 10, bypassedBy: '—' },
    resistances: [
      { energyType: 'acid', value: 10 },
      { energyType: 'cold', value: 10 },
      { energyType: 'fire', value: 10 },
    ],
    fastHealing: '1',
    features: [
      {
        scalingType: 'flat',
        name: 'Living Carapace (Ex)',
        description:
          'The scalewoven creature is encased in scaleweaver scales that function as masterwork full plate armor (+9 armor bonus, max Dex +1, armor check penalty -5, hardness 20, 60 hit points). The host does not suffer fatigue from sleeping in the carapace. The carapace repairs itself at a rate of 1 hit point per hour. It can be sundered or damaged but cannot be targeted by object-affecting spells or effects. When the carapace is broken (reduced to 0 hit points), the host is afflicted with Scaleweaver Poison. When the carapace is destroyed (reduced to negative hit points beyond its total), the template is removed and the host suffers four doses of Scaleweaver Poison.',
      },
      {
        scalingType: 'flat',
        name: 'Rage (Ex)',
        description:
          'The scalewoven creature gains the barbarian\'s rage ability at an effective barbarian level equal to half its Hit Dice (minimum 1). After the rage ends, the creature suffers a -4 penalty on attacks, skills, and ability checks for twice the duration of the rage. Each round during this period, the creature must succeed at a DC 25 Will save or fail to suppress the penalty.',
      },
      {
        scalingType: 'flat',
        name: 'Daily Negative Level',
        description:
          'The scalewoven creature gains one temporary negative level upon acquiring the template and again every 24 hours thereafter. These negative levels are never permanent and can be removed by restoration or similar effects.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: "Varyag's Forge",
      publication: 'Nature Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 373. Seasonal Creature (CR +1)
  {
    id: 'seasonal-creature',
    name: 'Seasonal Creature',
    description:
      'Seasonal creatures undergo cyclical transformations tied to the year\'s progression. Their physical appearance, personality, and abilities shift with each season. Spring brings youthful exuberance and green skin with budding flowers; summer darkens their coloring as fruits ripen; autumn brings yellowed skin and fiery foliage; winter pales their appearance with white skin and winter-colored hair replacing vegetation. All mechanical statistics change with the seasons as specified.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any living creature that normally lives above-ground.' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Spring Traits',
        description:
          'Ability scores: Str +4, Dex +4, Con -4, Int -4, Wis -4, Cha +4. Energy resistance 5 to cold and fire. +1d4 fire damage on all natural and manufactured weapon attacks. +2 on saves vs. fear, -2 vs. cold. +1 caster level and save DC for illusion effects. +2 circumstance bonus to Knowledge (nature) and Stealth in spring-colored natural environments. +2 on Craft, Heal, and Handle Animal checks.',
      },
      {
        scalingType: 'flat',
        name: 'Summer Traits',
        description:
          'Ability scores: Str +2, Dex +2, Con -2, Int -2, Wis -2, Cha +2. Energy resistance 5 to electricity and fire. +1d6 fire damage on all natural and manufactured weapon attacks. +2 on saves vs. fire, -2 vs. cold. +1 caster level and save DC for evocation effects. +2 circumstance bonus to Knowledge (nature) and Stealth in summer-colored natural environments. +2 on Acrobatics, Climb, and Swim checks.',
      },
      {
        scalingType: 'flat',
        name: 'Autumn Traits',
        description:
          'Ability scores: Str -2, Dex -2, Con +2, Int +2, Wis +2, Cha -2. Energy resistance 5 to cold and electricity. +1d4 cold damage on all natural and manufactured weapon attacks. +2 on saves vs. cold, -2 vs. polymorph. +1 caster level and save DC for transmutation effects. +2 circumstance bonus to Knowledge (nature) and Stealth in autumn-colored natural environments. +2 on Bluff, Disguise, and Sleight of Hand checks.',
      },
      {
        scalingType: 'flat',
        name: 'Winter Traits',
        description:
          'Ability scores: Str -4, Dex -4, Con +4, Int +4, Wis +4, Cha -4. Energy resistance 10 to cold. +1d6 cold damage on all natural and manufactured weapon attacks. +2 on saves vs. cold, -2 vs. fear. +1 caster level and save DC for necromancy effects. +2 circumstance bonus to Knowledge (nature) and Stealth in winter-colored natural environments. +2 on Escape Artist, Perception, and Survival checks.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Note',
        description:
          'Skills are not recalculated based on Intelligence changes. The template can be combined with the seelie or unseelie templates.',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 374. Seelie Creature (CR +1)
  {
    id: 'seelie-creature',
    name: 'Seelie Creature',
    description:
      'A creature touched by the power of the Seelie Court of the fey realms. Seelie creatures are connected to the natural world and the Fey Realms, able to walk between worlds and identify other fey creatures at a glance. They become unseelie if they adopt an evil alignment.',
    crAdjustment: 1,
    acquisitionType: 'either',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'alignment', allowed: ['lawful good', 'neutral good', 'chaotic good', 'lawful neutral', 'true neutral', 'chaotic neutral'] },
      { type: 'special', description: 'Living, intelligent, non-evil creature, or a creature that lost the unseelie template by becoming good-aligned.' },
    ],
    subtypeGains: ['extraplanar'],
    abilityScoreChanges: [
      { ability: 'DEX', change: 4 },
      { ability: 'WIS', change: 2 },
      { ability: 'CHA', change: 4 },
    ],
    damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'cold iron or silver' },
    features: [
      {
        scalingType: 'flat',
        name: 'Enhanced Senses',
        description: 'The seelie creature gains low-light vision and seelie sight.',
      },
      {
        scalingType: 'flat',
        name: 'Seelie Sight (Ex)',
        description:
          'The seelie creature can identify any seelie or unseelie creature on sight, regardless of mundane or magical disguise effects. It can also see any other creature in a faerie walk state.',
      },
      {
        scalingType: 'flat',
        name: 'Charmed Life (Ex)',
        description:
          'The seelie creature gains a +4 luck bonus on saving throws against figment-based illusions and compulsion effects.',
      },
      {
        scalingType: 'flat',
        name: 'Faerie Walk (Su)',
        description:
          'At will, the seelie creature can enter an ethereal-like state within untouched natural environments of at least 1 acre in size, coexisting between the Material Plane and the Fey Realms. It can bring willing creatures or creatures affected by its sleep spell into this state.',
      },
      {
        scalingType: 'flat',
        name: 'Feyblood (Ex)',
        description:
          'The seelie creature is treated as both fey and its original creature type for the purposes of spells, abilities, and magic items.',
      },
      {
        scalingType: 'flat',
        name: 'Seelie Pact (Ex)',
        description:
          'If the seelie creature adopts an evil alignment, it loses the seelie template and gains the unseelie template instead.',
      },
      {
        scalingType: 'flat',
        name: 'Skill Bonuses',
        description:
          'The seelie creature gains a +4 luck bonus on Perception checks and a +4 racial bonus on Heal, Survival, and Knowledge (nature) checks. It gains Sylvan as a bonus language.',
      },
    ],
    spellLikeAbilities: [
      { spellName: 'dancing lights', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'ghost sound', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'silent image', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'speak with animals', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'speak with plants', frequency: '3/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'alter self', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'magic mouth', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'plane shift (Fey Realms only)', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'quench', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
      { spellName: 'sleep', frequency: '1/day', casterLevelFormula: 'equal to HD', dcAbility: 'CHA' },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },

  // 375. Selenic Creature (CR variable — changes by lunar phase)
  // NOTE: CR adjustment is intentionally phase-dependent; crAdjustment: 0 is a placeholder
  // since no single CR applies. Third-party source (Green Ronin Publishing).
  {
    id: 'selenic-creature',
    name: 'Selenic Creature',
    description:
      'Ruled by the phases of the moon, selenic creatures are moody beings whose hearts and minds shift with the shadows crawling across the face of that silvery orb. The creature\'s alignment, abilities, senses, and statistics change across 8 lunar phases (approximately 4-5 days each). New Moon: evil/chaotic alignment, darkvision +120 ft, deeper darkness at will, Dex +4, Con -2, Int +2, Blind-Fight bonus feat, +4 Intimidate/Stealth, -4 Bluff/Diplomacy. Waxing Crescent: alignment shifts toward evil/chaotic, darkvision +60 ft, darkness at will, light 1/day, Dex +2, +2 Stealth, Shadow\'s Friend. Waxing Half-Moon: darkvision +60 ft, low-light vision, darkness and light 3/day each, Dex +2, Wis +2, +5 Acrobatics, Shadow\'s Friend. Waxing Gibbous: alignment shifts toward good/lawful, low-light vision, scent, light at will, darkness 1/day, Wis +4, Shadow\'s Friend. Full Moon: good/lawful alignment, low-light vision, scent, Str +4, Con +2, Wis -2, light at will, Lycanthrope Control. Waning Gibbous: alignment shifts toward good/lawful, low-light vision, darkness 1/day, light 3/day, Str +2, Con +2, Alertness bonus feat, +2 Sense Motive/Stealth, Shadow\'s Friend. Waning Half-Moon: darkvision +60 ft, low-light vision, darkness, deeper darkness, and light 1/day each, Con +2, Int +2, +4 Perception/Sense Motive, Shadow\'s Friend. Waning Crescent: alignment shifts toward evil/chaotic, darkvision +60 ft, low-light vision, darkness at will, deeper darkness 1/day, Dex +2, Int +2, +2 Sense Motive/Stealth, Shadow\'s Friend. Shadow\'s Friend grants a +2 morale bonus on attack and damage rolls in low-light conditions. Lycanthrope Control allows detection of lycanthropes within 30 ft and can force form change via standard action (Will DC 11 + HD negates).',
    crAdjustment: 0,
    acquisitionType: 'inherited',
    isSimpleTemplate: false,
    prerequisites: [
      { type: 'special', description: 'Any intelligent creature.' },
    ],
    features: [
      {
        scalingType: 'flat',
        name: 'Lunar Phase Transformation',
        description:
          'The selenic creature\'s statistics, alignment, senses, and spell-like abilities change based on the current lunar phase. There are 8 phases of approximately 4-5 days each. See the description for the full breakdown of each phase\'s modifications.',
      },
      {
        scalingType: 'flat',
        name: 'Shadow\'s Friend (Ex)',
        description:
          'During phases where this ability is active, the selenic creature gains a +2 morale bonus on attack rolls and damage rolls when fighting in areas of low-light or darkness.',
      },
      {
        scalingType: 'flat',
        name: 'Lycanthrope Control (Su)',
        description:
          'During the Full Moon phase, the selenic creature can detect lycanthropes within 30 feet. As a standard action, it can attempt to force a lycanthrope to change forms; the lycanthrope can negate this with a Will save (DC 11 + the selenic creature\'s Hit Dice).',
      },
    ],
    sourceInfo: {
      type: 'third_party',
      publisher: 'Green Ronin Publishing',
      publication: 'Advanced Bestiary',
    },
    visibility: 'global',
    rev: 1,
  },
];
