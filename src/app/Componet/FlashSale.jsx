"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

export default function FlashSale() {
  // Hardcoded initial countdown values mimicking the image state
  const [timeLeft, setTimeLeft] = useState({ hrs: 11, min: 19, sec: 41 });

  // Simple countdown ticker simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.sec > 0) return { ...prev, sec: prev.sec - 1 };
        if (prev.min > 0) return { ...prev, min: prev.min - 1, sec: 59 };
        if (prev.hrs > 0) return { hrs: prev.hrs - 1, min: 59, sec: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "AirPods Pro (2nd Gen)",
      description: "Active Noise Cancellation with Transparency mode.",
      price: "$199.00",
      originalPrice: "$249.00",
      badge: "-25%",
      image: "/path-to-airpods.png",
    },
    {
      id: 2,
      name: "Galaxy S24 Ultra",
      description: "200MP Camera with Galaxy AI integration.",
      price: "$1,149.00",
      originalPrice: "$1,299.00",
      badge: "-$150",
      image: "/path-to-s24.png",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 bg-slate-50 dark:bg-[#030d1a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Row: Title and Countdown */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-md text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-950/40 uppercase mb-3">
              Flash Sale
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Precision Performance, Discounted Prices.
            </h2>
          </div>

          {/* Countdown Clock Grid */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-blue-600 dark:text-blue-500 font-bold text-lg sm:text-xl">
            {[
              { label: "HRS", value: timeLeft.hrs },
              { label: "MIN", value: timeLeft.min },
              { label: "SEC", value: timeLeft.sec },
            ].map((unit, i, arr) => (
              <React.Fragment key={unit.label}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-blue-400 font-semibold text-sm sm:text-lg shadow-sm">
                    {String(unit.value).padStart(2, "0")}
                  </div>
                  <span className="text-[10px] tracking-wider text-slate-500 dark:text-gray-400 font-medium mt-1.5">
                    {unit.label}
                  </span>
                </div>
                {i < arr.length - 1 && <span className="-mt-5 animate-pulse">:</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col sm:flex-row items-center p-4 sm:p-6 rounded-2xl border bg-white border-slate-200 dark:bg-[#061324] dark:border-gray-800/50 transition-all duration-300 hover:shadow-xl hover:border-blue-500/30"
            >
              {/* Left Column: Image Canvas Frame */}
              <div className="relative w-full sm:w-44 aspect-square rounded-xl flex items-center justify-center p-4 bg-slate-100 dark:bg-[#030d1a] border border-slate-200/60 dark:border-slate-800/40 overflow-hidden flex-shrink-0">
                {/* Discount Percentage Badge */}
                <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-950/60">
                  {product.badge}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain mix-blend-normal transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Right Column: Product Core Details */}
              <div className="flex flex-col flex-1 mt-4 sm:mt-0 sm:pl-6 w-full">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-gray-400 font-normal leading-normal mb-4 min-h-[40px]">
                  {product.description}
                </p>

                {/* Pricing Structure row */}
                <div className="flex items-baseline space-x-3 mb-5">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-500">
                    {product.price}
                  </span>
                  <span className="text-sm line-through text-slate-400 dark:text-gray-500">
                    {product.originalPrice}
                  </span>
                </div>

                {/* Add to Cart button layout */}
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-medium text-sm transition-all duration-200 hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-[0.98]">
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}