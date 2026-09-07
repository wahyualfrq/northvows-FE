import React, { useState } from 'react';
import { Send, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function ContactSection({ onShowToast }) {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: t.serviceOptions[0].value,
    deadline: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, deadline, message } = formData;

    const rawMessage = `Halo Min Vows, Saya ingin Konsultasi:

Nama: ${name}
No. Whatsapp: ${phone}
Layanan: ${service}
Deadline: ${deadline}
Detail Tugas: ${message}

Mohon estimasi biaya dan waktu pengerjaannya ya min. Terima kasih!`;

    const waText = encodeURIComponent(rawMessage);

    if (onShowToast) {
      onShowToast(translations[language].toast.redirecting);
    }

    setTimeout(() => {
      window.open(`https://wa.me/6282381409388?text=${waText}`, '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-surface border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-3">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slateText mb-3">
            {t.title}
          </h2>
          <p className="text-mutedText text-sm sm:text-base max-w-lg mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-card reveal-on-scroll delay-100">
          <form id="orderForm" onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.nameLabel}</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder} 
                  className="w-full px-4 py-3 text-sm bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-slate-700" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.phoneLabel}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phonePlaceholder} 
                  className="w-full px-4 py-3 text-sm bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-slate-700" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.serviceLabel}</label>
                <div className="relative">
                  <select 
                    id="service" 
                    required 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 pr-10 py-3 text-sm bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-slate-700 font-medium appearance-none cursor-pointer"
                  >
                    {t.serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.deadlineLabel}</label>
                <input 
                  type="date" 
                  id="deadline" 
                  required 
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-slate-700" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.messageLabel}</label>
              <textarea 
                id="message" 
                required 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder} 
                className="w-full px-4 py-3 text-sm bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-slate-700"
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full py-3.5 sm:py-4 px-3 sm:px-4 text-xs xs:text-sm sm:text-base font-bold sm:font-semibold text-white bg-primary hover:bg-navy rounded-xl shadow-lg shadow-primary/20 hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.99]"
              >
                <span className="whitespace-nowrap sm:whitespace-normal">{t.submitBtn}</span>
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-center text-[11px] text-mutedText mt-3">
                {t.privacyNote}
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
