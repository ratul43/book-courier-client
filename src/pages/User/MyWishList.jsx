import React from "react";

const MyWishList = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <p className="text-gray-500">
          Books you’ve saved for later
        </p>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
          <figure className="p-4 bg-white">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L.jpg"
              alt="Atomic Habits"
              className="h-48 w-full object-contain"
            />
          </figure>

          <div className="card-body p-4">
            <h3 className="font-bold text-lg">
              Atomic Habits
            </h3>
            <p className="text-sm text-gray-500">
              James Clear
            </p>

            <div className="mt-2 text-lg font-semibold text-primary">
              $14.99
            </div>

            <div className="card-actions mt-4">
              <button className="btn btn-primary btn-sm w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
          <figure className="p-4 bg-white">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
              alt="Psychology of Money"
              className="h-48 w-full object-contain"
            />
          </figure>

          <div className="card-body p-4">
            <h3 className="font-bold text-lg">
              The Psychology of Money
            </h3>
            <p className="text-sm text-gray-500">
              Morgan Housel
            </p>

            <div className="mt-2 text-lg font-semibold text-primary">
              $12.50
            </div>

            <div className="card-actions mt-4">
              <button className="btn btn-primary btn-sm w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
          <figure className="p-4 bg-white">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
              alt="Rich Dad Poor Dad"
              className="h-48 w-full object-contain"
            />
          </figure>

          <div className="card-body p-4">
            <h3 className="font-bold text-lg">
              Rich Dad Poor Dad
            </h3>
            <p className="text-sm text-gray-500">
              Robert Kiyosaki
            </p>

            <div className="mt-2 text-lg font-semibold text-primary">
              $10.99
            </div>

            <div className="card-actions mt-4">
              <button className="btn btn-primary btn-sm w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyWishList;
