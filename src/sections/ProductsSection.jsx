import React, { useState } from 'react';
import { ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/productsData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function ProductsSection() {
  const { language } = useLanguage();
  const t = translations[language].products;
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slateText mb-4">
            {t.title}
          </h2>
          <p className="text-mutedText text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product, idx) => (
            <div 
              key={product.id} 
              className={`reveal-on-scroll delay-${((idx % 3) + 1) * 100} ${
                idx >= 3 && !showAllMobile ? 'hidden md:block' : 'block'
              }`}
            >
              <ProductCard item={product} />
            </div>
          ))}
        </div>

        {/* Mobile Expand / Collapse Button */}
        {productsData.length > 3 && (
          <div className="mt-10 flex justify-center md:hidden">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-all border border-slate-200/80 shadow-sm active:scale-95"
            >
              {showAllMobile ? (
                <>
                  <span>{language === 'id' ? 'Tampilkan Lebih Sedikit' : 'Show Less'}</span>
                  <ChevronUp className="w-4 h-4 text-primary" />
                </>
              ) : (
                <>
                  <span>{language === 'id' ? 'Lihat Lebih Banyak' : 'Show More Products'}</span>
                  <ChevronDown className="w-4 h-4 text-primary" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

