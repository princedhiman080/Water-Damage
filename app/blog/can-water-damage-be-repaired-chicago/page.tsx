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
  title: 'Can Water Damage Be Repaired? Is It Permanent or Reversible?',
  description: "Wondering if your water damage can be fixed or if it's permanent? Learn what qualifies as water damage, what can be reversed, and when replacement is necessary.",
  alternates: { canonical: `${siteConfig.url}/blog/can-water-damage-be-repaired-chicago` },
};

export default function BlogPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Can Water Damage Be Repaired? Is It Permanent or Reversible?', url: '/blog/can-water-damage-be-repaired-chicago' },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Can Water Damage Be Repaired? Is It Permanent or Reversible?',
    'image': '/images/blog/repairable-or-permanent.webp',
    'author': { '@type': 'Organization', 'name': siteConfig.name },
    'publisher': { '@type': 'Organization', 'name': siteConfig.name },
    'datePublished': '2026-09-16',
  };
  
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What qualifies as water damage?","acceptedAnswer":{"@type":"Answer","text":"Any water intrusion where it shouldn't be — burst pipes, appliance leaks, roof leaks, sewer backups, flooding, or condensation from humidity."}},{"@type":"Question","name":"Does water damage go away on its own?","acceptedAnswer":{"@type":"Answer","text":"No. Trapped moisture doesn't evaporate safely on its own and typically leads to mold growth and material breakdown if left untreated."}},{"@type":"Question","name":"Can hardwood floors be saved after water damage?","acceptedAnswer":{"@type":"Answer","text":"Often, yes — if dried quickly with professional equipment within the first 24-48 hours."}},{"@type":"Question","name":"What water-damaged materials usually need full replacement?","acceptedAnswer":{"@type":"Answer","text":"Materials exposed to sewage, particleboard/laminate flooring, and anything left wet for several days typically can't be fully restored."}},{"@type":"Question","name":"When should I really worry about water damage?","acceptedAnswer":{"@type":"Answer","text":"When water has sat for more than 48 hours, you notice sagging ceilings or soft flooring, the source was sewage, or a past fix was only cosmetic."}}]};

  const tocItems = [{"id":"what-qualifies","title":"What Qualifies as Water Damage?"},{"id":"go-away","title":"Does Water Damage Ever Go Away On Its Own?"},{"id":"undo","title":"Is There a Way to Undo Water Damage?"},{"id":"saved-vs-replaced","title":"What Can Usually Be Saved vs. What Usually Can't"},{"id":"how-bad","title":"How Bad Is Water Damage to a House, Really?"},{"id":"when-to-worry","title":"When to Worry About Water Damage"},{"id":"bottom-line","title":"Bottom Line: Most Water Damage Is Fixable"}];

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
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Can Water Damage Be Repaired, or Is It Permanent?</h1>
              
              <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image src="/images/blog/repairable-or-permanent.webp" alt="Can Water Damage Be Repaired? Is It Permanent or Reversible?" width={800} height={400} className="w-full h-auto object-cover" />
              </div>
              
              
<p>Most water damage can be repaired, but the outcome depends heavily on how fast it's addressed and what materials are involved. Here's what can be saved, and what usually can't.</p>
<p>One of the most stressful parts of discovering water damage is not knowing whether it's a fixable inconvenience or a permanent problem. The good news is that the majority of water damage, when treated promptly and properly, is fully repairable. The outcome mostly comes down to two factors: time and material type.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="what-qualifies">What Qualifies as Water Damage?</h2>
<p>Water damage refers to any loss or deterioration caused by water intruding where it shouldn't be. This includes burst pipes, appliance leaks, roof leaks, sewer backups, flooding, and even high humidity that leads to condensation damage. Insurance definitions can vary, but structurally and physically, all of these fall under the same restoration category.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="go-away">Does Water Damage Ever Go Away On Its Own?</h2>
<p>No. This is one of the biggest misconceptions homeowners have. Moisture trapped inside walls, subfloors, or insulation does not simply evaporate away safely on its own timeline. Left alone, it typically leads to mold growth, wood rot, and material breakdown rather than resolving itself.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="undo">Is There a Way to Undo Water Damage?</h2>
<p>In many cases, yes. Professional restoration uses industrial dehumidifiers, air movers, and moisture meters to pull water out of materials before permanent damage sets in. Carpet, drywall, and even hardwood flooring can often be fully dried and saved if treated within the first 24 to 48 hours.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="saved-vs-replaced">What Can Usually Be Saved vs. What Usually Can't</h2>
<h3 className="text-xl font-bold mt-4 mb-2 text-slate-800">Often Repairable</h3>
<ul className="list-disc pl-5 space-y-2 text-slate-700">
  <li>Hardwood flooring, if dried quickly with proper equipment</li>
  <li>Drywall with minor, localized water exposure</li>
  <li>Carpet and padding, if treated within 24 to 48 hours and not contaminated</li>
  <li>Wood trim and cabinetry with light water exposure</li>
