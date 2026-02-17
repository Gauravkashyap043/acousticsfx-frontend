"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h2 className="text-[24px] sm:text-[32px] font-semibold text-gray-900 mb-4">
        Something went wrong
      </h2>
      <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
        We encountered an unexpected error. Please try again or contact us if the
        problem persists.
      </p>
      <button
        onClick={reset}
        className="bg-[#1F6775] text-white px-6 py-3 text-sm font-medium hover:bg-[#184f5a] transition cursor-pointer"
      >
        Try Again
      </button>
    </section>
  );
}
