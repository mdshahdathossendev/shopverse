'use client';
import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart, CheckCircle2 } from 'lucide-react';

const ProdectDelts = ({ Prodect }) => {
  const productData = {
    name: Prodect?.name || "iPhone 15 Pro",
    price: Prodect?.price || 1099.00,
    badge: Prodect?.badge || "NEW RELEASE",
    isOfficial: Prodect?.isOfficial ?? true,
    rating: Prodect?.rating || 5.0,
    images: Prodect?.images || [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1695048132717-37ea8597af8a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1695048132833-2a3b0a2bf0d0?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600&auto=format&fit=crop"
    ]
  };

  const [quantity, setQuantity] = useState(1);
  // ডিফল্ট প্রথম ইমেজ সিলেক্ট থাকবে
  const [activeImage, setActiveImage] = useState(productData.images[0]);

  const handleQuantityChange = (type) => {
    if (type === 'minus' && quantity > 1) {
      setQuantity(prev => prev - 1);
    } else if (type === 'plus') {
      setQuantity(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen font-sans antialiased p-4 md:p-8 transition-colors duration-300 bg-slate-50 dark:bg-[#030914] text-slate-800 dark:text-slate-200 selection:bg-blue-500/20 dark:selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* BREADCRUMB NAVIGATION */}
        <nav className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase mb-8 text-slate-400 dark:text-slate-500">
          <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition">Home</span>
          <span>&gt;</span>
          <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition">Phones</span>
          <span>&gt;</span>
          <span className="text-blue-600 dark:text-blue-500">{productData.name}</span>
        </nav>

        {/* PRODUCT SECTION MAIN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: IMAGE GALLERY */}
          <div className="lg:col-span-7 space-y-4">
            {/* Big Main Image Preview */}
            <div className="relative aspect-[16/10] border rounded-xl overflow-hidden flex items-center justify-center p-6 transition duration-300 shadow-sm dark:shadow-xl bg-white border-slate-200 dark:bg-[#070e1b] dark:border-slate-800/80 dark:shadow-black/40">
              {productData.badge && (
                <span className="absolute top-4 left-4 text-[10px] tracking-widest font-extrabold uppercase px-3 py-1 bg-blue-600 text-white rounded shadow-md">
                  {productData.badge}
                </span>
              )}
              <img 
                src={activeImage} 
                alt={productData.name} 
                className="max-h-full object-contain opacity-95 hover:scale-102 transition duration-500 mix-blend-multiply dark:mix-blend-lighten"
              />
            </div>

            {/* Thumbnail Carousel */}
            <div className="grid grid-cols-5 gap-3">
              {productData.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-lg p-1 border transition duration-200 overflow-hidden flex items-center justify-center group bg-white dark:bg-[#070e1b] ${
                    activeImage === img 
                      ? 'border-blue-500 ring-1 ring-blue-500/50' 
                      : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`thumbnail-${idx}`} 
                    className="max-h-full object-contain group-hover:scale-105 transition duration-300 mix-blend-multiply dark:mix-blend-lighten"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: PRODUCT INFORMATION */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            
            {/* Official Badge */}
            {productData.isOfficial && (
              <div className="flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-blue-600 dark:text-blue-500">
                <CheckCircle2 size={12} className="fill-blue-600 dark:fill-blue-500 text-slate-50 dark:text-[#030914]" />
                <span>Official Apple Retailer</span>
              </div>
            )}

            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {productData.name}
            </h1>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-blue-600 dark:text-blue-500">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < Math.floor(productData.rating) ? "currentColor" : "none"} 
                  className={i < Math.floor(productData.rating) ? "text-blue-600 dark:text-blue-500" : "text-slate-300 dark:text-slate-700"}
                />
              ))}
            </div>

            {/* Pricing */}
            <div className="text-2xl font-bold tracking-tight font-mono text-slate-900 dark:text-white">
              ${productData.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>

            {/* QUANTITY PICKER */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-widest font-extrabold uppercase text-slate-400 dark:text-slate-500 block">
                Quantity
              </span>
              <div className="inline-flex items-center border rounded-md p-1 bg-white border-slate-200 dark:bg-[#070e1b] dark:border-slate-800/80">
                <button 
                  onClick={() => handleQuantityChange('minus')}
                  className="p-1.5 rounded text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition"
                >
                  <Minus size={14} strokeWidth={2.5} />
                </button>
                <span className="px-5 text-sm font-mono font-bold text-slate-900 dark:text-white select-none">
                  {quantity}
                </span>
                <button 
                  onClick={() => handleQuantityChange('plus')}
                  className="p-1.5 rounded text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition"
                >
                  <Plus size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="space-y-3 pt-4">
              <button className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 text-sm tracking-wide">
                Buy Now
              </button>
              
              <button className="w-full font-semibold py-3 px-4 rounded-lg transition duration-200 text-sm tracking-wide flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-800 border border-transparent dark:bg-[#0b1528] dark:hover:bg-[#0f1d36] dark:border-slate-800/80 dark:text-slate-300">
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProdectDelts; 