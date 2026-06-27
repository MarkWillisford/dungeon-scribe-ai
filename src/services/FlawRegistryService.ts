import type { FlawDefinition } from '@/types/flaws';

export class FlawRegistryService {
  private static flaws = new Map<string, FlawDefinition>();

  static register(flaw: FlawDefinition): void {
    this.flaws.set(flaw.id, flaw);
  }

  static registerBatch(flaws: FlawDefinition[]): void {
    for (const flaw of flaws) {
      this.register(flaw);
    }
  }

  static getFlaw(id: string): FlawDefinition | undefined {
    return this.flaws.get(id);
  }

  static getAllFlaws(): FlawDefinition[] {
    return Array.from(this.flaws.values());
  }

  static getFlawsBySource(source: string): FlawDefinition[] {
    return this.getAllFlaws().filter((f) => f.source === source);
  }

  static clear(): void {
    this.flaws.clear();
  }

  static getCount(): number {
    return this.flaws.size;
  }
}
