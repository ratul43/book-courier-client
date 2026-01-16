import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import useAxios from "../hooks/useAxios";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();
  const [show, setShow] = useState(false);
  const axiosModel = useAxios();
  const navigate = useNavigate();

  const handleRegister = (data) => {
    const defaultImage =
      "https://www.svgrepo.com/show/452030/avatar-default.svg";

    registerUser(data.Email, data.Password)
      .then(() => {
        if (data.Image && data.Image[0]) {
          const profileImg = data.Image[0];
          const formData = new FormData();
          formData.append("image", profileImg);

          const image_API_URL = `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_image_host_key
          }`;

          axiosModel.post(image_API_URL, formData).then((res) => {
            completeRegistration(data, res.data.data.url);
          });
        } else {
          completeRegistration(data, defaultImage);
        }
      })
      .catch((error) => toast.error(error.message.slice(10)));
  };

  const completeRegistration = (data, photoURL) => {
    const userProfile = {
      displayName: data.Name,
      photoURL,
    };

    const profileData = {
      name: data.Name,
      email: data.Email,
      photo: photoURL,
      role: "customer",
    };

    updateUserProfile(userProfile)
      .then(() => {
        axiosModel.post("/users", profileData);
        toast.success("User Registration successful");
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="min-h-screen flex items-start justify-center px-4">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 gap-8 items-center">
          {/* Left Text */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Register now!
            </h1>
            <p className="text-gray-500 mt-2">
              Create an account to explore books
            </p>
          </div>

          {/* Form Card */}
          <div className="card bg-base-100 shadow-2xl w-full">
            <div className="card-body p-6 md:p-8">
              <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    {...register("Name", { required: true })}
                    placeholder="Your name"
                  />
                  {errors.Name && (
                    <p className="text-red-500 text-sm mt-1">
                      Name is required
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    {...register("Email", { required: true })}
                    placeholder="Your email"
                  />
                  {errors.Email && (
                    <p className="text-red-500 text-sm mt-1">
                      Email is required
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    className="input input-bordered w-full pr-10"
                    {...register("Password", {
                      required: true,
                      minLength: 8,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                    })}
                    placeholder="Password"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-9 cursor-pointer text-gray-600"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>

                  {errors.Password?.type === "required" && (
                    <p className="text-red-500 text-sm mt-1">
                      Password is required
                    </p>
                  )}
                  {errors.Password?.type === "minLength" && (
                    <p className="text-red-500 text-sm mt-1">
                      Minimum 8 characters
                    </p>
                  )}
                  {errors.Password?.type === "pattern" && (
                    <p className="text-red-500 text-sm mt-1">
                      Must include uppercase, lowercase, number & symbol
                    </p>
                  )}
                </div>

                {/* Image */}
                <div>
                  <label className="label">Profile Image </label>
                  <input
                    type="file"
                    {...register("Image")}
                    className="file-input file-input-bordered w-full"
                  />
                </div>

                {/* Submit */}
                <button className="btn btn-neutral w-full mt-4">
                  Register
                </button>

                {/* Login Link */}
                <p className="text-sm text-center text-gray-400 mt-4">
                  Already have an account?
                  <Link
                    to="/login"
                    className="ml-1 font-semibold text-primary hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
