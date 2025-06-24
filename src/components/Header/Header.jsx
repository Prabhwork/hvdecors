import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { RiLeafLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/all-images/logo.png";
import "../../styles/header.css";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/product-inventory", display: "Product" },
  { path: "/contact", display: "Contact" },
];


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => setMenuOpen(!menuOpen);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header__top">
        <Container>
  <div className="header__mobile-row">
    <div className="logo d-flex align-items-center">
      <Link to="/" className="d-flex align-items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          style={{ height: "50px", width: "auto" }}
        />
      </Link>
    </div>

    <a
      href="https://wa.me/918377875838"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp className="whatsapp-icon" /> Message
    </a>

    <div className="hamburger-menu" onClick={toggleMenu}>
      <GiHamburgerMenu size={24} />
    </div>
  </div>
</Container>

      </div>

      {menuOpen && (
        <div className="dropdown-menu-custom">
          <div className="close-icon" onClick={() => setMenuOpen(false)}>
            &#10005;
          </div>

          <div className="menu-links">
            <Link to="/home" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About us</Link>
            <Link to="/product-inventory" onClick={toggleMenu}>Products</Link>
            <Link to="/brands" onClick={toggleMenu}>Brands</Link>

            <hr />
            <Link to="/faq" onClick={toggleMenu}>FAQ’s</Link>
            <Link to="/blogs" onClick={toggleMenu}>Blogs</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          </div>

          <div className="bottom-section">
            <p>+91 99103 20803 | <a href="mailto:info@furnishandshade.com">info@furnishandshade.com</a></p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fas fa-globe"></i></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
