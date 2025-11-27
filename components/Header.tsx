"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 py-3 md:py-5 bg-white/80 backdrop-blur-sm md:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <nav className="flex justify-end">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className="text-black font-bold text-sm hover:opacity-70 transition-opacity">
              {t.nav.home}
            </Link>
            <Link href="/galeria" className="text-black font-bold text-sm hover:opacity-70 transition-opacity">
              {t.nav.galeria}
            </Link>
            <div className="relative ml-4 group">
              <button
                onClick={() => handleLanguageChange('es')}
                className={`text-black font-bold text-sm hover:opacity-70 transition-all ${language === 'es' ? 'opacity-100' : 'opacity-50'}`}
              >
                ES
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`ml-2 text-black font-bold text-sm hover:opacity-70 transition-all ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="flex flex-col gap-4 px-4 py-4">
              <Link 
                href="/" 
                className="text-black font-bold text-sm hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/galeria" 
                className="text-black font-bold text-sm hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.galeria}
              </Link>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleLanguageChange('es')}
                  className={`text-black font-bold text-sm hover:opacity-70 transition-all ${language === 'es' ? 'opacity-100' : 'opacity-50'}`}
                >
                  ES
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`text-black font-bold text-sm hover:opacity-70 transition-all ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;