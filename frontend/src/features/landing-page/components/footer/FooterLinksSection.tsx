import Link from "next/link";
import React from "react";

const sections = [
  {
    title: "Platform",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/languages", label: "Languages" },
      { href: "/mobile", label: "Mobile App" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/teachers", label: "Find Teachers" },
      { href: "/students", label: "Find Students" },
      { href: "/events", label: "Language Events" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/help", label: "Help Center" },
      { href: "/contact", label: "Contact Us" },
      { href: "/safety", label: "Safety" },
      { href: "/guidelines", label: "Community Guidelines" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/press", label: "Press" },
      { href: "/partners", label: "Partners" },
    ],
  },
];

export const FooterLinksSection: React.FC = () => (
  <>
    {/* Sections */}
    {sections.map((section) => (
      <div key={section.title} className="space-y-4">
        <h3 className="font-semibold text-black">{section.title}</h3>
        <ul className="space-y-2">
          {section.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-600 transition-colors duration-200 hover:text-black"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </>
);
