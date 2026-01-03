import React from "react";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="name" className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <label className="label">Image</label>
                <input type="file" className="file-input" />

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
