"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    guests: "2",
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  return (
    <section
      id="contact"
      className="relative bg-stone-900 py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(251,191,36,0.1)_1px,_transparent_1px)] bg-[size:20px_20px] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <span className="text-amber-500 tracking-[0.3em] text-sm">
              KONTAKT
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </div>
          <h2 className="font-serif text-4xl text-stone-100 mb-4">
            Besuchen Sie uns
          </h2>
          <p className="text-stone-300">
            Erleben Sie authentische griechische Gastfreundschaft. Reservieren
            Sie einen Tisch oder kontaktieren Sie uns für Fragen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Adresse",
                  content: "Olymposstraße 123\n10115 Berlin",
                },
                {
                  icon: Phone,
                  title: "Telefon",
                  content: "+49 (0) 30 123 456 78",
                },
                {
                  icon: Mail,
                  title: "E-Mail",
                  content: "info@taverna-olympos.de",
                },
                {
                  icon: Clock,
                  title: "Öffnungszeiten",
                  content: "Di-So: 17:00 - 23:00\nMo: Ruhetag",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-stone-800/30 backdrop-blur-sm border border-stone-100/10 rounded-lg p-6 hover:bg-stone-800/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <item.icon className="w-5 h-5 text-amber-500" />
                    <h3 className="font-serif text-lg text-stone-100">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-stone-300 whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-stone-800/30 backdrop-blur-sm border border-stone-100/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-stone-400">Interaktive Karte</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-800/30 backdrop-blur-sm border border-stone-100/10 rounded-lg p-8">
            <h3 className="font-serif text-2xl text-stone-100 mb-6">
              Reservierung & Anfragen
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-300 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-stone-900/50 border border-stone-100/10 rounded-lg px-4 py-2 text-stone-100 focus:outline-none focus:border-amber-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-stone-300 text-sm mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-stone-900/50 border border-stone-100/10 rounded-lg px-4 py-2 text-stone-100 focus:outline-none focus:border-amber-500 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Phone & Guests Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-300 text-sm mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="w-full bg-stone-900/50 border border-stone-100/10 rounded-lg px-4 py-2 text-stone-100 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 text-sm mb-2">
                    Anzahl der Gäste
                  </label>
                  <select
                    value={formState.guests}
                    onChange={(e) =>
                      setFormState({ ...formState, guests: e.target.value })
                    }
                    className="w-full bg-stone-900/50 border border-stone-100/10 rounded-lg px-4 py-2 text-stone-100 focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Person" : "Personen"}
                      </option>
                    ))}
                    <option value="9+">9+ Personen</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-300 text-sm mb-2">
                    Datum
                  </label>
                  <input
                    type="date"
                    value={formState.date}
                    onChange={(e) =>
                      setFormState({ ...formState, date: e.target.value })
                    }
                    className="w-full bg-stone-900/50 border border-stone-100/10 rounded-lg px-4 py-2 text-stone-100 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 text-sm mb-2">
                    Uhrzeit
                  </label>
                  <input
                    type="time"
                    value={formState.time}
                    onChange={(e) =>
                      setFormState({ ...formState, time: e.target.value })
                    }
                    className="w-full bg-stone-900/50 border border-stone-100/10 rounded-lg px-4 py-2 text-stone-100 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-stone-300 text-sm mb-2">
                  Nachricht
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-stone-900/50 border border-stone-100/10 rounded-lg px-4 py-2 text-stone-100 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-stone-100 py-3 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Anfrage senden</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
