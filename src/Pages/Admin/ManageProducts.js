import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Product from "./Product";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="lg:w-1/2 lg:mx-auto my-3 flex flex-col gap-3"
    >
      {
        products.map(product=><Product key={product._id} item={product}></Product>)
      }
    </m.div>
  );
};

export default ManageProducts;
