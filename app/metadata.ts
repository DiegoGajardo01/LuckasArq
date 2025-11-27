import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luckasarq.com'

export const homeMetadata: Metadata = {
  title: "Inicio - Arquitectura y Diseño Profesional",
  description: "Luckas Gajardo, arquitecto chileno especializado en diseño arquitectónico, diseño de interiores, regularización de viviendas, levantamientos 3D con drones y proyectos eléctricos SEC. Servicios profesionales de arquitectura en Chile.",
  keywords: [
    'arquitecto chileno',
    'diseño arquitectónico',
    'diseño de interiores',
    'regularización de viviendas',
    'levantamientos 3D',
    'proyectos eléctricos SEC',
    'arquitectura residencial',
    'arquitectura comercial',
    'renders arquitectónicos'
  ],
  openGraph: {
    title: "LuckasArq - Arquitectura y Diseño Profesional",
    description: "Servicios profesionales de arquitectura, diseño de interiores, regularización de viviendas, levantamientos 3D y proyectos eléctricos SEC en Chile.",
    url: siteUrl,
    siteName: 'LuckasArq',
    images: [
      {
        url: `${siteUrl}/img/imgog.jpeg`,
        width: 1200,
        height: 630,
        alt: 'LuckasArq - Arquitectura y Diseño',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LuckasArq - Arquitectura y Diseño Profesional",
    description: "Servicios profesionales de arquitectura, diseño de interiores, regularización de viviendas, levantamientos 3D y proyectos eléctricos SEC en Chile.",
    images: [`${siteUrl}/img/imgog.jpeg`],
  },
  alternates: {
    canonical: siteUrl,
  },
}

