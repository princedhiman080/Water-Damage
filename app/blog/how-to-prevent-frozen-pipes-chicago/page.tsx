import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowLeft, ShieldCheck, ThermometerSnowflake, AlertTriangle } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'How to Prevent Frozen Burst Pipes in Chicago | Winterization Tips',
  description: 'Prevent frozen water pipes from bursting in Chicago brownstones and homes during Midwest winter freezes. Learn pipe insulation, thermostat settings, and freeze warnings.',
  alternates: {
    canonical: `${siteConfig.url}/blog/how-to-prevent-frozen-pipes-chicago`,
  },
};

export default function BlogFrozenPipesPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Prevent Frozen Pipes Chicago', url: '/blog/how-to-prevent-frozen-pipes-chicago' },
  ]);

  const tocItems = [
    { id: 'tip-1-thermostat', title: '1. Keep Thermostats Above 55°F at All Times' },
    { id: 'tip-2-drip-faucets', title: '2. Drip Faucets During Extreme Sub-Zero Snaps' },
    { id: 'tip-3-insulate-pipes', title: '3. Insulate Exposed Exterior Pipes' },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <div className="max-w-7xl mx-auto space-y-6">
        <Link href="/blog" className="inline-flex items-center text-xs font-bold text-sky-600 hover:text-sky-700">
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to All Articles</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 border-b border-slate-200 pb-6">
              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full font-bold uppercase">Winterization Tips</span>
                <span>July 20, 2026</span>
                <span>• 7 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                How to Prevent Frozen Burst Pipes During Chicago Winters
              </h1>
              <p className="text-slate-600 text-base">
                Essential steps to safeguard your Chicago property when temperatures plunge below zero.
              </p>
            </div>

            {/* Thumbnail Image */}
            <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800&auto=format&fit=crop&q=80"
                alt="Chicago Winter Burst Pipe Prevention"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-slate max-w-none space-y-6 text-base leading-relaxed text-slate-700">
              <p>
                Chicago winter freeze snaps regularly push temperatures into sub-zero territory. Uninsulated copper water supply lines in exterior walls, unheated basements, and crawlspaces can freeze solid in hours, causing catastrophic high-pressure pipe bursts.
              </p>

              <section id="tip-1-thermostat">
                <h2 className="text-2xl font-bold text-slate-900">1. Keep Thermostats Above 55°F at All Times</h2>
                <p>
                  Never turn your thermostat off when leaving your Chicago home for winter vacations. Maintain heat at a minimum of 55°F to ensure wall cavity temperatures remain above freezing.
                </p>
              </section>

              <section id="tip-2-drip-faucets">
                <h2 className="text-2xl font-bold text-slate-900 pt-4">2. Drip Faucets During Extreme Sub-Zero Snaps</h2>
                <p>
                  Allow a slight trickle of cold water to drip from faucets connected to exterior wall piping. Moving water prevents pressure buildup inside pipes even if ice crystals form.
                </p>
              </section>

              <section id="tip-3-insulate-pipes">
                <h2 className="text-2xl font-bold text-slate-900 pt-4">3. Insulate Exposed Exterior Pipes</h2>
                <p>
                  Install foam pipe insulation sleeves or heat cables on exposed plumbing located in unheated Chicago basements, garages, and attics.
                </p>
              </section>
            </div>

            <div className="pt-6">
              <ContactForm title="Frozen Pipe Rupture Emergency?" subtitle="Call (312) 555-0199 for 60-minute immediate water extraction." />
            </div>
          </div>

          {/* Desktop Only Sidebar Column */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            <BlogTableOfContents items={tocItems} />
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-3">
              <h3 className="text-xl font-bold">Pipe Ruptured in Chicago?</h3>
              <p className="text-xs text-slate-300">Call (312) 555-0199 for 60-minute immediate water extraction.</p>
              <a href={`tel:${siteConfig.phoneTel}`} className="block text-center bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 rounded-xl text-sm shadow">
                CALL {siteConfig.phone} (24/7)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
