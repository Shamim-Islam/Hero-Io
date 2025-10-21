import React from "react";
import logoImg from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `relative pb-1 font-semibold transition 
          ${
            isActive
              ? "active after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
              : "text-gray-600 hover:text-purple-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:bg-purple-400"
          }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  `relative pb-1 font-semibold transition 
          ${
            isActive
              ? "active after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
              : "text-gray-600 hover:text-purple-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:bg-purple-400"
          }`
                }
              >
                Apps
              </NavLink>

              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  `relative pb-1 font-semibold transition 
          ${
            isActive
              ? "active after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
              : "text-gray-600 hover:text-purple-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:bg-purple-400"
          }`
                }
              >
                Installation
              </NavLink>
            </ul>
          </div>
          <NavLink to="/">
            <div className="flex gap-3 items-center">
              <img src={logoImg} alt="" className="w-[40px]" />
              <span className="text-lg font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                HERO.IO
              </span>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <nav className="flex gap-8 items-center">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative pb-1 font-semibold transition 
          ${
            isActive
              ? "active after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
              : "text-gray-600 hover:text-purple-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:bg-purple-400"
          }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `relative pb-1 font-semibold transition 
          ${
            isActive
              ? "active after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
              : "text-gray-600 hover:text-purple-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:bg-purple-400"
          }`
              }
            >
              Apps
            </NavLink>

            <NavLink
              to="/installation"
              className={({ isActive }) =>
                `relative pb-1 font-semibold transition 
          ${
            isActive
              ? "active after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
              : "text-gray-600 hover:text-purple-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:bg-purple-400"
          }`
              }
            >
              Installation
            </NavLink>
          </nav>
        </div>
        <div className="navbar-end">
          <a
            className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[16px] font-semibold"
            href="https://github.com/Shamim-Islam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
