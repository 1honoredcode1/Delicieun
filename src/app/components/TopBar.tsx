"use client";

import { useState, useEffect } from "react";
// @ts-expect-error - CSS side effect import
import "../styles/topBar.css";

import { useLanguage } from "../lib/LanguageContext";

const TopBar = () => {
  const { t, lang, setLang } = useLanguage();
  const switchLang = (next: "en" | "no") => setLang(next);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  return (
    <div
      id="topbar"
      className={`d-flex align-items-center fixed-top ${
        scroll > 100 ? "topbar-scrolled" : undefined
      }`}
    >
      <div className="container d-flex justify-content-center justify-content-md-between text-red">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center">
            <span>+47 123 123 12</span>
          </i>
          <i className="bi bi-clock d-flex align-items-center ms-4">
            <span>{t.topbar.time}</span>
          </i>
        </div>
        <div
          className="languages d-none d-md-flex align-items-center"
          role="group"
          aria-label="Language switch"
        >
          <button
            type="button"
            className={`lang-item ${lang === "en" ? "active" : ""}`}
            onClick={() => switchLang("en")}
          >
            EN
          </button>

          <span className="lang-divider">|</span>

          <button
            type="button"
            className={`lang-item ${lang === "no" ? "active" : ""}`}
            onClick={() => switchLang("no")}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
