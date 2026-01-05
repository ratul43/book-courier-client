import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('/reviews.json')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setReviews(data)
        })
    }, [])

    console.log(reviews);

  return (
    <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          What our users say
        </h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="max-w-3xl mx-auto"
      >
        {
            reviews.map(review=> <SwiperSlide key={review.id}>
          <div className="card bg-base-100 shadow-lg p-6 text-center">
            <img
              src={review.photo}
              alt={review.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{review.role}</p>
            <p className="text-gray-600">
              {review.review}
            </p>
          </div>
        </SwiperSlide> 
            )
        }
        

      
      </Swiper>
    </section>
  );
};

export default Reviews;
