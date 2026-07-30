import React from 'react';
import type { Metadata } from 'next';
import { Phone, Zap, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Emergency Water Extraction Chicago | 24/7 Rapid Water Removal',
  description: 'Instant emergency water extraction in Chicago, IL. High-capacity truck-mounted vacuum pumps remove standing water from floors & carpets within 60 mins. Call (312) 555-0199.',
  alternates: {
    canonical: `${siteConfig.url}/services/emergency-water-extraction`,
  },
};

export default function EmergencyWaterExtractionPage() {
  const serviceSchema = getServiceSchema(
    'Emergency Water Extraction Chicago',
    'Rapid truck-mounted emergency water pumping and carpet extraction in Chicago, IL.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/emergency-water-extraction' },
    { name: 'Emergency Extraction', url: '/services/emergency-water-extraction' },
  ]);

  return (
    <div className="space-y-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              24/7 Rapid Pumping
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Emergency Water Extraction Chicago, IL
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Standing water rapidly destroys hardwood floors, subflooring, drywall, and structural joists. Our truck-mounted extraction rigs extract up to 1,000 gallons per hour to minimize property destruction.
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
            <ContactForm title="Request Rapid Water Removal" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-slate-800">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            High-Volume Water Pumping Technology
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Standard shop vacs cannot handle high-volume water extraction. Our Chicago restoration network utilizes gas-powered submersible pumps, weighted deep-extraction rovers for carpet padding, and commercial suction wands that extract deep moisture from porous materials.
          </p>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
