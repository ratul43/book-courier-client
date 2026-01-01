import React, { useState } from "react";
import { Link } from "react-router";
import bookTruck from "../assets/rsz_1booktruck.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center h-20 px-7 justify-between border-b border-gray-300 bg-white relative">
      {/* Logo */}
      <Link className="flex items-center" to="/">
        <img
          className="h-24 pt-4 object-center hidden md:block"
          src={bookTruck}
          alt="Logo"
        />
        <h1 className="font-extrabold hidden md:block ubuntu-bold-italic">BookCourier</h1>
      </Link>

      {/* Mobile Menu Button */}
      <button
        aria-label="Menu"
        className="sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg width={21} height={15} viewBox="0 0 21 15" fill="none">
          <rect width={21} height="1.5" rx=".75" fill="#426287" />
          <rect x={8} y={6} width={13} height="1.5" rx=".75" fill="#426287" />
          <rect x={6} y={13} width={15} height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[64px] left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-sm sm:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#" onClick={() => setIsOpen(false)}>About</a>
        <a href="#" onClick={() => setIsOpen(false)}>Contact</a>
        <button className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full w-fit">
          Login
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>

        </div>

       <div className="space-x-2">
        
        <button className="px-8 py-2 cursor-pointer bg-indigo-500 pointer hover:bg-indigo-600 text-white rounded-full">
          Login
        </button>

        <button className="px-8 py-2 cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white rounded-full">
          Register
        </button>
       </div>

     
    </nav>
  );
};

export default Navbar;
