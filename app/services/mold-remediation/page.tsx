import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ShieldCheck, CheckCircle2, AlertTriangle, Clock, ArrowRight, Shield } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Mold Remediation & Removal Chicago, IL | Certified Removal',
  description: 'Certified mold inspection, HEPA air scrubbing, negative air containment, and antimicrobial mold removal in Chicago, IL. 24/7 Response.',
  alternates: {
    canonical: `${siteConfig.url}/services/mold-remediation`,
  },
};

export default function ServiceMoldRemediationPage() {
  const serviceSchema = getServiceSchema(
    'Mold Remediation & Removal',
    'Certified mold inspection, HEPA containment, negative air scrubbing, and antimicrobial treatment in Chicago, IL.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/mold-remediation' },
    { name: 'Mold Remediation & Removal', url: '/services/mold-remediation' },
  ]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-sky-400 uppercase bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-700/50">
              IICRC Certified Mold Removal
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Mold Remediation & Removal in Chicago, IL
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Comprehensive mold inspection, negative air HEPA containment, and eco-friendly antimicrobial treatments for Chicago homes.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-6 rounded-xl flex items-center space-x-2 text-sm shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>CALL {siteConfig.phone} (CERTIFIED INSPECTION)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4 prose prose-slate max-w-none text-base leading-relaxed text-slate-700">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Chicago Certified Mold Removal & HEPA Air Filtration
              </h2>
              <p className="text-lg text-slate-800 font-medium">
                Mold spores grow rapidly in warm, humid conditions following a water leak. In Chicago properties in neighborhoods like <Link href="/chicago/wicker-park" className="text-sky-600 font-bold hover:underline">Wicker Park</Link> or <Link href="/chicago/west-loop" className="text-sky-600 font-bold hover:underline">West Loop</Link>, toxic black mold behind drywall threatens indoor air quality.
              </p>
              <p>
                Our IICRC AMRT (Advanced Mold Remediation Technicians) deploy negative air pressure containment and industrial HEPA air scrubbers to eliminate mold colonies safely without cross-contaminating living spaces.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                4-Step Certified Mold Remediation Process
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">1. Moisture & Mold Inspection</h4>
                  <p className="text-sm text-slate-600">
                    Thermal imaging cameras and moisture meters locate hidden mold colonies behind drywall and under subflooring.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">2. Negative Air HEPA Containment</h4>
                  <p className="text-sm text-slate-600">
                    Plastic containment poly-barriers and negative air machines capture 99.97% of airborne spores to prevent spreading.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">3. HEPA Vacuuming & Antimicrobial Cleaning</h4>
                  <p className="text-sm text-slate-600">
                    Remediation of infected porous materials followed by EPA-registered antimicrobial wood sealer treatments.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">4. Post-Remediation Air Clearance Testing</h4>
                  <p className="text-sm text-slate-600">
                    Independent air quality clearance testing verifying normal mold spore levels.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <ContactForm title="Need Certified Mold Remediation in Chicago?" subtitle="On-duty mold specialists dispatched for non-invasive inspection." />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-4">
              <h3 className="text-xl font-bold">24/7 Mold Hotline</h3>
              <p className="text-xs text-slate-300">IICRC AMRT certified mold specialists ready for immediate dispatch.</p>
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
