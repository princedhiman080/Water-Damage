'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getFAQSchema } from '@/lib/schema';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "How fast should I respond to water damage in Chicago?",
    answer: "You should respond immediately, ideally within 24 to 48 hours. Water damage escalates rapidly: within minutes, water saturates drywall and flooring; within 24 hours, toxic mold spores begin germinating. Our Chicago dispatch team guarantees arrival within 60 minutes to stop active leaks and begin industrial water extraction."
  },
  {
    question: "How much does water damage restoration cost in Chicago, IL?",
    answer: "Water damage restoration costs in Chicago typically range from $1,200 to $4,500 for standard residential leaks, while severe basement flood cleanup or burst pipe extraction can range from $3,500 to $10,000+. Most homeowner insurance policies cover sudden burst pipes and clean water damage. We bill your insurance provider directly so you pay minimal out-of-pocket costs."
  },
  {
    question: "Will homeowners insurance cover water damage restoration in Chicago?",
    answer: "Yes, standard Chicago homeowners insurance policies cover sudden and accidental water damage, such as burst frozen pipes, water heater ruptures, or washing machine hose failures. Gradual leaks, lack of maintenance, or overland weather flooding may require flood insurance (FEMA) or a sump pump failure endorsement. We assist with filing insurance claims."
  },
  {
    question: "What is the water restoration process after a burst pipe or basement flood?",
    answer: "The 5-step restoration process includes: 1) Immediate emergency dispatch & safety inspection, 2) Water extraction using high-capacity truck-mounted pumps, 3) Removal of unsalvageable wet materials, 4) Structural drying & dehumidification using commercial air movers, and 5) Antimicrobial sanitization & mold prevention."
  },
  {
    question: "What neighborhoods in Chicago do you cover for emergency water extraction?",
    answer: "We cover all 77 Chicago community areas and surrounding Cook County neighborhoods 24/7/365, including Lincoln Park, Logan Square, Wicker Park, West Loop, South Side, Lakeview, River North, Hyde Park, and Gold Coast."
  }
];

export function FAQSection({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions (Chicago Water Damage)",
  subtitle = "Direct answers to common questions about costs, response times, and insurance coverage."
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = getFAQSchema(faqs);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Schema.org FAQPage Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Answer Engine Optimized (AEO)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-900 flex items-center justify-between text-base sm:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-700 text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
