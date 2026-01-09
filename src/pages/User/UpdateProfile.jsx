import React, { useRef } from 'react';
import useAuth from './../../hooks/useAuth';
import { Link } from 'react-router';
import { useState } from 'react';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const {user, updateUserProfile} = useAuth()


  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");


  const handleUpdate = async (e) => {
    e.preventDefault()
    
    const userProfile = {
          displayName: name,
          photoURL: photo  
        }
    await updateUserProfile(userProfile)
    .then(()=>{
      setName("")
      setPhoto("")

      toast.success("Profile updated")
    })
  }





    return (
        <div>
            {/* Update Profile Form */}
             <div className="card bg-base-100 shadow-lg p-6 text-center">
          <div className="flex justify-center">
            <img
              src={photo || user?.photoURL}
              alt="User Avatar"
              className="w-32 h-32 rounded-full border-4 border-primary"
            />
          </div>

          <h2 className="text-xl font-semibold mt-4">{name || user?.displayName}</h2>
          <p className="text-gray-500">{user?.email}</p>

          {/* Role Badge */}
          <div className="mt-3">
            <span className="badge badge-primary badge-outline">
              Customer
            </span>
          </div>

<div className=" w-2xl p-6 mx-auto">
          <h3 className="text-xl font-semibold mb-4">Update Profile</h3>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Profile Image URL</span>
              </label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}

                placeholder="Enter image URL"
                className="input input-bordered w-full"
              />
            </div>

            <div className="pt-2">
              <button className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>


        </div>
        
        </div>
    );
};

export default UpdateProfile;