import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowLeft, CheckCircle2, AlertTriangle, ListChecks, ShieldAlert, FileText, Camera, Droplets, HardHat, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'The Ultimate Chicago Water Damage Restoration Checklist',
  description: 'A step-by-step checklist for Chicago homeowners facing water damage, ensuring nothing is missed from the initial flood to final restoration.',
  alternates: { canonical: `${siteConfig.url}/blog/chicago-water-damage-restoration-checklist` },
};

export default function BlogPageName() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Restoration Checklist', url: '/blog/chicago-water-damage-restoration-checklist' },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'The Ultimate Chicago Water Damage Restoration Checklist',
    'author': { '@type': 'Organization', 'name': siteConfig.name },
    'publisher': { '@type': 'Organization', 'name': siteConfig.name },
    'datePublished': '2026-07-30',
  };

  const tocItems = [
    { id: 'immediate-response', title: 'Phase 1: Immediate Response' },
    { id: 'documentation-insurance', title: 'Phase 2: Documentation & Insurance' },
    { id: 'mitigation-extraction', title: 'Phase 3: Mitigation & Extraction' },
    { id: 'structural-drying', title: 'Phase 4: Structural Drying' },
    { id: 'reconstruction-phase', title: 'Phase 5: Reconstruction' },
    { id: 'prevention-upgrades', title: 'Phase 6: Future Prevention' },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-7xl mx-auto space-y-6">
        <Link href="/blog" className="inline-flex items-center text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /><span>Back to All Articles</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="prose prose-slate max-w-none space-y-8 text-base leading-relaxed text-slate-700">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">The Ultimate Chicago Water Damage Restoration Checklist</h1>
              
              <p>When sudden water damage strikes your home, the chaos and panic that follow can make it incredibly difficult to think clearly. The steps you take immediately following a flood dictate not only the total cost of the repairs but also how smoothly your insurance claim will be processed.</p>
              
              <p>Chicago homeowners face unique challenges, from the urgency of a mid-winter pipe burst to the hazardous nature of a massive spring sewer backup. To navigate this overwhelming process effectively, you need a structured, step-by-step plan.</p>
              
              <p>This comprehensive checklist is designed to guide you through every phase of a professional <Link href="/" className="text-sky-600 font-semibold hover:underline">Water Damage Restoration Chicago</Link> project. We have broken down the entire lifecycle of a flood disaster into six distinct, manageable phases.</p>
              
              <p>By following this guide, you can ensure the safety of your family, maximize your insurance payout, and restore your property to its original—or even better—condition.</p>

              {/* CHECKLIST HIGHLIGHT BOX */}
              <div className="bg-sky-50 border-l-4 border-sky-600 p-6 rounded-r-2xl my-8 shadow-sm">
                <div className="flex items-start">
                  <ListChecks className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-sky-950 m-0 mb-2">How to Use This Checklist</h3>
                    <p className="text-sm text-slate-700 m-0">
                      Work through this checklist sequentially. Phase 1 is strictly for the first hour of the emergency. Do not skip to Phase 3 (Cleanup) before completing Phase 2 (Documentation), or you risk destroying critical evidence needed for your insurance adjuster.
                    </p>
                  </div>
                </div>
              </div>

              <section id="immediate-response">
                <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900 flex items-center">
                  <ShieldAlert className="w-7 h-7 mr-3 text-red-600" />
                  Phase 1: Immediate Emergency Response (0 - 1 Hour)
                </h2>
                <p>The primary goal during the first hour is to stop the intrusion of water (if possible) and eliminate immediate physical hazards. Do not attempt to save belongings if doing so puts you in danger.</p>
                
                <ul className="list-disc pl-5 space-y-4 text-sm text-slate-700 font-normal">
                  <li><strong>Ensure Electrical Safety:</strong> Never step into standing water if electrical outlets, appliances, or extension cords are submerged. Locate your main breaker box and shut off power to the affected areas.</li>
                  <li><strong>Stop the Source:</strong> If the flooding is from internal plumbing (a burst pipe, overflowing toilet, or broken appliance hose), immediately shut off the main water valve to the house.</li>
                  <li><strong>Evacuate if Necessary:</strong> If the water is a Category 3 biohazard (raw sewage backup) or if you smell gas (which can happen if a furnace is compromised), evacuate the premises immediately and call 911 or the utility company.</li>
                  <li><strong>Call for Professional Dispatch:</strong> Once safe, immediately call an <Link href="/services/emergency-water-extraction" className="text-sky-600 font-semibold hover:underline">Emergency Water Extraction Chicago</Link> company. A 60-minute dispatch is crucial to begin mitigation before mold colonization starts.</li>
                </ul>
              </section>

              <section id="documentation-insurance">
                <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900 flex items-center">
                  <Camera className="w-7 h-7 mr-3 text-amber-600" />
                  Phase 2: Documentation & Insurance (1 - 3 Hours)
                </h2>
                <p>Before any cleanup begins, you must freeze the scene for your insurance company. The burden of proof for the extent of the damage lies with the homeowner.</p>
                <p>Thorough documentation ensures you receive a fair and comprehensive settlement.</p>
                
                <ul className="list-disc pl-5 space-y-4 text-sm text-slate-700 font-normal">
                  <li><strong>Photograph Everything:</strong> Take wide-angle photos of all flooded rooms, showing the height of the water and the extent of the spread.</li>
                  <li><strong>Video the Source:</strong> Record a video of the active leak or the broken pipe/appliance to unequivocally prove the cause of loss.</li>
                  <li><strong>Document Personal Property:</strong> Photograph ruined furniture, electronics, and valuables in their flooded state. Do not move them into the yard or throw them away yet.</li>
                  <li><strong>Contact Your Agent:</strong> Call your insurance agent to report the claim. Provide your policy number, state the cause of the damage, and request a claim number. Ask specifically if you have coverage for "Sump Failure/Sewage Backup" if applicable.</li>
                  <li><strong>Locate Important Documents:</strong> Retrieve physical copies of your insurance policy and any warranties for recently purchased appliances or plumbing fixtures that failed.</li>
                </ul>
              </section>

              <section id="mitigation-extraction">
                <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900 flex items-center">
                  <Droplets className="w-7 h-7 mr-3 text-sky-600" />
                  Phase 3: Mitigation & Extraction (Day 1)
                </h2>
                <p>This phase is heavily reliant on the professional restoration team you hired. Their job is to stop the damage from spreading further and remove the bulk of the liquid.</p>
                <p>Mitigation is about triage; saving what can be saved and safely disposing of what is ruined.</p>
                
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl my-6">
                  <h4 className="text-base font-bold text-slate-900 mb-4">Contractor Action Items:</h4>
                  <ul className="list-none space-y-3 m-0 p-0 text-sm text-slate-700">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" /> Execute heavy water extraction using truck-mounted vacuums.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" /> Perform a "pack-out" by moving salvageable dry furniture to a safe location.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" /> Remove heavily saturated, unsalvageable porous materials (carpet padding, warped laminate).</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" /> Apply EPA-registered antimicrobial treatments to prevent mold and bacterial growth.</li>
                  </ul>
                </div>
              </section>

              <section id="structural-drying">
                <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900 flex items-center">
                  <Droplets className="w-7 h-7 mr-3 text-sky-600" />
                  Phase 4: Structural Drying & Monitoring (Days 2 - 5)
                </h2>
                <p>Even though the visible standing water is gone, the structural materials of your home (drywall, wood studs, concrete) are still holding massive amounts of moisture.</p>
                <p>The drying phase requires precise environmental control using industrial equipment.</p>
                
                <ul className="list-disc pl-5 space-y-4 text-sm text-slate-700 font-normal">
                  <li><strong>Equipment Setup:</strong> The team will place LGR dehumidifiers and high-velocity air movers in a calculated configuration to pull moisture out of walls and floors.</li>
                  <li><strong>Do Not Touch the Equipment:</strong> Under no circumstances should you turn off, move, or open windows near the drying equipment. Doing so will drastically alter the psychrometric environment and extend the drying time.</li>
                  <li><strong>Daily Moisture Readings:</strong> Expect the technicians to return daily to take readings with moisture meters and thermal imaging cameras. They will adjust equipment as necessary.</li>
                  <li><strong>Demolition (Flood Cuts):</strong> If the walls are not drying fast enough, technicians may need to make "flood cuts" (removing the bottom 2 feet of drywall) to access and dry the wall cavities.</li>
                  <li><strong>Final Dry Standard:</strong> The phase ends when the moisture meters confirm that the affected materials have returned to their normal, pre-loss dry standard.</li>
                </ul>
              </section>

              <section id="reconstruction-phase">
                <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900 flex items-center">
                  <HardHat className="w-7 h-7 mr-3 text-slate-700" />
                  Phase 5: Reconstruction & Build-Back (Weeks 2 - 4+)
                </h2>
                <p>Once the mitigation team signs off that the property is completely dry, the rebuild phase can begin. This is often handled by a separate division of the restoration company or a general contractor.</p>
                <p>This phase is essentially a standard remodeling project to put your home back together.</p>
                
                <ul className="list-disc pl-5 space-y-4 text-sm text-slate-700 font-normal">
                  <li><strong>Review the Xactimate Estimate:</strong> Go over the itemized rebuild estimate with your contractor and insurance adjuster. Ensure all materials (baseboards, drywall, paint, flooring) are accounted for.</li>
                  <li><strong>Select Materials:</strong> Choose your replacement flooring, paint colors, and fixtures. This is an opportunity to upgrade if you are willing to pay the difference above the insurance settlement.</li>
                  <li><strong>Drywall and Painting:</strong> The crew will install new drywall, tape, mud, sand, and paint the walls to match the existing decor.</li>
                  <li><strong>Flooring Installation:</strong> The final step is laying down the new carpet, hardwood, or tile, followed by installing baseboards and trim.</li>
                  <li><strong>Final Walkthrough:</strong> Conduct a meticulous walkthrough with the project manager to ensure the workmanship meets your standards before signing the final certificate of completion.</li>
                </ul>
              </section>

              <section id="prevention-upgrades">
                <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900 flex items-center">
                  <ShieldCheck className="w-7 h-7 mr-3 text-emerald-600" />
                  Phase 6: Future Prevention Upgrades
                </h2>
                <p>After enduring the stress of a major water damage event, the final phase is ensuring it never happens again. Investigate the root cause of the flood and implement permanent preventative measures.</p>
                
                {/* UPGRADES CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
                    <h4 className="font-bold text-emerald-950 text-base mb-1">Smart Water Shut-off</h4>
                    <p className="text-sm text-slate-700 m-0">Install a smart valve (like Moen Flo) on the main water line that automatically detects unusual flow and shuts off the water before a pipe burst causes major damage.</p>
                  </div>
                  <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
                    <h4 className="font-bold text-emerald-950 text-base mb-1">Battery Backup Sump Pump</h4>
                    <p className="text-sm text-slate-700 m-0">Ensure your basement sump system has a robust secondary DC pump and an active alarm system that alerts your phone if the primary pump fails.</p>
                  </div>
                  <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
                    <h4 className="font-bold text-emerald-950 text-base mb-1">Steel-Braided Hoses</h4>
                    <p className="text-sm text-slate-700 m-0">Replace all cheap rubber supply lines on washing machines, dishwashers, and ice makers with high-pressure steel-braided hoses.</p>
                  </div>
                  <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
                    <h4 className="font-bold text-emerald-950 text-base mb-1">Insurance Policy Review</h4>
                    <p className="text-sm text-slate-700 m-0">Review your coverage with your agent. Add a "Water Backup and Sump Overflow" rider if you don't have one, ensuring $10k+ in coverage for municipal backups.</p>
                  </div>
                </div>
              </section>

              <div className="mt-10 border-t border-slate-200 pt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Stay Organized, Stay Calm</h3>
                <p>Water damage is a complex, multi-week ordeal, but by following this checklist, you take back control of the situation. From the chaotic first hour to the final coat of paint, knowing what to expect allows you to hold contractors accountable and communicate effectively with your insurance company.</p>
                <p>Keep this checklist handy, and remember that professional help is just a phone call away.</p>
              </div>

            </div>
            <div className="pt-6"><ContactForm title="Need Immediate Help with Your Checklist?" subtitle="Our experts are ready to guide you through every phase of the restoration process." /></div>
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
