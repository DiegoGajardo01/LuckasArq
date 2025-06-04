// import Image from 'next/image';
import ProjectCard from "@/components/proyectos/project-card";

export default function Proyectos() {
  return (
    <main className="pt-24 pb-16 bg-[#f9f9f9] py-24 md:py-32 lg:py-40">
      <div className="container mx-auto bg-[#f9f9f9]">
        <h1 className="text-4xl text-black font-bold mb-10 text-center">Nuestros Proyectos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Casa Moderna" 
            description="Diseño minimalista que combina funcionalidad y estética." 
            year="2024" 
          />
          <ProjectCard 
            title="Apartamento Urbano" 
            description="Solución espacial para aprovechar cada metro cuadrado." 
            year="2023" 
          />
          <ProjectCard 
            title="Oficina Corporativa" 
            description="Espacios de trabajo que fomentan la creatividad y productividad." 
            year="2023" 
          />
        </div>
      </div>
    </main>
  );
}