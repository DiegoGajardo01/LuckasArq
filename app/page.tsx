import Image from "next/image"
import Services from "./components/services/Services"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image src="/img/bg.png" alt="Background" fill style={{ objectFit: "cover" }} priority />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-center text-black">LUCKASARQ</h1>
        </div>

        {/* Recorte overlay */}
        <div className="absolute inset-0 z-20">
          <Image src="/img/recorte.png" alt="Background" fill style={{ objectFit: "cover" }} priority />
        </div>
      </section>

      {/* Services Section - With taller cards */}
      <section className="bg-[#f9f9f9] py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <Services />
        </div>
      </section>
    </>
  )
}
