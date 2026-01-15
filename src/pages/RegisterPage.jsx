import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
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

  const axiosModel = useAxios()
  const navigate = useNavigate();

  const handleRegister = (data) => {
    // Set default image URL
    const defaultImage =
      "https://www.svgrepo.com/show/452030/avatar-default.svg";

    registerUser(data.Email, data.Password)
      .then(() => {
        // Check if image exists
        if (data.Image && data.Image[0]) {
          const profileImg = data.Image[0];
          const formData = new FormData();
          formData.append("image", profileImg);

          const image_API_URL = `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_image_host_key
          }`;

          axiosModel.post(image_API_URL, formData).then((res) => {
            // Use uploaded image
            completeRegistration(data, res.data.data.url);
          });
        } else {
          // Use default image
          completeRegistration(data, defaultImage);
        }
      })
      .catch((error) => {
        toast.error(error.message.slice(10));
      });
  };

  // Helper function to complete registration
  const completeRegistration = (data, photoURL) => {
    const userProfile = {
      displayName: data.Name,
      photoURL: photoURL,
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
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset">
                  <div>
                    <label className="label">Name</label>
                    <input
                      type="name"
                      className="input"
                      {...register("Name", { required: true })}
                      placeholder="Name"
                    />
                    {errors.Name?.type === "required" && (
                      <p className="text-red-500">Name is required</p>
                    )}
                  </div>

                  {/* Email  */}
                  <div>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input"
                      {...register("Email", { required: true })}
                      placeholder="Email"
                    />
                    {errors.Email?.type === "required" && (
                      <p className="text-red-500">Email is required</p>
                    )}
                  </div>

                  {/* Password  */}
                  <div className="relative">
                    <label className="label">Password</label>
                    <input
                      type={show ? "text" : "password"}
                      className="input"
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
                      className="absolute right-2 top-9 cursor-pointer z-50"
                    >
                      {show ? <FaEye /> : <IoEyeOff />}
                    </span>
                    {errors.Password?.type === "required" && (
                      <p className="text-red-500">Password is required</p>
                    )}
                    {errors.Password?.type === "minLength" && (
                      <p className="text-red-500">
                        Password must be at least 8 characters
                      </p>
                    )}
                    {errors.Password?.type === "pattern" && (
                      <p className="text-red-500">
                        Password must have at least one uppercase,
                        <br /> one lowercase, one number,
                        <br /> and one special characters
                      </p>
                    )}
                  </div>

                  {/* Image  */}
                  <label className="label">Image</label>
                  <input
                    type="file"
                    {...register("Image")}
                    className="file-input"
                  />

                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>

                  <p className="px-6 mt-2 text-sm text-center text-gray-400">
                    Already have an account?
                    <Link
                      to="/login"
                      className="hover:underline hover:text-lime-500 mx-1 font-semibold text-gray-600"
                    >
                      Login
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
