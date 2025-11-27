"use client"

import DynamicGallery from "@/components/DynamicGallery"
import GalleryStructuredData from "@/components/GalleryStructuredData"
import { useLanguage } from "@/contexts/LanguageContext"

// Array de imágenes de ejemplo - Reemplaza con tus imágenes reales
const sampleImages = [
  "/img/renders/interior1.png",
  "/img/renders/baño1.png",
  "/img/renders/cocina.png",
  "/img/renders/4kb3035.png",
  "/img/renders/cubo.png",
  "/img/renders/RENDER2.jpeg",
  "/img/renders/render5.png",
  "/img/renders/render4.png",
  "/img/renders/render5.png",
]

export default function Galeria() {
  const { t } = useLanguage()

  return (
    <>
      <GalleryStructuredData images={sampleImages} />
      <main className="pt-24 pb-16 bg-[#f9f9f9] min-h-screen">
        <article className="container mx-auto px-4 md:px-6 lg:px-8 mb-8">
          <header>
            <h1 className="text-4xl md:text-5xl text-black font-bold mb-4 text-center">
              {t.gallery?.title || 'Galería de Proyectos Arquitectónicos'}
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
              {t.gallery?.description || 'Explora nuestra colección de proyectos arquitectónicos, diseños residenciales, comerciales, renders 3D y fotografías de obras realizadas por LuckasArq.'}
            </p>
          </header>
        </article>
        <section aria-label="Galería de imágenes de proyectos arquitectónicos">
          <DynamicGallery images={sampleImages} />
        </section>
      </main>
    </>
  )
}

