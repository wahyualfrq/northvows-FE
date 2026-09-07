import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

function AnimatedCounter({ end, duration = 1800, decimals = 0, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = end * easeProgress;

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(el);

    return () => observer.disconnect();
  }, [end, duration]);

  const formattedValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={ref} className="inline-block transition-transform duration-75">
      {prefix}{formattedValue}{suffix}
    </span>
  );
}

export default function TrustMetricsSection() {
  const { language } = useLanguage();
  const t = translations[language].trust;

  const trustMetrics = [
    {
      end: 500,
      suffix: "+",
      decimals: 0,
      title: t.completedProjects,
      subtitle: t.completedProjectsSub,
      highlightColor: "text-navy"
    },
    {
      end: 100,
      suffix: "+",
      decimals: 0,
      title: t.studentClients,
      subtitle: t.studentClientsSub,
      highlightColor: "text-primary"
    },
    {
      end: 4.9,
      decimals: 1,
      isRating: true,
      title: t.satisfactionRating,
      subtitle: t.satisfactionRatingSub,
      highlightColor: "text-navy"
    },
    {
      prefix: "< ",
      end: 15,
      suffix: " Mnt",
      decimals: 0,
      title: t.fastResponse,
      subtitle: t.fastResponseSub,
      highlightColor: "text-primary"
    }
  ];

  return (
    <section className="border-y border-slate-100 bg-surface/70 py-12 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustMetrics.map((metric, idx) => (
            <div key={idx} className={`flex flex-col items-center reveal-on-scroll delay-${(idx + 1) * 100}`}>
              {metric.isRating ? (
                <div className="flex items-center gap-1">
                  <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${metric.highlightColor}`}>
                    <AnimatedCounter end={metric.end} decimals={metric.decimals} />
                  </span>
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                </div>
              ) : (
                <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${metric.highlightColor}`}>
                  <AnimatedCounter 
                    end={metric.end} 
                    prefix={metric.prefix || ''} 
                    suffix={metric.suffix || ''} 
                    decimals={metric.decimals} 
                  />
                </span>
              )}
              <span className="text-sm font-semibold text-slate-700 mt-1">{metric.title}</span>
              <span className="text-xs text-mutedText">{metric.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
