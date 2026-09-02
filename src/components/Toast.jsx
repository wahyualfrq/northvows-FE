import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ isVisible, message }) {
  if (!isVisible) return null;

  return (
    <div id="toast" className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-medium border border-slate-800 transition-all">
      <CheckCircle className="w-4 h-4 text-emerald-400" />
      <span id="toastMessage">{message}</span>
    </div>
  );
}
