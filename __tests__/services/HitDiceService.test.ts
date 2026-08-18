import { HitDiceService } from '@services/HitDiceService';
import { CharacterService } from '@services/CharacterService';
import { Size, Alignment, BABProgression, SaveProgression } from '@/types/base';
import { AbilityScoreMethod } from '@/types/character';
import type { Character } from '@/types';
import type { ClassEntry } from '@/types/classes';
import type { Race } from '@/types/race';

const mockRace: Race = {
  name: 'Human',
  sizeMod: Size.Medium,
  baseSpeed: 30,
  alternativeMovements: {},
  abilityModifiers: {},
  traits: [],
  languages: ['Common'],
  bonusLanguages: ['Any'],
};

function makeClassEntry(overrides: Partial<ClassEntry> & { name: string }): ClassEntry {
  return {
    level: 1,
    hitDieSize: 8,
    hitDieResults: [],
    skillRanks: 2,
    classSkills: [],
    babProgression: BABProgression.Medium,
    fortProgression: SaveProgression.Poor,
    refProgression: SaveProgression.Poor,
    willProgression: SaveProgression.Poor,
    classFeatures: [],
    ...overrides,
  };
}

function makeCharacter(classes: ClassEntry[], levelOrder?: string[]): Character {
  const character = CharacterService.createDefaultCharacter({
    name: 'Test',
    race: mockRace,
    selectedClass: 'Rogue',
    abilityScoreMethod: AbilityScoreMethod.PointBuy,
    abilityScores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    alignment: Alignment.NeutralGood,
  });
  character.classes.classes = classes;
  character.classes.totalLevel = classes.reduce((sum, c) => sum + c.level, 0);
  if (levelOrder) character.classes.levelOrder = levelOrder;
  return character;
}

