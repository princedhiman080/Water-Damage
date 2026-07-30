import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ShieldCheck, CheckCircle2, AlertTriangle, Clock, ArrowRight, Droplets, Wrench, Shield, Home } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Chicago, IL | 24/7 Structural Cleanup',
  description: 'Full-service water damage restoration, structural drying, and moisture detection in Chicago, IL. Guaranteed 60-min arrival, direct insurance billing.',
  alternates: {
    canonical: `${siteConfig.url}/services/water-damage-restoration`,
  },
};

export default function ServiceWaterDamagePage() {
  const serviceSchema = getServiceSchema(
    'Water Damage Restoration',
    'Comprehensive structural drying, water removal, moisture mapping, and insurance claim restoration in Chicago, IL.'
  );

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/water-damage-restoration' },
    { name: 'Water Damage Restoration', url: '/services/water-damage-restoration' },
  ]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Hero Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-sky-400 uppercase bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-700/50">
              Complete Structural Restoration
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Water Damage Restoration in Chicago, IL
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              24/7 Emergency water extraction, thermal moisture detection, and complete structural drying across all 77 Chicago neighborhoods.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-6 rounded-xl flex items-center space-x-2 text-sm shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>CALL {siteConfig.phone} (60-MIN ARRIVAL)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Comprehensive Content (1000+ Words) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-4 prose prose-slate max-w-none text-base leading-relaxed text-slate-700">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Professional Water Damage Restoration Services in Chicagoland
              </h2>
              <p className="text-lg text-slate-800 font-medium">
                When water penetrates building materials in a Chicago property—whether from a winter pipe freeze, HVAC condensate overflow, or sudden roof leak—structural degradation begins within minutes. Unmanaged moisture weakens subflooring, warps hardwood, and breeds toxic black mold within 24 to 48 hours.
              </p>
              <p>
                Our IICRC-certified restoration network delivers full-scope mitigation designed to save building materials, eliminate moisture pockets, and return your home or commercial building to pre-loss condition quickly.
              </p>
            </div>

            {/* 5 Phase Workflow */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Our 5-Phase IICRC S500 Restoration Workflow
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky-500 text-white font-black w-8 h-8 rounded-lg flex items-center justify-center">1</div>
                    <h4 className="text-lg font-bold text-slate-900">Emergency Inspection & Thermal Moisture Mapping</h4>
                  </div>
                  <p className="text-sm text-slate-600 pl-11">
                    Technicians deploy FLIR® thermal imaging cameras and penetrative moisture meters to track water movement behind plaster walls, under subflooring, and inside ceiling joists without non-destructive drilling.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky-500 text-white font-black w-8 h-8 rounded-lg flex items-center justify-center">2</div>
                    <h4 className="text-lg font-bold text-slate-900">High-Capacity Standing Water Extraction</h4>
                  </div>
                  <p className="text-sm text-slate-600 pl-11">
                    Using truck-mounted extraction rigs and weighted sub-floor rovers, we remove thousands of gallons of standing water per hour from carpets, concrete slabs, and crawlspaces.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky-500 text-white font-black w-8 h-8 rounded-lg flex items-center justify-center">3</div>
                    <h4 className="text-lg font-bold text-slate-900">Industrial Structural Drying & Dehumidification</h4>
                  </div>
                  <p className="text-sm text-slate-600 pl-11">
                    Commercial LGR (Low Grain Refrigerant) dehumidifiers and high-velocity axial air movers circulate dry air at high static pressure, pulling bound moisture out of wood framing and wall studs.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky-500 text-white font-black w-8 h-8 rounded-lg flex items-center justify-center">4</div>
                    <h4 className="text-lg font-bold text-slate-900">EPA-Registered Antimicrobial Sanitization</h4>
                  </div>
                  <p className="text-sm text-slate-600 pl-11">
                    Hospital-grade EPA disinfectants eliminate bacteria, sewage pathogens, and mold spores while neutralizing lingering musty odors.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky-500 text-white font-black w-8 h-8 rounded-lg flex items-center justify-center">5</div>
                    <h4 className="text-lg font-bold text-slate-900">Direct Insurance Carrier Claim Billing</h4>
                  </div>
                  <p className="text-sm text-slate-600 pl-11">
                    We generate line-item Xactimate® estimates with thermal log documentation and submit them directly to your insurance adjuster, ensuring you only pay your policy deductible.
                  </p>
                </div>
              </div>
            </div>

            {/* Commercial Equipment Section */}
            <div className="space-y-4 border-t border-slate-200 pt-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Advanced Commercial Drying Equipment We Deploy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Standard fans cannot dry structural framing. We deploy industrial equipment engineered for rapid moisture removal:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                <li className="flex items-start space-x-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>LGR Dehumidifiers:</strong> Removes up to 160 pints of water vapor daily per unit.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>HEPA Air Scrubbers:</strong> Captures 99.97% of airborne spores down to 0.3 microns.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Injectidry Systems:</strong> Forces warm dry air into wall cavities without removing drywall.</span>
                </li>
                <li className="flex items-start space-x-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Thermal FLIR Cameras:</strong> Instant visual verification of structural moisture boundaries.</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="pt-6">
              <ContactForm title="Request On-Site Emergency Water Restoration" subtitle="Guaranteed 60-minute dispatch across all Chicago neighborhoods." />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-4">
              <h3 className="text-xl font-bold">24/7 Chicago Hotline</h3>
              <p className="text-xs text-slate-300">Call right now for instant emergency dispatch. Certified technicians arrive in 60 minutes.</p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="block text-center bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-xl text-sm shadow"
              >
                CALL {siteConfig.phone} NOW
              </a>
            </div>

            <div className="bg-sky-50 rounded-3xl p-6 border border-sky-200 space-y-3">
              <h4 className="font-bold text-sky-900 text-base">Chicago Neighborhood Coverage</h4>
              <p className="text-xs text-sky-800 leading-relaxed">
                Emergency coverage for Lincoln Park, Logan Square, Wicker Park, West Loop, South Side, Lakeview, and all Cook County suburbs.
              </p>
              <Link href="/chicago/lincoln-park" className="inline-flex items-center text-xs font-bold text-sky-600 hover:underline">
                <span>View Local Response Areas</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <FAQSection title="Frequently Asked Questions" />
      </div>
    </div>
  );
}
