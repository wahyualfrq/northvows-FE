import React from 'react';
import { Star, Instagram, Music2, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
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
              Partner andalan mahasiswa untuk penyelesaian tugas, PPT presentasi, desain UI/UX, coding, skripsi, dan template portofolio profesional.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors text-xs" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors text-xs" aria-label="TikTok">
                <Music2 className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors text-xs" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors text-xs" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Layanan</h4>
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
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Informasi</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Cara Pemesanan</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Ketentuan Revisi</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Jaminan Privasi</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Hubungi Admin</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>&copy; 2026 NorthVows. All rights reserved. Solusi Tugas & Project Mahasiswa.</p>
          <p className="flex items-center gap-1">Designed with precision for Indonesian Students.</p>
        </div>

      </div>
    </footer>
  );
}
