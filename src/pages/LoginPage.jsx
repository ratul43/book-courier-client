import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';
import { Link } from 'react-router';

const LoginPage = () => {
    return (
        <div>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
              

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>

    <p className="px-6 mt-2 text-sm text-center text-gray-400">
          Don't have an account?
          <Link
            to="/login"
            className="hover:underline hover:text-lime-500 mx-1 font-semibold text-gray-600"
          >
            Register
          </Link>
          
        </p>

    <div className="flex justify-between items-center pt-4">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-center text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

 <div className="flex space-x-4 mx-auto">
      <a>
        <FcGoogle size={32}/>

      </a>
      <a>
        <GrGithub size={32}/>
      </a>
      <a>
        <FaFacebook size={32} />

      </a>
    </div>

              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default LoginPage;