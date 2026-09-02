import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function CtaSection() {
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <section className="bg-navy py-16 text-white relative overflow-hidden">
      {/* Ambient Lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-blue-200/90 max-w-2xl mx-auto mb-8">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://wa.me/6282381409388?text=Halo%20NorthVows,%20saya%20mau%20konsultasi%20tugas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-navy bg-white hover:bg-blue-50 rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-primary" />
            {t.waBtn}
          </a>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all flex items-center justify-center gap-2"
          >
            {t.portfolioBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