</ul>
<h3 className="text-xl font-bold mt-4 mb-2 text-slate-800">Often Needs Replacement</h3>
<ul className="list-disc pl-5 space-y-2 text-slate-700">
  <li>Drywall and insulation exposed to sewage or long-term saturation</li>
  <li>Particleboard or laminate flooring, which swells and doesn't return to shape</li>
  <li>Carpet and padding exposed to blackwater or left wet for several days</li>
  <li>Structural wood with visible rot or significant warping</li>
</ul>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="how-bad">How Bad Is Water Damage to a House, Really?</h2>
<p>Severity depends on the water category, how long it sat, and what materials it touched. A clean-water leak caught the same day is a minor repair. A blackwater sewer backup left for a week can affect structural framing. This is exactly why fast, professional response matters. See our guide on <Link href="/blog/water-damage-restoration-cost-chicago" className="text-sky-600 font-semibold hover:underline">water damage restoration costs in Chicago</Link> to understand how severity affects price.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="when-to-worry">When to Worry About Water Damage</h2>
<ul className="list-disc pl-5 space-y-2 text-slate-700">
  <li>Water has been present for more than 48 hours without treatment</li>
  <li>You notice sagging ceilings, soft flooring, or a persistent musty smell</li>
  <li>The source was sewage, flooding, or an unknown contaminated source</li>
  <li>A previous repair was only cosmetic, such as fresh paint over an old stain</li>
</ul>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="bottom-line">Bottom Line: Most Water Damage Is Fixable</h2>
<p>With a fast, professional response, the overwhelming majority of water damage in Chicago homes can be fully repaired without permanent structural issues. A <Link href="/" className="text-sky-600 font-semibold hover:underline">water damage restoration Chicago</Link> specialist can assess your specific situation and tell you exactly what can be saved. <Link href="/contact" className="text-sky-600 font-semibold hover:underline">Contact us for a free assessment</Link> or <Link href="/about" className="text-sky-600 font-semibold hover:underline">learn more about our restoration process</Link>.</p>

              
              
              <section id="faqs" className="mt-12 pt-8 border-t border-slate-200">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">What qualifies as water damage?</h3>
                    <p className="text-slate-700">Any water intrusion where it shouldn't be — burst pipes, appliance leaks, roof leaks, sewer backups, flooding, or condensation from humidity.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Does water damage go away on its own?</h3>
                    <p className="text-slate-700">No. Trapped moisture doesn't evaporate safely on its own and typically leads to mold growth and material breakdown if left untreated.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Can hardwood floors be saved after water damage?</h3>
                    <p className="text-slate-700">Often, yes — if dried quickly with professional equipment within the first 24-48 hours.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">What water-damaged materials usually need full replacement?</h3>
                    <p className="text-slate-700">Materials exposed to sewage, particleboard/laminate flooring, and anything left wet for several days typically can't be fully restored.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">When should I really worry about water damage?</h3>
                    <p className="text-slate-700">When water has sat for more than 48 hours, you notice sagging ceilings or soft flooring, the source was sewage, or a past fix was only cosmetic.</p>
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
