'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, ShieldCheck, Menu, X, AlertTriangle, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [companyOpenMobile, setCompanyOpenMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      {/* Emergency Alert Top Bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-amber-600 px-4 py-2 text-xs md:text-sm font-semibold flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-yellow-300 animate-pulse shrink-0" />
            <span>Chicago 24/7 Emergency Dispatch — 60 Min Arrival Guarantee</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-yellow-300" />
              <span>Available 365 Days</span>
            </span>
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Direct Insurance Billing</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden bg-slate-800 border border-sky-400/40 shadow-md shrink-0">
              <Image
                src="/logo.png"
                alt="Chicago Water Damage Restoration Mascot"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="text-sm sm:text-xl font-extrabold tracking-tight block text-white group-hover:text-sky-400 transition-colors leading-tight">
                CHICAGO WATER DAMAGE
              </span>
              <span className="text-[9px] sm:text-xs text-sky-400 font-semibold tracking-wider uppercase block leading-none mt-0.5">
                Restoration Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 text-xs xl:text-sm font-medium whitespace-nowrap">
            <Link href="/" className="hover:text-sky-400 transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-sky-400 transition-colors py-2">
                <span>Services</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              <div className="absolute top-full left-0 w-64 bg-slate-800 rounded-xl shadow-xl py-3 hidden group-hover:block border border-slate-700">
                <Link href="/services/water-damage-restoration" className="block px-4 py-2 hover:bg-slate-700 hover:text-sky-400 text-sm">
                  Water Damage Restoration
                </Link>
                <Link href="/services/flood-damage-cleanup" className="block px-4 py-2 hover:bg-slate-700 hover:text-sky-400 text-sm">
                  Flood Damage Cleanup
                </Link>
                <Link href="/services/emergency-water-extraction" className="block px-4 py-2 hover:bg-slate-700 hover:text-sky-400 text-sm">
                  Emergency Water Extraction
                </Link>
                <Link href="/services/basement-water-damage-repair" className="block px-4 py-2 hover:bg-slate-700 hover:text-sky-400 text-sm">
                  Basement Water Repair
                </Link>
                <Link href="/services/mold-remediation" className="block px-4 py-2 hover:bg-slate-700 hover:text-sky-400 text-sm">
                  Mold Remediation
                </Link>
              </div>
            </div>

            {/* Service Areas */}
            <Link href="/chicago/water-damage-restoration" className="hover:text-sky-400 transition-colors">
              Chicago Neighborhoods
            </Link>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-sky-400 transition-colors py-2">
                <span>Company</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              <div className="absolute top-full right-0 w-52 bg-slate-800 rounded-xl shadow-xl py-3 hidden group-hover:block border border-slate-700">
                <Link href="/about" className="block px-4 py-2 hover:bg-slate-700 hover:text-sky-400 text-sm">
                  About Us
                </Link>
                <Link href="/blog" className="block px-4 py-2 hover:bg-slate-700 hover:text-sky-400 text-sm">
                  Blog & Guides
                </Link>
                <Link href="/faq" className="block px-4 py-2 hover:bg-slate-700 hover:text-sky-400 text-sm">
                  FAQ
                </Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-slate-700 hover:text-sky-400 text-sm">
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>

          {/* Desktop Phone CTA */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center space-x-2 xl:space-x-3 bg-red-600 hover:bg-red-700 text-white px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-xl font-bold shadow-md hover:shadow-red-600/30 transition-all text-xs xl:text-sm"
            >
              <Phone className="w-4 h-4 xl:w-5 xl:h-5 animate-bounce shrink-0" />
              <div className="text-left">
                <span className="text-[9px] xl:text-[10px] uppercase tracking-wider block font-semibold text-red-200 leading-none">24/7 Hotline</span>
                <span className="text-xs xl:text-base leading-tight font-black">{siteConfig.phone}</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="bg-red-600 p-2 rounded-lg text-white font-bold sm:hidden"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-t-2 border-sky-500 px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-xs text-sky-400 font-extrabold uppercase tracking-wider pb-2.5 border-b border-slate-800">
            <span>Navigation Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white flex items-center space-x-1 font-bold text-xs"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-base font-extrabold text-white bg-slate-900 border border-slate-800 hover:border-sky-500 transition"
          >
            Home
          </Link>

          {/* Services Interactive Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setServicesOpenMobile(!servicesOpenMobile)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-base font-extrabold text-white hover:border-sky-500 transition cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 text-sky-400 transition-transform duration-200 ${servicesOpenMobile ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpenMobile && (
              <div className="pl-3 space-y-1 pt-1 border-l-2 border-sky-500/60 ml-2 animate-in fade-in duration-150">
                <Link
                  href="/services/water-damage-restoration"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-sky-400 font-medium"
                >
                  Water Damage Restoration
                </Link>
                <Link
                  href="/services/flood-damage-cleanup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-sky-400 font-medium"
                >
                  Flood Damage Cleanup
                </Link>
                <Link
                  href="/services/emergency-water-extraction"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-sky-400 font-medium"
                >
                  Emergency Water Extraction
                </Link>
                <Link
                  href="/services/basement-water-damage-repair"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-sky-400 font-medium"
                >
                  Basement Water Repair
                </Link>
                <Link
                  href="/services/mold-remediation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-sky-400 font-medium"
                >
                  Mold Remediation
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/chicago/water-damage-restoration"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-base font-extrabold text-white bg-slate-900 border border-slate-800 hover:border-sky-500 transition"
          >
            Chicago Neighborhoods
          </Link>

          {/* Company Interactive Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setCompanyOpenMobile(!companyOpenMobile)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-base font-extrabold text-white hover:border-sky-500 transition cursor-pointer"
            >
              <span>Company & Resources</span>
              <ChevronDown className={`w-4 h-4 text-sky-400 transition-transform duration-200 ${companyOpenMobile ? 'rotate-180' : ''}`} />
            </button>

            {companyOpenMobile && (
              <div className="pl-3 space-y-1 pt-1 border-l-2 border-slate-700 ml-2 animate-in fade-in duration-150">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-sky-400 font-medium"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-sky-400 font-medium"
                >
                  Blog & Guides
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-sky-400 font-medium"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-sky-400 font-medium"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="block text-center bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg mt-4 text-sm"
          >
            📞 CALL 24/7 HOTLINE: {siteConfig.phone}
          </a>
        </div>
      )}
    </header>
  );
}
