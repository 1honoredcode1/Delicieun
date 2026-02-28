import { useEffect, useState } from "react";
import Link from "next/link";

import { useLanguage } from "../../lib/LanguageContext";

import "../../styles/navBar.css";

const Navbar = () => {
  const { t } = useLanguage();

  const [open, setOpen] = useState(false);
  const handleToggleMenu = () => {
    setOpen(!open);
  };

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

  const handleScrollTo = (section: string) => {};

  const handleNavActive = () => {};

  return (
    <nav
      id="navbar"
      className={`navbar order-last order-lg-0 ${open ? "navbar-mobile" : undefined}`}
    >
      <ul>
        {t.nav.links.map((link) => (
          <li key={link.id}>
            <Link
              className={`nav-link scrollto ${link.active ? "active" : undefined}`}
              href={`#${link.target}`}
              onClick={() => handleScrollTo(link.target)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <i
        className="bi bi-list mobile-nav-toggle"
        onClick={handleToggleMenu}
      ></i>
    </nav>
  );
};

export default Navbar;
