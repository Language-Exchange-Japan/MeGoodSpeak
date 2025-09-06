import { Globe } from "lucide-react";
import React from "react";

import FooterLinksSection from "./FooterLinksSection";
import { FooterPolicies } from "./FooterPolicies";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-black" />
              <span className="text-xl font-bold text-black">LangExchange</span>
            </div>
            <p className="max-w-sm text-gray-600">
              Connect with native speakers worldwide and master any language through real
              conversations.
            </p>
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
