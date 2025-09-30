import React, { useState, useEffect } from "react";
import useTypewriter from "./hooks/useTypewriter";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaCode } from "react-icons/fa";
import { SiBootstrap, SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiPython, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiGit, SiDocker, SiFigma, SiWebpack, SiOpenjdk, SiPhp, SiSymfony, SiMysql, SiSpringboot, SiDigitalocean, SiPhpstorm} from "react-icons/si";
import { GiHighGrass } from "react-icons/gi";
import "./App.css";

// Componente para las barras de habilidad
const SkillBar = ({ level, maxLevel = 5 }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(maxLevel)].map((_, index) => (
        <div key={index} className={`w-3 h-3 rounded-sm border border-green-500 ${index < level ? "bg-green-500 shadow-sm shadow-green-500/50" : "bg-transparent"} transition-all duration-300`} />
      ))}
    </div>
  );
};

// Componente individual para cada skill
const SkillItem = ({ skill }) => {
  const iconComponents = {
    SiBootstrap,
    SiReact,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiGraphql,
    SiGit,
    SiDocker,
    SiFigma,
    SiWebpack,
    GiHighGrass,
    SiOpenjdk,
    SiPhp,
    SiSymfony,
    SiMysql,
    SiSpringboot,
    SiDigitalocean,
    SiPhpstorm,
  };

  const IconComponent = iconComponents[skill.icon];

  return (
    <div className="flex items-center justify-between p-3 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
      <div className="flex items-center space-x-3">
        {IconComponent ? <IconComponent size={24} style={{ color: skill.color || "#10B981" }} className="group-hover:scale-110 transition-transform duration-300" /> : <div className="w-6 h-6 bg-green-500 rounded-sm"></div>}
        <span className="font-bitcount text-green-200 group-hover:text-green-100 transition-colors">{skill.name}</span>
      </div>
      <SkillBar level={skill.level} />
    </div>
  );
};

