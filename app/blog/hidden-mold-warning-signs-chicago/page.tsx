import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowLeft, ShieldCheck, AlertTriangle } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: '5 Warning Signs of Hidden Mold Behind Drywall | Chicago Mold Guide',
  description: 'Identify hidden mold growth behind drywall, under carpets, and inside Chicago basements following water leaks. Musty odors, warping walls, and allergy triggers.',
  alternates: {
    canonical: `${siteConfig.url}/blog/hidden-mold-warning-signs-chicago`,
  },
};

export default function BlogHiddenMoldPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Hidden Mold Warning Signs', url: '/blog/hidden-mold-warning-signs-chicago' },
  ]);

  const tocItems = [
    { id: 'sign-1-odor', title: '1. Persistent Musty Earthy Odors' },
    { id: 'sign-2-drywall', title: '2. Drywall Discoloration & Paint Peeling' },
    { id: 'sign-3-allergies', title: '3. Unexplained Respiratory & Allergy Symptoms' },
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
                <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full font-bold uppercase">Mold Remediation</span>
                <span>July 05, 2026</span>
                <span>• 5 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                5 Warning Signs of Hidden Mold Behind Drywall After a Water Leak
              </h1>
              <p className="text-slate-600 text-base">
                How to spot hidden mold growth before it damages your home's air quality and structure.
              </p>
            </div>

            {/* Thumbnail Image */}
            <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80"
                alt="Chicago Mold Inspection and Thermal Camera"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-slate max-w-none space-y-6 text-base leading-relaxed text-slate-700">
              <p>
                Not all mold growth is visible on surfaces. In many Chicago homes, undetected water leaks inside wall cavities or beneath hardwood flooring create dark, humid environments where mold colonies thrive silently.
              </p>

              <section id="sign-1-odor">
                <h2 className="text-2xl font-bold text-slate-900">1. Persistent Musty Earthy Odors</h2>
                <p>
                  A sour, musty smell in a room—even when surfaces look clean—is a primary indicator of volatile organic compounds (VOCs) emitted by hidden mold behind drywall.
                </p>
              </section>

              <section id="sign-2-drywall">
                <h2 className="text-2xl font-bold text-slate-900 pt-4">2. Drywall Discoloration & Paint Peeling</h2>
                <p>
                  Bubbling, cracking paint, yellow water stains, or soft drywall indicate active moisture inside wall cavities.
                </p>
              </section>

              <section id="sign-3-allergies">
                <h2 className="text-2xl font-bold text-slate-900 pt-4">3. Unexplained Respiratory & Allergy Symptoms</h2>
                <p>
                  Frequent coughing, sneezing, or eye irritation when inside certain rooms often stems from airborne mold spores circulating through HVAC ducts.
                </p>
              </section>
            </div>

            <div className="pt-6">
              <ContactForm title="Suspect Hidden Mold Growth?" subtitle="Schedule a certified thermal moisture inspection today." />
            </div>
          </div>

          {/* Desktop Only Sidebar Column */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            <BlogTableOfContents items={tocItems} />
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-3">
              <h3 className="text-xl font-bold">Schedule Thermal Mold Testing</h3>
              <p className="text-xs text-slate-300">Certified moisture mapping and air quality testing in Chicago.</p>
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
