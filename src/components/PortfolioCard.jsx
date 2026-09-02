import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioCard({ item, onOpenModal }) {
  const {
    category,
    badgeText,
    techTag,
    categoryLabel,
    title,
    description,
    techSummary,
    gradientClasses,
    modalCategory,
    modalTech,
    modalDesc,
    cardMockup
  } = item;

  return (
    <div className="portfolio-item group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col" data-category={category}>
      <div className={`relative h-60 bg-gradient-to-br ${gradientClasses} overflow-hidden p-6 flex flex-col justify-between text-white`}>
        <div className="flex justify-between items-start z-10">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] font-semibold">{badgeText}</span>
          <span className="text-xs font-mono bg-navy/80 px-2 py-0.5 rounded text-blue-200">{techTag}</span>
        </div>

        {/* Visual Mockup inside card */}
        <div className="bg-white/95 rounded-xl p-4 text-slate-800 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
          {item.id === 'spk-skripsi' && (
            <>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                <span className="text-[10px] text-slate-400 font-mono ml-2">{cardMockup.url}</span>
              </div>
              <div className="h-10 bg-slate-100 rounded-lg flex items-center justify-between px-3 text-xs">
                <span className="font-bold text-navy">{cardMockup.mainText}</span>
                <span className="text-emerald-600 font-semibold text-[10px]">{cardMockup.subText}</span>
              </div>
            </>
          )}

          {item.id === 'unilink-uiux' && (
            <>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-purple-900">{cardMockup.title}</span>
                <span className="text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-bold">{cardMockup.badge}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="bg-purple-50 p-2 rounded text-center font-medium">{cardMockup.tags[0]}</div>
                <div className="bg-blue-50 p-2 rounded text-center font-medium">{cardMockup.tags[1]}</div>
              </div>
            </>
          )}

          {item.id === 'deck-skripsi' && (
            <>
              <div className="text-xs font-bold text-teal-950 mb-1">{cardMockup.title}</div>
              <div className="w-full bg-slate-100 rounded-lg p-2 flex items-center justify-between text-[11px]">
                <span className="text-slate-600">{cardMockup.subText}</span>
                <span className="font-bold text-teal-700">{cardMockup.info}</span>
              </div>
            </>
          )}

          {item.id === 'ml-bert' && (
            <>
              <div className="text-xs font-mono text-slate-700 mb-1">{cardMockup.codeLine}</div>
              <div className="flex justify-between text-[11px] bg-amber-50 p-2 rounded border border-amber-100">
                <span>Accuracy: <strong className="text-amber-800">{cardMockup.accuracy}</strong></span>
                <span>F1-Score: <strong className="text-amber-800">{cardMockup.f1Score}</strong></span>
              </div>
            </>
          )}

          {item.id === 'tiket-react' && (
            <>
              <div className="text-xs font-bold text-cyan-900 mb-1.5">Scanner Barcode & Check-in</div>
              <div className="h-2 bg-slate-200 rounded w-full overflow-hidden">
                <div className="bg-cyan-500 h-full w-4/5"></div>
              </div>
            </>
          )}

          {item.id === 'kantin-flutter' && (
            <>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <span className="text-xs font-bold text-navy">{cardMockup.title}</span>
              </div>
              <div className="text-[10px] text-slate-500">{cardMockup.subtitle}</div>
            </>
          )}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-semibold text-primary mb-1">{categoryLabel}</div>
          <h3 className="text-lg font-bold text-slateText group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-xs text-mutedText mt-2 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
          <span>{techSummary}</span>
          <button 
            onClick={() => onOpenModal({
              title,
              category: modalCategory,
              tech: modalTech,
              desc: modalDesc
            })} 
            className="text-primary font-bold hover:underline flex items-center gap-1"
          >
            Detail <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
