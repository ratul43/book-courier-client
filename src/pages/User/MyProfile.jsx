import React, { useEffect, useRef } from "react";
import useAuth from "./../../hooks/useAuth";
import { Link } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useImage from "../../hooks/useImage";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useRole from "../../hooks/useRole";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure()
  const {role} = useRole()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    reset({
      name: user?.displayName
    })
  }, [reset, user?.displayName])

  const uploadImage = useImage();

  const handleUpdate = async (data) => {
    // console.log(data);
    let imageURL = undefined;

    // 1️⃣ Upload image ONLY if a new file is selected
    if (data.Image && data.Image.length > 0) {
      imageURL = await uploadImage(data);
    }

    const updatedProfile = {
      displayName: data.name,
      ...(imageURL && { photoURL: imageURL }), // conditional property
    };

    const updateProfileForDataBase = {
      name: data.name, 
      ...(imageURL && { photo: imageURL }), // conditional property
    }

    console.log(data.name);
    const updateProfileForReviewSection = {
      userName: data.name || "Annonymous",
   ...(imageURL && { userPhoto: imageURL }), // conditional property

    }
    await updateUserProfile(updatedProfile)
    await axiosSecure.patch(`/users?email=${user.email}`, updateProfileForDataBase)
    .then(()=>{
      reset()
        toast.success("Profile updated")
      })
      console.log(user.email);
      await axiosSecure.patch(`/comment/user/update?email=${user.email}`, updateProfileForReviewSection)
      .then((res)=>{
        console.log(res.data);
      })
  };

  if(role){
    return (
    <div>
      {/* Update Profile Form */}
      <div className="card bg-base-100 shadow-lg p-6 text-center grid md:grid-cols-2">
        <div>
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
          <span className="badge badge-primary badge-outline">{role.charAt(0).toUpperCase() + role.slice(1)}</span>
        </div>
        </div>
        
<div>
  <div className="p-6 mx-auto">
          <h3 className="text-xl font-semibold mb-4">Update Profile</h3>

          <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                {...register("name")}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Profile Image </span>
              </label>

              <input
                type="file"
                className="file-input w-full"
                {...register("Image")}
              />
            </div>

            <div className="pt-2">
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
</div>
        
      </div>
    </div>
  );
  }

  
};

export default MyProfile;
