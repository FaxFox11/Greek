"use client";

import React, { useState } from "react";

const MenuSection = ({ title, items }) => (
  <div className="mb-16">
    {/* Section Title with decorative elements */}
    <div className="flex items-center mb-8">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <h2 className="px-6 font-serif text-3xl text-amber-500">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
    </div>

    {/* Menu Items Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="group relative bg-stone-900/40 hover:bg-stone-900/60 backdrop-blur-sm border border-stone-100/10 rounded-lg p-6 transition-all duration-300"
        >
          {/* Item Header */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-xl text-stone-100 group-hover:text-amber-500 transition-colors duration-300">
              {item.name}
            </h3>
            <span className="text-amber-500 font-serif text-xl">
              {item.price}€
            </span>
          </div>

          {/* Greek Name */}
          <div className="text-stone-400 text-sm mb-2 italic">
            {item.greekName}
          </div>

          {/* Description */}
          <p className="text-stone-300 text-sm">{item.description}</p>

          {/* Dietary Icons */}
          <div className="flex gap-2 mt-3">
            {item.isVegetarian && (
              <span className="text-xs px-2 py-1 rounded-full bg-green-900/30 text-green-400 border border-green-400/20">
                Vegetarisch
              </span>
            )}
            {item.isSpicy && (
              <span className="text-xs px-2 py-1 rounded-full bg-red-900/30 text-red-400 border border-red-400/20">
                Scharf
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("vorspeisen");

  const menuData = {
    vorspeisen: {
      title: "Vorspeisen",
      items: [
        {
          name: "Tzatziki",
          greekName: "Τζατζίκι",
          price: 6.5,
          description:
            "Griechischer Joghurt mit Gurken, Knoblauch und frischen Kräutern",
          isVegetarian: true,
        },
        {
          name: "Dolmades",
          greekName: "Ντολμάδες",
          price: 7.9,
          description:
            "Weinblätter gefüllt mit Reis, Pinienkernen und mediterranen Gewürzen",
          isVegetarian: true,
        },
        {
          name: "Saganaki",
          greekName: "Σαγανάκι",
          price: 8.5,
          description: "Gebratener Graviera-Käse mit Zitrone und Oregano",
          isVegetarian: true,
        },
        {
          name: "Kalamari",
          greekName: "Καλαμάρι",
          price: 9.9,
          description:
            "Frittierte Tintenfischringe mit Zitrone und hausgemachter Aioli",
        },
      ],
    },
    hauptgerichte: {
      title: "Hauptgerichte",
      items: [
        {
          name: "Moussaka",
          greekName: "Μουσακάς",
          price: 16.9,
          description:
            "Geschichteter Auflauf aus Auberginen, Hackfleisch und Bechamelsauce",
        },
        {
          name: "Souvlaki Teller",
          greekName: "Σουβλάκι",
          price: 18.5,
          description:
            "Marinierte Schweinespieße mit Tzatziki, Pita und griechischem Salat",
        },
        {
          name: "Gemista",
          greekName: "Γεμιστά",
          price: 15.9,
          description: "Mit Reis und Kräutern gefüllte Tomaten und Paprika",
          isVegetarian: true,
        },
        {
          name: "Paidakia",
          greekName: "Παϊδάκια",
          price: 24.9,
          description: "Lammkoteletts mit Knoblauch, Rosmarin und Zitrone",
        },
      ],
    },
    desserts: {
      title: "Desserts",
      items: [
        {
          name: "Baklava",
          greekName: "Μπακλαβάς",
          price: 7.5,
          description: "Blätterteiggebäck mit Nüssen und Honigsirup",
          isVegetarian: true,
        },
        {
          name: "Galaktoboureko",
          greekName: "Γαλακτομπούρεκο",
          price: 6.9,
          description: "Grießpudding im Blätterteig mit Zitronensirup",
          isVegetarian: true,
        },
      ],
    },
  };

  return (
    <section id="menu" className="bg-stone-900 py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Menu Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 tracking-[0.3em] text-sm">
            UNSERE SPEZIALITÄTEN
          </span>
          <h1 className="font-serif text-5xl text-stone-100 mt-4 mb-6">
            Die Speisekarte
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto">
            Entdecken Sie die authentischen Geschmäcker Griechenlands. Jedes
            Gericht wird mit traditionellen Rezepten und frischen Zutaten
            zubereitet.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-16 space-x-4">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-amber-500 text-stone-900"
                  : "text-stone-300 hover:text-amber-500"
              }`}
            >
              {menuData[category].title}
            </button>
          ))}
        </div>

        {/* Menu Sections */}
        <div className="relative">
          {Object.keys(menuData).map((category) => (
            <div
              key={category}
              className={`transition-opacity duration-300 ${
                activeCategory === category
                  ? "opacity-100"
                  : "opacity-0 absolute top-0 left-0 right-0"
              }`}
            >
              {activeCategory === category && (
                <MenuSection
                  title={menuData[category].title}
                  items={menuData[category].items}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
