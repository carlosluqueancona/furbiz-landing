import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Conversion from './components/Conversion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Conversion />
      <Footer />
    </div>
  );
}

export default App;
