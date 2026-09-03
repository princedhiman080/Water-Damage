import React from 'react';
import type { Metadata } from 'next';
import { Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Water Damage Restoration West Loop Chicago | 60607 Cleanup',
  description: 'Emergency water damage restoration in West Loop, Chicago (60607). High-rise loft water removal, commercial flood extraction & structural drying. Call (630) 241-6800.',
  alternates: {
    canonical: `${siteConfig.url}/chicago/west-loop`,
  },
};

export default function WestLoopPage() {
  const serviceSchema = getServiceSchema(
    'West Loop Water Damage Restoration',
    'Emergency water removal, timber loft drying, and commercial flood cleanup in West Loop, Chicago 60607.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Chicago', url: '/chicago/water-damage-restoration' },
    { name: 'West Loop', url: '/chicago/west-loop' },
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
              <span>West Loop, Chicago â€¢ ZIP 60607</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Water Damage Restoration in West Loop, Chicago
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Rapid 24/7 water damage response for West Loop residential high-rises, converted timber lofts, and Fulton Market commercial properties.
            </p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg text-base"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call 24/7 West Loop Dispatch: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <ContactForm title="West Loop Dispatch" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-slate-800">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            High-Rise & Loft Structural Water Removal
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Multi-story water damage in West Loop condo towers can cascade down several floors. We deploy portable commercial suction units and specialized moisture sensors to dry structural concrete slabs, hardwood, and brickwork.
          </p>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
