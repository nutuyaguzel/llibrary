import React from "react";
import Header from "../component/Header";
import ListBooks from "../component/ListBooks";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="d-flex justify-content-end">
          <Button text="Kitap Ekle" onClick={()=>navigate("/add-book")}/>
        </div>

        <ListBooks />
      </div>
    </div>
  );
};

export default Home;
