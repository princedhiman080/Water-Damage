import React from 'react';
import type { Metadata } from 'next';
import { Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Wicker Park Chicago | 60622 Cleanup',
  description: 'Emergency water damage restoration in Wicker Park, Chicago (60622). Commercial & residential water extraction, structural drying & mold removal. Call (000) 000-0000.',
  alternates: {
    canonical: `${siteConfig.url}/chicago/wicker-park`,
  },
};

export default function WickerParkPage() {
  const serviceSchema = getServiceSchema(
    'Wicker Park Water Damage Restoration',
    'Emergency water removal, structural drying, and flood cleanup in Wicker Park, Chicago 60622.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Chicago', url: '/chicago/water-damage-restoration' },
    { name: 'Wicker Park', url: '/chicago/wicker-park' },
  ]);

  return (
    <div className="space-y-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-sky-500/20 text-sky-400 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/30 uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Wicker Park, Chicago • ZIP 60622</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Water Damage Restoration in Wicker Park, Chicago
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Fast 24/7 water damage restoration for Wicker Park shops, restaurants, and residential condos along Division St, Damen Ave, and North Ave.
            </p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg text-base"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call 24/7 Wicker Park Dispatch: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <ContactForm title="Wicker Park Dispatch" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-slate-800">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Commercial & Residential Wicker Park Water Extraction
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Whether a burst water line floods your boutique commercial storefront or an ice dam leaks into a top-floor loft, our local crews respond immediately with heavy-duty dehumidifiers and air scrubbers.
          </p>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
