"use client";

import { useState, useEffect } from "react";

import { useLanguage } from "../lib/LanguageContext";

import "../styles/header.css";
import Link from "next/link";

import AppButton from "./HeaderSection/AppButton";
import Navbar from "./HeaderSection/Navbar";

const Header = () => {
  const { t } = useLanguage();

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
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${scroll > 100 ? "header-scrolled" : undefined}`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <Link href="/">Délicieun</Link>
        </h1>
        <Navbar />
        <AppButton name={t.header.bookTable} />
      </div>
    </header>
  );
};

export default Header;
