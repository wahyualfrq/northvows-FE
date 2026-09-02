import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function ProductCard({ item }) {
  const { language } = useLanguage();
  const t = translations[language].products;

  const {
    categoryBadge,
    badgeClasses,
    price,
    waText
  } = item;

  const langProduct = t.items.find(p => p.id === item.id) || item;
  const title = langProduct.title;
  const description = langProduct.description;

  const waUrl = `https://wa.me/6282381409388?text=${encodeURIComponent(langProduct.waText || waText)}`;

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
      <div className="pt-4 border-t border-slate-200/70">
        <a 
          href={waUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full inline-flex items-center justify-center py-2.5 bg-primary hover:bg-navy text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
        >
          {t.buyBtn}
        </a>
      </div>
    </div>
  );
}
