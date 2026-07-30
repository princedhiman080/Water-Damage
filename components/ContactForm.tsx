'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ContactForm({
  title = "Request Immediate 24/7 Assistance",
  subtitle = "Fill out this form for a 60-minute callback & free on-site estimate.",
  className = ""
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: 'Water Damage Restoration',
    urgency: 'Emergency - Immediate (60 Mins)',
    description: '',
    websiteHoneypot: '', // Honeypot field for spam prevention
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Client-side basic validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Phone, Address).');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          serviceType: 'Water Damage Restoration',
          urgency: 'Emergency - Immediate (60 Mins)',
          description: '',
          websiteHoneypot: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please call our 24/7 hotline directly.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please call our 24/7 emergency hotline directly.');
    }
  };

  return (
    <div className={`bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-xl relative overflow-hidden ${className}`}>
      {/* Form Header */}
      <div className="mb-4">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          {subtitle}
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl p-5 text-center space-y-3">
          <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-bold">Request Received!</h4>
          <p className="text-xs sm:text-sm text-emerald-800">
            Our dispatch coordinator has received your emergency details and will call you within 5-15 minutes.
          </p>
          <div className="pt-1">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Honeypot field (hidden from human users) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="websiteHoneypot"
              tabIndex={-1}
              value={formData.websiteHoneypot}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-3 text-xs sm:text-sm flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="name" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-slate-900 text-xs sm:text-sm outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="(000) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-slate-900 text-xs sm:text-sm outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="email" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-slate-900 text-xs sm:text-sm outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Property Address/Zip <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="Lincoln Park, 60614"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-slate-900 text-xs sm:text-sm outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="serviceType" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Required Service
              </label>
              <div className="relative">
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-slate-900 text-xs sm:text-sm outline-none bg-white transition truncate cursor-pointer appearance-none pr-8"
                >
                  <option value="Water Damage Restoration">Water Damage Restoration</option>
                  <option value="Flood Damage Cleanup">Flood Cleanup</option>
                  <option value="Emergency Water Extraction">Water Extraction</option>
                  <option value="Basement Water Damage Repair">Basement Repair</option>
                  <option value="Mold Remediation">Mold Remediation</option>
                  <option value="Other / Free Inspection">Free Inspection</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="urgency" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Urgency Level
              </label>
              <div className="relative">
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-red-600 font-semibold text-xs sm:text-sm outline-none bg-white transition truncate cursor-pointer appearance-none pr-8"
                >
                  <option value="Emergency - Immediate (60 Mins)">Emergency (60-Min)</option>
                  <option value="Same Day Inspection">Same-Day Inspection</option>
                  <option value="Next 24 Hours">Within 24 Hours</option>
                  <option value="General Quote / Inquiry">General Quote</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Brief Description of Issue
            </label>
            <textarea
              id="description"
              name="description"
              rows={2}
              placeholder="e.g. Burst pipe in basement, standing water about 2 inches high."
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 text-slate-900 text-xs sm:text-sm outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold py-3 sm:py-3.5 px-6 rounded-xl shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center space-x-2 text-xs sm:text-sm cursor-pointer disabled:opacity-75"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Lead...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>REQUEST IMMEDIATE DISPATCH & ESTIMATE</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-400 text-center mt-1.5 leading-tight">
            🔒 Your privacy is respected. Direct phone response within 5-15 mins.
          </p>
        </form>
      )}
    </div>
  );
}
