import React, { useState } from "react";
import { Link } from "react-router";
import bookTruck from "../assets/rsz_1booktruck.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center h-20 px-6 md:px-10 justify-between border-b border-gray-300 bg-white relative z-50">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          className="h-14 hidden md:block"
          src={bookTruck}
          alt="BookCourier"
        />
        <h1 className="font-extrabold text-xl ubuntu-bold-italic">
          BookCourier
        </h1>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <svg width={24} height={18} viewBox="0 0 24 18" fill="none">
          <rect width={24} height="2" rx="1" fill="#426287" />
          <rect y="8" width={24} height="2" rx="1" fill="#426287" />
          <rect y="16" width={24} height="2" rx="1" fill="#426287" />
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/allBooks">Books</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <button className="btn btn-outline btn-sm">Login</button>
        <button className="btn btn-primary btn-sm">Register</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-6 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/allBooks" onClick={() => setIsOpen(false)}>Books</Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          <div className="flex gap-3 pt-2">
            <button className="btn btn-outline btn-sm w-full">Login</button>
            <button className="btn btn-primary btn-sm w-full">Register</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
