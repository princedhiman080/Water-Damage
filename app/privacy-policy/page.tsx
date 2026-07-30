import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy | Chicago Water Damage Restoration',
  description: 'Privacy Policy for Chicago Water Damage Restoration explaining data collection via contact forms, analytics, cookies, and user rights.',
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
        <p className="text-xs text-slate-500">Last updated: July 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <p>
            At <strong>Chicago Water Damage Restoration</strong>, accessible from {siteConfig.url}, we prioritize the privacy of our visitors. This Privacy Policy document outlines the types of information collected and how it is used.
          </p>

          <h2 className="text-xl font-bold text-slate-900">Information We Collect</h2>
          <p>
            When you submit a contact or emergency service request form on our website, we collect personal information including your name, telephone number, email address, property address, and details regarding your water damage emergency.
          </p>

          <h2 className="text-xl font-bold text-slate-900">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To dispatch local water damage restoration professionals to your property address.</li>
            <li>To contact you regarding your requested service estimate or emergency callback.</li>
            <li>To analyze website performance, user navigation, and core web vitals.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900">Third-Party Referral Disclosure</h2>
          <p>
            Information submitted through our lead generation forms may be transmitted to verified independent partner restoration contractors operating in the Chicago metropolitan area solely for the purpose of contacting you to fulfill your service request. We do not sell your personal information to unverified third-party advertisers.
          </p>

          <h2 className="text-xl font-bold text-slate-900">Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, contact us at <strong>{siteConfig.email}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
