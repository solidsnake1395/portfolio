import React from "react";
import SectionTitle from "../ui/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Sobre Mí" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-65 h-80 bg-black/70 border border-green-500 rounded-2xl mx-auto mb-8 shadow-lg flex items-center justify-center overflow-hidden">
              <img 
                src="https://i.imgur.com/liAQ8OW.png" 
                alt="Aitor Profile" 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </div>
          </div>

          <div className="space-y-6 font-mono text-green-200">
            <h3 className="text-2xl font-semibold text-green-300">
              Desarrollador apasionado por la innovación
            </h3>
            <p className="leading-relaxed">
              Con más de 5 años de experiencia en desarrollo web, me especializo en crear 
              aplicaciones robustas y escalables. Mi pasión por la tecnología me impulsa a 
              estar siempre al día con las últimas tendencias del desarrollo.
            </p>
            <p className="leading-relaxed">
              He trabajado con startups y empresas consolidadas, ayudándolas a digitalizar 
              sus procesos y crear productos que impactan positivamente en sus usuarios.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-black/70 border border-green-500 rounded-lg">
                <h4 className="text-2xl font-bold text-green-500 font-press-start">50+</h4>
                <p className="font-bitcount">Proyectos Completados</p>
              </div>
              <div className="text-center p-4 bg-black/70 border border-green-500 rounded-lg">
                <h4 className="text-2xl font-bold text-green-500 font-press-start">5+</h4>
                <p className="font-bitcount">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;