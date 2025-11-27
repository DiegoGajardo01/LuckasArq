"use client"

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Image from 'next/image'

// Tipos de relación de aspecto
type AspectRatio = '16:9' | '4:3' | '1:1' | '9:16'

// Interfaz para imagen procesada
interface ProcessedImage {
  url: string
  aspectRatio: AspectRatio
  width: number
  height: number
  loaded: boolean
}

// Configuración de límites por fila según relación de aspecto
const MAX_PER_ROW: Record<AspectRatio, { desktop: number; tablet: number; mobile: number }> = {
  '16:9': { desktop: 3, tablet: 2, mobile: 1 },
  '4:3': { desktop: 4, tablet: 3, mobile: 2 },
  '1:1': { desktop: 5, tablet: 4, mobile: 2 },
  '9:16': { desktop: 6, tablet: 4, mobile: 2 },
}

// Gap entre imágenes (en píxeles)
const GAP = 4

interface DynamicGalleryProps {
  images: string[]
}

/**
 * Calcula la relación de aspecto de una imagen y la clasifica
 * @param width - Ancho de la imagen
 * @param height - Alto de la imagen
 * @returns AspectRatio clasificado
 */
function classifyAspectRatio(width: number, height: number): AspectRatio {
  if (width === 0 || height === 0) return '1:1' // Default para imágenes sin dimensiones

  const ratio = width / height

  // Definir rangos de tolerancia para cada relación de aspecto
  const ratios = {
    '16:9': 16 / 9,   // ~1.778
    '4:3': 4 / 3,     // ~1.333
    '1:1': 1,         // 1.0
    '9:16': 9 / 16,   // ~0.563
  }

  // Calcular diferencias y encontrar la más cercana
  let closestRatio: AspectRatio = '1:1'
  let minDifference = Math.abs(ratio - ratios['1:1'])

  for (const [key, value] of Object.entries(ratios)) {
    const difference = Math.abs(ratio - value)
    if (difference < minDifference) {
      minDifference = difference
      closestRatio = key as AspectRatio
    }
  }

  return closestRatio
}

/**
 * Obtiene el máximo de imágenes por fila según el tamaño de pantalla
 * @param aspectRatio - Relación de aspecto de la imagen
 * @param windowWidth - Ancho de la ventana
 * @returns Número máximo de imágenes por fila
 */
function getMaxPerRow(aspectRatio: AspectRatio, windowWidth: number): number {
  const config = MAX_PER_ROW[aspectRatio]
  
  if (windowWidth < 640) {
    return config.mobile
  } else if (windowWidth < 1024) {
    return config.tablet
  }
  return config.desktop
}

