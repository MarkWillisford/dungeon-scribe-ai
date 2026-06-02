# SEEDING INFRASTRUCTURE — NOT RUNTIME CODE

The TypeScript files in this directory exist only to seed Firestore via the scripts in `scripts/db/`. They will be deleted once production seeding is complete.

**Do not modify these files to fix bugs or add features.** All runtime game data comes from Firestore.

## Runtime data path

```text
GameDataService  →  FirestoreGameDataConnector  →  Firestore
```

- Public API: `src/services/GameDataService.ts`
- Firestore implementation: `src/services/FirestoreGameDataConnector.ts`
- Test double (imports this directory by design): `src/services/StaticGameDataConnector.ts`

## Seeding

See `plans/seeding-playbook.md` for current seeding status and instructions.
Staging: complete (2026-04-14). Production: not started.
