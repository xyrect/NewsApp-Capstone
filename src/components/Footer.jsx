import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="text-light text-center py-1" style={{backgroundColor: "black"}}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "65px", width: "auto", marginRight: "2px" }}
          />
          <h5 className="mb-0" style={{ fontSize: "18px" }}>
            &copy; {new Date().getFullYear()} NewsSphere.
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
