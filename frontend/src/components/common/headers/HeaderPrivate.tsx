import React from "react";

import type { HeaderPublicProps } from "./types/types";

/**
 * Header shown to authenticated users.
 *
 * @param title - Main heading text
 * @param subtitle - Optional descriptive text below the title
 * @param children - Optional content (typically buttons or actions) aligned to the right
 * @returns A styled page header with title, subtitle, and action area
 */
export function HeaderPrivate({ title = "MeGoodSpeak", subtitle, children }: HeaderPublicProps) {
  return (
    <div className="mb-6 border-b border-gray-200 pb-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>
        {children && <div className="flex items-center space-x-2">{children}</div>}
      </div>
    </div>
  );
}
