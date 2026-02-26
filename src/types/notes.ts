// Notes system — from HL's campaign notes feature

export type NoteType = 'personal' | 'shared' | 'dm';

export type NoteCategory =
  | ''
  | 'world'
  | 'npcs'
  | 'organizations'
  | 'story'
  | 'quests'
  | 'lore'
  | 'items'
  | 'sessions'
  | 'mysteries'
  | 'other';

export interface Note {
  id: string;
  title: string;
  content: string;
  type: NoteType;
  category: NoteCategory;
  tags: string[];
  authorId: string;
  authorName: string;
  createdAt: Date;
  updatedAt: Date;
  reactions: Record<string, string[]>; // emoji -> userId[]
  linkedNotes: string[]; // noteId references
  attachments: NoteAttachment[];
  editHistory: NoteEdit[];
  isRevealed?: boolean;
  revealedAt?: Date;
}

export interface NoteAttachment {
  id: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  uploadedAt: Date;
}

export interface NoteEdit {
  editedBy: string; // userId
  editedAt: Date;
  previousContent: string;
}
