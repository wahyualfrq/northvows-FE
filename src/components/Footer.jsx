import React from 'react';
import { Star, Instagram, Music2, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-[#00124D] text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
                <Star className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">North<span className="text-accent">Vows</span></span>
            </a>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              {t.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/northvows?igsi=dmtxNXJzdzI2eHVy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors text-xs" 
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@north.vows?_r=1&_t=ZS-99OU41botVN" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors text-xs" 
                aria-label="TikTok"
              >
                <Music2 className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/north_vows?s=11" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors text-xs" 
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{t.colServicesTitle}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">PPT Design Sidang</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design Figma</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Python & Machine Learning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pembuatan CV ATS</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{t.colInfoTitle}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Cara Pemesanan</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Ketentuan Revisi</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Jaminan Privasi</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Hubungi Admin</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>{t.copyright}</p>
          <p className="flex items-center gap-1">{t.designedFor}</p>
        </div>

      </div>
    </footer>
  );
}
