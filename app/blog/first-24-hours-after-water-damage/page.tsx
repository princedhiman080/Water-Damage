import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle2, AlertTriangle, ShieldCheck, Clock, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'First 24 Hours After Water Damage in Chicago | Emergency Action Checklist',
  description: 'Learn critical emergency steps in the first 24 hours after water damage in Chicago. Protect your property, stop leaks, prevent mold, and document insurance claims.',
  alternates: {
    canonical: `${siteConfig.url}/blog/first-24-hours-after-water-damage`,
  },
};

export default function BlogFirst24HoursPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'First 24 Hours Action Guide', url: '/blog/first-24-hours-after-water-damage' },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What to Do in the First 24 Hours After Water Damage in Chicago',
    'description': 'Step-by-step emergency checklist to protect your home, prevent toxic mold proliferation, and secure full insurance coverage.',
    'image': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    'author': {
      '@type': 'Organization',
      'name': siteConfig.name,
    },
    'publisher': {
      '@type': 'Organization',
      'name': siteConfig.name,
    },
    'datePublished': '2026-07-28',
  };

  const tocItems = [
    { id: 'step-1-shut-off-water', title: 'Step 1: Shut Off Main Water & Electricity First' },
    { id: 'step-2-document-damage', title: 'Step 2: Take Photos & Video Before Cleanup' },
    { id: 'step-3-call-extraction', title: 'Step 3: Call Professional Water Extraction Immediately' },
    { id: 'step-4-mold-window', title: 'Step 4: Understand the 24-48 Hour Mold Window' },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-7xl mx-auto space-y-6">
        <Link href="/blog" className="inline-flex items-center text-xs font-bold text-sky-600 hover:text-sky-700">
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to All Articles</span>
        </Link>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Article Content Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Header & Meta */}
            <div className="space-y-4 border-b border-slate-200 pb-6">
              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full font-bold uppercase">Emergency Guide</span>
                <span>July 28, 2026</span>
                <span>• 6 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                What to Do in the First 24 Hours After Water Damage in Chicago
              </h1>
              <p className="text-slate-600 text-base leading-relaxed">
                Written by Chicago Water Damage Restoration Specialists • Emergency Action Checklist
              </p>
            </div>

            {/* Hero Featured Thumbnail */}
            <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80"
                alt="Chicago Water Damage Restoration Technician"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-slate max-w-none space-y-6 text-base leading-relaxed text-slate-700">
              <p className="text-lg text-slate-800 font-medium">
                Discovering standing water in your Chicago home—whether from a winter burst copper pipe or a flooded basement—triggers immediate stress. However, the actions you take within the first 24 hours determine whether your property suffers minor repairs or long-term structural rot and black mold infestation.
              </p>

              <section id="step-1-shut-off-water" className="pt-2">
                <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-2xl space-y-2">
                  <h2 className="font-extrabold text-red-900 text-xl flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>Step 1: Shut Off Main Water & Electricity First</span>
                  </h2>
                  <p className="text-sm text-red-800">
                    Before entering standing water, switch off your main electrical breaker if water touches outlets. Locate your main water shutoff valve (usually near your water meter or basement front wall) and turn it clockwise to stop incoming water.
                  </p>
                </div>
              </section>

              <section id="step-2-document-damage" className="pt-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  Step 2: Take Photos & Video Before Cleanup Begins
                </h2>
                <p>
                  Do not throw away damaged items before taking clear, well-lit photos and video recordings. Document standing water height on drywall, saturated carpeting, damaged furniture, and appliance serial numbers. Your homeowners insurance adjuster requires empirical evidence.
                </p>
              </section>

              <section id="step-3-call-extraction" className="pt-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  Step 3: Call Professional Water Extraction Immediately
                </h2>
                <p>
                  Household shop vacs and desk fans cannot pull moisture out of subflooring or wall studs. Call our 24/7 hotline at <strong>(312) 555-0199</strong> so certified restoration crews can deploy truck-mounted pumps and commercial LGR dehumidifiers within 60 minutes.
                </p>
              </section>

              <section id="step-4-mold-window" className="pt-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  Step 4: Understand the 24-48 Hour Mold Window
                </h2>
                <p>
                  Microscopic mold spores colonize damp drywall and wood framing within 24 to 48 hours. Professional structural drying stops mold before spore germination occurs.
                </p>
              </section>
            </div>

            {/* Embedded Lead Form */}
            <div className="pt-6">
              <ContactForm
                title="Need 24/7 Water Extraction in Chicago?"
                subtitle="Get an on-duty local technician dispatched to your location in 60 minutes."
              />
            </div>
          </div>

          {/* Desktop Only Sidebar Column (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            {/* Table of Contents Widget */}
            <BlogTableOfContents items={tocItems} />

            {/* Sidebar Hotline Card */}
            <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-red-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                <AlertTriangle className="w-3.5 h-3.5 text-yellow-300" />
                <span>60-Min Dispatch</span>
              </div>
              <h3 className="text-xl font-extrabold leading-tight">Active Water Emergency?</h3>
              <p className="text-xs text-slate-300">
                Call our certified local Chicago technicians immediately for instant dispatch and direct insurance billing.
              </p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="block text-center bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 rounded-xl shadow-lg text-sm transition"
              >
                <Phone className="w-4 h-4 inline mr-2 animate-bounce" />
                <span>CALL {siteConfig.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
