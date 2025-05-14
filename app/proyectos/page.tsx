// app/proyectos/page.tsx
import Image from 'next/image';

export default function Proyectos() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Nuestros Proyectos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta de proyecto 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Imagen del proyecto</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Casa Moderna</h3>
              <p className="text-gray-600 mb-4">Diseño minimalista que combina funcionalidad y estética.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2024</span>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Ver detalles</button>
              </div>
            </div>
          </div>
          
          {/* Tarjeta de proyecto 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Imagen del proyecto</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Apartamento Urbano</h3>
              <p className="text-gray-600 mb-4">Solución espacial para aprovechar cada metro cuadrado.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2023</span>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Ver detalles</button>
              </div>
            </div>
          </div>
          
          {/* Tarjeta de proyecto 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Imagen del proyecto</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Oficina Corporativa</h3>
              <p className="text-gray-600 mb-4">Espacios de trabajo que fomentan la creatividad y productividad.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2023</span>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Ver detalles</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}