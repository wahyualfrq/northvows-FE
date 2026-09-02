import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function TrustMetricsSection() {
  const { language } = useLanguage();
  const t = translations[language].trust;

  const trustMetrics = [
    {
      value: "500+",
      title: t.completedProjects,
      subtitle: t.completedProjectsSub,
      highlightColor: "text-navy"
    },
    {
      value: "100+",
      title: t.studentClients,
      subtitle: t.studentClientsSub,
      highlightColor: "text-primary"
    },
    {
      value: "4.9",
      isRating: true,
      title: t.satisfactionRating,
      subtitle: t.satisfactionRatingSub,
      highlightColor: "text-navy"
    },
    {
      value: "< 15 Mnt",
      title: t.fastResponse,
      subtitle: t.fastResponseSub,
      highlightColor: "text-primary"
    }
  ];

  return (
    <section className="border-y border-slate-100 bg-surface/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustMetrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {metric.isRating ? (
                <div className="flex items-center gap-1">
                  <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${metric.highlightColor}`}>{metric.value}</span>
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                </div>
              ) : (
                <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${metric.highlightColor}`}>{metric.value}</span>
              )}
              <span className="text-sm font-semibold text-slate-700 mt-1">{metric.title}</span>
              <span className="text-xs text-mutedText">{metric.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
