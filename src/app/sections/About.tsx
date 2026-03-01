"use client";

import Image from "next/image";

import "../styles/about.css";

import aboutImg from "../../../public/assets/about-bg.jpg";

import { useLanguage } from "../lib/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          {/* Image Side */}
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <Image
                src={aboutImg}
                alt="About Délicieun"
                width={900}
                height={700}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>{t.about.text}</h3>

            <p className="fst-italic">{t.about.paragraph1}</p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i>
                {t.about.point1}
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                {t.about.point2}
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                {t.about.point3}
              </li>
            </ul>

            <p>{t.about.paragraph2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
