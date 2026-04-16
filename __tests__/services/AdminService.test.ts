import { AdminService } from '@services/AdminService';

jest.mock('firebase/auth', () => ({
  getIdTokenResult: jest.fn(),
}));

jest.mock('@config/firebase', () => ({
  auth: { currentUser: null },
}));

const mockFirebaseAuth = require('firebase/auth');
const mockConfig = require('@config/firebase');

describe('AdminService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockConfig.auth.currentUser = null;
  });

  describe('isAdmin', () => {
    test('returns false and skips token fetch when no current user', async () => {
      mockConfig.auth.currentUser = null;

      const result = await AdminService.isAdmin();

      expect(result).toBe(false);
      expect(mockFirebaseAuth.getIdTokenResult).not.toHaveBeenCalled();
    });

    test('returns true when admin claim is true', async () => {
      const mockUser = { uid: 'admin-uid' };
      mockConfig.auth.currentUser = mockUser;
      mockFirebaseAuth.getIdTokenResult.mockResolvedValue({ claims: { admin: true } });

      const result = await AdminService.isAdmin();

      expect(result).toBe(true);
      expect(mockFirebaseAuth.getIdTokenResult).toHaveBeenCalledWith(mockUser, false);
    });

    test('returns false when admin claim is absent', async () => {
      mockConfig.auth.currentUser = { uid: 'player-uid' };
      mockFirebaseAuth.getIdTokenResult.mockResolvedValue({ claims: {} });

      const result = await AdminService.isAdmin();

      expect(result).toBe(false);
    });

    test('returns false when admin claim is explicitly false', async () => {
      mockConfig.auth.currentUser = { uid: 'player-uid' };
      mockFirebaseAuth.getIdTokenResult.mockResolvedValue({ claims: { admin: false } });

      const result = await AdminService.isAdmin();

      expect(result).toBe(false);
    });

    test('uses forceRefresh=false (cached token)', async () => {
      mockConfig.auth.currentUser = { uid: 'admin-uid' };
      mockFirebaseAuth.getIdTokenResult.mockResolvedValue({ claims: { admin: true } });

      await AdminService.isAdmin();

      expect(mockFirebaseAuth.getIdTokenResult).toHaveBeenCalledWith(
        expect.anything(),
        false, // forceRefresh must be false
      );
    });
  });

  describe('refreshAndCheckAdmin', () => {
    test('returns false and skips token fetch when no current user', async () => {
      mockConfig.auth.currentUser = null;

      const result = await AdminService.refreshAndCheckAdmin();

      expect(result).toBe(false);
      expect(mockFirebaseAuth.getIdTokenResult).not.toHaveBeenCalled();
    });

    test('returns true when admin claim is true after force refresh', async () => {
      const mockUser = { uid: 'admin-uid' };
      mockConfig.auth.currentUser = mockUser;
      mockFirebaseAuth.getIdTokenResult.mockResolvedValue({ claims: { admin: true } });

      const result = await AdminService.refreshAndCheckAdmin();

      expect(result).toBe(true);
      expect(mockFirebaseAuth.getIdTokenResult).toHaveBeenCalledWith(mockUser, true);
    });

    test('uses forceRefresh=true (bypasses token cache)', async () => {
      mockConfig.auth.currentUser = { uid: 'admin-uid' };
      mockFirebaseAuth.getIdTokenResult.mockResolvedValue({ claims: { admin: false } });

      await AdminService.refreshAndCheckAdmin();

      expect(mockFirebaseAuth.getIdTokenResult).toHaveBeenCalledWith(
        expect.anything(),
        true, // forceRefresh must be true
      );
    });
  });
});
