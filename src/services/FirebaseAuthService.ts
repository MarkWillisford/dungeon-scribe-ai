import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithCredential,
  sendPasswordResetEmail,
  onAuthStateChanged,
  type User,
  type Unsubscribe,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@config/firebase';
import type { AppUser } from '@/types/auth';

export class FirebaseAuthService {
  /**
   * Sign up with email and password
   */
  static async signUp(email: string, password: string): Promise<AppUser> {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const appUser = await this.createUserProfile(result.user);
    return appUser;
  }

  /**
   * Sign in with email and password
   */
  static async login(email: string, password: string): Promise<AppUser> {
    const result = await signInWithEmailAndPassword(auth, email, password);
    await this.updateLastLogin(result.user.uid);
    return this.mapFirebaseUser(result.user);
  }

  /**
   * Sign in with Google credential (from expo-auth-session)
   */
  static async googleLogin(idToken: string): Promise<AppUser> {
    const credential = GoogleAuthProvider.credential(idToken);
    const result = await signInWithCredential(auth, credential);
    const appUser = await this.createUserProfile(result.user);
    return appUser;
  }

  /**
   * Sign out
   */
  static async logout(): Promise<void> {
    await signOut(auth);
  }

  /**
   * Send password reset email
   */
  static async resetPassword(email: string): Promise<void> {
    await sendPasswordResetEmail(auth, email);
  }

  /**
   * Subscribe to auth state changes
   */
  static onAuthStateChanged(callback: (user: User | null) => void): Unsubscribe {
    return onAuthStateChanged(auth, callback);
  }

  /**
   * Get the current user
   */
  static getCurrentUser(): User | null {
    return auth.currentUser;
  }

  /**
   * Create or update user profile in Firestore
   */
  private static async createUserProfile(user: User): Promise<AppUser> {
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      const newProfile = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || user.email?.split('@')[0] || '',
        photoURL: user.photoURL || null,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        campaigns: [],
        preferences: {
          theme: 'dark' as const,
          fontSize: 'medium' as const,
        },
      };

      await setDoc(userRef, newProfile);
    } else {
      await setDoc(userRef, { lastLogin: serverTimestamp() }, { merge: true });
    }

    return this.mapFirebaseUser(user);
  }

  /**
   * Update last login timestamp
   */
  private static async updateLastLogin(uid: string): Promise<void> {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, { lastLogin: serverTimestamp() }, { merge: true });
  }

  /**
   * Map Firebase User to AppUser
   */
  private static mapFirebaseUser(user: User): AppUser {
    return {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || user.email?.split('@')[0] || '',
      photoURL: user.photoURL || null,
    };
  }
}
