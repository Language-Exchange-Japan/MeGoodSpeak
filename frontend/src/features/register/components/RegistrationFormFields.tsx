import React from "react";

import { Input, Select, TextArea, FormSection } from "../../../components/ui";
import {
  PROFICIENCY_OPTIONS,
  GENDER_OPTIONS,
  LANGUAGE_OPTIONS,
  COUNTRY_OPTIONS,
} from "../../../constants/formConstants";

import type { IUserRegistrationRequest } from "../../../../../shared/user.interface";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

export interface RegistrationFormFieldsProps {
  register: UseFormRegister<IUserRegistrationRequest>;
  errors: FieldErrors<IUserRegistrationRequest>;
}

export function RegistrationFormFields({ register, errors }: RegistrationFormFieldsProps) {
  return (
    <div className="space-y-6">
      <FormSection title="Personal Information" useGrid>
        <Input
          label="Username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Username must be at most 20 characters",
            },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message: "Username can only contain letters, numbers, and underscores",
            },
          })}
          error={errors.username?.message}
          required
        />
        <Input
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address"
            }
          })}
          error={errors.email?.message}
          required
        />
        <Input
          label="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]).{8,}$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            },
          })}
          error={errors.password?.message}
          required
        />
        <Input
          label="First Name"
          {...register("firstName")}
          error={errors.firstName?.message}
          required
        />
        <Input
          label="Family Name"
          {...register("familyName")}
          error={errors.familyName?.message}
          required
        />
      </FormSection>

      <FormSection title="Language Preferences" useGrid>
        <Select
          label="Native Language"
          {...register("profileOptions.nativeLanguage")}
          options={LANGUAGE_OPTIONS}
          placeholder="Select your native language"
          error={errors.profileOptions?.nativeLanguage?.message}
          required
        />
        <Select
          label="Language to Practice"
          {...register("profileOptions.practicingLanguage.language")}
          options={LANGUAGE_OPTIONS}
          placeholder="Select language to practice"
          error={errors.profileOptions?.practicingLanguage?.language?.message}
          required
        />
        <Select
          label="Proficiency Level"
          {...register("profileOptions.practicingLanguage.proficiency")}
          options={PROFICIENCY_OPTIONS}
          error={errors.profileOptions?.practicingLanguage?.proficiency?.message}
          required
        />
      </FormSection>

      <FormSection title="Location & Personal Details" useGrid>
        <Select
          label="Country"
          {...register("profileOptions.country")}
          options={COUNTRY_OPTIONS}
          placeholder="Select your country"
          error={errors.profileOptions?.country?.message}
          required
        />
        <Input
          label="City"
          {...register("profileOptions.city")}
          error={errors.profileOptions?.city?.message}
          required
        />
        <Select
          label="Gender"
          {...register("profileOptions.gender")}
          options={GENDER_OPTIONS}
          error={errors.profileOptions?.gender?.message}
          required
        />
        <Input
          label="Age"
          type="number"
          min="13"
          max="120"
          {...register("profileOptions.age")}
          error={errors.profileOptions?.age?.message}
          required
        />
      </FormSection>

      <FormSection title="About You">
        <TextArea
          label="Bio"
          {...register("bio")}
          placeholder="Tell us a bit about yourself, your interests, and what you'd like to achieve through language exchange..."
          error={errors.bio?.message}
          helperText="Optional - help others get to know you better"
        />
      </FormSection>
    </div>
  );
}
