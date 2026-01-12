import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [users, setUsers] = useState([])

  const axiosSecure = useAxiosSecure()

  useEffect( ()=>{
    axiosSecure.get("/users")
    .then((res)=>{
      setUsers(res.data)
    })
  }, [axiosSecure])

  console.log(users);
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
            
            {users.map((user, index)=><tr>
              <td>{index + 1}</td>
              <td className="flex items-center gap-3">
                <img
                  src={user?.photo}
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <span className="font-semibold">{user?.name}</span>
              </td>
              <td>{user?.email}</td>
              <td>
                <span className="badge badge-outline">
                  {user?.role}
                </span>
              </td>
              <td>
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-outline">
                  Make Librarian
                </button>
                <button className="btn btn-sm btn-primary">
                  Make Admin
                </button>
                </div>
                
              </td>
            </tr>)}

            


          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllUsers;
