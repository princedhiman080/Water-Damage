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
  title: 'What Not to Do After Water Damage | 7 Common Mistakes',
  description: "Avoid these 7 common mistakes after water damage in your Chicago home, from using the wrong equipment to waiting too long to call for help.",
  alternates: { canonical: `${siteConfig.url}/blog/what-not-to-do-after-water-damage-chicago` },
};

export default function BlogPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'What Not to Do After Water Damage | 7 Common Mistakes', url: '/blog/what-not-to-do-after-water-damage-chicago' },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What Not to Do After Water Damage | 7 Common Mistakes',
    'image': '/images/blog/what-not-to-do.webp',
    'author': { '@type': 'Organization', 'name': siteConfig.name },
    'publisher': { '@type': 'Organization', 'name': siteConfig.name },
    'datePublished': '2026-09-16',
  };
  
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the biggest mistake homeowners make after water damage?","acceptedAnswer":{"@type":"Answer","text":"Waiting to see if it dries on its own. Materials can hold hidden moisture even when the surface looks dry, and mold can start within 24-48 hours."}},{"@type":"Question","name":"Can I use a regular vacuum to clean up standing water?","acceptedAnswer":{"@type":"Answer","text":"No — a standard household vacuum isn't built for water and can cause an electrical hazard. Use a wet/dry shop vac for small amounts only."}},{"@type":"Question","name":"Should I throw away damaged items right away?","acceptedAnswer":{"@type":"Answer","text":"No, document everything with photos and video first, since insurance adjusters need to review the damage before it's discarded."}},{"@type":"Question","name":"How do I know if water damage is permanent?","acceptedAnswer":{"@type":"Answer","text":"Damage becomes effectively permanent when it's covered up (like painting over a stain) instead of properly dried, allowing trapped moisture to keep causing harm."}},{"@type":"Question","name":"Should I turn on fans right after discovering water damage?","acceptedAnswer":{"@type":"Answer","text":"Only if the water is clean. If it's from sewage or flooding (grey/blackwater), fans and HVAC can spread contaminants throughout the home."}}]};

  const tocItems = [{"id":"mistake-1","title":"Mistake 1: Waiting to See If It Dries on Its Own"},{"id":"mistake-2","title":"Mistake 2: Using a Regular Household Vacuum on Standing Water"},{"id":"mistake-3","title":"Mistake 3: Turning on Fans or HVAC Before Assessing Contamination"},{"id":"mistake-4","title":"Mistake 4: Throwing Away Damaged Items Before Documenting Them"},{"id":"mistake-5","title":"Mistake 5: Covering Stains With Paint Instead of Addressing the Cause"},{"id":"mistake-6","title":"Mistake 6: Delaying the Call to Your Insurance Company"},{"id":"mistake-7","title":"Mistake 7: Hiring the Cheapest Available Company Without Checking Credentials"},{"id":"what-to-do","title":"What to Do Instead"}];

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
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">What Not to Do After Water Damage (7 Mistakes Chicago Homeowners Make)</h1>
              
              <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image src="/images/blog/what-not-to-do.webp" alt="What Not to Do After Water Damage | 7 Common Mistakes" width={800} height={400} className="w-full h-auto object-cover" />
              </div>
              
              
