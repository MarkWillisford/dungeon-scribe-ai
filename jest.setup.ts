// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// Mock Firebase — will be created in Step 6
jest.mock('@config/firebase', () => ({
  auth: {},
  db: {},
  storage: {},
}));

// Mock firebase/firestore so FirestoreGameDataConnector doesn't throw in tests.
// Tests that need real game data inject StaticGameDataConnector via setConnector().
jest.mock('firebase/firestore', () => ({
  collection: jest.fn().mockReturnValue({}),
  query: jest.fn().mockReturnValue({}),
  where: jest.fn().mockReturnValue({}),
  getDocs: jest.fn().mockResolvedValue({ docs: [] }),
  getDoc: jest.fn().mockResolvedValue({ exists: () => false, data: () => null }),
  doc: jest.fn().mockReturnValue({}),
  limit: jest.fn().mockReturnValue({}),
  documentId: jest.fn().mockReturnValue('__name__'),
}));

// Mock expo-font
jest.mock('expo-font', () => ({
  useFonts: () => [true, null],
  loadAsync: jest.fn(),
}));

// Mock expo-router
jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn(), back: jest.fn(), replace: jest.fn() }),
  useLocalSearchParams: () => ({}),
  Link: 'Link',
  Stack: { Screen: 'Screen' },
  Tabs: { Screen: 'Screen' },
}));
