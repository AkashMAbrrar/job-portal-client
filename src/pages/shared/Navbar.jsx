import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import logoTop from "../../assets/logo/icons8-career-30.png";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleSingOut = () => {
    logOutUser()
      .then(() => {
        console.log("Log out successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink className="text-xl font-semibold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-xl font-semibold" to="/myApplications">
          My Applications
        </NavLink>
      </li>
      <li>
        <NavLink className="text-xl font-semibold" to="/addJob">
          Add A Job
        </NavLink>
      </li>
      <li>
        <NavLink className="text-xl font-semibold" to="/myPostedJob">
          My Posted Jobs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Career <img src={logoTop} alt="" /> Build
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p>{user?.email.slice(0, 6)}</p>
            <button
              onClick={handleSingOut}
              className="btn btn-error text-white font-bold">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="btn btn-accent">
              Register
            </Link>
            <Link to="/signin" className="btn btn-primary ml-1">
              Sing In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
