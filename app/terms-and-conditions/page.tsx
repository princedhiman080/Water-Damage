import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Chicago Water Damage Restoration',
  description: 'Terms and conditions governing the use of Chicago Water Damage Restoration lead generation directory service.',
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`,
  },
};

export default function TermsPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Terms & Conditions</h1>
        <p className="text-xs text-slate-500">Last updated: July 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <p>
            Welcome to <strong>Chicago Water Damage Restoration</strong> ({siteConfig.url}). By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-bold text-slate-900">Directory & Referral Nature of Website</h2>
          <p>
            This website functions as a referral and lead generation service connecting homeowners and commercial property owners with independent, third-party water damage restoration contractors in Chicago, IL. This website owner does not directly provide contracting services, hold contractor licenses, or guarantee the work of referred third parties.
          </p>

          <h2 className="text-xl font-bold text-slate-900">Limitation of Liability</h2>
          <p>
            The website owner shall not be liable for any direct, indirect, incidental, or consequential damages resulting from work performed by referred contractors or service providers. Property owners are encouraged to independently verify licensing and insurance credentials prior to signing service contracts with any referred professional.
          </p>
        </div>
      </div>
    </div>
  );
}
