import { useTranslations } from "next-intl";

import type { UseFormRegister, FieldErrors } from "react-hook-form";

interface LoginData {
  email: string;
  password: string;
}

interface LoginFormFieldsProps {
  register: UseFormRegister<LoginData>;
  errors: FieldErrors<LoginData>;
  isSubmitting: boolean;
}

/**
 * Login form input fields component.
 * Pure UI component without business logic.
 *
 * @param register - React Hook Form register function
 * @param errors - Form validation errors
 * @param isSubmitting - Whether form is currently submitting
 */
export function LoginFormFields({ register, errors, isSubmitting }: LoginFormFieldsProps) {
  const t = useTranslations("login.form");
  const tValidation = useTranslations("login.validation");

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {t("email.label")}
        </label>
        <div className="mt-1">
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            {...register("email", {
              required: tValidation("emailRequired"),
              pattern: {
                value: /^\S+@\S+$/i,
                message: tValidation("emailInvalid"),
              },
            })}
            disabled={isSubmitting}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`block w-full appearance-none border px-3 py-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md text-gray-900 placeholder-gray-400 focus:border-black focus:ring-black focus:outline-none disabled:bg-gray-100 sm:text-sm`}
            placeholder={t("email.placeholder")}
          />
        </div>
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          {t("password.label")}
        </label>
        <div className="mt-1">
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            {...register("password", {
              required: tValidation("passwordRequired"),
              minLength: {
                value: 6,
                message: tValidation("passwordMinLength"),
              },
            })}
            disabled={isSubmitting}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
            className={`block w-full appearance-none rounded-md border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-black focus:outline-none disabled:bg-gray-100 sm:text-sm`}
            placeholder={t("password.placeholder")}
          />
        </div>
        {errors.password && (
          <p id="password-error" className="mt-1 text-sm text-red-600">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            disabled={isSubmitting}
            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black disabled:opacity-50"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            {t("rememberMe")}
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-black hover:underline">
            {t("forgotPassword")}
          </a>
        </div>
      </div>
    </div>
  );
}
