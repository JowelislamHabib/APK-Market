import React from "react";

import logo from "../../../assets/images/Logo.webp";
import { NavLink } from "react-router";
import { MdCloudUpload } from "react-icons/md";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive ? "text-green-500 font-bold" : ""
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installedapps"
          className={({ isActive }) =>
            isActive ? "text-green-500 font-bold" : ""
          }
        >
          Installed
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-green-500 font-bold" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      {" "}
      <div className="navbar container mx-auto">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex justify-between items-center gap-2">
            <img className="w-[50px]" src={logo} alt="Apk market logo" />
            <h1 className="text-success text-3xl font-bold">APK Market</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-success text-white">
            <MdCloudUpload /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
