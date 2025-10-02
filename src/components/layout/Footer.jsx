import React from "react";
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black text-green-200 py-8 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>© 2025 Aitor Dev. Crafted with ❤️ <FaReact className="inline w-4 h-4" /> <SiTailwindcss className="inline w-4 h-4" /></p>
      </div>
    </footer>
  );
};

export default Footer;