//import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-center">LuckasArq</h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 text-center">
        👷👨‍💻 Esto es entorno dev 👨‍💻👷
      </p>
      <footer>
        <div className="fixed bottom-4 right-4 flex space-x-4">
          <Link href="https://www.instagram.com/luckas.arq" aria-label="Instagram" className="text-white hover:text-gray-400 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 sm:w-7 sm:h-7">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
        </div>
      </footer>
    </main>
  );
}