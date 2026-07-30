import React from 'react';
import { List, ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

interface BlogTableOfContentsProps {
  items: TOCItem[];
}

export function BlogTableOfContents({ items }: BlogTableOfContentsProps) {
  return (
    <div className="hidden lg:block bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm">
      <div className="flex items-center space-x-2 font-extrabold text-slate-900 text-sm mb-4 border-b border-slate-200 pb-3">
        <List className="w-4 h-4 text-sky-600" />
        <span>Table of Contents</span>
      </div>
      <ol className="space-y-2.5 text-xs">
        {items.map((item, idx) => (
          <li key={idx}>
            <a
              href={`#${item.id}`}
              className="flex items-start space-x-2 text-slate-600 hover:text-sky-600 font-medium transition-colors py-0.5"
            >
              <ChevronRight className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
