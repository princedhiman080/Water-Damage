import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, BookOpen, User, AlertTriangle } from 'lucide-react';
import { siteConfig } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Blog & Articles | Chicago, IL',
  description: 'Expert guides, emergency action steps, and insurance tips for Chicago homeowners facing water damage, frozen burst pipes, flood cleanup, and mold remediation.',
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

const blogPosts = [
  {
    title: "What to Do in the First 24 Hours After Water Damage in Chicago",
    slug: "/blog/first-24-hours-after-water-damage",
    excerpt: "Step-by-step emergency checklist to protect your home, prevent toxic mold proliferation, and secure full insurance coverage after a pipe rupture or flood.",
    category: "Emergency Guide",
    date: "July 28, 2026",
    readTime: "6 min read",
    author: "Chicago Restoration Team",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "How to Prevent Frozen Burst Pipes During Chicago Winter Freeze",
    slug: "/blog/how-to-prevent-frozen-pipes-chicago",
    excerpt: "Essential winterization strategies for Chicago brownstones and residential homes to stop water pipes from freezing and bursting during sub-zero polar vortexes.",
    category: "Winterization Tips",
    date: "July 20, 2026",
    readTime: "7 min read",
    author: "Chicago Plumbing Experts",
    image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Does Homeowners Insurance Cover Flooded Basement Cleanup in Illinois?",
    slug: "/blog/chicago-flooded-basement-insurance-coverage",
    excerpt: "Understand what your Illinois home insurance covers, the difference between clean water vs sewer backup endorsements, and how to file Xactimate claims.",
    category: "Insurance & Claims",
    date: "July 14, 2026",
    readTime: "8 min read",
    author: "Insurance Claims Specialist",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "5 Warning Signs of Hidden Mold Behind Drywall After a Water Leak",
    slug: "/blog/hidden-mold-warning-signs-chicago",
    excerpt: "Musty odors, peeling paint, and unexplained allergies? Learn how to spot hidden mold growth behind drywall, under carpets, and inside Chicago crawlspaces.",
    category: "Mold Remediation",
    date: "July 05, 2026",
    readTime: "5 min read",
    author: "IICRC Mold Specialist",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
  },
];

export default function BlogIndexPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Blog Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Chicago Restoration Knowledge Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Water Damage Restoration Blog
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical advice, emergency guides, and insurance claim strategies written by certified Chicago water restoration professionals.
          </p>
        </div>

        {/* Featured Post Banner with Thumbnail */}
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full w-full min-h-[280px]">
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold uppercase">Featured Guide</span>
              <span className="text-slate-400 flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {blogPosts[0].date}</span>
              <span className="text-slate-400 flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {blogPosts[0].readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight hover:text-sky-400 transition leading-tight">
              <Link href={blogPosts[0].slug}>{blogPosts[0].title}</Link>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {blogPosts[0].excerpt}
            </p>

            <div className="pt-2">
              <Link
                href={blogPosts[0].slug}
                className="inline-flex items-center space-x-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl transition text-sm shadow"
              >
                <span>Read Featured Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Post Grid with Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {blogPosts.slice(1).map((post, idx) => (
            <article
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="font-bold text-xs text-sky-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center text-xs text-slate-500 space-x-3">
                    <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    <Link href={post.slug}>{post.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs border-t border-slate-200/60 mt-4">
                <span className="text-slate-500 font-medium">{post.author}</span>
                <Link
                  href={post.slug}
                  className="inline-flex items-center font-bold text-sky-600 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
