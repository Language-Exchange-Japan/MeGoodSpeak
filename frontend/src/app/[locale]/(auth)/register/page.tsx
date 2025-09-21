import { setRequestLocale } from "next-intl/server";

import { RegisterForm } from "@/features/register/RegisterForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account - Language Exchange",
  description: "Join our language exchange community and start practicing with native speakers",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function RegisterPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <RegisterForm />;
}
