import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bannerImg1 from '../assets/banner1.png'
import bannerImg2 from '../assets/banner2.png'
import bannerImg3 from '../assets/banner3.png'
const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 2000 }}
      loop
      pagination={{ clickable: true }}
      
      className="w-full h-[500px]"
    >
      <SwiperSlide className="flex items-center justify-center bg-base-200">
    <img src={bannerImg1} alt="" />
      </SwiperSlide>

      <SwiperSlide className="flex items-center justify-center bg-base-200">
    <img src={bannerImg2} alt="" />
      </SwiperSlide>

      <SwiperSlide className="flex items-center justify-center bg-base-200">
    <img src={bannerImg3} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;