import { getIdTokenResult } from 'firebase/auth';
import { auth } from '@config/firebase';

/**
 * AdminService — reads the admin custom claim from the Firebase Auth token.
 *
 * Admin status is stored as a Firebase Custom Claim ({ admin: true }), NOT as
 * a Firestore document field. This means:
 *   - Only the Firebase Admin SDK (server-side) can grant or revoke admin status.
 *   - The claim travels with the auth token and is database-agnostic — a future
 *     migration away from Firestore does not affect admin authorization.
 *   - Firestore security rules enforce it via request.auth.token.admin == true.
 *
 * The token is cached by the Firebase SDK and refreshed automatically (≈ 1h).
 * After a claim change the user must sign out and back in, or wait for the next
 * automatic token refresh, before the new value is visible here.
 */
export class AdminService {
  /**
   * Returns true if the currently signed-in user has the admin custom claim.
   * Returns false if there is no current user or the claim is absent/false.
   */
  static async isAdmin(): Promise<boolean> {
    const user = auth.currentUser;
    if (!user) return false;

    // forceRefresh=false: use the cached token unless it has expired.
    // This is fast on subsequent calls (no network round-trip).
    const tokenResult = await getIdTokenResult(user, false);
    return tokenResult.claims['admin'] === true;
  }

  /**
   * Force-refreshes the ID token and returns the updated admin status.
   * Call this immediately after a claim change is known to have occurred
   * (e.g., after an admin grants/revokes another user's role) so the
   * UI reflects the change without requiring a sign-out.
   */
  static async refreshAndCheckAdmin(): Promise<boolean> {
    const user = auth.currentUser;
    if (!user) return false;

    const tokenResult = await getIdTokenResult(user, true);
    return tokenResult.claims['admin'] === true;
  }
}
