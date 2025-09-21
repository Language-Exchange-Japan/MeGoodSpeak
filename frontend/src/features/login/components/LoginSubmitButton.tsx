import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface LoginSubmitButtonProps {
  isSubmitting: boolean;
}

/**
 * Login form submit button component.
 *
 * @param isSubmitting - Whether form is currently submitting
 */
export function LoginSubmitButton({ isSubmitting }: LoginSubmitButtonProps) {
  const t = useTranslations("form.submitButton");

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`group relative flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white transition-colors duration-200 ${
        isSubmitting
          ? "cursor-not-allowed bg-gray-400"
          : "bg-black hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
      }`}
    >
      {isSubmitting ? t("submitting") : t("default")}
      {!isSubmitting && (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </button>
  );
}