export default function DynamicGallery({ images }: DynamicGalleryProps) {
  const [processedImages, setProcessedImages] = useState<ProcessedImage[]>([])
  const [windowWidth, setWindowWidth] = useState(0)
  const [loading, setLoading] = useState(true)

  // Detectar ancho de ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Procesar imágenes: cargar y detectar dimensiones
  useEffect(() => {
    if (images.length === 0) {
      setLoading(false)
      return
    }

    const processImages = async () => {
      const processed: ProcessedImage[] = []

      for (const url of images) {
        try {
          // Crear una imagen para obtener sus dimensiones
          const img = new window.Image()
          
          await new Promise<void>((resolve) => {
            img.onload = () => {
              const aspectRatio = classifyAspectRatio(img.width, img.height)
              processed.push({
                url,
                aspectRatio,
                width: img.width,
                height: img.height,
                loaded: true,
              })
              resolve()
            }
            img.onerror = () => {
              // Si falla la carga, usar valores por defecto
              processed.push({
                url,
                aspectRatio: '1:1',
                width: 1,
                height: 1,
                loaded: false,
              })
              resolve()
            }
            img.src = url
          })
        } catch {
          // En caso de error, agregar con valores por defecto
          processed.push({
            url,
            aspectRatio: '1:1',
            width: 1,
            height: 1,
            loaded: false,
          })
        }
      }

      setProcessedImages(processed)
      setLoading(false)
    }

    processImages()
  }, [images])

  /**
   * Crea filas variadas con diferentes cantidades de imágenes
   * Prioriza el patrón de variación sobre el agrupamiento por aspecto
   * En móvil: siempre 1 imagen por fila (estilo Instagram)
   */
  const createVariedRows = useCallback((images: ProcessedImage[]): ProcessedImage[][] => {
    if (images.length === 0 || windowWidth === 0) return []

    // En móvil (< 640px), siempre 1 imagen por fila (estilo Instagram)
    const isMobile = windowWidth < 640
    if (isMobile) {
      return images.map(img => [img])
    }

    const rows: ProcessedImage[][] = []
    
    // Patrón de variación cíclico para crear filas con diferentes cantidades
    // Estos números representan cuántas imágenes poner en cada fila
    const variationPatterns = [4, 2, 3, 4, 3, 2, 4, 3, 4, 2, 3, 4, 2, 4, 3, 2, 4, 3]
    let patternIndex = 0
    let imageIndex = 0

    while (imageIndex < images.length) {
      // Obtener el target count del patrón
      const targetCount = variationPatterns[patternIndex % variationPatterns.length]
      patternIndex++

      // Crear una nueva fila
      const currentRow: ProcessedImage[] = []
      let maxForRow = Infinity
      
      // Agregar imágenes hasta alcanzar el target del patrón
      // Priorizar el patrón de variación sobre otras restricciones
      while (currentRow.length < targetCount && imageIndex < images.length) {
        const img = images[imageIndex]
        
        // Si la fila está vacía, siempre agregar y establecer el aspecto base
        if (currentRow.length === 0) {
          currentRow.push(img)
          maxForRow = getMaxPerRow(img.aspectRatio, windowWidth)
          imageIndex++
        } else {
          // Verificar límites absolutos solo como seguridad
          const maxForAspect = getMaxPerRow(img.aspectRatio, windowWidth)
          
          // Solo romper si realmente excedemos ambos máximos (límite de seguridad)
          if (currentRow.length >= maxForRow && currentRow.length >= maxForAspect) {
            break
          }
          
          // Prioridad total al patrón: agregar hasta alcanzar el target
          if (currentRow.length < targetCount) {
            currentRow.push(img)
            imageIndex++
          } else {
            // Alcanzamos el target del patrón, terminar fila
            break
          }
        }
      }

      // Si la fila tiene imágenes, agregarla
      if (currentRow.length > 0) {
        rows.push(currentRow)
      } else {
        // Si no pudimos agregar ninguna imagen, forzar agregar la siguiente
        if (imageIndex < images.length) {
          rows.push([images[imageIndex]])
          imageIndex++
        } else {
          break
        }
      }
    }

    return rows
  }, [windowWidth])

  // Organizar imágenes en filas variadas
  const organizedRows = useMemo(() => {
    if (processedImages.length === 0 || windowWidth === 0) return []

    // Crear filas variadas mezclando las imágenes
    return createVariedRows(processedImages)
  }, [processedImages, windowWidth, createVariedRows])

  // Calcular el ancho de cada imagen en una fila
  const calculateImageWidth = (rowLength: number, aspectRatio: AspectRatio): number => {
    const isMobile = windowWidth < 640
    
    // En móvil, siempre ancho completo (menos padding)
    if (isMobile) {
      const padding = 16
      return windowWidth - (padding * 2)
    }
    
    const maxPerRow = getMaxPerRow(aspectRatio, windowWidth)
    const itemsInRow = Math.min(rowLength, maxPerRow)
    const totalGaps = (itemsInRow - 1) * GAP
    // Padding lateral: 24px en tablet, 32px en desktop
    const padding = windowWidth < 1024 ? 24 : 32
    const availableWidth = windowWidth - totalGaps - (padding * 2)
    const imageWidth = availableWidth / itemsInRow
    
    return imageWidth
  }

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#f9f9f9]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-solid border-black border-r-transparent"></div>
          <p className="mt-4 text-black font-medium">Cargando galería...</p>
        </div>
      </div>
    )
  }

  if (processedImages.length === 0) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#f9f9f9]">
        <p className="text-black font-medium">No hay imágenes para mostrar</p>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#f9f9f9] py-8 md:py-12 lg:py-16">
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Grid container - sin espacios vacíos */}
        <div className="w-full space-y-1">
          {organizedRows.map((row, rowIndex) => {
            if (row.length === 0) return null

            const aspectRatio = row[0].aspectRatio
            const imageWidth = calculateImageWidth(row.length, aspectRatio)

            // Calcular altura basada en la relación de aspecto
            const aspectValue = {
              '16:9': 9 / 16,
              '4:3': 3 / 4,
              '1:1': 1,
              '9:16': 16 / 9,
            }[aspectRatio]

            const imageHeight = imageWidth * aspectValue

            return (
              <div
                key={rowIndex}
                className="w-full flex"
                style={{ gap: `${GAP}px` }}
              >
                {row.map((img, imgIndex) => (
                  <div
                    key={`${rowIndex}-${imgIndex}`}
                    className="relative overflow-hidden bg-gray-100 flex-shrink-0"
                    style={{
                      width: `${imageWidth}px`,
                      height: `${imageHeight}px`,
                    }}
                  >
                    <Image
                      src={img.url}
                      alt={`Imagen ${rowIndex + 1}-${imgIndex + 1} de la galería - ${img.aspectRatio}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={rowIndex < 3 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

