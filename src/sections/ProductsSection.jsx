import React from 'react';
import { ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/productsData';

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Ready-to-Use Digital Assets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slateText mb-4">
            Digital Products & Source Code
          </h2>
          <p className="text-mutedText text-sm sm:text-base">
            Katalog template premium, starter kit kode bersih, dan aset desain siap pakai untuk mempercepat tugas atau project skripsi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
