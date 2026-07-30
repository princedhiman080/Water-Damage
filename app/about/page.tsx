import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Award, Users, HeartHandshake, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Us | Chicago Water Damage Restoration Network',
  description: 'Learn about Chicago Water Damage Restoration network—connecting homeowners with verified, licensed, and insured restoration professionals across Chicago, IL.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            About Our Chicago Network
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Connecting Chicago Homeowners with 24/7 Restoration Experts
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are dedicated to providing Chicago property owners with rapid, transparent, and certified emergency water extraction and flood mitigation services.
          </p>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-sky-400">Our E-E-A-T Transparency Promise</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            <strong>Chicago Water Damage Restoration</strong> acts as a free local directory and lead referral connection platform. We partner with independent, IICRC-certified, licensed, and insured water restoration contractors stationed across Cook County.
          </p>
          <p className="text-slate-300 text-base leading-relaxed">
            When water intrudes your home, finding an available contractor fast is stressful. Our system dispatches the nearest qualified, active mobile restoration crew directly to your address in 60 minutes or less.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <ShieldCheck className="w-8 h-8 text-sky-600" />
            <h3 className="font-bold text-slate-900 text-lg">Verified Licensing</h3>
            <p className="text-xs text-slate-600">We verify our partner contractors hold active liability insurance and IICRC water restoration certifications.</p>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <Award className="w-8 h-8 text-amber-500" />
            <h3 className="font-bold text-slate-900 text-lg">Direct Insurance Billing</h3>
            <p className="text-xs text-slate-600">Our partners bill your insurance carrier directly using industry-standard Xactimate software to minimize out-of-pocket costs.</p>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <Users className="w-8 h-8 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-lg">24/7 Local Dispatch</h3>
            <p className="text-xs text-slate-600">Round-the-clock emergency telephone coverage across all 77 Chicago neighborhood areas.</p>
          </div>
        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Have Questions or Need Immediate Assistance?</h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Our Chicago dispatch operators are on standby 365 days a year.
          </p>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md text-base"
          >
            <Phone className="w-5 h-5 animate-bounce" />
            <span>Call 24/7: {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
