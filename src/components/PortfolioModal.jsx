import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function PortfolioModal({ isOpen, modalData, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !modalData) return null;

  return (
    <div 
      id="portfolioModal" 
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target.id === 'portfolioModal') onClose();
      }}
    >
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 transform transition-all">
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span id="modalCategory" className="text-xs font-bold text-primary px-2.5 py-1 bg-blue-50 rounded-full">{modalData.category}</span>
            <h3 id="modalTitle" className="text-lg font-bold text-slateText mt-2">{modalData.title}</h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-5 space-y-4">
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Teknologi & Tools</h4>
            <p id="modalTech" className="text-xs font-medium text-navy bg-surface p-2.5 rounded-xl border border-slate-100">{modalData.tech}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Deskripsi Pengerjaan</h4>
            <p id="modalDesc" className="text-xs text-mutedText leading-relaxed">{modalData.desc}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex gap-3">
          <button 
            onClick={onClose} 
            className="w-1/2 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            Tutup
          </button>
          <a 
            id="modalOrderBtn" 
            href="#contact" 
            onClick={onClose} 
            className="w-1/2 py-2.5 text-xs font-semibold text-white bg-primary hover:bg-navy rounded-xl text-center transition-colors flex items-center justify-center"
          >
            Pesan Serupa
          </a>
        </div>
      </div>
    </div>
  );
}
