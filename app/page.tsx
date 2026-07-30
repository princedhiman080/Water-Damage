import React from 'react';
import Link from 'next/link';
import { Phone, Clock, ShieldCheck, Droplets, Flame, Wind, CheckCircle2, ArrowRight, Zap, AlertTriangle, Building2, Shield, HeartHandshake } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { TrustBadges } from '@/components/TrustBadges';
import { ContactForm } from '@/components/ContactForm';
import { FAQSection } from '@/components/FAQSection';
import { ChicagoMapGrid } from '@/components/ChicagoMapGrid';

export default function HomePage() {
  const services = [
    {
      title: "Water Damage Restoration",
      slug: "/services/water-damage-restoration",
      description: "Full-service structural drying, moisture detection, and water damage repair for Chicago homes and commercial properties.",
      icon: Droplets,
      badge: "60-Min Arrival",
      iconBg: "bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-sky-500/30 text-white",
    },
    {
      title: "Flood Damage Cleanup",
      slug: "/services/flood-damage-cleanup",
      description: "Heavy-duty storm water extraction, basement pump-out, sewage sanitation, and floor restoration after severe Chicago rainfall.",
      icon: Wind,
      badge: "Industrial Pumps",
      iconBg: "bg-gradient-to-br from-cyan-400 to-teal-600 shadow-lg shadow-cyan-500/30 text-white",
    },
    {
      title: "Emergency Water Extraction",
      slug: "/services/emergency-water-extraction",
      description: "Immediate 24/7 water removal for burst pipes, ruptured water heaters, and overflowing fixtures before structural decay begins.",
      icon: Zap,
      badge: "24/7 Dispatch",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-600 shadow-lg shadow-amber-500/30 text-white",
    },
    {
      title: "Basement Water Damage Repair",
      slug: "/services/basement-water-damage-repair",
      description: "Specialized Chicago basement flood recovery, foundation wall drying, sump pump failure remediation, and carpet restoration.",
      icon: Building2,
      badge: "Deep Drying",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 text-white",
    },
    {
      title: "Mold Remediation & Removal",
      slug: "/services/mold-remediation",
      description: "Comprehensive mold inspection, containment, HEPA air filtration, and eco-friendly antimicrobial mold treatments.",
      icon: ShieldCheck,
      badge: "Certified Pros",
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-700 shadow-lg shadow-emerald-500/30 text-white",
    },
  ];

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/40 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-red-600/90 text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                <AlertTriangle className="w-4 h-4 text-yellow-300" />
                <span>CHICAGO 24/7 EMERGENCY WATER RESPONSE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
                Water Damage Restoration in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Chicago, IL</span>
              </h1>

              <p className="text-base sm:text-lg xl:text-xl text-slate-300 leading-relaxed font-normal">
                Facing a burst pipe, flooded basement, or sudden ceiling leak? Our certified local Chicago restoration specialists arrive in <strong className="text-white font-semibold">60 minutes or less</strong> to extract water, dry structures, and bill your insurance directly.
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>Direct Insurance Billing (Zero Hassle)</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>IICRC Certified Water Technicians</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>Industrial Truck-Mounted Extraction</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>Free On-Site Inspection & Estimate</span>
                </div>
              </div>

              {/* Primary Call Action Box */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="flex items-center justify-center space-x-2 sm:space-x-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-red-600/40 transition-all text-sm sm:text-lg"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce shrink-0" />
                  <div className="text-left">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider block font-bold text-red-200 leading-none">Emergency Dispatch Hotline</span>
                    <span className="text-base sm:text-xl font-black">{siteConfig.phone}</span>
                  </div>
                </a>

                <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 px-4 py-2 border border-slate-700/80 rounded-xl bg-slate-800/50">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Avg Response: <strong>45 Mins</strong> in Chicago Metro</span>
                </div>
              </div>
            </div>

            {/* Hero Right Column: High-Converting Form */}
            <div className="lg:col-span-5">
              <ContactForm
                title="Get 60-Min Emergency Response"
                subtitle="Submit your details for immediate call-back and dispatch."
              />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BADGES BAR */}
      <TrustBadges />

      {/* SERVICES OVERVIEW GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Our Core Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Comprehensive Water Restoration Services in Chicago
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Water damage rapidly degrades building materials, damages electrical systems, and spawns toxic mold. Our team utilizes commercial-grade moisture meters, infrared thermal cameras, and high-volume dehumidifiers for total structural restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl ${service.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                        <IconComp className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-bold bg-white text-slate-700 px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200">
                    <Link
                      href={service.slug}
                      className="inline-flex items-center text-sm font-bold text-sky-600 hover:text-sky-700 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Special Emergency Call Card */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-6">
                  <AlertTriangle className="w-4 h-4 text-yellow-300" />
                  <span>Standing Water Crisis?</span>
                </div>
                <h3 className="text-2xl font-black">
                  Don't Wait — Water Damage Spreads in 24 Hours!
                </h3>
                <p className="text-sm text-red-100 mt-3 leading-relaxed">
                  Submerged flooring and soaked drywall deteriorate quickly. Call our emergency hotline now to get an on-duty technician dispatched immediately.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/20">
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="w-full bg-white text-red-700 hover:bg-red-50 font-extrabold py-3.5 px-4 rounded-xl text-center flex items-center justify-center space-x-2 text-sm shadow"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL {siteConfig.phone} NOW</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & INSURANCE SECTION (E-E-A-T) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-extrabold tracking-wider text-sky-400 uppercase bg-sky-900/50 border border-sky-700/50 px-3.5 py-1.5 rounded-full">
                Why Chicago Trusts Our Network
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Hassle-Free Direct Insurance Claims & Professional Drying
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Dealing with water damage in Chicago is stressful enough without fighting insurance adjusters. Our partner restoration contractors work directly with all major insurance carriers—including State Farm, Allstate, Farmers, Liberty Mutual, and USAA—to document losses with moisture mapping and submit billing directly.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <Shield className="w-6 h-6 text-sky-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white text-base">Direct Insurance Billing</h3>
                    <p className="text-xs text-slate-400 mt-1">We take thermal moisture photos, generate Xactimate insurance estimates, and bill your provider directly.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <Clock className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white text-base">Guaranteed 60-Minute Chicago Arrival</h3>
                    <p className="text-xs text-slate-400 mt-1">Dispatched locally across Chicago, Cook County, and surrounding suburbs 24 hours a day, 7 days a week.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <HeartHandshake className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white text-base">Certified Local Referral Network</h3>
                    <p className="text-xs text-slate-400 mt-1">We connect you with licensed, bonded, and insured IICRC water restoration specialists with proven track records.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Step-by-Step Recovery Process */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight border-b border-slate-700 pb-4">
                The 5-Step Water Recovery Process
              </h3>

              <ol className="space-y-5 text-sm text-slate-300">
                <li className="flex items-start space-x-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-sky-500 text-slate-950 font-extrabold text-xs shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-white block font-bold text-base">Emergency Call & Immediate Dispatch</strong>
                    <span>You call our 24/7 hotline. A local crew is immediately dispatched to your Chicago property.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-sky-500 text-slate-950 font-extrabold text-xs shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-white block font-bold text-base">Thermal Inspection & Water Containment</strong>
                    <span>We inspect hidden moisture using thermal cameras and contain active water leaks immediately.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-sky-500 text-slate-950 font-extrabold text-xs shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-white block font-bold text-base">Industrial Water Extraction</strong>
                    <span>Heavy-duty truck-mounted pumps remove standing water from basements, carpets, and hardwood.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-sky-500 text-slate-950 font-extrabold text-xs shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-white block font-bold text-base">Structural Drying & Dehumidification</strong>
                    <span>Commercial LGR dehumidifiers and high-velocity air movers dry studs, drywall, and subfloors.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-sky-500 text-slate-950 font-extrabold text-xs shrink-0 mt-0.5">5</span>
                  <div>
                    <strong className="text-white block font-bold text-base">Sanitization & Insurance Billing</strong>
                    <span>Antimicrobial sanitization prevents mold growth, and we submit final documentation to insurance.</span>
                  </div>
                </li>
              </ol>
            </div>

          </div>
        </div>
      </section>

      {/* CHICAGO NEIGHBORHOOD MAP GRID */}
      <ChicagoMapGrid />

      {/* REVIEWS & TESTIMONIALS (READY STRUCTURE) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-emerald-700 uppercase bg-emerald-100 px-3 py-1 rounded-full">
              Verified Chicago Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Real Experiences From Local Homeowners
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              See why Chicago residential and commercial property owners rely on our 24/7 restoration network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex text-amber-400 space-x-1">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-slate-700 italic leading-relaxed">
                "A frozen pipe burst in our Lincoln Park basement during the sub-zero winter snap. The crew arrived in 40 minutes, pumped out 4 inches of water, and handled our insurance claim directly!"
              </p>
              <div className="pt-2 border-t border-slate-100">
                <span className="font-bold text-slate-900 text-sm block">Michael T.</span>
                <span className="text-xs text-slate-500">Lincoln Park, Chicago</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex text-amber-400 space-x-1">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-slate-700 italic leading-relaxed">
                "Our Logan Square restaurant kitchen flooded after a heavy rainstorm. They extracted all standing water before morning prep and saved us thousands in lost revenue."
              </p>
              <div className="pt-2 border-t border-slate-100">
                <span className="font-bold text-slate-900 text-sm block">Sarah R.</span>
                <span className="text-xs text-slate-500">Logan Square, Chicago</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex text-amber-400 space-x-1">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-slate-700 italic leading-relaxed">
                "Fast, professional, and honest. They set up commercial dehumidifiers in our West Loop condo and tested every wall with moisture sensors until it was 100% dry."
              </p>
              <div className="pt-2 border-t border-slate-100">
                <span className="font-bold text-slate-900 text-sm block">David K.</span>
                <span className="text-xs text-slate-500">West Loop, Chicago</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AEO FAQ SECTION */}
      <FAQSection />

      {/* FINAL BOTTOM CALL-TO-ACTION */}
      <section className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Need Emergency Water Damage Assistance in Chicago?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Don't let water destroy your foundation or lead to toxic mold growth. Contact our 24/7 Chicago dispatch hotline right now.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-extrabold px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg shadow-xl hover:shadow-red-600/50 transition-all flex items-center justify-center space-x-2 sm:space-x-3"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce shrink-0" />
              <span>CALL {siteConfig.phone} (24/7)</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-base border border-slate-700 transition-colors flex items-center justify-center"
            >
              Request Online Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
