import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luckasarq.com'

export const metadata: Metadata = {
  title: "Galería - Portfolio de Proyectos",
  description: "Explora nuestra galería de proyectos arquitectónicos: diseños residenciales, comerciales, renders y fotografías de obras realizadas por Luckas Gajardo, arquitecto profesional en Chile.",
  keywords: [
    'galería arquitectura',
    'portfolio arquitectónico',
    'proyectos arquitectónicos',
    'renders arquitectura',
    'fotografías arquitectura',
    'obras arquitectónicas',
    'arquitectura chile'
  ],
  openGraph: {
    title: "Galería - Portfolio de Proyectos | LuckasArq",
    description: "Explora nuestra galería de proyectos arquitectónicos: diseños residenciales, comerciales, renders y fotografías de obras realizadas.",
    url: `${siteUrl}/galeria`,
    siteName: 'LuckasArq',
    images: [
      {
        url: `${siteUrl}/img/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Galería de Proyectos Arquitectónicos - LuckasArq',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Galería - Portfolio de Proyectos | LuckasArq",
    description: "Explora nuestra galería de proyectos arquitectónicos: diseños residenciales, comerciales, renders y fotografías de obras realizadas.",
    images: [`${siteUrl}/img/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/galeria`,
  },
}

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

