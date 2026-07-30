import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, AlertTriangle } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Water Damage Guides & Resources | Chicago Emergency Preparedness',
  description: 'Educational articles and emergency guides on handling water damage, burst pipes, flood cleanup, and mold prevention in Chicago, IL.',
  alternates: {
    canonical: `${siteConfig.url}/resources`,
  },
};

export default function ResourcesPage() {
  const articles = [
    {
      title: "What to Do in the First 24 Hours After Water Damage in Chicago",
      slug: "/resources/first-24-hours-after-water-damage",
      excerpt: "Step-by-step checklist to protect your family, prevent toxic mold growth, and secure your homeowners insurance claim after a burst pipe or flood.",
      category: "Emergency Guide",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Educational Guides
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Water Damage Resources & Prevention Guides
          </h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Practical advice from certified Chicago restoration technicians on protecting your property and handling water emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-bold text-sky-600 bg-sky-100 px-2.5 py-1 rounded-full">{article.category}</span>
                  <span className="text-slate-500">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 hover:text-sky-600 transition">
                  <Link href={article.slug}>{article.title}</Link>
                </h2>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link href={article.slug} className="inline-flex items-center text-sm font-bold text-sky-600 hover:text-sky-700">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
