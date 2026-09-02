import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function ContactSection({ onShowToast }) {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'PPT Design & Sidang',
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

    const waText = `*Halo Admin NorthVows, Saya Ingin Konsultasi Tugas*%0A%0A` +
      `👤 *Nama:* ${encodeURIComponent(name)}%0A` +
      `📱 *No. WhatsApp:* ${encodeURIComponent(phone)}%0A` +
      `📌 *Layanan:* ${encodeURIComponent(service)}%0A` +
      `📅 *Deadline:* ${encodeURIComponent(deadline)}%0A` +
      `📝 *Detail Tugas:*%0A${encodeURIComponent(message)}%0A%0A` +
      `_Mohon estimasi biaya dan waktu pengerjaannya ya min. Terima kasih!_`;

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
        
        <div className="text-center mb-12">
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
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card">
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
                  className="w-full px-4 py-3 text-sm bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" 
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
                  className="w-full px-4 py-3 text-sm bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.serviceLabel}</label>
                <select 
                  id="service" 
                  required 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-slate-700"
                >
                  {t.serviceOptions.map((opt, idx) => (
                    <option key={idx} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
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
                className="w-full px-4 py-3 text-sm bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full py-4 text-base font-semibold text-white bg-primary hover:bg-navy rounded-xl shadow-lg shadow-primary/20 hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{t.submitBtn}</span>
                <ArrowRight className="w-4 h-4" />
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
