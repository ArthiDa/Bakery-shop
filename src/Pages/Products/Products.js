import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetch("https://bakery-shop-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="my-3 grid grid-cols-2 mx-5 lg:grid-cols-3 lg:gap-10 gap-3 lg:w-2/3 lg:mx-auto">
        {products.length &&
          products.map((p) => <Product key={p._id} product={p}></Product>)}
      </div>
    </m.div>
  );
};

export default Products;
