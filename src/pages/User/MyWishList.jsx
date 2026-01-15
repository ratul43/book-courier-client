import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const MyWishList = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const [wishBooks, setWishBooks] = useState([])
  useEffect(()=>{
    axiosSecure.get(`/books/wishListed/user?email=${user?.email}`)
    .then((res)=> {
      setWishBooks(res.data)
    })
  }, [axiosSecure, user?.email])

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <p className="text-gray-500">
          Books you’ve saved for later
        </p>
      </div>
      
      {wishBooks.length<1 && <h1 className="font-bold text-2xl">No Books saved</h1>}

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        {
          wishBooks.map(wishBook=>  <div key={wishBook.bookId} className="card bg-base-100 shadow-md hover:shadow-xl transition">
          <figure className="p-4 bg-white">
            <img
              src={wishBook?.bookImg}
              alt="Atomic Habits"
              className="h-48 w-full object-contain"
            />
          </figure>

          <div className="card-body p-4">
            <Link to={`/bookDetails/${wishBook.bookId}`} className="font-bold text-lg">
              {wishBook?.bookName}
            </Link>
            <p className="text-sm text-gray-500">
              {wishBook?.author}
            </p>

            <div className="mt-2 text-lg font-semibold text-primary">
              ${wishBook?.price}
            </div>

            <div className="card-actions mt-4">
              <Link to={`/bookDetails/${wishBook.bookId}`} className="btn btn-primary btn-sm w-full">
                Buy Now
              </Link>
            </div>
          </div>
        </div>)
        }
       

      
      </div>
    </div>
  );
};

export default MyWishList;
