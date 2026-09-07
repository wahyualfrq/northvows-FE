import React from 'react';
import { Instagram, Music2, Twitter, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import logoImg from '../images/logo.webp';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#00124D] text-slate-400 pt-12 pb-24 md:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 2 columns on mobile (Brand full width + 2 link columns), 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 pb-10 md:pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <img 
                src={logoImg} 
                alt="NorthVows Logo" 
                className="w-9 h-9 object-contain group-hover:scale-105 transition-transform" 
              />
              <span className="text-xl font-bold text-white tracking-tight">
                North<span className="text-accent">Vows</span>
              </span>
            </a>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              {t.description}
            </p>
            
            {/* Social Media Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a 
                href="https://www.instagram.com/northvows?igsi=dmtxNXJzdzI2eHVy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:border-white/30 hover:bg-primary text-white flex items-center justify-center transition-all duration-200 text-xs shadow-sm hover:scale-105 active:scale-95" 
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@north.vows?_r=1&_t=ZS-99OU41botVN" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:border-white/30 hover:bg-primary text-white flex items-center justify-center transition-all duration-200 text-xs shadow-sm hover:scale-105 active:scale-95" 
                aria-label="TikTok"
              >
                <Music2 className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/north_vows?s=11" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:border-white/30 hover:bg-primary text-white flex items-center justify-center transition-all duration-200 text-xs shadow-sm hover:scale-105 active:scale-95" 
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (Layanan) */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block md:hidden"></span>
              {t.colServicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {translations[language].services.items.map((service) => (
                <li key={service.id}>
                  <a 
                    href="#services" 
                    className="hover:text-white transition-colors duration-150 block py-0.5 leading-snug"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Support (Informasi) */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block md:hidden"></span>
              {t.colInfoTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors duration-150 block py-0.5 leading-snug">
                  Cara Pemesanan
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors duration-150 block py-0.5 leading-snug">
                  Ketentuan Revisi
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors duration-150 block py-0.5 leading-snug">
                  Jaminan Privasi
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-150 block py-0.5 leading-snug">
                  Hubungi Admin
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-[11px] text-slate-400 gap-4">
          <p className="leading-relaxed max-w-md sm:max-w-none">{t.copyright}</p>
          <div className="flex items-center gap-4">
            {t.designedFor && <p className="flex items-center gap-1">{t.designedFor}</p>}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-primary text-white text-xs font-semibold transition-all border border-white/10 group shadow-sm active:scale-95"
              title="Scroll to Top"
            >
              <span>{language === 'id' ? 'Ke Atas' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

