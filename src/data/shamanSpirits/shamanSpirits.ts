// Shaman Spirits | All 17 spirits
// Sources: Advanced Class Guide (pf1e-acg) × 16, Wilderness Origins (pf1e-ppc-wo) × 1,
//          Horror Realms (pf1e-horror-realms) × 1
// count: 17

import type { ShamanSpiritEntry } from '@/types/classOptions';

export const shamanSpirits: ShamanSpiritEntry[] = [
  // ── ANCESTORS ────────────────────────────────────────────────────────────────
  {
    id: 'spirit-ancestors',
    name: 'Ancestors',
    description:
      'The shaman calls upon the spirits of those who came before, drawing on their wisdom, power, and experience.',
    spiritSpells: [
      'unseen servant',
      'spiritual weapon',
      'heroism',
      'spiritual ally',
      'telekinesis',
      'greater heroism',
      'ethereal jaunt',
      'vision',
      'astral projection',
    ],
    hexList: [
      'hex-ancestral-blessing',
      'hex-ghost-blade',
      'hex-intercessor',
      'hex-might-of-the-fallen',
      'hex-wisdom-of-the-ages',
    ],
    abilities: {
      spirit: {
        name: "Ancestor's Council",
        type: 'Su',
        description:
          "As a standard action, the shaman can call upon her ancestors to provide advice and assistance to one ally within 30 feet. The ally gains a +2 insight bonus on one of the following: attack rolls, saving throws, ability checks, or skill checks. This bonus applies to the next roll the ally makes before the beginning of the shaman's next turn. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'bonus',
            bonusType: 'insight',
            target: 'attack.all',
            value: 2,
            source: 'spirit-ancestors',
          },
        ],
      },
      greater: {
        name: 'Ancestral Weapon',
        type: 'Su',
        description:
          "The shaman can summon an appropriately sized simple or martial weapon with a +1 enhancement bonus from her family's history as a standard action. The shaman is always considered proficient with this weapon. The enhancement bonus increases to +2 at 11th level, +3 at 15th level, and +4 at 19th level. At 11th level the weapon also gains the ghost touch weapon special ability. The weapon can be used for a number of minutes per day equal to the shaman's level. This duration does not need to be consecutive, but it must be used in 1-minute increments. The weapon disappears 1 round after leaving the shaman's grasp.",
        effects: [
          {
            type: 'special',
            bonusType: 'enhancement',
            target: 'special.ancestral_weapon',
            value: 1,
            source: 'spirit-ancestors',
          },
        ],
      },
      true: {
        name: 'Ancestral Guardian',
        type: 'Su',
        description:
          'Once per day, the shaman can call on the ancient allies of her ancestors to physically appear and assist her. This functions as the planar ally spell, except the shaman does not need to pay any of the casting cost. The called creature still requires its normal payment for services.',
        uses: {
          perDay: 1,
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.planar_ally',
            value: 0,
            source: 'spirit-ancestors',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Ancestors)',
        type: 'Su',
        description:
          "The shaman gains a bonus on Will saving throws equal to her Charisma modifier, blindsense to a range of 60 feet, and a +4 bonus to her caster level on divination spells. She can also cast astral projection once per day as a spell-like ability, without requiring material components.",
        effects: [
          {
            type: 'bonus',
            bonusType: 'untyped',
            target: 'save.will',
            value: 0,
            source: 'spirit-ancestors',
          },
          {
            type: 'grant_sense',
            bonusType: 'untyped',
            target: 'blindsense',
            value: 60,
            source: 'spirit-ancestors',
          },
          {
            type: 'bonus',
            bonusType: 'untyped',
            target: 'spell.caster_level',
            value: 4,
            source: 'spirit-ancestors',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── BATTLE ────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-battle',
    name: 'Battle',
    description:
      'The shaman channels the spirit of war itself, bolstering allies in combat and embodying the ferocity of battle.',
    spiritSpells: [
      'enlarge person',
      'fog cloud',
      'magic vestment',
      'wall of fire',
      'righteous might',
      "mass bull's strength",
      'control weather',
      'earthquake',
      'storm of vengeance',
    ],
    hexList: [
      'hex-battle-master',
      'hex-battle-ward',
      'hex-curse-of-suffering',
      'hex-eyes-of-battle',
      'hex-hampering-hex',
    ],
    abilities: {
      spirit: {
        name: 'War Spirit',
        type: 'Su',
        description:
          "A shaman surrounds herself with the spirit of battle. Allies within 30 feet of the shaman (including the shaman) receive a +1 morale bonus on attack rolls and weapon damage rolls. This bonus increases by 1 at 8th level and again at 16th level. The shaman can use this ability for a number of rounds per day equal to 3 plus her Charisma modifier. These rounds need not be consecutive.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'bonus',
            bonusType: 'morale',
            target: 'attack.all',
            value: 1,
            source: 'spirit-battle',
          },
          {
            type: 'bonus',
            bonusType: 'morale',
            target: 'damage.all',
            value: 1,
            source: 'spirit-battle',
          },
        ],
      },
      greater: {
        name: "Enemies' Bane",
        type: 'Su',
        description:
          "As a swift action, the shaman can imbue a weapon she is wielding with the bane special ability. She must choose a creature type (and subtype if applicable) for this ability to work against when she uses it. If the weapon already has the bane ability against the same type of creature, the bonus damage it deals increases to 4d6 instead of 2d6. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.weapon_bane',
            value: 0,
            source: 'spirit-battle',
          },
        ],
      },
      true: {
        name: 'Paragon of Battle',
        type: 'Su',
        description:
          "As a standard action, the shaman transforms herself into a paragon of battle, combining the effects of enlarge person and deadly juggernaut. This ability lasts 1 minute or until the shaman dismisses it as a free action. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.enlarge_deadly_juggernaut',
            value: 0,
            source: 'spirit-battle',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Battle)',
        type: 'Su',
        description:
          "The shaman becomes the embodiment of battle. As a full-round action, she can make a full attack while moving up to her speed. Critical hits she makes ignore damage reduction. She gains a +4 insight bonus to AC when opponents confirm critical hits against her. She does not die until her negative hit points equal or exceed twice her Constitution score.",
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.full_attack_with_move',
            value: 0,
            source: 'spirit-battle',
          },
          {
            type: 'bonus',
            bonusType: 'insight',
            target: 'ac',
            value: 4,
            source: 'spirit-battle',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── BONES ─────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-bones',
    name: 'Bones',
    description:
      'The shaman communes with the spirit of death and the undead, wielding negative energy and the power of the grave.',
    spiritSpells: [
      'cause fear',
      'false life',
      'animate dead',
      'fear',
      'slay living',
      'circle of death',
      'control undead',
      'horrid wilting',
      'wail of the banshee',
    ],
    hexList: [
      'hex-bone-lock',
      'hex-bone-ward',
      'hex-deathly-being',
      'hex-fearful-gaze',
      'hex-grave-sight',
    ],
    abilities: {
      spirit: {
        name: 'Touch of the Grave',
        type: 'Su',
        description:
          "As a standard action, the shaman can make a melee touch attack infused with negative energy that deals 1d4 points of damage + 1 point for every 2 shaman levels she possesses. Alternatively, the shaman can use this ability to heal undead creatures, dealing the same amount as hit points restored. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier. At 11th level, any weapon the shaman wields is treated as an unholy weapon.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.touch_of_the_grave',
            value: 0,
            source: 'spirit-bones',
          },
        ],
      },
      greater: {
        name: 'Shard Soul',
        type: 'Su',
        description:
          "The shaman gains DR 3/magic. This bonus improves by 1 for every 4 levels beyond 8th. As a standard action, jagged pieces of bone explode from her body in a 10-foot-radius burst, dealing 1d6 points of piercing damage per 2 shaman levels to each creature in the area (Reflex half). The shaman can use this burst ability three times per day, but must wait at least 1d4 rounds between each use.",
        uses: {
          perDay: 3,
          current: 0,
        },
        effects: [
          {
            type: 'resistance',
            bonusType: 'untyped',
            target: 'dr',
            value: 3,
            source: 'spirit-bones',
          },
        ],
      },
      true: {
        name: 'Shedding Form',
        type: 'Su',
        description:
          "As a standard action, the shaman assumes an incorporeal state, as if using blink, except that she can choose to have all of her weapon attacks gain the ghost touch property during this time. The shaman can remain in this state for a number of rounds per day equal to her shaman level. This duration does not need to be consecutive.",
        uses: {
          formula: 'shaman level (rounds)',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.incorporeal_ghost_touch',
            value: 0,
            source: 'spirit-bones',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Bones)',
        type: 'Su',
        description:
          "The shaman becomes the spirit of death. Once per round, she can cast bleed or stabilize as a free action. When she is reduced to 0 or fewer hit points, she automatically stabilizes. She can cast animate dead at will as a spell-like ability without requiring any material components, though the normal limits on Hit Dice still apply. Once per day, she can cast power word kill as a spell-like ability targeting any creature with 150 or fewer hit points.",
        uses: {
          formula: 'power word kill 1/day',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.animate_dead_at_will',
            value: 0,
            source: 'spirit-bones',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.auto_stabilize',
            value: 0,
            source: 'spirit-bones',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── FLAME ─────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-flame',
    name: 'Flame',
    description:
      'The shaman channels the fierce and consuming spirit of fire, wielding flame as both weapon and shield.',
    spiritSpells: [
      'burning hands',
      'resist energy',
      'fireball',
      'wall of fire',
      'summon monster v',
      'fire seeds',
      'fire storm',
      'incendiary cloud',
      'fiery body',
    ],
    hexList: [
      'hex-cinder-dance',
      'hex-fire-nimbus',
      'hex-flame-curse',
      'hex-gaze-of-flames',
      'hex-ward-of-flames',
    ],
    abilities: {
      spirit: {
        name: 'Touch of Flames',
        type: 'Su',
        description:
          "As a standard action, the shaman can make a melee touch attack that deals 1d6 points of fire damage + 1 point for every 2 shaman levels she possesses. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier. At 11th level, any weapon the shaman wields is treated as a flaming weapon.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.touch_of_flames',
            value: 0,
            source: 'spirit-flame',
          },
        ],
      },
      greater: {
        name: 'Fiery Soul',
        type: 'Su',
        description:
          "The shaman gains fire resistance 10. As a standard action, she can unleash a 15-foot cone of flame that deals 1d4 points of fire damage per shaman level to each creature in the area (Reflex half). The shaman can use this cone ability three times per day, but must wait at least 1d4 rounds between each use.",
        uses: {
          perDay: 3,
          current: 0,
        },
        effects: [
          {
            type: 'resistance',
            bonusType: 'untyped',
            target: 'energy_resistance.fire',
            value: 10,
            source: 'spirit-flame',
          },
        ],
      },
      true: {
        name: 'Elemental Form',
        type: 'Su',
        description:
          "Once per day as a standard action, the shaman can transform her body into that of a Huge fire elemental, as if using elemental body IV, but only in the fire elemental form. This ability lasts for 1 hour per shaman level.",
        uses: {
          perDay: 1,
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.elemental_body_iv_fire',
            value: 0,
            source: 'spirit-flame',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Flame)',
        type: 'Su',
        description:
          "The shaman gains fire resistance 30. She can apply the Enlarge Spell, Extend Spell, Silent Spell, or Still Spell feat to any spell with the fire descriptor that she casts without increasing the spell's level or casting time, even if she does not possess those feats.",
        effects: [
          {
            type: 'resistance',
            bonusType: 'untyped',
            target: 'energy_resistance.fire',
            value: 30,
            source: 'spirit-flame',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.metamagic_fire_spells_free',
            value: 0,
            source: 'spirit-flame',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── FROST ─────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-frost',
    name: 'Frost',
    description:
      'The shaman draws upon the numbing cold of winter and the frozen north, wielding ice and frost as weapons.',
    spiritSpells: [
      'frostbite',
      'elemental touch',
      'elemental aura',
      'ice storm',
      'summon monster v',
      'freezing sphere',
      'ice body',
      'polar ray',
      'mass icy prison',
    ],
    hexList: [
      'hex-biting-frost',
      'hex-hypothermia',
      'hex-sluggish',
      'hex-tundra-dweller',
      'hex-wilds-attuned',
    ],
    abilities: {
      spirit: {
        name: 'Ice Splinter',
        type: 'Su',
        description:
          "As a standard action, the shaman can shoot razor-sharp icicles at an enemy within 30 feet as a ranged touch attack. This attack deals 1d6 points of piercing damage + 1 point for every 2 shaman levels she possesses. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier. At 11th level, any weapon the shaman wields is treated as a frost weapon.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.ice_splinter_ranged_touch',
            value: 0,
            source: 'spirit-frost',
          },
        ],
      },
      greater: {
        name: 'Frigid Blast',
        type: 'Su',
        description:
          "The shaman gains cold resistance 10. As a standard action, the shaman can summon an icy blast in a 20-foot-radius burst originating from a point she can see within 30 feet. Each creature caught in this burst takes cold damage equal to 1d6 per shaman level (Reflex half). The shaman can use this ability three times per day, but must wait at least 1d4 rounds between each use.",
        uses: {
          perDay: 3,
          current: 0,
        },
        effects: [
          {
            type: 'resistance',
            bonusType: 'untyped',
            target: 'energy_resistance.cold',
            value: 10,
            source: 'spirit-frost',
          },
        ],
      },
      true: {
        name: 'Guardian of the North',
        type: 'Su',
        description:
          "As a standard action, the shaman assumes the form, as beast shape IV, of one of the following animals: dire bear, dire tiger, mastodon, or woolly rhinoceros. This transformation lasts for 1 hour per shaman level. The shaman can use this ability once per day.",
        uses: {
          perDay: 1,
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.beast_shape_iv_cold_animals',
            value: 0,
            source: 'spirit-frost',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Frost)',
        type: 'Su',
        description:
          "The shaman gains immunity to cold. She can apply the Enlarge Spell, Extend Spell, Silent Spell, or Still Spell feat to any spell with the cold descriptor that she casts without increasing the spell's level or casting time, even if she does not possess those feats.",
        effects: [
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'cold',
            value: 0,
            source: 'spirit-frost',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.metamagic_cold_spells_free',
            value: 0,
            source: 'spirit-frost',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── HEAVENS ───────────────────────────────────────────────────────────────────
  {
    id: 'spirit-heavens',
    name: 'Heavens',
    description:
      'The shaman communes with the spirits of the sky and cosmos, wielding starlight, color, and the vast void between worlds.',
    spiritSpells: [
      'color spray',
      'hypnotic pattern',
      'daylight',
      'rainbow pattern',
      'overland flight',
      'chain lightning',
      'prismatic spray',
      'sunburst',
      'meteor swarm',
    ],
    hexList: [
      'hex-enveloping-void',
      'hex-guiding-star',
      'hex-heavens-leap',
      'hex-lure-of-the-heavens',
      'hex-starburn',
    ],
    abilities: {
      spirit: {
        name: 'Stardust',
        type: 'Su',
        description:
          "As a standard action, the shaman can cause stardust to materialize around one creature within 30 feet of her. The creature sheds light like a candle, negating any benefit from concealment or invisibility. The creature also takes a penalty on attack rolls and Perception checks equal to 1 + 1 per 4 shaman levels (maximum penalty of -6). The stardust lasts for a number of rounds equal to half the shaman's level (minimum 1). The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'penalty',
            bonusType: 'untyped',
            target: 'attack.all',
            value: -1,
            source: 'spirit-heavens',
          },
          {
            type: 'penalty',
            bonusType: 'untyped',
            target: 'skill.perception',
            value: -1,
            source: 'spirit-heavens',
          },
        ],
      },
      greater: {
        name: 'Void Adaptation',
        type: 'Su',
        description:
          "The shaman gains darkvision to a range of 60 feet. If she already has darkvision, its range increases by 30 feet. She also gains the ability to see in supernatural darkness, the constant effects of endure elements, and she no longer needs to breathe.",
        effects: [
          {
            type: 'grant_sense',
            bonusType: 'untyped',
            target: 'darkvision',
            value: 60,
            source: 'spirit-heavens',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.see_supernatural_darkness',
            value: 0,
            source: 'spirit-heavens',
          },
        ],
      },
      true: {
        name: 'Phantasmagoric Display',
        type: 'Su',
        description:
          "Once per day, the shaman can cast prismatic wall and prismatic spray as spell-like abilities. Her caster level for these abilities equals her shaman level.",
        uses: {
          perDay: 1,
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.prismatic_wall_spray_sla',
            value: 0,
            source: 'spirit-heavens',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Heavens)',
        type: 'Su',
        description:
          "The shaman becomes the spirit of heaven. She gains a bonus on saving throws equal to her Wisdom modifier. She automatically stabilizes when below 0 hit points. She is immune to fear effects. She automatically confirms all critical hits. If she is slain, she is reincarnated as a star child over 7 days and returns to life as per true resurrection.",
        effects: [
          {
            type: 'bonus',
            bonusType: 'untyped',
            target: 'save.all',
            value: 0,
            source: 'spirit-heavens',
          },
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'fear',
            value: 0,
            source: 'spirit-heavens',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.auto_stabilize',
            value: 0,
            source: 'spirit-heavens',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── LIFE ──────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-life',
    name: 'Life',
    description:
      'The shaman channels the very essence of life itself, wielding positive energy to heal allies and sustain the living.',
    spiritSpells: [
      'detect undead',
      'lesser restoration',
      'neutralize poison',
      'restoration',
      'breath of life',
      'heal',
      'greater restoration',
      'mass heal',
      'true resurrection',
    ],
    hexList: [
      'hex-curse-of-suffering',
      'hex-deny-succor',
      'hex-enhanced-cures',
      'hex-life-link',
      'hex-life-sight',
    ],
    abilities: {
      spirit: {
        name: 'Channel',
        type: 'Su',
        description:
          "The shaman can channel positive energy like a cleric, using her shaman level as her effective cleric level when determining the amount of damage healed or dealt and the DC of the saving throw. The shaman can use this ability a number of times per day equal to 1 plus her Charisma modifier.",
        uses: {
          formula: '1 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.channel_positive_energy',
            value: 0,
            source: 'spirit-life',
          },
        ],
      },
      greater: {
        name: "Healer's Touch",
        type: 'Su',
        description:
          "The shaman gains a +4 competence bonus on Heal checks. As a standard action, the shaman can move up to half her speed and automatically stabilize any dying creature she passes adjacent to, up to a maximum of six creatures at once.",
        effects: [
          {
            type: 'bonus',
            bonusType: 'competence',
            target: 'skill.heal',
            value: 4,
            source: 'spirit-life',
          },
        ],
      },
      true: {
        name: 'Quick Healing',
        type: 'Su',
        description:
          "The shaman can channel positive energy or cast a cure spell as a swift action. She can use this ability a number of times per day equal to her Charisma modifier.",
        uses: {
          formula: 'Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.swift_channel_or_cure',
            value: 0,
            source: 'spirit-life',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Life)',
        type: 'Su',
        description:
          "The shaman gains immunity to bleed damage, death attacks, and negative energy. She is also immune to the exhausted, fatigued, nauseated, and sickened conditions. Ability damage cannot reduce any of her ability scores below 1. She automatically succeeds at Fortitude saves against massive damage. She does not die until her negative hit points equal or exceed twice her Constitution score.",
        effects: [
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'bleed',
            value: 0,
            source: 'spirit-life',
          },
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'death_effects',
            value: 0,
            source: 'spirit-life',
          },
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'exhaustion',
            value: 0,
            source: 'spirit-life',
          },
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'fatigue',
            value: 0,
            source: 'spirit-life',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── LORE ──────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-lore',
    name: 'Lore',
    description:
      'The shaman draws upon ancient knowledge and forgotten secrets, gaining access to vast stores of information and the ability to unravel mysteries.',
    spiritSpells: [
      'identify',
      'tongues',
      'locate object',
      'legend lore',
      'contact other plane',
      "mass owl's wisdom",
      'vision',
      'moment of prescience',
      'time stop',
    ],
    hexList: [
      'hex-arcane-enlightenment',
      'hex-benefit-of-wisdom',
      'hex-brain-drain',
      'hex-confusion-curse',
      'hex-share-knowledge',
    ],
    abilities: {
      spirit: {
        name: 'Monstrous Insight',
        type: 'Su',
        description:
          "As a standard action, the shaman can attempt a Knowledge check to identify a creature within 30 feet. She gains an insight bonus on this check equal to her shaman level. If she succeeds, she also gains a +2 insight bonus on attack rolls made against that creature and a +2 insight bonus to AC against attacks made by that creature. These bonuses last for 1 minute. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'bonus',
            bonusType: 'insight',
            target: 'attack.all',
            value: 2,
            source: 'spirit-lore',
          },
          {
            type: 'bonus',
            bonusType: 'insight',
            target: 'ac',
            value: 2,
            source: 'spirit-lore',
          },
        ],
      },
      greater: {
        name: 'Automatic Writing',
        type: 'Su',
        description:
          "Once per day, the shaman can spend 10 minutes in uninterrupted meditation to tap into the lore of the spirit world. At the end of this time, she receives information as if she had cast divination with 90% effectiveness. She gains one additional use of this ability per day at 12th, 16th, and 20th level.",
        uses: {
          perDay: 1,
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.divination_90pct',
            value: 0,
            source: 'spirit-lore',
          },
        ],
      },
      true: {
        name: 'Perfect Knowledge',
        type: 'Ex',
        description:
          "The shaman gains the permanent effects of tongues. She also gains a +10 competence bonus on all Knowledge, Linguistics, and Spellcraft checks.",
        effects: [
          {
            type: 'bonus',
            bonusType: 'competence',
            target: 'skill.linguistics',
            value: 10,
            source: 'spirit-lore',
          },
          {
            type: 'bonus',
            bonusType: 'competence',
            target: 'skill.spellcraft',
            value: 10,
            source: 'spirit-lore',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.bonus_all_knowledge_10',
            value: 0,
            source: 'spirit-lore',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Lore)',
        type: 'Su',
        description:
          "The shaman can always take 20 on Knowledge checks, even those she is not trained in. Once per day, she can cast wish as a spell-like ability without the need for any material components, though the wish cannot be used to grant ability score bonuses or to replicate spells with costly material components.",
        uses: {
          formula: 'wish 1/day',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.take_20_knowledge',
            value: 0,
            source: 'spirit-lore',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.wish_sla_1_per_day',
            value: 0,
            source: 'spirit-lore',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── MAMMOTH ───────────────────────────────────────────────────────────────────
  {
    id: 'spirit-mammoth',
    name: 'Mammoth',
    description:
      'The shaman channels the power of the great beasts of the ancient world, gaining tremendous physical might and the ability to transform into primordial megafauna.',
    spiritSpells: [
      'enlarge person',
      "bull's strength",
      'rage',
      'stoneskin',
      'beast shape iii',
      'tar pool',
      "summon nature's ally vii",
      'frightful aspect',
      'polar midnight',
    ],
    hexList: [
      'hex-burden-of-the-beast',
      'hex-mammoths-hide',
      'hex-phantom-stampede',
      'hex-primal-speaker',
      'hex-thunder-foot',
    ],
    abilities: {
      spirit: {
        name: 'Powerful Smash',
        type: 'Su',
        description:
          "As a standard action, the shaman can make an unarmed strike (and is treated as if she has Improved Unarmed Strike for this purpose). A creature struck must succeed at a Fortitude saving throw (DC 10 + half her shaman level + her Charisma modifier) or become dazed for 1 round. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.unarmed_daze',
            value: 0,
            source: 'spirit-mammoth',
          },
        ],
      },
      greater: {
        name: 'Strength of the Beast',
        type: 'Su',
        description:
          "The shaman gains a +2 enhancement bonus to her Strength score. This bonus increases by an additional +2 for every 6 shaman levels beyond 8th (to +4 at 14th level and +6 at 20th level).",
        effects: [
          {
            type: 'bonus',
            bonusType: 'enhancement',
            target: 'ability.str',
            value: 2,
            source: 'spirit-mammoth',
          },
        ],
      },
      true: {
        name: 'Megafauna Companion',
        type: 'Su',
        description:
          "The shaman's spirit animal transforms into a megafauna animal companion, using her shaman level as her effective druid level. She can choose from any of the following: arsinoitherium, baluchitherium, brontotherium, chalicotherium, deinotherium, elasmotherium, glyptodon, mastodon, megaloceros, megatherium, or uintatherium. The spirit animal retains its Intelligence score and spirit animal bonuses while also gaining all the statistics and abilities of the chosen animal companion.",
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.megafauna_companion',
            value: 0,
            source: 'spirit-mammoth',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Mammoth)',
        type: 'Su',
        description:
          "The shaman can permanently transform into any animal from the megafauna or elephant categories using beast shape IV rules. She can activate and dismiss this transformation at will, and the duration is permanent until dismissed.",
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.beast_shape_iv_at_will',
            value: 0,
            source: 'spirit-mammoth',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── NATURE ────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-nature',
    name: 'Nature',
    description:
      'The shaman draws power from the natural world and the spirits that dwell within it, commanding animals, plants, and the forces of weather.',
    spiritSpells: [
      'charm animal',
      'barkskin',
      'speak with plants',
      'grove of respite',
      'awaken',
      'stone tell',
      'creeping doom',
      'animal shapes',
      'world wave',
    ],
    hexList: [
      'hex-entangling-curse',
      'hex-erosion-curse',
      'hex-friend-to-animals',
      'hex-speak-with-animals',
      'hex-stormwalker',
    ],
    abilities: {
      spirit: {
        name: 'Storm Burst',
        type: 'Su',
        description:
          "As a standard action, the shaman can create a small swirling storm of wind and rain around a target within 30 feet. This causes the target to suffer a 20% miss chance on all attacks it makes for 1 round, plus 1 additional round for every 4 shaman levels she possesses. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier. At 11th level, any weapon the shaman wields is treated as a thundering weapon.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.storm_burst_miss_chance',
            value: 20,
            source: 'spirit-nature',
          },
        ],
      },
      greater: {
        name: 'Spirit of Nature',
        type: 'Su',
        description:
          "Whenever the shaman is reduced to 0 or fewer hit points, she automatically stabilizes and gains fast healing 1 for 1d4 rounds. At 15th level, this fast healing increases to 3.",
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.auto_stabilize_fast_healing',
            value: 0,
            source: 'spirit-nature',
          },
        ],
      },
      true: {
        name: 'Companion Animal',
        type: 'Su',
        description:
          "The shaman's spirit animal transforms into an animal companion, as a druid's animal companion, using her shaman level as her effective druid level.",
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.spirit_animal_companion',
            value: 0,
            source: 'spirit-nature',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Nature)',
        type: 'Su',
        description:
          "The shaman takes on the aspect of nature. She forms a protective cocoon and, after a brief transformation, emerges with the traits of a plant, animal, or humanoid type of her choosing. She gains superficial physical characteristics of the chosen type while retaining all of her class features and abilities.",
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.nature_type_aspect',
            value: 0,
            source: 'spirit-nature',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── SLUMS ─────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-slums',
    name: 'Slums',
    description:
      'The shaman draws power from the teeming spirit of civilization in its most primal form — the desperate, cunning survival of the urban poor.',
    spiritSpells: [
      'charm person',
      'summon swarm',
      'hold person',
      'confusion',
      'wall of stone',
      'mislead',
      'mass hold person',
      'maze',
      'imprisonment',
    ],
    hexList: [
      'hex-accident',
      'hex-bad-penny',
      'hex-city-spirit',
      'hex-ward-of-the-city',
    ],
    abilities: {
      spirit: {
        name: 'Doors to Everywhere',
        type: 'Su',
        description:
          "As a standard action, the shaman can step through one door and emerge from another distant door. This functions as jester's jaunt at 1st level, dimension door at 9th level, and tree stride (using doors as if they were trees) at 14th level. The shaman can use this ability three times per day, plus one additional time per day at 12th and 20th levels.",
        uses: {
          formula: '3/day (+1 at 12th and 20th)',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.door_teleportation',
            value: 0,
            source: 'spirit-slums',
          },
        ],
      },
      greater: {
        name: "City's Shroud",
        type: 'Su',
        description:
          "While in an urban environment, the shaman gains the evasion and improved uncanny dodge class features.",
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.evasion_urban',
            value: 0,
            source: 'spirit-slums',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.improved_uncanny_dodge_urban',
            value: 0,
            source: 'spirit-slums',
          },
        ],
      },
      true: {
        name: 'Paragon of the City',
        type: 'Su',
        description:
          "As a standard action, the shaman assumes a spirit form that grants her sneak attack as a rogue of equivalent level for 1 minute. She can use this ability a number of times per day equal to 3 plus her Charisma modifier.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'bonus',
            bonusType: 'untyped',
            target: 'sneak_attack',
            value: 0,
            source: 'spirit-slums',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Slums)',
        type: 'Su',
        description:
          "The shaman becomes immune to disease and poison. While in an urban environment, she gains a +4 insight bonus to AC and on Reflex saving throws.",
        effects: [
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'disease',
            value: 0,
            source: 'spirit-slums',
          },
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'poison',
            value: 0,
            source: 'spirit-slums',
          },
          {
            type: 'bonus',
            bonusType: 'insight',
            target: 'ac',
            value: 4,
            source: 'spirit-slums',
          },
          {
            type: 'bonus',
            bonusType: 'insight',
            target: 'save.reflex',
            value: 4,
            source: 'spirit-slums',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── STONE ─────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-stone',
    name: 'Stone',
    description:
      'The shaman channels the enduring and unyielding spirit of earth and stone, wielding acid and the strength of the earth itself.',
    spiritSpells: [
      'magic stone',
      'stone call',
      'meld into stone',
      'wall of stone',
      'stoneskin',
      'stone tell',
      'statue',
      'repel metal or stone',
      'clashing rocks',
    ],
    hexList: [
      'hex-crystal-sight',
      'hex-lodestone',
      'hex-metal-curse',
      'hex-stone-stability',
      'hex-ward-of-stone',
    ],
    abilities: {
      spirit: {
        name: 'Touch of Acid',
        type: 'Su',
        description:
          "As a standard action, the shaman can make a melee touch attack that deals 1d6 points of acid damage + 1 point for every 2 shaman levels she possesses. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier. At 11th level, any weapon the shaman wields is treated as a corrosive weapon.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.touch_of_acid',
            value: 0,
            source: 'spirit-stone',
          },
        ],
      },
      greater: {
        name: 'Body of Earth',
        type: 'Su',
        description:
          "The shaman gains DR 2/adamantine. This bonus improves by 1 for every 4 shaman levels beyond 8th. As a standard action, jagged pieces of stone explode from her body in a 10-foot-radius burst, dealing 1d6 points of piercing damage per 2 shaman levels to each creature in the area (Reflex half). The shaman can use this burst ability three times per day, but must wait at least 1d4 rounds between each use.",
        uses: {
          perDay: 3,
          current: 0,
        },
        effects: [
          {
            type: 'resistance',
            bonusType: 'untyped',
            target: 'dr',
            value: 2,
            source: 'spirit-stone',
          },
        ],
      },
      true: {
        name: 'Elemental Form',
        type: 'Su',
        description:
          "Once per day as a standard action, the shaman can transform her body into that of a Huge earth elemental, as if using elemental body IV, but only in the earth elemental form. This ability lasts for 1 hour per shaman level.",
        uses: {
          perDay: 1,
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.elemental_body_iv_earth',
            value: 0,
            source: 'spirit-stone',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Stone)',
        type: 'Su',
        description:
          "The shaman gains acid resistance 30. She can apply the Enlarge Spell, Extend Spell, Silent Spell, or Still Spell feat to any spell with the acid descriptor or any spell that creates, moves, or manipulates earth or stone that she casts without increasing the spell's level or casting time, even if she does not possess those feats.",
        effects: [
          {
            type: 'resistance',
            bonusType: 'untyped',
            target: 'energy_resistance.acid',
            value: 30,
            source: 'spirit-stone',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.metamagic_acid_earth_spells_free',
            value: 0,
            source: 'spirit-stone',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── TRIBE ─────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-tribe',
    name: 'Tribe',
    description:
      'The shaman embodies the spirit of community and shared purpose, strengthening bonds between allies and protecting the group above all else.',
    spiritSpells: [
      'bless',
      'shield other',
      'create food and water',
      'spiritual ally',
      'life bubble',
      'battlemind link',
      'vision',
      'discern location',
      'mass heal',
    ],
    hexList: [
      'hex-curse-of-faltering',
      'hex-curse-of-isolation',
      'hex-steadfast-example',
      'hex-threatening-coordination',
      'hex-touch-of-succor',
    ],
    abilities: {
      spirit: {
        name: 'Tribal Cooperation',
        type: 'Su',
        description:
          "The shaman gains a bonus teamwork feat. As a standard action, she can grant one of her teamwork feats to all allies within 30 feet for a number of rounds equal to 3 plus 1 round per 2 shaman levels. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.grant_teamwork_feat',
            value: 0,
            source: 'spirit-tribe',
          },
        ],
      },
      greater: {
        name: 'Tribal Bond',
        type: 'Su',
        description:
          "Upon preparing her spells each day, the shaman can select a number of creatures equal to half her shaman level as honorary members of her tribe. These creatures can constantly communicate with each other as if under the effects of a telepathic bond spell.",
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.telepathic_bond_tribe',
            value: 0,
            source: 'spirit-tribe',
          },
        ],
      },
      true: {
        name: 'Guardian of the Tribe',
        type: 'Su',
        description:
          "The shaman can cast harmless touch-range spells on tribal bond members within 30 feet as if those members were adjacent to her. She is also constantly aware of the conditions of all tribal bond members as if under the effects of a status spell. The shaman can use the touch-range spell delivery a number of times per day equal to her Charisma modifier (minimum 1).",
        uses: {
          formula: 'Cha modifier (minimum 1)',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.remote_touch_spell_tribe',
            value: 0,
            source: 'spirit-tribe',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Tribe)',
        type: 'Su',
        description:
          "The shaman gains a bonus on saving throws equal to her Charisma modifier and becomes immune to compulsion spells and spell-like abilities. Once per day, she can attempt to revive a deceased tribal bond member on the same plane within 1 round of death, as if casting breath of life at any range. This healing restores hit points equal to 10 times her shaman level (maximum 200).",
        uses: {
          formula: 'revive 1/day',
          current: 0,
        },
        effects: [
          {
            type: 'bonus',
            bonusType: 'untyped',
            target: 'save.all',
            value: 0,
            source: 'spirit-tribe',
          },
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'mind_affecting',
            value: 0,
            source: 'spirit-tribe',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-ppc-wo',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── WAVES ─────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-waves',
    name: 'Waves',
    description:
      'The shaman channels the ever-moving, ever-changing spirit of water, wielding cold and the force of the sea.',
    spiritSpells: [
      'hydraulic push',
      'slipstream',
      'water breathing',
      'wall of ice',
      'geyser',
      'fluid form',
      'vortex',
      'seamantle',
      'tsunami',
    ],
    hexList: [
      'hex-beckoning-chill',
      'hex-crashing-waves',
      'hex-fluid-magic',
      'hex-mists-shroud',
      'hex-water-sight',
    ],
    abilities: {
      spirit: {
        name: 'Wave Strike',
        type: 'Su',
        description:
          "As a standard action, the shaman can make a melee touch attack that deals 1d6 points of nonlethal damage + 1 point for every 2 shaman levels she possesses, and pushes the target 5 feet away from her (no save). The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier. At 11th level, any weapon the shaman wields is treated as a quenching weapon.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.wave_strike',
            value: 0,
            source: 'spirit-waves',
          },
        ],
      },
      greater: {
        name: 'Fluid Mastery',
        type: 'Su',
        description:
          "The shaman gains a swim speed equal to her base land speed and can breathe underwater. As a standard action, she can deploy a 15-foot cone torrent that deals 1d4 points of cold damage per 2 shaman levels to each creature in the area, and pushes each target 5 feet away (Reflex save halves damage and negates the push). The shaman can use this cone ability three times per day, but must wait at least 1d4 rounds between each use.",
        uses: {
          perDay: 3,
          current: 0,
        },
        effects: [
          {
            type: 'grant_movement',
            bonusType: 'untyped',
            target: 'swim',
            value: 0,
            source: 'spirit-waves',
          },
        ],
      },
      true: {
        name: 'Elemental Form',
        type: 'Su',
        description:
          "Once per day as a standard action, the shaman can transform her body into that of a Huge water elemental, as if using elemental body IV, but only in the water elemental form. This ability lasts for 1 hour per shaman level.",
        uses: {
          perDay: 1,
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.elemental_body_iv_water',
            value: 0,
            source: 'spirit-waves',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Waves)',
        type: 'Su',
        description:
          "The shaman gains cold resistance 30. She can apply the Enlarge Spell, Extend Spell, Silent Spell, or Still Spell feat to any spell with the cold descriptor or any spell that creates or manipulates water that she casts without increasing the spell's level or casting time, even if she does not possess those feats.",
        effects: [
          {
            type: 'resistance',
            bonusType: 'untyped',
            target: 'energy_resistance.cold',
            value: 30,
            source: 'spirit-waves',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.metamagic_cold_water_spells_free',
            value: 0,
            source: 'spirit-waves',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── WIND ──────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-wind',
    name: 'Wind',
    description:
      'The shaman draws power from the free and untameable spirit of air and lightning, commanding storms and the open sky.',
    spiritSpells: [
      'alter winds',
      'gust of wind',
      'cloak of winds',
      'river of wind',
      'control winds',
      'sirocco',
      'control weather',
      'whirlwind',
      'winds of vengeance',
    ],
    hexList: [
      'hex-air-barrier',
      'hex-sparking-aura',
      'hex-vortex-spells',
      'hex-wind-sight',
      'hex-wind-ward',
    ],
    abilities: {
      spirit: {
        name: 'Shocking Touch',
        type: 'Su',
        description:
          "As a standard action, the shaman can make a melee touch attack that deals 1d6 points of electricity damage + 1 point for every 2 shaman levels she possesses. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier. At 11th level, any weapon the shaman wields is treated as a shocking weapon.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.shocking_touch',
            value: 0,
            source: 'spirit-wind',
          },
        ],
      },
      greater: {
        name: 'Spark Soul',
        type: 'Su',
        description:
          "The shaman gains electricity resistance 10. As a standard action, she can unleash a 20-foot line of sparks that deals 1d4 points of electricity damage per shaman level to each creature in the line (Reflex half). The shaman can use this line ability three times per day, but must wait at least 1d4 rounds between each use.",
        uses: {
          perDay: 3,
          current: 0,
        },
        effects: [
          {
            type: 'resistance',
            bonusType: 'untyped',
            target: 'energy_resistance.electricity',
            value: 10,
            source: 'spirit-wind',
          },
        ],
      },
      true: {
        name: 'Elemental Form',
        type: 'Su',
        description:
          "Once per day as a standard action, the shaman can transform her body into that of a Huge air elemental, as if using elemental body IV, but only in the air elemental form. This ability lasts for 1 hour per shaman level.",
        uses: {
          perDay: 1,
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.elemental_body_iv_air',
            value: 0,
            source: 'spirit-wind',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Wind)',
        type: 'Su',
        description:
          "The shaman gains electricity resistance 30. She can apply the Enlarge Spell, Extend Spell, Silent Spell, or Still Spell feat to any spell with the electricity descriptor or any air spell that she casts without increasing the spell's level or casting time, even if she does not possess those feats.",
        effects: [
          {
            type: 'resistance',
            bonusType: 'untyped',
            target: 'energy_resistance.electricity',
            value: 30,
            source: 'spirit-wind',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.metamagic_electricity_air_spells_free',
            value: 0,
            source: 'spirit-wind',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── WOOD ──────────────────────────────────────────────────────────────────────
  {
    id: 'spirit-wood',
    name: 'Wood',
    description:
      'The shaman channels the growing, enduring spirit of the forest, wielding the power of wood and plants with strength and tenacity.',
    spiritSpells: [
      'shillelagh',
      'barkskin',
      'minor creation',
      'thorn body',
      'tree stride',
      'ironwood',
      'transmute metal to wood',
      'changestaff',
      'wooden phalanx',
    ],
    hexList: [
      'hex-hex-of-lignification',
      'hex-natures-gifts',
      'hex-spines-and-brambles',
      'hex-verdant-path',
      'hex-whispering-leaves',
    ],
    abilities: {
      spirit: {
        name: 'Tree Limb',
        type: 'Su',
        description:
          "As a swift action, the shaman can transform one of her arms into a branch-like limb capable of making a slam attack. This slam attack deals 1d8 points of damage for a Medium shaman (1d6 for Small, 2d6 for Large). At 8th level, the reach of this limb increases by 5 feet. At 16th level, both of her arms can transform simultaneously. The shaman can use this ability a number of times per day equal to 3 plus her Charisma modifier.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.tree_limb_slam',
            value: 0,
            source: 'spirit-wood',
          },
        ],
      },
      greater: {
        name: 'Bloody Roots',
        type: 'Su',
        description:
          "As a standard action, the shaman causes a field of thick roots to burrow up from the ground, functioning as the black tentacles spell using her caster level, centered on the shaman. If the shaman moves away, the roots remain in their original location. The shaman can maintain this ability for a number of rounds per day equal to 3 plus her Charisma modifier. This duration does not need to be consecutive.",
        uses: {
          formula: '3 + Cha modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.black_tentacles_roots',
            value: 0,
            source: 'spirit-wood',
          },
        ],
      },
      true: {
        name: 'Tree Form',
        type: 'Su',
        description:
          "Once per day, the shaman can assume the form of a plant creature as if using plant shape III. This ability lasts for 1 hour per shaman level.",
        uses: {
          perDay: 1,
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.plant_shape_iii',
            value: 0,
            source: 'spirit-wood',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Wood)',
        type: 'Su',
        description:
          "The shaman permanently becomes a plant creature. She gains a +4 natural armor bonus, damage reduction 10/— against weapons made of wood, and immunity to paralysis, poison, polymorph, sleep effects, and stun. She can meld with any wooden structure at will for an indefinite duration.",
        effects: [
          {
            type: 'bonus',
            bonusType: 'natural',
            target: 'ac.natural',
            value: 4,
            source: 'spirit-wood',
          },
          {
            type: 'resistance',
            bonusType: 'untyped',
            target: 'dr',
            value: 10,
            source: 'spirit-wood',
          },
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'paralysis',
            value: 0,
            source: 'spirit-wood',
          },
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'poison',
            value: 0,
            source: 'spirit-wood',
          },
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'sleep',
            value: 0,
            source: 'spirit-wood',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },

  // ── DARK TAPESTRY ─────────────────────────────────────────────────────────────
  {
    id: 'spirit-dark-tapestry',
    name: 'Dark Tapestry',
    description:
      "A shaman who selects the Dark Tapestry spirit is often a misanthropic loner who rarely cooperates voluntarily. These shamans call upon the alien entities that dwell between the stars — vast, inscrutable beings whose whispers drive mortals to madness. Dark Tapestry shamans are typically encountered as cult leaders in remote regions, drawn to ancient aberrant ruins. Their magic bends reality and sanity, reaching out to touch the minds and bodies of others with the cold, alien void between the stars.",
    spiritSpells: [
      'entropic shield',
      'contact entity I',
      'contact entity II',
      'black tentacles',
      'contact entity III',
      'feeblemind',
      'contact entity IV',
      'insanity',
      'interplanetary teleport',
    ],
    hexList: [
      'hex-alien-summons',
      'hex-brain-drain',
      'hex-cloak-of-darkness',
      'hex-maddening-whispers',
      'hex-pierce-the-veil',
    ],
    abilities: {
      spirit: {
        name: 'Touch of the Void',
        type: 'Su',
        description:
          "As a standard action, the shaman can make a melee touch attack that deals 1d6 points of cold damage + 1 point for every 2 shaman levels she possesses. At 10th level, any creature the shaman strikes with this touch or with a melee weapon must succeed at a Fortitude saving throw or be fatigued for a number of rounds equal to 1/2 the shaman's level. This ability has no effect on creatures that are already fatigued. The shaman can use this ability a number of times per day equal to 3 plus her Wisdom modifier.",
        uses: {
          formula: '3 + Wis modifier',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.touch_of_the_void',
            value: 0,
            source: 'spirit-dark-tapestry',
          },
        ],
      },
      greater: {
        name: 'Horrific Glimpse',
        type: 'Sp',
        description:
          "Once per day after 1 hour of meditation, the shaman can gain the effects of contact other plane. Rather than an Intelligence check, the shaman must succeed at a DC 16 Wisdom check to avoid the negative effects; failure causes her Intelligence and Charisma scores to each drop to 8 for 5 weeks. Answers gained treat the shaman as if she were contacting a greater deity for questions about the Material Plane and a demigod for questions about other planes. Once per day (but only after first using this ability as per contact other plane), the shaman can reveal a fragment of this horrific vision to another creature as per phantasmal killer. Creatures slain by this ability are hideously mutilated, preventing the use of speak with dead on their remains.",
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.horrific_glimpse',
            value: 0,
            source: 'spirit-dark-tapestry',
          },
        ],
      },
      true: {
        name: 'Unbound Form',
        type: 'Su',
        description:
          "The shaman can assume various forms as per greater polymorph. She can use this ability for a total of 1 minute per day per shaman level. This duration does not need to be consecutive, but it must be used in 1-minute increments. Any form the shaman assumes while using this ability always displays alien characteristics — unusual colorations, strange proportions, or other unsettling features.",
        uses: {
          formula: '1 minute per shaman level per day',
          current: 0,
        },
        effects: [
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.greater_polymorph',
            value: 0,
            source: 'spirit-dark-tapestry',
          },
        ],
      },
      manifestation: {
        name: 'Manifestation (Dark Tapestry)',
        type: 'Su',
        description:
          "The shaman's body permanently takes on alien characteristics — her eyes become solid spheres of blackness, her fingers lengthen into tentacle-like appendages, or other cosmetic changes occur. She gains damage reduction 5/—, immunity to acid, immunity to critical hits, and immunity to sneak attacks. Once per day, the shaman can cast shapechange as a spell-like ability without requiring a material component, but any form she assumes never appears to be naturally occurring on her home world.",
        effects: [
          {
            type: 'resistance',
            bonusType: 'untyped',
            target: 'dr',
            value: 5,
            source: 'spirit-dark-tapestry',
          },
          {
            type: 'immunity',
            bonusType: 'untyped',
            target: 'acid',
            value: 0,
            source: 'spirit-dark-tapestry',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.critical_hit_immunity',
            value: 0,
            source: 'spirit-dark-tapestry',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.sneak_attack_immunity',
            value: 0,
            source: 'spirit-dark-tapestry',
          },
          {
            type: 'special',
            bonusType: 'untyped',
            target: 'special.shapechange_once_per_day',
            value: 0,
            source: 'spirit-dark-tapestry',
          },
        ],
      },
    },
    wanderingSpirit: true,
    source: 'pf1e-horror-realms',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
