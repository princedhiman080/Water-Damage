import React from 'react';
import type { Metadata } from 'next';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';
import { ChicagoMapGrid } from '@/components/ChicagoMapGrid';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Chicago, IL | Citywide 24/7 Response',
  description: 'Citywide water damage restoration services in Chicago, IL. Serving all 77 community areas with 60-minute emergency arrival. Direct insurance billing. Call (312) 555-0199.',
  alternates: {
    canonical: `${siteConfig.url}/chicago/water-damage-restoration`,
  },
};

export default function ChicagoCityPage() {
  const serviceSchema = getServiceSchema(
    'Chicago Water Damage Restoration',
    'Citywide emergency water removal, structural drying, and flood mitigation across Chicago, IL.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Chicago', url: '/chicago/water-damage-restoration' },
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
              <span>Chicago Citywide Service Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Water Damage Restoration in Chicago, IL
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Serving all 77 Chicago community areas. Whether your property is a historic Lakeview greystone, a West Loop timber loft, or a South Side single-family home, our emergency crews arrive in 60 minutes or less.
            </p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg text-base"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call 24/7 Chicago Dispatch: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <ContactForm title="Chicago Emergency Dispatch" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-slate-800">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Fast Response Across All 77 Chicago Community Areas
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Chicago weather brings extreme seasonal challenges—from freezing sub-zero winter temperatures that rupture uninsulated water pipes to intense summer thunderstorms that overwhelm city storm sewers. Our local restoration technicians are strategically stationed throughout Cook County for rapid response.
          </p>
        </div>
      </section>

      <ChicagoMapGrid />
      <FAQSection />
    </div>
  );
}
