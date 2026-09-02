import React from 'react';
import { Download } from 'lucide-react';

export default function ProductCard({ item }) {
  const {
    categoryBadge,
    badgeClasses,
    price,
    title,
    description,
    downloadType,
    waText
  } = item;

  const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(waText)}`;

  return (
    <div className="bg-surface rounded-2xl p-6 border border-slate-200/90 hover:border-primary/50 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className={`px-2.5 py-1 text-[11px] font-bold rounded-lg ${badgeClasses}`}>{categoryBadge}</span>
          <span className="text-sm font-extrabold text-navy">{price}</span>
        </div>
        <h4 className="text-base font-bold text-slateText mb-2">{title}</h4>
        <p className="text-xs text-mutedText leading-relaxed mb-4">
          {description}
        </p>
      </div>
      <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
        <span className="text-[11px] font-medium text-slate-500">
          <Download className="w-3.5 h-3.5 inline mr-1 text-primary" /> {downloadType}
        </span>
        <a 
          href={waUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-3.5 py-1.5 bg-primary hover:bg-navy text-white text-xs font-semibold rounded-lg transition-colors"
        >
          Beli Template
        </a>
      </div>
    </div>
  );
}
