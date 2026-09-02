import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-slate-200 rounded-2xl p-5 hover:border-primary/40 transition-colors">
      <button 
        className="w-full flex justify-between items-center text-left font-bold text-slateText text-sm sm:text-base focus:outline-none" 
        onClick={onToggle}
      >
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div 
          className="faq-content mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-mutedText leading-relaxed"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}
