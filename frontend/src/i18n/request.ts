import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const messageFiles = ["common", "login", "landing", "register"];

  // Load all message files into their own namespaces
  const messages: Record<string, unknown> = {};

  for (const file of messageFiles) {
    try {
      const fileMessages = (await import(`../messages/${locale}/${file}.json`)).default;
      if (file === "common") {
        // Common messages go to root level for backward compatibility
        Object.assign(messages, fileMessages);
      } else {
        // Other files get their own namespace
        messages[file] = fileMessages;
      }
    } catch (error) {
      console.warn(`Could not load ${file}.json for locale ${locale}:`, error);
    }
  }

  return {
    locale,
    messages,
  };
});
