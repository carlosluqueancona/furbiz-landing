import React, { useState } from 'react';

const Conversion = () => {
  const [formData, setFormData] = useState({ name: '', email: '', dogName: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.name}, nos pondremos en contacto para ayudar a ${formData.dogName}!`);
  };

  return (
    <section id="form" className="py-24 px-6 md:px-20 bg-furbiz-highlight">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-light text-furbiz-warmGray leading-tight">
            Dale el regalo de un <br />
            descanso sin dolor
          </h2>
          <div className="space-y-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-furbiz-accent italic text-gray-600">
              "Desde que Toby tiene su cama Furbiz, noto que descansa mucho más profundamente y se levanta con menos dificultad."
              <span className="block mt-2 font-medium text-furbiz-warmGray">— María y Toby</span>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-furbiz-accent italic text-gray-600">
              "Es la primera vez que veo a mi perrita dormir toda la noche sin inquietarse. Un cambio real en su calidad de vida."
              <span className="block mt-2 font-medium text-furbiz-warmGray">— Juan y Luna</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Tu nombre</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-furbiz-accent outline-none transition-all"
                placeholder="Ej. Carlos"
                required
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email o Teléfono</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-furbiz-accent outline-none transition-all"
                placeholder="correo@ejemplo.com"
                required
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Nombre de tu perrito</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-furbiz-accent outline-none transition-all"
                placeholder="Ej. Toby"
                required
                onChange={e => setFormData({...formData, dogName: e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-furbiz-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-md"
            >
              Solicitar asesoría para mi perrito
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Conversion;
