import Image from "next/image"
import ServiciosDer from "@/components/services/servicios-cardsizq"
import ServiciosIzq from "@/components/services/servicios-cardsder"
import Contacto from "@/components/contacto"

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
                <Image src="/img/logo.png" alt="Logo" width={150} height={50} />
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

      <section className="bg-[#f9f9f9] py-2 md:py-2 lg:py-2">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 mt-12">
          <h3 className="text-5xl font-black tracking-wider text-black">SERVICIOS</h3>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-[#f9f9f9] py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 space-y-16">
          {/* Card derecha */}
          <ServiciosDer
            rutaImagen="/img/renders/render5.png"
            title="Diseño Arquitectónico" 
            description="Diseño espacios habitables de diversas escalas, priorizando la simplicidad y precisión para crear entornos funcionales."
          />

          <ServiciosIzq
            rutaImagen="/img/renders/interior1.png"
            title="Diseño de Interiores" 
            description="Diseño y remodelo interiores, mejorando funcionalidad, estética y confort con un enfoque en la calidad del habitar."
          />

<         ServiciosDer
            rutaImagen="/img/renders/render3.png"
            title="Tramites DOM" 
            description="Gestiono los permisos municipales cuando el cliente lo requiere, facilitando un proceso claro, ágil y sin complicaciones."
          />
          <ServiciosIzq
            rutaImagen="/img/renders/pilar.png"
            title="Otros" 
            description="Implementamos principios ecológicos para crear edificaciones eficientes y responsables."
          />
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-12 md:py-16 lg:py-20">
        <Contacto/>
      </section>
    </>
  )
}