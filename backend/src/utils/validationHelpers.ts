/**
 * Custom validation helper for country and language fields
 * Provides case-insensitive and whitespace-trimmed validation against supported lists
 */

import { SUPPORTED_COUNTRIES, SUPPORTED_LANGUAGES } from '../../../shared/user.interface';

/**
 * Validates if a string value is a supported country, with case-insensitive and whitespace-trimmed matching
 *
 * @param value - The country name to validate
 * @returns true if the country is valid, false otherwise
 */
export const isValidCountry = (value: string): boolean => {
    if (!value) return false;
   
    // Normalize the value by trimming whitespace and converting to lowercase
    const normalizedValue = value.trim().toLowerCase();
    
    // Check if it matches any of the supported countries (case-insensitive)
    return SUPPORTED_COUNTRIES.some((country) => 
        country.toLowerCase() === normalizedValue
    );

};

/**
 * Validates if a string value is a supported language, with case-insensitive and whitespace-trimmed matching
 *
 * @param value - The language name to validate
 * @returns true if the language is valid, false otherwise
 */
export const isValidLanguage = (value: string): boolean => {
    if (!value) return false;    
    // Normalize the value by trimming whitespace and converting to lowercase
    const normalizedValue = value.trim().toLowerCase();
    
    // Check if it matches any of the supported languages (case-insensitive)
    return SUPPORTED_LANGUAGES.some((language) => 
        language.toLowerCase() === normalizedValue
    );
};
