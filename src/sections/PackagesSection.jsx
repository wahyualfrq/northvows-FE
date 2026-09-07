import React from 'react';
import { Tag, Check, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function PackagesSection() {
  const { language } = useLanguage();
  const t = translations?.[language]?.packages;

  const packagesData = [
    {
      id: 'starter',
      title: '🎓 Academic Starter',
      subtitle: t?.starter?.subtitle || 'Cocok untuk mahasiswa dan kebutuhan akademik dasar.',
      originalPrice: t?.starter?.originalPrice || 'Rp150.000',
      price: t?.starter?.price || 'Rp4.000',
      discountBadge: t?.starter?.discountBadge || 'PROMO HARI INI',
      badge: null,
      isFeatured: false,
      services: t?.starter?.services || [
        'Resume Jurnal',
        'CV ATS Friendly',
        'PPT Presentasi Dasar',
        'Tugas Coding Ringan',
        'Perbaikan Dokumen Akademik'
      ],
      benefits: t?.starter?.benefits || [
        'Konsultasi Gratis',
        '1x Revisi',
        'Fast Response',
        'Estimasi 1 Hari'
      ],
      btnText: t?.starter?.btnText || 'Mulai Sekarang',
      waMessage: language === 'en'
        ? 'Hello NorthVows, I am interested in Academic Starter package'
        : 'Halo NorthVows, saya tertarik dengan paket Academic Starter'
    },
    {
      id: 'pro',
      title: '🏆 Academic Pro',
      subtitle: t?.pro?.subtitle || 'Cocok untuk skripsi, sidang, project kampus, dan portofolio.',
      originalPrice: t?.pro?.originalPrice || 'Rp500.000',
      price: t?.pro?.price || 'Rp99.000',
      discountBadge: t?.pro?.discountBadge || 'HEMAT 80%',
      badge: t?.pro?.badge || 'Paling Banyak Dipilih',
      isFeatured: true,
      services: t?.pro?.services || [
        'PPT Sidang Premium',
        'UI/UX Design Figma',
        'Tugas Informatika & Coding',
        'Resume Jurnal Lengkap',
        'Optimasi LinkedIn',
        'Persiapan Portofolio'
      ],
      benefits: t?.pro?.benefits || [
        'Prioritas Pengerjaan',
        '3x Revisi',
        'Konsultasi Gratis',
        'Dokumentasi Rapi',
        'Dukungan Sampai Deadline'
      ],
      btnText: t?.pro?.btnText || 'Pilih Paket Pro',
      waMessage: language === 'en'
        ? 'Hello NorthVows, I am interested in Academic Pro package'
        : 'Halo NorthVows, saya tertarik dengan paket Academic Pro'
    },
    {
      id: 'professional',
      title: '🚀 Professional Solution',
      subtitle: t?.professional?.subtitle || 'Cocok untuk freelancer, UMKM, startup, dan kebutuhan profesional.',
      originalPrice: t?.professional?.originalPrice || 'Rp1.500.000',
      price: t?.professional?.price || 'Rp499.000',
      discountBadge: t?.professional?.discountBadge || 'BEST VALUE',
      badge: null,
      isFeatured: false,
      services: t?.professional?.services || [
        'Landing Page',
        'Company Profile Website',
        'Sistem Informasi Laravel',
        'Dashboard Admin',
        'Fullstack Web Application',
        'UI/UX Professional Design'
      ],
      benefits: t?.professional?.benefits || [
        'Prioritas Layanan',
        'Revisi Prioritas',
        'Dokumentasi Lengkap',
        'Source Code Rapi',
        'Bantuan Deployment',
        'Demo & Panduan Penggunaan'
      ],
      btnText: t?.professional?.btnText || 'Konsultasi Proyek',
      waMessage: language === 'en'
        ? 'Hello NorthVows, I am interested in Professional Solution package'
        : 'Halo NorthVows, saya tertarik dengan paket Professional Solution'
    }
  ];

  const formatPrice = (rawPrice) => {
    if (!rawPrice) return '';
    return rawPrice.replace(/^(Mulai dari |Starting from )/, '');
  };

  return (
    <section id="paket-layanan" className="py-24 lg:py-32 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4 shadow-sm">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">
              {t?.badge || "PILIH PAKET TERBAIK"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slateText mb-4">
            {t?.title || "Pilih Paket yang Sesuai dengan Kebutuhan Anda"}
          </h2>
          <p className="text-mutedText text-sm sm:text-base leading-relaxed">
            {t?.description || "Mulai dari tugas kuliah, persiapan sidang, hingga pengembangan website profesional. Pilih paket yang paling sesuai dengan target dan anggaran Anda."}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch max-w-7xl mx-auto">
          {packagesData.map((pkg, index) => {
            const waUrl = `https://wa.me/6282381409388?text=${encodeURIComponent(pkg.waMessage)}`;
            const cleanPrice = formatPrice(pkg.price);
            const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300';

            if (pkg.isFeatured) {
              return (
                <div 
                  key={pkg.id}
                  className={`bg-gradient-to-b from-blue-50/90 via-white to-blue-50/40 rounded-3xl p-7 sm:p-8 lg:p-9 border-2 border-primary shadow-2xl shadow-blue-500/20 ring-4 ring-primary/10 lg:-translate-y-5 lg:scale-[1.04] transition-all duration-300 flex flex-col justify-between relative z-20 overflow-hidden reveal-on-scroll ${delayClass}`}
                >
                  {/* Top Gradient Bar */}
                  <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary via-accent to-navy" />

                  <div>
                    {/* Featured Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary via-accent to-navy text-white text-xs font-extrabold shadow-md shadow-blue-500/30 border border-blue-300/40 mb-5">
                      <Star className="w-4 h-4 fill-yellow-300 text-yellow-300 animate-pulse" />
                      <span>{pkg.badge.replace(/^⭐\s*/, '')}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy flex items-center gap-2">
                      {pkg.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-semibold">
                      {pkg.subtitle}
                    </p>

                    {/* Hero Price Box */}
                    <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-100/70 via-blue-50/40 to-indigo-100/50 border border-blue-200 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-black text-primary uppercase tracking-wider">
                          {language === 'en' ? 'Limited Promo Price' : 'Harga Promo Spesial'}
                        </span>
                        {pkg.discountBadge && (
                          <span className="px-2.5 py-0.5 text-[10px] font-black text-white bg-gradient-to-r from-red-500 to-rose-600 rounded-full shadow-sm animate-pulse">
                            {pkg.discountBadge}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col">
                        {pkg.originalPrice && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm sm:text-base font-bold text-slate-400 line-through decoration-red-500 decoration-2">
                              {pkg.originalPrice}
                            </span>
                            <span className="text-xs font-extrabold text-red-500">
                              {language === 'en' ? '(Save 80%)' : '(Hemat 80%)'}
                            </span>
                          </div>
                        )}
                        <div>
                          <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            {language === 'en' ? 'Starting from' : 'Mulai dari'}
                          </span>
                          <span className="text-3xl sm:text-4xl lg:text-4xl font-black text-navy tracking-tight mt-0.5 block">
                            {cleanPrice}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Lists */}
                    <div className="space-y-6">
                      {/* Layanan */}
                      <div>
                        <span className="text-[11px] font-extrabold text-primary uppercase tracking-wider block mb-2.5">
                          {language === 'en' ? 'Service Scope' : 'Cakupan Layanan'}
                        </span>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-bold">
                          {pkg.services.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[11px] font-black shadow-sm flex-shrink-0">
                                ✓
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefit */}
                      <div className="pt-5 border-t border-blue-100">
                        <span className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider block mb-2.5">
                          {language === 'en' ? 'Facilities & Benefits' : 'Fasilitas & Benefit'}
                        </span>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-bold">
                          {pkg.benefits.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[11px] font-black shadow-sm flex-shrink-0">
                                ✓
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* High Conversion CTA Button */}
                  <div className="pt-6 mt-8 border-t border-blue-200">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-primary via-accent to-navy hover:from-navy hover:to-primary text-white text-sm sm:text-base font-extrabold shadow-lg shadow-blue-500/35 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <span>{pkg.btnText}</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={pkg.id}
                className={`bg-white rounded-3xl p-7 sm:p-8 lg:p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative reveal-on-scroll ${delayClass}`}
              >
                <div>
                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slateText flex items-center gap-2">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-mutedText mt-2 leading-relaxed font-medium">
                    {pkg.subtitle}
                  </p>

                  {/* Price Hook Block */}
                  <div className="my-6 pt-5 border-t border-slate-100">
                    {pkg.originalPrice && (
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-sm sm:text-base font-bold text-slate-400 line-through decoration-red-500 decoration-2">
                          {pkg.originalPrice}
                        </span>
                        {pkg.discountBadge && (
                          <span className="px-2 py-0.5 text-[10px] font-extrabold text-red-600 bg-red-50 border border-red-200/80 rounded-md tracking-wide">
                            {pkg.discountBadge}
                          </span>
                        )}
                      </div>
                    )}
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {language === 'en' ? 'Starting from' : 'Mulai dari'}
                      </span>
                      <div className="mt-0.5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                          {cleanPrice}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Lists */}
                  <div className="space-y-6">
                    {/* Layanan */}
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                        {language === 'en' ? 'Service Scope' : 'Cakupan Layanan'}
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                        {pkg.services.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-[11px] font-bold flex-shrink-0">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefit */}
                    <div className="pt-5 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                        {language === 'en' ? 'Facilities & Benefits' : 'Fasilitas & Benefit'}
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                        {pkg.benefits.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[11px] font-bold flex-shrink-0">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6 mt-8 border-t border-slate-100">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm ${
                      pkg.id === 'professional'
                        ? 'bg-slate-900 hover:bg-navy text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80'
                    }`}
                  >
                    <span>{pkg.btnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
