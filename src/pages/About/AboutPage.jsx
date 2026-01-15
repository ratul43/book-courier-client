import React from "react";
import { FaBook, FaTruck, FaUsers } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-primary">BookCourier</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Your trusted online destination for discovering, ordering, and
          delivering books straight to your doorstep.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          alt="Books"
          className="rounded-xl shadow-md"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-600">
            At BookCourier, our mission is to make books accessible to everyone.
            We believe reading fuels imagination, knowledge, and growth. That’s
            why we connect readers with their favorite books through a simple,
            fast, and reliable delivery experience.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="card bg-base-100 shadow-md p-6 space-y-3">
          <FaBook className="text-4xl mx-auto text-primary" />
          <h3 className="text-xl font-semibold">Wide Book Collection</h3>
          <p className="text-gray-500">
            Explore a diverse range of books from popular authors and genres.
          </p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 space-y-3">
          <FaTruck className="text-4xl mx-auto text-primary" />
          <h3 className="text-xl font-semibold">Fast Delivery</h3>
          <p className="text-gray-500">
            Order your favorite books and get them delivered quickly and safely.
          </p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 space-y-3">
          <FaUsers className="text-4xl mx-auto text-primary" />
          <h3 className="text-xl font-semibold">Community Driven</h3>
          <p className="text-gray-500">
            Share reviews, rate books, and connect with fellow book lovers.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="bg-base-200 rounded-xl p-8 text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Vision</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We envision a world where books are easily accessible to everyone,
          fostering lifelong learning and a love for reading. BookCourier aims
          to become a trusted companion for readers everywhere.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
