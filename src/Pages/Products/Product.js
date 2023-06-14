import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import useAdmin from "../../hooks/useAdmin";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20%",
    background: "rgb(217,238,174)",
    background:
      "radial-gradient(circle, rgba(217,238,174,0.8353466386554622) 0%, rgba(212,239,241,0.9360994397759104) 100%)",
  },
};

Modal.setAppElement("body");

const Product = ({ product }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [isAdmin] = useAdmin(user?.email);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const navigate = useNavigate();
  const handleOrder = (event) => {
    event.preventDefault();
    if (user?.email) {
      const userEmail = user.email;
      const userName = user.name;
      const productId = product._id;
      const productName = product.name;
      const productPrice = product.price;
      const newOrder = {
        userEmail,
        userName,
        productId,
        productName,
        productPrice,
      };
      fetch(`http://localhost:5000/order/${user.email}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Successfully Ordered :)");
          closeModal();
        });
    }
    else{
      navigate('/login')
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <img src={product.img} alt="Foods" className="rounded-t-xl" />
      <div className="card-body items-center text-center">
        <h2 className="card-title ">Tk.{product.price}</h2>
        <p className="hover:text-blue-400 text-gray-500 text-lg font-semibold">
          {product.name}
        </p>
        <h2 className="card-title ">{product.weight}gm</h2>
        <div className="card-actions">
          {isAdmin && (
            <Link
              to={`/dashboard/manageproduct/update/${product._id}`}
              className="btn btn-primary"
            >
              Update Product
            </Link>
          )}
          {!isAdmin && (
            <button onClick={openModal} className="btn btn-primary">
              Buy Now
            </button>
          )}

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2
              className="text-center text-2xl font-bold mb-3"
              ref={(_subtitle) => (subtitle = _subtitle)}
            >
              Order Now
            </h2>
            <div className="flex items-center gap-4">
              <img
                className="h-[250px] w-[250px] rounded-lg"
                src={product.img}
                alt=""
              />
              <div>
                <h1 className="font-bold text-xl tracking-wider">
                  {product.name}
                </h1>
                <p>Price: {product.price}TK</p>
                <p>Weight: {product.weight}gm</p>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="text-center my-3">
              <form onSubmit={handleOrder}>
                <button type="submit" className="btn btn-primary">
                  Order
                </button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Product;
