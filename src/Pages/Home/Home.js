import React, { useEffect } from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import Categories from "./Categories";
import Cakes from "./Cakes";
import { motion as m } from "framer-motion";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <Banner></Banner>
      <Feature></Feature>
      <Categories></Categories>
      <Cakes></Cakes>
      <Contact></Contact>
    </m.div>
  );
};

export default Home;
