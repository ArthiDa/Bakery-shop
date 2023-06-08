import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assests/login.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { motion as m } from 'framer-motion';


const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { createUser, updateUser, user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registerError, setRegisterError] = useState("");
  const [createUserEmail, setCreateUserEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  

  if (user?.uid) {
    navigate("/");
  }
  const handleRegister = (data) => {
    setRegisterError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user,data);
        toast("Registration Successful");
        const userInfo = {
          displayName: data.name
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.error(err));
        // navigate(from, {replace: true});
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }
  return (
    <m.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 0 }} className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Register</h1>
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is Required",
                })}
                placeholder="Enter Your Email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                })}
                placeholder="Enter Your Password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
              {registerError && <p className="text-red-600">{registerError}</p>}
            </div>
          </form>
          <p className="text-center">
            Already Have An Account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>{" "}
          </p>
          {/* <div className="divider">OR</div> */}
        </div>
      </div>
    </m.div>
  );
};

export default Register;
