import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaFileDownload } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/solidsnake1395", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-black via-slate-900 to-green-900 text-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact Me" />
        
        <p className="text-green-200 mb-12 max-w-2xl mx-auto">
          Estoy disponible para colaborar en proyectos emocionantes. Hablemos sobre cómo 
          puedo ayudarte a hacer realidad tu visión digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a 
            href="mailto:aitor@example.com" 
            className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600/20 border border-green-500 text-green-300 rounded-lg hover:bg-green-600 hover:text-black font-semibold transition-all duration-300 font-bitcount shadow-lg hover:shadow-green-500/50"
          >
            <FaEnvelope size={20} /> Enviar Email
          </a>
          <a 
            href="/AitorMartinezCV.pdf" 
            download
            className="flex items-center justify-center gap-2 px-8 py-4 bg-black/50 border border-green-500/50 text-green-200 rounded-lg hover:bg-green-500/20 hover:border-green-400 font-semibold transition-all duration-300 font-bitcount"
          >
            <FaFileDownload size={20} /> Descargar CV
          </a>
        </div>

        <div className="flex justify-center space-x-8 text-green-200">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a 
              key={label}
              href={href} 
              className="hover:text-green-500 transition-colors"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;