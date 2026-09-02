import React from 'react';
import { Layers } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const serviceIcons = {
  ppt: 'Presentation',
  uiux: 'Figma',
  web: 'Globe',
  coding: 'Code2',
  cv: 'FileCheck2',
  academic: 'GraduationCap'
};

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Small Blue Pill Badge with Icon */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
          <Layers className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-wide">{t.badge}</span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slateText mb-4">
          {t.title}
        </h2>
        <p className="text-base text-mutedText max-w-2xl mx-auto mb-16">
          {t.subtitle}
        </p>

        {/* 6-Grid Clean Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {t.items.map((service) => (
            <ServiceCard 
              key={service.id}
              iconName={serviceIcons[service.id]}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
