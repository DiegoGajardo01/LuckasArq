"use client"

import Image from "next/image"
import ServiciosDer from "@/components/services/servicios-cardsizq"
import ServiciosIzq from "@/components/services/servicios-cardsder"
import Contacto from "@/components/contacto"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Home() {
  const { t } = useLanguage()
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image 
            src="/img/bg.png" 
            alt="Fondo arquitectónico moderno - LuckasArq, arquitecto profesional en Chile" 
            fill 
            style={{ objectFit: "cover" }} 
            priority 
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-end justify-center h-full pr-10">

          {/* Header Rows */}
          <div className="absolute right-20 top-1/4">
            <div className="flex flex-row items-start gap-4">
              {/* Logo */}
              <div className="mb-4">
                <Image 
                  src="/img/logo.png" 
                  alt="Logo LuckasArq - Arquitecto Profesional en Chile especializado en diseño arquitectónico" 
                  width={150} 
                  height={50} 
                />
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

      <section className="bg-[#f9f9f9] py-4 md:py-6 lg:py-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 mt-8 md:mt-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider text-black">{t.home.servicios}</h2>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-[#f9f9f9] py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 space-y-8 md:space-y-12 lg:space-y-16">
          {/* Card derecha */}
          <ServiciosDer
            rutaImagen="/img/renders/render5.png"
            title={t.home.architecturalDesign.title} 
            description={t.home.architecturalDesign.description}
          />

          <ServiciosIzq
            rutaImagen="/img/renders/interior1.png"
            title={t.home.interiorDesign.title} 
            description={t.home.interiorDesign.description}
          />

          <ServiciosDer
            rutaImagen="/img/regularizacion.jpg"
            title={t.home.regularization.title} 
            description={t.home.regularization.description}
          />

          <ServiciosIzq
            rutaImagen="/img/dron.jpg"
            title={t.home.surveys3d.title} 
            description={t.home.surveys3d.description}
          />

          <ServiciosDer
            rutaImagen="/img/electro.png"
            title={t.home.electricalProjects.title} 
            description={t.home.electricalProjects.description}
          />
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-8 md:py-12 lg:py-16 xl:py-20 px-4 md:px-6 lg:px-8">
        <Contacto/>
      </section>
    </>
  )
}
