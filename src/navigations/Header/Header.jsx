"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Header.css";

const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = typeof window !== "undefined" ? useRouter() : null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (event, id, isExternal = false) => {
    event.preventDefault();
    if (isExternal) {
      window.location.href = id; // For external links
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    if (!isLoggedIn && router) {
      router.push("/login"); // Navigate to the login page using useRouter
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/assets/images/logo.png" alt="Logo" className="logo-img" />
        <div className="logo">ASCOT Clinic</div>
      </div>
      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li className="nav-item">
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#features" onClick={(e) => handleLinkClick(e, "features")}>
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            {!isLoggedIn ? (
              <a href="/login" onClick={handleLoginClick}>
                Log In
              </a>
            ) : (
              <span>Profile</span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
