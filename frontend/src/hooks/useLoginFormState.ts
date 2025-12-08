import { useState } from "react";

/**
 * A custom hook for managing simple form state.
 * @param initialData - The initial form data object.
 * @returns Object containing form data and a change handler.
 */
export function useLoginFormState<T>(initialData: T) {
  const [formData, setFormData] = useState<T>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    handleChange,
  };
}
