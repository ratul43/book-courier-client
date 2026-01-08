import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();
  const navigate = useNavigate()

  const handleRegister = (data) => {
    console.log(data);
  //   registerUser(data.Email, data.Password)
  //     .then((result) => {
  //       navigate("/")
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
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
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    {...register("Email")}
                    placeholder="Email"
                  />
                  {errors.Email?.type === "required" && (
                    <p className="text-red-500">Email is required</p>
                  )}

                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    {...register("Password", {
                      required: true,
                      minLength: 8,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                    })}
                    placeholder="Password"
                  />
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
