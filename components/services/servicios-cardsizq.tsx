import React from 'react';
import Image from 'next/image';

interface ServiciosCardsProps {
  rutaImagen: string;
  title: string;
  description: string;
}


const ServiciosIzq: React.FC<ServiciosCardsProps> = ({ rutaImagen, title, description }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
        <div className="grid grid-cols-2 h-96">
          
          {/* Imagen a la izquierda */}
          <div className="bg-gray-100 w-full h-full select-none pointer-events-none">
            <Image 
              src={rutaImagen} 
              alt="Imagen" 
              width={400}
              height={300}
              className="w-full h-full object-cover" 
            />
          </div>
  
          {/* Texto a la derecha */}
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-gray-600 mb-4">{description}</p>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default ServiciosIzq;