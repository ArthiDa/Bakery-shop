import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import { motion as m } from "framer-motion";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
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
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="flex flex-col lg:w-1/2 mx-auto gap-5 mt-5"
          >
            <div className="flex justify-between p-8 rounded-lg border bg-slate-400 items-center">
              <img
                className="w-[100px] h-[100px]"
                src="https://cdn-icons-png.flaticon.com/512/4715/4715128.png"
                alt="blank"
              />
              <h1 className="tracking-wider font-bold text-xl text-white">
                Click to Add Product
              </h1>
              <Link to="/dashboard/addproduct">
                <button className="btn btn-primary btn-outline sm:btn-sm md:btn-md lg:btn-lg">
                  Add Product
                </button>
              </Link>
            </div>
            <div className="flex justify-between p-8 rounded-lg border bg-slate-400 items-center">
              <img
                className="w-[100px] h-[100px]"
                src="https://cdn-icons-png.flaticon.com/512/1524/1524855.png"
                alt="blank"
              />
              <h1 className="tracking-wider font-bold text-xl text-white">
                Click to Manage Product
              </h1>
              <Link to="/dashboard/manageproduct">
                <button className="btn btn-primary btn-outline sm:btn-sm md:btn-md lg:btn-lg">
                  Manage Product
                </button>
              </Link>
            </div>
            <div className="flex justify-between p-8 rounded-lg border bg-slate-400 items-center mb-5">
              <img
                className="w-[100px] h-[100px]"
                src="https://cdn-icons-png.flaticon.com/512/9752/9752284.png"
                alt="blank"
              />
              <h1 className="tracking-wider font-bold text-xl text-white">
                Click to View Orders
              </h1>
              <Link to="/dashboard/vieworder">
                <button className="btn btn-primary btn-outline sm:btn-sm md:btn-md lg:btn-lg">
                  View Orders
                </button>
              </Link>
            </div>
          </m.div>
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

export default Dashboard;
