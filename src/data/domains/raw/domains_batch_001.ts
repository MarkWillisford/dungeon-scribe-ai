// Batch 001 | first: 'Air Domain' | last: 'Chaos/Demon Subdomain' | count: 24
import { DomainEntry } from '@/types/classOptions';

// ---- Domains (10) ----

export const airDomain: DomainEntry = {
  id: 'air',
  name: 'Air Domain',
  description:
    'You can manipulate lightning, mist, and wind, traffic with air creatures, and are resistant to electricity damage.',
  domainSpells: [
    'obscuring mist', // level 1
    'wind wall', // level 2
    'gaseous form', // level 3
    'air walk', // level 4
    'control winds', // level 5
    'chain lightning', // level 6
    'elemental body IV', // level 7
    'whirlwind', // level 8
    'elemental swarm', // level 9
  ],
  powers: [
    {
      name: 'Lightning Arc',
      description:
        'As a standard action, you can unleash an arc of electricity targeting any foe within 30 feet as a ranged touch attack. This arc of electricity deals 1d6 points of electricity damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Electricity Resistance',
      description:
        'At 6th level, you gain resist electricity 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to electricity.',
      levelGained: 6,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const animalDomain: DomainEntry = {
  id: 'animal',
  name: 'Animal Domain',
  description:
    'You can speak with and befriend animals with ease. In addition, you treat Knowledge (nature) as a class skill.',
  domainSpells: [
    'calm animals', // level 1
    'hold animal', // level 2
    'dominate animal', // level 3
    "summon nature's ally IV", // level 4
    'beast shape III', // level 5
    'antilife shell', // level 6
    'animal shapes', // level 7
    "summon nature's ally VIII", // level 8
    'shapechange', // level 9
  ],
  powers: [
    {
      name: 'Speak with Animals',
      description:
        'You can speak with animals, as per the spell, for a number of rounds per day equal to 3 + your cleric level.',
      levelGained: 1,
    },
    {
      name: 'Animal Companion',
      description:
        'At 4th level, you gain the service of an animal companion. Your effective druid level for this animal companion is equal to your cleric level – 3.',
      levelGained: 4,
    },
  ],
  grantedClassSkills: ['Knowledge (nature)'],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const artificeDomain: DomainEntry = {
  id: 'artifice',
  name: 'Artifice Domain',
  description:
    'You can repair damage to objects, animate objects with life, and create objects from nothing.',
  domainSpells: [
    'animate rope', // level 1
    'wood shape', // level 2
    'stone shape', // level 3
    'minor creation', // level 4
    'fabricate', // level 5
    'major creation', // level 6
    'wall of iron', // level 7
    'statue', // level 8
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: "Artificer's Touch",
      description:
        "You can cast mending at will, using your cleric level as the caster level to repair damaged objects. In addition, you can cause damage to objects and construct creatures by striking them with a melee touch attack. Objects and constructs take 1d6 points of damage +1 for every two cleric levels you possess. This attack bypasses an amount of damage reduction and hardness equal to your cleric level. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Dancing Weapons',
      description:
        'At 8th level, you can give a weapon touched the dancing special weapon quality for 4 rounds. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const chaosDomain: DomainEntry = {
  id: 'chaos',
  name: 'Chaos Domain',
  description:
    'Your touch infuses life and weapons with chaos, and you revel in all things anarchic.',
  domainSpells: [
    'protection from law', // level 1
    'align weapon', // level 2
    'magic circle against law', // level 3
    'chaos hammer', // level 4
    'dispel law', // level 5
    'animate objects', // level 6
    'word of chaos', // level 7
    'cloak of chaos', // level 8
    'summon monster IX', // level 9
  ],
  powers: [
    {
      name: 'Touch of Chaos',
      description:
        'You can imbue a target with chaos as a melee touch attack. For the next round, anytime the target rolls a d20, he must roll twice and take the less favorable result. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Chaos Blade',
      description:
        'At 8th level, you can give a weapon touched the anarchic special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const charmDomain: DomainEntry = {
  id: 'charm',
  name: 'Charm Domain',
  description:
    'You can baffle and befuddle foes with a touch or a smile, and your beauty and grace are divine.',
  domainSpells: [
    'charm person', // level 1
    'calm emotions', // level 2
    'suggestion', // level 3
    'heroism', // level 4
    'charm monster', // level 5
    'geas/quest', // level 6
    'insanity', // level 7
    'demand', // level 8
    'dominate monster', // level 9
  ],
  powers: [
    {
      name: 'Dazing Touch',
      description:
        'You can cause a living creature to become dazed for 1 round as a melee touch attack. Creatures with more Hit Dice than your cleric level are unaffected. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Charming Smile',
      description:
        'At 8th level, you can cast charm person as a swift action, with a DC of 10 + 1/2 your cleric level + your Wisdom modifier. You can only have one creature charmed in this way at a time. The total number of rounds of this effect per day is equal to your cleric level. The rounds do not need to be consecutive, and you can dismiss the charm at any time as a free action. Each attempt to use this ability consumes 1 round of its duration, whether or not the creature succeeds on its save to resist the effect.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const communityDomain: DomainEntry = {
  id: 'community',
  name: 'Community Domain',
  description:
    'Your touch can heal wounds, and your presence instills unity and strengthens emotional bonds.',
  domainSpells: [
    'bless', // level 1
    'shield other', // level 2
    'prayer', // level 3
    'imbue with spell ability', // level 4
    'telepathic bond', // level 5
    "heroes' feast", // level 6
    'refuge', // level 7
    'mass cure critical wounds', // level 8
    'miracle', // level 9
  ],
  powers: [
    {
      name: 'Calming Touch',
      description:
        'You can touch a creature as a standard action to heal it of 1d6 points of nonlethal damage + 1 point per cleric level. This touch also removes the fatigued, shaken, and sickened conditions (but has no effect on more severe conditions). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Unity',
      description:
        'At 8th level, whenever a spell or effect targets you and one or more allies within 30 feet, you can use this ability to allow your allies to use your saving throw against the effect in place of their own. Each ally must decide individually before the rolls are made. Using this ability is an immediate action. You can use this ability once per day at 8th level, and one additional time per day for every four cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const darknessDomain: DomainEntry = {
  id: 'darkness',
  name: 'Darkness Domain',
  description: 'You manipulate shadows and darkness.',
  domainSpells: [
    'obscuring mist', // level 1
    'blindness/deafness', // level 2
    'deeper darkness', // level 3
    'shadow conjuration', // level 4
    'summon monster V', // level 5
    'shadow walk', // level 6
    'power word blind', // level 7
    'greater shadow evocation', // level 8
    'shades', // level 9
  ],
  powers: [
    {
      name: 'Touch of Darkness',
      description:
        "As a melee touch attack, you can cause a creature's vision to be fraught with shadows and darkness. The creature touched treats all other creatures as if they had concealment, suffering a 20% miss chance on all attack rolls. This effect lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Eyes of Darkness',
      description:
        'At 8th level, your vision is not impaired by lighting conditions, even in absolute darkness and magic darkness. You can use this ability for a number of rounds per day equal to 1/2 your cleric level. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const deathDomain: DomainEntry = {
  id: 'death',
  name: 'Death Domain',
  description:
    'You can cause the living to bleed at a touch, and find comfort in the presence of the dead.',
  domainSpells: [
    'cause fear', // level 1
    'death knell', // level 2
    'animate dead', // level 3
    'death ward', // level 4
    'slay living', // level 5
    'create undead', // level 6
    'destruction', // level 7
    'create greater undead', // level 8
    'wail of the banshee', // level 9
  ],
  powers: [
    {
      name: 'Bleeding Touch',
      description:
        'As a melee touch attack, you can cause a living creature to take 1d6 points of damage per round. This effect persists for a number of rounds equal to 1/2 your cleric level (minimum 1) or until stopped with a DC 15 Heal check or any spell or effect that heals damage. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: "Death's Embrace",
      description:
        "At 8th level, you heal damage instead of taking damage from channeled negative energy. If the channeled negative energy targets undead, you heal hit points just like undead in the area.",
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const destructionDomain: DomainEntry = {
  id: 'destruction',
  name: 'Destruction Domain',
  description:
    'You revel in ruin and devastation, and can deliver particularly destructive attacks.',
  domainSpells: [
    'true strike', // level 1
    'shatter', // level 2
    'rage', // level 3
    'inflict critical wounds', // level 4
    'shout', // level 5
    'harm', // level 6
    'disintegrate', // level 7
    'earthquake', // level 8
    'implosion', // level 9
  ],
  powers: [
    {
      name: 'Destructive Smite',
      description:
        'You gain the supernatural ability to make a single melee attack with a morale bonus on damage rolls equal to 1/2 your cleric level (minimum 1). You must declare the destructive smite before making the attack. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Destructive Aura',
      description:
        'At 8th level, you can emit a 30-foot aura of destruction for a number of rounds per day equal to your cleric level. All attacks made against targets in this aura (including you) gain a morale bonus on damage equal to 1/2 your cleric level and all critical threats are automatically confirmed. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const earthDomain: DomainEntry = {
  id: 'earth',
  name: 'Earth Domain',
  description:
    'You have mastery over earth, metal, and stone, can fire darts of acid, and command earth creatures.',
  domainSpells: [
    'magic stone', // level 1
    'soften earth and stone', // level 2
    'stone shape', // level 3
    'spike stones', // level 4
    'wall of stone', // level 5
    'stoneskin', // level 6
    'elemental body IV', // level 7
    'earthquake', // level 8
    'elemental swarm', // level 9
  ],
  powers: [
    {
      name: 'Acid Dart',
      description:
        'As a standard action, you can unleash an acid dart targeting any foe within 30 feet as a ranged touch attack. This acid dart deals 1d6 points of acid damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Acid Resistance',
      description:
        'At 6th level, you gain resist acid 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to acid.',
      levelGained: 6,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Subdomains (14) ----

export const airCloudSubdomain: DomainEntry = {
  id: 'air-cloud',
  name: 'Cloud Subdomain',
  description:
    'Subdomain of Air. You can manipulate mist and storm clouds, and can call devastating thunder and lightning.',
  domainSpells: [
    'obscuring mist', // level 1
    'wind wall', // level 2
    'gaseous form', // level 3
    'solid fog', // level 4 (replaces air walk)
    'control winds', // level 5
    'chain lightning', // level 6
    'elemental body IV', // level 7
    'whirlwind', // level 8
    'storm of vengeance', // level 9 (replaces elemental swarm)
  ],
  powers: [
    {
      name: 'Lightning Arc',
      description:
        'As a standard action, you can unleash an arc of electricity targeting any foe within 30 feet as a ranged touch attack. This arc of electricity deals 1d6 points of electricity damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Thundercloud',
      description:
        'At 8th level, you can, as a standard action, summon a storm cloud. This power functions as fog cloud except that creatures inside the cloud are deafened and take 2d6 points of electricity damage each round from the flashes of thunder and lightning. Once created, you can concentrate on the cloud to move it up to 30 feet each round. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const airLightningSubdomain: DomainEntry = {
  id: 'air-lightning',
  name: 'Lightning Subdomain',
  description:
    'Subdomain of Air. You channel the raw power of lightning, empowering your electricity spells to devastating effect.',
  domainSpells: [
    'shocking grasp', // level 1 (replaces obscuring mist)
    'wind wall', // level 2
    'lightning bolt', // level 3 (replaces gaseous form)
    'air walk', // level 4
    'control winds', // level 5
    'chain lightning', // level 6
    'elemental body IV', // level 7
    'whirlwind', // level 8
    'elemental swarm', // level 9
  ],
  powers: [
    {
      name: 'Lightning Arc',
      description:
        'As a standard action, you can unleash an arc of electricity targeting any foe within 30 feet as a ranged touch attack. This arc of electricity deals 1d6 points of electricity damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Lightning Rod',
      description:
        "As a swift action when you cast a spell with the electricity descriptor, you can designate one creature within line of sight. The spell's damage against that creature increases by 50%, as if affected by the Empower Spell feat. This additional damage results from divine power that is not subject to being reduced by electricity resistance, and you take an equal amount of electricity damage immediately after you cast the spell. The spell can deal this additional damage only once, even if it could affect the target multiple times. You can use this ability once per day at 8th level and one additional time per day for every 4 cleric levels you have beyond 8th.",
      levelGained: 8,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const airWindSubdomain: DomainEntry = {
  id: 'air-wind',
  name: 'Wind Subdomain',
  description:
    'Subdomain of Air. You command the power of wind, using blasts of air to push back your enemies.',
  domainSpells: [
    'whispering wind', // level 1 (replaces obscuring mist)
    'wind wall', // level 2
    'gaseous form', // level 3
    'air walk', // level 4
    'control winds', // level 5
    'wind walk', // level 6 (replaces chain lightning)
    'elemental body IV', // level 7
    'whirlwind', // level 8
    'winds of vengeance', // level 9 (replaces elemental swarm)
  ],
  powers: [
    {
      name: 'Wind Blast',
      description:
        'As a standard action, you can unleash a blast of air in a 30-foot line. Make a combat maneuver check against each creature in the line, using your caster level as your base attack bonus and your Wisdom modifier in place of your Strength modifier. Treat the results as a bull rush attempt. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Electricity Resistance',
      description:
        'At 6th level, you gain resist electricity 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to electricity.',
      levelGained: 6,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const animalFeatherSubdomain: DomainEntry = {
  id: 'animal-feather',
  name: 'Feather Subdomain',
  description:
    'Subdomain of Animal. You possess the keen senses and grace of birds, and empower your allies with the gift of flight.',
  domainSpells: [
    'calm animals', // level 1
    'feather fall', // level 2 (replaces hold animal)
    'fly', // level 3 (replaces dominate animal)
    "summon nature's ally IV", // level 4
    'beast shape III', // level 5
    'mass fly', // level 6 (replaces antilife shell)
    'animal shapes', // level 7
    "summon nature's ally VIII", // level 8
    'shapechange', // level 9
  ],
  powers: [
    {
      name: 'Eyes of the Hawk',
      description:
        'You gain a racial bonus on Perception checks equal to 1/2 your cleric level (minimum +1). In addition, if you can act during a surprise round, you receive a +2 racial bonus on your Initiative check.',
      levelGained: 1,
    },
    {
      name: 'Animal Companion',
      description:
        'At 4th level, you gain the service of an animal companion. Your effective druid level for this animal companion is equal to your cleric level – 3.',
      levelGained: 4,
    },
  ],
  grantedClassSkills: ['Fly'],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const animalFurSubdomain: DomainEntry = {
  id: 'animal-fur',
  name: 'Fur Subdomain',
  description:
    'Subdomain of Animal. You embody the predatory speed and low-light sight of fur-bearing creatures.',
  domainSpells: [
    'magic fang', // level 1 (replaces calm animals)
    'hold animal', // level 2
    'beast shape I', // level 3 (replaces dominate animal)
    "summon nature's ally IV", // level 4
    'beast shape III', // level 5
    'antilife shell', // level 6
    'animal shapes', // level 7
    "summon nature's ally VIII", // level 8
    'shapechange', // level 9
  ],
  powers: [
    {
      name: "Predator's Grace",
      description:
        "You can, as a swift action, grant yourself a +10-foot bonus to your base speed for 1 round. This bonus increases by 5 feet for every 5 cleric levels you possess. In addition, you gain low-light vision for 1 round. If you already possess low-light vision, the range of your sight becomes three times that of a human in dim light for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Animal Companion',
      description:
        'At 4th level, you gain the service of an animal companion. Your effective druid level for this animal companion is equal to your cleric level – 3.',
      levelGained: 4,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const animalInsectSubdomain: DomainEntry = {
  id: 'animal-insect',
  name: 'Insect Subdomain',
  description:
    'Subdomain of Animal. The domain spells provided by this subdomain affect vermin rather than animals, treating them as if they were not immune to spells with the mind-affecting descriptor.',
  domainSpells: [
    'calm animals', // level 1
    'hold animal', // level 2
    'dominate animal', // level 3
    'giant vermin', // level 4 (replaces summon nature\'s ally IV)
    'vermin shape II', // level 5 (replaces beast shape III)
    'antilife shell', // level 6
    'animal shapes', // level 7
    "summon nature's ally VIII", // level 8
    'shapechange', // level 9
  ],
  powers: [
    {
      name: 'Exoskeleton',
      description:
        'As a swift action, you can grow an exoskeleton that grants you a +1 enhancement bonus to your natural armor and 1d4 temporary hit points + 1 for every 2 cleric levels you have. The natural armor bonus increases by 1 for every 5 cleric levels you have. The exoskeleton retracts after 1 round, ending its benefits. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Animal Companion',
      description:
        'At 4th level, you gain the service of an animal companion. Your effective druid level for this animal companion is equal to your cleric level – 3.',
      levelGained: 4,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const artificeAlchemySubdomain: DomainEntry = {
  id: 'artifice-alchemy',
  name: 'Alchemy Subdomain',
  description:
    "Subdomain of Artifice. You infuse prepared spells into potions through divine ritual, blending the cleric's sacred arts with the alchemist's craft.",
  domainSpells: [
    'animate rope', // level 1
    'touch injection', // level 2 (replaces wood shape)
    'stone shape', // level 3
    'amplify elixir', // level 4 (replaces minor creation)
    'fabricate', // level 5
    'delayed consumption', // level 6 (replaces major creation)
    'wall of iron', // level 7
    'statue', // level 8
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: 'Divine Alchemy',
      description:
        "You can perform a 1-minute ritual that infuses a flask of water with one of your prepared spells, creating an improvised potion that lasts until consumed or the next time you prepare spells. You can only use spells that target one or more creatures. The maximum level of spell you can infuse equals 1 + 1 for every 4 cleric levels you possess. The potion functions as an alchemist extract for the purpose of the domain spell. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Dancing Weapons',
      description:
        'At 8th level, you can give a weapon touched the dancing special weapon quality for 4 rounds. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const artificeConstructSubdomain: DomainEntry = {
  id: 'artifice-construct',
  name: 'Construct Subdomain',
  description:
    'Subdomain of Artifice. You breathe life into inanimate objects, animating them to serve your will.',
  domainSpells: [
    'animate rope', // level 1
    'wood shape', // level 2
    'stone shape', // level 3
    'minor creation', // level 4
    'fabricate', // level 5
    'major creation', // level 6
    'limited wish', // level 7 (replaces wall of iron)
    'polymorph any object', // level 8 (replaces statue)
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: "Artificer's Touch",
      description:
        "You can cast mending at will, using your cleric level as the caster level to repair damaged objects. In addition, you can cause damage to objects and construct creatures by striking them with a melee touch attack. Objects and constructs take 1d6 points of damage +1 for every two cleric levels you possess. This attack bypasses an amount of damage reduction and hardness equal to your cleric level. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Animate Servant',
      description:
        'At 8th level, as a standard action, you can give life to inanimate objects. This ability functions as animate objects using your cleric level as the caster level. You can use this ability once per day at 8th level, and one additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const artificeIndustrySubdomain: DomainEntry = {
  id: 'artifice-industry',
  name: 'Industry Subdomain',
  description:
    "Subdomain of Artifice. Growing up in a city has broadened your philosophy, and helped you interpret your patron's divine will in a novel way.",
  domainSpells: [
    "crafter's fortune", // level 1 (replaces animate rope)
    'wood shape', // level 2
    'stone shape', // level 3
    'minor creation', // level 4
    'fabricate', // level 5
    'major creation', // level 6
    "mage's magnificent mansion", // level 7 (replaces wall of iron)
    'statue', // level 8
    'wooden phalanx', // level 9 (replaces prismatic sphere)
  ],
  powers: [
    {
      name: "Artificer's Touch",
      description:
        "You can cast mending at will, using your cleric level as the caster level to repair damaged objects. In addition, you can cause damage to objects and construct creatures by striking them with a melee touch attack. Objects and constructs take 1d6 points of damage +1 for every two cleric levels you possess. This attack bypasses an amount of damage reduction and hardness equal to your cleric level. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Aura of Efficiency',
      description:
        "At 8th level, you can emit a 30-foot-radius aura that grants your allies a +4 bonus on all saving throws against effects that inflict the fatigued or exhausted condition. Any equipment wielded by your allies within this area gets a bonus to hardness equal to 1/2 your cleric level, and your allies' attacks against targets within this area ignore an equal amount of hardness. You can use this aura for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.",
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const artificeToilSubdomain: DomainEntry = {
  id: 'artifice-toil',
  name: 'Toil Subdomain',
  description:
    'Subdomain of Artifice. You enforce the drudgery of labor upon your enemies, compelling them to repeat their actions mindlessly.',
  domainSpells: [
    'command', // level 1 (replaces animate rope)
    'wood shape', // level 2
    'stone shape', // level 3
    'minor creation', // level 4
    'waves of fatigue', // level 5 (replaces fabricate)
    'major creation', // level 6
    'waves of exhaustion', // level 7 (replaces wall of iron)
    'statue', // level 8
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: "Artificer's Touch",
      description:
        "You can cast mending at will, using your cleric level as the caster level to repair damaged objects. In addition, you can cause damage to objects and construct creatures by striking them with a melee touch attack. Objects and constructs take 1d6 points of damage +1 for every two cleric levels you possess. This attack bypasses an amount of damage reduction and hardness equal to your cleric level. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Aura of Repetition',
      description:
        'At 8th level, you can emit a 30-foot aura of repetition for a number of rounds per day equal to your cleric level. All enemies within this aura must make a Will save each round or repeat their action from the previous round (if possible). Enemies that attacked previously attack again with possible target changes; those that moved repeat the same move action with potential route changes; creatures that drank potions must do so again even from empty bottles; non-repeatable actions are wasted. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const artificeTrapSubdomain: DomainEntry = {
  id: 'artifice-trap',
  name: 'Trap Subdomain',
  description:
    'Subdomain of Artifice. You lay supernatural traps to ensnare and punish those who cross you.',
  domainSpells: [
    'animate rope', // level 1
    'snare', // level 2 (replaces wood shape)
    'improve trap', // level 3 (replaces stone shape)
    'minor creation', // level 4
    'fabricate', // level 5
    'major creation', // level 6
    'teleport trap', // level 7 (replaces wall of iron)
    'statue', // level 8
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: "Artificer's Touch",
      description:
        "You can cast mending at will, using your cleric level as the caster level to repair damaged objects. In addition, you can cause damage to objects and construct creatures by striking them with a melee touch attack. Objects and constructs take 1d6 points of damage +1 for every two cleric levels you possess. This attack bypasses an amount of damage reduction and hardness equal to your cleric level. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Supernatural Trap',
      description:
        'At 8th level, select a supernatural ranger trap. You can use this trap a number of times per day equal to your Wisdom bonus. The DCs for Perception checks, Disable Device checks, and saving throws against the trap are equal to 10 + 1/2 your character level + your Wisdom bonus. The trap lasts for 1 hour or until triggered.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const chaosAzataSubdomain: DomainEntry = {
  id: 'chaos-azata',
  name: 'Azata Subdomain',
  description:
    "Subdomain of Chaos. Azatas are a race of chaotic good outsiders. You channel their joyful, freedom-loving spirit to uplift allies and break the bonds of enchantment.",
  domainSpells: [
    'expeditious retreat', // level 1 (replaces protection from law)
    'align weapon', // level 2
    'fly', // level 3 (replaces magic circle against law)
    'chaos hammer', // level 4
    'dispel law', // level 5
    'planar ally', // level 6 (replaces animate objects)
    'word of chaos', // level 7
    'cloak of chaos', // level 8
    'summon monster IX', // level 9
  ],
  powers: [
    {
      name: "Elysium's Call",
      description:
        "With a touch, you can imbue creatures with the spirit of Elysium, lifting their spirits and freeing them from bonds. The creatures touched can immediately reroll any failed saving throws against spells and spell-like abilities of the enchantment (charm) and enchantment (compulsion) subschools. In addition, targets receive a +2 sacred bonus on such saving throws and a +2 sacred bonus on CMB checks to escape a grapple. Finally, targets can ignore up to 5 feet of difficult terrain each round, as if they had the Nimble Moves feat. These bonuses last for a number of rounds equal to 1/2 your cleric level (minimum 1), although the saving throw reroll only applies when the creature is touched. You can use this ability for a number of rounds per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Chaos Blade',
      description:
        'At 8th level, you can give a weapon touched the anarchic special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const chaosDemodandSubdomain: DomainEntry = {
  id: 'chaos-demodand',
  name: 'Demodand Subdomain',
  description:
    "Subdomain of Chaos. Demodands are a race of chaotic evil outsiders native to Golarion's Outer Planes. You channel their corrosive hatred of divine power.",
  domainSpells: [
    'protection from law', // level 1
    'align weapon', // level 2
    'magic circle against law', // level 3
    'chaos hammer', // level 4
    'dispel law', // level 5
    'corrosive consumption', // level 6 (replaces animate objects)
    'word of chaos', // level 7
    'cloak of chaos', // level 8
    'summon monster IX', // level 9
  ],
  powers: [
    {
      name: 'Faith-Stealing Strike',
      description:
        'You can make a single melee attack using your highest base attack bonus against a creature capable of casting divine spells. If you damage the creature, it must succeed at a Will save (DC = 10 + 1/2 your cleric level + your Wisdom modifier) or be unable to cast any divine spells for 1 round. If you do not damage your target with the attack, this ability is expended with no effect. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Chaos Blade',
      description:
        'At 8th level, you can give a weapon touched the anarchic special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const chaosDemonSubdomain: DomainEntry = {
  id: 'chaos-demon',
  name: 'Demon Subdomain',
  description:
    'Subdomain of Chaos. Demons are a race of chaotic evil outsiders. You channel their savage fury to enhance your combat prowess.',
  domainSpells: [
    'doom', // level 1 (replaces protection from law)
    'align weapon', // level 2
    'rage', // level 3 (replaces magic circle against law)
    'chaos hammer', // level 4
    'dispel law', // level 5
    'planar binding', // level 6 (replaces animate objects; demons only)
    'word of chaos', // level 7
    'cloak of chaos', // level 8
    'summon monster IX', // level 9
  ],
  powers: [
    {
      name: 'Fury of the Abyss',
      description:
        'As a swift action, you can give yourself an enhancement bonus equal to 1/2 your cleric level (minimum +1) on melee attacks, melee damage rolls, and combat maneuver checks. This bonus lasts for 1 round. During this round, you take a –2 penalty to AC. You can use this ability for a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Chaos Blade',
      description:
        'At 8th level, you can give a weapon touched the anarchic special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Batch array ----

export const batch_001: DomainEntry[] = [
  airDomain,
  animalDomain,
  artificeDomain,
  chaosDomain,
  charmDomain,
  communityDomain,
  darknessDomain,
  deathDomain,
  destructionDomain,
  earthDomain,
  airCloudSubdomain,
  airLightningSubdomain,
  airWindSubdomain,
  animalFeatherSubdomain,
  animalFurSubdomain,
  animalInsectSubdomain,
  artificeAlchemySubdomain,
  artificeConstructSubdomain,
  artificeIndustrySubdomain,
  artificeToilSubdomain,
  artificeTrapSubdomain,
  chaosAzataSubdomain,
  chaosDemodandSubdomain,
  chaosDemonSubdomain,
];
