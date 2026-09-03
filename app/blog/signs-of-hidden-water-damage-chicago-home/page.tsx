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
  Search,
  Eye,
  Activity,
  Wind,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: '5 Signs of Hidden Water Damage in Chicago Homes | Warning Signs',
  description:
    'Water damage isn’t always obvious. Discover 5 warning signs of hidden moisture in Chicago homes and when to call a certified water damage restoration pro.',
  keywords: [
    'water damage restoration chicago',
    'signs of hidden water damage Chicago',
    'hidden water leak behind walls Chicago',
    'musty odor water damage Chicago',
    'thermal leak inspection Chicago',
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/signs-of-hidden-water-damage-chicago-home`,
  },
  openGraph: {
    title: '5 Signs of Hidden Water Damage in Chicago Homes | Warning Signs',
    description:
      'Water damage isn’t always obvious. Discover 5 warning signs of hidden moisture in Chicago homes and when to call a certified water damage restoration pro.',
    url: `${siteConfig.url}/blog/signs-of-hidden-water-damage-chicago-home`,
    images: [
      {
        url: `${siteConfig.url}/blog/signs-of-hidden-water-damage-chicago-home.webp`,
        width: 1200,
        height: 630,
        alt: '5 Warning Signs of Hidden Water Damage in Your Chicago Home',
      },
    ],
  },
};

export default function BlogHiddenSignsPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    {
      name: '5 Signs of Hidden Water Damage in Chicago',
      url: '/blog/signs-of-hidden-water-damage-chicago-home',
    },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '5 Warning Signs of Hidden Water Damage in Your Chicago Home',
    description:
      'Water damage isn’t always obvious. Discover 5 warning signs of hidden moisture in Chicago homes and when to call a certified water damage restoration pro.',
    image: `${siteConfig.url}/blog/signs-of-hidden-water-damage-chicago-home.webp`,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    datePublished: '2026-08-01',
    dateModified: '2026-09-03',
  };

  const tocItems = [
    { id: 'sign-1-musty-smell', title: '1. Musty or Earthy Smell That Won’t Leave' },
    { id: 'sign-2-discoloration', title: '2. Staining on Drywall & Ceilings' },
    { id: 'sign-3-peeling-paint', title: '3. Peeling Paint & Warped Flooring' },
    { id: 'sign-4-high-water-bill', title: '4. Higher-Than-Usual Water Bills' },
    { id: 'sign-5-allergy-symptoms', title: '5. Unexplained Respiratory Irritation' },
    { id: 'what-to-do', title: 'What to Do If You Notice These Signs' },
    { id: 'when-to-call', title: 'When to Call a Restoration Professional' },
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
                <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Homeowner Warning Signs
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 7 min read
                </span>
                <span>• Chicago Property Inspection</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                5 Warning Signs of Hidden Water Damage in Your Chicago Home
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                Not all water damage floods your basement overnight. Some of the most costly damage builds slowly behind walls and under floors. Here are 5 signs Chicago homeowners should never ignore.
              </p>

              {/* Hero Image */}
              <div className="relative w-full h-72 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/blog/signs-of-hidden-water-damage-chicago-home.webp"
                  alt="5 Warning Signs of Hidden Water Damage in Your Chicago Home"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            <div className="prose prose-slate max-w-none text-base leading-relaxed text-slate-700 space-y-6">
              <p>
                Chicago's unique architectural landscape — a blend of century-old brick two-flats, historic greystones, mid-century bungalows, and modern downtown high-rise condos — shares one universal vulnerability: hidden water damage. Unlike an abrupt pipe burst or standing floodwater, insidious leaks accumulate silently behind drywall, subfloor membranes, and plaster ceilings for weeks or even months before visual symptoms emerge.
              </p>

              <p>
                By the time surface discoloration or musty odors alert you, moisture may have already decomposed framing, rusted structural ties, and seeded dangerous colonies of toxic mold. Here are the five vital warning signs every Chicago homeowner needs to recognize.
              </p>

              {/* Sign 1 */}
              <section id="sign-1-musty-smell" className="pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    1
                  </span>
                  A Musty or Earthy Smell That Won't Go Away
                </h2>
                <p>
                  A persistent, lingering earthy odor — particularly noticeable when entering your basement, bathroom, or rooms adjacent to exterior brick masonry — is an unmistakable bio-indicator of damp organic materials. When porous drywall or cellulose insulation absorbs moisture without rapid evaporation, fungal colonies release microbial volatile organic compounds (MVOCs).
                </p>
                <p>
                  Commercial aerosol sprays and plug-in air fresheners only mask the odor temporarily while spores quietly spread. If a room smells damp, active moisture is almost certainly trapped in the framing or subfloor.
                </p>
              </section>

              {/* Sign 2 */}
              <section id="sign-2-discoloration">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    2
                  </span>
                  Discoloration or Staining on Walls and Ceilings
                </h2>
                <p>
                  Yellow, rust, copper, or dark brown rings on drywall surfaces and acoustic ceiling tiles are textbook signs of active water intrusion. In Chicago's historic multi-unit greystones and vintage two-flats, plumbing pipes and heating risers run inside uninsulated vertical wall chases between floors.
                </p>
                <p>
                  Stains near rooflines, window headers, or bathroom stack vents indicate either masonry seepage, deteriorating flashings, or a slow pinhole copper pipe leak that requires immediate professional evaluation.
                </p>
              </section>

              {/* Sign 3 */}
              <section id="sign-3-peeling-paint">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    3
                  </span>
                  Peeling Paint, Bubbling Drywall, or Warped Flooring
                </h2>
                <p>
                  When drywall absorbs moisture, the gypsum core softens and expands, breaking adhesion with latex paint and forming noticeable blisters or peeling bubbles. Similarly, wood and laminate floorboards expand rapidly upon moisture contact:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cupping:</strong> The edges of floorboards rise higher than the center.</li>
                  <li><strong>Crowning:</strong> The center of the board bulges upward under sustained moisture pressure.</li>
                  <li><strong>Spongy Subfloors:</strong> Walking over an area feels unusually soft or creates new squeaks.</li>
                </ul>
                <p>
                  These physical deformities confirm that water has sat inside the subfloor assembly for days. For rapid remediation, explore our{' '}
                  <Link
                    href="/services/water-damage-restoration"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    water damage restoration Chicago services
                  </Link>
                  .
                </p>
              </section>

              {/* Sign 4 */}
              <section id="sign-4-high-water-bill">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    4
                  </span>
                  A Higher-Than-Usual Water Bill
                </h2>
                <p>
                  If your monthly Chicago Department of Water Management utility bill spikes without an obvious change in household consumption (like filling a pool or having seasonal houseguests), you may have an undetected pressurized leak.
                </p>
                <p>
                  A hairline crack in a pressurized copper water line behind a shower surround or under a concrete slab foundation can release hundreds of gallons of water per week into structural framing before leaking through ceilings.
                </p>
              </section>

              {/* Sign 5 */}
              <section id="sign-5-allergy-symptoms">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    5
                  </span>
                  Increased Allergy Symptoms or Respiratory Irritation at Home
                </h2>
                <p>
                  Do family members suffer from unexplained coughing, itchy eyes, sinus congestion, or sudden asthma flare-ups that mysteriously disappear when leaving the house for work or school?
                </p>
                <p>
                  Hidden moisture behind drywall provides ideal incubators for toxic mold strains such as <em>Stachybotrys chartarum</em> and <em>Aspergillus</em>. Microscopic airborne spores enter heating and AC ducting, circulating throughout your living spaces. When mold is suspected, professional{' '}
                  <Link
                    href="/services/mold-remediation"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    mold remediation
                  </Link>{' '}
                  and containment are critical to safeguard indoor health.
                </p>
              </section>

              {/* What to do */}
              <section id="what-to-do" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">What to Do If You Notice These Signs</h2>
                <p>
                  Hidden water damage never resolves itself. Repainting water stains or increasing ventilation only postpones catastrophic structural failures and exponentially increases restoration expenses down the road.
                </p>
                <p>
                  A professional{' '}
                  <Link
                    href="/"
                    className="text-sky-600 font-bold hover:underline"
                  >
                    water damage restoration chicago
                  </Link>{' '}
                  inspection uses advanced non-destructive diagnostic tools:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>FLIR Thermal Imaging:</strong> Pinpoints cold evaporation patterns behind finished drywall without punching holes.</li>
                  <li><strong>Calibrated Moisture Meters:</strong> Measures exact percentage moisture content within structural wood studs.</li>
                  <li><strong>Acoustic Leak Detection:</strong> Identifies pressurized pipe breaks behind solid masonry and tiled showers.</li>
                </ul>
                <p>
                  If you are facing active, flowing water rather than hidden warning signs, consult our immediate response checklist:{' '}
                  <Link
                    href="/blog/water-damage-restoration-chicago-first-24-hours"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Water Damage Restoration Chicago: What to Do in the First 24 Hours
                  </Link>
                  .
                </p>
              </section>

              {/* When to call a pro */}
              <section id="when-to-call" className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  When to Call a Professional Restoration Specialist
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 mb-2" />
                    <h4 className="font-bold text-slate-900">Multiple Warning Signs Present</h4>
                    <p className="text-xs text-slate-600 mt-1">You observe both musty odors and peeling paint or ceiling discoloration in the same zone.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 mb-2" />
                    <h4 className="font-bold text-slate-900">Persistent Odors After Deep Cleaning</h4>
                    <p className="text-xs text-slate-600 mt-1">Earthy smells persist even after scrubbing, signaling deep structural saturation.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 mb-2" />
                    <h4 className="font-bold text-slate-900">Pre-Listing Real Estate Inspection</h4>
                    <p className="text-xs text-slate-600 mt-1">Eliminate surprise moisture flags before selling or refinancing your Chicago home.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 mb-2" />
                    <h4 className="font-bold text-slate-900">Incomplete Prior Drying</h4>
                    <p className="text-xs text-slate-600 mt-1">A past plumbing repair stopped the leak but walls and subfloors were never professionally dehumidified.</p>
                  </div>
                </div>

                <p className="pt-2">
                  To understand expected remediation pricing, view our detailed{' '}
                  <Link
                    href="/blog/water-damage-restoration-cost-chicago"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Chicago Water Damage Restoration Cost Guide
                  </Link>
                  . Our IICRC-certified technicians serve residential and commercial properties throughout Chicago.{' '}
                  <Link
                    href="/about"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Learn about our inspection process and team
                  </Link>{' '}
                  or{' '}
                  <Link
                    href="/contact"
                    className="text-sky-600 font-bold hover:underline"
                  >
                    schedule a free water damage inspection today
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
                <Search className="w-4 h-4" />
                <span>Thermal Leak Inspection</span>
              </div>
              <h3 className="text-xl font-bold leading-snug">
                Detect Hidden Leaks Without Tearing Down Walls
              </h3>
              <p className="text-xs text-slate-300">
                Non-destructive moisture testing with FLIR infrared thermal cameras across all Chicago neighborhoods.
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
              title="Schedule an Inspection"
              subtitle="Get an expert moisture assessment & free quote."
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
