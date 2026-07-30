import React from 'react';
import { Clock, ShieldCheck, Zap, DollarSign, Award, CheckCircle2 } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      icon: Clock,
      title: "24/7 Immediate Dispatch",
      description: "60-minute guaranteed arrival anywhere in Chicago",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: ShieldCheck,
      title: "Licensed & Insured Partners",
      description: "Certified IICRC water restoration technicians",
      color: "text-sky-600",
      bgColor: "bg-sky-50",
    },
    {
      icon: DollarSign,
      title: "Direct Insurance Billing",
      description: "We bill your insurance company directly for zero hassle",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Award,
      title: "Free On-Site Inspection",
      description: "No-obligation assessment & upfront pricing estimate",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`p-3 rounded-xl ${badge.bgColor} ${badge.color} shrink-0`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
