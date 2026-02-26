// Campaign session tracking — designed in HL, not yet implemented

export interface Session {
  id: string;
  sessionNumber: number;
  date: Date;
  title: string;
  summary: string;
  dmNotes: string;
  attendees: string[]; // userIds
  createdAt: Date;
  updatedAt: Date;
}
