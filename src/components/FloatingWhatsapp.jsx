import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingWhatsapp() {
  const { language } = useLanguage();
  
  const tooltipText = language === 'id' ? 'Chat Admin WA' : 'Chat WA Admin';
  const waUrl = "https://wa.me/6282381409388?text=Halo%20NorthVows,%20saya%20mau%20konsultasi%20tugas";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
      {/* Tooltip Label */}
      <span className="hidden sm:inline-block bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {tooltipText}
      </span>

      {/* Floating WA Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact WhatsApp"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none"></span>
        <MessageCircle className="w-7 h-7 relative z-10 fill-white/20 stroke-[2.2]" />
      </a>
    </div>
  );
}
