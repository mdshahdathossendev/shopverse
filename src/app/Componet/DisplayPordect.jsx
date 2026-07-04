'use client';
import React, { useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DisplayPordect({ data = [] }) {
  const sliderRef = useRef(null);

  // অটোমেটিক স্লাইডার ইফেক্ট (প্রতি ৫ সেকেন্ডে স্ক্রোল হবে)
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 12) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [data]);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      const offset = direction === 'left' ? -clientWidth : clientWidth;
      sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#030914] text-slate-200 py-10 antialiased selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* HEADER WITH CONTROLS */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">Featured Hardware</h2>
            <p className="text-xs text-slate-400">Precision Modules Inventory</p>
          </div>
          
          {data.length > 4 && (
            <div className="flex gap-2 bg-[#091124] border border-slate-800/80 p-1 rounded-lg shadow-inner">
              <button onClick={() => scroll('left')} className="p-1.5 hover:bg-slate-800 rounded-md transition text-slate-400 hover:text-white">
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => scroll('right')} className="p-1.5 hover:bg-slate-800 rounded-md transition text-slate-400 hover:text-white">
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </header>

        {/* CAROUSEL */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.map((product) => (
            <Link
              href={`/allProdect/${product._id || product.id}`}
              key={product._id || product.id}
              className="w-[calc(100%/1)-12px] sm:w-[calc(100%/2)-12px] md:w-[calc(100%/3)-12px] lg:w-[calc(100%/4)-12px] shrink-0 snap-start bg-[#091225] border border-slate-800/60 rounded-xl overflow-hidden flex flex-col justify-between aspect-square group transition-all duration-300 hover:border-slate-700 hover:bg-[#0c1831]"
            >
              {/* 🎯 Image Box (w-50 এবং h-30 কাস্টম ভ্যালু সহ ফিক্সড করা হয়েছে) */}
              <div className="relative flex-[1.2] min-h-0 w-full flex items-center justify-center p-4 overflow-hidden bg-[#050a14]/40">
                {product.badge && (
                  <span className="absolute top-3 left-3 z-10 text-[8px] tracking-wider font-extrabold uppercase px-1.5 py-0.5 rounded bg-blue-600 text-white shadow-sm">
                    {product.badge}
                  </span>
                )}
                <div className="w-[200px] h-[120px] flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Info Box */}
              <div className="p-4 pt-2 bg-[#091225] group-hover:bg-[#0c1831] transition-colors duration-300 shrink-0 border-t border-slate-800/30">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] tracking-widest uppercase font-bold text-slate-400 truncate max-w-[75%]">
                    {product.category || product.brand}
                  </span>
                  <div className="flex items-center gap-0.5 text-blue-500 text-[10px] font-semibold shrink-0">
                    <Star size={10} fill="currentColor" className="text-blue-500" />
                    <span>{product.rating?.toFixed(1) || "0.0"}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-medium text-sm text-white mb-2 truncate group-hover:text-blue-400 transition-colors">
                  {product.name}
                </h3>

                {/* Pricing row */}
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base font-semibold font-mono tracking-tight text-blue-500">
                    ${product.price?.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-[10px] line-through font-mono text-slate-500">
                      ${product.originalPrice?.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Fallback View */}
        {data.length === 0 && (
          <div className="text-center py-16 border border-dashed rounded-xl border-slate-800 bg-[#091225]/30 text-slate-500">
            <p className="text-sm font-medium">Waiting for server modules payload...</p>
          </div>
        )}

      </div>
    </div>
  );
}