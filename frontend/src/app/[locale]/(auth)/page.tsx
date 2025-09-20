import { setRequestLocale } from "next-intl/server";

import { LandingPage } from "@/features/landing-page/LandingPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Language Exchange - Connect and Converse Globally",
  description:
    "Join our language exchange community to practice languages with native speakers from around the world",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <LandingPage />;
}
