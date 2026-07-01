import type { FlawDefinition } from '@/types/flaws';
import type { Effect } from '@/types/base';

export class FlawRegistryService {
  private static flaws = new Map<string, FlawDefinition>();

  private static cloneEffect(effect: Effect): Effect {
    return {
      ...effect,
      condition: effect.condition
        ? { ...effect.condition, params: { ...effect.condition.params } }
        : undefined,
    };
  }

  private static cloneFlaw(flaw: FlawDefinition): FlawDefinition {
    return { ...flaw, effects: flaw.effects.map((e) => this.cloneEffect(e)) };
  }

  static register(flaw: FlawDefinition): void {
    this.flaws.set(flaw.id, this.cloneFlaw(flaw));
  }

  static registerBatch(flaws: FlawDefinition[]): void {
    for (const flaw of flaws) {
      this.register(flaw);
    }
  }

  static getFlaw(id: string): FlawDefinition | undefined {
    const flaw = this.flaws.get(id);
    return flaw ? this.cloneFlaw(flaw) : undefined;
  }

  static getAllFlaws(): FlawDefinition[] {
    return Array.from(this.flaws.values(), (flaw) => this.cloneFlaw(flaw));
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
