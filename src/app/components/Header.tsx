"use client";

import { useState, useEffect } from "react";

import "../styles/header.css";

import Link from "next/link";
import Navbar from "./HeaderSection/Navbar";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      </div>
    </header>
  );
};

export default Header;
