// src/data/companions/bodyShapeSlots.ts
//
// Magic item slot profiles for animal companion body shapes.
// Sourced from "Magic Item Slots — Companions and Familiars" (Ultimate
// Wilderness, 2017, p. 176; originally Animal Archive, 2013), mirrored on
// Archives of Nethys:
//   https://aonprd.com/Rules.aspx?Name=Magic+Item+Slots&Category=Companions+and+Familiars
//
// Semantics:
// - `automatic: true`  — slot is usable from HD 1 with no prerequisite
// - `automatic: false` — slot exists on the shape's table but requires the
//                        Extra Item Slot feat (Animal Archive) to unlock
// - `restriction`      — only items of the given subtype fit the slot
//                        (a horse's belt takes saddles, not belt-of-str)
// - `canGrasp`         — shape can wield weapons / rods / staves / wands
//
// Per the Paizo "A Few More Answers" clarification, companions only get
// `armor` and `neck` automatic; every other listed slot requires the feat.
// The `unusual` category (plants + vermin) gets no automatic slots.

import type { ItemSlot } from '@/types/magicItems';
import type { BodyShape } from '@/types/animalCompanions';

export type SlotSubtypeRestriction = 'saddle' | 'horseshoes';

export interface CompanionSlotAccess {
  slot: ItemSlot;
  automatic: boolean;
  restriction?: SlotSubtypeRestriction;
}

export interface BodyShapeProfile {
  slots: CompanionSlotAccess[];
  canGrasp: boolean;
}

export const BODY_SHAPE_SLOTS: Record<BodyShape, BodyShapeProfile> = {
  bipedHands: {
    canGrasp: true,
    slots: [
      { slot: 'armor', automatic: true },
      { slot: 'belt', automatic: false },
      { slot: 'body', automatic: false },
      { slot: 'chest', automatic: false },
      { slot: 'eyes', automatic: false },
      { slot: 'feet', automatic: false },
      { slot: 'hands', automatic: false },
      { slot: 'head', automatic: false },
      { slot: 'headband', automatic: false },
      { slot: 'neck', automatic: true },
      { slot: 'ring', automatic: false },
      { slot: 'shoulders', automatic: false },
      { slot: 'wrists', automatic: false },
    ],
  },
  bipedClaws: {
    // RAW is silent on claw-wielding; Hero Lab and Pathbuilder both treat
    // bipedal claws as weapon-capable. canGrasp: true matches that consensus.
    canGrasp: true,
    slots: [
      { slot: 'armor', automatic: true },
      { slot: 'belt', automatic: false },
      { slot: 'chest', automatic: false },
      { slot: 'eyes', automatic: false },
      { slot: 'head', automatic: false },
      { slot: 'headband', automatic: false },
      { slot: 'neck', automatic: true },
      { slot: 'ring', automatic: false },
      { slot: 'shoulders', automatic: false },
      { slot: 'wrists', automatic: false },
    ],
  },
  quadrupedClaws: {
    canGrasp: false,
    slots: [
      { slot: 'armor', automatic: true },
      { slot: 'belt', automatic: false, restriction: 'saddle' },
      { slot: 'chest', automatic: false },
      { slot: 'eyes', automatic: false },
      { slot: 'head', automatic: false },
      { slot: 'headband', automatic: false },
      { slot: 'neck', automatic: true },
      { slot: 'shoulders', automatic: false },
      { slot: 'wrists', automatic: false },
    ],
  },
  quadrupedHooves: {
    canGrasp: false,
    slots: [
      { slot: 'armor', automatic: true },
      { slot: 'belt', automatic: false, restriction: 'saddle' },
      { slot: 'chest', automatic: false },
      { slot: 'eyes', automatic: false },
      { slot: 'feet', automatic: false, restriction: 'horseshoes' },
      { slot: 'head', automatic: false },
      { slot: 'headband', automatic: false },
      { slot: 'neck', automatic: true },
      { slot: 'shoulders', automatic: false },
    ],
  },
  quadrupedOther: {
    canGrasp: false,
    slots: [
      { slot: 'armor', automatic: true },
      { slot: 'belt', automatic: false, restriction: 'saddle' },
      { slot: 'chest', automatic: false },
      { slot: 'eyes', automatic: false },
      { slot: 'head', automatic: false },
      { slot: 'headband', automatic: false },
      { slot: 'neck', automatic: true },
      { slot: 'shoulders', automatic: false },
    ],
  },
  quadrupedShortLegs: {
    canGrasp: false,
    slots: [
      { slot: 'armor', automatic: true },
      { slot: 'eyes', automatic: false },
      { slot: 'head', automatic: false },
      { slot: 'headband', automatic: false },
      { slot: 'neck', automatic: true },
      { slot: 'shoulders', automatic: false },
    ],
  },
  avian: {
    canGrasp: true,
    slots: [
      { slot: 'armor', automatic: true },
      { slot: 'belt', automatic: false },
      { slot: 'chest', automatic: false, restriction: 'saddle' },
      { slot: 'eyes', automatic: false },
      { slot: 'head', automatic: false },
      { slot: 'headband', automatic: false },
      { slot: 'neck', automatic: true },
      { slot: 'ring', automatic: false },
      { slot: 'wrists', automatic: false },
    ],
  },
  serpentine: {
    canGrasp: false,
    slots: [
      { slot: 'belt', automatic: false },
      { slot: 'eyes', automatic: false },
      { slot: 'headband', automatic: false },
    ],
  },
  piscine: {
    canGrasp: false,
    slots: [
      { slot: 'belt', automatic: false },
      { slot: 'chest', automatic: false, restriction: 'saddle' },
      { slot: 'eyes', automatic: false },
    ],
  },
  unusual: {
    canGrasp: false,
    slots: [
      { slot: 'belt', automatic: false },
      { slot: 'eyes', automatic: false },
    ],
  },
};
