import { useTranslations } from "next-intl";

export const FooterPolicies = () => {
  const t = useTranslations("footer.policies");

  return (
    <div className="flex flex-col items-center justify-between space-y-4 border-t border-gray-200 pt-8 md:flex-row md:space-y-0">
      <p className="text-sm text-gray-600">{t("copyright")}</p>

      <div className="flex space-x-6 text-sm">
        <a
          href="/privacy"
          className="text-gray-600 transition-colors duration-200 hover:text-black"
        >
          {t("privacyPolicy")}
        </a>
        <a href="/terms" className="text-gray-600 transition-colors duration-200 hover:text-black">
          {t("termsOfService")}
        </a>
        <a
          href="/cookies"
          className="text-gray-600 transition-colors duration-200 hover:text-black"
        >
          {t("cookiePolicy")}
        </a>
      </div>
    </div>
  );
};
