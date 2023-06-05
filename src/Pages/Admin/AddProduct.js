import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const img = form.img.value;
    const category = form.category.value;
    const description = form.desc.value;
    const weight = form.weight.value;
    const newProduct = { name, price, img, category, description, weight };
    console.log(newProduct);
    saveInDB(newProduct);
    // console.log(name);
  };
  const saveInDB = (product) => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/dashboard');
      });
  };
  return (
    <div className="w-2/4 mx-auto shadow-lg p-5 mt-5 rounded-xl">
      <h1 className="text-3xl text-center font-bold py-10 tracking-wider">
        Add Product
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
          <div>
            <span className="text-xl  font-semibold">Name:</span>
            <input
              type="text"
              // onChange={onCourseDataChange}
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              placeholder="Enter the product tittle"
              // value={tittle}
              name="name"
              required
            />
          </div>
          <div>
            <span className="text-xl font-semibold">Price:</span>
            <input
              // onChange={onCourseDataChange}
              type="number"
              min="100"
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              placeholder="Enter the product price"
              // value={price}
              name="price"
              required
            />
          </div>
          <div>
            <span className="text-xl  font-semibold">Image:</span>
            <input
              // onChange={onCourseDataChange}
              type="text"
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              placeholder="Enter the product image link"
              // value={img}
              name="img"
              required
            />
          </div>
          <div>
            <span className="text-xl  font-semibold">Description:</span>
            <textarea
              // onChange={onCourseDataChange}
              type="text"
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              placeholder="Enter the product description"
              // value={description}
              name="desc"
              required
            />
          </div>
          <div>
            <span className="text-xl  font-semibold">Categories:</span>
            <select
              // onChange={onCourseDataChange}
              type="text"
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              placeholder="Enter the course category"
              // value={category}
              name="category"
              required
            >
              <option defaultChecked value="Cakes">
                Cakes
              </option>
              <option value="Cookies">Cookies</option>
              <option value="Breads">Breads</option>
            </select>
          </div>
          <div>
            <span className="text-xl font-semibold">Weight(gm):</span>
            <input
              // onChange={onCourseDataChange}
              type="number"
              min="100"
              className="p-4 bg-[#dfdfdf94] shadow-sm rounded w-full my-4"
              placeholder="Enter the product weight"
              // value={price}
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
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
