import React from "react";
import { Link } from "react-router";

const MyBooks = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* Page Title */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Books</h1>
        <button className="btn btn-primary btn-sm">
          + Add New Book
        </button>
      </div>

      {/* Books Table */}
      <div className="card bg-base-100 shadow-lg p-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr>
              <td>1</td>
              <td>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L.jpg"
                  alt="Atomic Habits"
                  className="w-16 h-20 object-contain rounded"
                />
              </td>
              <td className="font-semibold">Atomic Habits</td>
              <td>
                <Link to="/dashboard/librarian/added-books/edit" className="btn btn-outline btn-sm">
                  Edit
                </Link>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>2</td>
              <td>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
                  alt="Psychology of Money"
                  className="w-16 h-20 object-contain rounded"
                />
              </td>
              <td className="font-semibold">
                The Psychology of Money
              </td>
              <td>
                <button className="btn btn-outline btn-sm">
                  Edit
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>3</td>
              <td>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
                  alt="Rich Dad Poor Dad"
                  className="w-16 h-20 object-contain rounded"
                />
              </td>
              <td className="font-semibold">
                Rich Dad Poor Dad
              </td>
              <td>
                <button className="btn btn-outline btn-sm">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyBooks;
