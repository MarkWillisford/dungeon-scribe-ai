import { VariantAbilityEntry } from './types';
import { aasimarVariantSLA } from './raw/aasimar_variant_sla';
import { tieflingVariantSLA } from './raw/tiefling_variant_sla';

export const VARIANT_SLA_TABLES: Record<string, VariantAbilityEntry[]> = {
  Aasimar: aasimarVariantSLA,
  Tiefling: tieflingVariantSLA,
};
