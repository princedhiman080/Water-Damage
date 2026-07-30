'use client';

import React from 'react';
import { Phone, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export function StickyMobileCall() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-2 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 shadow-2xl">
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="flex items-center justify-center space-x-2 w-full bg-red-600 active:bg-red-700 text-white py-2.5 px-3 rounded-lg font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-[0.98]"
      >
        <Phone className="w-4 h-4 animate-bounce shrink-0" />
        <span>CALL NOW (24/7): {siteConfig.phone}</span>
        <Zap className="w-3.5 h-3.5 text-yellow-300 fill-current shrink-0" />
      </a>
    </div>
  );
}
