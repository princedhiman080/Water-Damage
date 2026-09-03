import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Phone,
  Droplets,
  ShieldAlert,
  ShieldCheck,
  Wrench,
  Flame,
} from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'Basement Flooding in Chicago | Causes, Risks & Restoration Tips',
  description:
    'Flooded basement in Chicago? Discover top causes from sewer backups to sump pump failure, health risks, and expert 24/7 water damage restoration solutions.',
  keywords: [
    'water damage restoration chicago',
    'basement flooding Chicago',
    'flooded basement cleanup Chicago IL',
    'sump pump failure restoration Chicago',
    'Chicago sewer backup basement repair',
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/basement-flooding-chicago-causes-restoration`,
  },
  openGraph: {
    title: 'Basement Flooding in Chicago | Causes, Risks & Restoration Tips',
    description:
      'Flooded basement in Chicago? Discover top causes from sewer backups to sump pump failure, health risks, and expert 24/7 water damage restoration solutions.',
    url: `${siteConfig.url}/blog/basement-flooding-chicago-causes-restoration`,
    images: [
      {
        url: `${siteConfig.url}/blog/basement-flooding-chicago-causes-restoration.webp`,
        width: 1200,
        height: 630,
        alt: 'Basement Flooding in Chicago: Causes, Risks, and Restoration Tips',
      },
    ],
  },
};

export default function BlogBasementFloodingPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    {
      name: 'Basement Flooding in Chicago',
      url: '/blog/basement-flooding-chicago-causes-restoration',
    },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Basement Flooding in Chicago: Causes, Risks, and Restoration Tips',
    description:
      'Flooded basement in Chicago? Discover top causes from sewer backups to sump pump failure, health risks, and expert 24/7 water damage restoration solutions.',
    image: `${siteConfig.url}/blog/basement-flooding-chicago-causes-restoration.webp`,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    datePublished: '2026-08-01',
    dateModified: '2026-09-03',
  };

  const tocItems = [
    { id: 'common-causes', title: 'Top 5 Causes of Chicago Basement Flooding' },
    { id: 'real-risks', title: 'Real Risks of an Untreated Flooded Basement' },
    { id: 'how-restoration-works', title: 'How Professional Restoration Works' },
    { id: 'preventing-flooding', title: 'Preventing Future Basement Flooding' },
    { id: 'emergency-action', title: 'Immediate Steps & Emergency Help' },
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
                <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Basement Restoration
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 8 min read
                </span>
                <span>• Chicago Sump & Sewer Guide</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Basement Flooding in Chicago: Causes, Risks, and Restoration Tips
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                From heavy spring storms to aging sewer lines, Chicago basements are especially prone to flooding. Here's why it happens, what it puts at risk, and how restoration works.
              </p>

              {/* Hero Image */}
              <div className="relative w-full h-72 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/blog/basement-flooding-chicago-causes-restoration.webp"
                  alt="Basement Flooding in Chicago: Causes, Risks, and Restoration Tips"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            <div className="prose prose-slate max-w-none text-base leading-relaxed text-slate-700 space-y-6">
              <p>
                If you own a residential or multi-family property in Chicago, chances are you've either dealt with a flooded basement or know a neighbor who has. Between intense seasonal Midwest downpours, an aging municipal combined sewer network across many neighborhoods, and older brick or limestone foundations, basement flooding is among the most frequent — and destructive — water emergencies property owners encounter.
              </p>

              <p>
                Understanding how water infiltrates your lowest level, recognizing the biological hazards involved, and choosing the right{' '}
                <Link
                  href="/"
                  className="text-sky-600 font-bold hover:underline"
                >
                  water damage restoration chicago
                </Link>{' '}
                protocol is essential to protect your property's value and family health.
              </p>

              {/* Top Causes */}
              <section id="common-causes" className="pt-4 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Common Causes of Basement Flooding in Chicago
                </h2>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-xs">1</span>
                      Heavy Rainfall and Storm Surges
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Chicago's severe spring and summer cloudbursts saturate ground soil within minutes. Hydrostatic pressure forces groundwater inward through the microscopic pores and mortar joints of older masonry foundation walls, directing hundreds of gallons toward the lowest point of your home.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-xs">2</span>
                      Combined Sewer Backups
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Many older Chicago neighborhoods rely on historic combined sewers carrying both city stormwater runoff and raw domestic sewage in a single pipe. When torrential rains overwhelm municipal mains, raw black water backs up through basement floor drains and basement bathroom fixtures. This is a hazardous Category 3 biohazard that demands immediate professional{' '}
                      <Link
                        href="/services/flood-damage-cleanup"
                        className="text-sky-600 font-semibold hover:underline"
                      >
                        flood damage cleanup
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-xs">3</span>
                      Sump Pump Failure
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Your sump pump is your property's frontline defense against high water tables. Mechanical switch failures, motor burnout, clogged discharge pipes, or storm power outages frequently cause pumps to fail at the exact moment rainfall peaks.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-xs">4</span>
                      Foundation Cracks and Inadequate Exterior Grading
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Chicago's freezing winters and sub-zero polar vortexes cause concrete and brick foundations to contract and heave. Over decades, hairline settlement cracks expand, creating direct channels for melting snow and storm runoff if downspouts dump water against foundation footings.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-xs">5</span>
                      Window Well and Egress Drainage Failures
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Sub-grade basement window wells that lack gravel drains or transparent plastic bubble covers transform into miniature aquariums during heavy downpours, eventually bursting past window seals directly into finished drywall.
                    </p>
                  </div>
                </div>
              </section>

              {/* Real Risks */}
              <section id="real-risks" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">The Real Risks of an Untreated Flooded Basement</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Toxic Mold Growth in 24–48 Hours</strong>
                      <span>Spores quickly colonize unfinished framing, paneling, and fiberglass insulation, spreading into upstairs ductwork.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Structural Floor Joist Rot</strong>
                      <span>Trapped moisture rots load-bearing wood sill plates and floor joists, causing upstairs floors to sag.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Furnace & Electrical Submersion</strong>
                      <span>Basement water corrodes boiler burners, water heaters, and electrical panels, creating immediate fire and shock hazards.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Pathogens from Sewer Backups</strong>
                      <span>Black water brings E. coli, Salmonella, and parasites that require hospital-grade antimicrobial disinfection.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* How Restoration Works */}
              <section id="how-restoration-works" className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  How Professional Basement Water Damage Restoration Works
                </h2>
                <p>
                  A certified{' '}
                  <Link
                    href="/"
                    className="text-sky-600 font-bold hover:underline"
                  >
                    water damage restoration chicago
                  </Link>{' '}
                  crew adheres to strict IICRC S500 structural drying guidelines:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Rapid Water Extraction:</strong> High-volume submersible pumps and truck-mount vacuums extract standing water down to the slab. Explore our{' '}
                    <Link
                      href="/services/emergency-water-extraction"
                      className="text-sky-600 font-semibold hover:underline"
                    >
                      emergency water extraction services
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Moisture Mapping with Thermal Cameras:</strong> Infrared imaging discovers water hidden behind wall cavities, under vinyl tiles, and inside foundation concrete.
                  </li>
                  <li>
                    <strong>Industrial Dehumidification & Air Movement:</strong> High-powered LGR dehumidifiers and axial air movers extract gallons of airborne moisture daily.
                  </li>
                  <li>
                    <strong>Antimicrobial Sanitization:</strong> EPA-registered botanical biocides neutralize dangerous bacteria, viruses, and prevent mold propagation.
                  </li>
                  <li>
                    <strong>Complete Structural Reconstruction:</strong> Replacing damaged drywall, insulation, and baseboards to restore your basement to pre-loss condition. See our dedicated{' '}
                    <Link
                      href="/services/basement-water-damage-repair"
                      className="text-sky-600 font-semibold hover:underline"
                    >
                      basement water damage repair solutions
                    </Link>
                    .
                  </li>
                </ol>
              </section>

              {/* Preventing Flooding */}
              <section id="preventing-flooding" className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Preventing Future Basement Flooding in Chicago
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-white">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                    <h4 className="font-bold text-slate-900">Battery Backup Sump Pump</h4>
                    <p className="text-xs text-slate-600 mt-1">Keeps pumping continuously even when intense storms knock out ComEd electrical power.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 bg-white">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                    <h4 className="font-bold text-slate-900">Install a Backwater Valve</h4>
                    <p className="text-xs text-slate-600 mt-1">Mechanically blocks municipal street sewage from backing up into your basement drains.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 bg-white">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                    <h4 className="font-bold text-slate-900">Downspout Extensions</h4>
                    <p className="text-xs text-slate-600 mt-1">Direct roof runoff at least 6–10 feet away from your home's foundation walls.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 bg-white">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                    <h4 className="font-bold text-slate-900">Foundation Crack Sealing</h4>
                    <p className="text-xs text-slate-600 mt-1">Polyurethane epoxy injections seal foundation cracks to withstand hydrostatic water pressure.</p>
                  </div>
                </div>
              </section>

              {/* Emergency Action */}
              <section id="emergency-action" className="bg-sky-50 border border-sky-200 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-sky-950">
                  Dealing With a Flooded Basement Right Now?
                </h3>
                <p className="text-sm text-sky-900">
                  Take immediate safety steps by following our emergency guide:{' '}
                  <Link
                    href="/blog/water-damage-restoration-chicago-first-24-hours"
                    className="font-bold underline"
                  >
                    Water Damage Restoration Chicago: What to Do in the First 24 Hours
                  </Link>
                  , and review pricing expectations in our{' '}
                  <Link
                    href="/blog/water-damage-restoration-cost-chicago"
                    className="font-bold underline"
                  >
                    Chicago Water Damage Restoration Cost Guide
                  </Link>
                  .
                </p>
                <p className="text-sm text-sky-900">
                  Wondering if insurance covers your flooded basement? Check our guide to{' '}
                  <Link
                    href="/blog/does-insurance-cover-water-damage-chicago"
                    className="font-bold underline"
                  >
                    Does Homeowners Insurance Cover Water Damage in Chicago?
                  </Link>{' '}
                  or{' '}
                  <Link href="/contact" className="font-bold underline">
                    contact our emergency response team now
                  </Link>
                  .
                </p>
              </section>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <BlogTableOfContents items={tocItems} />

            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center space-x-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                <Droplets className="w-4 h-4" />
                <span>Chicago Basement Flood Squad</span>
              </div>
              <h3 className="text-xl font-bold leading-snug">
                Flooded Basement? Rapid Water Extraction
              </h3>
              <p className="text-xs text-slate-300">
                Submersible pump extraction, anti-microbial treatments, and complete structural dry-outs across all Chicago neighborhoods.
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
              title="Request Basement Cleanup"
              subtitle="Get immediate 24/7 pump-out & on-site inspection."
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
