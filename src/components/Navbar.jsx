import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`} id="mainHeader">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/30 group-hover:scale-105 transition-transform">
            {/* Geometric North Star Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-navy">North<span className="text-primary">Vows</span></span>
            <span className="text-[10px] -mt-1 font-semibold tracking-wider text-slate-400 uppercase">Academic & Project</span>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#hero" className="hover:text-primary transition-colors">{t.home}</a>
          <a href="#services" className="hover:text-primary transition-colors">{t.services}</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">{t.portfolio}</a>
          <a href="#products" className="hover:text-primary transition-colors">{t.products}</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">{t.howItWorks}</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">{t.reviews}</a>
          <a href="#faq" className="hover:text-primary transition-colors">{t.faq}</a>
        </nav>

        {/* CTA Action Button & Language Switcher */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Toggle Button */}
          <button 
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-all border border-slate-200/80"
            title="Switch Language / Ganti Bahasa"
          >
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span className={language === 'id' ? 'text-primary font-extrabold' : 'text-slate-400'}>ID</span>
            <span className="text-slate-300">|</span>
            <span className={language === 'en' ? 'text-primary font-extrabold' : 'text-slate-400'}>EN</span>
          </button>

          <a href="#contact" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-navy rounded-full shadow-md hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
            {t.consultation}
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-2">
          <button 
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 border border-slate-200"
          >
            <Globe className="w-3 h-3 text-primary" />
            <span className={language === 'id' ? 'text-primary font-extrabold' : 'text-slate-400'}>ID</span>
            <span className="text-slate-300">|</span>
            <span className={language === 'en' ? 'text-primary font-extrabold' : 'text-slate-400'}>EN</span>
          </button>

          <button 
            id="mobileMenuBtn" 
            className="p-2 text-slate-700 hover:text-primary focus:outline-none" 
            aria-label="Open Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div id="mobileMenu" className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl">
          <div className="flex flex-col gap-4 text-base font-medium text-slate-700">
            <a href="#hero" className="hover:text-primary mobile-link" onClick={closeMobileMenu}>{t.home}</a>
            <a href="#services" className="hover:text-primary mobile-link" onClick={closeMobileMenu}>{t.services}</a>
            <a href="#portfolio" className="hover:text-primary mobile-link" onClick={closeMobileMenu}>{t.portfolio}</a>
            <a href="#products" className="hover:text-primary mobile-link" onClick={closeMobileMenu}>{t.products}</a>
            <a href="#how-it-works" className="hover:text-primary mobile-link" onClick={closeMobileMenu}>{t.howItWorks}</a>
            <a href="#testimonials" className="hover:text-primary mobile-link" onClick={closeMobileMenu}>{t.reviews}</a>
            <a href="#faq" className="hover:text-primary mobile-link" onClick={closeMobileMenu}>{t.faq}</a>
            <a href="#contact" className="w-full text-center mt-2 px-5 py-3 text-sm font-semibold text-white bg-primary rounded-xl shadow-md mobile-link" onClick={closeMobileMenu}>
              {t.mobileConsultation}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
