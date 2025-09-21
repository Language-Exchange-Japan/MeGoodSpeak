import { useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/i18n/navigation";

const sections = [
  {
    key: "platform",
    links: [
      { href: "/features", key: "features" },
      { href: "/pricing", key: "pricing" },
      { href: "/languages", key: "languages" },
      { href: "/mobile", key: "mobileApp" },
    ],
  },
  {
    key: "community",
    links: [
      { href: "/teachers", key: "findTeachers" },
      { href: "/students", key: "findStudents" },
      { href: "/events", key: "languageEvents" },
      { href: "/blog", key: "blog" },
    ],
  },
  {
    key: "support",
    links: [
      { href: "/help", key: "helpCenter" },
      { href: "/contact", key: "contactUs" },
      { href: "/safety", key: "safety" },
      { href: "/guidelines", key: "communityGuidelines" },
    ],
  },
  {
    key: "company",
    links: [
      { href: "/about", key: "aboutUs" },
      { href: "/careers", key: "careers" },
      { href: "/press", key: "press" },
      { href: "/partners", key: "partners" },
    ],
  },
];

export const FooterLinksSection: React.FC = () => {
  const t = useTranslations("footer.sections");

  return (
    <>
      {/* Sections */}
      {sections.map((section) => (
        <div key={section.key} className="space-y-4">
          <h3 className="font-semibold text-black">{t(`${section.key}.title`)}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-600 transition-colors duration-200 hover:text-black"
                >
                  {t(`${section.key}.links.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
