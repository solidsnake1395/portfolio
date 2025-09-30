import React from "react";
import useTypewriter from "../../hooks/useTypewriter";

const Hero = () => {
  const typedText = useTypewriter("Hola, soy Aitor", 150);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-green-900"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-6 font-bitcount-light">
            <span>{typedText}</span>
            <span className="inline-block w-2 bg-green-300 ml-1 align-bottom animate-blink">
              &nbsp;
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-green-200 mb-8 font-light">
            Desarrollador Full Stack & Arquitecto de Soluciones
          </h2>
          <p className="text-green-100 mb-12 max-w-2xl mx-auto">
            Transformo ideas innovadoras en experiencias digitales excepcionales usando las últimas tecnologías web
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-green-600 hover:bg-green-700 text-black px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Ver Mis Proyectos
            </a>
            <a 
              href="#contact" 
              className="border border-green-600 text-green-300 hover:bg-green-600 hover:text-black px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;