import React, { useState } from 'react';
import { MessageSquare, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const currentTesti = testimonialsData[activeIndex];

  const handleAvatarClick = (index) => {
    if (index === activeIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 150);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-50 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-blue-50/60 rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
          <MessageSquare className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-wide">{t.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slateText mb-4">
          {t.title}
        </h2>
        <p className="text-mutedText text-sm sm:text-base max-w-xl mx-auto mb-16">
          {t.subtitle}
        </p>

        {/* Orbiting Avatar Constellation Graphic & Interactive Center Highlight */}
        <div className="relative py-8">
          
          {/* Orbiting Avatars */}
          <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap mb-10">
            {testimonialsData.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button 
                  key={idx}
                  onClick={() => handleAvatarClick(idx)} 
                  className={`testi-avatar p-1 rounded-full border-2 transition-all duration-300 ${
                    isActive 
                      ? 'active border-primary scale-110 shadow-md' 
                      : 'border-transparent hover:border-primary/50'
                  }`}
                >
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className={`${isActive ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-10 h-10 sm:w-12 sm:h-12'} rounded-full object-cover`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Editorial Center Quote Box */}
          <div className="max-w-2xl mx-auto bg-surface/80 p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card relative">
            <div className="text-primary text-4xl font-serif mb-2 leading-none">“</div>
            <p 
              id="testiQuote" 
              className={`text-base sm:text-lg font-medium text-slateText leading-relaxed mb-6 italic transition-opacity duration-150 ${isFading ? 'opacity-0' : 'opacity-100'}`}
            >
              "{currentTesti.quote}"
            </p>
            <div className={`transition-opacity duration-150 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <h4 id="testiAuthor" className="text-base font-bold text-navy">{currentTesti.name}</h4>
              <p id="testiRole" className="text-xs text-mutedText">{currentTesti.role}</p>
              <div className="flex justify-center items-center gap-1 mt-3">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold text-slate-700 ml-1.5">{t.verified}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
