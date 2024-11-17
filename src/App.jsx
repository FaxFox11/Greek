// App.jsx
import React from "react";
import Header from "./components/Header";
import Heros from "./components/Heros";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Heros />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
