import React from 'react';
import { FileText, Building2, CheckCircle, Clock, Shield, User, Settings, Globe, Eye, Folder, ArrowRight } from 'lucide-react';

const MunicipalProcedures = () => {
  const tramites = [
    {
      nombre: "Regularización de obras existentes",
      descripcion: "Ley del Mono",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-red-100 text-red-600"
    },
    {
      nombre: "Permiso de edificación",
      descripcion: "Para construcciones nuevas",
      icon: <Building2 className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      nombre: "Permiso de obra menor",
      descripcion: "Modificaciones y ampliaciones menores",
      icon: <Settings className="w-5 h-5" />,
      color: "bg-green-100 text-green-600"
    },
    {
      nombre: "Permiso de anteproyecto",
      descripcion: "Aprobación preliminar del diseño",
      icon: <FileText className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      nombre: "Modificación de proyectos aprobados",
      descripcion: "Cambios en proyectos ya aprobados",
      icon: <Settings className="w-5 h-5" />,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      nombre: "Recepción definitiva o parcial de obras",
      descripcion: "Finalización y entrega oficial",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      nombre: "Certificado de informe previo (CIP)",
      descripcion: "Evaluación previa del terreno",
      icon: <Eye className="w-5 h-5" />,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      nombre: "Ingreso a través de DOM en Línea",
      descripción: "Trámites digitales simplificados",
      icon: <Globe className="w-5 h-5" />,
      color: "bg-teal-100 text-teal-600"
    }
  ];

  const procesoTrabajo = [
    {
      numero: "01",
      titulo: "Revisión normativa",
      descripcion: "Analizamos el estado actual del terreno o construcción y qué tipo de permiso corresponde según la normativa vigente.",
      icon: <Eye className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      numero: "02",
      titulo: "Preparación de documentos",
      descripcion: "Elaboramos los planos y todos los antecedentes necesarios para el ingreso municipal.",
      icon: <Folder className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      numero: "03",
      titulo: "Trámite y seguimiento",
      descripcion: "Ingresamos el expediente, damos respuesta a observaciones y hacemos seguimiento hasta obtener el permiso final.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const beneficios = [
    {
      titulo: "Proceso claro",
      descripcion: "Te mantenemos informado en cada etapa",
      icon: <Eye className="w-5 h-5" />
    },
    {
      titulo: "Rápido",
      descripcion: "Optimizamos tiempos de respuesta",
      icon: <Clock className="w-5 h-5" />
    },
    {
      titulo: "Sin complicaciones",
      descripcion: "Nos encargamos de todo por ti",
      icon: <User className="w-5 h-5" />
    }
  ];

  return (
    <div className='bg-[#f9f9f9]'>
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Gestión de Trámites Municipales
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Cuando el cliente lo requiera, gestionamos los trámites municipales necesarios para solicitar los permisos de obra correspondientes al proyecto que diseñamos. Nos encargamos de todo el proceso para que sea claro, rápido y sin complicaciones.
        </p>
        
        {/* Beneficios destacados */}
        <div className="flex flex-wrap justify-center gap-4">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
              <div className="p-1 bg-slate-100 rounded-full">
                {beneficio.icon}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-slate-800">{beneficio.titulo}</div>
                <div className="text-xs text-slate-600">{beneficio.descripcion}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trámites que realizamos */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Trámites que Realizamos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tramites.map((tramite, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className={`p-3 ${tramite.color} rounded-lg flex-shrink-0`}>
                  {tramite.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 leading-tight">
                    {tramite.nombre}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {tramite.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cómo trabajamos */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          ¿Cómo Trabajamos?
        </h2>
        
        <div className="relative">
          {/* Línea conectora en desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 rounded-full"></div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {procesoTrabajo.map((paso, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  {/* Número del paso */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${paso.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg relative z-10`}>
                    {paso.numero}
                  </div>
                  
                  {/* Icono */}
                  <div className="p-4 bg-slate-100 rounded-lg w-fit mx-auto mb-4">
                    {paso.icon}
                  </div>
                  
                  {/* Contenido */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {paso.titulo}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {paso.descripcion}
                  </p>
                </div>
                
                {/* Flecha conectora para móvil */}
                {index < procesoTrabajo.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de garantía */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 mb-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Garantía de Servicio
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nos responsabilizamos por todo el proceso desde el inicio hasta la obtención del permiso final. 
            Tu tranquilidad es nuestra prioridad.
          </p>
        </div>
      </div>

      {/* Información adicional */}
      <div className="bg-blue-50 rounded-2xl p-8 mb-16">
        <div className="flex items-start gap-6">
          <div className="p-3 bg-blue-500 rounded-lg flex-shrink-0">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              ¿Necesitas ayuda con trámites municipales?
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cada proyecto es único y requiere un análisis específico. Contacta con nosotros para evaluar 
              qué tipo de permiso necesita tu proyecto y cómo podemos ayudarte en el proceso.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">DOM en Línea</span>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Seguimiento personalizado</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Gestión completa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Consultar mi Trámite
        </button>
      </div>
    </div>
    </div>
  );
};

export default MunicipalProcedures;