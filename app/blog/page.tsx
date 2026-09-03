import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { BlogPaginatedGrid } from '@/components/BlogPaginatedGrid';
import { blogPosts } from '@/lib/blogData';

export const metadata: Metadata = {
  title: 'Chicago Water Damage Restoration Blog & Emergency Guides (2026)',
  description: 'Expert advice, step-by-step emergency checklists, insurance claim guides, and flood prevention tips for Chicago homeowners and property managers.',
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-800 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-200">
            Resource Center & Knowledge Hub ({blogPosts.length} Articles)
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Chicago Water Damage Restoration Guides & Expert Advice
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Step-by-step emergency action checklists, insurance claim advice, and flood prevention strategies for Chicago property owners.
          </p>
        </div>

        {/* Interactive Paginated Grid Component */}
        <BlogPaginatedGrid posts={blogPosts} itemsPerPage={10} />

        {/* Emergency Assistance Banner */}
        <div className="pt-8">
          <ContactForm title="Have a Water Damage Emergency in Chicago?" subtitle="Our certified response team arrives on-site within 60 minutes." />
        </div>
      </div>
    </div>
  );
}
