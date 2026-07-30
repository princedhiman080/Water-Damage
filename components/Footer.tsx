import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldAlert, Award } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company & NAP */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-slate-900 border border-sky-400/30 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Chicago Water Damage Restoration Mascot"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                CHICAGO WATER DAMAGE
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              24/7 Emergency water extraction, flood damage restoration, and structural drying network serving Chicago homeowners and commercial property managers.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${siteConfig.phoneTel}`} className="text-white font-bold hover:text-sky-400">
                  {siteConfig.phone} (24/7 Emergency)
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Emergency Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">
              Restoration Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services/water-damage-restoration" className="hover:text-sky-400 transition-colors">
                  Water Damage Restoration
                </Link>
              </li>
              <li>
                <Link href="/services/flood-damage-cleanup" className="hover:text-sky-400 transition-colors">
                  Flood Damage Cleanup
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-water-extraction" className="hover:text-sky-400 transition-colors">
                  Emergency Water Extraction
                </Link>
              </li>
              <li>
                <Link href="/services/basement-water-damage-repair" className="hover:text-sky-400 transition-colors">
                  Basement Water Repair
                </Link>
              </li>
              <li>
                <Link href="/services/mold-remediation" className="hover:text-sky-400 transition-colors">
                  Mold Remediation & Removal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Local Chicago Areas */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">
              Chicago Neighborhoods
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/chicago/water-damage-restoration" className="hover:text-sky-400 transition-colors">
                  Chicago (City Wide)
                </Link>
              </li>
              <li>
                <Link href="/chicago/lincoln-park" className="hover:text-sky-400 transition-colors">
                  Lincoln Park (60614)
                </Link>
              </li>
              <li>
                <Link href="/chicago/logan-square" className="hover:text-sky-400 transition-colors">
                  Logan Square (60647)
                </Link>
              </li>
              <li>
                <Link href="/chicago/wicker-park" className="hover:text-sky-400 transition-colors">
                  Wicker Park (60622)
                </Link>
              </li>
              <li>
                <Link href="/chicago/west-loop" className="hover:text-sky-400 transition-colors">
                  West Loop (60607)
                </Link>
              </li>
              <li>
                <Link href="/chicago/south-side" className="hover:text-sky-400 transition-colors">
                  South Side (60615/60637)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance & Legal */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">
              Quick Links & Legal
            </h3>
            <div className="flex flex-col space-y-2.5 text-xs">
              <Link href="/about" className="hover:text-sky-400 transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="hover:text-sky-400 transition-colors">
                Blog & Emergency Guides
              </Link>
              <Link href="/faq" className="hover:text-sky-400 transition-colors">
                FAQ & Costs
              </Link>
              <Link href="/contact" className="hover:text-sky-400 transition-colors">
                Contact & Dispatch
              </Link>
              <Link href="/privacy-policy" className="hover:text-sky-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-sky-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/disclaimer" className="hover:text-sky-400 transition-colors">
                Legal Disclaimer
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Chicago Water Damage Restoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
