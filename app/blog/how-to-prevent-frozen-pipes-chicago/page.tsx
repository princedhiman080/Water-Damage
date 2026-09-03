import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowLeft, ShieldCheck, ThermometerSnowflake, AlertTriangle, CheckCircle2, Home, Flame, Droplets, Wrench } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogTableOfContents } from '@/components/BlogTableOfContents';

export const metadata: Metadata = {
  title: 'How to Prevent Frozen Burst Pipes in Chicago | Winterization Tips',
  description: 'Comprehensive guide to preventing frozen water pipes from bursting in Chicago brownstones, two-flats, and homes during Midwest polar vortex freezes. Learn pipe insulation, thermostat settings, and freeze emergency protocols.',
  alternates: {
    canonical: `${siteConfig.url}/blog/how-to-prevent-frozen-pipes-chicago`,
  },
};

export default function BlogFrozenPipesPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Prevent Frozen Pipes Chicago', url: '/blog/how-to-prevent-frozen-pipes-chicago' },
  ]);

  const tocItems = [
    { id: 'understanding-chicago-freeze-risk', title: '1. The Physics of Chicago Freeze Snaps & Housing Stock' },
    { id: 'tip-1-thermostat', title: '2. Keep Thermostats Above 55Â°F at All Times' },
    { id: 'tip-2-drip-faucets', title: '3. Drip Faucets During Extreme Sub-Zero Snaps' },
    { id: 'tip-3-insulate-pipes', title: '4. Insulate Exposed Exterior Pipes & Crawlspaces' },
    { id: 'tip-4-cabinet-ventilation', title: '5. Cabinet Ventilation & Room Heating Strategies' },
    { id: 'tip-5-outdoor-spigots', title: '6. Shut Off Outdoor Hose Bibs & Drain Supply Lines' },
    { id: 'emergency-response-protocol', title: '7. What to Do if a Pipe Freezes or Bursts' },
    { id: 'comparison-checklist-table', title: '8. Winter Pipe Protection Checklist & Summary Table' }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <div className="max-w-7xl mx-auto space-y-6">
        <Link href="/blog" className="inline-flex items-center text-xs font-bold text-sky-600 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to All Articles</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 border-b border-slate-200 pb-6">
              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full font-bold uppercase">Winterization Guide</span>
                <span>July 30, 2026</span>
                <span>â€¢ 12 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                How to Prevent Frozen Burst Pipes During Chicago Winters
              </h1>
              <p className="text-slate-600 text-base leading-relaxed">
                Essential, battle-tested strategies to safeguard your Chicago property when polar vortex freezes push temperatures into dangerous sub-zero territory. Protect your foundation, plumbing, and finished living spaces from multi-thousand-dollar water disasters.
              </p>
            </div>

            {/* Thumbnail Image */}
            <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800&auto=format&fit=crop&q=80"
                alt="Chicago Winter Burst Pipe Prevention"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Callout Box: Summary Overview */}
            <div className="bg-sky-50 border-l-4 border-sky-600 p-6 rounded-r-2xl my-6 shadow-sm">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-6 h-6 text-sky-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sky-900 text-lg mb-1">Chicago Winter Emergency Alert</h4>
                  <p className="text-sky-800 text-sm leading-relaxed">
                    A single burst 3/4-inch copper water line in a Chicago home can discharge up to <strong>250 to 500 gallons of water per hour</strong>. Preventing freeze points before polar vortex events hit is the single most cost-effective maintenance task any property owner can undertake.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none space-y-8 text-base leading-relaxed text-slate-700">
              
              <section id="understanding-chicago-freeze-risk">
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  1. The Physics of Chicago Freeze Snaps & Historic Housing Stock
                </h2>
                <p>
                  Chicago's winter climate presents a unique storm of challenges for residential plumbing systems. Deep midwestern freeze snaps regularly push ambient air temperatures below zero for consecutive days. 
                </p>
                <p>
                  Coupled with intense wind gusts sweeping off Lake Michigan across neighborhoods like Lincoln Park, Lakeview, and Hyde Park, the chilling effect on exterior building facades is amplified dramatically. Cold air forces its way through microscopic masonry cracks, unsealed sill plates, and uninsulated wall cavities where water supply lines are routed.
                </p>
                <p>
                  Furthermore, Chicago's distinct architectural heritageâ€”ranging from historic 19th-century brownstones and classic brick two-flats to post-war bungalowsâ€”features construction methods that require specific winter care. Older masonry construction often lacks modern cavity insulation. 
                </p>
                <p>
                  When plaster walls separate indoor living spaces from freezing brick exteriors, copper pipes housed within those wall cavities can quickly drop below 32Â°F (0Â°C). Water trapped inside the pipe begins to crystallize, expanding by roughly 9% in volume. 
                </p>
                <p>
                  If an ice dam forms, the static water trapped between the ice blockage and a closed faucet builds extreme hydraulic pressureâ€”frequently exceeding 2,000 pounds per square inchâ€”until the metal wall ruptures catastrophically, requiring immediate <Link href="/" className="text-sky-600 font-semibold hover:underline">Water Damage Restoration Chicago</Link>.
                </p>

                {/* Architecture Vulnerability Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                      <Home className="w-5 h-5 text-sky-600" />
                      Chicago Two-Flats & Three-Flats
                    </h4>
                    <p className="text-xs text-slate-600">Unheated stairwell risers, back porch additions, and uninsulated top-floor ceiling cavities harbor vulnerable supply lines.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                      <Home className="w-5 h-5 text-sky-600" />
                      Classic Brick Bungalows
                    </h4>
                    <p className="text-xs text-slate-600">Unheated crawlspaces and unsealed basement rim joists expose main water shut-off valves and laundry lines directly to frozen earth.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                      <Home className="w-5 h-5 text-sky-600" />
                      Historic Brownstones & Townhomes
                    </h4>
                    <p className="text-xs text-slate-600">Plaster-and-lath wall cavities along uninsulated party or exterior party walls trap cold air pockets during extended freezes.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                      <Home className="w-5 h-5 text-sky-600" />
                      Modern Loft Conversions
                    </h4>
                    <p className="text-xs text-slate-600">Exposed spiral HVAC ductwork and high ceiling voids can leave perimeter wall kitchen lines underserved by radiant heat.</p>
                  </div>
                </div>
              </section>

              <section id="tip-1-thermostat">
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  2. Keep Thermostats Above 55Â°F at All Times
                </h2>
                <p>
                  One of the most frequent causes of burst pipes during Chicago winters occurs when property owners travel for winter vacations or attempt to save money on heating bills by turning off their HVAC systems completely. 
                </p>
                <p>
                  Lowering the interior thermostat below 55Â°F (13Â°C) allows perimeter wall cavities, unheated utility closets, and floor voids to plunge below freezing, even if the center of the living room feels mildly cool.
                </p>
                <p>
                  To maintain structural warmth, set your thermostat to a minimum of 55Â°Fâ€”and ideally between 65Â°F and 68Â°F during active polar vortex advisories. 
                </p>
                <p>
                  If you are away from home, leave your heating system running in auto mode, replace furnace air filters before departing, and ensure all interior interior doors remain open so warm air circulates evenly to every corner of the house.
                </p>

                {/* Callout Box: Vacation Thermostat Warning */}
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-2xl my-6 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-900 text-lg mb-1">Vacation Heating Rule for Landlords & Homeowners</h4>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        Never turn off your furnace while out of town! Most standard Illinois insurance policies contain explicit clauses denying coverage for frozen pipe damage if the building was left unheated or if reasonable steps were not taken to maintain building heat.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="tip-2-drip-faucets">
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  3. Drip Faucets During Extreme Sub-Zero Snaps
                </h2>
                <p>
                  When the National Weather Service issues a Wind Chill Warning or sub-zero freeze advisory for the Chicago metropolitan area, engaging the drip faucet method is your best line of defense. 
                </p>
                <p>
                  Allowing a slight, continuous trickle of cold water to flow from faucets connected to exterior wall piping serves two critical physical functions: moving water takes significantly longer to freeze than stagnant water, and an open tap relieves internal line pressure.
                </p>
                <p>
                  Focus your dripping protocol on faucets located against exterior walls, kitchen sinks with uninsulated supply lines, and top-floor bathroom fixtures in multi-story buildings. A steady drip rate of 5 to 10 drops per minute is sufficient to prevent catastrophic hydraulic pressure buildup inside copper and PEX lines.
                </p>

                {/* Green Highlight Box for Drip Checklist */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 my-6 shadow-sm">
                  <h4 className="font-bold text-emerald-900 text-base mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    How to Properly Execute the Faucet Drip
                  </h4>
                  <ul className="space-y-2 text-sm text-emerald-800">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">âœ“</span>
                      <span><strong>Select Target Fixtures:</strong> Choose faucets served by pipes running through outside walls or unheated crawlspaces.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">âœ“</span>
                      <span><strong>Drip Cold Water Line:</strong> Turn the cold water tap slightly until a thin, steady trickle or rapid drip is sustained.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">âœ“</span>
                      <span><strong>Check Floor Drains:</strong> Ensure sink drains are clear and unobstructed so dripping water flows freely into municipal drains without causing sink overflows.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="tip-3-insulate-pipes">
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  4. Insulate Exposed Exterior Pipes & Crawlspaces
                </h2>
                <p>
                  Exposed plumbing located in unheated basements, utility rooms, crawlspaces, attics, and garages must be insulated before winter arrives. Standard pre-slit polyethylene foam pipe insulation sleeves are inexpensive and easy to install. 
                </p>
                <p>
                  Simply slip the foam sleeve over exposed copper or PEX supply lines and seal the longitudinal joints with specialized acrylic pipe tape or duct tape.
                </p>
                <p>
                  For extra-vulnerable pipes located near exterior draft sources, install self-regulating heat cables (heat tape) beneath the foam insulation. Modern thermostatically controlled heat cables automatically activate when pipe temperatures fall below 38Â°F (3Â°C), supplying gentle electric warmth to prevent ice formation even during historic polar vortex events.
                </p>

                {/* Insulation R-Value Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm text-center">
                    <h4 className="font-bold text-slate-900 text-base mb-1">Foam Pipe Sleeves</h4>
                    <p className="text-xs text-slate-600 mb-2">Basic thermal layer for enclosed interior basements.</p>
                    <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2 py-1 rounded">R-Value ~2.0</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm text-center">
                    <h4 className="font-bold text-slate-900 text-base mb-1">Fiberglass Foil Wrap</h4>
                    <p className="text-xs text-slate-600 mb-2">Ideal for high-draft crawlspaces & unheated garages.</p>
                    <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2 py-1 rounded">R-Value ~4.0</span>
                  </div>
                  <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 shadow-sm text-center">
                    <h4 className="font-bold text-sky-900 text-base mb-1">Self-Regulating Heat Tape</h4>
                    <p className="text-xs text-sky-700 mb-2">Active electrical heating for severe sub-zero exposure.</p>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded">Active 38Â°F Thermostat</span>
                  </div>
                </div>
              </section>

              <section id="tip-4-cabinet-ventilation">
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  5. Cabinet Ventilation & Room Heating Strategies
                </h2>
                <p>
                  Kitchen and bathroom sink vanity cabinets located along exterior walls create isolated cold pockets. Because cabinet doors remain closed, warm air from your home's central furnace cannot reach the plumbing supply lines concealed behind the cabinetry.
                </p>
                <p>
                  During sub-zero cold spells, open all kitchen and bathroom cabinet doors under exterior wall sinks. This simple, zero-cost action allows ambient room heat to circulate around the pipes, raising the temperature inside the wall cavity by 10 to 15 degrees. 
                </p>
                <p>
                  Additionally, place portable space heaters safely nearby in unheated laundry rooms or utility closetsâ€”ensuring they are kept at least 3 feet away from combustible materials and monitored at all times.
                </p>
              </section>

              <section id="tip-5-outdoor-spigots">
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  6. Shut Off Outdoor Hose Bibs & Drain Supply Lines
                </h2>
                <p>
                  Leaving garden hoses connected to outdoor spigots during autumn is one of the leading causes of early winter pipe bursts in Chicago. A connected hose traps water inside the spigot barrel, preventing the frost-free sillcock mechanism from draining. 
                </p>
                <p>
                  When temperatures drop below freezing, the ice expands backwards into the indoor supply line inside your basement wall, splitting the pipe wide open.
                </p>
                <p>
                  Every October, disconnect all hoses, drain any lingering water, and store hoses indoors. Locate the indoor shut-off valve serving each outdoor hose spigot (usually located in the basement ceiling joists), turn it to the OFF position, and open the outdoor spigot tap to drain all remaining water from the line completely.
                </p>
              </section>

              <section id="emergency-response-protocol">
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  7. What to Do if a Pipe Freezes or Bursts in Your Chicago Property
                </h2>
                <p>
                  If you turn on a faucet during a Chicago cold snap and only a trickle or zero water emerges, your pipe is likely frozen. Act swiftly before total pressure rupture occurs:
                </p>
                
                <ol className="list-decimal pl-6 space-y-3 text-slate-700 font-normal">
                  <li><strong>Keep Faucet Open:</strong> Leave the affected tap open so water and steam can escape as ice thaws.</li>
                  <li><strong>Locate Main Water Shut-Off Valve:</strong> Ensure everyone in your household knows how to turn the main shut-off wheel or lever clockwise to stop incoming city water immediately if a burst occurs.</li>
                  <li><strong>Apply Safe Indirect Heat:</strong> Use an electric hair dryer, heating pad wrapped around the pipe, or warm towels. <em>NEVER use open flame blowtorches, which cause fire hazards and steam explosion risks!</em></li>
                  <li><strong>Call Emergency Restoration Experts:</strong> If a pipe has cracked or ruptured, turn off main electricity to flooded rooms, move valuables, and contact <Link href="/" className="text-sky-600 font-semibold hover:underline">Emergency Flood Cleanup Chicago</Link> professionals for immediate commercial extraction and structural drying.</li>
                </ol>

                {/* Red Burst Danger Callout Box */}
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl my-6 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-900 text-lg mb-1">Rupture Emergency Action</h4>
                      <p className="text-red-800 text-sm leading-relaxed">
                        If a main water supply line shatters, turn off your main water valve immediately. Do not attempt to repair pressurized high-volume leaks yourself. Dispatch certified extraction teams within 60 minutes to prevent structural floor collapse and toxic mold infestation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="comparison-checklist-table">
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  8. Winter Pipe Protection Checklist & Summary Table
                </h2>

                {/* Styled Summary Checklist Table */}
                <div className="overflow-x-auto my-8 rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm text-slate-700 border-collapse">
                    <thead className="bg-slate-900 text-white font-semibold">
                      <tr>
                        <th className="px-5 py-4 border-b border-slate-800">Prevention Measure</th>
                        <th className="px-5 py-4 border-b border-slate-800">Target Area / Fixture</th>
                        <th className="px-5 py-4 border-b border-slate-800">Execution Frequency</th>
                        <th className="px-5 py-4 border-b border-slate-800">Protection Effectiveness</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-slate-900 bg-slate-50/50">Thermostat Maintenance (55Â°F+)</td>
                        <td className="px-5 py-4 text-slate-600">Whole-house HVAC system</td>
                        <td className="px-5 py-4 text-slate-600">Continuous through winter season</td>
                        <td className="px-5 py-4 text-emerald-800 font-bold bg-emerald-50/30">Essential baseline prevention</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-slate-900 bg-slate-50/50">Faucet Drip Protocol</td>
                        <td className="px-5 py-4 text-slate-600">Exterior wall sinks & top-floor baths</td>
                        <td className="px-5 py-4 text-slate-600">Active during sub-zero & wind chill snaps</td>
                        <td className="px-5 py-4 text-emerald-800 font-bold bg-emerald-50/30">High (Relieves line pressure)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-slate-900 bg-slate-50/50">Foam Insulation & Heat Tape</td>
                        <td className="px-5 py-4 text-slate-600">Basements, crawlspaces & attics</td>
                        <td className="px-5 py-4 text-slate-600">One-time autumn installation</td>
                        <td className="px-5 py-4 text-emerald-800 font-bold bg-emerald-50/30">High (Blocks cold air drafts)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-slate-900 bg-slate-50/50">Cabinet Door Opening</td>
                        <td className="px-5 py-4 text-slate-600">Kitchen & bathroom sink vanities</td>
                        <td className="px-5 py-4 text-slate-600">Overnight during polar vortex warnings</td>
                        <td className="px-5 py-4 text-emerald-800 font-bold bg-emerald-50/30">Moderate-High (Zero cost)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4 font-bold text-slate-900 bg-slate-50/50">Hose Bib Disconnection</td>
                        <td className="px-5 py-4 text-slate-600">Outdoor garden spigots & sillcocks</td>
                        <td className="px-5 py-4 text-slate-600">October before first hard freeze</td>
                        <td className="px-5 py-4 text-emerald-800 font-bold bg-emerald-50/30">Essential outdoor protection</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

            </div>

            <div className="pt-6">
              <ContactForm title="Frozen Pipe Rupture Emergency?" subtitle="Call our Chicago dispatch team for 60-minute immediate water extraction and structural drying." />
            </div>
          </div>

          {/* Desktop Only Sidebar Column */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            <BlogTableOfContents items={tocItems} />
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-3 border border-slate-800">
              <h3 className="text-xl font-bold">Pipe Ruptured in Chicago?</h3>
              <p className="text-xs text-slate-300">Call (630) 241-6800 for 60-minute immediate water extraction.</p>
              <a href={`tel:${siteConfig.phoneTel}`} className="block text-center bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 rounded-xl text-sm shadow-md transition">
                CALL {siteConfig.phone} (24/7)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
