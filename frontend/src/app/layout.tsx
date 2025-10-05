import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Language Exchange",
  description: "Connect and converse globally",
};

type Props = {
  children: React.ReactNode;
  params?: Promise<{ locale?: string }>;
};

/**
 * The root layout for the application.
 */
export default async function RootLayout({ children, params }: Props) {
  let locale = "en"; // default locale

  if (params) {
    const resolvedParams = await params;
    locale = resolvedParams.locale || "en";
  }

  return (
    <html lang={locale}>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
