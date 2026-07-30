import React from 'react';
import Link from 'next/link';
import { MapPin, Navigation } from 'lucide-react';

export function ChicagoMapGrid() {
  const neighborhoods = [
    {
      name: "Chicago (Main City)",
      slug: "/chicago/water-damage-restoration",
      zip: "60601-60661",
      desc: "Full coverage across Loop, North & South Sides",
      isPrimary: true,
    },
    {
      name: "Lincoln Park",
      slug: "/chicago/lincoln-park",
      zip: "60614",
      desc: "Historic brownstone & residential emergency extraction",
    },
    {
      name: "Logan Square",
      slug: "/chicago/logan-square",
      zip: "60647",
      desc: "Basement flood cleanup & pipe repair specialists",
    },
    {
      name: "Wicker Park",
      slug: "/chicago/wicker-park",
      zip: "60622",
      desc: "Commercial & condo unit structural drying",
    },
    {
      name: "West Loop",
      slug: "/chicago/west-loop",
      zip: "60607",
      desc: "High-rise & loft emergency water removal",
    },
    {
      name: "South Side",
      slug: "/chicago/south-side",
      zip: "60615 - 60637",
      desc: "Hyde Park, Bronzeville & South Side response",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-sky-500/20 text-sky-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-sky-500/30">
            <Navigation className="w-4 h-4" />
            <span>Chicago Local Service Areas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Serving Chicago, IL & Surrounding Neighborhoods
          </h2>
          <p className="text-base text-slate-300 mt-3 max-w-2xl mx-auto">
            Our network of mobile restoration trucks are stationed throughout Cook County for rapid 60-minute emergency arrival.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((item, idx) => (
            <Link
              key={idx}
              href={item.slug}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between group ${
                item.isPrimary
                  ? 'bg-gradient-to-br from-sky-900 to-slate-800 border-sky-500 shadow-lg shadow-sky-950 hover:border-sky-400'
                  : 'bg-slate-800/80 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sky-400 font-bold">
                    <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="text-lg text-white group-hover:text-sky-400 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono bg-slate-700 text-slate-300 px-2.5 py-1 rounded-md">
                    ZIP {item.zip}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 flex items-center text-xs font-bold text-sky-400 group-hover:translate-x-1 transition-transform">
                <span>View {item.name} Service Details</span>
                <span className="ml-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
