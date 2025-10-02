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
      <div className="grid grid-cols-2 h-100">
        
        {/* Columna izquierda: título y descripción */}
        <div className="flex flex-col p-6">
          {/* Título */}
          <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
          {/* Contenido (descripción + botón) */}
          <div className="flex flex-col justify-between flex-grow">
            <p className="text-gray-600 mb-4">{description}</p>
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="bg-gray-100 flex items-center justify-center w-full h-full select-none pointer-events-none">
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
