import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import PortfolioCard from '../components/PortfolioCard';
import { portfolioData } from '../data/portfolioData';

export default function PortfolioSection({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { key: 'all', label: 'Semua' },
    { key: 'web', label: 'Website' },
    { key: 'uiux', label: 'UI/UX' },
    { key: 'ppt', label: 'PPT & Deck' },
    { key: 'code', label: 'Coding' }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-surface border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-3">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slateText">
              Featured Portfolio
            </h2>
            <p className="text-mutedText text-sm sm:text-base mt-2 max-w-xl">
              Hasil karya pengerjaan tugas & project klien mahasiswa dengan standar pengerjaan profesional dan rapi.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0" id="portfolioFilter">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                  activeFilter === tab.key
                    ? 'bg-navy text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Behance Style Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} onOpenModal={onOpenModal} />
          ))}
        </div>

      </div>
    </section>
  );
}
