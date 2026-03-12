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

  // Epic progression
  epicEnabled: boolean;
  epicSpellProgression: 'new_levels' | 'extra_slots';
  // 'new_levels' (default) — CL 19 unlocks 10th level spells, continuing through 15th
  // 'extra_slots'          — tables extend but spell level cap stays at 9th

  // Mythic Adventures
  mythicEnabled: boolean;

  // LA buyback rules (3.5e)
  laBuybackMode: 'standard' | 'accelerated';
  // 'standard'     — eligible when classLevels >= 3 × current LA
  // 'accelerated'  — eligible after every 3 class levels

  // Trait slots per character (default 2; DM can increase for the campaign)
  maxTraits: number;

  // Campaign-wide free grants applied to all characters in this campaign
  globalGrants?: import('./templates').GrantedBonus[];
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
