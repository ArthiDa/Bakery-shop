import React, { useEffect, useMemo, useState } from "react";
import Filter from "./Filter";
import Product from "../Products/Product";

const Categories = () => {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => {
    fetch('http://localhost:5000/products')
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
      <div className="w-4/5 my-8 mx-auto grid lg:grid-cols-4 grid-cols-1 grid-flow-col gap-4">
        {filtered.slice(0,4).map((p) => (
          <Product key={p._id} product={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Categories;
