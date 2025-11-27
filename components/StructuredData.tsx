"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect } from 'react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luckasarq.com'

export default function StructuredData() {
  const { language } = useLanguage()

  useEffect(() => {
    // LocalBusiness/Architect structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': siteUrl,
      name: 'LuckasArq',
      alternateName: 'Luckas Gajardo Arquitecto',
      description: language === 'es' 
        ? 'Servicios profesionales de arquitectura, diseño de interiores, regularización de viviendas, levantamientos 3D y proyectos eléctricos SEC en Chile.'
        : 'Professional architecture services, interior design, housing regularization, 3D surveys and SEC electrical projects in Chile.',
      url: siteUrl,
      logo: `${siteUrl}/img/logo.png`,
      image: `${siteUrl}/img/og-image.jpg`,
      founder: {
        '@type': 'Person',
        name: 'Luckas Gajardo',
        jobTitle: 'Arquitecto',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CL',
        addressLocality: 'Chile',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Chile',
      },
      serviceType: [
        'Diseño Arquitectónico',
        'Diseño de Interiores',
        'Regularización de Viviendas',
        'Levantamientos 3D',
        'Proyectos Eléctricos SEC'
      ],
      priceRange: '$$',
      telephone: '+54 9 11 1234-5678',
      email: 'contacto@luckasarq.com',
      sameAs: [
        'https://www.instagram.com/luckas.arq'
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '10'
      }
    }

    // Organization structured data
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'LuckasArq',
      url: siteUrl,
      logo: `${siteUrl}/img/logo.png`,
      sameAs: [
        'https://www.instagram.com/luckas.arq'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+54-9-11-1234-5678',
        contactType: 'customer service',
        areaServed: 'CL',
        availableLanguage: ['Spanish', 'English']
      }
    }

    // Website structured data
    const websiteData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'LuckasArq',
      url: siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    }

    // Add scripts to head
    const scripts = [
      { id: 'structured-data-business', data: structuredData },
      { id: 'structured-data-organization', data: organizationData },
      { id: 'structured-data-website', data: websiteData }
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
  }, [language])

  return null
}

