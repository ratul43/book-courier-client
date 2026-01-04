import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Slider1 from "./Sliders/Slider1";

const books = [
  {
    id: 1,
    name: "Atomic Habits",
    image: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L.jpg",
    shortDescription:
      "A practical guide to building good habits and breaking bad ones for lasting success.",
  },
  {
    id: 2,
    name: "The Psychology of Money",
    image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
    shortDescription:
      "Timeless lessons on wealth, greed, and happiness explained through simple stories.",
  },
  {
    id: 3,
    name: "Rich Dad Poor Dad",
    image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
    shortDescription:
      "A personal finance classic that challenges traditional views on money and investing.",
  },
];

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 1000 }}
      loop
      pagination={{ clickable: true }}
      className="w-full h-[500px] py-4"
    >
      {books.map((book) => (
        <SwiperSlide
          key={book.id}
          className="flex items-center justify-center bg-base-200"
        >
          <Slider1 book={book}></Slider1>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
