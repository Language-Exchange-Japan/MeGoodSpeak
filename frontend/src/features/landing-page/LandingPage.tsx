"use client";

import React from "react";

import { HeaderPublic } from "@/components/common/headers/HeaderPublic";

import { CTASection } from "./components/CTASection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Introduction } from "./components/Introduction";
import { StatsSection } from "./components/StatsSection";
import { useHomePage } from "./hooks/useHomePage";

export function LandingPage() {
  const {} = useHomePage();

  return (
    <div className="min-h-screen bg-white">
      <HeaderPublic />
      <Introduction />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}
