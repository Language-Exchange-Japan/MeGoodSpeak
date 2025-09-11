"use server";

import { cookies } from "next/headers";

import { defaultLocale } from "../i18n/config";

import type { Locale } from "../i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  try {
    return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
  } catch {
    // Fallback for build time or when cookies is called outside request context
    return defaultLocale;
  }
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
