import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ShieldCheck, CheckCircle2, AlertTriangle, Clock, ArrowRight, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Emergency Water Extraction Chicago, IL | 24/7 Rapid Removal',
  description: 'Immediate 24/7 emergency water extraction in Chicago, IL. High-capacity pumps for burst pipes, water heater leaks, and sudden flooding.',
  alternates: {
    canonical: `${siteConfig.url}/services/emergency-water-extraction`,
  },
};

export default function ServiceEmergencyExtractionPage() {
  const serviceSchema = getServiceSchema(
    'Emergency Water Extraction',
    'Immediate 24/7 high-capacity water removal for burst pipes, ruptured water heaters, and structural flooding in Chicago, IL.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/emergency-water-extraction' },
    { name: 'Emergency Water Extraction', url: '/services/emergency-water-extraction' },
  ]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-sky-400 uppercase bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-700/50">
              Immediate 60-Minute Response
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Emergency Water Extraction in Chicago, IL
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Rapid 24/7 water removal using truck-mounted extraction units and weighted sub-floor rovers for burst pipes and sudden structural leaks.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-6 rounded-xl flex items-center space-x-2 text-sm shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>CALL {siteConfig.phone} (IMMEDIATE DISPATCH)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4 prose prose-slate max-w-none text-base leading-relaxed text-slate-700">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                24/7 Rapid Water Removal Across All Chicago Neighborhoods
              </h2>
              <p className="text-lg text-slate-800 font-medium">
                When a water main or copper pipe bursts in a Chicago property—especially during sub-zero winter temperatures—every second counts. Water rapidly migrates into subfloors, electrical conduits, and ceiling joists in neighborhoods like <Link href="/chicago/west-loop" className="text-sky-600 font-bold hover:underline">West Loop</Link> and <Link href="/chicago/wicker-park" className="text-sky-600 font-bold hover:underline">Wicker Park</Link>.
              </p>
              <p>
                Our emergency response trucks are pre-loaded with commercial suction equipment capable of extracting thousands of gallons of water per hour to stop active flooding before structural collapse occurs.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Commercial Extraction Technology We Deploy
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">Truck-Mounted Water Vacuum Systems</h4>
                  <p className="text-sm text-slate-600">
                    Engineered with extreme lift pressure to pull standing water from hardwood, tile, and concrete slabs.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">Sub-Floor Weighted Extraction Rovers</h4>
                  <p className="text-sm text-slate-600">
                    Drives over wet carpeting and pad, using compression to squeeze deep water out of carpet padding without tearing up carpet.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">Infrared Moisture Detection Cameras</h4>
                  <p className="text-sm text-slate-600">
                    Visually identifies cold thermal moisture signatures behind plaster and drywall to ensure complete water removal.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <ContactForm title="Request Immediate Water Extraction Dispatch" subtitle="Certified Chicago emergency response teams available 24/7." />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-4">
              <h3 className="text-xl font-bold">24/7 Emergency Hotline</h3>
              <p className="text-xs text-slate-300">Fast 60-minute dispatch across all 77 Chicago community areas.</p>
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
