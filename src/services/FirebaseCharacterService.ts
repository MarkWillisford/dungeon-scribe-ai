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
import type { EquipmentSlot, Equipment } from '@/types/equipment';

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
   * Get a single character by ID
   */
  static async getCharacter(characterId: string): Promise<Character> {
    const docRef = doc(db, this.COLLECTION, characterId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Character not found');
    }

    const data = docSnap.data();
    const character = this.deserializeFromFirestore(data);

    return {
      ...character,
      info: {
        ...character.info,
        firebaseId: docSnap.id,
      },
    };
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

    // Convert timestamp fields back to Date
    if (data.lastUpdated && typeof data.lastUpdated === 'string') {
      character.lastUpdated = new Date(data.lastUpdated);
    } else if ((data.lastUpdated as any)?.toDate) {
      character.lastUpdated = (data.lastUpdated as any).toDate();
    }

    if (data.createdAt && typeof data.createdAt === 'string') {
      character.createdAt = new Date(data.createdAt);
    } else if ((data.createdAt as any)?.toDate) {
      character.createdAt = (data.createdAt as any).toDate();
    }

    return character;
  }
}
