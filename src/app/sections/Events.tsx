"use client";

import "../styles/events.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import EventsItem from "../components/EventsSection/EventsItem";

const Events = () => {
  const [slides, setSlides] = useState<any | []>([]);

  const getEventData = () => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((e) => console.log(e.messages));
  };

  useEffect(() => {
    getEventData();
  }, []);

  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <SectionTitle section="events" />
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            className="events-slider swiper-container"
          >
            {slides &&
              slides.length > 0 &&
              slides.map(
                (slide: {
                  id: number;
                  image: string;
                  title: string;
                  price: number;
                  content: string;
                  details: string[];
                  summary: string;
                }) => (
                  <SwiperSlide key={slide.id}>
                    <EventsItem item={slide} />
                  </SwiperSlide>
                ),
              )}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Events;