<p>The wrong response to water damage can turn a fixable problem into a permanent one. Here are the most common mistakes Chicago homeowners make, and what to do instead.</p>
<p>What you do in the hours after discovering water damage matters just as much as how fast you act. Many Chicago homeowners unintentionally make the damage worse, delay their insurance claim, or set the stage for mold by making one of these common mistakes.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="mistake-1">Mistake 1: Waiting to See If It Dries on Its Own</h2>
<p>Water doesn't need to be visible to be causing damage. Materials like drywall, insulation, and subflooring can hold moisture long after the surface looks dry, and mold can begin developing within 24 to 48 hours regardless of whether you're actively watching for it.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="mistake-2">Mistake 2: Using a Regular Household Vacuum on Standing Water</h2>
<p>A standard vacuum cleaner is not built to handle water and can cause an electrical hazard or be destroyed instantly. Use a wet or dry shop vac for small amounts, and call professionals for anything beyond that.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="mistake-3">Mistake 3: Turning on Fans or HVAC Before Assessing Contamination</h2>
<p>If the water involved is greywater or blackwater from appliances, sewage, or flooding, blasting fans or running your HVAC system can spread contaminants and mold spores throughout the home instead of just drying the area.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="mistake-4">Mistake 4: Throwing Away Damaged Items Before Documenting Them</h2>
<p>Insurance adjusters need to see, or at least review photos of, damaged belongings before they're discarded. Take clear photos and videos first, and keep a written inventory when possible.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="mistake-5">Mistake 5: Covering Stains With Paint Instead of Addressing the Cause</h2>
<h3 className="text-xl font-bold mt-4 mb-2 text-slate-800">How Do You Know If Water Damage Is Permanent?</h3>
<p>Water damage becomes effectively permanent when it's covered up rather than dried out, since the moisture stays trapped and continues feeding mold and weakening materials behind a fresh coat of paint. True permanent damage, such as structural rot or irreversible warping, is actually less common than homeowners think, as long as the underlying moisture is fully addressed early.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="mistake-6">Mistake 6: Delaying the Call to Your Insurance Company</h2>
<p>Most policies require prompt notification of damage. Waiting days or weeks to report a leak can complicate, or in some cases jeopardize, your claim.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="mistake-7">Mistake 7: Hiring the Cheapest Available Company Without Checking Credentials</h2>
<p>Cutting corners on who dries out your home often costs more later. See our full breakdown in <Link href="/blog/how-to-choose-water-damage-restoration-company-chicago" className="text-sky-600 font-semibold hover:underline">How to Choose a Water Damage Restoration Company in Chicago</Link>.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="what-to-do">What to Do Instead</h2>
<ul className="list-disc pl-5 space-y-2 text-slate-700">
  <li>Stop the water source and cut power to affected outlets if safe to do so</li>
  <li>Photograph everything before cleanup begins</li>
  <li>Call a certified restoration company the same day</li>
  <li>Notify your insurance provider promptly</li>
</ul>
<p>Need the full emergency response checklist? Read our guide on <Link href="/blog/water-damage-restoration-chicago-first-24-hours" className="text-sky-600 font-semibold hover:underline">what to do in the first 24 hours</Link>, or call a <Link href="/" className="text-sky-600 font-semibold hover:underline">water damage restoration Chicago</Link> expert today. Or <Link href="/contact" className="text-sky-600 font-semibold hover:underline">contact our team</Link> now if you're dealing with active damage.</p>

              
              
              <section id="faqs" className="mt-12 pt-8 border-t border-slate-200">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">What is the biggest mistake homeowners make after water damage?</h3>
                    <p className="text-slate-700">Waiting to see if it dries on its own. Materials can hold hidden moisture even when the surface looks dry, and mold can start within 24-48 hours.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Can I use a regular vacuum to clean up standing water?</h3>
                    <p className="text-slate-700">No — a standard household vacuum isn't built for water and can cause an electrical hazard. Use a wet/dry shop vac for small amounts only.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Should I throw away damaged items right away?</h3>
                    <p className="text-slate-700">No, document everything with photos and video first, since insurance adjusters need to review the damage before it's discarded.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">How do I know if water damage is permanent?</h3>
                    <p className="text-slate-700">Damage becomes effectively permanent when it's covered up (like painting over a stain) instead of properly dried, allowing trapped moisture to keep causing harm.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Should I turn on fans right after discovering water damage?</h3>
                    <p className="text-slate-700">Only if the water is clean. If it's from sewage or flooding (grey/blackwater), fans and HVAC can spread contaminants throughout the home.</p>
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
