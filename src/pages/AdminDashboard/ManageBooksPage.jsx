import React from "react";

const ManageBooksPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Manage Books</h1>
        <p className="text-gray-500">
          Control book visibility and remove books if necessary
        </p>
      </div>

      {/* Books Table */}
      <div className="card bg-base-100 shadow-lg p-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Title</th>
              <th>Added Date</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Book 1 */}
            <tr>
              <td>1</td>
              <td>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L.jpg"
                  alt="Atomic Habits"
                  className="w-14 h-20 object-contain rounded"
                />
              </td>
              <td className="font-semibold">Atomic Habits</td>
              <td>Aug 10, 2024</td>
              <td>
                <input
                  type="checkbox"
                  className="toggle toggle-success"
                  defaultChecked
                />
              </td>
              <td className="flex gap-2">
                <button className="btn btn-error btn-sm">
                  Delete
                </button>
              </td>
            </tr>

            {/* Book 2 */}
            <tr>
              <td>2</td>
              <td>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
                  alt="Psychology of Money"
                  className="w-14 h-20 object-contain rounded"
                />
              </td>
              <td className="font-semibold">
                The Psychology of Money
              </td>
              <td>Jul 28, 2024</td>
              <td>
                <input
                  type="checkbox"
                  className="toggle toggle-success"
                />
              </td>
              <td className="flex gap-2">
                <button className="btn btn-error btn-sm">
                  Delete
                </button>
              </td>
            </tr>

            {/* Book 3 */}
            <tr>
              <td>3</td>
              <td>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
                  alt="Rich Dad Poor Dad"
                  className="w-14 h-20 object-contain rounded"
                />
              </td>
              <td className="font-semibold">
                Rich Dad Poor Dad
              </td>
              <td>Jun 15, 2024</td>
              <td>
                <input
                  type="checkbox"
                  className="toggle toggle-success"
                  defaultChecked
                />
              </td>
              <td className="flex gap-2">
                <button className="btn btn-error btn-sm">
                  Delete
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ManageBooksPage;
