import { useAsync } from "../../../hooks/useAsync";
import { useFormState } from "../../../hooks/useFormState";
import { loginUser } from "../../../services/userService";

interface LoginData {
  email: string;
  password: string;
  [key: string]: string;
}

const INITIAL_LOGIN_DATA: LoginData = {
  email: "",
  password: "",
};

export function useLoginForm() {
  const { formData, handleChange } = useFormState(INITIAL_LOGIN_DATA);

  const {
    data: loginResult,
    error: submitError,
    isLoading: isSubmitting,
    execute: submitLogin,
  } = useAsync(() => loginUser(formData), false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLogin();
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loginResult,
    submitError,
    isSubmitting,
  };
}

export type { LoginData };
