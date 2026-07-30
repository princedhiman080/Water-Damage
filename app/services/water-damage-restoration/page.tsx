import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ShieldCheck, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Chicago, IL | 24/7 Cleanup Services',
  description: 'Top-rated water damage restoration in Chicago, IL. 60-minute emergency arrival for residential & commercial properties. Direct insurance billing. Call (312) 555-0199.',
  alternates: {
    canonical: `${siteConfig.url}/services/water-damage-restoration`,
  },
};

export default function WaterDamageRestorationPage() {
  const serviceSchema = getServiceSchema(
    'Water Damage Restoration Chicago',
    'Comprehensive structural drying, water removal, and restoration services across Chicago, IL.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/water-damage-restoration' },
    { name: 'Water Damage Restoration', url: '/services/water-damage-restoration' },
  ]);

  return (
    <div className="space-y-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-sky-500/20 text-sky-400 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/30 uppercase tracking-wider">
              <span>Primary Chicago Restoration Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Water Damage Restoration in Chicago, IL
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              When water intrudes into your Chicago home or business—whether from a burst pipe, leaking appliance, or storm surge—every minute counts. Our certified technicians provide 24/7 rapid water extraction, structural drying, and direct insurance billing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg flex items-center space-x-2 text-base"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call 24/7: {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ContactForm title="Request Water Restoration" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-10 text-slate-800">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Emergency Water Damage Cleanup & Structural Drying
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Water damage is one of the most destructive disasters a property owner in Chicago can experience. Because water migrates into subfloors, wall cavities, and ceiling joists, simple surface cleanup is never enough. Left untreated, trapped moisture causes wood rot, drywall collapse, electrical short circuits, and toxic black mold proliferation within 24 to 48 hours.
            </p>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              What Causes Water Damage in Chicago Homes?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Burst frozen copper pipes in winter</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Sump pump failures during heavy rains</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Ruptured water heater tanks</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Washing machine supply hose breaks</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Roof leaks & severe ice damming</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Sewage backup & main drain overflows</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Our 4-Phase Water Restoration Protocol
            </h3>
            <div className="mt-6 space-y-6 text-sm">
              <div className="p-5 border border-slate-200 rounded-2xl bg-slate-50">
                <h4 className="font-bold text-slate-900 text-base">1. Inspection & Moisture Mapping</h4>
                <p className="text-slate-600 mt-1">We utilize thermal imaging FLIR cameras and non-penetrating moisture meters to identify every drop of trapped moisture behind walls and under hardwood flooring.</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-2xl bg-slate-50">
                <h4 className="font-bold text-slate-900 text-base">2. Industrial Water Extraction</h4>
                <p className="text-slate-600 mt-1">Truck-mounted vacuum extraction units pull hundreds of gallons of standing water per hour to halt deep material saturation.</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-2xl bg-slate-50">
                <h4 className="font-bold text-slate-900 text-base">3. Structural Drying & Humidity Control</h4>
                <p className="text-slate-600 mt-1">High-velocity centrifugal air movers and low-grain refrigerant (LGR) dehumidifiers dry structural framing down to certified dry standards.</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-2xl bg-slate-50">
                <h4 className="font-bold text-slate-900 text-base">4. Antimicrobial Treatment & Documentation</h4>
                <p className="text-slate-600 mt-1">EPA-registered botanical disinfectants prevent mold and bacteria growth while full photo moisture logs are submitted directly to your insurance company.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
