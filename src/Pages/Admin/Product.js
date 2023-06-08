import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ item }) => {
  const { _id, name, img, price } = item;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const navigate = useNavigate();
  const handleDelete = () => {
    console.log('clicked', _id);
    fetch(`http://localhost:5000/product/delete/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then(res => res.json())
      .then(data => {
        toast("Product Deleted Successfully")
        navigate('/dashboard');
      })
  }
  return (
    <div className="flex justify-between items-center rounded-xl p-5 drop-shadow-xl bg-slate-300">
      <div className="flex gap-3 items-center">
        <img
          className="h-[80px] w-[100px] rounded-lg"
          src={img}
          alt=""
        />
        <div>
          <h1 className="font-semibold text-xl tracking-wider">
            {name}
          </h1>
          <span>Price - Tk.{price}</span>
        </div>
      </div>
      <div className="flex gap-8">
        <button onClick={handleDelete}>
          <img
            className="h-[50px] w-[50px] transition ease-in-out delay-150 hover:-translate-y-3 "
            src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
            alt=""
          />
        </button>
        <Link to={`/dashboard/manageproduct/update/${_id}`}>
          <img
            className="h-[50px] w-[50px] h-[50px] w-[50px] transition ease-in-out delay-100 hover:-translate-y-3"
            src="https://cdn-icons-png.flaticon.com/512/10308/10308386.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Product;