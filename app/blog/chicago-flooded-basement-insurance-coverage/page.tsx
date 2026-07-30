import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowLeft, DollarSign, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'Does Insurance Cover Flooded Basement Cleanup in Illinois? | Chicago Guide',
  description: 'Understand Illinois homeowners insurance coverage for water damage, burst pipes vs sewer backup endorsements, and Xactimate direct billing in Chicago.',
  alternates: {
    canonical: `${siteConfig.url}/blog/chicago-flooded-basement-insurance-coverage`,
  },
};

export default function BlogInsuranceCoveragePage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Insurance Coverage Guide', url: '/blog/chicago-flooded-basement-insurance-coverage' },
  ]);

  const tocItems = [
    { id: 'sudden-leaks', title: 'Sudden & Accidental Leaks (Covered)' },
    { id: 'sump-failures', title: 'Sump Pump Failures & Sewer Backups (Endorsement)' },
    { id: 'direct-billing', title: 'How Direct Insurance Billing Works' },
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
                <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full font-bold uppercase">Insurance & Claims</span>
                <span>July 14, 2026</span>
                <span>• 8 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Does Homeowners Insurance Cover Flooded Basement Cleanup in Illinois?
              </h1>
              <p className="text-slate-600 text-base">
                What your insurance carrier covers, endorsement add-ons, and how direct billing works.
              </p>
            </div>

            {/* Thumbnail Image */}
            <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80"
                alt="Illinois Water Damage Insurance Claim Document"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-slate max-w-none space-y-6 text-base leading-relaxed text-slate-700">
              <p>
                Water damage is the second most common homeowners insurance claim in Illinois. However, many Chicago policyholders are surprised to discover that coverage depends strictly on the water source and cause of intrusion.
              </p>

              <section id="sudden-leaks">
                <h2 className="text-2xl font-bold text-slate-900">Sudden & Accidental Leaks (Covered by Standard Policies)</h2>
                <p>
                  Standard Illinois homeowners policies cover sudden water damage—including burst copper pipes, ruptured water heater tanks, and washing machine hose breaks. Your insurance pays for water extraction, structural drying, and drywall replacement.
                </p>
              </section>

              <section id="sump-failures">
                <h2 className="text-2xl font-bold text-slate-900 pt-4">Sump Pump Failures & Sewer Backups (Requires Endorsement)</h2>
                <p>
                  Overland storm flooding and sump pump failure during heavy Chicago rainstorms require a specific "Water Backup & Sump Pump Overflow" rider on your policy.
                </p>
              </section>

              <section id="direct-billing">
                <h2 className="text-2xl font-bold text-slate-900 pt-4">How Direct Insurance Billing Works</h2>
                <p>
                  Our partner restoration specialists generate official Xactimate insurance estimates, submit thermal moisture logs, and bill insurance carriers directly so you have minimal out-of-pocket stress.
                </p>
              </section>
            </div>

            <div className="pt-6">
              <ContactForm title="Filing a Water Damage Claim?" subtitle="We bill your insurance company directly." />
            </div>
          </div>

          {/* Desktop Only Sidebar Column */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            <BlogTableOfContents items={tocItems} />
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-3">
              <h3 className="text-xl font-bold">Insurance Billing Assistance</h3>
              <p className="text-xs text-slate-300">We work directly with all major carriers in Illinois.</p>
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
