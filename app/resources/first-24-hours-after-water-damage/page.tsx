import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'First 24 Hours After Water Damage | Chicago Emergency Action Guide',
  description: 'Learn critical steps to take in the first 24 hours after water damage in Chicago. Prevent mold, protect flooring, and file insurance claims successfully.',
  alternates: {
    canonical: `${siteConfig.url}/resources/first-24-hours-after-water-damage`,
  },
};

export default function ArticleFirst24Hours() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'First 24 Hours Guide', url: '/resources/first-24-hours-after-water-damage' },
  ]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <article className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <span className="text-xs font-bold bg-sky-100 text-sky-800 px-3 py-1 rounded-full uppercase tracking-wider">
            Emergency Action Checklist
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What to Do in the First 24 Hours After Water Damage in Chicago
          </h1>
          <p className="text-slate-500 text-sm">
            Published by Chicago Water Damage Restoration • 5 min read
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-base leading-relaxed">
          <p className="text-lg text-slate-700 font-medium">
            Discovering standing water in your Chicago home—whether from a frozen winter pipe break or a flooded basement—triggers immediate panic. However, your actions during the first 24 hours dictate whether your property suffers minimal repairs or long-term structural decay and toxic black mold growth.
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-2xl space-y-2">
            <h3 className="font-extrabold text-red-900 text-lg flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span>Step 1: Prioritize Safety & Stop the Source</span>
            </h3>
            <p className="text-sm text-red-800">
              Before stepping into flooded rooms, turn off your main electricity breaker if water is touching electrical outlets or appliances. Shut off your main water valve immediately to stop incoming water volume.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">
            Step 2: Document Everything Before Cleanup Begins
          </h2>
          <p>
            Do not throw away damaged items before documenting them. Take clear photos and videos of standing water levels, saturated furniture, soaked drywall, and structural damage. Your insurance adjuster requires visual proof to approve your claim.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 pt-4">
            Step 3: Call Professional Water Extraction Immediately
          </h2>
          <p>
            Household vacuums and fans cannot pull moisture out of subflooring, wall studs, or carpet padding. Call our 24/7 hotline at <strong>(312) 555-0199</strong> so certified restoration technicians can deploy industrial truck-mounted pumps and LGR dehumidifiers.
          </p>

          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 mt-8 text-center">
            <h3 className="text-2xl font-black">Need 24/7 Water Damage Extraction?</h3>
            <p className="text-slate-300 text-sm">Our Chicago crews guarantee arrival within 60 minutes.</p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-base shadow"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call Now: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
