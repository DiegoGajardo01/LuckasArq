import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/bg.png"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        
      </div>
      
      
      {/* Content */}
      <div className="relative z-10 -mt-16 md:-mt-24 lg:-mt-64">
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-4 sm:mb-6 text-center text-black">
          LUCKASARQ
        </h1>
      </div>

      {/* Recorte */}
      <div className="absolute inset-0 z-20">
        <Image
          src="/img/recorte.png"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </main>
  );
}