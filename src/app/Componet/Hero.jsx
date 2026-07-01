"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  // Animation variants for standard staggered entry elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // FIX: Changed base text-slate-800 to text-slate-900 dark:text-white
    <section className="relative overflow-hidden min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-16 py-10 sm:py-12 bg-white dark:bg-[#030d1a] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Dynamic Animated Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[6000ms]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        
        {/* Left Side Content Column */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6"
        >
          {/* Tagline / New Arrival Badge */}
          <motion.div 
            variants={fadeInUp}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-white bg-blue-600 dark:bg-blue-500 shadow-md shadow-blue-500/20"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            NEW ARRIVAL
          </motion.div>

          {/* Heading */}
          {/* FIX: Ensured text colors inherit or map cleanly to deep darks vs absolute white */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white"
          >
            MacBook Pro.<br />
            <span className="text-blue-600 dark:text-blue-500 bg-clip-text">Mind-blowing.</span><br />
            Head-turning.
          </motion.h1>

          {/* Subheading text */}
          {/* FIX: Explicit light and dark classes for body text contrast */}
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg max-w-lg text-slate-600 dark:text-gray-300 font-normal leading-relaxed"
          >
            The most advanced chips ever built for a personal computer. M3 Max brings massive performance for the most demanding workflows.
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto"
          >
            {/* Primary Action Button */}
            <motion.button 
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px -10px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-medium shadow-lg transition-colors group w-full sm:w-auto"
            >
              Shop Now 
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>

            {/* Secondary Action Button */}
            {/* FIX: Button outline maps perfectly now to subtle light/dark states */}
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "rgba(148, 163, 184, 0.12)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-xl font-medium border border-slate-300 dark:border-slate-800 bg-transparent text-slate-700 dark:text-gray-300 transition-colors w-full sm:w-auto"
            >
              View Specs
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side Image Canvas */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end items-center relative w-full mt-6 lg:mt-0"
        >
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-blue-900/10 border border-slate-200/50 dark:border-slate-800/40 bg-slate-900"
          >
            <img 
              src="/path-to-your-macbook-image.png" 
              alt="MacBook Pro M3 Max" 
              className="w-full h-auto max-w-[540px] block object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}