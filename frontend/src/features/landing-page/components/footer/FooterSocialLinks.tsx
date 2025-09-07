import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: <Facebook className="h-5 w-5" />,
    label: "Facebook",
  },
  {
    href: "https://twitter.com",
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
  },
  {
    href: "https://instagram.com",
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com",
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
  },
];

export const FooterSocialLinks = () => (
  <>
    {/* Social Links */}
    <div className="flex space-x-4 pt-4">
      {socialLinks.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="p-2 text-gray-600 transition-colors duration-200 hover:text-black"
        >
          {social.icon}
        </a>
      ))}
    </div>
  </>
);
