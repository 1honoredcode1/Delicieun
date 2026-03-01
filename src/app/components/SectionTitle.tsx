"use client";

import { useLanguage } from "../lib/LanguageContext";

import "../styles/sectionTitle.css";

type SectionTitleProps = {
  section: keyof typeof t.sectionTitles;
};

const SectionTitle = ({ section }: SectionTitleProps) => {
  const { t } = useLanguage();

  const data = t.sectionTitles[section];

  return (
    <div className="section-title">
      <h2>{data.subtitle}</h2>
      <p>{data.title}</p>
    </div>
  );
};

export default SectionTitle;
