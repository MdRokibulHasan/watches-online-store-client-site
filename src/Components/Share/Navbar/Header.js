import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="container-fluid">
      <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
        <Navbar.Brand className="m-5" to="/home">
          Watch Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav justify-content-end">
          <Nav className="item">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Product</NavLink>
            <NavLink to="/home">Blogs</NavLink>
            <NavLink to="/">Contact</NavLink>
          </Nav>

          <Nav className="item-info ">
            {user?.email ? (
              <NavLink onClick={logOut} to="/login">
                Log Out
              </NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
              //  <NavLink to="/register">Register</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
