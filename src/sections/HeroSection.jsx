import React from 'react';
import { Sparkles, Eye, Clock, ShieldCheck, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="hero" className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background Ambient Glow Accents */}
      <div className="absolute inset-0 pointer-events-none hero-glow-left"></div>
      <div className="absolute inset-0 pointer-events-none hero-glow-right"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/60 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 mb-8 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{t.badge}</span>
        </div>

        {/* Headline with Reference Visual Hierarchy */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slateText leading-[1.15] max-w-4xl mx-auto mb-6">
          {t.headlineLine1} <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-navy">{t.headlineLine2}</span> {t.headlineLine3}
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-mutedText font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.subheadline}
        </p>

        {/* Hero Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-primary hover:bg-navy rounded-full shadow-lg shadow-primary/25 hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
            {t.btnOrder}
            <Sparkles className="w-4 h-4" />
          </a>
          <a href="#portfolio" className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-navy bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-sm hover:border-primary/40 transition-all duration-300 flex items-center justify-center gap-2">
            {t.btnPortfolio}
            <Eye className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Dominant Fanned Project Showcase */}
        <div className="relative w-full max-w-4xl mx-auto mt-4 perspective-container">
          
          {/* Floating Pill Badges around Showcase */}
          <div className="absolute -top-6 left-2 sm:left-6 z-30 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/80 shadow-card text-xs font-semibold text-navy animate-bounce" style={{ animationDuration: '4s' }}>
            <Clock className="w-4 h-4 text-primary" />
            <span>{t.floatingBadge1}</span>
          </div>

          <div className="absolute -bottom-4 right-2 sm:right-6 z-30 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/80 shadow-card text-xs font-semibold text-navy">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>{t.floatingBadge2}</span>
          </div>

          {/* Triple Layered Cards Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Left Card */}
            <div className="hidden md:block tilt-left glass-card rounded-2xl p-5 shadow-card hover:shadow-card-hover border border-slate-200/80 text-left">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">F</div>
                  <div>
                    <h4 className="text-xs font-bold text-slateText">{t.leftCardTitle}</h4>
                    <p className="text-[10px] text-mutedText">Figma Mobile System</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-50 text-purple-600 rounded-full">High-Fi</span>
              </div>
              <div className="space-y-2.5">
                <div className="h-24 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl p-2.5 border border-slate-100 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-2.5 bg-slate-200 rounded"></div>
                    <div className="w-4 h-4 rounded-full bg-purple-200"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 bg-white rounded-lg p-1.5 shadow-2xs border border-slate-100">
                      <div className="w-full h-1.5 bg-purple-100 rounded mb-1"></div>
                      <div className="w-3/4 h-1 bg-slate-100 rounded"></div>
                    </div>
                    <div className="h-10 bg-white rounded-lg p-1.5 shadow-2xs border border-slate-100">
                      <div className="w-full h-1.5 bg-blue-100 rounded mb-1"></div>
                      <div className="w-2/3 h-1 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-mutedText pt-1">
                  <span>32 Components</span>
                  <span className="text-emerald-600 font-semibold">Ready to test</span>
                </div>
              </div>
            </div>

            {/* Center Dominant Card */}
            <div className="center-card glass-card rounded-2xl p-6 shadow-glow border border-blue-200/90 text-left bg-white relative z-20">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    <LayoutDashboard className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slateText">{t.centerCardTitle}</h4>
                    <p className="text-xs text-mutedText">Laravel 11 + Tailwind + MySQL</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 bg-blue-50 text-primary rounded-full">{t.centerCardBadge}</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-semibold text-slate-700">{t.centerCardProgressTitle}</div>
                    <div className="text-xs font-bold text-primary">{t.centerCardProgressStatus}</div>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full w-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                    <div className="bg-white p-2 rounded-lg border border-slate-100">
                      <div className="text-[10px] text-mutedText">Clean Code</div>
                      <div className="text-xs font-bold text-slateText">{t.centerCardRating}</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-100">
                      <div className="text-[10px] text-mutedText">Plagiarisme</div>
                      <div className="text-xs font-bold text-emerald-600">{t.centerCardPlag}</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-100">
                      <div className="text-[10px] text-mutedText">Dokumentasi</div>
                      <div className="text-xs font-bold text-slateText">{t.centerCardDoc}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-mutedText pt-1">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> {t.centerCardDemo}</span>
                  <span className="font-semibold text-navy">NorthVows Project</span>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="hidden md:block tilt-right glass-card rounded-2xl p-5 shadow-card hover:shadow-card-hover border border-slate-200/80 text-left">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-primary flex items-center justify-center font-bold text-xs">PPT</div>
                  <div>
                    <h4 className="text-xs font-bold text-slateText">{t.rightCardTitle}</h4>
                    <p className="text-[10px] text-mutedText">Editorial Infographic 25-Slide</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full">{t.rightCardBadge}</span>
              </div>
              <div className="space-y-2.5">
                <div className="h-24 bg-gradient-to-br from-blue-50/50 to-slate-50 rounded-xl p-2.5 border border-slate-100 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">01</div>
                    <div className="w-24 h-2 bg-slate-300 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-1.5 bg-slate-200 rounded"></div>
                    <div className="w-4/5 h-1.5 bg-slate-200 rounded"></div>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-white text-navy rounded border border-slate-200">Animation Ready</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-mutedText pt-1">
                  <span>ATS & Slide Standar</span>
                  <span className="text-primary font-semibold">100% Custom</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
