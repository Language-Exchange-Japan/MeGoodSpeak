/**
 * Form field constants for better maintainability and type safety.
 * Contains field options, validation messages, and default form values.
 */

import { FORM_OPTIONS, getCountryOptions, getLanguageOptions } from "../../../shared/formOptions";

import type { IUserRegistrationRequest } from "../../../shared/user.interface";

/**
 * Pre-configured form options for dropdowns
 */
export const PROFICIENCY_OPTIONS = FORM_OPTIONS.PROFICIENCY;
export const GENDER_OPTIONS = FORM_OPTIONS.GENDER;
export const LANGUAGE_OPTIONS = getLanguageOptions(); // Sorted alphabetically
export const COUNTRY_OPTIONS = getCountryOptions(); // Sorted alphabetically

/**
 * Default form values for user registration.
 * Provides initial state for the registration form with proper typing.
 */
export const DEFAULT_REGISTRATION_DATA: IUserRegistrationRequest = {
	username: "",
	email: "",
	password: "",
	firstName: "",
	familyName: "",
	bio: "",
	profileOptions: {
		nativeLanguage: "English" as const,
		practicingLanguage: {
			language: "Japanese" as const,
			proficiency: "Beginner" as const
		},
		country: 'Japan' as const,
		city: "",
		gender: "Prefer not to say" as const,
		age: 18
	}
};
