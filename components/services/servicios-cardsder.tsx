import React from 'react';
import Image from 'next/image';

interface ServiciosCardsProps {
  rutaImagen: string;
  title: string;
  description: string;
}

const ServiciosDer: React.FC<ServiciosCardsProps> = ({ rutaImagen, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      {/* Contenedor en 2 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[300px] md:h-96">
        
        {/* Columna izquierda: título y descripción */}
        <div className="flex flex-col p-4 md:p-6 order-2 md:order-1">
          {/* Título */}
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black">{title}</h3>
          {/* Contenido (descripción + botón) */}
          <div className="flex flex-col justify-between flex-grow">
            <p className="text-sm md:text-base text-gray-600 mb-4">{description}</p>
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="bg-gray-100 flex items-center justify-center w-full h-64 md:h-full select-none pointer-events-none order-1 md:order-2">
          <Image 
            src={rutaImagen} 
            alt="Imagen" 
            width={400}
            height={300}
            className="w-full h-full object-cover" 
          />
        </div>

      </div>
    </div>
  );
};

export default ServiciosDer;
