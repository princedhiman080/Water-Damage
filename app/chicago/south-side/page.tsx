import React from 'react';
import type { Metadata } from 'next';
import { Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Water Damage Restoration South Side Chicago | Emergency Cleanup',
  description: 'Emergency water damage restoration across South Side Chicago (Hyde Park, Bronzeville, Beverly). 24/7 flood cleanup & basement water extraction. Call (312) 555-0199.',
  alternates: {
    canonical: `${siteConfig.url}/chicago/south-side`,
  },
};

export default function SouthSidePage() {
  const serviceSchema = getServiceSchema(
    'South Side Chicago Water Damage Restoration',
    'Emergency water removal, basement flood cleanup, and structural drying across South Side Chicago.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Chicago', url: '/chicago/water-damage-restoration' },
    { name: 'South Side', url: '/chicago/south-side' },
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
              <span>South Side Chicago • Hyde Park, Bronzeville & Beyond</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Water Damage Restoration in South Side Chicago
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              24/7 Water damage response covering South Side Chicago communities including Hyde Park, Bronzeville, Chatham, Beverly, and South Shore.
            </p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg text-base"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call 24/7 South Side Dispatch: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <ContactForm title="South Side Dispatch" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-slate-800">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            South Side Chicago Emergency Flood & Sewer Backup Cleanup
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our specialized flood mitigation trucks carry heavy-duty water pumps and antimicrobial sanitizing agents to clear flooded basements and restore damaged homes across the South Side quickly and safely.
          </p>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
