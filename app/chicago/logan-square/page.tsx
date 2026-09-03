import React from 'react';
import type { Metadata } from 'next';
import { Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Logan Square Chicago | 60647 Cleanup',
  description: 'Emergency water damage restoration in Logan Square, Chicago (60647). Flooded basement extraction, burst pipe repair & mold prevention. Call (630) 241-6800.',
  alternates: {
    canonical: `${siteConfig.url}/chicago/logan-square`,
  },
};

export default function LoganSquarePage() {
  const serviceSchema = getServiceSchema(
    'Logan Square Water Damage Restoration',
    'Emergency water extraction, basement flood cleanup, and structural drying in Logan Square, Chicago 60647.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Chicago', url: '/chicago/water-damage-restoration' },
    { name: 'Logan Square', url: '/chicago/logan-square' },
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
              <span>Logan Square, Chicago â€¢ ZIP 60647</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Water Damage Restoration in Logan Square, Chicago
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              24/7 Water damage emergency response along Milwaukee Ave, Kedzie, and Logan Boulevard. Fast flooded basement extraction and pipe repair.
            </p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg text-base"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call 24/7 Logan Square Hotline: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <ContactForm title="Logan Square Dispatch" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-slate-800">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Logan Square Basement Flooding & Storm Water Mitigation
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Logan Square's residential avenues feature garden apartments and vintage two-flats that experience basement seepage during heavy spring and summer downpours. Our local technicians pull up standing water, sanitize contaminated concrete, and dry walls down to studs.
          </p>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
