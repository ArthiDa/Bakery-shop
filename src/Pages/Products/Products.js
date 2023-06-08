import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
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
    >
      <div className="my-3 grid lg:grid-cols-3 gap-10 lg:w-2/3 mx-auto">
        {products.length &&
          products.map((p) => <Product key={p._id} product={p}></Product>)}
      </div>
    </m.div>
  );
};

export default Products;
