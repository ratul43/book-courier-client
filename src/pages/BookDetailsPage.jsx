import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  console.log(data);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const filteredBook = data.filter((book) => book.id === parseInt(id));
    setBooks(filteredBook);
  }, [data, id]);

  console.log(books);

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      {books.map((book) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Book Image */}
          <div className="flex justify-center">
            <img
              src={book.image}
              alt="Atomic Habits"
              className="w-80 rounded-lg shadow-xl"
            />
          </div>

          {/* Right: Book Info */}
          <div className="space-y-5">
            <h1 className="text-4xl font-bold">Atomic Habits</h1>

            <p className="text-lg text-gray-600">
              by <span className="font-semibold">{book.author}</span>
            </p>

            <p className="text-gray-700 leading-relaxed">{book.description}</p>

            <div className="text-2xl font-bold text-primary">${book.price}</div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn btn-primary px-8">Order Now</button>

              <button className="btn btn-outline px-8">Add to Wishlist</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookDetailsPage;
