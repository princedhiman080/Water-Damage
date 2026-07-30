'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

interface Props {
  posts: BlogPost[];
  itemsPerPage?: number;
}

export function BlogPaginatedGrid({ posts, itemsPerPage = 10 }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12">
      {/* Featured Banner Post on Page 1 */}
      {currentPage === 1 && currentPosts.length > 0 && (
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:shadow-2xl transition-all duration-300">
          <div className="relative h-64 lg:h-auto lg:col-span-7 overflow-hidden">
            <Image
              src={currentPosts[0].image}
              alt={currentPosts[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          <div className="p-8 sm:p-12 lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="bg-sky-500 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                {currentPosts[0].category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-tight">
                <Link href={currentPosts[0].slug}>{currentPosts[0].title}</Link>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">{currentPosts[0].excerpt}</p>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-4 text-xs text-slate-500">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-sky-500" />
                  <span>{currentPosts[0].date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-sky-500" />
                  <span>{currentPosts[0].readTime}</span>
                </span>
              </div>
              <Link
                href={currentPosts[0].slug}
                className="w-full bg-slate-900 hover:bg-sky-600 text-white font-extrabold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 text-sm transition-colors shadow"
              >
                <span>Read Full Comprehensive Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(currentPage === 1 ? currentPosts.slice(1) : currentPosts).map((post, idx) => (
          <article
            key={idx}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 mt-4 space-y-4">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-sky-500" />
                  <span>{post.date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-sky-500" />
                  <span>{post.readTime}</span>
                </span>
              </div>
              <Link
                href={post.slug}
                className="inline-flex items-center text-xs font-bold text-sky-600 hover:text-sky-700 group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-3 pt-8 border-t border-slate-200">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`w-11 h-11 rounded-xl text-sm font-extrabold transition-all shadow-xs ${
                currentPage === pageNum
                  ? 'bg-sky-600 text-white shadow-sky-500/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Next Page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
