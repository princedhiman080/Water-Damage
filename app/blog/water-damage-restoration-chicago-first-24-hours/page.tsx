import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Phone,
  Droplets,
  Zap,
  Camera,
  Wind,
  FileText,
  HelpCircle,
} from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Chicago | Emergency 24-Hour Guide',
  description:
    'Facing water damage in Chicago? Follow these critical first 24-hour steps to stop leaks, prevent toxic mold, and get 24/7 emergency water damage restoration.',
  keywords: [
    'water damage restoration chicago',
    'first 24 hours water damage',
    'emergency water extraction Chicago',
    'burst pipe repair Chicago',
    'flooded basement 24 hours Chicago',
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/water-damage-restoration-chicago-first-24-hours`,
  },
  openGraph: {
    title: 'Water Damage Restoration Chicago | Emergency 24-Hour Guide',
    description:
      'Facing water damage in Chicago? Follow these critical first 24-hour steps to stop leaks, prevent toxic mold, and get 24/7 emergency water damage restoration.',
    url: `${siteConfig.url}/blog/water-damage-restoration-chicago-first-24-hours`,
    images: [
      {
        url: `${siteConfig.url}/blog/water-damage-restoration-chicago-first-24-hours.webp`,
        width: 1200,
        height: 630,
        alt: 'Water Damage Restoration Chicago: What to Do in the First 24 Hours',
      },
    ],
  },
};

export default function BlogFirst24HoursPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    {
      name: 'Water Damage Restoration Chicago: First 24 Hours',
      url: '/blog/water-damage-restoration-chicago-first-24-hours',
    },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Water Damage Restoration Chicago: What to Do in the First 24 Hours',
    description:
      'Facing water damage in Chicago? Follow these critical first 24-hour steps to stop leaks, prevent toxic mold, and get 24/7 emergency water damage restoration.',
    image: `${siteConfig.url}/blog/water-damage-restoration-chicago-first-24-hours.webp`,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    datePublished: '2026-08-01',
    dateModified: '2026-09-03',
  };

  const tocItems = [
    { id: 'step-1-stop-water-source', title: '1. Stop the Source of Water' },
    { id: 'step-2-cut-power', title: '2. Cut the Power in Affected Areas' },
    { id: 'step-3-document-damage', title: '3. Document Everything First' },
    { id: 'step-4-remove-standing-water', title: '4. Remove Standing Water Quickly' },
    { id: 'step-5-increase-airflow', title: '5. Increase Airflow & Reduce Humidity' },
    { id: 'step-6-call-professionals', title: '6. Call a Chicago Restoration Company' },
    { id: 'step-7-contact-insurance', title: '7. Contact Your Insurance Provider' },
    { id: 'why-first-24-hours-matter', title: 'Why the First 24 Hours Matter So Much' },
    { id: 'chicago-emergency-help', title: 'Get Fast Help Anywhere in Chicago' },
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
          {/* Main Content Column */}
          <article className="lg:col-span-8 space-y-8">
            <header className="space-y-4 border-b border-slate-200 pb-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Emergency Action Guide
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 8 min read
                </span>
                <span>• Updated for Chicago 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Water Damage Restoration Chicago: What to Do in the First 24 Hours
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                A burst pipe, flooded basement, or storm damage can turn your Chicago home upside down in minutes. Here's exactly what to do in the first 24 hours to protect your property and speed up restoration.
              </p>

              {/* Hero Image */}
              <div className="relative w-full h-72 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/blog/water-damage-restoration-chicago-first-24-hours.webp"
                  alt="Water Damage Restoration Chicago: What to Do in the First 24 Hours"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            {/* Prose Content */}
            <div className="prose prose-slate max-w-none text-base leading-relaxed text-slate-700 space-y-6">
              <p>
                Water damage rarely announces itself politely. It shows up as a burst pipe on a freezing Chicago morning, a sump pump failure during a torrential spring storm, or a slow hidden leak you didn't notice until the ceiling began sagging. Whatever the cause, the first 24 hours after water enters your home are the most important. Acting fast is the difference between a simple structural dry-out and a mold-infested, structurally compromised property.
              </p>

              <p>
                This guide walks Chicago property owners through exactly what to do the moment you discover water damage, how to prevent secondary bacterial risks, and when to call in professional{' '}
                <Link
                  href="/"
                  className="text-sky-600 font-bold hover:underline"
                >
                  water damage restoration chicago
                </Link>{' '}
                technicians.
              </p>

              {/* Step 1 */}
              <section id="step-1-stop-water-source" className="pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    1
                  </span>
                  Stop the Source of Water (If It's Safe to Do So)
                </h2>
                <p>
                  Before doing anything else, shut off the main water supply if the damage originates from an indoor plumbing failure — such as a burst copper pipe, failed water heater, or overflowing laundry appliance. In most Chicago two-flats and bungalows, the main shutoff valve is located in the basement near the front water meter.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-sm text-amber-900">
                  <p className="font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    Storm & Outdoor Flooding Caution:
                  </p>
                  <p className="mt-1">
                    If the water is entering from outside due to street sewer backup or rapid flash flooding, shutting off your main valve won't stop it. In this scenario, prioritize physical safety and proceed immediately to Step 2.
                  </p>
                </div>
              </section>

              {/* Step 2 */}
              <section id="step-2-cut-power">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    2
                  </span>
                  Cut the Power in Affected Areas
                </h2>
                <p>
                  Water and electricity are a deadly combination. If standing water has submerged wall outlets, electrical extension cords, baseboard heaters, or heavy appliances, shut down power to those specific circuits at the main breaker box immediately.
                </p>
                <p>
                  <strong>Never step into standing water</strong> if your breaker panel is in the flooded area, or if you hear buzzing, popping, or suspect electrical contact. Contact an emergency electrician or emergency disaster services before entering.
                </p>
              </section>

              {/* Step 3 */}
              <section id="step-3-document-damage">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    3
                  </span>
                  Document Everything Before You Touch Anything
                </h2>
                <p>
                  Insurance adjusters in Illinois rely heavily on visual evidence to validate claims. Before cleaning or discarding damaged belongings:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Take wide-angle photographs and HD video walkthroughs of every affected room.</li>
                  <li>Capture close-ups of standing water watermarks on baseboards, drywall, and cabinetry.</li>
                  <li>Photograph damaged high-value personal property, electronics, and vintage furniture.</li>
                  <li>Save damaged appliance parts (like a split supply line or burst pipe elbow) as proof of the failure source.</li>
                </ul>
                <p>
                  This documentation directly protects your coverage under your homeowners policy. For deeper insurance guidance, read our detailed guide on{' '}
                  <Link
                    href="/blog/does-insurance-cover-water-damage-chicago"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Does Homeowners Insurance Cover Water Damage in Chicago?
                  </Link>
                </p>
              </section>

              {/* Step 4 */}
              <section id="step-4-remove-standing-water">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    4
                  </span>
                  Remove Standing Water Quickly
                </h2>
                <p>
                  Standing water saturates subfloors, drywall, and insulation within hours, setting the stage for microbial mold colonies within 24–48 hours. If the spill is minor (under 10–20 gallons of clean water), a wet/dry vacuum, squeegees, and heavy towels can remove surface moisture.
                </p>
                <p>
                  However, for large volumes — especially in{' '}
                  <Link
                    href="/services/basement-water-damage-repair"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    flooded basements
                  </Link>
                  , a pervasive problem across Chicago's older historic housing stock — professional submersible trash pumps and high-powered{' '}
                  <Link
                    href="/services/emergency-water-extraction"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    emergency water extraction
                  </Link>{' '}
                  truck-mount units are required to vacuum hundreds of gallons per minute.
                </p>
              </section>

              {/* Step 5 */}
              <section id="step-5-increase-airflow">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    5
                  </span>
                  Increase Airflow and Reduce Humidity
                </h2>
                <p>
                  Surface extraction is only half the battle; trapped moisture inside building pores evaporates into the air and re-condenses onto cooler surfaces. Open interior doors and exterior windows if outside humidity is low. Run household box fans and high-capacity dehumidifiers to maintain continuous airflow across wet flooring.
                </p>
                <p>
                  During humid Chicago summer months (June–August), trapped indoor moisture creates high relative humidity levels (above 65%), which drastically accelerates black mold growth. This requires industrial desiccant or LGR (low-grain refrigerant) dehumidifiers to drop vapor pressure.
                </p>
              </section>

              {/* Step 6 */}
              <section id="step-6-call-professionals">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    6
                  </span>
                  Call a Water Damage Restoration Company in Chicago Immediately
                </h2>
                <p>
                  DIY cleanup steps only buy you time — household fans cannot penetrate wall studs, subflooring under vinyl or hardwood, or soundproofing insulation. Certified IICRC technicians use non-invasive pin and pinless moisture meters, infrared thermal cameras, and injectidry systems to locate trapped moisture pockets behind walls before mold establishes.
                </p>
                <p>
                  Professional drying prevents permanent structural rot, prevents toxic mold proliferation, and ensures your home meets stringent IICRC S500 scientific drying benchmarks. Learn more about professional costs in our{' '}
                  <Link
                    href="/blog/water-damage-restoration-cost-chicago"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Chicago Water Damage Restoration Cost Guide
                  </Link>
                  .
                </p>
              </section>

              {/* Step 7 */}
              <section id="step-7-contact-insurance">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-base">
                    7
                  </span>
                  Contact Your Insurance Provider
                </h2>
                <p>
                  Report the water loss immediately to your insurance carrier or broker. Most Illinois homeowner policies mandate prompt notification to mitigate damages. Standard policies cover sudden and accidental burst pipes and water heater ruptures, but city sewer backups often require an optional sewer endorsement, and storm surface flooding requires NFIP flood insurance.
                </p>
                <p>
                  A professional restoration company works directly with your insurance adjuster, submitting standardized Xactimate billing line items and detailed moisture drying logs to expedite your claim approval.
                </p>
              </section>

              {/* Why First 24 Hours Matter */}
              <section id="why-first-24-hours-matter" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">Why the First 24 Hours Matter So Much</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Mold Growth in 24–48 Hours</strong>
                      <span>Spores germinate in damp drywall, baseboards, and carpeting rapidly unless relative humidity is controlled under 50%.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Hardwood & Drywall Warping</strong>
                      <span>Porous building materials cup, crown, and buckle within hours of water exposure, resulting in complete replacement costs.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Polar Freeze-Thaw Complications</strong>
                      <span>Trapped moisture expands inside masonry brick joints during Chicago winter freezes, cracking foundations.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Smoother Claim Payouts</strong>
                      <span>Insurance companies reward homeowners who take prompt mitigation action, preventing disputed secondary mold denials.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Chicago Emergency Help */}
              <section id="chicago-emergency-help" className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Get Help Fast, Anywhere in Chicago
                </h2>
                <p>
                  Whether you are dealing with a flooded basement in{' '}
                  <Link
                    href="/chicago/lincoln-park"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Lincoln Park
                  </Link>
                  , a burst pipe in Pilsen, or commercial water intrusion in the{' '}
                  <Link
                    href="/chicago/west-loop"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    West Loop
                  </Link>
                  , rapid response makes all the difference.{' '}
                  <Link
                    href="/about"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Learn more about our team and IICRC certifications
                  </Link>{' '}
                  or{' '}
                  <Link
                    href="/contact"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    contact us now for 24/7 emergency water damage restoration in Chicago
                  </Link>
                  .
                </p>

                <p>
                  Not sure if what you're seeing is a minor leak or something deeper? Read our guide on{' '}
                  <Link
                    href="/blog/signs-of-hidden-water-damage-chicago-home"
                    className="text-sky-600 font-bold hover:underline"
                  >
                    5 Warning Signs of Hidden Water Damage in Your Chicago Home
                  </Link>{' '}
                  to catch hidden leaks before structural destruction occurs.
                </p>
              </section>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <BlogTableOfContents items={tocItems} />

            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center space-x-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 animate-pulse" />
                <span>Chicago Emergency Dispatch</span>
              </div>
              <h3 className="text-xl font-bold leading-snug">
                Water Damage Emergency? 60-Minute Arrival
              </h3>
              <p className="text-xs text-slate-300">
                Direct insurance billing, industrial water extraction, and certified structural drying across all Chicago neighborhoods.
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
              title="Request Rapid Dispatch"
              subtitle="Get an immediate 60-min callback & on-site estimate."
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
