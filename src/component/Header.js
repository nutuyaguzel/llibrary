import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">
         Library
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link  to={"/"} className="nav-link active" aria-current="page" href="#">
                kitap işlemleri 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  );
};

export default Header;
