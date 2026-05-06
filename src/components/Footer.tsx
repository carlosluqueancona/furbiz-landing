import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-20 bg-white border-t border-gray-100 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="text-2xl font-light tracking-widest text-furbiz-warmGray">
          FURBIZ
        </div>
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-furbiz-accent transition-colors">Instagram</a>
          <a href="#" className="hover:text-furbiz-accent transition-colors">Facebook</a>
          <a href="#" className="hover:text-furbiz-accent transition-colors">Contacto</a>
        </div>
        <p className="text-xs text-gray-400 italic">
          Creado con amor para los mejores amigos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
