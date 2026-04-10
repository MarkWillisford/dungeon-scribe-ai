import { DraftStateResolver } from '@services/DraftStateResolver';
import type { CharacterDraft } from '@/types/characterDraft';
import { Alignment } from '@/types/base';

// Mock class data so tests don't depend on the full class catalog
jest.mock('@/utils/characterComputations', () => ({
  computeTotalBAB: jest.fn((classes: { className: string; level: number }[]) => {
    // Fighter = Full BAB (1.0), Wizard = Low BAB (0.5), Rogue = Medium BAB (0.75)
    return classes.reduce((sum, c) => {
      if (c.className === 'Fighter') return sum + c.level;
      if (c.className === 'Wizard') return sum + Math.floor(c.level * 0.5);
      return sum + Math.floor(c.level * 0.75); // default (Rogue, etc.)
    }, 0);
  }),
  computeTotalBABFractional: jest.fn((classes: { className: string; level: number }[]) => {
    // Fractional: sum raw fractions, floor once
    const raw = classes.reduce((sum, c) => {
      if (c.className === 'Fighter') return sum + c.level;
      if (c.className === 'Wizard') return sum + c.level * 0.5;
      return sum + c.level * 0.75; // default (Rogue, etc.)
    }, 0);
    return Math.floor(raw);
  }),
  // Standard saves — +2 base bonus applied once per character if any class has Good progression.
  // Fighter/Cleric: Good Fort; Cleric/Wizard: Good Will; nobody: Good Ref (in this mock).
  computeBaseFort: jest.fn((classes: { className: string; level: number }[]) => {
    const hasGood = classes.some((c) => c.className === 'Fighter' || c.className === 'Cleric');
    const prog = classes.reduce((sum, c) => {
      if (c.className === 'Fighter' || c.className === 'Cleric') return sum + Math.floor(c.level / 2);
      return sum + Math.floor(c.level / 3);
    }, 0);
    return (hasGood ? 2 : 0) + prog;
  }),
  computeBaseRef: jest.fn(() => 0),
  computeBaseWill: jest.fn((classes: { className: string; level: number }[]) => {
    const hasGood = classes.some((c) => c.className === 'Cleric' || c.className === 'Wizard');
    const prog = classes.reduce((sum, c) => {
      if (c.className === 'Cleric' || c.className === 'Wizard') return sum + Math.floor(c.level / 2);
      return sum + Math.floor(c.level / 3);
    }, 0);
    return (hasGood ? 2 : 0) + prog;
  }),
  computeBaseFortFractional: jest.fn((classes: { className: string; level: number }[]) => {
    const hasGood = classes.some((c) => c.className === 'Fighter' || c.className === 'Cleric');
    const raw = classes.reduce((sum, c) => {
      if (c.className === 'Fighter' || c.className === 'Cleric') return sum + c.level / 2;
      return sum + c.level / 3;
    }, 0);
    return (hasGood ? 2 : 0) + Math.floor(raw);
  }),
  computeBaseRefFractional: jest.fn(() => 0),
  computeBaseWillFractional: jest.fn((classes: { className: string; level: number }[]) => {
    const hasGood = classes.some((c) => c.className === 'Cleric' || c.className === 'Wizard');
    const raw = classes.reduce((sum, c) => {
      if (c.className === 'Cleric' || c.className === 'Wizard') return sum + c.level / 2;
      return sum + c.level / 3;
    }, 0);
    return (hasGood ? 2 : 0) + Math.floor(raw);
  }),
  lookupClassData: jest.fn((className: string) => {
    const data: Record<string, { classFeatures: { name: string; level: number; description: string }[]; spellcasting: { type: string } }> = {
      Fighter: {
        classFeatures: [
          { name: 'Bonus Feat', level: 1, description: '' },
          { name: 'Bravery', level: 2, description: '' },
          { name: 'Armor Training 1', level: 3, description: '' },
        ],
        spellcasting: { type: 'None' },
      },
      Wizard: {
        classFeatures: [
          { name: 'Arcane Bond', level: 1, description: '' },
          { name: 'Arcane School', level: 1, description: '' },
        ],
        spellcasting: { type: 'Arcane' },
      },
      Cleric: {
        classFeatures: [
          { name: 'Aura', level: 1, description: '' },
          { name: 'Channel Energy', level: 1, description: '' },
        ],
        spellcasting: { type: 'Divine' },
      },
    };
    return data[className] ?? null;
  }),
}));

