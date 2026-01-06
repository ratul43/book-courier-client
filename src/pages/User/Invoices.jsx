import React from "react";

const Invoices = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">My Invoices</h1>

      {/* Table Card */}
      <div className="card bg-base-100 shadow-lg p-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Payment ID</th>
              <th>Book Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr>
              <td>1</td>
              <td className="font-mono">PAY-982341</td>
              <td>Atomic Habits</td>
              <td className="font-semibold">$14.99</td>
              <td>Aug 18, 2024</td>
              <td>
                <span className="badge badge-success">Paid</span>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>2</td>
              <td className="font-mono">PAY-124875</td>
              <td>The Psychology of Money</td>
              <td className="font-semibold">$12.50</td>
              <td>Aug 05, 2024</td>
              <td>
                <span className="badge badge-success">Paid</span>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>3</td>
              <td className="font-mono">PAY-774215</td>
              <td>Rich Dad Poor Dad</td>
              <td className="font-semibold">$10.99</td>
              <td>Jul 22, 2024</td>
              <td>
                <span className="badge badge-success">Paid</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Invoices;
