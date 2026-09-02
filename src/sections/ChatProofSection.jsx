import React, { useRef } from 'react';
import { MessageSquare, CheckCheck, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function ChatProofSection() {
  const { language } = useLanguage();
  const t = translations[language].chatProof;
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="chat-proof" className="py-24 bg-surface/80 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header - 100% Consistent with Site Layouting */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slateText mb-4">
            {t.title}
          </h2>
          <p className="text-mutedText text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* 3-Column Side-by-Side Horizontal Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {t.chats.map((chat) => (
            <div 
              key={chat.id} 
              className="w-full md:w-[calc(33.333%-16px)] shrink-0 snap-start bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              {chat.image ? (
                /* Custom Uploaded Screenshot Image Mode */
                <div className="p-3 bg-slate-50 flex-1 flex items-center justify-center">
                  <img 
                    src={chat.image} 
                    alt={chat.name} 
                    className="w-full h-auto rounded-2xl object-cover border border-slate-200 shadow-sm"
                  />
                </div>
              ) : (
                /* WhatsApp Mockup UI Mode */
                <>
                  {/* WhatsApp Top Header Bar */}
                  <div className="bg-[#075E54] text-white px-5 py-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm text-white border border-white/30">
                        {chat.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white truncate max-w-[140px]">{chat.name}</h4>
                        <p className="text-[10px] text-emerald-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> {chat.status}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-white/15 rounded-full text-emerald-100 border border-white/10 shrink-0">
                      {chat.badge}
                    </span>
                  </div>

                  {/* Chat Body Area */}
                  <div className="p-4 bg-[#E5DDD5]/50 flex-1 space-y-3 font-sans text-xs">
                    
                    {/* Incoming Client Message Bubble */}
                    <div className="flex items-start max-w-[90%]">
                      <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm text-slate-800 space-y-1 relative border border-slate-100">
                        <p className="leading-relaxed text-[11px]">{chat.clientMessage}</p>
                        <div className="text-[9px] text-slate-400 text-right">{chat.time}</div>
                      </div>
                    </div>

                    {/* Outgoing Admin Message Bubble */}
                    <div className="flex items-end justify-end ml-auto max-w-[90%]">
                      <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-none p-3 shadow-sm text-slate-800 space-y-1 relative border border-emerald-100">
                        <p className="leading-relaxed text-[11px]">{chat.adminMessage}</p>
                        <div className="flex items-center justify-end gap-1 text-[9px] text-emerald-700">
                          <span>{chat.time}</span>
                          <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                        </div>
                      </div>
                    </div>

                  </div>
                </>
              )}

              {/* Chat Card Footer Badge */}
              <div className="px-5 py-3 bg-white border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Garansi NorthVows
                </span>
                <span className="text-slate-400 font-mono text-[10px]">Verified WA Chat</span>
              </div>

            </div>
          ))}
        </div>

        {/* Centered Prev / Next Navigation Controls */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button 
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm hover:border-primary hover:text-primary transition-all focus:outline-none"
            aria-label="Previous proof"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-primary hover:bg-navy text-white flex items-center justify-center shadow-md hover:shadow-glow transition-all focus:outline-none"
            aria-label="Next proof"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
