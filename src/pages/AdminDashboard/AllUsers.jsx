import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, [axiosSecure]);

  // console.log(users);

  const handleLibrarian = async (email) => {
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes"
}).then((result)=>{
  if(result.isConfirmed) {
     axiosSecure.patch(`/users/make-librarian?email=${email}`).then(() => {
      Swal.fire({
      title: "Success!",
      icon: "success"
    });
      setUsers((prev) =>
        prev.map((user) =>
          user.email === email ? { ...user, role: "librarian" } : user
        )
      );
    });
  }
})
    
  };

  const handleAdmin = async (email) => {
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes"
}).then((result)=>{
  if(result.isConfirmed){
     axiosSecure.patch(`/users/make-admin?email=${email}`).then(() => {
      setUsers((prev) =>
        prev.map((user) =>
          user.email === email ? { ...user, role: "admin" } : user
        )
      );
      Swal.fire({
      title: "Success!",
      icon: "success"
    });
    });
  }
})
    
  };

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
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={user?.photo}
                    alt="User"
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <span className="badge badge-outline">{user?.role}</span>
                </td>
                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLibrarian(user.email)}
                      className="btn btn-sm btn-outline"
                    >
                      Make Librarian
                    </button>
                    <button
                      onClick={() => handleAdmin(user.email)}
                      className="btn btn-sm btn-primary"
                    >
                      Make Admin
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
