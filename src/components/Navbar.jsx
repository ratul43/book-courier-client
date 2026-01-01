import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative">
      {/* Logo */}
      <a href="https://prebuiltui.com">
        <img
          className="h-9"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
          alt="Logo"
        />
      </a>

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

        {/* Search */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <svg width={18} height={18} viewBox="0 0 14 14" fill="none">
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5"
              stroke="#615fff"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full flex items-center justify-center">
            3
          </span>
        </div>

        <button className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full">
          Login
        </button>

        <button className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
