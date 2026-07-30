import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, AlertTriangle } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'Sewage Backup Cleanup in Chicago: Biohazard Decontamination Guide',
  description: 'Emergency sewage backup cleanup in Chicago, IL. Learn the health risks of Category 3 black water, the IICRC decontamination process, and how to file a sewer backup insurance claim.',
  alternates: {
    canonical: `${siteConfig.url}/blog/sewage-backup-cleanup-chicago-guide`,
  },
};

export default function BlogSewageBackupPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Sewage Backup Cleanup Chicago', url: '/blog/sewage-backup-cleanup-chicago-guide' },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Sewage Backup Cleanup in Chicago: Biohazard Decontamination Guide',
    'author': { '@type': 'Organization', 'name': siteConfig.name },
    'publisher': { '@type': 'Organization', 'name': siteConfig.name },
    'datePublished': '2026-07-30',
  };

  const tocItems = [
    { id: 'why-chicago-sewage', title: "Why Chicago's Sewers Back Up" },
    { id: 'health-hazards', title: 'Category 3 Sewage Health Hazards' },
    { id: 'what-not-to-do', title: 'What NOT To Do First' },
    { id: 'cleanup-protocol', title: 'Professional Decontamination Protocol' },
    { id: 'materials-affected', title: 'Materials That Must Be Removed' },
    { id: 'insurance-claims', title: 'Filing Your Sewer Backup Claim' },
    { id: 'prevention', title: 'Preventing Future Sewer Backups' },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-7xl mx-auto space-y-6">
        <Link href="/blog" className="inline-flex items-center text-xs font-bold text-sky-600 hover:text-sky-700">
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to All Articles</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 border-b border-slate-200 pb-6">
              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold uppercase">Biohazard Emergency</span>
                <span>July 30, 2026</span>
                <span>• 9 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Sewage Backup Cleanup in Chicago: Biohazard Decontamination Guide
              </h1>
              <p className="text-slate-600 text-base">
                Safe extraction, EPA-registered antimicrobial sanitation, and odor removal for Chicago property owners facing the most hazardous type of water damage.
              </p>
            </div>

            <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&auto=format&fit=crop&q=80"
                alt="Chicago Sewage Backup Biohazard Sanitation Equipment"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-slate max-w-none space-y-8 text-base leading-relaxed text-slate-700">

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl my-6 space-y-2 shadow-sm">
                <div className="flex items-center text-red-900 font-bold text-lg">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Biohazard Emergency Action Notice
                </div>
                <p className="text-red-950 text-sm leading-relaxed">
                  Category 3 sewage water contains Hepatitis A, E. coli, Salmonella, and toxic gases. Never attempt DIY cleanup. Evacuate children and pets, turn off HVAC, and call certified biohazard technicians immediately.
                </p>
              </div>

              <p>Of all the water damage scenarios a Chicago homeowner can face, a sewage backup is easily the most alarming and the most dangerous. Unlike a burst pipe that releases clean water, a sewer backup floods your home with a toxic mixture of raw sewage, bacteria, viruses, and chemical pollutants. The moment that dark, foul-smelling water begins rising from your basement floor drain or overflowing from your toilet, you are dealing with what the restoration industry classifies as Category 3 water — the most hazardous level of water contamination. Immediate, professional <Link href="/">Water Damage Restoration Chicago</Link> response is not just recommended; it is an absolute necessity to protect the health and safety of your household.</p>

              <p>Chicago&apos;s aging infrastructure makes sewage backups a relatively common occurrence, particularly on the South Side, Bridgeport, and other established neighborhoods served by older combined sewer mains. Understanding why these backups happen, what makes them so dangerous, and what the professional cleanup process entails will help you make faster, better decisions in those first critical minutes after a backup occurs.</p>

              <section id="why-chicago-sewage">
                <h2 className="text-3xl font-bold mt-10 mb-4">Why Chicago&apos;s Sewer System Backs Up</h2>
                <p>Chicago operates what is known as a combined sewer system, meaning that a single network of underground pipes carries both sanitary wastewater from homes and businesses and stormwater runoff from streets and sidewalks. Under normal conditions, this system works well enough. However, during the intense, rapid rainfall events that characterize Chicago&apos;s storm seasons — particularly in spring and summer — the volume of stormwater entering the combined system can overwhelm its capacity in a matter of minutes.</p>
                <p>When the underground pipes become completely full, there is nowhere for the water to go except back the way it came. The surcharge pressure in the main forces liquid up through every available opening connected to the sewer lateral, which includes your basement floor drain, your washing machine drain, and even your first-floor toilet. Older neighborhoods with smaller-diameter clay tile mains are especially vulnerable because those pipes were designed to handle populations and rainfall intensities from a century ago.</p>
                <p>Beyond storm surcharges, tree root intrusion is a major cause of residential sewer backups in Chicago. The mature elm and oak trees that make neighborhoods like Lincoln Square and Beverly so beautiful also send aggressive root systems underground in search of moisture. Over time, roots infiltrate the joints of clay tile sewer laterals, gradually accumulating debris until the pipe becomes completely blocked. When the next heavy rain comes, the water has nowhere to go.</p>
              </section>

              <section id="health-hazards">
                <h2 className="text-3xl font-bold mt-10 mb-4">Category 3 Sewage: The Health Hazards You Must Understand</h2>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 my-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-900 text-lg mb-2">Immediate Health Warning</h3>
                      <p className="text-red-800 text-sm">Sewage water contains dangerous pathogens. Do not allow children or elderly individuals into the affected area. Do not eat, drink, or touch your face while anywhere near the contaminated zone.</p>
                    </div>
                  </div>
                </div>
                <p>Sewage water — also called black water or Category 3 water — is a complex cocktail of biological and chemical hazards. Raw municipal sewage contains a vast array of dangerous microorganisms including E. coli, Salmonella, Hepatitis A, norovirus, Giardia, and Cryptosporidium. Exposure to these pathogens can cause severe gastrointestinal illness, respiratory infections, and in vulnerable populations, potentially life-threatening conditions. Even inhaling the hydrogen sulfide gas (the rotten egg odor) that emanates from sewage water can cause headaches, dizziness, and at high concentrations, loss of consciousness.</p>
                <p>Beyond the immediate biological threat, sewage water also carries industrial chemicals, pharmaceuticals, and heavy metals that make their way into the municipal waste stream. These chemical contaminants can penetrate porous building materials like drywall, wood framing, and concrete, creating a long-term health hazard that persists long after the visible water has been removed. This is why any material that has been contacted by Category 3 sewage water must be treated as a biohazardous waste and disposed of according to IICRC S500 and local regulatory standards.</p>
              </section>

              <section id="what-not-to-do">
                <h2 className="text-3xl font-bold mt-10 mb-4">What You Must NOT Do After a Sewage Backup</h2>
                <p>The instinct to immediately start cleaning is understandable, but in the case of a sewage backup, taking the wrong action can spread contamination throughout your home and put your health at serious risk. Here is what to avoid:</p>
                
                <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl my-6 border border-slate-800">
                  <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider mb-3">Critical Don'ts During Sewage Ingress</h4>
                  <ul className="list-disc pl-6 space-y-3 text-slate-300 text-sm">
                    <li><strong>Do not use household mops, buckets, or wet/dry vacuums:</strong> These tools cannot contain biohazardous materials, and using them will spread contamination to previously clean areas of your home.</li>
                    <li><strong>Do not run the HVAC system:</strong> Turning on your furnace or air conditioner will circulate contaminated air and aerosolized pathogens throughout every room in your house via the duct system.</li>
                    <li><strong>Do not walk through the affected area barefoot or in cloth shoes:</strong> Wear rubber boots and gloves if you must enter the space to retrieve medications or valuables.</li>
                    <li><strong>Do not use any plumbing fixtures:</strong> Running water in sinks, toilets, or showers connected to the same sewer lateral can worsen the backup and add more contaminated water to the affected area.</li>
                    <li><strong>Do not attempt to disinfect surfaces yourself with bleach:</strong> Household bleach is not sufficient to decontaminate surfaces exposed to raw sewage. Specialized EPA-registered hospital-grade antimicrobial agents applied by certified technicians are required.</li>
                  </ul>
                </div>
              </section>

              <section id="cleanup-protocol">
                <h2 className="text-3xl font-bold mt-10 mb-4">The Professional IICRC Sewage Decontamination Protocol</h2>
                <p>Professional sewage backup cleanup is a highly regulated, multi-step process governed by the IICRC S500 Standard for Professional Water Damage Restoration. When our certified technicians arrive at your Chicago property, they follow a strict protocol designed to safely eliminate biohazardous contamination and restore the structure to a safe, habitable condition.</p>

                <div className="space-y-4 my-6">
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                    <h3 className="text-lg font-bold text-slate-900">Step 1: Containment and Safety</h3>
                    <p className="text-slate-600 text-sm mt-1">Establishing heavy-gauge poly containment barriers and negative HEPA air pressure to stop aerosolized pathogens from escaping into clean rooms. Full PPE deployed.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                    <h3 className="text-lg font-bold text-slate-900">Step 2: Biohazardous Material Extraction</h3>
                    <p className="text-slate-600 text-sm mt-1">Truck-mounted waste extraction systems remove standing sewage to approved municipal treatment facilities with complete chain-of-custody logging.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                    <h3 className="text-lg font-bold text-slate-900">Step 3: Controlled Demolition of Contaminated Materials</h3>
                    <p className="text-slate-600 text-sm mt-1">Removing drywall 12-24 inches above waterline, stripping ruined carpet and padding, and bagging in sealed hazardous material containers.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                    <h3 className="text-lg font-bold text-slate-900">Step 4: EPA-Registered Antimicrobial Application</h3>
                    <p className="text-slate-600 text-sm mt-1">Electrostatic spraying of hospital-grade antimicrobial disinfectants over framing, subflooring, and masonry walls for complete microbial kill.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                    <h3 className="text-lg font-bold text-slate-900">Step 5: Structural Drying and Deodorization</h3>
                    <p className="text-slate-600 text-sm mt-1">Industrial dehumidifiers, LGR units, and hydroxyl generators eliminate trapped structural moisture and persistent sewage odors.</p>
                  </div>
                </div>

                <p><strong>Step 1 Details:</strong> The first action on every sewage backup job is establishing containment. Technicians use heavy-gauge polyethylene sheeting and negative air pressure machines equipped with HEPA filtration to seal off the affected area from the rest of the home. This prevents aerosolized sewage particles and odors from spreading to clean living spaces. All crew members don full personal protective equipment (PPE) including Tyvek suits, N95 or P100 respirators, nitrile gloves, and rubber boots before entering the contaminated zone.</p>

                <p><strong>Step 2 Details:</strong> Using truck-mounted extraction systems and submersible pumps, technicians remove all standing sewage water. This extracted water is classified as biohazardous waste and must be disposed of at approved waste processing facilities — it cannot simply be pumped into the street or the storm sewer. Every gallon of Category 3 water extracted is documented for regulatory compliance and insurance purposes.</p>

                <p><strong>Step 3 Details:</strong> Any porous material that has been directly contacted by sewage water must be safely demolished and removed. This includes drywall, carpet, carpet padding, insulation, and laminate flooring. These materials cannot be saved through cleaning alone because sewage pathogens penetrate deep into their fibers and cores. Technicians cut drywall to a height above the saturation line (typically 12 to 24 inches above the waterline), carefully bag all debris in sealed biohazard bags, and transport it to licensed disposal facilities.</p>

                <p><strong>Step 4 Details:</strong> After all contaminated materials are removed, every surface in the affected area — including concrete floors, block walls, wood framing, and metal pipes — is thoroughly cleaned and then treated with an EPA-registered, hospital-grade antimicrobial disinfectant. Our technicians use electrostatic sprayers to ensure complete, even coverage of every surface, including hard-to-reach corners and the backs of wall cavities. The disinfectant is allowed to dwell for the manufacturer-specified contact time to ensure complete pathogen kill.</p>

                <p><strong>Step 5 Details:</strong> Once the structure is decontaminated, industrial air movers and dehumidifiers are set up to bring the moisture content of the remaining structural materials down to pre-loss levels. Hydroxyl generators or ozone machines may also be used to neutralize persistent sewage odors that have permeated the concrete and wood framing. This drying process typically takes 3 to 5 days and is monitored daily using moisture meters and thermal imaging cameras.</p>
              </section>

              <section id="materials-affected">
                <h2 className="text-3xl font-bold mt-10 mb-4">Which Materials Cannot Be Saved After a Sewage Backup</h2>
                <p>One of the most difficult conversations in sewage backup cleanup is telling homeowners what must go. Unlike a clean water spill where quick extraction can often save carpet and drywall, sewage contamination leaves no room for compromise. The following materials, when contacted by Category 3 water, must always be removed and discarded:</p>
                
                <div className="overflow-x-auto my-8 rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm text-slate-700">
                    <thead className="bg-slate-100 text-slate-900 font-bold text-xs uppercase border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Material Category</th>
                        <th className="py-3 px-4 text-red-700">Contamination Hazard</th>
                        <th className="py-3 px-4">Required Remediation Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs">
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Drywall & Gypsum</td>
                        <td className="py-3 px-4 text-red-600 font-medium">Ultra-porous; absorbs pathogens to core</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">Demolish 12-24" above waterline</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900">Carpet & Underlayment</td>
                        <td className="py-3 px-4 text-red-600 font-medium">Fibers lock in bacteria & viruses permanently</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">Total removal & biohazard disposal</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Fiberglass Insulation</td>
                        <td className="py-3 px-4 text-red-600 font-medium">Holds sewage liquid like a sponge</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">Complete wall cavity extraction</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900">Laminate Flooring</td>
                        <td className="py-3 px-4 text-red-600 font-medium">Particleboard core swells and harbors mold</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">Remove subfloor padding & planks</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Non-Porous Sealed Concrete</td>
                        <td className="py-3 px-4 text-amber-600 font-medium">Surface contamination only</td>
                        <td className="py-3 px-4 font-semibold text-emerald-700">Salvageable via EPA disinfectant pressure wash</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Drywall (gypsum board):</strong> Extremely porous. Sewage wicks deep into the paper face and gypsum core, making decontamination impossible.</li>
                  <li><strong>Carpet and carpet padding:</strong> Both are impossible to fully decontaminate. Even if the surface appears clean, pathogens remain embedded in the fibers.</li>
                  <li><strong>Fiberglass batt insulation:</strong> Absorbs sewage water completely and cannot be sanitized. Must be removed from wall and ceiling cavities.</li>
                  <li><strong>Laminate and engineered wood flooring:</strong> The composite core of these products absorbs sewage water and delaminate. Solid hardwood may be salvageable if dried quickly with specialized equipment.</li>
                  <li><strong>Upholstered furniture:</strong> Sofas, chairs, and mattresses that have been contacted by sewage water cannot be decontaminated and must be disposed of.</li>
                </ul>
                <p>Non-porous surfaces like ceramic tile, porcelain, metal, glass, and sealed concrete can often be cleaned and disinfected in place if they have not been structurally compromised. Our certified technicians assess each material individually using moisture meters and apply the appropriate IICRC protocol for each surface type.</p>
              </section>

              <section id="insurance-claims">
                <h2 className="text-3xl font-bold mt-10 mb-4">Filing Your Sewer Backup Insurance Claim in Chicago</h2>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl my-6 space-y-2">
                  <h4 className="font-bold text-amber-950 text-base">Insurance Tip: Sewer Backup Endorsements</h4>
                  <p className="text-amber-900 text-sm leading-relaxed">
                    Standard home policies exclude water backup! Verify that your policy includes the "Water Backup and Sump Discharge" rider ($5,000–$25,000 limit). We provide Xactimate line-item estimates directly to your adjuster to maximize claim coverage.
                  </p>
                </div>

                <p>Standard homeowner&apos;s insurance policies in Illinois typically do not cover sewage backup damage under the base policy. Sewer backup coverage must be specifically added as an endorsement or rider to your policy, often for an additional premium of $40 to $150 per year. If you purchased this endorsement, your claim process will be similar to any other water damage claim.</p>
                <p>The most important thing you can do for your claim is thorough documentation before any cleanup begins. Take extensive photos and videos of all affected areas, including close-ups of the sewage level lines on walls, damaged contents, and the floor drain or toilet from which the backup originated. Our technicians provide detailed Xactimate estimates that are accepted by all major insurance carriers, and we can work directly with your insurance adjuster to expedite the claims process. Visit our <Link href="/services/flood-damage-cleanup">Flood Damage Cleanup Chicago</Link> service page to learn more about how we coordinate with insurance companies.</p>
                <p>If you do not have sewer backup coverage, all is not lost. Some homeowners may be eligible to file a claim against the City of Chicago&apos;s Metropolitan Water Reclamation District (MWRD) if they can demonstrate that the backup was caused by a failure of the municipal system rather than their private lateral. This is a complex legal process, but our team can provide documentation to support such a claim.</p>
              </section>

              <section id="prevention">
                <h2 className="text-3xl font-bold mt-10 mb-4">Preventing Future Sewage Backups in Your Chicago Home</h2>
                <p>The best defense against a sewage backup is a proactive approach to your home&apos;s plumbing infrastructure. Here are the most effective preventive measures available to Chicago homeowners:</p>
                <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 my-6">
                  <h3 className="text-xl font-bold flex items-center text-sky-900 mb-3"><CheckCircle2 className="w-5 h-5 mr-2 text-sky-600" /> Install a Backwater Valve</h3>
                  <p>A backwater valve (also called a backflow prevention valve) is installed on your home&apos;s main sewer lateral and acts as a one-way door. Under normal conditions, wastewater flows out of your home through the valve into the municipal main. If the city main surcharges and flow reverses, the valve automatically closes, physically preventing sewage from entering your basement. This is the single most effective technology for preventing municipal sewer backups and the City of Chicago has periodically offered rebate programs to help offset the installation cost.</p>
                </div>
                <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 my-6">
                  <h3 className="text-xl font-bold flex items-center text-sky-900 mb-3"><CheckCircle2 className="w-5 h-5 mr-2 text-sky-600" /> Schedule Regular Sewer Lateral Inspections</h3>
                  <p>Have a licensed plumber camera-inspect your sewer lateral every 5-7 years, or immediately if you notice slow drains throughout the house. Video inspection will reveal tree root infiltration, pipe joint offsets, or early-stage pipe corrosion before they cause a full blockage. Hydro-jetting the line periodically can also clear accumulated grease and root growth.</p>
                </div>
                <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 my-6">
                  <h3 className="text-xl font-bold flex items-center text-sky-900 mb-3"><CheckCircle2 className="w-5 h-5 mr-2 text-sky-600" /> Do Not Flush Wipes or Grease</h3>
                  <p>&quot;Flushable&quot; wipes are one of the leading causes of residential sewer clogs nationwide. Despite the labeling, these wipes do not break down in the sewer system and accumulate into massive blockages. Pouring cooking grease down the drain solidifies in cold sewer pipes and traps other debris. Keep these items out of your drains and dispose of grease in a sealed container in the trash.</p>
                </div>
                <p>If your home has experienced a sewage backup in the past, it is especially important to take these preventive steps before the next major rain event. Chicago&apos;s storm season runs roughly from March through October, so scheduling a plumbing inspection and backwater valve installation during the winter months is ideal.</p>
              </section>

              <div className="mt-10 border-t border-slate-200 pt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Act Immediately — Your Family&apos;s Health Depends on It</h3>
                <p>A sewage backup is a genuine public health emergency. The longer Category 3 black water sits in your home, the deeper it penetrates into structural materials and the more dangerous the environment becomes. Do not attempt to handle this situation on your own. Our IICRC-certified biohazard decontamination team serves all Chicago neighborhoods including the South Side, West Side, North Shore, and surrounding Cook County communities. We operate 24 hours a day, 7 days a week, and can be on site within 60 minutes of your call.</p>
              </div>

            </div>
            <div className="pt-6"><ContactForm title="Need Emergency Sewage Removal in Chicago?" subtitle="Biohazard certified team dispatched in 60 minutes or less." /></div>
          </div>

          <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            <BlogTableOfContents items={tocItems} />
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-3">
              <h3 className="text-xl font-bold">24/7 Biohazard Cleanup</h3>
              <p className="text-xs text-slate-300">EPA-registered sanitation and certified sewage water extraction.</p>
              <a href={`tel:${siteConfig.phoneTel}`} className="block text-center bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 rounded-xl text-sm shadow">
                CALL {siteConfig.phone} (24/7)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
