// Campaign handouts — designed in HL, not yet implemented

export interface Handout {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileType: 'image' | 'pdf' | 'text';
  uploadedBy: string; // userId
  uploadedAt: Date;
  isRevealed: boolean;
  revealedTo: string[]; // userIds for selective reveal
  revealedAt?: Date;
}
