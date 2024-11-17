import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 relative overflow-hidden">
      {/* Greek Pattern Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-5" />
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        {/* Top Border with Greek Key Pattern */}
        <div className="h-2 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700" />

        {/* Newsletter Section */}
        <div className="border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl text-stone-100 mb-2">
                  Newsletter abonnieren
                </h3>
                <p className="text-stone-400">
                  Erhalten Sie Updates über Specials und Events
                </p>
              </div>
              <form className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Ihre E-Mail Adresse"
                  className="flex-1 bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-2 text-stone-100 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-600 to-amber-700 text-stone-100 px-6 py-2 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300"
                >
                  Anmelden
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Restaurant Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center">
                  <span className="font-serif text-xl text-stone-100">T</span>
                </div>
                <span className="font-serif text-xl text-stone-100">
                  Taverna Olympos
                </span>
              </div>
              <p className="text-stone-400">
                Authentische griechische Küche im Herzen von Berlin. Tradition,
                Qualität und Gastfreundschaft seit 1998.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg text-stone-100 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "Startseite", href: "#" },
                  { label: "Menü", href: "#menu" },
                  { label: "Über Uns", href: "#about" },
                  { label: "Reservierung", href: "#contact" },
                  { label: "Impressum", href: "#" },
                  { label: "Datenschutz", href: "#" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-stone-400 hover:text-amber-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-serif text-lg text-stone-100 mb-6">
                Öffnungszeiten
              </h4>
              <ul className="space-y-4">
                {[
                  { day: "Montag", hours: "Ruhetag" },
                  { day: "Dienstag - Freitag", hours: "17:00 - 23:00" },
                  { day: "Samstag", hours: "15:00 - 23:00" },
                  { day: "Sonntag", hours: "15:00 - 22:00" },
                ].map((schedule, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-stone-400">{schedule.day}</span>
                    <span className="text-amber-500">{schedule.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-lg text-stone-100 mb-6">
                Kontakt
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span className="text-stone-400">
                    Olymposstraße 123
                    <br />
                    10115 Berlin
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span className="text-stone-400">+49 (0) 30 123 456 78</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <span className="text-stone-400">
                    info@taverna-olympos.de
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-stone-500 text-sm">
                © {new Date().getFullYear()} Taverna Olympos. Alle Rechte
                vorbehalten.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-stone-500 hover:text-amber-500 text-sm transition-colors"
                >
                  Impressum
                </a>
                <a
                  href="#"
                  className="text-stone-500 hover:text-amber-500 text-sm transition-colors"
                >
                  Datenschutz
                </a>
                <a
                  href="#"
                  className="text-stone-500 hover:text-amber-500 text-sm transition-colors"
                >
                  AGB
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
