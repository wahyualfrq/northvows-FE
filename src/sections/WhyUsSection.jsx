import React from 'react';
import { 
  Award, 
  Lock, 
  RefreshCw, 
  Zap, 
  CheckCheck, 
  Headphones, 
  BadgePercent 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const iconMap = {
  Zap,
  CheckCheck,
  Headphones,
  BadgePercent
};

const pointIcons = ['Zap', 'CheckCheck', 'Headphones', 'BadgePercent'];

export default function WhyUsSection() {
  const { language } = useLanguage();
  const t = translations[language].whyUs;

  return (
    <section className="py-24 bg-surface border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Highlight */}
          <div className="lg:col-span-5 relative">
            <div className="w-full bg-gradient-to-tr from-primary to-accent rounded-3xl p-8 sm:p-10 text-white shadow-glow relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-extrabold leading-snug mb-3">
                {t.title}
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-6">
                {t.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                  <Lock className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-semibold">{t.badge1}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                  <RefreshCw className="w-4 h-4 text-blue-200" />
                  <span className="text-xs font-semibold">{t.badge2}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Value Points */}
          <div className="lg:col-span-7 space-y-6">
            {t.points.map((item, idx) => {
              const IconComp = iconMap[pointIcons[idx]] || Zap;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-1">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slateText mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
