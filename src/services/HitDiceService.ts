import type { Character } from '@/types';
import type { CharacterClasses, ClassEntry, HitDieSource } from '@/types/classes';

/**
 * Per-level hit point values.
 *
 * Every class level contributes one hit die roll to a character's HP. The value
 * stored per level is the die result ALONE — Constitution, favored class and
 * effect bonuses are layered on afterwards by ModifierPipelineService, which
 * keeps them responsive to later changes (a CON belt raises HP retroactively
 * across every Hit Die, exactly as Pathfinder intends).
 *
 * `hitDieResults[i]` is the value for the class's own level i+1, and
 * `hitDieSources[i]` records how the user arrived at it so the UI can show
 * "rolled" vs "average" and re-roll in place.
 */
export class HitDiceService {
  /**
   * Pathfinder's average-HP convention: half the die, rounded up.
   * d6 → 4, d8 → 5, d10 → 6, d12 → 7.
   */
  static averageValue(hitDieSize: number): number {
    return Math.floor(hitDieSize / 2) + 1;
  }

  /** Roll a single hit die. `rng` is injectable so tests stay deterministic. */
  static roll(hitDieSize: number, rng: () => number = Math.random): number {
    return Math.floor(rng() * hitDieSize) + 1;
  }

  /**
   * The value a given source produces for a die of this size.
   *
   * `manual` is excluded by type: a manual value carries no rule of its own —
   * the caller already has the number the user typed, so there is nothing for
   * this to derive. Returning an average for it would silently invent a value
   * the user never entered.
   */
  static valueForSource(
    source: Exclude<HitDieSource, 'manual'>,
    hitDieSize: number,
    rng: () => number = Math.random,
  ): number {
    switch (source) {
      case 'max':
        return hitDieSize;
      case 'average':
        return this.averageValue(hitDieSize);
      case 'rolled':
        return this.roll(hitDieSize, rng);
    }
  }

  /**
   * The class entry id holding the character's FIRST character level, which is
   * the one that takes maximum HP under standard Pathfinder rules.
   *
   * `levelOrder` is authoritative when present — a multiclass character who took
   * rogue first and cavalier second maxes the rogue die, whatever order the
   * cards happen to sit in. It is absent until the user opens the level
   * progression editor, so fall back to the first class entry.
   */
  static firstLevelClassId(classes: CharacterClasses): string | null {
    const fromOrder = classes.levelOrder?.[0];
    if (fromOrder) return fromOrder;
    const first = classes.classes[0];
    if (!first) return null;
    return first.id ?? first.name;
  }

  /**
   * The default source for a newly-created level slot: max for the character's
   * very first level, average for everything after it. Average is the safer
   * default than rolling — it is reproducible, and a user who wanted a roll can
   * ask for one, whereas a user who did NOT want one cannot un-see it.
   */
  static defaultSourceFor(isFirstCharacterLevel: boolean): Exclude<HitDieSource, 'manual'> {
    return isFirstCharacterLevel ? 'max' : 'average';
  }

  /**
   * Bring every class entry's hit die arrays in line with its level.
   *
   * Grows and truncates in place, filling new slots with their default value.
   * Safe to call repeatedly — established slots are never rewritten, so a user's
   * rolls and manual entries survive level changes on other classes.
   *
   * This also backfills legacy characters, whose `hitDieResults` were always
   * left empty because no UI ever populated them.
   */
  static sync(character: Character): void {
    const classes = character.classes;
    const firstId = this.firstLevelClassId(classes);

    for (const entry of classes.classes) {
      const entryId = entry.id ?? entry.name;
      const target = Math.max(0, entry.level);

      const results = entry.hitDieResults ?? [];
      const sources = entry.hitDieSources ?? [];

      // Values that pre-date the source array were entered by hand somewhere
      // else (fixtures, imports) — label them manual rather than overwriting.
      while (sources.length < results.length) sources.push('manual');

      if (results.length > target) {
        results.length = target;
        sources.length = target;
      }

      while (results.length < target) {
        const index = results.length;
        const isFirstCharacterLevel = entryId === firstId && index === 0;
        const source = this.defaultSourceFor(isFirstCharacterLevel);
        results.push(this.valueForSource(source, entry.hitDieSize));
        sources.push(source);
      }

      entry.hitDieResults = results;
      entry.hitDieSources = sources;
    }
  }

  /**
   * Maximum HP from its component parts, before any user override.
   *
   * Shared by the pipeline (which computes it) and the UI (which has to show
   * the user what they would revert TO), so the two can never disagree.
   */
  static calculatedMax(
    hp: { base: number; constitution: number; favoredClass: number; other: number },
    totalHD: number,
  ): number {
    const sum = hp.base + hp.constitution + hp.favoredClass + hp.other;
    // A character always gains at least 1 HP per Hit Die.
    return totalHD > 0 ? Math.max(sum, totalHD) : sum;
  }

  /** Total HP contributed by hit dice alone, before CON and other bonuses. */
  static totalFromDice(classes: CharacterClasses): number {
    return classes.classes.reduce(
      (sum, entry) => sum + (entry.hitDieResults ?? []).reduce((s, v) => s + v, 0),
      0,
    );
  }

  /** Roll (or average, or max) an entire class entry's levels at once. */
  static valuesForEntry(
    entry: ClassEntry,
    source: Exclude<HitDieSource, 'manual'>,
    rng: () => number = Math.random,
  ): number[] {
    return Array.from({ length: Math.max(0, entry.level) }, () =>
      this.valueForSource(source, entry.hitDieSize, rng),
    );
  }
}
