#!/bin/bash
# Firebase project setup script
# Run this interactively in your terminal (not from Claude Code)
#
# Usage: bash scripts/firebase-setup.sh
#
# Prerequisites:
#   - Node.js 20+
#   - Java 11+ (required for Firebase emulators)
#     WSL/Ubuntu: sudo apt-get install default-jre-headless
#     macOS: brew install openjdk@11
#     Windows: https://adoptium.net/
#   - Firebase CLI installed (included as devDependency, or: npm install -g firebase-tools)
#   - Logged in to Firebase (npx firebase login)

set -e

echo "=== Dungeon Scribe AI — Firebase Setup ==="
echo ""

# Check Java
echo "Checking Java..."
if ! command -v java &>/dev/null; then
  echo "ERROR: Java is required for Firebase emulators."
  echo "  WSL/Ubuntu: sudo apt-get install default-jre-headless"
  echo "  macOS:      brew install openjdk@11"
  echo "  Windows:    https://adoptium.net/"
  exit 1
fi
java -version 2>&1 | head -1
echo ""

# Check Firebase CLI
echo "Checking Firebase CLI..."
npx firebase --version
echo ""

# Step 1: Check login
echo "Checking Firebase authentication..."
npx firebase login:list 2>/dev/null || {
  echo "Not logged in. Running: firebase login"
  npx firebase login
}
echo ""

# Step 2: Create staging project
echo "--- Creating STAGING project ---"
echo "Project ID: dungeon-scribe-ai-staging"
read -p "Create this project? (y/n): " CREATE_STAGING
if [ "$CREATE_STAGING" = "y" ]; then
  npx firebase projects:create dungeon-scribe-ai-staging --display-name "Dungeon Scribe AI (Staging)" || echo "Project may already exist, continuing..."
fi
echo ""

# Step 3: Create production project
echo "--- Creating PRODUCTION project ---"
echo "Project ID: dungeon-scribe-ai-prod"
read -p "Create this project? (y/n): " CREATE_PROD
if [ "$CREATE_PROD" = "y" ]; then
  npx firebase projects:create dungeon-scribe-ai-prod --display-name "Dungeon Scribe AI (Production)" || echo "Project may already exist, continuing..."
fi
echo ""

# Step 4: Set default project to staging for development
echo "Setting default project to staging..."
npx firebase use staging || echo "Project alias not found yet, will set after creation..."
echo ""

# Step 5: Enable services on staging
echo "--- Enabling services on STAGING ---"
echo "Please enable these manually in Firebase Console (https://console.firebase.google.com):"
echo ""
echo "  1. Authentication → Sign-in method → Enable Email/Password"
echo "  2. Authentication → Sign-in method → Enable Google"
echo "  3. Authentication → Sign-in method → Enable Apple (if iOS)"
echo "  4. Cloud Firestore → Create database (start in test mode, we'll deploy rules)"
echo "  5. Storage → Get started"
echo ""
read -p "Press Enter when services are enabled on staging..."

# Step 6: Deploy rules and indexes
echo "Deploying Firestore rules to staging..."
npx firebase deploy --only firestore:rules --project staging || echo "Failed — ensure Firestore is enabled."

echo "Deploying Firestore indexes to staging..."
npx firebase deploy --only firestore:indexes --project staging || echo "Failed — ensure Firestore is enabled."

echo "Deploying Storage rules to staging..."
npx firebase deploy --only storage --project staging || echo "Failed — ensure Storage is enabled."
echo ""

# Step 7: Create .env from example if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating .env from .env.example..."
  cp .env.example .env
  echo "Created .env with demo project defaults (works with emulators)."
else
  echo ".env already exists, skipping."
fi
echo ""

# Step 8: Get Firebase config for .env
echo "=== Firebase Config ==="
echo ""
echo "For STAGING, get your web app config from Firebase Console:"
echo "  Project Settings → General → Your apps → Add app (Web) → Config"
echo ""
echo "Or run:"
echo "  npx firebase apps:sdkconfig web --project staging"
echo ""
echo "Update your .env with the real values when ready."
echo "For local development with emulators, the demo defaults in .env work fine."
echo ""

# Step 9: Test emulators
echo "--- Testing Emulators ---"
read -p "Start emulators to verify setup? (y/n): " START_EMULATORS
if [ "$START_EMULATORS" = "y" ]; then
  echo ""
  echo "Starting Firebase emulators..."
  echo "  Emulator UI: http://localhost:4000"
  echo "  Auth:        http://localhost:9099"
  echo "  Firestore:   http://localhost:8080"
  echo "  Storage:     http://localhost:9199"
  echo ""
  echo "Press Ctrl+C to stop."
  npm run emulators
fi

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Next steps:"
echo "  1. Update .env with real Firebase config (for staging/production)"
echo "  2. For Google OAuth, go to Google Cloud Console:"
echo "     https://console.cloud.google.com/apis/credentials"
echo "     - Create OAuth 2.0 Client ID (Web) → redirect: https://auth.expo.io/@your-username/dungeon-scribe-ai"
echo "     - Create OAuth 2.0 Client ID (iOS) → bundle: com.markwillisford.dungeonscribeai"
echo "     - Create OAuth 2.0 Client ID (Android) → package: com.markwillisford.dungeonscribeai"
echo "     - Add client IDs to .env (EXPO_PUBLIC_GOOGLE_*_CLIENT_ID)"
echo "  3. For Apple Sign-In (iOS only):"
echo "     - Apple Developer Console → Identifiers → App ID with Sign In with Apple"
echo "     - Firebase Console → Auth → Sign-in method → Apple → enable"
echo "  4. Run: npm run emulators (to start local development)"
echo "  5. Run: npx expo start (to start the app)"
