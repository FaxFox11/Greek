"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-[url('/images/greek.jpg')] bg-cover bg-center"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        {/* Greek Pattern Overlay */}
        <div className="absolute inset-x-0 top-0 h-32 bg-[url('/images/pattern.jpg')] opacity-10" />

        {/* Animated Light Particles */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-24 min-h-screen flex flex-col justify-center">
        {/* Main Content */}
        <div className="max-w-3xl space-y-6">
          {/* Greek-inspired decorative line */}
          <div className="flex items-center space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <span className="text-amber-500 tracking-[0.3em] text-sm">
              ΚΑΛΩΣ ΗΡΘΑΤΕ
            </span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-stone-100 leading-none">
            Authentisch Griechische
            <span className="block mt-2 text-amber-500">Kochkunst</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-300 max-w-2xl">
            Erlebe die Wärme der mediterranen Gastfreundschaft und genieß ein
            wenig Südwind im Herzen der Stadt. Jedes Gericht erzählt eine
            Geschichte unseres antiken Erbes.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
            <a href="#reservierung" className="relative group inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full -m-1 group-hover:blur-md transition-all duration-300 opacity-75"></span>
              <span className="relative bg-gradient-to-r from-amber-600 to-amber-700 text-stone-100 px-8 py-4 rounded-full inline-block font-medium hover:from-amber-500 hover:to-amber-600 transition-all duration-300">
                Reservieren Sie jetzt
              </span>
            </a>
            <a
              href="#menu"
              className="text-stone-100 px-8 py-4 rounded-full inline-block border border-stone-100/20 hover:bg-stone-100/10 transition duration-300 text-center"
            >
              Unsere Speisekarte
            </a>
          </div>
        </div>

        {/* Featured Items */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Traditionelle Rezepte",
              description: "Von Generation zu Generation weitergegeben",
            },
            {
              title: "Frische Zutaten",
              description: "Täglich von lokalen Märkten ausgewählt",
            },
            {
              title: "Mediterranes Ambiente",
              description: "Ein Hauch von Griechenland in jedem Detail",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-stone-900/50 backdrop-blur-sm border border-stone-100/10 rounded-lg p-6 hover:bg-stone-900/70 transition duration-300"
            >
              <h3 className="text-amber-500 font-serif text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-stone-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
        <span className="text-stone-400 text-sm tracking-wider">
          Entdecken Sie mehr
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-stone-400 to-transparent animate-pulse" />
      </div>
    </div>
  );
};

export default Hero;
