import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Directory Disclaimer | Chicago Water Damage Restoration',
  description: 'Legal disclaimer stating Chicago Water Damage Restoration connects users with independent 3rd party contractors.',
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Legal Disclaimer</h1>
        <p className="text-xs text-slate-500">Last updated: July 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl">
            <h2 className="text-base font-bold text-amber-900">Third-Party Service Provider Notice</h2>
            <p className="mt-2 text-xs text-amber-800 leading-relaxed">
              Chicago Water Damage Restoration is a free directory and lead referral service designed to assist homeowners in connecting with local water damage restoration service providers. All contractors are independent service providers and this website does not warrant or guarantee any work performed by referred contractors.
            </p>
          </div>

          <p>
            All trademarks, logos, and brand names mentioned on this website belong to their respective owners. Mention of insurance companies (such as State Farm, Allstate, Farmers, etc.) is for informational purposes regarding direct billing practices and does not imply endorsement or affiliation.
          </p>

          <p>
            If you have any questions regarding this disclaimer, please contact us at <strong>{siteConfig.email}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
