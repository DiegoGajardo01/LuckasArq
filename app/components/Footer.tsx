import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#474747] py-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-xs text-white">
            © 2025 LuckasArq. Todos los derechos reservados.
          </p>
          <div className="fixed bottom-4 right-4 flex space-x-4">
            <Link 
              href="https://www.instagram.com/luckas.arq" 
              aria-label="Instagram" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;