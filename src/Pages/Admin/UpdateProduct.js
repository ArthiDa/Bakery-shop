import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const UpdateProduct = () => {
    const {_id} = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    id: _id,
    name: "",
    price: 0,
    img: "",
    description: "",
    category: "",
    weight: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const {name,price,img,description,category,weight} = details;
  useEffect(()=>{
    fetch(`http://localhost:5000/products/${_id}`)
    .then(res=>res.json())
    .then(data=>{
        setDetails(data);
    });
  },[])
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { name, price, img, category, description, weight };
    updateInDB(newProduct);
  };
  const updateInDB = (product) => {
    fetch(`http://localhost:5000/products/update/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        toast('Product Updated Successfully :)')
        navigate("/dashboard");
      });
  };
  const onCourseDataChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="w-2/4 mx-auto shadow-lg p-5 mt-5 rounded-xl"
    >
      <h1 className="text-3xl text-center font-bold py-10 tracking-wider">
        Update Product
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
          <div>
            <span className="text-xl  font-semibold">Name:</span>
            <input
              type="text"
              onChange={onCourseDataChange}
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              value={name}
              name="name"
              required
            />
          </div>
          <div>
            <span className="text-xl font-semibold">Price:</span>
            <input
              onChange={onCourseDataChange}
              type="number"
              min="100"
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              value={price}
              name="price"
              required
            />
          </div>
          <div>
            <span className="text-xl  font-semibold">Image:</span>
            <input
              onChange={onCourseDataChange}
              type="text"
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              value={img}
              name="img"
              required
            />
          </div>
          <div>
            <span className="text-xl  font-semibold">Description:</span>
            <textarea
              onChange={onCourseDataChange}
              type="text"
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              value={description}
              name="description"
              required
            />
          </div>
          <div>
            <span className="text-xl  font-semibold">Categories:</span>
            <select
              onChange={onCourseDataChange}
              type="text"
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              value={category}
              name="category"
              required
            >
              <option value="Cakes">
                Cakes
              </option>
              <option value="Cookies">Cookies</option>
              <option value="Breads">Breads</option>
            </select>
          </div>
          <div>
            <span className="text-xl font-semibold">Weight(gm):</span>
            <input
              onChange={onCourseDataChange}
              type="number"
              min="100"
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              value={weight}
              name="weight"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <button
            type="submit"
            className="btn btn-primary btn-outline px-5 py-2 font-bold text-xl text-black rounded my-2"
          >
            Update Product
          </button>
        </div>
      </form>
    </m.div>
  );
};

export default UpdateProduct;
