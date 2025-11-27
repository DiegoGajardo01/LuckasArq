"use client"

import { useEffect } from 'react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luckasarq.com'

interface GalleryStructuredDataProps {
  images?: string[]
}

export default function GalleryStructuredData({ images = [] }: GalleryStructuredDataProps) {
  useEffect(() => {
    // ImageGallery structured data for SEO
    const imageGalleryData = {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      '@id': `${siteUrl}/galeria#gallery`,
      name: 'Galería de Proyectos Arquitectónicos - LuckasArq',
      description: 'Galería visual de proyectos arquitectónicos, diseños residenciales, comerciales, renders 3D y fotografías de obras realizadas por Luckas Gajardo, arquitecto profesional en Chile.',
      url: `${siteUrl}/galeria`,
      image: images.length > 0 ? images.map((img, index) => ({
        '@type': 'ImageObject',
        '@id': `${siteUrl}/galeria#image-${index + 1}`,
        url: img.startsWith('http') ? img : `${siteUrl}${img}`,
        caption: `Proyecto arquitectónico ${index + 1} - LuckasArq`,
      })) : [`${siteUrl}/img/og-image.jpg`],
      creator: {
        '@type': 'Person',
        name: 'Luckas Gajardo',
        jobTitle: 'Arquitecto',
      },
      publisher: {
        '@type': 'Organization',
        name: 'LuckasArq',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/img/logo.png`,
        },
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      inLanguage: 'es-CL',
      about: {
        '@type': 'Thing',
        name: 'Arquitectura y Diseño',
        description: 'Proyectos arquitectónicos, diseño de interiores, renders 3D y obras realizadas',
      },
      keywords: [
        'galería arquitectura',
        'portfolio arquitectónico',
        'proyectos arquitectónicos',
        'renders arquitectura',
        'diseño de interiores',
        'arquitectura chile',
      ],
    }

    // CollectionPage structured data
    const collectionPageData = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${siteUrl}/galeria#collection`,
      name: 'Galería de Proyectos Arquitectónicos',
      description: 'Colección de proyectos arquitectónicos, diseños y renders realizados por LuckasArq',
      url: `${siteUrl}/galeria`,
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: images.length || 0,
        itemListElement: images.map((img, index) => ({
          '@type': 'ImageObject',
          position: index + 1,
          url: img.startsWith('http') ? img : `${siteUrl}${img}`,
          name: `Proyecto Arquitectónico ${index + 1}`,
        })),
      },
    }

    // Add scripts to head
    const scripts = [
      { id: 'structured-data-gallery', data: imageGalleryData },
      { id: 'structured-data-collection', data: collectionPageData },
    ]

    scripts.forEach(({ id, data }) => {
      // Remove existing script if any
      const existing = document.getElementById(id)
      if (existing) {
        existing.remove()
      }

      // Create new script
      const script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      script.text = JSON.stringify(data)
      document.head.appendChild(script)
    })

    // Cleanup function
    return () => {
      scripts.forEach(({ id }) => {
        const script = document.getElementById(id)
        if (script) {
          script.remove()
        }
      })
    }
  }, [images])

  return null
}

