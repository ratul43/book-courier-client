import React from "react";

const OrdersPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Book Orders</h1>
        <p className="text-gray-500">
          Manage orders for books you have added
        </p>
      </div>

      {/* Orders Table */}
      <div className="card bg-base-100 shadow-lg p-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Title</th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Order 1 */}
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
              <td className="font-mono">ORD-10245</td>
              <td>John Doe</td>
              <td>$14.99</td>
              <td>
                <select className="select select-bordered select-sm">
                  <option>Pending</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
              </td>
              <td>
                <button className="btn btn-error btn-sm">
                  Cancel
                </button>
              </td>
            </tr>

            {/* Order 2 */}
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
              <td className="font-mono">ORD-87421</td>
              <td>Sarah Lee</td>
              <td>$12.50</td>
              <td>
                <select className="select select-bordered select-sm">
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
              </td>
              <td>
                <button className="btn btn-error btn-sm">
                  Cancel
                </button>
              </td>
            </tr>

            {/* Order 3 */}
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
              <td className="font-mono">ORD-55498</td>
              <td>Michael Smith</td>
              <td>$10.99</td>
              <td>
                <select className="select select-bordered select-sm">
                  <option>Delivered</option>
                </select>
              </td>
              <td>
                <button className="btn btn-error btn-sm" disabled>
                  Cancel
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default OrdersPage;
