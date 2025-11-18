// src/App.tsx

import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="relative w-full h-full overflow-x-hidden bg-transparent">
        
        {/* ⭐ Background Stars */}
        <StarsCanvas />

        {/* CONTENT */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Works />
          <Feedbacks />
          <Contact />

          {/* ⭐ FOOTER AT VERY BOTTOM */}
          <footer className="github-footer">
            <div className="github-footer-inner">
              <div className="footer-left">
                <i className="fab fa-github github-icon"></i>
                <span>© {new Date().getFullYear()} Saketh.</span>
              </div>

              <div className="footer-links">
                <a href="mailto:sakethpakala@gmail.com">Email:sakethpakala@gmail.com</a>
                <a href="tel:+44 7352680497 ">Mobile:+44 7352680497</a>
                <a href="https://github.com/sakethpakala" target="_blank">GitHub</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </footer>
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;
