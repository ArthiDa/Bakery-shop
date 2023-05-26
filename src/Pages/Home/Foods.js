import React from "react";
import { Link } from "react-router-dom";

const Foods = ({ foods }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <Link to="/">
        <img
          src="https://breadandbeyondbd.com/Ecom/Product/ButterCroissant45gm1638349906mRiFS.jpg"
          alt="Shoes"
          className="rounded-t-xl"
        />
      </Link>
      <div className="card-body items-center text-center">
        <h2 className="card-title ">Tk.{foods.Price}</h2>
        <Link to="/">
          <p className="hover:text-blue-400 text-gray-500 text-lg font-semibold">
            {foods.name}
          </p>
        </Link>

        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Foods;
