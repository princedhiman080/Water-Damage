import React from 'react';
import type { Metadata } from 'next';
import { Phone, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Chicago Basement Water Damage Repair | Flooded Basement Restoration',
  description: 'Specialized basement water damage repair in Chicago, IL. Sump pump failure cleanup, foundation wall drying, and basement carpet restoration. Call (312) 555-0199.',
  alternates: {
    canonical: `${siteConfig.url}/services/basement-water-damage-repair`,
  },
};

export default function BasementWaterDamageRepairPage() {
  const serviceSchema = getServiceSchema(
    'Basement Water Damage Repair Chicago',
    'Specialized flooded basement cleanup, sump pump repair, and foundation drying in Chicago, IL.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/basement-water-damage-repair' },
    { name: 'Basement Water Repair', url: '/services/basement-water-damage-repair' },
  ]);

  return (
    <div className="space-y-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="bg-sky-500 text-slate-950 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              Chicago Basement Experts
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Basement Water Damage Repair in Chicago, IL
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Chicago basements are uniquely vulnerable to foundation seepage, storm drain back-ups, and sump pump failures during severe Midwest rainstorms. We extract water, dry foundation walls, and disinfect finished basements.
            </p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg text-base"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call 24/7 Hotline: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <ContactForm title="Request Basement Cleanup" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-slate-800">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Flooded Basement Restoration
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Basement water intrusion requires specialized low-grain refrigerant (LGR) dehumidifiers because underground spaces lack natural ventilation. We dry concrete floor slabs, insulated drywall framing, and prevent long-term foundation damage.
          </p>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
