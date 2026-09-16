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
  title: 'How to Choose a Water Damage Restoration Company in Chicago',
  description: "Not all restoration companies are equal. Learn the 7 things to check before hiring a water damage restoration company in Chicago, from certifications to insurance help.",
  alternates: { canonical: `${siteConfig.url}/blog/how-to-choose-water-damage-restoration-company-chicago` },
};

export default function BlogPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'How to Choose a Water Damage Restoration Company in Chicago', url: '/blog/how-to-choose-water-damage-restoration-company-chicago' },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Choose a Water Damage Restoration Company in Chicago',
    'image': '/images/blog/choose-company.webp',
    'author': { '@type': 'Organization', 'name': siteConfig.name },
    'publisher': { '@type': 'Organization', 'name': siteConfig.name },
    'datePublished': '2026-09-16',
  };
  
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What certification should a water damage restoration company have?","acceptedAnswer":{"@type":"Answer","text":"Look for IICRC (Institute of Inspection, Cleaning and Restoration Certification) — the industry standard for training and technique."}},{"@type":"Question","name":"Who pays the restoration company, me or my insurance?","acceptedAnswer":{"@type":"Answer","text":"If the damage is covered under your policy, your insurance typically pays, especially when the company bills the insurer directly and documents everything to their standards."}},{"@type":"Question","name":"How fast should a restoration company respond to an emergency?","acceptedAnswer":{"@type":"Answer","text":"A legitimate 24/7 emergency team should arrive within 60-90 minutes of your call, any time of day."}},{"@type":"Question","name":"Should a restoration company give a written estimate?","acceptedAnswer":{"@type":"Answer","text":"Yes, always. Avoid companies that only give a verbal number or ask you to sign a blank authorization form before explaining the scope of work."}},{"@type":"Question","name":"What red flags should I watch for when hiring a restoration company?","acceptedAnswer":{"@type":"Answer","text":"Door-to-door solicitation after storms, pressure to sign immediately, no local address or licensing info, and refusal to provide a written estimate."}}]};

  const tocItems = [{"id":"iicrc","title":"1. IICRC Certification"},{"id":"emergency","title":"2. 24/7 Emergency Availability"},{"id":"billing","title":"3. Direct Insurance Billing Experience"},{"id":"estimates","title":"4. Transparent, Written Estimates"},{"id":"local","title":"5. Local Chicago Experience"},{"id":"full-service","title":"6. Full-Service Capability"},{"id":"reviews","title":"7. Reviews and Verifiable References"},{"id":"red-flags","title":"Red Flags to Avoid"},{"id":"why-it-matters","title":"Why This Matters More Than the Price Tag"}];

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
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">How to Choose a Water Damage Restoration Company in Chicago</h1>
              
              <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image src="/images/blog/choose-company.webp" alt="How to Choose a Water Damage Restoration Company in Chicago" width={800} height={400} className="w-full h-auto object-cover" />
              </div>
              
              
<p>The right restoration company can save your home and your insurance claim. The wrong one can leave you with hidden mold and a denied claim. Here's what to check before you hire anyone.</p>
<p>When water is actively damaging your home, it's tempting to hire the first company that answers the phone. But the quality of the restoration company you choose directly affects how much of your home is saved, how smooth your insurance claim goes, and whether mold shows up months later. Here's exactly what to look for.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="iicrc">1. IICRC Certification</h2>
<p>The Institute of Inspection, Cleaning and Restoration Certification (IICRC) is the industry standard for <Link href="/" className="text-sky-600 font-semibold hover:underline">water damage restoration</Link> training. Always confirm the technicians who will actually be in your home, not just the company as a whole, hold current certification.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="emergency">2. 24/7 Emergency Availability</h2>
<p>Water damage doesn't wait for business hours, and neither should your restoration company. A legitimate emergency response team should be able to arrive within 60 to 90 minutes of your call, any time of day, anywhere in the Chicago area.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="billing">3. Direct Insurance Billing Experience</h2>
<h3 className="text-xl font-bold mt-4 mb-2 text-slate-800">Who Pays the Restoration Company?</h3>
<p>In most cases, your homeowners insurance pays for restoration covered under your policy, but the process works best when the restoration company bills your insurer directly and documents everything to their standards. Ask upfront whether the company has experience working with major Chicago-area insurers and can provide the documentation adjusters expect.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="estimates">4. Transparent, Written Estimates</h2>
<p>A trustworthy company provides an itemized, written estimate before work begins, not a vague verbal number. Be cautious of companies that ask you to sign a blank work authorization form.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="local">5. Local Chicago Experience</h2>
<p>Chicago's mix of century-old brick two-flats, high-rise condos, and modern construction all present different restoration challenges, from lath-and-plaster walls to combined sewer backups. A company with deep local experience will know how to handle these building types without unnecessary demolition.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="full-service">6. Full-Service Capability</h2>
<p>Choose a company that handles the entire process, including extraction, drying, sanitization, mold remediation, and reconstruction, rather than one that dries your home and leaves repairs to someone else. This reduces miscommunication and delays between contractors.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="reviews">7. Reviews and Verifiable References</h2>
<p>Look beyond star ratings. Read a handful of recent reviews for details on response time, communication, and how the company handled the insurance process, not just the final result.</p>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="red-flags">Red Flags to Avoid</h2>
<ul className="list-disc pl-5 space-y-2 text-slate-700">
  <li>Door-to-door solicitation immediately after a major storm</li>
  <li>Pressure to sign a contract before you understand the scope of work</li>
  <li>No physical local address or licensing information</li>
  <li>Refusal to provide a written estimate</li>
</ul>

<h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900" id="why-it-matters">Why This Matters More Than the Price Tag</h2>
<p>A slightly cheaper quote isn't worth it if the company skips structural drying steps and mold shows up in three months. If you're unsure whether restoration is even necessary for your situation, read <Link href="/blog/is-water-damage-restoration-worth-it-chicago" className="text-sky-600 font-semibold hover:underline">Is Water Damage Restoration Worth It?</Link> first.</p>
<p>Want to see how we check every box above? <Link href="/about" className="text-sky-600 font-semibold hover:underline">Learn more about our certifications and process</Link> or <Link href="/contact" className="text-sky-600 font-semibold hover:underline">request a free written estimate today</Link>.</p>

              
              
              <section id="faqs" className="mt-12 pt-8 border-t border-slate-200">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">What certification should a water damage restoration company have?</h3>
                    <p className="text-slate-700">Look for IICRC (Institute of Inspection, Cleaning and Restoration Certification) — the industry standard for training and technique.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Who pays the restoration company, me or my insurance?</h3>
                    <p className="text-slate-700">If the damage is covered under your policy, your insurance typically pays, especially when the company bills the insurer directly and documents everything to their standards.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">How fast should a restoration company respond to an emergency?</h3>
                    <p className="text-slate-700">A legitimate 24/7 emergency team should arrive within 60-90 minutes of your call, any time of day.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Should a restoration company give a written estimate?</h3>
                    <p className="text-slate-700">Yes, always. Avoid companies that only give a verbal number or ask you to sign a blank authorization form before explaining the scope of work.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">What red flags should I watch for when hiring a restoration company?</h3>
                    <p className="text-slate-700">Door-to-door solicitation after storms, pressure to sign immediately, no local address or licensing info, and refusal to provide a written estimate.</p>
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
