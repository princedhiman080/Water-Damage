import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Chicago 24/7 Water Damage Emergency Hotline',
  description: 'Get in touch with Chicago Water Damage Restoration for 24/7 emergency service dispatch or free on-site estimates. Call (630) 241-6800.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Details */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase bg-sky-100 px-3 py-1 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Contact Chicago Water Damage Restoration
            </h1>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Facing an active burst pipe or basement flood? Don't wait for form emailsâ€”call our 24/7 emergency dispatch line for instant response.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">24/7 Emergency Hotline</h3>
                <a href={`tel:${siteConfig.phoneTel}`} className="text-lg font-black text-red-600 hover:underline">
                  {siteConfig.phone}
                </a>
                <p className="text-xs text-slate-500 mt-0.5">Guaranteed 60-minute dispatch across Chicago</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Service Area Headquarters</h3>
                <p className="text-sm text-slate-700 font-semibold">
                  {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">Serving all 77 Chicago Neighborhood Areas</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Email Inquiries</h3>
                <p className="text-sm font-semibold text-slate-800">{siteConfig.email}</p>
                <p className="text-xs text-slate-500 mt-0.5">General questions & commercial service quotes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm
            title="Send Us a Service Request"
            subtitle="Fill out the fields below for a callback within 5-15 minutes."
          />
        </div>

      </div>
    </div>
  );
}
