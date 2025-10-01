import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-black/70 border border-green-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 font-mono text-green-200">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex gap-4">
          <a 
            href={project.demoUrl} 
            className="text-green-500 hover:text-green-300 font-medium"
          >
            Ver Demo
          </a>
          <a 
            href={project.githubUrl} 
            className="text-green-200 hover:text-green-100 font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;