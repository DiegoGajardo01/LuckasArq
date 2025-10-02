import React from 'react';
import Image from 'next/image';

// Tipos para el contenido de texto
interface TextContent {
  type: 'paragraph' | 'bullets' | 'title' | 'subheading';
  content: string | string[];
}

interface SectionData {
  image: string;
  title: string;
  textContent: TextContent[];
}

interface SectionProps {
  data: SectionData;
  imagePosition: 'left' | 'right';
}

// Componente para renderizar diferentes tipos de contenido de texto
const TextRenderer: React.FC<{ content: TextContent }> = ({ content }) => {
  switch (content.type) {
    case 'title':
      return (
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          {content.content as string}
        </h2>
      );
    case 'paragraph':
      return (
        <p className="text-xl text-slate-700 mb-5 leading-relaxed">
          {content.content as string}
        </p>
      );
    case 'subheading':
      return (
        <h3 className="text-xl text-slate-800 font-semibold mb-4">
          {content.content as string}
        </h3>
      );
    case 'bullets':
      return (
        <ul className="text-xl text-slate-700 mb-5 space-y-3">
          {(content.content as string[]).map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="text-slate-500 mr-3 text-lg">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

// Componente individual de sección
const Section: React.FC<SectionProps> = ({ data, imagePosition }) => {
  const isImageLeft = imagePosition === 'left';
  
  // Determinar qué esquinas deben tener border radius
  const getBorderRadius = () => {
    if (isImageLeft) {
      // Imagen a la izquierda: border radius solo en la derecha (donde toca el contenido)
      return 'rounded-r-lg';
    } else {
      // Imagen a la derecha: border radius solo en la izquierda (donde toca el contenido)
      return 'rounded-l-lg';
    }
  };
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fbfbfb' }}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 items-stretch ${
        isImageLeft ? '' : 'lg:grid-flow-col-dense'
      }`}>
        {/* Imagen */}
        <div className={`relative h-full ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className={`h-full overflow-hidden ${getBorderRadius()}`}>
            <Image 
              src={data.image} 
              alt={data.title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            {/* Logo sutil en la esquina */}
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">LA</span>
            </div>
          </div>
        </div>
        
        {/* Contenido de texto - ahora con el mismo color de fondo */}
        <div 
          className={`p-10 lg:p-16 flex items-center ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}
          style={{ backgroundColor: '#fbfbfb' }}
        >
          <div className="space-y-6 w-full">
            {data.textContent.map((content, index) => (
              <TextRenderer key={index} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente principal que maneja múltiples secciones
interface IntercalatedSectionsProps {
  sections: SectionData[];
}

const IntercalatedSections: React.FC<IntercalatedSectionsProps> = ({ sections }) => {
  return (
    <div className="w-full" style={{ backgroundColor: '#fbfbfb' }}>
      {sections.map((section, index) => (
        <Section
          key={index}
          data={section}
          imagePosition={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};

// Ejemplo de uso con datos de muestra
const App: React.FC = () => {
  const sampleSections: SectionData[] = [
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      title: "DISEÑO DE INTERIORES",
      textContent: [
        {
          type: 'title',
          content: 'DISEÑO DE INTERIORES'
        },
        {
          type: 'paragraph',
          content: 'Damos forma a tus ideas y las hacemos realidad, tejiendo creatividad con la maestría técnica para concebir espacios cautivadores, funcionales y eficientes.'
        },
        {
          type: 'subheading',
          content: 'Forjamos atmósferas únicas en:'
        },
        {
          type: 'bullets',
          content: [
            'Cocinas / Livings',
            'Habitaciones',
            'Baños',
            'Patios / Quinchos',
            'Espacios Comerciales'
          ]
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      title: "PROYECTO DE ARQUITECTURA",
      textContent: [
        {
          type: 'title',
          content: 'PROYECTO DE ARQUITECTURA'
        },
        {
          type: 'paragraph',
          content: 'Cada proyecto está diseñado para maximizar la funcionalidad y el uso eficiente del espacio, adaptándose a necesidades específicas de cada cliente.'
        },
        {
          type: 'bullets',
          content: [
            'RESIDENCIAL',
            'COMERCIAL',
            'INDUSTRIAL'
          ]
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      title: "DISEÑO SUSTENTABLE",
      textContent: [
        {
          type: 'title',
          content: 'DISEÑO SUSTENTABLE'
        },
        {
          type: 'paragraph',
          content: 'Implementamos principios ecológicos para crear edificaciones eficientes y responsables con el medio ambiente.'
        },
        {
          type: 'paragraph',
          content: 'Utilizamos materiales sostenibles y técnicas de construcción que minimizan el impacto ambiental.'
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      title: "PLANIFICACIÓN URBANA",
      textContent: [
        {
          type: 'title',
          content: 'PLANIFICACIÓN URBANA'
        },
        {
          type: 'paragraph',
          content: 'Desarrollamos estrategias integrales para la planificación y desarrollo de espacios urbanos.'
        },
        {
          type: 'bullets',
          content: [
            'Análisis de zonificación',
            'Diseño de espacios públicos',
            'Integración de transporte',
            'Gestión de recursos'
          ]
        }
      ]
    }
  ];

  return (
    <div className="w-full">
      <IntercalatedSections sections={sampleSections} />
    </div>
  );
};

export default App;