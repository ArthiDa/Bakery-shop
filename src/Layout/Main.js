import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const Main = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar lg:flex lg:justify-evenly lg:items-center bg-slate-100">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <Link to="/" className="btn btn-ghost normal-case text-3xl">
              BakeryShop
            </Link>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal text-xl font-bold">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal text-xl font-bold">
                {user?.uid ? (
                  <>
                    <li>
                      {isAdmin ? (
                        <Link to="/dashboard">Dashboard</Link>
                      ) : (
                        <Link to="/">Profile</Link>
                      )}
                    </li>
                    <li>
                      <Link onClick={handleLogOut} to="/">
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-3/4 h-full bg-base-200">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  {isAdmin ? (
                    <Link to="/dashboard">Dashboard</Link>
                  ) : (
                    <Link to="/">Profile</Link>
                  )}
                </li>
                <li>
                  <Link onClick={handleLogOut} to="/">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
