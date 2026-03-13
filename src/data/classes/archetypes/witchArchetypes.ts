import { ArchetypeData } from '../types';

export const WITCH_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Alchemical Ally
  // ──────────────────────────────────────────────
  {
    name: 'Alchemical Ally',
    className: 'Witch',
    description:
      "The alchemical ally witch fuses arcane witchcraft with alchemical science, channeling her patron's power through formulae and elixirs rather than hexes. Her familiar carries alchemical recipes instead of spells, and she brews magical concoctions to supplement her magic.",
    replacedFeatures: ['Hex (2nd)', 'Hex (6th)', 'Hex (10th)', 'Hex (14th)', 'Hex (18th)'],
    modifiedFeatures: ['Familiar'],
    newFeatures: [
      {
        name: 'Alchemical Famulus',
        level: 1,
        description:
          "The witch's familiar stores alchemical formulae in addition to spells. She gains Brew Potion as a bonus feat and can use her familiar to deliver potions and extracts as a move action.",
      },
      {
        name: 'Bonus Extract',
        level: 2,
        description:
          'At 2nd level and every 4 levels thereafter, the alchemical ally witch learns one alchemist extract of a level she can prepare. She can prepare these extracts as if she were an alchemist of her witch level.',
      },
      {
        name: 'Alchemical Hex',
        level: 6,
        description:
          "The witch can deliver her hexes via alchemical splash weapons or extracts, using the item's delivery mechanism instead of the standard touch or ranged attack.",
      },
    ],
    source: 'Familiar Folio',
  },

  // ──────────────────────────────────────────────
  // 2. Beast Bonded
  // ──────────────────────────────────────────────
  {
    name: 'Beast Bonded',
    className: 'Witch',
    description:
      'The beast bonded witch forms an unusually deep connection with her familiar, able to share senses, transfer her consciousness into the creature, and ultimately merge with it entirely. This profound bond comes at the cost of some traditional hexes.',
    replacedFeatures: ['Hex (8th)', 'Major Hex (12th)', 'Grand Hex (18th)'],
    modifiedFeatures: ['Familiar'],
    newFeatures: [
      {
        name: 'Familiar Alchemy',
        level: 1,
        description:
          "The beast bonded witch's familiar is treated as having the witch's Intelligence score for the purpose of skills. Additionally, the witch and familiar share a deeper empathic link, allowing telepathic communication up to 1 mile.",
      },
      {
        name: 'Beast Soul',
        level: 8,
        description:
          "The witch can transfer her consciousness into her familiar as a full-round action, using the familiar's senses and controlling it for up to 1 hour per witch level per day. Her own body is helpless while her mind occupies the familiar.",
      },
      {
        name: 'Twin Soul',
        level: 12,
        description:
          "Once per day, if the witch's familiar is reduced to 0 or fewer hit points, the witch can immediately transfer her consciousness into a new body from within her familiar as if using magic jar. She can also grant her familiar one of her known hexes.",
      },
      {
        name: 'Undying Bond',
        level: 18,
        description:
          "The witch and familiar become one unified soul. If either dies, the surviving one immediately gains the dead one's abilities and continues living. The surviving entity can reform the other through a 24-hour ritual.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 3. Bog Witch
  // ──────────────────────────────────────────────
  {
    name: 'Bog Witch',
    className: 'Witch',
    description:
      "The bog witch dwells in fetid swamps and marshes, drawing power from decay, disease, and the murky waters of the wetlands. She is a master of rot and pestilence, channeling her patron's power through the miasma of her foul home.",
    replacedFeatures: ['Hex (2nd)', 'Hex (4th)', 'Hex (8th)'],
    modifiedFeatures: ['Patron', 'Familiar'],
    newFeatures: [
      {
        name: 'Swamp Stride',
        level: 1,
        description:
          'The bog witch can move through bogs, mud, and shallow water without penalty and ignores the difficult terrain penalty of swamps, marshes, and similar environments.',
      },
      {
        name: 'Miasma',
        level: 2,
        description:
          'As a standard action, the bog witch can exhale a cloud of foul vapors in a 10-foot-radius spread centered on herself. Creatures in the area must succeed on a Fortitude save or become sickened for 1d4 rounds. She can use this ability a number of times per day equal to 3 + her Intelligence modifier.',
      },
      {
        name: 'Bog Rot',
        level: 4,
        description:
          'Once per day, the bog witch can inflict a festering curse on a touched creature. The target must succeed on a Fortitude save or contract bog rot, a disease that deals 1d4 Constitution damage per day until cured.',
      },
      {
        name: 'Swamp Camouflage',
        level: 8,
        description:
          'The bog witch can blend perfectly into swampy terrain, gaining a +10 bonus on Stealth checks while in bogs, marshes, or similar environments. She can use this ability to hide even while being observed.',
      },
    ],
    source: 'Blood of the Coven',
  },

  // ──────────────────────────────────────────────
  // 4. Bonded Witch
  // ──────────────────────────────────────────────
  {
    name: 'Bonded Witch',
    className: 'Witch',
    description:
      "Rather than maintaining a familiar, the bonded witch channels her patron's power through a specially crafted magic item. This arcane bond functions similarly to a wizard's bonded object, lending itself to more academic witchcraft.",
    replacedFeatures: ['Familiar'],
    modifiedFeatures: ['Patron Spells'],
    newFeatures: [
      {
        name: 'Arcane Bond (Object)',
        level: 1,
        description:
          'The bonded witch gains an arcane bonded object as per the wizard class feature. She stores her spells in this object instead of a familiar. Once per day, she can use her bonded object to cast any one spell from her spellbook even if she has not prepared it.',
      },
      {
        name: 'Enhanced Bond',
        level: 5,
        description:
          "The witch's bonded object gains a +1 enhancement bonus that increases by +1 every 4 levels thereafter (to a maximum of +5 at 17th level). This bonus applies to attacks, damage, or saving throw DCs depending on the item type.",
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 5. Debilitating Hex
  // ──────────────────────────────────────────────
  {
    name: 'Debilitating Hex',
    className: 'Witch',
    description:
      'The debilitating hex witch specializes in hexes that cripple and disable foes rather than those that harm or enchant. She trades some offensive magic for hexes that stack debilitating conditions onto enemies with brutal efficiency.',
    replacedFeatures: ['Hex (4th)', 'Hex (8th)', 'Hex (12th)'],
    modifiedFeatures: ['Hex'],
    newFeatures: [
      {
        name: 'Crippling Hex',
        level: 4,
        description:
          'When the debilitating hex witch successfully applies any hex that imposes a condition, she can choose to extend the duration of that condition by a number of rounds equal to her Intelligence modifier (minimum 1).',
      },
      {
        name: 'Stacking Misfortune',
        level: 8,
        description:
          'The debilitating hex witch can apply two different hexes to the same target simultaneously, even if both would normally not stack. Each hex still requires its own saving throw.',
      },
      {
        name: 'Overwhelming Hex',
        level: 12,
        description:
          'Once per day, the witch can apply a hex that does not allow a saving throw. She must choose to do so before rolling to apply the hex. This ability can only be used on a hex that normally allows a Will saving throw.',
      },
    ],
    source: "Pathfinder Player Companion: Healer's Handbook",
  },

  // ──────────────────────────────────────────────
  // 6. Dimensional Occultist
  // ──────────────────────────────────────────────
  {
    name: 'Dimensional Occultist',
    className: 'Witch',
    description:
      'The dimensional occultist witch has forged a pact with entities from beyond reality, granting her knowledge of planar travel and dimensional magic. She sacrifices some traditional hexes in exchange for powers that let her step between planes.',
    replacedFeatures: ['Hex (4th)', 'Hex (8th)', 'Major Hex (12th)'],
    modifiedFeatures: ['Patron'],
    newFeatures: [
      {
        name: 'Planar Attunement',
        level: 1,
        description:
          'The dimensional occultist can sense planar boundaries and detect planar rifts, tears, or portals within 60 feet. She adds all teleportation and planar travel spells to her spell list as witch spells of the appropriate level.',
      },
      {
        name: 'Dimensional Step',
        level: 4,
        description:
          'Once per day per 4 witch levels, the dimensional occultist can teleport up to 30 feet as a move action. This functions as dimension door, but only moves the witch herself.',
      },
      {
        name: 'Planar Sight',
        level: 8,
        description:
          'The dimensional occultist can see into and through planar boundaries as if using true seeing, limited to detecting extraplanar creatures and dimensional magic. She gains a bonus on saves against planar spells equal to her Intelligence modifier.',
      },
      {
        name: 'Planar Tear',
        level: 12,
        description:
          'Once per day, the dimensional occultist can rip open a temporary planar rift as a standard action. The rift functions as a one-way gate to a plane of her choice, lasting 1 round per witch level.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 7. Gravewalker
  // ──────────────────────────────────────────────
  {
    name: 'Gravewalker',
    className: 'Witch',
    description:
      'The gravewalker witch has bargained with the powers of death itself, gaining the ability to animate and control the undead. She replaces her familiar with a bodyguard of animated corpses and commands legions of the risen dead.',
    replacedFeatures: ['Familiar', 'Hex (2nd)', 'Hex (4th)', 'Hex (8th)'],
    modifiedFeatures: ['Patron'],
    newFeatures: [
      {
        name: 'Possess Undead',
        level: 1,
        description:
          "The gravewalker can possess an undead creature within 100 feet as a standard action. This functions as magic jar, except the witch's body does not go comatose — instead she maintains a tenuous spiritual link to her own body while riding the undead vessel.",
      },
      {
        name: "Bouda's Eye",
        level: 1,
        description:
          'The gravewalker gains a +2 bonus on Intimidate checks and treats Intimidate as a class skill. She also gains the ability to demoralize undead creatures as if they were living.',
      },
      {
        name: 'Corpse Companion',
        level: 2,
        description:
          'The gravewalker can animate a single Medium or smaller corpse as a zombie or skeleton under her control. This functions as animate dead but requires no material component. She can have one such companion at a time, and it is enhanced as she gains levels.',
      },
      {
        name: 'Undead Mastery',
        level: 4,
        description:
          'The gravewalker can command a number of Hit Dice of undead equal to her witch level x 2. She can use animate dead as a spell-like ability a number of times per day equal to her Intelligence modifier.',
      },
      {
        name: 'Wave of Corruption',
        level: 8,
        description:
          'As a standard action, the gravewalker can project an aura of necromantic energy in a 30-foot radius. Living creatures must succeed on a Fortitude save or become sickened. Undead creatures in the area are healed of 1d8 damage per 2 witch levels.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 8. Hedge Witch
  // ──────────────────────────────────────────────
  {
    name: 'Hedge Witch',
    className: 'Witch',
    description:
      'The hedge witch eschews the darker aspects of witchcraft to focus on healing and restoration. She becomes an accomplished healer, gaining access to divine healing magic and the ability to channel positive energy, though she sacrifices some hexes to do so.',
    replacedFeatures: ['Hex (2nd)', 'Hex (6th)', 'Hex (10th)', 'Hex (14th)', 'Hex (18th)'],
    modifiedFeatures: ['Patron Spells'],
    newFeatures: [
      {
        name: 'Spontaneous Healing',
        level: 1,
        description:
          'The hedge witch can "lose" any prepared spell in order to cast any cure spell of the same spell level or lower. She adds all cure spells to her witch spell list and her familiar\'s stored spells.',
      },
      {
        name: 'Empathic Healing',
        level: 2,
        description:
          'The hedge witch can remove a harmful condition from an adjacent willing creature by transferring it to herself. She takes on the condition for 1 hour per witch level, after which it fades. She can use this ability once per day per 2 witch levels.',
      },
      {
        name: 'Healing Hex',
        level: 2,
        description:
          'The hedge witch gains the healing hex even if she does not select it. This version of the healing hex can also be used on the same target any number of times per day, rather than just once.',
      },
      {
        name: 'Life Giver',
        level: 6,
        description:
          'Once per day, the hedge witch can cast breath of life as a spell-like ability. At 10th level, she can cast raise dead as a spell-like ability once per week without needing material components.',
      },
      {
        name: 'Restore Life',
        level: 10,
        description:
          'The hedge witch can cast resurrection as a spell-like ability once per month without needing material components. She adds her Intelligence modifier to the hit points restored by all her cure spells.',
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 9. Hex Channeler
  // ──────────────────────────────────────────────
  {
    name: 'Hex Channeler',
    className: 'Witch',
    description:
      'The hex channeler blends witchcraft with the divine power to channel energy, allowing her to harm or heal large numbers of creatures simultaneously. She trades some hexes for the ability to release bursts of positive or negative energy.',
    replacedFeatures: ['Hex (2nd)', 'Hex (6th)', 'Hex (10th)', 'Hex (14th)', 'Hex (18th)'],
    modifiedFeatures: ['Patron'],
    newFeatures: [
      {
        name: 'Channel Energy',
        level: 1,
        description:
          'The hex channeler gains the ability to channel energy as a cleric of her witch level. She can channel positive or negative energy based on her patron type. She can channel energy a number of times per day equal to 3 + her Charisma modifier.',
      },
      {
        name: 'Hex Channel',
        level: 2,
        description:
          "When the hex channeler channels energy, she can apply one of her known hexes to every creature affected by the channel. Creatures that take damage from the channel also suffer the hex's effect, while creatures healed by the channel may apply the hex only to willing targets.",
      },
      {
        name: 'Improved Channel',
        level: 6,
        description:
          "The hex channeler's channel energy increases in power as if she were a cleric 4 levels higher for determining the number of dice and the save DC of channeled energy.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 10. Invoker Witch
  // ──────────────────────────────────────────────
  {
    name: 'Invoker Witch',
    className: 'Witch',
    description:
      'The invoker witch has made pacts with multiple spirits and outsiders, gaining the ability to call upon them directly. Rather than relying solely on her patron, she summons powerful entities to fight for her and channels their specific powers.',
    replacedFeatures: ['Hex (4th)', 'Hex (8th)', 'Major Hex (12th)', 'Grand Hex (18th)'],
    modifiedFeatures: ['Patron', 'Familiar'],
    newFeatures: [
      {
        name: 'Spirit Pact',
        level: 1,
        description:
          'The invoker witch adds summon monster spells to her spell list at one level lower than normal. She gains Augment Summoning as a bonus feat and can use her familiar as a focus for summoning spells, allowing summoning as a move action once per day.',
      },
      {
        name: 'Invoke Spirit',
        level: 4,
        description:
          'Once per day, the invoker witch can call upon a bound spirit as a standard action, gaining a specific benefit for 1 minute per witch level. Each spirit grants a different ability (flight, darkvision, fire resistance, etc.) chosen at character creation from a list.',
      },
      {
        name: 'Greater Invocation',
        level: 8,
        description:
          'The invoker witch can use invoke spirit twice per day and can maintain two different spirit invocations simultaneously. She adds the extraplanar subtype to her summons, granting them a +2 bonus on all saving throws.',
      },
      {
        name: 'Spirit Army',
        level: 12,
        description:
          'Once per day, the invoker witch can summon a number of spirits equal to her Intelligence modifier simultaneously with a single spell-like ability. These spirits function as summon monster VI creatures.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 11. Mirror Witch
  // ──────────────────────────────────────────────
  {
    name: 'Mirror Witch',
    className: 'Witch',
    description:
      'The mirror witch has bound her soul to a magical looking glass, using mirrors as windows into other places and as weapons that reflect magic back on its casters. She is a master of illusion and reflection.',
    replacedFeatures: ['Familiar', 'Hex (2nd)', 'Hex (6th)'],
    modifiedFeatures: ['Patron'],
    newFeatures: [
      {
        name: 'Mirror Soul',
        level: 1,
        description:
          "The mirror witch's soul is partially bound to a specially crafted mirror that functions as her arcane focus. The mirror stores her spells as a familiar would and can be used to scry at will. If the mirror is destroyed, the witch can create a new one in 24 hours.",
      },
      {
        name: 'Mirror Image (Sp)',
        level: 1,
        description:
          'The mirror witch can cast mirror image as a spell-like ability a number of times per day equal to her Intelligence modifier. At 5th level she can cast major image, and at 9th level she can cast project image in the same manner.',
      },
      {
        name: 'Spell Reflection',
        level: 2,
        description:
          "Once per day per 4 witch levels, when the mirror witch is the target of a spell that allows a saving throw, she can attempt to reflect it back at the caster. She must succeed on a caster level check (DC 11 + caster's level); if successful, the spell redirects to the original caster.",
      },
      {
        name: 'Mirror Step',
        level: 6,
        description:
          'As a move action, the mirror witch can step into any reflective surface larger than herself and emerge from any other reflective surface within 100 feet per witch level. She can bring one willing creature per 5 witch levels with her.',
      },
    ],
    source: 'Pathfinder Player Companion: Magic Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 12. Moss Witch
  // ──────────────────────────────────────────────
  {
    name: 'Moss Witch',
    className: 'Witch',
    description:
      'The moss witch draws power from ancient forests and primordial plant life, communing with the slow, patient intelligence of living wood. Her magic grows and entangles rather than blasts, and she is accompanied by plant-like familiar.',
    replacedFeatures: ['Hex (2nd)', 'Hex (4th)', 'Hex (8th)', 'Major Hex'],
    modifiedFeatures: ['Familiar', 'Patron'],
    newFeatures: [
      {
        name: 'Verdant Familiar',
        level: 1,
        description:
          "The moss witch's familiar has the plant subtype and is treated as a plant for all purposes. It gains fast healing 1 while in contact with soil or wood, and the witch gains a +4 bonus on wild empathy checks with plant creatures.",
      },
      {
        name: 'Entangling Hex',
        level: 2,
        description:
          'When the moss witch applies any hex to a creature, she can cause vines and roots to spring up around that creature for 1 round per witch level, imposing the entangled condition. This does not require an additional save.',
      },
      {
        name: 'Woodland Stride',
        level: 4,
        description:
          'The moss witch can move through natural difficult terrain — including undergrowth, mud, and similar terrain — at full speed without penalty. Magically manipulated terrain still imposes penalties.',
      },
      {
        name: 'Call the Forest',
        level: 8,
        description:
          'Once per day, the moss witch can call upon the surrounding vegetation to animate and attack her foes as if casting wall of thorns or entangle at her caster level, affecting a 60-foot-radius area around her.',
      },
    ],
    source: 'Blood of the Coven',
  },

  // ──────────────────────────────────────────────
  // 13. Mothvine Witch
  // ──────────────────────────────────────────────
  {
    name: 'Mothvine Witch',
    className: 'Witch',
    description:
      'The mothvine witch has formed a pact with the strange, dream-like fey of the twilight, gaining magic that blends sleep, illusion, and nature. She lures victims into enchanted slumber and weaves thorny glamours that harm as they beguile.',
    replacedFeatures: ['Hex (4th)', 'Hex (8th)', 'Major Hex (14th)'],
    modifiedFeatures: ['Familiar', 'Patron'],
    newFeatures: [
      {
        name: 'Dreaming Familiar',
        level: 1,
        description:
          "The mothvine witch's familiar has the fey subtype and gains the ability to enter a creature's dreams as per dream once per day. The familiar delivers this effect to sleeping creatures within 30 feet without waking them.",
      },
      {
        name: 'Twilight Lure',
        level: 4,
        description:
          'As a standard action, the mothvine witch can project an aura of entrancing moonlight for 1 round. All creatures within 30 feet must succeed on a Will save or be fascinated. This is a mind-affecting compulsion effect.',
      },
      {
        name: 'Mothvine Snare',
        level: 8,
        description:
          'As a standard action, the witch can cause spectral vines of moonlight and shadow to spring up in a 20-foot-radius spread. Creatures that fail a Reflex save are entangled, and those that fail a Will save also fall asleep as per deep slumber.',
      },
      {
        name: 'Dream Weaver',
        level: 14,
        description:
          'The mothvine witch can enter the Dreamlands at will as a standard action, leaving her body behind in a state of torpor. She can affect creatures in the waking world from the Dreamlands using her hexes and spells, though she is limited to line of effect from her physical body.',
      },
    ],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },

  // ──────────────────────────────────────────────
  // 14. Natural Witch
  // ──────────────────────────────────────────────
  {
    name: 'Natural Witch',
    className: 'Witch',
    description:
      'The natural witch forgoes a traditional familiar entirely, instead bonding her power to a specific place in the natural world. She draws her power from the land itself and becomes nearly unstoppable when fighting within her territory.',
    replacedFeatures: ['Familiar', 'Hex (6th)', 'Hex (14th)'],
    modifiedFeatures: ['Patron'],
    newFeatures: [
      {
        name: 'Bonded Land',
        level: 1,
        description:
          'The natural witch designates a specific area of up to 1 acre per witch level as her bonded land. She always knows the exact status of creatures and conditions within her bonded land. The bonded land serves as her spellbook; she cannot re-prepare spells without access to it.',
      },
      {
        name: 'Terrain Mastery',
        level: 1,
        description:
          'The natural witch gains the terrain mastery ranger ability for the terrain type of her bonded land. She gains the benefits of this terrain in all terrain of that type, not just her bonded land.',
      },
      {
        name: "Land's Wrath",
        level: 6,
        description:
          "While within her bonded land, the natural witch can channel the area's energy to add her Intelligence modifier as a bonus on all caster level checks and spell damage rolls. Enemies within her bonded land take a penalty on saving throws against her spells equal to half her Intelligence modifier.",
      },
      {
        name: 'One with the Land',
        level: 14,
        description:
          "The natural witch can expand her bonded land by 10 acres per witch level per year. She can also choose to die rather than allow her bonded land to be destroyed; if she does so, she is reborn from the land's soil in 1d10 days.",
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 15. Possessed Witch
  // ──────────────────────────────────────────────
  {
    name: 'Possessed Witch',
    className: 'Witch',
    description:
      'The possessed witch does not have a patron in the traditional sense — instead, a powerful spirit has taken up permanent residence within her body, granting her power in exchange for occasional control. Her "familiar" is the spirit itself, externalized at will.',
    replacedFeatures: ['Familiar', 'Hex (4th)', 'Hex (10th)'],
    modifiedFeatures: ['Patron'],
    newFeatures: [
      {
        name: 'Spirit Vessel',
        level: 1,
        description:
          'A possessing spirit dwells within the witch, granting her the benefits of a familiar without the familiar being a separate creature. The spirit provides the standard familiar bonus appropriate to its type. The witch can manifest the spirit as a visible spiritual form for 1 round per witch level per day.',
      },
      {
        name: 'Shared Consciousness',
        level: 1,
        description:
          'The possessing spirit grants the witch constant detect magic, comprehend languages, or read magic (chosen at character creation) as a supernatural ability. The spirit also grants the witch one skill from its own knowledge base, treating it as a class skill with a +4 bonus.',
      },
      {
        name: 'Partial Possession',
        level: 4,
        description:
          'The possessing spirit can temporarily take greater control, granting the witch extraordinary physical abilities. As a swift action once per day, the witch can gain a +4 bonus to Strength or Dexterity and one natural attack appropriate to the spirit for 1 round per witch level.',
      },
      {
        name: 'Full Possession',
        level: 10,
        description:
          "Once per day, the possessing spirit can take full control of the witch's body for up to 1 minute per witch level. During this time, the witch's statistics change to those of the spirit, but she retains her Hit Dice, saving throws, and hit points. She can end this possession as a free action.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 16. Stitched Witch
  // ──────────────────────────────────────────────
  {
    name: 'Stitched Witch',
    className: 'Witch',
    description:
      'The stitched witch is a practitioner of sympathetic magic, binding curses and hexes into physical objects and puppets. She creates effigy dolls that she can use to remotely harm, control, or spy on victims from afar.',
    replacedFeatures: ['Hex (2nd)', 'Hex (6th)', 'Major Hex (12th)'],
    modifiedFeatures: ['Hex', 'Familiar'],
    newFeatures: [
      {
        name: 'Craft Effigy',
        level: 1,
        description:
          'The stitched witch can craft a small effigy of a creature in 1 hour using materials worth 5 gp. To bind the effigy, she needs a piece of the target (hair, blood, nail). Once bound, she can use the effigy to deliver hexes to the target from up to 1 mile per witch level without needing line of effect.',
      },
      {
        name: 'Sympathetic Hex',
        level: 2,
        description:
          "When using an effigy to deliver a hex, the stitched witch can apply the hex as a swift action. The target of an effigy hex takes a -2 penalty on their saving throw if they are unaware of the effigy's existence.",
      },
      {
        name: 'Pain Doll',
        level: 6,
        description:
          "The stitched witch can inflict 1d6 points of damage per witch level (maximum 10d6) on a target with a bound effigy as a standard action, with no saving throw. She must succeed on a ranged touch attack using the effigy's image as the target.",
      },
      {
        name: 'Master Puppet',
        level: 12,
        description:
          'Once per day, the stitched witch can attempt to dominate a creature with a bound effigy, as per dominate person (or dominate monster for non-humanoids). The target must succeed on a Will save or be dominated for 1 day per witch level.',
      },
    ],
    source: 'Horror Adventures',
  },

  // ──────────────────────────────────────────────
  // 17. White-Haired Witch
  // ──────────────────────────────────────────────
  {
    name: 'White-Haired Witch',
    className: 'Witch',
    description:
      'The white-haired witch has awakened her hair as a prehensile weapon, using it to grapple, strangle, and rend foes. This physical combat capability replaces some of her traditional hex selection, making her a unique frontline spellcaster.',
    replacedFeatures: ['Hex (2nd)', 'Hex (4th)', 'Hex (6th)', 'Hex (8th)', 'Hex (10th)'],
    modifiedFeatures: ['Familiar'],
    newFeatures: [
      {
        name: 'Prehensile Hair',
        level: 1,
        description:
          "The white-haired witch's hair functions as a primary natural attack dealing 1d3 damage plus her Intelligence modifier (instead of Strength). Her hair has a reach of 5 feet plus 5 feet per 4 witch levels. She can use her hair to make combat maneuver checks using her Intelligence modifier in place of Strength.",
      },
      {
        name: 'Hair Hex',
        level: 1,
        description:
          'As a swift action after hitting a creature with her hair, the white-haired witch can deliver a hex to that creature without requiring an additional touch attack or standard action.',
      },
      {
        name: 'Strangle',
        level: 2,
        description:
          'When the white-haired witch successfully grapples a creature with her hair, the target is also silenced and unable to cast spells with verbal components. Spellcasting requires a concentration check (DC 20 + spell level) while strangled.',
      },
      {
        name: 'Iron Locks',
        level: 4,
        description:
          "The white-haired witch's hair becomes supernaturally tough. It gains DR 5/slashing and any creature trying to cut it must deal more than 5 damage with a single slashing attack to sever a strand. She gains a +4 bonus on combat maneuver checks made with her hair.",
      },
      {
        name: 'Hair Bind',
        level: 6,
        description:
          'As a full-round action, the white-haired witch can attempt to bind a creature with her hair, imposing the pinned condition. She can maintain this binding as a free action each round while her hair is extended and she is adjacent.',
      },
      {
        name: 'Deadly Locks',
        level: 8,
        description:
          "The white-haired witch's hair attacks deal 1d6 damage plus her Intelligence modifier and are treated as magical weapons for the purpose of overcoming damage reduction.",
      },
      {
        name: 'Greater Hair',
        level: 10,
        description:
          "The reach of the white-haired witch's hair extends to 10 feet plus 5 feet per 4 witch levels, and she can make two attacks with her hair per attack action. She also gains the grab special attack with her hair.",
      },
    ],
    source: 'Ultimate Magic',
  },

  // ──────────────────────────────────────────────
  // 18. Winter Witch
  // ──────────────────────────────────────────────
  {
    name: 'Winter Witch',
    className: 'Witch',
    description:
      'The winter witch has made a pact with the ancient spirits of cold, gaining powers tied to ice and snow. She is most commonly found in the frozen wastes of the north, though her icy touch can be felt anywhere the temperature drops. She must replace certain hexes with cold-themed powers.',
    replacedFeatures: ['Hex (2nd)', 'Hex (4th)', 'Hex (8th)', 'Major Hex (14th)'],
    modifiedFeatures: ['Patron', 'Familiar'],
    newFeatures: [
      {
        name: 'Cold Flesh',
        level: 1,
        description:
          'The winter witch gains cold resistance 5 that increases to cold resistance 10 at 8th level. She is treated as having the cold subtype for the purposes of spells and effects. Creatures that touch her or strike her with natural weapons take 1 point of cold damage per 2 witch levels.',
      },
      {
        name: 'Ice Magic',
        level: 1,
        description:
          'The winter witch adds all cold-descriptor spells from any spell list to her witch spells at the same spell level. She gains a +2 bonus to caster level with cold spells and the save DCs of her cold spells increase by 1.',
      },
      {
        name: 'Snowsight',
        level: 2,
        description:
          'The winter witch gains the ability to see perfectly in conditions of snow and ice, including blizzards and magical snowstorms. She ignores miss chances from snow, sleet, and ice and takes no penalties from cold environments.',
      },
      {
        name: 'Freeze Hex',
        level: 4,
        description:
          'When the winter witch applies any hex, she can cause ice to form on the target. The target must succeed on a Fortitude save or take 1d4 cold damage and have its movement speed reduced by 10 feet for 1 round per witch level.',
      },
      {
        name: "Winter's Chill",
        level: 8,
        description:
          'The winter witch emanates a supernatural cold aura in a 10-foot radius. All creatures in this area take 1d4 cold damage per round and must succeed on a Fortitude save each round or become fatigued. Cold-subtype creatures are immune.',
      },
      {
        name: 'Heart of Ice',
        level: 14,
        description:
          'The winter witch gains immunity to cold and vulnerability to fire. Once per day, she can create an effect identical to ice storm, control weather (cold or winter effects only), or freezing sphere as a spell-like ability at her caster level.',
      },
    ],
    source: "Pathfinder Campaign Setting: The Reign of Winter Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 19. Witch of the Veil
  // ──────────────────────────────────────────────
  {
    name: 'Witch of the Veil',
    className: 'Witch',
    description:
      'The witch of the veil has bargained with spirits that exist between life and death, gaining the ability to perceive and interact with the spiritual world. She is an intermediary between the living and the dead, and her hexes frequently involve the manipulation of souls.',
    replacedFeatures: ['Hex (4th)', 'Hex (8th)', 'Major Hex (14th)'],
    modifiedFeatures: ['Familiar', 'Patron'],
    newFeatures: [
      {
        name: 'Veil Sight',
        level: 1,
        description:
          'The witch of the veil can see incorporeal creatures and the spiritual echoes of the dead as if using see invisibility. She can communicate with undead and recently deceased spirits (within 1 hour per witch level of death) without requiring a spell.',
      },
      {
        name: 'Spirit Touch',
        level: 4,
        description:
          "The witch of the veil's touch attacks and hexes affect incorporeal creatures normally, ignoring the 50% miss chance. Her familiar also gains the ability to interact with incorporeal creatures.",
      },
      {
        name: 'Soul Bind',
        level: 8,
        description:
          'Once per day, the witch of the veil can attempt to bind the soul of a dying creature (at -1 or fewer hit points) to her service. If the target fails a Will save, it becomes a ghost under her control upon death, serving her for up to 1 year before passing on.',
      },
      {
        name: 'Veil Walk',
        level: 14,
        description:
          'The witch of the veil can shift into the Ethereal Plane as a move action for up to 1 minute per witch level per day. While in the Ethereal Plane, she can observe but not interact with the Material Plane except through her hexes, which function normally across the planar boundary.',
      },
    ],
    source: 'Pathfinder Player Companion: Haunted Heroes Handbook',
  },

  // ──────────────────────────────────────────────
  // 20. Cartomancer
  // ──────────────────────────────────────────────
  {
    name: 'Cartomancer',
    className: 'Witch',
    description:
      'The cartomancer delivers her magic through a deck of harrow cards rather than via a traditional familiar. She can hurl cards as weapons and draws power from the mystical symbols printed on each card, making her a unique blend of martial and magical combatant.',
    replacedFeatures: ['Familiar'],
    modifiedFeatures: ['Patron'],
    newFeatures: [
      {
        name: 'Harrowed',
        level: 1,
        description:
          'The cartomancer uses a harrow deck in place of a familiar to store her spells. The deck functions as a familiar for determining how many spells she can store, but does not move or act independently. She adds the harrowed spell list to her available patron spells.',
      },
      {
        name: 'Card Casting',
        level: 1,
        description:
          'The cartomancer can deliver touch spells by throwing a card (ranged touch attack, range 30 feet). Once per day per witch level, she can sacrifice a card to add 1d4 force damage to a delivered touch spell. The card is destroyed after use.',
      },
      {
        name: 'Hand of the Harrow',
        level: 5,
        description:
          "The cartomancer can spend 10 minutes reading a creature's harrow fortune, granting that creature a +2 luck bonus on one type of saving throw for 24 hours. At 11th level, she can read the fortune in 1 minute, and at 17th level as a standard action.",
      },
    ],
    source: 'Pathfinder Player Companion: The Harrow Handbook',
  },

  // ──────────────────────────────────────────────
  // 21. Demon Witch (Riftcarver)
  // ──────────────────────────────────────────────
  {
    name: 'Riftcarver',
    className: 'Witch',
    description:
      'The riftcarver has sold part of her soul to demonic powers, trading orthodox witchcraft for the raw destructive force of the Abyss. She tears open the fabric of reality to draw on demonic energy, but risks corruption with each use.',
    replacedFeatures: ['Hex (4th)', 'Hex (8th)', 'Hex (12th)', 'Grand Hex (20th)'],
    modifiedFeatures: ['Patron', 'Familiar'],
    newFeatures: [
      {
        name: 'Abyssal Patron',
        level: 1,
        description:
          'The riftcarver gains the Abyssal patron spell list. She gains resist electricity 5 and resist fire 5 as supernatural abilities. Her familiar gains the fiendish template.',
      },
      {
        name: 'Rift Strike',
        level: 4,
        description:
          'As a standard action, the riftcarver can tear a small rift to the Abyss in a 15-foot line. All creatures in the line take 1d6 fire damage plus 1d6 acid damage per 2 witch levels (Reflex half). This tears a temporary scar that counts as difficult terrain for 1 round.',
      },
      {
        name: 'Demonic Resilience',
        level: 8,
        description:
          'The riftcarver gains DR 5/cold iron or good and immunity to poison. She also gains a +2 profane bonus on saving throws against mind-affecting effects.',
      },
      {
        name: 'Call Demon',
        level: 12,
        description:
          "Once per day, the riftcarver can call a demon whose CR is equal to or less than her witch level -2 through a planar rift. The demon arrives in 1d4 rounds and is not automatically controlled; she must make a Charisma check (DC 15 + demon's CR) to bind it for 1 hour per witch level.",
      },
    ],
    source: "Pathfinder Player Companion: Demon Hunter's Handbook",
  },

  // ──────────────────────────────────────────────
  // 22. Sea Witch
  // ──────────────────────────────────────────────
  {
    name: 'Sea Witch',
    className: 'Witch',
    description:
      'The sea witch draws her power from the vast, unknowable depths of the ocean, wielding water magic and storms with the ease of breathing. Her familiar is inevitably an aquatic creature, and her hexes have a nautical, elemental flavor.',
    replacedFeatures: ['Hex (4th)', 'Hex (8th)', 'Major Hex (14th)'],
    modifiedFeatures: ['Familiar', 'Patron'],
    newFeatures: [
      {
        name: "Ocean's Familiar",
        level: 1,
        description:
          'The sea witch must choose an aquatic creature as her familiar. She gains a swim speed equal to her land speed and can breathe water as well as air. Her familiar can also breathe air, allowing it to accompany her out of water.',
      },
      {
        name: 'Storm Call',
        level: 4,
        description:
          'The sea witch can call a storm as a standard action, creating severe wind conditions in a 60-foot-radius area centered on herself for a number of rounds equal to her witch level. This functions as a storm that deals 1d6 bludgeoning damage per round to unprotected creatures (Fortitude negates).',
      },
      {
        name: 'Watery Grave',
        level: 8,
        description:
          'Once per day, the sea witch can target a creature within 30 feet and cause water to fill its lungs. The target must succeed on a Fortitude save or begin drowning immediately, even if not in water. This effect lasts for 1 round per witch level or until the target succeeds on two consecutive Fortitude saves.',
      },
      {
        name: 'Maelstrom',
        level: 14,
        description:
          'Once per day, the sea witch can create a spinning vortex of water and wind in a 30-foot-radius area. All creatures in the area must succeed on a Strength check (DC 10 + half witch level + Intelligence modifier) or be swept up and carried 30 feet in a random direction, taking 4d6 bludgeoning damage.',
      },
    ],
    source: 'Pathfinder Player Companion: Pirates of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // 23. Scarred Witch Doctor
  // ──────────────────────────────────────────────
  {
    name: 'Scarred Witch Doctor',
    className: 'Witch',
    description:
      'Practiced among orc tribes, the scarred witch doctor channels her power through ritual scars carved into her flesh. She uses Constitution rather than Intelligence as her primary spellcasting attribute, and her magic is tied to physical sacrifice and tribal ritual.',
    replacedFeatures: [
      'Hex (2nd)',
      'Hex (4th)',
      'Hex (6th)',
      'Hex (8th)',
      'Hex (10th)',
      'Hex (14th)',
      'Hex (18th)',
    ],
    modifiedFeatures: ['Patron', 'Familiar'],
    newFeatures: [
      {
        name: 'Constitution-Based Magic',
        level: 1,
        description:
          'The scarred witch doctor uses her Constitution modifier in place of her Intelligence modifier for all witch class features, including bonus spells per day, spell DCs, hex DCs, and the number of spells stored in her familiar. She must still meet the Intelligence prerequisite for the witch class.',
      },
      {
        name: 'Scarification',
        level: 1,
        description:
          'At each even level, the scarred witch doctor carves a ritual scar into her flesh, gaining either a hex or one of a list of special abilities related to tribal endurance, including fast healing 1 (active for a number of rounds per day equal to her witch level), DR 1/—, or additional hit points.',
      },
      {
        name: 'Tribal Curse',
        level: 2,
        description:
          'The scarred witch doctor gains a pool of hexes tied to tribal magic, replacing many of her standard hex selections. These tribal hexes emphasize battle curses, endurance, and ferocity rather than enchantment or divination.',
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 24. Toad Witch
  // ──────────────────────────────────────────────
  {
    name: 'Toad Witch',
    className: 'Witch',
    description:
      'The toad witch has embraced a grotesque aesthetic of poison, filth, and batrachian transformation. Her familiar is always a toad or similar amphibian, and her hexes poison, disease, and transform her victims into helpless animals.',
    replacedFeatures: ['Hex (2nd)', 'Hex (6th)', 'Hex (10th)'],
    modifiedFeatures: ['Familiar'],
    newFeatures: [
      {
        name: 'Toxic Familiar',
        level: 1,
        description:
          'The toad witch must choose a toad, frog, or similar amphibian as her familiar. Her familiar secretes mild contact poison (Fort DC 10 + half witch level + Intelligence modifier; 1d2 Constitution damage). She gains a +2 bonus on saves against poison.',
      },
      {
        name: 'Hex of Transformation',
        level: 2,
        description:
          'The toad witch can target a creature with a hex that attempts to transform it into a toad (as baleful polymorph). This hex requires a Will save and can only target a specific creature once per day. Unlike standard hexes, this does not benefit from the misfortune hex.',
      },
      {
        name: 'Slime Trail',
        level: 6,
        description:
          'The toad witch can exude a layer of slippery, caustic slime as a free action, coating a 5-foot square adjacent to her. Creatures entering this square must succeed on a Reflex save or fall prone and take 1d4 acid damage per 2 witch levels.',
      },
      {
        name: 'Plague Touch',
        level: 10,
        description:
          'Once per day, the toad witch can infect a touched creature with a supernatural disease as a standard action. The disease deals 1d4 Constitution damage per day (Fortitude negates) and has a frequency of once per day.',
      },
    ],
    source: 'Blood of the Coven',
  },

  // ──────────────────────────────────────────────
  // 25. Hex Breaker Witch
  // ──────────────────────────────────────────────
  {
    name: 'Hex Breaker',
    className: 'Witch',
    description:
      'The hex breaker specializes in unraveling and countering the magic of other spellcasters, particularly other witches. She sacrifices some offensive hexes in exchange for powerful dispelling and counterspell abilities.',
    replacedFeatures: ['Hex (4th)', 'Hex (8th)', 'Hex (12th)', 'Major Hex (16th)'],
    modifiedFeatures: ['Familiar'],
    newFeatures: [
      {
        name: 'Counter Hex',
        level: 1,
        description:
          "The hex breaker can attempt to counterspell as an immediate action once per day per 4 witch levels. She can use dispel magic as a counterspell option even if she has not prepared it, drawing from her patron's connection.",
      },
      {
        name: 'Unraveling',
        level: 4,
        description:
          'The hex breaker can suppress a magical effect on a target by touching it and succeeding on a caster level check (DC 11 + caster level of the effect). If successful, the effect is suppressed for 1 minute per witch level. This functions as a standard action.',
      },
      {
        name: 'Hex Immunity',
        level: 8,
        description:
          'The hex breaker is immune to hexes from witches of lower level than herself. She also gains a +4 bonus on saving throws against hexes from witches of equal or higher level.',
      },
      {
        name: 'Steal Magic',
        level: 12,
        description:
          'Once per day, when the hex breaker successfully dispels a spell on a creature, she can absorb the dispelled magic and store it in her familiar. She can release this stored spell as if she had prepared it for up to 24 hours.',
      },
    ],
    source: 'Pathfinder Player Companion: Arcane Anthology',
  },

  // ──────────────────────────────────────────────
  // 26. Shadow Witch
  // ──────────────────────────────────────────────
  {
    name: 'Shadow Witch',
    className: 'Witch',
    description:
      'The shadow witch has made her pact in the darkness between planes, drawing power from the Shadow Plane and the cold void between stars. She steps through shadows, shapes illusions from darkness, and her hexes chill the soul as much as the body.',
    replacedFeatures: ['Hex (4th)', 'Hex (8th)', 'Major Hex (14th)'],
    modifiedFeatures: ['Patron', 'Familiar'],
    newFeatures: [
      {
        name: 'Shadow Sight',
        level: 1,
        description:
          'The shadow witch gains darkvision 60 feet (or extends existing darkvision by 30 feet). She can see through magical darkness as if it were dim light. She adds all shadow spells from the wizard/sorcerer spell list to her witch spell list.',
      },
      {
        name: 'Shadow Walk',
        level: 4,
        description:
          'The shadow witch can use shadow walk as a spell-like ability once per day per 4 witch levels. Additionally, she can use dimension door as a spell-like ability by stepping through a shadow, but only if both origin and destination are in dim light or darkness.',
      },
      {
        name: 'Shadowhex',
        level: 8,
        description:
          'When applying a hex in conditions of dim light or darkness, the shadow witch does not need line of effect — she can route the hex through shadows. She also adds the frightened condition as a secondary effect to any hex she applies in darkness.',
      },
      {
        name: 'Shadow Form',
        level: 14,
        description:
          'Once per day, the shadow witch can assume a shadow form for 1 minute per witch level, becoming incorporeal and gaining a +4 bonus to Dexterity and a deflection bonus to AC equal to her Intelligence modifier. She can end this form as a free action.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 27. Unlettered Arcanist
  // ──────────────────────────────────────────────
  {
    name: 'Unlettered Arcanist',
    className: 'Witch',
    description:
      'The unlettered arcanist draws spontaneously from her witch spells known rather than preparing them each day, functioning as a hybrid between witch and sorcerer. She sacrifices some flexibility for the ability to cast any known spell on the fly.',
    replacedFeatures: ['Hex (4th)', 'Hex (10th)', 'Major Hex (16th)'],
    modifiedFeatures: ['Familiar', 'Spellcasting'],
    newFeatures: [
      {
        name: 'Spontaneous Witch Magic',
        level: 1,
        description:
          'The unlettered arcanist gains spontaneous spellcasting as per the sorcerer, but draws from the witch spell list. She gains spells known as a sorcerer of her witch level. Her familiar still stores her spells known, but she no longer needs to prepare individual spells — she may cast any known spell a number of times per day determined by her spell slots.',
      },
      {
        name: 'Expanded Arcana',
        level: 4,
        description:
          'The unlettered arcanist can learn additional spells from scrolls or spellbooks, adding them to her spells known. She can learn one additional spell per witch level from any arcane spell list by spending 24 hours with the source material.',
      },
      {
        name: 'Greater Spontaneity',
        level: 10,
        description:
          "The unlettered arcanist can use metamagic feats without increasing the casting time, as per the sorcerer's ability. She must wait a number of rounds equal to the spell level adjustment before using the same metamagic feat again.",
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 28. Veneficus Witch
  // ──────────────────────────────────────────────
  {
    name: 'Veneficus Witch',
    className: 'Witch',
    description:
      'The veneficus witch is a specialist in poisons, toxins, and venoms, blending witchcraft with apothecary lore. She can deliver poisons through her hexes and spells and is supernaturally resistant to all toxins herself.',
    replacedFeatures: ['Hex (2nd)', 'Hex (6th)', 'Hex (14th)'],
    modifiedFeatures: ['Familiar'],
    newFeatures: [
      {
        name: 'Toxic Familiar',
        level: 1,
        description:
          "The veneficus witch's familiar gains a natural poison that it can deliver with its touch or bite. The poison deals 1d2 Constitution damage per round for 2 rounds (Fortitude negates). She gains a +2 bonus on Craft (alchemy) checks to create poisons.",
      },
      {
        name: 'Hex Poison',
        level: 2,
        description:
          'When the veneficus witch delivers a hex, she can also inject a dose of any poison she is carrying into the target (if the hex requires a touch attack). The target takes the effects of both the hex and the poison simultaneously.',
      },
      {
        name: 'Poison Immunity',
        level: 6,
        description:
          'The veneficus witch becomes completely immune to all poisons, including magical and supernatural ones. She can also neutralize poison in any substance she touches as a free action.',
      },
      {
        name: 'Master Poisoner',
        level: 14,
        description:
          'The veneficus witch can create exotic magical poisons as full-round actions. These poisons have DCs equal to 10 + her witch level + her Intelligence modifier and can replicate the effects of any compulsion or mind-affecting spell of 4th level or lower.',
      },
    ],
    source: 'Pathfinder Player Companion: Potions and Poisons',
  },

  // ──────────────────────────────────────────────
  // 29. Pact Witch
  // ──────────────────────────────────────────────
  {
    name: 'Pact Witch',
    className: 'Witch',
    description:
      "The pact witch has formalized her relationship with her patron into a binding magical contract, gaining more defined and powerful boons at the cost of being bound to specific obligations. Her patron's power is greater but its demands are also more explicit.",
    replacedFeatures: ['Hex (6th)', 'Hex (14th)', 'Grand Hex (18th)'],
    modifiedFeatures: ['Patron', 'Familiar'],
    newFeatures: [
      {
        name: 'Formal Pact',
        level: 1,
        description:
          "The pact witch's patron grants her a specific and powerful boon in exchange for a binding obligation. She gains one of a list of powerful patron boons (SR equal to 11 + witch level, a permanent fly speed, or a powerful spell-like ability usable 3/day) but must fulfill a specific patron demand (alignment restriction, regular sacrifice, or quest obligation).",
      },
      {
        name: 'Pact Power',
        level: 6,
        description:
          "The pact witch's formal pact deepens, granting her a second boon from her patron. She gains a +2 bonus on caster level checks and her patron spells are treated as one spell level higher for purposes of dispelling.",
      },
      {
        name: 'Pact Fulfilled',
        level: 14,
        description:
          'The pact witch reaches the culmination of her patron agreement, gaining a capstone boon chosen from a powerful list: the ability to cast wish once per year, a permanent ethereal form at will, or the ability to grant pacts to others as if she were a patron.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Occult Mysteries',
  },

  // ──────────────────────────────────────────────
  // 30. Ash Witch
  // ──────────────────────────────────────────────
  {
    name: 'Ash Witch',
    className: 'Witch',
    description:
      'The ash witch dwells among ruins and deals in entropy, drawing power from destruction and the remnants of what once was. Her magic accelerates decay and she can read the past of objects and places through their destruction.',
    replacedFeatures: ['Hex (2nd)', 'Hex (8th)', 'Major Hex (12th)'],
    modifiedFeatures: ['Patron', 'Familiar'],
    newFeatures: [
      {
        name: 'Read the Ashes',
        level: 1,
        description:
          'By sifting through the ashes or rubble of a destroyed object or location, the ash witch can learn the history of what was there and how it was destroyed. This functions as stone tell but applies to any material, and provides information about the last 1 year per witch level.',
      },
      {
        name: 'Ash Hex',
        level: 2,
        description:
          'When the ash witch delivers a hex, she can choose to coat the target in ash and cinders. The target takes a -2 penalty on all Charisma-based skill checks and is treated as if it had been marked by the burning hands spell for tracking purposes.',
      },
      {
        name: 'Crumbling Touch',
        level: 8,
        description:
          'Once per day per 4 witch levels, the ash witch can touch an object or creature and cause rapid aging and decay. Objects take 1d6 hit points of damage per witch level (ignoring hardness). Creatures must succeed on a Fortitude save or gain 1d4 negative levels.',
      },
      {
        name: 'Rain of Ash',
        level: 12,
        description:
          'Once per day, the ash witch can call down a rain of smothering ash in a 30-foot-radius spread that persists for 1 minute. Creatures in the area are blinded and must succeed on a Fortitude save each round or be nauseated.',
      },
    ],
    source: 'Pathfinder Player Companion: Wilderness Origins',
  },
];
