import { useTranslations } from "next-intl";
import React from "react";

import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = () => {
  const t = useTranslations("landing.features");

  return (
    <section className="bg-white px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-medium text-black lg:text-5xl">{t("title")}</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 lg:text-xl">{t("description")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard />
        </div>
      </div>
    </section>
  );
};
