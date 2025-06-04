import React from 'react';
import { Home, Search, Eye, Users, Layout, Palette, Lightbulb, FileCheck, MapPin, Zap, Image, Calculator, Sofa, Utensils, Bath, Bed, Layers } from 'lucide-react';

const InteriorDesign = () => {
  const espacios = [
    { icon: <Utensils className="w-4 h-4" />, nombre: "Cocinas" },
    { icon: <Bath className="w-4 h-4" />, nombre: "Baños" },
    { icon: <Bed className="w-4 h-4" />, nombre: "Habitaciones" },
    { icon: <Sofa className="w-4 h-4" />, nombre: "Livings" },
    { icon: <Home className="w-4 h-4" />, nombre: "Quinchos" }
  ];

  const etapas = [
    {
      numero: "01",
      titulo: "Diagnóstico y estudio del espacio",
      icon: <Search className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      items: [
        {
          subtitulo: "Visita a terreno y análisis del espacio",
          descripcion: "Levantamiento de medidas y evaluación del estado actual del lugar para tener una base precisa del proyecto.",
          icon: <Eye className="w-5 h-5" />
        },
        {
          subtitulo: "Definición de objetivos y necesidades",
          descripcion: "Entrevista con el cliente para establecer los objetivos del proyecto y comprender las reales necesidades de quienes habitan o utilizarán el espacio. (Si aplica, se realiza un estudio normativo en casos de espacios comerciales o regulados).",
          icon: <Users className="w-5 h-5" />
        }
      ]
    },
    {
      numero: "02",
      titulo: "Diseño interior",
      icon: <Layout className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      items: [
        {
          subtitulo: "Estudio de distribución espacial",
          descripcion: "Definición de zonas, circulación, funciones y jerarquías dentro del espacio.",
          icon: <Layers className="w-5 h-5" />
        },
        {
          subtitulo: "Selección y diseño de mobiliario, materiales, colores e iluminación",
          descripcion: "Creamos propuestas únicas que reflejan el alma de sus habitantes, diseñando cada mueble a medida para optimizar el espacio. Además, realizamos un estudio lumínico detallado para potenciar cada ambiente, con la posibilidad de integrar proyectos de domótica que mejoran la funcionalidad y el confort.",
          icon: <Palette className="w-5 h-5" />
        }
      ]
    },
    {
      numero: "03",
      titulo: "Gestión normativa",
      icon: <FileCheck className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      items: [
        {
          subtitulo: "Tramitación municipal",
          descripcion: "Tramitación municipal para permisos, si el proyecto lo requiere (DOM u otras entidades).",
          icon: <FileCheck className="w-5 h-5" />,
          opcional: true
        }
      ]
    }
  ];

  const entregables = [
    {
      titulo: "Planimetrías detalladas del proyecto",
      descripcion: "Plantas, cortes, elevaciones, vistas y detalles constructivos.",
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      titulo: "E.E.T.T. (Especificaciones Técnicas)",
      descripcion: "Descripción de materiales, terminaciones, sistemas constructivos y criterios de diseño.",
      icon: <Zap className="w-5 h-5 text-green-600" />,
      color: "bg-green-50"
    },
    {
      titulo: "Renders",
      descripcion: "Imágenes realistas que representan el resultado final del proyecto.",
      icon: <Image className="w-5 h-5 text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      titulo: "Presupuesto estimado",
      descripcion: "Cálculo preliminar de costos en base a las soluciones propuestas y materiales seleccionados.",
      icon: <Calculator className="w-5 h-5 text-orange-600" />,
      color: "bg-orange-50"
    }
  ];

  return (
    <div className='bg-[#f9f9f9]'>
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Interiorismo: Remodelaciones
        </h1>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
          Transformación de espacios interiores habitacionales y comerciales con enfoque en la calidad del habitar. Diseño y remodelación mejorando funcionalidad, estética y confort mediante el uso inteligente del color, los materiales y la luz.
        </p>
        
        {/* Espacios que diseñamos */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {espacios.map((espacio, index) => (
            <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-amber-100">
              {espacio.icon}
              <span className="text-sm font-medium text-slate-700">{espacio.nombre}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-sm">
            <span className="text-sm font-medium">Espacios completos</span>
          </div>
        </div>
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
                    <div className={`w-16 h-16 bg-gradient-to-r ${etapa.color} rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg`}>
                      {etapa.numero}
                    </div>
                    <div className="p-3 bg-slate-100 rounded-lg flex items-center justify-center">
                      {etapa.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      {etapa.titulo}
                    </h3>
                    
                    <div className="space-y-6">
                      {etapa.items.map((item, idx) => (
                        <div key={idx} className="border-l-4 border-amber-200 pl-6 relative">
                          <div className="absolute -left-3 top-0 w-6 h-6 bg-white border-4 border-amber-200 rounded-full flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div className="pt-1">
                            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                              {item.subtitulo}
                              {(item as any).opcional && (
                                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                                  Si aplica
                                </span>
                              )}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                              {item.descripcion}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Entregables */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Entregables
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {entregables.map((entregable, index) => (
            <div key={index} className="bg-white rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-4">
                <div className={`p-3 ${entregable.color} rounded-lg flex-shrink-0`}>
                  {entregable.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {entregable.titulo}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {entregable.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destacados del servicio */}
      <div className="mt-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Nuestro Enfoque Único
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Diseño Personalizado</h4>
              <p className="text-sm text-slate-600">Cada mueble diseñado a medida para optimizar el espacio</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Estudio Lumínico</h4>
              <p className="text-sm text-slate-600">Análisis detallado para potenciar cada ambiente</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Domótica</h4>
              <p className="text-sm text-slate-600">Integración de tecnología para mayor funcionalidad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Transformar mi Espacio
        </button>
      </div>
    </div>
    </div>
  );
};

export default InteriorDesign;