"use client";

import React from "react";
import { Users, Timer, Utensils, Star } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "15,000+",
      label: "Zufriedene Gäste",
    },
    {
      icon: Timer,
      value: "25",
      label: "Jahre Tradition",
    },
    {
      icon: Utensils,
      value: "100+",
      label: "Authentische Rezepte",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Bewertung",
    },
  ];

  return (
    <section id="about" className="relative bg-stone-900 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/assets/food')] bg-repeat opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <span className="text-amber-500 tracking-[0.3em] text-sm">
                UNSERE GESCHICHTE
              </span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-stone-100">
              Eine Reise durch die{" "}
              <span className="text-amber-500">griechische Tradition</span>
            </h2>

            <div className="space-y-6 text-stone-300">
              <p>
                Seit 1998 bringen wir die authentischen Geschmäcker und die
                warme Atmosphäre Griechenlands nach Deutschland. Was als kleines
                Familienrestaurant begann, hat sich zu einem beliebten
                Treffpunkt für Liebhaber der mediterranen Küche entwickelt.
              </p>
              <p>
                Unsere Gerichte werden nach traditionellen Rezepten zubereitet,
                die von Generation zu Generation weitergegeben wurden. Jede
                Zutat wird sorgfältig ausgewählt, viele davon importieren wir
                direkt aus Griechenland, um den authentischen Geschmack zu
                bewahren.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-amber-500 pl-6 italic text-stone-300">
              "Kochen ist wie Liebe - es sollte mit Hingabe geschehen oder gar
              nicht."
              <footer className="mt-2 text-amber-500 not-italic">
                - Yiayia Eleni, Gründerin
              </footer>
            </blockquote>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/400/500"
                    alt="Restaurant interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/400/300"
                    alt="Traditional cooking"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/400/300"
                    alt="Fresh ingredients"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/400/500"
                    alt="Restaurant atmosphere"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-2xl" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-stone-800/50 backdrop-blur-sm border border-stone-100/10 rounded-lg p-6 text-center hover:bg-stone-800/70 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-amber-500" />
              </div>
              <div className="font-serif text-3xl text-stone-100 mb-2">
                {stat.value}
              </div>
              <div className="text-stone-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Tradition",
              description:
                "Wir bewahren die authentischen Rezepte und Zubereitungsmethoden unserer Vorfahren.",
            },
            {
              title: "Qualität",
              description:
                "Nur die besten und frischesten Zutaten finden den Weg in unsere Küche.",
            },
            {
              title: "Gastfreundschaft",
              description:
                "Φιλοξενία - Bei uns sind Sie nicht nur Gast, sondern Teil der Familie.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-stone-800/30 backdrop-blur-sm border border-stone-100/10 rounded-lg p-8 hover:bg-stone-800/50 transition-colors duration-300"
            >
              <h3 className="font-serif text-xl text-amber-500 mb-4">
                {value.title}
              </h3>
              <p className="text-stone-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
