import { FirebaseAuthService } from '@services/FirebaseAuthService';

// Mock firebase modules
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  GoogleAuthProvider: { credential: jest.fn() },
  signInWithCredential: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
  onAuthStateChanged: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  setDoc: jest.fn(),
  getDoc: jest.fn(),
  serverTimestamp: jest.fn(() => 'mock-timestamp'),
}));

jest.mock('@config/firebase', () => ({
  auth: { currentUser: null },
  db: {},
}));

const mockAuth = require('firebase/auth');
const mockFirestore = require('firebase/firestore');
const mockConfig = require('@config/firebase');

describe('FirebaseAuthService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('signUp', () => {
    test('should create user and profile', async () => {
      const mockUser = {
        uid: 'test-uid',
        email: 'test@example.com',
        displayName: 'Test User',
        photoURL: null,
      };

      mockAuth.createUserWithEmailAndPassword.mockResolvedValue({ user: mockUser });
      mockFirestore.getDoc.mockResolvedValue({ exists: () => false });
      mockFirestore.setDoc.mockResolvedValue(undefined);

      const result = await FirebaseAuthService.signUp('test@example.com', 'password123');

      expect(mockAuth.createUserWithEmailAndPassword).toHaveBeenCalled();
      expect(result.uid).toBe('test-uid');
      expect(result.email).toBe('test@example.com');
    });

    test('should throw on auth failure', async () => {
      mockAuth.createUserWithEmailAndPassword.mockRejectedValue(new Error('Email already in use'));

      await expect(
        FirebaseAuthService.signUp('existing@example.com', 'password123'),
      ).rejects.toThrow('Email already in use');
    });
  });

  describe('login', () => {
    test('should sign in and return user', async () => {
      const mockUser = {
        uid: 'test-uid',
        email: 'test@example.com',
        displayName: 'Test User',
        photoURL: null,
      };

      mockAuth.signInWithEmailAndPassword.mockResolvedValue({ user: mockUser });
      mockFirestore.setDoc.mockResolvedValue(undefined);

      const result = await FirebaseAuthService.login('test@example.com', 'password123');

      expect(mockAuth.signInWithEmailAndPassword).toHaveBeenCalled();
      expect(result.uid).toBe('test-uid');
    });

    test('should throw on invalid credentials', async () => {
      mockAuth.signInWithEmailAndPassword.mockRejectedValue(new Error('Invalid credentials'));

      await expect(FirebaseAuthService.login('wrong@example.com', 'wrongpassword')).rejects.toThrow(
        'Invalid credentials',
      );
    });
  });

  describe('logout', () => {
    test('should sign out successfully', async () => {
      mockAuth.signOut.mockResolvedValue(undefined);

      await expect(FirebaseAuthService.logout()).resolves.toBeUndefined();
      expect(mockAuth.signOut).toHaveBeenCalled();
    });
  });

  describe('resetPassword', () => {
    test('should send password reset email', async () => {
      mockAuth.sendPasswordResetEmail.mockResolvedValue(undefined);

      await expect(FirebaseAuthService.resetPassword('test@example.com')).resolves.toBeUndefined();
      expect(mockAuth.sendPasswordResetEmail).toHaveBeenCalled();
    });
  });

  describe('getCurrentUser', () => {
    test('should return null when not logged in', () => {
      mockConfig.auth.currentUser = null;
      expect(FirebaseAuthService.getCurrentUser()).toBeNull();
    });

    test('should return current user when logged in', () => {
      const mockUser = { uid: 'test-uid', email: 'test@example.com' };
      mockConfig.auth.currentUser = mockUser;
      expect(FirebaseAuthService.getCurrentUser()).toEqual(mockUser);
    });
  });

  describe('googleLogin', () => {
    test('should sign in with Google credential', async () => {
      const mockUser = {
        uid: 'google-uid',
        email: 'google@example.com',
        displayName: 'Google User',
        photoURL: 'https://photo.url',
      };

      mockAuth.GoogleAuthProvider.credential.mockReturnValue('mock-credential');
      mockAuth.signInWithCredential.mockResolvedValue({ user: mockUser });
      mockFirestore.getDoc.mockResolvedValue({ exists: () => true });
      mockFirestore.setDoc.mockResolvedValue(undefined);

      const result = await FirebaseAuthService.googleLogin('mock-id-token');

      expect(mockAuth.GoogleAuthProvider.credential).toHaveBeenCalledWith('mock-id-token');
      expect(result.uid).toBe('google-uid');
      expect(result.email).toBe('google@example.com');
    });
  });
});
