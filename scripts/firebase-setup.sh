#!/bin/bash
# Firebase project setup script
# Run this interactively in your terminal (not from Claude Code)
#
# Usage: bash scripts/firebase-setup.sh
#
# Prerequisites:
#   - Node.js 20+
#   - firebase-tools (already in devDependencies)

set -e

echo "=== Dungeon Scribe AI — Firebase Setup ==="
echo ""

# Step 1: Check login
echo "Step 1: Firebase authentication"
npx firebase login:list 2>/dev/null || {
  echo "Not logged in. Opening browser for Firebase login..."
  npx firebase login
}
echo ""

# Step 2: Create staging project
echo "Step 2: Create STAGING project"
echo "  Project ID: dungeon-scribe-ai-staging"
read -p "  Create this project? (y/n): " CREATE_STAGING
if [ "$CREATE_STAGING" = "y" ]; then
  npx firebase projects:create dungeon-scribe-ai-staging --display-name "Dungeon Scribe AI (Staging)" || echo "  Project may already exist, continuing..."
fi
echo ""

# Step 3: Create production project
echo "Step 3: Create PRODUCTION project"
echo "  Project ID: dungeon-scribe-ai-prod"
read -p "  Create this project? (y/n): " CREATE_PROD
if [ "$CREATE_PROD" = "y" ]; then
  npx firebase projects:create dungeon-scribe-ai-prod --display-name "Dungeon Scribe AI (Production)" || echo "  Project may already exist, continuing..."
fi
echo ""

# Step 4: Set default project
echo "Step 4: Setting default project to staging..."
npx firebase use staging || echo "  Could not set alias — you may need to update .firebaserc"
echo ""

# Step 5: Enable services in Firebase Console
echo "Step 5: Enable services in Firebase Console"
echo ""
echo "  Open https://console.firebase.google.com and select your STAGING project."
echo "  Enable the following:"
echo ""
echo "  1. Authentication → Sign-in method → Email/Password → Enable"
echo "  2. Authentication → Sign-in method → Google → Enable"
echo "  3. Cloud Firestore → Create database → Start in test mode"
echo "  4. Storage → Get started"
echo ""
read -p "  Press Enter when done..."
echo ""

# Step 6: Add a Web app to get config
echo "Step 6: Register a Web app"
echo ""
echo "  In Firebase Console → Project Settings → General → Your apps"
echo "  Click 'Add app' → Web → name it 'Dungeon Scribe AI'"
echo "  Copy the firebaseConfig values."
echo ""
echo "  Or after adding the app, run:"
echo "    npx firebase apps:sdkconfig web --project staging"
echo ""
read -p "  Press Enter when you have the config values..."
echo ""

# Step 7: Create .env
if [ ! -f .env ]; then
  cp .env.example .env
  echo "  Created .env from .env.example"
else
  echo "  .env already exists"
fi
echo ""
echo "  Now edit .env and paste your Firebase config values:"
echo "    EXPO_PUBLIC_FIREBASE_API_KEY=..."
echo "    EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=..."
echo "    EXPO_PUBLIC_FIREBASE_PROJECT_ID=..."
echo "    EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=..."
echo "    EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=..."
echo "    EXPO_PUBLIC_FIREBASE_APP_ID=..."
echo ""
read -p "  Press Enter when .env is filled in..."
echo ""

# Step 8: Deploy security rules
echo "Step 7: Deploying Firestore + Storage rules to staging..."
npx firebase deploy --only firestore:rules --project staging || echo "  Firestore rules deploy failed"
npx firebase deploy --only firestore:indexes --project staging || echo "  Firestore indexes deploy failed"
npx firebase deploy --only storage --project staging || echo "  Storage rules deploy failed"
echo ""

echo "=== Setup Complete ==="
echo ""
echo "  You can now run:"
echo "    npx expo start"
echo ""
echo "  Optional — Google OAuth (for Google Sign-In button):"
echo "    1. Go to https://console.cloud.google.com/apis/credentials"
echo "    2. Select the staging project"
echo "    3. Create OAuth 2.0 Client IDs:"
echo "       - Web:     redirect URI → https://auth.expo.io/@your-username/dungeon-scribe-ai"
echo "       - iOS:     bundle ID → com.markwillisford.dungeonscribeai"
echo "       - Android: package → com.markwillisford.dungeonscribeai, SHA-1 from 'eas credentials'"
echo "    4. Add the client IDs to .env (EXPO_PUBLIC_GOOGLE_*_CLIENT_ID)"
echo ""
echo "  Optional — Apple Sign-In (iOS only):"
echo "    1. Apple Developer Console → Identifiers → enable Sign In with Apple"
echo "    2. Firebase Console → Auth → Sign-in method → Apple → Enable"
