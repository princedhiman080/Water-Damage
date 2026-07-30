import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-sky-600 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Page Not Found</h2>
      <p className="text-slate-600 mb-6 max-w-md">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link
        href="/"
        className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2.5 px-6 rounded-xl shadow text-sm transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
