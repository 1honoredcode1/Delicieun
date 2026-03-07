"use client";

import { useEffect, useState } from "react";
import { Preloader } from "../components/MenuSection/Preloader";
import GalleryItem from "../components/GallerySection/GalleryItem";
import SectionTitle from "../components/SectionTitle";

const Gallery = () => {
  const [images, setImage] = useState<any | []>([]);

  const getGalleryData = () => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => setImage(data))
      .catch((e) => console.log(e.messages));
  };

  useEffect(() => {
    getGalleryData();
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div className="container" data-aos="fade-up">
        <SectionTitle section="gallery" />
      </div>
      <div className="row g-0">
        {!images ? (
          <Preloader />
        ) : images.length > 0 ? (
          images.map((image: { id: number; image: string }) => (
            <GalleryItem key={image.id} item={image} />
          ))
        ) : (
          <Preloader />
        )}
      </div>
    </section>
  );
};

export default Gallery;