// Componente para cada categoría de skills
const SkillCard = ({ category, skills }) => {
  return (
    <div className="bg-black/70 border border-green-500 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-400">
      <h3 className="text-lg font-semibold mb-4 text-green-300 font-press-start text-center">{category}</h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const typedText = useTypewriter("Hola, soy Aitor", 150);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-300">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-green-400 font-press-start">Aitor Dev</h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-green-500 transition-colors font-medium">
                  Inicio
                </a>
                <a href="#about" className="hover:text-green-500 transition-colors font-medium">
                  Sobre mí
                </a>
                <a href="#projects" className="hover:text-green-500 transition-colors font-medium">
                  Proyectos
                </a>
                <a href="#skills" className="hover:text-green-500 transition-colors font-medium">
                  Habilidades
                </a>
                <a href="#contact" className="hover:text-green-500 transition-colors font-medium">
                  Contacto
                </a>
              </div>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 border-t border-green-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:text-green-500">
                Inicio
              </a>
              <a href="#about" className="block px-3 py-2 hover:text-green-500">
                Sobre mí
              </a>
              <a href="#projects" className="block px-3 py-2 hover:text-green-500">
                Proyectos
              </a>
              <a href="#skills" className="block px-3 py-2 hover:text-green-500">
                Habilidades
              </a>
              <a href="#contact" className="block px-3 py-2 hover:text-green-500">
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-green-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-6 font-bitcount-light">
              <span>{typedText}</span>
              <span className="inline-block w-2 bg-green-300 ml-1 align-bottom animate-blink">&nbsp;</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-green-200 mb-8 font-light">Desarrollador Full Stack & Arquitecto de Soluciones</h2>
            <p className="text-green-100 mb-12 max-w-2xl mx-auto">Transformo ideas innovadoras en experiencias digitales excepcionales usando las últimas tecnologías web</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="bg-green-600 hover:bg-green-700 text-black px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
                Ver Mis Proyectos
              </a>
              <a href="#contact" className="border border-green-600 text-green-300 hover:bg-green-600 hover:text-black px-8 py-4 rounded-lg font-semibold transition-colors">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-400 mb-4 font-press-start">Sobre Mí</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-65 h-80 bg-black/70 border border-green-500 rounded-2xl mx-auto mb-8 shadow-lg flex items-center justify-center overflow-hidden">
                <img src="https://i.imgur.com/liAQ8OW.png" alt="Aitor Profile" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>

            <div className="space-y-6 font-mono text-green-200">
              <h3 className="text-2xl font-semibold text-green-300">Desarrollador apasionado por la innovación</h3>
              <p className="leading-relaxed">
                Con más de 5 años de experiencia en desarrollo web, me especializo en crear aplicaciones robustas y escalables. Mi pasión por la tecnología me impulsa a estar siempre al día con las últimas tendencias del desarrollo.
              </p>
              <p className="leading-relaxed">He trabajado con startups y empresas consolidadas, ayudándolas a digitalizar sus procesos y crear productos que impactan positivamente en sus usuarios.</p>

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

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-400 mb-4 font-press-start">Tech Stack</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Technologies */}
            <SkillCard
              category="Frontend"
              skills={[
                { name: "PS%5", level: 5, icon: "SiHtml5", color: "#E34F26" },
                { name: "JavaScript", level: 5, icon: "SiJavascript", color: "#F7DF1E" },
                { name: "CSS3", level: 4, icon: "SiCss3", color: "#1572B6" },
                { name: "Bootstrap", level: 3, icon: "SiBootstrap", color: "#7952B3" },
                { name: "Twig", level: 3, icon: "GiHighGrass", color: "#008080" },
                { name: "React", level: 2, icon: "SiReact", color: "#61DAFB" },
                { name: "Tailwind", level: 2, icon: "SiTailwindcss", color: "#06B6D4" },
              ]}
            />

            {/* Backend Technologies */}
            <SkillCard
              category="Backend"
              skills={[
                {
                  name: "PHP",
                  level: 4,
                  icon: "SiPhp",
                  color: "#4F5B93",
                },
                {
                  name: "Java",
                  level: 4,
                  icon: "SiOpenjdk",
                  color: "#007396",
                },
                {
                  name: "MySQL",
                  level: 4,
                  icon: "SiMysql",
                  color: "#FFFFFF",
                },
                {
                  name: "Symfony",
                  level: 3,
                  icon: "SiSymfony",
                  color: "#47A248",
                },
                {
                  name: "PostgreSQL",
                  level: 3,
                  icon: "SiPostgresql",
                  color: "#336791",
                },
                {
                  name: "Spring Boot",
                  level: 4,
                  icon: "SiSpringboot",
                  color: "#6DB33F",
                },
                {
                  name: "Node.js",
                  level: 5,
                  icon: "SiNodedotjs",
                  color: "#339933",
                },
              ]}
            />

            {/* Tools & DevOps */}
            <SkillCard
              category="Tools & DevOps"
              skills={[
                { name: "Git", level: 4, icon: "SiGit", color: "#F05032" },
                { name: "VS Code", level: 5, icon: "SiVscode", color: "#007ACC" },
                { name: "PHPStorm", level: 3, icon: "SiPhpstorm", color: "violet" },
                {
                  name: "Docker",
                  level: 3,
                  icon: "SiDocker",
                  color: "#2496ED",
                },
                {
                  name: "Webpack",
                  level: 3,
                  icon: "SiWebpack",
                  color: "#8DD6F9",
                },
                { name: "DigitalOcean", level: 4, icon: "SiDigitalocean", color: "#0080FF" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-400 mb-4 font-press-start">Projects</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["SaaS Dashboard", "E-commerce Mobile", "AI Analytics Tool"].map((proj, idx) => (
              <div key={idx} className="group bg-black/70 border border-green-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 font-mono text-green-200">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 group-hover:scale-105 transition-transform duration-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{proj}</h3>
                  <p className="mb-4">Descripción del proyecto {proj} en estilo terminal.</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-green-500 hover:text-green-300 font-medium">
                      Ver Demo
                    </a>
                    <a href="#" className="text-green-200 hover:text-green-100 font-medium">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-black via-slate-900 to-green-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-400 mb-4 font-press-start">Contact Me</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-green-200 mb-12 max-w-2xl mx-auto">Estoy disponible para colaborar en proyectos emocionantes. Hablemos sobre cómo puedo ayudarte a hacer realidad tu visión digital.</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="mailto:aitor@example.com" className="bg-green-600 hover:bg-green-700 text-black px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2">
              <FaEnvelope size={20} /> Enviar Email
            </a>
            <a href="#" className="border border-green-500 text-green-300 hover:bg-green-600 hover:text-black px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>

          <div className="flex justify-center space-x-8 text-green-200">
            <a href="#" className="hover:text-green-500 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-green-200 py-8 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© 2025 Aitor Dev. Crafted with ❤️ and lots of ☕</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
