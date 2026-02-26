// Firebase Auth user profile and preferences

export interface AppUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  createdAt: Date;
  lastLogin: Date;
  campaigns: string[]; // Campaign IDs
  role: 'player' | 'dm';
}

export interface UserPreferences {
  userId: string;
  activeCharacterId: string | null;
  theme: 'light' | 'dark';
  createdAt: Date;
  updatedAt: Date;
}
