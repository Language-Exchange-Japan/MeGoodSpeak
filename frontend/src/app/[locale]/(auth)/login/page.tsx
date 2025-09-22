import { setRequestLocale } from "next-intl/server";

import { LoginForm } from "@/features/login/LoginForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Language Exchange",
  description: "Sign in to your Language Exchange account",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LoginPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <LoginForm />;
}
