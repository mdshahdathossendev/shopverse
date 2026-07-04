'use client';
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { ThemeSwitch } from './ThemToogle';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-slate-50 dark:bg-[#030d1a] text-slate-800 dark:text-white border-b border-slate-200 dark:border-gray-800 transition-colors duration-200 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Left Side: Logo & Desktop Links */}
          <div className="flex items-center space-x-3 sm:space-x-8">
            <div className="text-base sm:text-xl font-bold tracking-wider text-blue-600 dark:text-blue-500 cursor-pointer whitespace-nowrap">
              GADGET MART
            </div>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a href="#laptops" className="relative text-blue-600 dark:text-blue-500 pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 dark:after:bg-blue-500">
                Laptops
              </a>
              <a href="#phones" className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                Phones
              </a>
              <a href="#watches" className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                Watches
              </a>
            </div>
          </div>

          {/* Right Side: Search & Actions */}
          <div className="flex items-center space-x-1 sm:space-x-4 flex-1 justify-end max-w-3xl">
            
            {/* Desktop Search Bar */}
            <div className="relative w-full max-w-xs xl:max-w-md hidden sm:block mx-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-gray-500 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search gadgets..." 
                className="w-full bg-slate-100 dark:bg-[#0c1929] border border-slate-200 dark:border-gray-800 rounded-lg pl-10 pr-4 py-1.5 text-sm text-slate-800 dark:text-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 text-slate-600 dark:text-gray-300">
              <button className="hover:text-slate-900 dark:hover:text-white p-1" aria-label="Cart">
                <ShoppingCart className="w-5 h-5" />
              </button>

              <ThemeSwitch />

              <div className="hidden sm:block h-5 w-[1px] bg-slate-200 dark:bg-gray-800"></div>

              <button className="hidden sm:block hover:text-slate-900 dark:hover:text-white p-1" aria-label="Profile">
                <Link href={'/sinin'}>
                <User className="w-5 h-5" />
                </Link>
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden p-1 hover:text-slate-900 dark:hover:text-white"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-100 dark:bg-[#0c1929] border-b border-slate-200 dark:border-gray-800 px-4 pt-2 pb-4 space-y-3 transition-all">
          {/* Mobile Search input inside menu */}
          <div className="relative w-full sm:hidden">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-gray-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search gadgets..." 
              className="w-full bg-slate-50 dark:bg-[#030d1a] border border-slate-200 dark:border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#laptops" className="text-blue-600 dark:text-blue-500 font-medium py-1">Laptops</a>
            <a href="#phones" className="text-slate-600 dark:text-gray-400 py-1">Phones</a>
            <a href="#watches" className="text-slate-600 dark:text-gray-400 py-1">Watches</a>
            <a href="#profile" className="text-slate-600 dark:text-gray-400 py-1 sm:hidden flex items-center gap-2">
              <User className="w-4 h-4" /> Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}