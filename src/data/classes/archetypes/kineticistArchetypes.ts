import { ArchetypeData } from '../types';

export const KINETICIST_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Blood Kineticist
  // ──────────────────────────────────────────────
  {
    name: 'Blood Kineticist',
    className: 'Kineticist',
    description:
      'The blood kineticist wields the element of blood itself as a kinetic force, drawing power from the vital fluid that flows through living creatures. She trades the standard elemental focus for blood as her element, gaining unique blasts and wild talents themed around hemorrhage, transfusion, and sanguine manipulation.',
    replacedFeatures: ['Elemental Focus', 'Elemental Defense'],
    modifiedFeatures: ['Kinetic Blast', 'Burn', 'Wild Talents'],
    newFeatures: [
      {
        name: 'Blood Element',
        level: 1,
        description:
          'The blood kineticist selects blood as her element, gaining the blood blast as a kinetic blast (dealing 1d6+1 negative energy damage per 2 kineticist levels, scaling as a standard kinetic blast). Blood blasts can only target living creatures with blood and ignore hardness and damage reduction not derived from DR/—.',
      },
      {
        name: 'Sanguine Shield',
        level: 2,
        description:
          'As her elemental defense, the blood kineticist can harden her own blood into a protective barrier as a move action, accepting 1 point of burn. The hardened blood grants a deflection bonus to AC equal to her Constitution modifier, lasting until the start of her next turn or until she is critically hit.',
      },
      {
        name: 'Hemorrhage',
        level: 6,
        description:
          'The blood kineticist can apply the hemorrhage infusion to her blood blasts. A creature struck by this infusion must succeed at a Fortitude save (DC = blast DC) or take bleed damage equal to her Constitution modifier at the start of each of its turns. Multiple applications do not stack but reset the duration.',
      },
      {
        name: 'Vital Transfer',
        level: 10,
        description:
          'Once per day, the blood kineticist can drain life force from a willing or helpless creature, accepting 2 points of burn to deal 4d6 negative energy damage to the target and heal herself for the same amount. At 14th level, she can use this ability on any creature struck by her blood blast.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 2. Dark Elementalist
  // ──────────────────────────────────────────────
  {
    name: 'Dark Elementalist',
    className: 'Kineticist',
    description:
      'The dark elementalist draws elemental power not from her own body but from the suffering of others, channeling pain and anguish into kinetic energy. She replaces the burn system entirely, instead accepting burn as psychic anguish inflicted on nearby creatures rather than suffering it herself.',
    replacedFeatures: ['Burn', 'Infusion Specialization', 'Supercharge'],
    modifiedFeatures: ['Kinetic Blast', 'Wild Talents', 'Metakinesis'],
    newFeatures: [
      {
        name: 'Dark Sacrifice',
        level: 1,
        description:
          'The dark elementalist does not accept burn herself. Instead, she can inflict 1 point of burn on any willing or helpless creature within 30 feet as a free action. The sacrificed creature takes nonlethal damage equal to the burn amount times her kineticist level. She may not inflict more than 3 points of burn per creature per round.',
      },
      {
        name: 'Psychic Drain',
        level: 4,
        description:
          'When the dark elementalist inflicts burn via Dark Sacrifice, she gains a number of temporary hit points equal to twice the amount of burn inflicted, lasting for 1 hour. These temporary hit points do not stack but can be refreshed.',
      },
      {
        name: 'Corrupted Infusion',
        level: 7,
        description:
          "The dark elementalist's kinetic blasts can be shaped by the anguish of sacrificed creatures. When she inflicts at least 2 points of burn via Dark Sacrifice in the same round she uses a blast, she may apply one infusion without reducing the blast's damage as if using Infusion Specialization.",
      },
      {
        name: 'Font of Pain',
        level: 13,
        description:
          'The dark elementalist no longer requires willing or helpless targets for Dark Sacrifice; she can inflict burn on any creature within 30 feet that she can see, though unwilling creatures receive a Will save (DC 10 + half kineticist level + Charisma modifier) to negate the burn infliction.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 3. Elemental Annihilator
  // ──────────────────────────────────────────────
  {
    name: 'Elemental Annihilator',
    className: 'Kineticist',
    description:
      'The elemental annihilator forsakes the subtlety of wild talents entirely, focusing on delivering devastating kinetic blasts with maximum lethality. She trades all utility wild talents for enhanced martial abilities with her element, becoming a close-quarters elemental berserker who devastates foes in melee.',
    replacedFeatures: ['Wild Talents', 'Metakinesis', 'Supercharge'],
    modifiedFeatures: ['Kinetic Blast', 'Burn', 'Infusion Specialization'],
    newFeatures: [
      {
        name: 'Devastating Infusion',
        level: 1,
        description:
          'The elemental annihilator selects the kinetic blade infusion for free at 1st level and may use it without accepting burn. When using kinetic blade, she adds her Constitution modifier to damage rolls in addition to the normal modifiers, and may make a full attack using kinetic blade as a full-round action.',
      },
      {
        name: 'Annihilating Strike',
        level: 5,
        description:
          "When the elemental annihilator confirms a critical hit with kinetic blade, she may accept 1 additional point of burn to automatically apply any one infusion she knows to the strike without further increasing burn cost. The infusion's save DC increases by 2 when applied this way.",
      },
      {
        name: 'Elemental Brutality',
        level: 9,
        description:
          "The elemental annihilator's kinetic blade attacks ignore an amount of damage reduction and energy resistance equal to her Constitution modifier. Additionally, her kinetic blast damage dice increase by one step (d6 becomes d8, d8 becomes d10) when delivered via kinetic blade.",
      },
      {
        name: 'Perfect Annihilation',
        level: 17,
        description:
          'Once per day, the elemental annihilator may accept 4 points of burn to enter a state of elemental destruction for 1 minute. During this time, her kinetic blade attacks are automatically maximized, all infusion burn costs are reduced by 1 (minimum 0), and she gains DR 5/— from elemental energy sheathing her body.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 4. Elemental Ascetic
  // ──────────────────────────────────────────────
  {
    name: 'Elemental Ascetic',
    className: 'Kineticist',
    description:
      "The elemental ascetic channels kinetic power through the discipline of martial arts rather than raw elemental force, fusing kineticist talents with the monk's philosophy of bodily mastery. She uses Wisdom instead of Constitution for burn and many class features, and delivers blasts through unarmed strikes.",
    replacedFeatures: ['Elemental Defense', 'Infusion Specialization 3', 'Supercharge'],
    modifiedFeatures: ['Burn', 'Kinetic Blast', 'Wild Talents', 'Metakinesis'],
    newFeatures: [
      {
        name: 'Ascetic Burn',
        level: 1,
        description:
          'The elemental ascetic uses her Wisdom modifier in place of her Constitution modifier for all kineticist class features and abilities, including determining burn damage, kinetic blast damage bonuses, and the DCs of wild talents. She must still have a Constitution score to take burn.',
      },
      {
        name: 'Kinetic Fist',
        level: 1,
        description:
          'The elemental ascetic may deliver her kinetic blast through unarmed strikes without accepting burn to activate the kinetic blade infusion. She uses her monk unarmed strike damage (treating her kineticist level as her monk level) as the base for these strikes, adding her kinetic blast damage on top.',
      },
      {
        name: 'Monastic Training',
        level: 3,
        description:
          'The elemental ascetic gains Improved Unarmed Strike as a bonus feat. At 7th level she gains Stunning Fist, and at 11th level she gains Combat Reflexes. Her unarmed strikes count as magical for overcoming damage reduction and as the appropriate element for her chosen elemental focus.',
      },
      {
        name: 'One with the Element',
        level: 15,
        description:
          'The elemental ascetic can center herself as a swift action, reducing her total burn by 1 (minimum 0) per 10 minutes of uninterrupted meditation. Once per day, she can enter a state of elemental harmony for 1 round in which she neither gains nor suffers penalties from burn for any blasts used in that round.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 5. Kinetic Chirurgeon
  // ──────────────────────────────────────────────
  {
    name: 'Kinetic Chirurgeon',
    className: 'Kineticist',
    description:
      'The kinetic chirurgeon turns elemental power toward healing and restoration rather than destruction, becoming a powerful battlefield medic who channels kinetic energy to mend wounds and remove ailments. She trades offensive blast power for the ability to heal allies with kinetic energy.',
    replacedFeatures: ['Kinetic Blast', 'Metakinesis', 'Composite Blast'],
    modifiedFeatures: ['Burn', 'Wild Talents', 'Elemental Focus', 'Elemental Defense'],
    newFeatures: [
      {
        name: 'Kinetic Healer',
        level: 1,
        description:
          'The kinetic chirurgeon replaces her kinetic blast with a healing touch. As a standard action, she can touch a living creature and accept 1 point of burn to restore 1d6+1 hit points per kineticist level. She may choose to accept the burn herself or have the target accept it (willing targets only for the latter).',
      },
      {
        name: 'Restorative Surge',
        level: 3,
        description:
          "The kinetic chirurgeon can channel elemental energy to neutralize poisons and diseases. As a standard action accepting 1 point of burn, she can attempt to remove one poison or disease affecting a touched creature, succeeding automatically if her kineticist level equals or exceeds the effect's save DC.",
      },
      {
        name: 'Kinetic Regeneration',
        level: 7,
        description:
          'The kinetic chirurgeon can restore lost hit points rapidly by channeling sustained elemental energy. Accepting 2 points of burn, she can grant a creature fast healing equal to her Constitution modifier for a number of rounds equal to her kineticist level. This fast healing functions on creatures otherwise unable to benefit from magical healing.',
      },
      {
        name: 'True Restoration',
        level: 11,
        description:
          'Once per day, accepting 3 points of burn, the kinetic chirurgeon can replicate the effects of the restoration spell on a touched creature. At 15th level, she can replicate greater restoration, and at 19th level she can replicate true resurrection once per week by accepting 5 points of burn.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 6. Overwhelming Soul
  // ──────────────────────────────────────────────
  {
    name: 'Overwhelming Soul',
    className: 'Kineticist',
    description:
      'The overwhelming soul channels kinetic power through pure Charisma rather than physical endurance, projecting her elemental force through the strength of her personality. She uses Charisma instead of Constitution for burn and blast bonuses, and never risks lethal damage from burn, instead suffering emotional exhaustion.',
    replacedFeatures: ['Burn'],
    modifiedFeatures: ['Kinetic Blast', 'Wild Talents', 'Elemental Defense', 'Metakinesis'],
    newFeatures: [
      {
        name: 'Overwhelming Burn',
        level: 1,
        description:
          'The overwhelming soul uses her Charisma modifier in place of her Constitution modifier for all kineticist class features. When she accepts burn, instead of taking nonlethal damage, she becomes fatigued (or exhausted if already fatigued). She cannot become unconscious from burn and recovers from this fatigue after 1 hour of rest.',
      },
      {
        name: 'Force of Personality',
        level: 2,
        description:
          "The overwhelming soul's kinetic blasts add her Charisma modifier (instead of half her Constitution modifier) to damage rolls. Her wild talent DCs use her Charisma modifier in place of her Constitution modifier. She may use Charisma for all saves related to burn acceptance.",
      },
      {
        name: 'Indomitable Will',
        level: 6,
        description:
          "The overwhelming soul's sheer force of will protects her from elemental feedback. She gains a bonus on Will saving throws equal to half her kineticist level and is immune to fear effects. When she accepts burn and would become exhausted, she may spend a swift action to reduce the condition to fatigued instead.",
      },
      {
        name: 'Soul Overflow',
        level: 11,
        description:
          'Once per day as a free action, the overwhelming soul can release a surge of pure personality into her next kinetic blast, adding her full Charisma modifier to both the attack roll and damage of the blast. She automatically accepts 2 points of burn when using this ability.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 7. Psychokineticist
  // ──────────────────────────────────────────────
  {
    name: 'Psychokineticist',
    className: 'Kineticist',
    description:
      'The psychokineticist draws elemental power from pure mental force, bridging the kineticist and psychic traditions. She gains access to psychic spell-like abilities alongside her kinetic talents, trading some elemental mastery for mental powers that augment her battlefield control.',
    replacedFeatures: ['Expanded Element', 'Composite Blast', 'Omnikinesis'],
    modifiedFeatures: ['Burn', 'Wild Talents', 'Metakinesis'],
    newFeatures: [
      {
        name: 'Psychic Power',
        level: 1,
        description:
          'The psychokineticist gains a pool of psychic power points equal to her kineticist level + her Wisdom modifier. She can spend these points to use psychic spell-like abilities from the following list: mage hand (free), telekinetic projectile (1 point), telekinesis (3 points), and mind thrust I (1 point, scaling to mind thrust VI at 20th level).',
      },
      {
        name: 'Telekinetic Blast',
        level: 1,
        description:
          "In addition to her elemental blast, the psychokineticist can use a telekinetic blast as an alternative kinetic blast, dealing bludgeoning damage as a force effect. This blast uses objects within 30 feet as ammunition (dealing the object's base damage + kinetic blast dice) or functions as raw force if no suitable objects are available.",
      },
      {
        name: 'Mind over Matter',
        level: 5,
        description:
          'The psychokineticist can use her kinetic energy to augment mental actions. When she spends burn on a kinetic blast, she may add her Constitution modifier as a bonus on her next Intimidate, Bluff, or Will saving throw made within 1 minute.',
      },
      {
        name: 'Psychic Integration',
        level: 9,
        description:
          'The psychokineticist can combine psychic and kinetic power seamlessly. Once per round as a swift action, she may use one psychic spell-like ability and make a kinetic blast in the same round without the normal restrictions on using two standard-action abilities.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 8. Reliquarian
  // ──────────────────────────────────────────────
  {
    name: 'Reliquarian',
    className: 'Kineticist',
    description:
      'The reliquarian channels elemental power through sacred or infernal relics rather than through her own body, drawing kinetic energy from consecrated objects imbued with spiritual power. She trades self-sufficiency for the ability to channel enormous power through magical artifacts and relics.',
    replacedFeatures: ['Burn', 'Elemental Overflow'],
    modifiedFeatures: ['Wild Talents', 'Kinetic Blast', 'Elemental Defense'],
    newFeatures: [
      {
        name: 'Relic Bond',
        level: 1,
        description:
          'The reliquarian bonds with a relic — a magical object of at least 1,000 gp value — as a one-hour ritual. While holding or wearing this relic, she does not take nonlethal damage from burn; instead, the relic absorbs the burn up to its maximum capacity (equal to her kineticist level). A destroyed relic can be replaced with a new one-hour ritual.',
      },
      {
        name: 'Relic Overflow',
        level: 4,
        description:
          'As the relic absorbs burn, it begins to overflow with elemental energy, granting the reliquarian bonuses as per elemental overflow but based on the burn stored in the relic rather than personally accepted. These bonuses apply to her kinetic blasts and wild talents normally.',
      },
      {
        name: 'Channel Relic',
        level: 7,
        description:
          'The reliquarian can spend 1 point of stored relic burn as a swift action to gain one additional use of a utility wild talent she knows. She can also expend stored relic burn instead of accepting personal burn for any wild talent, at a rate of 1 stored burn per 1 required burn.',
      },
      {
        name: 'Relic Detonation',
        level: 13,
        description:
          'As a standard action, the reliquarian can overload her relic, releasing all stored burn in a devastating elemental explosion. The explosion deals 2d6 elemental damage per stored burn point in a 20-foot radius (Reflex DC 10 + half kineticist level + CON modifier for half). The relic is destroyed after this use.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 9. Soul Channeler
  // ──────────────────────────────────────────────
  {
    name: 'Soul Channeler',
    className: 'Kineticist',
    description:
      'The soul channeler harnesses elemental power from the souls of the dead rather than from the living elements themselves, blurring the line between kineticist and necromancer. She channels negative energy through her elemental blasts and gains abilities to interact with undead and spirits.',
    replacedFeatures: ['Elemental Defense', 'Expanded Element'],
    modifiedFeatures: ['Kinetic Blast', 'Burn', 'Wild Talents'],
    newFeatures: [
      {
        name: 'Soul Infusion',
        level: 1,
        description:
          "The soul channeler's kinetic blasts are suffused with soul energy, dealing half their damage as negative energy (the other half remains elemental). Undead are healed rather than harmed by her blasts' negative energy component. She can choose to suppress this trait as a free action.",
      },
      {
        name: 'Spirit Conduit',
        level: 2,
        description:
          'The soul channeler can perceive and communicate with incorporeal undead and spirits within 60 feet as a constant effect. Once per day per kineticist level, she can use speak with dead as a spell-like ability by channeling the soul of the deceased through her elemental connection.',
      },
      {
        name: 'Spectral Defense',
        level: 4,
        description:
          'The soul channeler summons the souls of the dead as a ghostly shield, gaining her elemental defense as a shroud of spectral forms. In addition to the normal defense bonus, she gains a 20% miss chance against physical attacks as the souls confuse attackers.',
      },
      {
        name: 'Soul Harvest',
        level: 10,
        description:
          'When the soul channeler kills a living creature with her kinetic blast, she can capture its departing soul as a free action, storing it for later use. She can have stored souls equal to her Wisdom modifier. A stored soul can be expended to reduce her burn by 1, heal her for 1d8 hit points, or power a utility wild talent without accepting burn.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 10. Storm Disciple
  // ──────────────────────────────────────────────
  {
    name: 'Storm Disciple',
    className: 'Kineticist',
    description:
      'The storm disciple specializes in the wild, chaotic power of storms, combining air and water elements into devastating meteorological fury. She replaces the rigid elemental focus system with a dual-element storm affinity, gaining access to lightning, wind, and rain-based wild talents earlier than normal.',
    replacedFeatures: ['Elemental Focus', 'Expanded Element 7'],
    modifiedFeatures: ['Kinetic Blast', 'Wild Talents', 'Elemental Defense', 'Metakinesis'],
    newFeatures: [
      {
        name: 'Storm Affinity',
        level: 1,
        description:
          "The storm disciple gains air as her primary element and water as a secondary element at 1st level (instead of waiting until 7th level for a second element). She may choose wild talents from either element list but treats herself as 4 levels lower when accessing the secondary element's higher-level talents.",
      },
      {
        name: 'Lightning Rod',
        level: 2,
        description:
          "The storm disciple's electric blasts crackle with greater intensity. She may add the thundering infusion (Pathfinder Roleplaying Game: Ultimate Combat) to her list of known infusions for free. Additionally, her electric blasts can chain to one additional target within 10 feet of the original target for half damage without increasing burn cost.",
      },
      {
        name: 'Eye of the Storm',
        level: 8,
        description:
          'The storm disciple creates a localized storm aura extending 20 feet from her position. Within this aura, ranged attacks by enemies suffer a 20% miss chance, flying creatures must make Fly checks (DC 20) each round or lose altitude, and her own kinetic blasts ignore wind-based penalties.',
      },
      {
        name: 'Tempest Form',
        level: 14,
        description:
          'Once per day accepting 3 points of burn, the storm disciple can transform into a semi-gaseous storm form for 1 minute per kineticist level. In this form she gains a fly speed of 60 feet (perfect maneuverability), DR 10/magic, immunity to electricity and cold, and her air and water blasts deal maximum damage.',
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 11. Void Elemental
  // ──────────────────────────────────────────────
  {
    name: 'Void Elemental',
    className: 'Kineticist',
    description:
      'The void elemental channels the terrifying power of the Dark Tapestry and the spaces between the stars, wielding void as her element. She gains access to the void element and its unique blasts of entropic and negative energy, trading traditional elemental focus for the corrosive emptiness of the outer void.',
    replacedFeatures: ['Elemental Focus', 'Elemental Defense'],
    modifiedFeatures: ['Kinetic Blast', 'Wild Talents', 'Expanded Element', 'Composite Blast'],
    newFeatures: [
      {
        name: 'Void Element',
        level: 1,
        description:
          'The void elemental selects void as her element, accessing the void blast (dealing negative energy damage, 1d6+1 per 2 kineticist levels) and gravity blast (dealing bludgeoning damage with the force descriptor, same scaling). The void blast heals undead and harms constructs and living creatures regardless of normal immunity.',
      },
      {
        name: 'Gravity Well',
        level: 2,
        description:
          'As her elemental defense, the void elemental creates a localized gravity distortion around herself. Creatures that move adjacent to her or start their turn adjacent to her must succeed at a Strength check (DC 10 + half kineticist level + CON modifier) or be unable to move away from her that round.',
      },
      {
        name: 'Void Sense',
        level: 5,
        description:
          "The void elemental's connection to the emptiness between stars grants her blindsense 30 feet and immunity to the blinded and dazzled conditions. She can see perfectly in any darkness, including magical darkness, and is unaffected by visual illusions that rely on light.",
      },
      {
        name: 'Entropic Blast',
        level: 11,
        description:
          "The void elemental's blasts carry entropic energy that disrupts the fundamental order of matter. Creatures damaged by her blasts must succeed on a Fortitude save or have one of their magical item properties suppressed for 1d4 rounds (chosen randomly). Constructs instead take an additional 2d6 damage.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 12. Kinetic Knight
  // ──────────────────────────────────────────────
  {
    name: 'Kinetic Knight',
    className: 'Kineticist',
    description:
      'The kinetic knight dons armor and wields a weapon sheathed in elemental power, combining martial prowess with kinetic abilities to become a formidable armored elemental warrior. She trades ranged blast options for enhanced melee kinetic abilities and the ability to use her powers in heavy armor.',
    replacedFeatures: ['Supercharge', 'Omnikinesis', 'Composite Blast'],
    modifiedFeatures: ['Kinetic Blast', 'Burn', 'Elemental Defense', 'Wild Talents'],
    newFeatures: [
      {
        name: 'Armored Kineticist',
        level: 1,
        description:
          'The kinetic knight can use her kineticist abilities while wearing heavy armor without incurring the arcane spell failure penalty that normally applies to her kinetic blasts and wild talents. She gains proficiency with heavy armor and martial weapons and adds her Constitution modifier to her CMD.',
      },
      {
        name: 'Elemental Weapon',
        level: 1,
        description:
          'The kinetic knight can sheathe her weapon in elemental energy as a swift action, causing her melee attacks to deal bonus elemental damage equal to half her kinetic blast dice (rounded down). She may dismiss this effect as a free action. The weapon counts as magical for overcoming damage reduction.',
      },
      {
        name: 'Shield of the Elements',
        level: 4,
        description:
          "The kinetic knight's elemental defense also generates a protective field around her shield (or her off hand if not using a shield). She gains an additional +2 shield bonus to AC from this elemental field, which stacks with the normal bonus of any shield she wields.",
      },
      {
        name: 'Kinetic Charge',
        level: 8,
        description:
          "When the kinetic knight charges, she can channel a full kinetic blast into her charge attack as part of the same action. The blast's damage is added to the melee attack damage, and she may apply one infusion of her choice to the combined attack without accepting additional burn.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 13. Kinetic Shinobi
  // ──────────────────────────────────────────────
  {
    name: 'Kinetic Shinobi',
    className: 'Kineticist',
    description:
      'The kinetic shinobi fuses elemental power with the art of stealth and assassination, using kinetic blasts as tools of quiet elimination rather than open combat. She trades some raw blast power for improved stealth capabilities and the ability to channel blasts through precision strikes.',
    replacedFeatures: ['Supercharge', 'Expanded Element', 'Omnikinesis'],
    modifiedFeatures: ['Kinetic Blast', 'Wild Talents', 'Burn'],
    newFeatures: [
      {
        name: 'Elemental Stealth',
        level: 1,
        description:
          'The kinetic shinobi adds Stealth to her list of class skills and gains a bonus on Stealth checks equal to half her kineticist level. She can suppress the visual and auditory manifestations of her elemental power as a free action, making her blasts and wild talents invisible and silent to observers beyond 30 feet.',
      },
      {
        name: 'Kinetic Sneak',
        level: 2,
        description:
          'When the kinetic shinobi makes a kinetic blast against a creature she is flanking or that is denied its Dexterity bonus to AC, she deals additional damage equal to 1d6 per 3 kineticist levels. This bonus damage is of the same element as her blast and is not multiplied on a critical hit.',
      },
      {
        name: 'Shadow Blast',
        level: 6,
        description:
          'The kinetic shinobi can compress her elemental power into nearly invisible forms. Once per day per 4 kineticist levels, she can make a ranged kinetic blast that is completely invisible and silent, granting her concealment (50% miss chance) from any blast-related counterattacks made in the same round.',
      },
      {
        name: 'Death Blast',
        level: 10,
        description:
          'Once per day, the kinetic shinobi can fire a kinetic blast designed to kill instantly. If the attack deals damage that would reduce the target to fewer than 0 hit points, the target must succeed at a Fortitude save (DC 15 + CON modifier + kineticist level) or die immediately. This effect does not function against creatures immune to death effects.',
      },
    ],
    source: "Pathfinder Player Companion: Elemental Master's Handbook",
  },
];
