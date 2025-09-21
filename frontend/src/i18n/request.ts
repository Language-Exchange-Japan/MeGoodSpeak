import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const messageFiles = ["common", "login", "landing"];

  // Load and merge all message files
  const messages = {};

  for (const file of messageFiles) {
    try {
      const fileMessages = (await import(`../messages/${locale}/${file}.json`)).default;
      Object.assign(messages, fileMessages);
    } catch (error) {
      console.warn(`Could not load ${file}.json for locale ${locale}:`, error);
    }
  }

  return {
    locale,
    messages,
  };
});
