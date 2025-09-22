import { useTranslations } from "next-intl";
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
  const tSections = useTranslations("register.sections");
  const tForm = useTranslations("register.form");
  const tValidation = useTranslations("register.validation");

  return (
    <div className="space-y-6">
      <FormSection title={tSections("personalInfo")} useGrid>
        <Input
          label={tForm("username.label")}
          placeholder={tForm("username.placeholder")}
          {...register("username", {
            required: tValidation("usernameRequired"),
            minLength: {
              value: 3,
              message: tValidation("usernameMinLength"),
            },
            maxLength: {
              value: 20,
              message: tValidation("usernameMaxLength"),
            },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message: tValidation("usernamePattern"),
            },
          })}
          error={errors.username?.message}
          required
        />
        <Input
          label={tForm("email.label")}
          placeholder={tForm("email.placeholder")}
          type="email"
          {...register("email", {
            required: tValidation("emailRequired"),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: tValidation("emailInvalid"),
            },
          })}
          error={errors.email?.message}
          required
        />
        <Input
          label={tForm("password.label")}
          placeholder={tForm("password.placeholder")}
          type="password"
          {...register("password", {
            required: tValidation("passwordRequired"),
            minLength: {
              value: 8,
              message: tValidation("passwordMinLength"),
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]).{8,}$/,
              message: tValidation("passwordPattern"),
            },
          })}
          error={errors.password?.message}
          required
        />
        <Input
          label={tForm("firstName.label")}
          placeholder={tForm("firstName.placeholder")}
          {...register("firstName")}
          error={errors.firstName?.message}
          required
        />
        <Input
          label={tForm("familyName.label")}
          placeholder={tForm("familyName.placeholder")}
          {...register("familyName")}
          error={errors.familyName?.message}
          required
        />
      </FormSection>

      <FormSection title={tSections("languagePreferences")} useGrid>
        <Select
          label={tForm("nativeLanguage.label")}
          {...register("profileOptions.nativeLanguage")}
          options={LANGUAGE_OPTIONS}
          placeholder={tForm("nativeLanguage.placeholder")}
          error={errors.profileOptions?.nativeLanguage?.message}
          required
        />
        <Select
          label={tForm("practicingLanguage.label")}
          {...register("profileOptions.practicingLanguage.language")}
          options={LANGUAGE_OPTIONS}
          placeholder={tForm("practicingLanguage.placeholder")}
          error={errors.profileOptions?.practicingLanguage?.language?.message}
          required
        />
        <Select
          label={tForm("proficiency.label")}
          {...register("profileOptions.practicingLanguage.proficiency")}
          options={PROFICIENCY_OPTIONS}
          placeholder={tForm("proficiency.placeholder")}
          error={errors.profileOptions?.practicingLanguage?.proficiency?.message}
          required
        />
      </FormSection>

      <FormSection title={tSections("locationDetails")} useGrid>
        <Select
          label={tForm("country.label")}
          {...register("profileOptions.country")}
          options={COUNTRY_OPTIONS}
          placeholder={tForm("country.placeholder")}
          error={errors.profileOptions?.country?.message}
          required
        />
        <Input
          label={tForm("city.label")}
          placeholder={tForm("city.placeholder")}
          {...register("profileOptions.city")}
          error={errors.profileOptions?.city?.message}
          required
        />
        <Select
          label={tForm("gender.label")}
          {...register("profileOptions.gender")}
          options={GENDER_OPTIONS}
          placeholder={tForm("gender.placeholder")}
          error={errors.profileOptions?.gender?.message}
          required
        />
        <Input
          label={tForm("age.label")}
          placeholder={tForm("age.placeholder")}
          type="number"
          min="13"
          max="120"
          {...register("profileOptions.age")}
          error={errors.profileOptions?.age?.message}
          required
        />
      </FormSection>

      <FormSection title={tSections("aboutYou")}>
        <TextArea
          label={tForm("bio.label")}
          {...register("bio")}
          placeholder={tForm("bio.placeholder")}
          error={errors.bio?.message}
          helperText={tForm("bio.helperText")}
        />
      </FormSection>
    </div>
  );
}
