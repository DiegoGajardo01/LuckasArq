import React from 'react';
import { Search, Lightbulb, FileText, MapPin, Zap, Image, Calculator } from 'lucide-react';


const ArquitecturalDesign = () => {
  const etapas = [
    {
      numero: "01",
      titulo: "Estudio de Cabida",
      icon: <Search className="w-6 h-6" />,
      descripcion: "Revisión detallada de normativas urbanísticas vigentes (OGUC), incluyendo análisis de rasantes, distanciamientos, coeficientes de constructibilidad y ocupación de suelo para garantizar la viabilidad legal y técnica del proyecto.",
      detalles: "Visita a terreno y levantamiento preciso de medidas para contar con una base confiable y real del espacio a intervenir."
    },
    {
      numero: "02",
      titulo: "Anteproyecto",
      icon: <Lightbulb className="w-6 h-6" />,
      descripcion: "Desarrollo del concepto arquitectónico, explorando soluciones funcionales y creativas que respondan a las necesidades y estilo de vida de los futuros habitantes.",
      detalles: [
        "Definición preliminar de distribución espacial, volumetría y características principales del proyecto.",
        "Entrega de planimetrías preliminares y modelos 3D básicos para facilitar la visualización.",
        "Reuniones de retroalimentación con el cliente para ajustar y orientar el diseño según sus expectativas."
      ]
    },
    {
      numero: "03",
      titulo: "Proyecto",
      icon: <FileText className="w-6 h-6" />,
      descripcion: "Elaboración de planos arquitectónicos definitivos con detalle técnico completo: plantas, cortes, elevaciones, detalles constructivos y especificaciones técnicas.",
      detalles: [
        "Generación de renders e imágenes realistas para representar el resultado final con precisión.",
        "Tramitación municipal para obtener permisos ante la Dirección de Obras Municipales (DOM) u otras entidades correspondientes.",
        "Presentación de presupuesto estimado basado en las soluciones y materiales seleccionados."
      ]
    }
  ];

  const entregables = [
    {
      titulo: "Planimetrías detalladas del proyecto",
      descripcion: "Plantas, cortes, elevaciones, vistas y detalles constructivos.",
      icon: <MapPin className="w-5 h-5 text-blue-600" />
    },
    {
      titulo: "E.E.T.T. (Especificaciones Técnicas)",
      descripcion: "Descripciones de materiales, terminaciones, sistemas constructivos y criterios de diseño.",
      icon: <Zap className="w-5 h-5 text-green-600" />
    },
    {
      titulo: "Renders",
      descripcion: "Imágenes realistas que muestran el resultado final del proyecto.",
      icon: <Image className="w-5 h-5 text-purple-600" />
    },
    {
      titulo: "Presupuesto estimado",
      descripcion: "Cálculo preliminar de costos en base a las soluciones y materiales propuestos.",
      icon: <Calculator className="w-5 h-5 text-orange-600" />
    }
  ];

  return (
    <div className='bg-[#f9f9f9]'>
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-br from-slate-50 to-[#f9f9f9]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Diseño Arquitectónico: Espacios Habitables
        </h1>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Diseño espacios habitables a cualquier escala, desde una ampliación o quincho hasta viviendas completas y edificaciones de gran envergadura. Cada proyecto nace de la simplicidad y la precisión, buscando optimizar el diseño para que el espacio responda a sus habitantes y dialogue en armonía con la naturaleza, dando forma a lugares de calma y atemporalidad.
        </p>
      </div>

      {/* Etapas del Servicio */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Etapas del Servicio
        </h2>
        
        <div className="space-y-8">
          {etapas.map((etapa, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                      {etapa.numero}
                    </div>
                    <div className="p-3 bg-slate-100 rounded-lg flex items-center justify-center">
                      {etapa.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {etapa.titulo}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {etapa.descripcion}
                    </p>
                    
                    {Array.isArray(etapa.detalles) ? (
                      <ul className="space-y-2">
                        {etapa.detalles.map((detalle, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-600">{detalle}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-600 italic">{etapa.detalles}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Entregables */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Entregables
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {entregables.map((entregable, index) => (
            <div key={index} className="bg-white rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-50 rounded-lg flex-shrink-0">
                  {entregable.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {entregable.titulo}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {entregable.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
          Solicitar Consulta
        </button>
      </div>
    </div>
    </div>
  );
};

export default ArquitecturalDesign;