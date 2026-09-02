import React from 'react';
import { Layers } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Small Blue Pill Badge with Icon */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
          <Layers className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-wide">Solusi Layanan Lengkap</span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slateText mb-4">
          Layanan Unggulan NorthVows
        </h2>
        <p className="text-base text-mutedText max-w-2xl mx-auto mb-16">
          Dikerjakan langsung oleh tim expert yang berfokus pada kerapian, ketepatan deadline, dan garansi nilai terbaik.
        </p>

        {/* 6-Grid Clean Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.id}
              iconName={service.iconName}
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
