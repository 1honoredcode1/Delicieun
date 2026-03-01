"use client";

import SectionTitle from "../components/SectionTitle";

import { useLanguage } from "../lib/LanguageContext";

import "../styles/whyUs.css";

const WhyUs = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle section="whyUs" />
        <div className="row">
          {t.whyUs.cards.map((card: any, index: number) => (
            <div key={card.id} className="col-lg-4 mt-4 mt-lg-0">
              <div
                className="box"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <span>{card.id < 10 ? `0${card.id}` : card.id}</span>
                <h4>{card.title}</h4>
                <p>{card.component}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
