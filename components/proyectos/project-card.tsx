// app/proyectos/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, year }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-64">
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-500">Imagen del proyecto</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{year}</span>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Ver detalles</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;