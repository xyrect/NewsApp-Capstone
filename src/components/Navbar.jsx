import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "../assets/logo.png";

const NavigationBar = () => {
  const location = useLocation();

  const navLinkStyle = (path) => ({
    textDecoration: location.pathname === path ? "underline" : "none",
    textDecorationThickness: "2px",
    textUnderlineOffset: "5px",
    fontWeight: location.pathname === path ? "bold" : "normal",
    color: "white",
  });

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <div className="container">
        <Navbar.Brand as={Link} to="/" style={{ color: "white", fontWeight: "bold" }}>
          <img src={Logo} alt="Logo" style={{ height: "3rem", width: "auto" }} />
          NewsSphere
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex justify-content-center w-100">
            <Nav.Link as={Link} to="/indonesia" style={navLinkStyle("/indonesia")}>Indonesia</Nav.Link>
            <Nav.Link as={Link} to="/programming" style={navLinkStyle("/programming")}>Programming</Nav.Link>
            <Nav.Link as={Link} to="/saved" style={navLinkStyle("/saved")}>Saved</Nav.Link>
          </Nav>
          <SearchBar onSearch={(query) => console.log("Navigating from Navbar with query:", query)} />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
