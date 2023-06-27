import React, { useEffect, useMemo, useState } from "react";
import Filter from "./Filter";
import Product from "../Products/Product";

const Categories = () => {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => {
    fetch('https://bakery-shop-server.onrender.com/products')
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      setItems(data);
      setFiltered(data);
    })
  }, []);
  return (
    <div className="mb-5">
      <Filter 
        items = {items}
        setFiltered = {setFiltered}
        activeCategory = {activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="w-4/5 my-8 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2">
        {filtered.slice(0,4).map((p) => (
          <Product key={p._id} product={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Categories;
