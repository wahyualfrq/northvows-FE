import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import FaqItem from '../components/FaqItem';
import { faqData } from '../data/faqData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Tanya Jawab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slateText mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-mutedText text-sm sm:text-base">
            Pertanyaan yang sering diajukan seputar layanan pengerjaan di NorthVows.
          </p>
        </div>

        <div className="space-y-4" id="faqAccordion">
          {faqData.map((faq, idx) => (
            <FaqItem 
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
