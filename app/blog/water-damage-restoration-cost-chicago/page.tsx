import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  DollarSign,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  AlertTriangle,
  HelpCircle,
  FileCheck,
} from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Cost in Chicago | 2026 Pricing Guide',
  description:
    'Wondering what water damage restoration costs in Chicago? See 2026 price ranges ($500–$15k+), factors that affect cost, insurance coverage, and free estimates.',
  keywords: [
    'water damage restoration chicago',
    'water damage restoration cost Chicago',
    'flooded basement cleanup cost Chicago',
    'water mitigation price per square foot Chicago',
    'Chicago emergency restoration estimates',
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/water-damage-restoration-cost-chicago`,
  },
  openGraph: {
    title: 'Water Damage Restoration Cost in Chicago | 2026 Pricing Guide',
    description:
      'Wondering what water damage restoration costs in Chicago? See 2026 price ranges ($500–$15k+), factors that affect cost, insurance coverage, and free estimates.',
    url: `${siteConfig.url}/blog/water-damage-restoration-cost-chicago`,
    images: [
      {
        url: `${siteConfig.url}/blog/water-damage-restoration-cost-chicago.webp`,
        width: 1200,
        height: 630,
        alt: 'How Much Does Water Damage Restoration Cost in Chicago? 2026 Pricing Guide',
      },
    ],
  },
};

export default function BlogCostPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    {
      name: 'Water Damage Restoration Cost in Chicago',
      url: '/blog/water-damage-restoration-cost-chicago',
    },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'How Much Does Water Damage Restoration Cost in Chicago? (2026 Pricing Guide)',
    description:
      'Wondering what water damage restoration costs in Chicago? See 2026 price ranges ($500–$15k+), factors that affect cost, insurance coverage, and free estimates.',
    image: `${siteConfig.url}/blog/water-damage-restoration-cost-chicago.webp`,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    datePublished: '2026-08-01',
    dateModified: '2026-09-03',
  };

  const tocItems = [
    { id: 'average-costs', title: 'Average Restoration Costs in Chicago' },
    { id: 'cost-factors', title: 'What Affects Restoration Costs' },
    { id: 'insurance-coverage', title: 'Does Homeowners Insurance Cover It?' },
    { id: 'accurate-quote', title: 'How to Get an Accurate Quote' },
    { id: 'active-emergency', title: 'Active Emergency Next Steps' },
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
                  2026 Pricing Guide
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 9 min read
                </span>
                <span>• Chicago Cost Benchmarks</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                How Much Does Water Damage Restoration Cost in Chicago? (2026 Pricing Guide)
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                Restoration costs can range from a few hundred dollars to tens of thousands, depending on the size and severity of the damage. Here's a realistic breakdown of what Chicago homeowners actually pay.
              </p>

              {/* Hero Image */}
              <div className="relative w-full h-72 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/blog/water-damage-restoration-cost-chicago.webp"
                  alt="How Much Does Water Damage Restoration Cost in Chicago 2026 Pricing Guide"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            <div className="prose prose-slate max-w-none text-base leading-relaxed text-slate-700 space-y-6">
              <p>
                One of the first questions homeowners ask after discovering water damage is simple: <em>how much is this going to cost?</em> The honest answer is that it depends — on the source of the water, how long it sat before being addressed, the materials affected, and the square footage of the space.
              </p>

              <p>
                This guide breaks down realistic price ranges for professional{' '}
                <Link
                  href="/"
                  className="text-sky-600 font-bold hover:underline"
                >
                  water damage restoration chicago
                </Link>{' '}
                services so you know exactly what to expect before requesting a quote.
              </p>

              {/* Average Costs Section */}
              <section id="average-costs" className="pt-4 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
                  <Calculator className="w-7 h-7 text-sky-600" />
                  Average Water Damage Restoration Costs in Chicago
                </h2>

                <p>
                  In the Chicago metropolitan area, restoration projects fall into four broad tiers based on water category, structural penetration, and equipment deployment:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm my-6">
                  <table className="w-full text-left text-sm text-slate-700">
                    <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">Severity Tier</th>
                        <th className="py-3.5 px-4 font-semibold">Typical Damage Scenario</th>
                        <th className="py-3.5 px-4 font-semibold">Chicago Cost Range</th>
                        <th className="py-3.5 px-4 font-semibold">Typical Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white hover:bg-slate-50 transition">
                        <td className="py-3.5 px-4 font-bold text-slate-900">Minor Damage</td>
                        <td className="py-3.5 px-4">Small clean water leak, caught within 12–24 hrs, minor dry-out</td>
                        <td className="py-3.5 px-4 font-bold text-emerald-600">$500 – $1,500</td>
                        <td className="py-3.5 px-4">1 – 2 days</td>
                      </tr>
                      <tr className="bg-slate-50 hover:bg-slate-100 transition">
                        <td className="py-3.5 px-4 font-bold text-slate-900">Moderate Damage</td>
                        <td className="py-3.5 px-4">Flooded single room, partial drywall cut, wet carpet/pad removal</td>
                        <td className="py-3.5 px-4 font-bold text-sky-600">$1,500 – $5,500</td>
                        <td className="py-3.5 px-4">3 – 5 days</td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50 transition">
                        <td className="py-3.5 px-4 font-bold text-slate-900">Major Damage</td>
                        <td className="py-3.5 px-4">Flooded finished basement, multiple rooms, structural drying</td>
                        <td className="py-3.5 px-4 font-bold text-amber-600">$5,500 – $15,000+</td>
                        <td className="py-3.5 px-4">5 – 10 days</td>
                      </tr>
                      <tr className="bg-slate-50 hover:bg-slate-100 transition">
                        <td className="py-3.5 px-4 font-bold text-slate-900">Severe Flooding / Sewage</td>
                        <td className="py-3.5 px-4">Category 3 black water sewer backup with full rebuild & antimicrobial treatment</td>
                        <td className="py-3.5 px-4 font-bold text-red-600">$15,000 – $50,000+</td>
                        <td className="py-3.5 px-4">2 – 4 weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-500 italic">
                  *These figures are realistic Chicago market estimates. An exact quote requires an in-person diagnostic inspection using moisture meters and thermal imaging to calculate total square footage and affected structural cavities.
                </p>
              </section>

              {/* Factors that affect cost */}
              <section id="cost-factors" className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  What Affects the Cost of Water Damage Restoration
                </h2>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-white">
                    <h3 className="text-lg font-bold text-slate-900">1. The Category of Water</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      <strong>Category 1 (Clean Water):</strong> Originating from broken supply pipes or overflowing sinks. Costs the least to remediate.<br />
                      <strong>Category 2 (Grey Water):</strong> From dishwasher or washing machine overflows carrying minor contaminants.<br />
                      <strong>Category 3 (Black Water):</strong> Raw municipal sewer backups or street floodwaters carrying dangerous pathogens. Requires biohazard gear, specialized sanitizing agents, and complete disposal of porous items.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white">
                    <h3 className="text-lg font-bold text-slate-900">2. How Long the Water Sat Before Treatment</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      The longer water sits, the deeper it saturates structural materials. Water extracted within 12 hours often allows subfloors and drywall to be saved via rapid dehumidification. Water left for 48 hours frequently necessitates tear-outs and disposal.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white">
                    <h3 className="text-lg font-bold text-slate-900">3. Total Square Footage Affected</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Restoration pricing scales with equipment needs. A 100 sq ft bathroom might require one commercial air mover and one dehumidifier, whereas a 1,200 sq ft flooded basement requires industrial trailer-mounted extraction units and dozens of high-velocity air movers.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white">
                    <h3 className="text-lg font-bold text-slate-900">4. Mold Remediation Requirements</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      If water has sat unnoticed behind walls, mold spore colonies require containment barriers, HEPA negative air machines, and antimicrobial fogging, which adds $1,500 to $6,000+ depending on spore counts. See our{' '}
                      <Link
                        href="/services/mold-remediation"
                        className="text-sky-600 font-semibold hover:underline"
                      >
                        mold remediation services
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white">
                    <h3 className="text-lg font-bold text-slate-900">5. Chicago-Specific Architectural Factors</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Older Chicago greystones and two-flats feature plaster-and-lath walls, vintage cast iron plumbing, and deep masonry basements. Plaster holds moisture much longer than drywall and requires specialized drying equipment to salvage.
                    </p>
                  </div>
                </div>
              </section>

              {/* Insurance Coverage */}
              <section id="insurance-coverage" className="bg-sky-50 border border-sky-200 rounded-2xl p-6 space-y-3">
                <h2 className="text-2xl font-bold text-sky-950 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-sky-600" />
                  Does Homeowners Insurance Cover the Cost?
                </h2>
                <p className="text-sm text-sky-900 leading-relaxed">
                  In many cases, <strong>yes</strong> — particularly for sudden and accidental water damage like burst pipes during a Chicago freeze snap or water heater ruptures. In these cases, insurance typically pays for both emergency mitigation and structural reconstruction, minus your deductible ($500–$1,500).
                </p>
                <p className="text-sm text-sky-900 leading-relaxed">
                  However, standard policies exclude overland flooding and often exclude sewer backups unless you have an endorsement. We break down the exact policy language in our comprehensive guide:{' '}
                  <Link
                    href="/blog/does-insurance-cover-water-damage-chicago"
                    className="text-sky-700 font-bold hover:underline"
                  >
                    Does Homeowners Insurance Cover Water Damage in Chicago?
                  </Link>
                </p>
              </section>

              {/* How to get an accurate quote */}
              <section id="accurate-quote" className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  How to Get an Accurate Chicago Water Restoration Quote
                </h2>
                <p>
                  The only way to know your true out-of-pocket cost is a professional on-site diagnostic inspection. A licensed{' '}
                  <Link
                    href="/"
                    className="text-sky-600 font-bold hover:underline"
                  >
                    water damage restoration chicago
                  </Link>{' '}
                  contractor will assess moisture levels throughout your home, identify the water category, map hidden saturation zones, and provide an itemized Xactimate quote that your insurance adjuster accepts.
                </p>

                <p>
                  If you suspect you have subtle, slow-developing damage rather than a massive flood, read our guide on{' '}
                  <Link
                    href="/blog/signs-of-hidden-water-damage-chicago-home"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    5 Warning Signs of Hidden Water Damage in Your Chicago Home
                  </Link>
                  .
                </p>
              </section>

              {/* Active Emergency */}
              <section id="active-emergency" className="bg-red-50 border border-red-200 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Dealing With an Active Water Emergency Right Now?
                </h3>
                <p className="text-sm text-red-800">
                  Don't delay mitigation while waiting on estimates. Every hour water sits increases structural replacement expenses exponentially. Follow our emergency action steps:{' '}
                  <Link
                    href="/blog/water-damage-restoration-chicago-first-24-hours"
                    className="font-bold underline"
                  >
                    Water Damage Restoration Chicago: What to Do in the First 24 Hours
                  </Link>
                  , or explore our{' '}
                  <Link
                    href="/services/basement-water-damage-repair"
                    className="font-bold underline"
                  >
                    basement water damage repair services
                  </Link>
                  .
                </p>
                <p className="text-sm text-red-800">
                  Want to learn more about our certifications and direct-insurance billing process?{' '}
                  <Link href="/about" className="font-bold underline">
                    Learn more about our team
                  </Link>{' '}
                  or{' '}
                  <Link href="/contact" className="font-bold underline">
                    request a free, no-obligation estimate today
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
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <DollarSign className="w-4 h-4" />
                <span>Transparent 2026 Estimates</span>
              </div>
              <h3 className="text-xl font-bold leading-snug">
                Need an Itemized Xactimate Insurance Estimate?
              </h3>
              <p className="text-xs text-slate-300">
                Direct carrier billing with State Farm, Allstate, Travelers, Farmers & more. Zero upfront mitigation cost for covered claims.
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
              title="Request a Free Estimate"
              subtitle="Get an accurate on-site inspection & pricing breakdown."
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
