'use client';
import React, { useState, useMemo } from 'react';
import { ShoppingCart, Star, RotateCcw } from 'lucide-react';
import Link from 'next/link';

export default function AllProdect({ data = [] }) {
  // 'All Hardware' সিলেক্টেড থাকলে অ্যারে খালি রাখবো, তাহলে লজিক হ্যান্ডেল করা সহজ হয়
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(5000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState('High Performance First');
  
  const categories = ['All Hardware', 'Compute Units', 'Mobile Systems', 'Wearables', 'Acoustic Gear'];
  const brands = ['Omnicorp', 'Spectra', 'TitanX', 'Nebula'];

  // ক্যাটাগরি হ্যান্ডেলার ফিক্স
  const handleCategoryChange = (category) => {
    if (category === 'All Hardware') {
      setSelectedCategories([]); // All সিলেক্ট করলে বাকি সব ফিল্টার ক্লিয়ার হবে
      return;
    }

    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // ব্র্যান্ড হ্যান্ডেলার
  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  // রিসেট হ্যান্ডেলার
  const handleReset = () => {
    setSelectedCategories([]);
    setPriceRange(5000);
    setSelectedBrands([]);
    setSortBy('High Performance First');
  };

  // 🎯 ফিল্টারিং এবং সোর্টিং লজিক (নিখুঁত ও ফিক্সড)
  const filteredProducts = useMemo(() => {
    const filtered = data.filter(product => {
      // ১. ক্যাটাগরি ফিল্টার: অ্যারে খালি থাকলে বা প্রোডাক্টের ক্যাটাগরি অ্যারেতে থাকলে ট্রু হবে
      const categoryMatch = 
        selectedCategories.length === 0 || 
        selectedCategories.some(cat => cat.toLowerCase() === product.category?.toLowerCase());

      // ২. ব্র্যান্ড ফিল্টার
      const brandMatch = 
        selectedBrands.length === 0 || 
        selectedBrands.some(b => b.toLowerCase() === product.brand?.toLowerCase());

      // ৩. প্রাইস ফিল্টার
      const priceMatch = product.price <= priceRange;

      return categoryMatch && brandMatch && priceMatch;
    });

    // সোর্টিং লজিক
    return [...filtered].sort((a, b) => {
      if (sortBy === 'Price: Low to High') {
        return a.price - b.price;
      } else if (sortBy === 'Price: High to Low') {
        return b.price - a.price;
      } else {
        return (b.rating || 0) - (a.rating || 0); // High Performance/Rating First
      }
    });
  }, [data, selectedCategories, selectedBrands, priceRange, sortBy]);

  return (
    <div className="min-h-screen font-sans flex antialiased transition-colors duration-300 bg-slate-50 dark:bg-[#070d19] text-slate-800 dark:text-slate-200 selection:bg-blue-500/20 dark:selection:bg-blue-500/30">
      
      {/* SIDEBAR FILTERS */}
      <aside className="w-72 border-r p-6 flex flex-col gap-8 shrink-0 transition-colors duration-300 border-slate-200 dark:border-slate-800/60 bg-white dark:bg-[#091124] shadow-sm dark:shadow-none">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white">Filters</h2>
          <button 
            onClick={handleReset} 
            className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition flex items-center gap-1 font-medium"
          >
            <RotateCcw size={12} /> Reset
          </button>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-slate-500 dark:text-slate-400">Category</h3>
          <div className="flex flex-col gap-3">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-3 text-sm cursor-pointer group transition text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                <input
                  type="checkbox"
                  // 'All Hardware' এর ক্ষেত্রে অ্যারে খালি থাকলে চেকড দেখাবে
                  checked={cat === 'All Hardware' ? selectedCategories.length === 0 : selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                  className="rounded text-blue-500 focus:ring-0 focus:ring-offset-0 w-4 h-4 checked:bg-blue-500 transition border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-slate-200 dark:border-slate-800/80" />

        {/* Price Range Section */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-slate-500 dark:text-slate-400">Price Range</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-blue-500 h-1 rounded-lg cursor-pointer appearance-none bg-slate-200 dark:bg-slate-800"
            />
            <div className="flex justify-between text-xs font-mono pt-1 text-slate-500 dark:text-slate-400">
              <span>$0</span>
              <span className="text-blue-500 dark:text-blue-400 font-semibold">${priceRange.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <hr className="border-slate-200 dark:border-slate-800/80" />

        {/* Brand Section */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-slate-500 dark:text-slate-400">Brand</h3>
          <div className="flex flex-col gap-3">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-3 text-sm cursor-pointer group transition text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="rounded text-blue-500 focus:ring-0 focus:ring-offset-0 w-4 h-4 checked:bg-blue-500 transition border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900"
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8 transition-colors duration-300">
        
        {/* TOP BAR HEADER */}
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight mb-1 text-slate-900 dark:text-white">Precision Inventory</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Showing <span className="font-medium text-slate-800 dark:text-slate-200">{filteredProducts.length}</span> of {data.length} performance modules
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">Sort By:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded px-3 py-1.5 focus:outline-none font-medium cursor-pointer transition bg-white border border-slate-200 text-slate-800 focus:border-slate-400 shadow-sm dark:bg-[#0b1528] dark:border-slate-800 dark:text-white dark:focus:border-slate-700"
              >
                <option>High Performance First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </header>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product._id || product.id} 
              className="border rounded-lg overflow-hidden flex flex-col justify-between group transition duration-300 hover:shadow-xl bg-white border-slate-200 hover:border-slate-300 hover:shadow-slate-200/50 dark:bg-[#091225] dark:border-slate-800/50 dark:hover:border-slate-700 dark:hover:shadow-black/20"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center p-4 transition bg-slate-100/70 dark:bg-[#050a14]">
                {product.badge && (
                  <span className={`absolute top-3 left-3 text-[10px] tracking-wider font-extrabold uppercase px-2 py-0.5 rounded shadow ${
                    product.badge === 'FLASH SALE' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200'
                  }`}>
                    {product.badge}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full object-contain group-hover:scale-105 transition duration-500 mix-blend-multiply opacity-90 group-hover:opacity-100 dark:mix-blend-lighten dark:opacity-80 dark:group-hover:opacity-100" 
                />
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Rating Row */}
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-slate-500 dark:text-slate-400">
                      {product.brand} / {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-[#eab308] text-xs font-semibold">
                      <Star size={12} fill="currentColor" />
                      <span>{product.rating?.toFixed(1) || "0.0"}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-base mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition tracking-wide text-slate-900 dark:text-white">
                    {product.name}
                  </h3>

                  {/* Specifications Snippet */}
                  <div className="text-xs font-medium space-y-0.5 border-l-2 pl-2.5 mb-4 py-0.5 text-slate-600 border-slate-200 dark:text-slate-400 dark:border-slate-800">
                    <p>{product.specifications?.line1} | {product.specifications?.line2}</p>
                    <p className="text-slate-400 dark:text-slate-500 truncate">{product.specifications?.line3}</p>
                  </div>
                </div>

                {/* Pricing and Action Button Row */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-xs line-through font-mono -mb-1 text-slate-400 dark:text-slate-500">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
                      ${product.price.toLocaleString()}
                    </span>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white p-2.5 rounded-md transition shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20">
                   <Link href={`/allProdect/${product._id}`}>
                    <ShoppingCart size={16} strokeWidth={2.5} />
                   </Link>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 border border-dashed rounded-lg border-slate-300 bg-slate-100/50 text-slate-500 dark:border-slate-800 dark:bg-[#091225]/30 dark:text-slate-400">
            <p className="font-medium">No system modules found matching your active filter array.</p>
          </div>
        )}

      </main>
    </div>
  );
}