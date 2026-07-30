import React from 'react';
import type { Metadata } from 'next';
import { Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Mold Remediation Chicago, IL | Certified Mold Testing & Removal',
  description: 'Certified mold remediation in Chicago, IL. HEPA air scrubbing, containment, black mold removal, and moisture control. Free inspection. Call (312) 555-0199.',
  alternates: {
    canonical: `${siteConfig.url}/services/mold-remediation`,
  },
};

export default function MoldRemediationPage() {
  const serviceSchema = getServiceSchema(
    'Mold Remediation Chicago',
    'Certified mold inspection, containment, HEPA air filtration, and removal in Chicago, IL.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/mold-remediation' },
    { name: 'Mold Remediation', url: '/services/mold-remediation' },
  ]);

  return (
    <div className="space-y-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Certified Mold Specialists
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Mold Remediation & Removal in Chicago, IL
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Mold spores colonize wet drywall, insulation, and joists within 24 to 48 hours following water damage. Our certified mold specialists isolate affected areas, run HEPA air scrubbers, and eliminate toxic black mold safely.
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
            <ContactForm title="Request Mold Inspection" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-slate-800">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            IICRC Certified Mold Removal Process
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Bleach and household cleaners do not kill mold roots in porous materials. Our Chicago technicians establish negative air pressure containment chambers with HEPA filtration, safely remove infected drywall, and apply EPA-registered antimicrobial sealants.
          </p>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
