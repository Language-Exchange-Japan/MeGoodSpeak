import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

import { FooterLinksSection } from "./FooterLinksSection";
import { FooterPolicies } from "./FooterPolicies";
import { FooterSocialLinks } from "./FooterSocialLinks";

export const Footer = () => {
  const t = useTranslations("footer.brand");

  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-black" />
              <span className="text-xl font-bold text-black">{t("name")}</span>
            </div>
            <p className="max-w-sm text-gray-600">{t("description")}</p>

            {/* Social media links */}
            <FooterSocialLinks />
          </div>
          {/* Links */}
          <FooterLinksSection />
        </div>

        {/* Policies, Terms of service */}
        <FooterPolicies />
      </div>
    </footer>
  );
};
