import React from 'react';
import type { Metadata } from 'next';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Lincoln Park Chicago | 60614 Cleanup',
  description: 'Emergency water damage restoration in Lincoln Park, Chicago (60614). 24/7 burst pipe repair, basement flood extraction & direct insurance billing. Call (312) 555-0199.',
  alternates: {
    canonical: `${siteConfig.url}/chicago/lincoln-park`,
  },
};

export default function LincolnParkPage() {
  const serviceSchema = getServiceSchema(
    'Lincoln Park Water Damage Restoration',
    'Emergency water removal, structural drying, and brownstone flood cleanup in Lincoln Park, Chicago 60614.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Chicago', url: '/chicago/water-damage-restoration' },
    { name: 'Lincoln Park', url: '/chicago/lincoln-park' },
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
              <span>Lincoln Park, Chicago • ZIP 60614</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Water Damage Restoration in Lincoln Park, Chicago
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Serving Lincoln Park brownstones, historic row houses, and modern condo buildings along Clark St, Halsted, and Fullerton Ave. 60-minute emergency arrival guaranteed.
            </p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg text-base"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call 24/7 Lincoln Park Dispatch: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <ContactForm title="Lincoln Park Dispatch" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-slate-800">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Specialized Lincoln Park Brownstone & Condo Restoration
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Lincoln Park's architectural charm includes historic brick and stone residences with multi-level basements and intricate hardwood flooring. Water leaks in multi-family buildings can quickly leak down into neighboring units. Our crews utilize compact extraction equipment and non-destructive drying systems designed for Lincoln Park properties.
          </p>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
