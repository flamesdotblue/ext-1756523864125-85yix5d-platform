import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CodeSamples from './components/CodeSamples.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white antialiased">
      <Hero />
      <Features />
      <CodeSamples />
      <Footer />
    </div>
  );
}

export default App;
