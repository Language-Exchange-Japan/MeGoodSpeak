"use client";

import React from "react";

import { RegisterFormActions } from "./components/RegisterFormActions";
import { RegisterMessages } from "./components/RegisterMessages";
import { RegistrationFormFields } from "./components/RegistrationFormFields";
import { useRegisterForm } from "./hooks/useRegisterForm";

/**
 * Main registration form component.
 * Coordinates between business logic (hooks) and UI components.
 * Demonstrates separation of concerns architecture.
 */
export const RegisterForm: React.FC = () => {
  const { register, handleSubmit, handleReset, errors, isLoading, successMessage } =
    useRegisterForm();

  return (
    <div className="mx-auto w-full max-w-4xl flex-none px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Create Your Account</h1>
            <p className="mt-1 text-sm text-gray-500">
              Join our language exchange community and start practicing with native speakers
            </p>
          </div>
        </div>
      </div>
      <RegisterMessages successMessage={successMessage} generalError={undefined} />

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      >
        <RegistrationFormFields register={register} errors={errors} />

        <RegisterFormActions isLoading={isLoading} onReset={handleReset} />
      </form>
    </div>
  );
};
