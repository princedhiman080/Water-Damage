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
  title: 'Is Water Damage Restoration Worth It? | Chicago Homeowner Guide',
  description: "Wondering if water damage restoration is worth the cost? See how it affects home value, insurance, and long-term safety for Chicago homeowners before you decide.",
  alternates: { canonical: `${siteConfig.url}/blog/is-water-damage-restoration-worth-it-chicago` },
};

export default function BlogPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Is Water Damage Restoration Worth It? | Chicago Homeowner Guide', url: '/blog/is-water-damage-restoration-worth-it-chicago' },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Is Water Damage Restoration Worth It? | Chicago Homeowner Guide',
    'image': '/images/blog/worth-it.webp',
    'author': { '@type': 'Organization', 'name': siteConfig.name },
    'publisher': { '@type': 'Organization', 'name': siteConfig.name },
    'datePublished': '2026-09-16',
  };
  
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is water damage restoration worth the cost?","acceptedAnswer":{"@type":"Answer","text":"Yes, for anything beyond a minor spill. Professional restoration prevents mold, protects your home's structure, and preserves resale value — all of which cost far more to fix later than the restoration itself."}},{"@type":"Question","name":"How much does water damage devalue a house?","acceptedAnswer":{"@type":"Answer","text":"Untreated water damage can significantly lower resale value due to visible stains, odors, and required disclosures during a sale. Homes with documented professional restoration hold value much better."}},{"@type":"Question","name":"Should I buy a house that had water damage in the past?","acceptedAnswer":{"@type":"Answer","text":"It's not automatically a dealbreaker if the damage was professionally restored and documented. The red flag is damage that was only cosmetically covered without proper drying or mold remediation."}},{"@type":"Question","name":"What happens if you don't fix water damage?","acceptedAnswer":{"@type":"Answer","text":"Mold spreads, wood framing weakens, odors become permanent, and repair costs increase significantly the longer it's left untreated."}},{"@type":"Question","name":"Can I do water damage restoration myself?","acceptedAnswer":{"@type":"Answer","text":"For very small spills, yes. But once water soaks into drywall, insulation, or subfloors, DIY drying usually leaves hidden moisture behind, leading to mold later."}}]};

  const tocItems = [{"id":"devalue-house","title":"How Much Does Water Damage Devalue a House?"},{"id":"buy-a-house","title":"Should You Buy a House That Had Water Damage?"},{"id":"dont-fix","title":"What Happens If You Don't Fix Water Damage?"},{"id":"can-it-be-fixed","title":"Can Water Damage Be Fixed in a House?"},{"id":"diy-restoration","title":"Can You Do Water Restoration Yourself?"},{"id":"how-to-choose","title":"How to Choose a Water Damage Restoration Company"},{"id":"bottom-line","title":"The Bottom Line"}];

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
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Is Water Damage Restoration Worth It? A Chicago Homeowner's Honest Answer</h1>
              
              <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image src="/images/blog/worth-it.webp" alt="Is Water Damage Restoration Worth It? | Chicago Homeowner Guide" width={800} height={400} className="w-full h-auto object-cover" />
              </div>
              
              
<p>Restoration isn't cheap, so it's fair to ask if it's really worth it. Here's how skipping professional restoration compares to paying for it, in terms of cost, safety, and resale value.</p>
<p>When you're staring at a water bill from a restoration company, it's natural to wonder if you can just skip it, dry things out yourself, and move on. For small, surface-level spills, that might be true. But for anything beyond a minor spill, professional <Link href="/" className="text-sky-600 font-semibold hover:underline">water damage restoration</Link> is almost always worth it, and skipping it usually costs more in the long run, not less.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="devalue-house">How Much Does Water Damage Devalue a House?</h2>
<p>Untreated water damage is one of the fastest ways to lower a Chicago home's resale value. Buyers and appraisers look for signs of past water issues, such as stains, musty smells, and warped flooring, and even fully repaired damage can require disclosure during a sale. Homes with a documented history of professional restoration and repair tend to hold their value far better than homes with visible or undisclosed water damage.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="buy-a-house">Should You Buy a House That Had Water Damage?</h2>
<p>Not automatically a dealbreaker. A house that had water damage which was professionally restored, documented, and inspected can be a perfectly safe purchase. The real red flag is water damage that was only cosmetically covered, like fresh paint over a stain or new carpet over a damp subfloor, without full structural drying or mold remediation. Always ask for restoration records and, when possible, a moisture inspection before closing.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="dont-fix">What Happens If You Don't Fix Water Damage?</h2>
<ul className="list-disc pl-5 space-y-2 text-slate-700">
  <li>Mold spreads through wall cavities, subfloors, and HVAC ducts, often out of sight</li>
  <li>Wood framing and subfloors weaken structurally over months and years</li>
  <li>Musty odors become permanent as mold colonizes porous materials</li>
  <li>Repair costs increase significantly compared to early intervention</li>
  <li>Health issues can develop for household members with allergies, asthma, or weakened immune systems</li>
