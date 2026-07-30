import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowLeft, CheckCircle2, AlertTriangle, Clock, ShieldAlert, AlertCircle, Camera, FileText, Activity } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'Emergency Water Damage Restoration in Chicago: What to Do in the First 24 Hours',
  description: 'A critical hour-by-hour guide on what to do during the first 24 hours of water damage in your Chicago home to prevent structural damage and mold.',
  alternates: { canonical: `${siteConfig.url}/blog/first-24-hours-after-water-damage` },
};

export default function BlogPageName() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'First 24 Hours After Water Damage', url: '/blog/first-24-hours-after-water-damage' },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Emergency Water Damage Restoration in Chicago: What to Do in the First 24 Hours',
    'author': { '@type': 'Organization', 'name': siteConfig.name },
    'publisher': { '@type': 'Organization', 'name': siteConfig.name },
    'datePublished': '2026-07-30',
  };

  const tocItems = [
    { id: 'timeline-summary-table', title: 'First 24 Hours Action Matrix' },
    { id: 'why-24-hours-critical', title: 'Why the First 24 Hours Are Critical' },
    { id: 'hour-by-hour-plan', title: 'Hour-by-Hour Action Plan' },
    { id: 'what-not-to-do', title: 'What NOT to Do After a Flood' },
    { id: 'professional-assessment', title: 'How Professionals Assess Damage' },
    { id: 'insurance-documentation', title: 'Documentation Tips for Insurance' },
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
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Emergency Water Damage Restoration in Chicago: What to Do in the First 24 Hours</h1>
              
              <p>Discovering your Chicago home submerged in water can induce immediate panic. Whether you have returned from work to find a burst pipe spewing water into your living room, or a massive spring storm has overwhelmed your basement, the shock of a flooding emergency is profoundly stressful.</p>
              
              <p>In these chaotic moments, the actions you take—and just as importantly, the actions you avoid—will drastically alter the outcome of the disaster. Securing proper <Link href="/" className="text-sky-600 font-semibold hover:underline">Emergency Flood Cleanup Chicago</Link> must happen rapidly to preserve your property.</p>
              
              <p>Water is relentlessly destructive. It does not simply sit on the surface; it actively wicks up drywall, saturates insulation, delaminates flooring, and begins compromising structural wood framing almost instantly. Time is your absolute biggest enemy.</p>
              
              <p>Every passing minute allows moisture to penetrate deeper into building materials, driving up the overall cost of restoration and significantly increasing the likelihood of hazardous microbial growth. This guide breaks down the critical first 24 hours of water damage mitigation, offering Chicago homeowners a clear, actionable checklist to minimize destruction and ensure personal safety.</p>

              {/* TIMELINE SUMMARY TABLE */}
              <section id="timeline-summary-table">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">First 24 Hours Response Timeline Matrix</h2>
                <div className="overflow-x-auto my-8 rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm text-slate-700">
                    <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">Timeframe</th>
                        <th className="py-3.5 px-4 font-semibold">Phase Focus</th>
                        <th className="py-3.5 px-4 font-semibold">Homeowner Action</th>
                        <th className="py-3.5 px-4 font-semibold">Professional Action</th>
                        <th className="py-3.5 px-4 font-semibold">Risk Level</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-sky-900">0 - 15 Mins</td>
                        <td className="py-3 px-4 font-semibold">Safety & Containment</td>
                        <td className="py-3 px-4">Shut main power & water valve</td>
                        <td className="py-3 px-4">Emergency dispatch call received</td>
                        <td className="py-3 px-4 font-bold text-red-600">Critical (Safety)</td>
                      </tr>
                      <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                        <td className="py-3 px-4 font-bold text-sky-900">15 - 60 Mins</td>
                        <td className="py-3 px-4 font-semibold">Documentation</td>
                        <td className="py-3 px-4">Take photos/videos of all damage</td>
                        <td className="py-3 px-4">En route (60-min arrival guarantee)</td>
                        <td className="py-3 px-4 font-bold text-amber-600">High (Evidence)</td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-sky-900">1 - 6 Hours</td>
                        <td className="py-3 px-4 font-semibold">Water Extraction</td>
                        <td className="py-3 px-4">Move dry belongings to safety</td>
                        <td className="py-3 px-4">Truck-mounted heavy water extraction</td>
                        <td className="py-3 px-4 font-bold text-amber-600">High (Saturation)</td>
                      </tr>
                      <tr className="bg-slate-50 hover:bg-slate-100 transition-colors">
                        <td className="py-3 px-4 font-bold text-sky-900">6 - 24 Hours</td>
                        <td className="py-3 px-4 font-semibold">Structural Drying</td>
                        <td className="py-3 px-4">Avoid disturbing drying equipment</td>
                        <td className="py-3 px-4">Deploy LGR dehumidifiers & air movers</td>
                        <td className="py-3 px-4 font-bold text-emerald-600">Active Control</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="why-24-hours-critical">
                <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900">Why the First 24 Hours Are Absolutely Critical</h2>
                <p>The window between the initial water intrusion and the 24-hour mark is universally recognized by restoration experts as the "golden period." This is the timeframe where rapid intervention can save drywall, carpets, and hardwood floors before they are ruined beyond repair.</p>
                <p>Once structural materials exceed their saturation thresholds, the molecular bonds holding them together break down. Drywall turns into mush, engineered hardwood warps and buckles, and pressed wood furniture swells permanently.</p>
                <p>Even more pressing is the biological clock ticking in the background. Mold spores are naturally present in every Chicago home, floating harmlessly in the air. However, these spores only need three things to thrive: a food source (like paper-faced drywall or wood), optimal temperatures (typical indoor heating), and moisture.</p>
                <p>In as little as 24 to 48 hours after a water event, mold spores can germinate and begin to colonize. Once mold establishes a foothold, what was initially a simple <Link href="/services/water-damage-restoration" className="text-sky-600 font-semibold hover:underline">Water Damage Restoration Services Chicago</Link> job transforms into a complex, expensive biohazard remediation project.</p>
                
                {/* HIGHLIGHT CALLOUT: The Biological Clock */}
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-2xl my-6">
                  <h4 className="text-base font-bold text-amber-900 flex items-center mb-2">
                    <Activity className="w-5 h-5 mr-2 text-amber-600" />
                    The Water Damage Progression Clock
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                    <li><strong>Within 1 Hour:</strong> Water spreads quickly, drywall absorbs moisture up to 12-24 inches high, furniture stains carpet.</li>
                    <li><strong>24 Hours:</strong> Drywall swells and breaks down; wooden floorboards cup; metal surfaces tarnish.</li>
                    <li><strong>48 Hours:</strong> Mold spores germinate; bacterial growth accelerates in Category 2 & 3 water; wood doors swell shut.</li>
                    <li><strong>7 Days:</strong> Severe structural weakness; massive mold contamination; full replacement mandatory.</li>
                  </ul>
                </div>
              </section>

              <section id="hour-by-hour-plan">
                <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900">The Hour-by-Hour Action Plan</h2>
                
                {/* 0-15 MINS */}
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl my-6">
                  <h3 className="text-2xl font-semibold mb-3 flex items-center text-red-950">
                    <Clock className="w-6 h-6 mr-2 text-red-600"/> 0-15 Minutes: Immediate Safety and Containment
                  </h3>
                  <p className="mb-3 text-slate-700">Your paramount concern in the first few minutes is human safety. Water and electricity are a deadly combination. Do not wade into flooded rooms, especially basements, if the water has reached electrical outlets or if appliances are submerged.</p>
                  <p className="mb-3 text-slate-700">Locate your home's main electrical panel and completely shut off the power to the affected areas. If you cannot reach the panel safely, evacuate the home and call an electrician or the utility company.</p>
                  <p className="text-slate-700">Once the electricity is neutralized, your next task is to stop the source of the water. If a pipe has burst or an appliance has failed, locate the main water shut-off valve for the house (usually located in the basement near the front wall or in a utility closet) and turn it clockwise to cut the supply. If the flooding is due to a natural weather event or sewer backup, you cannot stop the flow yourself, so you must retreat to a safe area.</p>
                </div>

                {/* 15-60 MINS */}
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-2xl my-6">
                  <h3 className="text-2xl font-semibold mb-3 flex items-center text-amber-950">
                    <Camera className="w-6 h-6 mr-2 text-amber-600"/> 15-60 Minutes: Documentation and Professional Dispatch
                  </h3>
                  <p className="mb-3 text-slate-700">Once the immediate physical danger is mitigated and the water source is secured, do not start cleaning yet. Take out your smartphone and thoroughly document the damage.</p>
                  <p className="mb-3 text-slate-700">Take wide-angle photos of every affected room to show the scale of the flooding, and close-up videos of the specific water source (e.g., the ruptured pipe). Photograph ruined belongings, electronics, and furniture in their original, water-logged positions. This evidence is crucial for your insurance claim.</p>
                  <p className="text-slate-700">Immediately after documenting the scene, call a 24/7 emergency water damage restoration company. Waiting until morning is not an option. Professional restoration teams have rapid dispatch protocols and can arrive at your Chicago property within an hour, bringing industrial-grade extraction equipment that is exponentially more effective than a wet/dry shop vacuum.</p>
                </div>

                {/* 1-6 HOURS */}
                <div className="bg-sky-50 border-l-4 border-sky-600 p-6 rounded-r-2xl my-6">
                  <h3 className="text-2xl font-semibold mb-3 flex items-center text-sky-950">
                    <Clock className="w-6 h-6 mr-2 text-sky-600"/> 1 to 6 Hours: Professional Extraction Begins
                  </h3>
                  <p className="mb-3 text-slate-700">When the restoration crew arrives, they will take over the heavy lifting. The priority during this phase is aggressive water extraction. Using truck-mounted vacuums and specialized weighted extraction wands, the team will pull hundreds of gallons of standing water from carpets, padding, and hard floors.</p>
                  <p className="text-slate-700">Removing liquid water rapidly is infinitely more efficient than trying to evaporate it later. During this time, workers may also perform a "pack-out," carefully moving your dry furniture, rugs, and valuable items away from the moisture source to prevent secondary damage.</p>
                </div>

                {/* 6-24 HOURS */}
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl my-6">
                  <h3 className="text-2xl font-semibold mb-3 flex items-center text-emerald-950">
                    <Clock className="w-6 h-6 mr-2 text-emerald-600"/> 6 to 24 Hours: Structural Drying Setup
                  </h3>
                  <p className="mb-3 text-slate-700">Once the standing water is removed, the environment will still be intensely humid, and building materials will remain saturated. The restoration technicians will deploy a calculated array of high-velocity air movers and low-grain refrigerant (LGR) dehumidifiers.</p>
                  <p className="text-slate-700">The air movers are strategically angled to sweep moisture off the surfaces of walls and floors into the air, while the dehumidifiers draw that moisture out of the air and pump it down a drain. The team may also apply EPA-registered antimicrobials to prevent any mold spores from taking advantage of the damp conditions during the drying process.</p>
                </div>
              </section>

              {/* WHAT NOT TO DO SECTION WITH CARDS */}
              <section id="what-not-to-do">
                <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900">What NOT to Do After a Flood</h2>
                <p>In the panic of a flood, well-meaning homeowners often take actions that inadvertently cause more harm. It is critical to know what behaviors to avoid to ensure your safety and protect the integrity of your property.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 text-base mb-2 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600 flex-shrink-0" />
                      Do NOT use household vacuums
                    </h4>
                    <p className="text-sm text-slate-700 m-0">Standard vacuums are not designed for water and pose a severe electrocution risk. They will also be destroyed instantly.</p>
                  </div>
                  
                  <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200">
                    <h4 className="font-bold text-amber-900 text-base mb-2 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-amber-600 flex-shrink-0" />
                      Do NOT rely on ceiling fans
                    </h4>
                    <p className="text-sm text-slate-700 m-0">Standard household fans simply blow wet air around, which can push moisture into previously dry rooms, leading to secondary mold growth.</p>
                  </div>

                  <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                    <h4 className="font-bold text-red-900 text-base mb-2 flex items-center">
                      <ShieldAlert className="w-5 h-5 mr-2 text-red-600 flex-shrink-0" />
                      Do NOT enter Category 3 "Black Water"
                    </h4>
                    <p className="text-sm text-slate-700 m-0">If the flooding is caused by a sewer backup or rising river water, it is highly contaminated with bacteria, viruses, and raw sewage. Never walk through it without full personal protective equipment (PPE).</p>
                  </div>

                  <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200">
                    <h4 className="font-bold text-amber-900 text-base mb-2 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-amber-600 flex-shrink-0" />
                      Do NOT drastically turn up heat
                    </h4>
                    <p className="text-sm text-slate-700 m-0">While heat aids evaporation, turning your furnace up to 85°F without proper commercial dehumidification will turn your home into a tropical greenhouse, massively accelerating mold growth.</p>
                  </div>
                </div>
              </section>

              <section id="professional-assessment">
                <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900">How Professionals Assess Damage Severity</h2>
                <p>When expert restorers walk into your Chicago home, they don't just rely on their eyes. They use specialized diagnostic tools to map the exact migration of the water. Using infrared thermal imaging cameras, technicians can "see" cold spots behind drywall and under hardwood floors, pinpointing hidden moisture pockets that would otherwise go unnoticed until mold appeared.</p>
                <p>They also use penetrating and non-penetrating moisture meters to measure the exact moisture content of wood and drywall, comparing these readings to a "dry standard" from an unaffected area of your home.</p>
                <p>Based on these diagnostics, they will categorize the water (Category 1: Clean, Category 2: Gray, Category 3: Black) and classify the extent of the damage (Class 1 to 4).</p>
                <p>This rigorous, data-driven assessment dictates exactly how much equipment is needed, whether materials like carpet padding need to be demolished, and how long the drying process will take.</p>
                
                {/* DIAGNOSTICS TABLE */}
                <div className="overflow-x-auto my-8 rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm text-slate-700">
                    <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">Diagnostic Tool</th>
                        <th className="py-3.5 px-4 font-semibold">Technology Type</th>
                        <th className="py-3.5 px-4 font-semibold">What It Detects</th>
                        <th className="py-3.5 px-4 font-semibold">Why It Matters</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Infrared FLIR Camera</td>
                        <td className="py-3 px-4">Thermal Imaging</td>
                        <td className="py-3 px-4">Temperature differentials behind walls</td>
                        <td className="py-3 px-4">Finds hidden water pockets without tearing down drywall</td>
                      </tr>
                      <tr className="bg-slate-50 hover:bg-slate-100">
                        <td className="py-3 px-4 font-bold text-slate-900">Penetrating Moisture Meter</td>
                        <td className="py-3 px-4">Electrical Resistance Pins</td>
                        <td className="py-3 px-4">Exact moisture % deep inside wood & subfloors</td>
                        <td className="py-3 px-4">Determines if wood studs meet IICRC dry standard (&lt;15%)</td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Non-Invasive Moisture Scanner</td>
                        <td className="py-3 px-4">Radio Frequency Sensors</td>
                        <td className="py-3 px-4">Surface & sub-surface dampness on tile/hardwood</td>
                        <td className="py-3 px-4">Scans large floor areas quickly without scratching finishes</td>
                      </tr>
                      <tr className="bg-slate-50 hover:bg-slate-100">
                        <td className="py-3 px-4 font-bold text-slate-900">Thermo-Hygrometer</td>
                        <td className="py-3 px-4">Psychrometric Air Sensor</td>
                        <td className="py-3 px-4">Relative Humidity (RH) & Dew Point</td>
                        <td className="py-3 px-4">Calculates exact dehumidifier capacity needed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="insurance-documentation">
                <h2 className="text-3xl font-bold mt-10 mb-4 text-slate-900">Documentation Tips for Your Insurance Claim</h2>
                <p>Navigating an insurance claim is often one of the most frustrating parts of a water damage event. Thorough documentation is your best leverage. Do not throw away any ruined items (like saturated carpet or broken pipes) until the insurance adjuster has seen them or explicitly given you permission.</p>
                <p>Create an itemized inventory of damaged contents, including the brand, approximate age, and replacement cost.</p>
                <p>Work with a restoration company that utilizes Xactimate, the industry-standard estimating software used by 90% of insurance carriers. A professional firm will communicate directly with your adjuster, providing daily moisture logs, psychrometric readings, and detailed equipment usage reports.</p>
                <p>This seamless documentation proves that the mitigation was necessary and executed correctly, ensuring a smoother and more comprehensive payout for your claim.</p>
                
                {/* INSURANCE CHECKLIST BOX */}
                <div className="bg-sky-50 border-l-4 border-sky-600 p-6 rounded-r-2xl my-6 shadow-sm">
                  <h4 className="text-base font-bold text-sky-950 flex items-center mb-2">
                    <FileText className="w-5 h-5 mr-2 text-sky-600" />
                    Essential Insurance Proof Checklist
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 font-normal">
                    <li>30+ wide & close-up photos of flooded areas & broken pipes</li>
                    <li>Serial numbers & photos of ruined appliances or electronics</li>
                    <li>Xactimate itemized estimate provided by your certified restoration team</li>
                    <li>Daily moisture logs proving drying progress to standard levels</li>
                  </ul>
                </div>
              </section>

              <div className="mt-10 border-t border-slate-200 pt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Act Quickly, Recover Fully</h3>
                <p>The first 24 hours define the trajectory of your home's recovery. By prioritizing safety, acting swiftly to stop the water, and enlisting professional help immediately, you can protect your Chicago property from permanent structural decay and toxic mold.</p>
                <p>Keep emergency contact numbers readily accessible, and remember that when water invades, hesitation is your greatest liability.</p>
              </div>

            </div>
            <div className="pt-6"><ContactForm title="24/7 Rapid Response Team" subtitle="Don't wait. Call now to dispatch our emergency extraction crew to your Chicago home." /></div>
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
