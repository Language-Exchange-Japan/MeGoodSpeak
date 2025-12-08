import { z } from "zod";

import {
  PROFICIENCY_LEVELS,
  SUPPORTED_LANGUAGES,
  GENDER_OPTIONS,
} from "../../../../../../shared/user.interface";

export const registrationSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  firstName: z.string().min(1, "First name is required"),
  familyName: z.string().min(1, "Family name is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  profileOptions: z.object({
    nativeLanguage: z.enum(SUPPORTED_LANGUAGES, {
      message: "Please select a valid native language",
    }),
    practicingLanguage: z.object({
      language: z.enum(SUPPORTED_LANGUAGES, {
        message: "Please select a valid practicing language",
      }),
      proficiency: z.enum(PROFICIENCY_LEVELS, {
        message: "Please select a valid proficiency level",
      }),
    }),
    country: z.string().min(1, "Country is required"),
    city: z.string().min(1, "City is required"),
    gender: z.enum(GENDER_OPTIONS, { message: "Please select a valid gender" }),
    age: z
      .number()
      .min(13, "You must be at least 13 years old")
      .max(120, "Please enter a valid age"),
  }),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
