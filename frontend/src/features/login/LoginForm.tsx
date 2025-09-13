"use client";

import { LoginFormFields } from "./components/LoginFormFields";
import { LoginHeader } from "./components/LoginHeader";
import { LoginMessages } from "./components/LoginMessages";
import { LoginSocialOptions } from "./components/LoginSocialOptions";
import { LoginSubmitButton } from "./components/LoginSubmitButton";
import { useLoginForm } from "./hooks/useLoginForm";

/**
 * Main login form component.
 * Coordinates between business logic (hooks) and UI components.
 * Demonstrates separation of concerns architecture.
 */
export function LoginForm() {
  const { register, handleSubmit, errors, message, messageType, isSubmitting } = useLoginForm();

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <LoginHeader />

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <LoginMessages message={message} messageType={messageType} />

          <form onSubmit={handleSubmit}>
            <LoginFormFields register={register} errors={errors} isSubmitting={isSubmitting} />

            <div className="mt-6">
              <LoginSubmitButton isSubmitting={isSubmitting} />
            </div>
          </form>

          <LoginSocialOptions />
        </div>
      </div>
    </div>
  );
}
