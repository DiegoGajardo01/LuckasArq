import ServiceItem from "@/components/services/ServiceItem"

export default function Services() {
  const services = [
    {
      icon: (
        <div className="bg-[#f8ece4] rounded-full w-16 h-16 flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
      ),
      title: "Diseño Arquitectónico",
      description: "Diseño espacios habitables de diversas escalas, priorizando la simplicidad y precisión para crear entornos funcionales.",
    },
    {
      icon: (
        <div className="bg-[#f8ece4] rounded-full w-16 h-16 flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
            <rect x="2" y="6" width="20" height="12" rx="2"></rect>
            <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            <path d="M12 12v6"></path>
          </svg>
        </div>
      ),
      title: "Diseño de Interiores",
      description: "Diseño y remodelo interiores, mejorando funcionalidad, estética y confort con un enfoque en la calidad del habitar.",
    },
    {
      icon: (
        <div className="bg-[#f8ece4] rounded-full w-16 h-16 flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
            <path d="M3 3v18h18"></path>
            <path d="M18 3v18"></path>
            <rect x="8" y="10" width="6" height="8"></rect>
          </svg>
        </div>
      ),
      title: "Tramites DOM",
      description: "Gestiono los permisos municipales cuando el cliente lo requiere, facilitando un proceso claro, ágil y sin complicaciones.",
    },
    {
      icon: (
        <div className="bg-[#f8ece4] rounded-full w-16 h-16 flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        </div>
      ),
      title: "Otros",
      description: "Implementamos principios ecológicos para crear edificaciones eficientes y responsables.",
    },
  ]

  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <ServiceItem key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
        <div className="flex items-center justify-center">
          <h2 className="writing-vertical-rl text-orientation-mixed rotate-180 text-5xl font-black tracking-wider text-black">
            SERVICIOS
          </h2>
        </div>
      </div>
    </div>
  )
}
