import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-black/80 border border-green-500/50 rounded-xl overflow-hidden shadow-lg hover:shadow-green-500/50 hover:shadow-2xl hover:border-green-400 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-black/50">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-green-300 group-hover:text-green-200 transition-colors font-press-start-sm leading-relaxed mb-4">
          {project.title}
        </h3>
        <p className="text-sm text-green-200/80 leading-relaxed font-bitcount-light mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex gap-3 mt-auto">
          {project.demoUrl && project.demoUrl !== "Demo no disponible actualmente" ? (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500 text-green-300 rounded-lg hover:bg-green-600 hover:text-black font-semibold transition-all duration-300 text-sm font-bitcount group/btn"
            >
              <FaExternalLinkAlt className="text-xs group-hover/btn:rotate-12 transition-transform" />
              Ver Demo
            </a>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-600 text-gray-500 rounded-lg cursor-not-allowed text-sm font-bitcount">
              <FaExternalLinkAlt className="text-xs" />
              No disponible
            </span>
          )}
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-green-500/50 text-green-200 rounded-lg hover:bg-green-500/20 hover:border-green-400 font-semibold transition-all duration-300 text-sm font-bitcount group/btn"
          >
            <FaGithub className="group-hover/btn:rotate-12 transition-transform" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;