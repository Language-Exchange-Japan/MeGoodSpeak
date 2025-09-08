/**
 * User Validation Middleware - Expr    body('firstName').n    body('profileOptions.practicingLanguage.proficiency')
        .isIn(PROFICIENCY_LEVELS)
        .withMessage(VALIDATION_MESSAGES.PERSONAL.PROFICIENCY_INVALID),
    body('profileOptions.country').notEmpty().withMessage(VALIDATION_MESSAGES.PROFILE.COUNTRY),
    body('profileOptions.city').notEmpty().withMessage(VALIDATION_MESSAGES.PROFILE.CITY),
    body('profileOptions.gender')
        .isIn(GENDER_OPTIONS)
        .withMessage(VALIDATION_MESSAGES.PERSONAL.GENDER_INVALID),).withMessage(VALIDATION_MESSAGES.PERSONAL.FIRST_NAME),
    body('familyName').notEmpty().withMessage(VALIDATION_MESSAGES.PERSONAL.FAMILY_NAME),
    body('bio')
        .optional()
        .isLength({ max: VALIDATION_RULES.BIO.MAX_LENGTH })
        .withMessage(`Bio cannot exceed ${VALIDATION_RULES.BIO.MAX_LENGTH} characters`),
    body('profileOptions.nativeLanguage')
        .isIn(SUPPORTED_LANGUAGES)
        .withMessage(VALIDATION_MESSAGES.PERSONAL.NATIVE_LANGUAGE_INVALID),
    body('profileOptions.practicingLanguage.language')
        .isIn(SUPPORTED_LANGUAGES)
        .withMessage(VALIDATION_MESSAGES.PERSONAL.PRACTICING_LANGUAGE_INVALID),r rules for user operations
 * Middleware for validating user-related requests.
 *
 * Provides validation chains for user registration, login, and profile updates,
 * ensuring that incoming request bodies meet the required format and constraints.
 */

import { body, validationResult } from 'express-validator';
import type { Request, Response, NextFunction } from 'express';

import { PROFICIENCY_LEVELS, GENDER_OPTIONS } from '../../../shared/user.interface';
import { VALIDATION_RULES, VALIDATION_MESSAGES } from '../constants/validationConstants';
import { isValidCountry, isValidLanguage } from '../utils/validationHelpers';
/**
 * Validation error handler middleware - consolidates error checking for all validation chains
 */
const handleValidationErrors = (
    req: Request,
    res: Response,
    next: NextFunction
): void | Response => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error('Validation errors:', JSON.stringify(errors.array(), null, 2));
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors.array(),
        });
    }
    next();
};

/**
 * Validation chain for user registration.
 * Validates username, email, password, names, bio, and profile options.
 */
