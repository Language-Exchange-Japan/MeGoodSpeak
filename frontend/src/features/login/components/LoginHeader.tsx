import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

/**
 * Login page header component with branding and navigation.
 */
export function LoginHeader() {
  const t = useTranslations("header");

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <Link href="/" className="flex justify-center">
        <h2 className="text-3xl font-bold text-black">{t("brandName")}</h2>
      </Link>
      <h2 className="mt-6 text-center text-3xl font-medium text-gray-900">{t("title")}</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        {t("signupPrompt")}{" "}
        <Link href="/register" className="font-medium text-black hover:underline">
          {t("signupLink")}
        </Link>
      </p>
    </div>
  );
}
