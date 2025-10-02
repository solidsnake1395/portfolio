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
              Con más de 3 años de formación y experiencia en desarrollo web, me
              especializo en aportar soluciones útiles y escalables.
            </p>
            <p className="leading-relaxed">
              Mi pasión por la tecnología me impulsa a mantenerme al día con las
              últimas tendencias, combinando el aprendizaje constante con la
              aplicación práctica de mis conocimientos para crear soluciones
              digitales efectivas.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-black/70 border border-green-500 rounded-lg flex flex-col justify-center items-center">
                <h4 className="text-xl font-bold text-green-500 font-press-start">
                  Graduado Superior
                </h4>
                <p className="font-bitcount">Desarrollo</p>
                <p className="font-bitcount">Aplicaciones web</p>
              </div>
              <div className="text-center p-4 bg-black/70 border border-green-500 rounded-lg flex flex-col justify-center items-center">
                <h4 className="text-2xl font-bold text-green-500 font-press-start">
                  3+
                </h4>
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
