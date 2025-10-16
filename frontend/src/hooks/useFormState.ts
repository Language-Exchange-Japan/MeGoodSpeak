import { useState, useCallback } from "react";

import { setNestedValue } from "../utils/formHelpers";

/**
 * A generic custom hook for managing form state with nested object support.
 * Provides handlers for form field changes, form reset, and direct state updates.
 *
 * @param initialData - Initial form data object
 * @returns Object containing current form data, change handler, reset function, and setter
 */
export function useFormState<T>(initialData: T) {
  const [formData, setFormData] = useState<T>(initialData);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => setNestedValue(prev, name, value) as T);
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData(initialData);
  }, [initialData]);

  return {
    formData,
    handleChange,
    resetForm,
    setFormData,
  };
}
