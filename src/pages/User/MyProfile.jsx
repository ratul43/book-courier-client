import React from "react";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const {user} = useAuth()
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Profile Card */}
        <div className="card bg-base-100 shadow-lg p-6 text-center">
          <div className="flex justify-center">
            <img
              src={user?.photoURL}
              alt="User Avatar"
              className="w-32 h-32 rounded-full border-4 border-primary"
            />
          </div>

          <h2 className="text-xl font-semibold mt-4">{user?.displayName}</h2>
          <p className="text-gray-500">{user?.email}</p>

          {/* Role Badge */}
          <div className="mt-3">
            <span className="badge badge-primary badge-outline">
              Customer
            </span>
          </div>
          <Link to="/dashboard/my-profile/update" className="btn mt-4">Edit Profile</Link>
        </div>

        

      </div>
    </div>
  );
};

export default MyProfile;
