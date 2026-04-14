import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const CHAMPIONS_FEATS: FeatDefinition[] = [
  // ==================== CHAMPIONS OF PURITY ====================
  // Already in database (skipped): Believer's Boon, Channel Endurance, Ultimate Mercy, Phalanx Fighter

  {
    id: 'summon_good_monster',
    name: 'Summon Good Monster',
    description:
      'You can summon good-aligned creatures using summon monster spells. When you summon creatures from the expanded good-aligned list, those creatures gain the Diehard feat as a bonus feat. You can still summon standard creatures from the summon monster list without this benefit.',
    shortDescription:
      'Summon good-aligned creatures with summon monster; summoned creatures gain Diehard',
    source: 'Champions of Purity',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must be good alignment' },
      { type: 'special', description: 'Ability to cast summon monster I or higher' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['summoning', 'good', 'divine', 'celestial'],
  },

  {
    id: 'sacred_summons_cop',
    name: 'Sacred Summons',
    description:
      'When your divine aura matches the alignment subtype of the creature you are summoning, you can summon that creature as a standard action rather than with a 1-round casting time. Creatures summoned this way cannot act until your next turn, but they are not flat-footed and can make attacks of opportunity.',
    shortDescription: 'Summon creatures matching your divine aura as a standard action',
    source: 'Champions of Purity',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'aura class feature' },
      { type: 'special', description: 'Ability to cast summon monster III or higher' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'divine', 'good', 'aura'],
  },

  {
    id: 'serenity',
    name: 'Serenity',
    description:
      'You draw upon a sense of inner calm to bolster your will. You may use your Wisdom modifier in place of your Charisma modifier on any Charisma-based skill checks and Charisma-based ability checks. This does not affect the save DCs of any abilities, spells, or effects that use Charisma.',
    shortDescription: 'Use Wisdom instead of Charisma on Charisma-based skill and ability checks',
    source: 'Champions of Purity',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'special', description: 'Must be good or neutral alignment' },
    ],
    effects: [
      {
        type: 'ability_substitution',
        bonusType: BonusType.UNTYPED,
        target: 'skills.charisma_based',
        value: 'WIS',
        source: 'Serenity',
      },
    ],
    activationMode: 'passive',
    tags: ['wisdom', 'charisma', 'skill', 'good'],
  },

  {
    id: 'sense_sin',
    name: 'Sense Sin',
    description:
      'You are sensitive to the taint of evil and can sense when someone is lying or concealing sinful deeds. You gain a +4 bonus on Sense Motive checks to detect deception, and you can use Sense Motive as a move action instead of a standard action when attempting to detect a lie.',
    shortDescription:
      '+4 on Sense Motive to detect lies; use Sense Motive as a move action for deception',
    source: 'Champions of Purity',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'skill', skillId: 'sense_motive', ranks: 3 },
      { type: 'special', description: 'Must be good alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'skills.sense_motive',
        value: 4,
        source: 'Sense Sin',
        condition: { type: 'custom', params: {}, description: 'When detecting deception or lies' },
      },
    ],
    activationMode: 'conditional',
    tags: ['sense motive', 'deception', 'good', 'divine'],
  },

  {
    id: 'holy_guile',
    name: 'Holy Guile',
    description:
      'You can use deception in the service of good without moral compromise. You add your Wisdom modifier as a bonus on Bluff checks in addition to your Charisma modifier. Furthermore, you do not lose paladin levels or cleric domains for using Bluff in service of your faith.',
    shortDescription: 'Add Wisdom to Bluff checks; no alignment penalty for good-faith deception',
    source: 'Champions of Purity',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'skill', skillId: 'bluff', ranks: 3 },
      { type: 'special', description: 'Must be good alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.bluff',
        value: 'WIS',
        source: 'Holy Guile',
        condition: {
          type: 'custom',
          params: {},
          description: 'Adds Wisdom modifier to Bluff checks',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['bluff', 'wisdom', 'deception', 'good', 'divine'],
  },

  {
    id: 'inner_light',
    name: 'Inner Light',
    description:
      'Your spirit radiates a divine light that can reveal hidden evil. You can use detect evil as a spell-like ability at will, with a caster level equal to your character level. This ability is always active but requires your focus to process the information.',
    shortDescription: 'Use detect evil at will as a spell-like ability',
    source: 'Champions of Purity',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 11 },
      { type: 'special', description: 'Must be good alignment' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['good', 'divine', 'detection', 'spell-like'],
  },

  {
    id: 'charitable_sacrifice',
    name: 'Charitable Sacrifice',
    description:
      'When an adjacent ally is struck by an attack that would deal damage, you can spend an immediate action to take half the damage in their stead. The ally takes the other half. You must be willing and aware of the attack to use this ability.',
    shortDescription: "Take half of an adjacent ally's damage as an immediate action",
    source: 'Champions of Purity',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Must be good alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['protection', 'good', 'sacrifice', 'ally'],
  },

  {
    id: 'shining_beacon',
    name: 'Shining Beacon',
    description:
      'Your presence inspires hope in your allies and strikes fear in evil foes. Whenever you channel positive energy, all evil creatures within the burst must make a Will save (DC equals your channel DC) or become shaken for 1 round. This is a mind-affecting fear effect.',
    shortDescription:
      'Channeling positive energy shakes evil creatures within the burst on failed Will save',
    source: 'Champions of Purity',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel positive energy' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Must be good alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['channel energy', 'good', 'fear', 'divine'],
  },

  {
    id: 'righteous_healing_cop',
    name: 'Righteous Healing',
    description:
      'When you cast a cure spell on an ally, if that ally shares your good alignment, they recover additional hit points equal to your Wisdom modifier. This bonus applies to any instantaneous cure spell you cast as long as the target is a good-aligned living creature.',
    shortDescription:
      'Cure spells heal additional HP equal to Wisdom modifier on good-aligned targets',
    source: 'Champions of Purity',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'special', description: 'Must be good alignment' },
      { type: 'special', description: 'Ability to cast cure spells' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['healing', 'cure', 'good', 'wisdom', 'divine'],
  },

  {
    id: 'ray_of_light',
    name: 'Ray of Light',
    description:
      'You can channel your divine light into a ray that blinds evil creatures. As a standard action, you may fire a ray of light up to 30 feet as a ranged touch attack. If it strikes an evil creature, that creature is blinded for 1 round (no save). On subsequent rounds the creature is dazzled for 1 minute.',
    shortDescription:
      'Fire a ray that blinds evil creatures for 1 round; dazzled 1 minute afterward',
    source: 'Champions of Purity',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must be good alignment' },
      { type: 'class_feature', featureName: 'channel positive energy' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['light', 'good', 'blind', 'ranged', 'divine'],
  },

  // ==================== CHAMPIONS OF CORRUPTION ====================
  // Already in database (skipped): None currently
  // NOTE: Ally Shield, Callous Casting, Splash Volley, Wild Flanking already exist in teamworkFeats.ts
  // (attributed to Pathfinder Society Field Guide). The CoC betrayal versions below use _coc suffix
  // because their mechanics differ (the CoC versions are explicitly "betrayal" feats that harm allies).

  // ── Damnation Feats ────────────────────────────────────────────────────────
  // Damnation feats scale based on how many damnation feats you have.
  // Core prerequisite: evil alignment + a fiendish patron with an outsider subtype.

  {
    id: 'fiendskin',
    name: 'Fiendskin',
    description:
      'Your connection to your fiendish patron grants you energy resistance that scales with your devotion. (1 damnation feat) Gain resistance 5 to one energy type your patron resists; (2 feats) Add resistance 5 to another energy type; (3 feats) Gain immunity to one energy type your patron resists; (4 feats) Your creature type becomes outsider (native) and you gain immunity to one energy type your patron has immunity to.',
    shortDescription: 'Scale energy resistance/immunity based on total damnation feats possessed',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['damnation'],
    prerequisites: [
      { type: 'special', description: 'Must be evil alignment' },
      { type: 'special', description: 'Must have a fiendish patron with an outsider subtype' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'resistances.energy',
        value: 5,
        source: 'Fiendskin',
        condition: {
          type: 'custom',
          params: {},
          description:
            'Resistance to one energy type your patron resists (scales with damnation feats)',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['damnation', 'evil', 'fiendish', 'energy resistance'],
  },

  {
    id: 'maleficium',
    name: 'Maleficium',
    description:
      'Your evil magic grows more potent through corruption. (1 damnation feat) +1 to DCs of saving throws against spells with the evil descriptor; (2 feats) Metamagic applied to evil spells uses spell slots one level lower than normal (minimum one level above base); (3 feats) Additional +1 to evil descriptor DCs (total +2); (4 feats) Treat your caster level as 2 higher for level-dependent effects of evil-descriptor spells.',
    shortDescription:
      'Evil descriptor spells gain higher DCs, cheaper metamagic, and greater effective caster level',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['damnation'],
    prerequisites: [
      { type: 'special', description: 'Must be evil alignment' },
      { type: 'special', description: 'Must have a fiendish patron with an outsider subtype' },
      { type: 'special', description: 'Ability to cast spells with the evil descriptor' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'spells.evil_descriptor_dc',
        value: 1,
        source: 'Maleficium',
        condition: {
          type: 'custom',
          params: {},
          description: 'DC bonus to evil descriptor spells (scales with damnation feats)',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['damnation', 'evil', 'spellcasting', 'dc', 'metamagic'],
  },

  {
    id: 'mask_of_virtue',
    name: 'Mask of Virtue',
    description:
      'You can hide your true alignment from detection magic. (1 damnation feat) Alignment detection yields inconclusive results; (2 feats) Choose a false alignment within one step of your true alignment — all detection reveals this instead; (3 feats) Choose a false alignment within two steps; (4 feats) Know when someone attempts to detect your alignment, learn their identity and alignment, and choose any alignment as the reported result. You can also use magic items restricted to your false alignment.',
    shortDescription:
      'Conceal true alignment from detection; effectiveness scales with damnation feat count',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['damnation'],
    prerequisites: [
      { type: 'special', description: 'Must be evil alignment' },
      { type: 'special', description: 'Must have a fiendish patron with an outsider subtype' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['damnation', 'evil', 'deception', 'alignment', 'detection'],
  },

  {
    id: 'soulless_gaze_coc',
    name: 'Soulless Gaze',
    description:
      'Your cold, dead eyes spread fear. Benefits scale with damnation feats: (1 feat) +2 bonus on Intimidate checks; (2 feats) You can escalate fear conditions when demoralizing a creature a second time, rather than merely extending duration; (3 feats) Additional +2 bonus on Intimidate (total +4); (4 feats) You can demoralize opponents as a swift action instead of a standard action.',
    shortDescription:
      'Scale Intimidate bonuses and fear escalation based on number of damnation feats',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['damnation'],
    prerequisites: [
      { type: 'special', description: 'Must be evil alignment' },
      { type: 'special', description: 'Must have a fiendish patron with an outsider subtype' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.intimidate',
        value: 2,
        source: 'Soulless Gaze',
      },
    ],
    activationMode: 'passive',
    tags: ['damnation', 'evil', 'intimidate', 'fear', 'demoralize'],
  },

  // ── Betrayal Feats ─────────────────────────────────────────────────────────
  // Betrayal feats are a CoC-specific subtype of teamwork feats where you
  // gain benefits at your ally's expense. IDs suffixed _coc to distinguish
  // from similar-named teamwork feats already in teamworkFeats.ts.

  {
    id: 'ally_shield_coc',
    name: 'Ally Shield',
    description:
      "When you are targeted by a melee or ranged attack and an adjacent ally also has this feat, you can use an immediate action to use your ally as a shield, gaining cover against that attack. If the attack would have hit you but misses due to your cover bonus, your ally becomes the new target and the attacker must make a new attack roll (with all the same modifiers) against the ally's AC.",
    shortDescription:
      'Use an adjacent ally as cover; missed attacks redirect to the ally (Champions of Corruption)',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['general', 'teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['betrayal', 'teamwork', 'cover', 'evil', 'defense'],
  },

  {
    id: 'callous_casting_coc',
    name: 'Callous Casting',
    description:
      "When you cast a damaging spell that includes an ally in its area of effect, the spell's blast psychologically affects your enemies. Any enemy caught in the area who fails their saving throw is shaken for 1 round per spell level. The targeted ally gains an immediate action to move up to their speed (this movement counts against the ally's movement on their next turn).",
    shortDescription:
      'Damaging area spells affecting allies shake enemies on failed save; ally gets free move',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['general', 'teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'spellcraft', ranks: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['betrayal', 'teamwork', 'spellcasting', 'fear', 'evil'],
  },

  {
    id: 'friendly_fire_betrayal',
    name: 'Friendly Fire',
    description:
      "When an ally who also has this feat is in melee with an enemy and within your ranged attack's path, you can fire through your ally's space to gain a +2 bonus on the ranged attack roll. If the attack misses the intended target, you must make a second attack roll against your ally's AC; if that roll succeeds, the ally takes the damage. The target also provokes an attack of opportunity from the ally after the attack resolves.",
    shortDescription:
      "+2 on ranged attacks through an ally's space; misses may hit the ally instead",
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'feat', featId: 'precise_shot' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.ranged',
        value: 2,
        source: 'Friendly Fire',
        condition: {
          type: 'custom',
          params: {},
          description: 'When firing through an ally with this feat',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['betrayal', 'teamwork', 'ranged', 'evil', 'combat'],
  },

  {
    id: 'reckless_moves',
    name: 'Reckless Moves',
    description:
      'When adjacent to an ally who also has this feat, you gain a +4 bonus on Acrobatics, Climb, and Stealth checks while your ally takes a –2 penalty on those same skills. As an immediate action when falling or being knocked prone, you may swap positions with the ally — both end up prone unless they succeed at a DC 20 Acrobatics check. If falling, your ally falls instead of you.',
    shortDescription:
      '+4 to Acrobatics/Climb/Stealth (ally takes –2); swap positions when falling as an immediate action',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['general', 'teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'acrobatics', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.acrobatics',
        value: 4,
        source: 'Reckless Moves',
        condition: {
          type: 'custom',
          params: {},
          description: 'When adjacent to ally with this feat (ally takes –2 penalty)',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['betrayal', 'teamwork', 'acrobatics', 'stealth', 'evil'],
  },

  {
    id: 'splash_volley_coc',
    name: 'Splash Volley',
    description:
      "When you miss throwing a splash weapon into a square within an ally's reach (an ally who also has this feat), rather than rolling randomly for where it lands, the ally may redirect it as an immediate action by making a melee touch attack against an adjacent enemy. If the touch attack succeeds, the splash weapon lands adjacent to that enemy instead.",
    shortDescription:
      "Missed splash weapons redirected by ally's melee touch attack (Champions of Corruption)",
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['betrayal', 'teamwork', 'splash weapon', 'thrown', 'evil'],
  },

  {
    id: 'wild_flanking_coc',
    name: 'Wild Flanking',
    description:
      "When you and an ally who also has this feat are flanking an opponent, you can make reckless attacks that deal bonus damage equal to the Power Attack bonus for your attack roll penalty. Your attack roll is compared against both your enemy's and your ally's AC. Hitting the enemy deals the bonus damage; if you would have hit the ally, the ally takes only the bonus damage. A single attack can hit both, and the extra damage stacks with Power Attack.",
    shortDescription:
      'Flanking grants Power Attack-style bonus damage; reckless attacks may also hit the ally',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['betrayal', 'teamwork', 'flanking', 'damage', 'evil', 'combat'],
  },

  // ── Other CoC Feats ─────────────────────────────────────────────────────────

  {
    id: 'summon_evil_monster',
    name: 'Summon Evil Monster',
    description:
      'You can summon evil-aligned creatures using summon monster spells. When you summon a creature from the expanded evil-aligned list, you may cast the spell as a standard action instead of the normal 1-round casting time. The creature cannot act until your next turn, but it is not flat-footed and can make attacks of opportunity. If you also have the Sacred Summons feat, you may apply it to evil creatures whose alignment matches your aura.',
    shortDescription:
      'Summon evil-aligned creatures as a standard action; creature acts on your next turn',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must be evil alignment' },
      { type: 'special', description: 'Ability to cast summon monster I or higher' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['summoning', 'evil', 'fiendish', 'demon', 'devil', 'daemon'],
  },

  {
    id: 'vile_leadership',
    name: 'Vile Leadership',
    description:
      'You attract a villainous cohort and cowed followers, similar to the Leadership feat. Your Vile Leadership score works like a Leadership score, but ruthlessness increases it (+2 for a cruel reputation, +1 for eliminating superiors) while mercy decreases it (–2 per act of compassion). All cohorts and followers must be affiliated with your evil organization. Taking this feat prevents you from selecting the Leadership feat.',
    shortDescription:
      'Attract evil followers and cohort; cruelty increases Vile Leadership score, mercy decreases it',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'level', minimum: 7 },
      { type: 'special', description: 'Must have good standing with an evil organization' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['evil', 'leadership', 'followers', 'cohort', 'organization'],
  },

  {
    id: 'bloody_mess_coc',
    name: 'Bloody Mess',
    description:
      'You revel in spectacular gore, using your own wounds to intimidate foes. When you take piercing, slashing, or bleed damage equal to or greater than double your character level, you can make an Intimidate check as an immediate action to demoralize your attacker (if within 30 feet). If the damage came from a critical hit, a successful Intimidate check inflicts the sickened condition rather than shaken.',
    shortDescription:
      'Take heavy damage to Intimidate attacker as an immediate action; crits cause sickened instead',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'skill_focus_intimidate' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'intimidate', 'demoralize', 'fear', 'combat'],
  },

  {
    id: 'blinding_flash_coc',
    name: 'Blinding Flash',
    description:
      'You can use a polished weapon or shield to reflect bright light and temporarily dazzle enemies. As a move action, you direct a reflected flash at one creature within 30 feet as a ranged gaze attack. The target must succeed at a Fortitude save (DC 10 + half your character level + your Dexterity modifier) or be dazzled for 1 round. This has no effect on blinded creatures or creatures that do not rely on sight.',
    shortDescription:
      'Reflect bright light to dazzle one creature within 30 ft on failed Fortitude save',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'dazzle', 'light', 'combat', 'gaze'],
  },

  {
    id: 'corrupt_bargain',
    name: 'Corrupt Bargain',
    description:
      'You can form dark pacts with evil outsiders. When you summon or call an evil outsider, the creature is treated as one Hit Die lower for the purpose of breaking free of your control. Additionally, if you have no remaining uses of a binding or controlling ability, you may bargain with the outsider, offering it a service in exchange for cooperation for up to 1 hour.',
    shortDescription:
      'Summoned evil outsiders harder to break free; bargain for cooperation when control uses are spent',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_planes', ranks: 5 },
      { type: 'special', description: 'Must be evil alignment' },
      { type: 'special', description: 'Ability to cast summon monster IV or planar binding' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'summoning', 'outsider', 'bargain', 'binding'],
  },

  {
    id: 'hellish_shackles_coc',
    name: 'Hellish Shackles',
    description:
      "You can bind a creature's soul with invisible chains of dark energy. When you successfully deal sneak attack damage or use a touch attack while channeling negative energy, you may attempt to shackle the target as a free action. The shackled creature takes a –2 penalty on saving throws against spells and effects you create for 1 minute. A successful Will save (DC 10 + half your character level + your Charisma modifier) negates the shackling.",
    shortDescription:
      'Sneak attack or negative energy touch shackles target: –2 on their saves vs. your abilities for 1 min',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Must be evil alignment' },
      {
        type: 'special',
        description: 'Sneak attack class feature or ability to channel negative energy',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'debuff', 'negative energy', 'devil', 'saving throw'],
  },

  {
    id: 'infernal_wound',
    name: 'Infernal Wound',
    description:
      'Your strikes leave wounds that bleed with hellish fire. When you deal slashing or piercing damage to a creature with a manufactured weapon, the wound causes the target to bleed (1d6 fire damage per round) until the wound is healed magically or a successful DC 15 Heal check is made. A single creature can suffer from only one infernal wound at a time.',
    shortDescription:
      'Slashing/piercing attacks cause 1d6 fire bleed damage per round until magically healed',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Must be evil alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'bleed', 'fire', 'combat', 'devil'],
  },

  {
    id: 'spread_disease',
    name: 'Spread Disease',
    description:
      "You can use your touch to deliberately spread disease. As a standard action, you may make a melee touch attack to infect a creature with a disease you are currently carrying or immune to. The target must succeed at a Fortitude save against the disease's DC or become infected. You can use this ability once per day.",
    shortDescription:
      'Touch attack transmits a carried disease; target saves or becomes infected (1/day)',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Must currently carry a disease or have immunity to a disease',
      },
      { type: 'special', description: 'Must be evil alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'disease', 'touch attack', 'poison'],
  },

  {
    id: 'sickening_strike_coc',
    name: 'Sickening Strike',
    description:
      'Your blows leave opponents wracked with nausea. When you make a full-attack action, you may choose one of your successful attacks; the target must succeed at a Fortitude save (DC 10 + half your character level + your Strength modifier) or become sickened for 1 round. A creature that succeeds at this save cannot be affected by your Sickening Strike for 24 hours.',
    shortDescription:
      'One attack per full attack sickens the target on a failed Fortitude save for 1 round',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Must be evil alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'sickened', 'combat', 'melee', 'debuff'],
  },

  {
    id: 'damnable_lie',
    name: 'Damnable Lie',
    description:
      'You are supernaturally skilled at lying, and your deceptions carry a taint of dark magic. When you successfully lie to a creature (as determined by the GM), that creature must succeed at a Will save (DC 10 + half your character level + your Charisma modifier) or believe the lie for 24 hours, even in the face of contradictory evidence. Creatures with Wisdom 15 or higher get a +4 bonus on this save.',
    shortDescription:
      'Successful lies force a Will save; target believes the lie for 24 hours on failure',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
      { type: 'skill', skillId: 'bluff', ranks: 7 },
      { type: 'special', description: 'Must be evil alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'bluff', 'deception', 'mind-affecting', 'social'],
  },

  {
    id: 'painful_trick',
    name: 'Painful Trick',
    description:
      'You add extra suffering to the humiliation of being tricked. When you successfully use the dirty trick combat maneuver to impose a condition, the target also takes 1d4 points of nonlethal damage per two character levels you possess. Additionally, the target takes a –2 morale penalty on attack rolls against you while it suffers the imposed condition.',
    shortDescription:
      'Dirty trick also deals 1d4 nonlethal per 2 levels and –2 morale penalty on attacks vs. you',
    source: 'Champions of Corruption',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_dirty_trick' },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'special', description: 'Must be evil alignment' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['evil', 'dirty trick', 'combat maneuver', 'debuff', 'nonlethal'],
  },
];
