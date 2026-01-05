import React, { useEffect } from "react";
import AOS from "aos";
import Lottie from "lottie-react";
import searchAnimation from "../animations/searching.json"
import cartAnimation from '../animations/cart.json';
import bookTruck from "../animations/truck.json"
import bookAnimation from '../animations/book.json';
import Reviews from "./Reviews";
const WhyChoose = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-4 bg-base-100">
      {/* ===== WHY CHOOSE ===== */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose BookCourier?</h2>
        <p className="text-gray-500 mb-12">
          Fast, affordable, and reliable book delivery you can trust.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="card bg-base-200 p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">📦 Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Quick and secure delivery to your doorstep.
            </p>
          </div>

          <div className="card bg-base-200 p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">💸 Best Prices</h3>
            <p className="text-sm text-gray-600">
              Affordable prices with regular discounts.
            </p>
          </div>

          <div className="card bg-base-200 p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">📚 Wide Collection</h3>
            <p className="text-sm text-gray-600">
              Thousands of books across all categories.
            </p>
          </div>

          <div className="card bg-base-200 p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">🔐 Secure Payment</h3>
            <p className="text-sm text-gray-600">
              Safe and trusted payment methods.
            </p>
          </div>
        </div>
      </div>

      {/* ===== SINGLE ANIMATED SECTION ===== */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          How BookCourier Works
        </h2>

        <div
          data-aos="fade-up"
          className="grid md:grid-cols-4 gap-6 text-center"
        >
          <div className="card bg-base-200 p-6 shadow">
            <span className="text-4xl">
              <Lottie className="h-20" animationData={searchAnimation} loop={true} />
            </span>
            <h4 className="font-semibold mt-4">Browse Books</h4>
            <p className="text-sm text-gray-600 mt-2">
              Explore books from multiple categories.
            </p>
          </div>

          <div className="card bg-base-200 p-6 shadow">
            <span className="text-4xl">
        <Lottie className="h-20" animationData={cartAnimation} loop={true} />

            </span>
            <h4 className="font-semibold mt-4">Place Order</h4>
            <p className="text-sm text-gray-600 mt-2">
              Add books to cart and checkout easily.
            </p>
          </div>

          <div className="card bg-base-200 p-6 shadow">
            <span className="text-4xl">
  <Lottie className="h-20" animationData={bookTruck} loop={true} />

            </span>
            <h4 className="font-semibold mt-4">Fast Delivery</h4>
            <p className="text-sm text-gray-600 mt-2">
              Doorstep delivery in no time.
            </p>
          </div>

          <div className="card bg-base-200 p-6 shadow">
            <span className="text-4xl">
   <Lottie className="h-20" animationData={bookAnimation} loop={true} />

            </span>
            <h4 className="font-semibold mt-4">Happy Reading</h4>
            <p className="text-sm text-gray-600 mt-2">
              Enjoy reading without hassle.
            </p>
          </div>
        </div>
        <Reviews></Reviews>
      </div>
    </section>
  );
};

export default WhyChoose;
