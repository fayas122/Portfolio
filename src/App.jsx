import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ContactForm from "./components/ContactForm";

function Portfolio({ lightMode, setLightMode }) {
  return (
    <div
      className={`portfolio-shell min-h-screen transition-colors duration-300 ${
        lightMode ? "portfolio-light" : "portfolio-dark"
      }`}
    >
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />

      <main>
        <Hero lightMode={lightMode} />
        <About lightMode={lightMode} />
        <Skills lightMode={lightMode} />
        <Projects lightMode={lightMode} />
        <Contact lightMode={lightMode} />
      </main>
    </div>
  );
}

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Portfolio
              lightMode={lightMode}
              setLightMode={setLightMode}
            />
          }
        />

        <Route
          path="/contact"
          element={<ContactForm />}
        />
      </Routes>
    </BrowserRouter>
  );
}
