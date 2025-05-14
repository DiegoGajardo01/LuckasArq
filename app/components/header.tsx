import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 py-5">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-end">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-black font-bold text-sm hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/proyectos" className="text-black font-extrabold text-sm hover:opacity-70 transition-opacity">
              Proyectos
            </Link>
            <Link href="/contacto" className="text-black font-extrabold text-sm hover:opacity-70 transition-opacity">
              Contacto
            </Link>
            <div className="relative ml-4 group">
              <Link href="#" className="text-black font-extrabold text-sm hover:opacity-70 transition-all">
                ES
              </Link>
              <Link href="#" className="absolute top-full left-0 hidden group-hover:block text-black font-extrabold text-sm hover:opacity-70 transition-all">
                EN
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;