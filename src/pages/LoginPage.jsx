import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
        
  const {signInGoogle} = useAuth()
  const navigate = useNavigate()

  const handleGoogleSignIn = ()=>{
    signInGoogle()
    .then(result => {
      console.log(result.user);
      navigate("/")
    })
    .catch(error=>{
      console.log(error.message);
    })
  }




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
            to="/register"
            className="hover:underline hover:text-lime-500 mx-1 font-semibold text-gray-600"
          >
            Register
          </Link>
          
        </p>


      <h3 className='text-center'>OR</h3>

      {/* Google */}
<button onClick={handleGoogleSignIn} className="btn bg-white text-black w-full border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>


              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default LoginPage;