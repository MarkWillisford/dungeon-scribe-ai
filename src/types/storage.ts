import { Character } from './index';
import { CharacterSummary } from './character';

// Storage service interface for dependency injection
export interface StorageService {
  saveCharacter: (character: Character) => Promise<void>;
  loadCharacter: (id: string) => Promise<Character | null>;
  loadAllCharacters: () => Promise<CharacterSummary[]>;
  deleteCharacter: (id: string) => Promise<void>;
  exportCharacter: (id: string) => Promise<string>;
  importCharacter: (json: string) => Promise<Character>;
}

export class StorageError extends Error {
  constructor(
    message: string,
    public code: string,
  ) {
    super(message);
    this.name = 'StorageError';
  }
}

export enum StorageErrorCode {
  CHARACTER_NOT_FOUND = 'CHARACTER_NOT_FOUND',
  INVALID_CHARACTER_DATA = 'INVALID_CHARACTER_DATA',
  STORAGE_QUOTA_EXCEEDED = 'STORAGE_QUOTA_EXCEEDED',
  CORRUPTED_DATA = 'CORRUPTED_DATA',
  PARSE_ERROR = 'PARSE_ERROR',
}

export interface StorageConfig {
  enableCompression: boolean;
  enableBackup: boolean;
  maxCharacters: number;
  schemaVersion: string;
}
