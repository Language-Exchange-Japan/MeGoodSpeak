import React from "react";

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
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email address",
              },
            })}
            disabled={isSubmitting}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`block w-full appearance-none border px-3 py-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md text-gray-900 placeholder-gray-400 focus:border-black focus:ring-black focus:outline-none disabled:bg-gray-100 sm:text-sm`}
            placeholder="Enter your email"
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
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            disabled={isSubmitting}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
            className={`block w-full appearance-none rounded-md border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-black focus:outline-none disabled:bg-gray-100 sm:text-sm`}
            placeholder="Enter your password"
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
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-black hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}
