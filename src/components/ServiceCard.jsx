import React from 'react';
import { 
  Presentation, 
  Figma, 
  Globe, 
  Code2, 
  FileCheck2, 
  GraduationCap, 
  Check 
} from 'lucide-react';

const iconMap = {
  Presentation,
  Figma,
  Globe,
  Code2,
  FileCheck2,
  GraduationCap
};

export default function ServiceCard({ iconName, title, description, features }) {
  const IconComponent = iconMap[iconName] || Globe;

  return (
    <div className="group bg-white p-8 rounded-2xl border border-slate-200/90 hover:border-primary/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
        <IconComponent className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-slateText mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-mutedText leading-relaxed mb-4">
        {description}
      </p>
      <ul className="text-xs text-slate-600 space-y-2 font-medium">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-primary" /> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
