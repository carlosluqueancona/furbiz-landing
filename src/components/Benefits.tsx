import React from 'react';
import { ShieldCheck, ThermometerSun, Heart } from 'lucide-react';

const benefits = [
  {
    title: "Soporte Ortopédico",
    description: "Diseño que reduce la presión en articulaciones cansadas, permitiéndoles levantarse con más facilidad.",
    icon: <ShieldCheck className="w-8 h-8 text-furbiz-accent" />,
  },
  {
    title: "Confort Térmico",
    description: "Materiales que mantienen la temperatura ideal, evitando el frío que suele afectar la movilidad de los perros senior.",
    icon: <ThermometerSun className="w-8 h-8 text-furbiz-accent" />,
  },
  {
    title: "Seguridad y Calidez",
    description: "Texturas suaves que brindan una sensación de protección y refugio, reduciendo la ansiedad del descanso.",
    icon: <Heart className="w-8 h-8 text-furbiz-accent" />,
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-furbiz-warmGray mb-4">
            Bienestar en cada detalle
          </h2>
          <div className="w-12 h-1 bg-furbiz-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center space-y-4 p-8 rounded-2xl hover:bg-furbiz-cream transition-colors group">
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-medium text-furbiz-warmGray">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
