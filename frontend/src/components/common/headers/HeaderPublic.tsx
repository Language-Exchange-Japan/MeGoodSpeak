import Link from "next/link";
import React from "react";

/**
 * Header shown to visitors who are not authenticated.
 */
export function HeaderPublic() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-6 lg:px-12">
      <Link
        href="/"
        className="text-2xl font-bold text-black transition-colors hover:text-gray-800"
      >
        MeGoodSpeak
      </Link>
      <div className="flex items-center space-x-4">
        <Link
          href="/register"
          className="rounded-md border border-black px-6 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="rounded-md bg-black px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-800"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
