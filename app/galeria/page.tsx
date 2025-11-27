"use client"

import DynamicGallery from "@/components/DynamicGallery"
import { useLanguage } from "@/contexts/LanguageContext"

// Array de imágenes de ejemplo - Reemplaza con tus imágenes reales
const sampleImages = [
  "/img/renders/render5.png",
  "/img/renders/interior1.png",
  "/img/regularizacion.jpg",
  "/img/renders/render5.png",
  "/img/renders/interior1.png",
  "/img/regularizacion.jpg",
  "/img/renders/render5.png",
  "/img/renders/interior1.png",
  "/img/regularizacion.jpg",
  "/img/renders/render5.png",
  "/img/renders/interior1.png",
  "/img/regularizacion.jpg",
  "/img/renders/render5.png",
  "/img/renders/interior1.png",
  "/img/regularizacion.jpg",
  "/img/renders/interior1.png",
  "/img/regularizacion.jpg",
  "/img/renders/render5.png",
  "/img/renders/interior1.png",
  "/img/regularizacion.jpg",
  "/img/renders/interior1.png",
  "/img/regularizacion.jpg",
  "/img/renders/render5.png",
  "/img/renders/interior1.png",
  "/img/regularizacion.jpg",
  "/img/renders/interior1.png",
  "/img/regularizacion.jpg",
  "/img/renders/render5.png",
  "/img/renders/interior1.png",
  "/img/regularizacion.jpg",
  "/img/renders/interior1.png",
]

export default function Galeria() {
  const { t } = useLanguage()

  return (
    <main className="pt-24 pb-16 bg-[#f9f9f9] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-8">
        <h1 className="text-4xl md:text-5xl text-black font-bold mb-4 text-center">
          {t.gallery?.title || 'Galería'}
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          {t.gallery?.description || 'Explora nuestra colección de proyectos arquitectónicos'}
        </p>
      </div>
      <DynamicGallery images={sampleImages} />
    </main>
  )
}

