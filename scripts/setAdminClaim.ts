/**
 * setAdminClaim.ts — Grant or revoke the admin custom claim on a Firebase user
 *
 * Custom Claims live on the Firebase Auth token, not in Firestore. This makes
 * them auth-layer portable: they are not coupled to any database backend, so
 * a future migration away from Firestore does not affect admin authorization.
 *
 * The claim { admin: true } is checked in:
 *   - Firestore security rules: request.auth.token.admin == true
 *   - Client code: AdminService.isAdmin()
 *
 * Prerequisites:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/setAdminClaim.ts --uid <uid>            # grant admin
 *   npx tsx scripts/setAdminClaim.ts --uid <uid> --revoke   # revoke admin
 */

import * as admin from 'firebase-admin';

const STAGING_PROJECT = 'dungeon-scribe-ai-stagin-b4fb5';

function parseArgs(): { uid: string; revoke: boolean } {
  const args = process.argv.slice(2);
  const uidIdx = args.indexOf('--uid');
  if (uidIdx === -1 || !args[uidIdx + 1]) {
    console.error('Usage: npx tsx scripts/setAdminClaim.ts --uid <uid> [--revoke]');
    process.exit(1);
  }
  return {
    uid: args[uidIdx + 1],
    revoke: args.includes('--revoke'),
  };
}

async function main(): Promise<void> {
  const { uid, revoke } = parseArgs();
  const projectId = process.env.FIREBASE_PROJECT_ID ?? STAGING_PROJECT;

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      projectId,
    });
  }

  // Verify the user exists before touching claims
  const user = await admin.auth().getUser(uid);
  const existingClaims = (user.customClaims as Record<string, unknown>) ?? {};

  const newClaims = { ...existingClaims, admin: !revoke };

  await admin.auth().setCustomUserClaims(uid, newClaims);

  const action = revoke ? 'REVOKED' : 'GRANTED';
  console.log(`\n✓ Admin claim ${action}`);
  console.log(`  Project : ${projectId}`);
  console.log(`  UID     : ${uid}`);
  console.log(`  Email   : ${user.email ?? '(no email)'}`);
  console.log(`  Claims  : ${JSON.stringify(newClaims)}`);
  console.log(
    '\nNote: the user must sign out and sign back in (or the token must refresh)\n' +
      'for the new claim to take effect on their device.\n',
  );
}

main().catch((err) => {
  console.error('setAdminClaim failed:', err);
  process.exit(1);
});
