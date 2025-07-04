
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-red-900/40 to-black py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-enhanced">
          <span className="text-red-400 heading-glow">WORK</span> <span className="text-white">WITH US</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-semibold text-enhanced">
          Partner with BurnItDownYT for authentic wrestling content and brand collaborations
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
