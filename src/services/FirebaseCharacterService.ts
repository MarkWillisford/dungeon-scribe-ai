import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '@config/firebase';
import type { Character } from '@/types';
import type { CharacterSummary } from '@/types/character';
import type { EquipmentSlot } from '@/types/equipment';
import type { ItemSlot } from '@/types/magicItems';
import type { ClassFeature } from '@/types/classes';
import type { ResourcePoolDefinition } from '@/types/resources';
import { PRESET_PF1E_STANDARD } from '@data/rulesets/presets';
import { ALL_CLASS_CHOICE_DEFINITIONS } from '@data/classChoiceDefinitions';

export class FirebaseCharacterService {
  private static readonly COLLECTION = 'characters';

  /**
   * Create a new character in Firestore
   */
  static async create(userId: string, character: Character): Promise<Character> {
    const serialized = this.serializeForFirestore(character);

    const docData = {
      ...serialized,
      userId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, this.COLLECTION), docData);

    return {
      ...character,
      info: {
        ...character.info,
        userId,
        firebaseId: docRef.id,
      },
    };
  }

  /**
   * Get all characters for a user
   */
  static async getUserCharacters(userId: string): Promise<CharacterSummary[]> {
    const q = query(collection(db, this.COLLECTION), where('userId', '==', userId));

    const querySnapshot = await getDocs(q);

    const characters: CharacterSummary[] = querySnapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        name: data.info?.name || 'Unknown',
        level: data.classes?.totalLevel || 1,
        race: data.info?.race?.name || 'Unknown',
        classes:
          data.classes?.classes
            ?.map((c: { name: string; level: number }) => `${c.name} ${c.level}`)
            .join('/') || 'Unknown',
        lastUpdated: data.updatedAt?.toDate?.() || new Date(),
      };
    });

    // Sort by most recently updated
    return characters.sort(
      (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime(),
    );
  }

  /**
   * Get a single character by ID.
   *
   * After deserializing the character document, we fetch the corresponding
   * class documents from Firestore and merge their classFeatureResourcePools
   * onto the character's stored class features. This allows
   * ResourcePoolService.computePools() (called inside
   * ModifierPipelineService.recalculate()) to find pool definitions without
   * needing async Firestore access of its own.
   */
  static async getCharacter(characterId: string): Promise<Character> {
    const docRef = doc(db, this.COLLECTION, characterId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Character not found');
    }

    const data = docSnap.data();
    const character = this.deserializeFromFirestore(data);
    let enriched = character;
    try {
      enriched = await this.mergeClassFeatureResourcePools(character);
    } catch (err) {
      console.warn(
        '[FirebaseCharacterService] mergeClassFeatureResourcePools failed, returning base character',
        err,
      );
    }

    return {
      ...enriched,
      info: {
        ...enriched.info,
        firebaseId: docSnap.id,
      },
    };
  }

  /**
   * Load class documents from Firestore and merge two things onto the character:
   *
   * 1. classFeatures: if a class entry has an empty array (characters created
   *    before features were persisted on the entry), inject features from the
   *    class doc filtered to levels the character has actually reached.
   *
   * 2. classFeatureResourcePools: attach the ResourcePoolDefinition onto each
   *    matching feature by name so ResourcePoolService.computePools() can work
   *    without its own async Firestore access.
   *
   * Uses the class doc snaps already fetched — no extra DB calls.
   */
  private static async mergeClassFeatureResourcePools(character: Character): Promise<Character> {
    const classIds = character.classes.classes.map((cls) => this.classDocId(cls.name));
    const uniqueIds = [...new Set(classIds)];
    if (uniqueIds.length === 0) return character;

    const classDocSnaps = await Promise.all(uniqueIds.map((id) => getDoc(doc(db, 'classes', id))));

    const poolsByClassId = new Map<string, Record<string, ResourcePoolDefinition>>();
    const featuresByClassId = new Map<string, ClassFeature[]>();

    for (const snap of classDocSnaps) {
      if (!snap.exists()) continue;
      const data = snap.data();
      const pools = data.classFeatureResourcePools as
        | Record<string, ResourcePoolDefinition>
        | undefined;
      if (pools) poolsByClassId.set(snap.id, pools);
      const features = data.classFeatures as ClassFeature[] | undefined;
      if (features?.length) featuresByClassId.set(snap.id, features);
    }

    if (poolsByClassId.size === 0 && featuresByClassId.size === 0) return character;

    const enrichedClasses = character.classes.classes.map((cls) => {
      const docId = this.classDocId(cls.name);
      const poolMap = poolsByClassId.get(docId);
      const firestoreFeatures = featuresByClassId.get(docId);

      // Merge Firestore features into the stored array, adding any that are
      // missing (e.g. features gained after level-up that were never persisted).
      const storedFeatures = Array.isArray(cls.classFeatures) ? cls.classFeatures : [];
      const normalizedStored = storedFeatures.map((f) => ({
        ...f,
        effects: f.effects ?? [],
      }));
      const missingFeatures = (firestoreFeatures ?? [])
        .filter((f) => f.level <= cls.level)
        .filter(
          (f) =>
            !normalizedStored.some(
              (existing) => existing.name === f.name && existing.level === f.level,
            ),
        )
        .map((f) => ({ ...f, effects: f.effects ?? [] }));
      let baseFeatures = [...normalizedStored, ...missingFeatures];

      // Inject features granted by class choices that predate the grantsFeature system.
      // For each choice on this class, check if the selected option grants a feature
      // and inject it if it's missing from the stored features.
      const choiceDefs = ALL_CLASS_CHOICE_DEFINITIONS.filter(
        (d) => d.className === cls.name.toLowerCase(),
      );
      for (const choice of cls.classChoices ?? []) {
        const def = choiceDefs.find((d) => d.featureName === choice.featureName);
        if (!def?.optionGroups) continue;
        const selectedId = Array.isArray(choice.selection) ? choice.selection[0] : choice.selection;
        const option = def.optionGroups.flatMap((g) => g.options).find((o) => o.id === selectedId);
        if (!option?.grantsFeature) continue;
        if (!baseFeatures.some((f) => f.name === option.grantsFeature!.name)) {
          baseFeatures = [...baseFeatures, { ...option.grantsFeature, effects: [] }];
        }
      }

      if (!poolMap) return { ...cls, classFeatures: baseFeatures };

      // classFeatures is still empty (no classFeatures field on the Firestore class doc).
      // Synthesize minimal stubs from the pool definitions so computePools() can find them.
      if (baseFeatures.length === 0) {
        const synthetic: ClassFeature[] = Object.entries(poolMap).map(([name, poolDef]) => ({
          name,
          description: '',
          level: 1,
          effects: [],
          resourcePool: poolDef,
        }));
        return { ...cls, classFeatures: synthetic };
      }

      const enrichedFeatures = baseFeatures.map((feature) => {
        if (feature.resourcePool) return feature;
        const poolDef = poolMap[feature.name];
        return poolDef ? { ...feature, resourcePool: poolDef } : feature;
      });

      return { ...cls, classFeatures: enrichedFeatures };
    });

    return {
      ...character,
      classes: { ...character.classes, classes: enrichedClasses },
    };
  }

  /** Derive the Firestore document ID for a class from its display name. */
  private static classDocId(className: string): string {
    return className
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  /**
   * Update a character
   */
  static async update(characterId: string, updates: Partial<Character>): Promise<Character> {
    const docRef = doc(db, this.COLLECTION, characterId);

    const serialized = this.serializeForFirestore(updates as Character);
    await updateDoc(docRef, {
      ...serialized,
      updatedAt: serverTimestamp(),
    });

    return this.getCharacter(characterId);
  }

  /**
   * Delete a character
   */
  static async delete(characterId: string): Promise<void> {
    const docRef = doc(db, this.COLLECTION, characterId);
    await deleteDoc(docRef);
  }

  /**
   * Serialize character for Firestore (Map -> Record conversion)
   */
  private static serializeForFirestore(character: Character): Record<string, unknown> {
    const serialized = JSON.parse(JSON.stringify(character));

    // Convert equippedSlots Map to plain object for Firestore
    if (character.equipment?.equippedSlots instanceof Map) {
      const slotsRecord: Record<string, string> = {};
      for (const [slot, itemId] of character.equipment.equippedSlots.entries()) {
        slotsRecord[slot] = itemId;
      }
      serialized.equipment.equippedSlots = slotsRecord;
    }

    // Convert each companion's equippedSlots Map to a plain object for Firestore
    if (Array.isArray(character.companions) && Array.isArray(serialized.companions)) {
      character.companions.forEach((companion, index) => {
        if (companion.equipment?.equippedSlots instanceof Map) {
          const slotsRecord: Record<string, string> = {};
          for (const [slot, itemId] of companion.equipment.equippedSlots.entries()) {
            slotsRecord[slot] = itemId;
          }
          serialized.companions[index].equipment.equippedSlots = slotsRecord;
        }
      });
    }

    // Convert Date objects to ISO strings (Firestore will use serverTimestamp for created/updated)
    if (serialized.lastUpdated instanceof Date) {
      serialized.lastUpdated = serialized.lastUpdated.toISOString();
    }

    return serialized;
  }

  /**
   * Deserialize character from Firestore (Record -> Map conversion)
   */
  private static deserializeFromFirestore(data: Record<string, unknown>): Character {
    const character = data as unknown as Character;

    // Convert equippedSlots Record back to Map
    if (character.equipment && !(character.equipment.equippedSlots instanceof Map)) {
      const slotsRecord = character.equipment.equippedSlots as unknown as Record<string, string>;
      character.equipment.equippedSlots = new Map(
        Object.entries(slotsRecord || {}) as [EquipmentSlot, string][],
      );
    }

    // Convert each companion's equippedSlots Record back to Map
    if (Array.isArray(character.companions)) {
      character.companions.forEach((companion) => {
        if (companion.equipment && !(companion.equipment.equippedSlots instanceof Map)) {
          const slotsRecord = companion.equipment.equippedSlots as unknown as Record<
            string,
            string
          >;
          companion.equipment.equippedSlots = { ...(slotsRecord || {}) } as Partial<
            Record<ItemSlot, string>
          >;
        }
      });
    }

    // Convert timestamp fields back to Date — handles string (from JSON), Firestore Timestamp, and Date
    if (data.lastUpdated && typeof data.lastUpdated === 'string') {
      character.lastUpdated = new Date(data.lastUpdated);
    } else if (
      data.lastUpdated &&
      typeof (data.lastUpdated as { toDate?: unknown }).toDate === 'function'
    ) {
      character.lastUpdated = (data.lastUpdated as { toDate(): Date }).toDate();
    }

    if (data.createdAt && typeof data.createdAt === 'string') {
      character.createdAt = new Date(data.createdAt);
    } else if (
      data.createdAt &&
      typeof (data.createdAt as { toDate?: unknown }).toDate === 'function'
    ) {
      character.createdAt = (data.createdAt as { toDate(): Date }).toDate();
    }

    // Schema migration: backfill ruleset for documents written before v1.2.0
    if (!character.ruleset) {
      character.ruleset = { ...PRESET_PF1E_STANDARD };
    }

    // Schema migration: backfill companions for documents written before companions feature
    if (!character.companions) {
      character.companions = [];
    }

    return character;
  }
}
