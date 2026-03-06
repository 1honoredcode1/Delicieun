"use client";

import { useLanguage } from "../lib/LanguageContext";

import "../styles/sectionTitle.css";

type SectionKey =
  | "whyUs"
  | "menu"
  | "specials"
  | "events"
  | "chefs"
  | "booking"
  | "gallery"
  | "contactUs";

type SectionTitleProps = {
  section: SectionKey;
};

const SectionTitle = ({ section }: SectionTitleProps) => {
  const { t } = useLanguage();

  const data = t.sectionTitles[section];

  return (
    <div className="section-title mt-5">
      <h2>{data.subtitle}</h2>
      <p>{data.title}</p>
    </div>
  );
};

export default SectionTitle;
