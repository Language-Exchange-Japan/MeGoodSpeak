"use client";

import React from "react";

import { CTASection } from "./components/CTASection";
import { FeaturesSection } from "./components/features/FeaturesSection";
import { Footer } from "./components/footer/Footer";
import { Introduction } from "./components/Introduction";
import { StatsSection } from "./components/stats/StatsSection";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Introduction />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
