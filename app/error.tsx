'use client';

import React from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Something went wrong!</h2>
      <p className="text-slate-600 mb-6 max-w-md">An unexpected error occurred while loading this page.</p>
      <div className="flex space-x-4">
        <button
          onClick={() => reset()}
          className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2.5 px-5 rounded-xl shadow text-sm transition"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2.5 px-5 rounded-xl shadow text-sm transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
