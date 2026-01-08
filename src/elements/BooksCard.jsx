import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BooksCard = () => {
  const axiosSecure = useAxiosSecure(); 

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axiosSecure.get("/allBooks")
    .then((data)=>setBooks(data.data))
  }, [axiosSecure]);

  return (
    <div className="grid grid-cols-3">
      {books.map((book, index) => (
        <div
          key={index}
          className="card bg-white p-4 sm:p-5 rounded-xl flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <Link to={`/bookDetails/${book._id}`}>
            <img
              src={book.image}
              alt={book.name}
              className="rounded-lg mb-3 w-full object-contain h-40 sm:h-48 md:h-56 lg:h-64"
            />

            <h1
              className="text-[#1F2937] title cursor-pointer font-semibold mb-2 text-lg sm:text-xl md:text-2xl truncate"
              title={book.name}
            >
              {book.name}
            </h1>
          </Link>

          <div className="category-price mb-3  gap-2 ">
            <div className="price font-semibold text-sm sm:text-base">
              <span>${book.price}</span>
              <p className="font-light">{book.author}</p>
            </div>
          </div>

          <button className="btn btn-primary p-2 rounded-xl text-white font-semibold w-full sm:w-auto">
            Order Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
