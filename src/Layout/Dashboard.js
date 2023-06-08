import React from "react";
import Header from "../Shared/Header";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import { motion as m } from "framer-motion";

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
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
  );
};

export default Dashboard;
