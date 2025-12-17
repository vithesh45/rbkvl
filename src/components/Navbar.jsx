import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>rbkvl</NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>

          {/* ABOUT DROPDOWN - FULL LIST */}
          <div className="dropdown">
            <span className="dropdown-title">About Us</span>
            <div className="dropdown-menu">
              <NavLink to="/about/company-profile" onClick={closeMenu}>Company Profile</NavLink>
              <NavLink to="/about/mission-vision" onClick={closeMenu}>Mission & Vision</NavLink>
              <NavLink to="/about/board" onClick={closeMenu}>Board of Directors</NavLink>
              <NavLink to="/about/section-heads" onClick={closeMenu}>Section Heads</NavLink>
              <NavLink to="/about/human-resources" onClick={closeMenu}>Human Resources</NavLink>
              <NavLink to="/about/objectives" onClick={closeMenu}>Objectives</NavLink>
              <NavLink to="/about/quality-policies" onClick={closeMenu}>Quality Policies</NavLink>
              <NavLink to="/about/milestones" onClick={closeMenu}>Milestones</NavLink>
              <NavLink to="/about/activities" onClick={closeMenu}>Activities</NavLink>
            </div>
          </div>

          {/* PRODUCTS DROPDOWN - FULL LIST */}
          <div className="dropdown">
            <span className="dropdown-title">Products</span>
            <div className="dropdown-menu">
              <NavLink to="/products" onClick={closeMenu}>All Products</NavLink>
              <NavLink to="/products/milk" onClick={closeMenu}>Milk</NavLink>
              <NavLink to="/products/curd" onClick={closeMenu}>Curd</NavLink>
              <NavLink to="/products/ghee" onClick={closeMenu}>Ghee</NavLink>
              <NavLink to="/products/butter" onClick={closeMenu}>Butter</NavLink>
              <NavLink to="/products/paneer" onClick={closeMenu}>Paneer</NavLink>
            </div>
          </div>

          <NavLink to="/units" onClick={closeMenu}>Units</NavLink>
          <NavLink to="/news" onClick={closeMenu}>News</NavLink>
          <NavLink to="/notifications" onClick={closeMenu}>Notifications</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}