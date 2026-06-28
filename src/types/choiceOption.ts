import type { FeatPrerequisite } from './feats';

// Shared primitives for any choice-picker system (class choices, template choices, etc.)
// Domain-specific types extend these rather than duplicating the shape.

export interface ChoiceOption {
  id: string;
  name: string;
  description: string;
  prerequisites?: FeatPrerequisite[];
  subtypePrompt?: {
    label: string;
    options: string[];
  };
}

export interface ChoiceOptionGroup<T extends ChoiceOption> {
  id: string;
  name: string;
  options: T[];
}
