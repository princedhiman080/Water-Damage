import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Phone,
  AlertTriangle,
  HelpCircle,
  DollarSign,
} from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'Does Homeowners Insurance Cover Water Damage in Chicago?',
  description:
    'Does insurance cover water damage in Chicago? Learn what policies cover, exclusions like sewer backup & flood, and how to file a successful restoration claim.',
  keywords: [
    'water damage restoration chicago',
    'does homeowners insurance cover water damage Chicago',
    'Chicago water damage insurance claim',
    'flooded basement insurance claim Chicago',
    'burst pipe insurance coverage Illinois',
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/does-insurance-cover-water-damage-chicago`,
  },
  openGraph: {
    title: 'Does Homeowners Insurance Cover Water Damage in Chicago?',
    description:
      'Does insurance cover water damage in Chicago? Learn what policies cover, exclusions like sewer backup & flood, and how to file a successful restoration claim.',
    url: `${siteConfig.url}/blog/does-insurance-cover-water-damage-chicago`,
    images: [
      {
        url: `${siteConfig.url}/blog/does-insurance-cover-water-damage-chicago.webp`,
        width: 1200,
        height: 630,
        alt: 'Does Homeowners Insurance Cover Water Damage in Chicago? A Complete Guide',
      },
    ],
  },
};

export default function BlogInsuranceCoveragePage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    {
      name: 'Does Homeowners Insurance Cover Water Damage in Chicago?',
      url: '/blog/does-insurance-cover-water-damage-chicago',
    },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Does Homeowners Insurance Cover Water Damage in Chicago? A Complete Guide',
    description:
      'Does insurance cover water damage in Chicago? Learn what policies cover, exclusions like sewer backup & flood, and how to file a successful restoration claim.',
    image: `${siteConfig.url}/blog/does-insurance-cover-water-damage-chicago.webp`,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    datePublished: '2026-08-01',
    dateModified: '2026-09-03',
  };

  const tocItems = [
    { id: 'whats-covered', title: 'What’s Typically Covered by Insurance' },
    { id: 'whats-excluded', title: 'What’s Usually NOT Covered (Exclusions)' },
    { id: 'improve-chances', title: 'How to Improve Chances of Claim Approval' },
    { id: 'why-professionals-help', title: 'Why Working With Restoration Pros Helps' },
    { id: 'active-emergency', title: 'Active Emergency & Next Steps' },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-7xl mx-auto space-y-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to All Articles</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <article className="lg:col-span-8 space-y-8">
            <header className="space-y-4 border-b border-slate-200 pb-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Insurance Claims Guide
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 8 min read
                </span>
                <span>• Illinois Policyholder Advice</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Does Homeowners Insurance Cover Water Damage in Chicago? A Complete Guide
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                Not all water damage is covered the same way. Learn what a typical Chicago homeowners policy covers, what it excludes, and how to make your claim process as smooth as possible.
              </p>

              {/* Hero Image */}
              <div className="relative w-full h-72 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/blog/does-insurance-cover-water-damage-chicago.webp"
                  alt="Does Homeowners Insurance Cover Water Damage in Chicago? A Complete Guide"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            <div className="prose prose-slate max-w-none text-base leading-relaxed text-slate-700 space-y-6">
              <p>
                After the initial shock of discovering water gushing through your floor or flooding your basement subsides, the immediate practical concern is always financial: <em>will my homeowners insurance policy cover this?</em>
              </p>

              <p>
                The short answer is: <strong>it depends on the origin of the water</strong>. Understanding how insurance adjusters distinguish between covered sudden perils and non-covered maintenance neglect can mean the difference between receiving a full reimbursement check or suffering a denied claim.
              </p>

              <p>
                As a leading provider of{' '}
                <Link
                  href="/"
                  className="text-sky-600 font-bold hover:underline"
                >
                  water damage restoration chicago
                </Link>{' '}
                services, we work directly with major carriers every day. Here is everything Chicago homeowners need to know about water damage insurance coverage.
              </p>

              {/* What's Typically Covered */}
              <section id="whats-covered" className="pt-4 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  What Is Typically Covered by Homeowners Insurance
                </h2>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900">Sudden and Accidental Plumbing Failures</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Standard HO-3 policies across Illinois cover damage resulting from sudden, unforeseen domestic plumbing ruptures — such as a failed copper pipe, cracked water heater tank, or ruptured washing machine hose. In these events, both professional drying and structural repairs are covered, minus your policy deductible.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900">Weather-Related Roof Leaks & Storm Intrusion</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      If strong Midwest windstorms, hail, or falling tree limbs puncture your shingles or roof membrane, rainwater entering through that storm-created opening is covered under storm perils.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900">Frozen Pipe Bursts During Winter Freezes</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Chicago winters are notorious for sub-zero polar vortexes that freeze uninsulated pipes. As long as you maintained reasonable heat inside the home (typically above 55°F), insurers cover the resulting burst pipe remediation.
                    </p>
                  </div>
                </div>
              </section>

              {/* What's Excluded */}
              <section id="whats-excluded" className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
                  <XCircle className="w-7 h-7 text-red-600" />
                  What Is Usually NOT Covered (Key Exclusions)
                </h2>

                <div className="space-y-4">
                  <div className="border border-red-200 bg-red-50/50 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-red-950">1. Overland Flooding from External Sources</h3>
                    <p className="text-sm text-red-900 mt-1">
                      Surface water runoff, overflowing rivers (such as the Chicago River or Des Plaines River), and storm surges entering at ground level are strictly excluded from standard homeowners policies. Protection requires a separate flood insurance policy through the National Flood Insurance Program (NFIP) or private flood underwriters.
                    </p>
                  </div>

                  <div className="border border-red-200 bg-red-50/50 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-red-950">2. Gradual Leaks & Lack of Maintenance</h3>
                    <p className="text-sm text-red-900 mt-1">
                      If a pipe has been slowly dripping behind a bathroom wall for six months, or if a roof had visibly missing shingles that were neglected, adjusters will deny the claim under the "wear and tear / maintenance" exclusion clause. Learn how to catch these early in our guide on{' '}
                      <Link
                        href="/blog/signs-of-hidden-water-damage-chicago-home"
                        className="font-bold underline"
                      >
                        5 Warning Signs of Hidden Water Damage in Chicago Homes
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="border border-red-200 bg-red-50/50 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-red-950">3. Municipal Sewer & Drain Backups (Without Endorsement)</h3>
                    <p className="text-sm text-red-900 mt-1">
                      Sewer line backups into basements are a frequent challenge in Chicago's combined sewer neighborhoods. Standard policies exclude this unless you have specifically purchased a <em>Water Backup and Sump Overflow Endorsement</em> (which typically costs $50–$100 annually).
                    </p>
                  </div>
                </div>
              </section>

              {/* How to improve chances */}
              <section id="improve-chances" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">How to Improve Your Chances of a Successful Claim</h2>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Document the Loss Immediately:</strong> Shoot high-resolution photos and video of all standing water, water lines on baseboards, and the point of origin before touching anything.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Notify Your Insurer Promptly:</strong> Most policies require prompt notification to fulfill your duty to mitigate further loss.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Keep Every Receipt:</strong> Retain documentation for emergency pumps, fans, dry cleaning, or hotel stays if the home is uninhabitable.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Do Not Discard Items Prematurely:</strong> Never throw out damaged furniture or the failed plumbing part until the field adjuster has inspected them in person.</span>
                  </li>
                </ul>
              </section>

              {/* Why working with restoration pros helps */}
              <section id="why-professionals-help" className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Why Working With Restoration Professionals Helps Your Claim
                </h2>
                <p>
                  An experienced{' '}
                  <Link
                    href="/"
                    className="text-sky-600 font-bold hover:underline"
                  >
                    water damage restoration chicago
                  </Link>{' '}
                  company doesn't just dry out your home — they build the defensible documentation your insurance company requires.
                </p>

                <p>
                  Certified technicians utilize <strong>Xactimate</strong> — the exact industry-standard pricing software used by State Farm, Allstate, Travelers, and Liberty Mutual — ensuring all line items match adjuster billing expectations. Detailed thermal imaging maps, psychrometric daily drying logs, and moisture percentage readings remove guesswork and prevent claim denials.
                </p>

                <p>
                  Review expected costs in our detailed{' '}
                  <Link
                    href="/blog/water-damage-restoration-cost-chicago"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Chicago Water Damage Restoration Cost Guide
                  </Link>
                  .
                </p>
              </section>

              {/* Active Emergency */}
              <section id="active-emergency" className="bg-sky-50 border border-sky-200 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-sky-950">
                  Not Sure What Kind of Water Damage You're Dealing With?
                </h3>
                <p className="text-sm text-sky-900">
                  If you are currently experiencing an active leak or flooded room, follow the immediate steps in our emergency checklist:{' '}
                  <Link
                    href="/blog/water-damage-restoration-chicago-first-24-hours"
                    className="font-bold underline"
                  >
                    Water Damage Restoration Chicago: What to Do in the First 24 Hours
                  </Link>
                  . If your damage is specifically in your basement, read our guide to{' '}
                  <Link
                    href="/blog/basement-flooding-chicago-causes-restoration"
                    className="font-bold underline"
                  >
                    Basement Flooding Causes and Restoration in Chicago
                  </Link>
                  .
                </p>
                <p className="text-sm text-sky-900">
                  Want expert assistance navigating your insurance coverage or need an emergency estimate?{' '}
                  <Link href="/about" className="font-bold underline">
                    Learn more about our team
                  </Link>{' '}
                  or{' '}
                  <Link href="/contact" className="font-bold underline">
                    contact us today
                  </Link>{' '}
                  — we work directly with all major insurance carriers.
                </p>
              </section>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <BlogTableOfContents items={tocItems} />

            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <FileCheck className="w-4 h-4" />
                <span>Direct Insurance Billing</span>
              </div>
              <h3 className="text-xl font-bold leading-snug">
                Filing a Water Damage Claim in Chicago?
              </h3>
              <p className="text-xs text-slate-300">
                We work directly with your insurance adjuster, provide Xactimate estimates, and bill your carrier directly so you have zero hassle.
              </p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg transition text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>

            <ContactForm
              title="Insurance Assistance"
              subtitle="Get help with claim documentation & free inspection."
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
