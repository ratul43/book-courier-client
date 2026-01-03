import React from 'react';
import bookTruck from "../assets/rsz_1booktruck.png"
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
            <Link className="flex items-center" to="/">
        <img
          className="h-24 pt-4 object-center hidden md:block"
          src={bookTruck}
          alt="Logo"
        />
        <h1 className="font-extrabold hidden md:block ubuntu-bold-italic">BookCourier</h1>
      </Link>
        </div>
    );
};

export default Logo;