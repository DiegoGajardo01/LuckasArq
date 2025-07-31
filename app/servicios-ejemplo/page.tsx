import React from 'react';
import App from '@/components/services/servicios';

export default function ServiciosEjemploPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Ejemplo del Componente Servicios
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Esta es una demostración del componente servicios.tsx que muestra secciones intercaladas con imágenes y contenido.
        </p>
      </div>
      
      <App />
    </div>
  );
} 