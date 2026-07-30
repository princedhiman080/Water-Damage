import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, Clock, FileCheck, DollarSign, Camera } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'How to File a Water Damage Insurance Claim in Chicago',
  description: 'A comprehensive step-by-step guide on how to successfully file and negotiate a water damage insurance claim for your Chicago property.',
  alternates: { canonical: `${siteConfig.url}/blog/how-to-file-water-damage-insurance-claim-chicago` },
};

export default function FileInsuranceClaimChicago() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'How to File a Claim', url: '/blog/how-to-file-water-damage-insurance-claim-chicago' }
  ]);

  const tocItems = [
    { id: 'step-1-report', title: 'Step 1: Report the Claim Immediately' },
    { id: 'step-2-mitigate', title: 'Step 2: Stop Further Damage (Duty to Mitigate)' },
    { id: 'step-3-document', title: 'Step 3: Document Everything Rigorously' },
    { id: 'step-4-adjuster', title: 'Step 4: Public vs Company Adjuster' },
    { id: 'step-5-xactimate', title: 'Step 5: Obtain an Xactimate Estimate' },
    { id: 'step-6-negotiate', title: 'Step 6: Negotiate and Recover Depreciation' },
    { id: 'claims-roadmap-table', title: 'Step-by-Step Claims Action Summary' }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
      <div className="max-w-7xl mx-auto space-y-6">
        <Link href="/blog" className="inline-flex items-center text-xs font-bold text-sky-600 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />Back to All Articles
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
              How to File a Water Damage Insurance Claim in Chicago
            </h1>
            
            <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8 border border-slate-200 shadow-md">
              <Image 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80" 
                alt="Filing an insurance claim paperwork" 
                fill 
                className="object-cover"
              />
            </div>

            <div className="prose prose-slate max-w-none space-y-8 text-base leading-relaxed text-slate-700">
              <p className="text-lg text-slate-700 leading-relaxed font-normal">
                Filing an insurance claim after a major property disaster can feel like navigating a maze blindfolded. When a frozen pipe shatters your ceiling or a rogue storm backs up the city sewers into your living space, the financial anxiety can be just as overwhelming as the physical damage. 
              </p>
              <p className="text-lg text-slate-700 leading-relaxed font-normal">
                For Chicago homeowners seeking <Link href="/" className="text-sky-600 font-semibold hover:underline">Emergency Water Damage Restoration Chicago</Link>, understanding exactly how to file, document, and negotiate a claim is the key to minimizing out-of-pocket expenses and securing the funds needed to rebuild your home correctly.
              </p>

              {/* Callout Box: Golden Rule */}
              <div className="bg-sky-50 border-l-4 border-sky-600 p-6 rounded-r-2xl my-6 shadow-sm">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-6 h-6 text-sky-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sky-900 text-lg mb-1">Crucial First Principle</h4>
                    <p className="text-sky-800 text-sm leading-relaxed">
                      You do <strong>NOT</strong> have to wait for an insurance adjuster to visit before starting emergency water mitigation. In fact, waiting can lead to claim denial under your policy's "Duty to Mitigate" clause. Call a certified restoration team immediately.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6-Step Visual Workflow Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-sm">1</span>
                    <h4 className="font-bold text-slate-900 text-base">Report Immediately</h4>
                  </div>
                  <p className="text-xs text-slate-600">Notify agent/carrier within 24–48 hrs. Obtain claim # and assigned adjuster info.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-sm">2</span>
                    <h4 className="font-bold text-slate-900 text-base">Mitigate Emergency</h4>
                  </div>
                  <p className="text-xs text-slate-600">Stop water source & hire certified water extractors to prevent mold growth.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-sm">3</span>
                    <h4 className="font-bold text-slate-900 text-base">Document Everything</h4>
                  </div>
                  <p className="text-xs text-slate-600">Take 100+ photos/videos before disposal. Keep receipts for ALE out-of-pocket costs.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-sm">4</span>
                    <h4 className="font-bold text-slate-900 text-base">Xactimate Estimate</h4>
                  </div>
                  <p className="text-xs text-slate-600">Ensure contractor provides Xactimate itemized scope matching insurance software.</p>
                </div>
              </div>
              
              <h2 id="step-1-report" className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step 1: Report the Claim Immediately
              </h2>
              <p>
                Time is your worst enemy in a water damage scenario. The very first step, after ensuring the physical safety of your family and turning off the main water valve, is to contact your insurance agent or carrier's 24-hour claims department. 
              </p>
              <p>
                Most Illinois homeowner policies have strict requirements regarding the reporting timeline, often mandating that sudden and accidental water damage be reported within 24 to 48 hours of discovery.
              </p>
              <p>
                When you make this initial call, be factual and concise. State clearly what happened, when you discovered it, and what immediate actions you have taken to stop the flow of water. 
              </p>
              <p>
                Make sure to get your claim number, the name of the adjuster assigned to your case, and their direct contact information. This claim number will be the vital reference code used by your restoration contractor for all subsequent billing and communication.
              </p>

              <h2 id="step-2-mitigate" className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step 2: Stop Further Damage (Duty to Mitigate)
              </h2>
              <p>
                A common and dangerous misconception is that you must leave the damage untouched until the insurance adjuster arrives to inspect it. This is entirely false and can actually lead to your claim being denied. 
              </p>
              <p>
                Your policy contains a clause explicitly requiring you to "mitigate" or minimize further damage. If you let standing water sit for five days waiting for an adjuster, the resulting mold growth and severe structural rot may be deemed your fault due to negligence.
              </p>
              <p>
                You have the absolute right to hire a certified restoration company immediately to begin emergency water extraction and structural drying. The restoration company will stabilize the environment, prevent secondary damage, and keep the property safe. 
              </p>
              <p>
                The insurance company expects you to take this action and will cover reasonable mitigation costs as part of the overall claim.
              </p>

              {/* Duty to Mitigate Warning */}
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl my-6 shadow-sm">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-900 text-lg mb-1">Contractual Warning: Duty to Mitigate</h4>
                    <p className="text-red-800 text-sm leading-relaxed">
                      Failure to take prompt steps to extract water and dry structural elements within 24-48 hours gives insurance adjusters valid legal grounds to deny coverage for secondary mold remediation and structural framing repairs.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="step-3-document" className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step 3: Document Everything Rigorously
              </h2>
              <p>
                Before the restoration team begins tearing out wet drywall or disposing of ruined carpets, documentation is critical. In the insurance world, if you can't prove it, it didn't happen. 
              </p>
              <p>
                Take dozens, if not hundreds, of high-resolution photos and videos of the damage before any cleanup begins. Capture wide angles of the affected rooms and extreme close-ups of damaged valuable items.
              </p>
              <p>
                Create a detailed written inventory of every single item of personal property that was damaged. Do not throw anything away until the adjuster has explicitly given you permission to do so. 
              </p>
              <p>
                If you have saturated rugs or ruined furniture that must be removed for health reasons, have your restoration contractor move them to the garage or a dry spot outside so the adjuster can physically verify them later. Keep all receipts for any emergency expenses, such as hotel stays if the home is uninhabitable, as these may be reimbursable under your Additional Living Expenses (ALE) coverage.
              </p>

              {/* Documentation Checklist Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6">
                <h4 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-sky-600" />
                  Essential Documentation Checklist
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span><strong>Wide-Angle & Close-up Photography:</strong> Capture room water lines on walls and individual damaged items.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span><strong>Serial & Model Numbers:</strong> Record serial numbers of water-damaged electronics and appliances.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span><strong>ALE Expense Receipts:</strong> Save food, hotel, and laundromat receipts if displaced from home.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span><strong>Emergency Contractor Invoices:</strong> Retain initial extraction and board-up work orders.</span>
                  </li>
                </ul>
              </div>

              <h2 id="step-4-adjuster" className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step 4: Public vs Company Adjuster
              </h2>
              <p>
                Within a few days, an adjuster from your insurance company will visit to inspect the damage. It is vital to remember that this company adjuster works for the insurance carrier, not for you. 
              </p>
              <p>
                Their job is to assess the damage according to the policy guidelines and protect the financial interests of the insurer.
              </p>
              <p>
                If you have suffered a massive, complex loss (such as a fire or a multi-story flood requiring hundreds of thousands of dollars in repairs), you might consider hiring a Public Adjuster. A Public Adjuster is licensed by the state of Illinois to represent the policyholder exclusively. 
              </p>
              <p>
                They will handle all negotiations, paperwork, and estimates on your behalf. However, they take a percentage of the final settlement (typically 10%), so they are generally only recommended for very large or highly disputed claims. For standard claims, a competent, insurance-savvy restoration contractor can usually provide all the necessary technical documentation to justify a fair settlement without the need to sacrifice 10% of your payout.
              </p>

              {/* Callout Box: Adjuster Roles */}
              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-2xl my-6 shadow-sm">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-amber-900 text-lg mb-1">Adjuster Role Clarification</h4>
                    <p className="text-amber-800 text-sm leading-relaxed">
                      <strong>Company Adjusters</strong> protect insurance carrier budgets. <strong>Public Adjusters</strong> represent you for a ~10% fee. An <strong>Insurance-Savvy Restoration Contractor</strong> works directly with your adjuster to ensure proper Xactimate line-item coverage without taking a cut of your claim.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="step-5-xactimate" className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step 5: Obtain an Xactimate Estimate
              </h2>
              <p>
                The insurance adjuster will write a detailed estimate outlining exactly how much the carrier is willing to pay for the repairs. To ensure this estimate is accurate and fair, you must have your own certified restoration contractor generate a competing estimate. 
              </p>
              <p>
                It is crucial that your contractor uses Xactimate, the same pricing software used by the insurance industry.
              </p>
              <p>
                When your contractor submits a detailed Xactimate scope of work—complete with thermal imaging reports, daily moisture logs, and line-item breakdowns for Chicago-specific labor rates—it forces the adjuster to negotiate based on objective industry standards rather than arbitrary lowball figures. 
              </p>
              <p>
                A contractor experienced with insurance claims will go line-by-line with the adjuster to resolve any discrepancies before reconstruction begins.
              </p>

              <h2 id="step-6-negotiate" className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step 6: Negotiate and Recover Depreciation
              </h2>
              <p>
                The initial check you receive from the insurance company will likely be for the Actual Cash Value (ACV) of the damages. ACV means the adjuster has deducted depreciation based on the age and wear-and-tear of your materials. 
              </p>
              <p>
                For example, if your 10-year-old hardwood floor was ruined, they won't initially pay you for a brand-new floor; they pay you what a 10-year-old floor is worth.
              </p>
              <p>
                However, most modern policies are Replacement Cost Value (RCV) policies. Under an RCV policy, you can recover that withheld depreciation money. Once the repair work is actually completed and you submit the final invoices proving you spent the money to replace the damaged items, the insurance company will release the depreciation check, making you whole. 
              </p>
              <p>
                Working with a dedicated restoration company simplifies this entire process, turning a complex bureaucratic nightmare into a streamlined path to a fully restored home.
              </p>

              {/* RCV vs ACV Callout Box */}
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl my-6 shadow-sm">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-emerald-900 text-lg mb-1">Unlocking Withheld Depreciation (RCV)</h4>
                    <p className="text-emerald-800 text-sm leading-relaxed">
                      Do not worry if your initial insurance check seems low! The difference between Actual Cash Value (ACV) and Replacement Cost Value (RCV) is held back as "Recoverable Depreciation" and is disbursed as soon as your contractor submits completion certificates.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="claims-roadmap-table" className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step-by-Step Claims Action Summary
              </h2>

              {/* Styled Claims Action Table */}
              <div className="overflow-x-auto my-8 rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-sm text-slate-700 border-collapse">
                  <thead className="bg-slate-900 text-white font-semibold">
                    <tr>
                      <th className="px-5 py-4 border-b border-slate-800">Claim Phase</th>
                      <th className="px-5 py-4 border-b border-slate-800">Timeframe</th>
                      <th className="px-5 py-4 border-b border-slate-800">Primary Objective</th>
                      <th className="px-5 py-4 border-b border-slate-800">Key Documentation Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900 bg-slate-50/50">1. Emergency Response</td>
                      <td className="px-5 py-4 text-slate-600">Hours 0 – 24</td>
                      <td className="px-5 py-4 text-slate-700 font-medium">Shut off water main, notify carrier, dispatch restoration team</td>
                      <td className="px-5 py-4 text-slate-600">Claim reference #, call log timestamps</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900 bg-slate-50/50">2. Water Extraction & Drying</td>
                      <td className="px-5 py-4 text-slate-600">Days 1 – 4</td>
                      <td className="px-5 py-4 text-slate-700 font-medium">Extract bulk water, set up LGR dehumidifiers, prevent mold</td>
                      <td className="px-5 py-4 text-slate-600">Thermal imaging scans, psychrometric moisture logs</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900 bg-slate-50/50">3. Scope & Estimation</td>
                      <td className="px-5 py-4 text-slate-600">Days 3 – 7</td>
                      <td className="px-5 py-4 text-slate-700 font-medium">Generate contractor Xactimate report, walk property with adjuster</td>
                      <td className="px-5 py-4 text-slate-600">Itemized Xactimate line-item scope, photo log</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900 bg-slate-50/50">4. ACV Settlement Check</td>
                      <td className="px-5 py-4 text-slate-600">Days 7 – 14</td>
                      <td className="px-5 py-4 text-slate-700 font-medium">Receive initial Actual Cash Value check from insurer</td>
                      <td className="px-5 py-4 text-slate-600">Adjuster statement of loss breakdown</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-slate-900 bg-slate-50/50">5. Reconstruction & RCV Payout</td>
                      <td className="px-5 py-4 text-slate-600">Weeks 2 – 4</td>
                      <td className="px-5 py-4 text-slate-700 font-medium">Complete drywall/flooring repairs, submit final invoices for RCV match</td>
                      <td className="px-5 py-4 text-slate-600">Certificate of completion, contractor final billing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-6">
              <ContactForm 
                title="Need Expert Claim Assistance?" 
                subtitle="We handle the mitigation, the reconstruction, and work directly with your insurance adjuster to protect your interests." 
              />
            </div>
          </div>
          
          <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            <BlogTableOfContents items={tocItems} />
            <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-3 shadow-xl border border-slate-800">
              <h3 className="text-xl font-bold">24/7 Emergency Dispatch</h3>
              <p className="text-sm text-slate-300">Don't wait for the adjuster. Mitigate now.</p>
              <a href={`tel:${siteConfig.phoneTel}`} className="block text-center bg-red-600 text-white font-extrabold py-3 rounded-xl text-sm transition hover:bg-red-700 shadow-md">
                CALL {siteConfig.phone} (24/7)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
