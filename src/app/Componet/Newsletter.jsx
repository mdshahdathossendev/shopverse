"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission logic here
    console.log("Submitting email:", email);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 bg-slate-50 dark:bg-[#030d1a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Card Container */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-8 md:p-12 rounded-2xl border bg-white border-slate-200 dark:bg-[#061324] dark:border-gray-800/40 shadow-sm dark:shadow-2xl">
          
          {/* Left Column: Text Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Unlock the Future of Hardware.
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-gray-400 font-normal leading-relaxed max-w-xl">
              Get early access to drops, exclusive technical reviews, and flash sale alerts. No noise, just precision tech.
            </p>
          </div>

          {/* Right Column: Form Layout */}
          <div className="lg:col-span-5 w-full flex flex-col space-y-3">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
              
              {/* Input Field Frame */}
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your engineering email"
                  required
                  className="w-full bg-slate-100 dark:bg-[#0c1929] border border-slate-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-gray-200 placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Action Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto flex-shrink-0 px-6 py-3 rounded-xl bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-blue-500/10 active:scale-[0.98]"
              >
                Join The Mart
              </button>
            </form>

            {/* Privacy Legal Note */}
            <p className="text-[11px] text-slate-500 dark:text-gray-400 font-medium tracking-wide">
              By subscribing, you agree to our{" "}
              <a href="#privacy" className="font-semibold text-slate-700 dark:text-gray-300 hover:underline">
                Precision Privacy Policy
              </a>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}