import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import useAuth from "../hooks/useAuth";
import { IoEyeOff } from "react-icons/io5";
import truckImg from "../assets/rsz_1booktruck.png";

const LoginPage = () => {
  const { signInGoogle, signInUser } = useAuth();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInGoogle();
      console.log(result.user);
      toast.success("Google sign in successful!");
      navigate(location.state || "/");
    } catch (error) {
      console.error("Google sign in error:", error.message);
      toast.error(error.message || "Failed to sign in with Google");
    }
  };

  const handleLogin = async (data) => {
    try {
      await signInUser(data.email, data.password);
      toast.success("Login successful!");
      navigate(location.state || "/");
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error(
        error.message.slice(10) ||
          "Failed to login. Please check your credentials."
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gradient-to-br from-base-100 to-base-200 px-4">
      <div className="w-full max-w-md">
        <Link to="/">
                <img className="mx-auto md:hidden block" src={truckImg} alt="bookTruck" />
        </Link>
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Welcome Back</h1>
          <p className="text-base-content/70">
            Log in to your account to continue
          </p>
        </div>

        <div className="card bg-base-100 shadow-2xl border border-base-300">
          <div className="card-body p-6 md:p-8">
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email Address</span>
                </label>
                <input
                  type="email"
                  className={`input input-bordered w-full ${
                    errors.email ? "input-error" : ""
                  }`}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  </label>
                )}
              </div>

              {/* Password Field */}
              <div className="form-control">
                <div className="relative">
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    className={`input input-bordered w-full  ${
                      errors.password ? "input-error" : ""
                    }`}
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-2 top-9 cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                </div>

                {errors.password && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  </label>
                )}
              </div>

              <div>
                <Link
                  to="/forgot-password"
                  className="label-text-alt link  font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Log In"
                  )}
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="divider my-6">OR</div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full hover:bg-base-200"
                type="button"
              >
                <FcGoogle className="w-5 h-5" />
                <span className="flex-1">Continue with Google</span>
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center mt-6 pt-4 border-t border-base-300">
              <p className="text-base-content/70">
                Don't have an account?{" "}
                <Link to="/register" className="link font-semibold">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
