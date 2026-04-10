import { RulesetService } from '@services/RulesetService';
import type { Ruleset } from '@/types/ruleset';

jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  doc: jest.fn(),
  getDocs: jest.fn(),
  getDoc: jest.fn(),
  addDoc: jest.fn(),
  updateDoc: jest.fn(),
  deleteDoc: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
}));

jest.mock('@config/firebase', () => ({ db: {} }));

const mockFirestore = require('firebase/firestore');

const baseRuleset: Ruleset = {
  id: 'test-ruleset-1',
  name: 'Test Ruleset',
  visibility: 'private',
  ownerId: 'user-123',
  allowedSources: ['pf1e-official'],
  optionalRules: {
    heroPoints: false,
    gestalt: false,
    fractionalBABSaves: false,
    variantMulticlassing: false,
    eitrMode: 'off',
    relaxedEntry: false,
    mythic: false,
    pathOfWarMechanics: false,
    tomeOfBattleMechanics: false,
    crTemplates: true,
    laTemplates: true,
    crRefunds: false,
    laBuyback: false,
    crLaAbilityScoreReductions: true,
  },
  itemOverrides: { banned: [], allowed: [] },
  campaignRequirements: {},
  validationSettings: {
    abilityScoreMethod: 'point-buy',
    pointBuyBudget: 20,
    maxTraits: 2,
    minTraits: 0,
  },
  version: 1,
  createdAt: '2026-04-09T00:00:00.000Z',
  updatedAt: '2026-04-09T00:00:00.000Z',
};

describe('RulesetService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getUserRulesets', () => {
    it('returns rulesets from the user subcollection', async () => {
      mockFirestore.collection.mockReturnValue({});
      mockFirestore.getDocs.mockResolvedValue({
        docs: [{ id: 'test-ruleset-1', data: () => ({ ...baseRuleset }) }],
      });

      const result = await RulesetService.getUserRulesets('user-123');
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('test-ruleset-1');
      expect(result[0].name).toBe('Test Ruleset');
    });

    it('returns empty array when no rulesets exist', async () => {
      mockFirestore.collection.mockReturnValue({});
      mockFirestore.getDocs.mockResolvedValue({ docs: [] });

      const result = await RulesetService.getUserRulesets('user-123');
      expect(result).toEqual([]);
    });
  });

  describe('getGlobalPresets', () => {
    it('returns only global-visibility rulesets', async () => {
      mockFirestore.collection.mockReturnValue({});
      mockFirestore.query.mockReturnValue({});
      mockFirestore.where.mockReturnValue({});
      mockFirestore.getDocs.mockResolvedValue({
        docs: [
          {
            id: 'preset-pf1e-standard',
            data: () => ({ ...baseRuleset, id: 'preset-pf1e-standard', visibility: 'global' }),
          },
        ],
      });

      const result = await RulesetService.getGlobalPresets();
      expect(result).toHaveLength(1);
      expect(result[0].visibility).toBe('global');
    });
  });

  describe('getRuleset', () => {
    it('returns ruleset when it exists', async () => {
      mockFirestore.doc.mockReturnValue({});
      mockFirestore.getDoc.mockResolvedValue({
        exists: () => true,
        id: 'test-ruleset-1',
        data: () => ({ ...baseRuleset }),
      });

      const result = await RulesetService.getRuleset('user-123', 'test-ruleset-1');
      expect(result).not.toBeNull();
      expect(result?.id).toBe('test-ruleset-1');
    });

    it('returns null when ruleset does not exist', async () => {
      mockFirestore.doc.mockReturnValue({});
      mockFirestore.getDoc.mockResolvedValue({ exists: () => false });

      const result = await RulesetService.getRuleset('user-123', 'missing-id');
      expect(result).toBeNull();
    });
  });

  describe('createRuleset', () => {
    it('creates a ruleset with version 1 and timestamps', async () => {
      mockFirestore.collection.mockReturnValue({});
      mockFirestore.addDoc.mockResolvedValue({ id: 'new-ruleset-id' });

      const { id: _id, version: _v, createdAt: _c, updatedAt: _u, ...input } = baseRuleset;

      const result = await RulesetService.createRuleset('user-123', input);

      expect(result.id).toBe('new-ruleset-id');
      expect(result.version).toBe(1);
      expect(result.createdAt).toBeTruthy();
      expect(result.updatedAt).toBeTruthy();
    });
  });

  describe('updateRuleset', () => {
    it('increments version and updates updatedAt', async () => {
      mockFirestore.doc.mockReturnValue({});
      mockFirestore.getDoc.mockResolvedValue({
        exists: () => true,
        id: 'test-ruleset-1',
        data: () => ({ ...baseRuleset }),
      });
      mockFirestore.updateDoc.mockResolvedValue(undefined);

      const result = await RulesetService.updateRuleset('user-123', 'test-ruleset-1', {
        name: 'Updated Name',
      });

      expect(result.version).toBe(2);
      expect(result.name).toBe('Updated Name');
    });

    it('throws when ruleset not found', async () => {
      mockFirestore.doc.mockReturnValue({});
      mockFirestore.getDoc.mockResolvedValue({ exists: () => false });

      await expect(
        RulesetService.updateRuleset('user-123', 'missing-id', { name: 'X' }),
      ).rejects.toThrow('Ruleset not found: missing-id');
    });
  });

  describe('deleteRuleset', () => {
    it('calls deleteDoc', async () => {
      mockFirestore.doc.mockReturnValue({});
      mockFirestore.deleteDoc.mockResolvedValue(undefined);

      await RulesetService.deleteRuleset('user-123', 'test-ruleset-1');
      expect(mockFirestore.deleteDoc).toHaveBeenCalledTimes(1);
    });
  });

  describe('syncCharacterRuleset', () => {
    it('returns the campaign ruleset as the new snapshot', () => {
      const campaignRuleset: Ruleset = {
        ...baseRuleset,
        id: 'campaign-ruleset',
        name: 'Campaign Rules',
        version: 5,
      };

      const result = RulesetService.syncCharacterRuleset(baseRuleset, campaignRuleset);

      expect(result.id).toBe('campaign-ruleset');
      expect(result.name).toBe('Campaign Rules');
      expect(result.version).toBe(5);
    });
  });
});
