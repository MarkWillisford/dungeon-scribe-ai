import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addCompanion, removeCompanion } from '@/store/slices/characterEntrySlice';
import { CompanionCard } from './CompanionCard';
import { CompanionPickerSheet } from './CompanionPickerSheet';
import { ALL_ANIMAL_COMPANIONS } from '@/data/animalCompanions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';
import type { GrantsCompanionSpec } from '@/data/templates/types';

export interface TemplateCompanionSectionProps {
  templateId: string; // TemplateDefinition.id
  templateName: string;
  spec: GrantsCompanionSpec;
}

// Compute the initial effective progression level for a template-granted
// companion. Mirrors CompanionService.applyGrantsCompanionFormula but lives
// locally so this component doesn't reach into the service layer for a
// one-line pure computation.
function computeInitialEffectiveLevel(spec: GrantsCompanionSpec, characterLevel: number): number {
  switch (spec.effectiveLevelFormula) {
    case 'characterLevel':
      return Math.max(1, characterLevel);
    case 'characterLevel-3':
      return Math.max(1, characterLevel - 3);
    case 'characterLevel-4':
      return Math.max(1, characterLevel - 4);
  }
}

function makeInstanceId(): string {
  return `comp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

// Companion grant rendered beneath a template card on the character's
// Classes & Templates tab. Appears only for templates whose definition
// carries `grantsCompanion`. Pattern mirrors the class-side CompanionSection
// inside ClassEntryCard — same picker, same CompanionCard display — but
// hangs off a template instead of a class and uses the formula from the
// template spec for effective level.
export function TemplateCompanionSection({
  templateId,
  templateName,
  spec,
}: TemplateCompanionSectionProps) {
  const { fantasy, isDark } = useTheme();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [pickerOpen, setPickerOpen] = useState(false);

  // Same fallback route segment the class-side section uses for unsaved drafts.
  const originalCharacterId = useAppSelector((state) => state.characterEntry.originalCharacterId);
  const routeCharacterId = originalCharacterId ?? 'draft';

  // One companion per template (no multi-grant templates in scope for 1.8).
  // Using find so adding a second is a no-op at the UI layer.
  const companion = useAppSelector((state) =>
    state.characterEntry.character.companions.find(
      (c) => c.grantedBy.type === 'template' && c.grantedBy.templateId === templateId,
    ),
  );

  const totalCharacterLevel = useAppSelector((state) =>
    state.characterEntry.character.classes.classes.reduce((sum, c) => sum + c.level, 0),
  );

  const companionEntry = useMemo(
    () =>
      companion ? ALL_ANIMAL_COMPANIONS.find((ac) => ac.id === companion.sourceEntryId) : undefined,
    [companion],
  );

  const handleAdd = (ac: AnimalCompanionEntry) => {
    dispatch(
      addCompanion({
        instanceId: makeInstanceId(),
        sourceEntryId: ac.id,
        name: ac.name,
        grantedBy: { type: 'template', templateId },
        effectiveProgressionLevel: computeInitialEffectiveLevel(spec, totalCharacterLevel),
      }),
    );
    setPickerOpen(false);
  };

  return (
    <View style={styles.container}>
      {companion ? (
        <CompanionCard
          companion={companion}
          entry={companionEntry}
          grantedByLabel={templateName}
          onRemove={() => dispatch(removeCompanion(companion.instanceId))}
          onEdit={() =>
            router.push(`/characters/${routeCharacterId}/companions/${companion.instanceId}`)
          }
        />
      ) : (
        <Pressable
          onPress={() => setPickerOpen(true)}
          style={[styles.addBtn, { borderColor: isDark ? fantasy.gold : fantasy.bronze }]}
          accessibilityRole="button"
          accessibilityLabel={`Add companion granted by ${templateName}`}
        >
          <Text style={[styles.addText, { color: isDark ? fantasy.gold : fantasy.darkWood }]}>
            + Add Companion ({templateName})
          </Text>
        </Pressable>
      )}

      <CompanionPickerSheet
        visible={pickerOpen}
        title="Choose Companion"
        pickerFilter={spec.pickerFilter}
        onSelect={handleAdd}
        onClose={() => setPickerOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 4,
  },
  addBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },
  addText: {
    fontFamily: 'Cinzel',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});
