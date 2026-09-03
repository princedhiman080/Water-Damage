import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Water Damage FAQ Chicago | Costs, Insurance & Response Times',
  description: 'Frequently asked questions about Chicago water damage restoration, costs, insurance coverage, mold prevention, and 24/7 response times.',
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

const comprehensiveFaqs = [
  {
    question: "How fast should I respond to water damage in Chicago?",
    answer: "You must act immediately. Water spreads rapidly into subfloors and wall cavities within minutes. Mold spores begin growing within 24 to 48 hours. Our Chicago emergency team arrives within 60 minutes to extract standing water and start dehumidification."
  },
  {
    question: "How much does water damage restoration cost in Chicago, IL?",
    answer: "Costs typically range from $1,200 to $4,500 for standard residential leaks, and $3,500 to $10,000+ for severe basement flooding or contaminated sewer backups. Standard homeowners insurance covers sudden burst pipes, water heater ruptures, and appliance leaks."
  },
  {
    question: "Do you bill my insurance company directly?",
    answer: "Yes. Our partner contractors take detailed thermal images, generate industry-standard Xactimate estimates, and bill your homeowners insurance carrier directly so you don't have to pay massive upfront costs out of pocket."
  },
  {
    question: "What should I do immediately after discovering a water leak in my home?",
    answer: "1) Shut off the main water valve immediately. 2) Turn off electricity to flooded rooms at the circuit breaker. 3) Call our 24/7 hotline at (630) 241-6800. 4) Take photos of damage for insurance. 5) Avoid walking through contaminated standing water."
  },
  {
    question: "Can carpet and hardwood floors be saved after water damage?",
    answer: "If water extraction begins within 24 hours of clean water intrusion (Category 1), hardwood floors and carpet can often be salvaged using weighted extraction rovers and industrial LGR dehumidifiers. Contaminated sewer water (Category 3) requires replacing carpet padding and porous materials."
  },
  {
    question: "What Chicago neighborhoods do you service?",
    answer: "We service all 77 Chicago community areas including Lincoln Park, Logan Square, Wicker Park, West Loop, South Side, Lakeview, Gold Coast, River North, Hyde Park, and surrounding Cook County suburbs."
  }
];

export default function FAQPage() {
  return (
    <div className="py-12 bg-white">
      <FAQSection
        faqs={comprehensiveFaqs}
        title="Chicago Water Damage Comprehensive FAQ"
        subtitle="Clear, factual answers to help you navigate emergency water extraction, insurance claims, and restoration costs."
      />
    </div>
  );
}
