import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luckasarq.com'

export const metadata: Metadata = {
  title: "Galería de Proyectos Arquitectónicos - Portfolio Visual | LuckasArq",
  description: "Explora nuestra galería completa de proyectos arquitectónicos: diseños residenciales, comerciales, renders 3D, fotografías de obras realizadas y diseño de interiores. Portfolio visual de Luckas Gajardo, arquitecto profesional en Chile especializado en arquitectura moderna, diseño de interiores y regularización de viviendas.",
  keywords: [
    'galería arquitectura',
    'portfolio arquitectónico',
    'proyectos arquitectónicos chile',
    'renders arquitectura 3D',
    'fotografías arquitectura',
    'obras arquitectónicas',
    'arquitectura chile',
    'diseño arquitectónico',
    'diseño de interiores',
    'arquitectura residencial',
    'arquitectura comercial',
    'galería de proyectos',
    'portfolio visual arquitecto',
    'renders profesionales',
    'arquitectura moderna chile',
    'diseño de casas',
    'proyectos arquitectónicos realizados'
  ],
  openGraph: {
    title: "Galería de Proyectos Arquitectónicos - Portfolio Visual | LuckasArq",
    description: "Explora nuestra galería completa de proyectos arquitectónicos: diseños residenciales, comerciales, renders 3D y fotografías de obras realizadas por Luckas Gajardo, arquitecto profesional en Chile.",
    url: `${siteUrl}/galeria`,
    siteName: 'LuckasArq',
    images: [
      {
        url: `${siteUrl}/img/imgog.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Galería de Proyectos Arquitectónicos - LuckasArq - Portfolio Visual',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Galería de Proyectos Arquitectónicos - Portfolio Visual | LuckasArq",
    description: "Explora nuestra galería completa de proyectos arquitectónicos: diseños residenciales, comerciales, renders 3D y fotografías de obras realizadas.",
    images: [`${siteUrl}/img/imgog.jpeg`],
  },
  alternates: {
    canonical: `${siteUrl}/galeria`,
    languages: {
      'es-CL': `${siteUrl}/galeria`,
      'en-US': `${siteUrl}/en/galeria`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

