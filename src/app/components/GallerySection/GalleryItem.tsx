"use client";

import Image from "next/image";
import "../../styles/galleryItem.css";
import { useEffect } from "react";

const GalleryItem = ({
  item,
}: {
  item: {
    id: number;
    image: string;
  };
}) => {
  useEffect(() => {
    const loadLightbox = async () => {
      const GLightbox = (await import("glightbox")).default;

      GLightbox({
        selector: ".gallery-lightbox",
      });
    };

    loadLightbox();
  }, []);

  return (
    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a
          href={item.image}
          className="gallery-lightbox"
          data-gall="gallery-item"
        >
          <Image
            width={500}
            height={300}
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            src={item.image}
            alt="gallery img"
            className="img-fluid"
          />
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;
