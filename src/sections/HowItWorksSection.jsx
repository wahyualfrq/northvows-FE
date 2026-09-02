import React from 'react';
import { Workflow } from 'lucide-react';
import { howItWorksData } from '../data/howItWorksData';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-surface border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
          <Workflow className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-wide">Tahapan Pengerjaan</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slateText mb-4">
          How It Works
        </h2>
        <p className="text-mutedText text-sm sm:text-base max-w-xl mx-auto mb-20">
          Proses pemesanan transparan, cepat, dan terstruktur dalam 5 langkah mudah.
        </p>

        {/* Timeline Connector Node System */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-7 left-[8%] right-[8%] h-0.5 bg-blue-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {howItWorksData.map((item, idx) => {
              let circleStyle = "w-14 h-14 rounded-full bg-white text-navy font-extrabold text-base flex items-center justify-center shadow-card border-4 border-slate-100 mb-6 group-hover:scale-110 group-hover:border-primary transition-all";
              
              if (item.isPrimary) {
                circleStyle = "w-14 h-14 rounded-full bg-primary text-white font-extrabold text-base flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-white mb-6 group-hover:scale-110 transition-transform";
              } else if (item.isNavy) {
                circleStyle = "w-14 h-14 rounded-full bg-navy text-white font-extrabold text-base flex items-center justify-center shadow-lg shadow-navy/30 border-4 border-white mb-6 group-hover:scale-110 transition-transform";
              }

              return (
                <div key={idx} className="flex flex-col items-center group">
                  <div className={circleStyle}>
                    {item.step}
                  </div>
                  <h4 className="text-sm font-bold text-slateText mb-2">{item.title}</h4>
                  <p className="text-xs text-mutedText leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
