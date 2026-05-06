import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-20 md:px-20 bg-furbiz-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-light leading-tight text-furbiz-warmGray">
            El descanso que <br />
            <span className="font-medium italic">su lealtad merece.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
            Camas diseñadas para la máxima comodidad de perritos de la tercera edad.
            Alivio real para sus articulaciones, paz para su corazón.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#form"
              className="px-8 py-4 bg-furbiz-accent text-white rounded-full text-center font-medium hover:bg-opacity-90 transition-all shadow-sm"
            >
              Quiero más información
            </a>
            <a
              href="https://wa.me/yournumber"
              className="px-8 py-4 border border-furbiz-accent text-furbiz-warmGray rounded-full text-center font-medium hover:bg-furbiz-highlight transition-all"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/cama.png"
            alt="Cama Furbiz para perritos senior"
            className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
            <p className="text-sm font-medium text-furbiz-warmGray">✨ Recomendado por veterinarios</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
