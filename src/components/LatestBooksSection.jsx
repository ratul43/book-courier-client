import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useAxiosSecure from './../hooks/useAxiosSecure';
import { Link } from "react-router";

const LatestBooksSection = () => {
  const [latestBooks, setLatestBooks] = useState([]);
  const axiosSecure = useAxiosSecure()
  useEffect(() => {
    axiosSecure.get("/allBooks/published")
    .then((res)=>{
      setLatestBooks(res.data)
    })
  }, [axiosSecure]);

  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Books</h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 1000 }}
        // pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {latestBooks.map((latestBook) => (
          <SwiperSlide>
            <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-lg overflow-hidden flex flex-col h-90">
  <img
    src={latestBook.image}
    alt={latestBook.name}
    className="w-full h-48 object-contain p-4 bg-white flex-shrink-0"
  />
  <div className="p-4 flex flex-col flex-grow overflow-hidden">
    <h3 className="font-bold text-lg">{latestBook.name}</h3>
    <p className="text-gray-500 text-sm mt-1 overflow-hidden text-ellipsis">
      {latestBook.shortDescription}
    </p>
    <div className="mt-auto">
      <Link to={`/bookDetails/${latestBook._id}`} className="btn btn-primary btn-sm w-fit">
        View Details
      </Link>
    </div>
  </div>
</div>

          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-lg overflow-hidden">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
              alt="The Psychology of Money"
              className="w-full h-48 object-contain p-4 bg-white"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">The Psychology of Money</h3>
              <p className="text-gray-500 text-sm mt-1">
                Timeless lessons on wealth, greed, and happiness.
              </p>
              <button className="btn btn-primary btn-sm mt-4 w-fit">
                View Details
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-lg overflow-hidden">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
              alt="Rich Dad Poor Dad"
              className="w-full h-48 object-contain p-4 bg-white"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">Rich Dad Poor Dad</h3>
              <p className="text-gray-500 text-sm mt-1">
                What the rich teach their kids about money.
              </p>
              <button className="btn btn-primary btn-sm mt-4 w-fit">
                View Details
              </button>
            </div>
          </div>
        </SwiperSlide> */}

        {/* Add more static slides as needed */}
      </Swiper>
    </section>
  );
};

export default LatestBooksSection;
