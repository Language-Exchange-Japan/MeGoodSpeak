"use client";

import React from "react";

import { HeaderPublic } from "@/components/common/headers/HeaderPublic";

import { RegisterFormActions, RegisterMessages } from "./components";
import { useRegisterForm } from "./hooks/useRegisterForm";
import { RegistrationFormFields } from "./RegistrationFormFields";

/**
 * Main registration form component.
 * Coordinates between business logic (hooks) and UI components.
 * Demonstrates separation of concerns architecture.
 */
export const RegisterForm: React.FC = () => {
  const { formData, handleChange, handleSubmit, handleReset, errors, isLoading, successMessage } =
    useRegisterForm();

  return (
    <div className="max-w-4xl py-8">
      <HeaderPublic />

      <RegisterMessages successMessage={successMessage} generalError={errors.general} />

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      >
        <RegistrationFormFields formData={formData} handleChange={handleChange} errors={errors} />

        <RegisterFormActions isLoading={isLoading} onReset={handleReset} />
      </form>
    </div>
  );
};
