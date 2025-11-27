"use client"

// import Image from 'next/image';
import ProjectCard from "@/components/proyectos/project-card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Proyectos() {
  const { t } = useLanguage()

  return (
    <main className="pt-24 pb-16 bg-[#f9f9f9] py-24 md:py-32 lg:py-40">
      <div className="container mx-auto bg-[#f9f9f9]">
        <h1 className="text-4xl text-black font-bold mb-10 text-center">{t.projects.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title={t.projects.casaModerna.title} 
            description={t.projects.casaModerna.description} 
            year="2024" 
          />
          <ProjectCard 
            title={t.projects.apartamentoUrbano.title} 
            description={t.projects.apartamentoUrbano.description} 
            year="2023" 
          />
          <ProjectCard 
            title={t.projects.oficinaCorporativa.title} 
            description={t.projects.oficinaCorporativa.description} 
            year="2023" 
          />
        </div>
      </div>
    </main>
  );
}