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
            Desarrollador Full Stack
          </h2>
          <p className="text-green-100 mb-12 max-w-2xl mx-auto">
          Programar es dar vida a las ideas. <br/>
          Disfruto combinando lógica, diseño y creatividad para crear proyectos que aporten valor real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600/20 border border-green-500 text-green-300 rounded-lg hover:bg-green-600 hover:text-black font-semibold transition-all duration-300 font-bitcount shadow-lg hover:shadow-green-500/50"
            >
              Ver Mis Proyectos
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black/50 border border-green-500/50 text-green-200 rounded-lg hover:bg-green-500/20 hover:border-green-400 font-semibold transition-all duration-300 font-bitcount"
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