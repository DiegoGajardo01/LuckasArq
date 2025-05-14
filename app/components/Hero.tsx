import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-10">
        <Image 
          src="/public/img/bg.png" 
          alt="Fondo arquitectónico" 
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* Title Layer */}
      <h1 className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center text-black hero-title">
        LUCKASARQ
      </h1>
      
      {/* Overlay Image Layer */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <Image 
          src="/public/img/recorte.png" 
          alt="Casa arquitectónica" 
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;