// SEEDING ONLY — do not use in runtime app code.
// This array seeds Firestore. All runtime reads go through GameDataService → FirestoreGameDataConnector.

// Magic Items — re-exports all categories
export * from './wondrousItems/index';
export * from './rings/index';
export * from './staves/index';
export * from './rods/index';
export * from './magicWeapons/index';
export * from './magicArmor/index';
export * from './iounStones/index';
