import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ShieldCheck, CheckCircle2, AlertTriangle, Clock, ArrowRight, Building2 } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Basement Water Damage Repair Chicago, IL | Flood Recovery',
  description: 'Specialized basement water damage repair in Chicago, IL. Sump pump failure cleanup, foundation wall drying, and basement carpet restoration.',
  alternates: {
    canonical: `${siteConfig.url}/services/basement-water-damage-repair`,
  },
};

export default function ServiceBasementWaterDamagePage() {
  const serviceSchema = getServiceSchema(
    'Basement Water Damage Repair',
    'Specialized Chicago basement flood recovery, foundation wall drying, sump pump failure remediation, and carpet restoration.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/basement-water-damage-repair' },
    { name: 'Basement Water Damage Repair', url: '/services/basement-water-damage-repair' },
  ]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-sky-400 uppercase bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-700/50">
              Specialized Sub-Grade Drying
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Basement Water Damage Repair in Chicago, IL
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Targeted recovery for Chicago basements suffering from sump pump failures, foundation seepage, and municipal sewer backups.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-6 rounded-xl flex items-center space-x-2 text-sm shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>CALL {siteConfig.phone} (60-MIN DISPATCH)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4 prose prose-slate max-w-none text-base leading-relaxed text-slate-700">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Chicago Basement Flood Cleanup & Foundation Drying
              </h2>
              <p className="text-lg text-slate-800 font-medium">
                Basements in Chicago face high hydrostatic water pressure due to dense clay soil and historic sub-grade masonry. Whether in a historic brownstone in <Link href="/chicago/lincoln-park" className="text-sky-600 font-bold hover:underline">Lincoln Park</Link> or a single-family home in <Link href="/chicago/south-side" className="text-sky-600 font-bold hover:underline">South Side Chicago</Link>, basement flooding requires immediate structural drying.
              </p>
              <p>
                Our basement recovery specialists deploy specialized low-profile dehumidifiers, weighted sub-floor extractors, and antimicrobial treatments to protect concrete slabs, finished drywall, and basement joists.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Basement Recovery Solutions We Provide
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">Sump Pump Failure Cleanup</h4>
                  <p className="text-sm text-slate-600">
                    Rapid extraction of standing water caused by power outages, float switch jams, or mechanical pump burnouts.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">Foundation Seepage & Masonry Drying</h4>
                  <p className="text-sm text-slate-600">
                    Extracting water that seeps through stone mortar joints or floor cracks using targeted LGR dehumidification.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">Basement Carpet & Sub-Floor Restoration</h4>
                  <p className="text-sm text-slate-600">
                    Deep water removal and sanitization to salvage finished basement carpeting and sub-grade laminate flooring.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <ContactForm title="Flooded Basement Emergency?" subtitle="Guaranteed 60-minute dispatch across all Chicago neighborhoods." />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-4">
              <h3 className="text-xl font-bold">24/7 Basement Hotline</h3>
              <p className="text-xs text-slate-300">Certified basement flood restoration teams on standby.</p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="block text-center bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-xl text-sm shadow"
              >
                CALL {siteConfig.phone} NOW
              </a>
            </div>
          </div>
        </div>

        <FAQSection title="Frequently Asked Questions" />
      </div>
    </div>
  );
}
