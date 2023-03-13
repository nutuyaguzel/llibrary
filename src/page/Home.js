import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import ListBooks from "../component/ListBooks";
import { useSelector } from "react-redux";

const Home = () => {

  return (
    <div>
      <Header />
      <ListBooks/>
      <h1>Anasayfa</h1>

      
    </div>
  );
};

export default Home;
