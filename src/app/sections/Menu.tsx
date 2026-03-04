"use client";

import { useEffect, useState } from "react";

import { filters } from "../data/data";

import "../styles/menu.css";

import SectionTitle from "../components/SectionTitle";
import MenuItem from "../components/MenuSection/MenuItem";
import { Preloader } from "../components/MenuSection/Preloader";

const Menu = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const getMenuData = () => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((menu) => setData(menu))
      .catch((e) => console.log(e.messages));
  };

  useEffect(() => {
    getMenuData();
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleFilterChange = (_id: number, category: string) => {
    setActiveCategory(category);

    if (category === "all") setItems(data);
    else
      setItems(
        data.filter((item: { category: string }) => item.category === category),
      );
  };

  return (
    <section id="menu" className="menu">
      <div className="container" data-aos="fade-up">
        <SectionTitle section="menu" />
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-filters">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={
                    activeCategory === filter.category ? "filter-active" : ""
                  }
                  onClick={() => handleFilterChange(filter.id, filter.category)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {!items ? (
            <Preloader />
          ) : items.length > 0 ? (
            items.map(
              (item: {
                id: number;
                name: string;
                preview: string;
                price: number;
                ingredients: string;
              }) => <MenuItem key={item.id} item={item} />,
            )
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
