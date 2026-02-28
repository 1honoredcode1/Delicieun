"use client";

import { useEffect } from "react";
import "../styles/hero.css";
import HeroBtn from "../components/HeroSection/HeroBtn";
import { useLanguage } from "../lib/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  useEffect(() => {
    let lightbox: any;

    const init = async () => {
      // Import only on the client, at runtime
      const mod = await import("glightbox");
      const GLightbox = mod.default;

      lightbox = GLightbox({
        selector: ".glightbox",
      });
    };

    init();

    return () => {
      // Cleanup if the library supports it
      if (lightbox && typeof lightbox.destroy === "function") {
        lightbox.destroy();
      }
    };
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              {t.hero.title} <span>Délicieun</span>
            </h1>
            <h2>{t.hero.paragraph}</h2>
            <div className="btns">
              <HeroBtn name={t.hero.btn1} target="menu" />
              <HeroBtn name={t.hero.btn2} target="book-a-table" />
            </div>
          </div>

          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://www.youtube.com/watch?v=3_upA09AntU"
              className="glightbox play-btn"
              aria-label="Play video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