// ---- Helpers ----

function blankDraft(): CharacterDraft {
  return {
    name: 'Test Character',
    player: 'Test Player',
    raceId: 'human',
    raceName: 'Human',
    alignment: Alignment.TrueNeutral,
    deity: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    hair: '',
    eyes: '',
    skin: '',
    background: '',
    abilities: {
      str: { base: 16, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
      dex: { base: 12, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
      con: { base: 14, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
      int: { base: 10, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
      wis: { base: 10, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
      cha: { base: 8, racial: 0, inherent: 0, enhancement: 0, other: 0, levelIncrements: 0 },
    },
    levelIncrementSlots: [],
    classes: [],
    templates: [],
    combat: {
      currentHP: 10,
      nonlethalDamage: 0,
      tempHP: 0,
      acMiscBonus: 0,
      saveFortMisc: 0,
      saveRefMisc: 0,
      saveWillMisc: 0,
      meleeAttackMisc: 0,
      rangedAttackMisc: 0,
      cmbMisc: 0,
      speedLand: 30,
    },
    skills: {
      perception: { ranks: 5, misc: 0 },
      spellcraft: { ranks: 3, misc: 0 },
    },
    traits: [],
    featSlots: [],
    spellcastingPools: [],
    weapons: [],
    armor: [],
    magicItems: [],
    characterNotes: '',
    campaignNotes: '',
  };
}

// ---- Tests ----

describe('DraftStateResolver', () => {
  describe('buildTimeline', () => {
    it('single class: correct number of checkpoints', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 5, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const timeline = DraftStateResolver.buildTimeline(draft);

      expect(timeline.checkpoints).toHaveLength(5);
      expect(timeline.finalECL).toBe(5);
      expect(timeline.totalHD).toBe(5);
      expect(timeline.totalLA).toBe(0);
    });

    it('single class: all decisions are class type', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 3, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const timeline = DraftStateResolver.buildTimeline(draft);

      expect(timeline.checkpoints.every((c) => c.decision.type === 'class')).toBe(true);
    });

    it('single class: class levels increment correctly', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 3, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const timeline = DraftStateResolver.buildTimeline(draft);

      expect((timeline.checkpoints[0].decision as { classLevel: number }).classLevel).toBe(1);
      expect((timeline.checkpoints[1].decision as { classLevel: number }).classLevel).toBe(2);
      expect((timeline.checkpoints[2].decision as { classLevel: number }).classLevel).toBe(3);
    });

    it('multiclass: decisions expand in class order', () => {
      const draft = blankDraft();
      draft.classes = [
        { id: '1', className: 'Fighter', level: 3, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
        { id: '2', className: 'Wizard', level: 2, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
      ];

      const timeline = DraftStateResolver.buildTimeline(draft);

      expect(timeline.checkpoints).toHaveLength(5);
      expect(timeline.totalHD).toBe(5);
      expect((timeline.checkpoints[0].decision as { className: string }).className).toBe('Fighter');
      expect((timeline.checkpoints[3].decision as { className: string }).className).toBe('Wizard');
    });

    it('multiclass: BAB accumulates correctly across classes', () => {
      const draft = blankDraft();
      draft.classes = [
        { id: '1', className: 'Fighter', level: 5, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
        { id: '2', className: 'Wizard', level: 3, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
      ];

      const timeline = DraftStateResolver.buildTimeline(draft);

      // After Fighter 5 (ECL 5): BAB = 5 (full)
      const afterFighter5 = timeline.checkpoints[4].snapshot;
      expect(afterFighter5.classes.baseAttackBonus[0]).toBe(5);

      // After Wizard 3 (ECL 8): BAB = 5 + 1 = 6 (5 fighter + floor(3*0.5)=1 wizard)
      const afterWizard3 = timeline.checkpoints[7].snapshot;
      expect(afterWizard3.classes.baseAttackBonus[0]).toBe(6);
    });

    it('inherited LA template: first checkpoints are la_payment, HD stays 0', () => {
      const draft = blankDraft();
      draft.templates = [{
        id: 'tpl-1',
        templateId: 'half-dragon',
        templateName: 'Half-Dragon',
        appliedAs: 'LA',
        laValue: 3,
        acquired: 'inherited',
        isFreeGrant: false,
      }];
      draft.classes = [{ id: '1', className: 'Fighter', level: 2, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const timeline = DraftStateResolver.buildTimeline(draft);

      expect(timeline.checkpoints).toHaveLength(5);
      expect(timeline.totalLA).toBe(3);
      expect(timeline.totalHD).toBe(2);

      // First 3 checkpoints are LA payments
      expect(timeline.checkpoints[0].decision.type).toBe('la_payment');
      expect(timeline.checkpoints[1].decision.type).toBe('la_payment');
      expect(timeline.checkpoints[2].decision.type).toBe('la_payment');
      expect(timeline.checkpoints[0].hd).toBe(0);

      // Next 2 are class levels
      expect(timeline.checkpoints[3].decision.type).toBe('class');
      expect(timeline.checkpoints[3].hd).toBe(1);
    });

    it('free grant templates are ignored in LA computation', () => {
      const draft = blankDraft();
      draft.templates = [{
        id: 'tpl-1',
        templateId: 'celestial',
        templateName: 'Celestial Creature',
        appliedAs: 'CR',
        crValue: 1,
        isFreeGrant: true,
        freeGrantNote: 'DM granted',
      }];
      draft.classes = [{ id: '1', className: 'Fighter', level: 2, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const timeline = DraftStateResolver.buildTimeline(draft);

      expect(timeline.totalLA).toBe(0);
      expect(timeline.checkpoints).toHaveLength(2);
    });
  });

  describe('snapshot content', () => {
    it('ability scores reflect base values', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const timeline = DraftStateResolver.buildTimeline(draft);
      const snapshot = timeline.checkpoints[0].snapshot;

      expect(snapshot.abilityScores.str.total).toBe(16);
      expect(snapshot.abilityScores.dex.total).toBe(12);
      expect(snapshot.abilityScores.con.total).toBe(14);
    });

    it('ability scores apply level increments only up to current HD', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 8, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];
      draft.levelIncrementSlots = [
        { atHD: 4, ability: 'str' },
        { atHD: 8, ability: 'str' },
      ];

      const timeline = DraftStateResolver.buildTimeline(draft);

      // At HD 3 — no increments applied yet
      const at3 = timeline.checkpoints[2].snapshot;
      expect(at3.abilityScores.str.total).toBe(16);

      // At HD 4 — one increment applied
      const at4 = timeline.checkpoints[3].snapshot;
      expect(at4.abilityScores.str.total).toBe(17);

      // At HD 8 — two increments applied
      const at8 = timeline.checkpoints[7].snapshot;
      expect(at8.abilityScores.str.total).toBe(18);
    });

    it('class features filtered to current class level', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 3, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const timeline = DraftStateResolver.buildTimeline(draft);

      // At Fighter 1: only level-1 features
      const at1 = timeline.checkpoints[0].snapshot.classes.classes[0];
      expect(at1.classFeatures.every((f) => f.level <= 1)).toBe(true);

      // At Fighter 3: all features up to level 3
      const at3 = timeline.checkpoints[2].snapshot.classes.classes[0];
      expect(at3.classFeatures.some((f) => f.name === 'Armor Training 1')).toBe(true);
    });

    it('feats filtered by availableAtLevel <= ecl', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 5, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];
      draft.featSlots = [
        { id: 'f1', source: 'level', availableAt: 'Lvl 1', availableAtLevel: 1, featId: 'power-attack', featName: 'Power Attack', prereqOverride: false },
        { id: 'f2', source: 'level', availableAt: 'Lvl 3', availableAtLevel: 3, featId: 'cleave', featName: 'Cleave', prereqOverride: false },
        { id: 'f3', source: 'level', availableAt: 'Lvl 5', availableAtLevel: 5, featId: undefined, featName: undefined, prereqOverride: false },
      ];

      const timeline = DraftStateResolver.buildTimeline(draft);

      // At ECL 1: only feat from slot 1
      const at1 = timeline.checkpoints[0].snapshot.feats.feats;
      expect(at1).toHaveLength(1);
      expect(at1[0].featId).toBe('power-attack');

      // At ECL 3: feats from slots 1 and 2
      const at3 = timeline.checkpoints[2].snapshot.feats.feats;
      expect(at3).toHaveLength(2);

      // At ECL 5: slot 3 has no featId so still 2
      const at5 = timeline.checkpoints[4].snapshot.feats.feats;
      expect(at5).toHaveLength(2);
    });

    it('skills capped at currentHD — best-case assumption', () => {
      const draft = blankDraft();
      // draft has perception: 5, spellcraft: 3
      draft.classes = [{ id: '1', className: 'Fighter', level: 5, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const timeline = DraftStateResolver.buildTimeline(draft);

      // At HD 1: max possible ranks in any skill is 1
      expect(timeline.checkpoints[0].snapshot.skills['perception']?.ranks).toBe(1);
      expect(timeline.checkpoints[0].snapshot.skills['spellcraft']?.ranks).toBe(1);

      // At HD 3: spellcraft (total 3) fully available; perception (total 5) capped at 3
      expect(timeline.checkpoints[2].snapshot.skills['perception']?.ranks).toBe(3);
      expect(timeline.checkpoints[2].snapshot.skills['spellcraft']?.ranks).toBe(3);

      // At HD 5: perception (total 5) fully available
      expect(timeline.checkpoints[4].snapshot.skills['perception']?.ranks).toBe(5);
      expect(timeline.checkpoints[4].snapshot.skills['spellcraft']?.ranks).toBe(3);
    });

    it('race name passed from draft', () => {
      const draft = blankDraft();
      draft.raceName = 'Elf';
      draft.classes = [{ id: '1', className: 'Fighter', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const snapshot = DraftStateResolver.buildTimeline(draft).checkpoints[0].snapshot;
      expect(snapshot.info.race.name).toBe('Elf');
    });

    it('spellcasting pool created for casting classes', () => {
      const draft = blankDraft();
      draft.classes = [
        { id: '1', className: 'Fighter', level: 3, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
        { id: '2', className: 'Wizard', level: 2, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
      ];

      const timeline = DraftStateResolver.buildTimeline(draft);

      // After Fighter 3 (ECL 3): no spellcasting pools
      const at3 = timeline.checkpoints[2].snapshot.spellcasting.pools;
      expect(at3).toHaveLength(0);

      // After Wizard 1 (ECL 4): one pool, CL 1
      const at4 = timeline.checkpoints[3].snapshot.spellcasting.pools;
      expect(at4).toHaveLength(1);
      expect(at4[0].baseCasterLevel).toBe(1);
      expect(at4[0].baseClass).toBe('Wizard');

      // After Wizard 2 (ECL 5): CL 2
      const at5 = timeline.checkpoints[4].snapshot.spellcasting.pools;
      expect(at5[0].baseCasterLevel).toBe(2);
    });

    it('totalLevel reflects HD only, not ECL', () => {
      const draft = blankDraft();
      draft.templates = [{
        id: 'tpl-1',
        templateId: 'lycanthrope',
        templateName: 'Lycanthrope',
        appliedAs: 'LA',
        laValue: 2,
        acquired: 'inherited',
        isFreeGrant: false,
      }];
      draft.classes = [{ id: '1', className: 'Fighter', level: 3, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const timeline = DraftStateResolver.buildTimeline(draft);

      // ECL 2 (LA payment 2): HD still 0
      expect(timeline.checkpoints[1].hd).toBe(0);
      expect(timeline.checkpoints[1].snapshot.classes.totalLevel).toBe(0);

      // ECL 3 (Fighter 1): HD now 1
      expect(timeline.checkpoints[2].hd).toBe(1);
      expect(timeline.checkpoints[2].snapshot.classes.totalLevel).toBe(1);
    });
  });

  describe('snapshotAtECL', () => {
    it('returns correct snapshot at a given ECL', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 5, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const snapshot = DraftStateResolver.snapshotAtECL(draft, 3);
      expect(snapshot).not.toBeNull();
      expect(snapshot?.classes.totalLevel).toBe(3);
    });

    it('returns null for out-of-range ECL', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 3, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      expect(DraftStateResolver.snapshotAtECL(draft, 99)).toBeNull();
    });
  });

  describe('snapshotBeforeECL', () => {
    it('returns state at ECL-1', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 5, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const snapshot = DraftStateResolver.snapshotBeforeECL(draft, 4);
      // ECL-1 = 3, so Fighter 3 → totalLevel 3
      expect(snapshot?.classes.totalLevel).toBe(3);
    });

    it('returns null when ECL <= 1', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 3, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      expect(DraftStateResolver.snapshotBeforeECL(draft, 1)).toBeNull();
    });
  });

  describe('acquiredAtECL ordering', () => {
    it('acquired LA with acquiredAtECL is inserted at the specified position', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 4, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];
      draft.templates = [{
        id: 'tpl-1',
        templateId: 'werewolf',
        templateName: 'Werewolf',
        appliedAs: 'LA',
        laValue: 1,
        acquired: 'acquired',
        acquiredAtECL: 3,
        isFreeGrant: false,
      }];

      const timeline = DraftStateResolver.buildTimeline(draft);

      // Sequence: Fighter1, Fighter2, AcqLA(ECL3), Fighter3, Fighter4
      expect(timeline.checkpoints).toHaveLength(5);
      expect(timeline.checkpoints[0].decision).toMatchObject({ type: 'class', className: 'Fighter', classLevel: 1 });
      expect(timeline.checkpoints[1].decision).toMatchObject({ type: 'class', className: 'Fighter', classLevel: 2 });
      expect(timeline.checkpoints[2].decision).toMatchObject({ type: 'la_payment', templateName: 'Werewolf' });
      expect(timeline.checkpoints[3].decision).toMatchObject({ type: 'class', className: 'Fighter', classLevel: 3 });
      expect(timeline.checkpoints[4].decision).toMatchObject({ type: 'class', className: 'Fighter', classLevel: 4 });
    });

    it('acquired LA without acquiredAtECL appended at end', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 3, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];
      draft.templates = [{
        id: 'tpl-1',
        templateId: 'werewolf',
        templateName: 'Werewolf',
        appliedAs: 'LA',
        laValue: 1,
        acquired: 'acquired',
        isFreeGrant: false,
      }];

      const timeline = DraftStateResolver.buildTimeline(draft);

      // Sequence: Fighter1, Fighter2, Fighter3, AcqLA
      expect(timeline.checkpoints).toHaveLength(4);
      expect(timeline.checkpoints[3].decision.type).toBe('la_payment');
    });

    it('multi-LA acquired template with acquiredAtECL places payments consecutively', () => {
      const draft = blankDraft();
      draft.classes = [{ id: '1', className: 'Fighter', level: 5, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];
      draft.templates = [{
        id: 'tpl-1',
        templateId: 'half-dragon',
        templateName: 'Half-Dragon',
        appliedAs: 'LA',
        laValue: 2,
        acquired: 'acquired',
        acquiredAtECL: 3,
        isFreeGrant: false,
      }];

      const timeline = DraftStateResolver.buildTimeline(draft);

      // Sequence: F1, F2, LA(ECL3), LA(ECL4), F3, F4, F5
      expect(timeline.checkpoints).toHaveLength(7);
      expect(timeline.checkpoints[2].decision.type).toBe('la_payment');
      expect(timeline.checkpoints[3].decision.type).toBe('la_payment');
      expect(timeline.checkpoints[4].decision).toMatchObject({ type: 'class', classLevel: 3 });
    });
  });

  describe('fractional BAB', () => {
    it('standard BAB: each class contribution floored individually', () => {
      const draft = blankDraft();
      // Wizard 1 standard: floor(1 * 0.5) = 0
      draft.classes = [{ id: '1', className: 'Wizard', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false }];

      const timeline = DraftStateResolver.buildTimeline(draft);
      expect(timeline.checkpoints[0].snapshot.classes.baseAttackBonus[0]).toBe(0);
    });

    it('fractional BAB: sum fractions then floor, giving higher BAB for multiclass', () => {
      const draft = blankDraft();
      // Fighter 1 (full, 1.0) + Wizard 1 (low, 0.5) = 1.5 → floor = 1
      // Standard: floor(1) + floor(0.5) = 1 + 0 = 1 (same here)
      // Fighter 1 + Wizard 1 + Wizard 1 = 1.0 + 0.5 + 0.5 = 2.0 → floor = 2
      // Standard would be: 1 + floor(2*0.5) = 1 + 1 = 2 (also same)
      // Use a case that diverges: Fighter2/Wizard1 = 2+0=2 standard vs floor(2+0.5)=2 fractional
      // Rogue3/Wizard3 = floor(3*0.75)+floor(3*0.5) = 2+1=3 standard vs floor(3*0.75+3*0.5)=floor(2.25+1.5)=floor(3.75)=3
      // Rogue1/Wizard1 = floor(0.75)+floor(0.5)=0+0=0 standard vs floor(0.75+0.5)=floor(1.25)=1 fractional
      draft.classes = [
        { id: '1', className: 'Rogue', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
        { id: '2', className: 'Wizard', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
      ];

      const mockRuleset = { optionalRules: { fractionalBABSaves: true } } as Parameters<typeof DraftStateResolver.buildTimeline>[1];

      const standardTimeline = DraftStateResolver.buildTimeline(draft);
      const fractionalTimeline = DraftStateResolver.buildTimeline(draft, mockRuleset);

      const finalStandard = standardTimeline.checkpoints[1].snapshot.classes.baseAttackBonus[0];
      const finalFractional = fractionalTimeline.checkpoints[1].snapshot.classes.baseAttackBonus[0];

      // Standard: floor(0.75) + floor(0.5) = 0 + 0 = 0
      expect(finalStandard).toBe(0);
      // Fractional: floor(0.75 + 0.5) = floor(1.25) = 1
      expect(finalFractional).toBe(1);
    });
  });

  describe('saves in snapshot', () => {
    it('snapshot includes baseFortitude, baseReflex, baseWill', () => {
      const draft = blankDraft();
      draft.classes = [
        { id: '1', className: 'Fighter', level: 2, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
      ];

      const timeline = DraftStateResolver.buildTimeline(draft);
      const snapshot = timeline.checkpoints[1].snapshot; // after Fighter 2

      // Fighter has Good Fort: 2 + floor(2/2) = 3; Poor Ref: floor(2/3) = 0; Poor Will: floor(2/3) = 0
      expect(snapshot.classes.baseFortitude).toBe(3);
      expect(snapshot.classes.baseReflex).toBe(0);
      expect(snapshot.classes.baseWill).toBe(0);
    });

    it('fractional saves: sum fractions then floor', () => {
      const draft = blankDraft();
      // Rogue1/Wizard1: standard Will = floor(1/3)+floor(1/2)+2 = 0+0+2 = 2
      // Fractional Will: 2 + floor(1/3 + 1/2) = 2 + floor(0.83) = 2+0=2... same
      // Use Fighter1/Wizard1: Fort standard = 2+floor(1/2)+floor(1/3) = 2+0+0 = 2
      // Fractional Fort: 2 + floor(1/2 + 1/3) = 2 + floor(0.83) = 2 (same)
      // Fighter3/Wizard3: Fort standard = 2+floor(3/2)+floor(3/3) = 2+1+1 = 4
      // Fractional Fort: 2 + floor(3/2+3/3) = 2 + floor(1.5+1) = 2+2 = 4 (same)
      // Use Cleric1/Fighter1: Fort standard = 2+floor(1/2)+floor(1/2) = 2+0+0 = 2
      // Fractional: 2 + floor(0.5+0.5) = 2+1 = 3 — diverges!
      draft.classes = [
        { id: '1', className: 'Cleric', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
        { id: '2', className: 'Fighter', level: 1, sourceSystem: 'pf1e', classChoices: [], prereqOverride: false },
      ];

      const mockRuleset = { optionalRules: { fractionalBABSaves: true } } as Parameters<typeof DraftStateResolver.buildTimeline>[1];

      const standardTimeline = DraftStateResolver.buildTimeline(draft);
      const fractionalTimeline = DraftStateResolver.buildTimeline(draft, mockRuleset);

      const idx = standardTimeline.checkpoints.length - 1;
      // Standard Fort: Cleric(Good)=2+floor(1/2), Fighter(Good)=floor(1/2) = 2+0+0=2
      expect(standardTimeline.checkpoints[idx].snapshot.classes.baseFortitude).toBe(2);
      // Fractional Fort: 2 + floor(0.5+0.5) = 3
      expect(fractionalTimeline.checkpoints[idx].snapshot.classes.baseFortitude).toBe(3);
    });
  });
});
