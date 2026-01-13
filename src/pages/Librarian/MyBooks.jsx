import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/allBooks").then((res) => {
      setBooks(res.data);
    });
  }, [axiosSecure]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Books</h1>
        <button className="btn btn-primary btn-sm">+ Add New Book</button>
      </div>

      {/* Books Table */}
      <div className="card bg-base-100 shadow-lg p-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            {books.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={book.image}
                    alt={book.name}
                    className="w-16 h-20 object-contain rounded"
                  />
                </td>
                <td className="font-semibold">{book.name}</td>
                <td className="font-semibold">${book.price}</td>
                <td>
                  <Link
                    to={`/dashboard/librarian/added-books/edit/${book._id}`}
                    className="btn btn-outline btn-sm"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooks;
