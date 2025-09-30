import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
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
            className="bg-green-600 hover:bg-green-700 text-black px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <FaEnvelope size={20} /> Enviar Email
          </a>
          <a 
            href="#" 
            className="border border-green-500 text-green-300 hover:bg-green-600 hover:text-black px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <FaLinkedin size={20} /> LinkedIn
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