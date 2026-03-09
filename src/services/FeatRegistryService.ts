import type { FeatDefinition, FeatType } from '@/types/feats';

/**
 * Global in-memory registry of all feat definitions.
 * Loaded at app startup from static data + user custom feats from Firestore.
 */
export class FeatRegistryService {
  private static feats = new Map<string, FeatDefinition>();

  static register(feat: FeatDefinition): void {
    this.feats.set(feat.id, feat);
  }

  static registerBatch(feats: FeatDefinition[]): void {
    for (const feat of feats) {
      this.register(feat);
    }
  }

  static getFeat(id: string): FeatDefinition | undefined {
    return this.feats.get(id);
  }

  static getAllFeats(): FeatDefinition[] {
    return Array.from(this.feats.values());
  }

  static getFeatsByType(type: FeatType): FeatDefinition[] {
    return this.getAllFeats().filter((f) => f.types.includes(type));
  }

  static searchFeats(query: string): FeatDefinition[] {
    const lower = query.toLowerCase();
    return this.getAllFeats().filter(
      (f) =>
        f.name.toLowerCase().includes(lower) ||
        f.tags?.some((t) => t.toLowerCase().includes(lower)) ||
        f.types.some((t) => t.includes(lower)),
    );
  }

  static clear(): void {
    this.feats.clear();
  }

  static getCount(): number {
    return this.feats.size;
  }
}
