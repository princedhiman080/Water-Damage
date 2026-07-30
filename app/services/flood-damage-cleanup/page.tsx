import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ShieldCheck, CheckCircle2, AlertTriangle, Clock, ArrowRight, Wind } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Flood Damage Cleanup Chicago, IL | Emergency Water Extraction',
  description: 'Heavy-duty storm water extraction, basement flood cleanup, and sewage sanitation in Chicago, IL. Guaranteed 60-minute dispatch, direct insurance billing.',
  alternates: {
    canonical: `${siteConfig.url}/services/flood-damage-cleanup`,
  },
};

export default function ServiceFloodDamagePage() {
  const serviceSchema = getServiceSchema(
    'Flood Damage Cleanup',
    'Heavy-duty storm water extraction, basement pump-out, and sewage sanitation in Chicago, IL.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/flood-damage-cleanup' },
    { name: 'Flood Damage Cleanup', url: '/services/flood-damage-cleanup' },
  ]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-sky-400 uppercase bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-700/50">
              Storm & Heavy Rain Recovery
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Flood Damage Cleanup in Chicago, IL
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Industrial pump-out, storm water extraction, and biohazard sanitation for flooded Chicago basements and commercial properties.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-6 rounded-xl flex items-center space-x-2 text-sm shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>CALL {siteConfig.phone} (60-MIN ARRIVAL)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4 prose prose-slate max-w-none text-base leading-relaxed text-slate-700">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Chicago Flood Water Removal & Biohazard Decontamination
              </h2>
              <p className="text-lg text-slate-800 font-medium">
                Heavy Midwest rainstorms frequently overwhelm Chicago's combined storm-sewer system. When floodwaters enter basements in neighborhoods like <Link href="/chicago/logan-square" className="text-sky-600 font-bold hover:underline">Logan Square</Link> or <Link href="/chicago/south-side" className="text-sky-600 font-bold hover:underline">South Side Chicago</Link>, water often contains severe Category 3 black water contamination.
              </p>
              <p>
                Our specialized flood mitigation units deploy heavy-duty gas-powered trash pumps, sub-floor extraction rovers, and hospital-grade EPA antimicrobial sanitizers to extract floodwater and protect structural framing from permanent rot.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Step-by-Step Flood Mitigation Protocol
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">1. Gas-Powered Trash Pump-Out</h4>
                  <p className="text-sm text-slate-600">
                    High-volume gas pumps extract deep standing floodwater (up to 5,000 gallons per hour) from basements and lower-level living spaces.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">2. Removal of Porous Contaminated Materials</h4>
                  <p className="text-sm text-slate-600">
                    Sewer-tainted carpet padding, drywall, and wet fiberglass insulation are safely cut out and disposed of following OSHA biohazard guidelines.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">3. Antimicrobial Sanitization & Deodorization</h4>
                  <p className="text-sm text-slate-600">
                    Concrete slabs and wood wall studs are treated with EPA-registered disinfectants to neutralize bacteria, pathogens, and foul sewage odors.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">4. Industrial LGR Dehumidification</h4>
                  <p className="text-sm text-slate-600">
                    Commercial LGR dehumidifiers and HEPA air scrubbers pull moisture out of structural framing to prevent black mold germination within 48 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <ContactForm title="Need Emergency Flood Cleanup Right Now?" subtitle="On-duty Chicago technicians dispatched in 60 minutes or less." />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-4">
              <h3 className="text-xl font-bold">24/7 Flood Hotline</h3>
              <p className="text-xs text-slate-300">Gas-powered trash pumps and commercial extraction rigs on standby.</p>
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