describe('HitDiceService', () => {
  describe('averageValue', () => {
    // Pathfinder's convention is half the die rounded up, not the true mean.
    it.each([
      [6, 4],
      [8, 5],
      [10, 6],
      [12, 7],
      [4, 3],
    ])('gives d%i an average of %i', (size, expected) => {
      expect(HitDiceService.averageValue(size)).toBe(expected);
    });
  });

  describe('roll', () => {
    it('never rolls below 1 or above the die size', () => {
      expect(HitDiceService.roll(8, () => 0)).toBe(1);
      expect(HitDiceService.roll(8, () => 0.999999)).toBe(8);
    });
  });

  describe('valueForSource', () => {
    it('maxes the die for the max source', () => {
      expect(HitDiceService.valueForSource('max', 10)).toBe(10);
    });

    it('averages the die for the average source', () => {
      expect(HitDiceService.valueForSource('average', 10)).toBe(6);
    });
  });

  describe('firstLevelClassId', () => {
    it('prefers levelOrder over card order', () => {
      const rogue = makeClassEntry({ name: 'Rogue', id: 'rogue-1' });
      const cavalier = makeClassEntry({ name: 'Cavalier', id: 'cav-1' });
      // Cards are ordered cavalier-first, but the character took rogue first.
      const character = makeCharacter([cavalier, rogue], ['rogue-1', 'cav-1']);
      expect(HitDiceService.firstLevelClassId(character.classes)).toBe('rogue-1');
    });

    it('falls back to the first class entry when levelOrder is absent', () => {
      const rogue = makeClassEntry({ name: 'Rogue', id: 'rogue-1' });
      const cavalier = makeClassEntry({ name: 'Cavalier', id: 'cav-1' });
      const character = makeCharacter([rogue, cavalier]);
      expect(HitDiceService.firstLevelClassId(character.classes)).toBe('rogue-1');
    });
  });

  describe('sync', () => {
    it('maxes the first character level and averages the rest', () => {
      const rogue = makeClassEntry({ name: 'Rogue', id: 'rogue-1', level: 4, hitDieSize: 8 });
      const character = makeCharacter([rogue]);

      HitDiceService.sync(character);

      expect(rogue.hitDieResults).toEqual([8, 5, 5, 5]);
      expect(rogue.hitDieSources).toEqual(['max', 'average', 'average', 'average']);
    });

    it('maxes only the class holding character level 1 in a multiclass build', () => {
      const rogue = makeClassEntry({ name: 'Rogue', id: 'rogue-1', level: 2, hitDieSize: 8 });
      const cavalier = makeClassEntry({ name: 'Cavalier', id: 'cav-1', level: 2, hitDieSize: 10 });
      const character = makeCharacter([rogue, cavalier], ['rogue-1', 'rogue-1', 'cav-1', 'cav-1']);

      HitDiceService.sync(character);

      expect(rogue.hitDieResults).toEqual([8, 5]);
      // The cavalier's own level 1 is character level 3 — no free maximum.
      expect(cavalier.hitDieResults).toEqual([6, 6]);
    });

    it('backfills a legacy character whose hitDieResults were never populated', () => {
      // Every code path that created a class entry left this empty, so saved
      // characters compute 0 base HP until they are backfilled.
      const rogue = makeClassEntry({ name: 'Rogue', id: 'rogue-1', level: 3, hitDieSize: 8 });
      const character = makeCharacter([rogue]);
      expect(rogue.hitDieResults).toEqual([]);

      HitDiceService.sync(character);

      expect(HitDiceService.totalFromDice(character.classes)).toBe(18);
    });

    it('preserves established values when another class gains a level', () => {
      const rogue = makeClassEntry({
        name: 'Rogue',
        id: 'rogue-1',
        level: 2,
        hitDieSize: 8,
        hitDieResults: [8, 3],
        hitDieSources: ['max', 'rolled'],
      });
      const character = makeCharacter([rogue]);

      rogue.level = 4;
      HitDiceService.sync(character);

      expect(rogue.hitDieResults).toEqual([8, 3, 5, 5]);
      expect(rogue.hitDieSources).toEqual(['max', 'rolled', 'average', 'average']);
    });

    it('truncates when a class loses levels', () => {
      const rogue = makeClassEntry({
        name: 'Rogue',
        id: 'rogue-1',
        level: 4,
        hitDieSize: 8,
        hitDieResults: [8, 5, 7, 2],
        hitDieSources: ['max', 'average', 'rolled', 'rolled'],
      });
      const character = makeCharacter([rogue]);

      rogue.level = 2;
      HitDiceService.sync(character);

      expect(rogue.hitDieResults).toEqual([8, 5]);
      expect(rogue.hitDieSources).toEqual(['max', 'average']);
    });

    it('labels pre-existing values without a recorded source as manual', () => {
      const rogue = makeClassEntry({
        name: 'Rogue',
        id: 'rogue-1',
        level: 2,
        hitDieSize: 8,
        hitDieResults: [8, 6],
      });
      const character = makeCharacter([rogue]);

      HitDiceService.sync(character);

      expect(rogue.hitDieResults).toEqual([8, 6]);
      expect(rogue.hitDieSources).toEqual(['manual', 'manual']);
    });

    it('is idempotent', () => {
      const rogue = makeClassEntry({ name: 'Rogue', id: 'rogue-1', level: 3, hitDieSize: 8 });
      const character = makeCharacter([rogue]);

      HitDiceService.sync(character);
      const first = [...rogue.hitDieResults];
      HitDiceService.sync(character);

      expect(rogue.hitDieResults).toEqual(first);
    });
  });

  describe('calculatedMax', () => {
    it('sums the component parts', () => {
      expect(
        HitDiceService.calculatedMax({ base: 20, constitution: 6, favoredClass: 3, other: 5 }, 3),
      ).toBe(34);
    });

    it('never drops below one HP per Hit Die', () => {
      // CON 6 (-2) across 4 levels of d6 rolled badly.
      expect(
        HitDiceService.calculatedMax({ base: 5, constitution: -8, favoredClass: 0, other: 0 }, 4),
      ).toBe(4);
    });

    it('leaves a level-less character at zero rather than forcing a floor', () => {
      expect(
        HitDiceService.calculatedMax({ base: 0, constitution: 0, favoredClass: 0, other: 0 }, 0),
      ).toBe(0);
    });
  });

  describe('valuesForEntry', () => {
    it('produces one value per class level', () => {
      const cavalier = makeClassEntry({ name: 'Cavalier', level: 4, hitDieSize: 10 });
      expect(HitDiceService.valuesForEntry(cavalier, 'average')).toEqual([6, 6, 6, 6]);
      expect(HitDiceService.valuesForEntry(cavalier, 'max')).toEqual([10, 10, 10, 10]);
    });
  });
});
