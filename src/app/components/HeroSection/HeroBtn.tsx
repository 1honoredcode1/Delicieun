"use client";

import "../../styles/heroBtn.css";

export default function HeroBtn({
  name,
  target,
}: {
  name: string;
  target: string;
}) {
  const handleScrollTo = (section: string) => {
    const el = document.getElementById(section);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <a
      onClick={() => handleScrollTo(target)}
      className={`btn-hero animated fadeInUp scrollto ${
        name.toLowerCase().includes("book") ? "ms-4" : ""
      }`}
      style={{ cursor: "pointer" }}
    >
      {name}
    </a>
  );
}
