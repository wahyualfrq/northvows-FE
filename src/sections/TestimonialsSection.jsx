import React, { useState, useEffect } from 'react';
import { MessageSquare, Star, PlusCircle, CheckCircle2, Send, ChevronUp } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  // Real-time testimonials list (with localStorage fallback for demo persistence)
  const [listTestimonials, setListTestimonials] = useState(() => {
    try {
      const saved = localStorage.getItem('northvows_user_testimonials');
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...parsed, ...testimonialsData];
      }
    } catch (e) {
      console.error(e);
    }
    return testimonialsData;
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rating: 5,
    quote: ''
  });

  const currentTesti = listTestimonials[activeIndex] || listTestimonials[0];

  const handleAvatarClick = (index) => {
    if (index === activeIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 150);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.role.trim() || !formData.quote.trim()) return;

    // Random friendly avatar for dummy real-time submission
    const dummyAvatars = [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
    ];
    const randomAvatar = dummyAvatars[Math.floor(Math.random() * dummyAvatars.length)];

    const newTestimonial = {
      avatar: randomAvatar,
      name: formData.name,
      role: formData.role,
      quote: formData.quote,
      rating: formData.rating || 5
    };

    // Update real-time state
    const updatedList = [newTestimonial, ...listTestimonials];
    setListTestimonials(updatedList);

    // Save to localStorage for demo persistence
    try {
      const userAddedOnly = updatedList.filter(item => !testimonialsData.includes(item));
      localStorage.setItem('northvows_user_testimonials', JSON.stringify(userAddedOnly));
    } catch (e) {
      console.error(e);
    }

    // Immediately focus on newly added testimonial
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(0);
      setIsFading(false);
    }, 150);

    // Reset form and show success notice
    setFormData({
      name: '',
      role: '',
      rating: 5,
      quote: ''
    });

    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 4000);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background Ambient Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-50 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-blue-50/60 rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
          <MessageSquare className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-wide">{t.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slateText mb-4">
          {t.title}
        </h2>
        <p className="text-mutedText text-sm sm:text-base max-w-xl mx-auto mb-12">
          {t.subtitle}
        </p>

        {/* Orbiting Avatar Constellation Graphic & Interactive Center Highlight */}
        <div className="relative py-4">
          
          {/* Orbiting Avatars */}
          <div className="flex justify-center items-center gap-3 sm:gap-6 flex-wrap mb-10">
            {listTestimonials.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button 
                  key={idx}
                  onClick={() => handleAvatarClick(idx)} 
                  className={`testi-avatar p-1 rounded-full border-2 transition-all duration-300 ${
                    isActive 
                      ? 'active border-primary scale-110 shadow-md ring-2 ring-primary/20' 
                      : 'border-transparent hover:border-primary/50 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className={`${isActive ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-10 h-10 sm:w-12 sm:h-12'} rounded-full object-cover`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Editorial Center Quote Box */}
          <div className="max-w-2xl mx-auto bg-surface/80 p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card relative transition-all">
            <div className="text-primary text-4xl font-serif mb-2 leading-none">“</div>
            <p 
              id="testiQuote" 
              className={`text-base sm:text-lg font-medium text-slateText leading-relaxed mb-6 italic transition-opacity duration-150 ${isFading ? 'opacity-0' : 'opacity-100'}`}
            >
              "{currentTesti.quote}"
            </p>
            <div className={`transition-opacity duration-150 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <h4 id="testiAuthor" className="text-base font-bold text-navy">{currentTesti.name}</h4>
              <p id="testiRole" className="text-xs text-mutedText">{currentTesti.role}</p>
              <div className="flex justify-center items-center gap-1 mt-3">
                {[...Array(currentTesti.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-1.5">{t.verified}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Real-time Form Toggle Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all border border-slate-200/80 shadow-sm"
          >
            {showForm ? (
              <>
                <ChevronUp className="w-4 h-4 text-slate-500" />
                <span>{t.toggleFormHideBtn}</span>
              </>
            ) : (
              <>
                <PlusCircle className="w-4 h-4 text-primary" />
                <span>{t.toggleFormBtn}</span>
              </>
            )}
          </button>
        </div>

        {/* Real-time Interactive Testimonial Submission Form (Dummy Frontend Realtime) */}
        {showForm && (
          <div className="mt-8 max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-lg text-left transition-all">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-slateText">{t.formTitle}</h3>
              <p className="text-xs text-mutedText mt-1">{t.formSubtitle}</p>
            </div>

            {successMsg && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.successMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">{t.nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.namePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">{t.roleLabel}</label>
                  <input
                    type="text"
                    id="role"
                    required
                    value={formData.role}
                    onChange={handleInputChange}
                    placeholder={t.rolePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">{t.quoteLabel}</label>
                <textarea
                  id="quote"
                  required
                  rows="3"
                  value={formData.quote}
                  onChange={handleInputChange}
                  placeholder={t.quotePlaceholder}
                  className="w-full px-3.5 py-2.5 text-xs bg-surface border border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold text-white bg-primary hover:bg-navy rounded-xl shadow-md hover:shadow-glow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.submitBtn}</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </section>
  );
}
