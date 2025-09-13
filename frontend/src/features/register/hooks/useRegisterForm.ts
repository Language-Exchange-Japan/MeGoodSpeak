// Refactored to use react-hook-form

import { useState } from "react";
import { useForm } from "react-hook-form";

import { DEFAULT_REGISTRATION_DATA } from "../../../constants/formConstants";
import { registerUser } from "../../../services/userService";

import type { SubmitHandler } from "react-hook-form";

type RegistrationFormInputs = typeof DEFAULT_REGISTRATION_DATA;

/**
 * Custom hook for registration form logic and state management using react-hook-form.
 * Separates business logic from UI presentation.
 *
 * @returns Object containing form state, handlers, and submission logic
 */
export function useRegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormInputs>({
    defaultValues: DEFAULT_REGISTRATION_DATA,
    mode: "onSubmit",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const onSubmit: SubmitHandler<RegistrationFormInputs> = async (data) => {
    setSuccessMessage("");
    try {
      const result = await registerUser(data);
      const userName = result.user?.firstName || result.user?.username || "User";
      setSuccessMessage(`Registration successful! Welcome, ${userName}!`);
      reset();
    } catch (error) {
      if (error instanceof Error) {
        // TODO: Map server validation errors to specific fields
        console.error("Registration error:", error.message);
      }
    }
  };

  const handleReset = () => {
    reset();
    setSuccessMessage("");
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    handleReset,
    errors,
    isLoading: isSubmitting,
    successMessage,
  };
}
