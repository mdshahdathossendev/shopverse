"use client";

import React from "react";
import { Laptop, Smartphone, Watch, Headphones } from "lucide-react";

export default function Categories() {
  const categories = [
    { name: "Laptops", icon: Laptop },
    { name: "Smartphones", icon: Smartphone },
    { name: "Smartwatches", icon: Watch },
    { name: "Accessories", icon: Headphones },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 bg-slate-50 dark:bg-[#030d1a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white tracking-tight">
          Top Categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {categories.map((cat, index) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center aspect-square rounded-2xl cursor-pointer border transition-all duration-300 p-3 sm:p-4 
                  /* Light Mode Styles */
                  bg-white border-slate-200 text-slate-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1
                  /* Dark Mode Styles */
                  dark:bg-[#061324] dark:border-gray-800/40 dark:text-white dark:hover:bg-[#0a1b33] dark:hover:border-blue-500/50 dark:hover:shadow-xl dark:hover:shadow-blue-500/10"
              >
                {/* Icon Container with Hover Scale */}
                <div className="p-4 rounded-xl mb-4 text-blue-600 dark:text-blue-500 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-8 h-8 stroke-[1.5]" />
                </div>

                {/* Category Text Label */}
                <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}