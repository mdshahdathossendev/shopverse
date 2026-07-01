'use client';

import React, { useState, useRef } from 'react';
import { User, Mail, Lock, Shield, Camera, ArrowRight, Eye, EyeOff } from 'lucide-react';
import ImageUploader from '@/app/Componet/Uplodeimage';

export default function RegisterPage() {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const fileInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
   console.log(data, imageUrl)
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0b1329] flex items-center justify-center p-4 sm:p-6 md:p-8 antialiased transition-colors duration-200">
      
      {/* Card Wrapper */}
      <div className="w-full max-w-xl bg-white dark:bg-[#030712] border border-gray-200 dark:border-gray-900/60 rounded-2xl shadow-2xl p-6 sm:p-10 md:p-12 transition-all">
        
        {/* Header Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
            Create Your Account
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Precision engineered electronics at your fingertips.
          </p>
        </div>

        {/* Social Authentication */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button 
            type="button" 
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d1527] text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#131e36] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            <span className="text-xs sm:text-sm">Google</span>
          </button>
          
          <button 
            type="button" 
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d1527] text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#131e36] transition-colors"
          >
            <svg className="w-4 h-4 fill-current text-gray-900 dark:text-white" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05 1.88-3.08 1.88-1.02 0-1.35-.62-2.52-.62-1.18 0-1.55.6-2.52.63-1.01.03-2.22-1-3.2-1.98-2.01-2-3.56-5.63-3.56-9.04 0-5.4 3.49-8.26 6.93-8.26 1.09 0 2.11.4 2.78.83.67.43 1.39.83 2.17.83.74 0 1.34-.37 2.03-.81.82-.53 1.99-.9 3.12-.9 3.73 0 6.57 2.71 6.57 6.37 0 .8-.1 1.6-.33 2.37-1.16 3.91-3.21 8.2-4.93 9.81zM15.97 4.17c1.39-1.68 1.31-3.22 1.27-3.67-.39.02-1.92.5-3.04 1.81-1.02 1.2-1.22 2.54-1.16 2.97.43.03 1.8-.31 2.93-1.11z"/>
            </svg>
            <span className="text-xs sm:text-sm">Apple</span>
          </button>
        </div>

        {/* Separator */}
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute w-full border-t border-gray-200 dark:border-gray-800/80"></div>
          <span className="relative bg-white dark:bg-[#030712] px-3 text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500">
            Or Sign Up With Email
          </span>
        </div>

        {/* Form Registration Fields */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          
          {/* Profile Picture Upload Element */}
         <ImageUploader setImageUrl={setImageUrl}></ImageUploader>

          {/* Full Name field */}
          <div>
            <label htmlFor="fullname" className="block text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                id="fullname" 
                placeholder="John Doe" 
                required
                className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0d1527] text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="email" 
                id="email" 
                name='email'
                placeholder="john@example.com" 
                required
                className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0d1527] text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Two-Column Password Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  id="password" 
                  name='password'
                  placeholder="••••••••" 
                  required
                  className="w-full pl-11 pr-12 py-2.5 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0d1527] text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                Confirm
              </label>
              <div className="relative">
                <Shield className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirm-password" 
                  name='confirm-password'
                  placeholder="••••••••" 
                  required
                  className="w-full pl-11 pr-12 py-2.5 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0d1527] text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="flex items-start pt-1">
            <input 
              type="checkbox" 
              id="terms" 
              required
              className="mt-0.5 h-4 w-4 rounded border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0d1527] text-blue-600 focus:ring-blue-500/30 focus:ring-offset-0"
            />
            <label htmlFor="terms" className="ml-2 text-xs text-gray-500 dark:text-gray-400 select-none leading-normal">
              I agree to the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          {/* Action Submit Button */}
          <button 
            type="submit" 
            className="w-full mt-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/10 dark:shadow-blue-600/20 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Form Redirection Link */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
          Already have an account? <a href="/sinin" className="text-blue-600 dark:text-blue-500 font-medium hover:underline ml-1">Login here</a>
        </p>
      </div>

    </div>
  );
}