</ul>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="can-it-be-fixed">Can Water Damage Be Fixed in a House?</h2>
<p>Yes, in the vast majority of cases water damage is fully fixable with the right process: extraction, structural drying, sanitization, and repair of any materials that couldn't be saved. The key is catching it early and using proper equipment. A professional <Link href="/" className="text-sky-600 font-semibold hover:underline"><Link href="/" className="text-sky-600 font-semibold hover:underline">water damage restoration Chicago</Link></Link> team can typically save materials that a homeowner would otherwise assume need replacing, which lowers the total cost.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="diy-restoration">Can You Do Water Restoration Yourself?</h2>
<p>For very small, isolated incidents, such as a spilled glass of water or a quickly caught appliance leak, a towel and a fan may be enough. But once water has soaked into drywall, insulation, subfloors, or carpet padding, DIY drying almost never removes all the moisture. The surface may feel dry while material underneath stays wet, which is exactly how hidden mold problems start.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="how-to-choose">How to Choose a Water Damage Restoration Company</h2>
<p>Look for IICRC-certified technicians, 24/7 emergency response, direct insurance billing experience, and transparent, itemized quotes. We cover this in full detail in our guide, <Link href="/blog/how-to-choose-water-damage-restoration-company-chicago" className="text-sky-600 font-semibold hover:underline">How to Choose a Water Damage Restoration Company in Chicago</Link>.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="bottom-line">The Bottom Line</h2>
<p>Professional restoration protects your home's structure, your family's health, and your property value, which makes it worth the investment for almost any water damage beyond a minor spill. <Link href="/about" className="text-sky-600 font-semibold hover:underline">Learn more about our certified team</Link> or <Link href="/contact" className="text-sky-600 font-semibold hover:underline">get a free assessment</Link> to find out exactly what your situation needs.</p>

              
              
              <section id="faqs" className="mt-12 pt-8 border-t border-slate-200">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Is water damage restoration worth the cost?</h3>
                    <p className="text-slate-700">Yes, for anything beyond a minor spill. Professional restoration prevents mold, protects your home's structure, and preserves resale value — all of which cost far more to fix later than the restoration itself.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">How much does water damage devalue a house?</h3>
                    <p className="text-slate-700">Untreated water damage can significantly lower resale value due to visible stains, odors, and required disclosures during a sale. Homes with documented professional restoration hold value much better.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Should I buy a house that had water damage in the past?</h3>
                    <p className="text-slate-700">It's not automatically a dealbreaker if the damage was professionally restored and documented. The red flag is damage that was only cosmetically covered without proper drying or mold remediation.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">What happens if you don't fix water damage?</h3>
                    <p className="text-slate-700">Mold spreads, wood framing weakens, odors become permanent, and repair costs increase significantly the longer it's left untreated.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Can I do water damage restoration myself?</h3>
                    <p className="text-slate-700">For very small spills, yes. But once water soaks into drywall, insulation, or subfloors, DIY drying usually leaves hidden moisture behind, leading to mold later.</p>
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
              <a href={`tel:${siteConfig.phoneTel}`} className="block text-center bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 rounded-xl text-sm shadow">CALL {siteConfig.phone} (24/7)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
