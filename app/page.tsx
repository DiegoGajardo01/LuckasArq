import Image from "next/image"
import Services from "@/components/services/Services"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image src="/img/bg.png" alt="Background" fill style={{ objectFit: "cover" }} priority />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-end justify-center h-full pr-10">

          {/* Header Rows */}
          <div className="absolute right-20 top-1/4">
            <div className="flex flex-row items-start gap-4">
              {/* Logo */}
              <div className="mb-4">
                <Image src="/img/logo.png" alt="Logo" width={250} height={100} />
              </div>
              {/* Columna ARQ */}
              <div className="flex flex-col items-center">
                {["A", "R", "Q"].map((letter, index) => (
                  <h1 key={index} className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">
                    {letter}
                  </h1>
                ))}
              </div>
              
              {/* Columna LUCKAS */}
              <div className="flex flex-col items-center">
                {["L", "U", "C", "K", "A", "S"].map((letter, index) => (
                  <h1 key={index} className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-ligth text-black">
                    {letter}
                  </h1>
                ))}
              </div>
            </div>
          </div>
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