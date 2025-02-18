import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">Group 2</div>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#profiles" className="nav-item">
          Team Profiles
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
