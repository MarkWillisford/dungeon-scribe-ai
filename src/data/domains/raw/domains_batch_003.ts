// Batch 003 | first: 'Earth/Metal Subdomain' | last: 'Magic Domain' | count: 26
// PAGE_FETCH_FAILED: none
import { DomainDocument } from '@/types/classOptions';

// ---- Earth Subdomains (3) ----

export const earthMetalSubdomain: DomainDocument = {
  id: 'earth-metal',
  name: 'Metal Subdomain',
  description: 'Subdomain of Earth. You are attuned to the power of metal and forge your body into a weapon of divine will.',
  domainSpells: [
    'magic stone', // level 1
    'heat metal', // level 2 (replaces soften earth and stone)
    'stone shape', // level 3
    'spike stones', // level 4
    'wall of stone', // level 5
    'wall of iron', // level 6 (replaces stoneskin)
    'elemental body IV', // level 7 (earth only)
    'iron body', // level 8 (replaces earthquake)
    'elemental swarm', // level 9 (earth spell only)
  ],
  powers: [
    {
      name: 'Metal Fist',
      description:
        'As a swift action, you can turn your fists into metal for 1 round, allowing you to make unarmed strikes that deal 1d6 points of bludgeoning damage plus your Strength modifier. These unarmed strikes do not provoke attacks of opportunity, but attacking with both uses the two-weapon fighting rules as normal. In addition, these unarmed strikes ignore the hardness of items with a hardness of 10 or less. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Acid Resistance',
      description:
        'At 6th level, you gain resist acid 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to acid.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const earthPetrificationSubdomain: DomainDocument = {
  id: 'earth-petrification',
  name: 'Petrification Subdomain',
  description: 'Subdomain of Earth. You channel the power of stone to harden your flesh against the world, trading mobility for enduring protection.',
  domainSpells: [
    'magic stone', // level 1
    'soften earth and stone', // level 2
    'stone shape', // level 3
    'calcific touch', // level 4 (replaces spike stones)
    'stoneskin', // level 5 (replaces wall of stone)
    'flesh to stone', // level 6 (replaces stoneskin)
    'elemental body IV', // level 7 (earth only)
    'statue', // level 8 (replaces earthquake)
    'elemental swarm', // level 9 (earth spell only)
  ],
  powers: [
    {
      name: 'Fossil Form',
      description:
        'At the beginning of your turn as a swift action, you can infuse your flesh with minerals, granting you cumbersome security. Until the beginning of your next turn, you are staggered, gain hardness 2, and gain a +2 bonus on saving throws against petrification. This hardness increases by 2 and your saving throw bonus increases by 1 for every 4 cleric levels you have. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Acid Resistance',
      description:
        'At 6th level, you gain resist acid 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to acid.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const earthRadiationSubdomain: DomainDocument = {
  id: 'earth-radiation',
  name: 'Radiation Subdomain',
  description: 'Subdomain of Earth. You channel the invisible, corrupting power that flows from deep within the earth, sickening those who draw near.',
  domainSpells: [
    'magic stone', // level 1
    'defoliate', // level 2 (replaces soften earth and stone)
    'stone shape', // level 3
    'blight', // level 4 (replaces spike stones)
    'wall of stone', // level 5
    'stoneskin', // level 6
    'elemental body IV', // level 7 (earth only)
    'horrid wilting', // level 8 (replaces earthquake)
    'elemental swarm', // level 9 (earth spell only)
  ],
  powers: [
    {
      name: 'Radiating Touch',
      description:
        'As a standard action that provokes attacks of opportunity, you can irradiate any unattended object for a number of rounds equal to your cleric level. While an object is irradiated, it emits a faint aura of transmutation. Any creature that passes within 5 feet of the aura must succeed at a Will save (DC equal to 10 + 1/2 your cleric level + your Wisdom modifier) or become sickened. You\'re immune to this object\'s effect. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Acid Resistance',
      description:
        'At 6th level, you gain resist acid 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to acid.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Evil Subdomains (9) ----

export const evilCannibalismSubdomain: DomainDocument = {
  id: 'evil-cannibalism',
  name: 'Cannibalism Subdomain',
  description: 'Subdomain of Evil. You draw power from the darkest act of consumption, devouring the flesh of your enemies to gain mastery over them.',
  domainSpells: [
    'magic fang', // level 1 (replaces protection from good)
    "enemy's heart", // level 2 (replaces align weapon)
    'magic fang (greater)', // level 3 (replaces magic circle against good)
    'unholy blight', // level 4
    'dispel good', // level 5
    'create undead', // level 6
    'blasphemy', // level 7
    'unholy aura', // level 8
    'summon monster IX', // level 9 (evil spell only)
  ],
  powers: [
    {
      name: 'Consume the Enemy',
      description:
        "As a full-round action that is considered an evil act and provokes attacks of opportunity, you can bite a helpless living or freshly killed creature, dealing 1d3 points of damage. By consuming the creature's flesh, you gain a +1 profane bonus on saving throw DCs for all spells, spell-like abilities, and supernatural abilities you use against creatures of the same type (and subtype, if humanoid or outsider) as the cannibalized creature. This effect lasts for a number of minutes equal to 1/2 your cleric level or until you use this ability against a different creature. At 5th, 10th, 15th, and 20th level, this bonus increases by 1 (+5 maximum). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Scythe of Evil',
      description:
        'At 8th level, you can give a weapon touched the unholy special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const evilCorruptionSubdomain: DomainDocument = {
  id: 'evil-corruption',
  name: 'Corruption Subdomain',
  description: 'Subdomain of Evil. You awaken the darkest impulses within others, stoking guilt and sinful desire until corruption consumes them.',
  domainSpells: [
    'protection from good', // level 1
    'suggestion', // level 2 (replaces align weapon)
    'magic circle against good', // level 3
    'unholy blight', // level 4
    'dispel good', // level 5
    'bestow curse (greater)', // level 6 (replaces create undead)
    'blasphemy', // level 7
    'unholy aura', // level 8
    'summon monster IX', // level 9 (evil spell only)
  ],
  powers: [
    {
      name: 'Touch of Evil',
      description:
        'You can cause a creature to become sickened as a melee touch attack. Creatures sickened by your touch count as good for the purposes of spells with the evil descriptor. This ability lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Spark Malfeasance',
      description:
        'At 8th level, you can awaken the sinful desires of a target within 30 feet with a ranged touch attack. The target suffers extreme guilt and is sickened for a number of rounds equal to 1/2 your cleric level. To end the effect earlier, the target can willingly commit an evil act (if it is of good alignment) or attempt a Will save (DC = 10 + 1/2 your cleric level + your Wisdom modifier) at the beginning of its turn each round. Creatures that succeed at their saving throws are immune to this ability for 24 hours. You can use this ability once per day at 8th level, and an additional time per day for every 4 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const evilDaemonSubdomain: DomainDocument = {
  id: 'evil-daemon',
  name: 'Daemon Subdomain',
  description: 'Subdomain of Evil. Daemons are a race of neutral evil outsiders who embody the concept of death and the corruption of souls.',
  domainSpells: [
    'cause fear', // level 1 (replaces protection from good)
    'align weapon', // level 2 (evil only)
    'vampiric touch', // level 3 (replaces magic circle against good)
    'unholy blight', // level 4
    'dispel good', // level 5
    'planar binding', // level 6 (daemons only; replaces create undead)
    'blasphemy', // level 7
    'unholy aura', // level 8
    'summon monster IX', // level 9 (evil spell only)
  ],
  powers: [
    {
      name: 'Touch of Evil',
      description:
        'You can cause a creature to become sickened as a melee touch attack. Creatures sickened by your touch count as good for the purposes of spells with the evil descriptor. This ability lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Whispering Evil',
      description:
        'At 8th level, as a standard action, you can whisper a hypnotizing litany of empty promises. Each enemy within a 30-foot emanation that can hear you must succeed on a Will saving throw or become fascinated for as long as you continue the litany. You can use this power a number of rounds per day equal to your cleric level, but these rounds do not need to be consecutive. This is a mind-affecting effect.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const evilDemodandSubdomain: DomainDocument = {
  id: 'evil-demodand',
  name: 'Demodand Subdomain',
  description: 'Subdomain of Evil. Demodands are hateful outsiders who loathe divine power and delight in cutting off mortals from their gods.',
  domainSpells: [
    'protection from good', // level 1
    'align weapon', // level 2 (evil only)
    'magic circle against good', // level 3
    'unholy blight', // level 4
    'dispel good', // level 5
    'corrosive consumption', // level 6 (replaces create undead)
    'blasphemy', // level 7
    'unholy aura', // level 8
    'summon monster IX', // level 9 (evil spell only)
  ],
  powers: [
    {
      name: 'Faith-Stealing Strike',
      description:
        'You can make a single melee attack using your highest base attack bonus against a creature capable of casting divine spells. If you damage the creature, it must succeed at a Will save (DC = 10 + 1/2 your cleric level + your Wisdom modifier) or be unable to cast any divine spells for 1 round. If you do not damage your target with the attack, this ability is expended with no effect. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Scythe of Evil',
      description:
        'At 8th level, you can give a weapon touched the unholy special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const evilDemonSubdomain: DomainDocument = {
  id: 'evil-demon',
  name: 'Demon Subdomain',
  description: 'Subdomain of Evil. Demons are a race of chaotic evil outsiders who embody sin and destruction, and you channel their savage fury.',
  domainSpells: [
    'doom', // level 1 (replaces protection from good)
    'align weapon', // level 2 (evil only)
    'rage', // level 3 (replaces magic circle against good)
    'unholy blight', // level 4
    'dispel good', // level 5
    'planar binding', // level 6 (demons only; replaces create undead)
    'blasphemy', // level 7
    'unholy aura', // level 8
    'summon monster IX', // level 9 (evil spell only)
  ],
  powers: [
    {
      name: 'Fury of the Abyss',
      description:
        'As a swift action, you can give yourself an enhancement bonus equal to 1/2 your cleric level (minimum +1) on melee attacks, melee damage rolls, and combat maneuver checks. This bonus lasts for 1 round. During this round, you take a –2 penalty to AC. You can use this ability for a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Scythe of Evil',
      description:
        'At 8th level, you can give a weapon touched the unholy special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const evilDevilSubdomain: DomainDocument = {
  id: 'evil-devil',
  name: 'Devil Subdomain',
  description: 'Subdomain of Evil. Devils are a race of lawful evil outsiders who corrupt souls through temptation and binding contracts.',
  domainSpells: [
    'command', // level 1 (replaces protection from good)
    'align weapon', // level 2 (evil only)
    'suggestion', // level 3 (replaces magic circle against good)
    'unholy blight', // level 4
    'dispel good', // level 5
    'planar binding', // level 6 (devils only; replaces create undead)
    'blasphemy', // level 7
    'unholy aura', // level 8
    'summon monster IX', // level 9 (evil spell only)
  ],
  powers: [
    {
      name: "Hell's Corruption",
      description:
        "You can cause a creature to become more susceptible to corruption as a melee touch attack. Creatures touched take a –2 penalty on all saving throws and must roll all opposed skill checks twice, taking the worse result. This effect lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability for a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Scythe of Evil',
      description:
        'At 8th level, you can give a weapon touched the unholy special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const evilFearSubdomain: DomainDocument = {
  id: 'evil-fear',
  name: 'Fear Subdomain',
  description: 'Subdomain of Evil. You relish the feeling of power that rises in you when your enemies quake before you in fear.',
  domainSpells: [
    'cause fear', // level 1 (replaces protection from good)
    'align weapon', // level 2 (evil only)
    'scare', // level 3 (replaces magic circle against good)
    'fear', // level 4 (replaces unholy blight)
    'dispel good', // level 5
    'create undead', // level 6
    'blasphemy', // level 7
    'unholy aura', // level 8
    'summon monster IX', // level 9 (evil spell only)
  ],
  powers: [
    {
      name: 'Touch of Evil',
      description:
        'You can cause a creature to become sickened as a melee touch attack. Creatures sickened by your touch count as good for the purposes of spells with the evil descriptor. This ability lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Feed on Fear',
      description:
        'At 8th level, as an immediate action upon successfully hitting a creature with a melee attack that\'s already suffering from a fear effect, you deal 2d6 extra points of damage and gain that amount in temporary hit points. These temporary hit points last for 24 hours or until lost. You can use this ability once per day at 8th level, and an additional time per day for every 4 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const evilKytonSubdomain: DomainDocument = {
  id: 'evil-kyton',
  name: 'Kyton Subdomain',
  description: 'Subdomain of Evil. Kytons are a race of lawful evil outsiders who embrace pain as a path to power and transcendence.',
  domainSpells: [
    'delay pain', // level 1 (replaces protection from good)
    'instrument of agony', // level 2 (replaces align weapon)
    'agonize', // level 3 (replaces magic circle against good)
    'unholy blight', // level 4
    'symbol of pain', // level 5 (replaces dispel good)
    'create undead', // level 6
    'blasphemy', // level 7
    'unholy aura', // level 8
    'summon monster IX', // level 9 (evil spell only)
  ],
  powers: [
    {
      name: 'Touch of Evil',
      description:
        'You can cause a creature to become sickened as a melee touch attack. Creatures sickened by your touch count as good for the purposes of spells with the evil descriptor. This ability lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Pain Is Power',
      description:
        'At 8th level, after taking damage from any source, you may attempt a DC 25 concentration check as an immediate action. If you succeed, you gain the benefits of a blessing of fervor spell for a number of rounds equal to 1/2 your cleric level. If you fail, this ability is expended with no effect. You can use this ability once at 8th level, plus an additional time for every 4 levels you are beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const evilPlagueSubdomain: DomainDocument = {
  id: 'evil-plague',
  name: 'Plague Subdomain',
  description: 'Subdomain of Evil. You carry disease as a divine instrument of suffering, exacerbating the afflictions of those you touch.',
  domainSpells: [
    'ray of sickening', // level 1 (replaces protection from good)
    'align weapon', // level 2 (evil only)
    'contagion', // level 3 (replaces magic circle against good)
    'unholy blight', // level 4
    'dispel good', // level 5
    'plague storm', // level 6 (replaces create undead)
    'blasphemy', // level 7
    'horrid wilting', // level 8 (replaces unholy aura)
    'summon monster IX', // level 9 (evil spell only)
  ],
  powers: [
    {
      name: 'Touch of Evil',
      description:
        'You can cause a creature to become sickened as a melee touch attack. Creatures sickened by your touch count as good for the purposes of spells with the evil descriptor. This ability lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Touch of Virulence',
      description:
        'At 8th level, as a standard action, you can touch a diseased creature and exacerbate its condition. If it fails a Fortitude save (DC = 10 + 1/2 your cleric level + your Wisdom modifier), the creature takes damage as though it had failed its Fortitude save against the disease and any remaining onset time for the disease ends. You can use this ability once per day at 8th level, plus one additional time per day at 14th level and 20th level.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Fire Subdomains (3) ----

export const fireArsonSubdomain: DomainDocument = {
  id: 'fire-arson',
  name: 'Arson Subdomain',
  description: 'Subdomain of Fire. You express your devotion by setting the world ablaze.',
  domainSpells: [
    'burning hands', // level 1
    'flaming sphere', // level 2 (replaces produce flame)
    'fireball', // level 3
    'wall of fire', // level 4
    'flame strike', // level 5 (replaces fire shield)
    'fire seeds', // level 6
    'delayed blast fireball', // level 7 (replaces elemental body IV)
    'incendiary cloud', // level 8
    'elemental swarm', // level 9 (fire spell only)
  ],
  powers: [
    {
      name: 'Call Fire',
      description:
        'As a standard action, you can stretch out your hand toward any visible fire source within 60 feet and beckon it toward you. This causes a ribbon-thin streak of fire to approach you in a straight line through the air. Any creature directly in the fire ribbon\'s path takes 1d4 points of fire damage; a successful Reflex save (DC = 10 + 1/2 your cleric level + your Wisdom modifier) negates this damage. When the ribbon of fire reaches your hand, it either extinguishes or lights a flammable object of your choice that you\'re holding. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Fire Resistance',
      description:
        'At 6th level, you gain resist fire 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to fire.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fireAshSubdomain: DomainDocument = {
  id: 'fire-ash',
  name: 'Ash Subdomain',
  description: 'Subdomain of Fire. You channel the smothering remnants of fire, wielding ash and cinder to blind foes and reveal the hidden.',
  domainSpells: [
    'burning hands', // level 1
    'produce flame', // level 2
    'fireball', // level 3
    'wall of fire', // level 4
    'fire shield', // level 5
    'fire seeds', // level 6
    'disintegrate', // level 7 (replaces elemental body IV)
    'incendiary cloud', // level 8
    'fiery body', // level 9 (replaces elemental swarm)
  ],
  powers: [
    {
      name: 'Fire Bolt',
      description:
        'As a standard action, you can unleash a scorching bolt of divine fire from your outstretched hand. You can target any single foe within 30 feet as a ranged touch attack with this bolt of fire. If you hit the foe, the fire bolt deals 1d6 points of fire damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Wall of Ashes',
      description:
        'At 8th level, you can create a wall of swirling ashes anywhere within 100 feet. This wall is up to 20 feet high and up to 10 feet long per cleric level you possess. The wall of ash blocks line of sight, and any creature passing through it must make a Fortitude save or be blinded for 1d4 rounds. The wall of ash reveals invisible creatures that are inside it or adjacent to it, although they become invisible again if they move away from the wall. You can use this ability for a number of minutes per day equal to your cleric level, but these minutes do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fireSmokeSubdomain: DomainDocument = {
  id: 'fire-smoke',
  name: 'Smoke Subdomain',
  description: 'Subdomain of Fire. You wield the choking, blinding power of smoke to obscure the battlefield and confound your enemies.',
  domainSpells: [
    'burning hands', // level 1
    'pyrotechnics', // level 2 (replaces produce flame)
    'stinking cloud', // level 3 (replaces fireball)
    'wall of fire', // level 4
    'fire shield', // level 5
    'fire seeds', // level 6
    'elemental body IV', // level 7 (fire only)
    'incendiary cloud', // level 8
    'elemental swarm', // level 9 (fire spell only)
  ],
  powers: [
    {
      name: 'Cloud of Smoke',
      description:
        'As a standard action, you can create a 5-foot-radius cloud of smoke. This power has a range of 30 feet. Creatures inside the cloud take a –2 penalty on attack rolls and Perception skill checks for as long as they remain inside and for 1 round after exiting the cloud. Creatures inside the cloud gain concealment from attacks made by opponents that are not adjacent to them. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Fire Resistance',
      description:
        'At 6th level, you gain resist fire 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to fire.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Core Domains (11) ----

export const evilDomain: DomainDocument = {
  id: 'evil',
  name: 'Evil Domain',
  description: 'You are sinister and cruel, and have wholly pledged your soul to the cause of evil.',
  domainSpells: [
    'protection from good', // level 1
    'align weapon', // level 2 (evil only)
    'magic circle against good', // level 3
    'unholy blight', // level 4
    'dispel good', // level 5
    'create undead', // level 6
    'blasphemy', // level 7
    'unholy aura', // level 8
    'summon monster IX', // level 9 (evil spell only)
  ],
  powers: [
    {
      name: 'Touch of Evil',
      description:
        'You can cause a creature to become sickened as a melee touch attack. Creatures sickened by your touch count as good for the purposes of spells with the evil descriptor. This ability lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Scythe of Evil',
      description:
        'At 8th level, you can give a weapon touched the unholy special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fireDomain: DomainDocument = {
  id: 'fire',
  name: 'Fire Domain',
  description: 'You can call forth fire, command creatures of the inferno, and your flesh does not burn.',
  domainSpells: [
    'burning hands', // level 1
    'produce flame', // level 2
    'fireball', // level 3
    'wall of fire', // level 4
    'fire shield', // level 5
    'fire seeds', // level 6
    'elemental body IV', // level 7 (fire only)
    'incendiary cloud', // level 8
    'elemental swarm', // level 9 (fire spell only)
  ],
  powers: [
    {
      name: 'Fire Bolt',
      description:
        'As a standard action, you can unleash a scorching bolt of divine fire from your outstretched hand. You can target any single foe within 30 feet as a ranged touch attack with this bolt of fire. If you hit the foe, the fire bolt deals 1d6 points of fire damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Fire Resistance',
      description:
        'At 6th level, you gain resist fire 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to fire.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const gloryDomain: DomainDocument = {
  id: 'glory',
  name: 'Glory Domain',
  description:
    'You are infused with the glory of the divine, and are a true foe of the undead. In addition, when you channel positive energy to harm undead creatures, the save DC to halve the damage is increased by 2.',
  domainSpells: [
    'shield of faith', // level 1
    'bless weapon', // level 2
    'searing light', // level 3
    'holy smite', // level 4
    'righteous might', // level 5
    'undeath to death', // level 6
    'holy sword', // level 7
    'holy aura', // level 8
    'gate', // level 9
  ],
  powers: [
    {
      name: 'Touch of Glory',
      description:
        'You can cause your hand to shimmer with divine radiance, allowing you to touch a creature as a standard action and give it a bonus equal to your cleric level on a single Charisma-based skill check or Charisma ability check. This ability lasts for 1 hour or until the creature touched elects to apply the bonus to a roll. You can use this ability to grant the bonus a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Divine Presence',
      description:
        'At 8th level, you can emit a 30-foot aura of divine presence for a number of rounds per day equal to your cleric level. All allies within this aura are treated as if under the effects of a sanctuary spell with a DC equal to 10 + 1/2 your cleric level + your Wisdom modifier. These rounds do not need to be consecutive. Activating this ability is a standard action. If an ally leaves the area or makes an attack, the effect ends for that ally. If you make an attack, the effect ends for you and your allies.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const goodDomain: DomainDocument = {
  id: 'good',
  name: 'Good Domain',
  description: 'You have pledged your life and soul to goodness and purity.',
  domainSpells: [
    'protection from evil', // level 1
    'align weapon', // level 2 (good only)
    'magic circle against evil', // level 3
    'holy smite', // level 4
    'dispel evil', // level 5
    'blade barrier', // level 6
    'holy word', // level 7
    'holy aura', // level 8
    'summon monster IX', // level 9 (good spell only)
  ],
  powers: [
    {
      name: 'Touch of Good',
      description:
        'You can touch a creature as a standard action, granting a sacred bonus on attack rolls, skill checks, ability checks, and saving throws equal to half your cleric level (minimum 1) for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Holy Lance',
      description:
        'At 8th level, you can give a weapon you touch the holy special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const healingDomain: DomainDocument = {
  id: 'healing',
  name: 'Healing Domain',
  description: 'Your touch staves off pain and death, and your healing magic is particularly vital and potent.',
  domainSpells: [
    'cure light wounds', // level 1
    'cure moderate wounds', // level 2
    'cure serious wounds', // level 3
    'cure critical wounds', // level 4
    'breath of life', // level 5
    'heal', // level 6
    'regenerate', // level 7
    'cure critical wounds (mass)', // level 8
    'heal (mass)', // level 9
  ],
  powers: [
    {
      name: 'Rebuke Death',
      description:
        'You can touch a living creature as a standard action, healing it for 1d4 points of damage plus 1 for every two cleric levels you possess. You can only use this ability on a creature that is below 0 hit points. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: "Healer's Blessing",
      description:
        'At 6th level, all of your cure spells are treated as if they were empowered, increasing the amount of damage healed by half (+50%). This does not apply to damage dealt to undead with a cure spell. This does not stack with the Empower Spell metamagic feat.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const knowledgeDomain: DomainDocument = {
  id: 'knowledge',
  name: 'Knowledge Domain',
  description: 'You are a scholar and a sage of legends. In addition, you treat all Knowledge skills as class skills.',
  domainSpells: [
    'comprehend languages', // level 1
    'detect thoughts', // level 2
    'speak with dead', // level 3
    'divination', // level 4
    'true seeing', // level 5
    'find the path', // level 6
    'legend lore', // level 7
    'discern location', // level 8
    'foresight', // level 9
  ],
  powers: [
    {
      name: 'Lore Keeper',
      description:
        'You can touch a creature to learn about its abilities and weaknesses. With a successful touch attack, you gain information as if you made the appropriate Knowledge skill check with a result equal to 15 + your cleric level + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Remote Viewing',
      description:
        'Starting at 6th level, you can use clairvoyance/clairaudience at will as a spell-like ability using your cleric level as the caster level. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.',
      levelGained: 6,
    },
  ],
  grantedClassSkills: [
    'Knowledge (arcana)',
    'Knowledge (dungeoneering)',
    'Knowledge (engineering)',
    'Knowledge (geography)',
    'Knowledge (history)',
    'Knowledge (local)',
    'Knowledge (nature)',
    'Knowledge (nobility)',
    'Knowledge (planes)',
    'Knowledge (religion)',
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lawDomain: DomainDocument = {
  id: 'law',
  name: 'Law Domain',
  description: 'You follow a strict and ordered code of laws, and in so doing, achieve enlightenment.',
  domainSpells: [
    'protection from chaos', // level 1
    'align weapon', // level 2 (law only)
    'magic circle against chaos', // level 3
    "order's wrath", // level 4
    'dispel chaos', // level 5
    'hold monster', // level 6
    'dictum', // level 7
    'shield of law', // level 8
    'summon monster IX', // level 9 (law spell only)
  ],
  powers: [
    {
      name: 'Touch of Law',
      description:
        'You can touch a willing creature as a standard action, infusing it with the power of divine order and allowing it to treat all attack rolls, skill checks, ability checks, and saving throws for 1 round as if the natural d20 roll resulted in an 11. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Staff of Order',
      description:
        'At 8th level, you can give a weapon touched the axiomatic special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const liberationDomain: DomainDocument = {
  id: 'liberation',
  name: 'Liberation Domain',
  description: 'You are a spirit of freedom and a staunch foe against all who would enslave and oppress.',
  domainSpells: [
    'remove fear', // level 1
    'remove paralysis', // level 2
    'remove curse', // level 3
    'freedom of movement', // level 4
    'break enchantment', // level 5
    'greater dispel magic', // level 6
    'refuge', // level 7
    'mind blank', // level 8
    'freedom', // level 9
  ],
  powers: [
    {
      name: 'Liberation',
      description:
        'You have the ability to ignore impediments to your mobility. For a number of rounds per day equal to your cleric level, you can move normally regardless of magical effects that impede movement, as if you were affected by freedom of movement. This effect occurs automatically as soon as it applies. These rounds do not need to be consecutive.',
      levelGained: 1,
    },
    {
      name: "Freedom's Call",
      description:
        "At 8th level, you can emit a 30-foot aura of freedom for a number of rounds per day equal to your cleric level. Allies within this aura are not affected by the confused, grappled, frightened, panicked, paralyzed, pinned, or shaken conditions. This aura only suppresses these effects, and they return once a creature leaves the aura or when the aura ends, if applicable. These rounds do not need to be consecutive.",
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const luckDomain: DomainDocument = {
  id: 'luck',
  name: 'Luck Domain',
  description: 'You are infused with luck, and your mere presence can spread good fortune.',
  domainSpells: [
    'true strike', // level 1
    'aid', // level 2
    'protection from energy', // level 3
    'freedom of movement', // level 4
    'break enchantment', // level 5
    'mislead', // level 6
    'spell turning', // level 7
    'moment of prescience', // level 8
    'miracle', // level 9
  ],
  powers: [
    {
      name: 'Bit of Luck',
      description:
        'You can touch a willing creature as a standard action, giving it a bit of luck. For the next round, any time the target rolls a d20, he may roll twice and take the more favorable result. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Good Fortune',
      description:
        'At 6th level, as an immediate action, you can reroll any one d20 roll you have just made before the results of the roll are revealed. You must take the result of the reroll, even if it\'s worse than the original roll. You can use this ability once per day at 6th level, and one additional time per day for every six cleric levels beyond 6th.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const madnessDomain: DomainDocument = {
  id: 'madness',
  name: 'Madness Domain',
  description:
    'You embrace the madness that lurks deep in your heart, and can unleash it to drive your foes insane or to sacrifice certain abilities to hone others.',
  domainSpells: [
    'lesser confusion', // level 1
    'touch of idiocy', // level 2
    'rage', // level 3
    'confusion', // level 4
    'nightmare', // level 5
    'phantasmal killer', // level 6
    'insanity', // level 7
    'scintillating pattern', // level 8
    'weird', // level 9
  ],
  powers: [
    {
      name: 'Vision of Madness',
      description:
        'You can give a creature a vision of madness as a melee touch attack. Choose one of the following: attack rolls, saving throws, or skill checks. The target receives a bonus to the chosen rolls equal to 1/2 your cleric level (minimum +1) and a penalty to the other two types of rolls equal to 1/2 your cleric level (minimum –1). This effect fades after 3 rounds. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Madness',
      description:
        'At 8th level, you can emit a 30-foot aura of madness for a number of rounds per day equal to your cleric level. Enemies within this aura are affected by confusion unless they make a Will save with a DC equal to 10 + 1/2 your cleric level + your Wisdom modifier.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const magicDomain: DomainDocument = {
  id: 'magic',
  name: 'Magic Domain',
  description: 'You are a true student of all things mystical, and see divinity in the purity of magic.',
  domainSpells: [
    'identify', // level 1
    'magic mouth', // level 2
    'dispel magic', // level 3
    'imbue with spell ability', // level 4
    'spell resistance', // level 5
    'antimagic field', // level 6
    'spell turning', // level 7
    'protection from spells', // level 8
    "mage's disjunction", // level 9
  ],
  powers: [
    {
      name: 'Hand of the Acolyte',
      description:
        'You can cause your melee weapon to fly from your grasp and strike a foe before instantly returning. As a standard action, you can make a single attack using a melee weapon at a range of 30 feet. This attack is treated as a ranged attack with a thrown weapon, except that you add your Wisdom modifier to the attack roll instead of your Dexterity modifier (damage still relies on Strength). This ability cannot be used to perform a combat maneuver. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Dispelling Touch',
      description:
        'At 8th level, you can use a targeted dispel magic effect as a melee touch attack. You can use this ability once per day at 8th level and one additional time per day for every four cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Batch Array ----

export const batch_003: DomainDocument[] = [
  earthMetalSubdomain,
  earthPetrificationSubdomain,
  earthRadiationSubdomain,
  evilCannibalismSubdomain,
  evilCorruptionSubdomain,
  evilDaemonSubdomain,
  evilDemodandSubdomain,
  evilDemonSubdomain,
  evilDevilSubdomain,
  evilFearSubdomain,
  evilKytonSubdomain,
  evilPlagueSubdomain,
  fireArsonSubdomain,
  fireAshSubdomain,
  fireSmokeSubdomain,
  evilDomain,
  fireDomain,
  gloryDomain,
  goodDomain,
  healingDomain,
  knowledgeDomain,
  lawDomain,
  liberationDomain,
  luckDomain,
  madnessDomain,
  magicDomain,
];
