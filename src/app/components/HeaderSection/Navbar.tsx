"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../../lib/LanguageContext";

import "../../styles/navBar.css";

const Navbar = () => {
  const { t } = useLanguage();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleActive = () => {
      const links = t.nav.links as NavLink[];

      const sections = links
        .map((l) => document.getElementById(l.target))
        .filter(Boolean) as HTMLElement[];

      const scrollPos = window.scrollY + 150;

      let current = "";

      for (const section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          current = section.id;
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleActive);
    handleActive();

    return () => window.removeEventListener("scroll", handleActive);
  }, [t.nav.links]);

  const handleToggleMenu = () => setOpen((v) => !v);

  const handleScrollTo = (section: string) => {
    setOpen(false);
    const el = document.getElementById(section);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      id="navbar"
      className={`navbar order-last order-lg-0 ${open ? "navbar-mobile" : ""}`}
    >
      <ul>
        {(t.nav.links as NavLink[]).map((link) => (
          <li key={link.id}>
            <a
              className={`nav-link scrollto ${active === link.target ? "active" : ""}`}
              href={`#${link.target}`}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.target);
              }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <i className="bi bi-list mobile-nav-toggle" onClick={handleToggleMenu} />
    </nav>
  );
};

export default Navbar;
