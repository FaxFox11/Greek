"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Decorative top border with Greek key pattern */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo Area */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center">
              <span className="font-serif text-2xl text-stone-100">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-amber-500">
                Taverna Olympos
              </span>
              <span className="text-xs text-stone-400 tracking-widest">
                ΑΥΘΕΝΤΙΚΉ ΕΛΛΗΝΙΚΉ ΚΟΥΖΊΝΑ
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#menu"
              className="text-stone-300 hover:text-amber-500 transition duration-300 tracking-wide"
            >
              Speisekarte
            </a>
            <a
              href="#about"
              className="text-stone-300 hover:text-amber-500 transition duration-300 tracking-wide"
            >
              Über Uns
            </a>
            <a
              href="#contact"
              className="text-stone-300 hover:text-amber-500 transition duration-300 tracking-wide"
            >
              Kontakt
            </a>
            <a href="#reservierung" className="relative group">
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full -m-1 group-hover:blur-md transition-all duration-300 opacity-75"></span>
              <span className="relative bg-gradient-to-r from-amber-600 to-amber-700 text-stone-100 px-6 py-2 rounded-full inline-block font-medium hover:from-amber-500 hover:to-amber-600 transition-all duration-300">
                Reservierung
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-300 hover:text-amber-500 transition duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-stone-900/95 backdrop-blur-md border-t border-stone-800">
            <div className="flex flex-col space-y-4 p-6">
              <a
                href="#menu"
                className="text-stone-300 hover:text-amber-500 transition duration-300"
              >
                Speisekarte
              </a>
              <a
                href="#about"
                className="text-stone-300 hover:text-amber-500 transition duration-300"
              >
                Über Uns
              </a>
              <a
                href="#contact"
                className="text-stone-300 hover:text-amber-500 transition duration-300"
              >
                Kontakt
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-stone-100 px-6 py-2 rounded-full text-center font-medium hover:from-amber-500 hover:to-amber-600 transition-all duration-300"
              >
                Reservierung
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
