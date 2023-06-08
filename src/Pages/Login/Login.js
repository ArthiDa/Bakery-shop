import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assests/login.svg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { motion as m } from 'framer-motion';


const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    
  }, [])
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, user, setIsAdmin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  if (user?.uid) {
    navigate("/");
  }
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

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
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="Enter Your Email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
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
                })}
                placeholder="Enter Your Password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
          </form>
          <p className="text-center">
            Don't Have An Account?{" "}
            <Link className="text-orange-600 font-bold" to="/register">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default Login;
