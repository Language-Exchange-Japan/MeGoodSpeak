import React from "react";

/**
 * Header shown to visitors who are not authenticated.
 */
export function HeaderPublic() {
  return (
    <div className="mb-6 border-b border-gray-200 pb-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">MeGoodSpeak</h1>
      </div>
    </div>
  );
}