export const validateRegistration = [
    body('username')
        .isLength({
            min: VALIDATION_RULES.USERNAME.MIN_LENGTH,
            max: VALIDATION_RULES.USERNAME.MAX_LENGTH,
        })
        .withMessage(
            `Username must be between ${VALIDATION_RULES.USERNAME.MIN_LENGTH} and ${VALIDATION_RULES.USERNAME.MAX_LENGTH} characters`
        )
        .matches(VALIDATION_RULES.USERNAME.PATTERN)
        .withMessage(VALIDATION_MESSAGES.USERNAME.PATTERN),
    body('email').isEmail().withMessage(VALIDATION_MESSAGES.EMAIL.INVALID),
    body('password')
        .isLength({
            min: VALIDATION_RULES.PASSWORD.MIN_LENGTH,
            max: VALIDATION_RULES.PASSWORD.MAX_LENGTH,
        })
        .withMessage(
            `Password must be between ${VALIDATION_RULES.PASSWORD.MIN_LENGTH} and ${VALIDATION_RULES.PASSWORD.MAX_LENGTH} characters`
        ),
    body('firstName').notEmpty().withMessage(VALIDATION_MESSAGES.PERSONAL.FIRST_NAME),
    body('familyName').notEmpty().withMessage(VALIDATION_MESSAGES.PERSONAL.FAMILY_NAME),
    body('bio')
        .optional()
        .isLength({ max: VALIDATION_RULES.BIO.MAX_LENGTH })
        .withMessage(`Bio cannot exceed ${VALIDATION_RULES.BIO.MAX_LENGTH} characters`),
    body('profileOptions.nativeLanguage')
        .customSanitizer((value) => value.trim())
        .custom((value) => {
            return isValidLanguage(value);
        })
        .withMessage(VALIDATION_MESSAGES.PERSONAL.NATIVE_LANGUAGE_INVALID),
    body('profileOptions.practicingLanguage.language')
        .customSanitizer((value) => value.trim())
        .custom((value) => {
            return isValidLanguage(value);
        })
        .withMessage(VALIDATION_MESSAGES.PERSONAL.PRACTICING_LANGUAGE_INVALID),
    body('profileOptions.practicingLanguage.proficiency')
        .isIn(PROFICIENCY_LEVELS)
        .withMessage(VALIDATION_MESSAGES.PERSONAL.PROFICIENCY_INVALID),
    body('profileOptions.country')
        .customSanitizer((value) => {
            console.error(`[Validator] Country before trim: "${value}"`);
            return value.trim();
        })
        .custom((value) => {
            console.error(`[Validator] Validating country: "${value}"`);
            // Special case handling for known problematic countries
            if (value === 'United States' || value === 'South Korea') {
                console.error(`[Validator] Special case match for: "${value}"`);
                return true;
            }
            const result = isValidCountry(value);
            console.error(`[Validator] Country validation result: ${result}`);
            return result;
        })
        .withMessage(VALIDATION_MESSAGES.PROFILE.COUNTRY),
    body('profileOptions.city').notEmpty().withMessage(VALIDATION_MESSAGES.PROFILE.CITY),
    body('profileOptions.gender')
        .isIn(GENDER_OPTIONS)
        .withMessage(VALIDATION_MESSAGES.PERSONAL.GENDER_INVALID),
    body('profileOptions.age')
        .isInt({ min: VALIDATION_RULES.AGE.MIN, max: VALIDATION_RULES.AGE.MAX })
        .withMessage(
            `Age must be between ${VALIDATION_RULES.AGE.MIN} and ${VALIDATION_RULES.AGE.MAX}`
        ),
    handleValidationErrors,
];

export const validateLogin = [
    body('email').isEmail().withMessage(VALIDATION_MESSAGES.EMAIL.INVALID),
    body('password').exists().withMessage(VALIDATION_MESSAGES.PASSWORD.REQUIRED),
    handleValidationErrors,
];

/**
 * Middleware to validate the request body for user profile updates.
 * All fields are optional but must pass validation if provided.
 */
export const validateUpdate = [
    // All fields are optional but must pass their validation if present
    body('username').optional().notEmpty().withMessage(VALIDATION_MESSAGES.USERNAME.REQUIRED),
    body('email').optional().isEmail().withMessage(VALIDATION_MESSAGES.EMAIL.INVALID),
    body('firstName').optional().notEmpty().withMessage(VALIDATION_MESSAGES.PERSONAL.FIRST_NAME),
    body('familyName').optional().notEmpty().withMessage(VALIDATION_MESSAGES.PERSONAL.FAMILY_NAME),
    body('bio').optional().isString().withMessage('Bio must be a string'),
    body('profileOptions.nativeLanguage')
        .optional()
        .notEmpty()
        .withMessage(VALIDATION_MESSAGES.PROFILE.NATIVE_LANGUAGE),
    body('profileOptions.practicingLanguage.language')
        .optional()
        .notEmpty()
        .withMessage(VALIDATION_MESSAGES.PROFILE.PRACTICING_LANGUAGE),
    body('profileOptions.practicingLanguage.proficiency')
        .optional()
        .notEmpty()
        .withMessage(VALIDATION_MESSAGES.PROFILE.PROFICIENCY),
    body('profileOptions.country')
        .optional()
        .custom((value) => {
            return isValidCountry(value);
        })
        .withMessage(VALIDATION_MESSAGES.PROFILE.COUNTRY),
    body('profileOptions.city').optional().notEmpty().withMessage(VALIDATION_MESSAGES.PROFILE.CITY),
    body('profileOptions.gender')
        .optional()
        .notEmpty()
        .withMessage(VALIDATION_MESSAGES.PROFILE.GENDER),
    body('profileOptions.age').optional().isNumeric().withMessage('Age must be a number'),

    handleValidationErrors,
];
