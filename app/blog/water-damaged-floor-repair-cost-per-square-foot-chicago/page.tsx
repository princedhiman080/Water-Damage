import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'Water Damaged Floor Repair Cost Per Square Foot | Chicago Guide',
  description: 'Wondering what it costs per square foot to repair a water damaged floor? See real price ranges by flooring type for Chicago homes, plus what affects your final bill.',
  alternates: { canonical: `${siteConfig.url}/blog/water-damaged-floor-repair-cost-per-square-foot-chicago` },
};

export default function BlogPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Water Damaged Floor Repair Cost Per Square Foot | Chicago Guide', url: '/blog/water-damaged-floor-repair-cost-per-square-foot-chicago' },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Water Damaged Floor Repair Cost Per Square Foot | Chicago Guide',
    'image': '/images/blog/water-damaged-floor-repair-cost.webp',
    'author': { '@type': 'Organization', 'name': siteConfig.name },
    'publisher': { '@type': 'Organization', 'name': siteConfig.name },
    'datePublished': '2026-09-16',
  };
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost per square foot to fix a water damaged floor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the material — carpet runs $2–$8 per sq. ft., laminate $4–$8, hardwood $5–$12, and tile $6–$15, with subfloor repair adding $2–$5 per sq. ft. if needed."
        }
      },
      {
        "@type": "Question",
        "name": "Can a water damaged hardwood floor be saved, or does it need full replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on timing. If dried within 24–48 hours, hardwood can often be refinished instead of replaced. Warped, cupped, or buckled boards usually require replacement."
        }
      },
      {
        "@type": "Question",
        "name": "Is laminate flooring worth repairing after water damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually not — laminate absorbs water and swells permanently, so replacement is typically more practical than repair."
        }
      },
      {
        "@type": "Question",
        "name": "Does water damage to flooring always mean the subfloor needs repair too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not always, but it's common. A moisture inspection is the only way to confirm whether the subfloor underneath was affected."
        }
      },
      {
        "@type": "Question",
        "name": "Will my insurance cover the cost of a water-damaged floor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Often yes, if the damage was sudden and accidental (like a burst pipe). Gradual leaks or outside flooding are typically excluded unless you have specific additional coverage."
        }
      }
    ]
  };

  const tocItems = [
    { id: 'average-cost', title: 'Average Cost Per Square Foot by Flooring Type' },
    { id: 'what-affects-price', title: 'What Actually Affects Your Per-Square-Foot Price' },
    { id: 'repair-vs-replace', title: 'Is It Cheaper to Repair or Fully Replace the Floor?' },
    { id: 'insurance-coverage', title: 'Does Insurance Cover Water-Damaged Flooring?' },
    { id: 'accurate-quote', title: 'How to Get an Accurate Quote for Your Floor' }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-7xl mx-auto space-y-6">
        <Link href="/blog" className="inline-flex items-center text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /><span>Back to All Articles</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="prose prose-slate max-w-none space-y-8 text-base leading-relaxed text-slate-700">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">How Much Does It Cost Per Square Foot to Repair a Water Damaged Floor in Chicago?</h1>
              
              <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image src="/images/blog/water-damaged-floor-repair-cost.webp" alt="Water Damaged Floor Repair Cost Per Square Foot" width={800} height={400} className="w-full h-auto object-cover" />
              </div>
              
              <p>When water damage hits your floor, one of the first things homeowners search for is a straight number: how much per square foot? The truth is, flooring repair costs swing widely depending on the material, how long the water sat, and whether the subfloor underneath was affected too. This guide breaks down realistic per-square-foot pricing so you know what to expect before calling a restoration company.</p>

              <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="average-cost">Average Cost Per Square Foot by Flooring Type</h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li><strong>Carpet and padding:</strong> $2 – $6 per sq. ft. (cleaning/drying) or $3 – $8 per sq. ft. for full replacement</li>
                <li><strong>Laminate flooring:</strong> $4 – $8 per sq. ft. — laminate almost always needs replacement since it swells and doesn't return to shape</li>
                <li><strong>Hardwood flooring:</strong> $5 – $12 per sq. ft. — refinishing if caught early, full replacement if boards are warped or cupped</li>
                <li><strong>Tile flooring:</strong> $6 – $15 per sq. ft. — tile itself often survives, but the subfloor underneath may need repair</li>
                <li><strong>Vinyl/LVP flooring:</strong> $3 – $7 per sq. ft.</li>
                <li><strong>Subfloor replacement</strong> (if needed, in addition to surface flooring): $2 – $5 per sq. ft.</li>
              </ul>
              <p className="mt-4">These ranges cover material and labor for the flooring itself. If mold has developed or the subfloor is compromised, costs increase further.</p>

              <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="what-affects-price">What Actually Affects Your Per-Square-Foot Price</h2>

              <h3 className="text-xl font-bold mt-6 mb-2 text-slate-800">1. How Long the Water Sat Before Treatment</h3>
              <p>Water caught within 24–48 hours often allows drying and refinishing instead of full replacement — cutting costs significantly. Water left untreated for days almost always means tear-out and replacement.</p>

              <h3 className="text-xl font-bold mt-6 mb-2 text-slate-800">2. The Water Category</h3>
              <p>Clean water (a supply line leak) costs less to remediate than greywater or blackwater (sewage, flooding), which require sanitization, protective disposal, and sometimes subfloor replacement due to contamination.</p>

              <h3 className="text-xl font-bold mt-6 mb-2 text-slate-800">3. Whether the Subfloor Was Affected</h3>
              <p>Surface flooring can look fine while the plywood or concrete subfloor underneath stays wet. If moisture reached the subfloor, that's an added cost layer most homeowners don't budget for upfront.</p>

              <h3 className="text-xl font-bold mt-6 mb-2 text-slate-800">4. Material Type and Availability</h3>
              <p>Hardwood and tile cost more per square foot than laminate or carpet, and matching an existing hardwood stain or a discontinued tile pattern can add to labor time and cost.</p>

              <h3 className="text-xl font-bold mt-6 mb-2 text-slate-800">5. Chicago-Specific Factors</h3>
              <p>Many Chicago homes — especially older two-flats and greystones — have original hardwood or tile that's harder and more expensive to match than in newer construction, which can push repair costs toward the higher end of the range.</p>

              <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="repair-vs-replace">Is It Cheaper to Repair or Fully Replace the Floor?</h2>
              <p>For small, localized damage (a few boards or tiles), spot repair is almost always cheaper. But once damage spans multiple rooms or the subfloor is compromised, full replacement often ends up more cost-effective than patchwork repairs, since matching materials and blending finishes gets expensive fast.</p>

              <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="insurance-coverage">Does Insurance Cover Water-Damaged Flooring?</h2>
              <p>In most cases, yes — if the water damage resulted from a sudden, accidental cause like a burst pipe. Gradual leaks and flooding from outside sources are typically excluded unless you have specific coverage. It's worth checking your policy details or asking your restoration company to review your coverage before starting repairs.</p>

              <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="accurate-quote">How to Get an Accurate Quote for Your Floor</h2>
              <p>Per-square-foot ranges are a starting point, not a final number. A professional <Link href="/" className="text-sky-600 font-semibold hover:underline">water damage restoration Chicago</Link> inspection will check moisture levels in both the flooring and subfloor with a moisture meter, so you get a written estimate based on your actual damage rather than a rough average.</p>

              <section id="faqs" className="mt-12 pt-8 border-t border-slate-200">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">How much does it cost per square foot to fix a water damaged floor?</h3>
                    <p className="text-slate-700">It depends on the material — carpet runs $2–$8 per sq. ft., laminate $4–$8, hardwood $5–$12, and tile $6–$15, with subfloor repair adding $2–$5 per sq. ft. if needed.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Can a water damaged hardwood floor be saved, or does it need full replacement?</h3>
                    <p className="text-slate-700">It depends on timing. If dried within 24–48 hours, hardwood can often be refinished instead of replaced. Warped, cupped, or buckled boards usually require replacement.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Is laminate flooring worth repairing after water damage?</h3>
                    <p className="text-slate-700">Usually not — laminate absorbs water and swells permanently, so replacement is typically more practical than repair.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Does water damage to flooring always mean the subfloor needs repair too?</h3>
                    <p className="text-slate-700">Not always, but it's common. A moisture inspection is the only way to confirm whether the subfloor underneath was affected.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Will my insurance cover the cost of a water-damaged floor?</h3>
                    <p className="text-slate-700">Often yes, if the damage was sudden and accidental (like a burst pipe). Gradual leaks or outside flooding are typically excluded unless you have specific additional coverage.</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="pt-6"><ContactForm title="Get a Fair, Itemized Estimate Today" subtitle="We work directly with all major insurance carriers to minimize your out-of-pocket costs." /></div>
          </div>
          <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            <BlogTableOfContents items={tocItems} />
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-3">
              <h3 className="text-xl font-bold">24/7 Emergency Dispatch</h3>
              <p className="text-xs text-slate-300">60-minute arrival guaranteed in Chicago.</p>
              <a href={\`tel:\${siteConfig.phoneTel}\`} className="block text-center bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 rounded-xl text-sm shadow">CALL {siteConfig.phone} (24/7)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
