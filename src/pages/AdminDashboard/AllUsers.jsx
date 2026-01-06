import React from "react";

const AllUsers = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">All Users</h1>
        <p className="text-gray-500">
          Manage registered users and assign roles
        </p>
      </div>

      {/* Users Table */}
      <div className="card bg-base-100 shadow-lg p-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* User 1 */}
            <tr>
              <td>1</td>
              <td className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/60?img=11"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <span className="font-semibold">John Doe</span>
              </td>
              <td>john.doe@email.com</td>
              <td>
                <span className="badge badge-outline">
                  Customer
                </span>
              </td>
              <td className="flex gap-2">
                <button className="btn btn-sm btn-outline">
                  Make Librarian
                </button>
                <button className="btn btn-sm btn-primary">
                  Make Admin
                </button>
              </td>
            </tr>

            {/* User 2 */}
            <tr>
              <td>2</td>
              <td className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <span className="font-semibold">David</span>
              </td>
              <td>sarah@email.com</td>
              <td>
                <span className="badge badge-secondary">
                  Librarian
                </span>
              </td>
              <td className="flex gap-2">
                <button className="btn btn-sm btn-outline" disabled>
                  Make Librarian
                </button>
                <button className="btn btn-sm btn-primary">
                  Make Admin
                </button>
              </td>
            </tr>

            {/* User 3 */}
            <tr>
              <td>3</td>
              <td className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/60?img=33"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <span className="font-semibold">Admin User</span>
              </td>
              <td>admin@email.com</td>
              <td>
                <span className="badge badge-primary">
                  Admin
                </span>
              </td>
              <td className="flex gap-2">
                <button className="btn btn-sm btn-outline" disabled>
                  Make Librarian
                </button>
                <button className="btn btn-sm btn-primary" disabled>
                  Make Admin
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllUsers;
