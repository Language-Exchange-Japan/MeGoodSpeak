import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { loginUser } from "../../../services/userService";
import { tokenStorage } from "../../../utils/localStorage";

import type { SubmitHandler } from "react-hook-form";

// Login data interface
interface LoginData {
  email: string;
  password: string;
}

/**
 * Custom hook for login form logic and state management using react-hook-form.
 * Separates business logic from UI presentation with real-time validation.
 *
 * @returns Object containing form state, handlers, and submission logic
 */
export function useLoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loginResult, setLoginResult] = useState<{ message: string } | null>(null);

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    setSubmitError(null);
    setLoginResult(null);

    try {
      const result = await loginUser(data);
      if (result && result.token) {
        tokenStorage.set(result.token);
        setLoginResult(result);
        // Redirect to /en/profile after successful login
        router.push(`/en/profile`);
      } else {
        throw new Error("Login failed: No token received.");
      }
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError("An unexpected error occurred");
      }
    }
  };

  const message = loginResult?.message || submitError || null;
  const messageType: "error" | "success" | null = submitError
    ? "error"
    : loginResult
      ? "success"
      : null;

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    loginResult,
    submitError,
    message,
    messageType,
  };
}

export type { LoginData };
