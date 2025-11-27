"use client"

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#474747] py-4 md:py-6 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <p className="text-xs sm:text-sm text-white text-center sm:text-left">
            {t.footer.rights}
          </p>
          <div className="flex sm:hidden space-x-4">
            <Link 
              href="https://www.instagram.com/luckas.arq" 
              aria-label="Instagram" 
              className="text-white hover:text-gray-300 transition-colors"
              target="_blank"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="w-6 h-6"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* Desktop Social Icons - Fixed Position */}
      <div className="hidden sm:flex fixed bottom-4 right-4 md:bottom-6 md:right-6 z-20">
        <Link 
          href="https://www.instagram.com/luckas.arq" 
          aria-label="Instagram" 
          className="text-white hover:text-gray-300 transition-colors bg-[#474747] p-2 rounded-full shadow-lg"
          target="_blank"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="w-6 h-6 md:w-7 md:h-7"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;