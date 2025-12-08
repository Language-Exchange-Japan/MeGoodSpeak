/**
 * Centralized form options for consistent UI components across frontend
 */

import {
  PROFICIENCY_LEVELS,
  GENDER_OPTIONS,
  SUPPORTED_LANGUAGES,
  SUPPORTED_COUNTRIES,
} from "./user.interface";

export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Converts array to select options format
 */
const createOptions = (items: readonly string[]): SelectOption[] =>
  items.map((item) => ({ value: item, label: item }));

/**
 * Form options for select dropdowns - centralized and memoized
 */
export const FORM_OPTIONS = {
  PROFICIENCY: createOptions(PROFICIENCY_LEVELS),
  GENDER: createOptions(GENDER_OPTIONS),
  LANGUAGE: createOptions(SUPPORTED_LANGUAGES),
  COUNTRY: createOptions(SUPPORTED_COUNTRIES),
} as const;

/**
 * Get country options sorted alphabetically
 */
export const getCountryOptions = (): SelectOption[] =>
  [...FORM_OPTIONS.COUNTRY].sort((a, b) => a.label.localeCompare(b.label));

/**
 * Get language options sorted alphabetically
 */
export const getLanguageOptions = (): SelectOption[] =>
  [...FORM_OPTIONS.LANGUAGE].sort((a, b) => a.label.localeCompare(b.label));
