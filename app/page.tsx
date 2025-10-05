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
            description="Diseñamos una arquitectura esencial que equilibra Habitabilidad, Viabilidad Técnica y cumplimiento total de la OGUC."
          />

          <ServiciosIzq
            rutaImagen="/img/renders/interior1.png"
            title="Diseño de Interiores" 
            description="Construimos atmósferas con materiales nobles que maximizan el confort y la funcionalidad del espacio."
          />

          <ServiciosDer
            rutaImagen="/img/renders/render3.png"
            title="Regularización de Viviendas" 
            description="Formalizamos tu construcción ante la DOM. Partiendo con un estudio de Factibilidad para definir la vía legal más rápida."
          />
          <ServiciosIzq
            rutaImagen="/img/renders/pilar.png"
            title="Levantamientos 3D" 
            description="Realizamos Levantamiento Fotogramétrico con Drones, una técnica que usa miles de fotografías aéreas georreferenciadas para construir un Modelo 3D exacto de tu terreno y edificación."
          />
          <ServiciosDer
            rutaImagen="/img/renders/render3.png"
            title="Proyectos Eléctricos SEC" 
            description="Diseñamos y construimos proyectos eléctricos certificados por especialistas SEC, priorizando la economía y la optimización energética de tu instalación."
          />
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-12 md:py-16 lg:py-20">
        <Contacto/>
      </section>
    </>
  )
}