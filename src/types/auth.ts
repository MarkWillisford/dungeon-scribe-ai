// Firebase Auth user profile and preferences

export interface AppUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  createdAt?: string; // ISO 8601 — kept as string for Redux serializability
  lastLogin?: string; // ISO 8601 — kept as string for Redux serializability
  campaigns?: string[]; // Campaign IDs
  role?: 'player' | 'dm';
}

export interface UserPreferences {
  userId: string;
  activeCharacterId: string | null;
  theme: 'light' | 'dark';
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}
