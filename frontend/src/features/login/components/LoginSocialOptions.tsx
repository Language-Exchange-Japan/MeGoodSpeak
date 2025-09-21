import { useTranslations } from "next-intl";

/**
 * Social login options component.
 */
export function LoginSocialOptions() {
  const t = useTranslations("socialLogin");

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">{t("divider")}</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm transition-colors duration-200 hover:bg-gray-50"
        >
          <span>{t("google")}</span>
        </button>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm transition-colors duration-200 hover:bg-gray-50"
        >
          <span>{t("facebook")}</span>
        </button>
      </div>
    </div>
  );
}
