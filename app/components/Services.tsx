import React from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg p-8 text-center shadow-md transition-transform hover:-translate-y-2">
      <div className="w-[70px] h-[70px] mx-auto mb-5 flex items-center justify-center rounded-full bg-[rgba(139,79,45,0.1)]">
        {icon}
      </div>
      <h3 className="text-xl mb-4 text-gray-800 font-medium">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pb-20">
          <ServiceItem
            title="Diseño Arquitectónico"
            description="Creamos diseños personalizados que reflejan su estilo y necesidades específicas."
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            }
          />
          
          <ServiceItem
            title="Diseño de Interiores"
            description="Garantizamos que cada detalle de su proyecto se ejecute según las especificaciones."
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
                <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                <path d="M12 12v6"></path>
              </svg>
            }
          />
          
          <ServiceItem
            title="Tramites DOM"
            description="Transformamos espacios con soluciones estéticas y funcionales para cada ambiente."
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
                <path d="M3 3v18h18"></path>
                <path d="M18 3v18"></path>
                <rect x="8" y="10" width="6" height="8"></rect>
              </svg>
            }
          />
          
          <ServiceItem
            title="Otros"
            description="Implementamos principios ecológicos para crear edificaciones eficientes y responsables."
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            }
          />
          
          <div>
            <h2 className="servicios-title">SERVICIOS</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;