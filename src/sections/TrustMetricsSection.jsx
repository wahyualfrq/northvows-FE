import React from 'react';
import { Star } from 'lucide-react';
import { trustMetricsData } from '../data/trustMetricsData';

export default function TrustMetricsSection() {
  return (
    <section className="border-y border-slate-100 bg-surface/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustMetricsData.map((metric, idx) => (
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
