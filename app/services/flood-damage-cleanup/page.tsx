import React from 'react';
import type { Metadata } from 'next';
import { Phone, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Flood Damage Cleanup Chicago, IL | Emergency Storm & Sewage Extraction',
  description: 'Fast Chicago flood damage cleanup services. Heavy-duty water pump-out, sewage sanitation, and storm restoration. 24/7 emergency dispatch. Call (312) 555-0199.',
  alternates: {
    canonical: `${siteConfig.url}/services/flood-damage-cleanup`,
  },
};

export default function FloodDamageCleanupPage() {
  const serviceSchema = getServiceSchema(
    'Flood Damage Cleanup Chicago',
    'Emergency flood extraction, sewage cleanup, and storm water mitigation in Chicago, IL.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/flood-damage-cleanup' },
    { name: 'Flood Cleanup', url: '/services/flood-damage-cleanup' },
  ]);

  return (
    <div className="space-y-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="bg-red-600/90 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              Flood Emergency Dispatch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Flood Damage Cleanup in Chicago, IL
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Chicago storm surges, torrential downpours, and municipal sewer backups can flood your property with gallons of contaminated water in minutes. Our certified flood response teams utilize heavy industrial submersible pumps to restore your home safely.
            </p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg text-base"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call 24/7 Flood Hotline: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <ContactForm title="Request Flood Cleanup" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-slate-800">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Hazardous Flood Water Category Mitigation
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Floodwaters are categorized by contamination risk. Category 3 "Black Water"—which includes storm overland runoff and sewer backups—contains harmful pathogens, pesticides, and bacteria. Our technicians follow strict OSHA and IICRC biohazard protocols to sanitize flooded Chicago basements, crawlspaces, and ground-floor units.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-bold text-sky-600 uppercase">Category 1</span>
              <h3 className="font-bold text-slate-900 mt-1 text-base">Clean Water</h3>
              <p className="text-xs text-slate-600 mt-2">Originates from clean sources like broken supply lines or sink overflows.</p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-bold text-amber-600 uppercase">Category 2</span>
              <h3 className="font-bold text-slate-900 mt-1 text-base">Grey Water</h3>
              <p className="text-xs text-slate-600 mt-2">Contains significant chemical or physical contaminants (washing machines, dishwashers).</p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="text-xs font-bold text-red-600 uppercase">Category 3</span>
              <h3 className="font-bold text-slate-900 mt-1 text-base">Black Water</h3>
              <p className="text-xs text-slate-600 mt-2">Highly dangerous overland flood waters & sewer backups requiring full biohazard cleanup.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
