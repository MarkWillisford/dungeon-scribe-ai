// Campaign management types — from HL's Firestore schema

export interface Campaign {
  id: string;
  name: string;
  description: string;
  dmId: string; // userId of the DM who created it
  inviteCode: string; // 6-char uppercase alphanumeric
  createdAt: Date;
  updatedAt: Date;
  settings: CampaignSettings;
  members: CampaignMember[];
  tags: string[]; // Default: ['NPC', 'Location', 'Clue', 'Quest', 'Item', 'Lore']
}

export interface CampaignSettings {
  allowPlayerEdits: boolean;
  requireApproval: boolean;
  isActive: boolean;
}

export interface CampaignMember {
  userId: string;
  role: 'dm' | 'player';
  joinedAt: Date;
  characterId: string | null;
  characterName: string | null;
  characterClass: string | null;
  characterLevel: number | null;
  isActive: boolean;
}

// Lightweight campaign data for lists
export interface CampaignSummary {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  role: 'dm' | 'player';
  isActive: boolean;
  updatedAt: Date;
}
