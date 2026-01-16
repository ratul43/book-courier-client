import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import bookTruck from "../assets/rsz_1booktruck.png";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");

    html.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logOut();
    toast.success("Logout successful");
  };

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <nav className="flex items-center h-20 px-6 justify-between border-b border-gray-300 relative z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          className="h-20 hidden lg:block"
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold underline underline-offset-2"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) =>
            isActive
              ? "text-primary font-bold underline underline-offset-2"
              : ""
          }>About</NavLink>
        <NavLink
          to="/allBooks"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold underline underline-offset-2"
              : ""
          }
        >
          Books
        </NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
            isActive
              ? "text-primary font-bold underline underline-offset-2"
              : ""
          }>Contact</NavLink>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-3">
        {user ? (
          <>
            <button onClick={handleLogout} className="btn btn-outline btn-sm">
              Logout
            </button>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="photo" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/dashboard/my-profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>

            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle"
            />
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm">
              Register
            </Link>

            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle"
            />
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-base-100 shadow-md flex flex-col gap-4 px-6 py-6 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/allBooks" onClick={() => setIsOpen(false)}>
            Books
          </Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <div className="flex gap-3 pt-2">
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline btn-sm"
                >
                  Logout
                </button>

                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img alt="photo" src={user?.photoURL} />
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-20 p-2 bg-base-100"
                  >
                    <li>
                      <Link to="/dashboard/my-profile">Profile</Link>
                    </li>

                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>

                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle"
                />
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline btn-sm">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm">
                  Register
                </Link>

                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle"
                />
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
